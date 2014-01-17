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
H_BASE = parentModule["_malloc"](560 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 560;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20WorkerMessagingProxyC1EPNS_6WorkerE;
var __ZN7WebCore20WorkerMessagingProxyD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,252,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE=env.__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore30WorkerThreadActivityReportTaskE=(H_BASE+8)|0;
  var __ZTVN7WebCore19WorkerTerminateTaskE=(H_BASE+344)|0;
  var __ZTVN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_EE=(H_BASE+504)|0;
  var __ZTVN7WebCore28NotifyNetworkStateChangeTaskE=(H_BASE+104)|0;
  var __ZTVN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_EE=(H_BASE+536)|0;
  var __ZTVN7WebCore30WorkerGlobalScopeDestroyedTaskE=(H_BASE+40)|0;
  var __ZTVN7WebCore19WorkerExceptionTaskE=(H_BASE+376)|0;
  var __ZTVN7WebCore17MessageWorkerTaskE=(H_BASE+408)|0;
  var __ZTVN7WebCore28MessageWorkerGlobalScopeTaskE=(H_BASE+136)|0;
  var __ZTVN7WebCore16CrossThreadTask1IbbEE=(H_BASE+472)|0;
  var __ZTVN7WebCore30PostMessageToPageInspectorTaskE=(H_BASE+72)|0;
  var __ZTVN7WebCore20WorkerMessagingProxyE=(H_BASE+168)|0;
  var __ZTVN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_EE=(H_BASE+440)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore28MessageWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i2;
 i14 = i1 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = i15;
 __ZN7WebCore11MessagePort13entanglePortsERNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS3_6VectorINS3_6OwnPtrINS_18MessagePortChannelEEELj1ENS3_15CrashOnOverflowEEEEE(i4, i2, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i14 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i14 = i5 + 8 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i5 | 0;
  if ((i15 | 0) != 0) {
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i17 + (i15 << 2) | 0;
   i15 = i17;
   while (1) {
    i17 = HEAP32[i15 >> 2] | 0;
    if ((i17 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i17);
     __ZN3WTF8fastFreeEPv(i17);
    }
    i15 = i15 + 4 | 0;
    if ((i15 | 0) == (i18 | 0)) {
     break;
    }
   }
   HEAP32[i14 >> 2] = 0;
  }
  i14 = HEAP32[i16 >> 2] | 0;
  if (!((i5 + 12 | 0) == (i14 | 0) | (i14 | 0) == 0)) {
   HEAP32[i16 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i2 + 160 | 0;
 i14 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = i4;
 i4 = i9 | 0;
 i18 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i1 = i18 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 i1 = i10 | 0;
 HEAP32[i1 >> 2] = 0;
 i18 = i11 | 0;
 HEAP32[i18 >> 2] = 0;
 i15 = i12 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE(i7, i8, i9, i10, i11, i12);
 i12 = i6 | 0;
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 FUNCTION_TABLE_iii[i14 & 1](i5, i6) | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i5 = i12 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i5 >> 2] = i14;
    break;
   }
   i14 = i12 - 8 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 127](i6);
 }
 i6 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i18 = i6 | 0;
   i15 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i18 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i15 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i19 = __ZN7WebCore26DedicatedWorkerGlobalScope6threadEv(i13) | 0;
  i20 = i19 + 164 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  i22 = i21;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i23 + 32 | 0;
  i25 = HEAP32[i24 >> 2] | 0;
  i26 = i2;
  i27 = __ZNK7WebCore17WorkerGlobalScope18hasPendingActivityEv(i26) | 0;
  FUNCTION_TABLE_vii[i25 & 63](i21, i27);
  STACKTOP = i3;
  return;
 }
 i16 = i6 + 8 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 i15 = i6 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i15 >> 2] | 0;
  i18 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i14 = i1 + 36 | 0;
     i12 = i14 | 0;
     i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i12 >> 2] = i5;
      break;
     }
     i5 = i14 - 36 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] & 127](i5);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i18 | 0)) {
    break;
   }
  }
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i15 >> 2] | 0;
 if (!((i6 + 12 | 0) == (i16 | 0) | (i16 | 0) == 0)) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
 }
 __ZN3WTF8fastFreeEPv(i6);
 i19 = __ZN7WebCore26DedicatedWorkerGlobalScope6threadEv(i13) | 0;
 i20 = i19 + 164 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = i21;
 i23 = HEAP32[i22 >> 2] | 0;
 i24 = i23 + 32 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i2;
 i27 = __ZNK7WebCore17WorkerGlobalScope18hasPendingActivityEv(i26) | 0;
 FUNCTION_TABLE_vii[i25 & 63](i21, i27);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17MessageWorkerTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = HEAP32[i1 + 12 >> 2] | 0;
 i14 = HEAP32[i13 + 16 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i13 + 33 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 8 | 0;
 i15 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i5 | 0;
 HEAP32[i13 >> 2] = i15;
 __ZN7WebCore11MessagePort13entanglePortsERNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS3_6VectorINS3_6OwnPtrINS_18MessagePortChannelEEELj1ENS3_15CrashOnOverflowEEEEE(i4, i2, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = HEAP32[i13 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i13 = i5 + 8 | 0;
  i2 = HEAP32[i13 >> 2] | 0;
  i15 = i5 | 0;
  if ((i2 | 0) != 0) {
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = i16 + (i2 << 2) | 0;
   i2 = i16;
   while (1) {
    i16 = HEAP32[i2 >> 2] | 0;
    if ((i16 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i16);
     __ZN3WTF8fastFreeEPv(i16);
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i17 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
  i13 = HEAP32[i15 >> 2] | 0;
  if (!((i5 + 12 | 0) == (i13 | 0) | (i13 | 0) == 0)) {
   HEAP32[i15 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = i8 | 0;
 HEAP32[i5 >> 2] = i4;
 i4 = i9 | 0;
 i13 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i13;
 if ((i13 | 0) != 0) {
  i1 = i13 | 0;
  tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue + 1, tempValue;
 }
 i1 = i10 | 0;
 HEAP32[i1 >> 2] = 0;
 i13 = i11 | 0;
 HEAP32[i13 >> 2] = 0;
 i15 = i12 | 0;
 HEAP32[i15 >> 2] = 0;
 __ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE(i7, i8, i9, i10, i11, i12);
 i12 = i6 | 0;
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i12 >> 2] = i7;
 __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i14 + 16 | 0, i6) | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i12 = i6 + 8 | 0;
   i14 = i12 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i14 >> 2] = i7;
    break;
   }
   i7 = i12 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 127](i6);
 }
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 | 0;
   i15 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i1 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i6 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i15 = i6 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i15 >> 2] | 0;
  i13 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i7 = i1 + 36 | 0;
     i12 = i7 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i12 >> 2] = i14;
      break;
     }
     i14 = i7 - 36 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 127](i14);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 if (!((i6 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0)) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_viiiiiii + 4;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 4;
}
function __ZN7WebCore20WorkerMessagingProxy22startWorkerGlobalScopeERKNS_3URLERKN3WTF6StringES7_NS_21WorkerThreadStartModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i1 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = i10 - 156 + 68 | 0;
 }
 if ((__ZNK7WebCore8Document4pageEv(i11) | 0) == 0) {
  i12 = 0;
 } else {
  i10 = __ZNK7WebCore8Document4pageEv(i11) | 0;
  i13 = i10 + 160 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  if ((i14 | 0) == 0) {
   __ZN7WebCore4Page9initGroupEv(i10);
   i15 = HEAP32[i13 >> 2] | 0;
  } else {
   i15 = i14;
  }
  i12 = HEAP32[i15 + 104 >> 2] | 0;
 }
 i15 = i11 + 104 | 0;
 i14 = __ZNK7WebCore21ContentSecurityPolicy16deprecatedHeaderEv(HEAP32[i15 >> 2] | 0) | 0;
 i13 = __ZNK7WebCore21ContentSecurityPolicy20deprecatedHeaderTypeEv(HEAP32[i15 >> 2] | 0) | 0;
 __ZN7WebCore21DedicatedWorkerThread6createERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_RNS_17WorkerLoaderProxyERNS_17WorkerObjectProxyENS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE(i7, i2, i3, i12, i4, i1 + 8 | 0, i1 + 4 | 0, i5, i14, i13, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 320 >> 2] & 7](i11) | 0);
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i7;
 i13 = (i7 | 0) == 0;
 if (!i13) {
  i14 = i7 + 4 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 __ZN7WebCore20WorkerMessagingProxy19workerThreadCreatedEN3WTF10PassRefPtrINS_21DedicatedWorkerThreadEEE(i1, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 + 4 | 0;
   i14 = i11 | 0;
   i5 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i14 >> 2] = i5;
    break;
   }
   i5 = i11 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN7WebCore12WorkerThread5startEv(i7 | 0) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i9 = i1 | 0;
 do {
  if ((i8 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 7](i8) | 0) {
    i16 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i8 - 156 + 68 | 0) | 0) | 0;
   } else {
    i16 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i8) | 0;
   }
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation29didStartWorkerGlobalScopeImplEPNS_19InstrumentingAgentsEPNS_22WorkerGlobalScopeProxyERKNS_3URLE(i16, i9, i2);
  }
 } while (0);
 if (i13) {
  STACKTOP = i6;
  return;
 }
 i13 = i7 + 4 | 0;
 i7 = i13 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i6;
  return;
 }
 i2 = i13 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE(i1, i2, i3, i4, i5, i6) {
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
 i11 = __ZN3WTF10fastMallocEj(96) | 0;
 i12 = i8 | 0;
 i13 = i3 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 >> 2] = i3;
 i3 = i9 | 0;
 i13 = i6 | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 i6 = i10 | 0;
 i13 = i2 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore12MessageEventC1EN3WTF10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringES7_NS2_INS_11EventTargetEEENS1_10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEE(i11, i8, i4, i5, i9, i10);
 HEAP32[i1 >> 2] = i11;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i6 = i11 + 8 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  i10 = i11 | 0;
  if ((i1 | 0) != 0) {
   i9 = HEAP32[i10 >> 2] | 0;
   i5 = i9 + (i1 << 2) | 0;
   i1 = i9;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i4 = i9 + 36 | 0;
      i8 = i4 | 0;
      i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i8 >> 2] = i2;
       break;
      }
      i2 = i4 - 36 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 127](i2);
     }
    } while (0);
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i5 | 0)) {
     break;
    }
   }
   HEAP32[i6 >> 2] = 0;
  }
  i6 = HEAP32[i10 >> 2] | 0;
  if (!((i11 + 12 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i11);
 }
 i11 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] & 127](i11);
 }
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i11 | 0;
 if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i11);
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy19workerThreadCreatedEN3WTF10PassRefPtrINS_21DedicatedWorkerThreadEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 24 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 4 | 0;
   i7 = i2 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i2 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  __ZN7WebCore12WorkerThread4stopEv(HEAP32[i5 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 36 | 0;
 i8 = i1 + 44 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i2;
 HEAP8[i1 + 32 | 0] = 1;
 L12 : do {
  if ((i2 | 0) != 0) {
   i7 = i6 | 0;
   i9 = i4 | 0;
   i10 = 0;
   i11 = i2;
   while (1) {
    if (i11 >>> 0 <= i10 >>> 0) {
     break;
    }
    i12 = (HEAP32[i5 >> 2] | 0) + 12 | 0;
    i13 = (HEAP32[i7 >> 2] | 0) + (i10 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i9 >> 2] = i14;
    __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i12, i4);
    i12 = HEAP32[i9 >> 2] | 0;
    if ((i12 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
    }
    i12 = i10 + 1 | 0;
    if (i12 >>> 0 >= i2 >>> 0) {
     break L12;
    }
    i10 = i12;
    i11 = HEAP32[i8 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i2 = i1 + 40 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 i4 = i6 | 0;
 if ((i1 | 0) != 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  i5 = i6 + (i1 << 2) | 0;
  i1 = i6;
  while (1) {
   i6 = HEAP32[i1 >> 2] | 0;
   if ((i6 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
   }
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy22sendMessageToInspectorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 24 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) + 12 | 0;
 i9 = i6 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i4, i6);
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = H_BASE + 544;
 HEAP32[i6 + 4 >> 2] = F_BASE_vii + 6;
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i6 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = i6;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, HEAP32[__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE >> 2] | 0);
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i1, i5, i7);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 }
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 __ZN7WebCore19WorkerDebuggerAgent37interruptAndDispatchInspectorCommandsEPNS_12WorkerThreadE(HEAP32[i8 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_20WorkerMessagingProxyEEEPS2_NS_13MessageSourceES5_NS_12MessageLevelES6_N3WTF6StringERKS8_ijijS8_SA_EENS7_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSC_T0_T2_T4_T6_T8_T10_T12_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_RKT11_(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i11, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCore21CrossThreadCopierBaseILb0ELb0EN3WTF6StringEE4copyERKS2_(i12, i9);
 i9 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i9 >> 2] = H_BASE + 448;
 HEAP32[i9 + 4 >> 2] = i2;
 HEAP32[i9 + 8 >> 2] = i13;
 HEAP32[i9 + 12 >> 2] = i3;
 HEAP32[i9 + 16 >> 2] = i4;
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 HEAP32[i9 + 20 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i3 = i11 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 HEAP32[i9 + 24 >> 2] = i6;
 HEAP32[i9 + 28 >> 2] = i7;
 i7 = i12 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i9 + 32 >> 2] = i12;
 if ((i12 | 0) != 0) {
  i6 = i12 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i4 = i9 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore20WorkerMessagingProxy30postMessageToWorkerGlobalScopeEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i1 + 28 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  i7 = i2 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = i3 | 0;
  i9 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = __ZN3WTF10fastMallocEj(12) | 0;
  HEAP32[i7 >> 2] = H_BASE + 144;
  HEAP32[i7 + 4 >> 2] = i8;
  HEAP32[i7 + 8 >> 2] = i9;
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = i7;
  __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i6 + 12 | 0, i5);
  i5 = HEAP32[i9 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 36 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i3 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i9 >> 2] = H_BASE + 144;
 HEAP32[i9 + 4 >> 2] = i2;
 HEAP32[i9 + 8 >> 2] = i3;
 i3 = i1 + 44 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i1 + 40 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2 + 1 | 0);
  HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i9;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 << 2) >> 2] = i9;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore19WorkerExceptionTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i8 = i1 + 16 | 0;
 i9 = i1 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 + 12 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 i12 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore10ErrorEventC1ERKN3WTF6StringES4_jj(i12, i7, i8, i10, i1);
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i12;
 i12 = __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i6 + 16 | 0, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 + 8 | 0;
   i6 = i1 | 0;
   i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i6 >> 2] = i10;
    break;
   }
   i10 = i1 - 8 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 127](i10);
  }
 } while (0);
 if (!i12) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore22ScriptExecutionContext15reportExceptionERKN3WTF6StringEiiS4_NS1_10PassRefPtrINS_15ScriptCallStackEEEPNS_12CachedScriptE(i2, i7, i12, i9, i8, i5, 0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i5 | 0;
 i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore28NotifyNetworkStateChangeTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = (HEAP8[i1 + 4 | 0] & 1) != 0;
 i1 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i7 = i4 | 0;
 i8 = HEAP32[(i6 ? i1 + 276 | 0 : i1 + 272 | 0) >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i1 = i8 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i2 + 160 | 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] | 0;
 i8 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i8, i4, 0, 0);
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = i8;
 FUNCTION_TABLE_iii[i2 & 1](i1, i5) | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 8 | 0;
   i1 = i4 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i1 >> 2] = i2;
    break;
   }
   i2 = i4 - 8 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i5 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore28MessageWorkerGlobalScopeTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i2 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 << 2) | 0;
   i4 = i6;
   while (1) {
    i6 = HEAP32[i4 >> 2] | 0;
    if ((i6 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i2 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i8 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
 i9 = i1;
 __ZN3WTF8fastFreeEPv(i9);
 return;
}
function __ZN7WebCore17MessageWorkerTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  i5 = i2 | 0;
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i4 << 2) | 0;
   i4 = i6;
   while (1) {
    i6 = HEAP32[i4 >> 2] | 0;
    if ((i6 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i2 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 i3 = i2 | 0;
 if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  i8 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 i8 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i8);
 i9 = i1;
 __ZN3WTF8fastFreeEPv(i9);
 return;
}
function __ZN7WebCore20WorkerMessagingProxy34workerGlobalScopeDestroyedInternalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP8[i1 + 33 | 0] = 1;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = i1 | 0;
 do {
  if ((i3 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 7](i3) | 0) {
    i6 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i3 - 156 + 68 | 0) | 0) | 0;
   } else {
    i6 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i3) | 0;
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation31workerGlobalScopeTerminatedImplEPNS_19InstrumentingAgentsEPNS_22WorkerGlobalScopeProxyE(i6, i5);
  }
 } while (0);
 if ((HEAP8[i1 + 20 | 0] & 1) == 0 | (i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 127](i1);
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i1 - 52 + 48 | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i3;
 HEAP32[i11 >> 2] = i5;
 HEAP32[i12 >> 2] = i6;
 i6 = HEAP32[i15 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0;
 HEAP32[i14 >> 2] = i15;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_20WorkerMessagingProxyEEEPS2_NS_13MessageSourceES5_NS_12MessageLevelES6_N3WTF6StringERKS8_ijijS8_SA_EENS7_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSC_T0_T2_T4_T6_T8_T10_T12_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_RKT11_(i13, F_BASE_viiiiiiii + 2 | 0, i14, i9, i10, i4, i11, i12, i7);
 FUNCTION_TABLE_vii[i5 & 63](i6, i13);
 i6 = HEAP32[i13 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 HEAP32[i9 >> 2] = i2;
 HEAP32[i10 >> 2] = i3;
 HEAP32[i11 >> 2] = i5;
 HEAP32[i12 >> 2] = i6;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0;
 HEAP32[i14 >> 2] = i1;
 __ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_20WorkerMessagingProxyEEEPS2_NS_13MessageSourceES5_NS_12MessageLevelES6_N3WTF6StringERKS8_ijijS8_SA_EENS7_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSC_T0_T2_T4_T6_T8_T10_T12_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_RKT11_(i13, F_BASE_viiiiiiii + 2 | 0, i14, i9, i10, i4, i11, i12, i7);
 FUNCTION_TABLE_vii[i5 & 63](i6, i13);
 i6 = HEAP32[i13 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore20WorkerMessagingProxyD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 HEAP32[i1 + 4 >> 2] = H_BASE + 268;
 HEAP32[i1 + 8 >> 2] = H_BASE + 316;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 36 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 40 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i6 = i4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore20WorkerMessagingProxyD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 HEAP32[i1 + 4 >> 2] = H_BASE + 268;
 HEAP32[i1 + 8 >> 2] = H_BASE + 316;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 36 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 40 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 + 4 | 0;
   i6 = i4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore20WorkerMessagingProxy18connectToInspectorEPNS_22WorkerGlobalScopeProxy13PageInspectorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i1 + 48 >> 2] = i2;
 i2 = (HEAP32[i1 + 24 >> 2] | 0) + 12 | 0;
 i1 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i1 >> 2] = H_BASE + 480;
 HEAP32[i1 + 4 >> 2] = F_BASE_vii + 46;
 HEAP8[i1 + 8 | 0] = 1;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i1;
 __ZN3WTF6StringC1EPKc(i5, HEAP32[__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE >> 2] | 0);
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i2, i4, i5);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy23disconnectFromInspectorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP32[i1 + 48 >> 2] = 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = (HEAP32[i1 + 24 >> 2] | 0) + 12 | 0;
 i1 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i1 >> 2] = H_BASE + 480;
 HEAP32[i1 + 4 >> 2] = F_BASE_vii + 34;
 HEAP8[i1 + 8 | 0] = 1;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i1;
 __ZN3WTF6StringC1EPKc(i4, HEAP32[__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE >> 2] | 0);
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i5, i3, i4);
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
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 >> 2] = H_BASE + 416;
 HEAP32[i8 + 4 >> 2] = i2;
 HEAP32[i8 + 8 >> 2] = i3;
 HEAP32[i8 + 12 >> 2] = i6;
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = i8;
 FUNCTION_TABLE_vii[i7 & 63](i1, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 >> 2] = H_BASE + 416;
 HEAP32[i8 + 4 >> 2] = i2;
 HEAP32[i8 + 8 >> 2] = i3;
 HEAP32[i8 + 12 >> 2] = i1;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i8;
 FUNCTION_TABLE_vii[i7 & 63](i6, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
 STACKTOP = i4;
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i10 >> 2] = H_BASE + 384;
 __ZNKR3WTF6String12isolatedCopyEv(i10 + 4 | 0, i2);
 HEAP32[i10 + 8 >> 2] = i3;
 HEAP32[i10 + 12 >> 2] = i4;
 __ZNKR3WTF6String12isolatedCopyEv(i10 + 16 | 0, i5);
 HEAP32[i10 + 20 >> 2] = i8;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i10;
 FUNCTION_TABLE_vii[i9 & 63](i1, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy26terminateWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 33 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN7WebCore12WorkerThread4stopEv(i2 | 0);
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 7](i2) | 0) {
  i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i2 - 156 + 68 | 0) | 0) | 0;
 } else {
  i3 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i2) | 0;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation31workerGlobalScopeTerminatedImplEPNS_19InstrumentingAgentsEPNS_22WorkerGlobalScopeProxyE(i3, i1 | 0);
 return;
}
function __ZThn8_N7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 - 52 + 44 | 0;
 if ((HEAP8[i6 + 33 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = (HEAP32[i6 + 24 >> 2] | 0) + 12 | 0;
 i6 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i1, i5, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 i7 = 1;
 STACKTOP = i4;
 return i7 | 0;
}
function __ZN7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 60 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i10 >> 2] = H_BASE + 384;
 __ZNKR3WTF6String12isolatedCopyEv(i10 + 4 | 0, i2);
 HEAP32[i10 + 8 >> 2] = i3;
 HEAP32[i10 + 12 >> 2] = i4;
 __ZNKR3WTF6String12isolatedCopyEv(i10 + 16 | 0, i5);
 HEAP32[i10 + 20 >> 2] = i1;
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = i10;
 FUNCTION_TABLE_vii[i9 & 63](i8, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  i6 = 0;
  STACKTOP = i4;
  return i6 | 0;
 }
 i7 = (HEAP32[i1 + 24 >> 2] | 0) + 12 | 0;
 i1 = i5 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore13WorkerRunLoop15postTaskForModeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE(i7, i5, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = 1;
  STACKTOP = i4;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 i6 = 1;
 STACKTOP = i4;
 return i6 | 0;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
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
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN3WTF6OwnPtrINS_6VectorINS0_IN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = i2 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore18MessagePortChannelD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i4 >> 2] | 0;
 if (!((i2 + 12 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore20WorkerMessagingProxy24notifyNetworkStateChangeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP8[i1 + 4 | 0] = i2 & 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i1;
 __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i5 + 12 | 0, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19WorkerExceptionTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 80;
 HEAP32[i7 + 4 >> 2] = i5;
 __ZNKR3WTF6String12isolatedCopyEv(i7 + 8 | 0, i2);
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i1, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 4 >> 2] = i5;
 HEAP8[i7 + 8 | 0] = 1;
 HEAP8[i7 + 9 | 0] = i2 & 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i1, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19WorkerExceptionTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 384;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy21reportPendingActivityEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i5 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 4 >> 2] = i5;
 HEAP8[i7 + 8 | 0] = 0;
 HEAP8[i7 + 9 | 0] = i2 & 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i1, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 80;
 HEAP32[i7 + 4 >> 2] = i1;
 __ZNKR3WTF6String12isolatedCopyEv(i7 + 8 | 0, i2);
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i5, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 4 >> 2] = i1;
 HEAP8[i7 + 8 | 0] = 1;
 HEAP8[i7 + 9 | 0] = i2 & 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i5, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy21reportPendingActivityEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i7 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i7 >> 2] = H_BASE + 16;
 HEAP32[i7 + 4 >> 2] = i1;
 HEAP8[i7 + 8 | 0] = 0;
 HEAP8[i7 + 9 | 0] = i2 & 1;
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i7;
 FUNCTION_TABLE_vii[i6 & 63](i5, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy21workerObjectDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 16 >> 2] = 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i6 >> 2] = H_BASE + 512;
 HEAP32[i6 + 4 >> 2] = F_BASE_vii + 54;
 HEAP32[i6 + 8 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 63](i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZThn8_N7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 - 52 + 56 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 FUNCTION_TABLE_vii[i1 & 63](i5, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i4 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = H_BASE + 48;
 HEAP32[i6 + 4 >> 2] = i4;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 63](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 52 + 48 | 0;
 i1 = HEAP32[i4 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = H_BASE + 352;
 HEAP32[i6 + 4 >> 2] = i4;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 63](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] | 0;
 i6 = i4 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 FUNCTION_TABLE_vii[i1 & 63](i5, i4);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = H_BASE + 48;
 HEAP32[i6 + 4 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 63](i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i6 >> 2] = H_BASE + 352;
 HEAP32[i6 + 4 >> 2] = i1;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = i6;
 FUNCTION_TABLE_vii[i5 & 63](i4, i3);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28MessageWorkerGlobalScopeTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 __ZN3WTF6OwnPtrINS_6VectorINS0_IN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEED1Ev(i1 + 8 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore17MessageWorkerTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 __ZN3WTF6OwnPtrINS_6VectorINS0_IN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEED1Ev(i1 + 8 | 0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore22WorkerGlobalScopeProxy6createEPNS_6WorkerE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(52) | 0;
 HEAP32[i2 >> 2] = H_BASE + 176;
 HEAP32[i2 + 4 >> 2] = H_BASE + 268;
 HEAP32[i2 + 8 >> 2] = H_BASE + 316;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 127](i3);
 }
 HEAP32[i2 + 16 >> 2] = i1;
 HEAP8[i2 + 20 | 0] = 0;
 _memset(i2 + 24 | 0, 0, 10) | 0;
 _memset(i2 + 36 | 0, 0, 16) | 0;
 return i2 | 0;
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
function __ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextEPNS_20WorkerMessagingProxyENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS9_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 if ((HEAP8[i2 + 33 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore22ScriptExecutionContext17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjPN3JSC9ExecStateEm(i1, i3, i4, i5, i8, i6, i7, 0, 0);
 return;
}
function __ZN7WebCore20WorkerMessagingProxyC2EPNS_6WorkerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 HEAP32[i1 + 4 >> 2] = H_BASE + 268;
 HEAP32[i1 + 8 >> 2] = H_BASE + 316;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 127](i3);
 }
 HEAP32[i1 + 16 >> 2] = i2;
 HEAP8[i1 + 20 | 0] = 0;
 _memset(i1 + 24 | 0, 0, 10) | 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20WorkerMessagingProxyC1EPNS_6WorkerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 HEAP32[i1 + 4 >> 2] = H_BASE + 268;
 HEAP32[i1 + 8 >> 2] = H_BASE + 316;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] & 127](i3);
 }
 HEAP32[i1 + 16 >> 2] = i2;
 HEAP8[i1 + 20 | 0] = 0;
 _memset(i1 + 24 | 0, 0, 10) | 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 544;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30PostMessageToPageInspectorTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 544;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore30PostMessageToPageInspectorTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_viiiiiiii[HEAP32[i1 + 4 >> 2] & 3](i2, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 16 >> 2] | 0, i1 + 20 | 0, HEAP32[i1 + 24 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0, i1 + 32 | 0);
 return;
}
function __ZN7WebCore30WorkerThreadActivityReportTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP8[i1 + 9 | 0] & 1;
 do {
  if ((HEAP8[i1 + 8 | 0] & 1) != 0) {
   if ((HEAP8[i2 + 33 | 0] & 1) != 0) {
    break;
   }
   i4 = i2 + 28 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
  }
 } while (0);
 HEAP8[i2 + 32 | 0] = i3;
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
function __ZN7WebCore20WorkerMessagingProxy29workerObjectDestroyedInternalEPNS_22ScriptExecutionContextEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i2 + 20 | 0] = 1;
 if ((HEAP32[i2 + 24 >> 2] | 0) == 0) {
  __ZN7WebCore20WorkerMessagingProxy34workerGlobalScopeDestroyedInternalEv(i2);
  return;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2);
  return;
 }
}
function __ZN7WebCore20WorkerMessagingProxy29reportPendingActivityInternalEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if (i2) {
   if ((HEAP8[i1 + 33 | 0] & 1) != 0) {
    break;
   }
   i4 = i1 + 28 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
  }
 } while (0);
 HEAP8[i1 + 32 | 0] = i3 & 1;
 return;
}
function __ZNK7WebCore20WorkerMessagingProxy18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
   if ((HEAP8[i1 + 32 | 0] & 1) == 0) {
    i2 = 0;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = (HEAP8[i1 + 33 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore30PostMessageToPageInspectorTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2, i1 + 8 | 0);
 return;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZN7WebCoreL30dispatchOnInspectorBackendTaskEPNS_22ScriptExecutionContextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25WorkerInspectorController27dispatchMessageFromFrontendERKN3WTF6StringE(HEAP32[i1 + 268 >> 2] | 0, i2);
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore30WorkerGlobalScopeDestroyedTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20WorkerMessagingProxy34workerGlobalScopeDestroyedInternalEv(HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCoreL44disconnectFromWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25WorkerInspectorController18disconnectFrontendEv(HEAP32[i1 + 268 >> 2] | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[i1 + 4 >> 2] & 63](i2, HEAP32[i1 + 8 >> 2] | 0);
 return;
}
function __ZN7WebCore19WorkerTerminateTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCoreL39connectToWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25WorkerInspectorController15connectFrontendEv(HEAP32[i1 + 268 >> 2] | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IbbE11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[i1 + 4 >> 2] & 63](i2, (HEAP8[i1 + 8 | 0] & 1) != 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_E11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vii[HEAP32[i1 + 4 >> 2] & 63](i2, i1 + 8 | 0);
 return;
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
function __ZThn8_N7WebCore20WorkerMessagingProxyD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 52 + 44 | 0;
 __ZN7WebCore20WorkerMessagingProxyD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxyD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 52 + 48 | 0;
 __ZN7WebCore20WorkerMessagingProxyD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30WorkerThreadActivityReportTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30WorkerGlobalScopeDestroyedTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b7(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(7);
}
function __ZN7WebCore28NotifyNetworkStateChangeTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore16CrossThreadTask1IbbED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19WorkerTerminateTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b9(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(9);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20WorkerMessagingProxyD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20WorkerMessagingProxyD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore30WorkerThreadActivityReportTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore30WorkerGlobalScopeDestroyedTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZThn8_N7WebCore20WorkerMessagingProxyD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20WorkerMessagingProxyD2Ev(i1 - 52 + 44 | 0);
 return;
}
function __ZThn4_N7WebCore20WorkerMessagingProxyD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20WorkerMessagingProxyD2Ev(i1 - 52 + 48 | 0);
 return;
}
function __ZN7WebCore28NotifyNetworkStateChangeTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore16CrossThreadTask1IbbED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore19WorkerTerminateTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
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
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_,b0,__ZN7WebCore20WorkerMessagingProxy22startWorkerGlobalScopeERKNS_3URLERKN3WTF6StringES7_NS_21WorkerThreadStartModeE,b0,__ZThn4_N7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore30PostMessageToPageInspectorTaskD1Ev,b2,__ZN7WebCore30WorkerGlobalScopeDestroyedTaskD1Ev,b2,__ZN7WebCore30WorkerGlobalScopeDestroyedTaskD0Ev,b2,__ZN7WebCore30PostMessageToPageInspectorTaskD0Ev,b2,__ZThn8_N7WebCore20WorkerMessagingProxyD1Ev,b2,__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED1Ev,b2,__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED0Ev,b2,__ZN7WebCore28MessageWorkerGlobalScopeTaskD1Ev,b2,__ZThn4_N7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv,b2,__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED1Ev,b2,__ZThn4_N7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv,b2,__ZN7WebCore19WorkerTerminateTaskD1Ev,b2,__ZN7WebCore19WorkerTerminateTaskD0Ev,b2,__ZThn4_N7WebCore20WorkerMessagingProxyD1Ev
  ,b2,__ZThn8_N7WebCore20WorkerMessagingProxyD0Ev,b2,__ZN7WebCore17MessageWorkerTaskD1Ev,b2,__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED1Ev,b2,__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED0Ev,b2,__ZN7WebCore20WorkerMessagingProxyD2Ev,b2,__ZN7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv,b2,__ZN7WebCore20WorkerMessagingProxy23disconnectFromInspectorEv,b2,__ZN7WebCore20WorkerMessagingProxyD0Ev,b2,__ZN7WebCore30WorkerThreadActivityReportTaskD0Ev,b2,__ZN7WebCore28NotifyNetworkStateChangeTaskD1Ev,b2,__ZN7WebCore16CrossThreadTask1IbbED1Ev,b2,__ZN7WebCore20WorkerMessagingProxy21workerObjectDestroyedEv,b2,__ZN7WebCore20WorkerMessagingProxy26terminateWorkerGlobalScopeEv,b2,__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED0Ev,b2,__ZN7WebCore28NotifyNetworkStateChangeTaskD0Ev
  ,b2,__ZN7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv,b2,__ZN7WebCore19WorkerExceptionTaskD1Ev,b2,__ZThn4_N7WebCore20WorkerMessagingProxyD0Ev,b2,__ZN7WebCore28MessageWorkerGlobalScopeTaskD0Ev,b2,__ZN7WebCore19WorkerExceptionTaskD0Ev,b2,__ZN7WebCore17MessageWorkerTaskD0Ev,b2,__ZN7WebCore16CrossThreadTask1IbbED0Ev,b2,__ZN7WebCore30WorkerThreadActivityReportTaskD1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b3,__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_E11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCoreL30dispatchOnInspectorBackendTaskEPNS_22ScriptExecutionContextERKN3WTF6StringE,b3,__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_E11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb,b3,__ZN7WebCore30WorkerThreadActivityReportTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore30WorkerGlobalScopeDestroyedTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore20WorkerMessagingProxy21reportPendingActivityEb,b3,__ZThn4_N7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb,b3,__ZN7WebCore20WorkerMessagingProxy22sendMessageToInspectorERKN3WTF6StringE,b3,__ZN7WebCore16CrossThreadTask1IbbE11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_E11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore28MessageWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE
  ,b3,__ZN7WebCore20WorkerMessagingProxy24notifyNetworkStateChangeEb,b3,__ZN7WebCore17MessageWorkerTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCoreL44disconnectFromWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb,b3,__ZN7WebCore28NotifyNetworkStateChangeTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore20WorkerMessagingProxyC2EPNS_6WorkerE,b3,__ZN7WebCore20WorkerMessagingProxy18connectToInspectorEPNS_22WorkerGlobalScopeProxy13PageInspectorE,b3,__ZN7WebCore19WorkerExceptionTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZThn4_N7WebCore20WorkerMessagingProxy21reportPendingActivityEb,b3,__ZN7WebCoreL39connectToWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb,b3,__ZN7WebCore19WorkerTerminateTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore30PostMessageToPageInspectorTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZThn8_N7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b3,__ZN7WebCore20WorkerMessagingProxy29workerObjectDestroyedInternalEPNS_22ScriptExecutionContextEPS0_,b3,__ZThn4_N7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore20WorkerMessagingProxy18hasPendingActivityEv,b4,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZThn8_N7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE,b5,__ZN7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE,b6,__ZThn4_N7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE,b6,__ZN7WebCore20WorkerMessagingProxy30postMessageToWorkerGlobalScopeEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE,b6];
  var FUNCTION_TABLE_viiiiiiii = [b7,b7,__ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextEPNS_20WorkerMessagingProxyENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS9_,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viiiiiii = [b9,b9,__ZThn4_N7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_,b9,__ZN7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE": __ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore30PostMessageToPageInspectorTaskD1Ev","__ZN7WebCore30WorkerGlobalScopeDestroyedTaskD1Ev","__ZThn4_N7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_","__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore22WorkerGlobalScopeProxy6createEPNS_6WorkerE","__ZN7WebCore18createCallbackTaskINS_29AllowCrossThreadAccessWrapperINS_20WorkerMessagingProxyEEEPS2_NS_13MessageSourceES5_NS_12MessageLevelES6_N3WTF6StringERKS8_ijijS8_SA_EENS7_10PassOwnPtrINS_22ScriptExecutionContext4TaskEEEPFvPSC_T0_T2_T4_T6_T8_T10_T12_ERKT_RKT1_RKT3_RKT5_RKT7_RKT9_RKT11_","__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED1Ev","__ZN7WebCore12MessageEvent6createEN3WTF10PassOwnPtrINS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEEEENS1_10PassRefPtrINS_21SerializedScriptValueEEERKNS1_6StringESF_NSA_INS_11EventTargetEEE","__ZThn4_N7WebCore20WorkerMessagingProxyD0Ev","_memcpy","__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED1Ev","__ZN7WebCore20WorkerMessagingProxy24notifyNetworkStateChangeEb","__ZN7WebCore20WorkerMessagingProxyD2Ev","__ZN7WebCore20WorkerMessagingProxyC2EPNS_6WorkerE","__ZThn4_N7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_","__ZN7WebCore20WorkerMessagingProxy18connectToInspectorEPNS_22WorkerGlobalScopeProxy13PageInspectorE","__ZThn8_N7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE","__ZThn4_N7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE","__ZN7WebCore20WorkerMessagingProxy21workerObjectDestroyedEv","__ZN7WebCore20WorkerMessagingProxy30postMessageToWorkerGlobalScopeEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE","__ZN7WebCore19WorkerTerminateTaskD1Ev","__ZN7WebCore20WorkerMessagingProxy29workerObjectDestroyedInternalEPNS_22ScriptExecutionContextEPS0_","__ZN7WebCore19WorkerTerminateTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv","__ZN7WebCore30PostMessageToPageInspectorTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore19WorkerExceptionTaskD0Ev","__ZN3WTF6OwnPtrINS_6VectorINS0_IN7WebCore18MessagePortChannelEEELj1ENS_15CrashOnOverflowEEEED1Ev","__ZThn8_N7WebCore20WorkerMessagingProxyD1Ev","__ZThn4_N7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE","__ZN7WebCore30WorkerGlobalScopeDestroyedTaskD0Ev","__ZN7WebCore30WorkerThreadActivityReportTask11performTaskEPNS_22ScriptExecutionContextE","__ZThn4_N7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv","__ZThn4_N7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb","__ZN7WebCore16CrossThreadTask1IbbE11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore20WorkerMessagingProxy27postExceptionToWorkerObjectERKN3WTF6StringEiiS4_","__ZN7WebCore17MessageWorkerTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore28MessageWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16CrossThreadTask1IN3WTF6StringERKS2_ED0Ev","__ZThn4_N7WebCore20WorkerMessagingProxyD1Ev","__ZN7WebCore30WorkerThreadActivityReportTaskD0Ev","__ZN7WebCore28NotifyNetworkStateChangeTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore20WorkerMessagingProxy26terminateWorkerGlobalScopeEv","__ZN7WebCore28MessageWorkerGlobalScopeTaskD0Ev","__ZN7WebCore17MessageWorkerTaskD1Ev","__ZN7WebCore20WorkerMessagingProxy22sendMessageToInspectorERKN3WTF6StringE","__ZN7WebCoreL22postConsoleMessageTaskEPNS_22ScriptExecutionContextEPNS_20WorkerMessagingProxyENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS9_","__ZN7WebCore16CrossThreadTask1IbbED1Ev","__ZN7WebCore28NotifyNetworkStateChangeTaskD0Ev","__ZN7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCoreL30dispatchOnInspectorBackendTaskEPNS_22ScriptExecutionContextERKN3WTF6StringE","__ZN7WebCore16CrossThreadTask1IbbED0Ev","__ZN7WebCore19WorkerTerminateTaskD0Ev","__ZN7WebCore28MessageWorkerGlobalScopeTaskD1Ev","__ZN7WebCore20WorkerMessagingProxy21reportPendingActivityEb","__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED1Ev","_memset","__ZN7WebCore20WorkerMessagingProxy30confirmMessageFromWorkerObjectEb","__ZN7WebCore20WorkerMessagingProxy22startWorkerGlobalScopeERKNS_3URLERKN3WTF6StringES7_NS_21WorkerThreadStartModeE","__ZN7WebCore17MessageWorkerTaskD0Ev","__ZN7WebCore20WorkerMessagingProxy34workerGlobalScopeDestroyedInternalEv","__ZN7WebCore20WorkerMessagingProxy25postMessageToWorkerObjectEN3WTF10PassRefPtrINS_21SerializedScriptValueEEENS1_10PassOwnPtrINS1_6VectorINS1_6OwnPtrINS_18MessagePortChannelEEELj1ENS1_15CrashOnOverflowEEEEE","__ZN7WebCore20WorkerMessagingProxy23disconnectFromInspectorEv","__ZN7WebCore20WorkerMessagingProxyD0Ev","__ZThn4_N7WebCore20WorkerMessagingProxy21reportPendingActivityEb","__ZN7WebCore30WorkerThreadActivityReportTaskD1Ev","__ZN7WebCore20WorkerMessagingProxy26workerGlobalScopeDestroyedEv","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore20WorkerMessagingProxy34postTaskForModeToWorkerGlobalScopeEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEERKNS1_6StringE","__ZN7WebCore30PostMessageToPageInspectorTaskD0Ev","__ZN7WebCore30WorkerGlobalScopeDestroyedTask11performTaskEPNS_22ScriptExecutionContextE","__ZNK7WebCore20WorkerMessagingProxy18hasPendingActivityEv","__ZN7WebCore20WorkerMessagingProxy29reportPendingActivityInternalEbb","__ZN7WebCore16CrossThreadTask7IPNS_20WorkerMessagingProxyES2_NS_13MessageSourceES3_NS_12MessageLevelES4_N3WTF6StringERKS6_ijijS6_S8_ED0Ev","__ZThn4_N7WebCore20WorkerMessagingProxy23workerGlobalScopeClosedEv","__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_E11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCoreL44disconnectFromWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb","__ZThn8_N7WebCore20WorkerMessagingProxyD0Ev","__ZN7WebCore20WorkerMessagingProxy26postMessageToPageInspectorERKN3WTF6StringE","__ZN7WebCore16CrossThreadTask1IPNS_20WorkerMessagingProxyES2_ED0Ev","__ZThn8_N7WebCore20WorkerMessagingProxy16postTaskToLoaderEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore20WorkerMessagingProxy32postConsoleMessageToWorkerObjectENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEiiS6_","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore22ScriptExecutionContext4TaskEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore19WorkerExceptionTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore20WorkerMessagingProxy19workerThreadCreatedEN3WTF10PassRefPtrINS_21DedicatedWorkerThreadEEE","__ZN7WebCore28NotifyNetworkStateChangeTaskD1Ev","__ZN7WebCore19WorkerExceptionTaskD1Ev","__ZN7WebCoreL39connectToWorkerGlobalScopeInspectorTaskEPNS_22ScriptExecutionContextEb"]

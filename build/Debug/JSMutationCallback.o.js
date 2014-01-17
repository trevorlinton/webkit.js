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
H_BASE = parentModule["_malloc"](104 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 104;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18JSMutationCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE;
var __ZN7WebCore18JSMutationCallbackD1Ev;
/* memory initializer */ allocate([117,110,100,101,102,105,110,101,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,248,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE=env.__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18JSMutationCallbackE=(H_BASE+24)|0;
  var __ZTVN7WebCore16MutationCallbackE=(H_BASE+80)|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18JSMutationCallback4callERKN3WTF6VectorINS1_6RefPtrINS_14MutationRecordEEELj0ENS1_15CrashOnOverflowEEEPNS_16MutationObserverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 144 | 0;
 i15 = i4 + 152 | 0;
 i16 = i4 + 160 | 0;
 i17 = i4 + 168 | 0;
 if (!(__ZNK7WebCore17ActiveDOMCallback17canInvokeCallbackEv(i1 + 8 | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 i18 = i1 + 4 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
 i18 = i1 + 20 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i10, HEAP32[(HEAP32[i18 >> 2] | 0) + 68 >> 2] | 0);
 i19 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP32[i19 + 4 >> 2] | 0) == -6) {
    break;
   }
   if ((HEAP32[i19 + 8 >> 2] & 3 | 0) != 0) {
    break;
   }
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = i20;
   i22 = (i20 | 0) == 0;
   i23 = (i22 ? 0 : 0) | i20;
   i24 = (i22 ? -6 : -5) | 0;
   if (i22) {
    break;
   }
   i22 = i21 | 0;
   i25 = HEAP32[i21 >> 2] | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     if ((i26 | 0) == (HEAP32[i26 >> 2] | 0)) {
      break;
     }
     _WTFCrash();
    }
   } while (0);
   i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[((HEAP32[(i20 & -65536) + 1048 >> 2] | 0) == 2 ? i21 + 8 | 0 : i25 + 32 | 0) >> 2] | 0) + 28 >> 2] & 1](i22, i11) | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 3](i1) | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   i28 = __ZN7WebCore19toJSDOMGlobalObjectEPNS_22ScriptExecutionContextERNS_15DOMWrapperWorldE(i27, HEAP32[i18 >> 2] | 0) | 0;
   i29 = __ZN3JSC14JSGlobalObject10globalExecEv(i28) | 0;
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_16MutationObserverE(i12, i29, i28, i3);
   i30 = i13 | 0;
   HEAP32[i30 >> 2] = 0;
   i31 = i13 + 4 | 0;
   HEAP32[i31 >> 2] = 8;
   i32 = i13 + 72 | 0;
   HEAP32[i32 >> 2] = i13 + 8;
   i33 = i13 + 76 | 0;
   HEAP32[i33 >> 2] = 0;
   __ZN7WebCore7jsArrayIN3WTF6RefPtrINS_14MutationRecordEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE(i14, i29, i28, i2);
   i28 = i14 | 0;
   i34 = HEAP32[i28 >> 2] | 0;
   i35 = HEAP32[i28 + 4 >> 2] | 0;
   i28 = HEAP32[i30 >> 2] | 0;
   if ((i28 | 0) < (HEAP32[i31 >> 2] | 0)) {
    i36 = (HEAP32[i32 >> 2] | 0) + (i28 << 3) | 0;
    HEAP32[i36 >> 2] = i34;
    HEAP32[i36 + 4 >> 2] = i35;
    i36 = (HEAP32[i30 >> 2] | 0) + 1 | 0;
    HEAP32[i30 >> 2] = i36;
    i37 = i36;
   } else {
    i36 = i6 | 0;
    HEAP32[i36 >> 2] = i34;
    HEAP32[i36 + 4 >> 2] = i35;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i13, i6);
    i37 = HEAP32[i30 >> 2] | 0;
   }
   i35 = i12 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   i34 = HEAP32[i35 + 4 >> 2] | 0;
   if ((i37 | 0) < (HEAP32[i31 >> 2] | 0)) {
    i28 = (HEAP32[i32 >> 2] | 0) + (i37 << 3) | 0;
    HEAP32[i28 >> 2] = i36;
    HEAP32[i28 + 4 >> 2] = i34;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   } else {
    i28 = i5 | 0;
    HEAP32[i28 >> 2] = i36;
    HEAP32[i28 + 4 >> 2] = i34;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i13, i5);
   }
   __ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE(i15, i27, i26, i11);
   i27 = HEAP32[i35 >> 2] | 0;
   i34 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i30 >> 2];
   i30 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
   HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i29;
   i35 = i7 | 0;
   HEAP32[i35 >> 2] = i23;
   HEAP32[i35 + 4 >> 2] = i24;
   i35 = i8 | 0;
   HEAP32[i35 >> 2] = i27;
   HEAP32[i35 + 4 >> 2] = i34;
   __ZN3JSC4callEPNS_9ExecStateENS_7JSValueENS_8CallTypeERKNS_8CallDataES2_RKNS_7ArgListE(i17, i29, i7, i26, i11, i8, i16);
   do {
    if ((HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0) == 0) {
     HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i30;
    } else {
     HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i30;
     if ((i30 | 0) != 0) {
      break;
     }
     __ZN7WebCore21JSMainThreadExecState21didLeaveScriptContextEv();
    }
   } while (0);
   do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation19didCallFunctionImplERKNS_30InspectorInstrumentationCookieE(i15);
    }
   } while (0);
   i30 = (HEAP32[(HEAP32[i29 + 16 >> 2] & -65536) + 1076 >> 2] | 0) + 24800 | 0;
   if (!((HEAP32[i30 >> 2] & 0 | 0) == 0 & (HEAP32[i30 + 4 >> 2] & -1 | 0) == (-6 | 0))) {
    __ZN7WebCore22reportCurrentExceptionEPN3JSC9ExecStateE(i29);
   }
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i15);
   i30 = HEAP32[i33 >> 2] | 0;
   if ((i30 | 0) != 0) {
    HEAP32[i9 >> 2] = i13;
    __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i30, i9) | 0;
   }
   if ((HEAP32[i31 >> 2] | 0) == 8) {
    break;
   }
   i30 = HEAP32[i32 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   __ZdaPv(i30);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i10);
 i10 = i1 + 4 | 0;
 i1 = i10 | 0;
 i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i9 = i10 - 4 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if (!(__ZN7WebCore24InspectorInstrumentation20timelineAgentEnabledEPNS_22ScriptExecutionContextE(i2) | 0)) {
  __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  STACKTOP = i5;
  return;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i3 | 0) == 2) {
   i9 = i4 | 0;
   i10 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     HEAP32[i8 >> 2] = i10;
    } else {
     i11 = i10 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
     i11 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i10;
     if ((i11 | 0) == 0) {
      break;
     }
     i12 = i11 | 0;
     i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i12 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[(HEAP32[i9 >> 2] | 0) + 64 >> 2] | 0;
  } else {
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
   i10 = i7 | 0;
   i13 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   i12 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i13;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i14 = 1;
    break;
   }
   i9 = i12 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i14 = 1;
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    i14 = 1;
    break;
   }
  }
 } while (0);
 L27 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  } else {
   do {
    if ((i2 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 3](i2) | 0) {
      i15 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i2 - 156 + 68 | 0) | 0) | 0;
     } else {
      i15 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i2) | 0;
     }
     if ((i15 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation20willCallFunctionImplEPNS_19InstrumentingAgentsERKN3WTF6StringEiPNS_22ScriptExecutionContextE(i1, i15, i6, i14, i2);
     break L27;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i1);
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i1 | 0;
 i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore7jsArrayIN3WTF6RefPtrINS_14MutationRecordEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 104 | 0;
 i11 = i9 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 4 | 0;
 HEAP32[i12 >> 2] = 8;
 i13 = i9 + 72 | 0;
 i14 = i9 + 8 | 0;
 HEAP32[i13 >> 2] = i14;
 i15 = i9 + 76 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = HEAP32[i4 >> 2] | 0;
 i17 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i16 + (i17 << 2) | 0;
 if ((i17 | 0) == 0) {
  i18 = i14;
  i19 = 0;
 } else {
  i14 = i10 | 0;
  i17 = i6 | 0;
  i20 = i16;
  while (1) {
   __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_14MutationRecordE(i10, i2, i3, HEAP32[i20 >> 2] | 0);
   i16 = HEAP32[i14 >> 2] | 0;
   i21 = HEAP32[i14 + 4 >> 2] | 0;
   i22 = HEAP32[i11 >> 2] | 0;
   if ((i22 | 0) < (HEAP32[i12 >> 2] | 0)) {
    i23 = (HEAP32[i13 >> 2] | 0) + (i22 << 3) | 0;
    HEAP32[i23 >> 2] = i16;
    HEAP32[i23 + 4 >> 2] = i21;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   } else {
    HEAP32[i17 >> 2] = i16;
    HEAP32[i17 + 4 >> 2] = i21;
    __ZN3JSC20MarkedArgumentBuffer10slowAppendENS_7JSValueE(i9, i6);
   }
   i20 = i20 + 4 | 0;
   if ((i20 | 0) == (i4 | 0)) {
    break;
   }
  }
  i18 = HEAP32[i13 >> 2] | 0;
  i19 = HEAP32[i11 >> 2] | 0;
 }
 i11 = i18;
 i18 = HEAP32[(HEAP32[i2 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
 i2 = __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i18, HEAP32[i3 + 244 >> 2] | 0, i19) | 0;
 if ((i2 | 0) == 0) {
  _WTFCrash();
 }
 if ((i19 | 0) != 0) {
  i3 = i2 | 0;
  i4 = i7 | 0;
  i20 = i7 + 4 | 0;
  i6 = i7;
  i17 = 0;
  while (1) {
   if ((i19 | 0) > (i17 | 0)) {
    i14 = i11 + (i17 << 3) | 0;
    i10 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i4 + 4 >> 2] = i10;
   } else {
    HEAP32[i20 >> 2] = -4;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i3, i18, i17, i7);
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i19 >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 + 4 >> 2] = -5;
 HEAP32[i1 >> 2] = i2;
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i8 >> 2] = i9;
  __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2, i8) | 0;
 }
 if ((HEAP32[i12 >> 2] | 0) == 8) {
  STACKTOP = i5;
  return;
 }
 i12 = HEAP32[i13 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZdaPv(i12);
 STACKTOP = i5;
 return;
}
function __ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 L1 : do {
  switch (HEAP8[(HEAP32[i1 >> 2] | 0) + 55 | 0] & 31 | 0) {
  case 3:
   {
    i10 = i4 | 0;
    i11 = HEAP32[i10 + 4 >> 2] | 0;
    i12 = i6 | 0;
    HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i12 + 4 >> 2] = i11;
    __ZN3JSC8JSObject26setIndexQuicklyToUndecidedERNS_2VMEjNS_7JSValueE(i1, i2, i3, i6);
    STACKTOP = i5;
    return;
   }
  case 20:
  case 21:
   {
    if ((HEAP32[i4 + 4 >> 2] | 0) == -1) {
     break L1;
    }
    i11 = i4 | 0;
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    i10 = i7 | 0;
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i10 + 4 >> 2] = i12;
    __ZN3JSC8JSObject55convertInt32ToDoubleOrContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i7);
    STACKTOP = i5;
    return;
   }
  case 26:
  case 27:
   {
    break;
   }
  case 22:
  case 23:
   {
    i12 = HEAP32[i4 + 4 >> 2] | 0;
    i10 = (i12 | 0) == -1;
    if (!(i10 | i12 >>> 0 < 4294967289 >>> 0)) {
     i12 = i4 | 0;
     i11 = HEAP32[i12 + 4 >> 2] | 0;
     i13 = i8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i13 + 4 >> 2] = i11;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i8);
     STACKTOP = i5;
     return;
    }
    if (i10) {
     d14 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d14 = +HEAPF64[i4 >> 3];
    }
    if (d14 != d14 | (tempDouble = +0, tempDouble != tempDouble)) {
     i10 = i4 | 0;
     i11 = HEAP32[i10 + 4 >> 2] | 0;
     i13 = i9 | 0;
     HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i13 + 4 >> 2] = i11;
     __ZN3JSC8JSObject48convertDoubleToContiguousWhilePerformingSetIndexERNS_2VMEjNS_7JSValueE(i1, i2, i3, i9);
     STACKTOP = i5;
     return;
    } else {
     HEAPF64[(HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) >> 3] = d14;
     STACKTOP = i5;
     return;
    }
    break;
   }
  case 28:
  case 30:
  case 29:
  case 31:
   {
    i11 = i4 | 0;
    i13 = HEAP32[i11 + 4 >> 2] | 0;
    i10 = (HEAP32[i1 + 4 >> 2] | 0) + 16 + (i3 << 3) | 0;
    HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i10 + 4 >> 2] = i13;
    STACKTOP = i5;
    return;
   }
  default:
   {
    _WTFCrash();
   }
  }
 } while (0);
 i9 = i4 | 0;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i2 = (HEAP32[i1 + 4 >> 2] | 0) + (i3 << 3) | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 >>> 0 > 4 >>> 0 ? i3 : 4;
 if (i9 >>> 0 > 268435456 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = i2 + 55 | 0;
 i12 = i9 << 3;
 do {
  if (((HEAP8[i11] & 30) - 28 & 255) >>> 0 < 3 >>> 0) {
   i13 = i12 + 24 | 0;
   i14 = i1 + 19600 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if (i15 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i8, i1 + 19596 | 0, i13, i7);
     if ((HEAP8[i8 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i14 >> 2] = i15 - i13;
     HEAP32[i7 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i15 | 0);
     HEAP8[i8 | 0] = 1;
    }
   } while (0);
   i15 = HEAP32[i7 >> 2] | 0;
   i13 = i15 + 8 | 0;
   i14 = i15;
   HEAP32[i14 >> 2] = i3;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i15 + 12 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i15 + 16 >> 2] = i3;
   i16 = i13;
  } else {
   i13 = i12 + 8 | 0;
   i15 = i1 + 19600 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if (i14 >>> 0 < i13 >>> 0) {
     __ZN3JSC11CopiedSpace19tryAllocateSlowCaseEjPPv(i6, i1 + 19596 | 0, i13, i5);
     if ((HEAP8[i6 | 0] & 1) == 0) {
      i10 = 0;
     } else {
      break;
     }
     STACKTOP = i4;
     return i10 | 0;
    } else {
     HEAP32[i15 >> 2] = i14 - i13;
     HEAP32[i5 >> 2] = (HEAP32[i1 + 19604 >> 2] | 0) + (-i14 | 0);
     HEAP8[i6 | 0] = 1;
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   i13 = i14 + 8 | 0;
   i15 = i13;
   HEAP32[i14 + 4 >> 2] = i9;
   HEAP32[i14 >> 2] = i3;
   if (!((HEAP8[i11] & 30) == 22 & i9 >>> 0 > i3 >>> 0)) {
    i16 = i15;
    break;
   }
   i14 = i13;
   i13 = i3;
   while (1) {
    HEAPF64[i14 + (i13 << 3) >> 3] = +NaN;
    i17 = i13 + 1 | 0;
    if (i17 >>> 0 < i9 >>> 0) {
     i13 = i17;
    } else {
     i16 = i15;
     break;
    }
   }
  }
 } while (0);
 i9 = i1 + 13176 | 0;
 i1 = i9 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i18 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i9, 8) | 0;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  i18 = i3;
 }
 HEAP32[i18 >> 2] = i2;
 HEAP32[i18 + 4 >> 2] = i16;
 i10 = i18;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 4 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if (!((i4 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 i4 = (i5 | 0) / 2 & -1;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i4 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i4 << 2) | 0;
 if ((i5 | 0) != 0) {
  i4 = 0;
  while (1) {
   i1 = HEAP32[i7 + (i4 << 2) >> 2] | 0;
   i8 = i1;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    i9 = HEAP32[i6 >> 2] | 0;
    i10 = HEAP32[i3 >> 2] | 0;
    i11 = i8 + ~(i8 << 15) | 0;
    i8 = (i11 >>> 10 ^ i11) * 9 & -1;
    i11 = i8 >>> 6 ^ i8;
    i8 = i11 + ~(i11 << 11) | 0;
    i11 = i8 >>> 16 ^ i8;
    i8 = i10 & i11;
    i12 = i9 + (i8 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    L9 : do {
     if ((i13 | 0) == 0) {
      i14 = 0;
      i15 = i12;
      i16 = 6;
     } else {
      i17 = (i11 >>> 23) + ~i11 | 0;
      i18 = i17 << 12 ^ i17;
      i17 = i18 >>> 7 ^ i18;
      i18 = i17 << 2 ^ i17;
      i17 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = 0;
      i20 = i8;
      i21 = i12;
      i22 = i13;
      while (1) {
       if ((i22 | 0) == (i1 | 0)) {
        i23 = i21;
        break L9;
       }
       i24 = (i22 | 0) == -1 ? i21 : i18;
       i25 = (i19 | 0) == 0 ? i17 : i19;
       i26 = i25 + i20 & i10;
       i27 = i9 + (i26 << 2) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       if ((i28 | 0) == 0) {
        i14 = i24;
        i15 = i27;
        i16 = 6;
        break;
       } else {
        i18 = i24;
        i19 = i25;
        i20 = i26;
        i21 = i27;
        i22 = i28;
       }
      }
     }
    } while (0);
    if ((i16 | 0) == 6) {
     i16 = 0;
     i23 = (i14 | 0) != 0 ? i14 : i15;
    }
    HEAP32[i23 >> 2] = i1;
   }
   i4 = i4 + 1 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
 }
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_(i1 | 0, i5);
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore18JSMutationCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 88;
 __ZN7WebCore17ActiveDOMCallbackC2EPNS_22ScriptExecutionContextE(i1 + 8 | 0, __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(i3) | 0);
 HEAP32[i4 >> 2] = H_BASE + 32;
 HEAP32[i1 + 8 >> 2] = H_BASE + 56;
 i4 = i1 + 16 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i2;
  i2 = (i6 & -65536) + 1060 | 0;
  i7 = i2 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = __ZN3JSC7WeakSet13findAllocatorEv(i2) | 0;
  } else {
   i9 = i8;
  }
  HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
  i7 = i9;
  HEAP32[i7 >> 2] = i6;
  HEAP32[i7 + 4 >> 2] = -5;
  HEAP32[i9 + 8 >> 2] = 0;
  HEAP32[i9 + 12 >> 2] = 0;
  i5 = i9;
 }
 HEAP32[i4 >> 2] = i5;
 i5 = HEAP32[i3 + 656 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i5;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore18JSMutationCallbackC1EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 4 >> 2] = 1;
 i4 = i1 | 0;
 HEAP32[i4 >> 2] = H_BASE + 88;
 __ZN7WebCore17ActiveDOMCallbackC2EPNS_22ScriptExecutionContextE(i1 + 8 | 0, __ZNK7WebCore17JSDOMGlobalObject22scriptExecutionContextEv(i3) | 0);
 HEAP32[i4 >> 2] = H_BASE + 32;
 HEAP32[i1 + 8 >> 2] = H_BASE + 56;
 i4 = i1 + 16 | 0;
 if ((i2 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i2;
  i2 = (i6 & -65536) + 1060 | 0;
  i7 = i2 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = __ZN3JSC7WeakSet13findAllocatorEv(i2) | 0;
  } else {
   i9 = i8;
  }
  HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
  i7 = i9;
  HEAP32[i7 >> 2] = i6;
  HEAP32[i7 + 4 >> 2] = -5;
  HEAP32[i9 + 8 >> 2] = 0;
  HEAP32[i9 + 12 >> 2] = 0;
  i5 = i9;
 }
 HEAP32[i4 >> 2] = i5;
 i5 = HEAP32[i3 + 656 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i5;
 if ((i5 | 0) == 0) {
  return;
 }
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZThn8_N7WebCore18JSMutationCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 - 24 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 32;
 HEAP32[i2 + 8 >> 2] = H_BASE + 56;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 16 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i5 = i2 + 8 | 0;
  i6 = i5;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i6);
  i7 = i2;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
 i5 = i2 + 8 | 0;
 i6 = i5;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i6);
 i7 = i2;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore18JSMutationCallbackD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 8 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i5 = i1 + 8 | 0;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i5 = i1 + 8 | 0;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
 i6 = i1;
 __ZN3WTF8fastFreeEPv(i6);
 return;
}
function __ZThn8_N7WebCore18JSMutationCallbackD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 24 + 16 | 0;
 HEAP32[i2 >> 2] = H_BASE + 32;
 HEAP32[i2 + 8 >> 2] = H_BASE + 56;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 16 | 0;
 if ((HEAP32[i1 >> 2] | 0) == 0) {
  i5 = i2 + 8 | 0;
  i6 = i5;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i6);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
 i5 = i2 + 8 | 0;
 i6 = i5;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i6);
 return;
}
function __ZN7WebCore18JSMutationCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 8 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i5 = i1 + 8 | 0;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i5 = i1 + 8 | 0;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
 return;
}
function __ZN7WebCore18JSMutationCallbackD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 HEAP32[i1 + 8 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i5 = i1 + 8 | 0;
  __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i5 = i1 + 8 | 0;
 __ZN7WebCore17ActiveDOMCallbackD2Ev(i5);
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
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_v + 2;
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
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
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
function __ZNK7WebCore18JSMutationCallback22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore16MutationCallbackD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
}
function __ZN7WebCore16MutationCallbackD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZThn8_N7WebCore18JSMutationCallbackD1Ev,b0,__ZN7WebCore16MutationCallbackD1Ev,b0,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b0,__ZThn8_N7WebCore18JSMutationCallbackD0Ev,b0,__ZN7WebCore18JSMutationCallbackD2Ev,b0,__ZN7WebCore16MutationCallbackD0Ev,b0,__ZN7WebCore18JSMutationCallbackD0Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1,__ZNK7WebCore18JSMutationCallback22scriptExecutionContextEv,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore18JSMutationCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE,b2,__ZN7WebCore18JSMutationCallback4callERKN3WTF6VectorINS1_6RefPtrINS_14MutationRecordEEELj0ENS1_15CrashOnOverflowEEEPNS_16MutationObserverE,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3,v____cxa_pure_virtual__wrapper,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn8_N7WebCore18JSMutationCallbackD1Ev","__ZNK7WebCore18JSMutationCallback22scriptExecutionContextEv","_strlen","__ZN7WebCore7jsArrayIN3WTF6RefPtrINS_14MutationRecordEEELj0EEEN3JSC7JSValueEPNS5_9ExecStateEPNS_17JSDOMGlobalObjectERKNS1_6VectorIT_XT0_ENS1_15CrashOnOverflowEEE","__ZN7WebCore16MutationCallbackD1Ev","__ZN3WTF9HashTableIPN3JSC20MarkedArgumentBufferES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6removeEPS3_","__ZN3WTF7HashSetIPN3JSC20MarkedArgumentBufferENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore18JSMutationCallbackC2EPN3JSC8JSObjectEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSMutationCallback4callERKN3WTF6VectorINS1_6RefPtrINS_14MutationRecordEEELj0ENS1_15CrashOnOverflowEEEPNS_16MutationObserverE","_memset","__ZN7WebCore18JSMutationCallbackD2Ev","__ZN3JSC7JSArray22tryCreateUninitializedERNS_2VMEPNS_9StructureEj","_memcpy","__ZN7WebCore16MutationCallbackD0Ev","__ZN7WebCore21JSMainThreadExecState22instrumentFunctionCallEPNS_22ScriptExecutionContextEN3JSC8CallTypeERKNS3_8CallDataE","__ZThn8_N7WebCore18JSMutationCallbackD0Ev","__ZN3JSC8JSObject15initializeIndexERNS_2VMEjNS_7JSValueE","__ZN7WebCore18JSMutationCallbackD0Ev"]

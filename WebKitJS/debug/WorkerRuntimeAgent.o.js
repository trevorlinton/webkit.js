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
H_BASE = parentModule["_malloc"](232 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 232;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18WorkerRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE;
var __ZN7WebCore18WorkerRuntimeAgentD1Ev;
/* memory initializer */ allocate([69,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,32,105,100,32,105,115,32,110,111,116,32,115,117,112,112,111,114,116,101,100,32,102,111,114,32,119,111,114,107,101,114,115,32,97,115,32,116,104,101,114,101,32,105,115,32,111,110,108,121,32,111,110,101,32,101,120,101,99,117,116,105,111,110,32,99,111,110,116,101,120,116,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
  var __ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE=env.__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18WorkerRuntimeAgentE=(H_BASE+104)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viiiiiiiiiii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viiiiiiiiii + 4;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_viiiiii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_viiiiiiiiiii + 4;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 8;
}
function __ZN7WebCore18WorkerRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 __ZN9Inspector33InspectorRuntimeBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_40InspectorRuntimeBackendDispatcherHandlerE(i4, i3, i1 + 12 | 0);
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i1 + 32 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 4 | 0;
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
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18WorkerRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((i4 | 0) == 0) {
  i4 = __ZN7WebCore30execStateFromWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(HEAP32[i2 + 28 >> 2] | 0) | 0;
  __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i1, HEAP32[i2 + 20 >> 2] | 0, i4);
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i6, H_BASE + 8 | 0);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN9Inspector14InjectedScriptC1Ev(i1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18WorkerRuntimeAgent22pauseWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 HEAP8[i5] = 1;
 i1 = i2 + 264 | 0;
 i6 = i4 | 0;
 while (1) {
  i7 = (HEAP32[i1 >> 2] | 0) + 12 | 0;
  __ZN3WTF6StringC1EPKc(i4, HEAP32[__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE >> 2] | 0);
  i8 = __ZN7WebCore13WorkerRunLoop9runInModeEPNS_17WorkerGlobalScopeERKN3WTF6StringENS0_8WaitModeE(i7, i2, i4, 0) | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i9 = i7 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i10;
     break;
    }
   }
  } while (0);
  if ((i8 | 0) != 2) {
   i11 = 9;
   break;
  }
  if ((HEAP8[i5] & 1) == 0) {
   i11 = 10;
   break;
  }
 }
 if ((i11 | 0) == 9) {
  STACKTOP = i3;
  return;
 } else if ((i11 | 0) == 10) {
  STACKTOP = i3;
  return;
 }
}
function viiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function viiiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZThn12_N7WebCore18WorkerRuntimeAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 40 + 28 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 HEAP32[i2 + 12 >> 2] = H_BASE + 188;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 40 >> 2] = 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i4 = i3;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function viiiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 __ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZThn12_N7WebCore18WorkerRuntimeAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 40 + 28 | 0;
 HEAP32[i2 >> 2] = H_BASE + 112;
 HEAP32[i2 + 12 >> 2] = H_BASE + 188;
 HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 40 >> 2] = 0;
 i1 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i4 = i3;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i2);
 return;
}
function __ZN7WebCore18WorkerRuntimeAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 188;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18WorkerRuntimeAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 188;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore18WorkerRuntimeAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 188;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore21InspectorRuntimeAgentD2Ev(i1 | 0);
 return;
}
function viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function __ZN7WebCore18WorkerRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore21InspectorRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 188;
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] = i1;
 return;
}
function __ZN7WebCore18WorkerRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore21InspectorRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP32[i1 + 12 >> 2] = H_BASE + 188;
 HEAP32[i1 + 28 >> 2] = i4;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP8[i1 + 36 | 0] = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] = i1;
 return;
}
function viiiiii___ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore18WorkerRuntimeAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function viii___ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2_(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b3(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 abort(3);
}
function b7(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(7);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function __ZThn12_N7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 28 + 32 | 0] = 0;
 return;
}
function __ZThn12_N7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 28 + 32 | 0] = 1;
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
function __ZThn12_N7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 40 + 64 | 0] = 0;
 return;
}
function __ZN7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 16 | 0] = 0;
 return;
}
function __ZN7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 16 | 0] = 1;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(0);
}
function __ZN7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 36 | 0] = 0;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore18WorkerRuntimeAgent13unmuteConsoleEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore18WorkerRuntimeAgent11muteConsoleEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiii = [b0,b0,viiiiii___ZN7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper,b0,viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper,b0,viiiiii___ZN7WebCore21InspectorRuntimeAgent13getPropertiesEPN3WTF6StringERKS2_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_7Runtime18PropertyDescriptorEEEEERNS8_INSB_INSC_26InternalPropertyDescriptorEEEEE__wrapper,b0,viiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent5parseEPN3WTF6StringERKS2_PN9Inspector11TypeBuilder7Runtime15SyntaxErrorType4EnumEPNS7_9OptOutputIS2_EERNS1_6RefPtrINS8_10ErrorRangeEEE__wrapper,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18WorkerRuntimeAgent11muteConsoleEv,b1,__ZThn12_N7WebCore18WorkerRuntimeAgentD1Ev,b1,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b1,__ZThn12_N7WebCore18WorkerRuntimeAgentD0Ev,b1,__ZN7WebCore18WorkerRuntimeAgent13unmuteConsoleEv,b1,__ZN7WebCore18WorkerRuntimeAgentD0Ev,b1,__ZN7WebCore18WorkerRuntimeAgentD2Ev,b1,__ZN7WebCore18WorkerRuntimeAgent29willDestroyFrontendAndBackendEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZThn12_N7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE,b2,__ZThn12_N7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE,b2,__ZN7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE,b2,__ZThn12_N7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE,b2,__ZN7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE,b2,__ZN7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE,b2,b2,b2];
  var FUNCTION_TABLE_viiiiiiiiiii = [b3,b3,viiiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b3,viiiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent8evaluateEPN3WTF6StringERKS2_PS4_PKbS8_PKiS8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore18WorkerRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b5,viii___ZThn12_N7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper,b5,viii___ZThn12_N7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper,b5,viii___ZN7WebCore21InspectorRuntimeAgent13releaseObjectEPN3WTF6StringERKS2___wrapper,b5,viii___ZN7WebCore21InspectorRuntimeAgent18releaseObjectGroupEPN3WTF6StringERKS2___wrapper,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiiiiiii = [b7,b7,viiiiiiiiii___ZThn12_N7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper,b7,viiiiiiiiii___ZN7WebCore21InspectorRuntimeAgent14callFunctionOnEPN3WTF6StringERKS2_S5_PKNS1_6RefPtrIN9Inspector14InspectorArrayEEEPKbSD_SD_RNS6_INS7_11TypeBuilder7Runtime12RemoteObjectEEEPNSE_9OptOutputIbEE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZN7WebCore18WorkerRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi,b9,__ZN7WebCore18WorkerRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiii: dynCall_viiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiii": invoke_viiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE": __ZN7WebCore19WorkerDebuggerAgent16debuggerTaskModeE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memset","_strlen","__ZN7WebCore18WorkerRuntimeAgent13unmuteConsoleEv","__ZN7WebCore18WorkerRuntimeAgent11muteConsoleEv","__ZThn12_N7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE","__ZN7WebCore18WorkerRuntimeAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore18WorkerRuntimeAgentD2Ev","__ZN7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE","__ZThn12_N7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE","__ZN7WebCore18WorkerRuntimeAgent21injectedScriptForEvalEPN3WTF6StringEPKi","__ZThn12_N7WebCore21InspectorRuntimeAgent7disableEPN3WTF6StringE","__ZN7WebCore18WorkerRuntimeAgent22pauseWorkerGlobalScopeEPNS_17WorkerGlobalScopeE","__ZN7WebCore18WorkerRuntimeAgent29willDestroyFrontendAndBackendEv","_memcpy","__ZN7WebCore21InspectorRuntimeAgent6enableEPN3WTF6StringE","__ZN7WebCore18WorkerRuntimeAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE","__ZN7WebCore18WorkerRuntimeAgent3runEPN3WTF6StringE","__ZN7WebCore18WorkerRuntimeAgentD0Ev","__ZThn12_N7WebCore18WorkerRuntimeAgentD1Ev","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore18WorkerRuntimeAgentD0Ev"]

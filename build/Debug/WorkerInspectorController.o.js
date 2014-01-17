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
H_BASE = parentModule["_malloc"](80 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 80;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore25WorkerInspectorControllerC1EPNS_17WorkerGlobalScopeE;
var __ZN7WebCore25WorkerInspectorControllerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZTVN7WebCore22PageInjectedScriptHostE=env.__ZTVN7WebCore22PageInjectedScriptHostE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore25WorkerInspectorControllerE=(H_BASE+8)|0;
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
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore25WorkerInspectorControllerC2EPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 i15 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore19InstrumentingAgentsC1ERN9Inspector20InspectorEnvironmentE(i15, i14);
 i16 = i1 + 8 | 0;
 HEAP32[i16 >> 2] = i15;
 i15 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i15 + 4 >> 2] = 1;
 _memset(i15 + 8 | 0, 0, 20) | 0;
 HEAP32[i15 >> 2] = __ZTVN7WebCore22PageInjectedScriptHostE + 8;
 i17 = __ZN3WTF10fastMallocEj(60) | 0;
 i18 = i4 | 0;
 HEAP32[i18 >> 2] = i15;
 __ZN7WebCore25PageInjectedScriptManagerC1ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE(i17, i14, i4);
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = i17;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 + 4 | 0;
   i14 = i18 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i18 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
  }
 } while (0);
 i17 = i1 + 16 | 0;
 i15 = i1 + 20 | 0;
 _memset(i17 | 0, 0, 24) | 0;
 HEAP32[i1 + 40 >> 2] = i1 + 52;
 HEAP32[i1 + 44 >> 2] = 2;
 HEAP32[i1 + 48 >> 2] = 0;
 i1 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 i14 = __Znwj(40) | 0;
 __ZN7WebCore18WorkerRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE(i14, i1, i18, i2);
 HEAP32[i17 >> 2] = i14;
 i18 = i5 | 0;
 HEAP32[i18 >> 2] = i14;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i5);
 i5 = HEAP32[i18 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 }
 i5 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 i14 = __Znwj(92) | 0;
 __ZN7WebCore18WorkerConsoleAgentC1EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i14, i5, i18);
 __ZN7WebCore19WorkerDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i6, HEAP32[i16 >> 2] | 0, i2, HEAP32[i4 >> 2] | 0);
 i18 = i6 | 0;
 i6 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i18 = HEAP32[i17 >> 2] | 0;
 __ZN7WebCore21InspectorRuntimeAgent20setScriptDebugServerEPNS_17ScriptDebugServerE(i18, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] & 7](i6 | 0) | 0);
 i18 = i7 | 0;
 HEAP32[i18 >> 2] = i6;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i7);
 i7 = HEAP32[i18 >> 2] | 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
 }
 __ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_17WorkerGlobalScopeEPNS_25PageInjectedScriptManagerE(i9, HEAP32[i16 >> 2] | 0, i14, i2, HEAP32[i4 >> 2] | 0);
 i2 = i8 | 0;
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 __ZN7WebCore26InspectorHeapProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i11, HEAP32[i16 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 i8 = i10 | 0;
 i7 = i11 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i11;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i10);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i16 >> 2] | 0;
 i16 = __Znwj(88) | 0;
 __ZN7WebCore22InspectorTimelineAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE(i16, i10, 0, 0, 1, 0);
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = i16;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i12);
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
 }
 i12 = i13 | 0;
 HEAP32[i12 >> 2] = i14;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i13);
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
 }
 i13 = HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 _memset(i13 + 4 | 0, 0, 20) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25WorkerInspectorControllerC1EPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 4 >> 2] = i2;
 i15 = __ZN3WTF10fastMallocEj(88) | 0;
 __ZN7WebCore19InstrumentingAgentsC1ERN9Inspector20InspectorEnvironmentE(i15, i14);
 i16 = i1 + 8 | 0;
 HEAP32[i16 >> 2] = i15;
 i15 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i15 + 4 >> 2] = 1;
 _memset(i15 + 8 | 0, 0, 20) | 0;
 HEAP32[i15 >> 2] = __ZTVN7WebCore22PageInjectedScriptHostE + 8;
 i17 = __ZN3WTF10fastMallocEj(60) | 0;
 i18 = i4 | 0;
 HEAP32[i18 >> 2] = i15;
 __ZN7WebCore25PageInjectedScriptManagerC1ERN9Inspector20InspectorEnvironmentEN3WTF10PassRefPtrINS1_18InjectedScriptHostEEE(i17, i14, i4);
 i4 = i1 + 12 | 0;
 HEAP32[i4 >> 2] = i17;
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 + 4 | 0;
   i14 = i18 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i14 >> 2] = i15;
    break;
   }
   i15 = i18 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
  }
 } while (0);
 i17 = i1 + 16 | 0;
 i15 = i1 + 20 | 0;
 _memset(i17 | 0, 0, 24) | 0;
 HEAP32[i1 + 40 >> 2] = i1 + 52;
 HEAP32[i1 + 44 >> 2] = 2;
 HEAP32[i1 + 48 >> 2] = 0;
 i1 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 i14 = __Znwj(40) | 0;
 __ZN7WebCore18WorkerRuntimeAgentC1EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerEPNS_17WorkerGlobalScopeE(i14, i1, i18, i2);
 HEAP32[i17 >> 2] = i14;
 i18 = i5 | 0;
 HEAP32[i18 >> 2] = i14;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i5);
 i5 = HEAP32[i18 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 }
 i5 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 i14 = __Znwj(92) | 0;
 __ZN7WebCore18WorkerConsoleAgentC1EPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i14, i5, i18);
 __ZN7WebCore19WorkerDebuggerAgent6createEPNS_19InstrumentingAgentsEPNS_17WorkerGlobalScopeEPN9Inspector21InjectedScriptManagerE(i6, HEAP32[i16 >> 2] | 0, i2, HEAP32[i4 >> 2] | 0);
 i18 = i6 | 0;
 i6 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i18 = HEAP32[i17 >> 2] | 0;
 __ZN7WebCore21InspectorRuntimeAgent20setScriptDebugServerEPNS_17ScriptDebugServerE(i18, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] & 7](i6 | 0) | 0);
 i18 = i7 | 0;
 HEAP32[i18 >> 2] = i6;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i7);
 i7 = HEAP32[i18 >> 2] | 0;
 if ((i7 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
 }
 __ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_17WorkerGlobalScopeEPNS_25PageInjectedScriptManagerE(i9, HEAP32[i16 >> 2] | 0, i14, i2, HEAP32[i4 >> 2] | 0);
 i2 = i8 | 0;
 i7 = i9 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i9;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 __ZN7WebCore26InspectorHeapProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_25PageInjectedScriptManagerE(i11, HEAP32[i16 >> 2] | 0, HEAP32[i4 >> 2] | 0);
 i8 = i10 | 0;
 i7 = i11 | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i11;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i10);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i16 >> 2] | 0;
 i16 = __Znwj(88) | 0;
 __ZN7WebCore22InspectorTimelineAgentC1EPNS_19InstrumentingAgentsEPNS_18InspectorPageAgentEPNS_20InspectorMemoryAgentENS0_13InspectorTypeEPNS_15InspectorClientE(i16, i10, 0, 0, 1, 0);
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = i16;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i12);
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
 }
 i12 = i13 | 0;
 HEAP32[i12 >> 2] = i14;
 __ZN9Inspector22InspectorAgentRegistry6appendEN3WTF10PassOwnPtrINS_18InspectorAgentBaseEEE(i15, i13);
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
 }
 i13 = HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 _memset(i13 + 4 | 0, 0, 20) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25WorkerInspectorController15connectFrontendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = H_BASE + 64;
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4;
 HEAP32[i5 >> 2] = i7;
 if ((i6 | 0) == 0) {
  i8 = i7;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  i8 = HEAP32[i5 >> 2] | 0;
 }
 __ZN9Inspector26InspectorBackendDispatcher6createEPNS_24InspectorFrontendChannelE(i3, i8);
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i6 = i1 + 36 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i4 = i7 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i4 = HEAP32[i3 + 12 >> 2] | 0;
    if ((i4 | 0) > 0) {
     i3 = 0;
     while (1) {
      i10 = HEAP32[i9 + (i3 << 3) >> 2] | 0;
      i11 = i10;
      do {
       if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
        i12 = i10 | 0;
        i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
        if ((i13 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i10);
         break;
        } else {
         HEAP32[i12 >> 2] = i13;
         break;
        }
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
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i4 = i7 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   i3 = HEAP32[i8 + 8 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i4 = HEAP32[i8 + 12 >> 2] | 0;
    if ((i4 | 0) > 0) {
     i8 = 0;
     while (1) {
      i10 = HEAP32[i3 + (i8 << 3) >> 2] | 0;
      i11 = i10;
      do {
       if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
        i13 = i10 | 0;
        i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
        if ((i12 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i10);
         break;
        } else {
         HEAP32[i13 >> 2] = i12;
         break;
        }
       }
      } while (0);
      i8 = i8 + 1 | 0;
      if ((i8 | 0) >= (i4 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i7);
  }
 } while (0);
 __ZN9Inspector22InspectorAgentRegistry27didCreateFrontendAndBackendEPNS_24InspectorFrontendChannelEPNS_26InspectorBackendDispatcherE(i1 + 20 | 0, HEAP32[i5 >> 2] | 0, HEAP32[i6 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25WorkerInspectorControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 __ZN7WebCore19InstrumentingAgents5resetEv(HEAP32[i2 >> 2] | 0);
 __ZN7WebCore25WorkerInspectorController18disconnectFrontendEv(i1);
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 40 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 3) | 0;
  i4 = i6;
  while (1) {
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if (!((i1 + 52 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i7 = i3 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i7 = HEAP32[i5 + 12 >> 2] | 0;
    if ((i7 | 0) > 0) {
     i5 = 0;
     while (1) {
      i6 = HEAP32[i4 + (i5 << 3) >> 2] | 0;
      i8 = i6;
      do {
       if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
        i9 = i6 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
        if ((i10 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i9 >> 2] = i10;
         break;
        }
       }
      } while (0);
      i5 = i5 + 1 | 0;
      if ((i5 | 0) >= (i7 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = i1 + 28 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((i7 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i8 = i6 + (i7 << 2) | 0;
  i7 = i6;
  while (1) {
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   }
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25WorkerInspectorControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 8 | 0;
 __ZN7WebCore19InstrumentingAgents5resetEv(HEAP32[i2 >> 2] | 0);
 __ZN7WebCore25WorkerInspectorController18disconnectFrontendEv(i1);
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 40 | 0;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 << 3) | 0;
  i4 = i6;
  while (1) {
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if (!((i1 + 52 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i7 = i3 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i7 = HEAP32[i5 + 12 >> 2] | 0;
    if ((i7 | 0) > 0) {
     i5 = 0;
     while (1) {
      i6 = HEAP32[i4 + (i5 << 3) >> 2] | 0;
      i8 = i6;
      do {
       if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
        i9 = i6 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
        if ((i10 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i9 >> 2] = i10;
         break;
        }
       }
      } while (0);
      i5 = i5 + 1 | 0;
      if ((i5 | 0) >= (i7 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i4);
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = i1 + 28 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((i7 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i8 = i6 + (i7 << 2) | 0;
  i7 = i6;
  while (1) {
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
   }
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25WorkerInspectorController30willCallInjectedScriptFunctionEPN3JSC9ExecStateERKN3WTF6StringEi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN7WebCore35scriptExecutionContextFromExecStateEPN3JSC9ExecStateE(i2) | 0;
 L1 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
  } else {
   do {
    if ((i7 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 7](i7) | 0) {
      i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i7 - 156 + 68 | 0) | 0) | 0;
     } else {
      i8 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i7) | 0;
     }
     if ((i8 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation20willCallFunctionImplEPNS_19InstrumentingAgentsERKN3WTF6StringEiPNS_22ScriptExecutionContextE(i6, i8, i3, i4, i7);
     break L1;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i6);
  }
 } while (0);
 i7 = i1 + 40 | 0;
 i4 = i1 + 48 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i1 + 44 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i7, i6);
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  __ZN7WebCore30InspectorInstrumentationCookieC1ERKS0_((HEAP32[i7 >> 2] | 0) + (i3 << 3) | 0, i6);
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (i2 - i7 >> 3 << 3) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 << 3) | 0;
   __ZN7WebCore30InspectorInstrumentationCookieC1ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 __ZN7WebCore30InspectorInstrumentationCookieC1ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore25WorkerInspectorController18disconnectFrontendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN9Inspector22InspectorAgentRegistry29willDestroyFrontendAndBackendEv(i1 + 20 | 0);
 i3 = i1 + 36 | 0;
 HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i4 = HEAP32[i3 + 12 >> 2] | 0;
    if ((i4 | 0) > 0) {
     i3 = 0;
     while (1) {
      i6 = HEAP32[i5 + (i3 << 3) >> 2] | 0;
      i7 = i6;
      do {
       if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
        i8 = i6 | 0;
        i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
        if ((i9 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i6);
         break;
        } else {
         HEAP32[i8 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i3 = i3 + 1 | 0;
      if ((i3 | 0) >= (i4 | 0)) {
       break;
      }
     }
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 2 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 2;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   __ZN7WebCore30InspectorInstrumentationCookieC1ERKS0_(i2, i6);
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i6);
   i10 = i6 + 8 | 0;
   if ((i10 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i10;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore25WorkerInspectorController29didCallInjectedScriptFunctionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 48 | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i4 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 __ZN7WebCore30InspectorInstrumentationCookieC1ERKS0_(i3, (HEAP32[i6 >> 2] | 0) + (i5 << 3) | 0);
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i1 = i5 - 1 | 0;
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev((HEAP32[i6 >> 2] | 0) + (i1 << 3) | 0);
 HEAP32[i4 >> 2] = i1;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i3);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i3);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation19didCallFunctionImplERKNS_30InspectorInstrumentationCookieE(i3);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore25WorkerInspectorController6resumeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] & 3](i5, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i3 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
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
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 4;
}
function viiiiiii___ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
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
function viiiii___ZN7WebCore28evaluateHandlerFromAnyThreadEPN3JSC9ExecStateERKNS0_10SourceCodeENS0_7JSValueEPS6___wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore28evaluateHandlerFromAnyThreadEPN3JSC9ExecStateERKNS0_10SourceCodeENS0_7JSValueEPS6_(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore12_GLOBAL__N_118PageInspectorProxy21sendMessageToFrontendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 3](i3, i2);
 return 1;
}
function __ZN7WebCore25WorkerInspectorController27dispatchMessageFromFrontendERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN9Inspector26InspectorBackendDispatcher8dispatchERKN3WTF6StringE(i3, i2);
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
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore25WorkerInspectorControllerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25WorkerInspectorControllerD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b4(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(4);
}
function __ZNK7WebCore25WorkerInspectorController29canAccessInspectedScriptStateEPN3JSC9ExecStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
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
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function __ZNK7WebCore25WorkerInspectorController19functionCallHandlerEv(i1) {
 i1 = i1 | 0;
 return F_BASE_viiiiiii + 2 | 0;
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
function __ZNK7WebCore25WorkerInspectorController15evaluateHandlerEv(i1) {
 i1 = i1 | 0;
 return F_BASE_viiiii + 2 | 0;
}
function __ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZNK7WebCore25WorkerInspectorController22developerExtrasEnabledEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD2Ev(i1) {
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore28evaluateHandlerFromAnyThreadEPN3JSC9ExecStateERKNS0_10SourceCodeENS0_7JSValueEPS6___wrapper,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD2Ev,b1,__ZN7WebCore25WorkerInspectorControllerD0Ev,b1,__ZN7WebCore25WorkerInspectorControllerD2Ev,b1,__ZN7WebCore25WorkerInspectorController29didCallInjectedScriptFunctionEv,b1,__ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD0Ev,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore25WorkerInspectorControllerC2EPNS_17WorkerGlobalScopeE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore25WorkerInspectorController15evaluateHandlerEv,b3,__ZNK7WebCore25WorkerInspectorController22developerExtrasEnabledEv,b3,__ZNK7WebCore25WorkerInspectorController19functionCallHandlerEv,b3];
  var FUNCTION_TABLE_viiiiiii = [b4,b4,viiiiiii___ZN7WebCore32functionCallHandlerFromAnyThreadEPN3JSC9ExecStateENS0_7JSValueENS0_8CallTypeERKNS0_8CallDataES3_RKNS0_7ArgListE__wrapper,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,__ZNK7WebCore25WorkerInspectorController29canAccessInspectedScriptStateEPN3JSC9ExecStateE,b6,__ZN7WebCore12_GLOBAL__N_118PageInspectorProxy21sendMessageToFrontendERKN3WTF6StringE,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore25WorkerInspectorController30willCallInjectedScriptFunctionEPN3JSC9ExecStateERKN3WTF6StringEi,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZTVN7WebCore22PageInjectedScriptHostE": __ZTVN7WebCore22PageInjectedScriptHostE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore25WorkerInspectorController15evaluateHandlerEv","__ZN7WebCore12_GLOBAL__N_118PageInspectorProxy21sendMessageToFrontendERKN3WTF6StringE","_strlen","__ZNK7WebCore25WorkerInspectorController29canAccessInspectedScriptStateEPN3JSC9ExecStateE","__ZNK7WebCore25WorkerInspectorController22developerExtrasEnabledEv","__ZN7WebCore25WorkerInspectorController30willCallInjectedScriptFunctionEPN3JSC9ExecStateERKN3WTF6StringEi","__ZN7WebCore25WorkerInspectorController29didCallInjectedScriptFunctionEv","__ZN7WebCore25WorkerInspectorController6resumeEv","__ZN7WebCore25WorkerInspectorControllerC2EPNS_17WorkerGlobalScopeE","_memset","_memcpy","__ZN7WebCore25WorkerInspectorController15connectFrontendEv","__ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore25WorkerInspectorController27dispatchMessageFromFrontendERKN3WTF6StringE","__ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore25WorkerInspectorController19functionCallHandlerEv","__ZN3WTF6VectorIN7WebCore30InspectorInstrumentationCookieELj2ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore12_GLOBAL__N_118PageInspectorProxyD2Ev","__ZN7WebCore25WorkerInspectorControllerD0Ev","__ZN7WebCore25WorkerInspectorControllerD2Ev","__ZN7WebCore25WorkerInspectorController18disconnectFrontendEv"]

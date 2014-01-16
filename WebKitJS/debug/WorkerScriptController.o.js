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
var __ZN7WebCore22WorkerScriptControllerC1EPNS_17WorkerGlobalScopeE;
var __ZN7WebCore22WorkerScriptControllerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE=env.__ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE|0;
  var __ZN7WebCore37JSDedicatedWorkerGlobalScopePrototype6s_infoE=env.__ZN7WebCore37JSDedicatedWorkerGlobalScopePrototype6s_infoE|0;
  var __ZN7WebCore34JSSharedWorkerGlobalScopePrototype6s_infoE=env.__ZN7WebCore34JSSharedWorkerGlobalScopePrototype6s_infoE|0;
  var __ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE=env.__ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE|0;
  var __ZN7WebCore28JSWorkerGlobalScopePrototype6s_infoE=env.__ZN7WebCore28JSWorkerGlobalScopePrototype6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore19WebCoreJSClientDataE=(H_BASE+8)|0;
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
function __ZN7WebCore22WorkerScriptController10initScriptEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i2 + 112 | 0;
 i18 = i2 + 120 | 0;
 i19 = i1 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i16, HEAP32[i19 >> 2] | 0);
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP8[i15 | 0] = 17;
 HEAP8[i15 + 1 | 0] = -96;
 HEAP8[i15 + 2 | 0] = 0;
 i21 = i20 + 7104 | 0;
 i22 = i21 | 0;
 i23 = HEAP32[i22 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i24 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i21, 64) | 0;
 } else {
  HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
  i24 = i23;
 }
 HEAP32[i24 >> 2] = 0;
 i23 = i14 | 0;
 HEAP32[i23 >> 2] = 0;
 HEAP32[i23 + 4 >> 2] = -3;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i24, i20, 0, i14, i15, __ZN7WebCore28JSWorkerGlobalScopePrototype6s_infoE, 0, 0);
 i15 = HEAP32[i19 >> 2] | 0;
 i14 = i15 + 13176 | 0;
 i20 = i14 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 if ((i23 | 0) == 0) {
  i25 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i14, 8) | 0;
 } else {
  HEAP32[i20 >> 2] = HEAP32[i23 >> 2];
  i25 = i23;
 }
 HEAP32[i25 >> 2] = i24;
 HEAP32[i25 + 4 >> 2] = 0;
 if ((HEAP32[i15 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i23 = i15 + 20440 | 0;
 i20 = HEAP32[i23 >> 2] | 0;
 if ((i20 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i15 + 20360 | 0);
  i26 = HEAP32[i23 >> 2] | 0;
 } else {
  i26 = i20;
 }
 i20 = i26 + 12 | 0;
 HEAP32[i23 >> 2] = HEAP32[i20 >> 2];
 i23 = i26 + 4 | 0;
 HEAP32[i23 >> 2] = -6;
 i14 = i26;
 HEAP32[i14 >> 2] = 0;
 i22 = i26 + 8 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i15 + 20420 | 0;
 i27 = HEAP32[i21 >> 2] | 0;
 HEAP32[i22 >> 2] = i15 + 20408;
 HEAP32[i20 >> 2] = i27;
 HEAP32[i21 >> 2] = i26;
 HEAP32[i27 + 8 >> 2] = i26;
 i27 = i26 | 0;
 HEAP32[i11 + 4 >> 2] = (i25 | 0) == 0 ? -6 : -5;
 HEAP32[i11 >> 2] = i25;
 i25 = (i26 & -4096) + 12 | 0;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[i25 >> 2] | 0, i27, i11);
 i21 = i11 | 0;
 i11 = HEAP32[i21 + 4 >> 2] | 0;
 i15 = i26 | 0;
 HEAP32[i15 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i15 + 4 >> 2] = i11;
 i11 = i1 + 4 | 0;
 i15 = HEAP32[i11 >> 2] | 0;
 i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 104 >> 2] & 1](i15) | 0;
 i15 = HEAP32[i19 >> 2] | 0;
 i22 = (i26 | 0) == 0;
 do {
  if (i22) {
   i28 = 0;
  } else {
   if ((HEAP32[i23 >> 2] | 0) == -6) {
    i28 = 0;
    break;
   }
   i28 = HEAP32[i14 >> 2] | 0;
  }
 } while (0);
 i23 = (i28 | 0) == 0 ? -6 : -5;
 i29 = i28;
 do {
  if (i21) {
   HEAP8[i10 | 0] = 17;
   HEAP8[i10 + 1 | 0] = 32;
   HEAP8[i10 + 2 | 0] = 0;
   i28 = i15 + 7104 | 0;
   i30 = i28 | 0;
   i31 = HEAP32[i30 >> 2] | 0;
   if ((i31 | 0) == 0) {
    i32 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i28, 64) | 0;
   } else {
    HEAP32[i30 >> 2] = HEAP32[i31 >> 2];
    i32 = i31;
   }
   HEAP32[i32 >> 2] = 0;
   i31 = i9 | 0;
   HEAP32[i31 >> 2] = i29;
   HEAP32[i31 + 4 >> 2] = i23;
   __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i32, i15, 0, i9, i10, __ZN7WebCore37JSDedicatedWorkerGlobalScopePrototype6s_infoE, 0, 0);
   i31 = HEAP32[i19 >> 2] | 0;
   i30 = i31 + 13176 | 0;
   i28 = i30 | 0;
   i33 = HEAP32[i28 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i34 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i30, 8) | 0;
   } else {
    HEAP32[i28 >> 2] = HEAP32[i33 >> 2];
    i34 = i33;
   }
   HEAP32[i34 >> 2] = i32;
   HEAP32[i34 + 4 >> 2] = 0;
   if ((HEAP32[i31 + 20444 >> 2] | 0) != 0) {
    _WTFCrash();
   }
   i33 = i31 + 20440 | 0;
   i28 = HEAP32[i33 >> 2] | 0;
   if ((i28 | 0) == 0) {
    __ZN3JSC9HandleSet4growEv(i31 + 20360 | 0);
    i35 = HEAP32[i33 >> 2] | 0;
   } else {
    i35 = i28;
   }
   i28 = i35 + 12 | 0;
   HEAP32[i33 >> 2] = HEAP32[i28 >> 2];
   i33 = i35 + 4 | 0;
   HEAP32[i33 >> 2] = -6;
   i30 = i35;
   HEAP32[i30 >> 2] = 0;
   i36 = i35 + 8 | 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   i37 = i31 + 20420 | 0;
   i38 = HEAP32[i37 >> 2] | 0;
   HEAP32[i36 >> 2] = i31 + 20408;
   HEAP32[i28 >> 2] = i38;
   HEAP32[i37 >> 2] = i35;
   HEAP32[i38 + 8 >> 2] = i35;
   i38 = i35 | 0;
   HEAP32[i7 + 4 >> 2] = (i34 | 0) == 0 ? -6 : -5;
   HEAP32[i7 >> 2] = i34;
   i37 = (i35 & -4096) + 12 | 0;
   __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[i37 >> 2] | 0, i38, i7);
   i31 = i7 | 0;
   i36 = HEAP32[i31 + 4 >> 2] | 0;
   i39 = i35 | 0;
   HEAP32[i39 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i39 + 4 >> 2] = i36;
   i36 = HEAP32[i19 >> 2] | 0;
   i39 = (i35 | 0) == 0;
   do {
    if (i39) {
     i40 = 0;
    } else {
     if ((HEAP32[i33 >> 2] | 0) == -6) {
      i40 = 0;
      break;
     }
     i40 = HEAP32[i30 >> 2] | 0;
    }
   } while (0);
   i33 = (i40 | 0) == 0;
   HEAP8[i6 | 0] = 27;
   HEAP8[i6 + 1 | 0] = -16;
   HEAP8[i6 + 2 | 0] = 1;
   i31 = i36 + 7104 | 0;
   i41 = i31 | 0;
   i42 = HEAP32[i41 >> 2] | 0;
   if ((i42 | 0) == 0) {
    i43 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i31, 64) | 0;
   } else {
    HEAP32[i41 >> 2] = HEAP32[i42 >> 2];
    i43 = i42;
   }
   HEAP32[i43 >> 2] = 0;
   i42 = i43;
   i41 = i5 | 0;
   HEAP32[i41 >> 2] = (i33 ? 0 : 0) | i40;
   HEAP32[i41 + 4 >> 2] = i33 ? -6 : -5;
   __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i42, i36, 0, i5, i6, __ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE, 0, 0);
   i33 = i1 + 8 | 0;
   i41 = HEAP32[i19 >> 2] | 0;
   i31 = HEAP32[i11 >> 2] | 0;
   i44 = i17 | 0;
   HEAP32[i44 >> 2] = i31;
   if ((i31 | 0) != 0) {
    i45 = i31 + 156 | 0;
    HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 1;
   }
   __ZN3JSC6StrongIN7WebCore19JSWorkerGlobalScopeEE3setERNS_2VMEPS2_(i33, i41, __ZN7WebCore28JSDedicatedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_26DedicatedWorkerGlobalScopeEEE(i41, i42, i17) | 0);
   i42 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i44 = i42 + 156 | 0;
     i41 = i44 | 0;
     i45 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
     if ((i45 | 0) != 0) {
      HEAP32[i41 >> 2] = i45;
      break;
     }
     i45 = i44 - 156 | 0;
     if ((i45 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 15](i45);
    }
   } while (0);
   i42 = i33 | 0;
   i36 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     i46 = 0;
    } else {
     if ((HEAP32[i36 + 4 >> 2] | 0) == -6) {
      i46 = 0;
      break;
     }
     i46 = HEAP32[i36 >> 2] | 0;
    }
   } while (0);
   HEAP32[i24 + 4 >> 2] = i46;
   i36 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     i47 = 0;
    } else {
     if ((HEAP32[i36 + 4 >> 2] | 0) == -6) {
      i47 = 0;
      break;
     }
     i47 = HEAP32[i36 >> 2] | 0;
    }
   } while (0);
   HEAP32[i32 + 4 >> 2] = i47;
   i36 = HEAP32[HEAP32[i14 >> 2] >> 2] | 0;
   i33 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i33 | 0) == 0) {
     i48 = 0;
    } else {
     if ((HEAP32[i33 + 4 >> 2] | 0) == -6) {
      i48 = 0;
      break;
     }
     i48 = HEAP32[i33 >> 2] | 0;
    }
   } while (0);
   HEAP32[i36 + 4 >> 2] = i48;
   i33 = HEAP32[HEAP32[i30 >> 2] >> 2] | 0;
   i45 = HEAP32[i42 >> 2] | 0;
   do {
    if ((i45 | 0) == 0) {
     i49 = 0;
    } else {
     if ((HEAP32[i45 + 4 >> 2] | 0) == -6) {
      i49 = 0;
      break;
     }
     i49 = HEAP32[i45 >> 2] | 0;
    }
   } while (0);
   HEAP32[i33 + 4 >> 2] = i49;
   if (i39) {
    break;
   }
   i45 = HEAP32[i37 >> 2] | 0;
   i42 = i45 + 84 | 0;
   if ((i35 | 0) == (HEAP32[i42 >> 2] | 0)) {
    HEAP32[i42 >> 2] = HEAP32[i28 >> 2];
   }
   i42 = i38 + 8 | 0;
   i30 = HEAP32[i42 >> 2] | 0;
   i36 = HEAP32[i28 >> 2] | 0;
   HEAP32[i30 + 12 >> 2] = i36;
   HEAP32[i36 + 8 >> 2] = i30;
   HEAP32[i42 >> 2] = 0;
   HEAP32[i28 >> 2] = 0;
   i42 = i45 + 80 | 0;
   HEAP32[i28 >> 2] = HEAP32[i42 >> 2];
   HEAP32[i42 >> 2] = i35;
  } else {
   HEAP8[i4 | 0] = 17;
   HEAP8[i4 + 1 | 0] = 0;
   HEAP8[i4 + 2 | 0] = 0;
   i42 = i15 + 7104 | 0;
   i45 = i42 | 0;
   i30 = HEAP32[i45 >> 2] | 0;
   if ((i30 | 0) == 0) {
    i50 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i42, 64) | 0;
   } else {
    HEAP32[i45 >> 2] = HEAP32[i30 >> 2];
    i50 = i30;
   }
   HEAP32[i50 >> 2] = 0;
   i30 = i3 | 0;
   HEAP32[i30 >> 2] = i29;
   HEAP32[i30 + 4 >> 2] = i23;
   __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i50, i15, 0, i3, i4, __ZN7WebCore34JSSharedWorkerGlobalScopePrototype6s_infoE, 0, 0);
   i30 = HEAP32[i19 >> 2] | 0;
   i45 = i30 + 13176 | 0;
   i42 = i45 | 0;
   i36 = HEAP32[i42 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i51 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i45, 8) | 0;
   } else {
    HEAP32[i42 >> 2] = HEAP32[i36 >> 2];
    i51 = i36;
   }
   HEAP32[i51 >> 2] = i50;
   HEAP32[i51 + 4 >> 2] = 0;
   if ((HEAP32[i30 + 20444 >> 2] | 0) != 0) {
    _WTFCrash();
   }
   i36 = i30 + 20440 | 0;
   i42 = HEAP32[i36 >> 2] | 0;
   if ((i42 | 0) == 0) {
    __ZN3JSC9HandleSet4growEv(i30 + 20360 | 0);
    i52 = HEAP32[i36 >> 2] | 0;
   } else {
    i52 = i42;
   }
   i42 = i52 + 12 | 0;
   HEAP32[i36 >> 2] = HEAP32[i42 >> 2];
   i36 = i52 + 4 | 0;
   HEAP32[i36 >> 2] = -6;
   i45 = i52;
   HEAP32[i45 >> 2] = 0;
   i44 = i52 + 8 | 0;
   HEAP32[i44 >> 2] = 0;
   HEAP32[i42 >> 2] = 0;
   i41 = i30 + 20420 | 0;
   i31 = HEAP32[i41 >> 2] | 0;
   HEAP32[i44 >> 2] = i30 + 20408;
   HEAP32[i42 >> 2] = i31;
   HEAP32[i41 >> 2] = i52;
   HEAP32[i31 + 8 >> 2] = i52;
   i31 = i52 | 0;
   HEAP32[i8 + 4 >> 2] = (i51 | 0) == 0 ? -6 : -5;
   HEAP32[i8 >> 2] = i51;
   i41 = (i52 & -4096) + 12 | 0;
   __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[i41 >> 2] | 0, i31, i8);
   i30 = i8 | 0;
   i44 = HEAP32[i30 + 4 >> 2] | 0;
   i53 = i52 | 0;
   HEAP32[i53 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i53 + 4 >> 2] = i44;
   i44 = HEAP32[i19 >> 2] | 0;
   i53 = (i52 | 0) == 0;
   do {
    if (i53) {
     i54 = 0;
    } else {
     if ((HEAP32[i36 >> 2] | 0) == -6) {
      i54 = 0;
      break;
     }
     i54 = HEAP32[i45 >> 2] | 0;
    }
   } while (0);
   i36 = (i54 | 0) == 0;
   HEAP8[i13 | 0] = 27;
   HEAP8[i13 + 1 | 0] = -16;
   HEAP8[i13 + 2 | 0] = 1;
   i28 = i44 + 7104 | 0;
   i38 = i28 | 0;
   i37 = HEAP32[i38 >> 2] | 0;
   if ((i37 | 0) == 0) {
    i55 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i28, 64) | 0;
   } else {
    HEAP32[i38 >> 2] = HEAP32[i37 >> 2];
    i55 = i37;
   }
   HEAP32[i55 >> 2] = 0;
   i37 = i55;
   i38 = i12 | 0;
   HEAP32[i38 >> 2] = (i36 ? 0 : 0) | i54;
   HEAP32[i38 + 4 >> 2] = i36 ? -6 : -5;
   __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i37, i44, 0, i12, i13, __ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE, 0, 0);
   i36 = i1 + 8 | 0;
   i38 = HEAP32[i19 >> 2] | 0;
   i28 = HEAP32[i11 >> 2] | 0;
   i39 = i18 | 0;
   HEAP32[i39 >> 2] = i28;
   if ((i28 | 0) != 0) {
    i33 = i28 + 156 | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
   }
   __ZN3JSC6StrongIN7WebCore19JSWorkerGlobalScopeEE3setERNS_2VMEPS2_(i36, i38, __ZN7WebCore25JSSharedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_23SharedWorkerGlobalScopeEEE(i38, i37, i18) | 0);
   i37 = HEAP32[i39 >> 2] | 0;
   do {
    if ((i37 | 0) != 0) {
     i39 = i37 + 156 | 0;
     i38 = i39 | 0;
     i33 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i33 | 0) != 0) {
      HEAP32[i38 >> 2] = i33;
      break;
     }
     i33 = i39 - 156 | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i33 >> 2] | 0) + 4 >> 2] & 15](i33);
    }
   } while (0);
   i37 = HEAP32[HEAP32[i14 >> 2] >> 2] | 0;
   i44 = i36 | 0;
   i33 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i33 | 0) == 0) {
     i56 = 0;
    } else {
     if ((HEAP32[i33 + 4 >> 2] | 0) == -6) {
      i56 = 0;
      break;
     }
     i56 = HEAP32[i33 >> 2] | 0;
    }
   } while (0);
   HEAP32[i37 + 4 >> 2] = i56;
   i33 = HEAP32[HEAP32[i45 >> 2] >> 2] | 0;
   i36 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i36 | 0) == 0) {
     i57 = 0;
    } else {
     if ((HEAP32[i36 + 4 >> 2] | 0) == -6) {
      i57 = 0;
      break;
     }
     i57 = HEAP32[i36 >> 2] | 0;
    }
   } while (0);
   HEAP32[i33 + 4 >> 2] = i57;
   if (i53) {
    break;
   }
   i36 = HEAP32[i41 >> 2] | 0;
   i44 = i36 + 84 | 0;
   if ((i52 | 0) == (HEAP32[i44 >> 2] | 0)) {
    HEAP32[i44 >> 2] = HEAP32[i42 >> 2];
   }
   i44 = i31 + 8 | 0;
   i45 = HEAP32[i44 >> 2] | 0;
   i37 = HEAP32[i42 >> 2] | 0;
   HEAP32[i45 + 12 >> 2] = i37;
   HEAP32[i37 + 8 >> 2] = i45;
   HEAP32[i44 >> 2] = 0;
   HEAP32[i42 >> 2] = 0;
   i44 = i36 + 80 | 0;
   HEAP32[i42 >> 2] = HEAP32[i44 >> 2];
   HEAP32[i44 >> 2] = i52;
  }
 } while (0);
 if (i22) {
  __ZN3JSC12JSLockHolderD1Ev(i16);
  STACKTOP = i2;
  return;
 }
 i22 = HEAP32[i25 >> 2] | 0;
 i25 = i22 + 84 | 0;
 if ((i26 | 0) == (HEAP32[i25 >> 2] | 0)) {
  HEAP32[i25 >> 2] = HEAP32[i20 >> 2];
 }
 i25 = i27 + 8 | 0;
 i27 = HEAP32[i25 >> 2] | 0;
 i52 = HEAP32[i20 >> 2] | 0;
 HEAP32[i27 + 12 >> 2] = i52;
 HEAP32[i52 + 8 >> 2] = i27;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 i25 = i22 + 80 | 0;
 HEAP32[i20 >> 2] = HEAP32[i25 >> 2];
 HEAP32[i25 >> 2] = i26;
 __ZN3JSC12JSLockHolderD1Ev(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeEPN10Deprecated11ScriptValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i1 + 12 | 0;
 if ((HEAP8[i19] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i20 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   i21 = 5;
  } else {
   if ((HEAP32[i20 + 4 >> 2] | 0) == -6) {
    i21 = 5;
    break;
   }
   i22 = i20;
   i23 = i1 + 8 | 0;
  }
 } while (0);
 if ((i21 | 0) == 5) {
  __ZN7WebCore22WorkerScriptController10initScriptEv(i1);
  i20 = i1 + 8 | 0;
  i22 = HEAP32[i20 >> 2] | 0;
  i23 = i20;
 }
 do {
  if ((i22 | 0) == 0) {
   i24 = 0;
  } else {
   if ((HEAP32[i22 + 4 >> 2] | 0) == -6) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i22 >> 2] | 0;
  }
 } while (0);
 i22 = __ZN3JSC14JSGlobalObject10globalExecEv(i24) | 0;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i7, i22);
 i24 = i8 + 4 | 0;
 HEAP32[i24 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i20 = i2 + 4 | 0;
 i25 = HEAP32[i23 >> 2] | 0;
 do {
  if ((i25 | 0) == 0) {
   i26 = 0;
  } else {
   if ((HEAP32[i25 + 4 >> 2] | 0) == -6) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i25 >> 2] | 0;
  }
 } while (0);
 HEAP32[i9 + 4 >> 2] = (i26 | 0) == 0 ? -6 : -5;
 HEAP32[i9 >> 2] = i26;
 __ZN3JSC8evaluateEPNS_9ExecStateERKNS_10SourceCodeENS_7JSValueEPS5_(i10, i22, i20, i9, i8);
 if ((HEAP32[i24 >> 2] | 0) == -6) {
  i21 = 14;
 } else {
  i9 = i8 | 0;
  i20 = HEAP32[i9 + 4 >> 2] | 0;
  i10 = i11 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i10 + 4 >> 2] = i20;
  if (__ZN3JSC30isTerminatedExecutionExceptionENS_7JSValueE(i11) | 0) {
   i21 = 15;
  } else {
   i21 = 14;
  }
 }
 do {
  if ((i21 | 0) == 14) {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[HEAP32[i23 >> 2] >> 2] & -65536) + 1076 >> 2] | 0) + 20544 >> 2] | 0) + 20625 | 0] & 1) != 0) {
    i21 = 15;
    break;
   }
   if ((HEAP32[i24 >> 2] | 0) == -6) {
    break;
   }
   i11 = i12 | 0;
   HEAP32[i11 >> 2] = 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i14 >> 2] = 0;
   i20 = i15 | 0;
   i10 = HEAP32[i2 + 28 >> 2] | 0;
   HEAP32[i20 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i9 = i10 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = __ZN7WebCore22ScriptExecutionContext19sanitizeScriptErrorERN3WTF6StringERiS4_S3_PNS_12CachedScriptE(HEAP32[i1 + 4 >> 2] | 0, i12, i13, i14, i15, HEAP32[i2 + 24 >> 2] | 0) | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   do {
    if (i9) {
     i26 = HEAP32[(HEAP32[i22 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
     i25 = HEAP32[i11 >> 2] | 0;
     i27 = i17 | 0;
     HEAP32[i27 >> 2] = i25;
     if ((i25 | 0) != 0) {
      i28 = i25 | 0;
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
     }
     i28 = __ZN3JSC2VM14throwExceptionEPNS_9ExecStateEPNS_8JSObjectE(i26, i22, __ZN3JSC11createErrorEPNS_9ExecStateERKN3WTF6StringE(i22, i17) | 0) | 0;
     i26 = (i28 | 0) == 0;
     HEAP32[i16 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
     if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
      _WTFCrash();
     }
     i25 = i10 + 20440 | 0;
     i29 = HEAP32[i25 >> 2] | 0;
     if ((i29 | 0) == 0) {
      __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
      i30 = HEAP32[i25 >> 2] | 0;
     } else {
      i30 = i29;
     }
     i29 = i30 + 12 | 0;
     HEAP32[i25 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i30 + 4 >> 2] = -6;
     HEAP32[i30 >> 2] = 0;
     i25 = i30 + 8 | 0;
     HEAP32[i25 >> 2] = 0;
     HEAP32[i29 >> 2] = 0;
     i31 = i10 + 20420 | 0;
     i32 = HEAP32[i31 >> 2] | 0;
     HEAP32[i25 >> 2] = i10 + 20408;
     HEAP32[i29 >> 2] = i32;
     HEAP32[i31 >> 2] = i30;
     HEAP32[i32 + 8 >> 2] = i30;
     i32 = i30 | 0;
     HEAP32[i16 + 4 >> 2] = i32;
     i31 = i5 | 0;
     HEAP32[i31 >> 2] = (i26 ? 0 : 0) | i28;
     HEAP32[i31 + 4 >> 2] = i26 ? -6 : -5;
     __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i30 & -4096) + 12 >> 2] | 0, i32, i5);
     i32 = HEAP32[i31 + 4 >> 2] | 0;
     i26 = i30 | 0;
     HEAP32[i26 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i26 + 4 >> 2] = i32;
     __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i3 + 4 | 0, i16 + 4 | 0) | 0;
     __ZN10Deprecated11ScriptValueD1Ev(i16);
     i32 = HEAP32[i27 >> 2] | 0;
     if ((i32 | 0) == 0) {
      break;
     }
     i27 = i32 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i27 >> 2] = i26;
      break;
     }
    } else {
     i26 = i8 | 0;
     i27 = HEAP32[i26 >> 2] | 0;
     i32 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i18 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
     if ((HEAP32[i10 + 20444 >> 2] | 0) != 0) {
      _WTFCrash();
     }
     i26 = i10 + 20440 | 0;
     i31 = HEAP32[i26 >> 2] | 0;
     if ((i31 | 0) == 0) {
      __ZN3JSC9HandleSet4growEv(i10 + 20360 | 0);
      i33 = HEAP32[i26 >> 2] | 0;
     } else {
      i33 = i31;
     }
     i31 = i33 + 12 | 0;
     HEAP32[i26 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i33 + 4 >> 2] = -6;
     HEAP32[i33 >> 2] = 0;
     i26 = i33 + 8 | 0;
     HEAP32[i26 >> 2] = 0;
     HEAP32[i31 >> 2] = 0;
     i28 = i10 + 20420 | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     HEAP32[i26 >> 2] = i10 + 20408;
     HEAP32[i31 >> 2] = i29;
     HEAP32[i28 >> 2] = i33;
     HEAP32[i29 + 8 >> 2] = i33;
     i29 = i33 | 0;
     HEAP32[i18 + 4 >> 2] = i29;
     i28 = i6 | 0;
     HEAP32[i28 >> 2] = i27;
     HEAP32[i28 + 4 >> 2] = i32;
     __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i33 & -4096) + 12 >> 2] | 0, i29, i6);
     i29 = HEAP32[i28 + 4 >> 2] | 0;
     i32 = i33 | 0;
     HEAP32[i32 >> 2] = HEAP32[i28 >> 2];
     HEAP32[i32 + 4 >> 2] = i29;
     __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i3 + 4 | 0, i18 + 4 | 0) | 0;
     __ZN10Deprecated11ScriptValueD1Ev(i18);
    }
   } while (0);
   i10 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i29 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i29;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i20 = i10 | 0;
   i29 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i29 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i20 >> 2] = i29;
    break;
   }
  }
 } while (0);
 if ((i21 | 0) == 15) {
  HEAP8[i19] = 1;
 }
 __ZN3JSC12JSLockHolderD1Ev(i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19WebCoreJSClientDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
   } else {
    HEAP32[i4 >> 2] = i5;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 8 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 i5 = i3 + (i4 * 20 & -1) | 0;
 L15 : do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
   i7 = i3;
  } else {
   L17 : do {
    if ((i4 | 0) == 0) {
     i8 = i3;
    } else {
     i9 = i3;
     while (1) {
      i10 = HEAP32[i9 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i8 = i9;
       break L17;
      }
      i10 = i9 + 20 | 0;
      if ((i10 | 0) == (i5 | 0)) {
       i7 = i3;
       break L15;
      } else {
       i9 = i10;
      }
     }
    }
   } while (0);
   if ((i8 | 0) == (i5 | 0)) {
    i7 = i3;
    break;
   } else {
    i11 = i8;
   }
   while (1) {
    __ZNK3JSC9HashTable11deleteTableEv(i11 + 4 | 0);
    i9 = i11 + 20 | 0;
    L24 : do {
     if ((i9 | 0) == (i5 | 0)) {
      i12 = i5;
     } else {
      i10 = i9;
      while (1) {
       i13 = HEAP32[i10 >> 2] | 0;
       if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
        i12 = i10;
        break L24;
       }
       i13 = i10 + 20 | 0;
       if ((i13 | 0) == (i5 | 0)) {
        i12 = i5;
        break;
       } else {
        i10 = i13;
       }
      }
     }
    } while (0);
    i9 = HEAP32[i2 >> 2] | 0;
    if ((i12 | 0) == (i9 + ((HEAP32[i6 >> 2] | 0) * 20 & -1) | 0)) {
     i7 = i9;
     break;
    } else {
     i11 = i12;
    }
   }
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i14 = i1 | 0;
  __ZN3JSC2VM10ClientDataD2Ev(i14);
  return;
 }
 __ZN3WTF8fastFreeEPv(i7);
 i14 = i1 | 0;
 __ZN3JSC2VM10ClientDataD2Ev(i14);
 return;
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
function __ZN7WebCore22WorkerScriptControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, HEAP32[i4 >> 2] | 0);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
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
  HEAP32[i5 >> 2] = 0;
 }
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3JSC2VMD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i3);
 __ZN3WTF5MutexD1Ev(i1 + 16 | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
  i8 = i1;
  i9 = i3 + 84 | 0;
  i10 = i8 + 12 | 0;
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i1 + 8 | 0;
  i1 = HEAP32[i9 >> 2] | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 + 12 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i1;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i3 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i8;
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3JSC2VMD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22WorkerScriptControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, HEAP32[i4 >> 2] | 0);
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
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
  HEAP32[i5 >> 2] = 0;
 }
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN3JSC2VMD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i3);
 __ZN3WTF5MutexD1Ev(i1 + 16 | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
  i8 = i1;
  i9 = i3 + 84 | 0;
  i10 = i8 + 12 | 0;
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i1 + 8 | 0;
  i1 = HEAP32[i9 >> 2] | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i1 + 12 >> 2] = i7;
  HEAP32[i7 + 8 >> 2] = i1;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i3 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i8;
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 | 0;
 if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3JSC2VMD1Ev(i5);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if ((HEAP8[i1 + 12 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeEPN10Deprecated11ScriptValueE(i1, i2, i4);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   if ((HEAP32[i8 >> 2] & 0 | 0) == 0 & (HEAP32[i8 + 4 >> 2] & -1 | 0) == (-6 | 0)) {
    break;
   }
   __ZN3JSC12JSLockHolderC1EPNS_2VME(i5, HEAP32[i1 >> 2] | 0);
   i8 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
      i9 = 0;
      break;
     }
     i9 = HEAP32[i8 >> 2] | 0;
    }
   } while (0);
   i8 = __ZN3JSC14JSGlobalObject10globalExecEv(i9) | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i6 + 4 >> 2] = -6;
    HEAP32[i6 >> 2] = 0;
   } else {
    i11 = i10 | 0;
    i10 = HEAP32[i11 + 4 >> 2] | 0;
    i12 = i6 | 0;
    HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i12 + 4 >> 2] = i10;
   }
   __ZN7WebCore15reportExceptionEPN3JSC9ExecStateENS0_7JSValueEPNS_12CachedScriptE(i8, i6, 0);
   __ZN3JSC12JSLockHolderD1Ev(i5);
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerScriptControllerC2EPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3JSC2VM6createENS_8HeapTypeE(i5, 0);
 i6 = i1 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i5 = i2 + 20440 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
  i8 = HEAP32[i5 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i5 = i8 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i2 + 20420 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 >> 2] = i2 + 20408;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i10;
 HEAP32[i4 + 4 >> 2] = -6;
 HEAP32[i4 >> 2] = 0;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i10 = i4 | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i4;
 HEAP8[i1 + 12 | 0] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 16 | 0);
 __ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME(HEAP32[i6 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22WorkerScriptControllerC1EPNS_17WorkerGlobalScopeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3JSC2VM6createENS_8HeapTypeE(i5, 0);
 i6 = i1 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i5 = i2 + 20440 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
  i8 = HEAP32[i5 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i5 = i8 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i2 + 20420 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i5 >> 2] = i2 + 20408;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 i9 = i1 + 8 | 0;
 HEAP32[i9 >> 2] = i10;
 HEAP32[i4 + 4 >> 2] = -6;
 HEAP32[i4 >> 2] = 0;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i10 = i4 | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i4;
 HEAP8[i1 + 12 | 0] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 16 | 0);
 __ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME(HEAP32[i6 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore28JSDedicatedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_26DedicatedWorkerGlobalScopeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 13968 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 664) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i8 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 __ZN7WebCore28JSDedicatedWorkerGlobalScopeC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_26DedicatedWorkerGlobalScopeEEE(i9, i1, i2, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 156 | 0;
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i8 - 156 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 __ZN7WebCore23JSWorkerGlobalScopeBase14finishCreationERN3JSC2VME(i10, i1);
 __ZN3JSC4Heap12addFinalizerEPNS_6JSCellEPFvS2_E(i6, i10, F_BASE_vi + 8 | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore25JSSharedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_23SharedWorkerGlobalScopeEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 13968 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 664) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i8 = i5 | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = i3;
 __ZN7WebCore25JSSharedWorkerGlobalScopeC1ERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_23SharedWorkerGlobalScopeEEE(i9, i1, i2, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 156 | 0;
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i8 - 156 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 __ZN7WebCore23JSWorkerGlobalScopeBase14finishCreationERN3JSC2VME(i10, i1);
 __ZN3JSC4Heap12addFinalizerEPNS_6JSCellEPFvS2_E(i6, i10, F_BASE_vi + 8 | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN3JSC6StrongIN7WebCore19JSWorkerGlobalScopeEE3setERNS_2VMEPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
  }
  i7 = i2 + 20440 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i9 = HEAP32[i7 >> 2] | 0;
  } else {
   i9 = i8;
  }
  i8 = i9 + 12 | 0;
  HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = -6;
  HEAP32[i9 >> 2] = 0;
  i7 = i9 + 8 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  i10 = i2 + 20420 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 20408;
  HEAP32[i8 >> 2] = i11;
  HEAP32[i10 >> 2] = i9;
  HEAP32[i11 + 8 >> 2] = i9;
  i11 = i9 | 0;
  HEAP32[i6 >> 2] = i11;
  i12 = i11;
 } else {
  i12 = i1;
 }
 HEAP32[i5 + 4 >> 2] = (i3 | 0) == 0 ? -6 : -5;
 HEAP32[i5 >> 2] = i3;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i12 & -4096) + 12 >> 2] | 0, i12, i5);
 i12 = i5 | 0;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22WorkerScriptController12setExceptionERKN10Deprecated11ScriptValueE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 8 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i7 = 0;
  } else {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i1 >> 2] | 0;
  }
 } while (0);
 i1 = HEAP32[(__ZN3JSC14JSGlobalObject10globalExecEv(i7) | 0) + 16 >> 2] | 0;
 i7 = HEAP32[(i1 & -65536) + 1076 >> 2] | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = 0;
  } else {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    i8 = 0;
    break;
   }
   i8 = HEAP32[i1 >> 2] | 0;
  }
 } while (0);
 i1 = __ZN3JSC14JSGlobalObject10globalExecEv(i8) | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i4 + 4 >> 2] = -6;
  HEAP32[i4 >> 2] = 0;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i5, i7, i1, i4);
  STACKTOP = i3;
  return;
 } else {
  i2 = i8 | 0;
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i6 + 4 >> 2] = i8;
  __ZN3JSC2VM14throwExceptionEPNS_9ExecStateENS_7JSValueE(i5, i7, i1, i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN3WTF10fastMallocEj(48) | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 _memset(i2 + 4 | 0, 0, 44) | 0;
 HEAP32[i1 + 20612 >> 2] = i2;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore15DOMWrapperWorldC1EPN3JSC2VMEb(i3, i1, 1);
 i4 = i2 + 44 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
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
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore27WebCoreTypedArrayControllerC1Ev(i2);
 i4 = i1 + 24768 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 return;
}
function __ZN7WebCore22WorkerScriptController11disableEvalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 3;
 } else {
  if ((HEAP32[i6 + 4 >> 2] | 0) == -6) {
   i7 = 3;
  }
 }
 if ((i7 | 0) == 3) {
  __ZN7WebCore22WorkerScriptController10initScriptEv(i1);
 }
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i4, HEAP32[i1 >> 2] | 0);
 i1 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
 HEAP8[i1 + 596 | 0] = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 600 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i1 | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN3JSC12JSLockHolderD1Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  __ZN3JSC12JSLockHolderD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22WorkerScriptController14attachDebuggerEPN3JSC8DebuggerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
   i5 = 3;
  } else {
   i6 = i4;
   i5 = 4;
  }
 }
 if ((i5 | 0) == 3) {
  __ZN7WebCore22WorkerScriptController10initScriptEv(i1);
  i1 = HEAP32[i3 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i7 = 0;
  } else {
   i6 = i1;
   i5 = 4;
  }
 }
 do {
  if ((i5 | 0) == 4) {
   if ((HEAP32[i6 + 4 >> 2] | 0) == -6) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i6 >> 2] | 0;
  }
 } while (0);
 __ZN3JSC8Debugger6attachEPNS_14JSGlobalObjectE(i2, i7);
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
function __ZNK7WebCore22WorkerScriptController22isExecutionTerminatingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 16 | 0;
 if ((i2 | 0) == 0) {
  i3 = HEAP8[(HEAP32[i1 >> 2] | 0) + 20625 | 0] | 0;
  i4 = i3 & 1;
  i5 = i4 << 24 >> 24 != 0;
  return i5 | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  i6 = HEAP8[(HEAP32[i1 >> 2] | 0) + 20625 | 0] | 0;
  __ZN3WTF5Mutex6unlockEv(i2);
  i3 = i6;
  i4 = i3 & 1;
  i5 = i4 << 24 >> 24 != 0;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore22WorkerScriptController14detachDebuggerEPN3JSC8DebuggerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
    i5 = 0;
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 FUNCTION_TABLE_vii[i3 & 3](i2, i5);
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
function __ZN7WebCore22WorkerScriptController28scheduleExecutionTerminationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 if ((i2 | 0) == 0) {
  __ZN3JSC8Watchdog4fireEv((HEAP32[i1 >> 2] | 0) + 20624 | 0);
  return;
 } else {
  __ZN3WTF5Mutex4lockEv(i2);
  __ZN3JSC8Watchdog4fireEv((HEAP32[i1 >> 2] | 0) + 20624 | 0);
  __ZN3WTF5Mutex6unlockEv(i2);
  return;
 }
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vi___ZN7WebCore23JSWorkerGlobalScopeBase7destroyEPN3JSC6JSCellE__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23JSWorkerGlobalScopeBase7destroyEPN3JSC6JSCellE(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore19WebCoreJSClientDataD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WebCoreJSClientDataD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore22WorkerScriptController20isExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 12 | 0] & 1) != 0 | 0;
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
function __ZN7WebCore19WebCoreJSClientDataD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WebCoreJSClientDataD2Ev(i1);
 return;
}
function __ZN7WebCore22WorkerScriptController15forbidExecutionEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 12 | 0] = 1;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore19WebCoreJSClientDataD1Ev,b0,__ZN7WebCore22WorkerScriptControllerD2Ev,b0,__ZN7WebCore19WebCoreJSClientDataD0Ev,b0,vi___ZN7WebCore23JSWorkerGlobalScopeBase7destroyEPN3JSC6JSCellE__wrapper,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22WorkerScriptControllerC2EPNS_17WorkerGlobalScopeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE": __ZN7WebCore25JSSharedWorkerGlobalScope6s_infoE, "__ZN7WebCore37JSDedicatedWorkerGlobalScopePrototype6s_infoE": __ZN7WebCore37JSDedicatedWorkerGlobalScopePrototype6s_infoE, "__ZN7WebCore34JSSharedWorkerGlobalScopePrototype6s_infoE": __ZN7WebCore34JSSharedWorkerGlobalScopePrototype6s_infoE, "__ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE": __ZN7WebCore28JSDedicatedWorkerGlobalScope6s_infoE, "__ZN7WebCore28JSWorkerGlobalScopePrototype6s_infoE": __ZN7WebCore28JSWorkerGlobalScopePrototype6s_infoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22WorkerScriptController10initScriptEv","__ZN7WebCore25initNormalWorldClientDataEPN3JSC2VME","__ZN7WebCore22WorkerScriptController12setExceptionERKN10Deprecated11ScriptValueE","__ZN7WebCore22WorkerScriptControllerD2Ev","__ZN7WebCore22WorkerScriptController14detachDebuggerEPN3JSC8DebuggerE","__ZN7WebCore19WebCoreJSClientDataD2Ev","_memset","__ZN7WebCore19WebCoreJSClientDataD1Ev","_memcpy","__ZN7WebCore19WebCoreJSClientDataD0Ev","__ZN7WebCore22WorkerScriptController14attachDebuggerEPN3JSC8DebuggerE","__ZN3JSC6StrongIN7WebCore19JSWorkerGlobalScopeEE3setERNS_2VMEPS2_","__ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeE","__ZN7WebCore22WorkerScriptController11disableEvalERKN3WTF6StringE","__ZN3JSC6StrongINS_7UnknownEEaSERKS2_","__ZN7WebCore22WorkerScriptControllerC2EPNS_17WorkerGlobalScopeE","__ZNK7WebCore22WorkerScriptController20isExecutionForbiddenEv","__ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeEPN10Deprecated11ScriptValueE","__ZN7WebCore22WorkerScriptController28scheduleExecutionTerminationEv","__ZNK7WebCore22WorkerScriptController22isExecutionTerminatingEv","__ZN7WebCore25JSSharedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_23SharedWorkerGlobalScopeEEE","__ZN7WebCore28JSDedicatedWorkerGlobalScope6createERN3JSC2VMEPNS1_9StructureEN3WTF10PassRefPtrINS_26DedicatedWorkerGlobalScopeEEE","__ZN7WebCore22WorkerScriptController15forbidExecutionEv"]

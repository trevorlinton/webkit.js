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
H_BASE = parentModule["_malloc"](208 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 208;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23WorkerThreadStartupDataC1ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE;
var __ZN7WebCore12WorkerThreadD1Ev;
/* memory initializer */ allocate([87,101,98,67,111,114,101,58,32,87,111,114,107,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+152)|0;
  var __ZTVN7WebCore31ReleaseFastMallocFreeMemoryTaskE=(H_BASE+24)|0;
  var __ZTVN7WebCore12WorkerThreadE=(H_BASE+120)|0;
  var __ZTVN7WebCore30WorkerThreadShutdownFinishTaskE=(H_BASE+56)|0;
  var __ZTVN7WebCore29WorkerThreadShutdownStartTaskE=(H_BASE+88)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12WorkerThread12workerThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 104 | 0;
 i8 = i1 + 132 | 0;
 i9 = (i8 | 0) == 0;
 if (!i9) {
  __ZN3WTF5Mutex4lockEv(i8);
 }
 i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
 i11 = i1 + 156 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i12 + 52 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i11 >> 2] | 0;
 i15 = HEAP32[i14 + 68 >> 2] | 0;
 i16 = i14 + 72 | 0;
 i17 = i5 | 0;
 HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i16 >> 2] = 0;
 FUNCTION_TABLE_viiiiiiii[i10 & 1](i3, i1, i12 | 0, i12 + 48 | 0, i4, i14 + 64 | 0, i15, i5);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i15 = i1 + 128 | 0;
 i14 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = i3;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 + 156 | 0;
   i4 = i3 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i4 >> 2] = i12;
    break;
   }
   i12 = i3 - 156 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i14 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i5 = i14 + 156 | 0;
   i12 = i5 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i5 - 156 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
  }
 } while (0);
 i14 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i17 = i14 | 0;
   if (((tempValue = HEAP32[i17 >> 2] | 0, HEAP32[i17 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i14);
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i14 | 0) != 0) {
  i13 = HEAP32[i14 + 4 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i17 = i13 | 0;
    i3 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i17 >> 2] = i3;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = i1 + 12 | 0;
 i13 = i14 | 0;
 if ((i14 | 0) == 0) {
  i18 = abort(92) | 0;
 } else {
  __ZN3WTF5Mutex4lockEv(i13);
  i14 = HEAP8[i1 + 104 | 0] | 0;
  __ZN3WTF5Mutex6unlockEv(i13);
  i18 = i14;
 }
 if ((i18 & 1) != 0) {
  __ZN7WebCore22WorkerScriptController15forbidExecutionEv(HEAP32[(HEAP32[i15 >> 2] | 0) + 260 >> 2] | 0);
 }
 if (!i9) {
  __ZN3WTF5Mutex6unlockEv(i8);
 }
 i8 = HEAP32[i15 >> 2] | 0;
 i9 = HEAP32[i8 + 260 >> 2] | 0;
 __ZN7WebCore24InspectorInstrumentation24willEvaluateWorkerScriptEPNS_17WorkerGlobalScopeEi(i8, HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0);
 i8 = HEAP32[i11 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i6, i8 + 56 | 0, i8 | 0, i7);
 __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeE(i9, i6);
 i9 = HEAP32[i6 + 28 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i6 + 24 | 0);
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 4 | 0;
   i7 = i8 | 0;
   i18 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i7 >> 2] = i18;
    break;
   }
   i18 = i8 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
  }
 } while (0);
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i6 = i9 + 4 | 0;
   i18 = i6 | 0;
   i8 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i18 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore23WorkerThreadStartupDataD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 31](i1);
 i9 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 if ((i1 | 0) == 0) {
  i19 = __ZN7WebCore16threadGlobalDataEv() | 0;
  __ZN7WebCore16ThreadGlobalData7destroyEv(i19);
  __ZN3WTF12detachThreadEj(i9);
  STACKTOP = i2;
  return;
 }
 i15 = i1 + 156 | 0;
 i1 = i15 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i1 >> 2] = i11;
  i19 = __ZN7WebCore16threadGlobalDataEv() | 0;
  __ZN7WebCore16ThreadGlobalData7destroyEv(i19);
  __ZN3WTF12detachThreadEj(i9);
  STACKTOP = i2;
  return;
 }
 i11 = i15 - 156 | 0;
 if ((i11 | 0) == 0) {
  i19 = __ZN7WebCore16threadGlobalDataEv() | 0;
  __ZN7WebCore16ThreadGlobalData7destroyEv(i19);
  __ZN3WTF12detachThreadEj(i9);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
 i19 = __ZN7WebCore16threadGlobalDataEv() | 0;
 __ZN7WebCore16ThreadGlobalData7destroyEv(i19);
 __ZN3WTF12detachThreadEj(i9);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
  __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  i10 = 0;
  i11 = 1;
 } else {
  HEAP32[i9 >> 2] = i8;
  i12 = i8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
  i10 = 1;
  i11 = 0;
 }
 i12 = __ZN3WTF10fastMallocEj(28) | 0;
 i8 = i12;
 __ZN3JSC14SourceProviderC2ERKN3WTF6StringERKNS1_12TextPositionE(i8, i6, i4);
 HEAP32[i12 >> 2] = H_BASE + 160;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i12 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i12 = i6 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i8;
 do {
  if (i10) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i6 = i8 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 do {
  if (i11) {
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i2 = i10 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i12 = i9 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 i11 = (HEAP32[i4 + 4 >> 2] | 0) + 1 | 0;
 HEAP32[i1 + 4 >> 2] = i9;
 HEAP32[i1 + 8 >> 2] = 0;
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9) | 0) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 12 >> 2] = i13;
 HEAP32[i1 + 16 >> 2] = (i12 | 0) < 1 ? 1 : i12;
 HEAP32[i1 + 20 >> 2] = (i11 | 0) < 1 ? 1 : i11;
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i1 + 24 | 0);
 i11 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i7 = i11 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i3 + 4 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP8[i11] & -2 | HEAP8[i7] & 1;
 HEAP8[i11] = i12;
 HEAP8[i11] = i12 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 36 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i3 + 12 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i3 + 20 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i3 + 24 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i3 + 28 >> 2];
 HEAP32[i1 + 60 >> 2] = HEAP32[i3 + 32 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i3 + 36 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i3 + 40 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i3 + 44 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore12WorkerThread39releaseFastMallocFreeMemoryInAllThreadsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i3);
  HEAP32[H_BASE + 200 >> 2] = i3;
  HEAP8[H_BASE + 184 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i3 = HEAP32[H_BASE + 200 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 if (!i4) {
  __ZN3WTF5Mutex4lockEv(i3);
 }
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i5 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i7;
  HEAP8[H_BASE + 192 | 0] = 1;
  i5 = i7;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = i7 + (i6 << 2) | 0;
 L11 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) != 0) {
   L13 : do {
    if ((i6 | 0) == 0) {
     i9 = i7;
    } else {
     i10 = i7;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L13;
      }
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L11;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   }
   i10 = i2 | 0;
   i11 = i9;
   while (1) {
    i12 = (HEAP32[i11 >> 2] | 0) + 12 | 0;
    i13 = __ZN3WTF10fastMallocEj(4) | 0;
    HEAP32[i13 >> 2] = H_BASE + 32;
    HEAP32[i10 >> 2] = i13;
    __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i12, i2);
    i12 = HEAP32[i10 >> 2] | 0;
    if ((i12 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
    i12 = i11 + 4 | 0;
    if ((i12 | 0) == (i8 | 0)) {
     break L11;
    } else {
     i14 = i12;
    }
    while (1) {
     i12 = HEAP32[i14 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i14 + 4 | 0;
     if ((i12 | 0) == (i8 | 0)) {
      break L11;
     } else {
      i14 = i12;
     }
    }
    if ((i14 | 0) == (i8 | 0)) {
     break;
    } else {
     i11 = i14;
    }
   }
  }
 } while (0);
 if (i4) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i3);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore23WorkerThreadStartupDataC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
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
 __ZNK7WebCore3URL4copyEv(i1 | 0, i2);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 48 | 0, i3);
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 56 | 0, i5);
 HEAP32[i1 + 60 >> 2] = i6;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 64 | 0, i7);
 HEAP32[i1 + 68 >> 2] = i8;
 i8 = i1 + 72 | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
 } else {
  __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i11, i9);
  i9 = i11 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i11;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i11);
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i8 | 0) == 0) {
  i13 = i11;
 } else {
  i11 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i1;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i8);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore13GroupSettings25setLocalStorageQuotaBytesEj(i13, HEAP32[i4 >> 2] | 0);
 i13 = i4 + 8 | 0;
 __ZN7WebCore13GroupSettings22setIndexedDBQuotaBytesEx(HEAP32[i3 >> 2] | 0, HEAP32[i13 >> 2] | 0, HEAP32[i13 + 4 >> 2] | 0);
 i13 = HEAP32[i3 >> 2] | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i12, i4 + 4 | 0);
 __ZN7WebCore13GroupSettings24setIndexedDBDatabasePathERKN3WTF6StringE(i13, i12);
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i12 = i13 | 0;
 i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i12 >> 2] = i4;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore23WorkerThreadStartupDataC1ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
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
 __ZNK7WebCore3URL4copyEv(i1 | 0, i2);
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 48 | 0, i3);
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 56 | 0, i5);
 HEAP32[i1 + 60 >> 2] = i6;
 __ZNKR3WTF6String12isolatedCopyEv(i1 + 64 | 0, i7);
 HEAP32[i1 + 68 >> 2] = i8;
 i8 = i1 + 72 | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i11 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
 } else {
  __ZNK7WebCore14SecurityOrigin12isolatedCopyEv(i11, i9);
  i9 = i11 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i8 >> 2] = i11;
 }
 if ((i4 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13GroupSettingsC1Ev(i11);
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i11;
 if ((i8 | 0) == 0) {
  i13 = i11;
 } else {
  i11 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i1 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i1;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i8);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore13GroupSettings25setLocalStorageQuotaBytesEj(i13, HEAP32[i4 >> 2] | 0);
 i13 = i4 + 8 | 0;
 __ZN7WebCore13GroupSettings22setIndexedDBQuotaBytesEx(HEAP32[i3 >> 2] | 0, HEAP32[i13 >> 2] | 0, HEAP32[i13 + 4 >> 2] | 0);
 i13 = HEAP32[i3 >> 2] | 0;
 __ZNKR3WTF6String12isolatedCopyEv(i12, i4 + 4 | 0);
 __ZN7WebCore13GroupSettings24setIndexedDBDatabasePathERKN3WTF6StringE(i13, i12);
 i13 = HEAP32[i12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i12 = i13 | 0;
 i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i12 >> 2] = i4;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore12WorkerThreadC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_RNS_17WorkerLoaderProxyERNS_20WorkerReportingProxyENS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i13 = i12 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore13WorkerRunLoopC1Ev(i1 + 12 | 0);
 HEAP32[i1 + 120 >> 2] = i6;
 HEAP32[i1 + 124 >> 2] = i7;
 HEAP32[i1 + 128 >> 2] = 0;
 __ZN3WTF5MutexC1Ev(i1 + 132 | 0);
 i7 = __ZN3WTF10fastMallocEj(76) | 0;
 __ZN7WebCore23WorkerThreadStartupDataC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE(i7, i2, i3, i4, i5, i8, i9, i10, i11);
 HEAP32[i1 + 156 >> 2] = i7;
 HEAP32[i1 + 160 >> 2] = 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
  i7 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i7);
  HEAP32[H_BASE + 200 >> 2] = i7;
  HEAP8[H_BASE + 184 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i7 = HEAP32[H_BASE + 200 >> 2] | 0;
 i11 = (i7 | 0) == 0;
 if (!i11) {
  __ZN3WTF5Mutex4lockEv(i7);
 }
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i14 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i10 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i10;
  _memset(i10 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i9;
  HEAP8[H_BASE + 192 | 0] = 1;
  i14 = i9;
 }
 HEAP32[i13 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i12 + 8 | 0, i14 | 0, i13, i13);
 if (i11) {
  STACKTOP = i12;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i7);
 STACKTOP = i12;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore12WorkerThreadENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore12WorkerThreadD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 200 >> 2] = i4;
  HEAP8[H_BASE + 184 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 200 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i6 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i8;
  HEAP8[H_BASE + 192 | 0] = 1;
  i6 = i8;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore12WorkerThreadENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i6, i3) | 0;
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 i4 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore23WorkerThreadStartupDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5MutexD1Ev(i1 + 132 | 0);
 i4 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 i5 = i4 + 156 | 0;
 i4 = i5 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = i3;
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 i3 = i5 - 156 | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 i9 = i1 + 12 | 0;
 __ZN7WebCore13WorkerRunLoopD1Ev(i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore12WorkerThreadD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
  i4 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i4);
  HEAP32[H_BASE + 200 >> 2] = i4;
  HEAP8[H_BASE + 184 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i4 = HEAP32[H_BASE + 200 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i6 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i7 = __ZN3WTF10fastMallocEj(20) | 0;
  i8 = i7;
  _memset(i7 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i8;
  HEAP8[H_BASE + 192 | 0] = 1;
  i6 = i8;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore12WorkerThreadENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i6, i3) | 0;
 if (!i5) {
  __ZN3WTF5Mutex6unlockEv(i4);
 }
 i4 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore23WorkerThreadStartupDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF5MutexD1Ev(i1 + 132 | 0);
 i4 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 i5 = i4 + 156 | 0;
 i4 = i5 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = i3;
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 i3 = i5 - 156 | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 + 12 | 0;
  __ZN7WebCore13WorkerRunLoopD1Ev(i9);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 i9 = i1 + 12 | 0;
 __ZN7WebCore13WorkerRunLoopD1Ev(i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore23WorkerThreadStartupDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 + 4 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i4 = i2 | 0;
    i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore29WorkerThreadShutdownStartTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i3 = i1 | 0;
 i4 = i1 + 80 | 0;
 i5 = i2;
 __ZN7WebCore24DatabaseTaskSynchronizerC1Ev(i3);
 __ZN7WebCore15DatabaseManager13stopDatabasesEPNS_22ScriptExecutionContextEPNS_24DatabaseTaskSynchronizerE(__ZN7WebCore15DatabaseManager7managerEv() | 0, i2, i3);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 31](i2);
 __ZN7WebCore17WorkerGlobalScope21notifyObserversOfStopEv(i5);
 i6 = i2 + 160 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 31](i6);
 __ZN7WebCore24DatabaseTaskSynchronizer21waitForTaskCompletionEv(i3);
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i2 >> 2] = H_BASE + 64;
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = i2;
 FUNCTION_TABLE_vii[i6 & 7](i5, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i3 + 28 | 0;
  __ZN3WTF15ThreadConditionD1Ev(i8);
  i9 = i3 + 4 | 0;
  __ZN3WTF5MutexD1Ev(i9);
  STACKTOP = i1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 i8 = i3 + 28 | 0;
 __ZN3WTF15ThreadConditionD1Ev(i8);
 i9 = i3 + 4 | 0;
 __ZN3WTF5MutexD1Ev(i9);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore12WorkerThread4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 132 | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  __ZN3WTF5Mutex4lockEv(i4);
 }
 i6 = i1 + 128 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   __ZN7WebCore13WorkerRunLoop9terminateEv(i1 + 12 | 0);
  } else {
   __ZN7WebCore22WorkerScriptController28scheduleExecutionTerminationEv(HEAP32[i7 + 260 >> 2] | 0);
   i8 = __ZN7WebCore15DatabaseManager7managerEv() | 0;
   __ZN7WebCore15DatabaseManager31interruptAllDatabasesForContextEPNS_22ScriptExecutionContextE(i8, HEAP32[i6 >> 2] | 0);
   i8 = __ZN3WTF10fastMallocEj(4) | 0;
   HEAP32[i8 >> 2] = H_BASE + 96;
   i9 = i3 | 0;
   HEAP32[i9 >> 2] = i8;
   __ZN7WebCore13WorkerRunLoop20postTaskAndTerminateEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1 + 12 | 0, i3);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 if (i5) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF5Mutex6unlockEv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14SecurityOriginD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 8;
}
function __ZN7WebCore12WorkerThread17workerThreadCountEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN3WTF36lockAtomicallyInitializedStaticMutexEv();
 if (!(HEAP8[H_BASE + 184 | 0] | 0)) {
  i1 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN3WTF5MutexC1Ev(i1);
  HEAP32[H_BASE + 200 >> 2] = i1;
  HEAP8[H_BASE + 184 | 0] = 1;
 }
 __ZN3WTF38unlockAtomicallyInitializedStaticMutexEv();
 i1 = HEAP32[H_BASE + 200 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 if (!i2) {
  __ZN3WTF5Mutex4lockEv(i1);
 }
 if (HEAP8[H_BASE + 192 | 0] | 0) {
  i3 = HEAP32[H_BASE + 208 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 208 >> 2] = i5;
  HEAP8[H_BASE + 192 | 0] = 1;
  i3 = i5;
 }
 i5 = HEAP32[i3 + 12 >> 2] | 0;
 if (i2) {
  return i5 | 0;
 }
 __ZN3WTF5Mutex6unlockEv(i1);
 return i5 | 0;
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
function __ZN7WebCore12WorkerThread5startEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 132 | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  __ZN3WTF5Mutex4lockEv(i2);
 }
 i4 = i1 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = __ZN3WTF12createThreadEPFvPvES0_PKc(F_BASE_vi + 14 | 0, i1, H_BASE + 8 | 0) | 0;
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
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 160;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 __ZN3JSC14SourceProviderD2Ev(i1 | 0);
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
function __ZN7WebCore30WorkerThreadShutdownFinishTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17WorkerGlobalScope14clearInspectorEv(i2);
 i1 = i2 + 260 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore22WorkerScriptControllerD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
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
 FUNCTION_TABLE_viiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore31ReleaseFastMallocFreeMemoryTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF27releaseFastMallocFreeMemoryEv();
 return;
}
function b5(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(5);
}
function __ZN7WebCore12WorkerThread12runEventLoopEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13WorkerRunLoop3runEPNS_17WorkerGlobalScopeE(i1 + 12 | 0, HEAP32[i1 + 128 >> 2] | 0);
 return;
}
function __ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30WorkerThreadShutdownFinishTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(4);
}
function __ZN7WebCore29WorkerThreadShutdownStartTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
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
function __ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore30WorkerThreadShutdownFinishTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore29WorkerThreadShutdownStartTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore12WorkerThread17workerThreadStartEPv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12WorkerThread12workerThreadEv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12WorkerThreadD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12WorkerThreadD2Ev(i1);
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore30WorkerThreadShutdownFinishTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore29WorkerThreadShutdownStartTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
function b0() {
 abort(0);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_v = [b0,b0,v____cxa_pure_virtual__wrapper,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD0Ev,b1,__ZN7WebCore30WorkerThreadShutdownFinishTaskD1Ev,b1,__ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD1Ev,b1,__ZN7WebCore12WorkerThreadD0Ev,b1,__ZN3JSC20StringSourceProviderD0Ev,b1,__ZN7WebCore29WorkerThreadShutdownStartTaskD1Ev,b1,__ZN7WebCore12WorkerThread17workerThreadStartEPv,b1,__ZN7WebCore30WorkerThreadShutdownFinishTaskD0Ev,b1,__ZN7WebCore12WorkerThreadD2Ev,b1,__ZN3JSC20StringSourceProviderD1Ev,b1,__ZN7WebCore12WorkerThread12runEventLoopEv,b1,__ZN7WebCore29WorkerThreadShutdownStartTaskD0Ev,b1,b1,b1,b1
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore31ReleaseFastMallocFreeMemoryTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore29WorkerThreadShutdownStartTask11performTaskEPNS_22ScriptExecutionContextE,b2,__ZN7WebCore30WorkerThreadShutdownFinishTask11performTaskEPNS_22ScriptExecutionContextE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore30WorkerThreadShutdownFinishTask13isCleanupTaskEv,b3,__ZNK7WebCore29WorkerThreadShutdownStartTask13isCleanupTaskEv,b3,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b3,__ZNK3JSC20StringSourceProvider6sourceEv,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viiiiiiii = [b4,b4];
  var FUNCTION_TABLE_viiiiiiiii = [b5,b5,__ZN7WebCore23WorkerThreadStartupDataC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD0Ev","_strlen","__ZN7WebCore23WorkerThreadStartupDataD2Ev","__ZNK7WebCore29WorkerThreadShutdownStartTask13isCleanupTaskEv","__ZN7WebCore30WorkerThreadShutdownFinishTaskD1Ev","__ZN7WebCore31ReleaseFastMallocFreeMemoryTaskD1Ev","__ZN7WebCore12WorkerThreadD2Ev","__ZNK7WebCore30WorkerThreadShutdownFinishTask13isCleanupTaskEv","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN7WebCore31ReleaseFastMallocFreeMemoryTask11performTaskEPNS_22ScriptExecutionContextE","_memset","__ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","_memcpy","__ZN7WebCore29WorkerThreadShutdownStartTask11performTaskEPNS_22ScriptExecutionContextE","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore30WorkerThreadShutdownFinishTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore12WorkerThread39releaseFastMallocFreeMemoryInAllThreadsEv","__ZN3WTF7HashSetIPN7WebCore12WorkerThreadENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore30WorkerThreadShutdownFinishTaskD0Ev","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore12WorkerThreadC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_RNS_17WorkerLoaderProxyERNS_20WorkerReportingProxyENS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE","__ZN7WebCore12WorkerThread17workerThreadStartEPv","__ZN7WebCore12WorkerThread12workerThreadEv","__ZN7WebCore12WorkerThread12runEventLoopEv","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore12WorkerThread4stopEv","__ZN7WebCore12WorkerThread5startEv","__ZN7WebCore29WorkerThreadShutdownStartTaskD0Ev","__ZN7WebCore12WorkerThreadD0Ev","__ZN7WebCore29WorkerThreadShutdownStartTaskD1Ev","__ZN7WebCore23WorkerThreadStartupDataC2ERKNS_3URLERKN3WTF6StringEPKNS_13GroupSettingsES7_NS_21WorkerThreadStartModeES7_NS_21ContentSecurityPolicy10HeaderTypeEPKNS_14SecurityOriginE","__ZN7WebCore12WorkerThread17workerThreadCountEv","__ZN3WTF9HashTableIPN7WebCore12WorkerThreadES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_"]

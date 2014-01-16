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
H_BASE = parentModule["_malloc"](216 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 216;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore23SharedWorkerGlobalScopeC1ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE;
var __ZN7WebCore23SharedWorkerGlobalScopeD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore23SharedWorkerGlobalScopeE=(H_BASE+8)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18createConnectEventEN3WTF10PassRefPtrINS_11MessagePortEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = __ZN3WTF10fastMallocEj(16) | 0;
 i10 = i9;
 i11 = i9 + 12 | 0;
 HEAP32[i9 >> 2] = i11;
 HEAP32[i9 + 4 >> 2] = 1;
 HEAP32[i9 + 8 >> 2] = 1;
 do {
  if ((i11 | 0) != 0) {
   i9 = i2 + 36 | 0;
   i12 = i11;
   if ((i2 | 0) == 0) {
    HEAP32[i12 >> 2] = 0;
    break;
   } else {
    HEAP32[i12 >> 2] = i2;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i6 + 4 >> 2] = 0;
 i11 = i7 | 0;
 HEAP32[i11 >> 2] = 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = 0;
 i12 = i2 | 0;
 i13 = (i2 | 0) == 0;
 if (!i13) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 31](i12);
 }
 i14 = __ZN3WTF10fastMallocEj(96) | 0;
 i15 = i14;
 i16 = i4 | 0;
 HEAP32[i16 >> 2] = i12;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = i10;
 __ZN7WebCore12MessageEventC1ERKN10Deprecated11ScriptValueERKN3WTF6StringES8_NS5_10PassRefPtrINS_11EventTargetEEENS5_10PassOwnPtrINS5_6VectorINS5_6RefPtrINS_11MessagePortEEELj1ENS5_15CrashOnOverflowEEEEE(i15, i6, i7, i8, i4, i5);
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i12 = i5 + 8 | 0;
  i4 = HEAP32[i12 >> 2] | 0;
  i8 = i5 | 0;
  if ((i4 | 0) != 0) {
   i7 = HEAP32[i8 >> 2] | 0;
   i10 = i7 + (i4 << 2) | 0;
   i4 = i7;
   while (1) {
    i7 = HEAP32[i4 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i17 = i7 + 36 | 0;
      i18 = i17 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      if ((i19 | 0) != 0) {
       HEAP32[i18 >> 2] = i19;
       break;
      }
      i19 = i17 - 36 | 0;
      if ((i19 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 44 >> 2] & 31](i19);
     }
    } while (0);
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i10 | 0)) {
     break;
    }
   }
   HEAP32[i12 >> 2] = 0;
  }
  i12 = HEAP32[i8 >> 2] | 0;
  if (!((i5 + 12 | 0) == (i12 | 0) | (i12 | 0) == 0)) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i16 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 31](i5);
 }
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i9 >> 2] = i16;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i6);
 __ZN7WebCore5Event9initEventERKN3WTF12AtomicStringEbb(i14, (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 80 | 0, 0, 0);
 HEAP32[i1 >> 2] = i15;
 if (i13) {
  STACKTOP = i3;
  return;
 }
 i13 = i2 + 36 | 0;
 i2 = i13 | 0;
 i15 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i2 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
 i15 = i13 - 36 | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] & 31](i15);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vi + 24;
}
function __ZN7WebCore23SharedWorkerGlobalScopeC2ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i5;
 i5 = i9 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore17WorkerGlobalScopeC2ERKNS_3URLERKN3WTF6StringENSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_12WorkerThreadENS4_10PassRefPtrINS_14SecurityOriginEEE(i1 | 0, i3, i4, i8, i6 | 0, i9);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i5 = i10 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 160 >> 2] = H_BASE + 148;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 332 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore23SharedWorkerGlobalScopeC1ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = i5;
 i5 = i9 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore17WorkerGlobalScopeC2ERKNS_3URLERKN3WTF6StringENSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_12WorkerThreadENS4_10PassRefPtrINS_14SecurityOriginEEE(i1 | 0, i3, i4, i8, i6 | 0, i9);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 | 0;
   if (((tempValue = HEAP32[i5 >> 2] | 0, HEAP32[i5 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i5 = i10 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 160 >> 2] = H_BASE + 148;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 332 >> 2] = i9;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore23SharedWorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 | 0;
 i1 = i8 | 0;
 i11 = i6 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 >> 2] = i6;
 __ZN7WebCore17WorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE(i10, i2, i3, i4, i5, i8);
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i1 = i8 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i8 = i9 | 0;
 i6 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i8 >> 2] = i6;
 __ZN7WebCore17WorkerGlobalScope25addMessageToWorkerConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i10, 1, 3, i2, i3, i4, i5, i9, 0, 0);
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i9 | 0;
 i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i8 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore23SharedWorkerGlobalScope6createERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadES4_NS_21ContentSecurityPolicy10HeaderTypeE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9 | 0;
 i11 = __ZN3WTF10fastMallocEj(336) | 0;
 i12 = i11;
 i13 = i5 | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = i5;
 __ZN7WebCore23SharedWorkerGlobalScopeC2ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE(i12, i2, i3, i4, i10, i6);
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i6 | 0) != 0) {
  i13 = HEAP32[i6 + 4 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i10 = i13 | 0;
    i4 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i4 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i10 >> 2] = i4;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore17WorkerGlobalScope36applyContentSecurityPolicyFromStringERKN3WTF6StringENS_21ContentSecurityPolicy10HeaderTypeE(i11, i7, i8);
 HEAP32[i1 >> 2] = i12;
 STACKTOP = i9;
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
function viiiiiiiiii___ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 __ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZThn160_N7WebCore23SharedWorkerGlobalScopeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 336 + 176 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 - 336 + 336 >> 2] = H_BASE + 148;
 i3 = HEAP32[i1 - 336 + 508 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZThn160_N7WebCore23SharedWorkerGlobalScopeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 336 + 176 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 HEAP32[i1 - 336 + 336 >> 2] = H_BASE + 148;
 i3 = HEAP32[i1 - 336 + 508 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 | 0;
   i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i1 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i2);
 return;
}
function __ZN7WebCore23SharedWorkerGlobalScopeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 160 >> 2] = H_BASE + 148;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
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
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23SharedWorkerGlobalScopeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 160 >> 2] = H_BASE + 148;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
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
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore23SharedWorkerGlobalScopeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 160 >> 2] = H_BASE + 148;
 i2 = HEAP32[i1 + 332 >> 2] | 0;
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
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i1 | 0);
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
function __ZN7WebCore17WorkerGlobalScope27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 156 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 156 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function viiiii___ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore17WorkerGlobalScope16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 156 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 156 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZThn160_N7WebCore17WorkerGlobalScope16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 332 + 172 | 0;
 i1 = i2 + 156 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
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
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function viii___ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function viii___ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function b9(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(9);
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
function vii___ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function di___ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv(i1 | 0);
}
function di___ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv(i1 | 0);
}
function ii___ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv(i1 | 0) | 0;
}
function __ZThn160_N7WebCore17WorkerGlobalScope14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 332 + 328 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore17WorkerGlobalScope25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 156 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore17WorkerGlobalScope14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 156 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function ii___ZNK7WebCore17WorkerGlobalScope15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17WorkerGlobalScope15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore17WorkerGlobalScope16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore17WorkerGlobalScope16errorEventTargetEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function ii___ZNK7WebCore17WorkerGlobalScope10eventQueueEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17WorkerGlobalScope10eventQueueEv(i1 | 0) | 0;
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function b1(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(1);
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
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
function __ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return i1 - 332 + 172 | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZThn160_NK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 17;
}
function __ZN7WebCore23SharedWorkerGlobalScope6threadEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 264 >> 2] | 0;
}
function __ZNK7WebCore17WorkerGlobalScope9topOriginEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 328 >> 2] | 0;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore23SharedWorkerGlobalScope25isSharedWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZNK7WebCore17WorkerGlobalScope28isDedicatedWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 17;
}
function __ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function __ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore22ScriptExecutionContext10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17WorkerGlobalScope3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 196 | 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
 return +0;
}
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,__ZN7WebCore23SharedWorkerGlobalScopeC2ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE,b1,__ZN7WebCore23SharedWorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE,b1,b1,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,viiiii___ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b2];
  var FUNCTION_TABLE_di = [b3,b3,di___ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv__wrapper,b3,di___ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv__wrapper,b3,b3,b3];
  var FUNCTION_TABLE_vi = [b4,b4,vi___ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv__wrapper,b4,__ZN7WebCore17WorkerGlobalScope27derefScriptExecutionContextEv,b4,__ZN7WebCore17WorkerGlobalScope14refEventTargetEv,b4,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b4,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b4,__ZN7WebCore23SharedWorkerGlobalScopeD0Ev,b4,__ZN7WebCore23SharedWorkerGlobalScopeD2Ev,b4,__ZN7WebCore17WorkerGlobalScope25refScriptExecutionContextEv,b4,__ZThn160_N7WebCore17WorkerGlobalScope14refEventTargetEv,b4,__ZN7WebCore17WorkerGlobalScope16derefEventTargetEv,b4,__ZThn160_N7WebCore23SharedWorkerGlobalScopeD0Ev,b4,__ZThn160_N7WebCore17WorkerGlobalScope16derefEventTargetEv,b4,__ZThn160_N7WebCore23SharedWorkerGlobalScopeD1Ev,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,vii___ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b5,vii___ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b5,vii___ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore17WorkerGlobalScope28isDedicatedWorkerGlobalScopeEv,b6,__ZNK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv,b6,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b6,__ZNK7WebCore22ScriptExecutionContext10isDocumentEv,b6,ii___ZNK7WebCore17WorkerGlobalScope15isContextThreadEv__wrapper,b6,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b6,ii___ZN7WebCore17WorkerGlobalScope16errorEventTargetEv__wrapper,b6,__ZNK7WebCore17WorkerGlobalScope9topOriginEv,b6,ii___ZNK7WebCore17WorkerGlobalScope10eventQueueEv__wrapper,b6,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b6,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b6,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b6,__ZNK7WebCore17WorkerGlobalScope3urlEv,b6,__ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv
  ,b6,ii___ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv__wrapper,b6,__ZNK7WebCore23SharedWorkerGlobalScope25isSharedWorkerGlobalScopeEv,b6,__ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv,b6,__ZThn160_NK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv,b6,__ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7,viii___ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE__wrapper,b7,viii___ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE__wrapper,b7,viii___ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi__wrapper,b7];
  var FUNCTION_TABLE_v = [b8,b8,v___ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b8];
  var FUNCTION_TABLE_viiiiiiiiii = [b9,b9,viiiiiiiiii___ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore23SharedWorkerGlobalScopeC2ERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadE","__ZN7WebCore23SharedWorkerGlobalScope6createERKN3WTF6StringERKNS_3URLES4_NSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_18SharedWorkerThreadES4_NS_21ContentSecurityPolicy10HeaderTypeE","__ZNK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv","__ZThn160_N7WebCore17WorkerGlobalScope14refEventTargetEv","__ZNK7WebCore17WorkerGlobalScope28isDedicatedWorkerGlobalScopeEv","__ZN7WebCore17WorkerGlobalScope27derefScriptExecutionContextEv","__ZN7WebCore18createConnectEventEN3WTF10PassRefPtrINS_11MessagePortEEE","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZNK7WebCore17WorkerGlobalScope9topOriginEv","__ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv","__ZN7WebCore17WorkerGlobalScope14refEventTargetEv","_memset","_memcpy","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore23SharedWorkerGlobalScope6threadEv","__ZNK7WebCore22ScriptExecutionContext10isDocumentEv","__ZNK7WebCore17WorkerGlobalScope3urlEv","__ZNK7WebCore23SharedWorkerGlobalScope25isSharedWorkerGlobalScopeEv","__ZN7WebCore23SharedWorkerGlobalScopeD2Ev","__ZN7WebCore17WorkerGlobalScope25refScriptExecutionContextEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv","__ZN7WebCore17WorkerGlobalScope16derefEventTargetEv","__ZThn160_NK7WebCore23SharedWorkerGlobalScope20eventTargetInterfaceEv","__ZThn160_N7WebCore23SharedWorkerGlobalScopeD1Ev","__ZN7WebCore23SharedWorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE","__ZThn160_N7WebCore23SharedWorkerGlobalScopeD0Ev","__ZThn160_N7WebCore17WorkerGlobalScope16derefEventTargetEv","__ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv","__ZN7WebCore23SharedWorkerGlobalScopeD0Ev"]

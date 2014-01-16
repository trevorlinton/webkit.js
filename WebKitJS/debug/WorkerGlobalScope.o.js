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
H_BASE = parentModule["_malloc"](384 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 384;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17WorkerGlobalScopeD1Ev;
var __ZN7WebCore17WorkerGlobalScope8ObserverD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE=env.__ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+360)|0;
  var __ZTVN7WebCore25EventTargetWithInlineDataE=(H_BASE+40)|0;
  var __ZTVN7WebCore17WorkerGlobalScopeE=(H_BASE+120)|0;
  var __ZTVN7WebCore26CloseWorkerGlobalScopeTaskE=(H_BASE+8)|0;
  var __ZTVN7WebCore17WorkerGlobalScope8ObserverE=(H_BASE+328)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 72 | 0;
 i9 = i4 + 80 | 0;
 i10 = i4 + 160 | 0;
 i11 = i4 + 168 | 0;
 HEAP32[i3 >> 2] = 0;
 i12 = HEAP32[i2 >> 2] | 0;
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i12 + (i13 << 2) | 0;
 i14 = i5 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i5 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i5 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 | 0;
 do {
  if ((i13 | 0) == 0) {
   i18 = 0;
   i19 = 0;
   i20 = 19;
  } else {
   i21 = i1;
   i22 = i6 + 4 | 0;
   i23 = i6 | 0;
   i24 = i6 + 8 | 0;
   i25 = i6 + 12 | 0;
   i26 = i6 + 16 | 0;
   i27 = i6 + 20 | 0;
   i28 = i6 + 24 | 0;
   i29 = i6 + 28 | 0;
   i30 = i6 + 32 | 0;
   i31 = i6 + 36 | 0;
   i32 = i6 + 40 | 0;
   i33 = i6 + 44 | 0;
   i34 = i12;
   while (1) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 28 >> 2] & 7](i6, i17, i34);
    if ((HEAP8[i22] & 1) == 0) {
     break;
    }
    i35 = HEAP32[i16 >> 2] | 0;
    if ((i35 | 0) == (HEAP32[i15 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i5, i6);
    } else {
     i36 = HEAP32[i14 >> 2] | 0;
     i37 = HEAP32[i23 >> 2] | 0;
     HEAP32[i36 + (i35 * 48 & -1) >> 2] = i37;
     if ((i37 | 0) != 0) {
      i38 = i37 | 0;
      HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
     }
     i38 = i36 + (i35 * 48 & -1) + 4 | 0;
     i37 = HEAP8[i38] & -2 | HEAP8[i22] & 1;
     HEAP8[i38] = i37;
     HEAP8[i38] = i37 & -3 | HEAP8[i22] & 2;
     HEAP32[i36 + (i35 * 48 & -1) + 8 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 12 >> 2] = HEAP32[i25 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 16 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 20 >> 2] = HEAP32[i27 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 24 >> 2] = HEAP32[i28 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 28 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 32 >> 2] = HEAP32[i30 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 36 >> 2] = HEAP32[i31 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 40 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i36 + (i35 * 48 & -1) + 44 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i16 >> 2] = i35 + 1;
    }
    i35 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i35 | 0) != 0) {
      i36 = i35 | 0;
      i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i37 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i35);
       break;
      } else {
       HEAP32[i36 >> 2] = i37;
       break;
      }
     }
    } while (0);
    i35 = i34 + 4 | 0;
    if ((i35 | 0) == (i2 | 0)) {
     i20 = 18;
     break;
    } else {
     i34 = i35;
    }
   }
   if ((i20 | 0) == 18) {
    i18 = HEAP32[i14 >> 2] | 0;
    i19 = HEAP32[i16 >> 2] | 0;
    i20 = 19;
    break;
   }
   HEAP32[i3 >> 2] = 12;
   i34 = HEAP32[i23 >> 2] | 0;
   if ((i34 | 0) == 0) {
    break;
   }
   i33 = i34 | 0;
   i32 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i34);
    break;
   } else {
    HEAP32[i33 >> 2] = i32;
    break;
   }
  }
 } while (0);
 L26 : do {
  if ((i20 | 0) == 19) {
   i2 = i18 + (i19 * 48 & -1) | 0;
   i6 = (i1 | 0) == 0;
   i5 = i7 | 0;
   i12 = i8 | 0;
   i13 = i8 + 4 | 0;
   i32 = i1 + 260 | 0;
   i33 = i11 | 0;
   i34 = i11 + 4 | 0;
   i31 = i9 + 28 | 0;
   i30 = i9 + 24 | 0;
   i29 = i9 + 4 | 0;
   i28 = i9 | 0;
   i27 = i10 | 0;
   i26 = i1;
   i25 = i17 - 156 + 68 | 0;
   i24 = i18;
   while (1) {
    if ((i24 | 0) == (i2 | 0)) {
     break L26;
    }
    i22 = __ZN3WTF10fastMallocEj(156) | 0;
    i21 = i22;
    __ZN7WebCore18WorkerScriptLoaderC1Ev(i21);
    __ZN7WebCore18WorkerScriptLoader17loadSynchronouslyEPNS_22ScriptExecutionContextERKNS_3URLENS_24CrossOriginRequestPolicyE(i21, i17, i24, 2);
    if ((HEAP8[i22 + 144 | 0] & 1) == 0) {
     i35 = HEAP32[i22 + 148 >> 2] | 0;
     __ZN7WebCore18WorkerScriptLoader6scriptEv(i7, i21);
     do {
      if (!i6) {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] & 63](i17) | 0) {
        i39 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i25) | 0) | 0;
       } else {
        i39 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i17) | 0;
       }
       if ((i39 | 0) == 0) {
        break;
       }
       __ZN7WebCore24InspectorInstrumentation18scriptImportedImplEPNS_19InstrumentingAgentsEmRKN3WTF6StringE(i39, i35, i7);
      }
     } while (0);
     i35 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i37 = i35 | 0;
       i36 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
       if ((i36 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i37 >> 2] = i36;
        break;
       }
      }
     } while (0);
     HEAP32[i12 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
     HEAP32[i13 >> 2] = 0;
     i35 = HEAP32[i32 >> 2] | 0;
     __ZN7WebCore18WorkerScriptLoader6scriptEv(i10, i21);
     i36 = __ZNK7WebCore18WorkerScriptLoader11responseURLEv(i21) | 0;
     HEAP32[i33 >> 2] = 0;
     HEAP32[i34 >> 2] = 0;
     __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i9, i10, i36, i11);
     __ZN7WebCore22WorkerScriptController8evaluateERKNS_16ScriptSourceCodeEPN10Deprecated11ScriptValueE(i35, i9, i8);
     i35 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i36 = i35 | 0;
       i37 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
       if ((i37 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i36 >> 2] = i37;
        break;
       }
      }
     } while (0);
     __ZN7WebCore24CachedResourceHandleBaseD2Ev(i30);
     i35 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i37 = i35 + 4 | 0;
       i36 = i37 | 0;
       i38 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
       if ((i38 | 0) != 0) {
        HEAP32[i36 >> 2] = i38;
        break;
       }
       i38 = i37 - 4 | 0;
       if ((i38 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
      }
     } while (0);
     i35 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i38 = i35 + 4 | 0;
       i37 = i38 | 0;
       i36 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
       if ((i36 | 0) != 0) {
        HEAP32[i37 >> 2] = i36;
        break;
       }
       i36 = i38 - 4 | 0;
       if ((i36 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 63](i36);
      }
     } while (0);
     i35 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i35 | 0) != 0) {
       i36 = i35 | 0;
       i38 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
       if ((i38 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i35);
        break;
       } else {
        HEAP32[i36 >> 2] = i38;
        break;
       }
      }
     } while (0);
     i35 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i35 | 0) == 0) {
       i40 = 0;
      } else {
       if ((HEAP32[i35 + 4 >> 2] | 0) == -6) {
        i40 = 0;
        break;
       }
       __ZN7WebCore22WorkerScriptController12setExceptionERKN10Deprecated11ScriptValueE(HEAP32[i32 >> 2] | 0, i8);
       i40 = 1;
      }
     } while (0);
     __ZN10Deprecated11ScriptValueD1Ev(i8);
     i41 = i40;
    } else {
     HEAP32[i3 >> 2] = 601;
     i41 = 1;
    }
    do {
     if ((i22 | 0) != 0) {
      i35 = i22 + 4 | 0;
      i38 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
      if ((i38 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] & 63](i21);
       break;
      } else {
       HEAP32[i35 >> 2] = i38;
       break;
      }
     }
    } while (0);
    if ((i41 | 0) == 0) {
     i24 = i24 + 48 | 0;
    } else {
     break;
    }
   }
  }
 } while (0);
 i41 = HEAP32[i16 >> 2] | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i41 | 0) != 0) {
  i40 = i3 + (i41 * 48 & -1) | 0;
  i41 = i3;
  while (1) {
   i8 = HEAP32[i41 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i41 = i41 + 48 | 0;
   if ((i41 | 0) == (i40 | 0)) {
    break;
   }
  }
  HEAP32[i16 >> 2] = 0;
 }
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i14 >> 2] = 0;
 HEAP32[i15 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17WorkerGlobalScopeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 160 >> 2] = H_BASE + 256;
 i4 = i1 + 288 | 0;
 i5 = i1 + 276 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 280 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 2) | 0;
 L1 : do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i6;
    } else {
     i11 = i6;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i11 = i10;
   while (1) {
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12 + 4 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i3 >> 2] = i12;
     __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i14 + 276 | 0, i3) | 0;
     HEAP32[i13 >> 2] = 0;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 63](i12);
    i12 = HEAP32[i5 >> 2] | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    i14 = i12 + (i13 << 2) | 0;
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     break L1;
    }
    L15 : do {
     if ((i13 | 0) == 0) {
      i15 = i12;
     } else {
      i16 = i12;
      while (1) {
       i17 = HEAP32[i16 >> 2] | 0;
       if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
        i15 = i16;
        break L15;
       }
       i16 = i16 + 4 | 0;
       if ((i16 | 0) == (i14 | 0)) {
        break L1;
       }
      }
     }
    } while (0);
    if ((i15 | 0) == (i14 | 0)) {
     break;
    } else {
     i11 = i15;
    }
   }
  }
 } while (0);
 i15 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 63](i15);
 i15 = HEAP32[i1 + 328 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i4 = i15 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i15);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 __ZN7WebCore16WorkerEventQueueD1Ev(i1 + 296 | 0);
 i15 = HEAP32[i5 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 268 >> 2] | 0;
 if ((i15 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
 }
 i15 = HEAP32[i1 + 260 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore22WorkerScriptControllerD1Ev(i15);
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 256 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 + 4 | 0;
   i4 = i5 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i7);
  }
 } while (0);
 i15 = HEAP32[i1 + 252 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i15 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i4;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 i15 = i1 + 248 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i15 = HEAP32[i5 + 4 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i4 = i15 | 0;
    i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i4 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 244 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 i7 = i5 | 0;
 i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i15;
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17WorkerGlobalScopeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i1 + 160 >> 2] = H_BASE + 256;
 i4 = i1 + 288 | 0;
 i5 = i1 + 276 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 280 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 2) | 0;
 L1 : do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   L3 : do {
    if ((i8 | 0) == 0) {
     i10 = i6;
    } else {
     i11 = i6;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L3;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i9 | 0)) {
    break;
   }
   i11 = i10;
   while (1) {
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12 + 4 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) != 0) {
     HEAP32[i3 >> 2] = i12;
     __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i14 + 276 | 0, i3) | 0;
     HEAP32[i13 >> 2] = 0;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 8 >> 2] & 63](i12);
    i12 = HEAP32[i5 >> 2] | 0;
    i13 = HEAP32[i7 >> 2] | 0;
    i14 = i12 + (i13 << 2) | 0;
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     break L1;
    }
    L15 : do {
     if ((i13 | 0) == 0) {
      i15 = i12;
     } else {
      i16 = i12;
      while (1) {
       i17 = HEAP32[i16 >> 2] | 0;
       if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
        i15 = i16;
        break L15;
       }
       i16 = i16 + 4 | 0;
       if ((i16 | 0) == (i14 | 0)) {
        break L1;
       }
      }
     }
    } while (0);
    if ((i15 | 0) == (i14 | 0)) {
     break;
    } else {
     i11 = i15;
    }
   }
  }
 } while (0);
 i15 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 24 >> 2] & 63](i15);
 i15 = HEAP32[i1 + 328 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i4 = i15 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i15);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 __ZN7WebCore16WorkerEventQueueD1Ev(i1 + 296 | 0);
 i15 = HEAP32[i5 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 268 >> 2] | 0;
 if ((i15 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
 }
 i15 = HEAP32[i1 + 260 >> 2] | 0;
 if ((i15 | 0) != 0) {
  __ZN7WebCore22WorkerScriptControllerD1Ev(i15);
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i1 + 256 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i5 = i15 + 4 | 0;
   i4 = i5 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 63](i7);
  }
 } while (0);
 i15 = HEAP32[i1 + 252 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i7 = i15 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i7 >> 2] = i5;
    break;
   }
   i5 = HEAP32[i15 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i4;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 i15 = i1 + 248 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 if ((i5 | 0) != 0) {
  i15 = HEAP32[i5 + 4 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i4 = i15 | 0;
    i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i4 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i5);
 }
 i5 = HEAP32[i1 + 244 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 | 0;
   i7 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i15 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i1 + 196 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 i7 = i5 | 0;
 i15 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i15;
  i18 = i1 + 160 | 0;
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = H_BASE + 48;
  i20 = i1 + 164 | 0;
  __ZN7WebCore15EventTargetDataD1Ev(i20);
  i21 = i18 | 0;
  __ZN7WebCore11EventTargetD2Ev(i21);
  i22 = i1 | 0;
  __ZN7WebCore22ScriptExecutionContextD2Ev(i22);
  STACKTOP = i2;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 12;
}
function __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i29, i25) | 0;
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
 HEAP32[i12 >> 2] = H_BASE + 368;
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
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i9) | 0) >> 2] | 0;
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
function __ZNK7WebCore17WorkerGlobalScope18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 92 >> 2] | 0) != 0) {
   L3 : do {
    if ((i3 | 0) == 0) {
     i5 = i2;
    } else {
     i6 = i2;
     while (1) {
      i7 = HEAP32[i6 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       i5 = i6;
       break L3;
      }
      i6 = i6 + 4 | 0;
      if ((i6 | 0) == (i4 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i5 | 0) == (i4 | 0)) {
    break;
   } else {
    i8 = i5;
   }
   while (1) {
    i6 = HEAP32[i8 >> 2] | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 63](i6) | 0) {
     i9 = 1;
     break;
    }
    i6 = i8 + 4 | 0;
    if ((i6 | 0) == (i4 | 0)) {
     break L1;
    } else {
     i10 = i6;
    }
    while (1) {
     i6 = HEAP32[i10 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      break;
     }
     i6 = i10 + 4 | 0;
     if ((i6 | 0) == (i4 | 0)) {
      break L1;
     } else {
      i10 = i6;
     }
    }
    if ((i10 | 0) == (i4 | 0)) {
     break L1;
    } else {
     i8 = i10;
    }
   }
   return i9 | 0;
  }
 } while (0);
 i10 = HEAP32[i1 + 40 >> 2] | 0;
 i8 = HEAP32[i1 + 44 >> 2] | 0;
 i4 = i10 + (i8 << 2) | 0;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 L20 : do {
  if ((i8 | 0) == 0) {
   i11 = i10;
  } else {
   i1 = i10;
   while (1) {
    i5 = HEAP32[i1 >> 2] | 0;
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i11 = i1;
     break L20;
    }
    i5 = i1 + 4 | 0;
    if ((i5 | 0) == (i4 | 0)) {
     i9 = 0;
     break;
    } else {
     i1 = i5;
    }
   }
   return i9 | 0;
  }
 } while (0);
 if ((i11 | 0) == (i4 | 0)) {
  i9 = 0;
  return i9 | 0;
 } else {
  i12 = i11;
 }
 L28 : while (1) {
  if (__ZN7WebCore11MessagePort18hasPendingActivityEv(HEAP32[i12 >> 2] | 0) | 0) {
   i9 = 1;
   i13 = 28;
   break;
  }
  i11 = i12 + 4 | 0;
  if ((i11 | 0) == (i4 | 0)) {
   i9 = 0;
   i13 = 29;
   break;
  } else {
   i14 = i11;
  }
  while (1) {
   i11 = HEAP32[i14 >> 2] | 0;
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    break;
   }
   i11 = i14 + 4 | 0;
   if ((i11 | 0) == (i4 | 0)) {
    i9 = 0;
    i13 = 25;
    break L28;
   } else {
    i14 = i11;
   }
  }
  if ((i14 | 0) == (i4 | 0)) {
   i9 = 0;
   i13 = 24;
   break;
  } else {
   i12 = i14;
  }
 }
 if ((i13 | 0) == 24) {
  return i9 | 0;
 } else if ((i13 | 0) == 25) {
  return i9 | 0;
 } else if ((i13 | 0) == 28) {
  return i9 | 0;
 } else if ((i13 | 0) == 29) {
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore17WorkerGlobalScopeC2ERKNS_3URLERKN3WTF6StringENSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_12WorkerThreadENS4_10PassRefPtrINS_14SecurityOriginEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 HEAP32[i1 + 156 >> 2] = 1;
 i9 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContextC2Ev(i9);
 i10 = i1 + 160 | 0;
 HEAP32[i10 >> 2] = H_BASE + 48;
 __ZN7WebCore15EventTargetDataC1Ev(i1 + 164 | 0);
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAP32[i10 >> 2] = H_BASE + 256;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 196 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i11 = i10 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
 }
 i11 = i2 + 4 | 0;
 i10 = i1 + 200 | 0;
 i12 = HEAP8[i10] & -2 | HEAP8[i11] & 1;
 HEAP8[i10] = i12;
 HEAP8[i10] = i12 & -3 | HEAP8[i11] & 2;
 HEAP32[i1 + 204 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 208 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 212 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 216 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 220 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 224 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 228 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 232 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 236 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 240 >> 2] = HEAP32[i2 + 44 >> 2];
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i1 + 244 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i3 = i11 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 248 >> 2] = i4;
 HEAP32[i1 + 252 >> 2] = 0;
 HEAP32[i1 + 256 >> 2] = 0;
 i4 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore22WorkerScriptControllerC1EPNS_17WorkerGlobalScopeE(i4, i1);
 HEAP32[i1 + 260 >> 2] = i4;
 HEAP32[i1 + 264 >> 2] = i5;
 i5 = __ZN3WTF10fastMallocEj(68) | 0;
 __ZN7WebCore25WorkerInspectorControllerC1EPNS_17WorkerGlobalScopeE(i5, i1);
 HEAP32[i1 + 268 >> 2] = i5;
 HEAP8[i1 + 272 | 0] = 0;
 _memset(i1 + 276 | 0, 0, 20) | 0;
 __ZN7WebCore16WorkerEventQueueC1ERNS_22ScriptExecutionContextE(i1 + 296 | 0, i9);
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 + 328 >> 2] = i6;
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i8, i2);
 __ZN7WebCore15SecurityContext17setSecurityOriginEN3WTF10PassRefPtrINS_14SecurityOriginEEE(i1 | 0, i8);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i1 | 0;
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i7;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
function __ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 63](i1) | 0)) {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
  i12 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i12 >> 2] = __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE + 8;
  HEAP32[i12 + 4 >> 2] = i2;
  HEAP32[i12 + 8 >> 2] = i3;
  __ZNKR3WTF6String12isolatedCopyEv(i12 + 12 | 0, i4);
  i13 = i7 | 0;
  HEAP32[i13 >> 2] = i12;
  FUNCTION_TABLE_vii[i11 & 15](i1, i7);
  i7 = HEAP32[i13 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  STACKTOP = i6;
  return;
 }
 i7 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 124 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] | 0;
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = 0;
 FUNCTION_TABLE_viiiiiii[i13 & 1](i7, i2, i3, i4, 0, 0, i8);
 i8 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = i8 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i11 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i9 | 0;
 HEAP32[i8 >> 2] = 0;
 i7 = i10 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore17WorkerGlobalScope25addMessageToWorkerConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i9, 0, 0, i10, 0, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15ScriptCallStackD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i8 = i5 | 0;
 i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i6;
  return;
 } else {
  HEAP32[i8 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore15ScheduledActionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
 i2 = i1 + 12 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 4 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = HEAP32[(i7 & -4096) + 12 >> 2] | 0;
    i9 = i7;
    i10 = i8 + 84 | 0;
    i11 = i9 + 12 | 0;
    if ((i9 | 0) == (HEAP32[i10 >> 2] | 0)) {
     HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
    }
    i10 = i7 + 8 | 0;
    i7 = HEAP32[i10 >> 2] | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    HEAP32[i7 + 12 >> 2] = i12;
    HEAP32[i12 + 8 >> 2] = i7;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i11 >> 2] = 0;
    i10 = i8 + 80 | 0;
    HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i10 >> 2] = i9;
    HEAP32[i5 >> 2] = 0;
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
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i4 = HEAP32[(i1 & -4096) + 12 >> 2] | 0;
 i6 = i1;
 i3 = i4 + 84 | 0;
 i5 = i6 + 12 | 0;
 if ((i6 | 0) == (HEAP32[i3 >> 2] | 0)) {
  HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 }
 i3 = i1 + 8 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i9;
 HEAP32[i9 + 8 >> 2] = i1;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i3 = i4 + 80 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = i6;
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 * 48 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (((i2 - i7 | 0) / 48 & -1) * 48 & -1) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 * 48 & -1) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i11 + 4 | 0;
 i2 = i12 + (i6 * 48 & -1) + 4 | 0;
 i8 = HEAP8[i2] & -2 | HEAP8[i5] & 1;
 HEAP8[i2] = i8;
 HEAP8[i2] = i8 & -3 | HEAP8[i5] & 2;
 HEAP32[i12 + (i6 * 48 & -1) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 20 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 32 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 36 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 40 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i12 + (i6 * 48 & -1) + 44 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore17WorkerGlobalScope21notifyObserversOfStopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 288 | 0;
 i5 = i1 + 276 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 280 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = i6 + (i1 << 2) | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L4 : do {
  if ((i1 | 0) == 0) {
   i9 = i6;
  } else {
   i10 = i6;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i9 = i10;
     break L4;
    }
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i9 | 0) == (i8 | 0)) {
  STACKTOP = i2;
  return;
 }
 i8 = i9;
 L13 : while (1) {
  i9 = HEAP32[i8 >> 2] | 0;
  i6 = i9 + 4 | 0;
  i1 = HEAP32[i6 >> 2] | 0;
  if ((i1 | 0) != 0) {
   HEAP32[i3 >> 2] = i9;
   __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 276 | 0, i3) | 0;
   HEAP32[i6 >> 2] = 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i9);
  i9 = HEAP32[i5 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i1 = i9 + (i6 << 2) | 0;
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i12 = 17;
   break;
  }
  L19 : do {
   if ((i6 | 0) == 0) {
    i13 = i9;
   } else {
    i10 = i9;
    while (1) {
     i11 = HEAP32[i10 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i13 = i10;
      break L19;
     }
     i11 = i10 + 4 | 0;
     if ((i11 | 0) == (i1 | 0)) {
      i12 = 19;
      break L13;
     } else {
      i10 = i11;
     }
    }
   }
  } while (0);
  if ((i13 | 0) == (i1 | 0)) {
   i12 = 18;
   break;
  } else {
   i8 = i13;
  }
 }
 if ((i12 | 0) == 17) {
  STACKTOP = i2;
  return;
 } else if ((i12 | 0) == 18) {
  STACKTOP = i2;
  return;
 } else if ((i12 | 0) == 19) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17WorkerGlobalScope25addMessageToWorkerConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11 | 0;
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i14 = __ZN7WebCore24InspectorInstrumentation39instrumentingAgentsForWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i1) | 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i11;
   return;
  }
  __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES9_jjPN3JSC9ExecStateEm(i14, i2, 0, i3, i4, i5, i6, i7, i9, i10);
  STACKTOP = i11;
  return;
 }
 HEAP32[i13 >> 2] = 0;
 i13 = __ZN7WebCore24InspectorInstrumentation39instrumentingAgentsForWorkerGlobalScopeEPNS_17WorkerGlobalScopeE(i1) | 0;
 if ((i13 | 0) == 0) {
  i1 = i8 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore15ScriptCallStackD1Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
   STACKTOP = i11;
   return;
  } else {
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i11;
   return;
  }
 }
 i9 = i12 | 0;
 HEAP32[i9 >> 2] = i8;
 __ZN7WebCore24InspectorInstrumentation23addMessageToConsoleImplEPNS_19InstrumentingAgentsENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringENS6_10PassRefPtrINS_15ScriptCallStackEEEm(i13, i2, 0, i3, i4, i12, i10);
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i9 = i10 | 0;
 i12 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i12 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i11;
  return;
 } else {
  HEAP32[i9 >> 2] = i12;
  STACKTOP = i11;
  return;
 }
}
function __ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 63](i1) | 0)) {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
  i15 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i15 >> 2] = __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE + 8;
  HEAP32[i15 + 4 >> 2] = i2;
  HEAP32[i15 + 8 >> 2] = i3;
  __ZNKR3WTF6String12isolatedCopyEv(i15 + 12 | 0, i4);
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = i15;
  FUNCTION_TABLE_vii[i14 & 15](i1, i12);
  i12 = HEAP32[i16 >> 2] | 0;
  if ((i12 | 0) == 0) {
   STACKTOP = i11;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
  STACKTOP = i11;
  return;
 }
 i12 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 1](i12, i2, i3, i4, i6, i7, i5);
 i12 = i13 | 0;
 i16 = i8 | 0;
 i8 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i12 >> 2] = i8;
 __ZN7WebCore17WorkerGlobalScope25addMessageToWorkerConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm(i1, i2, i3, i4, i5, i6, i7, i13, i9, i10);
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i12 = i10 | 0;
 i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i11;
  return;
 } else {
  HEAP32[i12 >> 2] = i9;
  STACKTOP = i11;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 48 & -1) | 0;
 if (i2 >>> 0 > 89478485 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 48 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 48 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = i7 + 4 | 0;
   i10 = HEAP8[i9] & -2 | HEAP8[i8] & 1;
   HEAP8[i9] = i10;
   HEAP8[i9] = i10 & -3 | HEAP8[i8] & 2;
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i7 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAP32[i7 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   HEAP32[i7 + 36 >> 2] = HEAP32[i6 + 36 >> 2];
   HEAP32[i7 + 40 >> 2] = HEAP32[i6 + 40 >> 2];
   HEAP32[i7 + 44 >> 2] = HEAP32[i6 + 44 >> 2];
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i8 = i6 + 48 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 48 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZNK7WebCore17WorkerGlobalScope8locationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 252 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(52) | 0;
 HEAP32[i4 >> 2] = 1;
 i5 = HEAP32[i1 + 196 >> 2] | 0;
 HEAP32[i4 + 4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 200 | 0;
 i5 = i4 + 8 | 0;
 i7 = HEAP8[i5] & -2 | HEAP8[i6] & 1;
 HEAP8[i5] = i7;
 HEAP8[i5] = i7 & -3 | HEAP8[i6] & 2;
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 204 >> 2];
 HEAP32[i4 + 16 >> 2] = HEAP32[i1 + 208 >> 2];
 HEAP32[i4 + 20 >> 2] = HEAP32[i1 + 212 >> 2];
 HEAP32[i4 + 24 >> 2] = HEAP32[i1 + 216 >> 2];
 HEAP32[i4 + 28 >> 2] = HEAP32[i1 + 220 >> 2];
 HEAP32[i4 + 32 >> 2] = HEAP32[i1 + 224 >> 2];
 HEAP32[i4 + 36 >> 2] = HEAP32[i1 + 228 >> 2];
 HEAP32[i4 + 40 >> 2] = HEAP32[i1 + 232 >> 2];
 HEAP32[i4 + 44 >> 2] = HEAP32[i1 + 236 >> 2];
 HEAP32[i4 + 48 >> 2] = HEAP32[i1 + 240 >> 2];
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
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
function __ZN7WebCore17WorkerGlobalScope36applyContentSecurityPolicyFromStringERKN3WTF6StringENS_21ContentSecurityPolicy10HeaderTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore21ContentSecurityPolicyC1EPNS_22ScriptExecutionContextE(i6, i1 | 0);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i6;
 __ZN7WebCore15SecurityContext24setContentSecurityPolicyEN3WTF10PassOwnPtrINS_21ContentSecurityPolicyEEE(i1 | 0, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore21ContentSecurityPolicyD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore21ContentSecurityPolicy16didReceiveHeaderERKN3WTF6StringENS0_10HeaderTypeE(HEAP32[i1 + 16 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17WorkerGlobalScope9navigatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 256 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(32) | 0;
   __ZN7WebCore15WorkerNavigatorC1ERKN3WTF6StringE(i3, i1 + 244 | 0);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 63](i5);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore17WorkerGlobalScope11setIntervalEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 i2 = __ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i1 | 0, i5, i3, 0) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return i2 | 0;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return i2 | 0;
}
function __ZN7WebCore17WorkerGlobalScope10setTimeoutEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i2;
 i2 = __ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i1 | 0, i5, i3, 1) | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return i2 | 0;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return i2 | 0;
}
function __ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i1 + 264 >> 2] | 0) + 12 | 0;
 i1 = i4 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore13WorkerRunLoop8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE(i5, i4);
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17WorkerGlobalScope5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 272 | 0;
 if ((HEAP8[i4] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i4] = 1;
 i4 = HEAP32[(HEAP32[i1 >> 2] | 0) + 60 >> 2] | 0;
 i5 = __ZN3WTF10fastMallocEj(4) | 0;
 HEAP32[i5 >> 2] = H_BASE + 16;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i5;
 FUNCTION_TABLE_vii[i4 & 15](i1, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17WorkerGlobalScope8ObserverC2EPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i2 + 276 | 0, i4, i4);
 STACKTOP = i3;
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
function __ZN7WebCore17WorkerGlobalScope16registerObserverEPNS0_8ObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 276 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17WorkerGlobalScope8ObserverD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
  __ZdlPv(i5);
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 276 | 0, i3) | 0;
 i5 = i1;
 __ZdlPv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17WorkerGlobalScope8Observer13stopObservingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i5 + 276 | 0, i3) | 0;
 HEAP32[i4 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
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
function __ZN7WebCore17WorkerGlobalScope8ObserverD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 276 | 0, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17WorkerGlobalScope8ObserverD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i4 + 276 | 0, i3) | 0;
 STACKTOP = i2;
 return;
}
function __ZN3JSC20StringSourceProviderD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
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
function __ZN7WebCore17WorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i6 = HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 3](i6, i2, i4, i5, i3);
 return;
}
function __ZN7WebCore17WorkerGlobalScope18unregisterObserverEPNS0_8ObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 276 | 0, i4) | 0;
 STACKTOP = i3;
 return;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
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
function __ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i1);
  return;
 } else {
  __ZN7WebCore3URLC1ERKS0_RKN3WTF6StringE(i1, i2 + 196 | 0, i3);
  return;
 }
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
function __ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i2 + 244 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore17WorkerGlobalScope14clearInspectorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 268 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore26CloseWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i1 = HEAP32[(HEAP32[i2 + 264 >> 2] | 0) + 124 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 63](i1);
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
 FUNCTION_TABLE_viiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
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
function __ZN7WebCore25EventTargetWithInlineDataD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22WorkerScriptController11disableEvalERKN3WTF6StringE(HEAP32[i1 + 260 >> 2] | 0, i2);
 return;
}
function __ZNK7WebCore17WorkerGlobalScope15isContextThreadEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF13currentThreadEv() | 0;
 return (i2 | 0) == (HEAP32[(HEAP32[i1 + 264 >> 2] | 0) + 8 >> 2] | 0) | 0;
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
function __ZN7WebCore25EventTargetWithInlineDataD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore15EventTargetDataD1Ev(i1 + 4 | 0);
 __ZN7WebCore11EventTargetD2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore22WorkerScriptController20isExecutionForbiddenEv(HEAP32[i1 + 260 >> 2] | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn160_N7WebCore17WorkerGlobalScopeD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 332 + 172 | 0;
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function di___ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv(i1 | 0);
}
function __ZN7WebCore17WorkerGlobalScope13clearIntervalEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi(i1 | 0, i2);
 return;
}
function di___ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv(i1 | 0);
}
function __ZN7WebCore17WorkerGlobalScope12clearTimeoutEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi(i1 | 0, i2);
 return;
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
function __ZN7WebCore26CloseWorkerGlobalScopeTaskD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
}
function b11(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(11);
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
function __ZN7WebCore17WorkerGlobalScopeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn160_N7WebCore17WorkerGlobalScopeD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17WorkerGlobalScopeD2Ev(i1 - 332 + 172 | 0);
 return;
}
function __ZN7WebCore26CloseWorkerGlobalScopeTaskD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 return;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return i1 - 332 + 172 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function __ZNK7WebCore17WorkerGlobalScope9topOriginEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 328 >> 2] | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
 return 0;
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
function __ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return i1 | 0;
}
function __ZN7WebCore17WorkerGlobalScope16errorEventTargetEv(i1) {
 i1 = i1 | 0;
 return i1 + 160 | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 7](i2 | 0);
}
function __ZNK7WebCore17WorkerGlobalScope25isSharedWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore26CloseWorkerGlobalScopeTask13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore17WorkerGlobalScope10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 + 296 | 0;
}
function __ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore22ScriptExecutionContext10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function __ZNK7WebCore17WorkerGlobalScope3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 196 | 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,__ZN7WebCore17WorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE,b1];
  var FUNCTION_TABLE_di = [b2,b2,di___ZNK7WebCore22ScriptExecutionContext22timerAlignmentIntervalEv__wrapper,b2,di___ZNK7WebCore22ScriptExecutionContext20minimumTimerIntervalEv__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore22ScriptExecutionContext20stopActiveDOMObjectsEv__wrapper,b3,__ZThn160_N7WebCore17WorkerGlobalScopeD0Ev,b3,__ZThn160_N7WebCore17WorkerGlobalScope14refEventTargetEv,b3,__ZThn160_N7WebCore17WorkerGlobalScopeD1Ev,b3,__ZN7WebCore17WorkerGlobalScope27derefScriptExecutionContextEv,b3,__ZN7WebCore25EventTargetWithInlineDataD0Ev,b3,__ZN7WebCore17WorkerGlobalScopeD2Ev,b3,__ZN7WebCore17WorkerGlobalScope14refEventTargetEv,b3,__ZN7WebCore17WorkerGlobalScope8ObserverD0Ev,b3,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b3,__ZN7WebCore26CloseWorkerGlobalScopeTaskD0Ev,b3,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b3,__ZN3JSC20StringSourceProviderD0Ev,b3,__ZN7WebCore17WorkerGlobalScope25refScriptExecutionContextEv
  ,b3,__ZN7WebCore26CloseWorkerGlobalScopeTaskD1Ev,b3,__ZN7WebCore17WorkerGlobalScope8ObserverD2Ev,b3,__ZN3JSC20StringSourceProviderD1Ev,b3,__ZN7WebCore17WorkerGlobalScope16derefEventTargetEv,b3,__ZN7WebCore25EventTargetWithInlineDataD1Ev,b3,__ZThn160_N7WebCore17WorkerGlobalScope16derefEventTargetEv,b3,__ZN7WebCore17WorkerGlobalScopeD0Ev,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE,b4,vii___ZN7WebCore22ScriptExecutionContext23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b4,vii___ZN7WebCore22ScriptExecutionContext22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b4,__ZN7WebCore26CloseWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE,b4,__ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore17WorkerGlobalScope28isDedicatedWorkerGlobalScopeEv,b5,__ZNK7WebCore26CloseWorkerGlobalScopeTask13isCleanupTaskEv,b5,__ZNK7WebCore17WorkerGlobalScope15isContextThreadEv,b5,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b5,__ZNK7WebCore17WorkerGlobalScope9topOriginEv,b5,__ZNK3JSC20StringSourceProvider6sourceEv,b5,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b5,__ZN7WebCore17WorkerGlobalScope16errorEventTargetEv,b5,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b5,__ZNK7WebCore17WorkerGlobalScope10eventQueueEv,b5,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b5,__ZNK7WebCore22ScriptExecutionContext10isDocumentEv,b5,__ZNK7WebCore17WorkerGlobalScope3urlEv,b5,__ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv
  ,b5,__ZNK7WebCore17WorkerGlobalScope25isSharedWorkerGlobalScopeEv,b5,__ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv,b5,__ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv,b5,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b5,__ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE,b6,__ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE,b6,__ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_iiiii = [b8,b8,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b8,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b8,b8,b8];
  var FUNCTION_TABLE_viiiiiiiiii = [b9,b9,__ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b10];
  var FUNCTION_TABLE_viiiiiii = [b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiiiiii: dynCall_viiiiiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiiiiii": invoke_viiiiiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE": __ZTVN7WebCore22ScriptExecutionContext21AddConsoleMessageTaskE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17WorkerGlobalScope8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE","_strlen","__ZNK7WebCore17WorkerGlobalScope28isDedicatedWorkerGlobalScopeEv","__ZNK7WebCore26CloseWorkerGlobalScopeTask13isCleanupTaskEv","__ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore17WorkerGlobalScope10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm","__ZN7WebCore17WorkerGlobalScope11setIntervalEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi","__ZNK7WebCore17WorkerGlobalScope22isJSExecutionForbiddenEv","__ZThn160_N7WebCore17WorkerGlobalScopeD0Ev","__ZThn160_N7WebCore17WorkerGlobalScope14refEventTargetEv","__ZN7WebCore17WorkerGlobalScope8ObserverC2EPS0_","__ZThn160_N7WebCore17WorkerGlobalScopeD1Ev","__ZN7WebCore17WorkerGlobalScope27derefScriptExecutionContextEv","__ZN7WebCore17WorkerGlobalScope21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE","__ZNK7WebCore17WorkerGlobalScope15isContextThreadEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZN7WebCore17WorkerGlobalScope16errorEventTargetEv","__ZNK7WebCore17WorkerGlobalScope9topOriginEv","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore17WorkerGlobalScope14clearInspectorEv","__ZN7WebCore17WorkerGlobalScope8ObserverD0Ev","__ZN3WTF9HashTableIPN7WebCore17WorkerGlobalScope8ObserverES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZNK7WebCore17WorkerGlobalScope9userAgentERKNS_3URLE","__ZNK7WebCore17WorkerGlobalScope9navigatorEv","__ZNK7WebCore17WorkerGlobalScope18hasPendingActivityEv","__ZN7WebCore17WorkerGlobalScope18unregisterObserverEPNS0_8ObserverE","__ZN7WebCore17WorkerGlobalScope13clearIntervalEi","__ZN7WebCore17WorkerGlobalScope5closeEv","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZNK7WebCore17WorkerGlobalScope8locationEv","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore17WorkerGlobalScope16registerObserverEPNS0_8ObserverE","__ZNK7WebCore17WorkerGlobalScope10eventQueueEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZN7WebCore17WorkerGlobalScope8Observer13stopObservingEv","__ZNK7WebCore22ScriptExecutionContext10isDocumentEv","__ZN7WebCore17WorkerGlobalScope12clearTimeoutEi","__ZNK7WebCore17WorkerGlobalScope11completeURLERKN3WTF6StringE","__ZN3JSC20StringSourceProviderD0Ev","__ZNK7WebCore17WorkerGlobalScope25isSharedWorkerGlobalScopeEv","__ZN7WebCore17WorkerGlobalScope25refScriptExecutionContextEv","__ZNK7WebCore17WorkerGlobalScope22scriptExecutionContextEv","__ZN7WebCore26CloseWorkerGlobalScopeTaskD1Ev","__ZNK7WebCore17WorkerGlobalScope19isWorkerGlobalScopeEv","__ZN7WebCore17WorkerGlobalScope8ObserverD2Ev","__ZN7WebCore17WorkerGlobalScope17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm","__ZN7WebCore25EventTargetWithInlineDataD0Ev","__ZN7WebCore15ScheduledActionD2Ev","__ZThn160_NK7WebCore17WorkerGlobalScope22scriptExecutionContextEv","__ZN7WebCore26CloseWorkerGlobalScopeTask11performTaskEPNS_22ScriptExecutionContextE","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore17WorkerGlobalScope16derefEventTargetEv","_memset","__ZN3WTF6VectorIN7WebCore3URLELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore17WorkerGlobalScope10setTimeoutEN3WTF10PassOwnPtrINS_15ScheduledActionEEEi","__ZN7WebCore17WorkerGlobalScope11disableEvalERKN3WTF6StringE","_memcpy","__ZN7WebCore17WorkerGlobalScope13importScriptsERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEERi","__ZN7WebCore17WorkerGlobalScope21notifyObserversOfStopEv","__ZN7WebCore17WorkerGlobalScopeD2Ev","__ZNK7WebCore17WorkerGlobalScope3urlEv","__ZN7WebCore26CloseWorkerGlobalScopeTaskD0Ev","__ZThn160_N7WebCore17WorkerGlobalScope16derefEventTargetEv","__ZN3WTF7HashSetIPN7WebCore17WorkerGlobalScope8ObserverENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZN7WebCore17WorkerGlobalScopeD0Ev","__ZN7WebCore25EventTargetWithInlineDataD1Ev","__ZN7WebCore17WorkerGlobalScopeC2ERKNS_3URLERKN3WTF6StringENSt3__110unique_ptrINS_13GroupSettingsENS8_14default_deleteISA_EEEEPNS_12WorkerThreadENS4_10PassRefPtrINS_14SecurityOriginEEE","__ZN7WebCore17WorkerGlobalScope25addMessageToWorkerConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm","__ZN7WebCore17WorkerGlobalScope36applyContentSecurityPolicyFromStringERKN3WTF6StringENS_21ContentSecurityPolicy10HeaderTypeE","__ZN7WebCore17WorkerGlobalScope14refEventTargetEv"]

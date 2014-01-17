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
H_BASE = parentModule["_malloc"](176 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 176;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore6WorkerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore6WorkerE=(H_BASE+8)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore6Worker14notifyFinishedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 56 | 0;
 do {
  if ((HEAP8[(HEAP32[i7 >> 2] | 0) + 144 | 0] & 1) == 0) {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i9 | 0) == 0) {
     i10 = 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0) {
      i11 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i9 - 156 + 68 | 0) | 0) | 0;
     } else {
      i11 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i9) | 0;
     }
     if ((i11 | 0) == 0) {
      i10 = 0;
      break;
     }
     i10 = (__ZN7WebCore24InspectorInstrumentation37shouldPauseDedicatedWorkerOnStartImplEPNS_19InstrumentingAgentsE(i11) | 0) & 1;
    }
   } while (0);
   i9 = HEAP32[i1 + 60 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
   i13 = (HEAP32[i7 >> 2] | 0) + 48 | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] & 7](i4, i14, i13);
   __ZN7WebCore18WorkerScriptLoader6scriptEv(i5, HEAP32[i7 >> 2] | 0);
   FUNCTION_TABLE_viiiii[i12 & 1](i9, i13, i4, i5, i10);
   i13 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i9 = i13 | 0;
     i12 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i9 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i12 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i9 + 148 >> 2] | 0;
   __ZN7WebCore18WorkerScriptLoader6scriptEv(i6, i9);
   do {
    if ((i13 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 31](i13) | 0) {
      i15 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i13 - 156 + 68 | 0) | 0) | 0;
     } else {
      i15 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i13) | 0;
     }
     if ((i15 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation18scriptImportedImplEPNS_19InstrumentingAgentsEmRKN3WTF6StringE(i15, i12, i6);
    }
   } while (0);
   i12 = HEAP32[i6 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = i12 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  } else {
   i8 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 148 | 0;
   i13 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i13, i8, 0, 1);
   i8 = i3 | 0;
   HEAP32[i8 >> 2] = i13;
   __ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 + 16 | 0, i3) | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i8 = i13 + 8 | 0;
   i13 = i8 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i13 >> 2] = i12;
    break;
   }
   i12 = i8 - 8 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 + 4 | 0;
   i6 = i7 | 0;
   i15 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i6 >> 2] = i15;
    break;
   }
   i15 = i7 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] & 63](i15);
  }
 } while (0);
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
 i3 = i1 + 12 | 0;
 i1 = i3 | 0;
 i15 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i2;
  return;
 }
 i15 = i3 - 12 | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6Worker6createERNS_22ScriptExecutionContextERKN3WTF6StringERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 + 16 | 0;
 i7 = i5 + 24 | 0;
 __ZN7WebCore15FeatureObserver7observeEPNS_9DOMWindowENS0_7FeatureE(HEAP32[i2 - 156 + 404 >> 2] | 0, 4);
 i8 = __ZN3WTF10fastMallocEj(64) | 0;
 i9 = i8;
 i10 = i8;
 __ZN7WebCore14AbstractWorkerC2ERNS_22ScriptExecutionContextE(i10, i2);
 i11 = i8 + 52 | 0;
 HEAP32[i8 >> 2] = H_BASE + 16;
 HEAP32[i8 + 16 >> 2] = H_BASE + 80;
 HEAP32[i11 >> 2] = H_BASE + 152;
 i12 = i8 + 56 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i8 + 60 >> 2] = __ZN7WebCore22WorkerGlobalScopeProxy6createEPNS_6WorkerE(i9) | 0;
 i13 = HEAP32[H_BASE + 176 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i14 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 176 >> 2] = i14;
  __ZN7WebCore20NetworkStateNotifier29addNetworkStateChangeListenerEPFvbE(__ZN7WebCore20networkStateNotifierEv() | 0, F_BASE_vi + 14 | 0);
  i15 = HEAP32[H_BASE + 176 >> 2] | 0;
 } else {
  i15 = i13;
 }
 HEAP32[i6 >> 2] = i9;
 __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5 | 0, i15 | 0, i6, i6);
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i8);
 __ZN7WebCore14AbstractWorker10resolveURLERKN3WTF6StringERi(i7, i10, i3, i4);
 i4 = i7 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = 5;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    i16 = 5;
    break;
   }
   i10 = i8 + 12 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i8 + 8 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = __ZN3WTF10fastMallocEj(156) | 0;
   __ZN7WebCore18WorkerScriptLoaderC1Ev(i10);
   i6 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i10;
   do {
    if ((i6 | 0) != 0) {
     i10 = i6 + 4 | 0;
     i15 = i10 | 0;
     i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i15 >> 2] = i13;
      break;
     }
     i13 = i10 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 63](i13);
    }
   } while (0);
   __ZN7WebCore18WorkerScriptLoader18loadAsynchronouslyEPNS_22ScriptExecutionContextERKNS_3URLENS_24CrossOriginRequestPolicyEPNS_24WorkerScriptLoaderClientE(HEAP32[i12 >> 2] | 0, i2, i7, 0, (i8 | 0) == 0 ? 0 : i11);
   HEAP32[i1 >> 2] = i9;
   i17 = 0;
   i18 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 if ((i16 | 0) == 5) {
  HEAP32[i1 >> 2] = 0;
  i17 = i9;
  i18 = i3;
 }
 do {
  if ((i18 | 0) != 0) {
   i3 = i18 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i18 = i17 + 12 | 0;
 i17 = i18 | 0;
 i9 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i17 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
 i9 = i18 - 12 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 63](i9);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 __ZN7WebCore11MessagePort16disentanglePortsEPKN3WTF6VectorINS1_6RefPtrIS0_EELj1ENS1_15CrashOnOverflowEEERi(i6, i3, i4);
 i3 = i6 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i4 = i6 + 8 | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  i9 = i6 | 0;
  if ((i3 | 0) != 0) {
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = i10 + (i3 << 2) | 0;
   i3 = i10;
   while (1) {
    i10 = HEAP32[i3 >> 2] | 0;
    if ((i10 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i10);
     __ZN3WTF8fastFreeEPv(i10);
    }
    i3 = i3 + 4 | 0;
    if ((i3 | 0) == (i11 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
  i4 = HEAP32[i9 >> 2] | 0;
  if (!((i6 + 12 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] | 0;
 i9 = i7 | 0;
 i11 = i2 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i9 >> 2] = i2;
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = i6;
 FUNCTION_TABLE_viii[i1 & 7](i4, i7, i8);
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i2 = i8 + 8 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  i4 = i8 | 0;
  if ((i7 | 0) != 0) {
   i1 = HEAP32[i4 >> 2] | 0;
   i6 = i1 + (i7 << 2) | 0;
   i7 = i1;
   while (1) {
    i1 = HEAP32[i7 >> 2] | 0;
    if ((i1 | 0) != 0) {
     __ZN7WebCore18MessagePortChannelD1Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
    }
    i7 = i7 + 4 | 0;
    if ((i7 | 0) == (i6 | 0)) {
     break;
    }
   }
   HEAP32[i2 >> 2] = 0;
  }
  i2 = HEAP32[i4 >> 2] | 0;
  if (!((i8 + 12 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i8 | 0;
 if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore21SerializedScriptValueD1Ev(i8);
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPNS_11MessagePortERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i6 + 12 | 0;
 i9 = i8;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i9;
 i11 = i6 + 4 | 0;
 HEAP32[i11 >> 2] = 1;
 i12 = i6 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i3 | 0) != 0) {
  HEAP32[i8 >> 2] = i3;
  i8 = i3 + 36 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  HEAP32[i12 >> 2] = 1;
 }
 i8 = i7 | 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERi(i1, i7, i6, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore21SerializedScriptValueD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i8 = HEAP32[i10 >> 2] | 0;
  i6 = i8 + (i4 << 2) | 0;
  i4 = i8;
  while (1) {
   i8 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 36 | 0;
     i1 = i7 | 0;
     i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i1 >> 2] = i2;
      break;
     }
     i2 = i7 - 36 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 63](i2);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i12 >> 2] = 0;
 }
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == (i12 | 0) | (i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 34;
}
function __ZN7WebCore19networkStateChangedEb(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[H_BASE + 176 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L4;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L12 : while (1) {
  i6 = HEAP32[(HEAP32[i8 >> 2] | 0) + 60 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 3](i6, i1);
  i6 = i8 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 14;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 16;
    break L12;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 15;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 14) {
  return;
 } else if ((i9 | 0) == 15) {
  return;
 } else if ((i9 | 0) == 16) {
  return;
 }
}
function __ZThn52_N7WebCore6WorkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 64 + 12 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i4 + 16 >> 2] = H_BASE + 80;
 HEAP32[i4 + 52 >> 2] = H_BASE + 152;
 i1 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i3) | 0;
 i3 = HEAP32[i4 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i4 + 56 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
 i5 = i4;
 __ZN7WebCore14AbstractWorkerD2Ev(i5);
 STACKTOP = i2;
 return;
}
function __ZThn16_N7WebCore6WorkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 64 + 48 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i4 + 16 >> 2] = H_BASE + 80;
 HEAP32[i4 + 52 >> 2] = H_BASE + 152;
 i1 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i3) | 0;
 i3 = HEAP32[i4 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i4 + 56 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 i1 = i3 + 4 | 0;
 i3 = i1 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  i5 = i4;
  __ZN7WebCore14AbstractWorkerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
 i5 = i4;
 __ZN7WebCore14AbstractWorkerD2Ev(i5);
 STACKTOP = i2;
 return;
}
function __ZThn52_N7WebCore6WorkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 64 + 12 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i4 + 16 >> 2] = H_BASE + 80;
 HEAP32[i4 + 52 >> 2] = H_BASE + 152;
 i1 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i3) | 0;
 i3 = HEAP32[i4 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i4 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 4 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZThn16_N7WebCore6WorkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 64 + 48 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i4 + 16 >> 2] = H_BASE + 80;
 HEAP32[i4 + 52 >> 2] = H_BASE + 152;
 i1 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i4;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i3) | 0;
 i3 = HEAP32[i4 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i4 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i1 = i3 + 4 | 0;
   i5 = i1 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i1 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6WorkerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 80;
 HEAP32[i1 + 52 >> 2] = H_BASE + 152;
 i4 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6WorkerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 80;
 HEAP32[i1 + 52 >> 2] = H_BASE + 152;
 i4 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore6WorkerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 16 >> 2] = H_BASE + 80;
 HEAP32[i1 + 52 >> 2] = H_BASE + 152;
 i4 = HEAP32[H_BASE + 176 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6);
  }
 } while (0);
 __ZN7WebCore14AbstractWorkerD2Ev(i1 | 0);
 STACKTOP = i2;
 return;
}
function __ZThn52_N7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[i1 - 64 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3) | 0) {
  i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i3 - 156 + 68 | 0) | 0) | 0;
 } else {
  i4 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i3) | 0;
 }
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation28didReceiveScriptResponseImplEPNS_19InstrumentingAgentsEm(i4, i2);
 return;
}
function __ZN7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 31](i3) | 0) {
  i4 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i3 - 156 + 68 | 0) | 0) | 0;
 } else {
  i4 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i3) | 0;
 }
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore24InspectorInstrumentation28didReceiveScriptResponseImplEPNS_19InstrumentingAgentsEm(i4, i2);
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
function __ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 52 + 48 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 52 + 36 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore14AbstractWorker16derefEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 12 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 12 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3);
 return;
}
function iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore6Worker18hasPendingActivityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore15ActiveDOMObject18hasPendingActivityEv(i1 | 0) | 0;
 return i3 | 0;
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
function __ZN7WebCore6Worker24notifyNetworkStateChangeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 3](i3, i2);
 return;
}
function vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore6Worker9terminateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore6Worker4stopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 return;
}
function __ZThn16_N7WebCore14AbstractWorker14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 52 + 48 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore14AbstractWorker14refEventTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget23removeAllEventListenersEv(i1 | 0);
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
function __ZThn52_N7WebCore6Worker14notifyFinishedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6Worker14notifyFinishedEv(i1 - 64 + 12 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget6toNodeEv(i1 | 0) | 0;
}
function __ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 52 + 40 >> 2] | 0;
}
function vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ActiveDOMObject6resumeEv(i1 | 0);
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
function __ZNK7WebCore14AbstractWorker22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
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
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
 return 0;
}
function __ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZThn16_NK7WebCore6Worker20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 7;
}
function __ZNK7WebCore6Worker20eventTargetInterfaceEv(i1) {
 i1 = i1 | 0;
 return 7;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore6Worker10canSuspendEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
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
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore6Worker14notifyFinishedEv,b1,vi___ZN7WebCore11EventTarget23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,__ZThn52_N7WebCore6Worker14notifyFinishedEv,b1,__ZThn52_N7WebCore6WorkerD1Ev,b1,__ZN7WebCore6Worker4stopEv,b1,__ZN7WebCore19networkStateChangedEb,b1,__ZThn16_N7WebCore6WorkerD1Ev,b1,__ZN7WebCore6WorkerD2Ev,b1,vi___ZN7WebCore15ActiveDOMObject6resumeEv__wrapper,b1,__ZN7WebCore6WorkerD0Ev,b1,__ZThn16_N7WebCore14AbstractWorker14refEventTargetEv,b1,__ZThn16_N7WebCore6WorkerD0Ev,b1,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper
  ,b1,__ZN7WebCore14AbstractWorker16derefEventTargetEv,b1,__ZN7WebCore14AbstractWorker14refEventTargetEv,b1,__ZThn52_N7WebCore6WorkerD0Ev,b1,__ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore15ActiveDOMObject7suspendENS0_19ReasonForSuspensionE__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore6Worker18hasPendingActivityEv,b3,__ZNK7WebCore6Worker20eventTargetInterfaceEv,b3,__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv,b3,__ZNK7WebCore14AbstractWorker22scriptExecutionContextEv,b3,ii___ZN7WebCore11EventTarget6toNodeEv__wrapper,b3,__ZNK7WebCore6Worker10canSuspendEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv,b3,__ZThn16_NK7WebCore6Worker20eventTargetInterfaceEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZThn52_N7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE,b4,__ZN7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iiiii = [b6,b6,iiiii___ZN7WebCore11EventTarget19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b6,iiiii___ZN7WebCore11EventTarget16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore11EventTarget13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZThn16_NK7WebCore14AbstractWorker22scriptExecutionContextEv","__ZNK7WebCore6Worker20eventTargetInterfaceEv","__ZN3WTF7HashSetIPN7WebCore6WorkerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore6Worker14notifyFinishedEv","__ZN7WebCore25EventTargetWithInlineData21ensureEventTargetDataEv","__ZThn52_N7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPKNS1_6VectorINS1_6RefPtrINS_11MessagePortEEELj1ENS1_15CrashOnOverflowEEERi","_memset","__ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","_memcpy","__ZNK7WebCore14AbstractWorker22scriptExecutionContextEv","__ZThn52_N7WebCore6Worker14notifyFinishedEv","__ZN7WebCore19networkStateChangedEb","__ZNK7WebCore6Worker10canSuspendEv","__ZN7WebCore25EventTargetWithInlineData15eventTargetDataEv","__ZNK7WebCore6Worker18hasPendingActivityEv","__ZN3WTF9HashTableIPN7WebCore6WorkerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZThn16_NK7WebCore6Worker20eventTargetInterfaceEv","__ZThn52_N7WebCore6WorkerD1Ev","__ZN7WebCore6Worker4stopEv","__ZThn16_N7WebCore6WorkerD1Ev","__ZN7WebCore6WorkerD2Ev","__ZN7WebCore6WorkerD0Ev","__ZThn16_N7WebCore14AbstractWorker14refEventTargetEv","__ZThn16_N7WebCore6WorkerD0Ev","__ZN7WebCore14AbstractWorker16derefEventTargetEv","__ZN7WebCore6Worker11postMessageEN3WTF10PassRefPtrINS_21SerializedScriptValueEEEPNS_11MessagePortERi","__ZN7WebCore6Worker9terminateEv","__ZN7WebCore6Worker6createERNS_22ScriptExecutionContextERKN3WTF6StringERi","__ZN7WebCore6Worker24notifyNetworkStateChangeEb","__ZN7WebCore6Worker18didReceiveResponseEmRKNS_16ResourceResponseE","__ZN7WebCore14AbstractWorker14refEventTargetEv","__ZThn52_N7WebCore6WorkerD0Ev","__ZThn16_N7WebCore14AbstractWorker16derefEventTargetEv"]

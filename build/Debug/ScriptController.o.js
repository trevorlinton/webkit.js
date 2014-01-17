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
H_BASE = parentModule["_malloc"](160 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 160;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore16ScriptControllerC1ERNS_5FrameE;
var __ZN7WebCore16ScriptControllerD1Ev;
/* memory initializer */ allocate([39,32,98,101,99,97,117,115,101,32,116,104,101,32,100,111,99,117,109,101,110,116,39,115,32,102,114,97,109,101,32,105,115,32,115,97,110,100,98,111,120,101,100,32,97,110,100,32,116,104,101,32,39,97,108,108,111,119,45,115,99,114,105,112,116,115,39,32,112,101,114,109,105,115,115,105,111,110,32,105,115,32,110,111,116,32,115,101,116,46,0,0,0,0,0,0,66,108,111,99,107,101,100,32,115,99,114,105,112,116,32,101,120,101,99,117,116,105,111,110,32,105,110,32,39,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore16JSDOMWindowShell6s_infoE=env.__ZN7WebCore16JSDOMWindowShell6s_infoE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE=env.__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN3JSC20StringSourceProviderE=(H_BASE+136)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i3 + 4 | 0;
 i17 = i10 | 0;
 i18 = HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i19 = i18 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i8, i2 | 0, i4);
 i19 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i19 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0)) {
   i20 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i2, i4) | 0;
  } else {
   i8 = HEAP32[i19 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i20 = 0;
    break;
   }
   if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i8 >> 2] | 0;
  }
 } while (0);
 i19 = __ZN3JSC14JSGlobalObject10globalExecEv(HEAP32[i20 + 12 >> 2] | 0) | 0;
 i4 = i2 + 24 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i11, i19);
 i18 = i2 + 20 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 i21 = i2 + 4 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i21 = HEAP32[i18 >> 2] | 0;
 i18 = HEAP32[i3 + 16 >> 2] | 0;
 L10 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i12);
  } else {
   do {
    if ((i21 | 0) != 0) {
     i22 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i21 + 32 >> 2] | 0) | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation22willEvaluateScriptImplEPNS_19InstrumentingAgentsERKN3WTF6StringEiPNS_5FrameE(i12, i22, i10, i18, i21);
     break L10;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i12);
  }
 } while (0);
 i21 = i13 + 4 | 0;
 HEAP32[i21 >> 2] = -6;
 HEAP32[i13 >> 2] = 0;
 i18 = (i20 | 0) == 0;
 i10 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
 HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i19;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i6, i19);
 i22 = i7 | 0;
 HEAP32[i22 >> 2] = (i18 ? 0 : 0) | i20;
 HEAP32[i22 + 4 >> 2] = i18 ? -6 : -5;
 __ZN3JSC8evaluateEPNS_9ExecStateERKNS_10SourceCodeENS_7JSValueEPS5_(i14, i19, i16, i7, i13);
 __ZN3JSC12JSLockHolderD1Ev(i6);
 do {
  if ((HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0) == 0) {
   HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i10;
  } else {
   HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] = i10;
   if ((i10 | 0) != 0) {
    break;
   }
   __ZN7WebCore21JSMainThreadExecState21didLeaveScriptContextEv();
  }
 } while (0);
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation21didEvaluateScriptImplERKNS_30InspectorInstrumentationCookieE(i12);
  }
 } while (0);
 if ((HEAP32[i21 >> 2] | 0) == -6) {
  HEAP32[i4 >> 2] = i8;
  i21 = HEAP32[(HEAP32[i19 + 16 >> 2] & -65536) + 1076 >> 2] | 0;
  i10 = i14 | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  i6 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  if ((HEAP32[i21 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
  }
  i10 = i21 + 20440 | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  if ((i7 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i21 + 20360 | 0);
   i23 = HEAP32[i10 >> 2] | 0;
  } else {
   i23 = i7;
  }
  i7 = i23 + 12 | 0;
  HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i23 + 4 >> 2] = -6;
  HEAP32[i23 >> 2] = 0;
  i10 = i23 + 8 | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i7 >> 2] = 0;
  i16 = i21 + 20420 | 0;
  i18 = HEAP32[i16 >> 2] | 0;
  HEAP32[i10 >> 2] = i21 + 20408;
  HEAP32[i7 >> 2] = i18;
  HEAP32[i16 >> 2] = i23;
  HEAP32[i18 + 8 >> 2] = i23;
  i18 = i23 | 0;
  HEAP32[i1 + 4 >> 2] = i18;
  i16 = i9 | 0;
  HEAP32[i16 >> 2] = i14;
  HEAP32[i16 + 4 >> 2] = i6;
  __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i23 & -4096) + 12 >> 2] | 0, i18, i9);
  i9 = HEAP32[i16 + 4 >> 2] | 0;
  i18 = i23 | 0;
  HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i18 + 4 >> 2] = i9;
 } else {
  i9 = i13 | 0;
  i13 = HEAP32[i9 + 4 >> 2] | 0;
  i18 = i15 | 0;
  HEAP32[i18 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i18 + 4 >> 2] = i13;
  __ZN7WebCore15reportExceptionEPN3JSC9ExecStateENS0_7JSValueEPNS_12CachedScriptE(i19, i15, HEAP32[i3 + 24 >> 2] | 0);
  HEAP32[i4 >> 2] = i8;
  HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  HEAP32[i1 + 4 >> 2] = 0;
 }
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i12);
 i12 = i2 + 4 | 0;
 i2 = i12 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 do {
  if ((i1 | 0) == 0) {
   i8 = i12 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
  } else {
   HEAP32[i2 >> 2] = i1;
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i11);
 i11 = HEAP32[i17 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i11 | 0;
 i1 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i17 >> 2] = i1;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16ScriptControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 36 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i5, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
  __ZN3JSC8Bindings10RootObject10invalidateEv(HEAP32[i6 >> 2] | 0);
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 + 4 | 0;
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i9 >> 2] = i10;
     break;
    }
    i10 = i8 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
   }
  } while (0);
  __ZN3JSC12JSLockHolderD1Ev(i5);
 }
 i5 = i1 | 0;
 i7 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  i10 = i1 | 0;
  i8 = i1 + 4 | 0;
  while (1) {
   i9 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i12 = i9 + (i11 << 3) | 0;
   L15 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L15;
      }
      i15 = i14 + 8 | 0;
      if ((i15 | 0) == (i12 | 0)) {
       i13 = i12;
       break;
      } else {
       i14 = i15;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i13 >> 2] | 0;
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i4, i5, i12);
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS4_NS_12KeyValuePairIS4_S8_EENS_24KeyValuePairKeyExtractorISI_EESA_NS_22KeyValuePairHashTraitsISC_SD_EESC_EESI_EE(i5, i4) | 0;
   HEAP32[i3 >> 2] = i1;
   __ZN3WTF7HashSetIPN7WebCore16ScriptControllerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i12 + 72 | 0, i3) | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
  }
  __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
 }
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i7 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i7 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i13 = i5 + 4 | 0;
      i5 = i13 | 0;
      i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i5 >> 2] = i8;
       break;
      }
      i8 = i13 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i3 = i6 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = i7 + (i1 << 3) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != -1) {
     i8 = i7 + (i1 << 3) + 4 | 0;
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = i6;
     } else {
      i5 = HEAP32[(i13 & -4096) + 12 >> 2] | 0;
      i10 = i13;
      i12 = i5 + 84 | 0;
      i9 = i10 + 12 | 0;
      if ((i10 | 0) == (HEAP32[i12 >> 2] | 0)) {
       HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
      }
      i12 = i13 + 8 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      i11 = HEAP32[i9 >> 2] | 0;
      HEAP32[i13 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i13;
      HEAP32[i12 >> 2] = 0;
      HEAP32[i9 >> 2] = 0;
      i12 = i5 + 80 | 0;
      HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i10;
      HEAP32[i8 >> 2] = 0;
      i16 = HEAP32[i4 >> 2] | 0;
     }
     if ((i16 | 0) == 0) {
      break;
     }
     i8 = i16 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore15DOMWrapperWorldD1Ev(i16);
      __ZN3WTF8fastFreeEPv(i16);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16ScriptControllerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 36 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i5, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
  __ZN3JSC8Bindings10RootObject10invalidateEv(HEAP32[i6 >> 2] | 0);
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 + 4 | 0;
    i9 = i8 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i9 >> 2] = i10;
     break;
    }
    i10 = i8 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
   }
  } while (0);
  __ZN3JSC12JSLockHolderD1Ev(i5);
 }
 i5 = i1 | 0;
 i7 = i1 + 12 | 0;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  i10 = i1 | 0;
  i8 = i1 + 4 | 0;
  while (1) {
   i9 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i12 = i9 + (i11 << 3) | 0;
   L15 : do {
    if ((i11 | 0) == 0) {
     i13 = i9;
    } else {
     i14 = i9;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L15;
      }
      i15 = i14 + 8 | 0;
      if ((i15 | 0) == (i12 | 0)) {
       i13 = i12;
       break;
      } else {
       i14 = i15;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i13 >> 2] | 0;
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i4, i5, i12);
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS4_NS_12KeyValuePairIS4_S8_EENS_24KeyValuePairKeyExtractorISI_EESA_NS_22KeyValuePairHashTraitsISC_SD_EESC_EESI_EE(i5, i4) | 0;
   HEAP32[i3 >> 2] = i1;
   __ZN3WTF7HashSetIPN7WebCore16ScriptControllerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i12 + 72 | 0, i3) | 0;
   if ((HEAP32[i7 >> 2] | 0) == 0) {
    break;
   }
  }
  __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
 }
 i7 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i3 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i7 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = HEAP32[i7 + (i4 << 3) + 4 >> 2] | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      i13 = i5 + 4 | 0;
      i5 = i13 | 0;
      i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i5 >> 2] = i8;
       break;
      }
      i8 = i13 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 7](i8);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i3 = i6 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i6 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  }
 } while (0);
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = i7 + (i1 << 3) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i6 | 0) != -1) {
     i8 = i7 + (i1 << 3) + 4 | 0;
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = i6;
     } else {
      i5 = HEAP32[(i13 & -4096) + 12 >> 2] | 0;
      i10 = i13;
      i12 = i5 + 84 | 0;
      i9 = i10 + 12 | 0;
      if ((i10 | 0) == (HEAP32[i12 >> 2] | 0)) {
       HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
      }
      i12 = i13 + 8 | 0;
      i13 = HEAP32[i12 >> 2] | 0;
      i11 = HEAP32[i9 >> 2] | 0;
      HEAP32[i13 + 12 >> 2] = i11;
      HEAP32[i11 + 8 >> 2] = i13;
      HEAP32[i12 >> 2] = 0;
      HEAP32[i9 >> 2] = 0;
      i12 = i5 + 80 | 0;
      HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i12 >> 2] = i10;
      HEAP32[i8 >> 2] = 0;
      i16 = HEAP32[i4 >> 2] | 0;
     }
     if ((i16 | 0) == 0) {
      break;
     }
     i8 = i16 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) == 0) {
      __ZN7WebCore15DOMWrapperWorldD1Ev(i16);
      __ZN3WTF8fastFreeEPv(i16);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16ScriptController17createWindowShellERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = HEAP32[i2 + 68 >> 2] | 0;
 HEAP8[i7 | 0] = 23;
 HEAP8[i7 + 1 | 0] = -32;
 HEAP8[i7 + 2 | 0] = 1;
 i15 = i14 + 7104 | 0;
 i16 = i15 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i15, 64) | 0;
 } else {
  HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
  i18 = i17;
 }
 HEAP32[i18 >> 2] = 0;
 i17 = i18;
 i18 = i6 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i18 + 4 >> 2] = -3;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i17, i14, 0, i6, i7, __ZN7WebCore16JSDOMWindowShell6s_infoE, 0, 0);
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 456 >> 2] | 0) + 336 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i6 = i7 + 36 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i14 + 504 | 0;
 i18 = i6 | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i19 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i6, 20) | 0;
 } else {
  HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
  i19 = i16;
 }
 HEAP32[i19 >> 2] = 0;
 i16 = i19;
 __ZN7WebCore16JSDOMWindowShellC1ERN3JSC2VMEPNS1_9StructureERNS_15DOMWrapperWorldE(i16, i14, i17, i2);
 i17 = i5 | 0;
 HEAP32[i17 >> 2] = i7;
 __ZN7WebCore16JSDOMWindowShell14finishCreationERN3JSC2VMEN3WTF10PassRefPtrINS_9DOMWindowEEE(i16, i14, i5);
 i5 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i17 = i5 + 36 | 0;
   i16 = i17 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i16 >> 2] = i7;
    break;
   }
   i7 = i17 - 36 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 7](i7);
  }
 } while (0);
 if ((HEAP32[i14 + 20444 >> 2] | 0) != 0) {
  _WTFCrash();
  return 0;
 }
 i5 = i14 + 20440 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i14 + 20360 | 0);
  i20 = HEAP32[i5 >> 2] | 0;
 } else {
  i20 = i7;
 }
 i7 = i20 + 12 | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i20 + 4 >> 2] = -6;
 HEAP32[i20 >> 2] = 0;
 i5 = i20 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i17 = i14 + 20420 | 0;
 i16 = HEAP32[i17 >> 2] | 0;
 HEAP32[i5 >> 2] = i14 + 20408;
 HEAP32[i7 >> 2] = i16;
 HEAP32[i17 >> 2] = i20;
 HEAP32[i16 + 8 >> 2] = i20;
 i16 = i20 | 0;
 i17 = i11 | 0;
 HEAP32[i17 >> 2] = i16;
 HEAP32[i4 + 4 >> 2] = (i19 | 0) == 0 ? -6 : -5;
 HEAP32[i4 >> 2] = i19;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i20 & -4096) + 12 >> 2] | 0, i16, i4);
 i16 = i4 | 0;
 i4 = HEAP32[i16 + 4 >> 2] | 0;
 i19 = i20 | 0;
 HEAP32[i19 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i19 + 4 >> 2] = i4;
 __ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEEC2ERKS3_(i12, i11);
 HEAP32[i8 >> 2] = i2;
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_(i13, i1 | 0, i8, i11);
 HEAP32[i9 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i10, i2 + 72 | 0, i9, i9);
 i9 = HEAP32[i17 >> 2] | 0;
 i2 = (i9 | 0) == 0;
 do {
  if (i2) {
   i21 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == -6) {
    i21 = 0;
    break;
   }
   i21 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i1 = HEAP32[(i12 & -4096) + 12 >> 2] | 0;
  i11 = i12;
  i8 = i1 + 84 | 0;
  i13 = i11 + 12 | 0;
  if ((i11 | 0) == (HEAP32[i8 >> 2] | 0)) {
   HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
  }
  i8 = i12 + 8 | 0;
  i12 = HEAP32[i8 >> 2] | 0;
  i4 = HEAP32[i13 >> 2] | 0;
  HEAP32[i12 + 12 >> 2] = i4;
  HEAP32[i4 + 8 >> 2] = i12;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  i8 = i1 + 80 | 0;
  HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i8 >> 2] = i11;
  HEAP32[i10 >> 2] = 0;
 }
 if (i2) {
  STACKTOP = i3;
  return i21 | 0;
 }
 i2 = HEAP32[(i9 & -4096) + 12 >> 2] | 0;
 i10 = i9;
 i11 = i2 + 84 | 0;
 i8 = i10 + 12 | 0;
 if ((i10 | 0) == (HEAP32[i11 >> 2] | 0)) {
  HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
 }
 i11 = i9 + 8 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i9 + 12 >> 2] = i13;
 HEAP32[i13 + 8 >> 2] = i9;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 i11 = i2 + 80 | 0;
 HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i11 >> 2] = i10;
 HEAP32[i17 >> 2] = 0;
 STACKTOP = i3;
 return i21 | 0;
}
function __ZN7WebCore16ScriptController16clearWindowShellEPNS_9DOMWindowEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i6, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = i1 + 4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i10 + (i12 << 3) | 0;
 L4 : do {
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   L6 : do {
    if ((i12 | 0) == 0) {
     i14 = i10;
    } else {
     i15 = i10;
     while (1) {
      i16 = HEAP32[i15 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       i14 = i15;
       break L6;
      }
      i15 = i15 + 8 | 0;
      if ((i15 | 0) == (i13 | 0)) {
       break L4;
      }
     }
    }
   } while (0);
   if ((i14 | 0) == (i13 | 0)) {
    break;
   }
   i15 = i7 | 0;
   i16 = (i2 | 0) == 0;
   i17 = i1 + 36 | 0;
   i18 = i1 + 20 | 0;
   i19 = i5 | 0;
   i20 = i2 + 36 | 0;
   i21 = i14;
   while (1) {
    i22 = HEAP32[i21 + 4 >> 2] | 0;
    do {
     if ((i22 | 0) == 0) {
      i23 = 0;
     } else {
      if ((HEAP32[i22 + 4 >> 2] | 0) == -6) {
       i23 = 0;
       break;
      }
      i23 = HEAP32[i22 >> 2] | 0;
     }
    } while (0);
    i22 = i23 + 12 | 0;
    i24 = HEAP32[i22 >> 2] | 0;
    do {
     if ((HEAP32[i24 + 660 >> 2] | 0) != (i2 | 0)) {
      i25 = (i23 | 0) == 0;
      do {
       if (i25) {
        i26 = i24;
       } else {
        i27 = HEAP32[i24 + 564 >> 2] | 0;
        if ((i27 | 0) == 0) {
         i26 = i24;
         break;
        }
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] & 3](i27, i24);
        i26 = HEAP32[i22 >> 2] | 0;
       }
      } while (0);
      __ZN7WebCore15JSDOMWindowBase25willRemoveFromWindowShellEv(i26);
      HEAP32[i15 >> 2] = i2;
      if (!i16) {
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
      }
      __ZN7WebCore16JSDOMWindowShell9setWindowEN3WTF10PassRefPtrINS_9DOMWindowEEE(i23, i7);
      i27 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i27 | 0) != 0) {
        i28 = i27 + 36 | 0;
        i29 = i28 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
        if ((i30 | 0) != 0) {
         HEAP32[i29 >> 2] = i30;
         break;
        }
        i30 = i28 - 36 | 0;
        if ((i30 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 44 >> 2] & 7](i30);
       }
      } while (0);
      i27 = HEAP32[i17 >> 2] | 0;
      if ((i27 | 0) != 0) {
       __ZN3JSC8Bindings10RootObject18updateGlobalObjectEPNS_14JSGlobalObjectE(i27, HEAP32[i22 >> 2] | 0);
      }
      i27 = HEAP32[(HEAP32[i18 >> 2] | 0) + 32 >> 2] | 0;
      if ((i27 | 0) == 0) {
       break;
      }
      i30 = HEAP32[i27 + 164 >> 2] | 0;
      do {
       if (!i25) {
        i28 = HEAP32[i22 >> 2] | 0;
        i29 = i28;
        if ((i30 | 0) != 0) {
         __ZN3JSC8Debugger6attachEPNS_14JSGlobalObjectE(i30, i29);
         break;
        }
        i31 = HEAP32[i28 + 564 >> 2] | 0;
        if ((i31 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] & 3](i31, i29);
       }
      } while (0);
      i30 = HEAP32[i22 >> 2] | 0;
      i25 = i27 + 160 | 0;
      i29 = HEAP32[i25 >> 2] | 0;
      if ((i29 | 0) == 0) {
       __ZN7WebCore4Page9initGroupEv(i27);
       i32 = HEAP32[i25 >> 2] | 0;
      } else {
       i32 = i29;
      }
      i29 = HEAP32[i32 + 68 >> 2] | 0;
      i25 = i30 + 584 | 0;
      i30 = i25;
      i31 = HEAP32[i30 >> 2] | 0;
      if ((i31 | 0) == 0) {
       i28 = __Znwj(44) | 0;
       _memset(i28 | 0, 0, 44) | 0;
       HEAP32[i19 >> 2] = i28;
       __ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE(i25, i5) | 0;
       __ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev(i5);
       i33 = HEAP32[i30 >> 2] | 0;
      } else {
       i33 = i31;
      }
      HEAP32[i33 + 20 >> 2] = i29;
     }
    } while (0);
    i22 = i21 + 8 | 0;
    L52 : do {
     if ((i22 | 0) == (i13 | 0)) {
      i34 = i13;
     } else {
      i24 = i22;
      while (1) {
       i29 = HEAP32[i24 >> 2] | 0;
       if (!((i29 | 0) == (-1 | 0) | (i29 | 0) == 0)) {
        i34 = i24;
        break L52;
       }
       i29 = i24 + 8 | 0;
       if ((i29 | 0) == (i13 | 0)) {
        i34 = i13;
        break;
       } else {
        i24 = i29;
       }
      }
     }
    } while (0);
    if ((i34 | 0) == ((HEAP32[i9 >> 2] | 0) + (HEAP32[i11 >> 2] << 3) | 0)) {
     break;
    } else {
     i21 = i34;
    }
   }
  }
 } while (0);
 if (!i3) {
  __ZN7WebCore12GCController18garbageCollectSoonEv(__ZN7WebCore12gcControllerEv() | 0);
 }
 __ZN3JSC12JSLockHolderD1Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) != 0) {
  i10 = i14 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 i10 = i13 | 0;
 i21 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i14;
 do {
  if ((i21 | 0) != 0) {
   i14 = i21 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i21);
    __ZN3WTF8fastFreeEPv(i21);
    break;
   } else {
    HEAP32[i14 >> 2] = i10;
    break;
   }
  }
 } while (0);
 i21 = i13 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i4 = i21 | 0;
   i14 = HEAP32[i4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i3 = HEAP32[(i14 & -4096) + 12 >> 2] | 0;
   i22 = i14;
   i8 = i3 + 84 | 0;
   i25 = i22 + 12 | 0;
   if ((i22 | 0) == (HEAP32[i8 >> 2] | 0)) {
    HEAP32[i8 >> 2] = HEAP32[i25 >> 2];
   }
   i8 = i14 + 8 | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   i6 = HEAP32[i25 >> 2] | 0;
   HEAP32[i14 + 12 >> 2] = i6;
   HEAP32[i6 + 8 >> 2] = i14;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i25 >> 2] = 0;
   i8 = i3 + 80 | 0;
   HEAP32[i25 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i8 >> 2] = i22;
   HEAP32[i4 >> 2] = 0;
  } else {
   if ((HEAP32[i10 + 4 >> 2] | 0) == -6) {
    i27 = 0;
   } else {
    i27 = HEAP32[i10 >> 2] | 0;
   }
   __ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEE3setERNS_2VMEPS2_(i21, HEAP32[HEAP32[(i10 & -4096) + 12 >> 2] >> 2] | 0, i27);
  }
 } while (0);
 i27 = i2 + 12 | 0;
 i10 = (HEAP32[i27 >> 2] | 0) + 1 | 0;
 HEAP32[i27 >> 2] = i10;
 i27 = i2 + 4 | 0;
 i21 = HEAP32[i27 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i10 << 1 | 0) < (i21 | 0)) {
  i28 = i13;
  i29 = i21;
 } else {
  if ((i21 | 0) == 0) {
   i30 = 8;
  } else {
   i4 = i21 << 1;
   i30 = (i10 * 6 & -1 | 0) < (i4 | 0) ? i21 : i4;
  }
  i4 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E6rehashEiPSA_(i2, i30, i13) | 0;
  i28 = i4;
  i29 = HEAP32[i27 >> 2] | 0;
 }
 i27 = (HEAP32[i5 >> 2] | 0) + (i29 << 3) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i27;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16ScriptController22executeIfJavaScriptURLERKNS_3URLENS_36ShouldReplaceDocumentIfJavaScriptURLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i2 | 0;
 if (!(__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i11) | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i2 = i1 + 20 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i13 + 32 >> 2] | 0) == 0) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 i14 = HEAP32[i13 + 456 >> 2] | 0;
 i13 = HEAP32[i14 + 104 >> 2] | 0;
 i15 = __ZNK7WebCore8Document24scriptableDocumentParserEv(i14) | 0;
 if ((i15 | 0) == 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 84 >> 2] & 3](i6, i15);
 }
 if (!(__ZNK7WebCore21ContentSecurityPolicy19allowJavaScriptURLsERKN3WTF6StringERKNS1_13OrdinalNumberENS0_15ReportingStatusE(i13, i14 + 356 | 0, i6 | 0, 0) | 0)) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i14 = i6 + 4 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 i14 = HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0;
 i13 = (i14 | 0) == 0;
 if (!i13) {
  i15 = i14 + 8 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 }
 __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i7, i11);
 __ZNK3WTF6String9substringEjj(i9, i7, 11, -1);
 __ZN7WebCore16ScriptController13executeScriptERKN3WTF6StringEb(i8, i1, i9, 0);
 i11 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i9 = i11 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i9 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) != 0) {
   i11 = i10 | 0;
   HEAP32[i11 >> 2] = 0;
   i15 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
   __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i5, i1 | 0, i15);
   i9 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i9 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
     i16 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i15) | 0;
    } else {
     i17 = HEAP32[i9 + 4 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i16 = 0;
      break;
     }
     if ((HEAP32[i17 + 4 >> 2] | 0) == -6) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i17 >> 2] | 0;
    }
   } while (0);
   do {
    if ((__ZNK10Deprecated11ScriptValue9getStringEPN3JSC9ExecStateERN3WTF6StringE(i8, __ZN3JSC14JSGlobalObject10globalExecEv(HEAP32[i16 + 12 >> 2] | 0) | 0, i10) | 0) & (i3 | 0) == 0) {
     i9 = __ZNK7WebCore8Document6loaderEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 456 >> 2] | 0) | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i15 = i9 + 4 | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     __ZN7WebCore14DocumentWriter15replaceDocumentERKN3WTF6StringEPNS_8DocumentE(i9 + 84 | 0, i10, i14);
     i15 = i9 + 4 | 0;
     i9 = i15 | 0;
     i17 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i9 >> 2] = i17;
      break;
     }
     i17 = i15 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 7](i17);
    }
   } while (0);
   i17 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i15 = i17 | 0;
   i9 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i15 >> 2] = i9;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD1Ev(i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if (!i13) {
   i8 = i14 + 8 | 0;
   i10 = i8 | 0;
   i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i14 = i6 + 4 | 0;
 i6 = i14 | 0;
 i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i6 >> 2] = i13;
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 i13 = i14 - 4 | 0;
 if ((i13 | 0) == 0) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 7](i13);
 i12 = 1;
 STACKTOP = i4;
 return i12 | 0;
}
function __ZN7WebCore16ScriptController24jsObjectForPluginElementEPNS_17HTMLPlugInElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = HEAP32[i7 + 456 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 4;
  } else {
   if ((HEAP32[i8 + 96 >> 2] & 16 | 0) == 0) {
    if ((HEAP8[i8 + 1579 | 0] & 1) == 0) {
     i9 = 4;
     break;
    } else {
     break;
    }
   } else {
    i10 = 0;
    STACKTOP = i3;
    return i10 | 0;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 4) {
   if ((HEAP32[i7 + 32 >> 2] | 0) == 0) {
    i10 = 0;
    STACKTOP = i3;
    return i10 | 0;
   }
   i8 = HEAP32[i7 + 84 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 476 >> 2] & 1](i8, (HEAP8[(HEAP32[i7 + 36 >> 2] | 0) + 195 | 0] & 2) != 0) | 0) {
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i3;
   return i10 | 0;
  }
 } while (0);
 i7 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i4, i1 | 0, i7);
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
   i11 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i7) | 0;
  } else {
   i4 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
    i11 = 0;
    break;
   }
   i11 = HEAP32[i4 >> 2] | 0;
  }
 } while (0);
 i8 = HEAP32[i11 + 12 >> 2] | 0;
 i11 = i8;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i5, __ZN3JSC14JSGlobalObject10globalExecEv(i11) | 0);
 i7 = __ZN3JSC14JSGlobalObject10globalExecEv(i11) | 0;
 i11 = i8;
 i8 = i2 | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i6 + 4 >> 2] = -3;
   HEAP32[i6 >> 2] = 0;
   i12 = 0;
  } else {
   i1 = HEAP32[(HEAP32[(HEAP32[HEAP32[i7 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
   do {
    if ((HEAP8[i1 + 92 | 0] & 1) == 0) {
     i9 = 18;
    } else {
     i4 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i9 = 18;
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] & 3 | 0) != 0) {
      i9 = 18;
      break;
     }
     i13 = HEAP32[i4 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i9 = 18;
      break;
     }
     i14 = i13 | 0;
     i9 = 27;
    }
   } while (0);
   L27 : do {
    if ((i9 | 0) == 18) {
     i13 = i2;
     i4 = HEAP32[i1 + 12 >> 2] | 0;
     i15 = HEAP32[i1 + 4 >> 2] | 0;
     i16 = i2;
     i17 = i16 + ~(i16 << 15) | 0;
     i16 = (i17 >>> 10 ^ i17) * 9 & -1;
     i17 = i16 >>> 6 ^ i16;
     i16 = i17 + ~(i17 << 11) | 0;
     i17 = i16 >>> 16 ^ i16;
     if ((i15 | 0) == 0) {
      i9 = 29;
      break;
     }
     i16 = i4 & i17;
     i18 = i15 + (i16 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i13 | 0)) {
      i20 = i18;
     } else {
      i18 = (i17 >>> 23) + ~i17 | 0;
      i17 = i18 << 12 ^ i18;
      i18 = i17 >>> 7 ^ i17;
      i17 = i18 << 2 ^ i18;
      i18 = i17 >>> 20 ^ i17 | 1;
      i17 = 0;
      i21 = i16;
      i16 = i19;
      while (1) {
       if ((i16 | 0) == 0) {
        i9 = 29;
        break L27;
       }
       i19 = (i17 | 0) == 0 ? i18 : i17;
       i22 = i19 + i21 & i4;
       i23 = i15 + (i22 << 3) | 0;
       i24 = HEAP32[i23 >> 2] | 0;
       if ((i24 | 0) == (i13 | 0)) {
        i20 = i23;
        break;
       } else {
        i17 = i19;
        i21 = i22;
        i16 = i24;
       }
      }
     }
     if ((i20 | 0) == 0) {
      i9 = 29;
      break;
     }
     i16 = HEAP32[i20 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i9 = 29;
      break;
     }
     if ((HEAP32[i16 + 8 >> 2] & 3 | 0) != 0) {
      i9 = 29;
      break;
     }
     i14 = HEAP32[i16 >> 2] | 0;
     i9 = 27;
    }
   } while (0);
   do {
    if ((i9 | 0) == 27) {
     if ((i14 | 0) == 0) {
      i9 = 29;
      break;
     }
     HEAP32[i6 + 4 >> 2] = -5;
     HEAP32[i6 >> 2] = i14;
    }
   } while (0);
   if ((i9 | 0) == 29) {
    __ZN7WebCore13createWrapperEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_4NodeE(i6, i7, i11, i8);
    if ((HEAP32[i6 + 4 >> 2] | 0) != -5) {
     i12 = 0;
     break;
    }
   }
   i1 = HEAP32[i6 >> 2] | 0;
   if ((HEAPU8[(HEAP32[i1 >> 2] | 0) + 52 | 0] | 0) >>> 0 <= 16 >>> 0) {
    i12 = 0;
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) != -5) {
    i12 = 0;
    break;
   }
   i12 = __ZN3JSC6JSCell9getObjectEv(i1) | 0;
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i5);
 i10 = i12;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i10 | 0) != 0) {
   i14 = i10 + 4 | 0;
   i4 = i14 | 0;
   i21 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i4 >> 2] = i21;
    break;
   }
   i21 = i14 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 7](i21);
  }
 } while (0);
 i10 = i2 + 12 | 0;
 i21 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i21;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i4 = i14 << 1;
   i29 = (i21 * 6 & -1 | 0) < (i4 | 0) ? i14 : i4;
  }
  i4 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i29, i13) | 0;
  i27 = i4;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 i1 = HEAP32[i8 + 456 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 96 >> 2] & 16 | 0) == 0) {
    if ((HEAP8[i1 + 1579 | 0] & 1) == 0) {
     break;
    } else {
     i9 = 1;
    }
    STACKTOP = i3;
    return i9 | 0;
   }
   if ((i2 | 0) != 0) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 316 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i7, i1 + 356 | 0, 1024);
   i11 = i7 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) == 0) {
     i13 = 0;
     i14 = 1;
    } else {
     i15 = i12 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     i17 = i16 + 2 | 0;
     HEAP32[i15 >> 2] = i16 + 4;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i18 = HEAP32[i15 >> 2] | 0;
     } else {
      HEAP32[i15 >> 2] = i17;
      i18 = i17;
     }
     i17 = i18 + 2 | 0;
     HEAP32[i15 >> 2] = i18 + 4;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      i13 = i12;
      i14 = 0;
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      i13 = i12;
      i14 = 0;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = H_BASE + 104;
   i12 = i5 + 4 | 0;
   HEAP32[i12 >> 2] = i13;
   i17 = (i13 | 0) == 0;
   if (!i17) {
    i15 = i13 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, H_BASE + 8 | 0);
   i15 = i4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   i15 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i12 = i15 | 0;
     i19 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i12 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if ((i16 | 0) == 0) {
    _WTFCrash();
    return 0;
   }
   i15 = i6 | 0;
   HEAP32[i15 >> 2] = i16;
   FUNCTION_TABLE_viiiii[i10 & 1](i1, 8, 3, i6, 0);
   i19 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i15 = i19 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i15 >> 2] = i12;
      break;
     }
    }
   } while (0);
   do {
    if (!i17) {
     i19 = i13 | 0;
     i10 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i19 >> 2] = i10;
      break;
     }
    }
   } while (0);
   do {
    if (!i14) {
     i17 = i13 | 0;
     i10 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i17 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   i17 = i10 | 0;
   i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   } else {
    HEAP32[i17 >> 2] = i19;
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
  }
 } while (0);
 if ((HEAP32[i8 + 32 >> 2] | 0) == 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 i13 = HEAP32[i8 + 84 >> 2] | 0;
 i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 476 >> 2] & 1](i13, (HEAP8[(HEAP32[i8 + 36 >> 2] | 0) + 195 | 0] & 2) != 0) | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 7](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i19;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i5, HEAP32[i2 + 68 >> 2] | 0);
 i7 = __ZN7WebCore16ScriptController17createWindowShellERNS_15DOMWrapperWorldE(i1, i2) | 0;
 i8 = i7 + 12 | 0;
 __ZN7WebCore15JSDOMWindowBase14updateDocumentEv(HEAP32[i8 >> 2] | 0);
 i9 = i1 + 20 | 0;
 i1 = HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = HEAP32[i8 >> 2] | 0;
   i11 = __ZNK7WebCore21ContentSecurityPolicy9allowEvalEPN3JSC9ExecStateENS0_15ReportingStatusE(HEAP32[i1 + 104 >> 2] | 0, 0, 1) | 0;
   __ZNK7WebCore21ContentSecurityPolicy24evalDisabledErrorMessageEv(i6, HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 456 >> 2] | 0) + 104 >> 2] | 0);
   HEAP8[i10 + 596 | 0] = i11 & 1;
   i11 = i6 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i13 = i12 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = i10 + 600 | 0;
   i10 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   do {
    if ((i10 | 0) != 0) {
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
   i10 = HEAP32[i11 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
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
 i6 = HEAP32[i9 >> 2] | 0;
 i1 = HEAP32[i6 + 32 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i14 = i6;
  i15 = i14 + 80 | 0;
  __ZN7WebCore11FrameLoader35dispatchDidClearWindowObjectInWorldERNS_15DOMWrapperWorldE(i15, i2);
  __ZN3JSC12JSLockHolderD1Ev(i5);
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = HEAP32[i1 + 164 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = HEAP32[i8 >> 2] | 0;
   i13 = i12;
   if ((i6 | 0) != 0) {
    __ZN3JSC8Debugger6attachEPNS_14JSGlobalObjectE(i6, i13);
    break;
   }
   i10 = HEAP32[i12 + 564 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 3](i10, i13);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 i8 = i1 + 160 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZN7WebCore4Page9initGroupEv(i1);
  i16 = HEAP32[i8 >> 2] | 0;
 } else {
  i16 = i13;
 }
 i13 = HEAP32[i16 + 68 >> 2] | 0;
 i16 = i6 + 584 | 0;
 i6 = i16;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i1 = __Znwj(44) | 0;
  _memset(i1 | 0, 0, 44) | 0;
  HEAP32[i4 >> 2] = i1;
  __ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE(i16, i4) | 0;
  __ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev(i4);
  i17 = HEAP32[i6 >> 2] | 0;
 } else {
  i17 = i8;
 }
 HEAP32[i17 + 20 >> 2] = i13;
 i14 = HEAP32[i9 >> 2] | 0;
 i15 = i14 + 80 | 0;
 __ZN7WebCore11FrameLoader35dispatchDidClearWindowObjectInWorldERNS_15DOMWrapperWorldE(i15, i2);
 __ZN3JSC12JSLockHolderD1Ev(i5);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN24OpaqueJSClassContextDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  i2 = HEAP32[i3 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     i6 = i2 + (i5 << 3) | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i7 | 0) != -1) {
       i8 = i2 + (i5 << 3) + 4 | 0;
       i9 = HEAP32[i8 >> 2] | 0;
       HEAP32[i8 >> 2] = 0;
       if ((i9 | 0) == 0) {
        i10 = i7;
       } else {
        __ZN3WTF8fastFreeEPv(i9);
        i10 = HEAP32[i6 >> 2] | 0;
       }
       if ((i10 | 0) == 0) {
        break;
       }
       i9 = i10 | 0;
       i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
       if ((i8 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i9 >> 2] = i8;
        break;
       }
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     i10 = i3 + (i5 << 3) | 0;
     i6 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i6 | 0) != -1) {
       i7 = i3 + (i5 << 3) + 4 | 0;
       i8 = HEAP32[i7 >> 2] | 0;
       HEAP32[i7 >> 2] = 0;
       if ((i8 | 0) == 0) {
        i11 = i6;
       } else {
        i7 = HEAP32[i8 + 12 >> 2] | 0;
        do {
         if ((i7 | 0) != 0) {
          i9 = i7 | 0;
          if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
           break;
          }
          i9 = HEAP32[i7 + 4 >> 2] | 0;
          do {
           if ((i9 | 0) != 0) {
            i12 = i9 | 0;
            i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
            if ((i13 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i9);
             break;
            } else {
             HEAP32[i12 >> 2] = i13;
             break;
            }
           }
          } while (0);
          __ZN3WTF8fastFreeEPv(i7);
         }
        } while (0);
        __ZN3WTF8fastFreeEPv(i8);
        i11 = HEAP32[i10 >> 2] | 0;
       }
       if ((i11 | 0) == 0) {
        break;
       }
       i7 = i11 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
       if ((i9 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i7 >> 2] = i9;
        break;
       }
      }
     } while (0);
     i5 = i5 + 1 | 0;
     if ((i5 | 0) >= (i4 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  return;
 }
 __ZN13OpaqueJSClassD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 10) {
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
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore16ScriptController23collectIsolatedContextsERN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPNS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i7 + (i9 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L4 : do {
  if ((i9 | 0) == 0) {
   i11 = i7;
  } else {
   i1 = i7;
   while (1) {
    i12 = HEAP32[i1 >> 2] | 0;
    if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
     i11 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i10 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i11 | 0) == (i10 | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i4;
 i9 = i5 + 4 | 0;
 i1 = i2 + 8 | 0;
 i12 = i2 + 4 | 0;
 i13 = i2 | 0;
 i14 = i4;
 i15 = i11;
 while (1) {
  i11 = i15 + 4 | 0;
  i16 = __ZN3JSC14JSGlobalObject10globalExecEv(HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 12 >> 2] | 0) | 0;
  i17 = HEAP32[(__ZNK7WebCore9DOMWindow8documentEv(HEAP32[(HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 12 >> 2] | 0) + 660 >> 2] | 0) | 0) + 100 >> 2] | 0;
  HEAP32[i7 >> 2] = i16;
  HEAP32[i9 >> 2] = i17;
  i17 = HEAP32[i1 >> 2] | 0;
  if ((i17 | 0) == (HEAP32[i12 >> 2] | 0)) {
   i16 = i17 + 1 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   do {
    if (i11 >>> 0 > i5 >>> 0) {
     i18 = 11;
    } else {
     if ((i11 + (i17 << 3) | 0) >>> 0 <= i5 >>> 0) {
      i18 = 11;
      break;
     }
     __ZN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
     i19 = HEAP32[i13 >> 2] | 0;
     i20 = i19 + (i14 - i11 >> 3 << 3) | 0;
     i21 = i19;
    }
   } while (0);
   if ((i18 | 0) == 11) {
    i18 = 0;
    __ZN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
    i20 = i5;
    i21 = HEAP32[i13 >> 2] | 0;
   }
   i11 = i20;
   i19 = i21 + (HEAP32[i1 >> 2] << 3) | 0;
   i22 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i19 + 4 >> 2] = i22;
  } else {
   i22 = (HEAP32[i13 >> 2] | 0) + (i17 << 3) | 0;
   i19 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i22 + 4 >> 2] = i19;
  }
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i19 = i15 + 8 | 0;
  L25 : do {
   if ((i19 | 0) == (i10 | 0)) {
    i23 = i10;
   } else {
    i22 = i19;
    while (1) {
     i11 = HEAP32[i22 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i23 = i22;
      break L25;
     }
     i11 = i22 + 8 | 0;
     if ((i11 | 0) == (i10 | 0)) {
      i23 = i10;
      break;
     } else {
      i22 = i11;
     }
    }
   }
  } while (0);
  if ((i23 | 0) == ((HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 3) | 0)) {
   break;
  } else {
   i15 = i23;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16ScriptController18clearScriptObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i4 = i1 + 40 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 44 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i6 + (i8 << 3) | 0;
 L1 : do {
  if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
   i10 = i6;
  } else {
   L3 : do {
    if ((i8 | 0) == 0) {
     i11 = i6;
    } else {
     i12 = i6;
     while (1) {
      i13 = HEAP32[i12 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       i11 = i12;
       break L3;
      }
      i13 = i12 + 8 | 0;
      if ((i13 | 0) == (i9 | 0)) {
       i10 = i6;
       break L1;
      } else {
       i12 = i13;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == (i9 | 0)) {
    i10 = i6;
    break;
   } else {
    i14 = i11;
   }
   L8 : while (1) {
    __ZN3JSC8Bindings10RootObject10invalidateEv(HEAP32[i14 + 4 >> 2] | 0);
    i12 = i14 + 8 | 0;
    if ((i12 | 0) == (i9 | 0)) {
     break;
    } else {
     i15 = i12;
    }
    while (1) {
     i12 = HEAP32[i15 >> 2] | 0;
     if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
      break;
     }
     i12 = i15 + 8 | 0;
     if ((i12 | 0) == (i9 | 0)) {
      break L8;
     } else {
      i15 = i12;
     }
    }
    if ((i15 | 0) == (i9 | 0)) {
     break;
    } else {
     i14 = i15;
    }
   }
   i10 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 if ((i10 | 0) != 0) {
  i5 = HEAP32[i7 >> 2] | 0;
  if ((i5 | 0) > 0) {
   i7 = 0;
   while (1) {
    do {
     if ((HEAP32[i10 + (i7 << 3) >> 2] | 0) != -1) {
      i15 = HEAP32[i10 + (i7 << 3) + 4 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      i14 = i15 + 4 | 0;
      i15 = i14 | 0;
      i9 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i15 >> 2] = i9;
       break;
      }
      i9 = i14 - 4 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i5 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i10);
  _memset(i4 | 0, 0, 16) | 0;
 }
 i4 = i1 + 32 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   __ZN3JSC8Bindings10RootObject10invalidateEv(i10);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5 + 4 | 0;
   i5 = i7 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 i4 = i1 + 60 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN3JSC12JSLockHolderD1Ev(i3);
  STACKTOP = i2;
  return;
 }
 __NPN_DeallocateObject(i1);
 HEAP32[i4 >> 2] = 0;
 __ZN3JSC12JSLockHolderD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore16ScriptController16createRootObjectEPv(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 HEAP32[i6 >> 2] = i3;
 i3 = i2 + 40 | 0;
 __ZN3WTF7HashMapIPvNS_6RefPtrIN3JSC8Bindings10RootObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS9_IS6_EEE4findERKS1_(i7, i3, i6);
 i11 = HEAP32[i7 >> 2] | 0;
 if ((i11 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i2 + 44 >> 2] << 3) | 0)) {
  i7 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i11 = i7 + 4 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[i6 >> 2] | 0;
 i7 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i5, i2 | 0, i7);
 i12 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i12 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0)) {
   i13 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i2, i7) | 0;
  } else {
   i5 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i13 = 0;
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) == -6) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 __ZN3JSC8Bindings10RootObject6createEPKvPNS_14JSGlobalObjectE(i9, i11, HEAP32[i13 + 12 >> 2] | 0);
 i13 = i8 | 0;
 i11 = i9 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i13 >> 2] = i9;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i10, i3 | 0, i6, i8);
 do {
  if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i10 >> 2] | 0;
   i6 = HEAP32[i13 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i3 = i6 + 4 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   }
   i3 = i8 + 4 | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i6;
   if ((i8 | 0) == 0) {
    i14 = i6;
    break;
   }
   i3 = i8 + 4 | 0;
   i8 = i3 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    i14 = i6;
    break;
   }
   i9 = i3 - 4 | 0;
   if ((i9 | 0) == 0) {
    i14 = i6;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
   i14 = i6;
  } else {
   i14 = HEAP32[i13 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i14;
 HEAP32[i13 >> 2] = 0;
 STACKTOP = i4;
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
 HEAP32[i12 >> 2] = H_BASE + 144;
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
 i4 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 3](i9) | 0) >> 2] | 0;
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
function __ZN7WebCore16ScriptController26cacheableBindingRootObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i7 = HEAP32[i6 + 456 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 4;
  } else {
   if ((HEAP32[i7 + 96 >> 2] & 16 | 0) == 0) {
    if ((HEAP8[i7 + 1579 | 0] & 1) == 0) {
     i8 = 4;
     break;
    } else {
     break;
    }
   } else {
    i9 = 0;
    STACKTOP = i2;
    return i9 | 0;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 4) {
   if ((HEAP32[i6 + 32 >> 2] | 0) == 0) {
    i9 = 0;
    STACKTOP = i2;
    return i9 | 0;
   }
   i7 = HEAP32[i6 + 84 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 476 >> 2] & 1](i7, (HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 195 | 0] & 2) != 0) | 0) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  STACKTOP = i2;
  return i9 | 0;
 }
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i4, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i8 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i3, i1 | 0, i8);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
   i10 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i8) | 0;
  } else {
   i3 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i10 = 0;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i10 = 0;
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 __ZN3JSC8Bindings10RootObject6createEPKvPNS_14JSGlobalObjectE(i5, 0, HEAP32[i10 + 12 >> 2] | 0);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i8 = i5 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i5 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i1 = i10 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i4);
 i9 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN7WebCore16ScriptController17bindingRootObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 i7 = HEAP32[i6 + 456 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 4;
  } else {
   if ((HEAP32[i7 + 96 >> 2] & 16 | 0) == 0) {
    if ((HEAP8[i7 + 1579 | 0] & 1) == 0) {
     i8 = 4;
     break;
    } else {
     break;
    }
   } else {
    i9 = 0;
    STACKTOP = i2;
    return i9 | 0;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 4) {
   if ((HEAP32[i6 + 32 >> 2] | 0) == 0) {
    i9 = 0;
    STACKTOP = i2;
    return i9 | 0;
   }
   i7 = HEAP32[i6 + 84 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 476 >> 2] & 1](i7, (HEAP8[(HEAP32[i6 + 36 >> 2] | 0) + 195 | 0] & 2) != 0) | 0) {
    break;
   } else {
    i9 = 0;
   }
   STACKTOP = i2;
   return i9 | 0;
  }
 } while (0);
 i6 = i1 + 32 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  STACKTOP = i2;
  return i9 | 0;
 }
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i4, __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0);
 i8 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i3, i1 | 0, i8);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
   i10 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i8) | 0;
  } else {
   i3 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i10 = 0;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i10 = 0;
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 __ZN3JSC8Bindings10RootObject6createEPKvPNS_14JSGlobalObjectE(i5, 0, HEAP32[i10 + 12 >> 2] | 0);
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i8 = i5 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i5 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 7](i1);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i1 = i10 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i10 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i4);
 i9 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) != -1) {
    i10 = i7 + (i13 << 3) + 4 | 0;
    i3 = HEAP32[i10 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i14 = i11;
    } else {
     i6 = HEAP32[(i3 & -4096) + 12 >> 2] | 0;
     i2 = i3;
     i4 = i6 + 84 | 0;
     i15 = i2 + 12 | 0;
     if ((i2 | 0) == (HEAP32[i4 >> 2] | 0)) {
      HEAP32[i4 >> 2] = HEAP32[i15 >> 2];
     }
     i4 = i3 + 8 | 0;
     i3 = HEAP32[i4 >> 2] | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i3 + 12 >> 2] = i16;
     HEAP32[i16 + 8 >> 2] = i3;
     HEAP32[i4 >> 2] = 0;
     HEAP32[i15 >> 2] = 0;
     i4 = i6 + 80 | 0;
     HEAP32[i15 >> 2] = HEAP32[i4 >> 2];
     HEAP32[i4 >> 2] = i2;
     HEAP32[i10 >> 2] = 0;
     i14 = HEAP32[i1 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     break;
    }
    i10 = i14 | 0;
    i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) == 0) {
     __ZN7WebCore15DOMWrapperWorldD1Ev(i14);
     __ZN3WTF8fastFreeEPv(i14);
     break;
    } else {
     HEAP32[i10 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore16ScriptController13executeScriptERKN3WTF6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 88 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i6, i4 & 1 ^ 1);
 i4 = i2 + 20 | 0;
 i9 = (HEAP32[(HEAP32[i4 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i7, i3, i9, i8);
 do {
  if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(i2, 0) | 0) {
   if ((HEAP8[i2 + 28 | 0] & 1) != 0) {
    i10 = 3;
    break;
   }
   i8 = HEAP32[i4 >> 2] | 0;
   i9 = i8 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i1, i2, i7, __ZN7WebCore21mainThreadNormalWorldEv() | 0);
   i9 = i8 + 4 | 0;
   i8 = i9 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i8 >> 2] = i3;
    break;
   }
   i3 = i9 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 7](i3);
  } else {
   i10 = 3;
  }
 } while (0);
 if ((i10 | 0) == 3) {
  HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  HEAP32[i1 + 4 >> 2] = 0;
 }
 i1 = HEAP32[i7 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i7 + 24 | 0);
 i1 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i2 = i1 + 4 | 0;
   i10 = i2 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i10 >> 2] = i4;
    break;
   }
   i4 = i2 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i1 >> 2] = i4;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i4 = i7 - 4 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 7](i4);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16ScriptController20windowScriptNPObjectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 60 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7;
  STACKTOP = i2;
  return i8 | 0;
 }
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i9 = HEAP32[i7 + 456 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 5;
  } else {
   if ((HEAP32[i9 + 96 >> 2] & 16 | 0) != 0) {
    i10 = 20;
    break;
   }
   if ((HEAP8[i9 + 1579 | 0] & 1) == 0) {
    i10 = 5;
   }
  }
 } while (0);
 do {
  if ((i10 | 0) == 5) {
   if ((HEAP32[i7 + 32 >> 2] | 0) == 0) {
    i10 = 20;
    break;
   }
   i9 = HEAP32[i7 + 84 >> 2] | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 476 >> 2] & 1](i9, (HEAP8[(HEAP32[i7 + 36 >> 2] | 0) + 195 | 0] & 2) != 0) | 0)) {
    i10 = 20;
   }
  }
 } while (0);
 if ((i10 | 0) == 20) {
  i10 = __Z25_NPN_CreateNoScriptObjectv() | 0;
  HEAP32[i6 >> 2] = i10;
  i8 = i10;
  STACKTOP = i2;
  return i8 | 0;
 }
 i10 = __ZN7WebCore21mainThreadNormalWorldEv() | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i3, i1 | 0, i10);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i1 + 4 >> 2] << 3) | 0)) {
   i11 = __ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE(i1, i10) | 0;
  } else {
   i3 = HEAP32[i7 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i11 = 0;
    break;
   }
   i11 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i11 + 12 >> 2] | 0;
 __ZN3JSC12JSLockHolderC1EPNS_9ExecStateE(i4, __ZN3JSC14JSGlobalObject10globalExecEv(i7) | 0);
 i11 = __ZN7WebCore16ScriptController17bindingRootObjectEv(i1) | 0;
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 HEAP32[i6 >> 2] = __Z23_NPN_CreateScriptObjectP4_NPPPN3JSC8JSObjectEN3WTF10PassRefPtrINS1_8Bindings10RootObjectEEE(0, i7, i5) | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 + 4 | 0;
   i7 = i1 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i1 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 7](i10);
  }
 } while (0);
 __ZN3JSC12JSLockHolderD1Ev(i4);
 i8 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = i5;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i4;
 i8 = i3 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i5 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i4;
    i23 = i3 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 i11 = i19 + 4 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i12 = HEAP32[(i10 & -4096) + 12 >> 2] | 0;
  i3 = i10;
  i4 = i12 + 84 | 0;
  i5 = i3 + 12 | 0;
  if ((i3 | 0) == (HEAP32[i4 >> 2] | 0)) {
   HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
  }
  i4 = i10 + 8 | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  i9 = HEAP32[i5 >> 2] | 0;
  HEAP32[i10 + 12 >> 2] = i9;
  HEAP32[i9 + 8 >> 2] = i10;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  i4 = i12 + 80 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i3;
  HEAP32[i11 >> 2] = 0;
 }
 i11 = i19 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i11 >> 2] = i3;
 __ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEEC2ERKS3_(i19 + 4 | 0, i2 + 4 | 0);
 return i19 | 0;
}
function __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i6 | 0) == 0) {
   i8 = i4;
  } else {
   i1 = i4;
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i7 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  return;
 }
 if ((i2 | 0) == 0) {
  i10 = i8;
 } else {
  i4 = i8;
  while (1) {
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     if ((HEAP32[i8 + 4 >> 2] | 0) == -6) {
      break;
     }
     i6 = HEAP32[i8 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     __ZN3JSC8Debugger6attachEPNS_14JSGlobalObjectE(i2, HEAP32[i6 + 12 >> 2] | 0);
    }
   } while (0);
   i8 = i4 + 8 | 0;
   L21 : do {
    if ((i8 | 0) == (i7 | 0)) {
     i11 = i7;
    } else {
     i6 = i8;
     while (1) {
      i1 = HEAP32[i6 >> 2] | 0;
      if (!((i1 | 0) == (-1 | 0) | (i1 | 0) == 0)) {
       i11 = i6;
       break L21;
      }
      i1 = i6 + 8 | 0;
      if ((i1 | 0) == (i7 | 0)) {
       i11 = i7;
       break;
      } else {
       i6 = i1;
      }
     }
    }
   } while (0);
   if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
    break;
   } else {
    i4 = i11;
   }
  }
  return;
 }
 while (1) {
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
     break;
    }
    i4 = HEAP32[i11 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i2 = HEAP32[i4 + 12 >> 2] | 0;
    i4 = HEAP32[i2 + 564 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 3](i4, i2);
   }
  } while (0);
  i11 = i10 + 8 | 0;
  L35 : do {
   if ((i11 | 0) == (i7 | 0)) {
    i12 = i7;
   } else {
    i2 = i11;
    while (1) {
     i4 = HEAP32[i2 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      i12 = i2;
      break L35;
     }
     i4 = i2 + 8 | 0;
     if ((i4 | 0) == (i7 | 0)) {
      i12 = i7;
      break;
     } else {
      i2 = i4;
     }
    }
   }
  } while (0);
  if ((i12 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
   break;
  } else {
   i10 = i12;
  }
 }
 return;
}
function __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS4_NS_12KeyValuePairIS4_S8_EENS_24KeyValuePairKeyExtractorISI_EESA_NS_22KeyValuePairHashTraitsISC_SD_EESC_EESI_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0;
 if ((HEAP32[i2 >> 2] | 0) == (i6 | 0)) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == (i6 | 0)) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i8 + 4 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i9 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
  i10 = i2;
  i11 = i9 + 84 | 0;
  i12 = i10 + 12 | 0;
  if ((i10 | 0) == (HEAP32[i11 >> 2] | 0)) {
   HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  }
  i11 = i2 + 8 | 0;
  i2 = HEAP32[i11 >> 2] | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  HEAP32[i2 + 12 >> 2] = i13;
  HEAP32[i13 + 8 >> 2] = i2;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i12 >> 2] = 0;
  i11 = i9 + 80 | 0;
  HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i11 >> 2] = i10;
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore15DOMWrapperWorldD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = -1;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 12 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i1;
 i6 = HEAP32[i5 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8)) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E6rehashEiPSA_(i4, (i6 | 0) / 2 & -1, 0) | 0;
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore16ScriptController20executeScriptInWorldERNS_15DOMWrapperWorldERKN3WTF6StringEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 88 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i7, i5 & 1 ^ 1);
 i5 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 456 >> 2] | 0) + 356 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE(i8, i4, i5, i9);
 do {
  if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(i2, 0) | 0) {
   if ((HEAP8[i2 + 28 | 0] & 1) != 0) {
    i10 = 3;
    break;
   }
   __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i1, i2, i8, i3);
  } else {
   i10 = 3;
  }
 } while (0);
 if ((i10 | 0) == 3) {
  HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
  HEAP32[i1 + 4 >> 2] = 0;
 }
 i1 = HEAP32[i8 + 28 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i10 = i1 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore24CachedResourceHandleBaseD2Ev(i8 + 24 | 0);
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i10 = i3 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i10 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 i8 = i1 + 4 | 0;
 i1 = i8 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  __ZN7WebCore20UserGestureIndicatorD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 i2 = i8 - 4 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore20UserGestureIndicatorD1Ev(i7);
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 7](i2);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 24 | 0;
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i1 + 28 >> 2] | 0;
   i8 = i6 + (i7 << 2) | 0;
   i9 = i8;
   i10 = i8;
   i11 = i6;
   i12 = i7;
  } else {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i2 + 4 >> 2] = i7 >>> 2;
   HEAP32[i2 >> 2] = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i6 = HEAP32[i1 + 28 >> 2] | 0;
   i8 = i7 + (i6 << 2) | 0;
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    i9 = i8;
    i10 = i8;
    i11 = i7;
    i12 = i6;
    break;
   }
   if ((i6 | 0) == 0) {
    i9 = i7;
    i10 = i8;
    i11 = i7;
    i12 = 0;
    break;
   } else {
    i13 = i7;
   }
   while (1) {
    i14 = HEAP32[i13 >> 2] | 0;
    if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
     i9 = i13;
     i10 = i8;
     i11 = i7;
     i12 = i6;
     break L1;
    }
    i14 = i13 + 4 | 0;
    if ((i14 | 0) == (i8 | 0)) {
     i9 = i8;
     i10 = i8;
     i11 = i7;
     i12 = i6;
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i13 = i11 + (i12 << 2) | 0;
 if ((i9 | 0) == (i13 | 0)) {
  return;
 }
 i12 = i2 | 0;
 i11 = i2 + 8 | 0;
 i2 = i9;
 i9 = HEAP32[i11 >> 2] | 0;
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i12 >> 2] | 0) + (i9 << 2) >> 2] = i4;
  i1 = i4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i1 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
  HEAP32[i11 >> 2] = i1;
  i4 = i2 + 4 | 0;
  L17 : do {
   if ((i4 | 0) == (i10 | 0)) {
    i15 = i10;
   } else {
    i3 = i4;
    while (1) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      i15 = i3;
      break L17;
     }
     i5 = i3 + 4 | 0;
     if ((i5 | 0) == (i10 | 0)) {
      i15 = i10;
      break;
     } else {
      i3 = i5;
     }
    }
   }
  } while (0);
  if ((i15 | 0) == (i13 | 0)) {
   break;
  } else {
   i2 = i15;
   i9 = i1;
  }
 }
 return;
}
function __ZN3WTF7HashSetIPN7WebCore16ScriptControllerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore16ScriptController29cleanupScriptObjectsForPluginEPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = i1 + 40 | 0;
 __ZN3WTF7HashMapIPvNS_6RefPtrIN3JSC8Bindings10RootObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS9_IS6_EEE4findERKS1_(i5, i2, i4);
 i4 = i2 | 0;
 i6 = i1 + 44 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZN3JSC8Bindings10RootObject10invalidateEv(HEAP32[i7 + 4 >> 2] | 0);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i2 | 0;
 if ((i7 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i8 = i2 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 7](i9);
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 56 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 52 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i5, (i7 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPvNS_6RefPtrIN3JSC8Bindings10RootObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS9_IS6_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L3;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = i3;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = i5 & i9;
   i10 = i4 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   L4 : do {
    if ((i11 | 0) == (i3 | 0)) {
     i12 = i10;
    } else {
     i13 = (i9 >>> 23) + ~i9 | 0;
     i14 = i13 << 12 ^ i13;
     i13 = i14 >>> 7 ^ i14;
     i14 = i13 << 2 ^ i13;
     i13 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i15 = i8;
     i16 = i11;
     while (1) {
      if ((i16 | 0) == 0) {
       break;
      }
      i17 = (i14 | 0) == 0 ? i13 : i14;
      i18 = i17 + i15 & i5;
      i19 = i4 + (i18 << 3) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i3 | 0)) {
       i12 = i19;
       break L4;
      } else {
       i14 = i17;
       i15 = i18;
       i16 = i20;
      }
     }
     i16 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i16;
     i7 = i16;
     break L1;
    }
   } while (0);
   i5 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i12 | 0) == 0 ? i5 : i12;
   i7 = i5;
  }
 } while (0);
 i12 = i1;
 HEAP32[i12 >> 2] = i6;
 HEAP32[i12 + 4 >> 2] = i7;
 return;
}
function __ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = i2;
  i9 = i8 + ~(i8 << 15) | 0;
  i8 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i8 >>> 6 ^ i8;
  i8 = i9 + ~(i9 << 11) | 0;
  i9 = i8 >>> 16 ^ i8;
  i8 = i4 & i9;
  i10 = i3 + (i8 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i2 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i8;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
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
  i2 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i2 << 3) | 0 : i12;
  i6 = i3;
  i7 = i2;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i21 = 0;
  return i21 | 0;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == -6) {
  i21 = 0;
  return i21 | 0;
 }
 i21 = HEAP32[i7 >> 2] | 0;
 return i21 | 0;
}
function __ZN7WebCore16ScriptController14updateDocumentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + (i7 << 3) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L4 : do {
  if ((i7 | 0) == 0) {
   i9 = i5;
  } else {
   i1 = i5;
   while (1) {
    i10 = HEAP32[i1 >> 2] | 0;
    if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
     i9 = i1;
     break L4;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i8 | 0)) {
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
 } else {
  i11 = i9;
 }
 while (1) {
  __ZN3JSC12JSLockHolderC1EPNS_2VME(i3, HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] | 0);
  __ZN7WebCore15JSDOMWindowBase14updateDocumentEv(HEAP32[(HEAP32[HEAP32[i11 + 4 >> 2] >> 2] | 0) + 12 >> 2] | 0);
  __ZN3JSC12JSLockHolderD1Ev(i3);
  i9 = i11 + 8 | 0;
  L14 : do {
   if ((i9 | 0) == (i8 | 0)) {
    i12 = i8;
   } else {
    i5 = i9;
    while (1) {
     i7 = HEAP32[i5 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      i12 = i5;
      break L14;
     }
     i7 = i5 + 8 | 0;
     if ((i7 | 0) == (i8 | 0)) {
      i12 = i8;
      break;
     } else {
      i5 = i7;
     }
    }
   }
  } while (0);
  if ((i12 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
   break;
  } else {
   i11 = i12;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEEC2ERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) == -6) {
    i11 = 0;
    break;
   }
   i11 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 HEAP32[i4 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
 HEAP32[i4 >> 2] = i11;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i10 = i4 | 0;
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = HEAP32[i1 + (i3 << 2) >> 2] | 0;
  i6 = i5;
  do {
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    i7 = i5 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i7 >> 2] = i8;
     break;
    }
    FUNCTION_TABLE_vii[HEAP32[i5 + 32 >> 2] & 3](i5, HEAP32[i5 + 28 >> 2] | 0);
    i8 = HEAP32[i5 + 4 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i7 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) > 0) {
      i9 = 0;
      while (1) {
       do {
        if ((HEAP32[i8 + (i9 << 3) >> 2] | 0) != -1) {
         i10 = i8 + (i9 << 3) + 4 | 0;
         if ((HEAP32[i10 >> 2] | 0) == 0) {
          break;
         }
         __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i10);
        }
       } while (0);
       i9 = i9 + 1 | 0;
       if ((i9 | 0) >= (i7 | 0)) {
        break;
       }
      }
     }
     __ZN3WTF8fastFreeEPv(i8);
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEE3setERNS_2VMEPS2_(i1, i2, i3) {
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
function __ZN7WebCore16ScriptController34createScriptObjectForPluginElementEPNS_17HTMLPlugInElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = __ZN7WebCore16ScriptController24jsObjectForPluginElementEPNS_17HTMLPlugInElementE(i1, i2) | 0;
 if ((i5 | 0) == 0) {
  i6 = __Z25_NPN_CreateNoScriptObjectv() | 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i2 = __ZN7WebCore16ScriptController17bindingRootObjectEv(i1) | 0;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = __Z23_NPN_CreateScriptObjectP4_NPPPN3JSC8JSObjectEN3WTF10PassRefPtrINS1_8Bindings10RootObjectEEE(0, i5, i4) | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i1 = i4 + 4 | 0;
 i4 = i1 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5;
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 i5 = i1 - 4 | 0;
 if ((i5 | 0) == 0) {
  i6 = i7;
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
 i6 = i7;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i4 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i2 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = i2 + (i5 << 3) + 4 | 0;
      i7 = HEAP32[i6 >> 2] | 0;
      HEAP32[i6 >> 2] = 0;
      if ((i7 | 0) == 0) {
       break;
      }
      __ZN24OpaqueJSClassContextDataD2Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i2, HEAP32[i4 + 4 >> 2] | 0);
 }
 __ZdlPv(i4);
 return i1 | 0;
}
function __ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 24 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i2 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    do {
     if ((HEAP32[i1 + (i4 << 3) >> 2] | 0) != -1) {
      i5 = i1 + (i4 << 3) + 4 | 0;
      i6 = HEAP32[i5 >> 2] | 0;
      HEAP32[i5 >> 2] = 0;
      if ((i6 | 0) == 0) {
       break;
      }
      __ZN24OpaqueJSClassContextDataD2Ev(i6);
      __ZN3WTF8fastFreeEPv(i6);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  __ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i(i1, HEAP32[i2 + 4 >> 2] | 0);
 }
 __ZdlPv(i2);
 return;
}
function __ZN7WebCore16ScriptController13executeScriptERKNS_16ScriptSourceCodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 do {
  if (__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(i2, 0) | 0) {
   if ((HEAP8[i2 + 28 | 0] & 1) != 0) {
    break;
   }
   i4 = HEAP32[i2 + 20 >> 2] | 0;
   i5 = i4 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i1, i2, i3, __ZN7WebCore21mainThreadNormalWorldEv() | 0);
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    return;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 7](i6);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore16ScriptController18destroyWindowShellERNS_15DOMWrapperWorldE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_(i5, i6, i2);
 __ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS4_NS_12KeyValuePairIS4_S8_EENS_24KeyValuePairKeyExtractorISI_EESA_NS_22KeyValuePairHashTraitsISC_SD_EESC_EESI_EE(i6, i5) | 0;
 HEAP32[i4 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore16ScriptControllerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i2 + 72 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 3) | 0;
 HEAP32[i3 >> 2] = i1 >>> 3;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 3) | 0;
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
function __ZN7WebCore16ScriptController11disableEvalERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE(i1, __ZN7WebCore21mainThreadNormalWorldEv() | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP8[i1 + 596 | 0] = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i2 = i3 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 600 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i3 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore16ScriptController10enableEvalEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE(i1, __ZN7WebCore21mainThreadNormalWorldEv() | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP8[i1 + 596 | 0] = 1;
 i2 = i1 + 600 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
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
function __ZN7WebCore16ScriptController14attachDebuggerEPNS_16JSDOMWindowShellEPN3JSC8DebuggerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = i1;
 if ((i3 | 0) != 0) {
  __ZN3JSC8Debugger6attachEPNS_14JSGlobalObjectE(i3, i2);
  return;
 }
 i3 = HEAP32[i1 + 564 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 3](i3, i2);
 return;
}
function __ZN3JSC20StringSourceProviderD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
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
 HEAP32[i1 >> 2] = H_BASE + 144;
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
function __ZNK7WebCore16ScriptController20eventHandlerPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore8Document24scriptableDocumentParserEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 84 >> 2] & 3](i1, i3);
  return;
 }
}
function __ZN7WebCore16ScriptController42shouldBypassMainWorldContentSecurityPolicyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i1 = HEAP32[(__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 20616 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0) + 92 | 0] & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore16ScriptController12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE(HEAP32[(__ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0) + 20612 >> 2] | 0, i1);
 return;
}
function __ZN7WebCore16ScriptController26canAccessFromCurrentOriginEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZN7WebCore24shouldAllowAccessToFrameEPN3JSC9ExecStateEPNS_5FrameE(i2, i1) | 0;
 return i3 | 0;
}
function __ZN7WebCore16ScriptController29createScriptInstanceForWidgetEPNS_6WidgetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 3](i3) | 0) {
  __ZN7WebCore10PluginView15bindingInstanceEv(i1, i3);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore16ScriptController8evaluateERKNS_16ScriptSourceCodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE(i1, i2, i3, __ZN7WebCore21mainThreadNormalWorldEv() | 0);
 return;
}
function __ZN7WebCore16ScriptController11createWorldEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN7WebCore15JSDOMWindowBase8commonVMEv() | 0;
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore15DOMWrapperWorldC1EPN3JSC2VMEb(i3, i2, 0);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore16ScriptControllerC2ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 HEAP32[i1 + 20 >> 2] = i2;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 32 | 0, 0, 32) | 0;
 return;
}
function __ZN7WebCore16ScriptControllerC1ERNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 HEAP32[i1 + 20 >> 2] = i2;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP8[i1 + 28 | 0] = 0;
 _memset(i1 + 32 | 0, 0, 32) | 0;
 return;
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
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 2;
}
function __ZN7WebCore16ScriptController19initializeThreadingEv() {
 __ZN3JSC19initializeThreadingEv();
 __ZN3WTF20initializeMainThreadEv();
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
function __ZN7WebCore16ScriptController21processingUserGestureEv() {
 return __ZN7WebCore20UserGestureIndicator21processingUserGestureEv() | 0;
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore16ScriptController40setCaptureCallStackForUncaughtExceptionsEb(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function __ZN7WebCore16ScriptController31disconnectPlatformScriptObjectsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK3JSC20StringSourceProvider6sourceEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN3JSC20StringSourceProviderD0Ev,b1,__ZN3JSC20StringSourceProviderD1Ev,b1,__ZN7WebCore16ScriptControllerD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore16ScriptControllerC2ERNS_5FrameE,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK3JSC20StringSourceProvider6sourceEv,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE, "__ZN7WebCore16JSDOMWindowShell6s_infoE": __ZN7WebCore16JSDOMWindowShell6s_infoE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE": __ZN7WebCore21JSMainThreadExecState17s_mainThreadStateE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN24OpaqueJSClassContextDataD2Ev","_strlen","__ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE","__ZN7WebCore16ScriptController13executeScriptERKN3WTF6StringEb","__ZN7WebCore16ScriptController20windowScriptNPObjectEv","__ZN7WebCore16ScriptController10enableEvalEv","__ZN7WebCore19WebCoreJSClientData12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E3addINS_17HashMapTranslatorISJ_SE_EERPS3_RS9_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_SA_SC_SE_SJ_SH_EEEEOT0_OT1_","_memset","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E8reinsertEOSA_","__ZN7WebCore16ScriptController27updatePlatformScriptObjectsEv","__ZN7WebCore16ScriptController11disableEvalERKN3WTF6StringE","__ZN7WebCore16ScriptController24jsObjectForPluginElementEPNS_17HTMLPlugInElementE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZN7WebCore16ScriptController29createScriptInstanceForWidgetEPNS_6WidgetE","__ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore16ScriptController21processingUserGestureEv","__ZNK7WebCore16ScriptController19existingWindowShellERNS_15DOMWrapperWorldE","__ZN3WTF9HashTableIPN7WebCore16ScriptControllerES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore16ScriptControllerD2Ev","__ZN7WebCore16ScriptController8evaluateERKNS_16ScriptSourceCodeE","__ZN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPN7WebCore14SecurityOriginEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16ScriptController22executeIfJavaScriptURLERKNS_3URLENS_36ShouldReplaceDocumentIfJavaScriptURLE","__ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEEC2ERKS3_","__ZN7WebCore16ScriptController12getAllWorldsERN3WTF6VectorINS1_3RefINS_15DOMWrapperWorldEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore16ScriptControllerC2ERNS_5FrameE","__ZN7WebCore16ScriptController18destroyWindowShellERNS_15DOMWrapperWorldE","__ZN7WebCore16ScriptController11createWorldEv","__ZN7WebCore16ScriptController10initScriptERNS_15DOMWrapperWorldE","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore15DOMWrapperWorldEEENS_12KeyValuePairIS4_N3JSC6StrongINS2_16JSDOMWindowShellEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS4_EENS_22KeyValuePairHashTraitsINS_10HashTraitsIS4_EENSG_IS9_EEEESH_E6rehashEiPSA_","__ZN7WebCore16ScriptController14attachDebuggerEPNS_16JSDOMWindowShellEPN3JSC8DebuggerE","_memcpy","__ZN3WTF10PassOwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEED2Ev","__ZN3WTF6OwnPtrIN3JSC14JSGlobalObject22JSGlobalObjectRareDataEEaSERKNS_10PassOwnPtrIS3_EE","__ZN7WebCore16ScriptSourceCodeC2ERKN3WTF6StringERKNS_3URLERKNS1_12TextPositionE","__ZN3WTF7HashMapIPvNS_6RefPtrIN3JSC8Bindings10RootObjectEEENS_7PtrHashIS1_EENS_10HashTraitsIS1_EENS9_IS6_EEE4findERKS1_","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE6removeENS_24HashTableIteratorAdapterINS_9HashTableIS4_NS_12KeyValuePairIS4_S8_EENS_24KeyValuePairKeyExtractorISI_EESA_NS_22KeyValuePairHashTraitsISC_SD_EESC_EESI_EE","__ZN7WebCore16ScriptController20executeScriptInWorldERNS_15DOMWrapperWorldERKN3WTF6StringEb","__ZN7WebCore16ScriptController42shouldBypassMainWorldContentSecurityPolicyEv","__ZN7WebCore16ScriptController17bindingRootObjectEv","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_NS_6RefPtrIN3JSC8Bindings10RootObjectEEEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS1_EENS_7HashMapIS1_S7_SC_NS_10HashTraitsIS1_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EERKS1_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN3JSC20StringSourceProviderD0Ev","__ZN7WebCore16ScriptController18clearScriptObjectsEv","__ZN7WebCore16ScriptController26canAccessFromCurrentOriginEPNS_5FrameE","__ZN7WebCore16ScriptController16createRootObjectEPv","__ZNK3JSC20StringSourceProvider6sourceEv","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore16ScriptController17createWindowShellERNS_15DOMWrapperWorldE","__ZN3JSC20StringSourceProviderD1Ev","__ZN7WebCore16ScriptController15evaluateInWorldERKNS_16ScriptSourceCodeERNS_15DOMWrapperWorldE","__ZN7WebCore16ScriptController14updateDocumentEv","__ZN7WebCore16ScriptController16clearWindowShellEPNS_9DOMWindowEb","__ZN3WTF7HashSetIPN7WebCore16ScriptControllerENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3JSC6StrongIN7WebCore16JSDOMWindowShellEE3setERNS_2VMEPS2_","__ZN7WebCore16ScriptController40setCaptureCallStackForUncaughtExceptionsEb","__ZN7WebCore16ScriptController29cleanupScriptObjectsForPluginEPv","__ZN7WebCore16ScriptController26cacheableBindingRootObjectEv","__ZN7WebCore16ScriptController31disconnectPlatformScriptObjectsEv","__ZN7WebCore16ScriptController13executeScriptERKNS_16ScriptSourceCodeE","__ZN7WebCore16ScriptController23collectIsolatedContextsERN3WTF6VectorINSt3__14pairIPN3JSC9ExecStateEPNS_14SecurityOriginEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore16ScriptController19initializeThreadingEv","__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE","__ZN3WTF7HashMapINS_6RefPtrIN7WebCore15DOMWrapperWorldEEEN3JSC6StrongINS2_16JSDOMWindowShellEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSB_IS8_EEE4findEPS3_","__ZN7WebCore16ScriptController34createScriptObjectForPluginElementEPNS_17HTMLPlugInElementE","__ZN3WTF9HashTableINS_6RefPtrI21OpaqueJSWeakObjectMapEES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E15deallocateTableEPS3_i","__ZNK7WebCore16ScriptController20eventHandlerPositionEv"]

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
H_BASE = parentModule["_malloc"](824 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 824;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21ApplicationCacheGroupC1ERKNS_3URLEb;
var __ZN7WebCore21ApplicationCacheGroupD1Ev;
/* memory initializer */ allocate([32,119,97,115,32,114,101,100,105,114,101,99,116,101,100,46,0,0,0,0,0,0,0,0,32,99,111,117,108,100,32,110,111,116,32,98,101,32,102,101,116,99,104,101,100,46,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,117,112,100,97,116,101,32,102,97,105,108,101,100,44,32,98,101,99,97,117,115,101,32,0,0,0,0,0,0,0,73,102,45,78,111,110,101,45,77,97,116,99,104,0,0,0,73,102,45,77,111,100,105,102,105,101,100,45,83,105,110,99,101,0,0,0,0,0,0,0,69,84,97,103,0,0,0,0,76,97,115,116,45,77,111,100,105,102,105,101,100,0,0,0,109,97,120,45,97,103,101,61,48,0,0,0,0,0,0,0,71,69,84,0,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,109,97,110,105,102,101,115,116,32,99,111,117,108,100,32,110,111,116,32,98,101,32,112,97,114,115,101,100,46,32,68,111,101,115,32,105,116,32,115,116,97,114,116,32,119,105,116,104,32,67,65,67,72,69,32,77,65,78,73,70,69,83,84,63,0,0,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,109,97,110,105,102,101,115,116,32,99,111,117,108,100,32,110,111,116,32,98,101,32,102,101,116,99,104,101,100,32,98,101,99,97,117,115,101,32,111,102,32,97,110,32,117,110,101,120,112,101,99,116,101,100,32,51,48,52,32,78,111,116,32,77,111,100,105,102,105,101,100,32,115,101,114,118,101,114,32,114,101,115,112,111,110,115,101,46,0,0,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,109,97,110,105,102,101,115,116,32,99,111,117,108,100,32,110,111,116,32,98,101,32,102,101,116,99,104,101,100,44,32,98,101,99,97,117,115,101,32,97,32,114,101,100,105,114,101,99,116,105,111,110,32,119,97,115,32,97,116,116,101,109,112,116,101,100,46,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,109,97,110,105,102,101,115,116,32,99,111,117,108,100,32,110,111,116,32,98,101,32,102,101,116,99,104,101,100,46,0,0,0,0,0,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,117,112,100,97,116,101,32,102,97,105,108,101,100,44,32,98,101,99,97,117,115,101,32,115,105,122,101,32,113,117,111,116,97,32,119,97,115,32,101,120,99,101,101,100,101,100,46,0,0,0,0,0,0,0,67,97,99,104,101,45,67,111,110,116,114,111,108,0,0,0,65,112,112,108,105,99,97,116,105,111,110,32,67,97,99,104,101,32,100,111,119,110,108,111,97,100,32,112,114,111,99,101,115,115,32,119,97,115,32,97,98,111,114,116,101,100,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
  var __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE=env.__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore25ChromeClientCallbackTimerE=(H_BASE+672)|0;
  var __ZTVN7WebCore21ApplicationCacheGroupE=(H_BASE+736)|0;
  var __ZTVN7WebCore21CallCacheListenerTaskE=(H_BASE+704)|0;
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
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_viiiiii=env.invoke_viiiiii;
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
function __ZN7WebCore21ApplicationCacheGroup18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 104 | 0;
 i14 = i4 + 112 | 0;
 i15 = i4 + 120 | 0;
 i16 = i4 + 128 | 0;
 i17 = i1 + 196 | 0;
 i18 = HEAP32[i1 + 160 >> 2] | 0;
 if ((HEAP32[i17 >> 2] | 0) == (i2 | 0)) {
  i19 = 0;
 } else {
  i19 = HEAP32[i18 + 128 >> 2] | 0;
 }
 i20 = i1 + 160 | 0;
 i21 = i1 + 188 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i23 = 6;
  } else {
   i24 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i18 + 32 >> 2] | 0) | 0;
   if ((i24 | 0) == 0) {
    i23 = 6;
    break;
   }
   __ZN7WebCore24InspectorInstrumentation31willReceiveResourceResponseImplEPNS_19InstrumentingAgentsEmRKNS_16ResourceResponseEPNS_5FrameE(i10, i24, i22, i3, i18);
  }
 } while (0);
 if ((i23 | 0) == 6) {
  __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i10);
 }
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  __ZN7WebCore24InspectorInstrumentation30didReceiveResourceResponseImplERKNS_30InspectorInstrumentationCookieEmPNS_14DocumentLoaderERKNS_16ResourceResponseEPNS_14ResourceLoaderE(i10, HEAP32[i21 >> 2] | 0, i19, i3, 0);
 }
 if ((HEAP32[i17 >> 2] | 0) == (i2 | 0)) {
  __ZN7WebCore21ApplicationCacheGroup26didReceiveManifestResponseERKNS_16ResourceResponseE(i1, i3);
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i10);
  STACKTOP = i4;
  return;
 }
 i17 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(i2) | 0) | 0;
 i19 = i11 | 0;
 i21 = HEAP32[i17 >> 2] | 0;
 HEAP32[i19 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i18 = i21 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
 }
 i18 = i17 + 4 | 0;
 i21 = i11 + 4 | 0;
 i22 = HEAP8[i21] & -2 | HEAP8[i18] & 1;
 HEAP8[i21] = i22;
 HEAP8[i21] = i22 & -3 | HEAP8[i18] & 2;
 HEAP32[i11 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 HEAP32[i11 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
 HEAP32[i11 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
 HEAP32[i11 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
 HEAP32[i11 + 28 >> 2] = HEAP32[i17 + 28 >> 2];
 HEAP32[i11 + 32 >> 2] = HEAP32[i17 + 32 >> 2];
 HEAP32[i11 + 36 >> 2] = HEAP32[i17 + 36 >> 2];
 HEAP32[i11 + 40 >> 2] = HEAP32[i17 + 40 >> 2];
 HEAP32[i11 + 44 >> 2] = HEAP32[i17 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i11) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i11);
 }
 i17 = i1 + 132 | 0;
 i18 = i11 | 0;
 i22 = HEAP32[i1 + 140 >> 2] | 0;
 i21 = HEAP32[i17 >> 2] | 0;
 i24 = HEAP32[i19 >> 2] | 0;
 i25 = HEAP32[i24 + 16 >> 2] | 0;
 if (i25 >>> 0 > 127 >>> 0) {
  i26 = i25 >>> 7;
 } else {
  i26 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i24) | 0;
 }
 L27 : do {
  if ((i21 | 0) == 0) {
   i27 = 0;
  } else {
   i24 = (i26 >>> 23) + ~i26 | 0;
   i25 = i24 << 12 ^ i24;
   i24 = i25 >>> 7 ^ i25;
   i25 = i24 << 2 ^ i24;
   i24 = i25 >>> 20 ^ i25 | 1;
   i25 = i26;
   i28 = 0;
   while (1) {
    i29 = i25 & i22;
    i30 = i21 + (i29 << 3) | 0;
    i31 = HEAP32[i30 >> 2] | 0;
    i32 = i31;
    if ((i32 | 0) == 0) {
     i27 = 0;
     break L27;
    } else if ((i32 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i31, HEAP32[i19 >> 2] | 0) | 0) {
      break;
     }
    }
    i31 = (i28 | 0) == 0 ? i24 : i28;
    i25 = i31 + i29 | 0;
    i28 = i31;
   }
   if ((i30 | 0) == 0) {
    i27 = 0;
    break;
   }
   i27 = HEAP32[i21 + (i29 << 3) + 4 >> 2] | 0;
  }
 } while (0);
 i29 = i1 + 60 | 0;
 i21 = i3 | 0;
 do {
  if ((HEAP32[i29 >> 2] | 0) == 0) {
   i23 = 44;
  } else {
   if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i21) | 0) != 304) {
    i23 = 44;
    break;
   }
   i30 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(HEAP32[i29 >> 2] | 0, i18) | 0;
   if ((i30 | 0) == 0) {
    i23 = 44;
    break;
   }
   i22 = HEAP32[i1 + 84 >> 2] | 0;
   i26 = HEAP32[i30 + 224 >> 2] | 0;
   if ((i26 | 0) != 0) {
    i28 = i26 | 0;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   }
   i28 = __ZN3WTF10fastMallocEj(256) | 0;
   i25 = i8 | 0;
   HEAP32[i25 >> 2] = i26;
   __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i28, i11, i30 + 56 | 0, i27, i8, i30 + 248 | 0);
   i30 = i12 | 0;
   HEAP32[i30 >> 2] = i28;
   i28 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i25 = i28 | 0;
     i26 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i28);
      __ZN3WTF8fastFreeEPv(i28);
      break;
     } else {
      HEAP32[i25 >> 2] = i26;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i22, i12);
   i28 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     i26 = i28 + 4 | 0;
     i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
      break;
     } else {
      HEAP32[i26 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i28 = i1 + 180 | 0;
   __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i17, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i28 >> 2] | 0) | 0) | 0) | 0;
   i30 = HEAP32[i28 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 15](i30);
   i30 = HEAP32[i28 >> 2] | 0;
   HEAP32[i28 >> 2] = 0;
   do {
    if ((i30 | 0) != 0) {
     i28 = i30 + 4 | 0;
     i22 = i28 | 0;
     i25 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) != 0) {
      HEAP32[i22 >> 2] = i25;
      break;
     }
     i25 = i28 - 4 | 0;
     if ((i25 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
  }
 } while (0);
 L63 : do {
  if ((i23 | 0) == 44) {
   do {
    if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i21) | 0) - 200 | 0) >>> 0 <= 99 >>> 0) {
     i12 = __ZNK7WebCore20ResourceResponseBase3urlEv(i21) | 0;
     i8 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i1 + 180 >> 2] | 0) | 0) | 0;
     if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0)) {
      break;
     }
     i8 = __ZN3WTF10fastMallocEj(40) | 0;
     __ZN7WebCore12SharedBufferC1Ev(i8);
     i12 = i16 | 0;
     HEAP32[i12 >> 2] = 0;
     i30 = __ZN3WTF10fastMallocEj(256) | 0;
     i25 = i9 | 0;
     HEAP32[i25 >> 2] = i8;
     __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i30, i11, i3, i27, i9, i16);
     i8 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i8 | 0) != 0) {
       i25 = i8 | 0;
       i28 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) == 0) {
        __ZN7WebCore12SharedBufferD1Ev(i8);
        __ZN3WTF8fastFreeEPv(i8);
        break;
       } else {
        HEAP32[i25 >> 2] = i28;
        break;
       }
      }
     } while (0);
     i8 = i1 + 184 | 0;
     i28 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i30;
     do {
      if ((i28 | 0) != 0) {
       i8 = i28 + 4 | 0;
       i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) == 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
        break;
       } else {
        HEAP32[i8 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i28 = HEAP32[i12 >> 2] | 0;
     if ((i28 | 0) == 0) {
      break L63;
     }
     i30 = i28 | 0;
     i25 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break L63;
     } else {
      HEAP32[i30 >> 2] = i25;
      break L63;
     }
    }
   } while (0);
   if ((i27 & 20 | 0) == 0) {
    do {
     if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i21) | 0) != 404) {
      if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i21) | 0) == 410) {
       break;
      }
      i25 = HEAP32[i29 >> 2] | 0;
      i30 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(i25, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(i2) | 0) | 0) | 0;
      i25 = HEAP32[i1 + 84 >> 2] | 0;
      i28 = HEAP32[i30 + 224 >> 2] | 0;
      if ((i28 | 0) != 0) {
       i8 = i28 | 0;
       HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
      }
      i8 = __ZN3WTF10fastMallocEj(256) | 0;
      i22 = i5 | 0;
      HEAP32[i22 >> 2] = i28;
      __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i8, i11, i30 + 56 | 0, i27, i5, i30 + 248 | 0);
      i30 = i15 | 0;
      HEAP32[i30 >> 2] = i8;
      i8 = HEAP32[i22 >> 2] | 0;
      do {
       if ((i8 | 0) != 0) {
        i22 = i8 | 0;
        i28 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) == 0) {
         __ZN7WebCore12SharedBufferD1Ev(i8);
         __ZN3WTF8fastFreeEPv(i8);
         break;
        } else {
         HEAP32[i22 >> 2] = i28;
         break;
        }
       }
      } while (0);
      __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i25, i15);
      i8 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i8 | 0) != 0) {
        i12 = i8 + 4 | 0;
        i28 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) == 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
         break;
        } else {
         HEAP32[i12 >> 2] = i28;
         break;
        }
       }
      } while (0);
      i8 = i1 + 180 | 0;
      __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i17, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i8 >> 2] | 0) | 0) | 0) | 0;
      i30 = HEAP32[i8 >> 2] | 0;
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] & 15](i30);
      i30 = HEAP32[i8 >> 2] | 0;
      HEAP32[i8 >> 2] = 0;
      do {
       if ((i30 | 0) != 0) {
        i8 = i30 + 4 | 0;
        i25 = i8 | 0;
        i28 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
        if ((i28 | 0) != 0) {
         HEAP32[i25 >> 2] = i28;
         break;
        }
        i28 = i8 - 4 | 0;
        if ((i28 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
       }
      } while (0);
      __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
      break L63;
     }
    } while (0);
    i30 = i1 + 180 | 0;
    i28 = HEAP32[i30 >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] & 15](i28);
    i28 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    do {
     if ((i28 | 0) != 0) {
      i30 = i28 + 4 | 0;
      i8 = i30 | 0;
      i25 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) != 0) {
       HEAP32[i8 >> 2] = i25;
       break;
      }
      i25 = i30 - 4 | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
     }
    } while (0);
    __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i17, i18) | 0;
    __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
    break;
   }
   i28 = HEAP32[(HEAP32[i20 >> 2] | 0) + 456 >> 2] | 0;
   i25 = HEAP32[(HEAP32[i28 >> 2] | 0) + 316 >> 2] | 0;
   __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i14, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i1 + 180 >> 2] | 0) | 0) | 0, 1024);
   i30 = i14 | 0;
   i8 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i33 = 0;
    } else {
     i12 = i8 | 0;
     i22 = HEAP32[i12 >> 2] | 0;
     i26 = i22 + 2 | 0;
     HEAP32[i12 >> 2] = i22 + 4;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      i33 = i8;
      break;
     } else {
      HEAP32[i12 >> 2] = i26;
      i33 = i8;
      break;
     }
    }
   } while (0);
   i8 = ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i21) | 0) - 200 | 0) >>> 0 > 99 >>> 0;
   i26 = i8 ? H_BASE + 32 | 0 : H_BASE + 8 | 0;
   i8 = (i33 | 0) == 0;
   do {
    if (i8) {
     i34 = 0;
    } else {
     i12 = i33 | 0;
     i22 = HEAP32[i12 >> 2] | 0;
     i24 = i22 + 2 | 0;
     HEAP32[i12 >> 2] = i22 + 4;
     if ((i24 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      i34 = i33;
      break;
     } else {
      HEAP32[i12 >> 2] = i24;
      i34 = i33;
      break;
     }
    }
   } while (0);
   HEAP32[i7 >> 2] = H_BASE + 56;
   i24 = i7 + 4 | 0;
   HEAP32[i24 >> 2] = i34;
   i12 = (i34 | 0) == 0;
   if (!i12) {
    i22 = i34 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, i26);
   i22 = i6 | 0;
   i31 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i22 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 | 0;
     i32 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i24 >> 2] = i32;
      break;
     }
    }
   } while (0);
   if ((i31 | 0) == 0) {
    _WTFCrash();
   }
   i22 = i13 | 0;
   HEAP32[i22 >> 2] = i31;
   FUNCTION_TABLE_viiiii[i25 & 3](i28, 5, 3, i13, 0);
   i26 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i22 = i26 | 0;
     i32 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i26);
      break;
     } else {
      HEAP32[i22 >> 2] = i32;
      break;
     }
    }
   } while (0);
   do {
    if (!i12) {
     i26 = i34 | 0;
     i28 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i26 >> 2] = i28;
      break;
     }
    }
   } while (0);
   do {
    if (!i8) {
     i12 = i33 | 0;
     i28 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i12 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i28 = i8 | 0;
     i12 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i28 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
   i8 = i1 + 192 | 0;
   i30 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   do {
    if ((i30 | 0) != 0) {
     i8 = i30 + 4 | 0;
     i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 15](i30);
      break;
     } else {
      HEAP32[i8 >> 2] = i12;
      break;
     }
    }
   } while (0);
   HEAP32[i1 + 172 >> 2] = 2;
   __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
  }
 } while (0);
 i1 = HEAP32[i19 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i10);
  STACKTOP = i4;
  return;
 }
 i19 = i1 | 0;
 i33 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i33 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i10);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i19 >> 2] = i33;
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i10);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 96 | 0;
 if ((HEAP32[i1 + 196 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 144 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 108 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i1 + 60 | 0;
 i14 = (HEAP32[i13 >> 2] | 0) != 0;
 i15 = i1 + 172 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i16 | 0) == 1) {
   if ((HEAP32[i1 + 164 >> 2] | 0) == 0) {
    __ZN7WebCore23ApplicationCacheStorage16storeNewestCacheEPNS_21ApplicationCacheGroupE(__ZN7WebCore12cacheStorageEv() | 0, i1) | 0;
   }
   __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(2, 0, 0, i1 + 112 | 0);
  } else if ((i16 | 0) == 2) {
   __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(1, 0, 0, i1 + 112 | 0);
   if ((HEAP32[i1 + 76 >> 2] | 0) != 0) {
    break;
   }
   if ((i1 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
   STACKTOP = i2;
   return;
  } else if ((i16 | 0) == 3) {
   i17 = i1 + 192 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = i1 + 84 | 0;
   do {
    if ((i18 | 0) != 0) {
     i20 = HEAP32[i19 >> 2] | 0;
     i21 = i9 | 0;
     HEAP32[i21 >> 2] = i18;
     HEAP32[i17 >> 2] = 0;
     __ZN7WebCore16ApplicationCache19setManifestResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i20, i9);
     i20 = HEAP32[i21 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i21 = i20 + 4 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 15](i20);
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i13 >> 2] | 0;
   if ((i17 | 0) == (HEAP32[i19 >> 2] | 0) | (i17 | 0) == 0) {
    i23 = 0;
   } else {
    i18 = i17 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    i23 = i17;
   }
   i17 = __ZN7WebCore12cacheStorageEv() | 0;
   if (!(__ZN7WebCore23ApplicationCacheStorage16checkOriginQuotaEPNS_21ApplicationCacheGroupEPNS_16ApplicationCacheES4_Rx(i17, i1, i23, HEAP32[i19 >> 2] | 0, i10) | 0)) {
    i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 240 >> 2] & 7](i17, HEAP32[i1 + 52 >> 2] | 0, HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0);
   }
   i17 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i18 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i17;
   do {
    if ((i18 | 0) != 0) {
     i17 = i18 | 0;
     i22 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      break;
     } else {
      HEAP32[i17 >> 2] = i22;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
   i18 = i1 + 64 | 0;
   __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i6, i18, i5, i5);
   __ZN7WebCore16ApplicationCache8setGroupEPNS_21ApplicationCacheGroupE(HEAP32[i13 >> 2] | 0, i1);
   if (__ZN7WebCore23ApplicationCacheStorage16storeNewestCacheEPNS_21ApplicationCacheGroupEPNS_16ApplicationCacheERNS0_13FailureReasonE(__ZN7WebCore12cacheStorageEv() | 0, i1, i23, i11) | 0) {
    if ((i23 | 0) != 0) {
     __ZN7WebCore23ApplicationCacheStorage6removeEPNS_16ApplicationCacheE(__ZN7WebCore12cacheStorageEv() | 0, i23);
    }
    i22 = i1 + 112 | 0;
    __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(4, HEAP32[i1 + 152 >> 2] | 0, HEAP32[i1 + 156 >> 2] | 0, i22);
    __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i14 ? 5 : 6, 0, 0, i22);
    HEAP8[i1 + 208 | 0] = 0;
    if ((i23 | 0) == 0) {
     break;
    }
    i22 = i23 | 0;
    i17 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore16ApplicationCacheD1Ev(i23);
     __ZN3WTF8fastFreeEPv(i23);
     break;
    } else {
     HEAP32[i22 >> 2] = i17;
     break;
    }
   }
   i17 = HEAP32[i11 >> 2] | 0;
   if ((i17 | 0) == 0) {
    HEAP8[i1 + 208 | 0] = 1;
    i22 = HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 456 >> 2] | 0;
    i21 = HEAP32[(HEAP32[i22 >> 2] | 0) + 316 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i12, H_BASE + 536 | 0);
    FUNCTION_TABLE_viiiii[i21 & 3](i22, 9, 3, i12, 0);
    i22 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i21 = i22 | 0;
      i20 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i21 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i24 = HEAP32[i11 >> 2] | 0;
   } else {
    i24 = i17;
   }
   do {
    if ((i24 | 0) == 1) {
     if ((HEAP8[i1 + 177 | 0] & 1) != 0) {
      break;
     }
     i22 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i20 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = i22;
     do {
      if ((i20 | 0) != 0) {
       i22 = i20 | 0;
       i21 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
       if ((i21 | 0) == 0) {
        __ZN7WebCore16ApplicationCacheD1Ev(i20);
        __ZN3WTF8fastFreeEPv(i20);
        break;
       } else {
        HEAP32[i22 >> 2] = i21;
        break;
       }
      }
     } while (0);
     if ((i23 | 0) != 0) {
      i20 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = i23;
      do {
       if ((i20 | 0) != 0) {
        i21 = i20 | 0;
        i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
        if ((i22 | 0) == 0) {
         __ZN7WebCore16ApplicationCacheD1Ev(i20);
         __ZN3WTF8fastFreeEPv(i20);
         break;
        } else {
         HEAP32[i21 >> 2] = i22;
         break;
        }
       }
      } while (0);
      HEAP32[i3 >> 2] = HEAP32[i13 >> 2];
      __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i18, i3, i3);
      __ZN7WebCore16ApplicationCache8setGroupEPNS_21ApplicationCacheGroupE(HEAP32[i13 >> 2] | 0, i1);
     }
     i20 = __ZN3WTF10fastMallocEj(48) | 0;
     i22 = i20;
     __ZN7WebCore9TimerBaseC2Ev(i22);
     HEAP32[i20 >> 2] = H_BASE + 680;
     HEAP32[i20 + 44 >> 2] = i1;
     __ZN7WebCore9TimerBase5startEdd(i22, +0, +0);
     STACKTOP = i2;
     return;
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(1, 0, 0, i1 + 112 | 0);
   i19 = i1 + 100 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   i22 = (i17 | 0) == 0;
   L80 : do {
    if (i22) {
     i25 = 0;
    } else {
     i20 = i17 >>> 0 < 16 >>> 0 ? 16 : i17;
     do {
      if ((i20 | 0) == 0) {
       i21 = HEAP32[i1 + 88 >> 2] | 0;
       i26 = HEAP32[i1 + 92 >> 2] | 0;
       i27 = 0;
       i28 = i21;
       i29 = i26;
       i30 = i21 + (i26 << 2) | 0;
       i31 = 52;
      } else {
       if (i20 >>> 0 > 1073741823 >>> 0) {
        _WTFCrash();
       } else {
        i26 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0) | 0;
        i21 = HEAP32[i1 + 88 >> 2] | 0;
        i32 = HEAP32[i1 + 92 >> 2] | 0;
        if ((HEAP32[i19 >> 2] | 0) == 0) {
         i33 = i26;
         break;
        } else {
         i27 = i26;
         i28 = i21;
         i29 = i32;
         i30 = i21 + (i32 << 2) | 0;
         i31 = 52;
         break;
        }
       }
      }
     } while (0);
     L88 : do {
      if ((i31 | 0) == 52) {
       L90 : do {
        if ((i29 | 0) == 0) {
         i34 = i28;
        } else {
         i20 = i28;
         while (1) {
          i32 = HEAP32[i20 >> 2] | 0;
          if (!((i32 | 0) == (-1 | 0) | (i32 | 0) == 0)) {
           i34 = i20;
           break L90;
          }
          i32 = i20 + 4 | 0;
          if ((i32 | 0) == (i30 | 0)) {
           i33 = i27;
           break L88;
          } else {
           i20 = i32;
          }
         }
        }
       } while (0);
       if ((i34 | 0) == (i30 | 0)) {
        i33 = i27;
        break;
       } else {
        i35 = i34;
        i36 = 0;
       }
       while (1) {
        if (i17 >>> 0 <= i36 >>> 0) {
         break;
        }
        HEAP32[i27 + (i36 << 2) >> 2] = HEAP32[i35 >> 2];
        i20 = i35 + 4 | 0;
        if ((i20 | 0) == (i30 | 0)) {
         i33 = i27;
         break L88;
        } else {
         i37 = i20;
        }
        while (1) {
         i20 = HEAP32[i37 >> 2] | 0;
         if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
          break;
         }
         i20 = i37 + 4 | 0;
         if ((i20 | 0) == (i30 | 0)) {
          i33 = i27;
          break L88;
         } else {
          i37 = i20;
         }
        }
        if ((i37 | 0) == (i30 | 0)) {
         i33 = i27;
         break L88;
        } else {
         i35 = i37;
         i36 = i36 + 1 | 0;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     if (i22) {
      i25 = i33;
      break;
     } else {
      i38 = 0;
     }
     while (1) {
      if (i17 >>> 0 <= i38 >>> 0) {
       break;
      }
      __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(i1, HEAP32[i33 + (i38 << 2) >> 2] | 0);
      i20 = i38 + 1 | 0;
      if ((i20 | 0) == (i17 | 0)) {
       i25 = i33;
       break L80;
      } else {
       i38 = i20;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if ((i23 | 0) == 0) {
    i39 = 1;
   } else {
    i17 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i23;
    do {
     if ((i17 | 0) != 0) {
      i22 = i17 | 0;
      i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i19 | 0) == 0) {
       __ZN7WebCore16ApplicationCacheD1Ev(i17);
       __ZN3WTF8fastFreeEPv(i17);
       break;
      } else {
       HEAP32[i22 >> 2] = i19;
       break;
      }
     }
    } while (0);
    HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
    __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i18, i7, i7);
    __ZN7WebCore16ApplicationCache8setGroupEPNS_21ApplicationCacheGroupE(HEAP32[i13 >> 2] | 0, i1);
    i39 = 0;
   }
   if ((i25 | 0) != 0) {
    __ZN3WTF8fastFreeEPv(i25);
   }
   if ((i39 | 0) == 0) {
    break;
   }
   STACKTOP = i2;
   return;
  } else if ((i16 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
 } while (0);
 i16 = i1 + 88 | 0;
 i39 = HEAP32[i16 >> 2] | 0;
 if ((i39 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i39);
  _memset(i16 | 0, 0, 16) | 0;
 }
 HEAP32[i15 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = 0;
 i15 = i1 + 200 | 0;
 HEAP32[i15 >> 2] = -1;
 HEAP32[i15 + 4 >> 2] = -1;
 HEAP8[i1 + 177 | 0] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup24didFinishLoadingManifestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 56 | 0;
 i6 = i1 + 60 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) != 0;
 L1 : do {
  if (i7) {
   i8 = i1 + 196 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 + 4 | 0;
     i10 = i8 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i8 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    }
   } while (0);
   i9 = i1 + 192 | 0;
   do {
    if ((HEAP32[i9 >> 2] | 0) == 0) {
     HEAP32[i1 + 172 >> 2] = 1;
     HEAP32[i9 >> 2] = 0;
    } else {
     i11 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] | 0) + 224 | 0;
     i8 = __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i11 >> 2] | 0) | 0;
     if ((i8 | 0) != (__ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 224 >> 2] | 0) | 0)) {
      break L1;
     }
     i8 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i11 >> 2] | 0) | 0;
     i10 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[(HEAP32[i9 >> 2] | 0) + 224 >> 2] | 0) | 0;
     if ((_memcmp(i8 | 0, i10 | 0, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i11 >> 2] | 0) | 0) | 0) != 0) {
      break L1;
     }
     i11 = HEAP32[i9 >> 2] | 0;
     HEAP32[i1 + 172 >> 2] = 1;
     HEAP32[i9 >> 2] = 0;
     if ((i11 | 0) == 0) {
      break;
     }
     i10 = i11 + 4 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
   STACKTOP = i2;
   return;
  } else {
   i9 = i1 + 192 | 0;
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i8 = i1 + 196 | 0;
    i10 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    if ((i10 | 0) == 0) {
     break;
    }
    i8 = i10 + 4 | 0;
    i10 = i8 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i10 >> 2] = i11;
     break;
    }
    i11 = i8 - 4 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
    break;
   }
   i11 = HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 456 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i11 >> 2] | 0) + 316 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i3, H_BASE + 280 | 0);
   FUNCTION_TABLE_viiiii[i8 & 3](i11, 9, 3, i3, 0);
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   do {
    if ((i11 | 0) != 0) {
     i10 = i11 + 4 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   HEAP32[i1 + 172 >> 2] = 2;
   __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
   STACKTOP = i2;
   return;
  }
 } while (0);
 _memset(i4 | 0, 0, 44) | 0;
 i3 = i1 + 192 | 0;
 i11 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 224 >> 2] | 0) | 0;
 if (__ZN7WebCore13parseManifestERKNS_3URLEPKciRNS_8ManifestE(i1 + 4 | 0, i11, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[(HEAP32[i3 >> 2] | 0) + 224 >> 2] | 0) | 0, i4) | 0) {
  i11 = __ZN3WTF10fastMallocEj(80) | 0;
  __ZN7WebCore16ApplicationCacheC1Ev(i11);
  i9 = i1 + 84 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i11;
  do {
   if ((i8 | 0) != 0) {
    i11 = i8 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore16ApplicationCacheD1Ev(i8);
     __ZN3WTF8fastFreeEPv(i8);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16ApplicationCache8setGroupEPNS_21ApplicationCacheGroupE(HEAP32[i9 >> 2] | 0, i1);
  i8 = HEAP32[i1 + 88 >> 2] | 0;
  i10 = HEAP32[i1 + 92 >> 2] | 0;
  i11 = i8 + (i10 << 2) | 0;
  L52 : do {
   if ((HEAP32[i1 + 100 >> 2] | 0) != 0) {
    L54 : do {
     if ((i10 | 0) == 0) {
      i12 = i8;
     } else {
      i13 = i8;
      while (1) {
       i14 = HEAP32[i13 >> 2] | 0;
       if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
        i12 = i13;
        break L54;
       }
       i13 = i13 + 4 | 0;
       if ((i13 | 0) == (i11 | 0)) {
        break L52;
       }
      }
     }
    } while (0);
    if ((i12 | 0) == (i11 | 0)) {
     break;
    } else {
     i15 = i12;
    }
    while (1) {
     __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(i1, HEAP32[i15 >> 2] | 0, HEAP32[i9 >> 2] | 0);
     i13 = i15 + 4 | 0;
     if ((i13 | 0) == (i11 | 0)) {
      break L52;
     } else {
      i16 = i13;
     }
     while (1) {
      i13 = HEAP32[i16 >> 2] | 0;
      if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
       break;
      }
      i13 = i16 + 4 | 0;
      if ((i13 | 0) == (i11 | 0)) {
       break L52;
      } else {
       i16 = i13;
      }
     }
     if ((i16 | 0) == (i11 | 0)) {
      break;
     } else {
      i15 = i16;
     }
    }
   }
  } while (0);
  HEAP32[i1 + 56 >> 2] = 2;
  __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(3, 0, 0, i1 + 112 | 0);
  L66 : do {
   if (i7) {
    i16 = HEAP32[i6 >> 2] | 0;
    i15 = HEAP32[i16 + 8 >> 2] | 0;
    i11 = HEAP32[i16 + 12 >> 2] | 0;
    i12 = i15 + (i11 << 3) | 0;
    if ((HEAP32[i16 + 20 >> 2] | 0) == 0) {
     break;
    }
    L69 : do {
     if ((i11 | 0) == 0) {
      i17 = i15;
     } else {
      i16 = i15;
      while (1) {
       i8 = HEAP32[i16 >> 2] | 0;
       if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
        i17 = i16;
        break L69;
       }
       i16 = i16 + 8 | 0;
       if ((i16 | 0) == (i12 | 0)) {
        break L66;
       }
      }
     }
    } while (0);
    if ((i17 | 0) == (i12 | 0)) {
     break;
    } else {
     i18 = i17;
    }
    while (1) {
     i15 = HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 228 >> 2] | 0;
     if ((i15 & 1 | 0) != 0) {
      __ZN7WebCore21ApplicationCacheGroup8addEntryERKN3WTF6StringEj(i1, i18 | 0, i15);
     }
     i15 = i18 + 8 | 0;
     if ((i15 | 0) == (i12 | 0)) {
      break L66;
     } else {
      i19 = i15;
     }
     while (1) {
      i15 = HEAP32[i19 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       break;
      }
      i15 = i19 + 8 | 0;
      if ((i15 | 0) == (i12 | 0)) {
       break L66;
      } else {
       i19 = i15;
      }
     }
     if ((i19 | 0) == (i12 | 0)) {
      break;
     } else {
      i18 = i19;
     }
    }
   }
  } while (0);
  i19 = HEAP32[i4 + 12 >> 2] | 0;
  i18 = HEAP32[i4 + 16 >> 2] | 0;
  i17 = i19 + (i18 << 2) | 0;
  L84 : do {
   if ((HEAP32[i4 + 24 >> 2] | 0) != 0) {
    L86 : do {
     if ((i18 | 0) == 0) {
      i20 = i19;
     } else {
      i7 = i19;
      while (1) {
       i12 = HEAP32[i7 >> 2] | 0;
       if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
        i20 = i7;
        break L86;
       }
       i7 = i7 + 4 | 0;
       if ((i7 | 0) == (i17 | 0)) {
        break L84;
       }
      }
     }
    } while (0);
    if ((i20 | 0) == (i17 | 0)) {
     break;
    } else {
     i21 = i20;
    }
    while (1) {
     __ZN7WebCore21ApplicationCacheGroup8addEntryERKN3WTF6StringEj(i1, i21, 4);
     i7 = i21 + 4 | 0;
     if ((i7 | 0) == (i17 | 0)) {
      break L84;
     } else {
      i22 = i7;
     }
     while (1) {
      i7 = HEAP32[i22 >> 2] | 0;
      if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
       break;
      }
      i7 = i22 + 4 | 0;
      if ((i7 | 0) == (i17 | 0)) {
       break L84;
      } else {
       i22 = i7;
      }
     }
     if ((i22 | 0) == (i17 | 0)) {
      break;
     } else {
      i21 = i22;
     }
    }
   }
  } while (0);
  i22 = i4 + 32 | 0;
  i21 = i4 + 40 | 0;
  i17 = HEAP32[i21 >> 2] | 0;
  L98 : do {
   if ((i17 | 0) != 0) {
    i20 = i22 | 0;
    i19 = 0;
    i18 = i17;
    while (1) {
     if (i18 >>> 0 <= i19 >>> 0) {
      break;
     }
     __ZN7WebCore21ApplicationCacheGroup8addEntryERKN3WTF6StringEj(i1, (HEAP32[i20 >> 2] | 0) + (i19 * 96 & -1) + 48 | 0, 16);
     i7 = i19 + 1 | 0;
     if (i7 >>> 0 >= i17 >>> 0) {
      break L98;
     }
     i19 = i7;
     i18 = HEAP32[i21 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  __ZN7WebCore16ApplicationCache18setOnlineWhitelistERKN3WTF6VectorINS_3URLELj0ENS1_15CrashOnOverflowEEE(HEAP32[i9 >> 2] | 0, i4 | 0);
  __ZN7WebCore16ApplicationCache15setFallbackURLsERKN3WTF6VectorINSt3__14pairINS_3URLES5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i9 >> 2] | 0, i22);
  HEAP8[(HEAP32[i9 >> 2] | 0) + 32 | 0] = HEAP8[i4 + 44 | 0] & 1;
  HEAP32[i1 + 152 >> 2] = HEAP32[i1 + 144 >> 2];
  HEAP32[i1 + 156 >> 2] = 0;
  i9 = __ZN7WebCore12cacheStorageEv() | 0;
  i22 = i1 + 200 | 0;
  if (!(__ZN7WebCore23ApplicationCacheStorage45calculateRemainingSizeForOriginExcludingCacheEPKNS_14SecurityOriginEPNS_16ApplicationCacheERx(i9, HEAP32[i1 + 52 >> 2] | 0, HEAP32[i6 >> 2] | 0, i22) | 0)) {
   HEAP32[i22 >> 2] = -1;
   HEAP32[i22 + 4 >> 2] = 2147483647;
  }
  __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
 } else {
  i22 = HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 456 >> 2] | 0;
  i6 = HEAP32[(HEAP32[i22 >> 2] | 0) + 316 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 192 | 0);
  FUNCTION_TABLE_viiiii[i6 & 3](i22, 9, 3, i5, 0);
  i22 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i22 | 0) != 0) {
    i5 = i22 | 0;
    i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
  i22 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  do {
   if ((i22 | 0) != 0) {
    i3 = i22 + 4 | 0;
    i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 15](i22);
     break;
    } else {
     HEAP32[i3 >> 2] = i6;
     break;
    }
   }
  } while (0);
  HEAP32[i1 + 172 >> 2] = 2;
  __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
 }
 __ZN7WebCore8ManifestD2Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 72 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 88 | 0;
 i12 = i1 + 160 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 128 >> 2] | 0;
 i15 = HEAP32[i1 + 188 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i16 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i13 + 32 >> 2] | 0) | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18didFailLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERKNS_13ResourceErrorE(i16, i15, i14, i3);
  }
 } while (0);
 if ((HEAP32[i1 + 196 >> 2] | 0) == (i2 | 0)) {
  __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
  i3 = i1 + 192 | 0;
  i14 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  do {
   if ((i14 | 0) != 0) {
    i3 = i14 + 4 | 0;
    i15 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i15 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
     break;
    } else {
     HEAP32[i3 >> 2] = i15;
     break;
    }
   }
  } while (0);
  HEAP32[i1 + 172 >> 2] = 2;
  __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
  STACKTOP = i4;
  return;
 }
 i14 = i1 + 184 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 L15 : do {
  if ((i15 | 0) == 0) {
   i3 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(i2) | 0) | 0;
   i13 = HEAP32[i1 + 140 >> 2] | 0;
   i16 = HEAP32[i1 + 132 >> 2] | 0;
   i17 = i3 | 0;
   i3 = HEAP32[i17 >> 2] | 0;
   i18 = HEAP32[i3 + 16 >> 2] | 0;
   if (i18 >>> 0 > 127 >>> 0) {
    i19 = i18 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
   }
   if ((i16 | 0) == 0) {
    i20 = 0;
    break;
   }
   i3 = (i19 >>> 23) + ~i19 | 0;
   i18 = i3 << 12 ^ i3;
   i3 = i18 >>> 7 ^ i18;
   i18 = i3 << 2 ^ i3;
   i3 = i18 >>> 20 ^ i18 | 1;
   i18 = i19;
   i21 = 0;
   while (1) {
    i22 = i18 & i13;
    i23 = i16 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i20 = 0;
     break L15;
    } else if ((i25 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i24, HEAP32[i17 >> 2] | 0) | 0) {
      break;
     }
    }
    i24 = (i21 | 0) == 0 ? i3 : i21;
    i18 = i24 + i22 | 0;
    i21 = i24;
   }
   if ((i23 | 0) == 0) {
    i20 = 0;
    break;
   }
   i20 = HEAP32[i16 + (i22 << 3) + 4 >> 2] | 0;
  } else {
   i20 = HEAP32[i15 + 228 >> 2] | 0;
  }
 } while (0);
 i15 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(i2) | 0) | 0;
 i2 = i8 | 0;
 i22 = HEAP32[i15 >> 2] | 0;
 HEAP32[i2 >> 2] = i22;
 if ((i22 | 0) != 0) {
  i23 = i22 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
 }
 i23 = i15 + 4 | 0;
 i22 = i8 + 4 | 0;
 i19 = HEAP8[i22] & -2 | HEAP8[i23] & 1;
 HEAP8[i22] = i19;
 HEAP8[i22] = i19 & -3 | HEAP8[i23] & 2;
 HEAP32[i8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 HEAP32[i8 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
 HEAP32[i8 + 20 >> 2] = HEAP32[i15 + 20 >> 2];
 HEAP32[i8 + 24 >> 2] = HEAP32[i15 + 24 >> 2];
 HEAP32[i8 + 28 >> 2] = HEAP32[i15 + 28 >> 2];
 HEAP32[i8 + 32 >> 2] = HEAP32[i15 + 32 >> 2];
 HEAP32[i8 + 36 >> 2] = HEAP32[i15 + 36 >> 2];
 HEAP32[i8 + 40 >> 2] = HEAP32[i15 + 40 >> 2];
 HEAP32[i8 + 44 >> 2] = HEAP32[i15 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i8) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i8);
 }
 i15 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 + 4 | 0;
   i23 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i23 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i15 = i8 | 0;
 __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i1 + 132 | 0, i15) | 0;
 if ((i20 & 20 | 0) == 0) {
  i23 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(HEAP32[i1 + 60 >> 2] | 0, i15) | 0;
  i15 = HEAP32[i1 + 84 >> 2] | 0;
  i14 = HEAP32[i23 + 224 >> 2] | 0;
  if ((i14 | 0) != 0) {
   i19 = i14 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  }
  i19 = __ZN3WTF10fastMallocEj(256) | 0;
  i22 = i5 | 0;
  HEAP32[i22 >> 2] = i14;
  __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i19, i8, i23 + 56 | 0, i20, i5, i23 + 248 | 0);
  i23 = i11 | 0;
  HEAP32[i23 >> 2] = i19;
  i19 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i19 | 0) != 0) {
    i22 = i19 | 0;
    i5 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
    if ((i5 | 0) == 0) {
     __ZN7WebCore12SharedBufferD1Ev(i19);
     __ZN3WTF8fastFreeEPv(i19);
     break;
    } else {
     HEAP32[i22 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i15, i11);
  i11 = HEAP32[i23 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i23 = i11 + 4 | 0;
    i15 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
    if ((i15 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
     break;
    } else {
     HEAP32[i23 >> 2] = i15;
     break;
    }
   }
  } while (0);
  __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
 } else {
  i11 = HEAP32[(HEAP32[i12 >> 2] | 0) + 456 >> 2] | 0;
  i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 316 >> 2] | 0;
  __ZNK7WebCore3URL30stringCenterEllipsizedToLengthEj(i10, i8, 1024);
  i8 = i10 | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    i26 = 0;
    i27 = 1;
   } else {
    i15 = i10 | 0;
    i23 = HEAP32[i15 >> 2] | 0;
    i19 = i23 + 2 | 0;
    HEAP32[i15 >> 2] = i23 + 4;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     i28 = HEAP32[i15 >> 2] | 0;
    } else {
     HEAP32[i15 >> 2] = i19;
     i28 = i19;
    }
    i19 = i28 + 2 | 0;
    HEAP32[i15 >> 2] = i28 + 4;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i10);
     i26 = i10;
     i27 = 0;
     break;
    } else {
     HEAP32[i15 >> 2] = i19;
     i26 = i10;
     i27 = 0;
     break;
    }
   }
  } while (0);
  HEAP32[i7 >> 2] = H_BASE + 56;
  i10 = i7 + 4 | 0;
  HEAP32[i10 >> 2] = i26;
  i28 = (i26 | 0) == 0;
  if (!i28) {
   i19 = i26 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
  }
  __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 32 | 0);
  i7 = i6 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i7 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i10 = i7 | 0;
    i19 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i10 >> 2] = i19;
     break;
    }
   }
  } while (0);
  if ((i6 | 0) == 0) {
   _WTFCrash();
  }
  i7 = i9 | 0;
  HEAP32[i7 >> 2] = i6;
  FUNCTION_TABLE_viiiii[i12 & 3](i11, 5, 3, i9, 0);
  i9 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i11;
     break;
    }
   }
  } while (0);
  do {
   if (!i28) {
    i9 = i26 | 0;
    i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     break;
    } else {
     HEAP32[i9 >> 2] = i11;
     break;
    }
   }
  } while (0);
  do {
   if (!i27) {
    i28 = i26 | 0;
    i11 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     break;
    } else {
     HEAP32[i28 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i26 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i26 | 0) != 0) {
    i8 = i26 | 0;
    i27 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i26);
     break;
    } else {
     HEAP32[i8 >> 2] = i27;
     break;
    }
   }
  } while (0);
  __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
  i26 = i1 + 192 | 0;
  i27 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = 0;
  do {
   if ((i27 | 0) != 0) {
    i26 = i27 + 4 | 0;
    i8 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 15](i27);
     break;
    } else {
     HEAP32[i26 >> 2] = i8;
     break;
    }
   }
  } while (0);
  HEAP32[i1 + 172 >> 2] = 2;
  __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 | 0;
 i27 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i27 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i27;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup27finishedLoadingMainResourceEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 88 | 0;
 i11 = i3 + 96 | 0;
 i12 = i3 + 104 | 0;
 i13 = i3 + 112 | 0;
 i14 = i3 + 120 | 0;
 i15 = i3 + 128 | 0;
 HEAP32[i7 >> 2] = i2;
 i16 = __ZNK7WebCore14DocumentLoader3urlEv(i2) | 0;
 i17 = i8 | 0;
 i18 = HEAP32[i16 >> 2] | 0;
 HEAP32[i17 >> 2] = i18;
 if ((i18 | 0) == 0) {
  i19 = 0;
  i20 = i8 + 4 | 0;
 } else {
  i21 = i18 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
  i21 = i8 + 4 | 0;
  i19 = HEAP8[i21] & -2;
  i20 = i21;
 }
 i21 = i16 + 4 | 0;
 i18 = i19 | HEAP8[i21] & 1;
 HEAP8[i20] = i18;
 HEAP8[i20] = i18 & -3 | HEAP8[i21] & 2;
 HEAP32[i8 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 HEAP32[i8 + 16 >> 2] = HEAP32[i16 + 16 >> 2];
 HEAP32[i8 + 20 >> 2] = HEAP32[i16 + 20 >> 2];
 HEAP32[i8 + 24 >> 2] = HEAP32[i16 + 24 >> 2];
 HEAP32[i8 + 28 >> 2] = HEAP32[i16 + 28 >> 2];
 HEAP32[i8 + 32 >> 2] = HEAP32[i16 + 32 >> 2];
 HEAP32[i8 + 36 >> 2] = HEAP32[i16 + 36 >> 2];
 HEAP32[i8 + 40 >> 2] = HEAP32[i16 + 40 >> 2];
 HEAP32[i8 + 44 >> 2] = HEAP32[i16 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i8) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i8);
 }
 i16 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i16 | 0) == 2) {
   i21 = HEAP32[i2 + 1704 >> 2] | 0;
   i18 = i12 | 0;
   HEAP32[i18 >> 2] = 0;
   __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i21, i12);
   i21 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i18 = i21 | 0;
     i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i21);
      __ZN3WTF8fastFreeEPv(i21);
      break;
     } else {
      HEAP32[i18 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 112 | 0, i7) | 0;
   i21 = HEAP32[i7 >> 2] | 0;
   i20 = HEAP32[i21 + 12 >> 2] | 0;
   if ((i20 | 0) == 0) {
    i22 = 60;
    break;
   }
   i18 = HEAP32[i20 + 456 >> 2] | 0;
   i20 = HEAP32[(HEAP32[i18 >> 2] | 0) + 288 >> 2] | 0;
   i19 = i21 + 4 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i19 >> 2] = H_BASE + 712;
   HEAP32[i19 + 4 >> 2] = i21;
   HEAP32[i19 + 8 >> 2] = 1;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i21 = i4 | 0;
   HEAP32[i21 >> 2] = i19;
   FUNCTION_TABLE_vii[i20 & 15](i18, i4);
   i18 = HEAP32[i21 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i22 = 60;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 15](i18);
   i22 = 60;
  } else if ((i16 | 0) == 3) {
   i18 = i1 + 84 | 0;
   i21 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(HEAP32[i18 >> 2] | 0, i8 | 0) | 0;
   if ((i21 | 0) != 0) {
    if ((HEAP32[i21 + 228 >> 2] & 1 | 0) != 0) {
     i22 = 60;
     break;
    }
    __ZN7WebCore24ApplicationCacheResource7addTypeEj(i21, 1);
    i22 = 60;
    break;
   }
   __ZNK7WebCore14DocumentLoader16mainResourceDataEv(i13, i2);
   i21 = i13 | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i21 = HEAP32[i18 >> 2] | 0;
   i18 = i2 + 784 | 0;
   i19 = (i20 | 0) == 0;
   do {
    if (i19) {
     i23 = 0;
    } else {
     i24 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(i20) | 0;
     if ((i24 | 0) == 0) {
      i23 = 0;
      break;
     }
     i25 = i24 | 0;
     HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
     i23 = i24;
    }
   } while (0);
   i24 = i15 | 0;
   HEAP32[i24 >> 2] = 0;
   i25 = __ZN3WTF10fastMallocEj(256) | 0;
   i26 = i6 | 0;
   HEAP32[i26 >> 2] = i23;
   __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i25, i8, i18, 1, i6, i15);
   i27 = i14 | 0;
   HEAP32[i27 >> 2] = i25;
   i25 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i26 = i25 | 0;
     i28 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i25);
      __ZN3WTF8fastFreeEPv(i25);
      break;
     } else {
      HEAP32[i26 >> 2] = i28;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i21, i14);
   i25 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i18 = i25 + 4 | 0;
     i28 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
      break;
     } else {
      HEAP32[i18 >> 2] = i28;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i27 = i25 | 0;
     i21 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      break;
     } else {
      HEAP32[i27 >> 2] = i21;
      break;
     }
    }
   } while (0);
   if (i19) {
    i22 = 60;
    break;
   }
   i25 = i20 + 4 | 0;
   i24 = i25 | 0;
   i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i24 >> 2] = i21;
    i22 = 60;
    break;
   }
   i21 = i25 - 4 | 0;
   if ((i21 | 0) == 0) {
    i22 = 60;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 15](i21);
   i22 = 60;
  } else if ((i16 | 0) == 1) {
   i21 = i1 + 60 | 0;
   __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(i1, i2, HEAP32[i21 >> 2] | 0);
   i25 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(HEAP32[i21 >> 2] | 0, i8 | 0) | 0;
   if ((i25 | 0) != 0) {
    if ((HEAP32[i25 + 228 >> 2] & 1 | 0) != 0) {
     i22 = 60;
     break;
    }
    __ZN7WebCore24ApplicationCacheResource7addTypeEj(i25, 1);
    i22 = 60;
    break;
   }
   __ZNK7WebCore14DocumentLoader16mainResourceDataEv(i9, i2);
   i25 = i9 | 0;
   i24 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   i25 = HEAP32[i21 >> 2] | 0;
   i21 = i2 + 784 | 0;
   i27 = (i24 | 0) == 0;
   do {
    if (i27) {
     i29 = 0;
    } else {
     i28 = __ZNK7WebCore14ResourceBuffer12sharedBufferEv(i24) | 0;
     if ((i28 | 0) == 0) {
      i29 = 0;
      break;
     }
     i18 = i28 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
     i29 = i28;
    }
   } while (0);
   i20 = i11 | 0;
   HEAP32[i20 >> 2] = 0;
   i19 = __ZN3WTF10fastMallocEj(256) | 0;
   i28 = i5 | 0;
   HEAP32[i28 >> 2] = i29;
   __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i19, i8, i21, 1, i5, i11);
   i18 = i10 | 0;
   HEAP32[i18 >> 2] = i19;
   i19 = HEAP32[i28 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i28 = i19 | 0;
     i26 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i19);
      __ZN3WTF8fastFreeEPv(i19);
      break;
     } else {
      HEAP32[i28 >> 2] = i26;
      break;
     }
    }
   } while (0);
   __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i25, i10);
   i19 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i19 + 4 | 0;
     i26 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
      break;
     } else {
      HEAP32[i21 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i18 = i19 | 0;
     i25 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i18 >> 2] = i25;
      break;
     }
    }
   } while (0);
   if (i27) {
    i22 = 60;
    break;
   }
   i19 = i24 + 4 | 0;
   i20 = i19 | 0;
   i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i25 | 0) != 0) {
    HEAP32[i20 >> 2] = i25;
    i22 = 60;
    break;
   }
   i25 = i19 - 4 | 0;
   if ((i25 | 0) == 0) {
    i22 = 60;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
   i22 = 60;
  } else if ((i16 | 0) != 0) {
   i22 = 60;
  }
 } while (0);
 if ((i22 | 0) == 60) {
  i22 = i1 + 108 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
  __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i1);
 }
 i1 = HEAP32[i17 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = i1 | 0;
 i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
 if ((i22 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i17 >> 2] = i22;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup11selectCacheEPNS_5FrameERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 72 | 0;
 i9 = i3 + 120 | 0;
 i10 = i3 + 128 | 0;
 i11 = i1 + 36 | 0;
 if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 188 | 0] & 2) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i1 + 456 | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0;
 i14 = i1 + 40 | 0;
 if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i13, HEAP32[(HEAP32[(__ZNK7WebCore9FrameTree3topEv(i14) | 0) + 456 >> 2] | 0) + 100 >> 2] | 0, 1) | 0)) {
  STACKTOP = i3;
  return;
 }
 i13 = i1 + 80 | 0;
 i15 = i1 + 128 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 HEAP32[i6 >> 2] = i16;
 i17 = HEAP32[i2 >> 2] | 0;
 if ((i17 | 0) == 0) {
  if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 188 | 0] & 2) == 0) {
   STACKTOP = i3;
   return;
  }
  i18 = HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0;
  if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i18, HEAP32[(HEAP32[(__ZNK7WebCore9FrameTree3topEv(i14) | 0) + 456 >> 2] | 0) + 100 >> 2] | 0, 1) | 0)) {
   STACKTOP = i3;
   return;
  }
  i14 = HEAP32[i15 >> 2] | 0;
  i15 = HEAP32[(HEAP32[i14 + 1704 >> 2] | 0) + 32 >> 2] | 0;
  if ((i15 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i18 = i15 + 4 | 0;
  __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(HEAP32[i18 >> 2] | 0, i14, i15);
  __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(HEAP32[i18 >> 2] | 0, i1, 0);
  STACKTOP = i3;
  return;
 }
 i18 = i7 | 0;
 HEAP32[i18 >> 2] = i17;
 i15 = i17 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
 i15 = HEAP8[i2 + 4 | 0] | 0;
 i17 = i7 + 4 | 0;
 HEAP8[i17] = HEAP8[i17] & -4 | i15 & 1 | i15 & 2;
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i7 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i7 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i7 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i7 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i7 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i7 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i7 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i7) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i7);
 }
 i2 = i16 + 1704 | 0;
 i15 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i17 = __ZN7WebCore14DocumentLoader7requestEv(__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i13) | 0) | 0;
   if (!(__ZN7WebCore16ApplicationCache23requestIsHTTPOrHTTPSGetERKNS_15ResourceRequestE(i17) | 0)) {
    break;
   }
   if (!(__ZN7WebCore27protocolHostAndPortAreEqualERKNS_3URLES2_(i7, __ZNK7WebCore19ResourceRequestBase3urlEv(i17 | 0) | 0) | 0)) {
    break;
   }
   if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 194 | 0] & 64) == 0) {
    i17 = __ZN7WebCore23ApplicationCacheStorage22findOrCreateCacheGroupERKNS_3URLE(__ZN7WebCore12cacheStorageEv() | 0, i7) | 0;
    __ZN7WebCore20ApplicationCacheHost33setCandidateApplicationCacheGroupEPNS_21ApplicationCacheGroupE(HEAP32[i2 >> 2] | 0, i17);
    __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i10, i17 + 88 | 0, i6, i6);
    i14 = i17 + 108 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(i17, i1, 0);
    break;
   }
   i17 = i16 + 12 | 0;
   i14 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i19 = HEAP32[i14 + 456 >> 2] | 0;
     i20 = HEAP32[(HEAP32[i19 >> 2] | 0) + 288 >> 2] | 0;
     i21 = i16 + 4 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     i21 = __ZN3WTF10fastMallocEj(20) | 0;
     HEAP32[i21 >> 2] = H_BASE + 712;
     HEAP32[i21 + 4 >> 2] = i16;
     HEAP32[i21 + 8 >> 2] = 0;
     HEAP32[i21 + 12 >> 2] = 0;
     HEAP32[i21 + 16 >> 2] = 0;
     i22 = i4 | 0;
     HEAP32[i22 >> 2] = i21;
     FUNCTION_TABLE_vii[i20 & 15](i19, i4);
     i19 = HEAP32[i22 >> 2] | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
    }
   } while (0);
   i14 = HEAP32[i17 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i19 = HEAP32[i14 + 456 >> 2] | 0;
   i14 = HEAP32[(HEAP32[i19 >> 2] | 0) + 288 >> 2] | 0;
   i22 = i16 + 4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i22 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i22 >> 2] = H_BASE + 712;
   HEAP32[i22 + 4 >> 2] = i16;
   HEAP32[i22 + 8 >> 2] = 1;
   HEAP32[i22 + 12 >> 2] = 0;
   HEAP32[i22 + 16 >> 2] = 0;
   i20 = i5 | 0;
   HEAP32[i20 >> 2] = i22;
   FUNCTION_TABLE_vii[i14 & 15](i19, i5);
   i19 = HEAP32[i20 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 15](i19);
  } else {
   i19 = i15 + 4 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i18 >> 2] | 0, HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] | 0) | 0) {
    i20 = HEAP32[i19 >> 2] | 0;
    if ((HEAP8[i20 + 168 | 0] & 1) != 0) {
     break;
    }
    __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(i20, i16, i15);
    __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(HEAP32[i19 >> 2] | 0, i1, 0);
    break;
   }
   i19 = __ZNK7WebCore14DocumentLoader11responseURLEv(i16) | 0;
   i20 = i8 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   HEAP32[i20 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i22 = i14 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 2;
   }
   i22 = i19 + 4 | 0;
   i14 = i8 + 4 | 0;
   i21 = HEAP8[i14] & -2 | HEAP8[i22] & 1;
   HEAP8[i14] = i21;
   HEAP8[i14] = i21 & -3 | HEAP8[i22] & 2;
   HEAP32[i8 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   HEAP32[i8 + 16 >> 2] = HEAP32[i19 + 16 >> 2];
   HEAP32[i8 + 20 >> 2] = HEAP32[i19 + 20 >> 2];
   HEAP32[i8 + 24 >> 2] = HEAP32[i19 + 24 >> 2];
   HEAP32[i8 + 28 >> 2] = HEAP32[i19 + 28 >> 2];
   HEAP32[i8 + 32 >> 2] = HEAP32[i19 + 32 >> 2];
   HEAP32[i8 + 36 >> 2] = HEAP32[i19 + 36 >> 2];
   HEAP32[i8 + 40 >> 2] = HEAP32[i19 + 40 >> 2];
   HEAP32[i8 + 44 >> 2] = HEAP32[i19 + 44 >> 2];
   if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i8) | 0) {
    __ZN7WebCore3URL24removeFragmentIdentifierEv(i8);
   }
   i19 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(i15, i8 | 0) | 0;
   i22 = (HEAP32[i19 + 232 >> 2] | 0) == 0;
   __ZN7WebCore24ApplicationCacheResource7addTypeEj(i19, 8);
   if (!i22) {
    __ZN7WebCore23ApplicationCacheStorage16storeUpdatedTypeEPNS_24ApplicationCacheResourceEPNS_16ApplicationCacheE(__ZN7WebCore12cacheStorageEv() | 0, i19, i15) | 0;
   }
   i19 = HEAP32[(HEAP32[i12 >> 2] | 0) + 100 >> 2] | 0;
   i22 = __ZNK7WebCore14DocumentLoader3urlEv(i16) | 0;
   __ZNK7WebCore11FrameLoader8referrerEv(i9, i13);
   __ZN7WebCore19NavigationScheduler22scheduleLocationChangeEPNS_14SecurityOriginERKN3WTF6StringES6_bb(i1 + 376 | 0, i19, i22, i9, 1, 1);
   i22 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i19 = i22 | 0;
     i21 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i19 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i20 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i17 = i22 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i22);
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i18 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = i9 | 0;
 i1 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i18 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 + 56 | 0;
 if (((HEAP32[i11 >> 2] | 0) - 1 | 0) >>> 0 < 2 >>> 0) {
  if ((i3 | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i2 + 128 | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i13 = HEAP32[i12 + 12 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i14 = HEAP32[i13 + 456 >> 2] | 0;
    i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + 288 >> 2] | 0;
    i16 = i12 + 4 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
    i16 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i16 >> 2] = H_BASE + 712;
    HEAP32[i16 + 4 >> 2] = i12;
    HEAP32[i16 + 8 >> 2] = 0;
    HEAP32[i16 + 12 >> 2] = 0;
    HEAP32[i16 + 16 >> 2] = 0;
    i17 = i9 | 0;
    HEAP32[i17 >> 2] = i16;
    FUNCTION_TABLE_vii[i15 & 15](i14, i9);
    i14 = HEAP32[i17 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
   }
  } while (0);
  if ((HEAP32[i11 >> 2] | 0) != 2) {
   STACKTOP = i4;
   return;
  }
  i9 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i9 + 12 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i12 = HEAP32[i3 + 456 >> 2] | 0;
  i3 = HEAP32[(HEAP32[i12 >> 2] | 0) + 288 >> 2] | 0;
  i13 = i9 + 4 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
  i13 = __ZN3WTF10fastMallocEj(20) | 0;
  HEAP32[i13 >> 2] = H_BASE + 712;
  HEAP32[i13 + 4 >> 2] = i9;
  HEAP32[i13 + 8 >> 2] = 3;
  HEAP32[i13 + 12 >> 2] = 0;
  HEAP32[i13 + 16 >> 2] = 0;
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = i13;
  FUNCTION_TABLE_vii[i3 & 15](i12, i8);
  i8 = HEAP32[i9 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[i2 + 36 >> 2] | 0) + 194 | 0] & 64) != 0) {
  i8 = i2 + 128 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i12 = HEAP32[i9 + 12 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i3 = HEAP32[i12 + 456 >> 2] | 0;
    i13 = HEAP32[(HEAP32[i3 >> 2] | 0) + 288 >> 2] | 0;
    i14 = i9 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i14 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i14 >> 2] = H_BASE + 712;
    HEAP32[i14 + 4 >> 2] = i9;
    HEAP32[i14 + 8 >> 2] = 0;
    HEAP32[i14 + 12 >> 2] = 0;
    HEAP32[i14 + 16 >> 2] = 0;
    i17 = i6 | 0;
    HEAP32[i17 >> 2] = i14;
    FUNCTION_TABLE_vii[i13 & 15](i3, i6);
    i3 = HEAP32[i17 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
   }
  } while (0);
  i6 = HEAP32[i8 >> 2] | 0;
  i8 = HEAP32[i6 + 12 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = HEAP32[i8 + 456 >> 2] | 0;
  i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + 288 >> 2] | 0;
  i12 = i6 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  i12 = __ZN3WTF10fastMallocEj(20) | 0;
  HEAP32[i12 >> 2] = H_BASE + 712;
  HEAP32[i12 + 4 >> 2] = i6;
  HEAP32[i12 + 8 >> 2] = 2;
  HEAP32[i12 + 12 >> 2] = 0;
  HEAP32[i12 + 16 >> 2] = 0;
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = i12;
  FUNCTION_TABLE_vii[i8 & 15](i9, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  STACKTOP = i4;
  return;
 }
 HEAP32[i1 + 160 >> 2] = i2;
 HEAP32[i11 >> 2] = 1;
 __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(0, 0, 0, i1 + 112 | 0);
 i11 = i1 + 60 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 128 >> 2] | 0;
  i2 = HEAP32[i6 + 12 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i9 = HEAP32[i2 + 456 >> 2] | 0;
    i8 = HEAP32[(HEAP32[i9 >> 2] | 0) + 288 >> 2] | 0;
    i12 = i6 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i12 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i12 >> 2] = H_BASE + 712;
    HEAP32[i12 + 4 >> 2] = i6;
    HEAP32[i12 + 8 >> 2] = 0;
    HEAP32[i12 + 12 >> 2] = 0;
    HEAP32[i12 + 16 >> 2] = 0;
    i3 = i7 | 0;
    HEAP32[i3 >> 2] = i12;
    FUNCTION_TABLE_vii[i8 & 15](i9, i7);
    i9 = HEAP32[i3 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
   }
  } while (0);
  i7 = HEAP32[i11 >> 2] | 0;
  i11 = i1 + 196 | 0;
  i6 = i1 + 4 | 0;
  if ((i7 | 0) == 0) {
   i18 = 0;
   i19 = i11;
   i20 = i6;
  } else {
   i21 = i7;
   i22 = i11;
   i23 = i6;
   i24 = 23;
  }
 } else {
  i21 = i5;
  i22 = i1 + 196 | 0;
  i23 = i1 + 4 | 0;
  i24 = 23;
 }
 if ((i24 | 0) == 23) {
  i18 = HEAP32[i21 + 28 >> 2] | 0;
  i19 = i22;
  i20 = i23;
 }
 __ZN7WebCore21ApplicationCacheGroup20createResourceHandleERKNS_3URLEPNS_24ApplicationCacheResourceE(i10, i1, i20, i18);
 i18 = i10 | 0;
 i10 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i20 = i19 | 0;
 i19 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i10;
 do {
  if ((i19 | 0) != 0) {
   i10 = i19 + 4 | 0;
   i20 = i10 | 0;
   i1 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i20 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  }
 } while (0);
 i19 = HEAP32[i18 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i18 = i19 + 4 | 0;
 i19 = i18 | 0;
 i1 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i19 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
 i1 = i18 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i4;
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
function __ZN7WebCore21ApplicationCacheGroup26didReceiveManifestResponseERKNS_16ResourceResponseE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 | 0;
 do {
  if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) != 404) {
   if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) == 410) {
    break;
   }
   if ((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) == 304) {
    STACKTOP = i3;
    return;
   }
   if (((__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i8) | 0) - 200 | 0) >>> 0 > 99 >>> 0) {
    i9 = HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 456 >> 2] | 0;
    i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 316 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i5, H_BASE + 480 | 0);
    FUNCTION_TABLE_viiiii[i10 & 3](i9, 9, 3, i5, 0);
    i9 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i10 = i9 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
    i9 = i1 + 192 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    do {
     if ((i11 | 0) != 0) {
      i9 = i11 + 4 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    HEAP32[i1 + 172 >> 2] = 2;
    __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
    STACKTOP = i3;
    return;
   }
   i11 = __ZNK7WebCore20ResourceResponseBase3urlEv(i8) | 0;
   i10 = i1 + 196 | 0;
   i9 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i10 >> 2] | 0) | 0) | 0;
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i11 >> 2] | 0, HEAP32[i9 >> 2] | 0) | 0)) {
    i9 = HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 456 >> 2] | 0;
    i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 316 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i6, H_BASE + 392 | 0);
    FUNCTION_TABLE_viiiii[i11 & 3](i9, 9, 3, i6, 0);
    i9 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i9 | 0) != 0) {
      i11 = i9 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i9);
       break;
      } else {
       HEAP32[i11 >> 2] = i12;
       break;
      }
     }
    } while (0);
    __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
    i9 = i1 + 192 | 0;
    i12 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    do {
     if ((i12 | 0) != 0) {
      i9 = i12 + 4 | 0;
      i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) == 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
       break;
      } else {
       HEAP32[i9 >> 2] = i11;
       break;
      }
     }
    } while (0);
    HEAP32[i1 + 172 >> 2] = 2;
    __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
    STACKTOP = i3;
    return;
   }
   i12 = __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(HEAP32[i10 >> 2] | 0) | 0) | 0;
   i11 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore12SharedBufferC1Ev(i11);
   i9 = i7 | 0;
   HEAP32[i9 >> 2] = 0;
   i13 = __ZN3WTF10fastMallocEj(256) | 0;
   i14 = i4 | 0;
   HEAP32[i14 >> 2] = i11;
   __ZN7WebCore24ApplicationCacheResourceC1ERKNS_3URLERKNS_16ResourceResponseEjN3WTF10PassRefPtrINS_12SharedBufferEEERKNS7_6StringE(i13, i12, i2, 2, i4, i7);
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 | 0;
     i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN7WebCore12SharedBufferD1Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i14 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i12 = i1 + 192 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i13;
   do {
    if ((i10 | 0) != 0) {
     i12 = i10 + 4 | 0;
     i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
      break;
     } else {
      HEAP32[i12 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i13 = i10 | 0;
   i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i13 >> 2] = i11;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 __ZN7WebCore21ApplicationCacheGroup16manifestNotFoundEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup20createResourceHandleERKNS_3URLEPNS_24ApplicationCacheResourceE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 384 | 0;
 i6 = i5 | 0;
 i7 = i5 + 184 | 0;
 i8 = i5 + 192 | 0;
 i9 = i5 + 200 | 0;
 i10 = i5 + 208 | 0;
 i11 = i5 + 216 | 0;
 i12 = i6 | 0;
 __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i12, i3, 0);
 _memset(i6 + 160 | 0, 0, 19) | 0;
 HEAP32[i6 + 180 >> 2] = 15;
 i3 = i2 + 160 | 0;
 __ZN7WebCore11FrameLoader14applyUserAgentERNS_15ResourceRequestE((HEAP32[i3 >> 2] | 0) + 80 | 0, i6);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 168 | 0);
 __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i12, H_BASE + 608 | 0, i7);
 i13 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i14;
    break;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) != 0) {
   i13 = i4 + 56 | 0;
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i8, i13, H_BASE + 152 | 0);
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldEPKc(i9, i13, H_BASE + 144 | 0);
   i13 = i8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i7 = (i14 | 0) == 0;
   if (i7) {
    i15 = 8;
   } else {
    if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
     i15 = 8;
    } else {
     i15 = 12;
    }
   }
   do {
    if ((i15 | 0) == 8) {
     i16 = HEAP32[i9 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      i17 = i16;
      i15 = 16;
      break;
     }
     if (i7) {
      i15 = 13;
      break;
     }
     if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
      i15 = 13;
     } else {
      i15 = 12;
     }
    }
   } while (0);
   if ((i15 | 0) == 12) {
    __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i12, H_BASE + 120 | 0, i8);
    i15 = 13;
   }
   do {
    if ((i15 | 0) == 13) {
     i14 = i9 | 0;
     i7 = HEAP32[i14 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
      i17 = i7;
      i15 = 16;
      break;
     }
     __ZN7WebCore19ResourceRequestBase18setHTTPHeaderFieldEPKcRKN3WTF6StringE(i12, H_BASE + 104 | 0, i9);
     i7 = HEAP32[i14 >> 2] | 0;
     if ((i7 | 0) != 0) {
      i17 = i7;
      i15 = 16;
     }
    }
   } while (0);
   do {
    if ((i15 | 0) == 16) {
     i7 = i17 | 0;
     i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i7 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i7 = i14 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14ResourceHandle6createEPNS_17NetworkingContextERKNS_15ResourceRequestEPNS_20ResourceHandleClientEbb(i10, __ZNK7WebCore11FrameLoader17networkingContextEv((HEAP32[i3 >> 2] | 0) + 80 | 0) | 0, i6, i2 | 0, 0, 1);
 i17 = i10 | 0;
 i10 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 i17 = i2 + 188 | 0;
 HEAP32[i17 >> 2] = __ZN7WebCore15ProgressTracker22createUniqueIdentifierEv() | 0;
 i2 = i11 | 0;
 __ZN7WebCore20ResourceResponseBaseC2Ev(i2);
 HEAP8[i11 + 160 | 0] = 0;
 i15 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[i15 + 128 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i9 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i15 + 32 >> 2] | 0) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation19willSendRequestImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderERNS_15ResourceRequestERKNS_16ResourceResponseE(i9, i3, i17, i6, i11);
  }
 } while (0);
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) == 0) {
  __ZN7WebCore20ResourceResponseBaseD2Ev(i2);
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 i1 = i10 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 __ZN7WebCore20ResourceResponseBaseD2Ev(i2);
 i2 = i10 + 4 | 0;
 i10 = i2 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i10 >> 2] = i1;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 i1 = i2 - 4 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 __ZN7WebCore15ResourceRequestD2Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup25failedLoadingMainResourceEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 HEAP32[i7 >> 2] = i2;
 i10 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i10 | 0) == 3) {
   __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 112 | 0, i7) | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i11 + 1704 >> 2] | 0;
   i13 = i9 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i12, i9);
   i12 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 + 12 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i12 + 456 >> 2] | 0;
   i12 = HEAP32[(HEAP32[i14 >> 2] | 0) + 288 >> 2] | 0;
   i13 = i11 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i13 >> 2] = H_BASE + 712;
   HEAP32[i13 + 4 >> 2] = i11;
   HEAP32[i13 + 8 >> 2] = 1;
   HEAP32[i13 + 12 >> 2] = 0;
   HEAP32[i13 + 16 >> 2] = 0;
   i15 = i4 | 0;
   HEAP32[i15 >> 2] = i13;
   FUNCTION_TABLE_vii[i12 & 15](i14, i4);
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
  } else if ((i10 | 0) == 1) {
   i14 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i14 + 456 >> 2] | 0;
   i14 = HEAP32[(HEAP32[i15 >> 2] | 0) + 288 >> 2] | 0;
   i12 = i2 + 4 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i12 >> 2] = H_BASE + 712;
   HEAP32[i12 + 4 >> 2] = i2;
   HEAP32[i12 + 8 >> 2] = 1;
   HEAP32[i12 + 12 >> 2] = 0;
   HEAP32[i12 + 16 >> 2] = 0;
   i13 = i6 | 0;
   HEAP32[i13 >> 2] = i12;
   FUNCTION_TABLE_vii[i14 & 15](i15, i6);
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
  } else if ((i10 | 0) == 0) {
   STACKTOP = i3;
   return;
  } else if ((i10 | 0) == 2) {
   i15 = HEAP32[i2 + 1704 >> 2] | 0;
   i13 = i8 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i15, i8);
   i15 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i13 = i15 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore16ApplicationCacheD1Ev(i15);
      __ZN3WTF8fastFreeEPv(i15);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 112 | 0, i7) | 0;
   i15 = HEAP32[i7 >> 2] | 0;
   i11 = HEAP32[i15 + 12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i11 + 456 >> 2] | 0;
   i11 = HEAP32[(HEAP32[i14 >> 2] | 0) + 288 >> 2] | 0;
   i13 = i15 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = __ZN3WTF10fastMallocEj(20) | 0;
   HEAP32[i13 >> 2] = H_BASE + 712;
   HEAP32[i13 + 4 >> 2] = i15;
   HEAP32[i13 + 8 >> 2] = 1;
   HEAP32[i13 + 12 >> 2] = 0;
   HEAP32[i13 + 16 >> 2] = 0;
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = i13;
   FUNCTION_TABLE_vii[i11 & 15](i14, i5);
   i14 = HEAP32[i15 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
  }
 } while (0);
 i5 = i1 + 108 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ApplicationCacheGroupD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 744;
 if ((HEAP8[i1 + 176 | 0] & 1) == 0) {
  __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
  __ZN7WebCore23ApplicationCacheStorage19cacheGroupDestroyedEPNS_21ApplicationCacheGroupE(__ZN7WebCore12cacheStorageEv() | 0, i1);
 }
 i2 = HEAP32[i1 + 196 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 184 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 180 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 136 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i3 = HEAP32[i2 + (i5 << 3) >> 2] | 0;
    i6 = i3;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i3 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i3);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
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
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroupD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 744;
 if ((HEAP8[i1 + 176 | 0] & 1) == 0) {
  __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
  __ZN7WebCore23ApplicationCacheStorage19cacheGroupDestroyedEPNS_21ApplicationCacheGroupE(__ZN7WebCore12cacheStorageEv() | 0, i1);
 }
 i2 = HEAP32[i1 + 196 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 192 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 184 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 180 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i1 + 136 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i3 = HEAP32[i2 + (i5 << 3) >> 2] | 0;
    i6 = i3;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i3 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i3);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
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
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   if (((tempValue = HEAP32[i4 >> 2] | 0, HEAP32[i4 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
    break;
   }
   __ZN7WebCore14SecurityOriginD2Ev(i2);
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i9 = i1 | 0;
  __ZN7WebCore20ResourceHandleClientD2Ev(i9);
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup16didFinishLoadingEPNS_14ResourceHandleEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 160 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i8 + 128 >> 2] | 0;
 i10 = HEAP32[i1 + 188 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i11 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i8 + 32 >> 2] | 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation20didFinishLoadingImplEPNS_19InstrumentingAgentsEmPNS_14DocumentLoaderEd(i11, i10, i9, d3);
  }
 } while (0);
 if ((HEAP32[i1 + 196 >> 2] | 0) == (i2 | 0)) {
  __ZN7WebCore21ApplicationCacheGroup24didFinishLoadingManifestEv(i1);
  STACKTOP = i4;
  return;
 }
 __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i1 + 132 | 0, __ZNK7WebCore19ResourceRequestBase3urlEv(__ZN7WebCore14ResourceHandle12firstRequestEv(i2) | 0) | 0) | 0;
 i2 = i1 + 84 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 i10 = i1 + 184 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore16ApplicationCache11addResourceEN3WTF10PassRefPtrINS_24ApplicationCacheResourceEEE(i9, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 4 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i5 = i1 + 180 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 4 | 0;
   i8 = i5 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 208 | 0] & 1) != 0) {
   i9 = i1 + 200 | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i5 = (HEAP32[i2 >> 2] | 0) + 64 | 0;
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   if (!((i11 | 0) < (i8 | 0) | (i11 | 0) == (i8 | 0) & (HEAP32[i9 >> 2] | 0) >>> 0 < (HEAP32[i5 >> 2] | 0) >>> 0)) {
    break;
   }
   i5 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   do {
    if ((i5 | 0) != 0) {
     i9 = i5 + 4 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
      break;
     } else {
      HEAP32[i9 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 456 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i5 >> 2] | 0) + 316 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i6, H_BASE + 536 | 0);
   FUNCTION_TABLE_viiiii[i8 & 3](i5, 5, 3, i6, 0);
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
   i5 = i1 + 192 | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   do {
    if ((i9 | 0) != 0) {
     i5 = i9 + 4 | 0;
     i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
      break;
     } else {
      HEAP32[i5 >> 2] = i8;
      break;
     }
    }
   } while (0);
   HEAP32[i1 + 172 >> 2] = 2;
   __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 100 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = (i3 | 0) == 0;
 do {
  if (i4) {
   i5 = 0;
   i6 = 26;
  } else {
   i7 = i3 >>> 0 < 16 >>> 0 ? 16 : i3;
   do {
    if ((i7 | 0) == 0) {
     i8 = HEAP32[i1 + 88 >> 2] | 0;
     i9 = HEAP32[i1 + 92 >> 2] | 0;
     i10 = 0;
     i11 = i8;
     i12 = i9;
     i13 = i8 + (i9 << 2) | 0;
     i6 = 7;
    } else {
     if (i7 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     } else {
      i9 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0) | 0;
      i8 = HEAP32[i1 + 88 >> 2] | 0;
      i14 = HEAP32[i1 + 92 >> 2] | 0;
      if ((HEAP32[i2 >> 2] | 0) == 0) {
       i15 = i9;
       break;
      } else {
       i10 = i9;
       i11 = i8;
       i12 = i14;
       i13 = i8 + (i14 << 2) | 0;
       i6 = 7;
       break;
      }
     }
    }
   } while (0);
   L9 : do {
    if ((i6 | 0) == 7) {
     L11 : do {
      if ((i12 | 0) == 0) {
       i16 = i11;
      } else {
       i7 = i11;
       while (1) {
        i14 = HEAP32[i7 >> 2] | 0;
        if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
         i16 = i7;
         break L11;
        }
        i14 = i7 + 4 | 0;
        if ((i14 | 0) == (i13 | 0)) {
         i15 = i10;
         break L9;
        } else {
         i7 = i14;
        }
       }
      }
     } while (0);
     if ((i16 | 0) == (i13 | 0)) {
      i15 = i10;
      break;
     } else {
      i17 = i16;
      i18 = 0;
     }
     while (1) {
      if (i3 >>> 0 <= i18 >>> 0) {
       break;
      }
      HEAP32[i10 + (i18 << 2) >> 2] = HEAP32[i17 >> 2];
      i7 = i17 + 4 | 0;
      if ((i7 | 0) == (i13 | 0)) {
       i15 = i10;
       break L9;
      } else {
       i19 = i7;
      }
      while (1) {
       i7 = HEAP32[i19 >> 2] | 0;
       if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
        break;
       }
       i7 = i19 + 4 | 0;
       if ((i7 | 0) == (i13 | 0)) {
        i15 = i10;
        break L9;
       } else {
        i19 = i7;
       }
      }
      if ((i19 | 0) == (i13 | 0)) {
       i15 = i10;
       break L9;
      } else {
       i17 = i19;
       i18 = i18 + 1 | 0;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   if (i4) {
    i5 = i15;
    i6 = 26;
    break;
   } else {
    i20 = 0;
   }
   while (1) {
    if (i3 >>> 0 <= i20 >>> 0) {
     i6 = 19;
     break;
    }
    i7 = HEAP32[i15 + (i20 << 2) >> 2] | 0;
    do {
     if ((HEAP8[i7 + 1505 | 0] & 1) == 0) {
      if ((HEAP8[i7 + 968 | 0] & 1) == 0) {
       __ZN7WebCore21ApplicationCacheGroup25failedLoadingMainResourceEPNS_14DocumentLoaderE(i1, i7);
       break;
      } else {
       __ZN7WebCore21ApplicationCacheGroup27finishedLoadingMainResourceEPNS_14DocumentLoaderE(i1, i7);
       break;
      }
     }
    } while (0);
    i7 = i20 + 1 | 0;
    if ((i7 | 0) == (i3 | 0)) {
     i6 = 25;
     break;
    } else {
     i20 = i7;
    }
   }
   if ((i6 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i6 | 0) == 25) {
    if (i4) {
     i5 = i15;
     i6 = 26;
     break;
    } else {
     i21 = i15;
     break;
    }
   }
  }
 } while (0);
 if ((i6 | 0) == 26) {
  __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i1);
  i21 = i5;
 }
 if ((i21 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i21);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore21ApplicationCacheGroup16manifestNotFoundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 168 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  HEAP8[i2] = 1;
  __ZN7WebCore23ApplicationCacheStorage22cacheGroupMadeObsoleteEPNS_21ApplicationCacheGroupE(__ZN7WebCore12cacheStorageEv() | 0, i1);
 }
 __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(7, 0, 0, i1 + 112 | 0);
 i2 = i1 + 88 | 0;
 __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(1, 0, 0, i2);
 __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
 i3 = i1 + 192 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i1 + 100 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i5 = i2 | 0;
  i3 = i1 + 92 | 0;
  i6 = i2 | 0;
  i2 = i1 + 104 | 0;
  while (1) {
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i7 + (i8 << 2) | 0;
   L14 : do {
    if ((i8 | 0) == 0) {
     i10 = i7;
    } else {
     i11 = i7;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L14;
      }
      i12 = i11 + 4 | 0;
      if ((i12 | 0) == (i9 | 0)) {
       i10 = i9;
       break;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   __ZN7WebCore20ApplicationCacheHost33setCandidateApplicationCacheGroupEPNS_21ApplicationCacheGroupE(HEAP32[(HEAP32[i10 >> 2] | 0) + 1704 >> 2] | 0, 0);
   do {
    if ((i10 | 0) != ((HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) | 0)) {
     HEAP32[i10 >> 2] = -1;
     HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
     i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     HEAP32[i4 >> 2] = i9;
     i7 = HEAP32[i3 >> 2] | 0;
     if (!((i9 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
      break;
     }
     __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i6, (i7 | 0) / 2 & -1, 0) | 0;
    }
   } while (0);
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    break;
   }
  }
 }
 HEAP32[i1 + 108 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 160 >> 2] = 0;
 if ((i1 | 0) == 0 | (HEAP32[i1 + 76 >> 2] | 0) != 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 196 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore14ResourceHandle9setClientEPNS_20ResourceHandleClientE(i3, 0);
   i4 = HEAP32[i2 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i2 = i1 + 180 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore14ResourceHandle9setClientEPNS_20ResourceHandleClientE(i3, 0);
   i6 = HEAP32[i2 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 15](i6);
   i6 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i5 = i6 + 4 | 0;
   i6 = i5 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
  }
 } while (0);
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i1 + 132 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i4 + (i1 << 3) >> 2] | 0;
   i6 = i5;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 _memset(i3 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i2;
 i8 = i1 + 60 | 0;
 do {
  if ((HEAP32[i8 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 84 >> 2] | 0) != 0) {
    i9 = 10;
    break;
   }
   if ((i3 | 0) == 0) {
    HEAP32[i8 >> 2] = i3;
    i10 = HEAP32[i2 + 1704 >> 2] | 0;
    i11 = i6 | 0;
    HEAP32[i11 >> 2] = i3;
    i12 = i10;
    i13 = i11;
    break;
   }
   i11 = i3 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i3;
   if ((i11 | 0) == 0) {
    i10 = HEAP32[i2 + 1704 >> 2] | 0;
    i14 = i6 | 0;
    HEAP32[i14 >> 2] = i3;
    i15 = i10;
    i16 = i14;
    i9 = 11;
    break;
   }
   i14 = i11 | 0;
   i10 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    i9 = 10;
    break;
   } else {
    HEAP32[i14 >> 2] = i10;
    i9 = 10;
    break;
   }
  } else {
   i9 = 10;
  }
 } while (0);
 if ((i9 | 0) == 10) {
  i8 = HEAP32[i2 + 1704 >> 2] | 0;
  i2 = i6 | 0;
  HEAP32[i2 >> 2] = i3;
  if ((i3 | 0) == 0) {
   i12 = i8;
   i13 = i2;
  } else {
   i15 = i8;
   i16 = i2;
   i9 = 11;
  }
 }
 if ((i9 | 0) == 11) {
  i9 = i3 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = i15;
  i13 = i16;
 }
 __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i12, i6);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i7, i1 + 112 | 0, i5, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 2) | 0;
 if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 L4 : do {
  if ((i8 | 0) == 0) {
   i10 = i7;
  } else {
   i4 = i7;
   while (1) {
    i11 = HEAP32[i4 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i10 = i4;
     break L4;
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i9 | 0)) {
     break;
    }
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i10 | 0) == (i9 | 0)) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 i8 = i10;
 L13 : while (1) {
  i10 = HEAP32[i8 >> 2] | 0;
  i4 = HEAP32[i10 + 12 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i11 = HEAP32[i4 + 456 >> 2] | 0;
    i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 288 >> 2] | 0;
    i13 = i10 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    i13 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i13 >> 2] = H_BASE + 712;
    HEAP32[i13 + 4 >> 2] = i10;
    HEAP32[i13 + 8 >> 2] = i1;
    HEAP32[i13 + 12 >> 2] = i2;
    HEAP32[i13 + 16 >> 2] = i3;
    HEAP32[i7 >> 2] = i13;
    FUNCTION_TABLE_vii[i12 & 15](i11, i6);
    i11 = HEAP32[i7 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   }
  } while (0);
  i10 = i8 + 4 | 0;
  if ((i10 | 0) == (i9 | 0)) {
   i14 = 20;
   break;
  } else {
   i15 = i10;
  }
  while (1) {
   i10 = HEAP32[i15 >> 2] | 0;
   if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
    break;
   }
   i10 = i15 + 4 | 0;
   if ((i10 | 0) == (i9 | 0)) {
    i14 = 19;
    break L13;
   } else {
    i15 = i10;
   }
  }
  if ((i15 | 0) == (i9 | 0)) {
   i14 = 18;
   break;
  } else {
   i8 = i15;
  }
 }
 if ((i14 | 0) == 18) {
  STACKTOP = i5;
  return;
 } else if ((i14 | 0) == 19) {
  STACKTOP = i5;
  return;
 } else if ((i14 | 0) == 20) {
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i1 + 144 >> 2] | 0) == 0) {
  HEAP32[i1 + 172 >> 2] = 3;
  __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 132 >> 2] | 0;
 i6 = HEAP32[i1 + 136 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 L5 : do {
  if ((i6 | 0) == 0) {
   i8 = i5;
  } else {
   i9 = i5;
   while (1) {
    i10 = HEAP32[i9 >> 2] | 0;
    if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
     i8 = i9;
     break L5;
    }
    i10 = i9 + 8 | 0;
    if ((i10 | 0) == (i7 | 0)) {
     i8 = i7;
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i7 = i1 + 156 | 0;
 __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE(4, HEAP32[i1 + 152 >> 2] | 0, HEAP32[i7 >> 2] | 0, i1 + 112 | 0);
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i8 | 0;
 __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i4, 0, i7);
 i8 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(i8, i7) | 0;
 }
 __ZN7WebCore21ApplicationCacheGroup20createResourceHandleERKNS_3URLEPNS_24ApplicationCacheResourceE(i3, i1, i4, i11);
 i11 = i3 | 0;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i1 + 180 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i11 = i3 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i11 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 i3 = i1 | 0;
 i11 = i1 + 4 | 0;
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i16 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i16;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = -1;
 i8 = i1 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i1 + 12 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 HEAP32[i8 >> 2] = i1;
 i8 = HEAP32[i11 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
  i17 = 1;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i3, (i8 | 0) / 2 & -1, 0) | 0;
 i17 = 1;
 return i17 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore16ApplicationCacheENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore21ApplicationCacheGroup27fallbackCacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 if (!(__ZN7WebCore16ApplicationCache23requestIsHTTPOrHTTPSGetERKNS_15ResourceRequestE(i1) | 0)) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(i1 | 0) | 0;
 i1 = i3 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = 0;
  i8 = i3 + 4 | 0;
 } else {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  i9 = i3 + 4 | 0;
  i7 = HEAP8[i9] & -2;
  i8 = i9;
 }
 i9 = i5 + 4 | 0;
 i6 = i7 | HEAP8[i9] & 1;
 HEAP8[i8] = i6;
 HEAP8[i8] = i6 & -3 | HEAP8[i9] & 2;
 HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i3 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i3 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i3 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i3 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i3 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i3 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i3 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i3 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i3);
 }
 i5 = __ZN7WebCore23ApplicationCacheStorage24fallbackCacheGroupForURLERKNS_3URLE(__ZN7WebCore12cacheStorageEv() | 0, i3) | 0;
 if ((i5 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i5 + 60 >> 2] | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 }
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i1 >> 2] = i3;
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore21ApplicationCacheGroup19cacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 if (!(__ZN7WebCore16ApplicationCache23requestIsHTTPOrHTTPSGetERKNS_15ResourceRequestE(i1) | 0)) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = __ZNK7WebCore19ResourceRequestBase3urlEv(i1 | 0) | 0;
 i1 = i3 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = 0;
  i8 = i3 + 4 | 0;
 } else {
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  i9 = i3 + 4 | 0;
  i7 = HEAP8[i9] & -2;
  i8 = i9;
 }
 i9 = i5 + 4 | 0;
 i6 = i7 | HEAP8[i9] & 1;
 HEAP8[i8] = i6;
 HEAP8[i8] = i6 & -3 | HEAP8[i9] & 2;
 HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i3 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i3 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i3 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i3 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i3 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i3 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i3 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i3 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 if (__ZNK7WebCore3URL21hasFragmentIdentifierEv(i3) | 0) {
  __ZN7WebCore3URL24removeFragmentIdentifierEv(i3);
 }
 i5 = __ZN7WebCore23ApplicationCacheStorage16cacheGroupForURLERKNS_3URLE(__ZN7WebCore12cacheStorageEv() | 0, i3) | 0;
 if ((i5 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = HEAP32[i5 + 60 >> 2] | 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 }
 i1 = i5 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 } else {
  HEAP32[i1 >> 2] = i3;
  i4 = i10;
  STACKTOP = i2;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore19ResourceRequestBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = i1 + 144 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 136 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 2) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 140 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 116 | 0);
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20ResourceResponseBaseD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13HTTPHeaderMapD1Ev(i1 + 80 | 0);
 i2 = HEAP32[i1 + 76 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
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
 i2 = HEAP32[i1 + 64 >> 2] | 0;
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
 i2 = HEAP32[i1 + 48 >> 2] | 0;
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
 i2 = HEAP32[i1 >> 2] | 0;
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
function __ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 112 | 0, i4) | 0;
 __ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 88 | 0, i4) | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 1704 >> 2] | 0;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore20ApplicationCacheHost19setApplicationCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i2, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 124 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 100 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 76 >> 2] | 0) == 0) {
  if ((i1 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 60 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore16ApplicationCacheD1Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8ManifestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 __ZN3WTF6VectorINSt3__14pairIN7WebCore3URLES4_EELj0ENS_15CrashOnOverflowEED2Ev(i1 + 32 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i7 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 48 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 48 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21ApplicationCacheGroupC2ERKNS_3URLEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20ResourceHandleClientC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 744;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 8 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, i2);
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 172 >> 2] = 0;
 _memset(i1 + 56 | 0, 0, 113) | 0;
 HEAP8[i1 + 176 | 0] = i3 & 1;
 HEAP8[i1 + 177 | 0] = 0;
 HEAP32[i1 + 180 >> 2] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP32[i1 + 196 >> 2] = 0;
 i3 = i1 + 200 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = -1;
 HEAP8[i1 + 208 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21ApplicationCacheGroupC1ERKNS_3URLEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore20ResourceHandleClientC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 744;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 8 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 44 >> 2];
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i5, i2);
 HEAP32[i1 + 52 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i1 + 172 >> 2] = 0;
 _memset(i1 + 56 | 0, 0, 113) | 0;
 HEAP8[i1 + 176 | 0] = i3 & 1;
 HEAP8[i1 + 177 | 0] = 0;
 HEAP32[i1 + 180 >> 2] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 192 >> 2] = 0;
 HEAP32[i1 + 196 >> 2] = 0;
 i3 = i1 + 200 | 0;
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = -1;
 HEAP8[i1 + 208 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i2 + 4 | 0;
 i6 = i1 + 4 | 0;
 i8 = HEAP8[i6] & -2 | HEAP8[i7] & 1;
 HEAP8[i6] = i8;
 HEAP8[i6] = i8 & -3 | HEAP8[i7] & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = i3;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i3 = i1 + 64 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i3);
 HEAP32[i5 >> 2] = H_BASE + 184;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i5);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15ResourceRequestD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 172 >> 2] | 0;
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
 i2 = HEAP32[i1 + 168 >> 2] | 0;
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
 i2 = HEAP32[i1 + 164 >> 2] | 0;
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
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1 | 0;
  __ZN7WebCore19ResourceRequestBaseD2Ev(i5);
  return;
 }
}
function __ZN7WebCore21ApplicationCacheGroup5abortEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 56 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 172 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i2 + 456 >> 2] | 0;
 i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 316 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 624 | 0);
 FUNCTION_TABLE_viiiii[i2 & 3](i6, 2, 4, i4, 0);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
 i6 = i1 + 192 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 15](i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = 2;
 __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup14clearStorageIDEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 + 164 >> 2] = 0;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 76 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L4;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L12 : while (1) {
  __ZN7WebCore16ApplicationCache14clearStorageIDEv(HEAP32[i7 >> 2] | 0);
  i5 = i7 + 4 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   i8 = 15;
   break;
  } else {
   i9 = i5;
  }
  while (1) {
   i5 = HEAP32[i9 >> 2] | 0;
   if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
    break;
   }
   i5 = i9 + 4 | 0;
   if ((i5 | 0) == (i4 | 0)) {
    i8 = 16;
    break L12;
   } else {
    i9 = i5;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 12;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 15) {
  return;
 } else if ((i8 | 0) == 16) {
  return;
 } else if ((i8 | 0) == 12) {
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 12;
}
function __ZN7WebCore21ApplicationCacheGroup8addEntryERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i3;
 i7 = __ZN7WebCore16ApplicationCache14resourceForURLERKN3WTF6StringE(HEAP32[i1 + 84 >> 2] | 0, i2) | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore24ApplicationCacheResource7addTypeEj(i7, i3);
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 192 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0, HEAP32[i2 >> 2] | 0) | 0) {
  __ZN7WebCore24ApplicationCacheResource7addTypeEj(HEAP32[i7 >> 2] | 0, i3);
  STACKTOP = i4;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i6, i1 + 132 | 0, i2, i5);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i2 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | HEAP32[i5 >> 2];
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINSt3__14pairIN7WebCore3URLES4_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 96 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 48 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 96 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore21ApplicationCacheGroup14setNewestCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i1 + 60 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore16ApplicationCacheD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 __ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i1 + 64 | 0, i4, i4);
 __ZN7WebCore16ApplicationCache8setGroupEPNS_21ApplicationCacheGroupE(HEAP32[i6 >> 2] | 0, i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiPNS_14DocumentLoaderE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i4 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i7 + 456 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + 288 >> 2] | 0;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = __ZN3WTF10fastMallocEj(20) | 0;
 HEAP32[i9 >> 2] = H_BASE + 712;
 HEAP32[i9 + 4 >> 2] = i4;
 HEAP32[i9 + 8 >> 2] = i1;
 HEAP32[i9 + 12 >> 2] = i2;
 HEAP32[i9 + 16 >> 2] = i3;
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = i9;
 FUNCTION_TABLE_vii[i7 & 15](i8, i6);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore21ApplicationCacheGroup29selectCacheWithoutManifestURLEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 188 | 0] & 2) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 100 >> 2] | 0;
 if (!(__ZNK7WebCore14SecurityOrigin16canAccessStorageEPKS0_NS0_25ShouldAllowFromThirdPartyE(i2, HEAP32[(HEAP32[(__ZNK7WebCore9FrameTree3topEv(i1 + 40 | 0) | 0) + 456 >> 2] | 0) + 100 >> 2] | 0, 1) | 0)) {
  return;
 }
 i2 = HEAP32[i1 + 128 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 1704 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = i3 + 4 | 0;
 __ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE(HEAP32[i4 >> 2] | 0, i2, i3);
 __ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE(HEAP32[i4 >> 2] | 0, i1, 0);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup14didReceiveDataEPNS_14ResourceHandleEPKcji(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i5 = HEAP32[i1 + 160 >> 2] | 0;
 i6 = HEAP32[i1 + 188 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18didReceiveDataImplEPNS_19InstrumentingAgentsEmPKcii(i7, i6, 0, i4, 0);
  }
 } while (0);
 if ((HEAP32[i1 + 196 >> 2] | 0) != (i2 | 0)) {
  __ZN7WebCore12SharedBuffer6appendEPKcj(HEAP32[(HEAP32[i1 + 184 >> 2] | 0) + 224 >> 2] | 0, i3, i4);
  return;
 }
 i2 = HEAP32[i1 + 192 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore12SharedBuffer6appendEPKcj(HEAP32[i2 + 224 >> 2] | 0, i3, i4);
 return;
}
function __ZN7WebCore25ChromeClientCallbackTimer5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 160 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 236 >> 2] | 0;
 i5 = __ZN7WebCore12cacheStorageEv() | 0;
 i6 = (HEAP32[i2 + 84 >> 2] | 0) + 64 | 0;
 i7 = __ZN7WebCore23ApplicationCacheStorage11spaceNeededEx(i5, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0) | 0;
 FUNCTION_TABLE_viii[i4 & 15](i3, i7, tempRet0);
 HEAP8[i2 + 177 | 0] = 1;
 __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i2);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup18stopLoadingInFrameEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 160 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
 i2 = i1 + 192 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 172 >> 2] = 2;
 __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup23didReachMaxAppCacheSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 236 >> 2] | 0;
 i4 = __ZN7WebCore12cacheStorageEv() | 0;
 i5 = (HEAP32[i1 + 84 >> 2] | 0) + 64 | 0;
 i6 = __ZN7WebCore23ApplicationCacheStorage11spaceNeededEx(i4, HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0) | 0;
 FUNCTION_TABLE_viii[i3 & 15](i2, i6, tempRet0);
 HEAP8[i1 + 177 | 0] = 1;
 __ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv(i1);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup17cacheUpdateFailedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 __ZN7WebCore21ApplicationCacheGroup11stopLoadingEv(i1);
 i2 = i1 + 192 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 172 >> 2] = 2;
 __ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv(i1);
 return;
}
function __ZN7WebCore21CallCacheListenerTaskD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 712;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup14cacheDestroyedEPNS_16ApplicationCacheE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 if (!(__ZN3WTF7HashSetIPN7WebCore16ApplicationCacheENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 64 | 0, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((i1 | 0) == 0 | (HEAP32[i1 + 76 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21CallCacheListenerTaskD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 712;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN7WebCore22ScriptExecutionContext4TaskD2Ev(i1 | 0);
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
function __ZN7WebCore21ApplicationCacheGroup32recalculateAvailableSpaceInQuotaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN7WebCore12cacheStorageEv() | 0;
 i3 = i1 + 200 | 0;
 if (__ZN7WebCore23ApplicationCacheStorage45calculateRemainingSizeForOriginExcludingCacheEPKNS_14SecurityOriginEPNS_16ApplicationCacheERx(i2, HEAP32[i1 + 52 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, i3) | 0) {
  return;
 }
 HEAP32[i3 >> 2] = -1;
 HEAP32[i3 + 4 >> 2] = 2147483647;
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
function __ZN7WebCore21CallCacheListenerTask11performTaskEPNS_22ScriptExecutionContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore20ApplicationCacheHost25notifyDOMApplicationCacheENS0_7EventIDEii(HEAP32[i2 + 1704 >> 2] | 0, HEAP32[i1 + 8 >> 2] | 0, HEAP32[i1 + 12 >> 2] | 0, HEAP32[i1 + 16 >> 2] | 0);
 return;
}
function viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore21ApplicationCacheGroup19didReachOriginQuotaEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 160 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 240 >> 2] & 7](i4, HEAP32[i1 + 52 >> 2] | 0, i2, i3);
 return;
}
function __ZN7WebCore21ApplicationCacheGroup38scheduleReachedMaxAppCacheSizeCallbackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(48) | 0;
 i3 = i2;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i2 >> 2] = H_BASE + 680;
 HEAP32[i2 + 44 >> 2] = i1;
 __ZN7WebCore9TimerBase5startEdd(i3, +0, +0);
 return;
}
function viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore21ApplicationCacheGroup12makeObsoleteEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 168 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 __ZN7WebCore23ApplicationCacheStorage22cacheGroupMadeObsoleteEPNS_21ApplicationCacheGroupE(__ZN7WebCore12cacheStorageEv() | 0, i1);
 return;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCore21ApplicationCacheGroup22didReceiveManifestDataEPKci(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 192 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 __ZN7WebCore12SharedBuffer6appendEPKcj(HEAP32[i4 + 224 >> 2] | 0, i2, i3);
 return;
}
function vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE(i1 | 0, i2 | 0);
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
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
function __ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore21ApplicationCacheGroup15setUpdateStatusENS0_12UpdateStatusE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 56 >> 2] = i2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore21ApplicationCacheGroupD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore21ApplicationCacheGroupD2Ev(i1);
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
function __ZN7WebCore25ChromeClientCallbackTimerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function __ZN7WebCore21ApplicationCacheGroup26shouldUseCredentialStorageEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
}
function b8(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(8);
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
function __ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore25ChromeClientCallbackTimerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function b7(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(7);
}
function b9(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(9);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore21ApplicationCacheGroup14didReceiveDataEPNS_14ResourceHandleEPKcji,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore25ChromeClientCallbackTimerD0Ev,b2,__ZN7WebCore25ChromeClientCallbackTimer5firedEv,b2,__ZN7WebCore21ApplicationCacheGroupD2Ev,b2,__ZN7WebCore21ApplicationCacheGroupD0Ev,b2,__ZN7WebCore25ChromeClientCallbackTimerD1Ev,b2,__ZN7WebCore21CallCacheListenerTaskD0Ev,b2,__ZN7WebCore21CallCacheListenerTaskD1Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore21CallCacheListenerTask11performTaskEPNS_22ScriptExecutionContextE,b3,__ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE,b3,__ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE,b3,vii___ZN7WebCore20ResourceHandleClient31shouldUseCredentialStorageAsyncEPNS_14ResourceHandleE__wrapper,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv,b4,__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore21ApplicationCacheGroupC2ERKNS_3URLEb,b5,viii___ZN7WebCore20ResourceHandleClient23didReceiveResponseAsyncEPNS_14ResourceHandleERKNS_16ResourceResponseE__wrapper,b5,__ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5,__ZN7WebCore21ApplicationCacheGroup7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE,b5,__ZN7WebCore21ApplicationCacheGroup18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE,b5,__ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5,__ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viid = [b7,b7,__ZN7WebCore21ApplicationCacheGroup16didFinishLoadingEPNS_14ResourceHandleEd,b7];
  var FUNCTION_TABLE_viiiiii = [b8,b8,__ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy,b8];
  var FUNCTION_TABLE_iii = [b9,b9,__ZN7WebCore21ApplicationCacheGroup26shouldUseCredentialStorageEPNS_14ResourceHandleE,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZN7WebCore20ResourceHandleClient20willSendRequestAsyncEPNS_14ResourceHandleERKNS_15ResourceRequestERKNS_16ResourceResponseE__wrapper,b10,__ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE,b10,viiii___ZN7WebCore20ResourceHandleClient16didReceiveBufferEPNS_14ResourceHandleEN3WTF10PassRefPtrINS_12SharedBufferEEEi__wrapper,b10];
  return { _memcmp: _memcmp, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE }, buffer);
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21ApplicationCacheGroup23didReachMaxAppCacheSizeEv","__ZN7WebCore21ApplicationCacheGroup14cacheDestroyedEPNS_16ApplicationCacheE","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore21CallCacheListenerTaskD0Ev","__ZN7WebCore21ApplicationCacheGroup5abortEPNS_5FrameE","__ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore21ApplicationCacheGroup29selectCacheWithoutManifestURLEPNS_5FrameE","__ZN7WebCore20ResourceHandleClient20receivedCancellationEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore21ApplicationCacheGroup18didReceiveResponseEPNS_14ResourceHandleERKNS_16ResourceResponseE","__ZN7WebCore14SecurityOriginD2Ev","__ZN3WTF7HashSetIPN7WebCore14DocumentLoaderENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore19ResourceRequestBaseC2ERKNS_3URLENS_26ResourceRequestCachePolicyE","__ZN7WebCore21ApplicationCacheGroup32associateDocumentLoaderWithCacheEPNS_14DocumentLoaderEPNS_16ApplicationCacheE","__ZN7WebCore25ChromeClientCallbackTimer5firedEv","__ZN7WebCore21ApplicationCacheGroup16didFinishLoadingEPNS_14ResourceHandleEd","__ZN7WebCore21ApplicationCacheGroup12makeObsoleteEv","__ZN7WebCore21ApplicationCacheGroup11stopLoadingEv","_memcmp","__ZN7WebCore21ApplicationCacheGroup38scheduleReachedMaxAppCacheSizeCallbackEv","__ZN3WTF6VectorINSt3__14pairIN7WebCore3URLES4_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore20ResourceResponseBaseD2Ev","__ZN7WebCore21ApplicationCacheGroupC2ERKNS_3URLEb","__ZN7WebCore21CallCacheListenerTask11performTaskEPNS_22ScriptExecutionContextE","__ZN7WebCore21ApplicationCacheGroup27deliverDelayedMainResourcesEv","__ZN7WebCore21ApplicationCacheGroup26disassociateDocumentLoaderEPNS_14DocumentLoaderE","__ZN7WebCore21ApplicationCacheGroup26didReceiveManifestResponseERKNS_16ResourceResponseE","__ZN7WebCore21ApplicationCacheGroup19cacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE","__ZN7WebCore21ApplicationCacheGroup19didReachOriginQuotaEx","__ZN7WebCore21ApplicationCacheGroup25failedLoadingMainResourceEPNS_14DocumentLoaderE","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore21ApplicationCacheGroup24didFinishLoadingManifestEv","__ZN7WebCore21ApplicationCacheGroup32recalculateAvailableSpaceInQuotaEv","__ZN7WebCore20ResourceHandleClient33didReceiveAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore21ApplicationCacheGroup8addEntryERKN3WTF6StringEj","__ZN7WebCore21ApplicationCacheGroup15setUpdateStatusENS0_12UpdateStatusE","__ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore20ResourceHandleClient10wasBlockedEPNS_14ResourceHandleE","__ZN7WebCore21ApplicationCacheGroup7didFailEPNS_14ResourceHandleERKNS_13ResourceErrorE","__ZN7WebCore21ApplicationCacheGroup26shouldUseCredentialStorageEPNS_14ResourceHandleE","__ZN7WebCore21ApplicationCacheGroup20createResourceHandleERKNS_3URLEPNS_24ApplicationCacheResourceE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiRKN3WTF7HashSetIPNS_14DocumentLoaderENS3_7PtrHashIS6_EENS3_10HashTraitsIS6_EEEE","__ZN7WebCore21ApplicationCacheGroup22didReceiveManifestDataEPKci","__ZN7WebCore21ApplicationCacheGroup14clearStorageIDEv","__ZN3WTF7HashMapINS_6StringEjNS_10StringHashENS_10HashTraitsIS1_EENS3_IjEEE6removeERKS1_","__ZN3WTF9HashTableIPN7WebCore16ApplicationCacheES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore21ApplicationCacheGroup14setNewestCacheEN3WTF10PassRefPtrINS_16ApplicationCacheEEE","__ZN7WebCore21ApplicationCacheGroup27finishedLoadingMainResourceEPNS_14DocumentLoaderE","__ZN7WebCore21ApplicationCacheGroup17cacheUpdateFailedEv","__ZN7WebCore21ApplicationCacheGroupD2Ev","__ZN3WTF9HashTableIPN7WebCore14DocumentLoaderES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore20ResourceHandleClient13cannotShowURLEPNS_14ResourceHandleE","__ZN7WebCore8ManifestD2Ev","__ZN7WebCore21ApplicationCacheGroupD0Ev","__ZN7WebCore20ResourceHandleClient11didSendDataEPNS_14ResourceHandleEyy","__ZN7WebCore21ApplicationCacheGroup21checkIfLoadIsCompleteEv","_strlen","__ZN7WebCore21CallCacheListenerTaskD1Ev","__ZNK7WebCore22ScriptExecutionContext4Task13isCleanupTaskEv","__ZN7WebCore21ApplicationCacheGroup14didReceiveDataEPNS_14ResourceHandleEPKcji","__ZN7WebCore21ApplicationCacheGroup16manifestNotFoundEv","__ZN7WebCore25ChromeClientCallbackTimerD0Ev","__ZN7WebCore21ApplicationCacheGroup6updateEPNS_5FrameENS_28ApplicationCacheUpdateOptionE","__ZN3WTF7HashSetIPN7WebCore16ApplicationCacheENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore20ResourceHandleClient18usesAsyncCallbacksEv","_memcpy","__ZN7WebCore21ApplicationCacheGroup18stopLoadingInFrameEPNS_5FrameE","__ZN7WebCore25ChromeClientCallbackTimerD1Ev","__ZN7WebCore20ResourceHandleClient32didCancelAuthenticationChallengeEPNS_14ResourceHandleERKNS_23AuthenticationChallengeE","__ZN7WebCore20ResourceHandleClient15willSendRequestEPNS_14ResourceHandleERNS_15ResourceRequestERKNS_16ResourceResponseE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E6rehashEiPS3_","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_jEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_jS6_NS_10HashTraitsIS1_EENS8_IjEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RjEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_","__ZN7WebCore21ApplicationCacheGroup27fallbackCacheForMainRequestERKNS_15ResourceRequestEPNS_14DocumentLoaderE","_memset","__ZN7WebCore21ApplicationCacheGroup17startLoadingEntryEv","__ZN7WebCore21ApplicationCacheGroup11selectCacheEPNS_5FrameERKNS_3URLE","__ZN7WebCore21ApplicationCacheGroup16postListenerTaskENS_20ApplicationCacheHost7EventIDEiiPNS_14DocumentLoaderE"]

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
H_BASE = parentModule["_malloc"](112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8DOMTimerC1EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib;
var __ZN7WebCore8DOMTimerD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore8DOMTimerE=(H_BASE+8)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _ceil=env._ceil;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore8DOMTimer5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 i6 = i1 + 88 | 0;
 HEAP32[H_BASE + 112 >> 2] = HEAP32[i6 >> 2];
 i7 = i1 + 100 | 0;
 __ZN7WebCore20UserGestureIndicatorC1ENS_26ProcessingUserGestureStateE(i3, (HEAP8[i7] & 1 ^ 1) & 255);
 HEAP8[i7] = 0;
 i7 = HEAP32[i1 + 84 >> 2] | 0;
 L1 : do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i4);
  } else {
   do {
    if ((i5 | 0) != 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5) | 0) {
      i8 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i5 - 156 + 68 | 0) | 0) | 0;
     } else {
      i8 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i5) | 0;
     }
     if ((i8 | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation17willFireTimerImplEPNS_19InstrumentingAgentsEiPNS_22ScriptExecutionContextE(i4, i8, i7, i5);
     break L1;
    }
   } while (0);
   __ZN7WebCore30InspectorInstrumentationCookieC1Ev(i4);
  }
 } while (0);
 i7 = i1;
 do {
  if (+HEAPF64[i1 + 8 >> 3] == +0) {
   if ((HEAP8[i1 + 56 | 0] & 1) != 0) {
    if ((HEAP8[i1 + 80 | 0] & 1) != 0) {
     break;
    }
   }
   i8 = i1 + 92 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i1 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
   }
   __ZN7WebCore15ScheduledAction7executeEPNS_22ScriptExecutionContextE(i9, i5);
   do {
    if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
     if ((HEAP32[i4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore24InspectorInstrumentation16didFireTimerImplERKNS_30InspectorInstrumentationCookieE(i4);
    }
   } while (0);
   HEAP32[H_BASE + 112 >> 2] = 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
    __ZN7WebCore20UserGestureIndicatorD1Ev(i3);
    STACKTOP = i2;
    return;
   }
   __ZN7WebCore15ScheduledActionD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
   __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
   __ZN7WebCore20UserGestureIndicatorD1Ev(i3);
   STACKTOP = i2;
   return;
  }
 } while (0);
 d10 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i5 >> 2] | 0) + 64 >> 2] & 1](i5);
 do {
  if (+__ZNK7WebCore16SuspendableTimer14repeatIntervalEv(i7) != +0) {
   if (+__ZNK7WebCore16SuspendableTimer14repeatIntervalEv(i7) >= d10) {
    break;
   }
   i8 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i8 | 0) <= 4) {
    break;
   }
   __ZN7WebCore16SuspendableTimer21augmentRepeatIntervalEd(i7, d10 - +__ZNK7WebCore16SuspendableTimer14repeatIntervalEv(i7));
  }
 } while (0);
 __ZN7WebCore15ScheduledAction7executeEPNS_22ScriptExecutionContextE(HEAP32[i1 + 92 >> 2] | 0, i5);
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i3);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
  __ZN7WebCore20UserGestureIndicatorD1Ev(i3);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation16didFireTimerImplERKNS_30InspectorInstrumentationCookieE(i4);
 __ZN7WebCore30InspectorInstrumentationCookieD1Ev(i4);
 __ZN7WebCore20UserGestureIndicatorD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i2;
   i16 = i30;
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i16 + 4 >> 2] = i13;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i13;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
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
function __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i1, i2) {
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
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8 + ~(i8 << 15) | 0;
  i9 = (i2 >>> 10 ^ i2) * 9 & -1;
  i2 = i9 >>> 6 ^ i9;
  i9 = i2 + ~(i2 << 11) | 0;
  i2 = i9 >>> 16 ^ i9;
  i9 = i2 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i2 >>> 23) + ~i2 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i9;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
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
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((i2 | 0) < 1) {
  return;
 }
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i1 | 0) == 0)) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) {
    i3 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i1 - 156 + 68 | 0) | 0) | 0;
   } else {
    i3 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i1) | 0;
   }
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18didRemoveTimerImplEPNS_19InstrumentingAgentsEiPNS_22ScriptExecutionContextE(i3, i2, i1);
  }
 } while (0);
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 i4 = HEAP32[i1 + 108 >> 2] | 0;
 i1 = ~(i2 << 15) + i2 | 0;
 i5 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i5 >>> 6 ^ i5;
 i5 = i1 + ~(i1 << 11) | 0;
 i1 = i5 >>> 16 ^ i5;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i3 & i1;
 i6 = i4 + (i5 << 3) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L15 : do {
  if ((i7 | 0) == (i2 | 0)) {
   i8 = i6;
  } else {
   i9 = (i1 >>> 23) + ~i1 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = 0;
   i11 = i5;
   i12 = i7;
   while (1) {
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = (i10 | 0) == 0 ? i9 : i10;
    i14 = i13 + i11 & i3;
    i15 = i4 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i2 | 0)) {
     i8 = i15;
     break L15;
    } else {
     i10 = i13;
     i11 = i14;
     i12 = i16;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore8DOMTimerC2EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1;
 __ZN7WebCore16SuspendableTimerC2EPNS_22ScriptExecutionContextE(i10, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 68;
 i11 = i1 + 88 | 0;
 HEAP32[i11 >> 2] = (HEAP32[H_BASE + 112 >> 2] | 0) + 1;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = i3;
 HEAP32[i1 + 96 >> 2] = i4;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP8[i1 + 100 | 0] = (__ZN7WebCore20UserGestureIndicator21processingUserGestureEv() | 0) & (i4 | 0) < 1001 & (i3 | 0) == 1 & 1;
 i3 = i1 + 84 | 0;
 i12 = i2 + 108 | 0;
 i13 = i9 + 8 | 0;
 while (1) {
  i14 = __ZN7WebCore22ScriptExecutionContext20circularSequentialIDEv(i2) | 0;
  HEAP32[i3 >> 2] = i14;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i8 >> 2] = i1;
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i12, i7, i8);
  if ((HEAP8[i13] & 1) != 0) {
   break;
  }
 }
 d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] & 1](i2);
 d16 = +(i4 | 0) * +.001;
 d17 = d16 > +.001 ? d16 : +.001;
 if (d17 < d15) {
  d18 = (HEAP32[i11 >> 2] | 0) > 4 ? d15 : d17;
 } else {
  d18 = d17;
 }
 if (i5) {
  __ZN7WebCore16SuspendableTimer12startOneShotEd(i10, d18);
  STACKTOP = i6;
  return;
 } else {
  __ZN7WebCore16SuspendableTimer14startRepeatingEd(i10, d18);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore8DOMTimerC1EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i1;
 __ZN7WebCore16SuspendableTimerC2EPNS_22ScriptExecutionContextE(i10, i2);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 68;
 i11 = i1 + 88 | 0;
 HEAP32[i11 >> 2] = (HEAP32[H_BASE + 112 >> 2] | 0) + 1;
 i12 = i3 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = i3;
 HEAP32[i1 + 96 >> 2] = i4;
 i3 = HEAP32[i11 >> 2] | 0;
 HEAP8[i1 + 100 | 0] = (__ZN7WebCore20UserGestureIndicator21processingUserGestureEv() | 0) & (i4 | 0) < 1001 & (i3 | 0) == 1 & 1;
 i3 = i1 + 84 | 0;
 i12 = i2 + 108 | 0;
 i13 = i9 + 8 | 0;
 while (1) {
  i14 = __ZN7WebCore22ScriptExecutionContext20circularSequentialIDEv(i2) | 0;
  HEAP32[i3 >> 2] = i14;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i8 >> 2] = i1;
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_(i9, i12, i7, i8);
  if ((HEAP8[i13] & 1) != 0) {
   break;
  }
 }
 d15 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] & 1](i2);
 d16 = +(i4 | 0) * +.001;
 d17 = d16 > +.001 ? d16 : +.001;
 if (d17 < d15) {
  d18 = (HEAP32[i11 >> 2] | 0) > 4 ? d15 : d17;
 } else {
  d18 = d17;
 }
 if (i5) {
  __ZN7WebCore16SuspendableTimer12startOneShotEd(i10, d18);
  STACKTOP = i6;
  return;
 } else {
  __ZN7WebCore16SuspendableTimer14startRepeatingEd(i10, d18);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = __ZN3WTF10fastMallocEj(104) | 0;
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore8DOMTimerC2EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib(i7, i1, i6, i3, i4);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore15ScheduledActionD2Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i7 + 44 | 0);
 i6 = i7 + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i1 | 0) == 0) {
  i10 = HEAP32[i6 >> 2] | 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 15](i1) | 0) {
  i11 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(__ZNK7WebCore8Document4pageEv(i1 - 156 + 68 | 0) | 0) | 0;
 } else {
  i11 = __ZN7WebCore24InspectorInstrumentation40instrumentingAgentsForNonDocumentContextEPNS_22ScriptExecutionContextE(i1) | 0;
 }
 if ((i11 | 0) == 0) {
  i10 = HEAP32[i6 >> 2] | 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 __ZN7WebCore24InspectorInstrumentation19didInstallTimerImplEPNS_19InstrumentingAgentsEiibPNS_22ScriptExecutionContextE(i11, i7, i3, i4, i1);
 i10 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore8DOMTimer26adjustMinimumTimerIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, i9 = 0, d10 = +0;
 i3 = i1 + 88 | 0;
 if ((HEAP32[i3 >> 2] | 0) < 5) {
  return;
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 d5 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i4 >> 2] | 0) + 64 >> 2] & 1](i4);
 i4 = i1 + 96 | 0;
 d6 = +(HEAP32[i4 >> 2] | 0) * +.001;
 d7 = d6 > +.001 ? d6 : +.001;
 if (d7 < d5) {
  d8 = (HEAP32[i3 >> 2] | 0) > 4 ? d5 : d7;
 } else {
  d8 = d7;
 }
 i9 = i1;
 if (+__ZNK7WebCore16SuspendableTimer14repeatIntervalEv(i9) != +0) {
  __ZN7WebCore16SuspendableTimer21augmentRepeatIntervalEd(i9, d8 - +__ZNK7WebCore16SuspendableTimer14repeatIntervalEv(i9));
  return;
 }
 d7 = +(HEAP32[i4 >> 2] | 0) * +.001;
 d5 = d7 > +.001 ? d7 : +.001;
 if (d5 < d2) {
  d10 = (HEAP32[i3 >> 2] | 0) > 4 ? d2 : d5;
 } else {
  d10 = d5;
 }
 __ZN7WebCore16SuspendableTimer19augmentFireIntervalEd(i9, d8 - d10);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 22;
}
function __ZN7WebCore8DOMTimerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 68;
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i1 + 84 >> 2];
  __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i4 + 108 | 0, i3) | 0;
 }
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore16SuspendableTimerD2Ev(i5);
  i6 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i6);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i5 = i1;
 __ZN7WebCore16SuspendableTimerD2Ev(i5);
 i6 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i2;
 return;
}
function __ZThn44_N7WebCore8DOMTimerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 44 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i1 >> 2] = H_BASE + 68;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i1 + 40 >> 2];
  __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i5 + 108 | 0, i3) | 0;
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i4;
  __ZN7WebCore16SuspendableTimerD2Ev(i6);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i6 = i4;
 __ZN7WebCore16SuspendableTimerD2Ev(i6);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZThn44_N7WebCore8DOMTimerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 44 | 0;
 HEAP32[i4 >> 2] = H_BASE + 16;
 HEAP32[i1 >> 2] = H_BASE + 68;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i1 + 40 >> 2];
  __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i5 + 108 | 0, i3) | 0;
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i6 = i4;
  __ZN7WebCore16SuspendableTimerD2Ev(i6);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i6 = i4;
 __ZN7WebCore16SuspendableTimerD2Ev(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8DOMTimerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 68;
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i1 + 84 >> 2];
  __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i4 + 108 | 0, i3) | 0;
 }
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore16SuspendableTimerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i5 = i1;
 __ZN7WebCore16SuspendableTimerD2Ev(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore8DOMTimerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 68;
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = HEAP32[i1 + 84 >> 2];
  __ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi(i4 + 108 | 0, i3) | 0;
 }
 i3 = HEAP32[i1 + 92 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i5 = i1;
  __ZN7WebCore16SuspendableTimerD2Ev(i5);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i5 = i1;
 __ZN7WebCore16SuspendableTimerD2Ev(i5);
 STACKTOP = i2;
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
function __ZNK7WebCore8DOMTimer15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, d4 = +0, d5 = +0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 d4 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 1](i3);
 if (d4 == +0) {
  d5 = d2;
  return +d5;
 }
 if (+__ZN3WTF27monotonicallyIncreasingTimeEv() >= d2) {
  d5 = d2;
  return +d5;
 }
 d5 = d4 * +Math_ceil(d2 / d4);
 return +d5;
}
function __ZNK7WebCore8DOMTimer24intervalClampedToMinimumEid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var d4 = +0, d5 = +0;
 d4 = +(i2 | 0) * +.001;
 d5 = d4 > +.001 ? d4 : +.001;
 if (d5 < d3) {
  return +((HEAP32[i1 + 88 >> 2] | 0) > 4 ? d3 : d5);
 } else {
  return +d5;
 }
 return +0;
}
function __ZThn44_N7WebCore8DOMTimer16contextDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 44 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1);
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 return;
}
function __ZN7WebCore8DOMTimer16contextDestroyedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 + 44 | 0);
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function vii___ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function __ZN7WebCore8DOMTimer7didStopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 92 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore15ScheduledActionD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZN7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
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
function ii___ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore16SuspendableTimer18hasPendingActivityEv(i1 | 0) | 0;
}
function ii___ZThn44_NK7WebCore16SuspendableTimer10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn44_NK7WebCore16SuspendableTimer10canSuspendEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore16SuspendableTimer10canSuspendEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore16SuspendableTimer10canSuspendEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZThn44_N7WebCore16SuspendableTimer6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore16SuspendableTimer6resumeEv(i1 | 0);
}
function vi___ZThn44_N7WebCore16SuspendableTimer4stopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore16SuspendableTimer4stopEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function vi___ZN7WebCore16SuspendableTimer6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimer6resumeEv(i1 | 0);
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
function vi___ZN7WebCore16SuspendableTimer4stopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimer4stopEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore8DOMTimerC2EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib,b0];
  var FUNCTION_TABLE_di = [b1,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore8DOMTimer15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore8DOMTimer16contextDestroyedEv,b3,__ZN7WebCore8DOMTimer7didStopEv,b3,__ZN7WebCore8DOMTimerD2Ev,b3,vi___ZN7WebCore16SuspendableTimer4stopEv__wrapper,b3,vi___ZN7WebCore16SuspendableTimer6resumeEv__wrapper,b3,__ZThn44_N7WebCore8DOMTimer16contextDestroyedEv,b3,vi___ZThn44_N7WebCore16SuspendableTimer6resumeEv__wrapper,b3,__ZN7WebCore8DOMTimerD0Ev,b3,__ZThn44_N7WebCore8DOMTimerD1Ev,b3,__ZThn44_N7WebCore8DOMTimerD0Ev,b3,vi___ZThn44_N7WebCore16SuspendableTimer4stopEv__wrapper,b3,__ZN7WebCore8DOMTimer5firedEv,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b4,vii___ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,ii___ZNK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper,b5,ii___ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper,b5,ii___ZNK7WebCore16SuspendableTimer10canSuspendEv__wrapper,b5,ii___ZThn44_NK7WebCore16SuspendableTimer10canSuspendEv__wrapper,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_ceil": _ceil, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore8DOMTimer16contextDestroyedEv","_strlen","__ZN7WebCore8DOMTimer7didStopEv","__ZN7WebCore8DOMTimerD2Ev","__ZN3WTF7HashMapIiPN7WebCore8DOMTimerENS_7IntHashIjEENS_10HashTraitsIiEENS6_IS3_EEE6removeERKi","__ZThn44_N7WebCore8DOMTimer16contextDestroyedEv","__ZNK7WebCore8DOMTimer15alignedFireTimeEd","__ZN7WebCore8DOMTimer10removeByIdEPNS_22ScriptExecutionContextEi","__ZN7WebCore8DOMTimer26adjustMinimumTimerIntervalEd","_memset","_memcpy","__ZN7WebCore8DOMTimerD0Ev","__ZN7WebCore8DOMTimer7installEPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib","__ZN7WebCore8DOMTimerC2EPNS_22ScriptExecutionContextEN3WTF10PassOwnPtrINS_15ScheduledActionEEEib","__ZN7WebCore15ScheduledActionD2Ev","__ZThn44_N7WebCore8DOMTimerD0Ev","__ZNK7WebCore8DOMTimer24intervalClampedToMinimumEid","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore8DOMTimer5firedEv","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore8DOMTimerEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIiS4_S9_NS_10HashTraitsIiEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKiRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIiS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZThn44_N7WebCore8DOMTimerD1Ev"]

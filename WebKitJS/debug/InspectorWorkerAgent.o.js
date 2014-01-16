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
H_BASE = parentModule["_malloc"](256 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 256;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20InspectorWorkerAgentC1EPNS_19InstrumentingAgentsE;
var __ZN7WebCore20InspectorWorkerAgentD1Ev;
/* memory initializer */ allocate([87,111,114,107,101,114,32,105,115,32,103,111,110,101,0,0,87,111,114,107,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+216)|0;
  var __ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannel8s_nextIdE=(H_BASE+256)|0;
  var __ZTVN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelE=(H_BASE+184)|0;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+32)|0;
  var __ZTVN7WebCore20InspectorWorkerAgentE=(H_BASE+72)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20InspectorWorkerAgent27workerGlobalScopeTerminatedEPNS_22WorkerGlobalScopeProxyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 52 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 56 >> 2] | 0;
  i9 = i2;
  i10 = i9 + ~(i9 << 15) | 0;
  i9 = (i10 >>> 10 ^ i10) * 9 & -1;
  i10 = i9 >>> 6 ^ i9;
  i9 = i10 + ~(i10 << 11) | 0;
  i10 = i9 >>> 16 ^ i9;
  i9 = i5 & i10;
  i11 = i4 + (i9 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  L4 : do {
   if ((i12 | 0) == (i2 | 0)) {
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
      i13 = 0;
      break L4;
     }
     i18 = (i15 | 0) == 0 ? i14 : i15;
     i19 = i18 + i16 & i5;
     i20 = i4 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i2 | 0)) {
      i13 = i20;
      break;
     } else {
      i15 = i18;
      i16 = i19;
      i17 = i21;
     }
    }
   }
  } while (0);
  i5 = HEAP32[i1 + 52 >> 2] | 0;
  i6 = (i13 | 0) == 0 ? i4 + (i5 << 3) | 0 : i13;
  i7 = i4;
  i8 = i5;
 }
 i5 = i3 | 0;
 i3 = i1 + 52 | 0;
 do {
  if ((i6 | 0) != (i7 + (i8 << 3) | 0)) {
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i13 = i4 | 0;
     i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i13 >> 2] = i12;
      break;
     }
    }
   } while (0);
   HEAP32[i6 >> 2] = -1;
   i4 = i1 + 64 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   i4 = i1 + 60 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i12;
   i4 = HEAP32[i3 >> 2] | 0;
   if (!((i12 * 6 & -1 | 0) < (i4 | 0) & (i4 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i5, (i4 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i5 = i1 + 28 | 0;
 i3 = i1 + 40 | 0;
 i6 = i5 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i7 = i1 + 32 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i12 = i8 + (i4 << 3) | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 L24 : do {
  if ((i4 | 0) == 0) {
   i22 = i8;
  } else {
   i13 = i8;
   while (1) {
    i9 = HEAP32[i13 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i22 = i13;
     break L24;
    }
    i13 = i13 + 8 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i22 | 0) == (i12 | 0)) {
  return;
 } else {
  i23 = i22;
 }
 L32 : while (1) {
  i24 = i23 + 4 | 0;
  if ((HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0)) {
   i25 = 21;
   break;
  }
  i22 = i23 + 8 | 0;
  if ((i22 | 0) == (i12 | 0)) {
   i25 = 37;
   break;
  } else {
   i26 = i22;
  }
  while (1) {
   i22 = HEAP32[i26 >> 2] | 0;
   if (!((i22 | 0) == (-1 | 0) | (i22 | 0) == 0)) {
    break;
   }
   i22 = i26 + 8 | 0;
   if ((i22 | 0) == (i12 | 0)) {
    i25 = 39;
    break L32;
   } else {
    i26 = i22;
   }
  }
  if ((i26 | 0) == (i12 | 0)) {
   i25 = 38;
   break;
  } else {
   i23 = i26;
  }
 }
 if ((i25 | 0) == 21) {
  i26 = i23 | 0;
  __ZN9Inspector33InspectorWorkerFrontendDispatcher16workerTerminatedEi(HEAP32[i1 + 16 >> 2] | 0, HEAP32[i26 >> 2] | 0);
  i12 = HEAP32[i24 >> 2] | 0;
  if ((i12 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
  if ((i23 | 0) == ((HEAP32[i6 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0)) {
   return;
  }
  HEAP32[i26 >> 2] = -1;
  i26 = i1 + 44 | 0;
  HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
  i26 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
  HEAP32[i3 >> 2] = i26;
  i3 = HEAP32[i7 >> 2] | 0;
  if (!((i26 * 6 & -1 | 0) < (i3 | 0) & (i3 | 0) > 8)) {
   return;
  }
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i5 | 0, (i3 | 0) / 2 & -1, 0) | 0;
  return;
 } else if ((i25 | 0) == 37) {
  return;
 } else if ((i25 | 0) == 38) {
  return;
 } else if ((i25 | 0) == 39) {
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
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
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
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
     i13 = i17 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
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
    i11 = i1 | 0;
    i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i11 >> 2] = i10;
     break;
    }
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
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
   if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
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
  i28 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i31, i26) | 0;
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
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
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
function __ZN7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = HEAP32[i1 + 36 >> 2] | 0;
 i9 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = ~(i3 << 15) + i3 | 0;
 i10 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i10 >>> 6 ^ i10;
 i10 = i1 + ~(i1 << 11) | 0;
 i1 = i10 >>> 16 ^ i10;
 L1 : do {
  if ((i9 | 0) != 0) {
   i10 = i8 & i1;
   i11 = i9 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == (i3 | 0)) {
    i13 = i11;
   } else {
    i11 = (i1 >>> 23) + ~i1 | 0;
    i14 = i11 << 12 ^ i11;
    i11 = i14 >>> 7 ^ i14;
    i14 = i11 << 2 ^ i11;
    i11 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i10;
    i10 = i12;
    while (1) {
     if ((i10 | 0) == 0) {
      break L1;
     }
     i12 = (i14 | 0) == 0 ? i11 : i14;
     i16 = i12 + i15 & i8;
     i17 = i9 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i3 | 0)) {
      i13 = i17;
      break;
     } else {
      i14 = i12;
      i15 = i16;
      i10 = i18;
     }
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i10 + 8 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i15 >> 2] | 0) + 40 >> 2] | 0;
   __ZNK9Inspector14InspectorValue12toJSONStringEv(i6, HEAP32[i4 >> 2] | 0);
   FUNCTION_TABLE_vii[i10 & 15](i15, i6);
   i15 = HEAP32[i6 >> 2] | 0;
   if ((i15 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i10 = i15 | 0;
   i14 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i10 >> 2] = i14;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = ~(i3 << 15) + i3 | 0;
 i8 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i8 >>> 6 ^ i8;
 i8 = i1 + ~(i1 << 11) | 0;
 i1 = i8 >>> 16 ^ i8;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = i6 & i1;
   i9 = i7 + (i8 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i3 | 0)) {
    i11 = i9;
   } else {
    i9 = (i1 >>> 23) + ~i1 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i8;
    i8 = i10;
    while (1) {
     if ((i8 | 0) == 0) {
      break L1;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i3 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i8 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i13 = i8 + 16 | 0;
   if ((HEAP8[i13] & 1) != 0) {
    STACKTOP = i4;
    return;
   }
   HEAP8[i13] = 1;
   i13 = HEAP32[i8 + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] & 15](i13, i8 | 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i2 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = ~(i3 << 15) + i3 | 0;
 i8 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i8 >>> 6 ^ i8;
 i8 = i1 + ~(i1 << 11) | 0;
 i1 = i8 >>> 16 ^ i8;
 L1 : do {
  if ((i7 | 0) != 0) {
   i8 = i6 & i1;
   i9 = i7 + (i8 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i3 | 0)) {
    i11 = i9;
   } else {
    i9 = (i1 >>> 23) + ~i1 | 0;
    i12 = i9 << 12 ^ i9;
    i9 = i12 >>> 7 ^ i12;
    i12 = i9 << 2 ^ i9;
    i9 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i8;
    i8 = i10;
    while (1) {
     if ((i8 | 0) == 0) {
      break L1;
     }
     i10 = (i12 | 0) == 0 ? i9 : i12;
     i14 = i10 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i3 | 0)) {
      i11 = i15;
      break;
     } else {
      i12 = i10;
      i13 = i14;
      i8 = i16;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i13 = i8 + 16 | 0;
   if ((HEAP8[i13] & 1) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP8[i13] = 0;
   i13 = HEAP32[i8 + 8 >> 2] | 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 31](i13);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i2 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20InspectorWorkerAgent29destroyWorkerFrontendChannelsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 28 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 L1 : do {
  if ((HEAP32[i1 + 40 >> 2] | 0) == 0) {
   i8 = i4;
  } else {
   L3 : do {
    if ((i6 | 0) == 0) {
     i9 = i4;
    } else {
     i10 = i4;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i11 = i10 + 8 | 0;
      if ((i11 | 0) == (i7 | 0)) {
       i8 = i4;
       break L1;
      } else {
       i10 = i11;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i7 | 0)) {
    i8 = i4;
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    i10 = i12 + 4 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i13 = i11 + 16 | 0;
    if ((HEAP8[i13] & 1) == 0) {
     i14 = i11;
    } else {
     HEAP8[i13] = 0;
     i13 = HEAP32[i11 + 8 >> 2] | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 36 >> 2] & 31](i13);
     i14 = HEAP32[i10 >> 2] | 0;
    }
    if ((i14 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    }
    i10 = i12 + 8 | 0;
    L16 : do {
     if ((i10 | 0) == (i7 | 0)) {
      i15 = i7;
     } else {
      i13 = i10;
      while (1) {
       i11 = HEAP32[i13 >> 2] | 0;
       if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
        i15 = i13;
        break L16;
       }
       i11 = i13 + 8 | 0;
       if ((i11 | 0) == (i7 | 0)) {
        i15 = i7;
        break;
       } else {
        i13 = i11;
       }
      }
     }
    } while (0);
    i10 = HEAP32[i3 >> 2] | 0;
    if ((i15 | 0) == (i10 + (HEAP32[i5 >> 2] << 3) | 0)) {
     i8 = i10;
     break;
    } else {
     i12 = i15;
    }
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i8);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannel25dispatchMessageFromWorkerERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN9Inspector14InspectorValue9parseJSONERKN3WTF6StringE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] & 15](i5, i4);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = HEAP32[i1 + 4 >> 2] | 0;
   i7 = HEAP32[i1 + 12 >> 2] | 0;
   i8 = i6 | 0;
   HEAP32[i8 >> 2] = i5;
   i9 = i5 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   __ZN9Inspector33InspectorWorkerFrontendDispatcher25dispatchMessageFromWorkerEiN3WTF10PassRefPtrINS_15InspectorObjectEEE(i2, i7, i6);
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 4 | 0;
     i2 = i8 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i2 >> 2] = i9;
      break;
     }
     i9 = i8 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
    }
   } while (0);
   i7 = i5 + 4 | 0;
   i9 = i7 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i9 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i5 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorWorkerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 80;
 HEAP32[i1 + 12 >> 2] = H_BASE + 136;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 80 >> 2] = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
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
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector39InspectorWorkerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore20InspectorWorkerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 80;
 HEAP32[i1 + 12 >> 2] = H_BASE + 136;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 80 >> 2] = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
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
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i5 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZdlPv(i8);
 }
 __ZN9Inspector39InspectorWorkerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i8;
  return;
 }
}
function __ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZN3WTF10fastMallocEj(20) | 0;
 i9 = i1 + 16 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = H_BASE + 192;
 HEAP32[i8 + 4 >> 2] = i10;
 HEAP32[i8 + 8 >> 2] = i2;
 i2 = HEAP32[H_BASE + 256 >> 2] | 0;
 HEAP32[H_BASE + 256 >> 2] = i2 + 1;
 HEAP32[i8 + 12 >> 2] = i2;
 HEAP8[i8 + 16 | 0] = 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i7, i1 + 28 | 0, i6, i5);
 if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
  HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
 }
 i7 = i1 + 25 | 0;
 i1 = HEAP8[i7] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 & 1) == 0) {
   i11 = i1;
  } else {
   i5 = i6 + 16 | 0;
   if ((HEAP8[i5] & 1) != 0) {
    i11 = i1;
    break;
   }
   HEAP8[i5] = 1;
   i5 = HEAP32[i6 + 8 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] & 15](i5, i6 | 0);
   i11 = HEAP8[i7] | 0;
  }
 } while (0);
 __ZN9Inspector33InspectorWorkerFrontendDispatcher13workerCreatedEiRKN3WTF6StringEb(HEAP32[i9 >> 2] | 0, HEAP32[i6 + 12 >> 2] | 0, i3, (i11 & 1) != 0);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 6;
}
function __ZN7WebCore20InspectorWorkerAgent25didStartWorkerGlobalScopeEPNS_22WorkerGlobalScopeProxyERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = i2;
 i2 = i3 | 0;
 __ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i6, i1 + 48 | 0, i5, i2);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   if ((i8 | 0) != 0) {
    i9 = i8 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i7 + 4 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i8;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i1 + 24 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE(i1, HEAP32[i5 >> 2] | 0, i2);
 STACKTOP = i4;
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 - 68 + 56 | 0;
 i1 = i2;
 HEAP8[i2 + 24 | 0] = 1;
 if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
  return;
 }
 i3 = i2 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 52 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i4 + (i6 << 3) | 0;
 if ((HEAP32[i2 + 60 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i8 = i4;
  } else {
   i2 = i4;
   while (1) {
    i9 = HEAP32[i2 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i2;
     break L7;
    }
    i2 = i2 + 8 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  return;
 } else {
  i10 = i8;
 }
 while (1) {
  __ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE(i1, HEAP32[i10 >> 2] | 0, i10 + 4 | 0);
  i8 = i10 + 8 | 0;
  L17 : do {
   if ((i8 | 0) == (i7 | 0)) {
    i11 = i7;
   } else {
    i4 = i8;
    while (1) {
     i6 = HEAP32[i4 >> 2] | 0;
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i11 = i4;
      break L17;
     }
     i6 = i4 + 8 | 0;
     if ((i6 | 0) == (i7 | 0)) {
      i11 = i7;
      break;
     } else {
      i4 = i6;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i5 >> 2] << 3) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 return;
}
function __ZN7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP8[i1 + 24 | 0] = 1;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  return;
 }
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 52 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 60 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i5 | 0) == 0) {
   i7 = i3;
  } else {
   i8 = i3;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i7 = i8;
     break L7;
    }
    i8 = i8 + 8 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  return;
 } else {
  i10 = i7;
 }
 while (1) {
  __ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE(i1, HEAP32[i10 >> 2] | 0, i10 + 4 | 0);
  i7 = i10 + 8 | 0;
  L17 : do {
   if ((i7 | 0) == (i6 | 0)) {
    i11 = i6;
   } else {
    i3 = i7;
    while (1) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      i11 = i3;
      break L17;
     }
     i5 = i3 + 8 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      i11 = i6;
      break;
     } else {
      i3 = i5;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 return;
}
function __ZN7WebCore20InspectorWorkerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector32InspectorWorkerBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_39InspectorWorkerBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20InspectorWorkerAgent46createWorkerFrontendChannelsForExistingWorkersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 52 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + (i5 << 3) | 0;
 if ((HEAP32[i1 + 60 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i5 | 0) == 0) {
   i7 = i3;
  } else {
   i8 = i3;
   while (1) {
    i9 = HEAP32[i8 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i7 = i8;
     break L4;
    }
    i8 = i8 + 8 | 0;
    if ((i8 | 0) == (i6 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i6 | 0)) {
  return;
 } else {
  i10 = i7;
 }
 while (1) {
  __ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE(i1, HEAP32[i10 >> 2] | 0, i10 + 4 | 0);
  i7 = i10 + 8 | 0;
  L14 : do {
   if ((i7 | 0) == (i6 | 0)) {
    i11 = i6;
   } else {
    i3 = i7;
    while (1) {
     i5 = HEAP32[i3 >> 2] | 0;
     if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
      i11 = i3;
      break L14;
     }
     i5 = i3 + 8 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      i11 = i6;
      break;
     } else {
      i3 = i5;
     }
    }
   }
  } while (0);
  if ((i11 | 0) == ((HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
   break;
  } else {
   i10 = i11;
  }
 }
 return;
}
function __ZN7WebCore20InspectorWorkerAgent6createEPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __Znwj(68) | 0;
 i7 = i6;
 HEAP32[i5 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i6;
 HEAP32[i5 >> 2] = H_BASE + 40;
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i6 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 224;
   i9 = i6 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   i10 = i9;
  } else {
   i9 = i4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 224;
   i11 = i6 + 8 | 0;
   HEAP32[i11 >> 2] = i2;
   if ((i9 | 0) == 0) {
    i10 = i11;
    break;
   }
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i10 = i11;
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    i10 = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 80;
 HEAP32[i6 + 12 >> 2] = H_BASE + 136;
 _memset(i6 + 16 | 0, 0, 10) | 0;
 _memset(i6 + 28 | 0, 0, 40) | 0;
 HEAP32[(HEAP32[i10 >> 2] | 0) + 80 >> 2] = i7;
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorWorkerAgentC2EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 40;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 224;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i7;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 224;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i7 | 0) == 0) {
    i8 = i9;
    break;
   }
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i8 = i9;
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    i8 = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 80;
 HEAP32[i1 + 12 >> 2] = H_BASE + 136;
 _memset(i1 + 16 | 0, 0, 10) | 0;
 _memset(i1 + 28 | 0, 0, 40) | 0;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 80 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorWorkerAgentC1EPNS_19InstrumentingAgentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = H_BASE + 24;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = H_BASE + 40;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i5 >> 2] = H_BASE + 224;
   i7 = i1 + 8 | 0;
   HEAP32[i7 >> 2] = i2;
   i8 = i7;
  } else {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i5 >> 2] = H_BASE + 224;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   if ((i7 | 0) == 0) {
    i8 = i9;
    break;
   }
   i10 = i7 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i8 = i9;
    break;
   } else {
    HEAP32[i10 >> 2] = i11;
    i8 = i9;
    break;
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = H_BASE + 80;
 HEAP32[i1 + 12 >> 2] = H_BASE + 136;
 _memset(i1 + 16 | 0, 0, 10) | 0;
 _memset(i1 + 28 | 0, 0, 40) | 0;
 HEAP32[(HEAP32[i8 >> 2] | 0) + 80 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20InspectorWorkerAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 25 | 0] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1, 0);
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 16 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 HEAP8[i2] = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 31](i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1 - 68 + 56 | 0, i2, i3, i4);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 192;
 i2 = i1 + 16 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 31](i2);
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 68 + 56 | 0;
 HEAP8[i2 + 24 | 0] = 0;
 if ((HEAP32[i2 + 16 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore20InspectorWorkerAgent29destroyWorkerFrontendChannelsEv(i2);
 return;
}
function __ZN7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 24 | 0] = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore20InspectorWorkerAgent29destroyWorkerFrontendChannelsEv(i1);
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi(i1 - 68 + 56 | 0, i2, i3);
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi(i1 - 68 + 56 | 0, i2, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZThn12_N7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 - 68 + 81 | 0] = i3 & 1;
 return;
}
function __ZN7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 + 25 | 0] = i3 & 1;
 return;
}
function __ZThn12_N7WebCore20InspectorWorkerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 68 + 56 | 0;
 __ZN7WebCore20InspectorWorkerAgentD2Ev(i2);
 __ZdlPv(i2);
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
function __ZThn12_N7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 1;
 return;
}
function __ZN7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 1;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore20InspectorWorkerAgent33shouldPauseDedicatedWorkerOnStartEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 25 | 0] & 1) != 0 | 0;
}
function __ZThn12_N7WebCore20InspectorWorkerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20InspectorWorkerAgentD2Ev(i1 - 68 + 56 | 0);
 return;
}
function __ZN7WebCore20InspectorWorkerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20InspectorWorkerAgentD2Ev(i1);
 __ZdlPv(i1);
 return;
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
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
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20InspectorWorkerAgent29willDestroyFrontendAndBackendEv,b0,__ZN7WebCore20InspectorWorkerAgentD2Ev,b0,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b0,__ZN7WebCore18InspectorAgentBaseD0Ev,b0,__ZThn12_N7WebCore20InspectorWorkerAgentD0Ev,b0,__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD0Ev,b0,__ZN7WebCore20InspectorWorkerAgentD0Ev,b0,__ZN9Inspector18InspectorAgentBaseD0Ev,b0,__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD1Ev,b0,__ZN7WebCore18InspectorAgentBaseD1Ev,b0,__ZN9Inspector18InspectorAgentBaseD1Ev,b0,__ZThn12_N7WebCore20InspectorWorkerAgentD1Ev,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZThn12_N7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE,b1,__ZN7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE,b1,__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannel25dispatchMessageFromWorkerERKN3WTF6StringE,b1,__ZN7WebCore20InspectorWorkerAgentC2EPNS_19InstrumentingAgentsE,b1,__ZThn12_N7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE,b1,__ZN7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb,b3,__ZThn12_N7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi,b3,__ZN7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb,b3,__ZN7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi,b3,__ZN7WebCore20InspectorWorkerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b3,__ZThn12_N7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb,b3,__ZThn12_N7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi,b3,__ZN7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi,b3,__ZThn12_N7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZThn12_N7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b6,__ZN7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b6,b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore20InspectorWorkerAgent29willDestroyFrontendAndBackendEv","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZThn12_N7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE","__ZN7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb","__ZN7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE","__ZThn12_N7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZThn12_N7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi","__ZN7WebCore20InspectorWorkerAgent29destroyWorkerFrontendChannelsEv","__ZNK7WebCore20InspectorWorkerAgent33shouldPauseDedicatedWorkerOnStartEv","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZThn12_N7WebCore20InspectorWorkerAgentD0Ev","__ZN7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN7WebCore20InspectorWorkerAgentD0Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD1Ev","__ZN7WebCore20InspectorWorkerAgentD2Ev","_memcpy","__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannel25dispatchMessageFromWorkerERKN3WTF6StringE","__ZN7WebCore20InspectorWorkerAgent27workerGlobalScopeTerminatedEPNS_22WorkerGlobalScopeProxyE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS3_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore20InspectorWorkerAgent46createWorkerFrontendChannelsForExistingWorkersEv","__ZN7WebCore20InspectorWorkerAgent25didStartWorkerGlobalScopeEPNS_22WorkerGlobalScopeProxyERKNS_3URLE","__ZN7WebCore20InspectorWorkerAgent7disableEPN3WTF6StringE","__ZN7WebCore20InspectorWorkerAgent6createEPNS_19InstrumentingAgentsE","__ZN7WebCore20InspectorWorkerAgent27createWorkerFrontendChannelEPNS_22WorkerGlobalScopeProxyERKN3WTF6StringE","_memset","__ZN7WebCore20InspectorWorkerAgentC2EPNS_19InstrumentingAgentsE","__ZN3WTF9HashTableIPN7WebCore22WorkerGlobalScopeProxyENS_12KeyValuePairIS3_NS_6StringEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN7WebCore20InspectorWorkerAgent15connectToWorkerEPN3WTF6StringEi","__ZN7WebCore20InspectorWorkerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZThn12_N7WebCore20InspectorWorkerAgent17canInspectWorkersEPN3WTF6StringEPb","__ZThn12_N7WebCore20InspectorWorkerAgentD1Ev","__ZThn12_N7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi","__ZN3WTF9HashTableIiNS_12KeyValuePairIiPN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore20InspectorWorkerAgent20disconnectFromWorkerEPN3WTF6StringEi","__ZThn12_N7WebCore20InspectorWorkerAgent6enableEPN3WTF6StringE","__ZN7WebCore20InspectorWorkerAgent19sendMessageToWorkerEPN3WTF6StringEiRKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZThn12_N7WebCore20InspectorWorkerAgent23setAutoconnectToWorkersEPN3WTF6StringEb","__ZN7WebCore20InspectorWorkerAgent21WorkerFrontendChannelD0Ev","__ZN7WebCore18InspectorAgentBaseD0Ev"]

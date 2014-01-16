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
H_BASE = parentModule["_malloc"](16 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 16;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore28ChildListMutationAccumulatorC1ERNS_13ContainerNodeEN3WTF10PassOwnPtrINS_29MutationObserverInterestGroupEEE;
var __ZN7WebCore28ChildListMutationAccumulatorD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore14StaticNodeListE=env.__ZTVN7WebCore14StaticNodeListE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 1;
 HEAP32[i9 >> 2] = __ZTVN7WebCore14StaticNodeListE + 8;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i9 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i9 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i1 + 28 | 0;
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = 0;
 i13 = i1 + 20 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i12;
 i12 = i1 + 24 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i12 >> 2] = i13;
 i13 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i13 + 4 >> 2] = 0;
 HEAP32[i13 + 8 >> 2] = 1;
 HEAP32[i13 >> 2] = __ZTVN7WebCore14StaticNodeListE + 8;
 i12 = i13 + 12 | 0;
 HEAP32[i12 >> 2] = 0;
 i11 = i13 + 16 | 0;
 HEAP32[i11 >> 2] = 0;
 i10 = i13 + 20 | 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i1 + 16 | 0;
 HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = 0;
 i14 = i1 + 8 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = i10;
 i10 = i1 + 12 | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i14;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i9;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i13;
 i13 = i1 + 32 | 0;
 i11 = i6 | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = 0;
 i13 = i1 + 36 | 0;
 i12 = i7 | 0;
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore14MutationRecord15createChildListERNS_13ContainerNodeEN3WTF10PassRefPtrINS_8NodeListEEES6_NS4_INS_4NodeEEES8_(i3, i14, i4, i5, i6, i7);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 + 8 | 0;
   i6 = i12 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i11 = i7 + 8 | 0;
   i12 = i11 | 0;
   i5 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 + 8 | 0;
   i11 = i9 | 0;
   i5 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i11 >> 2] = i5;
    break;
   }
   i5 = i9 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 8 | 0;
   i5 = i10 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i10 - 8 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
  }
 } while (0);
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 i9 = i8 | 0;
 HEAP32[i9 >> 2] = i3;
 __ZN7WebCore29MutationObserverInterestGroup21enqueueMutationRecordEN3WTF10PassRefPtrINS_14MutationRecordEEE(i7, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i15 = i1 + 40 | 0;
  HEAP32[i15 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i9 = i8 + 4 | 0;
 i8 = i9 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i8 >> 2] = i7;
  i15 = i1 + 40 | 0;
  HEAP32[i15 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 i7 = i9 - 4 | 0;
 if ((i7 | 0) == 0) {
  i15 = i1 + 40 | 0;
  HEAP32[i15 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
 i15 = i1 + 40 | 0;
 HEAP32[i15 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 11;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i5;
    i23 = i9 + (i22 << 3) | 0;
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
    i19 = i20;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = HEAP32[i3 >> 2] | 0;
    i27 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
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
  i26 = i7;
  i27 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = i26;
 HEAP32[i25 + 4 >> 2] = 0;
 i26 = i2 + 12 | 0;
 i7 = (HEAP32[i26 >> 2] | 0) + 1 | 0;
 HEAP32[i26 >> 2] = i7;
 i26 = i2 + 4 | 0;
 i12 = HEAP32[i26 >> 2] | 0;
 if (((HEAP32[i27 >> 2] | 0) + i7 << 1 | 0) < (i12 | 0)) {
  i28 = i25;
  i29 = i12;
 } else {
  if ((i12 | 0) == 0) {
   i30 = 8;
  } else {
   i27 = i12 << 1;
   i30 = (i7 * 6 & -1 | 0) < (i27 | 0) ? i12 : i27;
  }
  i27 = __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i30, i25) | 0;
  i28 = i27;
  i29 = HEAP32[i26 >> 2] | 0;
 }
 i26 = (HEAP32[i4 >> 2] | 0) + (i29 << 3) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i26;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore28ChildListMutationAccumulatorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
   i5 = 3;
  }
 } else {
  i5 = 3;
 }
 if ((i5 | 0) == 3) {
  __ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv(i1);
 }
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i6 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 16 >> 2] = i7;
  HEAP8[H_BASE + 8 | 0] = 1;
  i6 = i7;
 }
 i7 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 __ZN3WTF7HashMapIPN7WebCore13ContainerNodeEPNS1_28ChildListMutationAccumulatorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i6, i3) | 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i3 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((i6 | 0) != 0) {
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i8 + (i6 << 2) | 0;
  i6 = i8;
  while (1) {
   i8 = (HEAP32[i6 >> 2] | 0) + 8 | 0;
   i10 = i8 - 8 | 0;
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
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
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i9 = HEAP32[i5 >> 2] | 0;
  i6 = i9 + (i3 << 2) | 0;
  i3 = i9;
  while (1) {
   i9 = (HEAP32[i3 >> 2] | 0) + 8 | 0;
   i10 = i9 - 8 | 0;
   i8 = i9 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = (HEAP32[i7 >> 2] | 0) + 8 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28ChildListMutationAccumulatorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  if ((HEAP32[i1 + 28 >> 2] | 0) != 0) {
   i5 = 3;
  }
 } else {
  i5 = 3;
 }
 if ((i5 | 0) == 3) {
  __ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv(i1);
 }
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i6 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i5;
  _memset(i5 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 16 >> 2] = i7;
  HEAP8[H_BASE + 8 | 0] = 1;
  i6 = i7;
 }
 i7 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 __ZN3WTF7HashMapIPN7WebCore13ContainerNodeEPNS1_28ChildListMutationAccumulatorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i6, i3) | 0;
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i3 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZdlPv(i3);
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i5 = i6 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i8 = i6 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = i1 + 28 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 20 | 0;
 if ((i6 | 0) != 0) {
  i8 = HEAP32[i5 >> 2] | 0;
  i9 = i8 + (i6 << 2) | 0;
  i6 = i8;
  while (1) {
   i8 = (HEAP32[i6 >> 2] | 0) + 8 | 0;
   i10 = i8 - 8 | 0;
   i11 = i8 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
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
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i9 = HEAP32[i5 >> 2] | 0;
  i6 = i9 + (i3 << 2) | 0;
  i3 = i9;
  while (1) {
   i9 = (HEAP32[i3 >> 2] | 0) + 8 | 0;
   i10 = i9 - 8 | 0;
   i8 = i9 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i12;
   do {
    if ((i12 | 0) < 1) {
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i10);
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = (HEAP32[i7 >> 2] | 0) + 8 | 0;
 i7 = i4 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1 + 28 | 0;
 i5 = i1 + 16 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    i6 = i1 + 16 | 0;
    i7 = 7;
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) != (i2 | 0)) {
    i7 = 6;
    break;
   }
   i8 = i1 + 16 | 0;
   i7 = 21;
  } else {
   i7 = 6;
  }
 } while (0);
 if ((i7 | 0) == 6) {
  __ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv(i1);
  i9 = i1 + 16 | 0;
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = i9;
   i7 = 7;
  } else {
   i8 = i9;
   i7 = 21;
  }
 }
 do {
  if ((i7 | 0) == 7) {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    i8 = i6;
    i7 = 21;
    break;
   }
   i9 = i2 + 24 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i10 = i5 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i1 + 32 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i5;
   do {
    if ((i11 | 0) != 0) {
     i5 = i11 + 8 | 0;
     i10 = i5 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     HEAP32[i10 >> 2] = i12;
     if ((i12 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
    }
   } while (0);
   i11 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i5 = i11 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   i5 = i1 + 36 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i11;
   do {
    if ((i12 | 0) != 0) {
     i11 = i12 + 8 | 0;
     i5 = i11 | 0;
     i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
    }
   } while (0);
   HEAP32[i1 + 40 >> 2] = HEAP32[i9 >> 2];
   i13 = i6;
  }
 } while (0);
 do {
  if ((i7 | 0) == 21) {
   i6 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i4 = i6 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = i1 + 36 | 0;
   i12 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i6;
   if ((i12 | 0) == 0) {
    i13 = i8;
    break;
   }
   i6 = i12 + 8 | 0;
   i12 = i6 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    i13 = i8;
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    i13 = i8;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
   i13 = i8;
  }
 } while (0);
 i8 = i1 + 8 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i7 + 1 | 0);
  HEAP32[(HEAP32[i8 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] = i2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 i13 = i2 + 8 | 0;
 i2 = i13 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
 return;
}
function __ZN7WebCore28ChildListMutationAccumulator10childAddedERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
   i6 = 8;
  } else {
   i6 = 3;
  }
 } else {
  i6 = 3;
 }
 do {
  if ((i6 | 0) == 3) {
   if ((HEAP32[i1 + 40 >> 2] | 0) == (HEAP32[i2 + 24 >> 2] | 0)) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i2 + 28 >> 2] | 0)) {
     i7 = i5;
    } else {
     i6 = 5;
    }
   } else {
    i6 = 5;
   }
   if ((i6 | 0) == 5) {
    __ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv(i1);
    i7 = HEAP32[i4 >> 2] | 0;
   }
   if ((i7 | 0) == 0) {
    i6 = 8;
    break;
   }
   i8 = i1 + 28 | 0;
  }
 } while (0);
 do {
  if ((i6 | 0) == 8) {
   i7 = i1 + 28 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i8 = i7;
    break;
   }
   i4 = HEAP32[i2 + 24 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4 + 8 | 0;
    HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   }
   i5 = i1 + 32 | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i4;
   do {
    if ((i9 | 0) != 0) {
     i4 = i9 + 8 | 0;
     i5 = i4 | 0;
     i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     HEAP32[i5 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i9 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i4 = i9 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = i1 + 36 | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i10 | 0) == 0) {
    i8 = i7;
    break;
   }
   i9 = i10 + 8 | 0;
   i10 = i9 | 0;
   i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    i8 = i7;
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    i8 = i7;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
   i8 = i7;
  }
 } while (0);
 HEAP32[i1 + 40 >> 2] = i2;
 i6 = i1 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
  __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i9 + 1 | 0);
  HEAP32[(HEAP32[i6 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) >> 2] = i2;
 } else {
  HEAP32[(HEAP32[i6 >> 2] | 0) + (i9 << 2) >> 2] = i2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i2 + 8 | 0;
 i2 = i8 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
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
   i19 = i16 + (i14 << 3) | 0;
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
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore28ChildListMutationAccumulator11getOrCreateERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i8 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  i10 = i9;
  _memset(i9 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 16 >> 2] = i10;
  HEAP8[H_BASE + 8 | 0] = 1;
  i8 = i10;
 }
 HEAP32[i5 >> 2] = i2;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i4, i8 | 0, i5, i6);
 if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i11 = 0;
   i12 = i1 | 0;
   HEAP32[i12 >> 2] = i11;
   STACKTOP = i3;
   return;
  }
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  i11 = i6;
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 i6 = __ZN3WTF10fastMallocEj(48) | 0;
 i5 = i6;
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 770 | 0] & 1) == 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = 0;
  i13 = i8;
 } else {
  __ZN7WebCore29MutationObserverInterestGroup14createIfNeededERNS_4NodeENS_16MutationObserver12MutationTypeEhPKNS_13QualifiedNameE(i7, i2 | 0, 1, 0, 0);
  i13 = i7 | 0;
 }
 HEAP32[i6 >> 2] = 1;
 HEAP32[i6 + 4 >> 2] = i2;
 i7 = i2 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 _memset(i6 + 8 | 0, 0, 36) | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i6 + 44 >> 2] = i7;
 i7 = HEAP32[i13 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i13 = HEAP32[i7 >> 2] | 0;
  if ((i13 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZdlPv(i7);
 }
 HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] = i5;
 i11 = i5;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i11;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore13ContainerNodeEPNS1_28ChildListMutationAccumulatorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_(i1, i2) {
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
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
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
 __ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
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
function __ZN7WebCore28ChildListMutationAccumulatorC2ERNS_13ContainerNodeEN3WTF10PassOwnPtrINS_29MutationObserverInterestGroupEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i4 = i2 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i3 | 0;
 _memset(i1 + 8 | 0, 0, 36) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = i3;
 return;
}
function __ZN7WebCore28ChildListMutationAccumulatorC1ERNS_13ContainerNodeEN3WTF10PassOwnPtrINS_29MutationObserverInterestGroupEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i4 = i2 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i3 | 0;
 _memset(i1 + 8 | 0, 0, 36) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 44 >> 2] = i3;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore28ChildListMutationAccumulator7isEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 28 >> 2] | 0) == 0;
 return i2 | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore28ChildListMutationAccumulatorD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore28ChildListMutationAccumulatorC2ERNS_13ContainerNodeEN3WTF10PassOwnPtrINS_29MutationObserverInterestGroupEEE,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore14StaticNodeListE": __ZTVN7WebCore14StaticNodeListE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore28ChildListMutationAccumulatorC2ERNS_13ContainerNodeEN3WTF10PassOwnPtrINS_29MutationObserverInterestGroupEEE","_strlen","__ZN7WebCore28ChildListMutationAccumulator11getOrCreateERNS_13ContainerNodeE","__ZN3WTF7HashMapIPN7WebCore13ContainerNodeEPNS1_28ChildListMutationAccumulatorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS8_IS5_EEE6removeERKS3_","__ZN7WebCore28ChildListMutationAccumulator21enqueueMutationRecordEv","__ZN3WTF6VectorINS_3RefIN7WebCore4NodeEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore28ChildListMutationAccumulator15willRemoveChildERNS_4NodeE","_memset","_memcpy","__ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES3_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS3_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore28ChildListMutationAccumulatorD2Ev","__ZN7WebCore28ChildListMutationAccumulator10childAddedERNS_4NodeE","__ZN7WebCore28ChildListMutationAccumulator7isEmptyEv","__ZN3WTF9HashTableIPN7WebCore13ContainerNodeENS_12KeyValuePairIS3_PNS1_28ChildListMutationAccumulatorEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS3_EENS_7HashMapIS3_S6_SB_NS_10HashTraitsIS3_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_"]

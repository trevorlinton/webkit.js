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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18DocumentEventQueueC1ERNS_8DocumentE;
var __ZN7WebCore18DocumentEventQueueD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18DocumentEventQueue5TimerE=(H_BASE+48)|0;
  var __ZTVN7WebCore18DocumentEventQueueE=(H_BASE+8)|0;
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
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = i3;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 200 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i20 >> 2] = i14;
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i14 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i14;
 i20 = i2 + 4 | 0;
 i8 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i14 << 1 | 0) < (i8 | 0)) {
  i22 = i19;
  i23 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i8 << 1;
   i24 = (i14 * 6 & -1 | 0) < (i21 | 0) ? i8 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
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
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore18DocumentEventQueue22pendingEventTimerFiredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 44 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
  _memset(i7 | 0, 0, 16) | 0;
 }
 i7 = i1 + 12 | 0;
 i8 = i5 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 >> 2] = HEAP32[i1 + 40 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i3, i7 | 0, i5, i4);
 if ((HEAP8[i3 + 8 | 0] & 1) != 0) {
  i4 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  i3 = i1 + 36 | 0;
  HEAP32[i4 + 4 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i4 + 8 >> 2] = 0;
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == 0) {
   HEAP32[i1 + 32 >> 2] = i4;
  } else {
   HEAP32[i5 + 8 >> 2] = i4;
  }
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 8 | 0;
   i3 = i8 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i8 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 24 | 0;
 L18 : do {
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   i1 = i6 | 0;
   while (1) {
    __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE9takeFirstEv(i6, i7);
    i8 = HEAP32[i1 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L18;
    }
    __ZN7WebCore18DocumentEventQueue13dispatchEventERNS_5EventE(0, i8);
    i3 = i8 + 8 | 0;
    i8 = i3 | 0;
    i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    do {
     if ((i9 | 0) == 0) {
      i10 = i3 - 8 | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     } else {
      HEAP32[i8 >> 2] = i9;
     }
    } while (0);
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i5 = i4 + 8 | 0;
 i4 = i5 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i7;
 if ((i7 | 0) >= 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i2;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE6removeENS_19ListHashSetIteratorIS4_Lj16ES6_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i2 = i1 | 0;
 HEAP32[i5 >> 2] = i6;
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E4findERKS7_(i4, i2, i5);
 i5 = HEAP32[i4 >> 2] | 0;
 i4 = i1 + 4 | 0;
 do {
  if ((i5 | 0) != ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0)) {
   HEAP32[i5 >> 2] = -1;
   i8 = i1 + 16 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1 + 12 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i9;
   i8 = HEAP32[i4 >> 2] | 0;
   if (!((i9 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i2, (i8 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i2 = i6 + 4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i6 + 8 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 20 >> 2] = i8;
 } else {
  HEAP32[i4 + 8 >> 2] = i8;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 24 >> 2] = i4;
 } else {
  HEAP32[i8 + 4 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 8 | 0;
   i2 = i8 | 0;
   i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i2 >> 2] = i9;
    break;
   }
   i9 = i8 - 8 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
  }
 } while (0);
 i1 = i4 + 8 | 0;
 do {
  if (i1 >>> 0 <= i6 >>> 0) {
   if ((i1 + 192 | 0) >>> 0 <= i6 >>> 0) {
    break;
   }
   i9 = i4 | 0;
   HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i9 >> 2] = i6;
   i7 = 1;
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i6);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i1, i2, i3) {
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
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == 0) {
     i26 = 5;
     break;
    } else if ((i25 | 0) == (-1 | 0)) {
     i27 = i23;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i27 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i27;
   }
   if ((i26 | 0) == 5) {
    i26 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE9takeFirstEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i6 = i2 + 20 | 0;
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E4findERKS7_(i4, i5, i6);
 i7 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i4 >> 2] | 0;
 i4 = i2 + 4 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i2 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0)) {
   HEAP32[i8 >> 2] = -1;
   i1 = i2 + 16 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
   i1 = i2 + 12 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i7;
   i1 = HEAP32[i4 >> 2] | 0;
   if (!((i7 * 6 & -1 | 0) < (i1 | 0) & (i1 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_(i5, (i1 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i5 = HEAP32[i6 >> 2] | 0;
 i4 = i5 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i1 = i5 + 8 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i6 >> 2] = i7;
 } else {
  HEAP32[i8 + 8 >> 2] = i7;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i2 + 24 >> 2] = i8;
 } else {
  HEAP32[i7 + 4 >> 2] = i8;
 }
 i8 = HEAP32[i2 + 28 >> 2] | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 8 | 0;
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i7 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i2 = i8 + 8 | 0;
 do {
  if (i2 >>> 0 <= i5 >>> 0) {
   if ((i2 + 192 | 0) >>> 0 <= i5 >>> 0) {
    break;
   }
   i6 = i8 | 0;
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 if ((HEAP8[i1 + 64 | 0] & 1) != 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i6 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i5 >> 2] = HEAP32[i1 + 40 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_(i4, i1 + 12 | 0, i6, i5);
 if ((HEAP8[i4 + 8 | 0] & 1) != 0) {
  i5 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
  i4 = i1 + 36 | 0;
  HEAP32[i5 + 4 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 8 >> 2] = 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   HEAP32[i1 + 32 >> 2] = i5;
  } else {
   HEAP32[i6 + 8 >> 2] = i5;
  }
  HEAP32[i4 >> 2] = i5;
 }
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 + 8 | 0;
   i4 = i8 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i8 - 8 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  }
 } while (0);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if (+HEAPF64[i5 + 8 >> 3] != +0) {
  i7 = 1;
  STACKTOP = i3;
  return i7 | 0;
 }
 do {
  if ((HEAP8[i5 + 56 | 0] & 1) != 0) {
   if ((HEAP8[i5 + 80 | 0] & 1) == 0) {
    break;
   } else {
    i7 = 1;
   }
   STACKTOP = i3;
   return i7 | 0;
  }
 } while (0);
 __ZN7WebCore16SuspendableTimer12startOneShotEd(i5, +0);
 i7 = 1;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore18DocumentEventQueue28enqueueOrDispatchScrollEventERNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 if ((HEAP8[i1 + 64 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP16[(HEAP32[i1 + 4 >> 2] | 0) + 768 >> 1] & 4096) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i5, i1 + 44 | 0, i4, i4);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i2 | 0);
 i4 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 316 | 0;
 i8 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i8, i4, i5, 0);
 i5 = i2 | 0;
 i4 = i6 | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 31](i5);
 }
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i8, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] & 31](i6);
 }
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i8;
 __ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE(i1, i7) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i7 + 8 | 0;
 i7 = i6 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i6 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18DocumentEventQueue13dispatchEventERNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 16 | 0;
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 15](i6) | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
  i9 = i5 | 0;
  HEAP32[i9 >> 2] = i2;
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  FUNCTION_TABLE_iii[i8 & 7](i6, i5) | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i1;
   return;
  }
  i9 = i5 + 8 | 0;
  i5 = i9 | 0;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i5 >> 2] = i6;
   STACKTOP = i1;
   return;
  }
  i6 = i9 - 8 | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i1;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
  STACKTOP = i1;
  return;
 }
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = i2;
 i9 = i2 + 8 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore9DOMWindow13dispatchEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i7, i3, i4) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 31](i4);
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i6 = i4 + 8 | 0;
 i4 = i6 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i4 >> 2] = i9;
  STACKTOP = i1;
  return;
 }
 i9 = i6 - 8 | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
 STACKTOP = i1;
 return;
}
function __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE4findERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
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
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E4findERKS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 4 >> 2] << 2 | 0;
  HEAP32[i1 >> 2] = i5;
  HEAP32[i1 + 4 >> 2] = i5;
  return;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i6 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 i3 = i6;
 i7 = i3 + ~(i3 << 15) | 0;
 i3 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i3 >>> 6 ^ i3;
 i3 = i7 + ~(i7 << 11) | 0;
 i7 = i3 >>> 16 ^ i3;
 i3 = (i7 >>> 23) + ~i7 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = i7;
 i7 = 0;
 while (1) {
  i9 = i8 & i5;
  i10 = i4 + (i9 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 5;
   break;
  } else if ((i12 | 0) != (-1 | 0)) {
   if ((HEAP32[i11 >> 2] | 0) == (i6 | 0)) {
    i13 = 8;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i3 : i7;
  i8 = i11 + i9 | 0;
  i7 = i11;
 }
 do {
  if ((i13 | 0) == 5) {
   i14 = i4 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i15 = i1 | 0;
  } else if ((i13 | 0) == 8) {
   i7 = i4 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
   i8 = i1 | 0;
   if ((i10 | 0) == 0) {
    i14 = i7;
    i15 = i8;
    break;
   }
   HEAP32[i8 >> 2] = i10;
   HEAP32[i1 + 4 >> 2] = i7;
   return;
  }
 } while (0);
 HEAP32[i15 >> 2] = i14;
 HEAP32[i1 + 4 >> 2] = i14;
 return;
}
function __ZN7WebCore18DocumentEventQueueD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = i1 + 40 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 8 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i11 = 12;
    } else {
     if ((i7 + 192 | 0) >>> 0 <= i4 >>> 0) {
      i11 = 12;
      break;
     }
     i10 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i4;
    }
   } while (0);
   if ((i11 | 0) == 12) {
    i11 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 return;
}
function __ZN7WebCore18DocumentEventQueueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = i1 + 40 | 0;
 if ((i2 | 0) != 0) {
  i4 = i2;
  while (1) {
   i2 = i4 + 8 | 0;
   i5 = HEAP32[i2 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 8 | 0;
     i9 = i8 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i8 - 8 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i11 = 12;
    } else {
     if ((i7 + 192 | 0) >>> 0 <= i4 >>> 0) {
      i11 = 12;
      break;
     }
     i10 = i6 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i4;
    }
   } while (0);
   if ((i11 | 0) == 12) {
    i11 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 return;
}
function __ZN7WebCore18DocumentEventQueue5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 HEAP8[i1 + 64 | 0] = 1;
 __ZN7WebCore16SuspendableTimer6cancelEv(HEAP32[i1 + 8 >> 2] | 0);
 i2 = i1 + 12 | 0;
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i1 + 40 | 0;
  i6 = i4;
  while (1) {
   i4 = i6 + 8 | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 8 | 0;
     i11 = i10 | 0;
     i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i11 >> 2] = i12;
      break;
     }
     i12 = i10 - 8 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i9 = i8 + 8 | 0;
   do {
    if (i9 >>> 0 > i6 >>> 0) {
     i13 = 11;
    } else {
     if ((i9 + 192 | 0) >>> 0 <= i6 >>> 0) {
      i13 = 11;
      break;
     }
     i12 = i8 | 0;
     HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i12 >> 2] = i6;
    }
   } while (0);
   if ((i13 | 0) == 11) {
    i13 = 0;
    __ZN3WTF8fastFreeEPv(i6);
   }
   if ((i7 | 0) == 0) {
    break;
   } else {
    i6 = i7;
   }
  }
 }
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i3 >> 2] = 0;
  i14 = i1 + 36 | 0;
  HEAP32[i14 >> 2] = 0;
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 _memset(i2 | 0, 0, 16) | 0;
 HEAP32[i3 >> 2] = 0;
 i14 = i1 + 36 | 0;
 HEAP32[i14 >> 2] = 0;
 return;
}
function __ZN7WebCore18DocumentEventQueue11cancelEventERNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 12 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE4findERKS4_(i4, i6, i5);
 i5 = __ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE6removeENS_19ListHashSetIteratorIS4_Lj16ES6_EE(i6, i4) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 8 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i7 - 8 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 31](i8);
  }
 } while (0);
 if ((HEAP32[i1 + 24 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN7WebCore16SuspendableTimer6cancelEv(HEAP32[i1 + 8 >> 2] | 0);
 STACKTOP = i3;
 return i5 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 26;
}
function __ZN7WebCore18DocumentEventQueueC2ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(88) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore16SuspendableTimerC2EPNS_22ScriptExecutionContextE(i2, (i4 | 0) == 0 ? 0 : i4 + 88 | 0);
 HEAP32[i2 >> 2] = H_BASE + 56;
 HEAP32[i2 + 44 >> 2] = H_BASE + 104;
 HEAP32[i2 + 84 >> 2] = i1;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 28) | 0;
 i4 = __Znwj(200) | 0;
 i3 = i4 + 8 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i4 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 192) | 0;
 HEAP32[i1 + 40 >> 2] = i4;
 _memset(i1 + 44 | 0, 0, 21) | 0;
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i2 + 44 | 0);
 return;
}
function __ZN7WebCore18DocumentEventQueueC1ERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(88) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore16SuspendableTimerC2EPNS_22ScriptExecutionContextE(i2, (i4 | 0) == 0 ? 0 : i4 + 88 | 0);
 HEAP32[i2 >> 2] = H_BASE + 56;
 HEAP32[i2 + 44 >> 2] = H_BASE + 104;
 HEAP32[i2 + 84 >> 2] = i1;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 28) | 0;
 i4 = __Znwj(200) | 0;
 i3 = i4 + 8 | 0;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i4 + 4 | 0] = 0;
 _memset(i3 | 0, 0, 192) | 0;
 HEAP32[i1 + 40 >> 2] = i4;
 _memset(i1 + 44 | 0, 0, 21) | 0;
 __ZN7WebCore15ActiveDOMObject15suspendIfNeededEv(i2 + 44 | 0);
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
function vii___ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
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
function __ZThn44_N7WebCore18DocumentEventQueue5TimerD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 44 | 0;
 __ZN7WebCore16SuspendableTimerD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function ii___ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv(i1 | 0) | 0;
}
function vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore26ContextDestructionObserver16contextDestroyedEv(i1 | 0);
}
function __ZN7WebCore18DocumentEventQueue5Timer5firedEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18DocumentEventQueue22pendingEventTimerFiredEv(HEAP32[i1 + 84 >> 2] | 0);
 return;
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
function __ZN7WebCore18DocumentEventQueue5TimerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimerD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
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
function vi___ZThn44_N7WebCore16SuspendableTimer6resumeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore16SuspendableTimer6resumeEv(i1 | 0);
}
function vi___ZThn44_N7WebCore16SuspendableTimer4stopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore16SuspendableTimer4stopEv(i1 | 0);
}
function __ZThn44_N7WebCore18DocumentEventQueue5TimerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimerD2Ev(i1 - 44 | 0);
 return;
}
function vi___ZN7WebCore16SuspendableTimer7didStopEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimer7didStopEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore18DocumentEventQueueD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18DocumentEventQueueD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore18DocumentEventQueue5TimerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16SuspendableTimerD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
 return 0;
}
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
 return +0;
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
  var FUNCTION_TABLE_did = [b0,b0,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZThn44_N7WebCore16SuspendableTimer6resumeEv__wrapper,b1,__ZN7WebCore18DocumentEventQueueD2Ev,b1,__ZN7WebCore18DocumentEventQueue5TimerD1Ev,b1,vi___ZN7WebCore16SuspendableTimer4stopEv__wrapper,b1,vi___ZN7WebCore16SuspendableTimer7didStopEv__wrapper,b1,__ZThn44_N7WebCore18DocumentEventQueue5TimerD1Ev,b1,__ZN7WebCore18DocumentEventQueue5TimerD0Ev,b1,__ZThn44_N7WebCore18DocumentEventQueue5TimerD0Ev,b1,vi___ZN7WebCore16SuspendableTimer6resumeEv__wrapper,b1,__ZN7WebCore18DocumentEventQueueD0Ev,b1,vi___ZN7WebCore26ContextDestructionObserver16contextDestroyedEv__wrapper,b1,__ZN7WebCore18DocumentEventQueue5Timer5firedEv,b1,vi___ZThn44_N7WebCore16SuspendableTimer4stopEv__wrapper,b1,__ZN7WebCore18DocumentEventQueue5closeEv
  ,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZThn44_N7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b2,__ZN7WebCore18DocumentEventQueueC2ERNS_8DocumentE,b2,vii___ZN7WebCore16SuspendableTimer7suspendENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper,b3,ii___ZThn44_NK7WebCore16SuspendableTimer10canSuspendEv__wrapper,b3,ii___ZNK7WebCore16SuspendableTimer10canSuspendEv__wrapper,b3,ii___ZThn44_NK7WebCore16SuspendableTimer18hasPendingActivityEv__wrapper,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZN7WebCore18DocumentEventQueue11cancelEventERNS_5EventE,b5,__ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore18DocumentEventQueue28enqueueOrDispatchScrollEventERNS_4NodeE","__ZN7WebCore18DocumentEventQueue11cancelEventERNS_5EventE","_strlen","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZN7WebCore18DocumentEventQueueD2Ev","__ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE9takeFirstEv","__ZThn44_N7WebCore18DocumentEventQueue5TimerD0Ev","__ZN7WebCore18DocumentEventQueue12enqueueEventEN3WTF10PassRefPtrINS_5EventEEE","_memset","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E3addINS_21ListHashSetTranslatorISB_EES5_PNS_24ListHashSetNodeAllocatorIS5_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS7_S7_S8_SC_SE_SE_EEEEOT0_OT1_","__ZN7WebCore18DocumentEventQueue13dispatchEventERNS_5EventE","__ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE4findERKS4_","__ZN3WTF11ListHashSetINS_6RefPtrIN7WebCore5EventEEELj16ENS_7PtrHashIS4_EEE6removeENS_19ListHashSetIteratorIS4_Lj16ES6_EE","__ZN7WebCore18DocumentEventQueue22pendingEventTimerFiredEv","__ZN3WTF9HashTableIPN7WebCore4NodeES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZN7WebCore18DocumentEventQueueC2ERNS_8DocumentE","__ZThn44_N7WebCore18DocumentEventQueue5TimerD1Ev","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E6rehashEiPS7_","__ZN7WebCore18DocumentEventQueue5TimerD0Ev","__ZN7WebCore18DocumentEventQueue5TimerD1Ev","_memcpy","__ZN7WebCore18DocumentEventQueueD0Ev","__ZN3WTF9HashTableIPNS_15ListHashSetNodeINS_6RefPtrIN7WebCore5EventEEELj16EEES7_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS5_EEEENS_10HashTraitsIS7_EESE_E4findERKS7_","__ZN7WebCore18DocumentEventQueue5Timer5firedEv","__ZN7WebCore18DocumentEventQueue5closeEv"]

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
H_BASE = parentModule["_malloc"](56 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 56;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15BackForwardListC1EPNS_4PageE;
var __ZN7WebCore15BackForwardListD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore15BackForwardListE=(H_BASE+8)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15BackForwardList7addItemEN3WTF10PassRefPtrINS_11HistoryItemEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i1 + 53 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 44 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == -1) {
   i12 = i9;
   i13 = HEAP32[i1 + 20 >> 2] | 0;
  } else {
   i14 = i11 + 1 | 0;
   i15 = i1 + 20 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if (i16 >>> 0 <= i14 >>> 0) {
    i12 = i9;
    i13 = i16;
    break;
   }
   i17 = i1 + 12 | 0;
   i18 = i4 | 0;
   i19 = i1 + 24 | 0;
   i20 = i16;
   while (1) {
    i16 = _llvm_uadd_with_overflow_i32(i20 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i21 = 8;
     break;
    }
    i22 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i16 << 2) >> 2] | 0;
    HEAP32[i18 >> 2] = i22;
    if ((i22 | 0) == 0) {
     i23 = i20;
    } else {
     i16 = i22 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
     i23 = HEAP32[i15 >> 2] | 0;
    }
    if ((i23 | 0) == 0) {
     i21 = 12;
     break;
    }
    i16 = i23 - 1 | 0;
    i22 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i16 << 2) >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = i22 | 0;
      i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
      if ((i25 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i22);
       __ZN3WTF8fastFreeEPv(i22);
       break;
      } else {
       HEAP32[i24 >> 2] = i25;
       break;
      }
     }
    } while (0);
    HEAP32[i15 >> 2] = i16;
    __ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i19, i4) | 0;
    i22 = __ZN7WebCore9pageCacheEv() | 0;
    i25 = HEAP32[i18 >> 2] | 0;
    __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i22, i25);
    do {
     if ((i25 | 0) != 0) {
      i22 = i25 | 0;
      i24 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i25);
       __ZN3WTF8fastFreeEPv(i25);
       break;
      } else {
       HEAP32[i22 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i26 = HEAP32[i15 >> 2] | 0;
    if (i26 >>> 0 > i14 >>> 0) {
     i20 = i26;
    } else {
     i21 = 22;
     break;
    }
   }
   if ((i21 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i21 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i21 | 0) == 22) {
    i12 = HEAP32[i8 >> 2] | 0;
    i13 = i26;
    break;
   }
  }
 } while (0);
 i26 = i1 + 12 | 0;
 i8 = i1 + 20 | 0;
 do {
  if ((i13 | 0) == (i12 | 0)) {
   if (!((HEAP32[i10 >> 2] | 0) != 0 | (i13 | 0) == 1)) {
    break;
   }
   if ((i13 | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i21 = i26 | 0;
   i4 = HEAP32[i21 >> 2] | 0;
   i23 = i5 | 0;
   i9 = HEAP32[i4 >> 2] | 0;
   HEAP32[i23 >> 2] = i9;
   do {
    if ((i9 | 0) == 0) {
     i27 = i4;
    } else {
     i11 = i9 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i11 = HEAP32[i21 >> 2] | 0;
     i20 = HEAP32[i11 >> 2] | 0;
     if ((i20 | 0) == 0) {
      i27 = i11;
      break;
     }
     i14 = i20 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i20);
      __ZN3WTF8fastFreeEPv(i20);
      i27 = i11;
      break;
     } else {
      HEAP32[i14 >> 2] = i15;
      i27 = i11;
      break;
     }
    }
   } while (0);
   i9 = i27 + 4 | 0;
   _memmove(i27 | 0, i9 | 0, (HEAP32[i21 >> 2] | 0) + (HEAP32[i8 >> 2] << 2) - i9 | 0) | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - 1;
   __ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 24 | 0, i5) | 0;
   i9 = __ZN7WebCore9pageCacheEv() | 0;
   i4 = HEAP32[i23 >> 2] | 0;
   __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i9, i4);
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - 1;
   if ((i4 | 0) == 0) {
    break;
   }
   i9 = i4 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 i27 = i6 | 0;
 HEAP32[i27 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i13 = i2 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i7, i1 + 24 | 0, i6, i6);
 i6 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i27 = i6 | 0;
   i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i6);
    break;
   } else {
    HEAP32[i27 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 i7 = i6 + 1 | 0;
 i27 = HEAP32[i8 >> 2] | 0;
 if ((i27 | 0) == (HEAP32[i1 + 16 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i26, i27 + 1 | 0);
  i28 = HEAP32[i8 >> 2] | 0;
 } else {
  i28 = i27;
 }
 i27 = HEAP32[i26 >> 2] | 0;
 i26 = i27 + (i7 << 2) | 0;
 _memmove(i27 + (i6 + 2 << 2) | 0, i26 | 0, i28 - i7 << 2 | 0) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i26 >> 2] = i7;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
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
  __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
  } else {
   i13 = (i9 >>> 23) + ~i9 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i3;
   i17 = i7;
   i18 = i11;
   while (1) {
    if ((i18 | 0) == (i8 | 0)) {
     i19 = 8;
     break;
    }
    i20 = (i18 | 0) == -1 ? i17 : i15;
    i21 = (i14 | 0) == 0 ? i13 : i14;
    i22 = i21 + i16 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i19 = 10;
     break;
    } else {
     i14 = i21;
     i15 = i20;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
   if ((i19 | 0) == 8) {
    i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i16 = i1;
    HEAP32[i16 >> 2] = i17;
    HEAP32[i16 + 4 >> 2] = i18;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i19 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i18 = i2 + 16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - 1;
    i12 = i20;
    break;
   }
  }
 } while (0);
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = 0;
 i20 = i12 | 0;
 i23 = HEAP32[i20 >> 2] | 0;
 HEAP32[i20 >> 2] = i4;
 do {
  if ((i23 | 0) != 0) {
   i4 = i23 | 0;
   i20 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i20 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i23);
    __ZN3WTF8fastFreeEPv(i23);
    break;
   } else {
    HEAP32[i4 >> 2] = i20;
    break;
   }
  }
 } while (0);
 i23 = i2 + 12 | 0;
 i20 = (HEAP32[i23 >> 2] | 0) + 1 | 0;
 HEAP32[i23 >> 2] = i20;
 i23 = i2 + 4 | 0;
 i4 = HEAP32[i23 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i4 | 0)) {
  i25 = i12;
  i26 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i27 = 8;
  } else {
   i19 = i4 << 1;
   i27 = (i20 * 6 & -1 | 0) < (i19 | 0) ? i4 : i19;
  }
  i19 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i27, i12) | 0;
  i25 = i19;
  i26 = HEAP32[i23 >> 2] | 0;
 }
 i23 = (HEAP32[i5 >> 2] | 0) + (i26 << 2) | 0;
 i26 = i1;
 HEAP32[i26 >> 2] = i25;
 HEAP32[i26 + 4 >> 2] = i23;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore15BackForwardList11setCapacityEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) > (i2 | 0)) {
   i7 = i1 + 12 | 0;
   i8 = i4 | 0;
   i9 = i1 + 24 | 0;
   i10 = i6;
   while (1) {
    i11 = _llvm_uadd_with_overflow_i32(i10 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i12 = 4;
     break;
    }
    i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i11 << 2) >> 2] | 0;
    HEAP32[i8 >> 2] = i13;
    if ((i13 | 0) == 0) {
     i14 = i10;
    } else {
     i11 = i13 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i14 = HEAP32[i5 >> 2] | 0;
    }
    if ((i14 | 0) == 0) {
     i12 = 8;
     break;
    }
    i11 = i14 - 1 | 0;
    i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i11 << 2) >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i15 = i13 | 0;
      i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
      if ((i16 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i13);
       __ZN3WTF8fastFreeEPv(i13);
       break;
      } else {
       HEAP32[i15 >> 2] = i16;
       break;
      }
     }
    } while (0);
    HEAP32[i5 >> 2] = i11;
    __ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i9, i4) | 0;
    i13 = __ZN7WebCore9pageCacheEv() | 0;
    i16 = HEAP32[i8 >> 2] | 0;
    __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i13, i16);
    do {
     if ((i16 | 0) != 0) {
      i13 = i16 | 0;
      i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i16);
       __ZN3WTF8fastFreeEPv(i16);
       break;
      } else {
       HEAP32[i13 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i16 = HEAP32[i5 >> 2] | 0;
    if ((i16 | 0) > (i2 | 0)) {
     i10 = i16;
    } else {
     i17 = i16;
     break L1;
    }
   }
   if ((i12 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i12 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i17 = i6;
  }
 } while (0);
 i6 = i1 + 44 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i6 >> 2] = -1;
  i18 = i1 + 48 | 0;
  HEAP32[i18 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i12 = i17 - 1 | 0;
 if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i12 >>> 0) {
  i18 = i1 + 48 | 0;
  HEAP32[i18 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 HEAP32[i6 >> 2] = i12;
 i18 = i1 + 48 | 0;
 HEAP32[i18 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15BackForwardList20forwardListWithLimitEiRN3WTF6VectorINS1_6RefPtrINS_11HistoryItemEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i3, 0);
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i5 - 1 | 0;
 i7 = HEAP32[i1 + 44 >> 2] | 0;
 if (i7 >>> 0 >= i6 >>> 0) {
  return;
 }
 i8 = i7 + i2 | 0;
 i2 = i6 >>> 0 < i8 >>> 0 ? i6 : i8;
 i8 = i7 + 1 | 0;
 if ((i8 | 0) > (i2 | 0)) {
  return;
 }
 i7 = i1 + 12 | 0;
 i1 = i3 + 8 | 0;
 i6 = i3 + 4 | 0;
 i9 = i3 | 0;
 i10 = i8;
 i8 = i5;
 while (1) {
  if (i8 >>> 0 <= i10 >>> 0) {
   i11 = 6;
   break;
  }
  i5 = (HEAP32[i7 >> 2] | 0) + (i10 << 2) | 0;
  i12 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i12 | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = i12 + 1 | 0;
    i14 = HEAP32[i9 >> 2] | 0;
    do {
     if (i14 >>> 0 > i5 >>> 0) {
      i11 = 14;
     } else {
      if ((i14 + (i12 << 2) | 0) >>> 0 <= i5 >>> 0) {
       i11 = 14;
       break;
      }
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i13);
      i15 = HEAP32[i9 >> 2] | 0;
      i16 = i15 + (i5 - i14 >> 2 << 2) | 0;
      i17 = i15;
     }
    } while (0);
    if ((i11 | 0) == 14) {
     i11 = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i13);
     i16 = i5;
     i17 = HEAP32[i9 >> 2] | 0;
    }
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i17 + (HEAP32[i1 >> 2] << 2) >> 2] = i14;
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = i14 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   } else {
    i15 = HEAP32[i5 >> 2] | 0;
    HEAP32[(HEAP32[i9 >> 2] | 0) + (i12 << 2) >> 2] = i15;
    if ((i15 | 0) == 0) {
     break;
    }
    i14 = i15 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
  } while (0);
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i12 = i10 + 1 | 0;
  if ((i12 | 0) > (i2 | 0)) {
   i11 = 19;
   break;
  }
  i10 = i12;
  i8 = HEAP32[i4 >> 2] | 0;
 }
 if ((i11 | 0) == 19) {
  return;
 } else if ((i11 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
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
 i8 = i1 | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i12 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 12 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i3 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i8, (i7 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore15BackForwardList17backListWithLimitEiRN3WTF6VectorINS1_6RefPtrINS_11HistoryItemEEELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i3, 0);
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == -1) {
  return;
 }
 i6 = i5 - i2 | 0;
 i2 = (i6 | 0) < 0 ? 0 : i6;
 if (i2 >>> 0 >= i5 >>> 0) {
  return;
 }
 i5 = i1 + 20 | 0;
 i6 = i1 + 12 | 0;
 i1 = i3 + 8 | 0;
 i7 = i3 + 4 | 0;
 i8 = i3 | 0;
 i9 = i2;
 while (1) {
  if ((HEAP32[i5 >> 2] | 0) >>> 0 <= i9 >>> 0) {
   i10 = 5;
   break;
  }
  i2 = (HEAP32[i6 >> 2] | 0) + (i9 << 2) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) == (HEAP32[i7 >> 2] | 0)) {
    i12 = i11 + 1 | 0;
    i13 = HEAP32[i8 >> 2] | 0;
    do {
     if (i13 >>> 0 > i2 >>> 0) {
      i10 = 11;
     } else {
      if ((i13 + (i11 << 2) | 0) >>> 0 <= i2 >>> 0) {
       i10 = 11;
       break;
      }
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i12);
      i14 = HEAP32[i8 >> 2] | 0;
      i15 = i14 + (i2 - i13 >> 2 << 2) | 0;
      i16 = i14;
     }
    } while (0);
    if ((i10 | 0) == 11) {
     i10 = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i12);
     i15 = i2;
     i16 = HEAP32[i8 >> 2] | 0;
    }
    i13 = HEAP32[i15 >> 2] | 0;
    HEAP32[i16 + (HEAP32[i1 >> 2] << 2) >> 2] = i13;
    if ((i13 | 0) == 0) {
     break;
    }
    i14 = i13 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   } else {
    i14 = HEAP32[i2 >> 2] | 0;
    HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 2) >> 2] = i14;
    if ((i14 | 0) == 0) {
     break;
    }
    i13 = i14 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
  } while (0);
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i11 = i9 + 1 | 0;
  if (i11 >>> 0 < (HEAP32[i4 >> 2] | 0) >>> 0) {
   i9 = i11;
  } else {
   i10 = 17;
   break;
  }
 }
 if ((i10 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 17) {
  return;
 }
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2;
 i6 = i5 + ~(i5 << 15) | 0;
 i5 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i5 >>> 6 ^ i5;
 i5 = i6 + ~(i6 << 11) | 0;
 i6 = i5 >>> 16 ^ i5;
 i5 = i6 & i4;
 i7 = i3 + (i5 << 2) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = i7;
   i11 = 3;
  } else {
   i12 = (i6 >>> 23) + ~i6 | 0;
   i13 = i12 << 12 ^ i12;
   i12 = i13 >>> 7 ^ i13;
   i13 = i12 << 2 ^ i12;
   i12 = i13 >>> 20 ^ i13 | 1;
   i13 = 0;
   i14 = 0;
   i15 = i5;
   i16 = i7;
   i17 = i8;
   while (1) {
    if ((i17 | 0) == (i2 | 0)) {
     i18 = i16;
     break L1;
    }
    i19 = (i17 | 0) == -1 ? i16 : i13;
    i20 = (i14 | 0) == 0 ? i12 : i14;
    i21 = i20 + i15 & i4;
    i22 = i3 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i9 = i19;
     i10 = i22;
     i11 = 3;
     break;
    } else {
     i13 = i19;
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
    }
   }
  }
 } while (0);
 if ((i11 | 0) == 3) {
  i18 = (i9 | 0) != 0 ? i9 : i10;
 }
 i10 = i18 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 }
 i11 = i9 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 } else {
  HEAP32[i11 >> 2] = i3;
  i24 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  HEAP32[i10 >> 2] = i24;
  return i18 | 0;
 }
 return 0;
}
function __ZN7WebCore15BackForwardList10removeItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 12 | 0;
 i8 = 0;
 while (1) {
  if (i8 >>> 0 >= i6 >>> 0) {
   i9 = 20;
   break;
  }
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = i10 + (i8 << 2) | 0;
  i12 = i8 + 1 | 0;
  if ((HEAP32[i11 >> 2] | 0) == (i2 | 0)) {
   break;
  } else {
   i8 = i12;
  }
 }
 if ((i9 | 0) == 20) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 | 0;
 i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i9 >> 2] = i6;
 }
 i6 = i10 + (i12 << 2) | 0;
 _memmove(i11 | 0, i6 | 0, (HEAP32[i7 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) - i6 | 0) | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = i2 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 __ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1 + 24 | 0, i4) | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11HistoryItemD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i4 = i1 + 44 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == -1 | i1 >>> 0 < i8 >>> 0) {
  STACKTOP = i3;
  return;
 }
 if (i1 >>> 0 > i8 >>> 0) {
  HEAP32[i4 >> 2] = i1 - 1;
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 if (i1 >>> 0 < i8 >>> 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = i8 - 1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 if (i5 >>> 0 > i2 >>> 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i7 = i1 + (i5 << 2) | 0;
  if ((i5 | 0) != (i2 | 0)) {
   i8 = i1 + (i2 << 2) | 0;
   while (1) {
    i1 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i9 = i1 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i1);
       __ZN3WTF8fastFreeEPv(i1);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i7 | 0)) {
     break;
    }
   }
  }
  HEAP32[i4 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 >>> 0 > 1073741823 >>> 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    if (i4) {
     _WTFCrash();
    }
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    i7 = i8;
    HEAP32[i6 >> 2] = i7;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    _memcpy(i8 | 0, i5 | 0, i11 << 2) | 0;
    break;
   } else {
    if (i4) {
     _WTFCrash();
    }
    i4 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i4 >>> 2;
    HEAP32[i6 >> 2] = __ZN3WTF11fastReallocEPvj(HEAP32[i6 >> 2] | 0, i4) | 0;
    return;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i6 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_(i1, i2) | 0;
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
  i1 = HEAP32[i7 + (i13 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) == 0) {
     __ZN7WebCore11HistoryItemD1Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i3;
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
function __ZN7WebCore15BackForwardList5closeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 12 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) > 0) {
   i5 = i2 | 0;
   i6 = 0;
   while (1) {
    i7 = __ZN7WebCore9pageCacheEv() | 0;
    if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i6 >>> 0) {
     break;
    }
    __ZN7WebCore9PageCache6removeEPNS_11HistoryItemE(i7, HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] | 0);
    i6 = i6 + 1 | 0;
    if ((i6 | 0) >= (i4 | 0)) {
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj(i2, 0);
 i2 = i1 + 24 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 + 8 | 0;
  HEAP32[i8 >> 2] = 0;
  i9 = i1 + 52 | 0;
  HEAP8[i9] = 1;
  return;
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i6 = 0;
  while (1) {
   i5 = HEAP32[i4 + (i6 << 2) >> 2] | 0;
   i7 = i5;
   do {
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i10 = i5 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i6 = i6 + 1 | 0;
   if ((i6 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 _memset(i2 | 0, 0, 16) | 0;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 52 | 0;
 HEAP8[i9] = 1;
 return;
}
function __ZN7WebCore15BackForwardList12containsItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = HEAP32[i1 + 32 >> 2] | 0;
  i1 = i2;
  i7 = i1 + ~(i1 << 15) | 0;
  i1 = (i7 >>> 10 ^ i7) * 9 & -1;
  i7 = i1 >>> 6 ^ i1;
  i1 = i7 + ~(i7 << 11) | 0;
  i7 = i1 >>> 16 ^ i1;
  i1 = i6 & i7;
  i8 = i4 + (i1 << 2) | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  L6 : do {
   if ((i9 | 0) == (i2 | 0)) {
    i10 = i8;
   } else {
    i11 = (i7 >>> 23) + ~i7 | 0;
    i12 = i11 << 12 ^ i11;
    i11 = i12 >>> 7 ^ i12;
    i12 = i11 << 2 ^ i11;
    i11 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i13 = i1;
    i14 = i9;
    while (1) {
     if ((i14 | 0) == 0) {
      i10 = 0;
      break L6;
     }
     i15 = (i12 | 0) == 0 ? i11 : i12;
     i16 = i15 + i13 & i6;
     i17 = i4 + (i16 << 2) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i2 | 0)) {
      i10 = i17;
      break;
     } else {
      i12 = i15;
      i13 = i16;
      i14 = i18;
     }
    }
   }
  } while (0);
  i5 = (i10 | 0) != 0;
 }
 if (i3) {
  return i5 | 0;
 }
 i3 = i2 | 0;
 i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return i5 | 0;
 } else {
  HEAP32[i3 >> 2] = i10;
  return i5 | 0;
 }
 return 0;
}
function __ZN7WebCore15BackForwardListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i5);
       __ZN3WTF8fastFreeEPv(i5);
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
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
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
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore15BackForwardListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 | 0;
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore11HistoryItemD1Ev(i5);
       __ZN3WTF8fastFreeEPv(i5);
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
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i8 = i5 | 0;
     i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) == 0) {
      __ZN7WebCore11HistoryItemD1Ev(i5);
      __ZN3WTF8fastFreeEPv(i5);
      break;
     } else {
      HEAP32[i8 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
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
 HEAP32[i1 + 16 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore15BackForwardList11itemAtIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 44 | 0;
 if ((i2 | 0) < (-(HEAP32[i3 >> 2] | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1) | 0) < (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (HEAP32[i3 >> 2] | 0) + i2 | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + (i5 << 2) >> 2] | 0;
 return i4 | 0;
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
function __ZN7WebCore15BackForwardList8goToItemEPNS_11HistoryItemE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i3 | 0) == 0 | (i2 | 0) == 0) {
  return;
 }
 i4 = i1 + 12 | 0;
 i5 = 0;
 while (1) {
  if (i5 >>> 0 >= i3 >>> 0) {
   i6 = 8;
   break;
  }
  if ((HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] | 0) == (i2 | 0)) {
   break;
  } else {
   i5 = i5 + 1 | 0;
  }
 }
 if ((i6 | 0) == 8) {
  return;
 }
 HEAP32[i1 + 44 >> 2] = i5;
 return;
}
function __ZN7WebCore15BackForwardList11forwardItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if (i4 >>> 0 >= (i2 - 1 | 0) >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i4 + 1 | 0;
 if (i2 >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + (i5 << 2) >> 2] | 0;
 return i3 | 0;
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
function __ZN7WebCore15BackForwardList8backItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0 | (i2 | 0) == (-1 | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i2 - 1 | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + (i4 << 2) >> 2] | 0;
 return i3 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 2;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZN7WebCore15BackForwardList11currentItemEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == -1) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 20 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore15BackForwardListC2EPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 32) | 0;
 HEAP32[i1 + 44 >> 2] = -1;
 HEAP32[i1 + 48 >> 2] = 100;
 HEAP8[i1 + 52 | 0] = 1;
 HEAP8[i1 + 53 | 0] = 1;
 return;
}
function __ZN7WebCore15BackForwardListC1EPNS_4PageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 32) | 0;
 HEAP32[i1 + 44 >> 2] = -1;
 HEAP32[i1 + 48 >> 2] = 100;
 HEAP8[i1 + 52 | 0] = 1;
 HEAP8[i1 + 53 | 0] = 1;
 return;
}
function __ZN7WebCore15BackForwardList10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 53 | 0] = i2 & 1;
 if (i2) {
  return;
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 __ZN7WebCore15BackForwardList11setCapacityEi(i1, 0);
 __ZN7WebCore15BackForwardList11setCapacityEi(i1, i2);
 return;
}
function __ZN7WebCore15BackForwardList9goForwardEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (i3 >>> 0 >= ((HEAP32[i1 + 20 >> 2] | 0) - 1 | 0) >>> 0) {
  return;
 }
 HEAP32[i2 >> 2] = i3 + 1;
 return;
}
function __ZN7WebCore15BackForwardList16forwardListCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == -1) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 20 >> 2] | 0) + ~i2 | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15BackForwardList8isActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 53 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 48 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore15BackForwardList6goBackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 44 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = i1 - 1;
 return;
}
function __ZN7WebCore15BackForwardList13backListCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 return ((i2 | 0) == -1 ? 0 : i2) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15BackForwardListD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15BackForwardListD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore15BackForwardList7enabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 53 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore15BackForwardList6closedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 52 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore15BackForwardList8capacityEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 48 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZN7WebCore15BackForwardList7entriesEv(i1) {
 i1 = i1 | 0;
 return i1 + 12 | 0;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b3() {
 abort(3);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore15BackForwardList5closeEv,b0,__ZN7WebCore15BackForwardListD2Ev,b0,__ZN7WebCore15BackForwardListD0Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore15BackForwardList8goToItemEPNS_11HistoryItemE,b1,__ZN7WebCore15BackForwardListC2EPNS_4PageE,b1,__ZN7WebCore15BackForwardList7addItemEN3WTF10PassRefPtrINS_11HistoryItemEEE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZN7WebCore15BackForwardList13backListCountEv,b2,__ZN7WebCore15BackForwardList8isActiveEv,b2,__ZN7WebCore15BackForwardList16forwardListCountEv,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZN7WebCore15BackForwardList11itemAtIndexEi,b4];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15BackForwardList12containsItemEPNS_11HistoryItemE","__ZN7WebCore15BackForwardList10removeItemEPNS_11HistoryItemE","__ZN7WebCore15BackForwardList11itemAtIndexEi","__ZN7WebCore15BackForwardListC2EPNS_4PageE","__ZN7WebCore15BackForwardList8backItemEv","__ZN7WebCore15BackForwardList17backListWithLimitEiRN3WTF6VectorINS1_6RefPtrINS_11HistoryItemEEELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15BackForwardList8capacityEv","__ZN7WebCore15BackForwardList11setCapacityEi","__ZN7WebCore15BackForwardList16forwardListCountEv","__ZN7WebCore15BackForwardList7enabledEv","_memset","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E8reinsertEOS4_","__ZN7WebCore15BackForwardList13backListCountEv","__ZN3WTF7HashSetINS_6RefPtrIN7WebCore11HistoryItemEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZN7WebCore15BackForwardList5closeEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14shrinkCapacityEj","__ZN7WebCore15BackForwardList10setEnabledEb","__ZN7WebCore15BackForwardList7entriesEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore15BackForwardList6goBackEv","__ZN7WebCore15BackForwardList20forwardListWithLimitEiRN3WTF6VectorINS1_6RefPtrINS_11HistoryItemEEELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore15BackForwardList8isActiveEv","__ZN7WebCore15BackForwardList8goToItemEPNS_11HistoryItemE","__ZN7WebCore15BackForwardList7addItemEN3WTF10PassRefPtrINS_11HistoryItemEEE","__ZN7WebCore15BackForwardList6closedEv","_memmove","__ZN7WebCore15BackForwardList9goForwardEv","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11HistoryItemEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_memcpy","__ZN7WebCore15BackForwardList11forwardItemEv","__ZN3WTF9HashTableINS_6RefPtrIN7WebCore11HistoryItemEEES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore15BackForwardListD2Ev","__ZN7WebCore15BackForwardList11currentItemEv","__ZN7WebCore15BackForwardListD0Ev"]

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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames6mapTagE=env.__ZN7WebCore9HTMLNames6mapTagE|0;
  var __ZN7WebCore9HTMLNames7forAttrE=env.__ZN7WebCore9HTMLNames7forAttrE|0;
  var __ZN7WebCore9HTMLNames8labelTagE=env.__ZN7WebCore9HTMLNames8labelTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames8nameAttrE=env.__ZN7WebCore9HTMLNames8nameAttrE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore18DocumentOrderedMap18getAllElementsByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i1 = HEAP32[i6 + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i5 = i6 + 12 | 0;
 i9 = i6 + 20 | 0;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  i8 = i5;
  STACKTOP = i4;
  return i8 | 0;
 }
 i10 = i6 + 16 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) >>> 0 < i1 >>> 0) {
   i11 = i5 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   if (i1 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 2) | 0;
   HEAP32[i10 >> 2] = i13 >>> 2;
   i14 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i12 | 0) == 0) {
    break;
   }
   if ((i14 | 0) == (i12 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i12);
  }
 } while (0);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i6 = i1 + 36 | 0;
   while (1) {
    i12 = HEAP32[i6 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i15 = 0;
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
     i6 = i12 + 28 | 0;
    } else {
     i15 = i12;
     break;
    }
   }
   if ((i15 | 0) == 0) {
    i8 = i5;
   } else {
    i16 = i15;
    break;
   }
   STACKTOP = i4;
   return i8 | 0;
  } else {
   i16 = i3;
  }
 } while (0);
 i3 = i5 | 0;
 i15 = i7;
 i6 = i1 | 0;
 i1 = i16;
 L28 : while (1) {
  i16 = HEAP32[i1 + 48 >> 2] | 0;
  L30 : do {
   if ((i16 | 0) == 0) {
    i17 = __ZN3WTF8nullAtomE;
   } else {
    if ((HEAP32[i16 + 16 >> 2] | 0) == 0) {
     i17 = __ZN3WTF8nullAtomE;
     break;
    }
    i12 = HEAP32[i16 + 4 >> 2] | 0;
    if ((i12 & 1 | 0) == 0) {
     i18 = i12 >>> 1 & 134217727;
     i19 = i16 + 20 | 0;
    } else {
     i12 = i16 + 24 | 0;
     i18 = HEAP32[i12 + 8 >> 2] | 0;
     i19 = HEAP32[i12 >> 2] | 0;
    }
    if ((i18 | 0) == 0) {
     i17 = __ZN3WTF8nullAtomE;
     break;
    }
    i12 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
    i11 = i12 + 12 | 0;
    i14 = i12 + 16 | 0;
    i13 = 0;
    while (1) {
     i20 = i19 + (i13 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i12 | 0)) {
      break;
     }
     if ((HEAP32[i21 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
      if ((HEAP32[i21 + 16 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
       break;
      }
     }
     i21 = i13 + 1 | 0;
     if (i21 >>> 0 < i18 >>> 0) {
      i13 = i21;
     } else {
      i17 = __ZN3WTF8nullAtomE;
      break L30;
     }
    }
    i17 = (i20 | 0) == 0 ? __ZN3WTF8nullAtomE : i19 + (i13 << 3) + 4 | 0;
   }
  } while (0);
  do {
   if ((HEAP32[i17 >> 2] | 0) == (i2 | 0)) {
    HEAP32[i7 >> 2] = i1;
    i16 = HEAP32[i9 >> 2] | 0;
    if ((i16 | 0) != (HEAP32[i10 >> 2] | 0)) {
     HEAP32[(HEAP32[i3 >> 2] | 0) + (i16 << 2) >> 2] = i1;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     break;
    }
    i14 = i16 + 1 | 0;
    i11 = HEAP32[i3 >> 2] | 0;
    do {
     if (i11 >>> 0 > i7 >>> 0) {
      i22 = 34;
     } else {
      if ((i11 + (i16 << 2) | 0) >>> 0 <= i7 >>> 0) {
       i22 = 34;
       break;
      }
      __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i14);
      i12 = HEAP32[i3 >> 2] | 0;
      i23 = i12 + (i15 - i11 >> 2 << 2) | 0;
      i24 = i12;
     }
    } while (0);
    if ((i22 | 0) == 34) {
     i22 = 0;
     __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i14);
     i23 = i7;
     i24 = HEAP32[i3 >> 2] | 0;
    }
    HEAP32[i24 + (HEAP32[i9 >> 2] << 2) >> 2] = HEAP32[i23 >> 2];
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
  } while (0);
  i11 = HEAP32[i1 + 36 >> 2] | 0;
  do {
   if ((i11 | 0) == 0) {
    i16 = i1 | 0;
    if ((i16 | 0) == (i6 | 0)) {
     i8 = i5;
     i22 = 52;
     break L28;
    }
    i13 = HEAP32[i1 + 28 >> 2] | 0;
    if ((i13 | 0) != 0) {
     i25 = i13;
     break;
    }
    i13 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i16, i6) | 0;
    if ((i13 | 0) == 0) {
     i8 = i5;
     i22 = 53;
     break L28;
    } else {
     i25 = i13;
    }
   } else {
    i25 = i11;
   }
  } while (0);
  if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
   i11 = i25;
   while (1) {
    if ((i11 | 0) == (i6 | 0)) {
     i8 = i5;
     i22 = 54;
     break L28;
    }
    i13 = HEAP32[i11 + 28 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i16 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i6) | 0;
     if ((i16 | 0) == 0) {
      i8 = i5;
      i22 = 55;
      break L28;
     } else {
      i26 = i16;
     }
    } else {
     i26 = i13;
    }
    if ((HEAP32[i26 + 12 >> 2] & 4 | 0) == 0) {
     i11 = i26;
    } else {
     i27 = i26;
     break;
    }
   }
  } else {
   i27 = i25;
  }
  i1 = i27;
 }
 if ((i22 | 0) == 52) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i22 | 0) == 53) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i22 | 0) == 54) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i22 | 0) == 55) {
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 i8 = __ZN3WTF10fastMallocEj(i2 * 24 & -1) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   _memset(i8 + (i9 * 24 & -1) | 0, 0, 24) | 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 * 24 & -1) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i13;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 * 24 & -1) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L12 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 8;
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
      if ((i29 | 0) == (i9 | 0)) {
       i30 = i28;
       break L12;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 * 24 & -1) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 8;
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
   if ((i23 | 0) == 8) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 20 | 0;
   if ((HEAP32[i16 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
   }
   i17 = i30 + 12 | 0;
   i9 = HEAP32[i17 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i36 = i30 + 16 | 0;
   } else {
    HEAP32[i17 >> 2] = 0;
    i20 = i30 + 16 | 0;
    HEAP32[i20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i9);
    i36 = i20;
   }
   HEAP32[i30 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i30 + 4 >> 2] = HEAP32[i7 + (i12 * 24 & -1) + 4 >> 2];
   HEAP32[i30 + 8 >> 2] = HEAP32[i7 + (i12 * 24 & -1) + 8 >> 2];
   HEAP32[i17 >> 2] = 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   i20 = i7 + (i12 * 24 & -1) + 20 | 0;
   HEAP32[i16 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = 0;
   i20 = i7 + (i12 * 24 & -1) + 12 | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i20 >> 2] = i16;
   i16 = i7 + (i12 * 24 & -1) + 16 | 0;
   i20 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i20;
   i15 = (i8 | 0) == (i3 | 0) ? i30 : i13;
  }
  i20 = i12 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i20;
   i13 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i10 = i15;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 * 24 & -1) >> 2] | 0) != -1) {
    i1 = i7 + (i37 * 24 & -1) + 20 | 0;
    if ((HEAP32[i1 >> 2] | 0) != 0) {
     HEAP32[i1 >> 2] = 0;
    }
    i1 = i7 + (i37 * 24 & -1) + 12 | 0;
    i13 = HEAP32[i1 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = 0;
    HEAP32[i7 + (i37 * 24 & -1) + 16 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i13);
   }
  } while (0);
  i8 = i37 + 1 | 0;
  if ((i8 | 0) < (i5 | 0)) {
   i37 = i8;
  } else {
   i10 = i15;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_S7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
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
 i11 = i10 + (i9 * 24 & -1) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
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
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 * 24 & -1) | 0;
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
    i20 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
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
    _memset(i21 | 0, 0, 24) | 0;
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
 HEAP32[i26 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 i27 = i26 + 20 | 0;
 i8 = i4 + 16 | 0;
 i13 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i13;
 i13 = i26 + 12 | 0;
 i8 = i4 + 8 | 0;
 i27 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i27;
 i27 = i26 + 16 | 0;
 i8 = i4 + 12 | 0;
 i4 = HEAP32[i27 >> 2] | 0;
 HEAP32[i27 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i8;
 i4 = i2 + 4 | 0;
 i27 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i8 << 1 | 0) < (i27 | 0)) {
  i29 = i26;
  i30 = i27;
 } else {
  if ((i27 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i27 << 1;
   i31 = (i8 * 6 & -1 | 0) < (i28 | 0) ? i27 : i28;
  }
  i28 = __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 * 24 & -1) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_12keyMatchesIdERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 33;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 33) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  i8 = HEAP32[i6 + 48 >> 2] | 0;
  L15 : do {
   if ((i8 | 0) == 0) {
    i11 = __ZN3WTF8nullAtomE;
   } else {
    if ((HEAP32[i8 + 16 >> 2] | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
     break;
    }
    i5 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i5 & 1 | 0) == 0) {
     i12 = i5 >>> 1 & 134217727;
     i13 = i8 + 20 | 0;
    } else {
     i5 = i8 + 24 | 0;
     i12 = HEAP32[i5 + 8 >> 2] | 0;
     i13 = HEAP32[i5 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
     break;
    }
    i5 = HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
    i14 = i5 + 12 | 0;
    i15 = i5 + 16 | 0;
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i5 | 0)) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
     i18 = i16 + 1 | 0;
     if (i18 >>> 0 < i12 >>> 0) {
      i16 = i18;
     } else {
      i11 = __ZN3WTF8nullAtomE;
      break L15;
     }
    }
    i11 = (i17 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i16 << 3) + 4 | 0;
   }
  } while (0);
  if ((HEAP32[i11 >> 2] | 0) == (i2 | 0)) {
   i9 = 20;
   break;
  }
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 34;
     break L13;
    }
    i15 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i15 | 0) != 0) {
     i19 = i15;
     break;
    }
    i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i15 | 0) == 0) {
     i7 = 0;
     i9 = 35;
     break L13;
    } else {
     i19 = i15;
    }
   } else {
    i19 = i8;
   }
  } while (0);
  if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
   i20 = i19;
  } else {
   i6 = i19;
   continue;
  }
  while (1) {
   if ((i20 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 36;
    break L13;
   }
   i8 = HEAP32[i20 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i20, i3) | 0;
    if ((i15 | 0) == 0) {
     i7 = 0;
     i9 = 37;
     break L13;
    } else {
     i21 = i15;
    }
   } else {
    i21 = i8;
   }
   if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
    i20 = i21;
   } else {
    i6 = i21;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 20) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 34) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 35) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 36) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 37) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_14keyMatchesNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 34;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 34) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  i8 = HEAP32[i6 + 48 >> 2] | 0;
  L15 : do {
   if ((i8 | 0) == 0) {
    i11 = __ZN3WTF8nullAtomE;
   } else {
    i5 = HEAP32[i8 + 4 >> 2] | 0;
    if ((i5 & 268435456 | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
     break;
    }
    if ((i5 & 1 | 0) == 0) {
     i12 = i5 >>> 1 & 134217727;
     i13 = i8 + 20 | 0;
    } else {
     i5 = i8 + 24 | 0;
     i12 = HEAP32[i5 + 8 >> 2] | 0;
     i13 = HEAP32[i5 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     i11 = __ZN3WTF8nullAtomE;
     break;
    }
    i5 = HEAP32[__ZN7WebCore9HTMLNames8nameAttrE >> 2] | 0;
    i14 = i5 + 12 | 0;
    i15 = i5 + 16 | 0;
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i5 | 0)) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
     i18 = i16 + 1 | 0;
     if (i18 >>> 0 < i12 >>> 0) {
      i16 = i18;
     } else {
      i11 = __ZN3WTF8nullAtomE;
      break L15;
     }
    }
    i11 = (i17 | 0) == 0 ? __ZN3WTF8nullAtomE : i13 + (i16 << 3) + 4 | 0;
   }
  } while (0);
  if ((HEAP32[i11 >> 2] | 0) == (i2 | 0)) {
   i9 = 20;
   break;
  }
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 37;
     break L13;
    }
    i15 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i15 | 0) != 0) {
     i19 = i15;
     break;
    }
    i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i15 | 0) == 0) {
     i7 = 0;
     i9 = 31;
     break L13;
    } else {
     i19 = i15;
    }
   } else {
    i19 = i8;
   }
  } while (0);
  if ((HEAP32[i19 + 12 >> 2] & 4 | 0) == 0) {
   i20 = i19;
  } else {
   i6 = i19;
   continue;
  }
  while (1) {
   if ((i20 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 32;
    break L13;
   }
   i8 = HEAP32[i20 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i15 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i20, i3) | 0;
    if ((i15 | 0) == 0) {
     i7 = 0;
     i9 = 33;
     break L13;
    } else {
     i21 = i15;
    }
   } else {
    i21 = i8;
   }
   if ((HEAP32[i21 + 12 >> 2] & 4 | 0) == 0) {
    i20 = i21;
   } else {
    i6 = i21;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 20) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 31) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 32) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 33) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 37) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i7 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i6, i1 | 0, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i1 = i7 + 4 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 i7 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i7 + 36 | 0;
 while (1) {
  i9 = HEAP32[i3 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i8 = 0;
   i10 = 25;
   break;
  }
  if ((HEAP32[i9 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i9 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i10 | 0) == 25) {
  STACKTOP = i4;
  return i8 | 0;
 }
 i3 = i7 | 0;
 i7 = i5 | 0;
 i6 = i9;
 L13 : while (1) {
  i11 = i6;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6mapTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    __ZNK3WTF12AtomicString5lowerEv(i5, i6 + 52 | 0);
    i9 = HEAP32[i7 >> 2] | 0;
    i12 = (i9 | 0) == (i2 | 0);
    if ((i9 | 0) == 0) {
     if (i12) {
      i10 = 14;
      break L13;
     } else {
      break;
     }
    }
    i13 = i9 | 0;
    i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     if (i12) {
      i10 = 14;
      break L13;
     } else {
      break;
     }
    } else {
     HEAP32[i13 >> 2] = i14;
     if (i12) {
      i10 = 14;
      break L13;
     } else {
      break;
     }
    }
   }
  } while (0);
  i12 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i8 = 0;
     i10 = 31;
     break L13;
    }
    i14 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i14 | 0) != 0) {
     i15 = i14;
     break;
    }
    i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i14 | 0) == 0) {
     i8 = 0;
     i10 = 29;
     break L13;
    } else {
     i15 = i14;
    }
   } else {
    i15 = i12;
   }
  } while (0);
  if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
   i16 = i15;
  } else {
   i6 = i15;
   continue;
  }
  while (1) {
   if ((i16 | 0) == (i3 | 0)) {
    i8 = 0;
    i10 = 28;
    break L13;
   }
   i12 = HEAP32[i16 + 28 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i14 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i16, i3) | 0;
    if ((i14 | 0) == 0) {
     i8 = 0;
     i10 = 26;
     break L13;
    } else {
     i17 = i14;
    }
   } else {
    i17 = i12;
   }
   if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
    i16 = i17;
   } else {
    i6 = i17;
    continue L13;
   }
  }
 }
 if ((i10 | 0) == 14) {
  HEAP32[i1 >> 2] = i11;
  i8 = i11;
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i10 | 0) == 26) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i10 | 0) == 28) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i10 | 0) == 29) {
  STACKTOP = i4;
  return i8 | 0;
 } else if ((i10 | 0) == 31) {
  STACKTOP = i4;
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLabelForAttributeERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 27;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 27) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8labelTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i10, __ZN7WebCore9HTMLNames7forAttrE) | 0) >> 2] | 0) == (i2 | 0)) {
     i9 = 10;
     break L13;
    }
   }
  } while (0);
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 22;
     break L13;
    }
    i5 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i11 = i5;
     break;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 23;
     break L13;
    } else {
     i11 = i5;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = i11;
   continue;
  }
  while (1) {
   if ((i12 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 25;
    break L13;
   }
   i8 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 26;
     break L13;
    } else {
     i13 = i5;
    }
   } else {
    i13 = i8;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i12 = i13;
   } else {
    i6 = i13;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 10) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 22) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 23) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 25) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 26) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_26keyMatchesLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 23;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 23) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if (__ZNK7WebCore16HTMLImageElement23matchesLowercasedUsemapERKN3WTF16AtomicStringImplE(i6, i2) | 0) {
     i9 = 10;
     break L13;
    }
   }
  } while (0);
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 24;
     break L13;
    }
    i5 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i11 = i5;
     break;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 22;
     break L13;
    } else {
     i11 = i5;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = i11;
   continue;
  }
  while (1) {
   if ((i12 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 25;
    break L13;
   }
   i8 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 26;
     break L13;
    } else {
     i13 = i5;
    }
   } else {
    i13 = i8;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i12 = i13;
   } else {
    i6 = i13;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 10) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 22) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 24) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 25) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 26) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_17keyMatchesMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 24;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 24) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  do {
   if ((HEAP32[i6 + 12 >> 2] & 16 | 0) != 0) {
    if ((HEAP32[(HEAP32[i6 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6mapTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i6 + 52 >> 2] | 0) == (i2 | 0)) {
     i9 = 10;
     break L13;
    }
   }
  } while (0);
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 21;
     break L13;
    }
    i5 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i11 = i5;
     break;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 23;
     break L13;
    } else {
     i11 = i5;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = i11;
   continue;
  }
  while (1) {
   if ((i12 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 26;
    break L13;
   }
   i8 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 27;
     break L13;
    } else {
     i13 = i5;
    }
   } else {
    i13 = i8;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i12 = i13;
   } else {
    i6 = i13;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 21) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 23) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 10) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 26) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 27) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 20;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 20) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  if (__ZN7WebCore22DocumentNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i10, i2) | 0) {
   i9 = 8;
   break;
  }
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 23;
     break L13;
    }
    i5 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i11 = i5;
     break;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 25;
     break L13;
    } else {
     i11 = i5;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = i11;
   continue;
  }
  while (1) {
   if ((i12 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 21;
    break L13;
   }
   i8 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 19;
     break L13;
    } else {
     i13 = i5;
    }
   } else {
    i13 = i8;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i12 = i13;
   } else {
    i6 = i13;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 8) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 19) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 21) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 23) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 25) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_25keyMatchesWindowNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == ((HEAP32[i1 >> 2] | 0) + ((HEAP32[i1 + 4 >> 2] | 0) * 24 & -1) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i1 = i6 + 4 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i4;
  return i7 | 0;
 }
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i6 + 36 | 0;
 while (1) {
  i8 = HEAP32[i3 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i7 = 0;
   i9 = 19;
   break;
  }
  if ((HEAP32[i8 + 12 >> 2] & 4 | 0) == 0) {
   i3 = i8 + 28 | 0;
  } else {
   break;
  }
 }
 if ((i9 | 0) == 19) {
  STACKTOP = i4;
  return i7 | 0;
 }
 i3 = i6 | 0;
 i6 = i8;
 L13 : while (1) {
  i10 = i6;
  if (__ZN7WebCore20WindowNameCollection11nodeMatchesEPNS_7ElementEPKN3WTF16AtomicStringImplE(i10, i2) | 0) {
   i9 = 8;
   break;
  }
  i8 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i8 | 0) == 0) {
    if ((i6 | 0) == (i3 | 0)) {
     i7 = 0;
     i9 = 22;
     break L13;
    }
    i5 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i11 = i5;
     break;
    }
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i6, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 26;
     break L13;
    } else {
     i11 = i5;
    }
   } else {
    i11 = i8;
   }
  } while (0);
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = i11;
   continue;
  }
  while (1) {
   if ((i12 | 0) == (i3 | 0)) {
    i7 = 0;
    i9 = 21;
    break L13;
   }
   i8 = HEAP32[i12 + 28 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i3) | 0;
    if ((i5 | 0) == 0) {
     i7 = 0;
     i9 = 20;
     break L13;
    } else {
     i13 = i5;
    }
   } else {
    i13 = i8;
   }
   if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
    i12 = i13;
   } else {
    i6 = i13;
    continue L13;
   }
  }
 }
 if ((i9 | 0) == 8) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 20) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 21) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 22) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i9 | 0) == 26) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = i2;
 __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i5, i1 | 0, i6);
 i6 = i1 + 4 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) + ((HEAP32[i6 >> 2] | 0) * 24 & -1) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 1) {
  i10 = HEAP32[i5 >> 2] | 0;
  if ((i10 | 0) == (i2 | 0)) {
   STACKTOP = i4;
   return;
  }
  i2 = i10 + 20 | 0;
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
  }
  i2 = i10 + 12 | 0;
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i2 >> 2] = 0;
   HEAP32[i10 + 16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
  HEAP32[i10 >> 2] = -1;
  i10 = i1 + 16 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  i10 = i1 + 12 | 0;
  i5 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  HEAP32[i10 >> 2] = i5;
  i10 = HEAP32[i6 >> 2] | 0;
  if (!((i5 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
   STACKTOP = i4;
   return;
  }
  __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1 | 0, (i10 | 0) / 2 & -1, 0) | 0;
  STACKTOP = i4;
  return;
 } else {
  i10 = i7 + 4 | 0;
  if ((HEAP32[i10 >> 2] | 0) == (i3 | 0)) {
   HEAP32[i10 >> 2] = 0;
  }
  HEAP32[i8 >> 2] = i9 - 1;
  i9 = i7 + 16 | 0;
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i8 = i7 + 20 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i7 + 12 | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 if ((HEAP32[i3 + 12 >> 2] & 8388864 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) != (HEAP32[i4 + 8 >> 2] | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i7 >> 2] = i2;
 HEAP32[i8 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = 1;
 i3 = i8 + 8 | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = 0;
 i4 = i8 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_S7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i1 | 0, i7, i8);
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i4 + 16 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = i4 + 20 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i4 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = (HEAP32[i2 + 4 >> 2] | 0) * 24 & -1 | 0;
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
   i11 = i4 + (i9 * 24 & -1) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
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
      i20 = i4 + (i19 * 24 & -1) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore18DocumentOrderedMap5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i4 = 0;
  while (1) {
   do {
    if ((HEAP32[i2 + (i4 * 24 & -1) >> 2] | 0) != -1) {
     i5 = i2 + (i4 * 24 & -1) + 20 | 0;
     if ((HEAP32[i5 >> 2] | 0) != 0) {
      HEAP32[i5 >> 2] = 0;
     }
     i5 = i2 + (i4 * 24 & -1) + 12 | 0;
     i6 = HEAP32[i5 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     HEAP32[i5 >> 2] = 0;
     HEAP32[i2 + (i4 * 24 & -1) + 16 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i6);
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 _memset(i1 | 0, 0, 16) | 0;
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
function __ZNK7WebCore18DocumentOrderedMap29getElementByLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap29getElementByLabelForAttributeERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLabelForAttributeERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap29getElementByDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap28getElementByLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_26keyMatchesLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap27getElementByWindowNamedItemERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_25keyMatchesWindowNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap19getElementByMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_17keyMatchesMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap16getElementByNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_14keyMatchesNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function __ZNK7WebCore18DocumentOrderedMap14getElementByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_12keyMatchesIdERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE(i1, i2, i3) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames6mapTagE": __ZN7WebCore9HTMLNames6mapTagE, "__ZN7WebCore9HTMLNames7forAttrE": __ZN7WebCore9HTMLNames7forAttrE, "__ZN7WebCore9HTMLNames8labelTagE": __ZN7WebCore9HTMLNames8labelTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames8nameAttrE": __ZN7WebCore9HTMLNames8nameAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_25keyMatchesWindowNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZN3WTF7HashMapIPKNS_16AtomicStringImplEN7WebCore18DocumentOrderedMap8MapEntryENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS9_IS6_EEE4findERKS3_","__ZN7WebCore18DocumentOrderedMap3addERKN3WTF16AtomicStringImplERNS_7ElementERKNS_9TreeScopeE","__ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES3_S7_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore18DocumentOrderedMap5clearEv","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_17keyMatchesMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_26keyMatchesLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZN3WTF6VectorIPN7WebCore7ElementELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore18DocumentOrderedMap29getElementByLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap18getAllElementsByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap14getElementByIdERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_12keyMatchesIdERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap29getElementByDocumentNamedItemERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap29getElementByLabelForAttributeERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","_memset","__ZN3WTF9HashTableIPKNS_16AtomicStringImplENS_12KeyValuePairIS3_N7WebCore18DocumentOrderedMap8MapEntryEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS3_EENS_7HashMapIS3_S7_SC_NS_10HashTraitsIS3_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZNK7WebCore18DocumentOrderedMap16getElementByNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","_memcpy","__ZN7WebCore18DocumentOrderedMap6removeERKN3WTF16AtomicStringImplERNS_7ElementE","__ZNK7WebCore18DocumentOrderedMap19getElementByMapNameERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_14keyMatchesNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap27getElementByWindowNamedItemERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLowercasedMapNameERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap28getElementByLowercasedUsemapERKN3WTF16AtomicStringImplERKNS_9TreeScopeE","__ZNK7WebCore18DocumentOrderedMap3getIXadL_ZNS_27keyMatchesLabelForAttributeERKN3WTF16AtomicStringImplERKNS_7ElementEEEEEPS6_S5_RKNS_9TreeScopeE"]

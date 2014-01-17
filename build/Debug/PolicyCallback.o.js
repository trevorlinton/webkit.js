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
H_BASE = parentModule["_malloc"](8 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 8;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14PolicyCallbackC1Ev;
var __ZN7WebCore14PolicyCallbackD1Ev;
/* memory initializer */ allocate([71,69,84,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN3WTF10StringImpl19latin1CaseFoldTableE=env.__ZN3WTF10StringImpl19latin1CaseFoldTableE|0;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore19ResourceRequestBaseaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = i2 + 4 | 0;
 i4 = i1 + 4 | 0;
 i3 = HEAP8[i4] & -2 | HEAP8[i5] & 1;
 HEAP8[i4] = i3;
 HEAP8[i4] = i3 & -3 | HEAP8[i5] & 2;
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
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[i2 + 56 >> 3];
 i5 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 i3 = i1 + 64 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i4 = i2 + 68 | 0;
 i3 = i1 + 68 | 0;
 i5 = HEAP8[i3] & -2 | HEAP8[i4] & 1;
 HEAP8[i3] = i5;
 HEAP8[i3] = i5 & -3 | HEAP8[i4] & 2;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 HEAP32[i1 + 88 >> 2] = HEAP32[i2 + 88 >> 2];
 HEAP32[i1 + 92 >> 2] = HEAP32[i2 + 92 >> 2];
 HEAP32[i1 + 96 >> 2] = HEAP32[i2 + 96 >> 2];
 HEAP32[i1 + 100 >> 2] = HEAP32[i2 + 100 >> 2];
 HEAP32[i1 + 104 >> 2] = HEAP32[i2 + 104 >> 2];
 HEAP32[i1 + 108 >> 2] = HEAP32[i2 + 108 >> 2];
 i4 = HEAP32[i2 + 112 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 112 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1 + 116 | 0, i2 + 116 | 0) | 0;
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 136 | 0, i2 + 136 | 0) | 0;
 i3 = HEAP32[i2 + 148 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 148 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8FormDataD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i2 + 152 | 0;
 i5 = i1 + 152 | 0;
 i3 = HEAP8[i5] & -2 | HEAP8[i4] & 1;
 HEAP8[i5] = i3;
 i6 = i3 & -3 | HEAP8[i4] & 2;
 HEAP8[i5] = i6;
 i3 = i6 & -5 | HEAP8[i4] & 4;
 HEAP8[i5] = i3;
 i6 = i3 & -9 | HEAP8[i4] & 8;
 HEAP8[i5] = i6;
 i3 = i6 & -17 | HEAP8[i4] & 16;
 HEAP8[i5] = i3;
 i6 = i3 & -33 | HEAP8[i4] & 32;
 HEAP8[i5] = i6;
 i3 = i6 & -65 | HEAP8[i4] & 64;
 HEAP8[i5] = i3;
 HEAP8[i5] = i3 & 127 | HEAP8[i4] & -128;
 HEAP32[i1 + 156 >> 2] = HEAP32[i2 + 156 >> 2];
 return i1 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i8 >> 2] | 0) | 0;
 i9 = (i3 >>> 23) + ~i3 | 0;
 i10 = i9 << 12 ^ i9;
 i9 = i10 >>> 7 ^ i10;
 i10 = i9 << 2 ^ i9;
 i9 = i10 >>> 20 ^ i10 | 1;
 i10 = 0;
 i11 = i3;
 i3 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == (i15 | 0)) {
    i17 = 7;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i14, i15) | 0) {
    i17 = 7;
    break;
   } else {
    i16 = i10;
   }
  }
  i15 = (i3 | 0) == 0 ? i9 : i3;
  i10 = i16;
  i11 = i15 + i12 | 0;
  i3 = i15;
 }
 if ((i17 | 0) == 7) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i3 = i1;
  HEAP32[i3 >> 2] = i13;
  HEAP32[i3 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i10 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i10;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i10;
 }
 i10 = HEAP32[i4 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i13 = i10 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i10;
 do {
  if ((i17 | 0) != 0) {
   i10 = i17 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i4 = i17 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i17;
 do {
  if ((i13 | 0) != 0) {
   i17 = i13 | 0;
   i4 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i17 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i19 = i18;
  i20 = i17;
 } else {
  i17 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i2, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 _memset(i5 | 0, 0, 20) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 3) | 0;
 L1 : do {
  if ((HEAP32[i2 + 12 >> 2] | 0) != 0) {
   L3 : do {
    if ((i7 | 0) == 0) {
     i9 = i6;
    } else {
     i10 = i6;
     while (1) {
      i11 = HEAP32[i10 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i9 = i10;
       break L3;
      }
      i10 = i10 + 8 | 0;
      if ((i10 | 0) == (i8 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i12 = i9;
   }
   while (1) {
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
    i10 = i12 + 8 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break L1;
    } else {
     i13 = i10;
    }
    while (1) {
     i10 = HEAP32[i13 >> 2] | 0;
     if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
      break;
     }
     i10 = i13 + 8 | 0;
     if ((i10 | 0) == (i8 | 0)) {
      break L1;
     } else {
      i13 = i10;
     }
    }
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i13;
    }
   }
  }
 } while (0);
 i13 = i1 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i8 = i5 | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i12;
 i8 = i1 + 4 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i13;
 i4 = i1 + 8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i9 = i5 + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i8;
 i8 = i1 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i4 = i5 + 12 | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i9;
 i9 = i1 + 16 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i8 = i5 + 16 | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 if ((i12 | 0) == 0) {
  STACKTOP = i3;
  return i1 | 0;
 }
 if ((i13 | 0) > 0) {
  i4 = 0;
  while (1) {
   i8 = i12 + (i4 << 3) | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) != -1) {
     i9 = HEAP32[i12 + (i4 << 3) + 4 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i5 = i9 | 0;
       i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
       if ((i6 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i5 >> 2] = i6;
        break;
       }
      }
     } while (0);
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     i6 = i9 | 0;
     i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i5 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i6 >> 2] = i5;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i13 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i12);
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore14PolicyCallback3setERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionENSt3__18functionIFvS3_S7_SA_SD_bEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 | 0, i2) | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 184 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i7 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i7 | 0);
 }
 i7 = HEAP32[i4 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i4 = i7 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 188 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 do {
  if ((i3 | 0) != 0) {
   i7 = i3 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 + 192 | 0, i5 | 0) | 0;
 HEAP32[i1 + 376 >> 2] = HEAP32[i5 + 184 >> 2];
 i3 = HEAP32[i5 + 188 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 380 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 8 | 0;
   i5 = i3 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i3 - 8 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 7](i7);
  }
 } while (0);
 i4 = i1 + 400 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) == (i1 + 384 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 7](i7);
  } else {
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 7](i7);
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 424 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i3 = i1 + 408 | 0;
 do {
  if ((i7 | 0) == (i3 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 7](i7);
  } else {
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 7](i7);
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i7 = i6 + 16 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i6 | 0)) {
    HEAP32[i4 >> 2] = i3;
    i2 = HEAP32[i7 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i2, i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    HEAP32[i7 >> 2] = 0;
    break;
   }
  }
 } while (0);
 i7 = i1 + 448 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == (i1 + 432 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i5);
  HEAP32[i7 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 7](i5);
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
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
 HEAP32[i1 + 8 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i10 << 3) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  if ((i4 | 0) == (-1 | 0) | (i4 | 0) == 0) {
   i12 = i11;
  } else {
   i4 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i5) | 0;
   i12 = (i5 | 0) == (i2 | 0) ? i4 : i11;
  }
  i4 = i10 + 1 | 0;
  if ((i4 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i4;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i13 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i2 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i10 >> 2] = i2;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN7WebCore14PolicyCallback6cancelEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 208 | 0;
 i8 = i2 + 216 | 0;
 i9 = i1 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i6);
 __ZN7WebCore15ResourceRequestaSERKS0_(i9, i6) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i6);
 i6 = i1 + 184 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i10 | 0);
 }
 i10 = i1 + 188 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i11 = i1 + 400 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i10 = HEAP32[i6 >> 2] | 0;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i14 = i12;
   } else {
    i15 = i10 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i14 = HEAP32[i11 >> 2] | 0;
   }
   HEAP8[i5] = 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 1](i14, i9, i7, i5);
   i15 = HEAP32[i13 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i15 | 0);
  }
 } while (0);
 i5 = i1 + 424 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = HEAP32[i6 >> 2] | 0;
   i11 = i8 | 0;
   HEAP32[i11 >> 2] = i14;
   if ((i14 | 0) == 0) {
    i16 = i7;
   } else {
    i12 = i14 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i16 = HEAP32[i5 >> 2] | 0;
   }
   HEAP8[i4] = 0;
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 24 >> 2] & 1](i16, i9, i8, i1 + 188 | 0, i1 + 192 | 0, i4);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i12 | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 448 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 1](i4, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14PolicyCallback3setERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEENSt3__18functionIFvS3_S7_bEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 | 0, i2) | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 184 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i5 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i5 | 0);
 }
 i5 = i1 + 188 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 400 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 384 | 0;
 do {
  if ((i2 | 0) == (i5 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 i2 = i4 + 16 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
  } else {
   if ((i6 | 0) == (i4 | 0)) {
    HEAP32[i3 >> 2] = i5;
    i7 = HEAP32[i2 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 1](i7, i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    HEAP32[i2 >> 2] = 0;
    break;
   }
  }
 } while (0);
 i2 = i1 + 424 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i6 | 0) == (i1 + 408 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 7](i6);
  } else {
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 448 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == (i1 + 432 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 7](i6);
  HEAP32[i2 >> 2] = 0;
  return;
 }
 if ((i6 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZN7WebCore14PolicyCallback3setENSt3__18functionIFvNS_12PolicyActionEEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i4 = i3 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i4);
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 | 0, i4) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i4);
 i4 = i1 + 184 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i5 | 0);
 }
 i5 = i1 + 188 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = i1 + 400 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) == (i1 + 384 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 7](i6);
  } else {
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6);
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 424 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) == (i1 + 408 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 7](i6);
  } else {
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6);
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 448 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 432 | 0;
 do {
  if ((i6 | 0) == (i5 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 7](i6);
  } else {
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] & 7](i6);
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 i6 = i2 + 16 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = i5;
  i2 = HEAP32[i6 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 1](i2, i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  HEAP32[i6 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = -1640531527;
  i7 = i3 + 4 | 0;
  HEAP8[i7] = 0;
  i8 = i3 + 6 | 0;
  HEAP16[i8 >> 1] = 0;
  __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i3, i4, i5);
  i5 = HEAP32[i6 >> 2] | 0;
  if ((HEAP8[i7] & 1) == 0) {
   i9 = i5;
  } else {
   i7 = (HEAPU16[i8 >> 1] | 0) + i5 | 0;
   i5 = i7 << 11 ^ i7;
   i9 = (i5 >>> 17) + i5 | 0;
  }
  i5 = i9 << 3 ^ i9;
  i9 = (i5 >>> 5) + i5 | 0;
  i5 = i9 << 2 ^ i9;
  i9 = (i5 >>> 15) + i5 | 0;
  i5 = (i9 << 10 ^ i9) & 16777215;
  i10 = (i5 | 0) == 0 ? 8388608 : i5;
  STACKTOP = i2;
  return i10 | 0;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = (i9 & 1 | 0) == 0;
 i7 = i9 >>> 1;
 if ((i7 | 0) == 0) {
  i11 = i5;
  i12 = -1640531527;
 } else {
  i9 = i7;
  i8 = i5;
  i6 = -1640531527;
  while (1) {
   i4 = i9 - 1 | 0;
   i3 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8] | 0) << 1) >> 1] | 0) + i6 | 0;
   i13 = i3 << 16 ^ i3 ^ (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i8 + 1 | 0] | 0) << 1) >> 1] | 0) << 11;
   i14 = (i13 >>> 11) + i13 | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i9 = i4;
    i8 = i8 + 2 | 0;
    i6 = i14;
   }
  }
  i11 = i5 + (i7 << 1) | 0;
  i12 = i14;
 }
 if (i1) {
  i15 = i12;
 } else {
  i1 = (HEAPU16[__ZN3WTF10StringImpl19latin1CaseFoldTableE + ((HEAPU8[i11] | 0) << 1) >> 1] | 0) + i12 | 0;
  i12 = i1 << 11 ^ i1;
  i15 = (i12 >>> 17) + i12 | 0;
 }
 i12 = i15 << 3 ^ i15;
 i15 = (i12 >>> 5) + i12 | 0;
 i12 = i15 << 2 ^ i15;
 i15 = (i12 >>> 15) + i12 | 0;
 i12 = (i15 << 10 ^ i15) & 16777215;
 i10 = (i12 | 0) == 0 ? 8388608 : i12;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZN7WebCore15ResourceRequestaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN7WebCore19ResourceRequestBaseaSERKS0_(i1 | 0, i2 | 0) | 0;
 i3 = HEAP32[i2 + 160 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 160 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 164 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 164 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 168 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 168 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 172 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 172 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP8[i1 + 176 | 0] = HEAP8[i2 + 176 | 0] & 1;
 HEAP8[i1 + 177 | 0] = HEAP8[i2 + 177 | 0] & 1;
 HEAP8[i1 + 178 | 0] = HEAP8[i2 + 178 | 0] & 1;
 HEAP32[i1 + 180 >> 2] = HEAP32[i2 + 180 >> 2];
 return i1 | 0;
}
function __ZN7WebCore15ResourceRequestC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i7 = i6 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP8[i4 + 4 | 0] | 0;
 i6 = i1 + 4 | 0;
 HEAP8[i6] = HEAP8[i6] & -4 | i7 & 1 | i7 & 2;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i1 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i1 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i1 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP32[i1 + 48 >> 2] = 0;
 HEAPF64[i1 + 56 >> 3] = +HEAPF64[__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE >> 3];
 i4 = i1 + 64 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i4);
 HEAP32[i3 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i1 + 112 | 0, i3);
 __ZN7WebCore13HTTPHeaderMapC1Ev(i1 + 116 | 0);
 _memset(i1 + 136 | 0, 0, 16) | 0;
 HEAP8[i1 + 152 | 0] = 11;
 HEAP32[i1 + 156 >> 2] = 1;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
 i5 = i3 | 0;
 i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i4;
  i8 = i1 + 160 | 0;
  i9 = i1 + 180 | 0;
  i10 = i8;
  _memset(i10 | 0, 0, 19) | 0;
  HEAP32[i9 >> 2] = 15;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = __ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE(HEAP32[i1 >> 2] | 0) | 0;
 i6 = (i5 >>> 23) + ~i5 | 0;
 i7 = i6 << 12 ^ i6;
 i6 = i7 >>> 7 ^ i7;
 i7 = i6 << 2 ^ i6;
 i6 = i7 >>> 20 ^ i7 | 1;
 i7 = i5;
 i5 = 0;
 i8 = 0;
 while (1) {
  i9 = i7 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 3;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   i12 = HEAP32[i1 >> 2] | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i15 = i10;
    break;
   }
   if (__ZN3WTF24equalIgnoringCaseNonNullEPKNS_10StringImplES2_(i11, i12) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i12 = (i5 | 0) == 0 ? i6 : i5;
  i7 = i12 + i9 | 0;
  i5 = i12;
  i8 = i14;
 }
 if ((i13 | 0) == 3) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i13 = i8 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i13 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i13 = i14 | 0;
   i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i13 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 i14 = i2 + 4 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
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
function __ZN7WebCore14PolicyCallbackD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 432 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 424 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 408 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 400 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 384 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 380 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i1 + 192 | 0);
 i2 = HEAP32[i1 + 188 >> 2] | 0;
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
 i2 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
 i6 = i1 | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i6);
 return;
}
function __ZN7WebCore14PolicyCallbackD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 432 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 424 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 408 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 400 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 384 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 380 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 8 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 7](i5);
  }
 } while (0);
 __ZN7WebCore15ResourceRequestD2Ev(i1 + 192 | 0);
 i2 = HEAP32[i1 + 188 >> 2] | 0;
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
 i2 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1 | 0;
  __ZN7WebCore15ResourceRequestD2Ev(i6);
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i2 | 0);
 i6 = i1 | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i6);
 return;
}
function __ZN7WebCore14PolicyCallback5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i3 = i2 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i3);
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 | 0, i3) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i3);
 i3 = i1 + 184 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i4 | 0);
 }
 i4 = i1 + 188 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i3 = i1 + 400 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) == (i1 + 384 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i5);
  } else {
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 7](i5);
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 424 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) == (i1 + 408 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i5);
  } else {
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 7](i5);
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 448 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (i1 + 432 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 7](i5);
  HEAP32[i3 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 if ((i5 | 0) == 0) {
  HEAP32[i3 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 7](i5);
 HEAP32[i3 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14PolicyCallback4callEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 400 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = HEAP32[i1 + 184 >> 2] | 0;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i10 | 0) == 0) {
    i12 = i9;
   } else {
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   HEAP8[i4] = i2 & 1;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] & 1](i12, i1 | 0, i6, i4);
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i13 | 0);
  }
 } while (0);
 i4 = i1 + 424 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i1 + 184 >> 2] | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i12;
 if ((i12 | 0) == 0) {
  i14 = i6;
 } else {
  i6 = i12 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  i14 = HEAP32[i4 >> 2] | 0;
 }
 HEAP8[i5] = i2 & 1;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 1](i14, i1 | 0, i7, i1 + 188 | 0, i1 + 192 | 0, i5);
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i5 | 0);
 STACKTOP = i3;
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
function __ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = (i3 & 1 | 0) == 0;
 i5 = i3 >>> 1;
 if ((i5 | 0) == 0) {
  i6 = i2;
 } else {
  i3 = i1 | 0;
  i7 = i5 << 1;
  i8 = i5;
  i5 = i2;
  while (1) {
   i9 = i8 - 1 | 0;
   i10 = _u_foldCase(HEAPU16[i5 >> 1] | 0, 0) | 0;
   i11 = _u_foldCase(HEAPU16[i5 + 2 >> 1] | 0, 0) | 0;
   i12 = (HEAP32[i3 >> 2] | 0) + (i10 & 65535) | 0;
   i10 = i12 ^ i11 << 11 & 134215680 ^ i12 << 16;
   HEAP32[i3 >> 2] = (i10 >>> 11) + i10;
   if ((i9 | 0) == 0) {
    break;
   } else {
    i8 = i9;
    i5 = i5 + 4 | 0;
   }
  }
  i6 = i2 + (i7 << 1) | 0;
 }
 if (i4) {
  return;
 }
 i4 = _u_foldCase(HEAPU16[i6 >> 1] | 0, 0) | 0;
 i6 = i1 + 4 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP16[i1 + 6 >> 1] = i4;
  HEAP8[i6] = 1;
  return;
 } else {
  HEAP8[i6] = 0;
  i6 = i1 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) + (HEAPU16[i1 + 6 >> 1] | 0) | 0;
  i1 = i7 ^ i4 << 11 & 134215680 ^ i7 << 16;
  HEAP32[i6 >> 2] = (i1 >>> 11) + i1;
  return;
 }
}
function __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   i3 = i3 + 8 | 0;
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
function __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev(i1 + 8 | 0);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i5 = i2 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore14PolicyCallback12clearRequestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i3 = i2 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i3);
 __ZN7WebCore15ResourceRequestaSERKS0_(i1 | 0, i3) | 0;
 __ZN7WebCore15ResourceRequestD2Ev(i3);
 i3 = i1 + 184 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv(i4 | 0);
 }
 i4 = i1 + 188 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  STACKTOP = i2;
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
function __ZN7WebCore14PolicyCallback4callENS_12PolicyActionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i2 = HEAP32[i1 + 448 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 1](i2, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14PolicyCallbackC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i1 | 0);
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 __ZN7WebCore16NavigationActionC1Ev(i1 + 192 | 0);
 HEAP32[i1 + 400 >> 2] = 0;
 HEAP32[i1 + 424 >> 2] = 0;
 HEAP32[i1 + 448 >> 2] = 0;
 return;
}
function __ZN7WebCore14PolicyCallbackC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore15ResourceRequestC2Ev(i1 | 0);
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 __ZN7WebCore16NavigationActionC1Ev(i1 + 192 | 0);
 HEAP32[i1 + 400 >> 2] = 0;
 HEAP32[i1 + 424 >> 2] = 0;
 HEAP32[i1 + 448 >> 2] = 0;
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14PolicyCallbackC2Ev,b0,__ZN7WebCore14PolicyCallbackD2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viiiiii = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE": __ZN7WebCore19ResourceRequestBase24s_defaultTimeoutIntervalE, "__ZN3WTF10StringImpl19latin1CaseFoldTableE": __ZN3WTF10StringImpl19latin1CaseFoldTableE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14PolicyCallbackC2Ev","__ZN3WTF6VectorINSt3__14pairINS_6StringES3_EELj0ENS_15CrashOnOverflowEED2Ev","__ZN7WebCore15ResourceRequestC2Ev","__ZN7WebCore14PolicyCallback12clearRequestEv","__ZN3WTF10RefCountedIN7WebCore9FormStateEE5derefEv","__ZN7WebCore14PolicyCallback3setERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEERKNS4_6StringERKNS_16NavigationActionENSt3__18functionIFvS3_S7_SA_SD_bEEE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_EaSERKSE_","__ZN7WebCore14PolicyCallback4callENS_12PolicyActionE","_memset","__ZN3WTF15CaseFoldingHash4hashERNS_10StringImplE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E3addINS_22IdentityHashTranslatorIS7_EERKS1_RKS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S4_S6_S7_SD_SA_EEEEOT0_OT1_","__ZN3WTF12StringHasher28addCharactersAssumingAlignedItXadL_ZNS_15CaseFoldingHash8foldCaseItEEtT_EEEEvPKS4_j","__ZN7WebCore15ResourceRequestD2Ev","__ZN7WebCore14PolicyCallback3setERKNS_15ResourceRequestEN3WTF10PassRefPtrINS_9FormStateEEENSt3__18functionIFvS3_S7_bEEE","__ZN7WebCore14PolicyCallback6cancelEv","__ZN7WebCore19ResourceRequestBaseaSERKS0_","__ZN7WebCore15ResourceRequestaSERKS0_","__ZN7WebCore14PolicyCallback3setENSt3__18functionIFvNS_12PolicyActionEEEE","__ZN7WebCore14PolicyCallback5clearEv","__ZN7WebCore14PolicyCallback4callEb","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E6expandEPS4_","__ZN7WebCore14PolicyCallbackD2Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6StringEEENS_24KeyValuePairKeyExtractorIS4_EENS_15CaseFoldingHashENS_7HashMapIS1_S3_S7_NS_10HashTraitsIS1_EENS9_IS3_EEE18KeyValuePairTraitsESA_E8reinsertEOS4_","_memcpy","__ZN7WebCore19ResourceRequestBaseD2Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_"]

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
/* memory initializer */ allocate([47,0,0,0,0,0,0,0,110,117,108,108,0,0,0,0,104,116,116,112,0,0,0,0,104,116,116,112,115,0,0,0,2,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SecurityPolicy32removeOriginAccessWhitelistEntryERKNS_14SecurityOriginERKN3WTF6StringES7_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 if ((HEAP8[i1 + 22 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore14SecurityOrigin8toStringEv(i7, i1);
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i9 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i10 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i10;
  HEAP8[H_BASE + 48 | 0] = 1;
  i9 = i10;
 }
 i10 = i9 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i11 = HEAP32[i9 + 4 >> 2] | 0;
  i12 = i11 << 3 | 0;
  i13 = i12;
  i14 = i12;
  i15 = 0;
  i16 = i11;
 } else {
  i11 = HEAP32[i9 + 8 >> 2] | 0;
  i12 = i7 | 0;
  i17 = HEAP32[i12 >> 2] | 0;
  i18 = HEAP32[i17 + 16 >> 2] | 0;
  if (i18 >>> 0 > 127 >>> 0) {
   i19 = i18 >>> 7;
  } else {
   i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i17) | 0;
  }
  i17 = (i19 >>> 23) + ~i19 | 0;
  i18 = i17 << 12 ^ i17;
  i17 = i18 >>> 7 ^ i18;
  i18 = i17 << 2 ^ i17;
  i17 = i18 >>> 20 ^ i18 | 1;
  i18 = i19;
  i19 = 0;
  while (1) {
   i20 = i18 & i11;
   i21 = i1 + (i20 << 3) | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i23 = i22;
   if ((i23 | 0) == 0) {
    i24 = 0;
    break;
   } else if ((i23 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i22, HEAP32[i12 >> 2] | 0) | 0) {
     i24 = i21;
     break;
    }
   }
   i21 = (i19 | 0) == 0 ? i17 : i19;
   i18 = i21 + i20 | 0;
   i19 = i21;
  }
  i19 = HEAP32[i10 >> 2] | 0;
  i18 = HEAP32[i9 + 4 >> 2] | 0;
  i17 = i19 + (i18 << 3) | 0;
  i13 = (i24 | 0) == 0 ? i17 : i24;
  i14 = i17;
  i15 = i19;
  i16 = i18;
 }
 i18 = i9 + 4 | 0;
 do {
  if ((i13 | 0) != (i15 + (i16 << 3) | 0)) {
   i19 = HEAP32[i13 + 4 >> 2] | 0;
   __ZN7WebCore17OriginAccessEntryC1ERKN3WTF6StringES4_NS0_16SubdomainSettingE(i8, i2, i3, i4 & 1 ^ 1);
   i17 = i19 + 8 | 0;
   L24 : do {
    if ((HEAP32[i17 >> 2] | 0) == 0) {
     i25 = -1;
     i26 = i8 + 4 | 0;
    } else {
     i24 = i19 | 0;
     i12 = i8 | 0;
     i1 = i8 + 4 | 0;
     i11 = i8 + 8 | 0;
     i21 = 0;
     while (1) {
      i20 = HEAP32[i24 >> 2] | 0;
      do {
       if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i20 + (i21 << 4) >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
        if (!(__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplES2_(HEAP32[i20 + (i21 << 4) + 4 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
         break;
        }
        if ((HEAP32[i20 + (i21 << 4) + 8 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
         i25 = i21;
         i26 = i1;
         break L24;
        }
       }
      } while (0);
      i20 = i21 + 1 | 0;
      if (i20 >>> 0 < (HEAP32[i17 >> 2] | 0) >>> 0) {
       i21 = i20;
      } else {
       i25 = -1;
       i26 = i1;
       break;
      }
     }
    }
   } while (0);
   i1 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i21 = i1 | 0;
     i11 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i21 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i1 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i11 = i1 | 0;
     i21 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i11 >> 2] = i21;
      break;
     }
    }
   } while (0);
   if ((i25 | 0) == -1) {
    break;
   }
   i1 = i19 | 0;
   i21 = HEAP32[i1 >> 2] | 0;
   i11 = i21 + (i25 << 4) | 0;
   i12 = HEAP32[i21 + (i25 << 4) + 4 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i24 = i12 | 0;
     i20 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i24 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i19 = i12 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN3WTF11VectorMoverILb0EN7WebCore17OriginAccessEntryEE15moveOverlappingEPS2_S4_S4_(i21 + (i25 + 1 << 4) | 0, (HEAP32[i1 >> 2] | 0) + (HEAP32[i17 >> 2] << 4) | 0, i11);
   i12 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   HEAP32[i17 >> 2] = i12;
   if ((i12 | 0) != 0) {
    break;
   }
   if ((i13 | 0) == ((HEAP32[i10 >> 2] | 0) + (HEAP32[i18 >> 2] << 3) | 0)) {
    break;
   }
   HEAP32[i6 >> 2] = i13;
   HEAP32[i6 + 4 >> 2] = i14;
   __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EE(i9 | 0, i6);
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = i6 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i7 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, i7 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i9) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i10 | 0) == 0) {
     i11 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i11 | 0) == 0) {
      i12 = 37;
      break;
     }
     i13 = i11 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
     i14 = i11;
     i15 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 37;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i11 = i5 | 0;
     i13 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i13 | 0) == 0) {
      i12 = 37;
      break;
     }
     i11 = i13 + 20 | 0;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i10;
     HEAP32[i13 + 8 >> 2] = i11;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 0;
     i14 = i13;
     i15 = i11;
    }
   } while (0);
   if ((i12 | 0) == 37) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i16 = 0;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i18 = 0;
       }
       while (1) {
        HEAP16[i15 + (i18 << 1) >> 1] = HEAP16[i17 + (i18 << 1) >> 1] | 0;
        i18 = i18 + 1 | 0;
        if (i18 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i17 = HEAP32[i11 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i19 = 0;
       }
       while (1) {
        HEAP16[i15 + (i19 << 1) >> 1] = HEAPU8[i17 + i19 | 0] | 0;
        i19 = i19 + 1 | 0;
        if (i19 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      break;
     }
     i16 = HEAP32[i13 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i15 + (i11 + i16 << 1) >> 1] = HEAPU8[i3 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i10 | 0) == 0) {
   i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i14 | 0) == 0) {
    i12 = 19;
    break;
   }
   i16 = i14 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i20 = i14;
   i21 = 0;
  } else {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 19;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i14 = i6 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i12 = 19;
    break;
   }
   i14 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i10;
   HEAP32[i16 + 8 >> 2] = i14;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i20 = i16;
   i21 = i14;
  }
 } while (0);
 if ((i12 | 0) == 19) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i22 = 0;
  } else {
   i10 = HEAP32[i12 + 4 >> 2] | 0;
   i6 = HEAP32[i12 + 8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i23 = i12;
   } else {
    i14 = 0;
    while (1) {
     HEAP8[i21 + i14 | 0] = HEAP8[i6 + i14 | 0] | 0;
     i14 = i14 + 1 | 0;
     if (i14 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i23 = i10;
    }
   }
   i22 = HEAP32[i23 + 4 >> 2] | 0;
  }
 } while (0);
 _memcpy(i21 + i22 | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    break;
   }
   if ((i2 | 0) == 2) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   } else if ((i2 | 0) == 0) {
    HEAP32[i1 >> 2] = i11;
    i12 = i11 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
    STACKTOP = i5;
    return;
   } else if ((i2 | 0) == 3) {
    __ZN7WebCore14SecurityOrigin16createFromStringERKN3WTF6StringE(i9, i4);
    i12 = i9 | 0;
    __ZNK7WebCore14SecurityOrigin8toStringEv(i8, HEAP32[i12 >> 2] | 0);
    i13 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i12 = i13 | 0;
      if (((tempValue = HEAP32[i12 >> 2] | 0, HEAP32[i12 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
       break;
      }
      __ZN7WebCore14SecurityOriginD2Ev(i13);
      __ZN3WTF8fastFreeEPv(i13);
     }
    } while (0);
    i13 = i8 | 0;
    do {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i13 >> 2] | 0, H_BASE + 16 | 0) | 0) {
      HEAP32[i1 >> 2] = 0;
     } else {
      i12 = HEAP32[i13 >> 2] | 0;
      do {
       if ((i12 | 0) == 0) {
        i14 = 0;
       } else {
        i15 = i12 | 0;
        i16 = HEAP32[i15 >> 2] | 0;
        i17 = i16 + 2 | 0;
        HEAP32[i15 >> 2] = i16 + 4;
        if ((i17 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i12);
         i14 = i12;
         break;
        } else {
         HEAP32[i15 >> 2] = i17;
         i14 = i12;
         break;
        }
       }
      } while (0);
      i12 = i7 | 0;
      HEAP32[i12 >> 2] = i14;
      i17 = (i14 | 0) == 0;
      if (!i17) {
       i15 = i14 | 0;
       HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
      }
      __ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, i7, H_BASE + 8 | 0);
      i15 = i6 | 0;
      i16 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      i15 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i15 | 0) != 0) {
        i12 = i15 | 0;
        i18 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
        if ((i18 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i15);
         break;
        } else {
         HEAP32[i12 >> 2] = i18;
         break;
        }
       }
      } while (0);
      if ((i16 | 0) == 0) {
       _WTFCrash();
      }
      HEAP32[i1 >> 2] = i16;
      if (i17) {
       break;
      }
      i15 = i14 | 0;
      i18 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i14);
       break;
      } else {
       HEAP32[i15 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i18 = HEAP32[i13 >> 2] | 0;
    if ((i18 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i15 = i18 | 0;
    i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     STACKTOP = i5;
     return;
    } else {
     HEAP32[i15 >> 2] = i12;
     STACKTOP = i5;
     return;
    }
   } else {
    if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i4, H_BASE + 32 | 0) | 0) {
     i12 = i1 | 0;
     if (__ZNK7WebCore3URL10protocolIsEPKc(i3, H_BASE + 32 | 0) | 0) {
      i19 = i12;
     } else {
      i20 = i12;
      i21 = 35;
     }
    } else {
     i12 = i1 | 0;
     if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i4, H_BASE + 24 | 0) | 0) {
      i19 = i12;
     } else {
      i20 = i12;
      i21 = 35;
     }
    }
    if ((i21 | 0) == 35) {
     HEAP32[i20 >> 2] = 0;
     STACKTOP = i5;
     return;
    }
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i19 >> 2] = i12;
    if ((i12 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i15 = i12 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
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
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   if ((i17 | 0) != 0) {
    __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
   }
   i17 = i27 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i14 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i13;
   i13 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i19 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
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
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  i11 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i11 | 0) != -1) {
    i10 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    if ((i10 | 0) == 0) {
     i29 = i11;
    } else {
     __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i10);
     __ZN3WTF8fastFreeEPv(i10);
     i29 = HEAP32[i1 >> 2] | 0;
    }
    if ((i29 | 0) == 0) {
     break;
    }
    i10 = i29 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i29);
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i10 = i8 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i6 = i10;
 i10 = 0;
 while (1) {
  i11 = i6 & i5;
  i12 = i9 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == 0) {
   break;
  } else if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 11;
    break;
   } else {
    i15 = i8;
   }
  }
  i13 = (i10 | 0) == 0 ? i3 : i10;
  i8 = i15;
  i6 = i13 + i11 | 0;
  i10 = i13;
 }
 if ((i16 | 0) == 11) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i12;
  HEAP32[i10 + 4 >> 2] = i16;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i8 | 0) == 0) {
  i17 = i12;
 } else {
  i12 = i8;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  i12 = i2 + 16 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - 1;
  i17 = i8;
 }
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i17 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 do {
  if ((i12 | 0) != 0) {
   i8 = i12 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i12 = i17 + 4 | 0;
 i7 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 if ((i7 | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i7);
  __ZN3WTF8fastFreeEPv(i7);
 }
 i7 = i2 + 12 | 0;
 i12 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i12;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i12 << 1 | 0) < (i8 | 0)) {
  i18 = i17;
  i19 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i20 = 8;
  } else {
   i16 = i8 << 1;
   i20 = (i12 * 6 & -1 | 0) < (i16 | 0) ? i8 : i16;
  }
  i16 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i2, i20, i17) | 0;
  i18 = i16;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore14SecurityPolicy29addOriginAccessWhitelistEntryERKNS_14SecurityOriginERKN3WTF6StringES7_b(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 if ((HEAP8[i1 + 22 | 0] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore14SecurityOrigin8toStringEv(i6, i1);
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i10 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(20) | 0;
  i11 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i11;
  HEAP8[H_BASE + 48 | 0] = 1;
  i10 = i11;
 }
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_(i7, i10 | 0, i6, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP8[i7 + 8 | 0] & 1) != 0) {
   i10 = __ZN3WTF10fastMallocEj(12) | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   HEAP32[i10 + 8 >> 2] = 0;
   i11 = i8 + 4 | 0;
   i1 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i10;
   if ((i1 | 0) == 0) {
    break;
   }
   __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 __ZN7WebCore17OriginAccessEntryC1ERKN3WTF6StringES4_NS0_16SubdomainSettingE(i9, i2, i3, i4 & 1 ^ 1);
 i4 = i7 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i7 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i7, i9);
  i12 = i9 + 4 | 0;
 } else {
  i2 = HEAP32[i7 >> 2] | 0;
  i7 = i9 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i2 + (i3 << 4) >> 2] = i8;
  i8 = i9 + 4 | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i2 + (i3 << 4) + 4 >> 2] = i7;
  HEAP32[i2 + (i3 << 4) + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP8[i2 + (i3 << 4) + 12 | 0] = HEAP8[i9 + 12 | 0] & 1;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  i12 = i8;
 }
 i8 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i12 = i8 | 0;
   i4 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i12 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i8 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF11VectorMoverILb0EN7WebCore17OriginAccessEntryEE15moveOverlappingEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (i1 >>> 0 > i3 >>> 0) {
  if ((i1 | 0) == (i2 | 0)) {
   return;
  } else {
   i4 = i1;
   i5 = i3;
  }
  while (1) {
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 >> 2] = i7;
   i7 = i4 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
   HEAP8[i5 + 12 | 0] = HEAP8[i4 + 12 | 0] & 1;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 | 0;
     i7 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i9 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i8 = i4 + 16 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    break;
   } else {
    i4 = i8;
    i5 = i5 + 16 | 0;
   }
  }
  return;
 }
 if ((i2 | 0) == (i1 | 0)) {
  return;
 }
 i5 = i2;
 i4 = i3 + (i2 - i1 >> 4 << 4) | 0;
 while (1) {
  i2 = i5 - 16 | 0;
  i3 = i4 - 16 | 0;
  i8 = i2 | 0;
  i6 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i3 >> 2] = i6;
  i6 = i5 - 16 + 4 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 - 16 + 4 >> 2] = i7;
  HEAP32[i4 - 16 + 8 >> 2] = HEAP32[i5 - 16 + 8 >> 2];
  HEAP8[i4 - 16 + 12 | 0] = HEAP8[i5 - 16 + 12 | 0] & 1;
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i9 = i7 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i9 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if ((i2 | 0) == (i1 | 0)) {
   break;
  } else {
   i5 = i2;
   i4 = i3;
  }
 }
 return;
}
function __ZN7WebCore14SecurityPolicy19isAccessWhiteListedEPKNS_14SecurityOriginES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i5 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i7;
  HEAP8[H_BASE + 48 | 0] = 1;
  i5 = i7;
 }
 __ZNK7WebCore14SecurityOrigin8toStringEv(i4, i1);
 i1 = HEAP32[i5 + 8 >> 2] | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i4 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i8 = i6 >>> 7;
 } else {
  i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i4) | 0;
 }
 L9 : do {
  if ((i7 | 0) == 0) {
   i9 = 0;
  } else {
   i4 = (i8 >>> 23) + ~i8 | 0;
   i6 = i4 << 12 ^ i4;
   i4 = i6 >>> 7 ^ i6;
   i6 = i4 << 2 ^ i4;
   i4 = i6 >>> 20 ^ i6 | 1;
   i6 = i8;
   i10 = 0;
   while (1) {
    i11 = i6 & i1;
    i12 = i7 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i9 = 0;
     break L9;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i5 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i10 | 0) == 0 ? i4 : i10;
    i6 = i13 + i11 | 0;
    i10 = i13;
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = HEAP32[i7 + (i11 << 3) + 4 >> 2] | 0;
  }
 } while (0);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i5 = i11 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i11 = i9 + 8 | 0;
 i7 = i9 | 0;
 i9 = 0;
 while (1) {
  if (i9 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
   i15 = 0;
   i16 = 24;
   break;
  }
  if (__ZNK7WebCore17OriginAccessEntry13matchesOriginERKNS_14SecurityOriginE((HEAP32[i7 >> 2] | 0) + (i9 << 4) | 0, i2) | 0) {
   i15 = 1;
   i16 = 25;
   break;
  } else {
   i9 = i9 + 1 | 0;
  }
 }
 if ((i16 | 0) == 24) {
  STACKTOP = i3;
  return i15 | 0;
 } else if ((i16 | 0) == 25) {
  STACKTOP = i3;
  return i15 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 4) | 0;
 if (i2 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i9;
   HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP8[i7 + 12 | 0] = HEAP8[i6 + 12 | 0] & 1;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 16 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 3) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i2 >> 2] = -1;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 12 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i5 * 6 & -1 | 0) < (i2 | 0) & (i2 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_(i1, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 4) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 4 << 4) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = i11 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 4) >> 2] = i5;
 i5 = i11 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i12 + (i6 << 4) + 4 >> 2] = i2;
 HEAP32[i12 + (i6 << 4) + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP8[i12 + (i6 << 4) + 12 | 0] = HEAP8[i11 + 12 | 0] & 1;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore14SecurityPolicy27resetOriginAccessWhitelistsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if (HEAP8[H_BASE + 48 | 0] | 0) {
  i1 = HEAP32[H_BASE + 56 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 56 >> 2] = i3;
  HEAP8[H_BASE + 48 | 0] = 1;
  i1 = i3;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i4 = 0;
  while (1) {
   i5 = i3 + (i4 << 3) | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) != -1) {
     i7 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i8 = i6;
     } else {
      __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i7);
      __ZN3WTF8fastFreeEPv(i7);
      i8 = HEAP32[i5 >> 2] | 0;
     }
     if ((i8 | 0) == 0) {
      break;
     }
     i7 = i8 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i4 = i4 + 1 | 0;
   if ((i4 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 4) | 0;
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
   i3 = i3 + 16 | 0;
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
function __ZN7WebCore14SecurityPolicy24isAccessToURLWhiteListedEPKNS_14SecurityOriginERKNS_3URLE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore14SecurityOrigin6createERKNS_3URLE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = __ZN7WebCore14SecurityPolicy19isAccessWhiteListedEPKNS_14SecurityOriginES3_(i1, i4) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 i1 = i4 | 0;
 if (((tempValue = HEAP32[i1 >> 2] | 0, HEAP32[i1 >> 2] = tempValue - 1, tempValue) - 1 | 0) > 0) {
  STACKTOP = i3;
  return i2 | 0;
 }
 __ZN7WebCore14SecurityOriginD2Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i3;
 return i2 | 0;
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
function __ZN7WebCore14SecurityPolicy18shouldHideReferrerERKNS_3URLERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (__ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i2, H_BASE + 32 | 0) | 0) {
  i3 = __ZNK7WebCore3URL10protocolIsEPKc(i1, H_BASE + 32 | 0) | 0;
  i4 = i3 ^ 1;
  return i4 | 0;
 } else {
  i3 = __ZN7WebCore10protocolIsERKN3WTF6StringEPKc(i2, H_BASE + 24 | 0) | 0;
  i4 = i3 ^ 1;
  return i4 | 0;
 }
 return 0;
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
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore14SecurityPolicy18setLocalLoadPolicyENS0_15LocalLoadPolicyE(i1) {
 i1 = i1 | 0;
 HEAP32[H_BASE + 40 >> 2] = i1;
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
function __ZN7WebCore14SecurityPolicy32allowSubstituteDataAccessToLocalEv() {
 return (HEAP32[H_BASE + 40 >> 2] | 0) != 2 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore14SecurityPolicy21restrictAccessToLocalEv() {
 return (HEAP32[H_BASE + 40 >> 2] | 0) != 0 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore14SecurityPolicy29addOriginAccessWhitelistEntryERKNS_14SecurityOriginERKN3WTF6StringES7_b","__ZN7WebCore14SecurityPolicy21restrictAccessToLocalEv","_memcpy","__ZN7WebCore14SecurityPolicy27resetOriginAccessWhitelistsEv","__ZN7WebCore14SecurityPolicy18setLocalLoadPolicyENS0_15LocalLoadPolicyE","_memset","__ZN7WebCore14SecurityPolicy32allowSubstituteDataAccessToLocalEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EE","__ZN3WTF13tryMakeStringINS_6StringEPKcEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore14SecurityOriginD2Ev","__ZN7WebCore14SecurityPolicy22generateReferrerHeaderENS_14ReferrerPolicyERKNS_3URLERKN3WTF6StringE","__ZN7WebCore14SecurityPolicy24isAccessToURLWhiteListedEPKNS_14SecurityOriginERKNS_3URLE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_SA_SC_SD_SJ_SG_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6OwnPtrINS_6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_10StringHashENS_7HashMapIS1_S9_SD_NS_10HashTraitsIS1_EENSF_IS9_EEE18KeyValuePairTraitsESG_E6rehashEiPSA_","__ZN7WebCore14SecurityPolicy19isAccessWhiteListedEPKNS_14SecurityOriginES3_","__ZN7WebCore14SecurityPolicy18shouldHideReferrerERKNS_3URLERKN3WTF6StringE","__ZN7WebCore14SecurityPolicy32removeOriginAccessWhitelistEntryERKNS_14SecurityOriginERKN3WTF6StringES7_b","__ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEED2Ev","__ZN3WTF6VectorIN7WebCore17OriginAccessEntryELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZN3WTF11VectorMoverILb0EN7WebCore17OriginAccessEntryEE15moveOverlappingEPS2_S4_S4_"]

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
var __ZN7WebCore12CSSValuePoolC1Ev;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12CSSValuePool5drainEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 3016 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 3020 >> 2] | 0;
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
      i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i6 | 0);
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
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 6120 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 6124 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i8 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i8 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i6 = i7 | 0;
        i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
        if ((i9 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
         break;
        } else {
         HEAP32[i6 >> 2] = i9;
         break;
        }
       }
      } while (0);
      i7 = HEAP32[i8 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
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
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 6140 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i10 = 0;
 } else {
  i4 = HEAP32[i1 + 6144 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i8 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i8 >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i6 | 0) != 0) {
        i9 = i6 | 0;
        i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
        if ((i7 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i6 | 0);
         break;
        } else {
         HEAP32[i9 >> 2] = i7;
         break;
        }
       }
      } while (0);
      i6 = HEAP32[i8 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 | 0;
      i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i9 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
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
  _memset(i2 | 0, 0, 16) | 0;
  i10 = 0;
 }
 while (1) {
  i2 = i1 + 12 + (i10 << 2) | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  do {
   if ((i3 | 0) != 0) {
    i2 = i3 | 0;
    i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
     break;
    } else {
     HEAP32[i2 >> 2] = i4;
     break;
    }
   }
  } while (0);
  i3 = i10 + 1 | 0;
  if ((i3 | 0) < 751) {
   i10 = i3;
  } else {
   i11 = 0;
   break;
  }
 }
 while (1) {
  i10 = i1 + 3048 + (i11 << 2) | 0;
  i3 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  do {
   if ((i3 | 0) != 0) {
    i10 = i3 | 0;
    i4 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
     break;
    } else {
     HEAP32[i10 >> 2] = i4;
     break;
    }
   }
  } while (0);
  i3 = i1 + 4072 + (i11 << 2) | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 | 0;
    i10 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i4 | 0);
     break;
    } else {
     HEAP32[i3 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i4 = i1 + 5096 + (i11 << 2) | 0;
  i10 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  do {
   if ((i10 | 0) != 0) {
    i4 = i10 | 0;
    i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i3 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
     break;
    } else {
     HEAP32[i4 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i11 = i11 + 1 | 0;
  if ((i11 | 0) >= 255) {
   break;
  }
 }
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
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
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 11;
     break;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 11) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i17 | 0);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i14 = i20 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i14 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i27 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i27 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i11 | 0);
       break;
      } else {
       HEAP32[i10 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i27 = i11 | 0;
    i10 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i27 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
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
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7 + ~(i7 << 15) | 0;
 i6 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i6 >>> 6 ^ i6;
 i6 = i8 + ~(i8 << 11) | 0;
 i8 = i6 >>> 16 ^ i6;
 i6 = i8 & i5;
 i10 = i9 + (i6 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i8 >>> 23) + ~i8 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i6;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i3 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i13 = i3 | 0;
   i21 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
    break;
   } else {
    HEAP32[i13 >> 2] = i21;
    break;
   }
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i21 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i21;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i21 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i7 = i13 << 1;
   i28 = (i21 * 6 & -1 | 0) < (i7 | 0) ? i13 : i7;
  }
  i7 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i28, i12) | 0;
  i26 = i7;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 i6 = i8 >>> 7;
 i10 = (i8 >>> 30) + ~i6 | 0;
 i8 = i10 << 12 ^ i10;
 i10 = i8 >>> 7 ^ i8;
 i8 = i10 << 2 ^ i10;
 i10 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i11 = i6;
 i6 = 0;
 while (1) {
  i12 = i11 & i5;
  i13 = i9 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if ((i14 | 0) == (i3 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i8;
   }
  }
  i14 = (i6 | 0) == 0 ? i10 : i6;
  i8 = i16;
  i11 = i14 + i12 | 0;
  i6 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i13;
  HEAP32[i9 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i8 | 0) == 0) {
  i18 = i13;
  i19 = i3;
 } else {
  i3 = i8;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i18 = i8;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 if ((i19 | 0) != 0) {
  i7 = i19 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = i18 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i19;
 do {
  if ((i8 | 0) != 0) {
   i19 = i8 | 0;
   i7 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i19 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i8 = i18 + 4 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i19 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i19 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
    break;
   } else {
    HEAP32[i8 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i19 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i19;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i19 << 1 | 0) < (i8 | 0)) {
  i20 = i18;
  i21 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i22 = 8;
  } else {
   i3 = i8 << 1;
   i22 = (i19 * 6 & -1 | 0) < (i3 | 0) ? i8 : i3;
  }
  i3 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i22, i18) | 0;
  i20 = i3;
  i21 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i21 << 3) | 0;
 i21 = i1;
 HEAP32[i21 >> 2] = i20;
 HEAP32[i21 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
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
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
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
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 | 0;
     i20 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i16 | 0);
      break;
     } else {
      HEAP32[i13 >> 2] = i20;
      break;
     }
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i20;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
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
    i10 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i1 | 0);
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
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore12CSSValuePool16createColorValueEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i3 | 0) == 0) {
  i8 = HEAP32[i2 + 3036 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == (-1 | 0)) {
  i9 = HEAP32[i2 + 3040 >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 } else if ((i3 | 0) == (-16777216 | 0)) {
  i3 = HEAP32[i2 + 3044 >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  i8 = i3 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 } else {
  i8 = i2 + 3016 | 0;
  i3 = i2 + 3028 | 0;
  L3 : do {
   if ((HEAP32[i3 >> 2] | 0) > 511) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i2 + 3020 | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i9 + (i11 << 3) | 0;
    L6 : do {
     if ((i11 | 0) == 0) {
      i13 = i9;
     } else {
      i14 = i9;
      while (1) {
       i15 = HEAP32[i14 >> 2] | 0;
       if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
        i13 = i14;
        break L6;
       }
       i14 = i14 + 8 | 0;
       if ((i14 | 0) == (i12 | 0)) {
        break;
       }
      }
      i16 = i8 | 0;
      break L3;
     }
    } while (0);
    i9 = i8 | 0;
    if ((i13 | 0) == (i12 | 0)) {
     i16 = i9;
     break;
    }
    i11 = HEAP32[i13 + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i14 = i11 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i11 | 0);
       break;
      } else {
       HEAP32[i14 >> 2] = i15;
       break;
      }
     }
    } while (0);
    HEAP32[i13 >> 2] = -1;
    i11 = i2 + 3032 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    i11 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i11;
    i12 = HEAP32[i10 >> 2] | 0;
    if (!((i11 * 6 & -1 | 0) < (i12 | 0) & (i12 | 0) > 8)) {
     i16 = i9;
     break;
    }
    __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i9, (i12 | 0) / 2 & -1, 0) | 0;
    i16 = i9;
   } else {
    i16 = i8 | 0;
   }
  } while (0);
  HEAP32[i7 >> 2] = 0;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i6, i16, i5, i7);
  i7 = HEAP32[i6 >> 2] | 0;
  do {
   if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
    i16 = HEAP32[i5 >> 2] | 0;
    i8 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1Ej(i8, i16);
    i16 = i7 + 4 | 0;
    i3 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i8;
    if ((i3 | 0) == 0) {
     break;
    }
    i8 = i3 | 0;
    i16 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i16 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i3 | 0);
     break;
    } else {
     HEAP32[i8 >> 2] = i16;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = i5;
  i1 = i5 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i6 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i3 + 16 >> 2] | 0;
 if (i8 >>> 0 > 127 >>> 0) {
  i9 = i8 >>> 7;
 } else {
  i9 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i9 >>> 23) + ~i9 | 0;
 i8 = i3 << 12 ^ i3;
 i3 = i8 >>> 7 ^ i8;
 i8 = i3 << 2 ^ i3;
 i3 = i8 >>> 20 ^ i8 | 1;
 i8 = 0;
 i10 = i9;
 i9 = 0;
 while (1) {
  i11 = i10 & i5;
  i12 = i6 + (i11 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0)) {
   i15 = i12;
  } else if ((i14 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i7 >> 2] | 0) | 0) {
    i16 = 9;
    break;
   } else {
    i15 = i8;
   }
  }
  i13 = (i9 | 0) == 0 ? i3 : i9;
  i8 = i15;
  i10 = i13 + i11 | 0;
  i9 = i13;
 }
 if ((i16 | 0) == 9) {
  i16 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i9 = i1;
  HEAP32[i9 >> 2] = i12;
  HEAP32[i9 + 4 >> 2] = i16;
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
 do {
  if ((i7 | 0) != 0) {
   i12 = i7 | 0;
   i8 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
    break;
   } else {
    HEAP32[i12 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = i2 + 12 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 HEAP32[i7 >> 2] = i8;
 i7 = i2 + 4 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i12 | 0)) {
  i18 = i17;
  i19 = i12;
 } else {
  i12 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i17) | 0;
  i18 = i12;
  i19 = HEAP32[i7 >> 2] | 0;
 }
 i7 = (HEAP32[i4 >> 2] | 0) + (i19 << 3) | 0;
 i19 = i1;
 HEAP32[i19 >> 2] = i18;
 HEAP32[i19 + 4 >> 2] = i7;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore12CSSValuePool19createFontFaceValueERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i2 + 6120 | 0;
 L1 : do {
  if ((HEAP32[i2 + 6132 >> 2] | 0) > 127) {
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i2 + 6124 >> 2] | 0;
   i12 = i10 + (i11 << 3) | 0;
   L3 : do {
    if ((i11 | 0) == 0) {
     i13 = i10;
    } else {
     i14 = i10;
     while (1) {
      i15 = HEAP32[i14 >> 2] | 0;
      if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
       i13 = i14;
       break L3;
      }
      i14 = i14 + 8 | 0;
      if ((i14 | 0) == (i12 | 0)) {
       break;
      }
     }
     break L1;
    }
   } while (0);
   if ((i13 | 0) == (i12 | 0)) {
    break;
   }
   HEAP32[i5 >> 2] = i13;
   HEAP32[i5 + 4 >> 2] = i12;
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE(i9 | 0, i5);
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i7, i9 | 0, i3, i6);
 i6 = (HEAP32[i7 >> 2] | 0) + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   __ZN7WebCore9CSSParser18parseFontFaceValueERKN3WTF12AtomicStringE(i8, i3);
   i9 = i8 | 0;
   i5 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   do {
    if ((i13 | 0) != 0) {
     i5 = i13 | 0;
     i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
      break;
     } else {
      HEAP32[i5 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i12 = i13 | 0;
     i2 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
      break;
     } else {
      HEAP32[i12 >> 2] = i2;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i6 >> 2] | 0;
   HEAP32[i1 >> 2] = i13;
   if ((i13 | 0) != 0) {
    i16 = i13;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i1 >> 2] = i7;
   i16 = i7;
  }
 } while (0);
 i7 = i16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
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
   i6 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) | 0;
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
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i13 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 | 0;
      i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
      if ((i3 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i11 | 0);
       break;
      } else {
       HEAP32[i10 >> 2] = i3;
       break;
      }
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i3 = i11 | 0;
    i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i3 >> 2] = i10;
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
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 i7 = i6 >>> 7;
 i8 = (i6 >>> 30) + ~i7 | 0;
 i6 = i8 << 12 ^ i8;
 i8 = i6 >>> 7 ^ i6;
 i6 = i8 << 2 ^ i8;
 i8 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i9 = 0;
 while (1) {
  i10 = i6 & i4;
  i11 = i3 + (i10 << 3) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i12;
  if ((i13 | 0) == 0) {
   i14 = 3;
   break;
  } else if ((i13 | 0) == (-1 | 0)) {
   i15 = i11;
  } else {
   if ((i12 | 0) == (i5 | 0)) {
    i16 = i11;
    break;
   } else {
    i15 = i9;
   }
  }
  i12 = (i7 | 0) == 0 ? i8 : i7;
  i6 = i12 + i10 | 0;
  i7 = i12;
  i9 = i15;
 }
 if ((i14 | 0) == 3) {
  i16 = (i9 | 0) != 0 ? i9 : i11;
 }
 i11 = i16 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i14 = i9 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i9 | 0);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i9 = i16 | 0;
 i15 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   i14 = i15 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = i15;
 i15 = i2 + 4 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 return i16 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE(i1, i2) {
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
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = i5 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
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
 __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, (i2 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12CSSValuePool11createValueEdNS_17CSSPrimitiveValue9UnitTypesE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 if (d3 < +0 | d3 > +255) {
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i5, d3, i4);
  HEAP32[i1 >> 2] = i5;
  return;
 }
 i5 = ~~d3;
 if (+(i5 | 0) != d3) {
  i6 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i6, d3, i4);
  HEAP32[i1 >> 2] = i6;
  return;
 }
 if ((i4 | 0) == 5) {
  i7 = i2 + 3048 | 0;
 } else if ((i4 | 0) == 2) {
  i7 = i2 + 4072 | 0;
 } else if ((i4 | 0) == 1) {
  i7 = i2 + 5096 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i2, d3, i4);
  HEAP32[i1 >> 2] = i2;
  return;
 }
 i2 = i7 + (i5 << 2) | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i5 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i5, d3, i4);
   i7 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i5;
   if ((i7 | 0) == 0) {
    break;
   }
   i5 = i7 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore12CSSValuePool21createFontFamilyValueERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i6, i2 + 6140 | 0, i3, i5);
 i5 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKN3WTF6StringENS0_9UnitTypesE(i6, i3, 19);
   i2 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i2 | 0) == 0) {
    break;
   }
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12CSSValuePoolC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 131072;
 HEAP32[i1 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 139264;
 HEAP8[i2 + 7 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 139264;
 HEAP8[i2 + 7 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 3024) | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, 0);
 HEAP32[i1 + 3036 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, -1);
 HEAP32[i1 + 3040 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, -16777216);
 HEAP32[i1 + 3044 >> 2] = i2;
 _memset(i1 + 3048 | 0, 0, 3112) | 0;
 return;
}
function __ZN7WebCore12CSSValuePoolC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 131072;
 HEAP32[i1 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 139264;
 HEAP8[i2 + 7 | 0] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i2 >> 2] = 1;
 i3 = i2 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -524288 | 139264;
 HEAP8[i2 + 7 | 0] = 0;
 HEAP32[i1 + 8 >> 2] = i2;
 _memset(i1 + 12 | 0, 0, 3024) | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, 0);
 HEAP32[i1 + 3036 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, -1);
 HEAP32[i1 + 3040 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1Ej(i2, -16777216);
 HEAP32[i1 + 3044 >> 2] = i2;
 _memset(i1 + 3048 | 0, 0, 3112) | 0;
 return;
}
function __ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if ((i3 | 0) == 0) {
  i4 = __ZN3WTF10fastMallocEj(16) | 0;
  __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i4, 0);
  HEAP32[i1 >> 2] = i4;
  return;
 }
 if ((i3 - 1 | 0) >>> 0 > 749 >>> 0) {
  _WTFCrash();
 }
 i4 = i2 + 12 + (i3 << 2) | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   i2 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i2, i3);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i2;
   if ((i5 | 0) == 0) {
    break;
   }
   i2 = i5 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
    break;
   } else {
    HEAP32[i2 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
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
function __ZN7WebCore12cssValuePoolEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i1 = HEAP32[H_BASE + 16 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(6160) | 0;
  __ZN7WebCore12CSSValuePoolC2Ev(i2);
  HEAP32[H_BASE + 16 >> 2] = i2;
  HEAP8[H_BASE + 8 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore12CSSValuePool21createIdentifierValueENS_13CSSPropertyIDE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17CSSPrimitiveValueC1ENS_13CSSPropertyIDE(i2, i3);
 HEAP32[i1 >> 2] = i2;
 return;
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore12CSSValuePoolC2Ev,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12CSSValuePool11createValueEdNS_17CSSPrimitiveValue9UnitTypesE","__ZN7WebCore12CSSValuePool21createIdentifierValueENS_10CSSValueIDE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","_memset","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN7WebCore12CSSValuePool16createColorValueEj","__ZN7WebCore12CSSValuePool21createFontFamilyValueERKN3WTF6StringE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E8reinsertEOS7_","__ZN7WebCore12CSSValuePoolC2Ev","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","__ZN7WebCore12cssValuePoolEv","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore12CSSValueListEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_16AtomicStringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","_strlen","__ZN7WebCore12CSSValuePool5drainEv","_memcpy","__ZN7WebCore12CSSValuePool21createIdentifierValueENS_13CSSPropertyIDE","__ZN7WebCore12CSSValuePool19createFontFaceValueERKN3WTF12AtomicStringE","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17CSSPrimitiveValueEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_"]

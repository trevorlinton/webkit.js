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
H_BASE = parentModule["_malloc"](440 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 440;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE;
var __ZN7WebCore17MarkupAccumulatorD1Ev;
/* memory initializer */ allocate([34,32,115,116,97,110,100,97,108,111,110,101,61,34,0,0,34,32,101,110,99,111,100,105,110,103,61,34,0,0,0,0,60,63,120,109,108,32,118,101,114,115,105,111,110,61,34,0,61,34,34,0,0,0,0,0,120,109,108,110,115,58,0,0,38,110,98,115,112,59,0,0,38,113,117,111,116,59,0,0,45,45,62,0,0,0,0,0,38,103,116,59,0,0,0,0,60,33,45,45,0,0,0,0,93,93,62,0,0,0,0,0,60,33,91,67,68,65,84,65,91,0,0,0,0,0,0,0,78,83,0,0,0,0,0,0,32,83,89,83,84,69,77,32,34,0,0,0,0,0,0,0,32,80,85,66,76,73,67,32,34,0,0,0,0,0,0,0,60,33,68,79,67,84,89,80,69,32,0,0,0,0,0,0,34,63,62,0,0,0,0,0,110,111,0,0,0,0,0,0,121,101,115,0,0,0,0,0,38,108,116,59,0,0,0,0,38,97,109,112,59,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE=env.__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE|0;
  var __ZN7WebCore8XMLNames15xmlNamespaceURIE=env.__ZN7WebCore8XMLNames15xmlNamespaceURIE|0;
  var __ZN3WTF7xmlAtomE=env.__ZN3WTF7xmlAtomE|0;
  var __ZN7WebCore10XLinkNames17xlinkNamespaceURIE=env.__ZN7WebCore10XLinkNames17xlinkNamespaceURIE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN3WTF9xmlnsAtomE=env.__ZN3WTF9xmlnsAtomE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var __ZN7WebCore9HTMLNames6xmpTagE=env.__ZN7WebCore9HTMLNames6xmpTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17MarkupAccumulatorE=(H_BASE+232)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore17MarkupAccumulator15appendNamespaceERN3WTF13StringBuilderERKNS1_12AtomicStringES6_RNS1_7HashMapIS4_PNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS4_EENSB_IS9_EEEEb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 88 | 0;
 i19 = i7 + 96 | 0;
 i20 = i4 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
    break;
   }
   i22 = i3 | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i24 = __ZN3WTF9emptyAtomE | 0;
   } else {
    i24 = (HEAP32[i23 + 4 >> 2] | 0) == 0 ? __ZN3WTF9emptyAtomE | 0 : i22;
   }
   i23 = HEAP32[i24 >> 2] | 0;
   HEAP32[i14 >> 2] = i23;
   i25 = (i23 | 0) == 0;
   if (!i25) {
    i26 = i23 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
   }
   i26 = HEAP32[i5 + 8 >> 2] | 0;
   i27 = HEAP32[i5 >> 2] | 0;
   i28 = HEAP32[i23 + 16 >> 2] | 0;
   i29 = i28 >>> 7;
   L10 : do {
    if ((i27 | 0) == 0) {
     i30 = 0;
    } else {
     i31 = (i28 >>> 30) + ~i29 | 0;
     i32 = i31 << 12 ^ i31;
     i31 = i32 >>> 7 ^ i32;
     i32 = i31 << 2 ^ i31;
     i31 = i32 >>> 20 ^ i32 | 1;
     i32 = i29;
     i33 = 0;
     while (1) {
      i34 = i32 & i26;
      i35 = i27 + (i34 << 3) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      i37 = i36;
      if ((i37 | 0) == 0) {
       i30 = 0;
       break L10;
      } else if ((i37 | 0) != (-1 | 0)) {
       if ((i36 | 0) == (i23 | 0)) {
        break;
       }
      }
      i36 = (i33 | 0) == 0 ? i31 : i33;
      i32 = i36 + i34 | 0;
      i33 = i36;
     }
     if ((i35 | 0) == 0) {
      i30 = 0;
      break;
     }
     i30 = HEAP32[i27 + (i34 << 3) + 4 >> 2] | 0;
    }
   } while (0);
   do {
    if (!i25) {
     i27 = i23 | 0;
     i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
     if ((i26 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i27 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i25 = HEAP32[i20 >> 2] | 0;
   if ((i30 | 0) == (i25 | 0)) {
    STACKTOP = i7;
    return;
   }
   i26 = i15 | 0;
   HEAP32[i26 >> 2] = i23;
   if ((i23 | 0) == 0) {
    i38 = i25;
   } else {
    i25 = i23 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
    i38 = HEAP32[i20 >> 2] | 0;
   }
   HEAP32[i16 >> 2] = i38;
   i25 = i5 | 0;
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i17, i25, i15, i16);
   if ((HEAP8[i17 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] = HEAP32[i16 >> 2];
   }
   i27 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i26 = i27 | 0;
     i29 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
     if ((i29 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i26 >> 2] = i29;
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP32[i1 + 40 >> 2] | 0) == 1) {
     i27 = HEAP32[i22 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     if ((HEAP32[i27 + 4 >> 2] | 0) == 0) {
      break;
     }
     i27 = HEAP32[i20 >> 2] | 0;
     i23 = i18 | 0;
     HEAP32[i23 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i29 = i27 | 0;
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 2;
     }
     __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i19, i25, i18, i14);
     if ((HEAP8[i19 + 8 | 0] & 1) == 0) {
      HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] = HEAP32[i14 >> 2];
     }
     i29 = HEAP32[i23 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     i23 = i29 | 0;
     i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i29);
      break;
     } else {
      HEAP32[i23 >> 2] = i27;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i20 >> 2] | 0) == (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
    STACKTOP = i7;
    return;
   }
   HEAP8[i8] = 32;
   i25 = i2 + 8 | 0;
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i39 = 68;
    } else {
     i23 = i2 | 0;
     i29 = HEAP32[i23 >> 2] | 0;
     if (i29 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
      i39 = 68;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i39 = 68;
      break;
     }
     i26 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i23 >> 2] = i29 + 1;
     if (i26) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i29 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i29 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i39 | 0) == 68) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i8, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, __ZN3WTF9xmlnsAtomE | 0);
   i27 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     if ((HEAP32[i27 + 4 >> 2] | 0) == 0) {
      break;
     }
     HEAP8[i9] = 58;
     i29 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i29 | 0) == 0) {
       i39 = 77;
      } else {
       i26 = i2 | 0;
       i23 = HEAP32[i26 >> 2] | 0;
       if (i23 >>> 0 >= (HEAP32[i29 + 4 >> 2] | 0) >>> 0) {
        i39 = 77;
        break;
       }
       if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
        i39 = 77;
        break;
       }
       i28 = (HEAP8[i2 + 12 | 0] & 1) == 0;
       HEAP32[i26 >> 2] = i23 + 1;
       if (i28) {
        HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i23 << 1) >> 1] = 58;
        break;
       } else {
        HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i23 | 0] = 58;
        break;
       }
      }
     } while (0);
     if ((i39 | 0) == 77) {
      __ZN3WTF13StringBuilder6appendEPKhj(i2, i9, 1);
     }
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i3 | 0);
    }
   } while (0);
   HEAP8[i11] = 61;
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i39 = 85;
    } else {
     i22 = i2 | 0;
     i29 = HEAP32[i22 >> 2] | 0;
     if (i29 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
      i39 = 85;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i39 = 85;
      break;
     }
     i23 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i22 >> 2] = i29 + 1;
     if (i23) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i29 << 1) >> 1] = 61;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i29 | 0] = 61;
      break;
     }
    }
   } while (0);
   if ((i39 | 0) == 85) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i11, 1);
   }
   HEAP8[i12] = 34;
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i39 = 92;
    } else {
     i29 = i2 | 0;
     i23 = HEAP32[i29 >> 2] | 0;
     if (i23 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
      i39 = 92;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i39 = 92;
      break;
     }
     i22 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i29 >> 2] = i23 + 1;
     if (i22) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i23 << 1) >> 1] = 34;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i23 | 0] = 34;
      break;
     }
    }
   } while (0);
   if ((i39 | 0) == 92) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i12, 1);
   }
   i27 = HEAP32[i20 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i40 = 0;
   } else {
    i40 = HEAP32[i27 + 4 >> 2] | 0;
   }
   __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i2, i4 | 0, 0, i40, 15);
   HEAP8[i13] = 34;
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) != 0) {
     i23 = i2 | 0;
     i22 = HEAP32[i23 >> 2] | 0;
     if (i22 >>> 0 >= (HEAP32[i27 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i29 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i23 >> 2] = i22 + 1;
     if (i29) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i22 << 1) >> 1] = 34;
      STACKTOP = i7;
      return;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i22 | 0] = 34;
      STACKTOP = i7;
      return;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i13, 1);
   STACKTOP = i7;
   return;
  }
 } while (0);
 if (!i6) {
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
 i13 = (i6 | 0) == 0;
 if (!i13) {
  i40 = i6 | 0;
  HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
 }
 i40 = HEAP32[i5 + 8 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 + 16 >> 2] | 0;
 i20 = i5 >>> 7;
 L124 : do {
  if ((i4 | 0) == 0) {
   i41 = 0;
  } else {
   i12 = (i5 >>> 30) + ~i20 | 0;
   i11 = i12 << 12 ^ i12;
   i12 = i11 >>> 7 ^ i11;
   i11 = i12 << 2 ^ i12;
   i12 = i11 >>> 20 ^ i11 | 1;
   i11 = i20;
   i3 = 0;
   while (1) {
    i42 = i11 & i40;
    i43 = i4 + (i42 << 3) | 0;
    i9 = HEAP32[i43 >> 2] | 0;
    i8 = i9;
    if ((i8 | 0) == 0) {
     i41 = 0;
     break L124;
    } else if ((i8 | 0) != (-1 | 0)) {
     if ((i9 | 0) == (i6 | 0)) {
      break;
     }
    }
    i9 = (i3 | 0) == 0 ? i12 : i3;
    i11 = i9 + i42 | 0;
    i3 = i9;
   }
   if ((i43 | 0) == 0) {
    i41 = 0;
    break;
   }
   i41 = (HEAP32[i4 + (i42 << 3) + 4 >> 2] | 0) != 0;
  }
 } while (0);
 do {
  if (i13) {
   if (i41) {
    break;
   }
   STACKTOP = i7;
   return;
  } else {
   i42 = i6 | 0;
   i4 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    if (i41) {
     break;
    }
    STACKTOP = i7;
    return;
   } else {
    HEAP32[i42 >> 2] = i4;
    if (i41) {
     break;
    }
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 HEAP8[i10] = 32;
 i41 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i41 | 0) == 0) {
   i39 = 24;
  } else {
   i6 = i2 | 0;
   i13 = HEAP32[i6 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i41 + 4 >> 2] | 0) >>> 0) {
    i39 = 24;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i39 = 24;
    break;
   }
   i4 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i6 >> 2] = i13 + 1;
   if (i4) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i13 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i39 | 0) == 24) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i10, 1);
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, __ZN3WTF9xmlnsAtomE | 0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 56 | 0, 3);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = (HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0;
 HEAP8[i11] = 32;
 i16 = i2 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i18 = 7;
  } else {
   i19 = i2 | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if (i20 >>> 0 >= (HEAP32[i17 + 4 >> 2] | 0) >>> 0) {
    i18 = 7;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i18 = 7;
    break;
   }
   i21 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i19 >> 2] = i20 + 1;
   if (i21) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i20 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i20 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i11, 1);
 }
 i11 = i12 | 0;
 i17 = i4 | 0;
 i20 = HEAP32[i17 >> 2] | 0;
 HEAP32[i11 >> 2] = i20;
 i21 = i20 | 0;
 HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
 i21 = HEAP32[i17 >> 2] | 0;
 i20 = HEAP32[i21 + 16 >> 2] | 0;
 do {
  if (i15) {
   if ((i20 | 0) == (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0) | (i20 | 0) == (HEAP32[__ZN7WebCore10XLinkNames17xlinkNamespaceURIE >> 2] | 0) | (i20 | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0)) {
    i18 = 11;
    break;
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i21 + 12 | 0);
  } else {
   i18 = 11;
  }
 } while (0);
 do {
  if ((i18 | 0) == 11) {
   L16 : do {
    if ((i20 | 0) != 0) {
     if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
      break;
     }
     i19 = (i5 | 0) != 0;
     do {
      if (i19) {
       i22 = HEAP32[i21 + 8 >> 2] | 0;
       if ((i22 | 0) == 0) {
        i23 = 0;
        i24 = 1;
        i25 = i21;
        break;
       }
       i26 = i22 | 0;
       i27 = HEAP32[i26 >> 2] | 0;
       HEAP32[i26 >> 2] = i27 + 2;
       i28 = HEAP32[i5 + 8 >> 2] | 0;
       i29 = HEAP32[i5 >> 2] | 0;
       i30 = HEAP32[i22 + 16 >> 2] | 0;
       i31 = i30 >>> 7;
       L22 : do {
        if ((i29 | 0) == 0) {
         i32 = 0;
        } else {
         i33 = (i30 >>> 30) + ~i31 | 0;
         i34 = i33 << 12 ^ i33;
         i33 = i34 >>> 7 ^ i34;
         i34 = i33 << 2 ^ i33;
         i33 = i34 >>> 20 ^ i34 | 1;
         i34 = i31;
         i35 = 0;
         while (1) {
          i36 = i34 & i28;
          i37 = i29 + (i36 << 3) | 0;
          i38 = HEAP32[i37 >> 2] | 0;
          i39 = i38;
          if ((i39 | 0) == 0) {
           i32 = 0;
           break L22;
          } else if ((i39 | 0) != (-1 | 0)) {
           if ((i38 | 0) == (i22 | 0)) {
            break;
           }
          }
          i38 = (i35 | 0) == 0 ? i33 : i35;
          i34 = i38 + i36 | 0;
          i35 = i38;
         }
         if ((i37 | 0) == 0) {
          i32 = 0;
          break;
         }
         i32 = HEAP32[i29 + (i36 << 3) + 4 >> 2] | 0;
        }
       } while (0);
       if ((i27 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
       } else {
        HEAP32[i26 >> 2] = i27;
       }
       i29 = HEAP32[i17 >> 2] | 0;
       if ((i32 | 0) == 0) {
        i23 = 0;
        i24 = 1;
        i25 = i29;
        break;
       }
       i23 = (i32 | 0) != (HEAP32[i29 + 16 >> 2] | 0);
       i24 = 0;
       i25 = i29;
      } else {
       i23 = 0;
       i24 = 1;
       i25 = i21;
      }
     } while (0);
     i29 = HEAP32[i25 + 8 >> 2] | 0;
     if ((i29 | 0) != 0) {
      if (!((HEAP32[i29 + 4 >> 2] | 0) == 0 | i24 | i23)) {
       break;
      }
     }
     do {
      if (i19) {
       i28 = HEAP32[i25 + 16 >> 2] | 0;
       i31 = (i28 | 0) == 0;
       if (!i31) {
        i30 = i28 | 0;
        HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
       }
       i30 = HEAP32[i5 + 8 >> 2] | 0;
       i35 = HEAP32[i5 >> 2] | 0;
       i34 = HEAP32[i28 + 16 >> 2] | 0;
       i33 = i34 >>> 7;
       L46 : do {
        if ((i35 | 0) == 0) {
         i40 = 0;
        } else {
         i38 = (i34 >>> 30) + ~i33 | 0;
         i39 = i38 << 12 ^ i38;
         i38 = i39 >>> 7 ^ i39;
         i39 = i38 << 2 ^ i38;
         i38 = i39 >>> 20 ^ i39 | 1;
         i39 = i33;
         i41 = 0;
         while (1) {
          i42 = i39 & i30;
          i43 = i35 + (i42 << 3) | 0;
          i44 = HEAP32[i43 >> 2] | 0;
          i45 = i44;
          if ((i45 | 0) == 0) {
           i40 = 0;
           break L46;
          } else if ((i45 | 0) != (-1 | 0)) {
           if ((i44 | 0) == (i28 | 0)) {
            break;
           }
          }
          i44 = (i41 | 0) == 0 ? i38 : i41;
          i39 = i44 + i42 | 0;
          i41 = i44;
         }
         if ((i43 | 0) == 0) {
          i40 = 0;
          break;
         }
         i40 = HEAP32[i35 + (i42 << 3) + 4 >> 2] | 0;
        }
       } while (0);
       do {
        if (!i31) {
         i35 = i28 | 0;
         i30 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
         if ((i30 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i28);
          break;
         } else {
          HEAP32[i35 >> 2] = i30;
          break;
         }
        }
       } while (0);
       if ((i40 | 0) == 0) {
        i28 = HEAP32[i17 >> 2] | 0;
        i46 = i28;
        i47 = HEAP32[i28 + 8 >> 2] | 0;
        break;
       }
       i28 = i13 | 0;
       HEAP32[i28 >> 2] = i40;
       i31 = i40 | 0;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
       i31 = HEAP32[i11 >> 2] | 0;
       __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, i13, i31 + 12 | 0, i31 + 16 | 0);
       i31 = i7 | 0;
       i30 = HEAP32[i31 >> 2] | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
       __ZN7WebCore13QualifiedName5derefEv(i12);
       HEAP32[i11 >> 2] = HEAP32[i31 >> 2];
       __ZN7WebCore13QualifiedNameD1Ev(i7);
       i31 = HEAP32[i28 >> 2] | 0;
       if ((i31 | 0) == 0) {
        break L16;
       }
       i28 = i31 | 0;
       i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
       if ((i30 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i31);
        break L16;
       } else {
        HEAP32[i28 >> 2] = i30;
        break L16;
       }
      } else {
       i46 = i25;
       i47 = i29;
      }
     } while (0);
     if ((i47 | 0) != 0) {
      if (i24 & (HEAP32[i47 + 4 >> 2] | 0) != 0) {
       break;
      }
     }
     if ((HEAP32[i46 + 12 >> 2] | 0) == (HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0) | i19 ^ 1) {
      break;
     }
     __ZN7WebCore17MarkupAccumulator20generateUniquePrefixERNS_13QualifiedNameERKN3WTF7HashMapINS3_12AtomicStringEPNS3_16AtomicStringImplENS3_16AtomicStringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i1, i12, i5);
    }
   } while (0);
   __ZNK7WebCore13QualifiedName8toStringEv(i14, i12);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i14);
   i29 = HEAP32[i14 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i30 = i29 | 0;
   i28 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
   if ((i28 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i29);
    break;
   } else {
    HEAP32[i30 >> 2] = i28;
    break;
   }
  }
 } while (0);
 HEAP8[i8] = 61;
 i14 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i18 = 63;
  } else {
   i46 = i2 | 0;
   i47 = HEAP32[i46 >> 2] | 0;
   if (i47 >>> 0 >= (HEAP32[i14 + 4 >> 2] | 0) >>> 0) {
    i18 = 63;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i18 = 63;
    break;
   }
   i24 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i46 >> 2] = i47 + 1;
   if (i24) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i47 << 1) >> 1] = 61;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i47 | 0] = 61;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 63) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i8, 1);
 }
 L90 : do {
  if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 376 >> 2] & 1](i3, i4) | 0) {
   __ZN7WebCore17MarkupAccumulator29appendQuotedURLAttributeValueERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeE(i1, i2, i3, i4);
  } else {
   HEAP8[i9] = 34;
   i8 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i8 | 0) == 0) {
     i18 = 72;
    } else {
     i14 = i2 | 0;
     i47 = HEAP32[i14 >> 2] | 0;
     if (i47 >>> 0 >= (HEAP32[i8 + 4 >> 2] | 0) >>> 0) {
      i18 = 72;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i18 = 72;
      break;
     }
     i24 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i14 >> 2] = i47 + 1;
     if (i24) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i47 << 1) >> 1] = 34;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i47 | 0] = 34;
      break;
     }
    }
   } while (0);
   if ((i18 | 0) == 72) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i9, 1);
   }
   i8 = i4 + 4 | 0;
   i47 = HEAP32[i8 >> 2] | 0;
   if ((i47 | 0) == 0) {
    i48 = 0;
   } else {
    i48 = HEAP32[i47 + 4 >> 2] | 0;
   }
   __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i2, i8, 0, i48, i15 ? 31 : 15);
   HEAP8[i10] = 34;
   i8 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i47 = i2 | 0;
     i24 = HEAP32[i47 >> 2] | 0;
     if (i24 >>> 0 >= (HEAP32[i8 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i14 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i47 >> 2] = i24 + 1;
     if (i14) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i24 << 1) >> 1] = 34;
      break L90;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i24 | 0] = 34;
      break L90;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i10, 1);
  }
 } while (0);
 if (i15 & (HEAP32[i1 + 40 >> 2] | 0) != 1 | (i5 | 0) == 0) {
  __ZN7WebCore13QualifiedNameD1Ev(i12);
  STACKTOP = i6;
  return;
 }
 if (!(__ZN7WebCore17MarkupAccumulator27shouldAddNamespaceAttributeERKNS_9AttributeERN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE(0, i4, i5) | 0)) {
  __ZN7WebCore13QualifiedNameD1Ev(i12);
  STACKTOP = i6;
  return;
 }
 i4 = HEAP32[i11 >> 2] | 0;
 __ZN7WebCore17MarkupAccumulator15appendNamespaceERN3WTF13StringBuilderERKNS1_12AtomicStringES6_RNS1_7HashMapIS4_PNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS4_EENSB_IS9_EEEEb(i1, i2, i4 + 8 | 0, i4 + 16 | 0, i5, 0);
 __ZN7WebCore13QualifiedNameD1Ev(i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17MarkupAccumulator18appendDocumentTypeERN3WTF13StringBuilderERKNS_12DocumentTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 24 | 0;
 i8 = i1 + 32 | 0;
 i9 = i1 + 40 | 0;
 i10 = i1 + 48 | 0;
 i11 = i1 + 56 | 0;
 i12 = i1 + 64 | 0;
 i13 = i3 + 44 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 176 | 0, 10);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i13);
 i13 = i3 + 48 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 L7 : do {
  if ((i14 | 0) == 0) {
   i15 = 35;
  } else {
   if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
    i15 = 35;
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 160 | 0, 9);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i13);
   HEAP8[i7] = 34;
   i16 = i2 + 8 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i15 = 11;
    } else {
     i18 = i2 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if (i19 >>> 0 >= (HEAP32[i17 + 4 >> 2] | 0) >>> 0) {
      i15 = 11;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i15 = 11;
      break;
     }
     i20 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i18 >> 2] = i19 + 1;
     if (i20) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i19 << 1) >> 1] = 34;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i19 | 0] = 34;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 11) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
   }
   i17 = i3 + 52 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i5] = 32;
   i19 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i15 = 20;
    } else {
     i20 = i2 | 0;
     i18 = HEAP32[i20 >> 2] | 0;
     if (i18 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
      i15 = 20;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i15 = 20;
      break;
     }
     i21 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i20 >> 2] = i18 + 1;
     if (i21) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i18 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i18 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 20) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i5, 1);
   }
   HEAP8[i4] = 34;
   i19 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i19 | 0) == 0) {
     i15 = 27;
    } else {
     i18 = i2 | 0;
     i21 = HEAP32[i18 >> 2] | 0;
     if (i21 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
      i15 = 27;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i15 = 27;
      break;
     }
     i20 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i18 >> 2] = i21 + 1;
     if (i20) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i21 << 1) >> 1] = 34;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i21 | 0] = 34;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 27) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i4, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i17);
   HEAP8[i6] = 34;
   i19 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i21 = i2 | 0;
     i20 = HEAP32[i21 >> 2] | 0;
     if (i20 >>> 0 >= (HEAP32[i19 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i18 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i21 >> 2] = i20 + 1;
     if (i18) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i20 << 1) >> 1] = 34;
      break L7;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i20 | 0] = 34;
      break L7;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
  }
 } while (0);
 L50 : do {
  if ((i15 | 0) == 35) {
   i6 = i3 + 52 | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 144 | 0, 9);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i6);
   HEAP8[i8] = 34;
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i4 = i2 | 0;
     i5 = HEAP32[i4 >> 2] | 0;
     if (i5 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i7 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i4 >> 2] = i5 + 1;
     if (i7) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i5 << 1) >> 1] = 34;
      break L50;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i5 | 0] = 34;
      break L50;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i8, 1);
  }
 } while (0);
 i8 = i3 + 56 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 L63 : do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP8[i9] = 32;
   i6 = i2 + 8 | 0;
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i15 = 52;
    } else {
     i7 = i2 | 0;
     i4 = HEAP32[i7 >> 2] | 0;
     if (i4 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
      i15 = 52;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i15 = 52;
      break;
     }
     i13 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i7 >> 2] = i4 + 1;
     if (i13) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i4 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i4 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 52) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i9, 1);
   }
   HEAP8[i10] = 91;
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i15 = 59;
    } else {
     i4 = i2 | 0;
     i13 = HEAP32[i4 >> 2] | 0;
     if (i13 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
      i15 = 59;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i15 = 59;
      break;
     }
     i7 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i4 >> 2] = i13 + 1;
     if (i7) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 91;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i13 | 0] = 91;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 59) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, i10, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i8);
   HEAP8[i11] = 93;
   i5 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i13 = i2 | 0;
     i7 = HEAP32[i13 >> 2] | 0;
     if (i7 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i4 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i13 >> 2] = i7 + 1;
     if (i4) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i7 << 1) >> 1] = 93;
      break L63;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i7 | 0] = 93;
      break L63;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i11, 1);
  }
 } while (0);
 HEAP8[i12] = 62;
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i8 = i2 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   if (i10 >>> 0 >= (HEAP32[i11 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   i15 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i8 >> 2] = i10 + 1;
   if (i15) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i10 << 1) >> 1] = 62;
    STACKTOP = i1;
    return;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i10 | 0] = 62;
    STACKTOP = i1;
    return;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, i12, 1);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore17MarkupAccumulator29appendQuotedURLAttributeValueERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 __ZNK7WebCore17MarkupAccumulator18resolveURLIfNeededERKNS_7ElementERKN3WTF6StringE(i11, i1, i3, i4 + 4 | 0);
 __ZNK3WTF6String15stripWhiteSpaceEv(i12, i11);
 L1 : do {
  if (__ZN7WebCore20protocolIsJavaScriptERKN3WTF6StringE(i12) | 0) {
   i4 = i12 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   L3 : do {
    if ((i3 | 0) == 0) {
     i13 = 34;
    } else {
     i1 = (HEAP32[i3 + 16 >> 2] & 32 | 0) == 0;
     if (i1) {
      i14 = HEAP32[i3 + 8 >> 2] | 0;
      i15 = HEAP32[i3 + 4 >> 2] | 0;
      i16 = i14;
      i17 = 0;
      while (1) {
       if (i17 >>> 0 >= i15 >>> 0) {
        i13 = 34;
        break L3;
       }
       if ((HEAP16[i14 + (i17 << 1) >> 1] | 0) == 34) {
        i18 = i17;
        i19 = i14;
        i20 = i15;
        i21 = i16;
        break;
       } else {
        i17 = i17 + 1 | 0;
       }
      }
     } else {
      i17 = HEAP32[i3 + 8 >> 2] | 0;
      i16 = HEAP32[i3 + 4 >> 2] | 0;
      i15 = i17;
      i14 = 0;
      while (1) {
       if (i14 >>> 0 >= i16 >>> 0) {
        i13 = 34;
        break L3;
       }
       if ((HEAP8[i17 + i14 | 0] | 0) == 34) {
        i18 = i14;
        i19 = i15;
        i20 = i16;
        i21 = i17;
        break;
       } else {
        i14 = i14 + 1 | 0;
       }
      }
     }
     if ((i18 | 0) == -1) {
      i13 = 34;
      break;
     }
     if (i1) {
      i14 = 0;
      while (1) {
       if (i14 >>> 0 >= i20 >>> 0) {
        i13 = 39;
        break L3;
       }
       if ((HEAP16[i19 + (i14 << 1) >> 1] | 0) == 39) {
        i22 = i14;
        break;
       } else {
        i14 = i14 + 1 | 0;
       }
      }
     } else {
      i14 = 0;
      while (1) {
       if (i14 >>> 0 >= i20 >>> 0) {
        i13 = 39;
        break L3;
       }
       if ((HEAP8[i21 + i14 | 0] | 0) == 39) {
        i22 = i14;
        break;
       } else {
        i14 = i14 + 1 | 0;
       }
      }
     }
     if ((i22 | 0) == -1) {
      i13 = 39;
      break;
     }
     __ZN3WTF10StringImpl7replaceEtPKhj(i10, i3, 34, H_BASE + 80 | 0, 6);
     i14 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = HEAP32[i10 >> 2];
     if ((i14 | 0) == 0) {
      i13 = 34;
      break;
     }
     i1 = i14 | 0;
     i17 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      i13 = 34;
      break;
     } else {
      HEAP32[i1 >> 2] = i17;
      i13 = 34;
      break;
     }
    }
   } while (0);
   HEAP16[i7 >> 1] = i13;
   i4 = i2 + 8 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i23 = 27;
    } else {
     i17 = i2 | 0;
     i1 = HEAP32[i17 >> 2] | 0;
     if (i1 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
      i23 = 27;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i23 = 27;
      break;
     }
     if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
      HEAP32[i17 >> 2] = i1 + 1;
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i1 << 1) >> 1] = i13;
      break;
     } else {
      HEAP32[i17 >> 2] = i1 + 1;
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i1 | 0] = i13;
      break;
     }
    }
   } while (0);
   if ((i23 | 0) == 27) {
    __ZN3WTF13StringBuilder6appendEPKtj(i2, i7, 1);
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i12);
   HEAP16[i6 >> 1] = i13;
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i1 = i2 | 0;
     i17 = HEAP32[i1 >> 2] | 0;
     if (i17 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
      HEAP32[i1 >> 2] = i17 + 1;
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i17 << 1) >> 1] = i13;
      break L1;
     } else {
      HEAP32[i1 >> 2] = i17 + 1;
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i17 | 0] = i13;
      break L1;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKtj(i2, i6, 1);
  } else {
   HEAP16[i8 >> 1] = 34;
   i3 = i2 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) == 0) {
     i23 = 41;
    } else {
     i17 = i2 | 0;
     i1 = HEAP32[i17 >> 2] | 0;
     if (i1 >>> 0 >= (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
      i23 = 41;
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      i23 = 41;
      break;
     }
     i14 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i17 >> 2] = i1 + 1;
     if (i14) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i1 << 1) >> 1] = 34;
      break;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i1 | 0] = 34;
      break;
     }
    }
   } while (0);
   if ((i23 | 0) == 41) {
    __ZN3WTF13StringBuilder6appendEPKtj(i2, i8, 1);
   }
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i24 = 0;
   } else {
    i24 = HEAP32[i4 + 4 >> 2] | 0;
   }
   __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i2, i11, 0, i24, 15);
   HEAP16[i9 >> 1] = 34;
   i4 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i1 = i2 | 0;
     i14 = HEAP32[i1 >> 2] | 0;
     if (i14 >>> 0 >= (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i17 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i1 >> 2] = i14 + 1;
     if (i17) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 34;
      break L1;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i14 | 0] = 34;
      break L1;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKtj(i2, i9, 1);
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i11 = i9 | 0;
 i2 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i11 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore17MarkupAccumulator28serializeNodesWithNamespacesERNS_4NodeEPS1_NS_13EChildrenOnlyEPKN3WTF7HashMapINS5_12AtomicStringEPNS5_16AtomicStringImplENS5_16AtomicStringHashENS5_10HashTraitsIS7_EENSB_IS9_EEEEPNS5_6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i8 = i7 | 0;
 i9 = i7 + 24 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 56 | 0;
 i13 = i7 + 64 | 0;
 i14 = i7 + 72 | 0;
 if ((i2 | 0) == (i3 | 0)) {
  STACKTOP = i7;
  return;
 }
 L4 : do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i6 + 8 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i16 = i6 | 0;
   i17 = i2 + 44 | 0;
   i18 = 0;
   while (1) {
    i19 = HEAP32[i17 >> 2] | 0;
    i20 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    if ((i19 | 0) == (i20 | 0)) {
     i21 = 57;
     break;
    }
    if ((HEAP32[i19 + 12 >> 2] | 0) == (HEAP32[i20 + 12 >> 2] | 0)) {
     if ((HEAP32[i19 + 16 >> 2] | 0) == (HEAP32[i20 + 16 >> 2] | 0)) {
      i21 = 58;
      break;
     }
    }
    i18 = i18 + 1 | 0;
    if (i18 >>> 0 >= i15 >>> 0) {
     break L4;
    }
   }
   if ((i21 | 0) == 57) {
    STACKTOP = i7;
    return;
   } else if ((i21 | 0) == 58) {
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 _memset(i8 | 0, 0, 20) | 0;
 do {
  if ((i5 | 0) == 0) {
   if ((HEAP32[i1 + 40 >> 2] | 0) != 1) {
    break;
   }
   i15 = HEAP32[__ZN3WTF7xmlAtomE >> 2] | 0;
   i18 = i9 | 0;
   HEAP32[i18 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i16 = i15 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   HEAP32[i10 >> 2] = HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2];
   i16 = i8 | 0;
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i11, i16, i9, i10);
   if ((HEAP8[i11 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] = HEAP32[i10 >> 2];
   }
   i15 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i18 = i15 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i18 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i15 = HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0;
   i17 = i12 | 0;
   HEAP32[i17 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i18 = i15 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   HEAP32[i13 >> 2] = HEAP32[__ZN3WTF7xmlAtomE >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i14, i16, i12, i13);
   if ((HEAP8[i14 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] = HEAP32[i13 >> 2];
   }
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   i17 = i18 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    break;
   } else {
    HEAP32[i17 >> 2] = i15;
    break;
   }
  } else {
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_(i8 | 0, i5 | 0) | 0;
  }
 } while (0);
 i5 = (i4 | 0) != 0;
 if (!i5) {
  __ZN7WebCore17MarkupAccumulator14appendStartTagERKNS_4NodeEPN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE(i1, i2, i8);
 }
 i4 = i2 + 12 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
   i21 = 34;
  } else {
   if ((HEAP32[i4 >> 2] & 16 | 0) == 0) {
    i21 = 34;
    break;
   }
   if (!(__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i2) | 0)) {
    i21 = 34;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 34) {
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 & 4 | 0) == 0) {
     i21 = 39;
    } else {
     i14 = HEAP32[i2 + 44 >> 2] | 0;
     i12 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
     if ((i14 | 0) != (i12 | 0)) {
      if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i12 + 12 >> 2] | 0)) {
       i21 = 39;
       break;
      }
      if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i12 + 16 >> 2] | 0)) {
       i21 = 39;
       break;
      }
     }
     i22 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i2) | 0) + 36 | 0;
    }
   } while (0);
   if ((i21 | 0) == 39) {
    if ((i13 & 2 | 0) == 0) {
     break;
    }
    i22 = i2 + 36 | 0;
   }
   i16 = HEAP32[i22 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   } else {
    i23 = i16;
   }
   while (1) {
    __ZN7WebCore17MarkupAccumulator28serializeNodesWithNamespacesERNS_4NodeEPS1_NS_13EChildrenOnlyEPKN3WTF7HashMapINS5_12AtomicStringEPNS5_16AtomicStringImplENS5_16AtomicStringHashENS5_10HashTraitsIS7_EENSB_IS9_EEEEPNS5_6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i23, i3, 0, i8, i6);
    i23 = HEAP32[i23 + 28 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (!i5) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 7](i1, i2);
 }
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i1 | 0) > 0) {
  i8 = 0;
  while (1) {
   i5 = HEAP32[i2 + (i8 << 3) >> 2] | 0;
   i23 = i5;
   do {
    if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
     i6 = i5 | 0;
     i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i6 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i1 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 if (!(HEAP8[H_BASE + 296 | 0] | 0)) {
  i12 = __Znwj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 224;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i7);
  HEAP32[H_BASE + 352 >> 2] = i12;
  HEAP8[H_BASE + 296 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 304 | 0] | 0)) {
  i12 = __Znwj(4) | 0;
  HEAP32[i8 >> 2] = H_BASE + 216;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i8);
  HEAP32[H_BASE + 360 >> 2] = i12;
  HEAP8[H_BASE + 304 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 312 | 0] | 0)) {
  i12 = __Znwj(4) | 0;
  HEAP32[i9 >> 2] = H_BASE + 96;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i9);
  HEAP32[H_BASE + 368 >> 2] = i12;
  HEAP8[H_BASE + 312 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 280 | 0] | 0)) {
  i12 = __Znwj(4) | 0;
  HEAP32[i10 >> 2] = H_BASE + 80;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i10);
  HEAP32[H_BASE + 336 >> 2] = i12;
  HEAP8[H_BASE + 280 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 288 | 0] | 0)) {
  i12 = __Znwj(4) | 0;
  HEAP32[i11 >> 2] = H_BASE + 72;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i11);
  HEAP32[H_BASE + 344 >> 2] = i12;
  HEAP8[H_BASE + 288 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 320 | 0] | 0)) {
  HEAP16[H_BASE + 376 >> 1] = 38;
  HEAP32[H_BASE + 380 >> 2] = HEAP32[H_BASE + 352 >> 2];
  HEAP32[H_BASE + 384 >> 2] = 1;
  HEAP16[H_BASE + 388 >> 1] = 60;
  HEAP32[H_BASE + 392 >> 2] = HEAP32[H_BASE + 360 >> 2];
  HEAP32[H_BASE + 396 >> 2] = 2;
  HEAP16[H_BASE + 400 >> 1] = 62;
  HEAP32[H_BASE + 404 >> 2] = HEAP32[H_BASE + 368 >> 2];
  HEAP32[H_BASE + 408 >> 2] = 4;
  HEAP16[H_BASE + 412 >> 1] = 34;
  HEAP32[H_BASE + 416 >> 2] = HEAP32[H_BASE + 336 >> 2];
  HEAP32[H_BASE + 420 >> 2] = 8;
  HEAP16[H_BASE + 424 >> 1] = 160;
  HEAP32[H_BASE + 428 >> 2] = HEAP32[H_BASE + 344 >> 2];
  HEAP32[H_BASE + 432 >> 2] = 16;
  HEAP8[H_BASE + 320 | 0] = 1;
 }
 if ((i3 | 0) == (-i4 | 0)) {
  STACKTOP = i6;
  return;
 }
 i12 = HEAP32[i2 >> 2] | 0;
 i2 = (i12 | 0) == 0;
 if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
  if (i2) {
   i13 = 0;
  } else {
   i13 = HEAP32[i12 + 8 >> 2] | 0;
  }
  if ((i4 | 0) == 0) {
   i14 = 0;
  } else {
   i11 = 0;
   i10 = 0;
   while (1) {
    i9 = HEAP16[i13 + (i10 + i3 << 1) >> 1] | 0;
    if (i9 << 16 >> 16 == (HEAP16[H_BASE + 376 >> 1] | 0)) {
     if ((HEAP32[H_BASE + 384 >> 2] & i5 | 0) == 0) {
      i15 = 30;
     } else {
      i16 = 0;
      i15 = 29;
     }
    } else {
     i15 = 30;
    }
    do {
     if ((i15 | 0) == 30) {
      i15 = 0;
      if (i9 << 16 >> 16 == (HEAP16[H_BASE + 388 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 396 >> 2] & i5 | 0) != 0) {
        i16 = 1;
        i15 = 29;
        break;
       }
      }
      if (i9 << 16 >> 16 == (HEAP16[H_BASE + 400 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 408 >> 2] & i5 | 0) != 0) {
        i16 = 2;
        i15 = 29;
        break;
       }
      }
      if (i9 << 16 >> 16 == (HEAP16[H_BASE + 412 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 420 >> 2] & i5 | 0) != 0) {
        i16 = 3;
        i15 = 29;
        break;
       }
      }
      if (i9 << 16 >> 16 == (HEAP16[H_BASE + 424 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 432 >> 2] & i5 | 0) != 0) {
        i16 = 4;
        i15 = 29;
        break;
       }
      }
      i17 = i11;
      i18 = i10 + 1 | 0;
     }
    } while (0);
    if ((i15 | 0) == 29) {
     i15 = 0;
     __ZN3WTF13StringBuilder6appendEPKtj(i1, i13 + (i11 + i3 << 1) | 0, i10 - i11 | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, HEAP32[H_BASE + 376 + (i16 * 12 & -1) + 4 >> 2] | 0);
     i9 = i10 + 1 | 0;
     i17 = i9;
     i18 = i9;
    }
    if (i18 >>> 0 < i4 >>> 0) {
     i11 = i17;
     i10 = i18;
    } else {
     i14 = i17;
     break;
    }
   }
  }
  __ZN3WTF13StringBuilder6appendEPKtj(i1, i13 + (i14 + i3 << 1) | 0, i4 - i14 | 0);
  STACKTOP = i6;
  return;
 } else {
  if (i2) {
   i19 = 0;
  } else {
   i19 = HEAP32[i12 + 8 >> 2] | 0;
  }
  if ((i4 | 0) == 0) {
   i20 = 0;
  } else {
   i12 = 0;
   i2 = 0;
   while (1) {
    i14 = HEAPU8[i19 + (i12 + i3) | 0] | 0;
    if ((i14 | 0) == (HEAPU16[H_BASE + 376 >> 1] | 0)) {
     if ((HEAP32[H_BASE + 384 >> 2] & i5 | 0) == 0) {
      i15 = 21;
     } else {
      i21 = 0;
      i15 = 20;
     }
    } else {
     i15 = 21;
    }
    do {
     if ((i15 | 0) == 21) {
      i15 = 0;
      if ((i14 | 0) == (HEAPU16[H_BASE + 388 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 396 >> 2] & i5 | 0) != 0) {
        i21 = 1;
        i15 = 20;
        break;
       }
      }
      if ((i14 | 0) == (HEAPU16[H_BASE + 400 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 408 >> 2] & i5 | 0) != 0) {
        i21 = 2;
        i15 = 20;
        break;
       }
      }
      if ((i14 | 0) == (HEAPU16[H_BASE + 412 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 420 >> 2] & i5 | 0) != 0) {
        i21 = 3;
        i15 = 20;
        break;
       }
      }
      if ((i14 | 0) == (HEAPU16[H_BASE + 424 >> 1] | 0)) {
       if ((HEAP32[H_BASE + 432 >> 2] & i5 | 0) != 0) {
        i21 = 4;
        i15 = 20;
        break;
       }
      }
      i22 = i2;
      i23 = i12 + 1 | 0;
     }
    } while (0);
    if ((i15 | 0) == 20) {
     i15 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i1, i19 + (i2 + i3) | 0, i12 - i2 | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, HEAP32[H_BASE + 376 + (i21 * 12 & -1) + 4 >> 2] | 0);
     i14 = i12 + 1 | 0;
     i22 = i14;
     i23 = i14;
    }
    if (i23 >>> 0 < i4 >>> 0) {
     i12 = i23;
     i2 = i22;
    } else {
     i20 = i22;
     break;
    }
   }
  }
  __ZN3WTF13StringBuilder6appendEPKhj(i1, i19 + (i20 + i3) | 0, i4 - i20 | 0);
  STACKTOP = i6;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_6StringENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17MarkupAccumulator20generateUniquePrefixERNS_13QualifiedNameERKN3WTF7HashMapINS3_12AtomicStringEPNS3_16AtomicStringImplENS3_16AtomicStringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 32 | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i6 + 12 | 0;
 HEAP8[i11] = 1;
 i12 = i6 + 16 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i6 + 20 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i1 + 44 | 0;
 i1 = i7 | 0;
 i15 = i3 + 8 | 0;
 i16 = i3 | 0;
 i3 = 0;
 while (1) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  do {
   if ((i3 | 0) != 0) {
    i17 = i3 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i18 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i3);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i18 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  do {
   if ((i18 | 0) != 0) {
    i17 = i18 | 0;
    i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
    if ((i19 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i17 >> 2] = i19;
     break;
    }
   }
  } while (0);
  HEAP32[i13 >> 2] = 0;
  HEAP8[i11] = 1;
  HEAP32[i12 >> 2] = 0;
  __ZN3WTF13StringBuilder6appendEPKhj(i6, H_BASE + 136 | 0, 2);
  i18 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
  HEAP32[i14 >> 2] = i18;
  __ZN3WTF13StringBuilder12appendNumberEj(i6, i18);
  __ZNK3WTF13StringBuilder14toAtomicStringEv(i7, i6);
  i18 = HEAP32[i1 >> 2] | 0;
  i19 = (i18 | 0) == 0;
  if (!i19) {
   i17 = i18 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
  }
  i17 = HEAP32[i15 >> 2] | 0;
  i20 = HEAP32[i16 >> 2] | 0;
  i21 = HEAP32[i18 + 16 >> 2] | 0;
  i22 = i21 >>> 7;
  L18 : do {
   if ((i20 | 0) == 0) {
    i23 = 1;
   } else {
    i24 = (i21 >>> 30) + ~i22 | 0;
    i25 = i24 << 12 ^ i24;
    i24 = i25 >>> 7 ^ i25;
    i25 = i24 << 2 ^ i24;
    i24 = i25 >>> 20 ^ i25 | 1;
    i25 = i22;
    i26 = 0;
    while (1) {
     i27 = i25 & i17;
     i28 = i20 + (i27 << 3) | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     i30 = i29;
     if ((i30 | 0) == 0) {
      i23 = 1;
      break L18;
     } else if ((i30 | 0) != (-1 | 0)) {
      if ((i29 | 0) == (i18 | 0)) {
       break;
      }
     }
     i29 = (i26 | 0) == 0 ? i24 : i26;
     i25 = i29 + i27 | 0;
     i26 = i29;
    }
    if ((i28 | 0) == 0) {
     i23 = 1;
     break;
    }
    i23 = (HEAP32[i20 + (i27 << 3) + 4 >> 2] | 0) == 0;
   }
  } while (0);
  do {
   if (!i19) {
    i20 = i18 | 0;
    i17 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i20 >> 2] = i17;
     break;
    }
   }
  } while (0);
  if (i23) {
   break;
  }
  i18 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i18 | 0) != 0) {
    i19 = i18 | 0;
    i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
    if ((i17 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i18);
     break;
    } else {
     HEAP32[i19 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i9 >> 2] | 0;
 }
 i3 = i2 | 0;
 i23 = HEAP32[i3 >> 2] | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, i7, i23 + 12 | 0, i23 + 16 | 0);
 i23 = i5 | 0;
 i7 = HEAP32[i23 >> 2] | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i2);
 HEAP32[i3 >> 2] = HEAP32[i23 >> 2];
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 i5 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i23 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 | 0;
   i23 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i23 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i10 >> 2] = i23;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i5 | 0;
 i23 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i23 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i23;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore17MarkupAccumulator27shouldAddNamespaceAttributeERKNS_9AttributeERN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = i1 + 32 | 0;
 i8 = i1 + 40 | 0;
 i9 = i1 + 48 | 0;
 i10 = i1 + 56 | 0;
 i11 = i1 + 72 | 0;
 i12 = i1 + 80 | 0;
 i13 = i1 + 88 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[__ZN3WTF9xmlnsAtomE >> 2] | 0)) {
   i16 = HEAP32[i15 + 16 >> 2] | 0;
   if ((i16 | 0) != 0) {
    if (!((HEAP32[i16 + 4 >> 2] | 0) == 0 | (i16 | 0) == (HEAP32[__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE >> 2] | 0))) {
     break;
    }
   }
   i16 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
   i17 = i4 | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i18 = i16 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   }
   HEAP32[i5 >> 2] = HEAP32[i2 + 4 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i6, i3 | 0, i4, i5);
   if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i5 >> 2];
   }
   i18 = HEAP32[i17 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i19 = 0;
    STACKTOP = i1;
    return i19 | 0;
   }
   i17 = i18 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i18);
    i19 = 0;
    STACKTOP = i1;
    return i19 | 0;
   } else {
    HEAP32[i17 >> 2] = i16;
    i19 = 0;
    STACKTOP = i1;
    return i19 | 0;
   }
  }
 } while (0);
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i7, __ZN3WTF9xmlnsAtomE, i15 + 12 | 0, __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE);
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) == (HEAP32[i7 >> 2] | 0)) {
   i5 = HEAP32[i15 + 12 >> 2] | 0;
   i6 = i8 | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
   }
   i4 = i2 + 4 | 0;
   HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
   i5 = i3 | 0;
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i10, i5, i8, i9);
   if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = HEAP32[i9 >> 2];
   }
   i16 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i6 = i16 | 0;
     i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i6 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = i16;
   if ((i16 | 0) != 0) {
    i6 = i16 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   }
   HEAP32[i12 >> 2] = HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2];
   __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i13, i5, i11, i12);
   if ((HEAP8[i13 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] = HEAP32[i12 >> 2];
   }
   i6 = HEAP32[i17 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i20 = 0;
    break;
   }
   i17 = i6 | 0;
   i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i20 = 0;
    break;
   } else {
    HEAP32[i17 >> 2] = i16;
    i20 = 0;
    break;
   }
  } else {
   i20 = 1;
  }
 } while (0);
 __ZN7WebCore13QualifiedNameD1Ev(i7);
 i19 = i20;
 STACKTOP = i1;
 return i19 | 0;
}
function __ZN7WebCore17MarkupAccumulator25shouldAddNamespaceElementERKNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 i5 = i1 + 16 | 0;
 i6 = i1 + 24 | 0;
 i7 = i1 + 32 | 0;
 i8 = (HEAP32[i2 + 44 >> 2] | 0) + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (HEAP8[H_BASE + 328 | 0] | 0) {
    i10 = i9;
    i11 = HEAP32[H_BASE + 440 >> 2] | 0;
   } else {
    i12 = __Znwj(4) | 0;
    HEAP32[i5 >> 2] = H_BASE + 64;
    __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i5);
    HEAP32[H_BASE + 440 >> 2] = i12;
    HEAP8[H_BASE + 328 | 0] = 1;
    i10 = HEAP32[i8 >> 2] | 0;
    i11 = i12;
   }
   i12 = (i10 | 0) == 0;
   if (!i12) {
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   i14 = (i13 | 0) == 0;
   if (!i14) {
    i15 = i13 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   if (!i12) {
    i15 = i10 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 2;
   }
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = i13;
   if (!i14) {
    i16 = i13 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   }
   i16 = i7 + 4 | 0;
   HEAP32[i16 >> 2] = i10;
   do {
    if (!i12) {
     i17 = i10 | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i18 + 2;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      break;
     }
    }
   } while (0);
   do {
    if (!i14) {
     i18 = i13 | 0;
     i17 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i18 >> 2] = i17;
      break;
     }
    }
   } while (0);
   __ZNK3WTF12StringAppendINS_6StringENS_12AtomicStringEEcvS1_Ev(i4, i7);
   i13 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i13 | 0) == 0) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
    } else {
     if ((HEAP32[i13 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i13);
      HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
      i19 = i13 | 0;
     } else {
      i14 = i3 | 0;
      HEAP32[i14 >> 2] = i13;
      i17 = i13 | 0;
      HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
      HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
      i19 = i17;
     }
     i17 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i19 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i13 = __ZNK7WebCore7Element12hasAttributeERKN3WTF12AtomicStringE(i2, i6) | 0;
   i17 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i14 = i17 | 0;
     i18 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i14 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i16 = i17 | 0;
     i14 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i16 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if (i12) {
    i20 = i13;
    i21 = i20 ^ 1;
    STACKTOP = i1;
    return i21 | 0;
   }
   i17 = i10 | 0;
   i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i20 = i13;
    i21 = i20 ^ 1;
    STACKTOP = i1;
    return i21 | 0;
   } else {
    HEAP32[i17 >> 2] = i15;
    i20 = i13;
    i21 = i20 ^ 1;
    STACKTOP = i1;
    return i21 | 0;
   }
  }
 } while (0);
 i20 = __ZNK7WebCore7Element12hasAttributeERKN3WTF12AtomicStringE(i2, __ZN3WTF9xmlnsAtomE) | 0;
 i21 = i20 ^ 1;
 STACKTOP = i1;
 return i21 | 0;
}
function __ZN7WebCore17MarkupAccumulator27appendProcessingInstructionERN3WTF13StringBuilderERKNS1_6StringES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = i1 + 16 | 0;
 i8 = i1 + 24 | 0;
 i9 = i1 + 32 | 0;
 HEAP8[i9] = 60;
 i10 = i2 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = 7;
  } else {
   i13 = i2 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if (i14 >>> 0 >= (HEAP32[i11 + 4 >> 2] | 0) >>> 0) {
    i12 = 7;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i12 = 7;
    break;
   }
   i15 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i13 >> 2] = i14 + 1;
   if (i15) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 60;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i14 | 0] = 60;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i9, 1);
 }
 HEAP8[i8] = 63;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i12 = 14;
  } else {
   i11 = i2 | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   if (i14 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
    i12 = 14;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i12 = 14;
    break;
   }
   i15 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i11 >> 2] = i14 + 1;
   if (i15) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 63;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i14 | 0] = 63;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 14) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i8, 1);
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i3);
 HEAP8[i7] = 32;
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i12 = 21;
  } else {
   i8 = i2 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i9 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
    i12 = 21;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i12 = 21;
    break;
   }
   i14 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i8 >> 2] = i9 + 1;
   if (i14) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i9 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i9 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 21) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i4);
 HEAP8[i6] = 63;
 i4 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i12 = 28;
  } else {
   i7 = i2 | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   if (i3 >>> 0 >= (HEAP32[i4 + 4 >> 2] | 0) >>> 0) {
    i12 = 28;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i12 = 28;
    break;
   }
   i9 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i7 >> 2] = i3 + 1;
   if (i9) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i3 << 1) >> 1] = 63;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i3 | 0] = 63;
    break;
   }
  }
 } while (0);
 if ((i12 | 0) == 28) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
 }
 HEAP8[i5] = 62;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i2 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   i4 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i10 >> 2] = i12 + 1;
   if (i4) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i12 << 1) >> 1] = 62;
    STACKTOP = i1;
    return;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i12 | 0] = 62;
    STACKTOP = i1;
    return;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, i5, 1);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore17MarkupAccumulator15appendEndMarkupERN3WTF13StringBuilderERKNS_4NodeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i3 + 12 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 4 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 40 >> 2] | 0) == 1) {
  i11 = 4;
 } else {
  if ((HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
   i11 = 4;
  } else {
   i12 = i10;
  }
 }
 do {
  if ((i11 | 0) == 4) {
   if ((i10 & 2 | 0) != 0) {
    if ((HEAP32[i3 + 36 >> 2] | 0) != 0) {
     i12 = i10;
     break;
    }
   }
   if ((i10 & 16 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if (__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i3) | 0) {
    STACKTOP = i4;
    return;
   } else {
    i12 = HEAP32[i9 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i12 & 2 | 0) == 0) {
  i11 = 11;
 } else {
  if ((HEAP32[i3 + 36 >> 2] | 0) == 0) {
   i11 = 11;
  }
 }
 do {
  if ((i11 | 0) == 11) {
   if ((i12 & 16 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i3) | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP8[i6] = 60;
 i12 = i2 + 8 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i11 = 19;
  } else {
   i10 = i2 | 0;
   i1 = HEAP32[i10 >> 2] | 0;
   if (i1 >>> 0 >= (HEAP32[i9 + 4 >> 2] | 0) >>> 0) {
    i11 = 19;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i11 = 19;
    break;
   }
   i13 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i10 >> 2] = i1 + 1;
   if (i13) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i1 << 1) >> 1] = 60;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i1 | 0] = 60;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 19) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
 }
 HEAP8[i5] = 47;
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i11 = 26;
  } else {
   i9 = i2 | 0;
   i1 = HEAP32[i9 >> 2] | 0;
   if (i1 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
    i11 = 26;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i11 = 26;
    break;
   }
   i13 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i9 >> 2] = i1 + 1;
   if (i13) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i1 << 1) >> 1] = 47;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i1 | 0] = 47;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 26) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i5, 1);
 }
 __ZNK7WebCore7Element22nodeNamePreservingCaseEv(i8, i3);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i8);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAP8[i7] = 62;
 i3 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i12 = i2 | 0;
   i5 = HEAP32[i12 >> 2] | 0;
   if (i5 >>> 0 >= (HEAP32[i3 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   i8 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i12 >> 2] = i5 + 1;
   if (i8) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i5 << 1) >> 1] = 62;
    STACKTOP = i4;
    return;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i5 | 0] = 62;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 i9 = i3 >>> 7;
 i7 = (i3 >>> 30) + ~i9 | 0;
 i3 = i7 << 12 ^ i7;
 i7 = i3 >>> 7 ^ i3;
 i3 = i7 << 2 ^ i7;
 i7 = i3 >>> 20 ^ i3 | 1;
 i3 = 0;
 i11 = i9;
 i9 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if ((i14 | 0) == (i8 | 0)) {
    i17 = 8;
    break;
   } else {
    i16 = i3;
   }
  }
  i14 = (i9 | 0) == 0 ? i7 : i9;
  i3 = i16;
  i11 = i14 + i12 | 0;
  i9 = i14;
 }
 if ((i17 | 0) == 8) {
  i17 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i3 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i3;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i3;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i13 = i3 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
 }
 i13 = i18 | 0;
 i17 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i3;
 do {
  if ((i17 | 0) != 0) {
   i3 = i17 | 0;
   i13 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i3 >> 2] = i13;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i2 + 12 | 0;
 i17 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i17;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i17 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i21 = 8;
  } else {
   i3 = i13 << 1;
   i21 = (i17 * 6 & -1 | 0) < (i3 | 0) ? i13 : i3;
  }
  i3 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i21, i18) | 0;
  i19 = i3;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i7 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else if ((i16 | 0) == 0) {
   break;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i7 | 0) == 0 ? i11 : i7;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i3;
 } else {
  i3 = i9;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = 0;
 i8 = i19 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 do {
  if ((i9 | 0) != 0) {
   i20 = i9 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i20 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i8 | 0)) {
  i21 = i19;
  i22 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i23 = 8;
  } else {
   i20 = i8 << 1;
   i23 = (i9 * 6 & -1 | 0) < (i20 | 0) ? i8 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i23, i19) | 0;
  i21 = i20;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
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
  __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 i7 = i9 >>> 7;
 i11 = (i9 >>> 30) + ~i7 | 0;
 i9 = i11 << 12 ^ i11;
 i11 = i9 >>> 7 ^ i9;
 i9 = i11 << 2 ^ i11;
 i11 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((i15 | 0) == (i3 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i9;
   }
  }
  i15 = (i7 | 0) == 0 ? i11 : i7;
  i9 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i19 = i14;
  i20 = i3;
 } else {
  i3 = i9;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  i3 = i2 + 16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - 1;
  i19 = i9;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i8 >> 2] = 0;
 i8 = i19 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i20;
 do {
  if ((i9 | 0) != 0) {
   i20 = i9 | 0;
   i8 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i20 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i19 + 4 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i8 | 0)) {
  i21 = i19;
  i22 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i23 = 8;
  } else {
   i20 = i8 << 1;
   i23 = (i9 * 6 & -1 | 0) < (i20 | 0) ? i8 : i20;
  }
  i20 = __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i2, i23, i19) | 0;
  i21 = i20;
  i22 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i22 << 3) | 0;
 i22 = i1;
 HEAP32[i22 >> 2] = i21;
 HEAP32[i22 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17MarkupAccumulator13appendOpenTagERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 HEAP8[i7] = 60;
 i9 = i2 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 7;
  } else {
   i12 = i2 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i10 + 4 >> 2] | 0) >>> 0) {
    i11 = 7;
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    i11 = 7;
    break;
   }
   i14 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i12 >> 2] = i13 + 1;
   if (i14) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 60;
    break;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i13 | 0] = 60;
    break;
   }
  }
 } while (0);
 if ((i11 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
 }
 i7 = i1 + 40 | 0;
 i11 = (i4 | 0) == 0;
 L11 : do {
  if (!((HEAP32[i7 >> 2] | 0) != 1 | i11)) {
   i10 = HEAP32[i3 + 44 >> 2] | 0;
   i13 = HEAP32[i10 + 8 >> 2] | 0;
   if ((i13 | 0) != 0) {
    if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((HEAP32[i10 + 16 >> 2] | 0) != (HEAP32[__ZN7WebCore8XMLNames15xmlNamespaceURIE >> 2] | 0)) {
    break;
   }
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, __ZN3WTF7xmlAtomE | 0);
   HEAP8[i6] = 58;
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i13 = i2 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if (i14 >>> 0 >= (HEAP32[i10 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i12 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i13 >> 2] = i14 + 1;
     if (i12) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 58;
      break L11;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i14 | 0] = 58;
      break L11;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
  }
 } while (0);
 __ZNK7WebCore7Element22nodeNamePreservingCaseEv(i8, i3);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i8);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i8 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i7 >> 2] | 0) == 1) {
   if (!i11) {
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   if (!((HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) != 0 | i11)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if (!(__ZN7WebCore17MarkupAccumulator25shouldAddNamespaceElementERKNS_7ElementE(0, i3) | 0)) {
  STACKTOP = i5;
  return;
 }
 i11 = HEAP32[i3 + 44 >> 2] | 0;
 __ZN7WebCore17MarkupAccumulator15appendNamespaceERN3WTF13StringBuilderERKNS1_12AtomicStringES6_RNS1_7HashMapIS4_PNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS4_EENSB_IS9_EEEEb(i1, i2, i11 + 8 | 0, i11 + 16 | 0, i4, (HEAP32[i7 >> 2] | 0) == 1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17MarkupAccumulator17appendStartMarkupERN3WTF13StringBuilderERKNS_4NodeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 switch (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 76 >> 2] & 1](i3) | 0) {
 case 7:
  {
   i9 = i7 | 0;
   i10 = HEAP32[i3 + 36 >> 2] | 0;
   HEAP32[i9 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   __ZN7WebCore17MarkupAccumulator27appendProcessingInstructionERN3WTF13StringBuilderERKNS1_6StringES6_(0, i2, i3 + 44 | 0, i7);
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i9 = i7 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i9 >> 2] = i11;
    STACKTOP = i5;
    return;
   }
   break;
  }
 case 9:
  {
   __ZN7WebCore17MarkupAccumulator20appendXMLDeclarationERN3WTF13StringBuilderERKNS_8DocumentE(0, i2, i3);
   STACKTOP = i5;
   return;
  }
 case 10:
  {
   __ZN7WebCore17MarkupAccumulator18appendDocumentTypeERN3WTF13StringBuilderERKNS_12DocumentTypeE(0, i2, i3);
   STACKTOP = i5;
   return;
  }
 case 4:
  {
   i11 = i8 | 0;
   i9 = HEAP32[i3 + 36 >> 2] | 0;
   HEAP32[i11 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 120 | 0, 9);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i8);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 112 | 0, 3);
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i11 = i8 | 0;
   i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i11 >> 2] = i7;
    STACKTOP = i5;
    return;
   }
   break;
  }
 case 1:
  {
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 7](i1, i2, i3, i4);
   STACKTOP = i5;
   return;
  }
 case 3:
  {
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 3](i1, i2, i3);
   STACKTOP = i5;
   return;
  }
 case 8:
  {
   i1 = i6 | 0;
   i4 = HEAP32[i3 + 36 >> 2] | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i3 = i4 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 104 | 0, 4);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i6);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 88 | 0, 3);
   i2 = HEAP32[i1 >> 2] | 0;
   if ((i2 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i1 >> 2] = i6;
    STACKTOP = i5;
    return;
   }
   break;
  }
 default:
  {
   STACKTOP = i5;
   return;
  }
 }
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_(i1, i2, i3) {
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
   i18 = i17 >>> 7;
   i19 = (i17 >>> 30) + ~i18 | 0;
   i17 = i19 << 12 ^ i19;
   i19 = i17 >>> 7 ^ i17;
   i17 = i19 << 2 ^ i19;
   i19 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i18 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == (-1 | 0)) {
     i25 = i22;
    } else if ((i24 | 0) == 0) {
     i26 = 6;
     break;
    } else {
     if ((i23 | 0) == (i13 | 0)) {
      i27 = i22;
      i28 = i13;
      break;
     } else {
      i25 = i20;
     }
    }
    i23 = (i18 | 0) == 0 ? i19 : i18;
    i17 = i23 + i21 | 0;
    i18 = i23;
    i20 = i25;
   }
   if ((i26 | 0) == 6) {
    i26 = 0;
    i18 = (i20 | 0) != 0 ? i20 : i22;
    i27 = i18;
    i28 = HEAP32[i18 >> 2] | 0;
   }
   i18 = i27 | 0;
   do {
    if ((i28 | 0) != 0) {
     i17 = i28 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i28);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i18 >> 2] = i20;
   HEAP32[i27 + 4 >> 2] = HEAP32[i7 + (i10 << 3) + 4 >> 2];
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
  i29 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i29 << 3) >> 2] | 0;
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
  i1 = i29 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i29 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_(i1, i2) {
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
    __ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_(i4, i5, i12 | 0, i12);
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
   i8 = HEAP32[i12 + (i4 << 3) >> 2] | 0;
   i9 = i8;
   do {
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i5 = i8 | 0;
     i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i5 >> 2] = i6;
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
function __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 | 0;
 if ((HEAP32[i1 + 40 >> 2] | 0) == 1) {
  i9 = 3;
 } else {
  if ((HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
   i9 = 3;
  }
 }
 L3 : do {
  if ((i9 | 0) == 3) {
   i1 = i3 + 12 | 0;
   i10 = HEAP32[i1 >> 2] | 0;
   if ((i10 & 2 | 0) != 0) {
    if ((HEAP32[i8 + 36 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((i10 & 16 | 0) == 0) {
    i11 = i10;
   } else {
    if (!(__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i3) | 0)) {
     break;
    }
    i11 = HEAP32[i1 >> 2] | 0;
   }
   L12 : do {
    if ((i11 & 16 | 0) == 0) {
     i12 = i2 + 8 | 0;
    } else {
     HEAP8[i6] = 32;
     i1 = i2 + 8 | 0;
     i10 = HEAP32[i1 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i13 = i2 | 0;
       i14 = HEAP32[i13 >> 2] | 0;
       if (i14 >>> 0 >= (HEAP32[i10 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
        break;
       }
       i15 = (HEAP8[i2 + 12 | 0] & 1) == 0;
       HEAP32[i13 >> 2] = i14 + 1;
       if (i15) {
        HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i14 << 1) >> 1] = 32;
        i12 = i1;
        break L12;
       } else {
        HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i14 | 0] = 32;
        i12 = i1;
        break L12;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i2, i6, 1);
     i12 = i1;
    }
   } while (0);
   HEAP8[i5] = 47;
   i10 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i14 = i2 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if (i15 >>> 0 >= (HEAP32[i10 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
      break;
     }
     i13 = (HEAP8[i2 + 12 | 0] & 1) == 0;
     HEAP32[i14 >> 2] = i15 + 1;
     if (i13) {
      HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i15 << 1) >> 1] = 47;
      break L3;
     } else {
      HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i15 | 0] = 47;
      break L3;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i2, i5, 1);
  }
 } while (0);
 HEAP8[i7] = 62;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i12 = i2 | 0;
   i6 = HEAP32[i12 >> 2] | 0;
   if (i6 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   i11 = (HEAP8[i2 + 12 | 0] & 1) == 0;
   HEAP32[i12 >> 2] = i6 + 1;
   if (i11) {
    HEAP16[(HEAP32[i2 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 62;
    STACKTOP = i4;
    return;
   } else {
    HEAP8[(HEAP32[i2 + 20 >> 2] | 0) + i6 | 0] = 62;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, i7, 1);
 STACKTOP = i4;
 return;
}
function __ZNK3WTF13StringBuilder14toAtomicStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
  HEAP32[i1 >> 2] = i9;
  if ((i9 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK3WTF13StringBuilder9canShrinkEv(i2) | 0)) {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF12AtomicString3addEPNS_10StringImplEjj(i7, HEAP32[i2 + 8 >> 2] | 0, 0, HEAP32[i8 >> 2] | 0);
   HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
   STACKTOP = i3;
   return;
  }
  if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
   __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i10);
   i11 = i6 | 0;
  } else {
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i10;
   i6 = i10 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i11 = i7;
  }
  HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
  STACKTOP = i3;
  return;
 }
 i11 = HEAP32[i8 >> 2] | 0;
 i8 = (i11 | 0) == 0;
 if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
  do {
   if (i8) {
    i12 = 0;
   } else {
    i7 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i12 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i12 = HEAP32[i7 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKtj(i5, i12, i11);
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  STACKTOP = i3;
  return;
 } else {
  do {
   if (i8) {
    i13 = 0;
   } else {
    i5 = HEAP32[i2 + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i13 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0;
     break;
    } else {
     i13 = HEAP32[i5 + 8 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZN3WTF12AtomicString3addEPKhj(i4, i13, i11);
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17MarkupAccumulator18resolveURLIfNeededERKNS_7ElementERKN3WTF6StringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 if ((i8 | 0) == 1) {
  __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i6, HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
  i2 = i6 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i1 >> 2] = i6;
  if ((i6 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i9 = i6 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
  i9 = HEAP32[i2 >> 2] | 0;
  if ((i9 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i2 = i9 | 0;
  i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
  if ((i6 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i9);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i2 >> 2] = i6;
   STACKTOP = i5;
   return;
  }
 } else if ((i8 | 0) == 2) {
  i10 = 7;
 }
 do {
  if ((i10 | 0) == 7) {
   i8 = i3 + 20 | 0;
   if (__ZNK7WebCore3URL11isLocalFileEv((HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) + 356 | 0) | 0) {
    break;
   }
   __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i7, HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0, i4);
   i8 = i7 | 0;
   i6 = HEAP32[i8 >> 2] | 0;
   HEAP32[i1 >> 2] = i6;
   if ((i6 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
   i2 = HEAP32[i8 >> 2] | 0;
   if ((i2 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i8 = i2 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i8 >> 2] = i6;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore17MarkupAccumulator20appendXMLDeclarationERN3WTF13StringBuilderERKNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i3 + 1300 | 0;
 if ((HEAP32[i6 >> 2] & 4 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 40 | 0, 15);
 i7 = i4 | 0;
 i8 = HEAP32[i3 + 1296 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i4);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = i5 | 0;
 i9 = HEAP32[i3 + 1292 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 24 | 0, 12);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i5);
  }
 } while (0);
 do {
  if ((HEAP32[i6 >> 2] & 3 | 0) != 0) {
   __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 8 | 0, 14);
   if ((HEAP32[i6 >> 2] & 3 | 0) == 1) {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 208 | 0, 3);
    break;
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 200 | 0, 2);
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 192 | 0, 3);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i4 = i2 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore17MarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 __ZN7WebCore17MarkupAccumulator13appendOpenTagERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4);
 L1 : do {
  if (__ZNK7WebCore7Element13hasAttributesEv(i3) | 0) {
   i5 = i3 + 48 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i7 & 1 | 0) == 0) {
    i8 = i7 >>> 1 & 134217727;
   } else {
    i8 = HEAP32[i6 + 32 >> 2] | 0;
   }
   if ((i8 | 0) == 0) {
    break;
   } else {
    i9 = 0;
    i10 = i6;
    i11 = i7;
   }
   while (1) {
    i7 = (i11 & 1 | 0) == 0;
    if (i7) {
     i12 = i11 >>> 1 & 134217727;
    } else {
     i12 = HEAP32[i10 + 32 >> 2] | 0;
    }
    if (i12 >>> 0 <= i9 >>> 0) {
     break;
    }
    if (i7) {
     i13 = i10 + 20 | 0;
    } else {
     i13 = HEAP32[i10 + 24 >> 2] | 0;
    }
    __ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE(i1, i2, i3, i13 + (i9 << 3) | 0, i4);
    i7 = i9 + 1 | 0;
    if (i7 >>> 0 >= i8 >>> 0) {
     break L1;
    }
    i6 = HEAP32[i5 >> 2] | 0;
    i9 = i7;
    i10 = i6;
    i11 = HEAP32[i6 + 4 >> 2] | 0;
   }
   _WTFCrash();
  }
 } while (0);
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 7](i1, i2, i3, i4);
 __ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE(i1, i2, i3);
 return;
}
function __ZN7WebCore17MarkupAccumulator15appendNodeValueERN3WTF13StringBuilderERKNS_4NodeEPKNS_5RangeENS_10EntityMaskE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 7](i6, i3);
 i7 = i6 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = HEAP32[i8 + 4 >> 2] | 0;
 }
 do {
  if ((i4 | 0) == 0) {
   i10 = 0;
   i11 = i9;
  } else {
   do {
    if ((HEAP32[i4 + 20 >> 2] | 0) == (i3 | 0)) {
     i8 = i4 + 24 | 0;
     i12 = HEAP32[i8 >> 2] | 0;
     if ((i12 | 0) > -1) {
      i13 = i12;
      break;
     }
     i12 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 28 >> 2] | 0) | 0) + 1 | 0;
     HEAP32[i8 >> 2] = i12;
     i13 = i12;
    } else {
     i13 = i9;
    }
   } while (0);
   if ((HEAP32[i4 + 8 >> 2] | 0) != (i3 | 0)) {
    i10 = 0;
    i11 = i13;
    break;
   }
   i12 = i4 + 12 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   if ((i8 | 0) > -1) {
    i14 = i8;
   } else {
    i8 = (__ZNK7WebCore4Node9nodeIndexEv(HEAP32[i4 + 16 >> 2] | 0) | 0) + 1 | 0;
    HEAP32[i12 >> 2] = i8;
    i14 = i8;
   }
   i10 = i14;
   i11 = i13 - i14 | 0;
  }
 } while (0);
 __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i2, i6, i10, i11, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i7 = i5 | 0;
 i11 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i1;
  return;
 } else {
  HEAP32[i7 >> 2] = i11;
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore17MarkupAccumulator14appendStartTagERKNS_4NodeEPN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore17MarkupAccumulator17appendStartMarkupERN3WTF13StringBuilderERKNS_4NodeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i1 + 12 | 0, i2, i3);
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i5 >> 2] = i2;
 i1 = i3 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  HEAP32[(HEAP32[i3 >> 2] | 0) + (i6 << 2) >> 2] = i2;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i2 = i6 + 1 | 0;
 i7 = i3 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if (i8 >>> 0 > i5 >>> 0) {
   i9 = 6;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i5 >>> 0) {
    i9 = 6;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
   i10 = HEAP32[i7 >> 2] | 0;
   i11 = i10 + (i5 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 6) {
  __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i2);
  i11 = i5;
  i12 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i12 + (HEAP32[i1 >> 2] << 2) >> 2] = HEAP32[i11 >> 2];
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringENS_12AtomicStringEEcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF13StringBuilder6appendERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i6;
   do {
    if ((i8 | 0) != 0) {
     i6 = i8 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
   return;
  }
 } while (0);
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = (i3 | 0) == 0;
 if ((HEAP8[i2 + 12 | 0] & 1) == 0) {
  if (i5) {
   i9 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i9 = i3;
  }
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i9 + 8 >> 2] | 0, i4);
  return;
 } else {
  if (i5) {
   i10 = HEAP32[i2 + 8 >> 2] | 0;
  } else {
   i10 = i3;
  }
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i10 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
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
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 L1 : do {
  if ((HEAP8[(HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
   i6 = 7;
  } else {
   i1 = HEAP32[i3 + 16 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i7 = i1 + 44 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     i8 = HEAP32[i7 >> 2] | 0;
     if ((i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) | (i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) | (i8 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0)) {
      i6 = 0;
      break L1;
     }
    }
   } while (0);
   i6 = 23;
  }
 } while (0);
 __ZN7WebCore17MarkupAccumulator15appendNodeValueERN3WTF13StringBuilderERKNS_4NodeEPKNS_5RangeENS_10EntityMaskE(0, i2, i4, i5, i6);
 return;
}
function __ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0;
 __ZN7WebCore17MarkupAccumulator28serializeNodesWithNamespacesERNS_4NodeEPS1_NS_13EChildrenOnlyEPKN3WTF7HashMapINS5_12AtomicStringEPNS5_16AtomicStringImplENS5_16AtomicStringHashENS5_10HashTraitsIS7_EENSB_IS9_EEEEPNS5_6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE(i2, i3, i4, i5, 0, i6);
 i6 = i2 + 12 | 0;
 __ZN3WTF13StringBuilder11shrinkToFitEv(i6);
 i5 = i2 + 16 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i6);
   i4 = HEAP32[i5 >> 2] | 0;
   HEAP32[i1 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i7 = i4;
    break;
   }
   return;
  } else {
   HEAP32[i1 >> 2] = i2;
   i7 = i2;
  }
 } while (0);
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 return;
}
function __ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore17MarkupAccumulator17entityMaskForTextERKNS_4TextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
  i3 = 7;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i2 = i1 + 44 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i2 >> 2] | 0;
   if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0) | (i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0) | (i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames6xmpTagE >> 2] | 0)) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 23;
 return i3 | 0;
}
function __ZN7WebCore17MarkupAccumulator15shouldSelfCloseERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((HEAP32[i1 + 40 >> 2] | 0) != 1) {
   if ((HEAP8[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1576 | 0] & 1) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i1 & 2 | 0) != 0) {
   if ((HEAP32[i2 + 36 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 do {
  if ((i1 & 16 | 0) != 0) {
   if (__ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i2) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore17MarkupAccumulatorD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZdlPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = i1;
  __ZdlPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZdlPv(i5);
  return;
 }
}
function __ZN7WebCore17MarkupAccumulatorD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZN7WebCore17MarkupAccumulatorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZN7WebCore17MarkupAccumulator11totalLengthERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = 0;
 i5 = 0;
 while (1) {
  i6 = HEAP32[i4 + (i5 << 2) >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   i7 = HEAP32[i6 + 4 >> 2] | 0;
  }
  i6 = i7 + i1 | 0;
  i8 = i5 + 1 | 0;
  if (i8 >>> 0 < i2 >>> 0) {
   i1 = i6;
   i5 = i8;
  } else {
   i3 = i6;
   break;
  }
 }
 return i3 | 0;
}
function __ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i4;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 1;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = 0;
 return;
}
function __ZN7WebCore17MarkupAccumulatorC1EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = H_BASE + 240;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i4;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 HEAP8[i1 + 24 | 0] = 1;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = i3;
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = 0;
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
function __ZN7WebCore17MarkupAccumulator20appendAttributeValueERN3WTF13StringBuilderERKNS1_6StringEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
 }
 __ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE(i2, i3, 0, i5, i4 ? 31 : 15);
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
function __ZN7WebCore17MarkupAccumulator18appendCDATASectionERN3WTF13StringBuilderERKNS1_6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 120 | 0, 9);
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i2, i3);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, H_BASE + 112 | 0, 3);
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_viiii + 2;
}
function __ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore17MarkupAccumulator23elementCannotHaveEndTagERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11HTMLElement19ieForbidsInsertHTMLEv(i2) | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore17MarkupAccumulator15appendEndMarkupERN3WTF13StringBuilderERKNS_4NodeE(i1, i1 + 12 | 0, i2);
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
function __ZN7WebCore17MarkupAccumulator17concatenateMarkupERN3WTF13StringBuilderE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF13StringBuilder6appendERKS0_(i2, i1 + 12 | 0);
 return;
}
function __ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1 + 12 | 0, i2);
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
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore17MarkupAccumulatorD0Ev,b1,__ZN7WebCore17MarkupAccumulatorD2Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE,b2,__ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZN7WebCore17MarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE,b7,__ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE": __ZN7WebCore10XMLNSNames17xmlnsNamespaceURIE, "__ZN7WebCore8XMLNames15xmlNamespaceURIE": __ZN7WebCore8XMLNames15xmlNamespaceURIE, "__ZN3WTF7xmlAtomE": __ZN3WTF7xmlAtomE, "__ZN7WebCore10XLinkNames17xlinkNamespaceURIE": __ZN7WebCore10XLinkNames17xlinkNamespaceURIE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN3WTF9xmlnsAtomE": __ZN3WTF9xmlnsAtomE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE, "__ZN7WebCore9HTMLNames6xmpTagE": __ZN7WebCore9HTMLNames6xmpTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17MarkupAccumulator18appendDocumentTypeERN3WTF13StringBuilderERKNS_12DocumentTypeE","__ZN7WebCore17MarkupAccumulator15appendAttributeERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsISB_EENSF_ISD_EEEE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_22IdentityHashTranslatorIS8_EERKS1_RKS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore17MarkupAccumulator11totalLengthERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E6rehashEiPS5_","__ZN7WebCore17MarkupAccumulator27shouldAddNamespaceAttributeERKNS_9AttributeERN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE","__ZN7WebCore17MarkupAccumulator15appendNamespaceERN3WTF13StringBuilderERKNS1_12AtomicStringES6_RNS1_7HashMapIS4_PNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS4_EENSB_IS9_EEEEb","__ZN7WebCore17MarkupAccumulator13appendOpenTagERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZN7WebCore17MarkupAccumulator13appendElementERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZN7WebCore17MarkupAccumulator23elementCannotHaveEndTagERKNS_4NodeE","__ZN3WTF13StringBuilder6appendERKS0_","__ZN7WebCore17MarkupAccumulator17appendStartMarkupERN3WTF13StringBuilderERKNS_4NodeEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZN7WebCore17MarkupAccumulator12appendEndTagERKNS_4NodeE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_EaSERKSF_","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore17MarkupAccumulator14serializeNodesERNS_4NodeEPS1_NS_13EChildrenOnlyEPN3WTF6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE","_memset","__ZN7WebCore17MarkupAccumulator28serializeNodesWithNamespacesERNS_4NodeEPS1_NS_13EChildrenOnlyEPKN3WTF7HashMapINS5_12AtomicStringEPNS5_16AtomicStringImplENS5_16AtomicStringHashENS5_10HashTraitsIS7_EENSB_IS9_EEEEPNS5_6VectorINS_13QualifiedNameELj0ENS5_15CrashOnOverflowEEE","_memcpy","__ZN7WebCore17MarkupAccumulator15appendNodeValueERN3WTF13StringBuilderERKNS_4NodeEPKNS_5RangeENS_10EntityMaskE","__ZN7WebCore17MarkupAccumulator27appendProcessingInstructionERN3WTF13StringBuilderERKNS1_6StringES6_","__ZN7WebCore17MarkupAccumulator10appendTextERN3WTF13StringBuilderERKNS_4TextE","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_RS4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZNK7WebCore17MarkupAccumulator18resolveURLIfNeededERKNS_7ElementERKN3WTF6StringE","__ZN7WebCore17MarkupAccumulator12appendStringERKN3WTF6StringE","__ZN7WebCore17MarkupAccumulator17concatenateMarkupERN3WTF13StringBuilderE","__ZN7WebCore17MarkupAccumulator18appendCDATASectionERN3WTF13StringBuilderERKNS1_6StringE","__ZN7WebCore17MarkupAccumulator29appendQuotedURLAttributeValueERN3WTF13StringBuilderERKNS_7ElementERKNS_9AttributeE","__ZN7WebCore17MarkupAccumulator15appendEndMarkupERN3WTF13StringBuilderERKNS_4NodeE","__ZN7WebCore17MarkupAccumulatorC2EPN3WTF6VectorIPNS_4NodeELj0ENS1_15CrashOnOverflowEEENS_13EAbsoluteURLsEPKNS_5RangeENS_22EFragmentSerializationE","__ZNK3WTF12StringAppendINS_6StringENS_12AtomicStringEEcvS1_Ev","__ZN7WebCore17MarkupAccumulator22appendCustomAttributesERN3WTF13StringBuilderERKNS_7ElementEPNS1_7HashMapINS1_12AtomicStringEPNS1_16AtomicStringImplENS1_16AtomicStringHashENS1_10HashTraitsIS8_EENSC_ISA_EEEE","__ZNK7WebCore17MarkupAccumulator17entityMaskForTextERKNS_4TextE","__ZNK3WTF13StringBuilder14toAtomicStringEv","__ZN7WebCore17MarkupAccumulator14appendStartTagERKNS_4NodeEPN3WTF7HashMapINS4_12AtomicStringEPNS4_16AtomicStringImplENS4_16AtomicStringHashENS4_10HashTraitsIS6_EENSA_IS8_EEEE","__ZN7WebCore17MarkupAccumulatorD2Ev","__ZN7WebCore17MarkupAccumulator25shouldAddNamespaceElementERKNS_7ElementE","__ZN7WebCore17MarkupAccumulatorD0Ev","__ZN7WebCore17MarkupAccumulator20appendAttributeValueERN3WTF13StringBuilderERKNS1_6StringEb","_strlen","__ZN7WebCore17MarkupAccumulator20generateUniquePrefixERNS_13QualifiedNameERKN3WTF7HashMapINS3_12AtomicStringEPNS3_16AtomicStringImplENS3_16AtomicStringHashENS3_10HashTraitsIS5_EENS9_IS7_EEEE","__ZN7WebCore17MarkupAccumulator20appendXMLDeclarationERN3WTF13StringBuilderERKNS_8DocumentE","__ZN3WTF6VectorIPN7WebCore4NodeELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF13tryMakeStringINS_6StringENS_12AtomicStringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableINS_12AtomicStringENS_12KeyValuePairIS1_PNS_16AtomicStringImplEEENS_24KeyValuePairKeyExtractorIS5_EENS_16AtomicStringHashENS_7HashMapIS1_S4_S8_NS_10HashTraitsIS1_EENSA_IS4_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISE_S8_EES1_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S5_S7_S8_SE_SB_EEEEOT0_OT1_","__ZN7WebCore17MarkupAccumulator14appendCloseTagERN3WTF13StringBuilderERKNS_7ElementE","__ZN7WebCore17MarkupAccumulator15shouldSelfCloseERKNS_4NodeE","__ZN7WebCore17MarkupAccumulator33appendCharactersReplacingEntitiesERN3WTF13StringBuilderERKNS1_6StringEjjNS_10EntityMaskE"]

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
var __ZN7WebCore20CSSSegmentedFontFaceC1EPNS_15CSSFontSelectorE;
var __ZN7WebCore20CSSSegmentedFontFaceD1Ev;
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
  var __ZTVN7WebCore17SegmentedFontDataE=env.__ZTVN7WebCore17SegmentedFontDataE|0;
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
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20CSSSegmentedFontFace11getFontDataERKNS_15FontDescriptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 80 | 0;
 i12 = i2 + 36 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i2 + 28 | 0;
 i15 = 0;
 while (1) {
  if (i15 >>> 0 >= i13 >>> 0) {
   i16 = 6;
   break;
  }
  if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i15 >>> 0) {
   i16 = 4;
   break;
  }
  if (__ZNK7WebCore11CSSFontFace7isValidEv(HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0) | 0) {
   i16 = 7;
   break;
  } else {
   i15 = i15 + 1 | 0;
  }
 }
 if ((i16 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 6) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else if ((i16 | 0) == 7) {
  i15 = __ZNK7WebCore15FontDescription10traitsMaskEv(i3) | 0;
  i13 = HEAP32[i3 + 16 >> 2] | 0;
  HEAP32[i8 >> 2] = i13 << 15 & 32768 | i15 | (~~(+HEAPF32[i3 + 12 >> 2] + +.5) << 16) + 65536 | i13 >>> 2 << 13 & 24576;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i10, i2 + 8 | 0, i8, i9);
  i9 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i10 | 0) == 0) {
    i8 = __ZN3WTF10fastMallocEj(36) | 0;
    HEAP32[i8 + 4 >> 2] = 1;
    HEAP32[i8 + 8 >> 2] = 0;
    HEAP32[i8 >> 2] = __ZTVN7WebCore17SegmentedFontDataE + 8;
    HEAP32[i8 + 12 >> 2] = i8 + 24;
    HEAP32[i8 + 16 >> 2] = 1;
    HEAP32[i8 + 20 >> 2] = 0;
    i2 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i8;
    if ((i2 | 0) == 0) {
     break;
    }
    i8 = i2 + 4 | 0;
    i2 = i8 | 0;
    i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i13 | 0) != 0) {
     HEAP32[i2 >> 2] = i13;
     break;
    }
    i13 = i8 - 4 | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 3](i13);
   } else {
    if ((HEAP32[i10 + 20 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i1 >> 2] = i10;
    i13 = i10 + 4 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    STACKTOP = i4;
    return;
   }
  } while (0);
  i10 = HEAP32[i12 >> 2] | 0;
  L21 : do {
   if ((i10 | 0) != 0) {
    i13 = (i15 & 7680 | 0) != 0;
    i8 = (i15 & 2 | 0) != 0;
    i2 = i11 | 0;
    i17 = i6 | 0;
    i18 = i6 + 4 | 0;
    i19 = i6 + 8 | 0;
    i20 = i7 | 0;
    i21 = i7 + 4 | 0;
    i22 = i7 + 8 | 0;
    i23 = i5 | 0;
    i24 = i5 + 4 | 0;
    i25 = i5 + 8 | 0;
    i26 = 0;
    i27 = i10;
    L23 : while (1) {
     if (i27 >>> 0 <= i26 >>> 0) {
      i16 = 18;
      break;
     }
     do {
      if (__ZNK7WebCore11CSSFontFace7isValidEv(HEAP32[(HEAP32[i14 >> 2] | 0) + (i26 << 2) >> 2] | 0) | 0) {
       if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i26 >>> 0) {
        i16 = 21;
        break L23;
       }
       i28 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i26 << 2) >> 2] | 0;
       i29 = HEAP32[i28 + 4 >> 2] | 0;
       __ZN7WebCore11CSSFontFace11getFontDataERKNS_15FontDescriptionEbb(i11, i28, i3, (i29 & 7680 | 0) == 0 & i13, (i29 & 2 | 0) == 0 & i8);
       i29 = HEAP32[i2 >> 2] | 0;
       HEAP32[i2 >> 2] = 0;
       if ((i29 | 0) == 0) {
        break;
       }
       i28 = HEAP32[i9 >> 2] | 0;
       if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i26 >>> 0) {
        i16 = 24;
        break L23;
       }
       i30 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i26 << 2) >> 2] | 0;
       L31 : do {
        if ((HEAP8[i29 + 1118 | 0] & 1) == 0) {
         i31 = i30 + 16 | 0;
         i32 = HEAP32[i31 >> 2] | 0;
         if ((i32 | 0) == 0) {
          i33 = i29 + 4 | 0;
          HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
          HEAP32[i17 >> 2] = 0;
          HEAP32[i18 >> 2] = 2147483647;
          HEAP32[i19 >> 2] = i29;
          __ZN7WebCore17SegmentedFontData11appendRangeERKNS_13FontDataRangeE(i28, i6);
          i33 = HEAP32[i19 >> 2] | 0;
          if ((i33 | 0) == 0) {
           break;
          }
          i34 = i33 + 4 | 0;
          i33 = i34 | 0;
          i35 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
          if ((i35 | 0) != 0) {
           HEAP32[i33 >> 2] = i35;
           break;
          }
          i35 = i34 - 4 | 0;
          if ((i35 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 3](i35);
          break;
         }
         i35 = i30 + 8 | 0;
         i34 = i29 + 4 | 0;
         i33 = 0;
         while (1) {
          i36 = HEAP32[i35 >> 2] | 0;
          i37 = HEAP32[i36 + (i33 << 3) >> 2] | 0;
          i38 = HEAP32[i36 + (i33 << 3) + 4 >> 2] | 0;
          HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
          HEAP32[i20 >> 2] = i37;
          HEAP32[i21 >> 2] = i38;
          HEAP32[i22 >> 2] = i29;
          __ZN7WebCore17SegmentedFontData11appendRangeERKNS_13FontDataRangeE(i28, i7);
          i38 = HEAP32[i22 >> 2] | 0;
          do {
           if ((i38 | 0) != 0) {
            i37 = i38 + 4 | 0;
            i36 = i37 | 0;
            i39 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
            if ((i39 | 0) != 0) {
             HEAP32[i36 >> 2] = i39;
             break;
            }
            i39 = i37 - 4 | 0;
            if ((i39 | 0) == 0) {
             break;
            }
            FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 3](i39);
           }
          } while (0);
          i38 = i33 + 1 | 0;
          if (i38 >>> 0 >= i32 >>> 0) {
           break L31;
          }
          if ((HEAP32[i31 >> 2] | 0) >>> 0 > i38 >>> 0) {
           i33 = i38;
          } else {
           i16 = 38;
           break L23;
          }
         }
        } else {
         i33 = i29 + 4 | 0;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
         HEAP32[i23 >> 2] = 0;
         HEAP32[i24 >> 2] = 0;
         HEAP32[i25 >> 2] = i29;
         __ZN7WebCore17SegmentedFontData11appendRangeERKNS_13FontDataRangeE(i28, i5);
         i33 = HEAP32[i25 >> 2] | 0;
         if ((i33 | 0) == 0) {
          break;
         }
         i31 = i33 + 4 | 0;
         i33 = i31 | 0;
         i32 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
         if ((i32 | 0) != 0) {
          HEAP32[i33 >> 2] = i32;
          break;
         }
         i32 = i31 - 4 | 0;
         if ((i32 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 3](i32);
        }
       } while (0);
       i28 = i29 + 4 | 0;
       i30 = i28 | 0;
       i32 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) != 0) {
        HEAP32[i30 >> 2] = i32;
        break;
       }
       i32 = i28 - 4 | 0;
       if ((i32 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 3](i32);
      }
     } while (0);
     i32 = i26 + 1 | 0;
     if (i32 >>> 0 >= i10 >>> 0) {
      break L21;
     }
     i26 = i32;
     i27 = HEAP32[i12 >> 2] | 0;
    }
    if ((i16 | 0) == 24) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i16 | 0) == 18) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i16 | 0) == 21) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i16 | 0) == 38) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   }
  } while (0);
  i16 = HEAP32[i9 >> 2] | 0;
  i9 = i1 | 0;
  if ((HEAP32[i16 + 20 >> 2] | 0) == 0) {
   HEAP32[i9 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
  HEAP32[i9 >> 2] = i16;
  if ((i16 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i9 = i16 + 4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore20CSSSegmentedFontFaceD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 + 4 | 0;
       i6 = i7 | 0;
       i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) != 0) {
        HEAP32[i6 >> 2] = i8;
        break;
       }
       i8 = i7 - 4 | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
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
 } while (0);
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i8 = i1 + 28 | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = 0;
   i6 = i5;
   while (1) {
    if (i6 >>> 0 <= i7 >>> 0) {
     i9 = 14;
     break;
    }
    __ZN7WebCore11CSSFontFace28removedFromSegmentedFontFaceEPNS_20CSSSegmentedFontFaceE(HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0, i1);
    i7 = i7 + 1 | 0;
    i6 = HEAP32[i4 >> 2] | 0;
    if (i7 >>> 0 >= i5 >>> 0) {
     break;
    }
   }
   if ((i9 | 0) == 14) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   i3 = i7 + (i6 << 2) | 0;
   i10 = i7;
   while (1) {
    i7 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i11 = i7 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i11 >> 2] = i12;
       break;
      }
      i12 = i7 + 48 | 0;
      i11 = HEAP32[i12 >> 2] | 0;
      i13 = i7 + 40 | 0;
      if ((i11 | 0) != 0) {
       i14 = HEAP32[i13 >> 2] | 0;
       i15 = i14 + (i11 << 2) | 0;
       i11 = i14;
       while (1) {
        i14 = HEAP32[i11 >> 2] | 0;
        if ((i14 | 0) != 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
        }
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i15 | 0)) {
         break;
        }
       }
       HEAP32[i12 >> 2] = 0;
      }
      i15 = HEAP32[i13 >> 2] | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i7 + 44 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i15);
      }
      i15 = HEAP32[i7 + 20 >> 2] | 0;
      if ((i15 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i15);
      }
      i15 = i7 + 16 | 0;
      if ((HEAP32[i15 >> 2] | 0) != 0) {
       HEAP32[i15 >> 2] = 0;
      }
      i15 = i7 + 8 | 0;
      i11 = HEAP32[i15 >> 2] | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i15 >> 2] = 0;
       HEAP32[i7 + 12 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i11);
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i3 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 40 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i8 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i9 = i8 + 4 | 0;
     i8 = i9 | 0;
     i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i8 >> 2] = i5;
      break;
     }
     i5 = i9 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore20CSSSegmentedFontFaceD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 8 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i4 | 0) > 0) {
    i5 = 0;
    while (1) {
     do {
      if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
       i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
       if ((i6 | 0) == 0) {
        break;
       }
       i7 = i6 + 4 | 0;
       i6 = i7 | 0;
       i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
       if ((i8 | 0) != 0) {
        HEAP32[i6 >> 2] = i8;
        break;
       }
       i8 = i7 - 4 | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
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
 } while (0);
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i8 = i1 + 28 | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = 0;
   i6 = i5;
   while (1) {
    if (i6 >>> 0 <= i7 >>> 0) {
     i9 = 14;
     break;
    }
    __ZN7WebCore11CSSFontFace28removedFromSegmentedFontFaceEPNS_20CSSSegmentedFontFaceE(HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 << 2) >> 2] | 0, i1);
    i7 = i7 + 1 | 0;
    i6 = HEAP32[i4 >> 2] | 0;
    if (i7 >>> 0 >= i5 >>> 0) {
     break;
    }
   }
   if ((i9 | 0) == 14) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   i3 = i7 + (i6 << 2) | 0;
   i10 = i7;
   while (1) {
    i7 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i11 = i7 | 0;
      i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
      if ((i12 | 0) != 0) {
       HEAP32[i11 >> 2] = i12;
       break;
      }
      i12 = i7 + 48 | 0;
      i11 = HEAP32[i12 >> 2] | 0;
      i13 = i7 + 40 | 0;
      if ((i11 | 0) != 0) {
       i14 = HEAP32[i13 >> 2] | 0;
       i15 = i14 + (i11 << 2) | 0;
       i11 = i14;
       while (1) {
        i14 = HEAP32[i11 >> 2] | 0;
        if ((i14 | 0) != 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 3](i14);
        }
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i15 | 0)) {
         break;
        }
       }
       HEAP32[i12 >> 2] = 0;
      }
      i15 = HEAP32[i13 >> 2] | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i7 + 44 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i15);
      }
      i15 = HEAP32[i7 + 20 >> 2] | 0;
      if ((i15 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i15);
      }
      i15 = i7 + 16 | 0;
      if ((HEAP32[i15 >> 2] | 0) != 0) {
       HEAP32[i15 >> 2] = 0;
      }
      i15 = i7 + 8 | 0;
      i11 = HEAP32[i15 >> 2] | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i15 >> 2] = 0;
       HEAP32[i7 + 12 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i11);
      }
      __ZN3WTF8fastFreeEPv(i7);
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i3 | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 0;
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 40 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i8 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     i9 = i8 + 4 | 0;
     i8 = i9 | 0;
     i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i8 >> 2] = i5;
      break;
     }
     i5 = i9 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
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
     i13 = i16 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 3](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i19;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
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
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 3](i10);
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
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i7, 0) | 0;
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
   i13 = i3 + 4 | 0;
   i21 = i13 | 0;
   i7 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i21 >> 2] = i7;
    break;
   }
   i7 = i13 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i7;
 i3 = i2 + 4 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i7 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i21 = i13 << 1;
   i28 = (i7 * 6 & -1 | 0) < (i21 | 0) ? i13 : i21;
  }
  i21 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i28, i12) | 0;
  i26 = i21;
  i27 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore17SegmentedFontData11appendRangeERKNS_13FontDataRangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 12 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i1 + (i5 * 12 & -1) >> 2] = HEAP32[i2 >> 2];
  HEAP32[i1 + (i5 * 12 & -1) + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  HEAP32[i1 + (i5 * 12 & -1) + 8 >> 2] = i6;
  if ((i6 | 0) == 0) {
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = i7 + 1 | 0;
   HEAP32[i4 >> 2] = i8;
   return;
  }
  i1 = i6 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  i7 = HEAP32[i4 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i4 >> 2] = i8;
  return;
 }
 i1 = i5 + 1 | 0;
 i6 = i3 | 0;
 i9 = HEAP32[i6 >> 2] | 0;
 do {
  if (i9 >>> 0 > i2 >>> 0) {
   i10 = 6;
  } else {
   if ((i9 + (i5 * 12 & -1) | 0) >>> 0 <= i2 >>> 0) {
    i10 = 6;
    break;
   }
   i11 = i1 + (i5 >>> 2) | 0;
   i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
   __ZN3WTF6VectorIN7WebCore13FontDataRangeELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i12 >>> 0 > i1 >>> 0 ? i12 : i1);
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i12 + (((i2 - i9 | 0) / 12 & -1) * 12 & -1) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i10 | 0) == 6) {
  i10 = i1 + (i5 >>> 2) | 0;
  i5 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
  __ZN3WTF6VectorIN7WebCore13FontDataRangeELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i5 >>> 0 > i1 >>> 0 ? i5 : i1);
  i13 = i2;
  i14 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i14 + (i6 * 12 & -1) >> 2] = HEAP32[i13 >> 2];
 HEAP32[i14 + (i6 * 12 & -1) + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 i2 = HEAP32[i13 + 8 >> 2] | 0;
 HEAP32[i14 + (i6 * 12 & -1) + 8 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i7 = HEAP32[i4 >> 2] | 0;
  i8 = i7 + 1 | 0;
  HEAP32[i4 >> 2] = i8;
  return;
 }
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i7 = HEAP32[i4 >> 2] | 0;
 i8 = i7 + 1 | 0;
 HEAP32[i4 >> 2] = i8;
 return;
}
function __ZN7WebCore20CSSSegmentedFontFace14appendFontFaceEN3WTF10PassRefPtrINS_11CSSFontFaceEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 8 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] | 0) != 0) {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i5 | 0) > 0) {
    i6 = 0;
    while (1) {
     do {
      if ((HEAP32[i4 + (i6 << 3) >> 2] | 0) != -1) {
       i7 = HEAP32[i4 + (i6 << 3) + 4 >> 2] | 0;
       if ((i7 | 0) == 0) {
        break;
       }
       i8 = i7 + 4 | 0;
       i7 = i8 | 0;
       i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
       if ((i9 | 0) != 0) {
        HEAP32[i7 >> 2] = i9;
        break;
       }
       i9 = i8 - 4 | 0;
       if ((i9 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
      }
     } while (0);
     i6 = i6 + 1 | 0;
     if ((i6 | 0) >= (i5 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i4);
   _memset(i3 | 0, 0, 16) | 0;
  }
 } while (0);
 i3 = i2 | 0;
 __ZN7WebCore11CSSFontFace24addedToSegmentedFontFaceEPNS_20CSSSegmentedFontFaceE(HEAP32[i3 >> 2] | 0, i1);
 i2 = i1 + 28 | 0;
 i5 = i1 + 36 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == (HEAP32[i1 + 32 >> 2] | 0)) {
  i1 = i6 + 1 | 0;
  i9 = i1 + (i6 >>> 2) | 0;
  i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i8 >>> 0 > i1 >>> 0 ? i8 : i1);
  i1 = (HEAP32[i2 >> 2] | 0) + (HEAP32[i5 >> 2] << 2) | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 >> 2] = i8;
  i10 = HEAP32[i5 >> 2] | 0;
  i11 = i10 + 1 | 0;
  HEAP32[i5 >> 2] = i11;
  return;
 } else {
  i8 = (HEAP32[i2 >> 2] | 0) + (i6 << 2) | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  HEAP32[i8 >> 2] = i6;
  i10 = HEAP32[i5 >> 2] | 0;
  i11 = i10 + 1 | 0;
  HEAP32[i5 >> 2] = i11;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore13FontDataRangeELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 * 12 & -1) | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 357913941 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 12 & -1) | 0;
    HEAP32[i3 >> 2] = (i8 >>> 0) / 12 & -1;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 1;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i2 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   i10 = i6 + 8 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i9;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i8 = i10 | 0;
     i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i8 >> 2] = i11;
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 3](i11);
    }
   } while (0);
   i9 = i6 + 12 | 0;
   if ((i9 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i9;
    i2 = i2 + 12 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20CSSSegmentedFontFace10fontLoadedEPNS_11CSSFontFaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = i5 + 4 | 0;
     i5 = i6 | 0;
     i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i5 >> 2] = i7;
      break;
     }
     i7 = i6 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore20CSSSegmentedFontFace10pruneTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 8 | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i3 + (i1 << 3) >> 2] | 0) != -1) {
     i5 = HEAP32[i3 + (i1 << 3) + 4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i6 = i5 + 4 | 0;
     i5 = i6 | 0;
     i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i5 >> 2] = i7;
      break;
     }
     i7 = i6 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore20CSSSegmentedFontFace7isValidEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 28 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i5 = 0;
   i6 = 7;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) >>> 0 <= i1 >>> 0) {
   i6 = 4;
   break;
  }
  if (__ZNK7WebCore11CSSFontFace7isValidEv(HEAP32[(HEAP32[i4 >> 2] | 0) + (i1 << 2) >> 2] | 0) | 0) {
   i5 = 1;
   i6 = 8;
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i6 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i6 | 0) == 7) {
  return i5 | 0;
 } else if ((i6 | 0) == 8) {
  return i5 | 0;
 }
 return 0;
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
function __ZN7WebCore20CSSSegmentedFontFaceC2EPNS_15CSSFontSelectorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 HEAP32[i1 + 28 >> 2] = i1 + 40;
 HEAP32[i1 + 32 >> 2] = 1;
 HEAP32[i1 + 36 >> 2] = 0;
 return;
}
function __ZN7WebCore20CSSSegmentedFontFaceC1EPNS_15CSSFontSelectorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 HEAP32[i1 + 28 >> 2] = i1 + 40;
 HEAP32[i1 + 32 >> 2] = 1;
 HEAP32[i1 + 36 >> 2] = 0;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20CSSSegmentedFontFaceD2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore20CSSSegmentedFontFaceC2EPNS_15CSSFontSelectorE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore17SegmentedFontDataE": __ZTVN7WebCore17SegmentedFontDataE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore20CSSSegmentedFontFaceC2EPNS_15CSSFontSelectorE","__ZN7WebCore20CSSSegmentedFontFace11getFontDataERKNS_15FontDescriptionE","__ZN7WebCore20CSSSegmentedFontFaceD2Ev","__ZN7WebCore20CSSSegmentedFontFace10pruneTableEv","__ZN7WebCore17SegmentedFontData11appendRangeERKNS_13FontDataRangeE","_memset","__ZN3WTF6VectorINS_6RefPtrIN7WebCore11CSSFontFaceEEELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN3WTF6VectorIN7WebCore13FontDataRangeELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore17SegmentedFontDataEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKjDnEENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore20CSSSegmentedFontFace10fontLoadedEPNS_11CSSFontFaceE","__ZN7WebCore20CSSSegmentedFontFace14appendFontFaceEN3WTF10PassRefPtrINS_11CSSFontFaceEEE","__ZNK7WebCore20CSSSegmentedFontFace7isValidEv","__ZN3WTF15CrashOnOverflow10overflowedEv"]

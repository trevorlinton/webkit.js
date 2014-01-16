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
var __ZN7WebCore13MediaQuerySetC1Ev;
var __ZN7WebCore13MediaQuerySetC1ERKN3WTF6StringEb;
var __ZN7WebCore13MediaQuerySetC1ERKS0_;
var __ZN7WebCore13MediaQuerySetD1Ev;
var __ZN7WebCore9MediaListC1EPNS_13MediaQuerySetEPNS_13CSSStyleSheetE;
var __ZN7WebCore9MediaListC1EPNS_13MediaQuerySetEPNS_7CSSRuleE;
var __ZN7WebCore9MediaListD1Ev;
/* memory initializer */ allocate([44,32,0,0,0,0,0,0,105,110,118,97,108,105,100,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
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
function __ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 2464 | 0;
 i4 = i3 | 0;
 i5 = i3 + 2288 | 0;
 i6 = i3 + 2360 | 0;
 i7 = i3 + 2408 | 0;
 i8 = i3 + 2424 | 0;
 i9 = i3 + 2432 | 0;
 i10 = i3 + 2440 | 0;
 i11 = i3 + 2448 | 0;
 i12 = i3 + 2456 | 0;
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i5, 1, i6);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i4, i5);
 i6 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i14 = i6 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i14 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 | 0;
   i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i13 >> 2] = i15;
    break;
   }
  }
 } while (0);
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = 0;
 i15 = i7 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i13 = i7 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i2, 44, 0, i7);
 L19 : do {
  if ((HEAP32[i13 >> 2] | 0) == 0) {
   i16 = 0;
   i17 = 0;
   i18 = 0;
   i19 = 0;
   i20 = i1 + 4 | 0;
   i21 = 60;
  } else {
   i7 = i8 | 0;
   i5 = i1 + 4 | 0;
   i14 = i9 | 0;
   i22 = i10 | 0;
   i23 = i11 | 0;
   i24 = 0;
   i25 = 0;
   i26 = 0;
   i27 = 0;
   L22 : while (1) {
    __ZNK3WTF6String15stripWhiteSpaceEv(i8, (HEAP32[i6 >> 2] | 0) + (i27 << 2) | 0);
    i28 = HEAP32[i7 >> 2] | 0;
    L24 : do {
     if ((i28 | 0) == 0) {
      i21 = 18;
     } else {
      if ((HEAP32[i28 + 4 >> 2] | 0) == 0) {
       i21 = 18;
       break;
      }
      __ZN7WebCore9CSSParser15parseMediaQueryERKN3WTF6StringE(i9, i4, i8);
      i29 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      do {
       if ((i29 | 0) == 0) {
        if ((HEAP32[i5 >> 2] & 1 | 0) == 0) {
         i30 = 1;
         i31 = i26;
         i32 = i25;
         i33 = i24;
         break L24;
        }
        i34 = HEAP32[i7 >> 2] | 0;
        L30 : do {
         if ((i34 | 0) == 0) {
          i35 = 0;
         } else {
          i36 = HEAP32[i34 + 4 >> 2] | 0;
          if ((i36 | 0) == 0) {
           i35 = 0;
           break;
          }
          i37 = i34 + 16 | 0;
          i38 = i34 + 8 | 0;
          i39 = i38;
          i40 = i38 | 0;
          i38 = 0;
          while (1) {
           if (i36 >>> 0 > i38 >>> 0) {
            if ((HEAP32[i37 >> 2] & 32 | 0) == 0) {
             i41 = HEAP16[(HEAP32[i39 >> 2] | 0) + (i38 << 1) >> 1] | 0;
            } else {
             i41 = HEAPU8[(HEAP32[i40 >> 2] | 0) + i38 | 0] | 0;
            }
            if (!((i41 - 97 & 65535) >>> 0 < 26 >>> 0 | (i41 - 65 & 65535) >>> 0 < 26 >>> 0)) {
             i42 = i41;
             i21 = 29;
            }
           } else {
            i42 = 0;
            i21 = 29;
           }
           if ((i21 | 0) == 29) {
            i21 = 0;
            if (!((i42 - 49 & 65535) >>> 0 < 9 >>> 0 | i42 << 16 >> 16 == 45)) {
             i35 = i38;
             break L30;
            }
           }
           i43 = i38 + 1 | 0;
           if (i43 >>> 0 < i36 >>> 0) {
            i38 = i43;
           } else {
            i35 = i43;
            break;
           }
          }
         }
        } while (0);
        __ZNK3WTF6String9substringEjj(i10, i8, 0, i35);
        if ((HEAP32[i22 >> 2] | 0) == 0) {
         i30 = 4;
         i31 = i26;
         i32 = i25;
         i33 = i24;
         break L24;
        }
        i34 = __ZN3WTF10fastMallocEj(20) | 0;
        HEAP32[i23 >> 2] = 0;
        __ZN7WebCore10MediaQueryC1ENS0_10RestrictorERKN3WTF6StringENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_13MediaQueryExpEEELj0ENS2_15CrashOnOverflowEEEEE(i34, 2, i10, i11);
        i38 = HEAP32[i23 >> 2] | 0;
        if ((i38 | 0) != 0) {
         i36 = i38 + 8 | 0;
         i40 = HEAP32[i36 >> 2] | 0;
         i39 = i38 | 0;
         if ((i40 | 0) != 0) {
          i37 = HEAP32[i39 >> 2] | 0;
          i43 = i37 + (i40 << 2) | 0;
          i40 = i37;
          while (1) {
           i37 = HEAP32[i40 >> 2] | 0;
           if ((i37 | 0) != 0) {
            __ZN7WebCore13MediaQueryExpD1Ev(i37);
            __ZN3WTF8fastFreeEPv(i37);
           }
           i40 = i40 + 4 | 0;
           if ((i40 | 0) == (i43 | 0)) {
            break;
           }
          }
          HEAP32[i36 >> 2] = 0;
         }
         i43 = HEAP32[i39 >> 2] | 0;
         if ((i43 | 0) != 0) {
          HEAP32[i39 >> 2] = 0;
          HEAP32[i38 + 4 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i43);
         }
         __ZN3WTF8fastFreeEPv(i38);
        }
        i43 = HEAP32[i22 >> 2] | 0;
        if ((i43 | 0) == 0) {
         i44 = i34;
         break;
        }
        i40 = i43 | 0;
        i37 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
        if ((i37 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         i44 = i34;
         break;
        } else {
         HEAP32[i40 >> 2] = i37;
         i44 = i34;
         break;
        }
       } else {
        i44 = i29;
       }
      } while (0);
      if ((i24 | 0) != (i25 | 0)) {
       HEAP32[i26 + (i24 << 2) >> 2] = i44;
       i30 = 0;
       i31 = i26;
       i32 = i25;
       i33 = i24 + 1 | 0;
       break;
      }
      i29 = i25 + 1 | 0;
      i37 = i29 + (i25 >>> 2) | 0;
      i40 = i37 >>> 0 > 16 >>> 0 ? i37 : 16;
      i37 = i40 >>> 0 > i29 >>> 0 ? i40 : i29;
      do {
       if (i25 >>> 0 < i37 >>> 0) {
        if (i37 >>> 0 > 1073741823 >>> 0) {
         break L22;
        }
        i40 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 2) | 0;
        i43 = i40 >>> 2;
        i45 = __ZN3WTF10fastMallocEj(i40) | 0;
        i40 = i45;
        i46 = i26;
        _memcpy(i45 | 0, i46 | 0, i25 << 2) | 0;
        if ((i26 | 0) == 0) {
         i47 = i40;
         i48 = i43;
         break;
        }
        i45 = (i40 | 0) == (i26 | 0);
        __ZN3WTF8fastFreeEPv(i46);
        i47 = i45 ? 0 : i40;
        i48 = i45 ? 0 : i43;
       } else {
        i47 = i26;
        i48 = i25;
       }
      } while (0);
      HEAP32[i47 + (i25 << 2) >> 2] = i44;
      i30 = 0;
      i31 = i47;
      i32 = i48;
      i33 = i29;
     }
    } while (0);
    if ((i21 | 0) == 18) {
     i21 = 0;
     i30 = (HEAP32[i5 >> 2] & 1 | 0) == 0 ? 1 : 4;
     i31 = i26;
     i32 = i25;
     i33 = i24;
    }
    i28 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i28 | 0) != 0) {
      i37 = i28 | 0;
      i43 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i28);
       break;
      } else {
       HEAP32[i37 >> 2] = i43;
       break;
      }
     }
    } while (0);
    if (!((i30 | 0) == 0 | (i30 | 0) == 4)) {
     i49 = 0;
     i50 = i31;
     i51 = i33;
     break L19;
    }
    i28 = i27 + 1 | 0;
    i43 = HEAP32[i13 >> 2] | 0;
    if (i28 >>> 0 < i43 >>> 0) {
     i24 = i33;
     i25 = i32;
     i26 = i31;
     i27 = i28;
    } else {
     i16 = i33;
     i17 = i32;
     i18 = i31;
     i19 = i43;
     i20 = i5;
     i21 = 60;
     break L19;
    }
   }
   _WTFCrash();
   return 0;
  }
 } while (0);
 L85 : do {
  if ((i21 | 0) == 60) {
   do {
    if ((HEAP32[i20 >> 2] & 1 | i19 | 0) == 0) {
     __ZNK3WTF6String15stripWhiteSpaceEv(i12, i2);
     i31 = HEAP32[i12 >> 2] | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     i32 = (HEAP32[i31 + 4 >> 2] | 0) == 0;
     i33 = i31 | 0;
     i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i31);
      if (i32) {
       break;
      } else {
       i49 = 0;
       i50 = i18;
       i51 = i16;
       break L85;
      }
     } else {
      HEAP32[i33 >> 2] = i30;
      if (i32) {
       break;
      } else {
       i49 = 0;
       i50 = i18;
       i51 = i16;
       break L85;
      }
     }
    }
   } while (0);
   i32 = i1 + 16 | 0;
   i30 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i16;
   i32 = i1 + 8 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = i18;
   HEAP32[i1 + 12 >> 2] = i17;
   i49 = 1;
   i50 = i33;
   i51 = i30;
  }
 } while (0);
 i17 = HEAP32[i13 >> 2] | 0;
 if ((i17 | 0) != 0) {
  i1 = HEAP32[i6 >> 2] | 0;
  i18 = i1 + (i17 << 2) | 0;
  i17 = i1;
  while (1) {
   i1 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i16 = i1 | 0;
     i12 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i16 >> 2] = i12;
      break;
     }
    }
   } while (0);
   i17 = i17 + 4 | 0;
   if ((i17 | 0) == (i18 | 0)) {
    break;
   }
  }
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i15 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 if ((i51 | 0) != 0) {
  i13 = i50 + (i51 << 2) | 0;
  i51 = i50;
  while (1) {
   i15 = HEAP32[i51 >> 2] | 0;
   if ((i15 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i15);
    __ZN3WTF8fastFreeEPv(i15);
   }
   i51 = i51 + 4 | 0;
   if ((i51 | 0) == (i13 | 0)) {
    break;
   }
  }
 }
 if ((i50 | 0) == 0) {
  __ZN7WebCore9CSSParserD1Ev(i4);
  STACKTOP = i3;
  return i49 | 0;
 }
 __ZN3WTF8fastFreeEPv(i50);
 __ZN7WebCore9CSSParserD1Ev(i4);
 STACKTOP = i3;
 return i49 | 0;
}
function __ZN7WebCore13MediaQuerySet6removeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 2432 | 0;
 i4 = i3 | 0;
 i5 = i3 + 2288 | 0;
 i6 = i3 + 2360 | 0;
 i7 = i3 + 2408 | 0;
 i8 = i3 + 2416 | 0;
 i9 = i3 + 2424 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i5, 1, i6);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i4, i5);
 i6 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9CSSParser15parseMediaQueryERKN3WTF6StringE(i7, i4, i2);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] & 1 | 0) == 0) {
    i13 = 0;
    __ZN7WebCore9CSSParserD1Ev(i4);
    STACKTOP = i3;
    return i13 | 0;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   L24 : do {
    if ((i6 | 0) == 0) {
     i14 = 0;
    } else {
     i12 = HEAP32[i6 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i14 = 0;
      break;
     }
     i10 = i6 + 16 | 0;
     i5 = i6 + 8 | 0;
     i11 = i5;
     i15 = i5 | 0;
     i5 = 0;
     while (1) {
      if (i12 >>> 0 > i5 >>> 0) {
       if ((HEAP32[i10 >> 2] & 32 | 0) == 0) {
        i16 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i5 << 1) >> 1] | 0;
       } else {
        i16 = HEAPU8[(HEAP32[i15 >> 2] | 0) + i5 | 0] | 0;
       }
       if (!((i16 - 97 & 65535) >>> 0 < 26 >>> 0 | (i16 - 65 & 65535) >>> 0 < 26 >>> 0)) {
        i17 = i16;
        i18 = 23;
       }
      } else {
       i17 = 0;
       i18 = 23;
      }
      if ((i18 | 0) == 23) {
       i18 = 0;
       if (!((i17 - 49 & 65535) >>> 0 < 9 >>> 0 | i17 << 16 >> 16 == 45)) {
        i14 = i5;
        break L24;
       }
      }
      i19 = i5 + 1 | 0;
      if (i19 >>> 0 < i12 >>> 0) {
       i5 = i19;
      } else {
       i14 = i19;
       break;
      }
     }
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i8, i2, 0, i14);
   i6 = i8 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i13 = 0;
    __ZN7WebCore9CSSParserD1Ev(i4);
    STACKTOP = i3;
    return i13 | 0;
   }
   i5 = __ZN3WTF10fastMallocEj(20) | 0;
   i12 = i5;
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore10MediaQueryC1ENS0_10RestrictorERKN3WTF6StringENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_13MediaQueryExpEEELj0ENS2_15CrashOnOverflowEEEEE(i12, 2, i8, i9);
   i11 = HEAP32[i15 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i15 = i11 + 8 | 0;
    i10 = HEAP32[i15 >> 2] | 0;
    i19 = i11 | 0;
    if ((i10 | 0) != 0) {
     i20 = HEAP32[i19 >> 2] | 0;
     i21 = i20 + (i10 << 2) | 0;
     i10 = i20;
     while (1) {
      i20 = HEAP32[i10 >> 2] | 0;
      if ((i20 | 0) != 0) {
       __ZN7WebCore13MediaQueryExpD1Ev(i20);
       __ZN3WTF8fastFreeEPv(i20);
      }
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i21 | 0)) {
       break;
      }
     }
     HEAP32[i15 >> 2] = 0;
    }
    i21 = HEAP32[i19 >> 2] | 0;
    if ((i21 | 0) != 0) {
     HEAP32[i19 >> 2] = 0;
     HEAP32[i11 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i21);
    }
    __ZN3WTF8fastFreeEPv(i11);
   }
   i21 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i10 = i21 | 0;
     i20 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i10 >> 2] = i20;
      break;
     }
    }
   } while (0);
   if ((i5 | 0) == 0) {
    i13 = 0;
   } else {
    i22 = i12;
    break;
   }
   __ZN7WebCore9CSSParserD1Ev(i4);
   STACKTOP = i3;
   return i13 | 0;
  } else {
   i22 = i7;
  }
 } while (0);
 i7 = i1 + 16 | 0;
 i9 = i1 + 8 | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= (HEAP32[i7 >> 2] | 0) >>> 0) {
   i23 = 0;
   break;
  }
  i24 = i1 + 1 | 0;
  if (__ZNK7WebCore10MediaQueryeqERKS0_(HEAP32[(HEAP32[i9 >> 2] | 0) + (i1 << 2) >> 2] | 0, i22) | 0) {
   i18 = 44;
   break;
  } else {
   i1 = i24;
  }
 }
 if ((i18 | 0) == 44) {
  i18 = HEAP32[i9 >> 2] | 0;
  i8 = i18 + (i1 << 2) | 0;
  i1 = HEAP32[i8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i25 = i18;
  } else {
   __ZN7WebCore10MediaQueryD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
   i25 = HEAP32[i9 >> 2] | 0;
  }
  i9 = i18 + (i24 << 2) | 0;
  _memmove(i8 | 0, i9 | 0, i25 + (HEAP32[i7 >> 2] << 2) - i9 | 0) | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - 1;
  i23 = 1;
 }
 __ZN7WebCore10MediaQueryD1Ev(i22);
 __ZN3WTF8fastFreeEPv(i22);
 i13 = i23;
 __ZN7WebCore9CSSParserD1Ev(i4);
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCore13MediaQuerySet3addERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 2432 | 0;
 i4 = i3 | 0;
 i5 = i3 + 2288 | 0;
 i6 = i3 + 2360 | 0;
 i7 = i3 + 2408 | 0;
 i8 = i3 + 2416 | 0;
 i9 = i3 + 2424 | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i6);
 __ZN7WebCore16CSSParserContextC1ENS_13CSSParserModeERKNS_3URLE(i5, 1, i6);
 __ZN7WebCore9CSSParserC1ERKNS_16CSSParserContextE(i4, i5);
 i6 = HEAP32[i5 + 48 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN7WebCore9CSSParser15parseMediaQueryERKN3WTF6StringE(i7, i4, i2);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   if ((HEAP32[i1 + 4 >> 2] & 1 | 0) == 0) {
    i13 = 0;
    __ZN7WebCore9CSSParserD1Ev(i4);
    STACKTOP = i3;
    return i13 | 0;
   }
   i6 = HEAP32[i2 >> 2] | 0;
   L24 : do {
    if ((i6 | 0) == 0) {
     i14 = 0;
    } else {
     i12 = HEAP32[i6 + 4 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i14 = 0;
      break;
     }
     i10 = i6 + 16 | 0;
     i5 = i6 + 8 | 0;
     i11 = i5;
     i15 = i5 | 0;
     i5 = 0;
     while (1) {
      if (i12 >>> 0 > i5 >>> 0) {
       if ((HEAP32[i10 >> 2] & 32 | 0) == 0) {
        i16 = HEAP16[(HEAP32[i11 >> 2] | 0) + (i5 << 1) >> 1] | 0;
       } else {
        i16 = HEAPU8[(HEAP32[i15 >> 2] | 0) + i5 | 0] | 0;
       }
       if (!((i16 - 97 & 65535) >>> 0 < 26 >>> 0 | (i16 - 65 & 65535) >>> 0 < 26 >>> 0)) {
        i17 = i16;
        i18 = 23;
       }
      } else {
       i17 = 0;
       i18 = 23;
      }
      if ((i18 | 0) == 23) {
       i18 = 0;
       if (!((i17 - 49 & 65535) >>> 0 < 9 >>> 0 | i17 << 16 >> 16 == 45)) {
        i14 = i5;
        break L24;
       }
      }
      i19 = i5 + 1 | 0;
      if (i19 >>> 0 < i12 >>> 0) {
       i5 = i19;
      } else {
       i14 = i19;
       break;
      }
     }
    }
   } while (0);
   __ZNK3WTF6String9substringEjj(i8, i2, 0, i14);
   i6 = i8 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    i13 = 0;
    __ZN7WebCore9CSSParserD1Ev(i4);
    STACKTOP = i3;
    return i13 | 0;
   }
   i5 = __ZN3WTF10fastMallocEj(20) | 0;
   i12 = i5;
   i15 = i9 | 0;
   HEAP32[i15 >> 2] = 0;
   __ZN7WebCore10MediaQueryC1ENS0_10RestrictorERKN3WTF6StringENS2_10PassOwnPtrINS2_6VectorINS2_6OwnPtrINS_13MediaQueryExpEEELj0ENS2_15CrashOnOverflowEEEEE(i12, 2, i8, i9);
   i11 = HEAP32[i15 >> 2] | 0;
   if ((i11 | 0) != 0) {
    i15 = i11 + 8 | 0;
    i10 = HEAP32[i15 >> 2] | 0;
    i19 = i11 | 0;
    if ((i10 | 0) != 0) {
     i20 = HEAP32[i19 >> 2] | 0;
     i21 = i20 + (i10 << 2) | 0;
     i10 = i20;
     while (1) {
      i20 = HEAP32[i10 >> 2] | 0;
      if ((i20 | 0) != 0) {
       __ZN7WebCore13MediaQueryExpD1Ev(i20);
       __ZN3WTF8fastFreeEPv(i20);
      }
      i10 = i10 + 4 | 0;
      if ((i10 | 0) == (i21 | 0)) {
       break;
      }
     }
     HEAP32[i15 >> 2] = 0;
    }
    i21 = HEAP32[i19 >> 2] | 0;
    if ((i21 | 0) != 0) {
     HEAP32[i19 >> 2] = 0;
     HEAP32[i11 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i21);
    }
    __ZN3WTF8fastFreeEPv(i11);
   }
   i21 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i10 = i21 | 0;
     i20 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i10 >> 2] = i20;
      break;
     }
    }
   } while (0);
   if ((i5 | 0) == 0) {
    i13 = 0;
   } else {
    i22 = i12;
    break;
   }
   __ZN7WebCore9CSSParserD1Ev(i4);
   STACKTOP = i3;
   return i13 | 0;
  } else {
   i22 = i7;
  }
 } while (0);
 i7 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore10MediaQueryEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i7, i8 + 1 | 0);
  HEAP32[(HEAP32[i7 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i22;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i13 = 1;
  __ZN7WebCore9CSSParserD1Ev(i4);
  STACKTOP = i3;
  return i13 | 0;
 } else {
  HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] = i22;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i13 = 1;
  __ZN7WebCore9CSSParserD1Ev(i4);
  STACKTOP = i3;
  return i13 | 0;
 }
 return 0;
}
function __ZNK7WebCore13MediaQuerySet9mediaTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 HEAP32[i4 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i4 + 12 | 0] = 1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 i8 = i2 + 16 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) != 0) {
   i10 = i2 + 8 | 0;
   i11 = i5 | 0;
   i12 = 0;
   i13 = 1;
   i14 = i9;
   while (1) {
    if (i13) {
     i15 = i14;
    } else {
     __ZN3WTF13StringBuilder6appendEPKhj(i4, H_BASE + 8 | 0, 2);
     i15 = HEAP32[i8 >> 2] | 0;
    }
    if (i15 >>> 0 <= i12 >>> 0) {
     break;
    }
    __ZNK7WebCore10MediaQuery7cssTextEv(i5, HEAP32[(HEAP32[i10 >> 2] | 0) + (i12 << 2) >> 2] | 0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i4, i5);
    i16 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i17 = i16 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i18 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i17 >> 2] = i18;
       break;
      }
     }
    } while (0);
    i16 = i12 + 1 | 0;
    i18 = HEAP32[i8 >> 2] | 0;
    if (i16 >>> 0 < i18 >>> 0) {
     i12 = i16;
     i13 = 0;
     i14 = i18;
    } else {
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i4);
 i8 = HEAP32[i6 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i4);
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i19 = i4;
   i20 = 15;
  }
 } else {
  HEAP32[i1 >> 2] = i8;
  i19 = i8;
  i20 = 15;
 }
 if ((i20 | 0) == 15) {
  i20 = i19 | 0;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
 }
 i20 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   i7 = i20 | 0;
   i19 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i20);
    break;
   } else {
    HEAP32[i7 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i20 = HEAP32[i6 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i20 | 0;
 i19 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i20);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i19;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore13MediaQuerySetC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] & 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2 | i4;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2] & -2 | i4;
 i4 = i2 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i6 >> 2] = i1 >>> 2;
 i6 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  _memset(i6 | 0, 0, HEAP32[i7 >> 2] << 2 | 0) | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  return;
 }
 i6 = i2 + 8 | 0;
 i2 = 0;
 while (1) {
  if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 9;
   break;
  }
  i1 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  __ZN7WebCore10MediaQueryC1ERKS0_(i9, i3);
  i3 = i1 + (i2 << 2) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9;
  if ((i1 | 0) != 0) {
   __ZN7WebCore10MediaQueryD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
  i1 = i2 + 1 | 0;
  if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
   i2 = i1;
  } else {
   i8 = 15;
   break;
  }
 }
 if ((i8 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 15) {
  return;
 }
}
function __ZN7WebCore13MediaQuerySetC1ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = 1;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[i3 >> 2] & 1;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2 | i4;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2] & -2 | i4;
 i4 = i2 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 16 | 0;
 HEAP32[i7 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 if (i3 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
 HEAP32[i6 >> 2] = i1 >>> 2;
 i6 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i6 | 0) != 0) {
  _memset(i6 | 0, 0, HEAP32[i7 >> 2] << 2 | 0) | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  return;
 }
 i6 = i2 + 8 | 0;
 i2 = 0;
 while (1) {
  if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i8 = 9;
   break;
  }
  i1 = HEAP32[i5 >> 2] | 0;
  i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i9 = __ZN3WTF10fastMallocEj(20) | 0;
  __ZN7WebCore10MediaQueryC1ERKS0_(i9, i3);
  i3 = i1 + (i2 << 2) | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i9;
  if ((i1 | 0) != 0) {
   __ZN7WebCore10MediaQueryD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  }
  i1 = i2 + 1 | 0;
  if (i1 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
   i2 = i1;
  } else {
   i8 = 15;
   break;
  }
 }
 if ((i8 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 15) {
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
function __ZN7WebCore9MediaList8reattachEPNS_13MediaQuerySetE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  return;
 }
 i4 = i2 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = i5;
 if ((i3 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i3 << 2) | 0;
  i3 = i7;
  while (1) {
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i2 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13MediaQuerySet13addMediaQueryEN3WTF10PassOwnPtrINS_10MediaQueryEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 12 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6OwnPtrIN7WebCore10MediaQueryEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i3, i5 + 1 | 0);
  i1 = (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] << 2) | 0;
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 >> 2] = i7;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 } else {
  i7 = (HEAP32[i3 >> 2] | 0) + (i5 << 2) | 0;
  i5 = i2 | 0;
  i2 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 >> 2] = i2;
  i8 = HEAP32[i4 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i4 >> 2] = i9;
  return;
 }
}
function __ZN7WebCore9MediaListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  return;
 }
 i4 = i1 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = i5;
 if ((i3 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i3 << 2) | 0;
  i3 = i7;
  while (1) {
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore9MediaListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  return;
 }
 i4 = i1 + 16 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i6 = i5;
 if ((i3 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i3 << 2) | 0;
  i3 = i7;
  while (1) {
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorINS_6OwnPtrIN7WebCore10MediaQueryEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore13MediaQuerySetC2ERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i3 & 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 if (__ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(i1, i2) | 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 16 | 0);
 __ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(i1, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13MediaQuerySetC1ERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i3 & 1;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 HEAP32[i1 + 16 >> 2] = 0;
 if (__ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(i1, i2) | 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 16 | 0);
 __ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(i1, i5) | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9MediaList12setMediaTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeC1EPNS_7CSSRuleE(i5, HEAP32[i1 + 12 >> 2] | 0);
 do {
  if (__ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE(HEAP32[i1 + 4 >> 2] | 0, i2) | 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore13CSSStyleSheet9didMutateEv(i6);
  } else {
   HEAP32[i3 >> 2] = 12;
  }
 } while (0);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9MediaList12deleteMediumERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeC1EPNS_7CSSRuleE(i5, HEAP32[i1 + 12 >> 2] | 0);
 do {
  if (__ZN7WebCore13MediaQuerySet6removeERKN3WTF6StringE(HEAP32[i1 + 4 >> 2] | 0, i2) | 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore13CSSStyleSheet9didMutateEv(i6);
  } else {
   HEAP32[i3 >> 2] = 8;
  }
 } while (0);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9MediaList12appendMediumERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeC1EPNS_7CSSRuleE(i5, HEAP32[i1 + 12 >> 2] | 0);
 do {
  if (__ZN7WebCore13MediaQuerySet3addERKN3WTF6StringE(HEAP32[i1 + 4 >> 2] | 0, i2) | 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore13CSSStyleSheet9didMutateEv(i6);
  } else {
   HEAP32[i3 >> 2] = 5;
  }
 } while (0);
 __ZN7WebCore13CSSStyleSheet17RuleMutationScopeD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13MediaQuerySetD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   }
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
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore13MediaQuerySetD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore10MediaQueryD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
   }
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
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZNK7WebCore9MediaList4itemEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((HEAP32[i4 + 16 >> 2] | 0) >>> 0 > i3 >>> 0) {
  __ZNK7WebCore10MediaQuery7cssTextEv(i1, HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + (i3 << 2) >> 2] | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_13CSSStyleSheetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore9MediaListC1EPNS_13MediaQuerySetEPNS_13CSSStyleSheetE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 8 >> 2] = i3;
 HEAP32[i1 + 12 >> 2] = 0;
 return;
}
function __ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_7CSSRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function __ZN7WebCore9MediaListC1EPNS_13MediaQuerySetEPNS_7CSSRuleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i4 = i2 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i3;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore13MediaQuerySetC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore13MediaQuerySetC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 1;
 _memset(i1 + 4 | 0, 0, 16) | 0;
 return;
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
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9MediaListD2Ev,b0,__ZN7WebCore13MediaQuerySetD2Ev,b0,__ZN7WebCore13MediaQuerySetC2Ev,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore13MediaQuerySetC2ERKS0_,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3,__ZN7WebCore13MediaQuerySetC2ERKN3WTF6StringEb,b3,__ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_13CSSStyleSheetE,b3,__ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_7CSSRuleE,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore9MediaList12appendMediumERKN3WTF6StringERi","__ZN7WebCore9MediaList12setMediaTextERKN3WTF6StringERi","__ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_13CSSStyleSheetE","__ZN7WebCore13MediaQuerySet3addERKN3WTF6StringE","__ZN7WebCore13MediaQuerySetC2ERKN3WTF6StringEb","_memset","__ZN7WebCore9MediaListC2EPNS_13MediaQuerySetEPNS_7CSSRuleE","_memcpy","__ZN7WebCore13MediaQuerySet6removeERKN3WTF6StringE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore9MediaListD2Ev","__ZN7WebCore9MediaList8reattachEPNS_13MediaQuerySetE","__ZN3WTF6VectorINS_6OwnPtrIN7WebCore10MediaQueryEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore13MediaQuerySetC2Ev","__ZN7WebCore9MediaList12deleteMediumERKN3WTF6StringERi","_memmove","__ZN7WebCore13MediaQuerySet13addMediaQueryEN3WTF10PassOwnPtrINS_10MediaQueryEEE","__ZN7WebCore13MediaQuerySet5parseERKN3WTF6StringE","__ZN7WebCore13MediaQuerySetC2ERKS0_","__ZNK7WebCore9MediaList4itemEj","__ZN7WebCore13MediaQuerySetD2Ev","__ZNK7WebCore13MediaQuerySet9mediaTextEv"]

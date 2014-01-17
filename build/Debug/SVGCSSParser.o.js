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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9CSSParser13parseSVGValueENS_13CSSPropertyIDEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, d69 = +0, i70 = 0, i71 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i4 + 208 | 0;
 i32 = i4 + 216 | 0;
 i33 = i4 + 224 | 0;
 i34 = i4 + 232 | 0;
 i35 = i4 + 240 | 0;
 i36 = i1 + 92 | 0;
 i37 = HEAP32[i36 >> 2] | 0;
 i38 = i37 | 0;
 i39 = HEAP32[i38 >> 2] | 0;
 i40 = i37 + 16 | 0;
 if (i39 >>> 0 >= (HEAP32[i40 >> 2] | 0) >>> 0) {
  i41 = 0;
  STACKTOP = i4;
  return i41 | 0;
 }
 i42 = i37 + 8 | 0;
 i43 = HEAP32[i42 >> 2] | 0;
 i44 = i43 + (i39 << 5) | 0;
 if ((i44 | 0) == 0) {
  i41 = 0;
  STACKTOP = i4;
  return i41 | 0;
 }
 i45 = HEAP32[i44 >> 2] | 0;
 L7 : do {
  switch (i2 | 0) {
  case 405:
   {
    if ((i45 | 0) == 142 | (i45 | 0) == 143 | (i45 | 0) == 269) {
     i46 = 158;
     break L7;
    }
    if ((i45 - 738 | 0) >>> 0 < 8 >>> 0) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 406:
   {
    if ((i45 | 0) > 144) {
     i46 = 158;
     break L7;
    }
    if ((i45 | 0) == 142 | (i45 | 0) == 144) {
     i46 = 158;
     break L7;
    }
    if (__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i1, i44, 12, 2, 1) | 0) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 407:
   {
    if ((i45 | 0) == 143 | (i45 | 0) == 269) {
     i46 = 158;
     break L7;
    }
    if ((i45 - 746 | 0) >>> 0 < 3 >>> 0 | (i45 - 740 | 0) >>> 0 < 6 >>> 0) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 377:
   {
    if ((i45 | 0) == 731) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 394:
  case 393:
  case 392:
  case 376:
   {
    if ((i45 | 0) == 3) {
     i46 = 158;
     break L7;
    }
    if ((HEAP32[i43 + (i39 << 5) + 24 >> 2] | 0) != 20) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    }
    i47 = i43 + (i39 << 5) + 8 | 0;
    i48 = i47;
    if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
     __ZN3WTF6StringC1EPKtj(i19, HEAP32[i47 >> 2] | 0, HEAP32[i48 + 4 >> 2] | 0);
    } else {
     __ZN3WTF6StringC1EPKhj(i19, HEAP32[i47 >> 2] | 0, HEAP32[i48 + 4 >> 2] | 0);
    }
    i48 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1ERKN3WTF6StringENS0_9UnitTypesE(i48, i19, 20);
    i47 = i48;
    i49 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i49 | 0) != 0) {
      i50 = i49 | 0;
      i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       break;
      } else {
       HEAP32[i50 >> 2] = i51;
       break;
      }
     }
    } while (0);
    if ((i48 | 0) == 0) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    } else {
     i49 = HEAP32[i36 >> 2] | 0;
     HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) + 1;
     i52 = i47;
     break L7;
    }
    break;
   }
  case 375:
  case 390:
   {
    if ((i45 - 568 | 0) >>> 0 < 2 >>> 0) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 402:
   {
    if (__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i1, i44, 1026, 2, 1) | 0) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 401:
   {
    if ((i45 | 0) == 482 | (i45 | 0) == 736 | (i45 | 0) == 737) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 400:
   {
    if ((i45 | 0) == 169 | (i45 | 0) == 482 | (i45 | 0) == 735) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 403:
  case 389:
  case 383:
  case 380:
   {
    if ((i45 | 0) != 0) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    }
    if (__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i1, i44, 6, 2, 1) | 0) {
     i46 = 159;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 396:
   {
    if ((i45 | 0) == 269 | (i45 | 0) == 522 | (i45 | 0) == 524 | (i45 | 0) == 734) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 387:
   {
    if ((i45 | 0) == 269 | (i45 | 0) == 522 | (i45 | 0) == 565) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 373:
   {
    if ((i45 | 0) == 269 | (i45 | 0) == 361 | (i45 | 0) == 749) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 386:
   {
    if ((i45 | 0) == 269 | (i45 | 0) == 527) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 384:
  case 385:
   {
    if ((i45 | 0) == 269 | (i45 | 0) == 527 | (i45 | 0) == 733) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 411:
   {
    if ((i45 | 0) == 143 | (i45 | 0) == 369 | (i45 | 0) == 370) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 409:
   {
    if ((i45 | 0) == 269) {
     i46 = 158;
    } else {
     i46 = 36;
    }
    break;
   }
  case 408:
   {
    i46 = 36;
    break;
   }
  case 388:
  case 397:
   {
    L65 : do {
     if ((i45 | 0) == 3) {
      i49 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i17 >> 2] = 101;
      i51 = i18 | 0;
      HEAP32[i51 >> 2] = 0;
      __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i49, i17, i18);
      i50 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i50 | 0) != 0) {
        i51 = i50 | 0;
        i53 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
        if ((i53 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i50);
         break;
        } else {
         HEAP32[i51 >> 2] = i53;
         break;
        }
       }
      } while (0);
      i54 = i49;
      i46 = 90;
     } else if ((i45 | 0) == 122) {
      i50 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i15 >> 2] = 102;
      i53 = i16 | 0;
      HEAP32[i53 >> 2] = 0;
      __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i50, i15, i16);
      i51 = HEAP32[i53 >> 2] | 0;
      do {
       if ((i51 | 0) != 0) {
        i53 = i51 | 0;
        i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
        if ((i55 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i51);
         break;
        } else {
         HEAP32[i53 >> 2] = i55;
         break;
        }
       }
      } while (0);
      i54 = i50;
      i46 = 90;
     } else {
      if ((i45 - 93 | 0) >>> 0 < 28 >>> 0 | (i45 | 0) == 15) {
       __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i21, 0);
       i51 = i21 | 0;
       i49 = HEAP32[i51 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i49 >> 2] | 0) + 92 >> 2] & 1](i20, i49, i45);
       i49 = __ZN3WTF10fastMallocEj(28) | 0;
       HEAP32[i13 >> 2] = 1;
       i55 = i14 | 0;
       HEAP32[i55 >> 2] = 0;
       __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i49, i13, i14);
       i53 = HEAP32[i55 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i55 = i53 | 0;
         i56 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i56 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i55 >> 2] = i56;
          break;
         }
        }
       } while (0);
       i53 = i49 + 8 | 0;
       i50 = i20;
       HEAP32[i53 >> 2] = HEAP32[i50 >> 2];
       HEAP8[i53 + 4 | 0] = HEAP8[i50 + 4 | 0] | 0;
       i50 = i49;
       i53 = HEAP32[i51 >> 2] | 0;
       if ((i53 | 0) == 0) {
        i54 = i50;
        i46 = 90;
        break;
       }
       i56 = i53 + 4 | 0;
       i53 = i56 | 0;
       i55 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
       if ((i55 | 0) != 0) {
        HEAP32[i53 >> 2] = i55;
        i54 = i50;
        i46 = 90;
        break;
       }
       i55 = i56 - 4 | 0;
       if ((i55 | 0) == 0) {
        i54 = i50;
        i46 = 90;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 1](i55);
       i54 = i50;
       i46 = 90;
       break;
      }
      if ((HEAP32[i43 + (i39 << 5) + 24 >> 2] | 0) != 20) {
       __ZN7WebCore9CSSParser13parseSVGPaintEv(i26, i1);
       i50 = i26 | 0;
       i55 = HEAP32[i50 >> 2] | 0;
       HEAP32[i50 >> 2] = 0;
       i54 = i55;
       i46 = 90;
       break;
      }
      HEAP32[i22 >> 2] = 0;
      i55 = (HEAP32[i38 >> 2] | 0) + 1 | 0;
      HEAP32[i38 >> 2] = i55;
      L98 : do {
       if (i55 >>> 0 < (HEAP32[i40 >> 2] | 0) >>> 0) {
        if (((HEAP32[i42 >> 2] | 0) + (i55 << 5) | 0) == 0) {
         break;
        }
        i50 = HEAP32[i36 >> 2] | 0;
        i56 = HEAP32[i50 >> 2] | 0;
        if (i56 >>> 0 < (HEAP32[i50 + 16 >> 2] | 0) >>> 0) {
         i57 = (HEAP32[i50 + 8 >> 2] | 0) + (i56 << 5) | 0;
        } else {
         i57 = 0;
        }
        do {
         if (__ZN7WebCore9CSSParser19parseColorFromValueEPNS_14CSSParserValueERj(i1, i57, i22) | 0) {
          i56 = i43 + (i39 << 5) + 8 | 0;
          i50 = i56;
          if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
           __ZN3WTF6StringC1EPKtj(i23, HEAP32[i56 >> 2] | 0, HEAP32[i50 + 4 >> 2] | 0);
          } else {
           __ZN3WTF6StringC1EPKhj(i23, HEAP32[i56 >> 2] | 0, HEAP32[i50 + 4 >> 2] | 0);
          }
          i50 = HEAP32[i22 >> 2] | 0;
          i56 = __ZN3WTF10fastMallocEj(28) | 0;
          HEAP32[i12 >> 2] = 105;
          __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i56, i12, i23);
          HEAP32[i56 + 8 >> 2] = i50;
          HEAP8[i56 + 12 | 0] = 1;
          i50 = i56;
          i56 = HEAP32[i23 >> 2] | 0;
          if ((i56 | 0) == 0) {
           i58 = i50;
           break;
          }
          i53 = i56 | 0;
          i59 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
          if ((i59 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i56);
           i58 = i50;
           break;
          } else {
           HEAP32[i53 >> 2] = i59;
           i58 = i50;
           break;
          }
         } else {
          i50 = HEAP32[i36 >> 2] | 0;
          if ((HEAP32[(HEAP32[i50 + 8 >> 2] | 0) + (HEAP32[i50 >> 2] << 5) >> 2] | 0) != 3) {
           break L98;
          }
          i50 = i43 + (i39 << 5) + 8 | 0;
          i59 = i50;
          if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
           __ZN3WTF6StringC1EPKtj(i24, HEAP32[i50 >> 2] | 0, HEAP32[i59 + 4 >> 2] | 0);
          } else {
           __ZN3WTF6StringC1EPKhj(i24, HEAP32[i50 >> 2] | 0, HEAP32[i59 + 4 >> 2] | 0);
          }
          i59 = __ZN3WTF10fastMallocEj(28) | 0;
          HEAP32[i11 >> 2] = 103;
          __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i59, i11, i24);
          i50 = i59;
          i59 = HEAP32[i24 >> 2] | 0;
          if ((i59 | 0) == 0) {
           i58 = i50;
           break;
          }
          i53 = i59 | 0;
          i56 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
          if ((i56 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i59);
           i58 = i50;
           break;
          } else {
           HEAP32[i53 >> 2] = i56;
           i58 = i50;
           break;
          }
         }
        } while (0);
        if ((i58 | 0) != 0) {
         i60 = i58;
         break L65;
        }
       }
      } while (0);
      i55 = i43 + (i39 << 5) + 8 | 0;
      i51 = i55;
      if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
       __ZN3WTF6StringC1EPKtj(i25, HEAP32[i55 >> 2] | 0, HEAP32[i51 + 4 >> 2] | 0);
      } else {
       __ZN3WTF6StringC1EPKhj(i25, HEAP32[i55 >> 2] | 0, HEAP32[i51 + 4 >> 2] | 0);
      }
      i51 = __ZN3WTF10fastMallocEj(28) | 0;
      HEAP32[i10 >> 2] = 107;
      __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i51, i10, i25);
      i55 = i51;
      i51 = HEAP32[i25 >> 2] | 0;
      if ((i51 | 0) == 0) {
       i54 = i55;
       i46 = 90;
       break;
      }
      i49 = i51 | 0;
      i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i51);
       i54 = i55;
       i46 = 90;
       break;
      } else {
       HEAP32[i49 >> 2] = i50;
       i54 = i55;
       i46 = 90;
       break;
      }
     }
    } while (0);
    do {
     if ((i46 | 0) == 90) {
      if ((i54 | 0) == 0) {
       i41 = 0;
      } else {
       i60 = i54;
       break;
      }
      STACKTOP = i4;
      return i41 | 0;
     }
    } while (0);
    i47 = HEAP32[i36 >> 2] | 0;
    HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
    i52 = i60;
    break;
   }
  case 382:
  case 379:
  case 381:
   {
    do {
     if ((i45 - 73 | 0) >>> 0 < 48 >>> 0 | (i45 - 602 | 0) >>> 0 < 129 >>> 0) {
      i47 = i43 + (i39 << 5) + 8 | 0;
      i48 = i47;
      if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
       __ZN3WTF6StringC1EPKtj(i27, HEAP32[i47 >> 2] | 0, HEAP32[i48 + 4 >> 2] | 0);
      } else {
       __ZN3WTF6StringC1EPKhj(i27, HEAP32[i47 >> 2] | 0, HEAP32[i48 + 4 >> 2] | 0);
      }
      i48 = i9;
      i47 = __ZN3WTF10fastMallocEj(20) | 0;
      HEAP32[i8 >> 2] = 1;
      __ZN7WebCore8SVGColorC1ERKNS0_12SVGColorTypeE(i47, i8);
      __ZN7WebCore8SVGColor23colorFromRGBColorStringERKN3WTF6StringE(i9, i27);
      i55 = i47 + 8 | 0;
      HEAP32[i55 >> 2] = HEAP32[i48 >> 2];
      HEAP8[i55 + 4 | 0] = HEAP8[i48 + 4 | 0] | 0;
      i48 = i47;
      i47 = HEAP32[i27 >> 2] | 0;
      if ((i47 | 0) == 0) {
       i61 = i48;
       break;
      }
      i55 = i47 | 0;
      i50 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i50 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i47);
       i61 = i48;
       break;
      } else {
       HEAP32[i55 >> 2] = i50;
       i61 = i48;
       break;
      }
     } else {
      if ((i45 | 0) == 122) {
       i48 = __ZN3WTF10fastMallocEj(20) | 0;
       HEAP32[i7 >> 2] = 3;
       __ZN7WebCore8SVGColorC1ERKNS0_12SVGColorTypeE(i48, i7);
       i61 = i48;
       break;
      }
      HEAP32[i6 >> 2] = 0;
      i48 = HEAP32[i38 >> 2] | 0;
      if (i48 >>> 0 < (HEAP32[i40 >> 2] | 0) >>> 0) {
       i62 = (HEAP32[i42 >> 2] | 0) + (i48 << 5) | 0;
      } else {
       i62 = 0;
      }
      if (__ZN7WebCore9CSSParser19parseColorFromValueEPNS_14CSSParserValueERj(i1, i62, i6) | 0) {
       i48 = HEAP32[i6 >> 2] | 0;
       i50 = __ZN3WTF10fastMallocEj(20) | 0;
       HEAP32[i5 >> 2] = 1;
       __ZN7WebCore8SVGColorC1ERKNS0_12SVGColorTypeE(i50, i5);
       HEAP32[i50 + 8 >> 2] = i48;
       HEAP8[i50 + 12 | 0] = 1;
       i61 = i50;
       break;
      } else {
       i41 = 0;
       STACKTOP = i4;
       return i41 | 0;
      }
     }
    } while (0);
    if ((i61 | 0) == 0) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    } else {
     i50 = HEAP32[i36 >> 2] | 0;
     HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
     i52 = i61;
     break L7;
    }
    break;
   }
  case 412:
   {
    if ((i45 | 0) == 3 | (i45 | 0) == 750) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 404:
  case 399:
   {
    if (__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i1, i44, 12, 2, 1) | 0) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 398:
   {
    if ((i45 | 0) == 3) {
     i46 = 158;
     break L7;
    }
    __ZN7WebCore9CSSParser23parseSVGStrokeDasharrayEv(i28, i1);
    i50 = i28 | 0;
    i48 = HEAP32[i50 >> 2] | 0;
    HEAP32[i50 >> 2] = 0;
    i63 = i48;
    i46 = 181;
    break;
   }
  case 410:
   {
    if ((i45 | 0) == 32 | (i45 | 0) == 269) {
     i46 = 158;
     break L7;
    }
    if (__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i1, i44, 8, 2, 1) | 0) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 374:
  case 378:
   {
    if ((i45 | 0) == 3) {
     i46 = 158;
     break L7;
    }
    i48 = i43 + (i39 << 5) + 24 | 0;
    if ((HEAP32[i48 >> 2] | 0) != 20) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    }
    i50 = i43 + (i39 << 5) + 8 | 0;
    i55 = i50;
    if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
     __ZN3WTF6StringC1EPKtj(i29, HEAP32[i50 >> 2] | 0, HEAP32[i55 + 4 >> 2] | 0);
    } else {
     __ZN3WTF6StringC1EPKhj(i29, HEAP32[i50 >> 2] | 0, HEAP32[i55 + 4 >> 2] | 0);
    }
    i55 = HEAP32[i48 >> 2] | 0;
    i48 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1ERKN3WTF6StringENS0_9UnitTypesE(i48, i29, i55);
    i55 = i48;
    i50 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i50 | 0) != 0) {
      i47 = i50 | 0;
      i49 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i49 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i50);
       break;
      } else {
       HEAP32[i47 >> 2] = i49;
       break;
      }
     }
    } while (0);
    if ((i48 | 0) == 0) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    } else {
     i50 = HEAP32[i36 >> 2] | 0;
     HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 1;
     i52 = i55;
     break L7;
    }
    break;
   }
  case 414:
   {
    if ((i45 | 0) == 3) {
     i46 = 158;
     break L7;
    }
    __ZN7WebCore9CSSParser11parseShadowEPNS_18CSSParserValueListENS_13CSSPropertyIDE(i30, i1, i37, 414);
    i50 = i30 | 0;
    i49 = HEAP32[i50 >> 2] | 0;
    HEAP32[i50 >> 2] = 0;
    if ((i49 | 0) == 0) {
     i41 = 0;
     STACKTOP = i4;
     return i41 | 0;
    }
    i50 = i31 | 0;
    HEAP32[i50 >> 2] = i49;
    __ZN7WebCore9CSSParser11addPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEbb(i1, 414, i31, i3, 0);
    i49 = HEAP32[i50 >> 2] | 0;
    if ((i49 | 0) == 0) {
     i64 = HEAP32[i36 >> 2] | 0;
     i65 = i64 | 0;
     i66 = HEAP32[i65 >> 2] | 0;
     i67 = i66 + 1 | 0;
     HEAP32[i65 >> 2] = i67;
     STACKTOP = i4;
     return 1;
    }
    i50 = i49 | 0;
    i47 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
    if ((i47 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i49);
     i64 = HEAP32[i36 >> 2] | 0;
     i65 = i64 | 0;
     i66 = HEAP32[i65 >> 2] | 0;
     i67 = i66 + 1 | 0;
     HEAP32[i65 >> 2] = i67;
     STACKTOP = i4;
     return 1;
    } else {
     HEAP32[i50 >> 2] = i47;
     i64 = HEAP32[i36 >> 2] | 0;
     i65 = i64 | 0;
     i66 = HEAP32[i65 >> 2] | 0;
     i67 = i66 + 1 | 0;
     HEAP32[i65 >> 2] = i67;
     STACKTOP = i4;
     return 1;
    }
    break;
   }
  case 395:
   {
    if ((i45 | 0) == 72 | (i45 | 0) == 110) {
     i46 = 158;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  case 391:
   {
    i47 = i1 + 2164 | 0;
    i50 = HEAP32[i47 >> 2] | 0;
    HEAP32[i47 >> 2] = i50 + 1;
    if ((i50 | 0) == 0) {
     HEAP32[i1 + 2168 >> 2] = 391;
    }
    i50 = i1 + 2172 | 0;
    HEAP8[i50] = 1;
    L209 : do {
     if (__ZN7WebCore9CSSParser10parseValueENS_13CSSPropertyIDEb(i1, 394, i3) | 0) {
      i49 = HEAP32[i36 >> 2] | 0;
      i51 = HEAP32[i49 >> 2] | 0;
      do {
       if (i51 >>> 0 < (HEAP32[i49 + 16 >> 2] | 0) >>> 0) {
        if (((HEAP32[i49 + 8 >> 2] | 0) + (i51 << 5) | 0) == 0) {
         break;
        }
        __ZN7WebCore9CSSParser22rollbackLastPropertiesEi(i1, 1);
        i68 = 0;
        break L209;
       }
      } while (0);
      i51 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 104 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
       return 0;
      }
      i49 = HEAP32[(HEAP32[i1 + 96 >> 2] | 0) + (i51 << 3) + 4 >> 2] | 0;
      i51 = i32 | 0;
      HEAP32[i51 >> 2] = i49;
      i56 = (i49 | 0) == 0;
      if (!i56) {
       i53 = i49 | 0;
       HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
      }
      __ZN7WebCore9CSSParser11addPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEbb(i1, 393, i32, i3, 0);
      i53 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i53 | 0) != 0) {
        i51 = i53 | 0;
        i59 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
        if ((i59 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i53);
         break;
        } else {
         HEAP32[i51 >> 2] = i59;
         break;
        }
       }
      } while (0);
      i53 = i33 | 0;
      HEAP32[i53 >> 2] = i49;
      if (!i56) {
       i59 = i49 | 0;
       HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 1;
      }
      __ZN7WebCore9CSSParser11addPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEbb(i1, 392, i33, i3, 0);
      i59 = HEAP32[i53 >> 2] | 0;
      do {
       if ((i59 | 0) != 0) {
        i53 = i59 | 0;
        i51 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
        if ((i51 | 0) == 0) {
         __ZN7WebCore8CSSValue7destroyEv(i59);
         break;
        } else {
         HEAP32[i53 >> 2] = i51;
         break;
        }
       }
      } while (0);
      HEAP8[i50] = 0;
      i68 = 1;
     } else {
      i68 = 0;
     }
    } while (0);
    i50 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
    HEAP32[i47 >> 2] = i50;
    if ((i50 | 0) != 0) {
     i41 = i68;
     STACKTOP = i4;
     return i41 | 0;
    }
    HEAP32[i1 + 2168 >> 2] = 0;
    i41 = i68;
    STACKTOP = i4;
    return i41 | 0;
   }
  case 413:
   {
    if ((i45 - 533 | 0) >>> 0 < 3 >>> 0 | (i45 | 0) == 530 | (i45 | 0) == 531 | (i45 | 0) == 532) {
     i46 = 157;
     break L7;
    } else {
     i41 = 0;
    }
    STACKTOP = i4;
    return i41 | 0;
   }
  default:
   {
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   }
  }
 } while (0);
 do {
  if ((i46 | 0) == 36) {
   i68 = HEAP32[i43 + (i39 << 5) + 24 >> 2] | 0;
   if (!((i68 | 0) == 11 | (i68 | 0) == 1)) {
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   }
   d69 = +HEAPF64[i43 + (i39 << 5) + 8 >> 3];
   i68 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i68, d69, 11);
   if ((i68 | 0) == 0) {
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   } else {
    i33 = HEAP32[i36 >> 2] | 0;
    HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
    i52 = i68;
    break;
   }
  } else if ((i46 | 0) == 157) {
   if ((i45 | 0) == 0) {
    i46 = 159;
   } else {
    i46 = 158;
   }
  }
 } while (0);
 do {
  if ((i46 | 0) == 158) {
   i68 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i68, i45);
   i70 = i68;
   i46 = 171;
  } else if ((i46 | 0) == 159) {
   i68 = i43 + (i39 << 5) + 24 | 0;
   i33 = HEAP32[i68 >> 2] | 0;
   if ((i33 | 0) != 19) {
    if ((i33 - 1 | 0) >>> 0 < 17 >>> 0) {
     d69 = +HEAPF64[i43 + (i39 << 5) + 8 >> 3];
     i32 = __ZN3WTF10fastMallocEj(16) | 0;
     __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i32, d69, i33);
     i70 = i32;
     i46 = 171;
     break;
    }
    if ((i33 | 0) <= 1048577) {
     i70 = 0;
     i46 = 171;
     break;
    }
    d69 = +HEAPF64[i43 + (i39 << 5) + 8 >> 3];
    i33 = __ZN3WTF10fastMallocEj(16) | 0;
    __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i33, d69, 3);
    i32 = i33 + 4 | 0;
    HEAP32[i32 >> 2] = HEAP32[i32 >> 2] | 1024;
    i70 = i33;
    i46 = 171;
    break;
   }
   i33 = i43 + (i39 << 5) + 8 | 0;
   i32 = i33;
   if ((HEAP8[i43 + (i39 << 5) + 16 | 0] & 1) == 0) {
    __ZN3WTF6StringC1EPKtj(i34, HEAP32[i33 >> 2] | 0, HEAP32[i32 + 4 >> 2] | 0);
   } else {
    __ZN3WTF6StringC1EPKhj(i34, HEAP32[i33 >> 2] | 0, HEAP32[i32 + 4 >> 2] | 0);
   }
   i32 = HEAP32[i68 >> 2] | 0;
   i68 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1ERKN3WTF6StringENS0_9UnitTypesE(i68, i34, i32);
   i32 = i68;
   i68 = HEAP32[i34 >> 2] | 0;
   if ((i68 | 0) == 0) {
    i70 = i32;
    i46 = 171;
    break;
   }
   i33 = i68 | 0;
   i67 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
   if ((i67 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i68);
    i70 = i32;
    i46 = 171;
    break;
   } else {
    HEAP32[i33 >> 2] = i67;
    i70 = i32;
    i46 = 171;
    break;
   }
  }
 } while (0);
 if ((i46 | 0) == 171) {
  do {
   if (__ZN7WebCore9CSSParser13isCalculationEPNS_14CSSParserValueE(i1, i44) | 0) {
    i34 = i1 + 2280 | 0;
    i39 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    do {
     if ((i39 | 0) != 0) {
      i34 = i39 | 0;
      i43 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
      if ((i43 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i39 | 0);
       break;
      } else {
       HEAP32[i34 >> 2] = i43;
       break;
      }
     }
    } while (0);
    if ((i70 | 0) == 0) {
     i71 = 0;
     break;
    }
    i39 = i70 | 0;
    i47 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    if ((i47 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i70);
     i71 = 0;
     break;
    } else {
     HEAP32[i39 >> 2] = i47;
     i71 = 0;
     break;
    }
   } else {
    i71 = i70;
   }
  } while (0);
  i70 = HEAP32[i36 >> 2] | 0;
  HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) + 1;
  i63 = i71;
  i46 = 181;
 }
 do {
  if ((i46 | 0) == 181) {
   if ((i63 | 0) == 0) {
    i41 = 0;
   } else {
    i52 = i63;
    break;
   }
   STACKTOP = i4;
   return i41 | 0;
  }
 } while (0);
 i63 = HEAP32[i36 >> 2] | 0;
 i36 = HEAP32[i63 >> 2] | 0;
 do {
  if (i36 >>> 0 < (HEAP32[i63 + 16 >> 2] | 0) >>> 0) {
   if (((HEAP32[i63 + 8 >> 2] | 0) + (i36 << 5) | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 2164 >> 2] | 0) != 0) {
    break;
   }
   if ((i52 | 0) == 0) {
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   }
   i46 = i52 | 0;
   i71 = (HEAP32[i46 >> 2] | 0) - 1 | 0;
   if ((i71 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i52);
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   } else {
    HEAP32[i46 >> 2] = i71;
    i41 = 0;
    STACKTOP = i4;
    return i41 | 0;
   }
  }
 } while (0);
 i36 = i35 | 0;
 HEAP32[i36 >> 2] = i52;
 __ZN7WebCore9CSSParser11addPropertyENS_13CSSPropertyIDEN3WTF10PassRefPtrINS_8CSSValueEEEbb(i1, i2, i35, i3, 0);
 i3 = HEAP32[i36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i41 = 1;
  STACKTOP = i4;
  return i41 | 0;
 }
 i36 = i3 | 0;
 i35 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
 if ((i35 | 0) == 0) {
  __ZN7WebCore8CSSValue7destroyEv(i3);
  i41 = 1;
  STACKTOP = i4;
  return i41 | 0;
 } else {
  HEAP32[i36 >> 2] = i35;
  i41 = 1;
  STACKTOP = i4;
  return i41 | 0;
 }
 return 0;
}
function __ZN7WebCore9CSSParser23parseSVGStrokeDasharrayEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = __ZN3WTF10fastMallocEj(36) | 0;
 __ZN7WebCore12CSSValueListC1ENS_8CSSValue18ValueListSeparatorE(i3, 1);
 i4 = i2 + 92 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if (i6 >>> 0 < (HEAP32[i5 + 16 >> 2] | 0) >>> 0) {
   i7 = (HEAP32[i5 + 8 >> 2] | 0) + (i6 << 5) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i3 + 8 | 0;
   i9 = i3 + 16 | 0;
   i10 = i3 + 12 | 0;
   i11 = i8;
   i12 = i8;
   i8 = i7;
   while (1) {
    if (!(__ZN7WebCore9CSSParser9validUnitEPNS_14CSSParserValueENS0_5UnitsENS_13CSSParserModeENS0_31ReleaseParsedCalcValueConditionE(i2, i8, 1036, 2, 1) | 0)) {
     break;
    }
    i7 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i7 | 0) == 0) {
      i13 = HEAP32[i8 + 24 >> 2] | 0;
      if ((i13 - 1 | 0) >>> 0 >= 17 >>> 0) {
       break;
      }
      d14 = +HEAPF64[i8 + 8 >> 3];
      i15 = __ZN3WTF10fastMallocEj(16) | 0;
      __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i15, d14, i13);
      i13 = i15;
      i15 = HEAP32[i9 >> 2] | 0;
      if ((i15 | 0) == (HEAP32[i10 >> 2] | 0)) {
       i16 = i15 + 1 | 0;
       i17 = i16 + (i15 >>> 2) | 0;
       i18 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i18 >>> 0 > i16 >>> 0 ? i18 : i16);
       HEAP32[(HEAP32[i12 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i13;
      } else {
       HEAP32[(HEAP32[i12 >> 2] | 0) + (i15 << 2) >> 2] = i13;
      }
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     } else {
      i13 = __ZN3WTF10fastMallocEj(16) | 0;
      __ZN7WebCore17CSSPrimitiveValueC1ENS_10CSSValueIDE(i13, i7);
      i15 = i13;
      i13 = HEAP32[i9 >> 2] | 0;
      if ((i13 | 0) == (HEAP32[i10 >> 2] | 0)) {
       i16 = i13 + 1 | 0;
       i18 = i16 + (i13 >>> 2) | 0;
       i17 = i18 >>> 0 > 16 >>> 0 ? i18 : 16;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i11, i17 >>> 0 > i16 >>> 0 ? i17 : i16);
       HEAP32[(HEAP32[i12 >> 2] | 0) + (HEAP32[i9 >> 2] << 2) >> 2] = i15;
      } else {
       HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 << 2) >> 2] = i15;
      }
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     }
    } while (0);
    i7 = HEAP32[i4 >> 2] | 0;
    i15 = i7 | 0;
    i13 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i13;
    if (i13 >>> 0 >= (HEAP32[i7 + 16 >> 2] | 0) >>> 0) {
     break L1;
    }
    i15 = HEAP32[i7 + 8 >> 2] | 0;
    i7 = i15 + (i13 << 5) | 0;
    if ((i7 | 0) == 0) {
     break L1;
    }
    if ((HEAP32[i15 + (i13 << 5) + 24 >> 2] | 0) != 1048576) {
     i8 = i7;
     continue;
    }
    if ((HEAP32[i15 + (i13 << 5) + 8 >> 2] | 0) == 44) {
     i13 = HEAP32[i4 >> 2] | 0;
     i15 = i13 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
     HEAP32[i15 >> 2] = i16;
     if (i16 >>> 0 >= (HEAP32[i13 + 16 >> 2] | 0) >>> 0) {
      break L1;
     }
     i19 = (HEAP32[i13 + 8 >> 2] | 0) + (i16 << 5) | 0;
    } else {
     i19 = i7;
    }
    if ((i19 | 0) == 0) {
     break L1;
    } else {
     i8 = i19;
    }
   }
   HEAP32[i1 >> 2] = 0;
   if ((i3 | 0) == 0) {
    return;
   }
   i8 = i3;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i3);
    return;
   } else {
    HEAP32[i8 >> 2] = i9;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZN7WebCore9CSSParser13parseSVGPaintEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = HEAP32[i2 + 92 >> 2] | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if (i10 >>> 0 < (HEAP32[i9 + 16 >> 2] | 0) >>> 0) {
  i11 = (HEAP32[i9 + 8 >> 2] | 0) + (i10 << 5) | 0;
 } else {
  i11 = 0;
 }
 if (__ZN7WebCore9CSSParser19parseColorFromValueEPNS_14CSSParserValueERj(i2, i11, i8) | 0) {
  i11 = HEAP32[i8 >> 2] | 0;
  i8 = __ZN3WTF10fastMallocEj(28) | 0;
  HEAP32[i6 >> 2] = 1;
  i2 = i7 | 0;
  HEAP32[i2 >> 2] = 0;
  __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i8, i6, i7);
  i7 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i2 = i7 | 0;
    i6 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i2 >> 2] = i6;
     break;
    }
   }
  } while (0);
  HEAP32[i8 + 8 >> 2] = i11;
  HEAP8[i8 + 12 | 0] = 1;
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 } else {
  i8 = __ZN3WTF10fastMallocEj(28) | 0;
  HEAP32[i4 >> 2] = 0;
  i11 = i5 | 0;
  HEAP32[i11 >> 2] = 0;
  __ZN7WebCore8SVGPaintC1ERKNS0_12SVGPaintTypeERKN3WTF6StringE(i8, i4, i5);
  i5 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i11 = i5 | 0;
    i4 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i4 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i11 >> 2] = i4;
     break;
    }
   }
  } while (0);
  HEAP32[i1 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
  if (i2 >>> 0 > 4 >>> 0) {
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
   HEAP32[i3 >> 2] = 4;
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
function __ZN7WebCore9CSSParser13parseSVGColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = HEAP32[i2 + 92 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (i7 >>> 0 < (HEAP32[i6 + 16 >> 2] | 0) >>> 0) {
  i8 = (HEAP32[i6 + 8 >> 2] | 0) + (i7 << 5) | 0;
 } else {
  i8 = 0;
 }
 if (__ZN7WebCore9CSSParser19parseColorFromValueEPNS_14CSSParserValueERj(i2, i8, i5) | 0) {
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = __ZN3WTF10fastMallocEj(20) | 0;
  HEAP32[i4 >> 2] = 1;
  __ZN7WebCore8SVGColorC1ERKNS0_12SVGColorTypeE(i5, i4);
  HEAP32[i5 + 8 >> 2] = i8;
  HEAP8[i5 + 12 | 0] = 1;
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
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
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore9CSSParser13parseSVGColorEv","__ZN7WebCore9CSSParser13parseSVGValueENS_13CSSPropertyIDEb","__ZN7WebCore9CSSParser13parseSVGPaintEv","_memset","__ZN3WTF6VectorINS_6RefPtrIN7WebCore8CSSValueEEELj4ENS_15CrashOnOverflowEE15reserveCapacityEj","_memcpy","__ZN7WebCore9CSSParser23parseSVGStrokeDasharrayEv"]

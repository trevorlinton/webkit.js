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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiid(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiid"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore25CubicBezierTimingFunctionE=(H_BASE+8)|0;
  var __ZTVN7WebCore19StepsTimingFunctionE=(H_BASE+72)|0;
  var __ZTVN7WebCore20LinearTimingFunctionE=(H_BASE+40)|0;
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
  var invoke_viiiid=env.invoke_viiiid;
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
function __ZN7WebCore13CSSToStyleMap17mapNinePieceImageENS_13CSSPropertyIDEPNS_8CSSValueERNS_14NinePieceImageE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, d63 = +0, i64 = 0, i65 = 0, d66 = +0, i67 = 0, i68 = 0, d69 = +0, i70 = 0, i71 = 0, d72 = +0, i73 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = i17 | 0;
 i19 = i17;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i3 + 4 >> 2] & 491520) >>> 0 <= 221184 >>> 0) {
  STACKTOP = i5;
  return;
 }
 i20 = (i2 | 0) == 202;
 if (i20) {
  i21 = 46;
 } else {
  i21 = (i2 | 0) == 293 ? 297 : i2;
 }
 i2 = i3 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i22 = i3 + 8 | 0;
  i3 = i1 | 0;
  i23 = i4 | 0;
  i24 = i13 | 0;
  i25 = i10 | 0;
  i26 = i19 + 29 | 0;
  i27 = i17 + 24 | 0;
  i28 = i27;
  i29 = i19 + 21 | 0;
  i30 = i17 + 16 | 0;
  i31 = i30;
  i32 = i19 + 13 | 0;
  i33 = i17 + 8 | 0;
  i34 = i33;
  i35 = i19 + 5 | 0;
  i36 = i17;
  i17 = i6 | 0;
  i37 = i16 + 29 | 0;
  i38 = i14 + 24 | 0;
  i39 = i38;
  i40 = i16 + 21 | 0;
  i41 = i14 + 16 | 0;
  i42 = i41;
  i43 = i16 + 13 | 0;
  i44 = i14 + 8 | 0;
  i45 = i44;
  i46 = i16 + 5 | 0;
  i47 = i14;
  i14 = i7 | 0;
  i48 = 0;
  while (1) {
   i49 = HEAP32[(HEAP32[i22 >> 2] | 0) + (i48 << 2) >> 2] | 0;
   i50 = HEAP32[i49 + 4 >> 2] | 0;
   i51 = i50 & 516096;
   do {
    if ((i51 | 0) == 8192) {
     i52 = 9;
    } else {
     if (((i50 >>> 13 & 63) - 3 | 0) >>> 0 < 5 >>> 0) {
      i52 = 9;
      break;
     }
     if ((i51 | 0) == 90112) {
      __ZN7WebCore13CSSToStyleMap22mapNinePieceImageSliceEPNS_8CSSValueERNS_14NinePieceImageE(0, i49, i4);
      break;
     }
     if ((i50 & 491520) >>> 0 <= 221184 >>> 0) {
      if ((i51 | 0) != 0) {
       break;
      }
      __ZN7WebCore13CSSToStyleMap23mapNinePieceImageRepeatEPNS_8CSSValueERNS_14NinePieceImageE(0, i49, i4);
      break;
     }
     i53 = i49 + 16 | 0;
     i54 = HEAP32[i53 >> 2] | 0;
     if ((i54 | 0) == 0) {
      break;
     }
     i55 = i49 + 8 | 0;
     i56 = HEAP32[HEAP32[i55 >> 2] >> 2] | 0;
     do {
      if ((i56 | 0) == 0) {
       i57 = i54;
      } else {
       if ((HEAP32[i56 + 4 >> 2] & 516096 | 0) != 90112) {
        i57 = i54;
        break;
       }
       __ZN7WebCore13CSSToStyleMap22mapNinePieceImageSliceEPNS_8CSSValueERNS_14NinePieceImageE(0, i56, i4);
       i57 = HEAP32[i53 >> 2] | 0;
      }
     } while (0);
     if (i57 >>> 0 <= 1 >>> 0) {
      break;
     }
     i56 = HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] | 0;
     do {
      if ((i56 | 0) != 0) {
       __ZN7WebCore13CSSToStyleMap21mapNinePieceImageQuadEPNS_8CSSValueE(i16, i1, i56);
       i54 = HEAP32[i23 >> 2] | 0;
       if ((HEAP32[i54 >> 2] | 0) == 1) {
        i58 = i54;
       } else {
        __ZNK7WebCore18NinePieceImageData4copyEv(i7, i54);
        i54 = HEAP32[i14 >> 2] | 0;
        __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i23 >> 2] | 0);
        HEAP32[i23 >> 2] = i54;
        i58 = i54;
       }
       i54 = i58 + 44 | 0;
       do {
        if ((i54 | 0) == (i16 | 0)) {
         if ((HEAP8[i37] | 0) != 10) {
          break;
         }
         __ZNK7WebCore6Length22decrementCalculatedRefEv(i39);
        } else {
         i59 = i54;
         i60 = HEAP32[i15 + 4 >> 2] | 0;
         HEAP32[i59 >> 2] = HEAP32[i15 >> 2];
         HEAP32[i59 + 4 >> 2] = i60;
         HEAP8[i46] = 0;
         i60 = i58 + 52 | 0;
         i59 = HEAP32[i44 + 4 >> 2] | 0;
         HEAP32[i60 >> 2] = HEAP32[i44 >> 2];
         HEAP32[i60 + 4 >> 2] = i59;
         HEAP8[i43] = 0;
         i59 = i58 + 60 | 0;
         i60 = HEAP32[i41 + 4 >> 2] | 0;
         HEAP32[i59 >> 2] = HEAP32[i41 >> 2];
         HEAP32[i59 + 4 >> 2] = i60;
         HEAP8[i40] = 0;
         i60 = i58 + 68 | 0;
         i59 = HEAP32[i38 + 4 >> 2] | 0;
         HEAP32[i60 >> 2] = HEAP32[i38 >> 2];
         HEAP32[i60 + 4 >> 2] = i59;
         HEAP8[i37] = 0;
        }
       } while (0);
       if ((HEAP8[i40] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i42);
       }
       if ((HEAP8[i43] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i45);
       }
       if ((HEAP8[i46] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i47);
      }
     } while (0);
     if ((HEAP32[i53 >> 2] | 0) >>> 0 <= 2 >>> 0) {
      break;
     }
     i56 = HEAP32[(HEAP32[i55 >> 2] | 0) + 8 >> 2] | 0;
     if ((i56 | 0) == 0) {
      break;
     }
     __ZN7WebCore13CSSToStyleMap21mapNinePieceImageQuadEPNS_8CSSValueE(i19, i1, i56);
     i56 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i56 >> 2] | 0) == 1) {
      i61 = i56;
     } else {
      __ZNK7WebCore18NinePieceImageData4copyEv(i6, i56);
      i56 = HEAP32[i17 >> 2] | 0;
      __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i23 >> 2] | 0);
      HEAP32[i23 >> 2] = i56;
      i61 = i56;
     }
     i56 = i61 + 76 | 0;
     do {
      if ((i56 | 0) == (i19 | 0)) {
       if ((HEAP8[i26] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
      } else {
       i54 = i56;
       i59 = HEAP32[i18 + 4 >> 2] | 0;
       HEAP32[i54 >> 2] = HEAP32[i18 >> 2];
       HEAP32[i54 + 4 >> 2] = i59;
       HEAP8[i35] = 0;
       i59 = i61 + 84 | 0;
       i54 = HEAP32[i33 + 4 >> 2] | 0;
       HEAP32[i59 >> 2] = HEAP32[i33 >> 2];
       HEAP32[i59 + 4 >> 2] = i54;
       HEAP8[i32] = 0;
       i54 = i61 + 92 | 0;
       i59 = HEAP32[i30 + 4 >> 2] | 0;
       HEAP32[i54 >> 2] = HEAP32[i30 >> 2];
       HEAP32[i54 + 4 >> 2] = i59;
       HEAP8[i29] = 0;
       i59 = i61 + 100 | 0;
       i54 = HEAP32[i27 + 4 >> 2] | 0;
       HEAP32[i59 >> 2] = HEAP32[i27 >> 2];
       HEAP32[i59 + 4 >> 2] = i54;
       HEAP8[i26] = 0;
      }
     } while (0);
     if ((HEAP8[i29] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
     }
     if ((HEAP8[i32] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
     }
     if ((HEAP8[i35] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i36);
    }
   } while (0);
   do {
    if ((i52 | 0) == 9) {
     i52 = 0;
     __ZN7WebCore13StyleResolver10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE(i13, HEAP32[i3 >> 2] | 0, i21, i49);
     i51 = HEAP32[i23 >> 2] | 0;
     if ((HEAP32[i51 >> 2] | 0) == 1) {
      i62 = i51;
     } else {
      __ZNK7WebCore18NinePieceImageData4copyEv(i10, i51);
      i51 = HEAP32[i25 >> 2] | 0;
      __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i23 >> 2] | 0);
      HEAP32[i23 >> 2] = i51;
      i62 = i51;
     }
     i51 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     i50 = i62 + 8 | 0;
     i56 = HEAP32[i50 >> 2] | 0;
     HEAP32[i50 >> 2] = i51;
     do {
      if ((i56 | 0) != 0) {
       i51 = i56 + 4 | 0;
       i50 = i51 | 0;
       i55 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
       if ((i55 | 0) != 0) {
        HEAP32[i50 >> 2] = i55;
        break;
       }
       i55 = i51 - 4 | 0;
       if ((i55 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 15](i55);
      }
     } while (0);
     i56 = HEAP32[i24 >> 2] | 0;
     if ((i56 | 0) == 0) {
      break;
     }
     i55 = i56 + 4 | 0;
     i56 = i55 | 0;
     i51 = (HEAP32[i56 >> 2] | 0) - 1 | 0;
     if ((i51 | 0) != 0) {
      HEAP32[i56 >> 2] = i51;
      break;
     }
     i51 = i55 - 4 | 0;
     if ((i51 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 15](i51);
    }
   } while (0);
   i48 = i48 + 1 | 0;
   if (i48 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 if (!i20) {
  STACKTOP = i5;
  return;
 }
 i20 = i4 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 i2 = i4 + 60 | 0;
 do {
  if ((HEAP8[i4 + 65 | 0] | 0) == 3) {
   if ((HEAP8[i4 + 66 | 0] & 1) == 0) {
    d63 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d63 = +HEAPF32[i2 >> 2];
   }
   i48 = ~~d63;
   i24 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] | 0) + 16 | 0;
   i62 = HEAP32[i24 >> 2] | 0;
   if (((HEAP32[i62 + 120 >> 2] | 0) >>> 1 & 67108863 | 0) == (i48 | 0)) {
    i64 = i4;
    break;
   }
   if ((HEAP32[i62 >> 2] | 0) == 1) {
    i65 = i62;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i8, i62);
    i62 = HEAP32[i8 >> 2] | 0;
    i23 = HEAP32[i24 >> 2] | 0;
    i25 = i23 | 0;
    i10 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i23);
     __ZN3WTF8fastFreeEPv(i23);
    } else {
     HEAP32[i25 >> 2] = i10;
    }
    HEAP32[i24 >> 2] = i62;
    i65 = i62;
   }
   i62 = i65 + 120 | 0;
   HEAP32[i62 >> 2] = HEAP32[i62 >> 2] & -134217727 | i48 << 1 & 134217726;
   i64 = HEAP32[i20 >> 2] | 0;
  } else {
   i64 = i4;
  }
 } while (0);
 i4 = i64 + 52 | 0;
 do {
  if ((HEAP8[i64 + 57 | 0] | 0) == 3) {
   if ((HEAP8[i64 + 58 | 0] & 1) == 0) {
    d66 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d66 = +HEAPF32[i4 >> 2];
   }
   i65 = ~~d66;
   i8 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] | 0) + 16 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   if (((HEAP32[i2 + 112 >> 2] | 0) >>> 1 & 67108863 | 0) == (i65 | 0)) {
    i67 = i64;
    break;
   }
   if ((HEAP32[i2 >> 2] | 0) == 1) {
    i68 = i2;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i9, i2);
    i2 = HEAP32[i9 >> 2] | 0;
    i48 = HEAP32[i8 >> 2] | 0;
    i62 = i48 | 0;
    i24 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
    if ((i24 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i48);
     __ZN3WTF8fastFreeEPv(i48);
    } else {
     HEAP32[i62 >> 2] = i24;
    }
    HEAP32[i8 >> 2] = i2;
    i68 = i2;
   }
   i2 = i68 + 112 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -134217727 | i65 << 1 & 134217726;
   i67 = HEAP32[i20 >> 2] | 0;
  } else {
   i67 = i64;
  }
 } while (0);
 i64 = i67 + 68 | 0;
 do {
  if ((HEAP8[i67 + 73 | 0] | 0) == 3) {
   if ((HEAP8[i67 + 74 | 0] & 1) == 0) {
    d69 = +(HEAP32[i64 >> 2] | 0);
   } else {
    d69 = +HEAPF32[i64 >> 2];
   }
   i68 = ~~d69;
   i9 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] | 0) + 16 | 0;
   i4 = HEAP32[i9 >> 2] | 0;
   if (((HEAP32[i4 + 128 >> 2] | 0) >>> 1 & 67108863 | 0) == (i68 | 0)) {
    i70 = i67;
    break;
   }
   if ((HEAP32[i4 >> 2] | 0) == 1) {
    i71 = i4;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i11, i4);
    i4 = HEAP32[i11 >> 2] | 0;
    i65 = HEAP32[i9 >> 2] | 0;
    i2 = i65 | 0;
    i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i65);
     __ZN3WTF8fastFreeEPv(i65);
    } else {
     HEAP32[i2 >> 2] = i8;
    }
    HEAP32[i9 >> 2] = i4;
    i71 = i4;
   }
   i4 = i71 + 128 | 0;
   HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -134217727 | i68 << 1 & 134217726;
   i70 = HEAP32[i20 >> 2] | 0;
  } else {
   i70 = i67;
  }
 } while (0);
 i67 = i70 + 44 | 0;
 if ((HEAP8[i70 + 49 | 0] | 0) != 3) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i70 + 50 | 0] & 1) == 0) {
  d72 = +(HEAP32[i67 >> 2] | 0);
 } else {
  d72 = +HEAPF32[i67 >> 2];
 }
 i67 = ~~d72;
 i70 = (HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] | 0) + 16 | 0;
 i1 = HEAP32[i70 >> 2] | 0;
 if (((HEAP32[i1 + 104 >> 2] | 0) >>> 1 & 67108863 | 0) == (i67 | 0)) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i73 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i12, i1);
  i1 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[i70 >> 2] | 0;
  i20 = i12 | 0;
  i71 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
  if ((i71 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i12);
   __ZN3WTF8fastFreeEPv(i12);
  } else {
   HEAP32[i20 >> 2] = i71;
  }
  HEAP32[i70 >> 2] = i1;
  i73 = i1;
 }
 i1 = i73 + 104 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i67 << 1 & 134217726;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13CSSToStyleMap21mapNinePieceImageQuadEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = i20;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
 do {
  if ((i3 | 0) != 0) {
   i32 = i3 + 4 | 0;
   if ((HEAP32[i32 >> 2] & 516096 | 0) != 0) {
    break;
   }
   i33 = i2 | 0;
   if (__ZN7WebCore13StyleResolver15useSVGZoomRulesEv(HEAP32[i33 >> 2] | 0) | 0) {
    d34 = +1;
   } else {
    d34 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 312 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
   }
   _memset(i5 | 0, 0, 7) | 0;
   i35 = i5 + 8 | 0;
   _memset(i35 | 0, 0, 7) | 0;
   i36 = i5 + 16 | 0;
   _memset(i36 | 0, 0, 7) | 0;
   i37 = i5 + 24 | 0;
   _memset(i37 | 0, 0, 7) | 0;
   if ((HEAP32[i32 >> 2] & 508 | 0) == 448) {
    i38 = HEAP32[i3 + 8 >> 2] | 0;
   } else {
    i38 = 0;
   }
   i32 = i38 | 0;
   i39 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i32 >> 2] | 0) | 0) << 16 >> 16 == 1;
   i40 = HEAP32[i32 >> 2] | 0;
   do {
    if (i39) {
     d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i40);
     do {
      if (d41 < +2147483647) {
       if (d41 <= +-2147483648) {
        i42 = -2147483648;
        break;
       }
       i42 = ~~d41;
      } else {
       i42 = 2147483647;
      }
     } while (0);
     HEAP32[i8 >> 2] = i42;
     HEAP8[i9 + 4 | 0] = 0;
     i43 = i9 + 5 | 0;
     HEAP8[i43] = 1;
     HEAP8[i9 + 6 | 0] = 0;
     i44 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i36 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i36 + 4 >> 2] = i44;
     HEAP8[i43] = 0;
    } else {
     i43 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i40) | 0) << 16 >> 16 == 2;
     i44 = HEAP32[i32 >> 2] | 0;
     if (i43) {
      d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i44, 2);
      HEAP8[i11 + 4 | 0] = 0;
      i43 = i11 + 5 | 0;
      HEAP8[i43] = 2;
      HEAP8[i11 + 6 | 0] = 1;
      HEAPF32[i10 >> 2] = d41;
      i45 = HEAP32[i10 + 4 >> 2] | 0;
      HEAP32[i36 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i36 + 4 >> 2] = i45;
      HEAP8[i43] = 0;
      break;
     }
     if ((HEAP32[i44 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i44 + 8 >> 2] | 0) == 269) {
       break;
      }
     }
     i43 = HEAP32[i33 >> 2] | 0;
     __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i13, i44, HEAP32[i43 + 312 >> 2] | 0, HEAP32[i43 + 328 >> 2] | 0, d34, 0);
     i43 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i36 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i36 + 4 >> 2] = i43;
     HEAP8[i13 + 5 | 0] = 0;
    }
   } while (0);
   i32 = i38 + 4 | 0;
   i40 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i32 >> 2] | 0) | 0) << 16 >> 16 == 1;
   i39 = HEAP32[i32 >> 2] | 0;
   do {
    if (i40) {
     d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i39);
     do {
      if (d41 < +2147483647) {
       if (d41 <= +-2147483648) {
        i46 = -2147483648;
        break;
       }
       i46 = ~~d41;
      } else {
       i46 = 2147483647;
      }
     } while (0);
     HEAP32[i14 >> 2] = i46;
     HEAP8[i15 + 4 | 0] = 0;
     i43 = i15 + 5 | 0;
     HEAP8[i43] = 1;
     HEAP8[i15 + 6 | 0] = 0;
     i44 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i35 + 4 >> 2] = i44;
     HEAP8[i43] = 0;
    } else {
     i43 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i39) | 0) << 16 >> 16 == 2;
     i44 = HEAP32[i32 >> 2] | 0;
     if (i43) {
      d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i44, 2);
      HEAP8[i17 + 4 | 0] = 0;
      i43 = i17 + 5 | 0;
      HEAP8[i43] = 2;
      HEAP8[i17 + 6 | 0] = 1;
      HEAPF32[i16 >> 2] = d41;
      i45 = HEAP32[i16 + 4 >> 2] | 0;
      HEAP32[i35 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i35 + 4 >> 2] = i45;
      HEAP8[i43] = 0;
      break;
     }
     if ((HEAP32[i44 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i44 + 8 >> 2] | 0) == 269) {
       break;
      }
     }
     i43 = HEAP32[i33 >> 2] | 0;
     __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i19, i44, HEAP32[i43 + 312 >> 2] | 0, HEAP32[i43 + 328 >> 2] | 0, d34, 0);
     i43 = HEAP32[i18 + 4 >> 2] | 0;
     HEAP32[i35 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i35 + 4 >> 2] = i43;
     HEAP8[i19 + 5 | 0] = 0;
    }
   } while (0);
   i32 = i38 + 8 | 0;
   i39 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i32 >> 2] | 0) | 0) << 16 >> 16 == 1;
   i40 = HEAP32[i32 >> 2] | 0;
   do {
    if (i39) {
     d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i40);
     do {
      if (d41 < +2147483647) {
       if (d41 <= +-2147483648) {
        i47 = -2147483648;
        break;
       }
       i47 = ~~d41;
      } else {
       i47 = 2147483647;
      }
     } while (0);
     HEAP32[i20 >> 2] = i47;
     HEAP8[i21 + 4 | 0] = 0;
     i43 = i21 + 5 | 0;
     HEAP8[i43] = 1;
     HEAP8[i21 + 6 | 0] = 0;
     i44 = HEAP32[i20 + 4 >> 2] | 0;
     HEAP32[i37 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i37 + 4 >> 2] = i44;
     HEAP8[i43] = 0;
    } else {
     i43 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i40) | 0) << 16 >> 16 == 2;
     i44 = HEAP32[i32 >> 2] | 0;
     if (i43) {
      d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i44, 2);
      HEAP8[i23 + 4 | 0] = 0;
      i43 = i23 + 5 | 0;
      HEAP8[i43] = 2;
      HEAP8[i23 + 6 | 0] = 1;
      HEAPF32[i22 >> 2] = d41;
      i45 = HEAP32[i22 + 4 >> 2] | 0;
      HEAP32[i37 >> 2] = HEAP32[i22 >> 2];
      HEAP32[i37 + 4 >> 2] = i45;
      HEAP8[i43] = 0;
      break;
     }
     if ((HEAP32[i44 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i44 + 8 >> 2] | 0) == 269) {
       break;
      }
     }
     i43 = HEAP32[i33 >> 2] | 0;
     __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i25, i44, HEAP32[i43 + 312 >> 2] | 0, HEAP32[i43 + 328 >> 2] | 0, d34, 0);
     i43 = HEAP32[i24 + 4 >> 2] | 0;
     HEAP32[i37 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i37 + 4 >> 2] = i43;
     HEAP8[i25 + 5 | 0] = 0;
    }
   } while (0);
   i32 = i38 + 12 | 0;
   i40 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i32 >> 2] | 0) | 0) << 16 >> 16 == 1;
   i39 = HEAP32[i32 >> 2] | 0;
   L52 : do {
    if (i40) {
     d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i39);
     do {
      if (d41 < +2147483647) {
       if (d41 <= +-2147483648) {
        i48 = -2147483648;
        break;
       }
       i48 = ~~d41;
      } else {
       i48 = 2147483647;
      }
     } while (0);
     HEAP32[i26 >> 2] = i48;
     HEAP8[i27 + 4 | 0] = 0;
     i43 = i27 + 5 | 0;
     HEAP8[i43] = 1;
     HEAP8[i27 + 6 | 0] = 0;
     i44 = HEAP32[i26 >> 2] | 0;
     i45 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i6 >> 2] = i44;
     HEAP32[i6 + 4 >> 2] = i45;
     HEAP8[i43] = 0;
     i49 = i45;
     i50 = i44;
    } else {
     i44 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i39) | 0) << 16 >> 16 == 2;
     i45 = HEAP32[i32 >> 2] | 0;
     if (i44) {
      d41 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i45, 2);
      HEAP8[i29 + 4 | 0] = 0;
      i44 = i29 + 5 | 0;
      HEAP8[i44] = 2;
      HEAP8[i29 + 6 | 0] = 1;
      HEAPF32[i28 >> 2] = d41;
      i43 = HEAP32[i28 >> 2] | 0;
      i51 = HEAP32[i28 + 4 >> 2] | 0;
      HEAP32[i6 >> 2] = i43;
      HEAP32[i6 + 4 >> 2] = i51;
      HEAP8[i44] = 0;
      i49 = i51;
      i50 = i43;
      break;
     }
     do {
      if ((HEAP32[i45 + 4 >> 2] & 508 | 0) == 472) {
       if ((HEAP32[i45 + 8 >> 2] | 0) != 269) {
        break;
       }
       i49 = HEAP32[i6 + 4 >> 2] | 0;
       i50 = HEAP32[i6 >> 2] | 0;
       break L52;
      }
     } while (0);
     i43 = HEAP32[i33 >> 2] | 0;
     __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i31, i45, HEAP32[i43 + 312 >> 2] | 0, HEAP32[i43 + 328 >> 2] | 0, d34, 0);
     i43 = HEAP32[i30 >> 2] | 0;
     i51 = HEAP32[i30 + 4 >> 2] | 0;
     HEAP32[i6 >> 2] = i43;
     HEAP32[i6 + 4 >> 2] = i51;
     HEAP8[i31 + 5 | 0] = 0;
     i49 = i51;
     i50 = i43;
    }
   } while (0);
   i33 = i1;
   HEAP32[i33 >> 2] = i50;
   HEAP32[i33 + 4 >> 2] = i49;
   i33 = i7 + 5 | 0;
   HEAP8[i33] = 0;
   i32 = i1 + 8 | 0;
   i39 = HEAP32[i35 + 4 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i35 >> 2];
   HEAP32[i32 + 4 >> 2] = i39;
   HEAP8[i7 + 13 | 0] = 0;
   i39 = i1 + 16 | 0;
   i32 = HEAP32[i36 + 4 >> 2] | 0;
   HEAP32[i39 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i39 + 4 >> 2] = i32;
   HEAP8[i7 + 21 | 0] = 0;
   i32 = i1 + 24 | 0;
   i39 = HEAP32[i37 + 4 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i32 + 4 >> 2] = i39;
   HEAP8[i7 + 29 | 0] = 0;
   if ((HEAP8[i33] | 0) != 10) {
    STACKTOP = i4;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 7) | 0;
 _memset(i1 + 8 | 0, 0, 7) | 0;
 _memset(i1 + 16 | 0, 0, 7) | 0;
 _memset(i1 + 24 | 0, 0, 7) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore13CSSToStyleMap22mapNinePieceImageSliceEPNS_8CSSValueERNS_14NinePieceImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 i6 = i1 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i26 = i25 | 0;
 i27 = i25;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 516096 | 0) != 90112) {
  STACKTOP = i1;
  return;
 }
 _memset(i6 | 0, 0, 7) | 0;
 i28 = i6 + 8 | 0;
 i29 = i28;
 _memset(i28 | 0, 0, 7) | 0;
 i30 = i6 + 16 | 0;
 i31 = i30;
 _memset(i30 | 0, 0, 7) | 0;
 i32 = i6 + 24 | 0;
 i33 = i32;
 _memset(i32 | 0, 0, 7) | 0;
 i34 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i34 | 0) == 0) {
   i35 = 0;
  } else {
   if ((HEAP32[i34 + 4 >> 2] & 508 | 0) != 448) {
    i35 = 0;
    break;
   }
   i35 = HEAP32[i34 + 8 >> 2] | 0;
  }
 } while (0);
 i34 = i35 | 0;
 i36 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i34 >> 2] | 0) | 0) << 16 >> 16 == 2;
 i37 = HEAP32[i34 >> 2] | 0;
 if (i36) {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i37);
  HEAP8[i10 + 4 | 0] = 0;
  i36 = i10 + 5 | 0;
  HEAP8[i36] = 2;
  HEAP8[i10 + 6 | 0] = 1;
  HEAPF32[i9 >> 2] = d38;
  i10 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i30 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i30 + 4 >> 2] = i10;
  HEAP8[i36] = 0;
 } else {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i37, 1);
  do {
   if (d38 < +2147483647) {
    if (d38 <= +-2147483648) {
     i39 = -2147483648;
     break;
    }
    i39 = ~~d38;
   } else {
    i39 = 2147483647;
   }
  } while (0);
  HEAP32[i11 >> 2] = i39;
  HEAP8[i12 + 4 | 0] = 0;
  i39 = i12 + 5 | 0;
  HEAP8[i39] = 3;
  HEAP8[i12 + 6 | 0] = 0;
  i12 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i30 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i30 + 4 >> 2] = i12;
  HEAP8[i39] = 0;
 }
 i39 = i35 + 8 | 0;
 i12 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i39 >> 2] | 0) | 0) << 16 >> 16 == 2;
 i11 = HEAP32[i39 >> 2] | 0;
 if (i12) {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i11);
  HEAP8[i14 + 4 | 0] = 0;
  i12 = i14 + 5 | 0;
  HEAP8[i12] = 2;
  HEAP8[i14 + 6 | 0] = 1;
  HEAPF32[i13 >> 2] = d38;
  i14 = HEAP32[i13 + 4 >> 2] | 0;
  HEAP32[i32 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i32 + 4 >> 2] = i14;
  HEAP8[i12] = 0;
 } else {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i11, 1);
  do {
   if (d38 < 3.4028234663852886e+38) {
    if (d38 <= -3.4028234663852886e+38) {
     i40 = -2147483648;
     break;
    }
    i40 = ~~d38;
   } else {
    i40 = 2147483647;
   }
  } while (0);
  HEAP32[i15 >> 2] = i40;
  HEAP8[i16 + 4 | 0] = 0;
  i40 = i16 + 5 | 0;
  HEAP8[i40] = 3;
  HEAP8[i16 + 6 | 0] = 0;
  i16 = HEAP32[i15 + 4 >> 2] | 0;
  HEAP32[i32 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i32 + 4 >> 2] = i16;
  HEAP8[i40] = 0;
 }
 i40 = i35 + 12 | 0;
 i16 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i40 >> 2] | 0) | 0) << 16 >> 16 == 2;
 i15 = i6;
 i6 = HEAP32[i40 >> 2] | 0;
 if (i16) {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i6);
  HEAP8[i18 + 4 | 0] = 0;
  i16 = i18 + 5 | 0;
  HEAP8[i16] = 2;
  HEAP8[i18 + 6 | 0] = 1;
  HEAPF32[i17 >> 2] = d38;
  i18 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i16] = 0;
 } else {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i6, 1);
  do {
   if (d38 < +2147483647) {
    if (d38 <= +-2147483648) {
     i41 = -2147483648;
     break;
    }
    i41 = ~~d38;
   } else {
    i41 = 2147483647;
   }
  } while (0);
  HEAP32[i19 >> 2] = i41;
  HEAP8[i20 + 4 | 0] = 0;
  i41 = i20 + 5 | 0;
  HEAP8[i41] = 3;
  HEAP8[i20 + 6 | 0] = 0;
  i20 = HEAP32[i19 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i7 + 4 >> 2] = i20;
  HEAP8[i41] = 0;
 }
 i41 = i35 + 4 | 0;
 i35 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i41 >> 2] | 0) | 0) << 16 >> 16 == 2;
 i20 = HEAP32[i41 >> 2] | 0;
 if (i35) {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i20);
  HEAP8[i22 + 4 | 0] = 0;
  i35 = i22 + 5 | 0;
  HEAP8[i35] = 2;
  HEAP8[i22 + 6 | 0] = 1;
  HEAPF32[i21 >> 2] = d38;
  i22 = HEAP32[i21 >> 2] | 0;
  i41 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i28 >> 2] = i22;
  HEAP32[i28 + 4 >> 2] = i41;
  HEAP8[i35] = 0;
  i42 = i41;
  i43 = i22;
 } else {
  d38 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i20, 1);
  do {
   if (d38 < +2147483647) {
    if (d38 <= +-2147483648) {
     i44 = -2147483648;
     break;
    }
    i44 = ~~d38;
   } else {
    i44 = 2147483647;
   }
  } while (0);
  HEAP32[i23 >> 2] = i44;
  HEAP8[i24 + 4 | 0] = 0;
  i44 = i24 + 5 | 0;
  HEAP8[i44] = 3;
  HEAP8[i24 + 6 | 0] = 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i20 = HEAP32[i23 + 4 >> 2] | 0;
  HEAP32[i28 >> 2] = i24;
  HEAP32[i28 + 4 >> 2] = i20;
  HEAP8[i44] = 0;
  i42 = i20;
  i43 = i24;
 }
 i24 = HEAP32[i7 >> 2] | 0;
 i20 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i26 >> 2] = i24;
 HEAP32[i26 + 4 >> 2] = i20;
 if ((i24 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i25);
  i45 = HEAP32[i28 + 4 >> 2] | 0;
  i46 = HEAP32[i28 >> 2] | 0;
 } else {
  i45 = i42;
  i46 = i43;
 }
 i43 = i25 + 8 | 0;
 i42 = i43;
 HEAP32[i43 >> 2] = i46;
 HEAP32[i43 + 4 >> 2] = i45;
 if ((i46 & 0 | 0) == 0 & (i45 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i42);
 }
 i45 = i25 + 16 | 0;
 i46 = i45;
 i28 = HEAP32[i30 >> 2] | 0;
 i20 = HEAP32[i30 + 4 >> 2] | 0;
 HEAP32[i45 >> 2] = i28;
 HEAP32[i45 + 4 >> 2] = i20;
 if ((i28 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i46);
 }
 i20 = i25 + 24 | 0;
 i28 = i20;
 i30 = HEAP32[i32 >> 2] | 0;
 i24 = HEAP32[i32 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = i30;
 HEAP32[i20 + 4 >> 2] = i24;
 if ((i30 & 0 | 0) == 0 & (i24 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i28);
 }
 i24 = i3 | 0;
 i3 = HEAP32[i24 >> 2] | 0;
 if ((HEAP32[i3 >> 2] | 0) == 1) {
  i47 = i3;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i3);
  i3 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i24 >> 2] | 0);
  HEAP32[i24 >> 2] = i3;
  i47 = i3;
 }
 i3 = i47 + 12 | 0;
 do {
  if ((i3 | 0) == (i27 | 0)) {
   if ((HEAP8[i27 + 29 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
  } else {
   i4 = i3;
   i30 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i4 + 4 >> 2] = i30;
   HEAP8[i27 + 5 | 0] = 0;
   i30 = i47 + 20 | 0;
   i4 = HEAP32[i43 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = HEAP32[i43 >> 2];
   HEAP32[i30 + 4 >> 2] = i4;
   HEAP8[i27 + 13 | 0] = 0;
   i4 = i47 + 28 | 0;
   i30 = HEAP32[i45 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i45 >> 2];
   HEAP32[i4 + 4 >> 2] = i30;
   HEAP8[i27 + 21 | 0] = 0;
   i30 = i47 + 36 | 0;
   i4 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i30 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i30 + 4 >> 2] = i4;
   HEAP8[i27 + 29 | 0] = 0;
  }
 } while (0);
 if ((HEAP8[i27 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i46);
 }
 if ((HEAP8[i27 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i42);
 }
 if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i25);
 }
 i25 = HEAP8[i2 + 12 | 0] & 1;
 i2 = HEAP32[i24 >> 2] | 0;
 if ((HEAP32[i2 >> 2] | 0) == 1) {
  i48 = i2;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i5, i2);
  i2 = HEAP32[i5 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i24 >> 2] | 0);
  HEAP32[i24 >> 2] = i2;
  i48 = i2;
 }
 i2 = i48 + 4 | 0;
 HEAP8[i2] = HEAP8[i2] & -2 | i25;
 if ((HEAP8[i8 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i33);
 }
 if ((HEAP8[i8 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
 }
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) != 10) {
  STACKTOP = i1;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i15);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore13CSSToStyleMap11mapFillSizeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i2 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = i25;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i28 = i27 | 0;
 i29 = i27;
 i30 = i4 + 4 | 0;
 i31 = HEAP32[i30 >> 2] | 0;
 if ((i31 & 516096 | 0) != 0) {
  i32 = i3 + 40 | 0;
  HEAP32[i32 >> 2] = HEAP32[i32 >> 2] | 196608;
  STACKTOP = i2;
  return;
 }
 i32 = i4;
 do {
  if ((i31 & 508 | 0) == 472) {
   if ((HEAP32[i4 + 8 >> 2] | 0) == 491) {
    i33 = i3 + 40 | 0;
    HEAP32[i33 >> 2] = HEAP32[i33 >> 2] & -196609;
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 492) {
    i34 = 8;
    break;
   }
   i33 = i3 + 40 | 0;
   HEAP32[i33 >> 2] = HEAP32[i33 >> 2] & -196609 | 65536;
  } else {
   i34 = 8;
  }
 } while (0);
 if ((i34 | 0) == 8) {
  i31 = i3 + 40 | 0;
  HEAP32[i31 >> 2] = HEAP32[i31 >> 2] & -196609 | 131072;
 }
 _memset(i5 | 0, 0, 7) | 0;
 i31 = i5 + 8 | 0;
 i33 = i31;
 _memset(i31 | 0, 0, 7) | 0;
 i35 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i35 & 516096 | 0) == 139264) {
   i34 = 13;
  } else {
   i30 = i35 & 508;
   if ((i30 | 0) == 472) {
    if ((HEAP32[i4 + 8 >> 2] | 0) == 491) {
     i34 = 13;
     break;
    }
    if ((HEAP32[i4 + 8 >> 2] | 0) == 492) {
     i34 = 13;
     break;
    }
   }
   i36 = i1 | 0;
   i37 = HEAP32[i36 >> 2] | 0;
   i38 = i37 + 312 | 0;
   d39 = +HEAPF32[(HEAP32[(HEAP32[i38 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
   _memset(i11 | 0, 0, 7) | 0;
   _memset(i13 | 0, 0, 7) | 0;
   do {
    if ((i30 | 0) == 400) {
     i40 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i40 | 0) == 0) {
      i34 = 28;
      break;
     }
     i41 = HEAP32[i40 + 12 >> 2] | 0;
     d42 = d39;
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILin1EEENS_6LengthEPKNS_11RenderStyleES5_db(i16, HEAP32[i40 + 8 >> 2] | 0, HEAP32[i38 >> 2] | 0, HEAP32[i37 + 328 >> 2] | 0, d42, 0);
     i40 = HEAP32[i15 + 4 >> 2] | 0;
     HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i11 + 4 >> 2] = i40;
     HEAP8[i16 + 5 | 0] = 0;
     i40 = HEAP32[i36 >> 2] | 0;
     __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILin1EEENS_6LengthEPKNS_11RenderStyleES5_db(i18, i41, HEAP32[i40 + 312 >> 2] | 0, HEAP32[i40 + 328 >> 2] | 0, d42, 0);
     i40 = HEAP32[i17 >> 2] | 0;
     i41 = HEAP32[i17 + 4 >> 2] | 0;
     HEAP32[i13 >> 2] = i40;
     HEAP32[i13 + 4 >> 2] = i41;
     HEAP8[i18 + 5 | 0] = 0;
     i43 = i12 + 5 | 0;
     i44 = HEAP8[i43] | 0;
     i45 = (i41 >>> 8 | 0 << 24) & 255;
     i46 = i41;
     i47 = i40;
     i48 = i43;
    } else {
     i34 = 28;
    }
   } while (0);
   if ((i34 | 0) == 28) {
    __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILin1EEENS_6LengthEPKNS_11RenderStyleES5_db(i20, i32, HEAP32[i38 >> 2] | 0, HEAP32[i37 + 328 >> 2] | 0, d39, 0);
    i36 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i11 + 4 >> 2] = i36;
    HEAP8[i20 + 5 | 0] = 0;
    _memset(i21 | 0, 0, 7) | 0;
    i30 = HEAP32[i21 >> 2] | 0;
    i43 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = i30;
    HEAP32[i13 + 4 >> 2] = i43;
    HEAP8[i22 + 5 | 0] = 0;
    i44 = (i36 >>> 8 | 0 << 24) & 255;
    i45 = (i43 >>> 8 | 0 << 24) & 255;
    i46 = i43;
    i47 = i30;
    i48 = i12 + 5 | 0;
   }
   i30 = i14 + 5 | 0;
   do {
    if (!(i44 << 24 >> 24 == 15 | i45 << 24 >> 24 == 15)) {
     i43 = HEAP32[i11 >> 2] | 0;
     i36 = HEAP32[i11 + 4 >> 2] | 0;
     HEAP32[i23 >> 2] = i43;
     HEAP32[i23 + 4 >> 2] = i36;
     if ((i43 & 0 | 0) == 0 & (i36 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i24);
      i49 = HEAP32[i23 + 4 >> 2] | 0;
      i50 = HEAP32[i23 >> 2] | 0;
      i51 = HEAP32[i13 + 4 >> 2] | 0;
      i52 = HEAP32[i13 >> 2] | 0;
     } else {
      i49 = i36;
      i50 = i43;
      i51 = i46;
      i52 = i47;
     }
     HEAP32[i6 >> 2] = i50;
     HEAP32[i6 + 4 >> 2] = i49;
     HEAP8[i24 + 5 | 0] = 0;
     HEAP32[i25 >> 2] = i52;
     HEAP32[i25 + 4 >> 2] = i51;
     if ((i52 & 0 | 0) == 0 & (i51 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i26);
      i53 = HEAP32[i25 + 4 >> 2] | 0;
      i54 = HEAP32[i25 >> 2] | 0;
      i55 = HEAP32[i6 + 4 >> 2] | 0;
      i56 = HEAP32[i6 >> 2] | 0;
     } else {
      i53 = i51;
      i54 = i52;
      i55 = i49;
      i56 = i50;
     }
     HEAP32[i31 >> 2] = i54;
     HEAP32[i31 + 4 >> 2] = i53;
     HEAP8[i26 + 5 | 0] = 0;
     HEAP32[i28 >> 2] = i56;
     HEAP32[i28 + 4 >> 2] = i55;
     if ((i56 & 0 | 0) == 0 & (i55 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
      i57 = HEAP32[i31 + 4 >> 2] | 0;
      i58 = HEAP32[i31 >> 2] | 0;
     } else {
      i57 = i53;
      i58 = i54;
     }
     i43 = i27 + 8 | 0;
     i36 = i43;
     HEAP32[i43 >> 2] = i58;
     HEAP32[i43 + 4 >> 2] = i57;
     if ((i58 & 0 | 0) == 0 & (i57 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i36);
     }
     i40 = i3 + 24 | 0;
     i41 = i40;
     i59 = HEAP32[i28 >> 2] | 0;
     i60 = HEAP32[i28 + 4 >> 2] | 0;
     HEAP32[i41 >> 2] = i59;
     HEAP32[i41 + 4 >> 2] = i60;
     if ((i59 & 0 | 0) == 0 & (i60 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i40 | 0);
     }
     i40 = i3 + 32 | 0;
     i60 = i40;
     i59 = HEAP32[i43 >> 2] | 0;
     i41 = HEAP32[i43 + 4 >> 2] | 0;
     HEAP32[i60 >> 2] = i59;
     HEAP32[i60 + 4 >> 2] = i41;
     if ((i59 & 0 | 0) == 0 & (i41 & 65280 | 0) == 2560) {
      __ZNK7WebCore6Length22incrementCalculatedRefEv(i40);
     }
     if ((HEAP8[i29 + 13 | 0] | 0) == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i36);
     }
     if ((HEAP8[i29 + 5 | 0] | 0) != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
    }
   } while (0);
   if ((HEAP8[i30] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
   }
   if ((HEAP8[i48] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
  }
 } while (0);
 do {
  if ((i34 | 0) == 13) {
   i12 = HEAP32[i6 >> 2] | 0;
   i48 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = i12;
   HEAP32[i9 + 4 >> 2] = i48;
   if ((i12 & 0 | 0) == 0 & (i48 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
   }
   i48 = i8 + 8 | 0;
   i12 = i48;
   i14 = HEAP32[i31 >> 2] | 0;
   i27 = HEAP32[i31 + 4 >> 2] | 0;
   HEAP32[i48 >> 2] = i14;
   HEAP32[i48 + 4 >> 2] = i27;
   if ((i14 & 0 | 0) == 0 & (i27 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i12);
   }
   i27 = i3 + 24 | 0;
   i14 = i27;
   i29 = HEAP32[i9 >> 2] | 0;
   i28 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = i29;
   HEAP32[i14 + 4 >> 2] = i28;
   if ((i29 & 0 | 0) == 0 & (i28 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i27 | 0);
   }
   i27 = i3 + 32 | 0;
   i28 = i27;
   i29 = HEAP32[i48 >> 2] | 0;
   i14 = HEAP32[i48 + 4 >> 2] | 0;
   HEAP32[i28 >> 2] = i29;
   HEAP32[i28 + 4 >> 2] = i14;
   if ((i29 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
   }
   if ((HEAP8[i10 + 13 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
   }
   if ((HEAP8[i10 + 5 | 0] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  }
 } while (0);
 if ((HEAP8[i7 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i33);
 }
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore13CSSToStyleMap26mapAnimationTimingFunctionEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  i5 = __ZN3WTF10fastMallocEj(56) | 0;
  HEAP32[i5 + 4 >> 2] = 1;
  HEAP32[i5 + 8 >> 2] = 1;
  HEAP32[i5 >> 2] = H_BASE + 16;
  HEAPF64[i5 + 16 >> 3] = +.25;
  HEAPF64[i5 + 24 >> 3] = +.1;
  HEAPF64[i5 + 32 >> 3] = +.25;
  HEAPF64[i5 + 40 >> 3] = +1;
  HEAP32[i5 + 48 >> 2] = 0;
  i6 = i2 + 40 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i5;
  do {
   if ((i7 | 0) != 0) {
    i5 = i7 + 4 | 0;
    i6 = i5 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i6 >> 2] = i8;
     break;
    }
    i8 = i5 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
   }
  } while (0);
  i7 = i2 + 45 | 0;
  HEAP8[i7] = HEAP8[i7] | 64;
  return;
 } else if ((i4 | 0) == 0) {
  if ((i1 & 508 | 0) != 472) {
   return;
  }
  switch (HEAP32[i3 + 8 >> 2] | 0) {
  case 501:
   {
    i1 = __ZN3WTF10fastMallocEj(56) | 0;
    HEAP32[i1 + 4 >> 2] = 1;
    HEAP32[i1 + 8 >> 2] = 1;
    HEAP32[i1 >> 2] = H_BASE + 16;
    HEAPF64[i1 + 16 >> 3] = +.25;
    HEAPF64[i1 + 24 >> 3] = +.1;
    HEAPF64[i1 + 32 >> 3] = +.25;
    HEAPF64[i1 + 40 >> 3] = +1;
    HEAP32[i1 + 48 >> 2] = 0;
    i7 = i2 + 40 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    do {
     if ((i8 | 0) != 0) {
      i1 = i8 + 4 | 0;
      i7 = i1 | 0;
      i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = i5;
       break;
      }
      i5 = i1 - 4 | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
     }
    } while (0);
    i8 = i2 + 45 | 0;
    HEAP8[i8] = HEAP8[i8] | 64;
    return;
   }
  case 503:
   {
    i8 = __ZN3WTF10fastMallocEj(56) | 0;
    HEAP32[i8 + 4 >> 2] = 1;
    HEAP32[i8 + 8 >> 2] = 1;
    HEAP32[i8 >> 2] = H_BASE + 16;
    HEAPF64[i8 + 16 >> 3] = +.42;
    HEAPF64[i8 + 24 >> 3] = +0;
    HEAPF64[i8 + 32 >> 3] = +1;
    HEAPF64[i8 + 40 >> 3] = +1;
    HEAP32[i8 + 48 >> 2] = 1;
    i5 = i2 + 40 | 0;
    i1 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i8;
    do {
     if ((i1 | 0) != 0) {
      i8 = i1 + 4 | 0;
      i5 = i8 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = i7;
       break;
      }
      i7 = i8 - 4 | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
     }
    } while (0);
    i1 = i2 + 45 | 0;
    HEAP8[i1] = HEAP8[i1] | 64;
    return;
   }
  case 506:
   {
    i1 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i1 + 4 >> 2] = 1;
    HEAP32[i1 + 8 >> 2] = 2;
    HEAP32[i1 >> 2] = H_BASE + 80;
    HEAP32[i1 + 12 >> 2] = 1;
    HEAP8[i1 + 16 | 0] = 1;
    i7 = i2 + 40 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    do {
     if ((i8 | 0) != 0) {
      i1 = i8 + 4 | 0;
      i7 = i1 | 0;
      i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = i5;
       break;
      }
      i5 = i1 - 4 | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
     }
    } while (0);
    i8 = i2 + 45 | 0;
    HEAP8[i8] = HEAP8[i8] | 64;
    return;
   }
  case 502:
   {
    i8 = __ZN3WTF10fastMallocEj(12) | 0;
    HEAP32[i8 + 4 >> 2] = 1;
    HEAP32[i8 + 8 >> 2] = 0;
    HEAP32[i8 >> 2] = H_BASE + 48;
    i5 = i2 + 40 | 0;
    i1 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i8;
    do {
     if ((i1 | 0) != 0) {
      i8 = i1 + 4 | 0;
      i5 = i8 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = i7;
       break;
      }
      i7 = i8 - 4 | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
     }
    } while (0);
    i1 = i2 + 45 | 0;
    HEAP8[i1] = HEAP8[i1] | 64;
    return;
   }
  case 505:
   {
    i1 = __ZN3WTF10fastMallocEj(56) | 0;
    HEAP32[i1 + 4 >> 2] = 1;
    HEAP32[i1 + 8 >> 2] = 1;
    HEAP32[i1 >> 2] = H_BASE + 16;
    HEAPF64[i1 + 16 >> 3] = +.42;
    HEAPF64[i1 + 24 >> 3] = +0;
    HEAPF64[i1 + 32 >> 3] = +.58;
    HEAPF64[i1 + 40 >> 3] = +1;
    HEAP32[i1 + 48 >> 2] = 3;
    i7 = i2 + 40 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    do {
     if ((i8 | 0) != 0) {
      i1 = i8 + 4 | 0;
      i7 = i1 | 0;
      i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = i5;
       break;
      }
      i5 = i1 - 4 | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
     }
    } while (0);
    i8 = i2 + 45 | 0;
    HEAP8[i8] = HEAP8[i8] | 64;
    return;
   }
  case 504:
   {
    i8 = __ZN3WTF10fastMallocEj(56) | 0;
    HEAP32[i8 + 4 >> 2] = 1;
    HEAP32[i8 + 8 >> 2] = 1;
    HEAP32[i8 >> 2] = H_BASE + 16;
    _memset(i8 + 16 | 0, 0, 16) | 0;
    HEAPF64[i8 + 32 >> 3] = +.58;
    HEAPF64[i8 + 40 >> 3] = +1;
    HEAP32[i8 + 48 >> 2] = 2;
    i5 = i2 + 40 | 0;
    i1 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i8;
    do {
     if ((i1 | 0) != 0) {
      i8 = i1 + 4 | 0;
      i5 = i8 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
      if ((i7 | 0) != 0) {
       HEAP32[i5 >> 2] = i7;
       break;
      }
      i7 = i8 - 4 | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
     }
    } while (0);
    i1 = i2 + 45 | 0;
    HEAP8[i1] = HEAP8[i1] | 64;
    return;
   }
  case 507:
   {
    i1 = __ZN3WTF10fastMallocEj(20) | 0;
    HEAP32[i1 + 4 >> 2] = 1;
    HEAP32[i1 + 8 >> 2] = 2;
    HEAP32[i1 >> 2] = H_BASE + 80;
    HEAP32[i1 + 12 >> 2] = 1;
    HEAP8[i1 + 16 | 0] = 0;
    i7 = i2 + 40 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    do {
     if ((i8 | 0) != 0) {
      i1 = i8 + 4 | 0;
      i7 = i1 | 0;
      i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
      if ((i5 | 0) != 0) {
       HEAP32[i7 >> 2] = i5;
       break;
      }
      i5 = i1 - 4 | 0;
      if ((i5 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
     }
    } while (0);
    i8 = i2 + 45 | 0;
    HEAP8[i8] = HEAP8[i8] | 64;
    return;
   }
  default:
   {
    return;
   }
  }
 } else if ((i4 | 0) == 65536) {
  d9 = +HEAPF64[i3 + 8 >> 3];
  d10 = +HEAPF64[i3 + 16 >> 3];
  d11 = +HEAPF64[i3 + 24 >> 3];
  d12 = +HEAPF64[i3 + 32 >> 3];
  i8 = __ZN3WTF10fastMallocEj(56) | 0;
  HEAP32[i8 + 4 >> 2] = 1;
  HEAP32[i8 + 8 >> 2] = 1;
  HEAP32[i8 >> 2] = H_BASE + 16;
  HEAPF64[i8 + 16 >> 3] = d9;
  HEAPF64[i8 + 24 >> 3] = d10;
  HEAPF64[i8 + 32 >> 3] = d11;
  HEAPF64[i8 + 40 >> 3] = d12;
  HEAP32[i8 + 48 >> 2] = 4;
  i5 = i2 + 40 | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i8;
  do {
   if ((i1 | 0) != 0) {
    i8 = i1 + 4 | 0;
    i5 = i8 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i5 >> 2] = i7;
     break;
    }
    i7 = i8 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   }
  } while (0);
  i1 = i2 + 45 | 0;
  HEAP8[i1] = HEAP8[i1] | 64;
  return;
 } else if ((i4 | 0) == 73728) {
  i4 = HEAP32[i3 + 8 >> 2] | 0;
  i1 = HEAP8[i3 + 12 | 0] & 1;
  i3 = __ZN3WTF10fastMallocEj(20) | 0;
  HEAP32[i3 + 4 >> 2] = 1;
  HEAP32[i3 + 8 >> 2] = 2;
  HEAP32[i3 >> 2] = H_BASE + 80;
  HEAP32[i3 + 12 >> 2] = i4;
  HEAP8[i3 + 16 | 0] = i1;
  i1 = i2 + 40 | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = i3;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 4 | 0;
    i1 = i3 | 0;
    i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i1 >> 2] = i7;
     break;
    }
    i7 = i3 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   }
  } while (0);
  i4 = i2 + 45 | 0;
  HEAP8[i4] = HEAP8[i4] | 64;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap16mapFillYPositionENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = HEAP32[i4 + 4 >> 2] | 0;
 i22 = i21 & 516096;
 if ((i22 | 0) == 0) {
  i23 = i1 | 0;
  d24 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 312 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  i1 = i4;
  do {
   if ((i21 & 508 | 0) == 400) {
    i25 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i26 = i1;
     i27 = 0;
     i28 = 0;
     break;
    }
    i26 = HEAP32[i25 + 12 >> 2] | 0;
    i27 = i25;
    i28 = 1;
   } else {
    i26 = i1;
    i27 = 0;
    i28 = 0;
   }
  } while (0);
  _memset(i8 | 0, 0, 7) | 0;
  i1 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0;
  do {
   if ((i1 - 3 & 65535) >>> 0 < 8 >>> 0 | i1 << 16 >> 16 == 108 | i1 << 16 >> 16 == 109) {
    i4 = HEAP32[i23 >> 2] | 0;
    __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i11, i26, HEAP32[i4 + 312 >> 2] | 0, HEAP32[i4 + 328 >> 2] | 0, d24, 0);
    i4 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i8 + 4 >> 2] = i4;
    HEAP8[i11 + 5 | 0] = 0;
    i29 = 23;
   } else {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0) << 16 >> 16 == 2) {
     d30 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i26);
     HEAP8[i13 + 4 | 0] = 0;
     i4 = i13 + 5 | 0;
     HEAP8[i4] = 2;
     HEAP8[i13 + 6 | 0] = 1;
     HEAPF32[i12 >> 2] = d30;
     i21 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i8 + 4 >> 2] = i21;
     HEAP8[i4] = 0;
     i29 = 23;
     break;
    }
    i4 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0) << 16 >> 16 == 115;
    i21 = HEAP32[i26 + 4 >> 2] | 0;
    if (!i4) {
     if (((i21 >>> 2 & 127) - 26 | 0) >>> 0 >= 4 >>> 0) {
      break;
     }
     __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i18, i26);
     i4 = HEAP32[i17 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i8 + 4 >> 2] = i4;
     HEAP8[i18 + 5 | 0] = 0;
     i29 = 23;
     break;
    }
    if ((i21 & 508 | 0) == 452) {
     i31 = HEAP32[i26 + 8 >> 2] | 0;
    } else {
     i31 = 0;
    }
    i21 = HEAP32[i23 >> 2] | 0;
    i4 = HEAP32[i31 + 8 >> 2] | 0;
    FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 1](i5, i4, HEAP32[i21 + 312 >> 2] | 0, HEAP32[i21 + 328 >> 2] | 0, d24);
    __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i16, i5, HEAP8[i31 + 12 | 0] & 1);
    i21 = HEAP32[i5 >> 2] | 0;
    if ((i21 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 15](i21);
    }
    __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i15, i16);
    i21 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i8 + 4 >> 2] = i21;
    HEAP8[i15 + 5 | 0] = 0;
    i21 = HEAP32[i16 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i29 = 23;
     break;
    }
    i4 = i21 | 0;
    i25 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i25 | 0) != 0) {
     HEAP32[i4 >> 2] = i25;
     i29 = 23;
     break;
    }
    i25 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i25 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
    }
    __ZN3WTF8fastFreeEPv(i21);
    i29 = 23;
   }
  } while (0);
  do {
   if ((i29 | 0) == 23) {
    i16 = HEAP32[i8 >> 2] | 0;
    i15 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i16;
    HEAP32[i19 + 4 >> 2] = i15;
    if ((i16 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
     i32 = HEAP32[i19 + 4 >> 2] | 0;
     i33 = HEAP32[i19 >> 2] | 0;
    } else {
     i32 = i15;
     i33 = i16;
    }
    i16 = i3 + 16 | 0;
    HEAP32[i16 >> 2] = i33;
    HEAP32[i16 + 4 >> 2] = i32;
    HEAP8[i20 + 5 | 0] = 0;
    i16 = i3 + 40 | 0;
    HEAP32[i16 >> 2] = HEAP32[i16 >> 2] | -2147483648;
    if (!i28) {
     break;
    }
    i16 = HEAP32[(HEAP32[i27 + 8 >> 2] | 0) + 8 >> 2] | 0;
    if ((i16 | 0) == 153) {
     i34 = 9;
    } else if ((i16 | 0) == 149) {
     i34 = 17;
    } else if ((i16 | 0) == 152) {
     i34 = 25;
    } else {
     i34 = 1;
    }
    i16 = i3 + 44 | 0;
    HEAP32[i16 >> 2] = i34 | HEAP32[i16 >> 2] & -26;
   }
  } while (0);
  if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
   STACKTOP = i2;
   return;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  STACKTOP = i2;
  return;
 } else if ((i22 | 0) == 139264) {
  HEAP8[i7 + 4 | 0] = 0;
  i22 = i7 + 5 | 0;
  HEAP8[i22] = 2;
  HEAP8[i7 + 6 | 0] = 1;
  HEAPF32[i6 >> 2] = +0;
  i7 = i3 + 16 | 0;
  i9 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i9;
  HEAP8[i22] = 0;
  i22 = i3 + 40 | 0;
  HEAP32[i22 >> 2] = HEAP32[i22 >> 2] | -2147483648;
  STACKTOP = i2;
  return;
 } else {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap16mapFillXPositionENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = HEAP32[i4 + 4 >> 2] | 0;
 i22 = i21 & 516096;
 if ((i22 | 0) == 0) {
  i23 = i1 | 0;
  d24 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 312 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
  i1 = i4;
  do {
   if ((i21 & 508 | 0) == 400) {
    i25 = HEAP32[i4 + 8 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i26 = i1;
     i27 = 0;
     i28 = 0;
     break;
    }
    i26 = HEAP32[i25 + 12 >> 2] | 0;
    i27 = i25;
    i28 = 1;
   } else {
    i26 = i1;
    i27 = 0;
    i28 = 0;
   }
  } while (0);
  _memset(i8 | 0, 0, 7) | 0;
  i1 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0;
  do {
   if ((i1 - 3 & 65535) >>> 0 < 8 >>> 0 | i1 << 16 >> 16 == 108 | i1 << 16 >> 16 == 109) {
    i4 = HEAP32[i23 >> 2] | 0;
    __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i11, i26, HEAP32[i4 + 312 >> 2] | 0, HEAP32[i4 + 328 >> 2] | 0, d24, 0);
    i4 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i8 + 4 >> 2] = i4;
    HEAP8[i11 + 5 | 0] = 0;
    i29 = 23;
   } else {
    if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0) << 16 >> 16 == 2) {
     d30 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i26);
     HEAP8[i13 + 4 | 0] = 0;
     i4 = i13 + 5 | 0;
     HEAP8[i4] = 2;
     HEAP8[i13 + 6 | 0] = 1;
     HEAPF32[i12 >> 2] = d30;
     i21 = HEAP32[i12 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
     HEAP32[i8 + 4 >> 2] = i21;
     HEAP8[i4] = 0;
     i29 = 23;
     break;
    }
    i4 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i26) | 0) << 16 >> 16 == 115;
    i21 = HEAP32[i26 + 4 >> 2] | 0;
    if (!i4) {
     if (((i21 >>> 2 & 127) - 26 | 0) >>> 0 >= 4 >>> 0) {
      break;
     }
     __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i18, i26);
     i4 = HEAP32[i17 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i8 + 4 >> 2] = i4;
     HEAP8[i18 + 5 | 0] = 0;
     i29 = 23;
     break;
    }
    if ((i21 & 508 | 0) == 452) {
     i31 = HEAP32[i26 + 8 >> 2] | 0;
    } else {
     i31 = 0;
    }
    i21 = HEAP32[i23 >> 2] | 0;
    i4 = HEAP32[i31 + 8 >> 2] | 0;
    FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 1](i5, i4, HEAP32[i21 + 312 >> 2] | 0, HEAP32[i21 + 328 >> 2] | 0, d24);
    __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i16, i5, HEAP8[i31 + 12 | 0] & 1);
    i21 = HEAP32[i5 >> 2] | 0;
    if ((i21 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 15](i21);
    }
    __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i15, i16);
    i21 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i8 + 4 >> 2] = i21;
    HEAP8[i15 + 5 | 0] = 0;
    i21 = HEAP32[i16 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i29 = 23;
     break;
    }
    i4 = i21 | 0;
    i25 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i25 | 0) != 0) {
     HEAP32[i4 >> 2] = i25;
     i29 = 23;
     break;
    }
    i25 = HEAP32[i21 + 4 >> 2] | 0;
    if ((i25 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
    }
    __ZN3WTF8fastFreeEPv(i21);
    i29 = 23;
   }
  } while (0);
  do {
   if ((i29 | 0) == 23) {
    i16 = HEAP32[i8 >> 2] | 0;
    i15 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = i16;
    HEAP32[i19 + 4 >> 2] = i15;
    if ((i16 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
     i32 = HEAP32[i19 + 4 >> 2] | 0;
     i33 = HEAP32[i19 >> 2] | 0;
    } else {
     i32 = i15;
     i33 = i16;
    }
    i16 = i3 + 8 | 0;
    HEAP32[i16 >> 2] = i33;
    HEAP32[i16 + 4 >> 2] = i32;
    HEAP8[i20 + 5 | 0] = 0;
    i16 = i3 + 40 | 0;
    HEAP32[i16 >> 2] = HEAP32[i16 >> 2] | 1073741824;
    if (!i28) {
     break;
    }
    i16 = HEAP32[(HEAP32[i27 + 8 >> 2] | 0) + 8 >> 2] | 0;
    if ((i16 | 0) == 153) {
     i34 = 3;
    } else if ((i16 | 0) == 149) {
     i34 = 5;
    } else if ((i16 | 0) == 152) {
     i34 = 7;
    } else {
     i34 = 1;
    }
    i16 = i3 + 44 | 0;
    HEAP32[i16 >> 2] = i34 | HEAP32[i16 >> 2] & -8;
   }
  } while (0);
  if ((HEAP8[i9 + 5 | 0] | 0) != 10) {
   STACKTOP = i2;
   return;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
  STACKTOP = i2;
  return;
 } else if ((i22 | 0) == 139264) {
  HEAP8[i7 + 4 | 0] = 0;
  i22 = i7 + 5 | 0;
  HEAP8[i22] = 2;
  HEAP8[i7 + 6 | 0] = 1;
  HEAPF32[i6 >> 2] = +0;
  i7 = i3 + 8 | 0;
  i9 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i9;
  HEAP8[i22] = 0;
  i22 = i3 + 40 | 0;
  HEAP32[i22 >> 2] = HEAP32[i22 >> 2] | 1073741824;
  STACKTOP = i2;
  return;
 } else {
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore17CSSPrimitiveValue15convertToLengthILin1EEENS_6LengthEPKNS_11RenderStyleES5_db(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i2 + 4 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) >>> 2 & 127;
 do {
  if ((i11 | 0) == 3 | (i11 | 0) == 4 | (i11 | 0) == 108 | (i11 | 0) == 109) {
   if (!((i3 | 0) == 0 | (i4 | 0) == 0)) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   HEAP8[i1 + 5 | 0] = 15;
   HEAP8[i1 + 6 | 0] = 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 i11 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i11 - 3 & 65535) >>> 0 < 8 >>> 0 | i11 << 16 >> 16 == 108 | i11 << 16 >> 16 == 109) {
  __ZNK7WebCore17CSSPrimitiveValue13computeLengthINS_6LengthEEET_PKNS_11RenderStyleES6_fb(i1, i2, i3, i4, d5, i6);
  STACKTOP = i7;
  return;
 }
 i6 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0;
 if ((i6 - 3 & 65535) >>> 0 < 8 >>> 0 | i6 << 16 >> 16 == 108 | i6 << 16 >> 16 == 109) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIdEET_PKNS_11RenderStyleES5_fb(i2, i3, i4, d5, 0);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 3;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 2) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 1) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2) * +100;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 2;
  HEAP8[i1 + 6 | 0] = 1;
  HEAPF32[i1 >> 2] = d12;
  STACKTOP = i7;
  return;
 }
 i6 = HEAP32[i10 >> 2] | 0;
 i10 = i6 & 508;
 do {
  if ((i10 | 0) == 452) {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   i13 = HEAP32[i11 + 8 >> 2] | 0;
   FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 1](i8, i13, i3, i4, d5);
   __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i9, i8, HEAP8[i11 + 12 | 0] & 1);
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   }
   __ZN7WebCore6LengthC1EN3WTF10PassRefPtrINS_16CalculationValueEEE(i1, i9);
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i13 = i11 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i13 >> 2] = i14;
    STACKTOP = i7;
    return;
   }
   i14 = HEAP32[i11 + 4 >> 2] | 0;
   if ((i14 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
   }
   __ZN3WTF8fastFreeEPv(i11);
   STACKTOP = i7;
   return;
  } else if ((i10 | 0) == 472) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 269) {
    break;
   }
   _memset(i1 | 0, 0, 7) | 0;
   STACKTOP = i7;
   return;
  }
 } while (0);
 if (((i6 >>> 2 & 127) - 26 | 0) >>> 0 < 4 >>> 0) {
  __ZNK7WebCore17CSSPrimitiveValue24viewportPercentageLengthEv(i1, i2);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP8[i1 + 4 | 0] = 0;
  HEAP8[i1 + 5 | 0] = 15;
  HEAP8[i1 + 6 | 0] = 0;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap16mapAnimationNameEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = i5 & 516096;
 if ((i6 | 0) == 139264) {
  i7 = HEAP32[(__ZN7WebCore9Animation20initialAnimationNameEv() | 0) >> 2] | 0;
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i2 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i7;
  do {
   if ((i9 | 0) != 0) {
    i7 = i9 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i9 = i2 + 45 | 0;
  HEAP8[i9] = HEAP8[i9] | 8;
  STACKTOP = i1;
  return;
 } else if ((i6 | 0) == 0) {
  i6 = i3;
  do {
   if ((i5 & 508 | 0) == 472) {
    if ((HEAP32[i3 + 8 >> 2] | 0) != 3) {
     break;
    }
    i9 = i2 + 45 | 0;
    HEAP8[i9] = HEAP8[i9] | -128;
    STACKTOP = i1;
    return;
   }
  } while (0);
  __ZNK7WebCore17CSSPrimitiveValue14getStringValueEv(i4, i6);
  i6 = i4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  }
  i3 = i2 + 4 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i4;
  do {
   if ((i5 | 0) != 0) {
    i4 = i5 | 0;
    i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i4 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i5 = i2 + 45 | 0;
  HEAP8[i5] = HEAP8[i5] | 8;
  i5 = HEAP32[i6 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i1;
   return;
  }
  i6 = i5 | 0;
  i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i2 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i5);
   STACKTOP = i1;
   return;
  } else {
   HEAP32[i6 >> 2] = i2;
   STACKTOP = i1;
   return;
  }
 } else {
  STACKTOP = i1;
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap23mapNinePieceImageRepeatEPNS_8CSSValueERNS_14NinePieceImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i1 | 0;
 i5 = i1 + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 516604 | 0) != 400) {
  STACKTOP = i1;
  return;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i2 = HEAP32[i6 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 i7 = HEAP32[i6 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((HEAP32[i2 + 4 >> 2] & 508 | 0) == 472) {
  i8 = HEAP32[i2 + 8 >> 2] | 0;
 } else {
  i8 = 0;
 }
 if ((HEAP32[i7 + 4 >> 2] & 508 | 0) == 472) {
  i9 = HEAP32[i7 + 8 >> 2] | 0;
 } else {
  i9 = 0;
 }
 if ((i8 | 0) == 482) {
  i10 = 2;
 } else if ((i8 | 0) == 420) {
  i10 = 4;
 } else if ((i8 | 0) == 368) {
  i10 = 0;
 } else {
  i10 = 6;
 }
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i3 >> 2] | 0) == 1) {
  i11 = i3;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i3);
  i3 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i8 >> 2] | 0);
  HEAP32[i8 >> 2] = i3;
  i11 = i3;
 }
 i3 = i11 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -7 | i10;
 if ((i9 | 0) == 482) {
  i12 = 8;
 } else if ((i9 | 0) == 420) {
  i12 = 16;
 } else if ((i9 | 0) == 368) {
  i12 = 0;
 } else {
  i12 = 24;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 >> 2] | 0) == 1) {
  i13 = i9;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i5, i9);
  i9 = HEAP32[i5 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i8 >> 2] | 0);
  HEAP32[i8 >> 2] = i9;
  i13 = i9;
 }
 i9 = i13 + 4 | 0;
 HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -25 | i12;
 STACKTOP = i1;
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore13CSSToStyleMap12mapFillImageENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i4 + 4 >> 2] & 516096 | 0) == 139264) {
  i7 = i3 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    i7 = i8 + 4 | 0;
    i9 = i7 | 0;
    i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i9 >> 2] = i10;
     break;
    }
    i10 = i7 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
   }
  } while (0);
  i8 = i3 + 40 | 0;
  HEAP32[i8 >> 2] = HEAP32[i8 >> 2] | 16777216;
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore13StyleResolver10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE(i6, HEAP32[i1 >> 2] | 0, i2, i4);
 i4 = i6 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i2 = i3 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 4 | 0;
   i2 = i6 | 0;
   i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i2 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i1 = i3 + 40 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 16777216;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  STACKTOP = i5;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore13CSSToStyleMap16mapFillBlendModeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 139264) {
  i1 = i3 + 40 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -8126465;
  i1 = i3 + 44 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 64;
  return;
 } else if ((i2 | 0) == 0) {
  switch (HEAP32[i4 + 8 >> 2] | 0) {
  case 583:
   {
    i5 = 262144;
    break;
   }
  case 584:
   {
    i5 = 524288;
    break;
   }
  case 351:
   {
    i5 = 786432;
    break;
   }
  case 585:
   {
    i5 = 1048576;
    break;
   }
  case 586:
   {
    i5 = 1310720;
    break;
   }
  case 587:
   {
    i5 = 1572864;
    break;
   }
  case 588:
   {
    i5 = 1835008;
    break;
   }
  case 589:
   {
    i5 = 2097152;
    break;
   }
  case 590:
   {
    i5 = 2359296;
    break;
   }
  case 591:
   {
    i5 = 2621440;
    break;
   }
  case 592:
   {
    i5 = 2883584;
    break;
   }
  case 593:
   {
    i5 = 3145728;
    break;
   }
  case 594:
   {
    i5 = 3407872;
    break;
   }
  case 595:
   {
    i5 = 3670016;
    break;
   }
  case 596:
   {
    i5 = 3932160;
    break;
   }
  default:
   {
    i5 = 0;
   }
  }
  i4 = i3 + 40 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -8126465 | i5;
  i5 = i3 + 44 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 64;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZN7WebCore13CSSToStyleMap16mapFillCompositeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 0) {
  switch (HEAP32[i4 + 8 >> 2] | 0) {
  case 133:
   {
    i5 = 16384;
    break;
   }
  case 134:
   {
    i5 = 20480;
    break;
   }
  case 135:
   {
    i5 = 24576;
    break;
   }
  case 136:
   {
    i5 = 28672;
    break;
   }
  case 137:
   {
    i5 = 32768;
    break;
   }
  case 138:
   {
    i5 = 36864;
    break;
   }
  case 139:
   {
    i5 = 40960;
    break;
   }
  case 140:
   {
    i5 = 45056;
    break;
   }
  case 141:
   {
    i5 = 49152;
    break;
   }
  case 130:
   {
    i5 = 4096;
    break;
   }
  case 131:
   {
    i5 = 8192;
    break;
   }
  case 132:
   {
    i5 = 12288;
    break;
   }
  default:
   {
    i5 = 0;
   }
  }
  i4 = i3 + 40 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -61441 | i5;
  i5 = i3 + 44 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 32;
  return;
 } else if ((i2 | 0) == 139264) {
  i2 = i3 + 40 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -61441 | 8192;
  i2 = i3 + 44 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 32;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap20mapAnimationFillModeEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  i5 = i2 + 44 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i6 & -13;
  HEAP8[i2 + 45 | 0] = i6 >>> 8 & 255 | 2;
  return;
 } else if ((i4 | 0) == 0) {
  if ((i1 & 508 | 0) != 472) {
   return;
  }
  i1 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 3) {
   i3 = i2 + 44 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 & -13;
   HEAP8[i2 + 45 | 0] = i4 >>> 8 & 255 | 2;
   return;
  } else if ((i1 | 0) == 390) {
   i4 = i2 + 44 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i3 & -13 | 8;
   HEAP8[i2 + 45 | 0] = i3 >>> 8 & 255 | 2;
   return;
  } else if ((i1 | 0) == 389) {
   i3 = i2 + 44 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i4 & -13 | 4;
   HEAP8[i2 + 45 | 0] = i4 >>> 8 & 255 | 2;
   return;
  } else if ((i1 | 0) == 323) {
   i1 = i2 + 44 | 0;
   i4 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i4 | 12;
   HEAP8[i2 + 45 | 0] = i4 >>> 8 & 255 | 2;
   return;
  } else {
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore13CSSToStyleMap21mapAnimationDirectionEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  i5 = i2 + 44 | 0;
  i6 = i5;
  i7 = HEAP32[i6 >> 2] & -4;
  HEAP32[i6 >> 2] = i7;
  HEAP8[i5] = i7 & 255 | -128;
  return;
 } else if ((i4 | 0) == 0) {
  if ((i1 & 508 | 0) != 472) {
   return;
  }
  i1 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 32) {
   i3 = i2 + 44 | 0;
   i4 = i3;
   i7 = HEAP32[i4 >> 2] & -4;
   HEAP32[i4 >> 2] = i7;
   HEAP8[i3] = i7 & 255 | -128;
   return;
  } else if ((i1 | 0) == 398) {
   i7 = i2 + 44 | 0;
   i3 = i7;
   i4 = HEAP32[i3 >> 2] & -4 | 1;
   HEAP32[i3 >> 2] = i4;
   HEAP8[i7] = i4 & 255 | -128;
   return;
  } else if ((i1 | 0) == 373) {
   i4 = i2 + 44 | 0;
   i7 = i4;
   i3 = HEAP32[i7 >> 2] & -4 | 2;
   HEAP32[i7 >> 2] = i3;
   HEAP8[i4] = i3 & 255 | -128;
   return;
  } else if ((i1 | 0) == 496) {
   i1 = i2 + 44 | 0;
   i2 = i1;
   i3 = HEAP32[i2 >> 2] | 3;
   HEAP32[i2 >> 2] = i3;
   HEAP8[i1] = i3 & 255 | -128;
   return;
  } else {
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap20mapAnimationDurationEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  HEAPF64[i2 + 32 >> 3] = +0;
  i5 = i2 + 45 | 0;
  HEAP8[i5] = HEAP8[i5] | 1;
  return;
 } else if ((i4 | 0) == 0) {
  i4 = i3;
  i3 = i1 >>> 2 & 127;
  do {
   if ((i3 | 0) == 15) {
    d6 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i4);
    if (d6 >= 1.7976931348623157e+308) {
     d7 = 1.7976931348623157e+308;
     break;
    }
    d7 = d6 > -1.7976931348623157e+308 ? d6 : -1.7976931348623157e+308;
   } else if ((i3 | 0) == 14) {
    d6 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i4);
    if (d6 < 1.7976931348623157e+308) {
     d8 = d6 > -1.7976931348623157e+308 ? d6 : -1.7976931348623157e+308;
    } else {
     d8 = 1.7976931348623157e+308;
    }
    d7 = d8 / +1e3;
   } else {
    d7 = +0;
   }
  } while (0);
  HEAPF64[i2 + 32 >> 3] = d7;
  i4 = i2 + 45 | 0;
  HEAP8[i4] = HEAP8[i4] | 1;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap17mapAnimationDelayEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  HEAPF64[i2 + 24 >> 3] = +0;
  i5 = i2 + 44 | 0;
  HEAP8[i5] = HEAP8[i5] | 64;
  return;
 } else if ((i4 | 0) == 0) {
  i4 = i3;
  i3 = i1 >>> 2 & 127;
  do {
   if ((i3 | 0) == 14) {
    d6 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i4);
    if (d6 < 1.7976931348623157e+308) {
     d7 = d6 > -1.7976931348623157e+308 ? d6 : -1.7976931348623157e+308;
    } else {
     d7 = 1.7976931348623157e+308;
    }
    d8 = d7 / +1e3;
   } else if ((i3 | 0) == 15) {
    d6 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i4);
    if (d6 >= 1.7976931348623157e+308) {
     d8 = 1.7976931348623157e+308;
     break;
    }
    d8 = d6 > -1.7976931348623157e+308 ? d6 : -1.7976931348623157e+308;
   } else {
    d8 = +0;
   }
  } while (0);
  HEAPF64[i2 + 24 >> 3] = d8;
  i4 = i2 + 44 | 0;
  HEAP8[i4] = HEAP8[i4] | 64;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap20mapAnimationPropertyEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = i3 + 4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = i4 & 516096;
 if ((i5 | 0) == 139264) {
  HEAP32[i2 + 12 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  i6 = i2 + 45 | 0;
  HEAP8[i6] = HEAP8[i6] | 32;
  return;
 } else if ((i5 | 0) == 0) {
  do {
   if ((i4 & 508 | 0) == 472) {
    if ((HEAP32[i3 + 8 >> 2] | 0) == 24) {
     HEAP32[i2 + 12 >> 2] = 0;
     HEAP32[i2 + 8 >> 2] = 0;
     i5 = i2 + 45 | 0;
     HEAP8[i5] = HEAP8[i5] | 32;
     return;
    }
    if ((HEAP32[i3 + 8 >> 2] | 0) != 3) {
     break;
    }
    HEAP32[i2 + 12 >> 2] = 1;
    HEAP32[i2 + 8 >> 2] = 0;
    i5 = i2 + 45 | 0;
    HEAP8[i5] = HEAP8[i5] | 32;
    return;
   }
  } while (0);
  HEAP32[i2 + 12 >> 2] = 2;
  if ((HEAP32[i1 >> 2] & 508 | 0) == 468) {
   i7 = HEAP32[i3 + 8 >> 2] | 0;
  } else {
   i7 = 0;
  }
  HEAP32[i2 + 8 >> 2] = i7;
  i7 = i2 + 45 | 0;
  HEAP8[i7] = HEAP8[i7] | 32;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap26mapAnimationIterationCountEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  HEAPF64[i2 + 16 >> 3] = +1;
  i5 = i2 + 45 | 0;
  HEAP8[i5] = HEAP8[i5] | 4;
  return;
 } else if ((i4 | 0) == 0) {
  i4 = i3;
  do {
   if ((i1 & 508 | 0) == 472) {
    if ((HEAP32[i3 + 8 >> 2] | 0) != 396) {
     break;
    }
    HEAPF64[i2 + 16 >> 3] = +-1;
    i5 = i2 + 45 | 0;
    HEAP8[i5] = HEAP8[i5] | 4;
    return;
   }
  } while (0);
  d6 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i4);
  do {
   if (d6 < 3.4028234663852886e+38) {
    if (d6 <= -3.4028234663852886e+38) {
     d7 = -3.4028234663852886e+38;
     break;
    }
    d7 = d6;
   } else {
    d7 = 3.4028234663852886e+38;
   }
  } while (0);
  HEAPF64[i2 + 16 >> 3] = d7;
  i4 = i2 + 45 | 0;
  HEAP8[i4] = HEAP8[i4] | 4;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap17mapFillAttachmentENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i1 = i2 & 516096;
 if ((i1 | 0) == 139264) {
  i5 = i3 + 40 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -33554436 | 33554432;
  return;
 } else if ((i1 | 0) == 0) {
  if ((i2 & 508 | 0) != 472) {
   return;
  }
  i2 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i2 | 0) == 328) {
   i4 = i3 + 40 | 0;
   HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -33554436 | 33554434;
   return;
  } else if ((i2 | 0) == 358) {
   i4 = i3 + 40 | 0;
   HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -33554436 | 33554432;
   return;
  } else if ((i2 | 0) == 342) {
   i2 = i3 + 40 | 0;
   HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -33554436 | 33554433;
   return;
  } else {
   return;
  }
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap13mapFillOriginENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 139264) {
  i1 = i3 + 40 | 0;
  HEAP32[i1 >> 2] = ((HEAP32[i3 + 44 >> 2] | 0) >>> 8 << 4 & 16 | HEAP32[i1 >> 2] & -134217777) ^ 134217744;
  return;
 } else if ((i2 | 0) == 0) {
  switch (HEAP32[i4 + 8 >> 2] | 0) {
  case 485:
  case 486:
   {
    i5 = 134217760;
    break;
   }
  case 124:
  case 297:
   {
    i5 = 134217776;
    break;
   }
  case 487:
  case 488:
   {
    i5 = 134217744;
    break;
   }
  default:
   {
    i5 = 134217728;
   }
  }
  i4 = i3 + 40 | 0;
  HEAP32[i4 >> 2] = i5 | HEAP32[i4 >> 2] & -134217777;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap11mapFillClipENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 0) {
  switch (HEAP32[i4 + 8 >> 2] | 0) {
  case 487:
  case 488:
   {
    i5 = 67108868;
    break;
   }
  case 485:
  case 486:
   {
    i5 = 67108872;
    break;
   }
  case 124:
  case 297:
   {
    i5 = 67108876;
    break;
   }
  default:
   {
    i5 = 67108864;
   }
  }
  i4 = i3 + 40 | 0;
  HEAP32[i4 >> 2] = i5 | HEAP32[i4 >> 2] & -67108877;
  return;
 } else if ((i2 | 0) == 139264) {
  i2 = i3 + 40 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -67108877 | 67108864;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap21mapFillMaskSourceTypeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 i1 = i2 & 516096;
 if ((i1 | 0) == 139264) {
  i5 = i3 + 40 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -8388609;
  i5 = i3 + 44 | 0;
  HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 128;
  return;
 } else if ((i1 | 0) == 0) {
  if ((i2 & 508 | 0) == 472) {
   i6 = ((HEAP32[i4 + 8 >> 2] | 0) == 110) << 23;
  } else {
   i6 = 0;
  }
  i4 = i3 + 40 | 0;
  HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -8388609 | i6;
  i6 = i3 + 44 | 0;
  HEAP32[i6 >> 2] = HEAP32[i6 >> 2] | 128;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap14mapFillRepeatYENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 139264) {
  i1 = i3 + 40 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -536874497 | 536870912;
  return;
 } else if ((i2 | 0) == 0) {
  i2 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i2 | 0) == 128) {
   i5 = 536871424;
  } else if ((i2 | 0) == 482) {
   i5 = 536871936;
  } else if ((i2 | 0) == 420) {
   i5 = 536872448;
  } else {
   i5 = 536870912;
  }
  i2 = i3 + 40 | 0;
  HEAP32[i2 >> 2] = i5 | HEAP32[i2 >> 2] & -536874497;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap14mapFillRepeatXENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i2 = HEAP32[i4 + 4 >> 2] & 516096;
 if ((i2 | 0) == 0) {
  i1 = HEAP32[i4 + 8 >> 2] | 0;
  if ((i1 | 0) == 128) {
   i5 = 268435520;
  } else if ((i1 | 0) == 482) {
   i5 = 268435584;
  } else if ((i1 | 0) == 420) {
   i5 = 268435648;
  } else {
   i5 = 268435456;
  }
  i1 = i3 + 40 | 0;
  HEAP32[i1 >> 2] = i5 | HEAP32[i1 >> 2] & -268435905;
  return;
 } else if ((i2 | 0) == 139264) {
  i2 = i3 + 40 | 0;
  HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -268435905 | 268435456;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore13CSSToStyleMap21mapAnimationPlayStateEPNS_9AnimationEPNS_8CSSValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i1 & 516096;
 if ((i4 | 0) == 139264) {
  i5 = i2 + 44 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i6 & -49;
  HEAP8[i2 + 45 | 0] = i6 >>> 8 & 255 | 16;
  return;
 } else if ((i4 | 0) == 0) {
  if ((i1 & 508 | 0) == 472) {
   i7 = ((HEAP32[i3 + 8 >> 2] | 0) == 498) << 4;
  } else {
   i7 = 0;
  }
  i3 = i2 + 44 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i1 & -49 | i7;
  HEAP8[i2 + 45 | 0] = i1 >>> 8 & 255 | 16;
  return;
 } else {
  return;
 }
}
function __ZN7WebCore25CubicBezierTimingFunctioneqERKNS_14TimingFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) != 1) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) != 4) {
  i3 = (i4 | 0) == (HEAP32[i2 + 48 >> 2] | 0);
  return i3 | 0;
 }
 if (+HEAPF64[i1 + 16 >> 3] != +HEAPF64[i2 + 16 >> 3]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF64[i1 + 24 >> 3] != +HEAPF64[i2 + 24 >> 3]) {
  i3 = 0;
  return i3 | 0;
 }
 if (+HEAPF64[i1 + 32 >> 3] != +HEAPF64[i2 + 32 >> 3]) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = +HEAPF64[i1 + 40 >> 3] == +HEAPF64[i2 + 40 >> 3];
 return i3 | 0;
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
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iii + 4;
}
function __ZN7WebCore19StepsTimingFunctioneqERKNS_14TimingFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) != 2) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = ((HEAP8[i2 + 16 | 0] ^ HEAP8[i1 + 16 | 0]) & 1) == 0;
 return i3 | 0;
}
function __ZN7WebCore13CSSToStyleMap10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyleResolver10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE(i1, HEAP32[i2 >> 2] | 0, i3, i4);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiid(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiid[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
}
function __ZNK7WebCore13CSSToStyleMap15useSVGZoomRulesEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyleResolver15useSVGZoomRulesEv(HEAP32[i1 >> 2] | 0) | 0;
}
function __ZN7WebCore20LinearTimingFunctioneqERKNS_14TimingFunctionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i2 + 8 >> 2] | 0) == 0 | 0;
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
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore13CSSToStyleMap16rootElementStyleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 >> 2] | 0) + 328 >> 2] | 0;
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
function __ZNK7WebCore13CSSToStyleMap5styleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 >> 2] | 0) + 312 >> 2] | 0;
}
function b1(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(1);
}
function __ZN7WebCore25CubicBezierTimingFunctionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore20LinearTimingFunctionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore19StepsTimingFunctionD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore25CubicBezierTimingFunctionD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore20LinearTimingFunctionD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19StepsTimingFunctionD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20LinearTimingFunctionD0Ev,b0,__ZN7WebCore19StepsTimingFunctionD1Ev,b0,__ZN7WebCore20LinearTimingFunctionD1Ev,b0,__ZN7WebCore25CubicBezierTimingFunctionD1Ev,b0,__ZN7WebCore19StepsTimingFunctionD0Ev,b0,__ZN7WebCore25CubicBezierTimingFunctionD0Ev,b0,b0,b0];
  var FUNCTION_TABLE_viiiid = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZN7WebCore25CubicBezierTimingFunctioneqERKNS_14TimingFunctionE,b4,__ZN7WebCore19StepsTimingFunctioneqERKNS_14TimingFunctionE,b4,__ZN7WebCore20LinearTimingFunctioneqERKNS_14TimingFunctionE,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiiid: dynCall_viiiid, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiiid": invoke_viiiid, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiiid = Module["dynCall_viiiid"] = asm["dynCall_viiiid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore20LinearTimingFunctionD0Ev","_strlen","__ZN7WebCore13CSSToStyleMap12mapFillImageENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap20mapAnimationPropertyEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap10styleImageENS_13CSSPropertyIDEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap17mapFillAttachmentENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap14mapFillRepeatYENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap21mapFillMaskSourceTypeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap20mapAnimationDurationEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap16mapFillBlendModeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap17mapNinePieceImageENS_13CSSPropertyIDEPNS_8CSSValueERNS_14NinePieceImageE","__ZN7WebCore13CSSToStyleMap11mapFillSizeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZNK7WebCore17CSSPrimitiveValue15convertToLengthILin1EEENS_6LengthEPKNS_11RenderStyleES5_db","__ZNK7WebCore13CSSToStyleMap15useSVGZoomRulesEv","_memcpy","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore20LinearTimingFunctionD1Ev","__ZN7WebCore13CSSToStyleMap17mapAnimationDelayEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap22mapNinePieceImageSliceEPNS_8CSSValueERNS_14NinePieceImageE","__ZN7WebCore13CSSToStyleMap14mapFillRepeatXENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap26mapAnimationTimingFunctionEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap16mapFillYPositionENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","_memset","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZN7WebCore13CSSToStyleMap20mapAnimationFillModeEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore25CubicBezierTimingFunctionD1Ev","__ZN7WebCore13CSSToStyleMap21mapAnimationDirectionEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap21mapNinePieceImageQuadEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap16mapAnimationNameEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap23mapNinePieceImageRepeatEPNS_8CSSValueERNS_14NinePieceImageE","__ZNK7WebCore13CSSToStyleMap5styleEv","__ZN7WebCore13CSSToStyleMap21mapAnimationPlayStateEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap16mapFillCompositeENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore13CSSToStyleMap11mapFillClipENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore25CubicBezierTimingFunctioneqERKNS_14TimingFunctionE","__ZN7WebCore19StepsTimingFunctioneqERKNS_14TimingFunctionE","__ZNK7WebCore13CSSToStyleMap16rootElementStyleEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore13CSSToStyleMap26mapAnimationIterationCountEPNS_9AnimationEPNS_8CSSValueE","__ZN7WebCore19StepsTimingFunctionD1Ev","__ZN7WebCore13CSSToStyleMap13mapFillOriginENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore19StepsTimingFunctionD0Ev","__ZN7WebCore25CubicBezierTimingFunctionD0Ev","__ZN7WebCore13CSSToStyleMap16mapFillXPositionENS_13CSSPropertyIDEPNS_9FillLayerEPNS_8CSSValueE","__ZN7WebCore20LinearTimingFunctioneqERKNS_14TimingFunctionE"]

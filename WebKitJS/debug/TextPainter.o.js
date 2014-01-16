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
H_BASE = parentModule["_malloc"](40 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 40;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11TextPainterC1ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_;
/* memory initializer */ allocate([252,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
function invoke_viiiiiiiiiiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19) {
  try {
    Module["dynCall_viiiiiiiiiiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11,a12,a13,a14,a15,a16,a17,a18,a19);
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
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var invoke_viiiiiiiiiiiiiiiiiii=env.invoke_viiiiiiiiiiiiiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11TextPainter9paintTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 d13 = +HEAPF32[i12 >> 2];
 d14 = +HEAPF32[i12 + 4 >> 2];
 i12 = i1 | 0;
 do {
  if ((HEAP8[i12] & 1) == 0) {
   i15 = i1 + 48 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = i1 + 52 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   i19 = +HEAPF32[i18 + 28 >> 2] > +0;
   if (i19) {
    __ZN7WebCore15GraphicsContext4saveEv(i16);
    i20 = HEAP32[i15 >> 2] | 0;
    i21 = HEAP32[i17 >> 2] | 0;
   } else {
    i20 = i16;
    i21 = i18;
   }
   __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i20, i21, 0);
   i18 = i1 + 1 | 0;
   do {
    if ((HEAP8[i18] & 1) == 0) {
     i22 = 6;
    } else {
     i23 = HEAP32[i1 + 12 >> 2] | 0;
     i24 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i23 | 0) <= (i24 | 0)) {
      i22 = 6;
      break;
     }
     __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(HEAP32[i15 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0, __ZN3WTF8nullAtomE, 0, i23, i24, HEAP32[i1 + 16 >> 2] | 0, HEAP32[i1 + 36 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, +HEAPF32[(HEAP32[i17 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i1 + 44 | 0] & 1) != 0);
    }
   } while (0);
   if ((i22 | 0) == 6) {
    i24 = HEAP32[i1 + 16 >> 2] | 0;
    __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(HEAP32[i15 >> 2] | 0, HEAP32[i1 + 4 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0, __ZN3WTF8nullAtomE, 0, 0, i24, i24, HEAP32[i1 + 36 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, +HEAPF32[(HEAP32[i17 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i1 + 44 | 0] & 1) != 0);
   }
   i24 = i1 + 20 | 0;
   i23 = HEAP32[HEAP32[i24 >> 2] >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     if ((HEAP32[i23 + 4 >> 2] | 0) == 0) {
      break;
     }
     __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(HEAP32[i15 >> 2] | 0, HEAP32[i17 >> 2] | 0, 1);
     if (!(HEAP8[H_BASE + 16 | 0] | 0)) {
      i25 = __ZN3WTF10fastMallocEj(36) | 0;
      HEAP32[i25 + 4 >> 2] = 1;
      HEAP32[i25 + 8 >> 2] = 1;
      HEAPF32[i25 + 12 >> 2] = +0;
      HEAPF32[i25 + 16 >> 2] = +1;
      HEAPF32[i25 + 20 >> 2] = +0;
      i26 = i25 + 24 | 0;
      i27 = HEAP32[i26 >> 2] & -128 | 81;
      HEAP32[i26 >> 2] = i27;
      i28 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 7 & 128 | i27 & -175;
      HEAP32[i26 >> 2] = i28;
      HEAP32[i26 >> 2] = i28 & -815 | (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 8 & 256;
      HEAP32[i25 + 28 >> 2] = 0;
      HEAP32[i25 + 32 >> 2] = 0;
      HEAP32[i25 >> 2] = H_BASE + 8;
      HEAP32[H_BASE + 40 >> 2] = i25;
      HEAP8[H_BASE + 16 | 0] = 1;
     }
     i25 = i1 + 24 | 0;
     i28 = (HEAP32[i25 >> 2] | 0) == 0;
     i26 = HEAP32[(i28 ? i1 + 28 | 0 : H_BASE + 40) >> 2] | 0;
     do {
      if (i28) {
       i27 = HEAP32[i1 + 36 >> 2] | 0;
       i29 = HEAP32[i27 + 4 >> 2] | 0;
       HEAP32[i3 >> 2] = HEAP32[i27 >> 2];
       HEAP32[i3 + 4 >> 2] = i29;
      } else {
       d30 = d13 + +HEAPF32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] * +.5;
       i29 = HEAP32[i1 + 4 >> 2] | 0;
       i27 = HEAP32[i29 + 24 >> 2] | 0;
       i31 = i27 + 44 | 0;
       i32 = HEAP32[i31 >> 2] | 0;
       if ((i32 | 0) == 0) {
        i33 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i27, i29 | 0, 0) | 0;
        i29 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i33 >> 2] | 0) + 8 >> 2] & 1](i33, 32) | 0;
        HEAP32[i31 >> 2] = i29;
        i34 = i29;
       } else {
        i34 = i32;
       }
       d35 = d14 + +(_round(+(+HEAPF32[i34 + 16 >> 2])) | 0);
       HEAPF32[i3 >> 2] = d30;
       HEAPF32[i4 + 4 >> 2] = d35;
       if ((HEAP32[i25 >> 2] | 0) == 0) {
        break;
       }
       i32 = HEAP32[i15 >> 2] | 0;
       i29 = HEAP32[i11 >> 2] | 0;
       d35 = +HEAPF32[i29 >> 2];
       d30 = +HEAPF32[i29 + 4 >> 2] + +HEAPF32[i29 + 12 >> 2];
       __ZN7WebCore15AffineTransformC1Edddddd(i5, +0, +1, +-1, +0, d35 + d30, d30 - d35);
       __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i32, i5);
      }
     } while (0);
     do {
      if ((HEAP8[i18] & 1) == 0) {
       i22 = 20;
      } else {
       i28 = i1 + 12 | 0;
       i32 = HEAP32[i28 >> 2] | 0;
       i29 = i1 + 8 | 0;
       i31 = HEAP32[i29 >> 2] | 0;
       if ((i32 | 0) <= (i31 | 0)) {
        i22 = 20;
        break;
       }
       i33 = HEAP32[i15 >> 2] | 0;
       i27 = HEAP32[i25 >> 2] | 0;
       if ((i27 | 0) == 0) {
        i36 = HEAP32[i1 + 4 >> 2] | 0;
        i37 = i32;
        i38 = i31;
       } else {
        i31 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[(HEAP32[i27 + 8 >> 2] | 0) + 36 >> 2] | 0) | 0;
        i36 = i31;
        i37 = HEAP32[i28 >> 2] | 0;
        i38 = HEAP32[i29 >> 2] | 0;
       }
       __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(i33, i36, i26, HEAP32[i24 >> 2] | 0, HEAP32[i1 + 40 >> 2] | 0, i37, i38, HEAP32[i1 + 16 >> 2] | 0, i4, HEAP32[i11 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, +HEAPF32[(HEAP32[i17 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i1 + 44 | 0] & 1) != 0);
      }
     } while (0);
     if ((i22 | 0) == 20) {
      i33 = HEAP32[i15 >> 2] | 0;
      i29 = HEAP32[i25 >> 2] | 0;
      if ((i29 | 0) == 0) {
       i39 = HEAP32[i1 + 4 >> 2] | 0;
      } else {
       i39 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[(HEAP32[i29 + 8 >> 2] | 0) + 36 >> 2] | 0) | 0;
      }
      i29 = HEAP32[i1 + 16 >> 2] | 0;
      __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(i33, i39, i26, HEAP32[i24 >> 2] | 0, HEAP32[i1 + 40 >> 2] | 0, 0, i29, i29, i4, HEAP32[i11 >> 2] | 0, HEAP32[i1 + 60 >> 2] | 0, +HEAPF32[(HEAP32[i17 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i1 + 44 | 0] & 1) != 0);
     }
     if ((HEAP32[i25 >> 2] | 0) == 0) {
      break;
     }
     i29 = HEAP32[i15 >> 2] | 0;
     i33 = HEAP32[i11 >> 2] | 0;
     d35 = +HEAPF32[i33 >> 2];
     d30 = +HEAPF32[i33 + 4 >> 2] + +HEAPF32[i33 + 12 >> 2];
     __ZN7WebCore15AffineTransformC1Edddddd(i6, +0, +-1, +1, +0, d35 - d30, d35 + d30);
     __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i29, i6);
    }
   } while (0);
   if (!i19) {
    break;
   }
   __ZN7WebCore15GraphicsContext7restoreEv(i16);
  }
 } while (0);
 do {
  if ((HEAP8[i12] & 1) == 0) {
   if ((HEAP8[i1 + 1 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i12 = i1 + 8 | 0;
 i6 = i1 + 12 | 0;
 if ((HEAP32[i12 >> 2] | 0) >= (HEAP32[i6 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 48 | 0;
 i39 = HEAP32[i4 >> 2] | 0;
 i38 = i1 + 56 | 0;
 i37 = HEAP32[i38 >> 2] | 0;
 i36 = +HEAPF32[i37 + 28 >> 2] > +0;
 if (i36) {
  __ZN7WebCore15GraphicsContext4saveEv(i39);
  i40 = HEAP32[i4 >> 2] | 0;
  i41 = HEAP32[i38 >> 2] | 0;
 } else {
  i40 = i39;
  i41 = i37;
 }
 __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i40, i41, 0);
 i41 = i1 + 4 | 0;
 i40 = i1 + 28 | 0;
 i37 = i1 + 16 | 0;
 i5 = i1 + 36 | 0;
 i3 = i1 + 64 | 0;
 i34 = i1 + 44 | 0;
 __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(HEAP32[i4 >> 2] | 0, HEAP32[i41 >> 2] | 0, HEAP32[i40 >> 2] | 0, __ZN3WTF8nullAtomE, 0, HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i37 >> 2] | 0, HEAP32[i5 >> 2] | 0, HEAP32[i11 >> 2] | 0, HEAP32[i3 >> 2] | 0, +HEAPF32[(HEAP32[i38 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i34] & 1) != 0);
 i21 = i1 + 20 | 0;
 i20 = HEAP32[HEAP32[i21 >> 2] >> 2] | 0;
 do {
  if ((i20 | 0) != 0) {
   if ((HEAP32[i20 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(HEAP32[i4 >> 2] | 0, HEAP32[i38 >> 2] | 0, 1);
   if (!(HEAP8[H_BASE + 24 | 0] | 0)) {
    i15 = __ZN3WTF10fastMallocEj(36) | 0;
    HEAP32[i15 + 4 >> 2] = 1;
    HEAP32[i15 + 8 >> 2] = 1;
    HEAPF32[i15 + 12 >> 2] = +0;
    HEAPF32[i15 + 16 >> 2] = +1;
    HEAPF32[i15 + 20 >> 2] = +0;
    i17 = i15 + 24 | 0;
    i24 = HEAP32[i17 >> 2] & -128 | 81;
    HEAP32[i17 >> 2] = i24;
    i18 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 7 & 128 | i24 & -175;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 >> 2] = i18 & -815 | (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 8 & 256;
    HEAP32[i15 + 28 >> 2] = 0;
    HEAP32[i15 + 32 >> 2] = 0;
    HEAP32[i15 >> 2] = H_BASE + 8;
    HEAP32[H_BASE + 32 >> 2] = i15;
    HEAP8[H_BASE + 24 | 0] = 1;
   }
   i15 = i1 + 24 | 0;
   i18 = (HEAP32[i15 >> 2] | 0) == 0;
   i17 = HEAP32[(i18 ? i40 : H_BASE + 32) >> 2] | 0;
   do {
    if (i18) {
     i24 = HEAP32[i5 >> 2] | 0;
     i23 = HEAP32[i24 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i7 + 4 >> 2] = i23;
     i42 = HEAP32[i4 >> 2] | 0;
     i22 = 48;
    } else {
     d30 = d13 + +HEAPF32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] * +.5;
     i23 = HEAP32[i41 >> 2] | 0;
     i24 = HEAP32[i23 + 24 >> 2] | 0;
     i29 = i24 + 44 | 0;
     i33 = HEAP32[i29 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i28 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i24, i23 | 0, 0) | 0;
      i23 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i28 >> 2] | 0) + 8 >> 2] & 1](i28, 32) | 0;
      HEAP32[i29 >> 2] = i23;
      i43 = i23;
     } else {
      i43 = i33;
     }
     d35 = d14 + +(_round(+(+HEAPF32[i43 + 16 >> 2])) | 0);
     HEAPF32[i7 >> 2] = d30;
     HEAPF32[i8 + 4 >> 2] = d35;
     i33 = HEAP32[i4 >> 2] | 0;
     if ((HEAP32[i15 >> 2] | 0) == 0) {
      i42 = i33;
      i22 = 48;
      break;
     }
     i23 = HEAP32[i11 >> 2] | 0;
     d35 = +HEAPF32[i23 >> 2];
     d30 = +HEAPF32[i23 + 4 >> 2] + +HEAPF32[i23 + 12 >> 2];
     __ZN7WebCore15AffineTransformC1Edddddd(i9, +0, +1, +-1, +0, d35 + d30, d30 - d35);
     __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i33, i9);
     i33 = HEAP32[i15 >> 2] | 0;
     i23 = HEAP32[i4 >> 2] | 0;
     if ((i33 | 0) == 0) {
      i42 = i23;
      i22 = 48;
      break;
     }
     i44 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[(HEAP32[i33 + 8 >> 2] | 0) + 36 >> 2] | 0) | 0;
     i45 = i23;
    }
   } while (0);
   if ((i22 | 0) == 48) {
    i44 = HEAP32[i41 >> 2] | 0;
    i45 = i42;
   }
   __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(i45, i44, i17, HEAP32[i21 >> 2] | 0, HEAP32[i1 + 40 >> 2] | 0, HEAP32[i12 >> 2] | 0, HEAP32[i6 >> 2] | 0, HEAP32[i37 >> 2] | 0, i8, HEAP32[i11 >> 2] | 0, HEAP32[i3 >> 2] | 0, +HEAPF32[(HEAP32[i38 >> 2] | 0) + 28 >> 2] > +0, (HEAP8[i34] & 1) != 0);
   if ((HEAP32[i15 >> 2] | 0) == 0) {
    break;
   }
   i18 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   d35 = +HEAPF32[i16 >> 2];
   d30 = +HEAPF32[i16 + 4 >> 2] + +HEAPF32[i16 + 12 >> 2];
   __ZN7WebCore15AffineTransformC1Edddddd(i10, +0, +-1, +1, +0, d35 - d30, d35 + d30);
   __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i18, i10);
  }
 } while (0);
 if (!i36) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i39);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, d77 = +0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i15 = i14 | 0;
 i16 = i14 + 8 | 0;
 i17 = i14 + 16 | 0;
 i18 = i14 + 24 | 0;
 i19 = i14 + 32 | 0;
 i20 = i14 + 40 | 0;
 i21 = i14 + 48 | 0;
 i22 = i14 + 56 | 0;
 i23 = i14 + 64 | 0;
 i24 = i14 + 72 | 0;
 i25 = i14 + 80 | 0;
 i26 = i14 + 88 | 0;
 i27 = i26;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore15GraphicsContext9fillColorEv(i24, i1);
 i35 = __ZNK7WebCore15GraphicsContext14fillColorSpaceEv(i1) | 0;
 i36 = (HEAP32[i24 >> 2] & -16777216 | 0) != -16777216;
 i37 = i36 ^ 1;
 if (i36) {
  HEAP32[i25 >> 2] = -16777216;
  HEAP8[i25 + 4 | 0] = 1;
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i25, i35);
 }
 i25 = i26;
 i38 = i27 + 4 | 0;
 i39 = i28 | 0;
 i40 = i28 + 4 | 0;
 i41 = (i6 | 0) > (i7 | 0);
 i42 = (i7 | 0) > 0;
 i43 = i9 | 0;
 i44 = i32 | 0;
 i45 = i9 + 4 | 0;
 i9 = i32 + 4 | 0;
 i46 = i31 | 0;
 i47 = i31 + 4 | 0;
 i48 = i4 | 0;
 i49 = i17 | 0;
 i50 = i17 + 4 | 0;
 i51 = i16 | 0;
 i52 = i16 + 4 | 0;
 i53 = i15 | 0;
 i54 = i15 + 4 | 0;
 i55 = (i6 | 0) < (i8 | 0);
 i56 = i34 | 0;
 i57 = i34 + 4 | 0;
 i58 = i33 | 0;
 i59 = i33 + 4 | 0;
 i60 = i23 | 0;
 i61 = i23 + 4 | 0;
 i62 = i22 | 0;
 i63 = i22 + 4 | 0;
 i64 = i21 | 0;
 i65 = i21 + 4 | 0;
 i66 = i30 | 0;
 i67 = i30 + 4 | 0;
 i68 = i29 | 0;
 i69 = i29 + 4 | 0;
 i70 = i20 | 0;
 i71 = i20 + 4 | 0;
 i72 = i19 | 0;
 i73 = i19 + 4 | 0;
 i74 = i18 | 0;
 i75 = i18 + 4 | 0;
 i76 = i11;
 while (1) {
  HEAP32[i25 >> 2] = 0;
  HEAP32[i38 >> 2] = 0;
  i11 = (i76 | 0) != 0;
  do {
   if (i11) {
    __ZN7WebCore13InlineTextBox28applyShadowToGraphicsContextEPNS_15GraphicsContextEPKNS_10ShadowDataERKNS_9FloatRectEbbb(i28, i1, i76, i10, i12, i37, i13);
    d77 = +_round(+(+HEAPF32[i39 >> 2]));
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i78 = 0;
       i79 = -2147483648;
       break;
      }
      i78 = 0;
      i79 = ~~d77;
     } else {
      i78 = 0;
      i79 = 2147483647;
     }
    } while (0);
    d77 = +_round(+(+HEAPF32[i40 >> 2]));
    do {
     if (d77 < +2147483647) {
      if (d77 <= +-2147483648) {
       i80 = -2147483648;
       i81 = 0;
       break;
      }
      i80 = ~~d77;
      i81 = 0;
     } else {
      i80 = 2147483647;
      i81 = 0;
     }
    } while (0);
    HEAP32[i26 >> 2] = i81 | i79;
    HEAP32[i26 + 4 >> 2] = i80 | i78;
   } else {
    if (!i36) {
     break;
    }
    __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i24, i35);
   }
  } while (0);
  L19 : do {
   if (i41) {
    L26 : do {
     if (i42) {
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i32, i27);
      d77 = +HEAPF32[i45 >> 2] + +HEAPF32[i9 >> 2];
      HEAPF32[i46 >> 2] = +HEAPF32[i43 >> 2] + +HEAPF32[i44 >> 2];
      HEAPF32[i47 >> 2] = d77;
      i82 = HEAP32[i48 >> 2] | 0;
      do {
       if ((i82 | 0) != 0) {
        if ((HEAP32[i82 + 4 >> 2] | 0) == 0) {
         break;
        }
        HEAP32[i49 >> 2] = 0;
        HEAP32[i50 >> 2] = i5;
        __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i17);
        d77 = +HEAPF32[i47 >> 2] + +HEAPF32[i52 >> 2];
        HEAPF32[i53 >> 2] = +HEAPF32[i46 >> 2] + +HEAPF32[i51 >> 2];
        HEAPF32[i54 >> 2] = d77;
        __ZN7WebCore15GraphicsContext17drawEmphasisMarksERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i15, 0, i7);
        break L26;
       }
      } while (0);
      __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i31, 0, i7);
     }
    } while (0);
    if (!i55) {
     break;
    }
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i34, i27);
    d77 = +HEAPF32[i45 >> 2] + +HEAPF32[i57 >> 2];
    HEAPF32[i58 >> 2] = +HEAPF32[i43 >> 2] + +HEAPF32[i56 >> 2];
    HEAPF32[i59 >> 2] = d77;
    i82 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i82 | 0) != 0) {
      if ((HEAP32[i82 + 4 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i60 >> 2] = 0;
      HEAP32[i61 >> 2] = i5;
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i22, i23);
      d77 = +HEAPF32[i59 >> 2] + +HEAPF32[i63 >> 2];
      HEAPF32[i64 >> 2] = +HEAPF32[i58 >> 2] + +HEAPF32[i62 >> 2];
      HEAPF32[i65 >> 2] = d77;
      __ZN7WebCore15GraphicsContext17drawEmphasisMarksERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i21, i6, i8);
      break L19;
     }
    } while (0);
    __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i33, i6, i8);
   } else {
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i30, i27);
    d77 = +HEAPF32[i45 >> 2] + +HEAPF32[i67 >> 2];
    HEAPF32[i68 >> 2] = +HEAPF32[i43 >> 2] + +HEAPF32[i66 >> 2];
    HEAPF32[i69 >> 2] = d77;
    i82 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i82 | 0) != 0) {
      if ((HEAP32[i82 + 4 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i70 >> 2] = 0;
      HEAP32[i71 >> 2] = i5;
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i19, i20);
      d77 = +HEAPF32[i69 >> 2] + +HEAPF32[i73 >> 2];
      HEAPF32[i74 >> 2] = +HEAPF32[i68 >> 2] + +HEAPF32[i72 >> 2];
      HEAPF32[i75 >> 2] = d77;
      __ZN7WebCore15GraphicsContext17drawEmphasisMarksERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i18, i6, i7);
      break L19;
     }
    } while (0);
    __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i29, i6, i7);
   }
  } while (0);
  if (!i11) {
   i83 = 35;
   break;
  }
  i82 = i76 + 32 | 0;
  if ((HEAP32[i82 >> 2] | 0) != 0 | i12 | i36) {
   __ZN7WebCore15GraphicsContext7restoreEv(i1);
  } else {
   __ZN7WebCore15GraphicsContext11clearShadowEv(i1);
  }
  i84 = HEAP32[i82 >> 2] | 0;
  if ((i84 | 0) != 0 | i12 | i36) {
   i76 = i84;
  } else {
   i83 = 36;
   break;
  }
 }
 if ((i83 | 0) == 35) {
  STACKTOP = i14;
  return;
 } else if ((i83 | 0) == 36) {
  STACKTOP = i14;
  return;
 }
}
function __ZN7WebCore11TextPainterC2ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 HEAP8[i1 | 0] = i3 & 1;
 HEAP8[i1 + 1 | 0] = i4 & 1;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = i8;
 HEAP32[i1 + 20 >> 2] = i9;
 HEAP32[i1 + 24 >> 2] = i10;
 HEAP32[i1 + 28 >> 2] = i11;
 HEAP32[i1 + 32 >> 2] = i12;
 HEAP32[i1 + 36 >> 2] = i13;
 HEAP32[i1 + 40 >> 2] = i14;
 HEAP8[i1 + 44 | 0] = i17 & 1;
 HEAP32[i1 + 48 >> 2] = i2;
 HEAP32[i1 + 52 >> 2] = i18;
 HEAP32[i1 + 56 >> 2] = i19;
 HEAP32[i1 + 60 >> 2] = i15;
 HEAP32[i1 + 64 >> 2] = i16;
 return;
}
function __ZN7WebCore11TextPainterC1ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 HEAP8[i1 | 0] = i3 & 1;
 HEAP8[i1 + 1 | 0] = i4 & 1;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAP32[i1 + 12 >> 2] = i7;
 HEAP32[i1 + 16 >> 2] = i8;
 HEAP32[i1 + 20 >> 2] = i9;
 HEAP32[i1 + 24 >> 2] = i10;
 HEAP32[i1 + 28 >> 2] = i11;
 HEAP32[i1 + 32 >> 2] = i12;
 HEAP32[i1 + 36 >> 2] = i13;
 HEAP32[i1 + 40 >> 2] = i14;
 HEAP8[i1 + 44 | 0] = i17 & 1;
 HEAP32[i1 + 48 >> 2] = i2;
 HEAP32[i1 + 52 >> 2] = i18;
 HEAP32[i1 + 56 >> 2] = i19;
 HEAP32[i1 + 60 >> 2] = i15;
 HEAP32[i1 + 64 >> 2] = i16;
 return;
}
function __ZN7WebCore11TextPainter18paintTextInContextERNS_15GraphicsContextEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i1 + 48 | 0;
 i6 = i4 | 0;
 i7 = i5;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP32[i6 + 16 >> 2] = HEAP32[i7 + 16 >> 2];
 HEAP32[i5 >> 2] = i2;
 i2 = (HEAP32[i1 + 52 >> 2] | 0) + 28 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] + d3;
 i2 = (HEAP32[i1 + 56 >> 2] | 0) + 28 | 0;
 HEAPF32[i2 >> 2] = +HEAPF32[i2 >> 2] + d3;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN7WebCore11TextPainter9paintTextEv(i1);
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
 STACKTOP = i4;
 return;
}
function dynCall_viiiiiiiiiiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19, i20) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 i20 = i20 | 0;
 FUNCTION_TABLE_viiiiiiiiiiiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0, i13 | 0, i14 | 0, i15 | 0, i16 | 0, i17 | 0, i18 | 0, i19 | 0, i20 | 0);
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
function b2(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16, i17, i18, i19) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 i17 = i17 | 0;
 i18 = i18 | 0;
 i19 = i19 | 0;
 abort(2);
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
  var FUNCTION_TABLE_viiiiiiiiiiiiiiiiiii = [b2,b2,__ZN7WebCore11TextPainterC2ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viiiiiiiiiiiiiiiiiii: dynCall_viiiiiiiiiiiiiiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viiiiiiiiiiiiiiiiiii": invoke_viiiiiiiiiiiiiiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiiiiiiiiiiiiii = Module["dynCall_viiiiiiiiiiiiiiiiiii"] = asm["dynCall_viiiiiiiiiiiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCoreL20paintTextWithShadowsEPNS_15GraphicsContextERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringEiiiiRKNS_10FloatPointERKNS_9FloatRectEPKNS_10ShadowDataEbb","_memset","__ZN7WebCore11TextPainter9paintTextEv","_memcpy","__ZN7WebCore11TextPainterC2ERNS_15GraphicsContextEbbRKNS_4FontEiiiRKN3WTF12AtomicStringEPNS_17RenderCombineTextERNS_7TextRunERNS_9FloatRectERNS_10FloatPointEiPKNS_10ShadowDataESK_bRNS_14TextPaintStyleESM_","__ZN7WebCore11TextPainter18paintTextInContextERNS_15GraphicsContextEf"]

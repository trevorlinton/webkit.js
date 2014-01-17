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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16SimpleLineLayout9paintFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, d59 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 248 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 64 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 112 | 0;
 i13 = i5 + 136 | 0;
 i14 = i5 + 152 | 0;
 i15 = i5 + 160 | 0;
 i16 = i5 + 176 | 0;
 i17 = i5 + 216 | 0;
 i18 = i5 + 224 | 0;
 i19 = i5 + 232 | 0;
 if ((HEAP32[i3 + 20 >> 2] | 0) != 4) {
  STACKTOP = i5;
  return;
 }
 i20 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i20 + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i21 = HEAP32[i1 + 28 >> 2] | 0;
 i22 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 190 | 0] | 0) < 0;
 i23 = HEAP32[i3 >> 2] | 0;
 i24 = __ZNK7WebCore11RenderStyle4fontEv(i20) | 0;
 __ZN7WebCore21computeTextPaintStyleERKNS_10RenderTextERKNS_11RenderStyleERKNS_9PaintInfoE(i9, i21, i20, i3);
 i21 = +HEAPF32[i9 + 28 >> 2] > +0;
 if (i21) {
  __ZN7WebCore15GraphicsContext4saveEv(i23);
 }
 __ZN7WebCore21updateGraphicsContextERNS_15GraphicsContextERKNS_14TextPaintStyleENS_13FillColorTypeE(i23, i9, 0);
 i9 = i3 + 4 | 0;
 i25 = HEAP32[i9 >> 2] | 0;
 i26 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i3 + 12 | 0;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 12 >> 2] = i3;
 i3 = i4 | 0;
 i9 = i4 + 4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i10 >> 2] = i25 - (HEAP32[i3 >> 2] | 0);
 HEAP32[i10 + 4 >> 2] = i26 - i4;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i11, i1, i2);
 __ZNK7WebCore16SimpleLineLayout11RunResolver12rangeForRectERKNS_10LayoutRectE(i12, i11, i10);
 i2 = i13;
 i1 = i12;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 i1 = HEAP32[i12 + 16 >> 2] | 0;
 i12 = i13 + 4 | 0;
 if ((HEAP32[i12 >> 2] | 0) != (i1 | 0)) {
  i2 = i14 | 0;
  i4 = i16 + 4 | 0;
  i26 = i17 | 0;
  i25 = i16 + 8 | 0;
  i27 = i16 + 12 | 0;
  i28 = i16 + 16 | 0;
  i29 = i16 + 20 | 0;
  i30 = i16 + 24 | 0;
  i31 = i16 + 28 | 0;
  i32 = i16 + 32 | 0;
  i33 = i16 | 0;
  i34 = i20 + 44 | 0;
  i35 = i20 + 24 | 0;
  i20 = i18 | 0;
  i36 = i18 + 4 | 0;
  i37 = i19 + 8 | 0;
  i38 = i19 + 12 | 0;
  i39 = i6 | 0;
  i40 = i6 + 4 | 0;
  i41 = i7 | 0;
  i42 = i7 + 4 | 0;
  i43 = i8 | 0;
  i44 = i8 + 4 | 0;
  i45 = i13 | 0;
  i46 = i13 + 8 | 0;
  while (1) {
   HEAP32[i2 >> 2] = i13;
   __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i15, i14);
   do {
    if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i15, i10) | 0) {
     i47 = HEAP32[i2 >> 2] | 0;
     i48 = i47 | 0;
     i49 = HEAP32[i48 >> 2] | 0;
     i50 = HEAP32[i49 >> 2] | 0;
     i51 = i47 + 4 | 0;
     i52 = HEAP32[i51 >> 2] | 0;
     i53 = HEAP32[i50 + 8 + (i52 << 4) >> 2] | 0;
     __ZNK3WTF6String20substringSharingImplEjj(i17, i49 + 4 | 0, i53, (HEAP32[i50 + 8 + (i52 << 4) + 4 >> 2] & 2147483647) - i53 | 0);
     i53 = HEAP32[i26 >> 2] | 0;
     i52 = (i53 | 0) == 0;
     if (i52) {
      HEAP32[i4 >> 2] = 0;
      i54 = 0;
     } else {
      HEAP32[i4 >> 2] = HEAP32[i53 + 4 >> 2];
      i54 = HEAP32[i53 + 4 >> 2] | 0;
     }
     HEAP32[i25 >> 2] = i54;
     HEAPF32[i27 >> 2] = +0;
     HEAPF32[i28 >> 2] = +1;
     HEAPF32[i29 >> 2] = +0;
     i50 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
     i49 = i50 << 7 & 128 | (HEAP32[i30 >> 2] & -1020 | 81) | i50 << 8 & 256;
     HEAP32[i30 >> 2] = i49;
     HEAP32[i31 >> 2] = 0;
     HEAP32[i32 >> 2] = 0;
     do {
      if (i52) {
       HEAP32[i33 >> 2] = 0;
       HEAP32[i30 >> 2] = i49 & -559;
      } else {
       if ((HEAP32[i53 + 16 >> 2] & 32 | 0) == 0) {
        i55 = HEAP32[i53 + 8 >> 2] | 0;
        i56 = i49;
        i57 = i53;
       } else {
        i50 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i53) | 0;
        i55 = i50;
        i56 = HEAP32[i30 >> 2] | 0;
        i57 = HEAP32[i26 >> 2] | 0;
       }
       HEAP32[i33 >> 2] = i55;
       HEAP32[i30 >> 2] = i56 & -5;
       if ((i57 | 0) == 0) {
        break;
       }
       i50 = i57 | 0;
       i58 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
       if ((i58 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i57);
        break;
       } else {
        HEAP32[i50 >> 2] = i58;
        break;
       }
      }
     } while (0);
     i53 = HEAP32[(HEAP32[i35 >> 2] | 0) + 124 >> 2] | 0;
     HEAP32[i30 >> 2] = (((HEAP32[i34 >> 2] & 7) - 1 | 0) >>> 0 < 2 >>> 0) << 3 | HEAP32[i30 >> 2] & -9;
     HEAP32[i31 >> 2] = i53;
     i53 = HEAP32[i48 >> 2] | 0;
     i49 = HEAP32[i47 + 8 >> 2] | 0;
     i52 = Math_imul(i49 >>> 0 < 2147483647 >>> 0 ? i49 : 2147483647, HEAP32[i53 + 8 >> 2] | 0) | 0;
     d59 = +(HEAP32[i53 + 16 >> 2] | 0) + +(i52 + (HEAP32[i53 + 12 >> 2] | 0) | 0) + +(HEAP32[i9 >> 2] | 0);
     HEAPF32[i20 >> 2] = +HEAPF32[(HEAP32[i53 >> 2] | 0) + 8 + (HEAP32[i51 >> 2] << 4) + 8 >> 2] + +(HEAP32[i3 >> 2] | 0);
     HEAPF32[i36 >> 2] = d59;
     __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i23, i24, i16, i18, 0, -1);
     do {
      if (i22) {
       __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i19, i14);
       if ((HEAP32[i37 >> 2] | 0) < 1) {
        break;
       }
       if ((HEAP32[i38 >> 2] | 0) < 1) {
        break;
       }
       __ZN7WebCore15GraphicsContext4saveEv(i23);
       HEAP32[i39 >> 2] = __ZN7WebCore7makeRGBEiii(0, 255, 0) | 0;
       HEAP8[i40] = 1;
       __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i23, i6, 0);
       HEAP32[i41 >> 2] = 0;
       HEAP8[i42] = 1;
       __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i23, i7, 0);
       __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i19);
       i53 = HEAP32[i9 >> 2] | 0;
       HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + i53;
       __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i23, i8);
       __ZN7WebCore15GraphicsContext7restoreEv(i23);
      }
     } while (0);
     i51 = HEAP32[i32 >> 2] | 0;
     if ((i51 | 0) == 0) {
      break;
     }
     i47 = i51 + 4 | 0;
     i51 = i47 | 0;
     i48 = (HEAP32[i51 >> 2] | 0) - 1 | 0;
     if ((i48 | 0) != 0) {
      HEAP32[i51 >> 2] = i48;
      break;
     }
     i48 = i47 - 4 | 0;
     if ((i48 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 1](i48);
    }
   } while (0);
   i48 = HEAP32[i12 >> 2] | 0;
   if ((HEAP32[(HEAP32[HEAP32[i45 >> 2] >> 2] | 0) + 8 + (i48 << 4) + 4 >> 2] | 0) < 0) {
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + 1;
   }
   i47 = i48 + 1 | 0;
   HEAP32[i12 >> 2] = i47;
   if ((i47 | 0) == (i1 | 0)) {
    break;
   }
  }
 }
 i1 = HEAP32[i11 + 4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i11 = i1 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i11 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if (!i21) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i23);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore16SimpleLineLayout22computeTextBoundingBoxERKNS_10RenderTextERKNS0_6LayoutE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 48 | 0;
 i10 = i4 + 64 | 0;
 i11 = i4 + 72 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 96 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 144 | 0;
 i16 = i4 + 160 | 0;
 i17 = i13 | 0;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i17, HEAP32[i2 + 8 >> 2] | 0, i3);
 i3 = i13 | 0;
 i2 = HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
 } else {
  i18 = i5 | 0;
  HEAP32[i18 >> 2] = i17;
  i19 = i5 + 4 | 0;
  HEAP32[i19 >> 2] = 0;
  i20 = i5 + 8 | 0;
  HEAP32[i20 >> 2] = 0;
  HEAP32[i6 >> 2] = i5;
  __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i14, i6);
  i6 = i8 | 0;
  while (1) {
   i21 = HEAP32[i19 >> 2] | 0;
   i22 = HEAP32[i20 >> 2] | 0;
   if ((HEAP32[(HEAP32[HEAP32[i18 >> 2] >> 2] | 0) + 8 + (i21 << 4) + 4 >> 2] | 0) < 0) {
    i23 = i22 + 1 | 0;
    HEAP32[i20 >> 2] = i23;
    i24 = i23;
   } else {
    i24 = i22;
   }
   HEAP32[i19 >> 2] = i21 + 1;
   if ((i24 | 0) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = i5;
   __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i7, i8);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i14, i7);
  }
  i7 = i14 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  d25 = +(i8 | 0);
  d26 = +((HEAP32[i14 + 8 >> 2] | 0) + i8 | 0);
  i8 = i14 + 4 | 0;
  d27 = +((HEAP32[i14 + 12 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0);
  i14 = HEAP32[i3 >> 2] | 0;
  i5 = HEAP32[i14 + 4 >> 2] | 0;
  L11 : do {
   if ((i5 | 0) == (HEAP32[i14 >> 2] | 0)) {
    i6 = i5 >>> 0 > 1 >>> 0 ? 1 : i5;
    i28 = i6;
    i29 = i6;
   } else {
    i6 = 0;
    i24 = 0;
    while (1) {
     if (i6 >>> 0 >= i5 >>> 0) {
      i28 = i6;
      i29 = i24;
      break L11;
     }
     i19 = HEAP32[i14 + 8 + (i6 << 4) + 4 >> 2] | 0;
     i20 = (i19 | 0) < 0 ? 1 : i24;
     i18 = i6 + 1 | 0;
     if ((i19 | 0) > -1) {
      i6 = i18;
      i24 = i20;
     } else {
      i28 = i18;
      i29 = i20;
      break;
     }
    }
   }
  } while (0);
  i14 = i9 | 0;
  i5 = i9 + 4 | 0;
  i24 = i9 + 8 | 0;
  i6 = i10 | 0;
  i20 = i12 | 0;
  i18 = i15 | 0;
  i19 = i15 + 8 | 0;
  i21 = i15 + 4 | 0;
  i22 = i15 + 12 | 0;
  d30 = d25;
  d25 = d26;
  d26 = d27;
  i23 = i28;
  i28 = i29;
  L17 : while (1) {
   if ((i23 | 0) == (i2 | 0)) {
    break;
   } else {
    d31 = d30;
    d32 = d25;
    d33 = d26;
    i34 = i28;
   }
   while (1) {
    HEAP32[i14 >> 2] = i17;
    HEAP32[i5 >> 2] = i23;
    HEAP32[i24 >> 2] = i34;
    HEAP32[i6 >> 2] = i9;
    __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i15, i10);
    while (1) {
     i29 = HEAP32[i5 >> 2] | 0;
     i35 = HEAP32[i24 >> 2] | 0;
     if ((HEAP32[(HEAP32[HEAP32[i14 >> 2] >> 2] | 0) + 8 + (i29 << 4) + 4 >> 2] | 0) < 0) {
      i36 = i35 + 1 | 0;
      HEAP32[i24 >> 2] = i36;
      i37 = i36;
     } else {
      i37 = i35;
     }
     HEAP32[i5 >> 2] = i29 + 1;
     if ((i37 | 0) != (i34 | 0)) {
      break;
     }
     HEAP32[i20 >> 2] = i9;
     __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i11, i12);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i15, i11);
    }
    i29 = HEAP32[i18 >> 2] | 0;
    d27 = +(i29 | 0);
    d38 = d27 < d31 ? d27 : d31;
    d27 = +((HEAP32[i19 >> 2] | 0) + i29 | 0);
    d39 = d27 > d32 ? d27 : d32;
    d27 = +((HEAP32[i22 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0);
    d40 = d27 > d33 ? d27 : d33;
    i41 = HEAP32[i3 >> 2] | 0;
    i42 = HEAP32[i41 + 4 >> 2] | 0;
    if ((i42 | 0) == (HEAP32[i41 >> 2] | 0)) {
     i43 = 20;
     break;
    }
    if ((i34 | 0) == -1) {
     d31 = d38;
     d32 = d39;
     d33 = d40;
     i34 = -1;
    } else {
     break;
    }
   }
   if ((i43 | 0) == 20) {
    i43 = 0;
    i29 = i23 + 1 | 0;
    i35 = i29 >>> 0 < i42 >>> 0 ? i29 : i42;
    d30 = d38;
    d25 = d39;
    d26 = d40;
    i23 = i35;
    i28 = i35;
    continue;
   }
   i35 = i34 + 1 | 0;
   i29 = i34;
   i36 = i23;
   i44 = i34;
   while (1) {
    if (i36 >>> 0 >= i42 >>> 0) {
     d30 = d38;
     d25 = d39;
     d26 = d40;
     i23 = i36;
     i28 = i44;
     continue L17;
    }
    i45 = (HEAP32[i41 + 8 + (i36 << 4) + 4 >> 2] | 0) < 0;
    i46 = i29 + 1 | 0;
    i47 = i45 ? i46 : i44;
    i48 = i45 ? i46 : i29;
    i46 = i36 + 1 | 0;
    if (i48 >>> 0 < i35 >>> 0) {
     i29 = i48;
     i36 = i46;
     i44 = i47;
    } else {
     d30 = d38;
     d25 = d39;
     d26 = d40;
     i23 = i46;
     i28 = i47;
     continue L17;
    }
   }
  }
  d40 = +(HEAP32[i8 >> 2] | 0);
  HEAPF32[i16 >> 2] = +(HEAP32[i7 >> 2] | 0);
  HEAPF32[i16 + 4 >> 2] = d40;
  HEAPF32[i16 + 8 >> 2] = d25 - d30;
  HEAPF32[i16 + 12 >> 2] = d26 - d40;
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i16);
 }
 i16 = HEAP32[i13 + 4 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i16 | 0;
 i1 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i13 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout11hitTestFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i9 = i8 | 0;
 i10 = i8 + 24 | 0;
 i11 = i8 + 40 | 0;
 i12 = i8 + 48 | 0;
 i13 = i8 + 64 | 0;
 i14 = i8 + 72 | 0;
 i15 = i8 + 88 | 0;
 i16 = i8 + 120 | 0;
 i17 = i8 + 136 | 0;
 if ((i7 | 0) != 4) {
  i18 = 0;
  STACKTOP = i8;
  return i18 | 0;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  i18 = 0;
  STACKTOP = i8;
  return i18 | 0;
 }
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i7 + 40 >> 2] & 6144 | 0) != 0) {
  i18 = 0;
  STACKTOP = i8;
  return i18 | 0;
 }
 if ((HEAP32[i7 + 44 >> 2] & 1920 | 0) == 0) {
  i18 = 0;
  STACKTOP = i8;
  return i18 | 0;
 }
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i19 = i7;
 i20 = i5 + 8 | 0;
 i21 = i5 + 16 | 0;
 i22 = HEAP32[i20 >> 2] | 0;
 i23 = HEAP32[i20 + 4 >> 2] | 0;
 i20 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i14 + 8 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i14 + 12 >> 2] = i20;
 i20 = i6 | 0;
 i21 = i6 + 4 | 0;
 i6 = HEAP32[i21 >> 2] | 0;
 HEAP32[i14 >> 2] = i22 - (HEAP32[i20 >> 2] | 0);
 HEAP32[i14 + 4 >> 2] = i23 - i6;
 i6 = i15 | 0;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i6, i1, i2);
 __ZNK7WebCore16SimpleLineLayout11RunResolver12rangeForRectERKNS_10LayoutRectE(i9, i6, i14);
 i14 = HEAP32[i9 >> 2] | 0;
 i6 = HEAP32[i9 + 16 >> 2] | 0;
 i2 = i10 | 0;
 i1 = i10 + 4 | 0;
 i23 = i10 + 8 | 0;
 i22 = i11 | 0;
 i24 = i13 | 0;
 i25 = i16 | 0;
 i26 = i16 + 4 | 0;
 i27 = i7;
 i28 = i5 | 0;
 i29 = i5 + 4 | 0;
 i30 = i17 | 0;
 i31 = i17 + 4 | 0;
 i32 = i14 | 0;
 i33 = HEAP32[i9 + 4 >> 2] | 0;
 i34 = HEAP32[i9 + 8 >> 2] | 0;
 L13 : while (1) {
  if ((i33 | 0) == (i6 | 0)) {
   i35 = 0;
   break;
  } else {
   i36 = i34;
  }
  while (1) {
   HEAP32[i2 >> 2] = i14;
   HEAP32[i1 >> 2] = i33;
   HEAP32[i23 >> 2] = i36;
   HEAP32[i22 >> 2] = i10;
   __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i16, i11);
   while (1) {
    i9 = HEAP32[i1 >> 2] | 0;
    i37 = HEAP32[i23 >> 2] | 0;
    if ((HEAP32[(HEAP32[HEAP32[i2 >> 2] >> 2] | 0) + 8 + (i9 << 4) + 4 >> 2] | 0) < 0) {
     i38 = i37 + 1 | 0;
     HEAP32[i23 >> 2] = i38;
     i39 = i38;
    } else {
     i39 = i37;
    }
    HEAP32[i1 >> 2] = i9 + 1;
    if ((i39 | 0) != (i36 | 0)) {
     break;
    }
    HEAP32[i24 >> 2] = i10;
    __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i12, i13);
    __ZN7WebCore10LayoutRect5uniteERKS0_(i16, i12);
   }
   i9 = HEAP32[i21 >> 2] | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + (HEAP32[i20 >> 2] | 0);
   HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + i9;
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i5, i16) | 0) {
    i9 = HEAP32[(HEAP32[i27 >> 2] | 0) + 456 >> 2] | 0;
    i37 = (HEAP32[i29 >> 2] | 0) - (HEAP32[i21 >> 2] | 0) | 0;
    HEAP32[i30 >> 2] = (HEAP32[i28 >> 2] | 0) - (HEAP32[i20 >> 2] | 0);
    HEAP32[i31 >> 2] = i37;
    FUNCTION_TABLE_viii[i9 & 1](i7, i4, i17);
    if (!(__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i4, __ZNK7WebCore10RenderText8textNodeEv(i19) | 0, i3, i5, i16) | 0)) {
     i35 = 1;
     break L13;
    }
   }
   i9 = HEAP32[i32 >> 2] | 0;
   i40 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i40 | 0) == (HEAP32[i9 >> 2] | 0)) {
    i41 = 15;
    break;
   }
   if ((i36 | 0) == -1) {
    i36 = -1;
   } else {
    break;
   }
  }
  if ((i41 | 0) == 15) {
   i41 = 0;
   i9 = i33 + 1 | 0;
   i37 = i9 >>> 0 < i40 >>> 0 ? i9 : i40;
   i33 = i37;
   i34 = i37;
   continue;
  }
  i37 = i36 + 1 | 0;
  i9 = i36;
  i38 = i33;
  i42 = i36;
  while (1) {
   if (i38 >>> 0 >= i40 >>> 0) {
    i33 = i38;
    i34 = i42;
    continue L13;
   }
   i43 = (HEAP32[(HEAP32[i32 >> 2] | 0) + 8 + (i38 << 4) + 4 >> 2] | 0) < 0;
   i44 = i9 + 1 | 0;
   i45 = i43 ? i44 : i42;
   i46 = i43 ? i44 : i9;
   i44 = i38 + 1 | 0;
   if (i46 >>> 0 < i37 >>> 0) {
    i9 = i46;
    i38 = i44;
    i42 = i45;
   } else {
    i33 = i44;
    i34 = i45;
    continue L13;
   }
  }
 }
 i34 = HEAP32[i15 + 4 >> 2] | 0;
 if ((i34 | 0) == 0) {
  i18 = i35;
  STACKTOP = i8;
  return i18 | 0;
 }
 i15 = i34 | 0;
 i33 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i33 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i34);
  i18 = i35;
  STACKTOP = i8;
  return i18 | 0;
 } else {
  HEAP32[i15 >> 2] = i33;
  i18 = i35;
  STACKTOP = i8;
  return i18 | 0;
 }
 return 0;
}
function __ZN7WebCore16SimpleLineLayout24collectTextAbsoluteRectsERKNS_10RenderTextERKNS0_6LayoutERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 32 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 56 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = i1 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i1 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i1 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i6, HEAP32[i2 + 8 >> 2] | 0, i3);
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i6;
 i2 = i7 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i19 = i7 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 L1 : do {
  if ((i20 | 0) != 0) {
   i21 = i8 | 0;
   i22 = i4 | 0;
   i23 = i4 + 4 | 0;
   i24 = i9 + 8 | 0;
   i25 = i13 + 8 | 0;
   i26 = i12;
   i27 = i12;
   i28 = 0;
   i29 = 0;
   i30 = 0;
   while (1) {
    HEAP32[i21 >> 2] = i7;
    __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i11, i8);
    d31 = +(HEAP32[i24 >> 2] | 0);
    d32 = +(HEAP32[i24 + 4 >> 2] | 0);
    d33 = +(+((HEAP32[i10 >> 2] | 0) + (HEAP32[i22 >> 2] | 0) | 0));
    d34 = +(+((HEAP32[i10 + 4 >> 2] | 0) + (HEAP32[i23 >> 2] | 0) | 0));
    HEAPF32[i14 >> 2] = d33;
    HEAPF32[i14 + 4 >> 2] = d34;
    d34 = +d31;
    d31 = +d32;
    HEAPF32[i25 >> 2] = d34;
    HEAPF32[i25 + 4 >> 2] = d31;
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i15);
    if ((i28 | 0) == (i30 | 0)) {
     i35 = i30 + 1 | 0;
     do {
      if (i29 >>> 0 > i12 >>> 0) {
       i36 = 7;
      } else {
       if ((i29 + (i30 << 4) | 0) >>> 0 <= i12 >>> 0) {
        i36 = 7;
        break;
       }
       __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i35);
       i37 = HEAP32[i16 >> 2] | 0;
       i38 = i37 + (i26 - i29 >> 4 << 4) | 0;
       i39 = i37;
      }
     } while (0);
     if ((i36 | 0) == 7) {
      i36 = 0;
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i35);
      i38 = i12;
      i39 = HEAP32[i16 >> 2] | 0;
     }
     i37 = HEAP32[i18 >> 2] | 0;
     i40 = i39 + (i37 << 4) | 0;
     i41 = i38;
     HEAP32[i40 >> 2] = HEAP32[i41 >> 2];
     HEAP32[i40 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
     HEAP32[i40 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
     HEAP32[i40 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
     i42 = i39;
     i43 = i37;
    } else {
     i37 = i29 + (i28 << 4) | 0;
     HEAP32[i37 >> 2] = HEAP32[i27 >> 2];
     HEAP32[i37 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
     HEAP32[i37 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
     HEAP32[i37 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
     i42 = i29;
     i43 = i28;
    }
    i37 = i43 + 1 | 0;
    HEAP32[i18 >> 2] = i37;
    i41 = HEAP32[i2 >> 2] | 0;
    if ((HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 8 + (i41 << 4) + 4 >> 2] | 0) < 0) {
     HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
    }
    i40 = i41 + 1 | 0;
    HEAP32[i2 >> 2] = i40;
    if ((i40 | 0) == (i20 | 0)) {
     break L1;
    }
    i28 = i37;
    i29 = i42;
    i30 = HEAP32[i17 >> 2] | 0;
   }
  }
 } while (0);
 i17 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i17 | 0;
 i42 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i42 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i42;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout24collectTextAbsoluteQuadsERKNS_10RenderTextERKNS0_6LayoutEPb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 32 | 0;
 i8 = i5 + 48 | 0;
 i9 = i5 + 56 | 0;
 i10 = i5 + 72 | 0;
 i11 = i5 + 104 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = i1 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i1 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i1 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i2 | 0;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i6, HEAP32[i2 + 8 >> 2] | 0, i3);
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = i6;
 i2 = i7 + 4 | 0;
 HEAP32[i2 >> 2] = 0;
 i18 = i7 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] | 0;
 L1 : do {
  if ((i19 | 0) != 0) {
   i20 = i8 | 0;
   i21 = i9 | 0;
   i22 = i9 + 4 | 0;
   i23 = i9 + 8 | 0;
   i24 = i9 + 12 | 0;
   i25 = i11 + 8 | 0;
   i26 = i13 + 12 | 0;
   i27 = i11 + 16 | 0;
   i28 = i13 + 20 | 0;
   i29 = i11 + 24 | 0;
   i30 = i13 + 28 | 0;
   i31 = i10;
   i32 = i10;
   i33 = 0;
   i34 = 0;
   i35 = 0;
   while (1) {
    HEAP32[i20 >> 2] = i7;
    __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i9, i8);
    d36 = +(HEAP32[i21 >> 2] | 0);
    d37 = +(HEAP32[i22 >> 2] | 0);
    d38 = +(HEAP32[i23 >> 2] | 0);
    d39 = +(HEAP32[i24 >> 2] | 0);
    d40 = +d36;
    d41 = +d37;
    HEAPF32[i12 >> 2] = d40;
    HEAPF32[i12 + 4 >> 2] = d41;
    d41 = d36 + d38;
    HEAPF32[i25 >> 2] = d41;
    HEAPF32[i26 >> 2] = d37;
    d38 = d37 + d39;
    HEAPF32[i27 >> 2] = d41;
    HEAPF32[i28 >> 2] = d38;
    HEAPF32[i29 >> 2] = d36;
    HEAPF32[i30 >> 2] = d38;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i10, i17, i13, 0, 0, i4);
    if ((i33 | 0) == (i35 | 0)) {
     i42 = i35 + 1 | 0;
     do {
      if (i34 >>> 0 > i10 >>> 0) {
       i43 = 7;
      } else {
       if ((i34 + (i35 << 5) | 0) >>> 0 <= i10 >>> 0) {
        i43 = 7;
        break;
       }
       __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i42);
       i44 = HEAP32[i14 >> 2] | 0;
       i45 = i44 + (i31 - i34 >> 5 << 5) | 0;
       i46 = i44;
      }
     } while (0);
     if ((i43 | 0) == 7) {
      i43 = 0;
      __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i42);
      i45 = i10;
      i46 = HEAP32[i14 >> 2] | 0;
     }
     i44 = HEAP32[i16 >> 2] | 0;
     _memcpy(i46 + (i44 << 5) | 0, i45 | 0, 32) | 0;
     i47 = i46;
     i48 = i44;
    } else {
     _memcpy(i34 + (i33 << 5) | 0, i32 | 0, 32) | 0;
     i47 = i34;
     i48 = i33;
    }
    i44 = i48 + 1 | 0;
    HEAP32[i16 >> 2] = i44;
    i49 = HEAP32[i2 >> 2] | 0;
    if ((HEAP32[(HEAP32[HEAP32[i3 >> 2] >> 2] | 0) + 8 + (i49 << 4) + 4 >> 2] | 0) < 0) {
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
    }
    i50 = i49 + 1 | 0;
    HEAP32[i2 >> 2] = i50;
    if ((i50 | 0) == (i19 | 0)) {
     break L1;
    }
    i33 = i44;
    i34 = i47;
    i35 = HEAP32[i15 >> 2] | 0;
   }
  }
 } while (0);
 i15 = HEAP32[i6 + 4 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i15 | 0;
 i47 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i47 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i6 >> 2] = i47;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore16SimpleLineLayout19collectFlowOverflowERNS_15RenderBlockFlowERKNS0_6LayoutE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 80 | 0;
 i10 = i8 | 0;
 __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i10, i1, i2);
 i2 = i8 | 0;
 i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 i12 = i4 | 0;
 i13 = i4 + 4 | 0;
 i14 = i4 + 8 | 0;
 i15 = i5 | 0;
 i16 = i7 | 0;
 i17 = i1 | 0;
 if ((i11 | 0) != 0) {
  i1 = 0;
  i18 = 0;
  while (1) {
   i19 = i1;
   while (1) {
    HEAP32[i12 >> 2] = i10;
    HEAP32[i13 >> 2] = i18;
    HEAP32[i14 >> 2] = i19;
    HEAP32[i15 >> 2] = i4;
    __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i9, i5);
    while (1) {
     i20 = HEAP32[i13 >> 2] | 0;
     i21 = HEAP32[i14 >> 2] | 0;
     if ((HEAP32[(HEAP32[HEAP32[i12 >> 2] >> 2] | 0) + 8 + (i20 << 4) + 4 >> 2] | 0) < 0) {
      i22 = i21 + 1 | 0;
      HEAP32[i14 >> 2] = i22;
      i23 = i22;
     } else {
      i23 = i21;
     }
     HEAP32[i13 >> 2] = i20 + 1;
     if ((i23 | 0) != (i19 | 0)) {
      break;
     }
     HEAP32[i16 >> 2] = i4;
     __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i6, i7);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i9, i6);
    }
    __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i17, i9);
    __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i17, i9);
    i24 = HEAP32[i2 >> 2] | 0;
    i25 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i25 | 0) == (HEAP32[i24 >> 2] | 0)) {
     i26 = 9;
     break;
    }
    i27 = i19 + 1 | 0;
    if ((i19 | 0) == -1) {
     i19 = -1;
    } else {
     i28 = i19;
     i29 = i18;
     i30 = i19;
     i26 = 12;
     break;
    }
   }
   L14 : do {
    if ((i26 | 0) == 9) {
     i26 = 0;
     i19 = i18 + 1 | 0;
     i20 = i19 >>> 0 < i25 >>> 0 ? i19 : i25;
     i31 = i20;
     i32 = i20;
    } else if ((i26 | 0) == 12) {
     while (1) {
      i26 = 0;
      if (i29 >>> 0 >= i25 >>> 0) {
       i31 = i29;
       i32 = i30;
       break L14;
      }
      i20 = (HEAP32[i24 + 8 + (i29 << 4) + 4 >> 2] | 0) < 0;
      i19 = i28 + 1 | 0;
      i21 = i20 ? i19 : i30;
      i22 = i20 ? i19 : i28;
      i19 = i29 + 1 | 0;
      if (i22 >>> 0 < i27 >>> 0) {
       i28 = i22;
       i29 = i19;
       i30 = i21;
       i26 = 12;
      } else {
       i31 = i19;
       i32 = i21;
       break;
      }
     }
    }
   } while (0);
   if ((i31 | 0) == (i11 | 0)) {
    break;
   } else {
    i1 = i32;
    i18 = i31;
   }
  }
 }
 i31 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i31 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i31 | 0;
 i18 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i31);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i18;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore16SimpleLineLayout11RunResolver12rangeForRectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 >> 2] | 0;
  i6 = HEAP32[i5 + 4 >> 2] | 0;
  i7 = HEAP32[i5 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = i2;
  HEAP32[i1 + 16 >> 2] = i6;
  HEAP32[i1 + 20 >> 2] = i7;
  return;
 }
 i7 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i2 + 16 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0) | 0;
 d8 = +HEAPF32[i2 + 20 >> 2];
 d9 = d8 + +(i7 | 0);
 d10 = +(i4 | 0);
 i4 = ~~((d9 < +0 ? +0 : d9) / d10);
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 i11 = i5 - 1 | 0;
 i12 = i11 >>> 0 < i4 >>> 0 ? i11 : i4;
 d9 = d8 + +(i7 + (HEAP32[i3 + 12 >> 2] | 0) | 0);
 i3 = ~~((d9 < +0 ? +0 : d9) / d10);
 i7 = i11 >>> 0 < i3 >>> 0 ? i11 : i3;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 L5 : do {
  if ((i3 | 0) == (i5 | 0)) {
   i11 = i12 >>> 0 < i5 >>> 0 ? i12 : i5;
   i13 = i11;
   i14 = i11;
   i15 = i5;
  } else {
   if ((i12 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    i15 = i3;
    break;
   } else {
    i16 = 0;
    i17 = 0;
   }
   while (1) {
    if (i17 >>> 0 >= i3 >>> 0) {
     i13 = i17;
     i14 = i16;
     i15 = i3;
     break L5;
    }
    i11 = ((HEAP32[i6 + 8 + (i17 << 4) + 4 >> 2] | 0) >>> 31) + i16 | 0;
    i4 = i17 + 1 | 0;
    if (i11 >>> 0 < i12 >>> 0) {
     i16 = i11;
     i17 = i4;
    } else {
     i13 = i4;
     i14 = i11;
     i15 = i3;
     break;
    }
   }
  }
 } while (0);
 if ((i13 | 0) == (i15 | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i15;
  HEAP32[i1 + 8 >> 2] = i5;
  HEAP32[i1 + 12 >> 2] = i2;
  HEAP32[i1 + 16 >> 2] = i15;
  HEAP32[i1 + 20 >> 2] = i5;
  return;
 }
 i3 = i7 - i12 + 1 | 0;
 L16 : do {
  if ((i15 | 0) == (i5 | 0)) {
   i12 = i13 + i3 | 0;
   i7 = i12 >>> 0 < i5 >>> 0 ? i12 : i5;
   i18 = i7;
   i19 = i7;
  } else {
   i7 = i14 + i3 | 0;
   if (i14 >>> 0 < i7 >>> 0) {
    i20 = i14;
    i21 = i13;
    i22 = i14;
   } else {
    i18 = i13;
    i19 = i14;
    break;
   }
   while (1) {
    if (i21 >>> 0 >= i15 >>> 0) {
     i18 = i21;
     i19 = i22;
     break L16;
    }
    i12 = (HEAP32[i6 + 8 + (i21 << 4) + 4 >> 2] | 0) < 0;
    i17 = i20 + 1 | 0;
    i16 = i12 ? i17 : i22;
    i11 = i12 ? i17 : i20;
    i17 = i21 + 1 | 0;
    if (i11 >>> 0 < i7 >>> 0) {
     i20 = i11;
     i21 = i17;
     i22 = i16;
    } else {
     i18 = i17;
     i19 = i16;
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i13;
 HEAP32[i1 + 8 >> 2] = i14;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = i18;
 HEAP32[i1 + 20 >> 2] = i19;
 return;
}
function __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[(HEAP32[i2 + 28 >> 2] | 0) + 44 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 + 8 | 0, i6, 0, 0, 1);
 HEAP32[i1 + 12 >> 2] = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 816 >> 2] & 1](i6, 0, 0, 0, 1) | 0;
 i6 = i2 | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 752 >> 2] & 1](i6) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 720 >> 2] & 1](i5, i6);
 HEAP32[i1 + 16 >> 2] = (HEAP32[i5 >> 2] | 0) + i3;
 i3 = i2 + 36 | 0;
 i2 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i3 >> 2] | 0) | 0;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = i5 + 44 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i5, i2 | 0, 0) | 0;
  i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i8, 32) | 0;
  HEAP32[i6 >> 2] = i2;
  i9 = i2;
 } else {
  i9 = i7;
 }
 HEAPF32[i1 + 20 >> 2] = +(_round(+(+HEAPF32[i9 + 16 >> 2])) | 0);
 i9 = i1 + 24 | 0;
 i1 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = i3 + 44 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i10 = i2;
  i11 = i10 + 20 | 0;
  d12 = +HEAPF32[i11 >> 2];
  i13 = _round(+d12) | 0;
  d14 = +(i13 | 0);
  HEAPF32[i9 >> 2] = d14;
  STACKTOP = i4;
  return;
 }
 i2 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i3, i1 | 0, 0) | 0;
 i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, 32) | 0;
 HEAP32[i7 >> 2] = i1;
 i10 = i1;
 i11 = i10 + 20 | 0;
 d12 = +HEAPF32[i11 >> 2];
 i13 = _round(+d12) | 0;
 d14 = +(i13 | 0);
 HEAPF32[i9 >> 2] = d14;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = Math_imul(i6 >>> 0 < 2147483647 >>> 0 ? i6 : 2147483647, HEAP32[i2 + 8 >> 2] | 0) | 0;
 d7 = +(i3 + (HEAP32[i2 + 12 >> 2] | 0) | 0);
 d8 = +Math_floor(+HEAPF32[i4 + 8 + (i5 << 4) + 8 >> 2]);
 d9 = d8;
 do {
  if (d9 < +2147483647) {
   if (d8 <= +-2147483648) {
    i10 = 0;
    i11 = -2147483648;
    break;
   }
   i10 = 0;
   i11 = ~~d8;
  } else {
   i10 = 0;
   i11 = 2147483647;
  }
 } while (0);
 d8 = +HEAPF32[i2 + 20 >> 2];
 d12 = d7 - d8 + +(HEAP32[i2 + 16 >> 2] | 0);
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i13 = -2147483648;
    i14 = 0;
    break;
   }
   i13 = ~~d12;
   i14 = 0;
  } else {
   i13 = 2147483647;
   i14 = 0;
  }
 } while (0);
 d12 = +Math_ceil(+HEAPF32[i4 + 8 + (i5 << 4) + 12 >> 2]) - d9;
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i15 = 0;
    i16 = -2147483648;
    break;
   }
   i15 = 0;
   i16 = ~~d12;
  } else {
   i15 = 0;
   i16 = 2147483647;
  }
 } while (0);
 d12 = d8 + +HEAPF32[i2 + 24 >> 2];
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i17 = -2147483648;
    i18 = 0;
    break;
   }
   i17 = ~~d12;
   i18 = 0;
  } else {
   i17 = 2147483647;
   i18 = 0;
  }
 } while (0);
 i2 = i1;
 HEAP32[i2 >> 2] = i14 | i11;
 HEAP32[i2 + 4 >> 2] = i13 | i10;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = i18 | i16;
 HEAP32[i10 + 4 >> 2] = i17 | i15;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
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
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
 return 0;
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
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_iiiiii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiii": invoke_iiiiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore16SimpleLineLayout11RunResolver12rangeForRectERKNS_10LayoutRectE","__ZN7WebCore16SimpleLineLayout19collectFlowOverflowERNS_15RenderBlockFlowERKNS0_6LayoutE","__ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16SimpleLineLayout24collectTextAbsoluteRectsERKNS_10RenderTextERKNS0_6LayoutERKNS_11LayoutPointE","_memset","_memcpy","__ZN7WebCore16SimpleLineLayout22computeTextBoundingBoxERKNS_10RenderTextERKNS0_6LayoutE","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore16SimpleLineLayout11hitTestFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore16SimpleLineLayout9paintFlowERKNS_15RenderBlockFlowERKNS0_6LayoutERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE","__ZN7WebCore16SimpleLineLayout24collectTextAbsoluteQuadsERKNS_10RenderTextERKNS0_6LayoutEPb"]

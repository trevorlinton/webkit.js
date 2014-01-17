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
  var __ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE=env.__ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE|0;
  var __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE=env.__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE|0;
  var __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE=env.__ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE|0;
  var __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE=env.__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE|0;
  var __ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE=env.__ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE|0;
  var __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE=env.__ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE|0;
  var __ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE=env.__ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE|0;
  var __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE=env.__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE|0;
  var __ZN7WebCore21JSSVGPathSegClosePath6s_infoE=env.__ZN7WebCore21JSSVGPathSegClosePath6s_infoE|0;
  var __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE=env.__ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE|0;
  var __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE=env.__ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE|0;
  var __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE=env.__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE|0;
  var __ZN7WebCore18JSSVGPathSegArcAbs6s_infoE=env.__ZN7WebCore18JSSVGPathSegArcAbs6s_infoE|0;
  var __ZN7WebCore12JSSVGPathSeg6s_infoE=env.__ZN7WebCore12JSSVGPathSeg6s_infoE|0;
  var __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE=env.__ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE|0;
  var __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE=env.__ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE|0;
  var __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE=env.__ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE|0;
  var __ZN7WebCore18JSSVGPathSegArcRel6s_infoE=env.__ZN7WebCore18JSSVGPathSegArcRel6s_infoE|0;
  var __ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE=env.__ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE|0;
  var __ZTVN7WebCore17JSSVGPathSegOwnerE=env.__ZTVN7WebCore17JSSVGPathSegOwnerE|0;
  var __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE=env.__ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_10SVGPathSegEE17jsSVGPathSegOwner=(H_BASE+16)|0;
  var __ZZN7WebCore12wrapperOwnerERNS_15DOMWrapperWorldEPNS_10SVGPathSegEE17jsSVGPathSegOwner=(H_BASE+8)|0;
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
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_10SVGPathSegE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = i5 + 104 | 0;
 i20 = i5 + 112 | 0;
 i21 = i5 + 120 | 0;
 i22 = i5 + 128 | 0;
 i23 = i5 + 136 | 0;
 i24 = i5 + 144 | 0;
 i25 = i5 + 152 | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i1 + 4 >> 2] = -3;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i26 = i2 + 16 | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0;
 i27 = i4;
 i28 = HEAP32[i2 + 12 >> 2] | 0;
 i29 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = i4;
 i30 = i2 + ~(i2 << 15) | 0;
 i2 = (i30 >>> 10 ^ i30) * 9 & -1;
 i30 = i2 >>> 6 ^ i2;
 i2 = i30 + ~(i30 << 11) | 0;
 i30 = i2 >>> 16 ^ i2;
 L5 : do {
  if ((i29 | 0) != 0) {
   i2 = i28 & i30;
   i31 = i29 + (i2 << 3) | 0;
   i32 = HEAP32[i31 >> 2] | 0;
   if ((i32 | 0) == (i27 | 0)) {
    i33 = i31;
   } else {
    i31 = (i30 >>> 23) + ~i30 | 0;
    i34 = i31 << 12 ^ i31;
    i31 = i34 >>> 7 ^ i34;
    i34 = i31 << 2 ^ i31;
    i31 = i34 >>> 20 ^ i34 | 1;
    i34 = 0;
    i35 = i2;
    i2 = i32;
    while (1) {
     if ((i2 | 0) == 0) {
      break L5;
     }
     i32 = (i34 | 0) == 0 ? i31 : i34;
     i36 = i32 + i35 & i28;
     i37 = i29 + (i36 << 3) | 0;
     i38 = HEAP32[i37 >> 2] | 0;
     if ((i38 | 0) == (i27 | 0)) {
      i33 = i37;
      break;
     } else {
      i34 = i32;
      i35 = i36;
      i2 = i38;
     }
    }
   }
   if ((i33 | 0) == 0) {
    break;
   }
   i2 = HEAP32[i33 + 4 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] & 3 | 0) != 0) {
    break;
   }
   i35 = HEAP32[i2 >> 2] | 0;
   if ((i35 | 0) == 0) {
    break;
   }
   HEAP32[i1 + 4 >> 2] = -5;
   HEAP32[i1 >> 2] = i35;
   STACKTOP = i5;
   return;
  }
 } while (0);
 switch ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 1](i4) | 0) & 65535 | 0) {
 case 1:
  {
   i33 = i4;
   i27 = __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegClosePathEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i29 = i24 | 0;
   HEAP32[i29 >> 2] = i33;
   i28 = i4 + 4 | 0;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   i28 = __ZN7WebCore21JSSVGPathSegClosePath6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegClosePathEEE(i27, i3, i24) | 0;
   i24 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i29 = i24 + 4 | 0;
     i27 = i29 | 0;
     i30 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i30 | 0) != 0) {
      HEAP32[i27 >> 2] = i30;
      break;
     }
     i30 = i29 - 4 | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i30 >> 2] | 0) + 4 >> 2] & 1](i30);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_19SVGPathSegClosePathENS_21JSSVGPathSegClosePathEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i33, i28);
   HEAP32[i1 + 4 >> 2] = (i28 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i28;
   STACKTOP = i5;
   return;
  }
 case 2:
  {
   i28 = i4;
   i33 = __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i24 = i23 | 0;
   HEAP32[i24 >> 2] = i28;
   i30 = i4 + 4 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
   i30 = __ZN7WebCore21JSSVGPathSegMovetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoAbsEEE(i33, i3, i23) | 0;
   i23 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i23 | 0) != 0) {
     i24 = i23 + 4 | 0;
     i33 = i24 | 0;
     i29 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i29 | 0) != 0) {
      HEAP32[i33 >> 2] = i29;
      break;
     }
     i29 = i24 - 4 | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i29 >> 2] | 0) + 4 >> 2] & 1](i29);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoAbsENS_21JSSVGPathSegMovetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i28, i30);
   HEAP32[i1 + 4 >> 2] = (i30 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i30;
   STACKTOP = i5;
   return;
  }
 case 3:
  {
   i30 = i4;
   i28 = __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i23 = i22 | 0;
   HEAP32[i23 >> 2] = i30;
   i29 = i4 + 4 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   i29 = __ZN7WebCore21JSSVGPathSegMovetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoRelEEE(i28, i3, i22) | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i23 = i22 + 4 | 0;
     i28 = i23 | 0;
     i24 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
     if ((i24 | 0) != 0) {
      HEAP32[i28 >> 2] = i24;
      break;
     }
     i24 = i23 - 4 | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 1](i24);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoRelENS_21JSSVGPathSegMovetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i30, i29);
   HEAP32[i1 + 4 >> 2] = (i29 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i29;
   STACKTOP = i5;
   return;
  }
 case 4:
  {
   i29 = i4;
   i30 = __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i22 = i21 | 0;
   HEAP32[i22 >> 2] = i29;
   i24 = i4 + 4 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i24 = __ZN7WebCore21JSSVGPathSegLinetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoAbsEEE(i30, i3, i21) | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i22 = i21 + 4 | 0;
     i30 = i22 | 0;
     i23 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i30 >> 2] = i23;
      break;
     }
     i23 = i22 - 4 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 1](i23);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoAbsENS_21JSSVGPathSegLinetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i29, i24);
   HEAP32[i1 + 4 >> 2] = (i24 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i24;
   STACKTOP = i5;
   return;
  }
 case 5:
  {
   i24 = i4;
   i29 = __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i21 = i20 | 0;
   HEAP32[i21 >> 2] = i24;
   i23 = i4 + 4 | 0;
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   i23 = __ZN7WebCore21JSSVGPathSegLinetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoRelEEE(i29, i3, i20) | 0;
   i20 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i21 = i20 + 4 | 0;
     i29 = i21 | 0;
     i22 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) != 0) {
      HEAP32[i29 >> 2] = i22;
      break;
     }
     i22 = i21 - 4 | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 1](i22);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoRelENS_21JSSVGPathSegLinetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i24, i23);
   HEAP32[i1 + 4 >> 2] = (i23 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i23;
   STACKTOP = i5;
   return;
  }
 case 6:
  {
   i23 = i4;
   i24 = __ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i20 = i19 | 0;
   HEAP32[i20 >> 2] = i23;
   i22 = i4 + 4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
   i22 = __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicAbsEEE(i24, i3, i19) | 0;
   i19 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i20 = i19 + 4 | 0;
     i24 = i20 | 0;
     i21 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i24 >> 2] = i21;
      break;
     }
     i21 = i20 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 1](i21);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicAbsENS_27JSSVGPathSegCurvetoCubicAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i23, i22);
   HEAP32[i1 + 4 >> 2] = (i22 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i22;
   STACKTOP = i5;
   return;
  }
 case 7:
  {
   i22 = i4;
   i23 = __ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i19 = i18 | 0;
   HEAP32[i19 >> 2] = i22;
   i21 = i4 + 4 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   i21 = __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicRelEEE(i23, i3, i18) | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 + 4 | 0;
     i23 = i19 | 0;
     i20 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i23 >> 2] = i20;
      break;
     }
     i20 = i19 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicRelENS_27JSSVGPathSegCurvetoCubicRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i22, i21);
   HEAP32[i1 + 4 >> 2] = (i21 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i21;
   STACKTOP = i5;
   return;
  }
 case 8:
  {
   i21 = i4;
   i22 = __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i18 = i17 | 0;
   HEAP32[i18 >> 2] = i21;
   i20 = i4 + 4 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
   i20 = __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticAbsEEE(i22, i3, i17) | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 + 4 | 0;
     i22 = i18 | 0;
     i19 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i22 >> 2] = i19;
      break;
     }
     i19 = i18 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 1](i19);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticAbsENS_31JSSVGPathSegCurvetoQuadraticAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i21, i20);
   HEAP32[i1 + 4 >> 2] = (i20 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i5;
   return;
  }
 case 9:
  {
   i20 = i4;
   i21 = __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i17 = i16 | 0;
   HEAP32[i17 >> 2] = i20;
   i19 = i4 + 4 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   i19 = __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticRelEEE(i21, i3, i16) | 0;
   i16 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 + 4 | 0;
     i21 = i17 | 0;
     i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) != 0) {
      HEAP32[i21 >> 2] = i18;
      break;
     }
     i18 = i17 - 4 | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticRelENS_31JSSVGPathSegCurvetoQuadraticRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i20, i19);
   HEAP32[i1 + 4 >> 2] = (i19 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i19;
   STACKTOP = i5;
   return;
  }
 case 10:
  {
   i19 = i4;
   i20 = __ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = i19;
   i18 = i4 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i18 = __ZN7WebCore18JSSVGPathSegArcAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcAbsEEE(i20, i3, i15) | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 + 4 | 0;
     i20 = i16 | 0;
     i17 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i17 | 0) != 0) {
      HEAP32[i20 >> 2] = i17;
      break;
     }
     i17 = i16 - 4 | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_16SVGPathSegArcAbsENS_18JSSVGPathSegArcAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i19, i18);
   HEAP32[i1 + 4 >> 2] = (i18 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i18;
   STACKTOP = i5;
   return;
  }
 case 11:
  {
   i18 = i4;
   i19 = __ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i15 = i14 | 0;
   HEAP32[i15 >> 2] = i18;
   i17 = i4 + 4 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   i17 = __ZN7WebCore18JSSVGPathSegArcRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcRelEEE(i19, i3, i14) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 4 | 0;
     i19 = i15 | 0;
     i16 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i19 >> 2] = i16;
      break;
     }
     i16 = i15 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_16SVGPathSegArcRelENS_18JSSVGPathSegArcRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i18, i17);
   HEAP32[i1 + 4 >> 2] = (i17 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i5;
   return;
  }
 case 12:
  {
   i17 = i4;
   i18 = __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i14 = i13 | 0;
   HEAP32[i14 >> 2] = i17;
   i16 = i4 + 4 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   i16 = __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalAbsEEE(i18, i3, i13) | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i14 = i13 + 4 | 0;
     i18 = i14 | 0;
     i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i18 >> 2] = i15;
      break;
     }
     i15 = i14 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalAbsENS_31JSSVGPathSegLinetoHorizontalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i17, i16);
   HEAP32[i1 + 4 >> 2] = (i16 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i16;
   STACKTOP = i5;
   return;
  }
 case 13:
  {
   i16 = i4;
   i17 = __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i13 = i12 | 0;
   HEAP32[i13 >> 2] = i16;
   i15 = i4 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   i15 = __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalRelEEE(i17, i3, i12) | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 + 4 | 0;
     i17 = i13 | 0;
     i14 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i17 >> 2] = i14;
      break;
     }
     i14 = i13 - 4 | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalRelENS_31JSSVGPathSegLinetoHorizontalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i16, i15);
   HEAP32[i1 + 4 >> 2] = (i15 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i5;
   return;
  }
 case 14:
  {
   i15 = i4;
   i16 = __ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i12 = i11 | 0;
   HEAP32[i12 >> 2] = i15;
   i14 = i4 + 4 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   i14 = __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalAbsEEE(i16, i3, i11) | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i12 = i11 + 4 | 0;
     i16 = i12 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i16 >> 2] = i13;
      break;
     }
     i13 = i12 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalAbsENS_29JSSVGPathSegLinetoVerticalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i15, i14);
   HEAP32[i1 + 4 >> 2] = (i14 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i5;
   return;
  }
 case 15:
  {
   i14 = i4;
   i15 = __ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i11 = i10 | 0;
   HEAP32[i11 >> 2] = i14;
   i13 = i4 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i13 = __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalRelEEE(i15, i3, i10) | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i11 = i10 + 4 | 0;
     i15 = i11 | 0;
     i12 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i15 >> 2] = i12;
      break;
     }
     i12 = i11 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalRelENS_29JSSVGPathSegLinetoVerticalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i14, i13);
   HEAP32[i1 + 4 >> 2] = (i13 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i13;
   STACKTOP = i5;
   return;
  }
 case 16:
  {
   i13 = i4;
   i14 = __ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i10 = i9 | 0;
   HEAP32[i10 >> 2] = i13;
   i12 = i4 + 4 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   i12 = __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothAbsEEE(i14, i3, i9) | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i14 = i10 | 0;
     i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i14 >> 2] = i11;
      break;
     }
     i11 = i10 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 1](i11);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothAbsENS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i13, i12);
   HEAP32[i1 + 4 >> 2] = (i12 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i12;
   STACKTOP = i5;
   return;
  }
 case 17:
  {
   i12 = i4;
   i13 = __ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i9 = i8 | 0;
   HEAP32[i9 >> 2] = i12;
   i11 = i4 + 4 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothRelEEE(i13, i3, i8) | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i9 = i8 + 4 | 0;
     i13 = i9 | 0;
     i10 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i13 >> 2] = i10;
      break;
     }
     i10 = i9 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 1](i10);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothRelENS_33JSSVGPathSegCurvetoCubicSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i12, i11);
   HEAP32[i1 + 4 >> 2] = (i11 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i11;
   STACKTOP = i5;
   return;
  }
 case 18:
  {
   i11 = i4;
   i12 = __ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i8 = i7 | 0;
   HEAP32[i8 >> 2] = i11;
   i10 = i4 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothAbsEEE(i12, i3, i7) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 + 4 | 0;
     i12 = i8 | 0;
     i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i12 >> 2] = i9;
      break;
     }
     i9 = i8 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothAbsENS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i11, i10);
   HEAP32[i1 + 4 >> 2] = (i10 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i10;
   STACKTOP = i5;
   return;
  }
 case 19:
  {
   i10 = i4;
   i11 = __ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i7 = i6 | 0;
   HEAP32[i7 >> 2] = i10;
   i9 = i4 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothRelEEE(i11, i3, i6) | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i7 = i6 + 4 | 0;
     i11 = i7 | 0;
     i8 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i11 >> 2] = i8;
      break;
     }
     i8 = i7 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothRelENS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i10, i9);
   HEAP32[i1 + 4 >> 2] = (i9 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i9;
   STACKTOP = i5;
   return;
  }
 default:
  {
   i9 = __ZN7WebCore15getDOMStructureINS_12JSSVGPathSegEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(HEAP32[(HEAP32[i26 >> 2] & -65536) + 1076 >> 2] | 0, i3) | 0;
   i10 = i25 | 0;
   HEAP32[i10 >> 2] = i4;
   i6 = i4 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   i6 = __ZN7WebCore12JSSVGPathSeg6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGPathSegEEE(i9, i3, i25) | 0;
   i25 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i25 | 0) != 0) {
     i10 = i25 + 4 | 0;
     i3 = i10 | 0;
     i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i3 >> 2] = i9;
      break;
     }
     i9 = i10 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
    }
   } while (0);
   __ZN7WebCore12cacheWrapperINS_10SVGPathSegENS_12JSSVGPathSegEEEvRNS_15DOMWrapperWorldEPT_PT0_(HEAP32[(HEAP32[(HEAP32[HEAP32[i26 >> 2] >> 2] | 0) + 4 >> 2] | 0) + 656 >> 2] | 0, i4, i6);
   HEAP32[i1 + 4 >> 2] = (i6 | 0) == 0 ? -6 : -5;
   HEAP32[i1 >> 2] = i6;
   STACKTOP = i5;
   return;
  }
 }
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i11 = i10;
 i9 = i11 + ~(i11 << 15) | 0;
 i11 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i11 >>> 6 ^ i11;
 i11 = i9 + ~(i9 << 11) | 0;
 i9 = i11 >>> 16 ^ i11;
 i11 = i9 & i8;
 i13 = i12 + (i11 << 3) | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i13;
   i16 = i10;
  } else {
   i17 = (i9 >>> 23) + ~i9 | 0;
   i18 = i17 << 12 ^ i17;
   i17 = i18 >>> 7 ^ i18;
   i18 = i17 << 2 ^ i17;
   i17 = i18 >>> 20 ^ i18 | 1;
   i18 = 0;
   i19 = 0;
   i20 = i11;
   i21 = i13;
   i22 = i14;
   while (1) {
    if ((i22 | 0) == (i10 | 0)) {
     i23 = 8;
     break;
    }
    i24 = (i22 | 0) == -1 ? i21 : i19;
    i25 = (i18 | 0) == 0 ? i17 : i18;
    i26 = i25 + i20 & i8;
    i27 = i12 + (i26 << 3) | 0;
    i28 = HEAP32[i27 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i23 = 10;
     break;
    } else {
     i18 = i25;
     i19 = i24;
     i20 = i26;
     i21 = i27;
     i22 = i28;
    }
   }
   if ((i23 | 0) == 8) {
    i22 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i20 = i1;
    HEAP32[i20 >> 2] = i21;
    HEAP32[i20 + 4 >> 2] = i22;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   } else if ((i23 | 0) == 10) {
    if ((i24 | 0) == 0) {
     i15 = i27;
     i16 = i10;
     break;
    }
    i22 = i24;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i22 + 4 >> 2] = 0;
    i22 = i2 + 16 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - 1;
    i15 = i24;
    i16 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i16;
 i16 = i6 | 0;
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = i15 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
 HEAP32[i16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
 }
 i16 = i2 + 12 | 0;
 i3 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i3;
 i16 = i2 + 4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i4 | 0)) {
  i29 = i15;
  i30 = i4;
 } else {
  if ((i4 | 0) == 0) {
   i31 = 8;
  } else {
   i6 = i4 << 1;
   i31 = (i3 * 6 & -1 | 0) < (i6 | 0) ? i4 : i6;
  }
  i6 = __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i15) | 0;
  i29 = i6;
  i30 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   if ((HEAP32[i16 >> 2] | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i16);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
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
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i37 << 3) + 4 | 0;
    if ((HEAP32[i1 >> 2] | 0) == 0) {
     break;
    }
    __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothRelENS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothAbsENS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothRelENS_33JSSVGPathSegCurvetoCubicSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothAbsENS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalRelENS_31JSSVGPathSegLinetoHorizontalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalAbsENS_31JSSVGPathSegLinetoHorizontalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticRelENS_31JSSVGPathSegCurvetoQuadraticRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticAbsENS_31JSSVGPathSegCurvetoQuadraticAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalRelENS_29JSSVGPathSegLinetoVerticalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalAbsENS_29JSSVGPathSegLinetoVerticalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicRelENS_27JSSVGPathSegCurvetoCubicRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicAbsENS_27JSSVGPathSegCurvetoCubicAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoRelENS_21JSSVGPathSegMovetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoAbsENS_21JSSVGPathSegMovetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoRelENS_21JSSVGPathSegLinetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoAbsENS_21JSSVGPathSegLinetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_19SVGPathSegClosePathENS_21JSSVGPathSegClosePathEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16SVGPathSegArcRelENS_18JSSVGPathSegArcRelEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_16SVGPathSegArcAbsENS_18JSSVGPathSegArcAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore12cacheWrapperINS_10SVGPathSegENS_12JSSVGPathSegEEEvRNS_15DOMWrapperWorldEPT_PT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 if ((HEAP8[H_BASE + 16 | 0] | 0) == 0) {
  i9 = __Znwj(4) | 0;
  i10 = i9;
  HEAP32[i9 >> 2] = __ZTVN7WebCore17JSSVGPathSegOwnerE + 8;
  HEAP32[H_BASE + 8 >> 2] = i10;
  HEAP32[H_BASE + 16 >> 2] = 1;
  HEAP32[H_BASE + 20 >> 2] = 0;
  i11 = i10;
 } else {
  i11 = HEAP32[H_BASE + 8 >> 2] | 0;
 }
 HEAP32[i7 >> 2] = i2;
 i2 = i8 | 0;
 if ((i3 | 0) == 0) {
  i12 = 0;
 } else {
  i10 = i3;
  i3 = (i10 & -65536) + 1060 | 0;
  i9 = i3 | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i14 = __ZN3JSC7WeakSet13findAllocatorEv(i3) | 0;
  } else {
   i14 = i13;
  }
  HEAP32[i9 >> 2] = HEAP32[i14 >> 2];
  i9 = i14;
  HEAP32[i9 >> 2] = i10;
  HEAP32[i9 + 4 >> 2] = -5;
  HEAP32[i14 + 8 >> 2] = i11;
  HEAP32[i14 + 12 >> 2] = i1;
  i12 = i14;
 }
 HEAP32[i2 >> 2] = i12;
 __ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i1 + 4 | 0, i7, i8);
 do {
  if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i5 | 0;
   i1 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i12 = i8 + 4 | 0;
   i8 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i1;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    break;
   }
   __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i7);
  }
 } while (0);
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore29JSSVGPathSegLinetoVerticalRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore27JSSVGPathSegCurvetoCubicRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSSVGPathSegMovetoRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSSVGPathSegMovetoAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSSVGPathSegLinetoRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSSVGPathSegLinetoAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_21JSSVGPathSegClosePathEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore21JSSVGPathSegClosePath6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore21JSSVGPathSegClosePath15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore21JSSVGPathSegClosePath6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore21JSSVGPathSegClosePath6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGPathSegArcRel6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGPathSegArcRel15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGPathSegArcRel6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGPathSegArcRel6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore18JSSVGPathSegArcAbs6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore18JSSVGPathSegArcAbs15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore18JSSVGPathSegArcAbs6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore18JSSVGPathSegArcAbs6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore31JSSVGPathSegLinetoHorizontalRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore29JSSVGPathSegLinetoVerticalRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore29JSSVGPathSegLinetoVerticalRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore29JSSVGPathSegLinetoVerticalAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore27JSSVGPathSegCurvetoCubicRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore27JSSVGPathSegCurvetoCubicRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore27JSSVGPathSegCurvetoCubicAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore15getDOMStructureINS_12JSSVGPathSegEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZN7WebCore21getCachedDOMStructureEPNS_17JSDOMGlobalObjectEPKN3JSC9ClassInfoE(i2, __ZN7WebCore12JSSVGPathSeg6s_infoE) | 0;
 if ((i6 | 0) != 0) {
  i7 = i6;
  STACKTOP = i3;
  return i7 | 0;
 }
 i6 = i2;
 i8 = __ZN7WebCore12JSSVGPathSeg15createPrototypeERN3JSC2VMEPNS1_14JSGlobalObjectE(i1, i6) | 0;
 i9 = (i8 | 0) == 0;
 HEAP8[i5 | 0] = 17;
 HEAP8[i5 + 1 | 0] = 96;
 HEAP8[i5 + 2 | 0] = 0;
 i10 = i1 + 7104 | 0;
 i11 = i10 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i10, 64) | 0;
 } else {
  HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
  i13 = i12;
 }
 HEAP32[i13 >> 2] = 0;
 i12 = i13;
 i13 = i4 | 0;
 HEAP32[i13 >> 2] = (i9 ? 0 : 0) | i8;
 HEAP32[i13 + 4 >> 2] = i9 ? -6 : -5;
 __ZN3JSC9StructureC1ERNS_2VMEPNS_14JSGlobalObjectENS_7JSValueERKNS_8TypeInfoEPKNS_9ClassInfoEhj(i12, i1, i6, i4, i5, __ZN7WebCore12JSSVGPathSeg6s_infoE, 0, 0);
 i7 = __ZN7WebCore17cacheDOMStructureEPNS_17JSDOMGlobalObjectEPN3JSC9StructureEPKNS2_9ClassInfoE(i2, i12, __ZN7WebCore12JSSVGPathSeg6s_infoE) | 0;
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore21JSSVGPathSegMovetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSSVGPathSegMovetoRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore21JSSVGPathSegMovetoRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSSVGPathSegMovetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSSVGPathSegMovetoAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore21JSSVGPathSegMovetoAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSSVGPathSegLinetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSSVGPathSegLinetoRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore21JSSVGPathSegLinetoRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSSVGPathSegLinetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSSVGPathSegLinetoAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore21JSSVGPathSegLinetoAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore21JSSVGPathSegClosePath6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegClosePathEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore21JSSVGPathSegClosePathC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegClosePathEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore21JSSVGPathSegClosePath14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGPathSegArcRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcRelEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSSVGPathSegArcRelC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcRelEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore18JSSVGPathSegArcRel14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore18JSSVGPathSegArcAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcAbsEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore18JSSVGPathSegArcAbsC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcAbsEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore18JSSVGPathSegArcAbs14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore12JSSVGPathSeg6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGPathSegEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = (i2 & -65536) + 1076 | 0;
 i7 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0) + 460 | 0;
 i8 = i7 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZN3JSC15MarkedAllocator16allocateSlowCaseEj(i7, 16) | 0;
 } else {
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  i10 = i9;
 }
 HEAP32[i10 >> 2] = 0;
 i9 = i10;
 i10 = i5 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i10 >> 2] = i3;
 __ZN7WebCore12JSSVGPathSegC1EPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGPathSegEEE(i9, i1, i2, i5);
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i10 = i5 + 4 | 0;
   i2 = i10 | 0;
   i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i2 >> 2] = i1;
    break;
   }
   i1 = i10 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 1](i1);
  }
 } while (0);
 __ZN7WebCore12JSSVGPathSeg14finishCreationERN3JSC2VME(i9, HEAP32[(HEAP32[i6 >> 2] | 0) + 20544 >> 2] | 0);
 STACKTOP = i4;
 return i9 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE": __ZN7WebCore21JSSVGPathSegLinetoAbs6s_infoE, "__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE": __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6s_infoE, "__ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE": __ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6s_infoE, "__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE": __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6s_infoE, "__ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE": __ZN7WebCore21JSSVGPathSegLinetoRel6s_infoE, "__ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE": __ZN7WebCore29JSSVGPathSegLinetoVerticalRel6s_infoE, "__ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE": __ZN7WebCore21JSSVGPathSegMovetoRel6s_infoE, "__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE": __ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6s_infoE, "__ZN7WebCore21JSSVGPathSegClosePath6s_infoE": __ZN7WebCore21JSSVGPathSegClosePath6s_infoE, "__ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE": __ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6s_infoE, "__ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE": __ZN7WebCore27JSSVGPathSegCurvetoCubicRel6s_infoE, "__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE": __ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6s_infoE, "__ZN7WebCore18JSSVGPathSegArcAbs6s_infoE": __ZN7WebCore18JSSVGPathSegArcAbs6s_infoE, "__ZN7WebCore12JSSVGPathSeg6s_infoE": __ZN7WebCore12JSSVGPathSeg6s_infoE, "__ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE": __ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6s_infoE, "__ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE": __ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6s_infoE, "__ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE": __ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6s_infoE, "__ZN7WebCore18JSSVGPathSegArcRel6s_infoE": __ZN7WebCore18JSSVGPathSegArcRel6s_infoE, "__ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE": __ZN7WebCore21JSSVGPathSegMovetoAbs6s_infoE, "__ZTVN7WebCore17JSSVGPathSegOwnerE": __ZTVN7WebCore17JSSVGPathSegOwnerE, "__ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE": __ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6s_infoE }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoRelENS_21JSSVGPathSegMovetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothRelEEE","__ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore29JSSVGPathSegLinetoVerticalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalRelEEE","__ZN7WebCore21JSSVGPathSegLinetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoRelEEE","__ZN7WebCore31JSSVGPathSegCurvetoQuadraticAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticAbsEEE","__ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalRelENS_29JSSVGPathSegLinetoVerticalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalAbsENS_31JSSVGPathSegLinetoHorizontalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore21JSSVGPathSegMovetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoAbsEEE","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZN7WebCore12cacheWrapperINS_16SVGPathSegArcRelENS_18JSSVGPathSegArcRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_31JSSVGPathSegCurvetoQuadraticAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_29SVGPathSegLinetoHorizontalRelENS_31JSSVGPathSegLinetoHorizontalRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_21JSSVGPathSegClosePathEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore21JSSVGPathSegClosePath6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegClosePathEEE","__ZN7WebCore37JSSVGPathSegCurvetoQuadraticSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_35SVGPathSegCurvetoQuadraticSmoothAbsEEE","_memset","__ZN7WebCore27JSSVGPathSegCurvetoCubicRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicRelEEE","__ZN7WebCore31JSSVGPathSegLinetoHorizontalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalAbsEEE","_memcpy","__ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticRelENS_31JSSVGPathSegCurvetoQuadraticRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_31JSSVGPathSegLinetoHorizontalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothAbsENS_37JSSVGPathSegCurvetoQuadraticSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore29JSSVGPathSegLinetoVerticalAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_27SVGPathSegLinetoVerticalAbsEEE","__ZN7WebCore12cacheWrapperINS_16SVGPathSegArcAbsENS_18JSSVGPathSegArcAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoAbsENS_21JSSVGPathSegLinetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_27SVGPathSegLinetoVerticalAbsENS_29JSSVGPathSegLinetoVerticalAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore18JSSVGPathSegArcRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcRelEEE","__ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicRelENS_27JSSVGPathSegCurvetoCubicRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothRelEEE","__ZN7WebCore15getDOMStructureINS_27JSSVGPathSegCurvetoCubicAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore21JSSVGPathSegLinetoAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegLinetoAbsEEE","__ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_33JSSVGPathSegCurvetoCubicSmoothRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore18JSSVGPathSegArcAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_16SVGPathSegArcAbsEEE","__ZN7WebCore15getDOMStructureINS_29JSSVGPathSegLinetoVerticalAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_19SVGPathSegClosePathENS_21JSSVGPathSegClosePathEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore33JSSVGPathSegCurvetoCubicSmoothAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_31SVGPathSegCurvetoCubicSmoothAbsEEE","__ZN7WebCore12cacheWrapperINS_10SVGPathSegENS_12JSSVGPathSegEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_19SVGPathSegMovetoAbsENS_21JSSVGPathSegMovetoAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_19SVGPathSegLinetoRelENS_21JSSVGPathSegLinetoRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcAbsEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_35SVGPathSegCurvetoQuadraticSmoothRelENS_37JSSVGPathSegCurvetoQuadraticSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore21JSSVGPathSegMovetoRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_19SVGPathSegMovetoRelEEE","_strlen","__ZN3WTF9HashTableIPvNS_12KeyValuePairIS1_N3JSC4WeakINS3_8JSObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS1_EENS_7HashMapIS1_S6_SB_NS_10HashTraitsIS1_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EERKS1_S6_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZN7WebCore27JSSVGPathSegCurvetoCubicAbs6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_25SVGPathSegCurvetoCubicAbsEEE","__ZN7WebCore12cacheWrapperINS_25SVGPathSegCurvetoCubicAbsENS_27JSSVGPathSegCurvetoCubicAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12JSSVGPathSeg6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_10SVGPathSegEEE","__ZN7WebCore15getDOMStructureINS_21JSSVGPathSegMovetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothAbsENS_33JSSVGPathSegCurvetoCubicSmoothAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_29SVGPathSegCurvetoQuadraticAbsENS_31JSSVGPathSegCurvetoQuadraticAbsEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore12cacheWrapperINS_31SVGPathSegCurvetoCubicSmoothRelENS_33JSSVGPathSegCurvetoCubicSmoothRelEEEvRNS_15DOMWrapperWorldEPT_PT0_","__ZN7WebCore15getDOMStructureINS_18JSSVGPathSegArcRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore31JSSVGPathSegCurvetoQuadraticRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegCurvetoQuadraticRelEEE","__ZN7WebCore31JSSVGPathSegLinetoHorizontalRel6createEPN3JSC9StructureEPNS_17JSDOMGlobalObjectEN3WTF10PassRefPtrINS_29SVGPathSegLinetoHorizontalRelEEE","__ZN7WebCore4toJSEPN3JSC9ExecStateEPNS_17JSDOMGlobalObjectEPNS_10SVGPathSegE","__ZN7WebCore15getDOMStructureINS_21JSSVGPathSegLinetoRelEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE","__ZN7WebCore15getDOMStructureINS_12JSSVGPathSegEEEPN3JSC9StructureERNS2_2VMEPNS_17JSDOMGlobalObjectE"]

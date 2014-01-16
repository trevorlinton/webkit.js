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
H_BASE = parentModule["_malloc"](488 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 488;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24CanvasRenderingContext2DC1EPNS_17HTMLCanvasElementEbb;
var __ZN7WebCore24CanvasRenderingContext2DD1Ev;
var __ZN7WebCore24CanvasRenderingContext2D5StateC1Ev;
var __ZN7WebCore24CanvasRenderingContext2D5StateC1ERKS1_;
var __ZN7WebCore24CanvasRenderingContext2D5StateD1Ev;
/* memory initializer */ allocate([101,118,101,110,111,100,100,0,110,111,110,122,101,114,111,0,115,97,110,115,45,115,101,114,105,102,0,0,0,0,0,0,105,110,105,116,105,97,108,0,105,110,104,101,114,105,116,0,45,119,101,98,107,105,116,45,0,0,0,0,0,0,0,0,112,120,0,0,0,0,0,0,115,109,97,108,108,45,99,97,112,115,32,0,0,0,0,0,49,48,112,120,32,115,97,110,115,45,115,101,114,105,102,0,105,116,97,108,105,99,32,0,85,110,97,98,108,101,32,116,111,32,103,101,116,32,105,109,97,103,101,32,100,97,116,97,32,102,114,111,109,32,99,97,110,118,97,115,32,98,101,99,97,117,115,101,32,116,104,101,32,99,97,110,118,97,115,32,104,97,115,32,98,101,101,110,32,116,97,105,110,116,101,100,32,98,121,32,99,114,111,115,115,45,111,114,105,103,105,110,32,100,97,116,97,46,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,224,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore24CanvasStrokeStyleApplierE=(H_BASE+256)|0;
  var __ZTVN7WebCore17CanvasPathMethodsE=(H_BASE+440)|0;
  var __ZTVN7WebCore22CanvasRenderingContextE=(H_BASE+392)|0;
  var __ZTVN7WebCore24CanvasRenderingContext2DE=(H_BASE+288)|0;
  var __ZTVN7WebCore24CanvasRenderingContext2D5StateE=(H_BASE+360)|0;
  var __ZTVN7WebCore7DOMPathE=(H_BASE+224)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 72 | 0;
 i12 = i3 + 80 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 96 | 0;
 i15 = i3 + 104 | 0;
 i16 = i3 + 112 | 0;
 i17 = i1 + 48 | 0;
 i18 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = i1 + 40 | 0;
 i20 = i2 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i20 >> 2] | 0, HEAP32[(HEAP32[i19 >> 2] | 0) + (i18 * 200 & -1) + 152 >> 2] | 0) | 0) {
   i21 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((HEAP8[(HEAP32[i19 >> 2] | 0) + (i21 * 200 & -1) + 196 | 0] & 1) == 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i5, 0);
 i18 = HEAP32[i5 >> 2] | 0;
 __ZN7WebCore9CSSParser10parseValueEPNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringEbNS_13CSSParserModeEPNS_18StyleSheetContentsE(i18, 4, i2, 1, (HEAP8[i1 + 260 | 0] & 1 ^ 1) & 255, 0) | 0;
 i2 = i18 | 0;
 i5 = i18 + 4 | 0;
 i21 = HEAP32[i5 >> 2] | 0;
 if ((i21 & 4 | 0) == 0) {
  i22 = i21 >>> 3;
 } else {
  i22 = HEAP32[i2 + 16 >> 2] | 0;
 }
 do {
  if ((i22 | 0) != 0) {
   __ZNK7WebCore15StyleProperties16getPropertyValueENS_13CSSPropertyIDE(i6, i2, 4);
   i21 = i6 | 0;
   do {
    if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i21 >> 2] | 0, H_BASE + 48 | 0) | 0)) {
     if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i21 >> 2] | 0, H_BASE + 40 | 0) | 0) {
      break;
     }
     i23 = HEAP32[i20 >> 2] | 0;
     i24 = (i23 | 0) == 0;
     if (!i24) {
      i25 = i23 | 0;
      HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 2;
     }
     if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
      __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
     }
     i25 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i26 = HEAP32[i19 >> 2] | 0;
     if (!i24) {
      i27 = i23 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
     }
     i27 = i26 + (i25 * 200 & -1) + 152 | 0;
     i25 = HEAP32[i27 >> 2] | 0;
     HEAP32[i27 >> 2] = i23;
     do {
      if ((i25 | 0) != 0) {
       i27 = i25 | 0;
       i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
       if ((i26 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i27 >> 2] = i26;
        break;
       }
      }
     } while (0);
     __ZN7WebCore11RenderStyle6createEv(i7);
     i25 = HEAP32[i7 >> 2] | 0;
     i26 = i1 + 8 | 0;
     i27 = __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(HEAP32[i26 >> 2] | 0, 0) | 0;
     if ((i27 | 0) == 0) {
      i28 = __ZN3WTF10fastMallocEj(12) | 0;
      i29 = i8 | 0;
      HEAP32[i29 >> 2] = i28 + 8;
      HEAP32[i28 >> 2] = 1;
      HEAP32[(HEAP32[i29 >> 2] | 0) - 4 >> 2] = 1;
      i28 = HEAP32[i29 >> 2] | 0;
      if ((i28 | 0) == 0) {
       i30 = 0;
      } else {
       i30 = i28 + (HEAP32[i28 - 4 >> 2] << 2) | 0;
      }
      _memset(i28 | 0, 0, i30 - i28 | 0) | 0;
      HEAP32[i8 + 4 >> 2] = 0;
      i28 = i8 + 8 | 0;
      HEAPF32[i28 >> 2] = +0;
      i31 = i8 + 12 | 0;
      HEAPF32[i31 >> 2] = +0;
      HEAP32[i8 + 16 >> 2] = 384;
      i32 = i8 + 20 | 0;
      HEAP32[i32 >> 2] = HEAP32[i32 >> 2] & -4096;
      __ZN3WTF12AtomicString3addEPKh(i4, H_BASE + 24 | 0);
      i32 = HEAP32[i4 >> 2] | 0;
      i33 = HEAP32[i29 >> 2] | 0;
      i29 = (i32 | 0) == 0;
      if (!i29) {
       i34 = i32 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
      }
      i34 = i33 | 0;
      i33 = HEAP32[i34 >> 2] | 0;
      HEAP32[i34 >> 2] = i32;
      do {
       if ((i33 | 0) != 0) {
        i34 = i33 | 0;
        i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
        if ((i35 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i33);
         break;
        } else {
         HEAP32[i34 >> 2] = i35;
         break;
        }
       }
      } while (0);
      do {
       if (!i29) {
        i33 = i32 | 0;
        i35 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
        if ((i35 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i33 >> 2] = i35;
         break;
        }
       }
      } while (0);
      HEAPF32[i28 >> 2] = +10;
      HEAPF32[i31 >> 2] = +10;
      __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i25, i8) | 0;
      __ZN7WebCore15FontDescriptionD2Ev(i8);
     } else {
      __ZN7WebCore11RenderStyle18setFontDescriptionERKNS_15FontDescriptionE(i25, __ZNK7WebCore11RenderStyle15fontDescriptionEv(i27) | 0) | 0;
     }
     i32 = __ZNK7WebCore11RenderStyle4fontEv(i25) | 0;
     i29 = HEAP32[(__ZNK7WebCore11RenderStyle4fontEv(i25) | 0) + 24 >> 2] | 0;
     do {
      if ((i29 | 0) == 0) {
       i35 = i9 | 0;
       HEAP32[i35 >> 2] = 0;
       i36 = i35;
      } else {
       i35 = HEAP32[i29 + 48 >> 2] | 0;
       i33 = i9 | 0;
       HEAP32[i33 >> 2] = i35;
       if ((i35 | 0) == 0) {
        i36 = i33;
        break;
       }
       i34 = i35 + 4 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
       i36 = i33;
      }
     } while (0);
     __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i32, i9);
     i29 = HEAP32[i36 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i27 = i29 + 4 | 0;
       i31 = i27 | 0;
       i28 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
       if ((i28 | 0) != 0) {
        HEAP32[i31 >> 2] = i28;
        break;
       }
       i28 = i27 - 4 | 0;
       if ((i28 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 63](i28);
      }
     } while (0);
     i29 = HEAP32[(HEAP32[(HEAP32[i26 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
     i32 = i29 + 320 | 0;
     i28 = HEAP32[i32 >> 2] | 0;
     if ((i28 | 0) == 0) {
      __ZN7WebCore8Document19createStyleResolverEv(i29);
      i37 = HEAP32[i32 >> 2] | 0;
     } else {
      i37 = i28;
     }
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i10, i2, 5);
     i28 = i10 | 0;
     __ZN7WebCore13StyleResolver20applyPropertyToStyleENS_13CSSPropertyIDEPNS_8CSSValueEPNS_11RenderStyleE(i37, 5, HEAP32[i28 >> 2] | 0, i25);
     i32 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i28 = i32 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i32);
        break;
       } else {
        HEAP32[i28 >> 2] = i29;
        break;
       }
      }
     } while (0);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i11, i2, 7);
     i32 = i11 | 0;
     __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i37, 7, HEAP32[i32 >> 2] | 0);
     i26 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i32 = i26 | 0;
       i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i26);
        break;
       } else {
        HEAP32[i32 >> 2] = i29;
        break;
       }
      }
     } while (0);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i12, i2, 8);
     i26 = i12 | 0;
     __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i37, 8, HEAP32[i26 >> 2] | 0);
     i29 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i26 = i29 | 0;
       i32 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i29);
        break;
       } else {
        HEAP32[i26 >> 2] = i32;
        break;
       }
      }
     } while (0);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i13, i2, 9);
     i29 = i13 | 0;
     __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i37, 9, HEAP32[i29 >> 2] | 0);
     i32 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i32 | 0) != 0) {
       i29 = i32 | 0;
       i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i32);
        break;
       } else {
        HEAP32[i29 >> 2] = i26;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13StyleResolver10updateFontEv(i37);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i14, i2, 6);
     i32 = i14 | 0;
     __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i37, 6, HEAP32[i32 >> 2] | 0);
     i26 = HEAP32[i32 >> 2] | 0;
     do {
      if ((i26 | 0) != 0) {
       i32 = i26 | 0;
       i29 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i26);
        break;
       } else {
        HEAP32[i32 >> 2] = i29;
        break;
       }
      }
     } while (0);
     __ZN7WebCore13StyleResolver10updateFontEv(i37);
     __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i15, i2, 19);
     i26 = i15 | 0;
     __ZN7WebCore13StyleResolver27applyPropertyToCurrentStyleENS_13CSSPropertyIDEPNS_8CSSValueE(i37, 19, HEAP32[i26 >> 2] | 0);
     i29 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i26 = i29 | 0;
       i32 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i32 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i29);
        break;
       } else {
        HEAP32[i26 >> 2] = i32;
        break;
       }
      }
     } while (0);
     i29 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i32 = (HEAP32[i19 >> 2] | 0) + (i29 * 200 & -1) + 156 | 0;
     __ZN7WebCore4FontaSERKS0_(i32, __ZNK7WebCore11RenderStyle4fontEv(i25) | 0) | 0;
     i32 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i29 = (HEAP32[i19 >> 2] | 0) + (i32 * 200 & -1) + 156 | 0;
     i32 = i37 + 240 | 0;
     i26 = HEAP32[i32 >> 2] | 0;
     i28 = i16 | 0;
     HEAP32[i28 >> 2] = i26;
     if ((i26 | 0) != 0) {
      i27 = i26 + 4 | 0;
      HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
     }
     __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i29, i16);
     i29 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i29 | 0) != 0) {
       i28 = i29 + 4 | 0;
       i27 = i28 | 0;
       i26 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) != 0) {
        HEAP32[i27 >> 2] = i26;
        break;
       }
       i26 = i28 - 4 | 0;
       if ((i26 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i26 >> 2] | 0) + 4 >> 2] & 63](i26);
      }
     } while (0);
     i29 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     HEAP8[(HEAP32[i19 >> 2] | 0) + (i29 * 200 & -1) + 196 | 0] = 1;
     i29 = _llvm_uadd_with_overflow_i32(HEAP32[i17 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     __ZN7WebCore15CSSFontSelector32registerForInvalidationCallbacksEPNS_18FontSelectorClientE(HEAP32[i32 >> 2] | 0, (HEAP32[i19 >> 2] | 0) + (i29 * 200 & -1) | 0);
     do {
      if ((i25 | 0) != 0) {
       i29 = i25 | 0;
       i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore11RenderStyleD2Ev(i25);
        __ZN3WTF8fastFreeEPv(i25);
        break;
       } else {
        HEAP32[i29 >> 2] = i26;
        break;
       }
      }
     } while (0);
     if (i24) {
      break;
     }
     i25 = i23 | 0;
     i32 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i25 >> 2] = i32;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i21 >> 2] | 0;
   if ((i32 | 0) == 0) {
    break;
   }
   i25 = i32 | 0;
   i26 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
   if ((i26 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i32);
    break;
   } else {
    HEAP32[i25 >> 2] = i26;
    break;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = i18 | 0;
 i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i17 | 0) != 0) {
  HEAP32[i19 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i18);
  __ZN3WTF8fastFreeEPv(i18);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i18);
  __ZN3WTF8fastFreeEPv(i18);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i9 = i8 | 0;
 i10 = i8 + 32 | 0;
 i11 = i8 + 64 | 0;
 i12 = i8 + 96 | 0;
 i13 = i8 + 104 | 0;
 i14 = i8 + 112 | 0;
 i15 = i8 + 128 | 0;
 i16 = i8 + 136 | 0;
 i17 = i8 + 152 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = i20 | 0;
 i22 = i20;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i7 >> 2] = 17;
  STACKTOP = i8;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 i27 = i4 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i27 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i28 = i4 + 4 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i28 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i29 = i4 + 8 | 0;
 d30 = +HEAPF32[i29 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d30, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i31 = i4 + 12 | 0;
 d32 = +HEAPF32[i31 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d32, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i4 = i3 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i4 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i33 = i3 + 4 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i33 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i34 = i3 + 8 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i34 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 i35 = i3 + 12 | 0;
 if (!(((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i35 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0 & d30 != +0 & d32 != +0)) {
  STACKTOP = i8;
  return;
 }
 if (!(__ZNK7WebCore16HTMLImageElement8completeEv(i2) | 0)) {
  STACKTOP = i8;
  return;
 }
 d32 = +HEAPF32[i4 >> 2];
 d30 = +HEAPF32[i34 >> 2];
 d36 = d32 + d30;
 d37 = +HEAPF32[i33 >> 2];
 d38 = +HEAPF32[i35 >> 2];
 d39 = d37 + d38;
 d40 = +-0 - d30;
 d41 = +-0 - d38;
 HEAPF32[i16 >> 2] = d36 < d32 ? d36 : d32;
 HEAPF32[i16 + 4 >> 2] = d39 < d37 ? d39 : d37;
 HEAPF32[i16 + 8 >> 2] = d30 < d40 ? d40 : d30;
 HEAPF32[i16 + 12 >> 2] = d38 < d41 ? d41 : d38;
 d38 = +HEAPF32[i27 >> 2];
 d41 = +HEAPF32[i29 >> 2];
 d40 = d38 + d41;
 d37 = +HEAPF32[i28 >> 2];
 d39 = +HEAPF32[i31 >> 2];
 d32 = d37 + d39;
 d36 = +-0 - d41;
 d42 = +-0 - d39;
 HEAPF32[i17 >> 2] = d40 < d38 ? d40 : d38;
 i31 = i19 + 4 | 0;
 HEAPF32[i31 >> 2] = d32 < d37 ? d32 : d37;
 i28 = i17 + 8 | 0;
 HEAPF32[i28 >> 2] = d41 < d36 ? d36 : d41;
 i17 = i19 + 12 | 0;
 HEAPF32[i17 >> 2] = d39 < d42 ? d42 : d39;
 i29 = i2 + 64 | 0;
 i27 = HEAP32[i29 >> 2] | 0;
 i33 = i27;
 if ((i27 | 0) == 0) {
  HEAP32[i23 >> 2] = 0;
  HEAP32[i23 + 4 >> 2] = 0;
  i43 = 0;
  i44 = 0;
  i45 = 0;
  i46 = 0;
  d47 = d30;
 } else {
  i27 = i2 + 32 | 0;
  if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
   i48 = i27 | 0;
  } else {
   i48 = HEAP32[i27 >> 2] | 0;
  }
  __ZN7WebCore11CachedImage20imageSizeForRendererEPKNS_12RenderObjectEfNS0_8SizeTypeE(i23, i33, HEAP32[i48 >> 2] | 0, +1, 0);
  i48 = (HEAPF32[tempDoublePtr >> 2] = +(HEAP32[i23 >> 2] | 0), HEAP32[tempDoublePtr >> 2] | 0);
  i43 = 0;
  i44 = i48;
  i45 = (HEAPF32[tempDoublePtr >> 2] = +(HEAP32[i23 + 4 >> 2] | 0), HEAP32[tempDoublePtr >> 2] | 0);
  i46 = 0;
  d47 = +HEAPF32[i34 >> 2];
 }
 HEAP32[i21 >> 2] = 0;
 HEAP32[i21 + 4 >> 2] = 0;
 i21 = i20 + 8 | 0;
 HEAP32[i21 >> 2] = i46 | i44;
 HEAP32[i21 + 4 >> 2] = i45 | i43;
 do {
  if (d47 != +0) {
   if (+HEAPF32[i35 >> 2] == +0) {
    break;
   }
   if (!(__ZNK7WebCore9FloatRect8containsERKS0_(i22, i16) | 0)) {
    STACKTOP = i8;
    return;
   }
   i43 = i1 + 8 | 0;
   i45 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i43 >> 2] | 0) | 0;
   if ((i45 | 0) == 0) {
    STACKTOP = i8;
    return;
   }
   i21 = i1 + 48 | 0;
   i44 = _llvm_uadd_with_overflow_i32(HEAP32[i21 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i46 = i1 + 40 | 0;
   if ((HEAP8[(HEAP32[i46 >> 2] | 0) + (i44 * 200 & -1) + 120 | 0] & 1) == 0) {
    STACKTOP = i8;
    return;
   }
   i44 = HEAP32[i29 >> 2] | 0;
   i20 = i44;
   if ((i44 | 0) == 0) {
    STACKTOP = i8;
    return;
   }
   if (__ZN7WebCore22CanvasRenderingContext16wouldTaintOriginEPKNS_16HTMLImageElementE(i1 | 0, i2) | 0) {
    HEAP8[(HEAP32[i43 >> 2] | 0) + 108 | 0] = 0;
   }
   i44 = i9 | 0;
   i34 = i9;
   i23 = i10 | 0;
   i48 = i10;
   i33 = HEAP32[i18 >> 2] | 0;
   i27 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i44 >> 2] = i33;
   HEAP32[i44 + 4 >> 2] = i27;
   d30 = (HEAP32[tempDoublePtr >> 2] = i33, +HEAPF32[tempDoublePtr >> 2]);
   d39 = +HEAPF32[i28 >> 2] + d30;
   d42 = +HEAPF32[i31 >> 2];
   HEAPF32[i9 + 8 >> 2] = d39;
   HEAPF32[i34 + 12 >> 2] = d42;
   d41 = d42 + +HEAPF32[i17 >> 2];
   HEAPF32[i9 + 16 >> 2] = d39;
   HEAPF32[i34 + 20 >> 2] = d41;
   HEAPF32[i9 + 24 >> 2] = d30;
   HEAPF32[i34 + 28 >> 2] = d41;
   i33 = HEAP32[i43 >> 2] | 0;
   d41 = +(HEAP32[i33 + 72 >> 2] | 0);
   d30 = +(HEAP32[i33 + 76 >> 2] | 0);
   HEAP32[i23 >> 2] = 0;
   HEAP32[i23 + 4 >> 2] = 0;
   HEAPF32[i10 + 8 >> 2] = d41;
   HEAPF32[i48 + 12 >> 2] = +0;
   HEAPF32[i10 + 16 >> 2] = d41;
   HEAPF32[i48 + 20 >> 2] = d30;
   HEAPF32[i10 + 24 >> 2] = +0;
   HEAPF32[i48 + 28 >> 2] = d30;
   i23 = _llvm_uadd_with_overflow_i32(HEAP32[i21 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i11, (HEAP32[i46 >> 2] | 0) + (i23 * 200 & -1) + 72 | 0, i34);
   if (__ZNK7WebCore9FloatQuad12containsQuadERKS0_(i11, i48) | 0) {
    i48 = i2 + 32 | 0;
    if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
     i49 = i48 | 0;
    } else {
     i49 = HEAP32[i48 >> 2] | 0;
    }
    i48 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i20, HEAP32[i49 >> 2] | 0) | 0;
    i34 = HEAP32[i5 >> 2] | 0;
    i23 = HEAP32[i6 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i24 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionEb(i45, i48, 0, i19, i16, i34, i23, i24, 0);
    i23 = i14 | 0;
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i12, (HEAP32[i43 >> 2] | 0) + 72 | 0);
    i34 = HEAP32[i12 >> 2] | 0;
    i48 = HEAP32[i12 + 4 >> 2] | 0;
    if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i43 >> 2] | 0) | 0) == 0) {
     STACKTOP = i8;
     return;
    }
    i33 = _llvm_uadd_with_overflow_i32(HEAP32[i21 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((HEAP8[(HEAP32[i46 >> 2] | 0) + (i33 * 200 & -1) + 120 | 0] & 1) == 0) {
     STACKTOP = i8;
     return;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    i23 = i14 + 8 | 0;
    HEAP32[i23 >> 2] = i34;
    HEAP32[i23 + 4 >> 2] = i48;
    __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i43 >> 2] | 0, i14);
    STACKTOP = i8;
    return;
   }
   i48 = HEAP32[i5 >> 2] | 0;
   if ((i48 - 3 | 0) >>> 0 < 2 >>> 0 | (i48 | 0) == 7 | (i48 | 0) == 9) {
    i23 = i2 + 32 | 0;
    if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
     i50 = i23 | 0;
    } else {
     i50 = HEAP32[i23 >> 2] | 0;
    }
    i23 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i20, HEAP32[i50 >> 2] | 0) | 0;
    __ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_5ImageEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE(i1, i23, 0, i19, i16, HEAP32[i5 >> 2] | 0);
    i23 = i14 | 0;
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, (HEAP32[i43 >> 2] | 0) + 72 | 0);
    i34 = HEAP32[i13 >> 2] | 0;
    i33 = HEAP32[i13 + 4 >> 2] | 0;
    if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i43 >> 2] | 0) | 0) == 0) {
     STACKTOP = i8;
     return;
    }
    i27 = _llvm_uadd_with_overflow_i32(HEAP32[i21 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((HEAP8[(HEAP32[i46 >> 2] | 0) + (i27 * 200 & -1) + 120 | 0] & 1) == 0) {
     STACKTOP = i8;
     return;
    }
    HEAP32[i23 >> 2] = 0;
    HEAP32[i23 + 4 >> 2] = 0;
    i23 = i14 + 8 | 0;
    HEAP32[i23 >> 2] = i34;
    HEAP32[i23 + 4 >> 2] = i33;
    __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i43 >> 2] | 0, i14);
    STACKTOP = i8;
    return;
   }
   if ((i48 | 0) != 1) {
    i48 = i2 + 32 | 0;
    if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
     i51 = i48 | 0;
    } else {
     i51 = HEAP32[i48 >> 2] | 0;
    }
    i48 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i20, HEAP32[i51 >> 2] | 0) | 0;
    i33 = HEAP32[i5 >> 2] | 0;
    i23 = HEAP32[i6 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i26 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionEb(i45, i48, 0, i19, i16, i33, i23, i26, 0);
    __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i19, -1);
    STACKTOP = i8;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
   i23 = i2 + 32 | 0;
   if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
    i52 = i23 | 0;
   } else {
    i52 = HEAP32[i23 >> 2] | 0;
   }
   i23 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i20, HEAP32[i52 >> 2] | 0) | 0;
   i20 = HEAP32[i5 >> 2] | 0;
   i33 = HEAP32[i6 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   HEAP32[i25 + 4 >> 2] = 1;
   __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionEb(i45, i23, 0, i19, i16, i20, i33, i25, 0);
   i33 = i14 | 0;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i15, (HEAP32[i43 >> 2] | 0) + 72 | 0);
   i20 = HEAP32[i15 >> 2] | 0;
   i23 = HEAP32[i15 + 4 >> 2] | 0;
   if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i43 >> 2] | 0) | 0) == 0) {
    STACKTOP = i8;
    return;
   }
   i45 = _llvm_uadd_with_overflow_i32(HEAP32[i21 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((HEAP8[(HEAP32[i46 >> 2] | 0) + (i45 * 200 & -1) + 120 | 0] & 1) == 0) {
    STACKTOP = i8;
    return;
   }
   HEAP32[i33 >> 2] = 0;
   HEAP32[i33 + 4 >> 2] = 0;
   i33 = i14 + 8 | 0;
   HEAP32[i33 >> 2] = i20;
   HEAP32[i33 + 4 >> 2] = i23;
   __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i43 >> 2] | 0, i14);
   STACKTOP = i8;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = 1;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb(i1, i2, d3, d4, i5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 48 | 0;
 i12 = i8 + 56 | 0;
 i13 = i8 + 96 | 0;
 i14 = i8 + 112 | 0;
 i15 = i8 + 120 | 0;
 i16 = i1 + 8 | 0;
 i17 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i16 >> 2] | 0) | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i18 = i1 + 48 | 0;
 i19 = _llvm_uadd_with_overflow_i32(HEAP32[i18 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i20 = i1 + 40 | 0;
 if ((HEAP8[(HEAP32[i20 >> 2] | 0) + (i19 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i8;
  return;
 }
 i19 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 if ((((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i19 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 do {
  if (i7) {
   if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0 & d6 > +0) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 i19 = __ZNK7WebCore15GraphicsContext14strokeGradientEv(i17) | 0;
 do {
  if (!((i19 | 0) == 0 | i5)) {
   if (+HEAPF32[i19 + 8 >> 2] != +HEAPF32[i19 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i19 + 12 >> 2] != +HEAPF32[i19 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i19 + 4 | 0] & 1) == 0) {
    STACKTOP = i8;
    return;
   }
   if (+HEAPF32[i19 + 24 >> 2] != +HEAPF32[i19 + 28 >> 2]) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 i19 = __ZNK7WebCore15GraphicsContext12fillGradientEv(i17) | 0;
 do {
  if (!((i19 | 0) == 0 | i5 ^ 1)) {
   if (+HEAPF32[i19 + 8 >> 2] != +HEAPF32[i19 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i19 + 12 >> 2] != +HEAPF32[i19 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i19 + 4 | 0] & 1) == 0) {
    STACKTOP = i8;
    return;
   }
   if (+HEAPF32[i19 + 24 >> 2] != +HEAPF32[i19 + 28 >> 2]) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 i19 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 i19 = HEAP32[i18 >> 2] | 0;
 i21 = _llvm_uadd_with_overflow_i32(i19 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i22 = i21;
 i21 = HEAP32[i20 >> 2] | 0;
 if ((HEAP8[i21 + (i22 * 200 & -1) + 196 | 0] & 1) == 0) {
  __ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE(i1, i21 + (i22 * 200 & -1) + 152 | 0);
  i23 = HEAP32[i18 >> 2] | 0;
 } else {
  i23 = i19;
 }
 i19 = _llvm_uadd_with_overflow_i32(i23 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i23 = i19;
 i19 = HEAP32[i20 >> 2] | 0;
 i22 = i19 + (i23 * 200 & -1) + 156 | 0;
 i21 = HEAP32[i19 + (i23 * 200 & -1) + 180 >> 2] | 0;
 i23 = i21 + 44 | 0;
 i19 = HEAP32[i23 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i24 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i21, i22 | 0, 0) | 0;
  i21 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i24 >> 2] | 0) + 8 >> 2] & 1](i24, 32) | 0;
  HEAP32[i23 >> 2] = i21;
  i25 = i21;
 } else {
  i25 = i19;
 }
 i19 = i9 | 0;
 i21 = HEAP32[i2 >> 2] | 0;
 HEAP32[i19 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i2 = i21 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN7WebCoreL15normalizeSpacesERN3WTF6StringE(i9);
 i2 = __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(HEAP32[i16 >> 2] | 0, 0) | 0;
 if ((i2 | 0) == 0) {
  i26 = 0;
  i27 = 1;
  i28 = 0;
 } else {
  i16 = (HEAP32[i2 + 40 >> 2] | 0) >>> 30 & 1;
  i21 = (HEAP32[i2 + 48 >> 2] | 0) >>> 28 & 7;
  i26 = (i21 | 0) == 2 | (i21 | 0) == 5;
  i27 = i16;
  i28 = (i16 | 0) == 0;
 }
 i16 = i10 + 4 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 i2 = (i21 | 0) == 0;
 if (i2) {
  HEAP32[i16 >> 2] = 0;
  i29 = 0;
  i30 = i10 + 8 | 0;
 } else {
  HEAP32[i16 >> 2] = HEAP32[i21 + 4 >> 2];
  i29 = HEAP32[i21 + 4 >> 2] | 0;
  i30 = i10 + 8 | 0;
 }
 HEAP32[i30 >> 2] = i29;
 HEAPF32[i10 + 12 >> 2] = +0;
 HEAPF32[i10 + 16 >> 2] = +1;
 HEAPF32[i10 + 20 >> 2] = +0;
 i29 = i10 + 24 | 0;
 i30 = i27 << 4 | (i26 & 1) << 5 | HEAP32[i29 >> 2] & -1020 | 65;
 HEAP32[i29 >> 2] = i30;
 HEAP32[i10 + 28 >> 2] = 0;
 i16 = i10 + 32 | 0;
 HEAP32[i16 >> 2] = 0;
 do {
  if (i2) {
   i31 = 0;
   i32 = i30;
  } else {
   if ((HEAP32[i21 + 16 >> 2] & 32 | 0) == 0) {
    i31 = HEAP32[i21 + 8 >> 2] | 0;
    i32 = i30;
    break;
   } else {
    i23 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i21) | 0;
    i31 = i23;
    i32 = HEAP32[i29 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = i31;
 HEAP32[i29 >> 2] = i32 & -5;
 i32 = i11 | 0;
 HEAPF32[i32 >> 2] = d3;
 i29 = i11 + 4 | 0;
 HEAPF32[i29 >> 2] = d4;
 i31 = _llvm_uadd_with_overflow_i32(HEAP32[i18 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 switch (HEAP32[(HEAP32[i20 >> 2] | 0) + (i31 * 200 & -1) + 148 >> 2] | 0) {
 case 2:
  {
   i31 = i25 + 20 | 0;
   d3 = d4 - +(_round(+(+HEAPF32[i31 >> 2])) | 0);
   HEAPF32[i29 >> 2] = d3 + +(((_round(+(+HEAPF32[i25 + 16 >> 2])) | 0) + (_round(+(+HEAPF32[i31 >> 2])) | 0) | 0) / 2 & -1 | 0);
   break;
  }
 case 3:
 case 4:
  {
   HEAPF32[i29 >> 2] = d4 - +(_round(+(+HEAPF32[i25 + 20 >> 2])) | 0);
   break;
  }
 case 1:
 case 5:
  {
   HEAPF32[i29 >> 2] = +(_round(+(+HEAPF32[i25 + 16 >> 2])) | 0) + d4;
   break;
  }
 default:
  {}
 }
 __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i12, i9, +0, +0, 1, i27, i26, 1, 3);
 d4 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i22, i12, 0, 0);
 i26 = HEAP32[i12 + 32 >> 2] | 0;
 do {
  if ((i26 | 0) != 0) {
   i12 = i26 + 4 | 0;
   i27 = i12 | 0;
   i9 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i27 >> 2] = i9;
    break;
   }
   i9 = i12 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 if (i7) {
  i33 = d4 > d6;
 } else {
  i33 = 0;
 }
 d3 = i33 ? d6 : d4;
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i18 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i26 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i7 * 200 & -1) + 144 >> 2] | 0;
 if ((i26 | 0) == 0) {
  i34 = i28 ? 4 : 2;
 } else if ((i26 | 0) == 1) {
  i34 = i28 ? 2 : 4;
 } else {
  i34 = i26;
 }
 if ((i34 | 0) == 3) {
  d6 = +HEAPF32[i32 >> 2] - d3 * +.5;
  HEAPF32[i32 >> 2] = d6;
  d35 = d6;
 } else if ((i34 | 0) == 4) {
  d6 = +HEAPF32[i32 >> 2] - d3;
  HEAPF32[i32 >> 2] = d6;
  d35 = d6;
 } else {
  d35 = +HEAPF32[i32 >> 2];
 }
 i34 = i25 + 16 | 0;
 i26 = _round(+(+HEAPF32[i34 >> 2])) | 0;
 i28 = i25 + 20 | 0;
 d6 = d35 - +(((_round(+(+HEAPF32[i28 >> 2])) | 0) + i26 | 0) / 2 & -1 | 0);
 d35 = +HEAPF32[i29 >> 2];
 d36 = d35 - +(_round(+(+HEAPF32[i34 >> 2])) | 0);
 d35 = d36 - +(_round(+(+HEAPF32[i25 + 24 >> 2])) | 0);
 i26 = _round(+(+HEAPF32[i34 >> 2])) | 0;
 d36 = d3 + +((_round(+(+HEAPF32[i28 >> 2])) | 0) + i26 | 0);
 d37 = +(_round(+(+HEAPF32[i25 + 28 >> 2])) | 0);
 i25 = i13 | 0;
 HEAPF32[i25 >> 2] = d6;
 i26 = i13 + 4 | 0;
 HEAPF32[i26 >> 2] = d35;
 i28 = i13 + 8 | 0;
 HEAPF32[i28 >> 2] = d36;
 i34 = i13 + 12 | 0;
 HEAPF32[i34 >> 2] = d37;
 if (!i5) {
  if (!(HEAP8[H_BASE + 472 | 0] | 0)) {
   HEAPF32[H_BASE + 216 >> 2] = 1.4142135381698608;
   HEAP8[H_BASE + 472 | 0] = 1;
  }
  i7 = _llvm_uadd_with_overflow_i32(HEAP32[i18 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i18 = i7;
  i7 = HEAP32[i20 >> 2] | 0;
  d38 = +HEAPF32[i7 + (i18 * 200 & -1) + 28 >> 2] * +.5;
  do {
   if ((HEAP32[i7 + (i18 * 200 & -1) + 36 >> 2] | 0) == 0) {
    d39 = d38 * +HEAPF32[i7 + (i18 * 200 & -1) + 40 >> 2];
   } else {
    if ((HEAP32[i7 + (i18 * 200 & -1) + 32 >> 2] | 0) != 2) {
     d39 = d38;
     break;
    }
    d39 = d38 * +HEAPF32[H_BASE + 216 >> 2];
   }
  } while (0);
  HEAPF32[i25 >> 2] = d6 - d39;
  HEAPF32[i28 >> 2] = d39 + (d39 + d36);
  HEAPF32[i26 >> 2] = d35 - d39;
  HEAPF32[i34 >> 2] = d39 + (d39 + d37);
 }
 __ZN7WebCore15GraphicsContext18setTextDrawingModeEj(i17, i5 ? 1 : 2);
 if (i33) {
  __ZN7WebCore15GraphicsContext4saveEv(i17);
  __ZN7WebCore15GraphicsContext9translateEff(i17, +HEAPF32[i32 >> 2], +HEAPF32[i29 >> 2]);
  if (d4 > +0) {
   d40 = d3 / d4;
  } else {
   d40 = +0;
  }
  HEAPF32[i14 >> 2] = d40;
  HEAPF32[i14 + 4 >> 2] = +1;
  __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i17, i14);
  HEAPF32[i15 >> 2] = +0;
  HEAPF32[i15 + 4 >> 2] = +0;
  __ZN7WebCore15GraphicsContext12drawBidiTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointENS1_24CustomFontNotReadyActionE(i17, i22, i10, i15, 1);
  __ZN7WebCore15GraphicsContext7restoreEv(i17);
 } else {
  __ZN7WebCore15GraphicsContext12drawBidiTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointENS1_24CustomFontNotReadyActionE(i17, i22, i10, i11, 1);
 }
 __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i13, -1);
 i13 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i16 = i13 + 4 | 0;
   i1 = i16 | 0;
   i11 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i1 >> 2] = i11;
    break;
   }
   i11 = i16 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i13 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i19 = i13 | 0;
   i11 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i19 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i13 = __ZN7WebCore9fontCacheEv() | 0;
 i11 = i13 | 0;
 i19 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i19;
 if ((i19 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i13);
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D4fontEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i2 + 48 | 0;
 i12 = _llvm_uadd_with_overflow_i32(HEAP32[i11 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = i12;
 i12 = i2 + 40 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 if ((HEAP8[i2 + (i13 * 200 & -1) + 196 | 0] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 96 | 0);
  STACKTOP = i3;
  return;
 }
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i8 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i8 + 8 | 0;
 HEAP32[i16 >> 2] = 0;
 i17 = i8 + 12 | 0;
 HEAP8[i17] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i18 = i8 + 20 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i2 + (i13 * 200 & -1) + 172 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 if ((i20 & 16 | 0) == 0) {
  i21 = i20;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 112 | 0, 7);
  i21 = HEAP32[i19 >> 2] | 0;
 }
 if ((i21 & 32 | 0) != 0) {
  __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 80 | 0, 11);
 }
 __ZN3WTF13StringBuilder12appendNumberEi(i8, ~~(+HEAPF32[i2 + (i13 * 200 & -1) + 168 >> 2] + +.5));
 __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 72 | 0, 2);
 i13 = _llvm_uadd_with_overflow_i32(HEAP32[i11 >> 2] | 0, -1 | 0) | 0;
 i2 = tempRet0;
 if (!i2) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i21 = i9 | 0;
 i19 = i8 + 20 | 0;
 i20 = i10 | 0;
 i22 = i5 | 0;
 i23 = i4 | 0;
 i24 = 0;
 i25 = i2;
 i2 = i13;
 L17 : while (1) {
  i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i2 * 200 & -1) + 156 >> 2] | 0;
  if ((i13 | 0) == 0) {
   i26 = 0;
  } else {
   i26 = HEAP32[i13 - 4 >> 2] | 0;
  }
  if (i24 >>> 0 >= i26 >>> 0) {
   i27 = 70;
   break;
  }
  L23 : do {
   if ((i24 | 0) != 0) {
    HEAP8[i7] = 44;
    i13 = HEAP32[i16 >> 2] | 0;
    do {
     if ((i13 | 0) != 0) {
      i28 = HEAP32[i14 >> 2] | 0;
      if (i28 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i15 >> 2] | 0) != 0) {
       break;
      }
      i29 = (HEAP8[i17] & 1) == 0;
      HEAP32[i14 >> 2] = i28 + 1;
      if (i29) {
       HEAP16[(HEAP32[i19 >> 2] | 0) + (i28 << 1) >> 1] = 44;
       break L23;
      } else {
       HEAP8[(HEAP32[i18 >> 2] | 0) + i28 | 0] = 44;
       break L23;
      }
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKhj(i8, i7, 1);
   }
  } while (0);
  i13 = _llvm_uadd_with_overflow_i32(HEAP32[i11 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   i27 = 24;
   break;
  }
  i28 = HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + (i13 * 200 & -1) + 156 >> 2] | 0) + (i24 << 2) >> 2] | 0;
  HEAP32[i21 >> 2] = i28;
  L35 : do {
   if ((i28 | 0) != 0) {
    i13 = i28 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i13 = HEAP32[i21 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    do {
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i13, H_BASE + 56 | 0, 8, 1) | 0) {
      __ZNK3WTF6String9substringEjj(i10, i9, 8, -1);
      i29 = HEAP32[i20 >> 2] | 0;
      HEAP32[i20 >> 2] = 0;
      i30 = HEAP32[i21 >> 2] | 0;
      HEAP32[i21 >> 2] = i29;
      do {
       if ((i30 | 0) != 0) {
        i29 = i30 | 0;
        i31 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i30);
         break;
        } else {
         HEAP32[i29 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i30 = HEAP32[i20 >> 2] | 0;
      if ((i30 | 0) == 0) {
       break;
      }
      i31 = i30 | 0;
      i29 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i31 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i13 = HEAP32[i21 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
     i29 = HEAP32[i13 + 8 >> 2] | 0;
     i31 = HEAP32[i13 + 4 >> 2] | 0;
     i30 = 0;
     while (1) {
      if (i30 >>> 0 >= i31 >>> 0) {
       break L35;
      }
      if ((HEAP16[i29 + (i30 << 1) >> 1] | 0) == 32) {
       i32 = i30;
       break;
      } else {
       i30 = i30 + 1 | 0;
      }
     }
    } else {
     i30 = HEAP32[i13 + 8 >> 2] | 0;
     i29 = HEAP32[i13 + 4 >> 2] | 0;
     i31 = 0;
     while (1) {
      if (i31 >>> 0 >= i29 >>> 0) {
       break L35;
      }
      if ((HEAP8[i30 + i31 | 0] | 0) == 32) {
       i32 = i31;
       break;
      } else {
       i31 = i31 + 1 | 0;
      }
     }
    }
    if ((i32 | 0) == -1) {
     break;
    }
    i31 = i13 | 0;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
    HEAP32[i22 >> 2] = i13;
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
    __ZN3WTF13tryMakeStringIcNS_6StringEcEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i4, 34, i5, 34);
    i31 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = 0;
    i30 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i30 | 0) != 0) {
      i29 = i30 | 0;
      i33 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
      if ((i33 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i29 >> 2] = i33;
       break;
      }
     }
    } while (0);
    if ((i31 | 0) == 0) {
     i27 = 50;
     break L17;
    }
    i30 = HEAP32[i21 >> 2] | 0;
    HEAP32[i21 >> 2] = i31;
    do {
     if ((i30 | 0) != 0) {
      i33 = i30 | 0;
      i29 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
      if ((i29 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i30);
       break;
      } else {
       HEAP32[i33 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i30 = i13 | 0;
    i31 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i30 >> 2] = i31;
     break;
    }
   }
  } while (0);
  HEAP8[i6] = 32;
  i28 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i28 | 0) == 0) {
    i27 = 64;
   } else {
    i31 = HEAP32[i14 >> 2] | 0;
    if (i31 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
     i27 = 64;
     break;
    }
    if ((HEAP32[i15 >> 2] | 0) != 0) {
     i27 = 64;
     break;
    }
    i30 = (HEAP8[i17] & 1) == 0;
    HEAP32[i14 >> 2] = i31 + 1;
    if (i30) {
     HEAP16[(HEAP32[i19 >> 2] | 0) + (i31 << 1) >> 1] = 32;
     break;
    } else {
     HEAP8[(HEAP32[i18 >> 2] | 0) + i31 | 0] = 32;
     break;
    }
   }
  } while (0);
  if ((i27 | 0) == 64) {
   i27 = 0;
   __ZN3WTF13StringBuilder6appendEPKhj(i8, i6, 1);
  }
  __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
  i28 = HEAP32[i21 >> 2] | 0;
  do {
   if ((i28 | 0) != 0) {
    i31 = i28 | 0;
    i30 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
    if ((i30 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i28);
     break;
    } else {
     HEAP32[i31 >> 2] = i30;
     break;
    }
   }
  } while (0);
  i28 = _llvm_uadd_with_overflow_i32(HEAP32[i11 >> 2] | 0, -1 | 0) | 0;
  i30 = tempRet0;
  if (i30) {
   i24 = i24 + 1 | 0;
   i25 = i30;
   i2 = i28;
  } else {
   i27 = 84;
   break;
  }
 }
 if ((i27 | 0) == 50) {
  _WTFCrash();
 } else if ((i27 | 0) == 70) {
  __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
  i2 = HEAP32[i15 >> 2] | 0;
  if ((i2 | 0) == 0) {
   __ZNK3WTF13StringBuilder11reifyStringEv(i8);
   i8 = HEAP32[i15 >> 2] | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) != 0) {
    i34 = i8;
    i27 = 73;
   }
  } else {
   HEAP32[i1 >> 2] = i2;
   i34 = i2;
   i27 = 73;
  }
  if ((i27 | 0) == 73) {
   i2 = i34 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  i2 = HEAP32[i16 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    i16 = i2 | 0;
    i34 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i34 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i16 >> 2] = i34;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i15 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i15 = i2 | 0;
  i34 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
  if ((i34 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i3;
   return;
  } else {
   HEAP32[i15 >> 2] = i34;
   STACKTOP = i3;
   return;
  }
 } else if ((i27 | 0) == 24) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i27 | 0) == 84) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementERKNS_9FloatRectES5_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  STACKTOP = i6;
  return;
 }
 i15 = i11 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, i2 + 72 | 0);
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 i15 = i11 + 8 | 0;
 i11 = HEAP32[i13 >> 2] | 0;
 i16 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = i11;
 HEAP32[i15 + 4 >> 2] = i16;
 do {
  if ((HEAP32[tempDoublePtr >> 2] = i11, +HEAPF32[tempDoublePtr >> 2]) != +0) {
   if ((HEAP32[tempDoublePtr >> 2] = i16, +HEAPF32[tempDoublePtr >> 2]) == +0) {
    break;
   }
   i15 = i3 + 8 | 0;
   do {
    if (+HEAPF32[i15 >> 2] != +0) {
     i13 = i3 + 12 | 0;
     if (+HEAPF32[i13 >> 2] == +0) {
      break;
     }
     HEAP32[i5 >> 2] = 0;
     d17 = +HEAPF32[i3 >> 2];
     d18 = +HEAPF32[i15 >> 2];
     d19 = d17 + d18;
     d20 = +HEAPF32[i3 + 4 >> 2];
     d21 = +HEAPF32[i13 >> 2];
     d22 = d20 + d21;
     d23 = +-0 - d18;
     d24 = +-0 - d21;
     HEAPF32[i14 >> 2] = d19 < d17 ? d19 : d17;
     HEAPF32[i14 + 4 >> 2] = d22 < d20 ? d22 : d20;
     HEAPF32[i14 + 8 >> 2] = d18 < d23 ? d23 : d18;
     HEAPF32[i14 + 12 >> 2] = d21 < d24 ? d24 : d21;
     if (!(__ZNK7WebCore9FloatRect8containsERKS0_(i12, i14) | 0)) {
      STACKTOP = i6;
      return;
     }
     if (+HEAPF32[i4 + 8 >> 2] == +0) {
      STACKTOP = i6;
      return;
     }
     if (+HEAPF32[i4 + 12 >> 2] == +0) {
      STACKTOP = i6;
      return;
     }
     i13 = i1 + 8 | 0;
     i25 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i13 >> 2] | 0) | 0;
     if ((i25 | 0) == 0) {
      STACKTOP = i6;
      return;
     }
     i26 = i1 + 48 | 0;
     i27 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i28 = i1 + 40 | 0;
     if ((HEAP8[(HEAP32[i28 >> 2] | 0) + (i27 * 200 & -1) + 120 | 0] & 1) == 0) {
      STACKTOP = i6;
      return;
     }
     i27 = __ZNK7WebCore17HTMLCanvasElement6bufferEv(i2) | 0;
     if ((i27 | 0) == 0) {
      STACKTOP = i6;
      return;
     }
     if (__ZN7WebCore22CanvasRenderingContext16wouldTaintOriginEPKNS_17HTMLCanvasElementE(i1 | 0, i2) | 0) {
      HEAP8[(HEAP32[i13 >> 2] | 0) + 108 | 0] = 0;
     }
     __ZN7WebCore17HTMLCanvasElement29makeRenderingResultsAvailableEv(i2);
     i29 = __ZNK7WebCore24CanvasRenderingContext2D18rectContainsCanvasERKNS_9FloatRectE(i1, i4) | 0;
     i30 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i31 = i30;
     i30 = HEAP32[i28 >> 2] | 0;
     i32 = HEAP32[i30 + (i31 * 200 & -1) + 64 >> 2] | 0;
     if (i29) {
      __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i25, i27, 0, i4, i3, i32, HEAP32[i30 + (i31 * 200 & -1) + 68 >> 2] | 0, 0);
      i29 = i9 | 0;
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i8, (HEAP32[i13 >> 2] | 0) + 72 | 0);
      i33 = HEAP32[i8 >> 2] | 0;
      i34 = HEAP32[i8 + 4 >> 2] | 0;
      if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i13 >> 2] | 0) | 0) == 0) {
       STACKTOP = i6;
       return;
      }
      i35 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      if ((HEAP8[(HEAP32[i28 >> 2] | 0) + (i35 * 200 & -1) + 120 | 0] & 1) == 0) {
       STACKTOP = i6;
       return;
      }
      HEAP32[i29 >> 2] = 0;
      HEAP32[i29 + 4 >> 2] = 0;
      i29 = i9 + 8 | 0;
      HEAP32[i29 >> 2] = i33;
      HEAP32[i29 + 4 >> 2] = i34;
      __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i13 >> 2] | 0, i9);
      STACKTOP = i6;
      return;
     }
     if ((i32 - 3 | 0) >>> 0 < 2 >>> 0 | (i32 | 0) == 7 | (i32 | 0) == 9) {
      __ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_11ImageBufferEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE(i1, i27, 0, i4, i3, i32);
      i34 = i9 | 0;
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, (HEAP32[i13 >> 2] | 0) + 72 | 0);
      i29 = HEAP32[i7 >> 2] | 0;
      i33 = HEAP32[i7 + 4 >> 2] | 0;
      if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i13 >> 2] | 0) | 0) == 0) {
       STACKTOP = i6;
       return;
      }
      i35 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      if ((HEAP8[(HEAP32[i28 >> 2] | 0) + (i35 * 200 & -1) + 120 | 0] & 1) == 0) {
       STACKTOP = i6;
       return;
      }
      HEAP32[i34 >> 2] = 0;
      HEAP32[i34 + 4 >> 2] = 0;
      i34 = i9 + 8 | 0;
      HEAP32[i34 >> 2] = i29;
      HEAP32[i34 + 4 >> 2] = i33;
      __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i13 >> 2] | 0, i9);
      STACKTOP = i6;
      return;
     }
     if ((i32 | 0) != 1) {
      __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i25, i27, 0, i4, i3, i32, HEAP32[i30 + (i31 * 200 & -1) + 68 >> 2] | 0, 0);
      __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i4, -1);
      STACKTOP = i6;
      return;
     }
     __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
     i31 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i30 = i31;
     i31 = HEAP32[i28 >> 2] | 0;
     __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i25, i27, 0, i4, i3, HEAP32[i31 + (i30 * 200 & -1) + 64 >> 2] | 0, HEAP32[i31 + (i30 * 200 & -1) + 68 >> 2] | 0, 0);
     i30 = i9 | 0;
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i10, (HEAP32[i13 >> 2] | 0) + 72 | 0);
     i31 = HEAP32[i10 >> 2] | 0;
     i27 = HEAP32[i10 + 4 >> 2] | 0;
     if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i13 >> 2] | 0) | 0) == 0) {
      STACKTOP = i6;
      return;
     }
     i25 = _llvm_uadd_with_overflow_i32(HEAP32[i26 >> 2] | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     if ((HEAP8[(HEAP32[i28 >> 2] | 0) + (i25 * 200 & -1) + 120 | 0] & 1) == 0) {
      STACKTOP = i6;
      return;
     }
     HEAP32[i30 >> 2] = 0;
     HEAP32[i30 + 4 >> 2] = 0;
     i30 = i9 + 8 | 0;
     HEAP32[i30 >> 2] = i31;
     HEAP32[i30 + 4 >> 2] = i27;
     __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i13 >> 2] | 0, i9);
     STACKTOP = i6;
     return;
    }
   } while (0);
   HEAP32[i5 >> 2] = 1;
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 11;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D8fillRectEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 80 | 0;
 i12 = i6 + 112 | 0;
 i13 = i6 + 128 | 0;
 i14 = i6 + 136 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i18 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i17;
 i17 = i18 | ((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0;
 if ((i17 | ((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if (!(d4 != +0 | d5 != +0)) {
  STACKTOP = i6;
  return;
 }
 if (d4 < +0) {
  d19 = +-0 - d4;
  d20 = d2 + d4;
 } else {
  d19 = d4;
  d20 = d2;
 }
 if (d5 < +0) {
  d21 = +-0 - d5;
  d22 = d3 + d5;
 } else {
  d21 = d5;
  d22 = d3;
 }
 i17 = i1 + 8 | 0;
 i18 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i17 >> 2] | 0) | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i23 = i1 + 48 | 0;
 i24 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i25 = i1 + 40 | 0;
 if ((HEAP8[(HEAP32[i25 >> 2] | 0) + (i24 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 i24 = __ZNK7WebCore15GraphicsContext12fillGradientEv(i18) | 0;
 do {
  if ((i24 | 0) != 0) {
   if (+HEAPF32[i24 + 8 >> 2] != +HEAPF32[i24 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i24 + 12 >> 2] != +HEAPF32[i24 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i24 + 4 | 0] & 1) == 0) {
    STACKTOP = i6;
    return;
   }
   if (+HEAPF32[i24 + 24 >> 2] != +HEAPF32[i24 + 28 >> 2]) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAPF32[i14 >> 2] = d20;
 HEAPF32[i16 + 4 >> 2] = d22;
 HEAPF32[i14 + 8 >> 2] = d19;
 HEAPF32[i16 + 12 >> 2] = d21;
 i14 = i9 | 0;
 i24 = i9;
 i26 = i10 | 0;
 i27 = i10;
 i28 = HEAP32[i15 >> 2] | 0;
 i29 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i28;
 HEAP32[i14 + 4 >> 2] = i29;
 d20 = (HEAP32[tempDoublePtr >> 2] = i28, +HEAPF32[tempDoublePtr >> 2]);
 d3 = d19 + d20;
 HEAPF32[i9 + 8 >> 2] = d3;
 HEAPF32[i24 + 12 >> 2] = d22;
 d19 = d22 + d21;
 HEAPF32[i9 + 16 >> 2] = d3;
 HEAPF32[i24 + 20 >> 2] = d19;
 HEAPF32[i9 + 24 >> 2] = d20;
 HEAPF32[i24 + 28 >> 2] = d19;
 i9 = HEAP32[i17 >> 2] | 0;
 d19 = +(HEAP32[i9 + 72 >> 2] | 0);
 d20 = +(HEAP32[i9 + 76 >> 2] | 0);
 HEAP32[i26 >> 2] = 0;
 HEAP32[i26 + 4 >> 2] = 0;
 HEAPF32[i10 + 8 >> 2] = d19;
 HEAPF32[i27 + 12 >> 2] = +0;
 HEAPF32[i10 + 16 >> 2] = d19;
 HEAPF32[i27 + 20 >> 2] = d20;
 HEAPF32[i10 + 24 >> 2] = +0;
 HEAPF32[i27 + 28 >> 2] = d20;
 i10 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i11, (HEAP32[i25 >> 2] | 0) + (i10 * 200 & -1) + 72 | 0, i24);
 if (__ZNK7WebCore9FloatQuad12containsQuadERKS0_(i11, i27) | 0) {
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i18, i16);
  i27 = i12 | 0;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i8, (HEAP32[i17 >> 2] | 0) + 72 | 0);
  i11 = HEAP32[i8 >> 2] | 0;
  i24 = HEAP32[i8 + 4 >> 2] | 0;
  if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i17 >> 2] | 0) | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i8 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  if ((HEAP8[(HEAP32[i25 >> 2] | 0) + (i8 * 200 & -1) + 120 | 0] & 1) == 0) {
   STACKTOP = i6;
   return;
  }
  HEAP32[i27 >> 2] = 0;
  HEAP32[i27 + 4 >> 2] = 0;
  i27 = i12 + 8 | 0;
  HEAP32[i27 >> 2] = i11;
  HEAP32[i27 + 4 >> 2] = i24;
  __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i17 >> 2] | 0, i12);
  STACKTOP = i6;
  return;
 }
 i24 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i27 = HEAP32[(HEAP32[i25 >> 2] | 0) + (i24 * 200 & -1) + 64 >> 2] | 0;
 if ((i27 - 3 | 0) >>> 0 < 2 >>> 0 | (i27 | 0) == 7 | (i27 | 0) == 9) {
  __ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_9FloatRectEEEvRKT_(i1, i16);
  i24 = i12 | 0;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i7, (HEAP32[i17 >> 2] | 0) + 72 | 0);
  i11 = HEAP32[i7 >> 2] | 0;
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i17 >> 2] | 0) | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i7 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  if ((HEAP8[(HEAP32[i25 >> 2] | 0) + (i7 * 200 & -1) + 120 | 0] & 1) == 0) {
   STACKTOP = i6;
   return;
  }
  HEAP32[i24 >> 2] = 0;
  HEAP32[i24 + 4 >> 2] = 0;
  i24 = i12 + 8 | 0;
  HEAP32[i24 >> 2] = i11;
  HEAP32[i24 + 4 >> 2] = i8;
  __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i17 >> 2] | 0, i12);
  STACKTOP = i6;
  return;
 }
 if ((i27 | 0) != 1) {
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i18, i16);
  __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i16, -1);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectE(i18, i16);
 i16 = i12 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, (HEAP32[i17 >> 2] | 0) + 72 | 0);
 i18 = HEAP32[i13 >> 2] | 0;
 i1 = HEAP32[i13 + 4 >> 2] | 0;
 if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i17 >> 2] | 0) | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i13 = _llvm_uadd_with_overflow_i32(HEAP32[i23 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP8[(HEAP32[i25 >> 2] | 0) + (i13 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i16 + 4 >> 2] = 0;
 i16 = i12 + 8 | 0;
 HEAP32[i16 >> 2] = i18;
 HEAP32[i16 + 4 >> 2] = i1;
 __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i17 >> 2] | 0, i12);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi(i1, i2, i3, d4, d5, d6, d7, d8, d9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 d9 = +d9;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i12 = i11 | 0;
 i13 = i11 + 16 | 0;
 i14 = i11 + 32 | 0;
 i15 = i11 + 48 | 0;
 i16 = i11 + 64 | 0;
 i17 = i11 + 80 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i10 >> 2] = 17;
  STACKTOP = i11;
  return;
 }
 do {
  if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0) {
   if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d9, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   i26 = i1 + 8 | 0;
   i27 = __ZNK7WebCore17HTMLCanvasElement6bufferEv(HEAP32[i26 >> 2] | 0) | 0;
   if ((i27 | 0) == 0) {
    STACKTOP = i11;
    return;
   }
   if (d8 < +0) {
    d28 = d6 + d8;
    d29 = +-0 - d8;
   } else {
    d28 = d6;
    d29 = d8;
   }
   if (d9 < +0) {
    d30 = d7 + d9;
    d31 = +-0 - d9;
   } else {
    d30 = d7;
    d31 = d9;
   }
   HEAPF32[i13 >> 2] = d28;
   HEAPF32[i13 + 4 >> 2] = d30;
   HEAPF32[i13 + 8 >> 2] = d29;
   HEAPF32[i13 + 12 >> 2] = d31;
   i32 = i2 + 4 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   i34 = i2 + 8 | 0;
   i35 = HEAP32[i34 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = 0;
   HEAP32[i15 + 8 >> 2] = i33;
   HEAP32[i15 + 12 >> 2] = i35;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i14, i15);
   __ZN7WebCore9FloatRect9intersectERKS0_(i13, i14);
   i35 = ~~d4;
   i33 = ~~d5;
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i13);
   i36 = i16 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + i35;
   i36 = i16 + 4 | 0;
   HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + i33;
   HEAP32[i18 >> 2] = 0;
   HEAP32[i18 + 4 >> 2] = 0;
   i36 = i17 + 8 | 0;
   i37 = (i3 | 0) == 0 ? i27 + 120 | 0 : i27 + 112 | 0;
   i38 = HEAP32[i37 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = HEAP32[i37 >> 2];
   HEAP32[i36 + 4 >> 2] = i38;
   __ZN7WebCore7IntRect9intersectERKS0_(i16, i19);
   if ((HEAP32[i16 + 8 >> 2] | 0) < 1) {
    STACKTOP = i11;
    return;
   }
   if ((HEAP32[i16 + 12 >> 2] | 0) < 1) {
    STACKTOP = i11;
    return;
   }
   i38 = i20;
   i36 = i16;
   HEAP32[i38 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i38 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
   HEAP32[i38 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
   HEAP32[i38 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
   i38 = i20 | 0;
   HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) - i35;
   i38 = i20 + 4 | 0;
   HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) - i33;
   i38 = HEAP32[i2 + 12 >> 2] | 0;
   i37 = HEAP32[i34 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i21 + 4 >> 2] = i37;
   HEAP32[i22 >> 2] = i35;
   HEAP32[i22 + 4 >> 2] = i33;
   __ZN7WebCore11ImageBuffer12putByteArrayENS_8MultiplyEPN3JSC21GenericTypedArrayViewINS2_19Uint8ClampedAdaptorEEERKNS_7IntSizeERKNS_7IntRectERKNS_8IntPointENS0_16CoordinateSystemE(i27, 1, i38, i21, i20, i22, i3);
   if ((i3 | 0) == 1) {
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i23, i16);
    d39 = +1 / +HEAPF32[(HEAP32[i26 >> 2] | 0) + 104 >> 2];
    __ZN7WebCore9FloatRect5scaleEff(i23, d39, d39);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i24, i23);
    i38 = i24;
    HEAP32[i36 >> 2] = HEAP32[i38 >> 2];
    HEAP32[i36 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
    HEAP32[i36 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
    HEAP32[i36 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
   }
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i25, i16);
   i38 = i12;
   if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i26 >> 2] | 0) | 0) == 0) {
    STACKTOP = i11;
    return;
   }
   i36 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + (i36 * 200 & -1) + 120 | 0] & 1) == 0) {
    STACKTOP = i11;
    return;
   }
   i36 = i25;
   HEAP32[i38 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i38 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
   HEAP32[i38 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
   HEAP32[i38 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
   __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i26 >> 2] | 0, i12);
   STACKTOP = i11;
   return;
  }
 } while (0);
 HEAP32[i10 >> 2] = 9;
 STACKTOP = i11;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9transformEffffff(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 96 | 0;
 i12 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i13 = i1 + 48 | 0;
 i14 = _llvm_uadd_with_overflow_i32(HEAP32[i13 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i15 = i1 + 40 | 0;
 if ((HEAP8[(HEAP32[i15 >> 2] | 0) + (i14 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i8;
  return;
 }
 i14 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i16 = ((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i17 = ((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i18 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i19 = ((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 if ((i18 | i14 | i16 | i19 | i17 | ((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore15AffineTransformC1Edddddd(i9, d2, d3, d4, d5, d6, d7);
 i17 = _llvm_uadd_with_overflow_i32(HEAP32[i13 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = i10;
 i16 = (HEAP32[i15 >> 2] | 0) + (i17 * 200 & -1) + 72 | 0;
 HEAP32[i19 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i19 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i19 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i19 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 HEAP32[i19 + 16 >> 2] = HEAP32[i16 + 16 >> 2];
 HEAP32[i19 + 20 >> 2] = HEAP32[i16 + 20 >> 2];
 HEAP32[i19 + 24 >> 2] = HEAP32[i16 + 24 >> 2];
 HEAP32[i19 + 28 >> 2] = HEAP32[i16 + 28 >> 2];
 HEAP32[i19 + 32 >> 2] = HEAP32[i16 + 32 >> 2];
 HEAP32[i19 + 36 >> 2] = HEAP32[i16 + 36 >> 2];
 HEAP32[i19 + 40 >> 2] = HEAP32[i16 + 40 >> 2];
 HEAP32[i19 + 44 >> 2] = HEAP32[i16 + 44 >> 2];
 __ZN7WebCore15AffineTransform8multiplyERKS0_(i10, i9) | 0;
 i16 = _llvm_uadd_with_overflow_i32(HEAP32[i13 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i17 = i16;
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if (+HEAPF64[i16 + (i17 * 200 & -1) + 72 >> 3] == +HEAPF64[i10 >> 3]) {
   if (+HEAPF64[i16 + (i17 * 200 & -1) + 80 >> 3] != +HEAPF64[i10 + 8 >> 3]) {
    break;
   }
   if (+HEAPF64[i16 + (i17 * 200 & -1) + 88 >> 3] != +HEAPF64[i10 + 16 >> 3]) {
    break;
   }
   if (+HEAPF64[i16 + (i17 * 200 & -1) + 96 >> 3] != +HEAPF64[i10 + 24 >> 3]) {
    break;
   }
   if (+HEAPF64[i16 + (i17 * 200 & -1) + 104 >> 3] != +HEAPF64[i10 + 32 >> 3]) {
    break;
   }
   if (+HEAPF64[i16 + (i17 * 200 & -1) + 112 >> 3] != +HEAPF64[i10 + 40 >> 3]) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i17 = __ZNK7WebCore15AffineTransform12isInvertibleEv(i10) | 0;
 i10 = _llvm_uadd_with_overflow_i32(HEAP32[i13 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = i10;
 i10 = HEAP32[i15 >> 2] | 0;
 if (i17) {
  i17 = i10 + (i13 * 200 & -1) + 72 | 0;
  HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
  HEAP32[i17 + 16 >> 2] = HEAP32[i19 + 16 >> 2];
  HEAP32[i17 + 20 >> 2] = HEAP32[i19 + 20 >> 2];
  HEAP32[i17 + 24 >> 2] = HEAP32[i19 + 24 >> 2];
  HEAP32[i17 + 28 >> 2] = HEAP32[i19 + 28 >> 2];
  HEAP32[i17 + 32 >> 2] = HEAP32[i19 + 32 >> 2];
  HEAP32[i17 + 36 >> 2] = HEAP32[i19 + 36 >> 2];
  HEAP32[i17 + 40 >> 2] = HEAP32[i19 + 40 >> 2];
  HEAP32[i17 + 44 >> 2] = HEAP32[i19 + 44 >> 2];
  __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i12, i9);
  __ZNK7WebCore15AffineTransform7inverseEv(i11, i9);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1 + 36 | 0, i11);
  STACKTOP = i8;
  return;
 } else {
  HEAP8[i10 + (i13 * 200 & -1) + 120 | 0] = 0;
  STACKTOP = i8;
  return;
 }
}
function __ZN3WTF13tryMakeStringIcNS_6StringEcEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, 1) | 0;
 i10 = tempRet0;
 i12 = _llvm_uadd_with_overflow_i32(i11 | 0, 1) | 0;
 i11 = i12;
 do {
  if (!tempRet0) {
   if (i10) {
    break;
   }
   do {
    if (!i9) {
     if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
      break;
     }
     do {
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl5emptyEv() | 0;
      } else {
       if (i11 >>> 0 > 2147483637 >>> 0) {
        break;
       }
       __ZN3WTF13tryFastMallocEj(i6, (i11 << 1) + 20 | 0);
       i12 = i6 | 0;
       i13 = HEAP32[i12 >> 2] | 0;
       HEAP32[i12 >> 2] = 0;
       if ((i13 | 0) == 0) {
        break;
       }
       i12 = i13 + 20 | 0;
       i14 = i12;
       i15 = i13;
       HEAP32[i13 >> 2] = 2;
       HEAP32[i13 + 4 >> 2] = i11;
       HEAP32[i13 + 8 >> 2] = i12;
       HEAP32[i13 + 12 >> 2] = 0;
       HEAP32[i13 + 16 >> 2] = 0;
       HEAP16[i14 >> 1] = i2 & 255;
       i12 = i13 + 22 | 0;
       i13 = HEAP32[i8 >> 2] | 0;
       do {
        if ((i13 | 0) == 0) {
         i16 = 1;
        } else {
         i17 = HEAP32[i13 + 4 >> 2] | 0;
         do {
          if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
           i18 = HEAP32[i13 + 8 >> 2] | 0;
           if ((i17 | 0) == 0) {
            break;
           } else {
            i19 = 0;
           }
           while (1) {
            HEAP16[i12 + (i19 << 1) >> 1] = HEAP16[i18 + (i19 << 1) >> 1] | 0;
            i19 = i19 + 1 | 0;
            if (i19 >>> 0 >= i17 >>> 0) {
             break;
            }
           }
          } else {
           i18 = HEAP32[i13 + 8 >> 2] | 0;
           if ((i17 | 0) == 0) {
            break;
           } else {
            i20 = 0;
           }
           while (1) {
            HEAP16[i12 + (i20 << 1) >> 1] = HEAPU8[i18 + i20 | 0] | 0;
            i20 = i20 + 1 | 0;
            if (i20 >>> 0 >= i17 >>> 0) {
             break;
            }
           }
          }
         } while (0);
         i17 = HEAP32[i8 >> 2] | 0;
         if ((i17 | 0) == 0) {
          i16 = 1;
          break;
         }
         i16 = (HEAP32[i17 + 4 >> 2] | 0) + 1 | 0;
        }
       } while (0);
       HEAP16[i14 + (i16 << 1) >> 1] = i4 & 255;
       HEAP32[i1 >> 2] = i15;
       STACKTOP = i5;
       return;
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i5;
     return;
    }
   } while (0);
   do {
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl5emptyEv() | 0;
    } else {
     if (i11 >>> 0 > 4294967275 >>> 0) {
      break;
     }
     __ZN3WTF13tryFastMallocEj(i7, i11 + 20 | 0);
     i12 = i7 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i12 = i13;
     HEAP32[i13 >> 2] = 2;
     HEAP32[i13 + 4 >> 2] = i11;
     i17 = i13 + 20 | 0;
     HEAP32[i13 + 8 >> 2] = i17;
     HEAP32[i13 + 12 >> 2] = 0;
     HEAP32[i13 + 16 >> 2] = 32;
     HEAP8[i17] = i2;
     i17 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i17 | 0) == 0) {
       i21 = 21;
      } else {
       i18 = HEAP32[i17 + 4 >> 2] | 0;
       i22 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i18 | 0) == 0) {
        i23 = i17;
       } else {
        i24 = 0;
        while (1) {
         HEAP8[i13 + (i24 + 21) | 0] = HEAP8[i22 + i24 | 0] | 0;
         i24 = i24 + 1 | 0;
         if (i24 >>> 0 >= i18 >>> 0) {
          break;
         }
        }
        i18 = HEAP32[i8 >> 2] | 0;
        if ((i18 | 0) == 0) {
         i21 = 21;
         break;
        } else {
         i23 = i18;
        }
       }
       i21 = (HEAP32[i23 + 4 >> 2] | 0) + 21 | 0;
      }
     } while (0);
     HEAP8[i13 + i21 | 0] = i4;
     HEAP32[i1 >> 2] = i12;
     STACKTOP = i5;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D4fillERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 8 | 0;
 i9 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i8 >> 2] | 0) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 48 | 0;
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i1 + 40 | 0;
 if ((HEAP8[(HEAP32[i12 >> 2] | 0) + (i11 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = __ZNK7WebCore15GraphicsContext12fillGradientEv(i9) | 0;
 do {
  if ((i11 | 0) != 0) {
   if (+HEAPF32[i11 + 8 >> 2] != +HEAPF32[i11 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i11 + 12 >> 2] != +HEAPF32[i11 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i11 + 4 | 0] & 1) == 0) {
    STACKTOP = i3;
    return;
   }
   if (+HEAPF32[i11 + 24 >> 2] != +HEAPF32[i11 + 28 >> 2]) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i11 = i1 + 36 | 0;
 if (!(__ZNK7WebCore4Path7isEmptyEv(i11) | 0)) {
  i13 = __ZNK7WebCore15GraphicsContext8fillRuleEv(i9) | 0;
  i14 = i2 | 0;
  do {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i14 >> 2] | 0, H_BASE + 16 | 0) | 0) {
    i15 = 0;
   } else {
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i14 >> 2] | 0, H_BASE + 8 | 0) | 0) {
     i15 = 1;
     break;
    }
    STACKTOP = i3;
    return;
   }
  } while (0);
  __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i9, i15);
  i15 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i14 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i15 * 200 & -1) + 64 >> 2] | 0;
  do {
   if ((i14 - 3 | 0) >>> 0 < 2 >>> 0 | (i14 | 0) == 7 | (i14 | 0) == 9) {
    __ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_4PathEEEvRKT_(i1, i11);
    i15 = i5 | 0;
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i6, (HEAP32[i8 >> 2] | 0) + 72 | 0);
    i2 = HEAP32[i6 >> 2] | 0;
    i16 = HEAP32[i6 + 4 >> 2] | 0;
    if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i8 >> 2] | 0) | 0) == 0) {
     break;
    }
    i17 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((HEAP8[(HEAP32[i12 >> 2] | 0) + (i17 * 200 & -1) + 120 | 0] & 1) == 0) {
     break;
    }
    HEAP32[i15 >> 2] = 0;
    HEAP32[i15 + 4 >> 2] = 0;
    i15 = i5 + 8 | 0;
    HEAP32[i15 >> 2] = i2;
    HEAP32[i15 + 4 >> 2] = i16;
    __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i8 >> 2] | 0, i5);
   } else {
    if ((i14 | 0) != 1) {
     __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i9, i11);
     __ZNK7WebCore4Path16fastBoundingRectEv(i7, i11);
     __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i7, -1);
     break;
    }
    __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
    __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i9, i11);
    i16 = i5 | 0;
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i4, (HEAP32[i8 >> 2] | 0) + 72 | 0);
    i15 = HEAP32[i4 >> 2] | 0;
    i2 = HEAP32[i4 + 4 >> 2] | 0;
    if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i8 >> 2] | 0) | 0) == 0) {
     break;
    }
    i17 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    if ((HEAP8[(HEAP32[i12 >> 2] | 0) + (i17 * 200 & -1) + 120 | 0] & 1) == 0) {
     break;
    }
    HEAP32[i16 >> 2] = 0;
    HEAP32[i16 + 4 >> 2] = 0;
    i16 = i5 + 8 | 0;
    HEAP32[i16 >> 2] = i15;
    HEAP32[i16 + 4 >> 2] = i2;
    __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i8 >> 2] | 0, i5);
   }
  } while (0);
  __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i9, i13);
 }
 if ((HEAP8[i1 + 261 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Path5clearEv(i11);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D12getImageDataENS_11ImageBuffer16CoordinateSystemEffffRi(i1, i2, i3, d4, d5, d6, d7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 24 | 0;
 i13 = i9 + 40 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = i2 + 8 | 0;
 i2 = HEAP32[i19 >> 2] | 0;
 if ((HEAP8[i2 + 108 | 0] & 1) == 0) {
  if (HEAP8[H_BASE + 480 | 0] | 0) {
   i20 = i2;
   i21 = HEAP32[H_BASE + 488 >> 2] | 0;
  } else {
   i2 = __Znwj(4) | 0;
   HEAP32[i10 >> 2] = H_BASE + 120;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i2, i10);
   HEAP32[H_BASE + 488 >> 2] = i2;
   HEAP8[H_BASE + 480 | 0] = 1;
   i20 = HEAP32[i19 >> 2] | 0;
   i21 = i2;
  }
  i2 = HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 8 >> 2] | 0;
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 316 >> 2] & 1](i2, 8, 3, i21, 0);
  HEAP32[i8 >> 2] = 18;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i9;
  return;
 }
 if (!(d6 != +0 & d7 != +0)) {
  HEAP32[i8 >> 2] = 1;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i9;
  return;
 }
 do {
  if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0) {
   if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (d6 < +0) {
    d22 = d4 + d6;
    d23 = +-0 - d6;
   } else {
    d22 = d4;
    d23 = d6;
   }
   if (d7 < +0) {
    d24 = d5 + d7;
    d25 = +-0 - d7;
   } else {
    d24 = d5;
    d25 = d7;
   }
   HEAPF32[i11 >> 2] = d22;
   HEAPF32[i11 + 4 >> 2] = d24;
   i21 = i11 + 8 | 0;
   HEAPF32[i21 >> 2] = d23;
   i2 = i11 + 12 | 0;
   HEAPF32[i2 >> 2] = d25;
   if (d23 < +1) {
    HEAPF32[i21 >> 2] = +1;
   }
   if (d25 < +1) {
    HEAPF32[i2 >> 2] = +1;
   }
   if (!(__ZNK7WebCore9FloatRect22isExpressibleAsIntRectEv(i11) | 0)) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i12, i11);
   i2 = __ZNK7WebCore17HTMLCanvasElement6bufferEv(HEAP32[i19 >> 2] | 0) | 0;
   if ((i2 | 0) == 0) {
    i21 = i12 + 8 | 0;
    i20 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i13 + 4 >> 2] = i20;
    __ZN7WebCoreL20createEmptyImageDataERKNS_7IntSizeE(i1, i14);
    STACKTOP = i9;
    return;
   }
   __ZNK7WebCore11ImageBuffer24getUnmultipliedImageDataERKNS_7IntRectENS0_16CoordinateSystemE(i15, i2, i12, i3);
   i2 = i15 | 0;
   i20 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i20 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i9;
    return;
   }
   i2 = i12 + 8 | 0;
   i21 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i16 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i16 + 4 >> 2] = i21;
   i21 = i18 | 0;
   HEAP32[i21 >> 2] = i20;
   __ZN7WebCore9ImageData6createERKNS_7IntSizeEN3WTF10PassRefPtrIN3JSC21GenericTypedArrayViewINS6_19Uint8ClampedAdaptorEEEEE(i1, i17, i18);
   i20 = HEAP32[i21 >> 2] | 0;
   if ((i20 | 0) == 0) {
    STACKTOP = i9;
    return;
   }
   i21 = i20 + 4 | 0;
   i20 = i21 | 0;
   i2 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i20 >> 2] = i2;
    STACKTOP = i9;
    return;
   }
   i2 = i21 - 4 | 0;
   if ((i2 | 0) == 0) {
    STACKTOP = i9;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
   STACKTOP = i9;
   return;
  }
 } while (0);
 HEAP32[i8 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i9;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5scaleEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 56 | 0;
 i8 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i1 + 48 | 0;
 i10 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i10;
 i10 = i1 + 40 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((HEAP8[i12 + (i11 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 if ((((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i13 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i5;
 i14 = i12 + (i11 * 200 & -1) + 72 | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 HEAP32[i13 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
 HEAP32[i13 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
 HEAP32[i13 + 24 >> 2] = HEAP32[i14 + 24 >> 2];
 HEAP32[i13 + 28 >> 2] = HEAP32[i14 + 28 >> 2];
 HEAP32[i13 + 32 >> 2] = HEAP32[i14 + 32 >> 2];
 HEAP32[i13 + 36 >> 2] = HEAP32[i14 + 36 >> 2];
 HEAP32[i13 + 40 >> 2] = HEAP32[i14 + 40 >> 2];
 HEAP32[i13 + 44 >> 2] = HEAP32[i14 + 44 >> 2];
 d15 = d2;
 d16 = d3;
 __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i5, d15, d16) | 0;
 i14 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i14;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if (+HEAPF64[i14 + (i11 * 200 & -1) + 72 >> 3] == +HEAPF64[i5 >> 3]) {
   if (+HEAPF64[i14 + (i11 * 200 & -1) + 80 >> 3] != +HEAPF64[i5 + 8 >> 3]) {
    break;
   }
   if (+HEAPF64[i14 + (i11 * 200 & -1) + 88 >> 3] != +HEAPF64[i5 + 16 >> 3]) {
    break;
   }
   if (+HEAPF64[i14 + (i11 * 200 & -1) + 96 >> 3] != +HEAPF64[i5 + 24 >> 3]) {
    break;
   }
   if (+HEAPF64[i14 + (i11 * 200 & -1) + 104 >> 3] != +HEAPF64[i5 + 32 >> 3]) {
    break;
   }
   if (+HEAPF64[i14 + (i11 * 200 & -1) + 112 >> 3] != +HEAPF64[i5 + 40 >> 3]) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i11 = __ZNK7WebCore15AffineTransform12isInvertibleEv(i5) | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i5;
 i5 = HEAP32[i10 >> 2] | 0;
 if (i11) {
  i11 = i5 + (i9 * 200 & -1) + 72 | 0;
  HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  HEAP32[i11 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
  HEAP32[i11 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
  HEAP32[i11 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
  HEAP32[i11 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
  HEAP32[i11 + 32 >> 2] = HEAP32[i13 + 32 >> 2];
  HEAP32[i11 + 36 >> 2] = HEAP32[i13 + 36 >> 2];
  HEAP32[i11 + 40 >> 2] = HEAP32[i13 + 40 >> 2];
  HEAP32[i11 + 44 >> 2] = HEAP32[i13 + 44 >> 2];
  HEAPF32[i6 >> 2] = d2;
  HEAPF32[i6 + 4 >> 2] = d3;
  __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i8, i6);
  __ZN7WebCore15AffineTransformC1Ev(i7);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1 + 36 | 0, __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i7, +1 / d15, +1 / d16) | 0);
  STACKTOP = i4;
  return;
 } else {
  HEAP8[i5 + (i9 * 200 & -1) + 120 | 0] = 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9translateEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 + 48 | 0;
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i8 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i9;
 i9 = i1 + 40 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((HEAP8[i11 + (i10 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i12 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 if ((((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i12 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i12 = i5;
 i13 = i11 + (i10 * 200 & -1) + 72 | 0;
 HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i12 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
 HEAP32[i12 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
 HEAP32[i12 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
 HEAP32[i12 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
 HEAP32[i12 + 32 >> 2] = HEAP32[i13 + 32 >> 2];
 HEAP32[i12 + 36 >> 2] = HEAP32[i13 + 36 >> 2];
 HEAP32[i12 + 40 >> 2] = HEAP32[i13 + 40 >> 2];
 HEAP32[i12 + 44 >> 2] = HEAP32[i13 + 44 >> 2];
 __ZN7WebCore15AffineTransform9translateEdd(i5, d2, d3) | 0;
 i13 = _llvm_uadd_with_overflow_i32(HEAP32[i8 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i13;
 i13 = HEAP32[i9 >> 2] | 0;
 do {
  if (+HEAPF64[i13 + (i10 * 200 & -1) + 72 >> 3] == +HEAPF64[i5 >> 3]) {
   if (+HEAPF64[i13 + (i10 * 200 & -1) + 80 >> 3] != +HEAPF64[i5 + 8 >> 3]) {
    break;
   }
   if (+HEAPF64[i13 + (i10 * 200 & -1) + 88 >> 3] != +HEAPF64[i5 + 16 >> 3]) {
    break;
   }
   if (+HEAPF64[i13 + (i10 * 200 & -1) + 96 >> 3] != +HEAPF64[i5 + 24 >> 3]) {
    break;
   }
   if (+HEAPF64[i13 + (i10 * 200 & -1) + 104 >> 3] != +HEAPF64[i5 + 32 >> 3]) {
    break;
   }
   if (+HEAPF64[i13 + (i10 * 200 & -1) + 112 >> 3] != +HEAPF64[i5 + 40 >> 3]) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i10 = __ZNK7WebCore15AffineTransform12isInvertibleEv(i5) | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i8 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i5;
 i5 = HEAP32[i9 >> 2] | 0;
 if (i10) {
  i10 = i5 + (i8 * 200 & -1) + 72 | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
  HEAP32[i10 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
  HEAP32[i10 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
  HEAP32[i10 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
  HEAP32[i10 + 28 >> 2] = HEAP32[i12 + 28 >> 2];
  HEAP32[i10 + 32 >> 2] = HEAP32[i12 + 32 >> 2];
  HEAP32[i10 + 36 >> 2] = HEAP32[i12 + 36 >> 2];
  HEAP32[i10 + 40 >> 2] = HEAP32[i12 + 40 >> 2];
  HEAP32[i10 + 44 >> 2] = HEAP32[i12 + 44 >> 2];
  __ZN7WebCore15GraphicsContext9translateEff(i7, d2, d3);
  __ZN7WebCore15AffineTransformC1Ev(i6);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1 + 36 | 0, __ZN7WebCore15AffineTransform9translateEdd(i6, +-0 - d2, +-0 - d3) | 0);
  STACKTOP = i4;
  return;
 } else {
  HEAP8[i5 + (i8 * 200 & -1) + 120 | 0] = 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D12setTransformEffffff(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 96 | 0;
 i12 = i1 + 8 | 0;
 i13 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i12 >> 2] | 0) | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i14 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i15 = ((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i16 = ((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i17 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i18 = ((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 if ((i17 | i14 | i15 | i18 | i16 | ((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0) != 0) {
  STACKTOP = i8;
  return;
 }
 i16 = i1 + 48 | 0;
 i18 = _llvm_uadd_with_overflow_i32(HEAP32[i16 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i15 = i1 + 40 | 0;
 i14 = i9;
 i17 = (HEAP32[i15 >> 2] | 0) + (i18 * 200 & -1) + 72 | 0;
 HEAP32[i14 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 HEAP32[i14 + 16 >> 2] = HEAP32[i17 + 16 >> 2];
 HEAP32[i14 + 20 >> 2] = HEAP32[i17 + 20 >> 2];
 HEAP32[i14 + 24 >> 2] = HEAP32[i17 + 24 >> 2];
 HEAP32[i14 + 28 >> 2] = HEAP32[i17 + 28 >> 2];
 HEAP32[i14 + 32 >> 2] = HEAP32[i17 + 32 >> 2];
 HEAP32[i14 + 36 >> 2] = HEAP32[i17 + 36 >> 2];
 HEAP32[i14 + 40 >> 2] = HEAP32[i17 + 40 >> 2];
 HEAP32[i14 + 44 >> 2] = HEAP32[i17 + 44 >> 2];
 if (!(__ZNK7WebCore15AffineTransform12isInvertibleEv(i9) | 0)) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i10, HEAP32[i12 >> 2] | 0);
 __ZN7WebCore15GraphicsContext6setCTMERKNS_15AffineTransformE(i13, i10);
 i10 = _llvm_uadd_with_overflow_i32(HEAP32[i16 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = (HEAP32[i15 >> 2] | 0) + (i10 * 200 & -1) + 72 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i11);
 i10 = i13;
 i13 = i11;
 HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 HEAP32[i10 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
 HEAP32[i10 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
 HEAP32[i10 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
 HEAP32[i10 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
 HEAP32[i10 + 32 >> 2] = HEAP32[i13 + 32 >> 2];
 HEAP32[i10 + 36 >> 2] = HEAP32[i13 + 36 >> 2];
 HEAP32[i10 + 40 >> 2] = HEAP32[i13 + 40 >> 2];
 HEAP32[i10 + 44 >> 2] = HEAP32[i13 + 44 >> 2];
 __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1 + 36 | 0, i9);
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i16 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP8[(HEAP32[i15 >> 2] | 0) + (i9 * 200 & -1) + 120 | 0] = 1;
 __ZN7WebCore24CanvasRenderingContext2D9transformEffffff(i1, d2, d3, d4, d5, d6, d7);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D6rotateEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 48 | 0;
 i8 = _llvm_uadd_with_overflow_i32(HEAP32[i7 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i8;
 i8 = i1 + 40 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((HEAP8[i10 + (i9 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i4;
 i12 = i10 + (i9 * 200 & -1) + 72 | 0;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i11 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
 HEAP32[i11 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
 HEAP32[i11 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
 HEAP32[i11 + 28 >> 2] = HEAP32[i12 + 28 >> 2];
 HEAP32[i11 + 32 >> 2] = HEAP32[i12 + 32 >> 2];
 HEAP32[i11 + 36 >> 2] = HEAP32[i12 + 36 >> 2];
 HEAP32[i11 + 40 >> 2] = HEAP32[i12 + 40 >> 2];
 HEAP32[i11 + 44 >> 2] = HEAP32[i12 + 44 >> 2];
 __ZN7WebCore15AffineTransform6rotateEd(i4, d2 / 3.141592653589793 * +180) | 0;
 i12 = _llvm_uadd_with_overflow_i32(HEAP32[i7 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i12;
 i12 = HEAP32[i8 >> 2] | 0;
 do {
  if (+HEAPF64[i12 + (i9 * 200 & -1) + 72 >> 3] == +HEAPF64[i4 >> 3]) {
   if (+HEAPF64[i12 + (i9 * 200 & -1) + 80 >> 3] != +HEAPF64[i4 + 8 >> 3]) {
    break;
   }
   if (+HEAPF64[i12 + (i9 * 200 & -1) + 88 >> 3] != +HEAPF64[i4 + 16 >> 3]) {
    break;
   }
   if (+HEAPF64[i12 + (i9 * 200 & -1) + 96 >> 3] != +HEAPF64[i4 + 24 >> 3]) {
    break;
   }
   if (+HEAPF64[i12 + (i9 * 200 & -1) + 104 >> 3] != +HEAPF64[i4 + 32 >> 3]) {
    break;
   }
   if (+HEAPF64[i12 + (i9 * 200 & -1) + 112 >> 3] != +HEAPF64[i4 + 40 >> 3]) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i9 = __ZNK7WebCore15AffineTransform12isInvertibleEv(i4) | 0;
 i4 = _llvm_uadd_with_overflow_i32(HEAP32[i7 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i4;
 i4 = HEAP32[i8 >> 2] | 0;
 if (i9) {
  i9 = i4 + (i7 * 200 & -1) + 72 | 0;
  HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  HEAP32[i9 + 16 >> 2] = HEAP32[i11 + 16 >> 2];
  HEAP32[i9 + 20 >> 2] = HEAP32[i11 + 20 >> 2];
  HEAP32[i9 + 24 >> 2] = HEAP32[i11 + 24 >> 2];
  HEAP32[i9 + 28 >> 2] = HEAP32[i11 + 28 >> 2];
  HEAP32[i9 + 32 >> 2] = HEAP32[i11 + 32 >> 2];
  HEAP32[i9 + 36 >> 2] = HEAP32[i11 + 36 >> 2];
  HEAP32[i9 + 40 >> 2] = HEAP32[i11 + 40 >> 2];
  HEAP32[i9 + 44 >> 2] = HEAP32[i11 + 44 >> 2];
  __ZN7WebCore15GraphicsContext6rotateEf(i6, d2);
  __ZN7WebCore15AffineTransformC1Ev(i5);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1 + 36 | 0, __ZN7WebCore15AffineTransform6rotateEd(i5, (+-0 - d2) / 3.141592653589793 * +180) | 0);
  STACKTOP = i3;
  return;
 } else {
  HEAP8[i4 + (i7 * 200 & -1) + 120 | 0] = 0;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_9FloatRectEEEvRKT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 96 | 0;
 i10 = i3 + 104 | 0;
 i11 = i3 + 120 | 0;
 i12 = i3 + 136 | 0;
 i13 = i3 + 144 | 0;
 i14 = i6;
 i15 = i7;
 i16 = HEAP32[i1 + 8 >> 2] | 0;
 i17 = HEAP32[i16 + 72 >> 2] | 0;
 i18 = HEAP32[i16 + 76 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i17;
 HEAP32[i6 + 12 >> 2] = i18;
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i8, i16);
 __ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE(i7, i8, i6);
 HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 __ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_9FloatRectE(i9, i1, i2);
 __ZNK7WebCore4Path16fastBoundingRectEv(i10, i9);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i11, i10);
 __ZN7WebCore7IntRect9intersectERKS0_(i11, i6);
 __ZN7WebCore4PathD1Ev(i9);
 do {
  if ((HEAP32[i11 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i11 + 12 >> 2] | 0) < 1) {
    break;
   }
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1) | 0;
   i6 = i11 + 8 | 0;
   i10 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i5 + 4 >> 2] = i10;
   HEAP8[i4] = 0;
   i10 = __ZN3WTF10fastMallocEj(144) | 0;
   i6 = i10;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i6, i5, +1, 0, i9 ? 2 : 0, i4);
   if ((HEAP8[i4] & 1) == 0) {
    if ((i10 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore11ImageBufferD1Ev(i6);
    __ZN3WTF8fastFreeEPv(i10);
    STACKTOP = i3;
    return;
   }
   if ((i10 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_9FloatRectE(i12, i1, i2);
   d19 = +(-(HEAP32[i11 + 4 >> 2] | 0) | 0);
   HEAPF32[i13 >> 2] = +(-(HEAP32[i11 >> 2] | 0) | 0);
   HEAPF32[i13 + 4 >> 2] = d19;
   __ZN7WebCore4Path9translateERKNS_9FloatSizeE(i12, i13);
   __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(__ZNK7WebCore11ImageBuffer7contextEv(i6) | 0, 2, 0);
   i9 = i1 + 48 | 0;
   i15 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i14 = i1 + 40 | 0;
   i8 = (HEAP32[i14 >> 2] | 0) + (i15 * 200 & -1) + 20 | 0;
   __ZNK7WebCore11CanvasStyle14applyFillColorEPNS_15GraphicsContextE(i8, __ZNK7WebCore11ImageBuffer7contextEv(i6) | 0);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(__ZNK7WebCore11ImageBuffer7contextEv(i6) | 0, i12);
   i8 = _llvm_uadd_with_overflow_i32(HEAP32[i9 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE(i1, i6, i11, HEAP32[(HEAP32[i14 >> 2] | 0) + (i8 * 200 & -1) + 64 >> 2] | 0);
   __ZN7WebCore4PathD1Ev(i12);
   __ZN7WebCore11ImageBufferD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i10);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D11measureTextERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = __ZN3WTF10fastMallocEj(8) | 0;
 i8 = i7;
 HEAP32[i7 >> 2] = 1;
 i9 = i7 + 4 | 0;
 HEAPF32[i9 >> 2] = +0;
 i7 = i5 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i3 = i10 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCoreL15normalizeSpacesERN3WTF6StringE(i5);
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 i5 = i2 + 48 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 i10 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i10;
 i10 = i2 + 40 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((HEAP8[i12 + (i11 * 200 & -1) + 196 | 0] & 1) == 0) {
  __ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE(i2, i12 + (i11 * 200 & -1) + 152 | 0);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = i3;
 }
 i3 = _llvm_uadd_with_overflow_i32(i13 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = (HEAP32[i10 >> 2] | 0) + (i3 * 200 & -1) + 156 | 0;
 i3 = i6 + 4 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i7 = (i10 | 0) == 0;
 if (i7) {
  HEAP32[i3 >> 2] = 0;
  i14 = 0;
  i15 = i6 + 8 | 0;
 } else {
  HEAP32[i3 >> 2] = HEAP32[i10 + 4 >> 2];
  i14 = HEAP32[i10 + 4 >> 2] | 0;
  i15 = i6 + 8 | 0;
 }
 HEAP32[i15 >> 2] = i14;
 HEAPF32[i6 + 12 >> 2] = +0;
 HEAPF32[i6 + 16 >> 2] = +1;
 HEAPF32[i6 + 20 >> 2] = +0;
 i14 = i6 + 24 | 0;
 i15 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 i3 = i15 << 7 & 128 | (HEAP32[i14 >> 2] & -1020 | 81) | i15 << 8 & 256;
 HEAP32[i14 >> 2] = i3;
 HEAP32[i6 + 28 >> 2] = 0;
 i15 = i6 + 32 | 0;
 HEAP32[i15 >> 2] = 0;
 do {
  if (i7) {
   i16 = 0;
   i17 = i3;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP32[i10 + 8 >> 2] | 0;
    i17 = i3;
    break;
   } else {
    i5 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i10) | 0;
    i16 = i5;
    i17 = HEAP32[i14 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = i16;
 HEAP32[i14 >> 2] = i17 & -5;
 HEAPF32[i9 >> 2] = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i13, i6, 0, 0);
 i6 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i15 = i6 + 4 | 0;
   i13 = i15 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i15 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 do {
  if (!i7) {
   i8 = i10 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = __ZN7WebCore9fontCacheEv() | 0;
 i7 = i10 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i10);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_5ImageEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 48 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i11 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i11 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 __ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_9FloatRectEEENS_7IntRectERKT_PNS_7IntSizeE(i12, i1, i4, i11);
 do {
  if ((HEAP32[i12 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i12 + 12 >> 2] | 0) < 1) {
    break;
   }
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1) | 0;
   i22 = i12 + 8 | 0;
   i23 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i10 + 4 >> 2] = i23;
   HEAP8[i9] = 0;
   i23 = __ZN3WTF10fastMallocEj(144) | 0;
   i22 = i23;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i22, i10, +1, 0, i11 ? 2 : 0, i9);
   if ((HEAP8[i9] & 1) == 0) {
    if ((i23 | 0) == 0) {
     STACKTOP = i7;
     return;
    }
    __ZN7WebCore11ImageBufferD1Ev(i22);
    __ZN3WTF8fastFreeEPv(i23);
    STACKTOP = i7;
    return;
   }
   if ((i23 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i11 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i11 | 0) != 0) {
    i24 = i13;
    i25 = i4;
    HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
    HEAP32[i24 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
    HEAP32[i24 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
    HEAP32[i24 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
    HEAP32[i14 >> 2] = 0;
    HEAP32[i14 + 4 >> 2] = 0;
    __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i16, i11, 1);
    __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i17, i16, i15);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i19, i17);
    i11 = __ZNK7WebCore11ImageBuffer7contextEv(i22) | 0;
    __ZN7WebCore15GraphicsContext9translateEff(i11, +(-(HEAP32[i18 >> 2] | 0) | 0), +(-(HEAP32[i18 + 4 >> 2] | 0) | 0));
    i11 = __ZNK7WebCore11ImageBuffer7contextEv(i22) | 0;
    __ZN7WebCore15GraphicsContext9translateEff(i11, +(HEAP32[i20 >> 2] | 0), +(HEAP32[i21 >> 2] | 0));
    __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(__ZNK7WebCore11ImageBuffer7contextEv(i22) | 0, i16);
    i11 = __ZNK7WebCore11ImageBuffer7contextEv(i22) | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i8 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i11, i2, i3, i15, i5, 2, i8, 0);
    __ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE(i1, i22, i12, i6);
   }
   __ZN7WebCore11ImageBufferD1Ev(i22);
   __ZN3WTF8fastFreeEPv(i23);
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9clearRectEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i11 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i10;
 i10 = i11 | ((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0;
 if ((i10 | ((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if (!(d4 != +0 | d5 != +0)) {
  STACKTOP = i6;
  return;
 }
 if (d4 < +0) {
  d12 = +-0 - d4;
  d13 = d2 + d4;
 } else {
  d12 = d4;
  d13 = d2;
 }
 if (d5 < +0) {
  d14 = +-0 - d5;
  d15 = d3 + d5;
 } else {
  d14 = d5;
  d15 = d3;
 }
 i10 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i11 = i1 + 48 | 0;
 i16 = _llvm_uadd_with_overflow_i32(HEAP32[i11 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i17 = i16;
 i16 = i1 + 40 | 0;
 i18 = HEAP32[i16 >> 2] | 0;
 if ((HEAP8[i18 + (i17 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i7 >> 2] = d13;
 HEAPF32[i7 + 4 >> 2] = d15;
 HEAPF32[i7 + 8 >> 2] = d12;
 HEAPF32[i7 + 12 >> 2] = d14;
 do {
  if ((HEAP32[i18 + (i17 * 200 & -1) + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i19 = 0;
  } else {
   if (+HEAPF32[i18 + (i17 * 200 & -1) + 52 >> 2] == +0) {
    if (__ZNK7WebCore9FloatSize6isZeroEv(i18 + (i17 * 200 & -1) + 44 | 0) | 0) {
     i19 = 0;
     break;
    }
   }
   __ZN7WebCore15GraphicsContext4saveEv(i10);
   HEAPF32[i8 >> 2] = +0;
   HEAPF32[i8 + 4 >> 2] = +0;
   HEAP32[i9 >> 2] = 0;
   HEAP8[i9 + 4 | 0] = 1;
   __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i10, i8, +0, i9, 0);
   i19 = 1;
  }
 } while (0);
 i9 = HEAP32[i11 >> 2] | 0;
 i8 = _llvm_uadd_with_overflow_i32(i9 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if (+HEAPF32[(HEAP32[i16 >> 2] | 0) + (i8 * 200 & -1) + 60 >> 2] != +1) {
  if (!i19) {
   __ZN7WebCore15GraphicsContext4saveEv(i10);
  }
  __ZN7WebCore15GraphicsContext8setAlphaEf(i10, +1);
  i20 = 1;
  i21 = HEAP32[i11 >> 2] | 0;
 } else {
  i20 = i19;
  i21 = i9;
 }
 i9 = _llvm_uadd_with_overflow_i32(i21 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i16 >> 2] | 0) + (i9 * 200 & -1) + 64 >> 2] | 0) == 2) {
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i10, i7);
  if (i20) {
   i22 = 28;
  }
 } else {
  if (!i20) {
   __ZN7WebCore15GraphicsContext4saveEv(i10);
  }
  __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i10, 2, 0);
  __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i10, i7);
  i22 = 28;
 }
 if ((i22 | 0) == 28) {
  __ZN7WebCore15GraphicsContext7restoreEv(i10);
 }
 __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i7, -1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateaSERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 196 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  i4 = HEAP32[(HEAP32[i1 + 180 >> 2] | 0) + 48 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] & 7](i4, i1 | 0);
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 8 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i6 >> 2] = i5;
    break;
   }
  }
 } while (0);
 __ZN7WebCore11CanvasStyleaSERKS0_(i1 + 12 | 0, i2 + 12 | 0) | 0;
 __ZN7WebCore11CanvasStyleaSERKS0_(i1 + 20 | 0, i2 + 20 | 0) | 0;
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2];
 i4 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 64 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 i6 = i1 + 72 | 0;
 i5 = i2 + 72 | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i6 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 HEAP32[i6 + 20 >> 2] = HEAP32[i5 + 20 >> 2];
 HEAP32[i6 + 24 >> 2] = HEAP32[i5 + 24 >> 2];
 HEAP32[i6 + 28 >> 2] = HEAP32[i5 + 28 >> 2];
 HEAP32[i6 + 32 >> 2] = HEAP32[i5 + 32 >> 2];
 HEAP32[i6 + 36 >> 2] = HEAP32[i5 + 36 >> 2];
 HEAP32[i6 + 40 >> 2] = HEAP32[i5 + 40 >> 2];
 HEAP32[i6 + 44 >> 2] = HEAP32[i5 + 44 >> 2];
 HEAP8[i1 + 120 | 0] = HEAP8[i2 + 120 | 0] & 1;
 HEAP8[i1 + 140 | 0] = HEAP8[i2 + 140 | 0] & 1;
 HEAP32[i1 + 144 >> 2] = HEAP32[i2 + 144 >> 2];
 HEAP32[i1 + 148 >> 2] = HEAP32[i2 + 148 >> 2];
 i5 = HEAP32[i2 + 152 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i1 + 152 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN7WebCore4FontaSERKS0_(i1 + 156 | 0, i2 + 156 | 0) | 0;
 i4 = HEAP8[i2 + 196 | 0] & 1;
 HEAP8[i3] = i4;
 if (i4 << 24 >> 24 == 0) {
  return i1 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 180 >> 2] | 0) + 48 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] & 7](i4, i1 | 0);
 return i1 | 0;
}
function __ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_11ImageBufferEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 40 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i10 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i10 + 4 | 0;
 HEAP32[i20 >> 2] = 0;
 __ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_9FloatRectEEENS_7IntRectERKT_PNS_7IntSizeE(i11, i1, i4, i10);
 do {
  if ((HEAP32[i11 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i11 + 12 >> 2] | 0) < 1) {
    break;
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1) | 0;
   i21 = i11 + 8 | 0;
   i22 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i9 + 4 >> 2] = i22;
   HEAP8[i8] = 0;
   i22 = __ZN3WTF10fastMallocEj(144) | 0;
   i21 = i22;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i21, i9, +1, 0, i10 ? 2 : 0, i8);
   if ((HEAP8[i8] & 1) == 0) {
    if ((i22 | 0) == 0) {
     STACKTOP = i7;
     return;
    }
    __ZN7WebCore11ImageBufferD1Ev(i21);
    __ZN3WTF8fastFreeEPv(i22);
    STACKTOP = i7;
    return;
   }
   if ((i22 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i10 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i10 | 0) != 0) {
    i23 = i12;
    i24 = i4;
    HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i23 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
    HEAP32[i23 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
    HEAP32[i23 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
    HEAP32[i13 >> 2] = 0;
    HEAP32[i13 + 4 >> 2] = 0;
    __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i15, i10, 1);
    __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i16, i15, i14);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i18, i16);
    i10 = __ZNK7WebCore11ImageBuffer7contextEv(i21) | 0;
    __ZN7WebCore15GraphicsContext9translateEff(i10, +(-(HEAP32[i17 >> 2] | 0) | 0), +(-(HEAP32[i17 + 4 >> 2] | 0) | 0));
    i10 = __ZNK7WebCore11ImageBuffer7contextEv(i21) | 0;
    __ZN7WebCore15GraphicsContext9translateEff(i10, +(HEAP32[i19 >> 2] | 0), +(HEAP32[i20 >> 2] | 0));
    __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(__ZNK7WebCore11ImageBuffer7contextEv(i21) | 0, i15);
    __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(__ZNK7WebCore11ImageBuffer7contextEv(i21) | 0, i2, i3, i14, i5, 2, 0, 0);
    __ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE(i1, i21, i11, i6);
   }
   __ZN7WebCore11ImageBufferD1Ev(i21);
   __ZN3WTF8fastFreeEPv(i22);
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasStrokeStyleApplier11strokeStyleEPNS_15GraphicsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, +HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i6 * 200 & -1) + 28 >> 2]);
 i6 = HEAP32[i5 >> 2] | 0;
 i1 = _llvm_uadd_with_overflow_i32(HEAP32[i6 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext10setLineCapENS_7LineCapE(i2, HEAP32[(HEAP32[i6 + 40 >> 2] | 0) + (i1 * 200 & -1) + 32 >> 2] | 0);
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext11setLineJoinENS_8LineJoinE(i2, HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + (i6 * 200 & -1) + 36 >> 2] | 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i1 = _llvm_uadd_with_overflow_i32(HEAP32[i6 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext13setMiterLimitEf(i2, +HEAPF32[(HEAP32[i6 + 40 >> 2] | 0) + (i1 * 200 & -1) + 40 >> 2]);
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i6;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = i6 + (i7 * 200 & -1) + 132 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = i8;
 do {
  if ((i8 | 0) != 0) {
   if (i8 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 3) | 0;
    HEAP32[i10 >> 2] = i12 >>> 3;
    HEAP32[i9 >> 2] = __ZN3WTF10fastMallocEj(i12) | 0;
    break;
   }
  }
 } while (0);
 L22 : do {
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   i8 = i6 + (i7 * 200 & -1) + 124 | 0;
   i12 = 0;
   while (1) {
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i12 >>> 0) {
     break;
    }
    HEAPF64[(HEAP32[i9 >> 2] | 0) + (i12 << 3) >> 3] = +HEAPF32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2];
    i12 = i12 + 1 | 0;
    if (i12 >>> 0 >= (HEAP32[i1 >> 2] | 0) >>> 0) {
     break L22;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext11setLineDashERKN3WTF6VectorIdLj0ENS1_15CrashOnOverflowEEEf(i2, i4, +HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i5 * 200 & -1) + 136 >> 2]);
 if ((HEAP32[i11 >> 2] | 0) != 0) {
  HEAP32[i11 >> 2] = 0;
 }
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 80 | 0;
 i9 = i1 + 8 | 0;
 if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i9 >> 2] | 0) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i10 = i1 + 48 | 0;
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i11;
 i11 = i1 + 40 | 0;
 i1 = HEAP32[i11 >> 2] | 0;
 if ((HEAP8[i1 + (i12 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i5;
 i14 = i2;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 if ((i3 & 1 | 0) != 0) {
  i14 = i6;
  i15 = i1 + (i12 * 200 & -1) + 72 | 0;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i14 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
  HEAP32[i14 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
  HEAP32[i14 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
  HEAP32[i14 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
  HEAP32[i14 + 20 >> 2] = HEAP32[i15 + 20 >> 2];
  HEAP32[i14 + 24 >> 2] = HEAP32[i15 + 24 >> 2];
  HEAP32[i14 + 28 >> 2] = HEAP32[i15 + 28 >> 2];
  HEAP32[i14 + 32 >> 2] = HEAP32[i15 + 32 >> 2];
  HEAP32[i14 + 36 >> 2] = HEAP32[i15 + 36 >> 2];
  HEAP32[i14 + 40 >> 2] = HEAP32[i15 + 40 >> 2];
  HEAP32[i14 + 44 >> 2] = HEAP32[i15 + 44 >> 2];
  __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i7, i6, i2);
  i2 = i7;
  HEAP32[i13 >> 2] = HEAP32[i2 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 }
 do {
  if ((i3 & 2 | 0) != 0) {
   i2 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = i2;
   i2 = HEAP32[i11 >> 2] | 0;
   if ((HEAP32[i2 + (i7 * 200 & -1) + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    break;
   }
   i6 = i8;
   HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   d16 = +HEAPF32[i2 + (i7 * 200 & -1) + 48 >> 2];
   i6 = i8 | 0;
   d17 = +HEAPF32[i2 + (i7 * 200 & -1) + 44 >> 2] + +HEAPF32[i6 >> 2];
   HEAPF32[i6 >> 2] = d17;
   i15 = i8 + 4 | 0;
   d18 = d16 + +HEAPF32[i15 >> 2];
   HEAPF32[i15 >> 2] = d18;
   d16 = +HEAPF32[i2 + (i7 * 200 & -1) + 52 >> 2];
   HEAPF32[i6 >> 2] = d17 - d16;
   i6 = i8 + 8 | 0;
   HEAPF32[i6 >> 2] = d16 + (d16 + +HEAPF32[i6 >> 2]);
   HEAPF32[i15 >> 2] = d18 - d16;
   i15 = i8 + 12 | 0;
   HEAPF32[i15 >> 2] = d16 + (d16 + +HEAPF32[i15 >> 2]);
   __ZN7WebCore9FloatRect5uniteERKS0_(i5, i8);
  }
 } while (0);
 __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i9 >> 2] | 0, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_4PathEEEvRKT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 56 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 88 | 0;
 __ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_4PathEEENS_7IntRectERKT_PNS_7IntSizeE(i7, i1, i2, 0);
 do {
  if ((HEAP32[i7 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i7 + 12 >> 2] | 0) < 1) {
    break;
   }
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 31](i1) | 0;
   i11 = i7 + 8 | 0;
   i12 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i6 + 4 >> 2] = i12;
   HEAP8[i5] = 0;
   i12 = __ZN3WTF10fastMallocEj(144) | 0;
   i11 = i12;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i11, i6, +1, 0, i10 ? 2 : 0, i5);
   if ((HEAP8[i5] & 1) == 0) {
    if ((i12 | 0) == 0) {
     STACKTOP = i3;
     return;
    }
    __ZN7WebCore11ImageBufferD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i12);
    STACKTOP = i3;
    return;
   }
   if ((i12 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4PathC1ERKS0_(i8, i2);
   i10 = i1 + 48 | 0;
   i13 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i14 = i1 + 40 | 0;
   __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i8, (HEAP32[i14 >> 2] | 0) + (i13 * 200 & -1) + 72 | 0);
   __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i4, HEAP32[i1 + 8 >> 2] | 0);
   __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i8, i4);
   d15 = +(-(HEAP32[i7 + 4 >> 2] | 0) | 0);
   HEAPF32[i9 >> 2] = +(-(HEAP32[i7 >> 2] | 0) | 0);
   HEAPF32[i9 + 4 >> 2] = d15;
   __ZN7WebCore4Path9translateERKNS_9FloatSizeE(i8, i9);
   __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(__ZNK7WebCore11ImageBuffer7contextEv(i11) | 0, 2, 0);
   i13 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i16 = (HEAP32[i14 >> 2] | 0) + (i13 * 200 & -1) + 20 | 0;
   __ZNK7WebCore11CanvasStyle14applyFillColorEPNS_15GraphicsContextE(i16, __ZNK7WebCore11ImageBuffer7contextEv(i11) | 0);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(__ZNK7WebCore11ImageBuffer7contextEv(i11) | 0, i8);
   i16 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   __ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE(i1, i11, i7, HEAP32[(HEAP32[i14 >> 2] | 0) + (i16 * 200 & -1) + 64 >> 2] | 0);
   __ZN7WebCore4PathD1Ev(i8);
   __ZN7WebCore11ImageBufferD1Ev(i11);
   __ZN3WTF8fastFreeEPv(i12);
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D10strokeRectEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = ((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0;
 i10 = ((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | i9;
 i9 = i10 | ((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0;
 if ((i9 | ((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | 0) != 0) {
  STACKTOP = i6;
  return;
 }
 if (!(d4 != +0 | d5 != +0)) {
  STACKTOP = i6;
  return;
 }
 if (d4 < +0) {
  d11 = +-0 - d4;
  d12 = d2 + d4;
 } else {
  d11 = d4;
  d12 = d2;
 }
 if (d5 < +0) {
  d13 = +-0 - d5;
  d14 = d3 + d5;
 } else {
  d13 = d5;
  d14 = d3;
 }
 i9 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i1 + 48 | 0;
 i15 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i16 = i15;
 i15 = i1 + 40 | 0;
 i17 = HEAP32[i15 >> 2] | 0;
 if ((HEAP8[i17 + (i16 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i6;
  return;
 }
 if (+HEAPF32[i17 + (i16 * 200 & -1) + 28 >> 2] < +0) {
  STACKTOP = i6;
  return;
 }
 i16 = __ZNK7WebCore15GraphicsContext14strokeGradientEv(i9) | 0;
 do {
  if ((i16 | 0) != 0) {
   if (+HEAPF32[i16 + 8 >> 2] != +HEAPF32[i16 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i16 + 12 >> 2] != +HEAPF32[i16 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i16 + 4 | 0] & 1) == 0) {
    STACKTOP = i6;
    return;
   }
   if (+HEAPF32[i16 + 24 >> 2] != +HEAPF32[i16 + 28 >> 2]) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAPF32[i7 >> 2] = d12;
 HEAPF32[i7 + 4 >> 2] = d14;
 HEAPF32[i7 + 8 >> 2] = d11;
 HEAPF32[i7 + 12 >> 2] = d13;
 i16 = i8;
 i17 = i7;
 HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 i17 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = (HEAP32[i15 >> 2] | 0) + (i17 * 200 & -1) + 28 | 0;
 d13 = +HEAPF32[i10 >> 2] * +.5;
 i17 = i8 | 0;
 HEAPF32[i17 >> 2] = +HEAPF32[i17 >> 2] - d13;
 i17 = i8 + 8 | 0;
 HEAPF32[i17 >> 2] = d13 + (d13 + +HEAPF32[i17 >> 2]);
 i17 = i8 + 4 | 0;
 HEAPF32[i17 >> 2] = +HEAPF32[i17 >> 2] - d13;
 i17 = i8 + 12 | 0;
 HEAPF32[i17 >> 2] = d13 + (d13 + +HEAPF32[i17 >> 2]);
 __ZN7WebCore15GraphicsContext10strokeRectERKNS_9FloatRectEf(i9, i7, +HEAPF32[i10 >> 2]);
 __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i8, -1);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_16HTMLImageElementERKN3WTF6StringERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore13CanvasPattern19parseRepetitionTypeERKN3WTF6StringERbS5_Ri(i4, i7, i8, i5);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 if (!(__ZNK7WebCore16HTMLImageElement8completeEv(i3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i5 = HEAP32[i3 + 64 >> 2] | 0;
 i4 = i5;
 do {
  if ((i5 | 0) != 0) {
   i11 = i3 + 12 | 0;
   i12 = i3 + 32 | 0;
   if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
    i13 = i12 | 0;
   } else {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   if ((__ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i4, HEAP32[i13 >> 2] | 0) | 0) == 0) {
    break;
   }
   i14 = __ZN7WebCore11CachedImage13isOriginCleanEPNS_14SecurityOriginE(i4, __ZNK7WebCore17HTMLCanvasElement14securityOriginEv(HEAP32[i2 + 8 >> 2] | 0) | 0) | 0;
   if ((HEAP32[i11 >> 2] & 2048 | 0) == 0) {
    i15 = i12 | 0;
   } else {
    i15 = HEAP32[i12 >> 2] | 0;
   }
   i12 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i4, HEAP32[i15 >> 2] | 0) | 0;
   i11 = i10 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i16 = i12 + 4 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   __ZN7WebCore13CanvasPattern6createEN3WTF10PassRefPtrINS_5ImageEEEbbb(i1, i10, (HEAP8[i7] & 1) != 0, (HEAP8[i8] & 1) != 0, i14);
   i14 = HEAP32[i11 >> 2] | 0;
   if ((i14 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i11 = i14 + 4 | 0;
   i14 = i11 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i14 >> 2] = i16;
    STACKTOP = i6;
    return;
   }
   i16 = i11 - 4 | 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = __ZN7WebCore5Image9nullImageEv() | 0;
 i15 = i9 | 0;
 HEAP32[i15 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i4 = i10 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN7WebCore13CanvasPattern6createEN3WTF10PassRefPtrINS_5ImageEEEbbb(i1, i9, (HEAP8[i7] & 1) != 0, (HEAP8[i8] & 1) != 0, 1);
 i8 = HEAP32[i15 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i15 = i8 + 4 | 0;
 i8 = i15 | 0;
 i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i8 >> 2] = i7;
  STACKTOP = i6;
  return;
 }
 i7 = i15 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 6) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 48 | 0;
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i11;
 i11 = i1 + 40 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((HEAP32[i13 + (i12 * 200 & -1) + 16 >> 2] | 0) == 6) {
   i14 = i9;
  } else {
   if (__ZNK7WebCore11CanvasStyle17isEquivalentColorERKS0_(i13 + (i12 * 200 & -1) + 12 | 0, i2) | 0) {
    STACKTOP = i3;
    return;
   } else {
    i14 = HEAP32[i8 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i14 - 4 | 0) >>> 0 < 2 >>> 0) {
   i8 = __ZN7WebCore12currentColorEPNS_17HTMLCanvasElementE(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i14 | 0) == 5) {
    __ZN7WebCore11CanvasStyleC1Ej(i5, __ZN7WebCore22colorWithOverrideAlphaEjf(i8, +HEAPF32[i2 >> 2]) | 0);
    i12 = i2;
    i13 = HEAP32[i4 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i12 + 4 >> 2] = i13;
    HEAP32[i5 + 4 >> 2] = 6;
    __ZN7WebCore11CanvasStyleD1Ev(i5);
    break;
   } else {
    __ZN7WebCore11CanvasStyleC1Ej(i7, i8);
    i8 = i2;
    i13 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i8 + 4 >> 2] = i13;
    HEAP32[i7 + 4 >> 2] = 6;
    __ZN7WebCore11CanvasStyleD1Ev(i7);
    break;
   }
  } else {
   if ((i14 | 0) == 3) {
    i15 = HEAP32[i2 >> 2] | 0;
   } else {
    i15 = 0;
   }
   if (!(__ZN7WebCore22CanvasRenderingContext16wouldTaintOriginEPKNS_13CanvasPatternE(i1 | 0, i15) | 0)) {
    break;
   }
   HEAP8[(HEAP32[i1 + 8 >> 2] | 0) + 108 | 0] = 0;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i15 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i15;
 i15 = HEAP32[i11 >> 2] | 0;
 i11 = i15 + (i10 * 200 & -1) + 12 | 0;
 __ZN7WebCore11CanvasStyleaSERKS0_(i11, i2) | 0;
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore11CanvasStyle16applyStrokeColorEPNS_15GraphicsContextE(i11, i2);
 i2 = i15 + (i10 * 200 & -1) + 4 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 | 0;
 i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = i2 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 6) {
  STACKTOP = i3;
  return;
 }
 i10 = i1 + 48 | 0;
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i12 = i11;
 i11 = i1 + 40 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 do {
  if ((HEAP32[i13 + (i12 * 200 & -1) + 24 >> 2] | 0) == 6) {
   i14 = i9;
  } else {
   if (__ZNK7WebCore11CanvasStyle17isEquivalentColorERKS0_(i13 + (i12 * 200 & -1) + 20 | 0, i2) | 0) {
    STACKTOP = i3;
    return;
   } else {
    i14 = HEAP32[i8 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i14 - 4 | 0) >>> 0 < 2 >>> 0) {
   i8 = __ZN7WebCore12currentColorEPNS_17HTMLCanvasElementE(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i14 | 0) == 5) {
    __ZN7WebCore11CanvasStyleC1Ej(i5, __ZN7WebCore22colorWithOverrideAlphaEjf(i8, +HEAPF32[i2 >> 2]) | 0);
    i12 = i2;
    i13 = HEAP32[i4 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i12 + 4 >> 2] = i13;
    HEAP32[i5 + 4 >> 2] = 6;
    __ZN7WebCore11CanvasStyleD1Ev(i5);
    break;
   } else {
    __ZN7WebCore11CanvasStyleC1Ej(i7, i8);
    i8 = i2;
    i13 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i8 + 4 >> 2] = i13;
    HEAP32[i7 + 4 >> 2] = 6;
    __ZN7WebCore11CanvasStyleD1Ev(i7);
    break;
   }
  } else {
   if ((i14 | 0) == 3) {
    i15 = HEAP32[i2 >> 2] | 0;
   } else {
    i15 = 0;
   }
   if (!(__ZN7WebCore22CanvasRenderingContext16wouldTaintOriginEPKNS_13CanvasPatternE(i1 | 0, i15) | 0)) {
    break;
   }
   HEAP8[(HEAP32[i1 + 8 >> 2] | 0) + 108 | 0] = 0;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i15 = _llvm_uadd_with_overflow_i32(HEAP32[i10 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i15;
 i15 = HEAP32[i11 >> 2] | 0;
 i11 = i15 + (i10 * 200 & -1) + 20 | 0;
 __ZN7WebCore11CanvasStyleaSERKS0_(i11, i2) | 0;
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore11CanvasStyle14applyFillColorEPNS_15GraphicsContextE(i11, i2);
 i2 = i15 + (i10 * 200 & -1) + 8 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 | 0;
 i15 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i15 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCoreL20createEmptyImageDataERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) > -1) {
  if ((i5 | 0) > 536870911) {
   i6 = 1;
   i7 = 4;
  } else {
   i8 = 4;
  }
 } else {
  if ((i5 | 0) < -536870912) {
   i6 = 1;
   i7 = 4;
  } else {
   i8 = 4;
  }
 }
 if ((i8 | 0) == 4) {
  i6 = 0;
  i7 = i5 << 2;
 }
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 do {
  if ((i5 ^ i7 | 0) > -1) {
   if ((i7 | 0) > -1) {
    if ((i7 | 0) == 0) {
     i8 = 16;
     break;
    }
    if ((2147483647 / (i7 | 0) & -1 | 0) >= (i5 | 0) & i6 << 24 >> 24 == 0) {
     break;
    } else {
     i8 = 17;
     break;
    }
   } else {
    if ((i7 | 0) == -2147483648 | (i5 | 0) == -2147483648) {
     i8 = 17;
     break;
    }
    if ((2147483647 / (-i7 | 0) & -1 | 0) >= (-i5 | 0) & i6 << 24 >> 24 == 0) {
     break;
    } else {
     i8 = 17;
     break;
    }
   }
  } else {
   if ((i7 | 0) < 0) {
    if ((i5 | 0) == 0) {
     i8 = 16;
     break;
    }
    if ((-2147483648 / (i5 | 0) & -1 | 0) <= (i7 | 0) & i6 << 24 >> 24 == 0) {
     break;
    } else {
     i8 = 17;
     break;
    }
   } else {
    if ((i7 | 0) == 0) {
     i8 = 16;
     break;
    }
    if ((-2147483648 / (i7 | 0) & -1 | 0) <= (i5 | 0) & i6 << 24 >> 24 == 0) {
     break;
    } else {
     i8 = 17;
     break;
    }
   }
  }
 } while (0);
 if ((i8 | 0) == 16) {
  if (i6 << 24 >> 24 != 0) {
   i8 = 17;
  }
 }
 if ((i8 | 0) == 17) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore9ImageData6createERKNS_7IntSizeE(i4, i2);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i4 + 12 >> 2] | 0;
 i8 = i2 + 16 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = 0;
  } else {
   if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = HEAP32[i2 + 20 >> 2] | 0;
  }
 } while (0);
 i6 = i2 | 0;
 i5 = i2;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i6) | 0;
 if (i9 >>> 0 <= (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i6) | 0) >>> 0) {
  i6 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i6 | 0) == 0) {
    i10 = 0;
   } else {
    if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
     i10 = 0;
     break;
    }
    i10 = HEAP32[i2 + 8 >> 2] | 0;
   }
  } while (0);
  _memset(i10 | 0, 0, i9 | 0) | 0;
 }
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore11CanvasStyleC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 __ZN7WebCore11CanvasStyleC1ERKS0_(i1 + 20 | 0, i2 + 20 | 0);
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 64 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 i5 = i1 + 72 | 0;
 i4 = i2 + 72 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP8[i1 + 120 | 0] = HEAP8[i2 + 120 | 0] & 1;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAPF32[i1 + 136 >> 2] = +HEAPF32[i2 + 136 >> 2];
 HEAP8[i1 + 140 | 0] = HEAP8[i2 + 140 | 0] & 1;
 HEAP32[i1 + 144 >> 2] = HEAP32[i2 + 144 >> 2];
 HEAP32[i1 + 148 >> 2] = HEAP32[i2 + 148 >> 2];
 i4 = HEAP32[i2 + 152 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZN7WebCore4FontC1ERKS0_(i1 + 156 | 0, i2 + 156 | 0);
 i5 = HEAP8[i2 + 196 | 0] & 1;
 HEAP8[i1 + 196 | 0] = i5;
 if (i5 << 24 >> 24 == 0) {
  return;
 }
 i5 = HEAP32[(HEAP32[i1 + 180 >> 2] | 0) + 48 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 7](i5, i1 | 0);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateC1ERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN7WebCore11CanvasStyleC1ERKS0_(i1 + 12 | 0, i2 + 12 | 0);
 __ZN7WebCore11CanvasStyleC1ERKS0_(i1 + 20 | 0, i2 + 20 | 0);
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 HEAP32[i1 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
 HEAPF32[i1 + 40 >> 2] = +HEAPF32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAPF32[i1 + 52 >> 2] = +HEAPF32[i2 + 52 >> 2];
 HEAP32[i1 + 56 >> 2] = HEAP32[i2 + 56 >> 2];
 HEAPF32[i1 + 60 >> 2] = +HEAPF32[i2 + 60 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 64 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 i5 = i1 + 72 | 0;
 i4 = i2 + 72 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 HEAP32[i5 + 20 >> 2] = HEAP32[i4 + 20 >> 2];
 HEAP32[i5 + 24 >> 2] = HEAP32[i4 + 24 >> 2];
 HEAP32[i5 + 28 >> 2] = HEAP32[i4 + 28 >> 2];
 HEAP32[i5 + 32 >> 2] = HEAP32[i4 + 32 >> 2];
 HEAP32[i5 + 36 >> 2] = HEAP32[i4 + 36 >> 2];
 HEAP32[i5 + 40 >> 2] = HEAP32[i4 + 40 >> 2];
 HEAP32[i5 + 44 >> 2] = HEAP32[i4 + 44 >> 2];
 HEAP8[i1 + 120 | 0] = HEAP8[i2 + 120 | 0] & 1;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAPF32[i1 + 136 >> 2] = +HEAPF32[i2 + 136 >> 2];
 HEAP8[i1 + 140 | 0] = HEAP8[i2 + 140 | 0] & 1;
 HEAP32[i1 + 144 >> 2] = HEAP32[i2 + 144 >> 2];
 HEAP32[i1 + 148 >> 2] = HEAP32[i2 + 148 >> 2];
 i4 = HEAP32[i2 + 152 >> 2] | 0;
 HEAP32[i1 + 152 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 __ZN7WebCore4FontC1ERKS0_(i1 + 156 | 0, i2 + 156 | 0);
 i5 = HEAP8[i2 + 196 | 0] & 1;
 HEAP8[i1 + 196 | 0] = i5;
 if (i5 << 24 >> 24 == 0) {
  return;
 }
 i5 = HEAP32[(HEAP32[i1 + 180 >> 2] | 0) + 48 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 7](i5, i1 | 0);
 return;
}
function __ZN7WebCoreL15normalizeSpacesERN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = __ZN3WTF10StringImpl4findEPFbtEj(i1, F_BASE_ii + 8 | 0, 0) | 0;
 if ((i3 | 0) == -1) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 do {
  if (i5) {
   i6 = i1;
   i7 = 0;
   i8 = 0;
   i9 = 8;
  } else {
   if ((i4 | 0) < 0) {
    _WTFCrash();
   } else {
    i10 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i4 << 1) | 0) | 0;
    i11 = i10;
    i12 = HEAP32[i2 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = 0;
     i14 = i11;
     i15 = i10;
     break;
    } else {
     i6 = i12;
     i7 = i11;
     i8 = i10;
     i9 = 8;
     break;
    }
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 8) {
   if ((HEAP32[i6 + 16 >> 2] & 32 | 0) == 0) {
    i13 = HEAP32[i6 + 8 >> 2] | 0;
    i14 = i7;
    i15 = i8;
    break;
   } else {
    i13 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i6) | 0;
    i14 = i7;
    i15 = i8;
    break;
   }
  }
 } while (0);
 _memcpy(i15 | 0, i13 | 0, i4 << 1) | 0;
 if (i4 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP16[i14 + (i3 << 1) >> 1] = 32;
 i13 = i3 + 1 | 0;
 if (i13 >>> 0 < i4 >>> 0) {
  i3 = i13;
  while (1) {
   i13 = i14 + (i3 << 1) | 0;
   if (((HEAP16[i13 >> 1] | 0) - 9 & 65535) >>> 0 < 5 >>> 0) {
    HEAP16[i13 >> 1] = 32;
   }
   i3 = i3 + 1 | 0;
   if (i3 >>> 0 >= i4 >>> 0) {
    break;
   }
  }
 }
 if (i5) {
  i5 = __ZN3WTF10StringImpl5emptyEv() | 0;
  i3 = i5 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i16 = i5;
  i17 = i14;
 } else {
  i14 = __ZN3WTF10fastMallocEj(20) | 0;
  HEAP32[i14 >> 2] = 2;
  HEAP32[i14 + 4 >> 2] = i4;
  HEAP32[i14 + 8 >> 2] = i15;
  HEAP32[i14 + 12 >> 2] = 0;
  HEAP32[i14 + 16 >> 2] = 1;
  __ZN3WTF8fastFreeEPv(0);
  i16 = i14;
  i17 = 0;
 }
 i14 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i16;
 do {
  if ((i14 | 0) != 0) {
   i16 = i14 | 0;
   i2 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i16 >> 2] = i2;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i17);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = _llvm_uadd_with_overflow_i32(i6 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i1 + 40 | 0;
 i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i7 * 200 & -1) + 132 >> 2] | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i3 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i3 + 8 | 0;
 HEAP32[i10 >> 2] = i1;
 do {
  if ((i1 | 0) == 0) {
   i11 = i6;
  } else {
   if (i1 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i1 << 3) | 0;
    HEAP32[i9 >> 2] = i12 >>> 3;
    HEAP32[i7 >> 2] = __ZN3WTF10fastMallocEj(i12) | 0;
    i11 = HEAP32[i5 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i1 = _llvm_uadd_with_overflow_i32(i11 | 0, -1 | 0) | 0;
 i11 = tempRet0;
 if (i11) {
  i13 = 0;
  i14 = i11;
  i15 = i1;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 while (1) {
  i16 = i15;
  i17 = HEAP32[i8 >> 2] | 0;
  if (i13 >>> 0 >= (HEAP32[i17 + (i16 * 200 & -1) + 132 >> 2] | 0) >>> 0) {
   i18 = 15;
   break;
  }
  if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i13 >>> 0) {
   i18 = 12;
   break;
  }
  HEAPF64[(HEAP32[i7 >> 2] | 0) + (i13 << 3) >> 3] = +HEAPF32[(HEAP32[i17 + (i16 * 200 & -1) + 124 >> 2] | 0) + (i13 << 2) >> 2];
  i1 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
  i11 = tempRet0;
  if (!i11) {
   i18 = 23;
   break;
  }
  i13 = i13 + 1 | 0;
  i14 = i11;
  i15 = i1;
 }
 if ((i18 | 0) == 15) {
  __ZN7WebCore15GraphicsContext11setLineDashERKN3WTF6VectorIdLj0ENS1_15CrashOnOverflowEEEf(i4, i3, +HEAPF32[i17 + (i16 * 200 & -1) + 136 >> 2]);
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
  }
  i10 = HEAP32[i7 >> 2] | 0;
  if ((i10 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  HEAP32[i7 >> 2] = 0;
  HEAP32[i9 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
  STACKTOP = i2;
  return;
 } else if ((i18 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 23) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D13isPointInPathEffRKN3WTF6StringE(i1, d2, d3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0) == 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i12 = i11;
 i11 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP8[i11 + (i12 * 200 & -1) + 120 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAPF32[i6 >> 2] = d2;
 HEAPF32[i6 + 4 >> 2] = d3;
 i13 = i7;
 i14 = i11 + (i12 * 200 & -1) + 72 | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 HEAP32[i13 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
 HEAP32[i13 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
 HEAP32[i13 + 24 >> 2] = HEAP32[i14 + 24 >> 2];
 HEAP32[i13 + 28 >> 2] = HEAP32[i14 + 28 >> 2];
 HEAP32[i13 + 32 >> 2] = HEAP32[i14 + 32 >> 2];
 HEAP32[i13 + 36 >> 2] = HEAP32[i14 + 36 >> 2];
 HEAP32[i13 + 40 >> 2] = HEAP32[i14 + 40 >> 2];
 HEAP32[i13 + 44 >> 2] = HEAP32[i14 + 44 >> 2];
 __ZNK7WebCore15AffineTransform7inverseEv(i9, i7);
 __ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE(i8, i9, i6);
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i8 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i8 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 i6 = i4 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 16 | 0) | 0) {
   i15 = 0;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 8 | 0) | 0) {
    i15 = 1;
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i5;
   return i10 | 0;
  }
 } while (0);
 i10 = __ZNK7WebCore4Path8containsERKNS_10FloatPointENS_8WindRuleE(i1 + 36 | 0, i8, i15) | 0;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i1 + 48 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i6;
 i6 = i1 + 40 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if (+HEAPF32[i8 + (i7 * 200 & -1) + 44 >> 2] == +HEAPF32[i2 >> 2]) {
   if (+HEAPF32[i8 + (i7 * 200 & -1) + 48 >> 2] != +HEAPF32[i2 + 4 >> 2]) {
    break;
   }
   if (+HEAPF32[i8 + (i7 * 200 & -1) + 52 >> 2] != d3) {
    break;
   }
   if ((HEAP32[i8 + (i7 * 200 & -1) + 56 >> 2] | 0) != (i4 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i8 + (i7 * 200 & -1) + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i9 = 0;
  } else {
   if (+HEAPF32[i8 + (i7 * 200 & -1) + 52 >> 2] != +0) {
    i9 = 1;
    break;
   }
   i9 = (__ZNK7WebCore9FloatSize6isZeroEv(i8 + (i7 * 200 & -1) + 44 | 0) | 0) ^ 1;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i2;
 i2 = (HEAP32[i6 >> 2] | 0) + (i7 * 200 & -1) + 44 | 0;
 i7 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = i7;
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i7 * 200 & -1) + 52 >> 2] = d3;
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 * 200 & -1) + 56 >> 2] = i4;
 do {
  if (!i9) {
   i4 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = i4;
   i4 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i4 + (i7 * 200 & -1) + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    return;
   }
   if (+HEAPF32[i4 + (i7 * 200 & -1) + 52 >> 2] != +0) {
    break;
   }
   if (!(__ZNK7WebCore9FloatSize6isZeroEv(i4 + (i7 * 200 & -1) + 44 | 0) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D6strokeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 48 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP8[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = __ZNK7WebCore15GraphicsContext14strokeGradientEv(i4) | 0;
 do {
  if ((i6 | 0) != 0) {
   if (+HEAPF32[i6 + 8 >> 2] != +HEAPF32[i6 + 16 >> 2]) {
    break;
   }
   if (+HEAPF32[i6 + 12 >> 2] != +HEAPF32[i6 + 20 >> 2]) {
    break;
   }
   if ((HEAP8[i6 + 4 | 0] & 1) == 0) {
    STACKTOP = i2;
    return;
   }
   if (+HEAPF32[i6 + 24 >> 2] != +HEAPF32[i6 + 28 >> 2]) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i6 = i1 + 36 | 0;
 if (!(__ZNK7WebCore4Path7isEmptyEv(i6) | 0)) {
  __ZNK7WebCore4Path16fastBoundingRectEv(i3, i6);
  if (!(HEAP8[H_BASE + 472 | 0] | 0)) {
   HEAPF32[H_BASE + 216 >> 2] = 1.4142135381698608;
   HEAP8[H_BASE + 472 | 0] = 1;
  }
  i8 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i5 = i8;
  i8 = HEAP32[i7 >> 2] | 0;
  d9 = +HEAPF32[i8 + (i5 * 200 & -1) + 28 >> 2] * +.5;
  do {
   if ((HEAP32[i8 + (i5 * 200 & -1) + 36 >> 2] | 0) == 0) {
    d10 = d9 * +HEAPF32[i8 + (i5 * 200 & -1) + 40 >> 2];
   } else {
    if ((HEAP32[i8 + (i5 * 200 & -1) + 32 >> 2] | 0) != 2) {
     d10 = d9;
     break;
    }
    d10 = d9 * +HEAPF32[H_BASE + 216 >> 2];
   }
  } while (0);
  i5 = i3 | 0;
  HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - d10;
  i5 = i3 + 8 | 0;
  HEAPF32[i5 >> 2] = d10 + (d10 + +HEAPF32[i5 >> 2]);
  i5 = i3 + 4 | 0;
  HEAPF32[i5 >> 2] = +HEAPF32[i5 >> 2] - d10;
  i5 = i3 + 12 | 0;
  HEAPF32[i5 >> 2] = d10 + (d10 + +HEAPF32[i5 >> 2]);
  __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i4, i6);
  __ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj(i1, i3, -1);
 }
 if ((HEAP8[i1 + 261 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore4Path5clearEv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 128 | 0;
 i11 = i5 + 144 | 0;
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 72 >> 2] | 0;
 i15 = HEAP32[i13 + 76 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i14;
 HEAP32[i6 + 12 >> 2] = i15;
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i8, i13);
 __ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE(i7, i8, i6);
 i8 = i6;
 i13 = i7;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 i13 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i12 >> 2] | 0) | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i13);
 __ZN7WebCore15AffineTransformC1Ev(i9);
 __ZN7WebCore15GraphicsContext6setCTMERKNS_15AffineTransformE(i13, i9);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i13, i4, 0);
 __ZN7WebCore15GraphicsContext4saveEv(i13);
 __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i13, i3);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i6);
 __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i13, i10);
 __ZN7WebCore15GraphicsContext7restoreEv(i13);
 i10 = i3;
 i3 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = i3;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_9BlendModeE(i13, i2, 0, i11, HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + (i3 * 200 & -1) + 64 >> 2] | 0, 0);
 __ZN7WebCore15GraphicsContext7restoreEv(i13);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D15isPointInStrokeEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 56 | 0;
 i8 = i4 + 64 | 0;
 i9 = i4 + 112 | 0;
 if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i12 = i11;
 i11 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP8[i11 + (i12 * 200 & -1) + 120 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 HEAPF32[i5 >> 2] = d2;
 HEAPF32[i5 + 4 >> 2] = d3;
 i13 = i6;
 i14 = i11 + (i12 * 200 & -1) + 72 | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 HEAP32[i13 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
 HEAP32[i13 + 20 >> 2] = HEAP32[i14 + 20 >> 2];
 HEAP32[i13 + 24 >> 2] = HEAP32[i14 + 24 >> 2];
 HEAP32[i13 + 28 >> 2] = HEAP32[i14 + 28 >> 2];
 HEAP32[i13 + 32 >> 2] = HEAP32[i14 + 32 >> 2];
 HEAP32[i13 + 36 >> 2] = HEAP32[i14 + 36 >> 2];
 HEAP32[i13 + 40 >> 2] = HEAP32[i14 + 40 >> 2];
 HEAP32[i13 + 44 >> 2] = HEAP32[i14 + 44 >> 2];
 __ZNK7WebCore15AffineTransform7inverseEv(i8, i6);
 __ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE(i7, i8, i5);
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i7 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = +HEAPF32[i7 + 4 >> 2], HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  i10 = 0;
  STACKTOP = i4;
  return i10 | 0;
 }
 HEAP32[i9 >> 2] = H_BASE + 264;
 HEAP32[i9 + 4 >> 2] = i1;
 i10 = __ZNK7WebCore4Path14strokeContainsEPNS_18StrokeStyleApplierERKNS_10FloatPointE(i1 + 36 | 0, i9 | 0, i7) | 0;
 STACKTOP = i4;
 return i10 | 0;
}
function __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 i3 = i1 + 40 | 0;
 i4 = i1 + 48 | 0;
 i5 = i1 + 40 | 0;
 i6 = i1 + 44 | 0;
 i7 = i1 + 256 | 0;
 if ((i2 | 0) == 0) {
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   i8 = _llvm_uadd_with_overflow_i32(i1 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    i9 = 14;
    break;
   }
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = i10 + (i8 * 200 & -1) | 0;
   if ((i1 | 0) == (HEAP32[i6 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS3_EEvOT_(i3, i11);
   } else {
    __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i10 + (i1 * 200 & -1) | 0, i11);
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i11 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i11;
   if ((i11 | 0) == 0) {
    i9 = 16;
    break;
   }
  }
  if ((i9 | 0) == 14) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i9 | 0) == 16) {
   return;
  }
 } else {
  while (1) {
   i11 = HEAP32[i4 >> 2] | 0;
   i1 = _llvm_uadd_with_overflow_i32(i11 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    i9 = 15;
    break;
   }
   i10 = HEAP32[i5 >> 2] | 0;
   i8 = i10 + (i1 * 200 & -1) | 0;
   if ((i11 | 0) == (HEAP32[i6 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS3_EEvOT_(i3, i8);
   } else {
    __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i10 + (i11 * 200 & -1) | 0, i8);
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i2);
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) == 0) {
    i9 = 17;
    break;
   }
  }
  if ((i9 | 0) == 15) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else if ((i9 | 0) == 17) {
   return;
  }
 }
}
function __ZN7WebCore24CanvasRenderingContext2D11setLineDashERKN3WTF6VectorIfLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i2 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= i4 >>> 0) {
   break;
  }
  d7 = +HEAPF32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2];
  if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | d7 < +0) {
   i8 = 21;
   break;
  } else {
   i6 = i6 + 1 | 0;
  }
 }
 if ((i8 | 0) == 21) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i8 = i1 + 48 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i8 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i1 + 40 | 0;
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_((HEAP32[i4 >> 2] | 0) + (i6 * 200 & -1) + 124 | 0, i2) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) != 0) {
  i3 = _llvm_uadd_with_overflow_i32(HEAP32[i8 >> 2] | 0, -1 | 0) | 0;
  if (!tempRet0) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
  i8 = i3;
  i3 = HEAP32[i4 >> 2] | 0;
  i4 = i3 + (i8 * 200 & -1) + 124 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 + (i8 * 200 & -1) + 132 | 0;
  i9 = HEAP32[i5 >> 2] | 0;
  i10 = i9 + i2 | 0;
  if (i10 >>> 0 > (HEAP32[i3 + (i8 * 200 & -1) + 128 >> 2] | 0) >>> 0) {
   __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i4, i10);
   i11 = HEAP32[i5 >> 2] | 0;
  } else {
   i11 = i9;
  }
  if (i10 >>> 0 < i11 >>> 0) {
   _WTFCrash();
  }
  i9 = HEAP32[i4 >> 2] | 0;
  if ((i2 | 0) != 0) {
   i4 = 0;
   while (1) {
    HEAPF32[i9 + (i4 + i11 << 2) >> 2] = +HEAPF32[i6 + (i4 << 2) >> 2];
    i4 = i4 + 1 | 0;
    if (i4 >>> 0 >= i2 >>> 0) {
     break;
    }
   }
  }
  HEAP32[i5 >> 2] = i10;
 }
 __ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv(i1);
 return;
}
function __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE6resizeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if (i4 >>> 0 >= i2 >>> 0) {
  i5 = HEAP32[i1 >> 2] | 0;
  i6 = i5 + (i4 * 200 & -1) | 0;
  if ((i4 | 0) == (i2 | 0)) {
   HEAP32[i3 >> 2] = i2;
   return;
  }
  i4 = i5 + (i2 * 200 & -1) | 0;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i4 >> 2] >> 2] & 63](i4);
   i4 = i4 + 200 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 if (i6 >>> 0 < i2 >>> 0) {
  i4 = i6 + 1 + (i6 >>> 2) | 0;
  i6 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
  __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i6 >>> 0 > i2 >>> 0 ? i6 : i2);
 }
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i6 + (i2 * 200 & -1) | 0;
 if ((i1 | 0) == (i2 | 0)) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i5 = i6 + (i1 * 200 & -1) | 0;
 while (1) {
  HEAP32[i5 >> 2] = H_BASE + 368;
  HEAP32[i5 + 4 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  __ZN7WebCore11CanvasStyleC1Ej(i5 + 12 | 0, -16777216);
  __ZN7WebCore11CanvasStyleC1Ej(i5 + 20 | 0, -16777216);
  HEAPF32[i5 + 28 >> 2] = +1;
  HEAP32[i5 + 32 >> 2] = 0;
  HEAP32[i5 + 36 >> 2] = 0;
  HEAPF32[i5 + 40 >> 2] = +10;
  _memset(i5 + 44 | 0, 0, 16) | 0;
  HEAPF32[i5 + 60 >> 2] = +1;
  HEAP32[i5 + 64 >> 2] = 2;
  HEAP32[i5 + 68 >> 2] = 0;
  __ZN7WebCore15AffineTransformC1Ev(i5 + 72 | 0);
  HEAP8[i5 + 120 | 0] = 1;
  _memset(i5 + 124 | 0, 0, 16) | 0;
  HEAP8[i5 + 140 | 0] = 1;
  HEAP32[i5 + 144 >> 2] = 0;
  HEAP32[i5 + 148 >> 2] = 0;
  __ZN3WTF6StringC1EPKc(i5 + 152 | 0, H_BASE + 96 | 0);
  __ZN7WebCore4FontC1Ev(i5 + 156 | 0);
  HEAP8[i5 + 196 | 0] = 0;
  i5 = i5 + 200 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   break;
  }
 }
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore15FontDescriptionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i2 + 12 | 0;
   i3 = HEAP32[i4 >> 2] | 0;
   i5 = i2 + 4 | 0;
   if ((i3 | 0) != 0) {
    i6 = HEAP32[i5 >> 2] | 0;
    i7 = i6 + (i3 << 3) | 0;
    i3 = i6;
    while (1) {
     i6 = HEAP32[i3 >> 2] | 0;
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
     i3 = i3 + 8 | 0;
     if ((i3 | 0) == (i7 | 0)) {
      break;
     }
    }
    HEAP32[i4 >> 2] = 0;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = 0;
    HEAP32[i2 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i7 = i1 - 8 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 if ((i1 | 0) != 0) {
  return;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i1 + (HEAP32[i1 - 4 >> 2] << 2) | 0;
 }
 if ((i1 | 0) == (i10 | 0)) {
  i11 = i1;
 } else {
  i7 = i1;
  while (1) {
   i1 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i3 = i1 | 0;
     i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i6 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i3 >> 2] = i6;
      break;
     }
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i10 | 0)) {
    break;
   }
  }
  i11 = HEAP32[i2 >> 2] | 0;
 }
 __ZN3WTF8fastFreeEPv(i11 - 8 | 0);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_4PathEEENS_7IntRectERKT_PNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i5 + 64 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 128 | 0;
 i11 = i5 + 136 | 0;
 i12 = i2 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 72 >> 2] | 0;
 i15 = HEAP32[i13 + 76 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i14;
 HEAP32[i7 + 12 >> 2] = i15;
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i9, i13);
 __ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE(i8, i9, i7);
 i9 = i7;
 i13 = i8;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 __ZN7WebCore4PathC1ERKS0_(i10, i3);
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i10, (HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 72 | 0);
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i6, HEAP32[i12 >> 2] | 0);
 __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i10, i6);
 __ZNK7WebCore4Path16fastBoundingRectEv(i11, i10);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i11);
 i11 = i1;
 i6 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 __ZN7WebCore7IntRect9intersectERKS0_(i1, i7);
 if ((i4 | 0) == 0) {
  __ZN7WebCore4PathD1Ev(i10);
  STACKTOP = i5;
  return;
 }
 i7 = i4;
 i4 = i12 - (HEAP32[i11 + 4 >> 2] | 0) | 0;
 HEAP32[i7 >> 2] = i6 - (HEAP32[i11 >> 2] | 0);
 HEAP32[i7 + 4 >> 2] = i4;
 __ZN7WebCore4PathD1Ev(i10);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i3 = i2 | 0;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = __ZNK7WebCore17HTMLCanvasElement22existingDrawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i5 - 1 | 0;
   if ((i7 | 0) == 0) {
    break;
   } else {
    i8 = i7;
   }
   while (1) {
    __ZN7WebCore15GraphicsContext7restoreEv(i6);
    i8 = i8 - 1 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i8 = i1 + 40 | 0;
 __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE6resizeEj(i8, 1);
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else {
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i3 >> 2] = H_BASE + 368;
  HEAP32[i3 + 4 >> 2] = 0;
  HEAP32[i3 + 8 >> 2] = 0;
  __ZN7WebCore11CanvasStyleC1Ej(i3 + 12 | 0, -16777216);
  __ZN7WebCore11CanvasStyleC1Ej(i3 + 20 | 0, -16777216);
  HEAPF32[i3 + 28 >> 2] = +1;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[i3 + 36 >> 2] = 0;
  HEAPF32[i3 + 40 >> 2] = +10;
  _memset(i3 + 44 | 0, 0, 16) | 0;
  HEAPF32[i3 + 60 >> 2] = +1;
  HEAP32[i3 + 64 >> 2] = 2;
  HEAP32[i3 + 68 >> 2] = 0;
  __ZN7WebCore15AffineTransformC1Ev(i3 + 72 | 0);
  HEAP8[i3 + 120 | 0] = 1;
  _memset(i3 + 124 | 0, 0, 16) | 0;
  HEAP8[i3 + 140 | 0] = 1;
  HEAP32[i3 + 144 >> 2] = 0;
  HEAP32[i3 + 148 >> 2] = 0;
  __ZN3WTF6StringC1EPKc(i3 + 152 | 0, H_BASE + 96 | 0);
  __ZN7WebCore4FontC1Ev(i3 + 156 | 0);
  HEAP8[i3 + 196 | 0] = 0;
  __ZN7WebCore24CanvasRenderingContext2D5StateaSERKS1_(i4, i3) | 0;
  __ZN7WebCore24CanvasRenderingContext2D5StateD2Ev(i3);
  __ZN7WebCore4Path5clearEv(i1 + 36 | 0);
  HEAP32[i1 + 256 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 48 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = _llvm_uadd_with_overflow_i32(i9 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i10;
 i10 = i1 + 40 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP32[i1 + (i11 * 200 & -1) + 56 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
   if (+HEAPF32[i1 + (i11 * 200 & -1) + 52 >> 2] != +0) {
    i12 = i9;
   } else {
    if (__ZNK7WebCore9FloatSize6isZeroEv(i1 + (i11 * 200 & -1) + 44 | 0) | 0) {
     break;
    }
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i13 = _llvm_uadd_with_overflow_i32(i12 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i14 = i13;
   i13 = HEAP32[i10 >> 2] | 0;
   d15 = +-0 - +HEAPF32[i13 + (i14 * 200 & -1) + 48 >> 2];
   HEAPF32[i3 >> 2] = +HEAPF32[i13 + (i14 * 200 & -1) + 44 >> 2];
   HEAPF32[i3 + 4 >> 2] = d15;
   d15 = +HEAPF32[i13 + (i14 * 200 & -1) + 52 >> 2];
   HEAP32[i4 >> 2] = HEAP32[i13 + (i14 * 200 & -1) + 56 >> 2];
   HEAP8[i4 + 4 | 0] = 1;
   __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i7, i3, d15, i4, 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i7, i5, +0, i6, 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj(i1, i2, d3, d4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 4 >> 2] = i11;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i11 + 4 >> 2] | 0;
 }
 HEAP32[i1 + 8 >> 2] = i12;
 HEAPF32[i1 + 12 >> 2] = d3;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = d4;
 i12 = i1 + 24 | 0;
 i11 = i6 << 4 & 16 | i5 & 3 | (i7 & 1) << 5 | (i8 & 1) << 6 | HEAP32[i12 >> 2] & -124;
 HEAP32[i12 >> 2] = i11;
 if ((i9 & 1 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 7 & 128;
 }
 i8 = i11 & -137 | i13;
 HEAP32[i12 >> 2] = i8;
 if ((i9 & 2 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0) << 8 & 256;
 }
 i9 = i8 & -777 | i14;
 HEAP32[i12 >> 2] = i9;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i15 = 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
 if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
  i15 = HEAP32[i14 + 8 >> 2] | 0;
  i16 = i9;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 } else {
  i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i14) | 0;
  i15 = i9;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = i1 | 0;
  i18 = i15;
  HEAP32[i17 >> 2] = i18;
  i19 = i16 & -5;
  HEAP32[i12 >> 2] = i19;
  return;
 }
}
function __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
   HEAP32[i7 >> 2] = i13 >>> 2;
   i8 = __ZN3WTF10fastMallocEj(i13) | 0;
   HEAP32[i11 >> 2] = i8;
   i13 = i10;
   _memcpy(i8 | 0, i13 | 0, i12 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 2 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i9 >> 2] | 0) + (i4 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i4 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN7WebCore24CanvasRenderingContext2D27setGlobalCompositeOperationERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = 2;
 HEAP32[i5 >> 2] = 0;
 if (!(__ZN7WebCore30parseCompositeAndBlendOperatorERKN3WTF6StringERNS_17CompositeOperatorERNS_9BlendModeE(i2, i4, i5) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = _llvm_uadd_with_overflow_i32(i6 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i7;
 i7 = i1 + 40 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i9 + (i8 * 200 & -1) + 64 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i9 + (i8 * 200 & -1) + 68 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i10 = i6;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i10 = HEAP32[i2 >> 2] | 0;
 }
 i6 = _llvm_uadd_with_overflow_i32(i10 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 64 >> 2] = HEAP32[i4 >> 2];
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i2 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 68 >> 2] = HEAP32[i5 >> 2];
 i6 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i6, HEAP32[i4 >> 2] | 0, HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D15createImageDataEffRi(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i2 | 0;
 i7 = i2 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 if (!(d3 != +0 & d4 != +0)) {
  HEAP32[i5 >> 2] = 1;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 do {
  if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0) {
   if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   d8 = +Math_abs(+d4);
   i9 = i6 | 0;
   HEAPF32[i9 >> 2] = +Math_abs(+d3);
   i10 = i6 + 4 | 0;
   HEAPF32[i10 >> 2] = d8;
   if (!(__ZNK7WebCore9FloatSize22isExpressibleAsIntSizeEv(i6) | 0)) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i2;
    return;
   }
   d8 = +Math_ceil(+HEAPF32[i9 >> 2]);
   do {
    if (d8 < +2147483647) {
     if (d8 <= +-2147483648) {
      i11 = -2147483648;
      break;
     }
     i11 = ~~d8;
    } else {
     i11 = 2147483647;
    }
   } while (0);
   d8 = +Math_ceil(+HEAPF32[i10 >> 2]);
   do {
    if (d8 < +2147483647) {
     if (d8 <= +-2147483648) {
      i12 = -2147483648;
      break;
     }
     i12 = ~~d8;
    } else {
     i12 = 2147483647;
    }
   } while (0);
   i10 = i7 | 0;
   HEAP32[i10 >> 2] = i11;
   i9 = i7 + 4 | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i11 | 0) < 1) {
    HEAP32[i10 >> 2] = 1;
   }
   if ((i12 | 0) < 1) {
    HEAP32[i9 >> 2] = 1;
   }
   __ZN7WebCoreL20createEmptyImageDataERKNS_7IntSizeE(i1, i7);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 i2 = i1 + 180 | 0;
 if ((HEAP8[i1 + 196 | 0] & 1) != 0) {
  i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 7](i3, i1 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore10FontGlyphsD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15FontDescriptionD2Ev(i1 + 156 | 0);
 i3 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 132 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 124 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 128 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore11CanvasStyleD1Ev(i1 + 20 | 0);
 __ZN7WebCore11CanvasStyleD1Ev(i1 + 12 | 0);
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
function __ZN7WebCore24CanvasRenderingContext2D5StateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 i2 = i1 + 180 | 0;
 if ((HEAP8[i1 + 196 | 0] & 1) != 0) {
  i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] & 7](i3, i1 | 0);
 }
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore10FontGlyphsD2Ev(i3);
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15FontDescriptionD2Ev(i1 + 156 | 0);
 i3 = HEAP32[i1 + 152 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 132 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 124 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 128 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore11CanvasStyleD1Ev(i1 + 20 | 0);
 __ZN7WebCore11CanvasStyleD1Ev(i1 + 12 | 0);
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
function __ZN7WebCore24CanvasRenderingContext2D20createRadialGradientEffffffRi(i1, i2, d3, d4, d5, d6, d7, d8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 do {
  if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0) {
   if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d8, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (d5 < +0 | d8 < +0) {
    HEAP32[i9 >> 2] = 1;
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i10;
    return;
   }
   HEAPF32[i11 >> 2] = d3;
   HEAPF32[i11 + 4 >> 2] = d4;
   HEAPF32[i12 >> 2] = d6;
   HEAPF32[i12 + 4 >> 2] = d7;
   i13 = __ZN3WTF10fastMallocEj(12) | 0;
   i14 = i13;
   __ZN7WebCore14CanvasGradientC1ERKNS_10FloatPointEfS3_f(i14, i11, d5, i12, d8);
   if ((HEAP8[i2 + 261 | 0] & 1) != 0) {
    HEAP8[i13 + 8 | 0] = 1;
   }
   HEAP32[i1 >> 2] = i14;
   STACKTOP = i10;
   return;
  }
 } while (0);
 HEAP32[i9 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i10;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D18rectContainsCanvasERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i11 = i2;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i12;
 HEAP32[i5 + 4 >> 2] = i13;
 d14 = (HEAP32[tempDoublePtr >> 2] = i12, +HEAPF32[tempDoublePtr >> 2]);
 d15 = d14 + +HEAPF32[i2 + 8 >> 2];
 d16 = +HEAPF32[i2 + 4 >> 2];
 HEAPF32[i4 + 8 >> 2] = d15;
 HEAPF32[i6 + 12 >> 2] = d16;
 d17 = d16 + +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i4 + 16 >> 2] = d15;
 HEAPF32[i6 + 20 >> 2] = d17;
 HEAPF32[i4 + 24 >> 2] = d14;
 HEAPF32[i6 + 28 >> 2] = d17;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 d17 = +(HEAP32[i4 + 72 >> 2] | 0);
 d14 = +(HEAP32[i4 + 76 >> 2] | 0);
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAPF32[i7 + 8 >> 2] = d17;
 HEAPF32[i9 + 12 >> 2] = +0;
 HEAPF32[i7 + 16 >> 2] = d17;
 HEAPF32[i9 + 20 >> 2] = d14;
 HEAPF32[i7 + 24 >> 2] = +0;
 HEAPF32[i9 + 28 >> 2] = d14;
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i10, (HEAP32[i1 + 40 >> 2] | 0) + (i7 * 200 & -1) + 72 | 0, i6);
  i6 = __ZNK7WebCore9FloatQuad12containsQuadERKS0_(i10, i9) | 0;
  STACKTOP = i3;
  return i6 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_17HTMLCanvasElementERKN3WTF6StringERi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i2 | 0;
 i7 = i2 + 8 | 0;
 i8 = i2 + 16 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
 do {
  if ((HEAP32[i3 + 72 >> 2] | 0) != 0) {
   if ((HEAP32[i3 + 76 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore13CanvasPattern19parseRepetitionTypeERKN3WTF6StringERbS5_Ri(i4, i6, i7, i5);
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i2;
    return;
   }
   i9 = __ZNK7WebCore17HTMLCanvasElement11copiedImageEv(i3) | 0;
   i10 = i8 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i11 = i9 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   __ZN7WebCore13CanvasPattern6createEN3WTF10PassRefPtrINS_5ImageEEEbbb(i1, i8, (HEAP8[i6] & 1) != 0, (HEAP8[i7] & 1) != 0, (HEAP8[i3 + 108 | 0] & 1) != 0);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i10 = i11 + 4 | 0;
   i11 = i10 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    STACKTOP = i2;
    return;
   }
   i9 = i10 - 4 | 0;
   if ((i9 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i5 >> 2] = 11;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2DC2EPNS_17HTMLCanvasElementEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore22CanvasRenderingContextC2EPNS_17HTMLCanvasElementE(i1 | 0, i2);
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathC1Ev(i1 + 36 | 0);
 HEAP32[i1 >> 2] = H_BASE + 296;
 HEAP32[i2 >> 2] = H_BASE + 336;
 i2 = i1 + 56 | 0;
 HEAP32[i1 + 40 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = 1;
 HEAP32[i1 + 48 >> 2] = 1;
 if ((i2 | 0) == 0) {
  i5 = i1 + 256 | 0;
  HEAP32[i5 >> 2] = 0;
  i6 = i1 + 260 | 0;
  i7 = i3 & 1;
  HEAP8[i6] = i7;
  i8 = i1 + 261 | 0;
  i9 = i4 & 1;
  HEAP8[i8] = i9;
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 368;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 68 | 0, -16777216);
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 76 | 0, -16777216);
 HEAPF32[i1 + 84 >> 2] = +1;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAPF32[i1 + 96 >> 2] = +10;
 _memset(i1 + 100 | 0, 0, 16) | 0;
 HEAPF32[i1 + 116 >> 2] = +1;
 HEAP32[i1 + 120 >> 2] = 2;
 HEAP32[i1 + 124 >> 2] = 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 128 | 0);
 HEAP8[i1 + 176 | 0] = 1;
 _memset(i1 + 180 | 0, 0, 16) | 0;
 HEAP8[i1 + 196 | 0] = 1;
 HEAP32[i1 + 200 >> 2] = 0;
 HEAP32[i1 + 204 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 208 | 0, H_BASE + 96 | 0);
 __ZN7WebCore4FontC1Ev(i1 + 212 | 0);
 HEAP8[i1 + 252 | 0] = 0;
 i5 = i1 + 256 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 260 | 0;
 i7 = i3 & 1;
 HEAP8[i6] = i7;
 i8 = i1 + 261 | 0;
 i9 = i4 & 1;
 HEAP8[i8] = i9;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2DC1EPNS_17HTMLCanvasElementEbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore22CanvasRenderingContextC2EPNS_17HTMLCanvasElementE(i1 | 0, i2);
 i2 = i1 + 32 | 0;
 HEAP32[i2 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathC1Ev(i1 + 36 | 0);
 HEAP32[i1 >> 2] = H_BASE + 296;
 HEAP32[i2 >> 2] = H_BASE + 336;
 i2 = i1 + 56 | 0;
 HEAP32[i1 + 40 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = 1;
 HEAP32[i1 + 48 >> 2] = 1;
 if ((i2 | 0) == 0) {
  i5 = i1 + 256 | 0;
  HEAP32[i5 >> 2] = 0;
  i6 = i1 + 260 | 0;
  i7 = i3 & 1;
  HEAP8[i6] = i7;
  i8 = i1 + 261 | 0;
  i9 = i4 & 1;
  HEAP8[i8] = i9;
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 368;
 HEAP32[i1 + 60 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 68 | 0, -16777216);
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 76 | 0, -16777216);
 HEAPF32[i1 + 84 >> 2] = +1;
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAPF32[i1 + 96 >> 2] = +10;
 _memset(i1 + 100 | 0, 0, 16) | 0;
 HEAPF32[i1 + 116 >> 2] = +1;
 HEAP32[i1 + 120 >> 2] = 2;
 HEAP32[i1 + 124 >> 2] = 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 128 | 0);
 HEAP8[i1 + 176 | 0] = 1;
 _memset(i1 + 180 | 0, 0, 16) | 0;
 HEAP8[i1 + 196 | 0] = 1;
 HEAP32[i1 + 200 >> 2] = 0;
 HEAP32[i1 + 204 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 208 | 0, H_BASE + 96 | 0);
 __ZN7WebCore4FontC1Ev(i1 + 212 | 0);
 HEAP8[i1 + 252 | 0] = 0;
 i5 = i1 + 256 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 260 | 0;
 i7 = i3 & 1;
 HEAP8[i6] = i7;
 i8 = i1 + 261 | 0;
 i9 = i4 & 1;
 HEAP8[i8] = i9;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffRi(i1, i2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, i16 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 24 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i7 >> 2] = 17;
  STACKTOP = i8;
  return;
 }
 i12 = HEAP32[i2 + 64 >> 2] | 0;
 i13 = i12;
 if ((i12 | 0) == 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  d14 = +0;
  d15 = +0;
 } else {
  i12 = i2 + 32 | 0;
  if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
   i16 = i12 | 0;
  } else {
   i16 = HEAP32[i12 >> 2] | 0;
  }
  __ZN7WebCore11CachedImage20imageSizeForRendererEPKNS_12RenderObjectEfNS0_8SizeTypeE(i9, i13, HEAP32[i16 >> 2] | 0, +1, 0);
  d14 = +(HEAP32[i9 >> 2] | 0);
  d15 = +(HEAP32[i9 + 4 >> 2] | 0);
 }
 HEAPF32[i10 >> 2] = +0;
 HEAPF32[i10 + 4 >> 2] = +0;
 HEAPF32[i10 + 8 >> 2] = d14;
 HEAPF32[i10 + 12 >> 2] = d15;
 HEAPF32[i11 >> 2] = d3;
 HEAPF32[i11 + 4 >> 2] = d4;
 HEAPF32[i11 + 8 >> 2] = d5;
 HEAPF32[i11 + 12 >> 2] = d6;
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i16 = i9;
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi(i1, i2, i10, i11, i9 + (i16 * 200 & -1) + 64 | 0, i9 + (i16 * 200 & -1) + 68 | 0, i7);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore10FontGlyphsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 __ZN7WebCore10FontGlyphs15releaseFontDataEv(i1);
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 12 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 4 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i7 = i4 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i1 + 16 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 48 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 i8 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i8 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 4 >> 2] | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 __ZN7WebCore11CanvasStyle16createFromStringERKN3WTF6StringEPNS_8DocumentE(i4, i2, HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i4);
 __ZN7WebCore11CanvasStyleD1Ev(i4);
 i4 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i5 + (i4 * 200 & -1) + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 48 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 i8 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i8 >> 2] | 0, HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 8 >> 2] | 0) | 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 __ZN7WebCore11CanvasStyle16createFromStringERKN3WTF6StringEPNS_8DocumentE(i4, i2, HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i4);
 __ZN7WebCore11CanvasStyleD1Ev(i4);
 i4 = _llvm_uadd_with_overflow_i32(HEAP32[i5 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i5 + (i4 * 200 & -1) + 8 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i7;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS3_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 200 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 200 & -1) * 200 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 200 & -1) | 0;
   __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 200 & -1) | 0;
 __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2DD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 296;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = H_BASE + 336;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 40 | 0;
 if ((i5 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i5 * 200 & -1) | 0;
  i5 = i7;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i5 >> 2] >> 2] & 63](i5);
   i5 = i5 + 200 | 0;
   if ((i5 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if (!((i1 + 56 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i3 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 36 | 0);
 HEAP32[i2 >> 2] = H_BASE + 400;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i8 = i6;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i5 = i6 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i5 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2DD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 296;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = H_BASE + 336;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 40 | 0;
 if ((i5 | 0) != 0) {
  i7 = HEAP32[i6 >> 2] | 0;
  i8 = i7 + (i5 * 200 & -1) | 0;
  i5 = i7;
  while (1) {
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i5 >> 2] >> 2] & 63](i5);
   i5 = i5 + 200 | 0;
   if ((i5 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i6 >> 2] | 0;
 if (!((i1 + 56 | 0) == (i4 | 0) | (i4 | 0) == 0)) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 HEAP32[i3 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 36 | 0);
 HEAP32[i2 >> 2] = H_BASE + 400;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i6 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i8 = i6;
    do {
     if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
      i5 = i6 | 0;
      i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i6);
       break;
      } else {
       HEAP32[i5 >> 2] = i7;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_9FloatRectEEENS_7IntRectERKT_PNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 88 | 0;
 i11 = HEAP32[i2 + 8 >> 2] | 0;
 i12 = HEAP32[i11 + 72 >> 2] | 0;
 i13 = HEAP32[i11 + 76 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i12;
 HEAP32[i6 + 12 >> 2] = i13;
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i8, i11);
 __ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE(i7, i8, i6);
 i8 = i6;
 i11 = i7;
 HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 __ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_9FloatRectE(i9, i2, i3);
 __ZNK7WebCore4Path16fastBoundingRectEv(i10, i9);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i10);
 i10 = i1;
 i3 = HEAP32[i10 >> 2] | 0;
 i2 = HEAP32[i10 + 4 >> 2] | 0;
 __ZN7WebCore7IntRect9intersectERKS0_(i1, i6);
 if ((i4 | 0) == 0) {
  __ZN7WebCore4PathD1Ev(i9);
  STACKTOP = i5;
  return;
 }
 i6 = i4;
 i4 = i2 - (HEAP32[i10 + 4 >> 2] | 0) | 0;
 HEAP32[i6 >> 2] = i3 - (HEAP32[i10 >> 2] | 0);
 HEAP32[i6 + 4 >> 2] = i4;
 __ZN7WebCore4PathD1Ev(i9);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D7restoreEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i1 + 256 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = i5 - 1;
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 48 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 < 2 >>> 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 36 | 0;
 i7 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i1 + 40 | 0;
 __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i6, (HEAP32[i4 >> 2] | 0) + (i7 * 200 & -1) + 72 | 0);
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = i7 - 1 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) + (i8 * 200 & -1) | 0;
 FUNCTION_TABLE_vi[HEAP32[HEAP32[i7 >> 2] >> 2] & 63](i7);
 HEAP32[i5 >> 2] = i8;
 i5 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZNK7WebCore15AffineTransform7inverseEv(i3, (HEAP32[i4 >> 2] | 0) + (i5 * 200 & -1) + 72 | 0);
 __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i6, i3);
 i3 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i3);
 STACKTOP = i2;
 return;
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
function runPostSets() {
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 2;
}
function __ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 * 200 & -1) | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 21474836 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 200 & -1) | 0;
    HEAP32[i3 >> 2] = (i8 >>> 0) / 200 & -1;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 16 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 1;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   __ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_(i2, i6);
   FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 63](i6);
   i10 = i6 + 200 | 0;
   if ((i10 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i10;
    i2 = i2 + 200 | 0;
   }
  }
 }
 if ((i1 + 16 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D20createLinearGradientEffffRi(i1, i2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 do {
  if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0) {
   if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
    break;
   }
   HEAPF32[i9 >> 2] = d3;
   HEAPF32[i9 + 4 >> 2] = d4;
   HEAPF32[i10 >> 2] = d5;
   HEAPF32[i10 + 4 >> 2] = d6;
   i11 = __ZN3WTF10fastMallocEj(12) | 0;
   i12 = i11;
   __ZN7WebCore14CanvasGradientC1ERKNS_10FloatPointES3_(i12, i9, i10);
   if ((HEAP8[i2 + 261 | 0] & 1) != 0) {
    HEAP8[i11 + 8 | 0] = 1;
   }
   HEAP32[i1 >> 2] = i12;
   STACKTOP = i8;
   return;
  }
 } while (0);
 HEAP32[i7 >> 2] = 9;
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i8;
 return;
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
function __ZN7WebCore24CanvasRenderingContext2D11setLineJoinERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore13parseLineJoinERKN3WTF6StringERNS_8LineJoinE(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 36 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i2 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 * 200 & -1) + 36 >> 2] = HEAP32[i4 >> 2];
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15GraphicsContext11setLineJoinENS_8LineJoinE(i2, HEAP32[i4 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D10setLineCapERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore12parseLineCapERKN3WTF6StringERNS_7LineCapE(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 32 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i2 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 * 200 & -1) + 32 >> 2] = HEAP32[i4 >> 2];
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15GraphicsContext10setLineCapENS_7LineCapE(i2, HEAP32[i4 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE(i1, i2, d3, d4, d5, d6, d7, d8, d9, d10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 d9 = +d9;
 d10 = +d10;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 32 | 0;
 i17 = i12 + 48 | 0;
 HEAP32[i14 >> 2] = 0;
 i18 = (__ZN7WebCore30parseCompositeAndBlendOperatorERKN3WTF6StringERNS_17CompositeOperatorERNS_9BlendModeE(i11, i13, i14) | 0) ^ 1;
 if ((HEAP32[i14 >> 2] | 0) != 0 | i18) {
  HEAP32[i13 >> 2] = 2;
 }
 HEAPF32[i15 >> 2] = d3;
 HEAPF32[i15 + 4 >> 2] = d4;
 HEAPF32[i15 + 8 >> 2] = d5;
 HEAPF32[i15 + 12 >> 2] = d6;
 HEAPF32[i16 >> 2] = d7;
 HEAPF32[i16 + 4 >> 2] = d8;
 HEAPF32[i16 + 8 >> 2] = d9;
 HEAPF32[i16 + 12 >> 2] = d10;
 HEAP32[i17 >> 2] = 0;
 i18 = i12 + 56 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi(i1, i2, i15, i16, i13, i17, i18);
 STACKTOP = i12;
 return;
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
function __ZN7WebCore24CanvasRenderingContext2D14setShadowColorERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore24parseColorOrCurrentColorERjRKN3WTF6StringEPNS_17HTMLCanvasElementE(i4, i2, HEAP32[i1 + 8 >> 2] | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 56 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i2 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 * 200 & -1) + 56 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12setLineWidthEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (!(((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0 & d2 > +0)) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 28 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 28 >> 2] = d2;
 i3 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i3, d2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D13setMiterLimitEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (!(((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 < 2139095040 >>> 0 & d2 > +0)) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 40 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 40 >> 2] = d2;
 i3 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore15GraphicsContext13setMiterLimitEf(i3, d2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffffffRi(i1, i2, d3, d4, d5, d6, d7, d8, d9, d10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 d9 = +d9;
 d10 = +d10;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = i12 | 0;
 i14 = i12 + 16 | 0;
 HEAPF32[i13 >> 2] = d3;
 HEAPF32[i13 + 4 >> 2] = d4;
 HEAPF32[i13 + 8 >> 2] = d5;
 HEAPF32[i13 + 12 >> 2] = d6;
 HEAPF32[i14 >> 2] = d7;
 HEAPF32[i14 + 4 >> 2] = d8;
 HEAPF32[i14 + 8 >> 2] = d9;
 HEAPF32[i14 + 12 >> 2] = d10;
 i15 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  i16 = i15;
  i15 = HEAP32[i1 + 40 >> 2] | 0;
  __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi(i1, i2, i13, i14, i15 + (i16 * 200 & -1) + 64 | 0, i15 + (i16 * 200 & -1) + 68 | 0, i11);
  STACKTOP = i12;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D4clipERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + (i4 * 200 & -1) + 120 | 0] & 1) == 0) {
  return;
 }
 i4 = i2 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 16 | 0) | 0) {
   i5 = 0;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 8 | 0) | 0) {
    i5 = 1;
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i4 = i1 + 36 | 0;
 __ZN7WebCore15GraphicsContext10canvasClipERKNS_4PathENS_8WindRuleE(i3, i4, i5);
 if ((HEAP8[i1 + 261 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore4Path5clearEv(i4);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D17inflateStrokeRectERNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0;
 if (!(HEAP8[H_BASE + 472 | 0] | 0)) {
  HEAPF32[H_BASE + 216 >> 2] = 1.4142135381698608;
  HEAP8[H_BASE + 472 | 0] = 1;
 }
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = i3;
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 d5 = +HEAPF32[i3 + (i4 * 200 & -1) + 28 >> 2] * +.5;
 do {
  if ((HEAP32[i3 + (i4 * 200 & -1) + 36 >> 2] | 0) == 0) {
   d6 = d5 * +HEAPF32[i3 + (i4 * 200 & -1) + 40 >> 2];
  } else {
   if ((HEAP32[i3 + (i4 * 200 & -1) + 32 >> 2] | 0) != 2) {
    d6 = d5;
    break;
   }
   d6 = d5 * +HEAPF32[H_BASE + 216 >> 2];
  }
 } while (0);
 i4 = i2 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] - d6;
 i4 = i2 + 8 | 0;
 HEAPF32[i4 >> 2] = d6 + (d6 + +HEAPF32[i4 >> 2]);
 i4 = i2 + 4 | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i4 >> 2] - d6;
 i4 = i2 + 12 | 0;
 HEAPF32[i4 >> 2] = d6 + (d6 + +HEAPF32[i4 >> 2]);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D30setWebkitImageSmoothingEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i2 & 1;
 i4 = i1 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((i3 | 0) == (HEAP8[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 140 | 0] & 1 | 0)) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP8[(HEAP32[i7 >> 2] | 0) + (i4 * 200 & -1) + 140 | 0] = i2 & 1;
 i2 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i2, i3 ^ 1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D15setTextBaselineERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore17parseTextBaselineERKN3WTF6StringERNS_12TextBaselineE(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 148 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i2 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 * 200 & -1) + 148 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12setTextAlignERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (!(__ZN7WebCore14parseTextAlignERKN3WTF6StringERNS_9TextAlignE(i2, i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 48 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i1 + 40 | 0;
 if ((HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 * 200 & -1) + 144 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i2 = _llvm_uadd_with_overflow_i32(i8 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 * 200 & -1) + 144 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D17setWebkitLineDashERKN3WTF6VectorIfLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = i2 | 0;
 i5 = 0;
 while (1) {
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
  d6 = +HEAPF32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2];
  if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | d6 < +0) {
   i7 = 11;
   break;
  } else {
   i5 = i5 + 1 | 0;
  }
 }
 if ((i7 | 0) == 11) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) != 0) {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
 }
 i7 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_((HEAP32[i1 + 40 >> 2] | 0) + (i7 * 200 & -1) + 124 | 0, i2) | 0;
 __ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D19didDrawEntireCanvasEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 + 8 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i5, (HEAP32[i6 >> 2] | 0) + 72 | 0);
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 if ((__ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i6 >> 2] | 0) | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + (i5 * 200 & -1) + 120 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(HEAP32[i6 >> 2] | 0, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setGlobalAlphaEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (!(d2 >= +0 & d2 <= +1)) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 60 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 60 >> 2] = d2;
 i3 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore15GraphicsContext8setAlphaEf(i3, d2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffRi(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  STACKTOP = i6;
  return;
 }
 i8 = HEAP32[i2 + 64 >> 2] | 0;
 i9 = i8;
 if ((i8 | 0) == 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  d10 = +0;
  d11 = +0;
 } else {
  i8 = i2 + 32 | 0;
  if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
   i12 = i8 | 0;
  } else {
   i12 = HEAP32[i8 >> 2] | 0;
  }
  __ZN7WebCore11CachedImage20imageSizeForRendererEPKNS_12RenderObjectEfNS0_8SizeTypeE(i7, i9, HEAP32[i12 >> 2] | 0, +1, 0);
  d10 = +(HEAP32[i7 >> 2] | 0);
  d11 = +(HEAP32[i7 + 4 >> 2] | 0);
 }
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffRi(i1, i2, d3, d4, d10, d11, i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D23setWebkitLineDashOffsetEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 136 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 136 >> 2] = d2;
 __ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D17setLineDashOffsetEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 136 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 136 >> 2] = d2;
 __ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D13setShadowBlurEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 > 2139095039 >>> 0 | d2 < +0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 52 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 52 >> 2] = d2;
 __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1);
 return;
}
function __ZN7WebCore22CanvasRenderingContextD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i9 = i1;
  __ZN3WTF8fastFreeEPv(i9);
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 i9 = i1;
 __ZN3WTF8fastFreeEPv(i9);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetYEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 48 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 48 >> 2] = d2;
 __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetXEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i1 + 40 | 0;
 if (+HEAPF32[(HEAP32[i6 >> 2] | 0) + (i5 * 200 & -1) + 44 >> 2] == d2) {
  return;
 }
 if ((HEAP32[i1 + 256 >> 2] | 0) == 0) {
  i7 = i4;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv(i1);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAPF32[(HEAP32[i6 >> 2] | 0) + (i3 * 200 & -1) + 44 >> 2] = d2;
 __ZN7WebCore24CanvasRenderingContext2D11applyShadowEv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D10accessFontEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore8Document19updateStyleIfNeededEv(HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i5 = i4;
 i4 = i1 + 40 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((HEAP8[i6 + (i5 * 200 & -1) + 196 | 0] & 1) == 0) {
  __ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE(i1, i6 + (i5 * 200 & -1) + 152 | 0);
  i7 = HEAP32[i2 >> 2] | 0;
 } else {
  i7 = i3;
 }
 i3 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (tempRet0) {
  return (HEAP32[i4 >> 2] | 0) + (i3 * 200 & -1) + 156 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEfffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i9;
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i9 + (i10 * 200 & -1) + 16 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle17isEquivalentCMYKAEfffff(i9 + (i10 * 200 & -1) + 12 | 0, d2, d3, d4, d5, d6) | 0)) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Efffff(i8, d2, d3, d4, d5, d6);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i8);
 __ZN7WebCore11CanvasStyleD1Ev(i8);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, d6 = +0, d7 = +0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 d6 = +(HEAP32[i1 + 72 >> 2] | 0);
 d7 = +(HEAP32[i1 + 76 >> 2] | 0);
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i3 + 4 >> 2] = +0;
 HEAPF32[i3 + 8 >> 2] = d6;
 HEAPF32[i3 + 12 >> 2] = d7;
 i8 = __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(i1) | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15GraphicsContext4saveEv(i8);
 __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i4, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore15GraphicsContext6setCTMERKNS_15AffineTransformE(i8, i4);
 __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i8, i3);
 __ZN7WebCore15GraphicsContext7restoreEv(i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorEfffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i10 = i9;
 i9 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i9 + (i10 * 200 & -1) + 24 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle17isEquivalentCMYKAEfffff(i9 + (i10 * 200 & -1) + 20 | 0, d2, d3, d4, d5, d6) | 0)) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Efffff(i8, d2, d3, d4, d5, d6);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i8);
 __ZN7WebCore11CanvasStyleD1Ev(i8);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D23createCompositingBufferERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 31](i2) | 0;
 i2 = i3 + 8 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 HEAP8[i5] = 0;
 i3 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i3;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i2, i6, +1, 0, i7 ? 2 : 0, i5);
 i7 = i1 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i2);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22CanvasRenderingContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 400;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 16 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
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
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i8;
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i8 + (i9 * 200 & -1) + 16 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i8 + (i9 * 200 & -1) + 12 | 0, d2, d3, d4, d5) | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Effff(i7, d2, d3, d4, d5);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i7);
 __ZN7WebCore11CanvasStyleD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = i8;
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i8 + (i9 * 200 & -1) + 24 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i8 + (i9 * 200 & -1) + 20 | 0, d2, d3, d4, d5) | 0)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Effff(i7, d2, d3, d4, d5);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i7);
 __ZN7WebCore11CanvasStyleD1Ev(i7);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 __ZN7WebCore4PathC1Ev(i6);
 __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i6, i3);
 __ZN7WebCore4PathC1ERKS0_(i1, i6);
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1, (HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 72 | 0);
  __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i5, HEAP32[i2 + 8 >> 2] | 0);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1, i5);
  __ZN7WebCore4PathD1Ev(i6);
  STACKTOP = i4;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D5State15fontsNeedUpdateEPNS_12FontSelectorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZNK7WebCore4Font6updateEN3WTF10PassRefPtrINS_12FontSelectorEEE(i1 + 156 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i4 + 4 | 0;
 i4 = i5 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i6;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i6 + (i7 * 200 & -1) + 16 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i6 + (i7 * 200 & -1) + 12 | 0, d2, d2, d2, d3) | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Eff(i5, d2, d3);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i5);
 __ZN7WebCore11CanvasStyleD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 12 | 0, -16777216);
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 20 | 0, -16777216);
 HEAPF32[i1 + 28 >> 2] = +1;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAPF32[i1 + 40 >> 2] = +10;
 _memset(i1 + 44 | 0, 0, 16) | 0;
 HEAPF32[i1 + 60 >> 2] = +1;
 HEAP32[i1 + 64 >> 2] = 2;
 HEAP32[i1 + 68 >> 2] = 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 72 | 0);
 HEAP8[i1 + 120 | 0] = 1;
 _memset(i1 + 124 | 0, 0, 16) | 0;
 HEAP8[i1 + 140 | 0] = 1;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 152 | 0, H_BASE + 96 | 0);
 __ZN7WebCore4FontC1Ev(i1 + 156 | 0);
 HEAP8[i1 + 196 | 0] = 0;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 368;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 12 | 0, -16777216);
 __ZN7WebCore11CanvasStyleC1Ej(i1 + 20 | 0, -16777216);
 HEAPF32[i1 + 28 >> 2] = +1;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAPF32[i1 + 40 >> 2] = +10;
 _memset(i1 + 44 | 0, 0, 16) | 0;
 HEAPF32[i1 + 60 >> 2] = +1;
 HEAP32[i1 + 64 >> 2] = 2;
 HEAP32[i1 + 68 >> 2] = 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 72 | 0);
 HEAP8[i1 + 120 | 0] = 1;
 _memset(i1 + 124 | 0, 0, 16) | 0;
 HEAP8[i1 + 140 | 0] = 1;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i1 + 152 | 0, H_BASE + 96 | 0);
 __ZN7WebCore4FontC1Ev(i1 + 156 | 0);
 HEAP8[i1 + 196 | 0] = 0;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i7 = i6;
 i6 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i6 + (i7 * 200 & -1) + 24 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i6 + (i7 * 200 & -1) + 20 | 0, d2, d2, d2, d3) | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Eff(i5, d2, d3);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i5);
 __ZN7WebCore11CanvasStyleD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i5;
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i5 + (i6 * 200 & -1) + 16 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i5 + (i6 * 200 & -1) + 12 | 0, d2, d2, d2, +1) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Eff(i4, d2, +1);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i4);
 __ZN7WebCore11CanvasStyleD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
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
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = i5;
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((HEAP32[i5 + (i6 * 200 & -1) + 24 >> 2] | 0) != 6) {
   if (!(__ZNK7WebCore11CanvasStyle16isEquivalentRGBAEffff(i5 + (i6 * 200 & -1) + 20 | 0, d2, d2, d2, +1) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN7WebCore11CanvasStyleC1Eff(i4, d2, +1);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i4);
 __ZN7WebCore11CanvasStyleD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffRi(i1, i2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 d11 = +(HEAP32[i2 + 72 >> 2] | 0);
 d12 = +(HEAP32[i2 + 76 >> 2] | 0);
 HEAPF32[i9 >> 2] = +0;
 HEAPF32[i9 + 4 >> 2] = +0;
 HEAPF32[i9 + 8 >> 2] = d11;
 HEAPF32[i9 + 12 >> 2] = d12;
 HEAPF32[i10 >> 2] = d3;
 HEAPF32[i10 + 4 >> 2] = d4;
 HEAPF32[i10 + 8 >> 2] = d5;
 HEAPF32[i10 + 12 >> 2] = d6;
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementERKNS_9FloatRectES5_Ri(i1, i2, i9, i10, i7);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffffffRi(i1, i2, d3, d4, d5, d6, d7, d8, d9, d10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 d9 = +d9;
 d10 = +d10;
 i11 = i11 | 0;
 var i12 = 0, i13 = 0, i14 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = i12 | 0;
 i14 = i12 + 16 | 0;
 HEAPF32[i13 >> 2] = d3;
 HEAPF32[i13 + 4 >> 2] = d4;
 HEAPF32[i13 + 8 >> 2] = d5;
 HEAPF32[i13 + 12 >> 2] = d6;
 HEAPF32[i14 >> 2] = d7;
 HEAPF32[i14 + 4 >> 2] = d8;
 HEAPF32[i14 + 8 >> 2] = d9;
 HEAPF32[i14 + 12 >> 2] = d10;
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementERKNS_9FloatRectES5_Ri(i1, i2, i13, i14, i11);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffRi(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 d9 = +(HEAP32[i2 + 72 >> 2] | 0);
 d10 = +(HEAP32[i2 + 76 >> 2] | 0);
 HEAPF32[i7 >> 2] = +0;
 HEAPF32[i7 + 4 >> 2] = +0;
 HEAPF32[i7 + 8 >> 2] = d9;
 HEAPF32[i7 + 12 >> 2] = d10;
 HEAPF32[i8 >> 2] = d3;
 HEAPF32[i8 + 4 >> 2] = d4;
 HEAPF32[i8 + 8 >> 2] = d9;
 HEAPF32[i8 + 12 >> 2] = d10;
 __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementERKNS_9FloatRectES5_Ri(i1, i2, i7, i8, i5);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_4PathE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore4PathC1ERKS0_(i1, i3);
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1, (HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 72 | 0);
  __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i5, HEAP32[i2 + 8 >> 2] | 0);
  __ZN7WebCore4Path9transformERKNS_15AffineTransformE(i1, i5);
  STACKTOP = i4;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringEf(i1, d2, d3, d4, i5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 if (!(__ZN7WebCore24parseColorOrCurrentColorERjRKN3WTF6StringEPNS_17HTMLCanvasElementE(i8, i5, HEAP32[i1 + 8 >> 2] | 0) | 0)) {
  STACKTOP = i7;
  return;
 }
 HEAPF32[i9 >> 2] = d2;
 HEAPF32[i9 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i9, d4, __ZN7WebCore22colorWithOverrideAlphaEjf(HEAP32[i8 >> 2] | 0, d6) | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_Ri(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  i7 = i6;
  i6 = HEAP32[i1 + 40 >> 2] | 0;
  __ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi(i1, i2, i3, i4, i6 + (i7 * 200 & -1) + 64 | 0, i6 + (i7 * 200 & -1) + 68 | 0, i5);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringE(i1, d2, d3, d4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if (!(__ZN7WebCore24parseColorOrCurrentColorERjRKN3WTF6StringEPNS_17HTMLCanvasElementE(i7, i5, HEAP32[i1 + 8 >> 2] | 0) | 0)) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i8 >> 2] = d2;
 HEAPF32[i8 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i8, d4, HEAP32[i7 >> 2] | 0);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D17shouldDrawShadowsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = i2;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP32[i2 + (i3 * 200 & -1) + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (+HEAPF32[i2 + (i3 * 200 & -1) + 52 >> 2] != +0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (__ZNK7WebCore9FloatSize6isZeroEv(i2 + (i3 * 200 & -1) + 44 | 0) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore24CanvasRenderingContext2D15createImageDataEN3WTF10PassRefPtrINS_9ImageDataEEERi(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i2 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i4 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i2;
  return;
 } else {
  i4 = i6 + 4 | 0;
  i6 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i6;
  __ZN7WebCoreL20createEmptyImageDataERKNS_7IntSizeE(i1, i5);
  STACKTOP = i2;
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
function __ZNK7WebCore24CanvasRenderingContext2D11shadowColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  HEAP32[i4 >> 2] = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + (i5 * 200 & -1) + 56 >> 2];
  HEAP8[i4 + 4 | 0] = 1;
  __ZNK7WebCore5Color10serializedEv(i1, i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEffffffff(i1, d2, d3, d4, d5, d6, d7, d8, d9) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 d9 = +d9;
 var i10 = 0, i11 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10 | 0;
 HEAPF32[i11 >> 2] = d2;
 HEAPF32[i11 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i11, d4, __ZN7WebCore17makeRGBAFromCMYKAEfffff(d5, d6, d7, d8, d9) | 0);
 STACKTOP = i10;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D16unwindStateStackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore17HTMLCanvasElement22existingDrawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i2 - 1 | 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i4 = i1;
 }
 while (1) {
  __ZN7WebCore15GraphicsContext7restoreEv(i3);
  i4 = i4 - 1 | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D24globalCompositeOperationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  i4 = i3;
  i3 = HEAP32[i2 + 40 >> 2] | 0;
  __ZN7WebCore21compositeOperatorNameENS_17CompositeOperatorENS_9BlendModeE(i1, HEAP32[i3 + (i4 * 200 & -1) + 64 >> 2] | 0, HEAP32[i3 + (i4 * 200 & -1) + 68 >> 2] | 0);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffffff(i1, d2, d3, d4, d5, d6, d7, d8) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 var i9 = 0, i10 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9 | 0;
 HEAPF32[i10 >> 2] = d2;
 HEAPF32[i10 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i10, d4, __ZN7WebCore20makeRGBA32FromFloatsEffff(d5, d6, d7, d8) | 0);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEfffff(i1, d2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 HEAPF32[i8 >> 2] = d2;
 HEAPF32[i8 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i8, d4, __ZN7WebCore20makeRGBA32FromFloatsEffff(d5, d5, d5, d6) | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffRi(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  return;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi(i1, i2, 1, d3, d4, +0, +0, +(HEAP32[i2 + 4 >> 2] | 0), +(HEAP32[i2 + 8 >> 2] | 0), i5);
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11CanvasStyle33createFromStringWithOverrideAlphaERKN3WTF6StringEf(i5, i2, d3);
 __ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE(i1, i5);
 __ZN7WebCore11CanvasStyleD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffRi(i1, i2, d3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i5 >> 2] = 17;
  return;
 } else {
  __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi(i1, i2, 0, d3, d4, +0, +0, +(HEAP32[i2 + 4 >> 2] | 0), +(HEAP32[i2 + 8 >> 2] | 0), i5);
  return;
 }
}
function __ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11CanvasStyle33createFromStringWithOverrideAlphaERKN3WTF6StringEf(i5, i2, d3);
 __ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE(i1, i5);
 __ZN7WebCore11CanvasStyleD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 HEAPF32[i7 >> 2] = d2;
 HEAPF32[i7 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i7, d4, __ZN7WebCore20makeRGBA32FromFloatsEffff(d5, d5, d5, +1) | 0);
 STACKTOP = i6;
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
function __ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffffffRi(i1, i2, d3, d4, d5, d6, d7, d8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 i9 = i9 | 0;
 __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi(i1, i2, 1, d3, d4, d5, d6, d7, d8, i9);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D12textBaselineEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore16textBaselineNameENS_12TextBaselineE(i1, HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 148 >> 2] | 0);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffffffRi(i1, i2, d3, d4, d5, d6, d7, d8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 i9 = i9 | 0;
 __ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi(i1, i2, 0, d3, d4, d5, d6, d7, d8, i9);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D9textAlignEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore13textAlignNameENS_9TextAlignE(i1, HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 144 >> 2] | 0);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZThn32_NK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 - 264 + 280 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return (HEAP8[(HEAP32[i1 - 264 + 272 >> 2] | 0) + (i2 * 200 & -1) + 120 | 0] & 1) != 0 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZNK7WebCore24CanvasRenderingContext2D8lineJoinEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore12lineJoinNameENS_8LineJoinE(i1, HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 36 >> 2] | 0);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZNK7WebCore24CanvasRenderingContext2D7lineCapEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = _llvm_uadd_with_overflow_i32(HEAP32[i2 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  __ZN7WebCore11lineCapNameENS_7LineCapE(i1, HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + (i3 * 200 & -1) + 32 >> 2] | 0);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
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
function __ZNK7WebCore24CanvasRenderingContext2D27webkitImageSmoothingEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return (HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 140 | 0] & 1) != 0 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore24CanvasRenderingContext2D9setShadowEfff(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 HEAPF32[i6 >> 2] = d2;
 HEAPF32[i6 + 4 >> 2] = d3;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i6, d4, 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return (HEAP8[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 120 | 0] & 1) != 0 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZNK7WebCore24CanvasRenderingContext2D20webkitLineDashOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 136 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D14lineDashOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 136 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 48 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 44 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D11globalAlphaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 60 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D10shadowBlurEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 52 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D10miterLimitEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 40 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZN7WebCore24CanvasRenderingContext2D11currentPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZN3WTF10fastMallocEj(12) | 0;
 HEAP32[i3 + 8 >> 2] = 1;
 i4 = i3;
 HEAP32[i4 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathC1ERKS0_(i3 + 4 | 0, i2 + 36 | 0);
 HEAP32[i4 >> 2] = H_BASE + 232;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D9lineWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return +(+HEAPF32[(HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 28 >> 2]);
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 return +0;
}
function __ZNK7WebCore24CanvasRenderingContext2D11getLineDashEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = _llvm_uadd_with_overflow_i32(HEAP32[i1 + 48 >> 2] | 0, -1 | 0) | 0;
 if (tempRet0) {
  return (HEAP32[i1 + 40 >> 2] | 0) + (i2 * 200 & -1) + 124 | 0;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZNK7WebCore24CanvasRenderingContext2D20webkitGetImageDataHDEffffRi(i1, i2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 __ZNK7WebCore24CanvasRenderingContext2D12getImageDataENS_11ImageBuffer16CoordinateSystemEffffRi(i1, i2, 1, d3, d4, d5, d6, i7);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D11clearShadowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAPF32[i3 >> 2] = +0;
 HEAPF32[i3 + 4 >> 2] = +0;
 __ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj(i1, i3, +0, 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D12getImageDataEffffRi(i1, i2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 __ZNK7WebCore24CanvasRenderingContext2D12getImageDataENS_11ImageBuffer16CoordinateSystemEffffRi(i1, i2, 0, d3, d4, d5, d6, i7);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEfff(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 __ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb(i1, i2, d3, d4, 0, d5, 1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEfff(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 __ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb(i1, i2, d3, d4, 1, d5, 1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 __ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb(i1, i2, d3, d4, 0, +0, 0);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEff(i1, i2, d3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 __ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb(i1, i2, d3, d4, 1, +0, 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore24CanvasRenderingContext2D21setCompositeOperationERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore24CanvasRenderingContext2D27setGlobalCompositeOperationERKN3WTF6StringE(i1, i2);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D27prepareGradientForDashboardEPNS_14CanvasGradientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 261 | 0] & 1) == 0) {
  return;
 }
 HEAP8[i2 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D46clearPathForDashboardBackwardCompatibilityModeEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 261 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore4Path5clearEv(i1 + 36 | 0);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D14setCurrentPathEPNS_7DOMPathE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore4PathaSERKS0_(i1 + 36 | 0, i2 + 4 | 0) | 0;
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZThn32_N7WebCore24CanvasRenderingContext2DD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 264 + 232 | 0;
 __ZN7WebCore24CanvasRenderingContext2DD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore24CanvasRenderingContext2D14drawingContextEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(HEAP32[i1 + 8 >> 2] | 0) | 0;
}
function __ZN7WebCore24CanvasRenderingContext2D8setAlphaEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore24CanvasRenderingContext2D14setGlobalAlphaEf(i1, d2);
 return;
}
function __ZN7WebCore7DOMPathD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 4 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2DD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24CanvasRenderingContext2DD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17CanvasPathMethodsD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 4 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D5StateD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24CanvasRenderingContext2D5StateD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function __ZThn32_N7WebCore24CanvasRenderingContext2DD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24CanvasRenderingContext2DD2Ev(i1 - 264 + 232 | 0);
 return;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore17CanvasPathMethodsD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 4 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore7DOMPathD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 __ZN7WebCore4PathD1Ev(i1 + 4 | 0);
 return;
}
function __ZN7WebCore24CanvasRenderingContext2D9beginPathEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Path5clearEv(i1 + 36 | 0);
 return;
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
function __ZN7WebCoreL25isSpaceThatNeedsReplacingEt(i1) {
 i1 = i1 | 0;
 return (i1 - 9 & 65535) >>> 0 < 5 >>> 0 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore22CanvasRenderingContext29paintRenderingResultsToCanvasEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore17CanvasPathMethods22hasInvertibleTransformEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function __ZNK7WebCore24CanvasRenderingContext2D13isAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore22CanvasRenderingContext13platformLayerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22CanvasRenderingContext13isAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore24CanvasStrokeStyleApplierD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore24CanvasRenderingContext2D4is2dEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore22CanvasRenderingContext4is3dEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore22CanvasRenderingContext4is2dEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore24CanvasStrokeStyleApplierD1Ev(i1) {
 i1 = i1 | 0;
 return;
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore22CanvasRenderingContextD0Ev,b1,__ZN7WebCore24CanvasRenderingContext2D5StateC2Ev,b1,__ZN7WebCore22CanvasRenderingContextD1Ev,b1,__ZN7WebCore24CanvasRenderingContext2D5StateD0Ev,b1,__ZN7WebCore24CanvasRenderingContext2DD0Ev,b1,__ZN7WebCore22CanvasRenderingContext29paintRenderingResultsToCanvasEv,b1,__ZN7WebCore7DOMPathD1Ev,b1,__ZN7WebCore17CanvasPathMethodsD1Ev,b1,__ZN7WebCore24CanvasRenderingContext2D5StateD2Ev,b1,__ZN7WebCore17CanvasPathMethodsD0Ev,b1,__ZN7WebCore24CanvasStrokeStyleApplierD0Ev,b1,__ZN7WebCore24CanvasRenderingContext2DD2Ev,b1,__ZN7WebCore7DOMPathD0Ev,b1,__ZThn32_N7WebCore24CanvasRenderingContext2DD0Ev
  ,b1,__ZN7WebCore24CanvasStrokeStyleApplierD1Ev,b1,__ZThn32_N7WebCore24CanvasRenderingContext2DD1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore24CanvasRenderingContext2D5State15fontsNeedUpdateEPNS_12FontSelectorE,b2,__ZN7WebCore24CanvasStrokeStyleApplier11strokeStyleEPNS_15GraphicsContextE,b2,__ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore17CanvasPathMethods22hasInvertibleTransformEv,b3,__ZNK7WebCore24CanvasRenderingContext2D13isAcceleratedEv,b3,__ZNK7WebCore24CanvasRenderingContext2D4is2dEv,b3,__ZN7WebCoreL25isSpaceThatNeedsReplacingEt,b3,__ZNK7WebCore22CanvasRenderingContext4is2dEv,b3,__ZThn32_NK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv,b3,__ZNK7WebCore22CanvasRenderingContext13isAcceleratedEv,b3,__ZNK7WebCore22CanvasRenderingContext13platformLayerEv,b3,__ZNK7WebCore22CanvasRenderingContext4is3dEv,b3,__ZNK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6,__ZN7WebCore24CanvasRenderingContext2DC2EPNS_17HTMLCanvasElementEbb,b6];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffRi","__ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringEf","_strlen","__ZN7WebCore24CanvasRenderingContext2D5scaleEff","__ZN7WebCore24CanvasRenderingContext2D7didDrawERKNS_9FloatRectEj","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffRi","__ZNK7WebCore24CanvasRenderingContext2D9lineWidthEv","__ZN7WebCore24CanvasRenderingContext2DC2EPNS_17HTMLCanvasElementEbb","__ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_17HTMLCanvasElementERKN3WTF6StringERi","__ZN7WebCore24CanvasRenderingContext2D20createRadialGradientEffffffRi","__ZN7WebCore24CanvasRenderingContext2D20createLinearGradientEffffRi","__ZN7WebCore24CanvasRenderingContext2D16drawTextInternalERKN3WTF6StringEffbfb","__ZN7WebCore24CanvasRenderingContext2D11measureTextERKN3WTF6StringE","__ZNK7WebCore24CanvasRenderingContext2D13isAcceleratedEv","__ZN7WebCore24CanvasRenderingContext2D11clearShadowEv","__ZNK7WebCore24CanvasRenderingContext2D4is2dEv","__ZN7WebCore24CanvasRenderingContext2D9beginPathEv","__ZN7WebCoreL25isSpaceThatNeedsReplacingEt","__ZN7WebCore24CanvasRenderingContext2D27setGlobalCompositeOperationERKN3WTF6StringE","__ZN7WebCore17CanvasPathMethodsD0Ev","__ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_4PathEEEvRKT_","__ZN7WebCore15FontDescriptionD2Ev","__ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEEaSERKS2_","__ZThn32_NK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv","__ZN7WebCore24CanvasRenderingContext2D12setFillColorEf","__ZN7WebCore24CanvasRenderingContext2D17drawImageFromRectEPNS_16HTMLImageElementEffffffffRKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEff","__ZN7WebCore24CanvasRenderingContext2D9setShadowEfffff","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffffffRi","__ZN7WebCore24CanvasStrokeStyleApplier11strokeStyleEPNS_15GraphicsContextE","__ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffRi","__ZNK7WebCore22CanvasRenderingContext4is3dEv","__ZN7WebCore24CanvasRenderingContext2D7setFontERKN3WTF6StringE","__ZNK7WebCore24CanvasRenderingContext2D9textAlignEv","__ZN7WebCore24CanvasRenderingContext2DD2Ev","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_RKNS_17CompositeOperatorERKNS_9BlendModeERi","__ZN7WebCore24CanvasRenderingContext2D5StateaSERKS1_","__ZN7WebCore17StyleSurroundDataD2Ev","__ZN7WebCore24CanvasStrokeStyleApplierD0Ev","__ZThn32_N7WebCore24CanvasRenderingContext2DD1Ev","__ZNK7WebCore24CanvasRenderingContext2D14drawingContextEv","__ZN7WebCore24CanvasRenderingContext2D12setLineWidthEf","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringEf","__ZN7WebCore24CanvasRenderingContext2D13createPatternEPNS_16HTMLImageElementERKN3WTF6StringERi","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEff","__ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEfff","__ZN7WebCore24CanvasRenderingContext2D15setTextBaselineERKN3WTF6StringE","__ZN7WebCore22CanvasRenderingContextD1Ev","__ZN7WebCore24CanvasRenderingContext2D23setWebkitLineDashOffsetEf","__ZN7WebCore24CanvasRenderingContext2D5resetEv","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffffRi","__ZN7WebCore10FontGlyphsD2Ev","__ZNK7WebCore24CanvasRenderingContext2D12getImageDataENS_11ImageBuffer16CoordinateSystemEffffRi","__ZN7WebCore24CanvasRenderingContext2D12setFillStyleENS_11CanvasStyleE","__ZNK7WebCore24CanvasRenderingContext2D12getImageDataEffffRi","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementERKNS_9FloatRectES5_Ri","__ZN7WebCore24CanvasRenderingContext2D15isPointInStrokeEff","__ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE6resizeEj","__ZNK7WebCore24CanvasRenderingContext2D11globalAlphaEv","__ZNK7WebCore24CanvasRenderingContext2D24globalCompositeOperationEv","__ZNK7WebCore22CanvasRenderingContext4is2dEv","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEffff","__ZN7WebCore24CanvasRenderingContext2D12setTransformEffffff","__ZN7WebCore24CanvasRenderingContext2D19didDrawEntireCanvasEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataENS_11ImageBuffer16CoordinateSystemEffffffRi","__ZNK7WebCore24CanvasRenderingContext2D20webkitGetImageDataHDEffffRi","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCore11RenderStyleD2Ev","__ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_9FloatRectEEENS_7IntRectERKT_PNS_7IntSizeE","__ZNK7WebCore24CanvasRenderingContext2D10shadowBlurEv","__ZNK7WebCore22CanvasRenderingContext13isAcceleratedEv","__ZNK7WebCore22CanvasRenderingContext13platformLayerEv","__ZNK7WebCore24CanvasRenderingContext2D20webkitLineDashOffsetEv","__ZN7WebCore24CanvasRenderingContext2D10strokeTextERKN3WTF6StringEfff","__ZN7WebCore24CanvasRenderingContext2D12setFillColorEffff","__ZNK7WebCore24CanvasRenderingContext2D10miterLimitEv","__ZN7WebCore24CanvasRenderingContext2D8setAlphaEf","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D4fillERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetXEf","__ZN7WebCore24CanvasRenderingContext2D10accessFontEv","__ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringEf","__ZNK7WebCore24CanvasRenderingContext2D17shouldDrawShadowsEv","__ZThn32_N7WebCore24CanvasRenderingContext2DD0Ev","__ZN7WebCore24CanvasRenderingContext2D9setShadowERKNS_9FloatSizeEfj","__ZN7WebCore24CanvasRenderingContext2D5StateD2Ev","__ZN7WebCore24CanvasRenderingContext2D12setFillColorERKN3WTF6StringE","__ZN7WebCoreL20createEmptyImageDataERKNS_7IntSizeE","__ZN7WebCore24CanvasRenderingContext2D16unwindStateStackEv","__ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_4PathE","__ZNK7WebCore24CanvasRenderingContext2D15createImageDataEN3WTF10PassRefPtrINS_9ImageDataEEERi","__ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetYEv","__ZN7WebCore24CanvasRenderingContext2D14setCurrentPathEPNS_7DOMPathE","__ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffRi","__ZNK7WebCore24CanvasRenderingContext2D18rectContainsCanvasERKNS_9FloatRectE","__ZN7WebCore24CanvasRenderingContext2D11currentPathEv","__ZN7WebCore24CanvasRenderingContext2D16setShadowOffsetYEf","__ZN7WebCore24CanvasRenderingContext2D5StateD0Ev","__ZNK7WebCore24CanvasRenderingContext2D4fontEv","__ZN7WebCore24CanvasRenderingContext2D12setTextAlignERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D11setLineDashERKN3WTF6VectorIfLj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore24CanvasRenderingContext2D9transformEffffff","_memset","__ZN7WebCore22CanvasRenderingContextD0Ev","_memcpy","__ZN7WebCore24CanvasRenderingContext2D8fillTextERKN3WTF6StringEff","__ZNK7WebCore24CanvasRenderingContext2D27prepareGradientForDashboardEPNS_14CanvasGradientE","__ZN7WebCore24CanvasRenderingContext2D13setShadowBlurEf","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore24CanvasRenderingContext2D7lineCapEv","__ZNK7WebCore24CanvasRenderingContext2D17inflateStrokeRectERNS_9FloatRectE","__ZN7WebCore22CanvasRenderingContext29paintRenderingResultsToCanvasEv","__ZN7WebCore7DOMPathD1Ev","__ZN7WebCore24CanvasRenderingContext2D30setWebkitImageSmoothingEnabledEb","__ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore24CanvasRenderingContext2D4clipERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D9setShadowEfffffff","__ZN7WebCore24CanvasRenderingContext2D14setShadowColorERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D24fullCanvasCompositedFillINS_9FloatRectEEEvRKT_","__ZN7WebCore24CanvasRenderingContext2D13isPointInPathEffRKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D9clearRectEffff","__ZN7WebCore24CanvasRenderingContext2DD0Ev","__ZNK7WebCore24CanvasRenderingContext2D11getLineDashEv","__ZNK7WebCore24CanvasRenderingContext2D22hasInvertibleTransformEv","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_16HTMLImageElementEffRi","__ZN7WebCore24CanvasRenderingContext2D13setMiterLimitEf","__ZN7WebCore24CanvasRenderingContext2D12putImageDataEPNS_9ImageDataEffffffRi","__ZN7WebCore24CanvasRenderingContext2D9setShadowEfffRKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D20webkitPutImageDataHDEPNS_9ImageDataEffffffRi","__ZN7WebCore24CanvasRenderingContext2D6strokeEv","__ZN7WebCore24CanvasRenderingContext2D11clearCanvasEv","__ZN7WebCore24CanvasRenderingContext2D7restoreEv","__ZN3WTF13tryMakeStringIcNS_6StringEcEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_","__ZN7WebCore24CanvasRenderingContext2D16realizeSavesLoopEv","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementERKNS_9FloatRectES5_Ri","__ZNK7WebCore24CanvasRenderingContext2D13shadowOffsetXEv","__ZN7WebCore24CanvasRenderingContext2D5StateC2Ev","__ZN7WebCore24CanvasRenderingContext2D6rotateEf","__ZN7WebCore24CanvasRenderingContext2D14setGlobalAlphaEf","__ZNK7WebCore24CanvasRenderingContext2D21transformAreaToDeviceERKNS_9FloatRectE","__ZN7WebCore24CanvasRenderingContext2D17setLineDashOffsetEf","__ZN7WebCore24CanvasRenderingContext2D11setLineJoinERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D11applyShadowEv","__ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_5ImageEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE","__ZN7WebCore24CanvasRenderingContext2D14setStrokeStyleENS_11CanvasStyleE","__ZNK7WebCore24CanvasRenderingContext2D12textBaselineEv","__ZN7WebCore24CanvasRenderingContext2D21setCompositeOperationERKN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D15compositeBufferEPNS_11ImageBufferERKNS_7IntRectENS_17CompositeOperatorE","__ZNK7WebCore17CanvasPathMethods22hasInvertibleTransformEv","__ZN7WebCore24CanvasRenderingContext2D46clearPathForDashboardBackwardCompatibilityModeEv","__ZN7WebCore24CanvasRenderingContext2D9setShadowEffffffff","__ZN7WebCore24CanvasRenderingContext2D9translateEff","__ZN7WebCore24CanvasRenderingContext2D12setFillColorEfffff","__ZN3WTF6VectorIN7WebCore24CanvasRenderingContext2D5StateELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRKS3_EEvOT_","__ZN7WebCore24CanvasRenderingContext2D8fillRectEffff","__ZN7WebCore24CanvasRenderingContext2D5State15fontsNeedUpdateEPNS_12FontSelectorE","__ZN7WebCoreL15normalizeSpacesERN3WTF6StringE","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEfffff","__ZN7WebCore24CanvasRenderingContext2D9setShadowEfff","__ZN7WebCore24CanvasRenderingContext2D29fullCanvasCompositedDrawImageINS_11ImageBufferEEEvPT_NS_10ColorSpaceERKNS_9FloatRectES8_NS_17CompositeOperatorE","__ZNK7WebCore24CanvasRenderingContext2D13applyLineDashEv","__ZN7WebCore24CanvasRenderingContext2D30calculateCompositingBufferRectINS_4PathEEENS_7IntRectERKT_PNS_7IntSizeE","__ZNK7WebCore24CanvasRenderingContext2D8lineJoinEv","__ZNK7WebCore24CanvasRenderingContext2D15createImageDataEffRi","__ZN7WebCore17CanvasPathMethodsD1Ev","__ZN7WebCore24CanvasRenderingContext2D17setWebkitLineDashERKN3WTF6VectorIfLj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore24CanvasRenderingContext2D9drawImageEPNS_17HTMLCanvasElementEffffffffRi","__ZN7WebCore24CanvasRenderingContext2D10setLineCapERKN3WTF6StringE","__ZNK7WebCore24CanvasRenderingContext2D14lineDashOffsetEv","__ZNK7WebCore24CanvasRenderingContext2D11shadowColorEv","_memmove","__ZN3WTF6VectorIfLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore24CanvasRenderingContext2D27webkitImageSmoothingEnabledEv","__ZN7WebCore24CanvasRenderingContext2D5StateC2ERKS1_","__ZN7WebCore24CanvasRenderingContext2D10strokeRectEffff","__ZN7WebCore7DOMPathD0Ev","__ZN7WebCore7TextRunC2ERKN3WTF6StringEffjNS_13TextDirectionEbbj","__ZN7WebCore24CanvasRenderingContext2D9setShadowEffff","__ZN7WebCore24CanvasRenderingContext2D23createCompositingBufferERKNS_7IntRectE","__ZN7WebCore24CanvasRenderingContext2D12setFillColorEff","__ZN7WebCore24CanvasStrokeStyleApplierD1Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore24CanvasRenderingContext2D14setStrokeColorEf"]

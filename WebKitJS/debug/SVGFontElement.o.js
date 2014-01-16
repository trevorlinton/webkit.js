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
H_BASE = parentModule["_malloc"](816 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 816;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([102,97,108,115,101,0,0,0,116,114,117,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore8SVGNames8hkernTagE=env.__ZN7WebCore8SVGNames8hkernTagE|0;
  var __ZN7WebCore8SVGNames11unicodeAttrE=env.__ZN7WebCore8SVGNames11unicodeAttrE|0;
  var __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE=env.__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames8glyphTagE=env.__ZN7WebCore8SVGNames8glyphTagE|0;
  var __ZN7WebCore8SVGNames16missing_glyphTagE=env.__ZN7WebCore8SVGNames16missing_glyphTagE|0;
  var __ZN7WebCore8SVGNames8vkernTagE=env.__ZN7WebCore8SVGNames8vkernTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZNK7WebCore11SVGGlyphMap16svgGlyphForGlyphEtE12defaultGlyph=(H_BASE+816)|0;
  var __ZTVN7WebCore14SVGFontElementE=(H_BASE+56)|0;
  var __ZZNK7WebCore11SVGGlyphMap16svgGlyphForGlyphEtE12defaultGlyph=(H_BASE+792)|0;
  var __ZTVN7WebCore32SVGAnimatedStaticPropertyTearOffIbEE=(H_BASE+24)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
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
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore14SVGFontElement16ensureGlyphCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 88 | 0;
 i8 = i1 + 13574 | 0;
 if ((HEAP8[i8] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i3 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i3 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i3 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i1 + 36 | 0;
 while (1) {
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == 0) {
   break;
  }
  if ((HEAP32[i13 + 12 >> 2] & 36 | 0) == 36) {
   i14 = 5;
   break;
  } else {
   i12 = i13 + 28 | 0;
  }
 }
 do {
  if ((i14 | 0) == 5) {
   i12 = i4 | 0;
   i15 = i5 | 0;
   i16 = i1 + 204 | 0;
   i17 = i5 | 0;
   i18 = i4 | 0;
   i19 = i6 + 48 | 0;
   i20 = i6 + 40 | 0;
   i21 = i6 + 36 | 0;
   i22 = i6 + 16 | 0;
   i23 = i4;
   i24 = i6 + 44 | 0;
   i25 = i1 + 100 | 0;
   i26 = i1 + 152 | 0;
   i27 = i13;
   i28 = 0;
   i29 = 0;
   i30 = 0;
   i31 = 0;
   i32 = 0;
   L9 : while (1) {
    i33 = HEAP32[i27 + 44 >> 2] | 0;
    i34 = HEAP32[__ZN7WebCore8SVGNames8glyphTagE >> 2] | 0;
    L11 : do {
     if ((i33 | 0) == (i34 | 0)) {
      i14 = 9;
     } else {
      i35 = HEAP32[i33 + 12 >> 2] | 0;
      if ((i35 | 0) == (HEAP32[i34 + 12 >> 2] | 0)) {
       if ((HEAP32[i33 + 16 >> 2] | 0) == (HEAP32[i34 + 16 >> 2] | 0)) {
        i14 = 9;
        break;
       }
      }
      i36 = HEAP32[__ZN7WebCore8SVGNames8hkernTagE >> 2] | 0;
      do {
       if ((i33 | 0) != (i36 | 0)) {
        if ((i35 | 0) == (HEAP32[i36 + 12 >> 2] | 0)) {
         if ((HEAP32[i33 + 16 >> 2] | 0) == (HEAP32[i36 + 16 >> 2] | 0)) {
          break;
         }
        }
        i37 = HEAP32[__ZN7WebCore8SVGNames8vkernTagE >> 2] | 0;
        do {
         if ((i33 | 0) != (i37 | 0)) {
          if ((i35 | 0) == (HEAP32[i37 + 12 >> 2] | 0)) {
           if ((HEAP32[i33 + 16 >> 2] | 0) == (HEAP32[i37 + 16 >> 2] | 0)) {
            break;
           }
          }
          i38 = HEAP32[__ZN7WebCore8SVGNames16missing_glyphTagE >> 2] | 0;
          if ((i33 | 0) == (i38 | 0)) {
           i39 = 1;
          } else {
           if ((i35 | 0) != (HEAP32[i38 + 12 >> 2] | 0)) {
            i40 = i28;
            i41 = i29;
            i42 = i30;
            i43 = i31;
            i44 = i32;
            break L11;
           }
           i39 = (HEAP32[i33 + 16 >> 2] | 0) == (HEAP32[i38 + 16 >> 2] | 0);
          }
          if (!(i39 & (i28 | 0) == 0)) {
           i40 = i28;
           i41 = i29;
           i42 = i30;
           i43 = i31;
           i44 = i32;
           break L11;
          }
          i40 = i27;
          i41 = i29;
          i42 = i30;
          i43 = i31;
          i44 = i32;
          break L11;
         }
        } while (0);
        __ZN7WebCore15SVGVKernElement24buildVerticalKerningPairERNS_13SVGKerningMapE(i27, i26);
        i40 = i28;
        i41 = i29;
        i42 = i30;
        i43 = i31;
        i44 = i32;
        break L11;
       }
      } while (0);
      __ZN7WebCore15SVGHKernElement26buildHorizontalKerningPairERNS_13SVGKerningMapE(i27, i25);
      i40 = i28;
      i41 = i29;
      i42 = i30;
      i43 = i31;
      i44 = i32;
     }
    } while (0);
    do {
     if ((i14 | 0) == 9) {
      i14 = 0;
      i33 = i27;
      i34 = i27 + 48 | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      L35 : do {
       if ((i35 | 0) == 0) {
        i45 = __ZN3WTF8nullAtomE;
       } else {
        i36 = HEAP32[i35 + 4 >> 2] | 0;
        if ((i36 & 1 | 0) == 0) {
         i46 = i36 >>> 1 & 134217727;
         i47 = i35 + 20 | 0;
        } else {
         i36 = i35 + 24 | 0;
         i46 = HEAP32[i36 + 8 >> 2] | 0;
         i47 = HEAP32[i36 >> 2] | 0;
        }
        if ((i46 | 0) == 0) {
         i45 = __ZN3WTF8nullAtomE;
         break;
        }
        i36 = HEAP32[__ZN7WebCore8SVGNames11unicodeAttrE >> 2] | 0;
        i37 = i36 + 12 | 0;
        i38 = i36 + 16 | 0;
        i48 = 0;
        while (1) {
         i49 = i47 + (i48 << 3) | 0;
         i50 = HEAP32[i49 >> 2] | 0;
         if ((i50 | 0) == (i36 | 0)) {
          break;
         }
         if ((HEAP32[i50 + 12 >> 2] | 0) == (HEAP32[i37 >> 2] | 0)) {
          if ((HEAP32[i50 + 16 >> 2] | 0) == (HEAP32[i38 >> 2] | 0)) {
           break;
          }
         }
         i50 = i48 + 1 | 0;
         if (i50 >>> 0 < i46 >>> 0) {
          i48 = i50;
         } else {
          i45 = __ZN3WTF8nullAtomE;
          break L35;
         }
        }
        i45 = (i49 | 0) == 0 ? __ZN3WTF8nullAtomE : i47 + (i48 << 3) + 4 | 0;
       }
      } while (0);
      i35 = HEAP32[i45 >> 2] | 0;
      HEAP32[i12 >> 2] = i35;
      if ((i35 | 0) != 0) {
       i38 = i35 | 0;
       HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
      }
      i38 = HEAP32[i34 >> 2] | 0;
      L53 : do {
       if ((i38 | 0) == 0) {
        i51 = __ZN3WTF8nullAtomE;
       } else {
        if ((HEAP32[i38 + 16 >> 2] | 0) == 0) {
         i51 = __ZN3WTF8nullAtomE;
         break;
        }
        i35 = HEAP32[i38 + 4 >> 2] | 0;
        if ((i35 & 1 | 0) == 0) {
         i52 = i35 >>> 1 & 134217727;
         i53 = i38 + 20 | 0;
        } else {
         i35 = i38 + 24 | 0;
         i52 = HEAP32[i35 + 8 >> 2] | 0;
         i53 = HEAP32[i35 >> 2] | 0;
        }
        if ((i52 | 0) == 0) {
         i51 = __ZN3WTF8nullAtomE;
         break;
        }
        i35 = HEAP32[(HEAP32[(HEAP32[i27 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
        i37 = i35 + 12 | 0;
        i36 = i35 + 16 | 0;
        i50 = 0;
        while (1) {
         i54 = i53 + (i50 << 3) | 0;
         i55 = HEAP32[i54 >> 2] | 0;
         if ((i55 | 0) == (i35 | 0)) {
          break;
         }
         if ((HEAP32[i55 + 12 >> 2] | 0) == (HEAP32[i37 >> 2] | 0)) {
          if ((HEAP32[i55 + 16 >> 2] | 0) == (HEAP32[i36 >> 2] | 0)) {
           break;
          }
         }
         i55 = i50 + 1 | 0;
         if (i55 >>> 0 < i52 >>> 0) {
          i50 = i55;
         } else {
          i51 = __ZN3WTF8nullAtomE;
          break L53;
         }
        }
        i51 = (i54 | 0) == 0 ? __ZN3WTF8nullAtomE : i53 + (i50 << 3) + 4 | 0;
       }
      } while (0);
      i38 = HEAP32[i51 >> 2] | 0;
      HEAP32[i15 >> 2] = i38;
      if ((i38 | 0) == 0) {
       i14 = 36;
      } else {
       i34 = i38 | 0;
       HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
       if ((HEAP32[i38 + 4 >> 2] | 0) == 0) {
        i14 = 36;
       } else {
        i14 = 38;
       }
      }
      do {
       if ((i14 | 0) == 36) {
        i14 = 0;
        i38 = HEAP32[i12 >> 2] | 0;
        if ((i38 | 0) == 0) {
         i56 = i29;
         i57 = i30;
         i58 = i31;
         i59 = i32;
         break;
        }
        if ((HEAP32[i38 + 4 >> 2] | 0) == 0) {
         i56 = i29;
         i57 = i30;
         i58 = i31;
         i59 = i32;
        } else {
         i14 = 38;
        }
       }
      } while (0);
      do {
       if ((i14 | 0) == 38) {
        i14 = 0;
        __ZNK7WebCore15SVGGlyphElement20buildGlyphIdentifierEv(i6, i33);
        __ZN7WebCore11SVGGlyphMap8addGlyphERKN3WTF6StringES4_NS_8SVGGlyphE(i16, i17, i18, i6);
        i38 = HEAP32[i19 >> 2] | 0;
        if ((i38 | 0) != 0) {
         i34 = HEAP32[i20 >> 2] | 0;
         i36 = i34 + (i38 << 2) | 0;
         i38 = i34;
         while (1) {
          i34 = HEAP32[i38 >> 2] | 0;
          do {
           if ((i34 | 0) != 0) {
            i37 = i34 | 0;
            i35 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
            if ((i35 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i34);
             break;
            } else {
             HEAP32[i37 >> 2] = i35;
             break;
            }
           }
          } while (0);
          i38 = i38 + 4 | 0;
          if ((i38 | 0) == (i36 | 0)) {
           break;
          }
         }
         HEAP32[i19 >> 2] = 0;
        }
        i36 = HEAP32[i20 >> 2] | 0;
        if ((i36 | 0) != 0) {
         HEAP32[i20 >> 2] = 0;
         HEAP32[i24 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i36);
        }
        __ZN7WebCore4PathD1Ev(i21);
        i36 = HEAP32[i22 >> 2] | 0;
        do {
         if ((i36 | 0) != 0) {
          i38 = i36 | 0;
          i50 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
          if ((i50 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i36);
           break;
          } else {
           HEAP32[i38 >> 2] = i50;
           break;
          }
         }
        } while (0);
        i36 = HEAP32[i12 >> 2] | 0;
        if ((i36 | 0) == 0) {
         i56 = i29;
         i57 = i30;
         i58 = i31;
         i59 = i32;
         break;
        }
        if ((HEAP32[i36 + 4 >> 2] | 0) >>> 0 <= 1 >>> 0) {
         i56 = i29;
         i57 = i30;
         i58 = i31;
         i59 = i32;
         break;
        }
        i50 = i36 + 8 | 0;
        if ((HEAP32[i36 + 16 >> 2] & 32 | 0) == 0) {
         i60 = HEAP16[HEAP32[i50 >> 2] >> 1] | 0;
        } else {
         i60 = HEAPU8[HEAP32[i50 >> 2] | 0] | 0;
        }
        if ((i60 & -2048) << 16 >> 16 == -10240) {
         i56 = i29;
         i57 = i30;
         i58 = i31;
         i59 = i32;
         break;
        }
        if ((i29 | 0) != (i30 | 0)) {
         HEAP32[i31 + (i29 << 2) >> 2] = i36;
         i50 = i36 | 0;
         HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + 2;
         i50 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
         HEAP32[i11 >> 2] = i50;
         i56 = i50;
         i57 = i30;
         i58 = i31;
         i59 = i32;
         break;
        }
        i50 = i30 + 1 | 0;
        do {
         if (i31 >>> 0 > i18 >>> 0) {
          i14 = 62;
         } else {
          if ((i31 + (i30 << 2) | 0) >>> 0 <= i18 >>> 0) {
           i14 = 62;
           break;
          }
          i36 = i23 - i31 >> 2;
          i38 = i50 + (i30 >>> 2) | 0;
          i34 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
          i38 = i34 >>> 0 > i50 >>> 0 ? i34 : i50;
          do {
           if (i30 >>> 0 < i38 >>> 0) {
            if (i38 >>> 0 > 1073741823 >>> 0) {
             i14 = 71;
             break L9;
            }
            i34 = __ZN3WTF18fastMallocGoodSizeEj(i38 << 2) | 0;
            i35 = i34 >>> 2;
            HEAP32[i10 >> 2] = i35;
            i37 = __ZN3WTF10fastMallocEj(i34) | 0;
            i34 = i37;
            HEAP32[i9 >> 2] = i34;
            i48 = i31;
            _memcpy(i37 | 0, i48 | 0, i30 << 2) | 0;
            if ((i31 | 0) == 0) {
             i61 = i35;
             i62 = i35;
             i63 = i34;
             break;
            }
            if ((i34 | 0) == (i31 | 0)) {
             HEAP32[i9 >> 2] = 0;
             HEAP32[i10 >> 2] = 0;
             i64 = 0;
             i65 = 0;
            } else {
             i64 = i35;
             i65 = i34;
            }
            __ZN3WTF8fastFreeEPv(i48);
            i61 = i64;
            i62 = i64;
            i63 = i65;
           } else {
            i61 = i30;
            i62 = i32;
            i63 = i31;
           }
          } while (0);
          i66 = i63 + (i36 << 2) | 0;
          i67 = i63;
          i68 = i61;
          i69 = i62;
         }
        } while (0);
        do {
         if ((i14 | 0) == 62) {
          i14 = 0;
          i38 = i32 + 1 + (i32 >>> 2) | 0;
          i48 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
          i38 = i48 >>> 0 > i50 >>> 0 ? i48 : i50;
          if (i32 >>> 0 >= i38 >>> 0) {
           i66 = i18;
           i67 = i31;
           i68 = i32;
           i69 = i32;
           break;
          }
          if (i38 >>> 0 > 1073741823 >>> 0) {
           i14 = 64;
           break L9;
          }
          i48 = __ZN3WTF18fastMallocGoodSizeEj(i38 << 2) | 0;
          i38 = i48 >>> 2;
          HEAP32[i10 >> 2] = i38;
          i34 = __ZN3WTF10fastMallocEj(i48) | 0;
          i48 = i34;
          HEAP32[i9 >> 2] = i48;
          i35 = i31;
          _memcpy(i34 | 0, i35 | 0, i30 << 2) | 0;
          if ((i31 | 0) == 0) {
           i66 = i18;
           i67 = i48;
           i68 = i38;
           i69 = i38;
           break;
          }
          if ((i48 | 0) == (i31 | 0)) {
           HEAP32[i9 >> 2] = 0;
           HEAP32[i10 >> 2] = 0;
           i70 = 0;
           i71 = 0;
          } else {
           i70 = i38;
           i71 = i48;
          }
          __ZN3WTF8fastFreeEPv(i35);
          i66 = i18;
          i67 = i71;
          i68 = i70;
          i69 = i70;
         }
        } while (0);
        i50 = HEAP32[i66 >> 2] | 0;
        HEAP32[i67 + (i30 << 2) >> 2] = i50;
        if ((i50 | 0) != 0) {
         i35 = i50 | 0;
         HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
        }
        i35 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
        HEAP32[i11 >> 2] = i35;
        i56 = i35;
        i57 = i68;
        i58 = i67;
        i59 = i69;
       }
      } while (0);
      i33 = HEAP32[i15 >> 2] | 0;
      do {
       if ((i33 | 0) != 0) {
        i35 = i33 | 0;
        i50 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
        if ((i50 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i33);
         break;
        } else {
         HEAP32[i35 >> 2] = i50;
         break;
        }
       }
      } while (0);
      i33 = HEAP32[i12 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i40 = i28;
       i41 = i56;
       i42 = i57;
       i43 = i58;
       i44 = i59;
       break;
      }
      i50 = i33 | 0;
      i35 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
      if ((i35 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i33);
       i40 = i28;
       i41 = i56;
       i42 = i57;
       i43 = i58;
       i44 = i59;
       break;
      } else {
       HEAP32[i50 >> 2] = i35;
       i40 = i28;
       i41 = i56;
       i42 = i57;
       i43 = i58;
       i44 = i59;
       break;
      }
     }
    } while (0);
    i35 = i27;
    while (1) {
     i50 = HEAP32[i35 + 28 >> 2] | 0;
     if ((i50 | 0) == 0) {
      i14 = 104;
      break L9;
     }
     if ((HEAP32[i50 + 12 >> 2] & 36 | 0) == 36) {
      i27 = i50;
      i28 = i40;
      i29 = i41;
      i30 = i42;
      i31 = i43;
      i32 = i44;
      continue L9;
     } else {
      i35 = i50;
     }
    }
   }
   if ((i14 | 0) == 64) {
    _WTFCrash();
   } else if ((i14 | 0) == 71) {
    _WTFCrash();
   } else if ((i14 | 0) == 104) {
    if ((i41 | 0) != 0) {
     __ZN7WebCore14SVGFontElement29registerLigaturesInGlyphCacheERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i3);
    }
    if ((i40 | 0) == 0) {
     break;
    }
    __ZN7WebCore15SVGGlyphElement27buildGenericGlyphIdentifierEPKNS_10SVGElementE(i7, i40 | 0);
    i32 = i1 + 224 | 0;
    i31 = i1 + 232 | 0;
    i30 = HEAP32[i31 >> 2] | 0;
    i29 = i7 + 8 | 0;
    HEAP16[i29 >> 1] = i30 + 1;
    if ((i30 | 0) == (HEAP32[i1 + 228 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i32, i7);
    } else {
     __ZN7WebCore8SVGGlyphC2ERKS0_((HEAP32[i32 >> 2] | 0) + (i30 * 52 & -1) | 0, i7);
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    }
    HEAP16[i1 + 13572 >> 1] = HEAP16[i29 >> 1] | 0;
    i29 = i7 + 48 | 0;
    i31 = HEAP32[i29 >> 2] | 0;
    i30 = i7 + 40 | 0;
    if ((i31 | 0) != 0) {
     i32 = HEAP32[i30 >> 2] | 0;
     i28 = i32 + (i31 << 2) | 0;
     i31 = i32;
     while (1) {
      i32 = HEAP32[i31 >> 2] | 0;
      do {
       if ((i32 | 0) != 0) {
        i27 = i32 | 0;
        i12 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
        if ((i12 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i32);
         break;
        } else {
         HEAP32[i27 >> 2] = i12;
         break;
        }
       }
      } while (0);
      i31 = i31 + 4 | 0;
      if ((i31 | 0) == (i28 | 0)) {
       break;
      }
     }
     HEAP32[i29 >> 2] = 0;
    }
    i28 = HEAP32[i30 >> 2] | 0;
    if ((i28 | 0) != 0) {
     HEAP32[i30 >> 2] = 0;
     HEAP32[i7 + 44 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i28);
    }
    __ZN7WebCore4PathD1Ev(i7 + 36 | 0);
    i28 = HEAP32[i7 + 16 >> 2] | 0;
    if ((i28 | 0) == 0) {
     break;
    }
    i31 = i28 | 0;
    i32 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
    if ((i32 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i28);
     break;
    } else {
     HEAP32[i31 >> 2] = i32;
     break;
    }
   }
  }
 } while (0);
 HEAP8[i8] = 1;
 i8 = HEAP32[i11 >> 2] | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i1 = i7 + (i8 << 2) | 0;
  i8 = i7;
  while (1) {
   i40 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i40 | 0) != 0) {
     i3 = i40 | 0;
     i41 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i41 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i40);
      break;
     } else {
      HEAP32[i3 >> 2] = i41;
      break;
     }
    }
   } while (0);
   i8 = i8 + 4 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i11 >> 2] = 0;
 }
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i2;
 return;
}
function __ZNSt3__16__sortIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i5 = i4 | 0;
 i6 = i4 + 56 | 0;
 i7 = i4 + 112 | 0;
 i8 = i4 + 168 | 0;
 i9 = i4 + 224 | 0;
 i10 = i4 + 280 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 40 | 0;
 i13 = i5 + 36 | 0;
 i14 = i5 + 16 | 0;
 i15 = i5 + 44 | 0;
 i16 = i6 + 48 | 0;
 i17 = i6 + 40 | 0;
 i18 = i6 + 36 | 0;
 i19 = i6 + 16 | 0;
 i20 = i6 + 44 | 0;
 i21 = i8 + 48 | 0;
 i22 = i8 + 40 | 0;
 i23 = i8 + 36 | 0;
 i24 = i8 + 16 | 0;
 i25 = i8 + 44 | 0;
 i26 = i9 + 48 | 0;
 i27 = i9 + 40 | 0;
 i28 = i9 + 36 | 0;
 i29 = i9 + 16 | 0;
 i30 = i9 + 44 | 0;
 i31 = i7 + 48 | 0;
 i32 = i7 + 40 | 0;
 i33 = i7 + 36 | 0;
 i34 = i7 + 16 | 0;
 i35 = i7 + 44 | 0;
 i36 = i1;
 i1 = i2;
 L1 : while (1) {
  i2 = i1;
  i37 = i1 - 52 | 0;
  i38 = i36;
  L3 : while (1) {
   i39 = i38;
   i40 = i2 - i39 | 0;
   switch ((i40 | 0) / 52 & -1 | 0) {
   case 5:
    {
     i41 = 21;
     break L1;
     break;
    }
   case 3:
    {
     i41 = 19;
     break L1;
     break;
    }
   case 4:
    {
     i41 = 20;
     break L1;
     break;
    }
   case 2:
    {
     i41 = 4;
     break L1;
     break;
    }
   case 0:
   case 1:
    {
     i41 = 136;
     break L1;
     break;
    }
   default:
    {}
   }
   if ((i40 | 0) < 364) {
    i41 = 23;
    break L1;
   }
   i42 = (i40 | 0) / 104 & -1;
   i43 = i38 + (i42 * 52 & -1) | 0;
   if ((i40 | 0) > 51948) {
    i44 = (i40 | 0) / 208 & -1;
    i45 = __ZNSt3__17__sort5IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_S9_T_(i38, i38 + (i44 * 52 & -1) | 0, i43, i38 + ((i44 + i42 | 0) * 52 & -1) | 0, i37, i3) | 0;
   } else {
    i45 = __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i38, i43, i37, i3) | 0;
   }
   do {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i38, i43) | 0) {
     i46 = i37;
     i47 = i45;
    } else {
     i42 = i37;
     while (1) {
      i48 = i42 - 52 | 0;
      if ((i38 | 0) == (i48 | 0)) {
       break;
      }
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i48, i43) | 0) {
       i41 = 66;
       break;
      } else {
       i42 = i48;
      }
     }
     if ((i41 | 0) == 66) {
      i41 = 0;
      __ZN7WebCore8SVGGlyphC2ERKS0_(i7, i38);
      __ZN7WebCore8SVGGlyphaSERKS0_(i38, i48) | 0;
      __ZN7WebCore8SVGGlyphaSERKS0_(i48, i7) | 0;
      i42 = HEAP32[i31 >> 2] | 0;
      if ((i42 | 0) != 0) {
       i44 = HEAP32[i32 >> 2] | 0;
       i40 = i44 + (i42 << 2) | 0;
       i42 = i44;
       while (1) {
        i44 = HEAP32[i42 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i49 = i44 | 0;
          i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
          if ((i50 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i49 >> 2] = i50;
           break;
          }
         }
        } while (0);
        i42 = i42 + 4 | 0;
        if ((i42 | 0) == (i40 | 0)) {
         break;
        }
       }
       HEAP32[i31 >> 2] = 0;
      }
      i40 = HEAP32[i32 >> 2] | 0;
      if ((i40 | 0) != 0) {
       HEAP32[i32 >> 2] = 0;
       HEAP32[i35 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i40);
      }
      __ZN7WebCore4PathD1Ev(i33);
      i40 = HEAP32[i34 >> 2] | 0;
      do {
       if ((i40 | 0) != 0) {
        i42 = i40 | 0;
        i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i40);
         break;
        } else {
         HEAP32[i42 >> 2] = i44;
         break;
        }
       }
      } while (0);
      i46 = i48;
      i47 = i45 + 1 | 0;
      break;
     }
     i40 = i38 + 52 | 0;
     do {
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i38, i37) | 0) {
       i51 = i40;
      } else {
       i44 = i40;
       while (1) {
        if ((i44 | 0) == (i37 | 0)) {
         i41 = 127;
         break L1;
        }
        i52 = i44 + 52 | 0;
        if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i38, i44) | 0) {
         break;
        } else {
         i44 = i52;
        }
       }
       __ZN7WebCore8SVGGlyphC2ERKS0_(i9, i44);
       __ZN7WebCore8SVGGlyphaSERKS0_(i44, i37) | 0;
       __ZN7WebCore8SVGGlyphaSERKS0_(i37, i9) | 0;
       i42 = HEAP32[i26 >> 2] | 0;
       if ((i42 | 0) != 0) {
        i50 = HEAP32[i27 >> 2] | 0;
        i49 = i50 + (i42 << 2) | 0;
        i42 = i50;
        while (1) {
         i50 = HEAP32[i42 >> 2] | 0;
         do {
          if ((i50 | 0) != 0) {
           i53 = i50 | 0;
           i54 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
           if ((i54 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i50);
            break;
           } else {
            HEAP32[i53 >> 2] = i54;
            break;
           }
          }
         } while (0);
         i42 = i42 + 4 | 0;
         if ((i42 | 0) == (i49 | 0)) {
          break;
         }
        }
        HEAP32[i26 >> 2] = 0;
       }
       i49 = HEAP32[i27 >> 2] | 0;
       if ((i49 | 0) != 0) {
        HEAP32[i27 >> 2] = 0;
        HEAP32[i30 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i49);
       }
       __ZN7WebCore4PathD1Ev(i28);
       i49 = HEAP32[i29 >> 2] | 0;
       if ((i49 | 0) == 0) {
        i51 = i52;
        break;
       }
       i42 = i49 | 0;
       i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
       if ((i44 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i49);
        i51 = i52;
        break;
       } else {
        HEAP32[i42 >> 2] = i44;
        i51 = i52;
        break;
       }
      }
     } while (0);
     if ((i51 | 0) == (i37 | 0)) {
      i41 = 135;
      break L1;
     } else {
      i55 = i37;
      i56 = i51;
     }
     while (1) {
      i40 = i56;
      while (1) {
       i57 = i40 + 52 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i38, i40) | 0) {
        i58 = i55;
        break;
       } else {
        i40 = i57;
       }
      }
      while (1) {
       i58 = i58 - 52 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i38, i58) | 0)) {
        break;
       }
      }
      if (i40 >>> 0 >= i58 >>> 0) {
       i38 = i40;
       continue L3;
      }
      __ZN7WebCore8SVGGlyphC2ERKS0_(i8, i40);
      __ZN7WebCore8SVGGlyphaSERKS0_(i40, i58) | 0;
      __ZN7WebCore8SVGGlyphaSERKS0_(i58, i8) | 0;
      i44 = HEAP32[i21 >> 2] | 0;
      if ((i44 | 0) != 0) {
       i42 = HEAP32[i22 >> 2] | 0;
       i49 = i42 + (i44 << 2) | 0;
       i44 = i42;
       while (1) {
        i42 = HEAP32[i44 >> 2] | 0;
        do {
         if ((i42 | 0) != 0) {
          i50 = i42 | 0;
          i54 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
          if ((i54 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i42);
           break;
          } else {
           HEAP32[i50 >> 2] = i54;
           break;
          }
         }
        } while (0);
        i44 = i44 + 4 | 0;
        if ((i44 | 0) == (i49 | 0)) {
         break;
        }
       }
       HEAP32[i21 >> 2] = 0;
      }
      i49 = HEAP32[i22 >> 2] | 0;
      if ((i49 | 0) != 0) {
       HEAP32[i22 >> 2] = 0;
       HEAP32[i25 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i49);
      }
      __ZN7WebCore4PathD1Ev(i23);
      i49 = HEAP32[i24 >> 2] | 0;
      if ((i49 | 0) == 0) {
       i55 = i58;
       i56 = i57;
       continue;
      }
      i44 = i49 | 0;
      i40 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
      if ((i40 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i49);
       i55 = i58;
       i56 = i57;
       continue;
      } else {
       HEAP32[i44 >> 2] = i40;
       i55 = i58;
       i56 = i57;
       continue;
      }
     }
    }
   } while (0);
   i40 = i38 + 52 | 0;
   L92 : do {
    if (i40 >>> 0 < i46 >>> 0) {
     i44 = i46;
     i49 = i40;
     i42 = i47;
     i54 = i43;
     while (1) {
      i50 = i49;
      while (1) {
       i59 = i50 + 52 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i50, i54) | 0) {
        i50 = i59;
       } else {
        i60 = i44;
        break;
       }
      }
      while (1) {
       i60 = i60 - 52 | 0;
       if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i60, i54) | 0) {
        break;
       }
      }
      if (i50 >>> 0 > i60 >>> 0) {
       i61 = i50;
       i62 = i42;
       i63 = i54;
       break L92;
      }
      __ZN7WebCore8SVGGlyphC2ERKS0_(i6, i50);
      __ZN7WebCore8SVGGlyphaSERKS0_(i50, i60) | 0;
      __ZN7WebCore8SVGGlyphaSERKS0_(i60, i6) | 0;
      i53 = HEAP32[i16 >> 2] | 0;
      if ((i53 | 0) != 0) {
       i64 = HEAP32[i17 >> 2] | 0;
       i65 = i64 + (i53 << 2) | 0;
       i53 = i64;
       while (1) {
        i64 = HEAP32[i53 >> 2] | 0;
        do {
         if ((i64 | 0) != 0) {
          i66 = i64 | 0;
          i67 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
          if ((i67 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i64);
           break;
          } else {
           HEAP32[i66 >> 2] = i67;
           break;
          }
         }
        } while (0);
        i53 = i53 + 4 | 0;
        if ((i53 | 0) == (i65 | 0)) {
         break;
        }
       }
       HEAP32[i16 >> 2] = 0;
      }
      i65 = HEAP32[i17 >> 2] | 0;
      if ((i65 | 0) != 0) {
       HEAP32[i17 >> 2] = 0;
       HEAP32[i20 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i65);
      }
      __ZN7WebCore4PathD1Ev(i18);
      i65 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i65 | 0) != 0) {
        i53 = i65 | 0;
        i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i65);
         break;
        } else {
         HEAP32[i53 >> 2] = i64;
         break;
        }
       }
      } while (0);
      i44 = i60;
      i49 = i59;
      i42 = i42 + 1 | 0;
      i54 = (i54 | 0) == (i50 | 0) ? i60 : i54;
     }
    } else {
     i61 = i40;
     i62 = i47;
     i63 = i43;
    }
   } while (0);
   do {
    if ((i61 | 0) == (i63 | 0)) {
     i68 = i62;
    } else {
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i63, i61) | 0)) {
      i68 = i62;
      break;
     }
     __ZN7WebCore8SVGGlyphC2ERKS0_(i5, i61);
     __ZN7WebCore8SVGGlyphaSERKS0_(i61, i63) | 0;
     __ZN7WebCore8SVGGlyphaSERKS0_(i63, i5) | 0;
     i43 = HEAP32[i11 >> 2] | 0;
     if ((i43 | 0) != 0) {
      i40 = HEAP32[i12 >> 2] | 0;
      i54 = i40 + (i43 << 2) | 0;
      i43 = i40;
      while (1) {
       i40 = HEAP32[i43 >> 2] | 0;
       do {
        if ((i40 | 0) != 0) {
         i42 = i40 | 0;
         i49 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
         if ((i49 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i40);
          break;
         } else {
          HEAP32[i42 >> 2] = i49;
          break;
         }
        }
       } while (0);
       i43 = i43 + 4 | 0;
       if ((i43 | 0) == (i54 | 0)) {
        break;
       }
      }
      HEAP32[i11 >> 2] = 0;
     }
     i54 = HEAP32[i12 >> 2] | 0;
     if ((i54 | 0) != 0) {
      HEAP32[i12 >> 2] = 0;
      HEAP32[i15 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i54);
     }
     __ZN7WebCore4PathD1Ev(i13);
     i54 = HEAP32[i14 >> 2] | 0;
     do {
      if ((i54 | 0) != 0) {
       i43 = i54 | 0;
       i40 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i40 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i54);
        break;
       } else {
        HEAP32[i43 >> 2] = i40;
        break;
       }
      }
     } while (0);
     i68 = i62 + 1 | 0;
    }
   } while (0);
   if ((i68 | 0) == 0) {
    i69 = __ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEbT0_S9_T_(i38, i61, i3) | 0;
    i54 = i61 + 52 | 0;
    if (__ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEbT0_S9_T_(i54, i1, i3) | 0) {
     i41 = 120;
     break;
    }
    if (i69) {
     i38 = i54;
     continue;
    }
   }
   i54 = i61;
   if ((i54 - i39 | 0) >= (i2 - i54 | 0)) {
    i41 = 124;
    break;
   }
   __ZNSt3__16__sortIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i38, i61, i3);
   i38 = i61 + 52 | 0;
  }
  if ((i41 | 0) == 120) {
   i41 = 0;
   if (i69) {
    i41 = 126;
    break;
   } else {
    i36 = i38;
    i1 = i61;
    continue;
   }
  } else if ((i41 | 0) == 124) {
   i41 = 0;
   __ZNSt3__16__sortIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i61 + 52 | 0, i1, i3);
   i36 = i38;
   i1 = i61;
   continue;
  }
 }
 if ((i41 | 0) == 21) {
  __ZNSt3__17__sort5IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_S9_T_(i38, i38 + 52 | 0, i38 + 104 | 0, i38 + 156 | 0, i37, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 19) {
  __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i38, i38 + 52 | 0, i37, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 20) {
  __ZNSt3__17__sort4IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_T_(i38, i38 + 52 | 0, i38 + 104 | 0, i37, i3) | 0;
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 23) {
  __ZNSt3__118__insertion_sort_3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i38, i1, i3);
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 4) {
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i37, i38) | 0)) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore8SVGGlyphC2ERKS0_(i10, i38);
  __ZN7WebCore8SVGGlyphaSERKS0_(i38, i37) | 0;
  __ZN7WebCore8SVGGlyphaSERKS0_(i37, i10) | 0;
  i37 = i10 + 48 | 0;
  i38 = HEAP32[i37 >> 2] | 0;
  i3 = i10 + 40 | 0;
  if ((i38 | 0) != 0) {
   i1 = HEAP32[i3 >> 2] | 0;
   i61 = i1 + (i38 << 2) | 0;
   i38 = i1;
   while (1) {
    i1 = HEAP32[i38 >> 2] | 0;
    do {
     if ((i1 | 0) != 0) {
      i36 = i1 | 0;
      i69 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i69 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i1);
       break;
      } else {
       HEAP32[i36 >> 2] = i69;
       break;
      }
     }
    } while (0);
    i38 = i38 + 4 | 0;
    if ((i38 | 0) == (i61 | 0)) {
     break;
    }
   }
   HEAP32[i37 >> 2] = 0;
  }
  i37 = HEAP32[i3 >> 2] | 0;
  if ((i37 | 0) != 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP32[i10 + 44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i37);
  }
  __ZN7WebCore4PathD1Ev(i10 + 36 | 0);
  i37 = HEAP32[i10 + 16 >> 2] | 0;
  if ((i37 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i10 = i37 | 0;
  i3 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i37);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i10 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
 } else if ((i41 | 0) == 126) {
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 127) {
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 135) {
  STACKTOP = i4;
  return;
 } else if ((i41 | 0) == 136) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore13SVGKerningMap6insertERKNS_14SVGKerningPairE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i4 = i3 | 0;
 i5 = i3 + 56 | 0;
 i6 = i3 + 64 | 0;
 i7 = i3 + 80 | 0;
 i8 = i3 + 88 | 0;
 _memset(i4 | 0, 0, 56) | 0;
 HEAPF32[i4 >> 2] = +HEAPF32[i2 >> 2];
 __ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEEaSERKS5_(i4 + 4 | 0, i2 + 4 | 0) | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i4 + 16 | 0, i2 + 16 | 0) | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i4 + 36 | 0, i2 + 36 | 0) | 0;
 i9 = HEAP32[i2 + 68 >> 2] | 0;
 i10 = HEAP32[i2 + 72 >> 2] | 0;
 i11 = i9 + (i10 << 2) | 0;
 L1 : do {
  if ((HEAP32[i2 + 80 >> 2] | 0) != 0) {
   L3 : do {
    if ((i10 | 0) == 0) {
     i12 = i9;
    } else {
     i13 = i9;
     while (1) {
      i14 = HEAP32[i13 >> 2] | 0;
      if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
       i12 = i13;
       break L3;
      }
      i13 = i13 + 4 | 0;
      if ((i13 | 0) == (i11 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i11 | 0)) {
    break;
   }
   i13 = i1 | 0;
   i14 = i5 | 0;
   i15 = i1 | 0;
   i16 = i1 + 8 | 0;
   i17 = i12;
   while (1) {
    i18 = HEAP32[i13 >> 2] | 0;
    L11 : do {
     if ((i18 | 0) == 0) {
      i19 = 29;
     } else {
      i20 = HEAP32[i16 >> 2] | 0;
      i21 = i17 | 0;
      i22 = HEAP32[i21 >> 2] | 0;
      i23 = HEAP32[i22 + 16 >> 2] | 0;
      if (i23 >>> 0 > 127 >>> 0) {
       i24 = i23 >>> 7;
      } else {
       i24 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i22) | 0;
      }
      i22 = (i24 >>> 23) + ~i24 | 0;
      i23 = i22 << 12 ^ i22;
      i22 = i23 >>> 7 ^ i23;
      i23 = i22 << 2 ^ i22;
      i22 = i23 >>> 20 ^ i23 | 1;
      i23 = i24;
      i25 = 0;
      while (1) {
       i26 = i23 & i20;
       i27 = i18 + (i26 << 3) | 0;
       i28 = HEAP32[i27 >> 2] | 0;
       i29 = i28;
       if ((i29 | 0) == 0) {
        i19 = 29;
        break L11;
       } else if ((i29 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i28, HEAP32[i21 >> 2] | 0) | 0) {
         break;
        }
       }
       i28 = (i25 | 0) == 0 ? i22 : i25;
       i23 = i28 + i26 | 0;
       i25 = i28;
      }
      if ((i27 | 0) == 0) {
       i19 = 29;
       break;
      }
      i25 = HEAP32[i16 >> 2] | 0;
      i23 = HEAP32[i13 >> 2] | 0;
      i22 = HEAP32[i21 >> 2] | 0;
      i20 = HEAP32[i22 + 16 >> 2] | 0;
      if (i20 >>> 0 > 127 >>> 0) {
       i30 = i20 >>> 7;
      } else {
       i30 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i22) | 0;
      }
      L28 : do {
       if ((i23 | 0) == 0) {
        i31 = 0;
       } else {
        i22 = (i30 >>> 23) + ~i30 | 0;
        i20 = i22 << 12 ^ i22;
        i22 = i20 >>> 7 ^ i20;
        i20 = i22 << 2 ^ i22;
        i22 = i20 >>> 20 ^ i20 | 1;
        i20 = i30;
        i28 = 0;
        while (1) {
         i32 = i20 & i25;
         i33 = i23 + (i32 << 3) | 0;
         i26 = HEAP32[i33 >> 2] | 0;
         i29 = i26;
         if ((i29 | 0) == 0) {
          i31 = 0;
          break L28;
         } else if ((i29 | 0) != (-1 | 0)) {
          if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i26, HEAP32[i21 >> 2] | 0) | 0) {
           break;
          }
         }
         i26 = (i28 | 0) == 0 ? i22 : i28;
         i20 = i26 + i32 | 0;
         i28 = i26;
        }
        if ((i33 | 0) == 0) {
         i31 = 0;
         break;
        }
        i31 = HEAP32[i23 + (i32 << 3) + 4 >> 2] | 0;
       }
      } while (0);
      i23 = i31 + 8 | 0;
      i21 = HEAP32[i23 >> 2] | 0;
      if ((i21 | 0) == (HEAP32[i31 + 4 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i31, i4);
       break;
      } else {
       __ZN7WebCore10SVGKerningC2ERKS0_((HEAP32[i31 >> 2] | 0) + (i21 * 56 & -1) | 0, i4);
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
       break;
      }
     }
    } while (0);
    do {
     if ((i19 | 0) == 29) {
      i19 = 0;
      i18 = __ZN3WTF10fastMallocEj(12) | 0;
      i23 = i18;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i18 + 4 >> 2] = 0;
      HEAP32[i18 + 8 >> 2] = 0;
      HEAP32[i14 >> 2] = i23;
      __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i23, i4);
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SD_SF_SG_SM_SJ_EEEEOT0_OT1_(i6, i15, i17, i5);
      i23 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      if ((i23 | 0) == 0) {
       break;
      }
      i18 = i23 + 8 | 0;
      i21 = HEAP32[i18 >> 2] | 0;
      i25 = i23 | 0;
      if ((i21 | 0) != 0) {
       i28 = HEAP32[i25 >> 2] | 0;
       i20 = i28 + (i21 * 56 & -1) | 0;
       i21 = i28;
       while (1) {
        __ZN7WebCore10SVGKerningD2Ev(i21);
        i21 = i21 + 56 | 0;
        if ((i21 | 0) == (i20 | 0)) {
         break;
        }
       }
       HEAP32[i18 >> 2] = 0;
      }
      i20 = HEAP32[i25 >> 2] | 0;
      if ((i20 | 0) != 0) {
       HEAP32[i25 >> 2] = 0;
       HEAP32[i23 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i20);
      }
      __ZN3WTF8fastFreeEPv(i23);
     }
    } while (0);
    i20 = i17 + 4 | 0;
    if ((i20 | 0) == (i11 | 0)) {
     break L1;
    } else {
     i34 = i20;
    }
    while (1) {
     i20 = HEAP32[i34 >> 2] | 0;
     if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
      break;
     }
     i20 = i34 + 4 | 0;
     if ((i20 | 0) == (i11 | 0)) {
      break L1;
     } else {
      i34 = i20;
     }
    }
    if ((i34 | 0) == (i11 | 0)) {
     break;
    } else {
     i17 = i34;
    }
   }
  }
 } while (0);
 i34 = HEAP32[i2 + 88 >> 2] | 0;
 i11 = HEAP32[i2 + 92 >> 2] | 0;
 i5 = i34 + (i11 << 2) | 0;
 L59 : do {
  if ((HEAP32[i2 + 100 >> 2] | 0) != 0) {
   L61 : do {
    if ((i11 | 0) == 0) {
     i35 = i34;
    } else {
     i6 = i34;
     while (1) {
      i31 = HEAP32[i6 >> 2] | 0;
      if (!((i31 | 0) == (-1 | 0) | (i31 | 0) == 0)) {
       i35 = i6;
       break L61;
      }
      i6 = i6 + 4 | 0;
      if ((i6 | 0) == (i5 | 0)) {
       break L59;
      }
     }
    }
   } while (0);
   if ((i35 | 0) == (i5 | 0)) {
    break;
   }
   i6 = i1 + 20 | 0;
   i31 = i6 | 0;
   i32 = i7 | 0;
   i33 = i6 | 0;
   i6 = i1 + 28 | 0;
   i30 = i35;
   while (1) {
    i27 = HEAP32[i31 >> 2] | 0;
    L69 : do {
     if ((i27 | 0) == 0) {
      i19 = 69;
     } else {
      i24 = HEAP32[i6 >> 2] | 0;
      i12 = i30 | 0;
      i9 = HEAP32[i12 >> 2] | 0;
      i10 = HEAP32[i9 + 16 >> 2] | 0;
      if (i10 >>> 0 > 127 >>> 0) {
       i36 = i10 >>> 7;
      } else {
       i36 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
      }
      i9 = (i36 >>> 23) + ~i36 | 0;
      i10 = i9 << 12 ^ i9;
      i9 = i10 >>> 7 ^ i10;
      i10 = i9 << 2 ^ i9;
      i9 = i10 >>> 20 ^ i10 | 1;
      i10 = i36;
      i17 = 0;
      while (1) {
       i14 = i10 & i24;
       i37 = i27 + (i14 << 3) | 0;
       i15 = HEAP32[i37 >> 2] | 0;
       i13 = i15;
       if ((i13 | 0) == 0) {
        i19 = 69;
        break L69;
       } else if ((i13 | 0) != (-1 | 0)) {
        if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i15, HEAP32[i12 >> 2] | 0) | 0) {
         break;
        }
       }
       i15 = (i17 | 0) == 0 ? i9 : i17;
       i10 = i15 + i14 | 0;
       i17 = i15;
      }
      if ((i37 | 0) == 0) {
       i19 = 69;
       break;
      }
      i17 = HEAP32[i6 >> 2] | 0;
      i10 = HEAP32[i31 >> 2] | 0;
      i9 = HEAP32[i12 >> 2] | 0;
      i24 = HEAP32[i9 + 16 >> 2] | 0;
      if (i24 >>> 0 > 127 >>> 0) {
       i38 = i24 >>> 7;
      } else {
       i38 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i9) | 0;
      }
      L86 : do {
       if ((i10 | 0) == 0) {
        i39 = 0;
       } else {
        i9 = (i38 >>> 23) + ~i38 | 0;
        i24 = i9 << 12 ^ i9;
        i9 = i24 >>> 7 ^ i24;
        i24 = i9 << 2 ^ i9;
        i9 = i24 >>> 20 ^ i24 | 1;
        i24 = i38;
        i23 = 0;
        while (1) {
         i40 = i24 & i17;
         i41 = i10 + (i40 << 3) | 0;
         i25 = HEAP32[i41 >> 2] | 0;
         i18 = i25;
         if ((i18 | 0) == 0) {
          i39 = 0;
          break L86;
         } else if ((i18 | 0) != (-1 | 0)) {
          if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i25, HEAP32[i12 >> 2] | 0) | 0) {
           break;
          }
         }
         i25 = (i23 | 0) == 0 ? i9 : i23;
         i24 = i25 + i40 | 0;
         i23 = i25;
        }
        if ((i41 | 0) == 0) {
         i39 = 0;
         break;
        }
        i39 = HEAP32[i10 + (i40 << 3) + 4 >> 2] | 0;
       }
      } while (0);
      i10 = i39 + 8 | 0;
      i12 = HEAP32[i10 >> 2] | 0;
      if ((i12 | 0) == (HEAP32[i39 + 4 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i39, i4);
       break;
      } else {
       __ZN7WebCore10SVGKerningC2ERKS0_((HEAP32[i39 >> 2] | 0) + (i12 * 56 & -1) | 0, i4);
       HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
       break;
      }
     }
    } while (0);
    do {
     if ((i19 | 0) == 69) {
      i19 = 0;
      i27 = __ZN3WTF10fastMallocEj(12) | 0;
      i10 = i27;
      HEAP32[i27 >> 2] = 0;
      HEAP32[i27 + 4 >> 2] = 0;
      HEAP32[i27 + 8 >> 2] = 0;
      HEAP32[i32 >> 2] = i10;
      __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i10, i4);
      __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SD_SF_SG_SM_SJ_EEEEOT0_OT1_(i8, i33, i30, i7);
      i10 = HEAP32[i32 >> 2] | 0;
      HEAP32[i32 >> 2] = 0;
      if ((i10 | 0) == 0) {
       break;
      }
      i27 = i10 + 8 | 0;
      i12 = HEAP32[i27 >> 2] | 0;
      i17 = i10 | 0;
      if ((i12 | 0) != 0) {
       i23 = HEAP32[i17 >> 2] | 0;
       i24 = i23 + (i12 * 56 & -1) | 0;
       i12 = i23;
       while (1) {
        __ZN7WebCore10SVGKerningD2Ev(i12);
        i12 = i12 + 56 | 0;
        if ((i12 | 0) == (i24 | 0)) {
         break;
        }
       }
       HEAP32[i27 >> 2] = 0;
      }
      i24 = HEAP32[i17 >> 2] | 0;
      if ((i24 | 0) != 0) {
       HEAP32[i17 >> 2] = 0;
       HEAP32[i10 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i24);
      }
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i24 = i30 + 4 | 0;
    if ((i24 | 0) == (i5 | 0)) {
     break L59;
    } else {
     i42 = i24;
    }
    while (1) {
     i24 = HEAP32[i42 >> 2] | 0;
     if (!((i24 | 0) == (-1 | 0) | (i24 | 0) == 0)) {
      break;
     }
     i24 = i42 + 4 | 0;
     if ((i24 | 0) == (i5 | 0)) {
      break L59;
     } else {
      i42 = i24;
     }
    }
    if ((i42 | 0) == (i5 | 0)) {
     break;
    } else {
     i30 = i42;
    }
   }
  }
 } while (0);
 if ((HEAP32[i2 + 64 >> 2] | 0) == 0) {
  __ZN7WebCore10SVGKerningD2Ev(i4);
  STACKTOP = i3;
  return;
 }
 i42 = i1 + 40 | 0;
 i5 = i1 + 48 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i1 + 44 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i42, i2);
  __ZN7WebCore10SVGKerningD2Ev(i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore14SVGKerningPairC2ERKS0_((HEAP32[i42 >> 2] | 0) + (i7 * 108 & -1) | 0, i2);
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  __ZN7WebCore10SVGKerningD2Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14SVGFontElement29registerLigaturesInGlyphCacheERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 80 | 0;
 i8 = i3 + 88 | 0;
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i4 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i2 + 8 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i2 | 0;
   i15 = i1 + 204 | 0;
   i16 = i6 | 0;
   i17 = i6;
   i18 = i6 + 4 | 0;
   i19 = i6 + 8 | 0;
   i20 = i6 + 36 | 0;
   i21 = i6 + 12 | 0;
   i22 = i6 + 40 | 0;
   i23 = i6 + 44 | 0;
   i24 = i6 + 48 | 0;
   i25 = i7 | 0;
   i26 = i8 + 48 | 0;
   i27 = i8 + 40 | 0;
   i28 = i8 + 36 | 0;
   i29 = i8 + 16 | 0;
   i30 = i6 + 16 | 0;
   i31 = i8 + 44 | 0;
   i32 = i5 | 0;
   i33 = 0;
   i34 = 0;
   i35 = i13;
   while (1) {
    if (i35 >>> 0 <= i33 >>> 0) {
     i36 = 4;
     break;
    }
    i37 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i33 << 2) >> 2] | 0;
    do {
     if ((i37 | 0) == 0) {
      i38 = i34;
     } else {
      i39 = HEAP32[i37 + 4 >> 2] | 0;
      if ((HEAP32[i37 + 16 >> 2] & 32 | 0) == 0) {
       i40 = HEAP32[i37 + 8 >> 2] | 0;
      } else {
       i40 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i37) | 0;
      }
      if ((i39 | 0) == 0) {
       i38 = i34;
       break;
      } else {
       i41 = 0;
      }
      while (1) {
       __ZN3WTF6StringC1EPKtj(i5, i40 + (i41 << 1) | 0, 1);
       __ZN7WebCore11SVGGlyphMap22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i15, i5, i4);
       i42 = HEAP32[i11 >> 2] | 0;
       do {
        if ((i42 | 0) == 0) {
         HEAP8[i16] = HEAP8[i16] & -2;
         HEAP32[i17 >> 2] = HEAP32[i17 >> 2] & -63 | 4;
         HEAP32[i18 >> 2] = 0;
         HEAP16[i19 >> 1] = 0;
         _memset(i21 | 0, 0, 24) | 0;
         __ZN7WebCore4PathC1Ev(i20);
         HEAP32[i22 >> 2] = 0;
         HEAP32[i23 >> 2] = 0;
         HEAP32[i24 >> 2] = 0;
         HEAP8[i16] = HEAP8[i16] | 1;
         HEAP32[i25 >> 2] = 0;
         __ZN7WebCore8SVGGlyphC2ERKS0_(i8, i6);
         __ZN7WebCore11SVGGlyphMap8addGlyphERKN3WTF6StringES4_NS_8SVGGlyphE(i15, i7, i5, i8);
         i43 = HEAP32[i26 >> 2] | 0;
         if ((i43 | 0) != 0) {
          i44 = HEAP32[i27 >> 2] | 0;
          i45 = i44 + (i43 << 2) | 0;
          i43 = i44;
          while (1) {
           i44 = HEAP32[i43 >> 2] | 0;
           do {
            if ((i44 | 0) != 0) {
             i46 = i44 | 0;
             i47 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
             if ((i47 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i44);
              break;
             } else {
              HEAP32[i46 >> 2] = i47;
              break;
             }
            }
           } while (0);
           i43 = i43 + 4 | 0;
           if ((i43 | 0) == (i45 | 0)) {
            break;
           }
          }
          HEAP32[i26 >> 2] = 0;
         }
         i45 = HEAP32[i27 >> 2] | 0;
         if ((i45 | 0) != 0) {
          HEAP32[i27 >> 2] = 0;
          HEAP32[i31 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i45);
         }
         __ZN7WebCore4PathD1Ev(i28);
         i45 = HEAP32[i29 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i43 = i45 | 0;
           i44 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
           if ((i44 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i45);
            break;
           } else {
            HEAP32[i43 >> 2] = i44;
            break;
           }
          }
         } while (0);
         i45 = HEAP32[i25 >> 2] | 0;
         do {
          if ((i45 | 0) != 0) {
           i44 = i45 | 0;
           i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
           if ((i43 | 0) == 0) {
            __ZN3WTF10StringImpl7destroyEPS0_(i45);
            break;
           } else {
            HEAP32[i44 >> 2] = i43;
            break;
           }
          }
         } while (0);
         i45 = HEAP32[i24 >> 2] | 0;
         if ((i45 | 0) != 0) {
          i43 = HEAP32[i22 >> 2] | 0;
          i44 = i43 + (i45 << 2) | 0;
          i45 = i43;
          while (1) {
           i43 = HEAP32[i45 >> 2] | 0;
           do {
            if ((i43 | 0) != 0) {
             i47 = i43 | 0;
             i46 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
             if ((i46 | 0) == 0) {
              __ZN3WTF10StringImpl7destroyEPS0_(i43);
              break;
             } else {
              HEAP32[i47 >> 2] = i46;
              break;
             }
            }
           } while (0);
           i45 = i45 + 4 | 0;
           if ((i45 | 0) == (i44 | 0)) {
            break;
           }
          }
          HEAP32[i24 >> 2] = 0;
         }
         i44 = HEAP32[i22 >> 2] | 0;
         if ((i44 | 0) != 0) {
          HEAP32[i22 >> 2] = 0;
          HEAP32[i23 >> 2] = 0;
          __ZN3WTF8fastFreeEPv(i44);
         }
         __ZN7WebCore4PathD1Ev(i20);
         i44 = HEAP32[i30 >> 2] | 0;
         if ((i44 | 0) == 0) {
          i48 = 0;
          break;
         }
         i45 = i44 | 0;
         i43 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
         if ((i43 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i44);
          i48 = 0;
          break;
         } else {
          HEAP32[i45 >> 2] = i43;
          i48 = 0;
          break;
         }
        } else {
         if ((HEAP32[i10 >> 2] | 0) == 0) {
          i48 = i42;
          break;
         }
         i43 = HEAP32[i9 >> 2] | 0;
         i45 = i43 + (i42 * 52 & -1) | 0;
         i44 = i43;
         while (1) {
          i43 = i44 + 48 | 0;
          i46 = HEAP32[i43 >> 2] | 0;
          i47 = i44 + 40 | 0;
          if ((i46 | 0) != 0) {
           i49 = HEAP32[i47 >> 2] | 0;
           i50 = i49 + (i46 << 2) | 0;
           i46 = i49;
           while (1) {
            i49 = HEAP32[i46 >> 2] | 0;
            do {
             if ((i49 | 0) != 0) {
              i51 = i49 | 0;
              i52 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
              if ((i52 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i49);
               break;
              } else {
               HEAP32[i51 >> 2] = i52;
               break;
              }
             }
            } while (0);
            i46 = i46 + 4 | 0;
            if ((i46 | 0) == (i50 | 0)) {
             break;
            }
           }
           HEAP32[i43 >> 2] = 0;
          }
          i50 = HEAP32[i47 >> 2] | 0;
          if ((i50 | 0) != 0) {
           HEAP32[i47 >> 2] = 0;
           HEAP32[i44 + 44 >> 2] = 0;
           __ZN3WTF8fastFreeEPv(i50);
          }
          __ZN7WebCore4PathD1Ev(i44 + 36 | 0);
          i50 = HEAP32[i44 + 16 >> 2] | 0;
          do {
           if ((i50 | 0) != 0) {
            i46 = i50 | 0;
            i49 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
            if ((i49 | 0) == 0) {
             __ZN3WTF10StringImpl7destroyEPS0_(i50);
             break;
            } else {
             HEAP32[i46 >> 2] = i49;
             break;
            }
           }
          } while (0);
          i44 = i44 + 52 | 0;
          if ((i44 | 0) == (i45 | 0)) {
           break;
          }
         }
         HEAP32[i11 >> 2] = 0;
         i45 = HEAP32[i9 >> 2] | 0;
         if ((i45 | 0) == 0) {
          i48 = 0;
          break;
         }
         HEAP32[i9 >> 2] = 0;
         HEAP32[i10 >> 2] = 0;
         __ZN3WTF8fastFreeEPv(i45 | 0);
         i48 = 0;
        }
       } while (0);
       i42 = HEAP32[i32 >> 2] | 0;
       do {
        if ((i42 | 0) != 0) {
         i45 = i42 | 0;
         i44 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
         if ((i44 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i42);
          break;
         } else {
          HEAP32[i45 >> 2] = i44;
          break;
         }
        }
       } while (0);
       i42 = i41 + 1 | 0;
       if (i42 >>> 0 < i39 >>> 0) {
        i41 = i42;
       } else {
        i38 = i48;
        break;
       }
      }
     }
    } while (0);
    i37 = i33 + 1 | 0;
    if (i37 >>> 0 >= i13 >>> 0) {
     break;
    }
    i33 = i37;
    i34 = i38;
    i35 = HEAP32[i12 >> 2] | 0;
   }
   if ((i36 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i38 | 0) == 0) {
    break;
   }
   i35 = HEAP32[i9 >> 2] | 0;
   i34 = i35 + (i38 * 52 & -1) | 0;
   i33 = i35;
   while (1) {
    i35 = i33 + 48 | 0;
    i32 = HEAP32[i35 >> 2] | 0;
    i30 = i33 + 40 | 0;
    if ((i32 | 0) != 0) {
     i20 = HEAP32[i30 >> 2] | 0;
     i23 = i20 + (i32 << 2) | 0;
     i32 = i20;
     while (1) {
      i20 = HEAP32[i32 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i22 = i20 | 0;
        i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
        if ((i24 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i20);
         break;
        } else {
         HEAP32[i22 >> 2] = i24;
         break;
        }
       }
      } while (0);
      i32 = i32 + 4 | 0;
      if ((i32 | 0) == (i23 | 0)) {
       break;
      }
     }
     HEAP32[i35 >> 2] = 0;
    }
    i23 = HEAP32[i30 >> 2] | 0;
    if ((i23 | 0) != 0) {
     HEAP32[i30 >> 2] = 0;
     HEAP32[i33 + 44 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i23);
    }
    __ZN7WebCore4PathD1Ev(i33 + 36 | 0);
    i23 = HEAP32[i33 + 16 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i32 = i23 | 0;
      i20 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
      if ((i20 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i23);
       break;
      } else {
       HEAP32[i32 >> 2] = i20;
       break;
      }
     }
    } while (0);
    i33 = i33 + 52 | 0;
    if ((i33 | 0) == (i34 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
  }
 } while (0);
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i11 | 0);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 36;
}
function __ZN7WebCore11SVGGlyphMap8addGlyphERKN3WTF6StringES4_NS_8SVGGlyphE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 72 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i14 = 1;
 } else {
  i14 = (HEAP32[i13 + 4 >> 2] | 0) == 0;
 }
 i13 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i3 = HEAP32[i13 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i9 >> 2] = 0;
   if ((HEAP32[i13 + 16 >> 2] & 32 | 0) == 0) {
    i16 = HEAP32[i13 + 8 >> 2] | 0;
   } else {
    i16 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i13) | 0;
   }
   __ZN7WebCore30SurrogatePairAwareTextIteratorC1EPKtiii(i10, i16, 0, i3, i3);
   i17 = i10 + 4 | 0;
   i18 = i10 + 8 | 0;
   if ((HEAP32[i17 >> 2] | 0) >= (HEAP32[i18 >> 2] | 0)) {
    STACKTOP = i5;
    return;
   }
   i19 = i10 | 0;
   i20 = i11 + 8 | 0;
   i21 = i11 | 0;
   i22 = i1 | 0;
   i23 = 0;
   i24 = HEAP32[i19 >> 2] | 0;
   while (1) {
    i25 = HEAP16[i24 >> 1] | 0;
    i26 = i25 & 65535;
    HEAP32[i8 >> 2] = i26;
    HEAP32[i9 >> 2] = 1;
    if ((i25 & 65535) >>> 0 < 12353 >>> 0) {
     i27 = i26;
    } else {
     if (!(__ZN7WebCore30SurrogatePairAwareTextIterator15consumeSlowCaseERiRj(i10, i8, i9) | 0)) {
      i28 = i23;
      break;
     }
     i27 = HEAP32[i8 >> 2] | 0;
    }
    i26 = HEAP32[i22 + 8 >> 2] | 0;
    i25 = HEAP32[i22 >> 2] | 0;
    i29 = i27 + ~(i27 << 15) | 0;
    i30 = (i29 >>> 10 ^ i29) * 9 & -1;
    i29 = i30 >>> 6 ^ i30;
    i30 = i29 + ~(i29 << 11) | 0;
    i29 = i30 >>> 16 ^ i30;
    L20 : do {
     if ((i25 | 0) == 0) {
      i31 = 0;
     } else {
      i30 = i29 & i26;
      i32 = i25 + (i30 << 3) | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      if ((i33 | 0) == (i27 | 0)) {
       i34 = i32;
      } else {
       i32 = (i29 >>> 23) + ~i29 | 0;
       i35 = i32 << 12 ^ i32;
       i32 = i35 >>> 7 ^ i35;
       i35 = i32 << 2 ^ i32;
       i32 = i35 >>> 20 ^ i35 | 1;
       i35 = 0;
       i36 = i30;
       i30 = i33;
       while (1) {
        if ((i30 | 0) == 0) {
         i31 = 0;
         break L20;
        }
        i33 = (i35 | 0) == 0 ? i32 : i35;
        i37 = i33 + i36 & i26;
        i38 = i25 + (i37 << 3) | 0;
        i39 = HEAP32[i38 >> 2] | 0;
        if ((i39 | 0) == (i27 | 0)) {
         i34 = i38;
         break;
        } else {
         i35 = i33;
         i36 = i37;
         i30 = i39;
        }
       }
      }
      if ((i34 | 0) == 0) {
       i31 = 0;
       break;
      }
      i30 = HEAP32[i34 + 4 >> 2] | 0;
      if ((i30 | 0) == 0) {
       i31 = 0;
       break;
      }
      i36 = i30 | 0;
      HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 1;
      i31 = i30;
     }
    } while (0);
    HEAP32[i15 >> 2] = i31;
    if ((i23 | 0) != 0) {
     __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i23 | 0);
    }
    do {
     if ((i31 | 0) == 0) {
      i25 = __ZN3WTF10fastMallocEj(36) | 0;
      HEAP32[i25 >> 2] = 1;
      _memset(i25 + 4 | 0, 0, 32) | 0;
      HEAP32[i15 >> 2] = i25;
      __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i11, i22 | 0, i8, i7);
      if ((HEAP8[i20] & 1) != 0) {
       i40 = HEAP32[i15 >> 2] | 0;
       break;
      }
      i25 = HEAP32[i21 >> 2] | 0;
      i26 = HEAP32[i15 >> 2] | 0;
      if ((i26 | 0) != 0) {
       i29 = i26 | 0;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      }
      i29 = i25 + 4 | 0;
      i25 = HEAP32[i29 >> 2] | 0;
      HEAP32[i29 >> 2] = i26;
      if ((i25 | 0) == 0) {
       i40 = i26;
       break;
      }
      __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i25 | 0);
      i40 = i26;
     } else {
      i40 = i31;
     }
    } while (0);
    i26 = HEAP32[i9 >> 2] | 0;
    i25 = (HEAP32[i19 >> 2] | 0) + (i26 << 1) | 0;
    HEAP32[i19 >> 2] = i25;
    i29 = (HEAP32[i17 >> 2] | 0) + i26 | 0;
    HEAP32[i17 >> 2] = i29;
    if ((i29 | 0) < (HEAP32[i18 >> 2] | 0)) {
     i22 = i40 + 16 | 0;
     i23 = i40;
     i24 = i25;
    } else {
     i28 = i40;
     break;
    }
   }
   if ((i28 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i24 = i28 + 4 | 0;
   i23 = i28 + 12 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   if ((i22 | 0) == (HEAP32[i28 + 8 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i24, i4);
   } else {
    __ZN7WebCore8SVGGlyphC2ERKS0_((HEAP32[i24 >> 2] | 0) + (i22 * 52 & -1) | 0, i4);
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   }
   i23 = HEAP32[i15 >> 2] | 0;
   i22 = _llvm_uadd_with_overflow_i32(HEAP32[i23 + 12 >> 2] | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i24 = i22;
   i22 = HEAP32[i23 + 4 >> 2] | 0;
   i18 = i22 + (i24 * 52 & -1) | 0;
   i17 = i1 + 13364 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i19 + 1;
   HEAP32[i22 + (i24 * 52 & -1) + 4 >> 2] = i19;
   HEAP32[i22 + (i24 * 52 & -1) + 12 >> 2] = i3;
   i19 = i1 + 20 | 0;
   i17 = i1 + 28 | 0;
   i21 = i22 + (i24 * 52 & -1) + 8 | 0;
   HEAP16[i21 >> 1] = (HEAP32[i17 >> 2] | 0) + 1;
   i24 = HEAP32[i17 >> 2] | 0;
   if ((i24 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i19, i18);
   } else {
    __ZN7WebCore8SVGGlyphC2ERKS0_((HEAP32[i19 >> 2] | 0) + (i24 * 52 & -1) | 0, i18);
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   if (!i14) {
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RtEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i12, i1 + 13344 | 0, i2, i21);
   }
   if ((i23 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i23 | 0);
   STACKTOP = i5;
   return;
  }
 } while (0);
 i12 = i1 + 20 | 0;
 i14 = i1 + 28 | 0;
 i28 = i4 + 8 | 0;
 HEAP16[i28 >> 1] = (HEAP32[i14 >> 2] | 0) + 1;
 i40 = HEAP32[i14 >> 2] | 0;
 if ((i40 | 0) == (HEAP32[i1 + 24 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i12, i4);
 } else {
  __ZN7WebCore8SVGGlyphC2ERKS0_((HEAP32[i12 >> 2] | 0) + (i40 * 52 & -1) | 0, i4);
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RtEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i6, i1 + 13344 | 0, i2, i28);
 STACKTOP = i5;
 return;
}
function __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i6 = i5 | 0;
 i7 = i5 + 56 | 0;
 i8 = i5 + 112 | 0;
 i9 = i5 + 168 | 0;
 i10 = i5 + 224 | 0;
 i11 = FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 31](i2, i1) | 0;
 i12 = FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 31](i3, i2) | 0;
 if (!i11) {
  if (!i12) {
   i13 = 0;
   STACKTOP = i5;
   return i13 | 0;
  }
  __ZN7WebCore8SVGGlyphC2ERKS0_(i10, i2);
  __ZN7WebCore8SVGGlyphaSERKS0_(i2, i3) | 0;
  __ZN7WebCore8SVGGlyphaSERKS0_(i3, i10) | 0;
  i11 = i10 + 48 | 0;
  i14 = HEAP32[i11 >> 2] | 0;
  i15 = i10 + 40 | 0;
  if ((i14 | 0) != 0) {
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = i16 + (i14 << 2) | 0;
   i14 = i16;
   while (1) {
    i16 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i16 | 0) != 0) {
      i18 = i16 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i16);
       break;
      } else {
       HEAP32[i18 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i14 = i14 + 4 | 0;
    if ((i14 | 0) == (i17 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
  }
  i11 = HEAP32[i15 >> 2] | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i15 >> 2] = 0;
   HEAP32[i10 + 44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN7WebCore4PathD1Ev(i10 + 36 | 0);
  i11 = HEAP32[i10 + 16 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i10 = i11 | 0;
    i15 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i10 >> 2] = i15;
     break;
    }
   }
  } while (0);
  if (!(FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 31](i2, i1) | 0)) {
   i13 = 1;
   STACKTOP = i5;
   return i13 | 0;
  }
  __ZN7WebCore8SVGGlyphC2ERKS0_(i9, i1);
  __ZN7WebCore8SVGGlyphaSERKS0_(i1, i2) | 0;
  __ZN7WebCore8SVGGlyphaSERKS0_(i2, i9) | 0;
  i11 = i9 + 48 | 0;
  i15 = HEAP32[i11 >> 2] | 0;
  i10 = i9 + 40 | 0;
  if ((i15 | 0) != 0) {
   i17 = HEAP32[i10 >> 2] | 0;
   i14 = i17 + (i15 << 2) | 0;
   i15 = i17;
   while (1) {
    i17 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i17 | 0) != 0) {
      i16 = i17 | 0;
      i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
      if ((i19 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i17);
       break;
      } else {
       HEAP32[i16 >> 2] = i19;
       break;
      }
     }
    } while (0);
    i15 = i15 + 4 | 0;
    if ((i15 | 0) == (i14 | 0)) {
     break;
    }
   }
   HEAP32[i11 >> 2] = 0;
  }
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i9 + 44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN7WebCore4PathD1Ev(i9 + 36 | 0);
  i11 = HEAP32[i9 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i13 = 2;
   STACKTOP = i5;
   return i13 | 0;
  }
  i9 = i11 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i11);
   i13 = 2;
   STACKTOP = i5;
   return i13 | 0;
  } else {
   HEAP32[i9 >> 2] = i10;
   i13 = 2;
   STACKTOP = i5;
   return i13 | 0;
  }
 }
 if (i12) {
  __ZN7WebCore8SVGGlyphC2ERKS0_(i8, i1);
  __ZN7WebCore8SVGGlyphaSERKS0_(i1, i3) | 0;
  __ZN7WebCore8SVGGlyphaSERKS0_(i3, i8) | 0;
  i12 = i8 + 48 | 0;
  i10 = HEAP32[i12 >> 2] | 0;
  i9 = i8 + 40 | 0;
  if ((i10 | 0) != 0) {
   i11 = HEAP32[i9 >> 2] | 0;
   i14 = i11 + (i10 << 2) | 0;
   i10 = i11;
   while (1) {
    i11 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i15 = i11 | 0;
      i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i15 >> 2] = i17;
       break;
      }
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i14 | 0)) {
     break;
    }
   }
   HEAP32[i12 >> 2] = 0;
  }
  i12 = HEAP32[i9 >> 2] | 0;
  if ((i12 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 + 44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i12);
  }
  __ZN7WebCore4PathD1Ev(i8 + 36 | 0);
  i12 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i13 = 1;
   STACKTOP = i5;
   return i13 | 0;
  }
  i8 = i12 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i12);
   i13 = 1;
   STACKTOP = i5;
   return i13 | 0;
  } else {
   HEAP32[i8 >> 2] = i9;
   i13 = 1;
   STACKTOP = i5;
   return i13 | 0;
  }
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i7, i1);
 __ZN7WebCore8SVGGlyphaSERKS0_(i1, i2) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i7) | 0;
 i1 = i7 + 48 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 i8 = i7 + 40 | 0;
 if ((i9 | 0) != 0) {
  i12 = HEAP32[i8 >> 2] | 0;
  i14 = i12 + (i9 << 2) | 0;
  i9 = i12;
  while (1) {
   i12 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i10 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i9 = i9 + 4 | 0;
   if ((i9 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i1 >> 2] = 0;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 __ZN7WebCore4PathD1Ev(i7 + 36 | 0);
 i1 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 31](i3, i2) | 0)) {
  i13 = 1;
  STACKTOP = i5;
  return i13 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i6, i2);
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i3) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i3, i6) | 0;
 i3 = i6 + 48 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i6 + 40 | 0;
 if ((i2 | 0) != 0) {
  i1 = HEAP32[i4 >> 2] | 0;
  i8 = i1 + (i2 << 2) | 0;
  i2 = i1;
  while (1) {
   i1 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i7 = i1 | 0;
     i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i7 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i6 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore4PathD1Ev(i6 + 36 | 0);
 i3 = HEAP32[i6 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i13 = 2;
  STACKTOP = i5;
  return i13 | 0;
 }
 i6 = i3 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i13 = 2;
  STACKTOP = i5;
  return i13 | 0;
 } else {
  HEAP32[i6 >> 2] = i4;
  i13 = 2;
  STACKTOP = i5;
  return i13 | 0;
 }
 return 0;
}
function __ZN7WebCoreL32kerningForPairOfStringsAndGlyphsERKNS_13SVGKerningMapERKN3WTF6StringES6_S6_S6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i6 = i3 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = i1 + 20 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i1 + 28 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i3 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
   }
   i11 = (i12 >>> 23) + ~i12 | 0;
   i13 = i11 << 12 ^ i11;
   i11 = i13 >>> 7 ^ i13;
   i13 = i11 << 2 ^ i11;
   i11 = i13 >>> 20 ^ i13 | 1;
   i13 = i12;
   i14 = 0;
   while (1) {
    i15 = i13 & i10;
    i16 = i8 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    i18 = i17;
    if ((i18 | 0) == 0) {
     break L1;
    } else if ((i18 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i17, HEAP32[i6 >> 2] | 0) | 0) {
      break;
     }
    }
    i17 = (i14 | 0) == 0 ? i11 : i14;
    i13 = i17 + i15 | 0;
    i14 = i17;
   }
   if ((i16 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i9 >> 2] | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   i11 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i11 + 16 >> 2] | 0;
   if (i8 >>> 0 > 127 >>> 0) {
    i19 = i8 >>> 7;
   } else {
    i19 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i11) | 0;
   }
   i11 = (i19 >>> 23) + ~i19 | 0;
   i8 = i11 << 12 ^ i11;
   i11 = i8 >>> 7 ^ i8;
   i8 = i11 << 2 ^ i11;
   i11 = i8 >>> 20 ^ i8 | 1;
   i8 = i19;
   i10 = 0;
   while (1) {
    i20 = i8 & i14;
    i17 = HEAP32[i13 + (i20 << 3) >> 2] | 0;
    i15 = i17;
    if ((i15 | 0) == 0) {
     i21 = 0;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i17, HEAP32[i6 >> 2] | 0) | 0) {
      i22 = 19;
      break;
     }
    }
    i17 = (i10 | 0) == 0 ? i11 : i10;
    i8 = i17 + i20 | 0;
    i10 = i17;
   }
   if ((i22 | 0) == 19) {
    i21 = HEAP32[i13 + (i20 << 3) + 4 >> 2] | 0;
   }
   i10 = HEAP32[i21 >> 2] | 0;
   i8 = i10 + ((HEAP32[i21 + 8 >> 2] | 0) * 56 & -1) | 0;
   while (1) {
    i23 = i8 - 56 | 0;
    if ((i8 | 0) == (i10 | 0)) {
     break L1;
    }
    if (__ZN7WebCoreL7matchesERKN3WTF6StringES3_RKNS_10SVGKerningE(i4, i5, i23) | 0) {
     break;
    } else {
     i8 = i23;
    }
   }
   d24 = +HEAPF32[i23 >> 2];
   return +d24;
  }
 } while (0);
 i23 = i2 | 0;
 i2 = HEAP32[i23 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d24 = +0;
  return +d24;
 }
 if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
  d24 = +0;
  return +d24;
 }
 i21 = i1 | 0;
 i20 = HEAP32[i21 >> 2] | 0;
 L40 : do {
  if ((i20 | 0) != 0) {
   i6 = i1 + 8 | 0;
   i19 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i2 + 16 >> 2] | 0;
   if (i16 >>> 0 > 127 >>> 0) {
    i25 = i16 >>> 7;
   } else {
    i25 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
   }
   i16 = (i25 >>> 23) + ~i25 | 0;
   i12 = i16 << 12 ^ i16;
   i16 = i12 >>> 7 ^ i12;
   i12 = i16 << 2 ^ i16;
   i16 = i12 >>> 20 ^ i12 | 1;
   i12 = i25;
   i3 = 0;
   while (1) {
    i8 = i12 & i19;
    i26 = i20 + (i8 << 3) | 0;
    i10 = HEAP32[i26 >> 2] | 0;
    i13 = i10;
    if ((i13 | 0) == 0) {
     break L40;
    } else if ((i13 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i10, HEAP32[i23 >> 2] | 0) | 0) {
      break;
     }
    }
    i10 = (i3 | 0) == 0 ? i16 : i3;
    i12 = i10 + i8 | 0;
    i3 = i10;
   }
   if ((i26 | 0) == 0) {
    break;
   }
   i3 = HEAP32[i6 >> 2] | 0;
   i12 = HEAP32[i21 >> 2] | 0;
   i16 = HEAP32[i23 >> 2] | 0;
   i19 = HEAP32[i16 + 16 >> 2] | 0;
   if (i19 >>> 0 > 127 >>> 0) {
    i27 = i19 >>> 7;
   } else {
    i27 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i16) | 0;
   }
   i16 = (i27 >>> 23) + ~i27 | 0;
   i19 = i16 << 12 ^ i16;
   i16 = i19 >>> 7 ^ i19;
   i19 = i16 << 2 ^ i16;
   i16 = i19 >>> 20 ^ i19 | 1;
   i19 = i27;
   i10 = 0;
   while (1) {
    i28 = i19 & i3;
    i8 = HEAP32[i12 + (i28 << 3) >> 2] | 0;
    i13 = i8;
    if ((i13 | 0) == 0) {
     i29 = 0;
     break;
    } else if ((i13 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i8, HEAP32[i23 >> 2] | 0) | 0) {
      i22 = 42;
      break;
     }
    }
    i8 = (i10 | 0) == 0 ? i16 : i10;
    i19 = i8 + i28 | 0;
    i10 = i8;
   }
   if ((i22 | 0) == 42) {
    i29 = HEAP32[i12 + (i28 << 3) + 4 >> 2] | 0;
   }
   i10 = HEAP32[i29 >> 2] | 0;
   i19 = i10 + ((HEAP32[i29 + 8 >> 2] | 0) * 56 & -1) | 0;
   while (1) {
    i30 = i19 - 56 | 0;
    if ((i19 | 0) == (i10 | 0)) {
     break L40;
    }
    if (__ZN7WebCoreL7matchesERKN3WTF6StringES3_RKNS_10SVGKerningE(i4, i5, i30) | 0) {
     break;
    } else {
     i19 = i30;
    }
   }
   d24 = +HEAPF32[i30 >> 2];
   return +d24;
  }
 } while (0);
 i30 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i30 | 0) == 0) {
  d24 = +0;
  return +d24;
 }
 i29 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = i29 + (i30 * 108 & -1) | 0;
 i28 = i29 + ((i30 - 1 | 0) * 108 & -1) | 0;
 L74 : while (1) {
  i30 = HEAP32[i23 >> 2] | 0;
  L76 : do {
   if ((i30 | 0) != 0) {
    if ((HEAP32[i30 + 4 >> 2] | 0) == 0) {
     break;
    }
    i27 = HEAP32[i1 - 108 + 64 >> 2] | 0;
    if ((i27 | 0) == 0) {
     break;
    }
    i21 = i30 + 8 | 0;
    if ((HEAP32[i30 + 16 >> 2] & 32 | 0) == 0) {
     i31 = HEAP16[HEAP32[i21 >> 2] >> 1] | 0;
    } else {
     i31 = HEAPU8[HEAP32[i21 >> 2] | 0] | 0;
    }
    i21 = HEAP32[i1 - 108 + 56 >> 2] | 0;
    i26 = i21 + (i27 << 3) | 0;
    i27 = i31 & 65535;
    i20 = i21;
    while (1) {
     if (i27 >>> 0 >= (HEAP32[i20 >> 2] | 0) >>> 0) {
      if (i27 >>> 0 <= (HEAP32[i20 + 4 >> 2] | 0) >>> 0) {
       break;
      }
     }
     i20 = i20 + 8 | 0;
     if ((i20 | 0) == (i26 | 0)) {
      break L76;
     }
    }
    if (__ZN7WebCoreL7matchesERKN3WTF6StringES3_RKNS_10SVGKerningE(i4, i5, i28 | 0) | 0) {
     break L74;
    }
   }
  } while (0);
  if ((i28 | 0) == (i29 | 0)) {
   d24 = +0;
   i22 = 64;
   break;
  }
  i1 = i28;
  i28 = i28 - 108 | 0;
 }
 if ((i22 | 0) == 64) {
  return +d24;
 }
 d24 = +HEAPF32[i28 >> 2];
 return +d24;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 4 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
   i13 = 0;
  } else {
   i14 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i14 | 0) ? i11 : i14;
   i13 = i11;
  }
  HEAP32[i10 >> 2] = i12;
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = i12 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 * 12 & -1) | 0;
  L7 : do {
   if ((i13 | 0) != 0) {
    i12 = i6 | 0;
    i11 = 0;
    while (1) {
     i14 = i11 * 12 & -1 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else if ((i15 | 0) != (-1 | 0)) {
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i6, i2, i14 | 0);
      i15 = HEAP32[i12 >> 2] | 0;
      i16 = i14;
      HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     }
     i11 = i11 + 1 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break L7;
     }
    }
    _llvm_trap();
   }
  } while (0);
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = i10;
 } else {
  i17 = i9;
  i18 = i2 + 8 | 0;
 }
 i9 = HEAP32[i18 >> 2] | 0;
 i10 = i3;
 i13 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i10 + 2 >> 1] | 0) << 11 ^ i13 ^ i13 << 16;
 i13 = i3 + 4 | 0;
 i11 = i6 + (HEAPU16[i13 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i11 ^ (HEAPU16[i10 + 6 >> 1] | 0) << 11 ^ i11 << 16;
 i11 = (i6 >>> 11) + i6 | 0;
 i6 = i11 << 3 ^ i11;
 i11 = (i6 >>> 5) + i6 | 0;
 i6 = i11 << 2 ^ i11;
 i11 = (i6 >>> 15) + i6 | 0;
 i6 = (i11 << 10 ^ i11) & 16777215;
 i11 = (i6 | 0) == 0 ? 8388608 : i6;
 i6 = i3 | 0;
 i10 = (i11 >>> 23) + ~i11 | 0;
 i12 = i10 << 12 ^ i10;
 i10 = i12 >>> 7 ^ i12;
 i12 = i10 << 2 ^ i10;
 i10 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i16 = i11;
 i11 = 0;
 while (1) {
  i15 = i16 & i9;
  i19 = i17 + (i15 * 12 & -1) | 0;
  i14 = HEAP32[i19 >> 2] | 0;
  if ((i14 | 0) == 0) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   }
  }
  if ((i14 | 0) == (HEAP32[i6 >> 2] | 0)) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
    i20 = 17;
    break;
   }
  }
  i21 = (i11 | 0) == 0 ? i10 : i11;
  i12 = (i14 | 0) == -1 ? i19 : i12;
  i16 = i21 + i15 | 0;
  i11 = i21;
 }
 if ((i20 | 0) == 17) {
  i11 = i17 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = i19;
  HEAP32[i17 + 4 >> 2] = i11;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i12 | 0) == 0) {
  i22 = i19;
  i23 = i2 + 16 | 0;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i19 = i2 + 16 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
  i22 = i12;
  i23 = i19;
 }
 i19 = i3;
 i3 = i22;
 i12 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i3 + 4 >> 2] = i12;
 HEAP32[i22 + 8 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i12 << 1 | 0) < (i3 | 0)) {
  i24 = i22;
  i25 = i3;
 } else {
  i19 = (i3 | 0) == 0;
  if (i19) {
   i26 = 8;
  } else {
   i11 = i3 << 1;
   i26 = (i12 * 6 & -1 | 0) < (i11 | 0) ? i3 : i11;
  }
  i11 = HEAP32[i8 >> 2] | 0;
  HEAP32[i4 >> 2] = i26;
  HEAP32[i18 >> 2] = i26 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i26 * 12 & -1) | 0;
  if (i19) {
   i27 = 0;
  } else {
   i19 = i7 | 0;
   i26 = 0;
   i18 = 0;
   while (1) {
    i12 = i11 + (i26 * 12 & -1) | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    i16 = i17;
    if ((i16 | 0) == 0) {
     if ((HEAP32[i11 + (i26 * 12 & -1) + 4 >> 2] | 0) == 0 | (i17 | 0) == -1) {
      i28 = i18;
     } else {
      i20 = 29;
     }
    } else if ((i16 | 0) == (-1 | 0)) {
     i28 = i18;
    } else {
     i20 = 29;
    }
    if ((i20 | 0) == 29) {
     i20 = 0;
     __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i7, i2, i12 | 0);
     i16 = HEAP32[i19 >> 2] | 0;
     i17 = i16;
     i10 = i12;
     HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     i28 = (i12 | 0) == (i22 | 0) ? i16 : i18;
    }
    i16 = i26 + 1 | 0;
    if ((i16 | 0) == (i3 | 0)) {
     i27 = i28;
     break;
    } else {
     i26 = i16;
     i18 = i28;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
  i24 = i27;
  i25 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i8 >> 2] | 0) + (i25 * 12 & -1) | 0;
 i25 = i1;
 HEAP32[i25 >> 2] = i24;
 HEAP32[i25 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZNSt3__17__sort5IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_S9_T_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i8 = i7 | 0;
 i9 = i7 + 56 | 0;
 i10 = i7 + 112 | 0;
 i11 = i7 + 168 | 0;
 i12 = __ZNSt3__17__sort4IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i2, i3, i4, i6) | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 31](i5, i4) | 0)) {
  i13 = i12;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i11, i4);
 __ZN7WebCore8SVGGlyphaSERKS0_(i4, i5) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i5, i11) | 0;
 i5 = i11 + 48 | 0;
 i14 = HEAP32[i5 >> 2] | 0;
 i15 = i11 + 40 | 0;
 if ((i14 | 0) != 0) {
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16 + (i14 << 2) | 0;
  i14 = i16;
  while (1) {
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i18 = i16 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i14 = i14 + 4 | 0;
   if ((i14 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i15 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i11 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN7WebCore4PathD1Ev(i11 + 36 | 0);
 i5 = HEAP32[i11 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i11 = i5 | 0;
   i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i11 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 31](i4, i3) | 0)) {
  i13 = i12 + 1 | 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i10, i3);
 __ZN7WebCore8SVGGlyphaSERKS0_(i3, i4) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i4, i10) | 0;
 i4 = i10 + 48 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i15 = i10 + 40 | 0;
 if ((i5 | 0) != 0) {
  i11 = HEAP32[i15 >> 2] | 0;
  i17 = i11 + (i5 << 2) | 0;
  i5 = i11;
  while (1) {
   i11 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i14 = i11 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i14 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i15 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i10 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN7WebCore4PathD1Ev(i10 + 36 | 0);
 i4 = HEAP32[i10 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i10 = i4 | 0;
   i15 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i10 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 31](i3, i2) | 0)) {
  i13 = i12 + 2 | 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i9, i2);
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i3) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i3, i9) | 0;
 i3 = i9 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i15 = i9 + 40 | 0;
 if ((i4 | 0) != 0) {
  i10 = HEAP32[i15 >> 2] | 0;
  i17 = i10 + (i4 << 2) | 0;
  i4 = i10;
  while (1) {
   i10 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i5 = i10 | 0;
     i11 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i5 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i17 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i15 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i9 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore4PathD1Ev(i9 + 36 | 0);
 i3 = HEAP32[i9 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i15;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 31](i2, i1) | 0)) {
  i13 = i12 + 3 | 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i8, i1);
 __ZN7WebCore8SVGGlyphaSERKS0_(i1, i2) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i8) | 0;
 i2 = i8 + 48 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i6 = i8 + 40 | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i15 = i3 + (i1 << 2) | 0;
  i1 = i3;
  while (1) {
   i3 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i9 = i3 | 0;
     i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i9 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i8 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore4PathD1Ev(i8 + 36 | 0);
 i2 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = i2 | 0;
   i6 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i8 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i13 = i12 + 4 | 0;
 STACKTOP = i7;
 return i13 | 0;
}
function __ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEbT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 56 | 0;
 switch ((i2 - i1 | 0) / 52 & -1 | 0) {
 case 2:
  {
   i7 = i2 - 52 | 0;
   if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i7, i1) | 0)) {
    i8 = 1;
    STACKTOP = i4;
    return i8 | 0;
   }
   __ZN7WebCore8SVGGlyphC2ERKS0_(i5, i1);
   __ZN7WebCore8SVGGlyphaSERKS0_(i1, i7) | 0;
   __ZN7WebCore8SVGGlyphaSERKS0_(i7, i5) | 0;
   i7 = i5 + 48 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i10 = i5 + 40 | 0;
   if ((i9 | 0) != 0) {
    i11 = HEAP32[i10 >> 2] | 0;
    i12 = i11 + (i9 << 2) | 0;
    i9 = i11;
    while (1) {
     i11 = HEAP32[i9 >> 2] | 0;
     do {
      if ((i11 | 0) != 0) {
       i13 = i11 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
       if ((i14 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i11);
        break;
       } else {
        HEAP32[i13 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i9 = i9 + 4 | 0;
     if ((i9 | 0) == (i12 | 0)) {
      break;
     }
    }
    HEAP32[i7 >> 2] = 0;
   }
   i7 = HEAP32[i10 >> 2] | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i10 >> 2] = 0;
    HEAP32[i5 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i7);
   }
   __ZN7WebCore4PathD1Ev(i5 + 36 | 0);
   i7 = HEAP32[i5 + 16 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 1;
    STACKTOP = i4;
    return i8 | 0;
   }
   i5 = i7 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    i8 = 1;
    STACKTOP = i4;
    return i8 | 0;
   } else {
    HEAP32[i5 >> 2] = i10;
    i8 = 1;
    STACKTOP = i4;
    return i8 | 0;
   }
   break;
  }
 case 0:
 case 1:
  {
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
 case 5:
  {
   __ZNSt3__17__sort5IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_S9_T_(i1, i1 + 52 | 0, i1 + 104 | 0, i1 + 156 | 0, i2 - 52 | 0, i3) | 0;
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
 case 4:
  {
   __ZNSt3__17__sort4IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i1 + 52 | 0, i1 + 104 | 0, i2 - 52 | 0, i3) | 0;
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
 case 3:
  {
   __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i1, i1 + 52 | 0, i2 - 52 | 0, i3) | 0;
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
 default:
  {
   i10 = i1 + 104 | 0;
   __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i1, i1 + 52 | 0, i10, i3) | 0;
   i5 = i1 + 156 | 0;
   if ((i5 | 0) == (i2 | 0)) {
    i8 = 1;
    STACKTOP = i4;
    return i8 | 0;
   }
   i7 = i6 + 48 | 0;
   i12 = i6 + 40 | 0;
   i9 = i6 + 36 | 0;
   i11 = i6 + 16 | 0;
   i14 = i6 + 44 | 0;
   i13 = i10;
   i10 = 0;
   i15 = 0;
   i16 = i5;
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i16, i13) | 0) {
     __ZN7WebCore8SVGGlyphC2ERKS0_(i6, i16);
     i5 = i13;
     i17 = i16;
     while (1) {
      __ZN7WebCore8SVGGlyphaSERKS0_(i17, i5) | 0;
      if ((i5 | 0) == (i1 | 0)) {
       i18 = i1;
       break;
      }
      i19 = i5 - 52 | 0;
      if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i6, i19) | 0) {
       i17 = i5;
       i5 = i19;
      } else {
       i18 = i5;
       break;
      }
     }
     __ZN7WebCore8SVGGlyphaSERKS0_(i18, i6) | 0;
     i5 = i15 + 1 | 0;
     if ((i5 | 0) == 8) {
      i17 = i16 + 52 | 0;
      i20 = 1;
      i21 = i17;
      i22 = (i17 | 0) == (i2 | 0);
     } else {
      i20 = 0;
      i21 = i16;
      i22 = i10;
     }
     i17 = HEAP32[i7 >> 2] | 0;
     if ((i17 | 0) != 0) {
      i19 = HEAP32[i12 >> 2] | 0;
      i23 = i19 + (i17 << 2) | 0;
      i17 = i19;
      while (1) {
       i19 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i19 | 0) != 0) {
         i24 = i19 | 0;
         i25 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
         if ((i25 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i19);
          break;
         } else {
          HEAP32[i24 >> 2] = i25;
          break;
         }
        }
       } while (0);
       i17 = i17 + 4 | 0;
       if ((i17 | 0) == (i23 | 0)) {
        break;
       }
      }
      HEAP32[i7 >> 2] = 0;
     }
     i23 = HEAP32[i12 >> 2] | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i12 >> 2] = 0;
      HEAP32[i14 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i23);
     }
     __ZN7WebCore4PathD1Ev(i9);
     i23 = HEAP32[i11 >> 2] | 0;
     do {
      if ((i23 | 0) != 0) {
       i17 = i23 | 0;
       i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i17 >> 2] = i19;
        break;
       }
      }
     } while (0);
     if (i20) {
      i8 = i22;
      i26 = 53;
      break;
     } else {
      i27 = i21;
      i28 = i5;
      i29 = i22;
     }
    } else {
     i27 = i16;
     i28 = i15;
     i29 = i10;
    }
    i23 = i27 + 52 | 0;
    if ((i23 | 0) == (i2 | 0)) {
     i8 = 1;
     i26 = 46;
     break;
    } else {
     i13 = i27;
     i10 = i29;
     i15 = i28;
     i16 = i23;
    }
   }
   if ((i26 | 0) == 46) {
    STACKTOP = i4;
    return i8 | 0;
   } else if ((i26 | 0) == 53) {
    STACKTOP = i4;
    return i8 | 0;
   }
  }
 }
 return 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SD_SF_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = i3 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i10 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i14 = i9 >>> 7;
 } else {
  i14 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
 }
 i10 = (i14 >>> 23) + ~i14 | 0;
 i9 = i10 << 12 ^ i10;
 i10 = i9 >>> 7 ^ i9;
 i9 = i10 << 2 ^ i10;
 i10 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i8 = i14;
 i14 = 0;
 while (1) {
  i11 = i8 & i6;
  i15 = i12 + (i11 << 3) | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16;
  if ((i17 | 0) == (-1 | 0)) {
   i18 = i15;
  } else if ((i17 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i7 >> 2] | 0) | 0) {
    i19 = 16;
    break;
   } else {
    i18 = i9;
   }
  }
  i16 = (i14 | 0) == 0 ? i10 : i14;
  i9 = i18;
  i8 = i16 + i11 | 0;
  i14 = i16;
 }
 if ((i19 | 0) == 16) {
  i19 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i14 = i1;
  HEAP32[i14 >> 2] = i15;
  HEAP32[i14 + 4 >> 2] = i19;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i20 = i15;
  i21 = i2 + 16 | 0;
 } else {
  i15 = i9;
  HEAP32[i15 >> 2] = 0;
  HEAP32[i15 + 4 >> 2] = 0;
  i15 = i2 + 16 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - 1;
  i20 = i9;
  i21 = i15;
 }
 __ZN3WTF17HashMapTranslatorINS_7HashMapINS_6StringENSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEENS_10StringHashENS_10HashTraitsIS2_EENSE_ISC_EEE18KeyValuePairTraitsESD_E9translateINS_12KeyValuePairIS2_SC_EERKS2_SC_EEvRT_OT0_OT1_(i20, i3, i4);
 i4 = i2 + 12 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i4 = i2 + 4 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i21 >> 2] | 0) + i3 << 1 | 0) < (i15 | 0)) {
  i22 = i20;
  i23 = i15;
 } else {
  if ((i15 | 0) == 0) {
   i24 = 8;
   i25 = 0;
  } else {
   i9 = i15 << 1;
   i24 = (i3 * 6 & -1 | 0) < (i9 | 0) ? i15 : i9;
   i25 = i15;
  }
  i15 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i24;
  HEAP32[i13 >> 2] = i24 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i24 << 3) | 0;
  if ((i25 | 0) == 0) {
   i26 = 0;
  } else {
   i24 = 0;
   i13 = 0;
   while (1) {
    i9 = i15 + (i24 << 3) | 0;
    i3 = HEAP32[i9 >> 2] | 0;
    if ((i3 | 0) == (-1 | 0) | (i3 | 0) == 0) {
     i27 = i13;
    } else {
     i3 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_(i2, i9) | 0;
     i27 = (i9 | 0) == (i20 | 0) ? i3 : i13;
    }
    i3 = i24 + 1 | 0;
    if ((i3 | 0) == (i25 | 0)) {
     i26 = i27;
     break;
    } else {
     i24 = i3;
     i13 = i27;
    }
   }
  }
  HEAP32[i21 >> 2] = 0;
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i15, i25);
  i22 = i26;
  i23 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i23 << 3) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = i2 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 8;
   i10 = 0;
  } else {
   i11 = i8 << 1;
   i9 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i8 : i11;
   i10 = i8;
  }
  HEAP32[i7 >> 2] = i9;
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = i9 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i9 << 3) | 0;
  if ((i10 | 0) != 0) {
   i9 = 0;
   while (1) {
    i8 = i9 << 3 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_(i2, i8) | 0;
    }
    i9 = i9 + 1 | 0;
    if ((i9 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(0, i10);
  i12 = HEAP32[i5 >> 2] | 0;
  i13 = i7;
 } else {
  i12 = i6;
  i13 = i2 + 8 | 0;
 }
 i6 = HEAP32[i13 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = i7 + ~(i7 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = i10 & i6;
 i8 = i12 + (i9 << 3) | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i14 = i8;
   i15 = i7;
  } else {
   i16 = (i10 >>> 23) + ~i10 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = 0;
   i19 = i9;
   i20 = i8;
   i21 = i11;
   while (1) {
    if ((i21 | 0) == (i7 | 0)) {
     i22 = 13;
     break;
    }
    i23 = (i21 | 0) == -1 ? i20 : i18;
    i24 = (i17 | 0) == 0 ? i16 : i17;
    i25 = i24 + i19 & i6;
    i26 = i12 + (i25 << 3) | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    if ((i27 | 0) == 0) {
     i22 = 15;
     break;
    } else {
     i17 = i24;
     i18 = i23;
     i19 = i25;
     i20 = i26;
     i21 = i27;
    }
   }
   if ((i22 | 0) == 15) {
    if ((i23 | 0) == 0) {
     i14 = i26;
     i15 = i7;
     break;
    }
    i21 = i23;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i21 + 4 >> 2] = 0;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i14 = i23;
    i15 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i22 | 0) == 13) {
    i21 = i12 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i19 = i1;
    HEAP32[i19 >> 2] = i20;
    HEAP32[i19 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i14 >> 2] = i15;
 i15 = HEAP32[i4 >> 2] | 0;
 if ((i15 | 0) != 0) {
  i4 = i15 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i14 + 4 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i15;
 if ((i12 | 0) != 0) {
  __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i12 | 0);
 }
 i12 = i2 + 12 | 0;
 i15 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
 HEAP32[i12 >> 2] = i15;
 i12 = i2 + 16 | 0;
 i4 = i2 + 4 | 0;
 i22 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i12 >> 2] | 0) + i15 << 1 | 0) < (i22 | 0)) {
  i28 = i14;
  i29 = i22;
 } else {
  if ((i22 | 0) == 0) {
   i30 = 8;
   i31 = 0;
  } else {
   i3 = i22 << 1;
   i30 = (i15 * 6 & -1 | 0) < (i3 | 0) ? i22 : i3;
   i31 = i22;
  }
  i22 = HEAP32[i5 >> 2] | 0;
  HEAP32[i4 >> 2] = i30;
  HEAP32[i13 >> 2] = i30 - 1;
  HEAP32[i5 >> 2] = __ZN3WTF16fastZeroedMallocEj(i30 << 3) | 0;
  if ((i31 | 0) == 0) {
   i32 = 0;
  } else {
   i30 = 0;
   i13 = 0;
   while (1) {
    i3 = i22 + (i30 << 3) | 0;
    i15 = HEAP32[i3 >> 2] | 0;
    if ((i15 | 0) == (-1 | 0) | (i15 | 0) == 0) {
     i33 = i13;
    } else {
     i15 = __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_(i2, i3) | 0;
     i33 = (i3 | 0) == (i14 | 0) ? i15 : i13;
    }
    i15 = i30 + 1 | 0;
    if ((i15 | 0) == (i31 | 0)) {
     i32 = i33;
     break;
    } else {
     i30 = i15;
     i13 = i33;
    }
   }
  }
  HEAP32[i12 >> 2] = 0;
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i22, i31);
  i28 = i32;
  i29 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i29 << 3) | 0;
 i29 = i1;
 HEAP32[i29 >> 2] = i28;
 HEAP32[i29 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11SVGGlyphMap22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 0;
   i11 = 0;
  } else {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
    i12 = HEAP32[i2 + 8 >> 2] | 0;
    i13 = i2;
   } else {
    i14 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
    i12 = i14;
    i13 = HEAP32[i1 >> 2] | 0;
   }
   if ((i13 | 0) == 0) {
    i10 = 0;
    i11 = i12;
    break;
   }
   i10 = HEAP32[i13 + 4 >> 2] | 0;
   i11 = i12;
  }
 } while (0);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore30SurrogatePairAwareTextIteratorC1EPKtiii(i8, i11, 0, i10, i10);
 i10 = i8 + 4 | 0;
 i11 = i8 + 8 | 0;
 L9 : do {
  if ((HEAP32[i10 >> 2] | 0) < (HEAP32[i11 >> 2] | 0)) {
   i12 = i8 | 0;
   i13 = i3 + 8 | 0;
   i1 = i3 + 4 | 0;
   i2 = i3 | 0;
   i14 = i9;
   while (1) {
    i15 = HEAP16[HEAP32[i12 >> 2] >> 1] | 0;
    i16 = i15 & 65535;
    HEAP32[i6 >> 2] = i16;
    HEAP32[i7 >> 2] = 1;
    if ((i15 & 65535) >>> 0 < 12353 >>> 0) {
     i17 = i16;
    } else {
     if (!(__ZN7WebCore30SurrogatePairAwareTextIterator15consumeSlowCaseERiRj(i8, i6, i7) | 0)) {
      i18 = i2;
      i19 = i13;
      break L9;
     }
     i17 = HEAP32[i6 >> 2] | 0;
    }
    i16 = HEAP32[i14 + 8 >> 2] | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    i20 = i17 + ~(i17 << 15) | 0;
    i21 = (i20 >>> 10 ^ i20) * 9 & -1;
    i20 = i21 >>> 6 ^ i21;
    i21 = i20 + ~(i20 << 11) | 0;
    i20 = i21 >>> 16 ^ i21;
    if ((i15 | 0) == 0) {
     i18 = i2;
     i19 = i13;
     break L9;
    }
    i21 = i20 & i16;
    i22 = i15 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == (i17 | 0)) {
     i24 = i22;
    } else {
     i22 = (i20 >>> 23) + ~i20 | 0;
     i20 = i22 << 12 ^ i22;
     i22 = i20 >>> 7 ^ i20;
     i20 = i22 << 2 ^ i22;
     i22 = i20 >>> 20 ^ i20 | 1;
     i20 = 0;
     i25 = i21;
     i21 = i23;
     while (1) {
      if ((i21 | 0) == 0) {
       i18 = i2;
       i19 = i13;
       break L9;
      }
      i23 = (i20 | 0) == 0 ? i22 : i20;
      i26 = i23 + i25 & i16;
      i27 = i15 + (i26 << 3) | 0;
      i28 = HEAP32[i27 >> 2] | 0;
      if ((i28 | 0) == (i17 | 0)) {
       i24 = i27;
       break;
      } else {
       i20 = i23;
       i25 = i26;
       i21 = i28;
      }
     }
    }
    if ((i24 | 0) == 0) {
     i18 = i2;
     i19 = i13;
     break L9;
    }
    i21 = HEAP32[i24 + 4 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i18 = i2;
     i19 = i13;
     break L9;
    }
    i25 = i21 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
    i25 = HEAP32[i21 + 4 >> 2] | 0;
    i20 = HEAP32[i21 + 12 >> 2] | 0;
    i15 = HEAP32[i13 >> 2] | 0;
    i16 = i15 + i20 | 0;
    i22 = HEAP32[i1 >> 2] | 0;
    if (i16 >>> 0 > i22 >>> 0) {
     i28 = i22 + 1 + (i22 >>> 2) | 0;
     i22 = i28 >>> 0 > 16 >>> 0 ? i28 : 16;
     __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i22 >>> 0 > i16 >>> 0 ? i22 : i16);
     i29 = HEAP32[i13 >> 2] | 0;
    } else {
     i29 = i15;
    }
    if (i16 >>> 0 < i29 >>> 0) {
     break;
    }
    i15 = HEAP32[i2 >> 2] | 0;
    if ((i20 | 0) != 0) {
     i22 = 0;
     while (1) {
      __ZN7WebCore8SVGGlyphC2ERKS0_(i15 + ((i22 + i29 | 0) * 52 & -1) | 0, i25 + (i22 * 52 & -1) | 0);
      i22 = i22 + 1 | 0;
      if (i22 >>> 0 >= i20 >>> 0) {
       break;
      }
     }
    }
    HEAP32[i13 >> 2] = i16;
    i20 = HEAP32[i7 >> 2] | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (i20 << 1);
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i20;
    __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i21 | 0);
    if ((HEAP32[i10 >> 2] | 0) < (HEAP32[i11 >> 2] | 0)) {
     i14 = i21 + 16 | 0;
    } else {
     i18 = i2;
     i19 = i13;
     break L9;
    }
   }
   _WTFCrash();
  } else {
   i18 = i3 | 0;
   i19 = i3 + 8 | 0;
  }
 } while (0);
 i3 = HEAP32[i18 >> 2] | 0;
 i18 = i3 + ((HEAP32[i19 >> 2] | 0) * 52 & -1) | 0;
 HEAP32[i5 >> 2] = F_BASE_iii + 24;
 __ZNSt3__16__sortIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i3, i18, i5);
 STACKTOP = i4;
 return;
}
function __ZNSt3__17__sort4IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_T_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i7 = i6 | 0;
 i8 = i6 + 56 | 0;
 i9 = i6 + 112 | 0;
 i10 = __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i1, i2, i3, i5) | 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 31](i4, i3) | 0)) {
  i11 = i10;
  STACKTOP = i6;
  return i11 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i9, i3);
 __ZN7WebCore8SVGGlyphaSERKS0_(i3, i4) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i4, i9) | 0;
 i4 = i9 + 48 | 0;
 i12 = HEAP32[i4 >> 2] | 0;
 i13 = i9 + 40 | 0;
 if ((i12 | 0) != 0) {
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14 + (i12 << 2) | 0;
  i12 = i14;
  while (1) {
   i14 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i16 = i14 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i12 = i12 + 4 | 0;
   if ((i12 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i4 >> 2] = 0;
 }
 i4 = HEAP32[i13 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i9 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN7WebCore4PathD1Ev(i9 + 36 | 0);
 i4 = HEAP32[i9 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 | 0;
   i13 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i9 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 31](i3, i2) | 0)) {
  i11 = i10 + 1 | 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i8, i2);
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i3) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i3, i8) | 0;
 i3 = i8 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i13 = i8 + 40 | 0;
 if ((i4 | 0) != 0) {
  i9 = HEAP32[i13 >> 2] | 0;
  i15 = i9 + (i4 << 2) | 0;
  i4 = i9;
  while (1) {
   i9 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i12 = i9 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i12 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i15 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i13 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i8 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN7WebCore4PathD1Ev(i8 + 36 | 0);
 i3 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i13 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i13;
    break;
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_iii[HEAP32[i5 >> 2] & 31](i2, i1) | 0)) {
  i11 = i10 + 2 | 0;
  STACKTOP = i6;
  return i11 | 0;
 }
 __ZN7WebCore8SVGGlyphC2ERKS0_(i7, i1);
 __ZN7WebCore8SVGGlyphaSERKS0_(i1, i2) | 0;
 __ZN7WebCore8SVGGlyphaSERKS0_(i2, i7) | 0;
 i2 = i7 + 48 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i5 = i7 + 40 | 0;
 if ((i1 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  i13 = i3 + (i1 << 2) | 0;
  i1 = i3;
  while (1) {
   i3 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i8 = i3 | 0;
     i15 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i8 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i13 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i7 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 __ZN7WebCore4PathD1Ev(i7 + 36 | 0);
 i2 = HEAP32[i7 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i11 = i10 + 3 | 0;
 STACKTOP = i6;
 return i11 | 0;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 | 0;
      i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i11 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i11;
       break;
      }
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i12 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i11 = HEAP32[i7 >> 2] | 0;
       i10 = i11 + (i4 << 2) | 0;
       i13 = i11;
       while (1) {
        i11 = HEAP32[i13 >> 2] | 0;
        do {
         if ((i11 | 0) != 0) {
          i14 = i11 | 0;
          i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
          if ((i15 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i11);
           break;
          } else {
           HEAP32[i14 >> 2] = i15;
           break;
          }
         }
        } while (0);
        i13 = i13 + 4 | 0;
        if ((i13 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i13 = i1 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i15 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i13 >> 2] = i10;
    i14 = i11;
    _memcpy(i10 | 0, i14 | 0, i15 << 2) | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] | 0) == (i11 | 0)) {
     HEAP32[i13 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i12 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i12 << 2) | 0;
 i9 = i1 | 0;
 if ((i12 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i12 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
   }
   i14 = i12 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i13 | 0) != 0) {
     i2 = i13 | 0;
     i14 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i2 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = i6 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i12 = i12 + 4 | 0;
    i6 = i13;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i16 + (i8 << 2) | 0;
 if ((i17 | 0) == (i8 | 0)) {
  i18 = i17;
 } else {
  i8 = i16 + (i17 << 2) | 0;
  i16 = (HEAP32[i9 >> 2] | 0) + (i17 << 2) | 0;
  while (1) {
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i16 >> 2] = i17;
   if ((i17 | 0) != 0) {
    i9 = i17 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i16 = i16 + 4 | 0;
   }
  }
  i18 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i18;
 return i1 | 0;
}
function __ZN7WebCore14SVGKerningPairC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 __ZN7WebCore10SVGKerningC2ERKS0_(i1 | 0, i2 | 0);
 i6 = HEAP32[i2 + 60 >> 2] | 0;
 i7 = i2 + 64 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 60 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = i8;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 3) | 0;
   HEAP32[i10 >> 2] = i8 >>> 3;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i2 + 56 >> 2] | 0, HEAP32[i7 >> 2] << 3) | 0;
  }
 } while (0);
 i7 = i1 + 68 | 0;
 i9 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 68 >> 2] | 0;
 i10 = HEAP32[i2 + 72 >> 2] | 0;
 i6 = i7 + (i10 << 2) | 0;
 L8 : do {
  if ((HEAP32[i2 + 80 >> 2] | 0) != 0) {
   L10 : do {
    if ((i10 | 0) == 0) {
     i12 = i7;
    } else {
     i11 = i7;
     while (1) {
      i8 = HEAP32[i11 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i12 = i11;
       break L10;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i6 | 0)) {
       break L8;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i6 | 0)) {
    break;
   } else {
    i13 = i12;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i9, i13, i13);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i6 | 0)) {
     break L8;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i6 | 0)) {
      break L8;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i6 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = i1 + 88 | 0;
 i1 = i14 | 0;
 _memset(i14 | 0, 0, 20) | 0;
 i14 = HEAP32[i2 + 88 >> 2] | 0;
 i13 = HEAP32[i2 + 92 >> 2] | 0;
 i6 = i14 + (i13 << 2) | 0;
 if ((HEAP32[i2 + 100 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L25 : do {
  if ((i13 | 0) == 0) {
   i15 = i14;
  } else {
   i2 = i14;
   while (1) {
    i9 = HEAP32[i2 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i15 = i2;
     break L25;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i6 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i6 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i16 = i15;
 }
 L33 : while (1) {
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i1, i16, i16);
  i15 = i16 + 4 | 0;
  if ((i15 | 0) == (i6 | 0)) {
   i17 = 28;
   break;
  } else {
   i18 = i15;
  }
  while (1) {
   i15 = HEAP32[i18 >> 2] | 0;
   if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
    break;
   }
   i15 = i18 + 4 | 0;
   if ((i15 | 0) == (i6 | 0)) {
    i17 = 30;
    break L33;
   } else {
    i18 = i15;
   }
  }
  if ((i18 | 0) == (i6 | 0)) {
   i17 = 29;
   break;
  } else {
   i16 = i18;
  }
 }
 if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 29) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 30) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore10SVGKerningC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 HEAPF32[i1 >> 2] = +HEAPF32[i2 >> 2];
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = i2 + 12 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i8;
 do {
  if ((i6 | 0) != 0) {
   if (i6 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i6 << 3) | 0;
   HEAP32[i10 >> 2] = i8 >>> 3;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   HEAP32[i9 >> 2] = i11;
   if ((i11 | 0) == 0) {
    break;
   }
   _memcpy(i11 | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i7 >> 2] << 3) | 0;
  }
 } while (0);
 i7 = i1 + 16 | 0;
 i9 = i7 | 0;
 _memset(i7 | 0, 0, 20) | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 i6 = i7 + (i10 << 2) | 0;
 L8 : do {
  if ((HEAP32[i2 + 28 >> 2] | 0) != 0) {
   L10 : do {
    if ((i10 | 0) == 0) {
     i12 = i7;
    } else {
     i11 = i7;
     while (1) {
      i8 = HEAP32[i11 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i12 = i11;
       break L10;
      }
      i11 = i11 + 4 | 0;
      if ((i11 | 0) == (i6 | 0)) {
       break L8;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i6 | 0)) {
    break;
   } else {
    i13 = i12;
   }
   while (1) {
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i5, i9, i13, i13);
    i11 = i13 + 4 | 0;
    if ((i11 | 0) == (i6 | 0)) {
     break L8;
    } else {
     i14 = i11;
    }
    while (1) {
     i11 = HEAP32[i14 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i14 + 4 | 0;
     if ((i11 | 0) == (i6 | 0)) {
      break L8;
     } else {
      i14 = i11;
     }
    }
    if ((i14 | 0) == (i6 | 0)) {
     break;
    } else {
     i13 = i14;
    }
   }
  }
 } while (0);
 i14 = i1 + 36 | 0;
 i1 = i14 | 0;
 _memset(i14 | 0, 0, 20) | 0;
 i14 = HEAP32[i2 + 36 >> 2] | 0;
 i13 = HEAP32[i2 + 40 >> 2] | 0;
 i6 = i14 + (i13 << 2) | 0;
 if ((HEAP32[i2 + 48 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L25 : do {
  if ((i13 | 0) == 0) {
   i15 = i14;
  } else {
   i2 = i14;
   while (1) {
    i9 = HEAP32[i2 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i15 = i2;
     break L25;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i6 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i6 | 0)) {
  STACKTOP = i3;
  return;
 } else {
  i16 = i15;
 }
 L33 : while (1) {
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i1, i16, i16);
  i15 = i16 + 4 | 0;
  if ((i15 | 0) == (i6 | 0)) {
   i17 = 28;
   break;
  } else {
   i18 = i15;
  }
  while (1) {
   i15 = HEAP32[i18 >> 2] | 0;
   if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
    break;
   }
   i15 = i18 + 4 | 0;
   if ((i15 | 0) == (i6 | 0)) {
    i17 = 30;
    break L33;
   } else {
    i18 = i15;
   }
  }
  if ((i18 | 0) == (i6 | 0)) {
   i17 = 29;
   break;
  } else {
   i16 = i18;
  }
 }
 if ((i17 | 0) == 30) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 28) {
  STACKTOP = i3;
  return;
 } else if ((i17 | 0) == 29) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_14SVGFontElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(32) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 32;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 63](i18);
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RtEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP16[i18 + 4 >> 1] = HEAP16[i4 >> 1] | 0;
 i4 = i2 + 12 | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i13;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i13 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i8 << 1;
   i21 = (i13 * 6 & -1 | 0) < (i9 | 0) ? i8 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
     i26 = 9;
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
   if ((i26 | 0) == 9) {
    i26 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   HEAP16[i27 + 4 >> 1] = HEAP16[i7 + (i10 << 3) + 4 >> 1] | 0;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 3) >> 2] | 0;
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
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN7WebCoreL7matchesERKN3WTF6StringES3_RKNS_10SVGKerningE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   i5 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i3 + 44 >> 2] | 0;
   i7 = HEAP32[i2 + 16 >> 2] | 0;
   if (i7 >>> 0 > 127 >>> 0) {
    i8 = i7 >>> 7;
   } else {
    i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
   }
   i7 = (i8 >>> 23) + ~i8 | 0;
   i9 = i7 << 12 ^ i7;
   i7 = i9 >>> 7 ^ i9;
   i9 = i7 << 2 ^ i7;
   i7 = i9 >>> 20 ^ i9 | 1;
   i9 = i8;
   i10 = 0;
   while (1) {
    i11 = i9 & i6;
    i12 = i5 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     break L1;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i4 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i10 | 0) == 0 ? i7 : i10;
    i9 = i13 + i11 | 0;
    i10 = i13;
   }
   if ((i12 | 0) == 0) {
    break;
   } else {
    i15 = 1;
   }
   return i15 | 0;
  }
 } while (0);
 i12 = i1 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i15 = 0;
  return i15 | 0;
 }
 L20 : do {
  if ((HEAP32[i1 + 4 >> 2] | 0) != 0) {
   i4 = HEAP32[i3 + 16 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i3 + 24 >> 2] | 0;
   i2 = HEAP32[i1 + 16 >> 2] | 0;
   if (i2 >>> 0 > 127 >>> 0) {
    i16 = i2 >>> 7;
   } else {
    i16 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i1) | 0;
   }
   i2 = (i16 >>> 23) + ~i16 | 0;
   i10 = i2 << 12 ^ i2;
   i2 = i10 >>> 7 ^ i10;
   i10 = i2 << 2 ^ i2;
   i2 = i10 >>> 20 ^ i10 | 1;
   i10 = i16;
   i9 = 0;
   while (1) {
    i7 = i10 & i8;
    i17 = i4 + (i7 << 2) | 0;
    i5 = HEAP32[i17 >> 2] | 0;
    i6 = i5;
    if ((i6 | 0) == 0) {
     break L20;
    } else if ((i6 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i5, HEAP32[i12 >> 2] | 0) | 0) {
      break;
     }
    }
    i5 = (i9 | 0) == 0 ? i2 : i9;
    i10 = i5 + i7 | 0;
    i9 = i5;
   }
   if ((i17 | 0) == 0) {
    break;
   } else {
    i15 = 1;
   }
   return i15 | 0;
  }
 } while (0);
 i17 = HEAP32[i12 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i15 = 0;
  return i15 | 0;
 }
 if ((HEAP32[i17 + 4 >> 2] | 0) == 0) {
  i15 = 0;
  return i15 | 0;
 }
 i12 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i15 = 0;
  return i15 | 0;
 }
 i16 = i17 + 8 | 0;
 if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
  i18 = HEAP16[HEAP32[i16 >> 2] >> 1] | 0;
 } else {
  i18 = HEAPU8[HEAP32[i16 >> 2] | 0] | 0;
 }
 i16 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i16 + (i12 << 3) | 0;
 i12 = i18 & 65535;
 i18 = i16;
 while (1) {
  if (i12 >>> 0 >= (HEAP32[i18 >> 2] | 0) >>> 0) {
   if (i12 >>> 0 <= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
    i15 = 1;
    i19 = 35;
    break;
   }
  }
  i16 = i18 + 8 | 0;
  if ((i16 | 0) == (i3 | 0)) {
   i15 = 0;
   i19 = 36;
   break;
  } else {
   i18 = i16;
  }
 }
 if ((i19 | 0) == 35) {
  return i15 | 0;
 } else if ((i19 | 0) == 36) {
  return i15 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
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
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  do {
   if ((HEAP32[i1 + (i3 << 3) >> 2] | 0) != -1) {
    i5 = HEAP32[i1 + (i3 << 3) + 4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) != 0) {
     HEAP32[i6 >> 2] = i7;
     break;
    }
    i7 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i7 | 0) != 0) {
     __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i7, HEAP32[i5 + 20 >> 2] | 0);
    }
    i7 = i5 + 12 | 0;
    i6 = HEAP32[i7 >> 2] | 0;
    i8 = i5 + 4 | 0;
    if ((i6 | 0) != 0) {
     i9 = HEAP32[i8 >> 2] | 0;
     i10 = i9 + (i6 * 52 & -1) | 0;
     i6 = i9;
     while (1) {
      i9 = i6 + 48 | 0;
      i11 = HEAP32[i9 >> 2] | 0;
      i12 = i6 + 40 | 0;
      if ((i11 | 0) != 0) {
       i13 = HEAP32[i12 >> 2] | 0;
       i14 = i13 + (i11 << 2) | 0;
       i11 = i13;
       while (1) {
        i13 = HEAP32[i11 >> 2] | 0;
        do {
         if ((i13 | 0) != 0) {
          i15 = i13 | 0;
          i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
          if ((i16 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i13);
           break;
          } else {
           HEAP32[i15 >> 2] = i16;
           break;
          }
         }
        } while (0);
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i14 | 0)) {
         break;
        }
       }
       HEAP32[i9 >> 2] = 0;
      }
      i14 = HEAP32[i12 >> 2] | 0;
      if ((i14 | 0) != 0) {
       HEAP32[i12 >> 2] = 0;
       HEAP32[i6 + 44 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i14);
      }
      __ZN7WebCore4PathD1Ev(i6 + 36 | 0);
      i14 = HEAP32[i6 + 16 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        i11 = i14 | 0;
        i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
        if ((i13 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i14);
         break;
        } else {
         HEAP32[i11 >> 2] = i13;
         break;
        }
       }
      } while (0);
      i6 = i6 + 52 | 0;
      if ((i6 | 0) == (i10 | 0)) {
       break;
      }
     }
     HEAP32[i7 >> 2] = 0;
    }
    i10 = HEAP32[i8 >> 2] | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i8 >> 2] = 0;
     HEAP32[i5 + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10 | 0);
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore14SVGFontElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 92 >> 2] = H_BASE + 736;
 __ZN7WebCore11SVGGlyphMapD2Ev(i1 + 204 | 0);
 i2 = i1 + 200 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 192 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 108 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore14SVGKerningPairD2Ev(i3);
   i3 = i3 + 108 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 196 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 172 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i2, HEAP32[i1 + 176 >> 2] | 0);
 }
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i2, HEAP32[i1 + 156 >> 2] | 0);
 }
 i2 = i1 + 148 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 140 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i6 >> 2] | 0;
  i5 = i3 + (i4 * 108 & -1) | 0;
  i4 = i3;
  while (1) {
   __ZN7WebCore14SVGKerningPairD2Ev(i4);
   i4 = i4 + 108 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i1 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i2, HEAP32[i1 + 124 >> 2] | 0);
 }
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 | 0;
  __ZN7WebCore10SVGElementD2Ev(i7);
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i2, HEAP32[i1 + 104 >> 2] | 0);
 i7 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i7);
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_EaSERKS6_(i1, i2) {
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
 i8 = i6 + (i7 << 2) | 0;
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
      i10 = i10 + 4 | 0;
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
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i4, i5, i12, i12);
    i10 = i12 + 4 | 0;
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
     i10 = i13 + 4 | 0;
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
   i8 = HEAP32[i12 + (i4 << 2) >> 2] | 0;
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
function __ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 13574 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  HEAP8[i2] = 0;
  return;
 }
 i3 = i1 + 204 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i4, HEAP32[i1 + 208 >> 2] | 0);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 228 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i4 = i1 + 232 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i1 + 224 | 0;
   if ((i5 | 0) != 0) {
    i7 = HEAP32[i6 >> 2] | 0;
    i8 = i7 + (i5 * 52 & -1) | 0;
    i5 = i7;
    while (1) {
     i7 = i5 + 48 | 0;
     i9 = HEAP32[i7 >> 2] | 0;
     i10 = i5 + 40 | 0;
     if ((i9 | 0) != 0) {
      i11 = HEAP32[i10 >> 2] | 0;
      i12 = i11 + (i9 << 2) | 0;
      i9 = i11;
      while (1) {
       i11 = HEAP32[i9 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i13 = i11 | 0;
         i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
         if ((i14 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i11);
          break;
         } else {
          HEAP32[i13 >> 2] = i14;
          break;
         }
        }
       } while (0);
       i9 = i9 + 4 | 0;
       if ((i9 | 0) == (i12 | 0)) {
        break;
       }
      }
      HEAP32[i7 >> 2] = 0;
     }
     i12 = HEAP32[i10 >> 2] | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i5 + 44 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i12);
     }
     __ZN7WebCore4PathD1Ev(i5 + 36 | 0);
     i12 = HEAP32[i5 + 16 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i9 = i12 | 0;
       i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i12);
        break;
       } else {
        HEAP32[i9 >> 2] = i11;
        break;
       }
      }
     } while (0);
     i5 = i5 + 52 | 0;
     if ((i5 | 0) == (i8 | 0)) {
      break;
     }
    }
    HEAP32[i4 >> 2] = 0;
   }
   i8 = HEAP32[i6 >> 2] | 0;
   i5 = i1 + 236 | 0;
   if ((i5 | 0) == (i8 | 0) | (i8 | 0) == 0) {
    i15 = i8;
   } else {
    HEAP32[i6 >> 2] = 0;
    HEAP32[i3 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8 | 0);
    i15 = HEAP32[i6 >> 2] | 0;
   }
   if ((i15 | 0) != 0) {
    break;
   }
   HEAP32[i6 >> 2] = i5;
   HEAP32[i3 >> 2] = 256;
  }
 } while (0);
 HEAP32[i1 + 13568 >> 2] = 0;
 __ZN7WebCore13SVGKerningMap5clearEv(i1 + 100 | 0);
 __ZN7WebCore13SVGKerningMap5clearEv(i1 + 152 | 0);
 HEAP8[i2] = 0;
 return;
}
function __ZN7WebCore14SVGFontElement25collectGlyphsForGlyphNameERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 __ZN7WebCore14SVGFontElement16ensureGlyphCacheEv(i1);
 i4 = HEAP32[i1 + 13556 >> 2] | 0;
 i5 = HEAP32[i1 + 13548 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 if (i7 >>> 0 > 127 >>> 0) {
  i8 = i7 >>> 7;
 } else {
  i8 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 L5 : do {
  if ((i5 | 0) == 0) {
   i9 = 12;
  } else {
   i2 = (i8 >>> 23) + ~i8 | 0;
   i7 = i2 << 12 ^ i2;
   i2 = i7 >>> 7 ^ i7;
   i7 = i2 << 2 ^ i2;
   i2 = i7 >>> 20 ^ i7 | 1;
   i7 = i8;
   i10 = 0;
   while (1) {
    i11 = i7 & i4;
    i12 = i5 + (i11 << 3) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i9 = 12;
     break L5;
    } else if ((i14 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i13, HEAP32[i6 >> 2] | 0) | 0) {
      break;
     }
    }
    i13 = (i10 | 0) == 0 ? i2 : i10;
    i7 = i13 + i11 | 0;
    i10 = i13;
   }
   if ((i12 | 0) == 0) {
    i9 = 12;
    break;
   }
   i10 = HEAP16[i5 + (i11 << 3) + 4 >> 1] | 0;
   if (i10 << 16 >> 16 == 0) {
    i9 = 12;
    break;
   }
   i7 = i10 & 65535;
   i10 = HEAP32[i1 + 232 >> 2] | 0;
   if (i7 >>> 0 > i10 >>> 0) {
    i9 = 12;
    break;
   }
   i2 = i7 - 1 | 0;
   if (i10 >>> 0 > i2 >>> 0) {
    i15 = (HEAP32[i1 + 224 >> 2] | 0) + (i2 * 52 & -1) | 0;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 12) {
   if ((HEAP8[H_BASE + 816 | 0] | 0) == 0) {
    i1 = __Znwj(52) | 0;
    i11 = i1;
    HEAP8[i1] = 0;
    i5 = i1;
    HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -63 | 4;
    HEAP32[i1 + 4 >> 2] = 0;
    HEAP16[i1 + 8 >> 1] = 0;
    _memset(i1 + 12 | 0, 0, 24) | 0;
    __ZN7WebCore4PathC1Ev(i1 + 36 | 0);
    HEAP32[i1 + 40 >> 2] = 0;
    HEAP32[i1 + 44 >> 2] = 0;
    HEAP32[i1 + 48 >> 2] = 0;
    HEAP32[H_BASE + 792 >> 2] = i11;
    HEAP32[H_BASE + 816 >> 2] = 1;
    HEAP32[H_BASE + 820 >> 2] = 0;
    i15 = i11;
    break;
   } else {
    i15 = HEAP32[H_BASE + 792 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i9 = i3 + 8 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == (HEAP32[i3 + 4 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i3, i15);
  return;
 } else {
  __ZN7WebCore8SVGGlyphC2ERKS0_((HEAP32[i3 >> 2] | 0) + (i11 * 52 & -1) | 0, i15);
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  return;
 }
}
function __ZN7WebCore11SVGGlyphMapD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 13344 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 13348 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
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
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 52 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 48 | 0;
   i8 = HEAP32[i5 >> 2] | 0;
   i7 = i3 + 40 | 0;
   if ((i8 | 0) != 0) {
    i9 = HEAP32[i7 >> 2] | 0;
    i10 = i9 + (i8 << 2) | 0;
    i8 = i9;
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i3 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN7WebCore4PathD1Ev(i3 + 36 | 0);
   i10 = HEAP32[i3 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i8 = i10 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i3 = i3 + 52 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if (!((i1 + 32 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i2, HEAP32[i1 + 4 >> 2] | 0);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == 0) {
   i13 = 6;
   break;
  } else if ((i12 | 0) == (-1 | 0)) {
   i14 = i10;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i14 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i14;
 }
 if ((i13 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i8 | 0) != 0) {
  i13 = i8 + 8 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i7 = i8 | 0;
  if ((i14 | 0) != 0) {
   i6 = HEAP32[i7 >> 2] | 0;
   i5 = i6 + (i14 * 56 & -1) | 0;
   i14 = i6;
   while (1) {
    __ZN7WebCore10SVGKerningD2Ev(i14);
    i14 = i14 + 56 | 0;
    if ((i14 | 0) == (i5 | 0)) {
     break;
    }
   }
   HEAP32[i13 >> 2] = 0;
  }
  i13 = HEAP32[i7 >> 2] | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 i13 = i2 + 4 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZNSt3__118__insertion_sort_3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i1 + 104 | 0;
 __ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_(i1, i1 + 52 | 0, i6, i3) | 0;
 i7 = i1 + 156 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 + 48 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 36 | 0;
 i11 = i5 + 16 | 0;
 i12 = i5 + 44 | 0;
 i13 = i6;
 i6 = i7;
 while (1) {
  do {
   if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i6, i13) | 0) {
    __ZN7WebCore8SVGGlyphC2ERKS0_(i5, i6);
    i7 = i13;
    i14 = i6;
    while (1) {
     __ZN7WebCore8SVGGlyphaSERKS0_(i14, i7) | 0;
     if ((i7 | 0) == (i1 | 0)) {
      i15 = i1;
      break;
     }
     i16 = i7 - 52 | 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 31](i5, i16) | 0) {
      i14 = i7;
      i7 = i16;
     } else {
      i15 = i7;
      break;
     }
    }
    __ZN7WebCore8SVGGlyphaSERKS0_(i15, i5) | 0;
    i7 = HEAP32[i8 >> 2] | 0;
    if ((i7 | 0) != 0) {
     i14 = HEAP32[i9 >> 2] | 0;
     i16 = i14 + (i7 << 2) | 0;
     i7 = i14;
     while (1) {
      i14 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i14 | 0) != 0) {
        i17 = i14 | 0;
        i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
        if ((i18 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i14);
         break;
        } else {
         HEAP32[i17 >> 2] = i18;
         break;
        }
       }
      } while (0);
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i16 | 0)) {
       break;
      }
     }
     HEAP32[i8 >> 2] = 0;
    }
    i16 = HEAP32[i9 >> 2] | 0;
    if ((i16 | 0) != 0) {
     HEAP32[i9 >> 2] = 0;
     HEAP32[i12 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i16);
    }
    __ZN7WebCore4PathD1Ev(i10);
    i16 = HEAP32[i11 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
    i7 = i16 | 0;
    i14 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i14 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i16);
     break;
    } else {
     HEAP32[i7 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i14 = i6 + 52 | 0;
  if ((i14 | 0) == (i2 | 0)) {
   break;
  } else {
   i13 = i6;
   i6 = i14;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEEaSERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  HEAP32[i3 >> 2] = i6;
  i7 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) == 0) {
      i10 = 0;
     } else {
      if ((i4 | 0) != 0) {
       HEAP32[i3 >> 2] = 0;
      }
      i11 = i1 | 0;
      i12 = HEAP32[i11 >> 2] | 0;
      if ((i12 | 0) == 0) {
       i10 = i9;
       break;
      }
      HEAP32[i11 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i12);
      i10 = HEAP32[i8 >> 2] | 0;
     }
    } while (0);
    i12 = HEAP32[i5 >> 2] | 0;
    if (i10 >>> 0 >= i12 >>> 0) {
     break;
    }
    i11 = i1 | 0;
    i13 = HEAP32[i11 >> 2] | 0;
    if (i12 >>> 0 > 536870911 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i14 = HEAP32[i3 >> 2] | 0;
    i15 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 3) | 0;
    HEAP32[i8 >> 2] = i15 >>> 3;
    i12 = __ZN3WTF10fastMallocEj(i15) | 0;
    HEAP32[i11 >> 2] = i12;
    i15 = i13;
    _memcpy(i12 | 0, i15 | 0, i14 << 3) | 0;
    if ((i13 | 0) == 0) {
     break;
    }
    if ((HEAP32[i11 >> 2] | 0) == (i13 | 0)) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i15);
   }
  } while (0);
  i7 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i10 = i2 + (i7 << 3) | 0;
 i9 = i1 | 0;
 if ((i7 | 0) == 0) {
  i16 = i2;
  i17 = 0;
 } else {
  i7 = HEAP32[i9 >> 2] | 0;
  i4 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
   i2 = i4 + 8 | 0;
   if ((i2 | 0) == (i10 | 0)) {
    break;
   } else {
    i7 = i7 + 8 | 0;
    i4 = i2;
   }
  }
  i16 = HEAP32[i8 >> 2] | 0;
  i17 = HEAP32[i3 >> 2] | 0;
 }
 _memcpy((HEAP32[i9 >> 2] | 0) + (i17 << 3) | 0, i16 + (i17 << 3) | 0, (HEAP32[i5 >> 2] | 0) - i17 << 3) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN3WTF12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i3, HEAP32[i2 + 20 >> 2] | 0);
 }
 i3 = i2 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = i2 + 4 | 0;
 if ((i1 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i1 * 52 & -1) | 0;
  i1 = i5;
  while (1) {
   i5 = i1 + 48 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = i1 + 40 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
       if ((i12 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i1 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN7WebCore4PathD1Ev(i1 + 36 | 0);
   i10 = HEAP32[i1 + 16 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i7 = i10 | 0;
     i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i7 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i1 = i1 + 52 | 0;
   if ((i1 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i2 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3 | 0);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 96 | 0;
 if ((HEAP8[i6 + 1 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6StringC1EPKc(i5, (HEAP8[i6] & 1) != 0 ? H_BASE + 16 | 0 : H_BASE + 8 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 776 | 0] | 0) {
  i10 = HEAP32[H_BASE + 800 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 26 | 0, F_BASE_vii + 24 | 0);
  HEAP32[H_BASE + 800 >> 2] = i8;
  HEAP8[H_BASE + 776 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i(i3, HEAP32[i1 + 20 >> 2] | 0);
 }
 i3 = i1 + 4 | 0;
 i2 = i1 + 12 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i3;
 if ((i4 | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 + (i4 * 52 & -1) | 0;
  i4 = i6;
  while (1) {
   i6 = i4 + 48 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   i9 = i4 + 40 | 0;
   if ((i8 | 0) != 0) {
    i10 = HEAP32[i9 >> 2] | 0;
    i11 = i10 + (i8 << 2) | 0;
    i8 = i10;
    while (1) {
     i10 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i10 | 0) != 0) {
       i12 = i10 | 0;
       i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
       if ((i13 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i10);
        break;
       } else {
        HEAP32[i12 >> 2] = i13;
        break;
       }
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i11 | 0)) {
      break;
     }
    }
    HEAP32[i6 >> 2] = 0;
   }
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i4 + 44 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i11);
   }
   __ZN7WebCore4PathD1Ev(i4 + 36 | 0);
   i11 = HEAP32[i4 + 16 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i4 = i4 + 52 | 0;
   if ((i4 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2 | 0);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i6 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i7 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
 i6 = i3 + 4 | 0;
 i8 = i7 + (HEAPU16[i6 >> 1] | 0) + (i7 >>> 11) | 0;
 i7 = i8 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i8 << 16;
 i8 = (i7 >>> 11) + i7 | 0;
 i7 = i8 << 3 ^ i8;
 i8 = (i7 >>> 5) + i7 | 0;
 i7 = i8 << 2 ^ i8;
 i8 = (i7 >>> 15) + i7 | 0;
 i7 = (i8 << 10 ^ i8) & 16777215;
 i8 = (i7 | 0) == 0 ? 8388608 : i7;
 i7 = i3 | 0;
 i3 = (i8 >>> 23) + ~i8 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = i8;
 i8 = 0;
 i9 = 0;
 while (1) {
  i10 = i2 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i13 = 4;
    break;
   }
  }
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = 7;
    break;
   }
  }
  i14 = (i8 | 0) == 0 ? i3 : i8;
  i2 = i14 + i10 | 0;
  i8 = i14;
  i9 = (i12 | 0) == -1 ? i11 : i9;
 }
 if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + ~(i1 << 15) | 0;
 i7 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i7 >>> 6 ^ i7;
 i7 = i6 + ~(i6 << 11) | 0;
 i6 = i7 >>> 16 ^ i7;
 i7 = i6 & i5;
 i8 = i4 + (i7 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i6 >>> 23) + ~i6 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i7;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEED1Ev(i19);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) > 0) {
  i3 = 0;
 } else {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 while (1) {
  i5 = i1 + (i3 << 3) | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != -1) {
    i7 = i1 + (i3 << 3) + 4 | 0;
    i8 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    if ((i8 | 0) == 0) {
     i9 = i6;
    } else {
     i7 = i8 + 8 | 0;
     i10 = HEAP32[i7 >> 2] | 0;
     i11 = i8 | 0;
     if ((i10 | 0) != 0) {
      i12 = HEAP32[i11 >> 2] | 0;
      i13 = i12 + (i10 * 56 & -1) | 0;
      i10 = i12;
      while (1) {
       __ZN7WebCore10SVGKerningD2Ev(i10);
       i10 = i10 + 56 | 0;
       if ((i10 | 0) == (i13 | 0)) {
        break;
       }
      }
      HEAP32[i7 >> 2] = 0;
     }
     i13 = HEAP32[i11 >> 2] | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i11 >> 2] = 0;
      HEAP32[i8 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i13);
     }
     __ZN3WTF8fastFreeEPv(i8);
     i9 = HEAP32[i5 >> 2] | 0;
    }
    if ((i9 | 0) == 0) {
     break;
    }
    i13 = i9 | 0;
    i10 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i13 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i3 = i3 + 1 | 0;
  if ((i3 | 0) >= (i2 | 0)) {
   break;
  }
 }
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore8SVGGlyphC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | HEAP8[i2 | 0] & 1;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i4 >> 2] & -7 | HEAP32[i3 >> 2] & 6;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 >> 2] = i5 & -57 | HEAP32[i3 >> 2] & 56;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP16[i1 + 8 >> 1] = HEAP16[i2 + 8 >> 1] | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2];
 HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2];
 __ZN7WebCore4PathC1ERKS0_(i1 + 36 | 0, i2 + 36 | 0);
 i5 = HEAP32[i2 + 44 >> 2] | 0;
 i3 = i2 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 40 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 44 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = i4;
 if ((i5 | 0) == 0) {
  return;
 }
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i4 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i7 >> 2] = i4 >>> 2;
 i7 = __ZN3WTF10fastMallocEj(i4) | 0;
 i4 = i7;
 HEAP32[i6 >> 2] = i4;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i7 + (i2 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i4;
 }
 while (1) {
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i9 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  i7 = i8 + 4 | 0;
  if ((i7 | 0) == (i3 | 0)) {
   break;
  } else {
   i8 = i7;
   i9 = i9 + 4 | 0;
  }
 }
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 9;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 10;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 10) {
  return i8 | 0;
 } else if ((i12 | 0) == 9) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore14SVGKerningPairD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 92 >> 2] | 0;
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
 i2 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
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
 i2 = i1 + 64 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 56 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i9 = i1 | 0;
  __ZN7WebCore10SVGKerningD2Ev(i9);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 60 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i9 = i1 | 0;
 __ZN7WebCore10SVGKerningD2Ev(i9);
 return;
}
function __ZN7WebCore14SVGFontElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 __ZN7WebCore10SVGElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 92 >> 2] = H_BASE + 736;
 i3 = i1 + 96 | 0;
 HEAP8[i3] = 0;
 i2 = i3 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -4;
 _memset(i1 + 100 | 0, 0, 124) | 0;
 HEAP32[i1 + 224 >> 2] = i1 + 236;
 HEAP32[i1 + 228 >> 2] = 256;
 HEAP32[i1 + 232 >> 2] = 0;
 _memset(i1 + 13548 | 0, 0, 27) | 0;
 if (HEAP8[H_BASE + 784 | 0] | 0) {
  i4 = HEAP32[H_BASE + 808 >> 2] | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i2 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 808 >> 2] = i2;
  HEAP8[H_BASE + 784 | 0] = 1;
  i4 = i2;
 }
 if ((HEAP32[i4 + 12 >> 2] | 0) != 0) {
  return;
 }
 if (HEAP8[H_BASE + 776 | 0] | 0) {
  i5 = HEAP32[H_BASE + 800 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 26 | 0, F_BASE_vii + 24 | 0);
  HEAP32[H_BASE + 800 >> 2] = i2;
  HEAP8[H_BASE + 776 | 0] = 1;
  i5 = i2;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i4, i5);
 __ZN7WebCore25SVGAttributeToPropertyMap13addPropertiesERKS0_(i4, __ZN7WebCore10SVGElement22attributeToPropertyMapEv() | 0);
 return;
}
function __ZN7WebCore10SVGKerningD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 40 >> 2] | 0;
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
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 20 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 2) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i8 = i5 | 0;
      i7 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
      if ((i7 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i5);
       break;
      } else {
       HEAP32[i8 >> 2] = i7;
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
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore13SVGKerningMap5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i2, HEAP32[i1 + 4 >> 2] | 0);
  _memset(i1 | 0, 0, 16) | 0;
 }
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i(i3, HEAP32[i1 + 24 >> 2] | 0);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 44 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 48 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 40 | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i5 >> 2] | 0;
  i6 = i1 + (i4 * 108 & -1) | 0;
  i4 = i1;
  while (1) {
   __ZN7WebCore14SVGKerningPairD2Ev(i4);
   i4 = i4 + 108 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i2 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 52 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 52 & -1) * 52 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 52 & -1) | 0;
   i14 = i13;
   __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
   i15 = HEAP32[i3 >> 2] | 0;
   i16 = i15 + 1 | 0;
   HEAP32[i3 >> 2] = i16;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 52 & -1) | 0;
 i14 = i13;
 __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
 i15 = HEAP32[i3 >> 2] | 0;
 i16 = i15 + 1 | 0;
 HEAP32[i3 >> 2] = i16;
 return;
}
function __ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 108 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 108 & -1) * 108 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 108 & -1) | 0;
   __ZN7WebCore14SVGKerningPairC2ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 108 & -1) | 0;
 __ZN7WebCore14SVGKerningPairC2ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN3WTF20VectorTypeOperationsIN7WebCore8SVGGlyphEE4moveEPS2_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 while (1) {
  __ZN7WebCore8SVGGlyphC2ERKS0_(i5, i4);
  i3 = i4 + 48 | 0;
  i1 = HEAP32[i3 >> 2] | 0;
  i6 = i4 + 40 | 0;
  if ((i1 | 0) != 0) {
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = i7 + (i1 << 2) | 0;
   i1 = i7;
   while (1) {
    i7 = HEAP32[i1 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i9 = i7 | 0;
      i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i9 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i4 + 44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN7WebCore4PathD1Ev(i4 + 36 | 0);
  i8 = HEAP32[i4 + 16 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i1 = i8 | 0;
    i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i1 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i8 = i4 + 52 | 0;
  if ((i8 | 0) == (i2 | 0)) {
   break;
  } else {
   i4 = i8;
   i5 = i5 + 52 | 0;
  }
 }
 return;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 52 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 52 & -1) * 52 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 52 & -1) | 0;
   i14 = i13;
   __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
   i15 = HEAP32[i3 >> 2] | 0;
   i16 = i15 + 1 | 0;
   HEAP32[i3 >> 2] = i16;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 52 & -1) | 0;
 i14 = i13;
 __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
 i15 = HEAP32[i3 >> 2] | 0;
 i16 = i15 + 1 | 0;
 HEAP32[i3 >> 2] = i16;
 return;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 52 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 52 & -1) * 52 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 52 & -1) | 0;
   i14 = i13;
   __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
   i15 = HEAP32[i3 >> 2] | 0;
   i16 = i15 + 1 | 0;
   HEAP32[i3 >> 2] = i16;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 52 & -1) | 0;
 i14 = i13;
 __ZN7WebCore8SVGGlyphC2ERKS0_(i14, i10);
 i15 = HEAP32[i3 >> 2] | 0;
 i16 = i15 + 1 | 0;
 HEAP32[i3 >> 2] = i16;
 return;
}
function __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
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
   if ((i7 + (i4 * 56 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 56 & -1) * 56 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 56 & -1) | 0;
   __ZN7WebCore10SVGKerningC2ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 56 & -1) | 0;
 __ZN7WebCore10SVGKerningC2ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZN3WTF17HashMapTranslatorINS_7HashMapINS_6StringENSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEENS_10StringHashENS_10HashTraitsIS2_EENSE_ISC_EEE18KeyValuePairTraitsESD_E9translateINS_12KeyValuePairIS2_SC_EERKS2_SC_EEvRT_OT0_OT1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i3 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i2 = i1 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i2 >> 2] | 0;
  i6 = i4 + (i5 * 56 & -1) | 0;
  i5 = i4;
  while (1) {
   __ZN7WebCore10SVGKerningD2Ev(i5);
   i5 = i5 + 56 | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore8SVGGlyphaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | HEAP8[i2 | 0] & 1;
 i3 = i2;
 i4 = i1;
 i5 = HEAP32[i4 >> 2] & -7 | HEAP32[i3 >> 2] & 6;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 >> 2] = i5 & -57 | HEAP32[i3 >> 2] & 56;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP16[i1 + 8 >> 1] = HEAP16[i2 + 8 >> 1] | 0;
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 16 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2];
 HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAPF32[i1 + 32 >> 2] = +HEAPF32[i2 + 32 >> 2];
 __ZN7WebCore4PathaSERKS0_(i1 + 36 | 0, i2 + 36 | 0) | 0;
 __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_(i1 + 40 | 0, i2 + 40 | 0) | 0;
 return i1 | 0;
}
function __ZN7WebCore14SVGFontElement16svgGlyphForGlyphEt(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore14SVGFontElement16ensureGlyphCacheEv(i2);
 do {
  if (i3 << 16 >> 16 != 0) {
   i4 = i3 & 65535;
   i5 = HEAP32[i2 + 232 >> 2] | 0;
   if (i4 >>> 0 > i5 >>> 0) {
    break;
   }
   i6 = i4 - 1 | 0;
   if (i5 >>> 0 <= i6 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = (HEAP32[i2 + 224 >> 2] | 0) + (i6 * 52 & -1) | 0;
   __ZN7WebCore8SVGGlyphC2ERKS0_(i1, i7);
   return;
  }
 } while (0);
 if ((HEAP8[H_BASE + 816 | 0] | 0) == 0) {
  i2 = __Znwj(52) | 0;
  i3 = i2;
  HEAP8[i2] = 0;
  i6 = i2;
  HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -63 | 4;
  HEAP32[i2 + 4 >> 2] = 0;
  HEAP16[i2 + 8 >> 1] = 0;
  _memset(i2 + 12 | 0, 0, 24) | 0;
  __ZN7WebCore4PathC1Ev(i2 + 36 | 0);
  HEAP32[i2 + 40 >> 2] = 0;
  HEAP32[i2 + 44 >> 2] = 0;
  HEAP32[i2 + 48 >> 2] = 0;
  HEAP32[H_BASE + 792 >> 2] = i3;
  HEAP32[H_BASE + 816 >> 2] = 1;
  HEAP32[H_BASE + 820 >> 2] = 0;
  i7 = i3;
  __ZN7WebCore8SVGGlyphC2ERKS0_(i1, i7);
  return;
 } else {
  i7 = HEAP32[H_BASE + 792 >> 2] | 0;
  __ZN7WebCore8SVGGlyphC2ERKS0_(i1, i7);
  return;
 }
}
function __ZN7WebCore14SVGFontElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 776 | 0] | 0) {
  i5 = HEAP32[H_BASE + 800 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 26 | 0, F_BASE_vii + 24 | 0);
  HEAP32[H_BASE + 800 >> 2] = i6;
  HEAP8[H_BASE + 776 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_14SVGFontElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 96 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 + ((HEAP32[i1 + 8 >> 2] | 0) * 52 & -1) | 0;
 do {
  if (i2 >>> 0 > 256 >>> 0) {
   if (i2 >>> 0 > 82595524 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 52 & -1) | 0;
    HEAP32[i3 >> 2] = (i7 >>> 0) / 52 & -1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 256;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 __ZN3WTF20VectorTypeOperationsIN7WebCore8SVGGlyphEE4moveEPS2_S4_S4_(i5, i6, i9);
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5 | 0);
 return;
}
function __ZNK7WebCore14SVGFontElement24firstMissingGlyphElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  i4 = i3;
  return i4 | 0;
 }
 i1 = HEAP32[__ZN7WebCore8SVGNames16missing_glyphTagE >> 2] | 0;
 i5 = i1 + 12 | 0;
 i6 = i1 + 16 | 0;
 i7 = i2;
 L4 : while (1) {
  do {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
    i2 = HEAP32[i7 + 44 >> 2] | 0;
    if ((i2 | 0) == (i1 | 0)) {
     i3 = i7;
     i8 = 10;
     break L4;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     i3 = i7;
     i8 = 11;
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i7 + 28 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i8 = 12;
   break;
  } else {
   i7 = i2;
  }
 }
 if ((i8 | 0) == 12) {
  i4 = i3;
  return i4 | 0;
 } else if ((i8 | 0) == 10) {
  i4 = i3;
  return i4 | 0;
 } else if ((i8 | 0) == 11) {
  i4 = i3;
  return i4 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 108 & -1) | 0;
 if (i2 >>> 0 > 39768215 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 108 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 108 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore14SVGKerningPairC2ERKS0_(i7, i6);
   __ZN7WebCore14SVGKerningPairD2Ev(i6);
   i2 = i6 + 108 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 108 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 * 56 & -1) | 0;
 if (i2 >>> 0 > 76695844 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 56 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 56 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   __ZN7WebCore10SVGKerningC2ERKS0_(i7, i6);
   __ZN7WebCore10SVGKerningD2Ev(i6);
   i2 = i6 + 56 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 56 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i2 >>> 0 > 82595524 >>> 0) {
  _WTFCrash();
 }
 i6 = i5 + ((HEAP32[i1 + 8 >> 2] | 0) * 52 & -1) | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 52 & -1) | 0;
 HEAP32[i3 >> 2] = (i1 >>> 0) / 52 & -1;
 i2 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF20VectorTypeOperationsIN7WebCore8SVGGlyphEE4moveEPS2_S4_S4_(i5, i6, i2);
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5 | 0);
 return;
}
function __ZN7WebCore14SVGFontElement37externalResourcesRequiredPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 776 | 0] | 0) {
  i1 = HEAP32[H_BASE + 800 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 1, 0, __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, (HEAP32[__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 26 | 0, F_BASE_vii + 24 | 0);
  HEAP32[H_BASE + 800 >> 2] = i2;
  HEAP8[H_BASE + 776 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZNK7WebCore14SVGFontElement42horizontalKerningForPairOfStringsAndGlyphsERKN3WTF6StringES4_S4_S4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0;
 i6 = i1 + 100 | 0;
 do {
  if ((HEAP32[i1 + 112 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 148 >> 2] | 0) == 0) {
    d7 = +0;
   } else {
    break;
   }
   return +d7;
  }
 } while (0);
 d7 = +__ZN7WebCoreL32kerningForPairOfStringsAndGlyphsERKNS_13SVGKerningMapERKN3WTF6StringES6_S6_S6_(i6, i2, i3, i4, i5);
 return +d7;
}
function __ZNK7WebCore14SVGFontElement40verticalKerningForPairOfStringsAndGlyphsERKN3WTF6StringES4_S4_S4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, d7 = +0;
 i6 = i1 + 152 | 0;
 do {
  if ((HEAP32[i1 + 164 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 184 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 200 >> 2] | 0) == 0) {
    d7 = +0;
   } else {
    break;
   }
   return +d7;
  }
 } while (0);
 d7 = +__ZN7WebCoreL32kerningForPairOfStringsAndGlyphsERKNS_13SVGKerningMapERKN3WTF6StringES6_S6_S6_(i6, i2, i3, i4, i5);
 return +d7;
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
function viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore14SVGFontElement22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14SVGFontElement16ensureGlyphCacheEv(i1);
 __ZN7WebCore11SVGGlyphMap22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE(i1 + 204 | 0, i2, i3);
 return;
}
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore14SVGFontElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 784 | 0] | 0) {
  i2 = HEAP32[H_BASE + 808 >> 2] | 0;
  return i2 | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 808 >> 2] = i3;
  HEAP8[H_BASE + 784 | 0] = 1;
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore14SVGFontElement22attributeToPropertyMapEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 784 | 0] | 0) {
  i1 = HEAP32[H_BASE + 808 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 808 >> 2] = i3;
  HEAP8[H_BASE + 784 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore14SVGFontElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(13576) | 0;
 __ZN7WebCore14SVGFontElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZThn92_N7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 - 13576 + 13580 | 0] = HEAP8[i2] & 1;
 i2 = i1 - 13576 + 13581 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 96 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[HEAP32[i1 + 24 >> 2] | 0] = HEAP8[i2] & 1;
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i1 | 0);
 return;
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function __ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEv(i1);
 return;
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function __ZN7WebCore11SVGGlyphMap20compareGlyphPriorityERKNS_8SVGGlyphES3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) < (HEAP32[i2 + 4 >> 2] | 0) | 0;
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1 | 0) | 0;
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZThn92_N7WebCore14SVGFontElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 13576 + 13484 | 0;
 __ZN7WebCore14SVGFontElementD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function __ZN7WebCore14SVGFontElement12missingGlyphEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGFontElement16ensureGlyphCacheEv(i1);
 return HEAP16[i1 + 13572 >> 1] | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore10SVGElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10SVGElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore7Element8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function __ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 return;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function __ZThn92_N7WebCore14SVGFontElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGFontElementD2Ev(i1 - 13576 + 13484 | 0);
 return;
}
function __ZThn92_NK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 - 13576 + 13580 | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
}
function ii___ZNK7WebCore7Element8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore14SVGFontElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function __ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore14SVGFontElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGFontElementD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 + 96 | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZN7WebCore14SVGFontElementD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14SVGFontElementD2Ev(i1);
 return;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore10SVGElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement21supplementalTransformEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement15supportsMarkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isFilterEffectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isTextContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,__ZN7WebCore14SVGFontElementD1Ev,b1,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore14SVGFontElementD0Ev,b1,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv
  ,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZThn92_N7WebCore14SVGFontElementD1Ev,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZThn92_N7WebCore14SVGFontElementD0Ev
  ,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore10SVGElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore14SVGFontElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b2,vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZN7WebCore10SVGElement19svgAttributeChangedERKNS_13QualifiedNameE__wrapper
  ,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore10SVGElement14isFilterEffectEv,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper
  ,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,__ZThn92_NK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper
  ,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper
  ,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore10SVGElement14isGradientStopEv,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZNK7WebCore10SVGElement15supportsMarkersEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZN7WebCore14SVGFontElement27localAttributeToPropertyMapEv,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,__ZNK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper
  ,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore10SVGElement13isTextContentEv,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,__ZNK7WebCore10SVGElement13isSMILElementEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv,b3,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper
  ,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore10SVGElement7isValidEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,__ZN7WebCore10SVGElement21supplementalTransformEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi,b5,viii___ZN7WebCore10SVGElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b5,__ZN7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb,b5,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper,b5,__ZThn92_N7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b6,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b6,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b6,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,v___ZN7WebCore7Element21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b7,__ZN7WebCore14SVGFontElement16rendererIsNeededERKNS_11RenderStyleE,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b7,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b7,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b7,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b7,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper,b7,__ZN7WebCore11SVGGlyphMap20compareGlyphPriorityERKNS_8SVGGlyphES3_,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b8,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames8hkernTagE": __ZN7WebCore8SVGNames8hkernTagE, "__ZN7WebCore8SVGNames11unicodeAttrE": __ZN7WebCore8SVGNames11unicodeAttrE, "__ZN7WebCore8SVGNames29externalResourcesRequiredAttrE": __ZN7WebCore8SVGNames29externalResourcesRequiredAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames8glyphTagE": __ZN7WebCore8SVGNames8glyphTagE, "__ZN7WebCore8SVGNames16missing_glyphTagE": __ZN7WebCore8SVGNames16missing_glyphTagE, "__ZN7WebCore8SVGNames8vkernTagE": __ZN7WebCore8SVGNames8vkernTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED1Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS1_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_SD_SF_SG_SM_SJ_EEEEOT0_OT1_","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN7WebCore8SVGGlyphC2ERKS0_","__ZN7WebCore14SVGFontElement16rendererIsNeededERKNS_11RenderStyleE","__ZN7WebCore14SVGFontElement46lookupOrCreateExternalResourcesRequiredWrapperEPNS_10SVGElementE","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv","__ZN7WebCore14SVGFontElement27localAttributeToPropertyMapEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_14SVGFontElementENS_32SVGAnimatedStaticPropertyTearOffIbEEbEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbE10setBaseValERKbRi","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore14SVGFontElementD1Ev","__ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv","__ZN7WebCore14SVGFontElement29registerLigaturesInGlyphCacheERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore7Element6prefixEv","__ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E3addINS_17HashMapTranslatorISC_S6_EERKS1_RtEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S3_S5_S6_SC_S9_EEEEOT0_OT1_","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore14SVGFontElement22attributeToPropertyMapEv","__ZN7WebCore13SVGKerningMap6insertERKNS_14SVGKerningPairE","__ZNK7WebCore7Element12namespaceURIEv","__ZN3WTF6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN3WTF6VectorIN7WebCore14SVGKerningPairELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_","__ZN7WebCore32SVGAnimatedStaticPropertyTearOffIbED0Ev","__ZN7WebCore7Element20buildPendingResourceEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11SVGGlyphMap22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE","__ZThn92_NK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv","__ZN7WebCore11SVGGlyphMap8addGlyphERKN3WTF6StringES4_NS_8SVGGlyphE","__ZN7WebCore14SVGFontElement37externalResourcesRequiredPropertyInfoEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_tEENS_24KeyValuePairKeyExtractorIS3_EENS_10StringHashENS_7HashMapIS1_tS6_NS_10HashTraitsIS1_EENS8_ItEEE18KeyValuePairTraitsES9_E6rehashEiPS3_","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZNK7WebCore14SVGFontElement42horizontalKerningForPairOfStringsAndGlyphsERKN3WTF6StringES4_S4_S4_","__ZNK7WebCore7Element6targetEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZN3WTF10RefCountedIN7WebCore12GlyphMapNodeEE5derefEv","__ZN7WebCore14SVGFontElementD0Ev","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEEEENS_24KeyValuePairKeyExtractorISD_EENS_10StringHashENS_7HashMapIS1_SC_SG_NS_10HashTraitsIS1_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E15deallocateTableEPSD_i","__ZN7WebCore14SVGKerningPairD2Ev","__ZNK7WebCore7Element9isInRangeEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNSt3__17__sort5IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_S9_T_","__ZNK7WebCore14SVGFontElement40verticalKerningForPairOfStringsAndGlyphsERKN3WTF6StringES4_S4_S4_","__ZN3WTF20VectorTypeOperationsIN7WebCore8SVGGlyphEE4moveEPS2_S4_S4_","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEEaSERKS3_","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZN3WTF17HashMapTranslatorINS_7HashMapINS_6StringENSt3__110unique_ptrINS_6VectorIN7WebCore10SVGKerningELj0ENS_15CrashOnOverflowEEENS3_14default_deleteIS9_EEEENS_10StringHashENS_10HashTraitsIS2_EENSE_ISC_EEE18KeyValuePairTraitsESD_E9translateINS_12KeyValuePairIS2_SC_EERKS2_SC_EEvRT_OT0_OT1_","__ZNK7WebCore14SVGFontElement24firstMissingGlyphElementEv","__ZNSt3__118__insertion_sort_3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore14SVGFontElement36synchronizeExternalResourcesRequiredEPNS_10SVGElementE","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore14SVGFontElement16ensureGlyphCacheEv","__ZNSt3__127__insertion_sort_incompleteIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEbT0_S9_T_","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","_memcpy","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv","__ZN7WebCore14SVGFontElement16svgGlyphForGlyphEt","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore13SVGKerningMap5clearEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZNK7WebCore10SVGElement28needsPendingResourceHandlingEv","__ZNK7WebCore14SVGFontElement34externalResourcesRequiredBaseValueEv","__ZN7WebCore14SVGFontElement12missingGlyphEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore14SVGFontElement22collectGlyphsForStringERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCoreL32kerningForPairOfStringsAndGlyphsERKNS_13SVGKerningMapERKN3WTF6StringES6_S6_S6_","__ZNK7WebCore10SVGElement13isTextContentEv","__ZNK7WebCore10SVGElement7isValidEv","__ZNSt3__17__sort3IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_T_","__ZN7WebCore14SVGFontElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E15deallocateTableEPS6_i","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZThn92_N7WebCore14SVGFontElementD1Ev","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E8reinsertEOS6_","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCoreL7matchesERKN3WTF6StringES3_RKNS_10SVGKerningE","__ZThn92_N7WebCore14SVGFontElement37setExternalResourcesRequiredBaseValueERKbb","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj256ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZNK7WebCore10SVGElement22selfHasRelativeLengthsEv","__ZN3WTF12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEED1Ev","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore11SVGGlyphMap20compareGlyphPriorityERKNS_8SVGGlyphES3_","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_EaSERKS6_","_memset","__ZN7WebCore10SVGKerningC2ERKS0_","__ZNK7WebCore7Element12willValidateEv","__ZN3WTF6VectorINSt3__14pairIjjEELj0ENS_15CrashOnOverflowEEaSERKS5_","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZN7WebCore14SVGFontElement20invalidateGlyphCacheEv","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN3WTF9HashTableIiNS_12KeyValuePairIiNS_6RefPtrIN7WebCore12GlyphMapNodeEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIiS5_SA_NS_10HashTraitsIiEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKiRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIiS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore10SVGKerningD2Ev","__ZN7WebCore14SVGFontElementD2Ev","__ZN7WebCore11SVGGlyphMapD2Ev","__ZN7WebCore14SVGKerningPairC2ERKS0_","__ZN7WebCore14SVGFontElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNSt3__17__sort4IRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEjT0_S9_S9_S9_T_","__ZN7WebCore8SVGGlyphaSERKS0_","__ZNSt3__16__sortIRPFbRKN7WebCore8SVGGlyphES4_EPS2_EEvT0_S9_T_","__ZNK7WebCore4Node15isMediaControlsEv","__ZThn92_N7WebCore14SVGFontElementD0Ev","__ZN7WebCore14SVGFontElement25collectGlyphsForGlyphNameERKN3WTF6StringERNS1_6VectorINS_8SVGGlyphELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN3WTF6VectorIN7WebCore8SVGGlyphELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRKS2_EEvOT_"]

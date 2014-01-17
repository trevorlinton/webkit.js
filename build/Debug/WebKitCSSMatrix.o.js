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
H_BASE = parentModule["_malloc"](136 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 136;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15WebKitCSSMatrixC1ERKNS_20TransformationMatrixE;
var __ZN7WebCore15WebKitCSSMatrixC1ERKN3WTF6StringERi;
var __ZN7WebCore15WebKitCSSMatrixD1Ev;
/* memory initializer */ allocate([109,97,116,114,105,120,51,100,40,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,41,0,0,0,0,0,0,0,0,109,97,116,114,105,120,40,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,44,32,37,102,41,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZTVN7WebCore15WebKitCSSMatrixE=(H_BASE+120)|0;
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
  var invoke_iiii=env.invoke_iiii;
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
function __ZN7WebCore15WebKitCSSMatrix14setMatrixValueERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 160 | 0;
 i10 = i4 + 168 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore22MutableStyleProperties6createENS_13CSSParserModeE(i5, 0);
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if (__ZN7WebCore9CSSParser10parseValueEPNS_22MutableStylePropertiesENS_13CSSPropertyIDERKN3WTF6StringEbNS_13CSSParserModeEPNS_18StyleSheetContentsE(i11, 345, i2, 1, 1, 0) | 0) {
   __ZNK7WebCore15StyleProperties19getPropertyCSSValueENS_13CSSPropertyIDE(i6, i11 | 0, 345);
   i5 = i6 | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i12 | 0) == 0) {
    break;
   }
   if ((HEAP32[i12 + 4 >> 2] & 516604 | 0) == 472) {
    if ((HEAP32[i12 + 8 >> 2] | 0) != 3) {
     i13 = 7;
    }
   } else {
    i13 = 7;
   }
   do {
    if ((i13 | 0) == 7) {
     __ZN7WebCore19TransformOperationsC1Eb(i7, 0);
     do {
      if (__ZN7WebCore18transformsForValueEPKNS_11RenderStyleES2_PNS_8CSSValueERNS_19TransformOperationsE(0, 0, i12, i7) | 0) {
       HEAPF64[i8 >> 3] = +1;
       _memset(i8 + 8 | 0, 0, 32) | 0;
       HEAPF64[i8 + 40 >> 3] = +1;
       _memset(i8 + 48 | 0, 0, 32) | 0;
       HEAPF64[i8 + 80 >> 3] = +1;
       _memset(i8 + 88 | 0, 0, 32) | 0;
       HEAPF64[i8 + 120 >> 3] = +1;
       i5 = i7 + 8 | 0;
       i14 = i7 | 0;
       i15 = i10 | 0;
       i16 = i10 + 4 | 0;
       i17 = 0;
       while (1) {
        if (i17 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
         i13 = 13;
         break;
        }
        i18 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i17 << 2) >> 2] | 0;
        i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 16 >> 2] | 0;
        HEAP32[i15 >> 2] = 0;
        HEAP32[i16 >> 2] = 0;
        __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i9, i10);
        if (FUNCTION_TABLE_iiii[i19 & 1](i18, i8, i9) | 0) {
         i13 = 12;
         break;
        } else {
         i17 = i17 + 1 | 0;
        }
       }
       if ((i13 | 0) == 12) {
        HEAP32[i3 >> 2] = 12;
        i20 = i5;
        i21 = i14;
        break;
       } else if ((i13 | 0) == 13) {
        _memcpy(i1 + 16 | 0, i8 | 0, 128) | 0;
        i20 = i5;
        i21 = i14;
        break;
       }
      } else {
       HEAP32[i3 >> 2] = 12;
       i20 = i7 + 8 | 0;
       i21 = i7 | 0;
      }
     } while (0);
     i17 = HEAP32[i20 >> 2] | 0;
     if ((i17 | 0) != 0) {
      i16 = HEAP32[i21 >> 2] | 0;
      i15 = i16 + (i17 << 2) | 0;
      i17 = i16;
      while (1) {
       i16 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i16 | 0) != 0) {
         i18 = i16 + 4 | 0;
         i19 = i18 | 0;
         i22 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
         if ((i22 | 0) != 0) {
          HEAP32[i19 >> 2] = i22;
          break;
         }
         i22 = i18 - 4 | 0;
         if ((i22 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 7](i22);
        }
       } while (0);
       i17 = i17 + 4 | 0;
       if ((i17 | 0) == (i15 | 0)) {
        break;
       }
      }
      HEAP32[i20 >> 2] = 0;
     }
     i15 = HEAP32[i21 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     HEAP32[i21 >> 2] = 0;
     HEAP32[i7 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i15);
    }
   } while (0);
   i15 = i12 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore8CSSValue7destroyEv(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i17;
    break;
   }
  } else {
   HEAP32[i3 >> 2] = 12;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i11 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 4 >> 2] & 4 | 0) == 0) {
  __ZN7WebCore24ImmutableStylePropertiesD1Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return;
 } else {
  __ZN7WebCore22MutableStylePropertiesD1Ev(i11);
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore15WebKitCSSMatrix8toStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i3 = STACKTOP;
 i4 = i2 + 16 | 0;
 d5 = +HEAPF64[i2 + 32 >> 3];
 d6 = +HEAPF64[i2 + 40 >> 3];
 do {
  if (d5 == +0 & d6 == +0) {
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 96 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 104 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 128 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 136 >> 3] != +1) {
    break;
   }
   d7 = +HEAPF64[i2 + 24 >> 3];
   d8 = +HEAPF64[i2 + 48 >> 3];
   d9 = +HEAPF64[i2 + 56 >> 3];
   d10 = +HEAPF64[i2 + 112 >> 3];
   d11 = +HEAPF64[i2 + 120 >> 3];
   __ZN3WTF6String6formatEPKcz(i1, H_BASE + 88 | 0, (i12 = STACKTOP, STACKTOP = STACKTOP + 48 | 0, HEAPF64[i12 >> 3] = +HEAPF64[i4 >> 3], HEAPF64[i12 + 8 >> 3] = d7, HEAPF64[i12 + 16 >> 3] = d8, HEAPF64[i12 + 24 >> 3] = d9, HEAPF64[i12 + 32 >> 3] = d10, HEAPF64[i12 + 40 >> 3] = d11, i12) | 0);
   STACKTOP = i12;
   STACKTOP = i3;
   return;
  }
 } while (0);
 d11 = +HEAPF64[i2 + 24 >> 3];
 d10 = +HEAPF64[i2 + 48 >> 3];
 d9 = +HEAPF64[i2 + 56 >> 3];
 d8 = +HEAPF64[i2 + 64 >> 3];
 d7 = +HEAPF64[i2 + 72 >> 3];
 d13 = +HEAPF64[i2 + 80 >> 3];
 d14 = +HEAPF64[i2 + 88 >> 3];
 d15 = +HEAPF64[i2 + 96 >> 3];
 d16 = +HEAPF64[i2 + 104 >> 3];
 d17 = +HEAPF64[i2 + 112 >> 3];
 d18 = +HEAPF64[i2 + 120 >> 3];
 d19 = +HEAPF64[i2 + 128 >> 3];
 d20 = +HEAPF64[i2 + 136 >> 3];
 __ZN3WTF6String6formatEPKcz(i1, H_BASE + 8 | 0, (i12 = STACKTOP, STACKTOP = STACKTOP + 128 | 0, HEAPF64[i12 >> 3] = +HEAPF64[i4 >> 3], HEAPF64[i12 + 8 >> 3] = d11, HEAPF64[i12 + 16 >> 3] = d5, HEAPF64[i12 + 24 >> 3] = d6, HEAPF64[i12 + 32 >> 3] = d10, HEAPF64[i12 + 40 >> 3] = d9, HEAPF64[i12 + 48 >> 3] = d8, HEAPF64[i12 + 56 >> 3] = d7, HEAPF64[i12 + 64 >> 3] = d13, HEAPF64[i12 + 72 >> 3] = d14, HEAPF64[i12 + 80 >> 3] = d15, HEAPF64[i12 + 88 >> 3] = d16, HEAPF64[i12 + 96 >> 3] = d17, HEAPF64[i12 + 104 >> 3] = d18, HEAPF64[i12 + 112 >> 3] = d19, HEAPF64[i12 + 120 >> 3] = d20, i12) | 0);
 STACKTOP = i12;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix6rotateEddd(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d10 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d3;
 HEAPF64[tempDoublePtr >> 3] = d4;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i8 = 2146435072;
 if (i9 >>> 0 > i8 >>> 0 | i9 >>> 0 == i8 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
  HEAPF64[tempDoublePtr >> 3] = d5;
  i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
  i9 = 2146435072;
  i11 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0;
  d12 = i11 ? d10 : d5;
  d13 = i11 ? +0 : d4;
  d14 = i11 ? +0 : d10;
 } else {
  d12 = d5;
  d13 = d4;
  d14 = d10;
 }
 HEAPF64[tempDoublePtr >> 3] = d13;
 i11 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d10 = i11 >>> 0 > i9 >>> 0 | i11 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d13;
 HEAPF64[tempDoublePtr >> 3] = d12;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i11 = 2146435072;
 d13 = i9 >>> 0 > i11 >>> 0 | i9 >>> 0 == i11 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d12;
 i11 = i2 + 16 | 0;
 if ((i11 | 0) != 0) {
  _memcpy(i7 | 0, i11 | 0, 128) | 0;
 }
 i11 = __ZN7WebCore20TransformationMatrix8rotate3dEddd(i7, d14, d10, d13) | 0;
 i7 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i7;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 1;
 HEAP32[i7 >> 2] = H_BASE + 128;
 i9 = i7 + 16 | 0;
 if ((i11 | 0) == 0 | (i9 | 0) == (i11 | 0)) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i2;
  STACKTOP = i6;
  return;
 }
 _memcpy(i9 | 0, i11 | 0, 128) | 0;
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = i2;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix15rotateAxisAngleEdddd(i1, i2, d3, d4, d5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i8 = i7 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i10 = 2146435072;
 d11 = i9 >>> 0 > i10 >>> 0 | i9 >>> 0 == i10 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d3;
 HEAPF64[tempDoublePtr >> 3] = d4;
 i10 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d3 = i10 >>> 0 > i9 >>> 0 | i10 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d4;
 HEAPF64[tempDoublePtr >> 3] = d5;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i10 = 2146435072;
 d4 = i9 >>> 0 > i10 >>> 0 | i9 >>> 0 == i10 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d5;
 HEAPF64[tempDoublePtr >> 3] = d6;
 i10 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d5 = i10 >>> 0 > i9 >>> 0 | i10 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d6;
 i9 = i2 + 16 | 0;
 if ((i9 | 0) != 0) {
  _memcpy(i8 | 0, i9 | 0, 128) | 0;
 }
 i9 = __ZN7WebCore20TransformationMatrix8rotate3dEdddd(i8, d11, d3, d11 == +0 & d3 == +0 & d4 == +0 ? +1 : d4, d5) | 0;
 i8 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i8;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 1;
 HEAP32[i8 >> 2] = H_BASE + 128;
 i10 = i8 + 16 | 0;
 if ((i9 | 0) == 0 | (i10 | 0) == (i9 | 0)) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i2;
  STACKTOP = i7;
  return;
 }
 _memcpy(i10 | 0, i9 | 0, 128) | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i2;
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix9translateEddd(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d10 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d3;
 HEAPF64[tempDoublePtr >> 3] = d4;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i8 = 2146435072;
 d3 = i9 >>> 0 > i8 >>> 0 | i9 >>> 0 == i8 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d4;
 HEAPF64[tempDoublePtr >> 3] = d5;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d4 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d5;
 i9 = i2 + 16 | 0;
 if ((i9 | 0) != 0) {
  _memcpy(i7 | 0, i9 | 0, 128) | 0;
 }
 i9 = __ZN7WebCore20TransformationMatrix11translate3dEddd(i7, d10, d3, d4) | 0;
 i7 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i7;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 1;
 HEAP32[i7 >> 2] = H_BASE + 128;
 i8 = i7 + 16 | 0;
 if ((i9 | 0) == 0 | (i8 | 0) == (i9 | 0)) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i2;
  STACKTOP = i6;
  return;
 }
 _memcpy(i8 | 0, i9 | 0, 128) | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i2;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix5scaleEddd(i1, i2, d3, d4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d10 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +1 : d3;
 HEAPF64[tempDoublePtr >> 3] = d4;
 i9 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i8 = 2146435072;
 d3 = i9 >>> 0 > i8 >>> 0 | i9 >>> 0 == i8 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? d10 : d4;
 HEAPF64[tempDoublePtr >> 3] = d5;
 i8 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i9 = 2146435072;
 d4 = i8 >>> 0 > i9 >>> 0 | i8 >>> 0 == i9 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +1 : d5;
 i9 = i2 + 16 | 0;
 if ((i9 | 0) != 0) {
  _memcpy(i7 | 0, i9 | 0, 128) | 0;
 }
 i9 = __ZN7WebCore20TransformationMatrix7scale3dEddd(i7, d10, d3, d4) | 0;
 i7 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i7;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = 1;
 HEAP32[i7 >> 2] = H_BASE + 128;
 i8 = i7 + 16 | 0;
 if ((i9 | 0) == 0 | (i8 | 0) == (i9 | 0)) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i2;
  STACKTOP = i6;
  return;
 }
 _memcpy(i8 | 0, i9 | 0, 128) | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i2;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix5skewYEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i6 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i7 = 2146435072;
 d8 = i6 >>> 0 > i7 >>> 0 | i6 >>> 0 == i7 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d3;
 i7 = i2 + 16 | 0;
 if ((i7 | 0) != 0) {
  _memcpy(i5 | 0, i7 | 0, 128) | 0;
 }
 i7 = __ZN7WebCore20TransformationMatrix4skewEdd(i5, +0, d8) | 0;
 i5 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i5;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 128;
 i6 = i5 + 16 | 0;
 if ((i7 | 0) == 0 | (i6 | 0) == (i7 | 0)) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 _memcpy(i6 | 0, i7 | 0, 128) | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix5skewXEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 HEAPF64[tempDoublePtr >> 3] = d3;
 i6 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
 i7 = 2146435072;
 d8 = i6 >>> 0 > i7 >>> 0 | i6 >>> 0 == i7 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0 ? +0 : d3;
 i7 = i2 + 16 | 0;
 if ((i7 | 0) != 0) {
  _memcpy(i5 | 0, i7 | 0, 128) | 0;
 }
 i7 = __ZN7WebCore20TransformationMatrix4skewEdd(i5, d8, +0) | 0;
 i5 = __ZN3WTF10fastMallocEj(144) | 0;
 i2 = i5;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = H_BASE + 128;
 i6 = i5 + 16 | 0;
 if ((i7 | 0) == 0 | (i6 | 0) == (i7 | 0)) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i2;
  STACKTOP = i4;
  return;
 }
 _memcpy(i6 | 0, i7 | 0, 128) | 0;
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = i2;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix8multiplyEPS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i6 = i2 + 16 | 0;
 if ((i6 | 0) != 0) {
  _memcpy(i5 | 0, i6 | 0, 128) | 0;
 }
 i6 = __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i5, i3 + 16 | 0) | 0;
 i3 = __ZN3WTF10fastMallocEj(144) | 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 1;
 HEAP32[i3 >> 2] = H_BASE + 128;
 i5 = i3 + 16 | 0;
 if (!((i6 | 0) == 0 | (i5 | 0) == (i6 | 0))) {
  _memcpy(i5 | 0, i6 | 0, 128) | 0;
 }
 HEAP32[i1 >> 2] = i3;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15WebKitCSSMatrix7inverseERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = i2 + 16 | 0;
 if (!(__ZNK7WebCore20TransformationMatrix12isInvertibleEv(i6) | 0)) {
  HEAP32[i3 >> 2] = 9;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore20TransformationMatrix7inverseEv(i5, i6);
 i6 = __ZN3WTF10fastMallocEj(144) | 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 1;
 HEAP32[i6 >> 2] = H_BASE + 128;
 i3 = i6 + 16 | 0;
 if ((i3 | 0) != (i5 | 0)) {
  _memcpy(i3 | 0, i5 | 0, 128) | 0;
 }
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i4;
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
function __ZN7WebCore15WebKitCSSMatrixC2ERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAPF64[i1 + 16 >> 3] = +1;
 _memset(i1 + 24 | 0, 0, 32) | 0;
 HEAPF64[i1 + 56 >> 3] = +1;
 _memset(i1 + 64 | 0, 0, 32) | 0;
 HEAPF64[i1 + 96 >> 3] = +1;
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAPF64[i1 + 136 >> 3] = +1;
 __ZN7WebCore15WebKitCSSMatrix14setMatrixValueERKN3WTF6StringERi(i1, i2, i3);
 return;
}
function __ZN7WebCore15WebKitCSSMatrixC1ERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 128;
 HEAPF64[i1 + 16 >> 3] = +1;
 _memset(i1 + 24 | 0, 0, 32) | 0;
 HEAPF64[i1 + 56 >> 3] = +1;
 _memset(i1 + 64 | 0, 0, 32) | 0;
 HEAPF64[i1 + 96 >> 3] = +1;
 _memset(i1 + 104 | 0, 0, 32) | 0;
 HEAPF64[i1 + 136 >> 3] = +1;
 __ZN7WebCore15WebKitCSSMatrix14setMatrixValueERKN3WTF6StringERi(i1, i2, i3);
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
function __ZN7WebCore15WebKitCSSMatrixC2ERKNS_20TransformationMatrixE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i3 = i1 + 16 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  return;
 }
 _memcpy(i3 | 0, i2 | 0, 128) | 0;
 return;
}
function __ZN7WebCore15WebKitCSSMatrixC1ERKNS_20TransformationMatrixE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 128;
 i3 = i1 + 16 | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == (i2 | 0)) {
  return;
 }
 _memcpy(i3 | 0, i2 | 0, 128) | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15WebKitCSSMatrixD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15WebKitCSSMatrixD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore15WebKitCSSMatrixD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
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
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function runPostSets() {
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 4;
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
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
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
  var FUNCTION_TABLE_iiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15WebKitCSSMatrixD2Ev,b1,__ZN7WebCore15WebKitCSSMatrixD0Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15WebKitCSSMatrixC2ERKNS_20TransformationMatrixE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore15WebKitCSSMatrixC2ERKN3WTF6StringERi,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore15WebKitCSSMatrix8multiplyEPS0_","_memcpy","__ZNK7WebCore15WebKitCSSMatrix7inverseERi","__ZN7WebCore15WebKitCSSMatrixC2ERKN3WTF6StringERi","_memset","__ZNK7WebCore15WebKitCSSMatrix5skewYEd","__ZNK7WebCore15WebKitCSSMatrix15rotateAxisAngleEdddd","__ZN7WebCore15WebKitCSSMatrixD2Ev","__ZNK7WebCore15WebKitCSSMatrix5scaleEddd","_strlen","__ZNK7WebCore15WebKitCSSMatrix5skewXEd","__ZNK7WebCore15WebKitCSSMatrix6rotateEddd","__ZNK7WebCore15WebKitCSSMatrix8toStringEv","__ZN7WebCore15WebKitCSSMatrixD0Ev","__ZN7WebCore15WebKitCSSMatrix14setMatrixValueERKN3WTF6StringERi","__ZN7WebCore15WebKitCSSMatrixC2ERKNS_20TransformationMatrixE","__ZNK7WebCore15WebKitCSSMatrix9translateEddd"]

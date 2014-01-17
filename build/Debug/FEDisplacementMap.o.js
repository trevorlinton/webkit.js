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
H_BASE = parentModule["_malloc"](208 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 208;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17FEDisplacementMapC1EPNS_6FilterENS_19ChannelSelectorTypeES3_f;
/* memory initializer */ allocate([66,76,85,69,0,0,0,0,71,82,69,69,78,0,0,0,82,69,68,0,0,0,0,0,85,78,75,78,79,87,78,0,34,93,10,0,0,0,0,0,121,67,104,97,110,110,101,108,83,101,108,101,99,116,111,114,61,34,0,0,0,0,0,0,120,67,104,97,110,110,101,108,83,101,108,101,99,116,111,114,61,34,0,0,0,0,0,0,34,32,0,0,0,0,0,0,65,76,80,72,65,0,0,0,32,115,99,97,108,101,61,34,0,0,0,0,0,0,0,0,91,102,101,68,105,115,112,108,97,99,101,109,101,110,116,77,97,112,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiif(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiif"](index,a1,a2,a3,a4,a5);
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
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
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
  var __ZTVN7WebCore17FEDisplacementMapE=(H_BASE+152)|0;
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
  var invoke_viiiif=env.invoke_viiiif;
  var invoke_iiii=env.invoke_iiii;
  var invoke_fif=env.invoke_fif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _rint=env._rint;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17FEDisplacementMap21platformApplySoftwareEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = i2 + 72 | 0;
 i9 = i1 | 0;
 i10 = __ZNK7WebCore12FilterEffect11inputEffectEj(i9, 0) | 0;
 i11 = __ZNK7WebCore12FilterEffect11inputEffectEj(i9, 1) | 0;
 i12 = __ZN7WebCore12FilterEffect30createPremultipliedImageResultEv(i9) | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i13 = i4;
 i14 = i10 + 36 | 0;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i3, i9, i4);
 __ZN7WebCore12FilterEffect20asPremultipliedImageERKNS_7IntRectE(i5, i10, i3);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i7;
 i10 = i11 + 36 | 0;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 __ZNK7WebCore12FilterEffect31requestedRegionOfInputImageDataERKNS_7IntRectE(i6, i9, i7);
 __ZN7WebCore12FilterEffect19asUnmultipliedImageERKNS_7IntRectE(i8, i11, i6);
 i6 = i8 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i1 + 68 >> 2] | 0;
 i11 = i1 + 44 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i7;
 i7 = i9;
 i9 = i6;
 i10 = i1 + 128 | 0;
 d15 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 1](i6, +HEAPF32[i10 >> 2]);
 d16 = +FUNCTION_TABLE_fif[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1](i6, +HEAPF32[i10 >> 2]);
 d17 = d15 / +255;
 d18 = d16 / +255;
 d19 = +.5 - d15 * +.5;
 d15 = +.5 - d16 * +.5;
 i10 = i11 << 2;
 if ((i7 | 0) > 0) {
  i6 = (i11 | 0) > 0;
  i9 = i1 + 120 | 0;
  i3 = i8 + 8 | 0;
  i4 = i1 + 124 | 0;
  i1 = i12 + 8 | 0;
  i12 = i5 + 8 | 0;
  i14 = 0;
  while (1) {
   i13 = Math_imul(i14, i10) | 0;
   if (i6) {
    i20 = 0;
    while (1) {
     i21 = (i20 << 2) + i13 | 0;
     i22 = i21 - 1 | 0;
     i23 = HEAP32[i3 >> 2] | 0;
     i24 = ~~(d19 + d17 * +(HEAPU8[i23 + (i22 + (HEAP32[i9 >> 2] | 0)) | 0] | 0 | 0)) + i20 | 0;
     i25 = ~~(d15 + d18 * +(HEAPU8[i23 + ((HEAP32[i4 >> 2] | 0) + i22) | 0] | 0 | 0)) + i14 | 0;
     i22 = (Math_imul(i25, i10) | 0) + (i24 << 2) | 0;
     do {
      if ((i24 | 0) < 0) {
       i23 = (_rint(+(+0)) | 0) & 255;
       HEAP8[(HEAP32[i1 >> 2] | 0) + i21 | 0] = i23;
       i23 = (_rint(+(+0)) | 0) & 255;
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 1) | 0] = i23;
       i23 = (_rint(+(+0)) | 0) & 255;
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 2) | 0] = i23;
       i23 = (_rint(+(+0)) | 0) & 255;
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 3) | 0] = i23;
      } else {
       if (!((i25 | 0) > -1 & (i24 | 0) < (i11 | 0) & (i25 | 0) < (i7 | 0))) {
        i23 = (_rint(+(+0)) | 0) & 255;
        HEAP8[(HEAP32[i1 >> 2] | 0) + i21 | 0] = i23;
        i23 = (_rint(+(+0)) | 0) & 255;
        HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 1) | 0] = i23;
        i23 = (_rint(+(+0)) | 0) & 255;
        HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 2) | 0] = i23;
        i23 = (_rint(+(+0)) | 0) & 255;
        HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 3) | 0] = i23;
        break;
       }
       d16 = +((HEAPU8[(HEAP32[i12 >> 2] | 0) + i22 | 0] | 0) >>> 0);
       HEAPF64[tempDoublePtr >> 3] = d16;
       i23 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
       i26 = 2146435072;
       if (i23 >>> 0 > i26 >>> 0 | i23 >>> 0 == i26 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
        i27 = 0;
       } else {
        i27 = (_rint(+d16) | 0) & 255;
       }
       HEAP8[(HEAP32[i1 >> 2] | 0) + i21 | 0] = i27;
       d16 = +((HEAPU8[(HEAP32[i12 >> 2] | 0) + (i22 | 1) | 0] | 0) >>> 0);
       HEAPF64[tempDoublePtr >> 3] = d16;
       i26 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
       i23 = 2146435072;
       if (i26 >>> 0 > i23 >>> 0 | i26 >>> 0 == i23 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
        i28 = 0;
       } else {
        i28 = (_rint(+d16) | 0) & 255;
       }
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 1) | 0] = i28;
       d16 = +((HEAPU8[(HEAP32[i12 >> 2] | 0) + (i22 | 2) | 0] | 0) >>> 0);
       HEAPF64[tempDoublePtr >> 3] = d16;
       i23 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
       i26 = 2146435072;
       if (i23 >>> 0 > i26 >>> 0 | i23 >>> 0 == i26 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
        i29 = 0;
       } else {
        i29 = (_rint(+d16) | 0) & 255;
       }
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 2) | 0] = i29;
       d16 = +((HEAPU8[(HEAP32[i12 >> 2] | 0) + (i22 | 3) | 0] | 0) >>> 0);
       HEAPF64[tempDoublePtr >> 3] = d16;
       i26 = HEAP32[tempDoublePtr + 4 >> 2] & 2147483647;
       i23 = 2146435072;
       if (i26 >>> 0 > i23 >>> 0 | i26 >>> 0 == i23 >>> 0 & (HEAP32[tempDoublePtr >> 2] & -1) >>> 0 > 0 >>> 0) {
        i30 = 0;
       } else {
        i30 = (_rint(+d16) | 0) & 255;
       }
       HEAP8[(HEAP32[i1 >> 2] | 0) + (i21 | 3) | 0] = i30;
      }
     } while (0);
     i20 = i20 + 1 | 0;
     if ((i20 | 0) >= (i11 | 0)) {
      break;
     }
    }
   }
   i14 = i14 + 1 | 0;
   if ((i14 | 0) >= (i7 | 0)) {
    break;
   }
  }
 }
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 4 | 0;
   i14 = i7 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i14 >> 2] = i11;
    break;
   }
   i11 = i7 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 15](i11);
  }
 } while (0);
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i5 + 4 | 0;
 i5 = i8 | 0;
 i11 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i5 >> 2] = i11;
  STACKTOP = i2;
  return;
 }
 i11 = i8 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 12 >> 2] & 15](i11);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore17FEDisplacementMap22externalRepresentationERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
 __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 128 | 0) | 0;
 i4 = i1 | 0;
 __ZNK7WebCore12FilterEffect22externalRepresentationERNS_10TextStreamEi(i4, i2, 0) | 0;
 i5 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 112 | 0) | 0;
 i6 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i5, +HEAPF32[i1 + 128 >> 2]) | 0, H_BASE + 96 | 0) | 0, H_BASE + 72 | 0) | 0;
 switch (HEAP32[i1 + 120 >> 2] | 0) {
 case 2:
  {
   __ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 16 | 0) | 0;
   break;
  }
 case 3:
  {
   __ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 8 | 0) | 0;
   break;
  }
 case 1:
  {
   __ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 24 | 0) | 0;
   break;
  }
 case 4:
  {
   __ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 104 | 0) | 0;
   break;
  }
 case 0:
  {
   __ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 32 | 0) | 0;
   break;
  }
 default:
  {}
 }
 i5 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(i6, H_BASE + 96 | 0) | 0, H_BASE + 48 | 0) | 0;
 switch (HEAP32[i1 + 124 >> 2] | 0) {
 case 0:
  {
   __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 32 | 0) | 0;
   break;
  }
 case 1:
  {
   __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 24 | 0) | 0;
   break;
  }
 case 2:
  {
   __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 16 | 0) | 0;
   break;
  }
 case 3:
  {
   __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 8 | 0) | 0;
   break;
  }
 case 4:
  {
   __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 104 | 0) | 0;
   break;
  }
 default:
  {}
 }
 __ZN7WebCore10TextStreamlsEPKc(i5, H_BASE + 40 | 0) | 0;
 i5 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 0) | 0;
 i1 = i3 + 1 | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 3](i5, i2, i1) | 0;
 i5 = __ZNK7WebCore12FilterEffect11inputEffectEj(i4, 1) | 0;
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 28 >> 2] & 3](i5, i2, i1) | 0;
 return i2 | 0;
}
function __ZN7WebCore17FEDisplacementMap26determineAbsolutePaintRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4;
 i6 = i1 + 52 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i3, i4);
 i4 = i1 + 36 | 0;
 i1 = i3;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 4;
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
function __ZN7WebCore17FEDisplacementMap6createEPNS_6FilterENS_19ChannelSelectorTypeES3_f(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0;
 i6 = __ZN3WTF10fastMallocEj(132) | 0;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i6, i2);
 HEAP32[i6 >> 2] = H_BASE + 160;
 HEAP32[i6 + 120 >> 2] = i3;
 HEAP32[i6 + 124 >> 2] = i4;
 HEAPF32[i6 + 128 >> 2] = d5;
 HEAP32[i1 >> 2] = i6;
 return;
}
function __ZN7WebCore17FEDisplacementMapC2EPNS_6FilterENS_19ChannelSelectorTypeES3_f(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAP32[i1 + 124 >> 2] = i4;
 HEAPF32[i1 + 128 >> 2] = d5;
 return;
}
function __ZN7WebCore17FEDisplacementMapC1EPNS_6FilterENS_19ChannelSelectorTypeES3_f(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 __ZN7WebCore12FilterEffectC2EPNS_6FilterE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 160;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAP32[i1 + 124 >> 2] = i4;
 HEAPF32[i1 + 128 >> 2] = d5;
 return;
}
function __ZN7WebCore17FEDisplacementMap25transformResultColorSpaceEPNS_12FilterEffectEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore12FilterEffect25transformResultColorSpaceENS_10ColorSpaceE(i2, HEAP32[i1 + 112 >> 2] | 0);
 return;
}
function __ZN7WebCore17FEDisplacementMap19setYChannelSelectorENS_19ChannelSelectorTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 124 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore17FEDisplacementMap19setXChannelSelectorENS_19ChannelSelectorTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 120 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore17FEDisplacementMap8setScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = i1 + 128 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  i4 = 0;
  return i4 | 0;
 }
 HEAPF32[i3 >> 2] = d2;
 i4 = 1;
 return i4 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17FEDisplacementMap19setResultColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 116 >> 2] = HEAP32[(__ZNK7WebCore12FilterEffect11inputEffectEj(i1 | 0, 0) | 0) + 116 >> 2];
 return;
}
function dynCall_viiiif(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiif[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 112 >> 2] = i2;
 return;
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
function __ZN7WebCore17FEDisplacementMapD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 1](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZNK7WebCore17FEDisplacementMap16yChannelSelectorEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 124 >> 2] | 0;
}
function __ZNK7WebCore17FEDisplacementMap16xChannelSelectorEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 120 >> 2] | 0;
}
function __ZN7WebCore17FEDisplacementMapD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12FilterEffectD2Ev(i1 | 0);
 return;
}
function b3(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(3);
}
function __ZNK7WebCore17FEDisplacementMap5scaleEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 128 >> 2]);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function __ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore12FilterEffect16filterEffectTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZN7WebCore17FEDisplacementMap4dumpEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b5(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(5);
 return +0;
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
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12FilterEffect16filterEffectTypeEv,b0,__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore17FEDisplacementMap21platformApplySoftwareEv,b1,__ZN7WebCore17FEDisplacementMap4dumpEv,b1,__ZN7WebCore17FEDisplacementMapD0Ev,b1,__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv,b1,__ZN7WebCore17FEDisplacementMapD1Ev,b1,__ZN7WebCore17FEDisplacementMap26determineAbsolutePaintRectEv,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore17FEDisplacementMap19setResultColorSpaceENS_10ColorSpaceE,b2,__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE,b2,b2,b2];
  var FUNCTION_TABLE_viiiif = [b3,b3,__ZN7WebCore17FEDisplacementMapC2EPNS_6FilterENS_19ChannelSelectorTypeES3_f,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,__ZNK7WebCore17FEDisplacementMap22externalRepresentationERNS_10TextStreamEi,b4];
  var FUNCTION_TABLE_fif = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore17FEDisplacementMap25transformResultColorSpaceEPNS_12FilterEffectEi,b6];
  var FUNCTION_TABLE_v = [b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiif: dynCall_viiiif, dynCall_iiii: dynCall_iiii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiif": invoke_viiiif, "invoke_iiii": invoke_iiii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_rint": _rint, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiif = Module["dynCall_viiiif"] = asm["dynCall_viiiif"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore17FEDisplacementMap22externalRepresentationERNS_10TextStreamEi","__ZNK7WebCore17FEDisplacementMap16xChannelSelectorEv","__ZN7WebCore17FEDisplacementMapD0Ev","__ZN7WebCore17FEDisplacementMap19setResultColorSpaceENS_10ColorSpaceE","__ZN7WebCore12FilterEffect27correctFilterResultIfNeededEv","_memset","__ZN7WebCore17FEDisplacementMapD1Ev","__ZN7WebCore17FEDisplacementMap25transformResultColorSpaceEPNS_12FilterEffectEi","_memcpy","__ZN7WebCore17FEDisplacementMap26determineAbsolutePaintRectEv","__ZN7WebCore17FEDisplacementMap21platformApplySoftwareEv","__ZNK7WebCore17FEDisplacementMap16yChannelSelectorEv","__ZN7WebCore17FEDisplacementMap6createEPNS_6FilterENS_19ChannelSelectorTypeES3_f","__ZNK7WebCore12FilterEffect16filterEffectTypeEv","__ZN7WebCore17FEDisplacementMapC2EPNS_6FilterENS_19ChannelSelectorTypeES3_f","__ZN7WebCore17FEDisplacementMap8setScaleEf","__ZNK7WebCore17FEDisplacementMap5scaleEv","__ZN7WebCore12FilterEffect22setOperatingColorSpaceENS_10ColorSpaceE","__ZN7WebCore17FEDisplacementMap19setXChannelSelectorENS_19ChannelSelectorTypeE","__ZN7WebCore17FEDisplacementMap4dumpEv","__ZN7WebCore17FEDisplacementMap19setYChannelSelectorENS_19ChannelSelectorTypeE","__ZN7WebCore12FilterEffect32requiresValidPreMultipliedPixelsEv"]

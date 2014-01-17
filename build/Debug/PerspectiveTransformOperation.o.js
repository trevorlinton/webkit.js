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
H_BASE = parentModule["_malloc"](48 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 48;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore29PerspectiveTransformOperationE=(H_BASE+8)|0;
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
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore29PerspectiveTransformOperation5blendEPKNS_18TransformOperationEdb(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = (i3 | 0) == 0;
 do {
  if (!i20) {
   i21 = i2 | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 7](i3, i21) | 0) {
    break;
   }
   HEAP32[i1 >> 2] = i21;
   if ((i2 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i21 = i2 + 4 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   STACKTOP = i6;
   return;
  }
 } while (0);
 if (i5) {
  d22 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2 + 8 | 0, +1, 0);
  d23 = d22 + (+1 - d22) * d4;
  do {
   if (d23 < +2147483647) {
    if (d23 <= +0) {
     i24 = 0;
     break;
    }
    i24 = ~~d23;
   } else {
    i24 = 2147483647;
   }
  } while (0);
  HEAP32[i7 >> 2] = i24;
  HEAP8[i8 + 4 | 0] = 0;
  i24 = i8 + 5 | 0;
  HEAP8[i24] = 3;
  HEAP8[i8 + 6 | 0] = 0;
  i5 = __ZN3WTF10fastMallocEj(16) | 0;
  HEAP32[i5 + 4 >> 2] = 1;
  HEAP32[i5 >> 2] = H_BASE + 16;
  i21 = i5 + 8 | 0;
  i25 = i21;
  i26 = HEAP32[i7 >> 2] | 0;
  i27 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i25 >> 2] = i26;
  HEAP32[i25 + 4 >> 2] = i27;
  if ((i26 & 0 | 0) == 0 & (i27 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i21);
  }
  HEAP32[i1 >> 2] = i5;
  if ((HEAP8[i24] | 0) != 10) {
   STACKTOP = i6;
   return;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  STACKTOP = i6;
  return;
 }
 do {
  if (i20) {
   i8 = HEAP8[i2 + 13 | 0] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP8[i10 + 4 | 0] = 0;
   HEAP8[i10 + 5 | 0] = i8;
   HEAP8[i10 + 6 | 0] = 0;
  } else {
   i8 = i3 + 8 | 0;
   i24 = HEAP32[i8 >> 2] | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = i24;
   HEAP32[i9 + 4 >> 2] = i5;
   if (!((i24 & 0 | 0) == 0 & (i5 & 65280 | 0) == 2560)) {
    break;
   }
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
  }
 } while (0);
 i9 = i2 + 8 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i2;
 HEAP32[i11 + 4 >> 2] = i3;
 if ((i2 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i12);
 }
 HEAPF64[i13 >> 3] = +1;
 _memset(i13 + 8 | 0, 0, 32) | 0;
 HEAPF64[i13 + 40 >> 3] = +1;
 _memset(i13 + 48 | 0, 0, 32) | 0;
 HEAPF64[i13 + 80 >> 3] = +1;
 _memset(i13 + 88 | 0, 0, 32) | 0;
 HEAPF64[i13 + 120 >> 3] = +1;
 HEAPF64[i14 >> 3] = +1;
 _memset(i14 + 8 | 0, 0, 32) | 0;
 HEAPF64[i14 + 40 >> 3] = +1;
 _memset(i14 + 48 | 0, 0, 32) | 0;
 HEAPF64[i14 + 80 >> 3] = +1;
 _memset(i14 + 88 | 0, 0, 32) | 0;
 HEAPF64[i14 + 120 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i13, +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i10, +1, 0)) | 0;
 __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i14, +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i12, +1, 0)) | 0;
 __ZN7WebCore20TransformationMatrix5blendERKS0_d(i14, i13, d4);
 __ZNK7WebCore20TransformationMatrix10decompose4ERNS0_15Decomposed4TypeE(i14, i15) | 0;
 d4 = +HEAPF64[i15 + 120 >> 3];
 do {
  if (d4 != +0) {
   d23 = +-1 / d4;
   do {
    if (d23 < +2147483647) {
     if (d23 <= +0) {
      i28 = 0;
      break;
     }
     i28 = ~~d23;
    } else {
     i28 = 2147483647;
    }
   } while (0);
   HEAP32[i16 >> 2] = i28;
   HEAP8[i17 + 4 | 0] = 0;
   i15 = i17 + 5 | 0;
   HEAP8[i15] = 3;
   HEAP8[i17 + 6 | 0] = 0;
   i14 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i14 + 4 >> 2] = 1;
   HEAP32[i14 >> 2] = H_BASE + 16;
   i13 = i14 + 8 | 0;
   i3 = i13;
   i2 = HEAP32[i16 >> 2] | 0;
   i11 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i2;
   HEAP32[i3 + 4 >> 2] = i11;
   if ((i2 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
   }
   HEAP32[i1 >> 2] = i14;
   if ((HEAP8[i15] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
  } else {
   HEAP32[i18 >> 2] = 0;
   HEAP8[i19 + 4 | 0] = 0;
   i15 = i19 + 5 | 0;
   HEAP8[i15] = 3;
   HEAP8[i19 + 6 | 0] = 0;
   i14 = __ZN3WTF10fastMallocEj(16) | 0;
   HEAP32[i14 + 4 >> 2] = 1;
   HEAP32[i14 >> 2] = H_BASE + 16;
   i13 = i14 + 8 | 0;
   i11 = i13;
   i2 = HEAP32[i18 >> 2] | 0;
   i3 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i2;
   HEAP32[i11 + 4 >> 2] = i3;
   if ((i2 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
   }
   HEAP32[i1 >> 2] = i14;
   if ((HEAP8[i15] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
  }
 } while (0);
 if ((HEAP8[i12 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
 }
 if ((HEAP8[i10 + 5 | 0] | 0) != 10) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore29PerspectiveTransformOperationeqERKNS_18TransformOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 28 >> 2] & 7](i1, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i1 + 8 | 0;
 i5 = i2 + 8 | 0;
 i6 = i5;
 i7 = HEAP8[i1 + 13 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i6 + 5 | 0] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (i7 << 24 >> 24 == 15) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d8 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d8 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
  d9 = +(HEAP32[i5 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i5 >> 2];
 }
 if (d8 == d9) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i6) | 0;
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
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iii + 2;
}
function __ZNK7WebCore29PerspectiveTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i2, +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 8 | 0, +1, 0)) | 0;
 return 0;
}
function __ZN7WebCore29PerspectiveTransformOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if ((HEAP8[i1 + 13 | 0] | 0) != 10) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore29PerspectiveTransformOperationD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 if ((HEAP8[i1 + 13 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 8 | 0);
 return;
}
function __ZNK7WebCore29PerspectiveTransformOperation10isSameTypeERKNS_18TransformOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 7](i2) | 0) == 19 | 0;
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function __ZNK7WebCore29PerspectiveTransformOperation10isIdentityEv(i1) {
 i1 = i1 | 0;
 return +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i1 + 8 | 0, +1, 0) == +0 | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function b2(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(2);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
}
function __ZNK7WebCore29PerspectiveTransformOperation4typeEv(i1) {
 i1 = i1 | 0;
 return 19;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
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
  var FUNCTION_TABLE_iiii = [b0,b0,__ZNK7WebCore29PerspectiveTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore29PerspectiveTransformOperationD0Ev,b1,__ZN7WebCore29PerspectiveTransformOperationD1Ev,b1,b1,b1];
  var FUNCTION_TABLE_viiidi = [b2,b2,__ZN7WebCore29PerspectiveTransformOperation5blendEPKNS_18TransformOperationEdb,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore29PerspectiveTransformOperation10isIdentityEv,b3,__ZNK7WebCore29PerspectiveTransformOperation4typeEv,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5,__ZNK7WebCore29PerspectiveTransformOperation10isSameTypeERKNS_18TransformOperationE,b5,__ZNK7WebCore29PerspectiveTransformOperationeqERKNS_18TransformOperationE,b5,b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_viiidi: dynCall_viiidi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_viiidi": invoke_viiidi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore29PerspectiveTransformOperation10isIdentityEv","__ZNK7WebCore29PerspectiveTransformOperation10isSameTypeERKNS_18TransformOperationE","__ZNK7WebCore29PerspectiveTransformOperation5applyERNS_20TransformationMatrixERKNS_9FloatSizeE","__ZNK7WebCore29PerspectiveTransformOperationeqERKNS_18TransformOperationE","_memset","__ZN7WebCore29PerspectiveTransformOperationD0Ev","_memcpy","__ZN7WebCore29PerspectiveTransformOperation5blendEPKNS_18TransformOperationEdb","__ZN7WebCore29PerspectiveTransformOperationD1Ev","__ZNK7WebCore29PerspectiveTransformOperation4typeEv"]

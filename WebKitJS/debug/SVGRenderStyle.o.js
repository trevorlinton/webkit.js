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
var __ZN7WebCore14SVGRenderStyleC1Ev;
var __ZN7WebCore14SVGRenderStyleC1ENS0_17CreateDefaultTypeE;
var __ZN7WebCore14SVGRenderStyleD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore14SVGRenderStyle4diffEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleTextDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 8;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore17StyleResourceDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 8;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore26StyleInheritedResourceDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 8;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = i1 + 4 | 0;
 i3 = i2 + 4 | 0;
 if (((HEAP32[i3 >> 2] ^ HEAP32[i4 >> 2]) & 33491968 | 0) != 0) {
  i5 = 8;
  return i5 | 0;
 }
 i6 = i1 + 8 | 0;
 i7 = i2 + 8 | 0;
 if (((HEAP32[i7 >> 2] ^ HEAP32[i6 >> 2]) & 1023 | 0) != 0) {
  i5 = 8;
  return i5 | 0;
 }
 i8 = i1 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i2 + 32 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) == (i11 | 0)) {
   i12 = 0;
  } else {
   if (__ZNK7WebCore13StyleMiscDataeqERKS0_(i9, i11) | 0) {
    i12 = 0;
    break;
   }
   if (__ZNK7WebCore9SVGLengthneERKS0_((HEAP32[i8 >> 2] | 0) + 24 | 0, (HEAP32[i10 >> 2] | 0) + 24 | 0) | 0) {
    i5 = 8;
   } else {
    i12 = 1;
    break;
   }
   return i5 | 0;
  }
 } while (0);
 if (((HEAP32[i3 >> 2] ^ HEAP32[i4 >> 2]) & 960 | 0) != 0) {
  i5 = 8;
  return i5 | 0;
 }
 i11 = HEAP32[i1 + 36 >> 2] | 0;
 i9 = HEAP32[i2 + 36 >> 2] | 0;
 do {
  if ((i11 | 0) != (i9 | 0)) {
   if (__ZNK7WebCore18StyleShadowSVGDataeqERKS0_(i11, i9) | 0) {
    break;
   } else {
    i5 = 8;
   }
   return i5 | 0;
  }
 } while (0);
 i9 = i1 + 16 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i13 = i2 + 16 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i11 | 0) != (i14 | 0)) {
   if (__ZNK7WebCore15StyleStrokeDataeqERKS0_(i11, i14) | 0) {
    break;
   }
   if (__ZNK7WebCore9SVGLengthneERKS0_((HEAP32[i9 >> 2] | 0) + 12 | 0, (HEAP32[i13 >> 2] | 0) + 12 | 0) | 0) {
    i5 = 8;
    return i5 | 0;
   }
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = HEAP32[i13 >> 2] | 0;
   if ((HEAP32[i15 + 40 >> 2] | 0) != (HEAP32[i16 + 40 >> 2] | 0)) {
    i5 = 8;
    return i5 | 0;
   }
   if ((HEAP32[i15 + 44 >> 2] | 0) != (HEAP32[i16 + 44 >> 2] | 0)) {
    i5 = 8;
    return i5 | 0;
   }
   if ((HEAP8[i15 + 48 | 0] & 1) != 0 ^ (HEAP8[i16 + 48 | 0] & 1) != 0) {
    i5 = 8;
    return i5 | 0;
   }
   if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 52 >> 2] | 0, HEAP32[i16 + 52 >> 2] | 0) | 0)) {
    i5 = 8;
    return i5 | 0;
   }
   i16 = HEAP32[i9 >> 2] | 0;
   i15 = HEAP32[i13 >> 2] | 0;
   if (+HEAPF32[i16 + 8 >> 2] != +HEAPF32[i15 + 8 >> 2]) {
    i5 = 8;
    return i5 | 0;
   }
   i17 = HEAP32[i16 + 36 >> 2] | 0;
   if ((i17 | 0) != (HEAP32[i15 + 36 >> 2] | 0)) {
    i5 = 8;
    return i5 | 0;
   }
   i18 = HEAP32[i16 + 28 >> 2] | 0;
   i16 = HEAP32[i15 + 28 >> 2] | 0;
   i15 = 0;
   while (1) {
    if (i15 >>> 0 >= i17 >>> 0) {
     break;
    }
    if (__ZNK7WebCore9SVGLengtheqERKS0_(i18 + (i15 << 3) | 0, i16 + (i15 << 3) | 0) | 0) {
     i15 = i15 + 1 | 0;
    } else {
     i5 = 8;
     i19 = 64;
     break;
    }
   }
   if ((i19 | 0) == 64) {
    return i5 | 0;
   }
   if (__ZNK7WebCore9SVGLengthneERKS0_((HEAP32[i9 >> 2] | 0) + 20 | 0, (HEAP32[i13 >> 2] | 0) + 20 | 0) | 0) {
    i5 = 8;
    return i5 | 0;
   }
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = HEAP32[i13 >> 2] | 0;
   if ((HEAP32[i15 + 60 >> 2] | 0) != (HEAP32[i16 + 60 >> 2] | 0)) {
    i5 = 8;
    return i5 | 0;
   }
   if ((HEAP8[i15 + 64 | 0] & 1) != 0 ^ (HEAP8[i16 + 64 | 0] & 1) != 0) {
    i5 = 8;
    return i5 | 0;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 68 >> 2] | 0, HEAP32[i16 + 68 >> 2] | 0) | 0) {
    return ((HEAP32[(HEAP32[i9 >> 2] | 0) + 56 >> 2] | 0) == (HEAP32[(HEAP32[i13 >> 2] | 0) + 56 >> 2] | 0) ? 2 : 8) | 0;
   } else {
    i5 = 8;
    return i5 | 0;
   }
  }
 } while (0);
 do {
  if (i12) {
   i13 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   if ((HEAP32[i13 + 4 >> 2] | 0) != (HEAP32[i9 + 4 >> 2] | 0)) {
    i5 = 2;
    return i5 | 0;
   }
   if ((HEAP8[i13 + 8 | 0] & 1) != 0 ^ (HEAP8[i9 + 8 | 0] & 1) != 0) {
    i5 = 2;
    return i5 | 0;
   }
   if (+HEAPF32[i13 + 12 >> 2] != +HEAPF32[i9 + 12 >> 2]) {
    i5 = 2;
    return i5 | 0;
   }
   if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
    i5 = 2;
    return i5 | 0;
   }
   if ((HEAP8[i13 + 20 | 0] & 1) != 0 ^ (HEAP8[i9 + 20 | 0] & 1) != 0) {
    i5 = 2;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i10 = i1 + 12 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 i12 = i2 + 12 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i8 + 8 >> 2] | 0) != (HEAP32[i9 + 8 >> 2] | 0)) {
  i5 = 2;
  return i5 | 0;
 }
 if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
  i5 = 2;
  return i5 | 0;
 }
 if ((HEAP8[i8 + 16 | 0] & 1) != 0 ^ (HEAP8[i9 + 16 | 0] & 1) != 0) {
  i5 = 2;
  return i5 | 0;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i8 + 20 >> 2] | 0, HEAP32[i9 + 20 >> 2] | 0) | 0)) {
  i5 = 2;
  return i5 | 0;
 }
 if (+HEAPF32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] != +HEAPF32[(HEAP32[i12 >> 2] | 0) + 4 >> 2]) {
  i5 = 2;
  return i5 | 0;
 }
 i12 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i12 | 0) != (i1 | 0)) {
   if (__ZNK7WebCore13StyleStopDataeqERKS0_(i12, i1) | 0) {
    break;
   } else {
    i5 = 2;
   }
   return i5 | 0;
  }
 } while (0);
 if (((HEAP32[i3 >> 2] ^ HEAP32[i4 >> 2]) & 61503 | 0) != 0) {
  i5 = 2;
  return i5 | 0;
 }
 i4 = HEAP32[i7 >> 2] ^ HEAP32[i6 >> 2];
 if ((i4 & 7168 | 0) != 0) {
  i5 = 2;
  return i5 | 0;
 }
 i5 = i4 >>> 12 & 2;
 return i5 | 0;
}
function __ZN7WebCore14SVGRenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN7WebCore10ShadowDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 68 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 52 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = i2 + 36 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
  }
  i5 = i2 + 28 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 32 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i4 | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore14SVGRenderStyleD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  if ((i5 | 0) != 0) {
   __ZN7WebCore10ShadowDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  }
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 12 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 8 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 4 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i2;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i2 + 68 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i6 = i5 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i2 + 52 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i5 = i2 + 36 | 0;
  if ((HEAP32[i5 >> 2] | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
  }
  i5 = i2 + 28 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i2 + 32 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i1 = i4 | 0;
 i3 = i4 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = i2;
  return;
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i1 = i2 | 0;
   i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore14SVGRenderStyle11inheritFromEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 12 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 | 0;
 i7 = i5 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i6 + 20 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 16 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i7 = i8 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  i9 = HEAP32[i8 + 68 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i11 = i9 | 0;
    i6 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i11 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i8 + 52 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i9 = i8 + 36 | 0;
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
  }
  i9 = i8 + 28 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 + 32 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN3WTF8fastFreeEPv(i8);
 } else {
  HEAP32[i7 >> 2] = i5;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i7 = i5 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 24 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 i7 = i8 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  i11 = HEAP32[i8 + 12 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i6;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i8 + 8 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i6 = i11 | 0;
    i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i6 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i11 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i11 | 0) != 0) {
    i9 = i11 | 0;
    i6 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
    if ((i6 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i9 >> 2] = i6;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i8);
 } else {
  HEAP32[i7 >> 2] = i5;
 }
 HEAP32[i4 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 return;
}
function __ZN7WebCore14SVGRenderStyle20copyNonInheritedFromEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 28 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 32 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i6 = i7 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i7);
 } else {
  HEAP32[i6 >> 2] = i5;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = i1 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i8 | 0) != 0) {
   __ZN7WebCore10ShadowDataD2Ev(i8);
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i3;
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1 + 40 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i4 >> 2] = i7;
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 HEAP32[i2 >> 2] = i3;
 return;
}
function __ZNK7WebCore14SVGRenderStyleeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleFillDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore15StyleStrokeDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleTextDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = HEAP32[i2 + 28 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore13StyleStopDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleMiscDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore18StyleShadowSVGDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i4 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore26StyleInheritedResourceDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore17StyleResourceDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if (((HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2]) & 33554431 | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAP32[i1 + 8 >> 2] | 0) == (HEAP32[i2 + 8 >> 2] | 0);
 return i5 | 0;
}
function __ZN7WebCore14SVGRenderStyleC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = 1;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i2 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(44) | 0;
  __ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE(i3, 0);
  HEAP32[H_BASE + 16 >> 2] = i3;
  HEAP8[H_BASE + 8 | 0] = 1;
  i2 = i3;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 28 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 32 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 40 >> 2] | 0;
 HEAP32[i1 + 40 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -33554432 | 16814080;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore14SVGRenderStyleC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = 1;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  i2 = HEAP32[H_BASE + 16 >> 2] | 0;
 } else {
  i3 = __ZN3WTF10fastMallocEj(44) | 0;
  __ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE(i3, 0);
  HEAP32[H_BASE + 16 >> 2] = i3;
  HEAP8[H_BASE + 8 | 0] = 1;
  i2 = i3;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 16 >> 2] | 0;
 HEAP32[i1 + 16 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 20 >> 2] | 0;
 HEAP32[i1 + 20 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 28 >> 2] | 0;
 HEAP32[i1 + 28 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 32 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i3;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = HEAP32[(HEAP32[H_BASE + 16 >> 2] | 0) + 40 >> 2] | 0;
 HEAP32[i1 + 40 >> 2] = i2;
 i3 = i2 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -33554432 | 16814080;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZNK7WebCore14SVGRenderStyle4copyEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(44) | 0;
 HEAP32[i3 >> 2] = 1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i3 + 12 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 HEAP32[i3 + 20 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i3 + 24 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i3 + 28 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 HEAP32[i3 + 32 >> 2] = i5;
 i4 = i5 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 i4 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i3 + 36 >> 2] = i4;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = HEAP32[i2 + 40 >> 2] | 0;
 HEAP32[i3 + 40 >> 2] = i5;
 i2 = i5 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore14SVGRenderStyle17inheritedNotEqualEPKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleFillDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore15StyleStrokeDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 20 >> 2] | 0;
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 do {
  if ((i3 | 0) != (i4 | 0)) {
   if (__ZNK7WebCore13StyleTextDataeqERKS0_(i3, i4) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = HEAP32[i2 + 24 >> 2] | 0;
 do {
  if ((i4 | 0) != (i3 | 0)) {
   if (__ZNK7WebCore26StyleInheritedResourceDataeqERKS0_(i4, i3) | 0) {
    break;
   } else {
    i5 = 1;
   }
   return i5 | 0;
  }
 } while (0);
 i3 = HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2];
 if ((i3 & 4194303 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = (i3 & 29360128 | 0) != 0;
 return i5 | 0;
}
function __ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 i2 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore13StyleFillDataC1Ev(i2);
 HEAP32[i1 + 12 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore15StyleStrokeDataC1Ev(i2);
 HEAP32[i1 + 16 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore13StyleTextDataC1Ev(i2);
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore26StyleInheritedResourceDataC1Ev(i2);
 HEAP32[i1 + 24 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13StyleStopDataC1Ev(i2);
 HEAP32[i1 + 28 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 __ZN7WebCore13StyleMiscDataC1Ev(i2);
 HEAP32[i1 + 32 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 __ZN7WebCore18StyleShadowSVGDataC1Ev(i2);
 HEAP32[i1 + 36 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17StyleResourceDataC1Ev(i2);
 HEAP32[i1 + 40 >> 2] = i2;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -33554432 | 16814080;
 HEAP32[i1 + 8 >> 2] = 0;
 return;
}
function __ZN7WebCore14SVGRenderStyleC1ENS0_17CreateDefaultTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
 i2 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore13StyleFillDataC1Ev(i2);
 HEAP32[i1 + 12 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(72) | 0;
 __ZN7WebCore15StyleStrokeDataC1Ev(i2);
 HEAP32[i1 + 16 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore13StyleTextDataC1Ev(i2);
 HEAP32[i1 + 20 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore26StyleInheritedResourceDataC1Ev(i2);
 HEAP32[i1 + 24 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore13StyleStopDataC1Ev(i2);
 HEAP32[i1 + 28 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(32) | 0;
 __ZN7WebCore13StyleMiscDataC1Ev(i2);
 HEAP32[i1 + 32 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(8) | 0;
 __ZN7WebCore18StyleShadowSVGDataC1Ev(i2);
 HEAP32[i1 + 36 >> 2] = i2;
 i2 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore17StyleResourceDataC1Ev(i2);
 HEAP32[i1 + 40 >> 2] = i2;
 i2 = i1 + 4 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -33554432 | 16814080;
 HEAP32[i1 + 8 >> 2] = 0;
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
function __ZN7WebCore14SVGRenderStyle18createDefaultStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZN3WTF10fastMallocEj(44) | 0;
 __ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE(i2, 0);
 HEAP32[i1 >> 2] = i2;
 return;
}
function __ZN7WebCore10ShadowDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore10ShadowDataD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
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
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
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
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore14SVGRenderStyleD2Ev,b0,__ZN7WebCore14SVGRenderStyleC2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore14SVGRenderStyle11inheritFromEPKS0_","_strlen","__ZNK7WebCore14SVGRenderStyle4diffEPKS0_","__ZNK7WebCore14SVGRenderStyle4copyEv","__ZNK7WebCore14SVGRenderStyleeqERKS0_","_memset","__ZN7WebCore14SVGRenderStyle18createDefaultStyleEv","__ZN7WebCore10ShadowDataD2Ev","_memcpy","__ZN7WebCore14SVGRenderStyleC2Ev","__ZNK7WebCore14SVGRenderStyle17inheritedNotEqualEPKS0_","__ZN7WebCore14SVGRenderStyle20copyNonInheritedFromEPKS0_","__ZN7WebCore14SVGRenderStyleD2Ev","__ZN7WebCore14SVGRenderStyleC2ENS0_17CreateDefaultTypeE"]

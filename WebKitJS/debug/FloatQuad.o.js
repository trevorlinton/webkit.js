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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _malloc=env._malloc;
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore9FloatQuad16intersectsCircleERKNS_10FloatPointEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0;
 if (__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 d5 = +HEAPF32[i2 >> 2];
 d6 = +HEAPF32[i2 + 4 >> 2];
 d7 = +HEAPF32[i1 >> 2];
 d8 = +HEAPF32[i1 + 4 >> 2];
 d9 = +HEAPF32[i1 + 8 >> 2];
 d10 = +HEAPF32[i1 + 12 >> 2];
 d11 = d7 - d5;
 d12 = d8 - d6;
 d13 = d9 - d5;
 d14 = d10 - d6;
 d15 = d3 * d3;
 if (d11 * d11 + d12 * d12 <= d15) {
  i4 = 1;
  return i4 | 0;
 }
 if (d13 * d13 + d14 * d14 <= d15) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (!(d7 == d9 & d8 == d10)) {
   d3 = d12 - d14;
   d16 = d13 - d11;
   d17 = d11 * d14 - d12 * d13;
   d18 = d16 * d16 + d3 * d3;
   if (d17 * d17 / d18 > d15) {
    break;
   }
   d19 = d17 * (+-0 - d3) / d18;
   d3 = d17 * (+-0 - d16) / d18;
   if (d11 > d19 | d19 > d13) {
    if (d11 < d19 | d19 < d13) {
     break;
    }
   }
   if (!(d12 > d3 | d3 > d14)) {
    i4 = 1;
    return i4 | 0;
   }
   if (d14 <= d3 & d3 <= d12) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 d3 = +HEAPF32[i1 + 16 >> 2];
 d19 = +HEAPF32[i1 + 20 >> 2];
 d18 = d3 - d5;
 d16 = d19 - d6;
 if (d18 * d18 + d16 * d16 <= d15) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (!(d9 == d3 & d10 == d19)) {
   d17 = d14 - d16;
   d20 = d18 - d13;
   d21 = d13 * d16 - d14 * d18;
   d22 = d20 * d20 + d17 * d17;
   if (d21 * d21 / d22 > d15) {
    break;
   }
   d23 = d21 * (+-0 - d17) / d22;
   d17 = d21 * (+-0 - d20) / d22;
   if (d13 > d23 | d23 > d18) {
    if (d13 < d23 | d23 < d18) {
     break;
    }
   }
   if (!(d14 > d17 | d17 > d16)) {
    i4 = 1;
    return i4 | 0;
   }
   if (d16 <= d17 & d17 <= d14) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 d14 = +HEAPF32[i1 + 24 >> 2];
 d13 = +HEAPF32[i1 + 28 >> 2];
 d10 = d14 - d5;
 d5 = d13 - d6;
 if (d10 * d10 + d5 * d5 <= d15) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (!(d3 == d14 & d19 == d13)) {
   d6 = d16 - d5;
   d9 = d10 - d18;
   d17 = d18 * d5 - d16 * d10;
   d23 = d9 * d9 + d6 * d6;
   if (d17 * d17 / d23 > d15) {
    break;
   }
   d22 = d17 * (+-0 - d6) / d23;
   d6 = d17 * (+-0 - d9) / d23;
   if (d18 > d22 | d22 > d10) {
    if (d18 < d22 | d22 < d10) {
     break;
    }
   }
   if (!(d16 > d6 | d6 > d5)) {
    i4 = 1;
    return i4 | 0;
   }
   if (d5 <= d6 & d6 <= d16) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if (d14 == d7 & d13 == d8) {
  i4 = 0;
  return i4 | 0;
 }
 d8 = d5 - d12;
 d13 = d11 - d10;
 d7 = d10 * d12 - d5 * d11;
 d14 = d13 * d13 + d8 * d8;
 if (d7 * d7 / d14 > d15) {
  i4 = 0;
  return i4 | 0;
 }
 d15 = d7 * (+-0 - d8) / d14;
 d8 = d7 * (+-0 - d13) / d14;
 do {
  if (d10 > d15 | d15 > d11) {
   if (d10 < d15 | d15 < d11) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if (!(d5 > d8 | d8 > d12)) {
  i4 = 1;
  return i4 | 0;
 }
 if (d12 > d8) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = d8 <= d5;
 return i4 | 0;
}
function __ZNK7WebCore9FloatQuad14intersectsRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 d5 = +HEAPF32[i1 + 8 >> 2];
 d6 = +HEAPF32[i1 >> 2];
 d7 = d5 - d6;
 d8 = +HEAPF32[i1 + 12 >> 2];
 d9 = +HEAPF32[i1 + 4 >> 2];
 d10 = d8 - d9;
 d11 = +HEAPF32[i1 + 16 >> 2];
 d12 = d11 - d5;
 d13 = +HEAPF32[i1 + 20 >> 2];
 d14 = d13 - d8;
 d15 = +HEAPF32[i1 + 24 >> 2];
 if (d7 * d14 - d10 * d12 < +0) {
  d16 = +HEAPF32[i1 + 28 >> 2];
  HEAPF32[i4 >> 2] = d11 - d15;
  HEAPF32[i4 + 4 >> 2] = d13 - d16;
  i17 = HEAP32[i4 + 4 >> 2] | 0;
  i18 = HEAP32[i4 >> 2] | 0;
  d19 = d5;
  d20 = d8;
  d21 = d6 - d5;
  d22 = d9 - d8;
  d23 = d15 - d6;
  d24 = d16 - d9;
  d25 = d16;
 } else {
  d16 = +HEAPF32[i1 + 28 >> 2];
  i1 = (HEAPF32[tempDoublePtr >> 2] = d6 - d15, HEAP32[tempDoublePtr >> 2] | 0);
  i17 = (HEAPF32[tempDoublePtr >> 2] = d9 - d16, HEAP32[tempDoublePtr >> 2] | 0);
  i18 = i1;
  d19 = d15;
  d20 = d16;
  d21 = d12;
  d22 = d14;
  d23 = d7;
  d24 = d10;
  d25 = d16;
 }
 d16 = d19 - d11;
 d19 = d20 - d13;
 d20 = (HEAP32[tempDoublePtr >> 2] = i18, +HEAPF32[tempDoublePtr >> 2]);
 d10 = (HEAP32[tempDoublePtr >> 2] = i17, +HEAPF32[tempDoublePtr >> 2]);
 d7 = +HEAPF32[i2 + 4 >> 2];
 if (d23 < +0) {
  d26 = d7;
 } else {
  d26 = d7 + +HEAPF32[i2 + 12 >> 2];
 }
 d14 = +HEAPF32[i2 >> 2];
 if (d24 < +0) {
  d27 = d14 + +HEAPF32[i2 + 8 >> 2];
 } else {
  d27 = d14;
 }
 if (d23 * (d26 - d9) - d24 * (d27 - d6) < +0) {
  i28 = 0;
  STACKTOP = i3;
  return i28 | 0;
 }
 if (d21 < +0) {
  d29 = d7;
 } else {
  d29 = d7 + +HEAPF32[i2 + 12 >> 2];
 }
 if (d22 < +0) {
  d30 = d14 + +HEAPF32[i2 + 8 >> 2];
 } else {
  d30 = d14;
 }
 if (d21 * (d29 - d8) - d22 * (d30 - d5) < +0) {
  i28 = 0;
  STACKTOP = i3;
  return i28 | 0;
 }
 if (d16 < +0) {
  d31 = d7;
 } else {
  d31 = d7 + +HEAPF32[i2 + 12 >> 2];
 }
 if (d19 < +0) {
  d32 = d14 + +HEAPF32[i2 + 8 >> 2];
 } else {
  d32 = d14;
 }
 if (d16 * (d31 - d13) - d19 * (d32 - d11) < +0) {
  i28 = 0;
  STACKTOP = i3;
  return i28 | 0;
 }
 if (d20 < +0) {
  d33 = d7;
 } else {
  d33 = d7 + +HEAPF32[i2 + 12 >> 2];
 }
 if (d10 < +0) {
  d34 = d14 + +HEAPF32[i2 + 8 >> 2];
 } else {
  d34 = d14;
 }
 i28 = d20 * (d33 - d25) - d10 * (d34 - d15) >= +0;
 STACKTOP = i3;
 return i28 | 0;
}
function __ZNK7WebCore9FloatQuad17intersectsEllipseERKNS_10FloatPointERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, i20 = 0, d21 = +0, d22 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 _memcpy(i5 | 0, i1 | 0, 32) | 0;
 d7 = +HEAPF32[i2 >> 2];
 d8 = +HEAPF32[i2 + 4 >> 2];
 i2 = i5 | 0;
 i1 = i5 + 4 | 0;
 d9 = +HEAPF32[i1 >> 2] - d8;
 i10 = i5 + 8 | 0;
 d11 = +HEAPF32[i10 >> 2] - d7;
 i12 = i5 + 12 | 0;
 d13 = +HEAPF32[i12 >> 2] - d8;
 i14 = i5 + 16 | 0;
 d15 = +HEAPF32[i14 >> 2] - d7;
 i16 = i5 + 20 | 0;
 d17 = +HEAPF32[i16 >> 2] - d8;
 i18 = i5 + 24 | 0;
 d19 = +HEAPF32[i18 >> 2] - d7;
 i20 = i5 + 28 | 0;
 d21 = +HEAPF32[i20 >> 2] - d8;
 d8 = +HEAPF32[i3 + 4 >> 2];
 d22 = +HEAPF32[i3 >> 2];
 HEAPF32[i2 >> 2] = d8 * (+HEAPF32[i2 >> 2] - d7);
 HEAPF32[i1 >> 2] = d22 * d9;
 HEAPF32[i10 >> 2] = d8 * d11;
 HEAPF32[i12 >> 2] = d22 * d13;
 HEAPF32[i14 >> 2] = d8 * d15;
 HEAPF32[i16 >> 2] = d22 * d17;
 HEAPF32[i18 >> 2] = d8 * d19;
 HEAPF32[i20 >> 2] = d22 * d21;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 i20 = __ZNK7WebCore9FloatQuad16intersectsCircleERKNS_10FloatPointEf(i5, i6, d8 * d22) | 0;
 STACKTOP = i4;
 return i20 | 0;
}
function __ZNK7WebCore9FloatQuad12containsQuadERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i2;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i4 + 4 >> 2] = i9;
 if (!(__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i4) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i4 = i2 + 8 | 0;
 i9 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i9;
 if (!(__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i5) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i5 = i2 + 16 | 0;
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i9;
 if (!(__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i6) | 0)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i2 + 24 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i2;
 i10 = __ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i7) | 0;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, i16 = 0;
 d3 = +HEAPF32[i1 >> 2];
 d4 = +HEAPF32[i1 + 16 >> 2] - d3;
 d5 = +HEAPF32[i1 + 4 >> 2];
 d6 = +HEAPF32[i1 + 20 >> 2] - d5;
 d7 = +HEAPF32[i1 + 8 >> 2] - d3;
 d8 = +HEAPF32[i1 + 12 >> 2] - d5;
 d9 = +HEAPF32[i2 >> 2] - d3;
 d10 = +HEAPF32[i2 + 4 >> 2] - d5;
 d11 = d4 * d4 + d6 * d6;
 d12 = d4 * d7 + d6 * d8;
 d13 = d4 * d9 + d6 * d10;
 d14 = d7 * d7 + d8 * d8;
 d15 = d7 * d9 + d8 * d10;
 d8 = +1 / (d11 * d14 - d12 * d12);
 d7 = d8 * (d14 * d13 - d12 * d15);
 d14 = d8 * (d11 * d15 - d12 * d13);
 if (d14 >= +0 & d7 >= +0 & d7 + d14 <= +1) {
  i16 = 1;
  return i16 | 0;
 }
 d14 = +HEAPF32[i1 + 24 >> 2] - d3;
 d3 = +HEAPF32[i1 + 28 >> 2] - d5;
 d5 = d14 * d14 + d3 * d3;
 d7 = d14 * d4 + d3 * d6;
 d6 = d14 * d9 + d3 * d10;
 d10 = +1 / (d5 * d11 - d7 * d7);
 d3 = d10 * (d11 * d6 - d7 * d13);
 d11 = d10 * (d5 * d13 - d7 * d6);
 if (d3 < +0 | d11 < +0) {
  i16 = 0;
  return i16 | 0;
 }
 i16 = d3 + d11 <= +1;
 return i16 | 0;
}
function __ZNK7WebCore9FloatQuad13isRectilinearEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, i4 = 0, d5 = +0, i6 = 0;
 d2 = +HEAPF32[i1 >> 2];
 d3 = +HEAPF32[i1 + 8 >> 2];
 i4 = +Math_abs(+(d2 - d3)) < +1.1920928955078125e-7;
 d5 = +HEAPF32[i1 + 12 >> 2];
 do {
  if (i4) {
   if (+Math_abs(+(d5 - +HEAPF32[i1 + 20 >> 2])) >= +1.1920928955078125e-7) {
    break;
   }
   if (+Math_abs(+(+HEAPF32[i1 + 16 >> 2] - +HEAPF32[i1 + 24 >> 2])) >= +1.1920928955078125e-7) {
    break;
   }
   if (+Math_abs(+(+HEAPF32[i1 + 28 >> 2] - +HEAPF32[i1 + 4 >> 2])) < +1.1920928955078125e-7) {
    i6 = 1;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 if (+Math_abs(+(+HEAPF32[i1 + 4 >> 2] - d5)) >= +1.1920928955078125e-7) {
  i6 = 0;
  return i6 | 0;
 }
 if (+Math_abs(+(d3 - +HEAPF32[i1 + 16 >> 2])) >= +1.1920928955078125e-7) {
  i6 = 0;
  return i6 | 0;
 }
 if (+Math_abs(+(+HEAPF32[i1 + 20 >> 2] - +HEAPF32[i1 + 28 >> 2])) >= +1.1920928955078125e-7) {
  i6 = 0;
  return i6 | 0;
 }
 i6 = +Math_abs(+(+HEAPF32[i1 + 24 >> 2] - d2)) < +1.1920928955078125e-7;
 return i6 | 0;
}
function __ZNK7WebCore9FloatQuad11boundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 d3 = +HEAPF32[i2 >> 2];
 d4 = +HEAPF32[i2 + 8 >> 2];
 d5 = +HEAPF32[i2 + 16 >> 2];
 d6 = +HEAPF32[i2 + 24 >> 2];
 d7 = d6 < d5 ? d6 : d5;
 d8 = d4 < d3 ? d4 : d3;
 d9 = d7 < d8 ? d7 : d8;
 d8 = +HEAPF32[i2 + 4 >> 2];
 d7 = +HEAPF32[i2 + 12 >> 2];
 d10 = +HEAPF32[i2 + 20 >> 2];
 d11 = +HEAPF32[i2 + 28 >> 2];
 d12 = d11 < d10 ? d11 : d10;
 d13 = d7 < d8 ? d7 : d8;
 d14 = d12 < d13 ? d12 : d13;
 d13 = d3 < d4 ? d4 : d3;
 d3 = d5 < d6 ? d6 : d5;
 d5 = d8 < d7 ? d7 : d8;
 d8 = d10 < d11 ? d11 : d10;
 HEAPF32[i1 >> 2] = d9;
 HEAPF32[i1 + 4 >> 2] = d14;
 HEAPF32[i1 + 8 >> 2] = (d13 < d3 ? d3 : d13) - d9;
 HEAPF32[i1 + 12 >> 2] = (d5 < d8 ? d8 : d5) - d14;
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
function __ZNK7WebCore9FloatQuad18isCounterclockwiseEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0;
 d2 = +HEAPF32[i1 + 8 >> 2];
 d3 = +HEAPF32[i1 + 12 >> 2];
 return (d2 - +HEAPF32[i1 >> 2]) * (+HEAPF32[i1 + 20 >> 2] - d3) - (d3 - +HEAPF32[i1 + 4 >> 2]) * (+HEAPF32[i1 + 16 >> 2] - d2) < +0 | 0;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_malloc": _malloc, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore9FloatQuad14intersectsRectERKNS_9FloatRectE","_strlen","__ZNK7WebCore9FloatQuad12containsQuadERKS0_","__ZNK7WebCore9FloatQuad11boundingBoxEv","_memset","__ZNK7WebCore9FloatQuad13containsPointERKNS_10FloatPointE","__ZNK7WebCore9FloatQuad13isRectilinearEv","_memcpy","__ZNK7WebCore9FloatQuad16intersectsCircleERKNS_10FloatPointEf","__ZNK7WebCore9FloatQuad17intersectsEllipseERKNS_10FloatPointERKNS_9FloatSizeE","__ZNK7WebCore9FloatQuad18isCounterclockwiseEv"]

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
  var _cosf=env._cosf;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _sinf=env._sinf;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore17CanvasPathMethods3arcEfffffbRi(i1, d2, d3, d4, d5, d6, i7, i8) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (d4 < +0) {
  HEAP32[i8 >> 2] = 1;
  STACKTOP = i9;
  return;
 }
 if (!(d4 == +0 | d5 == d6)) {
  if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
   STACKTOP = i9;
   return;
  }
  do {
   if (i7) {
    if (d5 - d6 < 6.2831854820251465) {
     break;
    }
    HEAPF32[i12 >> 2] = d2;
    HEAPF32[i12 + 4 >> 2] = d3;
    __ZN7WebCore4Path6addArcERKNS_10FloatPointEfffb(i1 + 4 | 0, i12, d4, d5, d5 + -6.2831854820251465, 1);
    STACKTOP = i9;
    return;
   } else {
    if (d6 - d5 < 6.2831854820251465) {
     break;
    }
    HEAPF32[i13 >> 2] = d2;
    HEAPF32[i13 + 4 >> 2] = d3;
    __ZN7WebCore4Path6addArcERKNS_10FloatPointEfffb(i1 + 4 | 0, i13, d4, d5, d5 + 6.2831854820251465, 0);
    STACKTOP = i9;
    return;
   }
  } while (0);
  HEAPF32[i14 >> 2] = d2;
  HEAPF32[i14 + 4 >> 2] = d3;
  __ZN7WebCore4Path6addArcERKNS_10FloatPointEfffb(i1 + 4 | 0, i14, d4, d5, d6, i7);
  STACKTOP = i9;
  return;
 }
 d6 = +Math_cos(d5) * d4 + d2;
 d2 = +Math_sin(d5) * d4 + d3;
 if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i9;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i9;
  return;
 }
 i7 = i10 | 0;
 HEAPF32[i7 >> 2] = d6;
 i14 = i10 + 4 | 0;
 HEAPF32[i14 >> 2] = d2;
 i13 = i1 + 4 | 0;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i13) | 0)) {
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i13, i10);
  STACKTOP = i9;
  return;
 }
 __ZNK7WebCore4Path12currentPointEv(i11, i13);
 do {
  if (+HEAPF32[i7 >> 2] == +HEAPF32[i11 >> 2]) {
   if (+HEAPF32[i14 >> 2] != +HEAPF32[i11 + 4 >> 2]) {
    break;
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i13, i10);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore17CanvasPathMethods5arcToEfffffRi(i1, d2, d3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (d6 < +0) {
  HEAP32[i7 >> 2] = 1;
  STACKTOP = i8;
  return;
 }
 i7 = i1;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i8;
  return;
 }
 i14 = i11 | 0;
 HEAPF32[i14 >> 2] = d2;
 i15 = i11 + 4 | 0;
 HEAPF32[i15 >> 2] = d3;
 HEAPF32[i12 >> 2] = d4;
 HEAPF32[i12 + 4 >> 2] = d5;
 i16 = i1 + 4 | 0;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i16) | 0)) {
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i16, i11);
  STACKTOP = i8;
  return;
 }
 __ZNK7WebCore4Path12currentPointEv(i13, i16);
 d17 = +HEAPF32[i14 >> 2];
 if (d17 == +HEAPF32[i13 >> 2]) {
  if (+HEAPF32[i15 >> 2] != +HEAPF32[i13 + 4 >> 2]) {
   i18 = 13;
  }
 } else {
  i18 = 13;
 }
 do {
  if ((i18 | 0) == 13) {
   if (d17 == d4) {
    i19 = +HEAPF32[i15 >> 2] != d5;
   } else {
    i19 = 1;
   }
   if (!(i19 & d6 != +0)) {
    break;
   }
   __ZN7WebCore4Path8addArcToERKNS_10FloatPointES3_f(i16, i11, i12, d6);
   STACKTOP = i8;
   return;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i8;
  return;
 }
 i1 = i9 | 0;
 HEAPF32[i1 >> 2] = d2;
 i7 = i9 + 4 | 0;
 HEAPF32[i7 >> 2] = d3;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i16) | 0)) {
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i16, i9);
  STACKTOP = i8;
  return;
 }
 __ZNK7WebCore4Path12currentPointEv(i10, i16);
 do {
  if (+HEAPF32[i1 >> 2] == +HEAPF32[i10 >> 2]) {
   if (+HEAPF32[i7 >> 2] != +HEAPF32[i10 + 4 >> 2]) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i16, i9);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore17CanvasPathMethods13bezierCurveToEffffff(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d6, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i8;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i8;
  return;
 }
 i14 = i1 + 4 | 0;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i14) | 0)) {
  HEAPF32[i9 >> 2] = d2;
  HEAPF32[i9 + 4 >> 2] = d3;
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i14, i9);
 }
 HEAPF32[i10 >> 2] = d6;
 HEAPF32[i10 + 4 >> 2] = d7;
 HEAPF32[i11 >> 2] = d2;
 HEAPF32[i11 + 4 >> 2] = d3;
 HEAPF32[i12 >> 2] = d4;
 HEAPF32[i12 + 4 >> 2] = d5;
 __ZNK7WebCore4Path12currentPointEv(i13, i14);
 do {
  if (+HEAPF32[i13 >> 2] == d6) {
   if (+HEAPF32[i13 + 4 >> 2] != d7 | d6 != d2 | d7 != d3 | d6 != d4 | d7 != d5) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 __ZN7WebCore4Path16addBezierCurveToERKNS_10FloatPointES3_S3_(i14, i11, i12, i10);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore17CanvasPathMethods16quadraticCurveToEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i6;
  return;
 }
 i11 = i1 + 4 | 0;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i11) | 0)) {
  HEAPF32[i7 >> 2] = d2;
  HEAPF32[i7 + 4 >> 2] = d3;
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i11, i7);
 }
 HEAPF32[i8 >> 2] = d4;
 HEAPF32[i8 + 4 >> 2] = d5;
 HEAPF32[i9 >> 2] = d2;
 HEAPF32[i9 + 4 >> 2] = d3;
 __ZNK7WebCore4Path12currentPointEv(i10, i11);
 do {
  if (+HEAPF32[i10 >> 2] == d4) {
   if (+HEAPF32[i10 + 4 >> 2] != d5 | d4 != d2 | d5 != d3) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 __ZN7WebCore4Path14addQuadCurveToERKNS_10FloatPointES3_(i11, i9, i8);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17CanvasPathMethods4rectEffff(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d4, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d5, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i6;
  return;
 }
 i9 = i1 + 4 | 0;
 if (d4 != +0 | d5 != +0) {
  HEAPF32[i8 >> 2] = d2;
  HEAPF32[i8 + 4 >> 2] = d3;
  HEAPF32[i8 + 8 >> 2] = d4;
  HEAPF32[i8 + 12 >> 2] = d5;
  __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i9, i8);
  STACKTOP = i6;
  return;
 } else {
  HEAPF32[i7 >> 2] = d2;
  HEAPF32[i7 + 4 >> 2] = d3;
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i9, i7);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore17CanvasPathMethods6lineToEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i4;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 HEAPF32[i7 >> 2] = d2;
 i8 = i5 + 4 | 0;
 HEAPF32[i8 >> 2] = d3;
 i9 = i1 + 4 | 0;
 if (!(__ZNK7WebCore4Path15hasCurrentPointEv(i9) | 0)) {
  __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i9, i5);
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore4Path12currentPointEv(i6, i9);
 do {
  if (+HEAPF32[i7 >> 2] == +HEAPF32[i6 >> 2]) {
   if (+HEAPF32[i8 >> 2] != +HEAPF32[i6 + 4 >> 2]) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore4Path9addLineToERKNS_10FloatPointE(i9, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17CanvasPathMethods6moveToEff(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if (((HEAPF32[tempDoublePtr >> 2] = d2, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i4;
  return;
 }
 if (((HEAPF32[tempDoublePtr >> 2] = d3, HEAP32[tempDoublePtr >> 2] | 0) & 2139095040) >>> 0 >= 2139095040 >>> 0) {
  STACKTOP = i4;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 1](i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 HEAPF32[i5 >> 2] = d2;
 HEAPF32[i5 + 4 >> 2] = d3;
 __ZN7WebCore4Path6moveToERKNS_10FloatPointE(i1 + 4 | 0, i5);
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
function __ZN7WebCore17CanvasPathMethods9closePathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 if (__ZNK7WebCore4Path7isEmptyEv(i4) | 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore4Path16fastBoundingRectEv(i3, i4);
 do {
  if (+HEAPF32[i3 + 8 >> 2] == +0) {
   if (+HEAPF32[i3 + 12 >> 2] != +0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 __ZN7WebCore4Path12closeSubpathEv(i4);
 STACKTOP = i2;
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_cosf": _cosf, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_sinf": _sinf, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17CanvasPathMethods9closePathEv","__ZN7WebCore17CanvasPathMethods6moveToEff","__ZN7WebCore17CanvasPathMethods5arcToEfffffRi","_memset","__ZN7WebCore17CanvasPathMethods13bezierCurveToEffffff","__ZN7WebCore17CanvasPathMethods4rectEffff","_memcpy","__ZN7WebCore17CanvasPathMethods6lineToEff","__ZN7WebCore17CanvasPathMethods3arcEfffffbRi","__ZN7WebCore17CanvasPathMethods16quadraticCurveToEffff"]

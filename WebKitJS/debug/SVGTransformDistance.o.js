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
var __ZN7WebCore20SVGTransformDistanceC1Ev;
var __ZN7WebCore20SVGTransformDistanceC1ENS_12SVGTransform16SVGTransformTypeEfffRKNS_15AffineTransformE;
var __ZN7WebCore20SVGTransformDistanceC1ERKNS_12SVGTransformES3_;
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
var Math_min = Math.min;
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
function invoke_viifffi(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viifffi"](index,a1,a2,a3,a4,a5,a6);
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
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viifffi=env.invoke_viifffi;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _sqrtf=env._sqrtf;
  var _sqrt=env._sqrt;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore20SVGTransformDistance14scaledDistanceEf(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 128 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 switch (i8 | 0) {
 case 1:
 case 0:
  {
   _memset(i1 | 0, 0, 16) | 0;
   __ZN7WebCore15AffineTransformC1Ev(i1 + 16 | 0);
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   d9 = +HEAPF32[i2 + 4 >> 2] * d3;
   d10 = +HEAPF32[i2 + 8 >> 2] * d3;
   d11 = +HEAPF32[i2 + 12 >> 2] * d3;
   __ZN7WebCore15AffineTransformC1Ev(i5);
   HEAP32[i1 >> 2] = 4;
   HEAPF32[i1 + 4 >> 2] = d9;
   HEAPF32[i1 + 8 >> 2] = d10;
   HEAPF32[i1 + 12 >> 2] = d11;
   i12 = i1 + 16 | 0;
   i13 = i5;
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
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   d11 = +HEAPF32[i2 + 4 >> 2] * d3;
   d10 = +HEAPF32[i2 + 8 >> 2] * d3;
   d9 = +HEAPF32[i2 + 12 >> 2] * d3;
   i13 = i6;
   i12 = i2 + 16 | 0;
   HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i13 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
   HEAP32[i13 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
   HEAP32[i13 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
   HEAP32[i13 + 28 >> 2] = HEAP32[i12 + 28 >> 2];
   HEAP32[i13 + 32 >> 2] = HEAP32[i12 + 32 >> 2];
   HEAP32[i13 + 36 >> 2] = HEAP32[i12 + 36 >> 2];
   HEAP32[i13 + 40 >> 2] = HEAP32[i12 + 40 >> 2];
   HEAP32[i13 + 44 >> 2] = HEAP32[i12 + 44 >> 2];
   i12 = __ZN7WebCore15AffineTransform5scaleEd(i6, d3) | 0;
   HEAP32[i1 >> 2] = 3;
   HEAPF32[i1 + 4 >> 2] = d11;
   HEAPF32[i1 + 8 >> 2] = d10;
   HEAPF32[i1 + 12 >> 2] = d9;
   i6 = i1 + 16 | 0;
   i13 = i12;
   HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i6 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
   HEAP32[i6 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
   HEAP32[i6 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
   HEAP32[i6 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
   HEAP32[i6 + 32 >> 2] = HEAP32[i13 + 32 >> 2];
   HEAP32[i6 + 36 >> 2] = HEAP32[i13 + 36 >> 2];
   HEAP32[i6 + 40 >> 2] = HEAP32[i13 + 40 >> 2];
   HEAP32[i6 + 44 >> 2] = HEAP32[i13 + 44 >> 2];
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   i13 = i2 + 16 | 0;
   i6 = i4 + 96 | 0;
   HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
   HEAP32[i6 + 16 >> 2] = HEAP32[i13 + 16 >> 2];
   HEAP32[i6 + 20 >> 2] = HEAP32[i13 + 20 >> 2];
   HEAP32[i6 + 24 >> 2] = HEAP32[i13 + 24 >> 2];
   HEAP32[i6 + 28 >> 2] = HEAP32[i13 + 28 >> 2];
   d9 = d3;
   d10 = d9 * +HEAPF64[i2 + 48 >> 3];
   d11 = d9 * +HEAPF64[i2 + 56 >> 3];
   HEAP32[i1 >> 2] = 2;
   HEAPF32[i1 + 4 >> 2] = +0;
   HEAPF32[i1 + 8 >> 2] = +0;
   HEAPF32[i1 + 12 >> 2] = +0;
   i13 = i1 + 16 | 0;
   HEAP32[i13 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i13 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP32[i13 + 20 >> 2] = HEAP32[i6 + 20 >> 2];
   HEAP32[i13 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i13 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   HEAPF64[i1 + 48 >> 3] = d10;
   HEAPF64[i1 + 56 >> 3] = d11;
   STACKTOP = i4;
   return;
  }
 case 5:
 case 6:
  {
   d11 = +HEAPF32[i2 + 4 >> 2] * d3;
   d10 = +HEAPF32[i2 + 8 >> 2] * d3;
   d9 = +HEAPF32[i2 + 12 >> 2] * d3;
   __ZN7WebCore15AffineTransformC1Ev(i7);
   HEAP32[i1 >> 2] = i8;
   HEAPF32[i1 + 4 >> 2] = d11;
   HEAPF32[i1 + 8 >> 2] = d10;
   HEAPF32[i1 + 12 >> 2] = d9;
   i8 = i1 + 16 | 0;
   i2 = i7;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   HEAP32[i8 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
   HEAP32[i8 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
   HEAP32[i8 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
   HEAP32[i8 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
   HEAP32[i8 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
   HEAP32[i8 + 36 >> 2] = HEAP32[i2 + 36 >> 2];
   HEAP32[i8 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
   HEAP32[i8 + 44 >> 2] = HEAP32[i2 + 44 >> 2];
   STACKTOP = i4;
   return;
  }
 default:
  {
   _memset(i1 | 0, 0, 16) | 0;
   __ZN7WebCore15AffineTransformC1Ev(i1 + 16 | 0);
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore20SVGTransformDistance16addSVGTransformsERKNS_12SVGTransformES3_j(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, d16 = +0, d17 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i6 = i5 | 0;
 i7 = i5 + 64 | 0;
 i8 = i5 + 72 | 0;
 i9 = i5 + 80 | 0;
 i10 = i5 + 88 | 0;
 i11 = i5 + 96 | 0;
 i12 = i5 + 104 | 0;
 __ZN7WebCore12SVGTransformC1Ev(i6);
 switch (HEAP32[i2 >> 2] | 0) {
 case 1:
 case 0:
  {
   __ZN7WebCore12SVGTransformC1Ev(i1);
   STACKTOP = i5;
   return;
  }
 case 4:
  {
   d13 = +(i4 >>> 0 >>> 0);
   i14 = i2 + 8 | 0;
   i15 = i3 + 8 | 0;
   d16 = +HEAPF32[i14 >> 2] + d13 * +HEAPF32[i15 >> 2];
   __ZN7WebCore12SVGTransform9setRotateEfff(i6, +HEAPF32[i2 + 4 >> 2] + d13 * +HEAPF32[i3 + 4 >> 2], d16, +HEAPF32[i14 + 4 >> 2] + d13 * +HEAPF32[i15 + 4 >> 2]);
   _memcpy(i1 | 0, i6 | 0, 64) | 0;
   STACKTOP = i5;
   return;
  }
 case 2:
  {
   __ZNK7WebCore12SVGTransform9translateEv(i7, i2);
   d13 = +HEAPF32[i7 >> 2];
   __ZNK7WebCore12SVGTransform9translateEv(i8, i3);
   d16 = +(i4 >>> 0 >>> 0);
   d17 = d13 + d16 * +HEAPF32[i8 >> 2];
   __ZNK7WebCore12SVGTransform9translateEv(i9, i2);
   d13 = +HEAPF32[i9 + 4 >> 2];
   __ZNK7WebCore12SVGTransform9translateEv(i10, i3);
   __ZN7WebCore12SVGTransform12setTranslateEff(i6, d17, d13 + d16 * +HEAPF32[i10 + 4 >> 2]);
   _memcpy(i1 | 0, i6 | 0, 64) | 0;
   STACKTOP = i5;
   return;
  }
 case 3:
  {
   __ZNK7WebCore12SVGTransform5scaleEv(i11, i3);
   d16 = +(i4 >>> 0 >>> 0);
   i10 = i11 | 0;
   HEAPF32[i10 >> 2] = d16 * +HEAPF32[i10 >> 2];
   i9 = i11 + 4 | 0;
   HEAPF32[i9 >> 2] = d16 * +HEAPF32[i9 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i12, i2);
   d16 = +HEAPF32[i10 >> 2] + +HEAPF32[i12 >> 2];
   HEAPF32[i10 >> 2] = d16;
   d13 = +HEAPF32[i9 >> 2] + +HEAPF32[i12 + 4 >> 2];
   HEAPF32[i9 >> 2] = d13;
   __ZN7WebCore12SVGTransform8setScaleEff(i6, d16, d13);
   _memcpy(i1 | 0, i6 | 0, 64) | 0;
   STACKTOP = i5;
   return;
  }
 case 5:
  {
   __ZN7WebCore12SVGTransform8setSkewXEf(i6, +HEAPF32[i2 + 4 >> 2] + +(i4 >>> 0 >>> 0) * +HEAPF32[i3 + 4 >> 2]);
   _memcpy(i1 | 0, i6 | 0, 64) | 0;
   STACKTOP = i5;
   return;
  }
 case 6:
  {
   __ZN7WebCore12SVGTransform8setSkewYEf(i6, +HEAPF32[i2 + 4 >> 2] + +(i4 >>> 0 >>> 0) * +HEAPF32[i3 + 4 >> 2]);
   _memcpy(i1 | 0, i6 | 0, 64) | 0;
   STACKTOP = i5;
   return;
  }
 default:
  {
   __ZN7WebCore12SVGTransformC1Ev(i1);
   STACKTOP = i5;
   return;
  }
 }
}
function __ZNK7WebCore20SVGTransformDistance17addToSVGTransformERKNS_12SVGTransformE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 72 | 0;
 i8 = i4 + 80 | 0;
 i9 = i4 + 88 | 0;
 i10 = i5;
 _memcpy(i10 | 0, i3 | 0, 64) | 0;
 switch (HEAP32[i2 >> 2] | 0) {
 case 1:
 case 0:
  {
   __ZN7WebCore12SVGTransformC1Ev(i1);
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   __ZNK7WebCore12SVGTransform9translateEv(i6, i3);
   __ZN7WebCore9FloatSize15narrowPrecisionEdd(i7, +HEAPF64[i2 + 48 >> 3], +HEAPF64[i2 + 56 >> 3]);
   d11 = +HEAPF32[i7 + 4 >> 2];
   i12 = i6 | 0;
   d13 = +HEAPF32[i7 >> 2] + +HEAPF32[i12 >> 2];
   HEAPF32[i12 >> 2] = d13;
   i12 = i6 + 4 | 0;
   d14 = d11 + +HEAPF32[i12 >> 2];
   HEAPF32[i12 >> 2] = d14;
   __ZN7WebCore12SVGTransform12setTranslateEff(i5, d13, d14);
   _memcpy(i1 | 0, i10 | 0, 64) | 0;
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   __ZNK7WebCore12SVGTransform5scaleEv(i8, i3);
   __ZN7WebCore9FloatSize15narrowPrecisionEdd(i9, +HEAPF64[i2 + 16 >> 3], +HEAPF64[i2 + 40 >> 3]);
   i12 = i8 | 0;
   d14 = +HEAPF32[i12 >> 2] + +HEAPF32[i9 >> 2];
   HEAPF32[i12 >> 2] = d14;
   i12 = i8 + 4 | 0;
   d13 = +HEAPF32[i12 >> 2] + +HEAPF32[i9 + 4 >> 2];
   HEAPF32[i12 >> 2] = d13;
   __ZN7WebCore12SVGTransform8setScaleEff(i5, d14, d13);
   _memcpy(i1 | 0, i10 | 0, 64) | 0;
   STACKTOP = i4;
   return;
  }
 case 4:
  {
   i12 = i3 + 8 | 0;
   __ZN7WebCore12SVGTransform9setRotateEfff(i5, +HEAPF32[i3 + 4 >> 2] + +HEAPF32[i2 + 4 >> 2], +HEAPF32[i12 >> 2] + +HEAPF32[i2 + 8 >> 2], +HEAPF32[i12 + 4 >> 2] + +HEAPF32[i2 + 12 >> 2]);
   _memcpy(i1 | 0, i10 | 0, 64) | 0;
   STACKTOP = i4;
   return;
  }
 case 5:
  {
   __ZN7WebCore12SVGTransform8setSkewXEf(i5, +HEAPF32[i3 + 4 >> 2] + +HEAPF32[i2 + 4 >> 2]);
   _memcpy(i1 | 0, i10 | 0, 64) | 0;
   STACKTOP = i4;
   return;
  }
 case 6:
  {
   __ZN7WebCore12SVGTransform8setSkewYEf(i5, +HEAPF32[i3 + 4 >> 2] + +HEAPF32[i2 + 4 >> 2]);
   _memcpy(i1 | 0, i10 | 0, 64) | 0;
   STACKTOP = i4;
   return;
  }
 default:
  {
   __ZN7WebCore12SVGTransformC1Ev(i1);
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore20SVGTransformDistanceC2ERKNS_12SVGTransformES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
 i12 = i1 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 i13 = i1 + 8 | 0;
 HEAPF32[i13 >> 2] = +0;
 i14 = i1 + 12 | 0;
 HEAPF32[i14 >> 2] = +0;
 i15 = i1 + 16 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i15);
 switch (HEAP32[i11 >> 2] | 0) {
 case 4:
  {
   i11 = i3 + 8 | 0;
   d16 = +HEAPF32[i11 >> 2];
   d17 = +HEAPF32[i11 + 4 >> 2];
   i11 = i2 + 8 | 0;
   d18 = +HEAPF32[i11 >> 2];
   d19 = d17 - +HEAPF32[i11 + 4 >> 2];
   HEAPF32[i12 >> 2] = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
   HEAPF32[i13 >> 2] = d16 - d18;
   HEAPF32[i14 >> 2] = d19;
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   __ZNK7WebCore12SVGTransform9translateEv(i5, i3);
   __ZNK7WebCore12SVGTransform9translateEv(i6, i2);
   __ZN7WebCore15AffineTransform9translateEdd(i15, +HEAPF32[i5 >> 2] - +HEAPF32[i6 >> 2], +HEAPF32[i5 + 4 >> 2] - +HEAPF32[i6 + 4 >> 2]) | 0;
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   __ZNK7WebCore12SVGTransform5scaleEv(i7, i3);
   d19 = +HEAPF32[i7 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i8, i2);
   d18 = d19 - +HEAPF32[i8 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i9, i3);
   d19 = +HEAPF32[i9 + 4 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i10, i2);
   __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i15, d18, d19 - +HEAPF32[i10 + 4 >> 2]) | 0;
   STACKTOP = i4;
   return;
  }
 case 6:
 case 5:
  {
   HEAPF32[i12 >> 2] = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore20SVGTransformDistanceC1ERKNS_12SVGTransformES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = HEAP32[i2 >> 2];
 i12 = i1 + 4 | 0;
 HEAPF32[i12 >> 2] = +0;
 i13 = i1 + 8 | 0;
 HEAPF32[i13 >> 2] = +0;
 i14 = i1 + 12 | 0;
 HEAPF32[i14 >> 2] = +0;
 i15 = i1 + 16 | 0;
 __ZN7WebCore15AffineTransformC1Ev(i15);
 switch (HEAP32[i11 >> 2] | 0) {
 case 4:
  {
   i11 = i3 + 8 | 0;
   d16 = +HEAPF32[i11 >> 2];
   d17 = +HEAPF32[i11 + 4 >> 2];
   i11 = i2 + 8 | 0;
   d18 = +HEAPF32[i11 >> 2];
   d19 = d17 - +HEAPF32[i11 + 4 >> 2];
   HEAPF32[i12 >> 2] = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
   HEAPF32[i13 >> 2] = d16 - d18;
   HEAPF32[i14 >> 2] = d19;
   STACKTOP = i4;
   return;
  }
 case 2:
  {
   __ZNK7WebCore12SVGTransform9translateEv(i5, i3);
   __ZNK7WebCore12SVGTransform9translateEv(i6, i2);
   __ZN7WebCore15AffineTransform9translateEdd(i15, +HEAPF32[i5 >> 2] - +HEAPF32[i6 >> 2], +HEAPF32[i5 + 4 >> 2] - +HEAPF32[i6 + 4 >> 2]) | 0;
   STACKTOP = i4;
   return;
  }
 case 3:
  {
   __ZNK7WebCore12SVGTransform5scaleEv(i7, i3);
   d19 = +HEAPF32[i7 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i8, i2);
   d18 = d19 - +HEAPF32[i8 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i9, i3);
   d19 = +HEAPF32[i9 + 4 >> 2];
   __ZNK7WebCore12SVGTransform5scaleEv(i10, i2);
   __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i15, d18, d19 - +HEAPF32[i10 + 4 >> 2]) | 0;
   STACKTOP = i4;
   return;
  }
 case 6:
 case 5:
  {
   HEAPF32[i12 >> 2] = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
   STACKTOP = i4;
   return;
  }
 default:
  {
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore20SVGTransformDistanceC2ENS_12SVGTransform16SVGTransformTypeEfffRKNS_15AffineTransformE(i1, i2, d3, d4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAPF32[i1 + 4 >> 2] = d3;
 HEAPF32[i1 + 8 >> 2] = d4;
 HEAPF32[i1 + 12 >> 2] = d5;
 i2 = i1 + 16 | 0;
 i1 = i6;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 HEAP32[i2 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i2 + 24 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP32[i2 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 HEAP32[i2 + 32 >> 2] = HEAP32[i1 + 32 >> 2];
 HEAP32[i2 + 36 >> 2] = HEAP32[i1 + 36 >> 2];
 HEAP32[i2 + 40 >> 2] = HEAP32[i1 + 40 >> 2];
 HEAP32[i2 + 44 >> 2] = HEAP32[i1 + 44 >> 2];
 return;
}
function __ZN7WebCore20SVGTransformDistanceC1ENS_12SVGTransform16SVGTransformTypeEfffRKNS_15AffineTransformE(i1, i2, d3, d4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAPF32[i1 + 4 >> 2] = d3;
 HEAPF32[i1 + 8 >> 2] = d4;
 HEAPF32[i1 + 12 >> 2] = d5;
 i2 = i1 + 16 | 0;
 i1 = i6;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 HEAP32[i2 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i2 + 24 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP32[i2 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 HEAP32[i2 + 32 >> 2] = HEAP32[i1 + 32 >> 2];
 HEAP32[i2 + 36 >> 2] = HEAP32[i1 + 36 >> 2];
 HEAP32[i2 + 40 >> 2] = HEAP32[i1 + 40 >> 2];
 HEAP32[i2 + 44 >> 2] = HEAP32[i1 + 44 >> 2];
 return;
}
function __ZNK7WebCore20SVGTransformDistance8distanceEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, d4 = +0, d5 = +0;
 switch (HEAP32[i1 >> 2] | 0) {
 case 4:
  {
   d2 = +HEAPF32[i1 + 4 >> 2];
   d3 = +HEAPF32[i1 + 8 >> 2];
   d4 = +HEAPF32[i1 + 12 >> 2];
   d5 = +Math_sqrt(d2 * d2 + d3 * d3 + d4 * d4);
   return +d5;
  }
 case 3:
  {
   d4 = +HEAPF64[i1 + 16 >> 3];
   d3 = +HEAPF64[i1 + 40 >> 3];
   d5 = +Math_sqrt(d4 * d4 + d3 * d3);
   return +d5;
  }
 case 2:
  {
   d3 = +HEAPF64[i1 + 48 >> 3];
   d4 = +HEAPF64[i1 + 56 >> 3];
   d5 = +Math_sqrt(d3 * d3 + d4 * d4);
   return +d5;
  }
 case 6:
 case 5:
  {
   d5 = +HEAPF32[i1 + 4 >> 2];
   return +d5;
  }
 default:
  {
   d5 = +0;
   return +d5;
  }
 }
 return +0;
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
function __ZNK7WebCore20SVGTransformDistance6isZeroEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (!(__ZNK7WebCore15AffineTransform10isIdentityEv(i1 + 16 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = +HEAPF32[i1 + 4 >> 2] == +0;
 return i2 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viifffi(i1, i2, i3, d4, d5, d6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 i7 = i7 | 0;
 FUNCTION_TABLE_viifffi[i1 & 3](i2 | 0, i3 | 0, +d4, +d5, +d6, i7 | 0);
}
function __ZN7WebCore20SVGTransformDistanceC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 16 | 0);
 return;
}
function __ZN7WebCore20SVGTransformDistanceC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1 + 16 | 0);
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
function b4(i1, i2, d3, d4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 i6 = i6 | 0;
 abort(4);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20SVGTransformDistanceC2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore20SVGTransformDistanceC2ERKNS_12SVGTransformES3_,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_viifffi = [b4,b4,__ZN7WebCore20SVGTransformDistanceC2ENS_12SVGTransform16SVGTransformTypeEfffRKNS_15AffineTransformE,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viifffi: dynCall_viifffi, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viifffi": invoke_viifffi, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_sqrtf": _sqrtf, "_sqrt": _sqrt, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viifffi = Module["dynCall_viifffi"] = asm["dynCall_viifffi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore20SVGTransformDistance8distanceEv","__ZNK7WebCore20SVGTransformDistance6isZeroEv","__ZNK7WebCore20SVGTransformDistance17addToSVGTransformERKNS_12SVGTransformE","__ZN7WebCore20SVGTransformDistanceC2Ev","__ZNK7WebCore20SVGTransformDistance14scaledDistanceEf","_memset","_memcpy","__ZN7WebCore20SVGTransformDistanceC2ENS_12SVGTransform16SVGTransformTypeEfffRKNS_15AffineTransformE","__ZN7WebCore20SVGTransformDistance16addSVGTransformsERKNS_12SVGTransformES3_j","__ZN7WebCore20SVGTransformDistanceC2ERKNS_12SVGTransformES3_"]

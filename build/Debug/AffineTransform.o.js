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
var __ZN7WebCore15AffineTransformC1Ev;
var __ZN7WebCore15AffineTransformC1Edddddd;
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
var Math_min = Math.min;
function invoke_vidddddd(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_vidddddd"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var invoke_vidddddd=env.invoke_vidddddd;
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _cos=env._cos;
  var _fabs=env._fabs;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _sqrt=env._sqrt;
  var _round=env._round;
  var _atan2=env._atan2;
  var _free=env._free;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var _tan=env._tan;
  var _sin=env._sin;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore15AffineTransform5blendERKS0_d(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 72 | 0;
 __ZNK7WebCore15AffineTransform9decomposeERNS0_14DecomposedTypeE(i2, i5) | 0;
 __ZNK7WebCore15AffineTransform9decomposeERNS0_14DecomposedTypeE(i1, i6) | 0;
 i2 = i5 | 0;
 d7 = +HEAPF64[i2 >> 3];
 do {
  if (d7 < +0) {
   if (+HEAPF64[i6 + 8 >> 3] >= +0) {
    i8 = 4;
    break;
   }
   d9 = +HEAPF64[i5 + 8 >> 3];
   i8 = 6;
  } else {
   i8 = 4;
  }
 } while (0);
 do {
  if ((i8 | 0) == 4) {
   d10 = +HEAPF64[i5 + 8 >> 3];
   if (d10 >= +0) {
    d11 = d7;
    d12 = d10;
    break;
   }
   if (+HEAPF64[i6 >> 3] < +0) {
    d9 = d10;
    i8 = 6;
   } else {
    d11 = d7;
    d12 = d10;
   }
  }
 } while (0);
 if ((i8 | 0) == 6) {
  d10 = +-0 - d7;
  HEAPF64[i2 >> 3] = d10;
  d7 = +-0 - d9;
  HEAPF64[i5 + 8 >> 3] = d7;
  i8 = i5 + 16 | 0;
  d9 = +HEAPF64[i8 >> 3];
  HEAPF64[i8 >> 3] = d9 + (d9 < +0 ? 3.141592653589793 : -3.141592653589793);
  d11 = d10;
  d12 = d7;
 }
 i8 = i5 + 16 | 0;
 d7 = +_fmod(+(+HEAPF64[i8 >> 3]), 6.283185307179586);
 HEAPF64[i8 >> 3] = d7;
 i13 = i6 + 16 | 0;
 d10 = +_fmod(+(+HEAPF64[i13 >> 3]), 6.283185307179586);
 HEAPF64[i13 >> 3] = d10;
 do {
  if (+Math_abs(+(d7 - d10)) > 3.141592653589793) {
   if (d7 > d10) {
    d9 = d7 + -6.283185307179586;
    HEAPF64[i8 >> 3] = d9;
    d14 = d10;
    d15 = d9;
    break;
   } else {
    d9 = d10 + -6.283185307179586;
    HEAPF64[i13 >> 3] = d9;
    d14 = d9;
    d15 = d7;
    break;
   }
  } else {
   d14 = d10;
   d15 = d7;
  }
 } while (0);
 d7 = d11 + (+HEAPF64[i6 >> 3] - d11) * d3;
 HEAPF64[i2 >> 3] = d7;
 d11 = d12 + (+HEAPF64[i6 + 8 >> 3] - d12) * d3;
 HEAPF64[i5 + 8 >> 3] = d11;
 d12 = d15 + (d14 - d15) * d3;
 HEAPF64[i8 >> 3] = d12;
 i8 = i5 + 24 | 0;
 d15 = +HEAPF64[i8 >> 3];
 d14 = d15 + (+HEAPF64[i6 + 24 >> 3] - d15) * d3;
 HEAPF64[i8 >> 3] = d14;
 i8 = i5 + 32 | 0;
 d15 = +HEAPF64[i8 >> 3];
 d10 = d15 + (+HEAPF64[i6 + 32 >> 3] - d15) * d3;
 HEAPF64[i8 >> 3] = d10;
 i8 = i5 + 40 | 0;
 d15 = +HEAPF64[i8 >> 3];
 d9 = d15 + (+HEAPF64[i6 + 40 >> 3] - d15) * d3;
 HEAPF64[i8 >> 3] = d9;
 i8 = i5 + 48 | 0;
 d15 = +HEAPF64[i8 >> 3];
 d16 = d15 + (+HEAPF64[i6 + 48 >> 3] - d15) * d3;
 HEAPF64[i8 >> 3] = d16;
 i8 = i5 + 56 | 0;
 d15 = +HEAPF64[i8 >> 3];
 d17 = d15 + (+HEAPF64[i6 + 56 >> 3] - d15) * d3;
 HEAPF64[i8 >> 3] = d17;
 d15 = +HEAPF64[i5 + 64 >> 3];
 d18 = d12 * +180 / 3.141592653589793 * 3.141592653589793 / +180;
 d12 = +Math_cos(d18);
 d19 = +Math_sin(d18);
 d18 = +-0 - d19;
 d20 = d15 + (+HEAPF64[i6 + 64 >> 3] - d15) * d3 + (d10 * +0 + d16 * +0);
 HEAPF64[i1 + 32 >> 3] = d14 * +0 + d9 * +0 + d17;
 HEAPF64[i1 + 40 >> 3] = d20;
 HEAPF64[i1 >> 3] = d7 * (d14 * d12 + d9 * d19);
 HEAPF64[i1 + 8 >> 3] = d7 * (d10 * d12 + d16 * d19);
 HEAPF64[i1 + 16 >> 3] = d11 * (d9 * d12 + d14 * d18);
 HEAPF64[i1 + 24 >> 3] = d11 * (d16 * d12 + d10 * d18);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 d4 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 do {
  if (d4 == +1 & d5 == +0) {
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +1) {
    break;
   }
   d6 = +HEAPF64[i2 + 32 >> 3];
   d7 = +HEAPF64[i2 + 40 >> 3];
   d8 = +HEAPF32[i3 + 4 >> 2] + d7;
   d9 = +HEAPF32[i3 + 8 >> 2] + d6;
   d10 = +HEAPF32[i3 + 12 >> 2] + d7;
   d11 = +HEAPF32[i3 + 16 >> 2] + d6;
   d12 = +HEAPF32[i3 + 20 >> 2] + d7;
   d13 = +HEAPF32[i3 + 24 >> 2] + d6;
   d14 = +HEAPF32[i3 + 28 >> 2] + d7;
   HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + d6;
   HEAPF32[i1 + 4 >> 2] = d8;
   HEAPF32[i1 + 8 >> 2] = d9;
   HEAPF32[i1 + 12 >> 2] = d10;
   HEAPF32[i1 + 16 >> 2] = d11;
   HEAPF32[i1 + 20 >> 2] = d12;
   HEAPF32[i1 + 24 >> 2] = d13;
   HEAPF32[i1 + 28 >> 2] = d14;
   return;
  }
 } while (0);
 i15 = i3;
 d14 = +HEAPF32[i15 >> 2];
 d13 = d14;
 d14 = +HEAPF32[i15 + 4 >> 2];
 d12 = +HEAPF64[i2 + 16 >> 3];
 d11 = +HEAPF64[i2 + 32 >> 3];
 d10 = +HEAPF64[i2 + 24 >> 3];
 d9 = +HEAPF64[i2 + 40 >> 3];
 d8 = +(d11 + (d4 * d13 + d12 * d14));
 d6 = +(d9 + (d13 * d5 + d14 * d10));
 i2 = i3 + 8 | 0;
 d14 = +HEAPF32[i2 >> 2];
 d13 = d14;
 d14 = +HEAPF32[i2 + 4 >> 2];
 d7 = +(d11 + (d4 * d13 + d12 * d14));
 d16 = +(d9 + (d5 * d13 + d10 * d14));
 i2 = i3 + 16 | 0;
 d14 = +HEAPF32[i2 >> 2];
 d13 = d14;
 d14 = +HEAPF32[i2 + 4 >> 2];
 d17 = +(d11 + (d4 * d13 + d12 * d14));
 d18 = +(d9 + (d5 * d13 + d10 * d14));
 i2 = i3 + 24 | 0;
 d14 = +HEAPF32[i2 >> 2];
 d13 = d14;
 d14 = +HEAPF32[i2 + 4 >> 2];
 d19 = +(d11 + (d4 * d13 + d12 * d14));
 d12 = +(d9 + (d5 * d13 + d10 * d14));
 i2 = i1;
 HEAPF32[i2 >> 2] = d8;
 HEAPF32[i2 + 4 >> 2] = d6;
 i2 = i1 + 8 | 0;
 HEAPF32[i2 >> 2] = d7;
 HEAPF32[i2 + 4 >> 2] = d16;
 i2 = i1 + 16 | 0;
 HEAPF32[i2 >> 2] = d17;
 HEAPF32[i2 + 4 >> 2] = d18;
 i2 = i1 + 24 | 0;
 HEAPF32[i2 >> 2] = d19;
 HEAPF32[i2 + 4 >> 2] = d12;
 return;
}
function __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 d8 = +HEAPF64[i2 >> 3];
 d9 = +HEAPF64[i2 + 8 >> 3];
 do {
  if (d8 == +1 & d9 == +0) {
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +1) {
    break;
   }
   i10 = i3 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   d13 = +HEAPF32[i3 + 4 >> 2] + +HEAPF64[i2 + 40 >> 3];
   HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + +HEAPF64[i2 + 32 >> 3];
   HEAPF32[i1 + 4 >> 2] = d13;
   i10 = i1 + 8 | 0;
   HEAP32[i10 >> 2] = i11;
   HEAP32[i10 + 4 >> 2] = i12;
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i5 | 0, 0, 24) | 0;
 i12 = i3;
 d13 = +HEAPF32[i12 >> 2];
 d14 = d13;
 d15 = +HEAPF32[i12 + 4 >> 2];
 d16 = d8 * d14;
 d17 = +HEAPF64[i2 + 16 >> 3];
 d18 = +HEAPF64[i2 + 32 >> 3];
 d19 = d14 * d9;
 d14 = +HEAPF64[i2 + 24 >> 3];
 d20 = +HEAPF64[i2 + 40 >> 3];
 d21 = +(d18 + (d16 + d17 * d15));
 d22 = +(d20 + (d19 + d15 * d14));
 HEAPF32[i6 >> 2] = d21;
 HEAPF32[i6 + 4 >> 2] = d22;
 d22 = +HEAPF32[i3 + 4 >> 2];
 d21 = d13 + +HEAPF32[i3 + 8 >> 2];
 d13 = d22;
 d15 = d21 * d8;
 d8 = d21 * d9;
 i6 = i5 + 8 | 0;
 d9 = +(d18 + (d15 + d13 * d17));
 d21 = +(d20 + (d8 + d13 * d14));
 HEAPF32[i6 >> 2] = d9;
 HEAPF32[i6 + 4 >> 2] = d21;
 d21 = d22 + +HEAPF32[i3 + 12 >> 2];
 d22 = d21 * d17;
 d17 = d21 * d14;
 i3 = i5 + 16 | 0;
 d14 = +(d18 + (d15 + d22));
 d15 = +(d20 + (d8 + d17));
 HEAPF32[i3 >> 2] = d14;
 HEAPF32[i3 + 4 >> 2] = d15;
 i3 = i5 + 24 | 0;
 d15 = +(d18 + (d16 + d22));
 d22 = +(d20 + (d19 + d17));
 HEAPF32[i3 >> 2] = d15;
 HEAPF32[i3 + 4 >> 2] = d22;
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i1, i7);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15AffineTransform9recomposeERKNS0_14DecomposedTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, i4 = 0, d5 = +0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 d3 = +HEAPF64[i2 + 24 >> 3];
 i4 = i1 | 0;
 HEAPF64[i4 >> 3] = d3;
 d5 = +HEAPF64[i2 + 32 >> 3];
 i6 = i1 + 8 | 0;
 HEAPF64[i6 >> 3] = d5;
 d7 = +HEAPF64[i2 + 40 >> 3];
 i8 = i1 + 16 | 0;
 HEAPF64[i8 >> 3] = d7;
 d9 = +HEAPF64[i2 + 48 >> 3];
 i10 = i1 + 24 | 0;
 HEAPF64[i10 >> 3] = d9;
 d11 = +HEAPF64[i2 + 56 >> 3];
 i12 = i1 + 32 | 0;
 HEAPF64[i12 >> 3] = d11;
 d13 = +HEAPF64[i2 + 64 >> 3];
 i14 = i1 + 40 | 0;
 HEAPF64[i14 >> 3] = d13;
 d15 = +HEAPF64[i2 + 16 >> 3] * +180 / 3.141592653589793 * 3.141592653589793 / +180;
 d16 = +Math_cos(d15);
 d17 = +Math_sin(d15);
 d15 = +-0 - d17;
 d18 = d16 * d3 + d17 * d7;
 d19 = d16 * d5 + d17 * d9;
 d17 = d3 * d15 + d16 * d7;
 d20 = d5 * d15 + d16 * d9;
 HEAPF64[i4 >> 3] = d18;
 HEAPF64[i6 >> 3] = d19;
 HEAPF64[i8 >> 3] = d17;
 HEAPF64[i10 >> 3] = d20;
 HEAPF64[i12 >> 3] = d3 * +0 + d7 * +0 + d11;
 HEAPF64[i14 >> 3] = d13 + (d5 * +0 + d9 * +0);
 d9 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 HEAPF64[i4 >> 3] = d9 * d18;
 HEAPF64[i6 >> 3] = d9 * d19;
 HEAPF64[i8 >> 3] = d5 * d17;
 HEAPF64[i10 >> 3] = d5 * d20;
 return;
}
function __ZNK7WebCore15AffineTransform9decomposeERNS0_14DecomposedTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 d3 = +HEAPF64[i1 >> 3];
 d4 = +HEAPF64[i1 + 8 >> 3];
 d5 = +HEAPF64[i1 + 16 >> 3];
 d6 = +HEAPF64[i1 + 24 >> 3];
 d7 = +HEAPF64[i1 + 32 >> 3];
 d8 = +HEAPF64[i1 + 40 >> 3];
 d9 = +Math_sqrt(d3 * d3 + d4 * d4);
 d10 = +Math_sqrt(d5 * d5 + d6 * d6);
 do {
  if (d3 * d6 - d4 * d5 < +0) {
   if (d3 < d6) {
    d11 = +-0 - d9;
    d12 = d10;
    break;
   } else {
    d11 = d9;
    d12 = +-0 - d10;
    break;
   }
  } else {
   d11 = d9;
   d12 = d10;
  }
 } while (0);
 d10 = +1 / d11;
 d9 = +1 / d12;
 d13 = d3 * d10;
 d3 = d4 * d10;
 d10 = d5 * d9;
 d5 = d6 * d9;
 d9 = +Math_atan2(+d3, +d13);
 d6 = d9 * +-180 / 3.141592653589793 * 3.141592653589793 / +180;
 d4 = +Math_cos(d6);
 d14 = +Math_sin(d6);
 d6 = +-0 - d14;
 HEAPF64[i2 >> 3] = d11;
 HEAPF64[i2 + 8 >> 3] = d12;
 HEAPF64[i2 + 16 >> 3] = d9;
 HEAPF64[i2 + 24 >> 3] = d13 * d4 + d10 * d14;
 HEAPF64[i2 + 32 >> 3] = d3 * d4 + d5 * d14;
 HEAPF64[i2 + 40 >> 3] = d10 * d4 + d13 * d6;
 HEAPF64[i2 + 48 >> 3] = d5 * d4 + d3 * d6;
 HEAPF64[i2 + 56 >> 3] = d7 + (d13 * +0 + d10 * +0);
 HEAPF64[i2 + 64 >> 3] = d8 + (d3 * +0 + d5 * +0);
 return 1;
}
function __ZNK7WebCore15AffineTransform7inverseEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0;
 d3 = +HEAPF64[i2 >> 3];
 d4 = +HEAPF64[i2 + 24 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 d6 = +HEAPF64[i2 + 16 >> 3];
 d7 = d3 * d4 - d5 * d6;
 if (d7 == +0) {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 16) | 0;
  HEAPF64[i1 + 24 >> 3] = +1;
  _memset(i1 + 32 | 0, 0, 16) | 0;
  return;
 }
 if (d3 == +1 & d5 == +0 & d6 == +0 & d4 == +1) {
  d8 = +-0 - +HEAPF64[i2 + 32 >> 3];
  d9 = +-0 - +HEAPF64[i2 + 40 >> 3];
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 16) | 0;
  HEAPF64[i1 + 24 >> 3] = +1;
  HEAPF64[i1 + 32 >> 3] = d8;
  HEAPF64[i1 + 40 >> 3] = d9;
  return;
 } else {
  d9 = +HEAPF64[i2 + 40 >> 3];
  d8 = +HEAPF64[i2 + 32 >> 3];
  HEAPF64[i1 >> 3] = d4 / d7;
  HEAPF64[i1 + 8 >> 3] = (+-0 - d5) / d7;
  HEAPF64[i1 + 16 >> 3] = (+-0 - d6) / d7;
  HEAPF64[i1 + 24 >> 3] = d3 / d7;
  HEAPF64[i1 + 32 >> 3] = (d6 * d9 - d4 * d8) / d7;
  HEAPF64[i1 + 40 >> 3] = (d5 * d8 - d3 * d9) / d7;
  return;
 }
}
function __ZN7WebCore15AffineTransform8multiplyERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, i4 = 0, d5 = +0, d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, d19 = +0;
 d3 = +HEAPF64[i2 >> 3];
 i4 = i1 | 0;
 d5 = +HEAPF64[i4 >> 3];
 d6 = +HEAPF64[i2 + 8 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 i9 = i1 + 8 | 0;
 d10 = +HEAPF64[i9 >> 3];
 i11 = i1 + 24 | 0;
 d12 = +HEAPF64[i11 >> 3];
 d13 = +HEAPF64[i2 + 16 >> 3];
 d14 = +HEAPF64[i2 + 24 >> 3];
 d15 = +HEAPF64[i2 + 32 >> 3];
 d16 = +HEAPF64[i2 + 40 >> 3];
 i2 = i1 + 32 | 0;
 d17 = +HEAPF64[i2 >> 3] + (d5 * d15 + d8 * d16);
 i18 = i1 + 40 | 0;
 d19 = d10 * d15 + d12 * d16 + +HEAPF64[i18 >> 3];
 HEAPF64[i4 >> 3] = d3 * d5 + d6 * d8;
 HEAPF64[i9 >> 3] = d3 * d10 + d6 * d12;
 HEAPF64[i7 >> 3] = d5 * d13 + d8 * d14;
 HEAPF64[i11 >> 3] = d10 * d13 + d12 * d14;
 HEAPF64[i2 >> 3] = d17;
 HEAPF64[i18 >> 3] = d19;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform16rotateFromVectorEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var d4 = +0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, i13 = 0, d14 = +0, i15 = 0, d16 = +0;
 d4 = +Math_atan2(+d3, +d2) * +180 / 3.141592653589793 * 3.141592653589793 / +180;
 d2 = +Math_cos(d4);
 d3 = +Math_sin(d4);
 d4 = +-0 - d3;
 i5 = i1 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 i9 = i1 + 8 | 0;
 d10 = +HEAPF64[i9 >> 3];
 i11 = i1 + 24 | 0;
 d12 = +HEAPF64[i11 >> 3];
 i13 = i1 + 32 | 0;
 d14 = d6 * +0 + d8 * +0 + +HEAPF64[i13 >> 3];
 i15 = i1 + 40 | 0;
 d16 = d10 * +0 + d12 * +0 + +HEAPF64[i15 >> 3];
 HEAPF64[i5 >> 3] = d2 * d6 + d3 * d8;
 HEAPF64[i9 >> 3] = d2 * d10 + d3 * d12;
 HEAPF64[i7 >> 3] = d6 * d4 + d2 * d8;
 HEAPF64[i11 >> 3] = d10 * d4 + d2 * d12;
 HEAPF64[i13 >> 3] = d14;
 HEAPF64[i15 >> 3] = d16;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform6rotateEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0, d4 = +0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, i13 = 0, d14 = +0, i15 = 0, d16 = +0;
 d3 = d2 * 3.141592653589793 / +180;
 d2 = +Math_cos(d3);
 d4 = +Math_sin(d3);
 d3 = +-0 - d4;
 i5 = i1 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 i9 = i1 + 8 | 0;
 d10 = +HEAPF64[i9 >> 3];
 i11 = i1 + 24 | 0;
 d12 = +HEAPF64[i11 >> 3];
 i13 = i1 + 32 | 0;
 d14 = d6 * +0 + d8 * +0 + +HEAPF64[i13 >> 3];
 i15 = i1 + 40 | 0;
 d16 = d10 * +0 + d12 * +0 + +HEAPF64[i15 >> 3];
 HEAPF64[i5 >> 3] = d2 * d6 + d4 * d8;
 HEAPF64[i9 >> 3] = d2 * d10 + d4 * d12;
 HEAPF64[i7 >> 3] = d6 * d3 + d2 * d8;
 HEAPF64[i11 >> 3] = d10 * d3 + d2 * d12;
 HEAPF64[i13 >> 3] = d14;
 HEAPF64[i15 >> 3] = d16;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform9translateEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var d4 = +0, d5 = +0, i6 = 0;
 d4 = +HEAPF64[i1 >> 3];
 d5 = +HEAPF64[i1 + 8 >> 3];
 do {
  if (d4 == +1 & d5 == +0) {
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +1) {
    break;
   }
   i6 = i1 + 32 | 0;
   HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] + d2;
   i6 = i1 + 40 | 0;
   HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] + d3;
   return i1 | 0;
  }
 } while (0);
 i6 = i1 + 32 | 0;
 HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] + (d4 * d2 + +HEAPF64[i1 + 16 >> 3] * d3);
 i6 = i1 + 40 | 0;
 HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] + (d5 * d2 + +HEAPF64[i1 + 24 >> 3] * d3);
 return i1 | 0;
}
function __ZN7WebCore19makeMapBetweenRectsERKNS_9FloatRectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0;
 i4 = i1 + 8 | 0;
 i5 = i4;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i1 + 32 | 0;
 i6 = i5;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 d7 = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
 HEAPF64[i5 >> 3] = +HEAPF32[i3 >> 2] - +HEAPF32[i2 >> 2] + +0;
 HEAPF64[i1 + 40 >> 3] = d7 + +0;
 d7 = +HEAPF32[i3 + 8 >> 2] / +HEAPF32[i2 + 8 >> 2];
 d8 = +HEAPF32[i3 + 12 >> 2] / +HEAPF32[i2 + 12 >> 2];
 HEAPF64[i1 >> 3] = d7;
 HEAPF64[i4 >> 3] = d7 * +0;
 HEAPF64[i1 + 16 >> 3] = d8 * +0;
 HEAPF64[i1 + 24 >> 3] = d8;
 return;
}
function __ZNK7WebCore15AffineTransform22toTransformationMatrixEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0;
 d3 = +HEAPF64[i2 + 8 >> 3];
 d4 = +HEAPF64[i2 + 16 >> 3];
 d5 = +HEAPF64[i2 + 24 >> 3];
 d6 = +HEAPF64[i2 + 32 >> 3];
 d7 = +HEAPF64[i2 + 40 >> 3];
 HEAPF64[i1 >> 3] = +HEAPF64[i2 >> 3];
 HEAPF64[i1 + 8 >> 3] = d3;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 HEAPF64[i1 + 32 >> 3] = d4;
 HEAPF64[i1 + 40 >> 3] = d5;
 _memset(i1 + 48 | 0, 0, 32) | 0;
 HEAPF64[i1 + 80 >> 3] = +1;
 HEAPF64[i1 + 88 >> 3] = +0;
 HEAPF64[i1 + 96 >> 3] = d6;
 HEAPF64[i1 + 104 >> 3] = d7;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAPF64[i1 + 120 >> 3] = +1;
 return;
}
function __ZN7WebCore15AffineTransform4skewEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var d4 = +0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0;
 d4 = +Math_tan(d2 * 3.141592653589793 / +180);
 d2 = +Math_tan(d3 * 3.141592653589793 / +180);
 i5 = i1 | 0;
 d3 = +HEAPF64[i5 >> 3];
 i6 = i1 + 8 | 0;
 d7 = +HEAPF64[i6 >> 3];
 i8 = i1 + 16 | 0;
 d9 = +HEAPF64[i8 >> 3];
 HEAPF64[i5 >> 3] = d3 + d2 * d9;
 i5 = i1 + 24 | 0;
 d10 = +HEAPF64[i5 >> 3];
 HEAPF64[i6 >> 3] = d7 + d2 * d10;
 HEAPF64[i8 >> 3] = d4 * d3 + d9;
 HEAPF64[i5 >> 3] = d4 * d7 + d10;
 return i1 | 0;
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
function __ZN7WebCore15AffineTransform5skewYEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0;
 d3 = +Math_tan(d2 * 3.141592653589793 / +180);
 i4 = i1 | 0;
 d2 = +HEAPF64[i4 >> 3];
 i5 = i1 + 8 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 HEAPF64[i4 >> 3] = d2 + d3 * d8;
 i4 = i1 + 24 | 0;
 d9 = +HEAPF64[i4 >> 3];
 HEAPF64[i5 >> 3] = d6 + d3 * d9;
 HEAPF64[i7 >> 3] = d2 * +0 + d8;
 HEAPF64[i4 >> 3] = d6 * +0 + d9;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform5skewXEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0;
 d3 = +Math_tan(d2 * 3.141592653589793 / +180);
 i4 = i1 | 0;
 d2 = +HEAPF64[i4 >> 3];
 i5 = i1 + 8 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 HEAPF64[i4 >> 3] = d2 + d8 * +0;
 i4 = i1 + 24 | 0;
 d9 = +HEAPF64[i4 >> 3];
 HEAPF64[i5 >> 3] = d6 + d9 * +0;
 HEAPF64[i7 >> 3] = d3 * d2 + d8;
 HEAPF64[i4 >> 3] = d3 * d6 + d9;
 return i1 | 0;
}
function __ZNK7WebCore15AffineTransform7mapSizeERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0;
 d4 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 d6 = +(HEAP32[i3 >> 2] | 0) * +Math_sqrt(d4 * d4 + d5 * d5);
 d5 = +HEAPF64[i2 + 16 >> 3];
 d4 = +HEAPF64[i2 + 24 >> 3];
 d7 = +(HEAP32[i3 + 4 >> 2] | 0) * +Math_sqrt(d5 * d5 + d4 * d4);
 i3 = _round(+d6) | 0;
 i2 = _round(+d7) | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function __ZNK7WebCore15AffineTransform8mapPointERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0;
 d4 = +(HEAP32[i3 >> 2] | 0);
 d5 = +(HEAP32[i3 + 4 >> 2] | 0);
 d6 = +HEAPF64[i2 + 40 >> 3] + (d4 * +HEAPF64[i2 + 8 >> 3] + d5 * +HEAPF64[i2 + 24 >> 3]);
 i3 = _round(+(+HEAPF64[i2 + 32 >> 3] + (d4 * +HEAPF64[i2 >> 3] + d5 * +HEAPF64[i2 + 16 >> 3]))) | 0;
 i2 = _round(+d6) | 0;
 HEAP32[i1 >> 2] = i3;
 HEAP32[i1 + 4 >> 2] = i2;
 return;
}
function __ZN7WebCore15AffineTransform5shearEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, d5 = +0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0;
 i4 = i1 | 0;
 d5 = +HEAPF64[i4 >> 3];
 i6 = i1 + 8 | 0;
 d7 = +HEAPF64[i6 >> 3];
 i8 = i1 + 16 | 0;
 d9 = +HEAPF64[i8 >> 3];
 HEAPF64[i4 >> 3] = d5 + d9 * d3;
 i4 = i1 + 24 | 0;
 d10 = +HEAPF64[i4 >> 3];
 HEAPF64[i6 >> 3] = d7 + d10 * d3;
 HEAPF64[i8 >> 3] = d5 * d2 + d9;
 HEAPF64[i4 >> 3] = d7 * d2 + d10;
 return i1 | 0;
}
function __ZNK7WebCore15AffineTransform10isIdentityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if (+HEAPF64[i1 >> 3] == +1) {
   if (+HEAPF64[i1 + 8 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +1) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    i2 = 0;
    break;
   }
   i2 = +HEAPF64[i1 + 40 >> 3] == +0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZNK7WebCore15AffineTransform7mapSizeERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0;
 d4 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 d6 = +HEAPF32[i3 >> 2] * +Math_sqrt(d4 * d4 + d5 * d5);
 d5 = +HEAPF64[i2 + 16 >> 3];
 d4 = +HEAPF64[i2 + 24 >> 3];
 d7 = +HEAPF32[i3 + 4 >> 2] * +Math_sqrt(d5 * d5 + d4 * d4);
 HEAPF32[i1 >> 2] = d6;
 HEAPF32[i1 + 4 >> 2] = d7;
 return;
}
function __ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d6 = +HEAPF64[i2 + 40 >> 3] + (d4 * +HEAPF64[i2 + 8 >> 3] + d5 * +HEAPF64[i2 + 24 >> 3]);
 HEAPF32[i1 >> 2] = +HEAPF64[i2 + 32 >> 3] + (d4 * +HEAPF64[i2 >> 3] + d5 * +HEAPF64[i2 + 16 >> 3]);
 HEAPF32[i1 + 4 >> 2] = d6;
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
function __ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i6, i3);
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i5, i2, i6);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = i1 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 8 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 16 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 i4 = i1 + 24 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform5scaleEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = i1 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 8 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 16 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 i4 = i1 + 24 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform5scaleEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 i3 = i1 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 8 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 16 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 24 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 return i1 | 0;
}
function __ZNK7WebCore15AffineTransform3mapEddRdS1_(i1, d2, d3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i1 + 32 >> 3] + (+HEAPF64[i1 >> 3] * d2 + +HEAPF64[i1 + 16 >> 3] * d3);
 HEAPF64[i5 >> 3] = +HEAPF64[i1 + 40 >> 3] + (+HEAPF64[i1 + 8 >> 3] * d2 + +HEAPF64[i1 + 24 >> 3] * d3);
 return;
}
function __ZN7WebCore15AffineTransform9setMatrixEdddddd(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 HEAPF64[i1 >> 3] = d2;
 HEAPF64[i1 + 8 >> 3] = d3;
 HEAPF64[i1 + 16 >> 3] = d4;
 HEAPF64[i1 + 24 >> 3] = d5;
 HEAPF64[i1 + 32 >> 3] = d6;
 HEAPF64[i1 + 40 >> 3] = d7;
 return;
}
function __ZN7WebCore15AffineTransformC2Edddddd(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 HEAPF64[i1 >> 3] = d2;
 HEAPF64[i1 + 8 >> 3] = d3;
 HEAPF64[i1 + 16 >> 3] = d4;
 HEAPF64[i1 + 24 >> 3] = d5;
 HEAPF64[i1 + 32 >> 3] = d6;
 HEAPF64[i1 + 40 >> 3] = d7;
 return;
}
function __ZN7WebCore15AffineTransformC1Edddddd(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 HEAPF64[i1 >> 3] = d2;
 HEAPF64[i1 + 8 >> 3] = d3;
 HEAPF64[i1 + 16 >> 3] = d4;
 HEAPF64[i1 + 24 >> 3] = d5;
 HEAPF64[i1 + 32 >> 3] = d6;
 HEAPF64[i1 + 40 >> 3] = d7;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_vidddddd(i1, i2, d3, d4, d5, d6, d7, d8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 d8 = +d8;
 FUNCTION_TABLE_vidddddd[i1 & 3](i2 | 0, +d3, +d4, +d5, +d6, +d7, +d8);
}
function __ZN7WebCore15AffineTransform5flipYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 24 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform5flipXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 8 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 return i1 | 0;
}
function __ZN7WebCore15AffineTransform12makeIdentityEv(i1) {
 i1 = i1 | 0;
 HEAPF64[i1 >> 3] = +1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAPF64[i1 + 24 >> 3] = +1;
 _memset(i1 + 32 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore15AffineTransform6yScaleEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0;
 d2 = +HEAPF64[i1 + 16 >> 3];
 d3 = +HEAPF64[i1 + 24 >> 3];
 return +(+Math_sqrt(d2 * d2 + d3 * d3));
}
function __ZN7WebCore15AffineTransformC2Ev(i1) {
 i1 = i1 | 0;
 HEAPF64[i1 >> 3] = +1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAPF64[i1 + 24 >> 3] = +1;
 _memset(i1 + 32 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore15AffineTransformC1Ev(i1) {
 i1 = i1 | 0;
 HEAPF64[i1 >> 3] = +1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAPF64[i1 + 24 >> 3] = +1;
 _memset(i1 + 32 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore15AffineTransform6xScaleEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0;
 d2 = +HEAPF64[i1 >> 3];
 d3 = +HEAPF64[i1 + 8 >> 3];
 return +(+Math_sqrt(d2 * d2 + d3 * d3));
}
function __ZNK7WebCore15AffineTransform12isInvertibleEv(i1) {
 i1 = i1 | 0;
 return +HEAPF64[i1 >> 3] * +HEAPF64[i1 + 24 >> 3] - +HEAPF64[i1 + 8 >> 3] * +HEAPF64[i1 + 16 >> 3] != +0 | 0;
}
function __ZNK7WebCore15AffineTransform3detEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF64[i1 >> 3] * +HEAPF64[i1 + 24 >> 3] - +HEAPF64[i1 + 8 >> 3] * +HEAPF64[i1 + 16 >> 3]);
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
function b0(i1, d2, d3, d4, d5, d6, d7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 d6 = +d6;
 d7 = +d7;
 abort(0);
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
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vidddddd = [b0,b0,__ZN7WebCore15AffineTransformC2Edddddd,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15AffineTransformC2Ev,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vidddddd: dynCall_vidddddd, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vidddddd": invoke_vidddddd, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_cos": _cos, "_fabs": _fabs, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_sqrt": _sqrt, "_round": _round, "_atan2": _atan2, "_free": _free, "_fmod": _fmod, "_fflush": _fflush, "_tan": _tan, "_sin": _sin, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vidddddd = Module["dynCall_vidddddd"] = asm["dynCall_vidddddd"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore15AffineTransform4skewEdd","__ZN7WebCore15AffineTransform6rotateEd","__ZNK7WebCore15AffineTransform7mapRectERKNS_7IntRectE","__ZN7WebCore19makeMapBetweenRectsERKNS_9FloatRectES2_","__ZN7WebCore15AffineTransform9setMatrixEdddddd","__ZN7WebCore15AffineTransform12makeIdentityEv","__ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE","__ZNK7WebCore15AffineTransform12isInvertibleEv","__ZNK7WebCore15AffineTransform6xScaleEv","__ZNK7WebCore15AffineTransform3detEv","__ZNK7WebCore15AffineTransform10isIdentityEv","_memset","__ZNK7WebCore15AffineTransform8mapPointERKNS_8IntPointE","__ZN7WebCore15AffineTransform5skewYEd","_memcpy","__ZN7WebCore15AffineTransformC2Edddddd","__ZN7WebCore15AffineTransform5skewXEd","__ZN7WebCore15AffineTransform16rotateFromVectorEdd","__ZN7WebCore15AffineTransform8multiplyERKS0_","__ZNK7WebCore15AffineTransform6yScaleEv","__ZN7WebCore15AffineTransform15scaleNonUniformEdd","__ZN7WebCore15AffineTransform5scaleEdd","__ZN7WebCore15AffineTransform5shearEdd","__ZN7WebCore15AffineTransformC2Ev","__ZN7WebCore15AffineTransform9recomposeERKNS0_14DecomposedTypeE","__ZN7WebCore15AffineTransform5flipYEv","__ZNK7WebCore15AffineTransform7mapSizeERKNS_7IntSizeE","__ZN7WebCore15AffineTransform5flipXEv","__ZNK7WebCore15AffineTransform22toTransformationMatrixEv","__ZN7WebCore15AffineTransform9translateEdd","__ZNK7WebCore15AffineTransform9decomposeERNS0_14DecomposedTypeE","__ZN7WebCore15AffineTransform5scaleEd","__ZNK7WebCore15AffineTransform7inverseEv","__ZN7WebCore15AffineTransform5blendERKS0_d","__ZNK7WebCore15AffineTransform3mapEddRdS1_","__ZNK7WebCore15AffineTransform7mapQuadERKNS_9FloatQuadE","__ZNK7WebCore15AffineTransform7mapSizeERKNS_9FloatSizeE","__ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE"]

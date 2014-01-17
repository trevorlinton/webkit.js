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
var __ZN7WebCore20TransformationMatrixC1ERKNS_15AffineTransformE;
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _fabs=env._fabs;
  var _floorf=env._floorf;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var ___setErrNo=env.___setErrNo;
  var _acos=env._acos;
  var _copysign=env._copysign;
  var _cos=env._cos;
  var _sqrt=env._sqrt;
  var _sin=env._sin;
  var _atan2=env._atan2;
  var _malloc=env._malloc;
  var _free=env._free;
  var _fflush=env._fflush;
  var _tan=env._tan;
  var __reallyNegative=env.__reallyNegative;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore20TransformationMatrix10decompose4ERNS0_15Decomposed4TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0, d51 = +0, d52 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i1 | 0;
 do {
  if (+HEAPF64[i6 >> 3] == +1) {
   if (+HEAPF64[i1 + 8 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 96 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 104 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +1) {
    break;
   }
   _memset(i2 | 0, 0, 128) | 0;
   HEAPF64[i2 + 128 >> 3] = +1;
   HEAPF64[i2 >> 3] = +1;
   HEAPF64[i2 + 8 >> 3] = +1;
   HEAPF64[i2 + 16 >> 3] = +1;
  }
 } while (0);
 d7 = +HEAPF64[i1 + 120 >> 3];
 if (d7 == +0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 d9 = +HEAPF64[i6 >> 3] / d7;
 d10 = +HEAPF64[i1 + 8 >> 3] / d7;
 d11 = +HEAPF64[i1 + 16 >> 3] / d7;
 d12 = +HEAPF64[i1 + 24 >> 3] / d7;
 d13 = +HEAPF64[i1 + 32 >> 3] / d7;
 d14 = +HEAPF64[i1 + 40 >> 3] / d7;
 d15 = +HEAPF64[i1 + 48 >> 3] / d7;
 d16 = +HEAPF64[i1 + 56 >> 3] / d7;
 d17 = +HEAPF64[i1 + 64 >> 3] / d7;
 d18 = +HEAPF64[i1 + 72 >> 3] / d7;
 d19 = +HEAPF64[i1 + 80 >> 3] / d7;
 d20 = +HEAPF64[i1 + 88 >> 3] / d7;
 d21 = +HEAPF64[i1 + 96 >> 3] / d7;
 d22 = +HEAPF64[i1 + 104 >> 3] / d7;
 d23 = +HEAPF64[i1 + 112 >> 3] / d7;
 d24 = d7 / d7;
 HEAPF64[i4 >> 3] = d9;
 HEAPF64[i4 + 8 >> 3] = d10;
 HEAPF64[i4 + 16 >> 3] = d11;
 HEAPF64[i4 + 32 >> 3] = d13;
 HEAPF64[i4 + 40 >> 3] = d14;
 HEAPF64[i4 + 48 >> 3] = d15;
 HEAPF64[i4 + 64 >> 3] = d17;
 HEAPF64[i4 + 72 >> 3] = d18;
 HEAPF64[i4 + 80 >> 3] = d19;
 HEAPF64[i4 + 96 >> 3] = d21;
 HEAPF64[i4 + 104 >> 3] = d22;
 HEAPF64[i4 + 112 >> 3] = d23;
 HEAPF64[i4 + 24 >> 3] = +0;
 HEAPF64[i4 + 56 >> 3] = +0;
 HEAPF64[i4 + 88 >> 3] = +0;
 HEAPF64[i4 + 120 >> 3] = +1;
 d7 = d19 - d23 * +0;
 d25 = d18 - d22 * +0;
 d26 = d18 * d23 - d19 * d22;
 d27 = d17 - d21 * +0;
 d28 = d17 * d23 - d19 * d21;
 d29 = d17 * d22 - d18 * d21;
 if (d11 * (d29 * +0 + (d13 * d25 - d14 * d27)) + (d9 * (d26 * +0 + (d14 * d7 - d15 * d25)) - d10 * (d28 * +0 + (d13 * d7 - d15 * d27))) - (d15 * d29 + (d13 * d26 - d14 * d28)) * +0 == +0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if (d12 != +0 | d16 != +0 | d20 != +0) {
  __ZN7WebCoreL7inverseERA4_A4_KdRA4_A4_d(i4, i5) | 0;
  d28 = d12 * +HEAPF64[i5 + 32 >> 3] + d16 * +HEAPF64[i5 + 40 >> 3] + d20 * +HEAPF64[i5 + 48 >> 3] + d24 * +HEAPF64[i5 + 56 >> 3];
  d26 = d12 * +HEAPF64[i5 + 64 >> 3] + d16 * +HEAPF64[i5 + 72 >> 3] + d20 * +HEAPF64[i5 + 80 >> 3] + d24 * +HEAPF64[i5 + 88 >> 3];
  d29 = d12 * +HEAPF64[i5 + 96 >> 3] + d16 * +HEAPF64[i5 + 104 >> 3] + d20 * +HEAPF64[i5 + 112 >> 3] + d24 * +HEAPF64[i5 + 120 >> 3];
  HEAPF64[i2 + 104 >> 3] = d12 * +HEAPF64[i5 >> 3] + d16 * +HEAPF64[i5 + 8 >> 3] + d20 * +HEAPF64[i5 + 16 >> 3] + d24 * +HEAPF64[i5 + 24 >> 3];
  HEAPF64[i2 + 112 >> 3] = d28;
  HEAPF64[i2 + 120 >> 3] = d26;
  HEAPF64[i2 + 128 >> 3] = d29;
 } else {
  _memset(i2 + 104 | 0, 0, 24) | 0;
  HEAPF64[i2 + 128 >> 3] = +1;
 }
 HEAPF64[i2 + 80 >> 3] = d21;
 HEAPF64[i2 + 88 >> 3] = d22;
 HEAPF64[i2 + 96 >> 3] = d23;
 d23 = +Math_sqrt(d9 * d9 + d10 * d10 + d11 * d11);
 i5 = i2 | 0;
 HEAPF64[i5 >> 3] = d23;
 if (d23 != +0) {
  d22 = +1 / d23;
  d30 = d9 * d22;
  d31 = d10 * d22;
  d32 = d11 * d22;
 } else {
  d30 = d9;
  d31 = d10;
  d32 = d11;
 }
 d11 = d15 * d32 + (d14 * d31 + d13 * d30);
 i4 = i2 + 24 | 0;
 HEAPF64[i4 >> 3] = d11;
 d10 = +-0 - d11;
 d9 = d13 + d30 * d10;
 d13 = d14 + d31 * d10;
 d14 = d15 + d32 * d10;
 d10 = +Math_sqrt(d14 * d14 + (d9 * d9 + d13 * d13));
 i1 = i2 + 8 | 0;
 HEAPF64[i1 >> 3] = d10;
 if (d10 != +0) {
  d15 = +1 / d10;
  d33 = d9 * d15;
  d34 = d13 * d15;
  d35 = d14 * d15;
 } else {
  d33 = d9;
  d34 = d13;
  d35 = d14;
 }
 HEAPF64[i4 >> 3] = d11 / d10;
 d11 = d19 * d32 + (d18 * d31 + d17 * d30);
 i4 = i2 + 32 | 0;
 HEAPF64[i4 >> 3] = d11;
 d14 = +-0 - d11;
 d13 = d17 + d30 * d14;
 d17 = d18 + d31 * d14;
 d18 = d19 + d32 * d14;
 d14 = d18 * d35 + (d17 * d34 + d13 * d33);
 i6 = i2 + 40 | 0;
 HEAPF64[i6 >> 3] = d14;
 d19 = +-0 - d14;
 d9 = d13 + d33 * d19;
 d13 = d17 + d34 * d19;
 d17 = d18 + d35 * d19;
 d19 = +Math_sqrt(d17 * d17 + (d9 * d9 + d13 * d13));
 i36 = i2 + 16 | 0;
 HEAPF64[i36 >> 3] = d19;
 if (d19 != +0) {
  d18 = +1 / d19;
  d37 = d17 * d18;
  d38 = d13 * d18;
  d39 = d9 * d18;
 } else {
  d37 = d17;
  d38 = d13;
  d39 = d9;
 }
 HEAPF64[i4 >> 3] = d11 / d19;
 HEAPF64[i6 >> 3] = d14 / d19;
 if (d32 * (d33 * d38 - d34 * d39) + (d30 * (d34 * d37 - d35 * d38) + d31 * (d35 * d39 - d33 * d37)) < +0) {
  HEAPF64[i5 >> 3] = d23 * +-1;
  HEAPF64[i1 >> 3] = d10 * +-1;
  HEAPF64[i36 >> 3] = d19 * +-1;
  d40 = d30 * +-1;
  d41 = d34 * +-1;
  d42 = d37 * +-1;
  d43 = d38 * +-1;
  d44 = d35 * +-1;
  d45 = d32 * +-1;
  d46 = d39 * +-1;
  d47 = d33 * +-1;
  d48 = d31 * +-1;
 } else {
  d40 = d30;
  d41 = d34;
  d42 = d37;
  d43 = d38;
  d44 = d35;
  d45 = d32;
  d46 = d39;
  d47 = d33;
  d48 = d31;
 }
 d31 = d42 + (d41 + d40) + +1;
 do {
  if (d31 > +1e-4) {
   d33 = +.5 / +Math_sqrt(d31);
   d49 = +.25 / d33;
   d50 = (d47 - d48) * d33;
   d51 = (d45 - d46) * d33;
   d52 = (d43 - d44) * d33;
  } else {
   if (d40 > d41 & d40 > d42) {
    d33 = +Math_sqrt(d40 + +1 - d41 - d42) * +2;
    d49 = (d43 - d44) / d33;
    d50 = (d46 + d45) / d33;
    d51 = (d48 + d47) / d33;
    d52 = d33 * +.25;
    break;
   }
   if (d41 > d42) {
    d33 = +Math_sqrt(d41 + +1 - d40 - d42) * +2;
    d49 = (d45 - d46) / d33;
    d50 = (d44 + d43) / d33;
    d51 = d33 * +.25;
    d52 = (d48 + d47) / d33;
    break;
   } else {
    d33 = +Math_sqrt(d42 + +1 - d40 - d41) * +2;
    d49 = (d47 - d48) / d33;
    d50 = d33 * +.25;
    d51 = (d44 + d43) / d33;
    d52 = (d46 + d45) / d33;
    break;
   }
  }
 } while (0);
 HEAPF64[i2 + 48 >> 3] = d52;
 HEAPF64[i2 + 56 >> 3] = d51;
 HEAPF64[i2 + 64 >> 3] = d50;
 HEAPF64[i2 + 72 >> 3] = d49;
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore20TransformationMatrix10recompose4ERKNS0_15Decomposed4TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, i16 = 0, d17 = +0, i18 = 0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, i26 = 0, d27 = +0, d28 = +0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, d33 = +0, i34 = 0, d35 = +0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0, d51 = +0, d52 = +0, d53 = +0, d54 = +0, d55 = +0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 512 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i3 + 256 | 0;
 i7 = i3 + 384 | 0;
 i8 = i1 | 0;
 HEAPF64[i8 >> 3] = +1;
 i9 = i1 + 8 | 0;
 i10 = i1 + 40 | 0;
 _memset(i9 | 0, 0, 32) | 0;
 HEAPF64[i10 >> 3] = +1;
 i11 = i1 + 48 | 0;
 i12 = i1 + 80 | 0;
 _memset(i11 | 0, 0, 32) | 0;
 HEAPF64[i12 >> 3] = +1;
 i13 = i1 + 88 | 0;
 i14 = i1 + 120 | 0;
 _memset(i13 | 0, 0, 32) | 0;
 HEAPF64[i14 >> 3] = +1;
 d15 = +HEAPF64[i2 + 104 >> 3];
 i16 = i1 + 24 | 0;
 HEAPF64[i16 >> 3] = d15;
 d17 = +HEAPF64[i2 + 112 >> 3];
 i18 = i1 + 56 | 0;
 HEAPF64[i18 >> 3] = d17;
 d19 = +HEAPF64[i2 + 120 >> 3];
 HEAPF64[i13 >> 3] = d19;
 d20 = +HEAPF64[i2 + 128 >> 3];
 HEAPF64[i14 >> 3] = d20;
 d21 = +HEAPF64[i2 + 80 >> 3];
 d22 = +HEAPF64[i2 + 88 >> 3];
 d23 = +HEAPF64[i2 + 96 >> 3];
 i24 = i1 + 32 | 0;
 d25 = d22 * +0;
 i26 = i1 + 64 | 0;
 d27 = d23 * +0;
 HEAPF64[i1 + 96 >> 3] = d21 + d25 + d27 + +0;
 d28 = d21 * +0;
 i29 = i1 + 72 | 0;
 HEAPF64[i1 + 104 >> 3] = d28 + d22 + d27 + +0;
 i30 = i1 + 16 | 0;
 HEAPF64[i1 + 112 >> 3] = d28 + d25 + d23 + +0;
 HEAPF64[i14 >> 3] = d20 + (d21 * d15 + d22 * d17 + d23 * d19);
 d19 = +HEAPF64[i2 + 48 >> 3];
 d23 = d19 * d19;
 d17 = +HEAPF64[i2 + 56 >> 3];
 d22 = d19 * d17;
 d15 = +HEAPF64[i2 + 64 >> 3];
 d21 = d19 * d15;
 d20 = +HEAPF64[i2 + 72 >> 3];
 d25 = d19 * d20;
 d19 = d17 * d17;
 d28 = d17 * d15;
 d27 = d17 * d20;
 d17 = d15 * d15;
 d31 = d15 * d20;
 HEAPF64[i4 >> 3] = +1 - (d19 + d17) * +2;
 HEAPF64[i4 + 8 >> 3] = (d22 - d31) * +2;
 HEAPF64[i4 + 16 >> 3] = (d21 + d27) * +2;
 HEAPF64[i4 + 24 >> 3] = +0;
 HEAPF64[i4 + 32 >> 3] = (d22 + d31) * +2;
 HEAPF64[i4 + 40 >> 3] = +1 - (d23 + d17) * +2;
 HEAPF64[i4 + 48 >> 3] = (d28 - d25) * +2;
 HEAPF64[i4 + 56 >> 3] = +0;
 HEAPF64[i4 + 64 >> 3] = (d21 - d27) * +2;
 HEAPF64[i4 + 72 >> 3] = (d28 + d25) * +2;
 HEAPF64[i4 + 80 >> 3] = +1 - (d23 + d19) * +2;
 _memset(i4 + 88 | 0, 0, 32) | 0;
 HEAPF64[i4 + 120 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i4) | 0;
 d19 = +HEAPF64[i2 + 40 >> 3];
 if (d19 != +0) {
  HEAPF64[i5 >> 3] = +1;
  _memset(i5 + 8 | 0, 0, 32) | 0;
  HEAPF64[i5 + 40 >> 3] = +1;
  _memset(i5 + 48 | 0, 0, 24) | 0;
  HEAPF64[i5 + 80 >> 3] = +1;
  _memset(i5 + 88 | 0, 0, 32) | 0;
  HEAPF64[i5 + 120 >> 3] = +1;
  HEAPF64[i5 + 72 >> 3] = d19;
  __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i5) | 0;
 }
 d19 = +HEAPF64[i2 + 32 >> 3];
 if (d19 != +0) {
  HEAPF64[i6 >> 3] = +1;
  _memset(i6 + 8 | 0, 0, 32) | 0;
  HEAPF64[i6 + 40 >> 3] = +1;
  _memset(i6 + 48 | 0, 0, 32) | 0;
  HEAPF64[i6 + 80 >> 3] = +1;
  _memset(i6 + 88 | 0, 0, 32) | 0;
  HEAPF64[i6 + 120 >> 3] = +1;
  HEAPF64[i6 + 64 >> 3] = d19;
  __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i6) | 0;
 }
 d19 = +HEAPF64[i2 + 24 >> 3];
 if (d19 == +0) {
  i32 = i2 | 0;
  d33 = +HEAPF64[i32 >> 3];
  i34 = i2 + 8 | 0;
  d35 = +HEAPF64[i34 >> 3];
  i36 = i2 + 16 | 0;
  d37 = +HEAPF64[i36 >> 3];
  d38 = +HEAPF64[i8 >> 3];
  d39 = d33 * d38;
  HEAPF64[i8 >> 3] = d39;
  d40 = +HEAPF64[i9 >> 3];
  d41 = d33 * d40;
  HEAPF64[i9 >> 3] = d41;
  d42 = +HEAPF64[i30 >> 3];
  d43 = d33 * d42;
  HEAPF64[i30 >> 3] = d43;
  d44 = +HEAPF64[i16 >> 3];
  d45 = d33 * d44;
  HEAPF64[i16 >> 3] = d45;
  d46 = +HEAPF64[i24 >> 3];
  d47 = d35 * d46;
  HEAPF64[i24 >> 3] = d47;
  d48 = +HEAPF64[i10 >> 3];
  d49 = d35 * d48;
  HEAPF64[i10 >> 3] = d49;
  d50 = +HEAPF64[i11 >> 3];
  d51 = d35 * d50;
  HEAPF64[i11 >> 3] = d51;
  d52 = +HEAPF64[i18 >> 3];
  d53 = d35 * d52;
  HEAPF64[i18 >> 3] = d53;
  d54 = +HEAPF64[i26 >> 3];
  d55 = d37 * d54;
  HEAPF64[i26 >> 3] = d55;
  d56 = +HEAPF64[i29 >> 3];
  d57 = d37 * d56;
  HEAPF64[i29 >> 3] = d57;
  d58 = +HEAPF64[i12 >> 3];
  d59 = d37 * d58;
  HEAPF64[i12 >> 3] = d59;
  d60 = +HEAPF64[i13 >> 3];
  d61 = d37 * d60;
  HEAPF64[i13 >> 3] = d61;
  STACKTOP = i3;
  return;
 }
 HEAPF64[i7 >> 3] = +1;
 _memset(i7 + 8 | 0, 0, 24) | 0;
 HEAPF64[i7 + 40 >> 3] = +1;
 _memset(i7 + 48 | 0, 0, 32) | 0;
 HEAPF64[i7 + 80 >> 3] = +1;
 _memset(i7 + 88 | 0, 0, 32) | 0;
 HEAPF64[i7 + 120 >> 3] = +1;
 HEAPF64[i7 + 32 >> 3] = d19;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i7) | 0;
 i32 = i2 | 0;
 d33 = +HEAPF64[i32 >> 3];
 i34 = i2 + 8 | 0;
 d35 = +HEAPF64[i34 >> 3];
 i36 = i2 + 16 | 0;
 d37 = +HEAPF64[i36 >> 3];
 d38 = +HEAPF64[i8 >> 3];
 d39 = d33 * d38;
 HEAPF64[i8 >> 3] = d39;
 d40 = +HEAPF64[i9 >> 3];
 d41 = d33 * d40;
 HEAPF64[i9 >> 3] = d41;
 d42 = +HEAPF64[i30 >> 3];
 d43 = d33 * d42;
 HEAPF64[i30 >> 3] = d43;
 d44 = +HEAPF64[i16 >> 3];
 d45 = d33 * d44;
 HEAPF64[i16 >> 3] = d45;
 d46 = +HEAPF64[i24 >> 3];
 d47 = d35 * d46;
 HEAPF64[i24 >> 3] = d47;
 d48 = +HEAPF64[i10 >> 3];
 d49 = d35 * d48;
 HEAPF64[i10 >> 3] = d49;
 d50 = +HEAPF64[i11 >> 3];
 d51 = d35 * d50;
 HEAPF64[i11 >> 3] = d51;
 d52 = +HEAPF64[i18 >> 3];
 d53 = d35 * d52;
 HEAPF64[i18 >> 3] = d53;
 d54 = +HEAPF64[i26 >> 3];
 d55 = d37 * d54;
 HEAPF64[i26 >> 3] = d55;
 d56 = +HEAPF64[i29 >> 3];
 d57 = d37 * d56;
 HEAPF64[i29 >> 3] = d57;
 d58 = +HEAPF64[i12 >> 3];
 d59 = d37 * d58;
 HEAPF64[i12 >> 3] = d59;
 d60 = +HEAPF64[i13 >> 3];
 d61 = d37 * d60;
 HEAPF64[i13 >> 3] = d61;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL7inverseERA4_A4_KdRA4_A4_d(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, i9 = 0, d10 = +0, i11 = 0, d12 = +0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, i21 = 0, d22 = +0, i23 = 0, d24 = +0, i25 = 0, d26 = +0, i27 = 0, d28 = +0, i29 = 0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, i42 = 0, d43 = +0, d44 = +0, i45 = 0, d46 = +0, i47 = 0, d48 = +0, i49 = 0, d50 = +0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, d63 = +0, d64 = +0, d65 = +0, i66 = 0;
 i3 = i1 | 0;
 d4 = +HEAPF64[i3 >> 3];
 i5 = i1 + 8 | 0;
 d6 = +HEAPF64[i5 >> 3];
 i7 = i1 + 16 | 0;
 d8 = +HEAPF64[i7 >> 3];
 i9 = i1 + 24 | 0;
 d10 = +HEAPF64[i9 >> 3];
 i11 = i1 + 32 | 0;
 d12 = +HEAPF64[i11 >> 3];
 i13 = i1 + 40 | 0;
 d14 = +HEAPF64[i13 >> 3];
 i15 = i1 + 48 | 0;
 d16 = +HEAPF64[i15 >> 3];
 i17 = i1 + 56 | 0;
 d18 = +HEAPF64[i17 >> 3];
 i19 = i1 + 64 | 0;
 d20 = +HEAPF64[i19 >> 3];
 i21 = i1 + 72 | 0;
 d22 = +HEAPF64[i21 >> 3];
 i23 = i1 + 80 | 0;
 d24 = +HEAPF64[i23 >> 3];
 i25 = i1 + 88 | 0;
 d26 = +HEAPF64[i25 >> 3];
 i27 = i1 + 96 | 0;
 d28 = +HEAPF64[i27 >> 3];
 i29 = i1 + 104 | 0;
 d30 = +HEAPF64[i29 >> 3];
 i31 = i1 + 112 | 0;
 d32 = +HEAPF64[i31 >> 3];
 i33 = i1 + 120 | 0;
 d34 = +HEAPF64[i33 >> 3];
 d35 = d24 * d34 - d26 * d32;
 d36 = d22 * d34 - d26 * d30;
 d37 = d22 * d32 - d24 * d30;
 d38 = d18 * d37 + (d14 * d35 - d16 * d36);
 i1 = i2 | 0;
 HEAPF64[i1 >> 3] = d38;
 d39 = d20 * d34 - d26 * d28;
 d40 = d20 * d32 - d24 * d28;
 d41 = +-0 - (d18 * d40 + (d12 * d35 - d16 * d39));
 i42 = i2 + 32 | 0;
 HEAPF64[i42 >> 3] = d41;
 d43 = d20 * d30 - d22 * d28;
 d44 = d18 * d43 + (d12 * d36 - d14 * d39);
 i45 = i2 + 64 | 0;
 HEAPF64[i45 >> 3] = d44;
 d46 = +-0 - (d16 * d43 + (d12 * d37 - d14 * d40));
 i47 = i2 + 96 | 0;
 HEAPF64[i47 >> 3] = d46;
 d48 = +-0 - (d10 * d37 + (d6 * d35 - d8 * d36));
 i49 = i2 + 8 | 0;
 HEAPF64[i49 >> 3] = d48;
 d50 = d10 * d40 + (d4 * d35 - d8 * d39);
 i51 = i2 + 40 | 0;
 HEAPF64[i51 >> 3] = d50;
 d35 = +-0 - (d10 * d43 + (d4 * d36 - d6 * d39));
 i52 = i2 + 72 | 0;
 HEAPF64[i52 >> 3] = d35;
 d39 = d8 * d43 + (d4 * d37 - d6 * d40);
 i53 = i2 + 104 | 0;
 HEAPF64[i53 >> 3] = d39;
 d40 = d16 * d34 - d18 * d32;
 d37 = d14 * d34 - d18 * d30;
 d43 = d14 * d32 - d16 * d30;
 d36 = d10 * d43 + (d6 * d40 - d8 * d37);
 i54 = i2 + 16 | 0;
 HEAPF64[i54 >> 3] = d36;
 d55 = d12 * d34 - d18 * d28;
 d34 = d12 * d32 - d16 * d28;
 d32 = +-0 - (d10 * d34 + (d4 * d40 - d8 * d55));
 i56 = i2 + 48 | 0;
 HEAPF64[i56 >> 3] = d32;
 d40 = d12 * d30 - d14 * d28;
 d28 = d10 * d40 + (d4 * d37 - d6 * d55);
 i57 = i2 + 80 | 0;
 HEAPF64[i57 >> 3] = d28;
 d55 = +-0 - (d8 * d40 + (d4 * d43 - d6 * d34));
 i58 = i2 + 112 | 0;
 HEAPF64[i58 >> 3] = d55;
 d34 = d16 * d26 - d18 * d24;
 d43 = d14 * d26 - d18 * d22;
 d40 = d14 * d24 - d16 * d22;
 d37 = +-0 - (d10 * d40 + (d6 * d34 - d8 * d43));
 i59 = i2 + 24 | 0;
 HEAPF64[i59 >> 3] = d37;
 d30 = d12 * d26 - d18 * d20;
 d18 = d12 * d24 - d16 * d20;
 d16 = d10 * d18 + (d4 * d34 - d8 * d30);
 i60 = i2 + 56 | 0;
 HEAPF64[i60 >> 3] = d16;
 d34 = d12 * d22 - d14 * d20;
 d20 = +-0 - (d10 * d34 + (d4 * d43 - d6 * d30));
 i61 = i2 + 88 | 0;
 HEAPF64[i61 >> 3] = d20;
 d30 = d8 * d34 + (d4 * d40 - d6 * d18);
 i62 = i2 + 120 | 0;
 HEAPF64[i62 >> 3] = d30;
 d18 = +HEAPF64[i11 >> 3];
 d6 = +HEAPF64[i13 >> 3];
 d40 = +HEAPF64[i15 >> 3];
 d4 = +HEAPF64[i17 >> 3];
 d34 = +HEAPF64[i19 >> 3];
 d8 = +HEAPF64[i21 >> 3];
 d43 = +HEAPF64[i23 >> 3];
 d10 = +HEAPF64[i25 >> 3];
 d14 = +HEAPF64[i27 >> 3];
 d22 = +HEAPF64[i29 >> 3];
 d12 = +HEAPF64[i31 >> 3];
 d24 = +HEAPF64[i33 >> 3];
 d26 = d43 * d24 - d10 * d12;
 d63 = d8 * d24 - d10 * d22;
 d64 = d8 * d12 - d43 * d22;
 d65 = d34 * d24 - d10 * d14;
 d10 = d34 * d12 - d43 * d14;
 d43 = d34 * d22 - d8 * d14;
 d14 = +HEAPF64[i7 >> 3] * (d4 * d43 + (d18 * d63 - d6 * d65)) + (+HEAPF64[i3 >> 3] * (d4 * d64 + (d6 * d26 - d40 * d63)) - +HEAPF64[i5 >> 3] * (d4 * d10 + (d18 * d26 - d40 * d65))) - +HEAPF64[i9 >> 3] * (d40 * d43 + (d18 * d64 - d6 * d10));
 if (+Math_abs(+d14) < +1e-8) {
  i66 = 0;
  return i66 | 0;
 }
 HEAPF64[i1 >> 3] = d38 / d14;
 HEAPF64[i49 >> 3] = d48 / d14;
 HEAPF64[i54 >> 3] = d36 / d14;
 HEAPF64[i59 >> 3] = d37 / d14;
 HEAPF64[i42 >> 3] = d41 / d14;
 HEAPF64[i51 >> 3] = d50 / d14;
 HEAPF64[i56 >> 3] = d32 / d14;
 HEAPF64[i60 >> 3] = d16 / d14;
 HEAPF64[i45 >> 3] = d44 / d14;
 HEAPF64[i52 >> 3] = d35 / d14;
 HEAPF64[i57 >> 3] = d28 / d14;
 HEAPF64[i61 >> 3] = d20 / d14;
 HEAPF64[i47 >> 3] = d46 / d14;
 HEAPF64[i53 >> 3] = d39 / d14;
 HEAPF64[i58 >> 3] = d55 / d14;
 HEAPF64[i62 >> 3] = d30 / d14;
 i66 = 1;
 return i66 | 0;
}
function __ZN7WebCore20TransformationMatrix6blend4ERKS0_d(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
 i5 = i4 | 0;
 i6 = i4 + 136 | 0;
 __ZNK7WebCore20TransformationMatrix10decompose4ERNS0_15Decomposed4TypeE(i2, i5) | 0;
 __ZNK7WebCore20TransformationMatrix10decompose4ERNS0_15Decomposed4TypeE(i1, i6) | 0;
 i2 = i5 | 0;
 d7 = +HEAPF64[i6 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 8 | 0;
 d8 = +HEAPF64[i6 + 8 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 16 | 0;
 d7 = +HEAPF64[i6 + 16 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 24 | 0;
 d8 = +HEAPF64[i6 + 24 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 32 | 0;
 d7 = +HEAPF64[i6 + 32 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 40 | 0;
 d8 = +HEAPF64[i6 + 40 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 80 | 0;
 d7 = +HEAPF64[i6 + 80 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 88 | 0;
 d8 = +HEAPF64[i6 + 88 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 96 | 0;
 d7 = +HEAPF64[i6 + 96 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 104 | 0;
 d8 = +HEAPF64[i6 + 104 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 112 | 0;
 d7 = +HEAPF64[i6 + 112 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 120 | 0;
 d8 = +HEAPF64[i6 + 120 >> 3];
 d7 = +HEAPF64[i2 >> 3];
 if (d7 != d8) {
  HEAPF64[i2 >> 3] = d7 + (d8 - d7) * d3;
 }
 i2 = i5 + 128 | 0;
 d7 = +HEAPF64[i6 + 128 >> 3];
 d8 = +HEAPF64[i2 >> 3];
 if (d8 != d7) {
  HEAPF64[i2 >> 3] = d8 + (d7 - d8) * d3;
 }
 i2 = i5 + 48 | 0;
 i9 = i6 + 48 | 0;
 d8 = +HEAPF64[i2 >> 3];
 i6 = i2 + 8 | 0;
 d7 = +HEAPF64[i6 >> 3];
 i10 = i2 + 16 | 0;
 d11 = +HEAPF64[i10 >> 3];
 i12 = i2 + 24 | 0;
 d13 = +HEAPF64[i12 >> 3];
 d14 = +HEAPF64[i9 >> 3];
 d15 = +HEAPF64[i9 + 8 >> 3];
 d16 = +HEAPF64[i9 + 16 >> 3];
 d17 = +HEAPF64[i9 + 24 >> 3];
 d18 = d8 * d14 + d7 * d15 + d11 * d16 + d13 * d17;
 if (d18 < +0) {
  d19 = +-0 - d8;
  d20 = +-0 - d7;
  d21 = +-0 - d18;
  d22 = +-0 - d11;
  d23 = +-0 - d13;
 } else {
  d19 = d8;
  d20 = d7;
  d21 = d18;
  d22 = d11;
  d23 = d13;
 }
 do {
  if (d21 + +1 > +.05) {
   if (+1 - d21 < +.05) {
    d24 = d3;
    d25 = +1 - d3;
    d26 = d14;
    d27 = d15;
    d28 = d17;
    d29 = d16;
    break;
   } else {
    d13 = +Math_acos(d21);
    d11 = +1 / +Math_sin(d13);
    d24 = d11 * +Math_sin(d13 * d3);
    d25 = d11 * +Math_sin((+1 - d3) * d13);
    d26 = d14;
    d27 = d15;
    d28 = d17;
    d29 = d16;
    break;
   }
  } else {
   d24 = +Math_sin(d3 * 3.141592653589793);
   d25 = +Math_sin((+.5 - d3) * 3.141592653589793);
   d26 = +-0 - d20;
   d27 = d19;
   d28 = d22;
   d29 = +-0 - d23;
  }
 } while (0);
 HEAPF64[i2 >> 3] = d19 * d25 + d26 * d24;
 HEAPF64[i6 >> 3] = d20 * d25 + d27 * d24;
 HEAPF64[i10 >> 3] = d22 * d25 + d29 * d24;
 HEAPF64[i12 >> 3] = d23 * d25 + d28 * d24;
 __ZN7WebCore20TransformationMatrix10recompose4ERKNS0_15Decomposed4TypeE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20TransformationMatrix7mapQuadERKNS_9FloatQuadE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0;
 d4 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 do {
  if (d4 == +1 & d5 == +0) {
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   d6 = +HEAPF64[i2 + 96 >> 3];
   d7 = +HEAPF64[i2 + 104 >> 3];
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
 d12 = +HEAPF64[i2 + 96 >> 3];
 d11 = +HEAPF64[i2 + 32 >> 3];
 d10 = d12 + d4 * d13 + d11 * d14;
 d9 = +HEAPF64[i2 + 104 >> 3];
 d8 = +HEAPF64[i2 + 40 >> 3];
 d6 = d9 + d13 * d5 + d14 * d8;
 d7 = +HEAPF64[i2 + 120 >> 3];
 d16 = +HEAPF64[i2 + 24 >> 3];
 d17 = +HEAPF64[i2 + 56 >> 3];
 d18 = d7 + d13 * d16 + d14 * d17;
 if (d18 != +1 & d18 != +0) {
  d19 = d6 / d18;
  d20 = d10 / d18;
 } else {
  d19 = d6;
  d20 = d10;
 }
 d10 = +d20;
 d20 = +d19;
 i2 = i3 + 8 | 0;
 d19 = +HEAPF32[i2 >> 2];
 d6 = d19;
 d19 = +HEAPF32[i2 + 4 >> 2];
 d18 = d12 + d4 * d6 + d11 * d19;
 d14 = d9 + d6 * d5 + d19 * d8;
 d13 = d7 + d6 * d16 + d19 * d17;
 if (d13 != +1 & d13 != +0) {
  d21 = d14 / d13;
  d22 = d18 / d13;
 } else {
  d21 = d14;
  d22 = d18;
 }
 d18 = +d22;
 d22 = +d21;
 i2 = i3 + 16 | 0;
 d21 = +HEAPF32[i2 >> 2];
 d14 = d21;
 d21 = +HEAPF32[i2 + 4 >> 2];
 d13 = d12 + d4 * d14 + d11 * d21;
 d19 = d9 + d14 * d5 + d21 * d8;
 d6 = d7 + d14 * d16 + d21 * d17;
 if (d6 != +1 & d6 != +0) {
  d23 = d19 / d6;
  d24 = d13 / d6;
 } else {
  d23 = d19;
  d24 = d13;
 }
 d13 = +d24;
 d24 = +d23;
 i2 = i3 + 24 | 0;
 d23 = +HEAPF32[i2 >> 2];
 d19 = d23;
 d23 = +HEAPF32[i2 + 4 >> 2];
 d6 = d12 + d4 * d19 + d11 * d23;
 d11 = d9 + d19 * d5 + d23 * d8;
 d8 = d7 + d19 * d16 + d23 * d17;
 if (d8 != +1 & d8 != +0) {
  d25 = d11 / d8;
  d26 = d6 / d8;
 } else {
  d25 = d11;
  d26 = d6;
 }
 d6 = +d26;
 d26 = +d25;
 i2 = i1;
 HEAPF32[i2 >> 2] = d10;
 HEAPF32[i2 + 4 >> 2] = d20;
 i2 = i1 + 8 | 0;
 HEAPF32[i2 >> 2] = d18;
 HEAPF32[i2 + 4 >> 2] = d22;
 i2 = i1 + 16 | 0;
 HEAPF32[i2 >> 2] = d13;
 HEAPF32[i2 + 4 >> 2] = d24;
 i2 = i1 + 24 | 0;
 HEAPF32[i2 >> 2] = d6;
 HEAPF32[i2 + 4 >> 2] = d26;
 return;
}
function __ZNK7WebCore20TransformationMatrix7mapRectERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0;
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
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   i10 = i3 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = HEAP32[i10 + 4 >> 2] | 0;
   d13 = +HEAPF32[i3 + 4 >> 2] + +HEAPF64[i2 + 104 >> 3];
   HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + +HEAPF64[i2 + 96 >> 3];
   HEAPF32[i1 + 4 >> 2] = d13;
   i10 = i1 + 8 | 0;
   HEAP32[i10 >> 2] = i11;
   HEAP32[i10 + 4 >> 2] = i12;
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i5 | 0, 0, 32) | 0;
 d13 = +HEAPF32[i3 >> 2];
 d14 = d13 + +HEAPF32[i3 + 8 >> 2];
 d15 = +HEAPF32[i3 + 4 >> 2];
 d16 = d15 + +HEAPF32[i3 + 12 >> 2];
 d17 = d13;
 d13 = d15;
 d15 = +HEAPF64[i2 + 96 >> 3];
 d18 = d15 + d17 * d8;
 d19 = +HEAPF64[i2 + 32 >> 3];
 d20 = d13 * d19;
 d21 = d18 + d20;
 d22 = +HEAPF64[i2 + 104 >> 3];
 d23 = d22 + d17 * d9;
 d24 = +HEAPF64[i2 + 40 >> 3];
 d25 = d13 * d24;
 d26 = d23 + d25;
 d27 = +HEAPF64[i2 + 120 >> 3];
 d28 = +HEAPF64[i2 + 24 >> 3];
 d29 = d27 + d17 * d28;
 d17 = +HEAPF64[i2 + 56 >> 3];
 d30 = d13 * d17;
 d13 = d29 + d30;
 if (d13 != +1 & d13 != +0) {
  d31 = d26 / d13;
  d32 = d21 / d13;
 } else {
  d31 = d26;
  d32 = d21;
 }
 d21 = +d32;
 d32 = +d31;
 HEAPF32[i6 >> 2] = d21;
 HEAPF32[i6 + 4 >> 2] = d32;
 d32 = d14;
 d14 = d15 + d32 * d8;
 d8 = d14 + d20;
 d20 = d22 + d32 * d9;
 d9 = d20 + d25;
 d25 = d27 + d32 * d28;
 d28 = d25 + d30;
 if (d28 != +1 & d28 != +0) {
  d33 = d9 / d28;
  d34 = d8 / d28;
 } else {
  d33 = d9;
  d34 = d8;
 }
 i6 = i5 + 8 | 0;
 d8 = +d34;
 d34 = +d33;
 HEAPF32[i6 >> 2] = d8;
 HEAPF32[i6 + 4 >> 2] = d34;
 d34 = d16;
 d16 = d34 * d19;
 d19 = d14 + d16;
 d14 = d34 * d24;
 d24 = d20 + d14;
 d20 = d34 * d17;
 d17 = d25 + d20;
 if (d17 != +1 & d17 != +0) {
  d35 = d24 / d17;
  d36 = d19 / d17;
 } else {
  d35 = d24;
  d36 = d19;
 }
 i6 = i5 + 16 | 0;
 d19 = +d36;
 d36 = +d35;
 HEAPF32[i6 >> 2] = d19;
 HEAPF32[i6 + 4 >> 2] = d36;
 d36 = d18 + d16;
 d16 = d23 + d14;
 d14 = d29 + d20;
 if (d14 != +1 & d14 != +0) {
  d37 = d16 / d14;
  d38 = d36 / d14;
 } else {
  d37 = d16;
  d38 = d36;
 }
 i6 = i5 + 24 | 0;
 d36 = +d38;
 d38 = +d37;
 HEAPF32[i6 >> 2] = d36;
 HEAPF32[i6 + 4 >> 2] = d38;
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i1, i7);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20TransformationMatrix10decompose2ERNS0_15Decomposed2TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0;
 i3 = i1 | 0;
 d4 = +HEAPF64[i3 >> 3];
 i5 = i1 + 8 | 0;
 do {
  if (d4 == +1) {
   if (+HEAPF64[i5 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +1) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 96 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 104 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    d6 = d4;
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +1) {
    d6 = d4;
    break;
   }
   _memset(i2 | 0, 0, 72) | 0;
   HEAPF64[i2 >> 3] = +1;
   HEAPF64[i2 + 8 >> 3] = +1;
   d6 = +HEAPF64[i3 >> 3];
  } else {
   d6 = d4;
  }
 } while (0);
 d4 = +HEAPF64[i5 >> 3];
 d7 = +HEAPF64[i1 + 32 >> 3];
 d8 = +HEAPF64[i1 + 40 >> 3];
 HEAPF64[i2 + 16 >> 3] = +HEAPF64[i1 + 96 >> 3];
 HEAPF64[i2 + 24 >> 3] = +HEAPF64[i1 + 104 >> 3];
 d9 = +Math_sqrt(d6 * d6 + d4 * d4);
 i1 = i2 | 0;
 HEAPF64[i1 >> 3] = d9;
 d10 = +Math_sqrt(d7 * d7 + d8 * d8);
 i5 = i2 + 8 | 0;
 HEAPF64[i5 >> 3] = d10;
 do {
  if (d6 * d8 - d4 * d7 < +0) {
   if (d6 < d8) {
    d11 = +-0 - d9;
    HEAPF64[i1 >> 3] = d11;
    d12 = d11;
    d13 = d10;
    break;
   } else {
    d11 = +-0 - d10;
    HEAPF64[i5 >> 3] = d11;
    d12 = d9;
    d13 = d11;
    break;
   }
  } else {
   d12 = d9;
   d13 = d10;
  }
 } while (0);
 if (d12 != +0) {
  d10 = +1 / d12;
  d14 = d6 * d10;
  d15 = d4 * d10;
 } else {
  d14 = d6;
  d15 = d4;
 }
 if (d13 != +0) {
  d4 = +1 / d13;
  d16 = d7 * d4;
  d17 = d8 * d4;
 } else {
  d16 = d7;
  d17 = d8;
 }
 d8 = +Math_atan2(+d15, +d14);
 i5 = i2 + 32 | 0;
 HEAPF64[i5 >> 3] = d8;
 if (d8 == +0) {
  d18 = d14;
  d19 = d15;
  d20 = d16;
  d21 = d17;
  i22 = i2 + 40 | 0;
  HEAPF64[i22 >> 3] = d18;
  i23 = i2 + 48 | 0;
  HEAPF64[i23 >> 3] = d19;
  i24 = i2 + 56 | 0;
  HEAPF64[i24 >> 3] = d20;
  i25 = i2 + 64 | 0;
  HEAPF64[i25 >> 3] = d21;
  d26 = d8 * +180;
  d27 = d26 / 3.141592653589793;
  HEAPF64[i5 >> 3] = d27;
  return 1;
 }
 d7 = +-0 - d15;
 d4 = d15 * d14;
 d18 = d14 * d14 + d16 * d7;
 d19 = d4 + d17 * d7;
 d20 = d4 + d14 * d16;
 d21 = d15 * d15 + d14 * d17;
 i22 = i2 + 40 | 0;
 HEAPF64[i22 >> 3] = d18;
 i23 = i2 + 48 | 0;
 HEAPF64[i23 >> 3] = d19;
 i24 = i2 + 56 | 0;
 HEAPF64[i24 >> 3] = d20;
 i25 = i2 + 64 | 0;
 HEAPF64[i25 >> 3] = d21;
 d26 = d8 * +180;
 d27 = d26 / 3.141592653589793;
 HEAPF64[i5 >> 3] = d27;
 return 1;
}
function __ZN7WebCore20TransformationMatrix10recompose2ERKNS0_15Decomposed2TypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i1 | 0;
 HEAPF64[i6 >> 3] = +1;
 i7 = i1 + 8 | 0;
 i8 = i1 + 40 | 0;
 _memset(i7 | 0, 0, 32) | 0;
 HEAPF64[i8 >> 3] = +1;
 i9 = i1 + 48 | 0;
 _memset(i9 | 0, 0, 32) | 0;
 HEAPF64[i1 + 80 >> 3] = +1;
 i10 = i1 + 120 | 0;
 _memset(i1 + 88 | 0, 0, 32) | 0;
 HEAPF64[i10 >> 3] = +1;
 d11 = +HEAPF64[i2 + 40 >> 3];
 HEAPF64[i6 >> 3] = d11;
 d12 = +HEAPF64[i2 + 48 >> 3];
 HEAPF64[i7 >> 3] = d12;
 d13 = +HEAPF64[i2 + 56 >> 3];
 i14 = i1 + 32 | 0;
 HEAPF64[i14 >> 3] = d13;
 d15 = +HEAPF64[i2 + 64 >> 3];
 HEAPF64[i8 >> 3] = d15;
 d16 = +HEAPF64[i2 + 16 >> 3];
 d17 = +HEAPF64[i2 + 24 >> 3];
 HEAPF64[i1 + 96 >> 3] = d16 * d11 + d17 * d13 + +0;
 HEAPF64[i1 + 104 >> 3] = d16 * d12 + d17 * d15 + +0;
 i18 = i1 + 16 | 0;
 d15 = d16 * +0 + d17 * +0 + +0;
 HEAPF64[i1 + 112 >> 3] = d15;
 i19 = i1 + 24 | 0;
 i20 = i1 + 56 | 0;
 HEAPF64[i10 >> 3] = d15 + +1;
 d15 = +HEAPF64[i2 + 32 >> 3] * 3.141592653589793 / +180;
 i10 = i4 | 0;
 i21 = i4 + 8 | 0;
 i22 = i4 + 40 | 0;
 i23 = i4 + 48 | 0;
 i24 = i4 + 80 | 0;
 i25 = i4 + 120 | 0;
 d17 = +Math_sin(d15);
 d16 = +Math_cos(d15);
 HEAPF64[i10 >> 3] = d16;
 HEAPF64[i21 >> 3] = d17;
 i26 = i4 + 16 | 0;
 HEAPF64[i26 >> 3] = +0;
 i27 = i4 + 32 | 0;
 HEAPF64[i27 >> 3] = +-0 - d17;
 HEAPF64[i22 >> 3] = d16;
 HEAPF64[i23 >> 3] = +0;
 i28 = i4 + 64 | 0;
 i29 = i28;
 _memset(i29 | 0, 0, 16) | 0;
 HEAPF64[i24 >> 3] = +1;
 i30 = i4 + 56 | 0;
 HEAPF64[i30 >> 3] = +0;
 i31 = i4 + 24 | 0;
 HEAPF64[i31 >> 3] = +0;
 i32 = i4 + 88 | 0;
 _memset(i32 | 0, 0, 32) | 0;
 HEAPF64[i25 >> 3] = +1;
 _memcpy(i5 | 0, i4 | 0, 128) | 0;
 HEAPF64[i10 >> 3] = +1;
 HEAPF64[i21 >> 3] = +0;
 HEAPF64[i26 >> 3] = +-0;
 HEAPF64[i27 >> 3] = +0;
 HEAPF64[i22 >> 3] = +1;
 HEAPF64[i23 >> 3] = +0;
 _memset(i29 | 0, 0, 16) | 0;
 HEAPF64[i24 >> 3] = +1;
 HEAPF64[i30 >> 3] = +0;
 HEAPF64[i31 >> 3] = +0;
 _memset(i32 | 0, 0, 32) | 0;
 HEAPF64[i25 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i5, i4) | 0;
 HEAPF64[i10 >> 3] = +1;
 HEAPF64[i27 >> 3] = +0;
 _memset(i21 | 0, 0, 16) | 0;
 HEAPF64[i22 >> 3] = +1;
 HEAPF64[i23 >> 3] = +0;
 HEAPF64[i28 >> 3] = +0;
 HEAPF64[i4 + 72 >> 3] = +-0;
 HEAPF64[i24 >> 3] = +1;
 HEAPF64[i30 >> 3] = +0;
 HEAPF64[i31 >> 3] = +0;
 _memset(i32 | 0, 0, 32) | 0;
 HEAPF64[i25 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i5, i4) | 0;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i5) | 0;
 d16 = +HEAPF64[i2 >> 3];
 d17 = +HEAPF64[i2 + 8 >> 3];
 HEAPF64[i6 >> 3] = d16 * +HEAPF64[i6 >> 3];
 HEAPF64[i7 >> 3] = d16 * +HEAPF64[i7 >> 3];
 HEAPF64[i18 >> 3] = d16 * +HEAPF64[i18 >> 3];
 HEAPF64[i19 >> 3] = d16 * +HEAPF64[i19 >> 3];
 HEAPF64[i14 >> 3] = d17 * +HEAPF64[i14 >> 3];
 HEAPF64[i8 >> 3] = d17 * +HEAPF64[i8 >> 3];
 HEAPF64[i9 >> 3] = d17 * +HEAPF64[i9 >> 3];
 HEAPF64[i20 >> 3] = d17 * +HEAPF64[i20 >> 3];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20TransformationMatrix5blendERKS0_d(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 do {
  if (+HEAPF64[i2 >> 3] == +1) {
   if (+HEAPF64[i2 + 8 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 96 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 104 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 112 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 8 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 96 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 104 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +1) {
    break;
   }
   return;
  }
 } while (0);
 do {
  if (+HEAPF64[i2 + 16 >> 3] == +0) {
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 112 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +1) {
    break;
   }
   __ZN7WebCore20TransformationMatrix6blend2ERKS0_d(i1, i2, d3);
   return;
  }
 } while (0);
 __ZN7WebCore20TransformationMatrix6blend4ERKS0_d(i1, i2, d3);
 return;
}
function __ZN7WebCore20TransformationMatrix6blend2ERKS0_d(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, d17 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i5 = i4 | 0;
 i6 = i4 + 72 | 0;
 __ZNK7WebCore20TransformationMatrix10decompose2ERNS0_15Decomposed2TypeE(i2, i5) | 0;
 __ZNK7WebCore20TransformationMatrix10decompose2ERNS0_15Decomposed2TypeE(i1, i6) | 0;
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
  i8 = i5 + 32 | 0;
  d9 = +HEAPF64[i8 >> 3];
  HEAPF64[i8 >> 3] = d9 + (d9 < +0 ? +180 : +-180);
  d11 = d10;
  d12 = d7;
 }
 i8 = i5 + 32 | 0;
 d7 = +HEAPF64[i8 >> 3];
 if (d7 != +0) {
  d13 = d7;
 } else {
  HEAPF64[i8 >> 3] = +360;
  d13 = +360;
 }
 i14 = i6 + 32 | 0;
 d7 = +HEAPF64[i14 >> 3];
 if (d7 != +0) {
  d15 = d7;
 } else {
  HEAPF64[i14 >> 3] = +360;
  d15 = +360;
 }
 do {
  if (+Math_abs(+(d13 - d15)) > +180) {
   if (d13 > d15) {
    d7 = d13 + +-360;
    HEAPF64[i8 >> 3] = d7;
    d16 = d15;
    d17 = d7;
    break;
   } else {
    d7 = d15 + +-360;
    HEAPF64[i14 >> 3] = d7;
    d16 = d7;
    d17 = d13;
    break;
   }
  } else {
   d16 = d15;
   d17 = d13;
  }
 } while (0);
 i14 = i5 + 40 | 0;
 d13 = +HEAPF64[i6 + 40 >> 3];
 d15 = +HEAPF64[i14 >> 3];
 if (d15 != d13) {
  HEAPF64[i14 >> 3] = d15 + (d13 - d15) * d3;
 }
 i14 = i5 + 48 | 0;
 d15 = +HEAPF64[i6 + 48 >> 3];
 d13 = +HEAPF64[i14 >> 3];
 if (d13 != d15) {
  HEAPF64[i14 >> 3] = d13 + (d15 - d13) * d3;
 }
 i14 = i5 + 56 | 0;
 d13 = +HEAPF64[i6 + 56 >> 3];
 d15 = +HEAPF64[i14 >> 3];
 if (d15 != d13) {
  HEAPF64[i14 >> 3] = d15 + (d13 - d15) * d3;
 }
 i14 = i5 + 64 | 0;
 d15 = +HEAPF64[i6 + 64 >> 3];
 d13 = +HEAPF64[i14 >> 3];
 if (d13 != d15) {
  HEAPF64[i14 >> 3] = d13 + (d15 - d13) * d3;
 }
 i14 = i5 + 16 | 0;
 d13 = +HEAPF64[i6 + 16 >> 3];
 d15 = +HEAPF64[i14 >> 3];
 if (d15 != d13) {
  HEAPF64[i14 >> 3] = d15 + (d13 - d15) * d3;
 }
 i14 = i5 + 24 | 0;
 d15 = +HEAPF64[i6 + 24 >> 3];
 d13 = +HEAPF64[i14 >> 3];
 if (d13 != d15) {
  HEAPF64[i14 >> 3] = d13 + (d15 - d13) * d3;
 }
 d13 = +HEAPF64[i6 >> 3];
 if (d11 != d13) {
  HEAPF64[i2 >> 3] = d11 + (d13 - d11) * d3;
 }
 d11 = +HEAPF64[i6 + 8 >> 3];
 if (d12 != d11) {
  HEAPF64[i5 + 8 >> 3] = d12 + (d11 - d12) * d3;
 }
 if (d17 == d16) {
  __ZN7WebCore20TransformationMatrix10recompose2ERKNS0_15Decomposed2TypeE(i1, i5);
  STACKTOP = i4;
  return;
 }
 HEAPF64[i8 >> 3] = d17 + (d16 - d17) * d3;
 __ZN7WebCore20TransformationMatrix10recompose2ERKNS0_15Decomposed2TypeE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20TransformationMatrix8rotate3dEdddd(i1, d2, d3, d4, d5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 d5 = +d5;
 var i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 d8 = +Math_sqrt(d2 * d2 + d3 * d3 + d4 * d4);
 if (d8 == +0) {
  STACKTOP = i6;
  return i1 | 0;
 }
 if (d8 != +1) {
  d9 = d2 / d8;
  d10 = d3 / d8;
  d11 = d4 / d8;
 } else {
  d9 = d2;
  d10 = d3;
  d11 = d4;
 }
 d4 = d5 * 3.141592653589793 / +180;
 d5 = +Math_sin(d4);
 d3 = +Math_cos(d4);
 i12 = i7 | 0;
 HEAPF64[i12 >> 3] = +1;
 i13 = i7 + 8 | 0;
 i14 = i7 + 40 | 0;
 _memset(i13 | 0, 0, 32) | 0;
 HEAPF64[i14 >> 3] = +1;
 i15 = i7 + 48 | 0;
 i16 = i7 + 80 | 0;
 _memset(i15 | 0, 0, 32) | 0;
 HEAPF64[i16 >> 3] = +1;
 i17 = i7 + 88 | 0;
 i18 = i7 + 120 | 0;
 _memset(i17 | 0, 0, 32) | 0;
 HEAPF64[i18 >> 3] = +1;
 i19 = d10 == +0;
 i20 = d11 == +0;
 do {
  if (d9 == +1 & i19 & i20) {
   HEAPF64[i12 >> 3] = +1;
   HEAPF64[i7 + 32 >> 3] = +0;
   _memset(i13 | 0, 0, 16) | 0;
   HEAPF64[i14 >> 3] = d3;
   HEAPF64[i15 >> 3] = d5;
   HEAPF64[i7 + 64 >> 3] = +0;
   HEAPF64[i7 + 72 >> 3] = +-0 - d5;
   HEAPF64[i16 >> 3] = d3;
   HEAPF64[i7 + 56 >> 3] = +0;
   HEAPF64[i7 + 24 >> 3] = +0;
   _memset(i17 | 0, 0, 32) | 0;
   HEAPF64[i18 >> 3] = +1;
  } else {
   i21 = d9 == +0;
   if (i21 & d10 == +1 & i20) {
    HEAPF64[i12 >> 3] = d3;
    HEAPF64[i13 >> 3] = +0;
    HEAPF64[i7 + 16 >> 3] = +-0 - d5;
    HEAPF64[i7 + 32 >> 3] = +0;
    HEAPF64[i14 >> 3] = +1;
    HEAPF64[i15 >> 3] = +0;
    HEAPF64[i7 + 64 >> 3] = d5;
    HEAPF64[i7 + 72 >> 3] = +0;
    HEAPF64[i16 >> 3] = d3;
    HEAPF64[i7 + 56 >> 3] = +0;
    HEAPF64[i7 + 24 >> 3] = +0;
    _memset(i17 | 0, 0, 32) | 0;
    HEAPF64[i18 >> 3] = +1;
    break;
   }
   if (i21 & i19 & d11 == +1) {
    HEAPF64[i12 >> 3] = d3;
    HEAPF64[i13 >> 3] = d5;
    HEAPF64[i7 + 16 >> 3] = +0;
    HEAPF64[i7 + 32 >> 3] = +-0 - d5;
    HEAPF64[i14 >> 3] = d3;
    HEAPF64[i15 >> 3] = +0;
    _memset(i7 + 64 | 0, 0, 16) | 0;
    HEAPF64[i16 >> 3] = +1;
    HEAPF64[i7 + 56 >> 3] = +0;
    HEAPF64[i7 + 24 >> 3] = +0;
    _memset(i17 | 0, 0, 32) | 0;
    HEAPF64[i18 >> 3] = +1;
    break;
   } else {
    d4 = +1 - d3;
    HEAPF64[i12 >> 3] = d3 + d9 * d9 * d4;
    d2 = d10 * d9 * d4;
    d8 = d11 * d5;
    HEAPF64[i13 >> 3] = d8 + d2;
    d22 = d11 * d9 * d4;
    d23 = d10 * d5;
    HEAPF64[i7 + 16 >> 3] = d22 - d23;
    HEAPF64[i7 + 32 >> 3] = d2 - d8;
    HEAPF64[i14 >> 3] = d3 + d10 * d10 * d4;
    d8 = d11 * d10 * d4;
    d2 = d9 * d5;
    HEAPF64[i15 >> 3] = d2 + d8;
    HEAPF64[i7 + 64 >> 3] = d23 + d22;
    HEAPF64[i7 + 72 >> 3] = d8 - d2;
    HEAPF64[i16 >> 3] = d3 + d11 * d11 * d4;
    HEAPF64[i7 + 56 >> 3] = +0;
    HEAPF64[i7 + 24 >> 3] = +0;
    _memset(i17 | 0, 0, 32) | 0;
    HEAPF64[i18 >> 3] = +1;
    break;
   }
  }
 } while (0);
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i7) | 0;
 STACKTOP = i6;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, i4 = 0, d5 = +0, d6 = +0, i7 = 0, d8 = +0, d9 = +0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, i17 = 0, d18 = +0, i19 = 0, d20 = +0, i21 = 0, d22 = +0, i23 = 0, d24 = +0, i25 = 0, d26 = +0, i27 = 0, d28 = +0, i29 = 0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, d34 = +0, i35 = 0, d36 = +0, i37 = 0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0;
 d3 = +HEAPF64[i2 >> 3];
 i4 = i1 | 0;
 d5 = +HEAPF64[i4 >> 3];
 d6 = +HEAPF64[i2 + 8 >> 3];
 i7 = i1 + 32 | 0;
 d8 = +HEAPF64[i7 >> 3];
 d9 = +HEAPF64[i2 + 16 >> 3];
 i10 = i1 + 64 | 0;
 d11 = +HEAPF64[i10 >> 3];
 d12 = +HEAPF64[i2 + 24 >> 3];
 i13 = i1 + 96 | 0;
 d14 = +HEAPF64[i13 >> 3];
 i15 = i1 + 8 | 0;
 d16 = +HEAPF64[i15 >> 3];
 i17 = i1 + 40 | 0;
 d18 = +HEAPF64[i17 >> 3];
 i19 = i1 + 72 | 0;
 d20 = +HEAPF64[i19 >> 3];
 i21 = i1 + 104 | 0;
 d22 = +HEAPF64[i21 >> 3];
 i23 = i1 + 16 | 0;
 d24 = +HEAPF64[i23 >> 3];
 i25 = i1 + 48 | 0;
 d26 = +HEAPF64[i25 >> 3];
 i27 = i1 + 80 | 0;
 d28 = +HEAPF64[i27 >> 3];
 i29 = i1 + 112 | 0;
 d30 = +HEAPF64[i29 >> 3];
 i31 = i1 + 24 | 0;
 d32 = +HEAPF64[i31 >> 3];
 i33 = i1 + 56 | 0;
 d34 = +HEAPF64[i33 >> 3];
 i35 = i1 + 88 | 0;
 d36 = +HEAPF64[i35 >> 3];
 i37 = i1 + 120 | 0;
 d38 = +HEAPF64[i37 >> 3];
 d39 = +HEAPF64[i2 + 32 >> 3];
 d40 = +HEAPF64[i2 + 40 >> 3];
 d41 = +HEAPF64[i2 + 48 >> 3];
 d42 = +HEAPF64[i2 + 56 >> 3];
 d43 = +HEAPF64[i2 + 64 >> 3];
 d44 = +HEAPF64[i2 + 72 >> 3];
 d45 = +HEAPF64[i2 + 80 >> 3];
 d46 = +HEAPF64[i2 + 88 >> 3];
 d47 = +HEAPF64[i2 + 96 >> 3];
 d48 = +HEAPF64[i2 + 104 >> 3];
 d49 = +HEAPF64[i2 + 112 >> 3];
 d50 = +HEAPF64[i2 + 120 >> 3];
 HEAPF64[i4 >> 3] = d3 * d5 + d6 * d8 + d9 * d11 + d12 * d14;
 HEAPF64[i15 >> 3] = d3 * d16 + d6 * d18 + d9 * d20 + d12 * d22;
 HEAPF64[i23 >> 3] = d3 * d24 + d6 * d26 + d9 * d28 + d12 * d30;
 HEAPF64[i31 >> 3] = d3 * d32 + d6 * d34 + d9 * d36 + d12 * d38;
 HEAPF64[i7 >> 3] = d5 * d39 + d8 * d40 + d11 * d41 + d14 * d42;
 HEAPF64[i17 >> 3] = d16 * d39 + d18 * d40 + d20 * d41 + d22 * d42;
 HEAPF64[i25 >> 3] = d24 * d39 + d26 * d40 + d28 * d41 + d30 * d42;
 HEAPF64[i33 >> 3] = d32 * d39 + d34 * d40 + d36 * d41 + d38 * d42;
 HEAPF64[i10 >> 3] = d5 * d43 + d8 * d44 + d11 * d45 + d14 * d46;
 HEAPF64[i19 >> 3] = d16 * d43 + d18 * d44 + d20 * d45 + d22 * d46;
 HEAPF64[i27 >> 3] = d24 * d43 + d26 * d44 + d28 * d45 + d30 * d46;
 HEAPF64[i35 >> 3] = d32 * d43 + d34 * d44 + d36 * d45 + d38 * d46;
 HEAPF64[i13 >> 3] = d5 * d47 + d8 * d48 + d11 * d49 + d14 * d50;
 HEAPF64[i21 >> 3] = d16 * d47 + d18 * d48 + d20 * d49 + d22 * d50;
 HEAPF64[i29 >> 3] = d24 * d47 + d26 * d48 + d28 * d49 + d30 * d50;
 HEAPF64[i37 >> 3] = d32 * d47 + d34 * d48 + d36 * d49 + d38 * d50;
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix11projectQuadERKNS_9FloatQuadEPb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP8[i6] = 0;
 HEAP8[i7] = 0;
 HEAP8[i8] = 0;
 HEAP8[i9] = 0;
 i18 = i3;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i11 + 4 >> 2] = i19;
 __ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb(i10, i2, i11, i6);
 i11 = HEAP32[i10 >> 2] | 0;
 i19 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i3 + 8 | 0;
 i18 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i13 + 4 >> 2] = i18;
 __ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb(i12, i2, i13, i7);
 i13 = HEAP32[i12 >> 2] | 0;
 i18 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i3 + 16 | 0;
 i10 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i15 + 4 >> 2] = i10;
 __ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb(i14, i2, i15, i8);
 i15 = HEAP32[i14 >> 2] | 0;
 i10 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i3 + 24 | 0;
 i3 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i17 + 4 >> 2] = i3;
 __ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb(i16, i2, i17, i9);
 i17 = HEAP32[i16 >> 2] | 0;
 i2 = HEAP32[i16 + 4 >> 2] | 0;
 i16 = HEAP8[i6] | 0;
 if ((i4 | 0) != 0) {
  do {
   if ((i16 & 1) == 0) {
    if ((HEAP8[i7] & 1) != 0) {
     i20 = 1;
     break;
    }
    if ((HEAP8[i8] & 1) != 0) {
     i20 = 1;
     break;
    }
    i20 = HEAP8[i9] & 1;
   } else {
    i20 = 1;
   }
  } while (0);
  HEAP8[i4] = i20;
 }
 do {
  if ((i16 & 1) != 0) {
   if ((HEAP8[i7] & 1) == 0) {
    break;
   }
   if ((HEAP8[i8] & 1) == 0) {
    break;
   }
   if ((HEAP8[i9] & 1) == 0) {
    break;
   }
   _memset(i1 | 0, 0, 32) | 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i9 = i1;
 HEAP32[i9 >> 2] = i11;
 HEAP32[i9 + 4 >> 2] = i19;
 i19 = i1 + 8 | 0;
 HEAP32[i19 >> 2] = i13;
 HEAP32[i19 + 4 >> 2] = i18;
 i18 = i1 + 16 | 0;
 HEAP32[i18 >> 2] = i15;
 HEAP32[i18 + 4 >> 2] = i10;
 i10 = i1 + 24 | 0;
 HEAP32[i10 >> 2] = i17;
 HEAP32[i10 + 4 >> 2] = i2;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore20TransformationMatrix28clampedBoundsOfProjectedQuadERKNS_9FloatQuadE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, i13 = 0, d14 = +0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZNK7WebCore20TransformationMatrix11projectQuadERKNS_9FloatQuadEPb(i6, i2, i3, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i6);
 d7 = +HEAPF32[i5 >> 2];
 d8 = +Math_floor(d7);
 d9 = d8 < +-1073741824 ? +-1073741824 : d8;
 d8 = d9 > +1073741824 ? +1073741824 : d9;
 d9 = +HEAPF32[i5 + 4 >> 2];
 d10 = +Math_floor(d9);
 d11 = d10 < +-1073741824 ? +-1073741824 : d10;
 d10 = d11 > +1073741824 ? +1073741824 : d11;
 d11 = +HEAPF32[i5 + 8 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d7, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647 | 0) == 2139095040) {
  if (((HEAPF32[tempDoublePtr >> 2] = d11, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647 | 0) == 2139095040) {
   d12 = +1073741824;
  } else {
   i13 = 3;
  }
 } else {
  i13 = 3;
 }
 if ((i13 | 0) == 3) {
  d14 = +Math_ceil(d7 + d11);
  d11 = d14 < +-1073741824 ? +-1073741824 : d14;
  d12 = d11 > +1073741824 ? +1073741824 : d11;
 }
 d11 = +HEAPF32[i5 + 12 >> 2];
 if (((HEAPF32[tempDoublePtr >> 2] = d9, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647 | 0) == 2139095040) {
  if (((HEAPF32[tempDoublePtr >> 2] = d11, HEAP32[tempDoublePtr >> 2] | 0) & 2147483647 | 0) == 2139095040) {
   d15 = +1073741824;
  } else {
   i13 = 6;
  }
 } else {
  i13 = 6;
 }
 if ((i13 | 0) == 6) {
  d14 = +Math_ceil(d9 + d11);
  d11 = d14 < +-1073741824 ? +-1073741824 : d14;
  d15 = d11 > +1073741824 ? +1073741824 : d11;
 }
 do {
  if (d8 < +2147483647) {
   if (d8 <= +-2147483648) {
    i16 = -2147483648;
    break;
   }
   i16 = ~~d8;
  } else {
   i16 = 2147483647;
  }
 } while (0);
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i17 = -2147483648;
    break;
   }
   i17 = ~~d10;
  } else {
   i17 = 2147483647;
  }
 } while (0);
 d11 = d12 - d8;
 do {
  if (d11 < +2147483647) {
   if (d11 <= +-2147483648) {
    i18 = -2147483648;
    break;
   }
   i18 = ~~d11;
  } else {
   i18 = 2147483647;
  }
 } while (0);
 d11 = d15 - d10;
 do {
  if (d11 < +2147483647) {
   if (d11 <= +-2147483648) {
    i19 = -2147483648;
    break;
   }
   i19 = ~~d11;
  } else {
   i19 = 2147483647;
  }
 } while (0);
 HEAP32[i1 >> 2] = i16;
 HEAP32[i1 + 4 >> 2] = i17;
 HEAP32[i1 + 8 >> 2] = i18;
 HEAP32[i1 + 12 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20TransformationMatrix7inverseEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, d5 = +0, d6 = +0, d7 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 do {
  if (+HEAPF64[i2 >> 3] == +1) {
   if (+HEAPF64[i2 + 8 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   d5 = +HEAPF64[i2 + 96 >> 3];
   d6 = +HEAPF64[i2 + 104 >> 3];
   do {
    if (d5 == +0 & d6 == +0) {
     if (+HEAPF64[i2 + 112 >> 3] != +0) {
      break;
     }
     HEAPF64[i1 >> 3] = +1;
     _memset(i1 + 8 | 0, 0, 32) | 0;
     HEAPF64[i1 + 40 >> 3] = +1;
     _memset(i1 + 48 | 0, 0, 32) | 0;
     HEAPF64[i1 + 80 >> 3] = +1;
     _memset(i1 + 88 | 0, 0, 32) | 0;
     HEAPF64[i1 + 120 >> 3] = +1;
     STACKTOP = i3;
     return;
    }
   } while (0);
   d7 = +-0 - +HEAPF64[i2 + 112 >> 3];
   HEAPF64[i1 >> 3] = +1;
   _memset(i1 + 8 | 0, 0, 32) | 0;
   HEAPF64[i1 + 40 >> 3] = +1;
   _memset(i1 + 48 | 0, 0, 32) | 0;
   HEAPF64[i1 + 80 >> 3] = +1;
   HEAPF64[i1 + 88 >> 3] = +0;
   HEAPF64[i1 + 96 >> 3] = +-0 - d5;
   HEAPF64[i1 + 104 >> 3] = +-0 - d6;
   HEAPF64[i1 + 112 >> 3] = d7;
   HEAPF64[i1 + 120 >> 3] = +1;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAPF64[i4 >> 3] = +1;
 _memset(i4 + 8 | 0, 0, 32) | 0;
 HEAPF64[i4 + 40 >> 3] = +1;
 _memset(i4 + 48 | 0, 0, 32) | 0;
 HEAPF64[i4 + 80 >> 3] = +1;
 _memset(i4 + 88 | 0, 0, 32) | 0;
 HEAPF64[i4 + 120 >> 3] = +1;
 if (__ZN7WebCoreL7inverseERA4_A4_KdRA4_A4_d(i2 | 0, i4 | 0) | 0) {
  _memcpy(i1 | 0, i4 | 0, 128) | 0;
  STACKTOP = i3;
  return;
 } else {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 32) | 0;
  HEAPF64[i1 + 40 >> 3] = +1;
  _memset(i1 + 48 | 0, 0, 32) | 0;
  HEAPF64[i1 + 80 >> 3] = +1;
  _memset(i1 + 88 | 0, 0, 32) | 0;
  HEAPF64[i1 + 120 >> 3] = +1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20TransformationMatrix8rotate3dEddd(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i6 = i5 | 0;
 i7 = i5 + 128 | 0;
 d8 = d2 * 3.141592653589793 / +180;
 d2 = d3 * 3.141592653589793 / +180;
 d3 = d4 * 3.141592653589793 / +180;
 i9 = i6 | 0;
 i10 = i6 + 8 | 0;
 i11 = i6 + 40 | 0;
 _memset(i10 | 0, 0, 16) | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 80 | 0;
 i14 = i12;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 i14 = i6 + 88 | 0;
 i15 = i6 + 120 | 0;
 d4 = +Math_sin(d3);
 d16 = +Math_cos(d3);
 HEAPF64[i9 >> 3] = d16;
 HEAPF64[i10 >> 3] = d4;
 i17 = i6 + 16 | 0;
 HEAPF64[i17 >> 3] = +0;
 i18 = i6 + 32 | 0;
 HEAPF64[i18 >> 3] = +-0 - d4;
 HEAPF64[i11 >> 3] = d16;
 HEAPF64[i12 >> 3] = +0;
 i19 = i6 + 64 | 0;
 i20 = i6 + 72 | 0;
 _memset(i19 | 0, 0, 16) | 0;
 HEAPF64[i13 >> 3] = +1;
 i21 = i6 + 56 | 0;
 HEAPF64[i21 >> 3] = +0;
 i22 = i6 + 24 | 0;
 HEAPF64[i22 >> 3] = +0;
 _memset(i14 | 0, 0, 32) | 0;
 HEAPF64[i15 >> 3] = +1;
 _memcpy(i7 | 0, i6 | 0, 128) | 0;
 d16 = +Math_sin(d2);
 d4 = +Math_cos(d2);
 HEAPF64[i9 >> 3] = d4;
 HEAPF64[i10 >> 3] = +0;
 HEAPF64[i17 >> 3] = +-0 - d16;
 HEAPF64[i18 >> 3] = +0;
 HEAPF64[i11 >> 3] = +1;
 HEAPF64[i12 >> 3] = +0;
 HEAPF64[i19 >> 3] = d16;
 HEAPF64[i20 >> 3] = +0;
 HEAPF64[i13 >> 3] = d4;
 HEAPF64[i21 >> 3] = +0;
 HEAPF64[i22 >> 3] = +0;
 _memset(i14 | 0, 0, 32) | 0;
 HEAPF64[i15 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i7, i6) | 0;
 d4 = +Math_sin(d8);
 d16 = +Math_cos(d8);
 HEAPF64[i9 >> 3] = +1;
 HEAPF64[i18 >> 3] = +0;
 _memset(i10 | 0, 0, 16) | 0;
 HEAPF64[i11 >> 3] = d16;
 HEAPF64[i12 >> 3] = d4;
 HEAPF64[i19 >> 3] = +0;
 HEAPF64[i20 >> 3] = +-0 - d4;
 HEAPF64[i13 >> 3] = d16;
 HEAPF64[i21 >> 3] = +0;
 HEAPF64[i22 >> 3] = +0;
 _memset(i14 | 0, 0, 32) | 0;
 HEAPF64[i15 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i7, i6) | 0;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i7) | 0;
 STACKTOP = i5;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix16rotateFromVectorEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i5 = i4 | 0;
 i6 = i4 + 128 | 0;
 d7 = +Math_atan2(+d3, +d2) * +180 / 3.141592653589793 * 3.141592653589793 / +180;
 i8 = i5 | 0;
 i9 = i5 + 8 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 80 | 0;
 i13 = i5 + 120 | 0;
 d2 = +Math_sin(d7);
 d3 = +Math_cos(d7);
 HEAPF64[i8 >> 3] = d3;
 HEAPF64[i9 >> 3] = d2;
 i14 = i5 + 16 | 0;
 HEAPF64[i14 >> 3] = +0;
 i15 = i5 + 32 | 0;
 HEAPF64[i15 >> 3] = +-0 - d2;
 HEAPF64[i10 >> 3] = d3;
 HEAPF64[i11 >> 3] = +0;
 i16 = i5 + 64 | 0;
 i17 = i16;
 _memset(i17 | 0, 0, 16) | 0;
 HEAPF64[i12 >> 3] = +1;
 i18 = i5 + 56 | 0;
 HEAPF64[i18 >> 3] = +0;
 i19 = i5 + 24 | 0;
 HEAPF64[i19 >> 3] = +0;
 i20 = i5 + 88 | 0;
 _memset(i20 | 0, 0, 32) | 0;
 HEAPF64[i13 >> 3] = +1;
 _memcpy(i6 | 0, i5 | 0, 128) | 0;
 HEAPF64[i8 >> 3] = +1;
 HEAPF64[i9 >> 3] = +0;
 HEAPF64[i14 >> 3] = +-0;
 HEAPF64[i15 >> 3] = +0;
 HEAPF64[i10 >> 3] = +1;
 HEAPF64[i11 >> 3] = +0;
 _memset(i17 | 0, 0, 16) | 0;
 HEAPF64[i12 >> 3] = +1;
 HEAPF64[i18 >> 3] = +0;
 HEAPF64[i19 >> 3] = +0;
 _memset(i20 | 0, 0, 32) | 0;
 HEAPF64[i13 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i6, i5) | 0;
 HEAPF64[i8 >> 3] = +1;
 HEAPF64[i15 >> 3] = +0;
 _memset(i9 | 0, 0, 16) | 0;
 HEAPF64[i10 >> 3] = +1;
 HEAPF64[i11 >> 3] = +0;
 HEAPF64[i16 >> 3] = +0;
 HEAPF64[i5 + 72 >> 3] = +-0;
 HEAPF64[i12 >> 3] = +1;
 HEAPF64[i18 >> 3] = +0;
 HEAPF64[i19 >> 3] = +0;
 _memset(i20 | 0, 0, 32) | 0;
 HEAPF64[i13 >> 3] = +1;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i6, i5) | 0;
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i6) | 0;
 STACKTOP = i4;
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix12isInvertibleEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, i4 = 0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0;
 d2 = +HEAPF64[i1 >> 3];
 d3 = +HEAPF64[i1 + 8 >> 3];
 do {
  if (d2 == +1 & d3 == +0) {
   if (+HEAPF64[i1 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] == +1) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 d5 = +HEAPF64[i1 + 32 >> 3];
 d6 = +HEAPF64[i1 + 40 >> 3];
 d7 = +HEAPF64[i1 + 48 >> 3];
 d8 = +HEAPF64[i1 + 56 >> 3];
 d9 = +HEAPF64[i1 + 64 >> 3];
 d10 = +HEAPF64[i1 + 72 >> 3];
 d11 = +HEAPF64[i1 + 80 >> 3];
 d12 = +HEAPF64[i1 + 88 >> 3];
 d13 = +HEAPF64[i1 + 96 >> 3];
 d14 = +HEAPF64[i1 + 104 >> 3];
 d15 = +HEAPF64[i1 + 112 >> 3];
 d16 = +HEAPF64[i1 + 120 >> 3];
 d17 = d11 * d16 - d12 * d15;
 d18 = d10 * d16 - d12 * d14;
 d19 = d10 * d15 - d11 * d14;
 d20 = d9 * d16 - d12 * d13;
 d12 = d9 * d15 - d11 * d13;
 d11 = d9 * d14 - d10 * d13;
 i4 = +Math_abs(+(+HEAPF64[i1 + 16 >> 3] * (d8 * d11 + (d5 * d18 - d6 * d20)) + (d2 * (d8 * d19 + (d6 * d17 - d7 * d18)) - d3 * (d8 * d12 + (d5 * d17 - d7 * d20))) - +HEAPF64[i1 + 24 >> 3] * (d7 * d11 + (d5 * d19 - d6 * d12)))) >= +1e-8;
 return i4 | 0;
}
function __ZNK7WebCore20TransformationMatrix8mapPointERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 d4 = +HEAPF64[i2 >> 3];
 d5 = +HEAPF64[i2 + 8 >> 3];
 do {
  if (d4 == +1 & d5 == +0) {
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   d6 = +HEAPF32[i3 + 4 >> 2] + +HEAPF64[i2 + 104 >> 3];
   HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + +HEAPF64[i2 + 96 >> 3];
   HEAPF32[i1 + 4 >> 2] = d6;
   return;
  }
 } while (0);
 d6 = +HEAPF32[i3 >> 2];
 d7 = +HEAPF32[i3 + 4 >> 2];
 d8 = +HEAPF64[i2 + 96 >> 3] + d6 * d4 + d7 * +HEAPF64[i2 + 32 >> 3];
 d4 = +HEAPF64[i2 + 104 >> 3] + d6 * d5 + d7 * +HEAPF64[i2 + 40 >> 3];
 d5 = +HEAPF64[i2 + 120 >> 3] + d6 * +HEAPF64[i2 + 24 >> 3] + d7 * +HEAPF64[i2 + 56 >> 3];
 if (d5 != +1 & d5 != +0) {
  d9 = d4 / d5;
  d10 = d8 / d5;
 } else {
  d9 = d4;
  d10 = d8;
 }
 HEAPF32[i1 >> 2] = d10;
 HEAPF32[i1 + 4 >> 2] = d9;
 return;
}
function __ZNK7WebCore20TransformationMatrix16internalMapPointERKNS_12FloatPoint3DE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, i17 = 0, i18 = 0, i19 = 0;
 d4 = +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i3 + 4 >> 2];
 d6 = +HEAPF32[i3 + 8 >> 2];
 d7 = +HEAPF64[i2 + 96 >> 3] + d4 * +HEAPF64[i2 >> 3] + d5 * +HEAPF64[i2 + 32 >> 3] + d6 * +HEAPF64[i2 + 64 >> 3];
 d8 = +HEAPF64[i2 + 104 >> 3] + d4 * +HEAPF64[i2 + 8 >> 3] + d5 * +HEAPF64[i2 + 40 >> 3] + d6 * +HEAPF64[i2 + 72 >> 3];
 d9 = +HEAPF64[i2 + 112 >> 3] + d4 * +HEAPF64[i2 + 16 >> 3] + d5 * +HEAPF64[i2 + 48 >> 3] + d6 * +HEAPF64[i2 + 80 >> 3];
 d10 = +HEAPF64[i2 + 120 >> 3] + d4 * +HEAPF64[i2 + 24 >> 3] + d5 * +HEAPF64[i2 + 56 >> 3] + d6 * +HEAPF64[i2 + 88 >> 3];
 if (!(d10 != +1 & d10 != +0)) {
  d11 = d9;
  d12 = d8;
  d13 = d7;
  d14 = d13;
  d15 = d12;
  d16 = d11;
  i17 = i1 | 0;
  HEAPF32[i17 >> 2] = d14;
  i18 = i1 + 4 | 0;
  HEAPF32[i18 >> 2] = d15;
  i19 = i1 + 8 | 0;
  HEAPF32[i19 >> 2] = d16;
  return;
 }
 d11 = d9 / d10;
 d12 = d8 / d10;
 d13 = d7 / d10;
 d14 = d13;
 d15 = d12;
 d16 = d11;
 i17 = i1 | 0;
 HEAPF32[i17 >> 2] = d14;
 i18 = i1 + 4 | 0;
 HEAPF32[i18 >> 2] = d15;
 i19 = i1 + 8 | 0;
 HEAPF32[i19 >> 2] = d16;
 return;
}
function __ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i5 = (i4 | 0) != 0;
 if (i5) {
  HEAP8[i4] = 0;
 }
 d6 = +HEAPF64[i2 + 80 >> 3];
 if (d6 == +0) {
  HEAPF32[i1 >> 2] = +0;
  HEAPF32[i1 + 4 >> 2] = +0;
  return;
 }
 d7 = +HEAPF32[i3 >> 2];
 d8 = +HEAPF32[i3 + 4 >> 2];
 d9 = (+-0 - (+HEAPF64[i2 + 112 >> 3] + (d7 * +HEAPF64[i2 + 16 >> 3] + d8 * +HEAPF64[i2 + 48 >> 3]))) / d6;
 d6 = +HEAPF64[i2 + 96 >> 3] + (d7 * +HEAPF64[i2 >> 3] + d8 * +HEAPF64[i2 + 32 >> 3] + d9 * +HEAPF64[i2 + 64 >> 3]);
 d10 = +HEAPF64[i2 + 104 >> 3] + (d7 * +HEAPF64[i2 + 8 >> 3] + d8 * +HEAPF64[i2 + 40 >> 3] + d9 * +HEAPF64[i2 + 72 >> 3]);
 d11 = +HEAPF64[i2 + 120 >> 3] + (d7 * +HEAPF64[i2 + 24 >> 3] + d8 * +HEAPF64[i2 + 56 >> 3] + d9 * +HEAPF64[i2 + 88 >> 3]);
 do {
  if (d11 > +0) {
   if (d11 == +1) {
    d12 = d6;
    d13 = d10;
    break;
   }
   d12 = d6 / d11;
   d13 = d10 / d11;
  } else {
   d9 = +_copysign(+(+1562500), +d6);
   d8 = +_copysign(+(+1562500), +d10);
   if (!i5) {
    d12 = d9;
    d13 = d8;
    break;
   }
   HEAP8[i4] = 1;
   d12 = d9;
   d13 = d8;
  }
 } while (0);
 HEAPF32[i1 >> 2] = d12;
 HEAPF32[i1 + 4 >> 2] = d13;
 return;
}
function __ZN7WebCore20TransformationMatrix16translateRight3dEddd(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0;
 if (d2 != +0) {
  i5 = i1 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 24 >> 3] * d2;
  i5 = i1 + 32 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 56 >> 3] * d2;
  i5 = i1 + 64 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 88 >> 3] * d2;
  i5 = i1 + 96 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 120 >> 3] * d2;
 }
 if (d3 != +0) {
  i5 = i1 + 8 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 24 >> 3] * d3;
  i5 = i1 + 40 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 56 >> 3] * d3;
  i5 = i1 + 72 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 88 >> 3] * d3;
  i5 = i1 + 104 | 0;
  HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 120 >> 3] * d3;
 }
 if (d4 == +0) {
  return i1 | 0;
 }
 i5 = i1 + 16 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 24 >> 3] * d4;
 i5 = i1 + 48 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 56 >> 3] * d4;
 i5 = i1 + 80 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 88 >> 3] * d4;
 i5 = i1 + 112 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + +HEAPF64[i1 + 120 >> 3] * d4;
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix17isBackFaceVisibleEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, i21 = 0;
 d2 = +HEAPF64[i1 >> 3];
 d3 = +HEAPF64[i1 + 8 >> 3];
 d4 = +HEAPF64[i1 + 24 >> 3];
 d5 = +HEAPF64[i1 + 32 >> 3];
 d6 = +HEAPF64[i1 + 40 >> 3];
 d7 = +HEAPF64[i1 + 48 >> 3];
 d8 = +HEAPF64[i1 + 56 >> 3];
 d9 = +HEAPF64[i1 + 64 >> 3];
 d10 = +HEAPF64[i1 + 72 >> 3];
 d11 = +HEAPF64[i1 + 80 >> 3];
 d12 = +HEAPF64[i1 + 88 >> 3];
 d13 = +HEAPF64[i1 + 96 >> 3];
 d14 = +HEAPF64[i1 + 104 >> 3];
 d15 = +HEAPF64[i1 + 112 >> 3];
 d16 = +HEAPF64[i1 + 120 >> 3];
 d17 = d11 * d16 - d12 * d15;
 d18 = d10 * d16 - d12 * d14;
 d19 = d10 * d15 - d11 * d14;
 d20 = d9 * d16 - d12 * d13;
 d12 = d9 * d15 - d11 * d13;
 d11 = d9 * d14 - d10 * d13;
 d10 = +HEAPF64[i1 + 16 >> 3] * (d8 * d11 + (d5 * d18 - d6 * d20)) + (d2 * (d8 * d19 + (d6 * d17 - d7 * d18)) - d3 * (d8 * d12 + (d5 * d17 - d7 * d20))) - d4 * (d7 * d11 + (d5 * d19 - d6 * d12));
 if (+Math_abs(+d10) < +1e-8) {
  i21 = 0;
  return i21 | 0;
 }
 i21 = (d13 * (d3 * d8 - d4 * d6) + (d2 * (d6 * d16 - d8 * d14) - d5 * (d3 * d16 - d4 * d14))) / d10 < +0;
 return i21 | 0;
}
function __ZNK7WebCore20TransformationMatrix20isIntegerTranslationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0;
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
   if (+HEAPF64[i1 + 24 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 32 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 40 >> 3] != +1) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 48 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 56 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 64 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 72 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 80 >> 3] != +1) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 88 >> 3] != +0) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +1) {
    i2 = 0;
    break;
   }
   if (+HEAPF64[i1 + 112 >> 3] != +0) {
    i2 = 0;
    break;
   }
   d3 = +HEAPF64[i1 + 96 >> 3];
   if (+(~~d3 | 0) != d3) {
    i2 = 0;
    break;
   }
   d3 = +HEAPF64[i1 + 104 >> 3];
   if (+(~~d3 | 0) != d3) {
    i2 = 0;
    break;
   }
   i2 = 1;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
}
function __ZNK7WebCore20TransformationMatrix8mapPointERKNS_12FloatPoint3DE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0;
 do {
  if (+HEAPF64[i2 >> 3] == +1) {
   if (+HEAPF64[i2 + 8 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 16 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 24 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 32 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 40 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 48 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 56 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 64 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 72 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 80 >> 3] != +1) {
    break;
   }
   if (+HEAPF64[i2 + 88 >> 3] != +0) {
    break;
   }
   if (+HEAPF64[i2 + 120 >> 3] != +1) {
    break;
   }
   d4 = +HEAPF32[i3 + 4 >> 2] + +HEAPF64[i2 + 104 >> 3];
   d5 = +HEAPF32[i3 + 8 >> 2] + +HEAPF64[i2 + 112 >> 3];
   HEAPF32[i1 >> 2] = +HEAPF32[i3 >> 2] + +HEAPF64[i2 + 96 >> 3];
   HEAPF32[i1 + 4 >> 2] = d4;
   HEAPF32[i1 + 8 >> 2] = d5;
   return;
  }
 } while (0);
 __ZNK7WebCore20TransformationMatrix16internalMapPointERKNS_12FloatPoint3DE(i1, i2, i3);
 return;
}
function __ZNK7WebCore20TransformationMatrix13multVecMatrixEdddRdS1_S1_(i1, d2, d3, d4, i5, i6, i7) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var d8 = +0;
 HEAPF64[i5 >> 3] = +HEAPF64[i1 + 96 >> 3] + +HEAPF64[i1 >> 3] * d2 + +HEAPF64[i1 + 32 >> 3] * d3 + +HEAPF64[i1 + 64 >> 3] * d4;
 HEAPF64[i6 >> 3] = +HEAPF64[i1 + 104 >> 3] + +HEAPF64[i1 + 8 >> 3] * d2 + +HEAPF64[i1 + 40 >> 3] * d3 + +HEAPF64[i1 + 72 >> 3] * d4;
 HEAPF64[i7 >> 3] = +HEAPF64[i1 + 112 >> 3] + +HEAPF64[i1 + 16 >> 3] * d2 + +HEAPF64[i1 + 48 >> 3] * d3 + +HEAPF64[i1 + 80 >> 3] * d4;
 d8 = +HEAPF64[i1 + 120 >> 3] + +HEAPF64[i1 + 24 >> 3] * d2 + +HEAPF64[i1 + 56 >> 3] * d3 + +HEAPF64[i1 + 88 >> 3] * d4;
 if (!(d8 != +1 & d8 != +0)) {
  return;
 }
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] / d8;
 HEAPF64[i6 >> 3] = +HEAPF64[i6 >> 3] / d8;
 HEAPF64[i7 >> 3] = +HEAPF64[i7 >> 3] / d8;
 return;
}
function __ZN7WebCore20TransformationMatrix14translateRightEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 if (d2 != +0) {
  i4 = i1 | 0;
  HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 24 >> 3] * d2;
  i4 = i1 + 32 | 0;
  HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 56 >> 3] * d2;
  i4 = i1 + 64 | 0;
  HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 88 >> 3] * d2;
  i4 = i1 + 96 | 0;
  HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 120 >> 3] * d2;
 }
 if (d3 == +0) {
  return i1 | 0;
 }
 i4 = i1 + 8 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 24 >> 3] * d3;
 i4 = i1 + 40 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 56 >> 3] * d3;
 i4 = i1 + 72 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 88 >> 3] * d3;
 i4 = i1 + 104 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + +HEAPF64[i1 + 120 >> 3] * d3;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix7scale3dEddd(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0;
 i5 = i1 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d2;
 i5 = i1 + 8 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d2;
 i5 = i1 + 16 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d2;
 i5 = i1 + 24 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d2;
 i5 = i1 + 32 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d3;
 i5 = i1 + 40 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d3;
 i5 = i1 + 48 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d3;
 i5 = i1 + 56 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d3;
 i5 = i1 + 64 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d4;
 i5 = i1 + 72 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d4;
 i5 = i1 + 80 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d4;
 i5 = i1 + 88 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] * d4;
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix23toColumnMajorFloatArrayERA16_f(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF32[i2 >> 2] = +HEAPF64[i1 >> 3];
 HEAPF32[i2 + 4 >> 2] = +HEAPF64[i1 + 8 >> 3];
 HEAPF32[i2 + 8 >> 2] = +HEAPF64[i1 + 16 >> 3];
 HEAPF32[i2 + 12 >> 2] = +HEAPF64[i1 + 24 >> 3];
 HEAPF32[i2 + 16 >> 2] = +HEAPF64[i1 + 32 >> 3];
 HEAPF32[i2 + 20 >> 2] = +HEAPF64[i1 + 40 >> 3];
 HEAPF32[i2 + 24 >> 2] = +HEAPF64[i1 + 48 >> 3];
 HEAPF32[i2 + 28 >> 2] = +HEAPF64[i1 + 56 >> 3];
 HEAPF32[i2 + 32 >> 2] = +HEAPF64[i1 + 64 >> 3];
 HEAPF32[i2 + 36 >> 2] = +HEAPF64[i1 + 72 >> 3];
 HEAPF32[i2 + 40 >> 2] = +HEAPF64[i1 + 80 >> 3];
 HEAPF32[i2 + 44 >> 2] = +HEAPF64[i1 + 88 >> 3];
 HEAPF32[i2 + 48 >> 2] = +HEAPF64[i1 + 96 >> 3];
 HEAPF32[i2 + 52 >> 2] = +HEAPF64[i1 + 104 >> 3];
 HEAPF32[i2 + 56 >> 2] = +HEAPF64[i1 + 112 >> 3];
 HEAPF32[i2 + 60 >> 2] = +HEAPF64[i1 + 120 >> 3];
 return;
}
function __ZNK7WebCore20TransformationMatrix13to2dTransformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 d3 = +HEAPF64[i2 + 8 >> 3];
 d4 = +HEAPF64[i2 + 24 >> 3];
 d5 = +HEAPF64[i2 + 32 >> 3];
 d6 = +HEAPF64[i2 + 40 >> 3];
 d7 = +HEAPF64[i2 + 56 >> 3];
 d8 = +HEAPF64[i2 + 96 >> 3];
 d9 = +HEAPF64[i2 + 104 >> 3];
 d10 = +HEAPF64[i2 + 120 >> 3];
 HEAPF64[i1 >> 3] = +HEAPF64[i2 >> 3];
 HEAPF64[i1 + 8 >> 3] = d3;
 HEAPF64[i1 + 16 >> 3] = +0;
 HEAPF64[i1 + 24 >> 3] = d4;
 HEAPF64[i1 + 32 >> 3] = d5;
 HEAPF64[i1 + 40 >> 3] = d6;
 HEAPF64[i1 + 48 >> 3] = +0;
 HEAPF64[i1 + 56 >> 3] = d7;
 _memset(i1 + 64 | 0, 0, 16) | 0;
 HEAPF64[i1 + 80 >> 3] = +1;
 HEAPF64[i1 + 88 >> 3] = +0;
 HEAPF64[i1 + 96 >> 3] = d8;
 HEAPF64[i1 + 104 >> 3] = d9;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAPF64[i1 + 120 >> 3] = d10;
 return;
}
function __ZN7WebCore20TransformationMatrix11translate3dEddd(i1, d2, d3, d4) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 d4 = +d4;
 var i5 = 0;
 i5 = i1 + 96 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + (+HEAPF64[i1 >> 3] * d2 + +HEAPF64[i1 + 32 >> 3] * d3 + +HEAPF64[i1 + 64 >> 3] * d4);
 i5 = i1 + 104 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + (+HEAPF64[i1 + 8 >> 3] * d2 + +HEAPF64[i1 + 40 >> 3] * d3 + +HEAPF64[i1 + 72 >> 3] * d4);
 i5 = i1 + 112 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + (+HEAPF64[i1 + 16 >> 3] * d2 + +HEAPF64[i1 + 48 >> 3] * d3 + +HEAPF64[i1 + 80 >> 3] * d4);
 i5 = i1 + 120 | 0;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] + (+HEAPF64[i1 + 24 >> 3] * d2 + +HEAPF64[i1 + 56 >> 3] * d3 + +HEAPF64[i1 + 88 >> 3] * d4);
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, d9 = +0, d10 = +0, d11 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 d8 = +(HEAP32[i3 + 8 >> 2] | 0);
 d9 = +(HEAP32[i3 + 12 >> 2] | 0);
 d10 = +(+(HEAP32[i3 >> 2] | 0));
 d11 = +(+(HEAP32[i3 + 4 >> 2] | 0));
 HEAPF32[i7 >> 2] = d10;
 HEAPF32[i7 + 4 >> 2] = d11;
 i7 = i6 + 8 | 0;
 d11 = +d8;
 d8 = +d9;
 HEAPF32[i7 >> 2] = d11;
 HEAPF32[i7 + 4 >> 2] = d8;
 __ZNK7WebCore20TransformationMatrix7mapRectERKNS_9FloatRectE(i5, i2, i6);
 __ZN7WebCore19enclosingLayoutRectERKNS_9FloatRectE(i1, i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20TransformationMatrixC2ERKNS_15AffineTransformE(i1, i2) {
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
function __ZN7WebCore20TransformationMatrixC1ERKNS_15AffineTransformE(i1, i2) {
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
function __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 HEAPF64[i4 >> 3] = +1;
 _memset(i4 + 8 | 0, 0, 32) | 0;
 HEAPF64[i4 + 40 >> 3] = +1;
 _memset(i4 + 48 | 0, 0, 32) | 0;
 HEAPF64[i4 + 80 >> 3] = +1;
 i5 = i4 + 88 | 0;
 _memset(i5 | 0, 0, 32) | 0;
 HEAPF64[i4 + 120 >> 3] = +1;
 if (d2 == +0) {
  i6 = __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i4) | 0;
  STACKTOP = i3;
  return i1 | 0;
 }
 HEAPF64[i5 >> 3] = +-1 / d2;
 i6 = __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i4) | 0;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix10rectToRectERKNS_9FloatRectES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0;
 d4 = +HEAPF32[i3 + 12 >> 2] / +HEAPF32[i2 + 12 >> 2];
 d5 = +HEAPF32[i3 >> 2] - +HEAPF32[i2 >> 2];
 d6 = +HEAPF32[i3 + 4 >> 2] - +HEAPF32[i2 + 4 >> 2];
 HEAPF64[i1 >> 3] = +HEAPF32[i3 + 8 >> 2] / +HEAPF32[i2 + 8 >> 2];
 _memset(i1 + 8 | 0, 0, 32) | 0;
 HEAPF64[i1 + 40 >> 3] = d4;
 _memset(i1 + 48 | 0, 0, 32) | 0;
 HEAPF64[i1 + 80 >> 3] = +1;
 HEAPF64[i1 + 88 >> 3] = +0;
 HEAPF64[i1 + 96 >> 3] = d5;
 HEAPF64[i1 + 104 >> 3] = d6;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAPF64[i1 + 120 >> 3] = +1;
 return;
}
function __ZN7WebCore20TransformationMatrix4skewEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 HEAPF64[i5 >> 3] = +1;
 i6 = i5 + 8 | 0;
 _memset(i6 | 0, 0, 24) | 0;
 HEAPF64[i5 + 40 >> 3] = +1;
 _memset(i5 + 48 | 0, 0, 32) | 0;
 HEAPF64[i5 + 80 >> 3] = +1;
 _memset(i5 + 88 | 0, 0, 32) | 0;
 HEAPF64[i5 + 120 >> 3] = +1;
 HEAPF64[i6 >> 3] = +Math_tan(d3 * 3.141592653589793 / +180);
 HEAPF64[i5 + 32 >> 3] = +Math_tan(d2 * 3.141592653589793 / +180);
 __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i1, i5) | 0;
 STACKTOP = i4;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix15scaleNonUniformEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = i1 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 8 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 16 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 24 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d2;
 i4 = i1 + 32 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 i4 = i1 + 40 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 i4 = i1 + 48 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 i4 = i1 + 56 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] * d3;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix5scaleEd(i1, d2) {
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
 i3 = i1 + 32 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 40 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 48 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 i3 = i1 + 56 | 0;
 HEAPF64[i3 >> 3] = +HEAPF64[i3 >> 3] * d2;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix9translateEdd(i1, d2, d3) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 var i4 = 0;
 i4 = i1 + 96 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + (+HEAPF64[i1 >> 3] * d2 + +HEAPF64[i1 + 32 >> 3] * d3);
 i4 = i1 + 104 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + (+HEAPF64[i1 + 8 >> 3] * d2 + +HEAPF64[i1 + 40 >> 3] * d3);
 i4 = i1 + 112 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + (+HEAPF64[i1 + 16 >> 3] * d2 + +HEAPF64[i1 + 48 >> 3] * d3);
 i4 = i1 + 120 | 0;
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] + (+HEAPF64[i1 + 24 >> 3] * d2 + +HEAPF64[i1 + 56 >> 3] * d3);
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix13multVecMatrixEddRdS1_(i1, d2, d3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0;
 HEAPF64[i4 >> 3] = +HEAPF64[i1 + 96 >> 3] + +HEAPF64[i1 >> 3] * d2 + +HEAPF64[i1 + 32 >> 3] * d3;
 HEAPF64[i5 >> 3] = +HEAPF64[i1 + 104 >> 3] + +HEAPF64[i1 + 8 >> 3] * d2 + +HEAPF64[i1 + 40 >> 3] * d3;
 d6 = +HEAPF64[i1 + 120 >> 3] + +HEAPF64[i1 + 24 >> 3] * d2 + +HEAPF64[i1 + 56 >> 3] * d3;
 if (!(d6 != +1 & d6 != +0)) {
  return;
 }
 HEAPF64[i4 >> 3] = +HEAPF64[i4 >> 3] / d6;
 HEAPF64[i5 >> 3] = +HEAPF64[i5 >> 3] / d6;
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
function __ZNK7WebCore20TransformationMatrix7mapRectERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i6, i3);
 __ZNK7WebCore20TransformationMatrix7mapRectERKNS_9FloatRectE(i5, i2, i6);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i1, i5);
 STACKTOP = i4;
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
function __ZN7WebCore20TransformationMatrix5flipYEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 40 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 48 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 56 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 return i1 | 0;
}
function __ZN7WebCore20TransformationMatrix5flipXEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 8 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 16 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 i2 = i1 + 24 | 0;
 HEAPF64[i2 >> 3] = +HEAPF64[i2 >> 3] * +-1;
 return i1 | 0;
}
function __ZNK7WebCore20TransformationMatrix17toAffineTransformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore15AffineTransformC1Edddddd(i1, +HEAPF64[i2 >> 3], +HEAPF64[i2 + 8 >> 3], +HEAPF64[i2 + 32 >> 3], +HEAPF64[i2 + 40 >> 3], +HEAPF64[i2 + 96 >> 3], +HEAPF64[i2 + 104 >> 3]);
 return;
}
function __ZN7WebCore20TransformationMatrix10makeAffineEv(i1) {
 i1 = i1 | 0;
 _memset(i1 + 16 | 0, 0, 16) | 0;
 _memset(i1 + 48 | 0, 0, 32) | 0;
 HEAPF64[i1 + 80 >> 3] = +1;
 HEAPF64[i1 + 88 >> 3] = +0;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAPF64[i1 + 120 >> 3] = +1;
 return;
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
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore20TransformationMatrixC2ERKNS_15AffineTransformE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_fabs": _fabs, "_floorf": _floorf, "_llvm_lifetime_start": _llvm_lifetime_start, "___setErrNo": ___setErrNo, "_acos": _acos, "_copysign": _copysign, "_cos": _cos, "_sqrt": _sqrt, "_sin": _sin, "_atan2": _atan2, "_malloc": _malloc, "_free": _free, "_fflush": _fflush, "_tan": _tan, "__reallyNegative": __reallyNegative, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore20TransformationMatrix5flipXEv","__ZN7WebCore20TransformationMatrix5scaleEd","__ZN7WebCore20TransformationMatrix10rectToRectERKNS_9FloatRectES3_","__ZN7WebCore20TransformationMatrix9translateEdd","__ZNK7WebCore20TransformationMatrix7mapRectERKNS_9FloatRectE","__ZNK7WebCore20TransformationMatrix23toColumnMajorFloatArrayERA16_f","__ZNK7WebCore20TransformationMatrix12isInvertibleEv","__ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE","__ZN7WebCore20TransformationMatrix6blend2ERKS0_d","__ZN7WebCore20TransformationMatrix10recompose4ERKNS0_15Decomposed4TypeE","__ZNK7WebCore20TransformationMatrix8mapPointERKNS_10FloatPointE","__ZN7WebCore20TransformationMatrix5blendERKS0_d","__ZN7WebCore20TransformationMatrix5flipYEv","__ZN7WebCore20TransformationMatrix14translateRightEdd","__ZN7WebCoreL7inverseERA4_A4_KdRA4_A4_d","__ZNK7WebCore20TransformationMatrix10decompose4ERNS0_15Decomposed4TypeE","__ZNK7WebCore20TransformationMatrix10decompose2ERNS0_15Decomposed2TypeE","__ZN7WebCore20TransformationMatrixC2ERKNS_15AffineTransformE","__ZN7WebCore20TransformationMatrix16translateRight3dEddd","__ZNK7WebCore20TransformationMatrix12projectPointERKNS_10FloatPointEPb","__ZN7WebCore20TransformationMatrix11translate3dEddd","__ZNK7WebCore20TransformationMatrix7mapQuadERKNS_9FloatQuadE","__ZN7WebCore20TransformationMatrix4skewEdd","__ZN7WebCore20TransformationMatrix10recompose2ERKNS0_15Decomposed2TypeE","__ZN7WebCore20TransformationMatrix8multiplyERKS0_","__ZNK7WebCore20TransformationMatrix13multVecMatrixEddRdS1_","__ZN7WebCore20TransformationMatrix7scale3dEddd","__ZN7WebCore20TransformationMatrix16rotateFromVectorEdd","__ZNK7WebCore20TransformationMatrix13to2dTransformEv","__ZN7WebCore20TransformationMatrix6blend4ERKS0_d","__ZN7WebCore20TransformationMatrix16applyPerspectiveEd","__ZNK7WebCore20TransformationMatrix13multVecMatrixEdddRdS1_S1_","__ZNK7WebCore20TransformationMatrix7inverseEv","__ZNK7WebCore20TransformationMatrix17isBackFaceVisibleEv","__ZN7WebCore20TransformationMatrix10makeAffineEv","__ZN7WebCore20TransformationMatrix15scaleNonUniformEdd","__ZN7WebCore20TransformationMatrix8rotate3dEdddd","__ZNK7WebCore20TransformationMatrix28clampedBoundsOfProjectedQuadERKNS_9FloatQuadE","_memset","__ZNK7WebCore20TransformationMatrix8mapPointERKNS_12FloatPoint3DE","_memcpy","__ZNK7WebCore20TransformationMatrix16internalMapPointERKNS_12FloatPoint3DE","__ZNK7WebCore20TransformationMatrix17toAffineTransformEv","__ZNK7WebCore20TransformationMatrix11projectQuadERKNS_9FloatQuadEPb","__ZNK7WebCore20TransformationMatrix20isIntegerTranslationEv","__ZNK7WebCore20TransformationMatrix7mapRectERKNS_7IntRectE","__ZN7WebCore20TransformationMatrix8rotate3dEddd"]

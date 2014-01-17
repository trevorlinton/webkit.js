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
var __ZN7WebCore18PathTraversalStateC1ENS0_19PathTraversalActionE;
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
  var _cosf=env._cosf;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _sqrtf=env._sqrtf;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _sinf=env._sinf;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18PathTraversalState13cubicBezierToERKNS_10FloatPointES3_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, d18 = +0, d19 = +0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0, d51 = +0, i52 = 0, i53 = 0, d54 = +0, d55 = +0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, d60 = +0, d61 = +0, i62 = 0, i63 = 0, i64 = 0, d65 = +0, d66 = +0, d67 = +0, d68 = +0, d69 = +0, i70 = 0, d71 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i1 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i11 = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i3;
 i3 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 i14 = i4;
 i4 = HEAP32[i14 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 d16 = (HEAP32[tempDoublePtr >> 2] = i9, +HEAPF32[tempDoublePtr >> 2]);
 i17 = i10;
 d18 = (HEAP32[tempDoublePtr >> 2] = i17, +HEAPF32[tempDoublePtr >> 2]);
 d19 = (HEAP32[tempDoublePtr >> 2] = i2, +HEAPF32[tempDoublePtr >> 2]);
 i20 = i12;
 d21 = (HEAP32[tempDoublePtr >> 2] = i20, +HEAPF32[tempDoublePtr >> 2]);
 d22 = (HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]);
 i23 = i13;
 d24 = (HEAP32[tempDoublePtr >> 2] = i23, +HEAPF32[tempDoublePtr >> 2]);
 d25 = (HEAP32[tempDoublePtr >> 2] = i4, +HEAPF32[tempDoublePtr >> 2]);
 i26 = i15;
 d27 = (HEAP32[tempDoublePtr >> 2] = i26, +HEAPF32[tempDoublePtr >> 2]);
 i28 = i7;
 i29 = i7 | 0;
 i30 = i7;
 i31 = i6 | 0;
 HEAP32[i31 >> 2] = 0;
 i32 = i6 + 4 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = i6 + 8 | 0;
 HEAP32[i33 >> 2] = 0;
 __ZN3WTF6VectorIN7WebCore11CubicBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, 1);
 i34 = HEAP32[i31 >> 2] | 0;
 i35 = HEAP32[i33 >> 2] | 0;
 i36 = i34 + (i35 << 5) | 0;
 HEAP32[i36 >> 2] = i9 & -1;
 HEAP32[i36 + 4 >> 2] = i17 | i10 & 0;
 i10 = i34 + (i35 << 5) + 8 | 0;
 HEAP32[i10 >> 2] = i2 & -1;
 HEAP32[i10 + 4 >> 2] = i20 | i12 & 0;
 i12 = i34 + (i35 << 5) + 16 | 0;
 HEAP32[i12 >> 2] = i3 & -1;
 HEAP32[i12 + 4 >> 2] = i23 | i13 & 0;
 i13 = i34 + (i35 << 5) + 24 | 0;
 HEAP32[i13 >> 2] = i4 & -1;
 HEAP32[i13 + 4 >> 2] = i26 | i15 & 0;
 i15 = i35 + 1 | 0;
 HEAP32[i33 >> 2] = i15;
 i35 = i7 + 16 | 0;
 i26 = i7 + 8 | 0;
 i13 = i7 + 24 | 0;
 i4 = i7;
 i7 = i1 | 0;
 i23 = i1 + 52 | 0;
 i12 = i1 + 40 | 0;
 i3 = i1 + 48 | 0;
 d37 = +0;
 i20 = i15;
 i15 = i34;
 d38 = d25;
 d25 = d27;
 d27 = d22;
 d22 = d24;
 d24 = d19;
 d19 = d21;
 d21 = d16;
 d16 = d18;
 L1 : while (1) {
  d18 = d24 - d21;
  d39 = d19 - d16;
  d40 = d27 - d24;
  d41 = d22 - d19;
  d42 = d38 - d27;
  d43 = d25 - d22;
  d44 = +Math_sqrt(d39 * d39 + d18 * d18) + +Math_sqrt(d41 * d41 + d40 * d40) + +Math_sqrt(d43 * d43 + d42 * d42);
  d42 = d38 - d21;
  d43 = d25 - d16;
  do {
   if (d44 - +Math_sqrt(d43 * d43 + d42 * d42) > +9999999747378752e-21 & i20 >>> 0 < 21 >>> 0) {
    d40 = (d24 + d27) * +.5;
    d41 = (d19 + d22) * +.5;
    d18 = (d21 + d24) * +.5;
    d39 = (d16 + d19) * +.5;
    d45 = (d18 + d40) * +.5;
    d46 = (d39 + d41) * +.5;
    d47 = (d27 + d38) * +.5;
    d48 = (d22 + d25) * +.5;
    d49 = +d47;
    d50 = +d48;
    HEAPF32[i35 >> 2] = d49;
    HEAPF32[i35 + 4 >> 2] = d50;
    d50 = (d40 + d47) * +.5;
    d47 = (d41 + d48) * +.5;
    d48 = +d50;
    d41 = +d47;
    HEAPF32[i26 >> 2] = d48;
    HEAPF32[i26 + 4 >> 2] = d41;
    d41 = +d38;
    d48 = +d25;
    HEAPF32[i13 >> 2] = d41;
    HEAPF32[i13 + 4 >> 2] = d48;
    d48 = (d45 + d50) * +.5;
    d50 = (d46 + d47) * +.5;
    d47 = +d48;
    d41 = +d50;
    HEAPF32[i29 >> 2] = d47;
    HEAPF32[i29 + 4 >> 2] = d41;
    if ((i20 | 0) != (HEAP32[i32 >> 2] | 0)) {
     _memcpy(i15 + (i20 << 5) | 0, i28 | 0, 32) | 0;
     i34 = i20 + 1 | 0;
     HEAP32[i33 >> 2] = i34;
     d51 = d37;
     i52 = i34;
     i53 = i15;
     d54 = d48;
     d55 = d50;
     d56 = d45;
     d57 = d46;
     d58 = d18;
     d59 = d39;
     d60 = d21;
     d61 = d16;
     break;
    }
    i34 = i20 + 1 | 0;
    do {
     if (i15 >>> 0 > i30 >>> 0) {
      i62 = 7;
     } else {
      if ((i15 + (i20 << 5) | 0) >>> 0 <= i30 >>> 0) {
       i62 = 7;
       break;
      }
      __ZN3WTF6VectorIN7WebCore11CubicBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i34);
      i10 = HEAP32[i31 >> 2] | 0;
      i63 = i10 + (i4 - i15 >> 5 << 5) | 0;
      i64 = i10;
     }
    } while (0);
    if ((i62 | 0) == 7) {
     i62 = 0;
     __ZN3WTF6VectorIN7WebCore11CubicBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i6, i34);
     i63 = i30;
     i64 = HEAP32[i31 >> 2] | 0;
    }
    i10 = HEAP32[i33 >> 2] | 0;
    _memcpy(i64 + (i10 << 5) | 0, i63 | 0, 32) | 0;
    i2 = i10 + 1 | 0;
    HEAP32[i33 >> 2] = i2;
    d51 = d37;
    i52 = i2;
    i53 = i64;
    d54 = d48;
    d55 = d50;
    d56 = d45;
    d57 = d46;
    d58 = d18;
    d59 = d39;
    d60 = d21;
    d61 = d16;
   } else {
    d65 = d37 + d44;
    i2 = HEAP32[i7 >> 2] | 0;
    if ((i2 | 0) == 1 | (i2 | 0) == 3) {
     d41 = +d21;
     d47 = +d16;
     HEAPF32[i23 >> 2] = d41;
     HEAPF32[i23 + 4 >> 2] = d47;
     d47 = +d38;
     d41 = +d25;
     HEAPF32[i8 >> 2] = d47;
     HEAPF32[i8 + 4 >> 2] = d41;
     if (d65 + +HEAPF32[i12 >> 2] > +HEAPF32[i3 >> 2]) {
      i62 = 18;
      break L1;
     }
    }
    i2 = _llvm_uadd_with_overflow_i32(i20 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i62 = 13;
     break L1;
    }
    i10 = i2;
    i2 = i15 + (i10 << 5) | 0;
    i17 = i15 + (i10 << 5) + 8 | 0;
    i36 = i15 + (i10 << 5) + 16 | 0;
    i9 = i15 + (i10 << 5) + 24 | 0;
    if ((i20 | 0) == 0) {
     i62 = 15;
     break L1;
    }
    d41 = +HEAPF32[i9 + 4 >> 2];
    d47 = +HEAPF32[i9 >> 2];
    d40 = +HEAPF32[i36 + 4 >> 2];
    d49 = +HEAPF32[i36 >> 2];
    d66 = +HEAPF32[i17 + 4 >> 2];
    d67 = +HEAPF32[i17 >> 2];
    d68 = +HEAPF32[i2 + 4 >> 2];
    d69 = +HEAPF32[i2 >> 2];
    HEAP32[i33 >> 2] = i10;
    d51 = d65;
    i52 = i10;
    i53 = i15;
    d54 = d47;
    d55 = d41;
    d56 = d49;
    d57 = d40;
    d58 = d67;
    d59 = d66;
    d60 = d69;
    d61 = d68;
   }
  } while (0);
  if ((i52 | 0) == 0) {
   i70 = i53;
   d71 = d51;
   break;
  } else {
   d37 = d51;
   i20 = i52;
   i15 = i53;
   d38 = d54;
   d25 = d55;
   d27 = d56;
   d22 = d57;
   d24 = d58;
   d19 = d59;
   d21 = d60;
   d16 = d61;
  }
 }
 do {
  if ((i62 | 0) == 13) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return +0;
  } else if ((i62 | 0) == 15) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return +0;
  } else if ((i62 | 0) == 18) {
   if ((i20 | 0) == 0) {
    i70 = i15;
    d71 = d65;
    break;
   }
   HEAP32[i33 >> 2] = 0;
   i70 = i15;
   d71 = d65;
  }
 } while (0);
 if ((i70 | 0) != 0) {
  HEAP32[i31 >> 2] = 0;
  HEAP32[i32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i70);
 }
 i70 = i1 + 24 | 0;
 i32 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i70 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i70 + 4 >> 2] = i32;
 i32 = i1 + 32 | 0;
 i1 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i32 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i32 + 4 >> 2] = i1;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 1 | (i1 | 0) == 3) {
  STACKTOP = i5;
  return +d71;
 }
 i1 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i8 + 4 >> 2] = i1;
 STACKTOP = i5;
 return +d71;
}
function __ZN7WebCore18PathTraversalState17quadraticBezierToERKNS_10FloatPointES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, i18 = 0, d19 = +0, d20 = +0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, i43 = 0, i44 = 0, d45 = +0, d46 = +0, d47 = +0, d48 = +0, d49 = +0, d50 = +0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, i55 = 0, d56 = +0, d57 = +0, d58 = +0, d59 = +0, i60 = 0, d61 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 i10 = i2;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i12 = i3;
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 d14 = (HEAP32[tempDoublePtr >> 2] = i8, +HEAPF32[tempDoublePtr >> 2]);
 i15 = i9;
 d16 = (HEAP32[tempDoublePtr >> 2] = i15, +HEAPF32[tempDoublePtr >> 2]);
 d17 = (HEAP32[tempDoublePtr >> 2] = i2, +HEAPF32[tempDoublePtr >> 2]);
 i18 = i11;
 d19 = (HEAP32[tempDoublePtr >> 2] = i18, +HEAPF32[tempDoublePtr >> 2]);
 d20 = (HEAP32[tempDoublePtr >> 2] = i3, +HEAPF32[tempDoublePtr >> 2]);
 i21 = i13;
 d22 = (HEAP32[tempDoublePtr >> 2] = i21, +HEAPF32[tempDoublePtr >> 2]);
 i23 = i6;
 i24 = i6 | 0;
 i25 = i6;
 i26 = i5 | 0;
 HEAP32[i26 >> 2] = 0;
 i27 = i5 + 4 | 0;
 HEAP32[i27 >> 2] = 0;
 i28 = i5 + 8 | 0;
 HEAP32[i28 >> 2] = 0;
 __ZN3WTF6VectorIN7WebCore15QuadraticBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, 1);
 i29 = HEAP32[i26 >> 2] | 0;
 i30 = HEAP32[i28 >> 2] | 0;
 i31 = i29 + (i30 * 24 & -1) | 0;
 HEAP32[i31 >> 2] = i8 & -1;
 HEAP32[i31 + 4 >> 2] = i15 | i9 & 0;
 i9 = i29 + (i30 * 24 & -1) + 8 | 0;
 HEAP32[i9 >> 2] = i2 & -1;
 HEAP32[i9 + 4 >> 2] = i18 | i11 & 0;
 i11 = i29 + (i30 * 24 & -1) + 16 | 0;
 HEAP32[i11 >> 2] = i3 & -1;
 HEAP32[i11 + 4 >> 2] = i21 | i13 & 0;
 i13 = i30 + 1 | 0;
 HEAP32[i28 >> 2] = i13;
 i30 = i6 + 8 | 0;
 i21 = i6 + 16 | 0;
 i11 = i6;
 i6 = i1 | 0;
 i3 = i1 + 52 | 0;
 i18 = i1 + 40 | 0;
 i9 = i1 + 48 | 0;
 d32 = +0;
 i2 = i13;
 i13 = i29;
 d33 = d20;
 d20 = d22;
 d22 = d17;
 d17 = d19;
 d19 = d14;
 d14 = d16;
 L1 : while (1) {
  d16 = d22 - d19;
  d34 = d17 - d14;
  d35 = d33 - d22;
  d36 = d20 - d17;
  d37 = +Math_sqrt(d34 * d34 + d16 * d16) + +Math_sqrt(d36 * d36 + d35 * d35);
  d35 = d33 - d19;
  d36 = d20 - d14;
  do {
   if (d37 - +Math_sqrt(d36 * d36 + d35 * d35) > +9999999747378752e-21 & i2 >>> 0 < 21 >>> 0) {
    d16 = (d19 + d22) * +.5;
    d34 = (d14 + d17) * +.5;
    d38 = (d22 + d33) * +.5;
    d39 = (d17 + d20) * +.5;
    d40 = +d38;
    d41 = +d39;
    HEAPF32[i30 >> 2] = d40;
    HEAPF32[i30 + 4 >> 2] = d41;
    d41 = (d16 + d38) * +.5;
    d38 = (d34 + d39) * +.5;
    d39 = +d41;
    d40 = +d38;
    HEAPF32[i24 >> 2] = d39;
    HEAPF32[i24 + 4 >> 2] = d40;
    d40 = +d33;
    d39 = +d20;
    HEAPF32[i21 >> 2] = d40;
    HEAPF32[i21 + 4 >> 2] = d39;
    if ((i2 | 0) != (HEAP32[i27 >> 2] | 0)) {
     i29 = i13 + (i2 * 24 & -1) | 0;
     HEAP32[i29 >> 2] = HEAP32[i23 >> 2];
     HEAP32[i29 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
     HEAP32[i29 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
     HEAP32[i29 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
     HEAP32[i29 + 16 >> 2] = HEAP32[i23 + 16 >> 2];
     HEAP32[i29 + 20 >> 2] = HEAP32[i23 + 20 >> 2];
     i29 = i2 + 1 | 0;
     HEAP32[i28 >> 2] = i29;
     d42 = d32;
     i43 = i29;
     i44 = i13;
     d45 = d41;
     d46 = d38;
     d47 = d16;
     d48 = d34;
     d49 = d19;
     d50 = d14;
     break;
    }
    i29 = i2 + 1 | 0;
    do {
     if (i13 >>> 0 > i25 >>> 0) {
      i51 = 7;
     } else {
      if ((i13 + (i2 * 24 & -1) | 0) >>> 0 <= i25 >>> 0) {
       i51 = 7;
       break;
      }
      __ZN3WTF6VectorIN7WebCore15QuadraticBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i29);
      i15 = HEAP32[i26 >> 2] | 0;
      i52 = i15 + (((i11 - i13 | 0) / 24 & -1) * 24 & -1) | 0;
      i53 = i15;
     }
    } while (0);
    if ((i51 | 0) == 7) {
     i51 = 0;
     __ZN3WTF6VectorIN7WebCore15QuadraticBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i29);
     i52 = i25;
     i53 = HEAP32[i26 >> 2] | 0;
    }
    i15 = HEAP32[i28 >> 2] | 0;
    i31 = i53 + (i15 * 24 & -1) | 0;
    i8 = i52;
    HEAP32[i31 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i31 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    HEAP32[i31 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
    HEAP32[i31 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    HEAP32[i31 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
    HEAP32[i31 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
    i8 = i15 + 1 | 0;
    HEAP32[i28 >> 2] = i8;
    d42 = d32;
    i43 = i8;
    i44 = i53;
    d45 = d41;
    d46 = d38;
    d47 = d16;
    d48 = d34;
    d49 = d19;
    d50 = d14;
   } else {
    d54 = d32 + d37;
    i8 = HEAP32[i6 >> 2] | 0;
    if ((i8 | 0) == 1 | (i8 | 0) == 3) {
     d39 = +d19;
     d40 = +d14;
     HEAPF32[i3 >> 2] = d39;
     HEAPF32[i3 + 4 >> 2] = d40;
     d40 = +d33;
     d39 = +d20;
     HEAPF32[i7 >> 2] = d40;
     HEAPF32[i7 + 4 >> 2] = d39;
     if (d54 + +HEAPF32[i18 >> 2] > +HEAPF32[i9 >> 2]) {
      i51 = 18;
      break L1;
     }
    }
    i8 = _llvm_uadd_with_overflow_i32(i2 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i51 = 13;
     break L1;
    }
    i15 = i8;
    i8 = i13 + (i15 * 24 & -1) | 0;
    i31 = i13 + (i15 * 24 & -1) + 8 | 0;
    i55 = i13 + (i15 * 24 & -1) + 16 | 0;
    if ((i2 | 0) == 0) {
     i51 = 15;
     break L1;
    }
    d39 = +HEAPF32[i55 + 4 >> 2];
    d40 = +HEAPF32[i55 >> 2];
    d56 = +HEAPF32[i31 + 4 >> 2];
    d57 = +HEAPF32[i31 >> 2];
    d58 = +HEAPF32[i8 + 4 >> 2];
    d59 = +HEAPF32[i8 >> 2];
    HEAP32[i28 >> 2] = i15;
    d42 = d54;
    i43 = i15;
    i44 = i13;
    d45 = d40;
    d46 = d39;
    d47 = d57;
    d48 = d56;
    d49 = d59;
    d50 = d58;
   }
  } while (0);
  if ((i43 | 0) == 0) {
   i60 = i44;
   d61 = d42;
   break;
  } else {
   d32 = d42;
   i2 = i43;
   i13 = i44;
   d33 = d45;
   d20 = d46;
   d22 = d47;
   d17 = d48;
   d19 = d49;
   d14 = d50;
  }
 }
 do {
  if ((i51 | 0) == 13) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return +0;
  } else if ((i51 | 0) == 15) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return +0;
  } else if ((i51 | 0) == 18) {
   if ((i2 | 0) == 0) {
    i60 = i13;
    d61 = d54;
    break;
   }
   HEAP32[i28 >> 2] = 0;
   i60 = i13;
   d61 = d54;
  }
 } while (0);
 if ((i60 | 0) != 0) {
  HEAP32[i26 >> 2] = 0;
  HEAP32[i27 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i60);
 }
 i60 = i1 + 24 | 0;
 i27 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i60 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i60 + 4 >> 2] = i27;
 i27 = i1 + 32 | 0;
 i1 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i27 + 4 >> 2] = i1;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 1 | (i1 | 0) == 3) {
  STACKTOP = i4;
  return +d61;
 }
 i1 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i7 + 4 >> 2] = i1;
 STACKTOP = i4;
 return +d61;
}
function __ZN7WebCore18PathTraversalState14processSegmentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 2) {
   if (+HEAPF32[i1 + 40 >> 2] < +HEAPF32[i1 + 48 >> 2]) {
    break;
   }
   HEAP8[i1 + 4 | 0] = 1;
  } else if ((i5 | 0) == 1 | (i5 | 0) == 3) {
   i6 = i1 + 40 | 0;
   i7 = i1 + 48 | 0;
   if (+HEAPF32[i6 >> 2] < +HEAPF32[i7 >> 2]) {
    break;
   }
   i8 = i1 + 8 | 0;
   i9 = i1 + 12 | 0;
   d10 = +HEAPF32[i9 >> 2] - +HEAPF32[i1 + 56 >> 2];
   HEAPF32[i3 >> 2] = +HEAPF32[i8 >> 2] - +HEAPF32[i1 + 52 >> 2];
   HEAPF32[i3 + 4 >> 2] = d10;
   d10 = +__ZNK7WebCore10FloatPoint17slopeAngleRadiansEv(i3);
   if ((HEAP32[i4 >> 2] | 0) == 1) {
    d11 = +HEAPF32[i7 >> 2] - +HEAPF32[i6 >> 2];
    d12 = d11 * +Math_cos(d10);
    d13 = d11 * +Math_sin(d10);
    HEAPF32[i8 >> 2] = d12 + +HEAPF32[i8 >> 2];
    HEAPF32[i9 >> 2] = d13 + +HEAPF32[i9 >> 2];
   } else {
    HEAPF32[i1 + 60 >> 2] = d10 * +180 / 3.1415927410125732;
   }
   HEAP8[i1 + 4 | 0] = 1;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i1 + 52 | 0;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore15QuadraticBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 * 24 & -1) | 0;
 if (i5 >>> 0 > 178956970 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 * 24 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 24 & -1;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   HEAP32[i5 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
   HEAP32[i5 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
   i8 = i6 + 24 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 24 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6VectorIN7WebCore11CubicBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore18PathTraversalState6lineToERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 8 | 0;
 d4 = +HEAPF32[i2 >> 2] - +HEAPF32[i3 >> 2];
 d5 = +HEAPF32[i2 + 4 >> 2] - +HEAPF32[i1 + 12 >> 2];
 d6 = +Math_sqrt(d4 * d4 + d5 * d5);
 i7 = i2;
 i2 = i1 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i9;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i9;
 i2 = i3;
 HEAP32[i2 >> 2] = i8;
 HEAP32[i2 + 4 >> 2] = i9;
 return +d6;
}
function __ZN7WebCore18PathTraversalState12closeSubpathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0, d5 = +0, d6 = +0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = i1 + 16 | 0;
 d4 = +HEAPF32[i3 >> 2] - +HEAPF32[i2 >> 2];
 d5 = +HEAPF32[i1 + 20 >> 2] - +HEAPF32[i1 + 12 >> 2];
 d6 = +Math_sqrt(d4 * d4 + d5 * d5);
 i7 = i3;
 i3 = i1 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i9;
 i3 = i1 + 24 | 0;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i9;
 i3 = i2;
 HEAP32[i3 >> 2] = i8;
 HEAP32[i3 + 4 >> 2] = i9;
 return +d6;
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
function __ZN7WebCore18PathTraversalState6moveToERKNS_10FloatPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2;
 i2 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 i2 = i1 + 24 | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 i2 = i1 + 16 | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i4;
 HEAP32[i2 + 4 >> 2] = i5;
 return +(+0);
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
function __ZN7WebCore18PathTraversalStateC2ENS0_19PathTraversalActionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 56) | 0;
 return;
}
function __ZN7WebCore18PathTraversalStateC1ENS0_19PathTraversalActionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP8[i1 + 4 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 56) | 0;
 return;
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
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore18PathTraversalStateC2ENS0_19PathTraversalActionE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_cosf": _cosf, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_sqrtf": _sqrtf, "_llvm_lifetime_start": _llvm_lifetime_start, "_sinf": _sinf, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore18PathTraversalState12closeSubpathEv","_memset","__ZN7WebCore18PathTraversalStateC2ENS0_19PathTraversalActionE","__ZN7WebCore18PathTraversalState6moveToERKNS_10FloatPointE","__ZN7WebCore18PathTraversalState14processSegmentEv","__ZN7WebCore18PathTraversalState13cubicBezierToERKNS_10FloatPointES3_S3_","__ZN7WebCore18PathTraversalState6lineToERKNS_10FloatPointE","_memcpy","__ZN3WTF6VectorIN7WebCore15QuadraticBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore18PathTraversalState17quadraticBezierToERKNS_10FloatPointES3_","__ZN3WTF6VectorIN7WebCore11CubicBezierELj0ENS_15CrashOnOverflowEE14expandCapacityEj"]

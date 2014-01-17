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
H_BASE = parentModule["_malloc"](424 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 424;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([115,105,110,103,108,101,83,104,111,116,0,0,0,0,0,0,116,105,109,101,111,117,116,0,116,105,109,101,114,73,100,0,116,121,112,101,0,0,0,0,115,99,114,105,112,116,76,105,110,101,0,0,0,0,0,0,115,99,114,105,112,116,78,97,109,101,0,0,0,0,0,0,114,111,111,116,0,0,0,0,117,115,101,100,72,101,97,112,83,105,122,101,68,101,108,116,97,0,0,0,0,0,0,0,99,108,105,112,0,0,0,0,105,100,0,0,0,0,0,0,115,116,97,114,116,76,105,110,101,0,0,0,0,0,0,0,105,115,77,97,105,110,70,114,97,109,101,0,0,0,0,0,99,97,99,104,101,100,0,0,105,109,97,103,101,84,121,112,101,0,0,0,0,0,0,0,112,97,114,116,105,97,108,76,97,121,111,117,116,0,0,0,116,111,116,97,108,79,98,106,101,99,116,115,0,0,0,0,100,105,114,116,121,79,98,106,101,99,116,115,0,0,0,0,101,110,99,111,100,101,100,68,97,116,97,76,101,110,103,116,104,0,0,0,0,0,0,0,116,104,114,101,97,100,0,0,110,101,116,119,111,114,107,84,105,109,101,0,0,0,0,0,100,105,100,70,97,105,108,0,109,105,109,101,84,121,112,101,0,0,0,0,0,0,0,0,115,116,97,116,117,115,67,111,100,101,0,0,0,0,0,0,114,101,113,117,101,115,116,77,101,116,104,111,100,0,0,0,114,101,113,117,101,115,116,73,100,0,0,0,0,0,0,0,109,101,115,115,97,103,101,0,108,105,110,101,78,117,109,98,101,114,0,0,0,0,0,0,114,101,97,100,121,83,116,97,116,101,0,0,0,0,0,0,117,114,108,0,0,0,0,0,115,116,97,99,107,84,114,97,99,101,0,0,0,0,0,0,115,116,97,114,116,84,105,109,101,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL10createQuadERKNS_9FloatQuadE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 __ZN9Inspector14InspectorArray6createEv(i12);
 i13 = i12 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i2;
 i14 = i12 + 12 | 0;
 __ZN9Inspector19InspectorBasicValue6createEd(i10, +HEAPF32[i13 >> 2]);
 i15 = i12 + 20 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i12 + 16 | 0;
 if ((i16 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i16 + 1 | 0);
  i18 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i19 = i10 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = 0;
  HEAP32[i18 >> 2] = i20;
 } else {
  i20 = (HEAP32[i14 >> 2] | 0) + (i16 << 2) | 0;
  i16 = i10 | 0;
  i18 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  HEAP32[i20 >> 2] = i18;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i18 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i10 = i18 + 4 | 0;
   i20 = i10 | 0;
   i16 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i20 >> 2] = i16;
    break;
   }
   i16 = i10 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +HEAPF32[i13 + 4 >> 2]);
 i13 = HEAP32[i15 >> 2] | 0;
 if ((i13 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i13 + 1 | 0);
  i18 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i16 = i9 | 0;
  i10 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  HEAP32[i18 >> 2] = i10;
 } else {
  i10 = (HEAP32[i14 >> 2] | 0) + (i13 << 2) | 0;
  i13 = i9 | 0;
  i18 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i10 >> 2] = i18;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i18 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i18 | 0) != 0) {
   i9 = i18 + 4 | 0;
   i10 = i9 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i10 >> 2] = i13;
    break;
   }
   i13 = i9 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i18 = i2 + 8 | 0;
 __ZN9Inspector19InspectorBasicValue6createEd(i8, +HEAPF32[i18 >> 2]);
 i13 = HEAP32[i15 >> 2] | 0;
 if ((i13 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i13 + 1 | 0);
  i9 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i10 = i8 | 0;
  i16 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  HEAP32[i9 >> 2] = i16;
 } else {
  i16 = (HEAP32[i14 >> 2] | 0) + (i13 << 2) | 0;
  i13 = i8 | 0;
  i9 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i16 >> 2] = i9;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i8 = i9 + 4 | 0;
   i16 = i8 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i16 >> 2] = i13;
    break;
   }
   i13 = i8 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, +HEAPF32[i18 + 4 >> 2]);
 i18 = HEAP32[i15 >> 2] | 0;
 if ((i18 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i18 + 1 | 0);
  i9 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i13 = i7 | 0;
  i8 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i9 >> 2] = i8;
 } else {
  i8 = (HEAP32[i14 >> 2] | 0) + (i18 << 2) | 0;
  i18 = i7 | 0;
  i9 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i8 >> 2] = i9;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i9 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i7 = i9 + 4 | 0;
   i8 = i7 | 0;
   i18 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i8 >> 2] = i18;
    break;
   }
   i18 = i7 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i9 = i2 + 16 | 0;
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +HEAPF32[i9 >> 2]);
 i18 = HEAP32[i15 >> 2] | 0;
 if ((i18 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i18 + 1 | 0);
  i7 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i8 = i6 | 0;
  i13 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i7 >> 2] = i13;
 } else {
  i13 = (HEAP32[i14 >> 2] | 0) + (i18 << 2) | 0;
  i18 = i6 | 0;
  i7 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i13 >> 2] = i7;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i6 = i7 + 4 | 0;
   i13 = i6 | 0;
   i18 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i13 >> 2] = i18;
    break;
   }
   i18 = i6 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +HEAPF32[i9 + 4 >> 2]);
 i9 = HEAP32[i15 >> 2] | 0;
 if ((i9 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i9 + 1 | 0);
  i7 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i18 = i5 | 0;
  i6 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i7 >> 2] = i6;
 } else {
  i6 = (HEAP32[i14 >> 2] | 0) + (i9 << 2) | 0;
  i9 = i5 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i6 = i5 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i6 >> 2] = i9;
    break;
   }
   i9 = i5 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i7 = i2 + 24 | 0;
 __ZN9Inspector19InspectorBasicValue6createEd(i4, +HEAPF32[i7 >> 2]);
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i2 + 1 | 0);
  i9 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i5 = i4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i9 >> 2] = i6;
 } else {
  i6 = (HEAP32[i14 >> 2] | 0) + (i2 << 2) | 0;
  i2 = i4 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 >> 2] = i9;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i9 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i4 = i9 + 4 | 0;
   i6 = i4 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i6 >> 2] = i2;
    break;
   }
   i2 = i4 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +HEAPF32[i7 + 4 >> 2]);
 i7 = HEAP32[i15 >> 2] | 0;
 if ((i7 | 0) == (HEAP32[i17 >> 2] | 0)) {
  __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i14, i7 + 1 | 0);
  i17 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) | 0;
  i9 = i11 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i17 >> 2] = i2;
 } else {
  i2 = (HEAP32[i14 >> 2] | 0) + (i7 << 2) | 0;
  i7 = i11 | 0;
  i14 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i2 >> 2] = i14;
 }
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = HEAP32[i11 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i21 = i1 | 0;
  HEAP32[i21 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
 i11 = i15 + 4 | 0;
 i15 = i11 | 0;
 i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i15 >> 2] = i14;
  i21 = i1 | 0;
  HEAP32[i21 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
 i14 = i11 - 4 | 0;
 if ((i14 | 0) == 0) {
  i21 = i1 | 0;
  HEAP32[i21 >> 2] = i12;
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
 i21 = i1 | 0;
 HEAP32[i21 >> 2] = i12;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore21TimelineRecordFactory33createResourceReceiveResponseDataERKN3WTF6StringERKNS_16ResourceResponseE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i15 = i11 | 0;
 i11 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i11 | 0;
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 336 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i2);
 i2 = i9 | 0;
 i16 = i10 | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i2 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i12, i9);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i10 = i2 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i10 >> 2] = i17;
    break;
   }
   i17 = i2 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
  }
 } while (0);
 i9 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i16 = i9 + 4 | 0;
   i17 = i16 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i17 >> 2] = i2;
    break;
   }
   i2 = i16 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 304 | 0);
 i9 = i3 | 0;
 d18 = +(__ZNK7WebCore20ResourceResponseBase14httpStatusCodeEv(i9) | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, d18);
 i3 = i7 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i3 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i13, i7);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 4 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i12 = i2 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i2 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 288 | 0);
 i7 = __ZNK7WebCore20ResourceResponseBase8mimeTypeEv(i9) | 0;
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i7);
 i7 = i5 | 0;
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i14, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i15 = i7 | 0;
   i6 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i15 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 4 | 0;
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i5 = HEAP32[i14 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 i14 = i5 | 0;
 i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i11;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i14 >> 2] = i7;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory29createResourceSendRequestDataERKN3WTF6StringERKNS_15ResourceRequestE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i11);
 i15 = i11 | 0;
 i11 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i11 | 0;
 __ZN3WTF6StringC1EPKc(i12, H_BASE + 336 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i10, i2);
 i2 = i9 | 0;
 i16 = i10 | 0;
 i10 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i2 >> 2] = i10;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i12, i9);
 i9 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i2 = i9 + 4 | 0;
   i10 = i2 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i10 >> 2] = i17;
    break;
   }
   i17 = i2 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 1](i17);
  }
 } while (0);
 i9 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i16 = i9 + 4 | 0;
   i17 = i16 | 0;
   i2 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i17 >> 2] = i2;
    break;
   }
   i2 = i16 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i9 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i12 = i9 | 0;
   i2 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i12 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 392 | 0);
 i9 = i3 | 0;
 i3 = __ZNK7WebCore19ResourceRequestBase3urlEv(i9) | 0;
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i3);
 i3 = i7 | 0;
 i2 = i8 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i3 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i13, i7);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 + 4 | 0;
   i8 = i3 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i3 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 1](i12);
  }
 } while (0);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i12 = i2 | 0;
   i3 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i12 >> 2] = i3;
    break;
   }
   i3 = i2 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 | 0;
   i3 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i13 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 320 | 0);
 i7 = __ZNK7WebCore19ResourceRequestBase10httpMethodEv(i9) | 0;
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i7);
 i7 = i5 | 0;
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i15, i14, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i15 = i7 | 0;
   i6 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i15 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 4 | 0;
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i5 = HEAP32[i14 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 i14 = i5 | 0;
 i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i11;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i14 >> 2] = i7;
  i18 = i1 | 0;
  HEAP32[i18 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory24createResourceFinishDataERKN3WTF6StringEbd(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i16 = i12 | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i12 | 0;
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 336 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i2);
 i2 = i10 | 0;
 i17 = i11 | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i13, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i17 = i10 + 4 | 0;
   i18 = i17 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 280 | 0);
 __ZN9Inspector19InspectorBasicValue6createEb(i9, i3);
 i3 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i10 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (d4 == +0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 __ZN3WTF6StringC1EPKc(i15, H_BASE + 264 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i7, d4);
 i8 = i6 | 0;
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i8 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i15, i6);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i16 = i8 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i16 >> 2] = i7;
    break;
   }
   i7 = i8 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i3 = i6 + 4 | 0;
   i7 = i3 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 i8 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i15 >> 2] = i8;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory16createLayoutDataEjjb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i16 = i12 | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i12 | 0;
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 216 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 >>> 0 >>> 0));
 i2 = i10 | 0;
 i17 = i11 | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i13, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i17 = i10 + 4 | 0;
   i18 = i17 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 200 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i3 >>> 0 >>> 0));
 i3 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i10 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i15, H_BASE + 184 | 0);
 __ZN9Inspector19InspectorBasicValue6createEb(i7, i4);
 i4 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i15, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i16 = i4 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i16 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i7 = i8 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i8 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i15 >> 2] = i4;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory22createTimerInstallDataEiib(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 __ZN9Inspector15InspectorObject6createEv(i12);
 i16 = i12 | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i16 = i12 | 0;
 __ZN3WTF6StringC1EPKc(i13, H_BASE + 32 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, +(i2 | 0));
 i2 = i10 | 0;
 i17 = i11 | 0;
 i11 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i2 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i13, i10);
 i10 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i2 = i10 + 4 | 0;
   i11 = i2 | 0;
   i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) != 0) {
    HEAP32[i11 >> 2] = i18;
    break;
   }
   i18 = i2 - 4 | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
  }
 } while (0);
 i10 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i17 = i10 + 4 | 0;
   i18 = i17 | 0;
   i2 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i18 >> 2] = i2;
    break;
   }
   i2 = i17 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 | 0;
   i2 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i13 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 24 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i9, +(i3 | 0));
 i3 = i8 | 0;
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i3 >> 2] = i9;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i14, i8);
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i3 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   i2 = i10 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i2 >> 2] = i3;
    break;
   }
   i3 = i10 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i3 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i15, H_BASE + 8 | 0);
 __ZN9Inspector19InspectorBasicValue6createEb(i7, i4);
 i4 = i6 | 0;
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i4 >> 2] = i7;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i16, i15, i6);
 i6 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i16 = i4 | 0;
   i7 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i16 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i6 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   i7 = i8 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i7 >> 2] = i4;
    break;
   }
   i4 = i8 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 1](i4);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
 i15 = i6 | 0;
 i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i15 >> 2] = i4;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore21TimelineRecordFactory19createGenericRecordEdi(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 __ZN9Inspector15InspectorObject6createEv(i7);
 i13 = i7 | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i7 | 0;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 416 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, d2);
 i14 = i5 | 0;
 i15 = i6 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i14 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i8, i5);
 i5 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i14 = i5 + 4 | 0;
   i6 = i14 | 0;
   i16 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i6 >> 2] = i16;
    break;
   }
   i16 = i14 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 1](i16);
  }
 } while (0);
 i5 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i15 = i5 + 4 | 0;
   i16 = i15 | 0;
   i14 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i16 >> 2] = i14;
    break;
   }
   i14 = i15 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i5 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i8 = i5 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 if ((i3 | 0) == 0) {
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore21createScriptCallStackEjb(i9, i3, 1);
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i9 | 0) == 0) {
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 do {
  if ((__ZNK7WebCore15ScriptCallStack4sizeEv(i9) | 0) != 0) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 400 | 0);
   __ZNK7WebCore15ScriptCallStack19buildInspectorArrayEv(i12, i9);
   i3 = i11 | 0;
   i5 = i12 | 0;
   i14 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i3 >> 2] = i14;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i13, i10, i11);
   i14 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i3 = i14 + 4 | 0;
     i8 = i3 | 0;
     i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i8 >> 2] = i15;
      break;
     }
     i15 = i3 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i15 = i14 + 4 | 0;
     i3 = i15 | 0;
     i8 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i3 >> 2] = i8;
      break;
     }
     i8 = i15 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
    }
   } while (0);
   i14 = HEAP32[i10 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i5 = i14 | 0;
   i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i5 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i10 = i9 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) == 0) {
  __ZN7WebCore15ScriptCallStackD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i10 >> 2] = i11;
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore21TimelineRecordFactory22createBackgroundRecordEdRKN3WTF6StringE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i9 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 416 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i8, d2);
 i13 = i7 | 0;
 i14 = i8 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i13 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i7);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i8 = i13 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i8 >> 2] = i15;
    break;
   }
   i15 = i13 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 1](i15);
  }
 } while (0);
 i7 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i14 = i7 + 4 | 0;
   i15 = i14 | 0;
   i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i15 >> 2] = i13;
    break;
   }
   i13 = i14 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 1](i13);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i13 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i13;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 256 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i6, i3);
 i3 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i11, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i12 = i3 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  i16 = i1 | 0;
  HEAP32[i16 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory29createXHRReadyStateChangeDataERKN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i9 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 392 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i14 = i13 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 376 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i11, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i12 = i3 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory25createReceiveResourceDataERKN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i9 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 336 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i14 = i13 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 232 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i11, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i12 = i3 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory22createFunctionCallDataERKN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i9 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 64 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i14 = i13 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 48 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, +(i3 | 0));
 i3 = i5 | 0;
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i3 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i11, i5);
 i5 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i12 = i3 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i6 = i7 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i7 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 1](i3);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i3;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory24createEvaluateScriptDataERKN3WTF6StringEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i9);
 i12 = i9 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i9 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 392 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i2);
 i2 = i7 | 0;
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i2 >> 2] = i8;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i10, i7);
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i2 = i7 + 4 | 0;
   i8 = i2 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i8 >> 2] = i14;
    break;
   }
   i14 = i2 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 1](i14);
  }
 } while (0);
 i7 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i13 = i7 + 4 | 0;
   i14 = i13 | 0;
   i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i14 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i11, H_BASE + 360 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i6, d3);
 i7 = i5 | 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = i6;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i12, i11, i5);
 i5 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i7 = i5 + 4 | 0;
   i12 = i7 | 0;
   i6 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i12 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i5 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 1](i7);
  }
 } while (0);
 i5 = HEAP32[i11 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i7;
  i15 = i1 | 0;
  HEAP32[i15 >> 2] = i9;
  STACKTOP = i4;
  return;
 }
}
function __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 1](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore21TimelineRecordFactory33createScheduleResourceRequestDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 392 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory23createEventDispatchDataERKNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 40 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2 + 12 | 0);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory21createDecodeImageDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 168 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory19createTimeStampDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 352 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory17createXHRLoadDataERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 392 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory19createParseHTMLDataEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 128 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 >>> 0 >>> 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory24createAnimationFrameDataEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 120 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory17createGCEventDataEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 88 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 >>> 0 >>> 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory22createGenericTimerDataEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 32 | 0);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory21createResizeImageDataEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 160 | 0);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory14createMarkDataEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN9Inspector15InspectorObject6createEv(i6);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 144 | 0);
 __ZN9Inspector19InspectorBasicValue6createEb(i5, i2);
 i2 = i4 | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i2 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 1](i9);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 + 4 | 0;
   i9 = i8 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i9 >> 2] = i2;
    break;
   }
   i2 = i8 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 1](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i7 = i4 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory15createPaintDataERKNS_9FloatQuadE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 112 | 0);
 __ZN7WebCoreL10createQuadERKNS_9FloatQuadE(i6, i2);
 __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i4 | 0, i5, i6);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i7 >> 2] = i8;
    break;
   }
   i8 = i6 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore21TimelineRecordFactory16appendLayoutRootEPN9Inspector15InspectorObjectERKNS_9FloatQuadE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 80 | 0);
 __ZN7WebCoreL10createQuadERKNS_9FloatQuadE(i5, i2);
 __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i1 | 0, i4, i5);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i2 = i5 | 0;
   i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i2 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 1](i6);
  }
 } while (0);
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
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
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
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
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21TimelineRecordFactory21createResizeImageDataEb","_strlen","__ZN7WebCore21TimelineRecordFactory33createResourceReceiveResponseDataERKN3WTF6StringERKNS_16ResourceResponseE","_memset","__ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE","__ZN7WebCore21TimelineRecordFactory22createGenericTimerDataEi","__ZN7WebCore21TimelineRecordFactory24createEvaluateScriptDataERKN3WTF6StringEd","__ZN7WebCore21TimelineRecordFactory17createGCEventDataEj","__ZN7WebCore21TimelineRecordFactory14createMarkDataEb","__ZN7WebCore21TimelineRecordFactory19createParseHTMLDataEj","__ZN7WebCore21TimelineRecordFactory19createTimeStampDataERKN3WTF6StringE","__ZN7WebCore21TimelineRecordFactory24createResourceFinishDataERKN3WTF6StringEbd","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore21TimelineRecordFactory19createGenericRecordEdi","__ZN7WebCore21TimelineRecordFactory24createAnimationFrameDataEi","__ZN7WebCoreL10createQuadERKNS_9FloatQuadE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore21TimelineRecordFactory29createXHRReadyStateChangeDataERKN3WTF6StringEi","__ZN7WebCore21TimelineRecordFactory22createBackgroundRecordEdRKN3WTF6StringE","__ZN7WebCore21TimelineRecordFactory25createReceiveResourceDataERKN3WTF6StringEi","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN7WebCore21TimelineRecordFactory22createTimerInstallDataEiib","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21TimelineRecordFactory17createXHRLoadDataERKN3WTF6StringE","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore21TimelineRecordFactory23createEventDispatchDataERKNS_5EventE","__ZN7WebCore21TimelineRecordFactory21createDecodeImageDataERKN3WTF6StringE","__ZN7WebCore21TimelineRecordFactory16createLayoutDataEjjb","__ZN7WebCore21TimelineRecordFactory29createResourceSendRequestDataERKN3WTF6StringERKNS_15ResourceRequestE","__ZN7WebCore21TimelineRecordFactory33createScheduleResourceRequestDataERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore21TimelineRecordFactory22createFunctionCallDataERKN3WTF6StringEi","__ZN7WebCore21TimelineRecordFactory16appendLayoutRootEPN9Inspector15InspectorObjectERKNS_9FloatQuadE","__ZN7WebCore21TimelineRecordFactory15createPaintDataERKNS_9FloatQuadE"]

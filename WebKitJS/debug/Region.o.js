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
var __ZN7WebCore6RegionC1Ev;
var __ZN7WebCore6RegionC1ERKNS_7IntRectE;
var __ZN7WebCore6Region5ShapeC1Ev;
var __ZN7WebCore6Region5ShapeC1ERKNS_7IntRectE;
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
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i1 + 12 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  if ((i6 | 0) == (i2 + 12 | 0)) {
   i7 = i1 + 12 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 12 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i8;
   HEAP32[i10 + 4 >> 2] = i9;
   i9 = i1 + 20 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   i11 = i2 + 20 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i8;
   i8 = i1 + 28 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i7 = i2 + 28 | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 36 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i2 + 36 | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = i8;
   HEAP32[i9 >> 2] = i7;
   HEAP32[i9 + 4 >> 2] = i11;
   i11 = i1 + 44 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i8 = i2 + 44 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i8 >> 2] = i9;
   HEAP32[i8 + 4 >> 2] = i7;
   i7 = i1 + 52 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 52 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i8;
   HEAP32[i10 + 4 >> 2] = i9;
   i9 = i1 + 60 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   i11 = i2 + 60 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i8;
   i8 = i1 + 68 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i7 = i2 + 68 | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 76 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i2 + 76 | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = i8;
   HEAP32[i9 >> 2] = i7;
   HEAP32[i9 + 4 >> 2] = i11;
   i11 = i1 + 84 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i8 = i2 + 84 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i8 >> 2] = i9;
   HEAP32[i8 + 4 >> 2] = i7;
   i7 = i1 + 92 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 92 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i8;
   HEAP32[i10 + 4 >> 2] = i9;
   i9 = i1 + 100 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   i11 = i2 + 100 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i8;
   i8 = i1 + 108 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i7 = i2 + 108 | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 116 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i9 = i2 + 116 | 0;
   i8 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i10 + 4 >> 2] = i8;
   HEAP32[i9 >> 2] = i7;
   HEAP32[i9 + 4 >> 2] = i11;
   i11 = i1 + 124 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i8 = i2 + 124 | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i8 >> 2] = i9;
   HEAP32[i8 + 4 >> 2] = i7;
   i7 = i1 + 132 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 132 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i8;
   HEAP32[i10 + 4 >> 2] = i9;
   i9 = i1 + 4 | 0;
   i10 = i2 + 4 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i10 >> 2] = i8;
   return;
  } else {
   HEAP32[i3 >> 2] = i6;
   HEAP32[i2 >> 2] = i2 + 12;
   i8 = i1 + 12 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 12 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i9;
   i9 = i1 + 20 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = i2 + 20 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 28 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i2 + 28 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i9;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 36 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i9 = i2 + 36 | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i9 >> 2] = i8;
   HEAP32[i9 + 4 >> 2] = i7;
   i7 = i1 + 44 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 44 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i9;
   HEAP32[i10 + 4 >> 2] = i8;
   i8 = i1 + 52 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 52 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i9;
   i9 = i1 + 60 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = i2 + 60 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 68 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i2 + 68 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i9;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 76 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i9 = i2 + 76 | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i9 >> 2] = i8;
   HEAP32[i9 + 4 >> 2] = i7;
   i7 = i1 + 84 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 84 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i9;
   HEAP32[i10 + 4 >> 2] = i8;
   i8 = i1 + 92 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 92 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i9;
   i9 = i1 + 100 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   i7 = i2 + 100 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i10;
   i10 = i1 + 108 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i8 = i2 + 108 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i10 + 4 >> 2] = i9;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 116 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i9 = i2 + 116 | 0;
   i10 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i11 + 4 >> 2] = i10;
   HEAP32[i9 >> 2] = i8;
   HEAP32[i9 + 4 >> 2] = i7;
   i7 = i1 + 124 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i10 = i2 + 124 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i10 >> 2] = i9;
   HEAP32[i10 + 4 >> 2] = i8;
   i8 = i1 + 132 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 132 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i10;
   HEAP32[i11 + 4 >> 2] = i9;
   i9 = i1 + 4 | 0;
   i11 = i2 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i10;
   return;
  }
 } else {
  i10 = i2 | 0;
  if ((i6 | 0) == (i2 + 12 | 0)) {
   HEAP32[i10 >> 2] = i4;
   HEAP32[i3 >> 2] = i5;
   i5 = i1 + 12 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   i7 = i2 + 12 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i1 + 20 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i8 = i2 + 20 | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i5;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 28 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i2 + 28 | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i11 + 4 >> 2] = i9;
   HEAP32[i5 >> 2] = i8;
   HEAP32[i5 + 4 >> 2] = i7;
   i7 = i1 + 36 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i9 = i2 + 36 | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i9 >> 2] = i5;
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i1 + 44 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 44 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i9;
   HEAP32[i11 + 4 >> 2] = i5;
   i5 = i1 + 52 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   i7 = i2 + 52 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i1 + 60 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i8 = i2 + 60 | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i5;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 68 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i2 + 68 | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i11 + 4 >> 2] = i9;
   HEAP32[i5 >> 2] = i8;
   HEAP32[i5 + 4 >> 2] = i7;
   i7 = i1 + 76 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i9 = i2 + 76 | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i9 >> 2] = i5;
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i1 + 84 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 84 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i9;
   HEAP32[i11 + 4 >> 2] = i5;
   i5 = i1 + 92 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   i7 = i2 + 92 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i1 + 100 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   i8 = i2 + 100 | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i9 + 4 >> 2] = i5;
   HEAP32[i8 >> 2] = i7;
   HEAP32[i8 + 4 >> 2] = i11;
   i11 = i1 + 108 | 0;
   i8 = HEAP32[i11 >> 2] | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   i5 = i2 + 108 | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i11 + 4 >> 2] = i9;
   HEAP32[i5 >> 2] = i8;
   HEAP32[i5 + 4 >> 2] = i7;
   i7 = i1 + 116 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   i9 = i2 + 116 | 0;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   HEAP32[i9 >> 2] = i5;
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i1 + 124 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i5 = HEAP32[i8 + 4 >> 2] | 0;
   i11 = i2 + 124 | 0;
   i7 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i8 + 4 >> 2] = i7;
   HEAP32[i11 >> 2] = i9;
   HEAP32[i11 + 4 >> 2] = i5;
   i5 = i1 + 132 | 0;
   i11 = HEAP32[i5 >> 2] | 0;
   i9 = HEAP32[i5 + 4 >> 2] | 0;
   i7 = i2 + 132 | 0;
   i8 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i5 + 4 >> 2] = i8;
   HEAP32[i7 >> 2] = i11;
   HEAP32[i7 + 4 >> 2] = i9;
   i9 = i1 + 4 | 0;
   i7 = i2 + 4 | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i7 >> 2] = i11;
   return;
  } else {
   HEAP32[i3 >> 2] = i6;
   HEAP32[i10 >> 2] = i4;
   i4 = i1 + 4 | 0;
   i1 = i2 + 4 | 0;
   i2 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
   HEAP32[i1 >> 2] = i2;
   return;
  }
 }
}
function __ZN7WebCore6Region5Shape14shapeOperationINS1_14UnionOperationEEES1_RKS1_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 144 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 140 | 0;
 HEAP32[i9 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 i10 = i1 + 148 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i2 + 148 >> 2] | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEEaSERKS2_(i1 | 0, i3 | 0) | 0;
  __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEEaSERKS5_(i1 + 140 | 0, i3 + 140 | 0) | 0;
  STACKTOP = i4;
  return;
 }
 i12 = HEAP32[i2 + 140 >> 2] | 0;
 i13 = i12 + (i11 << 3) | 0;
 i11 = HEAP32[i3 + 140 >> 2] | 0;
 i14 = HEAP32[i3 + 148 >> 2] | 0;
 i15 = i11 + (i14 << 3) | 0;
 do {
  if ((i14 | 0) == 0) {
   i16 = i12;
  } else {
   i17 = i2 + 8 | 0;
   i18 = i2 | 0;
   i19 = i3 + 8 | 0;
   i20 = i3 | 0;
   i21 = i5 + 12 | 0;
   i22 = i5 | 0;
   i23 = i5 + 4 | 0;
   i24 = i5 + 8 | 0;
   i25 = i1 | 0;
   i26 = i6;
   i27 = i11;
   i28 = i12;
   i29 = 0;
   i30 = 0;
   i31 = 0;
   i32 = 0;
   L7 : while (1) {
    i33 = HEAP32[i28 >> 2] | 0;
    i34 = HEAP32[i27 >> 2] | 0;
    i35 = i33 - i34 | 0;
    if ((i35 | 0) < 1) {
     i36 = HEAP32[i28 + 4 >> 2] | 0;
     i37 = HEAP32[i17 >> 2] | 0;
     if ((i36 | 0) == (i37 | 0)) {
      i38 = 0;
      i39 = 0;
     } else {
      if (i37 >>> 0 <= i36 >>> 0) {
       i40 = 8;
       break;
      }
      i37 = HEAP32[i18 >> 2] | 0;
      i38 = i37 + (HEAP32[i28 + 12 >> 2] << 2) | 0;
      i39 = i37 + (i36 << 2) | 0;
     }
     i36 = i28 + 8 | 0;
     if ((i35 | 0) > -1) {
      i41 = i36;
      i42 = i39;
      i43 = i38;
      i40 = 11;
     } else {
      i44 = i33;
      i45 = i32;
      i46 = i31;
      i47 = i27;
      i48 = i36;
      i49 = i39;
      i50 = i38;
     }
    } else {
     i41 = i28;
     i42 = i29;
     i43 = i30;
     i40 = 11;
    }
    if ((i40 | 0) == 11) {
     i40 = 0;
     i36 = HEAP32[i27 + 4 >> 2] | 0;
     i33 = HEAP32[i19 >> 2] | 0;
     if ((i36 | 0) == (i33 | 0)) {
      i51 = 0;
      i52 = 0;
     } else {
      if (i33 >>> 0 <= i36 >>> 0) {
       i40 = 13;
       break;
      }
      i33 = HEAP32[i20 >> 2] | 0;
      i51 = i33 + (HEAP32[i27 + 12 >> 2] << 2) | 0;
      i52 = i33 + (i36 << 2) | 0;
     }
     i44 = i34;
     i45 = i51;
     i46 = i52;
     i47 = i27 + 8 | 0;
     i48 = i41;
     i49 = i42;
     i50 = i43;
    }
    HEAP32[i22 >> 2] = i21;
    HEAP32[i23 >> 2] = 32;
    HEAP32[i24 >> 2] = 0;
    i34 = (i49 | 0) != (i50 | 0);
    if (i34 & (i46 | 0) != (i45 | 0)) {
     i36 = 0;
     i33 = i49;
     i35 = i46;
     i37 = 0;
     while (1) {
      i53 = HEAP32[i33 >> 2] | 0;
      i54 = HEAP32[i35 >> 2] | 0;
      i55 = i53 - i54 | 0;
      do {
       if ((i55 | 0) < 1) {
        HEAP32[i6 >> 2] = i53;
        i56 = i36 ^ 1;
        i57 = i33 + 4 | 0;
        if ((i55 | 0) <= -1) {
         i58 = i35;
         i59 = i56;
         i60 = i57;
         i61 = i53;
         break;
        }
        i62 = i56;
        i63 = i57;
        i64 = HEAP32[i35 >> 2] | 0;
        i40 = 20;
       } else {
        i62 = i36;
        i63 = i33;
        i64 = i54;
        i40 = 20;
       }
      } while (0);
      if ((i40 | 0) == 20) {
       i40 = 0;
       HEAP32[i6 >> 2] = i64;
       i58 = i35 + 4 | 0;
       i59 = i62 ^ 2;
       i60 = i63;
       i61 = i64;
      }
      do {
       if ((i59 | 0) == 0 | (i36 | 0) == 0) {
        if ((i37 | 0) != (HEAP32[i23 >> 2] | 0)) {
         HEAP32[(HEAP32[i22 >> 2] | 0) + (i37 << 2) >> 2] = i61;
         i54 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
         HEAP32[i24 >> 2] = i54;
         i65 = i54;
         break;
        }
        i54 = i37 + 1 | 0;
        i53 = HEAP32[i22 >> 2] | 0;
        do {
         if (i53 >>> 0 > i6 >>> 0) {
          i40 = 27;
         } else {
          if ((i53 + (i37 << 2) | 0) >>> 0 <= i6 >>> 0) {
           i40 = 27;
           break;
          }
          i55 = i26 - i53 >> 2;
          i57 = i54 + (i37 >>> 2) | 0;
          i56 = i57 >>> 0 > 16 >>> 0 ? i57 : 16;
          i57 = i56 >>> 0 > i54 >>> 0 ? i56 : i54;
          do {
           if (i37 >>> 0 < i57 >>> 0) {
            if (i57 >>> 0 > 32 >>> 0) {
             if (i57 >>> 0 > 1073741823 >>> 0) {
              i40 = 41;
              break L7;
             }
             i56 = __ZN3WTF18fastMallocGoodSizeEj(i57 << 2) | 0;
             HEAP32[i23 >> 2] = i56 >>> 2;
             i66 = __ZN3WTF10fastMallocEj(i56) | 0;
             HEAP32[i22 >> 2] = i66;
             i67 = i66;
            } else {
             HEAP32[i22 >> 2] = i21;
             HEAP32[i23 >> 2] = 32;
             i67 = i21;
            }
            i66 = i53;
            _memcpy(i67 | 0, i66 | 0, i37 << 2) | 0;
            if ((i21 | 0) == (i53 | 0) | (i53 | 0) == 0) {
             break;
            }
            if ((HEAP32[i22 >> 2] | 0) == (i53 | 0)) {
             HEAP32[i22 >> 2] = 0;
             HEAP32[i23 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i66);
           }
          } while (0);
          i57 = HEAP32[i22 >> 2] | 0;
          i68 = i57 + (i55 << 2) | 0;
          i69 = i57;
         }
        } while (0);
        if ((i40 | 0) == 27) {
         i40 = 0;
         i57 = i54 + (i37 >>> 2) | 0;
         i66 = i57 >>> 0 > 16 >>> 0 ? i57 : 16;
         i57 = i66 >>> 0 > i54 >>> 0 ? i66 : i54;
         do {
          if (i37 >>> 0 < i57 >>> 0) {
           if (i57 >>> 0 > 32 >>> 0) {
            if (i57 >>> 0 > 1073741823 >>> 0) {
             i40 = 30;
             break L7;
            }
            i66 = __ZN3WTF18fastMallocGoodSizeEj(i57 << 2) | 0;
            HEAP32[i23 >> 2] = i66 >>> 2;
            i56 = __ZN3WTF10fastMallocEj(i66) | 0;
            HEAP32[i22 >> 2] = i56;
            i70 = i56;
           } else {
            HEAP32[i22 >> 2] = i21;
            HEAP32[i23 >> 2] = 32;
            i70 = i21;
           }
           i56 = i53;
           _memcpy(i70 | 0, i56 | 0, i37 << 2) | 0;
           if ((i21 | 0) == (i53 | 0) | (i53 | 0) == 0) {
            break;
           }
           if ((HEAP32[i22 >> 2] | 0) == (i53 | 0)) {
            HEAP32[i22 >> 2] = 0;
            HEAP32[i23 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i56);
          }
         } while (0);
         i68 = i6;
         i69 = HEAP32[i22 >> 2] | 0;
        }
        HEAP32[i69 + (HEAP32[i24 >> 2] << 2) >> 2] = HEAP32[i68 >> 2];
        i53 = (HEAP32[i24 >> 2] | 0) + 1 | 0;
        HEAP32[i24 >> 2] = i53;
        i65 = i53;
       } else {
        i65 = i37;
       }
      } while (0);
      i53 = (i60 | 0) != (i50 | 0);
      if (i53 & (i58 | 0) != (i45 | 0)) {
       i36 = i59;
       i33 = i60;
       i35 = i58;
       i37 = i65;
      } else {
       i71 = i60;
       i72 = i58;
       i73 = i53;
       break;
      }
     }
    } else {
     i71 = i49;
     i72 = i46;
     i73 = i34;
    }
    do {
     if (i73) {
      __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i5, i71, i50);
     } else {
      if ((i72 | 0) == (i45 | 0)) {
       break;
      }
      __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i5, i72, i45);
     }
    } while (0);
    i34 = HEAP32[i24 >> 2] | 0;
    i37 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i34 | 0) == 0) {
      if ((i37 | 0) == 0) {
       break;
      }
      i35 = HEAP32[i22 >> 2] | 0;
      i74 = i35;
      i75 = i35;
      i76 = 0;
      i40 = 58;
     } else {
      i35 = HEAP32[i22 >> 2] | 0;
      i33 = i35 + (i34 << 2) | 0;
      if ((i37 | 0) == 0) {
       i77 = i35;
       i78 = i33;
       i40 = 65;
      } else {
       i74 = i35;
       i75 = i33;
       i76 = i34;
       i40 = 58;
      }
     }
    } while (0);
    L77 : do {
     if ((i40 | 0) == 58) {
      i40 = 0;
      i34 = _llvm_uadd_with_overflow_i32(i37 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i40 = 59;
       break L7;
      }
      i33 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i34 << 3) + 4 >> 2] | 0;
      if (((HEAP32[i8 >> 2] | 0) - i33 << 2 | 0) != (i75 - i74 | 0)) {
       i77 = i74;
       i78 = i75;
       i40 = 65;
       break;
      }
      if ((i74 | 0) == (i75 | 0)) {
       i79 = i76;
       i40 = 66;
       break;
      }
      i34 = (HEAP32[i7 >> 2] | 0) + (i33 << 2) | 0;
      i33 = i74;
      while (1) {
       if ((HEAP32[i33 >> 2] | 0) != (HEAP32[i34 >> 2] | 0)) {
        i77 = i74;
        i78 = i75;
        i40 = 65;
        break L77;
       }
       i35 = i33 + 4 | 0;
       if ((i35 | 0) == (i75 | 0)) {
        i79 = i76;
        i40 = 66;
        break;
       } else {
        i34 = i34 + 4 | 0;
        i33 = i35;
       }
      }
     }
    } while (0);
    if ((i40 | 0) == 65) {
     i40 = 0;
     __ZN7WebCore6Region5Shape10appendSpanEi(i1, i44);
     __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i25, i77, i78);
     i79 = HEAP32[i24 >> 2] | 0;
     i40 = 66;
    }
    do {
     if ((i40 | 0) == 66) {
      i40 = 0;
      if ((i79 | 0) == 0) {
       break;
      }
      HEAP32[i24 >> 2] = 0;
     }
    } while (0);
    i37 = HEAP32[i22 >> 2] | 0;
    if (!((i21 | 0) == (i37 | 0) | (i37 | 0) == 0)) {
     HEAP32[i22 >> 2] = 0;
     HEAP32[i23 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i37);
    }
    i80 = (i48 | 0) != (i13 | 0);
    i81 = (i47 | 0) == (i15 | 0);
    if (i81 | i80 ^ 1) {
     i40 = 71;
     break;
    } else {
     i27 = i47;
     i28 = i48;
     i29 = i49;
     i30 = i50;
     i31 = i46;
     i32 = i45;
    }
   }
   if ((i40 | 0) == 13) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i40 | 0) == 8) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i40 | 0) == 30) {
    _WTFCrash();
   } else if ((i40 | 0) == 41) {
    _WTFCrash();
   } else if ((i40 | 0) == 59) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i40 | 0) == 71) {
    if (i80) {
     i16 = i48;
     break;
    }
    if (i81) {
     STACKTOP = i4;
     return;
    }
    __ZN7WebCore6Region5Shape11appendSpansERKS1_PKNS0_4SpanES6_(i1, i3, i47, i15);
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 __ZN7WebCore6Region5Shape11appendSpansERKS1_PKNS0_4SpanES6_(i1, i2, i16, i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Region5Shape14shapeOperationINS1_17SubtractOperationEEES1_RKS1_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 144 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 140 | 0;
 HEAP32[i9 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 i10 = i1 + 148 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = HEAP32[i2 + 148 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 i14 = HEAP32[i3 + 140 >> 2] | 0;
 i15 = HEAP32[i3 + 148 >> 2] | 0;
 i16 = i14 + (i15 << 3) | 0;
 i17 = (i12 | 0) != 0;
 L1 : do {
  if ((i15 | 0) == 0 | i17 ^ 1) {
   i18 = i11;
   i19 = i17;
  } else {
   i12 = i2 + 8 | 0;
   i20 = i2 | 0;
   i21 = i3 + 8 | 0;
   i22 = i3 | 0;
   i23 = i5 + 12 | 0;
   i24 = i5 | 0;
   i25 = i5 + 4 | 0;
   i26 = i5 + 8 | 0;
   i27 = i1 | 0;
   i28 = i6;
   i29 = i14;
   i30 = i11;
   i31 = 0;
   i32 = 0;
   i33 = 0;
   i34 = 0;
   L3 : while (1) {
    i35 = HEAP32[i30 >> 2] | 0;
    i36 = HEAP32[i29 >> 2] | 0;
    i37 = i35 - i36 | 0;
    if ((i37 | 0) < 1) {
     i38 = HEAP32[i30 + 4 >> 2] | 0;
     i39 = HEAP32[i12 >> 2] | 0;
     if ((i38 | 0) == (i39 | 0)) {
      i40 = 0;
      i41 = 0;
     } else {
      if (i39 >>> 0 <= i38 >>> 0) {
       i42 = 6;
       break;
      }
      i39 = HEAP32[i20 >> 2] | 0;
      i40 = i39 + (HEAP32[i30 + 12 >> 2] << 2) | 0;
      i41 = i39 + (i38 << 2) | 0;
     }
     i38 = i30 + 8 | 0;
     if ((i37 | 0) > -1) {
      i43 = i38;
      i44 = i41;
      i45 = i40;
      i42 = 9;
     } else {
      i46 = i35;
      i47 = i34;
      i48 = i33;
      i49 = i29;
      i50 = i38;
      i51 = i41;
      i52 = i40;
     }
    } else {
     i43 = i30;
     i44 = i31;
     i45 = i32;
     i42 = 9;
    }
    if ((i42 | 0) == 9) {
     i42 = 0;
     i38 = HEAP32[i29 + 4 >> 2] | 0;
     i35 = HEAP32[i21 >> 2] | 0;
     if ((i38 | 0) == (i35 | 0)) {
      i53 = 0;
      i54 = 0;
     } else {
      if (i35 >>> 0 <= i38 >>> 0) {
       i42 = 11;
       break;
      }
      i35 = HEAP32[i22 >> 2] | 0;
      i53 = i35 + (HEAP32[i29 + 12 >> 2] << 2) | 0;
      i54 = i35 + (i38 << 2) | 0;
     }
     i46 = i36;
     i47 = i53;
     i48 = i54;
     i49 = i29 + 8 | 0;
     i50 = i43;
     i51 = i44;
     i52 = i45;
    }
    HEAP32[i24 >> 2] = i23;
    HEAP32[i25 >> 2] = 32;
    HEAP32[i26 >> 2] = 0;
    i36 = (i51 | 0) != (i52 | 0);
    if (i36 & (i48 | 0) != (i47 | 0)) {
     i38 = 0;
     i35 = i51;
     i37 = i48;
     i39 = 0;
     while (1) {
      i55 = HEAP32[i35 >> 2] | 0;
      i56 = HEAP32[i37 >> 2] | 0;
      i57 = i55 - i56 | 0;
      do {
       if ((i57 | 0) < 1) {
        HEAP32[i6 >> 2] = i55;
        i58 = i38 ^ 1;
        i59 = i35 + 4 | 0;
        if ((i57 | 0) <= -1) {
         i60 = i37;
         i61 = i58;
         i62 = i59;
         i63 = i55;
         break;
        }
        i64 = i58;
        i65 = i59;
        i66 = HEAP32[i37 >> 2] | 0;
        i42 = 18;
       } else {
        i64 = i38;
        i65 = i35;
        i66 = i56;
        i42 = 18;
       }
      } while (0);
      if ((i42 | 0) == 18) {
       i42 = 0;
       HEAP32[i6 >> 2] = i66;
       i60 = i37 + 4 | 0;
       i61 = i64 ^ 2;
       i62 = i65;
       i63 = i66;
      }
      do {
       if ((i61 | 0) == 1 | (i38 | 0) == 1) {
        if ((i39 | 0) != (HEAP32[i25 >> 2] | 0)) {
         HEAP32[(HEAP32[i24 >> 2] | 0) + (i39 << 2) >> 2] = i63;
         i56 = (HEAP32[i26 >> 2] | 0) + 1 | 0;
         HEAP32[i26 >> 2] = i56;
         i67 = i56;
         break;
        }
        i56 = i39 + 1 | 0;
        i55 = HEAP32[i24 >> 2] | 0;
        do {
         if (i55 >>> 0 > i6 >>> 0) {
          i42 = 25;
         } else {
          if ((i55 + (i39 << 2) | 0) >>> 0 <= i6 >>> 0) {
           i42 = 25;
           break;
          }
          i57 = i28 - i55 >> 2;
          i59 = i56 + (i39 >>> 2) | 0;
          i58 = i59 >>> 0 > 16 >>> 0 ? i59 : 16;
          i59 = i58 >>> 0 > i56 >>> 0 ? i58 : i56;
          do {
           if (i39 >>> 0 < i59 >>> 0) {
            if (i59 >>> 0 > 32 >>> 0) {
             if (i59 >>> 0 > 1073741823 >>> 0) {
              i42 = 39;
              break L3;
             }
             i58 = __ZN3WTF18fastMallocGoodSizeEj(i59 << 2) | 0;
             HEAP32[i25 >> 2] = i58 >>> 2;
             i68 = __ZN3WTF10fastMallocEj(i58) | 0;
             HEAP32[i24 >> 2] = i68;
             i69 = i68;
            } else {
             HEAP32[i24 >> 2] = i23;
             HEAP32[i25 >> 2] = 32;
             i69 = i23;
            }
            i68 = i55;
            _memcpy(i69 | 0, i68 | 0, i39 << 2) | 0;
            if ((i23 | 0) == (i55 | 0) | (i55 | 0) == 0) {
             break;
            }
            if ((HEAP32[i24 >> 2] | 0) == (i55 | 0)) {
             HEAP32[i24 >> 2] = 0;
             HEAP32[i25 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i68);
           }
          } while (0);
          i59 = HEAP32[i24 >> 2] | 0;
          i70 = i59 + (i57 << 2) | 0;
          i71 = i59;
         }
        } while (0);
        if ((i42 | 0) == 25) {
         i42 = 0;
         i59 = i56 + (i39 >>> 2) | 0;
         i68 = i59 >>> 0 > 16 >>> 0 ? i59 : 16;
         i59 = i68 >>> 0 > i56 >>> 0 ? i68 : i56;
         do {
          if (i39 >>> 0 < i59 >>> 0) {
           if (i59 >>> 0 > 32 >>> 0) {
            if (i59 >>> 0 > 1073741823 >>> 0) {
             i42 = 28;
             break L3;
            }
            i68 = __ZN3WTF18fastMallocGoodSizeEj(i59 << 2) | 0;
            HEAP32[i25 >> 2] = i68 >>> 2;
            i58 = __ZN3WTF10fastMallocEj(i68) | 0;
            HEAP32[i24 >> 2] = i58;
            i72 = i58;
           } else {
            HEAP32[i24 >> 2] = i23;
            HEAP32[i25 >> 2] = 32;
            i72 = i23;
           }
           i58 = i55;
           _memcpy(i72 | 0, i58 | 0, i39 << 2) | 0;
           if ((i23 | 0) == (i55 | 0) | (i55 | 0) == 0) {
            break;
           }
           if ((HEAP32[i24 >> 2] | 0) == (i55 | 0)) {
            HEAP32[i24 >> 2] = 0;
            HEAP32[i25 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i58);
          }
         } while (0);
         i70 = i6;
         i71 = HEAP32[i24 >> 2] | 0;
        }
        HEAP32[i71 + (HEAP32[i26 >> 2] << 2) >> 2] = HEAP32[i70 >> 2];
        i55 = (HEAP32[i26 >> 2] | 0) + 1 | 0;
        HEAP32[i26 >> 2] = i55;
        i67 = i55;
       } else {
        i67 = i39;
       }
      } while (0);
      i55 = (i62 | 0) != (i52 | 0);
      if (i55 & (i60 | 0) != (i47 | 0)) {
       i38 = i61;
       i35 = i62;
       i37 = i60;
       i39 = i67;
      } else {
       i73 = i62;
       i74 = i55;
       i75 = i67;
       break;
      }
     }
    } else {
     i73 = i51;
     i74 = i36;
     i75 = 0;
    }
    if (i74) {
     __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i5, i73, i52);
     i76 = HEAP32[i26 >> 2] | 0;
    } else {
     i76 = i75;
    }
    i39 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i76 | 0) == 0) {
      if ((i39 | 0) == 0) {
       break;
      }
      i37 = HEAP32[i24 >> 2] | 0;
      i77 = i37;
      i78 = i37;
      i79 = 0;
      i42 = 54;
     } else {
      i37 = HEAP32[i24 >> 2] | 0;
      i35 = i37 + (i76 << 2) | 0;
      if ((i39 | 0) == 0) {
       i80 = i37;
       i81 = i35;
       i42 = 61;
      } else {
       i77 = i37;
       i78 = i35;
       i79 = i76;
       i42 = 54;
      }
     }
    } while (0);
    L71 : do {
     if ((i42 | 0) == 54) {
      i42 = 0;
      i36 = _llvm_uadd_with_overflow_i32(i39 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       i42 = 55;
       break L3;
      }
      i35 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i36 << 3) + 4 >> 2] | 0;
      if (((HEAP32[i8 >> 2] | 0) - i35 << 2 | 0) != (i78 - i77 | 0)) {
       i80 = i77;
       i81 = i78;
       i42 = 61;
       break;
      }
      if ((i77 | 0) == (i78 | 0)) {
       i82 = i79;
       i42 = 62;
       break;
      }
      i36 = (HEAP32[i7 >> 2] | 0) + (i35 << 2) | 0;
      i35 = i77;
      while (1) {
       if ((HEAP32[i35 >> 2] | 0) != (HEAP32[i36 >> 2] | 0)) {
        i80 = i77;
        i81 = i78;
        i42 = 61;
        break L71;
       }
       i37 = i35 + 4 | 0;
       if ((i37 | 0) == (i78 | 0)) {
        i82 = i79;
        i42 = 62;
        break;
       } else {
        i36 = i36 + 4 | 0;
        i35 = i37;
       }
      }
     }
    } while (0);
    if ((i42 | 0) == 61) {
     i42 = 0;
     __ZN7WebCore6Region5Shape10appendSpanEi(i1, i46);
     __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i27, i80, i81);
     i82 = HEAP32[i26 >> 2] | 0;
     i42 = 62;
    }
    do {
     if ((i42 | 0) == 62) {
      i42 = 0;
      if ((i82 | 0) == 0) {
       break;
      }
      HEAP32[i26 >> 2] = 0;
     }
    } while (0);
    i39 = HEAP32[i24 >> 2] | 0;
    if (!((i23 | 0) == (i39 | 0) | (i39 | 0) == 0)) {
     HEAP32[i24 >> 2] = 0;
     HEAP32[i25 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i39);
    }
    i39 = (i50 | 0) != (i13 | 0);
    if ((i49 | 0) == (i16 | 0) | i39 ^ 1) {
     i18 = i50;
     i19 = i39;
     break L1;
    } else {
     i29 = i49;
     i30 = i50;
     i31 = i51;
     i32 = i52;
     i33 = i48;
     i34 = i47;
    }
   }
   if ((i42 | 0) == 6) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i42 | 0) == 11) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i42 | 0) == 55) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i42 | 0) == 28) {
    _WTFCrash();
   } else if ((i42 | 0) == 39) {
    _WTFCrash();
   }
  }
 } while (0);
 if (!i19) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore6Region5Shape11appendSpansERKS1_PKNS0_4SpanES6_(i1, i2, i18, i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore6Region5Shape14shapeOperationINS1_18IntersectOperationEEES1_RKS1_S5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i5 = i4 | 0;
 i6 = i4 + 144 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 i8 = i1 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i1 + 140 | 0;
 HEAP32[i9 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 i10 = i1 + 148 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i2 + 140 >> 2] | 0;
 i12 = HEAP32[i2 + 148 >> 2] | 0;
 i13 = i11 + (i12 << 3) | 0;
 i14 = HEAP32[i3 + 140 >> 2] | 0;
 i15 = HEAP32[i3 + 148 >> 2] | 0;
 i16 = i14 + (i15 << 3) | 0;
 if ((i12 | 0) == 0 | (i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i15 = i2 + 8 | 0;
 i12 = i2 | 0;
 i2 = i3 + 8 | 0;
 i17 = i3 | 0;
 i3 = i5 + 12 | 0;
 i18 = i5 | 0;
 i19 = i5 + 4 | 0;
 i20 = i5 + 8 | 0;
 i5 = i1 | 0;
 i21 = i6;
 i22 = i14;
 i14 = i11;
 i11 = 0;
 i23 = 0;
 i24 = 0;
 i25 = 0;
 L4 : while (1) {
  i26 = HEAP32[i14 >> 2] | 0;
  i27 = HEAP32[i22 >> 2] | 0;
  i28 = i26 - i27 | 0;
  if ((i28 | 0) < 1) {
   i29 = HEAP32[i14 + 4 >> 2] | 0;
   i30 = HEAP32[i15 >> 2] | 0;
   if ((i29 | 0) == (i30 | 0)) {
    i31 = 0;
    i32 = 0;
   } else {
    if (i30 >>> 0 <= i29 >>> 0) {
     i33 = 6;
     break;
    }
    i30 = HEAP32[i12 >> 2] | 0;
    i31 = i30 + (HEAP32[i14 + 12 >> 2] << 2) | 0;
    i32 = i30 + (i29 << 2) | 0;
   }
   i29 = i14 + 8 | 0;
   if ((i28 | 0) > -1) {
    i34 = i29;
    i35 = i32;
    i36 = i31;
    i33 = 9;
   } else {
    i37 = i26;
    i38 = i25;
    i39 = i24;
    i40 = i22;
    i41 = i29;
    i42 = i32;
    i43 = i31;
   }
  } else {
   i34 = i14;
   i35 = i11;
   i36 = i23;
   i33 = 9;
  }
  if ((i33 | 0) == 9) {
   i33 = 0;
   i29 = HEAP32[i22 + 4 >> 2] | 0;
   i26 = HEAP32[i2 >> 2] | 0;
   if ((i29 | 0) == (i26 | 0)) {
    i44 = 0;
    i45 = 0;
   } else {
    if (i26 >>> 0 <= i29 >>> 0) {
     i33 = 11;
     break;
    }
    i26 = HEAP32[i17 >> 2] | 0;
    i44 = i26 + (HEAP32[i22 + 12 >> 2] << 2) | 0;
    i45 = i26 + (i29 << 2) | 0;
   }
   i37 = i27;
   i38 = i44;
   i39 = i45;
   i40 = i22 + 8 | 0;
   i41 = i34;
   i42 = i35;
   i43 = i36;
  }
  HEAP32[i18 >> 2] = i3;
  HEAP32[i19 >> 2] = 32;
  HEAP32[i20 >> 2] = 0;
  do {
   if ((i42 | 0) == (i43 | 0) | (i39 | 0) == (i38 | 0)) {
    i46 = HEAP32[i10 >> 2] | 0;
    i33 = 50;
   } else {
    i27 = 0;
    i29 = i42;
    i26 = i39;
    i28 = 0;
    while (1) {
     i30 = HEAP32[i29 >> 2] | 0;
     i47 = HEAP32[i26 >> 2] | 0;
     i48 = i30 - i47 | 0;
     do {
      if ((i48 | 0) < 1) {
       HEAP32[i6 >> 2] = i30;
       i49 = i27 ^ 1;
       i50 = i29 + 4 | 0;
       if ((i48 | 0) <= -1) {
        i51 = i26;
        i52 = i49;
        i53 = i50;
        i54 = i30;
        break;
       }
       i55 = i49;
       i56 = i50;
       i57 = HEAP32[i26 >> 2] | 0;
       i33 = 19;
      } else {
       i55 = i27;
       i56 = i29;
       i57 = i47;
       i33 = 19;
      }
     } while (0);
     if ((i33 | 0) == 19) {
      i33 = 0;
      HEAP32[i6 >> 2] = i57;
      i51 = i26 + 4 | 0;
      i52 = i55 ^ 2;
      i53 = i56;
      i54 = i57;
     }
     do {
      if ((i52 | 0) == 3 | (i27 | 0) == 3) {
       if ((i28 | 0) != (HEAP32[i19 >> 2] | 0)) {
        HEAP32[(HEAP32[i18 >> 2] | 0) + (i28 << 2) >> 2] = i54;
        i47 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
        HEAP32[i20 >> 2] = i47;
        i58 = i47;
        break;
       }
       i47 = i28 + 1 | 0;
       i30 = HEAP32[i18 >> 2] | 0;
       do {
        if (i30 >>> 0 > i6 >>> 0) {
         i33 = 26;
        } else {
         if ((i30 + (i28 << 2) | 0) >>> 0 <= i6 >>> 0) {
          i33 = 26;
          break;
         }
         i48 = i21 - i30 >> 2;
         i50 = i47 + (i28 >>> 2) | 0;
         i49 = i50 >>> 0 > 16 >>> 0 ? i50 : 16;
         i50 = i49 >>> 0 > i47 >>> 0 ? i49 : i47;
         do {
          if (i28 >>> 0 < i50 >>> 0) {
           if (i50 >>> 0 > 32 >>> 0) {
            if (i50 >>> 0 > 1073741823 >>> 0) {
             i33 = 40;
             break L4;
            }
            i49 = __ZN3WTF18fastMallocGoodSizeEj(i50 << 2) | 0;
            HEAP32[i19 >> 2] = i49 >>> 2;
            i59 = __ZN3WTF10fastMallocEj(i49) | 0;
            HEAP32[i18 >> 2] = i59;
            i60 = i59;
           } else {
            HEAP32[i18 >> 2] = i3;
            HEAP32[i19 >> 2] = 32;
            i60 = i3;
           }
           i59 = i30;
           _memcpy(i60 | 0, i59 | 0, i28 << 2) | 0;
           if ((i3 | 0) == (i30 | 0) | (i30 | 0) == 0) {
            break;
           }
           if ((HEAP32[i18 >> 2] | 0) == (i30 | 0)) {
            HEAP32[i18 >> 2] = 0;
            HEAP32[i19 >> 2] = 0;
           }
           __ZN3WTF8fastFreeEPv(i59);
          }
         } while (0);
         i50 = HEAP32[i18 >> 2] | 0;
         i61 = i50 + (i48 << 2) | 0;
         i62 = i50;
        }
       } while (0);
       if ((i33 | 0) == 26) {
        i33 = 0;
        i50 = i47 + (i28 >>> 2) | 0;
        i59 = i50 >>> 0 > 16 >>> 0 ? i50 : 16;
        i50 = i59 >>> 0 > i47 >>> 0 ? i59 : i47;
        do {
         if (i28 >>> 0 < i50 >>> 0) {
          if (i50 >>> 0 > 32 >>> 0) {
           if (i50 >>> 0 > 1073741823 >>> 0) {
            i33 = 29;
            break L4;
           }
           i59 = __ZN3WTF18fastMallocGoodSizeEj(i50 << 2) | 0;
           HEAP32[i19 >> 2] = i59 >>> 2;
           i49 = __ZN3WTF10fastMallocEj(i59) | 0;
           HEAP32[i18 >> 2] = i49;
           i63 = i49;
          } else {
           HEAP32[i18 >> 2] = i3;
           HEAP32[i19 >> 2] = 32;
           i63 = i3;
          }
          i49 = i30;
          _memcpy(i63 | 0, i49 | 0, i28 << 2) | 0;
          if ((i3 | 0) == (i30 | 0) | (i30 | 0) == 0) {
           break;
          }
          if ((HEAP32[i18 >> 2] | 0) == (i30 | 0)) {
           HEAP32[i18 >> 2] = 0;
           HEAP32[i19 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i49);
         }
        } while (0);
        i61 = i6;
        i62 = HEAP32[i18 >> 2] | 0;
       }
       HEAP32[i62 + (HEAP32[i20 >> 2] << 2) >> 2] = HEAP32[i61 >> 2];
       i30 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
       HEAP32[i20 >> 2] = i30;
       i58 = i30;
      } else {
       i58 = i28;
      }
     } while (0);
     if ((i53 | 0) == (i43 | 0) | (i51 | 0) == (i38 | 0)) {
      break;
     } else {
      i27 = i52;
      i29 = i53;
      i26 = i51;
      i28 = i58;
     }
    }
    i28 = HEAP32[i10 >> 2] | 0;
    if ((i58 | 0) == 0) {
     i46 = i28;
     i33 = 50;
     break;
    }
    i26 = HEAP32[i18 >> 2] | 0;
    i29 = i26 + (i58 << 2) | 0;
    if ((i28 | 0) == 0) {
     i64 = i26;
     i65 = i29;
     i33 = 60;
    } else {
     i66 = i26;
     i67 = i29;
     i68 = i58;
     i69 = i28;
     i33 = 53;
    }
   }
  } while (0);
  do {
   if ((i33 | 0) == 50) {
    i33 = 0;
    if ((i46 | 0) == 0) {
     break;
    }
    i28 = HEAP32[i18 >> 2] | 0;
    i66 = i28;
    i67 = i28;
    i68 = 0;
    i69 = i46;
    i33 = 53;
   }
  } while (0);
  L70 : do {
   if ((i33 | 0) == 53) {
    i33 = 0;
    i28 = _llvm_uadd_with_overflow_i32(i69 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i33 = 54;
     break L4;
    }
    i29 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i28 << 3) + 4 >> 2] | 0;
    if (((HEAP32[i8 >> 2] | 0) - i29 << 2 | 0) != (i67 - i66 | 0)) {
     i64 = i66;
     i65 = i67;
     i33 = 60;
     break;
    }
    if ((i66 | 0) == (i67 | 0)) {
     i70 = i68;
     i33 = 61;
     break;
    }
    i28 = (HEAP32[i7 >> 2] | 0) + (i29 << 2) | 0;
    i29 = i66;
    while (1) {
     if ((HEAP32[i29 >> 2] | 0) != (HEAP32[i28 >> 2] | 0)) {
      i64 = i66;
      i65 = i67;
      i33 = 60;
      break L70;
     }
     i26 = i29 + 4 | 0;
     if ((i26 | 0) == (i67 | 0)) {
      i70 = i68;
      i33 = 61;
      break;
     } else {
      i28 = i28 + 4 | 0;
      i29 = i26;
     }
    }
   }
  } while (0);
  if ((i33 | 0) == 60) {
   i33 = 0;
   __ZN7WebCore6Region5Shape10appendSpanEi(i1, i37);
   __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i5, i64, i65);
   i70 = HEAP32[i20 >> 2] | 0;
   i33 = 61;
  }
  do {
   if ((i33 | 0) == 61) {
    i33 = 0;
    if ((i70 | 0) == 0) {
     break;
    }
    HEAP32[i20 >> 2] = 0;
   }
  } while (0);
  i29 = HEAP32[i18 >> 2] | 0;
  if (!((i3 | 0) == (i29 | 0) | (i29 | 0) == 0)) {
   HEAP32[i18 >> 2] = 0;
   HEAP32[i19 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i29);
  }
  if ((i41 | 0) == (i13 | 0) | (i40 | 0) == (i16 | 0)) {
   i33 = 68;
   break;
  } else {
   i22 = i40;
   i14 = i41;
   i11 = i42;
   i23 = i43;
   i24 = i39;
   i25 = i38;
  }
 }
 if ((i33 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i33 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i33 | 0) == 29) {
  _WTFCrash();
 } else if ((i33 | 0) == 40) {
  _WTFCrash();
 } else if ((i33 | 0) == 54) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i33 | 0) == 68) {
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore6Region9intersectERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 576 | 0;
 i4 = i3 | 0;
 i5 = i3 + 280 | 0;
 i6 = i3 + 296 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 12 | 0;
 if ((HEAP32[i8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 16 | 0;
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i1 | 0, i2 | 0) | 0)) {
  i10 = i4 + 12 | 0;
  i11 = i4 | 0;
  HEAP32[i11 >> 2] = i10;
  i12 = i4 + 4 | 0;
  HEAP32[i12 >> 2] = 32;
  i13 = i4 + 8 | 0;
  i14 = i4 + 152 | 0;
  i15 = i4 + 140 | 0;
  HEAP32[i15 >> 2] = i14;
  i16 = i4 + 144 | 0;
  HEAP32[i16 >> 2] = 16;
  i17 = i4 + 148 | 0;
  HEAP32[i17 >> 2] = 0;
  i18 = i1 + 24 | 0;
  i19 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  HEAP32[i13 >> 2] = i19;
  i19 = i9 | 0;
  i18 = HEAP32[i19 >> 2] | 0;
  i20 = i1 + 28 | 0;
  if ((i18 | 0) == (i20 | 0)) {
   i21 = i1 + 156 | 0;
   i22 = i1 + 28 | 0;
   i23 = i4 + 12 | 0;
   while (1) {
    i24 = i22;
    i25 = HEAP32[i24 >> 2] | 0;
    i26 = i23;
    HEAP32[i24 >> 2] = HEAP32[i26 >> 2];
    HEAP32[i26 >> 2] = i25;
    i25 = i22 + 4 | 0;
    if ((i25 | 0) == (i21 | 0)) {
     break;
    } else {
     i22 = i25;
     i23 = i23 + 4 | 0;
    }
   }
   i23 = i1 + 20 | 0;
   i22 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i12 >> 2];
   i27 = i22;
  } else {
   HEAP32[i11 >> 2] = i18;
   HEAP32[i19 >> 2] = i20;
   i20 = i1 + 156 | 0;
   i19 = i4 + 12 | 0;
   i18 = i1 + 28 | 0;
   while (1) {
    i22 = i18;
    i23 = HEAP32[i22 >> 2] | 0;
    i21 = i19;
    HEAP32[i22 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i21 >> 2] = i23;
    i23 = i18 + 4 | 0;
    if ((i23 | 0) == (i20 | 0)) {
     break;
    } else {
     i19 = i19 + 4 | 0;
     i18 = i23;
    }
   }
   i18 = i1 + 20 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = HEAP32[i12 >> 2];
   i27 = i19;
  }
  HEAP32[i12 >> 2] = i27;
  i27 = i1 + 164 | 0;
  i19 = HEAP32[i27 >> 2] | 0;
  HEAP32[i27 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i17 >> 2] = i19;
  __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 156 | 0, i4 + 140 | 0);
  if ((HEAP32[i17 >> 2] | 0) != 0) {
   HEAP32[i17 >> 2] = 0;
  }
  i17 = HEAP32[i15 >> 2] | 0;
  if (!((i14 | 0) == (i17 | 0) | (i17 | 0) == 0)) {
   HEAP32[i15 >> 2] = 0;
   HEAP32[i16 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i17);
  }
  if ((HEAP32[i13 >> 2] | 0) != 0) {
   HEAP32[i13 >> 2] = 0;
  }
  i13 = HEAP32[i11 >> 2] | 0;
  if (!((i10 | 0) == (i13 | 0) | (i13 | 0) == 0)) {
   HEAP32[i11 >> 2] = 0;
   HEAP32[i12 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
  i13 = i5;
  _memset(i13 | 0, 0, 16) | 0;
  i5 = i1;
  HEAP32[i5 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore6Region5Shape14shapeOperationINS1_18IntersectOperationEEES1_RKS1_S5_(i6, i9, i2 + 16 | 0);
 i2 = i1 + 24 | 0;
 i13 = i6 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i13 >> 2] = i5;
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i12 = i1 + 28 | 0;
 i11 = i6 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 i17 = i6 + 12 | 0;
 i16 = (i10 | 0) == (i17 | 0);
 do {
  if ((i9 | 0) == (i12 | 0)) {
   if (i16) {
    i15 = i1 + 156 | 0;
    i14 = i1 + 28 | 0;
    i4 = i6 + 12 | 0;
    while (1) {
     i19 = i14;
     i27 = HEAP32[i19 >> 2] | 0;
     i18 = i4;
     HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i27;
     i27 = i14 + 4 | 0;
     if ((i27 | 0) == (i15 | 0)) {
      break;
     } else {
      i14 = i27;
      i4 = i4 + 4 | 0;
     }
    }
    i4 = i1 + 20 | 0;
    i14 = i6 + 4 | 0;
    i15 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i14 >> 2] = i15;
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    HEAP32[i11 >> 2] = i17;
    i15 = i1 + 156 | 0;
    i14 = i6 + 12 | 0;
    i4 = i1 + 28 | 0;
    while (1) {
     i27 = i4;
     i18 = HEAP32[i27 >> 2] | 0;
     i19 = i14;
     HEAP32[i27 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i19 >> 2] = i18;
     i18 = i4 + 4 | 0;
     if ((i18 | 0) == (i15 | 0)) {
      break;
     } else {
      i14 = i14 + 4 | 0;
      i4 = i18;
     }
    }
    i4 = i1 + 20 | 0;
    i14 = i6 + 4 | 0;
    i15 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i14 >> 2] = i15;
    break;
   }
  } else {
   if (!i16) {
    HEAP32[i5 >> 2] = i10;
    HEAP32[i11 >> 2] = i9;
    i15 = i1 + 20 | 0;
    i14 = i6 + 4 | 0;
    i4 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i14 >> 2] = i4;
    break;
   }
   HEAP32[i11 >> 2] = i9;
   HEAP32[i5 >> 2] = i12;
   i4 = i1 + 156 | 0;
   i14 = i6 + 12 | 0;
   i15 = i1 + 28 | 0;
   while (1) {
    i18 = i15;
    i19 = HEAP32[i18 >> 2] | 0;
    i27 = i14;
    HEAP32[i18 >> 2] = HEAP32[i27 >> 2];
    HEAP32[i27 >> 2] = i19;
    i19 = i15 + 4 | 0;
    if ((i19 | 0) == (i4 | 0)) {
     break;
    } else {
     i14 = i14 + 4 | 0;
     i15 = i19;
    }
   }
   i15 = i1 + 20 | 0;
   i14 = i6 + 4 | 0;
   i4 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i14 >> 2] = i4;
  }
 } while (0);
 i12 = i1 + 164 | 0;
 i9 = i6 + 148 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i9 >> 2] = i10;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 156 | 0, i6 + 140 | 0);
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i28 = 0;
  i29 = 0;
  i30 = 0;
  i31 = 0;
 } else {
  i12 = HEAP32[i1 + 156 >> 2] | 0;
  i16 = HEAP32[i12 >> 2] | 0;
  i4 = i10 - 1 | 0;
  i10 = i12 + (i4 << 3) | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  L54 : do {
   if ((i4 | 0) == 0) {
    i32 = -2147483648;
    i33 = 2147483647;
   } else {
    i15 = HEAP32[i2 >> 2] | 0;
    i19 = -2147483648;
    i27 = 2147483647;
    i18 = i12;
    L56 : while (1) {
     i20 = HEAP32[i18 + 4 >> 2] | 0;
     do {
      if ((i20 | 0) == (i15 | 0)) {
       i34 = i27;
       i35 = i19;
      } else {
       if (i15 >>> 0 <= i20 >>> 0) {
        break L56;
       }
       i23 = HEAP32[i5 >> 2] | 0;
       i21 = i23 + (i20 << 2) | 0;
       i22 = i23 + ((HEAP32[i18 + 12 >> 2] | 0) - 1 << 2) | 0;
       if ((i21 | 0) == 0 | (i22 | 0) == 0) {
        i34 = i27;
        i35 = i19;
        break;
       }
       i23 = HEAP32[i21 >> 2] | 0;
       i21 = HEAP32[i22 >> 2] | 0;
       i34 = (i23 | 0) < (i27 | 0) ? i23 : i27;
       i35 = (i21 | 0) > (i19 | 0) ? i21 : i19;
      }
     } while (0);
     i20 = i18 + 8 | 0;
     if ((i20 | 0) == (i10 | 0)) {
      i32 = i35;
      i33 = i34;
      break L54;
     } else {
      i19 = i35;
      i27 = i34;
      i18 = i20;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  i28 = i33;
  i29 = i16;
  i30 = i32 - i33 | 0;
  i31 = i14 - i16 | 0;
 }
 HEAP32[i1 >> 2] = i28;
 HEAP32[i1 + 4 >> 2] = i29;
 HEAP32[i7 >> 2] = i30;
 HEAP32[i8 >> 2] = i31;
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = i6 + 140 | 0;
 i31 = HEAP32[i9 >> 2] | 0;
 if (!((i6 + 152 | 0) == (i31 | 0) | (i31 | 0) == 0)) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i6 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i31);
 }
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = HEAP32[i11 >> 2] | 0;
 if ((i17 | 0) == (i13 | 0) | (i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Region8subtractERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 if ((HEAP32[i5 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i6 = i1 + 12 | 0;
 if ((HEAP32[i6 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i1 | 0, i2 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 16 | 0;
 __ZN7WebCore6Region5Shape14shapeOperationINS1_17SubtractOperationEEES1_RKS1_S5_(i4, i7, i2 + 16 | 0);
 i2 = i1 + 24 | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i9;
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = i1 + 28 | 0;
 i11 = i4 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i4 + 12 | 0;
 i14 = (i12 | 0) == (i13 | 0);
 do {
  if ((i7 | 0) == (i10 | 0)) {
   if (i14) {
    i15 = i1 + 156 | 0;
    i16 = i1 + 28 | 0;
    i17 = i4 + 12 | 0;
    while (1) {
     i18 = i16;
     i19 = HEAP32[i18 >> 2] | 0;
     i20 = i17;
     HEAP32[i18 >> 2] = HEAP32[i20 >> 2];
     HEAP32[i20 >> 2] = i19;
     i19 = i16 + 4 | 0;
     if ((i19 | 0) == (i15 | 0)) {
      break;
     } else {
      i16 = i19;
      i17 = i17 + 4 | 0;
     }
    }
    i17 = i1 + 20 | 0;
    i16 = i4 + 4 | 0;
    i15 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i15;
    break;
   } else {
    HEAP32[i9 >> 2] = i12;
    HEAP32[i11 >> 2] = i13;
    i15 = i1 + 156 | 0;
    i16 = i4 + 12 | 0;
    i17 = i1 + 28 | 0;
    while (1) {
     i19 = i17;
     i20 = HEAP32[i19 >> 2] | 0;
     i18 = i16;
     HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i20;
     i20 = i17 + 4 | 0;
     if ((i20 | 0) == (i15 | 0)) {
      break;
     } else {
      i16 = i16 + 4 | 0;
      i17 = i20;
     }
    }
    i17 = i1 + 20 | 0;
    i16 = i4 + 4 | 0;
    i15 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i15;
    break;
   }
  } else {
   if (!i14) {
    HEAP32[i9 >> 2] = i12;
    HEAP32[i11 >> 2] = i7;
    i15 = i1 + 20 | 0;
    i16 = i4 + 4 | 0;
    i17 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i17;
    break;
   }
   HEAP32[i11 >> 2] = i7;
   HEAP32[i9 >> 2] = i10;
   i17 = i1 + 156 | 0;
   i16 = i4 + 12 | 0;
   i15 = i1 + 28 | 0;
   while (1) {
    i20 = i15;
    i18 = HEAP32[i20 >> 2] | 0;
    i19 = i16;
    HEAP32[i20 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i19 >> 2] = i18;
    i18 = i15 + 4 | 0;
    if ((i18 | 0) == (i17 | 0)) {
     break;
    } else {
     i16 = i16 + 4 | 0;
     i15 = i18;
    }
   }
   i15 = i1 + 20 | 0;
   i16 = i4 + 4 | 0;
   i17 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i17;
  }
 } while (0);
 i10 = i1 + 164 | 0;
 i7 = i4 + 148 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i12;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 156 | 0, i4 + 140 | 0);
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i21 = 0;
  i22 = 0;
  i23 = 0;
  i24 = 0;
 } else {
  i10 = HEAP32[i1 + 156 >> 2] | 0;
  i14 = HEAP32[i10 >> 2] | 0;
  i17 = i12 - 1 | 0;
  i12 = i10 + (i17 << 3) | 0;
  i16 = HEAP32[i12 >> 2] | 0;
  L37 : do {
   if ((i17 | 0) == 0) {
    i25 = -2147483648;
    i26 = 2147483647;
   } else {
    i15 = HEAP32[i2 >> 2] | 0;
    i18 = -2147483648;
    i19 = 2147483647;
    i20 = i10;
    L39 : while (1) {
     i27 = HEAP32[i20 + 4 >> 2] | 0;
     do {
      if ((i27 | 0) == (i15 | 0)) {
       i28 = i19;
       i29 = i18;
      } else {
       if (i15 >>> 0 <= i27 >>> 0) {
        break L39;
       }
       i30 = HEAP32[i9 >> 2] | 0;
       i31 = i30 + (i27 << 2) | 0;
       i32 = i30 + ((HEAP32[i20 + 12 >> 2] | 0) - 1 << 2) | 0;
       if ((i31 | 0) == 0 | (i32 | 0) == 0) {
        i28 = i19;
        i29 = i18;
        break;
       }
       i30 = HEAP32[i31 >> 2] | 0;
       i31 = HEAP32[i32 >> 2] | 0;
       i28 = (i30 | 0) < (i19 | 0) ? i30 : i19;
       i29 = (i31 | 0) > (i18 | 0) ? i31 : i18;
      }
     } while (0);
     i27 = i20 + 8 | 0;
     if ((i27 | 0) == (i12 | 0)) {
      i25 = i29;
      i26 = i28;
      break L37;
     } else {
      i18 = i29;
      i19 = i28;
      i20 = i27;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  i21 = i26;
  i22 = i14;
  i23 = i25 - i26 | 0;
  i24 = i16 - i14 | 0;
 }
 HEAP32[i1 >> 2] = i21;
 HEAP32[i1 + 4 >> 2] = i22;
 HEAP32[i5 >> 2] = i23;
 HEAP32[i6 >> 2] = i24;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = i4 + 140 | 0;
 i24 = HEAP32[i7 >> 2] | 0;
 if (!((i4 + 152 | 0) == (i24 | 0) | (i24 | 0) == 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i4 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i24);
 }
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = HEAP32[i11 >> 2] | 0;
 if ((i13 | 0) == (i8 | 0) | (i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i8);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Region5uniteERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 164 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) >>> 0 < 3 >>> 0) {
   if ((HEAP32[i1 + 24 >> 2] | 0) >>> 0 >= 3 >>> 0) {
    break;
   }
   if (!(__ZNK7WebCore7IntRect8containsERKS0_(i1 | 0, i2 | 0) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i2 + 164 >> 2] | 0) >>> 0 < 3 >>> 0) {
   if ((HEAP32[i2 + 24 >> 2] | 0) >>> 0 >= 3 >>> 0) {
    break;
   }
   if (!(__ZNK7WebCore7IntRect8containsERKS0_(i2 | 0, i1 | 0) | 0)) {
    break;
   }
   __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEEaSERKS2_(i1 + 16 | 0, i2 + 16 | 0) | 0;
   __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEEaSERKS5_(i1 + 156 | 0, i2 + 156 | 0) | 0;
   i6 = i1;
   i7 = i2;
   HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i5 >> 2] | 0) >>> 0 < 3 >>> 0) {
  if ((HEAP32[i1 + 24 >> 2] | 0) >>> 0 >= 3 >>> 0) {
   i8 = 12;
  }
 } else {
  i8 = 12;
 }
 do {
  if ((i8 | 0) == 12) {
   if (!(__ZNK7WebCore7IntRect8containsERKS0_(i1 | 0, i2 | 0) | 0)) {
    break;
   }
   if (!(__ZN7WebCore6Region5Shape13compareShapesINS1_24CompareContainsOperationEEEbRKS1_S5_(i1 + 16 | 0, i2 + 16 | 0) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i8 = i1 + 16 | 0;
 __ZN7WebCore6Region5Shape14shapeOperationINS1_14UnionOperationEEES1_RKS1_S5_(i4, i8, i2 + 16 | 0);
 i7 = i1 + 24 | 0;
 i6 = i4 + 8 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i9;
 i9 = i8 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i7 = i1 + 28 | 0;
 i10 = i4 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i4 + 12 | 0;
 i13 = (i11 | 0) == (i12 | 0);
 do {
  if ((i8 | 0) == (i7 | 0)) {
   if (i13) {
    i14 = i1 + 156 | 0;
    i15 = i1 + 28 | 0;
    i16 = i4 + 12 | 0;
    while (1) {
     i17 = i15;
     i18 = HEAP32[i17 >> 2] | 0;
     i19 = i16;
     HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i19 >> 2] = i18;
     i18 = i15 + 4 | 0;
     if ((i18 | 0) == (i14 | 0)) {
      break;
     } else {
      i15 = i18;
      i16 = i16 + 4 | 0;
     }
    }
    i16 = i1 + 20 | 0;
    i15 = i4 + 4 | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i14;
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    HEAP32[i10 >> 2] = i12;
    i14 = i1 + 156 | 0;
    i15 = i4 + 12 | 0;
    i16 = i1 + 28 | 0;
    while (1) {
     i18 = i16;
     i19 = HEAP32[i18 >> 2] | 0;
     i17 = i15;
     HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i17 >> 2] = i19;
     i19 = i16 + 4 | 0;
     if ((i19 | 0) == (i14 | 0)) {
      break;
     } else {
      i15 = i15 + 4 | 0;
      i16 = i19;
     }
    }
    i16 = i1 + 20 | 0;
    i15 = i4 + 4 | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i14;
    break;
   }
  } else {
   if (!i13) {
    HEAP32[i9 >> 2] = i11;
    HEAP32[i10 >> 2] = i8;
    i14 = i1 + 20 | 0;
    i15 = i4 + 4 | 0;
    i16 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i16;
    break;
   }
   HEAP32[i10 >> 2] = i8;
   HEAP32[i9 >> 2] = i7;
   i16 = i1 + 156 | 0;
   i15 = i4 + 12 | 0;
   i14 = i1 + 28 | 0;
   while (1) {
    i19 = i14;
    i17 = HEAP32[i19 >> 2] | 0;
    i18 = i15;
    HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i18 >> 2] = i17;
    i17 = i14 + 4 | 0;
    if ((i17 | 0) == (i16 | 0)) {
     break;
    } else {
     i15 = i15 + 4 | 0;
     i14 = i17;
    }
   }
   i14 = i1 + 20 | 0;
   i15 = i4 + 4 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i15 >> 2] = i16;
  }
 } while (0);
 i7 = i4 + 148 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i9;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 156 | 0, i4 + 140 | 0);
 __ZN7WebCore7IntRect5uniteERKS0_(i1 | 0, i2 | 0);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = i4 + 140 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if (!((i4 + 152 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i4 + 144 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i12 | 0) == (i6 | 0) | (i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore6Region5Shape13compareShapesINS1_24CompareContainsOperationEEEbRKS1_S5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = HEAP32[i1 + 140 >> 2] | 0;
 i4 = i3 + (HEAP32[i1 + 148 >> 2] << 3) | 0;
 i5 = HEAP32[i2 + 140 >> 2] | 0;
 i6 = i5 + (HEAP32[i2 + 148 >> 2] << 3) | 0;
 i7 = i1 + 8 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 | 0;
 i2 = i1 | 0;
 i1 = i3;
 i3 = i5;
 i5 = 0;
 L1 : while (1) {
  i10 = (i3 | 0) == (i6 | 0);
  i11 = i3 + 8 | 0;
  i12 = (i11 | 0) != (i6 | 0);
  i13 = i3 | 0;
  i14 = i11 | 0;
  i15 = i3 + 4 | 0;
  i16 = i3 + 12 | 0;
  i17 = i1;
  i18 = i5;
  while (1) {
   i19 = i17 + 8 | 0;
   if (!(i12 & (((i17 | 0) == (i4 | 0) | (i19 | 0) == (i4 | 0) | i10) ^ 1))) {
    i20 = 22;
    break L1;
   }
   i21 = HEAP32[i17 >> 2] | 0;
   i22 = HEAP32[i19 >> 2] | 0;
   i23 = HEAP32[i13 >> 2] | 0;
   i24 = HEAP32[i14 >> 2] | 0;
   i25 = HEAP32[i17 + 4 >> 2] | 0;
   i26 = HEAP32[i7 >> 2] | 0;
   if ((i25 | 0) == (i26 | 0)) {
    i27 = 0;
    i28 = 0;
   } else {
    if (i26 >>> 0 <= i25 >>> 0) {
     i20 = 6;
     break L1;
    }
    i26 = HEAP32[i2 >> 2] | 0;
    i27 = i26 + (HEAP32[i17 + 12 >> 2] << 2) | 0;
    i28 = i26 + (i25 << 2) | 0;
   }
   i25 = HEAP32[i15 >> 2] | 0;
   i26 = HEAP32[i8 >> 2] | 0;
   if ((i25 | 0) == (i26 | 0)) {
    i29 = 0;
    i30 = 0;
   } else {
    if (i26 >>> 0 <= i25 >>> 0) {
     i20 = 11;
     break L1;
    }
    i26 = HEAP32[i9 >> 2] | 0;
    i31 = HEAP32[i16 >> 2] | 0;
    if ((i23 | 0) >= (i21 | 0) | i18 | (i25 | 0) == (i31 | 0)) {
     i29 = i26 + (i25 << 2) | 0;
     i30 = i26 + (i31 << 2) | 0;
    } else {
     i32 = 0;
     i20 = 24;
     break L1;
    }
   }
   i33 = (i28 | 0) != (i27 | 0);
   L15 : do {
    if ((i24 | 0) > (i21 | 0) & (i23 | 0) < (i22 | 0)) {
     i31 = i28;
     i26 = i29;
     L16 : while (1) {
      i25 = i26 + 4 | 0;
      if ((i26 | 0) == (i30 | 0)) {
       break L15;
      } else {
       i34 = i31;
      }
      while (1) {
       if ((i34 | 0) == (i27 | 0)) {
        break L16;
       }
       i35 = HEAP32[i34 + 4 >> 2] | 0;
       i36 = HEAP32[i25 >> 2] | 0;
       if ((HEAP32[i26 >> 2] | 0) < (HEAP32[i34 >> 2] | 0)) {
        i32 = 0;
        i20 = 25;
        break L1;
       }
       if ((i35 | 0) < (i36 | 0)) {
        i34 = i34 + 8 | 0;
       } else {
        break;
       }
      }
      i31 = (i36 | 0) < (i35 | 0) ? i34 : i34 + 8 | 0;
      i26 = i26 + 8 | 0;
     }
     if ((i26 | 0) != (i30 | 0)) {
      i32 = 0;
      i20 = 26;
      break L1;
     }
    }
   } while (0);
   if ((i22 | 0) < (i24 | 0)) {
    i17 = i19;
    i18 = i33;
   } else {
    break;
   }
  }
  i1 = (i24 | 0) < (i22 | 0) ? i17 : i19;
  i3 = i11;
  i5 = i33;
 }
 if ((i20 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 22) {
  i32 = i10 | (i11 | 0) == (i6 | 0);
  return i32 | 0;
 } else if ((i20 | 0) == 24) {
  return i32 | 0;
 } else if ((i20 | 0) == 25) {
  return i32 | 0;
 } else if ((i20 | 0) == 26) {
  return i32 | 0;
 }
 return 0;
}
function __ZNK7WebCore6Region5rectsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = HEAP32[i2 + 156 >> 2] | 0;
 i9 = HEAP32[i2 + 164 >> 2] | 0;
 i10 = i8 + (i9 << 3) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 24 | 0;
 i11 = i4 | 0;
 i12 = i4 + 4 | 0;
 i13 = i4 + 8 | 0;
 i14 = i4 + 12 | 0;
 i15 = i4;
 i16 = i4;
 i17 = i2 + 16 | 0;
 i2 = i8;
 i8 = 0;
 i18 = 0;
 L4 : while (1) {
  i19 = i2 + 8 | 0;
  if ((i19 | 0) == (i10 | 0)) {
   i20 = 19;
   break;
  }
  i21 = HEAP32[i2 >> 2] | 0;
  i22 = (HEAP32[i19 >> 2] | 0) - i21 | 0;
  i23 = HEAP32[i2 + 4 >> 2] | 0;
  i24 = HEAP32[i9 >> 2] | 0;
  if ((i23 | 0) == (i24 | 0)) {
   i2 = i19;
   i8 = i8;
   i18 = i18;
   continue;
  }
  if (i24 >>> 0 <= i23 >>> 0) {
   i20 = 6;
   break;
  }
  i24 = HEAP32[i17 >> 2] | 0;
  i25 = HEAP32[i2 + 12 >> 2] | 0;
  i26 = i24 + (i25 << 2) | 0;
  if ((i23 | 0) == (i25 | 0)) {
   i2 = i19;
   i8 = i8;
   i18 = i18;
   continue;
  } else {
   i27 = i24 + (i23 << 2) | 0;
   i28 = i8;
   i29 = i18;
  }
  while (1) {
   i23 = i27 + 4 | 0;
   if ((i23 | 0) == (i26 | 0)) {
    i2 = i19;
    i8 = i28;
    i18 = i29;
    continue L4;
   }
   i24 = HEAP32[i27 >> 2] | 0;
   i25 = (HEAP32[i23 >> 2] | 0) - i24 | 0;
   HEAP32[i11 >> 2] = i24;
   HEAP32[i12 >> 2] = i21;
   HEAP32[i13 >> 2] = i25;
   HEAP32[i14 >> 2] = i22;
   if ((i28 | 0) == (HEAP32[i6 >> 2] | 0)) {
    i25 = i28 + 1 | 0;
    do {
     if (i29 >>> 0 > i4 >>> 0) {
      i20 = 13;
     } else {
      if ((i29 + (i28 << 4) | 0) >>> 0 <= i4 >>> 0) {
       i20 = 13;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i25);
      i24 = HEAP32[i5 >> 2] | 0;
      i30 = i24 + (i15 - i29 >> 4 << 4) | 0;
      i31 = i24;
     }
    } while (0);
    if ((i20 | 0) == 13) {
     i20 = 0;
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i25);
     i30 = i4;
     i31 = HEAP32[i5 >> 2] | 0;
    }
    i24 = HEAP32[i7 >> 2] | 0;
    i23 = i31 + (i24 << 4) | 0;
    i32 = i30;
    HEAP32[i23 >> 2] = HEAP32[i32 >> 2];
    HEAP32[i23 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
    HEAP32[i23 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
    HEAP32[i23 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
    i33 = i31;
    i34 = i24;
   } else {
    i24 = i29 + (i28 << 4) | 0;
    HEAP32[i24 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i24 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    HEAP32[i24 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
    HEAP32[i24 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    i33 = i29;
    i34 = i28;
   }
   i24 = i34 + 1 | 0;
   HEAP32[i7 >> 2] = i24;
   i32 = i27 + 8 | 0;
   if ((i32 | 0) == (i26 | 0)) {
    i2 = i19;
    i8 = i24;
    i18 = i33;
    continue L4;
   } else {
    i27 = i32;
    i28 = i24;
    i29 = i33;
   }
  }
 }
 if ((i20 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i20 | 0) == 19) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore6Region5Shape13compareShapesINS1_26CompareIntersectsOperationEEEbRKS1_S5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i3 = HEAP32[i1 + 140 >> 2] | 0;
 i4 = i3 + (HEAP32[i1 + 148 >> 2] << 3) | 0;
 i5 = HEAP32[i2 + 140 >> 2] | 0;
 i6 = i5 + (HEAP32[i2 + 148 >> 2] << 3) | 0;
 i7 = i1 + 8 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 | 0;
 i2 = i1 | 0;
 i1 = i3;
 i3 = i5;
 L1 : while (1) {
  i5 = (i3 | 0) == (i6 | 0);
  i10 = i3 + 8 | 0;
  i11 = (i10 | 0) != (i6 | 0);
  i12 = i3 | 0;
  i13 = i10 | 0;
  i14 = i3 + 4 | 0;
  i15 = i3 + 12 | 0;
  i16 = i1;
  while (1) {
   i17 = i16 + 8 | 0;
   if (!(i11 & (((i16 | 0) == (i4 | 0) | (i17 | 0) == (i4 | 0) | i5) ^ 1))) {
    i18 = 0;
    i19 = 22;
    break L1;
   }
   i20 = HEAP32[i16 >> 2] | 0;
   i21 = HEAP32[i17 >> 2] | 0;
   i22 = HEAP32[i12 >> 2] | 0;
   i23 = HEAP32[i13 >> 2] | 0;
   i24 = HEAP32[i16 + 4 >> 2] | 0;
   i25 = HEAP32[i7 >> 2] | 0;
   if ((i24 | 0) == (i25 | 0)) {
    i26 = 0;
    i27 = 0;
   } else {
    if (i25 >>> 0 <= i24 >>> 0) {
     i19 = 6;
     break L1;
    }
    i25 = HEAP32[i2 >> 2] | 0;
    i26 = i25 + (HEAP32[i16 + 12 >> 2] << 2) | 0;
    i27 = i25 + (i24 << 2) | 0;
   }
   i24 = HEAP32[i14 >> 2] | 0;
   i25 = HEAP32[i8 >> 2] | 0;
   if ((i24 | 0) == (i25 | 0)) {
    i28 = 0;
    i29 = 0;
   } else {
    if (i25 >>> 0 <= i24 >>> 0) {
     i19 = 10;
     break L1;
    }
    i25 = HEAP32[i9 >> 2] | 0;
    i28 = i25 + (HEAP32[i15 >> 2] << 2) | 0;
    i29 = i25 + (i24 << 2) | 0;
   }
   L14 : do {
    if ((i23 | 0) > (i20 | 0) & (i22 | 0) < (i21 | 0)) {
     i24 = i27;
     i25 = i29;
     while (1) {
      i30 = i25 + 4 | 0;
      if ((i25 | 0) == (i28 | 0)) {
       break L14;
      } else {
       i31 = i24;
      }
      while (1) {
       if ((i31 | 0) == (i26 | 0)) {
        break L14;
       }
       i32 = HEAP32[i31 + 4 >> 2] | 0;
       i33 = HEAP32[i30 >> 2] | 0;
       if ((i33 | 0) > (HEAP32[i31 >> 2] | 0) & (HEAP32[i25 >> 2] | 0) < (i32 | 0)) {
        i18 = 1;
        i19 = 21;
        break L1;
       }
       if ((i32 | 0) < (i33 | 0)) {
        i31 = i31 + 8 | 0;
       } else {
        break;
       }
      }
      i24 = (i33 | 0) < (i32 | 0) ? i31 : i31 + 8 | 0;
      i25 = i25 + 8 | 0;
     }
    }
   } while (0);
   if ((i21 | 0) < (i23 | 0)) {
    i16 = i17;
   } else {
    break;
   }
  }
  i1 = (i23 | 0) < (i21 | 0) ? i16 : i17;
  i3 = i10;
 }
 if ((i19 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i19 | 0) == 10) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i19 | 0) == 21) {
  return i18 | 0;
 } else if ((i19 | 0) == 22) {
  return i18 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE4swapERS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 8 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 i5 = i1 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i3 = i1 + 12 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i2 + 12 | 0;
 i9 = (i7 | 0) == (i8 | 0);
 if ((i4 | 0) != (i3 | 0)) {
  if (!i9) {
   HEAP32[i5 >> 2] = i7;
   HEAP32[i6 >> 2] = i4;
   i10 = i1 + 4 | 0;
   i11 = i2 + 4 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i11 >> 2] = i12;
   return;
  }
  HEAP32[i6 >> 2] = i4;
  HEAP32[i5 >> 2] = i3;
  i3 = i1 + 140 | 0;
  i4 = i2 + 12 | 0;
  i12 = i1 + 12 | 0;
  while (1) {
   i11 = i12;
   i10 = HEAP32[i11 >> 2] | 0;
   i13 = i4;
   HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i10;
   i10 = i12 + 4 | 0;
   if ((i10 | 0) == (i3 | 0)) {
    break;
   } else {
    i4 = i4 + 4 | 0;
    i12 = i10;
   }
  }
  i12 = i1 + 4 | 0;
  i4 = i2 + 4 | 0;
  i3 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = i3;
  return;
 }
 if (i9) {
  i9 = i1 + 140 | 0;
  i3 = i1 + 12 | 0;
  i4 = i2 + 12 | 0;
  while (1) {
   i12 = i3;
   i10 = HEAP32[i12 >> 2] | 0;
   i13 = i4;
   HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i13 >> 2] = i10;
   i10 = i3 + 4 | 0;
   if ((i10 | 0) == (i9 | 0)) {
    break;
   } else {
    i3 = i10;
    i4 = i4 + 4 | 0;
   }
  }
  i4 = i1 + 4 | 0;
  i3 = i2 + 4 | 0;
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i3 >> 2] = i9;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  HEAP32[i6 >> 2] = i8;
  i8 = i1 + 140 | 0;
  i6 = i2 + 12 | 0;
  i7 = i1 + 12 | 0;
  while (1) {
   i5 = i7;
   i9 = HEAP32[i5 >> 2] | 0;
   i3 = i6;
   HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i3 >> 2] = i9;
   i9 = i7 + 4 | 0;
   if ((i9 | 0) == (i8 | 0)) {
    break;
   } else {
    i6 = i6 + 4 | 0;
    i7 = i9;
   }
  }
  i7 = i1 + 4 | 0;
  i1 = i2 + 4 | 0;
  i2 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore6Region5Shape11appendSpansERKS1_PKNS0_4SpanES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 if ((i3 | 0) == (i4 | 0)) {
  return;
 }
 i5 = i2 + 8 | 0;
 i6 = i1 + 148 | 0;
 i7 = i1 | 0;
 i8 = i1 + 140 | 0;
 i9 = i1 + 8 | 0;
 i10 = i1 | 0;
 i11 = i2 | 0;
 i2 = i3;
 L4 : while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  i12 = HEAP32[i2 + 4 >> 2] | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i12 | 0) == (i13 | 0)) {
   i14 = 0;
   i15 = 0;
  } else {
   if (i13 >>> 0 <= i12 >>> 0) {
    i16 = 5;
    break;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   i14 = i13 + (HEAP32[i2 + 12 >> 2] << 2) | 0;
   i15 = i13 + (i12 << 2) | 0;
  }
  i12 = HEAP32[i6 >> 2] | 0;
  L10 : do {
   if ((i12 | 0) == 0) {
    i16 = 15;
   } else {
    i13 = _llvm_uadd_with_overflow_i32(i12 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     i16 = 9;
     break L4;
    }
    i17 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i13 << 3) + 4 >> 2] | 0;
    if (((HEAP32[i9 >> 2] | 0) - i17 << 2 | 0) != (i14 - i15 | 0)) {
     i16 = 15;
     break;
    }
    if ((i15 | 0) == (i14 | 0)) {
     break;
    }
    i13 = (HEAP32[i10 >> 2] | 0) + (i17 << 2) | 0;
    i17 = i15;
    while (1) {
     if ((HEAP32[i17 >> 2] | 0) != (HEAP32[i13 >> 2] | 0)) {
      i16 = 15;
      break L10;
     }
     i18 = i17 + 4 | 0;
     if ((i18 | 0) == (i14 | 0)) {
      break;
     } else {
      i13 = i13 + 4 | 0;
      i17 = i18;
     }
    }
   }
  } while (0);
  if ((i16 | 0) == 15) {
   i16 = 0;
   __ZN7WebCore6Region5Shape10appendSpanEi(i1, i3);
   __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i7, i15, i14);
  }
  i12 = i2 + 8 | 0;
  if ((i12 | 0) == (i4 | 0)) {
   i16 = 18;
   break;
  } else {
   i2 = i12;
  }
 }
 if ((i16 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i16 | 0) == 18) {
  return;
 }
}
function __ZNK7WebCore6Region8containsERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) > (i3 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if (((HEAP32[i1 + 8 >> 2] | 0) + i2 | 0) <= (i3 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) > (i4 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if (((HEAP32[i1 + 12 >> 2] | 0) + i2 | 0) <= (i4 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 i6 = HEAP32[i1 + 164 >> 2] | 0;
 i7 = i2 + (i6 << 3) | 0;
 if ((i6 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1 + 24 | 0;
 i8 = i1 + 16 | 0;
 i1 = i2;
 L16 : while (1) {
  i2 = i1 + 8 | 0;
  if ((i2 | 0) == (i7 | 0)) {
   i5 = 0;
   i9 = 23;
   break;
  }
  if ((HEAP32[i1 >> 2] | 0) > (i4 | 0)) {
   i5 = 0;
   i9 = 24;
   break;
  }
  if ((HEAP32[i2 >> 2] | 0) <= (i4 | 0)) {
   i1 = i2;
   continue;
  }
  i10 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = HEAP32[i6 >> 2] | 0;
  if ((i10 | 0) == (i11 | 0)) {
   i12 = 0;
   i13 = 0;
  } else {
   if (i11 >>> 0 <= i10 >>> 0) {
    i9 = 12;
    break;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   i12 = i11 + (HEAP32[i1 + 12 >> 2] << 2) | 0;
   i13 = i11 + (i10 << 2) | 0;
  }
  i10 = i13;
  while (1) {
   if ((i10 | 0) == (i12 | 0)) {
    i1 = i2;
    continue L16;
   }
   i11 = i10 + 4 | 0;
   if ((i11 | 0) == (i12 | 0)) {
    i1 = i2;
    continue L16;
   }
   if ((HEAP32[i10 >> 2] | 0) > (i3 | 0)) {
    i1 = i2;
    continue L16;
   }
   if ((HEAP32[i11 >> 2] | 0) > (i3 | 0)) {
    i5 = 1;
    i9 = 20;
    break L16;
   } else {
    i10 = i10 + 8 | 0;
   }
  }
 }
 if ((i9 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 20) {
  return i5 | 0;
 } else if ((i9 | 0) == 23) {
  return i5 | 0;
 } else if ((i9 | 0) == 24) {
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEEaSERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i12 = i1 + 12 | 0;
     if ((i12 | 0) == (i11 | 0) | (i11 | 0) == 0) {
      i13 = i11;
     } else {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i11);
      i13 = HEAP32[i10 >> 2] | 0;
     }
     if ((i13 | 0) != 0) {
      break;
     }
     HEAP32[i10 >> 2] = i12;
     HEAP32[i8 >> 2] = 16;
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i13 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i13 >> 2] | 0, i7 << 3 | 0) | 0;
 i7 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i6 = i7 + (i4 << 3) | 0;
 if ((i13 | 0) == (i4 | 0)) {
  i14 = i13;
 } else {
  i4 = i7 + (i13 << 3) | 0;
  i7 = (HEAP32[i2 >> 2] | 0) + (i13 << 3) | 0;
  while (1) {
   i13 = i4;
   i2 = i7;
   i8 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i2 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i2 + 4 >> 2] = i8;
   i8 = i4 + 8 | 0;
   if ((i8 | 0) == (i6 | 0)) {
    break;
   } else {
    i4 = i8;
    i7 = i7 + 8 | 0;
   }
  }
  i14 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i14;
 return i1 | 0;
}
function __ZN7WebCore6Region5Shape10appendSpanEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i1 + 140 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i7;
 i7 = i1 + 148 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i1 + 144 >> 2] | 0)) {
  i1 = (HEAP32[i6 >> 2] | 0) + (i2 << 3) | 0;
  i8 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i1 + 4 >> 2] = i8;
  i9 = HEAP32[i7 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i7 >> 2] = i10;
  STACKTOP = i3;
  return;
 }
 i8 = i2 + 1 | 0;
 i1 = i6 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 do {
  if (i11 >>> 0 > i5 >>> 0) {
   i12 = 5;
  } else {
   if ((i11 + (i2 << 3) | 0) >>> 0 <= i5 >>> 0) {
    i12 = 5;
    break;
   }
   i13 = i8 + (i2 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i14 >>> 0 > i8 >>> 0 ? i14 : i8);
   i14 = HEAP32[i1 >> 2] | 0;
   i15 = i14 + (i4 - i11 >> 3 << 3) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i12 | 0) == 5) {
  i12 = i8 + (i2 >>> 2) | 0;
  i2 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
  __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i6, i2 >>> 0 > i8 >>> 0 ? i2 : i8);
  i15 = i5;
  i16 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i15;
 i15 = i16 + (HEAP32[i7 >> 2] << 3) | 0;
 i16 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = i16;
 i9 = HEAP32[i7 >> 2] | 0;
 i10 = i9 + 1 | 0;
 HEAP32[i7 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore6Region5Shape6boundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = HEAP32[i2 + 148 >> 2] | 0;
 if ((i3 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  return;
 }
 i4 = HEAP32[i2 + 140 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 - 1 | 0;
 i3 = i4 + (i6 << 3) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 L5 : do {
  if ((i6 | 0) == 0) {
   i8 = -2147483648;
   i9 = 2147483647;
  } else {
   i10 = HEAP32[i2 + 8 >> 2] | 0;
   i11 = i2 | 0;
   i12 = -2147483648;
   i13 = 2147483647;
   i14 = i4;
   L7 : while (1) {
    i15 = HEAP32[i14 + 4 >> 2] | 0;
    do {
     if ((i15 | 0) == (i10 | 0)) {
      i16 = i13;
      i17 = i12;
     } else {
      if (i10 >>> 0 <= i15 >>> 0) {
       break L7;
      }
      i18 = HEAP32[i11 >> 2] | 0;
      i19 = i18 + (i15 << 2) | 0;
      i20 = i18 + ((HEAP32[i14 + 12 >> 2] | 0) - 1 << 2) | 0;
      if ((i19 | 0) == 0 | (i20 | 0) == 0) {
       i16 = i13;
       i17 = i12;
       break;
      }
      i18 = HEAP32[i19 >> 2] | 0;
      i19 = HEAP32[i20 >> 2] | 0;
      i16 = (i18 | 0) < (i13 | 0) ? i18 : i13;
      i17 = (i19 | 0) > (i12 | 0) ? i19 : i12;
     }
    } while (0);
    i15 = i14 + 8 | 0;
    if ((i15 | 0) == (i3 | 0)) {
     i8 = i17;
     i9 = i16;
     break L5;
    } else {
     i12 = i17;
     i13 = i16;
     i14 = i15;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 HEAP32[i1 >> 2] = i9;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i8 - i9;
 HEAP32[i1 + 12 >> 2] = i7 - i5;
 return;
}
function __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     i12 = i1 + 12 | 0;
     if ((i12 | 0) == (i11 | 0) | (i11 | 0) == 0) {
      i13 = i11;
     } else {
      HEAP32[i10 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i11);
      i13 = HEAP32[i10 >> 2] | 0;
     }
     if ((i13 | 0) != 0) {
      break;
     }
     HEAP32[i10 >> 2] = i12;
     HEAP32[i8 >> 2] = 32;
    }
   } while (0);
   __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i13 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i13 >> 2] | 0, i7 << 2 | 0) | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 _memcpy((HEAP32[i2 >> 2] | 0) + (i7 << 2) | 0, (HEAP32[i13 >> 2] | 0) + (i7 << 2) | 0, (HEAP32[i5 >> 2] | 0) - i7 << 2) | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 return i1 | 0;
}
function __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i2 | 0) == (i3 | 0)) {
  return;
 }
 i4 = i1 + 8 | 0;
 i5 = i1 + 4 | 0;
 i6 = i1 | 0;
 i7 = i2;
 i2 = HEAP32[i4 >> 2] | 0;
 while (1) {
  if ((i2 | 0) == (HEAP32[i5 >> 2] | 0)) {
   i8 = i2 + 1 | 0;
   i9 = HEAP32[i6 >> 2] | 0;
   do {
    if (i9 >>> 0 > i7 >>> 0) {
     i10 = 7;
    } else {
     if ((i9 + (i2 << 2) | 0) >>> 0 <= i7 >>> 0) {
      i10 = 7;
      break;
     }
     i11 = i8 + (i2 >>> 2) | 0;
     i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
     __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i12 >>> 0 > i8 >>> 0 ? i12 : i8);
     i12 = HEAP32[i6 >> 2] | 0;
     i13 = i12 + (i7 - i9 >> 2 << 2) | 0;
     i14 = i12;
    }
   } while (0);
   if ((i10 | 0) == 7) {
    i10 = 0;
    i9 = i8 + (i2 >>> 2) | 0;
    i12 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
    __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i12 >>> 0 > i8 >>> 0 ? i12 : i8);
    i13 = i7;
    i14 = HEAP32[i6 >> 2] | 0;
   }
   HEAP32[i14 + (HEAP32[i4 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
  } else {
   HEAP32[(HEAP32[i6 >> 2] | 0) + (i2 << 2) >> 2] = HEAP32[i7 >> 2];
  }
  i2 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
  HEAP32[i4 >> 2] = i2;
  i7 = i7 + 4 | 0;
  if ((i7 | 0) == (i3 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore6Region5Shape13appendSegmentEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 i5 = i1 | 0;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 4 >> 2] | 0)) {
  HEAP32[(HEAP32[i1 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i10 = i1 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 do {
  if (i1 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i1 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   i12 = i2 + (i7 >>> 2) | 0;
   i13 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
   __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i13 >>> 0 > i2 >>> 0 ? i13 : i2);
   i13 = HEAP32[i10 >> 2] | 0;
   i14 = i13 + (i4 - i1 >> 2 << 2) | 0;
   i15 = i13;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  i11 = i2 + (i7 >>> 2) | 0;
  i7 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
  __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i5, i7 >>> 0 > i2 >>> 0 ? i7 : i2);
  i14 = i4;
  i15 = HEAP32[i10 >> 2] | 0;
 }
 HEAP32[i15 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i14 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 16 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 16;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6;
   i9 = i2;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
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
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
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
function __ZNK7WebCore6Region9totalAreaEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Region5rectsEv(i3, i1);
 i1 = i3 + 8 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = 0;
  } else {
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = 0;
   i8 = 0;
   while (1) {
    if (i4 >>> 0 <= i7 >>> 0) {
     i9 = 4;
     break;
    }
    i8 = (Math_imul(HEAP32[i6 + (i7 << 4) + 12 >> 2] | 0, HEAP32[i6 + (i7 << 4) + 8 >> 2] | 0) | 0) + i8 | 0;
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if ((i9 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
   if ((i4 | 0) == 0) {
    i5 = i8;
    break;
   }
   HEAP32[i1 >> 2] = 0;
   i5 = i8;
  }
 } while (0);
 i1 = i3 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return i5 | 0;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore6Region5Shape10appendSpanEiPKiS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = HEAP32[i1 + 148 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) != 0) {
   i6 = _llvm_uadd_with_overflow_i32(i5 | 0, -1 | 0) | 0;
   if (!tempRet0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i7 = HEAP32[(HEAP32[i1 + 140 >> 2] | 0) + (i6 << 3) + 4 >> 2] | 0;
   if (((HEAP32[i1 + 8 >> 2] | 0) - i7 << 2 | 0) != (i4 - i3 | 0)) {
    break;
   }
   if ((i3 | 0) == (i4 | 0)) {
    return;
   }
   i6 = (HEAP32[i1 >> 2] | 0) + (i7 << 2) | 0;
   i7 = i3;
   while (1) {
    if ((HEAP32[i7 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
     break L1;
    }
    i8 = i7 + 4 | 0;
    if ((i8 | 0) == (i4 | 0)) {
     break;
    } else {
     i6 = i6 + 4 | 0;
     i7 = i8;
    }
   }
   return;
  }
 } while (0);
 __ZN7WebCore6Region5Shape10appendSpanEi(i1, i2);
 __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_(i1 | 0, i3, i4);
 return;
}
function __ZN7WebCore6Region5Shape11canCoalesceEPKiS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 140 >> 2] | 0) + (i6 << 3) + 4 >> 2] | 0;
 if (((HEAP32[i1 + 8 >> 2] | 0) - i4 << 2 | 0) != (i3 - i2 | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((i2 | 0) == (i3 | 0)) {
  i5 = 1;
  return i5 | 0;
 } else {
  i7 = (HEAP32[i1 >> 2] | 0) + (i4 << 2) | 0;
  i8 = i2;
 }
 while (1) {
  if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
   i5 = 0;
   i9 = 12;
   break;
  }
  i2 = i8 + 4 | 0;
  if ((i2 | 0) == (i3 | 0)) {
   i5 = 1;
   i9 = 13;
   break;
  } else {
   i7 = i7 + 4 | 0;
   i8 = i2;
  }
 }
 if ((i9 | 0) == 12) {
  return i5 | 0;
 } else if ((i9 | 0) == 13) {
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 32 >>> 0) {
   if (i2 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 2) | 0;
    HEAP32[i3 >> 2] = i7 >>> 2;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 32;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 2) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore6Region9translateERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i4 = i2 + 4 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i2;
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i5 = i1 + 16 | 0;
  i6 = 0;
  while (1) {
   i7 = (HEAP32[i5 >> 2] | 0) + (i6 << 2) | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i2 = i1 + 164 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i6 = i1 + 156 | 0;
 i1 = 0;
 while (1) {
  i3 = (HEAP32[i6 >> 2] | 0) + (i1 << 3) | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore6RegionC2ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1;
 i4 = i2;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i1 + 16 | 0;
 HEAP32[i4 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 32;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i1 + 168;
 HEAP32[i1 + 160 >> 2] = 16;
 HEAP32[i1 + 164 >> 2] = 0;
 i1 = i2 + 4 | 0;
 __ZN7WebCore6Region5Shape10appendSpanEi(i4, HEAP32[i1 >> 2] | 0);
 i3 = i2 | 0;
 __ZN7WebCore6Region5Shape13appendSegmentEi(i4, HEAP32[i3 >> 2] | 0);
 __ZN7WebCore6Region5Shape13appendSegmentEi(i4, (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0);
 __ZN7WebCore6Region5Shape10appendSpanEi(i4, (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0);
 return;
}
function __ZN7WebCore6RegionC1ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1;
 i4 = i2;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i1 + 16 | 0;
 HEAP32[i4 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 32;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i1 + 168;
 HEAP32[i1 + 160 >> 2] = 16;
 HEAP32[i1 + 164 >> 2] = 0;
 i1 = i2 + 4 | 0;
 __ZN7WebCore6Region5Shape10appendSpanEi(i4, HEAP32[i1 >> 2] | 0);
 i3 = i2 | 0;
 __ZN7WebCore6Region5Shape13appendSegmentEi(i4, HEAP32[i3 >> 2] | 0);
 __ZN7WebCore6Region5Shape13appendSegmentEi(i4, (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0);
 __ZN7WebCore6Region5Shape10appendSpanEi(i4, (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i1 >> 2] | 0) | 0);
 return;
}
function __ZN7WebCore6Region5Shape9translateERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i4 = i2 | 0;
  i5 = i1 | 0;
  i6 = 0;
  while (1) {
   i7 = (HEAP32[i5 >> 2] | 0) + (i6 << 2) | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
   i6 = i6 + 1 | 0;
   if (i6 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i3 = i1 + 148 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i6 = i2 + 4 | 0;
 i2 = i1 + 140 | 0;
 i1 = 0;
 while (1) {
  i4 = (HEAP32[i2 >> 2] | 0) + (i1 << 3) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
  i1 = i1 + 1 | 0;
  if (i1 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore6Region5ShapeC2ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 HEAP32[i1 + 148 >> 2] = 0;
 i3 = i2 + 4 | 0;
 __ZN7WebCore6Region5Shape10appendSpanEi(i1, HEAP32[i3 >> 2] | 0);
 i4 = i2 | 0;
 __ZN7WebCore6Region5Shape13appendSegmentEi(i1, HEAP32[i4 >> 2] | 0);
 __ZN7WebCore6Region5Shape13appendSegmentEi(i1, (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0);
 __ZN7WebCore6Region5Shape10appendSpanEi(i1, (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0);
 return;
}
function __ZN7WebCore6Region5ShapeC1ERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 HEAP32[i1 + 148 >> 2] = 0;
 i3 = i2 + 4 | 0;
 __ZN7WebCore6Region5Shape10appendSpanEi(i1, HEAP32[i3 >> 2] | 0);
 i4 = i2 | 0;
 __ZN7WebCore6Region5Shape13appendSegmentEi(i1, HEAP32[i4 >> 2] | 0);
 __ZN7WebCore6Region5Shape13appendSegmentEi(i1, (HEAP32[i2 + 8 >> 2] | 0) + (HEAP32[i4 >> 2] | 0) | 0);
 __ZN7WebCore6Region5Shape10appendSpanEi(i1, (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0);
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
function __ZN7WebCore6Region5Shape4swapERS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 __ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE4swapERS2_(i1 | 0, i2 | 0);
 i3 = i1 + 148 | 0;
 i4 = i2 + 148 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i4 >> 2] = i5;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 140 | 0, i2 + 140 | 0);
 return;
}
function __ZNK7WebCore6Region5Shape14segments_beginEPKNS0_4SpanE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == (i2 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (i2 >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = (HEAP32[i1 >> 2] | 0) + (i3 << 2) | 0;
 return i4 | 0;
}
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
}
function __ZNK7WebCore6Region10intersectsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i1 | 0, i2 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore6Region5Shape13compareShapesINS1_26CompareIntersectsOperationEEEbRKS1_S5_(i1 + 16 | 0, i2 + 16 | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore6Region8containsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZNK7WebCore7IntRect8containsERKS0_(i1 | 0, i2 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZN7WebCore6Region5Shape13compareShapesINS1_24CompareContainsOperationEEEbRKS1_S5_(i1 + 16 | 0, i2 + 16 | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore6Region5Shape12segments_endEPKNS0_4SpanE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i2 + 4 >> 2] | 0) == (HEAP32[i1 + 8 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 >> 2] | 0) + (HEAP32[i2 + 12 >> 2] << 2) | 0;
 return i3 | 0;
}
function __ZN7WebCore6RegionC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 32;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i1 + 168;
 HEAP32[i1 + 160 >> 2] = 16;
 HEAP32[i1 + 164 >> 2] = 0;
 return;
}
function __ZN7WebCore6RegionC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 HEAP32[i1 + 16 >> 2] = i1 + 28;
 HEAP32[i1 + 20 >> 2] = 32;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = i1 + 168;
 HEAP32[i1 + 160 >> 2] = 16;
 HEAP32[i1 + 164 >> 2] = 0;
 return;
}
function __ZN7WebCore6Region5ShapeC2Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 HEAP32[i1 + 148 >> 2] = 0;
 return;
}
function __ZN7WebCore6Region5ShapeC1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = i1 + 12;
 HEAP32[i1 + 4 >> 2] = 32;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 140 >> 2] = i1 + 152;
 HEAP32[i1 + 144 >> 2] = 16;
 HEAP32[i1 + 148 >> 2] = 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore6Region5Shape15intersectShapesERKS1_S3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore6Region5Shape14shapeOperationINS1_18IntersectOperationEEES1_RKS1_S5_(i1, i2, i3);
 return;
}
function __ZN7WebCore6Region5Shape14subtractShapesERKS1_S3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore6Region5Shape14shapeOperationINS1_17SubtractOperationEEES1_RKS1_S5_(i1, i2, i3);
 return;
}
function __ZN7WebCore6Region5Shape11unionShapesERKS1_S3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore6Region5Shape14shapeOperationINS1_14UnionOperationEEES1_RKS1_S5_(i1, i2, i3);
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
function __ZNK7WebCore6Region5Shape9spans_endEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 140 >> 2] | 0) + (HEAP32[i1 + 148 >> 2] << 3) | 0;
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
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZNK7WebCore6Region5Shape11spans_beginEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 140 >> 2] | 0;
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore6Region5ShapeC2Ev,b0,__ZN7WebCore6RegionC2Ev,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore6Region5ShapeC2ERKNS_7IntRectE,b1,__ZN7WebCore6RegionC2ERKNS_7IntRectE,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore6Region5Shape13appendSegmentEi","_strlen","__ZNK7WebCore6Region5rectsEv","__ZN7WebCore6RegionC2Ev","__ZN7WebCore6Region5Shape11unionShapesERKS1_S3_","__ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEEaSERKS2_","__ZN7WebCore6Region5Shape9translateERKNS_7IntSizeE","_memset","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore6Region5Shape10appendSpanEi","__ZNK7WebCore6Region8containsERKS0_","__ZN7WebCore6Region5Shape14shapeOperationINS1_14UnionOperationEEES1_RKS1_S5_","__ZNK7WebCore6Region9totalAreaEv","__ZN7WebCore6Region9intersectERKS0_","__ZN7WebCore6Region5Shape11canCoalesceEPKiS3_","__ZN7WebCore6Region5Shape15intersectShapesERKS1_S3_","__ZN7WebCore6Region5Shape14shapeOperationINS1_18IntersectOperationEEES1_RKS1_S5_","_memcpy","__ZNK7WebCore6Region10intersectsERKS0_","__ZN7WebCore6RegionC2ERKNS_7IntRectE","__ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_","__ZN7WebCore6Region5Shape14shapeOperationINS1_17SubtractOperationEEES1_RKS1_S5_","__ZN7WebCore6Region8subtractERKS0_","__ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE4swapERS2_","__ZN7WebCore6Region9translateERKNS_7IntSizeE","__ZN7WebCore6Region5ShapeC2ERKNS_7IntRectE","__ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEEaSERKS5_","__ZN7WebCore6Region5Shape11appendSpansERKS1_PKNS0_4SpanES6_","__ZN7WebCore6Region5Shape13compareShapesINS1_26CompareIntersectsOperationEEEbRKS1_S5_","__ZNK7WebCore6Region5Shape9spans_endEv","__ZN7WebCore6Region5Shape14subtractShapesERKS1_S3_","__ZNK7WebCore6Region5Shape12segments_endEPKNS0_4SpanE","__ZN7WebCore6Region5ShapeC2Ev","__ZN7WebCore6Region5uniteERKS0_","_memmove","__ZNK7WebCore6Region5Shape11spans_beginEv","__ZNK7WebCore6Region8containsERKNS_8IntPointE","__ZN3WTF6VectorIN7WebCore6Region4SpanELj16ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF6VectorIiLj32ENS_15CrashOnOverflowEE11appendRangeIPKiEEvT_S6_","__ZNK7WebCore6Region5Shape6boundsEv","__ZN7WebCore6Region5Shape13compareShapesINS1_24CompareContainsOperationEEEbRKS1_S5_","__ZNK7WebCore6Region5Shape14segments_beginEPKNS0_4SpanE","__ZN7WebCore6Region5Shape4swapERS1_","__ZN7WebCore6Region5Shape10appendSpanEiPKiS3_"]

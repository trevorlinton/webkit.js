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
H_BASE = parentModule["_malloc"](192 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 192;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore4PageC1ERNS0_11PageClientsE;
var __ZN7WebCore4PageD1Ev;
var __ZN7WebCore4Page11PageClientsC1Ev;
var __ZN7WebCore4Page11PageClientsD1Ev;
/* memory initializer */ allocate([109,105,110,105,109,105,122,101,100,0,0,0,0,0,0,0,109,97,120,105,109,105,122,101,100,0,0,0,0,0,0,0,102,117,108,108,115,99,114,101,101,110,0,0,0,0,0,0,102,108,111,97,116,105,110,103,0,0,0,0,0,0,0,0,119,105,110,100,111,119,101,100,0,0,0,0,0,0,0,0,100,97,116,97,0,0,0,0,116,101,120,116,47,99,115,115,0,0,0,0,0,0,0,0,100,97,116,97,58,116,101,120,116,47,99,115,115,59,99,104,97,114,115,101,116,61,117,116,102,45,56,59,98,97,115,101,54,52,44,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,2,0,0,0,0,0,0,0,3,0,0,0,0,0,0,0,4,0,0,0,0,0,0,0,5,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
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
;
;
;
 var ctlz_i8 = allocate([8,7,6,6,5,5,5,5,4,4,4,4,4,4,4,4,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,3,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_DYNAMIC);
 var cttz_i8 = allocate([8,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,7,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,6,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,5,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0,4,0,1,0,2,0,1,0,3,0,1,0,2,0,1,0], "i8", ALLOC_DYNAMIC);
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
  var cttz_i8=env.cttz_i8|0;
  var ctlz_i8=env.ctlz_i8|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
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
function __ZN7WebCore4PageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 60 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 4 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    break;
   }
   i9 = i8 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i3 = i4 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore4Page12setGroupNameERKN3WTF6StringE(i1, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[H_BASE + 192 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i5) | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5;
  while (1) {
   __ZN7WebCore5Frame14willDetachPageEv(i4);
   HEAP32[i4 + 32 >> 2] = 0;
   i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 i4 = HEAP32[i1 + 72 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 i4 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i4 >> 2] >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 + 1136 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 }
 i4 = i1 + 40 | 0;
 __ZN7WebCore19InspectorController22inspectedPageDestroyedEv(HEAP32[i4 >> 2] | 0);
 i5 = i1 + 44 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9);
 }
 i9 = i1 + 56 | 0;
 __ZN7WebCore21BackForwardController5closeEv(HEAP32[i9 >> 2] | 0);
 i3 = HEAP32[i1 + 1176 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = HEAP32[i1 + 1180 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i3 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i12 = i10 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1156 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = HEAP32[i1 + 1160 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i3 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i13 = i10 | 0;
      i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i13 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1152 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 i8 = i1 + 1148 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore11PageConsoleD1Ev(i3);
  __ZdlPv(i3);
 }
 i3 = i1 + 1144 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore13PageThrottlerD1Ev(i8);
  __ZdlPv(i8);
 }
 i8 = i1 + 1e3 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 992 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 1004 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 996 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 860 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 852 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 864 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 856 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 704 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 696 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 708 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 700 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 564 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 556 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 568 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 560 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 408 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 400 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 412 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 404 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 268 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 260 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 272 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 264 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 224 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 184 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i7 = i3 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i8 = i1 + 156 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore9PageGroupD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15FeatureObserverD1Ev(i1 + 84 | 0);
 i10 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 + 4 | 0;
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i10 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore10PluginDataD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 + 4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore21BackForwardControllerD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i1 + 52 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore15ProgressTrackerD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8SettingsD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 4 | 0;
   i3 = i5 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
 }
 i9 = i1 + 36 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore21ContextMenuControllerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 32 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 4 | 0;
    i5 = i3 | 0;
    i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i5 >> 2] = i10;
     break;
    }
    i10 = i3 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 28 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore14DragControllerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 24 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i4 = HEAP32[i9 + 24 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i10 = i4 + 8 | 0;
    i3 = i10 | 0;
    i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i5;
    if ((i5 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 20 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i9 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i10 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i9 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4PageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 60 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = 0;
 __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i7, i3);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 + 4 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    break;
   }
   i9 = i8 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i3 = i4 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore4Page12setGroupNameERKN3WTF6StringE(i1, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[H_BASE + 192 >> 2] | 0;
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i5) | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5;
  while (1) {
   __ZN7WebCore5Frame14willDetachPageEv(i4);
   HEAP32[i4 + 32 >> 2] = 0;
   i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 i4 = HEAP32[i1 + 72 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 i4 = HEAP32[i1 + 76 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i4 >> 2] >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 + 1136 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 15](i4);
 }
 i4 = i1 + 40 | 0;
 __ZN7WebCore19InspectorController22inspectedPageDestroyedEv(HEAP32[i4 >> 2] | 0);
 i5 = i1 + 44 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 15](i9);
 }
 i9 = i1 + 56 | 0;
 __ZN7WebCore21BackForwardController5closeEv(HEAP32[i9 >> 2] | 0);
 i3 = HEAP32[i1 + 1176 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = HEAP32[i1 + 1180 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i3 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i12 = i10 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 1156 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = HEAP32[i1 + 1160 >> 2] | 0;
  if ((i8 | 0) > 0) {
   i7 = 0;
   while (1) {
    i10 = HEAP32[i3 + (i7 << 2) >> 2] | 0;
    i11 = i10;
    do {
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      i13 = i10 | 0;
      i12 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
      if ((i12 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i13 >> 2] = i12;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i8 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 1152 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 }
 i8 = i1 + 1148 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore11PageConsoleD1Ev(i3);
  __ZdlPv(i3);
 }
 i3 = i1 + 1144 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  __ZN7WebCore13PageThrottlerD1Ev(i8);
  __ZdlPv(i8);
 }
 i8 = i1 + 1e3 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 992 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 1004 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 996 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 860 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 852 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 864 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 856 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 704 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 696 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 708 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 700 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 564 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 556 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 568 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 560 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = i1 + 408 | 0;
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i1 + 400 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if (!((i1 + 412 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i1 + 404 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 268 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 260 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if (!((i1 + 272 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 264 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 224 >> 2] | 0;
 if ((i8 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i8);
 }
 i8 = HEAP32[i1 + 184 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i7 = i3 | 0;
   i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i7 >> 2] = i10;
    break;
   }
   i10 = i3 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i8 = i1 + 156 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore9PageGroupD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore15FeatureObserverD1Ev(i1 + 84 | 0);
 i10 = HEAP32[i1 + 68 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i3 = i10 + 4 | 0;
   i8 = i3 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 i10 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore10PluginDataD2Ev(i10);
    __ZN3WTF8fastFreeEPv(i10);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i6 = i10 + 4 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore21BackForwardControllerD1Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i1 + 52 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  __ZN7WebCore15ProgressTrackerD1Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i10 = i9 | 0;
   i3 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8SettingsD1Ev(i9);
    __ZN3WTF8fastFreeEPv(i9);
    break;
   } else {
    HEAP32[i10 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 4 | 0;
   i3 = i5 | 0;
   if (((tempValue = HEAP32[i3 >> 2] | 0, HEAP32[i3 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
  }
 } while (0);
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
 }
 i9 = i1 + 36 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore21ContextMenuControllerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 32 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i4 = HEAP32[i9 + 4 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i3 = i4 + 4 | 0;
    i5 = i3 | 0;
    i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i5 >> 2] = i10;
     break;
    }
    i10 = i3 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 28 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore14DragControllerD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 24 | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i4 = HEAP32[i9 + 24 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i10 = i4 + 8 | 0;
    i3 = i10 | 0;
    i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
    HEAP32[i3 >> 2] = i5;
    if ((i5 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 20 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i9 | 0) > 0) {
  i1 = 0;
  while (1) {
   do {
    if ((HEAP32[i4 + (i1 << 3) >> 2] | 0) != -1) {
     i10 = HEAP32[i4 + (i1 << 3) + 4 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i9 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page33resetRelevantPaintedObjectCounterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 888 | 0;
 i3 = i2 | 0;
 i4 = i2 + 296 | 0;
 i5 = i2 + 592 | 0;
 HEAP8[i1 + 1132 | 0] = 0;
 i6 = i1 + 224 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i7);
  _memset(i6 | 0, 0, 16) | 0;
 }
 __ZN7WebCore6RegionC1Ev(i3);
 i6 = i1 + 244 | 0;
 i7 = i3;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i1 + 268 | 0;
 i6 = i3 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i8;
 i8 = i1 + 260 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = i1 + 272 | 0;
 i10 = i3 + 16 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i3 + 28 | 0;
 i13 = (i11 | 0) == (i12 | 0);
 do {
  if ((i7 | 0) == (i9 | 0)) {
   if (i13) {
    i14 = i1 + 400 | 0;
    i15 = i1 + 272 | 0;
    i16 = i3 + 28 | 0;
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
    i16 = i1 + 264 | 0;
    i15 = i3 + 20 | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i14;
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    HEAP32[i10 >> 2] = i12;
    i14 = i1 + 400 | 0;
    i15 = i3 + 28 | 0;
    i16 = i1 + 272 | 0;
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
    i16 = i1 + 264 | 0;
    i15 = i3 + 20 | 0;
    i14 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i14;
    break;
   }
  } else {
   if (!i13) {
    HEAP32[i8 >> 2] = i11;
    HEAP32[i10 >> 2] = i7;
    i14 = i1 + 264 | 0;
    i15 = i3 + 20 | 0;
    i16 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i16;
    break;
   }
   HEAP32[i10 >> 2] = i7;
   HEAP32[i8 >> 2] = i9;
   i16 = i1 + 400 | 0;
   i15 = i3 + 28 | 0;
   i14 = i1 + 272 | 0;
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
   i14 = i1 + 264 | 0;
   i15 = i3 + 20 | 0;
   i16 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i15 >> 2] = i16;
  }
 } while (0);
 i9 = i1 + 408 | 0;
 i8 = i3 + 164 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i7;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 400 | 0, i3 + 156 | 0);
 if ((HEAP32[i8 >> 2] | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
 }
 i8 = i3 + 156 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if (!((i3 + 168 | 0) == (i7 | 0) | (i7 | 0) == 0)) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i3 + 160 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if (!((i12 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i3 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore6RegionC1Ev(i4);
 i6 = i1 + 540 | 0;
 i3 = i4;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = i1 + 564 | 0;
 i6 = i4 + 24 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i10;
 i10 = i1 + 556 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i12 = i1 + 568 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i4 + 28 | 0;
 i11 = (i8 | 0) == (i9 | 0);
 do {
  if ((i3 | 0) == (i12 | 0)) {
   if (i11) {
    i13 = i1 + 696 | 0;
    i16 = i1 + 568 | 0;
    i15 = i4 + 28 | 0;
    while (1) {
     i14 = i16;
     i17 = HEAP32[i14 >> 2] | 0;
     i18 = i15;
     HEAP32[i14 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i18 >> 2] = i17;
     i17 = i16 + 4 | 0;
     if ((i17 | 0) == (i13 | 0)) {
      break;
     } else {
      i16 = i17;
      i15 = i15 + 4 | 0;
     }
    }
    i15 = i1 + 560 | 0;
    i16 = i4 + 20 | 0;
    i13 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i13;
    break;
   } else {
    HEAP32[i10 >> 2] = i8;
    HEAP32[i7 >> 2] = i9;
    i13 = i1 + 696 | 0;
    i16 = i4 + 28 | 0;
    i15 = i1 + 568 | 0;
    while (1) {
     i17 = i15;
     i18 = HEAP32[i17 >> 2] | 0;
     i14 = i16;
     HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
     HEAP32[i14 >> 2] = i18;
     i18 = i15 + 4 | 0;
     if ((i18 | 0) == (i13 | 0)) {
      break;
     } else {
      i16 = i16 + 4 | 0;
      i15 = i18;
     }
    }
    i15 = i1 + 560 | 0;
    i16 = i4 + 20 | 0;
    i13 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i13;
    break;
   }
  } else {
   if (!i11) {
    HEAP32[i10 >> 2] = i8;
    HEAP32[i7 >> 2] = i3;
    i13 = i1 + 560 | 0;
    i16 = i4 + 20 | 0;
    i15 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i15;
    break;
   }
   HEAP32[i7 >> 2] = i3;
   HEAP32[i10 >> 2] = i12;
   i15 = i1 + 696 | 0;
   i16 = i4 + 28 | 0;
   i13 = i1 + 568 | 0;
   while (1) {
    i18 = i13;
    i14 = HEAP32[i18 >> 2] | 0;
    i17 = i16;
    HEAP32[i18 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i17 >> 2] = i14;
    i14 = i13 + 4 | 0;
    if ((i14 | 0) == (i15 | 0)) {
     break;
    } else {
     i16 = i16 + 4 | 0;
     i13 = i14;
    }
   }
   i13 = i1 + 560 | 0;
   i16 = i4 + 20 | 0;
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i16 >> 2] = i15;
  }
 } while (0);
 i12 = i1 + 704 | 0;
 i10 = i4 + 164 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i3;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 696 | 0, i4 + 156 | 0);
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = i4 + 156 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 if (!((i4 + 168 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i10 >> 2] = 0;
  HEAP32[i4 + 160 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 if (!((i9 | 0) == (i6 | 0) | (i6 | 0) == 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i4 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN7WebCore6RegionC1Ev(i5);
 i6 = i1 + 836 | 0;
 i4 = i5;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 i4 = i1 + 860 | 0;
 i6 = i5 + 24 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i6 >> 2] = i7;
 i7 = i1 + 852 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 i9 = i1 + 864 | 0;
 i3 = i5 + 16 | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 i12 = i5 + 28 | 0;
 i8 = (i10 | 0) == (i12 | 0);
 do {
  if ((i4 | 0) == (i9 | 0)) {
   if (i8) {
    i11 = i1 + 992 | 0;
    i15 = i1 + 864 | 0;
    i16 = i5 + 28 | 0;
    while (1) {
     i13 = i15;
     i14 = HEAP32[i13 >> 2] | 0;
     i17 = i16;
     HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
     HEAP32[i17 >> 2] = i14;
     i14 = i15 + 4 | 0;
     if ((i14 | 0) == (i11 | 0)) {
      break;
     } else {
      i15 = i14;
      i16 = i16 + 4 | 0;
     }
    }
    i16 = i1 + 856 | 0;
    i15 = i5 + 20 | 0;
    i11 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i11;
    break;
   } else {
    HEAP32[i7 >> 2] = i10;
    HEAP32[i3 >> 2] = i12;
    i11 = i1 + 992 | 0;
    i15 = i5 + 28 | 0;
    i16 = i1 + 864 | 0;
    while (1) {
     i14 = i16;
     i17 = HEAP32[i14 >> 2] | 0;
     i13 = i15;
     HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i13 >> 2] = i17;
     i17 = i16 + 4 | 0;
     if ((i17 | 0) == (i11 | 0)) {
      break;
     } else {
      i15 = i15 + 4 | 0;
      i16 = i17;
     }
    }
    i16 = i1 + 856 | 0;
    i15 = i5 + 20 | 0;
    i11 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i11;
    break;
   }
  } else {
   if (!i8) {
    HEAP32[i7 >> 2] = i10;
    HEAP32[i3 >> 2] = i4;
    i11 = i1 + 856 | 0;
    i15 = i5 + 20 | 0;
    i16 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i15 >> 2] = i16;
    break;
   }
   HEAP32[i3 >> 2] = i4;
   HEAP32[i7 >> 2] = i9;
   i16 = i1 + 992 | 0;
   i15 = i5 + 28 | 0;
   i11 = i1 + 864 | 0;
   while (1) {
    i17 = i11;
    i13 = HEAP32[i17 >> 2] | 0;
    i14 = i15;
    HEAP32[i17 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i14 >> 2] = i13;
    i13 = i11 + 4 | 0;
    if ((i13 | 0) == (i16 | 0)) {
     break;
    } else {
     i15 = i15 + 4 | 0;
     i11 = i13;
    }
   }
   i11 = i1 + 856 | 0;
   i15 = i5 + 20 | 0;
   i16 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i15 >> 2] = i16;
  }
 } while (0);
 i9 = i1 + 1e3 | 0;
 i7 = i5 + 164 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i7 >> 2] = i4;
 __ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_(i1 + 992 | 0, i5 + 156 | 0);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = i5 + 156 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if (!((i5 + 168 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 + 160 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i1);
 }
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i12 | 0) == (i6 | 0) | (i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page26addRelevantRepaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, d35 = +0, d36 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i4 + 56 | 0;
 i10 = i9 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 HEAP32[i6 >> 2] = i2;
 i28 = i1 + 1132 | 0;
 if ((HEAP8[i28] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 212 >> 2] & 4 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i29 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i2 = i1 + 60 | 0;
 if ((HEAP32[(HEAP32[i29 + 116 >> 2] | 0) + 216 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  STACKTOP = i4;
  return;
 }
 i30 = i7 | 0;
 HEAP32[i30 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 i31 = i7 + 8 | 0;
 HEAP32[i31 >> 2] = 980;
 i32 = i7 + 12 | 0;
 HEAP32[i32 >> 2] = 1300;
 __ZNK7WebCore10RenderView8viewRectEv(i5, i29);
 i29 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i29 | 0) > 980) {
  HEAP32[i30 >> 2] = (i29 - 980 | 0) / 2 & -1;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i7);
 i29 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i29;
 i29 = i9 + 8 | 0;
 i9 = HEAP32[i29 + 4 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = HEAP32[i29 >> 2];
 HEAP32[i8 + 12 >> 2] = i9;
 if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i3, i8) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i13, i3);
 do {
  if (__ZN3WTF7HashSetIPN7WebCore12RenderObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 224 | 0, i6) | 0) {
   __ZN7WebCore6RegionC1ERKNS_7IntRectE(i14, i13);
   __ZN7WebCore6Region8subtractERKS0_(i1 + 836 | 0, i14);
   i3 = i14 + 164 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i14 + 156 | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   if (!((i14 + 168 | 0) == (i8 | 0) | (i8 | 0) == 0)) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i14 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i8);
   }
   i8 = i14 + 24 | 0;
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i8 = i14 + 16 | 0;
   i3 = HEAP32[i8 >> 2] | 0;
   if ((i14 + 28 | 0) == (i3 | 0) | (i3 | 0) == 0) {
    break;
   }
   HEAP32[i8 >> 2] = 0;
   HEAP32[i14 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
 } while (0);
 i14 = i15;
 i6 = i7;
 HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i14 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i14 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i14 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = (HEAP32[i32 >> 2] | 0) / 2 & -1;
 i7 = i15 + 12 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i6;
 i7 = i16;
 HEAP32[i7 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 HEAP32[i16 + 4 >> 2] = i6;
 i6 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i17 + 4 >> 2] = i6;
 i6 = i11 + 8 | 0;
 i14 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i17 + 8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i17 + 12 >> 2] = i14;
 do {
  if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i15, i17) | 0) {
   i14 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i18 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i18 + 4 >> 2] = i14;
   i14 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i18 + 8 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i18 + 12 >> 2] = i14;
   if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i16, i18) | 0)) {
    i33 = 34;
    break;
   }
   i14 = i19;
   i7 = i11;
   HEAP32[i14 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i20, i15);
   __ZN7WebCore7IntRect9intersectERKS0_(i19, i20);
   __ZN7WebCore6RegionC1ERKNS_7IntRectE(i21, i19);
   __ZN7WebCore6Region5uniteERKS0_(i1 + 244 | 0, i21);
   i14 = i21 + 164 | 0;
   if ((HEAP32[i14 >> 2] | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
   }
   i14 = i21 + 156 | 0;
   i3 = HEAP32[i14 >> 2] | 0;
   if (!((i21 + 168 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
    HEAP32[i14 >> 2] = 0;
    HEAP32[i21 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   i3 = i21 + 24 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i21 + 16 | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   if (!((i21 + 28 | 0) == (i14 | 0) | (i14 | 0) == 0)) {
    HEAP32[i3 >> 2] = 0;
    HEAP32[i21 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   i14 = i22;
   HEAP32[i14 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i14 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
   HEAP32[i14 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
   HEAP32[i14 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i23, i16);
   __ZN7WebCore7IntRect9intersectERKS0_(i22, i23);
   __ZN7WebCore6RegionC1ERKNS_7IntRectE(i24, i22);
   __ZN7WebCore6Region5uniteERKS0_(i1 + 540 | 0, i24);
   i7 = i24 + 164 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i24 + 156 | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   if (!((i24 + 168 | 0) == (i14 | 0) | (i14 | 0) == 0)) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i24 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i14);
   }
   i14 = i24 + 24 | 0;
   if ((HEAP32[i14 >> 2] | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
   }
   i14 = i24 + 16 | 0;
   i7 = HEAP32[i14 >> 2] | 0;
   if ((i24 + 28 | 0) == (i7 | 0) | (i7 | 0) == 0) {
    break;
   }
   HEAP32[i14 >> 2] = 0;
   HEAP32[i24 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   i33 = 34;
  }
 } while (0);
 do {
  if ((i33 | 0) == 34) {
   i24 = HEAP32[i12 + 4 >> 2] | 0;
   HEAP32[i25 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i25 + 4 >> 2] = i24;
   i24 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i25 + 8 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i25 + 12 >> 2] = i24;
   if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i15, i25) | 0) {
    __ZN7WebCore6RegionC1ERKNS_7IntRectE(i26, i13);
    __ZN7WebCore6Region5uniteERKS0_(i1 + 244 | 0, i26);
    i24 = i26 + 164 | 0;
    if ((HEAP32[i24 >> 2] | 0) != 0) {
     HEAP32[i24 >> 2] = 0;
    }
    i24 = i26 + 156 | 0;
    i22 = HEAP32[i24 >> 2] | 0;
    if (!((i26 + 168 | 0) == (i22 | 0) | (i22 | 0) == 0)) {
     HEAP32[i24 >> 2] = 0;
     HEAP32[i26 + 160 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i22);
    }
    i22 = i26 + 24 | 0;
    if ((HEAP32[i22 >> 2] | 0) != 0) {
     HEAP32[i22 >> 2] = 0;
    }
    i22 = i26 + 16 | 0;
    i24 = HEAP32[i22 >> 2] | 0;
    if ((i26 + 28 | 0) == (i24 | 0) | (i24 | 0) == 0) {
     break;
    }
    HEAP32[i22 >> 2] = 0;
    HEAP32[i26 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i24);
    break;
   } else {
    __ZN7WebCore6RegionC1ERKNS_7IntRectE(i27, i13);
    __ZN7WebCore6Region5uniteERKS0_(i1 + 540 | 0, i27);
    i24 = i27 + 164 | 0;
    if ((HEAP32[i24 >> 2] | 0) != 0) {
     HEAP32[i24 >> 2] = 0;
    }
    i24 = i27 + 156 | 0;
    i22 = HEAP32[i24 >> 2] | 0;
    if (!((i27 + 168 | 0) == (i22 | 0) | (i22 | 0) == 0)) {
     HEAP32[i24 >> 2] = 0;
     HEAP32[i27 + 160 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i22);
    }
    i22 = i27 + 24 | 0;
    if ((HEAP32[i22 >> 2] | 0) != 0) {
     HEAP32[i22 >> 2] = 0;
    }
    i22 = i27 + 16 | 0;
    i24 = HEAP32[i22 >> 2] | 0;
    if ((i27 + 28 | 0) == (i24 | 0) | (i24 | 0) == 0) {
     break;
    }
    HEAP32[i22 >> 2] = 0;
    HEAP32[i27 + 20 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i24);
    break;
   }
  }
 } while (0);
 d34 = +((__ZNK7WebCore6Region9totalAreaEv(i1 + 244 | 0) | 0) >>> 0 >>> 0);
 i27 = __ZNK7WebCore6Region9totalAreaEv(i1 + 540 | 0) | 0;
 d35 = +(Math_imul(HEAP32[i32 >> 2] | 0, HEAP32[i31 >> 2] | 0) | 0);
 d36 = +((__ZNK7WebCore6Region9totalAreaEv(i1 + 836 | 0) | 0) >>> 0 >>> 0) / d35;
 if (d34 / d35 <= +.05) {
  STACKTOP = i4;
  return;
 }
 if (+(i27 >>> 0 >>> 0) / d35 <= +.05) {
  STACKTOP = i4;
  return;
 }
 if (d36 >= +.04) {
  STACKTOP = i4;
  return;
 }
 HEAP8[i28] = 0;
 __ZN7WebCore4Page33resetRelevantPaintedObjectCounterEv(i1);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11FrameLoader9didLayoutEj(i1 + 80 | 0, 4);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore4Page12setIsVisibleEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, d7 = +0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = i1 + 210 | 0;
 if ((HEAP8[i4] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i4] = i2 & 1;
 do {
  if (i2) {
   HEAP8[i1 + 211 | 0] = 0;
   i4 = i1 + 60 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   while (1) {
    i6 = HEAP32[i5 + 452 >> 2] | 0;
    if ((i6 | 0) != 0) {
     __ZN7WebCore9FrameView15didMoveOnscreenEv(i6);
    }
    i5 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
    if ((i5 | 0) == 0) {
     break;
    }
   }
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP8[i1 + 1140 | 0] = 0;
   i6 = i5;
   while (1) {
    i5 = HEAP32[i6 + 456 >> 2] | 0;
    if ((i5 | 0) != 0) {
     __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(i5);
    }
    i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
    if ((i6 | 0) == 0) {
     break;
    }
   }
   i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 452 >> 2] | 0;
   if ((i6 | 0) != 0) {
    __ZN7WebCore10ScrollView4showEv(i6 | 0);
   }
   i6 = i1 + 48 | 0;
   do {
    if ((HEAP8[(HEAP32[i6 >> 2] | 0) + 264 | 0] & 1) != 0) {
     d7 = +__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv();
     i5 = i1 + 200 | 0;
     if (+HEAPF64[i5 >> 3] == d7) {
      break;
     }
     HEAPF64[i5 >> 3] = d7;
     i5 = HEAP32[i4 >> 2] | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     i8 = i5;
     while (1) {
      i5 = HEAP32[i8 + 456 >> 2] | 0;
      if ((i5 | 0) != 0) {
       __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i5 + 88 | 0);
      }
      i8 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i8 + 40 | 0, 0) | 0;
      if ((i8 | 0) == 0) {
       break;
      }
     }
    }
   } while (0);
   if ((HEAP8[(HEAP32[i6 >> 2] | 0) + 264 | 0] & 2) != 0) {
    __ZN7WebCore19AnimationController16resumeAnimationsEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 476 >> 2] | 0);
   }
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i5 = i8;
   while (1) {
    __ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE(HEAP32[(HEAP32[i5 + 456 >> 2] | 0) + 340 >> 2] | 0);
    i5 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
    if ((i5 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 do {
  if (!i3) {
   i5 = HEAP32[i1 + 60 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = 0;
   i6 = 0;
   i8 = 0;
   i9 = i5;
   L41 : while (1) {
    i5 = HEAP32[i9 + 456 >> 2] | 0;
    if ((i4 | 0) == (i6 | 0)) {
     i10 = i6 + 1 | 0;
     i11 = i10 + (i6 >>> 2) | 0;
     i12 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
     i11 = i12 >>> 0 > i10 >>> 0 ? i12 : i10;
     do {
      if (i6 >>> 0 < i11 >>> 0) {
       if (i11 >>> 0 > 1073741823 >>> 0) {
        i13 = 33;
        break L41;
       }
       i12 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
       i14 = i12 >>> 2;
       i15 = __ZN3WTF10fastMallocEj(i12) | 0;
       i12 = i15;
       i16 = i8;
       _memcpy(i15 | 0, i16 | 0, i6 << 2) | 0;
       if ((i8 | 0) == 0) {
        i17 = i12;
        i18 = i14;
        break;
       }
       i15 = (i12 | 0) == (i8 | 0);
       __ZN3WTF8fastFreeEPv(i16);
       i17 = i15 ? 0 : i12;
       i18 = i15 ? 0 : i14;
      } else {
       i17 = i8;
       i18 = i6;
      }
     } while (0);
     HEAP32[i17 + (i6 << 2) >> 2] = i5;
     i11 = i5 + 8 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i19 = i17;
     i20 = i18;
     i21 = i10;
    } else {
     HEAP32[i8 + (i4 << 2) >> 2] = i5;
     i11 = i5 + 8 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
     i19 = i8;
     i20 = i6;
     i21 = i4 + 1 | 0;
    }
    i11 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i9 + 40 | 0, 0) | 0;
    if ((i11 | 0) == 0) {
     break;
    } else {
     i4 = i21;
     i6 = i20;
     i8 = i19;
     i9 = i11;
    }
   }
   if ((i13 | 0) == 33) {
    _WTFCrash();
   }
   i9 = (i21 | 0) == 0;
   do {
    if (!i9) {
     i8 = 0;
     while (1) {
      __ZN7WebCore8Document22visibilityStateChangedEv(HEAP32[i19 + (i8 << 2) >> 2] | 0);
      i8 = i8 + 1 | 0;
      if (i8 >>> 0 >= i21 >>> 0) {
       break;
      }
     }
     if (i9) {
      break;
     }
     i8 = i19 + (i21 << 2) | 0;
     i5 = i19;
     while (1) {
      i10 = (HEAP32[i5 >> 2] | 0) + 8 | 0;
      i6 = i10 - 8 | 0;
      i4 = i10 | 0;
      i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
      HEAP32[i4 >> 2] = i11;
      do {
       if ((i11 | 0) < 1) {
        if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i6);
       }
      } while (0);
      i5 = i5 + 4 | 0;
      if ((i5 | 0) == (i8 | 0)) {
       break;
      }
     }
    }
   } while (0);
   if ((i19 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i19);
  }
 } while (0);
 if (i2) {
  return;
 }
 i2 = i1 + 48 | 0;
 do {
  if ((HEAP32[(HEAP32[i1 + 1144 >> 2] | 0) + 4 >> 2] | 0) != 0) {
   if ((HEAP8[(HEAP32[i2 >> 2] | 0) + 264 | 0] & 1) == 0) {
    break;
   }
   d7 = +__ZN7WebCore8Settings35hiddenPageDOMTimerAlignmentIntervalEv();
   i19 = i1 + 200 | 0;
   if (+HEAPF64[i19 >> 3] == d7) {
    break;
   }
   HEAPF64[i19 >> 3] = d7;
   i19 = HEAP32[i1 + 60 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i21 = i19;
   while (1) {
    i19 = HEAP32[i21 + 456 >> 2] | 0;
    if ((i19 | 0) != 0) {
     __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i19 + 88 | 0);
    }
    i21 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i21 + 40 | 0, 0) | 0;
    if ((i21 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i21 = i1 + 60 | 0;
 if ((HEAP8[(HEAP32[i2 >> 2] | 0) + 264 | 0] & 2) != 0) {
  __ZN7WebCore19AnimationController17suspendAnimationsEv(HEAP32[(HEAP32[i21 >> 2] | 0) + 476 >> 2] | 0);
 }
 i2 = HEAP32[i21 >> 2] | 0;
 while (1) {
  i19 = HEAP32[i2 + 452 >> 2] | 0;
  if ((i19 | 0) != 0) {
   __ZN7WebCore9FrameView17willMoveOffscreenEv(i19);
  }
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 i2 = HEAP32[i21 >> 2] | 0;
 HEAP8[i1 + 1140 | 0] = 1;
 i1 = i2;
 while (1) {
  i2 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i2);
  }
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 i1 = HEAP32[(HEAP32[i21 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore10ScrollView4hideEv(i1 | 0);
 return;
}
function __ZN7WebCoreL19networkStateChangedEb(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = HEAP32[H_BASE + 192 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 i9 = i7 + (i8 << 2) | 0;
 L1 : do {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   i10 = 0;
   i11 = 0;
  } else {
   L3 : do {
    if ((i8 | 0) == 0) {
     i12 = i7;
    } else {
     i13 = i7;
     while (1) {
      i14 = HEAP32[i13 >> 2] | 0;
      if (!((i14 | 0) == (-1 | 0) | (i14 | 0) == 0)) {
       i12 = i13;
       break L3;
      }
      i14 = i13 + 4 | 0;
      if ((i14 | 0) == (i9 | 0)) {
       i10 = 0;
       i11 = 0;
       break L1;
      } else {
       i13 = i14;
      }
     }
    }
   } while (0);
   if ((i12 | 0) == (i9 | 0)) {
    i10 = 0;
    i11 = 0;
    break;
   } else {
    i15 = 0;
    i16 = 0;
    i17 = 0;
    i18 = i12;
   }
   L8 : while (1) {
    i13 = HEAP32[(HEAP32[i18 >> 2] | 0) + 60 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i19 = i15;
     i20 = i16;
     i21 = i17;
    } else {
     i14 = i15;
     i22 = i16;
     i23 = i17;
     i24 = i13;
     while (1) {
      if ((i14 | 0) == (i22 | 0)) {
       i13 = i22 + 1 | 0;
       i25 = i13 + (i22 >>> 2) | 0;
       i26 = i25 >>> 0 > 16 >>> 0 ? i25 : 16;
       i25 = i26 >>> 0 > i13 >>> 0 ? i26 : i13;
       do {
        if (i22 >>> 0 < i25 >>> 0) {
         if (i25 >>> 0 > 1073741823 >>> 0) {
          break L8;
         }
         i26 = __ZN3WTF18fastMallocGoodSizeEj(i25 << 2) | 0;
         i27 = i26 >>> 2;
         i28 = __ZN3WTF10fastMallocEj(i26) | 0;
         i26 = i28;
         i29 = i23;
         _memcpy(i28 | 0, i29 | 0, i22 << 2) | 0;
         if ((i23 | 0) == 0) {
          i30 = i26;
          i31 = i27;
          break;
         }
         i28 = (i26 | 0) == (i23 | 0);
         __ZN3WTF8fastFreeEPv(i29);
         i30 = i28 ? 0 : i26;
         i31 = i28 ? 0 : i27;
        } else {
         i30 = i23;
         i31 = i22;
        }
       } while (0);
       HEAP32[i30 + (i22 << 2) >> 2] = i24;
       i25 = i24 + 4 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
       i32 = i30;
       i33 = i31;
       i34 = i13;
      } else {
       HEAP32[i23 + (i14 << 2) >> 2] = i24;
       i25 = i24 + 4 | 0;
       HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + 1;
       i32 = i23;
       i33 = i22;
       i34 = i14 + 1 | 0;
      }
      i25 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i24 + 40 | 0, 0) | 0;
      if ((i25 | 0) == 0) {
       i19 = i34;
       i20 = i33;
       i21 = i32;
       break;
      } else {
       i14 = i34;
       i22 = i33;
       i23 = i32;
       i24 = i25;
      }
     }
    }
    do {
     if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
      i24 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i18 >> 2] | 0) | 0;
      if ((i24 | 0) == 0) {
       break;
      }
      __ZN7WebCore24InspectorInstrumentation23networkStateChangedImplEPNS_19InstrumentingAgentsE(i24);
     }
    } while (0);
    i24 = i18 + 4 | 0;
    if ((i24 | 0) == (i9 | 0)) {
     i10 = i19;
     i11 = i21;
     break L1;
    } else {
     i35 = i24;
    }
    while (1) {
     i24 = HEAP32[i35 >> 2] | 0;
     if (!((i24 | 0) == (-1 | 0) | (i24 | 0) == 0)) {
      break;
     }
     i24 = i35 + 4 | 0;
     if ((i24 | 0) == (i9 | 0)) {
      i10 = i19;
      i11 = i21;
      break L1;
     } else {
      i35 = i24;
     }
    }
    if ((i35 | 0) == (i9 | 0)) {
     i10 = i19;
     i11 = i21;
     break L1;
    } else {
     i15 = i19;
     i16 = i20;
     i17 = i21;
     i18 = i35;
    }
   }
   _WTFCrash();
  }
 } while (0);
 i35 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i18 = i3 | 0;
 i21 = HEAP32[(i1 ? i35 + 276 | 0 : i35 + 272 | 0) >> 2] | 0;
 HEAP32[i18 >> 2] = i21;
 if ((i21 | 0) != 0) {
  i35 = i21 | 0;
  HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
 }
 i35 = (i10 | 0) == 0;
 if (!i35) {
  i21 = i4 | 0;
  i1 = i5 | 0;
  i17 = 0;
  while (1) {
   i20 = HEAP32[(HEAP32[i11 + (i17 << 2) >> 2] | 0) + 456 >> 2] | 0;
   i16 = __ZN3WTF10fastMallocEj(56) | 0;
   __ZN7WebCore5EventC1ERKN3WTF12AtomicStringEbb(i16, i3, 0, 0);
   HEAP32[i21 >> 2] = i16;
   HEAP32[i1 >> 2] = 0;
   __ZN7WebCore8Document19dispatchWindowEventEN3WTF10PassRefPtrINS_5EventEEENS2_INS_11EventTargetEEE(i20, i4, i5);
   i20 = HEAP32[i1 >> 2] | 0;
   if ((i20 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 60 >> 2] & 15](i20);
   }
   i20 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 + 8 | 0;
     i19 = i16 | 0;
     i15 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i19 >> 2] = i15;
      break;
     }
     i15 = i16 - 8 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 15](i15);
    }
   } while (0);
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= i10 >>> 0) {
    break;
   }
  }
 }
 i17 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i18 = i17 | 0;
   i21 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i18 >> 2] = i21;
    break;
   }
  }
 } while (0);
 if (!i35) {
  i35 = i11 + (i10 << 2) | 0;
  i10 = i11;
  while (1) {
   i17 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
   i21 = i17 | 0;
   i18 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
   do {
    if ((i18 | 0) == 0) {
     i1 = i17 - 4 | 0;
     if ((i1 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
    } else {
     HEAP32[i21 >> 2] = i18;
    }
   } while (0);
   i10 = i10 + 4 | 0;
   if ((i10 | 0) == (i35 | 0)) {
    break;
   }
  }
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i11);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page29userStyleSheetLocationChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 48 | 0;
 i5 = i2 + 56 | 0;
 i6 = i2 + 64 | 0;
 i7 = i2 + 80 | 0;
 i8 = i2 + 88 | 0;
 i9 = i2 + 96 | 0;
 i10 = i2 + 104 | 0;
 i11 = HEAP32[i1 + 48 >> 2] | 0;
 i12 = i3 | 0;
 i13 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i13 | 0) == 0) {
  i14 = 0;
  i15 = i3 + 4 | 0;
 } else {
  i16 = i13 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
  i16 = i3 + 4 | 0;
  i14 = HEAP8[i16] & -2;
  i15 = i16;
 }
 i16 = i11 + 16 | 0;
 i13 = i14 | HEAP8[i16] & 1;
 HEAP8[i15] = i13;
 HEAP8[i15] = i13 & -3 | HEAP8[i16] & 2;
 HEAP32[i3 + 8 >> 2] = HEAP32[i11 + 20 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i3 + 16 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i3 + 20 >> 2] = HEAP32[i11 + 32 >> 2];
 HEAP32[i3 + 24 >> 2] = HEAP32[i11 + 36 >> 2];
 HEAP32[i3 + 28 >> 2] = HEAP32[i11 + 40 >> 2];
 HEAP32[i3 + 32 >> 2] = HEAP32[i11 + 44 >> 2];
 HEAP32[i3 + 36 >> 2] = HEAP32[i11 + 48 >> 2];
 HEAP32[i3 + 40 >> 2] = HEAP32[i11 + 52 >> 2];
 HEAP32[i3 + 44 >> 2] = HEAP32[i11 + 56 >> 2];
 __ZNK7WebCore3URL8protocolEv(i4, i3);
 i11 = __ZN7WebCore14SchemeRegistry27shouldTreatURLSchemeAsLocalERKN3WTF6StringE(i4) | 0;
 i16 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i4 = i16 | 0;
   i13 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    break;
   } else {
    HEAP32[i4 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i16 = i1 + 140 | 0;
 do {
  if (i11) {
   __ZNK7WebCore3URL14fileSystemPathEv(i5, i3);
   i13 = i5 | 0;
   i4 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i15 = i16 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i4;
   do {
    if ((i14 | 0) != 0) {
     i4 = i14 | 0;
     i15 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i4 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 | 0;
   i4 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i4;
    break;
   }
  } else {
   i4 = i16 | 0;
   i15 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i4 = i15 | 0;
   i14 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i15);
    break;
   } else {
    HEAP32[i4 >> 2] = i14;
    break;
   }
  }
 } while (0);
 i16 = i1 + 148 | 0;
 HEAP8[i16] = 0;
 i5 = i1 + 144 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i11 | 0) != 0) {
   i14 = i11 | 0;
   i4 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i14 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 152 >> 2] = 0;
 do {
  if (__ZNK7WebCore3URL10protocolIsEPKc(i3, H_BASE + 88 | 0) | 0) {
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i11, H_BASE + 112 | 0, 35, 1) | 0)) {
    break;
   }
   HEAP8[i16] = 1;
   i11 = i6 | 0;
   HEAP32[i11 >> 2] = 0;
   i4 = i6 + 4 | 0;
   HEAP32[i4 >> 2] = 0;
   i14 = i6 + 8 | 0;
   HEAP32[i14 >> 2] = 0;
   __ZNK3WTF6String9substringEjj(i8, i3 | 0, 35, -1);
   __ZN7WebCore24decodeURLEscapeSequencesERKN3WTF6StringE(i7, i8);
   HEAP32[i9 >> 2] = i6;
   i15 = __ZN3WTF12base64DecodeERKNS_6StringENS_33SignedOrUnsignedCharVectorAdapterENS_18Base64DecodePolicyE(i7, i9, 2) | 0;
   i17 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = i17 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i19 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i19;
      break;
     }
    }
   } while (0);
   do {
    if (i15) {
     __ZN3WTF6String8fromUTF8EPKhj(i10, HEAP32[i11 >> 2] | 0, HEAP32[i14 >> 2] | 0);
     i17 = i10 | 0;
     i19 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = 0;
     i13 = HEAP32[i5 >> 2] | 0;
     HEAP32[i5 >> 2] = i19;
     do {
      if ((i13 | 0) != 0) {
       i19 = i13 | 0;
       i18 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i13);
        break;
       } else {
        HEAP32[i19 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i13 = HEAP32[i17 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i18 = i13 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i14 >> 2] | 0) != 0) {
    HEAP32[i14 >> 2] = 0;
   }
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i15);
  }
 } while (0);
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i1 = i5;
  while (1) {
   i5 = HEAP32[i1 + 456 >> 2] | 0;
   if ((i5 | 0) != 0) {
    __ZN7WebCore28DocumentStyleSheetCollection19updatePageUserSheetEv(i5 + 772 | 0);
   }
   i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
 }
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i1 | 0;
 i5 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i12 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore4PageC2ERNS0_11PageClientsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 i11 = __ZN3WTF10fastMallocEj(28) | 0;
 __ZN7WebCore6ChromeC1ERNS_4PageERNS_12ChromeClientE(i11, i1, i10);
 HEAP32[i1 + 20 >> 2] = i11;
 i11 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore19DragCaretControllerC1Ev(i11);
 HEAP32[i1 + 24 >> 2] = i11;
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore14DragControllerC1ERNS_4PageERNS_10DragClientE(i10, i1, i11);
 HEAP32[i1 + 28 >> 2] = i10;
 i10 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore15FocusControllerC1ERNS_4PageE(i10, i1);
 HEAP32[i1 + 32 >> 2] = i10;
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i11 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore21ContextMenuControllerC1ERNS_4PageERNS_17ContextMenuClientE(i11, i1, i10);
 HEAP32[i1 + 36 >> 2] = i11;
 __ZN7WebCore19InspectorController6createEPNS_4PageEPNS_15InspectorClientE(i5, i1, HEAP32[i2 + 20 >> 2] | 0);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = 0;
 __ZN7WebCore8Settings6createEPNS_4PageE(i6, i1);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(168) | 0;
 __ZN7WebCore15ProgressTrackerC1Ev(i6);
 HEAP32[i1 + 52 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = i4 | 0;
 i11 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore21BackForwardControllerC1ERNS_4PageEN3WTF10PassRefPtrINS_17BackForwardClientEEE(i6, i1, i4);
 HEAP32[i1 + 56 >> 2] = i6;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i4 = i5 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 __ZN7WebCore9MainFrame6createERNS_4PageERNS_17FrameLoaderClientE(i1 + 60 | 0, i1, HEAP32[i2 + 36 >> 2] | 0);
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i7, i1);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = i7;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 32 >> 2];
 __ZN7WebCore15FeatureObserverC1Ev(i1 + 84 | 0);
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP8[i1 + 96 | 0] = 0;
 HEAP8[i1 + 97 | 0] = 1;
 HEAP8[i1 + 98 | 0] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP8[i1 + 104 | 0] = 0;
 HEAP8[i1 + 105 | 0] = 1;
 HEAPF32[i1 + 108 >> 2] = +1;
 HEAPF32[i1 + 112 >> 2] = +1;
 HEAPF32[i1 + 116 >> 2] = +1;
 HEAP8[i1 + 120 | 0] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP8[i1 + 128 | 0] = 0;
 _memset(i1 + 132 | 0, 0, 17) | 0;
 _memset(i1 + 152 | 0, 0, 16) | 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 HEAP32[i1 + 176 >> 2] = -1;
 HEAP8[i1 + 180 | 0] = 1;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 1;
 HEAPF64[i1 + 192 >> 3] = +__ZN7WebCore8Settings26defaultMinDOMTimerIntervalEv();
 HEAPF64[i1 + 200 >> 3] = +__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv();
 HEAP8[i1 + 208 | 0] = 0;
 HEAP8[i1 + 209 | 0] = 1;
 HEAP8[i1 + 210 | 0] = 1;
 _memset(i1 + 211 | 0, 0, 33) | 0;
 __ZN7WebCore6RegionC1Ev(i1 + 244 | 0);
 __ZN7WebCore6RegionC1Ev(i1 + 540 | 0);
 __ZN7WebCore6RegionC1Ev(i1 + 836 | 0);
 HEAP8[i1 + 1132 | 0] = 0;
 HEAP32[i1 + 1136 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i1 + 1140 | 0] = 0;
 i2 = __Znwj(88) | 0;
 __ZN7WebCore13PageThrottlerC1ERNS_4PageE(i2, i1);
 HEAP32[i1 + 1144 >> 2] = i2;
 i2 = __Znwj(4) | 0;
 __ZN7WebCore11PageConsoleC1ERNS_4PageE(i2, i1);
 HEAP32[i1 + 1148 >> 2] = i2;
 i2 = __Znwj(16) | 0;
 __ZN7WebCore14PageDebuggableC1ERNS_4PageE(i2, i1);
 i7 = i1 + 1152 | 0;
 HEAP32[i7 >> 2] = i2;
 _memset(i1 + 1156 | 0, 0, 48) | 0;
 i2 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i12 = i2;
  HEAP32[i8 >> 2] = i1;
  i13 = i12 | 0;
  __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i13, i8, i8);
  i14 = HEAP32[i7 >> 2] | 0;
  i15 = i14 | 0;
  __ZN9Inspector25RemoteInspectorDebuggable4initEv(i15);
  STACKTOP = i3;
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 HEAP32[H_BASE + 192 >> 2] = i2;
 __ZN7WebCore20NetworkStateNotifier29addNetworkStateChangeListenerEPFvbE(__ZN7WebCore20networkStateNotifierEv() | 0, F_BASE_vi + 2 | 0);
 i12 = HEAP32[H_BASE + 192 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 i13 = i12 | 0;
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i13, i8, i8);
 i14 = HEAP32[i7 >> 2] | 0;
 i15 = i14 | 0;
 __ZN9Inspector25RemoteInspectorDebuggable4initEv(i15);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4PageC1ERNS0_11PageClientsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 _memset(i1 | 0, 0, 20) | 0;
 i10 = HEAP32[i2 + 4 >> 2] | 0;
 i11 = __ZN3WTF10fastMallocEj(28) | 0;
 __ZN7WebCore6ChromeC1ERNS_4PageERNS_12ChromeClientE(i11, i1, i10);
 HEAP32[i1 + 20 >> 2] = i11;
 i11 = __ZN3WTF10fastMallocEj(40) | 0;
 __ZN7WebCore19DragCaretControllerC1Ev(i11);
 HEAP32[i1 + 24 >> 2] = i11;
 i11 = HEAP32[i2 + 16 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore14DragControllerC1ERNS_4PageERNS_10DragClientE(i10, i1, i11);
 HEAP32[i1 + 28 >> 2] = i10;
 i10 = __ZN3WTF10fastMallocEj(12) | 0;
 __ZN7WebCore15FocusControllerC1ERNS_4PageE(i10, i1);
 HEAP32[i1 + 32 >> 2] = i10;
 i10 = HEAP32[i2 + 8 >> 2] | 0;
 i11 = __ZN3WTF10fastMallocEj(128) | 0;
 __ZN7WebCore21ContextMenuControllerC1ERNS_4PageERNS_17ContextMenuClientE(i11, i1, i10);
 HEAP32[i1 + 36 >> 2] = i11;
 __ZN7WebCore19InspectorController6createEPNS_4PageEPNS_15InspectorClientE(i5, i1, HEAP32[i2 + 20 >> 2] | 0);
 i11 = i5 | 0;
 i5 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i5;
 HEAP32[i1 + 44 >> 2] = 0;
 __ZN7WebCore8Settings6createEPNS_4PageE(i6, i1);
 i5 = i6 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 + 48 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(168) | 0;
 __ZN7WebCore15ProgressTrackerC1Ev(i6);
 HEAP32[i1 + 52 >> 2] = i6;
 i6 = __ZN3WTF10fastMallocEj(8) | 0;
 i5 = i4 | 0;
 i11 = HEAP32[i2 + 28 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 if ((i11 | 0) != 0) {
  i10 = i11 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore21BackForwardControllerC1ERNS_4PageEN3WTF10PassRefPtrINS_17BackForwardClientEEE(i6, i1, i4);
 HEAP32[i1 + 56 >> 2] = i6;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 + 4 | 0;
   i4 = i5 | 0;
   i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i4 >> 2] = i10;
    break;
   }
   i10 = i5 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 __ZN7WebCore9MainFrame6createERNS_4PageERNS_17FrameLoaderClientE(i1 + 60 | 0, i1, HEAP32[i2 + 36 >> 2] | 0);
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN7WebCore11RenderTheme12themeForPageEPNS_4PageE(i7, i1);
 i6 = i7 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 68 >> 2] = i7;
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 32 >> 2];
 __ZN7WebCore15FeatureObserverC1Ev(i1 + 84 | 0);
 HEAP32[i1 + 88 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP8[i1 + 96 | 0] = 0;
 HEAP8[i1 + 97 | 0] = 1;
 HEAP8[i1 + 98 | 0] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP8[i1 + 104 | 0] = 0;
 HEAP8[i1 + 105 | 0] = 1;
 HEAPF32[i1 + 108 >> 2] = +1;
 HEAPF32[i1 + 112 >> 2] = +1;
 HEAPF32[i1 + 116 >> 2] = +1;
 HEAP8[i1 + 120 | 0] = 0;
 HEAP32[i1 + 124 >> 2] = 0;
 HEAP8[i1 + 128 | 0] = 0;
 _memset(i1 + 132 | 0, 0, 17) | 0;
 _memset(i1 + 152 | 0, 0, 16) | 0;
 HEAPF64[i1 + 168 >> 3] = +-1;
 HEAP32[i1 + 176 >> 2] = -1;
 HEAP8[i1 + 180 | 0] = 1;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 1;
 HEAPF64[i1 + 192 >> 3] = +__ZN7WebCore8Settings26defaultMinDOMTimerIntervalEv();
 HEAPF64[i1 + 200 >> 3] = +__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv();
 HEAP8[i1 + 208 | 0] = 0;
 HEAP8[i1 + 209 | 0] = 1;
 HEAP8[i1 + 210 | 0] = 1;
 _memset(i1 + 211 | 0, 0, 33) | 0;
 __ZN7WebCore6RegionC1Ev(i1 + 244 | 0);
 __ZN7WebCore6RegionC1Ev(i1 + 540 | 0);
 __ZN7WebCore6RegionC1Ev(i1 + 836 | 0);
 HEAP8[i1 + 1132 | 0] = 0;
 HEAP32[i1 + 1136 >> 2] = HEAP32[i2 >> 2];
 HEAP8[i1 + 1140 | 0] = 0;
 i2 = __Znwj(88) | 0;
 __ZN7WebCore13PageThrottlerC1ERNS_4PageE(i2, i1);
 HEAP32[i1 + 1144 >> 2] = i2;
 i2 = __Znwj(4) | 0;
 __ZN7WebCore11PageConsoleC1ERNS_4PageE(i2, i1);
 HEAP32[i1 + 1148 >> 2] = i2;
 i2 = __Znwj(16) | 0;
 __ZN7WebCore14PageDebuggableC1ERNS_4PageE(i2, i1);
 i7 = i1 + 1152 | 0;
 HEAP32[i7 >> 2] = i2;
 _memset(i1 + 1156 | 0, 0, 48) | 0;
 i2 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i12 = i2;
  HEAP32[i8 >> 2] = i1;
  i13 = i12 | 0;
  __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i13, i8, i8);
  i14 = HEAP32[i7 >> 2] | 0;
  i15 = i14 | 0;
  __ZN9Inspector25RemoteInspectorDebuggable4initEv(i15);
  STACKTOP = i3;
  return;
 }
 i2 = __ZN3WTF10fastMallocEj(20) | 0;
 _memset(i2 | 0, 0, 20) | 0;
 HEAP32[H_BASE + 192 >> 2] = i2;
 __ZN7WebCore20NetworkStateNotifier29addNetworkStateChangeListenerEPFvbE(__ZN7WebCore20networkStateNotifierEv() | 0, F_BASE_vi + 2 | 0);
 i12 = HEAP32[H_BASE + 192 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 i13 = i12 | 0;
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i9, i13, i8, i8);
 i14 = HEAP32[i7 >> 2] | 0;
 i15 = i14 | 0;
 __ZN9Inspector25RemoteInspectorDebuggable4initEv(i15);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Page14refreshPluginsEb(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 if ((HEAP32[H_BASE + 192 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore10PluginData7refreshEv();
 i2 = HEAP32[H_BASE + 192 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L7;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 }
 if (i1) {
  i8 = 0;
  i9 = 0;
  i10 = 0;
  i11 = i6;
 } else {
  i1 = i6;
  L17 : while (1) {
   i6 = (HEAP32[i1 >> 2] | 0) + 64 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   do {
    if ((i3 | 0) != 0) {
     i6 = i3 | 0;
     i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i4 | 0) == 0) {
      __ZN7WebCore10PluginDataD2Ev(i3);
      __ZN3WTF8fastFreeEPv(i3);
      break;
     } else {
      HEAP32[i6 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i3 = i1 + 4 | 0;
   if ((i3 | 0) == (i5 | 0)) {
    i12 = 51;
    break;
   } else {
    i13 = i3;
   }
   while (1) {
    i3 = HEAP32[i13 >> 2] | 0;
    if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
     break;
    }
    i3 = i13 + 4 | 0;
    if ((i3 | 0) == (i5 | 0)) {
     i12 = 49;
     break L17;
    } else {
     i13 = i3;
    }
   }
   if ((i13 | 0) == (i5 | 0)) {
    i12 = 48;
    break;
   } else {
    i1 = i13;
   }
  }
  if ((i12 | 0) == 48) {
   return;
  } else if ((i12 | 0) == 49) {
   return;
  } else if ((i12 | 0) == 51) {
   return;
  }
 }
 L33 : while (1) {
  i13 = HEAP32[i11 >> 2] | 0;
  i1 = i13 + 64 | 0;
  i3 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  do {
   if ((i3 | 0) != 0) {
    i1 = i3 | 0;
    i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) == 0) {
     __ZN7WebCore10PluginDataD2Ev(i3);
     __ZN3WTF8fastFreeEPv(i3);
     break;
    } else {
     HEAP32[i1 >> 2] = i4;
     break;
    }
   }
  } while (0);
  i3 = HEAP32[i13 + 60 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i14 = i8;
   i15 = i9;
   i16 = i10;
  } else {
   i4 = i8;
   i1 = i9;
   i6 = i10;
   i2 = i3;
   while (1) {
    do {
     if ((HEAP8[HEAP32[i2 + 100 >> 2] | 0] & 1) == 0) {
      i17 = i6;
      i18 = i1;
      i19 = i4;
     } else {
      if ((i4 | 0) != (i1 | 0)) {
       HEAP32[i6 + (i4 << 2) >> 2] = i2;
       i3 = i2 + 4 | 0;
       HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
       i17 = i6;
       i18 = i1;
       i19 = i4 + 1 | 0;
       break;
      }
      i3 = i1 + 1 | 0;
      i7 = i3 + (i1 >>> 2) | 0;
      i20 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
      i7 = i20 >>> 0 > i3 >>> 0 ? i20 : i3;
      do {
       if (i1 >>> 0 < i7 >>> 0) {
        if (i7 >>> 0 > 1073741823 >>> 0) {
         i12 = 32;
         break L33;
        }
        i20 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
        i21 = i20 >>> 2;
        i22 = __ZN3WTF10fastMallocEj(i20) | 0;
        i20 = i22;
        i23 = i6;
        _memcpy(i22 | 0, i23 | 0, i1 << 2) | 0;
        if ((i6 | 0) == 0) {
         i24 = i20;
         i25 = i21;
         break;
        }
        i22 = (i20 | 0) == (i6 | 0);
        __ZN3WTF8fastFreeEPv(i23);
        i24 = i22 ? 0 : i20;
        i25 = i22 ? 0 : i21;
       } else {
        i24 = i6;
        i25 = i1;
       }
      } while (0);
      HEAP32[i24 + (i1 << 2) >> 2] = i2;
      i7 = i2 + 4 | 0;
      HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
      i17 = i24;
      i18 = i25;
      i19 = i3;
     }
    } while (0);
    i7 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
    if ((i7 | 0) == 0) {
     i14 = i19;
     i15 = i18;
     i16 = i17;
     break;
    } else {
     i4 = i19;
     i1 = i18;
     i6 = i17;
     i2 = i7;
    }
   }
  }
  i2 = i11 + 4 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   break;
  } else {
   i26 = i2;
  }
  while (1) {
   i2 = HEAP32[i26 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i26 + 4 | 0;
   if ((i2 | 0) == (i5 | 0)) {
    break L33;
   } else {
    i26 = i2;
   }
  }
  if ((i26 | 0) == (i5 | 0)) {
   break;
  } else {
   i8 = i14;
   i9 = i15;
   i10 = i16;
   i11 = i26;
  }
 }
 if ((i12 | 0) == 32) {
  _WTFCrash();
 }
 i12 = (i14 | 0) == 0;
 do {
  if (!i12) {
   i26 = 0;
   while (1) {
    __ZN7WebCore11FrameLoader6reloadEb((HEAP32[i16 + (i26 << 2) >> 2] | 0) + 80 | 0, 0);
    i26 = i26 + 1 | 0;
    if (i26 >>> 0 >= i14 >>> 0) {
     break;
    }
   }
   if (i12) {
    break;
   }
   i26 = i16 + (i14 << 2) | 0;
   i11 = i16;
   while (1) {
    i10 = (HEAP32[i11 >> 2] | 0) + 4 | 0;
    i15 = i10 | 0;
    i9 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    do {
     if ((i9 | 0) == 0) {
      i8 = i10 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
     } else {
      HEAP32[i15 >> 2] = i9;
     }
    } while (0);
    i11 = i11 + 4 | 0;
    if ((i11 | 0) == (i26 | 0)) {
     break;
    }
   }
  }
 } while (0);
 if ((i16 | 0) == 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i16);
 return;
}
function ___udivmoddi4(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i6 = i1;
 i7 = i2;
 i8 = i7;
 i9 = i3;
 i10 = i4;
 i11 = i10;
 if ((i8 | 0) == 0) {
  i12 = (i5 | 0) != 0;
  if ((i11 | 0) == 0) {
   if (i12) {
    HEAP32[i5 >> 2] = (i6 >>> 0) % (i9 >>> 0);
    HEAP32[i5 + 4 >> 2] = 0;
   }
   i13 = 0;
   i14 = (i6 >>> 0) / (i9 >>> 0) >>> 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  }
 }
 i12 = (i11 | 0) == 0;
 do {
  if ((i9 | 0) == 0) {
   if (i12) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = (i8 >>> 0) % (i9 >>> 0);
     HEAP32[i5 + 4 >> 2] = 0;
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i9 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   if ((i6 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = (i8 >>> 0) % (i11 >>> 0);
    }
    i13 = 0;
    i14 = (i8 >>> 0) / (i11 >>> 0) >>> 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i11 - 1 | 0;
   if ((i15 & i11 | 0) == 0) {
    if ((i5 | 0) != 0) {
     HEAP32[i5 >> 2] = i1 & -1;
     HEAP32[i5 + 4 >> 2] = i15 & i8 | i2 & 0;
    }
    i13 = 0;
    i14 = i8 >>> ((_llvm_cttz_i32(i11 | 0) | 0) >>> 0);
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
   if (i15 >>> 0 <= 30) {
    i16 = i15 + 1 | 0;
    i17 = 31 - i15 | 0;
    i18 = i16;
    i19 = i8 << i17 | i6 >>> (i16 >>> 0);
    i20 = i8 >>> (i16 >>> 0);
    i21 = 0;
    i22 = i6 << i17;
    break;
   }
   if ((i5 | 0) == 0) {
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   HEAP32[i5 >> 2] = i1 & -1;
   HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
   i13 = 0;
   i14 = 0;
   return (tempRet0 = i13, i14) | 0;
  } else {
   if (!i12) {
    i17 = (_llvm_ctlz_i32(i11 | 0) | 0) - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    if (i17 >>> 0 <= 31) {
     i16 = i17 + 1 | 0;
     i15 = 31 - i17 | 0;
     i23 = i17 - 31 >> 31;
     i18 = i16;
     i19 = i6 >>> (i16 >>> 0) & i23 | i8 << i15;
     i20 = i8 >>> (i16 >>> 0) & i23;
     i21 = 0;
     i22 = i6 << i15;
     break;
    }
    if ((i5 | 0) == 0) {
     i13 = 0;
     i14 = 0;
     return (tempRet0 = i13, i14) | 0;
    }
    HEAP32[i5 >> 2] = i1 & -1;
    HEAP32[i5 + 4 >> 2] = i7 | i2 & 0;
    i13 = 0;
    i14 = 0;
    return (tempRet0 = i13, i14) | 0;
   }
   i15 = i9 - 1 | 0;
   if ((i15 & i9 | 0) != 0) {
    i23 = (_llvm_ctlz_i32(i9 | 0) | 0) + 33 - (_llvm_ctlz_i32(i8 | 0) | 0) | 0;
    i16 = 64 - i23 | 0;
    i17 = 32 - i23 | 0;
    i24 = i17 >> 31;
    i25 = i23 - 32 | 0;
    i26 = i25 >> 31;
    i18 = i23;
    i19 = i17 - 1 >> 31 & i8 >>> (i25 >>> 0) | (i8 << i17 | i6 >>> (i23 >>> 0)) & i26;
    i20 = i26 & i8 >>> (i23 >>> 0);
    i21 = i6 << i16 & i24;
    i22 = (i8 << i16 | i6 >>> (i25 >>> 0)) & i24 | i6 << i17 & i23 - 33 >> 31;
    break;
   }
   if ((i5 | 0) != 0) {
    HEAP32[i5 >> 2] = i15 & i6;
    HEAP32[i5 + 4 >> 2] = 0;
   }
   if ((i9 | 0) == 1) {
    i13 = i7 | i2 & 0;
    i14 = i1 & -1 | 0;
    return (tempRet0 = i13, i14) | 0;
   } else {
    i15 = _llvm_cttz_i32(i9 | 0) | 0;
    i13 = i8 >>> (i15 >>> 0) | 0;
    i14 = i8 << 32 - i15 | i6 >>> (i15 >>> 0) | 0;
    return (tempRet0 = i13, i14) | 0;
   }
  }
 } while (0);
 if ((i18 | 0) == 0) {
  i27 = i22;
  i28 = i21;
  i29 = i20;
  i30 = i19;
  i31 = 0;
  i32 = 0;
 } else {
  i6 = i3 & -1 | 0;
  i3 = i10 | i4 & 0;
  i4 = _i64Add(i6, i3, -1, -1) | 0;
  i10 = tempRet0;
  i8 = i22;
  i22 = i21;
  i21 = i20;
  i20 = i19;
  i19 = i18;
  i18 = 0;
  while (1) {
   i33 = i22 >>> 31 | i8 << 1;
   i34 = i18 | i22 << 1;
   i9 = i20 << 1 | i8 >>> 31 | 0;
   i1 = i20 >>> 31 | i21 << 1 | 0;
   _i64Subtract(i4, i10, i9, i1) | 0;
   i2 = tempRet0;
   i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
   i35 = i7 & 1;
   i36 = _i64Subtract(i9, i1, i7 & i6, (((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1) & i3) | 0;
   i37 = tempRet0;
   i2 = i19 - 1 | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i33;
    i22 = i34;
    i21 = i37;
    i20 = i36;
    i19 = i2;
    i18 = i35;
   }
  }
  i27 = i33;
  i28 = i34;
  i29 = i37;
  i30 = i36;
  i31 = 0;
  i32 = i35;
 }
 i35 = i28;
 i28 = 0;
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = i30;
  HEAP32[i5 + 4 >> 2] = i29;
 }
 i13 = (i35 | 0) >>> 31 | (i27 | i28) << 1 | (i28 << 1 | i35 >>> 31) & 0 | i31;
 i14 = (i35 << 1 | 0 >>> 31) & -2 | i32;
 return (tempRet0 = i13, i14) | 0;
}
function __ZNK7WebCore4Page14userStyleSheetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i1 + 140 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (!(__ZN7WebCore23getFileModificationTimeERKN3WTF6StringERl(i9, i3) | 0)) {
    i11 = i1 + 144 | 0;
    i12 = i11 | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i13 | 0) == 0) {
     i14 = i11;
     STACKTOP = i2;
     return i14 | 0;
    }
    i12 = i13 | 0;
    i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     i14 = i11;
     STACKTOP = i2;
     return i14 | 0;
    } else {
     HEAP32[i12 >> 2] = i15;
     i14 = i11;
     STACKTOP = i2;
     return i14 | 0;
    }
   }
   i11 = i1 + 148 | 0;
   do {
    if ((HEAP8[i11] & 1) != 0) {
     if ((HEAP32[i3 >> 2] | 0) > (HEAP32[i1 + 152 >> 2] | 0)) {
      break;
     }
     i14 = i1 + 144 | 0;
     STACKTOP = i2;
     return i14 | 0;
    }
   } while (0);
   HEAP8[i11] = 1;
   i15 = i1 + 144 | 0;
   i12 = i15 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   do {
    if ((i13 | 0) != 0) {
     i16 = i13 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   HEAP32[i1 + 152 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore12SharedBuffer24createWithContentsOfFileERKN3WTF6StringE(i4, i9);
   i13 = i4 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i14 = i15;
    STACKTOP = i2;
    return i14 | 0;
   }
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 96 | 0);
   HEAP32[i6 >> 2] = 0;
   i13 = __ZN3WTF10fastMallocEj(52) | 0;
   i17 = i13;
   __ZN7WebCore19TextResourceDecoderC1ERKN3WTF6StringERKNS_12TextEncodingEb(i17, i5, i6, 0);
   i16 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i18 = i16 | 0;
     i19 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i18 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i16 = __ZNK7WebCore12SharedBuffer4dataEv(i11) | 0;
   __ZN7WebCore19TextResourceDecoder6decodeEPKcj(i7, i17, i16, __ZNK7WebCore12SharedBuffer4sizeEv(i11) | 0);
   i16 = i7 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   i18 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i19;
   do {
    if ((i18 | 0) != 0) {
     i19 = i18 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i19 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i18 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i12 = i18 | 0;
     i20 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i12 >> 2] = i20;
      break;
     }
    }
   } while (0);
   __ZN7WebCore19TextResourceDecoder5flushEv(i8, i17);
   __ZN3WTF6String6appendERKS0_(i15, i8);
   i18 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i16 = i18 | 0;
     i20 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i20 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i16 >> 2] = i20;
      break;
     }
    }
   } while (0);
   do {
    if ((i13 | 0) != 0) {
     i18 = i13;
     i20 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) == 0) {
      __ZN7WebCore19TextResourceDecoderD1Ev(i17);
      __ZN3WTF8fastFreeEPv(i13);
      break;
     } else {
      HEAP32[i18 >> 2] = i20;
      break;
     }
    }
   } while (0);
   i13 = i11 | 0;
   i17 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i11);
    __ZN3WTF8fastFreeEPv(i11);
    i14 = i15;
    STACKTOP = i2;
    return i14 | 0;
   } else {
    HEAP32[i13 >> 2] = i17;
    i14 = i15;
    STACKTOP = i2;
    return i14 | 0;
   }
  }
 } while (0);
 i14 = i1 + 144 | 0;
 STACKTOP = i2;
 return i14 | 0;
}
function __ZN7WebCore4Page22nonFastScrollableRectsEPKNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, d23 = +0, d24 = +0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 352 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 312 | 0;
 i8 = i4 + 320 | 0;
 i9 = i4 + 336 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0;
 if ((i12 | 0) != 0) {
  __ZN7WebCore8Document12updateLayoutEv(i12);
 }
 i12 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = 0;
   i14 = 0;
  } else {
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   __ZNK7WebCore20ScrollingCoordinator30computeNonFastScrollableRegionEPKNS_5FrameERKNS_8IntPointE(i6, i12, i3, i7);
   __ZNK7WebCore6Region5rectsEv(i5, i6);
   i2 = i5 + 8 | 0;
   i15 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   i2 = i5 | 0;
   i16 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   i2 = i6 + 164 | 0;
   if ((HEAP32[i2 >> 2] | 0) != 0) {
    HEAP32[i2 >> 2] = 0;
   }
   i2 = i6 + 156 | 0;
   i17 = HEAP32[i2 >> 2] | 0;
   if (!((i6 + 168 | 0) == (i17 | 0) | (i17 | 0) == 0)) {
    HEAP32[i2 >> 2] = 0;
    HEAP32[i6 + 160 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i17);
   }
   i17 = i6 + 24 | 0;
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    HEAP32[i17 >> 2] = 0;
   }
   i17 = i6 + 16 | 0;
   i2 = HEAP32[i17 >> 2] | 0;
   if ((i6 + 28 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i13 = i16;
    i14 = i15;
    break;
   }
   HEAP32[i17 >> 2] = 0;
   HEAP32[i6 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i2);
   i13 = i16;
   i14 = i15;
  }
 } while (0);
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = 0;
 i5 = i8 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i8 + 8 | 0;
 HEAP32[i7 >> 2] = i14;
 i3 = (i14 | 0) == 0;
 L17 : do {
  if (!i3) {
   if (i14 >>> 0 > 134217727 >>> 0) {
    _WTFCrash();
   }
   i12 = __ZN3WTF18fastMallocGoodSizeEj(i14 << 5) | 0;
   HEAP32[i5 >> 2] = i12 >>> 5;
   i15 = __ZN3WTF10fastMallocEj(i12) | 0;
   i12 = i15;
   HEAP32[i6 >> 2] = i12;
   do {
    if ((i15 | 0) != 0) {
     i16 = HEAP32[i7 >> 2] | 0;
     i2 = i12 + (i16 << 5) | 0;
     if ((i16 | 0) == 0) {
      break;
     } else {
      i18 = i12;
     }
     while (1) {
      _memset(i18 | 0, 0, 32) | 0;
      i18 = i18 + 32 | 0;
      if ((i18 | 0) == (i2 | 0)) {
       break;
      }
     }
    }
   } while (0);
   if (i3) {
    break;
   }
   i12 = i9 + 8 | 0;
   i15 = i11 + 4 | 0;
   i2 = i11 + 12 | 0;
   i16 = 0;
   while (1) {
    if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     break;
    }
    i17 = HEAP32[i6 >> 2] | 0;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i11, i13 + (i16 << 4) | 0);
    i19 = HEAP32[i10 >> 2] | 0;
    i20 = HEAP32[i10 + 4 >> 2] | 0;
    d21 = (HEAP32[tempDoublePtr >> 2] = i19, +HEAPF32[tempDoublePtr >> 2]);
    d22 = d21 + +HEAPF32[i12 >> 2];
    d23 = +HEAPF32[i15 >> 2];
    d24 = d23 + +HEAPF32[i2 >> 2];
    i25 = i17 + (i16 << 5) | 0;
    HEAP32[i25 >> 2] = i19;
    HEAP32[i25 + 4 >> 2] = i20;
    HEAPF32[i17 + (i16 << 5) + 8 >> 2] = d22;
    HEAPF32[i17 + (i16 << 5) + 12 >> 2] = d23;
    HEAPF32[i17 + (i16 << 5) + 16 >> 2] = d22;
    HEAPF32[i17 + (i16 << 5) + 20 >> 2] = d24;
    HEAPF32[i17 + (i16 << 5) + 24 >> 2] = d21;
    HEAPF32[i17 + (i16 << 5) + 28 >> 2] = d24;
    i16 = i16 + 1 | 0;
    if (i16 >>> 0 >= i14 >>> 0) {
     break L17;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i14 = __ZN3WTF10fastMallocEj(16) | 0;
 __ZN7WebCore14ClientRectListC1ERKN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i14, i8);
 HEAP32[i1 >> 2] = i14;
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF8fastFreeEPv(i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore4Page21removeAllVisitedLinksEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i2 = i1 | 0;
 i3 = i1 + 24 | 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 _memset(i2 | 0, 0, 20) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = i6 + (i7 << 2) | 0;
 L4 : do {
  if ((HEAP32[i5 + 12 >> 2] | 0) == 0) {
   i9 = 7;
  } else {
   L6 : do {
    if ((i7 | 0) == 0) {
     i10 = i6;
    } else {
     i11 = i6;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L6;
      }
      i12 = i11 + 4 | 0;
      if ((i12 | 0) == (i8 | 0)) {
       i9 = 7;
       break L4;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i8 | 0)) {
    i9 = 7;
    break;
   }
   i11 = i2 | 0;
   i12 = i10;
   L12 : while (1) {
    i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 160 >> 2] | 0;
    HEAP32[i3 >> 2] = i13;
    if ((i13 | 0) != 0) {
     __ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i4, i11, i3, i3);
    }
    i13 = i12 + 4 | 0;
    if ((i13 | 0) == (i8 | 0)) {
     break;
    } else {
     i14 = i13;
    }
    while (1) {
     i13 = HEAP32[i14 >> 2] | 0;
     if (!((i13 | 0) == (-1 | 0) | (i13 | 0) == 0)) {
      break;
     }
     i13 = i14 + 4 | 0;
     if ((i13 | 0) == (i8 | 0)) {
      break L12;
     } else {
      i14 = i13;
     }
    }
    if ((i14 | 0) == (i8 | 0)) {
     break;
    } else {
     i12 = i14;
    }
   }
   i12 = i2 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i13 = HEAP32[i2 + 4 >> 2] | 0;
   i15 = i11 + (i13 << 2) | 0;
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    i16 = i12;
    break;
   }
   L23 : do {
    if ((i13 | 0) == 0) {
     i17 = i11;
    } else {
     i18 = i11;
     while (1) {
      i19 = HEAP32[i18 >> 2] | 0;
      if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
       i17 = i18;
       break L23;
      }
      i19 = i18 + 4 | 0;
      if ((i19 | 0) == (i15 | 0)) {
       i16 = i12;
       break L4;
      } else {
       i18 = i19;
      }
     }
    }
   } while (0);
   if ((i17 | 0) == (i15 | 0)) {
    i16 = i12;
    break;
   } else {
    i20 = i17;
   }
   while (1) {
    __ZN7WebCore9PageGroup18removeVisitedLinksEv(HEAP32[i20 >> 2] | 0);
    i11 = i20 + 4 | 0;
    if ((i11 | 0) == (i15 | 0)) {
     i16 = i12;
     break L4;
    } else {
     i21 = i11;
    }
    while (1) {
     i11 = HEAP32[i21 >> 2] | 0;
     if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
      break;
     }
     i11 = i21 + 4 | 0;
     if ((i11 | 0) == (i15 | 0)) {
      i16 = i12;
      break L4;
     } else {
      i21 = i11;
     }
    }
    if ((i21 | 0) == (i15 | 0)) {
     i16 = i12;
     break;
    } else {
     i20 = i21;
    }
   }
  }
 } while (0);
 if ((i9 | 0) == 7) {
  i16 = i2 | 0;
 }
 i2 = HEAP32[i16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore4Page11pluginViewsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = HEAP32[i2 + 60 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i2 = i6;
 i6 = 0;
 i7 = 0;
 while (1) {
  i8 = HEAP32[i2 + 452 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i9 = 20;
   break;
  }
  i10 = HEAP32[i8 + 76 >> 2] | 0;
  i11 = HEAP32[i8 + 80 >> 2] | 0;
  i12 = i10 + (i11 << 2) | 0;
  L7 : do {
   if ((HEAP32[i8 + 88 >> 2] | 0) == 0) {
    i13 = i6;
    i14 = i7;
   } else {
    L9 : do {
     if ((i11 | 0) == 0) {
      i15 = i10;
     } else {
      i16 = i10;
      while (1) {
       i17 = HEAP32[i16 >> 2] | 0;
       if (!((i17 | 0) == (-1 | 0) | (i17 | 0) == 0)) {
        i15 = i16;
        break L9;
       }
       i17 = i16 + 4 | 0;
       if ((i17 | 0) == (i12 | 0)) {
        i13 = i6;
        i14 = i7;
        break L7;
       } else {
        i16 = i17;
       }
      }
     }
    } while (0);
    if ((i15 | 0) == (i12 | 0)) {
     i13 = i6;
     i14 = i7;
     break;
    } else {
     i18 = i15;
     i19 = i6;
     i20 = i7;
    }
    while (1) {
     i16 = HEAP32[i18 >> 2] | 0;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 44 >> 2] & 1](i16) | 0) {
       i17 = i16;
       if ((i19 | 0) == (HEAP32[i4 >> 2] | 0)) {
        __ZN3WTF6VectorINS_3RefIN7WebCore14PluginViewBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i19 + 1 | 0);
        i21 = HEAP32[i3 >> 2] | 0;
        i22 = HEAP32[i5 >> 2] | 0;
        HEAP32[i21 + (i22 << 2) >> 2] = i17;
        i23 = i16 + 4 | 0;
        HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
        i23 = i22 + 1 | 0;
        HEAP32[i5 >> 2] = i23;
        i24 = i23;
        i25 = i21;
        break;
       } else {
        HEAP32[i20 + (i19 << 2) >> 2] = i17;
        i17 = i16 + 4 | 0;
        HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
        i17 = (HEAP32[i5 >> 2] | 0) + 1 | 0;
        HEAP32[i5 >> 2] = i17;
        i24 = i17;
        i25 = i20;
        break;
       }
      } else {
       i24 = i19;
       i25 = i20;
      }
     } while (0);
     i16 = i18 + 4 | 0;
     if ((i16 | 0) == (i12 | 0)) {
      i13 = i24;
      i14 = i25;
      break L7;
     } else {
      i26 = i16;
     }
     while (1) {
      i16 = HEAP32[i26 >> 2] | 0;
      if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
       break;
      }
      i16 = i26 + 4 | 0;
      if ((i16 | 0) == (i12 | 0)) {
       i13 = i24;
       i14 = i25;
       break L7;
      } else {
       i26 = i16;
      }
     }
     if ((i26 | 0) == (i12 | 0)) {
      i13 = i24;
      i14 = i25;
      break;
     } else {
      i18 = i26;
      i19 = i24;
      i20 = i25;
     }
    }
   }
  } while (0);
  i12 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  if ((i12 | 0) == 0) {
   i9 = 21;
   break;
  } else {
   i2 = i12;
   i6 = i13;
   i7 = i14;
  }
 }
 if ((i9 | 0) == 20) {
  return;
 } else if ((i9 | 0) == 21) {
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
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
  i2 = i7 + (i10 << 2) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
    i22 = i14 + (i21 << 2) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 9;
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
   if ((i25 | 0) == 9) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 8;
  } else {
   i9 = i7 << 1;
   i8 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i9 | 0) ? i7 : i9;
  }
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore4Page18setPageScaleFactorEfRKNS_8IntPointE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i1 + 60 | 0;
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 456 >> 2] | 0;
 i10 = __ZNK7WebCore8Document4viewEv(i9) | 0;
 i11 = i1 + 112 | 0;
 if (+HEAPF32[i11 >> 2] == d2) {
  if ((i10 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i12 = i5 | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 164 >> 2] & 1](i5, i10 | 0, 0);
  do {
   if ((HEAP32[i12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    if ((HEAP32[i12 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
     break;
    }
    if ((HEAP8[i10 + 172 | 0] & 1) != 0) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  } while (0);
  if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 183 | 0] | 0) >= 0) {
   __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i9);
  }
  __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i10, i3);
  STACKTOP = i4;
  return;
 }
 HEAPF32[i11 >> 2] = d2;
 i11 = i1 + 48 | 0;
 if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 183 | 0] | 0) >= 0) {
  i1 = HEAP32[i9 + 1584 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i12 = i1 | 0;
    i13 = i1 + 20 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 & 1 | 0) != 0) {
     break;
    }
    HEAP32[i13 >> 2] = i14 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i12, 1, 0);
    if ((HEAP32[i13 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i12);
   }
  } while (0);
  __ZN7WebCore8Document11recalcStyleENS_5Style6ChangeE(i9, 4);
  i1 = HEAP32[(HEAP32[i8 >> 2] | 0) + 452 >> 2] | 0;
  HEAP32[i7 >> 2] = -1073741824;
  HEAP32[i7 + 4 >> 2] = -1073741824;
  HEAP32[i7 + 8 >> 2] = 2147483647;
  HEAP32[i7 + 12 >> 2] = 2147483647;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i7);
  __ZN7WebCore9FrameView14invalidateRectERKNS_7IntRectE(i1, i6);
 }
 __ZN7WebCore5Frame30deviceOrPageScaleFactorChangedEv(HEAP32[i8 >> 2] | 0);
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore9FrameView34fixedElementsLayoutRelativeToFrameEv(i10) | 0) {
  __ZN7WebCore9FrameView39setViewportConstrainedObjectsNeedLayoutEv(i10);
 }
 i8 = i5 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 164 >> 2] & 1](i5, i10 | 0, 0);
 do {
  if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
   if ((HEAP32[i8 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[i11 >> 2] | 0) + 183 | 0] | 0) >= 0) {
   i8 = HEAP32[i9 + 1584 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if ((HEAP32[i8 + 20 >> 2] & 31 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore9FrameView14didFirstLayoutEv(i10) | 0)) {
    break;
   }
   __ZN7WebCore9FrameView6layoutEb(i10, 1);
  }
 } while (0);
 __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i10, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore4Page10findStringERKN3WTF6StringEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i7 = (i3 & 16 | 0) != 0;
 i9 = i1 + 32 | 0;
 i1 = __ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i9 >> 2] | 0) | 0;
 i10 = i3 & -49 | 32;
 i11 = (i3 & 8 | 0) == 0;
 i12 = i1;
 while (1) {
  if (__ZN7WebCore6Editor10findStringERKN3WTF6StringEj(HEAP32[i12 + 464 >> 2] | 0, i2, i10) | 0) {
   i13 = 5;
   break;
  }
  i14 = i12 + 40 | 0;
  if (i11) {
   i15 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i14, i7) | 0;
  } else {
   i15 = __ZNK7WebCore9FrameTree24traversePreviousWithWrapEb(i14, i7) | 0;
  }
  i16 = (i15 | 0) == 0;
  if (i16 | (i15 | 0) == (i1 | 0)) {
   break;
  } else {
   i12 = i15;
  }
 }
 if ((i13 | 0) == 5) {
  if ((i12 | 0) != (i1 | 0)) {
   __ZN7WebCore14FrameSelection5clearEv(HEAP32[i1 + 468 >> 2] | 0);
  }
  i13 = HEAP32[i9 >> 2] | 0;
  i11 = i5 | 0;
  HEAP32[i11 >> 2] = i12;
  if ((i12 | 0) != 0) {
   i10 = i12 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i13, i5);
  i5 = HEAP32[i11 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
  i11 = i5 + 4 | 0;
  i5 = i11 | 0;
  i13 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) != 0) {
   HEAP32[i5 >> 2] = i13;
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
  i13 = i11 - 4 | 0;
  if ((i13 | 0) == 0) {
   i8 = 1;
   STACKTOP = i4;
   return i8 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
  i8 = 1;
  STACKTOP = i4;
  return i8 | 0;
 }
 if (!i7) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 468 >> 2] | 0) + 84 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i7 = __ZN7WebCore6Editor10findStringERKN3WTF6StringEj(HEAP32[i1 + 464 >> 2] | 0, i2, i3 | 48) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = i15;
 if (!i16) {
  i16 = i15 + 4 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 __ZN7WebCore15FocusController15setFocusedFrameEN3WTF10PassRefPtrINS_5FrameEEE(i3, i6);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i8 = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 i9 = i6 + 4 | 0;
 i6 = i9 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = i3;
  i8 = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 i3 = i9 - 4 | 0;
 if ((i3 | 0) == 0) {
  i8 = i7;
  STACKTOP = i4;
  return i8 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 i8 = i7;
 STACKTOP = i4;
 return i8 | 0;
}
function __ZN7WebCore4Page24findStringMatchingRangesERKN3WTF6StringEjiPNS1_6VectorINS1_6RefPtrINS_5RangeEEELj0ENS1_15CrashOnOverflowEEERi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 HEAP32[i6 >> 2] = 0;
 i11 = (i4 | 0) == 0;
 i12 = i5 + 8 | 0;
 i13 = 0;
 i14 = HEAP32[i1 + 60 >> 2] | 0;
 while (1) {
  if (i11) {
   i15 = 0;
  } else {
   i15 = i4 - (HEAP32[i12 >> 2] | 0) | 0;
  }
  __ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i14 + 464 >> 2] | 0, i2, 0, i3, i15, 1, i5) | 0;
  i13 = (HEAP32[(HEAP32[i14 + 468 >> 2] | 0) + 84 >> 2] | 0) == 2 ? i14 : i13;
  i14 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i14 + 40 | 0, 0) | 0;
  if ((i14 | 0) == 0) {
   break;
  }
 }
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((i13 | 0) == 0) {
  if ((i3 & 8 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   STACKTOP = i7;
   return;
  } else {
   HEAP32[i6 >> 2] = i14 - 1;
   STACKTOP = i7;
   return;
  }
 }
 HEAP32[i6 >> 2] = -1;
 __ZNK7WebCore16VisibleSelection10firstRangeEv(i8, (HEAP32[i13 + 468 >> 2] | 0) + 32 | 0);
 i13 = i8 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 L18 : do {
  if ((i3 & 8 | 0) == 0) {
   i13 = i5 | 0;
   i14 = i10 | 0;
   i15 = 0;
   while (1) {
    if (i15 >>> 0 >= (HEAP32[i12 >> 2] | 0) >>> 0) {
     break L18;
    }
    i2 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i15 << 2) >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i8, 1, i2, i14) | 0) << 16 >> 16 < 0) {
     break;
    } else {
     i15 = i15 + 1 | 0;
    }
   }
   HEAP32[i6 >> 2] = i15;
  } else {
   i14 = i5 | 0;
   i13 = i9 | 0;
   i2 = HEAP32[i12 >> 2] | 0;
   while (1) {
    if ((i2 | 0) == 0) {
     break L18;
    }
    i16 = i2 - 1 | 0;
    if ((HEAP32[i12 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i17 = 12;
     break;
    }
    i4 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i16 << 2) >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    if ((__ZNK7WebCore5Range21compareBoundaryPointsENS0_10CompareHowEPKS0_Ri(i8, 3, i4, i13) | 0) << 16 >> 16 > 0) {
     i17 = 14;
     break;
    } else {
     i2 = i16;
    }
   }
   if ((i17 | 0) == 12) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i17 | 0) == 14) {
    HEAP32[i6 >> 2] = i16;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i16 = i8 | 0;
 i6 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore5RangeD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i16 >> 2] = i6;
  STACKTOP = i7;
  return;
 }
}
function __ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  i13 = __ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore4Page20scrollingCoordinatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 44 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 189 | 0] & 16) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i7 >> 2] | 0) + 324 >> 2] & 1](i3, i7, i1);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i3;
 do {
  if ((i8 | 0) != 0) {
   i3 = i8 + 4 | 0;
   i9 = i3 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i9 = i3 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 4 | 0;
   i9 = i7 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i9 = i7 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZN7WebCore20ScrollingCoordinator6createEPNS_4PageE(i4, i1);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i8 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i9 = i4 | 0;
   if (((tempValue = HEAP32[i9 >> 2] | 0, HEAP32[i9 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i1 = i8 + 4 | 0;
 i8 = i1 | 0;
 if (((tempValue = HEAP32[i8 >> 2] | 0, HEAP32[i8 >> 2] = tempValue - 1, tempValue) - 1 | 0) >= 1) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i8 = i1 - 4 | 0;
 if ((i8 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
 i6 = HEAP32[i5 >> 2] | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore4Page26addRelevantUnpaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 296 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i6 >> 2] = i2;
 if ((HEAP8[i1 + 1132 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 212 >> 2] & 4 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i2 = i10 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 + 8 >> 2] = 980;
 HEAP32[i10 + 12 >> 2] = 1300;
 __ZNK7WebCore10RenderView8viewRectEv(i5, i14);
 i14 = HEAP32[i5 + 8 >> 2] | 0;
 if ((i14 | 0) > 980) {
  HEAP32[i2 >> 2] = (i14 - 980 | 0) / 2 & -1;
 }
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i10);
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = i10;
 i10 = i8 + 8 | 0;
 i8 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 + 8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 12 >> 2] = i8;
 if (!(__ZNK7WebCore10LayoutRect10intersectsERKS0_(i3, i7) | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i11, i1 + 224 | 0, i6, i6);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i13, i3);
 __ZN7WebCore6RegionC1ERKNS_7IntRectE(i12, i13);
 __ZN7WebCore6Region5uniteERKS0_(i1 + 836 | 0, i12);
 i1 = i12 + 164 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i12 + 156 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 if (!((i12 + 168 | 0) == (i13 | 0) | (i13 | 0) == 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i12 + 160 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i12 + 24 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = i12 + 16 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 if ((i12 + 28 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i13 >> 2] = 0;
 HEAP32[i12 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
       break;
      } else {
       i25 = i31;
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
      }
     }
    }
   } while (0);
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore4Page13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   i10 = (i4 | 0) != 0;
   do {
    if (i10) {
     i11 = i4 + 4 | 0;
     if ((__ZNK7WebCore8Document4pageEv(HEAP32[i11 >> 2] | 0) | 0) == (i2 | 0)) {
      i12 = HEAP32[(HEAP32[i11 >> 2] | 0) + 332 >> 2] | 0;
      break;
     }
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i6;
     return;
    } else {
     i12 = HEAP32[i2 + 60 >> 2] | 0;
    }
   } while (0);
   i11 = (i5 & 16 | 0) != 0;
   i13 = i5 & -17;
   i14 = i7 | 0;
   i15 = (i5 & 8 | 0) == 0;
   i16 = i12;
   while (1) {
    __ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i7, HEAP32[i16 + 464 >> 2] | 0, i3, (i16 | 0) == (i12 | 0) ? i4 : 0, i13);
    i17 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    if ((i17 | 0) != 0) {
     i18 = 11;
     break;
    }
    i19 = i16 + 40 | 0;
    if (i15) {
     i20 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i19, i11) | 0;
    } else {
     i20 = __ZNK7WebCore9FrameTree24traversePreviousWithWrapEb(i19, i11) | 0;
    }
    if ((i20 | 0) == 0 | (i20 | 0) == (i12 | 0)) {
     break;
    } else {
     i16 = i20;
    }
   }
   if ((i18 | 0) == 11) {
    HEAP32[i1 >> 2] = i17;
    STACKTOP = i6;
    return;
   }
   do {
    if (i11 & i10) {
     __ZN7WebCore6Editor13rangeOfStringERKN3WTF6StringEPNS_5RangeEj(i8, HEAP32[i12 + 464 >> 2] | 0, i3, i4, i5 | 48);
     i16 = i8 | 0;
     i15 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     if ((i15 | 0) == 0) {
      break;
     }
     HEAP32[i1 >> 2] = i15;
     STACKTOP = i6;
     return;
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore12RenderObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore4Page32lockAllOverlayScrollbarsToHiddenEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 60 | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 452 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZNK7WebCore14ScrollableArea33lockOverlayScrollbarStateToHiddenEb(i1 + 36 | 0, i2);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1;
 while (1) {
  i1 = HEAP32[i3 + 452 >> 2] | 0;
  L9 : do {
   if ((i1 | 0) != 0) {
    i4 = HEAP32[i1 + 636 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i5 = HEAP32[i4 >> 2] | 0;
    i6 = HEAP32[i4 + 4 >> 2] | 0;
    i7 = i5 + (i6 << 2) | 0;
    if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
     break;
    }
    L13 : do {
     if ((i6 | 0) == 0) {
      i8 = i5;
     } else {
      i4 = i5;
      while (1) {
       i9 = HEAP32[i4 >> 2] | 0;
       if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
        i8 = i4;
        break L13;
       }
       i4 = i4 + 4 | 0;
       if ((i4 | 0) == (i7 | 0)) {
        break L9;
       }
      }
     }
    } while (0);
    if ((i8 | 0) == (i7 | 0)) {
     break;
    } else {
     i10 = i8;
    }
    while (1) {
     __ZNK7WebCore14ScrollableArea33lockOverlayScrollbarStateToHiddenEb(HEAP32[i10 >> 2] | 0, i2);
     i5 = i10 + 4 | 0;
     if ((i5 | 0) == (i7 | 0)) {
      break L9;
     } else {
      i11 = i5;
     }
     while (1) {
      i5 = HEAP32[i11 >> 2] | 0;
      if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
       break;
      }
      i5 = i11 + 4 | 0;
      if ((i5 | 0) == (i7 | 0)) {
       break L9;
      } else {
       i11 = i5;
      }
     }
     if ((i11 | 0) == (i7 | 0)) {
      break;
     } else {
      i10 = i11;
     }
    }
   }
  } while (0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page27privateBrowsingStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = (HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 194 | 0] & 64) != 0;
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5;
  while (1) {
   __ZN7WebCore8Document29privateBrowsingStateDidChangeEv(HEAP32[i6 + 456 >> 2] | 0);
   i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore4Page11pluginViewsEv(i3, i1);
 i1 = i3 + 8 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i5 = i3 | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = 0;
   while (1) {
    i10 = HEAP32[i8 + (i9 << 2) >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 108 >> 2] & 3](i10, i4);
    i9 = i9 + 1 | 0;
    if (i9 >>> 0 >= i6 >>> 0) {
     break;
    }
   }
   if ((i6 | 0) == 0) {
    i7 = 8;
    break;
   }
   i9 = HEAP32[i5 >> 2] | 0;
   i8 = i9 + (i6 << 2) | 0;
   i10 = i9;
   while (1) {
    i11 = (HEAP32[i10 >> 2] | 0) + 4 | 0;
    i12 = i11 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
    do {
     if ((i13 | 0) == 0) {
      i14 = i11 - 4 | 0;
      if ((i14 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 15](i14);
     } else {
      HEAP32[i12 >> 2] = i13;
     }
    } while (0);
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i8 | 0)) {
     break;
    }
   }
   HEAP32[i1 >> 2] = 0;
   i15 = i9;
  }
 } while (0);
 if ((i7 | 0) == 8) {
  i15 = HEAP32[i5 >> 2] | 0;
 }
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page52updateStyleForAllPagesAfterGlobalChangeInEnvironmentEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i1 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i2 = i5;
   while (1) {
    i5 = i2 + 456 | 0;
    i3 = HEAP32[i5 >> 2] | 0;
    i1 = HEAP32[i3 + 320 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i8 = i3;
    } else {
     __ZN7WebCore13StyleResolver32invalidateMatchedPropertiesCacheEv(i1);
     i8 = HEAP32[i5 >> 2] | 0;
    }
    __ZN7WebCore8Document25scheduleForcedStyleRecalcEv(i8);
    i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
   }
  }
  i2 = i7 + 4 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i9 = 19;
   break;
  } else {
   i10 = i2;
  }
  while (1) {
   i2 = HEAP32[i10 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i10 + 4 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i9 = 21;
    break L15;
   } else {
    i10 = i2;
   }
  }
  if ((i10 | 0) == (i4 | 0)) {
   i9 = 20;
   break;
  } else {
   i7 = i10;
  }
 }
 if ((i9 | 0) == 19) {
  return;
 } else if ((i9 | 0) == 20) {
  return;
 } else if ((i9 | 0) == 21) {
  return;
 }
}
function __ZN7WebCore4Page19visitedStateChangedEPNS_9PageGroupEy(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 i7 = i5 + (i6 << 2) | 0;
 if ((HEAP32[i4 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i6 | 0) == 0) {
   i8 = i5;
  } else {
   i4 = i5;
   while (1) {
    i9 = HEAP32[i4 >> 2] | 0;
    if (!((i9 | 0) == (-1 | 0) | (i9 | 0) == 0)) {
     i8 = i4;
     break L7;
    }
    i4 = i4 + 4 | 0;
    if ((i4 | 0) == (i7 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == (i7 | 0)) {
  return;
 } else {
  i10 = i8;
 }
 L15 : while (1) {
  i8 = HEAP32[i10 >> 2] | 0;
  do {
   if ((HEAP32[i8 + 160 >> 2] | 0) == (i1 | 0)) {
    i5 = HEAP32[i8 + 60 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i6 = i5;
    while (1) {
     __ZN7WebCore16VisitedLinkState22invalidateStyleForLinkEy(HEAP32[(HEAP32[i6 + 456 >> 2] | 0) + 952 >> 2] | 0, i2, i3);
     i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
     if ((i6 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i8 = i10 + 4 | 0;
  if ((i8 | 0) == (i7 | 0)) {
   i11 = 16;
   break;
  } else {
   i12 = i8;
  }
  while (1) {
   i8 = HEAP32[i12 >> 2] | 0;
   if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
    break;
   }
   i8 = i12 + 4 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    i11 = 19;
    break L15;
   } else {
    i12 = i8;
   }
  }
  if ((i12 | 0) == (i7 | 0)) {
   i11 = 22;
   break;
  } else {
   i10 = i12;
  }
 }
 if ((i11 | 0) == 19) {
  return;
 } else if ((i11 | 0) == 22) {
  return;
 } else if ((i11 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore4Page27storageBlockingStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = i4;
  while (1) {
   __ZN7WebCore8Document29storageBlockingStateDidChangeEv(HEAP32[i5 + 456 >> 2] | 0);
   i5 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore4Page11pluginViewsEv(i3, i1);
 i1 = i3 + 8 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i4 = i3 | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 8;
  } else {
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = 0;
   while (1) {
    i9 = HEAP32[i7 + (i8 << 2) >> 2] | 0;
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 104 >> 2] & 15](i9);
    i8 = i8 + 1 | 0;
    if (i8 >>> 0 >= i5 >>> 0) {
     break;
    }
   }
   if ((i5 | 0) == 0) {
    i6 = 8;
    break;
   }
   i8 = HEAP32[i4 >> 2] | 0;
   i7 = i8 + (i5 << 2) | 0;
   i9 = i8;
   while (1) {
    i10 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
    i11 = i10 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    do {
     if ((i12 | 0) == 0) {
      i13 = i10 - 4 | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
     } else {
      HEAP32[i11 >> 2] = i12;
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i1 >> 2] = 0;
   i14 = i8;
  }
 } while (0);
 if ((i6 | 0) == 8) {
  i14 = HEAP32[i4 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page22allVisitedStateChangedEPNS_9PageGroupE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i2 = i3;
   while (1) {
    i7 = HEAP32[i2 >> 2] | 0;
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i6 = i2;
     break L7;
    }
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i8 = i6;
 }
 L15 : while (1) {
  i6 = HEAP32[i8 >> 2] | 0;
  do {
   if ((HEAP32[i6 + 160 >> 2] | 0) == (i1 | 0)) {
    i3 = HEAP32[i6 + 60 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i4 = i3;
    while (1) {
     __ZN7WebCore16VisitedLinkState26invalidateStyleForAllLinksEv(HEAP32[(HEAP32[i4 + 456 >> 2] | 0) + 952 >> 2] | 0);
     i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
     if ((i4 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  i6 = i8 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i9 = 20;
   break;
  } else {
   i10 = i6;
  }
  while (1) {
   i6 = HEAP32[i10 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i10 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i9 = 17;
    break L15;
   } else {
    i10 = i6;
   }
  }
  if ((i10 | 0) == (i5 | 0)) {
   i9 = 18;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 18) {
  return;
 } else if ((i9 | 0) == 17) {
  return;
 } else if ((i9 | 0) == 20) {
  return;
 }
}
function __ZN7WebCore4Page36jettisonStyleResolversInAllDocumentsEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[H_BASE + 192 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i2 + (i3 << 2) | 0;
 if ((HEAP32[i1 + 12 >> 2] | 0) == 0) {
  return;
 }
 L7 : do {
  if ((i3 | 0) == 0) {
   i5 = i2;
  } else {
   i1 = i2;
   while (1) {
    i6 = HEAP32[i1 >> 2] | 0;
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i5 = i1;
     break L7;
    }
    i1 = i1 + 4 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i5 | 0) == (i4 | 0)) {
  return;
 } else {
  i7 = i5;
 }
 L15 : while (1) {
  i5 = HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0;
  if ((i5 | 0) != 0) {
   i2 = i5;
   while (1) {
    i5 = HEAP32[i2 + 456 >> 2] | 0;
    if ((i5 | 0) != 0) {
     __ZN7WebCore8Document18clearStyleResolverEv(i5);
    }
    i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
    if ((i2 | 0) == 0) {
     break;
    }
   }
  }
  i2 = i7 + 4 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   i8 = 19;
   break;
  } else {
   i9 = i2;
  }
  while (1) {
   i2 = HEAP32[i9 >> 2] | 0;
   if (!((i2 | 0) == (-1 | 0) | (i2 | 0) == 0)) {
    break;
   }
   i2 = i9 + 4 | 0;
   if ((i2 | 0) == (i4 | 0)) {
    i8 = 23;
    break L15;
   } else {
    i9 = i2;
   }
  }
  if ((i9 | 0) == (i4 | 0)) {
   i8 = 20;
   break;
  } else {
   i7 = i9;
  }
 }
 if ((i8 | 0) == 19) {
  return;
 } else if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 23) {
  return;
 }
}
function __ZN7WebCore4Page21markAllMatchesForTextERKN3WTF6StringEjbj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 if ((HEAP32[i6 + 4 >> 2] | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i6 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i1 = i6;
  i8 = 0;
  while (1) {
   i9 = i1 + 464 | 0;
   __ZN7WebCore6Editor34setMarkedTextMatchesAreHighlightedEb(HEAP32[i9 >> 2] | 0, i4);
   i10 = (__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i9 >> 2] | 0, i2, 0, i3, 0, 1, 0) | 0) + i8 | 0;
   i9 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
   if ((i9 | 0) == 0) {
    i7 = i10;
    break;
   } else {
    i1 = i9;
    i8 = i10;
   }
  }
  return i7 | 0;
 } else {
  i8 = i6;
  i6 = 0;
  while (1) {
   i1 = i8 + 464 | 0;
   __ZN7WebCore6Editor34setMarkedTextMatchesAreHighlightedEb(HEAP32[i1 >> 2] | 0, i4);
   i10 = (__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i1 >> 2] | 0, i2, 0, i3, i5 - i6 | 0, 1, 0) | 0) + i6 | 0;
   i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i8 + 40 | 0, 0) | 0;
   if ((i1 | 0) == 0) {
    i7 = i10;
    break;
   } else {
    i8 = i1;
    i6 = i10;
   }
  }
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore4Page40hiddenPageDOMTimerThrottlingStateChangedEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0, i4 = 0;
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 264 | 0] & 1) == 0) {
  d2 = +__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv();
  i3 = i1 + 200 | 0;
  if (+HEAPF64[i3 >> 3] == d2) {
   return;
  }
  HEAPF64[i3 >> 3] = d2;
  i3 = HEAP32[i1 + 60 >> 2] | 0;
  if ((i3 | 0) == 0) {
   return;
  }
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 + 456 >> 2] | 0;
   if ((i3 | 0) != 0) {
    __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i3 + 88 | 0);
   }
   i4 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i4 + 40 | 0, 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 1144 >> 2] | 0) + 4 >> 2] | 0) == 0) {
  return;
 }
 d2 = +__ZN7WebCore8Settings35hiddenPageDOMTimerAlignmentIntervalEv();
 i4 = i1 + 200 | 0;
 if (+HEAPF64[i4 >> 3] == d2) {
  return;
 }
 HEAPF64[i4 >> 3] = d2;
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4;
 while (1) {
  i4 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i4 | 0) != 0) {
   __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i4 + 88 | 0);
  }
  i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore10PluginInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 12 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 20 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore13MimeClassInfoD2Ev(i3);
   i3 = i3 + 20 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore13MimeClassInfoD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 8 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 12 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore4Page16countFindMatchesERKN3WTF6StringEjj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i1 = i5;
  i7 = 0;
  while (1) {
   i8 = (__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i1 + 464 >> 2] | 0, i2, 0, i3, 0, 0, 0) | 0) + i7 | 0;
   i9 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
   if ((i9 | 0) == 0) {
    i6 = i8;
    break;
   } else {
    i1 = i9;
    i7 = i8;
   }
  }
  return i6 | 0;
 } else {
  i7 = i5;
  i5 = 0;
  while (1) {
   i1 = (__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i7 + 464 >> 2] | 0, i2, 0, i3, i4 - i5 | 0, 0, 0) | 0) + i5 | 0;
   i8 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i7 + 40 | 0, 0) | 0;
   if ((i8 | 0) == 0) {
    i6 = i1;
    break;
   } else {
    i7 = i8;
    i5 = i1;
   }
  }
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore4Page14sessionStorageEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 184 | 0;
 do {
  if (!((HEAP32[i5 >> 2] | 0) != 0 | i2 ^ 1)) {
   __ZN7WebCore16StorageNamespace23sessionStorageNamespaceEPNS_4PageE(i4, i1);
   i6 = i4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i8 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i7;
   do {
    if ((i8 | 0) != 0) {
     i7 = i8 + 4 | 0;
     i9 = i7 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i8 + 4 | 0;
   i8 = i10 | 0;
   i7 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i8 >> 2] = i7;
    break;
   }
   i7 = i10 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 STACKTOP = i3;
 return HEAP32[i5 >> 2] | 0;
}
function __ZN7WebCore4Page20setDeviceScaleFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 116 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  return;
 }
 HEAPF32[i3 >> 2] = d2;
 i3 = i1 + 60 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i4;
  while (1) {
   i4 = HEAP32[i6 + 456 >> 2] | 0;
   if ((i4 | 0) != 0) {
    __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i4, 1);
   }
   i6 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
   if ((i6 | 0) == 0) {
    break;
   }
  }
  i5 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore5Frame30deviceOrPageScaleFactorChangedEv(i5);
 __ZN7WebCore9PageCache30markPagesForDeviceScaleChangedEPNS_4PageE(__ZN7WebCore9pageCacheEv() | 0, i1);
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i3 = i5;
  while (1) {
   __ZN7WebCore6Editor24deviceScaleFactorChangedEv(HEAP32[i3 + 464 >> 2] | 0);
   i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, 0) | 0;
   if ((i3 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore9PageCache27markPagesForFullStyleRecalcEPNS_4PageE(__ZN7WebCore9pageCacheEv() | 0, i1);
 __ZN7WebCore15GraphicsContext29updateDocumentMarkerResourcesEv();
 return;
}
function __ZN7WebCore10PluginDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 36 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 32 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 24 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = i1 + 16 | 0;
 if ((i2 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i2 * 20 & -1) | 0;
  i2 = i5;
  while (1) {
   __ZN7WebCore13MimeClassInfoD2Ev(i2);
   i2 = i2 + 20 | 0;
   if ((i2 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 20 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 4 | 0;
 if ((i4 | 0) != 0) {
  i2 = HEAP32[i6 >> 2] | 0;
  i5 = i2 + (i4 * 28 & -1) | 0;
  i4 = i2;
  while (1) {
   __ZN7WebCore10PluginInfoD2Ev(i4);
   i4 = i4 + 28 | 0;
   if ((i4 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZN7WebCore4Page13setPaginationERKNS_10PaginationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 124 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 128 | 0]) & 1) != 0) {
    break;
   }
   if ((HEAP32[i1 + 132 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i1 + 136 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 i4 = i3;
 i3 = i2;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 + 456 >> 2] | 0;
   if ((i3 | 0) != 0) {
    __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i3, 1);
   }
   i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 __ZN7WebCore9PageCache27markPagesForFullStyleRecalcEPNS_4PageE(__ZN7WebCore9pageCacheEv() | 0, i1);
 return;
}
function __ZN7WebCore4Page15goBackOrForwardEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 56 | 0;
 i4 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i3 >> 2] | 0, i2) | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i2 | 0) > 0) {
     i6 = __ZNK7WebCore21BackForwardController12forwardCountEv(i5) | 0;
     if ((i6 | 0) == 0) {
      return;
     } else {
      i7 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i3 >> 2] | 0, i6) | 0;
      break;
     }
    } else {
     i6 = __ZNK7WebCore21BackForwardController9backCountEv(i5) | 0;
     if ((i6 | 0) == 0) {
      return;
     } else {
      i7 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i3 >> 2] | 0, -i6 | 0) | 0;
      break;
     }
    }
   } while (0);
   if ((i7 | 0) != 0) {
    i8 = i7;
    break;
   }
   return;
  } else {
   i8 = i4;
  }
 } while (0);
 __ZN7WebCore4Page8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i8, 3);
 return;
}
function __ZN7WebCore4Page18findMatchesForTextERKN3WTF6StringEjjNS0_22ShouldHighlightMatchesENS0_17ShouldMarkMatchesE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i7 = (i6 | 0) == 1;
 i6 = (i5 | 0) == 1;
 i5 = (i4 | 0) == 0;
 i9 = HEAP32[i1 + 60 >> 2] | 0;
 i1 = 0;
 while (1) {
  i10 = i9 + 464 | 0;
  if (i7) {
   __ZN7WebCore6Editor34setMarkedTextMatchesAreHighlightedEb(HEAP32[i10 >> 2] | 0, i6);
  }
  i11 = (__ZN7WebCore6Editor19countMatchesForTextERKN3WTF6StringEPNS_5RangeEjjbPNS1_6VectorINS1_6RefPtrIS5_EELj0ENS1_15CrashOnOverflowEEE(HEAP32[i10 >> 2] | 0, i2, 0, i3, i5 ? 0 : i4 - i1 | 0, i7, 0) | 0) + i1 | 0;
  i10 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i9 + 40 | 0, 0) | 0;
  if ((i10 | 0) == 0) {
   i8 = i11;
   break;
  } else {
   i9 = i10;
   i1 = i11;
  }
 }
 return i8 | 0;
}
function __ZN7WebCore4Page32setMemoryCacheClientCallsEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 105 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if (!i2) {
  return;
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 i1 = i2;
 while (1) {
  __ZN7WebCore11FrameLoader35tellClientAboutPastMemoryCacheLoadsEv(i1 + 80 | 0);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  i3 = (i2 | 0) == 0;
  if (!i3) {
   i4 = i2 + 4 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  }
  i4 = i1 + 4 | 0;
  i5 = i4 | 0;
  i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  do {
   if ((i6 | 0) == 0) {
    i7 = i4 - 4 | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
   } else {
    HEAP32[i5 >> 2] = i6;
   }
  } while (0);
  if (i3) {
   break;
  } else {
   i1 = i2;
  }
 }
 return;
}
function __ZNK7WebCore4Page18hasSeenMediaEngineERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 1176 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 1184 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i6 = i2 << 12 ^ i2;
 i2 = i6 >>> 7 ^ i6;
 i6 = i2 << 2 ^ i2;
 i2 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 while (1) {
  i8 = i6 & i5;
  i9 = i3 + (i8 << 2) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i12 = 0;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i10, HEAP32[i1 >> 2] | 0) | 0) {
    i12 = i9;
    break;
   }
  }
  i9 = (i7 | 0) == 0 ? i2 : i7;
  i6 = i9 + i8 | 0;
  i7 = i9;
 }
 i4 = (i12 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore4Page13hasSeenPluginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 1156 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 1164 >> 2] | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
 }
 i2 = (i7 >>> 23) + ~i7 | 0;
 i6 = i2 << 12 ^ i2;
 i2 = i6 >>> 7 ^ i6;
 i6 = i2 << 2 ^ i2;
 i2 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 while (1) {
  i8 = i6 & i5;
  i9 = i3 + (i8 << 2) | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i10;
  if ((i11 | 0) == 0) {
   i12 = 0;
   break;
  } else if ((i11 | 0) != (-1 | 0)) {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i10, HEAP32[i1 >> 2] | 0) | 0) {
    i12 = i9;
    break;
   }
  }
  i9 = (i7 | 0) == 0 ? i2 : i7;
  i6 = i9 + i8 | 0;
  i7 = i9;
 }
 i4 = (i12 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore4Page12setGroupNameERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 160 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 20 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9PageGroup10removePageERNS_4PageE(i4, i1);
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i6 = HEAP32[i1 + 156 >> 2] | 0;
  } else {
   i5 = i1 + 156 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
    i6 = i7;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   if ((i7 | 0) != 0) {
    __ZN7WebCore9PageGroupD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = __ZN7WebCore9PageGroup9pageGroupERKN3WTF6StringE(i2) | 0;
   HEAP32[i3 >> 2] = i7;
   __ZN7WebCore9PageGroup7addPageERNS_4PageE(i7, i1);
   return;
  }
 } while (0);
 HEAP32[i3 >> 2] = i6;
 return;
}
function __ZN7WebCore4Page16setDefersLoadingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((HEAP8[i3 + 186 | 0] & 4) == 0) {
  return;
 }
 do {
  if ((HEAP8[i3 + 193 | 0] & 2) == 0) {
   if ((i2 & 1 | 0) != (HEAP8[i1 + 98 | 0] & 1 | 0)) {
    break;
   }
   return;
  } else {
   i4 = i1 + 100 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if (i2) {
    i6 = i5 + 1 | 0;
    HEAP32[i4 >> 2] = i6;
    if (i6 >>> 0 <= 1 >>> 0) {
     break;
    }
    return;
   } else {
    i6 = i5 - 1 | 0;
    HEAP32[i4 >> 2] = i6;
    if ((i6 | 0) == 0) {
     break;
    }
    return;
   }
  }
 } while (0);
 HEAP8[i1 + 98 | 0] = i2 & 1;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  __ZN7WebCore11FrameLoader16setDefersLoadingEb(i1 + 80 | 0, i2);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page16setCanStartMediaEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 180 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 if (!i2) {
  return;
 }
 i2 = i1 + 60 | 0;
 L7 : while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 13;
   break;
  }
  i5 = i1;
  while (1) {
   i6 = __ZN7WebCore8Document28takeAnyMediaCanStartListenerEv(HEAP32[i5 + 456 >> 2] | 0) | 0;
   if ((i6 | 0) != 0) {
    break;
   }
   i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i5 + 40 | 0, 0) | 0;
   if ((i1 | 0) == 0) {
    i4 = 12;
    break L7;
   } else {
    i5 = i1;
   }
  }
  FUNCTION_TABLE_vi[HEAP32[HEAP32[i6 >> 2] >> 2] & 15](i6);
  if ((HEAP8[i3] & 1) == 0) {
   i4 = 14;
   break;
  }
 }
 if ((i4 | 0) == 12) {
  return;
 } else if ((i4 | 0) == 13) {
  return;
 } else if ((i4 | 0) == 14) {
  return;
 }
}
function __ZN7WebCore4Page13setIsInWindowEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 209 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i3 = i1 + 60 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 + 452 >> 2] | 0;
   if ((i1 | 0) != 0) {
    __ZN7WebCore9FrameView13setIsInWindowEb(i1, i2);
   }
   i4 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i4 + 40 | 0, 0) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 if (!i2) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i2;
 while (1) {
  __ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE(HEAP32[(HEAP32[i3 + 456 >> 2] | 0) + 340 >> 2] | 0);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore4Page14renderTreeSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  i4 = 0;
  return (tempRet0 = i3, i4) | 0;
 }
 i1 = 0;
 i5 = 0;
 i6 = i2;
 while (1) {
  i2 = HEAP32[i6 + 456 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i7 = i1;
    i8 = i5;
   } else {
    i9 = HEAP32[i2 + 1584 >> 2] | 0;
    if ((i9 | 0) == 0) {
     i7 = i1;
     i8 = i5;
     break;
    }
    i10 = i9 + 136 | 0;
    i9 = _i64Add(HEAP32[i10 >> 2] | 0, HEAP32[i10 + 4 >> 2] | 0, i5, i1) | 0;
    i7 = tempRet0;
    i8 = i9;
   }
  } while (0);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i6 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   i3 = i7;
   i4 = i8;
   break;
  } else {
   i1 = i7;
   i5 = i8;
   i6 = i2;
  }
 }
 return (tempRet0 = i3, i4) | 0;
}
function __ZN7WebCore4Page8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = (i2 | 0) != 0;
 if (i4) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = i1 + 60 | 0;
 if (__ZNK7WebCore17HistoryController31shouldStopLoadingForHistoryItemEPNS_11HistoryItemE(HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] | 0, i2) | 0) {
  __ZN7WebCore11FrameLoader14stopAllLoadersENS_26ClearProvisionalItemPolicyE((HEAP32[i5 >> 2] | 0) + 80 | 0, 0);
 }
 __ZN7WebCore17HistoryController8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] | 0, i2, i3);
 if (!i4) {
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11HistoryItemD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  return;
 }
}
function __ZN3WTF6VectorINS_3RefIN7WebCore14PluginViewBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore4Page21resetSeenMediaEnginesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 1176 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 1180 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
   i6 = i5;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore4Page16resetSeenPluginsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 1156 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 1160 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i5 = HEAP32[i3 + (i1 << 2) >> 2] | 0;
   i6 = i5;
   do {
    if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i3);
 _memset(i2 | 0, 0, 16) | 0;
 return;
}
function ___remdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i9 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i10 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i11 = _i64Subtract(i7 ^ i1, i8 ^ i2, i7, i8) | 0;
 i2 = tempRet0;
 ___udivmoddi4(i11, i2, _i64Subtract(i9 ^ i3, i10 ^ i4, i9, i10) | 0, tempRet0, i6) | 0;
 i10 = _i64Subtract(HEAP32[i6 >> 2] ^ i7, HEAP32[i6 + 4 >> 2] ^ i8, i7, i8) | 0;
 i8 = tempRet0;
 STACKTOP = i5;
 return (tempRet0 = i8, i10) | 0;
}
function __ZN7WebCore4Page35resumeActiveDOMObjectsAndAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 60 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i1;
 while (1) {
  __ZN7WebCore5Frame35resumeActiveDOMObjectsAndAnimationsEv(i3);
  i3 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i3 + 40 | 0, 0) | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i3;
 while (1) {
  __ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE(HEAP32[(HEAP32[i2 + 456 >> 2] | 0) + 340 >> 2] | 0);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i2 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore4Page18canGoBackOrForwardEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1 + 56 | 0;
 do {
  if ((i2 | 0) > 0) {
   if ((__ZNK7WebCore21BackForwardController12forwardCountEv(HEAP32[i4 >> 2] | 0) | 0) < (i2 | 0)) {
    if ((i2 | 0) < 0) {
     i5 = 5;
     break;
    } else {
     break;
    }
   } else {
    i3 = 1;
    return i3 | 0;
   }
  } else {
   i5 = 5;
  }
 } while (0);
 do {
  if ((i5 | 0) == 5) {
   if ((__ZNK7WebCore21BackForwardController9backCountEv(HEAP32[i4 >> 2] | 0) | 0) < (-i2 | 0)) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZN7WebCore4Page14throttleTimersEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0;
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 264 | 0] & 1) == 0) {
  return;
 }
 d2 = +__ZN7WebCore8Settings35hiddenPageDOMTimerAlignmentIntervalEv();
 i3 = i1 + 200 | 0;
 if (+HEAPF64[i3 >> 3] == d2) {
  return;
 }
 HEAPF64[i3 >> 3] = d2;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i3 + 88 | 0);
  }
  i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page16unthrottleTimersEv(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0;
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 264 | 0] & 1) == 0) {
  return;
 }
 d2 = +__ZN7WebCore8Settings32defaultDOMTimerAlignmentIntervalEv();
 i3 = i1 + 200 | 0;
 if (+HEAPF64[i3 >> 3] == d2) {
  return;
 }
 HEAPF64[i3 >> 3] = d2;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i3 + 88 | 0);
  }
  i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore4Page9pageCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[i1 + 124 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 60 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i1 + 456 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
 } else {
  __ZN7WebCore8Document36updateLayoutIgnorePendingStylesheetsEv(i4);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 i3 = __ZNK7WebCore5Frame15contentRendererEv(i5) | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i5 = i3 | 0;
 i2 = __ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE(i5, __ZNK7WebCore11RenderBlock10columnInfoEv(i5) | 0) | 0;
 return i2 | 0;
}
function ___divdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = i2 >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i6 = ((i2 | 0) < 0 ? -1 : 0) >> 31 | ((i2 | 0) < 0 ? -1 : 0) << 1;
 i7 = i4 >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i8 = ((i4 | 0) < 0 ? -1 : 0) >> 31 | ((i4 | 0) < 0 ? -1 : 0) << 1;
 i9 = _i64Subtract(i5 ^ i1, i6 ^ i2, i5, i6) | 0;
 i2 = tempRet0;
 i1 = i7 ^ i5;
 i5 = i8 ^ i6;
 i6 = _i64Subtract((___udivmoddi4(i9, i2, _i64Subtract(i7 ^ i3, i8 ^ i4, i7, i8) | 0, tempRet0, 0) | 0) ^ i1, tempRet0 ^ i5, i1, i5) | 0;
 return (tempRet0 = tempRet0, i6) | 0;
}
function __ZN7WebCore4Page11setViewModeENS0_8ViewModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 188 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i2 = i1 + 60 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 452 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
 } else {
  __ZN7WebCore9FrameView11forceLayoutEb(i3, 0);
  i4 = HEAP32[i2 >> 2] | 0;
 }
 i2 = HEAP32[i4 + 456 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i2, 0);
 return;
}
function __ZNK7WebCore4Page17viewportArgumentsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAPF32[i1 + 4 >> 2] = +-1;
  HEAPF32[i1 + 8 >> 2] = +-1;
  HEAPF32[i1 + 12 >> 2] = +-1;
  HEAPF32[i1 + 16 >> 2] = +-1;
  HEAPF32[i1 + 20 >> 2] = +-1;
  HEAPF32[i1 + 24 >> 2] = +-1;
  HEAPF32[i1 + 28 >> 2] = +-1;
  HEAPF32[i1 + 32 >> 2] = +-1;
  HEAPF32[i1 + 36 >> 2] = +-1;
  HEAPF32[i1 + 40 >> 2] = +-1;
  HEAPF32[i1 + 44 >> 2] = +-1;
  return;
 } else {
  _memcpy(i1 | 0, i3 + 1896 | 0, 48) | 0;
  return;
 }
}
function __ZNK7WebCore4Page10pluginDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 64 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = __ZN3WTF10fastMallocEj(40) | 0;
   __ZN7WebCore10PluginDataC1EPKNS_4PageE(i3, i1);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i3;
   if ((i4 | 0) == 0) {
    break;
   }
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore10PluginDataD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore4Page11setDebuggerEPN3JSC8DebuggerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 164 | 0;
 if ((HEAP32[i3 >> 2] | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4;
 i4 = i2;
 while (1) {
  __ZN7WebCore16ScriptController14attachDebuggerEPN3JSC8DebuggerE(HEAP32[i1 + 460 >> 2] | 0, i4);
  i2 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i2 | 0) == 0) {
   break;
  }
  i1 = i2;
  i4 = HEAP32[i3 >> 2] | 0;
 }
 return;
}
function __ZN7WebCore4Page17setSessionStorageEN3WTF10PassRefPtrINS_16StorageNamespaceEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 184 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 + 4 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = i3;
  return;
 }
 i3 = i2 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore4Page25setTimerAlignmentIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 i3 = i1 + 200 | 0;
 if (+HEAPF64[i3 >> 3] == d2) {
  return;
 }
 HEAPF64[i3 >> 3] = d2;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore22ScriptExecutionContext31didChangeTimerAlignmentIntervalEv(i3 + 88 | 0);
  }
  i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page20unmarkAllTextMatchesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 60 >> 2] | 0;
 while (1) {
  i1 = HEAP32[(HEAP32[i5 + 456 >> 2] | 0) + 1124 >> 2] | 0;
  HEAP32[i4 >> 2] = 4;
  __ZN7WebCore24DocumentMarkerController13removeMarkersENS_14DocumentMarker11MarkerTypesE(i1, i3);
  i5 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i5 + 40 | 0, 0) | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore4Page23setMinimumTimerIntervalEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, d4 = +0;
 i3 = i1 + 192 | 0;
 d4 = +HEAPF64[i3 >> 3];
 HEAPF64[i3 >> 3] = d2;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  i3 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i3 | 0) != 0) {
   __ZN7WebCore22ScriptExecutionContext26adjustMinimumTimerIntervalEd(i3 + 88 | 0, d4);
  }
  i1 = __ZNK7WebCore9FrameTree20traverseNextWithWrapEb(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
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
function __ZN7WebCore4Page14setMediaVolumeEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 if (d2 < +0 | d2 > +1) {
  return;
 }
 i3 = i1 + 108 | 0;
 if (+HEAPF32[i3 >> 2] == d2) {
  return;
 }
 HEAPF32[i3 >> 2] = d2;
 i3 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3;
 while (1) {
  __ZN7WebCore8Document20mediaVolumeDidChangeEv(HEAP32[i1 + 456 >> 2] | 0);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page9initGroupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __ZN3WTF10fastMallocEj(108) | 0;
 __ZN7WebCore9PageGroupC1ERNS_4PageE(i2, i1);
 i3 = i1 + 156 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  i5 = i2;
  i6 = i1 + 160 | 0;
  HEAP32[i6 >> 2] = i5;
  return;
 }
 __ZN7WebCore9PageGroupD1Ev(i4);
 __ZN3WTF8fastFreeEPv(i4);
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 160 | 0;
 HEAP32[i6 >> 2] = i5;
 return;
}
function __ZN7WebCore4Page16stringToViewModeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i1 = 0;
 while (1) {
  if ((i1 | 0) >= 5) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, HEAP32[H_BASE + 152 + (i1 << 3) >> 2] | 0) | 0) {
   break;
  } else {
   i1 = i1 + 1 | 0;
  }
 }
 if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 i3 = HEAP32[H_BASE + 152 + (i1 << 3) + 4 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore4Page25suspendScriptedAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 1140 | 0] = 1;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  i2 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document43suspendScriptedAnimationControllerCallbacksEv(i2);
  }
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page24resumeScriptedAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP8[i1 + 1140 | 0] = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  i2 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document42resumeScriptedAnimationControllerCallbacksEv(i2);
  }
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page33synchronousScrollingReasonsAsTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore8Document12updateLayoutEv(i3);
 }
 i3 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  __ZNK7WebCore20ScrollingCoordinator33synchronousScrollingReasonsAsTextEv(i1, i3);
  return;
 }
}
function __ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  i2 = HEAP32[i1 + 456 >> 2] | 0;
  if ((i2 | 0) != 0) {
   __ZN7WebCore8Document20styleResolverChangedENS_23StyleResolverUpdateFlagE(i2, 1);
  }
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page21resumeAnimatingImagesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  __ZN7WebCore11CachedImage30resumeAnimatingImagesForLoaderEPNS_20CachedResourceLoaderE(HEAP32[(HEAP32[i1 + 456 >> 2] | 0) + 340 >> 2] | 0);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page24scrollingStateTreeAsTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore8Document12updateLayoutEv(i3);
 }
 i3 = __ZN7WebCore4Page20scrollingCoordinatorEv(i2) | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 68 >> 2] & 3](i1, i3);
  return;
 }
}
function __ZN7WebCore4Page14sawMediaEngineERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i3 | 0, i1 + 1176 | 0, i2, i2);
 STACKTOP = i3;
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
function __ZN7WebCore4Page44hiddenPageCSSAnimationSuspensionStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 210 | 0] & 1) != 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + 476 >> 2] | 0;
 if ((HEAP8[(HEAP32[i1 + 48 >> 2] | 0) + 264 | 0] & 2) == 0) {
  __ZN7WebCore19AnimationController16resumeAnimationsEv(i2);
  return;
 } else {
  __ZN7WebCore19AnimationController17suspendAnimationsEv(i2);
  return;
 }
}
function __ZN7WebCore4Page9sawPluginERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i3 | 0, i1 + 1156 | 0, i2, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore4Page11PageClientsD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function __ZN7WebCore4Page11PageClientsD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 return;
}
function ___muldsi3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 & 65535;
 i4 = i2 & 65535;
 i5 = Math_imul(i4, i3) | 0;
 i6 = i1 >>> 16;
 i1 = (i5 >>> 16) + (Math_imul(i4, i6) | 0) | 0;
 i4 = i2 >>> 16;
 i2 = Math_imul(i4, i3) | 0;
 return (tempRet0 = (i1 >>> 16) + (Math_imul(i4, i6) | 0) + (((i1 & 65535) + i2 | 0) >>> 16) | 0, i1 + i2 << 16 | i5 & 65535 | 0) | 0;
}
function __ZN7WebCore4Page36suspendActiveDOMObjectsAndAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  __ZN7WebCore5Frame36suspendActiveDOMObjectsAndAnimationsEv(i1);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore4Page26dnsPrefetchingStateChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2;
 while (1) {
  __ZN7WebCore8Document15initDNSPrefetchEv(HEAP32[i1 + 456 >> 2] | 0);
  i1 = __ZNK7WebCore9FrameTree12traverseNextEPKNS_5FrameE(i1 + 40 | 0, 0) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function _llvm_cttz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[cttz_i8 + (i1 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[cttz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[cttz_i8 + (i1 >>> 24) | 0] | 0) + 24 | 0;
}
function _llvm_ctlz_i32(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP8[ctlz_i8 + (i1 >>> 24) | 0] | 0;
 if ((i2 | 0) < 8) return i2 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 16 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 8 | 0;
 i2 = HEAP8[ctlz_i8 + (i1 >> 8 & 255) | 0] | 0;
 if ((i2 | 0) < 8) return i2 + 16 | 0;
 return (HEAP8[ctlz_i8 + (i1 & 255) | 0] | 0) + 24 | 0;
}
function __ZN7WebCore4Page9goForwardEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i1 + 56 >> 2] | 0, 1) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore4Page8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i2, 2);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore4Page6goBackEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN7WebCore21BackForwardController11itemAtIndexEi(HEAP32[i1 + 56 >> 2] | 0, -1) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 __ZN7WebCore4Page8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE(i1, i2, 1);
 i3 = 1;
 return i3 | 0;
}
function ___uremdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 ___udivmoddi4(i1, i2, i3, i4, i6) | 0;
 STACKTOP = i5;
 return (tempRet0 = HEAP32[i6 + 4 >> 2] | 0, HEAP32[i6 >> 2] | 0) | 0;
}
function __ZN7WebCore17deviceScaleFactorEPNS_5FrameE(i1) {
 i1 = i1 | 0;
 var d2 = +0, i3 = 0;
 do {
  if ((i1 | 0) == 0) {
   d2 = +1;
  } else {
   i3 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    d2 = +1;
    break;
   }
   d2 = +HEAPF32[i3 + 116 >> 2];
  }
 } while (0);
 return +d2;
}
function __ZN7WebCore4Page36setShouldSuppressScrollbarAnimationsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 120 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i3] & 1 | 0)) {
  return;
 }
 __ZN7WebCore4Page32lockAllOverlayScrollbarsToHiddenEb(i1, i2);
 HEAP8[i3] = i2 & 1;
 return;
}
function __ZN7WebCore4Page16getHistoryLengthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 56 | 0;
 i1 = (__ZNK7WebCore21BackForwardController9backCountEv(HEAP32[i2 >> 2] | 0) | 0) + 1 | 0;
 return i1 + (__ZNK7WebCore21BackForwardController12forwardCountEv(HEAP32[i2 >> 2] | 0) | 0) | 0;
}
function ___muldi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = i1;
 i1 = i3;
 i3 = ___muldsi3(i5, i1) | 0;
 i6 = tempRet0;
 return (tempRet0 = (Math_imul(i2, i1) | 0) + (Math_imul(i4, i5) | 0) + i6 | i6 & 0, i3 & -1 | 0) | 0;
}
function _bitshift64Ashr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = (i2 | 0) < 0 ? -1 : 0;
 return i2 >> i3 - 32 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 152 >> 2] = H_BASE + 72;
 HEAP32[H_BASE + 160 >> 2] = H_BASE + 56;
 HEAP32[H_BASE + 168 >> 2] = H_BASE + 40;
 HEAP32[H_BASE + 176 >> 2] = H_BASE + 24;
 HEAP32[H_BASE + 184 >> 2] = H_BASE + 8;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function _bitshift64Shl(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 << i3 | (i1 & (1 << i3) - 1 << 32 - i3) >>> 32 - i3;
  return i1 << i3;
 }
 tempRet0 = i1 << i3 - 32;
 return 0;
}
function __ZNK7WebCore4Page34isCountingRelevantRepaintedObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 1132 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 212 >> 2] & 4 | 0) != 0;
 return i2 | 0;
}
function _i64Subtract(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 - i4 >>> 0;
 i5 = i2 - i4 - (i3 >>> 0 > i1 >>> 0 | 0) >>> 0;
 return (tempRet0 = i5, i1 - i3 >>> 0 | 0) | 0;
}
function _bitshift64Lshr(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((i3 | 0) < 32) {
  tempRet0 = i2 >>> i3;
  return i1 >>> i3 | (i2 & (1 << i3) - 1) << 32 - i3;
 }
 tempRet0 = 0;
 return i2 >>> i3 - 32 | 0;
}
function __ZNK7WebCore4Page15visibilityStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 210 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 211 | 0] & 1) == 0 ? 1 : 2;
 return i2 | 0;
}
function __ZN7WebCore4Page26setRemoteInspectionAllowedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector25RemoteInspectorDebuggable25setRemoteDebuggingAllowedEb(HEAP32[i1 + 1152 >> 2] | 0, i2);
 return;
}
function _i64Add(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i1 + i3 >>> 0;
 return (tempRet0 = i2 + i4 + (i5 >>> 0 < i1 >>> 0 | 0) >>> 0, i5 | 0) | 0;
}
function __ZN7WebCore4Page23clearUndoRedoOperationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 15](i2);
 return;
}
function ___udivdi3(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = ___udivmoddi4(i1, i2, i3, i4, 0) | 0;
 return (tempRet0 = tempRet0, i5) | 0;
}
function __ZNK7WebCore4Page9selectionEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(__ZNK7WebCore15FocusController18focusedOrMainFrameEv(HEAP32[i1 + 32 >> 2] | 0) | 0) + 468 >> 2] | 0) + 32 | 0;
}
function __ZN7WebCore4Page37startCountingRelevantRepaintedObjectsEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Page33resetRelevantPaintedObjectCounterEv(i1);
 HEAP8[i1 + 1132 | 0] = 1;
 return;
}
function __ZN7WebCore4Page44incrementFrameHandlingBeforeUnloadEventCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 1200 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore4Page44decrementFrameHandlingBeforeUnloadEventCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 1200 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZN7WebCore4Page19createActivityTokenEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13PageThrottler19createActivityTokenEv(i1, HEAP32[i2 + 1144 >> 2] | 0);
 return;
}
function __ZN7WebCore4Page17setIsVisuallyIdleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13PageThrottler17setIsVisuallyIdleEb(HEAP32[i1 + 1144 >> 2] | 0, i2);
 return;
}
function __ZNK7WebCore4Page35remoteInspectorInformationDidChangeEv(i1) {
 i1 = i1 | 0;
 __ZN9Inspector25RemoteInspectorDebuggable6updateEv(HEAP32[i1 + 1152 >> 2] | 0);
 return;
}
function __ZN7WebCore4Page22removeLayoutMilestonesEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 212 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & ~i2;
 return;
}
function __ZNK7WebCore4Page9groupNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 160 >> 2] | 0;
 return ((i2 | 0) == 0 ? __ZN3WTF8nullAtomE | 0 : i2 + 20 | 0) | 0;
}
function __ZN7WebCore4Page19addLayoutMilestonesEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 212 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | i2;
 return;
}
function __ZN7WebCore4Page31setCustomHTMLTokenizerChunkSizeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 176 >> 2] = (i2 | 0) > -1 ? i2 : -1;
 return;
}
function __ZN7WebCore4Page31setCustomHTMLTokenizerTimeDelayEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF64[i1 + 168 >> 3] = d2 < +0 ? +-1 : d2;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore4Page37setInLowQualityImageInterpolationModeEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 104 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore4Page23remoteInspectionAllowedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 + 1152 >> 2] | 0) + 8 | 0] & 1) != 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 1200 >> 2] | 0) != 0 | 0;
}
function __ZNK7WebCore4Page34inLowQualityImageInterpolationModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 104 | 0] & 1) != 0 | 0;
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
function __ZNK7WebCore4Page17backForwardClientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 56 >> 2] | 0) + 4 >> 2] | 0;
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
function __ZNK7WebCore4Page21hasSeenAnyMediaEngineEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 1188 >> 2] | 0) != 0 | 0;
}
function __ZNK7WebCore4Page16hasSeenAnyPluginEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 1168 >> 2] | 0) != 0 | 0;
}
function __ZNK7WebCore4Page22timerAlignmentIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF64[i1 + 200 >> 3]);
}
function __ZNK7WebCore4Page20minimumTimerIntervalEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF64[i1 + 192 >> 3]);
}
function __ZNK7WebCore4Page11openedByDOMEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 96 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZN7WebCore4Page11PageClientsC2Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 40) | 0;
 return;
}
function __ZN7WebCore4Page11PageClientsC1Ev(i1) {
 i1 = i1 | 0;
 _memset(i1 | 0, 0, 40) | 0;
 return;
}
function __ZN7WebCore4Page14setIsPrerenderEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 211 | 0] = 1;
 return;
}
function __ZN7WebCore4Page14setOpenedByDOMEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 96 | 0] = 1;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCoreL19networkStateChangedEb,b0,__ZN7WebCore4Page11PageClientsC2Ev,b0,__ZN7WebCore4PageD2Ev,b0,__ZN7WebCore4Page11PageClientsD2Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore4PageC2ERNS0_11PageClientsE,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_viii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "cttz_i8": cttz_i8, "ctlz_i8": ctlz_i8, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
// TODO: strip out parts of this we do not need
//======= begin closure i64 code =======
// Copyright 2009 The Closure Library Authors. All Rights Reserved.
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//      http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
/**
 * @fileoverview Defines a Long class for representing a 64-bit two's-complement
 * integer value, which faithfully simulates the behavior of a Java "long". This
 * implementation is derived from LongLib in GWT.
 *
 */
var i64Math = (function() { // Emscripten wrapper
  var goog = { math: {} };
  /**
   * Constructs a 64-bit two's-complement integer, given its low and high 32-bit
   * values as *signed* integers.  See the from* functions below for more
   * convenient ways of constructing Longs.
   *
   * The internal representation of a long is the two given signed, 32-bit values.
   * We use 32-bit pieces because these are the size of integers on which
   * Javascript performs bit-operations.  For operations like addition and
   * multiplication, we split each number into 16-bit pieces, which can easily be
   * multiplied within Javascript's floating-point representation without overflow
   * or change in sign.
   *
   * In the algorithms below, we frequently reduce the negative case to the
   * positive case by negating the input(s) and then post-processing the result.
   * Note that we must ALWAYS check specially whether those values are MIN_VALUE
   * (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
   * a positive number, it overflows back into a negative).  Not handling this
   * case would often result in infinite recursion.
   *
   * @param {number} low  The low (signed) 32 bits of the long.
   * @param {number} high  The high (signed) 32 bits of the long.
   * @constructor
   */
  goog.math.Long = function(low, high) {
    /**
     * @type {number}
     * @private
     */
    this.low_ = low | 0;  // force into 32 signed bits.
    /**
     * @type {number}
     * @private
     */
    this.high_ = high | 0;  // force into 32 signed bits.
  };
  // NOTE: Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the
  // from* methods on which they depend.
  /**
   * A cache of the Long representations of small integer values.
   * @type {!Object}
   * @private
   */
  goog.math.Long.IntCache_ = {};
  /**
   * Returns a Long representing the given (32-bit) integer value.
   * @param {number} value The 32-bit integer in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromInt = function(value) {
    if (-128 <= value && value < 128) {
      var cachedObj = goog.math.Long.IntCache_[value];
      if (cachedObj) {
        return cachedObj;
      }
    }
    var obj = new goog.math.Long(value | 0, value < 0 ? -1 : 0);
    if (-128 <= value && value < 128) {
      goog.math.Long.IntCache_[value] = obj;
    }
    return obj;
  };
  /**
   * Returns a Long representing the given value, provided that it is a finite
   * number.  Otherwise, zero is returned.
   * @param {number} value The number in question.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromNumber = function(value) {
    if (isNaN(value) || !isFinite(value)) {
      return goog.math.Long.ZERO;
    } else if (value <= -goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MIN_VALUE;
    } else if (value + 1 >= goog.math.Long.TWO_PWR_63_DBL_) {
      return goog.math.Long.MAX_VALUE;
    } else if (value < 0) {
      return goog.math.Long.fromNumber(-value).negate();
    } else {
      return new goog.math.Long(
          (value % goog.math.Long.TWO_PWR_32_DBL_) | 0,
          (value / goog.math.Long.TWO_PWR_32_DBL_) | 0);
    }
  };
  /**
   * Returns a Long representing the 64-bit integer that comes by concatenating
   * the given high and low bits.  Each is assumed to use 32 bits.
   * @param {number} lowBits The low 32-bits.
   * @param {number} highBits The high 32-bits.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromBits = function(lowBits, highBits) {
    return new goog.math.Long(lowBits, highBits);
  };
  /**
   * Returns a Long representation of the given string, written using the given
   * radix.
   * @param {string} str The textual representation of the Long.
   * @param {number=} opt_radix The radix in which the text is written.
   * @return {!goog.math.Long} The corresponding Long value.
   */
  goog.math.Long.fromString = function(str, opt_radix) {
    if (str.length == 0) {
      throw Error('number format error: empty string');
    }
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (str.charAt(0) == '-') {
      return goog.math.Long.fromString(str.substring(1), radix).negate();
    } else if (str.indexOf('-') >= 0) {
      throw Error('number format error: interior "-" character: ' + str);
    }
    // Do several (8) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 8));
    var result = goog.math.Long.ZERO;
    for (var i = 0; i < str.length; i += 8) {
      var size = Math.min(8, str.length - i);
      var value = parseInt(str.substring(i, i + size), radix);
      if (size < 8) {
        var power = goog.math.Long.fromNumber(Math.pow(radix, size));
        result = result.multiply(power).add(goog.math.Long.fromNumber(value));
      } else {
        result = result.multiply(radixToPower);
        result = result.add(goog.math.Long.fromNumber(value));
      }
    }
    return result;
  };
  // NOTE: the compiler should inline these constant values below and then remove
  // these variables, so there should be no runtime penalty for these.
  /**
   * Number used repeated below in calculations.  This must appear before the
   * first call to any from* function below.
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_16_DBL_ = 1 << 16;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_24_DBL_ = 1 << 24;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_32_DBL_ =
      goog.math.Long.TWO_PWR_16_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_31_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ / 2;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_48_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_16_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_64_DBL_ =
      goog.math.Long.TWO_PWR_32_DBL_ * goog.math.Long.TWO_PWR_32_DBL_;
  /**
   * @type {number}
   * @private
   */
  goog.math.Long.TWO_PWR_63_DBL_ =
      goog.math.Long.TWO_PWR_64_DBL_ / 2;
  /** @type {!goog.math.Long} */
  goog.math.Long.ZERO = goog.math.Long.fromInt(0);
  /** @type {!goog.math.Long} */
  goog.math.Long.ONE = goog.math.Long.fromInt(1);
  /** @type {!goog.math.Long} */
  goog.math.Long.NEG_ONE = goog.math.Long.fromInt(-1);
  /** @type {!goog.math.Long} */
  goog.math.Long.MAX_VALUE =
      goog.math.Long.fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0);
  /** @type {!goog.math.Long} */
  goog.math.Long.MIN_VALUE = goog.math.Long.fromBits(0, 0x80000000 | 0);
  /**
   * @type {!goog.math.Long}
   * @private
   */
  goog.math.Long.TWO_PWR_24_ = goog.math.Long.fromInt(1 << 24);
  /** @return {number} The value, assuming it is a 32-bit integer. */
  goog.math.Long.prototype.toInt = function() {
    return this.low_;
  };
  /** @return {number} The closest floating-point representation to this value. */
  goog.math.Long.prototype.toNumber = function() {
    return this.high_ * goog.math.Long.TWO_PWR_32_DBL_ +
           this.getLowBitsUnsigned();
  };
  /**
   * @param {number=} opt_radix The radix in which the text should be written.
   * @return {string} The textual representation of this value.
   */
  goog.math.Long.prototype.toString = function(opt_radix) {
    var radix = opt_radix || 10;
    if (radix < 2 || 36 < radix) {
      throw Error('radix out of range: ' + radix);
    }
    if (this.isZero()) {
      return '0';
    }
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        // We need to change the Long value before it can be negated, so we remove
        // the bottom-most digit in this base and then recurse to do the rest.
        var radixLong = goog.math.Long.fromNumber(radix);
        var div = this.div(radixLong);
        var rem = div.multiply(radixLong).subtract(this);
        return div.toString(radix) + rem.toInt().toString(radix);
      } else {
        return '-' + this.negate().toString(radix);
      }
    }
    // Do several (6) digits each time through the loop, so as to
    // minimize the calls to the very expensive emulated div.
    var radixToPower = goog.math.Long.fromNumber(Math.pow(radix, 6));
    var rem = this;
    var result = '';
    while (true) {
      var remDiv = rem.div(radixToPower);
      var intval = rem.subtract(remDiv.multiply(radixToPower)).toInt();
      var digits = intval.toString(radix);
      rem = remDiv;
      if (rem.isZero()) {
        return digits + result;
      } else {
        while (digits.length < 6) {
          digits = '0' + digits;
        }
        result = '' + digits + result;
      }
    }
  };
  /** @return {number} The high 32-bits as a signed value. */
  goog.math.Long.prototype.getHighBits = function() {
    return this.high_;
  };
  /** @return {number} The low 32-bits as a signed value. */
  goog.math.Long.prototype.getLowBits = function() {
    return this.low_;
  };
  /** @return {number} The low 32-bits as an unsigned value. */
  goog.math.Long.prototype.getLowBitsUnsigned = function() {
    return (this.low_ >= 0) ?
        this.low_ : goog.math.Long.TWO_PWR_32_DBL_ + this.low_;
  };
  /**
   * @return {number} Returns the number of bits needed to represent the absolute
   *     value of this Long.
   */
  goog.math.Long.prototype.getNumBitsAbs = function() {
    if (this.isNegative()) {
      if (this.equals(goog.math.Long.MIN_VALUE)) {
        return 64;
      } else {
        return this.negate().getNumBitsAbs();
      }
    } else {
      var val = this.high_ != 0 ? this.high_ : this.low_;
      for (var bit = 31; bit > 0; bit--) {
        if ((val & (1 << bit)) != 0) {
          break;
        }
      }
      return this.high_ != 0 ? bit + 33 : bit + 1;
    }
  };
  /** @return {boolean} Whether this value is zero. */
  goog.math.Long.prototype.isZero = function() {
    return this.high_ == 0 && this.low_ == 0;
  };
  /** @return {boolean} Whether this value is negative. */
  goog.math.Long.prototype.isNegative = function() {
    return this.high_ < 0;
  };
  /** @return {boolean} Whether this value is odd. */
  goog.math.Long.prototype.isOdd = function() {
    return (this.low_ & 1) == 1;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long equals the other.
   */
  goog.math.Long.prototype.equals = function(other) {
    return (this.high_ == other.high_) && (this.low_ == other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long does not equal the other.
   */
  goog.math.Long.prototype.notEquals = function(other) {
    return (this.high_ != other.high_) || (this.low_ != other.low_);
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than the other.
   */
  goog.math.Long.prototype.lessThan = function(other) {
    return this.compare(other) < 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is less than or equal to the other.
   */
  goog.math.Long.prototype.lessThanOrEqual = function(other) {
    return this.compare(other) <= 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than the other.
   */
  goog.math.Long.prototype.greaterThan = function(other) {
    return this.compare(other) > 0;
  };
  /**
   * @param {goog.math.Long} other Long to compare against.
   * @return {boolean} Whether this Long is greater than or equal to the other.
   */
  goog.math.Long.prototype.greaterThanOrEqual = function(other) {
    return this.compare(other) >= 0;
  };
  /**
   * Compares this Long with the given one.
   * @param {goog.math.Long} other Long to compare against.
   * @return {number} 0 if they are the same, 1 if the this is greater, and -1
   *     if the given one is greater.
   */
  goog.math.Long.prototype.compare = function(other) {
    if (this.equals(other)) {
      return 0;
    }
    var thisNeg = this.isNegative();
    var otherNeg = other.isNegative();
    if (thisNeg && !otherNeg) {
      return -1;
    }
    if (!thisNeg && otherNeg) {
      return 1;
    }
    // at this point, the signs are the same, so subtraction will not overflow
    if (this.subtract(other).isNegative()) {
      return -1;
    } else {
      return 1;
    }
  };
  /** @return {!goog.math.Long} The negation of this value. */
  goog.math.Long.prototype.negate = function() {
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.MIN_VALUE;
    } else {
      return this.not().add(goog.math.Long.ONE);
    }
  };
  /**
   * Returns the sum of this and the given Long.
   * @param {goog.math.Long} other Long to add to this one.
   * @return {!goog.math.Long} The sum of this and the given Long.
   */
  goog.math.Long.prototype.add = function(other) {
    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 + b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 + b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 + b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 + b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns the difference of this and the given Long.
   * @param {goog.math.Long} other Long to subtract from this.
   * @return {!goog.math.Long} The difference of this and the given Long.
   */
  goog.math.Long.prototype.subtract = function(other) {
    return this.add(other.negate());
  };
  /**
   * Returns the product of this and the given long.
   * @param {goog.math.Long} other Long to multiply with this.
   * @return {!goog.math.Long} The product of this and the other.
   */
  goog.math.Long.prototype.multiply = function(other) {
    if (this.isZero()) {
      return goog.math.Long.ZERO;
    } else if (other.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      return other.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return this.isOdd() ? goog.math.Long.MIN_VALUE : goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().multiply(other.negate());
      } else {
        return this.negate().multiply(other).negate();
      }
    } else if (other.isNegative()) {
      return this.multiply(other.negate()).negate();
    }
    // If both longs are small, use float multiplication
    if (this.lessThan(goog.math.Long.TWO_PWR_24_) &&
        other.lessThan(goog.math.Long.TWO_PWR_24_)) {
      return goog.math.Long.fromNumber(this.toNumber() * other.toNumber());
    }
    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
    // We can skip products that would overflow.
    var a48 = this.high_ >>> 16;
    var a32 = this.high_ & 0xFFFF;
    var a16 = this.low_ >>> 16;
    var a00 = this.low_ & 0xFFFF;
    var b48 = other.high_ >>> 16;
    var b32 = other.high_ & 0xFFFF;
    var b16 = other.low_ >>> 16;
    var b00 = other.low_ & 0xFFFF;
    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
    c00 += a00 * b00;
    c16 += c00 >>> 16;
    c00 &= 0xFFFF;
    c16 += a16 * b00;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c16 += a00 * b16;
    c32 += c16 >>> 16;
    c16 &= 0xFFFF;
    c32 += a32 * b00;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a16 * b16;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c32 += a00 * b32;
    c48 += c32 >>> 16;
    c32 &= 0xFFFF;
    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
    c48 &= 0xFFFF;
    return goog.math.Long.fromBits((c16 << 16) | c00, (c48 << 16) | c32);
  };
  /**
   * Returns this Long divided by the given one.
   * @param {goog.math.Long} other Long by which to divide.
   * @return {!goog.math.Long} This Long divided by the given one.
   */
  goog.math.Long.prototype.div = function(other) {
    if (other.isZero()) {
      throw Error('division by zero');
    } else if (this.isZero()) {
      return goog.math.Long.ZERO;
    }
    if (this.equals(goog.math.Long.MIN_VALUE)) {
      if (other.equals(goog.math.Long.ONE) ||
          other.equals(goog.math.Long.NEG_ONE)) {
        return goog.math.Long.MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
      } else if (other.equals(goog.math.Long.MIN_VALUE)) {
        return goog.math.Long.ONE;
      } else {
        // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
        var halfThis = this.shiftRight(1);
        var approx = halfThis.div(other).shiftLeft(1);
        if (approx.equals(goog.math.Long.ZERO)) {
          return other.isNegative() ? goog.math.Long.ONE : goog.math.Long.NEG_ONE;
        } else {
          var rem = this.subtract(other.multiply(approx));
          var result = approx.add(rem.div(other));
          return result;
        }
      }
    } else if (other.equals(goog.math.Long.MIN_VALUE)) {
      return goog.math.Long.ZERO;
    }
    if (this.isNegative()) {
      if (other.isNegative()) {
        return this.negate().div(other.negate());
      } else {
        return this.negate().div(other).negate();
      }
    } else if (other.isNegative()) {
      return this.div(other.negate()).negate();
    }
    // Repeat the following until the remainder is less than other:  find a
    // floating-point that approximates remainder / other *from below*, add this
    // into the result, and subtract it from the remainder.  It is critical that
    // the approximate value is less than or equal to the real value so that the
    // remainder never becomes negative.
    var res = goog.math.Long.ZERO;
    var rem = this;
    while (rem.greaterThanOrEqual(other)) {
      // Approximate the result of division. This may be a little greater or
      // smaller than the actual value.
      var approx = Math.max(1, Math.floor(rem.toNumber() / other.toNumber()));
      // We will tweak the approximate result by changing it in the 48-th digit or
      // the smallest non-fractional digit, whichever is larger.
      var log2 = Math.ceil(Math.log(approx) / Math.LN2);
      var delta = (log2 <= 48) ? 1 : Math.pow(2, log2 - 48);
      // Decrease the approximation until it is smaller than the remainder.  Note
      // that if it is too large, the product overflows and is negative.
      var approxRes = goog.math.Long.fromNumber(approx);
      var approxRem = approxRes.multiply(other);
      while (approxRem.isNegative() || approxRem.greaterThan(rem)) {
        approx -= delta;
        approxRes = goog.math.Long.fromNumber(approx);
        approxRem = approxRes.multiply(other);
      }
      // We know the answer can't be zero... and actually, zero would cause
      // infinite recursion since we would make no progress.
      if (approxRes.isZero()) {
        approxRes = goog.math.Long.ONE;
      }
      res = res.add(approxRes);
      rem = rem.subtract(approxRem);
    }
    return res;
  };
  /**
   * Returns this Long modulo the given one.
   * @param {goog.math.Long} other Long by which to mod.
   * @return {!goog.math.Long} This Long modulo the given one.
   */
  goog.math.Long.prototype.modulo = function(other) {
    return this.subtract(this.div(other).multiply(other));
  };
  /** @return {!goog.math.Long} The bitwise-NOT of this value. */
  goog.math.Long.prototype.not = function() {
    return goog.math.Long.fromBits(~this.low_, ~this.high_);
  };
  /**
   * Returns the bitwise-AND of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to AND.
   * @return {!goog.math.Long} The bitwise-AND of this and the other.
   */
  goog.math.Long.prototype.and = function(other) {
    return goog.math.Long.fromBits(this.low_ & other.low_,
                                   this.high_ & other.high_);
  };
  /**
   * Returns the bitwise-OR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to OR.
   * @return {!goog.math.Long} The bitwise-OR of this and the other.
   */
  goog.math.Long.prototype.or = function(other) {
    return goog.math.Long.fromBits(this.low_ | other.low_,
                                   this.high_ | other.high_);
  };
  /**
   * Returns the bitwise-XOR of this Long and the given one.
   * @param {goog.math.Long} other The Long with which to XOR.
   * @return {!goog.math.Long} The bitwise-XOR of this and the other.
   */
  goog.math.Long.prototype.xor = function(other) {
    return goog.math.Long.fromBits(this.low_ ^ other.low_,
                                   this.high_ ^ other.high_);
  };
  /**
   * Returns this Long with bits shifted to the left by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the left by the given amount.
   */
  goog.math.Long.prototype.shiftLeft = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var low = this.low_;
      if (numBits < 32) {
        var high = this.high_;
        return goog.math.Long.fromBits(
            low << numBits,
            (high << numBits) | (low >>> (32 - numBits)));
      } else {
        return goog.math.Long.fromBits(0, low << (numBits - 32));
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount.
   */
  goog.math.Long.prototype.shiftRight = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >> numBits);
      } else {
        return goog.math.Long.fromBits(
            high >> (numBits - 32),
            high >= 0 ? 0 : -1);
      }
    }
  };
  /**
   * Returns this Long with bits shifted to the right by the given amount, with
   * the new top bits matching the current sign bit.
   * @param {number} numBits The number of bits by which to shift.
   * @return {!goog.math.Long} This shifted to the right by the given amount, with
   *     zeros placed into the new leading bits.
   */
  goog.math.Long.prototype.shiftRightUnsigned = function(numBits) {
    numBits &= 63;
    if (numBits == 0) {
      return this;
    } else {
      var high = this.high_;
      if (numBits < 32) {
        var low = this.low_;
        return goog.math.Long.fromBits(
            (low >>> numBits) | (high << (32 - numBits)),
            high >>> numBits);
      } else if (numBits == 32) {
        return goog.math.Long.fromBits(high, 0);
      } else {
        return goog.math.Long.fromBits(high >>> (numBits - 32), 0);
      }
    }
  };
  //======= begin jsbn =======
  var navigator = { appName: 'Modern Browser' }; // polyfill a little
  // Copyright (c) 2005  Tom Wu
  // All Rights Reserved.
  // http://www-cs-students.stanford.edu/~tjw/jsbn/
  /*
   * Copyright (c) 2003-2005  Tom Wu
   * All Rights Reserved.
   *
   * Permission is hereby granted, free of charge, to any person obtaining
   * a copy of this software and associated documentation files (the
   * "Software"), to deal in the Software without restriction, including
   * without limitation the rights to use, copy, modify, merge, publish,
   * distribute, sublicense, and/or sell copies of the Software, and to
   * permit persons to whom the Software is furnished to do so, subject to
   * the following conditions:
   *
   * The above copyright notice and this permission notice shall be
   * included in all copies or substantial portions of the Software.
   *
   * THE SOFTWARE IS PROVIDED "AS-IS" AND WITHOUT WARRANTY OF ANY KIND, 
   * EXPRESS, IMPLIED OR OTHERWISE, INCLUDING WITHOUT LIMITATION, ANY 
   * WARRANTY OF MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE.  
   *
   * IN NO EVENT SHALL TOM WU BE LIABLE FOR ANY SPECIAL, INCIDENTAL,
   * INDIRECT OR CONSEQUENTIAL DAMAGES OF ANY KIND, OR ANY DAMAGES WHATSOEVER
   * RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER OR NOT ADVISED OF
   * THE POSSIBILITY OF DAMAGE, AND ON ANY THEORY OF LIABILITY, ARISING OUT
   * OF OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
   *
   * In addition, the following condition applies:
   *
   * All redistributions must retain an intact copy of this copyright notice
   * and disclaimer.
   */
  // Basic JavaScript BN library - subset useful for RSA encryption.
  // Bits per digit
  var dbits;
  // JavaScript engine analysis
  var canary = 0xdeadbeefcafe;
  var j_lm = ((canary&0xffffff)==0xefcafe);
  // (public) Constructor
  function BigInteger(a,b,c) {
    if(a != null)
      if("number" == typeof a) this.fromNumber(a,b,c);
      else if(b == null && "string" != typeof a) this.fromString(a,256);
      else this.fromString(a,b);
  }
  // return new, unset BigInteger
  function nbi() { return new BigInteger(null); }
  // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
  function am1(i,x,w,j,c,n) {
    while(--n >= 0) {
      var v = x*this[i++]+w[j]+c;
      c = Math.floor(v/0x4000000);
      w[j++] = v&0x3ffffff;
    }
    return c;
  }
  // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
  function am2(i,x,w,j,c,n) {
    var xl = x&0x7fff, xh = x>>15;
    while(--n >= 0) {
      var l = this[i]&0x7fff;
      var h = this[i++]>>15;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x7fff)<<15)+w[j]+(c&0x3fffffff);
      c = (l>>>30)+(m>>>15)+xh*h+(c>>>30);
      w[j++] = l&0x3fffffff;
    }
    return c;
  }
  // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.
  function am3(i,x,w,j,c,n) {
    var xl = x&0x3fff, xh = x>>14;
    while(--n >= 0) {
      var l = this[i]&0x3fff;
      var h = this[i++]>>14;
      var m = xh*l+h*xl;
      l = xl*l+((m&0x3fff)<<14)+w[j]+c;
      c = (l>>28)+(m>>14)+xh*h;
      w[j++] = l&0xfffffff;
    }
    return c;
  }
  if(j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
    BigInteger.prototype.am = am2;
    dbits = 30;
  }
  else if(j_lm && (navigator.appName != "Netscape")) {
    BigInteger.prototype.am = am1;
    dbits = 26;
  }
  else { // Mozilla/Netscape seems to prefer am3
    BigInteger.prototype.am = am3;
    dbits = 28;
  }
  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = ((1<<dbits)-1);
  BigInteger.prototype.DV = (1<<dbits);
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2,BI_FP);
  BigInteger.prototype.F1 = BI_FP-dbits;
  BigInteger.prototype.F2 = 2*dbits-BI_FP;
  // Digit conversions
  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";
  var BI_RC = new Array();
  var rr,vv;
  rr = "0".charCodeAt(0);
  for(vv = 0; vv <= 9; ++vv) BI_RC[rr++] = vv;
  rr = "a".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  rr = "A".charCodeAt(0);
  for(vv = 10; vv < 36; ++vv) BI_RC[rr++] = vv;
  function int2char(n) { return BI_RM.charAt(n); }
  function intAt(s,i) {
    var c = BI_RC[s.charCodeAt(i)];
    return (c==null)?-1:c;
  }
  // (protected) copy this to r
  function bnpCopyTo(r) {
    for(var i = this.t-1; i >= 0; --i) r[i] = this[i];
    r.t = this.t;
    r.s = this.s;
  }
  // (protected) set from integer value x, -DV <= x < DV
  function bnpFromInt(x) {
    this.t = 1;
    this.s = (x<0)?-1:0;
    if(x > 0) this[0] = x;
    else if(x < -1) this[0] = x+DV;
    else this.t = 0;
  }
  // return bigint initialized to value
  function nbv(i) { var r = nbi(); r.fromInt(i); return r; }
  // (protected) set from string and radix
  function bnpFromString(s,b) {
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 256) k = 8; // byte array
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else { this.fromRadix(s,b); return; }
    this.t = 0;
    this.s = 0;
    var i = s.length, mi = false, sh = 0;
    while(--i >= 0) {
      var x = (k==8)?s[i]&0xff:intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-") mi = true;
        continue;
      }
      mi = false;
      if(sh == 0)
        this[this.t++] = x;
      else if(sh+k > this.DB) {
        this[this.t-1] |= (x&((1<<(this.DB-sh))-1))<<sh;
        this[this.t++] = (x>>(this.DB-sh));
      }
      else
        this[this.t-1] |= x<<sh;
      sh += k;
      if(sh >= this.DB) sh -= this.DB;
    }
    if(k == 8 && (s[0]&0x80) != 0) {
      this.s = -1;
      if(sh > 0) this[this.t-1] |= ((1<<(this.DB-sh))-1)<<sh;
    }
    this.clamp();
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) clamp off excess high words
  function bnpClamp() {
    var c = this.s&this.DM;
    while(this.t > 0 && this[this.t-1] == c) --this.t;
  }
  // (public) return string representation in given radix
  function bnToString(b) {
    if(this.s < 0) return "-"+this.negate().toString(b);
    var k;
    if(b == 16) k = 4;
    else if(b == 8) k = 3;
    else if(b == 2) k = 1;
    else if(b == 32) k = 5;
    else if(b == 4) k = 2;
    else return this.toRadix(b);
    var km = (1<<k)-1, d, m = false, r = "", i = this.t;
    var p = this.DB-(i*this.DB)%k;
    if(i-- > 0) {
      if(p < this.DB && (d = this[i]>>p) > 0) { m = true; r = int2char(d); }
      while(i >= 0) {
        if(p < k) {
          d = (this[i]&((1<<p)-1))<<(k-p);
          d |= this[--i]>>(p+=this.DB-k);
        }
        else {
          d = (this[i]>>(p-=k))&km;
          if(p <= 0) { p += this.DB; --i; }
        }
        if(d > 0) m = true;
        if(m) r += int2char(d);
      }
    }
    return m?r:"0";
  }
  // (public) -this
  function bnNegate() { var r = nbi(); BigInteger.ZERO.subTo(this,r); return r; }
  // (public) |this|
  function bnAbs() { return (this.s<0)?this.negate():this; }
  // (public) return + if this > a, - if this < a, 0 if equal
  function bnCompareTo(a) {
    var r = this.s-a.s;
    if(r != 0) return r;
    var i = this.t;
    r = i-a.t;
    if(r != 0) return (this.s<0)?-r:r;
    while(--i >= 0) if((r=this[i]-a[i]) != 0) return r;
    return 0;
  }
  // returns bit length of the integer x
  function nbits(x) {
    var r = 1, t;
    if((t=x>>>16) != 0) { x = t; r += 16; }
    if((t=x>>8) != 0) { x = t; r += 8; }
    if((t=x>>4) != 0) { x = t; r += 4; }
    if((t=x>>2) != 0) { x = t; r += 2; }
    if((t=x>>1) != 0) { x = t; r += 1; }
    return r;
  }
  // (public) return the number of bits in "this"
  function bnBitLength() {
    if(this.t <= 0) return 0;
    return this.DB*(this.t-1)+nbits(this[this.t-1]^(this.s&this.DM));
  }
  // (protected) r = this << n*DB
  function bnpDLShiftTo(n,r) {
    var i;
    for(i = this.t-1; i >= 0; --i) r[i+n] = this[i];
    for(i = n-1; i >= 0; --i) r[i] = 0;
    r.t = this.t+n;
    r.s = this.s;
  }
  // (protected) r = this >> n*DB
  function bnpDRShiftTo(n,r) {
    for(var i = n; i < this.t; ++i) r[i-n] = this[i];
    r.t = Math.max(this.t-n,0);
    r.s = this.s;
  }
  // (protected) r = this << n
  function bnpLShiftTo(n,r) {
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<cbs)-1;
    var ds = Math.floor(n/this.DB), c = (this.s<<bs)&this.DM, i;
    for(i = this.t-1; i >= 0; --i) {
      r[i+ds+1] = (this[i]>>cbs)|c;
      c = (this[i]&bm)<<bs;
    }
    for(i = ds-1; i >= 0; --i) r[i] = 0;
    r[ds] = c;
    r.t = this.t+ds+1;
    r.s = this.s;
    r.clamp();
  }
  // (protected) r = this >> n
  function bnpRShiftTo(n,r) {
    r.s = this.s;
    var ds = Math.floor(n/this.DB);
    if(ds >= this.t) { r.t = 0; return; }
    var bs = n%this.DB;
    var cbs = this.DB-bs;
    var bm = (1<<bs)-1;
    r[0] = this[ds]>>bs;
    for(var i = ds+1; i < this.t; ++i) {
      r[i-ds-1] |= (this[i]&bm)<<cbs;
      r[i-ds] = this[i]>>bs;
    }
    if(bs > 0) r[this.t-ds-1] |= (this.s&bm)<<cbs;
    r.t = this.t-ds;
    r.clamp();
  }
  // (protected) r = this - a
  function bnpSubTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]-a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c -= a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c -= a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c -= a.s;
    }
    r.s = (c<0)?-1:0;
    if(c < -1) r[i++] = this.DV+c;
    else if(c > 0) r[i++] = c;
    r.t = i;
    r.clamp();
  }
  // (protected) r = this * a, r != this,a (HAC 14.12)
  // "this" should be the larger one if appropriate.
  function bnpMultiplyTo(a,r) {
    var x = this.abs(), y = a.abs();
    var i = x.t;
    r.t = i+y.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < y.t; ++i) r[i+x.t] = x.am(0,y[i],r,i,0,x.t);
    r.s = 0;
    r.clamp();
    if(this.s != a.s) BigInteger.ZERO.subTo(r,r);
  }
  // (protected) r = this^2, r != this (HAC 14.16)
  function bnpSquareTo(r) {
    var x = this.abs();
    var i = r.t = 2*x.t;
    while(--i >= 0) r[i] = 0;
    for(i = 0; i < x.t-1; ++i) {
      var c = x.am(i,x[i],r,2*i,0,1);
      if((r[i+x.t]+=x.am(i+1,2*x[i],r,2*i+1,c,x.t-i-1)) >= x.DV) {
        r[i+x.t] -= x.DV;
        r[i+x.t+1] = 1;
      }
    }
    if(r.t > 0) r[r.t-1] += x.am(i,x[i],r,2*i,0,1);
    r.s = 0;
    r.clamp();
  }
  // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
  // r != q, this != m.  q or r may be null.
  function bnpDivRemTo(m,q,r) {
    var pm = m.abs();
    if(pm.t <= 0) return;
    var pt = this.abs();
    if(pt.t < pm.t) {
      if(q != null) q.fromInt(0);
      if(r != null) this.copyTo(r);
      return;
    }
    if(r == null) r = nbi();
    var y = nbi(), ts = this.s, ms = m.s;
    var nsh = this.DB-nbits(pm[pm.t-1]);	// normalize modulus
    if(nsh > 0) { pm.lShiftTo(nsh,y); pt.lShiftTo(nsh,r); }
    else { pm.copyTo(y); pt.copyTo(r); }
    var ys = y.t;
    var y0 = y[ys-1];
    if(y0 == 0) return;
    var yt = y0*(1<<this.F1)+((ys>1)?y[ys-2]>>this.F2:0);
    var d1 = this.FV/yt, d2 = (1<<this.F1)/yt, e = 1<<this.F2;
    var i = r.t, j = i-ys, t = (q==null)?nbi():q;
    y.dlShiftTo(j,t);
    if(r.compareTo(t) >= 0) {
      r[r.t++] = 1;
      r.subTo(t,r);
    }
    BigInteger.ONE.dlShiftTo(ys,t);
    t.subTo(y,y);	// "negative" y so we can replace sub with am later
    while(y.t < ys) y[y.t++] = 0;
    while(--j >= 0) {
      // Estimate quotient digit
      var qd = (r[--i]==y0)?this.DM:Math.floor(r[i]*d1+(r[i-1]+e)*d2);
      if((r[i]+=y.am(0,qd,r,j,0,ys)) < qd) {	// Try it out
        y.dlShiftTo(j,t);
        r.subTo(t,r);
        while(r[i] < --qd) r.subTo(t,r);
      }
    }
    if(q != null) {
      r.drShiftTo(ys,q);
      if(ts != ms) BigInteger.ZERO.subTo(q,q);
    }
    r.t = ys;
    r.clamp();
    if(nsh > 0) r.rShiftTo(nsh,r);	// Denormalize remainder
    if(ts < 0) BigInteger.ZERO.subTo(r,r);
  }
  // (public) this mod a
  function bnMod(a) {
    var r = nbi();
    this.abs().divRemTo(a,null,r);
    if(this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) a.subTo(r,r);
    return r;
  }
  // Modular reduction using "classic" algorithm
  function Classic(m) { this.m = m; }
  function cConvert(x) {
    if(x.s < 0 || x.compareTo(this.m) >= 0) return x.mod(this.m);
    else return x;
  }
  function cRevert(x) { return x; }
  function cReduce(x) { x.divRemTo(this.m,null,x); }
  function cMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  function cSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  Classic.prototype.convert = cConvert;
  Classic.prototype.revert = cRevert;
  Classic.prototype.reduce = cReduce;
  Classic.prototype.mulTo = cMulTo;
  Classic.prototype.sqrTo = cSqrTo;
  // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
  // justification:
  //         xy == 1 (mod m)
  //         xy =  1+km
  //   xy(2-xy) = (1+km)(1-km)
  // x[y(2-xy)] = 1-k^2m^2
  // x[y(2-xy)] == 1 (mod m^2)
  // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
  // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
  // JS multiply "overflows" differently from C/C++, so care is needed here.
  function bnpInvDigit() {
    if(this.t < 1) return 0;
    var x = this[0];
    if((x&1) == 0) return 0;
    var y = x&3;		// y == 1/x mod 2^2
    y = (y*(2-(x&0xf)*y))&0xf;	// y == 1/x mod 2^4
    y = (y*(2-(x&0xff)*y))&0xff;	// y == 1/x mod 2^8
    y = (y*(2-(((x&0xffff)*y)&0xffff)))&0xffff;	// y == 1/x mod 2^16
    // last step - calculate inverse mod DV directly;
    // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
    y = (y*(2-x*y%this.DV))%this.DV;		// y == 1/x mod 2^dbits
    // we really want the negative inverse, and -DV < y < DV
    return (y>0)?this.DV-y:-y;
  }
  // Montgomery reduction
  function Montgomery(m) {
    this.m = m;
    this.mp = m.invDigit();
    this.mpl = this.mp&0x7fff;
    this.mph = this.mp>>15;
    this.um = (1<<(m.DB-15))-1;
    this.mt2 = 2*m.t;
  }
  // xR mod m
  function montConvert(x) {
    var r = nbi();
    x.abs().dlShiftTo(this.m.t,r);
    r.divRemTo(this.m,null,r);
    if(x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) this.m.subTo(r,r);
    return r;
  }
  // x/R mod m
  function montRevert(x) {
    var r = nbi();
    x.copyTo(r);
    this.reduce(r);
    return r;
  }
  // x = x/R mod m (HAC 14.32)
  function montReduce(x) {
    while(x.t <= this.mt2)	// pad x so am has enough room later
      x[x.t++] = 0;
    for(var i = 0; i < this.m.t; ++i) {
      // faster way of calculating u0 = x[i]*mp mod DV
      var j = x[i]&0x7fff;
      var u0 = (j*this.mpl+(((j*this.mph+(x[i]>>15)*this.mpl)&this.um)<<15))&x.DM;
      // use am to combine the multiply-shift-add into one call
      j = i+this.m.t;
      x[j] += this.m.am(0,u0,x,i,0,this.m.t);
      // propagate carry
      while(x[j] >= x.DV) { x[j] -= x.DV; x[++j]++; }
    }
    x.clamp();
    x.drShiftTo(this.m.t,x);
    if(x.compareTo(this.m) >= 0) x.subTo(this.m,x);
  }
  // r = "x^2/R mod m"; x != r
  function montSqrTo(x,r) { x.squareTo(r); this.reduce(r); }
  // r = "xy/R mod m"; x,y != r
  function montMulTo(x,y,r) { x.multiplyTo(y,r); this.reduce(r); }
  Montgomery.prototype.convert = montConvert;
  Montgomery.prototype.revert = montRevert;
  Montgomery.prototype.reduce = montReduce;
  Montgomery.prototype.mulTo = montMulTo;
  Montgomery.prototype.sqrTo = montSqrTo;
  // (protected) true iff this is even
  function bnpIsEven() { return ((this.t>0)?(this[0]&1):this.s) == 0; }
  // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
  function bnpExp(e,z) {
    if(e > 0xffffffff || e < 1) return BigInteger.ONE;
    var r = nbi(), r2 = nbi(), g = z.convert(this), i = nbits(e)-1;
    g.copyTo(r);
    while(--i >= 0) {
      z.sqrTo(r,r2);
      if((e&(1<<i)) > 0) z.mulTo(r2,g,r);
      else { var t = r; r = r2; r2 = t; }
    }
    return z.revert(r);
  }
  // (public) this^e % m, 0 <= e < 2^32
  function bnModPowInt(e,m) {
    var z;
    if(e < 256 || m.isEven()) z = new Classic(m); else z = new Montgomery(m);
    return this.exp(e,z);
  }
  // protected
  BigInteger.prototype.copyTo = bnpCopyTo;
  BigInteger.prototype.fromInt = bnpFromInt;
  BigInteger.prototype.fromString = bnpFromString;
  BigInteger.prototype.clamp = bnpClamp;
  BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
  BigInteger.prototype.drShiftTo = bnpDRShiftTo;
  BigInteger.prototype.lShiftTo = bnpLShiftTo;
  BigInteger.prototype.rShiftTo = bnpRShiftTo;
  BigInteger.prototype.subTo = bnpSubTo;
  BigInteger.prototype.multiplyTo = bnpMultiplyTo;
  BigInteger.prototype.squareTo = bnpSquareTo;
  BigInteger.prototype.divRemTo = bnpDivRemTo;
  BigInteger.prototype.invDigit = bnpInvDigit;
  BigInteger.prototype.isEven = bnpIsEven;
  BigInteger.prototype.exp = bnpExp;
  // public
  BigInteger.prototype.toString = bnToString;
  BigInteger.prototype.negate = bnNegate;
  BigInteger.prototype.abs = bnAbs;
  BigInteger.prototype.compareTo = bnCompareTo;
  BigInteger.prototype.bitLength = bnBitLength;
  BigInteger.prototype.mod = bnMod;
  BigInteger.prototype.modPowInt = bnModPowInt;
  // "constants"
  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1);
  // jsbn2 stuff
  // (protected) convert from radix string
  function bnpFromRadix(s,b) {
    this.fromInt(0);
    if(b == null) b = 10;
    var cs = this.chunkSize(b);
    var d = Math.pow(b,cs), mi = false, j = 0, w = 0;
    for(var i = 0; i < s.length; ++i) {
      var x = intAt(s,i);
      if(x < 0) {
        if(s.charAt(i) == "-" && this.signum() == 0) mi = true;
        continue;
      }
      w = b*w+x;
      if(++j >= cs) {
        this.dMultiply(d);
        this.dAddOffset(w,0);
        j = 0;
        w = 0;
      }
    }
    if(j > 0) {
      this.dMultiply(Math.pow(b,j));
      this.dAddOffset(w,0);
    }
    if(mi) BigInteger.ZERO.subTo(this,this);
  }
  // (protected) return x s.t. r^x < DV
  function bnpChunkSize(r) { return Math.floor(Math.LN2*this.DB/Math.log(r)); }
  // (public) 0 if this == 0, 1 if this > 0
  function bnSigNum() {
    if(this.s < 0) return -1;
    else if(this.t <= 0 || (this.t == 1 && this[0] <= 0)) return 0;
    else return 1;
  }
  // (protected) this *= n, this >= 0, 1 < n < DV
  function bnpDMultiply(n) {
    this[this.t] = this.am(0,n-1,this,0,0,this.t);
    ++this.t;
    this.clamp();
  }
  // (protected) this += n << w words, this >= 0
  function bnpDAddOffset(n,w) {
    if(n == 0) return;
    while(this.t <= w) this[this.t++] = 0;
    this[w] += n;
    while(this[w] >= this.DV) {
      this[w] -= this.DV;
      if(++w >= this.t) this[this.t++] = 0;
      ++this[w];
    }
  }
  // (protected) convert to radix string
  function bnpToRadix(b) {
    if(b == null) b = 10;
    if(this.signum() == 0 || b < 2 || b > 36) return "0";
    var cs = this.chunkSize(b);
    var a = Math.pow(b,cs);
    var d = nbv(a), y = nbi(), z = nbi(), r = "";
    this.divRemTo(d,y,z);
    while(y.signum() > 0) {
      r = (a+z.intValue()).toString(b).substr(1) + r;
      y.divRemTo(d,y,z);
    }
    return z.intValue().toString(b) + r;
  }
  // (public) return value as integer
  function bnIntValue() {
    if(this.s < 0) {
      if(this.t == 1) return this[0]-this.DV;
      else if(this.t == 0) return -1;
    }
    else if(this.t == 1) return this[0];
    else if(this.t == 0) return 0;
    // assumes 16 < DB < 32
    return ((this[1]&((1<<(32-this.DB))-1))<<this.DB)|this[0];
  }
  // (protected) r = this + a
  function bnpAddTo(a,r) {
    var i = 0, c = 0, m = Math.min(a.t,this.t);
    while(i < m) {
      c += this[i]+a[i];
      r[i++] = c&this.DM;
      c >>= this.DB;
    }
    if(a.t < this.t) {
      c += a.s;
      while(i < this.t) {
        c += this[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += this.s;
    }
    else {
      c += this.s;
      while(i < a.t) {
        c += a[i];
        r[i++] = c&this.DM;
        c >>= this.DB;
      }
      c += a.s;
    }
    r.s = (c<0)?-1:0;
    if(c > 0) r[i++] = c;
    else if(c < -1) r[i++] = this.DV+c;
    r.t = i;
    r.clamp();
  }
  BigInteger.prototype.fromRadix = bnpFromRadix;
  BigInteger.prototype.chunkSize = bnpChunkSize;
  BigInteger.prototype.signum = bnSigNum;
  BigInteger.prototype.dMultiply = bnpDMultiply;
  BigInteger.prototype.dAddOffset = bnpDAddOffset;
  BigInteger.prototype.toRadix = bnpToRadix;
  BigInteger.prototype.intValue = bnIntValue;
  BigInteger.prototype.addTo = bnpAddTo;
  //======= end jsbn =======
  // Emscripten wrapper
  var Wrapper = {
    abs: function(l, h) {
      var x = new goog.math.Long(l, h);
      var ret;
      if (x.isNegative()) {
        ret = x.negate();
      } else {
        ret = x;
      }
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
    },
    ensureTemps: function() {
      if (Wrapper.ensuredTemps) return;
      Wrapper.ensuredTemps = true;
      Wrapper.two32 = new BigInteger();
      Wrapper.two32.fromString('4294967296', 10);
      Wrapper.two64 = new BigInteger();
      Wrapper.two64.fromString('18446744073709551616', 10);
      Wrapper.temp1 = new BigInteger();
      Wrapper.temp2 = new BigInteger();
    },
    lh2bignum: function(l, h) {
      var a = new BigInteger();
      a.fromString(h.toString(), 10);
      var b = new BigInteger();
      a.multiplyTo(Wrapper.two32, b);
      var c = new BigInteger();
      c.fromString(l.toString(), 10);
      var d = new BigInteger();
      c.addTo(b, d);
      return d;
    },
    stringify: function(l, h, unsigned) {
      var ret = new goog.math.Long(l, h).toString();
      if (unsigned && ret[0] == '-') {
        // unsign slowly using jsbn bignums
        Wrapper.ensureTemps();
        var bignum = new BigInteger();
        bignum.fromString(ret, 10);
        ret = new BigInteger();
        Wrapper.two64.addTo(bignum, ret);
        ret = ret.toString(10);
      }
      return ret;
    },
    fromString: function(str, base, min, max, unsigned) {
      Wrapper.ensureTemps();
      var bignum = new BigInteger();
      bignum.fromString(str, base);
      var bigmin = new BigInteger();
      bigmin.fromString(min, 10);
      var bigmax = new BigInteger();
      bigmax.fromString(max, 10);
      if (unsigned && bignum.compareTo(BigInteger.ZERO) < 0) {
        var temp = new BigInteger();
        bignum.addTo(Wrapper.two64, temp);
        bignum = temp;
      }
      var error = false;
      if (bignum.compareTo(bigmin) < 0) {
        bignum = bigmin;
        error = true;
      } else if (bignum.compareTo(bigmax) > 0) {
        bignum = bigmax;
        error = true;
      }
      var ret = goog.math.Long.fromString(bignum.toString()); // min-max checks should have clamped this to a range goog.math.Long can handle well
      HEAP32[tempDoublePtr>>2] = ret.low_;
      HEAP32[tempDoublePtr+4>>2] = ret.high_;
      if (error) throw 'range error';
    }
  };
  return Wrapper;
})();
//======= end closure i64 code =======
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorINS_3RefIN7WebCore14PluginViewBaseEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","_strlen","__ZN7WebCore4Page14setOpenedByDOMEv","__ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore4Page14setMediaVolumeEf","__ZN7WebCore4Page52updateStyleForAllPagesAfterGlobalChangeInEnvironmentEv","__ZN7WebCore4Page24scrollingStateTreeAsTextEv","__ZN7WebCore4Page25suspendScriptedAnimationsEv","__ZN7WebCore4Page17setIsVisuallyIdleEb","__ZN7WebCore4Page35resumeActiveDOMObjectsAndAnimationsEv","__ZNK7WebCore4Page16hasSeenAnyPluginEv","__ZN7WebCore4Page19visitedStateChangedEPNS_9PageGroupEy","__ZNK7WebCore4Page15visibilityStateEv","_memcpy","__ZN7WebCore4Page32lockAllOverlayScrollbarsToHiddenEb","__ZN7WebCore4Page20scrollingCoordinatorEv","__ZN7WebCore4Page22nonFastScrollableRectsEPKNS_5FrameE","__ZN7WebCore4Page22allVisitedStateChangedEPNS_9PageGroupE","__ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore4Page16countFindMatchesERKN3WTF6StringEjj","__ZNK7WebCore4Page17backForwardClientEv","__ZN7WebCore4Page13setIsInWindowEb","__ZNK7WebCore4Page9pageCountEv","__ZN7WebCore4Page16resetSeenPluginsEv","__ZN7WebCore4Page11setDebuggerEPN3JSC8DebuggerE","__ZN7WebCore4Page21resumeAnimatingImagesEv","__ZN7WebCore4Page44incrementFrameHandlingBeforeUnloadEventCountEv","__ZN7WebCore13MimeClassInfoD2Ev","__ZN7WebCore4Page12setIsVisibleEbb","__ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore4Page22removeLayoutMilestonesEj","__ZN3WTF9HashTableIPN7WebCore9PageGroupES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZN7WebCore4Page31setCustomHTMLTokenizerTimeDelayEd","__ZN7WebCore4PageC2ERNS0_11PageClientsE","__ZN7WebCore4Page33synchronousScrollingReasonsAsTextEv","__ZN7WebCore4Page25setTimerAlignmentIntervalEd","__ZN7WebCore4Page26addRelevantUnpaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE","__ZN7WebCore4Page14refreshPluginsEb","__ZN7WebCore4Page18setPageScaleFactorEfRKNS_8IntPointE","__ZN3WTF9HashTableIPN7WebCore4PageES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore4Page33resetRelevantPaintedObjectCounterEv","__ZNK7WebCore4Page22timerAlignmentIntervalEv","__ZN7WebCore4Page16setDefersLoadingEb","__ZN7WebCore4Page37startCountingRelevantRepaintedObjectsEv","__ZN3WTF7HashSetIPN7WebCore12RenderObjectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore4PageD2Ev","__ZNK7WebCore4Page11openedByDOMEv","__ZN7WebCore4Page20setDeviceScaleFactorEf","__ZN7WebCore10PluginInfoD2Ev","__ZN7WebCore4Page19createActivityTokenEv","__ZN7WebCore4Page36setShouldSuppressScrollbarAnimationsEb","__ZN3WTF9HashTableIPN7WebCore12RenderObjectES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore4Page27storageBlockingStateChangedEv","__ZN7WebCore4Page14setIsPrerenderEv","__ZN7WebCore4Page13setPaginationERKNS_10PaginationE","__ZN7WebCore4Page36jettisonStyleResolversInAllDocumentsEv","__ZNK7WebCore4Page9selectionEv","__ZNK7WebCore4Page23remoteInspectionAllowedEv","__ZNK7WebCore4Page35remoteInspectorInformationDidChangeEv","__ZN7WebCore4Page21removeAllVisitedLinksEv","__ZN7WebCore4Page21markAllMatchesForTextERKN3WTF6StringEjbj","__ZNK7WebCore4Page13hasSeenPluginERKN3WTF6StringE","__ZN7WebCore4Page12setGroupNameERKN3WTF6StringE","__ZN7WebCore4Page8goToItemEPNS_11HistoryItemENS_13FrameLoadTypeE","__ZNK7WebCore4Page18hasSeenMediaEngineERKN3WTF6StringE","__ZN7WebCore4Page16stringToViewModeERKN3WTF6StringE","__ZN7WebCore4Page20unmarkAllTextMatchesEv","__ZN7WebCore4Page23clearUndoRedoOperationsEv","__ZN7WebCore4Page23setMinimumTimerIntervalEd","__ZNK7WebCore4Page17viewportArgumentsEv","__ZN7WebCore4Page6goBackEv","__ZN7WebCore4Page44hiddenPageCSSAnimationSuspensionStateChangedEv","__ZN7WebCore4Page26dnsPrefetchingStateChangedEv","__ZN3WTF12VectorBufferIN7WebCore6Region4SpanELj16EE4swapERS4_","__ZN7WebCore17deviceScaleFactorEPNS_5FrameE","__ZN7WebCore4Page21resetSeenMediaEnginesEv","__ZNK7WebCore4Page20minimumTimerIntervalEv","__ZNK7WebCore4Page34inLowQualityImageInterpolationModeEv","__ZN7WebCore4Page35isAnyFrameHandlingBeforeUnloadEventEv","__ZN7WebCore4Page16setCanStartMediaEb","_memset","__ZN7WebCore4Page31setCustomHTMLTokenizerChunkSizeEi","__ZN7WebCore4Page13rangeOfStringERKN3WTF6StringEPNS_5RangeEj","__ZNK7WebCore4Page10pluginDataEv","__ZN7WebCore4Page24findStringMatchingRangesERKN3WTF6StringEjiPNS1_6VectorINS1_6RefPtrINS_5RangeEEELj0ENS1_15CrashOnOverflowEEERi","__ZN7WebCore4Page40hiddenPageDOMTimerThrottlingStateChangedEv","__ZN7WebCore4Page24resumeScriptedAnimationsEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore4Page11setViewModeENS0_8ViewModeE","__ZN7WebCoreL19networkStateChangedEb","__ZN7WebCore4Page19addLayoutMilestonesEj","__ZNK7WebCore4Page21hasSeenAnyMediaEngineEv","__ZN7WebCore4Page26addRelevantRepaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE","__ZNK7WebCore4Page9groupNameEv","__ZN7WebCore4Page11PageClientsC2Ev","__ZN7WebCore4Page37setInLowQualityImageInterpolationModeEb","__ZN7WebCore4Page30setNeedsRecalcStyleInAllFramesEv","__ZN3WTF7HashSetIPN7WebCore4PageENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore10PluginDataD2Ev","__ZN7WebCore4Page36suspendActiveDOMObjectsAndAnimationsEv","__ZN7WebCore4Page10findStringERKN3WTF6StringEj","__ZN7WebCore4Page11PageClientsD2Ev","__ZN7WebCore4Page18findMatchesForTextERKN3WTF6StringEjjNS0_22ShouldHighlightMatchesENS0_17ShouldMarkMatchesE","__ZNK7WebCore4Page18canGoBackOrForwardEi","__ZN7WebCore4Page9goForwardEv","__ZN7WebCore4Page14throttleTimersEv","__ZN7WebCore4Page26setRemoteInspectionAllowedEb","__ZN7WebCore4Page16getHistoryLengthEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore4Page9sawPluginERKN3WTF6StringE","__ZNK7WebCore4Page34isCountingRelevantRepaintedObjectsEv","__ZNK7WebCore4Page14userStyleSheetEv","__ZN7WebCore4Page44decrementFrameHandlingBeforeUnloadEventCountEv","__ZN7WebCore4Page16unthrottleTimersEv","__ZN7WebCore4Page32setMemoryCacheClientCallsEnabledEb","__ZN7WebCore4Page14sawMediaEngineERKN3WTF6StringE","__ZN7WebCore4Page11pluginViewsEv","__ZNK7WebCore4Page14renderTreeSizeEv","__ZN7WebCore4Page17setSessionStorageEN3WTF10PassRefPtrINS_16StorageNamespaceEEE","__ZN7WebCore4Page9initGroupEv","__ZN7WebCore4Page14sessionStorageEb","__ZN7WebCore4Page15goBackOrForwardEi","__ZN7WebCore4Page29userStyleSheetLocationChangedEv","__ZN7WebCore4Page27privateBrowsingStateChangedEv","_i64Add","_i64Subtract","_bitshift64Shl","_bitshift64Lshr","_bitshift64Ashr","_llvm_ctlz_i32","_llvm_cttz_i32"]

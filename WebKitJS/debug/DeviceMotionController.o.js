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
H_BASE = parentModule["_malloc"](88 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 88;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22DeviceMotionControllerC1EPNS_18DeviceMotionClientE;
/* memory initializer */ allocate([68,101,118,105,99,101,77,111,116,105,111,110,67,111,110,116,114,111,108,108,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore22DeviceMotionControllerE=(H_BASE+32)|0;
  var __ZTVN7WebCore16DeviceControllerE=(H_BASE+64)|0;
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
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore22DeviceMotionController10isActiveAtEPNS_4PageE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = i3 & ((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11));
 i5 = i4 + (i1 << 3) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L7 : do {
  if ((i6 | 0) == (H_BASE + 8 | 0)) {
   i7 = i5;
  } else {
   i8 = 0;
   i9 = i1;
   i10 = i6;
   while (1) {
    if ((i10 | 0) == 0) {
     i2 = 0;
     break;
    }
    i11 = (i8 | 0) == 0 ? ((((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))))) >>> 20 ^ ((((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))))) | 1 : i8;
    i12 = i11 + i9 & i3;
    i13 = i4 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (H_BASE + 8 | 0)) {
     i7 = i13;
     break L7;
    } else {
     i8 = i11;
     i9 = i12;
     i10 = i14;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i4 + 16 >> 2] | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore22DeviceMotionController4fromEPNS_4PageE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = i3 & ((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11));
 i5 = i4 + (i1 << 3) | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L7 : do {
  if ((i6 | 0) == (H_BASE + 8 | 0)) {
   i7 = i5;
  } else {
   i8 = 0;
   i9 = i1;
   i10 = i6;
   while (1) {
    if ((i10 | 0) == 0) {
     i2 = 0;
     break;
    }
    i11 = (i8 | 0) == 0 ? ((((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))))) >>> 20 ^ ((((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)))) << 2 ^ (((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))) >>> 7 ^ ((((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) << 12 ^ (((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11)) >>> 23) + ~((((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11) | 0) >>> 16 ^ ((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) + ~(((((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) >>> 6 ^ ((H_BASE + 8 + ~(H_BASE + 8 << 15) | 0) >>> 10 ^ H_BASE + 8 + ~(H_BASE + 8 << 15)) * 9 & -1) << 11))))) | 1 : i8;
    i12 = i11 + i9 & i3;
    i13 = i4 + (i12 << 3) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 | 0) == (H_BASE + 8 | 0)) {
     i7 = i13;
     break L7;
    } else {
     i8 = i11;
     i9 = i12;
     i10 = i14;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i7 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i7 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS2_RNS_10PassOwnPtrIS8_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
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
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 15](i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore16DeviceControllerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 72;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 48 | 0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = HEAP32[i2 + (i4 << 3) >> 2] | 0;
    i6 = i5;
    do {
     if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
      i7 = i5 + 36 | 0;
      i8 = i7 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) != 0) {
       HEAP32[i8 >> 2] = i9;
       break;
      }
      i9 = i7 - 36 | 0;
      if ((i9 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] & 15](i9);
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) > 0) {
  i1 = 0;
  while (1) {
   i4 = HEAP32[i2 + (i1 << 3) >> 2] | 0;
   i5 = i4;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i4 + 36 | 0;
     i9 = i6 | 0;
     i7 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i9 >> 2] = i7;
      break;
     }
     i7 = i6 - 36 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] & 15](i7);
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i3 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore21provideDeviceMotionToEPNS_4PageEPNS_18DeviceMotionClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = __Znwj(104) | 0;
 __ZN7WebCore16DeviceControllerC2EPNS_12DeviceClientE(i7, i2 | 0);
 HEAP32[i7 >> 2] = H_BASE + 40;
 i2 = HEAP32[i7 + 44 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2, i7);
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i4 >> 2] = H_BASE + 8;
 __ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS2_RNS_10PassOwnPtrIS8_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SA_SC_SE_SK_SH_EEEEOT0_OT1_(i5, i1 | 0, i4, i6);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i6 >> 2] = i4;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  STACKTOP = i3;
  return;
 } else {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22DeviceMotionController21didChangeDeviceMotionEPNS_16DeviceMotionDataE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 100 | 0;
 i6 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore17DeviceMotionEventC1ERKN3WTF12AtomicStringEPNS_16DeviceMotionDataE(i6, i5, i2);
 i2 = i4 | 0;
 HEAP32[i2 >> 2] = i6;
 __ZN7WebCore16DeviceController19dispatchDeviceEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 8 | 0;
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = i2 - 8 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 STACKTOP = i3;
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
function __ZN7WebCore22DeviceMotionController12getLastEventEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = (HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 100 | 0;
 i4 = HEAP32[i2 + 44 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 7](i4) | 0;
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore17DeviceMotionEventC1ERKN3WTF12AtomicStringEPNS_16DeviceMotionDataE(i4, i3, i2);
 HEAP32[i1 >> 2] = i4;
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
function __ZN7WebCore22DeviceMotionController6createEPNS_18DeviceMotionClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __Znwj(104) | 0;
 i4 = i3;
 __ZN7WebCore16DeviceControllerC2EPNS_12DeviceClientE(i3, i2 | 0);
 HEAP32[i3 >> 2] = H_BASE + 40;
 i2 = HEAP32[i3 + 44 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2, i4);
 HEAP32[i1 >> 2] = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 4;
}
function __ZN7WebCore22DeviceMotionControllerC2EPNS_18DeviceMotionClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16DeviceControllerC2EPNS_12DeviceClientE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2, i1);
 return;
}
function __ZN7WebCore22DeviceMotionControllerC1EPNS_18DeviceMotionClientE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16DeviceControllerC2EPNS_12DeviceClientE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 7](i2, i1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore22DeviceMotionController11hasLastDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 7](i2) | 0) != 0 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore22DeviceMotionControllerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16DeviceControllerD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
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
function __ZN7WebCore16DeviceControllerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16DeviceControllerD2Ev(i1);
 __ZdlPv(i1);
 return;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZN7WebCore16DeviceController12getLastEventEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore22DeviceMotionControllerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16DeviceControllerD2Ev(i1 | 0);
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function __ZN7WebCore22DeviceMotionController18deviceMotionClientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function __ZN7WebCore16DeviceControllerD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore16DeviceControllerD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 7](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZN7WebCore22DeviceMotionController14supplementNameEv() {
 return H_BASE + 8 | 0;
}
function __ZN7WebCore16DeviceController11hasLastDataEv(i1) {
 i1 = i1 | 0;
 return 0;
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
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore16DeviceControllerD1Ev,b0,__ZN7WebCore16DeviceControllerD0Ev,b0,__ZN7WebCore22DeviceMotionControllerD0Ev,b0,__ZN7WebCore22DeviceMotionControllerD1Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZN7WebCore22DeviceMotionController12getLastEventEv,b1,__ZN7WebCore16DeviceController12getLastEventEv,b1,__ZN7WebCore22DeviceMotionControllerC2EPNS_18DeviceMotionClientE,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZN7WebCore22DeviceMotionController11hasLastDataEv,b2,__ZN7WebCore16DeviceController11hasLastDataEv,b2,b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore21provideDeviceMotionToEPNS_4PageEPNS_18DeviceMotionClientE","_strlen","__ZN7WebCore22DeviceMotionController18deviceMotionClientEv","__ZN7WebCore22DeviceMotionController12getLastEventEv","__ZN7WebCore16DeviceController12getLastEventEv","__ZN7WebCore16DeviceControllerD2Ev","__ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E6rehashEiPSA_","__ZN7WebCore16DeviceControllerD1Ev","_memset","_memcpy","__ZN7WebCore16DeviceControllerD0Ev","__ZN7WebCore22DeviceMotionControllerD1Ev","__ZN7WebCore16DeviceController11hasLastDataEv","__ZN7WebCore22DeviceMotionController6createEPNS_18DeviceMotionClientE","__ZN7WebCore22DeviceMotionController11hasLastDataEv","__ZN7WebCore22DeviceMotionController10isActiveAtEPNS_4PageE","__ZN3WTF9HashTableIPKcNS_12KeyValuePairIS2_NS_6OwnPtrIN7WebCore10SupplementINS5_4PageEEEEEEENS_24KeyValuePairKeyExtractorISA_EENS_7PtrHashIS2_EENS_7HashMapIS2_S9_SE_NS_10HashTraitsIS2_EENSG_IS9_EEE18KeyValuePairTraitsESH_E3addINS_17HashMapTranslatorISK_SE_EERKS2_RNS_10PassOwnPtrIS8_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS2_SA_SC_SE_SK_SH_EEEEOT0_OT1_","__ZN7WebCore22DeviceMotionController21didChangeDeviceMotionEPNS_16DeviceMotionDataE","__ZN7WebCore22DeviceMotionController14supplementNameEv","__ZN7WebCore22DeviceMotionControllerD0Ev","__ZN7WebCore22DeviceMotionControllerC2EPNS_18DeviceMotionClientE","__ZN7WebCore22DeviceMotionController4fromEPNS_4PageE"]

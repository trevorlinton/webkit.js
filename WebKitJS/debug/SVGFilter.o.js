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
H_BASE = parentModule["_malloc"](96 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 96;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9SVGFilterC1ERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
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
function invoke_fif(index,a1,a2) {
  try {
    return Module["dynCall_fif"](index,a1,a2);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZTVN7WebCore6FilterE=(H_BASE+56)|0;
  var __ZTVN7WebCore9SVGFilterE=(H_BASE+8)|0;
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
  var invoke_fif=env.invoke_fif;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore9SVGFilter6createERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = __ZN3WTF10fastMallocEj(144) | 0;
 i10 = i8;
 HEAP32[i9 + 4 >> 2] = 1;
 _memset(i9 + 8 | 0, 0, 16) | 0;
 HEAP32[i9 >> 2] = H_BASE + 16;
 i11 = i9 + 24 | 0;
 i12 = i2;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i11 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
 HEAP32[i11 + 20 >> 2] = HEAP32[i12 + 20 >> 2];
 HEAP32[i11 + 24 >> 2] = HEAP32[i12 + 24 >> 2];
 HEAP32[i11 + 28 >> 2] = HEAP32[i12 + 28 >> 2];
 HEAP32[i11 + 32 >> 2] = HEAP32[i12 + 32 >> 2];
 HEAP32[i11 + 36 >> 2] = HEAP32[i12 + 36 >> 2];
 HEAP32[i11 + 40 >> 2] = HEAP32[i12 + 40 >> 2];
 HEAP32[i11 + 44 >> 2] = HEAP32[i12 + 44 >> 2];
 i12 = i9 + 72 | 0;
 i11 = i3;
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 i11 = i9 + 88 | 0;
 i12 = i4;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 i12 = i9 + 104 | 0;
 _memset(i12 | 0, 0, 16) | 0;
 i11 = i9 + 120 | 0;
 i4 = i5;
 HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP8[i9 + 136 | 0] = i6 & 1;
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i8, i2, i5);
 HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i1 >> 2] = i9;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9SVGFilterC2ERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i9 = i1 + 24 | 0;
 i10 = i2;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i9 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
 HEAP32[i9 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
 HEAP32[i9 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
 HEAP32[i9 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
 HEAP32[i9 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
 HEAP32[i9 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
 HEAP32[i9 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
 HEAP32[i9 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
 i10 = i1 + 72 | 0;
 i9 = i3;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i1 + 88 | 0;
 i10 = i4;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i10 = i1 + 104 | 0;
 _memset(i10 | 0, 0, 16) | 0;
 i9 = i1 + 120 | 0;
 i4 = i5;
 HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP8[i1 + 136 | 0] = i6 & 1;
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i8, i2, i5);
 i5 = i8;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 STACKTOP = i7;
 return;
}
function __ZN7WebCore9SVGFilterC1ERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 _memset(i1 + 8 | 0, 0, 16) | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i9 = i1 + 24 | 0;
 i10 = i2;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 HEAP32[i9 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
 HEAP32[i9 + 20 >> 2] = HEAP32[i10 + 20 >> 2];
 HEAP32[i9 + 24 >> 2] = HEAP32[i10 + 24 >> 2];
 HEAP32[i9 + 28 >> 2] = HEAP32[i10 + 28 >> 2];
 HEAP32[i9 + 32 >> 2] = HEAP32[i10 + 32 >> 2];
 HEAP32[i9 + 36 >> 2] = HEAP32[i10 + 36 >> 2];
 HEAP32[i9 + 40 >> 2] = HEAP32[i10 + 40 >> 2];
 HEAP32[i9 + 44 >> 2] = HEAP32[i10 + 44 >> 2];
 i10 = i1 + 72 | 0;
 i9 = i3;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i1 + 88 | 0;
 i10 = i4;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i10 = i1 + 104 | 0;
 _memset(i10 | 0, 0, 16) | 0;
 i9 = i1 + 120 | 0;
 i4 = i5;
 HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP8[i1 + 136 | 0] = i6 & 1;
 __ZNK7WebCore15AffineTransform7mapRectERKNS_9FloatRectE(i8, i2, i5);
 i5 = i8;
 HEAP32[i10 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 STACKTOP = i7;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_fif + 6;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_fif + 4;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_fif + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_fif + 8;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viii + 4;
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
function __ZNK7WebCore9SVGFilter28mapAbsolutePointToLocalPointERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore15AffineTransform7inverseEv(i5, i2 + 24 | 0);
 __ZNK7WebCore15AffineTransform8mapPointERKNS_10FloatPointE(i1, i5, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9SVGFilterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore6FilterD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i3);
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZNK7WebCore9SVGFilter15sourceImageRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 72 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZNK7WebCore9SVGFilter12filterRegionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 104 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZNK7WebCore9SVGFilter20applyHorizontalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0;
 if ((HEAP8[i1 + 136 | 0] & 1) == 0) {
  d3 = d2;
 } else {
  d3 = +HEAPF32[i1 + 96 >> 2] * d2;
 }
 return +(d3 * +HEAPF32[i1 + 12 >> 2] * +HEAPF32[i1 + 112 >> 2] / +HEAPF32[i1 + 128 >> 2]);
}
function __ZNK7WebCore9SVGFilter18applyVerticalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var d3 = +0;
 if ((HEAP8[i1 + 136 | 0] & 1) == 0) {
  d3 = d2;
 } else {
  d3 = +HEAPF32[i1 + 100 >> 2] * d2;
 }
 return +(d3 * +HEAPF32[i1 + 16 >> 2] * +HEAPF32[i1 + 116 >> 2] / +HEAPF32[i1 + 132 >> 2]);
}
function __ZN7WebCore9SVGFilterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore6FilterD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 64;
 i2 = i1 + 8 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore11ImageBufferD1Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAPF32[i1 >> 2] = +0;
 HEAPF32[i1 + 4 >> 2] = +0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
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
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function __ZNK7WebCore6Filter20applyHorizontalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+HEAPF32[i1 + 12 >> 2] * d2);
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
function __ZNK7WebCore6Filter18applyVerticalScaleEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +(+HEAPF32[i1 + 16 >> 2] * d2);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_fif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_fif[i1 & 15](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
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
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function __ZNK7WebCore9SVGFilter11isSVGFilterEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore6Filter11isSVGFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
 return +0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore9SVGFilterD0Ev,b0,__ZN7WebCore6FilterD0Ev,b0,__ZN7WebCore9SVGFilterD1Ev,b0,__ZN7WebCore6FilterD1Ev,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vii = [b1,b1,__ZNK7WebCore9SVGFilter12filterRegionEv,b1,__ZNK7WebCore9SVGFilter15sourceImageRectEv,b1,b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2,__ZNK7WebCore6Filter11isSVGFilterEv,b2,__ZNK7WebCore9SVGFilter11isSVGFilterEv,b2,b2,b2];
  var FUNCTION_TABLE_fif = [b3,b3,__ZNK7WebCore6Filter20applyHorizontalScaleEf,b3,__ZNK7WebCore9SVGFilter18applyVerticalScaleEf,b3,__ZNK7WebCore9SVGFilter20applyHorizontalScaleEf,b3,__ZNK7WebCore6Filter18applyVerticalScaleEf,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZNK7WebCore9SVGFilter28mapAbsolutePointToLocalPointERKNS_10FloatPointE,b4,__ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6,__ZN7WebCore9SVGFilterC2ERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b,b6];
  var FUNCTION_TABLE_iii = [b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_fif: dynCall_fif, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_fif": invoke_fif, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_fif = Module["dynCall_fif"] = asm["dynCall_fif"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore6Filter11isSVGFilterEv","__ZNK7WebCore6Filter18applyVerticalScaleEf","__ZNK7WebCore9SVGFilter12filterRegionEv","__ZN7WebCore9SVGFilterC2ERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b","__ZN7WebCore9SVGFilter6createERKNS_15AffineTransformERKNS_9FloatRectES6_S6_b","__ZNK7WebCore9SVGFilter28mapAbsolutePointToLocalPointERKNS_10FloatPointE","__ZN7WebCore9SVGFilterD0Ev","_memset","__ZN7WebCore6FilterD0Ev","__ZNK7WebCore6Filter20applyHorizontalScaleEf","__ZNK7WebCore9SVGFilter18applyVerticalScaleEf","__ZNK7WebCore9SVGFilter15sourceImageRectEv","__ZN7WebCore6FilterD1Ev","__ZN7WebCore9SVGFilterD1Ev","__ZNK7WebCore9SVGFilter20applyHorizontalScaleEf","_memcpy","__ZNK7WebCore6Filter28mapAbsolutePointToLocalPointERKNS_10FloatPointE","__ZNK7WebCore9SVGFilter11isSVGFilterEv"]

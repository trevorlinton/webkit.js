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
H_BASE = parentModule["_malloc"](1528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([67,79,77,77,69,78,84,0,65,112,112,108,101,45,115,116,121,108,101,45,115,112,97,110,0,0,0,0,0,0,0,0,100,111,117,98,108,101,0,0,115,111,108,105,100,0,0,0,100,97,115,104,101,100,0,0,100,111,116,116,101,100,0,0,111,117,116,115,101,116,0,0,114,105,100,103,101,0,0,0,103,114,111,111,118,101,0,0,32,91,116,101,120,116,83,116,114,111,107,101,67,111,108,111,114,61,0,0,0,0,0,0,105,110,115,101,116,0,0,0,104,105,100,100,101,110,0,0,110,111,110,101,0,0,0,0,32,43,32,104,121,112,104,101,110,32,115,116,114,105,110,103,32,0,0,0,0,0,0,0,32,111,118,101,114,114,105,100,101,0,0,0,0,0,0,0,32,76,84,82,0,0,0,0,32,82,84,76,0,0,0,0,41,32,119,105,100,116,104,32,0,0,0,0,0,0,0,0,116,101,120,116,32,114,117,110,32,97,116,32,40,0,0,0,44,32,112,97,105,110,116,115,32,105,110,116,111,32,97,110,99,101,115,116,111,114,61,0,32,91,116,101,120,116,70,105,108,108,67,111,108,111,114,61,0,0,0,0,0,0,0,0,44,32,100,114,97,119,115,67,111,110,116,101,110,116,61,0,32,40,99,111,109,112,111,115,105,116,101,100,44,32,98,111,117,110,100,115,61,0,0,0,32,108,97,121,101,114,84,121,112,101,58,32,102,111,114,101,103,114,111,117,110,100,32,111,110,108,121,0,0,0,0,0,32,108,97,121,101,114,84,121,112,101,58,32,98,97,99,107,103,114,111,117,110,100,32,111,110,108,121,0,0,0,0,0,32,115,99,114,111,108,108,72,101,105,103,104,116,32,0,0,32,115,99,114,111,108,108,87,105,100,116,104,32,0,0,0,32,115,99,114,111,108,108,89,32,0,0,0,0,0,0,0,32,115,99,114,111,108,108,88,32,0,0,0,0,0,0,0,32,111,117,116,108,105,110,101,67,108,105,112,32,0,0,0,32,99,108,105,112,32,0,0,32,91,98,103,99,111,108,111,114,61,0,0,0,0,0,0,32,98,97,99,107,103,114,111,117,110,100,67,108,105,112,32,0,0,0,0,0,0,0,0,108,97,121,101,114,32,0,0,32,35,0,0,0,0,0,0,58,58,97,102,116,101,114,0,58,58,98,101,102,111,114,101,0,0,0,0,0,0,0,0,32,40,97,110,111,110,121,109,111,117,115,32,99,104,105,108,100,32,111,102,0,0,0,0,32,104,97,115,65,117,116,111,76,111,103,105,99,97,108,72,101,105,103,104,116,0,0,0,32,114,101,103,105,111,110,32,115,116,121,108,101,58,32,49,0,0,0,0,0,0,0,0,73,110,118,97,108,105,100,32,114,101,103,105,111,110,115,32,102,111,114,32,110,97,109,101,100,32,102,108,111,119,32,39,0,0,0,0,0,0,0,0,82,101,103,105,111,110,115,32,102,111,114,32,110,97,109,101,100,32,102,108,111,119,32,39,0,0,0,0,0,0,0,0,93,0,0,0,0,0,0,0,39,10,0,0,0,0,0,0,78,97,109,101,100,32,102,108,111,119,32,39,0,0,0,0,78,97,109,101,100,32,102,108,111,119,115,10,0,0,0,0,32,112,111,115,105,116,105,118,101,32,122,45,111,114,100,101,114,32,108,105,115,116,40,0,32,110,111,114,109,97,108,32,102,108,111,119,32,108,105,115,116,40,0,0,0,0,0,0,41,10,0,0,0,0,0,0,32,110,101,103,97,116,105,118,101,32,122,45,111,114,100,101,114,32,108,105,115,116,40,0,100,111,99,117,109,101,110,116,0,0,0,0,0,0,0,0,99,104,105,108,100,32,0,0,98,111,100,121,0,0,0,0,32,91,99,111,108,111,114,61,0,0,0,0,0,0,0,0,115,101,108,101,99,116,105,111,110,32,101,110,100,58,32,32,32,112,111,115,105,116,105,111,110,32,0,0,0,0,0,0,115,101,108,101,99,116,105,111,110,32,115,116,97,114,116,58,32,112,111,115,105,116,105,111,110,32,0,0,0,0,0,0,32,40,117,112,115,116,114,101,97,109,32,97,102,102,105,110,105,116,121,41,0,0,0,0,32,111,102,32,0,0,0,0,99,97,114,101,116,58,32,112,111,115,105,116,105,111,110,32,0,0,0,0,0,0,0,0,10,0,0,0,0,0,0,0,32,40,118,105,115,117,97,108,32,111,118,101,114,102,108,111,119,32,0,0,0,0,0,0,120,0,0,0,0,0,0,0,32,40,108,97,121,111,117,116,32,111,118,101,114,102,108,111,119,32,0,0,0,0,0,0,32,112,111,115,105,116,105,111,110,101,100,32,99,104,105,108,100,0,0,0,0,0,0,0,32,42,101,109,112,116,121,32,111,114,32,117,110,115,116,121,108,101,100,32,65,112,112,108,101,83,116,121,108,101,83,112,97,110,42,0,0,0,0,0,32,99,104,105,108,100,0,0,32,112,111,115,105,116,105,111,110,101,100,32,109,111,118,101,109,101,110,116,0,0,0,0,44,0,0,0,0,0,0,0,32,115,101,108,102,0,0,0,32,40,110,101,101,100,115,32,108,97,121,111,117,116,58,0,32,99,108,97,115,115,61,34,0,0,0,0,0,0,0,0,34,0,0,0,0,0,0,0,32,105,100,61,34,0,0,0,119,104,105,116,101,32,98,117,108,108,101,116,0,0,0,0,98,108,97,99,107,32,115,113,117,97,114,101,0,0,0,0,125,0,0,0,0,0,0,0,98,117,108,108,101,116,0,0,100,111,119,110,0,0,0,0,117,112,0,0,0,0,0,0,114,105,103,104,116,0,0,0,108,101,102,116,0,0,0,0,58,32,0,0,0,0,0,0,32,99,115,61,0,0,0,0,32,114,115,61,0,0,0,0,32,99,61,0,0,0,0,0,32,91,114,61,0,0,0,0,32,123,0,0,0,0,0,0,112,97,100,100,105,110,103,58,32,0,0,0,0,0,0,0,43,32,67,83,83,32,0,0,105,110,116,114,105,110,115,105,99,32,0,0,0,0,0,0,32,91,0,0,0,0,0,0,41,0,0,0,0,0,0,0,112,120,32,0,0,0,0,0,32,40,0,0,0,0,0,0,32,110,111,110,101,0,0,0,32,91,98,111,114,100,101,114,58,0,0,0,0,0,0,0,32,91,116,101,120,116,83,116,114,111,107,101,87,105,100,116,104,61,0,0,0,0,0,0,32,122,73,58,32,0,0,0,32,0,0,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,65,66,67,68,69,70,0,0,0,0,0,0,0,0,48,49,50,51,52,53,54,55,56,57,97,98,99,100,101,102,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore9HTMLNames7spanTagE=env.__ZN7WebCore9HTMLNames7spanTagE|0;
  var __ZN7WebCore9HTMLNames9classAttrE=env.__ZN7WebCore9HTMLNames9classAttrE|0;
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
  var invoke_ii=env.invoke_ii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore16RenderTreeAsText17writeRenderObjectERNS_10TextStreamERKNS_12RenderObjectEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, d91 = +0, d92 = +0, d93 = +0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 592 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 80 | 0;
 i14 = i4 + 88 | 0;
 i15 = i4 + 104 | 0;
 i16 = i4 + 120 | 0;
 i17 = i4 + 136 | 0;
 i18 = i4 + 152 | 0;
 i19 = i4 + 168 | 0;
 i20 = i4 + 184 | 0;
 i21 = i4 + 192 | 0;
 i22 = i4 + 200 | 0;
 i23 = i4 + 208 | 0;
 i24 = i4 + 216 | 0;
 i25 = i4 + 224 | 0;
 i26 = i4 + 232 | 0;
 i27 = i4 + 240 | 0;
 i28 = i4 + 248 | 0;
 i29 = i4 + 256 | 0;
 i30 = i4 + 264 | 0;
 i31 = i4 + 272 | 0;
 i32 = i4 + 280 | 0;
 i33 = i4 + 288 | 0;
 i34 = i4 + 296 | 0;
 i35 = i4 + 304 | 0;
 i36 = i4 + 312 | 0;
 i37 = i4 + 320 | 0;
 i38 = i4 + 328 | 0;
 i39 = i4 + 336 | 0;
 i40 = i4 + 344 | 0;
 i41 = i4 + 352 | 0;
 i42 = i4 + 360 | 0;
 i43 = i4 + 368 | 0;
 i44 = i4 + 376 | 0;
 i45 = i4 + 384 | 0;
 i46 = i4 + 392 | 0;
 i47 = i4 + 400 | 0;
 i48 = i4 + 408 | 0;
 i49 = i4 + 416 | 0;
 i50 = i4 + 424 | 0;
 i51 = i4 + 432 | 0;
 i52 = i4 + 440 | 0;
 i53 = i4 + 448 | 0;
 i54 = i4 + 456 | 0;
 i55 = i4 + 464 | 0;
 i56 = i4 + 472 | 0;
 i57 = i4 + 480 | 0;
 i58 = i4 + 488 | 0;
 i59 = i4 + 496 | 0;
 i60 = i4 + 504 | 0;
 i61 = i4 + 512 | 0;
 i62 = i4 + 520 | 0;
 i63 = i4 + 528 | 0;
 i64 = i4 + 536 | 0;
 i65 = i4 + 544 | 0;
 i66 = i4 + 552 | 0;
 i67 = i4 + 560 | 0;
 i68 = i4 + 568 | 0;
 i69 = i4 + 576 | 0;
 __ZN7WebCore10TextStreamlsEPKc(i1, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 1](i2) | 0) | 0;
 if ((i3 & 8 | 0) != 0) {
  __ZN7WebCore10TextStreamlsEPKv(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0, i2) | 0;
 }
 i70 = i2 + 20 | 0;
 i71 = HEAP32[i70 >> 2] | 0;
 if ((i71 & 768 | 0) == 256) {
  i72 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i72 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[i72 + 4 >> 2] | 0) + 60 >> 2] | 0) == 0) {
  i73 = i71;
 } else {
  i71 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1464 | 0) | 0;
  if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
   i74 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i74 = HEAP32[i2 + 36 >> 2] | 0;
  }
  __ZN7WebCore10TextStreamlsEi(i71, HEAP32[(HEAP32[i74 + 4 >> 2] | 0) + 60 >> 2] | 0) | 0;
  i73 = HEAP32[i70 >> 2] | 0;
 }
 do {
  if ((i73 & 128 | 0) == 0) {
   i74 = i2 + 4 | 0;
   i71 = HEAP32[i74 >> 2] | 0;
   if ((i71 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[(HEAP32[i71 + 20 >> 2] | 0) + 8 >> 2] | 0) == (i71 | 0)) {
     __ZN3WTF6StringC1EPKc(i13, H_BASE + 1528 | 0);
    } else {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i71 >> 2] | 0) + 76 >> 2] & 1](i71) | 0) == 8) {
      __ZN3WTF6StringC1EPKc(i13, H_BASE + 8 | 0);
      break;
     } else {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i71 >> 2] | 0) + 64 >> 2] & 1](i13, i71);
      break;
     }
    }
   } while (0);
   do {
    if ((HEAP32[i70 >> 2] & 128 | 0) == 0) {
     i71 = HEAP32[i74 >> 2] | 0;
     if ((i71 | 0) == 0) {
      i75 = 22;
      break;
     }
     if ((HEAP32[i71 + 12 >> 2] & 1048580 | 0) != 1048580) {
      i75 = 22;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i71 >> 2] | 0) + 232 >> 2] & 1](i71) | 0) == 0) {
      i75 = 22;
     } else {
      i75 = 27;
     }
    } else {
     i75 = 22;
    }
   } while (0);
   do {
    if ((i75 | 0) == 22) {
     i71 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i71 | 0) == 0) {
      break;
     }
     if ((HEAP32[i71 + 20 >> 2] & 128 | 0) != 0) {
      break;
     }
     i72 = HEAP32[i71 + 4 >> 2] | 0;
     if ((i72 | 0) == 0) {
      break;
     }
     if ((HEAP32[i72 + 12 >> 2] & 1048580 | 0) != 1048580) {
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i72 >> 2] | 0) + 232 >> 2] & 1](i72) | 0) != 0) {
      i75 = 27;
     }
    }
   } while (0);
   do {
    if ((i75 | 0) == 27) {
     i72 = HEAP32[__ZN3WTF9emptyAtomE >> 2] | 0;
     if ((i72 | 0) != 0) {
      i71 = i72 | 0;
      HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 2;
     }
     i71 = i13 | 0;
     i76 = HEAP32[i71 >> 2] | 0;
     HEAP32[i71 >> 2] = i72;
     if ((i76 | 0) == 0) {
      break;
     }
     i72 = i76 | 0;
     i71 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
     if ((i71 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i76);
      break;
     } else {
      HEAP32[i72 >> 2] = i71;
      break;
     }
    }
   } while (0);
   i71 = i13 | 0;
   i72 = HEAP32[i71 >> 2] | 0;
   if ((i72 | 0) == 0) {
    break;
   }
   L46 : do {
    if ((HEAP32[i72 + 4 >> 2] | 0) != 0) {
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1336 | 0) | 0, i13) | 0, H_BASE + 1248 | 0) | 0;
     if ((HEAP32[i70 >> 2] & 128 | 0) != 0) {
      break;
     }
     i76 = HEAP32[i74 >> 2] | 0;
     if ((i76 | 0) == 0) {
      break;
     }
     i77 = i76 + 12 | 0;
     if ((HEAP32[i77 >> 2] & 20 | 0) != 20) {
      break;
     }
     i78 = HEAP32[i76 + 44 >> 2] | 0;
     i79 = HEAP32[__ZN7WebCore9HTMLNames7spanTagE >> 2] | 0;
     if ((i78 | 0) != (i79 | 0)) {
      if ((HEAP32[i78 + 12 >> 2] | 0) != (HEAP32[i79 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i78 + 16 >> 2] | 0) != (HEAP32[i79 + 16 >> 2] | 0)) {
       break;
      }
     }
     if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i76, __ZN7WebCore9HTMLNames9classAttrE) | 0) >> 2] | 0, H_BASE + 16 | 0) | 0)) {
      break;
     }
     do {
      if ((HEAP32[i77 >> 2] & 2 | 0) != 0) {
       if ((HEAP32[i76 + 36 >> 2] | 0) == 0) {
        break;
       }
       i79 = HEAP32[i76 + 48 >> 2] | 0;
       if ((i79 | 0) == 0) {
        break;
       }
       i78 = HEAP32[i79 + 8 >> 2] | 0;
       if ((i78 | 0) == 0) {
        break;
       }
       i79 = HEAP32[i78 + 4 >> 2] | 0;
       if ((i79 & 4 | 0) == 0) {
        i80 = i79 >>> 3;
       } else {
        i80 = HEAP32[i78 + 16 >> 2] | 0;
       }
       if ((i80 | 0) != 0) {
        break L46;
       }
      }
     } while (0);
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1080 | 0) | 0;
    }
   } while (0);
   i74 = HEAP32[i71 >> 2] | 0;
   if ((i74 | 0) == 0) {
    break;
   }
   i72 = i74 | 0;
   i76 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i76 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i72 >> 2] = i76;
    break;
   }
  }
 } while (0);
 i80 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
 if ((i80 | 0) == 0) {
  i81 = 0;
 } else {
  i81 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i80 >> 2] | 0) + 188 >> 2] & 1](i80 | 0) | 0;
 }
 _memset(i14 | 0, 0, 16) | 0;
 i80 = HEAP32[i70 >> 2] | 0;
 L75 : do {
  if ((i80 & 768 | 0) == 256) {
   i13 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 640 >> 2] & 1](i15, i13);
   if ((__ZNK7WebCore10RenderText16simpleLineLayoutEv(i13) | 0) == 0) {
    i73 = ~~+__ZNK7WebCore10RenderText9firstRunXEv(i13);
    i76 = ~~+__ZNK7WebCore10RenderText9firstRunYEv(i13);
    i13 = HEAP32[i15 + 8 >> 2] | 0;
    i72 = HEAP32[i15 + 12 >> 2] | 0;
    HEAP32[i14 >> 2] = i73;
    HEAP32[i14 + 4 >> 2] = i76;
    HEAP32[i14 + 8 >> 2] = i13;
    HEAP32[i14 + 12 >> 2] = i72;
   } else {
    i72 = HEAP32[i15 + 4 >> 2] | 0;
    i13 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 188 >> 2] & 1](i13 | 0) | 0) {
     i82 = i72 - (HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0) + 120 >> 2] | 0) | 0;
    } else {
     i82 = i72;
    }
    i72 = HEAP32[i15 + 8 >> 2] | 0;
    i13 = HEAP32[i15 + 12 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
    HEAP32[i14 + 4 >> 2] = i82;
    HEAP32[i14 + 8 >> 2] = i72;
    HEAP32[i14 + 12 >> 2] = i13;
   }
   if (!i81) {
    break;
   }
   if ((HEAP32[i2 + 48 >> 2] | 0) != 0) {
    i75 = 77;
   }
  } else {
   do {
    if ((i80 & 4096 | 0) == 0) {
     i83 = i80;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 620 >> 2] & 1](i2) | 0) {
      i83 = HEAP32[i70 >> 2] | 0;
      break;
     } else {
      __ZNK7WebCore15RenderLineBreak16linesBoundingBoxEv(i16, i2);
      i13 = HEAP32[i16 + 4 >> 2] | 0;
      i72 = HEAP32[i16 + 8 >> 2] | 0;
      i76 = HEAP32[i16 + 12 >> 2] | 0;
      HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i14 + 4 >> 2] = i13;
      HEAP32[i14 + 8 >> 2] = i72;
      HEAP32[i14 + 12 >> 2] = i76;
      if (i81 & (HEAP32[i2 + 44 >> 2] | 0) != 0) {
       i75 = 77;
       break L75;
      } else {
       break L75;
      }
     }
    }
   } while (0);
   do {
    if ((i83 & 768 | 0) != 256) {
     if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
      break;
     }
     i71 = i2;
     __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i17, i71);
     i76 = HEAP32[i17 + 8 >> 2] | 0;
     __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i18, i71);
     i71 = HEAP32[i18 + 12 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i14 + 4 >> 2] = 0;
     HEAP32[i14 + 8 >> 2] = i76;
     HEAP32[i14 + 12 >> 2] = i71;
     break L75;
    }
   } while (0);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 188 >> 2] & 1](i2) | 0) {
    i71 = HEAP32[i2 + 120 >> 2] | 0;
    i76 = i71 + (HEAP32[i2 + 48 >> 2] | 0) | 0;
    i72 = HEAP32[i2 + 52 >> 2] | 0;
    i13 = (HEAP32[i2 + 56 >> 2] | 0) - i71 - (HEAP32[i2 + 124 >> 2] | 0) | 0;
    HEAP32[i14 >> 2] = HEAP32[i2 + 44 >> 2];
    HEAP32[i14 + 4 >> 2] = i76;
    HEAP32[i14 + 8 >> 2] = i72;
    HEAP32[i14 + 12 >> 2] = i13;
    if (i81) {
     i75 = 77;
     break;
    } else {
     break;
    }
   }
   if ((HEAP32[i70 >> 2] & 512 | 0) == 0) {
    if (i81) {
     i75 = 77;
     break;
    } else {
     break;
    }
   } else {
    i13 = i2 + 44 | 0;
    i72 = i14;
    HEAP32[i72 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i72 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
    HEAP32[i72 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
    HEAP32[i72 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
    if (i81) {
     i75 = 77;
     break;
    } else {
     break;
    }
   }
  }
 } while (0);
 if ((i75 | 0) == 77) {
  i81 = HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0) + 120 >> 2] | 0;
  i18 = i14 + 4 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - i81;
 }
 i81 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0;
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i19, i14);
 __ZN7WebCore10TextStreamlsERKNS_7IntRectE(i81, i19) | 0;
 i19 = i2;
 L105 : do {
  if ((HEAP32[i70 >> 2] & 768 | 0) != 256) {
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 80 >> 2] & 1](i2) | 0) {
     i81 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0;
     __ZNK7WebCore23RenderFileUploadControl13fileTextValueEv(i21, i2);
     __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i20, i21);
     __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i81, i20) | 0;
     i81 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i81 | 0) != 0) {
       i14 = i81 | 0;
       i18 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i81);
        break;
       } else {
        HEAP32[i14 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i81 = HEAP32[i21 >> 2] | 0;
     if ((i81 | 0) == 0) {
      break;
     }
     i18 = i81 | 0;
     i14 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i81);
      break;
     } else {
      HEAP32[i18 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i14 = i2 + 8 | 0;
   i18 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
      i84 = HEAP32[i18 + 36 >> 2] | 0;
     } else {
      i84 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i22, i84, 1);
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i23, HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0, 1);
     i81 = i22 | 0;
     if ((HEAP32[i23 >> 2] | 0) == (HEAP32[i81 >> 2] | 0)) {
      if ((HEAP8[i23 + 4 | 0] & 1) != 0 ^ (HEAP8[i22 + 4 | 0] & 1) != 0) {
       i75 = 94;
      }
     } else {
      i75 = 94;
     }
     do {
      if ((i75 | 0) == 94) {
       i17 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 856 | 0) | 0;
       __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i24, i22);
       __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i17, i24) | 0, H_BASE + 696 | 0) | 0;
       i17 = HEAP32[i24 >> 2] | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       i83 = i17 | 0;
       i16 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
       if ((i16 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i83 >> 2] = i16;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
      i85 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i85 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i25, i85, 23);
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i26, HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0, 23);
     i16 = HEAP32[i25 >> 2] | 0;
     if ((HEAP32[i26 >> 2] | 0) == (i16 | 0)) {
      i83 = HEAP8[i25 + 4 | 0] | 0;
      if ((HEAP8[i26 + 4 | 0] & 1) != 0 ^ (i83 & 1) != 0) {
       i86 = i83;
       i75 = 104;
      }
     } else {
      i86 = HEAP8[i25 + 4 | 0] | 0;
      i75 = 104;
     }
     do {
      if ((i75 | 0) == 104) {
       if ((i86 & 1) == 0 | (i16 | 0) == 0) {
        break;
       }
       i83 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 472 | 0) | 0;
       __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i27, i25);
       __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i83, i27) | 0, H_BASE + 696 | 0) | 0;
       i83 = HEAP32[i27 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break;
       }
       i17 = i83 | 0;
       i80 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i83);
        break;
       } else {
        HEAP32[i17 >> 2] = i80;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
      i87 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i87 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i28, i87, 340);
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i29, HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0, 340);
     i16 = HEAP32[i28 >> 2] | 0;
     if ((HEAP32[i29 >> 2] | 0) == (i16 | 0)) {
      i80 = HEAP8[i28 + 4 | 0] | 0;
      if ((HEAP8[i29 + 4 | 0] & 1) != 0 ^ (i80 & 1) != 0) {
       i88 = i80;
       i75 = 115;
      }
     } else {
      i88 = HEAP8[i28 + 4 | 0] | 0;
      i75 = 115;
     }
     do {
      if ((i75 | 0) == 115) {
       if ((i88 & 1) == 0) {
        break;
       }
       if ((i16 | 0) == (HEAP32[i81 >> 2] | 0)) {
        if ((HEAP8[i22 + 4 | 0] & 1) != 0 | (i16 | 0) == 0) {
         break;
        }
       } else {
        if ((i16 | 0) == 0) {
         break;
        }
       }
       i80 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 256 | 0) | 0;
       __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i30, i28);
       __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i80, i30) | 0, H_BASE + 696 | 0) | 0;
       i80 = HEAP32[i30 >> 2] | 0;
       if ((i80 | 0) == 0) {
        break;
       }
       i17 = i80 | 0;
       i83 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i83 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i80);
        break;
       } else {
        HEAP32[i17 >> 2] = i83;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
      i89 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i89 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i31, i89, 343);
     __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i32, HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0, 343);
     i16 = HEAP32[i31 >> 2] | 0;
     if ((HEAP32[i32 >> 2] | 0) == (i16 | 0)) {
      i83 = HEAP8[i31 + 4 | 0] | 0;
      if ((HEAP8[i32 + 4 | 0] & 1) != 0 ^ (i83 & 1) != 0) {
       i90 = i83;
       i75 = 129;
      }
     } else {
      i90 = HEAP8[i31 + 4 | 0] | 0;
      i75 = 129;
     }
     do {
      if ((i75 | 0) == 129) {
       if ((i90 & 1) == 0) {
        break;
       }
       if ((i16 | 0) == (HEAP32[i81 >> 2] | 0)) {
        if ((HEAP8[i22 + 4 | 0] & 1) != 0 | (i16 | 0) == 0) {
         break;
        }
       } else {
        if ((i16 | 0) == 0) {
         break;
        }
       }
       i83 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 96 | 0) | 0;
       __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i33, i31);
       __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i83, i33) | 0, H_BASE + 696 | 0) | 0;
       i83 = HEAP32[i33 >> 2] | 0;
       if ((i83 | 0) == 0) {
        break;
       }
       i17 = i83 | 0;
       i80 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i80 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i83);
        break;
       } else {
        HEAP32[i17 >> 2] = i80;
        break;
       }
      }
     } while (0);
     d91 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2];
     i16 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
     if (i16) {
      d92 = d91;
     } else {
      d92 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2];
     }
     if (d91 == d92) {
      break;
     }
     if (i16) {
      d93 = d91;
     } else {
      d93 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 16 >> 2];
     }
     if (d93 <= +0) {
      break;
     }
     i16 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1440 | 0) | 0;
     if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
      i94 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i94 = HEAP32[i2 + 36 >> 2] | 0;
     }
     __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEf(i16, +HEAPF32[(HEAP32[i94 + 24 >> 2] | 0) + 16 >> 2]) | 0, H_BASE + 696 | 0) | 0;
    }
   } while (0);
   i18 = HEAP32[i70 >> 2] | 0;
   if ((i18 & 768 | 0) == 256) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i2 + 24 >> 2] & 2 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((i18 & 4096 | 0) != 0) {
    STACKTOP = i4;
    return;
   }
   i18 = i2;
   i16 = i2;
   do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 1](i18) | 0) == 0) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 748 >> 2] & 1](i18) | 0) != 0) {
      i75 = 154;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 740 >> 2] & 1](i18) | 0) != 0) {
      i75 = 154;
      break;
     }
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 1](i18) | 0) != 0) {
      i75 = 154;
     }
    } else {
     i75 = 154;
    }
   } while (0);
   if ((i75 | 0) == 154) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1424 | 0) | 0;
    if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
     i95 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i95 = HEAP32[i2 + 36 >> 2] | 0;
    }
    i81 = (HEAP32[i95 + 16 >> 2] | 0) + 116 | 0;
    i80 = HEAP32[i81 >> 2] | 0;
    i17 = HEAP32[i81 + 4 >> 2] | 0;
    do {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 1](i18) | 0) == 0) {
      __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1416 | 0) | 0;
     } else {
      i81 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1408 | 0) | 0;
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i81, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 1](i18) | 0) | 0, H_BASE + 1400 | 0) | 0;
      if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
       i96 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i96 = HEAP32[i2 + 36 >> 2] | 0;
      }
      __ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE(i1, (HEAP32[(HEAP32[i96 + 16 >> 2] | 0) + 120 >> 2] | 0) >>> 27 & 15);
      i81 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
      if (i81) {
       i97 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i97 = HEAP32[i2 + 36 >> 2] | 0;
      }
      i83 = HEAP32[i97 + 16 >> 2] | 0;
      i82 = HEAP32[i83 + 120 >> 2] | 0;
      HEAP32[i34 >> 2] = HEAP32[i83 + 116 >> 2];
      i83 = i82 & 1;
      HEAP8[i34 + 4 | 0] = i83;
      if (i83 << 24 >> 24 == 0) {
       if (i81) {
        i98 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i98 = HEAP32[i2 + 36 >> 2] | 0;
       }
       __ZNK7WebCore11RenderStyle5colorEv(i35, i98);
       i81 = i34;
       i83 = i35;
       HEAP32[i81 >> 2] = HEAP32[i83 >> 2];
       HEAP8[i81 + 4 | 0] = HEAP8[i83 + 4 | 0] | 0;
      }
      __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i36, i34);
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i36) | 0, H_BASE + 1392 | 0) | 0;
      i83 = HEAP32[i36 >> 2] | 0;
      if ((i83 | 0) == 0) {
       break;
      }
      i81 = i83 | 0;
      i82 = (HEAP32[i81 >> 2] | 0) - 2 | 0;
      if ((i82 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i83);
       break;
      } else {
       HEAP32[i81 >> 2] = i82;
       break;
      }
     }
    } while (0);
    i82 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
    if (i82) {
     i99 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i99 = HEAP32[i2 + 36 >> 2] | 0;
    }
    i81 = HEAP32[i99 + 16 >> 2] | 0;
    i83 = HEAP32[i81 + 112 >> 2] ^ i17;
    do {
     if ((i83 & 2147483646 | 0) == 0) {
      if ((HEAP32[i81 + 108 >> 2] | 0) != (i80 | 0)) {
       i75 = 180;
       break;
      }
      if ((i83 & 1 | 0) == 0) {
       i100 = i80;
       i101 = i17;
      } else {
       i75 = 180;
      }
     } else {
      i75 = 180;
     }
    } while (0);
    do {
     if ((i75 | 0) == 180) {
      if (i82) {
       i102 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i102 = HEAP32[i2 + 36 >> 2] | 0;
      }
      i17 = (HEAP32[i102 + 16 >> 2] | 0) + 108 | 0;
      i80 = HEAP32[i17 >> 2] | 0;
      i83 = HEAP32[i17 + 4 >> 2] | 0;
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 748 >> 2] & 1](i18) | 0) == 0) {
       __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1416 | 0) | 0;
       i100 = i80;
       i101 = i83;
       break;
      }
      i17 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1408 | 0) | 0;
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i17, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 748 >> 2] & 1](i18) | 0) | 0, H_BASE + 1400 | 0) | 0;
      if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
       i103 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i103 = HEAP32[i2 + 36 >> 2] | 0;
      }
      __ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE(i1, (HEAP32[(HEAP32[i103 + 16 >> 2] | 0) + 112 >> 2] | 0) >>> 27 & 15);
      i17 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
      if (i17) {
       i104 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i104 = HEAP32[i2 + 36 >> 2] | 0;
      }
      i81 = HEAP32[i104 + 16 >> 2] | 0;
      i15 = HEAP32[i81 + 112 >> 2] | 0;
      HEAP32[i37 >> 2] = HEAP32[i81 + 108 >> 2];
      i81 = i15 & 1;
      HEAP8[i37 + 4 | 0] = i81;
      if (i81 << 24 >> 24 == 0) {
       if (i17) {
        i105 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i105 = HEAP32[i2 + 36 >> 2] | 0;
       }
       __ZNK7WebCore11RenderStyle5colorEv(i38, i105);
       i17 = i37;
       i81 = i38;
       HEAP32[i17 >> 2] = HEAP32[i81 >> 2];
       HEAP8[i17 + 4 | 0] = HEAP8[i81 + 4 | 0] | 0;
      }
      __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i39, i37);
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i39) | 0, H_BASE + 1392 | 0) | 0;
      i81 = HEAP32[i39 >> 2] | 0;
      if ((i81 | 0) == 0) {
       i100 = i80;
       i101 = i83;
       break;
      }
      i17 = i81 | 0;
      i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i81);
       i100 = i80;
       i101 = i83;
       break;
      } else {
       HEAP32[i17 >> 2] = i15;
       i100 = i80;
       i101 = i83;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
     i106 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i106 = HEAP32[i2 + 36 >> 2] | 0;
    }
    i82 = HEAP32[i106 + 16 >> 2] | 0;
    i83 = HEAP32[i82 + 128 >> 2] ^ i101;
    do {
     if ((i83 & 2147483646 | 0) == 0) {
      if ((HEAP32[i82 + 124 >> 2] | 0) != (i100 | 0)) {
       i75 = 206;
       break;
      }
      if ((i83 & 1 | 0) == 0) {
       i107 = i100;
       i108 = i101;
      } else {
       i75 = 206;
      }
     } else {
      i75 = 206;
     }
    } while (0);
    do {
     if ((i75 | 0) == 206) {
      i83 = i2 + 36 | 0;
      i82 = (HEAP32[(HEAP32[i83 >> 2] | 0) + 16 >> 2] | 0) + 124 | 0;
      i80 = HEAP32[i82 >> 2] | 0;
      i15 = HEAP32[i82 + 4 >> 2] | 0;
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 740 >> 2] & 1](i18) | 0) == 0) {
       __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1416 | 0) | 0;
       i107 = i80;
       i108 = i15;
       break;
      }
      i82 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1408 | 0) | 0;
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i82, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 740 >> 2] & 1](i18) | 0) | 0, H_BASE + 1400 | 0) | 0;
      if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
       i109 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i109 = HEAP32[i83 >> 2] | 0;
      }
      __ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE(i1, (HEAP32[(HEAP32[i109 + 16 >> 2] | 0) + 128 >> 2] | 0) >>> 27 & 15);
      i82 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
      if (i82) {
       i110 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i110 = HEAP32[i83 >> 2] | 0;
      }
      i17 = HEAP32[i110 + 16 >> 2] | 0;
      i81 = HEAP32[i17 + 128 >> 2] | 0;
      HEAP32[i40 >> 2] = HEAP32[i17 + 124 >> 2];
      i17 = i81 & 1;
      HEAP8[i40 + 4 | 0] = i17;
      if (i17 << 24 >> 24 == 0) {
       if (i82) {
        i111 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i111 = HEAP32[i83 >> 2] | 0;
       }
       __ZNK7WebCore11RenderStyle5colorEv(i41, i111);
       i83 = i40;
       i82 = i41;
       HEAP32[i83 >> 2] = HEAP32[i82 >> 2];
       HEAP8[i83 + 4 | 0] = HEAP8[i82 + 4 | 0] | 0;
      }
      __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i42, i40);
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i42) | 0, H_BASE + 1392 | 0) | 0;
      i82 = HEAP32[i42 >> 2] | 0;
      if ((i82 | 0) == 0) {
       i107 = i80;
       i108 = i15;
       break;
      }
      i83 = i82 | 0;
      i17 = (HEAP32[i83 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i82);
       i107 = i80;
       i108 = i15;
       break;
      } else {
       HEAP32[i83 >> 2] = i17;
       i107 = i80;
       i108 = i15;
       break;
      }
     }
    } while (0);
    if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
     i112 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i112 = HEAP32[i2 + 36 >> 2] | 0;
    }
    i15 = HEAP32[i112 + 16 >> 2] | 0;
    i80 = HEAP32[i15 + 104 >> 2] ^ i108;
    do {
     if ((i80 & 2147483646 | 0) == 0) {
      if ((HEAP32[i15 + 100 >> 2] | 0) != (i107 | 0)) {
       i75 = 229;
       break;
      }
      if ((i80 & 1 | 0) != 0) {
       i75 = 229;
      }
     } else {
      i75 = 229;
     }
    } while (0);
    do {
     if ((i75 | 0) == 229) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 1](i18) | 0) == 0) {
       __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1416 | 0) | 0;
       break;
      }
      i80 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1408 | 0) | 0;
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i80, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 1](i18) | 0) | 0, H_BASE + 1400 | 0) | 0;
      if ((HEAP32[i70 >> 2] & 768 | 0) == 256) {
       i113 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i113 = HEAP32[i2 + 36 >> 2] | 0;
      }
      __ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE(i1, (HEAP32[(HEAP32[i113 + 16 >> 2] | 0) + 104 >> 2] | 0) >>> 27 & 15);
      i80 = (HEAP32[i70 >> 2] & 768 | 0) == 256;
      if (i80) {
       i114 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i114 = HEAP32[i2 + 36 >> 2] | 0;
      }
      i15 = HEAP32[i114 + 16 >> 2] | 0;
      i17 = HEAP32[i15 + 104 >> 2] | 0;
      HEAP32[i43 >> 2] = HEAP32[i15 + 100 >> 2];
      i15 = i17 & 1;
      HEAP8[i43 + 4 | 0] = i15;
      if (i15 << 24 >> 24 == 0) {
       if (i80) {
        i115 = HEAP32[(HEAP32[i14 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i115 = HEAP32[i2 + 36 >> 2] | 0;
       }
       __ZNK7WebCore11RenderStyle5colorEv(i44, i115);
       i80 = i43;
       i15 = i44;
       HEAP32[i80 >> 2] = HEAP32[i15 >> 2];
       HEAP8[i80 + 4 | 0] = HEAP8[i15 + 4 | 0] | 0;
      }
      __ZNK7WebCore5Color23nameForRenderTreeAsTextEv(i45, i43);
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i45) | 0, H_BASE + 1392 | 0) | 0;
      i15 = HEAP32[i45 >> 2] | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      i80 = i15 | 0;
      i17 = (HEAP32[i80 >> 2] | 0) - 2 | 0;
      if ((i17 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i15);
       break;
      } else {
       HEAP32[i80 >> 2] = i17;
       break;
      }
     }
    } while (0);
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 696 | 0) | 0;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 272 >> 2] & 1](i2) | 0)) {
    break;
   }
   i14 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 704 >> 2] & 1](i46, i18);
   do {
    if ((HEAP32[i46 >> 2] | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 716 >> 2] & 1](i47, i18);
     if ((HEAP32[i47 >> 2] | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 708 >> 2] & 1](i48, i18);
     if ((HEAP32[i48 >> 2] | 0) != 0) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 1](i49, i18);
     if ((HEAP32[i49 >> 2] | 0) == 0) {
      break L105;
     }
    }
   } while (0);
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1384 | 0) | 0;
   i16 = i5;
   i17 = i2 + 36 | 0;
   i80 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
   i15 = HEAP32[i80 >> 2] | 0;
   i83 = HEAP32[i80 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i15;
   HEAP32[i5 + 4 >> 2] = i83;
   if ((i15 & 0 | 0) == 0 & (i83 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i50, i18, i16);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   i16 = i6;
   i83 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
   i15 = HEAP32[i83 >> 2] | 0;
   i80 = HEAP32[i83 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i15;
   HEAP32[i6 + 4 >> 2] = i80;
   if ((i15 & 0 | 0) == 0 & (i80 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i51, i18, i16);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   i16 = i7;
   i80 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
   i15 = HEAP32[i80 >> 2] | 0;
   i83 = HEAP32[i80 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = i15;
   HEAP32[i7 + 4 >> 2] = i83;
   if ((i15 & 0 | 0) == 0 & (i83 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i52, i18, i16);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   i16 = i8;
   i83 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
   i17 = HEAP32[i83 >> 2] | 0;
   i15 = HEAP32[i83 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = i17;
   HEAP32[i8 + 4 >> 2] = i15;
   if ((i17 & 0 | 0) == 0 & (i15 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i53, i18, i16);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 704 >> 2] & 1](i54, i18);
   i16 = i50 | 0;
   do {
    if ((HEAP32[i54 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 716 >> 2] & 1](i55, i18);
     if ((HEAP32[i55 >> 2] | 0) != (HEAP32[i51 >> 2] | 0)) {
      i75 = 272;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 708 >> 2] & 1](i56, i18);
     if ((HEAP32[i56 >> 2] | 0) != (HEAP32[i52 >> 2] | 0)) {
      i75 = 272;
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 1](i57, i18);
     if ((HEAP32[i57 >> 2] | 0) != (HEAP32[i53 >> 2] | 0)) {
      i75 = 272;
     }
    } else {
     i75 = 272;
    }
   } while (0);
   L378 : do {
    if ((i75 | 0) == 272) {
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1368 | 0) | 0;
     do {
      if ((HEAP32[i16 >> 2] | 0) == 0) {
       if ((HEAP32[i51 >> 2] | 0) != 0) {
        break;
       }
       if ((HEAP32[i52 >> 2] | 0) != 0) {
        break;
       }
       if ((HEAP32[i53 >> 2] | 0) == 0) {
        break L378;
       }
      }
     } while (0);
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1360 | 0) | 0;
    }
   } while (0);
   i16 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1344 | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 704 >> 2] & 1](i58, i18);
   i15 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i16, HEAP32[i58 >> 2] | 0) | 0, H_BASE + 1472 | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 716 >> 2] & 1](i59, i18);
   i16 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i15, HEAP32[i59 >> 2] | 0) | 0, H_BASE + 1472 | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 708 >> 2] & 1](i60, i18);
   i15 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i16, HEAP32[i60 >> 2] | 0) | 0, H_BASE + 1472 | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 712 >> 2] & 1](i61, i18);
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i15, HEAP32[i61 >> 2] | 0) | 0, H_BASE + 696 | 0) | 0;
  }
 } while (0);
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 188 >> 2] & 1](i2) | 0) {
  i61 = i2;
  i60 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1328 | 0) | 0;
  i59 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i60, HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 92 >> 2] & 2147483647) | 0, H_BASE + 1320 | 0) | 0;
  i60 = i2 + 116 | 0;
  i58 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i59, HEAP32[i60 >> 2] & 536870911) | 0, H_BASE + 1312 | 0) | 0;
  if ((HEAP32[i60 >> 2] | 0) < 0) {
   i116 = __ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i61) | 0;
  } else {
   i116 = 1;
  }
  i59 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i58, i116) | 0, H_BASE + 1304 | 0) | 0;
  if ((HEAP32[i60 >> 2] & 1073741824 | 0) == 0) {
   i117 = 1;
  } else {
   i117 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i61) | 0;
  }
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i59, i117) | 0, H_BASE + 696 | 0) | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 68 >> 2] & 1](i2) | 0) {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1296 | 0) | 0;
   i117 = __ZNK7WebCore19RenderDetailsMarker11orientationEv(i2) | 0;
   if ((i117 | 0) == 2) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1288 | 0) | 0;
    break;
   } else if ((i117 | 0) == 3) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1280 | 0) | 0;
    break;
   } else if ((i117 | 0) == 0) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1272 | 0) | 0;
    break;
   } else if ((i117 | 0) == 1) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1264 | 0) | 0;
    break;
   } else {
    break;
   }
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 108 >> 2] & 1](i2) | 0) {
   i117 = i62 | 0;
   i59 = HEAP32[i2 + 92 >> 2] | 0;
   HEAP32[i117 >> 2] = i59;
   if ((i59 | 0) == 0) {
    break;
   }
   i61 = i59 | 0;
   HEAP32[i61 >> 2] = (HEAP32[i61 >> 2] | 0) + 2;
   i61 = HEAP32[i117 >> 2] | 0;
   if ((i61 | 0) == 0) {
    break;
   }
   i59 = HEAP32[i61 + 4 >> 2] | 0;
   do {
    if ((i59 | 0) == 1) {
     i60 = i61 + 8 | 0;
     if ((HEAP32[i61 + 16 >> 2] & 32 | 0) == 0) {
      i118 = HEAP16[HEAP32[i60 >> 2] >> 1] | 0;
     } else {
      i118 = HEAPU8[HEAP32[i60 >> 2] | 0] | 0;
     }
     i60 = i118 & 65535;
     if ((i60 | 0) == 8226) {
      __ZN3WTF6StringC1EPKc(i64, H_BASE + 1256 | 0);
      i116 = i64 | 0;
      i58 = HEAP32[i116 >> 2] | 0;
      HEAP32[i116 >> 2] = 0;
      i53 = HEAP32[i117 >> 2] | 0;
      HEAP32[i117 >> 2] = i58;
      do {
       if ((i53 | 0) != 0) {
        i58 = i53 | 0;
        i52 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
        if ((i52 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i53);
         break;
        } else {
         HEAP32[i58 >> 2] = i52;
         break;
        }
       }
      } while (0);
      i53 = HEAP32[i116 >> 2] | 0;
      if ((i53 | 0) == 0) {
       i75 = 330;
       break;
      }
      i52 = i53 | 0;
      i58 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i53);
       i75 = 330;
       break;
      } else {
       HEAP32[i52 >> 2] = i58;
       i75 = 330;
       break;
      }
     } else if ((i60 | 0) == 9632) {
      __ZN3WTF6StringC1EPKc(i65, H_BASE + 1232 | 0);
      i58 = i65 | 0;
      i52 = HEAP32[i58 >> 2] | 0;
      HEAP32[i58 >> 2] = 0;
      i53 = HEAP32[i117 >> 2] | 0;
      HEAP32[i117 >> 2] = i52;
      do {
       if ((i53 | 0) != 0) {
        i52 = i53 | 0;
        i51 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
        if ((i51 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i53);
         break;
        } else {
         HEAP32[i52 >> 2] = i51;
         break;
        }
       }
      } while (0);
      i53 = HEAP32[i58 >> 2] | 0;
      if ((i53 | 0) == 0) {
       i75 = 330;
       break;
      }
      i116 = i53 | 0;
      i51 = (HEAP32[i116 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i53);
       i75 = 330;
       break;
      } else {
       HEAP32[i116 >> 2] = i51;
       i75 = 330;
       break;
      }
     } else if ((i60 | 0) == 9702) {
      __ZN3WTF6StringC1EPKc(i66, H_BASE + 1216 | 0);
      i51 = i66 | 0;
      i116 = HEAP32[i51 >> 2] | 0;
      HEAP32[i51 >> 2] = 0;
      i53 = HEAP32[i117 >> 2] | 0;
      HEAP32[i117 >> 2] = i116;
      do {
       if ((i53 | 0) != 0) {
        i116 = i53 | 0;
        i52 = (HEAP32[i116 >> 2] | 0) - 2 | 0;
        if ((i52 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i53);
         break;
        } else {
         HEAP32[i116 >> 2] = i52;
         break;
        }
       }
      } while (0);
      i53 = HEAP32[i51 >> 2] | 0;
      if ((i53 | 0) == 0) {
       i75 = 330;
       break;
      }
      i60 = i53 | 0;
      i58 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
      if ((i58 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i53);
       i75 = 330;
       break;
      } else {
       HEAP32[i60 >> 2] = i58;
       i75 = 330;
       break;
      }
     } else {
      __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i67, i62);
      i58 = i67 | 0;
      i60 = HEAP32[i58 >> 2] | 0;
      HEAP32[i58 >> 2] = 0;
      i58 = HEAP32[i117 >> 2] | 0;
      HEAP32[i117 >> 2] = i60;
      if ((i58 | 0) == 0) {
       i75 = 330;
       break;
      }
      i60 = i58 | 0;
      i53 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i58);
       i75 = 330;
       break;
      } else {
       HEAP32[i60 >> 2] = i53;
       i75 = 330;
       break;
      }
     }
    } else if ((i59 | 0) == 0) {
     i119 = i61;
    } else {
     __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i63, i62);
     i53 = i63 | 0;
     i60 = HEAP32[i53 >> 2] | 0;
     HEAP32[i53 >> 2] = 0;
     i53 = HEAP32[i117 >> 2] | 0;
     HEAP32[i117 >> 2] = i60;
     if ((i53 | 0) == 0) {
      i75 = 330;
      break;
     }
     i60 = i53 | 0;
     i58 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
     if ((i58 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i53);
      i75 = 330;
      break;
     } else {
      HEAP32[i60 >> 2] = i58;
      i75 = 330;
      break;
     }
    }
   } while (0);
   if ((i75 | 0) == 330) {
    __ZN7WebCore10TextStreamlsERKN3WTF6StringE(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1296 | 0) | 0, i62) | 0;
    i61 = HEAP32[i117 >> 2] | 0;
    if ((i61 | 0) == 0) {
     break;
    } else {
     i119 = i61;
    }
   }
   i61 = i119 | 0;
   i59 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
   if ((i59 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i119);
    break;
   } else {
    HEAP32[i61 >> 2] = i59;
    break;
   }
  }
 } while (0);
 do {
  if ((i3 & 16 | 0) != 0) {
   if ((HEAP32[i70 >> 2] & 128 | 0) != 0) {
    break;
   }
   i119 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i119 | 0) == 0) {
    break;
   }
   if ((HEAP32[i119 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   if ((i119 | 0) == 0) {
    break;
   }
   i62 = i119 + 48 | 0;
   i63 = HEAP32[i62 >> 2] | 0;
   if ((i63 | 0) == 0) {
    break;
   }
   do {
    if ((HEAP32[i63 + 16 >> 2] | 0) != 0) {
     i67 = HEAP32[i63 + 4 >> 2] | 0;
     if ((i67 & 1 | 0) == 0) {
      i120 = i67 >>> 1 & 134217727;
      i121 = i63 + 20 | 0;
     } else {
      i67 = i63 + 24 | 0;
      i120 = HEAP32[i67 + 8 >> 2] | 0;
      i121 = HEAP32[i67 >> 2] | 0;
     }
     L478 : do {
      if ((i120 | 0) == 0) {
       i122 = __ZN3WTF8nullAtomE;
      } else {
       i67 = HEAP32[(HEAP32[(HEAP32[i119 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
       i66 = i67 + 12 | 0;
       i65 = i67 + 16 | 0;
       i64 = 0;
       while (1) {
        i123 = i121 + (i64 << 3) | 0;
        i118 = HEAP32[i123 >> 2] | 0;
        if ((i118 | 0) == (i67 | 0)) {
         break;
        }
        if ((HEAP32[i118 + 12 >> 2] | 0) == (HEAP32[i66 >> 2] | 0)) {
         if ((HEAP32[i118 + 16 >> 2] | 0) == (HEAP32[i65 >> 2] | 0)) {
          break;
         }
        }
        i118 = i64 + 1 | 0;
        if (i118 >>> 0 < i120 >>> 0) {
         i64 = i118;
        } else {
         i122 = __ZN3WTF8nullAtomE;
         break L478;
        }
       }
       i122 = (i123 | 0) == 0 ? __ZN3WTF8nullAtomE : i121 + (i64 << 3) + 4 | 0;
      }
     } while (0);
     i51 = HEAP32[i122 >> 2] | 0;
     do {
      if ((i51 | 0) == 0) {
       i124 = 0;
       i125 = 1;
      } else {
       i65 = i51 | 0;
       i66 = HEAP32[i65 >> 2] | 0;
       i67 = i66 + 2 | 0;
       HEAP32[i65 >> 2] = i66 + 4;
       if ((i67 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i51);
        i126 = HEAP32[i65 >> 2] | 0;
       } else {
        HEAP32[i65 >> 2] = i67;
        i126 = i67;
       }
       i67 = i126 + 2 | 0;
       HEAP32[i65 >> 2] = i126 + 4;
       if ((i67 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i51);
        i124 = i51;
        i125 = 0;
        break;
       } else {
        HEAP32[i65 >> 2] = i67;
        i124 = i51;
        i125 = 0;
        break;
       }
      }
     } while (0);
     HEAP32[i10 >> 2] = H_BASE + 1208;
     i51 = i10 + 4 | 0;
     HEAP32[i51 >> 2] = i124;
     i67 = (i124 | 0) == 0;
     if (!i67) {
      i65 = i124 | 0;
      HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
     }
     __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i9, i10, H_BASE + 1200 | 0);
     i65 = i9 | 0;
     i66 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = 0;
     i65 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i51 = i65 | 0;
       i118 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
       if ((i118 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i65);
        break;
       } else {
        HEAP32[i51 >> 2] = i118;
        break;
       }
      }
     } while (0);
     if ((i66 | 0) == 0) {
      _WTFCrash();
     }
     i65 = i68 | 0;
     HEAP32[i65 >> 2] = i66;
     __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i68) | 0;
     i118 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i118 | 0) != 0) {
       i65 = i118 | 0;
       i51 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
       if ((i51 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i118);
        break;
       } else {
        HEAP32[i65 >> 2] = i51;
        break;
       }
      }
     } while (0);
     do {
      if (!i67) {
       i118 = i124 | 0;
       i66 = (HEAP32[i118 >> 2] | 0) - 2 | 0;
       if ((i66 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i124);
        break;
       } else {
        HEAP32[i118 >> 2] = i66;
        break;
       }
      }
     } while (0);
     if (i125) {
      break;
     }
     i67 = i124 | 0;
     i66 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
     if ((i66 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i124);
      break;
     } else {
      HEAP32[i67 >> 2] = i66;
      break;
     }
    }
   } while (0);
   i119 = HEAP32[i62 >> 2] | 0;
   if ((i119 | 0) == 0) {
    break;
   }
   if ((HEAP32[i119 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1184 | 0) | 0;
   i119 = 0;
   while (1) {
    i63 = HEAP32[(HEAP32[i62 >> 2] | 0) + 12 >> 2] | 0;
    if ((i63 | 0) == 0) {
     i127 = 0;
    } else {
     i127 = HEAP32[i63 + 8 >> 2] | 0;
    }
    if (i119 >>> 0 >= i127 >>> 0) {
     i75 = 389;
     break;
    }
    if ((i119 | 0) == 0) {
     i128 = i63;
    } else {
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0;
     i128 = HEAP32[(HEAP32[i62 >> 2] | 0) + 12 >> 2] | 0;
    }
    if ((HEAP32[i128 + 8 >> 2] | 0) >>> 0 <= i119 >>> 0) {
     i75 = 387;
     break;
    }
    __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i128 + 12 + (i119 << 2) | 0) | 0;
    i119 = i119 + 1 | 0;
   }
   if ((i75 | 0) == 387) {
    _WTFCrash();
   } else if ((i75 | 0) == 389) {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1200 | 0) | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i3 & 128 | 0) != 0) {
   i75 = HEAP32[i70 >> 2] | 0;
   if ((i75 & 15 | 0) == 0) {
    i129 = 0;
    i130 = i75;
   } else {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1168 | 0) | 0;
    i129 = 1;
    i130 = HEAP32[i70 >> 2] | 0;
   }
   if ((i130 & 1 | 0) == 0) {
    i131 = 0;
    i132 = i130;
   } else {
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1160 | 0) | 0;
    i131 = 1;
    i132 = HEAP32[i70 >> 2] | 0;
   }
   if ((i132 & 2 | 0) == 0) {
    i133 = i131;
    i134 = i132;
   } else {
    if (i131) {
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1152 | 0) | 0;
    }
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1128 | 0) | 0;
    i133 = 1;
    i134 = HEAP32[i70 >> 2] | 0;
   }
   if ((i134 & 4 | 0) == 0) {
    i135 = i133;
    i136 = i134;
   } else {
    if (i133) {
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1152 | 0) | 0;
    }
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1120 | 0) | 0;
    i135 = 1;
    i136 = HEAP32[i70 >> 2] | 0;
   }
   if ((i136 & 8 | 0) != 0) {
    if (i135) {
     __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1152 | 0) | 0;
    }
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1056 | 0) | 0;
   }
   if (!i129) {
    break;
   }
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1392 | 0) | 0;
  }
 } while (0);
 if ((i3 & 256 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i70 >> 2] & 512 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i70 = i2 + 88 | 0;
 i3 = HEAP32[i70 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i129 = HEAP32[i3 + 4 >> 2] | 0;
 i135 = HEAP32[i3 + 8 >> 2] | 0;
 i136 = HEAP32[i3 + 12 >> 2] | 0;
 i133 = HEAP32[i3 + 16 >> 2] | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1032 | 0) | 0, i129) | 0, H_BASE + 1152 | 0) | 0, i135) | 0, H_BASE + 1472 | 0) | 0, i136) | 0, H_BASE + 1024 | 0) | 0, i133) | 0, H_BASE + 1392 | 0) | 0;
 i133 = i12;
 i136 = HEAP32[i70 >> 2] | 0;
 if ((i136 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i70 = i11 | 0;
 i135 = i2 + 52 | 0;
 i129 = HEAP32[i135 >> 2] | 0;
 i3 = HEAP32[i135 + 4 >> 2] | 0;
 HEAP32[i70 >> 2] = 0;
 HEAP32[i70 + 4 >> 2] = 0;
 i70 = i11 + 8 | 0;
 HEAP32[i70 >> 2] = i129;
 HEAP32[i70 + 4 >> 2] = i3;
 i3 = i136 + 20 | 0;
 HEAP32[i133 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i133 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i133 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i133 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i11, i12) | 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 824 >> 2] & 1](i69, i2);
 i2 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1e3 | 0) | 0;
 i1 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i2, HEAP32[i69 >> 2] | 0) | 0, H_BASE + 1152 | 0) | 0;
 i2 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i1, HEAP32[i69 + 4 >> 2] | 0) | 0, H_BASE + 1472 | 0) | 0;
 i1 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i2, HEAP32[i69 + 8 >> 2] | 0) | 0, H_BASE + 1024 | 0) | 0;
 __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i1, HEAP32[i69 + 12 >> 2] | 0) | 0, H_BASE + 1392 | 0) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore5writeERNS_10TextStreamERKNS_12RenderObjectEij(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 72 | 0;
 i13 = i5 + 88 | 0;
 i14 = i5 + 96 | 0;
 i15 = i5 + 112 | 0;
 i16 = i5 + 120 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = i2;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 352 >> 2] & 1](i2) | 0) {
  __ZN7WebCore5writeERNS_10TextStreamERKNS_14RenderSVGShapeEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 340 >> 2] & 1](i2) | 0) {
  __ZN7WebCore20writeSVGGradientStopERNS_10TextStreamERKNS_21RenderSVGGradientStopEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 380 >> 2] & 1](i2) | 0) {
  __ZN7WebCore25writeSVGResourceContainerERNS_10TextStreamERKNS_12RenderObjectEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 328 >> 2] & 1](i2) | 0) {
  __ZN7WebCore17writeSVGContainerERNS_10TextStreamERKNS_12RenderObjectEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 324 >> 2] & 1](i2) | 0) {
  __ZN7WebCore5writeERNS_10TextStreamERKNS_13RenderSVGRootEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 356 >> 2] & 1](i2) | 0) {
  __ZN7WebCore12writeSVGTextERNS_10TextStreamERKNS_13RenderSVGTextEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 368 >> 2] & 1](i2) | 0) {
  __ZN7WebCore18writeSVGInlineTextERNS_10TextStreamERKNS_19RenderSVGInlineTextEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 372 >> 2] & 1](i2) | 0) {
  __ZN7WebCore13writeSVGImageERNS_10TextStreamERKNS_14RenderSVGImageEi(i1, i2, i3);
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i3);
 __ZN7WebCore16RenderTreeAsText17writeRenderObjectERNS_10TextStreamERKNS_12RenderObjectEj(i1, i2, i4);
 __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 992 | 0) | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
   i20 = __ZNK7WebCore10RenderText16simpleLineLayoutEv(i2) | 0;
   if ((i20 | 0) != 0) {
    __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i11, HEAP32[i2 + 8 >> 2] | 0, i20);
    i20 = i12 | 0;
    HEAP32[i20 >> 2] = i11;
    i21 = i12 + 4 | 0;
    HEAP32[i21 >> 2] = 0;
    i22 = i12 + 8 | 0;
    HEAP32[i22 >> 2] = 0;
    i23 = HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0;
    if ((i23 | 0) != 0) {
     i24 = i13 | 0;
     i25 = i3 + 1 | 0;
     i26 = i14 | 0;
     i27 = i14 + 4 | 0;
     i28 = i14 + 8 | 0;
     i29 = i10 | 0;
     i30 = i15 | 0;
     while (1) {
      HEAP32[i24 >> 2] = i12;
      __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i25);
      __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i14, i13);
      i31 = HEAP32[i24 >> 2] | 0;
      i32 = HEAP32[i31 >> 2] | 0;
      i33 = HEAP32[i32 >> 2] | 0;
      i34 = HEAP32[i31 + 4 >> 2] | 0;
      i31 = HEAP32[i33 + 8 + (i34 << 4) >> 2] | 0;
      __ZNK3WTF6String20substringSharingImplEjj(i15, i32 + 4 | 0, i31, (HEAP32[i33 + 8 + (i34 << 4) + 4 >> 2] & 2147483647) - i31 | 0);
      i31 = HEAP32[i26 >> 2] | 0;
      i34 = HEAP32[i27 >> 2] | 0;
      i33 = ~~(+Math_ceil(+((HEAP32[i28 >> 2] | 0) + i31 | 0)) - +(i31 | 0));
      i32 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 188 >> 2] & 1](i32 | 0) | 0) {
       i35 = i34 - (HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0) + 120 >> 2] | 0) | 0;
      } else {
       i35 = i34;
      }
      __ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 216 | 0) | 0, i31) | 0, H_BASE + 1152 | 0) | 0, i35) | 0, H_BASE + 200 | 0) | 0, i33) | 0;
      i33 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1296 | 0) | 0;
      __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i10, i15);
      __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i33, i10) | 0;
      i33 = HEAP32[i29 >> 2] | 0;
      do {
       if ((i33 | 0) != 0) {
        i31 = i33 | 0;
        i34 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
        if ((i34 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i33);
         break;
        } else {
         HEAP32[i31 >> 2] = i34;
         break;
        }
       }
      } while (0);
      __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 992 | 0) | 0;
      i33 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i33 | 0) != 0) {
        i34 = i33 | 0;
        i31 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
        if ((i31 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i33);
         break;
        } else {
         HEAP32[i34 >> 2] = i31;
         break;
        }
       }
      } while (0);
      i33 = HEAP32[i21 >> 2] | 0;
      if ((HEAP32[(HEAP32[HEAP32[i20 >> 2] >> 2] | 0) + 8 + (i33 << 4) + 4 >> 2] | 0) < 0) {
       HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
      }
      i31 = i33 + 1 | 0;
      HEAP32[i21 >> 2] = i31;
      if ((i31 | 0) == (i23 | 0)) {
       break;
      }
     }
    }
    i23 = HEAP32[i11 + 4 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break;
    }
    i21 = i23 | 0;
    i22 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i23);
     break;
    } else {
     HEAP32[i21 >> 2] = i22;
     break;
    }
   }
   i22 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   i21 = i3 + 1 | 0;
   i23 = i2 + 44 | 0;
   i20 = i8 | 0;
   i30 = i6 | 0;
   i29 = i7 | 0;
   i28 = i2 + 8 | 0;
   i27 = i9 | 0;
   i26 = i22;
   while (1) {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i21);
    d36 = +HEAPF32[i26 + 20 >> 2];
    i22 = ~~d36;
    i24 = ~~+HEAPF32[i26 + 24 >> 2];
    i25 = ~~(+Math_ceil(d36 + +HEAPF32[i26 + 28 >> 2]) - +(i22 | 0));
    i31 = __ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 188 >> 2] & 1](i31 | 0) | 0) {
     i37 = i24 - (HEAP32[(__ZNK7WebCore12RenderObject15containingBlockEv(i2) | 0) + 120 >> 2] | 0) | 0;
    } else {
     i37 = i24;
    }
    __ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 216 | 0) | 0, i22) | 0, H_BASE + 1152 | 0) | 0, i37) | 0, H_BASE + 200 | 0) | 0, i25) | 0;
    i25 = i26 + 32 | 0;
    i22 = HEAP32[i25 >> 2] | 0;
    do {
     if ((i22 & 65540 | 0) != 0) {
      __ZN7WebCore10TextStreamlsEPKc(i1, ((i22 & 4 | 0) == 0 ? H_BASE + 184 : H_BASE + 192) | 0) | 0;
      if ((HEAP32[i25 >> 2] & 65536 | 0) == 0) {
       break;
      }
      __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 168 | 0) | 0;
     }
    } while (0);
    i22 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1296 | 0) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    HEAP32[i20 >> 2] = i24;
    if ((i24 | 0) != 0) {
     i31 = i24 | 0;
     HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
    }
    __ZNK3WTF6String9substringEjj(i7, i8, HEAP32[i26 + 44 >> 2] | 0, HEAPU16[i26 + 48 >> 1] | 0);
    __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i6, i7);
    __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i22, i6) | 0;
    i22 = HEAP32[i30 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i31 = i22 | 0;
      i24 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i31 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i29 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i24 = i22 | 0;
      i31 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i24 >> 2] = i31;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i31 = i22 | 0;
      i24 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i31 >> 2] = i24;
       break;
      }
     }
    } while (0);
    do {
     if ((HEAP32[i25 >> 2] & 32768 | 0) != 0) {
      i22 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 144 | 0) | 0;
      __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i9, __ZNK7WebCore11RenderStyle12hyphenStringEv(HEAP32[(HEAP32[i28 >> 2] | 0) + 36 >> 2] | 0) | 0);
      __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i22, i9) | 0;
      i22 = HEAP32[i27 >> 2] | 0;
      if ((i22 | 0) == 0) {
       break;
      }
      i24 = i22 | 0;
      i31 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
      if ((i31 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i24 >> 2] = i31;
       break;
      }
     }
    } while (0);
    __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 992 | 0) | 0;
    i26 = HEAP32[i26 + 40 >> 2] | 0;
    if ((i26 | 0) == 0) {
     break;
    }
   }
  } else {
   i26 = HEAP32[i2 + 28 >> 2] | 0;
   if ((i26 | 0) == 0) {
    break;
   }
   i27 = i3 + 1 | 0;
   i28 = i26;
   while (1) {
    if ((HEAP32[i28 + 20 >> 2] & 32768 | 0) == 0) {
     __ZN7WebCore5writeERNS_10TextStreamERKNS_12RenderObjectEij(i1, i28, i27, i4);
    }
    i28 = HEAP32[i28 + 16 >> 2] | 0;
    if ((i28 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 228 >> 2] & 1](i2) | 0)) {
  STACKTOP = i5;
  return;
 }
 i19 = HEAP32[i2 + 108 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 36 >> 2] & 1](i19) | 0)) {
  STACKTOP = i5;
  return;
 }
 i2 = __ZNK7WebCore5Frame15contentRendererEv(HEAP32[i19 + 216 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((i4 & 64 | 0) == 0) {
  __ZN7WebCore9FrameView6layoutEb(i19, 1);
 }
 i19 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i19 + 104 >> 2] | 0;
 i9 = HEAP32[i19 + 108 >> 2] | 0;
 i6 = i19 + 96 | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i17 + 4 >> 2] = i7;
 i7 = i16 + 8 | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i7 + 4 >> 2] = i9;
 __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i19, i19, i18, i3 + 1 | 0, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 64 | 0;
 i16 = i7 + 80 | 0;
 i17 = i7 + 104 | 0;
 i18 = i7 + 128 | 0;
 i19 = i7 + 152 | 0;
 i20 = i14;
 i21 = i4;
 HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
 if ((i2 | 0) == (i3 | 0)) {
  i21 = i14 + 8 | 0;
  i20 = HEAP32[i21 >> 2] | 0;
  i4 = i2 + 32 | 0;
  i22 = HEAP32[i4 >> 2] | 0;
  if ((HEAP32[i22 + 20 >> 2] & 512 | 0) == 0) {
   i23 = 0;
  } else {
   i23 = i22;
  }
  i24 = HEAP32[i23 + 88 >> 2] | 0;
  if ((i24 | 0) == 0) {
   i25 = i23 | 0;
   i26 = i23;
   i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 744 >> 2] & 1](i25) | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 736 >> 2] & 1](i25) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i12, i23);
   __ZNK7WebCore9RenderBox12clientHeightEv(i13, i23);
   i28 = i27;
   i29 = HEAP32[i12 >> 2] | 0;
   i30 = HEAP32[i4 >> 2] | 0;
  } else {
   i28 = HEAP32[i24 + 4 >> 2] | 0;
   i29 = HEAP32[i24 + 12 >> 2] | 0;
   i30 = i22;
  }
  i22 = i28 + i29 | 0;
  HEAP32[i21 >> 2] = (i20 | 0) < (i22 | 0) ? i22 : i20;
  i20 = i14 + 12 | 0;
  i22 = HEAP32[i20 >> 2] | 0;
  if ((HEAP32[i30 + 20 >> 2] & 512 | 0) == 0) {
   i31 = 0;
  } else {
   i31 = i30;
  }
  i21 = HEAP32[i31 + 88 >> 2] | 0;
  if ((i21 | 0) == 0) {
   i29 = i31 | 0;
   i28 = i31;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 744 >> 2] & 1](i29) | 0;
   i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 736 >> 2] & 1](i29) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i10, i31);
   __ZNK7WebCore9RenderBox12clientHeightEv(i11, i31);
   i32 = i24;
   i33 = HEAP32[i11 >> 2] | 0;
   i34 = HEAP32[i4 >> 2] | 0;
  } else {
   i32 = HEAP32[i21 + 8 >> 2] | 0;
   i33 = HEAP32[i21 + 16 >> 2] | 0;
   i34 = i30;
  }
  i30 = i32 + i33 | 0;
  HEAP32[i20 >> 2] = (i22 | 0) < (i30 | 0) ? i30 : i22;
  i22 = i2 + 104 | 0;
  if ((HEAP32[i34 + 20 >> 2] & 512 | 0) == 0) {
   i35 = 0;
  } else {
   i35 = i34;
  }
  i34 = HEAP32[i35 + 88 >> 2] | 0;
  if ((i34 | 0) == 0) {
   i30 = i35 | 0;
   i20 = i35;
   i33 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 744 >> 2] & 1](i30) | 0;
   i32 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 736 >> 2] & 1](i30) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i8, i35);
   __ZNK7WebCore9RenderBox12clientHeightEv(i9, i35);
   i36 = i33;
   i37 = i32;
   i38 = HEAP32[i8 >> 2] | 0;
   i39 = HEAP32[i9 >> 2] | 0;
  } else {
   i36 = HEAP32[i34 + 4 >> 2] | 0;
   i37 = HEAP32[i34 + 8 >> 2] | 0;
   i38 = HEAP32[i34 + 12 >> 2] | 0;
   i39 = HEAP32[i34 + 16 >> 2] | 0;
  }
  i34 = i36 + i38 | 0;
  i38 = i37 + i39 | 0;
  i39 = HEAP32[i22 >> 2] | 0;
  i37 = HEAP32[i2 + 108 >> 2] | 0;
  i36 = i22;
  HEAP32[i36 >> 2] = (i39 | 0) > (i34 | 0) ? i39 : i34;
  HEAP32[i36 + 4 >> 2] = (i37 | 0) > (i38 | 0) ? i37 : i38;
 }
 _memset(i15 | 0, 0, 16) | 0;
 _memset(i16 | 0, 0, 17) | 0;
 _memset(i17 | 0, 0, 17) | 0;
 _memset(i18 | 0, 0, 17) | 0;
 HEAP32[i19 >> 2] = i2;
 HEAP32[i19 + 4 >> 2] = 0;
 HEAP32[i19 + 8 >> 2] = 5;
 HEAP32[i19 + 12 >> 2] = 0;
 HEAP32[i19 + 16 >> 2] = 1;
 __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i3, i19, i14, i15, i16, i17, i18, 0);
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i3);
 if ((i6 & 1 | 0) == 0) {
  i40 = __ZNK7WebCore11RenderLayer20intersectsDamageRectERKNS_10LayoutRectES3_PKS0_PKNS_11LayoutPointEPNS_12RenderRegionE(i3, i15, i16 | 0, i2, 0, 0) | 0;
 } else {
  i40 = 1;
 }
 i19 = HEAP32[i3 + 140 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i41 = 0;
 } else {
  i38 = i19 + 8 | 0;
  i37 = (HEAP32[i38 >> 2] | 0) != 0;
  if (i40 & i37) {
   __ZN7WebCoreL5writeERNS_10TextStreamERNS_11RenderLayerERKNS_10LayoutRectES6_S6_S6_NS_15LayerPaintPhaseEij(i1, i3, i15, i16 | 0, i17 | 0, i18 | 0, -1, i5, i6);
  }
  if ((i6 & 2 | 0) == 0) {
   i42 = i5;
  } else {
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i5);
   i36 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 800 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i36, HEAP32[i38 >> 2] | 0) | 0, H_BASE + 792 | 0) | 0;
   i42 = i5 + 1 | 0;
  }
  i36 = HEAP32[i38 >> 2] | 0;
  L36 : do {
   if ((i36 | 0) != 0) {
    i34 = i19 | 0;
    i39 = 0;
    i22 = i36;
    while (1) {
     if (i22 >>> 0 <= i39 >>> 0) {
      break;
     }
     __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i2, HEAP32[(HEAP32[i34 >> 2] | 0) + (i39 << 2) >> 2] | 0, i14, i42, i6);
     i39 = i39 + 1 | 0;
     i22 = HEAP32[i38 >> 2] | 0;
     if ((i39 | 0) == (i22 | 0)) {
      break L36;
     }
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } while (0);
  i41 = i37 & 1;
 }
 if (i40) {
  __ZN7WebCoreL5writeERNS_10TextStreamERNS_11RenderLayerERKNS_10LayoutRectES6_S6_S6_NS_15LayerPaintPhaseEij(i1, i3, i15, i16 | 0, i17 | 0, i18 | 0, i41, i5, i6);
 }
 i41 = HEAP32[i3 + 144 >> 2] | 0;
 L47 : do {
  if ((i41 | 0) != 0) {
   if ((i6 & 2 | 0) == 0) {
    i43 = i5;
    i44 = i41 + 8 | 0;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i5);
    i18 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 768 | 0) | 0;
    i17 = i41 + 8 | 0;
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i18, HEAP32[i17 >> 2] | 0) | 0, H_BASE + 792 | 0) | 0;
    i43 = i5 + 1 | 0;
    i44 = i17;
   }
   i17 = HEAP32[i44 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i18 = i41 | 0;
   i16 = 0;
   i15 = i17;
   while (1) {
    if (i15 >>> 0 <= i16 >>> 0) {
     break;
    }
    __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i2, HEAP32[(HEAP32[i18 >> 2] | 0) + (i16 << 2) >> 2] | 0, i14, i43, i6);
    i16 = i16 + 1 | 0;
    i15 = HEAP32[i44 >> 2] | 0;
    if ((i16 | 0) == (i15 | 0)) {
     break L47;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i44 = HEAP32[i3 + 136 >> 2] | 0;
 L59 : do {
  if ((i44 | 0) != 0) {
   i43 = i44 + 8 | 0;
   i41 = HEAP32[i43 >> 2] | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   i15 = i44 | 0;
   i16 = 0;
   i18 = 0;
   i17 = i41;
   while (1) {
    if (i17 >>> 0 <= i18 >>> 0) {
     i45 = 46;
     break;
    }
    i16 = ((__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(HEAP32[(HEAP32[i15 >> 2] | 0) + (i18 << 2) >> 2] | 0) | 0) & 1 ^ 1) + i16 | 0;
    i18 = i18 + 1 | 0;
    i17 = HEAP32[i43 >> 2] | 0;
    if ((i18 | 0) == (i17 | 0)) {
     break;
    }
   }
   if ((i45 | 0) == 46) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((i16 | 0) == 0) {
    break;
   }
   if ((i18 | 0) != 0) {
    if (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(HEAP32[HEAP32[i44 >> 2] >> 2] | 0) | 0) {
     break;
    }
   }
   if ((i6 & 2 | 0) == 0) {
    i46 = i5;
   } else {
    __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i5);
    i17 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 744 | 0) | 0;
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEj(i17, HEAP32[i43 >> 2] | 0) | 0, H_BASE + 792 | 0) | 0;
    i46 = i5 + 1 | 0;
   }
   i17 = HEAP32[i43 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   i15 = i44 | 0;
   i41 = 0;
   i40 = i17;
   while (1) {
    if (i40 >>> 0 <= i41 >>> 0) {
     i45 = 56;
     break;
    }
    if (!(__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(HEAP32[(HEAP32[i15 >> 2] | 0) + (i41 << 2) >> 2] | 0) | 0)) {
     if ((HEAP32[i43 >> 2] | 0) >>> 0 <= i41 >>> 0) {
      i45 = 59;
      break;
     }
     __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i2, HEAP32[(HEAP32[i15 >> 2] | 0) + (i41 << 2) >> 2] | 0, i14, i46, i6);
    }
    i41 = i41 + 1 | 0;
    i40 = HEAP32[i43 >> 2] | 0;
    if ((i41 | 0) == (i40 | 0)) {
     break L59;
    }
   }
   if ((i45 | 0) == 56) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i45 | 0) == 59) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i45 = HEAP32[i3 + 32 >> 2] | 0;
 if ((HEAP32[i45 + 20 >> 2] & 768 | 0) != 768) {
  STACKTOP = i7;
  return;
 }
 i3 = i45;
 if (!(__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(i3) | 0)) {
  STACKTOP = i7;
  return;
 }
 i45 = HEAP32[(__ZN7WebCore10RenderView20flowThreadControllerEv(i3) | 0) + 16 >> 2] | 0;
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i5);
 __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 728 | 0) | 0;
 i3 = HEAP32[i45 + 20 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i45 = i5 + 1 | 0;
 i46 = i5 + 2 | 0;
 i44 = i5 + 3 | 0;
 i5 = i3;
 while (1) {
  i3 = HEAP32[i5 >> 2] | 0;
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i45);
  i40 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 712 | 0) | 0;
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i40, __ZNK7WebCore21RenderNamedFlowThread14flowThreadNameEv(i3) | 0) | 0, H_BASE + 704 | 0) | 0;
  __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i1, i2, HEAP32[i3 + 40 >> 2] | 0, i14, i46, i6);
  if ((HEAP32[i3 + 128 >> 2] | 0) != 0) {
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i46);
   i40 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 664 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i40, __ZNK7WebCore21RenderNamedFlowThread14flowThreadNameEv(i3) | 0) | 0, H_BASE + 704 | 0) | 0;
   __ZN7WebCoreL21writeRenderRegionListERKN3WTF11ListHashSetIPNS_12RenderRegionELj256ENS0_7PtrHashIS3_EEEERNS_10TextStreamEi(i3 + 116 | 0, i1, i44);
  }
  if ((HEAP32[i3 + 384 >> 2] | 0) != 0) {
   __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i46);
   i40 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 624 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i40, __ZNK7WebCore21RenderNamedFlowThread14flowThreadNameEv(i3) | 0) | 0, H_BASE + 704 | 0) | 0;
   __ZN7WebCoreL21writeRenderRegionListERKN3WTF11ListHashSetIPNS_12RenderRegionELj256ENS0_7PtrHashIS3_EEEERNS_10TextStreamEi(i3 + 372 | 0, i1, i44);
  }
  i5 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i7;
 return;
}
function __ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i16 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i16 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = i16 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i16 + 12 | 0;
 HEAP8[i20] = 1;
 HEAP32[i16 + 16 >> 2] = 0;
 i21 = i16 + 20 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP8[i15] = 34;
 __ZN3WTF13StringBuilder6appendEPKhj(i16, i15, 1);
 i15 = i2 | 0;
 i2 = i16 + 20 | 0;
 i22 = 0;
 while (1) {
  i23 = HEAP32[i15 >> 2] | 0;
  i24 = (i23 | 0) == 0;
  if (i24) {
   i25 = 0;
  } else {
   i25 = HEAP32[i23 + 4 >> 2] | 0;
  }
  if ((i22 | 0) == (i25 | 0)) {
   break;
  }
  L7 : do {
   if (i24) {
    i26 = 0;
    i27 = 56;
   } else {
    if ((HEAP32[i23 + 4 >> 2] | 0) >>> 0 <= i22 >>> 0) {
     i26 = 0;
     i27 = 56;
     break;
    }
    i28 = i23 + 8 | 0;
    if ((HEAP32[i23 + 16 >> 2] & 32 | 0) == 0) {
     i29 = HEAP16[(HEAP32[i28 >> 2] | 0) + (i22 << 1) >> 1] | 0;
    } else {
     i29 = HEAPU8[(HEAP32[i28 >> 2] | 0) + i22 | 0] | 0;
    }
    if ((i29 << 16 >> 16 | 0) == 92) {
     HEAP8[i14] = 92;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) == 0) {
       i27 = 17;
      } else {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        i27 = 17;
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i27 = 17;
        break;
       }
       i31 = (HEAP8[i20] & 1) == 0;
       HEAP32[i17 >> 2] = i30 + 1;
       if (i31) {
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = 92;
        break;
       } else {
        HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = 92;
        break;
       }
      }
     } while (0);
     if ((i27 | 0) == 17) {
      i27 = 0;
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i14, 1);
     }
     HEAP8[i13] = 92;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        break;
       }
       i31 = (HEAP8[i20] & 1) == 0;
       HEAP32[i17 >> 2] = i30 + 1;
       if (i31) {
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = 92;
        break L7;
       } else {
        HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = 92;
        break L7;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i13, 1);
     break;
    } else if ((i29 << 16 >> 16 | 0) == 34) {
     HEAP8[i12] = 92;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) == 0) {
       i27 = 31;
      } else {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        i27 = 31;
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        i27 = 31;
        break;
       }
       i31 = (HEAP8[i20] & 1) == 0;
       HEAP32[i17 >> 2] = i30 + 1;
       if (i31) {
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = 92;
        break;
       } else {
        HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = 92;
        break;
       }
      }
     } while (0);
     if ((i27 | 0) == 31) {
      i27 = 0;
      __ZN3WTF13StringBuilder6appendEPKhj(i16, i12, 1);
     }
     HEAP8[i11] = 34;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        break;
       }
       i31 = (HEAP8[i20] & 1) == 0;
       HEAP32[i17 >> 2] = i30 + 1;
       if (i31) {
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = 34;
        break L7;
       } else {
        HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = 34;
        break L7;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i11, 1);
     break;
    } else if ((i29 << 16 >> 16 | 0) == 10 | (i29 << 16 >> 16 | 0) == 160) {
     HEAP8[i10] = 32;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        break;
       }
       i31 = (HEAP8[i20] & 1) == 0;
       HEAP32[i17 >> 2] = i30 + 1;
       if (i31) {
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = 32;
        break L7;
       } else {
        HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = 32;
        break L7;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i10, 1);
     break;
    } else {
     if ((i29 - 32 & 65535) >>> 0 >= 95 >>> 0) {
      i26 = i29 & 65535;
      i27 = 56;
      break;
     }
     HEAP16[i9 >> 1] = i29;
     i28 = HEAP32[i19 >> 2] | 0;
     do {
      if ((i28 | 0) != 0) {
       i30 = HEAP32[i17 >> 2] | 0;
       if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i18 >> 2] | 0) != 0) {
        break;
       }
       if ((HEAP8[i20] & 1) == 0) {
        HEAP32[i17 >> 2] = i30 + 1;
        HEAP16[(HEAP32[i2 >> 2] | 0) + (i30 << 1) >> 1] = i29;
        break L7;
       }
       if ((i29 & 65535) >>> 0 > 255 >>> 0) {
        break;
       }
       HEAP32[i17 >> 2] = i30 + 1;
       HEAP8[(HEAP32[i21 >> 2] | 0) + i30 | 0] = i29;
       break L7;
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKtj(i16, i9, 1);
     break;
    }
   }
  } while (0);
  L75 : do {
   if ((i27 | 0) == 56) {
    i27 = 0;
    HEAP8[i8] = 92;
    i23 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i23 | 0) == 0) {
      i27 = 62;
     } else {
      i24 = HEAP32[i17 >> 2] | 0;
      if (i24 >>> 0 >= (HEAP32[i23 + 4 >> 2] | 0) >>> 0) {
       i27 = 62;
       break;
      }
      if ((HEAP32[i18 >> 2] | 0) != 0) {
       i27 = 62;
       break;
      }
      i28 = (HEAP8[i20] & 1) == 0;
      HEAP32[i17 >> 2] = i24 + 1;
      if (i28) {
       HEAP16[(HEAP32[i2 >> 2] | 0) + (i24 << 1) >> 1] = 92;
       break;
      } else {
       HEAP8[(HEAP32[i21 >> 2] | 0) + i24 | 0] = 92;
       break;
      }
     }
    } while (0);
    if ((i27 | 0) == 62) {
     i27 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i8, 1);
    }
    HEAP8[i7] = 120;
    i23 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i23 | 0) == 0) {
      i27 = 69;
     } else {
      i24 = HEAP32[i17 >> 2] | 0;
      if (i24 >>> 0 >= (HEAP32[i23 + 4 >> 2] | 0) >>> 0) {
       i27 = 69;
       break;
      }
      if ((HEAP32[i18 >> 2] | 0) != 0) {
       i27 = 69;
       break;
      }
      i28 = (HEAP8[i20] & 1) == 0;
      HEAP32[i17 >> 2] = i24 + 1;
      if (i28) {
       HEAP16[(HEAP32[i2 >> 2] | 0) + (i24 << 1) >> 1] = 120;
       break;
      } else {
       HEAP8[(HEAP32[i21 >> 2] | 0) + i24 | 0] = 120;
       break;
      }
     }
    } while (0);
    if ((i27 | 0) == 69) {
     i27 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i7, 1);
    }
    HEAP8[i6] = 123;
    i23 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i23 | 0) == 0) {
      i27 = 76;
     } else {
      i24 = HEAP32[i17 >> 2] | 0;
      if (i24 >>> 0 >= (HEAP32[i23 + 4 >> 2] | 0) >>> 0) {
       i27 = 76;
       break;
      }
      if ((HEAP32[i18 >> 2] | 0) != 0) {
       i27 = 76;
       break;
      }
      i28 = (HEAP8[i20] & 1) == 0;
      HEAP32[i17 >> 2] = i24 + 1;
      if (i28) {
       HEAP16[(HEAP32[i2 >> 2] | 0) + (i24 << 1) >> 1] = 123;
       break;
      } else {
       HEAP8[(HEAP32[i21 >> 2] | 0) + i24 | 0] = 123;
       break;
      }
     }
    } while (0);
    if ((i27 | 0) == 76) {
     i27 = 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i16, i6, 1);
    }
    __ZN3WTF19appendUnsignedAsHexINS_13StringBuilderEEEvjRT_NS_17HexConversionModeE(i26, i16, 1);
    HEAP8[i5] = 125;
    i23 = HEAP32[i19 >> 2] | 0;
    do {
     if ((i23 | 0) != 0) {
      i24 = HEAP32[i17 >> 2] | 0;
      if (i24 >>> 0 >= (HEAP32[i23 + 4 >> 2] | 0) >>> 0) {
       break;
      }
      if ((HEAP32[i18 >> 2] | 0) != 0) {
       break;
      }
      i28 = (HEAP8[i20] & 1) == 0;
      HEAP32[i17 >> 2] = i24 + 1;
      if (i28) {
       HEAP16[(HEAP32[i2 >> 2] | 0) + (i24 << 1) >> 1] = 125;
       break L75;
      } else {
       HEAP8[(HEAP32[i21 >> 2] | 0) + i24 | 0] = 125;
       break L75;
      }
     }
    } while (0);
    __ZN3WTF13StringBuilder6appendEPKhj(i16, i5, 1);
   }
  } while (0);
  i22 = i22 + 1 | 0;
 }
 HEAP8[i4] = 34;
 i22 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i27 = 91;
  } else {
   i5 = HEAP32[i17 >> 2] | 0;
   if (i5 >>> 0 >= (HEAP32[i22 + 4 >> 2] | 0) >>> 0) {
    i27 = 91;
    break;
   }
   if ((HEAP32[i18 >> 2] | 0) != 0) {
    i27 = 91;
    break;
   }
   i26 = (HEAP8[i20] & 1) == 0;
   HEAP32[i17 >> 2] = i5 + 1;
   if (i26) {
    HEAP16[(HEAP32[i2 >> 2] | 0) + (i5 << 1) >> 1] = 34;
    break;
   } else {
    HEAP8[(HEAP32[i21 >> 2] | 0) + i5 | 0] = 34;
    break;
   }
  }
 } while (0);
 if ((i27 | 0) == 91) {
  __ZN3WTF13StringBuilder6appendEPKhj(i16, i4, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i16);
 i4 = HEAP32[i18 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i16);
  i16 = HEAP32[i18 >> 2] | 0;
  HEAP32[i1 >> 2] = i16;
  if ((i16 | 0) != 0) {
   i32 = i16;
   i27 = 95;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i32 = i4;
  i27 = 95;
 }
 if ((i27 | 0) == 95) {
  i27 = i32 | 0;
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 2;
 }
 i27 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i19 = i27 | 0;
   i32 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i32 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i27);
    break;
   } else {
    HEAP32[i19 >> 2] = i32;
    break;
   }
  }
 } while (0);
 i27 = HEAP32[i18 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = i27 | 0;
 i32 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
 if ((i32 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i27);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i18 >> 2] = i32;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL22externalRepresentationEPNS_9RenderBoxEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 80 | 0;
 i8 = i4 + 88 | 0;
 i9 = i4 + 104 | 0;
 i10 = i4 + 112 | 0;
 i11 = i4 + 128 | 0;
 i12 = i4 + 136 | 0;
 i13 = i4 + 160 | 0;
 HEAP32[i12 >> 2] = 0;
 i14 = i12 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i12 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP8[i12 + 12 | 0] = 1;
 HEAP32[i12 + 16 >> 2] = 0;
 HEAP32[i12 + 20 >> 2] = 0;
 i16 = i2 + 20 | 0;
 if ((HEAP32[i16 >> 2] & 32768 | 0) == 0) {
  __ZN7WebCore10TextStream7releaseEv(i1, i12);
 } else {
  i17 = i13 | 0;
  i18 = HEAP32[i2 + 40 >> 2] | 0;
  i19 = HEAP32[i18 + 104 >> 2] | 0;
  i20 = HEAP32[i18 + 108 >> 2] | 0;
  i21 = i18 + 96 | 0;
  i22 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i17 + 4 >> 2] = i22;
  i22 = i13 + 8 | 0;
  HEAP32[i22 >> 2] = i19;
  HEAP32[i22 + 4 >> 2] = i20;
  __ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij(i12, i18, i18, i13, 0, i3);
  do {
   if ((HEAP32[i16 >> 2] & 768 | 0) == 768) {
    i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    __ZN7WebCore16VisibleSelectionC2ERKS0_(i5, (HEAP32[i3 + 468 >> 2] | 0) + 32 | 0);
    i3 = HEAP32[i5 + 52 >> 2] | 0;
    do {
     if ((i3 | 0) == 2) {
      i13 = __ZN7WebCore10TextStreamlsEPKc(i12, H_BASE + 904 | 0) | 0;
      i18 = i8 | 0;
      i20 = HEAP32[i5 + 24 >> 2] | 0;
      HEAP32[i18 >> 2] = i20;
      i22 = (i20 | 0) == 0;
      if (!i22) {
       i19 = i20 + 8 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
      }
      i19 = HEAP32[i5 + 28 >> 2] | 0;
      HEAP32[i8 + 4 >> 2] = i19;
      i17 = HEAP32[i5 + 32 >> 2] | 0;
      i21 = i8 + 8 | 0;
      i23 = i21;
      i24 = HEAP32[i23 >> 2] & -8 | i17 & 7;
      HEAP32[i23 >> 2] = i24;
      i25 = i17 & 8;
      HEAP8[i21] = i24 & 255 & -9 | i25;
      do {
       if (i25 << 24 >> 24 == 0) {
        i24 = HEAP32[i23 >> 2] & 7;
        if (!((i24 | 0) == 2 | (i24 | 0) == 4)) {
         i26 = i19;
         break;
        }
        i26 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i8) | 0;
       } else {
        i26 = i19;
       }
      } while (0);
      i19 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i13, i26) | 0, H_BASE + 960 | 0) | 0;
      if (!i22) {
       i23 = i20 + 8 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      }
      __ZN7WebCoreL12nodePositionEPNS_4NodeE(i9, i20);
      i23 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i19, i9) | 0, H_BASE + 992 | 0) | 0, H_BASE + 872 | 0) | 0;
      i19 = i10 | 0;
      i25 = HEAP32[i5 + 36 >> 2] | 0;
      HEAP32[i19 >> 2] = i25;
      i24 = (i25 | 0) == 0;
      if (!i24) {
       i21 = i25 + 8 | 0;
       HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
      }
      i21 = HEAP32[i5 + 40 >> 2] | 0;
      HEAP32[i10 + 4 >> 2] = i21;
      i17 = HEAP32[i5 + 44 >> 2] | 0;
      i27 = i10 + 8 | 0;
      i28 = i27;
      i29 = HEAP32[i28 >> 2] & -8 | i17 & 7;
      HEAP32[i28 >> 2] = i29;
      i30 = i17 & 8;
      HEAP8[i27] = i29 & 255 & -9 | i30;
      do {
       if (i30 << 24 >> 24 == 0) {
        i29 = HEAP32[i28 >> 2] & 7;
        if (!((i29 | 0) == 2 | (i29 | 0) == 4)) {
         i31 = i21;
         break;
        }
        i31 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i10) | 0;
       } else {
        i31 = i21;
       }
      } while (0);
      i21 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i23, i31) | 0, H_BASE + 960 | 0) | 0;
      if (!i24) {
       i28 = i25 + 8 | 0;
       HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      }
      __ZN7WebCoreL12nodePositionEPNS_4NodeE(i11, i25);
      __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i21, i11) | 0, H_BASE + 992 | 0) | 0;
      i21 = HEAP32[i11 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i28 = i21 | 0;
        i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i21);
         break;
        } else {
         HEAP32[i28 >> 2] = i30;
         break;
        }
       }
      } while (0);
      do {
       if (!i24) {
        i21 = i25 + 8 | 0;
        i23 = i21 | 0;
        i30 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
        HEAP32[i23 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i21 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i21 - 8 | 0);
       }
      } while (0);
      i25 = HEAP32[i19 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i24 = i25 + 8 | 0;
        i21 = i24 | 0;
        i30 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
        HEAP32[i21 >> 2] = i30;
        if ((i30 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i25 = HEAP32[i9 >> 2] | 0;
      do {
       if ((i25 | 0) != 0) {
        i19 = i25 | 0;
        i24 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
        if ((i24 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i25);
         break;
        } else {
         HEAP32[i19 >> 2] = i24;
         break;
        }
       }
      } while (0);
      do {
       if (!i22) {
        i25 = i20 + 8 | 0;
        i24 = i25 | 0;
        i19 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i19;
        if ((i19 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i25 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i25 - 8 | 0);
       }
      } while (0);
      i20 = HEAP32[i18 >> 2] | 0;
      if ((i20 | 0) == 0) {
       break;
      }
      i22 = i20 + 8 | 0;
      i20 = i22 | 0;
      i25 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
      HEAP32[i20 >> 2] = i25;
      if ((i25 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i22 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i22 - 8 | 0);
     } else if ((i3 | 0) == 1) {
      i22 = __ZN7WebCore10TextStreamlsEPKc(i12, H_BASE + 968 | 0) | 0;
      i25 = i6 | 0;
      i20 = HEAP32[i5 + 24 >> 2] | 0;
      HEAP32[i25 >> 2] = i20;
      i19 = (i20 | 0) == 0;
      if (!i19) {
       i24 = i20 + 8 | 0;
       HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
      }
      i24 = HEAP32[i5 + 28 >> 2] | 0;
      HEAP32[i6 + 4 >> 2] = i24;
      i30 = HEAP32[i5 + 32 >> 2] | 0;
      i21 = i6 + 8 | 0;
      i23 = i21;
      i28 = HEAP32[i23 >> 2] & -8 | i30 & 7;
      HEAP32[i23 >> 2] = i28;
      i13 = i30 & 8;
      HEAP8[i21] = i28 & 255 & -9 | i13;
      do {
       if (i13 << 24 >> 24 == 0) {
        i28 = HEAP32[i23 >> 2] & 7;
        if (!((i28 | 0) == 2 | (i28 | 0) == 4)) {
         i32 = i24;
         break;
        }
        i32 = __ZNK7WebCore8Position28offsetForPositionAfterAnchorEv(i6) | 0;
       } else {
        i32 = i24;
       }
      } while (0);
      i24 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEi(i22, i32) | 0, H_BASE + 960 | 0) | 0;
      if (!i19) {
       i23 = i20 + 8 | 0;
       HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
      }
      __ZN7WebCoreL12nodePositionEPNS_4NodeE(i7, i20);
      __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i24, i7) | 0;
      i24 = HEAP32[i7 >> 2] | 0;
      do {
       if ((i24 | 0) != 0) {
        i23 = i24 | 0;
        i13 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
        if ((i13 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i24);
         break;
        } else {
         HEAP32[i23 >> 2] = i13;
         break;
        }
       }
      } while (0);
      do {
       if (!i19) {
        i24 = i20 + 8 | 0;
        i22 = i24 | 0;
        i13 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
        HEAP32[i22 >> 2] = i13;
        if ((i13 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i24 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i24 - 8 | 0);
       }
      } while (0);
      i20 = HEAP32[i25 >> 2] | 0;
      do {
       if ((i20 | 0) != 0) {
        i19 = i20 + 8 | 0;
        i24 = i19 | 0;
        i13 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
        HEAP32[i24 >> 2] = i13;
        if ((i13 | 0) >= 1) {
         break;
        }
        if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
       }
      } while (0);
      if ((HEAP32[i5 + 48 >> 2] | 0) == 0) {
       __ZN7WebCore10TextStreamlsEPKc(i12, H_BASE + 936 | 0) | 0;
      }
      __ZN7WebCore10TextStreamlsEPKc(i12, H_BASE + 992 | 0) | 0;
     }
    } while (0);
    __ZN7WebCore16VisibleSelectionD2Ev(i5);
   }
  } while (0);
  __ZN7WebCore10TextStream7releaseEv(i1, i12);
 }
 i12 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i15 = i12 | 0;
   i1 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i15 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i12 = HEAP32[i14 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i12 | 0;
 i1 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i12);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i14 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCoreL12nodePositionEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i7 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i7 + 12 | 0;
 HEAP8[i13] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 i14 = i7 + 20 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i16 = (i15 | 0) != 0;
   i17 = i15 | 0;
   i18 = i9 | 0;
   i19 = i7 + 20 | 0;
   i20 = i8 | 0;
   i21 = i2;
   while (1) {
    i22 = i21 + 12 | 0;
    do {
     if ((HEAP32[i22 >> 2] & 4096 | 0) == 0) {
      i23 = 6;
     } else {
      if ((HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 4 >> 2] | 0) != (i21 | 0)) {
       i23 = 6;
       break;
      }
      i24 = HEAP32[i21 + 92 >> 2] | 0;
     }
    } while (0);
    if ((i23 | 0) == 6) {
     i23 = 0;
     i24 = HEAP32[i21 + 16 >> 2] | 0;
    }
    i25 = i24 | 0;
    if ((i21 | 0) != (i2 | 0)) {
     __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 960 | 0, 4);
    }
    i26 = (i24 | 0) == 0;
    if (i26) {
     i23 = 53;
     break;
    }
    if (i16 & (i21 | 0) == (i17 | 0)) {
     i23 = 11;
     break;
    }
    i27 = i21 + 20 | 0;
    L16 : do {
     if ((HEAP32[i22 >> 2] & 4096 | 0) == 0) {
      i23 = 37;
     } else {
      if ((HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] | 0) != (i21 | 0)) {
       i23 = 37;
       break;
      }
      HEAP8[i6] = 123;
      i28 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i28 | 0) == 0) {
        i23 = 20;
       } else {
        i29 = HEAP32[i10 >> 2] | 0;
        if (i29 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
         i23 = 20;
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) != 0) {
         i23 = 20;
         break;
        }
        i30 = (HEAP8[i13] & 1) == 0;
        HEAP32[i10 >> 2] = i29 + 1;
        if (i30) {
         HEAP16[(HEAP32[i19 >> 2] | 0) + (i29 << 1) >> 1] = 123;
         break;
        } else {
         HEAP8[(HEAP32[i14 >> 2] | 0) + i29 | 0] = 123;
         break;
        }
       }
      } while (0);
      if ((i23 | 0) == 20) {
       i23 = 0;
       __ZN3WTF13StringBuilder6appendEPKhj(i7, i6, 1);
      }
      do {
       if ((HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0) == (i21 | 0)) {
        __ZN3WTF6StringC1EPKc(i8, H_BASE + 1528 | 0);
       } else {
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 76 >> 2] & 1](i21) | 0) == 8) {
         __ZN3WTF6StringC1EPKc(i8, H_BASE + 8 | 0);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 64 >> 2] & 1](i8, i21);
         break;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i8);
      i28 = HEAP32[i20 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i29 = i28 | 0;
        i30 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i28);
         break;
        } else {
         HEAP32[i29 >> 2] = i30;
         break;
        }
       }
      } while (0);
      HEAP8[i5] = 125;
      i28 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i28 | 0) != 0) {
        i30 = HEAP32[i10 >> 2] | 0;
        if (i30 >>> 0 >= (HEAP32[i28 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) != 0) {
         break;
        }
        i29 = (HEAP8[i13] & 1) == 0;
        HEAP32[i10 >> 2] = i30 + 1;
        if (i29) {
         HEAP16[(HEAP32[i19 >> 2] | 0) + (i30 << 1) >> 1] = 125;
         break L16;
        } else {
         HEAP8[(HEAP32[i14 >> 2] | 0) + i30 | 0] = 125;
         break L16;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
     }
    } while (0);
    L50 : do {
     if ((i23 | 0) == 37) {
      i23 = 0;
      __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 840 | 0, 6);
      __ZN3WTF13StringBuilder12appendNumberEj(i7, __ZNK7WebCore4Node9nodeIndexEv(i21) | 0);
      __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 1336 | 0, 2);
      do {
       if ((HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0) == (i21 | 0)) {
        __ZN3WTF6StringC1EPKc(i9, H_BASE + 1528 | 0);
       } else {
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 76 >> 2] & 1](i21) | 0) == 8) {
         __ZN3WTF6StringC1EPKc(i9, H_BASE + 8 | 0);
         break;
        } else {
         FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 64 >> 2] & 1](i9, i21);
         break;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i7, i9);
      i22 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i28 = i22 | 0;
        i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i22);
         break;
        } else {
         HEAP32[i28 >> 2] = i30;
         break;
        }
       }
      } while (0);
      HEAP8[i4] = 125;
      i22 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i22 | 0) != 0) {
        i30 = HEAP32[i10 >> 2] | 0;
        if (i30 >>> 0 >= (HEAP32[i22 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) != 0) {
         break;
        }
        i28 = (HEAP8[i13] & 1) == 0;
        HEAP32[i10 >> 2] = i30 + 1;
        if (i28) {
         HEAP16[(HEAP32[i19 >> 2] | 0) + (i30 << 1) >> 1] = 125;
         break L50;
        } else {
         HEAP8[(HEAP32[i14 >> 2] | 0) + i30 | 0] = 125;
         break L50;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i7, i4, 1);
     }
    } while (0);
    if (i26) {
     break L1;
    } else {
     i21 = i25;
    }
   }
   if ((i23 | 0) == 11) {
    __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 848 | 0, 4);
    break;
   } else if ((i23 | 0) == 53) {
    __ZN3WTF13StringBuilder6appendEPKhj(i7, H_BASE + 824 | 0, 8);
    break;
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
 i4 = HEAP32[i11 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i7);
  i7 = HEAP32[i11 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i31 = i7;
   i23 = 58;
  }
 } else {
  HEAP32[i1 >> 2] = i4;
  i31 = i4;
  i23 = 58;
 }
 if ((i23 | 0) == 58) {
  i23 = i31 | 0;
  HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 2;
 }
 i23 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   i12 = i23 | 0;
   i31 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i12 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i23 = HEAP32[i11 >> 2] | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i23 | 0;
 i31 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i23);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i31;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCoreL21writeRenderRegionListERKN3WTF11ListHashSetIPNS_12RenderRegionELj256ENS0_7PtrHashIS3_EEEERNS_10TextStreamEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i4 + 32 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i5 | 0;
 i9 = i5 + 4 | 0;
 i10 = i5 + 8 | 0;
 i11 = i5 + 12 | 0;
 i12 = i5 + 16 | 0;
 i13 = i5 + 20 | 0;
 i14 = i6 | 0;
 i15 = i7 | 0;
 i16 = i8;
 while (1) {
  i8 = HEAP32[i16 >> 2] | 0;
  __ZN7WebCore11writeIndentERNS_10TextStreamEi(i2, i3);
  i17 = i8 | 0;
  __ZN7WebCore10TextStreamlsEPKc(i2, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 28 >> 2] & 1](i17) | 0) | 0;
  i18 = i8 | 0;
  i19 = i8 + 8 | 0;
  L6 : do {
   if ((HEAP32[i19 >> 2] | 0) == 0) {
    i20 = i18;
    i21 = i17;
   } else {
    i22 = i18;
    i23 = i17;
    i24 = i19;
    while (1) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 152 >> 2] & 1](i23) | 0)) {
      i20 = i22;
      i21 = i23;
      break L6;
     }
     i25 = HEAP32[i24 >> 2] | 0;
     i26 = i25 | 0;
     i27 = i25 + 8 | 0;
     if ((HEAP32[i27 >> 2] | 0) == 0) {
      i20 = i25;
      i21 = i26;
      break;
     } else {
      i22 = i25;
      i23 = i26;
      i24 = i27;
     }
    }
   }
  } while (0);
  i24 = i20 + 20 | 0;
  i23 = HEAP32[i24 >> 2] | 0;
  do {
   if ((i23 & 128 | 0) == 0) {
    i22 = HEAP32[i20 + 4 >> 2] | 0;
    if ((i22 | 0) == 0) {
     i28 = i23;
     i29 = 12;
     break;
    }
    if ((HEAP32[i22 + 12 >> 2] & 1048580 | 0) != 1048580) {
     i28 = i23;
     i29 = 12;
     break;
    }
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 232 >> 2] & 1](i22) | 0) == 0) {
     i28 = HEAP32[i24 >> 2] | 0;
     i29 = 12;
     break;
    } else {
     i30 = __ZNK7WebCore12RenderObject27generatingPseudoHostElementEv(i21) | 0;
     i29 = 14;
     break;
    }
   } else {
    i28 = i23;
    i29 = 12;
   }
  } while (0);
  do {
   if ((i29 | 0) == 12) {
    i29 = 0;
    if ((i28 & 128 | 0) != 0) {
     break;
    }
    i30 = HEAP32[i20 + 4 >> 2] | 0;
    i29 = 14;
   }
  } while (0);
  do {
   if ((i29 | 0) == 14) {
    i29 = 0;
    i23 = i30;
    if ((i30 | 0) == 0) {
     break;
    }
    i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 152 >> 2] & 1](i17) | 0;
    do {
     if (i24) {
      if ((HEAP8[i8 + 184 | 0] & 1) == 0) {
       break;
      }
      __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 600 | 0) | 0;
     }
    } while (0);
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 1208 >> 2] & 1](i8) | 0) {
     __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 576 | 0) | 0;
    }
    if (i24) {
     __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 552 | 0) | 0;
    }
    HEAP32[i1 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    HEAP8[i11] = 1;
    HEAP32[i12 >> 2] = 0;
    HEAP32[i13 >> 2] = 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 64 >> 2] & 1](i6, i23);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i5, i6);
    i22 = HEAP32[i14 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i27 = i22 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i27 >> 2] = i26;
       break;
      }
     }
    } while (0);
    if (i24) {
     i31 = HEAP32[i19 >> 2] | 0;
    } else {
     i31 = i18;
    }
    i22 = i31 + 20 | 0;
    L43 : do {
     if ((HEAP32[i22 >> 2] & 128 | 0) == 0) {
      i23 = i31 + 4 | 0;
      i26 = HEAP32[i23 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      if ((HEAP32[i26 + 12 >> 2] & 1048580 | 0) != 1048580) {
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 232 >> 2] & 1](i26) | 0) == 0) {
       break;
      }
      i26 = HEAP32[i22 >> 2] | 0;
      if ((i26 & 128 | 0) == 0) {
       i32 = HEAP32[i23 >> 2] | 0;
      } else {
       i32 = 0;
      }
      do {
       if ((HEAP32[i32 + 12 >> 2] & 1048580 | 0) == 1048580) {
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 232 >> 2] & 1](i32 | 0) | 0) == 3) {
         __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 536 | 0, 8);
         break L43;
        } else {
         i33 = HEAP32[i22 >> 2] | 0;
         break;
        }
       } else {
        i33 = i26;
       }
      } while (0);
      if ((i33 & 128 | 0) == 0) {
       i34 = HEAP32[i23 >> 2] | 0;
      } else {
       i34 = 0;
      }
      if ((HEAP32[i34 + 12 >> 2] & 1048580 | 0) != 1048580) {
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 232 >> 2] & 1](i34 | 0) | 0) != 4) {
       break;
      }
      __ZN3WTF13StringBuilder6appendEPKhj(i5, H_BASE + 528 | 0, 7);
     }
    } while (0);
    i22 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 1336 | 0) | 0;
    __ZN3WTF13StringBuilder11shrinkToFitEv(i5);
    i26 = HEAP32[i9 >> 2] | 0;
    if ((i26 | 0) == 0) {
     __ZNK3WTF13StringBuilder11reifyStringEv(i5);
     i27 = HEAP32[i9 >> 2] | 0;
     HEAP32[i15 >> 2] = i27;
     if ((i27 | 0) != 0) {
      i35 = i27;
      i29 = 46;
     }
    } else {
     HEAP32[i15 >> 2] = i26;
     i35 = i26;
     i29 = 46;
    }
    if ((i29 | 0) == 46) {
     i29 = 0;
     i26 = i35 | 0;
     HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
    }
    __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKN3WTF6StringE(i22, i7) | 0, H_BASE + 1248 | 0) | 0;
    i22 = HEAP32[i15 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i26 = i22 | 0;
      i27 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
      if ((i27 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i26 >> 2] = i27;
       break;
      }
     }
    } while (0);
    i22 = i30 + 48 | 0;
    i27 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i27 | 0) != 0) {
      if ((HEAP32[i27 + 16 >> 2] | 0) == 0) {
       break;
      }
      i26 = __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 520 | 0) | 0;
      __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i26, (HEAP32[i22 >> 2] | 0) + 16 | 0) | 0;
     }
    } while (0);
    if (i24) {
     __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 1392 | 0) | 0;
    }
    i22 = HEAP32[i10 >> 2] | 0;
    do {
     if ((i22 | 0) != 0) {
      i27 = i22 | 0;
      i26 = (HEAP32[i27 >> 2] | 0) - 2 | 0;
      if ((i26 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       break;
      } else {
       HEAP32[i27 >> 2] = i26;
       break;
      }
     }
    } while (0);
    i22 = HEAP32[i9 >> 2] | 0;
    if ((i22 | 0) == 0) {
     break;
    }
    i24 = i22 | 0;
    i26 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
    if ((i26 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i22);
     break;
    } else {
     HEAP32[i24 >> 2] = i26;
     break;
    }
   }
  } while (0);
  __ZN7WebCore10TextStreamlsEPKc(i2, H_BASE + 992 | 0) | 0;
  i16 = HEAP32[i16 + 8 >> 2] | 0;
  if ((i16 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL5writeERNS_10TextStreamERNS_11RenderLayerERKNS_10LayoutRectES6_S6_S6_NS_15LayerPaintPhaseEij(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i11 = i10 | 0;
 i12 = i10 + 16 | 0;
 i13 = i10 + 32 | 0;
 i14 = i10 + 48 | 0;
 i15 = i10 + 64 | 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i11, i3);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i12, i4);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i13, i5);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i14, i6);
 __ZN7WebCore11writeIndentERNS_10TextStreamEi(i1, i8);
 __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 512 | 0) | 0;
 if ((i9 & 8 | 0) != 0) {
  __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEPKv(i1, i2) | 0, H_BASE + 1472 | 0) | 0;
 }
 __ZN7WebCore10TextStreamlsERKNS_7IntRectE(i1, i11) | 0;
 do {
  if ((HEAP32[i11 + 8 >> 2] | 0) >= 1) {
   if ((HEAP32[i11 + 12 >> 2] | 0) < 1) {
    break;
   }
   if (!(__ZNK7WebCore7IntRect8containsERKS0_(i12, i11) | 0)) {
    __ZN7WebCore10TextStreamlsERKNS_7IntRectE(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 488 | 0) | 0, i12) | 0;
   }
   if (!(__ZNK7WebCore7IntRect8containsERKS0_(i13, i11) | 0)) {
    __ZN7WebCore10TextStreamlsERKNS_7IntRectE(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 464 | 0) | 0, i13) | 0;
   }
   if (__ZNK7WebCore7IntRect8containsERKS0_(i14, i11) | 0) {
    break;
   }
   __ZN7WebCore10TextStreamlsERKNS_7IntRectE(__ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 448 | 0) | 0, i14) | 0;
  }
 } while (0);
 i14 = i2 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 20 >> 2] & 65536 | 0) != 0) {
   i11 = i2 + 112 | 0;
   i13 = i2 + 12 | 0;
   if ((HEAP32[i13 >> 2] | 0) != (-(HEAP32[i11 >> 2] | 0) | 0)) {
    i12 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 432 | 0) | 0;
    __ZN7WebCore10TextStreamlsEi(i12, (HEAP32[i13 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0) | 0;
   }
   i11 = i2 + 116 | 0;
   i13 = i2 + 16 | 0;
   if ((HEAP32[i13 >> 2] | 0) != (-(HEAP32[i11 >> 2] | 0) | 0)) {
    i12 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 416 | 0) | 0;
    __ZN7WebCore10TextStreamlsEi(i12, (HEAP32[i13 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0) | 0;
   }
   i11 = HEAP32[i14 >> 2] | 0;
   do {
    if (!((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0 | (i11 | 0) == 0)) {
     i13 = __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i11) | 0;
     if ((i13 | 0) == (__ZNK7WebCore11RenderLayer11scrollWidthEv(i2) | 0)) {
      break;
     }
     i13 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 400 | 0) | 0;
     __ZN7WebCore10TextStreamlsEi(i13, __ZNK7WebCore11RenderLayer11scrollWidthEv(i2) | 0) | 0;
    }
   } while (0);
   i11 = HEAP32[i14 >> 2] | 0;
   if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0 | (i11 | 0) == 0) {
    break;
   }
   i13 = __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i11) | 0;
   if ((i13 | 0) == (__ZNK7WebCore11RenderLayer12scrollHeightEv(i2) | 0)) {
    break;
   }
   i13 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 384 | 0) | 0;
   __ZN7WebCore10TextStreamlsEi(i13, __ZNK7WebCore11RenderLayer12scrollHeightEv(i2) | 0) | 0;
  }
 } while (0);
 if ((i7 | 0) == (-1 | 0)) {
  __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 352 | 0) | 0;
 } else if ((i7 | 0) == 1) {
  __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 320 | 0) | 0;
 }
 do {
  if ((i9 & 4 | 0) != 0) {
   i13 = i2 + 208 | 0;
   if ((HEAP32[i13 >> 2] | 0) == 0) {
    break;
   }
   i11 = __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 296 | 0) | 0;
   __ZNK7WebCore18RenderLayerBacking16compositedBoundsEv(i15, HEAP32[i13 >> 2] | 0);
   i12 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsERKNS_10LayoutRectE(i11, i15) | 0, H_BASE + 280 | 0) | 0;
   i11 = __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i12, (HEAP8[(HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] | 0) + 340 | 0] & 32) != 0) | 0, H_BASE + 232 | 0) | 0;
   __ZN7WebCore10TextStreamlsEPKc(__ZN7WebCore10TextStreamlsEb(i11, (HEAP8[(HEAP32[i13 >> 2] | 0) + 91 | 0] & 1) == 0) | 0, H_BASE + 1392 | 0) | 0;
  }
 } while (0);
 __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 992 | 0) | 0;
 if ((i7 | 0) == -1) {
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore5writeERNS_10TextStreamERKNS_12RenderObjectEij(i1, HEAP32[i14 >> 2] | 0, i8 + 1 | 0, i9);
 STACKTOP = i10;
 return;
}
function __ZN3WTF19appendUnsignedAsHexINS_13StringBuilderEEEvjRT_NS_17HexConversionModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = (i3 | 0) == 0 ? H_BASE + 1504 : H_BASE + 1480;
 i3 = i5 + 12 | 0;
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = i3;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 8;
 i9 = i5 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 i5 = i1;
 i1 = 0;
 i10 = 8;
 while (1) {
  i11 = i6 + (i5 & 15) | 0;
  if ((i1 | 0) == (i10 | 0)) {
   i12 = i10 + 1 | 0;
   i13 = HEAP32[i7 >> 2] | 0;
   do {
    if (i13 >>> 0 > i11 >>> 0) {
     i14 = 6;
    } else {
     if ((i13 + i10 | 0) >>> 0 <= i11 >>> 0) {
      i14 = 6;
      break;
     }
     i15 = i11 - i13 | 0;
     i16 = i12 + (i10 >>> 2) | 0;
     i17 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
     i16 = i17 >>> 0 > i12 >>> 0 ? i17 : i12;
     do {
      if (i10 >>> 0 < i16 >>> 0) {
       if (i16 >>> 0 > 8 >>> 0) {
        i17 = __ZN3WTF18fastMallocGoodSizeEj(i16) | 0;
        HEAP32[i8 >> 2] = i17;
        i18 = __ZN3WTF10fastMallocEj(i17) | 0;
        HEAP32[i7 >> 2] = i18;
        i19 = i18;
       } else {
        HEAP32[i7 >> 2] = i3;
        HEAP32[i8 >> 2] = 8;
        i19 = i3;
       }
       _memcpy(i19 | 0, i13 | 0, i10) | 0;
       if ((i3 | 0) == (i13 | 0) | (i13 | 0) == 0) {
        break;
       }
       if ((HEAP32[i7 >> 2] | 0) == (i13 | 0)) {
        HEAP32[i7 >> 2] = 0;
        HEAP32[i8 >> 2] = 0;
       }
       __ZN3WTF8fastFreeEPv(i13);
      }
     } while (0);
     i16 = HEAP32[i7 >> 2] | 0;
     i20 = i16 + i15 | 0;
     i21 = i16;
    }
   } while (0);
   if ((i14 | 0) == 6) {
    i14 = 0;
    i16 = i12 + (i10 >>> 2) | 0;
    i18 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
    i16 = i18 >>> 0 > i12 >>> 0 ? i18 : i12;
    do {
     if (i10 >>> 0 < i16 >>> 0) {
      if (i16 >>> 0 > 8 >>> 0) {
       i18 = __ZN3WTF18fastMallocGoodSizeEj(i16) | 0;
       HEAP32[i8 >> 2] = i18;
       i17 = __ZN3WTF10fastMallocEj(i18) | 0;
       HEAP32[i7 >> 2] = i17;
       i22 = i17;
      } else {
       HEAP32[i7 >> 2] = i3;
       HEAP32[i8 >> 2] = 8;
       i22 = i3;
      }
      _memcpy(i22 | 0, i13 | 0, i10) | 0;
      if ((i3 | 0) == (i13 | 0) | (i13 | 0) == 0) {
       break;
      }
      if ((HEAP32[i7 >> 2] | 0) == (i13 | 0)) {
       HEAP32[i7 >> 2] = 0;
       HEAP32[i8 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i13);
     }
    } while (0);
    i20 = i11;
    i21 = HEAP32[i7 >> 2] | 0;
   }
   HEAP8[i21 + (HEAP32[i9 >> 2] | 0) | 0] = HEAP8[i20] | 0;
   i23 = HEAP32[i9 >> 2] | 0;
  } else {
   HEAP8[(HEAP32[i7 >> 2] | 0) + i1 | 0] = HEAP8[i11] | 0;
   i23 = HEAP32[i9 >> 2] | 0;
  }
  i24 = i23 + 1 | 0;
  HEAP32[i9 >> 2] = i24;
  i13 = i5 >>> 4;
  if ((i13 | 0) == 0) {
   break;
  }
  i5 = i13;
  i1 = i24;
  i10 = HEAP32[i8 >> 2] | 0;
 }
 L37 : do {
  if (i24 >>> 0 > 1 >>> 0) {
   i10 = 0;
   i1 = i24;
   while (1) {
    if (i1 >>> 0 <= i10 >>> 0) {
     i14 = 29;
     break;
    }
    i5 = HEAP32[i7 >> 2] | 0;
    i23 = i5 + i10 | 0;
    i20 = _llvm_uadd_with_overflow_i32(i1 | 0, ~i10 | 0) | 0;
    if (!tempRet0) {
     i14 = 31;
     break;
    }
    i21 = i5 + i20 | 0;
    i20 = HEAP8[i23] | 0;
    HEAP8[i23] = HEAP8[i21] | 0;
    HEAP8[i21] = i20;
    i20 = i10 + 1 | 0;
    i21 = HEAP32[i9 >> 2] | 0;
    if (i20 >>> 0 < i21 >>> 1 >>> 0) {
     i10 = i20;
     i1 = i21;
    } else {
     i25 = i21;
     break L37;
    }
   }
   if ((i14 | 0) == 29) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i14 | 0) == 31) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i25 = i24;
  }
 } while (0);
 __ZN3WTF13StringBuilder6appendEPKhj(i2, HEAP32[i7 >> 2] | 0, i25);
 if ((HEAP32[i9 >> 2] | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == (i9 | 0) | (i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i9);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22counterValueForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = (i2 | 0) != 0;
 if (i6) {
  i7 = i2 + 8 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 HEAP32[i4 >> 2] = 0;
 i7 = i4 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 8 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP8[i4 + 12 | 0] = 1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 HEAP8[i5] = 1;
 i9 = __ZNK7WebCore7Element19beforePseudoElementEv(i2) | 0;
 if ((i9 | 0) != 0) {
  i10 = i9 + 32 | 0;
  if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
   i11 = i10 | 0;
  } else {
   i11 = HEAP32[i10 >> 2] | 0;
  }
  __ZN7WebCoreL30writeCounterValuesFromChildrenERNS_10TextStreamEPKNS_13RenderElementERb(i4, HEAP32[i11 >> 2] | 0, i5);
 }
 i11 = __ZNK7WebCore7Element18afterPseudoElementEv(i2) | 0;
 if ((i11 | 0) != 0) {
  i10 = i11 + 32 | 0;
  if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
   i12 = i10 | 0;
  } else {
   i12 = HEAP32[i10 >> 2] | 0;
  }
  __ZN7WebCoreL30writeCounterValuesFromChildrenERNS_10TextStreamEPKNS_13RenderElementERb(i4, HEAP32[i12 >> 2] | 0, i5);
 }
 __ZN7WebCore10TextStream7releaseEv(i1, i4);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 if (!i6) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 8 | 0;
 i2 = i6 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, d14 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[(HEAP32[i2 + 28 >> 2] | 0) + 44 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = i2 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 + 8 | 0, i6, 0, 0, 1);
 HEAP32[i1 + 12 >> 2] = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 816 >> 2] & 1](i6, 0, 0, 0, 1) | 0;
 i6 = i2 | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 752 >> 2] & 1](i6) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 720 >> 2] & 1](i5, i6);
 HEAP32[i1 + 16 >> 2] = (HEAP32[i5 >> 2] | 0) + i3;
 i3 = i2 + 36 | 0;
 i2 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i3 >> 2] | 0) | 0;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 i6 = i5 + 44 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i5, i2 | 0, 0) | 0;
  i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i8, 32) | 0;
  HEAP32[i6 >> 2] = i2;
  i9 = i2;
 } else {
  i9 = i7;
 }
 HEAPF32[i1 + 20 >> 2] = +(_round(+(+HEAPF32[i9 + 16 >> 2])) | 0);
 i9 = i1 + 24 | 0;
 i1 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i3 >> 2] | 0) | 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 i7 = i3 + 44 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i10 = i2;
  i11 = i10 + 20 | 0;
  d12 = +HEAPF32[i11 >> 2];
  i13 = _round(+d12) | 0;
  d14 = +(i13 | 0);
  HEAPF32[i9 >> 2] = d14;
  STACKTOP = i4;
  return;
 }
 i2 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i3, i1 | 0, 0) | 0;
 i1 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, 32) | 0;
 HEAP32[i7 >> 2] = i1;
 i10 = i1;
 i11 = i10 + 20 | 0;
 d12 = +HEAPF32[i11 >> 2];
 i13 = _round(+d12) | 0;
 d14 = +(i13 | 0);
 HEAPF32[i9 >> 2] = d14;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16VisibleSelectionC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 i4 = i2 + 8 | 0;
 i3 = i1 + 8 | 0;
 i5 = i3;
 i6 = HEAP32[i5 >> 2] & -8 | HEAP32[i4 >> 2] & 7;
 HEAP32[i5 >> 2] = i6;
 HEAP8[i3] = i6 & 255 & -9 | HEAP8[i4] & 8;
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 i6 = i2 + 20 | 0;
 i4 = i1 + 20 | 0;
 i3 = i4;
 i5 = HEAP32[i3 >> 2] & -8 | HEAP32[i6 >> 2] & 7;
 HEAP32[i3 >> 2] = i5;
 HEAP8[i4] = i5 & 255 & -9 | HEAP8[i6] & 8;
 i6 = HEAP32[i2 + 24 >> 2] | 0;
 HEAP32[i1 + 24 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i5 = i6 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i5 = i2 + 32 | 0;
 i6 = i1 + 32 | 0;
 i4 = i6;
 i3 = HEAP32[i4 >> 2] & -8 | HEAP32[i5 >> 2] & 7;
 HEAP32[i4 >> 2] = i3;
 HEAP8[i6] = i3 & 255 & -9 | HEAP8[i5] & 8;
 i5 = HEAP32[i2 + 36 >> 2] | 0;
 HEAP32[i1 + 36 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i1 + 40 >> 2] = HEAP32[i2 + 40 >> 2];
 i3 = i2 + 44 | 0;
 i5 = i1 + 44 | 0;
 i6 = i5;
 i4 = HEAP32[i6 >> 2] & -8 | HEAP32[i3 >> 2] & 7;
 HEAP32[i6 >> 2] = i4;
 HEAP8[i5] = i4 & 255 & -9 | HEAP8[i3] & 8;
 HEAP32[i1 + 48 >> 2] = HEAP32[i2 + 48 >> 2];
 HEAP32[i1 + 52 >> 2] = HEAP32[i2 + 52 >> 2];
 i3 = i2 + 56 | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -3 | HEAP8[i3] & 2;
 return;
}
function __ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = Math_imul(i6 >>> 0 < 2147483647 >>> 0 ? i6 : 2147483647, HEAP32[i2 + 8 >> 2] | 0) | 0;
 d7 = +(i3 + (HEAP32[i2 + 12 >> 2] | 0) | 0);
 d8 = +Math_floor(+HEAPF32[i4 + 8 + (i5 << 4) + 8 >> 2]);
 d9 = d8;
 do {
  if (d9 < +2147483647) {
   if (d8 <= +-2147483648) {
    i10 = 0;
    i11 = -2147483648;
    break;
   }
   i10 = 0;
   i11 = ~~d8;
  } else {
   i10 = 0;
   i11 = 2147483647;
  }
 } while (0);
 d8 = +HEAPF32[i2 + 20 >> 2];
 d12 = d7 - d8 + +(HEAP32[i2 + 16 >> 2] | 0);
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i13 = -2147483648;
    i14 = 0;
    break;
   }
   i13 = ~~d12;
   i14 = 0;
  } else {
   i13 = 2147483647;
   i14 = 0;
  }
 } while (0);
 d12 = +Math_ceil(+HEAPF32[i4 + 8 + (i5 << 4) + 12 >> 2]) - d9;
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i15 = 0;
    i16 = -2147483648;
    break;
   }
   i15 = 0;
   i16 = ~~d12;
  } else {
   i15 = 0;
   i16 = 2147483647;
  }
 } while (0);
 d12 = d8 + +HEAPF32[i2 + 24 >> 2];
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i17 = -2147483648;
    i18 = 0;
    break;
   }
   i17 = ~~d12;
   i18 = 0;
  } else {
   i17 = 2147483647;
   i18 = 0;
  }
 } while (0);
 i2 = i1;
 HEAP32[i2 >> 2] = i14 | i11;
 HEAP32[i2 + 4 >> 2] = i13 | i10;
 i10 = i1 + 8 | 0;
 HEAP32[i10 >> 2] = i18 | i16;
 HEAP32[i10 + 4 >> 2] = i17 | i15;
 return;
}
function __ZN7WebCoreL30writeCounterValuesFromChildrenERNS_10TextStreamEPKNS_13RenderElementERb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i2 + 28 | 0;
 while (1) {
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 18;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] & 1](i7) | 0) {
   break;
  } else {
   i6 = i7 + 16 | 0;
  }
 }
 if ((i8 | 0) == 18) {
  STACKTOP = i4;
  return;
 }
 i8 = i5 | 0;
 i6 = i7;
 L10 : while (1) {
  if ((HEAP8[i3] & 1) == 0) {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0;
  }
  HEAP8[i3] = 0;
  i7 = HEAP32[i6 + 44 >> 2] | 0;
  HEAP32[i8 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
  __ZN7WebCore10TextStreamlsERKN3WTF6StringE(i1, i5) | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i2 | 0) == 0) {
    i9 = i6;
   } else {
    i7 = i2 | 0;
    i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     i9 = i6;
     break;
    } else {
     HEAP32[i7 >> 2] = i10;
     i9 = i6;
     break;
    }
   }
  } while (0);
  while (1) {
   i2 = HEAP32[i9 + 16 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break L10;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 1](i2) | 0) {
    i6 = i2;
    continue L10;
   } else {
    i9 = i2;
   }
  }
 }
 STACKTOP = i4;
 return;
}
function __ZN7WebCore16VisibleSelectionD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore21markerTextForListItemEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = (i2 | 0) != 0;
 if (i3) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
 i4 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i6 = 8;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 104 >> 2] & 1](i4) | 0)) {
    i6 = 8;
    break;
   }
   i5 = HEAP32[(__ZNK7WebCore14RenderListItem10markerTextEv(i4) | 0) >> 2] | 0;
   HEAP32[i1 >> 2] = i5;
   if ((i5 | 0) == 0) {
    break;
   }
   i7 = i5 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
 } while (0);
 if ((i6 | 0) == 8) {
  HEAP32[i1 >> 2] = 0;
 }
 if (!i3) {
  return;
 }
 i3 = i2 + 8 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i1;
 if ((i1 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
 return;
}
function __ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 switch (i2 | 0) {
 case 4:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 72 | 0) | 0;
   break;
  }
 case 6:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 64 | 0) | 0;
   break;
  }
 case 7:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 56 | 0) | 0;
   break;
  }
 case 8:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 48 | 0) | 0;
   break;
  }
 case 9:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 40 | 0) | 0;
   break;
  }
 case 2:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 120 | 0) | 0;
   break;
  }
 case 5:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 80 | 0) | 0;
   break;
  }
 case 3:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 88 | 0) | 0;
   break;
  }
 case 1:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 128 | 0) | 0;
   break;
  }
 case 0:
  {
   __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 136 | 0) | 0;
   break;
  }
 default:
  {}
 }
 __ZN7WebCore10TextStreamlsEPKc(i1, H_BASE + 1472 | 0) | 0;
 return;
}
function __ZN7WebCore22externalRepresentationEPNS_5FrameEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = __ZNK7WebCore5Frame15contentRendererEv(i2) | 0;
 do {
  if ((i6 | 0) != 0) {
   if ((HEAP32[i6 + 20 >> 2] & 512 | 0) == 0) {
    break;
   }
   __ZN7WebCore12PrintContextC1EPNS_5FrameE(i5, i2);
   if ((i3 & 32 | 0) != 0) {
    __ZN7WebCore12PrintContext5beginEff(i5, +(HEAP32[i6 + 52 >> 2] | 0), +0);
   }
   if ((i3 & 64 | 0) == 0) {
    __ZN7WebCore8Document12updateLayoutEv(HEAP32[i2 + 456 >> 2] | 0);
   }
   __ZN7WebCoreL22externalRepresentationEPNS_9RenderBoxEj(i1, i6 | 0, i3);
   __ZN7WebCore12PrintContextD1Ev(i5);
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22externalRepresentationEPNS_7ElementEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i5 = i4 | 0;
 } else {
  i5 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
    break;
   }
   if ((i3 & 64 | 0) == 0) {
    __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0);
   }
   __ZN7WebCoreL22externalRepresentationEPNS_9RenderBoxEj(i1, i4, i3 | 1);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
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
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
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
function b3(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(3);
 return 0;
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
 FUNCTION_TABLE_vii[i1 & 1](i2 | 0, i3 | 0);
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
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b4() {
 abort(4);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2];
  var FUNCTION_TABLE_iiiiii = [b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiii: dynCall_iiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiii": invoke_iiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore9HTMLNames7spanTagE": __ZN7WebCore9HTMLNames7spanTagE, "__ZN7WebCore9HTMLNames9classAttrE": __ZN7WebCore9HTMLNames9classAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore5writeERNS_10TextStreamERKNS_12RenderObjectEij","__ZN7WebCoreL11writeLayersERNS_10TextStreamEPKNS_11RenderLayerEPS2_RKNS_10LayoutRectEij","__ZN7WebCore16RenderTreeAsText17writeRenderObjectERNS_10TextStreamERKNS_12RenderObjectEj","_memset","__ZN7WebCore22externalRepresentationEPNS_5FrameEj","_memcpy","__ZN7WebCore16VisibleSelectionC2ERKS0_","__ZN7WebCoreL12nodePositionEPNS_4NodeE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore27quoteAndEscapeNonPrintablesERKN3WTF6StringE","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN7WebCoreL5writeERNS_10TextStreamERNS_11RenderLayerERKNS_10LayoutRectES6_S6_S6_NS_15LayerPaintPhaseEij","__ZN7WebCoreL21writeRenderRegionListERKN3WTF11ListHashSetIPNS_12RenderRegionELj256ENS0_7PtrHashIS3_EEEERNS_10TextStreamEi","__ZN3WTF19appendUnsignedAsHexINS_13StringBuilderEEEvjRT_NS_17HexConversionModeE","__ZN7WebCore16VisibleSelectionD2Ev","__ZN7WebCoreL30writeCounterValuesFromChildrenERNS_10TextStreamEPKNS_13RenderElementERb","__ZNK7WebCore16SimpleLineLayout11RunResolver3Run4rectEv","__ZN7WebCore21markerTextForListItemEPNS_7ElementE","__ZN7WebCoreL16printBorderStyleERNS_10TextStreamENS_12EBorderStyleE","__ZN7WebCoreL22externalRepresentationEPNS_9RenderBoxEj","__ZN7WebCore22counterValueForElementEPNS_7ElementE","__ZN7WebCore22externalRepresentationEPNS_7ElementEj","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_12AtomicStringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore16SimpleLineLayout11RunResolverC2ERKNS_15RenderBlockFlowERKNS0_6LayoutE"]

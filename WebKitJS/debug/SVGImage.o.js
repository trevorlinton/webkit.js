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
H_BASE = parentModule["_malloc"](640 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 640;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore8SVGImageC1EPNS_13ImageObserverE;
var __ZN7WebCore8SVGImageD1Ev;
/* memory initializer */ allocate([115,118,103,0,0,0,0,0,105,109,97,103,101,47,115,118,103,43,120,109,108,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_ii(index,a1) {
  try {
    return Module["dynCall_ii"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZN7WebCore8SVGNames16foreignObjectTagE=env.__ZN7WebCore8SVGNames16foreignObjectTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore8SVGImageE=(H_BASE+32)|0;
  var __ZTVN7WebCore20SVGImageChromeClientE=(H_BASE+152)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiii=env.invoke_viiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viii=env.invoke_viii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_viiiiiii + 4;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_viiiiiiii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 12;
}
function __ZN7WebCore8SVGImage23drawPatternForContainerEPNS_15GraphicsContextENS_9FloatSizeEfRKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES6_(i1, i2, i3, d4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, i30 = 0, i31 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i12 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 i14 = i13 + 8 | 0;
 i23 = i3;
 i3 = HEAP32[i23 >> 2] | 0;
 i24 = HEAP32[i23 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i3;
 HEAP32[i14 + 4 >> 2] = i24;
 __ZN7WebCore9FloatRect5scaleEff(i15, d4, d4);
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i16, i2, 1);
 d25 = +__ZNK7WebCore15AffineTransform6xScaleEv(i16);
 d26 = +__ZNK7WebCore15AffineTransform6yScaleEv(i16);
 i16 = i17;
 i14 = i13;
 HEAP32[i16 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i16 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i16 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i16 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 __ZN7WebCore9FloatRect5scaleEff(i17, d25, d26);
 i14 = i17 + 8 | 0;
 d27 = +HEAPF32[i14 >> 2];
 d28 = +HEAPF32[i14 + 4 >> 2];
 d29 = +Math_ceil(d27);
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i30 = -2147483648;
    break;
   }
   i30 = ~~d29;
  } else {
   i30 = 2147483647;
  }
 } while (0);
 d29 = +Math_ceil(d28);
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i31 = -2147483648;
    break;
   }
   i31 = ~~d29;
  } else {
   i31 = 2147483647;
  }
 } while (0);
 HEAP32[i18 >> 2] = i30;
 HEAP32[i18 + 4 >> 2] = i31;
 HEAP8[i12] = 0;
 i31 = __ZN3WTF10fastMallocEj(144) | 0;
 i30 = i31;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i30, i18, +1, 0, 0, i12);
 if ((HEAP8[i12] & 1) == 0) {
  if ((i31 | 0) == 0) {
   STACKTOP = i11;
   return;
  }
  __ZN7WebCore11ImageBufferD1Ev(i30);
  __ZN3WTF8fastFreeEPv(i31);
  STACKTOP = i11;
  return;
 }
 if ((i31 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i12 = __ZNK7WebCore11ImageBuffer7contextEv(i30) | 0;
 HEAP32[i19 >> 2] = i3;
 HEAP32[i19 + 4 >> 2] = i24;
 __ZN7WebCore8SVGImage16drawForContainerEPNS_15GraphicsContextENS_9FloatSizeEfRKNS_9FloatRectES6_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i1, i12, i19, d4, i17, i15, 0, 2, 0);
 if (__ZNK7WebCore15GraphicsContext17drawLuminanceMaskEv(i2) | 0) {
  __ZN7WebCore11ImageBuffer22convertToLuminanceMaskEv(i30);
 }
 __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i20, i30, 1, 1);
 i15 = i20 | 0;
 i20 = HEAP32[i15 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 i15 = i1 + 16 | 0;
 i1 = HEAP32[i15 + 4 >> 2] | 0;
 i17 = i20 + 16 | 0;
 HEAP32[i17 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i17 + 4 >> 2] = i1;
 i1 = i21;
 i17 = i5;
 HEAP32[i1 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 __ZN7WebCore9FloatRect5scaleEff(i21, d25, d26);
 i17 = i22;
 i1 = i6;
 HEAP32[i17 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i17 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i17 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i17 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP32[i17 + 16 >> 2] = HEAP32[i1 + 16 >> 2];
 HEAP32[i17 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 HEAP32[i17 + 24 >> 2] = HEAP32[i1 + 24 >> 2];
 HEAP32[i17 + 28 >> 2] = HEAP32[i1 + 28 >> 2];
 HEAP32[i17 + 32 >> 2] = HEAP32[i1 + 32 >> 2];
 HEAP32[i17 + 36 >> 2] = HEAP32[i1 + 36 >> 2];
 HEAP32[i17 + 40 >> 2] = HEAP32[i1 + 40 >> 2];
 HEAP32[i17 + 44 >> 2] = HEAP32[i1 + 44 >> 2];
 __ZN7WebCore15AffineTransform5scaleEdd(i22, +1 / d25, +1 / d26) | 0;
 __ZN7WebCore15GraphicsContext20setDrawLuminanceMaskEb(i2, 0);
 FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i20 >> 2] | 0) + 88 >> 2] & 3](i20, i2, i21, i22, i7, i8, i9, i10, 0);
 do {
  if ((i20 | 0) != 0) {
   i10 = i20 + 4 | 0;
   i9 = i10 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i9 >> 2] = i8;
    break;
   }
   i8 = i10 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 __ZN7WebCore11ImageBufferD1Ev(i30);
 __ZN3WTF8fastFreeEPv(i31);
 STACKTOP = i11;
 return;
}
function __ZN7WebCore8SVGImage11dataChangedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i4 = i3 | 0;
 i5 = i3 + 40 | 0;
 i6 = i3 + 48 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 104 | 0;
 i9 = i8;
 i10 = i1 + 8 | 0;
 if ((__ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i10 >> 2] | 0) | 0) == 0) {
  i11 = 1;
  STACKTOP = i3;
  return i11 | 0;
 }
 if (i2) {
  __ZN7WebCore4Page11PageClientsC1Ev(i4);
  __ZN7WebCore20fillWithEmptyClientsERNS_4Page11PageClientsE(i4);
  i2 = __ZN3WTF10fastMallocEj(8) | 0;
  i12 = i2;
  HEAP32[i2 >> 2] = H_BASE + 160;
  HEAP32[i2 + 4 >> 2] = i1;
  i2 = i1 + 24 | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i12;
  if ((i13 | 0) == 0) {
   i14 = i12;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 476 >> 2] & 63](i13);
   i14 = HEAP32[i2 >> 2] | 0;
  }
  HEAP32[i4 + 4 >> 2] = i14;
  i14 = __Znwj(1208) | 0;
  __ZN7WebCore4PageC1ERNS0_11PageClientsE(i14, i4);
  i2 = i1 + 28 | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i14;
  if ((i13 | 0) == 0) {
   i15 = i14;
  } else {
   __ZN7WebCore4PageD1Ev(i13);
   __ZdlPv(i13);
   i15 = HEAP32[i2 >> 2] | 0;
  }
  i13 = (HEAP32[i15 + 48 >> 2] | 0) + 186 | 0;
  HEAP8[i13] = HEAP8[i13] & 127;
  __ZN7WebCore8Settings16setScriptEnabledEb(HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] | 0, 0);
  __ZN7WebCore8Settings17setPluginsEnabledEb(HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] | 0, 0);
  i13 = HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] | 0;
  i15 = i13;
  __ZN7WebCore9FrameView6createERNS_5FrameE(i5, i15);
  __ZN7WebCore5Frame7setViewEN3WTF10PassRefPtrINS_9FrameViewEEE(i15, i5);
  i15 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i15 | 0) != 0) {
    i5 = i15 + 4 | 0;
    i14 = i5 | 0;
    i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) != 0) {
     HEAP32[i14 >> 2] = i12;
     break;
    }
    i12 = i5 - 4 | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
   }
  } while (0);
  i15 = i13 + 80 | 0;
  __ZN7WebCore11FrameLoader4initEv(i15);
  HEAP32[i13 + 308 >> 2] = -1;
  i12 = i13 + 452 | 0;
  __ZN7WebCore9FrameView20setCanHaveScrollbarsEb(HEAP32[i12 >> 2] | 0, 0);
  __ZN7WebCore9FrameView14setTransparentEb(HEAP32[i12 >> 2] | 0, 1);
  i12 = __ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0;
  __ZN3WTF6StringC1EPKc(i6, H_BASE + 16 | 0);
  i13 = i6 | 0;
  i6 = HEAP32[i13 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
  }
  i5 = i12 + 92 | 0;
  i12 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i6;
  do {
   if ((i12 | 0) != 0) {
    i6 = i12 | 0;
    i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i6 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i13 = i12 | 0;
    i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i13 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i12 = (__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) + 84 | 0;
  i5 = i7 | 0;
  HEAP32[i5 >> 2] = 0;
  __ZN7WebCore3URL10invalidateEv(i7);
  __ZN7WebCore14DocumentWriter5beginERKNS_3URLEbPNS_8DocumentE(i12, i7, 1, 0);
  i7 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i5 = i7 | 0;
    i12 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i12 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i7);
     break;
    } else {
     HEAP32[i5 >> 2] = i12;
     break;
    }
   }
  } while (0);
  i7 = (__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) + 84 | 0;
  i12 = __ZNK7WebCore12SharedBuffer4dataEv(HEAP32[i10 >> 2] | 0) | 0;
  __ZN7WebCore14DocumentWriter7addDataEPKcj(i7, i12, __ZNK7WebCore12SharedBuffer4sizeEv(HEAP32[i10 >> 2] | 0) | 0);
  __ZN7WebCore14DocumentWriter3endEv((__ZNK7WebCore11FrameLoader20activeDocumentLoaderEv(i15) | 0) + 84 | 0);
  __ZNK7WebCore8SVGImage13containerSizeEv(i9, i1);
  i9 = i1 + 32 | 0;
  i15 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = i15;
  __ZN7WebCore4Page11PageClientsD1Ev(i4);
  i16 = i2;
 } else {
  i16 = i1 + 28 | 0;
 }
 i11 = (HEAP32[i16 >> 2] | 0) != 0;
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCore8SVGImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i12 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i9, i1, 0);
 i12 = i2;
 i13 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i12 + 4 >> 2] = i13;
 HEAP8[i9 + 5 | 0] = 0;
 __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i11, i1, 0);
 i9 = i3;
 i13 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i9 + 4 >> 2] = i13;
 HEAP8[i11 + 5 | 0] = 0;
 i11 = __ZN7WebCore13SVGSVGElement31preserveAspectRatioPropertyInfoEv() | 0;
 i13 = i1 | 0;
 i9 = HEAP32[i11 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i13;
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i9 | 0) == 0) {
   i14 = 7;
  } else {
   i6 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i14 = 7;
    break;
   }
   if ((HEAP8[i6 + 20 | 0] & 1) == 0) {
    i14 = 7;
    break;
   }
   i15 = HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 20 >> 2] | 0;
  }
 } while (0);
 if ((i14 | 0) == 7) {
  i15 = i1 + 252 | 0;
 }
 if ((HEAP32[i15 >> 2] & 65535) << 16 >> 16 == 1) {
  STACKTOP = i5;
  return;
 }
 i15 = __ZN7WebCore13SVGSVGElement19viewBoxPropertyInfoEv() | 0;
 i9 = HEAP32[i15 + 12 >> 2] | 0;
 HEAP32[i7 >> 2] = i13;
 HEAP32[i7 + 4 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i7) | 0;
 do {
  if ((i9 | 0) == 0) {
   i14 = 13;
  } else {
   i7 = HEAP32[i9 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i14 = 13;
    break;
   }
   if ((HEAP8[i7 + 20 | 0] & 1) == 0) {
    i14 = 13;
    break;
   }
   i16 = HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 20 >> 2] | 0;
  }
 } while (0);
 if ((i14 | 0) == 13) {
  i16 = i1 + 232 | 0;
 }
 i1 = i16 + 8 | 0;
 i16 = HEAP32[i1 >> 2] | 0;
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4;
 HEAP32[i1 >> 2] = i16;
 HEAP32[i1 + 4 >> 2] = i14;
 do {
  if ((HEAP32[tempDoublePtr >> 2] = i16, +HEAPF32[tempDoublePtr >> 2]) > +0) {
   if ((HEAP32[tempDoublePtr >> 2] = i14, +HEAPF32[tempDoublePtr >> 2]) <= +0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((HEAP8[i2 + 5 | 0] | 0) != 3) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP8[i3 + 5 | 0] | 0) != 3) {
  STACKTOP = i5;
  return;
 }
 d17 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i2, +0, 0);
 d18 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i3, +0, 0);
 d19 = +d17;
 d17 = +d18;
 HEAPF32[i1 >> 2] = d19;
 HEAPF32[i1 + 4 >> 2] = d17;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore8SVGImage26nativeImageForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 48 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP32[i2 + 28 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
  STACKTOP = i3;
  return;
 }
 i18 = i2 + 32 | 0;
 i19 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i7 + 4 >> 2] = i19;
 HEAP8[i6] = 0;
 i19 = __ZN3WTF10fastMallocEj(144) | 0;
 i18 = i19;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i18, i7, +1, 0, 0, i6);
 do {
  if ((HEAP8[i6] & 1) == 0) {
   if ((i19 | 0) == 0) {
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i18);
   __ZN3WTF8fastFreeEPv(i19);
  } else {
   if ((i19 | 0) == 0) {
    break;
   }
   i7 = __ZNK7WebCore11ImageBuffer7contextEv(i18) | 0;
   i20 = i2 | 0;
   i21 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 48 >> 2] & 127](i5, i20);
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   i22 = i9 + 8 | 0;
   i23 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i22 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i22 + 4 >> 2] = i23;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i8, i11);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 48 >> 2] & 127](i4, i20);
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   i20 = i13 + 8 | 0;
   i21 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i20 + 4 >> 2] = i21;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i12, i15);
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 1;
   __ZN7WebCore8SVGImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i2, i7, i8, i12, 0, 2, 0, i16);
   __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i17, i18, 0, 0);
   i7 = i17 | 0;
   i21 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 80 >> 2] & 127](i1, i21);
   i21 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i7 = i21 + 4 | 0;
     i20 = i7 | 0;
     i23 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) != 0) {
      HEAP32[i20 >> 2] = i23;
      break;
     }
     i23 = i7 - 4 | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
    }
   } while (0);
   __ZN7WebCore11ImageBufferD1Ev(i18);
   __ZN3WTF8fastFreeEPv(i19);
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8SVGImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, d18 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i9 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i5 | 0;
 i8 = i5 + 16 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 48 | 0;
 i12 = i5 + 56 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i15 = HEAP32[(HEAP32[i14 + 60 >> 2] | 0) + 452 >> 2] | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i2, i6, i7);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i10, i3);
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i10);
 i10 = (i6 | 0) != 2;
 if (i10) {
  __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i2, +1);
 }
 d16 = +HEAPF32[i3 + 8 >> 2] / +HEAPF32[i4 + 8 >> 2];
 d17 = +HEAPF32[i3 + 12 >> 2] / +HEAPF32[i4 + 12 >> 2];
 HEAPF32[i11 >> 2] = d16;
 HEAPF32[i11 + 4 >> 2] = d17;
 i6 = i4;
 d18 = d16 * +HEAPF32[i6 >> 2];
 d16 = d17 * +HEAPF32[i6 + 4 >> 2];
 i6 = i3;
 d17 = +HEAPF32[i6 >> 2];
 __ZN7WebCore15GraphicsContext9translateEff(i2, d17 - d18, +HEAPF32[i6 + 4 >> 2] - d16);
 __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i2, i11);
 i11 = i15 | 0;
 __ZNK7WebCore8SVGImage13containerSizeEv(i12, i1);
 i6 = i8 | 0;
 i3 = HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0;
 i7 = i9 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i9, i11);
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = i9;
 i9 = i8 + 8 | 0;
 i6 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i9 + 4 >> 2] = i6;
 FUNCTION_TABLE_vii[i3 & 127](i11, i8);
 if (__ZNK7WebCore9FrameView11needsLayoutEv(i15) | 0) {
  __ZN7WebCore9FrameView6layoutEb(i15, 1);
 }
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i13, i4);
 __ZN7WebCore10ScrollView5paintEPNS_15GraphicsContextERKNS_7IntRectE(i15 | 0, i2, i13);
 if (i10) {
  __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i2);
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 127](i2, i1 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore8SVGImage23hasSingleSecurityOriginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = i1 + 36 | 0;
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 0;
   break;
  }
  if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
   i2 = i4 + 28 | 0;
  } else {
   i6 = 6;
   break;
  }
 }
 L10 : do {
  if ((i6 | 0) == 6) {
   i2 = i1 | 0;
   i7 = i4;
   L12 : while (1) {
    i8 = i7;
    i9 = HEAP32[i7 + 44 >> 2] | 0;
    i10 = HEAP32[__ZN7WebCore8SVGNames16foreignObjectTagE >> 2] | 0;
    if ((i9 | 0) == (i10 | 0)) {
     i5 = i8;
     break L10;
    }
    if ((HEAP32[i9 + 12 >> 2] | 0) == (HEAP32[i10 + 12 >> 2] | 0)) {
     if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i10 + 16 >> 2] | 0)) {
      i5 = i8;
      break L10;
     }
    }
    i8 = HEAP32[i7 + 36 >> 2] | 0;
    do {
     if ((i8 | 0) == 0) {
      if ((i7 | 0) == (i2 | 0)) {
       i5 = 0;
       break L10;
      }
      i10 = HEAP32[i7 + 28 >> 2] | 0;
      if ((i10 | 0) != 0) {
       i11 = i10;
       break;
      }
      i10 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i7, i2) | 0;
      if ((i10 | 0) == 0) {
       i5 = 0;
       break L10;
      } else {
       i11 = i10;
      }
     } else {
      i11 = i8;
     }
    } while (0);
    if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
     i12 = i11;
    } else {
     i7 = i11;
     continue;
    }
    while (1) {
     if ((i12 | 0) == (i2 | 0)) {
      i5 = 0;
      break L10;
     }
     i8 = HEAP32[i12 + 28 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i10 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i12, i2) | 0;
      if ((i10 | 0) == 0) {
       i5 = 0;
       break L10;
      } else {
       i13 = i10;
      }
     } else {
      i13 = i8;
     }
     if ((HEAP32[i13 + 12 >> 2] & 4 | 0) == 0) {
      i12 = i13;
     } else {
      i7 = i13;
      continue L12;
     }
    }
   }
  }
 } while (0);
 i3 = (i5 | 0) == 0;
 return i3 | 0;
}
function __ZNK7WebCore8SVGImage13containerSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = HEAP32[i2 + 28 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i2 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i9 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 32 | 0;
 if ((HEAP32[i2 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i9 | 0;
 } else {
  i10 = HEAP32[i9 >> 2] | 0;
 }
 i9 = HEAP32[i10 >> 2] | 0;
 if ((i9 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i3;
  return;
 }
 i10 = i9 + 100 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i11;
 if (!((i9 | 0) < 1 | (i10 | 0) < 1)) {
  i12 = i1;
  HEAP32[i12 >> 2] = i9 & -1;
  HEAP32[i12 + 4 >> 2] = i10 | i11 & 0;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i4, i2, 0);
 i11 = i4 + 5 | 0;
 i10 = HEAP8[i11] | 0;
 if (i10 << 24 >> 24 == 3) {
  __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i5, i2, 0);
  i12 = HEAP8[i5 + 5 | 0] | 0;
  if (i12 << 24 >> 24 == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
  }
  i13 = i12 << 24 >> 24 == 3;
  i14 = HEAP8[i11] | 0;
 } else {
  i13 = 0;
  i14 = i10;
 }
 if (i14 << 24 >> 24 == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if (i13) {
  __ZNK7WebCore13SVGSVGElement19currentViewportSizeEv(i7, i2);
  i15 = i6;
 } else {
  __ZNK7WebCore13SVGSVGElement18currentViewBoxRectEv(i8, i2);
  i15 = i8 + 8 | 0;
 }
 d16 = +HEAPF32[i15 >> 2];
 d17 = +HEAPF32[i15 + 4 >> 2];
 if (d16 <= +0 | d17 <= +0) {
  HEAP32[i1 >> 2] = 300;
  HEAP32[i1 + 4 >> 2] = 150;
  STACKTOP = i3;
  return;
 } else {
  i15 = ~~+Math_ceil(d17);
  HEAP32[i1 >> 2] = ~~+Math_ceil(d16);
  HEAP32[i1 + 4 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore8SVGImage16drawForContainerEPNS_15GraphicsContextENS_9FloatSizeEfRKNS_9FloatRectES6_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3, d4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, i17 = 0, d18 = +0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 i10 = i7 | 0;
 i11 = i7 + 8 | 0;
 i12 = i7 + 24 | 0;
 if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i13 = i1 + 12 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 d15 = +HEAPF32[i3 >> 2];
 d16 = +_round(+d15);
 do {
  if (d16 < +2147483647) {
   if (d16 <= +-2147483648) {
    i17 = -2147483648;
    break;
   }
   i17 = ~~d16;
  } else {
   i17 = 2147483647;
  }
 } while (0);
 d16 = +HEAPF32[i3 + 4 >> 2];
 d18 = +_round(+d16);
 do {
  if (d18 < +2147483647) {
   if (d18 <= +-2147483648) {
    i19 = -2147483648;
    break;
   }
   i19 = ~~d18;
  } else {
   i19 = 2147483647;
  }
 } while (0);
 i3 = i10 | 0;
 HEAP32[i3 >> 2] = i17;
 i17 = i10 + 4 | 0;
 HEAP32[i17 >> 2] = i19;
 __ZN7WebCore8SVGImage16setContainerSizeERKNS_7IntSizeE(i1, i10);
 i10 = i11;
 i19 = i6;
 HEAP32[i10 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
 d18 = +1 / d4;
 __ZN7WebCore9FloatRect5scaleEff(i11, d18, d18);
 i19 = i11 + 8 | 0;
 d18 = +HEAPF32[i19 >> 2];
 d4 = +HEAPF32[i19 + 4 >> 2] * (+(HEAP32[i17 >> 2] | 0) / d16);
 d16 = +(d18 * (+(HEAP32[i3 >> 2] | 0) / d15));
 d15 = +d4;
 HEAPF32[i19 >> 2] = d16;
 HEAPF32[i19 + 4 >> 2] = d15;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 1;
 __ZN7WebCore8SVGImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1, i2, i5, i11, 0, i8, i9, i12);
 HEAP32[i13 >> 2] = i14;
 STACKTOP = i7;
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 9;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 11;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 9) {
  return i8 | 0;
 } else if ((i12 | 0) == 11) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore8SVGImage16setContainerSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i1 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i8 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i9 + 32 | 0;
 if ((HEAP32[i9 + 12 >> 2] & 2048 | 0) == 0) {
  i10 = i8 | 0;
 } else {
  i10 = HEAP32[i8 >> 2] | 0;
 }
 i8 = HEAP32[i10 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i11 = HEAP32[(HEAP32[i10 + 60 >> 2] | 0) + 452 >> 2] | 0;
 }
 i10 = i11 | 0;
 __ZNK7WebCore8SVGImage13containerSizeEv(i6, i1);
 i1 = i5 | 0;
 i7 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
 i11 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i10);
 i4 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i5 + 8 | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 FUNCTION_TABLE_vii[i7 & 127](i10, i5);
 i5 = i2;
 i2 = i8 + 100 | 0;
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i8;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore8SVGImageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore11FrameLoader13frameDetachedEv((HEAP32[i3 + 60 >> 2] | 0) + 80 | 0);
   __ZN7WebCore4PageD1Ev(i3);
   __ZdlPv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore4PageD1Ev(i4);
   __ZdlPv(i4);
  }
 } while (0);
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore5ImageD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 476 >> 2] & 63](i3);
 i5 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i5);
 return;
}
function __ZN7WebCore8SVGImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   __ZN7WebCore11FrameLoader13frameDetachedEv((HEAP32[i3 + 60 >> 2] | 0) + 80 | 0);
   __ZN7WebCore4PageD1Ev(i3);
   __ZdlPv(i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore4PageD1Ev(i4);
   __ZdlPv(i4);
  }
 } while (0);
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore5ImageD2Ev(i5);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 476 >> 2] & 63](i3);
 i5 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i5);
 return;
}
function __ZNK7WebCore8SVGImage17hasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i4 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore13SVGSVGElement15intrinsicHeightENS0_15ConsiderCSSModeE(i3, i1, 0);
 i1 = HEAP8[i3 + 5 | 0] | 0;
 i4 = i1 << 24 >> 24 == 10;
 i6 = i1 << 24 >> 24 == 2 | i4;
 if (!i4) {
  i5 = i6;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 i5 = i6;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore8SVGImage16hasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i4 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore13SVGSVGElement14intrinsicWidthENS0_15ConsiderCSSModeE(i3, i1, 0);
 i1 = HEAP8[i3 + 5 | 0] | 0;
 i4 = i1 << 24 >> 24 == 10;
 i6 = i1 << 24 >> 24 == 2 | i4;
 if (!i4) {
  i5 = i6;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 i5 = i6;
 STACKTOP = i2;
 return i5 | 0;
}
function viiiiiiiii___ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
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
function __ZNK7WebCore8SVGImage18embeddedContentBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i2 | 0;
 } else {
  i4 = HEAP32[i2 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 return i3 | 0;
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
function __ZN7WebCore20SVGImageChromeClient29invalidateContentsAndRootViewERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 63](i1, i3 | 0, i2);
 return;
}
function viiiiiii___ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb__wrapper(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function __ZN7WebCore8SVGImage14startAnimationEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13SVGSVGElement17unpauseAnimationsEv(i1);
 __ZN7WebCore13SVGSVGElement14setCurrentTimeEf(i1, +0);
 return;
}
function __ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 7](i1, i2, i4, i5, i6, i7, i8);
 return;
}
function __ZN7WebCore12isInSVGImageEPKNS_7ElementE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 412 >> 2] & 63](i1) | 0;
 return i3 | 0;
}
function viiiii___ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore8SVGImage14resetAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13SVGSVGElement15pauseAnimationsEv(i1);
 return;
}
function __ZN7WebCore8SVGImage13stopAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = __ZNK7WebCore11SVGDocument11rootElementEv(HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 456 >> 2] | 0) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 __ZN7WebCore13SVGSVGElement15pauseAnimationsEv(i1);
 return;
}
function __ZNK7WebCore17EmptyChromeClient16rootViewToScreenERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1;
 i1 = i3;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 FUNCTION_TABLE_viiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function iiii___ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZN7WebCore17EmptyChromeClient19addMessageToConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return;
}
function __ZNK7WebCore17EmptyChromeClient16screenToRootViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i3;
 i3 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore8SVGImage9frameViewEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + 452 >> 2] | 0;
 return i3 | 0;
}
function viii___ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore17EmptyChromeClient12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return 1;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore8SVGImageC2EPNS_13ImageObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 _memset(i1 + 24 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore8SVGImageC1EPNS_13ImageObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 40;
 _memset(i1 + 24 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore8SVGImage4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 32 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function v___ZN7WebCore17EmptyChromeClient12runOpenPanelEPNS_5FrameEN3WTF10PassRefPtrINS_11FileChooserEEE__wrapper() {
 __ZN7WebCore17EmptyChromeClient12runOpenPanelEPNS_5FrameEN3WTF10PassRefPtrINS_11FileChooserEEE();
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function v___ZN7WebCore17EmptyChromeClient18createColorChooserEPNS_18ColorChooserClientERKNS_5ColorE__wrapper() {
 __ZN7WebCore17EmptyChromeClient18createColorChooserEPNS_18ColorChooserClientERKNS_5ColorE();
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient16loadIconForFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_14FileIconLoaderE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient21exceededDatabaseQuotaEPNS_5FrameERKN3WTF6StringENS_15DatabaseDetailsE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(9);
}
function v___ZNK7WebCore17EmptyChromeClient21createSearchPopupMenuEPNS_15PopupMenuClientE__wrapper() {
 __ZNK7WebCore17EmptyChromeClient21createSearchPopupMenuEPNS_15PopupMenuClientE();
}
function __ZN7WebCore17EmptyChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient34reachedApplicationCacheOriginQuotaEPNS_14SecurityOriginEx(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function v___ZNK7WebCore17EmptyChromeClient15createPopupMenuEPNS_15PopupMenuClientE__wrapper() {
 __ZNK7WebCore17EmptyChromeClient15createPopupMenuEPNS_15PopupMenuClientE();
}
function b7(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(7);
}
function __ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient6scrollERKNS_7IntSizeERKNS_7IntRectES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient23attachRootGraphicsLayerEPNS_5FrameEPNS_13GraphicsLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore12ChromeClient17minimumWindowSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAPF32[i1 >> 2] = +100;
 HEAPF32[i1 + 4 >> 2] = +100;
 return;
}
function vi___ZN7WebCore12ChromeClient23annotatedRegionsChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12ChromeClient23annotatedRegionsChangedEv(i1 | 0);
}
function __ZN7WebCore17EmptyChromeClient20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient31invalidateContentsForSlowScrollERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore17EmptyChromeClient19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient23mouseDidMoveOverElementERKNS_13HitTestResultEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vi___ZN7WebCore12ChromeClient20populateVisitedLinksEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12ChromeClient20populateVisitedLinksEv(i1 | 0);
}
function __ZN7WebCore17EmptyChromeClient18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient10setToolTipERKN3WTF6StringENS_13TextDirectionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function b6(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(6);
}
function __ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
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
function __ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient13underlayColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function __ZNK7WebCore8SVGImage17filenameExtensionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 8 | 0);
 return;
}
function __ZN7WebCore17EmptyChromeClient18invalidateRootViewERKNS_7IntRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore17EmptyChromeClient17windowResizerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore5Image10solidColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP8[i1 + 4 | 0] = 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient22reachedMaxAppCacheSizeEx(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient10windowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient24delegatedScrollRequestedERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
 return 0;
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
function __ZN7WebCore17EmptyChromeClient8pageRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient17plugInExtraScriptEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore5Image26orientationForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 1;
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
function __ZN7WebCore17EmptyChromeClient21focusedElementChangedEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient12canTakeFocusENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZNK7WebCore17EmptyChromeClient18scrollRectIntoViewERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore8SVGImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8SVGImageD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient46selectItemAlignmentFollowsMenuWritingDirectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient30setCursorHiddenUntilMouseMovesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient16setStatusbarTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient19focusedFrameChangedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient28numWheelEventHandlersChangedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient18formStateDidChangeEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient13setWindowRectERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient9takeFocusENS_14FocusDirectionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20SVGImageChromeClient15chromeDestroyedEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient15elementDidFocusEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient14elementDidBlurEPKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZN7WebCore17EmptyChromeClient9setCursorERKNS_6CursorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient20setScrollbarsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient37setNeedsOneShotDrawingSynchronizationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient35selectItemWritingDirectionIsNaturalEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient19setStatusbarVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient18setToolbarsVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient17setMenubarVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function __ZN7WebCore17EmptyChromeClient5printEPNS_5FrameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient30canRunBeforeUnloadConfirmPanelEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image10getHotSpotERNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore20SVGImageChromeClientD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17EmptyChromeClient12setResizableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv(i1) {
 i1 = i1 | 0;
 return -1 | 0;
}
function __ZN7WebCore17EmptyChromeClient29scheduleCompositingLayerFlushEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore20SVGImageChromeClient22isSVGImageChromeClientEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore17EmptyChromeClient25shouldNotifyOnFormChangesEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient25shouldInterruptJavaScriptEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore8SVGImage18destroyDecodedDataEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
}
function __ZNK7WebCore17EmptyChromeClient23scrollbarsModeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17EmptyChromeClient19isEmptyChromeClientEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore17EmptyChromeClient18platformPageClientEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore8SVGImage27currentFrameKnownToBeOpaqueEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient17scrollbarsVisibleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient24incrementActivePageCountEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClient24disableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12ChromeClient24decrementActivePageCountEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient16statusbarVisibleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12ChromeClient23enableSuddenTerminationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore17EmptyChromeClient14hasOpenedPopupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient15toolbarsVisibleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function __ZN7WebCore17EmptyChromeClient14menubarVisibleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient14keyboardUIModeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore17EmptyChromeClient15closeWindowSoonEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient11canRunModalEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8SVGImage17usesContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore5Image21mayFillWithSolidColorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image18isPDFDocumentImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(13);
}
function __ZN7WebCore17EmptyChromeClient8runModalEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient7unfocusEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient5focusEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore8SVGImage10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5Image13isBitmapImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore20SVGImageChromeClientD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore17EmptyChromeClient4showEv(i1) {
 i1 = i1 | 0;
 return;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,__ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN7WebCore12ChromeClient19customHighlightRectEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectE__wrapper,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore17EmptyChromeClient5focusEv,b2,__ZN7WebCore20SVGImageChromeClientD1Ev,b2,__ZN7WebCore12ChromeClient23enableSuddenTerminationEv,b2,__ZN7WebCore17EmptyChromeClient8runModalEv,b2,__ZN7WebCore8SVGImageD2Ev,b2,__ZN7WebCore20SVGImageChromeClientD0Ev,b2,__ZN7WebCore8SVGImageD0Ev,b2,__ZN7WebCore8SVGImage13stopAnimationEv,b2,__ZN7WebCore8SVGImage14resetAnimationEv,b2,__ZN7WebCore17EmptyChromeClient37setNeedsOneShotDrawingSynchronizationEv,b2,__ZN7WebCore12ChromeClient24incrementActivePageCountEv,b2,__ZN7WebCore17EmptyChromeClient15closeWindowSoonEv,b2,vi___ZN7WebCore12ChromeClient20populateVisitedLinksEv__wrapper,b2,__ZN7WebCore17EmptyChromeClient17scheduleAnimationEv
  ,b2,vi___ZN7WebCore12ChromeClient23annotatedRegionsChangedEv__wrapper,b2,__ZN7WebCore17EmptyChromeClient4showEv,b2,__ZNK7WebCore17EmptyChromeClient23scrollbarsModeDidChangeEv,b2,__ZN7WebCore20SVGImageChromeClient15chromeDestroyedEv,b2,__ZN7WebCore17EmptyChromeClient29scheduleCompositingLayerFlushEv,b2,__ZN7WebCore17EmptyChromeClient7unfocusEv,b2,__ZN7WebCore12ChromeClient24decrementActivePageCountEv,b2,__ZN7WebCore12ChromeClient24disableSuddenTerminationEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE,b3,__ZN7WebCore5Image26orientationForCurrentFrameEv,b3,__ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE,b3,__ZN7WebCore17EmptyChromeClient19setStatusbarVisibleEb,b3,__ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE,b3,__ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE,b3,__ZN7WebCore17EmptyChromeClient18setToolbarsVisibleEb,b3,__ZN7WebCore17EmptyChromeClient16setStatusbarTextERKN3WTF6StringE,b3,__ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE,b3,__ZNK7WebCore17EmptyChromeClient17windowResizerRectEv,b3,__ZNK7WebCore12ChromeClient17minimumWindowSizeEv,b3,__ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv,b3,__ZN7WebCore17EmptyChromeClient12setResizableEb,b3,__ZN7WebCore17EmptyChromeClient14elementDidBlurEPKNS_4NodeE
  ,b3,__ZNK7WebCore12ChromeClient17plugInExtraScriptEv,b3,__ZNK7WebCore12ChromeClient13underlayColorEv,b3,__ZN7WebCore8SVGImage26nativeImageForCurrentFrameEv,b3,__ZN7WebCore17EmptyChromeClient21focusedElementChangedEPNS_7ElementE,b3,__ZN7WebCore17EmptyChromeClient18formStateDidChangeEPKNS_4NodeE,b3,__ZN7WebCore17EmptyChromeClient17setMenubarVisibleEb,b3,__ZN7WebCore17EmptyChromeClient30setCursorHiddenUntilMouseMovesEb,b3,__ZN7WebCore17EmptyChromeClient9takeFocusENS_14FocusDirectionE,b3,__ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE,b3,__ZN7WebCore17EmptyChromeClient5printEPNS_5FrameE,b3,__ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE,b3,__ZN7WebCore17EmptyChromeClient15elementDidFocusEPKNS_4NodeE,b3,__ZN7WebCore17EmptyChromeClient13setWindowRectERKNS_9FloatRectE,b3,__ZN7WebCore17EmptyChromeClient9setCursorERKNS_6CursorE,b3,__ZNK7WebCore8SVGImage4sizeEv
  ,b3,__ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv,b3,__ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE,b3,__ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE,b3,__ZN7WebCore17EmptyChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE,b3,__ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi,b3,__ZN7WebCore17EmptyChromeClient8pageRectEv,b3,__ZN7WebCore8SVGImage18destroyDecodedDataEb,b3,__ZN7WebCore17EmptyChromeClient28numWheelEventHandlersChangedEj,b3,__ZNK7WebCore8SVGImage17filenameExtensionEv,b3,__ZNK7WebCore5Image10solidColorEv,b3,__ZN7WebCore17EmptyChromeClient10windowRectEv,b3,__ZN7WebCore8SVGImageC2EPNS_13ImageObserverE,b3,__ZN7WebCore8SVGImage14startAnimationEb,b3,__ZN7WebCore17EmptyChromeClient20setScrollbarsVisibleEb,b3,__ZN7WebCore8SVGImage16setContainerSizeERKNS_7IntSizeE
  ,b3,__ZN7WebCore17EmptyChromeClient24delegatedScrollRequestedERKNS_8IntPointE,b3,__ZN7WebCore17EmptyChromeClient19focusedFrameChangedEPNS_5FrameE,b3,__ZNK7WebCore17EmptyChromeClient18scrollRectIntoViewERKNS_7IntRectE,b3,__ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZN7WebCore17EmptyChromeClient17scrollbarsVisibleEv,b4,__ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv,b4,__ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv,b4,__ZN7WebCore17EmptyChromeClient25shouldNotifyOnFormChangesEv,b4,__ZN7WebCore17EmptyChromeClient14keyboardUIModeEv,b4,__ZN7WebCore17EmptyChromeClient16statusbarVisibleEv,b4,__ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv,b4,__ZN7WebCore17EmptyChromeClient46selectItemAlignmentFollowsMenuWritingDirectionEv,b4,__ZNK7WebCore17EmptyChromeClient18platformPageClientEv,b4,__ZN7WebCore17EmptyChromeClient14menubarVisibleEv,b4,__ZNK7WebCore8SVGImage23hasSingleSecurityOriginEv,b4,__ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv,b4,__ZN7WebCore17EmptyChromeClient15toolbarsVisibleEv,b4,__ZNK7WebCore5Image13isBitmapImageEv
  ,b4,__ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv,b4,__ZNK7WebCore8SVGImage17usesContainerSizeEv,b4,__ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv,b4,__ZNK7WebCore8SVGImage17hasRelativeHeightEv,b4,__ZNK7WebCore17EmptyChromeClient19isEmptyChromeClientEv,b4,__ZN7WebCore5Image21mayFillWithSolidColorEv,b4,__ZNK7WebCore5Image18isPDFDocumentImageEv,b4,__ZN7WebCore17EmptyChromeClient11canRunModalEv,b4,__ZNK7WebCore8SVGImage10isSVGImageEv,b4,__ZN7WebCore17EmptyChromeClient25shouldInterruptJavaScriptEv,b4,__ZN7WebCore17EmptyChromeClient30canRunBeforeUnloadConfirmPanelEv,b4,__ZNK7WebCore20SVGImageChromeClient22isSVGImageChromeClientEv,b4,__ZNK7WebCore17EmptyChromeClient14hasOpenedPopupEv,b4,__ZN7WebCore8SVGImage27currentFrameKnownToBeOpaqueEv,b4,__ZN7WebCore17EmptyChromeClient35selectItemWritingDirectionIsNaturalEv
  ,b4,__ZNK7WebCore8SVGImage16hasRelativeWidthEv,b4,__ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZN7WebCore17EmptyChromeClient27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE,b5,iiii___ZN7WebCore12ChromeClient39shouldReplaceWithGeneratedFileForUploadERKN3WTF6StringERS2___wrapper,b5,__ZN7WebCore17EmptyChromeClient20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE,b5,__ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viiiiiii = [b6,b6,viiiiiii___ZN7WebCore12ChromeClient20paintCustomHighlightEPNS_4NodeERKN3WTF12AtomicStringERKNS_9FloatRectES9_bb__wrapper,b6,__ZN7WebCore17EmptyChromeClient19addMessageToConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS6_,b6,b6,b6];
  var FUNCTION_TABLE_viiiiiiii = [b7,b7,__ZN7WebCore8SVGImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE,b7,__ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8,v___ZN7WebCore17EmptyChromeClient18createColorChooserEPNS_18ColorChooserClientERKNS_5ColorE__wrapper,b8,v___ZNK7WebCore17EmptyChromeClient15createPopupMenuEPNS_15PopupMenuClientE__wrapper,b8,v___ZN7WebCore17EmptyChromeClient12runOpenPanelEPNS_5FrameEN3WTF10PassRefPtrINS_11FileChooserEEE__wrapper,b8,v___ZNK7WebCore17EmptyChromeClient21createSearchPopupMenuEPNS_15PopupMenuClientE__wrapper,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_viiiiiiiii = [b9,b9,viiiiiiiii___ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE__wrapper,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,__ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_,b10,__ZN7WebCore17EmptyChromeClient21exceededDatabaseQuotaEPNS_5FrameERKN3WTF6StringENS_15DatabaseDetailsE,b10,__ZN7WebCore8SVGImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE,b10,__ZN7WebCore17EmptyChromeClient6scrollERKNS_7IntSizeERKNS_7IntRectES6_,b10,__ZN7WebCore17EmptyChromeClient34reachedApplicationCacheOriginQuotaEPNS_14SecurityOriginEx,b10,b10,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZN7WebCore17EmptyChromeClient12canTakeFocusENS_14FocusDirectionE,b11,__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE,b11,__ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE,b11,__ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE,b11,__ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE,b11,__ZN7WebCore8SVGImage11dataChangedEb,b11,b11,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,__ZN7WebCore17EmptyChromeClient12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE,b12,__ZN7WebCore17EmptyChromeClient19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_,b12,b12,b12];
  var FUNCTION_TABLE_viii = [b13,b13,__ZNK7WebCore17EmptyChromeClient16rootViewToScreenERKNS_7IntRectE,b13,__ZNK7WebCore17EmptyChromeClient19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE,b13,__ZN7WebCore17EmptyChromeClient22reachedMaxAppCacheSizeEx,b13,__ZN7WebCore20SVGImageChromeClient29invalidateContentsAndRootViewERKNS_7IntRectEb,b13,__ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE,b13,__ZNK7WebCore17EmptyChromeClient16screenToRootViewERKNS_8IntPointE,b13,__ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE,b13,__ZN7WebCore17EmptyChromeClient31invalidateContentsForSlowScrollERKNS_7IntRectEb,b13,__ZN7WebCore17EmptyChromeClient18invalidateRootViewERKNS_7IntRectEb,b13,__ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE,b13,viii___ZN7WebCore12ChromeClient23generateReplacementFileERKN3WTF6StringE__wrapper,b13,__ZN7WebCore17EmptyChromeClient23mouseDidMoveOverElementERKNS_13HitTestResultEj,b13,__ZN7WebCore17EmptyChromeClient18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE,b13,__ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE
  ,b13,__ZN7WebCore17EmptyChromeClient16loadIconForFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_14FileIconLoaderE,b13,__ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE,b13,__ZN7WebCore17EmptyChromeClient23attachRootGraphicsLayerEPNS_5FrameEPNS_13GraphicsLayerE,b13,__ZN7WebCore17EmptyChromeClient10setToolTipERKN3WTF6StringENS_13TextDirectionE,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13
  ,b13,b13,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiii: dynCall_viiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viii: dynCall_viii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiii": invoke_viiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viii": invoke_viii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames16foreignObjectTagE": __ZN7WebCore8SVGNames16foreignObjectTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore17EmptyChromeClient5focusEv","_strlen","__ZNK7WebCore12ChromeClient35dispatchViewportPropertiesDidChangeERKNS_17ViewportArgumentsE","__ZN7WebCore20SVGImageChromeClientD1Ev","__ZNK7WebCore8SVGImage9frameViewEv","__ZNK7WebCore8SVGImage18embeddedContentBoxEv","__ZNK7WebCore12ChromeClient24plugInStartLabelSubtitleERKN3WTF6StringE","__ZN7WebCore17EmptyChromeClient17scrollbarsVisibleEv","__ZNK7WebCore12ChromeClient20graphicsLayerFactoryEv","__ZNK7WebCore12ChromeClient26allowedCompositingTriggersEv","__ZN7WebCore17EmptyChromeClient19setStatusbarVisibleEb","__ZN7WebCore12ChromeClient23enableSuddenTerminationEv","__ZN7WebCore17EmptyChromeClient25shouldNotifyOnFormChangesEv","__ZN7WebCore17EmptyChromeClient14keyboardUIModeEv","__ZN7WebCore12ChromeClient34notifyScrollerThumbIsVisibleInRectERKNS_7IntRectE","__ZN7WebCore12ChromeClient22setRootFullScreenLayerEPNS_13GraphicsLayerE","__ZN7WebCore17EmptyChromeClient16statusbarVisibleEv","__ZN7WebCore17EmptyChromeClient24didAssociateFormControlsERKN3WTF6VectorINS1_6RefPtrINS_7ElementEEELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore17EmptyChromeClient16rootViewToScreenERKNS_7IntRectE","_memcpy","__ZNK7WebCore17EmptyChromeClient19contentsSizeChangedEPNS_5FrameERKNS_7IntSizeE","__ZN7WebCore17EmptyChromeClient18setToolbarsVisibleEb","__ZNK7WebCore8SVGImage13containerSizeEv","__ZN7WebCore17EmptyChromeClient23mouseDidMoveOverElementERKNS_13HitTestResultEj","__ZN7WebCore17EmptyChromeClient16setStatusbarTextERKN3WTF6StringE","__ZN7WebCore17EmptyChromeClient12createWindowEPNS_5FrameERKNS_16FrameLoadRequestERKNS_14WindowFeaturesERKNS_16NavigationActionE","__ZN7WebCore12ChromeClient20logDiagnosticMessageERKN3WTF6StringES4_S4_","__ZN7WebCore17EmptyChromeClient22reachedMaxAppCacheSizeEx","__ZN7WebCore12ChromeClient24exitFullScreenForElementEPNS_7ElementE","__ZN7WebCore17EmptyChromeClient8runModalEv","__ZN7WebCore17EmptyChromeClient46selectItemAlignmentFollowsMenuWritingDirectionEv","__ZNK7WebCore17EmptyChromeClient17windowResizerRectEv","__ZNK7WebCore12ChromeClient17minimumWindowSizeEv","__ZNK7WebCore12ChromeClient21plugInExtraStyleSheetEv","__ZN7WebCore8SVGImageD2Ev","__ZN7WebCore17EmptyChromeClient12setResizableEb","__ZNK7WebCore17EmptyChromeClient18platformPageClientEv","__ZN7WebCore17EmptyChromeClient14menubarVisibleEv","__ZN7WebCore20SVGImageChromeClientD0Ev","__ZNK7WebCore8SVGImage17hasRelativeHeightEv","__ZN7WebCore17EmptyChromeClient35selectItemWritingDirectionIsNaturalEv","__ZN7WebCore8SVGImageD0Ev","__ZN7WebCore8SVGImage13stopAnimationEv","__ZNK7WebCore12ChromeClient26createScrollingCoordinatorEPNS_4PageE","__ZN7WebCore17EmptyChromeClient14elementDidBlurEPKNS_4NodeE","__ZNK7WebCore12ChromeClient39shouldRunModalDialogDuringPageDismissalERKNS0_10DialogTypeERKN3WTF6StringENS_11FrameLoader17PageDismissalTypeE","__ZN7WebCore8SVGImage14resetAnimationEv","__ZNK7WebCore12ChromeClient17plugInExtraScriptEv","__ZNK7WebCore17EmptyChromeClient16screenToRootViewERKNS_8IntPointE","__ZNK7WebCore12ChromeClient13underlayColorEv","__ZN7WebCore8SVGImage26nativeImageForCurrentFrameEv","__ZNK7WebCore12ChromeClient30unavailablePluginButtonClickedEPNS_7ElementENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE","__ZN7WebCore17EmptyChromeClient12canTakeFocusENS_14FocusDirectionE","__ZN7WebCore17EmptyChromeClient21focusedElementChangedEPNS_7ElementE","__ZNK7WebCore12ChromeClient25shouldPaintEntireContentsEv","__ZN7WebCore17EmptyChromeClient37setNeedsOneShotDrawingSynchronizationEv","__ZN7WebCore17EmptyChromeClient18formStateDidChangeEPKNS_4NodeE","__ZN7WebCore12ChromeClient24incrementActivePageCountEv","__ZN7WebCore17EmptyChromeClient21exceededDatabaseQuotaEPNS_5FrameERKN3WTF6StringENS_15DatabaseDetailsE","__ZNK7WebCore5Image10getHotSpotERNS_8IntPointE","__ZN7WebCore17EmptyChromeClient15closeWindowSoonEv","__ZN7WebCore17EmptyChromeClient17setMenubarVisibleEb","__ZN7WebCore17EmptyChromeClient30setCursorHiddenUntilMouseMovesEb","__ZNK7WebCore12ChromeClient33shouldUseTiledBackingForFrameViewEPKNS_9FrameViewE","__ZNK7WebCore12ChromeClient13layoutUpdatedEPNS_5FrameE","__ZN7WebCore17EmptyChromeClient19runJavaScriptPromptEPNS_5FrameERKN3WTF6StringES6_RS4_","__ZNK7WebCore5Image13isBitmapImageEv","__ZN7WebCore12ChromeClient29supportsImmediateInvalidationEv","__ZN7WebCore12ChromeClient24decrementActivePageCountEv","__ZN7WebCore17EmptyChromeClient31invalidateContentsForSlowScrollERKNS_7IntRectEb","__ZN7WebCore17EmptyChromeClient18invalidateRootViewERKNS_7IntRectEb","__ZNK7WebCore8SVGImage17usesContainerSizeEv","__ZN7WebCore17EmptyChromeClient5printEPNS_5FrameE","__ZN7WebCore12ChromeClient17didAddFooterLayerEPNS_13GraphicsLayerE","__ZN7WebCore17EmptyChromeClient17scheduleAnimationEv","__ZN7WebCore12ChromeClient34requiresFullscreenForVideoPlaybackEv","__ZN7WebCore5Image26orientationForCurrentFrameEv","_memset","__ZN7WebCore8SVGImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE","__ZNK7WebCore8SVGImage23hasSingleSecurityOriginEv","__ZN7WebCore17EmptyChromeClient15elementDidFocusEPKNS_4NodeE","__ZN7WebCore17EmptyChromeClient13setWindowRectERKNS_9FloatRectE","__ZNK7WebCore17EmptyChromeClient19isEmptyChromeClientEv","__ZN7WebCore5Image21mayFillWithSolidColorEv","__ZN7WebCore17EmptyChromeClient15toolbarsVisibleEv","__ZN7WebCore17EmptyChromeClient27runBeforeUnloadConfirmPanelERKN3WTF6StringEPNS_5FrameE","__ZNK7WebCore12ChromeClient38shouldUnavailablePluginMessageBeButtonENS_20RenderEmbeddedObject26PluginUnavailabilityReasonE","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore17EmptyChromeClient4showEv","__ZN7WebCore17EmptyChromeClient9setCursorERKNS_6CursorE","__ZNK7WebCore17EmptyChromeClient23scrollbarsModeDidChangeEv","__ZNK7WebCore8SVGImage4sizeEv","__ZNK7WebCore5Image18isPDFDocumentImageEv","__ZN7WebCore17EmptyChromeClient11canRunModalEv","__ZNK7WebCore12ChromeClient31visibleRectForTiledBackingStoreEv","__ZN7WebCore12ChromeClient29postAccessibilityNotificationEPNS_19AccessibilityObjectENS_13AXObjectCache14AXNotificationE","__ZN7WebCore20SVGImageChromeClient15chromeDestroyedEv","__ZN7WebCore12ChromeClient22enterFullscreenForNodeEPNS_4NodeE","__ZN7WebCore12ChromeClient25enterFullScreenForElementEPNS_7ElementE","__ZNK7WebCore12ChromeClient28allowsAcceleratedCompositingEv","__ZN7WebCore12ChromeClient34recommendedScrollbarStyleDidChangeEi","__ZN7WebCore17EmptyChromeClient8pageRectEv","__ZN7WebCore17EmptyChromeClient29scheduleCompositingLayerFlushEv","__ZN7WebCore17EmptyChromeClient20runJavaScriptConfirmEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore8SVGImage18destroyDecodedDataEb","__ZNK7WebCore8SVGImage10isSVGImageEv","__ZN7WebCore8SVGImage23drawPatternForContainerEPNS_15GraphicsContextENS_9FloatSizeEfRKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES6_","__ZN7WebCore12ChromeClient25supportsFullscreenForNodeEPKNS_4NodeE","__ZN7WebCore17EmptyChromeClient28numWheelEventHandlersChangedEj","__ZN7WebCore17EmptyChromeClient7unfocusEv","__ZN7WebCore17EmptyChromeClient25shouldInterruptJavaScriptEv","__ZNK7WebCore8SVGImage17filenameExtensionEv","__ZN7WebCore17EmptyChromeClient30canRunBeforeUnloadConfirmPanelEv","__ZNK7WebCore5Image10solidColorEv","__ZNK7WebCore20SVGImageChromeClient22isSVGImageChromeClientEv","__ZNK7WebCore17EmptyChromeClient14hasOpenedPopupEv","__ZN7WebCore17EmptyChromeClient10windowRectEv","__ZN7WebCore17EmptyChromeClient19focusedFrameChangedEPNS_5FrameE","__ZN7WebCore17EmptyChromeClient20setScrollbarsVisibleEb","__ZN7WebCore8SVGImageC2EPNS_13ImageObserverE","__ZN7WebCore17EmptyChromeClient18runJavaScriptAlertEPNS_5FrameERKN3WTF6StringE","__ZN7WebCore12ChromeClient21exitFullscreenForNodeEPNS_4NodeE","__ZN7WebCore17EmptyChromeClient16loadIconForFilesERKN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEEPNS_14FileIconLoaderE","__ZNK7WebCore12ChromeClient21plugInStartLabelTitleERKN3WTF6StringE","__ZN7WebCore8SVGImage27currentFrameKnownToBeOpaqueEv","__ZN7WebCore8SVGImage26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE","__ZN7WebCore17EmptyChromeClient9takeFocusENS_14FocusDirectionE","__ZN7WebCore17EmptyChromeClient23attachRootGraphicsLayerEPNS_5FrameEPNS_13GraphicsLayerE","__ZN7WebCore20SVGImageChromeClient29invalidateContentsAndRootViewERKNS_7IntRectEb","__ZN7WebCore8SVGImage14startAnimationEb","__ZN7WebCore17EmptyChromeClient6scrollERKNS_7IntSizeERKNS_7IntRectES6_","__ZN7WebCore12ChromeClient19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringEjjS7_","__ZN7WebCore12ChromeClient24disableSuddenTerminationEv","__ZN7WebCore17EmptyChromeClient10setToolTipERKN3WTF6StringENS_13TextDirectionE","__ZN7WebCore17EmptyChromeClient19addMessageToConsoleENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEjjS6_","__ZN7WebCore17EmptyChromeClient34reachedApplicationCacheOriginQuotaEPNS_14SecurityOriginEx","__ZN7WebCore8SVGImage16setContainerSizeERKNS_7IntSizeE","__ZN7WebCore17EmptyChromeClient24delegatedScrollRequestedERKNS_8IntPointE","__ZN7WebCore8SVGImage11dataChangedEb","__ZN7WebCore12isInSVGImageEPKNS_7ElementE","__ZNK7WebCore17EmptyChromeClient18scrollRectIntoViewERKNS_7IntRectE","__ZN7WebCore8SVGImage16drawForContainerEPNS_15GraphicsContextENS_9FloatSizeEfRKNS_9FloatRectES6_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE","__ZN7WebCore12ChromeClient17didAddHeaderLayerEPNS_13GraphicsLayerE","__ZN7WebCore12ChromeClient28supportsFullScreenForElementEPKNS_7ElementEb","__ZNK7WebCore12ChromeClient22layerTreeStateIsFrozenEv","__ZNK7WebCore8SVGImage16hasRelativeWidthEv"]

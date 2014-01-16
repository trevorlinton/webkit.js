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
H_BASE = parentModule["_malloc"](728 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 728;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([45,119,101,98,107,105,116,45,105,110,110,101,114,45,115,112,105,110,45,98,117,116,116,111,110,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,204,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames6divTagE=env.__ZN7WebCore9HTMLNames6divTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_17SpinButtonElementEEE=(H_BASE+40)|0;
  var __ZTVN7WebCore17SpinButtonElementE=(H_BASE+72)|0;
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
  var invoke_di=env.invoke_di;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vi + 34;
}
function __ZN7WebCore17SpinButtonElement19defaultEventHandlerEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2) | 0)) {
  if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2);
  STACKTOP = i3;
  return;
 }
 i7 = i1 | 0;
 i8 = __ZNK7WebCore4Node9renderBoxEv(i7) | 0;
 if ((i8 | 0) == 0) {
  if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
   STACKTOP = i3;
   return;
  }
  __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i7, i2);
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 56 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 255](i10) | 0) {
    break;
   }
   if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i7, i2);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i10 = i2;
 i11 = i2 + 104 | 0;
 d12 = +(HEAP32[i11 + 4 >> 2] | 0);
 HEAPF32[i5 >> 2] = +(HEAP32[i11 >> 2] | 0);
 HEAPF32[i5 + 4 >> 2] = d12;
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i4, i8 | 0, i5, 2);
 d12 = +_round(+(+HEAPF32[i4 >> 2]));
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i13 = -2147483648;
    break;
   }
   i13 = ~~d12;
  } else {
   i13 = 2147483647;
  }
 } while (0);
 d12 = +_round(+(+HEAPF32[i4 + 4 >> 2]));
 do {
  if (d12 < +2147483647) {
   if (d12 <= +-2147483648) {
    i14 = -2147483648;
    break;
   }
   i14 = ~~d12;
  } else {
   i14 = 2147483647;
  }
 } while (0);
 i4 = HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0;
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == (HEAP32[i4 + 232 >> 2] | 0)) {
   if ((HEAP16[i10 + 114 >> 1] | 0) != 0) {
    i15 = 35;
    break;
   }
   if ((i13 | 0) < 0) {
    break;
   }
   if (!((i14 | 0) > -1 & (HEAP32[i8 + 52 >> 2] | 0) > (i13 | 0) & (HEAP32[i8 + 56 >> 2] | 0) > (i14 | 0))) {
    break;
   }
   i11 = i1 + 8 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   i11 = HEAP32[i9 >> 2] | 0;
   if ((i11 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 63](i11);
   }
   i11 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i16 = i11 | 0;
   } else {
    i16 = HEAP32[i11 >> 2] | 0;
   }
   do {
    if ((HEAP32[i16 >> 2] | 0) != 0) {
     i11 = i1 + 64 | 0;
     i17 = HEAP32[i11 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     HEAP32[i1 + 68 >> 2] = i17;
     i17 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
     i18 = i17;
     d12 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i18 >> 2] | 0) + 100 >> 2] & 1](i17);
     __ZN7WebCore9TimerBase5startEdd(i1 + 72 | 0, d12, +FUNCTION_TABLE_di[HEAP32[(HEAP32[i18 >> 2] | 0) + 104 >> 2] & 1](i17));
     i17 = HEAP32[i9 >> 2] | 0;
     if ((i17 | 0) == 0) {
      break;
     }
     i18 = HEAP32[i17 >> 2] | 0;
     if ((HEAP32[i11 >> 2] | 0) == 2) {
      FUNCTION_TABLE_vi[HEAP32[i18 + 24 >> 2] & 63](i17);
      break;
     } else {
      FUNCTION_TABLE_vi[HEAP32[i18 + 20 >> 2] & 63](i17);
      break;
     }
    }
   } while (0);
   HEAP8[i2 + 21 | 0] = 1;
   i17 = i1 + 8 | 0;
   i18 = i17 | 0;
   i11 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   HEAP32[i18 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
  } else {
   i15 = 35;
  }
 } while (0);
 L53 : do {
  if ((i15 | 0) == 35) {
   do {
    if ((i5 | 0) == (HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 256 >> 2] | 0)) {
     if ((HEAP16[i10 + 114 >> 1] | 0) != 0) {
      break;
     }
     __ZN7WebCore9TimerBase4stopEv(i1 + 72 | 0);
     break L53;
    }
   } while (0);
   if ((i5 | 0) != (HEAP32[(HEAP32[(__ZN7WebCore16threadGlobalDataEv() | 0) + 4 >> 2] | 0) + 244 >> 2] | 0)) {
    break;
   }
   i9 = i8 + 56 | 0;
   do {
    if ((i13 | 0) >= 0) {
     if (!((i14 | 0) > -1 & (HEAP32[i8 + 52 >> 2] | 0) > (i13 | 0) & (HEAP32[i9 >> 2] | 0) > (i14 | 0))) {
      break;
     }
     i16 = i1 + 60 | 0;
     do {
      if ((HEAP8[i16] & 1) == 0) {
       i4 = i1 + 20 | 0;
       i17 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       i11 = HEAP32[i17 + 472 >> 2] | 0;
       i17 = i6 | 0;
       HEAP32[i17 >> 2] = i1;
       if ((i1 | 0) != 0) {
        i18 = i1 + 8 | 0;
        HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
       }
       __ZN7WebCore12EventHandler30setCapturingMouseEventsElementEN3WTF10PassRefPtrINS_7ElementEEE(i11, i6);
       i11 = HEAP32[i17 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i17 = i11 + 8 | 0;
         i18 = i17 | 0;
         i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
         HEAP32[i18 >> 2] = i19;
         if ((i19 | 0) >= 1) {
          break;
         }
         if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
          break;
         }
         __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
        }
       } while (0);
       HEAP8[i16] = 1;
       i11 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] | 0) | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       __ZN7WebCore6Chrome28registerPopupOpeningObserverEPNS_20PopupOpeningObserverE(HEAP32[i11 + 20 >> 2] | 0, i1 + 52 | 0);
      }
     } while (0);
     i16 = i1 + 64 | 0;
     i11 = HEAP32[i16 >> 2] | 0;
     i17 = ((HEAP32[i9 >> 2] | 0) / 2 & -1 | 0) > (i14 | 0) ? 2 : 1;
     HEAP32[i16 >> 2] = i17;
     if ((i17 | 0) == (i11 | 0)) {
      break L53;
     }
     i11 = i1 + 32 | 0;
     if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
      i20 = i11 | 0;
     } else {
      i20 = HEAP32[i11 >> 2] | 0;
     }
     __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i20 >> 2] | 0, 0);
     break L53;
    }
   } while (0);
   __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i1);
   HEAP32[i1 + 64 >> 2] = 0;
  }
 } while (0);
 if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i7, i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 72 | 0);
 i4 = i1 + 60 | 0;
 if ((HEAP8[i4] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 20 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i6 + 472 >> 2] | 0;
 i6 = i3 | 0;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore12EventHandler30setCapturingMouseEventsElementEN3WTF10PassRefPtrINS_7ElementEEE(i7, i3);
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i7 = i6 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 HEAP8[i4] = 0;
 i4 = __ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore6Chrome30unregisterPopupOpeningObserverEPNS_20PopupOpeningObserverE(HEAP32[i4 + 20 >> 2] | 0, i1 + 52 | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17SpinButtonElement12forwardEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((__ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0) == 0) {
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0) != 23) {
  return;
 }
 i3 = i1 + 56 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 255](i1) | 0)) {
  return;
 }
 i1 = HEAP32[i2 + 132 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((i1 | 0) > 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 63](i4);
    break;
   }
   if ((i1 | 0) >= 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 63](i4);
  }
 } while (0);
 HEAP8[i2 + 21 | 0] = 1;
 return;
}
function __ZN7WebCore17SpinButtonElement19repeatingTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = (i3 | 0) == 2;
 i5 = i1 + 56 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = i3;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 255](i6) | 0) {
    i7 = HEAP32[i2 >> 2] | 0;
    break;
   } else {
    return;
   }
  }
 } while (0);
 if ((i7 | 0) != (HEAP32[i1 + 68 >> 2] | 0)) {
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if (i4) {
  FUNCTION_TABLE_vi[HEAP32[i5 + 24 >> 2] & 63](i1);
  return;
 } else {
  FUNCTION_TABLE_vi[HEAP32[i5 + 20 >> 2] & 63](i1);
  return;
 }
}
function __ZN7WebCore17SpinButtonElement6createERNS_8DocumentERNS0_15SpinButtonOwnerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = __Znwj(128) | 0;
 i5 = i4;
 __ZN7WebCore14HTMLDivElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, __ZN7WebCore9HTMLNames6divTagE, i2);
 HEAP32[i4 >> 2] = H_BASE + 80;
 HEAP32[i4 + 52 >> 2] = H_BASE + 700;
 HEAP32[i4 + 56 >> 2] = i3;
 HEAP8[i4 + 60 | 0] = 0;
 HEAP32[i4 + 64 >> 2] = 0;
 HEAP32[i4 + 68 >> 2] = 0;
 i3 = i4 + 72 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i3);
 HEAP32[i3 >> 2] = H_BASE + 48;
 HEAP32[i4 + 116 >> 2] = i5;
 i3 = i4 + 120 | 0;
 HEAP32[i3 >> 2] = F_BASE_vii + 54;
 HEAP32[i3 + 4 >> 2] = 0;
 i3 = i4 + 12 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 1048576;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore17SpinButtonElement4stepEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 56 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 255](i4) | 0) {
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP32[i1 + 64 >> 2] | 0) != (HEAP32[i1 + 68 >> 2] | 0)) {
  return;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 if ((i2 | 0) > 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 63](i1);
  return;
 }
 if ((i2 | 0) >= 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 63](i1);
 return;
}
function __ZNK7WebCore17SpinButtonElement14shadowPseudoIdEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 if (HEAP8[H_BASE + 720 | 0] | 0) {
  i3 = HEAP32[H_BASE + 728 >> 2] | 0;
  STACKTOP = i1;
  return i3 | 0;
 } else {
  i4 = __Znwj(4) | 0;
  i5 = i4;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 8 | 0, 25);
  i6 = i2 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[H_BASE + 728 >> 2] = i5;
  HEAP8[H_BASE + 720 | 0] = 1;
  i3 = i5;
  STACKTOP = i1;
  return i3 | 0;
 }
 return 0;
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
function __ZN7WebCore17SpinButtonElement29willRespondToMouseClickEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((__ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0) != 0) {
   i2 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 1;
    return i3 | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore17SpinButtonElement28willRespondToMouseMoveEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if ((__ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0) != 0) {
   i2 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 1;
    return i3 | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore5TimerINS_17SpinButtonElementEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 63](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 63](i4, i1);
  return;
 }
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
function __ZN7WebCore17SpinButtonElement19startRepeatingTimerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, d4 = +0;
 HEAP32[i1 + 68 >> 2] = HEAP32[i1 + 64 >> 2];
 i2 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
 i3 = i2;
 d4 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i3 >> 2] | 0) + 100 >> 2] & 1](i2);
 __ZN7WebCore9TimerBase5startEdd(i1 + 72 | 0, d4, +FUNCTION_TABLE_di[HEAP32[(HEAP32[i3 >> 2] | 0) + 104 >> 2] & 1](i2));
 return;
}
function viiii___ZN7WebCore14HTMLDivElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14HTMLDivElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17SpinButtonElement12doStepActionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((i2 | 0) > 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 63](i3);
  return;
 }
 if ((i2 | 0) >= 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 63](i3);
 return;
}
function __ZNK7WebCore17SpinButtonElement21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((__ZNK7WebCore4Node10shadowHostEv(i2) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore4Node10shadowHostEv(i2) | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 255](i1) | 0;
 return i3 | 0;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn52_N7WebCore17SpinButtonElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 128 + 76 | 0;
 HEAP32[i2 >> 2] = H_BASE + 80;
 HEAP32[i1 - 128 + 128 >> 2] = H_BASE + 700;
 __ZN7WebCore9TimerBaseD2Ev(i1 - 128 + 148 | 0);
 __ZN7WebCore13StyledElementD2Ev(i2);
 __ZdlPv(i2);
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore17SpinButtonElement26shouldRespondToMouseEventsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0;
 return i3 | 0;
}
function __ZThn52_N7WebCore17SpinButtonElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 128 + 76 | 0;
 HEAP32[i2 >> 2] = H_BASE + 80;
 HEAP32[i1 - 128 + 128 >> 2] = H_BASE + 700;
 __ZN7WebCore9TimerBaseD2Ev(i1 - 128 + 148 | 0);
 __ZN7WebCore13StyledElementD2Ev(i2);
 return;
}
function viii___ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore14HTMLDivElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore14HTMLDivElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore17SpinButtonElementD0Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 HEAP32[i1 + 52 >> 2] = H_BASE + 700;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 72 | 0);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZNK7WebCore17SpinButtonElement27matchesReadWritePseudoClassEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore4Node10shadowHostEv(i1 | 0) | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 440 >> 2] & 255](i2) | 0;
}
function __ZNK7WebCore17SpinButtonElement26matchesReadOnlyPseudoClassEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore4Node10shadowHostEv(i1 | 0) | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 436 >> 2] & 255](i2) | 0;
}
function vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17SpinButtonElementD1Ev(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = H_BASE + 80;
 HEAP32[i1 + 52 >> 2] = H_BASE + 700;
 __ZN7WebCore9TimerBaseD2Ev(i1 + 72 | 0);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 return;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function __ZThn52_N7WebCore17SpinButtonElement13willOpenPopupEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i1 - 128 + 76 | 0);
 HEAP32[i1 - 128 + 140 >> 2] = 0;
 return;
}
function v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
}
function __ZN7WebCore17SpinButtonElement10setHoveredEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (!i2) {
  HEAP32[i1 + 64 >> 2] = 0;
 }
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2);
 return;
}
function iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function __ZN7WebCore17SpinButtonElement13willOpenPopupEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i1);
 HEAP32[i1 + 64 >> 2] = 0;
 return;
}
function vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement8nodeNameEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11HTMLElement13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function __ZN7WebCore5TimerINS_17SpinButtonElementEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZN7WebCore17SpinButtonElement19willDetachRenderersEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17SpinButtonElement14releaseCaptureEv(i1);
 return;
}
function vii___ZNK7WebCore11HTMLElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement5titleEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement11virtualFormEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element21finishParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement9draggableEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement8tabIndexEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function __ZN7WebCore17SpinButtonElement18stopRepeatingTimerEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBase4stopEv(i1 + 72 | 0);
 return;
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function v___ZN7WebCore7Element22customStyleForRendererEv__wrapper() {
 __ZN7WebCore7Element22customStyleForRendererEv();
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore5TimerINS_17SpinButtonElementEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
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
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17SpinButtonElement19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore17SpinButtonElement16isMouseFocusableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore11HTMLElement15asFormNamedItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement11isLabelableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1];
  var FUNCTION_TABLE_did = [b2,b2,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b2];
  var FUNCTION_TABLE_vi = [b3,b3,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b3,__ZN7WebCore7Element20buildPendingResourceEv,b3,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b3,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b3,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b3,__ZN7WebCore17SpinButtonElementD0Ev,b3,__ZN7WebCore5TimerINS_17SpinButtonElementEED1Ev,b3,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b3,__ZN7WebCore5TimerINS_17SpinButtonElementEE5firedEv,b3,__ZN7WebCore17SpinButtonElement19willDetachRenderersEv,b3,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b3,__ZN7WebCore17SpinButtonElementD1Ev,b3,__ZThn52_N7WebCore17SpinButtonElement13willOpenPopupEv,b3,__ZN7WebCore4Node24startLoadingDynamicSheetEv
  ,b3,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b3,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b3,__ZThn52_N7WebCore17SpinButtonElementD0Ev,b3,__ZN7WebCore17SpinButtonElement13willOpenPopupEv,b3,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b3,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b3,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b3,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b3,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b3,vi___ZN7WebCore7Element4blurEv__wrapper,b3,__ZN7WebCore5TimerINS_17SpinButtonElementEED0Ev,b3,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b3,__ZN7WebCore17SpinButtonElement14releaseCaptureEv,b3,__ZN7WebCore7Element22visibilityStateChangedEv,b3,__ZThn52_N7WebCore17SpinButtonElementD1Ev
  ,b3,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b3,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore7Element6targetEv,b4,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b4,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b4,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b4,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b4,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b4,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b4,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b4,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b4,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b4,vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper,b4,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b4,vii___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b4,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b4,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b4,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b4,vii___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b4,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b4,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b4,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b4,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b4,__ZN7WebCore17SpinButtonElement10setHoveredEb,b4,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b4,vii___ZN7WebCore7Element8setFocusEb__wrapper,b4,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b4,__ZN7WebCore17SpinButtonElement19defaultEventHandlerEPNS_5EventE,b4,__ZN7WebCore17SpinButtonElement19repeatingTimerFiredEPNS_5TimerIS0_EE,b4,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b4,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper
  ,b4,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b5,__ZN7WebCore17SpinButtonElement29willRespondToMouseClickEventsEv,b5,ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper,b5,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b5,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b5,ii___ZN7WebCore7Element7onerrorEv__wrapper,b5,__ZNK7WebCore17SpinButtonElement14shadowPseudoIdEv,b5,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b5,__ZNK7WebCore4Node21isMediaControlElementEv,b5,__ZNK7WebCore4Node19isFrameOwnerElementEv,b5,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b5,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b5,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b5,__ZNK7WebCore7Element17isTextFormControlEv
  ,b5,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b5,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b5,__ZNK7WebCore17SpinButtonElement16isMouseFocusableEv,b5,__ZNK7WebCore7Element6prefixEv,b5,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b5,__ZNK7WebCore7Element12namespaceURIEv,b5,__ZNK7WebCore17SpinButtonElement21isDisabledFormControlEv,b5,__ZNK7WebCore4Node22scriptExecutionContextEv,b5,__ZNK7WebCore7Element12isOutOfRangeEv,b5,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b5,__ZNK7WebCore4Node15isPluginElementEv,b5,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b5,__ZN7WebCore4Node11sheetLoadedEv,b5,__ZN7WebCore11HTMLElement15asFormNamedItemEv,b5,__ZNK7WebCore7Element23canContainRangeEndPointEv
  ,b5,__ZNK7WebCore4Node20isInsertionPointNodeEv,b5,ii___ZN7WebCore7Element6onloadEv__wrapper,b5,__ZNK7WebCore7Element9isInRangeEv,b5,__ZNK7WebCore7Element20isFormControlElementEv,b5,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b5,__ZNK7WebCore7Element18isFrameElementBaseEv,b5,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b5,__ZNK7WebCore7Element21isOptionalFormControlEv,b5,__ZNK7WebCore17SpinButtonElement19isSpinButtonElementEv,b5,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b5,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b5,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b5,__ZNK7WebCore4Node16nonRendererStyleEv,b5,__ZNK7WebCore7Element21isRequiredFormControlEv,b5,ii___ZN7WebCore13StyledElement5styleEv__wrapper
  ,b5,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b5,ii___ZN7WebCore7Element7onfocusEv__wrapper,b5,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b5,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b5,ii___ZNK7WebCore11HTMLElement13supportsFocusEv__wrapper,b5,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b5,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b5,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b5,__ZNK7WebCore7Element12willValidateEv,b5,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b5,__ZN7WebCore7Element25isValidFormControlElementEv,b5,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b5,__ZNK7WebCore17SpinButtonElement27matchesReadWritePseudoClassEv,b5,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b5,__ZNK7WebCore4Node14customPseudoIdEv
  ,b5,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper,b5,__ZNK7WebCore4Node19isCharacterDataNodeEv,b5,__ZNK7WebCore7Element9localNameEv,b5,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b5,__ZN7WebCore17SpinButtonElement28willRespondToMouseMoveEventsEv,b5,ii___ZN7WebCore4Node6toNodeEv__wrapper,b5,__ZNK7WebCore17SpinButtonElement26matchesReadOnlyPseudoClassEv,b5,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b5,ii___ZN7WebCore7Element6onblurEv__wrapper,b5,__ZNK7WebCore11HTMLElement11isLabelableEv,b5,__ZNK7WebCore4Node15isMediaControlsEv,b5,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b5,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b5,__ZNK7WebCore4Node15isAttributeNodeEv,b5,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b6,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b6,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b6,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b6,viii___ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE__wrapper,b6,viii___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b7,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b8,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b8,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b8,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b8,iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper,b8,iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b8,iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper,b8,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b8,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b8,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b8,iii___ZNK7WebCore14HTMLDivElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,viiii___ZN7WebCore14HTMLDivElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b9,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_di: dynCall_di, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_di": invoke_di, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6divTagE": __ZN7WebCore9HTMLNames6divTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore7Element12isOutOfRangeEv","_strlen","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore17SpinButtonElement29willRespondToMouseClickEventsEv","__ZN7WebCore17SpinButtonElement4stepEi","__ZN7WebCore17SpinButtonElement12forwardEventEPNS_5EventE","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore17SpinButtonElement27matchesReadWritePseudoClassEv","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN7WebCore17SpinButtonElement19defaultEventHandlerEPNS_5EventE","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore17SpinButtonElement12doStepActionEi","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore17SpinButtonElement14releaseCaptureEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZN7WebCore5TimerINS_17SpinButtonElementEED1Ev","__ZN7WebCore5TimerINS_17SpinButtonElementEED0Ev","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore17SpinButtonElement14shadowPseudoIdEv","_memset","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZN7WebCore17SpinButtonElement6createERNS_8DocumentERNS0_15SpinButtonOwnerE","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZThn52_N7WebCore17SpinButtonElementD1Ev","__ZN7WebCore17SpinButtonElement26shouldRespondToMouseEventsEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCore5TimerINS_17SpinButtonElementEE5firedEv","__ZNK7WebCore7Element12namespaceURIEv","__ZNK7WebCore17SpinButtonElement16isMouseFocusableEv","__ZN7WebCore4Node11sheetLoadedEv","__ZN7WebCore17SpinButtonElement28willRespondToMouseMoveEventsEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore17SpinButtonElement19repeatingTimerFiredEPNS_5TimerIS0_EE","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore17SpinButtonElement19willDetachRenderersEv","__ZNK7WebCore17SpinButtonElement26matchesReadOnlyPseudoClassEv","__ZNK7WebCore17SpinButtonElement21isDisabledFormControlEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZThn52_N7WebCore17SpinButtonElementD0Ev","__ZN7WebCore17SpinButtonElement10setHoveredEb","__ZN7WebCore17SpinButtonElement13willOpenPopupEv","__ZN7WebCore17SpinButtonElement18stopRepeatingTimerEv","__ZN7WebCore17SpinButtonElementD1Ev","__ZN7WebCore17SpinButtonElementD0Ev","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","_memcpy","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZThn52_N7WebCore17SpinButtonElement13willOpenPopupEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore17SpinButtonElement19startRepeatingTimerEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZNK7WebCore17SpinButtonElement19isSpinButtonElementEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

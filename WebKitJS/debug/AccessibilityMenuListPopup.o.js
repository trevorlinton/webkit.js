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
H_BASE = parentModule["_malloc"](1096 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1096;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore26AccessibilityMenuListPopupC1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
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
function invoke_fi(index,a1) {
  try {
    return Module["dynCall_fi"](index,a1);
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
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26AccessibilityMenuListPopupE=(H_BASE+8)|0;
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
  var invoke_vif=env.invoke_vif;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 348;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 288;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 338;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 304;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 306;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 320;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 310;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 346;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 336;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 314;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 342;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 296;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 326;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 330;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 334;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 322;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_fi + 8;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_fi + 6;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 350;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 328;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 292;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 302;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 332;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 312;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 290;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vii + 102;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 340;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_ii + 300;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_ii + 318;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 286;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 298;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 316;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_ii + 344;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 324;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 294;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 308;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vii + 74;
}
function __ZN7WebCore26AccessibilityMenuListPopup15childrenChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 620 >> 2] & 511](i1 | 0) | 0;
 i2 = i1 + 12 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i5 = i2 | 0;
   i6 = i4;
   i7 = i4;
   while (1) {
    i8 = i6 - 1 | 0;
    if (i7 >>> 0 <= i8 >>> 0) {
     break;
    }
    i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    i10 = i9;
    do {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 628 >> 2] & 511](i9) | 0) != 0) {
      if (__ZNK7WebCore4Node18inRenderedDocumentEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 628 >> 2] & 511](i9) | 0) | 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 784 >> 2] & 63](i9);
     }
    } while (0);
    if ((i8 | 0) == 0) {
     break L1;
    }
    i6 = i8;
    i7 = HEAP32[i3 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i4 = i1 + 16 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i11 = i1 + 24 | 0;
  HEAP8[i11] = 0;
  i12 = i1;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + 752 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  FUNCTION_TABLE_vi[i15 & 63](i1);
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 i6 = i2 | 0;
 if ((i7 | 0) != 0) {
  i2 = HEAP32[i6 >> 2] | 0;
  i5 = i2 + (i7 << 2) | 0;
  i7 = i2;
  while (1) {
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i9 = i2 + 4 | 0;
     i10 = i9 | 0;
     i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i10 >> 2] = i16;
      break;
     }
     i16 = i9 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = i1 + 24 | 0;
  HEAP8[i11] = 0;
  i12 = i1;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13 + 752 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  FUNCTION_TABLE_vi[i15 & 63](i1);
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i11 = i1 + 24 | 0;
 HEAP8[i11] = 0;
 i12 = i1;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = i13 + 752 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 FUNCTION_TABLE_vi[i15 & 63](i1);
 return;
}
function __ZN7WebCore26AccessibilityMenuListPopup11addChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 364 >> 2] & 511](i2) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 HEAP8[i1 + 24 | 0] = 1;
 i4 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(i3) | 0;
 i3 = i4 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i6 = i4 | 0;
 i4 = i1;
 i1 = 0;
 i7 = i5;
 while (1) {
  if (i7 >>> 0 <= i1 >>> 0) {
   i8 = 6;
   break;
  }
  i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
     break;
    }
    if (!(__ZNK7WebCore4Node18inRenderedDocumentEv(i9 | 0) | 0)) {
     break;
    }
    __ZNK7WebCore8Document13axObjectCacheEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 680 >> 2] & 511](i2) | 0) | 0;
    __ZN7WebCore27AccessibilityMenuListOption10setElementEPNS_11HTMLElementE(0, i9);
   }
  } while (0);
  i9 = i1 + 1 | 0;
  if (i9 >>> 0 >= i5 >>> 0) {
   i8 = 17;
   break;
  }
  i1 = i9;
  i7 = HEAP32[i3 >> 2] | 0;
 }
 if ((i8 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i8 | 0) == 17) {
  return;
 }
}
function __ZN7WebCore26AccessibilityMenuListPopup21didUpdateActiveOptionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 620 >> 2] & 511](i3) | 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 if ((i4 | 0) == 0) {
  i2 = i1;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 680 >> 2] & 511](i3) | 0;
  FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 680 >> 2] & 511](i3) | 0;
  return;
 }
 i2 = i4 + 4 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i1;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 680 >> 2] & 511](i3) | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 680 >> 2] & 511](i3) | 0;
 i3 = i4 + 4 | 0;
 i4 = i3 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = i2;
  return;
 }
 i2 = i3 - 4 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
 return;
}
function __ZNK7WebCore26AccessibilityMenuListPopup33menuListOptionAccessibilityObjectEPNS_11HTMLElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return 0;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  return 0;
 }
 if (!(__ZNK7WebCore4Node18inRenderedDocumentEv(i2 | 0) | 0)) {
  return 0;
 }
 __ZNK7WebCore8Document13axObjectCacheEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 680 >> 2] & 511](i1 | 0) | 0) | 0;
 __ZN7WebCore27AccessibilityMenuListOption10setElementEPNS_11HTMLElementE(0, i2);
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
function __ZNK7WebCore19AccessibilityObject27visiblePositionRangeForLineEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i2 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -8;
 HEAP8[i3] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i3 = i4;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2 & -8;
 HEAP8[i4] = i2 & 255 & -16;
 HEAP32[i1 + 28 >> 2] = 1;
 return;
}
function __ZNK7WebCore19AccessibilityObject20visiblePositionRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = i2;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i4 & -8;
 HEAP8[i2] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 HEAP32[i1 + 16 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 i4 = i1 + 24 | 0;
 i2 = i4;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3 & -8;
 HEAP8[i4] = i3 & 255 & -16;
 HEAP32[i1 + 28 >> 2] = 1;
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
function __ZNK7WebCore19AccessibilityObject16textUnderElementENS_33AccessibilityTextUnderElementModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = STACKTOP;
 i4 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore19AccessibilityObject23visiblePositionForPointERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i2 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -8;
 HEAP8[i3] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 return;
}
function __ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEjb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i3 = i4;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2 & -8;
 HEAP8[i4] = i2 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 return;
}
function __ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i2 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -8;
 HEAP8[i3] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 return;
}
function viii___ZN7WebCore19AccessibilityObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore19AccessibilityObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore26AccessibilityMenuListPopup11isOffScreenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 296 >> 2] & 511](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore26AccessibilityMenuListPopup9isEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 228 >> 2] & 511](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore26AccessibilityMenuListPopup5pressEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 724 >> 2] & 511](i2) | 0;
 i3 = 1;
 return i3 | 0;
}
function iii___ZNK7WebCore19AccessibilityObject27elementAccessibilityHitTestERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore19AccessibilityObject27elementAccessibilityHitTestERKNS_8IntPointE(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore19AccessibilityObject10colorValueERiS1_S1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 return;
}
function ii___ZNK7WebCore19AccessibilityObject33hasAttributesRequiredForInclusionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject33hasAttributesRequiredForInclusionEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore26AccessibilityMenuListPopup29computeAccessibilityIsIgnoredEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject31accessibilityIsIgnoredByDefaultEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject22defaultObjectInclusionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject22defaultObjectInclusionEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject18doAXBoundsForRangeERKNS_14PlainTextRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function ii___ZNK7WebCore19AccessibilityObject20checkboxOrRadioValueEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject20checkboxOrRadioValueEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore19AccessibilityObject17doAXRangeForIndexEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function vi___ZN7WebCore19AccessibilityObject25updateChildrenIfNecessaryEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19AccessibilityObject25updateChildrenIfNecessaryEv(i1 | 0);
}
function __ZNK7WebCore19AccessibilityObject16doAXRangeForLineEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject13isRadioButtonEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 78 | 0;
}
function __ZNK7WebCore19AccessibilityObject12isSpinButtonEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 90 | 0;
}
function __ZN7WebCore19AccessibilityObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vii___ZN7WebCore19AccessibilityObject10clickPointEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore19AccessibilityObject10clickPointEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore19AccessibilityObject17documentFrameViewEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject17documentFrameViewEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject18doAXStringForRangeERKNS_14PlainTextRangeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject10isCheckboxEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 16 | 0;
}
function ii___ZNK7WebCore19AccessibilityObject16focusedUIElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject16focusedUIElementEv(i1 | 0) | 0;
}
function __ZN7WebCore19AccessibilityObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 59 | 0;
}
function __ZNK7WebCore19AccessibilityObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv(i1 | 0) | 0;
}
function __ZN7WebCore19AccessibilityObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv(i1 | 0);
}
function __ZNK7WebCore19AccessibilityObject16roleValueForMSAAEv(i1) {
 i1 = i1 | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0;
}
function __ZN7WebCore26AccessibilityMenuListPopupC2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityMockObjectC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore26AccessibilityMenuListPopupC1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityMockObjectC2Ev(i1 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore19AccessibilityObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore19AccessibilityObject13invalidStatusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject13invalidStatusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject13axObjectCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject13axObjectCacheEv(i1 | 0) | 0;
}
function __ZN7WebCore19AccessibilityObject11tabChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore19AccessibilityObject11orientationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject11orientationEv(i1 | 0) | 0;
}
function __ZN7WebCore26AccessibilityMenuListPopupD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityMockObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore19AccessibilityObject10isExpandedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject10isExpandedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject10isDetachedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject10isDetachedEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject17selectedTextRangeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore23AccessibilityMockObject9setParentEPNS_19AccessibilityObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 36 >> 2] = i2;
 return;
}
function __ZNK7WebCore19AccessibilityObject3urlEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore3URL10invalidateEv(i1);
 return;
}
function ii___ZNK7WebCore19AccessibilityObject8documentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject8documentEv(i1 | 0) | 0;
}
function vi___ZN7WebCore19AccessibilityObject13clearChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19AccessibilityObject13clearChildrenEv(i1 | 0);
}
function __ZNK7WebCore19AccessibilityObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZNK7WebCore19AccessibilityObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject9selectionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore16VisibleSelectionC1Ev(i1);
 return;
}
function __ZNK7WebCore26AccessibilityMenuListPopup11elementRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject23indexForVisiblePositionERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject24ariaDescribedByAttributeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject24accessibilityDescriptionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject22ariaLabeledByAttributeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject15boundingBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject21mathFencedCloseStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject20mathFencedOpenStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject18stringValueForMSAAEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject18passwordFieldValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject18descriptionForMSAAEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore26AccessibilityMenuListPopupD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityMockObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore19AccessibilityObject20setSelectedTextRangeERKNS_14PlainTextRangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject17stringRoleForMSAAEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject11elementPathEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4PathC1Ev(i1);
 return;
}
function __ZNK7WebCore19AccessibilityObject16valueDescriptionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject17setAccessibleNameERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject20accessibilityHitTestERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16hasSameFontColorEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject12selectedTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
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
function __ZNK7WebCore19AccessibilityObject5indexERKNS_15VisiblePositionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return -1 | 0;
}
function __ZNK7WebCore19AccessibilityObject11stringValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject11nameForMSAAEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject12hasSameStyleEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject11insertChildEPS0_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject11hasSameFontEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZNK7WebCore19AccessibilityObject8helpTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore23AccessibilityMockObject16detachFromParentEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 36 >> 2] = 0;
 return;
}
function __ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject22ariaLiveRegionRelevantEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function __ZNK7WebCore19AccessibilityObject11hasChildrenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 24 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore19AccessibilityObject5titleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject4textEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject20ariaLiveRegionStatusEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function __ZNK7WebCore23AccessibilityMockObject12parentObjectEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 36 >> 2] | 0;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 3](i2 | 0, +d3);
}
function __ZNK7WebCore19AccessibilityObject8scrollToERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject8setValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject35correspondingLabelForControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject35correspondingControlForLabelElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject33ariaRoleHasPresentationalChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject31isPresentationalChildOfAriaRoleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9accessKeyEv(i1) {
 i1 = i1 | 0;
 return __ZN3WTF8nullAtomE | 0;
}
function __ZNK7WebCore19AccessibilityObject29getScrollableAreaIfScrollableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject14setARIAGrabbedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject24estimatedLoadingProgressEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZN7WebCore19AccessibilityObject13setIsExpandedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject27shouldFocusActiveDescendantEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject27isAccessibilityRenderObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject26isMathSubscriptSuperscriptEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject26isDescendantOfBarrenParentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject29handleActiveDescendantChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject11setSelectedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject25supportsRequiredAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject25isAccessibilityNodeObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject25canSetTextRangeAttributesEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject8addChildEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject10setFocusedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore19AccessibilityObject24isAccessibilityScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject24canvasHasFallbackContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function __ZNK7WebCore19AccessibilityObject23widgetForAttachmentViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject23isMathSeparatorOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject23canSetSelectedAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject23canSetExpandedAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore26AccessibilityMenuListPopup15isMenuListPopupEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject25handleAriaExpandedChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject21exposesTitleUIElementEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject17stepValueForRangeEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZN7WebCore19AccessibilityObject24setNeedsToUpdateChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject20supportsARIADroppingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20supportsARIADraggingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20parentObjectIfExistsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20canSetValueAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20canSetFocusAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20ariaLiveRegionAtomicEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16minValueForRangeEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZNK7WebCore19AccessibilityObject16maxValueForRangeEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZN7WebCore19AccessibilityObject23updateAccessibilityRoleEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject21mathSuperscriptObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject21mathDenominatorObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject19isProgressIndicatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject19isNativeTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject19isMathFenceOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17ariaRoleAttributeEv(i1) {
 i1 = i1 | 0;
 return 110;
}
function __ZN7WebCore19AccessibilityObject8setValueEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function __ZNK7WebCore19AccessibilityObject18supportsARIAFlowToEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject18isFileUploadButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject18canSetNumericValueEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject18ariaLiveRegionBusyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject19selectedRadioButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject19mathSubscriptObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject19mathRootIndexObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject19mathNumeratorObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17mathLineThicknessEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17isMultiSelectableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17isMathMultiscriptEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17hierarchicalLevelEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13valueForRangeEv(i1) {
 i1 = i1 | 0;
 return +(+0);
}
function __ZN7WebCore19AccessibilityObject18mathRadicandObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore26AccessibilityMenuListPopup9roleValueEv(i1) {
 i1 = i1 | 0;
 return 71;
}
function __ZNK7WebCore23AccessibilityMockObject12isMockObjectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject16supportsARIAOwnsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16observableObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16isMenuListOptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16isMathSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16isMathIdentifierEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16activeDescendantEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore26AccessibilityMenuListPopup9isVisibleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15previousSiblingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isPasswordFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isMediaTimelineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isMathUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isMathTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isListBoxOptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isIndeterminateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject14titleUIElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject14isMathTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject14isMathOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject14isMathFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject14isImageMapLinkEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject15selectedTabItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject15mathUnderObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13speakPropertyEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject13isTableColumnEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isSearchFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isNativeImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isMenuRelatedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isMathElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isInputSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isImageButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13hasItalicFontEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13anchorElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13actionElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject14mathOverObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject14mathBaseObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12supportsPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12isMenuButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12isMathNumberEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12isMathFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12isInputImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12isAttachmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12headingLevelEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12hasUnderlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12hasPlainTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject12ariaHasPopupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject13isARIAGrabbedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11nextSiblingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11layoutCountEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isUnvisitedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isMathTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isDataTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isCollapsedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11hasBoldFontEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10textLengthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10tableLevelEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isSelectedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isRequiredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isReadOnlyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isMenuItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isMathTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isMathRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject10firstChildEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9lastChildEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isVisitedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isPressedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isMenuBarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isMathRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isHoveredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isHeadingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isFocusedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject9isCheckedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject11textChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject8rendererEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject8isLoadedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject8isLinkedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject8isAnchorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject7isGroupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject6widgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject6isMenuEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject6isListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject6isLinkEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject9incrementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject9decrementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject4nodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZN7WebCore19AccessibilityObject4initEv(i1) {
 i1 = i1 | 0;
 return;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b0(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(0);
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
function b7(i1) {
 i1 = i1 | 0;
 abort(7);
 return +0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return +0;
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vif = [b0,b0,__ZN7WebCore19AccessibilityObject8setValueEf,b0];
  var FUNCTION_TABLE_di = [b1,b1,__ZNK7WebCore19AccessibilityObject24estimatedLoadingProgressEv,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore23AccessibilityMockObject16detachFromParentEv,b2,vi___ZN7WebCore19AccessibilityObject13clearChildrenEv__wrapper,b2,__ZN7WebCore19AccessibilityObject29handleActiveDescendantChangedEv,b2,__ZN7WebCore26AccessibilityMenuListPopupD0Ev,b2,__ZN7WebCore19AccessibilityObject9incrementEv,b2,__ZN7WebCore26AccessibilityMenuListPopup15childrenChangedEv,b2,__ZN7WebCore26AccessibilityMenuListPopupD1Ev,b2,__ZN7WebCore26AccessibilityMenuListPopupC2Ev,b2,vi___ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv__wrapper,b2,vi___ZN7WebCore19AccessibilityObject25updateChildrenIfNecessaryEv__wrapper,b2,__ZN7WebCore19AccessibilityObject4initEv,b2,__ZN7WebCore19AccessibilityObject9decrementEv,b2,__ZN7WebCore19AccessibilityObject24setNeedsToUpdateChildrenEv,b2,__ZN7WebCore19AccessibilityObject11textChangedEv
  ,b2,__ZN7WebCore19AccessibilityObject23updateAccessibilityRoleEv,b2,__ZN7WebCore26AccessibilityMenuListPopup11addChildrenEv,b2,__ZN7WebCore19AccessibilityObject25handleAriaExpandedChangedEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore19AccessibilityObject10setFocusedEb,b3,__ZNK7WebCore19AccessibilityObject11elementPathEv,b3,__ZN7WebCore19AccessibilityObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject15boundingBoxRectEv,b3,__ZNK7WebCore19AccessibilityObject17selectedTextRangeEv,b3,__ZN7WebCore19AccessibilityObject13setIsExpandedEb,b3,__ZN7WebCore19AccessibilityObject14setARIAGrabbedEb,b3,__ZN7WebCore19AccessibilityObject20setSelectedTextRangeERKNS_14PlainTextRangeE,b3,__ZN7WebCore19AccessibilityObject11setSelectedEb,b3,__ZN7WebCore19AccessibilityObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE,b3,__ZN7WebCore19AccessibilityObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject8helpTextEv,b3,__ZNK7WebCore19AccessibilityObject22ariaLabeledByAttributeEv
  ,b3,__ZN7WebCore19AccessibilityObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject16valueDescriptionEv,b3,__ZN7WebCore19AccessibilityObject8addChildEPS0_,b3,__ZNK7WebCore19AccessibilityObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE,b3,__ZNK7WebCore19AccessibilityObject24ariaDescribedByAttributeEv,b3,__ZN7WebCore19AccessibilityObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject24accessibilityDescriptionEv,b3,__ZNK7WebCore19AccessibilityObject11nameForMSAAEv,b3,__ZNK7WebCore19AccessibilityObject3urlEv,b3,__ZN7WebCore19AccessibilityObject8setValueERKN3WTF6StringE,b3,__ZNK7WebCore19AccessibilityObject21mathFencedCloseStringEv,b3,__ZNK7WebCore19AccessibilityObject9selectionEv,b3,vii___ZN7WebCore19AccessibilityObject10clickPointEv__wrapper,b3,__ZNK7WebCore19AccessibilityObject20visiblePositionRangeEv
  ,b3,__ZNK7WebCore19AccessibilityObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore26AccessibilityMenuListPopup11elementRectEv,b3,__ZNK7WebCore19AccessibilityObject4textEv,b3,__ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE,b3,vii___ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE__wrapper,b3,__ZNK7WebCore19AccessibilityObject18stringValueForMSAAEv,b3,__ZNK7WebCore19AccessibilityObject18descriptionForMSAAEv,b3,__ZN7WebCore23AccessibilityMockObject9setParentEPNS_19AccessibilityObjectE,b3,__ZNK7WebCore19AccessibilityObject8scrollToERKNS_8IntPointE,b3,__ZNK7WebCore19AccessibilityObject11stringValueEv,b3,__ZN7WebCore19AccessibilityObject17setAccessibleNameERKN3WTF12AtomicStringE,b3,vii___ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE__wrapper,b3,__ZN7WebCore19AccessibilityObject11tabChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZN7WebCore19AccessibilityObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject12selectedTextEv
  ,b3,__ZNK7WebCore19AccessibilityObject17stringRoleForMSAAEv,b3,__ZNK7WebCore19AccessibilityObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject18passwordFieldValueEv,b3,__ZN7WebCore19AccessibilityObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE,b3,__ZNK7WebCore19AccessibilityObject5titleEv,b3,__ZNK7WebCore19AccessibilityObject20mathFencedOpenStringEv,b3,__ZNK7WebCore19AccessibilityObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore19AccessibilityObject13isNativeImageEv,b4,__ZNK7WebCore23AccessibilityMockObject12isMockObjectEv,b4,ii___ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject12isSpinButtonEv,b4,__ZNK7WebCore19AccessibilityObject8isAnchorEv,b4,__ZNK7WebCore19AccessibilityObject18canSetNumericValueEv,b4,__ZNK7WebCore19AccessibilityObject14isImageMapLinkEv,b4,__ZNK7WebCore19AccessibilityObject17hierarchicalLevelEv,b4,ii___ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject10isFieldsetEv,b4,__ZNK7WebCore19AccessibilityObject14isMathTableRowEv,b4,__ZNK7WebCore19AccessibilityObject20supportsARIADraggingEv,b4,__ZNK7WebCore19AccessibilityObject29getScrollableAreaIfScrollableEv,b4,__ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv
  ,b4,__ZNK7WebCore19AccessibilityObject13isRadioButtonEv,b4,__ZNK7WebCore19AccessibilityObject15isListBoxOptionEv,b4,__ZNK7WebCore19AccessibilityObject13isMathElementEv,b4,__ZNK7WebCore19AccessibilityObject13isImageButtonEv,b4,__ZNK7WebCore19AccessibilityObject11isDataTableEv,b4,__ZNK7WebCore19AccessibilityObject6isLinkEv,b4,__ZNK7WebCore19AccessibilityObject16roleValueForMSAAEv,b4,__ZNK7WebCore19AccessibilityObject16observableObjectEv,b4,__ZNK7WebCore19AccessibilityObject12isMenuButtonEv,b4,__ZNK7WebCore19AccessibilityObject15isPasswordFieldEv,b4,__ZNK7WebCore19AccessibilityObject19isProgressIndicatorEv,b4,ii___ZNK7WebCore19AccessibilityObject33hasAttributesRequiredForInclusionEv__wrapper,b4,__ZNK7WebCore26AccessibilityMenuListPopup9isEnabledEv,b4,__ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv,b4,__ZNK7WebCore19AccessibilityObject9isMathRowEv
  ,b4,__ZNK7WebCore19AccessibilityObject22ariaLiveRegionRelevantEv,b4,__ZNK7WebCore19AccessibilityObject10textLengthEv,b4,__ZNK7WebCore19AccessibilityObject23isMathSeparatorOperatorEv,b4,__ZNK7WebCore19AccessibilityObject15isIndeterminateEv,b4,__ZN7WebCore19AccessibilityObject19mathSubscriptObjectEv,b4,__ZNK7WebCore19AccessibilityObject11isCollapsedEv,b4,__ZNK7WebCore19AccessibilityObject12ariaHasPopupEv,b4,__ZNK7WebCore19AccessibilityObject13hasItalicFontEv,b4,__ZNK7WebCore19AccessibilityObject9isListBoxEv,b4,__ZNK7WebCore19AccessibilityObject10isMenuListEv,b4,__ZNK7WebCore19AccessibilityObject6widgetEv,b4,__ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv,b4,__ZNK7WebCore26AccessibilityMenuListPopup5pressEv,b4,__ZNK7WebCore19AccessibilityObject10isSelectedEv,b4,__ZNK7WebCore19AccessibilityObject12hasPlainTextEv
  ,b4,__ZNK7WebCore19AccessibilityObject12isMathNumberEv,b4,__ZNK7WebCore19AccessibilityObject8rendererEv,b4,__ZNK7WebCore19AccessibilityObject12isInputImageEv,b4,__ZNK7WebCore19AccessibilityObject18supportsARIAFlowToEv,b4,__ZNK7WebCore19AccessibilityObject35correspondingLabelForControlElementEv,b4,__ZNK7WebCore19AccessibilityObject10firstChildEv,b4,__ZNK7WebCore19AccessibilityObject17ariaRoleAttributeEv,b4,__ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv,b4,__ZNK7WebCore26AccessibilityMenuListPopup29computeAccessibilityIsIgnoredEv,b4,__ZNK7WebCore19AccessibilityObject31isPresentationalChildOfAriaRoleEv,b4,__ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv,b4,ii___ZNK7WebCore19AccessibilityObject10isExpandedEv__wrapper,b4,__ZNK7WebCore26AccessibilityMenuListPopup9roleValueEv,b4,__ZNK7WebCore19AccessibilityObject11hasChildrenEv,b4,__ZNK7WebCore19AccessibilityObject11isMathTableEv
  ,b4,__ZNK7WebCore19AccessibilityObject15isMathUnderOverEv,b4,__ZNK7WebCore19AccessibilityObject13anchorElementEv,b4,__ZNK7WebCore19AccessibilityObject10isMenuItemEv,b4,__ZNK7WebCore19AccessibilityObject21exposesTitleUIElementEv,b4,__ZNK7WebCore19AccessibilityObject15previousSiblingEv,b4,__ZNK7WebCore19AccessibilityObject25supportsRequiredAttributeEv,b4,ii___ZNK7WebCore19AccessibilityObject13invalidStatusEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject10tableLevelEv,b4,ii___ZNK7WebCore19AccessibilityObject11orientationEv__wrapper,b4,__ZN7WebCore19AccessibilityObject14mathOverObjectEv,b4,__ZNK7WebCore19AccessibilityObject25isAccessibilityNodeObjectEv,b4,__ZNK7WebCore19AccessibilityObject7isImageEv,b4,__ZNK7WebCore19AccessibilityObject16isMenuListOptionEv,b4,ii___ZNK7WebCore19AccessibilityObject16focusedUIElementEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject8documentEv__wrapper
  ,b4,__ZNK7WebCore19AccessibilityObject15canHaveChildrenEv,b4,__ZNK7WebCore19AccessibilityObject12supportsPathEv,b4,__ZNK7WebCore19AccessibilityObject11isTableCellEv,b4,__ZNK7WebCore19AccessibilityObject8isLoadedEv,b4,__ZNK7WebCore26AccessibilityMenuListPopup15isMenuListPopupEv,b4,__ZNK7WebCore19AccessibilityObject17isMultiSelectableEv,b4,__ZNK7WebCore19AccessibilityObject10isCheckboxEv,b4,__ZNK7WebCore19AccessibilityObject33ariaRoleHasPresentationalChildrenEv,b4,__ZN7WebCore19AccessibilityObject15selectedTabItemEv,b4,__ZNK7WebCore19AccessibilityObject12hasUnderlineEv,b4,ii___ZNK7WebCore19AccessibilityObject17documentFrameViewEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject12isMathFencedEv,b4,__ZNK7WebCore19AccessibilityObject9isControlEv,b4,__ZNK7WebCore19AccessibilityObject10isMathTextEv,b4,__ZNK7WebCore19AccessibilityObject6isMenuEv
  ,b4,__ZNK7WebCore19AccessibilityObject11isUnvisitedEv,b4,__ZNK7WebCore19AccessibilityObject9accessKeyEv,b4,__ZN7WebCore19AccessibilityObject21mathDenominatorObjectEv,b4,__ZNK7WebCore19AccessibilityObject17mathLineThicknessEv,b4,__ZNK7WebCore19AccessibilityObject19isNativeTextControlEv,b4,__ZNK7WebCore19AccessibilityObject20ariaLiveRegionStatusEv,b4,__ZNK7WebCore19AccessibilityObject9lastChildEv,b4,__ZNK7WebCore19AccessibilityObject10isRequiredEv,b4,__ZNK7WebCore19AccessibilityObject13actionElementEv,b4,__ZN7WebCore19AccessibilityObject19mathRootIndexObjectEv,b4,__ZNK7WebCore19AccessibilityObject16supportsARIAOwnsEv,b4,__ZNK7WebCore19AccessibilityObject18ariaLiveRegionBusyEv,b4,__ZNK7WebCore19AccessibilityObject13isSliderThumbEv,b4,ii___ZNK7WebCore19AccessibilityObject13axObjectCacheEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject24canvasHasFallbackContentEv
  ,b4,__ZNK7WebCore19AccessibilityObject10isMathRootEv,b4,__ZNK7WebCore19AccessibilityObject8isLinkedEv,b4,__ZNK7WebCore19AccessibilityObject11layoutCountEv,b4,__ZNK7WebCore19AccessibilityObject20ariaLiveRegionAtomicEv,b4,__ZNK7WebCore19AccessibilityObject13isMenuRelatedEv,b4,ii___ZNK7WebCore19AccessibilityObject22defaultObjectInclusionEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject9isFocusedEv,b4,__ZNK7WebCore19AccessibilityObject20canSetValueAttributeEv,b4,__ZNK7WebCore19AccessibilityObject19isMathFenceOperatorEv,b4,__ZNK7WebCore19AccessibilityObject27shouldFocusActiveDescendantEv,b4,__ZNK7WebCore19AccessibilityObject13isSearchFieldEv,b4,__ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv,b4,__ZN7WebCore19AccessibilityObject19selectedRadioButtonEv,b4,__ZNK7WebCore19AccessibilityObject18isFileUploadButtonEv,b4,__ZNK7WebCore19AccessibilityObject10isReadOnlyEv
  ,b4,__ZNK7WebCore19AccessibilityObject9isHoveredEv,b4,__ZNK7WebCore19AccessibilityObject23widgetForAttachmentViewEv,b4,ii___ZNK7WebCore19AccessibilityObject20checkboxOrRadioValueEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject9isMenuBarEv,b4,__ZNK7WebCore19AccessibilityObject9isVisitedEv,b4,ii___ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject9isCheckedEv,b4,__ZNK7WebCore19AccessibilityObject13isInputSliderEv,b4,__ZNK7WebCore19AccessibilityObject26isMathSubscriptSuperscriptEv,b4,__ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv,b4,__ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv,b4,__ZNK7WebCore19AccessibilityObject9isHeadingEv,b4,__ZNK7WebCore19AccessibilityObject24isAccessibilityScrollbarEv,b4,__ZNK7WebCore19AccessibilityObject13isTableColumnEv
  ,b4,__ZNK7WebCore19AccessibilityObject11nextSiblingEv,b4,__ZN7WebCore19AccessibilityObject14mathBaseObjectEv,b4,__ZNK7WebCore19AccessibilityObject9isPressedEv,b4,__ZNK7WebCore19AccessibilityObject23canSetSelectedAttributeEv,b4,__ZNK7WebCore19AccessibilityObject6isListEv,b4,__ZNK7WebCore19AccessibilityObject14isMathFractionEv,b4,__ZNK7WebCore19AccessibilityObject35correspondingControlForLabelElementEv,b4,__ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv,b4,__ZNK7WebCore19AccessibilityObject16isMathIdentifierEv,b4,__ZNK7WebCore19AccessibilityObject27isAccessibilityRenderObjectEv,b4,__ZNK7WebCore19AccessibilityObject16activeDescendantEv,b4,__ZNK7WebCore23AccessibilityMockObject12parentObjectEv,b4,__ZN7WebCore19AccessibilityObject19mathNumeratorObjectEv,b4,__ZNK7WebCore19AccessibilityObject20canSetFocusAttributeEv,b4,__ZNK7WebCore19AccessibilityObject15isMathTableCellEv
  ,b4,__ZNK7WebCore19AccessibilityObject16isMathSquareRootEv,b4,__ZNK7WebCore19AccessibilityObject20parentObjectIfExistsEv,b4,__ZNK7WebCore19AccessibilityObject15isMediaTimelineEv,b4,__ZNK7WebCore19AccessibilityObject8isSliderEv,b4,__ZN7WebCore19AccessibilityObject21mathSuperscriptObjectEv,b4,__ZNK7WebCore19AccessibilityObject10isTableRowEv,b4,__ZNK7WebCore19AccessibilityObject14titleUIElementEv,b4,__ZNK7WebCore26AccessibilityMenuListPopup9isVisibleEv,b4,__ZNK7WebCore19AccessibilityObject17isMathMultiscriptEv,b4,__ZNK7WebCore19AccessibilityObject14isMathOperatorEv,b4,__ZNK7WebCore19AccessibilityObject7isTableEv,b4,__ZNK7WebCore19AccessibilityObject12headingLevelEv,b4,__ZN7WebCore19AccessibilityObject15mathUnderObjectEv,b4,__ZNK7WebCore19AccessibilityObject25canSetTextRangeAttributesEv,b4,__ZN7WebCore19AccessibilityObject13isARIAGrabbedEv
  ,b4,__ZNK7WebCore19AccessibilityObject23canSetExpandedAttributeEv,b4,__ZNK7WebCore19AccessibilityObject26isDescendantOfBarrenParentEv,b4,__ZNK7WebCore19AccessibilityObject4nodeEv,b4,__ZNK7WebCore26AccessibilityMenuListPopup11isOffScreenEv,b4,__ZNK7WebCore19AccessibilityObject12isAttachmentEv,b4,__ZNK7WebCore19AccessibilityObject13speakPropertyEv,b4,__ZNK7WebCore19AccessibilityObject11hasBoldFontEv,b4,__ZN7WebCore19AccessibilityObject18mathRadicandObjectEv,b4,__ZNK7WebCore19AccessibilityObject7isGroupEv,b4,ii___ZNK7WebCore19AccessibilityObject10isDetachedEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject20supportsARIADroppingEv,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZNK7WebCore19AccessibilityObject18doAXStringForRangeERKNS_14PlainTextRangeE,b5,viii___ZN7WebCore19AccessibilityObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE__wrapper,b5,__ZNK7WebCore19AccessibilityObject27visiblePositionRangeForLineEj,b5,__ZNK7WebCore19AccessibilityObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE,b5,__ZNK7WebCore19AccessibilityObject16doAXRangeForLineEj,b5,__ZNK7WebCore19AccessibilityObject23visiblePositionForPointERKNS_8IntPointE,b5,__ZN7WebCore19AccessibilityObject11insertChildEPS0_j,b5,__ZNK7WebCore19AccessibilityObject16textUnderElementENS_33AccessibilityTextUnderElementModeE,b5,__ZNK7WebCore19AccessibilityObject18doAXBoundsForRangeERKNS_14PlainTextRangeE,b5,__ZNK7WebCore19AccessibilityObject17doAXRangeForIndexEj,b5,__ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEi,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_fi = [b7,b7,__ZNK7WebCore19AccessibilityObject17stepValueForRangeEv,b7,__ZNK7WebCore19AccessibilityObject16minValueForRangeEv,b7,__ZNK7WebCore19AccessibilityObject16maxValueForRangeEv,b7,__ZNK7WebCore19AccessibilityObject13valueForRangeEv,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore19AccessibilityObject12hasSameStyleEPNS_12RenderObjectE,b8,__ZNK7WebCore19AccessibilityObject23indexForVisiblePositionERKNS_15VisiblePositionE,b8,__ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE,b8,iii___ZNK7WebCore19AccessibilityObject27elementAccessibilityHitTestERKNS_8IntPointE__wrapper,b8,__ZNK7WebCore19AccessibilityObject5indexERKNS_15VisiblePositionE,b8,__ZNK7WebCore19AccessibilityObject16hasSameFontColorEPNS_12RenderObjectE,b8,__ZNK7WebCore19AccessibilityObject20accessibilityHitTestERKNS_8IntPointE,b8,__ZNK7WebCore19AccessibilityObject11hasSameFontEPNS_12RenderObjectE,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,__ZNK7WebCore19AccessibilityObject10colorValueERiS1_S1_,b9,__ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEjb,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vif: dynCall_vif, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vif": invoke_vif, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore19AccessibilityObject13isNativeImageEv","__ZNK7WebCore23AccessibilityMockObject12isMockObjectEv","_strlen","__ZN7WebCore23AccessibilityMockObject16detachFromParentEv","__ZN7WebCore19AccessibilityObject10setFocusedEb","__ZNK7WebCore19AccessibilityObject12isSpinButtonEv","__ZNK7WebCore19AccessibilityObject8isAnchorEv","__ZNK7WebCore19AccessibilityObject17mathLineThicknessEv","__ZNK7WebCore19AccessibilityObject18descriptionForMSAAEv","__ZNK7WebCore19AccessibilityObject11elementPathEv","__ZNK7WebCore19AccessibilityObject14isImageMapLinkEv","__ZNK7WebCore19AccessibilityObject18doAXBoundsForRangeERKNS_14PlainTextRangeE","__ZNK7WebCore19AccessibilityObject10isFieldsetEv","__ZNK7WebCore19AccessibilityObject14isMathFractionEv","__ZN7WebCore19AccessibilityObject9decrementEv","__ZNK7WebCore19AccessibilityObject29getScrollableAreaIfScrollableEv","__ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv","__ZNK7WebCore19AccessibilityObject9selectionEv","__ZNK7WebCore19AccessibilityObject17stepValueForRangeEv","__ZNK7WebCore19AccessibilityObject15boundingBoxRectEv","_memcpy","__ZNK7WebCore19AccessibilityObject13isRadioButtonEv","__ZNK7WebCore19AccessibilityObject17selectedTextRangeEv","__ZN7WebCore19AccessibilityObject13setIsExpandedEb","__ZNK7WebCore19AccessibilityObject15isListBoxOptionEv","__ZNK7WebCore19AccessibilityObject13isMathElementEv","__ZNK7WebCore19AccessibilityObject11isDataTableEv","__ZNK7WebCore19AccessibilityObject6isLinkEv","__ZNK7WebCore19AccessibilityObject16minValueForRangeEv","__ZNK7WebCore19AccessibilityObject16roleValueForMSAAEv","__ZNK7WebCore19AccessibilityObject16observableObjectEv","__ZNK7WebCore19AccessibilityObject18doAXStringForRangeERKNS_14PlainTextRangeE","__ZN7WebCore19AccessibilityObject14mathOverObjectEv","__ZNK7WebCore19AccessibilityObject15isPasswordFieldEv","__ZNK7WebCore19AccessibilityObject12hasSameStyleEPNS_12RenderObjectE","__ZNK7WebCore19AccessibilityObject13actionElementEv","__ZNK7WebCore26AccessibilityMenuListPopup9roleValueEv","__ZNK7WebCore19AccessibilityObject19isMathFenceOperatorEv","__ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv","__ZN7WebCore19AccessibilityObject11setSelectedEb","__ZNK7WebCore19AccessibilityObject9isMathRowEv","__ZNK7WebCore19AccessibilityObject22ariaLiveRegionRelevantEv","__ZN7WebCore19AccessibilityObject29handleActiveDescendantChangedEv","__ZNK7WebCore19AccessibilityObject10textLengthEv","__ZNK7WebCore19AccessibilityObject23isMathSeparatorOperatorEv","__ZNK7WebCore19AccessibilityObject21mathFencedCloseStringEv","__ZN7WebCore19AccessibilityObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject15isIndeterminateEv","__ZN7WebCore19AccessibilityObject8addChildEPS0_","__ZNK7WebCore19AccessibilityObject11isCollapsedEv","__ZNK7WebCore19AccessibilityObject12ariaHasPopupEv","__ZNK7WebCore19AccessibilityObject13hasItalicFontEv","__ZNK7WebCore19AccessibilityObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE","__ZN7WebCore19AccessibilityObject21mathSuperscriptObjectEv","__ZNK7WebCore19AccessibilityObject8helpTextEv","__ZNK7WebCore19AccessibilityObject13isSliderThumbEv","__ZN7WebCore26AccessibilityMenuListPopupD0Ev","__ZNK7WebCore19AccessibilityObject10isMenuListEv","__ZNK7WebCore19AccessibilityObject6widgetEv","__ZNK7WebCore26AccessibilityMenuListPopup5pressEv","__ZNK7WebCore19AccessibilityObject10isSelectedEv","__ZNK7WebCore19AccessibilityObject12isMathNumberEv","__ZNK7WebCore19AccessibilityObject22ariaLabeledByAttributeEv","__ZNK7WebCore19AccessibilityObject8rendererEv","__ZNK7WebCore19AccessibilityObject23indexForVisiblePositionERKNS_15VisiblePositionE","__ZN7WebCore19AccessibilityObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPS0_S5_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject12isInputImageEv","__ZNK7WebCore19AccessibilityObject18supportsARIAFlowToEv","__ZNK7WebCore19AccessibilityObject35correspondingLabelForControlElementEv","__ZNK7WebCore19AccessibilityObject16valueDescriptionEv","__ZN7WebCore19AccessibilityObject19mathSubscriptObjectEv","__ZNK7WebCore19AccessibilityObject10firstChildEv","__ZNK7WebCore19AccessibilityObject17ariaRoleAttributeEv","__ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv","__ZN7WebCore19AccessibilityObject20setSelectedTextRangeERKNS_14PlainTextRangeE","__ZNK7WebCore26AccessibilityMenuListPopup29computeAccessibilityIsIgnoredEv","__ZNK7WebCore19AccessibilityObject31isPresentationalChildOfAriaRoleEv","__ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv","__ZNK7WebCore19AccessibilityObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore19AccessibilityObject9incrementEv","__ZNK7WebCore19AccessibilityObject15isMathUnderOverEv","__ZNK7WebCore19AccessibilityObject13anchorElementEv","__ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE","__ZNK7WebCore19AccessibilityObject10isMenuItemEv","__ZNK7WebCore19AccessibilityObject21exposesTitleUIElementEv","__ZNK7WebCore19AccessibilityObject7isTableEv","__ZNK7WebCore19AccessibilityObject15previousSiblingEv","__ZNK7WebCore19AccessibilityObject25supportsRequiredAttributeEv","__ZNK7WebCore19AccessibilityObject24ariaDescribedByAttributeEv","__ZNK7WebCore19AccessibilityObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE","__ZN7WebCore19AccessibilityObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject10isMathTextEv","__ZN7WebCore26AccessibilityMenuListPopup15childrenChangedEv","__ZNK7WebCore19AccessibilityObject10tableLevelEv","__ZNK7WebCore19AccessibilityObject20visiblePositionRangeEv","__ZN7WebCore19AccessibilityObject8setValueEf","__ZNK7WebCore19AccessibilityObject25isAccessibilityNodeObjectEv","__ZNK7WebCore19AccessibilityObject7isImageEv","__ZNK7WebCore19AccessibilityObject24accessibilityDescriptionEv","__ZNK7WebCore19AccessibilityObject16isMenuListOptionEv","__ZNK7WebCore19AccessibilityObject11nameForMSAAEv","__ZNK7WebCore19AccessibilityObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject12supportsPathEv","__ZNK7WebCore19AccessibilityObject11isTableCellEv","__ZNK7WebCore19AccessibilityObject8isLoadedEv","__ZNK7WebCore19AccessibilityObject17isMultiSelectableEv","__ZNK7WebCore19AccessibilityObject10isCheckboxEv","__ZNK7WebCore19AccessibilityObject14isMathTableRowEv","__ZNK7WebCore19AccessibilityObject17doAXRangeForIndexEj","__ZNK7WebCore19AccessibilityObject3urlEv","__ZN7WebCore19AccessibilityObject15selectedTabItemEv","__ZNK7WebCore19AccessibilityObject27isAccessibilityRenderObjectEv","__ZNK7WebCore19AccessibilityObject12isMathFencedEv","__ZNK7WebCore19AccessibilityObject9isListBoxEv","__ZNK7WebCore19AccessibilityObject9isControlEv","__ZNK7WebCore19AccessibilityObject6isMenuEv","__ZNK7WebCore19AccessibilityObject11isUnvisitedEv","__ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE","__ZN7WebCore19AccessibilityObject25handleAriaExpandedChangedEv","__ZNK7WebCore19AccessibilityObject27visiblePositionRangeForLineEj","__ZN7WebCore19AccessibilityObject21mathDenominatorObjectEv","__ZNK7WebCore19AccessibilityObject18canSetNumericValueEv","__ZNK7WebCore19AccessibilityObject12hasPlainTextEv","__ZNK7WebCore19AccessibilityObject20ariaLiveRegionStatusEv","__ZNK7WebCore19AccessibilityObject33ariaRoleHasPresentationalChildrenEv","__ZNK7WebCore19AccessibilityObject9lastChildEv","__ZNK7WebCore19AccessibilityObject10isRequiredEv","__ZN7WebCore26AccessibilityMenuListPopupD1Ev","__ZNK7WebCore26AccessibilityMenuListPopup9isEnabledEv","__ZNK7WebCore19AccessibilityObject18stringValueForMSAAEv","__ZNK7WebCore19AccessibilityObject18passwordFieldValueEv","__ZNK7WebCore19AccessibilityObject18ariaLiveRegionBusyEv","__ZN7WebCore19AccessibilityObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv","__ZN7WebCore26AccessibilityMenuListPopupC2Ev","__ZN7WebCore19AccessibilityObject8setValueERKN3WTF6StringE","__ZNK7WebCore19AccessibilityObject24canvasHasFallbackContentEv","__ZNK7WebCore19AccessibilityObject19isProgressIndicatorEv","__ZNK7WebCore19AccessibilityObject9accessKeyEv","__ZNK7WebCore19AccessibilityObject10isMathRootEv","__ZNK7WebCore19AccessibilityObject9isVisitedEv","__ZNK7WebCore19AccessibilityObject20ariaLiveRegionAtomicEv","__ZNK7WebCore19AccessibilityObject19isNativeTextControlEv","_memset","__ZNK7WebCore19AccessibilityObject16doAXRangeForLineEj","__ZNK7WebCore19AccessibilityObject11layoutCountEv","__ZNK7WebCore19AccessibilityObject8isLinkedEv","__ZNK7WebCore19AccessibilityObject13isMenuRelatedEv","__ZNK7WebCore19AccessibilityObject24estimatedLoadingProgressEv","__ZNK7WebCore19AccessibilityObject9isFocusedEv","__ZNK7WebCore19AccessibilityObject16isMathSquareRootEv","__ZNK7WebCore19AccessibilityObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZN7WebCore19AccessibilityObject4initEv","__ZNK7WebCore26AccessibilityMenuListPopup11elementRectEv","__ZNK7WebCore19AccessibilityObject20canSetValueAttributeEv","__ZN7WebCore19AccessibilityObject14setARIAGrabbedEb","__ZNK7WebCore19AccessibilityObject13isSearchFieldEv","__ZNK7WebCore19AccessibilityObject16maxValueForRangeEv","__ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv","__ZNK7WebCore19AccessibilityObject4textEv","__ZN7WebCore19AccessibilityObject19selectedRadioButtonEv","__ZNK7WebCore19AccessibilityObject18isFileUploadButtonEv","__ZNK7WebCore19AccessibilityObject10isReadOnlyEv","__ZNK7WebCore19AccessibilityObject23visiblePositionForPointERKNS_8IntPointE","__ZN7WebCore19AccessibilityObject11insertChildEPS0_j","__ZNK7WebCore19AccessibilityObject5indexERKNS_15VisiblePositionE","__ZN7WebCore19AccessibilityObject19mathRootIndexObjectEv","__ZNK7WebCore19AccessibilityObject9isHoveredEv","__ZNK7WebCore19AccessibilityObject20supportsARIADraggingEv","__ZNK7WebCore19AccessibilityObject15isMathTableCellEv","__ZNK7WebCore19AccessibilityObject13isImageButtonEv","__ZNK7WebCore19AccessibilityObject9isMenuBarEv","__ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE","__ZN7WebCore19AccessibilityObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject12isAttachmentEv","__ZNK7WebCore19AccessibilityObject9isCheckedEv","__ZNK7WebCore19AccessibilityObject13isInputSliderEv","__ZNK7WebCore19AccessibilityObject26isMathSubscriptSuperscriptEv","__ZNK7WebCore19AccessibilityObject5titleEv","__ZNK7WebCore19AccessibilityObject16hasSameFontColorEPNS_12RenderObjectE","__ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv","__ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv","__ZNK7WebCore19AccessibilityObject9isHeadingEv","__ZNK7WebCore19AccessibilityObject24isAccessibilityScrollbarEv","__ZNK7WebCore19AccessibilityObject13isTableColumnEv","__ZNK7WebCore19AccessibilityObject11nextSiblingEv","__ZNK7WebCore19AccessibilityObject35correspondingControlForLabelElementEv","__ZN7WebCore19AccessibilityObject14mathBaseObjectEv","__ZNK7WebCore19AccessibilityObject9isPressedEv","__ZNK7WebCore19AccessibilityObject11stringValueEv","__ZNK7WebCore19AccessibilityObject6isListEv","__ZNK7WebCore19AccessibilityObject27shouldFocusActiveDescendantEv","__ZN7WebCore19AccessibilityObject13isARIAGrabbedEv","__ZN7WebCore19AccessibilityObject24setNeedsToUpdateChildrenEv","__ZN7WebCore26AccessibilityMenuListPopup21didUpdateActiveOptionEi","__ZN7WebCore23AccessibilityMockObject9setParentEPNS_19AccessibilityObjectE","__ZNK7WebCore19AccessibilityObject8scrollToERKNS_8IntPointE","__ZNK7WebCore19AccessibilityObject23canSetSelectedAttributeEv","__ZNK7WebCore19AccessibilityObject17hierarchicalLevelEv","__ZNK7WebCore19AccessibilityObject16textUnderElementENS_33AccessibilityTextUnderElementModeE","__ZNK7WebCore19AccessibilityObject16isMathIdentifierEv","__ZN7WebCore19AccessibilityObject11textChangedEv","__ZN7WebCore19AccessibilityObject17setAccessibleNameERKN3WTF12AtomicStringE","__ZNK7WebCore19AccessibilityObject12hasUnderlineEv","__ZNK7WebCore19AccessibilityObject20accessibilityHitTestERKNS_8IntPointE","__ZNK7WebCore23AccessibilityMockObject12parentObjectEv","__ZN7WebCore19AccessibilityObject19mathNumeratorObjectEv","__ZNK7WebCore19AccessibilityObject20canSetFocusAttributeEv","__ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEi","__ZNK7WebCore19AccessibilityObject16activeDescendantEv","__ZNK7WebCore19AccessibilityObject20parentObjectIfExistsEv","__ZNK7WebCore19AccessibilityObject15isMediaTimelineEv","__ZN7WebCore19AccessibilityObject11tabChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject13valueForRangeEv","__ZNK7WebCore19AccessibilityObject10colorValueERiS1_S1_","__ZNK7WebCore19AccessibilityObject8isSliderEv","__ZNK7WebCore19AccessibilityObject10isTableRowEv","__ZNK7WebCore19AccessibilityObject14titleUIElementEv","__ZN7WebCore19AccessibilityObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore26AccessibilityMenuListPopup9isVisibleEv","__ZN7WebCore19AccessibilityObject23updateAccessibilityRoleEv","__ZNK7WebCore19AccessibilityObject17isMathMultiscriptEv","__ZNK7WebCore19AccessibilityObject12selectedTextEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore19AccessibilityObject14isMathOperatorEv","__ZNK7WebCore19AccessibilityObject15canHaveChildrenEv","__ZNK7WebCore19AccessibilityObject12headingLevelEv","__ZN7WebCore19AccessibilityObject15mathUnderObjectEv","__ZNK7WebCore19AccessibilityObject25canSetTextRangeAttributesEv","__ZNK7WebCore19AccessibilityObject17stringRoleForMSAAEv","__ZNK7WebCore19AccessibilityObject11isMathTableEv","__ZNK7WebCore19AccessibilityObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore19AccessibilityObject23canSetExpandedAttributeEv","__ZNK7WebCore19AccessibilityObject11hasChildrenEv","__ZNK7WebCore19AccessibilityObject16supportsARIAOwnsEv","__ZNK7WebCore19AccessibilityObject26isDescendantOfBarrenParentEv","__ZNK7WebCore19AccessibilityObject4nodeEv","__ZN7WebCore26AccessibilityMenuListPopup11addChildrenEv","__ZNK7WebCore19AccessibilityObject23visiblePositionForIndexEjb","__ZNK7WebCore26AccessibilityMenuListPopup11isOffScreenEv","__ZN7WebCore19AccessibilityObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrIS0_EELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore26AccessibilityMenuListPopup33menuListOptionAccessibilityObjectEPNS_11HTMLElementE","__ZNK7WebCore26AccessibilityMenuListPopup15isMenuListPopupEv","__ZNK7WebCore19AccessibilityObject13speakPropertyEv","__ZNK7WebCore19AccessibilityObject11hasBoldFontEv","__ZNK7WebCore19AccessibilityObject20mathFencedOpenStringEv","__ZNK7WebCore19AccessibilityObject23widgetForAttachmentViewEv","__ZN7WebCore19AccessibilityObject18mathRadicandObjectEv","__ZNK7WebCore19AccessibilityObject11hasSameFontEPNS_12RenderObjectE","__ZNK7WebCore19AccessibilityObject7isGroupEv","__ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv","__ZNK7WebCore19AccessibilityObject20supportsARIADroppingEv","__ZNK7WebCore19AccessibilityObject12isMenuButtonEv"]

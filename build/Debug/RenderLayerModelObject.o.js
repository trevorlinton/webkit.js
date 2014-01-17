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
var __ZN7WebCore22RenderLayerModelObjectD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_iiiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZN7WebCore22RenderLayerModelObject22s_layerWasSelfPaintingE=(H_BASE+704)|0;
  var __ZN7WebCore22RenderLayerModelObject14s_hadTransformE=(H_BASE+712)|0;
  var __ZN7WebCore22RenderLayerModelObject13s_wasFloatingE=(H_BASE+720)|0;
  var __ZN7WebCore22RenderLayerModelObject10s_hadLayerE=(H_BASE+728)|0;
  var __ZTVN7WebCore22RenderLayerModelObjectE=(H_BASE+8)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iii + 4;
}
function __ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP8[H_BASE + 720 | 0] = i6 >>> 6 & 1;
 i7 = i6 >>> 15 & 1;
 HEAP8[H_BASE + 728 | 0] = i7;
 HEAP8[H_BASE + 712 | 0] = i6 >>> 17 & 1;
 if (i7 << 24 >> 24 != 0) {
  HEAP8[H_BASE + 704 | 0] = (HEAPU8[(HEAP32[i1 + 40 >> 2] | 0) + 20 | 0] | 0) >>> 5 & 1;
 }
 i7 = i1 | 0;
 if ((HEAP8[i1 + 24 | 0] | 0) >= 0) {
  __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
  return;
 }
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
  return;
 }
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   if ((i2 | 0) == 4) {
    i8 = i1 + 40 | 0;
    __ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv(HEAP32[i8 >> 2] | 0);
    if (__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i6 + 8 >> 2] | 0) + 4 | 0, (HEAP32[i3 + 8 >> 2] | 0) + 4 | 0) | 0) {
     __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
     return;
    } else {
     __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(HEAP32[i8 >> 2] | 0, 4);
     break;
    }
   } else if ((i2 | 0) != 2) {
    i9 = 9;
   }
   if ((i9 | 0) == 9) {
    i8 = HEAP32[i3 + 12 >> 2] | 0;
    i10 = HEAP32[i8 + 64 >> 2] | 0;
    if ((i10 & 2013265920 | 0) == 0) {
     i11 = 0;
     i12 = 0;
    } else {
     i11 = HEAP32[i8 + 68 >> 2] | 0;
     i12 = i10 >>> 1 & 65535;
    }
    i10 = i11 + i12 | 0;
    i8 = HEAP32[i6 + 12 >> 2] | 0;
    i13 = HEAP32[i8 + 64 >> 2] | 0;
    if ((i13 & 2013265920 | 0) == 0) {
     i14 = 0;
     i15 = 0;
    } else {
     i14 = HEAP32[i8 + 68 >> 2] | 0;
     i15 = i13 >>> 1 & 65535;
    }
    i13 = i14 + i15 | 0;
    if ((((i10 | 0) > 0 ? i10 & 65535 : 0) & 65535) >>> 0 >= (((i13 | 0) > 0 ? i13 & 65535 : 0) & 65535) >>> 0) {
     break;
    }
   }
   __ZNK7WebCore12RenderObject7repaintEb(i4, 0);
  }
 } while (0);
 if (!((i2 | 0) == 8 | (i2 | 0) == 6)) {
  __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
  return;
 }
 if ((HEAP32[i5 >> 2] & 32768 | 0) == 0) {
  i5 = HEAP32[i3 + 20 >> 2] | 0;
  do {
   if ((HEAP32[(HEAP32[i5 + 72 >> 2] | 0) + 12 >> 2] | 0) == 0) {
    if (+HEAPF32[i5 + 4 >> 2] < +1) {
     break;
    }
    if ((HEAP32[(HEAP32[i5 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
    return;
   }
  } while (0);
  __ZNK7WebCore12RenderObject7repaintEb(i4, 0);
  __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
  return;
 }
 do {
  if (((HEAP32[i3 + 48 >> 2] ^ HEAP32[i6 + 48 >> 2]) & 29360128 | 0) == 0) {
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   if ((HEAP32[i4 + 60 >> 2] | 0) != (HEAP32[i5 + 60 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i4 + 64 >> 2] & 1 | 0) != 0 ^ (HEAP32[i5 + 64 >> 2] & 1 | 0) != 0) {
    break;
   }
   i5 = i6 + 8 | 0;
   i4 = i3 + 8 | 0;
   if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i5 >> 2] | 0) + 4 | 0, (HEAP32[i4 >> 2] | 0) + 4 | 0) | 0)) {
    break;
   }
   if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 36 | 0] & 1) != 0 ^ (HEAP8[(HEAP32[i4 >> 2] | 0) + 36 | 0] & 1) != 0) {
    break;
   }
   i4 = i6 + 20 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i15 = i3 + 20 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   if (+HEAPF32[i5 + 4 >> 2] != +HEAPF32[i14 + 4 >> 2]) {
    break;
   }
   if (!(__ZNK7WebCore19TransformOperationseqERKS0_((HEAP32[i5 + 72 >> 2] | 0) + 4 | 0, (HEAP32[i14 + 72 >> 2] | 0) + 4 | 0) | 0)) {
    break;
   }
   if (!(__ZNK7WebCore16FilterOperationseqERKS0_((HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0, (HEAP32[(HEAP32[i15 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0) | 0)) {
    break;
   }
   __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
   return;
  }
 } while (0);
 __ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv(HEAP32[i1 + 40 >> 2] | 0);
 __ZN7WebCore13RenderElement15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i7, i2, i3);
 return;
}
function __ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 | 0;
 __ZN7WebCore13RenderElement14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i4, i2, i3);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 664 >> 2] & 31](i1);
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 668 >> 2] & 255](i1) | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) != 0;
 do {
  if (i5) {
   if (i8) {
    break;
   }
   if (!(__ZNK7WebCore13RenderElement30layerCreationAllowedForSubtreeEv(i4) | 0)) {
    break;
   }
   do {
    if ((HEAP8[H_BASE + 720 | 0] & 1) != 0) {
     i9 = i1 + 20 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 & 68 | 0) != 64) {
      break;
     }
     HEAP32[i9 >> 2] = i10 | 4;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1 | 0, 1, 0);
    }
   } while (0);
   i10 = __Znwj(212) | 0;
   __ZN7WebCore11RenderLayerC1ERNS_22RenderLayerModelObjectE(i10, i1);
   i9 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   if ((i9 | 0) == 0) {
    i11 = i10;
   } else {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 184 >> 2] & 31](i9);
    i11 = HEAP32[i6 >> 2] | 0;
   }
   i9 = i1 + 20 | 0;
   HEAP32[i9 >> 2] = HEAP32[i9 >> 2] | 32768;
   __ZN7WebCore11RenderLayer19insertOnlyThisLayerEv(i11);
   if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 >> 2] & 31 | 0) != 0) {
    break;
   }
   if ((__ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0) == 0) {
    break;
   }
   i9 = (HEAP32[i6 >> 2] | 0) + 20 | 0;
   HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -196609 | 65536;
   __ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj(HEAP32[i6 >> 2] | 0, 0, 13);
  } else {
   if (!i8) {
    break;
   }
   if ((HEAP32[i7 + 36 >> 2] | 0) == 0) {
    break;
   }
   i9 = i1 | 0;
   i10 = i1 + 20 | 0;
   HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -393217;
   __ZN7WebCore11RenderLayer19removeOnlyThisLayerEv(i7);
   do {
    if ((HEAP8[H_BASE + 720 | 0] & 1) != 0) {
     i12 = HEAP32[i10 >> 2] | 0;
     if ((i12 & 68 | 0) != 64) {
      break;
     }
     HEAP32[i10 >> 2] = i12 | 4;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i9, 1, 0);
    }
   } while (0);
   if ((HEAP8[H_BASE + 712 | 0] & 1) == 0) {
    break;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i12 & 1 | 0) == 0) {
     HEAP32[i10 >> 2] = i12 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i9, 1, 0);
     if ((HEAP32[i10 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i9);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i9, 1, 1);
  }
 } while (0);
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   __ZN7WebCore11RenderLayer12styleChangedENS_15StyleDifferenceEPKNS_11RenderStyleE(i7, i2, i3);
   if ((HEAP8[H_BASE + 728 | 0] & 1) == 0) {
    break;
   }
   if ((((HEAPU8[(HEAP32[i6 >> 2] | 0) + 20 | 0] | 0) >>> 5 ^ HEAP8[H_BASE + 704 | 0]) & 1) == 0) {
    break;
   }
   i8 = i1 + 20 | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   if ((i11 & 4 | 0) != 0) {
    break;
   }
   HEAP32[i8 >> 2] = i11 | 4;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i1 | 0, 1, 0);
  }
 } while (0);
 i2 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if ((i3 | 0) == 0) {
  i13 = 0;
 } else {
  i7 = (HEAP32[i3 + 48 >> 2] | 0) >>> 22 & 7;
  i13 = ((i7 | 0) == 6 | (i7 | 0) == 3) & 1;
 }
 if ((((i2 | 0) == 6 | (i2 | 0) == 3) & 1 | 0) == (i13 | 0)) {
  return;
 }
 do {
  if ((i2 | 0) == 6 | (i2 | 0) == 3) {
   if ((HEAP32[i6 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore9FrameView28addViewportConstrainedObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i4);
   return;
  }
 } while (0);
 __ZN7WebCore9FrameView31removeViewportConstrainedObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i4);
 return;
}
function __ZNK7WebCore9LengthBoxeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
    d9 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d9 = +HEAPF32[i4 >> 2];
   }
   if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
    d10 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d10 = +HEAPF32[i3 >> 2];
   }
   if (d9 == d10) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP8[i1 + 21 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 21 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 20 | 0] ^ HEAP8[i1 + 20 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 22 | 0] & 1) == 0) {
    d11 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i3 >> 2];
   }
   if ((HEAP8[i2 + 22 | 0] & 1) == 0) {
    d12 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i4 >> 2];
   }
   if (d11 == d12) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 24 | 0;
 i3 = i2 + 24 | 0;
 i5 = HEAP8[i1 + 29 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 29 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 28 | 0] ^ HEAP8[i1 + 28 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 30 | 0] & 1) == 0) {
  d13 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d13 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 30 | 0] & 1) == 0) {
  d14 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d14 = +HEAPF32[i3 >> 2];
 }
 if (d13 == d14) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN7WebCore22RenderLayerModelObject15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 0) {
  __ZN7WebCore13RenderElement15willBeDestroyedEv(i2);
  return;
 }
 i3 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if (!((i3 | 0) == 6 | (i3 | 0) == 3)) {
  __ZN7WebCore13RenderElement15willBeDestroyedEv(i2);
  return;
 }
 __ZN7WebCore9FrameView31removeViewportConstrainedObjectEPNS_13RenderElementE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i2);
 __ZN7WebCore13RenderElement15willBeDestroyedEv(i2);
 return;
}
function __ZN7WebCore22RenderLayerModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore13RenderElementC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 40 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22RenderLayerModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore13RenderElementC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 1);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 40 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22RenderLayerModelObject11createLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(212) | 0;
 __ZN7WebCore11RenderLayerC1ERNS_22RenderLayerModelObjectE(i2, i1);
 i3 = i1 + 40 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  i5 = i2;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 31](i4);
  i5 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] | 32768;
 __ZN7WebCore11RenderLayer19insertOnlyThisLayerEv(i5);
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
function iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
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
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore22RenderLayerModelObjectD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore13RenderElementD2Ev(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 184 >> 2] & 31](i3);
 i4 = i1 | 0;
 __ZN7WebCore13RenderElementD2Ev(i4);
 return;
}
function __ZN7WebCore22RenderLayerModelObjectD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore13RenderElementD2Ev(i4);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 184 >> 2] & 31](i3);
 i4 = i1 | 0;
 __ZN7WebCore13RenderElementD2Ev(i4);
 return;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore22RenderLayerModelObjectD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 184 >> 2] & 31](i3);
 }
 __ZN7WebCore13RenderElementD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore22RenderLayerModelObject12destroyLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 40 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 31](i1);
 return;
}
function viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 20 | 0] & 32) != 0;
 return i3 | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 31](i1, i2, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function __ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 20 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -234881025 | i2 << 25 & 234881024;
 return;
}
function viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17strokeBoundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject17objectBoundingBoxEv(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
}
function v___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE();
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
}
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement16insertedIntoTreeEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
 return 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
function b9(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(9);
 return 0;
}
function vi___ZN7WebCore13RenderElement6layoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement6layoutEv(i1 | 0);
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv(i1) {
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
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function __ZNK7WebCore17CachedImageClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject23isTextControlInnerBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGViewportContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isSVGResourceContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject22isRenderMathMLFractionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore22RenderLayerModelObject15updateFromStyleEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject21isRenderScrollbarPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isStretchingChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isSVGHiddenContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject20isRenderMathMLFencedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject23setNeedsTransformUpdateEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore12RenderObject21needsBoundariesUpdateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSnapshottedPlugInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isSVGResourceFilterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isRenderMathMLBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject19isFileUploadControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore12RenderObject18isSVGForeignObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderMathMLMathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFullScreenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18isRenderFlowThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderTableColEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isRenderSVGBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject16isEmbeddedObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableSectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isTableCaptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isSVGContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderRegionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderIFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject14isRenderButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject13isTextControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isSVGTextPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTextFieldEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject11isSVGInlineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTextAreaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isTableRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGShapeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isRubyBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isListItemEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFrameSetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject10isFieldsetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isSVGPathEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isRubyRunEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isReplicaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject9isCounterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZNK7WebCore12RenderObject8isWidgetEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject8isCanvasEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isVideoEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isQuoteEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMeterEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isMediaEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject6lengthEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore12RenderObject6isRubyEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b0,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b1,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b1,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,vi___ZN7WebCore13RenderElement6layoutEv__wrapper,b2,__ZN7WebCore22RenderLayerModelObject15willBeDestroyedEv,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,__ZN7WebCore22RenderLayerModelObject15updateFromStyleEv,b2,__ZN7WebCore22RenderLayerModelObjectD2Ev,b2,__ZN7WebCore22RenderLayerModelObjectD0Ev,b2,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b3,__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper
  ,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b5,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b5,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b5,__ZNK7WebCore12RenderObject10isRubyTextEv,b5,__ZNK7WebCore12RenderObject6isRubyEv,b5,__ZNK7WebCore12RenderObject7isImageEv,b5,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b5,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b5,__ZNK7WebCore12RenderObject8isWidgetEv,b5,__ZNK7WebCore12RenderObject11isTextFieldEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b5,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGRootEv,b5,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv
  ,b5,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b5,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b5,__ZNK7WebCore12RenderObject7isMeterEv,b5,__ZNK7WebCore12RenderObject14isSVGContainerEv,b5,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b5,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b5,__ZNK7WebCore12RenderObject7isQuoteEv,b5,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b5,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b5,__ZNK7WebCore12RenderObject10isSVGImageEv,b5,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b5,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b5,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b5,__ZNK7WebCore12RenderObject16isRenderTableColEv
  ,b5,__ZNK7WebCore12RenderObject7isVideoEv,b5,__ZNK7WebCore12RenderObject10isProgressEv,b5,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b5,__ZNK7WebCore12RenderObject13isCombineTextEv,b5,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b5,__ZNK7WebCore12RenderObject5isWBREv,b5,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b5,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b5,__ZNK7WebCore13RenderElement14firstChildSlowEv,b5,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b5,__ZNK7WebCore12RenderObject7isFrameEv,b5,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b5,__ZNK7WebCore12RenderObject9isReplicaEv,b5,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b5,__ZNK7WebCore12RenderObject19isFileUploadControlEv
  ,b5,__ZNK7WebCore12RenderObject7isMediaEv,b5,__ZNK7WebCore12RenderObject10isSVGShapeEv,b5,__ZNK7WebCore12RenderObject14isRenderButtonEv,b5,__ZNK7WebCore12RenderObject8isSliderEv,b5,__ZNK7WebCore12RenderObject10isRubyBaseEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b5,__ZNK7WebCore12RenderObject8isCanvasEv,b5,__ZNK7WebCore12RenderObject10isMenuListEv,b5,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b5,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b5,__ZNK7WebCore12RenderObject14isTableCaptionEv,b5,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b5,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b5,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject13isSliderThumbEv
  ,b5,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b5,__ZNK7WebCore12RenderObject13isTextControlEv,b5,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGTextEv,b5,__ZNK7WebCore12RenderObject10isTextAreaEv,b5,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b5,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b5,__ZNK7WebCore12RenderObject11isTableCellEv,b5,__ZNK7WebCore12RenderObject12isRenderGridEv,b5,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b5,__ZNK7WebCore12RenderObject9isListBoxEv,b5,__ZNK7WebCore12RenderObject9isSVGPathEv,b5,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b5,__ZNK7WebCore12RenderObject13isRenderImageEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv
  ,b5,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject10isListItemEv,b5,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b5,__ZNK7WebCore12RenderObject6lengthEv,b5,__ZNK7WebCore12RenderObject10isTableRowEv,b5,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject10isFrameSetEv,b5,__ZNK7WebCore12RenderObject10isFieldsetEv,b5,__ZNK7WebCore12RenderObject11isSVGInlineEv,b5,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b5,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b5,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b5,__ZNK7WebCore13RenderElement13lastChildSlowEv,b5,__ZNK7WebCore12RenderObject9isRubyRunEv,b5,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv
  ,b5,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b5,__ZNK7WebCore12RenderObject14isRenderRegionEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b5,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b5,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b5,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b5,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b5,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject9isCounterEv,b5,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b5,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b5,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b5,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b5,__ZNK7WebCore12RenderObject19virtualContinuationEv,b5,__ZNK7WebCore12RenderObject12isListMarkerEv
  ,b5,__ZNK7WebCore12RenderObject7isEmptyEv,b5,__ZNK7WebCore12RenderObject7isTableEv,b5,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b5,__ZNK7WebCore12RenderObject14isTableSectionEv,b5,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b6,__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b6,viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b6,__ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b6,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b6,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b6,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b6,__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b6,viii___ZNK7WebCore12RenderObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b6,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b6,__ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE,b6,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper,b7,v____cxa_pure_virtual__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b8,__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE,b8,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b8,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b8,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_iiiiii = [b9,b9,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b9];
  var FUNCTION_TABLE_viiii = [b10,b10,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b10,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b10,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b10,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b10,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b10,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b10,b10,b10];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore22RenderLayerModelObject15willBeDestroyedEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore22RenderLayerModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore22RenderLayerModelObject15updateFromStyleEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore9LengthBoxeqERKS0_","__ZN7WebCore22RenderLayerModelObject12destroyLayerEv","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZN7WebCore22RenderLayerModelObject11createLayerEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore12RenderObject17setSelectionStateENS0_14SelectionStateE","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","_memset","__ZNK7WebCore12RenderObject11isTableCellEv","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCore22RenderLayerModelObjectD2Ev","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore22RenderLayerModelObjectD0Ev","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore22RenderLayerModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv"]

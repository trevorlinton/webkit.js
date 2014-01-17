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
H_BASE = parentModule["_malloc"](720 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 720;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17HTMLCanvasElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
var __ZN7WebCore17HTMLCanvasElementD1Ev;
/* memory initializer */ allocate([100,97,116,97,58,44,0,0,105,109,97,103,101,47,112,110,103,0,0,0,0,0,0,0,119,101,98,107,105,116,45,51,100,0,0,0,0,0,0,0,101,120,112,101,114,105,109,101,110,116,97,108,45,119,101,98,103,108,0,0,0,0,0,0,119,101,98,103,108,0,0,0,50,100,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore9HTMLNames10heightAttrE=env.__ZN7WebCore9HTMLNames10heightAttrE|0;
  var __ZN7WebCore9HTMLNames9canvasTagE=env.__ZN7WebCore9HTMLNames9canvasTagE|0;
  var __ZN7WebCore9HTMLNames9widthAttrE=env.__ZN7WebCore9HTMLNames9widthAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+720)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+712)|0;
  var __ZTVN7WebCore17HTMLCanvasElementE=(H_BASE+88)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 124;
}
function __ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = i1 + 124 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 do {
  if ((i22 | 0) != 0) {
   i21 = i22 + 4 | 0;
   i23 = i21 | 0;
   i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
   if ((i24 | 0) != 0) {
    HEAP32[i23 >> 2] = i24;
    break;
   }
   i24 = i21 - 4 | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
  }
 } while (0);
 HEAP8[i1 + 110 | 0] = 0;
 i22 = __ZNK7WebCore4Node9renderBoxEv(i1 | 0) | 0;
 do {
  if ((i22 | 0) != 0) {
   i24 = i22 | 0;
   i21 = i22;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 744 >> 2] & 255](i24) | 0;
   i25 = i22;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 712 >> 2] & 63](i10, i24);
   i26 = (HEAP32[i10 >> 2] | 0) + i23 | 0;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 736 >> 2] & 255](i24) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 704 >> 2] & 63](i11, i24);
   i21 = (HEAP32[i11 >> 2] | 0) + i23 | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i4, i22);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 712 >> 2] & 63](i5, i24);
   i23 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 716 >> 2] & 63](i6, i24);
   i27 = i23 - (HEAP32[i6 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i7, i22);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 704 >> 2] & 63](i8, i24);
   i23 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 708 >> 2] & 63](i9, i24);
   d28 = +(i23 - (HEAP32[i9 >> 2] | 0) | 0);
   d29 = +(+(i26 | 0));
   d30 = +(+(i21 | 0));
   HEAPF32[i13 >> 2] = d29;
   HEAPF32[i13 + 4 >> 2] = d30;
   i21 = i12 + 8 | 0;
   d30 = +(+(i27 | 0));
   d29 = +d28;
   HEAPF32[i21 >> 2] = d30;
   HEAPF32[i21 + 4 >> 2] = d29;
   d29 = +(HEAP32[i1 + 72 >> 2] | 0);
   d30 = +(HEAP32[i1 + 76 >> 2] | 0);
   HEAPF32[i16 >> 2] = +0;
   HEAPF32[i16 + 4 >> 2] = +0;
   HEAPF32[i16 + 8 >> 2] = d29;
   HEAPF32[i16 + 12 >> 2] = d30;
   __ZN7WebCore7mapRectERKNS_9FloatRectES2_S2_(i15, i2, i16, i14);
   __ZN7WebCore9FloatRect9intersectERKS0_(i15, i14);
   if (+HEAPF32[i15 + 8 >> 2] <= +0) {
    STACKTOP = i3;
    return;
   }
   if (+HEAPF32[i15 + 12 >> 2] <= +0) {
    STACKTOP = i3;
    return;
   }
   i21 = i1 + 88 | 0;
   if (__ZNK7WebCore9FloatRect8containsERKS0_(i21, i15) | 0) {
    STACKTOP = i3;
    return;
   } else {
    __ZN7WebCore9FloatRect5uniteERKS0_(i21, i15);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i21);
    i21 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i17 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i17 + 4 >> 2] = i21;
    i21 = i18 + 8 | 0;
    i27 = HEAP32[i21 + 4 >> 2] | 0;
    HEAP32[i17 + 8 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i17 + 12 >> 2] = i27;
    __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i22 | 0, i17, 0);
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i1 + 52 >> 2] | 0;
 i22 = HEAP32[i1 + 56 >> 2] | 0;
 i18 = i17 + (i22 << 2) | 0;
 if ((HEAP32[i1 + 64 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 L23 : do {
  if ((i22 | 0) == 0) {
   i31 = i17;
  } else {
   i19 = i17;
   while (1) {
    i20 = HEAP32[i19 >> 2] | 0;
    if (!((i20 | 0) == (-1 | 0) | (i20 | 0) == 0)) {
     i31 = i19;
     break L23;
    }
    i19 = i19 + 4 | 0;
    if ((i19 | 0) == (i18 | 0)) {
     break;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i31 | 0) == (i18 | 0)) {
  STACKTOP = i3;
  return;
 }
 i17 = i31;
 i22 = HEAP32[i31 >> 2] | 0;
 L32 : while (1) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] & 31](i22, i1, i2);
  i31 = i17 + 4 | 0;
  if ((i31 | 0) == (i18 | 0)) {
   i32 = 23;
   break;
  } else {
   i33 = i31;
  }
  while (1) {
   i34 = HEAP32[i33 >> 2] | 0;
   i31 = i34;
   if (!((i31 | 0) == (-1 | 0) | (i31 | 0) == 0)) {
    break;
   }
   i31 = i33 + 4 | 0;
   if ((i31 | 0) == (i18 | 0)) {
    i32 = 26;
    break L32;
   } else {
    i33 = i31;
   }
  }
  if ((i33 | 0) == (i18 | 0)) {
   i32 = 24;
   break;
  } else {
   i17 = i33;
   i22 = i34;
  }
 }
 if ((i32 | 0) == 23) {
  STACKTOP = i3;
  return;
 } else if ((i32 | 0) == 24) {
  STACKTOP = i3;
  return;
 } else if ((i32 | 0) == 26) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLCanvasElement5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 85 | 0] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 109 | 0;
 i6 = (HEAP8[i5] & 1) == 0;
 i7 = i1 | 0;
 i8 = __ZNK3WTF6String5toIntEPb(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames9widthAttrE) | 0, i3) | 0;
 i9 = (HEAP8[i3] & 1) == 0 | (i8 | 0) < 0 ? 300 : i8;
 i8 = __ZNK3WTF6String5toIntEPb(__ZNK7WebCore7Element12getAttributeERKNS_13QualifiedNameE(i7, __ZN7WebCore9HTMLNames10heightAttrE) | 0, i3) | 0;
 i7 = (HEAP8[i3] & 1) == 0 | (i8 | 0) < 0 ? 150 : i8;
 i8 = i1 + 116 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i3 >> 2] | 0);
  HEAP8[i3 + 4 | 0] = 0;
  i3 = HEAP32[i8 >> 2] | 0;
  __ZN7WebCore15GraphicsContext4saveEv(HEAP32[i3 >> 2] | 0);
  HEAP8[i3 + 4 | 0] = 1;
 }
 i3 = i1 + 80 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 255](i8) | 0)) {
    break;
   }
   __ZN7WebCore24CanvasRenderingContext2D5resetEv(HEAP32[i3 >> 2] | 0);
  }
 } while (0);
 i8 = i1 + 72 | 0;
 i10 = i8;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i7;
 do {
  if ((HEAP8[i5] & 1) != 0) {
   if (!((i11 | 0) == (i9 | 0) & (i12 | 0) == (i7 | 0))) {
    break;
   }
   if (+HEAPF32[i1 + 104 >> 2] != +1) {
    break;
   }
   i10 = HEAP32[i3 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 255](i10) | 0)) {
    break;
   }
   i10 = i1 + 110 | 0;
   if ((HEAP8[i10] & 1) != 0) {
    STACKTOP = i2;
    return;
   }
   HEAP8[i10] = 1;
   i10 = HEAP32[i3 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 255](i10) | 0)) {
    STACKTOP = i2;
    return;
   }
   __ZN7WebCore24CanvasRenderingContext2D9clearRectEffff(HEAP32[i3 >> 2] | 0, +0, +0, +(HEAP32[i1 + 72 >> 2] | 0), +(HEAP32[i1 + 76 >> 2] | 0));
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAPF32[i1 + 104 >> 2] = +1;
 __ZN7WebCore17HTMLCanvasElement14setSurfaceSizeERKNS_7IntSizeE(i1, i4);
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 255](i4) | 0)) {
    break;
   }
   i7 = HEAP32[i8 >> 2] | 0;
   i9 = HEAP32[i1 + 76 >> 2] | 0;
   if ((i11 | 0) == (i7 | 0) & (i12 | 0) == (i9 | 0)) {
    break;
   }
   __ZN7WebCore21WebGLRenderingContext7reshapeEii(HEAP32[i3 >> 2] | 0, i7, i9);
  }
 } while (0);
 i3 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i13 = i3 | 0;
 } else {
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i1 + 84 | 0] & 1) == 0) {
    break;
   }
   if ((i11 | 0) == (HEAP32[i8 >> 2] | 0)) {
    if ((i12 | 0) != (HEAP32[i1 + 76 >> 2] | 0)) {
     i14 = 26;
    }
   } else {
    i14 = 26;
   }
   do {
    if ((i14 | 0) == 26) {
     __ZN7WebCore16RenderHTMLCanvas17canvasSizeChangedEv(i3);
     i13 = i1 | 0;
     if ((__ZNK7WebCore4Node9renderBoxEv(i13) | 0) == 0) {
      break;
     }
     if (!(__ZNK7WebCore20RenderBoxModelObject25hasAcceleratedCompositingEv(__ZNK7WebCore4Node9renderBoxEv(i13) | 0) | 0)) {
      break;
     }
     __ZN7WebCore20RenderBoxModelObject14contentChangedENS_17ContentChangeTypeE(__ZNK7WebCore4Node9renderBoxEv(i13) | 0, 3);
    }
   } while (0);
   if (i6) {
    break;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i3, 0);
  }
 } while (0);
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 i6 = HEAP32[i1 + 56 >> 2] | 0;
 i12 = i3 + (i6 << 2) | 0;
 if ((HEAP32[i1 + 64 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L49 : do {
  if ((i6 | 0) == 0) {
   i15 = i3;
  } else {
   i8 = i3;
   while (1) {
    i11 = HEAP32[i8 >> 2] | 0;
    if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
     i15 = i8;
     break L49;
    }
    i8 = i8 + 4 | 0;
    if ((i8 | 0) == (i12 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i15 | 0) == (i12 | 0)) {
  STACKTOP = i2;
  return;
 } else {
  i16 = i15;
 }
 L57 : while (1) {
  i15 = HEAP32[i16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 12 >> 2] & 63](i15, i1);
  i15 = i16 + 4 | 0;
  if ((i15 | 0) == (i12 | 0)) {
   i14 = 48;
   break;
  } else {
   i17 = i15;
  }
  while (1) {
   i15 = HEAP32[i17 >> 2] | 0;
   if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
    break;
   }
   i15 = i17 + 4 | 0;
   if ((i15 | 0) == (i12 | 0)) {
    i14 = 50;
    break L57;
   } else {
    i17 = i15;
   }
  }
  if ((i17 | 0) == (i12 | 0)) {
   i14 = 49;
   break;
  } else {
   i16 = i17;
  }
 }
 if ((i14 | 0) == 48) {
  STACKTOP = i2;
  return;
 } else if ((i14 | 0) == 49) {
  STACKTOP = i2;
  return;
 } else if ((i14 | 0) == 50) {
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0, d11 = +0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 HEAP8[i1 + 109 | 0] = 1;
 HEAP8[i1 + 110 | 0] = 1;
 i7 = i1 + 72 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i4, i7);
 i8 = i1 + 104 | 0;
 d9 = +HEAPF32[i8 >> 2];
 d10 = +Math_ceil(+HEAPF32[i4 >> 2] * d9);
 d11 = +Math_ceil(d9 * +HEAPF32[i4 + 4 >> 2]);
 i4 = i5 | 0;
 HEAPF32[i4 >> 2] = d10;
 i12 = i5 + 4 | 0;
 HEAPF32[i12 >> 2] = d11;
 if (!(__ZNK7WebCore9FloatSize22isExpressibleAsIntSizeEv(i5) | 0)) {
  STACKTOP = i2;
  return;
 }
 d11 = +HEAPF32[i4 >> 2];
 d10 = +HEAPF32[i12 >> 2];
 if (d11 * d10 > +268435456) {
  STACKTOP = i2;
  return;
 }
 if ((~~d11 | 0) == 0 | (~~d10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 d10 = +HEAPF32[i8 >> 2];
 HEAP8[i3] = 0;
 i8 = __ZN3WTF10fastMallocEj(144) | 0;
 i12 = i8;
 __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i12, i7, d10, 0, 0, i3);
 do {
  if ((HEAP8[i3] & 1) == 0) {
   if ((i8 | 0) == 0) {
    i13 = 0;
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i12);
   __ZN3WTF8fastFreeEPv(i8);
   i13 = 0;
  } else {
   i13 = i12;
  }
 } while (0);
 i12 = i1 + 112 | 0;
 i8 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = i13;
 if ((i8 | 0) == 0) {
  i14 = i13;
 } else {
  __ZN7WebCore11ImageBufferD1Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  i14 = HEAP32[i12 >> 2] | 0;
 }
 if ((i14 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore15GraphicsContext26setShadowsIgnoreTransformsEb(__ZNK7WebCore11ImageBuffer7contextEv(i14) | 0, 1);
 __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(__ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i12 >> 2] | 0) | 0, 0);
 i14 = i1 + 20 | 0;
 do {
  if ((__ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) | 0) != 0) {
   if ((HEAP8[(__ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0) | 0) + 182 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(__ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i12 >> 2] | 0) | 0, 0);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(__ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i12 >> 2] | 0) | 0, +1);
 i8 = __ZN3WTF10fastMallocEj(8) | 0;
 i13 = __ZNK7WebCore11ImageBuffer7contextEv(HEAP32[i12 >> 2] | 0) | 0;
 HEAP32[i8 >> 2] = i13;
 HEAP8[i8 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext4saveEv(i13);
 i13 = i1 + 116 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i8;
 if ((i1 | 0) != 0) {
  if ((HEAP8[i1 + 4 | 0] & 1) != 0) {
   __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i1 >> 2] | 0);
  }
  __ZN3WTF8fastFreeEPv(i1);
 }
 i1 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 __ZN3JSC12JSLockHolderC1EPNS_2VME(i6, __ZN7WebCore22ScriptExecutionContext2vmEv((i1 | 0) == 0 ? 0 : i1 + 88 | 0) | 0);
 i1 = HEAP32[i12 >> 2] | 0;
 i12 = Math_imul(HEAP32[i1 + 112 >> 2] << 2, HEAP32[i1 + 116 >> 2] | 0) | 0;
 i1 = HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] | 0;
 i14 = __ZN7WebCore22ScriptExecutionContext2vmEv((i1 | 0) == 0 ? 0 : i1 + 88 | 0) | 0;
 if (i12 >>> 0 > 256 >>> 0) {
  __ZN3JSC4Heap29reportExtraMemoryCostSlowCaseEj(i14 + 16 | 0, i12);
 }
 __ZN3JSC12JSLockHolderD1Ev(i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17HTMLCanvasElement10getContextERKN3WTF6StringEPNS_23CanvasContextAttributesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 80 | 0) | 0) {
  i2 = i1 + 80 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] & 255](i7) | 0)) {
     i8 = 0;
     STACKTOP = i4;
     return i8 | 0;
    }
    i9 = HEAP32[i2 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    } else {
     i8 = i9;
    }
    STACKTOP = i4;
    return i8 | 0;
   }
  } while (0);
  i7 = i1 + 20 | 0;
  i9 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) | 0;
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   i10 = (HEAP8[i9 + 194 | 0] & 1) != 0;
  }
  i9 = (HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0;
  i7 = __ZN3WTF10fastMallocEj(264) | 0;
  __ZN7WebCore24CanvasRenderingContext2DC1EPNS_17HTMLCanvasElementEbb(i7, i1, i9, i10);
  i10 = i7;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i10;
  if ((i7 | 0) == 0) {
   i8 = i10;
   STACKTOP = i4;
   return i8 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  i8 = HEAP32[i2 >> 2] | 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i2 = i1 | 0;
 i7 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP8[i7 + 193 | 0] & 8) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 if ((HEAP8[i7 + 180 | 0] & 8) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 72 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 48 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i4;
   return i8 | 0;
  }
 } while (0);
 i6 = i1 + 80 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 12 >> 2] & 255](i7) | 0)) {
    i8 = 0;
    STACKTOP = i4;
    return i8 | 0;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i8 = i10;
   }
   STACKTOP = i4;
   return i8 | 0;
  }
 } while (0);
 __ZN7WebCore21WebGLRenderingContext6createEPNS_17HTMLCanvasElementEPNS_22WebGLContextAttributesE(i5, i1, i3);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i1 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i1;
 if ((i5 | 0) == 0) {
  i11 = i1;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
  i11 = HEAP32[i6 >> 2] | 0;
 }
 if ((i11 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i2, 49152);
 i8 = HEAP32[i6 >> 2] | 0;
 STACKTOP = i4;
 return i8 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
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
  i26 = __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
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
function __ZN7WebCore17HTMLCanvasElementD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 64 >> 2] | 0) != 0) {
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 63](i7, i1);
    i7 = i9 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i7;
    }
    while (1) {
     i7 = HEAP32[i10 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i10 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i7;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i10 = i1 + 80 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
 }
 i9 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 4 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i9 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i9 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i9 | 0) != 0) {
  if ((HEAP8[i9 + 4 | 0] & 1) != 0) {
   __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i9 >> 2] | 0);
  }
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 112 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore11ImageBufferD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 }
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i11 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i11);
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 i11 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i11);
 return;
}
function __ZN7WebCore17HTMLCanvasElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 i2 = i1 + 52 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 L1 : do {
  if ((HEAP32[i1 + 64 >> 2] | 0) != 0) {
   L3 : do {
    if ((i4 | 0) == 0) {
     i6 = i3;
    } else {
     i7 = i3;
     while (1) {
      i8 = HEAP32[i7 >> 2] | 0;
      if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
       i6 = i7;
       break L3;
      }
      i7 = i7 + 4 | 0;
      if ((i7 | 0) == (i5 | 0)) {
       break L1;
      }
     }
    }
   } while (0);
   if ((i6 | 0) == (i5 | 0)) {
    break;
   } else {
    i9 = i6;
   }
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 63](i7, i1);
    i7 = i9 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break L1;
    } else {
     i10 = i7;
    }
    while (1) {
     i7 = HEAP32[i10 >> 2] | 0;
     if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
      break;
     }
     i7 = i10 + 4 | 0;
     if ((i7 | 0) == (i5 | 0)) {
      break L1;
     } else {
      i10 = i7;
     }
    }
    if ((i10 | 0) == (i5 | 0)) {
     break;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 i10 = i1 + 80 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if ((i9 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
 }
 i9 = HEAP32[i1 + 124 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i5 = i9 + 4 | 0;
   i6 = i5 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i5 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 i9 = HEAP32[i1 + 120 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   i3 = i9 + 4 | 0;
   i5 = i3 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i9 = HEAP32[i1 + 116 >> 2] | 0;
 if ((i9 | 0) != 0) {
  if ((HEAP8[i9 + 4 | 0] & 1) != 0) {
   __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i9 >> 2] | 0);
  }
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i1 + 112 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore11ImageBufferD1Ev(i6);
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 }
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i11 = i1 | 0;
  __ZN7WebCore13StyledElementD2Ev(i11);
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 i11 = i1 | 0;
 __ZN7WebCore13StyledElementD2Ev(i11);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
function __ZN7WebCore17HTMLCanvasElement5paintEPNS_15GraphicsContextERKNS_10LayoutRectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 + 16 | 0;
 i7 = i5 + 32 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i5 | 0;
 _memset(i10 | 0, 0, 16) | 0;
 i11 = i1 + 88 | 0;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i1 + 80 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((i11 | 0) != 0) {
  do {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] & 255](i11) | 0) {
    i12 = i1 | 0;
    if ((__ZNK7WebCore4Node9renderBoxEv(i12) | 0) == 0) {
     break;
    }
    if (!(__ZNK7WebCore20RenderBoxModelObject25hasAcceleratedCompositingEv(__ZNK7WebCore4Node9renderBoxEv(i12) | 0) | 0)) {
     break;
    }
    if ((HEAP8[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) != 0) {
     break;
    }
    STACKTOP = i5;
    return;
   }
  } while (0);
  i11 = HEAP32[i10 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 63](i11);
 }
 do {
  if ((HEAP8[i1 + 109 | 0] & 1) != 0) {
   i11 = HEAP32[i1 + 112 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i1 + 120 >> 2] | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i3);
    __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeEb(i2, i11, 0, i9, 2, 0, i4);
    break;
   } else {
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i3);
    HEAP32[i7 >> 2] = 0;
    HEAP32[i7 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i12, 0, i6, 2, i8, i4);
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 255](i4) | 0)) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore21WebGLRenderingContext19markLayerCompositedEv(HEAP32[i10 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore14CanvasObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
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
 __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore17HTMLCanvasElement11copiedImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 124 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i6 = i1 + 109 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1);
 }
 i7 = i1 + 112 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i8 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 63](i8);
 }
 if ((HEAP8[i6] & 1) == 0) {
  __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1);
 }
 __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i3, HEAP32[i7 >> 2] | 0, 0, 1);
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
   i6 = i3 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i3 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i1 >> 2] = i8;
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i8 = i7 - 4 | 0;
 if ((i8 | 0) == 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 i5 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore17HTMLCanvasElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 720 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 712 >> 2] = i7;
    HEAP32[H_BASE + 720 >> 2] = 1;
    HEAP32[H_BASE + 724 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 712 >> 2] | 0;
    break;
   }
  } else {
   i8 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i6;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 96;
 _memset(i1 + 52 | 0, 0, 20) | 0;
 HEAP32[i1 + 72 >> 2] = 300;
 HEAP32[i1 + 76 >> 2] = 150;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP8[i1 + 85 | 0] = 0;
 _memset(i1 + 88 | 0, 0, 16) | 0;
 HEAPF32[i1 + 104 >> 2] = +1;
 HEAP8[i1 + 108 | 0] = 1;
 HEAP8[i1 + 109 | 0] = 0;
 HEAP8[i1 + 110 | 0] = 0;
 _memset(i1 + 112 | 0, 0, 16) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 return;
}
function __ZN7WebCore17HTMLCanvasElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i1 | 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 1;
 HEAP32[i4 >> 2] = __ZTVN7WebCore4NodeE + 8;
 i5 = i1 + 12 | 0;
 HEAP32[i5 >> 2] = 8222;
 HEAP32[i1 + 16 >> 2] = 0;
 i6 = i1 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 720 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 712 >> 2] = i7;
    HEAP32[H_BASE + 720 >> 2] = 1;
    HEAP32[H_BASE + 724 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 712 >> 2] | 0;
    break;
   }
  } else {
   i8 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i8;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 i6 = i8 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 + 44 >> 2] = i6;
 i2 = i6 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i1 + 48 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 96;
 _memset(i1 + 52 | 0, 0, 20) | 0;
 HEAP32[i1 + 72 >> 2] = 300;
 HEAP32[i1 + 76 >> 2] = 150;
 HEAP32[i1 + 80 >> 2] = 0;
 HEAP8[i1 + 84 | 0] = 0;
 HEAP8[i1 + 85 | 0] = 0;
 _memset(i1 + 88 | 0, 0, 16) | 0;
 HEAPF32[i1 + 104 >> 2] = +1;
 HEAP8[i1 + 108 | 0] = 1;
 HEAP8[i1 + 109 | 0] = 0;
 HEAP8[i1 + 110 | 0] = 0;
 _memset(i1 + 112 | 0, 0, 16) | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 return;
}
function __ZN7WebCore17HTMLCanvasElement9toDataURLERKN3WTF6StringEPKdRi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 if ((HEAP8[i2 + 108 | 0] & 1) == 0) {
  HEAP32[i5 >> 2] = 18;
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 do {
  if ((HEAP32[i2 + 72 >> 2] | 0) >= 1) {
   if ((HEAP32[i2 + 76 >> 2] | 0) < 1) {
    break;
   }
   i5 = i2 + 109 | 0;
   if ((HEAP8[i5] & 1) == 0) {
    __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i2);
   }
   i8 = i2 + 112 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore17HTMLCanvasElement18toEncodingMimeTypeERKN3WTF6StringE(i7, i3);
   i9 = HEAP32[i2 + 80 >> 2] | 0;
   if ((i9 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 63](i9);
   }
   if ((HEAP8[i5] & 1) == 0) {
    __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i2);
   }
   __ZNK7WebCore11ImageBuffer9toDataURLERKN3WTF6StringEPKdNS0_16CoordinateSystemE(i1, HEAP32[i8 >> 2] | 0, i7, i4, 0);
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   i5 = i8 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    STACKTOP = i6;
    return;
   } else {
    HEAP32[i5 >> 2] = i9;
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i1, H_BASE + 8 | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore17HTMLCanvasElement28notifyObserversCanvasChangedERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 i4 = HEAP32[i1 + 56 >> 2] | 0;
 i5 = i3 + (i4 << 2) | 0;
 if ((HEAP32[i1 + 64 >> 2] | 0) == 0) {
  return;
 }
 L4 : do {
  if ((i4 | 0) == 0) {
   i6 = i3;
  } else {
   i7 = i3;
   while (1) {
    i8 = HEAP32[i7 >> 2] | 0;
    if (!((i8 | 0) == (-1 | 0) | (i8 | 0) == 0)) {
     i6 = i7;
     break L4;
    }
    i7 = i7 + 4 | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i6 | 0) == (i5 | 0)) {
  return;
 } else {
  i9 = i6;
 }
 L12 : while (1) {
  i6 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i6, i1, i2);
  i6 = i9 + 4 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   i10 = 11;
   break;
  } else {
   i11 = i6;
  }
  while (1) {
   i6 = HEAP32[i11 >> 2] | 0;
   if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
    break;
   }
   i6 = i11 + 4 | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i10 = 14;
    break L12;
   } else {
    i11 = i6;
   }
  }
  if ((i11 | 0) == (i5 | 0)) {
   i10 = 15;
   break;
  } else {
   i9 = i11;
  }
 }
 if ((i10 | 0) == 15) {
  return;
 } else if ((i10 | 0) == 14) {
  return;
 } else if ((i10 | 0) == 11) {
  return;
 }
}
function __ZN7WebCore17HTMLCanvasElement20makePresentationCopyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 120 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i1 + 109 | 0] & 1) == 0) {
  __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1);
 }
 __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i3, HEAP32[i1 + 112 >> 2] | 0, 0, 1);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i4 = i3 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i3 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i5 + 4 | 0;
 i5 = i1 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i5 >> 2] = i6;
  STACKTOP = i2;
  return;
 }
 i6 = i1 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore17HTMLCanvasElement23probablySupportsContextERKN3WTF6StringEPNS_23CanvasContextAttributesE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i3 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 80 | 0) | 0) {
  i2 = HEAP32[i1 + 80 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 1;
   return i4 | 0;
  }
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0;
  return i4 | 0;
 }
 i2 = __ZNK7WebCore8Document8settingsEv(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i2 + 193 | 0] & 8) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i2 + 180 | 0] & 8) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 72 | 0) | 0)) {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 48 | 0) | 0) {
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i3 >> 2] | 0, H_BASE + 32 | 0) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 255](i3) | 0;
 return i4 | 0;
}
function __ZN7WebCore17HTMLCanvasElement14setSurfaceSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2;
 i2 = i1 + 72 | 0;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i4;
 HEAP8[i1 + 109 | 0] = 0;
 i4 = i1 + 116 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) != 0) {
  if ((HEAP8[i2 + 4 | 0] & 1) != 0) {
   __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i2 >> 2] | 0);
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 112 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZN7WebCore11ImageBufferD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = i1 + 124 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) == 0) {
  i5 = i1 + 110 | 0;
  HEAP8[i5] = 0;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  i5 = i1 + 110 | 0;
  HEAP8[i5] = 0;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  i5 = i1 + 110 | 0;
  HEAP8[i5] = 0;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 i5 = i1 + 110 | 0;
 HEAP8[i5] = 0;
 return;
}
function __ZN7WebCore17HTMLCanvasElement18toEncodingMimeTypeERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZNK3WTF6String5lowerEv(i1, i2);
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   if (!(__ZN7WebCore16MIMETypeRegistry35isSupportedImageMIMETypeForEncodingERKN3WTF6StringE(i1) | 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 16 | 0);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i5 = i1 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLCanvasElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if (!(__ZN7WebCore16ScriptController17canExecuteScriptsENS_33ReasonForCallingCanExecuteScriptsE(HEAP32[i7 + 460 >> 2] | 0, 1) | 0)) {
    break;
   }
   HEAP8[i2 + 84 | 0] = 1;
   i8 = __ZN3WTF10fastMallocEj(100) | 0;
   HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
   __ZN7WebCore16RenderHTMLCanvasC1ERNS_17HTMLCanvasElementEN3WTF7PassRefINS_11RenderStyleEEE(i8, i2, i5);
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP8[i2 + 84 | 0] = 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2 | 0, i6);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement13baseTransformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i4, i2 + 72 | 0);
 i6 = i4 | 0;
 d7 = +HEAPF32[i2 + 104 >> 2];
 d8 = +Math_ceil(+HEAPF32[i6 >> 2] * d7);
 i2 = i4 + 4 | 0;
 i4 = ~~d8;
 i9 = ~~+Math_ceil(d7 * +HEAPF32[i2 >> 2]);
 __ZN7WebCore15AffineTransformC1Ev(i5);
 if ((i4 | 0) == 0 | (i9 | 0) == 0) {
  __ZN7WebCore15AffineTransformC1Ev(i1);
  i10 = __ZN7WebCore15AffineTransform8multiplyERKS0_(i1, i5) | 0;
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore15AffineTransform15scaleNonUniformEdd(i5, +(i4 | 0) / +HEAPF32[i6 >> 2], +(i9 | 0) / +HEAPF32[i2 >> 2]) | 0;
 __ZN7WebCore15AffineTransformC1Ev(i1);
 i10 = __ZN7WebCore15AffineTransform8multiplyERKS0_(i1, i5) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement22convertLogicalToDeviceERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i4 = i1;
 i5 = i3;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 d6 = +HEAPF32[i2 + 104 >> 2];
 __ZN7WebCore9FloatRect5scaleEff(i1, d6, d6);
 i2 = i1 | 0;
 d6 = +HEAPF32[i2 >> 2];
 d7 = +Math_floor(d6);
 i5 = i1 + 4 | 0;
 d8 = +HEAPF32[i5 >> 2];
 d9 = +Math_floor(d8);
 i4 = i1 + 8 | 0;
 d10 = +Math_ceil(d6 + +HEAPF32[i4 >> 2] - d7);
 i3 = i1 + 12 | 0;
 d6 = +Math_ceil(d8 + +HEAPF32[i3 >> 2] - d9);
 HEAPF32[i2 >> 2] = d7;
 HEAPF32[i5 >> 2] = d9;
 HEAPF32[i4 >> 2] = d10;
 HEAPF32[i3 >> 2] = d6;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement22paintsIntoCanvasBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = i1 | 0;
 do {
  if ((__ZNK7WebCore4Node9renderBoxEv(i2) | 0) != 0) {
   if (__ZNK7WebCore20RenderBoxModelObject25hasAcceleratedCompositingEv(__ZNK7WebCore4Node9renderBoxEv(i2) | 0) | 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 1;
 return i3 | 0;
}
function __ZN7WebCore17HTMLCanvasElement16clearCopiedImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 124 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 HEAP8[i1 + 110 | 0] = 0;
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
function __ZN7WebCore17HTMLCanvasElement11addObserverERNS_14CanvasObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i3 + 8 | 0, i1 + 52 | 0, i4, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17HTMLCanvasElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames9widthAttrE >> 2] | 0) | (i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames10heightAttrE >> 2] | 0)) {
  __ZN7WebCore17HTMLCanvasElement5resetEv(i1);
 }
 __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
 return;
}
function __ZN7WebCore17HTMLCanvasElement21clearPresentationCopyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 120 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore17HTMLCanvasElement12getImageDataEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2 + 80 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0)) {
    break;
   }
   i4 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] & 63](i1, i4);
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore17HTMLCanvasElement8is3dTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 72 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 48 | 0) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 32 | 0) | 0;
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
function __ZNK7WebCore17HTMLCanvasElement16clearImageBufferEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP8[i1 + 110 | 0] = 1;
 i2 = i1 + 80 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 255](i3) | 0)) {
  return;
 }
 __ZN7WebCore24CanvasRenderingContext2D9clearRectEffff(HEAP32[i2 >> 2] | 0, +0, +0, +(HEAP32[i1 + 72 >> 2] | 0), +(HEAP32[i1 + 76 >> 2] | 0));
 return;
}
function viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17HTMLCanvasElement14removeObserverERNS_14CanvasObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = i2;
 __ZN3WTF7HashSetIPN7WebCore14CanvasObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1 + 52 | 0, i4) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement14drawingContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 109 | 0] & 1) == 0) {
  __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1);
 }
 i2 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11ImageBuffer7contextEv(i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore17HTMLCanvasElement22convertLogicalToDeviceERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0;
 d4 = +HEAPF32[i2 + 104 >> 2];
 d5 = +Math_ceil(+HEAPF32[i3 >> 2] * d4);
 d6 = +Math_ceil(d4 * +HEAPF32[i3 + 4 >> 2]);
 HEAPF32[i1 >> 2] = d5;
 HEAPF32[i1 + 4 >> 2] = d6;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement22convertDeviceToLogicalERKNS_9FloatSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, d5 = +0, d6 = +0;
 d4 = +HEAPF32[i2 + 104 >> 2];
 d5 = +Math_ceil(+HEAPF32[i3 >> 2] / d4);
 d6 = +Math_ceil(+HEAPF32[i3 + 4 >> 2] / d4);
 HEAPF32[i1 >> 2] = d5;
 HEAPF32[i1 + 4 >> 2] = d6;
 return;
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZNK7WebCore17HTMLCanvasElement22existingDrawingContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 109 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 112 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11ImageBuffer7contextEv(i3) | 0;
 return i2 | 0;
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZN7WebCore17HTMLCanvasElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(128) | 0;
 __ZN7WebCore17HTMLCanvasElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore17HTMLCanvasElement6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __Znwj(128) | 0;
 __ZN7WebCore17HTMLCanvasElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i3, __ZN7WebCore9HTMLNames9canvasTagE, i2);
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore17HTMLCanvasElement4is3DEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore17HTMLCanvasElement29makeRenderingResultsAvailableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 80 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 63](i2);
 return;
}
function iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
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
function iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore17HTMLCanvasElement9setHeightEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i1 | 0, __ZN7WebCore9HTMLNames10heightAttrE, i2);
 return;
}
function __ZN7WebCore17HTMLCanvasElement8setWidthEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element20setIntegralAttributeERKNS_13QualifiedNameEi(i1 | 0, __ZN7WebCore9HTMLNames9widthAttrE, i2);
 return;
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
function __ZNK7WebCore17HTMLCanvasElement6bufferEv(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 109 | 0] & 1) == 0) {
  __ZNK7WebCore17HTMLCanvasElement17createImageBufferEv(i1);
 }
 return HEAP32[i1 + 112 >> 2] | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
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
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
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
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
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
function __ZN7WebCore17HTMLCanvasElement8is2dTypeERKN3WTF6StringE(i1) {
 i1 = i1 | 0;
 return __ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i1 >> 2] | 0, H_BASE + 80 | 0) | 0;
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
function vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11HTMLElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv(i1 | 0) | 0;
}
function __ZNK7WebCore17HTMLCanvasElement14securityOriginEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0) + 100 >> 2] | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
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
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17HTMLCanvasElement19willAttachRenderersEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20setIsInCanvasSubtreeEb(i1 | 0, 1);
 return;
}
function ii___ZNK7WebCore11HTMLElement13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore11HTMLElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11HTMLElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element16isMouseFocusableEv(i1 | 0) | 0;
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
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
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
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
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
function __ZN7WebCore17HTMLCanvasElementD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17HTMLCanvasElementD2Ev(i1);
 __ZdlPv(i1);
 return;
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
function __ZNK7WebCore17HTMLCanvasElement16shouldAccelerateERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZNK7WebCore17HTMLCanvasElement23targetDeviceScaleFactorEv(i1) {
 i1 = i1 | 0;
 return +(+1);
}
function __ZNK7WebCore17HTMLCanvasElement23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore17HTMLCanvasElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore17HTMLCanvasElement17canStartSelectionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
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
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
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
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore17HTMLCanvasElementD2Ev,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore17HTMLCanvasElement19willAttachRenderersEv,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper
  ,b1,__ZN7WebCore17HTMLCanvasElementD0Ev,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore11HTMLElement15accessKeyActionEb__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,vii___ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb
  ,b2,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv
  ,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZN7WebCore11HTMLElement15asFormNamedItemEv
  ,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore17HTMLCanvasElement17canStartSelectionEv,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,__ZNK7WebCore17HTMLCanvasElement23canContainRangeEndPointEv,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper
  ,b3,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement13supportsFocusEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore17HTMLCanvasElement23areAuthorShadowsAllowedEv,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper
  ,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore11HTMLElement11isLabelableEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b4,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b4,__ZN7WebCore17HTMLCanvasElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b4,__ZN7WebCore17HTMLCanvasElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b4,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b4,__ZN7WebCore17HTMLCanvasElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b5,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b5,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b5,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,v___ZN7WebCore7Element22customStyleForRendererEv__wrapper,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b6,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b6,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b6,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b6,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b6,iii___ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE__wrapper,b6,iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b6,iii___ZN7WebCore11HTMLElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b6,iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper,b6,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b6,iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b7,viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore9HTMLNames10heightAttrE": __ZN7WebCore9HTMLNames10heightAttrE, "__ZN7WebCore9HTMLNames9canvasTagE": __ZN7WebCore9HTMLNames9canvasTagE, "__ZN7WebCore9HTMLNames9widthAttrE": __ZN7WebCore9HTMLNames9widthAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore17HTMLCanvasElement6bufferEv","_strlen","__ZNK7WebCore17HTMLCanvasElement11copiedImageEv","__ZN7WebCore17HTMLCanvasElement9toDataURLERKN3WTF6StringEPKdRi","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore17HTMLCanvasElement5paintEPNS_15GraphicsContextERKNS_10LayoutRectEb","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore17HTMLCanvasElement14securityOriginEv","__ZNK7WebCore17HTMLCanvasElement17createImageBufferEv","__ZNK7WebCore7Element6targetEv","__ZNK7WebCore17HTMLCanvasElement13baseTransformEv","__ZN7WebCore17HTMLCanvasElement11addObserverERNS_14CanvasObserverE","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore17HTMLCanvasElement14removeObserverERNS_14CanvasObserverE","__ZN7WebCore7Element22visibilityStateChangedEv","__ZN7WebCore17HTMLCanvasElement12getImageDataEv","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore17HTMLCanvasElement10getContextERKN3WTF6StringEPNS_23CanvasContextAttributesE","__ZN7WebCore17HTMLCanvasElementD2Ev","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZN7WebCore17HTMLCanvasElement8setWidthEi","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore17HTMLCanvasElement18toEncodingMimeTypeERKN3WTF6StringE","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore17HTMLCanvasElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZN7WebCore17HTMLCanvasElement7didDrawERKNS_9FloatRectE","__ZNK7WebCore7Element12namespaceURIEv","__ZNK7WebCore17HTMLCanvasElement22paintsIntoCanvasBufferEv","__ZN7WebCore17HTMLCanvasElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore17HTMLCanvasElement6createERNS_8DocumentE","__ZN7WebCore17HTMLCanvasElement8is2dTypeERKN3WTF6StringE","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZNK7WebCore17HTMLCanvasElement22existingDrawingContextEv","__ZNK7WebCore17HTMLCanvasElement22convertLogicalToDeviceERKNS_9FloatRectE","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore17HTMLCanvasElement17canStartSelectionEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore17HTMLCanvasElement16clearImageBufferEv","__ZNK7WebCore17HTMLCanvasElement23canContainRangeEndPointEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCore17HTMLCanvasElement5resetEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore17HTMLCanvasElement4is3DEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","_memset","__ZN3WTF7HashSetIPN7WebCore14CanvasObserverENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","_memcpy","__ZNK7WebCore17HTMLCanvasElement23targetDeviceScaleFactorEv","__ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore17HTMLCanvasElement21clearPresentationCopyEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore17HTMLCanvasElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore17HTMLCanvasElement19willAttachRenderersEv","__ZNK7WebCore17HTMLCanvasElement22convertLogicalToDeviceERKNS_9FloatSizeE","__ZN7WebCore17HTMLCanvasElement28notifyObserversCanvasChangedERKNS_9FloatRectE","__ZN7WebCore17HTMLCanvasElement9setHeightEi","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZNK7WebCore17HTMLCanvasElement16shouldAccelerateERKNS_7IntSizeE","__ZN7WebCore17HTMLCanvasElement16clearCopiedImageEv","__ZN7WebCore17HTMLCanvasElement29makeRenderingResultsAvailableEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZNK7WebCore17HTMLCanvasElement23areAuthorShadowsAllowedEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore17HTMLCanvasElementD0Ev","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore17HTMLCanvasElement8is3dTypeERKN3WTF6StringE","__ZNK7WebCore17HTMLCanvasElement22convertDeviceToLogicalERKNS_9FloatSizeE","__ZN3WTF9HashTableIPN7WebCore14CanvasObserverES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZN7WebCore17HTMLCanvasElement23probablySupportsContextERKN3WTF6StringEPNS_23CanvasContextAttributesE","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore17HTMLCanvasElement14setSurfaceSizeERKNS_7IntSizeE","__ZNK7WebCore17HTMLCanvasElement14drawingContextEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore17HTMLCanvasElement20makePresentationCopyEv","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore17HTMLCanvasElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore7Element6prefixEv","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

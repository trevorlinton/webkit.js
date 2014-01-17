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
H_BASE = parentModule["_malloc"](656 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 656;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17HTMLOptionElementC1ERKNS_13QualifiedNameERNS_8DocumentE;
/* memory initializer */ allocate([32,32,32,32,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames12disabledAttrE=env.__ZN7WebCore9HTMLNames12disabledAttrE|0;
  var __ZN7WebCore9HTMLNames9selectTagE=env.__ZN7WebCore9HTMLNames9selectTagE|0;
  var __ZN3WTF9emptyAtomE=env.__ZN3WTF9emptyAtomE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN7WebCore9HTMLNames9labelAttrE=env.__ZN7WebCore9HTMLNames9labelAttrE|0;
  var __ZTVN7WebCore7ElementE=env.__ZTVN7WebCore7ElementE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames9valueAttrE=env.__ZN7WebCore9HTMLNames9valueAttrE|0;
  var __ZTVN7WebCore4NodeE=env.__ZTVN7WebCore4NodeE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames12selectedAttrE=env.__ZN7WebCore9HTMLNames12selectedAttrE|0;
  var __ZN7WebCore17InspectorCounters10s_countersE=env.__ZN7WebCore17InspectorCounters10s_countersE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore17HTMLOptionElementE=(H_BASE+16)|0;
  var __ZGVZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+656)|0;
  var __ZZN7WebCore9TreeScope18noDocumentInstanceEvE8instance=(H_BASE+648)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_vii + 34;
}
function __ZN7WebCore17HTMLOptionElement22createForJSConstructorERNS_8DocumentERKN3WTF6StringES6_bbRi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = __Znwj(60) | 0;
 i15 = i14;
 i16 = i14;
 HEAP32[i14 + 4 >> 2] = 0;
 i17 = i14 + 8 | 0;
 HEAP32[i17 >> 2] = 1;
 HEAP32[i16 >> 2] = __ZTVN7WebCore4NodeE + 8;
 i18 = i14 + 12 | 0;
 HEAP32[i18 >> 2] = 8222;
 i19 = i14 + 16 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i14 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 656 | 0] | 0) == 0) {
    i21 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i21);
    HEAP32[H_BASE + 648 >> 2] = i21;
    HEAP32[H_BASE + 656 >> 2] = 1;
    HEAP32[H_BASE + 660 >> 2] = 0;
    i22 = i21;
    break;
   } else {
    i22 = HEAP32[H_BASE + 648 >> 2] | 0;
    break;
   }
  } else {
   i22 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i20 >> 2] = i22;
 HEAP32[i14 + 24 >> 2] = 0;
 HEAP32[i14 + 28 >> 2] = 0;
 HEAP32[i14 + 32 >> 2] = 0;
 i20 = i22 + 16 | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i14 + 36 >> 2] = 0;
 HEAP32[i14 + 40 >> 2] = 0;
 HEAP32[i16 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i20 = HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0;
 HEAP32[i14 + 44 >> 2] = i20;
 i22 = i20 | 0;
 HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
 HEAP32[i14 + 48 >> 2] = 0;
 HEAP32[i16 >> 2] = H_BASE + 24;
 HEAP8[i14 + 52 | 0] = 0;
 HEAP8[i14 + 53 | 0] = 0;
 HEAP32[i14 + 56 >> 2] = 0;
 HEAP32[i18 >> 2] = HEAP32[i18 >> 2] | 1048576;
 i18 = HEAP32[i3 >> 2] | 0;
 if ((i18 | 0) == 0) {
  __ZN3WTF6StringC1EPKc(i12, H_BASE + 640 | 0);
  i23 = 0;
  i24 = 1;
 } else {
  HEAP32[i12 >> 2] = i18;
  i3 = i18 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
  i23 = 1;
  i24 = 0;
 }
 __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i11, i2, i12);
 i2 = i11 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 do {
  if (i23) {
   i2 = HEAP32[i12 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   i3 = i2 | 0;
   i18 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i18;
    break;
   }
  }
 } while (0);
 do {
  if (i24) {
   i23 = HEAP32[i12 >> 2] | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i18 = i23 | 0;
   i3 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i23);
    break;
   } else {
    HEAP32[i18 >> 2] = i3;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = 0;
 i12 = i13 | 0;
 HEAP32[i12 >> 2] = i11;
 __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i14, i13, i7) | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i12 = i13 + 8 | 0;
   i11 = i12 | 0;
   i24 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i24;
   if ((i24 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  if ((i14 | 0) == 0) {
   STACKTOP = i8;
   return;
  }
  i7 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
  HEAP32[i17 >> 2] = i7;
  if ((i7 | 0) >= 1) {
   STACKTOP = i8;
   return;
  }
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   STACKTOP = i8;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i14);
  STACKTOP = i8;
  return;
 }
 i19 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   if ((HEAP32[i19 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i9, i19);
    i25 = i9 | 0;
   } else {
    i4 = i9 | 0;
    HEAP32[i4 >> 2] = i19;
    i7 = i19 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
    i25 = i4;
   }
   i4 = i10 | 0;
   HEAP32[i4 >> 2] = HEAP32[i25 >> 2];
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i14, __ZN7WebCore9HTMLNames9valueAttrE, i10);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i4 = i7 | 0;
   i17 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i17;
    break;
   }
  }
 } while (0);
 if (i5) {
  __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i14, __ZN7WebCore9HTMLNames12selectedAttrE, __ZN3WTF9emptyAtomE);
 }
 __ZN7WebCore17HTMLOptionElement11setSelectedEb(i15, i6);
 HEAP32[i1 >> 2] = i15;
 STACKTOP = i8;
 return;
}
function __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i2 | 0) | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i7 | 0, i10 | 0) | 0;
 i10 = i11;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (i9) {
   if ((i10 | 0) == 0) {
    i12 = 9;
   } else {
    i12 = 11;
   }
  } else {
   i11 = (i10 | 0) == 0;
   if ((HEAP32[i3 + 16 >> 2] & 32 | 0) != 0) {
    if (i11) {
     i12 = 9;
     break;
    } else {
     i12 = 11;
     break;
    }
   }
   do {
    if (i11) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i12 = 34;
      break;
     }
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i10 >>> 0 > 2147483637 >>> 0) {
      i12 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i10 << 1) + 20 | 0);
     i13 = i5 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i12 = 34;
      break;
     }
     i13 = i14 + 20 | 0;
     HEAP32[i14 >> 2] = 2;
     HEAP32[i14 + 4 >> 2] = i10;
     HEAP32[i14 + 8 >> 2] = i13;
     HEAP32[i14 + 12 >> 2] = 0;
     HEAP32[i14 + 16 >> 2] = 0;
     i15 = i14;
     i16 = i13;
    }
   } while (0);
   if ((i12 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   if ((i7 | 0) != 0) {
    i11 = 0;
    while (1) {
     HEAP16[i16 + (i11 << 1) >> 1] = HEAPU8[i2 + i11 | 0] | 0;
     i11 = i11 + 1 | 0;
     if (i11 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   i11 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((HEAP32[i11 + 16 >> 2] & 32 | 0) == 0) {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i17 = 0;
      }
      while (1) {
       HEAP16[i16 + (i17 + i7 << 1) >> 1] = HEAP16[i14 + (i17 << 1) >> 1] | 0;
       i17 = i17 + 1 | 0;
       if (i17 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     } else {
      i14 = HEAP32[i11 + 8 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      } else {
       i18 = 0;
      }
      while (1) {
       HEAP16[i16 + (i18 + i7 << 1) >> 1] = HEAPU8[i14 + i18 | 0] | 0;
       i18 = i18 + 1 | 0;
       if (i18 >>> 0 >= i13 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 9) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i12 = 18;
    break;
   }
   i18 = i15 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 2;
   i19 = i15;
   i20 = 0;
  } else if ((i12 | 0) == 11) {
   if (i10 >>> 0 > 4294967275 >>> 0) {
    i12 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i10 + 20 | 0);
   i15 = i6 | 0;
   i18 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i18 | 0) == 0) {
    i12 = 18;
    break;
   }
   i15 = i18 + 20 | 0;
   HEAP32[i18 >> 2] = 2;
   HEAP32[i18 + 4 >> 2] = i10;
   HEAP32[i18 + 8 >> 2] = i15;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = 32;
   i19 = i18;
   i20 = i15;
  }
 } while (0);
 if ((i12 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 _memcpy(i20 | 0, i2 | 0, i7) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i8 = HEAP32[i2 + 4 >> 2] | 0;
   i12 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i21 = 0;
   }
   while (1) {
    HEAP8[i20 + (i21 + i7) | 0] = HEAP8[i12 + i21 | 0] | 0;
    i21 = i21 + 1 | 0;
    if (i21 >>> 0 >= i8 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i19;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17HTMLOptionElement4textEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i2 + 20 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
   i10 = 19;
  } else {
   i11 = HEAP32[i2 + 48 >> 2] | 0;
   L3 : do {
    if ((i11 | 0) == 0) {
     i12 = __ZN3WTF8nullAtomE;
    } else {
     i13 = HEAP32[i11 + 4 >> 2] | 0;
     if ((i13 & 1 | 0) == 0) {
      i14 = i13 >>> 1 & 134217727;
      i15 = i11 + 20 | 0;
     } else {
      i13 = i11 + 24 | 0;
      i14 = HEAP32[i13 + 8 >> 2] | 0;
      i15 = HEAP32[i13 >> 2] | 0;
     }
     if ((i14 | 0) == 0) {
      i12 = __ZN3WTF8nullAtomE;
      break;
     }
     i13 = HEAP32[__ZN7WebCore9HTMLNames9labelAttrE >> 2] | 0;
     i16 = i13 + 12 | 0;
     i17 = i13 + 16 | 0;
     i18 = 0;
     while (1) {
      i19 = i15 + (i18 << 3) | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      if ((i20 | 0) == (i13 | 0)) {
       break;
      }
      if ((HEAP32[i20 + 12 >> 2] | 0) == (HEAP32[i16 >> 2] | 0)) {
       if ((HEAP32[i20 + 16 >> 2] | 0) == (HEAP32[i17 >> 2] | 0)) {
        break;
       }
      }
      i20 = i18 + 1 | 0;
      if (i20 >>> 0 < i14 >>> 0) {
       i18 = i20;
      } else {
       i12 = __ZN3WTF8nullAtomE;
       break L3;
      }
     }
     i12 = (i19 | 0) == 0 ? __ZN3WTF8nullAtomE : i15 + (i18 << 3) + 4 | 0;
    }
   } while (0);
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    HEAP32[i8 >> 2] = i11;
    i10 = 21;
    break;
   }
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
   i17 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i11;
   if ((i17 | 0) == 0) {
    i21 = i11;
    i10 = 20;
    break;
   }
   i11 = i17 | 0;
   i16 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    i10 = 19;
    break;
   } else {
    HEAP32[i11 >> 2] = i16;
    i10 = 19;
    break;
   }
  }
 } while (0);
 if ((i10 | 0) == 19) {
  i12 = HEAP32[i8 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i10 = 21;
  } else {
   i21 = i12;
   i10 = 20;
  }
 }
 if ((i10 | 0) == 20) {
  if ((HEAP32[i21 + 4 >> 2] | 0) == 0) {
   i10 = 21;
  }
 }
 do {
  if ((i10 | 0) == 21) {
   __ZNK7WebCore17HTMLOptionElement22collectOptionInnerTextEv(i5, i2);
   i21 = i5 | 0;
   i12 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   i21 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i12;
   if ((i21 | 0) == 0) {
    break;
   }
   i12 = i21 | 0;
   i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i15 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i12 >> 2] = i15;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i7, HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0, i4);
 __ZNK3WTF6String15stripWhiteSpaceEPFbtE(i6, i7, F_BASE_ii + 42 | 0);
 __ZNK3WTF6String18simplifyWhiteSpaceEPFbtE(i1, i6, F_BASE_ii + 42 | 0);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i4 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 | 0;
 i4 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement7setTextERKN3WTF6StringERi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = HEAP32[i1 + 16 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) == 0) {
   i8 = -1;
   i9 = 0;
   i10 = 1;
   i11 = 0;
  } else {
   i12 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   i13 = i12 + 12 | 0;
   i14 = i12 + 16 | 0;
   i15 = i7;
   L3 : while (1) {
    do {
     if ((HEAP32[i15 + 12 >> 2] & 4 | 0) != 0) {
      i16 = HEAP32[i15 + 44 >> 2] | 0;
      if ((i16 | 0) == (i12 | 0)) {
       break L3;
      }
      if ((HEAP32[i16 + 12 >> 2] | 0) != (HEAP32[i13 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i16 + 16 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
       break L3;
      }
     }
    } while (0);
    i16 = HEAP32[i15 + 16 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i8 = -1;
     i9 = 0;
     i10 = 1;
     i11 = 0;
     break L1;
    } else {
     i15 = i16;
    }
   }
   i14 = i15;
   if ((i15 | 0) == 0) {
    i8 = -1;
    i9 = 0;
    i10 = 1;
    i11 = 0;
    break;
   }
   i13 = i15 + 8 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   if (!(__ZNK7WebCore17HTMLSelectElement12usesMenuListEv(i14) | 0)) {
    i8 = -1;
    i9 = i14;
    i10 = 0;
    i11 = 0;
    break;
   }
   i8 = __ZNK7WebCore17HTMLSelectElement13selectedIndexEv(i14) | 0;
   i9 = i14;
   i10 = 0;
   i11 = 1;
  }
 } while (0);
 i7 = i1 | 0;
 i14 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i17 = 15;
  } else {
   if ((HEAP32[i14 + 12 >> 2] & 1 | 0) == 0) {
    i17 = 15;
    break;
   }
   if ((HEAP32[i14 + 28 >> 2] | 0) != 0) {
    i17 = 15;
    break;
   }
   __ZN7WebCore13CharacterData7setDataERKN3WTF6StringERi(i14, i2, i3);
  }
 } while (0);
 do {
  if ((i17 | 0) == 15) {
   __ZN7WebCore13ContainerNode14removeChildrenEv(i7);
   __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i6, HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0, i2);
   i14 = i5 | 0;
   i13 = i6 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i14 >> 2] = i12;
   __ZN7WebCore13ContainerNode11appendChildEN3WTF10PassRefPtrINS_4NodeEEERi(i7, i5, i3) | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i12 | 0) != 0) {
     i14 = i12 + 8 | 0;
     i16 = i14 | 0;
     i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
     HEAP32[i16 >> 2] = i18;
     if ((i18 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[i13 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i15 = i12 + 8 | 0;
   i12 = i15 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i15 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i15 - 8 | 0);
  }
 } while (0);
 do {
  if (i11) {
   if ((__ZNK7WebCore17HTMLSelectElement13selectedIndexEv(i9) | 0) == (i8 | 0)) {
    break;
   }
   __ZN7WebCore17HTMLSelectElement16setSelectedIndexEi(i9, i8);
  }
 } while (0);
 do {
  if (!i10) {
   i8 = i9 + 8 | 0;
   i11 = i8 | 0;
   i3 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i3;
   if ((i3 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i9 = i1 + 8 | 0;
 i1 = i9 | 0;
 i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i10;
 if ((i10 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore17HTMLOptionElement22collectOptionInnerTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 HEAP32[i4 >> 2] = 0;
 i6 = i4 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i4 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i4 + 12 | 0] = 1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 L1 : do {
  if ((i8 | 0) != 0) {
   i9 = i2 | 0;
   i10 = i5 | 0;
   i11 = i8;
   L3 : while (1) {
    i12 = i11 + 12 | 0;
    do {
     if ((HEAP32[i12 >> 2] & 1 | 0) != 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] & 63](i5, i11);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i4, i5);
      i13 = HEAP32[i10 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break;
      }
      i14 = i13 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
      if ((i15 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i13);
       break;
      } else {
       HEAP32[i14 >> 2] = i15;
       break;
      }
     }
    } while (0);
    i15 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i15 & 4 | 0) == 0) {
      i16 = i15;
      i17 = 15;
     } else {
      if ((__ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i11) | 0) == 0) {
       i16 = HEAP32[i12 >> 2] | 0;
       i17 = 15;
       break;
      }
      if ((i11 | 0) == (i9 | 0)) {
       break L1;
      }
      i14 = HEAP32[i11 + 28 >> 2] | 0;
      if ((i14 | 0) != 0) {
       i11 = i14;
       continue L3;
      }
      i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i9) | 0;
     }
    } while (0);
    if ((i17 | 0) == 15) {
     i17 = 0;
     if ((i16 & 2 | 0) != 0) {
      i12 = HEAP32[i11 + 36 >> 2] | 0;
      if ((i12 | 0) != 0) {
       i11 = i12;
       continue;
      }
     }
     if ((i11 | 0) == (i9 | 0)) {
      break L1;
     }
     i12 = HEAP32[i11 + 28 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i11 = i12;
      continue;
     }
     i18 = __ZN7WebCore13NodeTraversal19nextAncestorSiblingEPKNS_4NodeES3_(i11, i9) | 0;
    }
    if ((i18 | 0) == 0) {
     break;
    } else {
     i11 = i18;
    }
   }
  }
 } while (0);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i4);
 i18 = HEAP32[i6 >> 2] | 0;
 if ((i18 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i4);
  i4 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i4;
  if ((i4 | 0) != 0) {
   i19 = i4;
   i17 = 23;
  }
 } else {
  HEAP32[i1 >> 2] = i18;
  i19 = i18;
  i17 = 23;
 }
 if ((i17 | 0) == 23) {
  i17 = i19 | 0;
  HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 2;
 }
 i17 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i17 | 0) != 0) {
   i7 = i17 | 0;
   i19 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i17);
    break;
   } else {
    HEAP32[i7 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i17 = HEAP32[i6 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i17 | 0;
 i19 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i17);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i19;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyleD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore14SVGRenderStyleD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i3 = i4 + 8 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  i5 = i4 | 0;
  if ((i2 | 0) != 0) {
   i6 = HEAP32[i5 >> 2] | 0;
   i7 = i6 + (i2 << 2) | 0;
   i2 = i6;
   while (1) {
    i6 = HEAP32[i2 >> 2] | 0;
    do {
     if ((i6 | 0) != 0) {
      i8 = i6 | 0;
      i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore11RenderStyleD2Ev(i6);
       __ZN3WTF8fastFreeEPv(i6);
       break;
      } else {
       HEAP32[i8 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i2 = i2 + 4 | 0;
    if ((i2 | 0) == (i7 | 0)) {
     break;
    }
   }
   HEAP32[i3 >> 2] = 0;
  }
  i3 = HEAP32[i5 >> 2] | 0;
  if (!((i4 + 12 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
   HEAP32[i5 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i3);
  }
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 28 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore18StyleInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 24 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore17StyleSurroundDataD2Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i3 = i4 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i4);
 } else {
  HEAP32[i3 >> 2] = i5;
 }
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i3 = i5 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore15StyleVisualDataD1Ev(i5);
  __ZN3WTF8fastFreeEPv(i5);
 } else {
  HEAP32[i3 >> 2] = i4;
 }
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore12StyleBoxDataD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLOptionElement31textIndentedToRespectGroupLabelEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP32[i7 + 12 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZNK7WebCore17HTMLOptionElement4textEv(i6, i2);
   i8 = i6 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) == 0) {
     i10 = 0;
    } else {
     i11 = i9 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = i12 + 2 | 0;
     HEAP32[i11 >> 2] = i12 + 4;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      i10 = i9;
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      i10 = i9;
      break;
     }
    }
   } while (0);
   i9 = i5 | 0;
   HEAP32[i9 >> 2] = i10;
   i13 = (i10 | 0) == 0;
   if (!i13) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, H_BASE + 8 | 0, i5);
   i11 = i4 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i9 = i11 | 0;
     i14 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i9 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i12 | 0) == 0) {
    _WTFCrash();
   }
   HEAP32[i1 >> 2] = i12;
   do {
    if (!i13) {
     i11 = i10 | 0;
     i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i11 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i12 = i13 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    STACKTOP = i3;
    return;
   } else {
    HEAP32[i12 >> 2] = i14;
    STACKTOP = i3;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore17HTMLOptionElement4textEv(i1, i2);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore17HTMLOptionElement5valueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 48 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i8 & 1 | 0) == 0) {
    i9 = i8 >>> 1 & 134217727;
    i10 = i6 + 20 | 0;
   } else {
    i8 = i6 + 24 | 0;
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore9HTMLNames9valueAttrE >> 2] | 0;
   i11 = i8 + 12 | 0;
   i12 = i8 + 16 | 0;
   i13 = 0;
   while (1) {
    i14 = i10 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break;
     }
    }
    i15 = i13 + 1 | 0;
    if (i15 >>> 0 < i9 >>> 0) {
     i13 = i15;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore17HTMLOptionElement22collectOptionInnerTextEv(i5, i2);
 __ZNK3WTF6String15stripWhiteSpaceEPFbtE(i4, i5, F_BASE_ii + 42 | 0);
 __ZNK3WTF6String18simplifyWhiteSpaceEPFbtE(i1, i4, F_BASE_ii + 42 | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore17HTMLOptionElement5labelEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 48 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) == 0) {
   i7 = __ZN3WTF8nullAtomE;
  } else {
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i8 & 1 | 0) == 0) {
    i9 = i8 >>> 1 & 134217727;
    i10 = i6 + 20 | 0;
   } else {
    i8 = i6 + 24 | 0;
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((i9 | 0) == 0) {
    i7 = __ZN3WTF8nullAtomE;
    break;
   }
   i8 = HEAP32[__ZN7WebCore9HTMLNames9labelAttrE >> 2] | 0;
   i11 = i8 + 12 | 0;
   i12 = i8 + 16 | 0;
   i13 = 0;
   while (1) {
    i14 = i10 + (i13 << 3) | 0;
    i15 = HEAP32[i14 >> 2] | 0;
    if ((i15 | 0) == (i8 | 0)) {
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) == (HEAP32[i11 >> 2] | 0)) {
     if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i12 >> 2] | 0)) {
      break;
     }
    }
    i15 = i13 + 1 | 0;
    if (i15 >>> 0 < i9 >>> 0) {
     i13 = i15;
    } else {
     i7 = __ZN3WTF8nullAtomE;
     break L1;
    }
   }
   i7 = (i14 | 0) == 0 ? __ZN3WTF8nullAtomE : i10 + (i13 << 3) + 4 | 0;
  }
 } while (0);
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i1 >> 2] = i10;
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore17HTMLOptionElement22collectOptionInnerTextEv(i5, i2);
 __ZNK3WTF6String15stripWhiteSpaceEPFbtE(i4, i5, F_BASE_ii + 42 | 0);
 __ZNK3WTF6String18simplifyWhiteSpaceEPFbtE(i1, i4, F_BASE_ii + 42 | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement11setSelectedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 53 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 __ZN7WebCore7Element17didAffectSelectorEi(i1 | 0, 1);
 i3 = i1 + 16 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i6 = i5 + 12 | 0;
 i7 = i5 + 16 | 0;
 i8 = i4;
 L7 : while (1) {
  do {
   if ((HEAP32[i8 + 12 >> 2] & 4 | 0) != 0) {
    i9 = HEAP32[i8 + 44 >> 2] | 0;
    if ((i9 | 0) == (i5 | 0)) {
     i10 = 9;
     break L7;
    }
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0)) {
     i10 = 9;
     break L7;
    }
   }
  } while (0);
  i9 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i11 = i4;
   break;
  } else {
   i8 = i9;
  }
 }
 do {
  if ((i10 | 0) == 9) {
   if ((i8 | 0) == 0) {
    i11 = i4;
    break;
   }
   __ZN7WebCore17HTMLSelectElement23invalidateSelectedItemsEv(i8);
   i11 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 0) {
  return;
 }
 i3 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i8 = i3 + 12 | 0;
 i4 = i3 + 16 | 0;
 i7 = i11;
 L21 : while (1) {
  do {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
    i11 = HEAP32[i7 + 44 >> 2] | 0;
    if ((i11 | 0) == (i3 | 0)) {
     break L21;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) != (HEAP32[i8 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     break L21;
    }
   }
  } while (0);
  i11 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i10 = 24;
   break;
  } else {
   i7 = i11;
  }
 }
 if ((i10 | 0) == 24) {
  return;
 }
 if ((i7 | 0) == 0) {
  return;
 }
 __ZN7WebCore17HTMLSelectElement27optionSelectionStateChangedEPNS_17HTMLOptionElementEb(i7, i1, i2);
 return;
}
function __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 + 76 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 100 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 44 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = i1 + 12 | 0;
 i2 = i3;
 if ((HEAP8[i2 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i2 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i2 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
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
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore17HTMLOptionElement5indexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i5 = i4 + 12 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2;
 L4 : while (1) {
  do {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
    i2 = HEAP32[i7 + 44 >> 2] | 0;
    if ((i2 | 0) == (i4 | 0)) {
     break L4;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i8 = 18;
   break;
  } else {
   i7 = i2;
  }
 }
 if ((i8 | 0) == 18) {
  return i3 | 0;
 }
 if ((i7 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i6 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(i7) | 0;
 i7 = HEAP32[i6 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = i6 | 0;
 i6 = (HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 | 0;
 i4 = i1 | 0;
 i1 = 0;
 i2 = 0;
 while (1) {
  if (i7 >>> 0 <= i2 >>> 0) {
   i8 = 12;
   break;
  }
  i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((HEAP32[(HEAP32[i9 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
   if ((i9 | 0) == (i4 | 0)) {
    i3 = i1;
    i8 = 23;
    break;
   }
   i10 = i1 + 1 | 0;
  } else {
   i10 = i1;
  }
  i9 = i2 + 1 | 0;
  if (i9 >>> 0 < i7 >>> 0) {
   i1 = i10;
   i2 = i9;
  } else {
   i3 = 0;
   i8 = 21;
   break;
  }
 }
 if ((i8 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 21) {
  return i3 | 0;
 } else if ((i8 | 0) == 23) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore17HTMLOptionElement18didAttachRenderersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 56 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i6 = i5 + 32 | 0;
 if ((HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0) {
  i7 = i6 | 0;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 255](i5 | 0) | 0;
  } else {
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i8 = HEAP32[i6 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i8 + 320 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i8);
  i9 = HEAP32[i6 >> 2] | 0;
 } else {
  i9 = i5;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i3, i9, i1 | 0, 0, 0, 0, 0);
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i4;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = __Znwj(60) | 0;
 i5 = i4;
 i6 = i4;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 1;
 HEAP32[i6 >> 2] = __ZTVN7WebCore4NodeE + 8;
 i7 = i4 + 12 | 0;
 HEAP32[i7 >> 2] = 8222;
 HEAP32[i4 + 16 >> 2] = 0;
 i8 = i4 + 20 | 0;
 do {
  if ((i3 | 0) == 0) {
   if ((HEAP8[H_BASE + 656 | 0] | 0) == 0) {
    i9 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i9);
    HEAP32[H_BASE + 648 >> 2] = i9;
    HEAP32[H_BASE + 656 >> 2] = 1;
    HEAP32[H_BASE + 660 >> 2] = 0;
    i10 = i9;
    break;
   } else {
    i10 = HEAP32[H_BASE + 648 >> 2] | 0;
    break;
   }
  } else {
   i10 = i3 + 44 | 0;
  }
 } while (0);
 HEAP32[i8 >> 2] = i10;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = 0;
 i8 = i10 + 16 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i4 + 36 >> 2] = 0;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i6 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i4 + 44 >> 2] = i8;
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 HEAP32[i4 + 48 >> 2] = 0;
 HEAP32[i6 >> 2] = H_BASE + 24;
 HEAP8[i4 + 52 | 0] = 0;
 HEAP8[i4 + 53 | 0] = 0;
 HEAP32[i4 + 56 >> 2] = 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] | 1048576;
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore17HTMLOptionElement6createERNS_8DocumentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = __Znwj(60) | 0;
 i4 = i3;
 i5 = i3;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = 1;
 HEAP32[i5 >> 2] = __ZTVN7WebCore4NodeE + 8;
 i6 = i3 + 12 | 0;
 HEAP32[i6 >> 2] = 8222;
 HEAP32[i3 + 16 >> 2] = 0;
 i7 = i3 + 20 | 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[H_BASE + 656 | 0] | 0) == 0) {
    i8 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i8);
    HEAP32[H_BASE + 648 >> 2] = i8;
    HEAP32[H_BASE + 656 >> 2] = 1;
    HEAP32[H_BASE + 660 >> 2] = 0;
    i9 = i8;
    break;
   } else {
    i9 = HEAP32[H_BASE + 648 >> 2] | 0;
    break;
   }
  } else {
   i9 = i2 + 44 | 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = i9;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 0;
 HEAP32[i3 + 32 >> 2] = 0;
 i7 = i9 + 16 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] = (HEAP32[__ZN7WebCore17InspectorCounters10s_countersE + 4 >> 2] | 0) + 1;
 HEAP32[i3 + 36 >> 2] = 0;
 HEAP32[i3 + 40 >> 2] = 0;
 HEAP32[i5 >> 2] = __ZTVN7WebCore7ElementE + 8;
 i7 = HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0;
 HEAP32[i3 + 44 >> 2] = i7;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 HEAP32[i3 + 48 >> 2] = 0;
 HEAP32[i5 >> 2] = H_BASE + 24;
 HEAP8[i3 + 52 | 0] = 0;
 HEAP8[i3 + 53 | 0] = 0;
 HEAP32[i3 + 56 >> 2] = 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] | 1048576;
 HEAP32[i1 >> 2] = i4;
 return;
}
function __ZN7WebCore17HTMLOptionElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != (HEAP32[__ZN7WebCore9HTMLNames12disabledAttrE >> 2] | 0)) {
  if ((i4 | 0) == (HEAP32[__ZN7WebCore9HTMLNames12selectedAttrE >> 2] | 0)) {
   HEAP8[i1 + 53 | 0] = (HEAP32[i3 >> 2] | 0) != 0 | 0;
   return;
  } else {
   __ZN7WebCore11HTMLElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
   return;
  }
 }
 i2 = i1 + 52 | 0;
 i4 = HEAP8[i2] & 1;
 i5 = (HEAP32[i3 >> 2] | 0) == 0;
 HEAP8[i2] = i5 & 1 ^ 1;
 if ((i4 & 255 | 0) == (i5 & 1 ^ 1 | 0)) {
  return;
 }
 __ZN7WebCore7Element17didAffectSelectorEi(i1 | 0, 6);
 i5 = i1 + 12 | 0;
 i4 = (HEAP32[i5 >> 2] & 2048 | 0) == 0;
 i2 = i1 + 32 | 0;
 if (i4) {
  i6 = i2 | 0;
 } else {
  i6 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  return;
 }
 if (i4) {
  i7 = i2 | 0;
 } else {
  i7 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
  return;
 }
 if (i4) {
  i8 = i2 | 0;
 } else {
  i8 = HEAP32[i2 >> 2] | 0;
 }
 i4 = __ZNK7WebCore12RenderObject5themeEv(HEAP32[i8 >> 2] | 0) | 0;
 if ((HEAP32[i5 >> 2] & 2048 | 0) == 0) {
  i9 = i2 | 0;
 } else {
  i9 = HEAP32[i2 >> 2] | 0;
 }
 FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 1](i4, HEAP32[i9 >> 2] | 0, 8) | 0;
 return;
}
function __ZN7WebCore17HTMLOptionElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
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
   if ((HEAP8[H_BASE + 656 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 648 >> 2] = i7;
    HEAP32[H_BASE + 656 >> 2] = 1;
    HEAP32[H_BASE + 660 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 648 >> 2] | 0;
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
 HEAP32[i4 >> 2] = H_BASE + 24;
 HEAP8[i1 + 52 | 0] = 0;
 HEAP8[i1 + 53 | 0] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 return;
}
function __ZN7WebCore17HTMLOptionElementC1ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
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
   if ((HEAP8[H_BASE + 656 | 0] | 0) == 0) {
    i7 = __Znwj(44) | 0;
    __ZN7WebCore9TreeScopeC1Ev(i7);
    HEAP32[H_BASE + 648 >> 2] = i7;
    HEAP32[H_BASE + 656 >> 2] = 1;
    HEAP32[H_BASE + 660 >> 2] = 0;
    i8 = i7;
    break;
   } else {
    i8 = HEAP32[H_BASE + 648 >> 2] | 0;
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
 HEAP32[i4 >> 2] = H_BASE + 24;
 HEAP8[i1 + 52 | 0] = 0;
 HEAP8[i1 + 53 | 0] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 1048576;
 return;
}
function __ZN7WebCore17StyleSurroundDataD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10BorderDataD2Ev(i1 + 100 | 0);
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZNK7WebCore17HTMLOptionElement11isFocusableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if (!(__ZNK7WebCore11HTMLElement13supportsFocusEv(i1 | 0) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 | 0;
 i4 = i1 + 12 | 0;
 i5 = i1 + 32 | 0;
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  i6 = i5 | 0;
 } else {
  i6 = HEAP32[i5 >> 2] | 0;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i3) | 0;
  } else {
   if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i8 = HEAP32[i7 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i4 >> 2] & 2048 | 0) == 0) {
  i9 = i5 | 0;
 } else {
  i9 = HEAP32[i5 >> 2] | 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 255](i3) | 0;
  } else {
   if ((HEAP32[i5 + 20 >> 2] & 768 | 0) == 256) {
    i10 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i10 = HEAP32[i5 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i2 = (HEAP32[i10 + 48 >> 2] & 31 | 0) != 22;
 return i2 | 0;
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
function __ZN7WebCore17HTMLOptionElement12insertedIntoERNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   i5 = i4 + 12 | 0;
   i6 = i4 + 16 | 0;
   i7 = i3;
   L3 : while (1) {
    do {
     if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
      i8 = HEAP32[i7 + 44 >> 2] | 0;
      if ((i8 | 0) == (i4 | 0)) {
       break L3;
      }
      if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
       break L3;
      }
     }
    } while (0);
    i8 = HEAP32[i7 + 16 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    } else {
     i7 = i8;
    }
   }
   i6 = i7;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore17HTMLSelectElement18setRecalcListItemsEv(i6);
   if ((HEAP8[i1 + 53 | 0] & 1) != 0) {
    __ZN7WebCore17HTMLSelectElement27optionSelectionStateChangedEPNS_17HTMLOptionElementEb(i6, i1, 1);
   }
   __ZN7WebCore17HTMLSelectElement17scrollToSelectionEv(i6);
  }
 } while (0);
 return __ZN7WebCore7Element12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2) | 0;
}
function __ZN7WebCore10BorderDataD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 97 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 92 | 0);
 }
 if ((HEAP8[i1 + 89 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 84 | 0);
 }
 if ((HEAP8[i1 + 81 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 76 | 0);
 }
 if ((HEAP8[i1 + 73 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 68 | 0);
 }
 if ((HEAP8[i1 + 65 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 60 | 0);
 }
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) != 10) {
  i2 = i1 + 32 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  i4 = i3 | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i4);
 return;
}
function __ZN7WebCore17HTMLOptionElement22customStyleForRendererEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i6 = i5 + 320 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i5);
  i8 = HEAP32[i6 >> 2] | 0;
 } else {
  i8 = i7;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i4, i8, i2 | 0, 0, 0, 0, 0);
 i8 = i2 + 56 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore17HTMLOptionElement8setValueERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i1);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i1;
    i8 = i1 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i6, __ZN7WebCore9HTMLNames9valueAttrE, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement8setLabelERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i2 = i4 | 0;
   HEAP32[i2 >> 2] = 0;
   i7 = i2;
  } else {
   if ((HEAP32[i1 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, i1);
    i7 = i4 | 0;
    break;
   } else {
    i2 = i4 | 0;
    HEAP32[i2 >> 2] = i1;
    i8 = i1 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    i7 = i2;
    break;
   }
  }
 } while (0);
 i1 = i5 | 0;
 HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
 __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i6, __ZN7WebCore9HTMLNames9labelAttrE, i5);
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i5 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement14didRecalcStyleENS_5Style6ChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i3 = i1 + 12 | 0;
 i4 = i1 + 16 | 0;
 i5 = i2;
 L4 : while (1) {
  i6 = HEAP32[i5 + 12 >> 2] | 0;
  do {
   if ((i6 & 4 | 0) != 0) {
    i2 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i2 | 0) == (i1 | 0)) {
     break L4;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i7 = 19;
   break;
  } else {
   i5 = i2;
  }
 }
 if ((i7 | 0) == 19) {
  return;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 i7 = i5 + 32 | 0;
 if ((i6 & 2048 | 0) == 0) {
  i8 = i7 | 0;
 } else {
  i8 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  return;
 }
 __ZNK7WebCore12RenderObject7repaintEb(i7, 0);
 return;
}
function __ZN7WebCore17HTMLOptionElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   i5 = i4 + 12 | 0;
   i6 = i4 + 16 | 0;
   i7 = i3;
   L3 : while (1) {
    do {
     if ((HEAP32[i7 + 12 >> 2] & 4 | 0) != 0) {
      i8 = HEAP32[i7 + 44 >> 2] | 0;
      if ((i8 | 0) == (i4 | 0)) {
       break L3;
      }
      if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i5 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
       break L3;
      }
     }
    } while (0);
    i8 = HEAP32[i7 + 16 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break L1;
    } else {
     i7 = i8;
    }
   }
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore17HTMLSelectElement28optionElementChildrenChangedEv(i7);
  }
 } while (0);
 __ZN7WebCore11HTMLElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2);
 return;
}
function __ZN7WebCore17HTMLOptionElement16setSelectedStateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 53 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 __ZN7WebCore7Element17didAffectSelectorEi(i1 | 0, 1);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i3 = i1 + 12 | 0;
 i4 = i1 + 16 | 0;
 i5 = i2;
 L7 : while (1) {
  do {
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) != 0) {
    i2 = HEAP32[i5 + 44 >> 2] | 0;
    if ((i2 | 0) == (i1 | 0)) {
     break L7;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     break L7;
    }
   }
  } while (0);
  i2 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i6 = 14;
   break;
  } else {
   i5 = i2;
  }
 }
 if ((i6 | 0) == 14) {
  return;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore17HTMLSelectElement23invalidateSelectedItemsEv(i5);
 return;
}
function __ZN7WebCore17HTMLOptionElement20updateNonRenderStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 i5 = i4 + 320 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i4);
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 __ZN7WebCore13StyleResolver15styleForElementEPNS_7ElementEPNS_11RenderStyleENS_20StyleSharingBehaviorENS_20RuleMatchingBehaviorEPNS_12RenderRegionE(i3, i7, i1 | 0, 0, 0, 0, 0);
 i7 = i1 + 56 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i1 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore17HTMLOptionElement8selectedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
   i4 = i3 + 12 | 0;
   i5 = i3 + 16 | 0;
   i6 = i2;
   L3 : while (1) {
    do {
     if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
      i7 = HEAP32[i6 + 44 >> 2] | 0;
      if ((i7 | 0) == (i3 | 0)) {
       break L3;
      }
      if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
       break L3;
      }
     }
    } while (0);
    i7 = HEAP32[i6 + 16 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break L1;
    } else {
     i6 = i7;
    }
   }
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore17HTMLSelectElement28updateListItemSelectedStatesEv(i6);
  }
 } while (0);
 return (HEAP8[i1 + 53 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore17HTMLOptionElement15accessKeyActionEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i4 = i3 + 12 | 0;
 i5 = i3 + 16 | 0;
 i6 = i2;
 L4 : while (1) {
  do {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
    i2 = HEAP32[i6 + 44 >> 2] | 0;
    if ((i2 | 0) == (i3 | 0)) {
     break L4;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i7 = 11;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 11) {
  return;
 }
 if ((i6 | 0) == 0) {
  return;
 }
 __ZN7WebCore17HTMLSelectElement25accessKeySetSelectedIndexEi(i6, __ZNK7WebCore17HTMLOptionElement5indexEv(i1) | 0);
 return;
}
function __ZNK7WebCore17HTMLOptionElement18ownerSelectElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[__ZN7WebCore9HTMLNames9selectTagE >> 2] | 0;
 i4 = i1 + 12 | 0;
 i5 = i1 + 16 | 0;
 i6 = i2;
 L4 : while (1) {
  do {
   if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
    i2 = HEAP32[i6 + 44 >> 2] | 0;
    if ((i2 | 0) == (i1 | 0)) {
     break L4;
    }
    if ((HEAP32[i2 + 12 >> 2] | 0) != (HEAP32[i4 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
     break L4;
    }
   }
  } while (0);
  i2 = HEAP32[i6 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i7 = 10;
   break;
  } else {
   i6 = i2;
  }
 }
 if ((i7 | 0) == 10) {
  return i3 | 0;
 }
 i3 = i6;
 return i3 | 0;
}
function __ZN7WebCore12StyleBoxDataD2Ev(i1) {
 i1 = i1 | 0;
 if ((HEAP8[i1 + 57 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 52 | 0);
 }
 if ((HEAP8[i1 + 49 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 44 | 0);
 }
 if ((HEAP8[i1 + 41 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 36 | 0);
 }
 if ((HEAP8[i1 + 33 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 28 | 0);
 }
 if ((HEAP8[i1 + 25 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 20 | 0);
 }
 if ((HEAP8[i1 + 17 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 12 | 0);
 }
 if ((HEAP8[i1 + 9 | 0] | 0) != 10) {
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i1 + 4 | 0);
 return;
}
function __ZNK7WebCore17HTMLOptionElement21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 52 | 0] & 1) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 16 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 496 >> 2] & 255](i3) | 0;
 return i2 | 0;
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
function __ZN7WebCore17HTMLOptionElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore17HTMLOptionElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 24;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore13StyledElementD2Ev(i1 | 0);
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
function viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore17HTMLOptionElement19willDetachRenderersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 } else {
  HEAP32[i2 >> 2] = i3;
  return;
 }
}
function viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore11isHTMLSpaceEt(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 L1 : do {
  if ((i1 & 65535) >>> 0 < 33 >>> 0) {
   switch (i1 << 16 >> 16) {
   case 32:
   case 10:
   case 9:
   case 13:
   case 12:
    {
     i2 = 1;
     break L1;
     break;
    }
   default:
    {}
   }
   i2 = 0;
  } else {
   i2 = 0;
  }
 } while (0);
 return i2 | 0;
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
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
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
function iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE(i1 | 0, i2 | 0) | 0;
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
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper() {
 __ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE();
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
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
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
function __ZN7WebCore17HTMLOptionElement16rendererIsNeededERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function __ZNK7WebCore17HTMLOptionElement16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 56 >> 2] | 0;
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
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
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
function __ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
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
function b3(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(3);
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
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b0,ii___ZNK7WebCore11HTMLElement8tabIndexEv__wrapper,b0,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b0,ii___ZN7WebCore7Element7onerrorEv__wrapper,b0,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b0,__ZNK7WebCore4Node21isMediaControlElementEv,b0,__ZNK7WebCore4Node19isFrameOwnerElementEv,b0,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b0,ii___ZN7WebCore7Element9scrollTopEv__wrapper,b0,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b0,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b0,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b0,__ZNK7WebCore7Element17isTextFormControlEv,b0,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper
  ,b0,__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv,b0,__ZNK7WebCore7Element6prefixEv,b0,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b0,__ZNK7WebCore7Element12namespaceURIEv,b0,ii___ZNK7WebCore11HTMLElement13supportsFocusEv__wrapper,b0,__ZNK7WebCore17HTMLOptionElement11isFocusableEv,b0,__ZN7WebCore11isHTMLSpaceEt,b0,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b0,__ZNK7WebCore4Node22scriptExecutionContextEv,b0,__ZNK7WebCore7Element12isOutOfRangeEv,b0,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b0,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper,b0,__ZN7WebCore4Node11sheetLoadedEv,b0,__ZN7WebCore11HTMLElement15asFormNamedItemEv,b0,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv
  ,b0,__ZNK7WebCore4Node20isInsertionPointNodeEv,b0,ii___ZN7WebCore7Element6onloadEv__wrapper,b0,__ZNK7WebCore7Element9isInRangeEv,b0,__ZNK7WebCore7Element20isFormControlElementEv,b0,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b0,__ZNK7WebCore7Element18isFrameElementBaseEv,b0,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b0,__ZNK7WebCore7Element21isOptionalFormControlEv,b0,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b0,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b0,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b0,__ZNK7WebCore17HTMLOptionElement21isDisabledFormControlEv,b0,__ZNK7WebCore7Element21isRequiredFormControlEv,b0,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b0,__ZNK7WebCore4Node15isPluginElementEv
  ,b0,ii___ZN7WebCore11HTMLElement29willRespondToMouseClickEventsEv__wrapper,b0,ii___ZN7WebCore11HTMLElement28willRespondToMouseMoveEventsEv__wrapper,b0,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b0,ii___ZN7WebCore7Element7onfocusEv__wrapper,b0,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b0,ii___ZN7WebCore11HTMLElement29willRespondToMouseWheelEventsEv__wrapper,b0,ii___ZNK7WebCore11HTMLElement9draggableEv__wrapper,b0,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b0,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b0,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b0,__ZNK7WebCore7Element12willValidateEv,b0,__ZNK7WebCore7Element23canContainRangeEndPointEv,b0,__ZN7WebCore7Element25isValidFormControlElementEv,b0,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b0,__ZNK7WebCore17HTMLOptionElement16nonRendererStyleEv
  ,b0,ii___ZNK7WebCore7Element16isMouseFocusableEv__wrapper,b0,ii___ZNK7WebCore11HTMLElement19hasCustomFocusLogicEv__wrapper,b0,__ZNK7WebCore4Node14customPseudoIdEv,b0,__ZNK7WebCore7Element19isSpinButtonElementEv,b0,ii___ZNK7WebCore11HTMLElement11virtualFormEv__wrapper,b0,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b0,__ZNK7WebCore4Node19isCharacterDataNodeEv,b0,__ZNK7WebCore7Element9localNameEv,b0,ii___ZN7WebCore4Node6toNodeEv__wrapper,b0,ii___ZN7WebCore7Element6onblurEv__wrapper,b0,__ZNK7WebCore11HTMLElement11isLabelableEv,b0,__ZNK7WebCore4Node15isMediaControlsEv,b0,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b0,__ZNK7WebCore7Element23areAuthorShadowsAllowedEv,b0,__ZNK7WebCore4Node15isAttributeNodeEv
  ,b0,__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element21finishParsingChildrenEv__wrapper,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore17HTMLOptionElementD1Ev,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b1,__ZN7WebCore17HTMLOptionElement19willDetachRenderersEv,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore17HTMLOptionElement18didAttachRenderersEv,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper
  ,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,__ZN7WebCore17HTMLOptionElementD0Ev,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore17HTMLOptionElement14didRecalcStyleENS_5Style6ChangeE,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore17HTMLOptionElement22customStyleForRendererEv,b2,__ZN7WebCore17HTMLOptionElement15accessKeyActionEb,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE
  ,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,vii___ZN7WebCore7Element11removedFromERNS_13ContainerNodeE__wrapper,b2,__ZNK7WebCore17HTMLOptionElement4textEv,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,__ZN7WebCore17HTMLOptionElement15childrenChangedERKNS_13ContainerNode11ChildChangeE,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore11HTMLElement8nodeNameEv__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZNK7WebCore11HTMLElement5titleEv__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_iiii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b4,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b4,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b4,__ZN7WebCore17HTMLOptionElementC2ERKNS_13QualifiedNameERNS_8DocumentE,b4,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b4,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b4,__ZN7WebCore17HTMLOptionElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b5,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b5,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b5,v___ZN7WebCore11HTMLElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE__wrapper,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iiiii = [b6,b6,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b6,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZNK7WebCore7Element22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore7Element13computedStyleENS_8PseudoIdE__wrapper,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,iii___ZNK7WebCore7Element25childShouldCreateRendererERKNS_4NodeE__wrapper,b7,iii___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b7,iii___ZNK7WebCore7Element19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b7,__ZN7WebCore17HTMLOptionElement16rendererIsNeededERKNS_11RenderStyleE,b7,iii___ZNK7WebCore11HTMLElement14isURLAttributeERKNS_9AttributeE__wrapper,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,__ZN7WebCore17HTMLOptionElement12insertedIntoERNS_13ContainerNodeE,b7,iii___ZN7WebCore7Element15willRecalcStyleENS_5Style6ChangeE__wrapper,b7,iii___ZNK7WebCore11HTMLElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore13StyledElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b8,viiii___ZN7WebCore11HTMLElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames12disabledAttrE": __ZN7WebCore9HTMLNames12disabledAttrE, "__ZN7WebCore9HTMLNames9selectTagE": __ZN7WebCore9HTMLNames9selectTagE, "__ZN3WTF9emptyAtomE": __ZN3WTF9emptyAtomE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN7WebCore9HTMLNames9labelAttrE": __ZN7WebCore9HTMLNames9labelAttrE, "__ZTVN7WebCore7ElementE": __ZTVN7WebCore7ElementE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames9valueAttrE": __ZN7WebCore9HTMLNames9valueAttrE, "__ZTVN7WebCore4NodeE": __ZTVN7WebCore4NodeE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames12selectedAttrE": __ZN7WebCore9HTMLNames12selectedAttrE, "__ZN7WebCore17InspectorCounters10s_countersE": __ZN7WebCore17InspectorCounters10s_countersE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore17HTMLOptionElement14didRecalcStyleENS_5Style6ChangeE","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN7WebCore7Element20buildPendingResourceEv","__ZNK7WebCore17HTMLOptionElement5valueEv","__ZN7WebCore17HTMLOptionElement22customStyleForRendererEv","_memcpy","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore17HTMLOptionElement18ownerSelectElementEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore11HTMLElement20isHTMLUnknownElementEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore17HTMLOptionElement8setLabelERKN3WTF6StringE","__ZNK7WebCore17HTMLOptionElement5indexEv","__ZNK7WebCore17HTMLOptionElement11isFocusableEv","__ZN7WebCore11isHTMLSpaceEt","__ZNK7WebCore17HTMLOptionElement22collectOptionInnerTextEv","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore17HTMLOptionElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore7Element12willValidateEv","__ZNK7WebCore7Element6targetEv","__ZN7WebCore11HTMLElement15asFormNamedItemEv","__ZN7WebCore17HTMLOptionElement15accessKeyActionEb","__ZNK7WebCore17HTMLOptionElement16nonRendererStyleEv","__ZN7WebCore11RenderStyleD2Ev","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore17HTMLOptionElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZN7WebCore17HTMLOptionElementD1Ev","__ZNK7WebCore17HTMLOptionElement4textEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZN7WebCore17HTMLOptionElement16rendererIsNeededERKNS_11RenderStyleE","__ZNK7WebCore17HTMLOptionElement21isDisabledFormControlEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore17HTMLOptionElement8selectedEv","__ZN7WebCore17HTMLOptionElement19willDetachRenderersEv","__ZN7WebCore17HTMLOptionElement6createERNS_8DocumentE","_memset","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","__ZN7WebCore17HTMLOptionElement18didAttachRenderersEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN7WebCore17HTMLOptionElement8setValueERKN3WTF6StringE","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore17HTMLOptionElement31textIndentedToRespectGroupLabelEv","__ZN7WebCore17HTMLOptionElement7setTextERKN3WTF6StringERi","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore17HTMLOptionElement15childrenChangedERKNS_13ContainerNode11ChildChangeE","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore17HTMLOptionElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZN7WebCore17HTMLOptionElement16setSelectedStateEb","__ZN7WebCore17HTMLOptionElementD0Ev","__ZN7WebCore17HTMLOptionElement22createForJSConstructorERNS_8DocumentERKN3WTF6StringES6_bbRi","__ZN7WebCore17HTMLOptionElement12insertedIntoERNS_13ContainerNodeE","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN7WebCore17HTMLOptionElement11setSelectedEb","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore17HTMLOptionElement20updateNonRenderStyleEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore11HTMLElement11isLabelableEv","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore7Element23areAuthorShadowsAllowedEv","__ZNK7WebCore17HTMLOptionElement5labelEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZNK7WebCore11HTMLElement29isTextControlInnerTextElementEv"]

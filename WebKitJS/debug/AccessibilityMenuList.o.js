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
H_BASE = parentModule["_malloc"](1112 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1112;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore21AccessibilityMenuListC1EPNS_14RenderMenuListE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore21AccessibilityMenuListE=(H_BASE+8)|0;
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
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_ii + 338;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_ii + 356;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 318;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 332;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 346;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 354;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 304;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 324;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 310;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 352;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 348;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 322;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 292;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 328;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_fi + 6;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_fi + 8;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 104;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 336;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 290;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 296;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 342;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 334;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 294;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 340;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 306;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vif + 2;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 288;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_ii + 300;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 102;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 298;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 286;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 326;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_ii + 316;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_ii + 314;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_ii + 308;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_ii + 350;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 344;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 302;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 320;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vii + 106;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_ii + 312;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vif + 4;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 330;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 30;
}
function __ZN7WebCore21AccessibilityMenuList21didUpdateActiveOptionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 52 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZNK7WebCore8Document13axObjectCacheEv(i3) | 0;
 i4 = i1 + 20 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   i5 = i1 + 12 | 0;
   i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 196 >> 2] & 511](i6) | 0)) {
    break;
   }
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i6 = HEAP32[HEAP32[i5 >> 2] >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   __ZN7WebCore26AccessibilityMenuListPopup21didUpdateActiveOptionEi(i6, i2);
  }
 } while (0);
 i2 = i3 + 8 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
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
function __ZNK7WebCore21AccessibilityMenuList20canSetFocusAttributeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 | 0;
 i3 = i1;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 364 >> 2] & 511](i2) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 364 >> 2] & 511](i2) | 0;
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 511](i1) | 0) ^ 1;
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
function vii___ZN7WebCore25AccessibilityRenderObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject16getDocumentLinksERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject16getDocumentLinksERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject11tabChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject11tabChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore23AccessibilityNodeObject16titleElementTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject16titleElementTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore23AccessibilityNodeObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23AccessibilityNodeObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore21AccessibilityMenuList5pressEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i1 = i2;
 if ((HEAP8[i2 + 160 | 0] & 1) == 0) {
  __ZN7WebCore14RenderMenuList9showPopupEv(i1);
  return 1;
 } else {
  __ZN7WebCore14RenderMenuList9hidePopupEv(i1);
  return 1;
 }
 return 0;
}
function viii___ZNK7WebCore25AccessibilityRenderObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore25AccessibilityRenderObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore25AccessibilityRenderObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore25AccessibilityRenderObject16textUnderElementENS_33AccessibilityTextUnderElementModeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject16textUnderElementENS_33AccessibilityTextUnderElementModeE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore21AccessibilityMenuList6createEPNS_14RenderMenuListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore25AccessibilityRenderObjectC2EPNS_12RenderObjectE(i3, i2 | 0);
 HEAP32[i3 >> 2] = H_BASE + 16;
 HEAP32[i1 >> 2] = i3;
 return;
}
function vii___ZNK7WebCore25AccessibilityRenderObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE(i1 | 0, i2 | 0);
}
function __ZN7WebCore21AccessibilityMenuList15childrenChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] | 0) == 0) {
  return;
 }
 i2 = HEAP32[HEAP32[i1 + 12 >> 2] >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 740 >> 2] & 63](i2);
 return;
}
function viii___ZNK7WebCore25AccessibilityRenderObject18doAXStringForRangeERKNS_14PlainTextRangeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18doAXStringForRangeERKNS_14PlainTextRangeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore25AccessibilityRenderObject18doAXBoundsForRangeERKNS_14PlainTextRangeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18doAXBoundsForRangeERKNS_14PlainTextRangeE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEjb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEjb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForPointERKNS_8IntPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject23visiblePositionForPointERKNS_8IntPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore25AccessibilityRenderObject23indexForVisiblePositionERKNS_15VisiblePositionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject23indexForVisiblePositionERKNS_15VisiblePositionE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore23AccessibilityNodeObject11insertChildEPNS_19AccessibilityObjectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore23AccessibilityNodeObject11insertChildEPNS_19AccessibilityObjectEj(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore25AccessibilityRenderObject27elementAccessibilityHitTestERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject27elementAccessibilityHitTestERKNS_8IntPointE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore21AccessibilityMenuList11addChildrenEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 24 | 0] = 1;
 __ZNK7WebCore8Document13axObjectCacheEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 52 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 return;
}
function viiii___ZNK7WebCore23AccessibilityNodeObject10colorValueERiS1_S1___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore23AccessibilityNodeObject10colorValueERiS1_S1_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore25AccessibilityRenderObject27visiblePositionRangeForLineEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject27visiblePositionRangeForLineEj(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject20setSelectedTextRangeERKNS_14PlainTextRangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject20setSelectedTextRangeERKNS_14PlainTextRangeE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore25AccessibilityRenderObject20accessibilityHitTestERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20accessibilityHitTestERKNS_8IntPointE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore25AccessibilityRenderObject16hasSameFontColorEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16hasSameFontColorEPNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function vii___ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject17setAccessibleNameERKN3WTF12AtomicStringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject17setAccessibleNameERKN3WTF12AtomicStringE(i1 | 0, i2 | 0);
}
function viii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore25AccessibilityRenderObject12hasSameStyleEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12hasSameStyleEPNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore25AccessibilityRenderObject11hasSameFontEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11hasSameFontEPNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore25AccessibilityRenderObject5indexERKNS_15VisiblePositionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject5indexERKNS_15VisiblePositionE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZNK7WebCore25AccessibilityRenderObject17doAXRangeForIndexEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject17doAXRangeForIndexEj(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore21AccessibilityMenuListC2EPNS_14RenderMenuListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObjectC2EPNS_12RenderObjectE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function __ZN7WebCore21AccessibilityMenuListC1EPNS_14RenderMenuListE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObjectC2EPNS_12RenderObjectE(i1 | 0, i2 | 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 return;
}
function viii___ZNK7WebCore25AccessibilityRenderObject16doAXRangeForLineEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore25AccessibilityRenderObject16doAXRangeForLineEj(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore23AccessibilityNodeObject8addChildEPNS_19AccessibilityObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore23AccessibilityNodeObject8addChildEPNS_19AccessibilityObjectE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject35correspondingLabelForControlElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject35correspondingLabelForControlElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject35correspondingControlForLabelElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject35correspondingControlForLabelElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject33ariaRoleHasPresentationalChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject33ariaRoleHasPresentationalChildrenEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject31isPresentationalChildOfAriaRoleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject31isPresentationalChildOfAriaRoleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject33hasAttributesRequiredForInclusionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject33hasAttributesRequiredForInclusionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore23AccessibilityNodeObject24ariaDescribedByAttributeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject24ariaDescribedByAttributeEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore23AccessibilityNodeObject24accessibilityDescriptionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject24accessibilityDescriptionEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject8scrollToERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject8scrollToERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject21mathFencedCloseStringEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject21mathFencedCloseStringEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject29getScrollableAreaIfScrollableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject29getScrollableAreaIfScrollableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject29computeAccessibilityIsIgnoredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject29computeAccessibilityIsIgnoredEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject20visiblePositionRangeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject20visiblePositionRangeEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject20mathFencedOpenStringEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject20mathFencedOpenStringEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore23AccessibilityNodeObject22ariaLabeledByAttributeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject22ariaLabeledByAttributeEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject8setValueERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject8setValueERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject27shouldFocusActiveDescendantEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject27shouldFocusActiveDescendantEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject18stringValueForMSAAEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18stringValueForMSAAEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject18passwordFieldValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18passwordFieldValueEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject18descriptionForMSAAEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject18descriptionForMSAAEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject26isMathSubscriptSuperscriptEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject26isMathSubscriptSuperscriptEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject17stringRoleForMSAAEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject17stringRoleForMSAAEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject17selectedTextRangeEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject17selectedTextRangeEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject25canSetTextRangeAttributesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject25canSetTextRangeAttributesEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject26determineAccessibilityRoleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject26determineAccessibilityRoleEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject26isDescendantOfBarrenParentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject26isDescendantOfBarrenParentEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject15boundingBoxRectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject15boundingBoxRectEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject23widgetForAttachmentViewEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject23widgetForAttachmentViewEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject23isMathSeparatorOperatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject23isMathSeparatorOperatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject23canSetExpandedAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject23canSetExpandedAttributeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject25supportsRequiredAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject25supportsRequiredAttributeEv(i1 | 0) | 0;
}
function vi___ZN7WebCore25AccessibilityRenderObject29handleActiveDescendantChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject29handleActiveDescendantChangedEv(i1 | 0);
}
function di___ZNK7WebCore25AccessibilityRenderObject24estimatedLoadingProgressEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore25AccessibilityRenderObject24estimatedLoadingProgressEv(i1 | 0);
}
function vii___ZNK7WebCore23AccessibilityNodeObject16valueDescriptionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject16valueDescriptionEv(i1 | 0, i2 | 0);
}
function vif___ZN7WebCore23AccessibilityNodeObject20changeValueByPercentEf__wrapper(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore23AccessibilityNodeObject20changeValueByPercentEf(i1 | 0, +d2);
}
function ii___ZNK7WebCore25AccessibilityRenderObject22defaultObjectInclusionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject22defaultObjectInclusionEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject22ariaLiveRegionRelevantEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject22ariaLiveRegionRelevantEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject24canvasHasFallbackContentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject24canvasHasFallbackContentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject21exposesTitleUIElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject21exposesTitleUIElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject23isNativeCheckboxOrRadioEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject23isNativeCheckboxOrRadioEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject23canSetSelectedAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject23canSetSelectedAttributeEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject12selectedTextEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject12selectedTextEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject20supportsARIADroppingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20supportsARIADroppingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject20supportsARIADraggingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20supportsARIADraggingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject20parentObjectIfExistsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20parentObjectIfExistsEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject20canSetValueAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20canSetValueAttributeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionStatusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionStatusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionAtomicEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionAtomicEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject21mathSuperscriptObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject21mathSuperscriptObjectEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject21mathDenominatorObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject21mathDenominatorObjectEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject11stringValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject11stringValueEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject11nameForMSAAEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject11nameForMSAAEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject11elementRectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject11elementRectEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore25AccessibilityRenderObject11elementPathEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject11elementPathEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject19isMathFenceOperatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject19isMathFenceOperatorEv(i1 | 0) | 0;
}
function vi___ZN7WebCore25AccessibilityRenderObject25updateChildrenIfNecessaryEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject25updateChildrenIfNecessaryEv(i1 | 0);
}
function vi___ZN7WebCore25AccessibilityRenderObject25handleAriaExpandedChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject25handleAriaExpandedChangedEv(i1 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject18supportsARIAFlowToEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject18supportsARIAFlowToEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject18isFileUploadButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject18isFileUploadButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject18ariaLiveRegionBusyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject18ariaLiveRegionBusyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject20checkboxOrRadioValueEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject20checkboxOrRadioValueEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject19mathSubscriptObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject19mathSubscriptObjectEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject19mathRootIndexObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject19mathRootIndexObjectEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject19mathNumeratorObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject19mathNumeratorObjectEv(i1 | 0) | 0;
}
function vii___ZN7WebCore25AccessibilityRenderObject10setFocusedEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject10setFocusedEb(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore25AccessibilityRenderObject10clickPointEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore25AccessibilityRenderObject10clickPointEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject17mathLineThicknessEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject17mathLineThicknessEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject17isMathMultiscriptEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject17isMathMultiscriptEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject17documentFrameViewEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject17documentFrameViewEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject19isProgressIndicatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject19isProgressIndicatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject19isNativeTextControlEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject19isNativeTextControlEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject18mathRadicandObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject18mathRadicandObjectEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject9selectionEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject9selectionEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject16supportsARIAOwnsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16supportsARIAOwnsEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject16roleValueForMSAAEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16roleValueForMSAAEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject16observableObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16observableObjectEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject16isMathSquareRootEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16isMathSquareRootEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject16isMathIdentifierEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16isMathIdentifierEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject16activeDescendantEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject16activeDescendantEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv(i1 | 0) | 0;
}
function ii___ZN7WebCore23AccessibilityNodeObject19selectedRadioButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore23AccessibilityNodeObject19selectedRadioButtonEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject8helpTextEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject8helpTextEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject15previousSiblingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject15previousSiblingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject15isMathUnderOverEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject15isMathUnderOverEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject15isMathTableCellEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject15isMathTableCellEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject15canHaveChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject15canHaveChildrenEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject17isMultiSelectableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject17isMultiSelectableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject17hierarchicalLevelEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject17hierarchicalLevelEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject17ariaRoleAttributeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject17ariaRoleAttributeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv(i1 | 0) | 0;
}
function vi___ZN7WebCore23AccessibilityNodeObject23updateAccessibilityRoleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityNodeObject23updateAccessibilityRoleEv(i1 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject14titleUIElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject14titleUIElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject14isMathTableRowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject14isMathTableRowEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject14isMathOperatorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject14isMathOperatorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject14isMathFractionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject14isMathFractionEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject15mathUnderObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject15mathUnderObjectEv(i1 | 0) | 0;
}
function fi___ZNK7WebCore23AccessibilityNodeObject17stepValueForRangeEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore23AccessibilityNodeObject17stepValueForRangeEv(i1 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject13speakPropertyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject13speakPropertyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject13isMathElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject13isMathElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject13hasItalicFontEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject13hasItalicFontEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject13anchorElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject13anchorElementEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject15isPasswordFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject15isPasswordFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject15isIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject15isIndeterminateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject14mathOverObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject14mathOverObjectEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject14mathBaseObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject14mathBaseObjectEv(i1 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function fi___ZNK7WebCore23AccessibilityNodeObject16minValueForRangeEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore23AccessibilityNodeObject16minValueForRangeEv(i1 | 0);
}
function fi___ZNK7WebCore23AccessibilityNodeObject16maxValueForRangeEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore23AccessibilityNodeObject16maxValueForRangeEv(i1 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject12supportsPathEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12supportsPathEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12parentObjectEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12parentObjectEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12isMathNumberEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12isMathNumberEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12isMathFencedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12isMathFencedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12isAttachmentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12isAttachmentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12hasUnderlineEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12hasUnderlineEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12hasPlainTextEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12hasPlainTextEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject12ariaHasPopupEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject12ariaHasPopupEv(i1 | 0) | 0;
}
function ii___ZN7WebCore25AccessibilityRenderObject13isARIAGrabbedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore25AccessibilityRenderObject13isARIAGrabbedEv(i1 | 0) | 0;
}
function ii___ZN7WebCore23AccessibilityNodeObject15selectedTabItemEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore23AccessibilityNodeObject15selectedTabItemEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject13isRadioButtonEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 78 | 0;
}
function __ZNK7WebCore19AccessibilityObject12isSpinButtonEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 90 | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject4textEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject4textEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject11orientationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11orientationEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11nextSiblingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11nextSiblingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11layoutCountEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11layoutCountEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11isUnvisitedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11isUnvisitedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11isOffScreenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11isOffScreenEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11isMathTableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11isMathTableEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject11hasBoldFontEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject11hasBoldFontEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject13isSearchFieldEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject13isSearchFieldEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject13isNativeImageEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject13isNativeImageEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject13isMenuRelatedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject13isMenuRelatedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject13isImageButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject13isImageButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject13actionElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject13actionElementEv(i1 | 0) | 0;
}
function __ZNK7WebCore19AccessibilityObject10isCheckboxEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 16 | 0;
}
function vii___ZNK7WebCore25AccessibilityRenderObject3urlEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore25AccessibilityRenderObject3urlEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore23AccessibilityNodeObject5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore23AccessibilityNodeObject5titleEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject10textLengthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10textLengthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10isSelectedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10isSelectedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10isReadOnlyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10isReadOnlyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10isMathTextEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10isMathTextEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10isMathRootEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10isMathRootEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10firstChildEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10firstChildEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject10actionVerbEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject10actionVerbEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject12isMenuButtonEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject12isMenuButtonEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject12isInputImageEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject12isInputImageEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject12headingLevelEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject12headingLevelEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject16focusedUIElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject16focusedUIElementEv(i1 | 0) | 0;
}
function fi___ZNK7WebCore23AccessibilityNodeObject13valueForRangeEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore23AccessibilityNodeObject13valueForRangeEv(i1 | 0);
}
function __ZNK7WebCore19AccessibilityObject9isListBoxEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 616 >> 2] & 511](i1) | 0) == 59 | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject9lastChildEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject9lastChildEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject9isVisitedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject9isVisitedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject9isMathRowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject9isMathRowEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject9isFocusedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject9isFocusedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject9accessKeyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject9accessKeyEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject10isRequiredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject10isRequiredEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject10isMenuItemEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject10isMenuItemEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject10isFieldsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject10isFieldsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv(i1 | 0) | 0;
}
function vi___ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv(i1 | 0);
}
function ii___ZNK7WebCore25AccessibilityRenderObject8isLoadedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject8isLoadedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject8isLinkedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject8isLinkedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject8documentEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject8documentEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject13invalidStatusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject13invalidStatusEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject13axObjectCacheEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject13axObjectCacheEv(i1 | 0) | 0;
}
function vi___ZN7WebCore25AccessibilityRenderObject13clearChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject13clearChildrenEv(i1 | 0);
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isPressedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isPressedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isMenuBarEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isMenuBarEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isHoveredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isHoveredEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isHeadingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isHeadingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isEnabledEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isControlEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isControlEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject9isCheckedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject9isCheckedEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore25AccessibilityRenderObject6widgetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject6widgetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject8isSliderEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject8isSliderEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject8isAnchorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject8isAnchorEv(i1 | 0) | 0;
}
function vi___ZN7WebCore25AccessibilityRenderObject11textChangedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject11textChangedEv(i1 | 0);
}
function ii___ZNK7WebCore23AccessibilityNodeObject7isImageEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject7isImageEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject7isGroupEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject7isGroupEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore19AccessibilityObject10isExpandedEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore19AccessibilityObject10isExpandedEv(i1 | 0) | 0;
}
function __ZN7WebCore21AccessibilityMenuListD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZNK7WebCore25AccessibilityRenderObject4nodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore25AccessibilityRenderObject4nodeEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject6isMenuEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject6isMenuEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore23AccessibilityNodeObject6isLinkEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore23AccessibilityNodeObject6isLinkEv(i1 | 0) | 0;
}
function vi___ZN7WebCore23AccessibilityNodeObject9incrementEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityNodeObject9incrementEv(i1 | 0);
}
function vi___ZN7WebCore23AccessibilityNodeObject9decrementEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore23AccessibilityNodeObject9decrementEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore21AccessibilityMenuList11isCollapsedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 + 52 >> 2] | 0) + 160 | 0] & 1) == 0 | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vi___ZN7WebCore25AccessibilityRenderObject4initEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObject4initEv(i1 | 0);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore21AccessibilityMenuListD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore25AccessibilityRenderObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore25AccessibilityRenderObject24setNeedsToUpdateChildrenEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 40 | 0] = 1;
 return;
}
function __ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore25AccessibilityRenderObject10isDetachedEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 52 >> 2] | 0) == 0 | 0;
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
function __ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject11hasChildrenEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 24 | 0] & 1) != 0 | 0;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 7](i2 | 0, +d3);
}
function __ZNK7WebCore25AccessibilityRenderObject8rendererEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 52 >> 2] | 0;
}
function __ZNK7WebCore25AccessibilityRenderObject27isAccessibilityRenderObjectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore23AccessibilityNodeObject25isAccessibilityNodeObjectEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZN7WebCore19AccessibilityObject13setIsExpandedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore19AccessibilityObject11setSelectedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 3](i2 | 0);
}
function __ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject18canSetNumericValueEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject16isMenuListOptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isMenuListPopupEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isMediaTimelineEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject15isListBoxOptionEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject14isImageMapLinkEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isTableColumnEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isSliderThumbEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject13isInputSliderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore19AccessibilityObject16detachFromParentEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore21AccessibilityMenuList10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject12isMockObjectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore21AccessibilityMenuList9roleValueEv(i1) {
 i1 = i1 | 0;
 return 75;
}
function __ZNK7WebCore19AccessibilityObject11isTableCellEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject11isDataTableEv(i1) {
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
function __ZNK7WebCore19AccessibilityObject9isVisibleEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore19AccessibilityObject7isTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19AccessibilityObject6isListEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
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
  var FUNCTION_TABLE_vif = [b0,b0,__ZN7WebCore19AccessibilityObject8setValueEf,b0,vif___ZN7WebCore23AccessibilityNodeObject20changeValueByPercentEf__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,di___ZNK7WebCore25AccessibilityRenderObject24estimatedLoadingProgressEv__wrapper,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore19AccessibilityObject16detachFromParentEv,b2,vi___ZN7WebCore23AccessibilityNodeObject23updateAccessibilityRoleEv__wrapper,b2,__ZN7WebCore21AccessibilityMenuListD1Ev,b2,__ZN7WebCore21AccessibilityMenuListD0Ev,b2,__ZN7WebCore21AccessibilityMenuList11addChildrenEv,b2,vi___ZN7WebCore25AccessibilityRenderObject25updateChildrenIfNecessaryEv__wrapper,b2,__ZN7WebCore21AccessibilityMenuList15childrenChangedEv,b2,vi___ZN7WebCore23AccessibilityNodeObject9decrementEv__wrapper,b2,vi___ZNK7WebCore19AccessibilityObject19scrollToMakeVisibleEv__wrapper,b2,__ZN7WebCore25AccessibilityRenderObject24setNeedsToUpdateChildrenEv,b2,vi___ZN7WebCore25AccessibilityRenderObject4initEv__wrapper,b2,vi___ZN7WebCore25AccessibilityRenderObject13clearChildrenEv__wrapper,b2,vi___ZN7WebCore25AccessibilityRenderObject25handleAriaExpandedChangedEv__wrapper,b2,vi___ZN7WebCore25AccessibilityRenderObject11textChangedEv__wrapper
  ,b2,vi___ZN7WebCore23AccessibilityNodeObject9incrementEv__wrapper,b2,vi___ZN7WebCore25AccessibilityRenderObject29handleActiveDescendantChangedEv__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,vii___ZN7WebCore25AccessibilityRenderObject15visibleChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore19AccessibilityObject13setIsExpandedEb,b3,vii___ZN7WebCore23AccessibilityNodeObject17accessibilityTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject10setFocusedEb__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject11stringValueEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject4textEv__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject10clickPointEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject10lineBreaksERN3WTF6VectorIiLj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject12selectedTextEv__wrapper,b3,vii___ZNK7WebCore19AccessibilityObject19scrollToGlobalPointERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject18descriptionForMSAAEv__wrapper,b3,__ZN7WebCore19AccessibilityObject11setSelectedEb,b3,vii___ZN7WebCore25AccessibilityRenderObject8setValueERKN3WTF6StringE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject17stringRoleForMSAAEv__wrapper
  ,b3,vii___ZN7WebCore25AccessibilityRenderObject16getDocumentLinksERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject18passwordFieldValueEv__wrapper,b3,vii___ZNK7WebCore23AccessibilityNodeObject16valueDescriptionEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject31setSelectedVisiblePositionRangeERKNS_20VisiblePositionRangeE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject3urlEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject9selectionEv__wrapper,b3,__ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE,b3,__ZN7WebCore21AccessibilityMenuListC2EPNS_14RenderMenuListE,b3,vii___ZNK7WebCore25AccessibilityRenderObject8helpTextEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject18stringValueForMSAAEv__wrapper,b3,__ZN7WebCore19AccessibilityObject14setARIAGrabbedEb,b3,vii___ZNK7WebCore23AccessibilityNodeObject22ariaLabeledByAttributeEv__wrapper,b3,vii___ZNK7WebCore23AccessibilityNodeObject16titleElementTextERN3WTF6VectorINS_17AccessibilityTextELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject24determineARIADropEffectsERN3WTF6VectorINS1_6StringELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject16linkedUIElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b3,vii___ZNK7WebCore23AccessibilityNodeObject24accessibilityDescriptionEv__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject20setSelectedTextRangeERKNS_14PlainTextRangeE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject8scrollToERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject11nameForMSAAEv__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject17setAccessibleNameERKN3WTF12AtomicStringE__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject15mathPostscriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject21mathFencedCloseStringEv__wrapper,b3,vii___ZNK7WebCore23AccessibilityNodeObject24ariaDescribedByAttributeEv__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject11tabChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE,b3,vii___ZN7WebCore25AccessibilityRenderObject14mathPrescriptsERN3WTF6VectorINSt3__14pairIPNS_19AccessibilityObjectES6_EELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore19AccessibilityObject31scrollToMakeVisibleWithSubFocusERKNS_7IntRectE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject17selectedTextRangeEv__wrapper,b3,vii___ZNK7WebCore23AccessibilityNodeObject5titleEv__wrapper,b3,vii___ZN7WebCore23AccessibilityNodeObject8addChildEPNS_19AccessibilityObjectE__wrapper
  ,b3,vii___ZN7WebCore25AccessibilityRenderObject15setSelectedRowsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject11elementPathEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject11elementRectEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject15boundingBoxRectEv__wrapper,b3,vii___ZN7WebCore25AccessibilityRenderObject16selectedChildrenERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject18ariaFlowToElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject20visiblePositionRangeEv__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject16ariaOwnsElementsERN3WTF6VectorINS1_6RefPtrINS_19AccessibilityObjectEEELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZNK7WebCore25AccessibilityRenderObject20mathFencedOpenStringEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore19AccessibilityObject12isSpinButtonEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject8documentEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject13isNativeImageEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject18canSetNumericValueEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject8isLinkedEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject14isImageMapLinkEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject11layoutCountEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject16focusedUIElementEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject12headingLevelEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject12isInputImageEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject10isMenuItemEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject4nodeEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject23canSetSelectedAttributeEv__wrapper
  ,b4,ii___ZNK7WebCore25AccessibilityRenderObject16observableObjectEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject13isRadioButtonEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject9isMathRowEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject15isListBoxOptionEv,b4,__ZNK7WebCore19AccessibilityObject11isDataTableEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject13isMathElementEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject13isMenuRelatedEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject19isNativeTextControlEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject16isMathIdentifierEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject11nextSiblingEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20parentObjectIfExistsEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject13actionElementEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject19mathNumeratorObjectEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject17isMultiSelectableEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject18mathRadicandObjectEv__wrapper
  ,b4,ii___ZNK7WebCore25AccessibilityRenderObject12hasUnderlineEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject23widgetForAttachmentViewEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject10isSelectedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionAtomicEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20canSetValueAttributeEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject35correspondingLabelForControlElementEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject15isMathTableCellEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject10firstChildEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject18ariaLiveRegionBusyEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject9isFocusedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject10isReadOnlyEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject23canSetExpandedAttributeEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject13speakPropertyEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject9isListBoxEv
  ,b4,__ZNK7WebCore21AccessibilityMenuList11isCollapsedEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject24canvasHasFallbackContentEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject31isPresentationalChildOfAriaRoleEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject20ariaPressedIsPresentEv__wrapper,b4,__ZNK7WebCore25AccessibilityRenderObject8rendererEv,b4,__ZNK7WebCore19AccessibilityObject15isMenuListPopupEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject9accessKeyEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject13hasItalicFontEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject10isFieldsetEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject12supportsPathEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject6isMenuEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject10isExpandedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12parentObjectEv__wrapper
  ,b4,ii___ZNK7WebCore23AccessibilityNodeObject13isSearchFieldEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject11isTableCellEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject11isUnvisitedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject26isMathSubscriptSuperscriptEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject7isTableEv,b4,ii___ZN7WebCore25AccessibilityRenderObject21mathSuperscriptObjectEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject11orientationEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12hasPlainTextEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject13invalidStatusEv__wrapper,b4,ii___ZN7WebCore23AccessibilityNodeObject19selectedRadioButtonEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject10tableLevelEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject14isMathFractionEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject7isGroupEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject29getScrollableAreaIfScrollableEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12isAttachmentEv__wrapper
  ,b4,ii___ZNK7WebCore23AccessibilityNodeObject8isAnchorEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject14mathBaseObjectEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isMenuBarEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv,b4,__ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv,b4,__ZNK7WebCore19AccessibilityObject10isCheckboxEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isControlEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject16isMenuListOptionEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject11isMathTableEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12ariaHasPopupEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject11hasChildrenEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject19isProgressIndicatorEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20supportsARIADroppingEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject18isFileUploadButtonEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20supportsARIADraggingEv__wrapper
  ,b4,ii___ZNK7WebCore23AccessibilityNodeObject10isRequiredEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject12isMockObjectEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject6isLinkEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject15previousSiblingEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject20ariaLiveRegionStatusEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject17ariaRoleAttributeEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject13isSliderThumbEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject11isOffScreenEv__wrapper,b4,__ZNK7WebCore21AccessibilityMenuList5pressEv,b4,ii___ZNK7WebCore19AccessibilityObject13axObjectCacheEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject9isVisitedEv__wrapper,b4,__ZNK7WebCore21AccessibilityMenuList10isMenuListEv,b4,__ZNK7WebCore19AccessibilityObject6isListEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject14titleUIElementEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject14mathOverObjectEv__wrapper
  ,b4,ii___ZNK7WebCore23AccessibilityNodeObject15isIndeterminateEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject21mathDenominatorObjectEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isCheckedEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject13isARIAGrabbedEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isEnabledEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject25canSetTextRangeAttributesEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject14buttonRoleTypeEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isHoveredEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject27shouldFocusActiveDescendantEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject17mathLineThicknessEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject33ariaRoleHasPresentationalChildrenEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject14isMathTableRowEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject22accessibilityIsIgnoredEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject17documentFrameViewEv__wrapper
  ,b4,__ZNK7WebCore19AccessibilityObject13isInputSliderEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject10actionVerbEv__wrapper,b4,ii___ZN7WebCore23AccessibilityNodeObject15selectedTabItemEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject23isNativeCheckboxOrRadioEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject10isMathRootEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject24isAccessibilityScrollbarEv,b4,__ZNK7WebCore19AccessibilityObject13isTableColumnEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject6widgetEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject15isMathUnderOverEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject22defaultObjectInclusionEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject33hasAttributesRequiredForInclusionEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject12isMenuButtonEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject16isMathSquareRootEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject13anchorElementEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject9isVisibleEv
  ,b4,ii___ZNK7WebCore25AccessibilityRenderObject11hasBoldFontEv__wrapper,b4,__ZNK7WebCore25AccessibilityRenderObject10isDetachedEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject22ariaLiveRegionRelevantEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject16supportsARIAOwnsEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject17hierarchicalLevelEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv,b4,__ZNK7WebCore21AccessibilityMenuList20canSetFocusAttributeEv,b4,ii___ZN7WebCore25AccessibilityRenderObject19mathRootIndexObjectEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12isMathFencedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject15canHaveChildrenEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject9lastChildEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject25supportsRequiredAttributeEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject35correspondingControlForLabelElementEv__wrapper,b4,ii___ZNK7WebCore19AccessibilityObject21parentObjectUnignoredEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject16roleValueForMSAAEv__wrapper
  ,b4,ii___ZNK7WebCore25AccessibilityRenderObject16activeDescendantEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject15mathUnderObjectEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject15isMediaTimelineEv,b4,__ZNK7WebCore21AccessibilityMenuList9roleValueEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject19isMathFenceOperatorEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject10isTableRowEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject29computeAccessibilityIsIgnoredEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject14isMathOperatorEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject12isMathNumberEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isHeadingEv__wrapper,b4,ii___ZN7WebCore25AccessibilityRenderObject19mathSubscriptObjectEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject9isPressedEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject8isSliderEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject10isMathTextEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject20checkboxOrRadioValueEv__wrapper
  ,b4,ii___ZN7WebCore25AccessibilityRenderObject26determineAccessibilityRoleEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject7isImageEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject21exposesTitleUIElementEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject18supportsARIAFlowToEv__wrapper,b4,__ZNK7WebCore23AccessibilityNodeObject25isAccessibilityNodeObjectEv,b4,ii___ZNK7WebCore25AccessibilityRenderObject10textLengthEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject26isDescendantOfBarrenParentEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject17isMathMultiscriptEv__wrapper,b4,ii___ZNK7WebCore23AccessibilityNodeObject13isImageButtonEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject8isLoadedEv__wrapper,b4,ii___ZNK7WebCore25AccessibilityRenderObject23isMathSeparatorOperatorEv__wrapper,b4,__ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv,b4,ii___ZNK7WebCore23AccessibilityNodeObject15isPasswordFieldEv__wrapper,b4,__ZNK7WebCore25AccessibilityRenderObject27isAccessibilityRenderObjectEv,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZNK7WebCore25AccessibilityRenderObject16doAXRangeForLineEj__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEi__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject17doAXRangeForIndexEj__wrapper,b5,viii___ZN7WebCore25AccessibilityRenderObject6detachENS_27AccessibilityDetachmentTypeEPNS_13AXObjectCacheE__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject16textUnderElementENS_33AccessibilityTextUnderElementModeE__wrapper,b5,viii___ZN7WebCore23AccessibilityNodeObject11insertChildEPNS_19AccessibilityObjectEj__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject29boundsForVisiblePositionRangeERKNS_20VisiblePositionRangeE__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject27visiblePositionRangeForLineEj__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForPointERKNS_8IntPointE__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject18doAXBoundsForRangeERKNS_14PlainTextRangeE__wrapper,b5,viii___ZNK7WebCore25AccessibilityRenderObject18doAXStringForRangeERKNS_14PlainTextRangeE__wrapper,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_fi = [b7,b7,fi___ZNK7WebCore23AccessibilityNodeObject13valueForRangeEv__wrapper,b7,fi___ZNK7WebCore23AccessibilityNodeObject16maxValueForRangeEv__wrapper,b7,fi___ZNK7WebCore23AccessibilityNodeObject16minValueForRangeEv__wrapper,b7,fi___ZNK7WebCore23AccessibilityNodeObject17stepValueForRangeEv__wrapper,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZNK7WebCore25AccessibilityRenderObject11hasSameFontEPNS_12RenderObjectE__wrapper,b8,iii___ZNK7WebCore25AccessibilityRenderObject12hasSameStyleEPNS_12RenderObjectE__wrapper,b8,iii___ZNK7WebCore25AccessibilityRenderObject20accessibilityHitTestERKNS_8IntPointE__wrapper,b8,__ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE,b8,iii___ZNK7WebCore25AccessibilityRenderObject23indexForVisiblePositionERKNS_15VisiblePositionE__wrapper,b8,iii___ZNK7WebCore25AccessibilityRenderObject16hasSameFontColorEPNS_12RenderObjectE__wrapper,b8,iii___ZNK7WebCore25AccessibilityRenderObject27elementAccessibilityHitTestERKNS_8IntPointE__wrapper,b8,iii___ZNK7WebCore25AccessibilityRenderObject5indexERKNS_15VisiblePositionE__wrapper,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,viiii___ZNK7WebCore23AccessibilityNodeObject10colorValueERiS1_S1___wrapper,b9,viiii___ZNK7WebCore25AccessibilityRenderObject23visiblePositionForIndexEjb__wrapper,b9,b9,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vif: dynCall_vif, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vif": invoke_vif, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore21AccessibilityMenuList11isCollapsedEv","__ZNK7WebCore19AccessibilityObject12isSpinButtonEv","__ZNK7WebCore19AccessibilityObject18canSetNumericValueEv","__ZN7WebCore19AccessibilityObject16makeRangeVisibleERKNS_14PlainTextRangeE","__ZNK7WebCore19AccessibilityObject6isListEv","__ZNK7WebCore19AccessibilityObject12isMockObjectEv","__ZN7WebCore19AccessibilityObject13setIsExpandedEb","__ZN7WebCore19AccessibilityObject16detachFromParentEv","__ZN7WebCore25AccessibilityRenderObject24setNeedsToUpdateChildrenEv","__ZNK7WebCore19AccessibilityObject9isVisibleEv","__ZNK7WebCore19AccessibilityObject15isMenuListPopupEv","__ZN7WebCore21AccessibilityMenuListD0Ev","__ZNK7WebCore19AccessibilityObject14isImageMapLinkEv","__ZNK7WebCore19AccessibilityObject13isSliderThumbEv","__ZN7WebCore21AccessibilityMenuListD1Ev","__ZNK7WebCore21AccessibilityMenuList5pressEv","__ZNK7WebCore21AccessibilityMenuList20canSetFocusAttributeEv","__ZNK7WebCore19AccessibilityObject31canSetSelectedChildrenAttributeEv","__ZNK7WebCore21AccessibilityMenuList10isMenuListEv","__ZN7WebCore21AccessibilityMenuList21didUpdateActiveOptionEi","__ZNK7WebCore19AccessibilityObject16isSpinButtonPartEv","__ZNK7WebCore19AccessibilityObject22isAccessibilitySVGRootEv","__ZN7WebCore19AccessibilityObject11setSelectedEb","__ZN7WebCore21AccessibilityMenuList11addChildrenEv","__ZNK7WebCore25AccessibilityRenderObject8rendererEv","__ZNK7WebCore19AccessibilityObject19isMediaControlLabelEv","_memset","_strlen","__ZNK7WebCore19AccessibilityObject15isMediaTimelineEv","_memcpy","__ZNK7WebCore19AccessibilityObject13isRadioButtonEv","__ZN7WebCore19AccessibilityObject15setSelectedTextERKN3WTF6StringE","__ZNK7WebCore19AccessibilityObject15isListBoxOptionEv","__ZNK7WebCore21AccessibilityMenuList9roleValueEv","__ZNK7WebCore19AccessibilityObject7isTableEv","__ZNK7WebCore19AccessibilityObject11hasChildrenEv","__ZNK7WebCore19AccessibilityObject11isDataTableEv","__ZN7WebCore19AccessibilityObject14setARIAGrabbedEb","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore19AccessibilityObject10tableLevelEv","__ZNK7WebCore19AccessibilityObject20isAccessibilityTableEv","__ZN7WebCore21AccessibilityMenuListC2EPNS_14RenderMenuListE","__ZNK7WebCore19AccessibilityObject10isTableRowEv","__ZNK7WebCore19AccessibilityObject16isMenuListOptionEv","__ZNK7WebCore23AccessibilityNodeObject25isAccessibilityNodeObjectEv","__ZNK7WebCore19AccessibilityObject17isARIATreeGridRowEv","__ZNK7WebCore19AccessibilityObject22isSelectedOptionActiveEv","__ZNK7WebCore19AccessibilityObject11isTableCellEv","__ZNK7WebCore19AccessibilityObject18isNativeSpinButtonEv","__ZN7WebCore21AccessibilityMenuList15childrenChangedEv","__ZNK7WebCore25AccessibilityRenderObject10isDetachedEv","__ZNK7WebCore19AccessibilityObject10isCheckboxEv","__ZNK7WebCore19AccessibilityObject13isInputSliderEv","__ZNK7WebCore25AccessibilityRenderObject27isAccessibilityRenderObjectEv","__ZNK7WebCore19AccessibilityObject13isTableColumnEv","__ZN7WebCore19AccessibilityObject8setValueEf","__ZNK7WebCore19AccessibilityObject25isAccessibilityScrollViewEv","__ZN7WebCore19AccessibilityObject9scrollBarENS_24AccessibilityOrientationE","__ZNK7WebCore19AccessibilityObject24isAccessibilityScrollbarEv","__ZN7WebCore21AccessibilityMenuList6createEPNS_14RenderMenuListE","__ZNK7WebCore19AccessibilityObject9isListBoxEv"]

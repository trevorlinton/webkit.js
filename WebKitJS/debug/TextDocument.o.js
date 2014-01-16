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
H_BASE = parentModule["_malloc"](528 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 528;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore12TextDocumentC1EPNS_5FrameERKNS_3URLE;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,212,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,168,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16,247,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiii(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiii"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore12TextDocumentE=(H_BASE+8)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_di=env.invoke_di;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_v + 16;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_v + 14;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_di + 2;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_di + 6;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_v + 12;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_di + 8;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_di + 4;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 82;
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
function __ZN7WebCore12TextDocumentC2EPNS_5FrameERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj(i1 | 0, i2, i3, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 380;
 HEAP32[i1 + 88 >> 2] = H_BASE + 404;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 508;
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i1 | 0, 0);
 HEAP8[i1 + 668 | 0] = 1;
 return;
}
function __ZN7WebCore12TextDocumentC1EPNS_5FrameERKNS_3URLE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12HTMLDocumentC2EPNS_5FrameERKNS_3URLEhj(i1 | 0, i2, i3, 0, 0);
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i1 + 44 >> 2] = H_BASE + 380;
 HEAP32[i1 + 88 >> 2] = H_BASE + 404;
 HEAP32[i1 + 2288 >> 2] = H_BASE + 508;
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i1 | 0, 0);
 HEAP8[i1 + 668 | 0] = 1;
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
function viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZThn88_N7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 - 2288 + 2200 | 0;
 i1 = i2 + 8 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 16 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2);
 return;
}
function viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore8Document27derefScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 8 | 0;
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper() {
 __ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm();
}
function iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE(i1 | 0, i2 | 0);
}
function v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function __ZN7WebCore12TextDocument12createParserEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN3WTF10fastMallocEj(480) | 0;
 __ZN7WebCore18TextDocumentParserC1ERNS_12HTMLDocumentE(i3, i2 | 0);
 HEAP32[i1 >> 2] = i3;
 return;
}
function v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper() {
 __ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE();
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document11completeURLERKN3WTF6StringE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb(i1 | 0, i2 | 0);
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
function viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv(i1 | 0, i2 | 0);
}
function v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper() {
 __ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE();
}
function iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore8Document9userAgentERKNS_3URLE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
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
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore4Node13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2288 + 2208 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore8Document11disableEvalERKN3WTF6StringE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function __ZThn88_N7WebCore12TextDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 2248 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn44_N7WebCore12TextDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 2292 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn2288_N7WebCore12TextDocumentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 2336 + 48 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore8Document9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore8Document9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function __ZN7WebCore8Document25refScriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 return;
}
function di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZThn88_NK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function v___ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi__wrapper() {
 __ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi();
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_N7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document22timerAlignmentIntervalEv(i1 | 0);
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore8Document20minimumTimerIntervalEv(i1 | 0);
}
function __ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9TreeScope17applyAuthorStylesEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document23removeAllEventListenersEv(i1 | 0);
}
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore8Document8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore8Document15isContextThreadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document15isContextThreadEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12HTMLDocument10isFrameSetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12HTMLDocument10isFrameSetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore8Document16errorEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore8Document16errorEventTargetEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore8Document7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore8Document7baseURIEv(i1 | 0, i2 | 0);
}
function ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZThn88_NK7WebCore8Document9topOriginEv(i1 | 0) | 0;
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
function vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document20stopActiveDOMObjectsEv(i1 | 0);
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZThn44_N7WebCore8Document12dropChildrenEv(i1 | 0);
}
function __ZN7WebCore12TextDocumentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function ii___ZNK7WebCore8Document9topOriginEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document9topOriginEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node12namespaceURIEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node12namespaceURIEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function ii___ZNK7WebCore8Document8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore8Document8nodeTypeEv(i1 | 0) | 0;
}
function __ZThn88_N7WebCore12TextDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 2248 | 0);
 return;
}
function __ZThn44_N7WebCore12TextDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 2292 | 0);
 return;
}
function __ZThn2288_N7WebCore12TextDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 - 2336 + 48 | 0);
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
function vi___ZN7WebCore8Document12dropChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document12dropChildrenEv(i1 | 0);
}
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function __ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 1;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZNK7WebCore4Node9localNameEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node9localNameEv(i1 | 0) | 0;
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
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZNK7WebCore4Node6prefixEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node6prefixEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore12TextDocumentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12HTMLDocumentD2Ev(i1 | 0);
 return;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 15](i2 | 0);
}
function __ZThn88_NK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 3788 | 0;
}
function __ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore20CachedResourceClient18resourceClientTypeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn88_NK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 - 2288 + 2556 | 0;
}
function __ZNK7WebCore8Document23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore8Document22isJSExecutionForbiddenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore8Document10eventQueueEv(i1) {
 i1 = i1 | 0;
 return i1 + 1588 | 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZThn88_NK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node21finishParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore8Document3urlEv(i1) {
 i1 = i1 | 0;
 return i1 + 356 | 0;
}
function __ZN7WebCore4Node20beginParsingChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
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
function __ZNK7WebCore8Document10isDocumentEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
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
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 31]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZThn88_N7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,viiiii___ZN7WebCore8Document17addConsoleMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringEm__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_di = [b1,b1,di___ZNK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZNK7WebCore8Document22timerAlignmentIntervalEv__wrapper,b1,di___ZThn88_NK7WebCore8Document20minimumTimerIntervalEv__wrapper,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZThn88_N7WebCore12TextDocumentD0Ev,b2,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b2,__ZThn2288_N7WebCore12TextDocumentD0Ev,b2,__ZN7WebCore12TextDocumentD0Ev,b2,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b2,__ZThn88_N7WebCore8Document25refScriptExecutionContextEv,b2,__ZN7WebCore8Document27derefScriptExecutionContextEv,b2,__ZThn88_N7WebCore12TextDocumentD1Ev,b2,vi___ZN7WebCore8Document12dropChildrenEv__wrapper,b2,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b2,vi___ZN7WebCore8Document23removeAllEventListenersEv__wrapper,b2,__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv,b2,__ZN7WebCore4Node20beginParsingChildrenEv,b2,__ZN7WebCore8Document25refScriptExecutionContextEv
  ,b2,__ZThn44_N7WebCore12TextDocumentD0Ev,b2,__ZN7WebCore4Node24startLoadingDynamicSheetEv,b2,vi___ZN7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,vi___ZThn44_N7WebCore8Document12dropChildrenEv__wrapper,b2,__ZThn2288_N7WebCore12TextDocumentD1Ev,b2,__ZN7WebCore4Node21finishParsingChildrenEv,b2,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b2,__ZThn44_N7WebCore12TextDocumentD1Ev,b2,vi___ZThn88_N7WebCore8Document20stopActiveDOMObjectsEv__wrapper,b2,__ZN7WebCore12TextDocumentD1Ev,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore12TextDocument12createParserEv,b3,vii___ZThn88_N7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper,b3,__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE,b3,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b3,vii___ZN7WebCore8Document15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b3,vii___ZThn88_N7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node11removedFromERNS_13ContainerNodeE__wrapper,b3,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b3,vii___ZNK7WebCore12HTMLDocument28cloneDocumentWithoutChildrenEv__wrapper,b3,vii___ZNK7WebCore8Document7baseURIEv__wrapper,b3,vii___ZThn88_N7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore8Document22resumeActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b3,vii___ZN7WebCore8Document11disableEvalERKN3WTF6StringE__wrapper
  ,b3,vii___ZN7WebCore8Document39scriptedAnimationControllerSetThrottledEb__wrapper,b3,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b3,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZNK7WebCore8Document8nodeNameEv__wrapper,b3,vii___ZN7WebCore8Document23suspendActiveDOMObjectsENS_15ActiveDOMObject19ReasonForSuspensionE__wrapper,b3,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,ii___ZThn88_N7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b4,ii___ZN7WebCore8Document16errorEventTargetEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document3urlEv,b4,__ZNK7WebCore4Node19isFrameOwnerElementEv,b4,ii___ZNK7WebCore12HTMLDocument10isFrameSetEv__wrapper,b4,__ZNK7WebCore4Node20isInsertionPointNodeEv,b4,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b4,ii___ZNK7WebCore4Node12namespaceURIEv__wrapper,b4,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b4,__ZNK7WebCore4Node22scriptExecutionContextEv,b4,__ZNK7WebCore8Document10isDocumentEv,b4,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b4,__ZThn88_NK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b4,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b4,ii___ZThn88_NK7WebCore8Document15isContextThreadEv__wrapper,b4,__ZThn88_NK7WebCore8Document3urlEv,b4,ii___ZNK7WebCore4Node6prefixEv__wrapper,b4,__ZNK7WebCore4Node16nonRendererStyleEv,b4,__ZNK7WebCore4Node15isPluginElementEv,b4,ii___ZNK7WebCore8Document9topOriginEv__wrapper,b4,__ZNK7WebCore8Document22isJSExecutionForbiddenEv,b4,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b4,__ZNK7WebCore8Document10eventQueueEv,b4,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b4,ii___ZNK7WebCore4Node9localNameEv__wrapper,b4,ii___ZNK7WebCore8Document8nodeTypeEv__wrapper
  ,b4,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b4,__ZNK7WebCore8Document23canContainRangeEndPointEv,b4,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b4,__ZN7WebCore4Node11sheetLoadedEv,b4,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b4,__ZNK7WebCore4Node14customPseudoIdEv,b4,__ZNK7WebCore4Node21isMediaControlElementEv,b4,__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv,b4,__ZNK7WebCore4Node19isCharacterDataNodeEv,b4,ii___ZN7WebCore4Node6toNodeEv__wrapper,b4,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b4,__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv,b4,ii___ZNK7WebCore8Document15isContextThreadEv__wrapper,b4,ii___ZNK7WebCore9TreeScope17applyAuthorStylesEv__wrapper,b4,__ZNK7WebCore4Node15isMediaControlsEv
  ,b4,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b4,__ZThn88_NK7WebCore8Document10isDocumentEv,b4,__ZNK7WebCore4Node15isAttributeNodeEv,b4,__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5,viii___ZThn88_NK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore8Document9cloneNodeEb__wrapper,b5,__ZN7WebCore12TextDocumentC2EPNS_5FrameERKNS_3URLE,b5,viii___ZThn88_NK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document9userAgentERKNS_3URLE__wrapper,b5,viii___ZNK7WebCore8Document11completeURLERKN3WTF6StringE__wrapper,b5,viii___ZN7WebCore4Node9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZThn88_N7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6,v___ZN7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,v___ZN7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZThn88_N7WebCore8Document10addMessageENS_13MessageSourceENS_12MessageLevelERKN3WTF6StringES6_jjNS3_10PassRefPtrINS_15ScriptCallStackEEEPN3JSC9ExecStateEm__wrapper,b6,v___ZThn88_N7WebCore8Document8postTaskEN3WTF10PassOwnPtrINS_22ScriptExecutionContext4TaskEEE__wrapper,b6,v___ZN7WebCore8Document21logExceptionToConsoleERKN3WTF6StringES4_iiNS1_10PassRefPtrINS_15ScriptCallStackEEE__wrapper,b6,v___ZN7WebCore12HTMLDocument13createElementERKN3WTF12AtomicStringERi__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiiii = [b7,b7,iiiii___ZN7WebCore4Node16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b7,iiiii___ZN7WebCore4Node19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_iii = [b8,b8,iii___ZN7WebCore4Node12insertedIntoERNS_13ContainerNodeE__wrapper,b8,__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE,b8,iii___ZNK7WebCore8Document16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b8,iii___ZN7WebCore4Node13computedStyleENS_8PseudoIdE__wrapper,b8,b8,b8,b8,b8,b8,b8];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn88_NK7WebCore8Document3urlEv","_strlen","__ZNK7WebCore4Node15isMediaControlsEv","__ZNK7WebCore8Document10isDocumentEv","__ZThn44_N7WebCore12TextDocumentD0Ev","__ZThn44_N7WebCore12TextDocumentD1Ev","_memset","__ZThn88_N7WebCore12TextDocumentD1Ev","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore4Node15isPluginElementEv","__ZNK7WebCore8Document3urlEv","__ZN7WebCore12TextDocument12createParserEv","__ZN7WebCore4Node20beginParsingChildrenEv","__ZN7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN7WebCore12TextDocumentD1Ev","__ZThn88_NK7WebCore8Document22isJSExecutionForbiddenEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZThn2288_N7WebCore12TextDocumentD0Ev","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore8Document22isJSExecutionForbiddenEv","__ZN7WebCore12TextDocumentD0Ev","__ZNK7WebCore8Document10eventQueueEv","__ZThn88_N7WebCore12TextDocumentD0Ev","__ZThn88_N7WebCore8Document27derefScriptExecutionContextEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore4Node14customPseudoIdEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore13ContainerNode25childShouldCreateRendererERKNS_4NodeE","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore20CachedResourceClient18resourceClientTypeEv","__ZThn2288_N7WebCore12TextDocumentD1Ev","__ZN7WebCore4Node21finishParsingChildrenEv","__ZThn88_NK7WebCore8Document10eventQueueEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZN7WebCore8Document25refScriptExecutionContextEv","__ZNK7WebCore8Document23canContainRangeEndPointEv","__ZNK7WebCore4Node27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE","__ZThn88_NK7WebCore8Document10isDocumentEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","_memcpy","__ZN7WebCore12TextDocumentC2EPNS_5FrameERKNS_3URLE","__ZThn88_N7WebCore8Document25refScriptExecutionContextEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore22ScriptExecutionContext19isWorkerGlobalScopeEv"]

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
H_BASE = parentModule["_malloc"](464 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 464;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore9ScrollbarC1EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE;
var __ZN7WebCore9ScrollbarD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,220,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZTVN7WebCore9ScrollbarE=(H_BASE+8)|0;
  var __ZTVN7WebCore5TimerINS_9ScrollbarEEE=(H_BASE+424)|0;
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
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_di=env.invoke_di;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_did + 2;
}
function __ZN7WebCore9Scrollbar10mouseMovedERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 88 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 16 | 0;
 } else if ((i9 | 0) == 8) {
  i9 = i1 + 52 | 0;
  i11 = HEAP32[i9 >> 2] | 0;
  i12 = i1 + 36 | 0;
  if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] & 1](i11, i12, i2) | 0) {
   i11 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i11 | 0) == 0) {
    STACKTOP = i3;
    return 1;
   }
   __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationENS_20ScrollbarOrientationEf(i11, HEAP32[i1 + 44 >> 2] | 0, +HEAPF32[i1 + 68 >> 2]);
   STACKTOP = i3;
   return 1;
  }
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + 148 >> 2] | 0;
  i13 = i2 + 16 | 0;
  if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
   FUNCTION_TABLE_viii[i11 & 15](i4, i1, i13);
   i14 = HEAP32[i4 >> 2] | 0;
  } else {
   FUNCTION_TABLE_viii[i11 & 15](i5, i1, i13);
   i14 = HEAP32[i5 + 4 >> 2] | 0;
  }
  i5 = HEAP32[i9 >> 2] | 0;
  __ZN7WebCore9Scrollbar9moveThumbEib(i1, i14, FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 1](i5, i12, i2) | 0);
  STACKTOP = i3;
  return 1;
 } else {
  i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 127](i1) | 0) == 0;
  i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 148 >> 2] | 0;
  i14 = i2 + 16 | 0;
  if (i12) {
   FUNCTION_TABLE_viii[i5 & 15](i6, i1, i14);
   i15 = HEAP32[i6 >> 2] | 0;
  } else {
   FUNCTION_TABLE_viii[i5 & 15](i7, i1, i14);
   i15 = HEAP32[i7 + 4 >> 2] | 0;
  }
  HEAP32[i1 + 92 >> 2] = i15;
  i10 = i14;
 }
 i14 = i1 + 52 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i7 = i1 + 36 | 0;
 i5 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i15 >> 2] | 0) + 16 >> 2] & 1](i15, i7, i10) | 0;
 i10 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i5 | 0) == (i10 | 0)) {
  STACKTOP = i3;
  return 1;
 }
 i15 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   if ((i5 | 0) == (i15 | 0)) {
    i6 = HEAP32[i14 >> 2] | 0;
    __ZN7WebCore9Scrollbar18startTimerIfNeededEd(i1, +FUNCTION_TABLE_di[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 1](i6));
    i6 = HEAP32[i14 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 15](i6, i7, HEAP32[i8 >> 2] | 0);
    break;
   }
   if ((i10 | 0) != (i15 | 0)) {
    break;
   }
   if (+HEAPF64[i1 + 120 >> 3] != +0) {
    __ZN7WebCore9TimerBase4stopEv(i1 + 112 | 0);
    i16 = HEAP32[i8 >> 2] | 0;
   } else {
    i16 = i10;
   }
   i6 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 15](i6, i7, i16);
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 212 >> 2] & 63](i1, i5);
 STACKTOP = i3;
 return 1;
}
function __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i4;
 i9 = i2;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 127](i1) | 0;
 i8 = (i9 | 0) != 0;
 do {
  if (i8) {
   i10 = i2 + 8 | 0;
   if ((HEAP32[i10 >> 2] | 0) < 1) {
    i11 = 0;
    break;
   }
   i12 = i2 + 12 | 0;
   if ((HEAP32[i12 >> 2] | 0) < 1) {
    i11 = 0;
    break;
   }
   i13 = i9;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 212 >> 2] & 63](i5, i9);
   if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
    i11 = 0;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
    i11 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 212 >> 2] & 63](i7, i9);
   __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_7IntRectE(i6, i9 | 0, i7);
   if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i2, i6) | 0)) {
    i11 = 0;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 127](i1) | 0) == 0) {
    i13 = HEAP32[i10 >> 2] | 0;
    i10 = i13 + (HEAP32[i2 >> 2] | 0) | 0;
    i14 = HEAP32[i6 >> 2] | 0;
    i15 = i10 - i14 | 0;
    if ((i15 | 0) <= 0) {
     i11 = 0;
     break;
    }
    if (((HEAP32[i6 + 8 >> 2] | 0) + i14 | 0) < (i10 | 0)) {
     i11 = 0;
     break;
    }
    HEAP32[i4 + 8 >> 2] = i13 - i15;
    i11 = 1;
    break;
   } else {
    i15 = HEAP32[i12 >> 2] | 0;
    i12 = i15 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
    i13 = HEAP32[i6 + 4 >> 2] | 0;
    i10 = i12 - i13 | 0;
    if ((i10 | 0) <= 0) {
     i11 = 0;
     break;
    }
    if (((HEAP32[i6 + 12 >> 2] | 0) + i13 | 0) < (i12 | 0)) {
     i11 = 0;
     break;
    }
    HEAP32[i4 + 12 >> 2] = i15 - i10;
    i11 = 1;
    break;
   }
  } else {
   i11 = 0;
  }
 } while (0);
 i6 = i1 + 168 | 0;
 if ((i11 & 1 | 0) == (HEAP8[i6] & 1 | 0)) {
  i16 = i1 | 0;
  __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i16, i4);
  STACKTOP = i3;
  return;
 }
 HEAP8[i6] = i11 & 1;
 if (!i8) {
  i16 = i1 | 0;
  __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i16, i4);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(i9, i11 ? 1 : -1);
 i16 = i1 | 0;
 __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i16, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9Scrollbar9moveThumbEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 40 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i2 - (HEAP32[i1 + 92 >> 2] | 0) | 0;
 i9 = i1 + 100 | 0;
 i10 = (HEAP8[i9] & 1) != 0;
 if (i3) {
  if (i10) {
   i11 = i2 - (HEAP32[i1 + 104 >> 2] | 0) | 0;
  } else {
   i11 = i8;
  }
  HEAP8[i9] = 1;
  __ZNK7WebCore14ScrollAnimator15currentPositionEv(i5, __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(i7) | 0);
  i7 = i1 + 44 | 0;
  i3 = HEAP32[i7 >> 2] | 0;
  if ((i3 | 0) == 0) {
   d12 = +HEAPF32[i5 >> 2];
  } else {
   d12 = +HEAPF32[i5 + 4 >> 2];
  }
  i5 = ~~(+(i11 | 0) + d12);
  do {
   if ((i11 | 0) > 0) {
    i13 = i5 + i11 | 0;
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 127](i1) | 0;
    i15 = (i14 | 0) < (i13 | 0) ? i14 : i13;
    i16 = HEAP32[i7 >> 2] | 0;
   } else {
    if ((i11 | 0) >= 0) {
     i15 = i5;
     i16 = i3;
     break;
    }
    i13 = i5 + i11 | 0;
    i15 = (i13 | 0) < 0 ? 0 : i13;
    i16 = i3;
   }
  } while (0);
  __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationENS_20ScrollbarOrientationEf(HEAP32[i6 >> 2] | 0, i16, +(i15 | 0));
  HEAP32[i1 + 104 >> 2] = i2;
  STACKTOP = i4;
  return;
 } else {
  if (i10) {
   i10 = i2 - (HEAP32[i1 + 104 >> 2] | 0) | 0;
   HEAP8[i9] = 0;
   i17 = i10;
  } else {
   i17 = i8;
  }
  i8 = i1 + 52 | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  i9 = i1 + 36 | 0;
  i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 80 >> 2] & 1](i10, i9) | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  i15 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 1](i10, i9) | 0;
  i10 = HEAP32[i8 >> 2] | 0;
  i8 = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 92 >> 2] & 1](i10, i9) | 0) - i15 | 0;
  do {
   if ((i17 | 0) > 0) {
    i15 = i8 - i2 | 0;
    i18 = (i17 | 0) < (i15 | 0) ? i17 : i15;
   } else {
    if ((i17 | 0) < 0) {
     i15 = -i2 | 0;
     i18 = (i17 | 0) > (i15 | 0) ? i17 : i15;
     break;
    } else {
     STACKTOP = i4;
     return;
    }
   }
  } while (0);
  if ((i18 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  d12 = +(i18 + i2 | 0) * +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 127](i1) | 0) / +(i8 | 0);
  __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationENS_20ScrollbarOrientationEf(HEAP32[i6 >> 2] | 0, HEAP32[i1 + 44 >> 2] | 0, d12);
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore9Scrollbar9mouseDownERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i2 + 32 >> 2] | 0) == 2) {
  STACKTOP = i3;
  return 1;
 }
 i6 = i1;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 216 >> 2] | 0;
 i8 = i1 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i1 + 36 | 0;
 i11 = i2 + 16 | 0;
 i12 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] & 1](i9, i10, i11) | 0;
 FUNCTION_TABLE_vii[i7 & 63](i1, i12);
 i12 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 156 >> 2] & 127](i1) | 0) == 0;
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 148 >> 2] | 0;
 if (i12) {
  FUNCTION_TABLE_viii[i7 & 15](i4, i1, i11);
  i13 = HEAP32[i4 >> 2] | 0;
 } else {
  FUNCTION_TABLE_viii[i7 & 15](i5, i1, i11);
  i13 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i1 + 88 | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i11 | 0) == 4 | (i11 | 0) == 16) {
   i7 = HEAP32[i8 >> 2] | 0;
   if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 68 >> 2] & 1](i7, i10, i2) | 0)) {
    i14 = HEAP32[i5 >> 2] | 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 212 >> 2] & 63](i1, 8);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 216 >> 2] & 63](i1, 8);
   HEAPF32[i1 + 68 >> 2] = +HEAPF32[i1 + 64 >> 2];
   i7 = HEAP32[i8 >> 2] | 0;
   i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 84 >> 2] & 1](i7, i10) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   i12 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] & 1](i7, i10) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i1 + 92 >> 2] = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 80 >> 2] & 1](i7, i10) | 0) + i12 + ((i4 | 0) / 2 & -1);
   __ZN7WebCore9Scrollbar9moveThumbEib(i1, i13, 0);
   STACKTOP = i3;
   return 1;
  } else {
   i14 = i11;
  }
 } while (0);
 if ((i14 | 0) == 8) {
  HEAPF32[i1 + 68 >> 2] = +HEAPF32[i1 + 64 >> 2];
 }
 HEAP32[i1 + 92 >> 2] = i13;
 i13 = HEAP32[i8 >> 2] | 0;
 __ZN7WebCore9Scrollbar21autoscrollPressedPartEd(i1, +FUNCTION_TABLE_di[HEAP32[(HEAP32[i13 >> 2] | 0) + 100 >> 2] & 1](i13));
 STACKTOP = i3;
 return 1;
}
function __ZN7WebCore9Scrollbar21autoscrollPressedPartEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 88 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 4 | (i4 | 0) == 16) {
  i5 = 2;
 } else if ((i4 | 0) == 8 | (i4 | 0) == 0) {
  return;
 }
 do {
  if ((i5 | 0) == 2) {
   i4 = i1 + 52 | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   i7 = i1 + 36 | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 88 >> 2] & 1](i6, i7) | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   i9 = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 1](i6, i7) | 0) + i8 | 0;
   i8 = HEAP32[i4 >> 2] | 0;
   i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] & 1](i8, i7) | 0;
   i8 = HEAP32[i1 + 92 >> 2] | 0;
   if ((i8 | 0) < (i9 | 0)) {
    break;
   }
   if ((i8 | 0) >= (i6 + i9 | 0)) {
    break;
   }
   i9 = HEAP32[i4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 52 >> 2] & 15](i9, i7, HEAP32[i3 >> 2] | 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 212 >> 2] & 63](i1, 8);
   return;
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
   if ((i7 | 0) == 32 | (i7 | 0) == 4 | (i7 | 0) == 1) {
    i10 = 2;
    break;
   }
   i10 = 3;
  } else {
   if ((i7 | 0) == 32 | (i7 | 0) == 4 | (i7 | 0) == 1) {
    i10 = 0;
    break;
   }
   i10 = 1;
  }
 } while (0);
 if ((i7 | 0) == 1 | (i7 | 0) == 32 | (i7 | 0) == 2 | (i7 | 0) == 64) {
  i11 = 0;
 } else {
  i11 = 1;
 }
 if (!(__ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i5, i10, i11, +1) | 0)) {
  return;
 }
 __ZN7WebCore9Scrollbar18startTimerIfNeededEd(i1, d2);
 return;
}
function __ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 __ZN7WebCore6WidgetC2EPv(i8, 0);
 i9 = i1 + 36 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i9 >> 2] = H_BASE + 268;
 i10 = i1 + 40 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = i3;
 HEAP32[i1 + 48 >> 2] = i4;
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = i5;
 _memset(i1 + 56 | 0, 0, 24) | 0;
 HEAPF32[i1 + 80 >> 2] = +1;
 HEAP32[i1 + 104 >> 2] = 0;
 _memset(i1 + 84 | 0, 0, 17) | 0;
 HEAP8[i1 + 108 | 0] = 1;
 i5 = i1 + 112 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 432;
 HEAP32[i1 + 156 >> 2] = i1;
 i5 = i1 + 160 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 12;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP8[i1 + 168 | 0] = 0;
 HEAP8[i1 + 169 | 0] = 0;
 HEAP8[i1 + 170 | 0] = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
  HEAP32[i3 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 108 >> 2] & 63](i11, i9);
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 1](i9, i4) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i3;
 HEAP32[i7 + 12 >> 2] = i3;
 __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i8, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i1 + 64 >> 2] = +(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] & 1](i7, i1) | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9ScrollbarC1EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i1 | 0;
 __ZN7WebCore6WidgetC2EPv(i8, 0);
 i9 = i1 + 36 | 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 HEAP32[i9 >> 2] = H_BASE + 268;
 i10 = i1 + 40 | 0;
 HEAP32[i10 >> 2] = i2;
 HEAP32[i1 + 44 >> 2] = i3;
 HEAP32[i1 + 48 >> 2] = i4;
 i3 = i1 + 52 | 0;
 HEAP32[i3 >> 2] = i5;
 _memset(i1 + 56 | 0, 0, 24) | 0;
 HEAPF32[i1 + 80 >> 2] = +1;
 HEAP32[i1 + 104 >> 2] = 0;
 _memset(i1 + 84 | 0, 0, 17) | 0;
 HEAP8[i1 + 108 | 0] = 1;
 i5 = i1 + 112 | 0;
 __ZN7WebCore9TimerBaseC2Ev(i5);
 HEAP32[i5 >> 2] = H_BASE + 432;
 HEAP32[i1 + 156 >> 2] = i1;
 i5 = i1 + 160 | 0;
 HEAP32[i5 >> 2] = F_BASE_vii + 12;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP8[i1 + 168 | 0] = 0;
 HEAP8[i1 + 169 | 0] = 0;
 HEAP8[i1 + 170 | 0] = 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
  HEAP32[i3 >> 2] = i2;
  i11 = i2;
 } else {
  i11 = i5;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 108 >> 2] & 63](i11, i9);
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 1](i9, i4) | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i3;
 HEAP32[i7 + 12 >> 2] = i3;
 __ZN7WebCore6Widget12setFrameRectERKNS_7IntRectE(i8, i7);
 i7 = HEAP32[i10 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAPF32[i1 + 64 >> 2] = +(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] & 1](i7, i1) | 0);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore9Scrollbar18startTimerIfNeededEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0;
 i3 = i1 + 88 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 8) {
  return;
 } else if ((i4 | 0) == 4 | (i4 | 0) == 16) {
  i5 = 2;
 } else {
  i6 = i4;
 }
 if ((i5 | 0) == 2) {
  i5 = i1 + 52 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i1 + 36 | 0;
  i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 88 >> 2] & 1](i4, i7) | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i9 = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 80 >> 2] & 1](i4, i7) | 0) + i8 | 0;
  i8 = HEAP32[i5 >> 2] | 0;
  i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 84 >> 2] & 1](i8, i7) | 0;
  i8 = HEAP32[i1 + 92 >> 2] | 0;
  do {
   if ((i8 | 0) >= (i9 | 0)) {
    if ((i8 | 0) >= (i4 + i9 | 0)) {
     break;
    }
    i10 = HEAP32[i5 >> 2] | 0;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 52 >> 2] & 15](i10, i7, HEAP32[i3 >> 2] | 0);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 212 >> 2] & 63](i1, 8);
    return;
   }
  } while (0);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 do {
  if ((i6 | 0) == 32 | (i6 | 0) == 4 | (i6 | 0) == 1) {
   if (+HEAPF32[i1 + 64 >> 2] != +0) {
    break;
   }
   return;
  } else {
   d11 = +HEAPF32[i1 + 64 >> 2];
   if (d11 != +(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 176 >> 2] & 127](i1) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore9TimerBase5startEdd(i1 + 112 | 0, d2, +0);
 return;
}
function __ZN7WebCore9Scrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 do {
  if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
   i6 = HEAP32[i1 + 52 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 127](i6) | 0)) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 63](i1);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 63](i5, i1);
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i5, i3) | 0)) {
  STACKTOP = i4;
  return;
 }
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 if (FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 1](i5, i1 + 36 | 0, i2, i3) | 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore6Widget5paintEPNS_15GraphicsContextERKNS_7IntRectE(i1 | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore9Scrollbar14setHoveredPartENS_13ScrollbarPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 84 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 do {
  if ((i4 | 0) == 0 | (i2 | 0) == 0) {
   i5 = HEAP32[i1 + 52 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 127](i5) | 0)) {
    i6 = 5;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 63](i1);
  } else {
   i6 = 5;
  }
 } while (0);
 do {
  if ((i6 | 0) == 5) {
   if ((HEAP32[i1 + 88 >> 2] | 0) != 0) {
    break;
   }
   i4 = i1 + 52 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i7 = i1 + 36 | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] & 15](i5, i7, i2);
   i5 = HEAP32[i4 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] & 15](i5, i7, HEAP32[i3 >> 2] | 0);
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 return;
}
function __ZN7WebCore9Scrollbar15offsetDidChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 d3 = +(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] & 1](i2, i1) | 0);
 i2 = i1 + 64 | 0;
 if (d3 == +HEAPF32[i2 >> 2]) {
  return;
 }
 i4 = i1 + 52 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 36 | 0;
 i7 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 1](i5, i6) | 0;
 HEAPF32[i2 >> 2] = d3;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 236 >> 2] & 63](i1);
 if ((HEAP32[i1 + 88 >> 2] | 0) != 8) {
  return;
 }
 i2 = i1 + 92 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i2 >> 2] = i1 - i7 + (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 80 >> 2] & 1](i5, i6) | 0);
 return;
}
function __ZN7WebCore9Scrollbar14setPressedPartENS_13ScrollbarPartE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 88 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i1 + 52 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 52 >> 2] & 15](i5, i1 + 36 | 0, i4);
 }
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 15](i3, i1 + 36 | 0, i2);
  return;
 }
 i2 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 15](i3, i1 + 36 | 0, i2);
 return;
}
function __ZN7WebCore9Scrollbar7mouseUpERKNS_18PlatformMouseEventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 216 >> 2] & 63](i1, 0);
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP8[i1 + 100 | 0] = 0;
 if (+HEAPF64[i1 + 120 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i1 + 112 | 0);
 }
 i3 = i1 + 40 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return 1;
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 if ((FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 1](i4, i1 + 36 | 0, i2 + 16 | 0) | 0) != 0) {
  return 1;
 }
 __ZNK7WebCore14ScrollableArea20mouseExitedScrollbarEPNS_9ScrollbarE(HEAP32[i3 >> 2] | 0, i1);
 return 1;
}
function __ZThn36_N7WebCore9Scrollbar10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 - 176 + 140 | 0;
 i1 = i6;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i1);
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1);
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = i6;
 HEAP32[i5 + 12 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 63](i1, i5);
 STACKTOP = i2;
 return;
}
function __ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 - 176 + 140 | 0;
 i1 = i2;
 i3 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 127](i1) | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 127](i1) | 0;
 i3 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 140 >> 2] & 127](i2) | 0) == (i1 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 144 >> 2] & 127](i2) | 0) == (i1 | 0);
 return i4 | 0;
}
function __ZN7WebCore9Scrollbar10invalidateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i6);
 i1 = HEAP32[i4 + 8 >> 2] | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i6);
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = i1;
 HEAP32[i5 + 12 >> 2] = i4;
 FUNCTION_TABLE_vii[i7 & 63](i6, i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] & 127](i1) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 120 >> 2] & 127](i1) | 0;
 i2 = i4;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 140 >> 2] & 127](i4) | 0) == (i1 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 144 >> 2] & 127](i4) | 0) == (i1 | 0);
 return i3 | 0;
}
function __ZN7WebCore9Scrollbar9setParentEPNS_10ScrollViewE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP8[i1 + 168 | 0] & 1) == 0) {
    break;
   }
   i3 = i1;
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 127](i1) | 0) == 0) {
    break;
   }
   __ZN7WebCore10ScrollView36adjustScrollbarsAvoidingResizerCountEi(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 120 >> 2] & 127](i1) | 0, -1);
  }
 } while (0);
 __ZN7WebCore6Widget9setParentEPNS_10ScrollViewE(i1 | 0, i2);
 return;
}
function __ZThn36_N7WebCore9ScrollbarD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 176 + 140 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = i1 - 176 + 176 | 0;
 HEAP32[i3 >> 2] = H_BASE + 268;
 i4 = i1 - 176 + 252 | 0;
 if (+HEAPF64[i1 - 176 + 260 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i4);
 }
 i5 = HEAP32[i1 - 176 + 192 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 112 >> 2] & 63](i5, i3);
 __ZN7WebCore9TimerBaseD2Ev(i4);
 __ZN7WebCore6WidgetD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZThn36_N7WebCore9ScrollbarD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 176 + 140 | 0;
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = i1 - 176 + 176 | 0;
 HEAP32[i3 >> 2] = H_BASE + 268;
 i4 = i1 - 176 + 252 | 0;
 if (+HEAPF64[i1 - 176 + 260 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i4);
 }
 i5 = HEAP32[i1 - 176 + 192 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 112 >> 2] & 63](i5, i3);
 __ZN7WebCore9TimerBaseD2Ev(i4);
 __ZN7WebCore6WidgetD2Ev(i2);
 return;
}
function __ZN7WebCore9ScrollbarD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 36 | 0;
 HEAP32[i2 >> 2] = H_BASE + 268;
 i3 = i1 + 112 | 0;
 if (+HEAPF64[i1 + 120 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i3);
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 112 >> 2] & 63](i4, i2);
 __ZN7WebCore9TimerBaseD2Ev(i3);
 __ZN7WebCore6WidgetD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore9ScrollbarD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 36 | 0;
 HEAP32[i2 >> 2] = H_BASE + 268;
 i3 = i1 + 112 | 0;
 if (+HEAPF64[i1 + 120 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i3);
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 112 >> 2] & 63](i4, i2);
 __ZN7WebCore9TimerBaseD2Ev(i3);
 __ZN7WebCore6WidgetD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore9ScrollbarD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = i1 + 36 | 0;
 HEAP32[i2 >> 2] = H_BASE + 268;
 i3 = i1 + 112 | 0;
 if (+HEAPF64[i1 + 120 >> 3] != +0) {
  __ZN7WebCore9TimerBase4stopEv(i3);
 }
 i4 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 112 >> 2] & 63](i4, i2);
 __ZN7WebCore9TimerBaseD2Ev(i3);
 __ZN7WebCore6WidgetD2Ev(i1 | 0);
 return;
}
function __ZThn36_N7WebCore9Scrollbar10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 - 176 + 140 | 0;
 i4 = i1 - 176 + 248 | 0;
 if ((HEAP8[i4] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i4] = i2 & 1;
 i2 = HEAP32[i1 - 176 + 192 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2, i1 - 176 + 176 | 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 132 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore5TimerINS_9ScrollbarEE5firedEv(i1) {
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
function __ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 456 | 0] | 0) {
  i1 = HEAP32[H_BASE + 464 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 96 >> 2] & 127](i2) | 0;
  HEAP32[H_BASE + 464 >> 2] = i3;
  HEAP8[H_BASE + 456 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore9Scrollbar13setProportionEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 56 | 0;
 i5 = i1 + 60 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
   if ((HEAP32[i5 >> 2] | 0) != (i3 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = i2;
 HEAP32[i5 >> 2] = i3;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 240 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = __ZN3WTF10fastMallocEj(176) | 0;
 __ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE(i5, i2, i3, i4, 0);
 HEAP32[i1 >> 2] = i5;
 return;
}
function __ZN7WebCore9Scrollbar26pressedPartScrollDirectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 44 >> 2] | 0) == 0) {
   if ((i2 | 0) == 32 | (i2 | 0) == 4 | (i2 | 0) == 1) {
    i3 = 2;
    break;
   }
   i3 = 3;
  } else {
   if ((i2 | 0) == 32 | (i2 | 0) == 4 | (i2 | 0) == 1) {
    i3 = 0;
    break;
   }
   i3 = 1;
  }
 } while (0);
 return i3 | 0;
}
function __ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 127](i1) | 0)) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(HEAP32[i1 + 40 >> 2] | 0) | 0;
 i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 104 >> 2] & 1](i3, i1) | 0;
 return i2 | 0;
}
function __ZN7WebCore9Scrollbar21updateThumbProportionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i3 = i1 + 36 | 0;
 i1 = i2;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 4);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 8);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 16);
 return;
}
function __ZN7WebCore9Scrollbar19updateThumbPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i3 = i1 + 36 | 0;
 i1 = i2;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 4);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 8);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 16);
 return;
}
function __ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK7WebCore6Widget25convertFromContainingViewERKNS_8IntPointE(i1, i2 | 0, i3);
  return;
 } else {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 1](i1, i4, i2, i3);
  return;
 }
}
function __ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK7WebCore6Widget25convertFromContainingViewERKNS_7IntRectE(i1, i2 | 0, i3);
  return;
 } else {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 64 >> 2] & 1](i1, i4, i2, i3);
  return;
 }
}
function __ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK7WebCore6Widget23convertToContainingViewERKNS_8IntPointE(i1, i2 | 0, i3);
  return;
 } else {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 68 >> 2] & 1](i1, i4, i2, i3);
  return;
 }
}
function __ZN7WebCore9Scrollbar11updateThumbEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 i3 = i1 + 36 | 0;
 i1 = i2;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 4);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 8);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 52 >> 2] & 15](i2, i3, 16);
 return;
}
function __ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i2 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZNK7WebCore6Widget23convertToContainingViewERKNS_7IntRectE(i1, i2 | 0, i3);
  return;
 } else {
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 1](i1, i4, i2, i3);
  return;
 }
}
function __ZN7WebCore9Scrollbar10setEnabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 108 | 0;
 if ((HEAP8[i3] & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i2 & 1;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2, i1 + 36 | 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 63](i1);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar8locationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 - 176 + 140 | 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZThn36_NK7WebCore9Scrollbar4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 - 176 + 140 | 0);
 i2 = i4 + 8 | 0;
 i4 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9Scrollbar8locationEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 | 0);
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 - 176 + 309 | 0] & 1) != 0) {
  return;
 }
 i3 = HEAP32[i1 - 176 + 180 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 15](i3, i1 - 176 + 140 | 0, i2);
 return;
}
function __ZNK7WebCore9Scrollbar4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i4, i2 | 0);
 i2 = i4 + 8 | 0;
 i4 = i1;
 i1 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 169 | 0] & 1) != 0) {
  return;
 }
 i3 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 15](i3, i1, i2);
 return;
}
function __ZN7WebCore9Scrollbar11mouseExitedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) != 0) {
  __ZNK7WebCore14ScrollableArea20mouseExitedScrollbarEPNS_9ScrollbarE(i2, i1);
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 212 >> 2] & 63](i1, 0);
 return 1;
}
function __ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 - 176 + 180 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZN7WebCore9Scrollbar20autoscrollTimerFiredEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 __ZN7WebCore9Scrollbar21autoscrollPressedPartEd(i1, +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 104 >> 2] & 1](i2));
 return;
}
function __ZNK7WebCore9Scrollbar14isWindowActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 127](i2) | 0;
 return i3 | 0;
}
function __ZThn36_NK7WebCore9Scrollbar6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZN7WebCore9Scrollbar28pressedPartScrollGranularityEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i2 | 0) == 1 | (i2 | 0) == 32 | (i2 | 0) == 2 | (i2 | 0) == 64) {
  i3 = 0;
 } else {
  i3 = 1;
 }
 return i3 | 0;
}
function __ZThn36_NK7WebCore9Scrollbar5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 - 176 + 180 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 8 >> 2] | 0) >>> 6 & 3;
 return i3 | 0;
}
function __ZThn36_NK7WebCore9Scrollbar1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 4 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 - 176 + 140 | 0);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i1, i2 - 176 + 140 | 0, i3);
 return;
}
function __ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 8 >> 2] | 0) >>> 6 & 3;
 return i3 | 0;
}
function __ZNK7WebCore9Scrollbar6heightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 12 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar5widthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 8 >> 2] | 0;
}
function __ZN7WebCore9Scrollbar12mouseEnteredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZNK7WebCore14ScrollableArea21mouseEnteredScrollbarEPNS_9ScrollbarE(i2, i1);
 return;
}
function __ZNK7WebCore9Scrollbar1yEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 + 4 >> 2] | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore9Scrollbar1xEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i3, i1 | 0);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore6Widget27convertFromContainingWindowERKNS_8IntPointE(i1, i2 | 0, i3);
 return;
}
function __ZN7WebCore9Scrollbar8setStepsEiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 + 72 >> 2] = i2;
 HEAP32[i1 + 76 >> 2] = i3;
 HEAPF32[i1 + 80 >> 2] = +1 / +(i4 | 0);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar18isOverlayScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 - 176 + 192 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 127](i2) | 0;
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
function __ZNK7WebCore9Scrollbar18isOverlayScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 127](i2) | 0;
}
function __ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE(i1 - 176 + 140 | 0, i2);
 return;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore9Scrollbar17stopTimerIfNeededEv(i1) {
 i1 = i1 | 0;
 if (+HEAPF64[i1 + 120 >> 3] == +0) {
  return;
 }
 __ZN7WebCore9TimerBase4stopEv(i1 + 112 | 0);
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZThn36_NK7WebCore9Scrollbar9frameRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i1, i2 - 176 + 140 | 0);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar7maximumEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 - 176 + 200 >> 2] | 0) - (HEAP32[i1 - 176 + 196 >> 2] | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 - 176 + 310 | 0] = i2 & 1;
 return;
}
function __ZN7WebCore5TimerINS_9ScrollbarEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function vii___ZN7WebCore6Widget8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore6Widget8setFocusEb(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9Scrollbar9frameRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore6Widget9frameRectEv(i1, i2 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9Scrollbar7maximumEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 60 >> 2] | 0) - (HEAP32[i1 + 56 >> 2] | 0) | 0;
}
function __ZN7WebCore9Scrollbar16setIsAlphaLockedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 170 | 0] = i2 & 1;
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
function __ZThn36_NK7WebCore9Scrollbar4rootEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore6Widget4rootEv(i1 - 176 + 140 | 0) | 0;
}
function __ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 176 + 310 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore6Widget16setParentVisibleEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 17 | 0] = i2 & 1;
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
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZThn36_NK7WebCore9Scrollbar5valueEv(i1) {
 i1 = i1 | 0;
 return _round(+(+HEAPF32[i1 - 176 + 204 >> 2])) | 0;
}
function __ZThn36_NK7WebCore9Scrollbar7enabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 - 176 + 248 | 0] & 1) != 0 | 0;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function __ZThn36_NK7WebCore9Scrollbar11visibleSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 196 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11pressedPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 228 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11orientationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 184 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11hoveredPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 224 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar11controlSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 188 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar10currentPosEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 - 176 + 204 >> 2]);
}
function __ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9Scrollbar13isAlphaLockedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 170 | 0] & 1) != 0 | 0;
}
function __ZThn36_NK7WebCore9Scrollbar9totalSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 200 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar8pageStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 216 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar8lineStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 212 >> 2] | 0;
}
function __ZN7WebCore5TimerINS_9ScrollbarEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZThn36_NK7WebCore9Scrollbar6parentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 - 176 + 148 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar4rootEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore6Widget4rootEv(i1 | 0) | 0;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
 return 0;
}
function __ZNK7WebCore9Scrollbar5valueEv(i1) {
 i1 = i1 | 0;
 return _round(+(+HEAPF32[i1 + 64 >> 2])) | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 127](i2 | 0) | 0;
}
function __ZNK7WebCore9Scrollbar7enabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 108 | 0] & 1) != 0 | 0;
}
function vi___ZN7WebCore6Widget4showEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6Widget4showEv(i1 | 0);
}
function vi___ZN7WebCore6Widget4hideEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore6Widget4hideEv(i1 | 0);
}
function __ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 7](i2 | 0);
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
}
function __ZNK7WebCore9Scrollbar11visibleSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 56 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11pressedPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11orientationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 44 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11hoveredPartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 84 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar11controlSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 48 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar10currentPosEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 64 >> 2]);
}
function __ZN7WebCore6Widget11handleEventEPNS_5EventE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b12(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(12);
}
function __ZNK7WebCore9Scrollbar9totalSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 60 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9Scrollbar8pageStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 76 >> 2] | 0;
}
function __ZNK7WebCore9Scrollbar8lineStepEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 72 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZNK7WebCore9Scrollbar6parentEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZThn36_NK7WebCore9Scrollbar17isCustomScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore6Widget25transformsAffectFrameRectEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9Scrollbar17isCustomScrollbarEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn36_N7WebCore9Scrollbar12styleChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore6Widget16isPluginViewBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
}
function __ZNK7WebCore9Scrollbar11isScrollbarEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore6Widget17frameRectsChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore6Widget12isScrollViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore6Widget12isPluginViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9Scrollbar12styleChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore6Widget15clipRectChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore6Widget11isFrameViewEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
 return +0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore6Widget12isPluginViewEv,b0,__ZThn36_NK7WebCore9Scrollbar9totalSizeEv,b0,__ZNK7WebCore9Scrollbar6heightEv,b0,__ZNK7WebCore9Scrollbar8lineStepEv,b0,__ZThn36_NK7WebCore9Scrollbar6heightEv,b0,__ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv,b0,__ZNK7WebCore9Scrollbar13isAlphaLockedEv,b0,__ZNK7WebCore9Scrollbar11pressedPartEv,b0,__ZThn36_NK7WebCore9Scrollbar4rootEv,b0,__ZNK7WebCore9Scrollbar5valueEv,b0,__ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv,b0,__ZThn36_NK7WebCore9Scrollbar8lineStepEv,b0,__ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv,b0,__ZThn36_NK7WebCore9Scrollbar1xEv
  ,b0,__ZThn36_NK7WebCore9Scrollbar11visibleSizeEv,b0,__ZThn36_NK7WebCore9Scrollbar6parentEv,b0,__ZNK7WebCore9Scrollbar4rootEv,b0,__ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv,b0,__ZNK7WebCore6Widget16isPluginViewBaseEv,b0,__ZNK7WebCore9Scrollbar6parentEv,b0,__ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv,b0,__ZNK7WebCore9Scrollbar8pageStepEv,b0,__ZThn36_NK7WebCore9Scrollbar11pressedPartEv,b0,__ZNK7WebCore9Scrollbar17isCustomScrollbarEv,b0,__ZNK7WebCore9Scrollbar5widthEv,b0,__ZThn36_NK7WebCore9Scrollbar17isCustomScrollbarEv,b0,__ZThn36_NK7WebCore9Scrollbar11hoveredPartEv,b0,__ZN7WebCore6Widget25transformsAffectFrameRectEv,b0,__ZThn36_NK7WebCore9Scrollbar1yEv
  ,b0,__ZNK7WebCore6Widget11isFrameViewEv,b0,__ZNK7WebCore9Scrollbar11orientationEv,b0,__ZThn36_NK7WebCore9Scrollbar7enabledEv,b0,__ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv,b0,__ZNK7WebCore9Scrollbar9totalSizeEv,b0,__ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv,b0,__ZThn36_NK7WebCore9Scrollbar18isOverlayScrollbarEv,b0,__ZNK7WebCore9Scrollbar18isOverlayScrollbarEv,b0,__ZNK7WebCore9Scrollbar7enabledEv,b0,__ZThn36_NK7WebCore9Scrollbar11controlSizeEv,b0,__ZNK7WebCore9Scrollbar1xEv,b0,__ZNK7WebCore9Scrollbar11visibleSizeEv,b0,__ZNK7WebCore9Scrollbar11isScrollbarEv,b0,__ZThn36_NK7WebCore9Scrollbar11orientationEv,b0,__ZThn36_NK7WebCore9Scrollbar5valueEv
  ,b0,__ZThn36_NK7WebCore9Scrollbar7maximumEv,b0,__ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv,b0,__ZNK7WebCore9Scrollbar11hoveredPartEv,b0,__ZNK7WebCore6Widget12isScrollViewEv,b0,__ZNK7WebCore9Scrollbar11controlSizeEv,b0,__ZNK7WebCore9Scrollbar7maximumEv,b0,__ZNK7WebCore9Scrollbar1yEv,b0,__ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv,b0,__ZThn36_NK7WebCore9Scrollbar8pageStepEv,b0,__ZThn36_NK7WebCore9Scrollbar5widthEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE,b1];
  var FUNCTION_TABLE_di = [b2,b2];
  var FUNCTION_TABLE_did = [b3,b3,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b3];
  var FUNCTION_TABLE_vi = [b4,b4,__ZN7WebCore9ScrollbarD0Ev,b4,__ZThn36_N7WebCore9ScrollbarD1Ev,b4,__ZN7WebCore9Scrollbar19updateThumbPositionEv,b4,__ZN7WebCore5TimerINS_9ScrollbarEED0Ev,b4,__ZThn36_N7WebCore9ScrollbarD0Ev,b4,__ZThn36_N7WebCore9Scrollbar10invalidateEv,b4,vi___ZN7WebCore6Widget4hideEv__wrapper,b4,__ZThn36_N7WebCore9Scrollbar12styleChangedEv,b4,__ZN7WebCore5TimerINS_9ScrollbarEE5firedEv,b4,__ZN7WebCore5TimerINS_9ScrollbarEED1Ev,b4,__ZN7WebCore9Scrollbar21updateThumbProportionEv,b4,__ZN7WebCore9ScrollbarD2Ev,b4,__ZN7WebCore9Scrollbar10invalidateEv,b4,__ZN7WebCore6Widget15clipRectChangedEv
  ,b4,vi___ZN7WebCore6Widget4showEv__wrapper,b4,__ZN7WebCore9Scrollbar12styleChangedEv,b4,__ZN7WebCore6Widget17frameRectsChangedEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_vii = [b5,b5,__ZThn36_NK7WebCore9Scrollbar4sizeEv,b5,__ZN7WebCore6Widget16setParentVisibleEb,b5,__ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE,b5,__ZThn36_NK7WebCore9Scrollbar8locationEv,b5,__ZN7WebCore6Widget11handleEventEPNS_5EventE,b5,__ZN7WebCore9Scrollbar20autoscrollTimerFiredEPNS_5TimerIS0_EE,b5,__ZN7WebCore9Scrollbar16setIsAlphaLockedEb,b5,__ZNK7WebCore9Scrollbar4sizeEv,b5,__ZNK7WebCore9Scrollbar9frameRectEv,b5,__ZThn36_NK7WebCore9Scrollbar9frameRectEv,b5,__ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE,b5,__ZN7WebCore9Scrollbar14setHoveredPartENS_13ScrollbarPartE,b5,__ZNK7WebCore9Scrollbar8locationEv,b5,__ZN7WebCore9Scrollbar9setParentEPNS_10ScrollViewE
  ,b5,vii___ZN7WebCore6Widget8setFocusEb__wrapper,b5,__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE,b5,__ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb,b5,__ZN7WebCore9Scrollbar14setPressedPartENS_13ScrollbarPartE,b5,__ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE,b5,__ZThn36_N7WebCore9Scrollbar10setEnabledEb,b5,__ZN7WebCore9Scrollbar10setEnabledEb,b5,__ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iiiii = [b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE,b8,__ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE,b8,__ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE,b8,__ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE,b8,__ZN7WebCore9Scrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE,b8,__ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE,b8,__ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE,b8];
  var FUNCTION_TABLE_v = [b9,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZThn36_NK7WebCore9Scrollbar10currentPosEv,b10,__ZNK7WebCore9Scrollbar10currentPosEv,b10,b10,b10];
  var FUNCTION_TABLE_iii = [b11,b11];
  var FUNCTION_TABLE_viiii = [b12,b12];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_di: dynCall_di, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiii: dynCall_iiiii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_di": invoke_di, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiii": invoke_iiiii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZThn36_NK7WebCore9Scrollbar4sizeEv","__ZNK7WebCore6Widget12isPluginViewEv","_strlen","__ZN7WebCore6Widget16setParentVisibleEb","__ZThn36_NK7WebCore9Scrollbar9totalSizeEv","__ZN7WebCore9ScrollbarD0Ev","__ZNK7WebCore9Scrollbar6heightEv","__ZN7WebCore9Scrollbar7mouseUpERKNS_18PlatformMouseEventE","__ZNK7WebCore9Scrollbar8lineStepEv","__ZN7WebCore9Scrollbar26pressedPartScrollDirectionEv","__ZN7WebCore9Scrollbar13setProportionEii","__ZN7WebCore9Scrollbar9moveThumbEib","__ZN7WebCore9Scrollbar15offsetDidChangeEv","__ZN7WebCore9Scrollbar9mouseDownERKNS_18PlatformMouseEventE","__ZThn36_N7WebCore9ScrollbarD1Ev","_memcpy","__ZN7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE","__ZThn36_NK7WebCore9Scrollbar6heightEv","__ZNK7WebCore9Scrollbar22isScrollableAreaActiveEv","__ZN7WebCore9Scrollbar19updateThumbPositionEv","__ZNK7WebCore9Scrollbar13isAlphaLockedEv","__ZNK7WebCore9Scrollbar11pressedPartEv","__ZThn36_NK7WebCore9Scrollbar4rootEv","__ZThn36_NK7WebCore9Scrollbar10currentPosEv","__ZThn36_NK7WebCore9Scrollbar8locationEv","__ZNK7WebCore9Scrollbar5valueEv","__ZN7WebCore9Scrollbar10mouseMovedERKNS_18PlatformMouseEventE","__ZN7WebCore6Widget11handleEventEPNS_5EventE","__ZThn36_NK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv","__ZN7WebCore5TimerINS_9ScrollbarEED0Ev","__ZThn36_NK7WebCore9Scrollbar8lineStepEv","__ZN7WebCore9Scrollbar20autoscrollTimerFiredEPNS_5TimerIS0_EE","__ZN7WebCore9Scrollbar16setIsAlphaLockedEb","__ZN7WebCore5TimerINS_9ScrollbarEE5firedEv","__ZThn36_NK7WebCore9Scrollbar13isAlphaLockedEv","__ZThn36_NK7WebCore9Scrollbar1xEv","__ZNK7WebCore9Scrollbar4sizeEv","__ZThn36_NK7WebCore9Scrollbar11visibleSizeEv","__ZThn36_N7WebCore9Scrollbar10invalidateEv","__ZThn36_NK7WebCore9Scrollbar6parentEv","__ZNK7WebCore9Scrollbar4rootEv","__ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_8IntPointE","__ZN7WebCore9Scrollbar12mouseEnteredEv","__ZThn36_NK7WebCore9Scrollbar21isScrollViewScrollbarEv","__ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv","__ZNK7WebCore6Widget16isPluginViewBaseEv","__ZNK7WebCore9Scrollbar6parentEv","__ZThn36_NK7WebCore9Scrollbar22isScrollableAreaActiveEv","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZThn36_N7WebCore9Scrollbar12styleChangedEv","__ZNK7WebCore9Scrollbar23convertToContainingViewERKNS_7IntRectE","__ZNK7WebCore9Scrollbar8pageStepEv","__ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_7IntRectE","__ZThn36_NK7WebCore9Scrollbar11pressedPartEv","__ZNK7WebCore9Scrollbar17isCustomScrollbarEv","__ZNK7WebCore9Scrollbar5widthEv","__ZThn36_N7WebCore9ScrollbarD0Ev","__ZNK7WebCore9Scrollbar9frameRectEv","__ZN7WebCore9Scrollbar8setStepsEiii","__ZThn36_NK7WebCore9Scrollbar9frameRectEv","__ZThn36_N7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE","__ZN7WebCore9Scrollbar5paintEPNS_15GraphicsContextERKNS_7IntRectE","__ZThn36_NK7WebCore9Scrollbar17isCustomScrollbarEv","__ZThn36_NK7WebCore9Scrollbar11hoveredPartEv","__ZN7WebCore5TimerINS_9ScrollbarEED1Ev","__ZN7WebCore6Widget25transformsAffectFrameRectEv","__ZThn36_NK7WebCore9Scrollbar1yEv","__ZN7WebCore9Scrollbar17stopTimerIfNeededEv","__ZNK7WebCore6Widget11isFrameViewEv","__ZN7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE","__ZN7WebCore9Scrollbar21updateThumbProportionEv","__ZN7WebCore9Scrollbar14setHoveredPartENS_13ScrollbarPartE","__ZNK7WebCore9Scrollbar8locationEv","__ZN7WebCore9Scrollbar28pressedPartScrollGranularityEv","__ZN7WebCore9ScrollbarD2Ev","__ZNK7WebCore9Scrollbar11orientationEv","__ZThn36_NK7WebCore9Scrollbar7enabledEv","__ZN7WebCore9Scrollbar9setParentEPNS_10ScrollViewE","_memset","__ZThn36_NK7WebCore9Scrollbar21scrollbarOverlayStyleEv","__ZN7WebCore6Widget12notifyWidgetENS_18WidgetNotificationE","__ZNK7WebCore9Scrollbar9totalSizeEv","__ZNK7WebCore9Scrollbar21scrollbarOverlayStyleEv","__ZThn36_NK7WebCore9Scrollbar18isOverlayScrollbarEv","__ZN7WebCore9Scrollbar27convertFromContainingWindowERKNS_8IntPointE","__ZNK7WebCore9Scrollbar18isOverlayScrollbarEv","__ZNK7WebCore9Scrollbar7enabledEv","__ZN7WebCore9Scrollbar11mouseExitedEv","__ZThn36_NK7WebCore9Scrollbar11controlSizeEv","__ZN7WebCore9Scrollbar10invalidateEv","__ZNK7WebCore9Scrollbar1xEv","__ZNK7WebCore9Scrollbar11visibleSizeEv","__ZN7WebCore6Widget15clipRectChangedEv","__ZNK7WebCore9Scrollbar11isScrollbarEv","__ZThn36_NK7WebCore9Scrollbar11orientationEv","__ZThn36_N7WebCore9Scrollbar16setIsAlphaLockedEb","__ZNK7WebCore9Scrollbar11hoveredPartEv","__ZN7WebCore9Scrollbar14setPressedPartENS_13ScrollbarPartE","__ZThn36_NK7WebCore9Scrollbar5valueEv","__ZN7WebCore9Scrollbar18startTimerIfNeededEd","__ZNK7WebCore9Scrollbar14isWindowActiveEv","__ZThn36_NK7WebCore9Scrollbar7maximumEv","__ZNK7WebCore9Scrollbar21isScrollViewScrollbarEv","__ZN7WebCore9Scrollbar21autoscrollPressedPartEd","__ZNK7WebCore9Scrollbar31supportsUpdateOnSecondaryThreadEv","__ZN7WebCore9ScrollbarC2EPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeEPNS_14ScrollbarThemeE","__ZN7WebCore9Scrollbar11updateThumbEv","__ZThn36_N7WebCore9Scrollbar12setFrameRectERKNS_7IntRectE","__ZThn36_N7WebCore9Scrollbar10setEnabledEb","__ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE","__ZNK7WebCore9Scrollbar25convertFromContainingViewERKNS_8IntPointE","__ZNK7WebCore9Scrollbar10currentPosEv","__ZNK7WebCore9Scrollbar11controlSizeEv","__ZN7WebCore9Scrollbar10setEnabledEb","__ZNK7WebCore9Scrollbar7maximumEv","__ZN7WebCore9Scrollbar12styleChangedEv","__ZThn36_N7WebCore9Scrollbar14invalidateRectERKNS_7IntRectE","__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv","__ZN7WebCore6Widget17frameRectsChangedEv","__ZNK7WebCore9Scrollbar1yEv","__ZNK7WebCore6Widget12isScrollViewEv","__ZThn36_NK7WebCore9Scrollbar8pageStepEv","__ZThn36_NK7WebCore9Scrollbar5widthEv"]

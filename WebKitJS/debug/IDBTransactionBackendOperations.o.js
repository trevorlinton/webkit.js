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
H_BASE = parentModule["_malloc"](984 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 984;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore31DeleteObjectStoreAbortOperationE=(H_BASE+448)|0;
  var __ZTVN7WebCore25DeleteIndexAbortOperationE=(H_BASE+576)|0;
  var __ZTVN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationE=(H_BASE+832)|0;
  var __ZTVN7WebCore26CreateObjectStoreOperationE=(H_BASE+544)|0;
  var __ZTVN7WebCore18IDBDatabaseBackend22VersionChangeOperationE=(H_BASE+864)|0;
  var __ZTVN7WebCore20DeleteRangeOperationE=(H_BASE+704)|0;
  var __ZTVN7WebCore20DeleteIndexOperationE=(H_BASE+736)|0;
  var __ZTVN7WebCore26DeleteObjectStoreOperationE=(H_BASE+512)|0;
  var __ZTVN7WebCore25ClearObjectStoreOperationE=(H_BASE+640)|0;
  var __ZTVN7WebCore14CountOperationE=(H_BASE+896)|0;
  var __ZTVN7WebCore25CreateIndexAbortOperationE=(H_BASE+608)|0;
  var __ZTVN7WebCore24SetIndexesReadyOperationE=(H_BASE+672)|0;
  var __ZTVN7WebCore31CreateObjectStoreAbortOperationE=(H_BASE+480)|0;
  var __ZTVN7WebCore20CreateIndexOperationE=(H_BASE+768)|0;
  var __ZTVN7WebCore19OpenCursorOperationE=(H_BASE+800)|0;
  var __ZTVN7WebCore12PutOperationE=(H_BASE+928)|0;
  var __ZTVN7WebCore12GetOperationE=(H_BASE+960)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 166;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vi + 128;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 148;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_vi + 164;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 132;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vi + 146;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_vi + 158;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 140;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vi + 130;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vi + 142;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 114;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vi + 102;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 154;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 134;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 122;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vi + 136;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 120;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vi + 138;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vi + 124;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 144;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 150;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 116;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 156;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vi + 152;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vi + 162;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vi + 126;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vi + 160;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vii + 16;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSE__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 do {
  if (i8) {
   i9 = i7 + 8 | 0;
   i10 = i7 + 16 | 0;
   i11 = HEAP32[i10 + 4 >> 2] | 0;
   i12 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 40 >> 2] | 0) + 24 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = i11;
   i11 = HEAP32[i9 >> 2] | 0;
   i12 = HEAP32[i11 + 40 >> 2] | 0;
   i13 = i7 + 24 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = HEAP32[i7 + 28 >> 2] | 0;
   i16 = i11 + 184 | 0;
   i11 = HEAP32[i16 >> 2] | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   i16 = HEAP32[i10 >> 2] | 0;
   i18 = HEAP32[i10 + 4 >> 2] | 0;
   i10 = __Znwj(24) | 0;
   HEAP32[i10 >> 2] = i14;
   if ((i14 | 0) != 0) {
    i19 = i14 + 4 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   HEAP32[i10 + 4 >> 2] = i15;
   if ((i15 | 0) != 0) {
    i19 = i15 + 4 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
   }
   i19 = i10 + 8 | 0;
   HEAP32[i19 >> 2] = i16;
   HEAP32[i19 + 4 >> 2] = i18;
   i18 = i10 + 16 | 0;
   HEAP32[i18 >> 2] = i11;
   HEAP32[i18 + 4 >> 2] = i17;
   i17 = i12 + 124 | 0;
   i12 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = i10;
   if ((i12 | 0) != 0) {
    i10 = HEAP32[i12 + 4 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i17 = i10 + 4 | 0;
      i18 = i17 | 0;
      i11 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
      if ((i11 | 0) != 0) {
       HEAP32[i18 >> 2] = i11;
       break;
      }
      i11 = i17 - 4 | 0;
      if ((i11 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
     }
    } while (0);
    i10 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 4 | 0;
      i17 = i11 | 0;
      i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
      if ((i18 | 0) != 0) {
       HEAP32[i17 >> 2] = i18;
       break;
      }
      i18 = i11 - 4 | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 255](i18);
     }
    } while (0);
    __ZdlPv(i12);
   }
   i10 = HEAP32[i13 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i10 >> 2] | 0) + 52 >> 2] | 0;
   i11 = i1 + 8 | 0;
   i17 = HEAP32[i11 >> 2] | 0;
   i19 = HEAP32[i11 + 4 >> 2] | 0;
   i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 40 >> 2] | 0;
   i16 = i6 | 0;
   HEAP32[i16 >> 2] = i11;
   if ((i11 | 0) != 0) {
    i15 = i11 | 0;
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   }
   FUNCTION_TABLE_viiiii[i18 & 1](i10, i17, i19, i6, (HEAP32[(HEAP32[i9 >> 2] | 0) + 40 >> 2] | 0) + 8 | 0);
   i19 = HEAP32[i16 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i16 = i19 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) == 0) {
    __ZN7WebCore18IDBDatabaseBackendD1Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i16 >> 2] = i17;
    break;
   }
  } else {
   i17 = HEAP32[i7 + 24 >> 2] | 0;
   i16 = HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] | 0;
   i19 = i4 | 0;
   HEAP32[i19 >> 2] = i2;
   i10 = i2 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   FUNCTION_TABLE_vii[i16 & 127](i17, i4);
   i17 = HEAP32[i19 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i19 = HEAP32[i7 + 8 >> 2] | 0;
    i16 = i5 | 0;
    HEAP32[i16 >> 2] = i2;
    i20 = i19;
    i21 = i16;
   } else {
    i16 = i17 | 0;
    i19 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) == 0) {
     i18 = HEAP32[i17 + 8 >> 2] | 0;
     do {
      if ((i18 | 0) != 0) {
       i15 = i18 | 0;
       i11 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
       if ((i11 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i18);
        break;
       } else {
        HEAP32[i15 >> 2] = i11;
        break;
       }
      }
     } while (0);
     __ZN3WTF8fastFreeEPv(i17);
    } else {
     HEAP32[i16 >> 2] = i19;
    }
    i18 = HEAP32[i7 + 8 >> 2] | 0;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = i2;
    i20 = i18;
    i21 = i9;
   }
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i20, i5);
   i9 = HEAP32[i21 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i18 = i9 | 0;
   i13 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i18 >> 2] = i13;
    break;
   }
   i13 = HEAP32[i9 + 8 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i18 = i13 | 0;
     i12 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
     if ((i12 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i18 >> 2] = i12;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i21 = HEAP32[i1 + 40 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 24 >> 2] & 255](i21);
 if (i8) {
  STACKTOP = i3;
  return;
 }
 i8 = i2 | 0;
 i21 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
 if ((i21 | 0) != 0) {
  HEAP32[i8 >> 2] = i21;
  STACKTOP = i3;
  return;
 }
 i21 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i21 | 0) != 0) {
   i8 = i21 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i8 >> 2] = i1;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 64 | 0;
 i7 = i1 + 8 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 40 >> 2] | 0) + 24 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = (i1 | 0) != 0;
 if (i8) {
  i11 = i1 + 4 | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = i5 | 0;
  HEAP32[i13 >> 2] = i9;
  HEAP32[i13 + 4 >> 2] = i10;
  HEAP32[i5 + 8 >> 2] = i1;
  HEAP32[i11 >> 2] = i12 + 2;
 } else {
  i12 = i5 | 0;
  HEAP32[i12 >> 2] = i9;
  HEAP32[i12 + 4 >> 2] = i10;
  HEAP32[i5 + 8 >> 2] = 0;
 }
 i10 = i5 + 12 | 0;
 HEAP32[i10 >> 2] = i1;
 i12 = i5 + 16 | 0;
 i9 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i5 + 32 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i2 | 0)) {
    i11 = i12;
    HEAP32[i5 + 32 >> 2] = i11;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i11);
    break;
   } else {
    HEAP32[i5 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 i9 = i4 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i2 = __Znwj(48) | 0;
 do {
  if ((i2 | 0) == 0) {
   i14 = i5 + 32 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 296;
   i11 = i2 + 8 | 0;
   i13 = i5 | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
   HEAP32[i11 + 4 >> 2] = i15;
   i15 = i5 + 8 | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i2 + 16 >> 2] = i11;
   HEAP32[i2 + 20 >> 2] = HEAP32[i10 >> 2];
   i11 = i5 + 32 | 0;
   i15 = HEAP32[i11 >> 2] | 0;
   if ((i15 | 0) == 0) {
    HEAP32[i2 + 40 >> 2] = 0;
    i14 = i11;
    break;
   }
   i13 = i12;
   if ((i15 | 0) == (i13 | 0)) {
    i16 = i2 + 24 | 0;
    HEAP32[i2 + 40 >> 2] = i16;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 12 >> 2] & 127](i13, i16);
    i14 = i11;
    break;
   } else {
    HEAP32[i2 + 40 >> 2] = i15;
    HEAP32[i11 >> 2] = 0;
    i14 = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i9 >> 2] = i2;
 i2 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i2 | 0) == (i12 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i12 = i5 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i12 >> 2] = i14;
    break;
   }
   i14 = i5 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 255](i14);
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i14 = HEAP32[(HEAP32[i7 >> 2] | 0) + 88 >> 2] | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i14 & 1](i7, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i8) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 4 | 0;
 i1 = i8 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i8 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26DeleteObjectStoreOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 16;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 84 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore26CreateObjectStoreOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 56;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 48 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore25ClearObjectStoreOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 96;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 80 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20DeleteRangeOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 136;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 76 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20DeleteIndexOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 176;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 56 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CreateIndexOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 216;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 52 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore19OpenCursorOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 256;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 68 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14CountOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 336;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 72 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12PutOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 376;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 64 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12GetOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 56 | 0;
 i7 = (i1 | 0) != 0;
 if (i7) {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i5 >> 2] = i1;
  HEAP32[i8 >> 2] = i9 + 2;
 } else {
  HEAP32[i5 >> 2] = 0;
 }
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAP32[i5 + 24 >> 2] = 0;
  } else {
   if ((i8 | 0) == (i2 | 0)) {
    i10 = i9;
    HEAP32[i5 + 24 >> 2] = i10;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 12 >> 2] & 127](i8, i10);
    break;
   } else {
    HEAP32[i5 + 24 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8) | 0;
    break;
   }
  }
 } while (0);
 i8 = i4 + 16 | 0;
 HEAP32[i8 >> 2] = 0;
 i2 = __Znwj(40) | 0;
 do {
  if ((i2 | 0) == 0) {
   i11 = i5 + 24 | 0;
  } else {
   HEAP32[i2 >> 2] = H_BASE + 416;
   i10 = i5 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = i12;
   i12 = i5 + 24 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 + 32 >> 2] = 0;
    i11 = i12;
    break;
   }
   i13 = i9;
   if ((i10 | 0) == (i13 | 0)) {
    i14 = i2 + 16 | 0;
    HEAP32[i2 + 32 >> 2] = i14;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i13, i14);
    i11 = i12;
    break;
   } else {
    HEAP32[i2 + 32 >> 2] = i10;
    HEAP32[i12 >> 2] = 0;
    i11 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i2;
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 | 0) == (i9 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i9 = i5 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i9 >> 2] = i11;
    break;
   }
   i11 = i5 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 255](i11);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i2 + 40 >> 2] | 0) + 72 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i11 >> 2] | 0) + 60 >> 2] | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i6 + 16 >> 2] = 0;
  } else {
   if ((i9 | 0) == (i4 | 0)) {
    i12 = i6;
    HEAP32[i6 + 16 >> 2] = i12;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 12 >> 2] & 127](i9, i12);
    break;
   } else {
    HEAP32[i6 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9) | 0;
    break;
   }
  }
 } while (0);
 FUNCTION_TABLE_viiii[i5 & 1](i11, i2, i1, i6);
 i2 = HEAP32[i6 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) == (i6 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i2 | 0) == (i4 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 if (!i7) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i1 >> 2] = i2;
  STACKTOP = i3;
  return;
 }
 i2 = i7 - 4 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 255](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12PutOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 HEAP32[i1 >> 2] = H_BASE + 936;
 i2 = i1 + 124 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 116 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 12 & -1) | 0;
  i3 = i5;
  while (1) {
   i5 = i3 + 8 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   i8 = i3 | 0;
   if ((i7 | 0) != 0) {
    i9 = HEAP32[i8 >> 2] | 0;
    i10 = i9 + (i7 << 2) | 0;
    i7 = i9;
    while (1) {
     i9 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i9 | 0) != 0) {
       i11 = i9 | 0;
       i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore6IDBKeyD1Ev(i9);
        __ZN3WTF8fastFreeEPv(i9);
        break;
       } else {
        HEAP32[i11 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i10 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i3 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   i3 = i3 + 12 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 120 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 112 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 104 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 108 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i4);
 }
 i4 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i6 = i2 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i6 >> 2] = i3;
    break;
   }
   i3 = i2 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
  }
 } while (0);
 i4 = HEAP32[i1 + 92 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i1 + 88 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore12SharedBufferD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore12GetOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 968;
 i2 = HEAP32[i1 + 64 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = i1 + 48 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 40 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  i6 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i7 = i3 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i3 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i2 + (i4 * 48 & -1) | 0;
    if (!((HEAP32[i5 >> 2] | 0) == (-1 | 0) & (HEAP32[i5 + 4 >> 2] | 0) == (-1 | 0))) {
     __ZN7WebCore16IDBIndexMetadataD1Ev(i2 + (i4 * 48 & -1) + 8 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i3 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore16IDBIndexMetadataD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 24 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i7 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i3 = i3 + 4 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  return;
 }
}
function __ZN7WebCore24SetIndexesReadyOperation7performENSt3__18functionIFvvEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i6 = i1 + 8 | 0;
  i1 = 0;
  while (1) {
   i7 = (HEAP32[i6 >> 2] | 0) + 160 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - 1;
   i1 = i1 + 1 | 0;
   if (i1 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i5 = HEAP32[i2 + 16 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i4 + 16 >> 2] = 0;
  } else {
   if ((i5 | 0) == (i2 | 0)) {
    i1 = i4;
    HEAP32[i4 + 16 >> 2] = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
    break;
   } else {
    HEAP32[i4 + 16 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
    break;
   }
  }
 } while (0);
 __ZN3WTF16callOnMainThreadENSt3__18functionIFvvEEE(i4);
 i5 = HEAP32[i4 + 16 >> 2] | 0;
 if ((i5 | 0) == (i4 | 0)) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] & 255](i5);
  STACKTOP = i3;
  return;
 }
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 255](i5);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 8 >> 2] | 0;
   i6 = i4 | 0;
   HEAP32[i6 >> 2] = i2;
   __ZN7WebCore21IDBTransactionBackend5abortEN3WTF10PassRefPtrINS_16IDBDatabaseErrorEEE(i5, i4);
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = HEAP32[i5 + 8 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i6 = i7 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 255](i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 872;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 255](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i4 = i2 | 0;
 i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 } else {
  HEAP32[i4 >> 2] = i5;
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = __Znwj(48) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 296;
 i4 = i2 + 8 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i6;
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i2 + 16 >> 2] = i6;
 if ((i6 | 0) != 0) {
  i4 = i6 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 40 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i4 | 0) == (i1 + 24 | 0)) {
  i1 = i2 + 24 | 0;
  HEAP32[i2 + 40 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 127](i4, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 40 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 872;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 255](i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISF_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 296;
 i3 = i2 + 8 | 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 HEAP32[i2 + 16 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i3 = i5 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 HEAP32[i2 + 20 >> 2] = HEAP32[i1 + 20 >> 2];
 i3 = i2 + 24 | 0;
 i5 = i1 + 40 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 + 40 >> 2] = 0;
  return;
 }
 if ((i4 | 0) == (i1 + 24 | 0)) {
  HEAP32[i2 + 40 >> 2] = i3;
  i1 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i3);
  return;
 } else {
  HEAP32[i2 + 40 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4) | 0;
  return;
 }
}
function __ZN7WebCore20DeleteRangeOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 712;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore19OpenCursorOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 808;
 i2 = HEAP32[i1 + 48 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore14CountOperationD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 904;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11IDBKeyRangeD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 24 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 24 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i2 >> 2] = i5;
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  i3 = i1;
  __ZdlPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
 i3 = i1;
 __ZdlPv(i3);
 return;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 16;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 56;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 96;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 136;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 176;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 216;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 256;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 336;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 376;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __Znwj(40) | 0;
 if ((i2 | 0) == 0) {
  i3 = i2;
  return i3 | 0;
 }
 HEAP32[i2 >> 2] = H_BASE + 416;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  i3 = i2;
  return i3 | 0;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  i1 = i2 + 16 | 0;
  HEAP32[i2 + 32 >> 2] = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 127](i5, i1);
  i3 = i2;
  return i3 | 0;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  i3 = i2;
  return i3 | 0;
 }
 return 0;
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 16;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 56;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 96;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 136;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 176;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 216;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 256;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 336;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 376;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function ___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = H_BASE + 416;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 HEAP32[i2 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i2 + 16 | 0;
 i3 = i1 + 32 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i2 + 32 >> 2] = 0;
  return;
 }
 if ((i5 | 0) == (i1 + 16 | 0)) {
  HEAP32[i2 + 32 >> 2] = i4;
  i1 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 127](i1, i4);
  return;
 } else {
  HEAP32[i2 + 32 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 31](i5) | 0;
  return;
 }
}
function __ZN7WebCore25ClearObjectStoreOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 648;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
 i5 = i2 | 0;
 i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 } else {
  HEAP32[i5 >> 2] = i3;
  i6 = i1;
  __ZN3WTF8fastFreeEPv(i6);
  return;
 }
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 24 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 16;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 56;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 96;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 136;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 176;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 216;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 256;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 24 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 416;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function ___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) == (i1 + 16 | 0)) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 255](i2);
  } else {
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 255](i3);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 840;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
}
function __ZN7WebCore11IDBKeyRangeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore6IDBKeyD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = i1 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 __ZN3JSC17weakClearSlowCaseERPNS_8WeakImplE(i2);
 return;
}
function __ZN7WebCore25ClearObjectStoreOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 648;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i4 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 255](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i5;
  return;
 }
}
function __ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 840;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
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
function __ZN7WebCore31DeleteObjectStoreAbortOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 456;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26DeleteObjectStoreOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 520;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26CreateObjectStoreOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 552;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore25DeleteIndexAbortOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 584;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20DeleteIndexOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 744;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20CreateIndexOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 776;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore31CreateObjectStoreAbortOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore25CreateIndexAbortOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 616;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24SetIndexesReadyOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 680;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore31DeleteObjectStoreAbortOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 456;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore26DeleteObjectStoreOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 520;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore26CreateObjectStoreOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 552;
 __ZN7WebCore22IDBObjectStoreMetadataD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25DeleteIndexAbortOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 584;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20DeleteIndexOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 744;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20CreateIndexOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 776;
 __ZN7WebCore16IDBIndexMetadataD1Ev(i1 + 24 | 0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
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
function __ZN7WebCore31CreateObjectStoreAbortOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25CreateIndexAbortOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 616;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore24SetIndexesReadyOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 680;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore21IDBTransactionBackendD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore25CreateIndexAbortOperation7performEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 16 | 0;
 i3 = i1 + 24 | 0;
 __ZN7WebCore18IDBDatabaseBackend11removeIndexExx(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i3 >> 2] | 0, HEAP32[i3 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperation7performEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = (HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0) + 24 | 0;
 HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore25DeleteIndexAbortOperation7performEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore18IDBDatabaseBackend8addIndexExRKNS_16IDBIndexMetadataEx(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0, i1 + 24 | 0, -1, -1);
 return;
}
function __ZN7WebCore31CreateObjectStoreAbortOperation7performEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 16 | 0;
 __ZN7WebCore18IDBDatabaseBackend17removeObjectStoreEx(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0);
 return;
}
function __ZN7WebCore31DeleteObjectStoreAbortOperation7performEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18IDBDatabaseBackend14addObjectStoreERKNS_22IDBObjectStoreMetadataEx(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2] | 0, i1 + 16 | 0, -1, -1);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore20DeleteRangeOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20DeleteRangeOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore19OpenCursorOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19OpenCursorOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore14CountOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14CountOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore12PutOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12PutOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore12GetOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12GetOperationD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore20DeleteRangeOperationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore20DeleteRangeOperationD2Ev(i1);
 return;
}
function __ZN7WebCore19OpenCursorOperationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore19OpenCursorOperationD2Ev(i1);
 return;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore14CountOperationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14CountOperationD2Ev(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZN7WebCore12PutOperationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12PutOperationD2Ev(i1);
 return;
}
function __ZN7WebCore12GetOperationD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12GetOperationD2Ev(i1);
 return;
}
function b6(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(6);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 255](i2 | 0);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore14CountOperationD0Ev,b1,__ZN7WebCore25CreateIndexAbortOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,__ZN7WebCore19OpenCursorOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore20CreateIndexOperationD0Ev,b1,__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperation7performEv,b1,___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore12PutOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_
  ,b1,__ZN7WebCore31DeleteObjectStoreAbortOperation7performEv,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,__ZN7WebCore25DeleteIndexAbortOperationD1Ev,b1,__ZN7WebCore12GetOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore25DeleteIndexAbortOperationD0Ev,b1,__ZN7WebCore20DeleteIndexOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD0Ev,b1,__ZN7WebCore20DeleteIndexOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_
  ,b1,__ZN7WebCore31CreateObjectStoreAbortOperation7performEv,b1,___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,__ZN7WebCore24SetIndexesReadyOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,__ZN7WebCore31CreateObjectStoreAbortOperationD0Ev,b1,__ZN7WebCore12PutOperationD1Ev,b1,__ZN7WebCore26CreateObjectStoreOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore31DeleteObjectStoreAbortOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore26DeleteObjectStoreOperationD1Ev,b1,__ZN7WebCore14CountOperationD1Ev
  ,b1,___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,__ZN7WebCore25ClearObjectStoreOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD1Ev,b1,__ZN7WebCore12GetOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,__ZN7WebCore26CreateObjectStoreOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_,b1,__ZN7WebCore20DeleteRangeOperationD1Ev,b1,__ZN7WebCore31DeleteObjectStoreAbortOperationD1Ev
  ,b1,__ZN7WebCore25DeleteIndexAbortOperation7performEv,b1,__ZN7WebCore31CreateObjectStoreAbortOperationD1Ev,b1,__ZN7WebCore25CreateIndexAbortOperation7performEv,b1,__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,__ZN7WebCore26DeleteObjectStoreOperationD0Ev,b1,__ZN7WebCore25CreateIndexAbortOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_,b1,__ZN7WebCore25ClearObjectStoreOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_
  ,b1,__ZN7WebCore24SetIndexesReadyOperationD0Ev,b1,__ZN7WebCore20CreateIndexOperationD1Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_,b1,__ZN7WebCore20DeleteRangeOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD0Ev,b1,__ZN7WebCore19OpenCursorOperationD0Ev,b1,___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,__ZN7WebCore14CountOperation7performENSt3__18functionIFvvEEE,b2,__ZN7WebCore20CreateIndexOperation7performENSt3__18functionIFvvEEE,b2,__ZN7WebCore12GetOperation7performENSt3__18functionIFvvEEE,b2,__ZN7WebCore26CreateObjectStoreOperation7performENSt3__18functionIFvvEEE,b2,___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISF_EE_,b2,___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,__ZN7WebCore20DeleteIndexOperation7performENSt3__18functionIFvvEEE,b2,___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_
  ,b2,__ZN7WebCore24SetIndexesReadyOperation7performENSt3__18functionIFvvEEE,b2,___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,__ZN7WebCore26DeleteObjectStoreOperation7performENSt3__18functionIFvvEEE,b2,__ZN7WebCore12PutOperation7performENSt3__18functionIFvvEEE,b2,___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,__ZN7WebCore19OpenCursorOperation7performENSt3__18functionIFvvEEE,b2,___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSE__,b2,___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,__ZN7WebCore25ClearObjectStoreOperation7performENSt3__18functionIFvvEEE,b2,___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__
  ,b2,___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__,b2,__ZN7WebCore20DeleteRangeOperation7performENSt3__18functionIFvvEEE,b2,___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENSt3__18functionIFvvEEE,b2,___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  var FUNCTION_TABLE_viiii = [b6,b6];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore14CountOperationD0Ev","___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","_strlen","__ZN7WebCore25CreateIndexAbortOperationD1Ev","___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","__ZN7WebCore20DeleteIndexOperationD1Ev","__ZN7WebCore19OpenCursorOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","__ZN7WebCore20CreateIndexOperationD0Ev","__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperation7performEv","___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore14CountOperation7performENSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore26CreateObjectStoreOperation7performENSt3__18functionIFvvEEE","__ZN7WebCore12PutOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore12GetOperation7performENSt3__18functionIFvvEEE","___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore31DeleteObjectStoreAbortOperation7performEv","__ZN7WebCore20CreateIndexOperation7performENSt3__18functionIFvvEEE","___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore25DeleteIndexAbortOperationD1Ev","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISF_EE_","__ZN7WebCore12GetOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSE__","__ZN7WebCore25CreateIndexAbortOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","__ZN7WebCore25DeleteIndexAbortOperationD0Ev","__ZN7WebCore20DeleteIndexOperation7performENSt3__18functionIFvvEEE","__ZN7WebCore20DeleteIndexOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore24SetIndexesReadyOperation7performENSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","__ZN7WebCore31CreateObjectStoreAbortOperation7performEv","___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","__ZN7WebCore24SetIndexesReadyOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","__ZN7WebCore31CreateObjectStoreAbortOperationD0Ev","__ZN7WebCore12GetOperationD2Ev","__ZN7WebCore12PutOperationD1Ev","__ZN7WebCore26CreateObjectStoreOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore31DeleteObjectStoreAbortOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore26DeleteObjectStoreOperationD1Ev","__ZN7WebCore26DeleteObjectStoreOperation7performENSt3__18functionIFvvEEE","__ZN7WebCore14CountOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore12PutOperationD2Ev","___ZNKSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","__ZN7WebCore20DeleteRangeOperationD2Ev","___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore12GetOperation7performENS_8functionIFvvEEEE3$_3NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","_memset","__ZN7WebCore25ClearObjectStoreOperationD0Ev","__ZN7WebCore14CountOperationD2Ev","___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","__ZN7WebCore11IDBKeyRangeD2Ev","__ZN7WebCore18IDBDatabaseBackend27VersionChangeAbortOperationD1Ev","__ZN7WebCore12GetOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","__ZN7WebCore12PutOperation7performENSt3__18functionIFvvEEE","__ZN7WebCore26CreateObjectStoreOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","_memcpy","__ZN7WebCore19OpenCursorOperationD0Ev","__ZN7WebCore20DeleteRangeOperationD1Ev","__ZN7WebCore22IDBObjectStoreMetadataD1Ev","__ZN7WebCore31DeleteObjectStoreAbortOperationD1Ev","__ZN7WebCore25DeleteIndexAbortOperation7performEv","__ZN7WebCore31CreateObjectStoreAbortOperationD1Ev","___ZNKSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore19OpenCursorOperation7performENSt3__18functionIFvvEEE","___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore25CreateIndexAbortOperation7performEv","__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD1Ev","___ZNSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore26CreateObjectStoreOperation7performENS_8functionIFvvEEEE3$_0NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore26DeleteObjectStoreOperationD0Ev","___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","___ZNKSt3__110__function6__funcIZN7WebCore20CreateIndexOperation7performENS_8functionIFvvEEEE3$_1NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","___ZNKSt3__110__function6__funcIZN7WebCore14CountOperation7performENS_8functionIFvvEEEE3$_6NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore25ClearObjectStoreOperation7performENSt3__18functionIFvvEEE","___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE18destroy_deallocateEv_","___ZNKSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore25ClearObjectStoreOperationD1Ev","__ZN7WebCore16IDBIndexMetadataD1Ev","___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore25ClearObjectStoreOperation7performENS_8functionIFvvEEEE3$_8NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7destroyEv_","__ZN7WebCore24SetIndexesReadyOperationD0Ev","__ZN7WebCore20CreateIndexOperationD1Ev","__ZN7WebCore19OpenCursorOperationD2Ev","___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED2Ev_","___ZNSt3__110__function6__funcIZN7WebCore12PutOperation7performENS_8functionIFvvEEEE3$_4NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","__ZN7WebCore20DeleteRangeOperation7performENSt3__18functionIFvvEEE","___ZNKSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","__ZN7WebCore20DeleteRangeOperationD0Ev","___ZNSt3__110__function6__funcIZN7WebCore20DeleteIndexOperation7performENS_8functionIFvvEEEE3$_2NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperationD0Ev","___ZNKSt3__110__function6__funcIZN7WebCore19OpenCursorOperation7performENS_8functionIFvvEEEE3$_5NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEEclEOSD__","___ZNSt3__110__function6__funcIZN7WebCore20DeleteRangeOperation7performENS_8functionIFvvEEEE3$_7NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_","___ZNKSt3__110__function6__funcIZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENS_8functionIFvvEEEE4$_10NS_9allocatorIS8_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEv_","__ZN7WebCore18IDBDatabaseBackend22VersionChangeOperation7performENSt3__18functionIFvvEEE","___ZNKSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEE7__cloneEPNS0_6__baseISE_EE_","___ZNSt3__110__function6__funcIZN7WebCore26DeleteObjectStoreOperation7performENS_8functionIFvvEEEE3$_9NS_9allocatorIS7_EEFvN3WTF10PassRefPtrINS2_16IDBDatabaseErrorEEEEED0Ev_"]

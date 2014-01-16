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
H_BASE = parentModule["_malloc"](1104 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1104;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InspectorProfilerAgentD1Ev;
/* memory initializer */ allocate([116,105,116,108,101,0,0,0,79,98,106,101,99,116,32,119,105,116,104,32,103,105,118,101,110,32,105,100,32,110,111,116,32,102,111,117,110,100,0,0,73,110,115,112,101,99,116,101,100,32,99,111,110,116,101,120,116,32,104,97,115,32,103,111,110,101,0,0,0,0,0,0,70,97,105,108,101,100,32,116,111,32,119,114,97,112,32,111,98,106,101,99,116,0,0,0,79,98,106,101,99,116,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,46,32,73,110,115,112,101,99,116,101,100,32,99,111,110,116,101,120,116,32,105,115,32,103,111,110,101,0,0,0,0,0,0,79,98,106,101,99,116,32,105,115,32,110,111,116,32,97,118,97,105,108,97,98,108,101,0,73,110,118,97,108,105,100,32,104,101,97,112,32,115,110,97,112,115,104,111,116,32,111,98,106,101,99,116,32,105,100,0,109,97,120,74,83,79,98,106,101,99,116,73,100,0,0,0,111,114,103,46,119,101,98,107,105,116,46,112,114,111,102,105,108,101,115,46,117,115,101,114,45,105,110,105,116,105,97,116,101,100,0,0,0,0,0,0,104,101,97,100,0,0,0,0,105,100,108,101,84,105,109,101,0,0,0,0,0,0,0,0,67,80,85,0,0,0,0,0,72,69,65,80,0,0,0,0,116,121,112,101,73,100,0,0,117,105,100,0,0,0,0,0,80,114,111,102,105,108,101,32,119,97,115,110,39,116,32,102,111,117,110,100,0,0,0,0,80,114,111,102,105,108,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+368)|0;
  var __ZTVN7WebCore17PageProfilerAgentE=(H_BASE+912)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEEE=(H_BASE+408)|0;
  var __ZTVN7WebCore22InspectorProfilerAgentE=(H_BASE+488)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+872)|0;
  var __ZTVN7WebCore19WorkerProfilerAgentE=(H_BASE+680)|0;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 376 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 26;
}
function __ZN7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 72 | 0;
 i14 = i6 + 80 | 0;
 i15 = i6 + 88 | 0;
 i16 = __ZNK3WTF6String6toUIntEPb(i3, i7) | 0;
 if ((HEAP8[i7] & 1) == 0) {
  __ZN3WTF6StringC1EPKc(i8, H_BASE + 184 | 0);
  i7 = i8 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i3 = i2 | 0;
  i17 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  do {
   if ((i17 | 0) != 0) {
    i8 = i17 | 0;
    i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i17);
     break;
    } else {
     HEAP32[i8 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i7 >> 2] | 0;
  if ((i17 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  i7 = i17 | 0;
  i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i17);
   STACKTOP = i6;
   return;
  } else {
   HEAP32[i7 >> 2] = i3;
   STACKTOP = i6;
   return;
  }
 }
 __ZN7WebCore14ScriptProfiler20objectByHeapObjectIdEj(i9, i16);
 i16 = i9 | 0;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i18 = 12;
  } else {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    i18 = 12;
    break;
   }
   __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i11, HEAP32[i1 + 20 >> 2] | 0, HEAP32[i9 + 8 >> 2] | 0);
   i7 = HEAP32[i11 + 12 >> 2] | 0;
   do {
    if ((i7 | 0) == 0) {
     i18 = 22;
    } else {
     if ((HEAP32[i7 + 4 >> 2] | 0) == -6) {
      i18 = 22;
      break;
     }
     do {
      if ((i4 | 0) == 0) {
       __ZN3WTF6StringC1EPKc(i14, H_BASE + 1104 | 0);
       i19 = 1;
       i20 = 0;
      } else {
       i17 = HEAP32[i4 >> 2] | 0;
       HEAP32[i14 >> 2] = i17;
       if ((i17 | 0) == 0) {
        i19 = 0;
        i20 = 1;
        break;
       }
       i8 = i17 | 0;
       HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
       i19 = 0;
       i20 = 1;
      }
     } while (0);
     __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i13, i11, i16, i14, 0);
     i8 = i13 | 0;
     i17 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     i21 = i5 | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i17;
     do {
      if ((i22 | 0) != 0) {
       i17 = i22 + 4 | 0;
       i23 = i17 | 0;
       i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i23 >> 2] = i24;
        break;
       }
       i24 = i17 - 4 | 0;
       if ((i24 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 63](i24);
      }
     } while (0);
     i22 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i24 = i22 + 4 | 0;
       i17 = i24 | 0;
       i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) != 0) {
        HEAP32[i17 >> 2] = i23;
        break;
       }
       i23 = i24 - 4 | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 63](i23);
      }
     } while (0);
     do {
      if (i19) {
       i22 = HEAP32[i14 >> 2] | 0;
       if ((i22 | 0) == 0) {
        break;
       }
       i8 = i22 | 0;
       i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i8 >> 2] = i23;
        break;
       }
      }
     } while (0);
     do {
      if (i20) {
       i23 = HEAP32[i14 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       i8 = i23 | 0;
       i22 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i8 >> 2] = i22;
        break;
       }
      }
     } while (0);
     if ((HEAP32[i21 >> 2] | 0) != 0) {
      break;
     }
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 80 | 0);
     i22 = i15 | 0;
     i8 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = 0;
     i23 = i2 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i8;
     do {
      if ((i24 | 0) != 0) {
       i8 = i24 | 0;
       i23 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i8 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i22 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i21 = i24 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      break;
     }
    }
   } while (0);
   do {
    if ((i18 | 0) == 22) {
     __ZN3WTF6StringC1EPKc(i12, H_BASE + 104 | 0);
     i7 = i12 | 0;
     i23 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     i21 = i2 | 0;
     i24 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 | 0;
       i21 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
       if ((i21 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i24);
        break;
       } else {
        HEAP32[i23 >> 2] = i21;
        break;
       }
      }
     } while (0);
     i24 = HEAP32[i7 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i22 = i24 | 0;
     i21 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i22 >> 2] = i21;
      break;
     }
    }
   } while (0);
   __ZN9Inspector14InjectedScriptD1Ev(i11);
  }
 } while (0);
 do {
  if ((i18 | 0) == 12) {
   __ZN3WTF6StringC1EPKc(i10, H_BASE + 160 | 0);
   i11 = i10 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i15 = i2 | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i12;
   do {
    if ((i14 | 0) != 0) {
     i12 = i14 | 0;
     i15 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i12 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i11 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = i14 | 0;
   i12 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i15 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZN10Deprecated11ScriptValueD2Ev(i16);
 STACKTOP = i6;
 return;
}
function __ZN3WTF13tryMakeStringINS_6StringEcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i9 = (i2 | 0) == 0;
 if (i9) {
  i10 = 0;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i11 = _llvm_uadd_with_overflow_i32(i10 | 0, 1) | 0;
 i10 = tempRet0;
 i12 = i4 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 i13 = (i4 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i15 = _llvm_uadd_with_overflow_i32(i11 | 0, i14 | 0) | 0;
 i14 = i15;
 if (tempRet0 | i10) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 if (i9) {
  i16 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i16 = 9;
  }
 }
 do {
  if ((i16 | 0) == 9) {
   if (!i13) {
    if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i14 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i16 = 26;
      break;
     }
     i9 = i2 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i17 = i2;
     i18 = 0;
    } else {
     if (i14 >>> 0 > 4294967275 >>> 0) {
      i16 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i7, i14 + 20 | 0);
     i2 = i7 | 0;
     i9 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i16 = 26;
      break;
     }
     i2 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i14;
     HEAP32[i9 + 8 >> 2] = i2;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i17 = i9;
     i18 = i2;
    }
   } while (0);
   if ((i16 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   i2 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i19 = 0;
    } else {
     i9 = HEAP32[i2 + 4 >> 2] | 0;
     i10 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i20 = i2;
     } else {
      i15 = 0;
      while (1) {
       HEAP8[i18 + i15 | 0] = HEAP8[i10 + i15 | 0] | 0;
       i15 = i15 + 1 | 0;
       if (i15 >>> 0 >= i9 >>> 0) {
        break;
       }
      }
      i9 = HEAP32[i8 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i19 = 0;
       break;
      } else {
       i20 = i9;
      }
     }
     i19 = HEAP32[i20 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i18 + i19 | 0] = i3;
   i2 = i19 + 1 | 0;
   i9 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i15 = HEAP32[i9 + 4 >> 2] | 0;
     i10 = HEAP32[i9 + 8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else {
      i21 = 0;
     }
     while (1) {
      HEAP8[i18 + (i2 + i21) | 0] = HEAP8[i10 + i21 | 0] | 0;
      i21 = i21 + 1 | 0;
      if (i21 >>> 0 >= i15 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 0) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i16 = 48;
    break;
   }
   i21 = i17 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 2;
   i22 = i17;
   i23 = 0;
  } else {
   if (i14 >>> 0 > 2147483637 >>> 0) {
    i16 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, (i14 << 1) + 20 | 0);
   i17 = i6 | 0;
   i21 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i21 | 0) == 0) {
    i16 = 48;
    break;
   }
   i17 = i21 + 20 | 0;
   HEAP32[i21 >> 2] = 2;
   HEAP32[i21 + 4 >> 2] = i14;
   HEAP32[i21 + 8 >> 2] = i17;
   HEAP32[i21 + 12 >> 2] = 0;
   HEAP32[i21 + 16 >> 2] = 0;
   i22 = i21;
   i23 = i17;
  }
 } while (0);
 if ((i16 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 i16 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i24 = 0;
  } else {
   i14 = HEAP32[i16 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i16 + 16 >> 2] & 32 | 0) == 0) {
     i6 = HEAP32[i16 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i25 = 0;
     }
     while (1) {
      HEAP16[i23 + (i25 << 1) >> 1] = HEAP16[i6 + (i25 << 1) >> 1] | 0;
      i25 = i25 + 1 | 0;
      if (i25 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    } else {
     i6 = HEAP32[i16 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     } else {
      i26 = 0;
     }
     while (1) {
      HEAP16[i23 + (i26 << 1) >> 1] = HEAPU8[i6 + i26 | 0] | 0;
      i26 = i26 + 1 | 0;
      if (i26 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i14 = HEAP32[i8 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i24 = 0;
    break;
   }
   i24 = HEAP32[i14 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i23 + (i24 << 1) >> 1] = i3 & 255;
 i3 = i24 + 1 | 0;
 i24 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i12 = HEAP32[i24 + 4 >> 2] | 0;
   if ((HEAP32[i24 + 16 >> 2] & 32 | 0) == 0) {
    i8 = HEAP32[i24 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i27 = 0;
    }
    while (1) {
     HEAP16[i23 + (i27 + i3 << 1) >> 1] = HEAP16[i8 + (i27 << 1) >> 1] | 0;
     i27 = i27 + 1 | 0;
     if (i27 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   } else {
    i8 = HEAP32[i24 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i28 = 0;
    }
    while (1) {
     HEAP16[i23 + (i28 + i3 << 1) >> 1] = HEAPU8[i8 + i28 | 0] | 0;
     i28 = i28 + 1 | 0;
     if (i28 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 HEAP32[i14 >> 2] = i3;
 i3 = i1 + 48 | 0;
 __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore13ScriptProfileEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i15, i3, i14);
 i14 = HEAP32[i15 >> 2] | 0;
 if ((i14 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i1 + 52 >> 2] << 3) | 0)) {
  __ZN3WTF6StringC1EPKc(i16, H_BASE + 328 | 0);
  i1 = i16 | 0;
  i16 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  i3 = i2 | 0;
  i2 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i16;
  do {
   if ((i2 | 0) != 0) {
    i16 = i2 | 0;
    i3 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
    if ((i3 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i2);
     break;
    } else {
     HEAP32[i16 >> 2] = i3;
     break;
    }
   }
  } while (0);
  i2 = HEAP32[i1 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i1 = i2 | 0;
  i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i3 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i2);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i1 >> 2] = i3;
   STACKTOP = i5;
   return;
  }
 }
 __ZN9Inspector15InspectorObject6createEv(i9);
 i3 = HEAP32[i9 >> 2] | 0;
 i9 = (i3 | 0) == 0;
 if (!i9) {
  i1 = i3 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 }
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i16 = i2 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i16 >> 2] = i15;
    break;
   }
   i15 = i2 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 63](i15);
  }
 } while (0);
 do {
  if (!i9) {
   i4 = i3 + 4 | 0;
   i15 = i4 | 0;
   i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i15 >> 2] = i2;
    break;
   }
   i2 = i4 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i3 = HEAP32[i1 >> 2] | 0;
 i9 = i14 + 4 | 0;
 __ZNK7WebCore13ScriptProfile27buildInspectorObjectForHeadEv(i17, HEAP32[i9 >> 2] | 0);
 HEAP32[i7 >> 2] = H_BASE + 272;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i8 | 0;
 i14 = i17 | 0;
 i17 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i7 >> 2] = i17;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i3 | 0, i6, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i7 = i8 + 4 | 0;
   i3 = i7 | 0;
   i17 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i3 >> 2] = i17;
    break;
   }
   i17 = i7 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i17 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 + 4 | 0;
   i17 = i14 | 0;
   i6 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i17 >> 2] = i6;
    break;
   }
   i6 = i14 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i8 = HEAP32[i1 >> 2] | 0;
 d18 = +__ZNK7WebCore13ScriptProfile8idleTimeEv(HEAP32[i9 >> 2] | 0);
 HEAP32[i13 >> 2] = H_BASE + 280;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
 __ZN9Inspector19InspectorBasicValue6createEd(i11, d18);
 i13 = i10 | 0;
 i9 = i11 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i13 >> 2] = i11;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8 | 0, i12, i10);
 i10 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i13 = i10 + 4 | 0;
   i8 = i13 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i8 >> 2] = i11;
    break;
   }
   i11 = i13 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 + 4 | 0;
   i11 = i9 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i11 >> 2] = i13;
    break;
   }
   i13 = i9 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 i10 = HEAP32[i12 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i12 = i10 | 0;
 i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i12 >> 2] = i13;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 HEAP8[i1 + 33 | 0] = 1;
 i6 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i6);
 HEAP32[i6 >> 2] = H_BASE + 416;
 i7 = i3 | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i8 = i6 | 0;
   i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i8 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 i6 = i3 + (i9 << 3) | 0;
 L8 : do {
  if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
   L10 : do {
    if ((i9 | 0) == 0) {
     i10 = i3;
    } else {
     i8 = i3;
     while (1) {
      i11 = HEAP32[i8 >> 2] | 0;
      if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
       i10 = i8;
       break L10;
      }
      i8 = i8 + 8 | 0;
      if ((i8 | 0) == (i6 | 0)) {
       break L8;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i6 | 0)) {
    break;
   }
   i8 = i4 | 0;
   i11 = i10;
   while (1) {
    i12 = HEAP32[i7 >> 2] | 0;
    __ZN7WebCore22InspectorProfilerAgent19createProfileHeaderERKNS_13ScriptProfileE(i4, 0, HEAP32[i11 + 4 >> 2] | 0);
    i13 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i14 = i13 | 0;
    i13 = i12 + 12 | 0;
    i15 = i12 + 20 | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (HEAP32[i12 + 16 >> 2] | 0)) {
     __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i13, i16 + 1 | 0);
     HEAP32[(HEAP32[i13 >> 2] | 0) + (HEAP32[i15 >> 2] << 2) >> 2] = i14;
    } else {
     HEAP32[(HEAP32[i13 >> 2] | 0) + (i16 << 2) >> 2] = i14;
    }
    HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
    i15 = i11 + 8 | 0;
    if ((i15 | 0) == (i6 | 0)) {
     break L8;
    } else {
     i17 = i15;
    }
    while (1) {
     i15 = HEAP32[i17 >> 2] | 0;
     if (!((i15 | 0) == (-1 | 0) | (i15 | 0) == 0)) {
      break;
     }
     i15 = i17 + 8 | 0;
     if ((i15 | 0) == (i6 | 0)) {
      break L8;
     } else {
      i17 = i15;
     }
    }
    if ((i17 | 0) == (i6 | 0)) {
     break;
    } else {
     i11 = i17;
    }
   }
  }
 } while (0);
 i17 = HEAP32[i1 + 68 >> 2] | 0;
 i6 = HEAP32[i1 + 72 >> 2] | 0;
 i4 = i17 + (i6 << 3) | 0;
 if ((HEAP32[i1 + 80 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 L30 : do {
  if ((i6 | 0) == 0) {
   i18 = i17;
  } else {
   i1 = i17;
   while (1) {
    i10 = HEAP32[i1 >> 2] | 0;
    if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
     i18 = i1;
     break L30;
    }
    i1 = i1 + 8 | 0;
    if ((i1 | 0) == (i4 | 0)) {
     break;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i18 | 0) == (i4 | 0)) {
  STACKTOP = i2;
  return;
 }
 i17 = i5 | 0;
 i6 = i18;
 L39 : while (1) {
  i18 = HEAP32[i7 >> 2] | 0;
  __ZN7WebCore22InspectorProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE(i5, 0, HEAP32[i6 + 4 >> 2] | 0);
  i1 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i10 = i1 | 0;
  i1 = i18 + 12 | 0;
  i3 = i18 + 20 | 0;
  i9 = HEAP32[i3 >> 2] | 0;
  if ((i9 | 0) == (HEAP32[i18 + 16 >> 2] | 0)) {
   __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i9 + 1 | 0);
   HEAP32[(HEAP32[i1 >> 2] | 0) + (HEAP32[i3 >> 2] << 2) >> 2] = i10;
  } else {
   HEAP32[(HEAP32[i1 >> 2] | 0) + (i9 << 2) >> 2] = i10;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  i3 = i6 + 8 | 0;
  if ((i3 | 0) == (i4 | 0)) {
   i19 = 35;
   break;
  } else {
   i20 = i3;
  }
  while (1) {
   i3 = HEAP32[i20 >> 2] | 0;
   if (!((i3 | 0) == (-1 | 0) | (i3 | 0) == 0)) {
    break;
   }
   i3 = i20 + 8 | 0;
   if ((i3 | 0) == (i4 | 0)) {
    i19 = 38;
    break L39;
   } else {
    i20 = i3;
   }
  }
  if ((i20 | 0) == (i4 | 0)) {
   i19 = 36;
   break;
  } else {
   i6 = i20;
  }
 }
 if ((i19 | 0) == 35) {
  STACKTOP = i2;
  return;
 } else if ((i19 | 0) == 36) {
  STACKTOP = i2;
  return;
 } else if ((i19 | 0) == 38) {
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 8;
  i6 = 0;
 } else {
  i7 = i4 << 1;
  i5 = ((HEAP32[i1 + 12 >> 2] | 0) * 6 & -1 | 0) < (i7 | 0) ? i4 : i7;
  i6 = i4;
 }
 i4 = i1 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i3 >> 2] = i5;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = i5 - 1;
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i5 = i7 + (i10 << 3) | 0;
  i12 = i5 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 + 16 >> 2] | 0;
   if (i17 >>> 0 > 127 >>> 0) {
    i18 = i17 >>> 7;
   } else {
    i18 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i13) | 0;
   }
   i13 = (i18 >>> 23) + ~i18 | 0;
   i17 = i13 << 12 ^ i13;
   i13 = i17 >>> 7 ^ i17;
   i17 = i13 << 2 ^ i13;
   i13 = i17 >>> 20 ^ i17 | 1;
   i17 = i18;
   i19 = 0;
   i20 = 0;
   while (1) {
    i21 = i17 & i16;
    i22 = i14 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    i24 = i23;
    if ((i24 | 0) == 0) {
     i25 = 11;
     break;
    } else if ((i24 | 0) == (-1 | 0)) {
     i26 = i22;
    } else {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i23, HEAP32[i12 >> 2] | 0) | 0) {
      i27 = i22;
      break;
     } else {
      i26 = i20;
     }
    }
    i23 = (i19 | 0) == 0 ? i13 : i19;
    i17 = i23 + i21 | 0;
    i19 = i23;
    i20 = i26;
   }
   if ((i25 | 0) == 11) {
    i25 = 0;
    i27 = (i20 | 0) != 0 ? i20 : i22;
   }
   i19 = i27 + 4 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 + 4 | 0;
     i14 = i13 | 0;
     i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i17 = i27 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i20 | 0) != 0) {
     i16 = i20 | 0;
     i13 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i16 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i20 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i17 >> 2] = i20;
   i20 = i7 + (i10 << 3) + 4 | 0;
   i13 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i19 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i6 | 0) > 0) {
  i28 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  i1 = i7 + (i28 << 3) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i11 = HEAP32[i7 + (i28 << 3) + 4 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i10 = i11 + 4 | 0;
      i27 = i10 | 0;
      i2 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i2 | 0) != 0) {
       HEAP32[i27 >> 2] = i2;
       break;
      }
      i2 = i10 - 4 | 0;
      if ((i2 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i2 = i11 | 0;
    i10 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i2 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i6 | 0)) {
   i28 = i1;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = _strlen(i2 | 0) | 0;
 i9 = _llvm_uadd_with_overflow_i32(i8 | 0, 1) | 0;
 i10 = i9;
 i9 = tempRet0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 i12 = (i4 | 0) == 0;
 if (i12) {
  i13 = 0;
 } else {
  i13 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i14 = _llvm_uadd_with_overflow_i32(i10 | 0, i13 | 0) | 0;
 i13 = i14;
 if (tempRet0 | i9) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 do {
  if (i12) {
   if ((i13 | 0) == 0) {
    i15 = 9;
   } else {
    i15 = 11;
   }
  } else {
   i9 = (i13 | 0) == 0;
   if ((HEAP32[i4 + 16 >> 2] & 32 | 0) != 0) {
    if (i9) {
     i15 = 9;
     break;
    } else {
     i15 = 11;
     break;
    }
   }
   do {
    if (i9) {
     i14 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i14 | 0) == 0) {
      i15 = 34;
      break;
     }
     i16 = i14 | 0;
     HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
     i17 = i14;
     i18 = 0;
    } else {
     if (i13 >>> 0 > 2147483637 >>> 0) {
      i15 = 34;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, (i13 << 1) + 20 | 0);
     i14 = i6 | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i16 | 0) == 0) {
      i15 = 34;
      break;
     }
     i14 = i16 + 20 | 0;
     HEAP32[i16 >> 2] = 2;
     HEAP32[i16 + 4 >> 2] = i13;
     HEAP32[i16 + 8 >> 2] = i14;
     HEAP32[i16 + 12 >> 2] = 0;
     HEAP32[i16 + 16 >> 2] = 0;
     i17 = i16;
     i18 = i14;
    }
   } while (0);
   if ((i15 | 0) == 34) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i5;
    return;
   }
   if ((i8 | 0) != 0) {
    i9 = 0;
    while (1) {
     HEAP16[i18 + (i9 << 1) >> 1] = HEAPU8[i2 + i9 | 0] | 0;
     i9 = i9 + 1 | 0;
     if (i9 >>> 0 >= i8 >>> 0) {
      break;
     }
    }
   }
   HEAP16[i18 + (i8 << 1) >> 1] = i3 & 255;
   i9 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i14 = HEAP32[i9 + 4 >> 2] | 0;
     if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
      i16 = HEAP32[i9 + 8 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      } else {
       i19 = 0;
      }
      while (1) {
       HEAP16[i18 + (i19 + i10 << 1) >> 1] = HEAP16[i16 + (i19 << 1) >> 1] | 0;
       i19 = i19 + 1 | 0;
       if (i19 >>> 0 >= i14 >>> 0) {
        break;
       }
      }
     } else {
      i16 = HEAP32[i9 + 8 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      } else {
       i20 = 0;
      }
      while (1) {
       HEAP16[i18 + (i20 + i10 << 1) >> 1] = HEAPU8[i16 + i20 | 0] | 0;
       i20 = i20 + 1 | 0;
       if (i20 >>> 0 >= i14 >>> 0) {
        break;
       }
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i17;
   STACKTOP = i5;
   return;
  }
 } while (0);
 do {
  if ((i15 | 0) == 11) {
   if (i13 >>> 0 > 4294967275 >>> 0) {
    i15 = 18;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i7, i13 + 20 | 0);
   i17 = i7 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   if ((i20 | 0) == 0) {
    i15 = 18;
    break;
   }
   i17 = i20 + 20 | 0;
   HEAP32[i20 >> 2] = 2;
   HEAP32[i20 + 4 >> 2] = i13;
   HEAP32[i20 + 8 >> 2] = i17;
   HEAP32[i20 + 12 >> 2] = 0;
   HEAP32[i20 + 16 >> 2] = 32;
   i21 = i20;
   i22 = i17;
  } else if ((i15 | 0) == 9) {
   i17 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i17 | 0) == 0) {
    i15 = 18;
    break;
   }
   i20 = i17 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 2;
   i21 = i17;
   i22 = 0;
  }
 } while (0);
 if ((i15 | 0) == 18) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 }
 _memcpy(i22 | 0, i2 | 0, i8) | 0;
 HEAP8[i22 + i8 | 0] = i3;
 i3 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i11 = HEAP32[i3 + 4 >> 2] | 0;
   i8 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   } else {
    i23 = 0;
   }
   while (1) {
    HEAP8[i22 + (i10 + i23) | 0] = HEAP8[i8 + i23 | 0] | 0;
    i23 = i23 + 1 | 0;
    if (i23 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i21;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8 + ~(i8 << 15) | 0;
 i7 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i7 >>> 6 ^ i7;
 i7 = i9 + ~(i9 << 11) | 0;
 i9 = i7 >>> 16 ^ i7;
 i7 = i9 & i6;
 i11 = i10 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = i8;
  } else {
   i15 = (i9 >>> 23) + ~i9 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i7;
   i19 = i11;
   i20 = i12;
   while (1) {
    if ((i20 | 0) == (i8 | 0)) {
     i21 = 8;
     break;
    }
    i22 = (i20 | 0) == -1 ? i19 : i17;
    i23 = (i16 | 0) == 0 ? i15 : i16;
    i24 = i23 + i18 & i6;
    i25 = i10 + (i24 << 3) | 0;
    i26 = HEAP32[i25 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i21 = 10;
     break;
    } else {
     i16 = i23;
     i17 = i22;
     i18 = i24;
     i19 = i25;
     i20 = i26;
    }
   }
   if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i21 | 0) == 10) {
    if ((i22 | 0) == 0) {
     i13 = i25;
     i14 = i8;
     break;
    }
    i20 = i22;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i13 = i22;
    i14 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) != 0) {
  i4 = i14 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i13 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i14;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 + 4 | 0;
   i4 = i14 | 0;
   i22 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i4 >> 2] = i22;
    break;
   }
   i22 = i14 - 4 | 0;
   if ((i22 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 63](i22);
  }
 } while (0);
 i3 = i2 + 12 | 0;
 i22 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i22;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i22 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i4 = i14 << 1;
   i29 = (i22 * 6 & -1 | 0) < (i4 | 0) ? i14 : i4;
  }
  i4 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i2, i29, i13) | 0;
  i27 = i4;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i19;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i8 = 0;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 } else {
  i10 = 0;
  i11 = 0;
 }
 while (1) {
  i2 = i7 + (i10 << 3) | 0;
  i12 = i2 | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  if ((i13 | 0) == (-1 | 0) | (i13 | 0) == 0) {
   i14 = i11;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
    } else {
     i24 = (i17 >>> 23) + ~i17 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i18;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 6;
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
   if ((i23 | 0) == 6) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i15 = i30 + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i13 = i16 + 4 | 0;
     i20 = i13 | 0;
     i19 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i20 >> 2] = i19;
      break;
     }
     i19 = i13 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i16 = i7 + (i10 << 3) + 4 | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i15 >> 2] = i19;
   i14 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i19 = i10 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i19;
   i11 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i14;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i36 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = i1 + 4 | 0;
    i1 = i11 | 0;
    i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) != 0) {
     HEAP32[i1 >> 2] = i10;
     break;
    }
    i10 = i11 - 4 | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i14;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 40 | 0;
 i10 = i5 + 48 | 0;
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i6, HEAP32[i1 + 20 >> 2] | 0, i3);
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZNK9Inspector14InjectedScript14findObjectByIdERKN3WTF6StringE(i8, i6, i3);
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i12 = 14;
    } else {
     if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
      i12 = 14;
      break;
     }
     if (__ZNK10Deprecated11ScriptValue11isUndefinedEv(i8) | 0) {
      i12 = 14;
      break;
     }
     __ZN3WTF6String6numberEj(i10, __ZN7WebCore14ScriptProfiler15getHeapObjectIdERKN10Deprecated11ScriptValueE(i8) | 0);
     i13 = i10 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     i15 = i4 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     do {
      if ((i16 | 0) != 0) {
       i14 = i16 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i13 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i15 = i16 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i14;
      break;
     }
    }
   } while (0);
   do {
    if ((i12 | 0) == 14) {
     __ZN3WTF6StringC1EPKc(i9, H_BASE + 16 | 0);
     i11 = i9 | 0;
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     i15 = i2 | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     HEAP32[i15 >> 2] = i14;
     do {
      if ((i16 | 0) != 0) {
       i14 = i16 | 0;
       i15 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
       if ((i15 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i16);
        break;
       } else {
        HEAP32[i14 >> 2] = i15;
        break;
       }
      }
     } while (0);
     i16 = HEAP32[i11 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     i13 = i16 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i13 >> 2] = i15;
      break;
     }
    }
   } while (0);
   __ZN10Deprecated11ScriptValueD1Ev(i8);
   __ZN9Inspector14InjectedScriptD1Ev(i6);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 48 | 0);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i9;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i8 = i2 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i9 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i8 >> 2] = i9;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i10 = i9 >>> 7;
 } else {
  i10 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i10 >>> 23) + ~i10 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i11 = i10;
 i10 = 0;
 while (1) {
  i12 = i11 & i6;
  i13 = i7 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 9;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i10 | 0) == 0 ? i3 : i10;
  i9 = i16;
  i11 = i14 + i12 | 0;
  i10 = i14;
 }
 if ((i17 | 0) == 9) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i13;
  HEAP32[i10 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  i13 = i9;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i13 = i4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 i13 = i18 + 4 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i4;
 do {
  if ((i8 | 0) != 0) {
   i4 = i8 + 4 | 0;
   i13 = i4 | 0;
   i9 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i13 >> 2] = i9;
    break;
   }
   i9 = i4 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i8 = i2 + 12 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 1 | 0;
 HEAP32[i8 >> 2] = i9;
 i8 = i2 + 4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i4 | 0)) {
  i19 = i18;
  i20 = i4;
 } else {
  i4 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_(i2, i18) | 0;
  i19 = i4;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i2 | 0;
 i6 = i2 + 8 | 0;
 i7 = i2 + 16 | 0;
 HEAP32[i7 >> 2] = i4;
 i4 = i3 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 296 | 0) | 0) {
  i3 = i1 + 48 | 0;
  __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore13ScriptProfileEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i6, i3, i7);
  i8 = HEAP32[i6 >> 2] | 0;
  i6 = i3 | 0;
  i9 = i1 + 52 | 0;
  if ((i8 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i9 >> 2] << 3) | 0)) {
   STACKTOP = i2;
   return;
  }
  i3 = HEAP32[i8 + 4 >> 2] | 0;
  do {
   if ((i3 | 0) != 0) {
    i10 = i3 + 4 | 0;
    i11 = i10 | 0;
    i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i12 | 0) != 0) {
     HEAP32[i11 >> 2] = i12;
     break;
    }
    i12 = i10 - 4 | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
   }
  } while (0);
  HEAP32[i8 >> 2] = -1;
  i8 = i1 + 64 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i8 = i1 + 60 | 0;
  i3 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  HEAP32[i8 >> 2] = i3;
  i8 = HEAP32[i9 >> 2] | 0;
  if (!((i3 * 6 & -1 | 0) < (i8 | 0) & (i8 | 0) > 8)) {
   STACKTOP = i2;
   return;
  }
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i6, (i8 | 0) / 2 & -1, 0) | 0;
  STACKTOP = i2;
  return;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i4 >> 2] | 0, H_BASE + 304 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = i1 + 68 | 0;
 __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i5, i4, i7);
 i7 = HEAP32[i5 >> 2] | 0;
 i5 = i4 | 0;
 i8 = i1 + 72 | 0;
 if ((i7 | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i8 >> 2] << 3) | 0)) {
  STACKTOP = i2;
  return;
 }
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i4 + 4 | 0;
   i3 = i6 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i3 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 HEAP32[i7 >> 2] = -1;
 i7 = i1 + 84 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = i1 + 80 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 HEAP32[i7 >> 2] = i1;
 i7 = HEAP32[i8 >> 2] | 0;
 if (!((i1 * 6 & -1 | 0) < (i7 | 0) & (i7 | 0) > 8)) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i5, (i7 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i2 = i3 | 0;
 i4 = i3 + 8 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 __ZN9Inspector15InspectorObject6createEv(i7);
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 i7 = __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi1EE6setUidEi(__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi0EE9setTypeIdENS2_6TypeId4EnumE(i8, 63) | 0, 0) | 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 1104 | 0);
 i8 = HEAP32[(__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi5EE8setTitleERKN3WTF6StringE(i7, i9) | 0) >> 2] | 0;
 if ((i8 | 0) != 0) {
  i7 = i8 + 4 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i9 = i7 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = i7 + 4 | 0;
   i11 = i10 | 0;
   i9 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i11 >> 2] = i9;
    break;
   }
   i9 = i10 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 216;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 __ZN9Inspector19InspectorBasicValue6createEd(i4, +0);
 i6 = i2 | 0;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i6 >> 2] = i4;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8 | 0, i5, i2);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i4 = i6 | 0;
   i9 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i4 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i2 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 + 4 | 0;
   i9 = i7 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i7 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i8;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i6;
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i8;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent10addProfileEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 40 | 0;
 i11 = i7 | 0;
 i12 = i2 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i11 >> 2] = i2;
 HEAP32[i8 >> 2] = __ZNK7WebCore13ScriptProfile3uidEv(i2) | 0;
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_(i6 + 16 | 0, i1 + 48 | 0, i8, i7);
 i7 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP8[i1 + 33 | 0] & 1) == 0) {
    break;
   }
   __ZN7WebCore22InspectorProfilerAgent19createProfileHeaderERKNS_13ScriptProfileE(i9, 0, HEAP32[i11 >> 2] | 0);
   __ZN9Inspector35InspectorProfilerFrontendDispatcher16addProfileHeaderEN3WTF10PassRefPtrINS_11TypeBuilder8Profiler13ProfileHeaderEEE(i7, i9);
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i2 = i8 + 4 | 0;
   i8 = i2 | 0;
   i12 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) != 0) {
    HEAP32[i8 >> 2] = i12;
    break;
   }
   i12 = i2 - 4 | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 63](i12);
  }
 } while (0);
 i9 = i10 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 i11 = (i7 | 0) == 0;
 if (!i11) {
  i12 = i7 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore22InspectorProfilerAgent34addProfileFinishedMessageToConsoleEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE(i1, i10, i3, i4, i5);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 4 | 0;
   i4 = i9 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i4 >> 2] = i3;
    break;
   }
   i3 = i9 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 if (i11) {
  STACKTOP = i6;
  return;
 }
 i11 = i7 + 4 | 0;
 i7 = i11 | 0;
 i5 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i7 >> 2] = i5;
  STACKTOP = i6;
  return;
 }
 i5 = i11 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorProfilerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 496;
 HEAP32[i1 + 12 >> 2] = H_BASE + 600;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 72 >> 2] = 0;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i8 = i7 | 0;
      i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) != 0) {
       HEAP32[i8 >> 2] = i6;
       break;
      }
      i6 = i7 - 4 | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector41InspectorProfilerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN7WebCore22InspectorProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 496;
 HEAP32[i1 + 12 >> 2] = H_BASE + 600;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 72 >> 2] = 0;
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i8 = i7 | 0;
      i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) != 0) {
       HEAP32[i8 >> 2] = i6;
       break;
      }
      i6 = i7 - 4 | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 4 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i5 >> 2] = i6;
    break;
   }
   i6 = i4 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZdlPv(i6);
 }
 __ZN9Inspector41InspectorProfilerBackendDispatcherHandlerD2Ev(i1 + 12 | 0);
 HEAP32[i2 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
function __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
 if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i5 = i3 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i5 = i6 + 4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i3 = i6 + 4 | 0;
  i6 = i3 | 0;
  i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i5 | 0) != 0) {
   HEAP32[i6 >> 2] = i5;
   STACKTOP = i4;
   return;
  }
  i5 = i3 - 4 | 0;
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  STACKTOP = i4;
  return;
 }
 i5 = i1 + 32 | 0;
 i3 = i1 + 40 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != (HEAP32[i1 + 36 >> 2] | 0)) {
  i1 = HEAP32[i2 >> 2] | 0;
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] = i1;
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
  }
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i7 = i6 + 1 | 0;
 i1 = i5 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 do {
  if (i8 >>> 0 > i2 >>> 0) {
   i9 = 13;
  } else {
   if ((i8 + (i6 << 2) | 0) >>> 0 <= i2 >>> 0) {
    i9 = 13;
    break;
   }
   __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
   i10 = HEAP32[i1 >> 2] | 0;
   i11 = i10 + (i2 - i8 >> 2 << 2) | 0;
   i12 = i10;
  }
 } while (0);
 if ((i9 | 0) == 13) {
  __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i7);
  i11 = i2;
  i12 = HEAP32[i1 >> 2] | 0;
 }
 i1 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (HEAP32[i3 >> 2] << 2) >> 2] = i1;
 if ((i1 | 0) != 0) {
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent10resetStateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 56 >> 2] & 63](i1, 0);
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 52 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i6 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      i7 = i6 + 4 | 0;
      i6 = i7 | 0;
      i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i6 >> 2] = i8;
       break;
      }
      i8 = i7 - 4 | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 68 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    do {
     if ((HEAP32[i3 + (i5 << 3) >> 2] | 0) != -1) {
      i8 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      i7 = i8 + 4 | 0;
      i8 = i7 | 0;
      i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) != 0) {
       HEAP32[i8 >> 2] = i6;
       break;
      }
      i6 = i7 - 4 | 0;
      if ((i6 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
     }
    } while (0);
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 HEAP32[i1 + 36 >> 2] = 1;
 HEAP32[i1 + 40 >> 2] = 1;
 HEAP32[i1 + 44 >> 2] = 1;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i1 + 33 | 0] & 1) == 0) {
    break;
   }
   if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP32[i1 + 80 >> 2] | 0) != 0) {
    break;
   }
   __ZN9Inspector35InspectorProfilerFrontendDispatcher13resetProfilesEv(i2);
  }
 } while (0);
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 56 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore18CommandLineAPIHost21clearInspectedObjectsEv(i2);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i1 + 34 | 0;
 if ((HEAP8[i7] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i7] = 0;
 __ZN7WebCore22InspectorProfilerAgent34getCurrentUserInitiatedProfileNameEb(i3, i1, 0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 92 >> 2] & 31](i4, i1, i3);
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = (i4 | 0) == 0;
 do {
  if (!i7) {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = i4;
   i9 = i4 + 4 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = 0;
   __ZN7WebCore22InspectorProfilerAgent10addProfileEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE(i1, i5, 0, 0, i6);
   i10 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 | 0;
     i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i10);
      break;
     } else {
      HEAP32[i9 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i11 = i10 + 4 | 0;
   i10 = i11 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i10 >> 2] = i9;
    break;
   }
   i9 = i11 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i6 | 0) != 0) {
  __ZN9Inspector35InspectorProfilerFrontendDispatcher19setRecordingProfileEb(i6, 0);
 }
 do {
  if (!i7) {
   i6 = i4 + 4 | 0;
   i1 = i6 | 0;
   i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i1 >> 2] = i5;
    break;
   }
   i5 = i6 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i4 | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi0EE9setTypeIdENS2_6TypeId4EnumE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 312;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector11TypeBuilder23getWebEnumConstantValueEi(i8, i2);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i8);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i9, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i9 = i2 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i9 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i8 = i4 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i10 = i1;
  STACKTOP = i3;
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore22InspectorProfilerAgent34addProfileFinishedMessageToConsoleEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 __ZNK7WebCore13ScriptProfile5titleEv(i8, i2);
 __ZN3WTF6String6numberEj(i9, __ZNK7WebCore13ScriptProfile3uidEv(i2) | 0);
 __ZN3WTF10makeStringINS_6StringEcS1_EES1_T_T0_T1_(i7, i8, 35, i9);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i11 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i11;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i8 = i10 | 0;
   i11 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i11 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i8 >> 2] = i11;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21InspectorConsoleAgent19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES7_jjPN3JSC9ExecStateEm(HEAP32[i1 + 16 >> 2] | 0, 3, 12, 4, i7, i5, i3, i4, 0, 0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = i3;
  STACKTOP = i6;
  return;
 }
 i3 = i4 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 34 | 0;
 if ((HEAP8[i5] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 32 | 0;
 if ((HEAP8[i6] & 1) == 0) {
  HEAP8[i6] = 1;
  i6 = __ZN7WebCore21PageScriptDebugServer6sharedEv() | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] & 63](i6, 0);
 }
 HEAP8[i5] = 1;
 __ZN7WebCore22InspectorProfilerAgent34getCurrentUserInitiatedProfileNameEb(i3, i1, 1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 63](i1, i3);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 24 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   __ZN7WebCore21InspectorConsoleAgent19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES7_jjPN3JSC9ExecStateEm(HEAP32[i1 + 16 >> 2] | 0, 3, 11, 4, i3, i4, 0, 0, 0, 0);
   i7 = HEAP32[i5 >> 2] | 0;
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
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN9Inspector35InspectorProfilerFrontendDispatcher19setRecordingProfileEb(i7, 1);
  }
 } while (0);
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i6 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i6);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_17WorkerGlobalScopeEPNS_25PageInjectedScriptManagerE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(96) | 0;
 i10 = i9;
 HEAP32[i8 >> 2] = H_BASE + 352;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 i8 = i9;
 HEAP32[i8 >> 2] = H_BASE + 376;
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 + 4 >> 2] = i7;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i8 >> 2] = H_BASE + 880;
   i12 = i9 + 8 | 0;
   HEAP32[i12 >> 2] = i2;
   i13 = i12;
  } else {
   i12 = i7 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i8 >> 2] = H_BASE + 880;
   i14 = i9 + 8 | 0;
   HEAP32[i14 >> 2] = i2;
   if ((i12 | 0) == 0) {
    i13 = i14;
    break;
   }
   i15 = i12 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i13 = i14;
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    i13 = i14;
    break;
   }
  }
 } while (0);
 i2 = i9 + 12 | 0;
 HEAP32[i2 >> 2] = H_BASE + 600;
 HEAP32[i9 + 16 >> 2] = i3;
 HEAP32[i9 + 20 >> 2] = i5;
 _memset(i9 + 24 | 0, 0, 11) | 0;
 HEAP32[i9 + 36 >> 2] = -1;
 HEAP32[i9 + 40 >> 2] = 1;
 HEAP32[i9 + 44 >> 2] = 1;
 _memset(i9 + 48 | 0, 0, 44) | 0;
 HEAP32[(HEAP32[i13 >> 2] | 0) + 72 >> 2] = i10;
 HEAP32[i8 >> 2] = H_BASE + 688;
 HEAP32[i2 >> 2] = H_BASE + 792;
 HEAP32[i9 + 92 >> 2] = i4;
 HEAP32[i1 >> 2] = i10;
 STACKTOP = i6;
 return;
}
function __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi5EE8setTitleERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 8;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_4PageEPNS_25PageInjectedScriptManagerE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = __ZN3WTF10fastMallocEj(96) | 0;
 i10 = i9;
 HEAP32[i8 >> 2] = H_BASE + 352;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i7, i8);
 i8 = i9;
 HEAP32[i8 >> 2] = H_BASE + 376;
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i9 + 4 >> 2] = i7;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i8 >> 2] = H_BASE + 880;
   i12 = i9 + 8 | 0;
   HEAP32[i12 >> 2] = i2;
   i13 = i12;
  } else {
   i12 = i7 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i8 >> 2] = H_BASE + 880;
   i14 = i9 + 8 | 0;
   HEAP32[i14 >> 2] = i2;
   if ((i12 | 0) == 0) {
    i13 = i14;
    break;
   }
   i15 = i12 | 0;
   i16 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i13 = i14;
    break;
   } else {
    HEAP32[i15 >> 2] = i16;
    i13 = i14;
    break;
   }
  }
 } while (0);
 i2 = i9 + 12 | 0;
 HEAP32[i2 >> 2] = H_BASE + 600;
 HEAP32[i9 + 16 >> 2] = i3;
 HEAP32[i9 + 20 >> 2] = i5;
 _memset(i9 + 24 | 0, 0, 11) | 0;
 HEAP32[i9 + 36 >> 2] = -1;
 HEAP32[i9 + 40 >> 2] = 1;
 HEAP32[i9 + 44 >> 2] = 1;
 _memset(i9 + 48 | 0, 0, 44) | 0;
 HEAP32[(HEAP32[i13 >> 2] | 0) + 72 >> 2] = i10;
 HEAP32[i8 >> 2] = H_BASE + 920;
 HEAP32[i2 >> 2] = H_BASE + 1024;
 HEAP32[i9 + 92 >> 2] = i4;
 HEAP32[i1 >> 2] = i10;
 STACKTOP = i6;
 return;
}
function __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi1EE6setUidEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 HEAP32[i7 >> 2] = H_BASE + 320;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 __ZN9Inspector19InspectorBasicValue6createEd(i5, +(i2 | 0));
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i8, i6, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i8 = i2 | 0;
   i5 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i8 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 + 4 | 0;
   i5 = i7 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i5 >> 2] = i2;
    break;
   }
   i2 = i7 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i6 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 i6 = i4 | 0;
 i2 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 } else {
  HEAP32[i6 >> 2] = i2;
  i9 = i1;
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L4 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L4;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore13ScriptProfileEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] << 3 | 0;
   i6 = i5;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8 + ~(i8 << 15) | 0;
   i10 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i10 >>> 6 ^ i10;
   i10 = i9 + ~(i9 << 11) | 0;
   i9 = i10 >>> 16 ^ i10;
   i10 = i9 & i5;
   i11 = i4 + (i10 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i9 >>> 23) + ~i9 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i10;
     i17 = i12;
     while (1) {
      if ((i17 | 0) == 0) {
       break;
      }
      i18 = (i15 | 0) == 0 ? i14 : i15;
      i19 = i18 + i16 & i5;
      i20 = i4 + (i19 << 3) | 0;
      i21 = HEAP32[i20 >> 2] | 0;
      if ((i21 | 0) == (i8 | 0)) {
       i13 = i20;
       break L3;
      } else {
       i15 = i18;
       i16 = i19;
       i17 = i21;
      }
     }
     i17 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 HEAP32[i5 >> 2] = i3;
 i3 = i1 + 68 | 0;
 __ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj(i6, i3, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i1 + 72 >> 2] << 3) | 0)) {
  i1 = HEAP32[i5 + 4 >> 2] | 0;
  if ((i1 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i1 + 4 | 0;
  i3 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i3 + 1;
  i5 = i1 + 4 | 0;
  if ((i3 | 0) != 0) {
   HEAP32[i5 >> 2] = i3;
   STACKTOP = i4;
   return;
  }
  i3 = i5 - 4 | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 328 | 0);
 i3 = i7 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent19createProfileHeaderERKNS_13ScriptProfileE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 i6 = i2 + 16 | 0;
 __ZN9Inspector15InspectorObject6createEv(i4);
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = HEAP32[i4 >> 2];
 i4 = __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi0EE9setTypeIdENS2_6TypeId4EnumE(i5, 61) | 0;
 i5 = __ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi1EE6setUidEi(i4, __ZNK7WebCore13ScriptProfile3uidEv(i3) | 0) | 0;
 __ZNK7WebCore13ScriptProfile5titleEv(i6, i3);
 i3 = HEAP32[(__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi5EE8setTitleERKN3WTF6StringE(i5, i6) | 0) >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = i3 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i1 >> 2] = i3;
 i3 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i6 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 + 4 | 0;
 i3 = i7 | 0;
 i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i3 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
 i1 = i7 - 4 | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InspectorProfilerAgentC2EPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_25PageInjectedScriptManagerE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 HEAP32[i7 >> 2] = H_BASE + 352;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i6, i7);
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = H_BASE + 376;
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i7 >> 2] = H_BASE + 880;
   i9 = i1 + 8 | 0;
   HEAP32[i9 >> 2] = i2;
   i10 = i9;
  } else {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i7 >> 2] = H_BASE + 880;
   i11 = i1 + 8 | 0;
   HEAP32[i11 >> 2] = i2;
   if ((i9 | 0) == 0) {
    i10 = i11;
    break;
   }
   i12 = i9 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i10 = i11;
    break;
   } else {
    HEAP32[i12 >> 2] = i13;
    i10 = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i7 >> 2] = H_BASE + 496;
 HEAP32[i1 + 12 >> 2] = H_BASE + 600;
 HEAP32[i1 + 16 >> 2] = i3;
 HEAP32[i1 + 20 >> 2] = i4;
 _memset(i1 + 24 | 0, 0, 11) | 0;
 HEAP32[i1 + 36 >> 2] = -1;
 HEAP32[i1 + 40 >> 2] = 1;
 HEAP32[i1 + 44 >> 2] = 1;
 _memset(i1 + 48 | 0, 0, 44) | 0;
 HEAP32[(HEAP32[i10 >> 2] | 0) + 72 >> 2] = i1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i2 = i3 | 0;
 i4 = i3 + 8 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 44 | 0;
 __ZN3WTF6String6numberEj(i5, HEAP32[i6 >> 2] | 0);
 i1 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i2, H_BASE + 232 | 0, 46, i4);
 i4 = i2 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i4 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i1 = i4 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i1 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((i2 | 0) == 0) {
  _WTFCrash();
 }
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i2 | 0;
 i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = __Znwj(4) | 0;
 HEAP32[i6 >> 2] = i2;
 i2 = i1 + 24 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i7 | 0) != 0) {
  __ZdlPv(i7);
 }
 __ZN9Inspector34InspectorProfilerBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_41InspectorProfilerBackendDispatcherHandlerE(i5, i3, i1 + 12 | 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i7 = i1 + 28 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 + 4 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i7 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  }
 } while (0);
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i1 + 4 | 0;
 i1 = i3 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 i6 = i3 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent34getCurrentUserInitiatedProfileNameEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if (i3) {
  i3 = i2 + 40 | 0;
  i8 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i8 + 1;
  HEAP32[i2 + 36 >> 2] = i8;
  i9 = i8;
 } else {
  i9 = HEAP32[i2 + 36 >> 2] | 0;
 }
 __ZN3WTF6String6numberEi(i7, i9);
 i9 = i6 | 0;
 i2 = i7 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i5, H_BASE + 232 | 0, 46, i6);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == 0) {
  _WTFCrash();
 }
 HEAP32[i1 >> 2] = i5;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i5);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF10makeStringINS_6StringEcS1_EES1_T_T0_T1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i7 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 HEAP32[i9 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i8 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 HEAP32[i2 >> 2] = i10;
 if ((i10 | 0) != 0) {
  i4 = i10 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringEcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_(i6, i7, i3, i8);
 i8 = i6 | 0;
 i6 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i2 = i8 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = i8 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore22InspectorProfilerAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = i1 + 28 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 + 4 | 0;
   i6 = i5 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i5 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 i4 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 56 >> 2] & 63](i1, 0);
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 48 >> 2] & 63](i1, i3);
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i3 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 + (i4 >>> 2) | 0;
 i6 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
 i5 = i6 >>> 0 > i2 >>> 0 ? i6 : i2;
 if (i4 >>> 0 >= i5 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i1 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i1) | 0;
 HEAP32[i4 >> 2] = i5;
 i1 = i2;
 _memcpy(i5 | 0, i1 | 0, i6 << 2) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZN7WebCore22InspectorProfilerAgent33addStartProfilingMessageToConsoleERKN3WTF6StringEjjS4_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 if ((HEAP32[i1 + 24 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore21InspectorConsoleAgent19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeENS_12MessageLevelERKN3WTF6StringES7_jjPN3JSC9ExecStateEm(HEAP32[i1 + 16 >> 2] | 0, 3, 11, 4, i2, i5, i3, i4, 0, 0);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE(i1 - 92 + 80 | 0, i2, i3, i4, i5);
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
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
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
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent21resetFrontendProfilesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 33 | 0] & 1) == 0) {
  return;
 }
 if ((HEAP32[i1 + 60 >> 2] | 0) != 0) {
  return;
 }
 if ((HEAP32[i1 + 80 >> 2] | 0) != 0) {
  return;
 }
 __ZN9Inspector35InspectorProfilerFrontendDispatcher13resetProfilesEv(i2);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE(i1 - 92 + 80 | 0, 0, i3);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE(i1 - 92 + 80 | 0, i2, i3, i4);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 376;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZThn12_N7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i2 = i1 - 92 + 80 | 0;
 i1 = i2;
 i3 = i2 + 32 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  return;
 }
 HEAP8[i3] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 63](i1);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 92 + 80 | 0;
 i1 = i2 + 32 | 0;
 if ((HEAP8[i1] & 1) != 0) {
  return;
 }
 HEAP8[i1] = 1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] & 63](i2);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent6enableEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 32 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 HEAP8[i3] = 1;
 if (i2) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 63](i1);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_(i1 - 92 + 80 | 0, i2, i3, i4);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent18toggleRecordButtonEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN9Inspector35InspectorProfilerFrontendDispatcher19setRecordingProfileEb(i3, i2);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i(i1 - 92 + 80 | 0, 0, i3, i4);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent7disableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  return;
 }
 HEAP8[i2] = 0;
 HEAP8[i1 + 33 | 0] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore19WorkerProfilerAgent13stopProfilingERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScriptProfiler24stopForWorkerGlobalScopeEPNS_17WorkerGlobalScopeERKN3WTF6StringE(i1, HEAP32[i2 + 92 >> 2] | 0, i3);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP8[i2] = 1;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 63](i1);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb(i1 - 92 + 80 | 0, 0, i3);
 return;
}
function __ZN7WebCore19WorkerProfilerAgent14startProfilingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler25startForWorkerGlobalScopeEPNS_17WorkerGlobalScopeERKN3WTF6StringE(HEAP32[i1 + 92 >> 2] | 0, i2);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi(i1 - 92 + 80 | 0, i2, i3);
 return;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore17PageProfilerAgent13stopProfilingERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScriptProfiler11stopForPageEPNS_4PageERKN3WTF6StringE(i1, HEAP32[i2 + 92 >> 2] | 0, i3);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore17PageProfilerAgent14startProfilingERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler12startForPageEPNS_4PageERKN3WTF6StringE(HEAP32[i1 + 92 >> 2] | 0, i2);
 return;
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
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
function __ZN7WebCore17PageProfilerAgent15recompileScriptEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore17ScriptDebugServer27recompileAllJSFunctionsSoonEv(__ZN7WebCore21PageScriptDebugServer6sharedEv() | 0);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE(i1 - 92 + 80 | 0, 0);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorProfilerAgent10resetStateEv(i1 - 92 + 80 | 0);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE(i1 - 92 + 80 | 0, 0);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 92 + 80 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn12_N7WebCore19WorkerProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 84 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn12_N7WebCore17PageProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 96 + 84 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler14collectGarbageEv();
 return;
}
function __ZN7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorProfilerAgent10resetStateEv(i1);
 return;
}
function iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue9asBooleanEPb(i1 | 0, i2 | 0) | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPm(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPl(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPj(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asNumberEPd(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScriptProfiler14collectGarbageEv();
 return;
}
function __ZThn12_N7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 1;
 return;
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 1;
 return;
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZThn12_N7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function __ZN7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = 0;
 return;
}
function __ZN7WebCore19WorkerProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22InspectorProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore17PageProfilerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
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
function __ZThn12_N7WebCore22InspectorProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 - 92 + 80 | 0);
 return;
}
function __ZThn12_N7WebCore19WorkerProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 - 96 + 84 | 0);
 return;
}
function __ZThn12_N7WebCore17PageProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 - 96 + 84 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore19WorkerProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 | 0);
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
function __ZN7WebCore17PageProfilerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorProfilerAgentD2Ev(i1 | 0);
 return;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b7(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(7);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN7WebCore19WorkerProfilerAgent15recompileScriptEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,__ZThn12_N7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore18InspectorAgentBaseD0Ev,b1,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b1,__ZN7WebCore17PageProfilerAgent15recompileScriptEv,b1,__ZN7WebCore18InspectorAgentBaseD1Ev,b1,__ZN7WebCore17PageProfilerAgentD0Ev,b1,__ZN9Inspector18InspectorAgentBaseD1Ev,b1,__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED0Ev,b1,__ZThn12_N7WebCore22InspectorProfilerAgentD1Ev,b1,__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED1Ev,b1,__ZThn12_N7WebCore22InspectorProfilerAgentD0Ev,b1,__ZN7WebCore19WorkerProfilerAgentD0Ev,b1,__ZN7WebCore19WorkerProfilerAgentD1Ev,b1,__ZThn12_N7WebCore17PageProfilerAgentD0Ev,b1,__ZN7WebCore19WorkerProfilerAgent15recompileScriptEv
  ,b1,__ZThn12_N7WebCore19WorkerProfilerAgentD1Ev,b1,__ZThn12_N7WebCore19WorkerProfilerAgentD0Ev,b1,__ZN7WebCore22InspectorProfilerAgentD2Ev,b1,__ZN7WebCore22InspectorProfilerAgentD0Ev,b1,__ZN7WebCore17PageProfilerAgentD1Ev,b1,__ZN9Inspector18InspectorAgentBaseD0Ev,b1,__ZN7WebCore22InspectorProfilerAgent29willDestroyFrontendAndBackendEv,b1,__ZThn12_N7WebCore17PageProfilerAgentD1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE,b2,__ZN7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE,b2,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b2,__ZN7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE,b2,__ZN7WebCore17PageProfilerAgent14startProfilingERKN3WTF6StringE,b2,__ZN7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE,b2,__ZThn12_N7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE,b2,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b2,__ZN7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE,b2,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b2,__ZThn12_N7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE
  ,b2,__ZThn12_N7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE,b2,__ZN7WebCore19WorkerProfilerAgent14startProfilingERKN3WTF6StringE,b2,__ZN7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE,b4,__ZN7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb,b4,__ZThn12_N7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi,b4,__ZN7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb,b4,__ZN7WebCore17PageProfilerAgent13stopProfilingERKN3WTF6StringE,b4,__ZThn12_N7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb,b4,__ZN7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb,b4,__ZN7WebCore19WorkerProfilerAgent13stopProfilingERKN3WTF6StringE,b4,__ZN7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi,b4,__ZThn12_N7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb,b4,__ZN7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb,b4,__ZThn12_N7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE,b4,__ZThn12_N7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb,b4,__ZThn12_N7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb
  ,b4,__ZN7WebCore22InspectorProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_iii = [b6,b6,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b6,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b6,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b6,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b6,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_viiii = [b7,b7,__ZThn12_N7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i,b7,__ZN7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i,b7,__ZN7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE,b7,__ZThn12_N7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE,b7,__ZThn12_N7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_,b7,__ZN7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE","__ZN3WTF13tryMakeStringINS_6StringEcS1_EENS_10PassRefPtrINS_10StringImplEEET_T0_T1_","__ZN7WebCore22InspectorProfilerAgent23getObjectByHeapObjectIdEPN3WTF6StringERKS2_PS4_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEE","__ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj","__ZN7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb","__ZThn12_N7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb","__ZN7WebCore22InspectorProfilerAgent34getCurrentUserInitiatedProfileNameEb","_memcpy","__ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_4PageEPNS_25PageInjectedScriptManagerE","__ZN7WebCore17PageProfilerAgentD0Ev","__ZThn12_N7WebCore22InspectorProfilerAgentD0Ev","__ZN7WebCore22InspectorProfilerAgentD2Ev","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore18ScriptHeapSnapshotEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZN7WebCore22InspectorProfilerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore22InspectorProfilerAgent6enableEb","__ZN7WebCore22InspectorProfilerAgent18toggleRecordButtonEb","__ZN7WebCore17PageProfilerAgent14startProfilingERKN3WTF6StringE","__ZThn12_N7WebCore22InspectorProfilerAgent6enableEPN3WTF6StringE","__ZN7WebCore17PageProfilerAgent15recompileScriptEv","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZThn12_N7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE","__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi5EE8setTitleERKN3WTF6StringE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZN7WebCore19WorkerProfilerAgent13stopProfilingERKN3WTF6StringE","__ZN7WebCore19WorkerProfilerAgentD0Ev","__ZN7WebCore22InspectorProfilerAgent21resetFrontendProfilesEv","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZThn12_N7WebCore17PageProfilerAgentD0Ev","__ZN7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb","__ZN7WebCore22InspectorProfilerAgent7disableEv","__ZN7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi","__ZN7WebCore22InspectorProfilerAgent29willDestroyFrontendAndBackendEv","__ZThn12_N7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i","_memset","__ZN3WTF9HashTableIjNS_12KeyValuePairIjNS_6RefPtrIN7WebCore13ScriptProfileEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_7IntHashIjEENS_7HashMapIjS5_SA_NS_10HashTraitsIjEENSC_IS5_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EEjRS5_EENS_18HashTableAddResultINS_17HashTableIteratorIjS6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN3WTF13tryMakeStringIPKccNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_T1_","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN7WebCore22InspectorProfilerAgent10addProfileEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE","__ZN7WebCore22InspectorProfilerAgent13removeProfileEPN3WTF6StringERKS2_i","__ZN7WebCore22InspectorProfilerAgent34addProfileFinishedMessageToConsoleEN3WTF10PassRefPtrINS_13ScriptProfileEEEjjRKNS1_6StringE","__ZN7WebCore22InspectorProfilerAgent20createSnapshotHeaderERKNS_18ScriptHeapSnapshotE","__ZThn12_N7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE","__ZN7WebCore17PageProfilerAgent13stopProfilingERKN3WTF6StringE","__ZN7WebCore22InspectorProfilerAgent16takeHeapSnapshotEPN3WTF6StringEPKb","__ZThn12_N7WebCore22InspectorProfilerAgent15getHeapSnapshotEPN3WTF6StringEi","__ZThn12_N7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_","__ZN7WebCore22InspectorProfilerAgent4stopEPN3WTF6StringE","__ZN7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb","__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi0EE9setTypeIdENS2_6TypeId4EnumE","__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED1Ev","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore19WorkerProfilerAgentD1Ev","__ZN7WebCore19WorkerProfilerAgent15recompileScriptEv","__ZThn12_N7WebCore19WorkerProfilerAgentD1Ev","__ZN3WTF10makeStringINS_6StringEcS1_EES1_T_T0_T1_","__ZN7WebCore22InspectorProfilerAgentD0Ev","__ZN7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorProfilerAgent19causesRecompilationEPN3WTF6StringEPb","__ZN7WebCore22InspectorProfilerAgent6createEPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_17WorkerGlobalScopeEPNS_25PageInjectedScriptManagerE","__ZN7WebCore19WorkerProfilerAgent14startProfilingERKN3WTF6StringE","__ZThn12_N7WebCore17PageProfilerAgentD1Ev","__ZN7WebCore22InspectorProfilerAgent19createProfileHeaderERKNS_13ScriptProfileE","__ZN7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE","__ZN7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE","__ZThn12_N7WebCore22InspectorProfilerAgent7disableEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorProfilerAgent13clearProfilesEPN3WTF6StringE","__ZN7WebCore22InspectorProfilerAgent33addStartProfilingMessageToConsoleERKN3WTF6StringEjjS4_","__ZN3WTF7HashMapIjNS_6RefPtrIN7WebCore13ScriptProfileEEENS_7IntHashIjEENS_10HashTraitsIjEENS7_IS4_EEE4findERKj","__ZThn12_N7WebCore22InspectorProfilerAgent13getCPUProfileEPN3WTF6StringEiRNS1_6RefPtrIN9Inspector11TypeBuilder8Profiler10CPUProfileEEE","__ZN9Inspector11TypeBuilder8Profiler13ProfileHeader7BuilderILi1EE6setUidEi","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore17PageProfilerAgentD1Ev","__ZThn12_N7WebCore22InspectorProfilerAgent5startEPN3WTF6StringE","__ZThn12_N7WebCore22InspectorProfilerAgent10isSamplingEPN3WTF6StringEPb","__ZN9Inspector11TypeBuilder5ArrayINS0_8Profiler13ProfileHeaderEED0Ev","__ZThn12_N7WebCore22InspectorProfilerAgentD1Ev","__ZThn12_N7WebCore22InspectorProfilerAgent15hasHeapProfilerEPN3WTF6StringEPb","__ZN7WebCore22InspectorProfilerAgent10resetStateEv","__ZThn12_N7WebCore22InspectorProfilerAgent17getProfileHeadersEPN3WTF6StringERNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINS6_8Profiler13ProfileHeaderEEEEE","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZThn12_N7WebCore19WorkerProfilerAgentD0Ev","__ZN7WebCore22InspectorProfilerAgent15getHeapObjectIdEPN3WTF6StringERKS2_S3_","__ZN7WebCore22InspectorProfilerAgentC2EPNS_19InstrumentingAgentsEPNS_21InspectorConsoleAgentEPNS_25PageInjectedScriptManagerE","__ZN7WebCore22InspectorProfilerAgent14collectGarbageEPN3WTF6StringE"]

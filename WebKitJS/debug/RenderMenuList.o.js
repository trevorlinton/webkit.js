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
H_BASE = parentModule["_malloc"](1440 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1440;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore14RenderMenuListC1ERNS_17HTMLSelectElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore14RenderMenuListD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,77,101,110,117,76,105,115,116,0,0,10,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,128,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10) {
  try {
    Module["dynCall_viiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10);
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
function invoke_iiiifi(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiifi"](index,a1,a2,a3,a4,a5);
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
  var __ZN7WebCore9HTMLNames5hrTagE=env.__ZN7WebCore9HTMLNames5hrTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var __ZN7WebCore9HTMLNames14aria_labelAttrE=env.__ZN7WebCore9HTMLNames14aria_labelAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore14RenderMenuListE=(H_BASE+32)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function runPostSets() {
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vii + 98;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_iii + 24;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 310;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 286;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 316;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 296;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 302;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 294;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 300;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 320;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 290;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 304;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 314;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 308;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vii + 104;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viii + 86;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 92;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 96;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viii + 78;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 298;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 32;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 94;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_viiiii + 24;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_viii + 88;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 108;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 102;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 84;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_viii + 74;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_vii + 106;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 100;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viiiii + 22;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 66;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 312;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 292;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_viii + 68;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_viii + 76;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 306;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_iii + 30;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_viii + 64;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_viii + 70;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_viii + 96;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_viii + 80;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_ii + 318;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_iii + 26;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_iii + 28;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_viiiii + 20;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_viii + 72;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_viii + 82;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_viii + 90;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_iii + 34;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_ii + 288;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_viiiii + 26;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_viiiii + 12;
}
function __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = i1 + 136 | 0;
 i26 = HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] | 0;
 __ZN7WebCore11RenderStyle11setFlexGrowEf(i26, +1);
 __ZN7WebCore11RenderStyle13setFlexShrinkEf(i26, +1);
 HEAP32[i11 >> 2] = 0;
 HEAP8[i12 + 4 | 0] = 0;
 i27 = i12 + 5 | 0;
 HEAP8[i27] = 3;
 HEAP8[i12 + 6 | 0] = 0;
 i28 = i26 + 4 | 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i28 >> 2] | 0) + 20 | 0, i12) | 0) {
   i29 = 9;
  } else {
   i30 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i30 >> 2] | 0) == 1) {
    i31 = i30;
   } else {
    __ZNK7WebCore12StyleBoxData4copyEv(i10, i30);
    i30 = HEAP32[i10 >> 2] | 0;
    i32 = HEAP32[i28 >> 2] | 0;
    i33 = i32 | 0;
    i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
    if ((i34 | 0) == 0) {
     __ZN7WebCore12StyleBoxDataD2Ev(i32);
     __ZN3WTF8fastFreeEPv(i32);
    } else {
     HEAP32[i33 >> 2] = i34;
    }
    HEAP32[i28 >> 2] = i30;
    i31 = i30;
   }
   i30 = i31 + 20 | 0;
   if ((i30 | 0) == (i12 | 0)) {
    i29 = 9;
    break;
   }
   i34 = i30;
   i30 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i34 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i34 + 4 >> 2] = i30;
   HEAP8[i27] = 0;
  }
 } while (0);
 do {
  if ((i29 | 0) == 9) {
   if ((HEAP8[i27] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
  }
 } while (0);
 i12 = i1 + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 114688 | 0) == 49152) {
   _memset(i13 | 0, 0, 7) | 0;
   i27 = i26 + 16 | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i27 >> 2] | 0) + 52 | 0, i14) | 0)) {
     i11 = HEAP32[i27 >> 2] | 0;
     if ((HEAP32[i11 >> 2] | 0) == 1) {
      i35 = i11;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i9, i11);
      i11 = HEAP32[i9 >> 2] | 0;
      i31 = HEAP32[i27 >> 2] | 0;
      i28 = i31 | 0;
      i10 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i10 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i31);
       __ZN3WTF8fastFreeEPv(i31);
      } else {
       HEAP32[i28 >> 2] = i10;
      }
      HEAP32[i27 >> 2] = i11;
      i35 = i11;
     }
     i11 = i35 + 52 | 0;
     if ((i11 | 0) == (i14 | 0)) {
      break;
     }
     i10 = i11;
     i11 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i10 + 4 >> 2] = i11;
     HEAP8[i14 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i14 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
   }
   _memset(i15 | 0, 0, 7) | 0;
   do {
    if (!(__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i27 >> 2] | 0) + 60 | 0, i16) | 0)) {
     i11 = HEAP32[i27 >> 2] | 0;
     if ((HEAP32[i11 >> 2] | 0) == 1) {
      i36 = i11;
     } else {
      __ZNK7WebCore17StyleSurroundData4copyEv(i8, i11);
      i11 = HEAP32[i8 >> 2] | 0;
      i10 = HEAP32[i27 >> 2] | 0;
      i28 = i10 | 0;
      i31 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
      if ((i31 | 0) == 0) {
       __ZN7WebCore17StyleSurroundDataD2Ev(i10);
       __ZN3WTF8fastFreeEPv(i10);
      } else {
       HEAP32[i28 >> 2] = i31;
      }
      HEAP32[i27 >> 2] = i11;
      i36 = i11;
     }
     i11 = i36 + 60 | 0;
     if ((i11 | 0) == (i16 | 0)) {
      break;
     }
     i31 = i11;
     i11 = HEAP32[i15 + 4 >> 2] | 0;
     HEAP32[i31 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i31 + 4 >> 2] = i11;
     HEAP8[i16 + 5 | 0] = 0;
    }
   } while (0);
   if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   i11 = i26 + 20 | 0;
   i31 = HEAP32[i11 >> 2] | 0;
   if ((HEAP32[i31 + 292 >> 2] & 917504 | 0) == 131072) {
    i37 = i27;
    break;
   }
   if ((HEAP32[i31 >> 2] | 0) == 1) {
    i38 = i31;
   } else {
    __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i31);
    i31 = HEAP32[i7 >> 2] | 0;
    i28 = HEAP32[i11 >> 2] | 0;
    i10 = i28 | 0;
    i30 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i30 | 0) == 0) {
     __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i28);
     __ZN3WTF8fastFreeEPv(i28);
    } else {
     HEAP32[i10 >> 2] = i30;
    }
    HEAP32[i11 >> 2] = i31;
    i38 = i31;
   }
   i31 = i38 + 292 | 0;
   HEAP32[i31 >> 2] = HEAP32[i31 >> 2] & -917505 | 131072;
   i37 = i27;
  } else {
   i37 = i26 + 16 | 0;
  }
 } while (0);
 i38 = i1 | 0;
 i7 = __ZNK7WebCore12RenderObject5themeEv(i38) | 0;
 HEAP32[i17 >> 2] = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 63](i7, HEAP32[i12 >> 2] | 0) | 0;
 HEAP8[i18 + 4 | 0] = 0;
 i7 = i18 + 5 | 0;
 HEAP8[i7] = 3;
 HEAP8[i18 + 6 | 0] = 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i37 >> 2] | 0) + 68 | 0, i18) | 0) {
   i29 = 48;
  } else {
   i16 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[i16 >> 2] | 0) == 1) {
    i39 = i16;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i6, i16);
    i16 = HEAP32[i6 >> 2] | 0;
    i15 = HEAP32[i37 >> 2] | 0;
    i36 = i15 | 0;
    i8 = (HEAP32[i36 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i15);
     __ZN3WTF8fastFreeEPv(i15);
    } else {
     HEAP32[i36 >> 2] = i8;
    }
    HEAP32[i37 >> 2] = i16;
    i39 = i16;
   }
   i16 = i39 + 68 | 0;
   if ((i16 | 0) == (i18 | 0)) {
    i29 = 48;
    break;
   }
   i8 = i16;
   i16 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i8 + 4 >> 2] = i16;
   HEAP8[i7] = 0;
  }
 } while (0);
 do {
  if ((i29 | 0) == 48) {
   if ((HEAP8[i7] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
  }
 } while (0);
 i18 = __ZNK7WebCore12RenderObject5themeEv(i38) | 0;
 HEAP32[i19 >> 2] = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i18 >> 2] | 0) + 108 >> 2] & 63](i18, HEAP32[i12 >> 2] | 0) | 0;
 HEAP8[i20 + 4 | 0] = 0;
 i18 = i20 + 5 | 0;
 HEAP8[i18] = 3;
 HEAP8[i20 + 6 | 0] = 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i37 >> 2] | 0) + 76 | 0, i20) | 0) {
   i29 = 58;
  } else {
   i7 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[i7 >> 2] | 0) == 1) {
    i40 = i7;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i5, i7);
    i7 = HEAP32[i5 >> 2] | 0;
    i17 = HEAP32[i37 >> 2] | 0;
    i39 = i17 | 0;
    i6 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
    if ((i6 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i17);
     __ZN3WTF8fastFreeEPv(i17);
    } else {
     HEAP32[i39 >> 2] = i6;
    }
    HEAP32[i37 >> 2] = i7;
    i40 = i7;
   }
   i7 = i40 + 76 | 0;
   if ((i7 | 0) == (i20 | 0)) {
    i29 = 58;
    break;
   }
   i6 = i7;
   i7 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i6 + 4 >> 2] = i7;
   HEAP8[i18] = 0;
  }
 } while (0);
 do {
  if ((i29 | 0) == 58) {
   if ((HEAP8[i18] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i20);
  }
 } while (0);
 i20 = __ZNK7WebCore12RenderObject5themeEv(i38) | 0;
 HEAP32[i21 >> 2] = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i20 >> 2] | 0) + 112 >> 2] & 63](i20, HEAP32[i12 >> 2] | 0) | 0;
 HEAP8[i22 + 4 | 0] = 0;
 i20 = i22 + 5 | 0;
 HEAP8[i20] = 3;
 HEAP8[i22 + 6 | 0] = 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i37 >> 2] | 0) + 84 | 0, i22) | 0) {
   i29 = 68;
  } else {
   i18 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[i18 >> 2] | 0) == 1) {
    i41 = i18;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i4, i18);
    i18 = HEAP32[i4 >> 2] | 0;
    i19 = HEAP32[i37 >> 2] | 0;
    i40 = i19 | 0;
    i5 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i5 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i19);
     __ZN3WTF8fastFreeEPv(i19);
    } else {
     HEAP32[i40 >> 2] = i5;
    }
    HEAP32[i37 >> 2] = i18;
    i41 = i18;
   }
   i18 = i41 + 84 | 0;
   if ((i18 | 0) == (i22 | 0)) {
    i29 = 68;
    break;
   }
   i5 = i18;
   i18 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i5 + 4 >> 2] = i18;
   HEAP8[i20] = 0;
  }
 } while (0);
 do {
  if ((i29 | 0) == 68) {
   if ((HEAP8[i20] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i22);
  }
 } while (0);
 i22 = __ZNK7WebCore12RenderObject5themeEv(i38) | 0;
 HEAP32[i23 >> 2] = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 63](i22, HEAP32[i12 >> 2] | 0) | 0;
 HEAP8[i24 + 4 | 0] = 0;
 i22 = i24 + 5 | 0;
 HEAP8[i22] = 3;
 HEAP8[i24 + 6 | 0] = 0;
 do {
  if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i37 >> 2] | 0) + 92 | 0, i24) | 0) {
   i29 = 78;
  } else {
   i38 = HEAP32[i37 >> 2] | 0;
   if ((HEAP32[i38 >> 2] | 0) == 1) {
    i42 = i38;
   } else {
    __ZNK7WebCore17StyleSurroundData4copyEv(i3, i38);
    i38 = HEAP32[i3 >> 2] | 0;
    i20 = HEAP32[i37 >> 2] | 0;
    i21 = i20 | 0;
    i41 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
    if ((i41 | 0) == 0) {
     __ZN7WebCore17StyleSurroundDataD2Ev(i20);
     __ZN3WTF8fastFreeEPv(i20);
    } else {
     HEAP32[i21 >> 2] = i41;
    }
    HEAP32[i37 >> 2] = i38;
    i42 = i38;
   }
   i38 = i42 + 92 | 0;
   if ((i38 | 0) == (i24 | 0)) {
    i29 = 78;
    break;
   }
   i41 = i38;
   i38 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i41 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i41 + 4 >> 2] = i38;
   HEAP8[i22] = 0;
  }
 } while (0);
 do {
  if ((i29 | 0) == 78) {
   if ((HEAP8[i22] | 0) != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i24);
  }
 } while (0);
 i24 = i1 + 4 | 0;
 if (__ZN7WebCore6Chrome35selectItemWritingDirectionIsNaturalEv(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) | 0) {
  i22 = i26 + 40 | 0;
  i23 = HEAP32[i22 >> 2] & -122881;
  HEAP32[i22 >> 2] = i23;
  i42 = HEAP32[i1 + 132 >> 2] | 0;
  if ((i42 | 0) == 0) {
   i43 = 1073741824;
   i44 = i23;
  } else {
   i23 = ((__ZN3WTF10StringImpl23defaultWritingDirectionEPb(HEAP32[i42 + 44 >> 2] | 0, 0) | 0) != 1) << 30;
   i43 = i23;
   i44 = HEAP32[i22 >> 2] | 0;
  }
  HEAP32[i22 >> 2] = i44 & -1073741825 | i43;
  STACKTOP = i2;
  return;
 }
 i43 = i1 + 152 | 0;
 if ((HEAP32[i43 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCore6Chrome46selectItemAlignmentFollowsMenuWritingDirectionEv(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i24 = HEAP32[i43 >> 2] | 0;
 i1 = i26 + 40 | 0;
 i44 = HEAP32[i1 >> 2] | 0;
 if (((i44 ^ HEAP32[i24 + 40 >> 2]) & 1073741824 | 0) == 0) {
  i22 = HEAP32[i26 + 48 >> 2] | 0;
  if (((i22 ^ HEAP32[i24 + 48 >> 2]) & 1879048192 | 0) == 0) {
   i45 = i44;
   i46 = i22;
  } else {
   i29 = 88;
  }
 } else {
  i29 = 88;
 }
 if ((i29 | 0) == 88) {
  i29 = HEAP32[i25 >> 2] | 0;
  i25 = i29 | 0;
  i22 = i29 + 20 | 0;
  i29 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i29 & 1 | 0) == 0) {
    HEAP32[i22 >> 2] = i29 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i25, 1, 0);
    if ((HEAP32[i22 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i25);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i25, 1, 1);
  i45 = HEAP32[i1 >> 2] | 0;
  i46 = HEAP32[i26 + 48 >> 2] | 0;
 }
 i25 = ((HEAP32[(HEAP32[i12 >> 2] | 0) + 40 >> 2] | 0) >>> 30 << 13 & 8192 | i45 & -122881) ^ 8192;
 HEAP32[i1 >> 2] = i25;
 HEAP32[i1 >> 2] = i25 & -1073856513 | HEAP32[(HEAP32[i43 >> 2] | 0) + 40 >> 2] & 1073741824;
 HEAP32[i26 + 48 >> 2] = i46 & -1879048193 | HEAP32[(HEAP32[i43 >> 2] | 0) + 48 >> 2] & 1879048192;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14RenderMenuList18updateOptionsWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, d44 = +0, d45 = +0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, d54 = +0, d55 = +0, d56 = +0, i57 = 0, i58 = 0, i59 = 0, d60 = +0, d61 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 64 | 0;
 i8 = i1 + 4 | 0;
 i9 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i9 + 8 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 L1 : do {
  if ((i11 | 0) > 0) {
   i12 = i9 | 0;
   i13 = i1 + 36 | 0;
   i14 = i1 | 0;
   i15 = i4 | 0;
   i16 = i6 + 4 | 0;
   i17 = i6 + 8 | 0;
   i18 = i6 + 12 | 0;
   i19 = i6 + 16 | 0;
   i20 = i6 + 20 | 0;
   i21 = i6 + 24 | 0;
   i22 = i6 + 28 | 0;
   i23 = i6 + 32 | 0;
   i24 = i6 | 0;
   i25 = i3 | 0;
   i26 = i5 | 0;
   i27 = i7 + 4 | 0;
   i28 = i7 + 8 | 0;
   i29 = i7 + 12 | 0;
   i30 = i7 + 16 | 0;
   i31 = i7 + 20 | 0;
   i32 = i7 + 24 | 0;
   i33 = i7 + 28 | 0;
   i34 = i7 + 32 | 0;
   i35 = i7 | 0;
   d36 = +0;
   i37 = 0;
   while (1) {
    if ((HEAP32[i10 >> 2] | 0) >>> 0 <= i37 >>> 0) {
     break;
    }
    i38 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i37 << 2) >> 2] | 0;
    L6 : do {
     if ((HEAP32[(HEAP32[i38 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i39 = i38 | 0;
      __ZNK7WebCore17HTMLOptionElement31textIndentedToRespectGroupLabelEv(i4, i38);
      __ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt(HEAP32[i13 >> 2] | 0, i4, 32);
      i40 = __ZNK7WebCore12RenderObject5themeEv(i14) | 0;
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 120 >> 2] & 511](i40) | 0) {
        i41 = i38 + 32 | 0;
        if ((HEAP32[i38 + 12 >> 2] & 2048 | 0) == 0) {
         i42 = i41 | 0;
        } else {
         i42 = HEAP32[i41 >> 2] | 0;
        }
        i41 = HEAP32[i42 >> 2] | 0;
        do {
         if ((i41 | 0) == 0) {
          i43 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 236 >> 2] & 511](i39) | 0;
         } else {
          if ((HEAP32[i41 + 20 >> 2] & 768 | 0) == 256) {
           i43 = HEAP32[(HEAP32[i41 + 8 >> 2] | 0) + 36 >> 2] | 0;
           break;
          } else {
           i43 = HEAP32[i41 + 36 >> 2] | 0;
           break;
          }
         }
        } while (0);
        if ((i43 | 0) == 0) {
         d44 = +0;
        } else {
         i41 = (HEAP32[i43 + 24 >> 2] | 0) + 72 | 0;
         HEAP32[i25 >> 2] = 0;
         __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i5, i41, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
         d44 = +(HEAP32[i26 >> 2] | 0);
        }
        i41 = HEAP32[i15 >> 2] | 0;
        do {
         if ((i41 | 0) == 0) {
          d45 = d44;
         } else {
          if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
           d45 = d44;
           break;
          }
          i46 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i13 >> 2] | 0) | 0;
          i47 = HEAP32[i15 >> 2] | 0;
          i48 = (i47 | 0) == 0;
          if (i48) {
           HEAP32[i16 >> 2] = 0;
           i49 = 0;
          } else {
           HEAP32[i16 >> 2] = HEAP32[i47 + 4 >> 2];
           i49 = HEAP32[i47 + 4 >> 2] | 0;
          }
          HEAP32[i17 >> 2] = i49;
          HEAPF32[i18 >> 2] = +0;
          HEAPF32[i19 >> 2] = +1;
          HEAPF32[i20 >> 2] = +0;
          i50 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
          i51 = i50 << 7 & 128 | (HEAP32[i21 >> 2] & -1020 | 81) | i50 << 8 & 256;
          HEAP32[i21 >> 2] = i51;
          HEAP32[i22 >> 2] = 0;
          HEAP32[i23 >> 2] = 0;
          do {
           if (i48) {
            i52 = 0;
            i53 = i51;
           } else {
            if ((HEAP32[i47 + 16 >> 2] & 32 | 0) == 0) {
             i52 = HEAP32[i47 + 8 >> 2] | 0;
             i53 = i51;
             break;
            } else {
             i50 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i47) | 0;
             i52 = i50;
             i53 = HEAP32[i21 >> 2] | 0;
             break;
            }
           }
          } while (0);
          HEAP32[i24 >> 2] = i52;
          HEAP32[i21 >> 2] = i53 & -5;
          d54 = d44 + +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i46, i6, 0, 0);
          i47 = HEAP32[i23 >> 2] | 0;
          if ((i47 | 0) == 0) {
           d45 = d54;
           break;
          }
          i51 = i47 + 4 | 0;
          i47 = i51 | 0;
          i48 = (HEAP32[i47 >> 2] | 0) - 1 | 0;
          if ((i48 | 0) != 0) {
           HEAP32[i47 >> 2] = i48;
           d45 = d54;
           break;
          }
          i48 = i51 - 4 | 0;
          if ((i48 | 0) == 0) {
           d45 = d54;
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 63](i48);
          d45 = d54;
         }
        } while (0);
        d55 = d36 < d45 ? d45 : d36;
       } else {
        i41 = HEAP32[i15 >> 2] | 0;
        if ((i41 | 0) == 0) {
         d56 = d36;
         break L6;
        }
        if ((HEAP32[i41 + 4 >> 2] | 0) == 0) {
         d55 = d36;
         break;
        }
        i41 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i13 >> 2] | 0) | 0;
        i48 = HEAP32[i15 >> 2] | 0;
        i51 = (i48 | 0) == 0;
        if (i51) {
         HEAP32[i27 >> 2] = 0;
         i57 = 0;
        } else {
         HEAP32[i27 >> 2] = HEAP32[i48 + 4 >> 2];
         i57 = HEAP32[i48 + 4 >> 2] | 0;
        }
        HEAP32[i28 >> 2] = i57;
        HEAPF32[i29 >> 2] = +0;
        HEAPF32[i30 >> 2] = +1;
        HEAPF32[i31 >> 2] = +0;
        i47 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
        i50 = i47 << 7 & 128 | (HEAP32[i32 >> 2] & -1020 | 81) | i47 << 8 & 256;
        HEAP32[i32 >> 2] = i50;
        HEAP32[i33 >> 2] = 0;
        HEAP32[i34 >> 2] = 0;
        do {
         if (i51) {
          i58 = 0;
          i59 = i50;
         } else {
          if ((HEAP32[i48 + 16 >> 2] & 32 | 0) == 0) {
           i58 = HEAP32[i48 + 8 >> 2] | 0;
           i59 = i50;
           break;
          } else {
           i47 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i48) | 0;
           i58 = i47;
           i59 = HEAP32[i32 >> 2] | 0;
           break;
          }
         }
        } while (0);
        HEAP32[i35 >> 2] = i58;
        HEAP32[i32 >> 2] = i59 & -5;
        d54 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i41, i7, 0, 0);
        d60 = d36 < d54 ? d54 : d36;
        i48 = HEAP32[i34 >> 2] | 0;
        if ((i48 | 0) == 0) {
         d55 = d60;
         break;
        }
        i50 = i48 + 4 | 0;
        i48 = i50 | 0;
        i51 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
        if ((i51 | 0) != 0) {
         HEAP32[i48 >> 2] = i51;
         d55 = d60;
         break;
        }
        i51 = i50 - 4 | 0;
        if ((i51 | 0) == 0) {
         d55 = d60;
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 63](i51);
        d55 = d60;
       }
      } while (0);
      i39 = HEAP32[i15 >> 2] | 0;
      if ((i39 | 0) == 0) {
       d56 = d55;
       break;
      }
      i40 = i39 | 0;
      i51 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
      if ((i51 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i39);
       d56 = d55;
       break;
      } else {
       HEAP32[i40 >> 2] = i51;
       d56 = d55;
       break;
      }
     } else {
      d56 = d36;
     }
    } while (0);
    i38 = i37 + 1 | 0;
    if ((i38 | 0) < (i11 | 0)) {
     d36 = d56;
     i37 = i38;
    } else {
     d61 = d56;
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  } else {
   d61 = +0;
  }
 } while (0);
 i11 = ~~+Math_ceil(d61);
 i7 = i1 + 144 | 0;
 do {
  if ((HEAP32[i7 >> 2] | 0) != (i11 | 0)) {
   HEAP32[i7 >> 2] = i11;
   i59 = i1 | 0;
   if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
    break;
   }
   i58 = i1 + 20 | 0;
   i57 = HEAP32[i58 >> 2] | 0;
   do {
    if ((i57 & 1 | 0) == 0) {
     HEAP32[i58 >> 2] = i57 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i59, 1, 0);
     if ((HEAP32[i58 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i59);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i59, 1, 1);
  }
 } while (0);
 i1 = __ZN7WebCore9fontCacheEv() | 0;
 i11 = i1 | 0;
 i7 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
 HEAP32[i11 >> 2] = i7;
 if ((i7 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore14RenderMenuList29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, d29 = +0, d30 = +0, i31 = 0, d32 = +0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, d37 = +0, i38 = 0, d39 = +0, i40 = 0, d41 = +0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, i75 = 0, d76 = +0, i77 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 72 | 0;
 i13 = i2 + 80 | 0;
 i14 = i2 + 88 | 0;
 i15 = i2 + 96 | 0;
 i16 = i2 + 104 | 0;
 i17 = i1 | 0;
 i18 = i1 + 76 | 0;
 i19 = i18 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i1 + 80 | 0;
 i21 = i20 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 36 | 0;
 i23 = HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0;
 i24 = i23 + 4 | 0;
 do {
  if ((HEAP8[i23 + 9 | 0] | 0) == 3) {
   i25 = (HEAP8[i23 + 10 | 0] & 1) == 0;
   if (i25) {
    i26 = HEAP32[i24 >> 2] | 0;
    d27 = +(i26 | 0);
    i28 = i26;
    d29 = (HEAP32[tempDoublePtr >> 2] = i26, +HEAPF32[tempDoublePtr >> 2]);
   } else {
    d30 = +HEAPF32[i24 >> 2];
    d27 = d30;
    i28 = (HEAPF32[tempDoublePtr >> 2] = d30, HEAP32[tempDoublePtr >> 2] | 0);
    d29 = d30;
   }
   if (d27 <= +0) {
    i31 = 12;
    break;
   }
   if (i25) {
    d32 = +(i28 | 0);
   } else {
    d32 = d29;
   }
   do {
    if (d32 < +2147483647) {
     if (d32 <= +-2147483648) {
      i33 = -2147483648;
      break;
     }
     i33 = ~~d32;
    } else {
     i33 = 2147483647;
    }
   } while (0);
   HEAP32[i8 >> 2] = i33;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i7, i17, i8);
   i25 = HEAP32[i7 >> 2] | 0;
   HEAP32[i21 >> 2] = i25;
   HEAP32[i19 >> 2] = i25;
   i34 = HEAP32[i22 >> 2] | 0;
  } else {
   i31 = 12;
  }
 } while (0);
 do {
  if ((i31 | 0) == 12) {
   i7 = __ZNK7WebCore12RenderObject5themeEv(i1 | 0) | 0;
   i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 96 >> 2] & 63](i7, HEAP32[i22 >> 2] | 0) | 0;
   i7 = HEAP32[i1 + 144 >> 2] | 0;
   i33 = i1 + 136 | 0;
   i28 = HEAP32[i33 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i28 >> 2] | 0) + 712 >> 2] & 127](i3, i28 | 0);
   i28 = (HEAP32[i3 >> 2] | 0) + ((i7 | 0) < (i8 | 0) ? i8 : i7) | 0;
   i7 = HEAP32[i33 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 716 >> 2] & 127](i4, i7 | 0);
   i7 = i28 + (HEAP32[i4 >> 2] | 0) | 0;
   HEAP32[i21 >> 2] = i7;
   i28 = HEAP32[i22 >> 2] | 0;
   i33 = HEAP8[(HEAP32[i28 + 4 >> 2] | 0) + 9 | 0] | 0;
   if ((i33 << 24 >> 24 | 0) == 10 | (i33 << 24 >> 24 | 0) == 2) {
    i34 = i28;
    break;
   }
   HEAP32[i19 >> 2] = i7;
   i34 = i28;
  }
 } while (0);
 i4 = HEAP32[i34 + 4 >> 2] | 0;
 i34 = i4 + 20 | 0;
 do {
  if ((HEAP8[i4 + 25 | 0] | 0) == 3) {
   i3 = (HEAP8[i4 + 26 | 0] & 1) == 0;
   if (i3) {
    i31 = HEAP32[i34 >> 2] | 0;
    d35 = +(i31 | 0);
    i36 = i31;
    d37 = (HEAP32[tempDoublePtr >> 2] = i31, +HEAPF32[tempDoublePtr >> 2]);
   } else {
    d32 = +HEAPF32[i34 >> 2];
    d35 = d32;
    i36 = (HEAPF32[tempDoublePtr >> 2] = d32, HEAP32[tempDoublePtr >> 2] | 0);
    d37 = d32;
   }
   if (d35 <= +0) {
    i38 = i4;
    break;
   }
   if (i3) {
    d39 = +(i36 | 0);
   } else {
    d39 = d37;
   }
   do {
    if (d39 < +2147483647) {
     if (d39 <= +-2147483648) {
      i40 = -2147483648;
      break;
     }
     i40 = ~~d39;
    } else {
     i40 = 2147483647;
    }
   } while (0);
   HEAP32[i10 >> 2] = i40;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i9, i17, i10);
   HEAP32[i21 >> 2] = HEAP32[((HEAP32[i21 >> 2] | 0) < (HEAP32[i9 >> 2] | 0) ? i9 : i20) >> 2];
   i3 = HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0;
   i31 = i3 + 20 | 0;
   if ((HEAP8[i3 + 26 | 0] & 1) == 0) {
    d41 = +(HEAP32[i31 >> 2] | 0);
   } else {
    d41 = +HEAPF32[i31 >> 2];
   }
   do {
    if (d41 < +2147483647) {
     if (d41 <= +-2147483648) {
      i42 = -2147483648;
      break;
     }
     i42 = ~~d41;
    } else {
     i42 = 2147483647;
    }
   } while (0);
   HEAP32[i12 >> 2] = i42;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i11, i17, i12);
   HEAP32[i19 >> 2] = HEAP32[((HEAP32[i19 >> 2] | 0) < (HEAP32[i11 >> 2] | 0) ? i11 : i18) >> 2];
   i38 = HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0;
  } else {
   i38 = i4;
  }
 } while (0);
 i4 = i38 + 28 | 0;
 if ((HEAP8[i38 + 33 | 0] | 0) != 3) {
  i43 = i1 | 0;
  i44 = i5;
  i45 = i6;
  i46 = i1;
  i47 = HEAP32[i46 >> 2] | 0;
  i48 = i47 + 744 | 0;
  i49 = HEAP32[i48 >> 2] | 0;
  i50 = FUNCTION_TABLE_ii[i49 & 511](i43) | 0;
  i51 = HEAP32[i46 >> 2] | 0;
  i52 = i51 + 748 | 0;
  i53 = HEAP32[i52 >> 2] | 0;
  i54 = FUNCTION_TABLE_ii[i53 & 511](i43) | 0;
  i55 = i54 + i50 | 0;
  i56 = i1;
  i57 = HEAP32[i56 >> 2] | 0;
  i58 = i57 + 712 | 0;
  i59 = HEAP32[i58 >> 2] | 0;
  FUNCTION_TABLE_vii[i59 & 127](i5, i43);
  i60 = i5 | 0;
  i61 = HEAP32[i60 >> 2] | 0;
  i62 = i55 + i61 | 0;
  i63 = HEAP32[i56 >> 2] | 0;
  i64 = i63 + 716 | 0;
  i65 = HEAP32[i64 >> 2] | 0;
  FUNCTION_TABLE_vii[i65 & 127](i6, i43);
  i66 = i6 | 0;
  i67 = HEAP32[i66 >> 2] | 0;
  i68 = i62 + i67 | 0;
  i69 = HEAP32[i19 >> 2] | 0;
  i70 = i69 + i68 | 0;
  HEAP32[i19 >> 2] = i70;
  i71 = HEAP32[i21 >> 2] | 0;
  i72 = i71 + i68 | 0;
  HEAP32[i21 >> 2] = i72;
  i73 = i1 | 0;
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i73, 0, 1);
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i38 + 34 | 0] & 1) == 0) {
  d74 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d74 = +HEAPF32[i4 >> 2];
 }
 do {
  if (d74 < +2147483647) {
   if (d74 <= +-2147483648) {
    i75 = -2147483648;
    break;
   }
   i75 = ~~d74;
  } else {
   i75 = 2147483647;
  }
 } while (0);
 HEAP32[i14 >> 2] = i75;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i13, i17, i14);
 HEAP32[i21 >> 2] = HEAP32[((HEAP32[i13 >> 2] | 0) < (HEAP32[i21 >> 2] | 0) ? i13 : i20) >> 2];
 i20 = HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0;
 i22 = i20 + 28 | 0;
 if ((HEAP8[i20 + 34 | 0] & 1) == 0) {
  d76 = +(HEAP32[i22 >> 2] | 0);
 } else {
  d76 = +HEAPF32[i22 >> 2];
 }
 do {
  if (d76 < +2147483647) {
   if (d76 <= +-2147483648) {
    i77 = -2147483648;
    break;
   }
   i77 = ~~d76;
  } else {
   i77 = 2147483647;
  }
 } while (0);
 HEAP32[i16 >> 2] = i77;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i15, i17, i16);
 HEAP32[i19 >> 2] = HEAP32[((HEAP32[i15 >> 2] | 0) < (HEAP32[i19 >> 2] | 0) ? i15 : i18) >> 2];
 i43 = i1 | 0;
 i44 = i5;
 i45 = i6;
 i46 = i1;
 i47 = HEAP32[i46 >> 2] | 0;
 i48 = i47 + 744 | 0;
 i49 = HEAP32[i48 >> 2] | 0;
 i50 = FUNCTION_TABLE_ii[i49 & 511](i43) | 0;
 i51 = HEAP32[i46 >> 2] | 0;
 i52 = i51 + 748 | 0;
 i53 = HEAP32[i52 >> 2] | 0;
 i54 = FUNCTION_TABLE_ii[i53 & 511](i43) | 0;
 i55 = i54 + i50 | 0;
 i56 = i1;
 i57 = HEAP32[i56 >> 2] | 0;
 i58 = i57 + 712 | 0;
 i59 = HEAP32[i58 >> 2] | 0;
 FUNCTION_TABLE_vii[i59 & 127](i5, i43);
 i60 = i5 | 0;
 i61 = HEAP32[i60 >> 2] | 0;
 i62 = i55 + i61 | 0;
 i63 = HEAP32[i56 >> 2] | 0;
 i64 = i63 + 716 | 0;
 i65 = HEAP32[i64 >> 2] | 0;
 FUNCTION_TABLE_vii[i65 & 127](i6, i43);
 i66 = i6 | 0;
 i67 = HEAP32[i66 >> 2] | 0;
 i68 = i62 + i67 | 0;
 i69 = HEAP32[i19 >> 2] | 0;
 i70 = i69 + i68 | 0;
 HEAP32[i19 >> 2] = i70;
 i71 = HEAP32[i21 >> 2] | 0;
 i72 = i71 + i68 | 0;
 HEAP32[i21 >> 2] = i72;
 i73 = i1 | 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i73, 0, 1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14RenderMenuList15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i4 + 72 | 0;
 i15 = i4 + 80 | 0;
 i16 = i4 + 88 | 0;
 i17 = i4 + 96 | 0;
 i18 = i4 + 104 | 0;
 i19 = i4 + 112 | 0;
 i20 = i4 + 120 | 0;
 i21 = i4 + 128 | 0;
 i22 = i4 + 144 | 0;
 i23 = i4 + 152 | 0;
 i24 = i3 | 0;
 i25 = HEAP32[i24 >> 2] | 0;
 i26 = i2 | 0;
 i27 = i2 + 36 | 0;
 i28 = HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] | 0;
 i29 = HEAP32[i28 + 104 >> 2] | 0;
 if ((HEAP32[(HEAP32[i28 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i29 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i30 = 0;
  } else {
   i31 = 3;
  }
 } else {
  i31 = 3;
 }
 if ((i31 | 0) == 3) {
  i30 = i29 >>> 1 & 67108863;
 }
 i29 = i15;
 i32 = i28 + 68 | 0;
 i28 = HEAP32[i32 >> 2] | 0;
 i33 = HEAP32[i32 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = i28;
 HEAP32[i15 + 4 >> 2] = i33;
 if ((i28 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i19, i26, i29);
 if ((HEAP8[i29 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
 }
 i29 = i30 + i25 + (HEAP32[i19 >> 2] | 0) | 0;
 i19 = i3 + 4 | 0;
 i3 = HEAP32[i19 >> 2] | 0;
 i25 = HEAP32[(HEAP32[i27 >> 2] | 0) + 16 >> 2] | 0;
 i27 = HEAP32[i25 + 120 >> 2] | 0;
 if ((HEAP32[(HEAP32[i25 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i27 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i34 = 0;
  } else {
   i31 = 10;
  }
 } else {
  i31 = 10;
 }
 if ((i31 | 0) == 10) {
  i34 = i27 >>> 1 & 67108863;
 }
 i27 = i11;
 i31 = i25 + 84 | 0;
 i25 = HEAP32[i31 >> 2] | 0;
 i30 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i25;
 HEAP32[i11 + 4 >> 2] = i30;
 if ((i25 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i27);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i20, i26, i27);
 if ((HEAP8[i27 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i27);
 }
 i27 = i34 + i3 + (HEAP32[i20 >> 2] | 0) | 0;
 i20 = i2 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i8, i20);
 i3 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 712 >> 2] & 127](i9, i26);
 i34 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 716 >> 2] & 127](i10, i26);
 i9 = i34 - (HEAP32[i10 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i5, i20);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 704 >> 2] & 127](i6, i26);
 i20 = (HEAP32[i5 >> 2] | 0) - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 708 >> 2] & 127](i7, i26);
 i26 = i20 - (HEAP32[i7 >> 2] | 0) | 0;
 i7 = i2 + 136 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i20 = (HEAP32[i2 + 44 >> 2] | 0) + (HEAP32[i24 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i22, i2 | 0);
 i2 = i20 + (HEAP32[i22 >> 2] | 0) | 0;
 i22 = HEAP32[i7 >> 2] | 0;
 i20 = (HEAP32[i22 + 48 >> 2] | 0) + (HEAP32[i19 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 704 >> 2] & 127](i23, i22 | 0);
 i22 = i20 + (HEAP32[i23 >> 2] | 0) | 0;
 i23 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i12, i23 | 0);
 i20 = i23 | 0;
 i19 = i23;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i13, i20);
 i23 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i14, i20);
 i20 = i23 - (HEAP32[i14 >> 2] | 0) | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i16, i14 | 0);
 i7 = i14 | 0;
 i23 = i14;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 704 >> 2] & 127](i17, i7);
 i14 = (HEAP32[i16 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 708 >> 2] & 127](i18, i7);
 i7 = i14 - (HEAP32[i18 >> 2] | 0) | 0;
 HEAP32[i21 >> 2] = i2;
 HEAP32[i21 + 4 >> 2] = i22;
 HEAP32[i21 + 8 >> 2] = i20;
 HEAP32[i21 + 12 >> 2] = i7;
 HEAP32[i1 >> 2] = i29;
 HEAP32[i1 + 4 >> 2] = i27;
 HEAP32[i1 + 8 >> 2] = i9;
 HEAP32[i1 + 12 >> 2] = i26;
 __ZN7WebCore10LayoutRect9intersectERKS0_(i1, i21);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore14RenderMenuList9itemStyleEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 i13 = HEAP32[i12 + 8 >> 2] | 0;
 do {
  if (i13 >>> 0 > i3 >>> 0) {
   i14 = i3;
  } else {
   if ((i3 | 0) != 0) {
    i14 = 0;
    break;
   }
   __ZNK7WebCore14RenderMenuList9menuStyleEv(i1, i2);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if (i13 >>> 0 <= i14 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i14 << 2) >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP8[i6 + 4 | 0] = 0;
 __ZNK7WebCore14RenderMenuList22getItemBackgroundColorEjRNS_5ColorERb(i2, i14, i6, i7);
 i6 = i13 | 0;
 i14 = i13 + 12 | 0;
 i12 = i13 + 32 | 0;
 if ((HEAP32[i14 >> 2] & 2048 | 0) == 0) {
  i15 = i12 | 0;
 } else {
  i15 = HEAP32[i12 >> 2] | 0;
 }
 i3 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 236 >> 2] & 511](i6) | 0;
  } else {
   if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
    i16 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i16 = HEAP32[i3 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i16 | 0) == 0) {
   i17 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 176 >> 2] & 63](i13 | 0, 0) | 0;
  } else {
   if ((HEAP32[i14 >> 2] & 2048 | 0) == 0) {
    i18 = i12 | 0;
   } else {
    i18 = HEAP32[i12 >> 2] | 0;
   }
   i3 = HEAP32[i18 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 236 >> 2] & 511](i6) | 0;
    break;
   }
   if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
    i17 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i17 = HEAP32[i3 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i17 | 0) == 0) {
  __ZNK7WebCore14RenderMenuList9menuStyleEv(i1, i2);
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, i17, 1);
 i9 = __ZNK7WebCore11RenderStyle4fontEv(i17) | 0;
 i2 = i17 + 40 | 0;
 i6 = (HEAP32[i2 >> 2] & 6144 | 0) == 0;
 i13 = i17 + 48 | 0;
 i18 = (HEAP32[i13 >> 2] & 31 | 0) == 22;
 i12 = (HEAP32[i17 + 24 >> 2] | 0) + 72 | 0;
 i17 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i17;
 HEAP32[i10 + 4 >> 2] = i14;
 if ((i17 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 i14 = (HEAP32[i2 >> 2] | 0) >>> 30 & 1;
 i2 = (HEAP32[i13 >> 2] | 0) >>> 28 & 7;
 i13 = HEAP8[i7] & 1;
 i7 = i1;
 i17 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = i17;
 i17 = i1 + 8 | 0;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i17 + 4 >> 2] = i7;
 __ZN7WebCore4FontC1ERKS0_(i1 + 16 | 0, i9);
 HEAP8[i1 + 56 | 0] = i6 & 1;
 HEAP8[i1 + 57 | 0] = i18 & 1;
 i18 = i1 + 60 | 0;
 i6 = i18;
 i9 = HEAP32[i10 >> 2] | 0;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i7;
 if ((i9 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i18);
 }
 HEAP32[i1 + 68 >> 2] = i14;
 HEAP8[i1 + 72 | 0] = ((i2 | 0) == 2 | (i2 | 0) == 5) & 1;
 HEAP32[i1 + 76 >> 2] = i13;
 HEAP32[i1 + 80 >> 2] = 0;
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14RenderMenuList17setTextFromOptionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 4 | 0;
 i8 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i7 >> 2] | 0) | 0;
 i9 = i8 + 8 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = __ZNK7WebCore17HTMLSelectElement17optionToListIndexEi(HEAP32[i7 >> 2] | 0, i2) | 0;
 i2 = i4 | 0;
 i7 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 if ((i7 | 0) != 0) {
  i12 = i7 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
 }
 do {
  if ((i11 | 0) > -1 & (i11 | 0) < (i10 | 0)) {
   if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i11 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i11 << 2) >> 2] | 0;
   i7 = i12 | 0;
   i13 = i12 + 12 | 0;
   if ((HEAP32[i13 >> 2] & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZNK7WebCore17HTMLOptionElement31textIndentedToRespectGroupLabelEv(i5, i12);
   i14 = i5 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i16 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i15;
   do {
    if ((i16 | 0) != 0) {
     i15 = i16 | 0;
     i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i15 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i17 = i16 | 0;
     i15 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i17 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i16 = i12 + 32 | 0;
   if ((HEAP32[i13 >> 2] & 2048 | 0) == 0) {
    i18 = i16 | 0;
   } else {
    i18 = HEAP32[i16 >> 2] | 0;
   }
   i16 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 236 >> 2] & 511](i7) | 0;
    } else {
     if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
      i19 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
      break;
     } else {
      i19 = HEAP32[i16 + 36 >> 2] | 0;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) != 0) {
    i16 = i19 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = i1 + 152 | 0;
   i7 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = i19;
   if ((i7 | 0) == 0) {
    break;
   }
   i16 = i7 | 0;
   i12 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11RenderStyleD2Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i16 >> 2] = i12;
    break;
   }
  }
 } while (0);
 __ZNK3WTF6String15stripWhiteSpaceEv(i6, i4);
 __ZN7WebCore14RenderMenuList7setTextERKN3WTF6StringE(i1, i6);
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
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14RenderMenuList9showPopupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i6 = i1 + 160 | 0;
 if ((HEAP8[i6] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 | 0;
 i10 = i1 + 4 | 0;
 if (__ZNK7WebCore6Chrome14hasOpenedPopupEv(HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0) | 0) {
  STACKTOP = i2;
  return;
 }
 i11 = i1 + 136 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  HEAP32[i11 >> 2] = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i9, 1) | 0;
  __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
  __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, HEAP32[i11 >> 2] | 0, 0);
 }
 i11 = i1 + 156 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   __ZNK7WebCore6Chrome15createPopupMenuEPNS_15PopupMenuClientE(i3, HEAP32[(__ZNK7WebCore8Document4pageEv(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) + 20 >> 2] | 0, i1 + 128 | 0);
   i12 = i3 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i13;
   do {
    if ((i14 | 0) != 0) {
     i13 = i14 + 4 | 0;
     i15 = i13 | 0;
     i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i15 >> 2] = i16;
      break;
     }
     i16 = i13 - 4 | 0;
     if ((i16 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 63](i16);
    }
   } while (0);
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i16 = i14 + 4 | 0;
   i14 = i16 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i14 >> 2] = i13;
    break;
   }
   i13 = i16 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
  }
 } while (0);
 HEAP8[i6] = 1;
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i4, i9, i5, 2);
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i8, i9, 0);
 d17 = +_round(+(+HEAPF32[i4 >> 2]));
 do {
  if (d17 < +2147483647) {
   if (d17 <= +-2147483648) {
    i18 = 0;
    i19 = -2147483648;
    break;
   }
   i18 = 0;
   i19 = ~~d17;
  } else {
   i18 = 0;
   i19 = 2147483647;
  }
 } while (0);
 d17 = +_round(+(+HEAPF32[i4 + 4 >> 2]));
 do {
  if (d17 < +2147483647) {
   if (d17 <= +-2147483648) {
    i20 = -2147483648;
    i21 = 0;
    break;
   }
   i20 = ~~d17;
   i21 = 0;
  } else {
   i20 = 2147483647;
   i21 = 0;
  }
 } while (0);
 HEAP32[i7 >> 2] = i21 | i19;
 HEAP32[i7 + 4 >> 2] = i20 | i18;
 i18 = HEAP32[i11 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] | 0;
 i20 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i20 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i7 = i20;
 i20 = __ZNK7WebCore17HTMLSelectElement17optionToListIndexEi(i7, __ZNK7WebCore17HTMLSelectElement13selectedIndexEv(i7) | 0) | 0;
 FUNCTION_TABLE_viiii[i11 & 31](i18, i8, i10, i20);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore14RenderMenuList22getItemBackgroundColorEjRNS_5ColorERb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i13 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, HEAP32[i1 + 36 >> 2] | 0, 23);
  i14 = i3;
  i15 = i6;
  HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
  HEAP8[i14 + 4 | 0] = HEAP8[i15 + 4 | 0] | 0;
  HEAP8[i4] = 0;
  STACKTOP = i5;
  return;
 }
 i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 i2 = i7 | 0;
 HEAP32[i2 >> 2] = 0;
 i13 = i7 + 4 | 0;
 HEAP8[i13] = 0;
 i14 = i15 | 0;
 i6 = i15 + 12 | 0;
 i16 = i15 + 32 | 0;
 if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
  i17 = i16 | 0;
 } else {
  i17 = HEAP32[i16 >> 2] | 0;
 }
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 236 >> 2] & 511](i14) | 0;
  } else {
   if ((HEAP32[i18 + 20 >> 2] & 768 | 0) == 256) {
    i19 = HEAP32[(HEAP32[i18 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i19 = HEAP32[i18 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i19 | 0) != 0) {
  if ((HEAP32[i6 >> 2] & 2048 | 0) == 0) {
   i20 = i16 | 0;
  } else {
   i20 = HEAP32[i16 >> 2] | 0;
  }
  i16 = HEAP32[i20 >> 2] | 0;
  do {
   if ((i16 | 0) == 0) {
    i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 236 >> 2] & 511](i14) | 0;
   } else {
    if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
     i21 = HEAP32[(HEAP32[i16 + 8 >> 2] | 0) + 36 >> 2] | 0;
     break;
    } else {
     i21 = HEAP32[i16 + 36 >> 2] | 0;
     break;
    }
   }
  } while (0);
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i8, i21, 23);
  i21 = i7;
  i16 = i8;
  HEAP32[i21 >> 2] = HEAP32[i16 >> 2];
  HEAP8[i21 + 4 | 0] = HEAP8[i16 + 4 | 0] | 0;
 }
 i16 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[i13] & 1) == 0) {
  i22 = 0;
 } else {
  i22 = i16 >>> 0 > 16777215 >>> 0 | 0;
 }
 HEAP8[i4] = i22;
 if ((i16 & -16777216 | 0) == -16777216) {
  i16 = i3;
  i22 = i7;
  HEAP32[i16 >> 2] = HEAP32[i22 >> 2];
  HEAP8[i16 + 4 | 0] = HEAP8[i22 + 4 | 0] | 0;
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i10, HEAP32[i1 + 36 >> 2] | 0, 23);
 __ZNK7WebCore5Color5blendERKS0_(i9, i10, i7);
 i10 = i7;
 i1 = i9;
 HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
 HEAP8[i10 + 4 | 0] = HEAP8[i1 + 4 | 0] | 0;
 if ((HEAP32[i2 >> 2] & -16777216 | 0) == -16777216) {
  i2 = i3;
  HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
  HEAP8[i2 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i12 >> 2] = -1;
  HEAP8[i12 + 4 | 0] = 1;
  __ZNK7WebCore5Color5blendERKS0_(i11, i12, i7);
  i7 = i3;
  i3 = i11;
  HEAP32[i7 >> 2] = HEAP32[i3 >> 2];
  HEAP8[i7 + 4 | 0] = HEAP8[i3 + 4 | 0] | 0;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore14RenderMenuList8itemTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 i9 = i8 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i10 = i5 | 0;
 HEAP32[i10 >> 2] = 0;
 if ((HEAP32[i9 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i3 << 2) >> 2] | 0;
 i3 = i9 | 0;
 do {
  if ((HEAP32[i9 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    __ZNK7WebCore19HTMLOptGroupElement14groupLabelTextEv(i6, i9);
    i8 = i6 | 0;
    i11 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    i12 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = i11;
    do {
     if ((i12 | 0) != 0) {
      i11 = i12 | 0;
      i13 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i11 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i12 = HEAP32[i8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = i12 | 0;
    i11 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
     break;
    } else {
     HEAP32[i13 >> 2] = i11;
     break;
    }
   }
   if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   __ZNK7WebCore17HTMLOptionElement31textIndentedToRespectGroupLabelEv(i7, i9);
   i11 = i7 | 0;
   i13 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i12 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i13;
   do {
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i12);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i12 = HEAP32[i11 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i8 = i12 | 0;
   i14 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i14 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    break;
   } else {
    HEAP32[i8 >> 2] = i14;
    break;
   }
  }
 } while (0);
 __ZN7WebCore18applyTextTransformERKNS_11RenderStyleERN3WTF6StringEt(HEAP32[i2 + 36 >> 2] | 0, i5, 32);
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 STACKTOP = i4;
 return;
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
function __ZN7WebCore14RenderMenuList7setTextERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = 3;
  } else {
   if ((HEAP32[i7 + 4 >> 2] | 0) == 0) {
    i8 = 3;
    break;
   }
   HEAP32[i4 >> 2] = i7;
   i2 = i7 | 0;
   HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  HEAP32[i5 >> 2] = H_BASE + 24;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i4, i5);
 }
 i5 = i1 + 132 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i7 = __ZN3WTF10fastMallocEj(56) | 0;
   i2 = i7;
   i9 = i1 + 4 | 0;
   __ZN7WebCore10RenderTextC1ERNS_8DocumentERKN3WTF6StringE(i2, HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i4);
   HEAP32[i5 >> 2] = i2;
   i2 = i1 + 136 | 0;
   i10 = HEAP32[i2 >> 2] | 0;
   if ((i10 | 0) == 0) {
    HEAP32[i2 >> 2] = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i1 | 0, 1) | 0;
    __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
    __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, HEAP32[i2 >> 2] | 0, 0);
    i11 = HEAP32[i2 >> 2] | 0;
   } else {
    i11 = i10;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 628 >> 2] & 127](i11, i7, 0);
   __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   i12 = i4 | 0;
  } else {
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 644 >> 2] | 0;
   i7 = i4 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   i2 = i6 | 0;
   HEAP32[i2 >> 2] = i10;
   if ((i10 | 0) != 0) {
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
   }
   FUNCTION_TABLE_viii[i9 & 127](i8, i6, 1);
   i9 = HEAP32[i2 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i12 = i7;
    break;
   }
   i2 = i9 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    i12 = i7;
    break;
   } else {
    HEAP32[i2 >> 2] = i13;
    i12 = i7;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
 i1 = HEAP32[i12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i12 = i1 | 0;
 i6 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i12 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore14RenderMenuList9menuStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 136 >> 2] | 0;
 i9 = i2 + 36 | 0;
 i2 = HEAP32[((i8 | 0) == 0 ? i9 : i8 + 36 | 0) >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i2, 1);
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, i2, 23);
 i8 = __ZNK7WebCore11RenderStyle4fontEv(i2) | 0;
 i10 = (HEAP32[i2 + 40 >> 2] & 6144 | 0) == 0;
 i11 = (HEAP32[i2 + 48 >> 2] & 31 | 0) == 22;
 i12 = (HEAP32[i2 + 24 >> 2] | 0) + 72 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i13;
 if ((i2 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i13 = HEAP32[i9 >> 2] | 0;
 i9 = (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1;
 i2 = (HEAP32[i13 + 48 >> 2] | 0) >>> 28 & 7;
 i13 = i1;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i13 + 4 >> 2] = i12;
 i12 = i1 + 8 | 0;
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i12 + 4 >> 2] = i13;
 __ZN7WebCore4FontC1ERKS0_(i1 + 16 | 0, i8);
 HEAP8[i1 + 56 | 0] = i10 & 1;
 HEAP8[i1 + 57 | 0] = i11 & 1;
 i11 = i1 + 60 | 0;
 i10 = i11;
 i8 = HEAP32[i6 >> 2] | 0;
 i13 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 HEAP32[i10 + 4 >> 2] = i13;
 if ((i8 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
 }
 HEAP32[i1 + 68 >> 2] = i9;
 HEAP8[i1 + 72 | 0] = ((i2 | 0) == 2 | (i2 | 0) == 5) & 1;
 HEAP32[i1 + 76 >> 2] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
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
function __ZN7WebCore11RenderStyle13setFlexShrinkEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (+HEAPF32[(HEAP32[i8 + 60 >> 2] | 0) + 8 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 60 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore20StyleFlexibleBoxData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = i4 | 0;
  i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   if ((HEAP8[i4 + 17 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7 + 12 | 0);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i1;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAPF32[i12 + 8 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle11setFlexGrowEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i1);
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i9 = i6 | 0;
  i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i9 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i1;
  i8 = i1;
 }
 if (+HEAPF32[(HEAP32[i8 + 60 >> 2] | 0) + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i1 = i5 | 0;
  i10 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i10;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 60 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore20StyleFlexibleBoxData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = i4 | 0;
  i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i1 | 0) == 0) {
   if ((HEAP8[i4 + 17 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7 + 12 | 0);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i1;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAPF32[i12 + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore9RenderBox13requiresLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 25165824 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i5 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i6 = 19;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 19) {
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 296 >> 2] & 4063232 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 212 >> 2] | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 196608 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 292 >> 2] & 1024 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i2 & 262144 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = (HEAP32[i1 + 68 >> 2] | 0) + 32 | 0;
 if ((HEAP8[i2] & 3) != 3) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = (HEAP32[i2 >> 2] | 0) >>> 11 & 3;
 do {
  if ((i1 | 0) != 2) {
   i2 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i1 | 0) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0;
 return i3 | 0;
}
function __ZNK7WebCore14RenderMenuList21itemAccessibilityTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0) + 48 >> 2] | 0;
 L5 : do {
  if ((i2 | 0) == 0) {
   i5 = __ZN3WTF8nullAtomE;
  } else {
   i3 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i3 & 1 | 0) == 0) {
    i6 = i3 >>> 1 & 134217727;
    i7 = i2 + 20 | 0;
   } else {
    i3 = i2 + 24 | 0;
    i6 = HEAP32[i3 + 8 >> 2] | 0;
    i7 = HEAP32[i3 >> 2] | 0;
   }
   if ((i6 | 0) == 0) {
    i5 = __ZN3WTF8nullAtomE;
    break;
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames14aria_labelAttrE >> 2] | 0;
   i4 = i3 + 12 | 0;
   i8 = i3 + 16 | 0;
   i9 = 0;
   while (1) {
    i10 = i7 + (i9 << 3) | 0;
    i11 = HEAP32[i10 >> 2] | 0;
    if ((i11 | 0) == (i3 | 0)) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
     if ((HEAP32[i11 + 16 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
      break;
     }
    }
    i11 = i9 + 1 | 0;
    if (i11 >>> 0 < i6 >>> 0) {
     i9 = i11;
    } else {
     i5 = __ZN3WTF8nullAtomE;
     break L5;
    }
   }
   i5 = (i10 | 0) == 0 ? __ZN3WTF8nullAtomE : i7 + (i9 << 3) + 4 | 0;
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 if ((i7 | 0) == 0) {
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore14RenderMenuListD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 HEAP32[i1 + 128 >> 2] = H_BASE + 1312;
 i2 = i1 + 156 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 63](i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = i5 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    } else {
     HEAP32[i4 >> 2] = i6;
    }
   } while (0);
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 4 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 }
}
function __ZN7WebCore14RenderMenuListD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 40;
 HEAP32[i1 + 128 >> 2] = H_BASE + 1312;
 i2 = i1 + 156 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   HEAP32[i2 >> 2] = 0;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 63](i3);
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = i5 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    } else {
     HEAP32[i4 >> 2] = i6;
    }
   } while (0);
   i6 = HEAP32[i2 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i4 = i6 + 4 | 0;
   i6 = i4 | 0;
   i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i6 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 }
 i3 = i2 | 0;
 i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) == 0) {
  __ZN7WebCore11RenderStyleD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 } else {
  HEAP32[i3 >> 2] = i5;
  i8 = i1 | 0;
  __ZN7WebCore17RenderFlexibleBoxD2Ev(i8);
  return;
 }
}
function __Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = i7;
 if ((i2 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i2 = i5 + 5 | 0;
  i8 = HEAP8[i2] | 0;
  i9 = i2;
 } else {
  i8 = (i7 >>> 8 | 0 << 24) & 255;
  i9 = i5 + 5 | 0;
 }
 if ((HEAP8[i1 + 5 | 0] | 0) == i8 << 24 >> 24) {
  do {
   if (((HEAP8[i5 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) == 0) {
    if (i8 << 24 >> 24 == 15) {
     i10 = 1;
     break;
    }
    if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
     d11 = +(HEAP32[i1 >> 2] | 0);
    } else {
     d11 = +HEAPF32[i1 >> 2];
    }
    if ((HEAP8[i5 + 6 | 0] & 1) == 0) {
     d12 = +(HEAP32[i4 >> 2] | 0);
    } else {
     d12 = +HEAPF32[i4 >> 2];
    }
    if (d11 == d12) {
     i10 = 1;
     break;
    }
    i10 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i5) | 0;
   } else {
    i10 = 0;
   }
  } while (0);
  i13 = i10;
  i14 = HEAP8[i9] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if (i14 << 24 >> 24 != 10) {
  STACKTOP = i3;
  return i13 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return i13 | 0;
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
function __ZThn128_NK7WebCore14RenderMenuList13itemIsEnabledEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 - 164 + 40 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i3 & 4 | 0) == 0) {
    break;
   }
   if ((i3 & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 496 >> 2] & 511](i2) | 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore14RenderMenuList13itemIsEnabledEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i3 & 4 | 0) == 0) {
    break;
   }
   if ((i3 & 16 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 496 >> 2] & 511](i2) | 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 496 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore14RenderMenuList18clientPaddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 if (((HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 296 >> 2] & 63) - 34 | 0) >>> 0 < 2 >>> 0) {
  HEAP32[i1 >> 2] = 2;
  STACKTOP = i3;
  return;
 }
 i8 = i4;
 i9 = (HEAP32[i7 + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i7 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i8);
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 i8 = HEAP32[i2 + 136 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 716 >> 2] & 127](i6, i8 | 0);
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14RenderMenuList29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = __ZNK7WebCore12RenderObject5themeEv(i1 | 0) | 0;
 i8 = i1 + 36 | 0;
 i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 96 >> 2] & 63](i7, HEAP32[i8 >> 2] | 0) | 0;
 i7 = HEAP32[i1 + 144 >> 2] | 0;
 i10 = i1 + 136 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i5, i1 | 0);
 i1 = (HEAP32[i5 >> 2] | 0) + ((i7 | 0) < (i9 | 0) ? i9 : i7) | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 716 >> 2] & 127](i6, i7 | 0);
 i7 = i1 + (HEAP32[i6 >> 2] | 0) | 0;
 HEAP32[i3 >> 2] = i7;
 i3 = HEAP8[(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0) + 9 | 0] | 0;
 if ((i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 2) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i2 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZThn128_N7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2 - 164 + 36 | 0;
 if ((HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
  __ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i8, i3, i4, i5);
  i5 = i8 | 0;
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i10 = i8;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i6;
  return;
 } else {
  __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i7, i3, i4, HEAP32[i9 + 4 >> 2] | 0, 0);
  i9 = i7 | 0;
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i10;
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
  __ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i8, i3, i4, i5);
  i5 = i8 | 0;
  i8 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  i9 = i8;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i9;
  STACKTOP = i6;
  return;
 } else {
  __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i7, i3, i4, HEAP32[i2 + 4 >> 2] | 0, 0);
  i2 = i7 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i9 = i7;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i9;
  STACKTOP = i6;
  return;
 }
}
function __ZThn128_NK7WebCore14RenderMenuList17clientPaddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 - 164 + 36 | 0;
 i2 = i4;
 i8 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i2);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i7, i2);
 if ((HEAP8[i2 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i2);
 }
 i2 = HEAP32[i7 + 136 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i6, i2 | 0);
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore14RenderMenuList17clientPaddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i4;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 HEAP32[i4 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i7);
 if ((HEAP8[i7 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 }
 i7 = HEAP32[i2 + 136 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 712 >> 2] & 127](i6, i7 | 0);
 HEAP32[i1 >> 2] = (HEAP32[i6 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i6 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = HEAP32[i2 + 36 >> 2] | 0;
 i7 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i6 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14RenderMenuListC2ERNS_17HTMLSelectElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore17RenderFlexibleBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i5);
 HEAP32[i1 >> 2] = H_BASE + 40;
 HEAP32[i1 + 128 >> 2] = H_BASE + 1312;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP8[i1 + 140 | 0] = 1;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = -1;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP8[i1 + 160 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14RenderMenuListC1ERNS_17HTMLSelectElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore17RenderFlexibleBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1 | 0, i2 | 0, i5);
 HEAP32[i1 >> 2] = H_BASE + 40;
 HEAP32[i1 + 128 >> 2] = H_BASE + 1312;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP8[i1 + 140 | 0] = 1;
 HEAP32[i1 + 144 >> 2] = 0;
 HEAP32[i1 + 148 >> 2] = -1;
 HEAP32[i1 + 152 >> 2] = 0;
 HEAP32[i1 + 156 >> 2] = 0;
 HEAP8[i1 + 160 | 0] = 0;
 STACKTOP = i4;
 return;
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
function __ZN7WebCore14RenderMenuList8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 136 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  HEAP32[i4 >> 2] = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i1 | 0, 1) | 0;
  __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
  __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, HEAP32[i4 >> 2] | 0, 0);
  i6 = HEAP32[i4 >> 2] | 0;
 } else {
  i6 = i5;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 628 >> 2] & 127](i6, i2, i3);
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i8;
 if ((i7 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore14RenderMenuList14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 if ((HEAP32[i1 + 136 >> 2] | 0) != 0) {
  __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
 }
 do {
  if ((i3 | 0) != 0) {
   i2 = __ZNK7WebCore11RenderStyle4fontEv(i3) | 0;
   if (!(__ZNK7WebCore4FonteqERKS0_(i2, __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i1 + 36 >> 2] | 0) | 0) | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore14RenderMenuList18updateOptionsWidthEv(i1);
 HEAP8[i1 + 140 | 0] = 0;
 return;
}
function __ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i5, i2, i3);
 i3 = i1;
 i2 = i5;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 16 | 0);
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i5 + 32 | 0);
 STACKTOP = i4;
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList15itemIsSeparatorEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 - 164 + 40 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZNK7WebCore14RenderMenuList15itemIsSeparatorEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 44 >> 2] | 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5hrTagE >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 12 >> 2] | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 16 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i2 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 i2 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i2;
 return;
}
function viiiiiiiiii___ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 __ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZNK7WebCore9RenderBox18visualOverflowRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 88 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i2 + 52 | 0;
  i2 = HEAP32[i4 >> 2] | 0;
  i5 = HEAP32[i4 + 4 >> 2] | 0;
  i4 = i1;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 0;
  i4 = i1 + 8 | 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[i4 + 4 >> 2] = i5;
  return;
 } else {
  i5 = i1;
  i1 = i3 + 20 | 0;
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  return;
 }
}
function __ZThn128_NK7WebCore14RenderMenuList14itemIsSelectedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 - 164 + 40 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN7WebCore17HTMLOptionElement8selectedEv(i1) | 0;
 return i4 | 0;
}
function __ZNK7WebCore14RenderMenuList14itemIsSelectedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0;
 if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZN7WebCore17HTMLOptionElement8selectedEv(i1) | 0;
 return i4 | 0;
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
function __ZN7WebCore14RenderMenuList17updateFromElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 140 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  __ZN7WebCore14RenderMenuList18updateOptionsWidthEv(i1);
  HEAP8[i2] = 0;
 }
 if ((HEAP8[i1 + 160 | 0] & 1) == 0) {
  __ZN7WebCore14RenderMenuList17setTextFromOptionEi(i1, __ZNK7WebCore17HTMLSelectElement13selectedIndexEv(HEAP32[i1 + 4 >> 2] | 0) | 0);
  return;
 } else {
  i2 = HEAP32[i1 + 156 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2);
  return;
 }
}
function __ZThn128_NK7WebCore14RenderMenuList11itemIsLabelEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 - 164 + 40 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0);
 return i4 | 0;
}
function iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList11itemIsLabelEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0);
 return i4 | 0;
}
function __ZThn128_N7WebCore14RenderMenuList12valueChangedEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 - 164 + 40 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i1 | 0) != (HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 456 >> 2] | 0)) {
  return;
 }
 i1 = i4;
 __ZN7WebCore17HTMLSelectElement20optionSelectedByUserEibb(i1, __ZNK7WebCore17HTMLSelectElement17listToOptionIndexEi(i1, i2) | 0, i3, 0);
 return;
}
function viiii___ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore14RenderMenuList16createInnerBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 136 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  return;
 }
 HEAP32[i2 >> 2] = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i1 | 0, 1) | 0;
 __ZN7WebCore14RenderMenuList16adjustInnerStyleEv(i1);
 __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1 | 0, HEAP32[i2 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore14RenderMenuList12valueChangedEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((i1 | 0) != (HEAP32[(HEAP32[i1 + 332 >> 2] | 0) + 456 >> 2] | 0)) {
  return;
 }
 i1 = i4;
 __ZN7WebCore17HTMLSelectElement20optionSelectedByUserEibb(i1, __ZNK7WebCore17HTMLSelectElement17listToOptionIndexEi(i1, i2) | 0, i3, 0);
 return;
}
function viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
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
function __ZNK7WebCore20RenderBoxModelObject12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 112 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 104 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore14RenderMenuList11removeChildERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 136 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0) | (i4 | 0) == 0) {
  __ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE(i1 | 0, i2);
  HEAP32[i3 >> 2] = 0;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 636 >> 2] & 127](i4, i2);
  return;
 }
}
function __ZNK7WebCore20RenderBoxModelObject9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i1 = HEAP32[i2 + 120 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
   if ((i1 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i3 = 0;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = i1 >>> 1 & 67108863;
 return i3 | 0;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZThn128_NK7WebCore14RenderMenuList11itemToolTipEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i2 - 164 + 40 >> 2] | 0) | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
  __ZNK7WebCore11HTMLElement5titleEv(i1, HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZNK7WebCore14RenderMenuList11itemToolTipEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i2 + 4 >> 2] | 0) | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 > i3 >>> 0) {
  __ZNK7WebCore11HTMLElement5titleEv(i1, HEAP32[(HEAP32[i4 >> 2] | 0) + (i3 << 2) >> 2] | 0);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
}
function __ZThn128_NK7WebCore14RenderMenuList12fontSelectorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 - 164 + 40 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = i2 + 320 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i2);
  i4 = HEAP32[i1 >> 2] | 0;
 } else {
  i4 = i3;
 }
 return HEAP32[i4 + 240 >> 2] | 0;
}
function __ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function __ZNK7WebCore14RenderMenuList12fontSelectorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i1 = i2 + 320 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore8Document19createStyleResolverEv(i2);
  i4 = HEAP32[i1 >> 2] | 0;
 } else {
  i4 = i3;
 }
 return HEAP32[i4 + 240 >> 2] | 0;
}
function __ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent3endENS_11WritingModeENS_13TextDirectionE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i4 + 40 >> 2] | 0) >>> 30 & 1);
 return;
}
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2, i3, i4, i5) | 0;
}
function viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function dynCall_viiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 FUNCTION_TABLE_viiiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0);
}
function __ZNK7WebCore14RenderMenuList4textEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 132 >> 2] | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i2 = HEAP32[i3 + 44 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] & 3](i1, i2, i3, i4, i5, 0);
 return;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiiii___ZN7WebCore17RenderFlexibleBox13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17RenderFlexibleBox13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 44 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9RenderBox17borderBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 i2 = i1;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 i2 = i1 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 HEAP32[i2 + 4 >> 2] = i4;
 return;
}
function viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZThn128_N7WebCore14RenderMenuList15setTextFromItemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 - 164 + 36 | 0;
 __ZN7WebCore14RenderMenuList17setTextFromOptionEi(i3, __ZNK7WebCore17HTMLSelectElement17listToOptionIndexEi(HEAP32[i3 + 4 >> 2] | 0, i2) | 0);
 return;
}
function __ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return 0;
}
function __ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 96 >> 2] & 511](i1 | 0) | 0) ^ 1;
 return i2 | 0;
}
function viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn128_N7WebCore14RenderMenuList17listBoxSelectItemEibbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17HTMLSelectElement17listBoxSelectItemEibbb(HEAP32[i1 - 164 + 40 >> 2] | 0, i2, i3, i4, i5);
 return;
}
function __ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i1 | 0, i2 | 0, HEAP32[i1 + 28 >> 2] | 0, 0, 0, i3);
 return;
}
function iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viii___ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn128_NK7WebCore14RenderMenuList13selectedIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 - 164 + 40 >> 2] | 0;
 return __ZNK7WebCore17HTMLSelectElement17optionToListIndexEi(i2, __ZNK7WebCore17HTMLSelectElement13selectedIndexEv(i2) | 0) | 0;
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore14RenderMenuList17listBoxSelectItemEibbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17HTMLSelectElement17listBoxSelectItemEibbb(HEAP32[i1 + 4 >> 2] | 0, i2, i3, i4, i5);
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList10hostWindowEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9FrameView10hostWindowEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 - 164 + 40 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
}
function vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
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
function viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList13selectedIndexEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 return __ZNK7WebCore17HTMLSelectElement17optionToListIndexEi(i2, __ZNK7WebCore17HTMLSelectElement13selectedIndexEv(i2) | 0) | 0;
}
function viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore14RenderMenuList15setTextFromItemEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14RenderMenuList17setTextFromOptionEi(i1, __ZNK7WebCore17HTMLSelectElement17listToOptionIndexEi(HEAP32[i1 + 4 >> 2] | 0, i2) | 0);
 return;
}
function __ZNK7WebCore14RenderMenuList10hostWindowEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9FrameView10hostWindowEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
}
function iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1 | 0, i2 | 0) | 0;
}
function dynCall_iiiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 return FUNCTION_TABLE_iiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZNK7WebCore9RenderBox21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function __ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 & 1024 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (i2 & 2048 | 0) != 0;
 return i3 | 0;
}
function viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore9RenderBox20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
}
function viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return 0;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function viii___ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore17RenderFlexibleBox11layoutBlockEbNS_10LayoutUnitE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore17RenderFlexibleBox11layoutBlockEbNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore14RenderMenuList9hidePopupEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 return;
}
function viii___ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZThn128_NK7WebCore14RenderMenuList21itemAccessibilityTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderMenuList21itemAccessibilityTextEj(i1, i2 - 164 + 36 | 0, i3);
 return;
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock19inlineBlockBaselineENS_17LineDirectionModeE(i1 | 0, i2) | 0;
}
function __ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return;
}
function dynCall_iiiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv(i1 | 0, i2 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 abort(1);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_(i1 | 0, i2 | 0);
}
function __ZN7WebCore14RenderMenuList19didSetSelectedIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore17HTMLSelectElement17listToOptionIndexEi(HEAP32[i1 + 4 >> 2] | 0, i2) | 0;
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList9itemStyleEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderMenuList9itemStyleEj(i1, i2 - 164 + 36 | 0, i3);
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList8itemTextEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderMenuList8itemTextEj(i1, i2 - 164 + 36 | 0, i3);
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList18clientPaddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore14RenderMenuList18clientPaddingRightEv(i1, i2 - 164 + 36 | 0);
 return;
}
function vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
}
function __ZThn128_NK7WebCore14RenderMenuList8listSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(__ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 - 164 + 40 >> 2] | 0) | 0) + 8 >> 2] | 0;
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1 | 0, i2 | 0);
}
function __ZThn128_N7WebCore14RenderMenuListD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 164 + 36 | 0;
 __ZN7WebCore14RenderMenuListD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12borderBeforeEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject14previousOffsetEi(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore11RenderBlock15requiresColumnsEi(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox24repaintOverhangingFloatsEb(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv(i1 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderStartEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderStartWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject11borderAfterEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv(i1 | 0);
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
function vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore14RenderMenuList8listSizeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(__ZNK7WebCore17HTMLSelectElement9listItemsEv(HEAP32[i1 + 4 >> 2] | 0) | 0) + 8 >> 2] | 0;
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
}
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
}
function iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject10nextOffsetEi(i1 | 0, i2 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv(i1 | 0) | 0;
}
function __ZThn128_NK7WebCore14RenderMenuList9menuStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore14RenderMenuList9menuStyleEv(i1, i2 - 164 + 36 | 0);
 return;
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv(i1 | 0) | 0;
}
function __ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv(i1 | 0) | 0;
}
function vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox22verticalScrollbarWidthEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv(i1 | 0);
}
function __ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox21hasRelativeDimensionsEv(i1 | 0) | 0;
}
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0) == 0 | 0;
}
function vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox13setScrollLeftEi(i1 | 0, i2 | 0);
}
function vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement21willBeRemovedFromTreeEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock23addOverflowFromChildrenEv(i1 | 0);
}
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function __ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox10offsetLeftEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14paginationUnitEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14firstLineBlockEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 127](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore11RenderBlock19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function __ZThn128_NK7WebCore14RenderMenuList8multipleEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 - 164 + 40 >> 2] | 0) + 193 | 0] & 1) != 0 | 0;
}
function vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox9offsetTopEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock13hoverAncestorEv(i1 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock17firstLineBaselineEv(i1 | 0) | 0;
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
function vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock17updateFirstLetterEv(i1 | 0);
}
function __ZThn128_NK7WebCore14RenderMenuList9itemLabelEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function b5(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(5);
 return 0;
}
function __ZThn128_NK7WebCore14RenderMenuList8itemIconEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock15willBeDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock15willBeDestroyedEv(i1 | 0);
}
function vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock15calcColumnWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore14RenderMenuList9itemLabelEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore9RenderBox12offsetHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 56 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox12marginBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 68 >> 2];
 return;
}
function __ZNK7WebCore14RenderMenuList8multipleEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[i1 + 4 >> 2] | 0) + 193 | 0] & 1) != 0 | 0;
}
function __ZNK7WebCore14RenderMenuList8itemIconEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore14RenderMenuListD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14RenderMenuListD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore9RenderBox11offsetWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 52 >> 2];
 return;
}
function __ZNK7WebCore9RenderBox11marginRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 64 >> 2];
 return;
}
function vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox15updateFromStyleEv(i1 | 0);
}
function b11(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(11);
}
function __ZNK7WebCore9RenderBox10marginLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 72 >> 2];
 return;
}
function ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 63](i2 | 0, i3 | 0) | 0;
}
function vi___ZN7WebCore11RenderBlock11deleteLinesEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock11deleteLinesEv(i1 | 0);
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZThn128_N7WebCore14RenderMenuListD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14RenderMenuListD2Ev(i1 - 164 + 36 | 0);
 return;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZThn128_N7WebCore14RenderMenuList16selectionChangedEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b13(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(13);
 return 0;
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
function __ZN7WebCore14RenderMenuList16selectionChangedEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function b7(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(7);
 return 0;
}
function __ZThn128_N7WebCore14RenderMenuList12popupDidHideEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 - 164 + 196 | 0] = 0;
 return;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function vi___ZN7WebCore11RenderBlock6layoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock6layoutEv(i1 | 0);
}
function v___ZNK7WebCore12RenderObject14localTransformEv__wrapper() {
 __ZNK7WebCore12RenderObject14localTransformEv();
}
function b2(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(2);
}
function __ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper() {
 __ZN7WebCore9RenderBox15createInlineBoxEv();
}
function b10(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(10);
 return 0;
}
function __ZNK7WebCore14RenderMenuList36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZN7WebCore14RenderMenuList21didUpdateActiveOptionEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore14RenderMenuList13selectElementEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZN7WebCore14RenderMenuList12popupDidHideEv(i1) {
 i1 = i1 | 0;
 HEAP8[i1 + 160 | 0] = 0;
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore17RenderFlexibleBox30canCollapseAnonymousBlockChildEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderMenuList28canBeReplacedWithInlineRunInEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b14(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(14);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderMenuList24canHaveGeneratedChildrenEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn128_NK7WebCore14RenderMenuList16clientInsetRightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderMenuList23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14RenderMenuList10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZThn128_NK7WebCore14RenderMenuList15clientInsetLeftEv(i1) {
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
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
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
function __ZThn128_NK7WebCore14RenderMenuList13shouldPopOverEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZThn128_N7WebCore14RenderMenuList16selectionClearedEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore17RenderFlexibleBox13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14RenderMenuList16clientInsetRightEv(i1) {
 i1 = i1 | 0;
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
function __ZNK7WebCore17RenderFlexibleBox12avoidsFloatsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14RenderMenuList15clientInsetLeftEv(i1) {
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
function __ZNK7WebCore14RenderMenuList14hasLineIfEmptyEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore14RenderMenuList14hasControlClipEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore14RenderMenuList13shouldPopOverEv(i1) {
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
function __ZN7WebCore14RenderMenuList16selectionClearedEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore11RenderBlock15canHaveChildrenEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock14containsFloatsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderMenuList10isMenuListEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b8(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(8);
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
function __ZN7WebCore9RenderBox14stopAutoscrollEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore11RenderBlock8hasLinesEv(i1) {
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
function b12(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(12);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 7]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b6(i1) {
 i1 = i1 | 0;
 abort(6);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b0,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b0,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b0,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b0,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,viiiii___ZN7WebCore17RenderFlexibleBox13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b2,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b2,__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_,b2,__ZN7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE,b2,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b2,__ZThn128_N7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE,b2,__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE,b2,__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_,b2,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b2,__ZN7WebCore14RenderMenuList17listBoxSelectItemEibbb,b2,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b2,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b2,__ZThn128_N7WebCore14RenderMenuList17listBoxSelectItemEibbb,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,vi___ZN7WebCore11RenderBlock23addOverflowFromChildrenEv__wrapper,b3,vi___ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv__wrapper,b3,__ZN7WebCore14RenderMenuList29computePreferredLogicalWidthsEv,b3,vi___ZN7WebCore11RenderBlock15willBeDestroyedEv__wrapper,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore14RenderMenuListD0Ev,b3,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper,b3,vi___ZN7WebCore11RenderBlock17updateFirstLetterEv__wrapper,b3,__ZN7WebCore14RenderMenuList12popupDidHideEv,b3,__ZN7WebCore14RenderMenuList16selectionClearedEv,b3,__ZThn128_N7WebCore14RenderMenuList16selectionClearedEv,b3,__ZN7WebCore14RenderMenuList17updateFromElementEv,b3,__ZN7WebCore14RenderMenuListD2Ev
  ,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,__ZThn128_N7WebCore14RenderMenuListD0Ev,b3,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b3,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b3,__ZThn128_N7WebCore14RenderMenuListD1Ev,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,vi___ZN7WebCore11RenderBlock11deleteLinesEv__wrapper,b3,__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv,b3,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper,b3,vi___ZN7WebCore11RenderBlock6layoutEv__wrapper,b3,__ZThn128_N7WebCore14RenderMenuList12popupDidHideEv,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b4,__ZNK7WebCore9RenderBox12marginBottomEv,b4,__ZThn128_NK7WebCore14RenderMenuList17clientPaddingLeftEv,b4,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE
  ,b4,__ZNK7WebCore14RenderMenuList9menuStyleEv,b4,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b4,__ZThn128_NK7WebCore14RenderMenuList9menuStyleEv,b4,__ZNK7WebCore14RenderMenuList17clientPaddingLeftEv,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b4,__ZN7WebCore14RenderMenuList11removeChildERNS_12RenderObjectE,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper
  ,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,__ZThn128_N7WebCore14RenderMenuList15setTextFromItemEj,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,__ZNK7WebCore14RenderMenuList18clientPaddingRightEv,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZThn128_NK7WebCore14RenderMenuList18clientPaddingRightEv,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper
  ,b4,__ZN7WebCore14RenderMenuList15setTextFromItemEj,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,iiiiiii___ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5];
  var FUNCTION_TABLE_ii = [b6,b6,ii___ZNK7WebCore11RenderBlock14firstLineBlockEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,__ZNK7WebCore14RenderMenuList8listSizeEv,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,__ZNK7WebCore11RenderBlock14containsFloatsEv,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore9RenderBox13requiresLayerEv,b6,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore14RenderMenuList13shouldPopOverEv,b6,__ZThn128_NK7WebCore14RenderMenuList12fontSelectorEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore14RenderMenuList10renderNameEv,b6,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv
  ,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv
  ,b6,__ZNK7WebCore14RenderMenuList16clientInsetRightEv,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b6,__ZNK7WebCore14RenderMenuList14hasControlClipEv,b6,__ZNK7WebCore14RenderMenuList10hostWindowEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,__ZNK7WebCore12RenderObject13isTextControlEv
  ,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore14RenderMenuList12fontSelectorEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore17RenderFlexibleBox12avoidsFloatsEv,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper
  ,b6,__ZThn128_NK7WebCore14RenderMenuList8listSizeEv,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZThn128_NK7WebCore14RenderMenuList15clientInsetLeftEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,__ZThn128_NK7WebCore14RenderMenuList16clientInsetRightEv,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject8isWidgetEv,b6,__ZNK7WebCore12RenderObject11isTextFieldEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore14RenderMenuList10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv
  ,b6,__ZNK7WebCore14RenderMenuList23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore11RenderBlock15canHaveChildrenEv,b6,__ZThn128_NK7WebCore14RenderMenuList10hostWindowEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZThn128_NK7WebCore14RenderMenuList13selectedIndexEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper,b6,__ZThn128_NK7WebCore14RenderMenuList13shouldPopOverEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b6,__ZNK7WebCore17RenderFlexibleBox13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv
  ,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore17RenderFlexibleBox30canCollapseAnonymousBlockChildEv,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZThn128_NK7WebCore14RenderMenuList8multipleEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b6,__ZNK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv
  ,b6,__ZNK7WebCore14RenderMenuList28canBeReplacedWithInlineRunInEv,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv,b6,__ZNK7WebCore14RenderMenuList13selectedIndexEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore14RenderMenuList8multipleEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject10isListItemEv
  ,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore14RenderMenuList36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore11RenderBlock8hasLinesEv,b6,__ZNK7WebCore14RenderMenuList24canHaveGeneratedChildrenEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZThn128_NK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject6lengthEv
  ,b6,__ZNK7WebCore12RenderObject10isTableRowEv,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,__ZNK7WebCore14RenderMenuList14hasLineIfEmptyEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,__ZNK7WebCore14RenderMenuList17firstLineBaselineEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore14RenderMenuList15clientInsetLeftEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiiifi = [b7,b7,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b7,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,__ZThn128_NK7WebCore14RenderMenuList8itemTextEj,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,viii___ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore14RenderMenuList9itemStyleEj,b8,__ZN7WebCore14RenderMenuList12valueChangedEjb,b8,__ZNK7WebCore14RenderMenuList15controlClipRectERKNS_11LayoutPointE,b8,__ZNK7WebCore14RenderMenuList21itemAccessibilityTextEj,b8,__ZThn128_NK7WebCore14RenderMenuList9itemLabelEj,b8,viii___ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b8,__ZN7WebCore14RenderMenuList14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZThn128_N7WebCore14RenderMenuList12valueChangedEjb,b8,viii___ZN7WebCore17RenderFlexibleBox11layoutBlockEbNS_10LayoutUnitE__wrapper,b8,__ZThn128_NK7WebCore14RenderMenuList8itemIconEj
  ,b8,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore14RenderMenuList16selectionChangedEjb,b8,__ZThn128_NK7WebCore14RenderMenuList21itemAccessibilityTextEj,b8,viii___ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore14RenderMenuList8addChildEPNS_12RenderObjectES2_,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b,b8,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,__ZN7WebCore14RenderMenuListC2ERNS_17HTMLSelectElementEN3WTF7PassRefINS_11RenderStyleEEE,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,viii___ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb__wrapper,b8,__ZNK7WebCore14RenderMenuList8itemIconEj
  ,b8,__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZNK7WebCore14RenderMenuList29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_,b8,__ZNK7WebCore14RenderMenuList8itemTextEj,b8,__ZThn128_N7WebCore14RenderMenuList16selectionChangedEjb,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,__ZNK7WebCore14RenderMenuList11itemToolTipEj,b8,__ZThn128_NK7WebCore14RenderMenuList11itemToolTipEj,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper
  ,b8,__ZThn128_NK7WebCore14RenderMenuList9itemStyleEj,b8,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,__ZNK7WebCore14RenderMenuList9itemLabelEj,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8,b8
  ,b8,b8,b8,b8,b8,b8,b8,b8,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9,v___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b9,b9,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,__ZNK7WebCore14RenderMenuList13itemIsEnabledEj,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZThn128_NK7WebCore14RenderMenuList14itemIsSelectedEj,b12,__ZNK7WebCore14RenderMenuList14itemIsSelectedEj,b12,__ZThn128_NK7WebCore14RenderMenuList15itemIsSeparatorEj,b12,__ZNK7WebCore14RenderMenuList19inlineBlockBaselineENS_17LineDirectionModeE,b12,__ZThn128_NK7WebCore14RenderMenuList13itemIsEnabledEj,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE__wrapper,b12,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,__ZNK7WebCore14RenderMenuList15itemIsSeparatorEj,b12,__ZNK7WebCore14RenderMenuList11itemIsLabelEj
  ,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,__ZThn128_NK7WebCore14RenderMenuList11itemIsLabelEj,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,__ZNK7WebCore14RenderMenuList16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b13,__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b14,viiii___ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,b14,b14,b14,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiiifi: dynCall_iiiifi, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiiifi": invoke_iiiifi, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames5hrTagE": __ZN7WebCore9HTMLNames5hrTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE, "__ZN7WebCore9HTMLNames14aria_labelAttrE": __ZN7WebCore9HTMLNames14aria_labelAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZN7WebCore14RenderMenuListC2ERNS_17HTMLSelectElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZThn128_NK7WebCore14RenderMenuList8itemTextEj","__ZNK7WebCore12RenderObject6isRubyEv","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore14RenderMenuList8listSizeEv","__ZThn128_NK7WebCore14RenderMenuList16clientInsetRightEv","__ZNK7WebCore14RenderMenuList22getItemBackgroundColorEjRNS_5ColorERb","__ZNK7WebCore14RenderMenuList8multipleEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore14RenderMenuList14itemIsSelectedEj","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore14RenderMenuList16selectionClearedEv","__ZNK7WebCore14RenderMenuList9menuStyleEv","_memcpy","__ZNK7WebCore14RenderMenuList10isMenuListEv","__ZNK7WebCore14RenderMenuList16clientInsetRightEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore14RenderMenuList13selectElementEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZNK7WebCore14RenderMenuList11itemToolTipEj","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZThn128_NK7WebCore14RenderMenuList15itemIsSeparatorEj","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore14RenderMenuList29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_","__ZN7WebCore11RenderStyle13setFlexShrinkEf","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore14RenderMenuList14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZN7WebCore10BorderDataD2Ev","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZN7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE","__ZNK7WebCore12RenderObject7isQuoteEv","__ZThn128_N7WebCore14RenderMenuList12valueChangedEjb","__ZNK7WebCore11RenderBlock14containsFloatsEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore14RenderMenuList23createsAnonymousWrapperEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore14RenderMenuList16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZThn128_N7WebCore14RenderMenuList17listBoxSelectItemEibbb","__ZN7WebCore17StyleSurroundDataD2Ev","__ZThn128_NK7WebCore14RenderMenuList18clientPaddingRightEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore11RenderBlock15canHaveChildrenEv","__ZNK7WebCore14RenderMenuList36requiresForcedStyleRecalcPropagationEv","__ZThn128_NK7WebCore14RenderMenuList10hostWindowEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZThn128_NK7WebCore14RenderMenuList8itemIconEj","__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject10isProgressEv","__ZThn128_NK7WebCore14RenderMenuList13selectedIndexEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZThn128_NK7WebCore14RenderMenuList9itemStyleEj","__ZNK7WebCore14RenderMenuList11itemIsLabelEj","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZThn128_NK7WebCore14RenderMenuList9menuStyleEv","__ZNK7WebCore14RenderMenuList15itemIsSeparatorEj","__ZNK7WebCore14RenderMenuList17clientPaddingLeftEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore14RenderMenuList14hasControlClipEv","__ZNK7WebCore14RenderMenuList9itemStyleEj","__ZN7WebCore11RenderStyleD2Ev","__ZThn128_NK7WebCore14RenderMenuList13shouldPopOverEv","__ZNK7WebCore14RenderMenuList13itemIsEnabledEj","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore14RenderMenuList15controlClipRectERKNS_11LayoutPointE","__ZThn128_N7WebCore14RenderMenuList15createScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore11RenderBlock8hasLinesEv","__ZNK7WebCore14RenderMenuList24canHaveGeneratedChildrenEv","__ZNK7WebCore14RenderMenuList10hostWindowEv","__ZThn128_N7WebCore14RenderMenuListD0Ev","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZNK7WebCore17RenderFlexibleBox13isFlexibleBoxEv","__ZThn128_NK7WebCore14RenderMenuList21itemAccessibilityTextEj","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZThn128_NK7WebCore14RenderMenuList12fontSelectorEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZN7WebCore14RenderMenuList16selectionChangedEjb","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZThn128_NK7WebCore14RenderMenuList11itemToolTipEj","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZN7WebCore14RenderMenuList19didSetSelectedIndexEi","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore14RenderMenuList10renderNameEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb","__ZN7WebCore14RenderMenuList15setTextFromItemEj","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZThn128_NK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv","__ZNK7WebCore17RenderFlexibleBox30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZThn128_N7WebCore14RenderMenuList16selectionClearedEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZN7WebCore14RenderMenuList29computePreferredLogicalWidthsEv","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","_memset","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore14RenderMenuList4textEv","__ZNK7WebCore14RenderMenuList8itemIconEj","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZThn128_NK7WebCore14RenderMenuList8multipleEv","__ZNK7WebCore14RenderMenuList12fontSelectorEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN7WebCore14RenderMenuList17setTextFromOptionEi","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN7WebCore14RenderMenuList8addChildEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore14RenderMenuList27valueShouldChangeOnHotTrackEv","__ZThn128_N7WebCore14RenderMenuList12popupDidHideEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore17RenderFlexibleBox12avoidsFloatsEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZN7WebCore14RenderMenuList21didUpdateActiveOptionEi","__ZNK7WebCore14RenderMenuList9itemLabelEj","__ZN7WebCore11RenderStyle11setFlexGrowEf","__ZN7WebCore14RenderMenuList12valueChangedEjb","__ZN7WebCore14RenderMenuList9showPopupEv","__ZN7WebCore14RenderMenuList7setTextERKN3WTF6StringE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore14RenderMenuList18updateOptionsWidthEv","__ZThn128_N7WebCore14RenderMenuListD1Ev","__ZNK7WebCore14RenderMenuList19inlineBlockBaselineENS_17LineDirectionModeE","__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore14RenderMenuList18clientPaddingRightEv","__ZN7WebCore14RenderMenuList17updateFromElementEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZThn128_NK7WebCore14RenderMenuList13itemIsEnabledEj","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore14RenderMenuListD0Ev","__ZThn128_NK7WebCore14RenderMenuList17clientPaddingLeftEv","__ZN7WebCore14RenderMenuList16createInnerBlockEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore14RenderMenuList13shouldPopOverEv","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore14RenderMenuList11removeChildERNS_12RenderObjectE","__ZNK7WebCore14RenderMenuList14hasLineIfEmptyEv","__ZN7WebCore14RenderMenuList17listBoxSelectItemEibbb","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZThn128_NK7WebCore14RenderMenuList9itemLabelEj","__ZNK7WebCore14RenderMenuList28canBeReplacedWithInlineRunInEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore14RenderMenuList9hidePopupEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore14RenderMenuList21itemAccessibilityTextEj","__ZNK7WebCore14RenderMenuList13selectedIndexEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZN7WebCore14RenderMenuListD2Ev","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZThn128_NK7WebCore14RenderMenuList11itemIsLabelEj","__ZN7WebCore14RenderMenuList16adjustInnerStyleEv","__ZNK7WebCore12RenderObject7isImageEv","__ZThn128_NK7WebCore14RenderMenuList14itemIsSelectedEj","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore14RenderMenuList8itemTextEj","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore14RenderMenuList17firstLineBaselineEv","__ZThn128_N7WebCore14RenderMenuList16selectionChangedEjb","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore14RenderMenuList12popupDidHideEv","__ZThn128_NK7WebCore14RenderMenuList8listSizeEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b","__ZThn128_N7WebCore14RenderMenuList15setTextFromItemEj","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore14RenderMenuList15clientInsetLeftEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZThn128_NK7WebCore14RenderMenuList15clientInsetLeftEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE"]

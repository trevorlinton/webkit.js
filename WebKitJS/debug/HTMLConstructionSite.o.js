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
H_BASE = parentModule["_malloc"](2560 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 2560;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20HTMLConstructionSiteC1ERNS_8DocumentENS_19ParserContentPolicyEj;
var __ZN7WebCore20HTMLConstructionSiteC1ERNS_16DocumentFragmentENS_19ParserContentPolicyEj;
var __ZN7WebCore20HTMLConstructionSiteD1Ev;
/* memory initializer */ allocate([45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,47,47,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,83,116,114,105,99,116,47,47,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,83,116,114,105,99,116,32,76,101,118,101,108,32,50,47,47,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,48,32,84,114,97,110,115,105,116,105,111,110,97,108,47,47,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,88,72,84,77,76,32,49,46,48,32,70,114,97,109,101,115,101,116,47,47,0,0,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,52,46,48,49,32,84,114,97,110,115,105,116,105,111,110,97,108,47,47,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,52,46,48,49,32,70,114,97,109,101,115,101,116,47,47,0,0,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,83,116,114,105,99,116,32,76,101,118,101,108,32,49,47,47,0,0,104,116,116,112,58,47,47,119,119,119,46,105,98,109,46,99,111,109,47,100,97,116,97,47,100,116,100,47,118,49,49,47,105,98,109,120,104,116,109,108,49,45,116,114,97,110,115,105,116,105,111,110,97,108,46,100,116,100,0,0,0,0,0,0,72,84,77,76,0,0,0,0,45,47,87,51,67,47,68,84,68,32,72,84,77,76,32,52,46,48,32,84,114,97,110,115,105,116,105,111,110,97,108,47,69,78,0,0,0,0,0,0,45,47,47,87,101,98,84,101,99,104,115,47,47,68,84,68,32,77,111,122,105,108,108,97,32,72,84,77,76,47,47,0,45,47,47,87,101,98,84,101,99,104,115,47,47,68,84,68,32,77,111,122,105,108,108,97,32,72,84,77,76,32,50,46,48,47,47,0,0,0,0,0,45,47,47,87,51,79,47,47,68,84,68,32,87,51,32,72,84,77,76,32,83,116,114,105,99,116,32,51,46,48,47,47,69,78,47,47,0,0,0,0,45,47,47,87,51,79,47,47,68,84,68,32,87,51,32,72,84,77,76,32,51,46,48,47,47,0,0,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,87,51,32,72,84,77,76,47,47,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,69,120,112,101,114,105,109,101,110,116,97,108,32,57,55,48,52,50,49,47,47,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,69,120,112,101,114,105,109,101,110,116,97,108,32,49,57,57,54,48,55,49,50,47,47,0,0,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,76,101,118,101,108,32,50,47,47,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,52,46,48,32,84,114,97,110,115,105,116,105,111,110,97,108,47,47,0,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,52,46,48,32,70,114,97,109,101,115,101,116,47,47,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,51,46,50,83,32,68,114,97,102,116,47,47,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,51,46,50,47,47,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,51,46,50,32,70,105,110,97,108,47,47,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,51,46,50,32,68,114,97,102,116,47,47,0,0,0,0,45,47,47,87,51,67,47,47,68,84,68,32,72,84,77,76,32,51,32,49,57,57,53,45,48,51,45,50,52,47,47,0,45,47,47,83,117,110,32,77,105,99,114,111,115,121,115,116,101,109,115,32,67,111,114,112,46,47,47,68,84,68,32,72,111,116,74,97,118,97,32,83,116,114,105,99,116,32,72,84,77,76,47,47,0,0,0,0,45,47,47,83,117,110,32,77,105,99,114,111,115,121,115,116,101,109,115,32,67,111,114,112,46,47,47,68,84,68,32,72,111,116,74,97,118,97,32,72,84,77,76,47,47,0,0,0,45,47,47,83,81,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,72,111,84,77,101,116,97,76,32,43,32,101,120,116,101,110,115,105,111,110,115,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,76,101,118,101,108,32,49,47,47,0,45,47,47,83,112,121,103,108,97,115,115,47,47,68,84,68,32,72,84,77,76,32,50,46,48,32,69,120,116,101,110,100,101,100,47,47,0,0,0,0,45,47,47,83,111,102,116,81,117,97,100,47,47,68,84,68,32,72,111,84,77,101,116,97,76,32,80,82,79,32,52,46,48,58,58,49,57,57,55,49,48,49,48,58,58,101,120,116,101,110,115,105,111,110,115,32,116,111,32,72,84,77,76,32,52,46,48,47,47,0,0,0,45,47,47,83,111,102,116,81,117,97,100,32,83,111,102,116,119,97,114,101,47,47,68,84,68,32,72,111,84,77,101,116,97,76,32,80,82,79,32,54,46,48,58,58,49,57,57,57,48,54,48,49,58,58,101,120,116,101,110,115,105,111,110,115,32,116,111,32,72,84,77,76,32,52,46,48,47,47,0,0,45,47,47,79,39,82,101,105,108,108,121,32,97,110,100,32,65,115,115,111,99,105,97,116,101,115,47,47,68,84,68,32,72,84,77,76,32,69,120,116,101,110,100,101,100,32,82,101,108,97,120,101,100,32,49,46,48,47,47,0,0,0,0,0,45,47,47,79,39,82,101,105,108,108,121,32,97,110,100,32,65,115,115,111,99,105,97,116,101,115,47,47,68,84,68,32,72,84,77,76,32,69,120,116,101,110,100,101,100,32,49,46,48,47,47,0,0,0,0,0,45,47,47,79,39,82,101,105,108,108,121,32,97,110,100,32,65,115,115,111,99,105,97,116,101,115,47,47,68,84,68,32,72,84,77,76,32,50,46,48,47,47,0,0,0,0,0,0,45,47,47,78,101,116,115,99,97,112,101,32,67,111,109,109,46,32,67,111,114,112,46,47,47,68,84,68,32,83,116,114,105,99,116,32,72,84,77,76,47,47,0,0,0,0,0,0,45,47,47,78,101,116,115,99,97,112,101,32,67,111,109,109,46,32,67,111,114,112,46,47,47,68,84,68,32,72,84,77,76,47,47,0,0,0,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,51,46,48,32,84,97,98,108,101,115,47,47,0,0,0,0,0,0,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,51,46,48,32,72,84,77,76,47,47,0,0,45,47,47,65,83,47,47,68,84,68,32,72,84,77,76,32,51,46,48,32,97,115,87,101,100,105,116,32,43,32,101,120,116,101,110,115,105,111,110,115,47,47,0,0,0,0,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,51,46,48,32,72,84,77,76,32,83,116,114,105,99,116,47,47,0,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,50,46,48,32,84,97,98,108,101,115,47,47,0,0,0,0,0,0,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,50,46,48,32,72,84,77,76,47,47,0,0,45,47,47,77,105,99,114,111,115,111,102,116,47,47,68,84,68,32,73,110,116,101,114,110,101,116,32,69,120,112,108,111,114,101,114,32,50,46,48,32,72,84,77,76,32,83,116,114,105,99,116,47,47,0,0,0,45,47,47,77,101,116,114,105,117,115,47,47,68,84,68,32,77,101,116,114,105,117,115,32,80,114,101,115,101,110,116,97,116,105,111,110,97,108,47,47,0,0,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,83,116,114,105,99,116,47,47,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,83,116,114,105,99,116,32,76,101,118,101,108,32,51,47,47,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,83,116,114,105,99,116,32,76,101,118,101,108,32,50,47,47,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,83,116,114,105,99,116,32,76,101,118,101,108,32,49,47,47,0,0,0,0,0,0,45,47,47,65,100,118,97,83,111,102,116,32,76,116,100,47,47,68,84,68,32,72,84,77,76,32,51,46,48,32,97,115,87,101,100,105,116,32,43,32,101,120,116,101,110,115,105,111,110,115,47,47,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,83,116,114,105,99,116,32,76,101,118,101,108,32,48,47,47,0,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,76,101,118,101,108,32,51,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,76,101,118,101,108,32,50,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,76,101,118,101,108,32,49,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,76,101,118,101,108,32,48,47,47,0,0,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,51,47,47,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,51,46,50,47,47,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,51,46,50,32,70,105,110,97,108,47,47,0,0,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,51,46,48,47,47,0,45,47,47,73,69,84,70,47,47,68,84,68,32,72,84,77,76,32,50,46,49,69,47,47,0,0,0,0,0,0,0,0,43,47,47,83,105,108,109,97,114,105,108,47,47,100,116,100,32,104,116,109,108,32,80,114,111,32,118,48,114,49,49,32,49,57,57,55,48,49,48,49,47,47,0,0,0,0,0,0,104,116,109,108,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore9HTMLNames11templateTagE=env.__ZN7WebCore9HTMLNames11templateTagE|0;
  var __ZN7WebCore9HTMLNames5liTagE=env.__ZN7WebCore9HTMLNames5liTagE|0;
  var __ZN7WebCore9HTMLNames5trTagE=env.__ZN7WebCore9HTMLNames5trTagE|0;
  var __ZN7WebCore9HTMLNames4pTagE=env.__ZN7WebCore9HTMLNames4pTagE|0;
  var __ZN7WebCore9HTMLNames8tbodyTagE=env.__ZN7WebCore9HTMLNames8tbodyTagE|0;
  var __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE=env.__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE|0;
  var __ZN7WebCore9HTMLNames5dtTagE=env.__ZN7WebCore9HTMLNames5dtTagE|0;
  var __ZN7WebCore9HTMLNames8theadTagE=env.__ZN7WebCore9HTMLNames8theadTagE|0;
  var __ZN7WebCore9HTMLNames9optionTagE=env.__ZN7WebCore9HTMLNames9optionTagE|0;
  var __ZN7WebCore9HTMLNames11optgroupTagE=env.__ZN7WebCore9HTMLNames11optgroupTagE|0;
  var __ZN7WebCore9HTMLNames8tfootTagE=env.__ZN7WebCore9HTMLNames8tfootTagE|0;
  var __ZN7WebCore8SVGNames9scriptTagE=env.__ZN7WebCore8SVGNames9scriptTagE|0;
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN7WebCore9HTMLNames9scriptTagE=env.__ZN7WebCore9HTMLNames9scriptTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames5rpTagE=env.__ZN7WebCore9HTMLNames5rpTagE|0;
  var __ZN7WebCore9HTMLNames5ddTagE=env.__ZN7WebCore9HTMLNames5ddTagE|0;
  var __ZN7WebCore9HTMLNames5rtTagE=env.__ZN7WebCore9HTMLNames5rtTagE|0;
  var __ZN7WebCore9HTMLNames8styleTagE=env.__ZN7WebCore9HTMLNames8styleTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
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
function __ZN7WebCore20HTMLConstructionSite31setCompatibilityModeFromDoctypeERKN3WTF6StringES4_S4_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 L1 : do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 2560 | 0) | 0) {
   i5 = i3 | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i7 = 0;
    } else {
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i6, H_BASE + 2512 | 0, 42, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2152 | 0, 52, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1664 | 0, 42, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1080 | 0, 31, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 672 | 0, 31, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 264 | 0, 38, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 64 | 0, 38, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 32 | 0, 30, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 8 | 0, 23, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2480 | 0, 24, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2456 | 0, 23, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2424 | 0, 29, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2400 | 0, 23, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2376 | 0, 21, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2344 | 0, 27, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2312 | 0, 27, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2280 | 0, 27, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2248 | 0, 27, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2208 | 0, 34, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2112 | 0, 34, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2072 | 0, 34, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2032 | 0, 34, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 2e3 | 0, 26, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1976 | 0, 19, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1928 | 0, 40, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1872 | 0, 53, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1824 | 0, 46, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1768 | 0, 48, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1712 | 0, 53, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1616 | 0, 46, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1560 | 0, 48, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1520 | 0, 35, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1472 | 0, 42, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1424 | 0, 42, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1368 | 0, 51, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1304 | 0, 59, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1224 | 0, 78, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1152 | 0, 69, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1112 | 0, 36, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 1032 | 0, 43, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 984 | 0, 45, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 928 | 0, 52, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 896 | 0, 31, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 864 | 0, 28, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 832 | 0, 28, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 808 | 0, 22, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 776 | 0, 29, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 744 | 0, 31, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 704 | 0, 35, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 624 | 0, 40, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 584 | 0, 38, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 560 | 0, 21, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i7 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 528 | 0, 25, 0) | 0) {
      break L1;
     }
     i7 = HEAP32[i5 >> 2] | 0;
    }
   } while (0);
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i7, H_BASE + 488 | 0) | 0) {
    break;
   }
   i6 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i6 | 0) == 0) {
     i9 = 0;
    } else {
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i6, H_BASE + 448 | 0, 35, 0) | 0) {
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i9 = 0;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 416 | 0, 31, 0) | 0) {
      break L1;
     }
     i9 = HEAP32[i5 >> 2] | 0;
    }
   } while (0);
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(i9, H_BASE + 376 | 0) | 0) {
    break;
   }
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i5 >> 2] | 0, H_BASE + 368 | 0) | 0) {
    break;
   }
   i6 = i4 | 0;
   if (__ZN3WTF17equalIgnoringCaseEPKNS_10StringImplEPKh(HEAP32[i6 >> 2] | 0, H_BASE + 304 | 0) | 0) {
    break;
   }
   i8 = HEAP32[i6 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = 120;
   } else {
    if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
     i10 = 120;
    } else {
     i11 = i8;
     i10 = 124;
    }
   }
   if ((i10 | 0) == 120) {
    i12 = HEAP32[i5 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i13 = i8;
    } else {
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i12, H_BASE + 224 | 0, 32, 0) | 0) {
      break;
     }
     i13 = HEAP32[i6 >> 2] | 0;
    }
    if ((i13 | 0) == 0) {
     i10 = 125;
    } else {
     i11 = i13;
     i10 = 124;
    }
   }
   if ((i10 | 0) == 124) {
    if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
     i10 = 125;
    } else {
     i10 = 128;
    }
   }
   do {
    if ((i10 | 0) == 125) {
     i12 = HEAP32[i5 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i10 = 132;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i12, H_BASE + 184 | 0, 36, 0) | 0) {
      break L1;
     } else {
      i10 = 128;
     }
    }
   } while (0);
   do {
    if ((i10 | 0) == 128) {
     i12 = HEAP32[i5 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i10 = 132;
      break;
     }
     if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i12, H_BASE + 144 | 0, 32, 0) | 0) {
      break;
     }
     i12 = HEAP32[i5 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i10 = 132;
      break;
     }
     if (!(__ZNK3WTF10StringImpl10startsWithEPKcjb(i12, H_BASE + 104 | 0, 36, 0) | 0)) {
      i10 = 132;
     }
    }
   } while (0);
   L139 : do {
    if ((i10 | 0) == 132) {
     i12 = HEAP32[i6 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
        i14 = i12;
       } else {
        i8 = HEAP32[i5 >> 2] | 0;
        if ((i8 | 0) == 0) {
         i15 = i12;
        } else {
         if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 224 | 0, 32, 0) | 0) {
          break L139;
         }
         i15 = HEAP32[i6 >> 2] | 0;
        }
        if ((i15 | 0) == 0) {
         break;
        } else {
         i14 = i15;
        }
       }
       if ((HEAP32[i14 + 4 >> 2] | 0) == 0) {
        break;
       }
       i8 = HEAP32[i5 >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       if (__ZNK3WTF10StringImpl10startsWithEPKcjb(i8, H_BASE + 184 | 0, 36, 0) | 0) {
        break L139;
       }
      }
     } while (0);
     HEAP8[i1 + 88 | 0] = 0;
     __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[i1 >> 2] | 0, 2);
     return;
    }
   } while (0);
   HEAP8[i1 + 88 | 0] = 0;
   __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[i1 >> 2] | 0, 1);
   return;
  }
 } while (0);
 HEAP8[i1 + 88 | 0] = 1;
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[i1 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 _memset(i7 | 0, 0, 13) | 0;
 i13 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i14 = i13 + 8 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
 }
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = i13;
 if (__ZNK7WebCore20HTMLConstructionSite18shouldFosterParentEv(i1) | 0) {
  __ZN7WebCore20HTMLConstructionSite14findFosterSiteERNS_24HTMLConstructionSiteTaskE(i1, i7);
  i15 = HEAP32[i14 >> 2] | 0;
 } else {
  i15 = i13;
 }
 do {
  if ((HEAP32[i15 + 12 >> 2] & 4 | 0) == 0) {
   i16 = i15;
  } else {
   i13 = HEAP32[i15 + 44 >> 2] | 0;
   i1 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i13 | 0) != (i1 | 0)) {
    if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i1 + 12 >> 2] | 0)) {
     i16 = i15;
     break;
    }
    if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i1 + 16 >> 2] | 0)) {
     i16 = i15;
     break;
    }
   }
   i1 = __ZNK7WebCore19HTMLTemplateElement7contentEv(i15) | 0;
   i13 = i1 | 0;
   if ((i1 | 0) != 0) {
    i17 = i1 + 8 | 0;
    HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
   }
   HEAP32[i14 >> 2] = i13;
   if ((i15 | 0) == 0) {
    i16 = i13;
    break;
   }
   i17 = i15 + 8 | 0;
   i1 = i17 | 0;
   i18 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i18;
   if ((i18 | 0) >= 1) {
    i16 = i13;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i16 = i13;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i17 - 8 | 0);
   i16 = i13;
  }
 } while (0);
 L20 : do {
  if ((i3 | 0) == 0) {
   i19 = 1;
  } else {
   if ((i3 | 0) != 2) {
    i19 = 0;
    break;
   }
   i15 = HEAP32[i2 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i19 = 1;
    break;
   }
   i13 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i19 = 1;
    break;
   }
   if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
    i17 = HEAP32[i15 + 8 >> 2] | 0;
    i18 = 0;
    while (1) {
     i1 = HEAP16[i17 + (i18 << 1) >> 1] | 0;
     if ((i1 & 65535) >>> 0 >= 33 >>> 0) {
      i19 = 0;
      break L20;
     }
     switch (i1 << 16 >> 16) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i19 = 0;
       break L20;
      }
     }
     i1 = i18 + 1 | 0;
     if (i1 >>> 0 < i13 >>> 0) {
      i18 = i1;
     } else {
      i19 = 1;
      break L20;
     }
    }
   } else {
    i18 = HEAP32[i15 + 8 >> 2] | 0;
    i17 = 0;
    while (1) {
     i1 = HEAP8[i18 + i17 | 0] | 0;
     if ((i1 & 255) >>> 0 >= 33 >>> 0) {
      i19 = 0;
      break L20;
     }
     switch (i1 & 255) {
     case 32:
     case 10:
     case 9:
     case 13:
     case 12:
      {
       break;
      }
     default:
      {
       i19 = 0;
       break L20;
      }
     }
     i1 = i17 + 1 | 0;
     if (i1 >>> 0 < i13 >>> 0) {
      i17 = i1;
     } else {
      i19 = 1;
      break L20;
     }
    }
   }
  }
 } while (0);
 L37 : do {
  if ((HEAP32[i16 + 12 >> 2] & 4 | 0) == 0) {
   i20 = 1;
  } else {
   i3 = HEAP32[i16 + 44 >> 2] | 0;
   i17 = HEAP32[__ZN7WebCore9HTMLNames9scriptTagE >> 2] | 0;
   if ((i3 | 0) == (i17 | 0)) {
    i20 = 0;
    break;
   }
   i13 = HEAP32[i3 + 12 >> 2] | 0;
   do {
    if ((i13 | 0) == (HEAP32[i17 + 12 >> 2] | 0)) {
     i18 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i17 + 16 >> 2] | 0);
     if (!i18) {
      break;
     }
     i20 = i18 ^ 1;
     break L37;
    }
   } while (0);
   i17 = HEAP32[__ZN7WebCore9HTMLNames8styleTagE >> 2] | 0;
   if ((i3 | 0) == (i17 | 0)) {
    i20 = 0;
    break;
   }
   do {
    if ((i13 | 0) == (HEAP32[i17 + 12 >> 2] | 0)) {
     i18 = (HEAP32[i3 + 16 >> 2] | 0) == (HEAP32[i17 + 16 >> 2] | 0);
     if (!i18) {
      break;
     }
     i20 = i18 ^ 1;
     break L37;
    }
   } while (0);
   i17 = HEAP32[__ZN7WebCore8SVGNames9scriptTagE >> 2] | 0;
   if ((i3 | 0) == (i17 | 0)) {
    i20 = 0;
    break;
   }
   if ((i13 | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
    i20 = 1;
    break;
   }
   i20 = (HEAP32[i3 + 16 >> 2] | 0) != (HEAP32[i17 + 16 >> 2] | 0);
  }
 } while (0);
 i17 = i20 ? 65536 : -1;
 i20 = i7 + 4 | 0;
 i18 = HEAP32[i20 >> 2] | 0;
 i15 = HEAP32[((i18 | 0) == 0 ? i16 + 40 | 0 : i18 + 24 | 0) >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   i21 = 0;
  } else {
   if ((HEAP32[i15 + 12 >> 2] & 1 | 0) == 0) {
    i21 = 0;
    break;
   }
   i21 = __ZN7WebCore13CharacterData16parserAppendDataERKN3WTF6StringEjj(i15, i2, 0, i17) | 0;
  }
 } while (0);
 i15 = i2 | 0;
 i18 = i5 | 0;
 i16 = i9 | 0;
 i1 = i9 | 0;
 i9 = i8 | 0;
 i22 = i10 | 0;
 i23 = i6 | 0;
 i24 = i12 | 0;
 i25 = i12 | 0;
 i12 = i11 | 0;
 i26 = i7 + 8 | 0;
 i27 = i21;
 while (1) {
  i21 = HEAP32[i15 >> 2] | 0;
  i28 = (i21 | 0) == 0;
  if (i28) {
   i29 = 0;
  } else {
   i29 = HEAP32[i21 + 4 >> 2] | 0;
  }
  if (i27 >>> 0 >= i29 >>> 0) {
   break;
  }
  i30 = (HEAP32[i14 >> 2] | 0) + 20 | 0;
  i31 = HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] | 0;
  do {
   if (i19) {
    do {
     if (i28) {
      HEAP32[i18 >> 2] = 0;
     } else {
      if ((HEAP32[i21 + 16 >> 2] & 16 | 0) == 0) {
       __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i21);
       break;
      } else {
       HEAP32[i18 >> 2] = i21;
       i32 = i21 | 0;
       HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
       break;
      }
     }
    } while (0);
    HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
    __ZN7WebCore4Text21createWithLengthLimitERNS_8DocumentERKN3WTF6StringEjj(i8, i31, i1, i27, i17);
    i32 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i33 = HEAP32[i16 >> 2] | 0;
    if ((i33 | 0) == 0) {
     i34 = i32;
     break;
    }
    i35 = i33 | 0;
    i36 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
    if ((i36 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i33);
     i34 = i32;
     break;
    } else {
     HEAP32[i35 >> 2] = i36;
     i34 = i32;
     break;
    }
   } else {
    __ZN7WebCore4Text21createWithLengthLimitERNS_8DocumentERKN3WTF6StringEjj(i8, i31, i2, i27, i17);
    i32 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i34 = i32;
   }
  } while (0);
  i31 = HEAP32[i34 + 36 >> 2] | 0;
  if ((i31 | 0) == 0) {
   i37 = 60;
  } else {
   if ((HEAP32[i31 + 4 >> 2] | 0) == 0) {
    i37 = 60;
   } else {
    i38 = i34;
   }
  }
  do {
   if ((i37 | 0) == 60) {
    i37 = 0;
    __ZNK3WTF6String9substringEjj(i10, i2, i27, -1);
    i31 = HEAP32[(HEAP32[i30 >> 2] | 0) + 8 >> 2] | 0;
    if (i19) {
     i21 = HEAP32[i22 >> 2] | 0;
     do {
      if ((i21 | 0) == 0) {
       HEAP32[i23 >> 2] = 0;
      } else {
       if ((HEAP32[i21 + 16 >> 2] & 16 | 0) == 0) {
        __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i21);
        break;
       } else {
        HEAP32[i23 >> 2] = i21;
        i28 = i21 | 0;
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 2;
        break;
       }
      }
     } while (0);
     HEAP32[i24 >> 2] = HEAP32[i23 >> 2];
     i39 = i25;
     i40 = 1;
    } else {
     i39 = i10;
     i40 = 0;
    }
    __ZN7WebCore4Text6createERNS_8DocumentERKN3WTF6StringE(i11, i31, i39);
    i21 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    do {
     if ((i34 | 0) != 0) {
      i28 = i34 + 8 | 0;
      i3 = i28 - 8 | 0;
      i13 = i28 | 0;
      i32 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
      HEAP32[i13 >> 2] = i32;
      do {
       if ((i32 | 0) < 1) {
        if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
         break;
        }
        __ZN7WebCore4Node14removedLastRefEv(i3);
       }
      } while (0);
      i3 = HEAP32[i12 >> 2] | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      i28 = i3 + 8 | 0;
      i3 = i28 | 0;
      i32 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
      HEAP32[i3 >> 2] = i32;
      if ((i32 | 0) >= 1) {
       break;
      }
      if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
       break;
      }
      __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
     }
    } while (0);
    do {
     if (i40) {
      i31 = HEAP32[i24 >> 2] | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      i28 = i31 | 0;
      i32 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
      if ((i32 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i31);
       break;
      } else {
       HEAP32[i28 >> 2] = i32;
       break;
      }
     }
    } while (0);
    i32 = HEAP32[i22 >> 2] | 0;
    if ((i32 | 0) == 0) {
     i38 = i21;
     break;
    }
    i28 = i32 | 0;
    i31 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
    if ((i31 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i32);
     i38 = i21;
     break;
    } else {
     HEAP32[i28 >> 2] = i31;
     i38 = i21;
     break;
    }
   }
  } while (0);
  i30 = HEAP32[i38 + 36 >> 2] | 0;
  if ((i30 | 0) == 0) {
   i41 = 0;
  } else {
   i41 = HEAP32[i30 + 4 >> 2] | 0;
  }
  i30 = i41 + i27 | 0;
  i31 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = i38;
  do {
   if ((i31 | 0) != 0) {
    i28 = i31 + 8 | 0;
    i32 = i28 | 0;
    i3 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
    HEAP32[i32 >> 2] = i3;
    if ((i3 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i28 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i28 - 8 | 0);
   }
  } while (0);
  __ZN7WebCoreL11executeTaskERNS_24HTMLConstructionSiteTaskE(i7);
  i27 = i30;
 }
 i27 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i26 = i27 + 8 | 0;
   i7 = i26 | 0;
   i38 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i26 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i26 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i20 >> 2] | 0;
 do {
  if ((i27 | 0) != 0) {
   i20 = i27 + 8 | 0;
   i26 = i20 | 0;
   i38 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
   HEAP32[i26 >> 2] = i38;
   if ((i38 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i20 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i20 - 8 | 0);
  }
 } while (0);
 i27 = HEAP32[i14 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i27 + 8 | 0;
 i27 = i14 | 0;
 i20 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 HEAP32[i27 >> 2] = i20;
 if ((i20 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i14 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20HTMLConstructionSite14findFosterSiteERNS_24HTMLConstructionSiteTaskE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 16 | 0;
 i4 = __ZNK7WebCore16HTMLElementStack7topmostERKN3WTF12AtomicStringE(i3, (HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0) + 12 | 0) | 0;
 do {
  if ((i4 | 0) != 0) {
   if (__ZNK7WebCore16HTMLElementStack12inTableScopeERKNS_13QualifiedNameE(i3, __ZN7WebCore9HTMLNames8tableTagE) | 0) {
    break;
   }
   i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5 + 8 | 0;
    HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
   }
   i6 = i2 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i5;
   if ((i7 | 0) == 0) {
    return;
   }
   i5 = i7 + 8 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    return;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
   return;
  }
 } while (0);
 i4 = __ZNK7WebCore16HTMLElementStack7topmostERKN3WTF12AtomicStringE(i3, (HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 | 0) | 0;
 if ((i4 | 0) == 0) {
  i5 = __ZNK7WebCore16HTMLElementStack8rootNodeEv(i3) | 0;
  if ((i5 | 0) != 0) {
   i6 = i5 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = i2 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = i5;
  if ((i7 | 0) == 0) {
   return;
  }
  i5 = i7 + 8 | 0;
  i7 = i5 | 0;
  i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  HEAP32[i7 >> 2] = i6;
  if ((i6 | 0) >= 1) {
   return;
  }
  if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  return;
 }
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i5 + 16 >> 2] | 0;
 L34 : do {
  if ((i7 | 0) == 0) {
   i8 = 18;
  } else {
   i9 = i7 + 12 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   L36 : do {
    if ((i10 & 4 | 0) == 0) {
     do {
      if ((HEAP8[i1 + 80 | 0] & 1) == 0) {
       i11 = i10;
      } else {
       if ((i7 | 0) == (__ZNK7WebCore16HTMLElementStack8rootNodeEv(i3) | 0)) {
        i12 = i2 | 0;
        break L36;
       } else {
        i11 = HEAP32[i9 >> 2] | 0;
        break;
       }
      }
     } while (0);
     if ((i11 & 4096 | 0) == 0) {
      i8 = 18;
      break L34;
     }
     i13 = i2 | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 248 >> 2] & 1](i7) | 0) {
      i12 = i13;
     } else {
      i14 = i13;
      break L34;
     }
    } else {
     i12 = i2 | 0;
    }
   } while (0);
   i9 = i7 + 8 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i12 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i7;
   do {
    if ((i10 | 0) != 0) {
     i9 = i10 + 8 | 0;
     i13 = i9 | 0;
     i15 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
     HEAP32[i13 >> 2] = i15;
     if ((i15 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
    }
   } while (0);
   if ((i5 | 0) != 0) {
    i10 = i5 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   i10 = i2 + 4 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i6;
   if ((i9 | 0) == 0) {
    return;
   }
   i10 = i9 + 8 | 0;
   i9 = i10 | 0;
   i15 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i15;
   if ((i15 | 0) >= 1) {
    return;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    return;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
   return;
  }
 } while (0);
 if ((i8 | 0) == 18) {
  i14 = i2 | 0;
 }
 i2 = HEAP32[(HEAP32[HEAP32[i4 + 4 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 8 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i14 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i14 | 0) == 0) {
  return;
 }
 i2 = i14 + 8 | 0;
 i14 = i2 | 0;
 i4 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i4;
 if ((i4 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 return;
}
function __ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 44 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 36 | 0;
 i9 = i1 + 16 | 0;
 i10 = _llvm_uadd_with_overflow_i32(i7 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = i7;
 i12 = i10;
 i10 = i7;
 while (1) {
  i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i12 << 2) >> 2] | 0;
  if ((i7 | 0) == 0) {
   i13 = i10;
   i14 = 10;
   break;
  }
  if (__ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE(i9, HEAP32[i7 + 4 >> 2] | 0) | 0) {
   i14 = 7;
   break;
  }
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i12 | 0) == 0) {
   i15 = 0;
   i16 = i7;
   break;
  }
  i17 = i12 - 1 | 0;
  if (i7 >>> 0 > i17 >>> 0) {
   i11 = i12;
   i12 = i17;
   i10 = i7;
  } else {
   i14 = 36;
   break;
  }
 }
 if ((i14 | 0) == 7) {
  i13 = HEAP32[i6 >> 2] | 0;
  i14 = 10;
 } else if ((i14 | 0) == 36) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 do {
  if ((i14 | 0) == 10) {
   if (i11 >>> 0 < i13 >>> 0) {
    i15 = i11;
    i16 = i13;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if (i15 >>> 0 >= i16 >>> 0) {
  STACKTOP = i2;
  return;
 }
 i16 = i3 | 0;
 i13 = i1 + 16 | 0;
 i11 = i4 | 0;
 i14 = i5 | 0;
 i10 = i15;
 while (1) {
  i15 = (HEAP32[i8 >> 2] | 0) + (i10 << 2) | 0;
  i12 = HEAP32[i15 >> 2] | 0;
  do {
   if ((i12 | 0) == 0) {
    __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i3, i1, i12);
    i7 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i18 = i7;
   } else {
    i7 = i12 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i3, i1, i12);
    i7 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i17 = i12 | 0;
    i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     i18 = i7;
     break;
    } else {
     HEAP32[i17 >> 2] = i19;
     i18 = i7;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[(HEAP32[HEAP32[i13 >> 2] >> 2] | 0) + 4 >> 2] | 0;
  i7 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i19 = i7 + 8 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  }
  __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i12, i4, 0);
  i12 = HEAP32[i11 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i19 = i12 + 8 | 0;
    i7 = i19 | 0;
    i17 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    HEAP32[i7 >> 2] = i17;
    if ((i17 | 0) >= 1) {
     break;
    }
    if ((HEAP32[i19 + 8 >> 2] | 0) != 0) {
     break;
    }
    __ZN7WebCore4Node14removedLastRefEv(i19 - 8 | 0);
   }
  } while (0);
  HEAP32[i14 >> 2] = i18;
  if ((i18 | 0) != 0) {
   i12 = i18 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  }
  __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i9, i5);
  i12 = HEAP32[i14 >> 2] | 0;
  do {
   if ((i12 | 0) != 0) {
    i19 = i12 | 0;
    i17 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break;
    } else {
     HEAP32[i19 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i12 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i18;
  do {
   if ((i12 | 0) != 0) {
    i17 = i12 | 0;
    i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i12);
     __ZN3WTF8fastFreeEPv(i12);
     break;
    } else {
     HEAP32[i17 >> 2] = i19;
     break;
    }
   }
  } while (0);
  i10 = i10 + 1 | 0;
  if (i10 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 _memset(i6 | 0, 0, 13) | 0;
 if ((i2 | 0) != 0) {
  i8 = i2 + 8 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i6 + 8 | 0;
 HEAP32[i2 >> 2] = i3;
 i3 = i6 + 12 | 0;
 HEAP8[i3] = i4 & 1;
 do {
  if (__ZNK7WebCore20HTMLConstructionSite18shouldFosterParentEv(i1) | 0) {
   i4 = i7 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   HEAP32[i4 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i10 = i9 + 8 | 0;
    HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   }
   __ZN7WebCore20HTMLConstructionSite12fosterParentEN3WTF10PassRefPtrINS_4NodeEEE(i1, i7);
   i10 = HEAP32[i4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i4 = i10 + 8 | 0;
   i10 = i4 | 0;
   i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  } else {
   do {
    if ((HEAP32[i1 + 32 >> 2] | 0) >>> 0 > (HEAP32[i1 + 84 >> 2] | 0) >>> 0) {
     i4 = HEAP32[(HEAP32[i8 >> 2] | 0) + 16 >> 2] | 0;
     if ((i4 | 0) == 0) {
      break;
     }
     i9 = i4 + 8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i4;
     if ((i9 | 0) == 0) {
      break;
     }
     i4 = i9 + 8 | 0;
     i9 = i4 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i10;
     if ((i10 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
    }
   } while (0);
   i4 = i1 + 48 | 0;
   i10 = i1 + 56 | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
    __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i4, i6);
    break;
   }
   i11 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i8 >> 2] | 0;
   HEAP32[i11 + (i9 << 4) >> 2] = i4;
   if ((i4 | 0) != 0) {
    i12 = i4 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i11 + (i9 << 4) + 4 >> 2] = i12;
   if ((i12 | 0) != 0) {
    i4 = i12 + 8 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
   }
   i4 = HEAP32[i2 >> 2] | 0;
   HEAP32[i11 + (i9 << 4) + 8 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i12 = i4 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   HEAP8[i11 + (i9 << 4) + 12 | 0] = HEAP8[i3] & 1;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 8 | 0;
   i1 = i2 | 0;
   i7 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 8 | 0;
   i2 = i6 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   HEAP32[i2 >> 2] = i7;
   if ((i7 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
  }
 } while (0);
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i3 + 8 | 0;
 i3 = i8 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20HTMLConstructionSite21insertHTMLFormElementEPNS_15AtomicHTMLTokenEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i5, i1, i2);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i5;
 i10 = i1 + 16 | 0;
 i11 = HEAP32[(HEAP32[HEAP32[i10 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i11 + 12 >> 2] & 4 | 0) == 0) {
   i12 = 6;
  } else {
   i13 = HEAP32[i11 + 44 >> 2] | 0;
   i14 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i13 | 0) != (i14 | 0)) {
    if ((HEAP32[i13 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     i12 = 6;
     break;
    }
    if ((HEAP32[i13 + 16 >> 2] | 0) != (HEAP32[i14 + 16 >> 2] | 0)) {
     i12 = 6;
     break;
    }
   }
   i15 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i11) | 0) + 20 | 0;
  }
 } while (0);
 if ((i12 | 0) == 6) {
  i15 = i11 + 20 | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] | 0) + 332 >> 2] | 0) != 0) {
   if ((i5 | 0) != 0) {
    i11 = i5 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   i11 = i1 + 12 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i9;
   if ((i12 | 0) == 0) {
    break;
   }
   i11 = i12 + 8 | 0;
   i12 = i11 | 0;
   i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  }
 } while (0);
 HEAP8[i5 + 120 | 0] = i3 & 1;
 i3 = HEAP32[(HEAP32[HEAP32[i10 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i10 = i6 | 0;
 HEAP32[i10 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i9 = i5 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i3, i6, 0);
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 + 8 | 0;
   i3 = i10 | 0;
   i9 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i6 = i8 | 0;
 HEAP32[i6 >> 2] = i5;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i7, i8, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i7);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 8 | 0;
 i1 = i6 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i6 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i6 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20HTMLConstructionSite19insertScriptElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 76 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) != 3;
 i10 = i9 & (HEAP8[i1 + 80 | 0] & 1) != 0;
 i11 = i1 + 16 | 0;
 i12 = HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i12 + 12 >> 2] & 4 | 0) == 0) {
   i13 = 6;
  } else {
   i14 = HEAP32[i12 + 44 >> 2] | 0;
   i15 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i14 | 0) != (i15 | 0)) {
    if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i15 + 12 >> 2] | 0)) {
     i13 = 6;
     break;
    }
    if ((HEAP32[i14 + 16 >> 2] | 0) != (HEAP32[i15 + 16 >> 2] | 0)) {
     i13 = 6;
     break;
    }
   }
   i16 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i12) | 0) + 20 | 0;
  }
 } while (0);
 if ((i13 | 0) == 6) {
  i16 = i12 + 20 | 0;
 }
 __ZN7WebCore17HTMLScriptElement6createERKNS_13QualifiedNameERNS_8DocumentEbb(i4, __ZN7WebCore9HTMLNames9scriptTagE, HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0, i9, i10);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = i4 | 0;
 i9 = i2 + 32 | 0;
 if (((HEAP32[i8 >> 2] | 0) - 2 | 0) >>> 0 >= 2 >>> 0) {
  __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i10, i9);
 }
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i10, i9);
 do {
  if (((HEAP32[i8 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
   i9 = HEAP32[(HEAP32[HEAP32[i11 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   i10 = i5 | 0;
   HEAP32[i10 >> 2] = i4;
   if ((i4 | 0) != 0) {
    i16 = i4 + 8 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i9, i5, 0);
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i10 = i9 + 8 | 0;
   i9 = i10 | 0;
   i16 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i16;
   if ((i16 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i4;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i6, i7, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20HTMLConstructionSite32insertHTMLHtmlStartTagBeforeHTMLEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 | 0;
 __ZN7WebCore15HTMLHtmlElement6createERNS_8DocumentE(i4, HEAP32[i8 >> 2] | 0);
 i9 = i4 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i4 | 0;
 i10 = i2 + 32 | 0;
 if (((HEAP32[i1 + 76 >> 2] | 0) - 2 | 0) >>> 0 >= 2 >>> 0) {
  __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i9, i10);
 }
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i9, i10);
 i10 = HEAP32[i1 + 4 >> 2] | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i4;
 i11 = (i4 | 0) == 0;
 if (!i11) {
  i12 = i4 + 8 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 }
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i10, i5, 0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i10 = i9 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i4;
 if (!i11) {
  i9 = i4 + 8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 }
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i6, i7, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore16HTMLElementStack19pushHTMLHtmlElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i6);
 i2 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i7 = i5 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 __ZN7WebCore20HTMLConstructionSite18executeQueuedTasksEv(i1);
 __ZN7WebCore15HTMLHtmlElement16insertedByParserEv(i4);
 i2 = HEAP32[(HEAP32[i8 >> 2] | 0) + 332 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i1 + 80 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore11FrameLoader32dispatchDocumentElementAvailableEv(i2 + 80 | 0);
  }
 } while (0);
 if (i11) {
  STACKTOP = i3;
  return;
 }
 i11 = i4 + 8 | 0;
 i4 = i11 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i4 + 56 | 0;
 i8 = i4 + 64 | 0;
 HEAP32[i5 >> 2] = 2;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i5 + 4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i10 = i9 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i5 + 24 >> 2] = 0;
 HEAP8[i5 + 28 | 0] = 0;
 _memset(i5 + 8 | 0, 0, 13) | 0;
 i10 = HEAP32[i3 + 16 >> 2] | 0;
 i9 = i3 + 20 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = i5 + 32 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i5 + 36 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i5 + 40 >> 2] = i11;
 do {
  if ((i10 | 0) != 0) {
   if (i10 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 3) | 0;
   HEAP32[i13 >> 2] = i11 >>> 3;
   i14 = __ZN3WTF10fastMallocEj(i11) | 0;
   i11 = i14;
   HEAP32[i12 >> 2] = i11;
   if ((i14 | 0) == 0) {
    break;
   }
   i14 = HEAP32[i3 + 12 >> 2] | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   i16 = i14 + (i15 << 3) | 0;
   if ((i15 | 0) == 0) {
    break;
   } else {
    i17 = i14;
    i18 = i11;
   }
   while (1) {
    i11 = HEAP32[i17 >> 2] | 0;
    HEAP32[i18 >> 2] = i11;
    i14 = i11 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    i14 = HEAP32[i17 + 4 >> 2] | 0;
    HEAP32[i18 + 4 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i11 = i14 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
    }
    i11 = i17 + 8 | 0;
    if ((i11 | 0) == (i16 | 0)) {
     break;
    } else {
     i17 = i11;
     i18 = i18 + 8 | 0;
    }
   }
  }
 } while (0);
 i18 = i3 + 24 | 0;
 if ((HEAP32[i18 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
  __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i6, i2, i5);
  i3 = i6 | 0;
  i6 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = 0;
  i19 = i6;
 } else {
  __ZN7WebCore20HTMLConstructionSite13createElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i7, i2, i5, i18);
  i2 = i7 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i19 = i7;
 }
 i7 = i8 | 0;
 HEAP32[i7 >> 2] = i19;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i1, i8, i5, i18);
 i18 = HEAP32[i7 >> 2] | 0;
 if ((i18 | 0) == 0) {
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 i7 = i18 + 8 | 0;
 i18 = i7 | 0;
 i8 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
 HEAP32[i18 >> 2] = i8;
 if ((i8 | 0) >= 1) {
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 __ZN7WebCore15AtomicHTMLTokenD2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20HTMLConstructionSite20insertForeignElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 __ZN7WebCore20HTMLConstructionSite13createElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i5, i1, i2, i3);
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 do {
  if (((HEAP32[i1 + 76 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
   i10 = 4;
  } else {
   if ((__ZN7WebCore25toScriptElementIfPossibleEPNS_7ElementE(i5) | 0) == 0) {
    i10 = 4;
    break;
   }
   i11 = i2 + 28 | 0;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i9 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
   i12 = i6 | 0;
   HEAP32[i12 >> 2] = i5;
   if ((i5 | 0) != 0) {
    i13 = i5 + 8 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   }
   i13 = i2 + 28 | 0;
   __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i9, i6, (HEAP8[i13] & 1) != 0);
   i9 = HEAP32[i12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i11 = i13;
    break;
   }
   i12 = i9 + 8 | 0;
   i9 = i12 | 0;
   i14 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i14;
   if ((i14 | 0) >= 1) {
    i11 = i13;
    break;
   }
   if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
    i11 = i13;
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i12 - 8 | 0);
   i11 = i13;
  }
 } while (0);
 if ((HEAP8[i11] & 1) != 0) {
  if ((i5 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i11 = i5 + 8 | 0;
  i6 = i11 | 0;
  i10 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  HEAP32[i6 >> 2] = i10;
  if ((i10 | 0) >= 1) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
  STACKTOP = i4;
  return;
 }
 i11 = i8 | 0;
 HEAP32[i11 >> 2] = i5;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i7, i8, i2, i3);
 __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i7);
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i7 = i1 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i11 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i1 + 8 | 0;
 i1 = i11 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i11 + 8 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i11 - 8 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL11executeTaskERNS_24HTMLConstructionSiteTaskE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) != 0) {
   i7 = HEAP32[i6 + 44 >> 2] | 0;
   i8 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i7 | 0) != (i8 | 0)) {
    if ((HEAP32[i7 + 12 >> 2] | 0) != (HEAP32[i8 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i7 + 16 >> 2] | 0) != (HEAP32[i8 + 16 >> 2] | 0)) {
     break;
    }
   }
   i8 = __ZNK7WebCore19HTMLTemplateElement7contentEv(i6) | 0;
   if ((i8 | 0) != 0) {
    i7 = i8 + 8 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i8;
   if ((i7 | 0) == 0) {
    break;
   }
   i8 = i7 + 8 | 0;
   i7 = i8 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i9;
   if ((i9 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i8 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 4 | 0;
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i10 = i4 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) != 0) {
    i11 = i7 + 8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
   }
   __ZN7WebCore13ContainerNode17parserAppendChildEN3WTF10PassRefPtrINS_4NodeEEE(i9, i4);
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = i11 + 8 | 0;
   i11 = i10 | 0;
   i12 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i12;
   if ((i12 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  } else {
   i10 = i3 | 0;
   HEAP32[i10 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i13 = i8;
   } else {
    i12 = i7 + 8 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
    i13 = HEAP32[i6 >> 2] | 0;
   }
   __ZN7WebCore13ContainerNode18parserInsertBeforeEN3WTF10PassRefPtrINS_4NodeEEEPS3_(i9, i3, i13);
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i10 = i12 + 8 | 0;
   i12 = i10 | 0;
   i11 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
   HEAP32[i12 >> 2] = i11;
   if ((i11 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
  }
 } while (0);
 i13 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 140 >> 2] & 3](i13);
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 3](i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20HTMLConstructionSite21insertHTMLHeadElementEPNS_15AtomicHTMLTokenE(i1, i2) {
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
 __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i6, i1, i2);
 i9 = i5 | 0;
 i10 = i6 | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i6;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i4, i5, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 i2 = i4 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i6 = i9 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i4;
   if ((i4 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i9 = HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0;
 i4 = i7 | 0;
 HEAP32[i4 >> 2] = i9;
 if ((i9 | 0) != 0) {
  i6 = i9 + 8 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i5, i7, 0);
 i7 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 8 | 0;
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i6;
   if ((i6 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
  }
 } while (0);
 i7 = i8 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN7WebCore16HTMLElementStack19pushHTMLHeadElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i8);
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i8 | 0;
 i1 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i8);
  __ZN3WTF8fastFreeEPv(i8);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i7 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20HTMLConstructionSite12fosterParentEN3WTF10PassRefPtrINS_4NodeEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 _memset(i4 | 0, 0, 13) | 0;
 __ZN7WebCore20HTMLConstructionSite14findFosterSiteERNS_24HTMLConstructionSiteTaskE(i1, i4);
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i4 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i6 | 0) != 0) {
   i2 = i6 + 8 | 0;
   i7 = i2 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   HEAP32[i7 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i6 = i1 + 48 | 0;
 i2 = i1 + 56 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i6, i4);
 } else {
  i1 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  HEAP32[i1 + (i8 << 4) >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  i7 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i1 + (i8 << 4) + 4 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i6 = i7 + 8 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i5 >> 2] | 0;
  HEAP32[i1 + (i8 << 4) + 8 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i7 = i6 + 8 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  }
  HEAP8[i1 + (i8 << 4) + 12 | 0] = HEAP8[i4 + 12 | 0] & 1;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i8 = i5 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 8 | 0;
   i1 = i5 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   HEAP32[i1 >> 2] = i8;
   if ((i8 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 + 8 | 0;
 i2 = i4 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i4 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20HTMLConstructionSite18executeQueuedTasksEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 + 32 | 0;
 i4 = i1 + 56 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 + 12 | 0;
 i7 = i3 | 0;
 HEAP32[i7 >> 2] = i6;
 i8 = i3 + 4 | 0;
 HEAP32[i8 >> 2] = 1;
 i9 = i3 + 8 | 0;
 HEAP32[i9 >> 2] = i5;
 HEAP32[i4 >> 2] = 0;
 i4 = i2 | 0;
 _llvm_lifetime_start(16, 0, i4 | 0);
 i10 = i2 + 16 | 0;
 _llvm_lifetime_start(16, 0, i10 | 0);
 i11 = i1 + 48 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = i1 + 60 | 0;
 i14 = i13;
 if ((i12 | 0) == (i14 | 0)) {
  HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i10 = i1 + 52 | 0;
  HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i10 >> 2] = 1;
  i15 = 0;
  i16 = i5;
 } else {
  HEAP32[i7 >> 2] = i12;
  HEAP32[i11 >> 2] = i14;
  HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i13 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i13 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i13 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
  i4 = i1 + 52 | 0;
  HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i4 >> 2] = 1;
  i15 = 0;
  i16 = i5;
 }
 while (1) {
  if (i16 >>> 0 <= i15 >>> 0) {
   i17 = 6;
   break;
  }
  __ZN7WebCoreL11executeTaskERNS_24HTMLConstructionSiteTaskE((HEAP32[i7 >> 2] | 0) + (i15 << 4) | 0);
  i4 = i15 + 1 | 0;
  if (i4 >>> 0 >= i5 >>> 0) {
   break;
  }
  i15 = i4;
  i16 = HEAP32[i9 >> 2] | 0;
 }
 if ((i17 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEED1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20HTMLConstructionSite13insertDoctypeEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i2 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i4, HEAP32[i8 + 4 >> 2] | 0, HEAP32[i8 + 12 >> 2] | 0);
 i8 = i4 | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 __ZN3WTF10StringImpl20create8BitIfPossibleEPKtj(i5, HEAP32[i9 + 16 >> 2] | 0, HEAP32[i9 + 24 >> 2] | 0);
 i9 = i5 | 0;
 i10 = i1 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i2 + 4 | 0;
 i2 = __Znwj(60) | 0;
 __ZN7WebCore12DocumentTypeC1ERNS_8DocumentERKN3WTF6StringES6_S6_(i2, i11, i12, i4, i5);
 i11 = HEAP32[i1 + 4 >> 2] | 0;
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = i2;
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i11, i6, 0);
 i6 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i13 = i6 + 8 | 0;
   i11 = i13 | 0;
   i2 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   HEAP32[i11 >> 2] = i2;
   if ((i2 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
  }
 } while (0);
 do {
  if ((HEAP8[i1 + 80 | 0] & 1) == 0) {
   if ((HEAP8[(HEAP32[i7 >> 2] | 0) + 28 | 0] & 1) == 0) {
    __ZN7WebCore20HTMLConstructionSite31setCompatibilityModeFromDoctypeERKN3WTF6StringES4_S4_(i1, i12, i4, i5);
    break;
   } else {
    HEAP8[i1 + 88 | 0] = 1;
    __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[i10 >> 2] | 0, 0);
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 | 0;
   i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i9 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i10 | 0;
 i1 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i10);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i8 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore20HTMLConstructionSite18shouldFosterParentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 81 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 16 | 0;
 i1 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = i5 + 1;
   if ((i5 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 28 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = i5 + 1;
   if ((i5 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN7WebCore9HTMLNames8tbodyTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN7WebCore9HTMLNames8tfootTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN7WebCore9HTMLNames8theadTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i5 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i2 = 1;
   } else {
    break;
   }
   return i2 | 0;
  }
 } while (0);
 i5 = HEAP32[__ZN7WebCore9HTMLNames5trTagE >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0);
 return i2 | 0;
}
function __ZN7WebCore20HTMLConstructionSite21insertHTMLBodyElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i4, i1, i2);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i10 = i4 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i8, i5, 0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i4;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i6, i7, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore16HTMLElementStack19pushHTMLBodyElementEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL16hasImpliedEndTagEPKNS_13HTMLStackItemE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[__ZN7WebCore9HTMLNames5ddTagE >> 2] | 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5dtTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5liTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 12 >> 2] & 16 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames9optionTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
    return i4 | 0;
   }
   if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11optgroupTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames4pTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5rpTagE >> 2] | 0;
 do {
  if ((i3 | 0) == (HEAP32[i2 + 12 >> 2] | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0)) {
    i4 = 1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[__ZN7WebCore9HTMLNames5rtTagE >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 12 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 24 >> 2] | 0) == (HEAP32[i2 + 16 >> 2] | 0);
 return i4 | 0;
}
function __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 4) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 4 << 4) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 HEAP32[i12 + (i6 << 4) >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 + 8 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 4) + 4 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 + 8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 i2 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 << 4) + 8 >> 2] = i2;
 if ((i2 | 0) == 0) {
  i13 = i12 + (i6 << 4) + 12 | 0;
  i14 = i11 + 12 | 0;
  i15 = HEAP8[i14] | 0;
  i16 = i15 & 1;
  HEAP8[i13] = i16;
  i17 = HEAP32[i3 >> 2] | 0;
  i18 = i17 + 1 | 0;
  HEAP32[i3 >> 2] = i18;
  return;
 }
 i5 = i2 + 8 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i13 = i12 + (i6 << 4) + 12 | 0;
 i14 = i11 + 12 | 0;
 i15 = HEAP8[i14] | 0;
 i16 = i15 & 1;
 HEAP8[i13] = i16;
 i17 = HEAP32[i3 >> 2] | 0;
 i18 = i17 + 1 | 0;
 HEAP32[i3 >> 2] = i18;
 return;
}
function __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i4, i1, i2);
 i8 = i4 | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i10 = i4 + 8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
 }
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i8, i5, 0);
 i5 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 8 | 0;
   i8 = i9 | 0;
   i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   HEAP32[i8 >> 2] = i10;
   if ((i10 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i9 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i9 - 8 | 0);
  }
 } while (0);
 i5 = i7 | 0;
 HEAP32[i5 >> 2] = i4;
 __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i6, i7, i2, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 __ZN7WebCore16HTMLElementStack4pushEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 16 | 0, i6);
 i1 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 | 0;
   i2 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) == 0) {
    __ZN7WebCore13HTMLStackItemD2Ev(i1);
    __ZN3WTF8fastFreeEPv(i1);
    break;
   } else {
    HEAP32[i6 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 8 | 0;
 i1 = i5 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i5 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = __ZN3WTF10fastMallocEj(32) | 0;
 i6 = i5;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i5 >> 2] = 1;
 HEAP32[i5 + 4 >> 2] = i2;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i7 = i2 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 2;
 }
 i7 = HEAP32[i3 + 36 >> 2] | 0;
 i2 = i3 + 40 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 i9 = i5 + 12 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 16 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i5 + 20 >> 2] = i8;
 do {
  if ((i7 | 0) != 0) {
   if (i7 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i8 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 3) | 0;
   HEAP32[i10 >> 2] = i8 >>> 3;
   i11 = __ZN3WTF10fastMallocEj(i8) | 0;
   i8 = i11;
   HEAP32[i9 >> 2] = i8;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i3 + 32 >> 2] | 0;
   i12 = HEAP32[i2 >> 2] | 0;
   i13 = i11 + (i12 << 3) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i8;
   }
   while (1) {
    i8 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i8;
    i11 = i8 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    i11 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i15 + 4 >> 2] = i11;
    if ((i11 | 0) != 0) {
     i8 = i11 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
    }
    i8 = i14 + 8 | 0;
    if ((i8 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i8;
     i15 = i15 + 8 | 0;
    }
   }
  }
 } while (0);
 i15 = HEAP32[i4 >> 2] | 0;
 HEAP32[i5 + 24 >> 2] = i15;
 if ((i15 | 0) == 0) {
  i16 = i5 + 28 | 0;
  HEAP8[i16] = 0;
  i17 = i1 | 0;
  HEAP32[i17 >> 2] = i6;
  return;
 }
 i4 = i15 | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 i16 = i5 + 28 | 0;
 HEAP8[i16] = 0;
 i17 = i1 | 0;
 HEAP32[i17 >> 2] = i6;
 return;
}
function __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i5, __ZN3WTF8nullAtomE, i3 + 4 | 0, __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE);
 i7 = HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
   i8 = 6;
  } else {
   i9 = HEAP32[i7 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i9 | 0) != (i10 | 0)) {
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     i8 = 6;
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0)) {
     i8 = 6;
     break;
    }
   }
   i11 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i7) | 0) + 20 | 0;
  }
 } while (0);
 if ((i8 | 0) == 6) {
  i11 = i7 + 20 | 0;
 }
 i7 = HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i7 + 332 >> 2] | 0) == 0) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 12 >> 2] | 0;
 }
 __ZN7WebCore18HTMLElementFactory13createElementERKNS_13QualifiedNameERNS_8DocumentEPNS_15HTMLFormElementEb(i6, i5, i7, i12, 1);
 i12 = i6 | 0;
 i6 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = 0;
 i12 = i6 | 0;
 i6 = i3 + 32 | 0;
 if (((HEAP32[i2 + 76 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i12, i6);
  i13 = i1 | 0;
  HEAP32[i13 >> 2] = i12;
  __ZN7WebCore13QualifiedNameD1Ev(i5);
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i12, i6);
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i12, i6);
 i13 = i1 | 0;
 HEAP32[i13 >> 2] = i12;
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((HEAP8[i1 + 80 | 0] & 1) != 0) {
  return;
 }
 i3 = __ZNK7WebCore16HTMLElementStack11htmlElementEv(i1 + 16 | 0) | 0;
 i1 = i2 + 40 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i2 + 32 | 0;
 i2 = i3 + 48 | 0;
 i6 = 0;
 i7 = i4;
 while (1) {
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 + (i6 << 3) | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  L9 : do {
   if ((i9 | 0) == 0) {
    i10 = 15;
   } else {
    i11 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i11 & 1 | 0) == 0) {
     i12 = i11 >>> 1 & 134217727;
     i13 = i9 + 20 | 0;
    } else {
     i11 = i9 + 24 | 0;
     i12 = HEAP32[i11 + 8 >> 2] | 0;
     i13 = HEAP32[i11 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     i10 = 15;
     break;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    i14 = i11 + 12 | 0;
    i15 = i11 + 16 | 0;
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
     i18 = i16 + 1 | 0;
     if (i18 >>> 0 < i12 >>> 0) {
      i16 = i18;
     } else {
      i10 = 15;
      break L9;
     }
    }
    if ((i17 | 0) == 0) {
     i10 = 15;
    } else {
     i19 = i7;
    }
   }
  } while (0);
  if ((i10 | 0) == 15) {
   i10 = 0;
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i3, i8 | 0, i4 + (i6 << 3) + 4 | 0);
   i19 = HEAP32[i1 >> 2] | 0;
  }
  i9 = i6 + 1 | 0;
  if (i9 >>> 0 < i19 >>> 0) {
   i6 = i9;
   i7 = i19;
  } else {
   break;
  }
 }
 return;
}
function __ZN7WebCore20HTMLConstructionSite13insertCommentEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] & 4 | 0) == 0) {
   i7 = 6;
  } else {
   i8 = HEAP32[i6 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i8 | 0) != (i9 | 0)) {
    if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
     i7 = 6;
     break;
    }
    if ((HEAP32[i8 + 16 >> 2] | 0) != (HEAP32[i9 + 16 >> 2] | 0)) {
     i7 = 6;
     break;
    }
   }
   i10 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i6) | 0) + 20 | 0;
  }
 } while (0);
 if ((i7 | 0) == 6) {
  i10 = i6 + 20 | 0;
 }
 __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i5, HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] | 0, i2 + 8 | 0);
 i2 = i4 | 0;
 i10 = i5 | 0;
 i5 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i6, i4, 0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = i4 + 8 | 0;
 i4 = i10 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i10 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i10 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15AtomicHTMLTokenD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 32 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 3) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i3 | 0);
   i3 = i3 + 8 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 + 36 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i4 = i2 + 24 | 0;
  if ((HEAP32[i4 >> 2] | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
  }
  i4 = i2 + 16 | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 + 20 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i6);
  }
  i6 = i2 + 12 | 0;
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
  }
  i6 = i2 + 4 | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP32[i2 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZdlPv(i2 | 0);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
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
function __ZN7WebCore20HTMLConstructionSite28insertHTMLBodyStartTagInBodyEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = __ZNK7WebCore16HTMLElementStack11bodyElementEv(i1 + 16 | 0) | 0;
 i1 = i2 + 40 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i2 + 32 | 0;
 i2 = i3 + 48 | 0;
 i6 = 0;
 i7 = i4;
 while (1) {
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 + (i6 << 3) | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  L6 : do {
   if ((i9 | 0) == 0) {
    i10 = 14;
   } else {
    i11 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i11 & 1 | 0) == 0) {
     i12 = i11 >>> 1 & 134217727;
     i13 = i9 + 20 | 0;
    } else {
     i11 = i9 + 24 | 0;
     i12 = HEAP32[i11 + 8 >> 2] | 0;
     i13 = HEAP32[i11 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     i10 = 14;
     break;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    i14 = i11 + 12 | 0;
    i15 = i11 + 16 | 0;
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
     i18 = i16 + 1 | 0;
     if (i18 >>> 0 < i12 >>> 0) {
      i16 = i18;
     } else {
      i10 = 14;
      break L6;
     }
    }
    if ((i17 | 0) == 0) {
     i10 = 14;
    } else {
     i19 = i7;
    }
   }
  } while (0);
  if ((i10 | 0) == 14) {
   i10 = 0;
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i3, i8 | 0, i4 + (i6 << 3) + 4 | 0);
   i19 = HEAP32[i1 >> 2] | 0;
  }
  i9 = i6 + 1 | 0;
  if (i9 >>> 0 < i19 >>> 0) {
   i6 = i9;
   i7 = i19;
  } else {
   break;
  }
 }
 return;
}
function __ZN7WebCore20HTMLConstructionSite13createElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZN7WebCore13QualifiedNameC1ERKN3WTF12AtomicStringES4_S4_(i6, __ZN3WTF8nullAtomE, i3 + 4 | 0, i4);
 i4 = HEAP32[(HEAP32[HEAP32[i2 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
   i8 = 6;
  } else {
   i9 = HEAP32[i4 + 44 >> 2] | 0;
   i10 = HEAP32[__ZN7WebCore9HTMLNames11templateTagE >> 2] | 0;
   if ((i9 | 0) != (i10 | 0)) {
    if ((HEAP32[i9 + 12 >> 2] | 0) != (HEAP32[i10 + 12 >> 2] | 0)) {
     i8 = 6;
     break;
    }
    if ((HEAP32[i9 + 16 >> 2] | 0) != (HEAP32[i10 + 16 >> 2] | 0)) {
     i8 = 6;
     break;
    }
   }
   i11 = (__ZNK7WebCore19HTMLTemplateElement7contentEv(i4) | 0) + 20 | 0;
  }
 } while (0);
 if ((i8 | 0) == 6) {
  i11 = i4 + 20 | 0;
 }
 __ZN7WebCore8Document13createElementERKNS_13QualifiedNameEb(i7, HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] | 0, i6, 1);
 i11 = i7 | 0;
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = i3 + 32 | 0;
 if (((HEAP32[i2 + 76 >> 2] | 0) - 2 | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i7, i11);
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i7;
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore7Element24stripScriptingAttributesERN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i7, i11);
 __ZN7WebCore7Element19parserSetAttributesERKN3WTF6VectorINS_9AttributeELj0ENS1_15CrashOnOverflowEEE(i7, i11);
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i7;
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20HTMLConstructionSite35mergeAttributesFromTokenIntoElementEPNS_15AtomicHTMLTokenEPNS_7ElementE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i1 = i2 + 40 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i2 + 32 | 0;
 i2 = i3 + 48 | 0;
 i6 = 0;
 i7 = i4;
 while (1) {
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 + (i6 << 3) | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  L6 : do {
   if ((i9 | 0) == 0) {
    i10 = 14;
   } else {
    i11 = HEAP32[i9 + 4 >> 2] | 0;
    if ((i11 & 1 | 0) == 0) {
     i12 = i11 >>> 1 & 134217727;
     i13 = i9 + 20 | 0;
    } else {
     i11 = i9 + 24 | 0;
     i12 = HEAP32[i11 + 8 >> 2] | 0;
     i13 = HEAP32[i11 >> 2] | 0;
    }
    if ((i12 | 0) == 0) {
     i10 = 14;
     break;
    }
    i11 = HEAP32[i8 >> 2] | 0;
    i14 = i11 + 12 | 0;
    i15 = i11 + 16 | 0;
    i16 = 0;
    while (1) {
     i17 = i13 + (i16 << 3) | 0;
     i18 = HEAP32[i17 >> 2] | 0;
     if ((i18 | 0) == (i11 | 0)) {
      break;
     }
     if ((HEAP32[i18 + 12 >> 2] | 0) == (HEAP32[i14 >> 2] | 0)) {
      if ((HEAP32[i18 + 16 >> 2] | 0) == (HEAP32[i15 >> 2] | 0)) {
       break;
      }
     }
     i18 = i16 + 1 | 0;
     if (i18 >>> 0 < i12 >>> 0) {
      i16 = i18;
     } else {
      i10 = 14;
      break L6;
     }
    }
    if ((i17 | 0) == 0) {
     i10 = 14;
    } else {
     i19 = i7;
    }
   }
  } while (0);
  if ((i10 | 0) == 14) {
   i10 = 0;
   __ZN7WebCore7Element12setAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i3, i8 | 0, i4 + (i6 << 3) + 4 | 0);
   i19 = HEAP32[i1 >> 2] | 0;
  }
  i9 = i6 + 1 | 0;
  if (i9 >>> 0 < i19 >>> 0) {
   i6 = i9;
   i7 = i19;
  } else {
   break;
  }
 }
 return;
}
function __ZN7WebCore13HTMLStackItemD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 24 >> 2] | 0;
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
 i2 = i1 + 20 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i3 = i1 + 12 | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  i6 = i5 + (i4 << 3) | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 + 4 >> 2] | 0;
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
   __ZN7WebCore13QualifiedNameD1Ev(i4 | 0);
   i4 = i4 + 8 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
 return;
}
function __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 4) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 + 8 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i3 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
     i9 = i7 | 0;
     i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     HEAP32[i9 >> 2] = i8;
     if ((i8 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 8 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     HEAP32[i8 >> 2] = i9;
     if ((i9 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
    }
   } while (0);
   i3 = i3 + 16 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i1 + 12 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore20HTMLConstructionSite30insertCommentOnHTMLHtmlElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = __ZNK7WebCore16HTMLElementStack8rootNodeEv(i1 + 16 | 0) | 0;
 __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i5, HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 8 >> 2] | 0, i2 + 8 | 0);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i6, i4, 0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 + 8 | 0;
 i4 = i7 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 16 | 0;
 i4 = i2 | 0;
 i2 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i5 = i1 | 0;
    i6 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i6 + 1;
    if ((i6 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i5 >> 2] = i6;
     break;
    }
   }
  } while (0);
  if (!(__ZN7WebCoreL16hasImpliedEndTagEPKNS_13HTMLStackItemE(i1) | 0)) {
   i7 = 15;
   break;
  }
  i6 = HEAP32[HEAP32[i3 >> 2] >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i8 = HEAP32[i5 >> 2] | 0;
    HEAP32[i5 >> 2] = i8 + 1;
    if ((i8 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i8;
     break;
    }
   }
  } while (0);
  if ((HEAP32[i6 + 8 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i6 + 24 >> 2] | 0) == (HEAP32[__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE >> 2] | 0)) {
    i7 = 16;
    break;
   }
  }
  __ZN7WebCore16HTMLElementStack3popEv(i2);
 }
 if ((i7 | 0) == 15) {
  return;
 } else if ((i7 | 0) == 16) {
  return;
 }
}
function __ZN7WebCore20HTMLConstructionSite23insertCommentOnDocumentEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 __ZN7WebCore7Comment6createERNS_8DocumentERKN3WTF6StringE(i5, HEAP32[i1 >> 2] | 0, i2 + 8 | 0);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i6, i4, 0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 8 | 0;
   i6 = i2 | 0;
   i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   HEAP32[i6 >> 2] = i1;
   if ((i1 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i4 + 8 | 0;
 i4 = i7 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i2 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i7 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20HTMLConstructionSite35indexOfFirstUnopenFormattingElementERj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 44 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = i1 + 36 | 0;
 i7 = i1 + 16 | 0;
 i1 = i4;
 i8 = i4;
 while (1) {
  i4 = i1 - 1 | 0;
  if (i8 >>> 0 <= i4 >>> 0) {
   i9 = 4;
   break;
  }
  i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] | 0;
  if ((i10 | 0) == 0) {
   i9 = 7;
   break;
  }
  if (__ZNK7WebCore16HTMLElementStack8containsEPNS_7ElementE(i7, HEAP32[i10 + 4 >> 2] | 0) | 0) {
   i9 = 7;
   break;
  }
  if ((i4 | 0) == 0) {
   i9 = 10;
   break;
  }
  i1 = i4;
  i8 = HEAP32[i3 >> 2] | 0;
 }
 if ((i9 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i9 | 0) == 7) {
  HEAP32[i2 >> 2] = i1;
  i5 = i1 >>> 0 < (HEAP32[i3 >> 2] | 0) >>> 0;
  return i5 | 0;
 } else if ((i9 | 0) == 10) {
  HEAP32[i2 >> 2] = 0;
  i5 = 1;
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 4) | 0;
    HEAP32[i3 >> 2] = i7 >>> 4;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 << 4) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[(HEAP32[HEAP32[i1 + 16 >> 2] >> 2] | 0) + 4 >> 2] | 0;
 __ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE(i5, i1, i2);
 i2 = i4 | 0;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb(i1, i6, i4, 1);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 + 8 | 0;
 i4 = i2 | 0;
 i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
 HEAP32[i4 >> 2] = i6;
 if ((i6 | 0) >= 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i2 - 8 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20HTMLConstructionSite23insertFormattingElementEPNS_15AtomicHTMLTokenE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE(i1, i2);
 i2 = i4 | 0;
 i5 = HEAP32[(__ZNK7WebCore16HTMLElementStack9topRecordEv(i1 + 16 | 0) | 0) >> 2] | 0;
 HEAP32[i2 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i6 = i5 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 __ZN7WebCore25HTMLFormattingElementList6appendEN3WTF10PassRefPtrINS_13HTMLStackItemEEE(i1 + 36 | 0, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i4);
  __ZN3WTF8fastFreeEPv(i4);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore20HTMLConstructionSiteD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEED1Ev(i1 + 48 | 0);
 __ZN7WebCore25HTMLFormattingElementListD1Ev(i1 + 36 | 0);
 __ZN7WebCore16HTMLElementStackD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20HTMLConstructionSiteD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 __ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEED1Ev(i1 + 48 | 0);
 __ZN7WebCore25HTMLFormattingElementListD1Ev(i1 + 36 | 0);
 __ZN7WebCore16HTMLElementStackD1Ev(i1 + 16 | 0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore13HTMLStackItemD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i3;
  return;
 }
}
function __ZN7WebCore20HTMLConstructionSiteC2ERNS_16DocumentFragmentENS_19ParserContentPolicyEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore16HTMLElementStackC1Ev(i1 + 16 | 0);
 __ZN7WebCore25HTMLFormattingElementListC1Ev(i1 + 36 | 0);
 HEAP32[i1 + 48 >> 2] = i1 + 60;
 HEAP32[i1 + 52 >> 2] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i3;
 HEAP8[i1 + 80 | 0] = 1;
 HEAP8[i1 + 81 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = i4;
 HEAP8[i1 + 88 | 0] = (HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0 | 0;
 return;
}
function __ZN7WebCore20HTMLConstructionSiteC1ERNS_16DocumentFragmentENS_19ParserContentPolicyEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i5 = i2 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2];
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore16HTMLElementStackC1Ev(i1 + 16 | 0);
 __ZN7WebCore25HTMLFormattingElementListC1Ev(i1 + 36 | 0);
 HEAP32[i1 + 48 >> 2] = i1 + 60;
 HEAP32[i1 + 52 >> 2] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i3;
 HEAP8[i1 + 80 | 0] = 1;
 HEAP8[i1 + 81 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = i4;
 HEAP8[i1 + 88 | 0] = (HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0 | 0;
 return;
}
function __ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 16 | 0;
 i3 = i1 + 16 | 0;
 while (1) {
  i1 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i4 = i1 | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    HEAP32[i4 >> 2] = i5 + 1;
    if ((i5 | 0) == 0) {
     __ZN7WebCore13HTMLStackItemD2Ev(i1);
     __ZN3WTF8fastFreeEPv(i1);
     break;
    } else {
     HEAP32[i4 >> 2] = i5;
     break;
    }
   }
  } while (0);
  if (!(__ZN7WebCoreL16hasImpliedEndTagEPKNS_13HTMLStackItemE(i1) | 0)) {
   break;
  }
  __ZN7WebCore16HTMLElementStack3popEv(i3);
 }
 return;
}
function __ZN7WebCore20HTMLConstructionSiteC2ERNS_8DocumentENS_19ParserContentPolicyEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore16HTMLElementStackC1Ev(i1 + 16 | 0);
 __ZN7WebCore25HTMLFormattingElementListC1Ev(i1 + 36 | 0);
 HEAP32[i1 + 48 >> 2] = i1 + 60;
 HEAP32[i1 + 52 >> 2] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i3;
 HEAP8[i1 + 80 | 0] = 0;
 HEAP8[i1 + 81 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = i4;
 HEAP8[i1 + 88 | 0] = (HEAP32[i2 + 664 >> 2] | 0) == 0 | 0;
 return;
}
function __ZN7WebCore20HTMLConstructionSiteC1ERNS_8DocumentENS_19ParserContentPolicyEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 HEAP32[i1 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN7WebCore16HTMLElementStackC1Ev(i1 + 16 | 0);
 __ZN7WebCore25HTMLFormattingElementListC1Ev(i1 + 36 | 0);
 HEAP32[i1 + 48 >> 2] = i1 + 60;
 HEAP32[i1 + 52 >> 2] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 76 >> 2] = i3;
 HEAP8[i1 + 80 | 0] = 0;
 HEAP8[i1 + 81 | 0] = 0;
 HEAP32[i1 + 84 >> 2] = i4;
 HEAP8[i1 + 88 | 0] = (HEAP32[i2 + 664 >> 2] | 0) == 0 | 0;
 return;
}
function __ZN7WebCore20HTMLConstructionSite7setFormEPNS_15HTMLFormElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) != 0) {
  i3 = i2 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i1 + 12 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 if ((i1 | 0) == 0) {
  return;
 }
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
function __ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 80 | 0] & 1) != 0) {
  return;
 }
 i2 = HEAP32[i1 >> 2] | 0;
 if ((HEAP8[i2 + 1581 | 0] & 1) != 0) {
  return;
 }
 HEAP8[i1 + 88 | 0] = 1;
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(i2, 0);
 return;
}
function __ZN7WebCore20HTMLConstructionSite40dispatchDocumentElementAvailableIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 >> 2] | 0) + 332 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 80 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore11FrameLoader32dispatchDocumentElementAvailableEv(i2 + 80 | 0);
 return;
}
function __ZN7WebCore20HTMLConstructionSite20setCompatibilityModeENS_8Document17CompatibilityModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 88 | 0] = (i2 | 0) == 0 | 0;
 __ZN7WebCore8Document20setCompatibilityModeENS0_17CompatibilityModeE(HEAP32[i1 >> 2] | 0, i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore20HTMLConstructionSite8takeFormEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 12 | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i3 >> 2] = 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore20HTMLConstructionSite15finishedParsingEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore8Document15finishedParsingEv(HEAP32[i1 >> 2] | 0);
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
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore20HTMLConstructionSite6detachEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
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
function __ZN7WebCore20HTMLConstructionSite12inQuirksModeEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 88 | 0] & 1) != 0 | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b4(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(4);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b2() {
 abort(2);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore20HTMLConstructionSiteD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_v = [b2,b2];
  var FUNCTION_TABLE_iii = [b3,b3];
  var FUNCTION_TABLE_viiii = [b4,b4,__ZN7WebCore20HTMLConstructionSiteC2ERNS_16DocumentFragmentENS_19ParserContentPolicyEj,b4,__ZN7WebCore20HTMLConstructionSiteC2ERNS_8DocumentENS_19ParserContentPolicyEj,b4,b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames11templateTagE": __ZN7WebCore9HTMLNames11templateTagE, "__ZN7WebCore9HTMLNames5liTagE": __ZN7WebCore9HTMLNames5liTagE, "__ZN7WebCore9HTMLNames5trTagE": __ZN7WebCore9HTMLNames5trTagE, "__ZN7WebCore9HTMLNames4pTagE": __ZN7WebCore9HTMLNames4pTagE, "__ZN7WebCore9HTMLNames8tbodyTagE": __ZN7WebCore9HTMLNames8tbodyTagE, "__ZN7WebCore9HTMLNames17xhtmlNamespaceURIE": __ZN7WebCore9HTMLNames17xhtmlNamespaceURIE, "__ZN7WebCore9HTMLNames5dtTagE": __ZN7WebCore9HTMLNames5dtTagE, "__ZN7WebCore9HTMLNames8theadTagE": __ZN7WebCore9HTMLNames8theadTagE, "__ZN7WebCore9HTMLNames9optionTagE": __ZN7WebCore9HTMLNames9optionTagE, "__ZN7WebCore9HTMLNames11optgroupTagE": __ZN7WebCore9HTMLNames11optgroupTagE, "__ZN7WebCore9HTMLNames8tfootTagE": __ZN7WebCore9HTMLNames8tfootTagE, "__ZN7WebCore8SVGNames9scriptTagE": __ZN7WebCore8SVGNames9scriptTagE, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN7WebCore9HTMLNames9scriptTagE": __ZN7WebCore9HTMLNames9scriptTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames5rpTagE": __ZN7WebCore9HTMLNames5rpTagE, "__ZN7WebCore9HTMLNames5ddTagE": __ZN7WebCore9HTMLNames5ddTagE, "__ZN7WebCore9HTMLNames5rtTagE": __ZN7WebCore9HTMLNames5rtTagE, "__ZN7WebCore9HTMLNames8styleTagE": __ZN7WebCore9HTMLNames8styleTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore20HTMLConstructionSite17createHTMLElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite11attachLaterEPNS_13ContainerNodeEN3WTF10PassRefPtrINS_4NodeEEEb","__ZN7WebCore20HTMLConstructionSite14findFosterSiteERNS_24HTMLConstructionSiteTaskE","__ZN7WebCore20HTMLConstructionSite19insertScriptElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite17insertHTMLElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSiteD2Ev","__ZN7WebCore20HTMLConstructionSite38reconstructTheActiveFormattingElementsEv","__ZN7WebCore20HTMLConstructionSite13createElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE","__ZNK7WebCore20HTMLConstructionSite35indexOfFirstUnopenFormattingElementERj","__ZN7WebCore20HTMLConstructionSite13insertDoctypeEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite20insertForeignElementEPNS_15AtomicHTMLTokenERKN3WTF12AtomicStringE","__ZN7WebCore20HTMLConstructionSite35mergeAttributesFromTokenIntoElementEPNS_15AtomicHTMLTokenEPNS_7ElementE","__ZN7WebCore20HTMLConstructionSite35generateImpliedEndTagsWithExclusionERKN3WTF12AtomicStringE","__ZN7WebCore20HTMLConstructionSite14insertTextNodeERKN3WTF6StringENS_14WhitespaceModeE","__ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEED1Ev","__ZN7WebCore20HTMLConstructionSite6detachEv","__ZN7WebCore20HTMLConstructionSite13insertCommentEPNS_15AtomicHTMLTokenE","__ZN7WebCore15AtomicHTMLTokenD2Ev","_memset","__ZN7WebCore20HTMLConstructionSite8takeFormEv","__ZN7WebCore20HTMLConstructionSite28insertSelfClosingHTMLElementEPNS_15AtomicHTMLTokenE","_memcpy","__ZN7WebCore20HTMLConstructionSite22generateImpliedEndTagsEv","__ZN7WebCore20HTMLConstructionSite21insertHTMLFormElementEPNS_15AtomicHTMLTokenEb","__ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore20HTMLConstructionSite27createElementFromSavedTokenEPNS_13HTMLStackItemE","__ZNK7WebCore20HTMLConstructionSite18shouldFosterParentEv","__ZN7WebCore20HTMLConstructionSite28insertHTMLHtmlStartTagInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite40dispatchDocumentElementAvailableIfNeededEv","__ZN7WebCore20HTMLConstructionSite21insertHTMLBodyElementEPNS_15AtomicHTMLTokenE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore20HTMLConstructionSite18executeQueuedTasksEv","__ZN7WebCore20HTMLConstructionSite21insertHTMLHeadElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite12fosterParentEN3WTF10PassRefPtrINS_4NodeEEE","__ZN7WebCore20HTMLConstructionSite31setCompatibilityModeFromDoctypeERKN3WTF6StringES4_S4_","__ZN7WebCore20HTMLConstructionSite32insertHTMLHtmlStartTagBeforeHTMLEPNS_15AtomicHTMLTokenE","__ZN7WebCore13HTMLStackItem6createEN3WTF10PassRefPtrINS_13ContainerNodeEEEPNS_15AtomicHTMLTokenERKNS1_12AtomicStringE","__ZN7WebCore20HTMLConstructionSite23insertFormattingElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite28insertHTMLBodyStartTagInBodyEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite7setFormEPNS_15HTMLFormElementE","__ZN7WebCore20HTMLConstructionSite23insertCommentOnDocumentEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite12inQuirksModeEv","__ZN7WebCoreL11executeTaskERNS_24HTMLConstructionSiteTaskE","__ZN7WebCore13HTMLStackItemD2Ev","__ZN7WebCore20HTMLConstructionSiteC2ERNS_16DocumentFragmentENS_19ParserContentPolicyEj","__ZN7WebCoreL16hasImpliedEndTagEPKNS_13HTMLStackItemE","__ZN3WTF6VectorIN7WebCore24HTMLConstructionSiteTaskELj1ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore20HTMLConstructionSite20setCompatibilityModeENS_8Document17CompatibilityModeE","__ZN7WebCore20HTMLConstructionSiteC2ERNS_8DocumentENS_19ParserContentPolicyEj","__ZN7WebCore20HTMLConstructionSite30insertCommentOnHTMLHtmlElementEPNS_15AtomicHTMLTokenE","__ZN7WebCore20HTMLConstructionSite15finishedParsingEv","__ZN7WebCore20HTMLConstructionSite27setDefaultCompatibilityModeEv"]

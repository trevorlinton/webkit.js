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
H_BASE = parentModule["_malloc"](376 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 376;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,112,105,99,116,111,103,114,97,112,104,0,0,0,0,0,0,45,119,101,98,107,105,116,45,115,97,110,115,45,115,101,114,105,102,0,0,0,0,0,0,45,119,101,98,107,105,116,45,109,111,110,111,115,112,97,99,101,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,115,116,97,110,100,97,114,100,0,0,0,0,0,0,0,0,2,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,160,68,111,60,0,0,0,0,45,119,101,98,107,105,116,45,102,97,110,116,97,115,121,0,45,119,101,98,107,105,116,45,99,117,114,115,105,118,101,0,2,0,0,0,18,0,0,0,0,0,0,0,0,0,0,0,32,227,247,14,0,0,0,0,2,0,0,0,17,0,0,0,0,0,0,0,0,0,0,0,160,239,55,109,0,0,0,0,2,0,0,0,16,0,0,0,0,0,0,0,0,0,0,0,160,94,93,53,0,0,0,0,45,119,101,98,107,105,116,45,115,101,114,105,102,0,0,0,2,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,160,181,1,125,0,0,0,0,2,0,0,0,15,0,0,0,0,0,0,0,0,0,0,0,160,173,227,53,0,0,0,0,2,0,0,0,13,0,0,0,0,0,0,0,0,0,0,0,160,39,242,53,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
  var __ZN7WebCore21WebKitFontFamilyNames11serifFamilyE=(H_BASE+376)|0;
  var __ZN7WebCore21WebKitFontFamilyNames13cursiveFamilyE=(H_BASE+368)|0;
  var __ZN7WebCore21WebKitFontFamilyNames16pictographFamilyE=(H_BASE+328)|0;
  var __ZN7WebCore21WebKitFontFamilyNames15monospaceFamilyE=(H_BASE+344)|0;
  var __ZN7WebCore21WebKitFontFamilyNames15sansSerifFamilyE=(H_BASE+336)|0;
  var __ZN7WebCore21WebKitFontFamilyNames13fantasyFamilyE=(H_BASE+360)|0;
  var __ZN7WebCore21WebKitFontFamilyNames14standardFamilyE=(H_BASE+352)|0;
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
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_vi=env.invoke_vi;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore21WebKitFontFamilyNames4initEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i2 = i1 | 0;
 i3 = i1 + 8 | 0;
 i4 = i1 + 16 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 32 | 0;
 i7 = i1 + 40 | 0;
 i8 = i1 + 48 | 0;
 if (HEAP8[H_BASE + 8 | 0] | 0) {
  STACKTOP = i1;
  return;
 }
 HEAP8[H_BASE + 8 | 0] = 1;
 __ZN3WTF12AtomicString4initEv();
 if ((HEAP32[H_BASE + 320 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i7, H_BASE + 304);
  i9 = HEAP32[i7 >> 2] | 0;
 } else {
  HEAP32[i7 >> 2] = H_BASE + 304;
  HEAP32[H_BASE + 304 >> 2] = (HEAP32[H_BASE + 304 >> 2] | 0) + 2;
  i9 = H_BASE + 304;
 }
 HEAP32[H_BASE + 376 >> 2] = i9;
 if ((HEAP32[H_BASE + 296 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, H_BASE + 280);
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  HEAP32[i5 >> 2] = H_BASE + 280;
  HEAP32[H_BASE + 280 >> 2] = (HEAP32[H_BASE + 280 >> 2] | 0) + 2;
  i10 = H_BASE + 280;
 }
 HEAP32[H_BASE + 368 >> 2] = i10;
 if ((HEAP32[H_BASE + 232 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, H_BASE + 216);
  i11 = HEAP32[i3 >> 2] | 0;
 } else {
  HEAP32[i3 >> 2] = H_BASE + 216;
  HEAP32[H_BASE + 216 >> 2] = (HEAP32[H_BASE + 216 >> 2] | 0) + 2;
  i11 = H_BASE + 216;
 }
 HEAP32[H_BASE + 352 >> 2] = i11;
 if ((HEAP32[H_BASE + 208 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i2, H_BASE + 192);
  i12 = HEAP32[i2 >> 2] | 0;
 } else {
  HEAP32[i2 >> 2] = H_BASE + 192;
  HEAP32[H_BASE + 192 >> 2] = (HEAP32[H_BASE + 192 >> 2] | 0) + 2;
  i12 = H_BASE + 192;
 }
 HEAP32[H_BASE + 344 >> 2] = i12;
 if ((HEAP32[H_BASE + 272 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i4, H_BASE + 256);
  i13 = HEAP32[i4 >> 2] | 0;
 } else {
  HEAP32[i4 >> 2] = H_BASE + 256;
  HEAP32[H_BASE + 256 >> 2] = (HEAP32[H_BASE + 256 >> 2] | 0) + 2;
  i13 = H_BASE + 256;
 }
 HEAP32[H_BASE + 360 >> 2] = i13;
 if ((HEAP32[H_BASE + 128 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, H_BASE + 112);
  i14 = HEAP32[i6 >> 2] | 0;
 } else {
  HEAP32[i6 >> 2] = H_BASE + 112;
  HEAP32[H_BASE + 112 >> 2] = (HEAP32[H_BASE + 112 >> 2] | 0) + 2;
  i14 = H_BASE + 112;
 }
 HEAP32[H_BASE + 328 >> 2] = i14;
 if ((HEAP32[H_BASE + 184 >> 2] & 16 | 0) == 0) {
  __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, H_BASE + 168);
  i15 = HEAP32[i8 >> 2] | 0;
 } else {
  HEAP32[i8 >> 2] = H_BASE + 168;
  HEAP32[H_BASE + 168 >> 2] = (HEAP32[H_BASE + 168 >> 2] | 0) + 2;
  i15 = H_BASE + 168;
 }
 HEAP32[H_BASE + 336 >> 2] = i15;
 STACKTOP = i1;
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
function runPostSets() {
 HEAP32[H_BASE + 120 >> 2] = H_BASE + 16;
 HEAP32[H_BASE + 176 >> 2] = H_BASE + 40;
 HEAP32[H_BASE + 200 >> 2] = H_BASE + 64;
 HEAP32[H_BASE + 224 >> 2] = H_BASE + 88;
 HEAP32[H_BASE + 264 >> 2] = H_BASE + 136;
 HEAP32[H_BASE + 288 >> 2] = H_BASE + 152;
 HEAP32[H_BASE + 312 >> 2] = H_BASE + 240;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
}
function b1() {
 abort(1);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0];
  var FUNCTION_TABLE_v = [b1,b1];
  var FUNCTION_TABLE_iii = [b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_vi: dynCall_vi };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_vi": invoke_vi, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_memcpy","_strlen","__ZN7WebCore21WebKitFontFamilyNames4initEv","_memset"]

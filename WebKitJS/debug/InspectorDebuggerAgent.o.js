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
H_BASE = parentModule["_malloc"](1504 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1504;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore22InspectorDebuggerAgentD1Ev;
/* memory initializer */ allocate([67,111,117,108,100,32,110,111,116,32,114,101,115,111,108,118,101,32,98,114,101,97,107,112,111,105,110,116,0,0,0,0,97,99,116,105,111,110,115,0,97,117,116,111,67,111,110,116,105,110,117,101,0,0,0,0,99,111,110,100,105,116,105,111,110,0,0,0,0,0,0,0,66,114,101,97,107,112,111,105,110,116,32,97,116,32,115,112,101,99,105,102,105,101,100,32,108,111,99,97,116,105,111,110,32,97,108,114,101,97,100,121,32,101,120,105,115,116,115,46,0,0,0,0,0,0,0,0,100,97,116,97,0,0,0,0,66,114,101,97,107,112,111,105,110,116,65,99,116,105,111,110,32,104,97,100,32,117,110,107,110,111,119,110,32,116,121,112,101,0,0,0,0,0,0,0,66,114,101,97,107,112,111,105,110,116,65,99,116,105,111,110,32,104,97,100,32,116,121,112,101,32,109,105,115,115,105,110,103,0,0,0,0,0,0,0,116,121,112,101,0,0,0,0,66,114,101,97,107,112,111,105,110,116,65,99,116,105,111,110,32,111,102,32,105,110,99,111,114,114,101,99,116,32,116,121,112,101,44,32,101,120,112,101,99,116,101,100,32,111,98,106,101,99,116,0,0,0,0,0,115,99,114,105,112,116,73,100,32,97,110,100,32,108,105,110,101,78,117,109,98,101,114,32,97,114,101,32,114,101,113,117,105,114,101,100,46,0,0,0,47,0,0,0,0,0,0,0,100,101,115,99,114,105,112,116,105,111,110,0,0,0,0,0,115,99,114,105,112,116,73,100,0,0,0,0,0,0,0,0,67,97,110,32,111,110,108,121,32,112,101,114,102,111,114,109,32,111,112,101,114,97,116,105,111,110,32,119,104,105,108,101,32,112,97,117,115,101,100,46,0,0,0,0,0,0,0,0,99,111,108,117,109,110,78,117,109,98,101,114,0,0,0,0,108,105,110,101,78,117,109,98,101,114,0,0,0,0,0,0,117,114,108,0,0,0,0,0,105,115,82,101,103,101,120,0,88,45,83,111,117,114,99,101,77,97,112,0,0,0,0,0,83,111,117,114,99,101,77,97,112,0,0,0,0,0,0,0,100,105,114,101,99,116,105,118,101,84,101,120,116,0,0,0,69,105,116,104,101,114,32,117,114,108,32,111,114,32,117,114,108,82,101,103,101,120,32,109,117,115,116,32,98,101,32,115,112,101,99,105,102,105,101,100,46,0,0,0,0,0,0,0,83,99,114,105,112,116,32,101,120,101,99,117,116,105,111,110,32,102,97,105,108,101,100,0,83,99,114,105,112,116,32,99,111,109,112,105,108,97,116,105,111,110,32,102,97,105,108,101,100,0,0,0,0,0,0,0,73,110,115,112,101,99,116,101,100,32,102,114,97,109,101,32,104,97,115,32,103,111,110,101,0,0,0,0,0,0,0,0,73,110,116,101,114,110,97,108,32,101,114,114,111,114,46,32,67,111,117,108,100,32,110,111,116,32,99,104,97,110,103,101,32,112,97,117,115,101,32,111,110,32,101,120,99,101,112,116,105,111,110,115,32,115,116,97,116,101,0,0,0,0,0,0,85,110,107,110,111,119,110,32,112,97,117,115,101,32,111,110,32,101,120,99,101,112,116,105,111,110,115,32,109,111,100,101,58,32,0,0,0,0,0,0,117,110,99,97,117,103,104,116,0,0,0,0,0,0,0,0,97,108,108,0,0,0,0,0,110,111,110,101,0,0,0,0,70,117,110,99,116,105,111,110,32,111,98,106,101,99,116,32,105,100,32,105,115,32,111,98,115,111,108,101,116,101,0,0,78,111,32,115,99,114,105,112,116,32,102,111,114,32,105,100,58,32,0,0,0,0,0,0,68,101,98,117,103,103,101,114,0,0,0,0,0,0,0,0,98,97,99,107,116,114,97,99,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,244,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,240,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
function invoke_viiiiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11) {
  try {
    Module["dynCall_viiiiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9,a10,a11);
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var __ZTVN10Deprecated11ScriptValueE=env.__ZTVN10Deprecated11ScriptValueE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN9Inspector18InspectorAgentBaseE=(H_BASE+872)|0;
  var __ZTVN7WebCore22InspectorDebuggerAgentE=(H_BASE+1072)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEEE=(H_BASE+992)|0;
  var __ZTVN10Deprecated12ScriptObjectE=(H_BASE+1440)|0;
  var __ZTVN7WebCore18InspectorAgentBaseE=(H_BASE+1400)|0;
  var __ZN7WebCore22InspectorDebuggerAgent20backtraceObjectGroupE=(H_BASE+1464)|0;
  var __ZTVN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEEE=(H_BASE+912)|0;
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
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_viiiiiiiiiii=env.invoke_viiiiiiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
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
function __ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 424 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 i15 = i10 + 32 | 0;
 i16 = i10 + 40 | 0;
 i17 = i10 + 48 | 0;
 i18 = i10 + 56 | 0;
 i19 = i10 + 64 | 0;
 i20 = i10 + 72 | 0;
 i21 = i10 + 80 | 0;
 i22 = i10 + 88 | 0;
 i23 = i10 + 96 | 0;
 i24 = i10 + 104 | 0;
 i25 = i10 + 112 | 0;
 i26 = i10 + 120 | 0;
 i27 = i10 + 128 | 0;
 i28 = i10 + 136 | 0;
 i29 = i10 + 144 | 0;
 i30 = i10 + 152 | 0;
 i31 = i10 + 160 | 0;
 i32 = i10 + 168 | 0;
 i33 = i10 + 176 | 0;
 i34 = i10 + 184 | 0;
 i35 = i10 + 192 | 0;
 i36 = i10 + 200 | 0;
 i37 = i10 + 208 | 0;
 i38 = i10 + 216 | 0;
 i39 = i10 + 240 | 0;
 i40 = i10 + 256 | 0;
 i41 = i10 + 264 | 0;
 i42 = i10 + 272 | 0;
 i43 = i10 + 280 | 0;
 i44 = i10 + 288 | 0;
 i45 = i10 + 296 | 0;
 i46 = i10 + 304 | 0;
 i47 = i10 + 312 | 0;
 i48 = i10 + 320 | 0;
 i49 = i10 + 328 | 0;
 i50 = i10 + 336 | 0;
 i51 = i10 + 352 | 0;
 i52 = i10 + 360 | 0;
 i53 = i10 + 376 | 0;
 i54 = i10 + 408 | 0;
 i55 = i10 + 416 | 0;
 i56 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN9Inspector18InspectorArrayBaseC2Ev(i56);
 HEAP32[i56 >> 2] = H_BASE + 1e3;
 i57 = i9 | 0;
 i9 = HEAP32[i57 >> 2] | 0;
 HEAP32[i57 >> 2] = i56;
 do {
  if ((i9 | 0) != 0) {
   i56 = i9 + 4 | 0;
   i58 = i56 | 0;
   i59 = (HEAP32[i58 >> 2] | 0) - 1 | 0;
   if ((i59 | 0) != 0) {
    HEAP32[i58 >> 2] = i59;
    break;
   }
   i59 = i56 - 4 | 0;
   if ((i59 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 4 >> 2] & 63](i59);
  }
 } while (0);
 i9 = (i4 | 0) != 0;
 i59 = (i5 | 0) != 0;
 if (!(i9 ^ i59)) {
  __ZN3WTF6StringC1EPKc(i35, H_BASE + 512 | 0);
  i56 = i35 | 0;
  i35 = HEAP32[i56 >> 2] | 0;
  HEAP32[i56 >> 2] = 0;
  i58 = i2 | 0;
  i60 = HEAP32[i58 >> 2] | 0;
  HEAP32[i58 >> 2] = i35;
  do {
   if ((i60 | 0) != 0) {
    i35 = i60 | 0;
    i58 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
    if ((i58 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i60);
     break;
    } else {
     HEAP32[i35 >> 2] = i58;
     break;
    }
   }
  } while (0);
  i60 = HEAP32[i56 >> 2] | 0;
  if ((i60 | 0) == 0) {
   STACKTOP = i10;
   return;
  }
  i56 = i60 | 0;
  i58 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
  if ((i58 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i60);
   STACKTOP = i10;
   return;
  } else {
   HEAP32[i56 >> 2] = i58;
   STACKTOP = i10;
   return;
  }
 }
 i58 = i36 | 0;
 i56 = HEAP32[(i9 ? i4 : i5) >> 2] | 0;
 HEAP32[i58 >> 2] = i56;
 if ((i56 | 0) != 0) {
  i5 = i56 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 if ((i6 | 0) == 0) {
  i61 = 0;
 } else {
  i61 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i58 >> 2] | 0;
 i5 = (i6 | 0) == 0;
 do {
  if (i59) {
   do {
    if (i5) {
     i62 = 0;
    } else {
     i56 = i6 | 0;
     i4 = HEAP32[i56 >> 2] | 0;
     i9 = i4 + 2 | 0;
     HEAP32[i56 >> 2] = i4 + 4;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      i63 = HEAP32[i56 >> 2] | 0;
     } else {
      HEAP32[i56 >> 2] = i9;
      i63 = i9;
     }
     i9 = i63 + 2 | 0;
     HEAP32[i56 >> 2] = i63 + 4;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      i62 = i6;
      break;
     } else {
      HEAP32[i56 >> 2] = i9;
      i62 = i6;
      break;
     }
    }
   } while (0);
   HEAP32[i34 >> 2] = H_BASE + 328;
   i9 = i34 + 4 | 0;
   HEAP32[i9 >> 2] = i62;
   if ((i62 | 0) != 0) {
    i56 = i62 | 0;
    HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i33, i34, H_BASE + 328 | 0);
   i56 = i33 | 0;
   i4 = HEAP32[i56 >> 2] | 0;
   HEAP32[i56 >> 2] = 0;
   i56 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i56 | 0) != 0) {
     i9 = i56 | 0;
     i60 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
     if ((i60 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i56);
      break;
     } else {
      HEAP32[i9 >> 2] = i60;
      break;
     }
    }
   } while (0);
   if ((i4 | 0) == 0) {
    _WTFCrash();
   } else {
    i64 = 0;
    i65 = 1;
    i66 = i62;
    i67 = i4;
    i68 = HEAP32[i4 >> 2] | 0;
    i69 = 39;
    break;
   }
  } else {
   if (i5) {
    __ZN3WTF6String6numberEi(i40, i3);
    i70 = 1;
    i71 = 1;
    i72 = 0;
    i73 = 0;
    i74 = 0;
    i75 = 1;
    break;
   } else {
    i56 = i6 | 0;
    i60 = (HEAP32[i56 >> 2] | 0) + 2 | 0;
    HEAP32[i56 >> 2] = i60;
    i64 = 1;
    i65 = 0;
    i66 = 0;
    i67 = i6;
    i68 = i60;
    i69 = 39;
    break;
   }
  }
 } while (0);
 if ((i69 | 0) == 39) {
  i6 = i67 | 0;
  i5 = i68 + 2 | 0;
  HEAP32[i6 >> 2] = i68 + 4;
  if ((i5 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i67);
   __ZN3WTF6String6numberEi(i40, i3);
  } else {
   HEAP32[i6 >> 2] = i5;
   __ZN3WTF6String6numberEi(i40, i3);
  }
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
  i70 = (i67 | 0) == 0;
  i71 = i64;
  i72 = i65;
  i73 = i66;
  i74 = i67;
  i75 = 0;
 }
 i67 = i40 | 0;
 i40 = HEAP32[i67 >> 2] | 0;
 i66 = (i40 | 0) == 0;
 if (!i66) {
  i65 = i40 | 0;
  HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
 }
 if (!i75) {
  i65 = i74 | 0;
  HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
 }
 do {
  if (!i66) {
   i65 = i40 | 0;
   i64 = HEAP32[i65 >> 2] | 0;
   HEAP32[i65 >> 2] = i64 + 2;
   if ((i64 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i65 >> 2] = i64;
    break;
   }
  }
 } while (0);
 if (!i75) {
  i64 = i74 | 0;
  i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
  if ((i65 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i74);
   i76 = HEAP32[i64 >> 2] | 0;
  } else {
   HEAP32[i64 >> 2] = i65;
   i76 = i65;
  }
  HEAP32[i64 >> 2] = i76 + 2;
 }
 if (!i66) {
  i76 = i40 | 0;
  HEAP32[i76 >> 2] = (HEAP32[i76 >> 2] | 0) + 2;
 }
 i76 = i39 | 0;
 HEAP32[i76 >> 2] = i74;
 if (!i75) {
  i64 = i74 | 0;
  HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
 }
 HEAP8[i39 + 4 | 0] = 58;
 i64 = i39 + 8 | 0;
 HEAP32[i64 >> 2] = i40;
 do {
  if (i66) {
   HEAP8[i39 + 12 | 0] = 58;
  } else {
   i65 = i40 | 0;
   i6 = HEAP32[i65 >> 2] | 0;
   HEAP32[i65 >> 2] = i6 + 2;
   HEAP8[i39 + 12 | 0] = 58;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i65 >> 2] = i6;
    break;
   }
  }
 } while (0);
 do {
  if (!i75) {
   i6 = i74 | 0;
   i65 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i6 >> 2] = i65;
    break;
   }
  }
 } while (0);
 __ZN3WTF6String6numberEi(i41, i61);
 __ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_(i38, i39, i41);
 __ZNK3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EcvS1_Ev(i37, i38);
 i39 = HEAP32[i38 + 16 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i65 = i39 | 0;
   i6 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i65 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i38 + 8 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i6 = i39 | 0;
   i65 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i6 >> 2] = i65;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i38 = i39 | 0;
   i65 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i38 >> 2] = i65;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i41 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i41 = i39 | 0;
   i65 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i41 >> 2] = i65;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i64 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i64 = i39 | 0;
   i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i64 >> 2] = i65;
    break;
   }
  }
 } while (0);
 i39 = HEAP32[i76 >> 2] | 0;
 do {
  if ((i39 | 0) != 0) {
   i76 = i39 | 0;
   i65 = (HEAP32[i76 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i76 >> 2] = i65;
    break;
   }
  }
 } while (0);
 do {
  if (!i66) {
   i39 = i40 | 0;
   i65 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i65 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i40);
    break;
   } else {
    HEAP32[i39 >> 2] = i65;
    break;
   }
  }
 } while (0);
 do {
  if (!i75) {
   i40 = i74 | 0;
   i66 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i66 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i40 >> 2] = i66;
    break;
   }
  }
 } while (0);
 i66 = HEAP32[i67 >> 2] | 0;
 do {
  if ((i66 | 0) != 0) {
   i67 = i66 | 0;
   i40 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i66);
    break;
   } else {
    HEAP32[i67 >> 2] = i40;
    break;
   }
  }
 } while (0);
 do {
  if (!i75) {
   i66 = i74 | 0;
   i40 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i66 >> 2] = i40;
    break;
   }
  }
 } while (0);
 do {
  if (!(i70 | i71 ^ 1)) {
   i75 = i74 | 0;
   i40 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i74);
    break;
   } else {
    HEAP32[i75 >> 2] = i40;
    break;
   }
  }
 } while (0);
 do {
  if (i72) {
   if (i70) {
    if ((i73 | 0) == 0) {
     break;
    }
   } else {
    i71 = i74 | 0;
    i40 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
    if ((i40 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i74);
    } else {
     HEAP32[i71 >> 2] = i40;
    }
    if ((i73 | 0) == 0) {
     break;
    }
   }
   i40 = i73 | 0;
   i71 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i73);
    i77 = HEAP32[i40 >> 2] | 0;
   } else {
    HEAP32[i40 >> 2] = i71;
    i77 = i71;
   }
   i71 = i77 - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i73);
    break;
   } else {
    HEAP32[i40 >> 2] = i71;
    break;
   }
  }
 } while (0);
 i73 = i1 + 84 | 0;
 i77 = HEAP32[i73 >> 2] | 0;
 L188 : do {
  if ((i77 | 0) == 0) {
   i69 = 143;
  } else {
   i74 = HEAP32[i1 + 92 >> 2] | 0;
   i70 = HEAP32[i37 >> 2] | 0;
   i72 = HEAP32[i70 + 16 >> 2] | 0;
   if (i72 >>> 0 > 127 >>> 0) {
    i78 = i72 >>> 7;
   } else {
    i78 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i70) | 0;
   }
   i72 = (i78 >>> 23) + ~i78 | 0;
   i71 = i72 << 12 ^ i72;
   i72 = i71 >>> 7 ^ i71;
   i71 = i72 << 2 ^ i72;
   i72 = i71 >>> 20 ^ i71 | 1;
   i71 = i78;
   i40 = 0;
   while (1) {
    i75 = i71 & i74;
    i79 = i77 + (i75 << 3) | 0;
    i66 = HEAP32[i79 >> 2] | 0;
    i67 = i66;
    if ((i67 | 0) == 0) {
     i69 = 143;
     break L188;
    } else if ((i67 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i66, i70) | 0) {
      break;
     }
    }
    i66 = (i40 | 0) == 0 ? i72 : i40;
    i71 = i66 + i75 | 0;
    i40 = i66;
   }
   if ((i79 | 0) == 0) {
    i69 = 143;
    break;
   }
   __ZN3WTF6StringC1EPKc(i42, H_BASE + 80 | 0);
   i40 = i42 | 0;
   i71 = HEAP32[i40 >> 2] | 0;
   HEAP32[i40 >> 2] = 0;
   i72 = i2 | 0;
   i70 = HEAP32[i72 >> 2] | 0;
   HEAP32[i72 >> 2] = i71;
   do {
    if ((i70 | 0) != 0) {
     i71 = i70 | 0;
     i72 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
     if ((i72 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i70);
      break;
     } else {
      HEAP32[i71 >> 2] = i72;
      break;
     }
    }
   } while (0);
   i70 = HEAP32[i40 >> 2] | 0;
   if ((i70 | 0) == 0) {
    break;
   }
   i72 = i70 | 0;
   i71 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
   if ((i71 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i72 >> 2] = i71;
    break;
   }
  }
 } while (0);
 do {
  if ((i69 | 0) == 143) {
   i42 = i43 | 0;
   i79 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
   HEAP32[i42 >> 2] = i79;
   if ((i79 | 0) != 0) {
    i77 = i79 | 0;
    HEAP32[i77 >> 2] = (HEAP32[i77 >> 2] | 0) + 2;
   }
   HEAP8[i44] = 0;
   i77 = i45 | 0;
   HEAP32[i77 >> 2] = 0;
   do {
    if ((i7 | 0) != 0) {
     i79 = i7 | 0;
     i78 = HEAP32[i79 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i46, H_BASE + 64 | 0);
     __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i78, i46, i43) | 0;
     i78 = HEAP32[i46 >> 2] | 0;
     do {
      if ((i78 | 0) != 0) {
       i71 = i78 | 0;
       i72 = (HEAP32[i71 >> 2] | 0) - 2 | 0;
       if ((i72 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i78);
        break;
       } else {
        HEAP32[i71 >> 2] = i72;
        break;
       }
      }
     } while (0);
     i78 = HEAP32[i79 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i47, H_BASE + 48 | 0);
     __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i78, i47, i44) | 0;
     i78 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i78 | 0) != 0) {
       i72 = i78 | 0;
       i71 = (HEAP32[i72 >> 2] | 0) - 2 | 0;
       if ((i71 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i78);
        break;
       } else {
        HEAP32[i72 >> 2] = i71;
        break;
       }
      }
     } while (0);
     i78 = HEAP32[i79 >> 2] | 0;
     __ZN3WTF6StringC1EPKc(i49, H_BASE + 40 | 0);
     __ZNK9Inspector19InspectorObjectBase8getArrayERKN3WTF6StringE(i48, i78, i49);
     i78 = i48 | 0;
     i71 = HEAP32[i78 >> 2] | 0;
     HEAP32[i78 >> 2] = 0;
     HEAP32[i77 >> 2] = i71;
     i71 = HEAP32[i49 >> 2] | 0;
     if ((i71 | 0) == 0) {
      break;
     }
     i78 = i71 | 0;
     i72 = (HEAP32[i78 >> 2] | 0) - 2 | 0;
     if ((i72 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i71);
      break;
     } else {
      HEAP32[i78 >> 2] = i72;
      break;
     }
    }
   } while (0);
   i40 = i50 | 0;
   HEAP32[i40 >> 2] = 0;
   i72 = i50 + 4 | 0;
   HEAP32[i72 >> 2] = 0;
   i78 = i50 + 8 | 0;
   HEAP32[i78 >> 2] = 0;
   do {
    if (__ZN7WebCoreL29breakpointActionsFromProtocolEPN3WTF6StringERNS0_6RefPtrIN9Inspector14InspectorArrayEEEPNS0_6VectorINS_22ScriptBreakpointActionELj0ENS0_15CrashOnOverflowEEE(i2, i45, i50) | 0) {
     i71 = (HEAP8[i44] & 1) != 0;
     __ZN9Inspector15InspectorObject6createEv(i24);
     i70 = i24 | 0;
     i74 = HEAP32[i70 >> 2] | 0;
     HEAP32[i70 >> 2] = 0;
     i70 = i74 | 0;
     __ZN3WTF6StringC1EPKc(i25, H_BASE + 448 | 0);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i23, i36);
     i4 = i22 | 0;
     i66 = i23 | 0;
     i75 = HEAP32[i66 >> 2] | 0;
     HEAP32[i66 >> 2] = 0;
     HEAP32[i4 >> 2] = i75;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i25, i22);
     i75 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i4 = i75 + 4 | 0;
       i67 = i4 | 0;
       i65 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
       if ((i65 | 0) != 0) {
        HEAP32[i67 >> 2] = i65;
        break;
       }
       i65 = i4 - 4 | 0;
       if ((i65 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
      }
     } while (0);
     i75 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i79 = i75 + 4 | 0;
       i65 = i79 | 0;
       i4 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
       if ((i4 | 0) != 0) {
        HEAP32[i65 >> 2] = i4;
        break;
       }
       i4 = i79 - 4 | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
      }
     } while (0);
     i75 = HEAP32[i25 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i66 = i75 | 0;
       i4 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
       if ((i4 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i75);
        break;
       } else {
        HEAP32[i66 >> 2] = i4;
        break;
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i26, H_BASE + 432 | 0);
     __ZN9Inspector19InspectorBasicValue6createEd(i21, +(i3 | 0));
     i75 = i20 | 0;
     i4 = i21 | 0;
     i66 = HEAP32[i4 >> 2] | 0;
     HEAP32[i4 >> 2] = 0;
     HEAP32[i75 >> 2] = i66;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i26, i20);
     i66 = HEAP32[i75 >> 2] | 0;
     do {
      if ((i66 | 0) != 0) {
       i75 = i66 + 4 | 0;
       i79 = i75 | 0;
       i65 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
       if ((i65 | 0) != 0) {
        HEAP32[i79 >> 2] = i65;
        break;
       }
       i65 = i75 - 4 | 0;
       if ((i65 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
      }
     } while (0);
     i66 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i66 | 0) != 0) {
       i65 = i66 + 4 | 0;
       i75 = i65 | 0;
       i79 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
       if ((i79 | 0) != 0) {
        HEAP32[i75 >> 2] = i79;
        break;
       }
       i79 = i65 - 4 | 0;
       if ((i79 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i79 >> 2] | 0) + 4 >> 2] & 63](i79);
      }
     } while (0);
     i66 = HEAP32[i26 >> 2] | 0;
     do {
      if ((i66 | 0) != 0) {
       i4 = i66 | 0;
       i79 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
       if ((i79 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i66);
        break;
       } else {
        HEAP32[i4 >> 2] = i79;
        break;
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i27, H_BASE + 416 | 0);
     __ZN9Inspector19InspectorBasicValue6createEd(i19, +(i61 | 0));
     i66 = i18 | 0;
     i79 = i19 | 0;
     i4 = HEAP32[i79 >> 2] | 0;
     HEAP32[i79 >> 2] = 0;
     HEAP32[i66 >> 2] = i4;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i27, i18);
     i4 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i66 = i4 + 4 | 0;
       i65 = i66 | 0;
       i75 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
       if ((i75 | 0) != 0) {
        HEAP32[i65 >> 2] = i75;
        break;
       }
       i75 = i66 - 4 | 0;
       if ((i75 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 63](i75);
      }
     } while (0);
     i4 = HEAP32[i79 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i75 = i4 + 4 | 0;
       i66 = i75 | 0;
       i65 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       if ((i65 | 0) != 0) {
        HEAP32[i66 >> 2] = i65;
        break;
       }
       i65 = i75 - 4 | 0;
       if ((i65 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
      }
     } while (0);
     i4 = HEAP32[i27 >> 2] | 0;
     do {
      if ((i4 | 0) != 0) {
       i79 = i4 | 0;
       i65 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
       if ((i65 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i4);
        break;
       } else {
        HEAP32[i79 >> 2] = i65;
        break;
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i28, H_BASE + 64 | 0);
     __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i17, i43);
     i4 = i16 | 0;
     i65 = i17 | 0;
     i79 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = 0;
     HEAP32[i4 >> 2] = i79;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i28, i16);
     i79 = HEAP32[i4 >> 2] | 0;
     do {
      if ((i79 | 0) != 0) {
       i4 = i79 + 4 | 0;
       i75 = i4 | 0;
       i66 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
       if ((i66 | 0) != 0) {
        HEAP32[i75 >> 2] = i66;
        break;
       }
       i66 = i4 - 4 | 0;
       if ((i66 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 63](i66);
      }
     } while (0);
     i79 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i79 | 0) != 0) {
       i66 = i79 + 4 | 0;
       i4 = i66 | 0;
       i75 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
       if ((i75 | 0) != 0) {
        HEAP32[i4 >> 2] = i75;
        break;
       }
       i75 = i66 - 4 | 0;
       if ((i75 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 63](i75);
      }
     } while (0);
     i79 = HEAP32[i28 >> 2] | 0;
     do {
      if ((i79 | 0) != 0) {
       i65 = i79 | 0;
       i75 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
       if ((i75 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i79);
        break;
       } else {
        HEAP32[i65 >> 2] = i75;
        break;
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i29, H_BASE + 456 | 0);
     __ZN9Inspector19InspectorBasicValue6createEb(i15, i59);
     i79 = i14 | 0;
     i75 = i15 | 0;
     i65 = HEAP32[i75 >> 2] | 0;
     HEAP32[i75 >> 2] = 0;
     HEAP32[i79 >> 2] = i65;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i29, i14);
     i65 = HEAP32[i79 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i79 = i65 + 4 | 0;
       i66 = i79 | 0;
       i4 = (HEAP32[i66 >> 2] | 0) - 1 | 0;
       if ((i4 | 0) != 0) {
        HEAP32[i66 >> 2] = i4;
        break;
       }
       i4 = i79 - 4 | 0;
       if ((i4 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
      }
     } while (0);
     i65 = HEAP32[i75 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i4 = i65 + 4 | 0;
       i79 = i4 | 0;
       i66 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
       if ((i66 | 0) != 0) {
        HEAP32[i79 >> 2] = i66;
        break;
       }
       i66 = i4 - 4 | 0;
       if ((i66 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i66 >> 2] | 0) + 4 >> 2] & 63](i66);
      }
     } while (0);
     i65 = HEAP32[i29 >> 2] | 0;
     do {
      if ((i65 | 0) != 0) {
       i75 = i65 | 0;
       i66 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
       if ((i66 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i65);
        break;
       } else {
        HEAP32[i75 >> 2] = i66;
        break;
       }
      }
     } while (0);
     __ZN3WTF6StringC1EPKc(i30, H_BASE + 48 | 0);
     __ZN9Inspector19InspectorBasicValue6createEb(i13, i71);
     i65 = i12 | 0;
     i66 = i13 | 0;
     i75 = HEAP32[i66 >> 2] | 0;
     HEAP32[i66 >> 2] = 0;
     HEAP32[i65 >> 2] = i75;
     __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i70, i30, i12);
     i75 = HEAP32[i65 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i65 = i75 + 4 | 0;
       i4 = i65 | 0;
       i79 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
       if ((i79 | 0) != 0) {
        HEAP32[i4 >> 2] = i79;
        break;
       }
       i79 = i65 - 4 | 0;
       if ((i79 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i79 >> 2] | 0) + 4 >> 2] & 63](i79);
      }
     } while (0);
     i75 = HEAP32[i66 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i71 = i75 + 4 | 0;
       i79 = i71 | 0;
       i65 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
       if ((i65 | 0) != 0) {
        HEAP32[i79 >> 2] = i65;
        break;
       }
       i65 = i71 - 4 | 0;
       if ((i65 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
      }
     } while (0);
     i75 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       i66 = i75 | 0;
       i65 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
       if ((i65 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i75);
        break;
       } else {
        HEAP32[i66 >> 2] = i65;
        break;
       }
      }
     } while (0);
     i75 = HEAP32[i77 >> 2] | 0;
     do {
      if ((i75 | 0) != 0) {
       __ZN3WTF6StringC1EPKc(i31, H_BASE + 40 | 0);
       i65 = i32 | 0;
       HEAP32[i65 >> 2] = i75;
       i66 = i75 + 4 | 0;
       HEAP32[i66 >> 2] = (HEAP32[i66 >> 2] | 0) + 1;
       __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i70, i31, i32);
       i66 = HEAP32[i65 >> 2] | 0;
       do {
        if ((i66 | 0) != 0) {
         i65 = i66 + 4 | 0;
         i71 = i65 | 0;
         i79 = (HEAP32[i71 >> 2] | 0) - 1 | 0;
         if ((i79 | 0) != 0) {
          HEAP32[i71 >> 2] = i79;
          break;
         }
         i79 = i65 - 4 | 0;
         if ((i79 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i79 >> 2] | 0) + 4 >> 2] & 63](i79);
        }
       } while (0);
       i66 = HEAP32[i31 >> 2] | 0;
       if ((i66 | 0) == 0) {
        break;
       }
       i79 = i66 | 0;
       i65 = (HEAP32[i79 >> 2] | 0) - 2 | 0;
       if ((i65 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i66);
        break;
       } else {
        HEAP32[i79 >> 2] = i65;
        break;
       }
      }
     } while (0);
     i70 = i51 | 0;
     HEAP32[i70 >> 2] = i74;
     do {
      if ((i74 | 0) != 0) {
       i75 = i74 + 4 | 0;
       i65 = HEAP32[i75 >> 2] | 0;
       HEAP32[i75 >> 2] = i65 + 1;
       i75 = i74 + 4 | 0;
       if ((i65 | 0) != 0) {
        HEAP32[i75 >> 2] = i65;
        break;
       }
       i65 = i75 - 4 | 0;
       if ((i65 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
      }
     } while (0);
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_NS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i52, i73 | 0, i37, i51);
     do {
      if ((HEAP8[i52 + 8 | 0] & 1) == 0) {
       i74 = HEAP32[i52 >> 2] | 0;
       i65 = HEAP32[i70 >> 2] | 0;
       HEAP32[i70 >> 2] = 0;
       i75 = i74 + 4 | 0;
       i74 = HEAP32[i75 >> 2] | 0;
       HEAP32[i75 >> 2] = i65;
       if ((i74 | 0) == 0) {
        break;
       }
       i65 = i74 + 4 | 0;
       i74 = i65 | 0;
       i75 = (HEAP32[i74 >> 2] | 0) - 1 | 0;
       if ((i75 | 0) != 0) {
        HEAP32[i74 >> 2] = i75;
        break;
       }
       i75 = i65 - 4 | 0;
       if ((i75 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i75 >> 2] | 0) + 4 >> 2] & 63](i75);
      } else {
       i75 = HEAP32[i70 >> 2] | 0;
       if ((i75 | 0) == 0) {
        break;
       }
       i65 = i75 + 4 | 0;
       i75 = i65 | 0;
       i74 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
       if ((i74 | 0) != 0) {
        HEAP32[i75 >> 2] = i74;
        break;
       }
       i74 = i65 - 4 | 0;
       if ((i74 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i74 >> 2] | 0) + 4 >> 2] & 63](i74);
      }
     } while (0);
     i70 = HEAP8[i44] & 1;
     HEAP32[i53 >> 2] = i3;
     HEAP32[i53 + 4 >> 2] = i61;
     i74 = i53 + 8 | 0;
     i65 = HEAP32[i42 >> 2] | 0;
     HEAP32[i74 >> 2] = i65;
     if ((i65 | 0) != 0) {
      i75 = i65 | 0;
      HEAP32[i75 >> 2] = (HEAP32[i75 >> 2] | 0) + 2;
     }
     i75 = HEAP32[i72 >> 2] | 0;
     i65 = HEAP32[i78 >> 2] | 0;
     i79 = i53 + 12 | 0;
     HEAP32[i79 >> 2] = 0;
     i66 = i53 + 16 | 0;
     HEAP32[i66 >> 2] = 0;
     i71 = i53 + 20 | 0;
     HEAP32[i71 >> 2] = i65;
     do {
      if ((i75 | 0) != 0) {
       if (i75 >>> 0 > 536870911 >>> 0) {
        _WTFCrash();
       }
       i4 = __ZN3WTF18fastMallocGoodSizeEj(i75 << 3) | 0;
       HEAP32[i66 >> 2] = i4 >>> 3;
       i67 = __ZN3WTF10fastMallocEj(i4) | 0;
       i4 = i67;
       HEAP32[i79 >> 2] = i4;
       if ((i67 | 0) == 0) {
        break;
       }
       i67 = HEAP32[i40 >> 2] | 0;
       i39 = i67 + (i65 << 3) | 0;
       if ((i65 | 0) == 0) {
        break;
       } else {
        i80 = i67;
        i81 = i4;
       }
       while (1) {
        HEAP32[i81 >> 2] = HEAP32[i80 >> 2];
        i4 = HEAP32[i80 + 4 >> 2] | 0;
        HEAP32[i81 + 4 >> 2] = i4;
        if ((i4 | 0) != 0) {
         i67 = i4 | 0;
         HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 2;
        }
        i67 = i80 + 8 | 0;
        if ((i67 | 0) == (i39 | 0)) {
         break;
        } else {
         i80 = i67;
         i81 = i81 + 8 | 0;
        }
       }
      }
     } while (0);
     HEAP8[i53 + 24 | 0] = i70;
     i65 = i1 + 44 | 0;
     i75 = HEAP32[i65 >> 2] | 0;
     i39 = i1 + 48 | 0;
     i67 = HEAP32[i39 >> 2] | 0;
     i4 = i75 + (i67 * 40 & -1) | 0;
     L407 : do {
      if ((HEAP32[i1 + 56 >> 2] | 0) != 0) {
       L409 : do {
        if ((i67 | 0) == 0) {
         i82 = i75;
        } else {
         i76 = i75;
         while (1) {
          i64 = HEAP32[i76 >> 2] | 0;
          if (!((i64 | 0) == (-1 | 0) | (i64 | 0) == 0)) {
           i82 = i76;
           break L409;
          }
          i76 = i76 + 40 | 0;
          if ((i76 | 0) == (i4 | 0)) {
           break L407;
          }
         }
        }
       } while (0);
       if ((i82 | 0) == (i4 | 0)) {
        break;
       }
       i76 = i54 | 0;
       i64 = i55 | 0;
       i41 = i82;
       while (1) {
        i38 = i41 + 12 | 0;
        i6 = HEAP32[i38 >> 2] | 0;
        if ((i6 | 0) == 0) {
         i83 = 1;
        } else {
         i83 = (HEAP32[i6 + 4 >> 2] | 0) == 0;
        }
        i6 = HEAP32[(i83 ? i41 + 4 | 0 : i38) >> 2] | 0;
        HEAP32[i76 >> 2] = i6;
        if ((i6 | 0) != 0) {
         i38 = i6 | 0;
         HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
        }
        if (i59) {
         __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i11, i36, 0, 0);
         i38 = (__ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i11, i54, 0, 0) | 0) == -1;
         __ZN7WebCore17RegularExpressionD1Ev(i11);
         if (!i38) {
          i69 = 292;
         }
        } else {
         if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i76 >> 2] | 0, HEAP32[i58 >> 2] | 0) | 0) {
          i69 = 292;
         }
        }
        do {
         if ((i69 | 0) == 292) {
          i69 = 0;
          __ZN7WebCore22InspectorDebuggerAgent17resolveBreakpointERKN3WTF6StringEjRKNS_16ScriptBreakpointE(i55, i1, i37, HEAP32[i41 >> 2] | 0, i53);
          i38 = HEAP32[i64 >> 2] | 0;
          HEAP32[i64 >> 2] = 0;
          if ((i38 | 0) == 0) {
           break;
          }
          i6 = HEAP32[i57 >> 2] | 0;
          i5 = i38 + 4 | 0;
          HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
          i5 = i38 | 0;
          i68 = i6 + 12 | 0;
          i62 = i6 + 20 | 0;
          i33 = HEAP32[i62 >> 2] | 0;
          if ((i33 | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
           __ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i68, i33 + 1 | 0);
           HEAP32[(HEAP32[i68 >> 2] | 0) + (HEAP32[i62 >> 2] << 2) >> 2] = i5;
          } else {
           HEAP32[(HEAP32[i68 >> 2] | 0) + (i33 << 2) >> 2] = i5;
          }
          HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
          i62 = i38 + 4 | 0;
          i38 = i62 | 0;
          i5 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
          if ((i5 | 0) != 0) {
           HEAP32[i38 >> 2] = i5;
           break;
          }
          i5 = i62 - 4 | 0;
          if ((i5 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
         }
        } while (0);
        i5 = HEAP32[i76 >> 2] | 0;
        do {
         if ((i5 | 0) != 0) {
          i62 = i5 | 0;
          i38 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
          if ((i38 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i5);
           break;
          } else {
           HEAP32[i62 >> 2] = i38;
           break;
          }
         }
        } while (0);
        i5 = i41 + 40 | 0;
        L444 : do {
         if ((i5 | 0) == (i4 | 0)) {
          i84 = i4;
         } else {
          i38 = i5;
          while (1) {
           i62 = HEAP32[i38 >> 2] | 0;
           if (!((i62 | 0) == (-1 | 0) | (i62 | 0) == 0)) {
            i84 = i38;
            break L444;
           }
           i62 = i38 + 40 | 0;
           if ((i62 | 0) == (i4 | 0)) {
            i84 = i4;
            break;
           } else {
            i38 = i62;
           }
          }
         }
        } while (0);
        if ((i84 | 0) == ((HEAP32[i65 >> 2] | 0) + ((HEAP32[i39 >> 2] | 0) * 40 & -1) | 0)) {
         break;
        } else {
         i41 = i84;
        }
       }
      }
     } while (0);
     i39 = HEAP32[i37 >> 2] | 0;
     if ((i39 | 0) != 0) {
      i65 = i39 | 0;
      HEAP32[i65 >> 2] = (HEAP32[i65 >> 2] | 0) + 2;
     }
     i65 = i8 | 0;
     i4 = HEAP32[i65 >> 2] | 0;
     HEAP32[i65 >> 2] = i39;
     do {
      if ((i4 | 0) != 0) {
       i39 = i4 | 0;
       i65 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
       if ((i65 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i4);
        break;
       } else {
        HEAP32[i39 >> 2] = i65;
        break;
       }
      }
     } while (0);
     i4 = HEAP32[i71 >> 2] | 0;
     if ((i4 | 0) != 0) {
      i65 = HEAP32[i79 >> 2] | 0;
      i39 = i65 + (i4 << 3) | 0;
      i4 = i65;
      while (1) {
       i65 = HEAP32[i4 + 4 >> 2] | 0;
       do {
        if ((i65 | 0) != 0) {
         i75 = i65 | 0;
         i67 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
         if ((i67 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i65);
          break;
         } else {
          HEAP32[i75 >> 2] = i67;
          break;
         }
        }
       } while (0);
       i4 = i4 + 8 | 0;
       if ((i4 | 0) == (i39 | 0)) {
        break;
       }
      }
      HEAP32[i71 >> 2] = 0;
     }
     i39 = HEAP32[i79 >> 2] | 0;
     if ((i39 | 0) != 0) {
      HEAP32[i79 >> 2] = 0;
      HEAP32[i66 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i39);
     }
     i39 = HEAP32[i74 >> 2] | 0;
     if ((i39 | 0) == 0) {
      break;
     }
     i4 = i39 | 0;
     i65 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
     if ((i65 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i39);
      break;
     } else {
      HEAP32[i4 >> 2] = i65;
      break;
     }
    }
   } while (0);
   i65 = HEAP32[i78 >> 2] | 0;
   i4 = HEAP32[i40 >> 2] | 0;
   if ((i65 | 0) != 0) {
    i39 = i4 + (i65 << 3) | 0;
    i65 = i4;
    while (1) {
     i67 = HEAP32[i65 + 4 >> 2] | 0;
     do {
      if ((i67 | 0) != 0) {
       i75 = i67 | 0;
       i70 = (HEAP32[i75 >> 2] | 0) - 2 | 0;
       if ((i70 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i67);
        break;
       } else {
        HEAP32[i75 >> 2] = i70;
        break;
       }
      }
     } while (0);
     i65 = i65 + 8 | 0;
     if ((i65 | 0) == (i39 | 0)) {
      break;
     }
    }
    HEAP32[i78 >> 2] = 0;
   }
   if ((i4 | 0) != 0) {
    HEAP32[i40 >> 2] = 0;
    HEAP32[i72 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   i39 = HEAP32[i77 >> 2] | 0;
   do {
    if ((i39 | 0) != 0) {
     i65 = i39 + 4 | 0;
     i67 = i65 | 0;
     i74 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
     if ((i74 | 0) != 0) {
      HEAP32[i67 >> 2] = i74;
      break;
     }
     i74 = i65 - 4 | 0;
     if ((i74 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i74 >> 2] | 0) + 4 >> 2] & 63](i74);
    }
   } while (0);
   i39 = HEAP32[i42 >> 2] | 0;
   if ((i39 | 0) == 0) {
    break;
   }
   i77 = i39 | 0;
   i4 = (HEAP32[i77 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i39);
    break;
   } else {
    HEAP32[i77 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i37 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i37 = i8 | 0;
   i84 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
   if ((i84 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i37 >> 2] = i84;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i58 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i58 = i8 | 0;
 i84 = (HEAP32[i58 >> 2] | 0) - 2 | 0;
 if ((i84 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i8);
  STACKTOP = i10;
  return;
 } else {
  HEAP32[i58 >> 2] = i84;
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 72 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 88 | 0;
 i13 = i4 + 96 | 0;
 i14 = i4 + 104 | 0;
 i15 = i4 + 112 | 0;
 i16 = i4 + 128 | 0;
 i17 = i4 + 136 | 0;
 i18 = i4 + 144 | 0;
 i19 = i4 + 152 | 0;
 i20 = i4 + 160 | 0;
 i21 = i4 + 168 | 0;
 i22 = i4 + 200 | 0;
 i23 = i4 + 208 | 0;
 i24 = i4 + 216 | 0;
 i25 = i4 + 224 | 0;
 i26 = i4 + 232 | 0;
 i27 = i4 + 240 | 0;
 i28 = i4 + 248 | 0;
 i29 = i4 + 256 | 0;
 i30 = i4 + 264 | 0;
 i31 = i4 + 272 | 0;
 HEAP32[i8 >> 2] = i2;
 i32 = i9 | 0;
 i33 = HEAP32[i3 >> 2] | 0;
 HEAP32[i32 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i34 = i33 | 0;
  HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
 }
 i34 = i9 + 4 | 0;
 i33 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i34 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i35 = i33 | 0;
  HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + 2;
 }
 i35 = i9 + 8 | 0;
 i33 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i35 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i36 = i33 | 0;
  HEAP32[i36 >> 2] = (HEAP32[i36 >> 2] | 0) + 2;
 }
 i36 = i9 + 12 | 0;
 i33 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i36 >> 2] = i33;
 if ((i33 | 0) != 0) {
  i37 = i33 | 0;
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
 }
 i37 = i9 + 16 | 0;
 i33 = HEAP32[i3 + 16 >> 2] | 0;
 HEAP32[i37 >> 2] = i33;
 i38 = i9 + 20 | 0;
 i39 = HEAP32[i3 + 20 >> 2] | 0;
 HEAP32[i38 >> 2] = i39;
 i40 = i9 + 24 | 0;
 HEAP32[i40 >> 2] = HEAP32[i3 + 24 >> 2];
 i41 = i9 + 28 | 0;
 HEAP32[i41 >> 2] = HEAP32[i3 + 28 >> 2];
 i42 = i9 + 32 | 0;
 HEAP8[i42] = HEAP8[i3 + 32 | 0] & 1;
 do {
  if ((i33 | i39 | 0) == 0) {
   __ZN7WebCore18ContentSearchUtils19findScriptSourceURLERKN3WTF6StringE(i10, i9 + 4 | 0);
   i3 = i10 | 0;
   i43 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   i44 = HEAP32[i35 >> 2] | 0;
   HEAP32[i35 >> 2] = i43;
   do {
    if ((i44 | 0) != 0) {
     i43 = i44 | 0;
     i45 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i45 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      break;
     } else {
      HEAP32[i43 >> 2] = i45;
      break;
     }
    }
   } while (0);
   i44 = HEAP32[i3 >> 2] | 0;
   if ((i44 | 0) == 0) {
    break;
   }
   i45 = i44 | 0;
   i43 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i43 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i44);
    break;
   } else {
    HEAP32[i45 >> 2] = i43;
    break;
   }
  }
 } while (0);
 i10 = i9 + 12 | 0;
 __ZN7WebCore22InspectorDebuggerAgent21sourceMapURLForScriptERKNS_19ScriptDebugListener6ScriptE(i11, i1, i9);
 i39 = i11 | 0;
 i11 = HEAP32[i39 >> 2] | 0;
 HEAP32[i39 >> 2] = 0;
 i33 = i10 | 0;
 i43 = HEAP32[i33 >> 2] | 0;
 HEAP32[i33 >> 2] = i11;
 do {
  if ((i43 | 0) != 0) {
   i11 = i43 | 0;
   i45 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i45 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i11 >> 2] = i45;
    break;
   }
  }
 } while (0);
 i43 = HEAP32[i39 >> 2] | 0;
 do {
  if ((i43 | 0) != 0) {
   i39 = i43 | 0;
   i45 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
   if ((i45 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i43);
    break;
   } else {
    HEAP32[i39 >> 2] = i45;
    break;
   }
  }
 } while (0);
 i43 = i9 + 8 | 0;
 i45 = HEAP32[i43 >> 2] | 0;
 if ((i45 | 0) == 0) {
  i46 = 1;
 } else {
  i46 = (HEAP32[i45 + 4 >> 2] | 0) == 0;
 }
 HEAP8[i12] = i46 & 1 ^ 1;
 i45 = i13 | 0;
 i39 = HEAP32[(i46 ? i9 | 0 : i43) >> 2] | 0;
 HEAP32[i45 >> 2] = i39;
 if ((i39 | 0) != 0) {
  i43 = i39 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + 2;
 }
 i43 = (HEAP32[i33 >> 2] | 0) == 0 ? 0 : i10;
 i10 = (HEAP8[i42] & 1) != 0 ? i42 : 0;
 __ZN3WTF6String6numberEj(i14, i2);
 i2 = i1 + 24 | 0;
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher12scriptParsedERKN3WTF6StringES4_iiiiPKbPS3_S6_(HEAP32[i2 >> 2] | 0, i14, i13, HEAP32[i37 >> 2] | 0, HEAP32[i38 >> 2] | 0, HEAP32[i40 >> 2] | 0, HEAP32[i41 >> 2] | 0, i10, i43, i46 ? 0 : i12);
 __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_(i15, i1 + 44 | 0, i8, i9);
 if ((HEAP8[i15 + 8 | 0] & 1) == 0) {
  __ZN7WebCore19ScriptDebugListener6ScriptaSERKS1_((HEAP32[i15 >> 2] | 0) + 4 | 0, i9) | 0;
 }
 i9 = HEAP32[i45 >> 2] | 0;
 L47 : do {
  if ((i9 | 0) != 0) {
   if ((HEAP32[i9 + 4 >> 2] | 0) == 0) {
    break;
   }
   i15 = HEAP32[i1 + 84 >> 2] | 0;
   i12 = HEAP32[i1 + 88 >> 2] | 0;
   i46 = i15 + (i12 << 3) | 0;
   if ((HEAP32[i1 + 96 >> 2] | 0) == 0) {
    break;
   }
   L51 : do {
    if ((i12 | 0) == 0) {
     i47 = i15;
    } else {
     i43 = i15;
     while (1) {
      i10 = HEAP32[i43 >> 2] | 0;
      if (!((i10 | 0) == (-1 | 0) | (i10 | 0) == 0)) {
       i47 = i43;
       break L51;
      }
      i43 = i43 + 8 | 0;
      if ((i43 | 0) == (i46 | 0)) {
       break L47;
      }
     }
    }
   } while (0);
   if ((i47 | 0) == (i46 | 0)) {
    break;
   }
   i15 = i16 | 0;
   i12 = i18 | 0;
   i3 = i19 | 0;
   i43 = i20 | 0;
   i10 = i21 + 8 | 0;
   i41 = i10;
   i40 = i6 | 0;
   i38 = i22 | 0;
   i37 = i5 | 0;
   i42 = i23 | 0;
   i33 = i21 + 8 | 0;
   i39 = i24 | 0;
   i11 = i21 + 24 | 0;
   i44 = i25 | 0;
   i48 = i26 | 0;
   i49 = i27 | 0;
   i50 = i28 | 0;
   i51 = i29 | 0;
   i52 = i21 + 12 | 0;
   i53 = i30 | 0;
   i54 = i31 | 0;
   i55 = i21 + 20 | 0;
   i56 = i21 + 12 | 0;
   i57 = i21 + 16 | 0;
   i58 = i21 + 4 | 0;
   i59 = i21 | 0;
   i60 = i47;
   while (1) {
    i61 = HEAP32[i60 + 4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i61 >> 2] | 0) + 48 >> 2] & 63](i16, i61 | 0);
    i61 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = 0;
    i62 = i61 | 0;
    __ZN3WTF6StringC1EPKc(i18, H_BASE + 456 | 0);
    __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i62, i18, i17) | 0;
    i63 = HEAP32[i12 >> 2] | 0;
    do {
     if ((i63 | 0) != 0) {
      i64 = i63 | 0;
      i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i65 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       break;
      } else {
       HEAP32[i64 >> 2] = i65;
       break;
      }
     }
    } while (0);
    HEAP32[i3 >> 2] = 0;
    __ZN3WTF6StringC1EPKc(i20, H_BASE + 448 | 0);
    __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i62, i20, i19) | 0;
    i63 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i63 | 0) != 0) {
      i65 = i63 | 0;
      i64 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       break;
      } else {
       HEAP32[i65 >> 2] = i64;
       break;
      }
     }
    } while (0);
    if ((HEAP8[i17] & 1) == 0) {
     if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i45 >> 2] | 0, HEAP32[i3 >> 2] | 0) | 0) {
      i66 = 51;
     }
    } else {
     __ZN7WebCore17RegularExpressionC1ERKN3WTF6StringENS1_19TextCaseSensitivityENS_13MultilineModeE(i7, i19, 0, 0);
     i63 = (__ZNK7WebCore17RegularExpression5matchERKN3WTF6StringEiPi(i7, i13, 0, 0) | 0) == -1;
     __ZN7WebCore17RegularExpressionD1Ev(i7);
     if (!i63) {
      i66 = 51;
     }
    }
    do {
     if ((i66 | 0) == 51) {
      i66 = 0;
      _memset(i41 | 0, 0, 16) | 0;
      __ZN3WTF6StringC1EPKc(i22, H_BASE + 432 | 0);
      __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i6, i62, i22);
      i63 = HEAP32[i40 >> 2] | 0;
      HEAP32[i40 >> 2] = 0;
      do {
       if ((i63 | 0) != 0) {
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i63 >> 2] | 0) + 20 >> 2] & 31](i63, i59) | 0;
        i64 = i63 + 4 | 0;
        i65 = i64 | 0;
        i67 = (HEAP32[i65 >> 2] | 0) - 1 | 0;
        if ((i67 | 0) != 0) {
         HEAP32[i65 >> 2] = i67;
         break;
        }
        i67 = i64 - 4 | 0;
        if ((i67 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i67 >> 2] | 0) + 4 >> 2] & 63](i67);
       }
      } while (0);
      i63 = HEAP32[i38 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i67 = i63 | 0;
        i64 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i67 >> 2] = i64;
         break;
        }
       }
      } while (0);
      __ZN3WTF6StringC1EPKc(i23, H_BASE + 416 | 0);
      __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i5, i62, i23);
      i63 = HEAP32[i37 >> 2] | 0;
      HEAP32[i37 >> 2] = 0;
      do {
       if ((i63 | 0) != 0) {
        FUNCTION_TABLE_iii[HEAP32[(HEAP32[i63 >> 2] | 0) + 20 >> 2] & 31](i63, i58) | 0;
        i64 = i63 + 4 | 0;
        i67 = i64 | 0;
        i65 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
        if ((i65 | 0) != 0) {
         HEAP32[i67 >> 2] = i65;
         break;
        }
        i65 = i64 - 4 | 0;
        if ((i65 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
       }
      } while (0);
      i63 = HEAP32[i42 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i65 = i63 | 0;
        i64 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i65 >> 2] = i64;
         break;
        }
       }
      } while (0);
      __ZN3WTF6StringC1EPKc(i24, H_BASE + 64 | 0);
      __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i62, i24, i33) | 0;
      i63 = HEAP32[i39 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i64 = i63 | 0;
        i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
        if ((i65 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i64 >> 2] = i65;
         break;
        }
       }
      } while (0);
      __ZN3WTF6StringC1EPKc(i25, H_BASE + 48 | 0);
      __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i62, i25, i11) | 0;
      i63 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i65 = i63 | 0;
        i64 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i65 >> 2] = i64;
         break;
        }
       }
      } while (0);
      HEAP32[i48 >> 2] = 0;
      __ZN3WTF6StringC1EPKc(i29, H_BASE + 40 | 0);
      __ZNK9Inspector19InspectorObjectBase8getArrayERKN3WTF6StringE(i28, i62, i29);
      i63 = HEAP32[i50 >> 2] | 0;
      HEAP32[i50 >> 2] = 0;
      HEAP32[i49 >> 2] = i63;
      i63 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i64 = i63 | 0;
        i65 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
        if ((i65 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i64 >> 2] = i65;
         break;
        }
       }
      } while (0);
      do {
       if (__ZN7WebCoreL29breakpointActionsFromProtocolEPN3WTF6StringERNS0_6RefPtrIN9Inspector14InspectorArrayEEEPNS0_6VectorINS_22ScriptBreakpointActionELj0ENS0_15CrashOnOverflowEEE(i26, i27, i52) | 0) {
        i63 = i60 | 0;
        __ZN7WebCore22InspectorDebuggerAgent17resolveBreakpointERKN3WTF6StringEjRKNS_16ScriptBreakpointE(i30, i1, i63, HEAP32[i8 >> 2] | 0, i21);
        i65 = HEAP32[i53 >> 2] | 0;
        HEAP32[i53 >> 2] = 0;
        if ((i65 | 0) == 0) {
         break;
        }
        i64 = HEAP32[i2 >> 2] | 0;
        HEAP32[i54 >> 2] = i65;
        i67 = i65 + 4 | 0;
        HEAP32[i67 >> 2] = (HEAP32[i67 >> 2] | 0) + 1;
        __ZN9Inspector35InspectorDebuggerFrontendDispatcher18breakpointResolvedERKN3WTF6StringENS1_10PassRefPtrINS_11TypeBuilder8Debugger8LocationEEE(i64, i63, i31);
        i63 = HEAP32[i54 >> 2] | 0;
        do {
         if ((i63 | 0) != 0) {
          i64 = i63 + 4 | 0;
          i67 = i64 | 0;
          i68 = (HEAP32[i67 >> 2] | 0) - 1 | 0;
          if ((i68 | 0) != 0) {
           HEAP32[i67 >> 2] = i68;
           break;
          }
          i68 = i64 - 4 | 0;
          if ((i68 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i68 >> 2] | 0) + 4 >> 2] & 63](i68);
         }
        } while (0);
        i63 = i65 + 4 | 0;
        i68 = i63 | 0;
        i64 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
        if ((i64 | 0) != 0) {
         HEAP32[i68 >> 2] = i64;
         break;
        }
        i64 = i63 - 4 | 0;
        if ((i64 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i64 >> 2] | 0) + 4 >> 2] & 63](i64);
       }
      } while (0);
      i64 = HEAP32[i49 >> 2] | 0;
      do {
       if ((i64 | 0) != 0) {
        i63 = i64 + 4 | 0;
        i68 = i63 | 0;
        i67 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
        if ((i67 | 0) != 0) {
         HEAP32[i68 >> 2] = i67;
         break;
        }
        i67 = i63 - 4 | 0;
        if ((i67 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i67 >> 2] | 0) + 4 >> 2] & 63](i67);
       }
      } while (0);
      i64 = HEAP32[i48 >> 2] | 0;
      do {
       if ((i64 | 0) != 0) {
        i67 = i64 | 0;
        i63 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
        if ((i63 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i64);
         break;
        } else {
         HEAP32[i67 >> 2] = i63;
         break;
        }
       }
      } while (0);
      i64 = HEAP32[i55 >> 2] | 0;
      if ((i64 | 0) != 0) {
       i63 = HEAP32[i56 >> 2] | 0;
       i67 = i63 + (i64 << 3) | 0;
       i64 = i63;
       while (1) {
        i63 = HEAP32[i64 + 4 >> 2] | 0;
        do {
         if ((i63 | 0) != 0) {
          i68 = i63 | 0;
          i69 = (HEAP32[i68 >> 2] | 0) - 2 | 0;
          if ((i69 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i63);
           break;
          } else {
           HEAP32[i68 >> 2] = i69;
           break;
          }
         }
        } while (0);
        i64 = i64 + 8 | 0;
        if ((i64 | 0) == (i67 | 0)) {
         break;
        }
       }
       HEAP32[i55 >> 2] = 0;
      }
      i67 = HEAP32[i56 >> 2] | 0;
      if ((i67 | 0) != 0) {
       HEAP32[i56 >> 2] = 0;
       HEAP32[i57 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i67);
      }
      i67 = HEAP32[i10 >> 2] | 0;
      if ((i67 | 0) == 0) {
       break;
      }
      i64 = i67 | 0;
      i63 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i63 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i67);
       break;
      } else {
       HEAP32[i64 >> 2] = i63;
       break;
      }
     }
    } while (0);
    i62 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i62 | 0) != 0) {
      i63 = i62 | 0;
      i64 = (HEAP32[i63 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i62);
       break;
      } else {
       HEAP32[i63 >> 2] = i64;
       break;
      }
     }
    } while (0);
    do {
     if ((i61 | 0) != 0) {
      i62 = i61 + 4 | 0;
      i64 = i62 | 0;
      i63 = (HEAP32[i64 >> 2] | 0) - 1 | 0;
      if ((i63 | 0) != 0) {
       HEAP32[i64 >> 2] = i63;
       break;
      }
      i63 = i62 - 4 | 0;
      if ((i63 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i63 >> 2] | 0) + 4 >> 2] & 63](i63);
     }
    } while (0);
    i61 = i60 + 8 | 0;
    if ((i61 | 0) == (i46 | 0)) {
     break L47;
    } else {
     i70 = i61;
    }
    while (1) {
     i61 = HEAP32[i70 >> 2] | 0;
     if (!((i61 | 0) == (-1 | 0) | (i61 | 0) == 0)) {
      break;
     }
     i61 = i70 + 8 | 0;
     if ((i61 | 0) == (i46 | 0)) {
      break L47;
     } else {
      i70 = i61;
     }
    }
    if ((i70 | 0) == (i46 | 0)) {
     break;
    } else {
     i60 = i70;
    }
   }
  }
 } while (0);
 i70 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i70 | 0) != 0) {
   i14 = i70 | 0;
   i31 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i14 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i70 = HEAP32[i45 >> 2] | 0;
 do {
  if ((i70 | 0) != 0) {
   i45 = i70 | 0;
   i31 = (HEAP32[i45 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i45 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i70 = HEAP32[i36 >> 2] | 0;
 do {
  if ((i70 | 0) != 0) {
   i36 = i70 | 0;
   i31 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i36 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i70 = HEAP32[i35 >> 2] | 0;
 do {
  if ((i70 | 0) != 0) {
   i35 = i70 | 0;
   i31 = (HEAP32[i35 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i35 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i70 = HEAP32[i34 >> 2] | 0;
 do {
  if ((i70 | 0) != 0) {
   i34 = i70 | 0;
   i31 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i70);
    break;
   } else {
    HEAP32[i34 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i70 = HEAP32[i32 >> 2] | 0;
 if ((i70 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i32 = i70 | 0;
 i31 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i70);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i32 >> 2] = i31;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 72 | 0;
 i18 = i7 + 80 | 0;
 i19 = i7 + 96 | 0;
 i20 = i7 + 104 | 0;
 i21 = i7 + 128 | 0;
 i22 = i7 + 144 | 0;
 i23 = i7 + 152 | 0;
 i24 = i7 + 160 | 0;
 i25 = i7 + 168 | 0;
 i26 = i7 + 176 | 0;
 i27 = i7 + 184 | 0;
 i28 = i7 + 216 | 0;
 i29 = i7 + 224 | 0;
 if (!(__ZN7WebCoreL13parseLocationEPN3WTF6StringEPN9Inspector15InspectorObjectEPjS6_S6_(i2, HEAP32[i3 >> 2] | 0, i8, i9, i10) | 0)) {
  STACKTOP = i7;
  return;
 }
 i3 = i11 | 0;
 i30 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 HEAP32[i3 >> 2] = i30;
 if ((i30 | 0) != 0) {
  i31 = i30 | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
 }
 HEAP8[i12] = 0;
 i31 = i13 | 0;
 HEAP32[i31 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i30 = i4 | 0;
   i32 = HEAP32[i30 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i14, H_BASE + 64 | 0);
   __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i32, i14, i11) | 0;
   i32 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i33 = i32 | 0;
     i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i33 >> 2] = i34;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i30 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i15, H_BASE + 48 | 0);
   __ZNK9Inspector19InspectorObjectBase10getBooleanERKN3WTF6StringEPb(i32, i15, i12) | 0;
   i32 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i34 = i32 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i30 >> 2] | 0;
   __ZN3WTF6StringC1EPKc(i17, H_BASE + 40 | 0);
   __ZNK9Inspector19InspectorObjectBase8getArrayERKN3WTF6StringE(i16, i32, i17);
   i32 = i16 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   HEAP32[i32 >> 2] = 0;
   HEAP32[i31 >> 2] = i33;
   i33 = HEAP32[i17 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   i32 = i33 | 0;
   i34 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
   if ((i34 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i33);
    break;
   } else {
    HEAP32[i32 >> 2] = i34;
    break;
   }
  }
 } while (0);
 i17 = i18 | 0;
 HEAP32[i17 >> 2] = 0;
 i16 = i18 + 4 | 0;
 HEAP32[i16 >> 2] = 0;
 i15 = i18 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 do {
  if (__ZN7WebCoreL29breakpointActionsFromProtocolEPN3WTF6StringERNS0_6RefPtrIN9Inspector14InspectorArrayEEEPNS0_6VectorINS_22ScriptBreakpointActionELj0ENS0_15CrashOnOverflowEEE(i2, i13, i18) | 0) {
   i14 = HEAP32[i8 >> 2] | 0;
   __ZN3WTF6String6numberEj(i22, i14);
   i11 = i22 | 0;
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF6String6numberEj(i23, HEAP32[i9 >> 2] | 0);
    i35 = 0;
    i36 = 1;
   } else {
    i34 = i4 | 0;
    i32 = HEAP32[i34 >> 2] | 0;
    i33 = i32 + 2 | 0;
    HEAP32[i34 >> 2] = i32 + 4;
    if ((i33 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     __ZN3WTF6String6numberEj(i23, HEAP32[i9 >> 2] | 0);
    } else {
     HEAP32[i34 >> 2] = i33;
     __ZN3WTF6String6numberEj(i23, HEAP32[i9 >> 2] | 0);
    }
    HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
    i35 = i4;
    i36 = 0;
   }
   i4 = i23 | 0;
   i34 = HEAP32[i4 >> 2] | 0;
   i33 = (i34 | 0) == 0;
   if (!i33) {
    i32 = i34 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   }
   if (!i36) {
    i32 = i35 | 0;
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   }
   do {
    if (!i33) {
     i32 = i34 | 0;
     i37 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = i37 + 2;
     if ((i37 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i32 >> 2] = i37;
      break;
     }
    }
   } while (0);
   if (!i36) {
    i30 = i35 | 0;
    i37 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
    if ((i37 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i35);
     i38 = HEAP32[i30 >> 2] | 0;
    } else {
     HEAP32[i30 >> 2] = i37;
     i38 = i37;
    }
    HEAP32[i30 >> 2] = i38 + 2;
   }
   if (!i33) {
    i30 = i34 | 0;
    HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 2;
   }
   i30 = i21 | 0;
   HEAP32[i30 >> 2] = i35;
   if (!i36) {
    i37 = i35 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
   }
   HEAP8[i21 + 4 | 0] = 58;
   i37 = i21 + 8 | 0;
   HEAP32[i37 >> 2] = i34;
   do {
    if (i33) {
     HEAP8[i21 + 12 | 0] = 58;
    } else {
     i32 = i34 | 0;
     i39 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = i39 + 2;
     HEAP8[i21 + 12 | 0] = 58;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i32 >> 2] = i39;
      break;
     }
    }
   } while (0);
   do {
    if (!i36) {
     i39 = i35 | 0;
     i32 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i32 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i39 >> 2] = i32;
      break;
     }
    }
   } while (0);
   __ZN3WTF6String6numberEj(i24, HEAP32[i10 >> 2] | 0);
   __ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_(i20, i21, i24);
   __ZNK3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EcvS1_Ev(i19, i20);
   i32 = HEAP32[i20 + 16 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i39 = i32 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i20 + 8 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i40 = i32 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i39 = i32 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i40 = i32 | 0;
     i39 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
     if ((i39 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i40 >> 2] = i39;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i39 = i32 | 0;
     i40 = (HEAP32[i39 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i39 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i32 = HEAP32[i30 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i37 = i32 | 0;
     i40 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i37 >> 2] = i40;
      break;
     }
    }
   } while (0);
   do {
    if (!i33) {
     i32 = i34 | 0;
     i30 = (HEAP32[i32 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i34);
      break;
     } else {
      HEAP32[i32 >> 2] = i30;
      break;
     }
    }
   } while (0);
   do {
    if (!i36) {
     i34 = i35 | 0;
     i33 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i33 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i34 >> 2] = i33;
      break;
     }
    }
   } while (0);
   i33 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i33 | 0) != 0) {
     i34 = i33 | 0;
     i30 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i33);
      break;
     } else {
      HEAP32[i34 >> 2] = i30;
      break;
     }
    }
   } while (0);
   do {
    if (!i36) {
     i33 = i35 | 0;
     i4 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i4 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i35);
      break;
     } else {
      HEAP32[i33 >> 2] = i4;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i33 = i4 | 0;
     i30 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i30 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i33 >> 2] = i30;
      break;
     }
    }
   } while (0);
   i4 = i1 + 64 | 0;
   __ZN3WTF7HashMapINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i25, i4, i19);
   do {
    if ((HEAP32[i25 >> 2] | 0) == ((HEAP32[i4 >> 2] | 0) + (HEAP32[i1 + 68 >> 2] << 4) | 0)) {
     i11 = HEAP32[i10 >> 2] | 0;
     i30 = HEAP8[i12] & 1;
     HEAP32[i27 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i27 + 4 >> 2] = i11;
     i11 = i27 + 8 | 0;
     i33 = HEAP32[i3 >> 2] | 0;
     HEAP32[i11 >> 2] = i33;
     if ((i33 | 0) != 0) {
      i34 = i33 | 0;
      HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
     }
     i34 = HEAP32[i16 >> 2] | 0;
     i33 = HEAP32[i15 >> 2] | 0;
     i32 = i27 + 12 | 0;
     HEAP32[i32 >> 2] = 0;
     i40 = i27 + 16 | 0;
     HEAP32[i40 >> 2] = 0;
     i37 = i27 + 20 | 0;
     HEAP32[i37 >> 2] = i33;
     do {
      if ((i34 | 0) == 0) {
       i41 = i14;
      } else {
       if (i34 >>> 0 > 536870911 >>> 0) {
        _WTFCrash();
       }
       i39 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 3) | 0;
       HEAP32[i40 >> 2] = i39 >>> 3;
       i42 = __ZN3WTF10fastMallocEj(i39) | 0;
       i39 = i42;
       HEAP32[i32 >> 2] = i39;
       if ((i42 | 0) == 0) {
        i41 = i14;
        break;
       }
       i42 = HEAP32[i17 >> 2] | 0;
       i43 = i42 + (i33 << 3) | 0;
       if ((i33 | 0) == 0) {
        i41 = i14;
        break;
       } else {
        i44 = i42;
        i45 = i39;
       }
       while (1) {
        HEAP32[i45 >> 2] = HEAP32[i44 >> 2];
        i39 = HEAP32[i44 + 4 >> 2] | 0;
        HEAP32[i45 + 4 >> 2] = i39;
        if ((i39 | 0) != 0) {
         i42 = i39 | 0;
         HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) + 2;
        }
        i42 = i44 + 8 | 0;
        if ((i42 | 0) == (i43 | 0)) {
         break;
        } else {
         i44 = i42;
         i45 = i45 + 8 | 0;
        }
       }
       i41 = HEAP32[i8 >> 2] | 0;
      }
     } while (0);
     HEAP8[i27 + 24 | 0] = i30;
     __ZN7WebCore22InspectorDebuggerAgent17resolveBreakpointERKN3WTF6StringEjRKNS_16ScriptBreakpointE(i28, i1, i19, i41, i27);
     i33 = i28 | 0;
     i34 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = 0;
     i33 = i6 | 0;
     i43 = HEAP32[i33 >> 2] | 0;
     HEAP32[i33 >> 2] = i34;
     if ((i43 | 0) == 0) {
      i46 = i34;
     } else {
      i34 = i43 + 4 | 0;
      i43 = i34 | 0;
      i42 = (HEAP32[i43 >> 2] | 0) - 1 | 0;
      do {
       if ((i42 | 0) == 0) {
        i39 = i34 - 4 | 0;
        if ((i39 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i39 >> 2] | 0) + 4 >> 2] & 63](i39);
       } else {
        HEAP32[i43 >> 2] = i42;
       }
      } while (0);
      i46 = HEAP32[i33 >> 2] | 0;
     }
     do {
      if ((i46 | 0) == 0) {
       __ZN3WTF6StringC1EPKc(i29, H_BASE + 8 | 0);
       i42 = i29 | 0;
       i43 = HEAP32[i42 >> 2] | 0;
       HEAP32[i42 >> 2] = 0;
       i34 = i2 | 0;
       i30 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = i43;
       do {
        if ((i30 | 0) != 0) {
         i43 = i30 | 0;
         i34 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
         if ((i34 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i30);
          break;
         } else {
          HEAP32[i43 >> 2] = i34;
          break;
         }
        }
       } while (0);
       i30 = HEAP32[i42 >> 2] | 0;
       if ((i30 | 0) == 0) {
        break;
       }
       i34 = i30 | 0;
       i43 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
       if ((i43 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i34 >> 2] = i43;
        break;
       }
      } else {
       i43 = HEAP32[i19 >> 2] | 0;
       if ((i43 | 0) != 0) {
        i34 = i43 | 0;
        HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 2;
       }
       i34 = i5 | 0;
       i30 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = i43;
       if ((i30 | 0) == 0) {
        break;
       }
       i43 = i30 | 0;
       i34 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i30);
        break;
       } else {
        HEAP32[i43 >> 2] = i34;
        break;
       }
      }
     } while (0);
     i33 = HEAP32[i37 >> 2] | 0;
     if ((i33 | 0) != 0) {
      i34 = HEAP32[i32 >> 2] | 0;
      i43 = i34 + (i33 << 3) | 0;
      i33 = i34;
      while (1) {
       i34 = HEAP32[i33 + 4 >> 2] | 0;
       do {
        if ((i34 | 0) != 0) {
         i30 = i34 | 0;
         i39 = (HEAP32[i30 >> 2] | 0) - 2 | 0;
         if ((i39 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i34);
          break;
         } else {
          HEAP32[i30 >> 2] = i39;
          break;
         }
        }
       } while (0);
       i33 = i33 + 8 | 0;
       if ((i33 | 0) == (i43 | 0)) {
        break;
       }
      }
      HEAP32[i37 >> 2] = 0;
     }
     i43 = HEAP32[i32 >> 2] | 0;
     if ((i43 | 0) != 0) {
      HEAP32[i32 >> 2] = 0;
      HEAP32[i40 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i43);
     }
     i43 = HEAP32[i11 >> 2] | 0;
     if ((i43 | 0) == 0) {
      break;
     }
     i33 = i43 | 0;
     i34 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
     if ((i34 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i43);
      break;
     } else {
      HEAP32[i33 >> 2] = i34;
      break;
     }
    } else {
     __ZN3WTF6StringC1EPKc(i26, H_BASE + 80 | 0);
     i34 = i26 | 0;
     i33 = HEAP32[i34 >> 2] | 0;
     HEAP32[i34 >> 2] = 0;
     i43 = i2 | 0;
     i42 = HEAP32[i43 >> 2] | 0;
     HEAP32[i43 >> 2] = i33;
     do {
      if ((i42 | 0) != 0) {
       i33 = i42 | 0;
       i43 = (HEAP32[i33 >> 2] | 0) - 2 | 0;
       if ((i43 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i42);
        break;
       } else {
        HEAP32[i33 >> 2] = i43;
        break;
       }
      }
     } while (0);
     i42 = HEAP32[i34 >> 2] | 0;
     if ((i42 | 0) == 0) {
      break;
     }
     i11 = i42 | 0;
     i40 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i40 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i11 >> 2] = i40;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i19 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i4 = i14 | 0;
   i40 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i40 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i4 >> 2] = i40;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i15 >> 2] | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 if ((i19 | 0) != 0) {
  i26 = i2 + (i19 << 3) | 0;
  i19 = i2;
  while (1) {
   i5 = HEAP32[i19 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i29 = i5 | 0;
     i46 = (HEAP32[i29 >> 2] | 0) - 2 | 0;
     if ((i46 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i5);
      break;
     } else {
      HEAP32[i29 >> 2] = i46;
      break;
     }
    }
   } while (0);
   i19 = i19 + 8 | 0;
   if ((i19 | 0) == (i26 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 if ((i2 | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
  HEAP32[i16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i31 = i2 + 4 | 0;
   i16 = i31 | 0;
   i17 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i17 | 0) != 0) {
    HEAP32[i16 >> 2] = i17;
    break;
   }
   i17 = i31 - 4 | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 63](i17);
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i3 = i2 | 0;
 i17 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i3 >> 2] = i17;
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent17resolveBreakpointERKN3WTF6StringEjRKNS_16ScriptBreakpointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 72 | 0;
 i17 = i6 + 80 | 0;
 i18 = i6 + 88 | 0;
 i19 = i6 + 96 | 0;
 i20 = i6 + 104 | 0;
 i21 = i6 + 112 | 0;
 i22 = i6 + 120 | 0;
 i23 = i6 + 128 | 0;
 i24 = i6 + 136 | 0;
 i25 = i6 + 144 | 0;
 i26 = i25;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i20 >> 2] = i4;
 i4 = i2 + 44 | 0;
 __ZN3WTF7HashMapIjN7WebCore19ScriptDebugListener6ScriptENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i21, i4, i20);
 i30 = HEAP32[i21 >> 2] | 0;
 if ((i30 | 0) == ((HEAP32[i4 >> 2] | 0) + ((HEAP32[i2 + 48 >> 2] | 0) * 40 & -1) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i6;
  return;
 }
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) >= (HEAP32[i30 + 20 >> 2] | 0)) {
   if ((HEAP32[i30 + 28 >> 2] | 0) < (i4 | 0)) {
    break;
   }
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i2) | 0;
   i31 = __ZN7WebCore17ScriptDebugServer13setBreakpointEjRKNS_16ScriptBreakpointEPjS4_(i21, HEAP32[i20 >> 2] | 0, i5, i22, i23) | 0;
   HEAP32[i24 >> 2] = i31;
   if ((i31 | 0) == 0) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i6;
    return;
   }
   i31 = i2 + 64 | 0;
   __ZN3WTF7HashMapINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i26, i31, i3);
   i21 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i21 | 0) == ((HEAP32[i31 >> 2] | 0) + (HEAP32[i2 + 68 >> 2] << 4) | 0)) {
     i32 = i28 | 0;
     HEAP32[i32 >> 2] = 0;
     i33 = i28 + 4 | 0;
     HEAP32[i33 >> 2] = 0;
     i34 = i28 + 8 | 0;
     HEAP32[i34 >> 2] = 0;
     __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i27, i31 | 0, i3, i28);
     if ((HEAP8[i27 + 8 | 0] & 1) == 0) {
      i35 = HEAP32[i27 >> 2] | 0;
      i36 = i35 + 12 | 0;
      i37 = HEAP32[i36 >> 2] | 0;
      HEAP32[i36 >> 2] = HEAP32[i34 >> 2];
      HEAP32[i34 >> 2] = i37;
      i36 = i35 + 4 | 0;
      i38 = HEAP32[i36 >> 2] | 0;
      HEAP32[i36 >> 2] = HEAP32[i32 >> 2];
      HEAP32[i32 >> 2] = i38;
      i38 = i35 + 8 | 0;
      i35 = HEAP32[i38 >> 2] | 0;
      HEAP32[i38 >> 2] = HEAP32[i33 >> 2];
      HEAP32[i33 >> 2] = i35;
      i39 = i37;
     } else {
      i39 = HEAP32[i34 >> 2] | 0;
     }
     i37 = i27;
     i35 = HEAP32[i37 >> 2] | 0;
     i38 = HEAP32[i37 + 4 >> 2] | 0;
     HEAP32[i25 >> 2] = i35;
     HEAP32[i25 + 4 >> 2] = i38;
     i38 = i35;
     if ((i39 | 0) != 0) {
      HEAP32[i34 >> 2] = 0;
     }
     i34 = HEAP32[i32 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i40 = i38;
      break;
     }
     HEAP32[i32 >> 2] = 0;
     HEAP32[i33 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i34);
     i40 = i38;
    } else {
     i40 = i21;
    }
   } while (0);
   i21 = i40 + 4 | 0;
   i31 = i40 + 12 | 0;
   i38 = HEAP32[i31 >> 2] | 0;
   if ((i38 | 0) == (HEAP32[i40 + 8 >> 2] | 0)) {
    i34 = i38 + 1 | 0;
    i33 = i21 | 0;
    i32 = HEAP32[i33 >> 2] | 0;
    do {
     if (i32 >>> 0 > i24 >>> 0) {
      i41 = 20;
     } else {
      if ((i32 + (i38 << 2) | 0) >>> 0 <= i24 >>> 0) {
       i41 = 20;
       break;
      }
      __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i34);
      i35 = HEAP32[i33 >> 2] | 0;
      i42 = i35 + (i24 - i32 >> 2 << 2) | 0;
      i43 = i35;
     }
    } while (0);
    if ((i41 | 0) == 20) {
     __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i21, i34);
     i42 = i24;
     i43 = HEAP32[i33 >> 2] | 0;
    }
    HEAP32[i43 + (HEAP32[i31 >> 2] << 2) >> 2] = HEAP32[i42 >> 2];
   } else {
    HEAP32[(HEAP32[i21 >> 2] | 0) + (i38 << 2) >> 2] = HEAP32[i24 >> 2];
   }
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
   __ZN9Inspector15InspectorObject6createEv(i11);
   i32 = HEAP32[i11 >> 2] | 0;
   __ZN3WTF6String6numberEj(i29, HEAP32[i20 >> 2] | 0);
   i35 = i32 | 0;
   HEAP32[i10 >> 2] = H_BASE + 352;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i9, i10);
   __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i8, i29);
   i37 = i7 | 0;
   i36 = i8 | 0;
   i44 = HEAP32[i36 >> 2] | 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i37 >> 2] = i44;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i9, i7);
   i44 = HEAP32[i37 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i37 = i44 + 4 | 0;
     i45 = i37 | 0;
     i46 = (HEAP32[i45 >> 2] | 0) - 1 | 0;
     if ((i46 | 0) != 0) {
      HEAP32[i45 >> 2] = i46;
      break;
     }
     i46 = i37 - 4 | 0;
     if ((i46 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i46 >> 2] | 0) + 4 >> 2] & 63](i46);
    }
   } while (0);
   i44 = HEAP32[i36 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i31 = i44 + 4 | 0;
     i38 = i31 | 0;
     i21 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i38 >> 2] = i21;
      break;
     }
     i21 = i31 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
    }
   } while (0);
   i44 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i36 = i44 | 0;
     i21 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      break;
     } else {
      HEAP32[i36 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i44 = HEAP32[i22 >> 2] | 0;
   HEAP32[i15 >> 2] = H_BASE + 432;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i15);
   __ZN9Inspector19InspectorBasicValue6createEd(i13, +(i44 | 0));
   i44 = i12 | 0;
   i21 = i13 | 0;
   i36 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i44 >> 2] = i36;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i14, i12);
   i36 = HEAP32[i44 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i44 = i36 + 4 | 0;
     i31 = i44 | 0;
     i38 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) != 0) {
      HEAP32[i31 >> 2] = i38;
      break;
     }
     i38 = i44 - 4 | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
    }
   } while (0);
   i36 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i38 = i36 + 4 | 0;
     i44 = i38 | 0;
     i31 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) != 0) {
      HEAP32[i44 >> 2] = i31;
      break;
     }
     i31 = i38 - 4 | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i31 >> 2] | 0) + 4 >> 2] & 63](i31);
    }
   } while (0);
   i36 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i21 = i36 | 0;
     i31 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i31 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i21 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i36 = i32;
   i31 = (i32 | 0) == 0;
   if (!i31) {
    i21 = i32 + 4 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
   }
   i21 = HEAP32[i29 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i38 = i21 | 0;
     i44 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i38 >> 2] = i44;
      break;
     }
    }
   } while (0);
   do {
    if (!i31) {
     i21 = i32 + 4 | 0;
     i44 = i21 | 0;
     i38 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) != 0) {
      HEAP32[i44 >> 2] = i38;
      break;
     }
     i38 = i21 - 4 | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
    }
   } while (0);
   i38 = HEAP32[i23 >> 2] | 0;
   HEAP32[i19 >> 2] = H_BASE + 416;
   __ZN3WTF6StringC1ENS_12ASCIILiteralE(i18, i19);
   __ZN9Inspector19InspectorBasicValue6createEd(i17, +(i38 | 0));
   i38 = i16 | 0;
   i21 = i17 | 0;
   i44 = HEAP32[i21 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i38 >> 2] = i44;
   __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i35, i18, i16);
   i44 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i38 = i44 + 4 | 0;
     i33 = i38 | 0;
     i34 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
     if ((i34 | 0) != 0) {
      HEAP32[i33 >> 2] = i34;
      break;
     }
     i34 = i38 - 4 | 0;
     if ((i34 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 63](i34);
    }
   } while (0);
   i44 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i35 = i44 + 4 | 0;
     i34 = i35 | 0;
     i38 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i38 | 0) != 0) {
      HEAP32[i34 >> 2] = i38;
      break;
     }
     i38 = i35 - 4 | 0;
     if ((i38 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
    }
   } while (0);
   i44 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i44 | 0) != 0) {
     i21 = i44 | 0;
     i38 = (HEAP32[i21 >> 2] | 0) - 2 | 0;
     if ((i38 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i44);
      break;
     } else {
      HEAP32[i21 >> 2] = i38;
      break;
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i36;
   if (i31) {
    STACKTOP = i6;
    return;
   }
   i44 = i32 + 4 | 0;
   i38 = HEAP32[i44 >> 2] | 0;
   HEAP32[i44 >> 2] = i38 + 1;
   i44 = i32 + 4 | 0;
   if ((i38 | 0) != 0) {
    HEAP32[i44 >> 2] = i38;
    STACKTOP = i6;
    return;
   }
   i38 = i44 - 4 | 0;
   if ((i38 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 63](i38);
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL29breakpointActionsFromProtocolEPN3WTF6StringERNS0_6RefPtrIN9Inspector14InspectorArrayEEEPNS0_6VectorINS_22ScriptBreakpointActionELj0ENS0_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
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
 i18 = i2 | 0;
 i2 = HEAP32[i18 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i19 = 1;
  STACKTOP = i4;
  return i19 | 0;
 }
 i20 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i20 | 0) == 0) {
  i19 = 1;
  STACKTOP = i4;
  return i19 | 0;
 }
 __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i3, i20);
 i2 = i8 | 0;
 i21 = i9 | 0;
 i22 = i11 | 0;
 i23 = i12 | 0;
 i24 = i5 | 0;
 i25 = i15 | 0;
 i26 = i16 | 0;
 i27 = i17 | 0;
 i28 = i17 + 4 | 0;
 i29 = i3 + 8 | 0;
 i30 = i3 + 4 | 0;
 i31 = i3 | 0;
 i32 = i6 | 0;
 i33 = i7 | 0;
 i34 = i14 | 0;
 i35 = i1 | 0;
 i1 = i13 | 0;
 i36 = i10 | 0;
 i37 = 0;
 while (1) {
  if (i37 >>> 0 >= i20 >>> 0) {
   i19 = 1;
   i38 = 85;
   break;
  }
  __ZN9Inspector18InspectorArrayBase3getEj(i8, HEAP32[i18 >> 2] | 0, i37);
  i39 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i21 >> 2] = 0;
  do {
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i39 >> 2] | 0) + 40 >> 2] & 31](i39, i9) | 0) {
    HEAP32[i22 >> 2] = 0;
    i40 = HEAP32[i21 >> 2] | 0;
    __ZN3WTF6StringC1EPKc(i12, H_BASE + 224 | 0);
    i41 = __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i40, i12, i11) | 0;
    i40 = HEAP32[i23 >> 2] | 0;
    do {
     if ((i40 | 0) != 0) {
      i42 = i40 | 0;
      i43 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
      if ((i43 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i40);
       break;
      } else {
       HEAP32[i42 >> 2] = i43;
       break;
      }
     }
    } while (0);
    L29 : do {
     if (i41) {
      __ZN9Inspector11TypeBuilder22getJSEnumConstantValueEi(i5, 0);
      i40 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i22 >> 2] | 0, HEAP32[i24 >> 2] | 0) | 0;
      i43 = HEAP32[i24 >> 2] | 0;
      do {
       if ((i43 | 0) != 0) {
        i42 = i43 | 0;
        i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         break;
        } else {
         HEAP32[i42 >> 2] = i44;
         break;
        }
       }
      } while (0);
      do {
       if (i40) {
        i45 = 0;
       } else {
        __ZN9Inspector11TypeBuilder22getJSEnumConstantValueEi(i6, 1);
        i43 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i22 >> 2] | 0, HEAP32[i32 >> 2] | 0) | 0;
        i44 = HEAP32[i32 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i42 = i44 | 0;
          i46 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
          if ((i46 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i42 >> 2] = i46;
           break;
          }
         }
        } while (0);
        if (i43) {
         i45 = 1;
         break;
        }
        __ZN9Inspector11TypeBuilder22getJSEnumConstantValueEi(i7, 2);
        i44 = __ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i22 >> 2] | 0, HEAP32[i33 >> 2] | 0) | 0;
        i46 = HEAP32[i33 >> 2] | 0;
        do {
         if ((i46 | 0) != 0) {
          i42 = i46 | 0;
          i47 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i46);
           break;
          } else {
           HEAP32[i42 >> 2] = i47;
           break;
          }
         }
        } while (0);
        if (i44) {
         i45 = 2;
         break;
        }
        __ZN3WTF6StringC1EPKc(i14, H_BASE + 144 | 0);
        i46 = HEAP32[i34 >> 2] | 0;
        HEAP32[i34 >> 2] = 0;
        i43 = HEAP32[i35 >> 2] | 0;
        HEAP32[i35 >> 2] = i46;
        do {
         if ((i43 | 0) != 0) {
          i46 = i43 | 0;
          i47 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
          if ((i47 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i43);
           break;
          } else {
           HEAP32[i46 >> 2] = i47;
           break;
          }
         }
        } while (0);
        i43 = HEAP32[i34 >> 2] | 0;
        if ((i43 | 0) == 0) {
         i48 = 1;
         break L29;
        }
        i44 = i43 | 0;
        i47 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i47 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i43);
         i48 = 1;
         break L29;
        } else {
         HEAP32[i44 >> 2] = i47;
         i48 = 1;
         break L29;
        }
       }
      } while (0);
      HEAP32[i25 >> 2] = 0;
      i40 = HEAP32[i21 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i16, H_BASE + 136 | 0);
      __ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i40, i16, i15) | 0;
      i40 = HEAP32[i26 >> 2] | 0;
      do {
       if ((i40 | 0) != 0) {
        i47 = i40 | 0;
        i44 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
        if ((i44 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i40);
         break;
        } else {
         HEAP32[i47 >> 2] = i44;
         break;
        }
       }
      } while (0);
      HEAP32[i27 >> 2] = i45;
      i40 = HEAP32[i25 >> 2] | 0;
      HEAP32[i28 >> 2] = i40;
      if ((i40 | 0) != 0) {
       i44 = i40 | 0;
       HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 2;
      }
      i44 = HEAP32[i29 >> 2] | 0;
      if ((i44 | 0) == (HEAP32[i30 >> 2] | 0)) {
       __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i3, i17);
      } else {
       i40 = HEAP32[i31 >> 2] | 0;
       HEAP32[i40 + (i44 << 3) >> 2] = HEAP32[i27 >> 2];
       i47 = HEAP32[i28 >> 2] | 0;
       HEAP32[i28 >> 2] = 0;
       HEAP32[i40 + (i44 << 3) + 4 >> 2] = i47;
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
      }
      i47 = HEAP32[i28 >> 2] | 0;
      do {
       if ((i47 | 0) != 0) {
        i44 = i47 | 0;
        i40 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i40 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i47);
         break;
        } else {
         HEAP32[i44 >> 2] = i40;
         break;
        }
       }
      } while (0);
      i47 = HEAP32[i25 >> 2] | 0;
      if ((i47 | 0) == 0) {
       i48 = 0;
       break;
      }
      i40 = i47 | 0;
      i44 = (HEAP32[i40 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i47);
       i48 = 0;
       break;
      } else {
       HEAP32[i40 >> 2] = i44;
       i48 = 0;
       break;
      }
     } else {
      __ZN3WTF6StringC1EPKc(i13, H_BASE + 184 | 0);
      i44 = HEAP32[i1 >> 2] | 0;
      HEAP32[i1 >> 2] = 0;
      i40 = HEAP32[i35 >> 2] | 0;
      HEAP32[i35 >> 2] = i44;
      do {
       if ((i40 | 0) != 0) {
        i44 = i40 | 0;
        i47 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
        if ((i47 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i40);
         break;
        } else {
         HEAP32[i44 >> 2] = i47;
         break;
        }
       }
      } while (0);
      i40 = HEAP32[i1 >> 2] | 0;
      if ((i40 | 0) == 0) {
       i48 = 1;
       break;
      }
      i47 = i40 | 0;
      i44 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i44 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i40);
       i48 = 1;
       break;
      } else {
       HEAP32[i47 >> 2] = i44;
       i48 = 1;
       break;
      }
     }
    } while (0);
    i41 = HEAP32[i22 >> 2] | 0;
    if ((i41 | 0) == 0) {
     i49 = i48;
     break;
    }
    i44 = i41 | 0;
    i47 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
    if ((i47 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i41);
     i49 = i48;
     break;
    } else {
     HEAP32[i44 >> 2] = i47;
     i49 = i48;
     break;
    }
   } else {
    __ZN3WTF6StringC1EPKc(i10, H_BASE + 232 | 0);
    i47 = HEAP32[i36 >> 2] | 0;
    HEAP32[i36 >> 2] = 0;
    i44 = HEAP32[i35 >> 2] | 0;
    HEAP32[i35 >> 2] = i47;
    do {
     if ((i44 | 0) != 0) {
      i47 = i44 | 0;
      i41 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i41 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i44);
       break;
      } else {
       HEAP32[i47 >> 2] = i41;
       break;
      }
     }
    } while (0);
    i44 = HEAP32[i36 >> 2] | 0;
    if ((i44 | 0) == 0) {
     i49 = 1;
     break;
    }
    i41 = i44 | 0;
    i47 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
    if ((i47 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i44);
     i49 = 1;
     break;
    } else {
     HEAP32[i41 >> 2] = i47;
     i49 = 1;
     break;
    }
   }
  } while (0);
  i47 = HEAP32[i21 >> 2] | 0;
  do {
   if ((i47 | 0) != 0) {
    i41 = i47 + 4 | 0;
    i44 = i41 | 0;
    i40 = (HEAP32[i44 >> 2] | 0) - 1 | 0;
    if ((i40 | 0) != 0) {
     HEAP32[i44 >> 2] = i40;
     break;
    }
    i40 = i41 - 4 | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 63](i40);
   }
  } while (0);
  do {
   if ((i39 | 0) != 0) {
    i47 = i39 + 4 | 0;
    i40 = i47 | 0;
    i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i41 | 0) != 0) {
     HEAP32[i40 >> 2] = i41;
     break;
    }
    i41 = i47 - 4 | 0;
    if ((i41 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 63](i41);
   }
  } while (0);
  if ((i49 | 0) == 1) {
   i19 = 0;
   i38 = 86;
   break;
  } else {
   i37 = i37 + 1 | 0;
  }
 }
 if ((i38 | 0) == 85) {
  STACKTOP = i4;
  return i19 | 0;
 } else if ((i38 | 0) == 86) {
  STACKTOP = i4;
  return i19 | 0;
 }
 return 0;
}
function __ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 56 | 0;
 i16 = i9 + 64 | 0;
 i17 = i9 + 72 | 0;
 i18 = i9 + 80 | 0;
 i19 = i9 + 88 | 0;
 i20 = i9 + 96 | 0;
 i21 = i9 + 104 | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 15](i14, i1, i2, i4);
 i4 = HEAP32[i14 + 12 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP32[i4 + 4 >> 2] | 0) == -6) {
    break;
   }
   i22 = i1;
   i23 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0;
   i24 = (i6 | 0) != 0;
   do {
    if (i24) {
     if ((HEAP8[i6] & 1) == 0) {
      break;
     }
     if ((i23 | 0) != 0) {
      __ZN3JSC8Debugger25setPauseOnExceptionsStateENS0_22PauseOnExceptionsStateE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 0);
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 63](i1);
    }
   } while (0);
   HEAP32[i16 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
   i25 = i16 + 4 | 0;
   HEAP32[i25 >> 2] = 0;
   i26 = i18 | 0;
   HEAP32[i26 >> 2] = 0;
   i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
   __ZN7WebCore17ScriptDebugServer9runScriptEPN3JSC9ExecStateERKN3WTF6StringEPN10Deprecated11ScriptValueEPbPS5_(i27, HEAP32[i14 + 16 >> 2] | 0, i3, i16, i17, i18);
   HEAP8[i8 | 0] = HEAP8[i17] & 1;
   HEAP8[i8 + 1 | 0] = 1;
   i27 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i27 | 0) == 0) {
     i28 = 18;
    } else {
     if ((HEAP32[i27 + 4 >> 2] | 0) == -6) {
      i28 = 18;
      break;
     }
     do {
      if ((i5 | 0) == 0) {
       __ZN3WTF6StringC1EPKc(i21, H_BASE + 1488 | 0);
       i29 = 1;
       i30 = 0;
      } else {
       i25 = HEAP32[i5 >> 2] | 0;
       HEAP32[i21 >> 2] = i25;
       if ((i25 | 0) == 0) {
        i29 = 0;
        i30 = 1;
        break;
       }
       i31 = i25 | 0;
       HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 2;
       i29 = 0;
       i30 = 1;
      }
     } while (0);
     __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i20, i14, i16, i21, 0);
     i31 = i20 | 0;
     i25 = HEAP32[i31 >> 2] | 0;
     HEAP32[i31 >> 2] = 0;
     i32 = i7 | 0;
     i33 = HEAP32[i32 >> 2] | 0;
     HEAP32[i32 >> 2] = i25;
     do {
      if ((i33 | 0) != 0) {
       i25 = i33 + 4 | 0;
       i34 = i25 | 0;
       i35 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
       if ((i35 | 0) != 0) {
        HEAP32[i34 >> 2] = i35;
        break;
       }
       i35 = i25 - 4 | 0;
       if ((i35 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 63](i35);
      }
     } while (0);
     i33 = HEAP32[i31 >> 2] | 0;
     do {
      if ((i33 | 0) != 0) {
       i35 = i33 + 4 | 0;
       i25 = i35 | 0;
       i34 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i34 | 0) != 0) {
        HEAP32[i25 >> 2] = i34;
        break;
       }
       i34 = i35 - 4 | 0;
       if ((i34 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 63](i34);
      }
     } while (0);
     do {
      if (i29) {
       i33 = HEAP32[i21 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       i31 = i33 | 0;
       i34 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
       if ((i34 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i33);
        break;
       } else {
        HEAP32[i31 >> 2] = i34;
        break;
       }
      }
     } while (0);
     do {
      if (i30) {
       i34 = HEAP32[i21 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       }
       i31 = i34 | 0;
       i33 = (HEAP32[i31 >> 2] | 0) - 2 | 0;
       if ((i33 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i34);
        break;
       } else {
        HEAP32[i31 >> 2] = i33;
        break;
       }
      }
     } while (0);
     do {
      if ((HEAP8[i17] & 1) != 0) {
       i33 = HEAP32[i32 >> 2] | 0;
       HEAP32[i13 >> 2] = H_BASE + 336;
       __ZN3WTF6StringC1ENS_12ASCIILiteralE(i12, i13);
       __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i11, i18);
       i31 = i10 | 0;
       i34 = i11 | 0;
       i35 = HEAP32[i34 >> 2] | 0;
       HEAP32[i34 >> 2] = 0;
       HEAP32[i31 >> 2] = i35;
       __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i33, i12, i10);
       i33 = HEAP32[i31 >> 2] | 0;
       do {
        if ((i33 | 0) != 0) {
         i31 = i33 + 4 | 0;
         i35 = i31 | 0;
         i25 = (HEAP32[i35 >> 2] | 0) - 1 | 0;
         if ((i25 | 0) != 0) {
          HEAP32[i35 >> 2] = i25;
          break;
         }
         i25 = i31 - 4 | 0;
         if ((i25 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 63](i25);
        }
       } while (0);
       i33 = HEAP32[i34 >> 2] | 0;
       do {
        if ((i33 | 0) != 0) {
         i25 = i33 + 4 | 0;
         i31 = i25 | 0;
         i35 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i35 | 0) != 0) {
          HEAP32[i31 >> 2] = i35;
          break;
         }
         i35 = i25 - 4 | 0;
         if ((i35 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i35 >> 2] | 0) + 4 >> 2] & 63](i35);
        }
       } while (0);
       i33 = HEAP32[i12 >> 2] | 0;
       if ((i33 | 0) == 0) {
        break;
       }
       i34 = i33 | 0;
       i35 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
       if ((i35 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i33);
        break;
       } else {
        HEAP32[i34 >> 2] = i35;
        break;
       }
      }
     } while (0);
     if (!i24) {
      break;
     }
     if ((HEAP8[i6] & 1) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 63](i1);
     if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0) == (i23 | 0)) {
      break;
     }
     __ZN3JSC8Debugger25setPauseOnExceptionsStateENS0_22PauseOnExceptionsStateE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, i23);
    }
   } while (0);
   do {
    if ((i28 | 0) == 18) {
     __ZN3WTF6StringC1EPKc(i19, H_BASE + 560 | 0);
     i23 = i19 | 0;
     i22 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i24 = i2 | 0;
     i27 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i22;
     do {
      if ((i27 | 0) != 0) {
       i22 = i27 | 0;
       i24 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i24 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i27);
        break;
       } else {
        HEAP32[i22 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i27 = HEAP32[i23 >> 2] | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     i24 = i27 | 0;
     i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i27);
      break;
     } else {
      HEAP32[i24 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i22 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i22 | 0) != 0) {
     i24 = i22 | 0;
     i27 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i27 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i22);
      break;
     } else {
      HEAP32[i24 >> 2] = i27;
      break;
     }
    }
   } while (0);
   __ZN10Deprecated11ScriptValueD1Ev(i16);
   __ZN9Inspector14InjectedScriptD1Ev(i14);
   STACKTOP = i9;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i15, H_BASE + 616 | 0);
 i16 = i15 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 i19 = i2 | 0;
 i2 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = i15;
 do {
  if ((i2 | 0) != 0) {
   i15 = i2 | 0;
   i19 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i19 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i15 >> 2] = i19;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i14);
  STACKTOP = i9;
  return;
 }
 i16 = i2 | 0;
 i19 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
 if ((i19 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i14);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i16 >> 2] = i19;
  __ZN9Inspector14InjectedScriptD1Ev(i14);
  STACKTOP = i9;
  return;
 }
}
function __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 if (i9) {
  i10 = 2;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 2 | 0;
 }
 i11 = i2 + 8 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 if (i13) {
  i14 = 0;
 } else {
  i14 = HEAP32[i12 + 4 >> 2] | 0;
 }
 i15 = i3 | 0;
 i3 = HEAP32[i15 >> 2] | 0;
 i16 = (i3 | 0) == 0;
 if (i16) {
  i17 = 0;
 } else {
  i17 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i18 = _llvm_uadd_with_overflow_i32(i14 + i10 | 0, i17 | 0) | 0;
 i17 = i18;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i19 = 11;
 } else {
  if ((HEAP32[i8 + 16 >> 2] & 32 | 0) != 0) {
   i19 = 11;
  }
 }
 do {
  if ((i19 | 0) == 11) {
   if (!i13) {
    if ((HEAP32[i12 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   if (!i16) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i17 | 0) == 0) {
     i8 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i8 | 0) == 0) {
      i19 = 44;
      break;
     }
     i9 = i8 | 0;
     HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
     i20 = i8;
     i21 = 0;
    } else {
     if (i17 >>> 0 > 4294967275 >>> 0) {
      i19 = 44;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i17 + 20 | 0);
     i8 = i6 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) == 0) {
      i19 = 44;
      break;
     }
     i8 = i9 + 20 | 0;
     HEAP32[i9 >> 2] = 2;
     HEAP32[i9 + 4 >> 2] = i17;
     HEAP32[i9 + 8 >> 2] = i8;
     HEAP32[i9 + 12 >> 2] = 0;
     HEAP32[i9 + 16 >> 2] = 32;
     i20 = i9;
     i21 = i8;
    }
   } while (0);
   if ((i19 | 0) == 44) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i8 = HEAP8[i2 + 12 | 0] | 0;
   i9 = HEAP8[i2 + 4 | 0] | 0;
   i18 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     i22 = 0;
    } else {
     i10 = HEAP32[i18 + 4 >> 2] | 0;
     i14 = HEAP32[i18 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i22 = 0;
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP8[i21 + i23 | 0] = HEAP8[i14 + i23 | 0] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i10 >>> 0) {
       break;
      }
     }
     i10 = HEAP32[i7 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i22 = 0;
      break;
     }
     i22 = HEAP32[i10 + 4 >> 2] | 0;
    }
   } while (0);
   HEAP8[i21 + i22 | 0] = i9;
   i18 = HEAP32[i7 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i24 = 1;
   } else {
    i24 = (HEAP32[i18 + 4 >> 2] | 0) + 1 | 0;
   }
   i10 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i10 | 0) == 0) {
     i25 = i18;
    } else {
     i14 = HEAP32[i10 + 4 >> 2] | 0;
     i26 = HEAP32[i10 + 8 >> 2] | 0;
     if ((i14 | 0) == 0) {
      i25 = i18;
      break;
     } else {
      i27 = 0;
     }
     while (1) {
      HEAP8[i21 + (i27 + i24) | 0] = HEAP8[i26 + i27 | 0] | 0;
      i27 = i27 + 1 | 0;
      if (i27 >>> 0 >= i14 >>> 0) {
       break;
      }
     }
     i25 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   if ((i25 | 0) == 0) {
    i28 = 1;
   } else {
    i28 = (HEAP32[i25 + 4 >> 2] | 0) + 1 | 0;
   }
   i18 = HEAP32[i11 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = HEAP32[i18 + 4 >> 2] | 0;
   }
   HEAP8[i21 + (i29 + i28) | 0] = i8;
   i18 = HEAP32[i7 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i30 = 2;
   } else {
    i30 = (HEAP32[i18 + 4 >> 2] | 0) + 2 | 0;
   }
   i18 = HEAP32[i11 >> 2] | 0;
   if ((i18 | 0) == 0) {
    i31 = 0;
   } else {
    i31 = HEAP32[i18 + 4 >> 2] | 0;
   }
   i18 = i31 + i30 | 0;
   i10 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i10 | 0) != 0) {
     i9 = HEAP32[i10 + 4 >> 2] | 0;
     i14 = HEAP32[i10 + 8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     } else {
      i32 = 0;
     }
     while (1) {
      HEAP8[i21 + (i18 + i32) | 0] = HEAP8[i14 + i32 | 0] | 0;
      i32 = i32 + 1 | 0;
      if (i32 >>> 0 >= i9 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i20;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i17 | 0) == 0) {
   i20 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i20 | 0) == 0) {
    i19 = 66;
    break;
   }
   i32 = i20 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 2;
   i33 = i20;
   i34 = 0;
  } else {
   if (i17 >>> 0 > 2147483637 >>> 0) {
    i19 = 66;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i17 << 1) + 20 | 0);
   i20 = i5 | 0;
   i32 = HEAP32[i20 >> 2] | 0;
   HEAP32[i20 >> 2] = 0;
   if ((i32 | 0) == 0) {
    i19 = 66;
    break;
   }
   i20 = i32 + 20 | 0;
   HEAP32[i32 >> 2] = 2;
   HEAP32[i32 + 4 >> 2] = i17;
   HEAP32[i32 + 8 >> 2] = i20;
   HEAP32[i32 + 12 >> 2] = 0;
   HEAP32[i32 + 16 >> 2] = 0;
   i33 = i32;
   i34 = i20;
  }
 } while (0);
 if ((i19 | 0) == 66) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i19 = HEAP8[i2 + 12 | 0] | 0;
 __ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt(i2 | 0, i34);
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i35 = 1;
 } else {
  i35 = (HEAP32[i2 + 4 >> 2] | 0) + 1 | 0;
 }
 i2 = HEAP32[i11 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i36 = 0;
 } else {
  i36 = HEAP32[i2 + 4 >> 2] | 0;
 }
 HEAP16[i34 + (i36 + i35 << 1) >> 1] = i19 & 255;
 i19 = HEAP32[i7 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i37 = 2;
 } else {
  i37 = (HEAP32[i19 + 4 >> 2] | 0) + 2 | 0;
 }
 i19 = HEAP32[i11 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i38 = 0;
 } else {
  i38 = HEAP32[i19 + 4 >> 2] | 0;
 }
 i19 = i38 + i37 | 0;
 i37 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i37 | 0) != 0) {
   i15 = HEAP32[i37 + 4 >> 2] | 0;
   if ((HEAP32[i37 + 16 >> 2] & 32 | 0) == 0) {
    i38 = HEAP32[i37 + 8 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i39 = 0;
    }
    while (1) {
     HEAP16[i34 + (i39 + i19 << 1) >> 1] = HEAP16[i38 + (i39 << 1) >> 1] | 0;
     i39 = i39 + 1 | 0;
     if (i39 >>> 0 >= i15 >>> 0) {
      break;
     }
    }
   } else {
    i38 = HEAP32[i37 + 8 >> 2] | 0;
    if ((i15 | 0) == 0) {
     break;
    } else {
     i40 = 0;
    }
    while (1) {
     HEAP16[i34 + (i40 + i19 << 1) >> 1] = HEAPU8[i38 + i40 | 0] | 0;
     i40 = i40 + 1 | 0;
     if (i40 >>> 0 >= i15 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i33;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 24 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 48 | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 15](i8, i1, i2, 0);
 i13 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   if ((HEAP32[i13 + 4 >> 2] | 0) == -6) {
    break;
   }
   i14 = i10 | 0;
   HEAP32[i14 >> 2] = 0;
   i15 = i11 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
   __ZN7WebCore17ScriptDebugServer13compileScriptEPN3JSC9ExecStateERKN3WTF6StringES7_PS5_S8_(i16, HEAP32[i8 + 16 >> 2] | 0, i3, i4, i10, i11);
   i16 = HEAP32[i15 >> 2] | 0;
   i17 = (i16 | 0) == 0;
   do {
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     if (!i17) {
      i18 = i16 | 0;
      i19 = (HEAP32[i18 >> 2] | 0) + 2 | 0;
      HEAP32[i18 >> 2] = i19;
      i20 = i19;
      i21 = 24;
      break;
     }
     __ZN3WTF6StringC1EPKc(i12, H_BASE + 584 | 0);
     i19 = i12 | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     i22 = i2 | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     HEAP32[i22 >> 2] = i18;
     do {
      if ((i23 | 0) != 0) {
       i18 = i23 | 0;
       i22 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i22 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i23);
        break;
       } else {
        HEAP32[i18 >> 2] = i22;
        break;
       }
      }
     } while (0);
     i23 = HEAP32[i19 >> 2] | 0;
     if ((i23 | 0) == 0) {
      break;
     }
     i22 = i23 | 0;
     i18 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i18 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i23);
      break;
     } else {
      HEAP32[i22 >> 2] = i18;
      break;
     }
    } else {
     if (i17) {
      i24 = 1;
      i25 = 0;
      i21 = 25;
      break;
     }
     i18 = i16 | 0;
     i22 = (HEAP32[i18 >> 2] | 0) + 2 | 0;
     HEAP32[i18 >> 2] = i22;
     i20 = i22;
     i21 = 24;
    }
   } while (0);
   if ((i21 | 0) == 24) {
    HEAP32[i16 >> 2] = i20 + 2;
    i24 = 0;
    i25 = i16;
    i21 = 25;
   }
   do {
    if ((i21 | 0) == 25) {
     i17 = i6 | 0;
     i22 = HEAP32[i17 >> 2] | 0;
     HEAP32[i17 >> 2] = i25;
     do {
      if ((i22 | 0) != 0) {
       i17 = i22 | 0;
       i18 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
       if ((i18 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i22);
        break;
       } else {
        HEAP32[i17 >> 2] = i18;
        break;
       }
      }
     } while (0);
     HEAP8[i6 + 4 | 0] = 1;
     do {
      if (!i24) {
       i22 = i25 | 0;
       i19 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
       if ((i19 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i25);
        break;
       } else {
        HEAP32[i22 >> 2] = i19;
        break;
       }
      }
     } while (0);
     i19 = HEAP32[i14 >> 2] | 0;
     i22 = (i19 | 0) == 0;
     if (!i22) {
      i18 = i19 | 0;
      HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 4;
     }
     i18 = i5 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i19;
     do {
      if ((i17 | 0) != 0) {
       i18 = i17 | 0;
       i23 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
       if ((i23 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i17);
        break;
       } else {
        HEAP32[i18 >> 2] = i23;
        break;
       }
      }
     } while (0);
     HEAP8[i5 + 4 | 0] = 1;
     if (i22) {
      break;
     }
     i17 = i19 | 0;
     i23 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i23 = i16 | 0;
     i17 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i16);
      break;
     } else {
      HEAP32[i23 >> 2] = i17;
      break;
     }
    }
   } while (0);
   i16 = HEAP32[i14 >> 2] | 0;
   if ((i16 | 0) == 0) {
    __ZN9Inspector14InjectedScriptD1Ev(i8);
    STACKTOP = i7;
    return;
   }
   i15 = i16 | 0;
   i17 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i16);
    __ZN9Inspector14InjectedScriptD1Ev(i8);
    STACKTOP = i7;
    return;
   } else {
    HEAP32[i15 >> 2] = i17;
    __ZN9Inspector14InjectedScriptD1Ev(i8);
    STACKTOP = i7;
    return;
   }
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 616 | 0);
 i5 = i9 | 0;
 i9 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i25 = i2 | 0;
 i2 = HEAP32[i25 >> 2] | 0;
 HEAP32[i25 >> 2] = i9;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i25 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i25;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i8);
  STACKTOP = i7;
  return;
 }
 i5 = i2 | 0;
 i25 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i25 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i8);
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i5 >> 2] = i25;
  __ZN9Inspector14InjectedScriptD1Ev(i8);
  STACKTOP = i7;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiiiiiiii + 4;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiiiii + 10;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_viiiiiii + 4;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_viiiiiii + 6;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_viiiiiiiiiii + 2;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_viiiiii + 12;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_viiiiii + 4;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_viiiiii + 6;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_viiiiiii + 2;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_viiiiiii + 8;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_viiiiiiiiiii + 4;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_viiiiii + 8;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_viiiiiiii + 4;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1464 >> 2] = H_BASE + 856;
}
function __ZN7WebCore22InspectorDebuggerAgent21sourceMapURLForScriptERKNS_19ScriptDebugListener6ScriptE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 80 | 0;
 i11 = i4 + 88 | 0;
 i12 = i4 + 96 | 0;
 i13 = i4 + 104 | 0;
 if (!(HEAP8[H_BASE + 1480 | 0] | 0)) {
  i14 = __Znwj(4) | 0;
  HEAP32[i7 >> 2] = H_BASE + 480;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i7);
  HEAP32[H_BASE + 1504 >> 2] = i14;
  HEAP8[H_BASE + 1480 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 1472 | 0] | 0)) {
  i14 = __Znwj(4) | 0;
  HEAP32[i8 >> 2] = H_BASE + 464;
  __ZN3WTF6StringC1ENS_12ASCIILiteralE(i14, i8);
  HEAP32[H_BASE + 1496 >> 2] = i14;
  HEAP8[H_BASE + 1472 | 0] = 1;
 }
 i14 = i3 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 4 >> 2] | 0) == 0) {
    break;
   }
   i7 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i15 = __ZN7WebCore18InspectorPageAgent9mainFrameEv(i7) | 0;
   __ZN7WebCore3URLC1ENS_18ParsedURLStringTagERKN3WTF6StringE(i9, 0, i14);
   i7 = __ZN7WebCore18InspectorPageAgent14cachedResourceEPNS_5FrameERKNS_3URLE(i15, i9) | 0;
   i15 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i15 | 0) != 0) {
     i16 = i15 | 0;
     i17 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
     if ((i17 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i16 >> 2] = i17;
      break;
     }
    }
   } while (0);
   if ((i7 | 0) == 0) {
    break;
   }
   i15 = i7 + 272 | 0;
   i17 = HEAP32[HEAP32[H_BASE + 1504 >> 2] >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i16 = i5 | 0;
     HEAP32[i16 >> 2] = 0;
     i18 = i16;
    } else {
     if ((HEAP32[i17 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i5, i17);
      i18 = i5 | 0;
      break;
     } else {
      i16 = i5 | 0;
      HEAP32[i16 >> 2] = i17;
      i19 = i17 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
      i18 = i16;
      break;
     }
    }
   } while (0);
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldERKN3WTF12AtomicStringE(i10, i15, i11);
   i7 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i7 | 0) != 0) {
     i17 = i7 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i7 = i10 | 0;
   i16 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     if ((HEAP32[i16 + 4 >> 2] | 0) == 0) {
      break;
     }
     HEAP32[i7 >> 2] = 0;
     HEAP32[i1 >> 2] = i16;
     STACKTOP = i4;
     return;
    }
   } while (0);
   i16 = HEAP32[HEAP32[H_BASE + 1496 >> 2] >> 2] | 0;
   do {
    if ((i16 | 0) == 0) {
     i17 = i6 | 0;
     HEAP32[i17 >> 2] = 0;
     i20 = i17;
    } else {
     if ((HEAP32[i16 + 16 >> 2] & 16 | 0) == 0) {
      __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i6, i16);
      i20 = i6 | 0;
      break;
     } else {
      i17 = i6 | 0;
      HEAP32[i17 >> 2] = i16;
      i19 = i16 | 0;
      HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
      i20 = i17;
      break;
     }
    }
   } while (0);
   i16 = i13 | 0;
   HEAP32[i16 >> 2] = HEAP32[i20 >> 2];
   __ZNK7WebCore20ResourceResponseBase15httpHeaderFieldERKN3WTF12AtomicStringE(i12, i15, i13);
   i17 = i12 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   i21 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i19;
   do {
    if ((i21 | 0) != 0) {
     i19 = i21 | 0;
     i22 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i19 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i15 = i21 | 0;
     i22 = (HEAP32[i15 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i15 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i21 | 0) != 0) {
     i17 = i21 | 0;
     i22 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i21);
      break;
     } else {
      HEAP32[i17 >> 2] = i22;
      break;
     }
    }
   } while (0);
   i21 = HEAP32[i7 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   if ((HEAP32[i21 + 4 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i1 >> 2] = i21;
    STACKTOP = i4;
    return;
   }
   i16 = i21 | 0;
   i22 = (HEAP32[i16 >> 2] | 0) - 2 | 0;
   if ((i22 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i21);
    break;
   } else {
    HEAP32[i16 >> 2] = i22;
    break;
   }
  }
 } while (0);
 __ZN7WebCore18ContentSearchUtils22findScriptSourceMapURLERKN3WTF6StringE(i1, i3 + 4 | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i13 = i12 | 0;
 i14 = i12 + 24 | 0;
 i15 = i12 + 32 | 0;
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i13, HEAP32[i1 + 20 >> 2] | 0, i3);
 i16 = HEAP32[i13 + 12 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   if ((HEAP32[i16 + 4 >> 2] | 0) == -6) {
    break;
   }
   i17 = i1;
   i18 = HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0;
   i19 = (i7 | 0) != 0;
   do {
    if (i19) {
     if ((HEAP8[i7] & 1) == 0) {
      break;
     }
     if ((i18 | 0) != 0) {
      __ZN3JSC8Debugger25setPauseOnExceptionsStateENS0_22PauseOnExceptionsStateE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 0);
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 128 >> 2] & 63](i1);
    }
   } while (0);
   i20 = i1 + 36 | 0;
   do {
    if ((i5 | 0) == 0) {
     __ZN3WTF6StringC1EPKc(i15, H_BASE + 1488 | 0);
     i21 = 1;
     i22 = 0;
    } else {
     i23 = HEAP32[i5 >> 2] | 0;
     HEAP32[i15 >> 2] = i23;
     if ((i23 | 0) == 0) {
      i21 = 0;
      i22 = 1;
      break;
     }
     i24 = i23 | 0;
     HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 2;
     i21 = 0;
     i22 = 1;
    }
   } while (0);
   if ((i6 | 0) == 0) {
    i25 = 0;
   } else {
    i25 = (HEAP8[i6] & 1) != 0;
   }
   if ((i8 | 0) == 0) {
    i26 = 0;
   } else {
    i26 = (HEAP8[i8] & 1) != 0;
   }
   if ((i9 | 0) == 0) {
    i27 = 0;
   } else {
    i27 = (HEAP8[i9] & 1) != 0;
   }
   __ZN9Inspector14InjectedScript19evaluateOnCallFrameEPN3WTF6StringERKN10Deprecated11ScriptValueERKS2_S9_S9_bbbPNS1_6RefPtrINS_11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i13, i2, i20, i3, i4, i15, i25, i26, i27, i10, i11);
   do {
    if (i21) {
     i24 = HEAP32[i15 >> 2] | 0;
     if ((i24 | 0) == 0) {
      break;
     }
     i23 = i24 | 0;
     i28 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
     if ((i28 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i23 >> 2] = i28;
      break;
     }
    }
   } while (0);
   do {
    if (i22) {
     i20 = HEAP32[i15 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i28 = i20 | 0;
     i23 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
     if ((i23 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i20);
      break;
     } else {
      HEAP32[i28 >> 2] = i23;
      break;
     }
    }
   } while (0);
   if (!i19) {
    __ZN9Inspector14InjectedScriptD1Ev(i13);
    STACKTOP = i12;
    return;
   }
   if ((HEAP8[i7] & 1) == 0) {
    __ZN9Inspector14InjectedScriptD1Ev(i13);
    STACKTOP = i12;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 132 >> 2] & 63](i1);
   if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0) == (i18 | 0)) {
    __ZN9Inspector14InjectedScriptD1Ev(i13);
    STACKTOP = i12;
    return;
   }
   __ZN3JSC8Debugger25setPauseOnExceptionsStateENS0_22PauseOnExceptionsStateE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, i18);
   __ZN9Inspector14InjectedScriptD1Ev(i13);
   STACKTOP = i12;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i14, H_BASE + 616 | 0);
 i1 = i14 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i14;
 do {
  if ((i2 | 0) != 0) {
   i14 = i2 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i13);
  STACKTOP = i12;
  return;
 }
 i1 = i2 | 0;
 i7 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i13);
  STACKTOP = i12;
  return;
 } else {
  HEAP32[i1 >> 2] = i7;
  __ZN9Inspector14InjectedScriptD1Ev(i13);
  STACKTOP = i12;
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
function __ZN7WebCoreL13parseLocationEPN3WTF6StringEPN9Inspector15InspectorObjectEPjS6_S6_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i9 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i2 | 0;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 352 | 0);
 do {
  if (__ZNK9Inspector19InspectorObjectBase9getStringERKN3WTF6StringEPS2_(i15, i10, i9) | 0) {
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 432 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i8, i15, i11);
   i2 = i8 | 0;
   i16 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   do {
    if ((i16 | 0) == 0) {
     i17 = 0;
    } else {
     i2 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i16 >> 2] | 0) + 28 >> 2] & 31](i16, i4) | 0;
     i18 = i16 + 4 | 0;
     i19 = i18 | 0;
     i20 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i19 >> 2] = i20;
      i17 = i2;
      break;
     }
     i20 = i18 - 4 | 0;
     if ((i20 | 0) == 0) {
      i17 = i2;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
     i17 = i2;
    }
   } while (0);
   i16 = i17 ^ 1;
   i2 = HEAP32[i11 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i21 = i16;
    break;
   }
   i20 = i2 | 0;
   i18 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
   if ((i18 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    i21 = i16;
    break;
   } else {
    HEAP32[i20 >> 2] = i18;
    i21 = i16;
    break;
   }
  } else {
   i21 = 1;
  }
 } while (0);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    break;
   }
  }
 } while (0);
 do {
  if (i21) {
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF6StringC1EPKc(i12, H_BASE + 288 | 0);
   i11 = i12 | 0;
   i17 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i10 = i1 | 0;
   i4 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i17;
   do {
    if ((i4 | 0) != 0) {
     i17 = i4 | 0;
     i10 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i4);
      break;
     } else {
      HEAP32[i17 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i4 = HEAP32[i11 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i22 = 0;
    break;
   }
   i10 = i4 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    i22 = 0;
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    i22 = 0;
    break;
   }
  } else {
   HEAP32[i3 >> 2] = __ZNK3WTF6String8toIntPtrEPb(i9, 0) | 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF6StringC1EPKc(i13, H_BASE + 416 | 0);
   __ZNK9Inspector19InspectorObjectBase3getERKN3WTF6StringE(i7, i15, i13);
   i17 = i7 | 0;
   i10 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   do {
    if ((i10 | 0) != 0) {
     FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 28 >> 2] & 31](i10, i5) | 0;
     i17 = i10 + 4 | 0;
     i4 = i17 | 0;
     i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i4 >> 2] = i8;
      break;
     }
     i8 = i17 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
    }
   } while (0);
   i10 = HEAP32[i13 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i22 = 1;
    break;
   }
   i11 = i10 | 0;
   i8 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    i22 = 1;
    break;
   } else {
    HEAP32[i11 >> 2] = i8;
    i22 = 1;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i14 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i6;
  return i22 | 0;
 }
 i14 = i13 | 0;
 i5 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i13);
  STACKTOP = i6;
  return i22 | 0;
 } else {
  HEAP32[i14 >> 2] = i5;
  STACKTOP = i6;
  return i22 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
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
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
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
     i25 = 9;
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
   if ((i25 | 0) == 9) {
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
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i13 = i10 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i13;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
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
      i3 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i3 | 0) != 0) {
       HEAP32[i27 >> 2] = i3;
       break;
      }
      i3 = i10 - 4 | 0;
      if ((i3 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
     }
    } while (0);
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i3 = i11 | 0;
    i10 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i10 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i11);
     break;
    } else {
     HEAP32[i3 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i1 = i28 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
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
function __ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_(i1, i2, i3, i4) {
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
 HEAP32[i1 + 32 >> 2] = i2;
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1 + 40 | 0, i3 + 4 | 0) | 0;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP32[i3 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i6, HEAP32[i1 + 20 >> 2] | 0, i2);
   i11 = HEAP32[i6 + 12 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
      break;
     }
     HEAP32[i1 + 108 >> 2] = 26;
     __ZN3WTF6StringC1EPKc(i8, H_BASE + 856 | 0);
     __ZNK9Inspector14InjectedScript10wrapObjectERKN10Deprecated11ScriptValueERKN3WTF6StringEb(i7, i6, i4, i8, 0);
     i12 = i7 | 0;
     i13 = __ZN9Inspector19InspectorObjectBase13openAccessorsEv(HEAP32[i12 >> 2] | 0) | 0;
     if ((i13 | 0) != 0) {
      i14 = i13 + 4 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
     i14 = i1 + 112 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i13;
     do {
      if ((i15 | 0) != 0) {
       i13 = i15 + 4 | 0;
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
     i15 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i15 | 0) != 0) {
       i16 = i15 + 4 | 0;
       i13 = i16 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) != 0) {
        HEAP32[i13 >> 2] = i14;
        break;
       }
       i14 = i16 - 4 | 0;
       if ((i14 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
      }
     } while (0);
     i15 = HEAP32[i8 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i12 = i15 | 0;
     i14 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i15);
      break;
     } else {
      HEAP32[i12 >> 2] = i14;
      break;
     }
    }
   } while (0);
   __ZN9Inspector14InjectedScriptD1Ev(i6);
  }
 } while (0);
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 __ZN7WebCore22InspectorDebuggerAgent17currentCallFramesEv(i9, i1);
 i8 = HEAP32[i1 + 108 >> 2] | 0;
 i7 = i10 | 0;
 i4 = HEAP32[i1 + 112 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i2 = i4 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 }
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher6pausedEN3WTF10PassRefPtrINS_11TypeBuilder5ArrayINS3_8Debugger9CallFrameEEEEENS0_6Reason4EnumENS2_INS_15InspectorObjectEEE(i6, i9, i8, i10);
 i10 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i7 = i10 + 4 | 0;
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
 i10 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i9 = i10 + 4 | 0;
   i6 = i9 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i9 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 HEAP8[i1 + 117 | 0] = 0;
 i10 = i1 + 104 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
  __ZN7WebCore17ScriptDebugServer16removeBreakpointEj(i7, HEAP32[i10 >> 2] | 0);
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 63](i10);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 24 | 0;
 i12 = i8 + 32 | 0;
 i13 = i8 + 40 | 0;
 if ((i5 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAP8[i5] & 1) != 0;
 }
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i10 >> 2] = H_BASE + 1448;
 i5 = i10 + 8 | 0;
 HEAP32[i5 >> 2] = 0;
 if (!(__ZN7WebCore17ScriptDebugServer15setScriptSourceERKN3WTF6StringES4_bPS2_PN10Deprecated11ScriptValueEPNS6_12ScriptObjectE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, i3, i4, i14, i2, i1 + 36 | 0, i10) | 0)) {
  i15 = i10 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i15);
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore22InspectorDebuggerAgent17currentCallFramesEv(i11, i1);
 i1 = i11 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i2 = i6 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i11;
 do {
  if ((i6 | 0) != 0) {
   i11 = i6 + 4 | 0;
   i2 = i11 | 0;
   i14 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i2 >> 2] = i14;
    break;
   }
   i14 = i11 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
  }
 } while (0);
 i6 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i1 = i6 + 4 | 0;
   i14 = i1 | 0;
   i11 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i14 >> 2] = i11;
    break;
   }
   i11 = i1 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i6 = i13 | 0;
 HEAP32[i6 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i13 + 4 | 0, i10 + 4 | 0);
 HEAP32[i6 >> 2] = H_BASE + 1448;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i13 + 8 >> 2] = i6;
 i5 = i13 | 0;
 i11 = HEAP32[i13 + 4 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i16 = 16;
  } else {
   if ((HEAP32[i11 + 4 >> 2] | 0) == -6) {
    i16 = 16;
    break;
   }
   __ZNK10Deprecated11ScriptValue16toInspectorValueEPN3JSC9ExecStateE(i9, i5, i6);
   i13 = i9 | 0;
   i1 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i1 | 0) == 0) {
    HEAP32[i12 >> 2] = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 63](i12, i1);
   i13 = i1 + 4 | 0;
   i1 = i13 | 0;
   i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i14 | 0) != 0) {
    HEAP32[i1 >> 2] = i14;
    break;
   }
   i14 = i13 - 4 | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
  }
 } while (0);
 if ((i16 | 0) == 16) {
  HEAP32[i12 >> 2] = 0;
 }
 i16 = i12 | 0;
 i12 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 __ZN10Deprecated11ScriptValueD2Ev(i5);
 if ((i12 | 0) == 0) {
  i15 = i10 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i15);
  STACKTOP = i8;
  return;
 }
 i5 = i12 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i7 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i12;
 do {
  if ((i7 | 0) != 0) {
   i5 = i7 + 4 | 0;
   i16 = i5 | 0;
   i9 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i16 >> 2] = i9;
    break;
   }
   i9 = i5 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
  }
 } while (0);
 i7 = i12 + 4 | 0;
 i12 = i7 | 0;
 i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i12 >> 2] = i9;
  i15 = i10 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i15);
  STACKTOP = i8;
  return;
 }
 i9 = i7 - 4 | 0;
 if ((i9 | 0) == 0) {
  i15 = i10 | 0;
  __ZN10Deprecated11ScriptValueD2Ev(i15);
  STACKTOP = i8;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
 i15 = i10 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i15);
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
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i1, i2, i3) {
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
 i8 = __ZN3WTF10fastMallocEj(i2 * 40 & -1) | 0;
 if ((i2 | 0) > 0) {
  i9 = 0;
  while (1) {
   _memset(i8 + (i9 * 40 & -1) | 0, 0, 37) | 0;
   i9 = i9 + 1 | 0;
   if ((i9 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i8;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i10 = 0;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 } else {
  i12 = 0;
  i13 = 0;
 }
 while (1) {
  i8 = i7 + (i12 * 40 & -1) | 0;
  i2 = i8 | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  if ((i9 | 0) == (-1 | 0) | (i9 | 0) == 0) {
   i14 = i13;
  } else {
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = i9 + ~(i9 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 * 40 & -1) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L12 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 8;
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
      if ((i29 | 0) == (i9 | 0)) {
       i30 = i28;
       break L12;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 * 40 & -1) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 8;
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
   if ((i23 | 0) == 8) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i30 + 4 | 0);
   HEAP32[i30 >> 2] = HEAP32[i2 >> 2];
   i15 = i7 + (i12 * 40 & -1) + 4 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i30 + 4 >> 2] = i16;
   i16 = i7 + (i12 * 40 & -1) + 8 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i30 + 8 >> 2] = i15;
   i15 = i7 + (i12 * 40 & -1) + 12 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i30 + 12 >> 2] = i16;
   i16 = i7 + (i12 * 40 & -1) + 16 | 0;
   i15 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[i30 + 16 >> 2] = i15;
   HEAP32[i30 + 20 >> 2] = HEAP32[i7 + (i12 * 40 & -1) + 20 >> 2];
   HEAP32[i30 + 24 >> 2] = HEAP32[i7 + (i12 * 40 & -1) + 24 >> 2];
   HEAP32[i30 + 28 >> 2] = HEAP32[i7 + (i12 * 40 & -1) + 28 >> 2];
   HEAP32[i30 + 32 >> 2] = HEAP32[i7 + (i12 * 40 & -1) + 32 >> 2];
   HEAP8[i30 + 36 | 0] = HEAP8[i7 + (i12 * 40 & -1) + 36 | 0] & 1;
   i14 = (i8 | 0) == (i3 | 0) ? i30 : i13;
  }
  i15 = i12 + 1 | 0;
  if ((i15 | 0) == (i5 | 0)) {
   break;
  } else {
   i12 = i15;
   i13 = i14;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i10 = i14;
  i11 = i7;
  __ZN3WTF8fastFreeEPv(i11);
  return i10 | 0;
 }
 while (1) {
  if ((HEAP32[i7 + (i36 * 40 & -1) >> 2] | 0) != -1) {
   __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i7 + (i36 * 40 & -1) + 4 | 0);
  }
  i1 = i36 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i36 = i1;
  } else {
   i10 = i14;
   break;
  }
 }
 i11 = i7;
 __ZN3WTF8fastFreeEPv(i11);
 return i10 | 0;
}
function __ZN7WebCore22InspectorDebuggerAgentD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1080;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1252;
 HEAP32[i1 + 16 >> 2] = H_BASE + 1284;
 i3 = HEAP32[i1 + 112 >> 2] | 0;
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
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 + 4 | 0;
        i9 = i8 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
        if ((i10 | 0) != 0) {
         HEAP32[i9 >> 2] = i10;
         break;
        }
        i10 = i8 - 4 | 0;
        if ((i10 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
       }
      } while (0);
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i10 = i7 | 0;
      i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 4) | 0;
    i8 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i8 | 0) != -1) {
      i10 = i3 + (i4 << 4) + 12 | 0;
      if ((HEAP32[i10 >> 2] | 0) != 0) {
       HEAP32[i10 >> 2] = 0;
      }
      i10 = i3 + (i4 << 4) + 4 | 0;
      i7 = HEAP32[i10 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i11 = i8;
      } else {
       HEAP32[i10 >> 2] = 0;
       HEAP32[i3 + (i4 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
       i11 = HEAP32[i5 >> 2] | 0;
      }
      if ((i11 | 0) == 0) {
       break;
      }
      i7 = i11 | 0;
      i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i7 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    if ((HEAP32[i3 + (i4 * 40 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i3 + (i4 * 40 & -1) + 4 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN10Deprecated11ScriptValueD1Ev(i1 + 36 | 0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i4 = i6 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i6 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i11 | 0) != 0) {
  __ZdlPv(i11);
 }
 __ZN9Inspector41InspectorDebuggerBackendDispatcherHandlerD2Ev(i1 + 16 | 0);
 HEAP32[i2 >> 2] = H_BASE + 880;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i11;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 1080;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1252;
 HEAP32[i1 + 16 >> 2] = H_BASE + 1284;
 i3 = HEAP32[i1 + 112 >> 2] | 0;
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
 i3 = HEAP32[i1 + 84 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 3) | 0;
    do {
     if ((HEAP32[i5 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i4 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 + 4 | 0;
        i9 = i8 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
        if ((i10 | 0) != 0) {
         HEAP32[i9 >> 2] = i10;
         break;
        }
        i10 = i8 - 4 | 0;
        if ((i10 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
       }
      } while (0);
      i7 = HEAP32[i5 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i10 = i7 | 0;
      i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i8;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 64 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    i5 = i3 + (i4 << 4) | 0;
    i8 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i8 | 0) != -1) {
      i10 = i3 + (i4 << 4) + 12 | 0;
      if ((HEAP32[i10 >> 2] | 0) != 0) {
       HEAP32[i10 >> 2] = 0;
      }
      i10 = i3 + (i4 << 4) + 4 | 0;
      i7 = HEAP32[i10 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i11 = i8;
      } else {
       HEAP32[i10 >> 2] = 0;
       HEAP32[i3 + (i4 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i7);
       i11 = HEAP32[i5 >> 2] | 0;
      }
      if ((i11 | 0) == 0) {
       break;
      }
      i7 = i11 | 0;
      i10 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i11);
       break;
      } else {
       HEAP32[i7 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i4 = 0;
   while (1) {
    if ((HEAP32[i3 + (i4 * 40 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i3 + (i4 * 40 & -1) + 4 | 0);
    }
    i4 = i4 + 1 | 0;
    if ((i4 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN10Deprecated11ScriptValueD1Ev(i1 + 36 | 0);
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i6 = i3 + 4 | 0;
   i4 = i6 | 0;
   i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i11 | 0) != 0) {
    HEAP32[i4 >> 2] = i11;
    break;
   }
   i11 = i6 - 4 | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
  }
 } while (0);
 i3 = i1 + 24 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i11 | 0) != 0) {
  __ZdlPv(i11);
 }
 __ZN9Inspector41InspectorDebuggerBackendDispatcherHandlerD2Ev(i1 + 16 | 0);
 HEAP32[i2 >> 2] = H_BASE + 880;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i11 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i11 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i11;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_NS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 3) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
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
  if ((i4 | 0) == 0) {
   i21 = 8;
  } else {
   i13 = i4 << 1;
   i21 = (i9 * 6 & -1 | 0) < (i13 | 0) ? i4 : i13;
  }
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i2, i21, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i8 >> 2] | 0;
 }
 i8 = (HEAP32[i5 >> 2] | 0) + (i20 << 3) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i8;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i3 + 16 >> 2] | 0;
 if (i9 >>> 0 > 127 >>> 0) {
  i11 = i9 >>> 7;
 } else {
  i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i3) | 0;
 }
 i3 = (i11 >>> 23) + ~i11 | 0;
 i9 = i3 << 12 ^ i3;
 i3 = i9 >>> 7 ^ i9;
 i9 = i3 << 2 ^ i3;
 i3 = i9 >>> 20 ^ i9 | 1;
 i9 = 0;
 i7 = i11;
 i11 = 0;
 while (1) {
  i12 = i7 & i6;
  i13 = i10 + (i12 << 4) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == 0) {
   break;
  } else if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i8 >> 2] | 0) | 0) {
    i17 = 11;
    break;
   } else {
    i16 = i9;
   }
  }
  i14 = (i11 | 0) == 0 ? i3 : i11;
  i9 = i16;
  i7 = i14 + i12 | 0;
  i11 = i14;
 }
 if ((i17 | 0) == 11) {
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 16) | 0;
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
 i13 = i18 + 12 | 0;
 i8 = i4 + 8 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i9;
 i9 = i18 + 4 | 0;
 i8 = i4 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i13;
 i13 = i18 + 8 | 0;
 i8 = i4 + 4 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i8 >> 2] = i4;
 i4 = i2 + 12 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i8;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i8 << 1 | 0) < (i13 | 0)) {
  i19 = i18;
  i20 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i21 = 8;
  } else {
   i9 = i13 << 1;
   i21 = (i8 * 6 & -1 | 0) < (i9 | 0) ? i13 : i9;
  }
  i9 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i9;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 << 4) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
function __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
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
  __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i8, 0) | 0;
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
 i11 = i10 + (i7 * 40 & -1) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
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
     i14 = 8;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i10 + (i23 * 40 & -1) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 10;
     break;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i25;
    }
   }
   if ((i14 | 0) == 8) {
    i20 = i10 + ((HEAP32[i2 + 4 >> 2] | 0) * 40 & -1) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i14 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 11;
     break;
    }
    _memset(i21 | 0, 0, 37) | 0;
    i20 = i2 + 16 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - 1;
    i26 = i21;
    i27 = HEAP32[i3 >> 2] | 0;
    i28 = i20;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 __ZN7WebCore19ScriptDebugListener6ScriptaSERKS1_(i26 + 4 | 0, i4) | 0;
 i4 = i2 + 12 | 0;
 i27 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i27;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i28 >> 2] | 0) + i27 << 1 | 0) < (i8 | 0)) {
  i29 = i26;
  i30 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i31 = 8;
  } else {
   i28 = i8 << 1;
   i31 = (i27 * 6 & -1 | 0) < (i28 | 0) ? i8 : i28;
  }
  i28 = __ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 * 40 & -1) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 if ((i6 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = (HEAP8[i6] & 1) != 0;
 }
 if ((i5 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = (HEAP8[i5] & 1) != 0;
 }
 HEAP32[i11 >> 2] = __ZNK3WTF6String8toIntPtrEPb(i3, 0) | 0;
 i5 = i1 + 44 | 0;
 __ZN3WTF7HashMapIjN7WebCore19ScriptDebugListener6ScriptENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i12, i5, i11);
 i11 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) != ((HEAP32[i5 >> 2] | 0) + ((HEAP32[i1 + 48 >> 2] | 0) * 40 & -1) | 0)) {
  __ZN7WebCore18ContentSearchUtils19searchInTextByLinesERKN3WTF6StringES4_bb(i13, i11 + 8 | 0, i4, i15, i14);
  i14 = i13 | 0;
  i13 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i15 = i7 | 0;
  i7 = HEAP32[i15 >> 2] | 0;
  HEAP32[i15 >> 2] = i13;
  do {
   if ((i7 | 0) != 0) {
    i13 = i7 + 4 | 0;
    i15 = i13 | 0;
    i4 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) != 0) {
     HEAP32[i15 >> 2] = i4;
     break;
    }
    i4 = i13 - 4 | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
   }
  } while (0);
  i7 = HEAP32[i14 >> 2] | 0;
  if ((i7 | 0) == 0) {
   STACKTOP = i8;
   return;
  }
  i14 = i7 + 4 | 0;
  i7 = i14 | 0;
  i4 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i7 >> 2] = i4;
   STACKTOP = i8;
   return;
  }
  i4 = i14 - 4 | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i8;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  STACKTOP = i8;
  return;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i16 = 0;
  } else {
   i3 = i4 | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   i7 = i14 + 2 | 0;
   HEAP32[i3 >> 2] = i14 + 4;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    i16 = i4;
    break;
   } else {
    HEAP32[i3 >> 2] = i7;
    i16 = i4;
    break;
   }
  }
 } while (0);
 i4 = i10 | 0;
 HEAP32[i4 >> 2] = i16;
 i7 = (i16 | 0) == 0;
 if (!i7) {
  i3 = i16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i9, H_BASE + 816 | 0, i10);
 i10 = i9 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i9 | 0) == 0) {
  _WTFCrash();
 }
 i10 = i2 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i9;
 do {
  if ((i2 | 0) != 0) {
   i9 = i2 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 if (i7) {
  STACKTOP = i8;
  return;
 }
 i7 = i16 | 0;
 i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i16);
  STACKTOP = i8;
  return;
 } else {
  HEAP32[i7 >> 2] = i2;
  STACKTOP = i8;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 | 0;
 do {
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 776 | 0) | 0) {
   i9 = 0;
  } else {
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 768 | 0) | 0) {
    i9 = 1;
    break;
   }
   if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i8 >> 2] | 0, H_BASE + 752 | 0) | 0) {
    i9 = 2;
    break;
   }
   i3 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     i10 = 0;
    } else {
     i11 = i3 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     i13 = i12 + 2 | 0;
     HEAP32[i11 >> 2] = i12 + 4;
     if ((i13 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      i10 = i3;
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      i10 = i3;
      break;
     }
    }
   } while (0);
   i3 = i6 | 0;
   HEAP32[i3 >> 2] = i10;
   i13 = (i10 | 0) == 0;
   if (!i13) {
    i11 = i10 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 2;
   }
   __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, H_BASE + 712 | 0, i6);
   i11 = i5 | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = 0;
   i11 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i11 | 0) != 0) {
     i3 = i11 | 0;
     i14 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i11);
      break;
     } else {
      HEAP32[i3 >> 2] = i14;
      break;
     }
    }
   } while (0);
   if ((i12 | 0) == 0) {
    _WTFCrash();
   }
   i11 = i2 | 0;
   i14 = HEAP32[i11 >> 2] | 0;
   HEAP32[i11 >> 2] = i12;
   do {
    if ((i14 | 0) != 0) {
     i11 = i14 | 0;
     i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i3 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i11 >> 2] = i3;
      break;
     }
    }
   } while (0);
   if (i13) {
    STACKTOP = i4;
    return;
   }
   i14 = i10 | 0;
   i12 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i10);
    STACKTOP = i4;
    return;
   } else {
    HEAP32[i14 >> 2] = i12;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i10 = i1;
 __ZN3JSC8Debugger25setPauseOnExceptionsStateENS0_22PauseOnExceptionsStateE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, i9);
 if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0) == (i9 | 0)) {
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 648 | 0);
 i9 = i7 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i1 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i2 | 0;
 i1 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i9 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 56 | 0;
 i10 = i1 + 104 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
  __ZN7WebCore17ScriptDebugServer16removeBreakpointEj(i11, HEAP32[i10 >> 2] | 0);
  HEAP32[i10 >> 2] = 0;
 }
 if (!(__ZN7WebCoreL13parseLocationEPN3WTF6StringEPN9Inspector15InspectorObjectEPjS6_S6_(i2, HEAP32[i3 >> 2] | 0, i5, i6, i7) | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 1488 | 0);
 HEAP32[i8 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = i11;
 i11 = i8 + 8 | 0;
 i3 = i9 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 HEAP32[i11 >> 2] = i9;
 do {
  if ((i9 | 0) == 0) {
   i12 = i8 + 12 | 0;
   _memset(i12 | 0, 0, 13) | 0;
   i13 = i12;
   i14 = i8 + 16 | 0;
   i15 = i8 + 20 | 0;
  } else {
   i12 = i9 | 0;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
   i12 = HEAP32[i3 >> 2] | 0;
   i16 = i8 + 12 | 0;
   i17 = i8 + 16 | 0;
   i18 = i8 + 20 | 0;
   _memset(i16 | 0, 0, 13) | 0;
   if ((i12 | 0) == 0) {
    i13 = i16;
    i14 = i17;
    i15 = i18;
    break;
   }
   i19 = i12 | 0;
   i20 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
   if ((i20 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i12);
    i13 = i16;
    i14 = i17;
    i15 = i18;
    break;
   } else {
    HEAP32[i19 >> 2] = i20;
    i13 = i16;
    i14 = i17;
    i15 = i18;
    break;
   }
  }
 } while (0);
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
 HEAP32[i10 >> 2] = __ZN7WebCore17ScriptDebugServer13setBreakpointEjRKNS_16ScriptBreakpointEPjS4_(i3, HEAP32[i5 >> 2] | 0, i8, i6, i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 80 >> 2] & 63](i1, i2);
 i2 = HEAP32[i15 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i1 = HEAP32[i13 >> 2] | 0;
  i7 = i1 + (i2 << 3) | 0;
  i2 = i1;
  while (1) {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i6 = i1 | 0;
     i8 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i1);
      break;
     } else {
      HEAP32[i6 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i2 = i2 + 8 | 0;
   if ((i2 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i15 >> 2] = 0;
 }
 i15 = HEAP32[i13 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 i15 = HEAP32[i11 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = i15 | 0;
 i14 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i14 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i11 >> 2] = i14;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent5clearEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i3 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1 + 40 | 0, i3 + 4 | 0) | 0;
 __ZN10Deprecated11ScriptValueD1Ev(i3);
 i3 = i1 + 44 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i7 = 0;
   while (1) {
    if ((HEAP32[i5 + (i7 * 40 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i5 + (i7 * 40 & -1) + 4 | 0);
    }
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i3 | 0, 0, 16) | 0;
 }
 i3 = i1 + 64 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i6 | 0) > 0) {
   i7 = 0;
   while (1) {
    i8 = i5 + (i7 << 4) | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i9 | 0) != -1) {
      i10 = i5 + (i7 << 4) + 12 | 0;
      if ((HEAP32[i10 >> 2] | 0) != 0) {
       HEAP32[i10 >> 2] = 0;
      }
      i10 = i5 + (i7 << 4) + 4 | 0;
      i11 = HEAP32[i10 >> 2] | 0;
      if ((i11 | 0) == 0) {
       i12 = i9;
      } else {
       HEAP32[i10 >> 2] = 0;
       HEAP32[i5 + (i7 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i11);
       i12 = HEAP32[i8 >> 2] | 0;
      }
      if ((i12 | 0) == 0) {
       break;
      }
      i11 = i12 | 0;
      i10 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i10 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i11 >> 2] = i10;
       break;
      }
     }
    } while (0);
    i7 = i7 + 1 | 0;
    if ((i7 | 0) >= (i6 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i5);
  _memset(i3 | 0, 0, 16) | 0;
 }
 HEAP32[i1 + 104 >> 2] = 0;
 HEAP32[i1 + 108 >> 2] = 29;
 i3 = i1 + 112 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 4 | 0;
   i6 = i3 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i3 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 HEAP8[i1 + 117 | 0] = 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 63](i1, i4, 0);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 HEAP32[i8 >> 2] = __ZNK3WTF6String8toIntPtrEPb(i3, 0) | 0;
 i10 = i1 + 44 | 0;
 __ZN3WTF7HashMapIjN7WebCore19ScriptDebugListener6ScriptENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i9, i10, i8);
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) != ((HEAP32[i10 >> 2] | 0) + ((HEAP32[i1 + 48 >> 2] | 0) * 40 & -1) | 0)) {
  i1 = HEAP32[i8 + 8 >> 2] | 0;
  if ((i1 | 0) != 0) {
   i8 = i1 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
  }
  i8 = i4 | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i1;
  if ((i4 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i1 = i4 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
  if ((i8 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i4);
   STACKTOP = i5;
   return;
  } else {
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i5;
   return;
  }
 }
 i8 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i11 = 0;
  } else {
   i3 = i8 | 0;
   i1 = HEAP32[i3 >> 2] | 0;
   i4 = i1 + 2 | 0;
   HEAP32[i3 >> 2] = i1 + 4;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i11 = i8;
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    i11 = i8;
    break;
   }
  }
 } while (0);
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i11;
 i4 = (i11 | 0) == 0;
 if (!i4) {
  i3 = i11 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_(i6, H_BASE + 816 | 0, i7);
 i7 = i6 | 0;
 i6 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 i7 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = i7 | 0;
   i3 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i8 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == 0) {
  _WTFCrash();
 }
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if (i4) {
  STACKTOP = i5;
  return;
 }
 i4 = i11 | 0;
 i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i11);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i2;
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i4 = __ZN3WTF10fastMallocEj(i2 << 4) | 0;
 if ((i2 | 0) > 0) {
  i8 = 0;
  while (1) {
   _memset(i4 + (i8 << 4) | 0, 0, 16) | 0;
   i8 = i8 + 1 | 0;
   if ((i8 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i6 >> 2] = i4;
 if ((i5 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i9 = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i4 = i7 + (i11 << 4) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i13 = i12;
  } else {
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i4) | 0;
   i13 = (i4 | 0) == (i3 | 0) ? i6 : i12;
  }
  i6 = i11 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i11 = i6;
   i12 = i13;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i14 = 0;
 } else {
  i9 = i13;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i9 | 0;
 }
 while (1) {
  i1 = i7 + (i14 << 4) | 0;
  i12 = HEAP32[i1 >> 2] | 0;
  do {
   if ((i12 | 0) != -1) {
    i11 = i7 + (i14 << 4) + 12 | 0;
    if ((HEAP32[i11 >> 2] | 0) != 0) {
     HEAP32[i11 >> 2] = 0;
    }
    i11 = i7 + (i14 << 4) + 4 | 0;
    i3 = HEAP32[i11 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i15 = i12;
    } else {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i7 + (i14 << 4) + 8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i3);
     i15 = HEAP32[i1 >> 2] | 0;
    }
    if ((i15 | 0) == 0) {
     break;
    }
    i3 = i15 | 0;
    i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i15);
     break;
    } else {
     HEAP32[i3 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i1 = i14 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i14 = i1;
  } else {
   i9 = i13;
   break;
  }
 }
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i9 | 0;
}
function __ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_(i5, i1 + 12 | 0, i2, i3);
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
function __ZN7WebCore22InspectorDebuggerAgent27scriptExecutionBlockedByCSPERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1;
 if ((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector15InspectorObject6createEv(i6);
 i9 = i6 | 0;
 i6 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 496 | 0);
 __ZN9Inspector15InspectorString6createERKN3WTF6StringE(i5, i2);
 i2 = i4 | 0;
 i9 = i5 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i2 >> 2] = i5;
 __ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE(i6 | 0, i7, i4);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i5 = i2 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i5 >> 2] = i10;
    break;
   }
   i10 = i2 - 4 | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
  }
 } while (0);
 i4 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i9 = i4 + 4 | 0;
   i10 = i9 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i10 >> 2] = i2;
    break;
   }
   i2 = i9 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 63](i2);
  }
 } while (0);
 i4 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i7 = i4 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 108 >> 2] = 28;
 i4 = i1 + 112 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i6;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 + 4 | 0;
   i4 = i6 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 __ZN3JSC8Debugger12breakProgramEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 STACKTOP = i3;
 return;
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
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i5 + 16 >> 2] | 0;
 if (i6 >>> 0 > 127 >>> 0) {
  i7 = i6 >>> 7;
 } else {
  i7 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i5) | 0;
 }
 i5 = (i7 >>> 23) + ~i7 | 0;
 i6 = i5 << 12 ^ i5;
 i5 = i6 >>> 7 ^ i6;
 i6 = i5 << 2 ^ i5;
 i5 = i6 >>> 20 ^ i6 | 1;
 i6 = i7;
 i7 = 0;
 i8 = 0;
 while (1) {
  i9 = i6 & i4;
  i10 = i3 + (i9 << 4) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i11;
  if ((i12 | 0) == (-1 | 0)) {
   i13 = i10;
  } else if ((i12 | 0) == 0) {
   i14 = 6;
   break;
  } else {
   if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i11, HEAP32[i1 >> 2] | 0) | 0) {
    i15 = i10;
    break;
   } else {
    i13 = i8;
   }
  }
  i11 = (i7 | 0) == 0 ? i5 : i7;
  i6 = i11 + i9 | 0;
  i7 = i11;
  i8 = i13;
 }
 if ((i14 | 0) == 6) {
  i15 = (i8 | 0) != 0 ? i8 : i10;
 }
 i10 = i15 + 12 | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i8 = i15 + 4 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i15 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 i14 = i15 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i7 = i13 | 0;
   i6 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i6 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i14 >> 2] = i13;
 HEAP32[i8 >> 2] = 0;
 i13 = i15 + 8 | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i2 + 12 | 0;
 HEAP32[i10 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = 0;
 i14 = i2 + 4 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i14 >> 2] = i10;
 i10 = i2 + 8 | 0;
 i2 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i10 >> 2] = i2;
 return i15 | 0;
}
function __ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2 | 0;
 i5 = i2 + 8 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN9Inspector15InspectorObjectEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1 + 84 | 0, i3) | 0;
 i6 = i1 + 64 | 0;
 __ZN3WTF7HashMapINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i5, i6, i3);
 i3 = i6 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i1 + 68 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == (i7 + (i9 << 4) | 0)) {
  STACKTOP = i2;
  return;
 }
 i11 = i10 + 12 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) == 0) {
   i12 = i7;
   i13 = i9;
  } else {
   i14 = i1;
   i15 = i10 + 4 | 0;
   i16 = 0;
   while (1) {
    i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
    if ((HEAP32[i11 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     i18 = 5;
     break;
    }
    __ZN7WebCore17ScriptDebugServer16removeBreakpointEj(i17, HEAP32[(HEAP32[i15 >> 2] | 0) + (i16 << 2) >> 2] | 0);
    i17 = i16 + 1 | 0;
    if (i17 >>> 0 < (HEAP32[i11 >> 2] | 0) >>> 0) {
     i16 = i17;
    } else {
     i18 = 7;
     break;
    }
   }
   if ((i18 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i18 | 0) == 7) {
    i12 = HEAP32[i3 >> 2] | 0;
    i13 = HEAP32[i8 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i8 = HEAP32[i5 >> 2] | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 if ((i8 | 0) == (i12 + (i13 << 4) | 0)) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i4 >> 2] = i8;
 HEAP32[i4 + 4 >> 2] = i3;
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EE(i6 | 0, i4);
 STACKTOP = i2;
 return;
}
function __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = i1 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i3;
   return i1 | 0;
  }
  i7 = HEAP32[(i6 & -4096) + 12 >> 2] | 0;
  i8 = i6;
  i9 = i7 + 84 | 0;
  i10 = i8 + 12 | 0;
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
  }
  i9 = i6 + 8 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i6 + 12 >> 2] = i11;
  HEAP32[i11 + 8 >> 2] = i6;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  i9 = i7 + 80 | 0;
  HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i9 >> 2] = i8;
  HEAP32[i2 >> 2] = 0;
  STACKTOP = i3;
  return i1 | 0;
 }
 i2 = HEAP32[HEAP32[(i5 & -4096) + 12 >> 2] >> 2] | 0;
 i8 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i1 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  if ((HEAP32[i2 + 20444 >> 2] | 0) != 0) {
   _WTFCrash();
   return 0;
  }
  i7 = i2 + 20440 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  if ((i6 | 0) == 0) {
   __ZN3JSC9HandleSet4growEv(i2 + 20360 | 0);
   i12 = HEAP32[i7 >> 2] | 0;
  } else {
   i12 = i6;
  }
  i6 = i12 + 12 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i12 + 4 >> 2] = -6;
  HEAP32[i12 >> 2] = 0;
  i7 = i12 + 8 | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i6 >> 2] = 0;
  i11 = i2 + 20420 | 0;
  i13 = HEAP32[i11 >> 2] | 0;
  HEAP32[i7 >> 2] = i2 + 20408;
  HEAP32[i6 >> 2] = i13;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i13 + 8 >> 2] = i12;
  i13 = i12 | 0;
  HEAP32[i8 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i10;
 }
 i10 = i4 | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i9;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i14 & -4096) + 12 >> 2] | 0, i14, i4);
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i14 + 4 >> 2] = i4;
 STACKTOP = i3;
 return i1 | 0;
}
function __ZN7WebCore22InspectorDebuggerAgent7disableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 84 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = i3 + (i5 << 3) | 0;
    do {
     if ((HEAP32[i6 >> 2] | 0) != -1) {
      i7 = HEAP32[i3 + (i5 << 3) + 4 >> 2] | 0;
      do {
       if ((i7 | 0) != 0) {
        i8 = i7 + 4 | 0;
        i9 = i8 | 0;
        i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
        if ((i10 | 0) != 0) {
         HEAP32[i9 >> 2] = i10;
         break;
        }
        i10 = i8 - 4 | 0;
        if ((i10 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
       }
      } while (0);
      i7 = HEAP32[i6 >> 2] | 0;
      if ((i7 | 0) == 0) {
       break;
      }
      i10 = i7 | 0;
      i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i7);
       break;
      } else {
       HEAP32[i10 >> 2] = i8;
       break;
      }
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
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 60 >> 2] = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 124 >> 2] & 63](i1);
 i2 = i1;
 __ZN7WebCore17ScriptDebugServer16clearBreakpointsEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 __ZN7WebCore17ScriptDebugServer20clearCompiledScriptsEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 __ZN3JSC8Debugger15continueProgramEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 __ZN7WebCore22InspectorDebuggerAgent5clearEv(i1);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i11 = i1 + 116 | 0;
  HEAP8[i11] = 0;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 63](i2);
 i11 = i1 + 116 | 0;
 HEAP8[i11] = 0;
 return;
}
function __ZN7WebCore19ScriptDebugListener6ScriptaSERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i1 + 12 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i1 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i1 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 HEAP32[i1 + 24 >> 2] = HEAP32[i2 + 24 >> 2];
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 HEAP8[i1 + 32 | 0] = HEAP8[i2 + 32 | 0] & 1;
 return i1 | 0;
}
function __ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = HEAP8[i1 + 4 | 0] | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = HEAP32[i5 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i5 + 16 >> 2] & 32 | 0) == 0) {
     i8 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i9 = 0;
     }
     while (1) {
      HEAP16[i2 + (i9 << 1) >> 1] = HEAP16[i8 + (i9 << 1) >> 1] | 0;
      i9 = i9 + 1 | 0;
      if (i9 >>> 0 >= i7 >>> 0) {
       break;
      }
     }
    } else {
     i8 = HEAP32[i5 + 8 >> 2] | 0;
     if ((i7 | 0) == 0) {
      break;
     } else {
      i10 = 0;
     }
     while (1) {
      HEAP16[i2 + (i10 << 1) >> 1] = HEAPU8[i8 + i10 | 0] | 0;
      i10 = i10 + 1 | 0;
      if (i10 >>> 0 >= i7 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   }
   i6 = HEAP32[i7 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP16[i2 + (i6 << 1) >> 1] = i3 & 255;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i11 = 1;
 } else {
  i11 = (HEAP32[i3 + 4 >> 2] | 0) + 1 | 0;
 }
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
  i4 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i12 = 0;
  }
  while (1) {
   HEAP16[i2 + (i12 + i11 << 1) >> 1] = HEAP16[i4 + (i12 << 1) >> 1] | 0;
   i12 = i12 + 1 | 0;
   if (i12 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 } else {
  i12 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   return;
  } else {
   i13 = 0;
  }
  while (1) {
   HEAP16[i2 + (i13 + i11 << 1) >> 1] = HEAPU8[i12 + i13 | 0] | 0;
   i13 = i13 + 1 | 0;
   if (i13 >>> 0 >= i1 >>> 0) {
    break;
   }
  }
  return;
 }
}
function __ZNK3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 i9 = i5 + 8 | 0;
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i10 = i8 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i5 + 12 | 0] = HEAP8[i2 + 12 | 0] | 0;
 i10 = i6 | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i10 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i10 = i6 | 0;
   i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i10 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN7WebCore17ScriptDebugServer16clearBreakpointsEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 i2 = i1 + 44 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    if ((HEAP32[i3 + (i5 * 40 & -1) >> 2] | 0) != -1) {
     __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i3 + (i5 * 40 & -1) + 4 | 0);
    }
    i5 = i5 + 1 | 0;
    if ((i5 | 0) >= (i4 | 0)) {
     break;
    }
   }
  }
  __ZN3WTF8fastFreeEPv(i3);
  _memset(i2 | 0, 0, 16) | 0;
 }
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i1 + 68 >> 2] | 0;
  if ((i4 | 0) > 0) {
   i5 = 0;
   while (1) {
    i6 = i3 + (i5 << 4) | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    do {
     if ((i7 | 0) != -1) {
      i8 = i3 + (i5 << 4) + 12 | 0;
      if ((HEAP32[i8 >> 2] | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
      }
      i8 = i3 + (i5 << 4) + 4 | 0;
      i9 = HEAP32[i8 >> 2] | 0;
      if ((i9 | 0) == 0) {
       i10 = i7;
      } else {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i3 + (i5 << 4) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i9);
       i10 = HEAP32[i6 >> 2] | 0;
      }
      if ((i10 | 0) == 0) {
       break;
      }
      i9 = i10 | 0;
      i8 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
      if ((i8 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i9 >> 2] = i8;
       break;
      }
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
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher19globalObjectClearedEv(i2);
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == ((HEAP32[i1 >> 2] | 0) + (HEAP32[i4 >> 2] << 4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i2 = i5 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i5 + 4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i5 + 8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 | 0;
   i7 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i2 >> 2] = i7;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = -1;
 i6 = i1 + 16 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i1 + 12 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 HEAP32[i6 >> 2] = i5;
 i6 = HEAP32[i4 >> 2] | 0;
 if (!((i5 * 6 & -1 | 0) < (i6 | 0) & (i6 | 0) > 8)) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, (i6 | 0) / 2 & -1, 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6RefPtrIN9Inspector15InspectorObjectEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = i5 << 3 | 0;
  i7 = 0;
  i8 = i5;
 } else {
  i5 = HEAP32[i1 + 8 >> 2] | 0;
  i9 = i2 | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i10 = HEAP32[i2 + 16 >> 2] | 0;
  if (i10 >>> 0 > 127 >>> 0) {
   i11 = i10 >>> 7;
  } else {
   i11 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i2) | 0;
  }
  i2 = (i11 >>> 23) + ~i11 | 0;
  i10 = i2 << 12 ^ i2;
  i2 = i10 >>> 7 ^ i10;
  i10 = i2 << 2 ^ i2;
  i2 = i10 >>> 20 ^ i10 | 1;
  i10 = i11;
  i11 = 0;
  while (1) {
   i12 = i10 & i5;
   i13 = i4 + (i12 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = i14;
   if ((i15 | 0) == 0) {
    i16 = 0;
    break;
   } else if ((i15 | 0) != (-1 | 0)) {
    if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i14, HEAP32[i9 >> 2] | 0) | 0) {
     i16 = i13;
     break;
    }
   }
   i13 = (i11 | 0) == 0 ? i2 : i11;
   i10 = i13 + i12 | 0;
   i11 = i13;
  }
  i11 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i1 + 4 >> 2] | 0;
  i6 = (i16 | 0) == 0 ? i11 + (i3 << 3) | 0 : i16;
  i7 = i11;
  i8 = i3;
 }
 if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
  i17 = 0;
  return i17 | 0;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6removeEPS7_(i1 | 0, i6);
 i17 = 1;
 return i17 | 0;
}
function __ZN3WTF7HashMapIjN7WebCore19ScriptDebugListener6ScriptENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = (HEAP32[i2 + 4 >> 2] | 0) * 40 & -1 | 0;
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
   i11 = i4 + (i10 * 40 & -1) | 0;
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
      i20 = i4 + (i19 * 40 & -1) | 0;
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
     i17 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 40 & -1) | 0;
     i6 = i17;
     i7 = i17;
     break L1;
    }
   } while (0);
   i8 = i4 + ((HEAP32[i2 + 4 >> 2] | 0) * 40 & -1) | 0;
   i6 = (i13 | 0) == 0 ? i8 : i13;
   i7 = i8;
  }
 } while (0);
 i13 = i1;
 HEAP32[i13 >> 2] = i6;
 HEAP32[i13 + 4 >> 2] = i7;
 return;
}
function __ZN3WTF7HashMapINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] << 4 | 0;
   i7 = i6;
   i8 = i6;
  } else {
   i6 = HEAP32[i2 + 8 >> 2] | 0;
   i9 = i3 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[i10 + 16 >> 2] | 0;
   if (i11 >>> 0 > 127 >>> 0) {
    i12 = i11 >>> 7;
   } else {
    i12 = __ZNK3WTF10StringImpl12hashSlowCaseEv(i10) | 0;
   }
   i10 = (i12 >>> 23) + ~i12 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = i12;
   i13 = 0;
   while (1) {
    i14 = i11 & i6;
    i15 = i5 + (i14 << 4) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i16;
    if ((i17 | 0) == 0) {
     i18 = 8;
     break;
    } else if ((i17 | 0) != (-1 | 0)) {
     if (__ZN3WTF12equalNonNullEPKNS_10StringImplES2_(i16, HEAP32[i9 >> 2] | 0) | 0) {
      i18 = 11;
      break;
     }
    }
    i16 = (i13 | 0) == 0 ? i10 : i13;
    i11 = i16 + i14 | 0;
    i13 = i16;
   }
   if ((i18 | 0) == 8) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i7 = i13;
    i8 = i13;
    break;
   } else if ((i18 | 0) == 11) {
    i13 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 4) | 0;
    i7 = (i15 | 0) == 0 ? i13 : i15;
    i8 = i13;
    break;
   }
  }
 } while (0);
 i15 = i1;
 HEAP32[i15 >> 2] = i7;
 HEAP32[i15 + 4 >> 2] = i8;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  i6 = HEAP32[i1 + 20 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, HEAP32[H_BASE + 1464 >> 2] | 0);
  __ZN9Inspector21InjectedScriptManager18releaseObjectGroupERKN3WTF6StringE(i6, i5);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3JSC8Debugger17stepIntoStatementEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
  i6 = HEAP32[i1 + 120 >> 2] | 0;
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] & 63](i6);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 368 | 0);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 24 | 0;
 __ZN9Inspector21InjectedScriptManager25injectedScriptForObjectIdERKN3WTF6StringE(i6, HEAP32[i1 + 20 >> 2] | 0, i3);
 i1 = HEAP32[i6 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == -6) {
    break;
   }
   __ZN9Inspector14InjectedScript18getFunctionDetailsEPN3WTF6StringERKS2_PNS1_6RefPtrINS_11TypeBuilder8Debugger15FunctionDetailsEEE(i6, i2, i3, i4);
   __ZN9Inspector14InjectedScriptD1Ev(i6);
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN3WTF6StringC1EPKc(i7, H_BASE + 784 | 0);
 i4 = i7 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 do {
  if ((i2 | 0) != 0) {
   i7 = i2 | 0;
   i3 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i7 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
 i4 = i2 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i3 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i4 >> 2] = i3;
  __ZN9Inspector14InjectedScriptD1Ev(i6);
  STACKTOP = i5;
  return;
 }
}
function __ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 if (!i5) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 i6 = HEAP8[i2 + 4 | 0] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i8) {
  i9 = i7 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = HEAP8[i2 + 12 | 0] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = (i2 | 0) == 0;
 if (!i3) {
  i10 = i2 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP32[i1 >> 2] = i4;
 if (!i5) {
  i10 = i4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 4 | 0] = i6;
 HEAP32[i1 + 8 >> 2] = i7;
 if (!i8) {
  i6 = i7 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
 }
 HEAP8[i1 + 12 | 0] = i9;
 HEAP32[i1 + 16 >> 2] = i2;
 do {
  if (!i3) {
   i1 = i2 | 0;
   i9 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i9 + 2;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i1 >> 2] = i9;
    break;
   }
  }
 } while (0);
 do {
  if (!i8) {
   i2 = i7 | 0;
   i3 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i2 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (i5) {
  return;
 }
 i5 = i4 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  i6 = HEAP32[i1 + 20 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, HEAP32[H_BASE + 1464 >> 2] | 0);
  __ZN9Inspector21InjectedScriptManager18releaseObjectGroupERKN3WTF6StringE(i6, i5);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3JSC8Debugger17stepOverStatementEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 368 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
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
  STACKTOP = i3;
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN3JSC6StrongINS_7UnknownEEC2ERKS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[(i2 & -4096) + 12 >> 2] | 0;
 if ((HEAP32[i6 + 84 >> 2] | 0) != 0) {
  _WTFCrash();
 }
 i2 = i6 + 80 | 0;
 i7 = HEAP32[i2 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3JSC9HandleSet4growEv(i6);
  i8 = HEAP32[i2 >> 2] | 0;
 } else {
  i8 = i7;
 }
 i7 = i8 + 12 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i8 + 4 >> 2] = -6;
 HEAP32[i8 >> 2] = 0;
 i2 = i8 + 8 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 i9 = i6 + 60 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i2 >> 2] = i6 + 48;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i9 >> 2] = i8;
 HEAP32[i10 + 8 >> 2] = i8;
 i10 = i8 | 0;
 HEAP32[i5 >> 2] = i10;
 i9 = HEAP32[i1 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i11 = 0;
  i12 = 0;
  i13 = -6;
  i14 = 0;
 } else {
  i1 = i9 | 0;
  i9 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i1 + 4 >> 2] | 0;
  i11 = i7 & 0;
  i12 = i9 & -1;
  i13 = i7 & -1;
  i14 = i9 & 0;
 }
 i9 = i4 | 0;
 HEAP32[i9 >> 2] = i12 | i14;
 HEAP32[i9 + 4 >> 2] = i11 | i13;
 __ZN3JSC9HandleSet12writeBarrierEPNS_7JSValueERKS1_(HEAP32[(i8 & -4096) + 12 >> 2] | 0, i10, i4);
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  i6 = HEAP32[i1 + 20 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, HEAP32[H_BASE + 1464 >> 2] | 0);
  __ZN9Inspector21InjectedScriptManager18releaseObjectGroupERKN3WTF6StringE(i6, i5);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3JSC8Debugger17stepOutOfFunctionEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 368 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
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
  STACKTOP = i3;
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  i6 = HEAP32[i1 + 20 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, HEAP32[H_BASE + 1464 >> 2] | 0);
  __ZN9Inspector21InjectedScriptManager18releaseObjectGroupERKN3WTF6StringE(i6, i5);
  i6 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i6 | 0) != 0) {
    i5 = i6 | 0;
    i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i6);
     break;
    } else {
     HEAP32[i5 >> 2] = i7;
     break;
    }
   }
  } while (0);
  __ZN3JSC8Debugger15continueProgramEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 368 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
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
  STACKTOP = i3;
  return;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i6 >> 2] = H_BASE + 840;
 __ZN3WTF6StringC1ENS_12ASCIILiteralE(i5, i6);
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = H_BASE + 880;
 i7 = i5 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 do {
  if ((i5 | 0) == 0) {
   HEAP32[i6 >> 2] = H_BASE + 1408;
   HEAP32[i1 + 8 >> 2] = i2;
  } else {
   i8 = i5 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i6 >> 2] = H_BASE + 1408;
   HEAP32[i1 + 8 >> 2] = i2;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = i8 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i9 >> 2] = i10;
    break;
   }
  }
 } while (0);
 HEAP32[i6 >> 2] = H_BASE + 1080;
 HEAP32[i1 + 12 >> 2] = H_BASE + 1252;
 HEAP32[i1 + 16 >> 2] = H_BASE + 1284;
 HEAP32[i1 + 20 >> 2] = i3;
 HEAP32[i1 + 24 >> 2] = 0;
 HEAP32[i1 + 28 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP8[i1 + 116 | 0] = 0;
 HEAP8[i1 + 117 | 0] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 _memset(i1 + 40 | 0, 0, 68) | 0;
 HEAP32[i1 + 108 >> 2] = 29;
 HEAP32[i1 + 112 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6removeEPS7_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
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
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i6 = i2 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i6 >> 2] = i4;
    break;
   }
  }
 } while (0);
 HEAP32[i3 >> 2] = -1;
 i3 = i1 + 16 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 i3 = i1 + 12 | 0;
 i2 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 HEAP32[i3 >> 2] = i2;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i2 * 6 & -1 | 0) < (i3 | 0) & (i3 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_(i1, (i3 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE(i1, i2, i3) {
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
 __ZN9Inspector34InspectorDebuggerBackendDispatcher6createEPNS_26InspectorBackendDispatcherEPNS_41InspectorDebuggerBackendDispatcherHandlerE(i5, i3, i1 + 16 | 0);
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
function __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 3) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 3 << 3) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 3) >> 2] = HEAP32[i11 >> 2];
 i2 = i11 + 4 | 0;
 i11 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i12 + (i6 << 3) + 4 >> 2] = i11;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 4 | 0;
 if ((HEAP32[i3 >> 2] | 0) >>> 0 >= i2 >>> 0) {
  return;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i5 + (i6 << 3) | 0;
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i3 >> 2] = i7 >>> 3;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i2 = i8 | 0;
     i9 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i2 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 8 | 0;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore19ScriptDebugListener6ScriptD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
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
 do {
  if ((i2 | 0) != 0) {
   i4 = i2 | 0;
   i3 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i2);
    break;
   } else {
    HEAP32[i4 >> 2] = i3;
    break;
   }
  }
 } while (0);
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
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore22InspectorDebuggerAgent17currentCallFramesEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN9Inspector18InspectorArrayBaseC2Ev(i6);
  HEAP32[i6 >> 2] = H_BASE + 920;
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 __ZN9Inspector21InjectedScriptManager17injectedScriptForEPN3JSC9ExecStateE(i4, HEAP32[i2 + 20 >> 2] | 0, i5);
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = 5;
  } else {
   if ((HEAP32[i5 + 4 >> 2] | 0) == -6) {
    i7 = 5;
    break;
   }
   __ZN9Inspector14InjectedScript14wrapCallFramesERKN10Deprecated11ScriptValueE(i1, i4, i2 + 36 | 0);
  }
 } while (0);
 if ((i7 | 0) == 5) {
  i7 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN9Inspector18InspectorArrayBaseC2Ev(i7);
  HEAP32[i7 >> 2] = H_BASE + 920;
  HEAP32[i1 >> 2] = i7;
 }
 __ZN9Inspector14InjectedScriptD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent12assertPausedEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 32 >> 2] | 0) != 0) {
  i5 = 1;
  STACKTOP = i3;
  return i5 | 0;
 }
 __ZN3WTF6StringC1EPKc(i4, H_BASE + 368 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i4;
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
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 i1 = i2 | 0;
 i6 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 } else {
  HEAP32[i1 >> 2] = i6;
  i5 = 0;
  STACKTOP = i3;
  return i5 | 0;
 }
 return 0;
}
function __ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 - 124 + 112 | 0;
 HEAP32[i4 + 32 >> 2] = 0;
 HEAP32[i3 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i4 + 40 | 0, i3 + 4 | 0) | 0;
 __ZN10Deprecated11ScriptValueD1Ev(i3);
 HEAP32[i4 + 108 >> 2] = 29;
 i3 = i4 + 112 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 + 4 | 0;
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
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher7resumedEv(HEAP32[i4 + 24 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent11didContinueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i3 >> 2] = __ZTVN10Deprecated11ScriptValueE + 8;
 HEAP32[i3 + 4 >> 2] = 0;
 __ZN3JSC6StrongINS_7UnknownEEaSERKS2_(i1 + 40 | 0, i3 + 4 | 0) | 0;
 __ZN10Deprecated11ScriptValueD1Ev(i3);
 HEAP32[i1 + 108 >> 2] = 29;
 i3 = i1 + 112 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
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
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher7resumedEv(HEAP32[i1 + 24 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent28schedulePauseOnNextStatementEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 117 | 0] & 1) != 0) {
  return;
 }
 HEAP32[i1 + 108 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 112 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN3JSC8Debugger23setPauseOnNextStatementEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 1);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1;
 if (!((HEAP32[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 24 >> 2] | 0) != 0 & (i2 | 0) == 3 & (i3 | 0) == 9)) {
  return;
 }
 HEAP32[i1 + 108 >> 2] = 27;
 i3 = i1 + 112 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
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
 __ZN3JSC8Debugger12breakProgramEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
 return;
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
function __ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 HEAP32[i1 + 108 >> 2] = i2;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 112 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
   i2 = i3 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i2 >> 2] = i5;
    break;
   }
   i5 = i3 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN3JSC8Debugger12breakProgramEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0);
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
function __ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 - 124 + 108 | 0;
 i1 = i2;
 i3 = i1 + 117 | 0;
 if ((HEAP8[i3] & 1) != 0) {
  return;
 }
 HEAP32[i2 + 108 >> 2] = 29;
 i4 = i2 + 112 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i6 = i4 | 0;
   i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i6 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 __ZN3JSC8Debugger23setPauseOnNextStatementEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 1);
 HEAP8[i3] = 1;
 return;
}
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 117 | 0;
 if ((HEAP8[i2] & 1) != 0) {
  return;
 }
 HEAP32[i1 + 108 >> 2] = 29;
 i3 = i1 + 112 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i3 = i4 + 4 | 0;
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
 __ZN3JSC8Debugger23setPauseOnNextStatementEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 1);
 HEAP8[i2] = 1;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent26cancelPauseOnNextStatementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 117 | 0] & 1) != 0) {
  return;
 }
 HEAP32[i1 + 108 >> 2] = 29;
 i2 = i1 + 112 | 0;
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
 __ZN3JSC8Debugger23setPauseOnNextStatementEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 0);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 24 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  __ZdlPv(i3);
 }
 i3 = i1 + 28 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 63](i1);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 __ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6, i7, i8, i9);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6, i7);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent6enableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 60 >> 2] = i1;
 __ZN3JSC8Debugger23setBreakpointsActivatedEb(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0, 1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 120 >> 2] & 63](i1);
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1 + 116 | 0;
  HEAP8[i3] = 1;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 63](i2);
 i3 = i1 + 116 | 0;
 HEAP8[i3] = 1;
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
function __ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 __ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6, i7, i8);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6, i7);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent17clearBreakDetailsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 + 108 >> 2] = 29;
 i2 = i1 + 112 | 0;
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
function __ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE(i1 - 124 + 108 | 0, i2, i3, i4);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 880;
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
 HEAP32[i1 >> 2] = H_BASE + 880;
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
function __ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_(i1 - 124 + 108 | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1 - 124 + 108 | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i2) | 0;
 if (i3) {
  __ZN3JSC8Debugger23setBreakpointsActivatedEb(i1, 1);
  return;
 } else {
  __ZN3JSC8Debugger23setBreakpointsActivatedEb(i1, 0);
  return;
 }
}
function dynCall_viiiiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 i12 = i12 | 0;
 FUNCTION_TABLE_viiiiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0, i11 | 0, i12 | 0);
}
function __ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
 if (i3) {
  __ZN3JSC8Debugger23setBreakpointsActivatedEb(i2, 1);
  return;
 } else {
  __ZN3JSC8Debugger23setBreakpointsActivatedEb(i2, 0);
  return;
 }
}
function __ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher19scriptFailedToParseERKN3WTF6StringES4_iiS4_(HEAP32[i1 - 124 + 136 >> 2] | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZN9Inspector18InspectorAgentBaseD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 880;
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
 HEAP32[i1 >> 2] = H_BASE + 880;
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
function __ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 __ZN9Inspector35InspectorDebuggerFrontendDispatcher19scriptFailedToParseERKN3WTF6StringES4_iiS4_(HEAP32[i1 + 24 >> 2] | 0, i2, i3, i4, i5, i6);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE(i1 - 124 + 108 | 0, i2, i3);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1 - 124 + 108 | 0;
 HEAP8[i3] = (__ZN7WebCore17ScriptDebugServer18canSetScriptSourceEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i2) | 0) | 0) & 1;
 return;
}
function __ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_(i1 - 124 + 112 | 0, i2, i3, i4);
 return;
}
function dynCall_viiiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i3] = (__ZN7WebCore17ScriptDebugServer18canSetScriptSourceEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) | 0) & 1;
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1 - 124 + 108 | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i2) | 0;
 HEAP8[i3] = 0;
 return;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE(i1 - 124 + 112 | 0, i2, i3);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_(i1 - 124 + 108 | 0, i2, i3, i4);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 124 + 108 | 0;
 if ((HEAP8[i2 + 116 | 0] & 1) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 144 >> 2] & 63](i2);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i2 = i1 - 124 + 108 | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 116 >> 2] & 1](i2) | 0;
 HEAP8[i3] = 1;
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 - 124 + 108 | 0;
 if ((HEAP8[i2 + 116 | 0] & 1) != 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 140 >> 2] & 63](i2);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_(i1 - 124 + 108 | 0, i2, i3);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
 HEAP8[i3] = 0;
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_(i1 - 124 + 108 | 0, 0, i3);
 return;
}
function iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE(i1 | 0, i2 | 0) | 0;
}
function __ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 116 | 0] & 1) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0;
 HEAP8[i3] = 1;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 116 | 0] & 1) != 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 140 >> 2] & 63](i1);
 return;
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 abort(4);
}
function vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE(i1 | 0, i2 | 0);
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE(i1 - 124 + 108 | 0, i2);
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE(i1 - 124 + 108 | 0, i2);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent24runningNestedMessageLoopEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 118 | 0] & 1) != 0 | 0;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE(i1 - 124 + 108 | 0, i2);
 return;
}
function iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE(i1 | 0, i2 | 0) | 0;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE(i1 - 124 + 108 | 0, i2);
 return;
}
function iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE(i1 | 0, i2 | 0) | 0;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 124 + 108 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZThn12_N7WebCore22InspectorDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 - 124 + 112 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i2);
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent8isPausedEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 1](i1) | 0) + 28 | 0] & 2) != 0 | 0;
}
function b8(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(8);
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
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function b0(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(0);
}
function vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector18InspectorArrayBase7asArrayEv(i1 | 0, i2 | 0);
}
function vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN9Inspector14InspectorValue8asObjectEv(i1 | 0, i2 | 0);
}
function __ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore22InspectorDebuggerAgentD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
}
function b1(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(1);
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN9Inspector18InspectorArrayBaseD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZThn16_N7WebCore22InspectorDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i1 - 124 + 108 | 0);
 return;
}
function __ZThn12_N7WebCore22InspectorDebuggerAgentD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22InspectorDebuggerAgentD2Ev(i1 - 124 + 112 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function b9(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(9);
}
function __ZN10Deprecated12ScriptObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 __ZdlPv(i1);
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
 FUNCTION_TABLE_vii[i1 & 63](i2 | 0, i3 | 0);
}
function __ZN10Deprecated12ScriptObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN10Deprecated11ScriptValueD2Ev(i1 | 0);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function b11(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(11);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function __ZN9Inspector18InspectorAgentBase12discardAgentEv(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function b10(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(10);
 return 0;
}
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b7() {
 abort(7);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiiiii = [b0,b0,__ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE,b0,__ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiii = [b1,b1,__ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE,b1,__ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE,b1,__ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE,b1,__ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv,b2,__ZN9Inspector18InspectorAgentBase12discardAgentEv,b2,__ZThn16_N7WebCore22InspectorDebuggerAgentD0Ev,b2,__ZN9Inspector18InspectorAgentBaseD0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED1Ev,b2,__ZN7WebCore22InspectorDebuggerAgent6enableEv,b2,__ZN7WebCore22InspectorDebuggerAgentD0Ev,b2,__ZThn12_N7WebCore22InspectorDebuggerAgentD1Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED0Ev,b2,__ZN9Inspector18InspectorAgentBaseD1Ev,b2,__ZThn12_N7WebCore22InspectorDebuggerAgentD0Ev,b2,__ZN7WebCore18InspectorAgentBaseD0Ev,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED1Ev,b2,__ZN7WebCore22InspectorDebuggerAgentD2Ev
  ,b2,__ZN7WebCore22InspectorDebuggerAgent11didContinueEv,b2,__ZN10Deprecated12ScriptObjectD0Ev,b2,__ZThn16_N7WebCore22InspectorDebuggerAgentD1Ev,b2,__ZN7WebCore18InspectorAgentBaseD1Ev,b2,__ZN7WebCore22InspectorDebuggerAgent7disableEv,b2,__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED0Ev,b2,__ZN10Deprecated12ScriptObjectD1Ev,b2,__ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE,b3,vii___ZN9Inspector14InspectorValue8asObjectEv__wrapper,b3,vii___ZNK9Inspector18InspectorArrayBase9writeJSONEPN3WTF13StringBuilderE__wrapper,b3,__ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE
  ,b3,vii___ZN9Inspector18InspectorArrayBase7asArrayEv__wrapper,b3,__ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE,b3,__ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viiiiiiiiiii = [b4,b4,__ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE,b4,__ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE,b4,b4,b4];
  var FUNCTION_TABLE_ii = [b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,__ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb,b6,__ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb,b6,__ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE,b6,__ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_,b6,__ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb,b6,__ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_,b6,__ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb,b6,__ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb,b6,__ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE
  ,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_,b6,__ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb,b6,__ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_,b6,__ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_v = [b7,b7,v____cxa_pure_virtual__wrapper,b7];
  var FUNCTION_TABLE_viiiiiiiii = [b8,b8,__ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE,b8,__ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE,b8,b8,b8];
  var FUNCTION_TABLE_viiiiii = [b9,b9,__ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_,b9,__ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_,b9,__ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE,b9,__ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_,b9,__ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE,b9,__ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_,b9,b9,b9];
  var FUNCTION_TABLE_iii = [b10,b10,iii___ZNK9Inspector14InspectorValue8asStringEPN3WTF6StringE__wrapper,b10,iii___ZNK9Inspector14InspectorValue8asNumberEPj__wrapper,b10,iii___ZNK9Inspector14InspectorValue8asNumberEPi__wrapper,b10,iii___ZNK9Inspector14InspectorValue8asNumberEPm__wrapper,b10,iii___ZNK9Inspector14InspectorValue8asNumberEPl__wrapper,b10,iii___ZNK9Inspector14InspectorValue8asNumberEPd__wrapper,b10,iii___ZN9Inspector18InspectorArrayBase7asArrayEPN3WTF6RefPtrINS_14InspectorArrayEEE__wrapper,b10,iii___ZN9Inspector14InspectorValue8asObjectEPN3WTF6RefPtrINS_15InspectorObjectEEE__wrapper,b10,iii___ZNK9Inspector14InspectorValue9asBooleanEPb__wrapper,b10,iii___ZN9Inspector14InspectorValue7asValueEPN3WTF6RefPtrIS0_EE__wrapper,b10,b10,b10,b10,b10,b10,b10,b10
  ,b10,b10,b10];
  var FUNCTION_TABLE_viiii = [b11,b11,__ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_,b11,__ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_,b11,__ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE,b11,__ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_,b11,__ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_,b11,__ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE,b11,b11,b11];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_viiiiiiiiiii: dynCall_viiiiiiiiiii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_viiiiiiiiiii": invoke_viiiiiiiiiii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN10Deprecated11ScriptValueE": __ZTVN10Deprecated11ScriptValueE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_viiiiiiiiiii = Module["dynCall_viiiiiiiiiii"] = asm["dynCall_viiiiiiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE","__ZN7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZThn16_N7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb","__ZThn12_N7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_","__ZN7WebCore22InspectorDebuggerAgent17clearBreakDetailsEv","__ZN7WebCore22InspectorDebuggerAgent19failedToParseSourceERKN3WTF6StringES4_iiS4_","__ZN7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE","__ZThn16_N7WebCore22InspectorDebuggerAgent9runScriptEPN3WTF6StringERKS2_PKiPS4_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSD_9OptOutputIbEE","__ZN7WebCore22InspectorDebuggerAgent11didContinueEv","__ZN7WebCore22InspectorDebuggerAgent24runningNestedMessageLoopEv","__ZN7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_","__ZThn16_N7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKjRS4_EENS_18HashTableAddResultINS_17HashTableIteratorIjS5_S7_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore22InspectorDebuggerAgent27scriptExecutionBlockedByCSPERKN3WTF6StringE","__ZN10Deprecated12ScriptObjectD0Ev","__ZThn16_N7WebCore22InspectorDebuggerAgentD0Ev","__ZN7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE","__ZN7WebCore22InspectorDebuggerAgent5resetEv","_memcpy","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrINS4_14InspectorArrayEEEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore22InspectorDebuggerAgent12breakProgramEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE","__ZN9Inspector18InspectorAgentBaseD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED1Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_RNS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore22InspectorDebuggerAgent29willDestroyFrontendAndBackendEv","__ZN7WebCore22InspectorDebuggerAgent6enableEv","__ZN7WebCore22InspectorDebuggerAgentD0Ev","__ZThn16_N7WebCore22InspectorDebuggerAgent13setBreakpointEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEEPS8_S3_RNS4_INS5_11TypeBuilder8Debugger8LocationEEE","__ZThn16_N7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb","__ZN3JSC6StrongINS_7UnknownEEC2ERKS2_","__ZThn12_N7WebCore22InspectorDebuggerAgentD1Ev","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E34removeWithoutEntryConsistencyCheckENS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EE","__ZN7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb","__ZN7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE","__ZN7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE","__ZThn16_N7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_","__ZN7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_","__ZN7WebCore22InspectorDebuggerAgent20setBreakpointsActiveEPN3WTF6StringEb","__ZN3WTF7HashMapIjN7WebCore19ScriptDebugListener6ScriptENS_7IntHashIjEENS_10HashTraitsIjEENS6_IS3_EEE4findERKj","__ZN7WebCore22InspectorDebuggerAgent18setBreakpointByUrlEPN3WTF6StringEiPKS2_S5_PKiPKNS1_6RefPtrIN9Inspector15InspectorObjectEEES3_RNS8_INS9_11TypeBuilder5ArrayINSE_8Debugger8LocationEEEEE","__ZN7WebCore22InspectorDebuggerAgent5clearEv","__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED0Ev","__ZN7WebCore22InspectorDebuggerAgent8isPausedEv","__ZThn16_N7WebCore22InspectorDebuggerAgent19evaluateOnCallFrameEPN3WTF6StringERKS2_S5_PS4_PKbS8_S8_S8_RNS1_6RefPtrIN9Inspector11TypeBuilder7Runtime12RemoteObjectEEEPNSB_9OptOutputIbEE","__ZThn16_N7WebCore22InspectorDebuggerAgent18continueToLocationEPN3WTF6StringERKNS1_6RefPtrIN9Inspector15InspectorObjectEEE","__ZThn16_N7WebCore22InspectorDebuggerAgent6resumeEPN3WTF6StringE","__ZThn16_N7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22InspectorDebuggerAgent19addMessageToConsoleENS_13MessageSourceENS_11MessageTypeE","__ZN9Inspector18InspectorAgentBase12discardAgentEv","__ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE14appendSlowCaseIS2_EEvOT_","__ZThn12_N7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE","__ZN9Inspector18InspectorAgentBaseD1Ev","__ZThn16_N7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_","__ZN7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE","__ZN7WebCore22InspectorDebuggerAgent14didParseSourceEjRKNS_19ScriptDebugListener6ScriptE","__ZN3WTF6VectorINS_6RefPtrIN9Inspector14InspectorValueEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22InspectorDebuggerAgent17resolveBreakpointERKN3WTF6StringEjRKNS_16ScriptBreakpointE","__ZThn16_N7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_","__ZN7WebCore22InspectorDebuggerAgent15searchInContentEPN3WTF6StringERKS2_S5_PKbS7_RNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_12GenericTypes11SearchMatchEEEEE","__ZN9Inspector19InspectorObjectBase8setValueERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorValueEEE","__ZN7WebCore19ScriptDebugListener6ScriptD2Ev","__ZN7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE","__ZN3WTF12StringAppendINS0_INS_6StringEcEES1_E7writeToEPt","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EERKS1_NS_10PassRefPtrIS5_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS1_S7_S9_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCoreL13parseLocationEPN3WTF6StringEPN9Inspector15InspectorObjectEPjS6_S6_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN3WTF6VectorIN7WebCore22ScriptBreakpointActionELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZThn16_N7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6removeEPS7_","__ZN9Inspector19InspectorObjectBase8setArrayERKN3WTF6StringENS1_10PassRefPtrINS_14InspectorArrayEEE","__ZN7WebCore22InspectorDebuggerAgent28schedulePauseOnNextStatementEN9Inspector35InspectorDebuggerFrontendDispatcher6Reason4EnumEN3WTF10PassRefPtrINS1_15InspectorObjectEEE","__ZThn12_N7WebCore22InspectorDebuggerAgentD0Ev","__ZN7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE","__ZN3WTF7HashMapINS_6StringENS_6VectorIjLj0ENS_15CrashOnOverflowEEENS_10StringHashENS_10HashTraitsIS1_EENS6_IS4_EEE4findERKS1_","__ZN7WebCore18InspectorAgentBaseD0Ev","__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger8LocationEED1Ev","__ZN3JSC6StrongINS_7UnknownEEaSERKS2_","__ZThn12_N7WebCore22InspectorDebuggerAgent8didPauseEPN3JSC9ExecStateERKN10Deprecated11ScriptValueES7_","_memset","__ZN7WebCore22InspectorDebuggerAgentC2EPNS_19InstrumentingAgentsEPN9Inspector21InjectedScriptManagerE","__ZN7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_","__ZN7WebCore22InspectorDebuggerAgent19causesRecompilationEPN3WTF6StringEPb","__ZN7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE","__ZThn16_N7WebCore22InspectorDebuggerAgent8stepOverEPN3WTF6StringE","__ZThn16_N7WebCore22InspectorDebuggerAgent8stepIntoEPN3WTF6StringE","__ZN7WebCore22InspectorDebuggerAgent17currentCallFramesEv","__ZN7WebCore22InspectorDebuggerAgentD2Ev","__ZThn16_N7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE","__ZN7WebCore19ScriptDebugListener6ScriptaSERKS1_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector14InspectorValueEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6expandEPS7_","__ZN7WebCore22InspectorDebuggerAgent15getScriptSourceEPN3WTF6StringERKS2_S3_","__ZN7WebCore22InspectorDebuggerAgent18canSetScriptSourceEPN3WTF6StringEPb","__ZN3WTF6VectorINS_6StringELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6RefPtrIN9Inspector15InspectorObjectEEEEENS_24KeyValuePairKeyExtractorIS7_EENS_10StringHashENS_7HashMapIS1_S6_SA_NS_10HashTraitsIS1_EENSC_IS6_EEE18KeyValuePairTraitsESD_E6rehashEiPS7_","_strlen","__ZN7WebCore22InspectorDebuggerAgent27didCreateFrontendAndBackendEPN9Inspector24InspectorFrontendChannelEPNS1_26InspectorBackendDispatcherE","__ZN7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE","__ZN3WTF13tryMakeStringIPKcNS_6StringEEENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZThn16_N7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE","__ZThn16_N7WebCore22InspectorDebuggerAgent7stepOutEPN3WTF6StringE","__ZThn16_N7WebCore22InspectorDebuggerAgent17setOverlayMessageEPN3WTF6StringEPKS2_","__ZThn16_N7WebCore22InspectorDebuggerAgent16removeBreakpointEPN3WTF6StringERKS2_","__ZThn16_N7WebCore22InspectorDebuggerAgent7disableEPN3WTF6StringE","__ZN7WebCore22InspectorDebuggerAgent18getFunctionDetailsEPN3WTF6StringERKS2_RNS1_6RefPtrIN9Inspector11TypeBuilder8Debugger15FunctionDetailsEEE","__ZN7WebCore22InspectorDebuggerAgent13compileScriptEPN3WTF6StringERKS2_S5_PN9Inspector11TypeBuilder9OptOutputIS2_EESA_","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN3WTF9HashTableIjNS_12KeyValuePairIjN7WebCore19ScriptDebugListener6ScriptEEENS_24KeyValuePairKeyExtractorIS5_EENS_7IntHashIjEENS_7HashMapIjS4_S9_NS_10HashTraitsIjEENSB_IS4_EEE18KeyValuePairTraitsESC_E6rehashEiPS5_","__ZN7WebCore22InspectorDebuggerAgent20setPauseOnExceptionsEPN3WTF6StringERKS2_","__ZThn16_N7WebCore22InspectorDebuggerAgentD1Ev","__ZThn16_N7WebCore22InspectorDebuggerAgent5pauseEPN3WTF6StringE","__ZN7WebCore18InspectorAgentBaseD1Ev","__ZN7WebCore22InspectorDebuggerAgent7disableEv","__ZN7WebCore22InspectorDebuggerAgent12assertPausedEPN3WTF6StringE","__ZN3WTF7HashMapINS_6StringENS_6RefPtrIN9Inspector15InspectorObjectEEENS_10StringHashENS_10HashTraitsIS1_EENS7_IS5_EEE6removeERKS1_","__ZThn16_N7WebCore22InspectorDebuggerAgent45supportsSeparateScriptCompilationAndExecutionEPN3WTF6StringEPb","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore22InspectorDebuggerAgent6enableEPN3WTF6StringE","__ZN3WTFplINS_12StringAppendINS1_INS_6StringEcEES2_EEcS2_EENS1_INS1_IT_T0_EET1_EERKS7_S8_","__ZN7WebCoreL29breakpointActionsFromProtocolEPN3WTF6StringERNS0_6RefPtrIN9Inspector14InspectorArrayEEEPNS0_6VectorINS_22ScriptBreakpointActionELj0ENS0_15CrashOnOverflowEEE","__ZThn16_N7WebCore22InspectorDebuggerAgent15setScriptSourceEPN3WTF6StringERKS2_S5_PKbRNS1_6RefPtrIN9Inspector11TypeBuilder5ArrayINSA_8Debugger9CallFrameEEEEERNS8_INS9_15InspectorObjectEEE","__ZN9Inspector11TypeBuilder5ArrayINS0_8Debugger9CallFrameEED0Ev","__ZNK3WTF12StringAppendINS0_INS0_INS0_INS_6StringEcEES1_EEcEES1_EcvS1_Ev","__ZN7WebCore22InspectorDebuggerAgent21sourceMapURLForScriptERKNS_19ScriptDebugListener6ScriptE","__ZN7WebCore22InspectorDebuggerAgent26cancelPauseOnNextStatementEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_NS_6VectorIjLj0ENS_15CrashOnOverflowEEEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","__ZN10Deprecated12ScriptObjectD1Ev","__ZN3WTF13tryMakeStringINS_12StringAppendINS1_INS1_INS_6StringEcEES2_EEcEES2_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZThn12_N7WebCore22InspectorDebuggerAgent11didContinueEv"]

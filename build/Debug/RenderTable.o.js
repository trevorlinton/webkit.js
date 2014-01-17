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
H_BASE = parentModule["_malloc"](1184 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1184;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11RenderTableC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore11RenderTableC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore11RenderTableD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,84,97,98,108,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames8tableTagE=env.__ZN7WebCore9HTMLNames8tableTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11RenderTableE=(H_BASE+24)|0;
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
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_viiiii=env.invoke_viiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
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
function __ZN7WebCore11RenderTable6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, d84 = +0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, d90 = +0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, d96 = +0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 104 | 0;
 i12 = i2 + 112 | 0;
 i13 = i2 + 120 | 0;
 i14 = i2 + 128 | 0;
 i15 = i2 + 136 | 0;
 i16 = i2 + 144 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i36 = i1 | 0;
 if (__ZN7WebCore11RenderBlock16simplifiedLayoutEv(i36) | 0) {
  STACKTOP = i2;
  return;
 }
 i37 = i1 + 176 | 0;
 if ((HEAP8[i37] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 HEAP32[i1 + 184 >> 2] = __ZNK7WebCore11RenderTable15calcBorderStartEv(i1) | 0;
 HEAP32[i1 + 188 >> 2] = __ZNK7WebCore11RenderTable13calcBorderEndEv(i1) | 0;
 i38 = i1 | 0;
 __ZN7WebCore15LayoutRepainterC1ERNS_13RenderElementEb(i10, i1 | 0, __ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i38) | 0);
 i39 = i1 + 4 | 0;
 i40 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i41 = i1 | 0;
 i42 = i1 + 44 | 0;
 i43 = i1 + 48 | 0;
 i44 = i1 + 20 | 0;
 if ((HEAP32[i44 >> 2] & 393216 | 0) == 0) {
  i45 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i46 = (i45 | 0) != 3 & (i45 | 0) != 1;
 } else {
  i46 = 0;
 }
 i45 = HEAP32[i43 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i42 >> 2];
 HEAP32[i9 + 4 >> 2] = i45;
 HEAP32[i8 >> 2] = 0;
 i45 = __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i40, i41, i9, i8, 0, 0) | 0;
 if (!(i46 | i45 ^ 1)) {
  i8 = i40 + 196 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 }
 i8 = i1 + 36 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) + 44 | 0;
 i47 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i47 | 0) == 3 | (i47 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = 0;
 } else {
  HEAP32[i1 + 52 >> 2] = 0;
 }
 i47 = (HEAP32[i9 >> 2] | 0) >>> 13 & 3;
 if ((i47 | 0) == 3 | (i47 | 0) == 0) {
  i48 = i1 + 52 | 0;
 } else {
  i48 = i1 + 56 | 0;
 }
 i47 = HEAP32[i48 >> 2] | 0;
 __ZN7WebCore11RenderTable18updateLogicalWidthEv(i1);
 i48 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i48 | 0) == 3 | (i48 | 0) == 0) {
  i49 = i1 + 52 | 0;
 } else {
  i49 = i1 + 56 | 0;
 }
 i48 = i1 + 128 | 0;
 do {
  if ((HEAP32[i49 >> 2] | 0) != (i47 | 0)) {
   if ((HEAP32[i48 >> 2] | 0) == 0) {
    break;
   }
   i9 = i1 + 120 | 0;
   i50 = 0;
   while (1) {
    i51 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i50 << 2) >> 2] | 0;
    i52 = i51 | 0;
    i53 = i51 + 20 | 0;
    i51 = HEAP32[i53 >> 2] | 0;
    do {
     if ((i51 & 1 | 0) == 0) {
      HEAP32[i53 >> 2] = i51 | 1;
      if ((i51 & 32768 | 0) == 0) {
       break;
      }
      __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i52);
     }
    } while (0);
    i50 = i50 + 1 | 0;
    if (i50 >>> 0 >= (HEAP32[i48 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
 } while (0);
 i47 = HEAP32[i1 + 156 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i47 >> 2] | 0) + 16 >> 2] & 63](i47);
 i47 = 0;
 i49 = i1 + 120 | 0;
 i50 = HEAP32[i48 >> 2] | 0;
 L35 : do {
  if ((i50 | 0) == 0) {
   i54 = 0;
  } else {
   i9 = i49 | 0;
   i52 = i11 | 0;
   i51 = i12 | 0;
   i53 = 0;
   i55 = i50;
   i56 = 0;
   while (1) {
    i57 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i53 << 2) >> 2] | 0;
    i58 = (HEAP32[(HEAP32[i57 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i58 | 0) == 3 | (i58 | 0) == 0) {
     i59 = i57 + 56 | 0;
    } else {
     i59 = i57 + 52 | 0;
    }
    if (i55 >>> 0 <= i53 >>> 0) {
     i60 = 30;
     break;
    }
    i61 = HEAP32[i59 >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i11, i57 + 60 | 0, i58);
    if ((HEAP32[i48 >> 2] | 0) >>> 0 <= i53 >>> 0) {
     i60 = 32;
     break;
    }
    i58 = (HEAP32[i52 >> 2] | 0) + i61 | 0;
    i61 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i53 << 2) >> 2] | 0;
    __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i12, i61 + 60 | 0, (HEAP32[(HEAP32[i61 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
    i61 = i58 + (HEAP32[i51 >> 2] | 0) + i56 | 0;
    i47 = i61;
    i58 = i53 + 1 | 0;
    i57 = HEAP32[i48 >> 2] | 0;
    if (i58 >>> 0 < i57 >>> 0) {
     i53 = i58;
     i55 = i57;
     i56 = i61;
    } else {
     i54 = i57;
     break L35;
    }
   }
   if ((i60 | 0) == 32) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i60 | 0) == 30) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i12 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0;
 i11 = i1 + 28 | 0;
 i59 = i11;
 while (1) {
  i62 = HEAP32[i59 >> 2] | 0;
  if ((i62 | 0) == 0) {
   i63 = 0;
   i64 = i54;
   break;
  }
  if ((HEAP32[i62 + 20 >> 2] & 768 | 0) == 256) {
   i59 = i62 + 16 | 0;
  } else {
   i60 = 37;
   break;
  }
 }
 if ((i60 | 0) == 37) {
  L54 : do {
   if (i12) {
    i59 = i62;
    i54 = 0;
    L55 : while (1) {
     i50 = i59;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 204 >> 2] & 511](i59) | 0) {
       i56 = i59;
       i55 = i59 + 20 | 0;
       i53 = HEAP32[i55 >> 2] | 0;
       do {
        if ((HEAP8[i37] & 8) == 0) {
         i65 = i53;
        } else {
         if ((i53 & 4 | 0) != 0) {
          i65 = i53;
          break;
         }
         i51 = i53 | 4;
         HEAP32[i55 >> 2] = i51;
         i65 = i51;
        }
       } while (0);
       if ((i65 & 31 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 652 >> 2] & 63](i59);
       }
       i55 = (__ZN7WebCore18RenderTableSection20calcRowLogicalHeightEv(i56) | 0) + i54 | 0;
       __ZN7WebCore18RenderTableSection17recalcOuterBorderEv(i56);
       i66 = i55;
      } else {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 192 >> 2] & 511](i59) | 0)) {
        i66 = i54;
        break;
       }
       if ((HEAP32[i59 + 20 >> 2] & 31 | 0) == 0) {
        i66 = i54;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i59 >> 2] | 0) + 652 >> 2] & 63](i59);
       i66 = i54;
      }
     } while (0);
     i50 = i59;
     while (1) {
      i55 = HEAP32[i50 + 16 >> 2] | 0;
      if ((i55 | 0) == 0) {
       i67 = i66;
       break L54;
      }
      if ((HEAP32[i55 + 20 >> 2] & 768 | 0) == 256) {
       i50 = i55;
      } else {
       i59 = i55;
       i54 = i66;
       continue L55;
      }
     }
    }
   } else {
    i54 = i62;
    i59 = 0;
    L73 : while (1) {
     i50 = i54;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 204 >> 2] & 511](i54) | 0) {
       i55 = i54;
       i53 = i54 + 20 | 0;
       i51 = HEAP32[i53 >> 2] | 0;
       do {
        if ((HEAP8[i37] & 8) == 0) {
         i68 = i51;
        } else {
         if ((i51 & 4 | 0) != 0) {
          i68 = i51;
          break;
         }
         i9 = i51 | 4;
         HEAP32[i53 >> 2] = i9;
         i68 = i9;
        }
       } while (0);
       if ((i68 & 31 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 652 >> 2] & 63](i54);
       }
       i69 = (__ZN7WebCore18RenderTableSection20calcRowLogicalHeightEv(i55) | 0) + i59 | 0;
      } else {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i50 >> 2] | 0) + 192 >> 2] & 511](i54) | 0)) {
        i69 = i59;
        break;
       }
       if ((HEAP32[i54 + 20 >> 2] & 31 | 0) == 0) {
        i69 = i59;
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 652 >> 2] & 63](i54);
       i69 = i59;
      }
     } while (0);
     i50 = i54;
     while (1) {
      i53 = HEAP32[i50 + 16 >> 2] | 0;
      if ((i53 | 0) == 0) {
       i67 = i69;
       break L54;
      }
      if ((HEAP32[i53 + 20 >> 2] & 768 | 0) == 256) {
       i50 = i53;
      } else {
       i54 = i53;
       i59 = i69;
       continue L73;
      }
     }
    }
   }
  } while (0);
  i63 = i67;
  i64 = HEAP32[i48 >> 2] | 0;
 }
 do {
  if ((i64 | 0) == 0) {
   i70 = 0;
   i71 = 0;
  } else {
   i67 = i49 | 0;
   i69 = 0;
   i68 = i64;
   while (1) {
    i62 = HEAP32[(HEAP32[i67 >> 2] | 0) + (i69 << 2) >> 2] | 0;
    if ((HEAP32[(HEAP32[i62 + 36 >> 2] | 0) + 40 >> 2] & 6 | 0) == 2) {
     i72 = i68;
    } else {
     __ZN7WebCore11RenderTable13layoutCaptionEPNS_18RenderTableCaptionE(i1, i62);
     i72 = HEAP32[i48 >> 2] | 0;
    }
    i62 = i69 + 1 | 0;
    if (i62 >>> 0 < i72 >>> 0) {
     i69 = i62;
     i68 = i72;
    } else {
     break;
    }
   }
   i68 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i68 | 0) == 3 | (i68 | 0) == 0) {
    i73 = i1 + 56 | 0;
   } else {
    i73 = i1 + 52 | 0;
   }
   i69 = i47;
   if ((HEAP32[i73 >> 2] | 0) == (i69 | 0)) {
    i70 = 0;
    i71 = 0;
    break;
   }
   if ((i68 | 0) == 3 | (i68 | 0) == 0) {
    i74 = i1 + 56 | 0;
   } else {
    i74 = i1 + 52 | 0;
   }
   i68 = HEAP32[i74 >> 2] | 0;
   i70 = 1;
   i71 = (i69 | 0) < (i68 | 0) ? i69 : i68;
  }
 } while (0);
 i74 = i1;
 i73 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i74 >> 2] | 0) + 752 >> 2] & 511](i1) | 0;
 if (i12) {
  HEAP32[i13 >> 2] = 0;
  i75 = 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i13, i1 | 0);
  i75 = HEAP32[i13 >> 2] | 0;
 }
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i74 >> 2] | 0) + 756 >> 2] & 511](i1) | 0;
 if (i12) {
  HEAP32[i14 >> 2] = 0;
  i76 = 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 724 >> 2] & 127](i14, i1 | 0);
  i76 = HEAP32[i14 >> 2] | 0;
 }
 i14 = i76 + i13 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 i76 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i76 | 0) == 3 | (i76 | 0) == 0) {
  i77 = i1 + 56 | 0;
 } else {
  i77 = i1 + 52 | 0;
 }
 i47 = i75 + i73 + (HEAP32[i77 >> 2] | 0) | 0;
 if ((i76 | 0) == 3 | (i76 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i47;
 } else {
  HEAP32[i1 + 52 >> 2] = i47;
 }
 if ((HEAP32[i44 >> 2] & 25165824 | 0) == 16777216) {
  i78 = i13;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i41);
  i78 = HEAP32[i8 >> 2] | 0;
 }
 HEAP32[i15 >> 2] = 0;
 i13 = (HEAP32[i78 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  i79 = (HEAP32[i78 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i79 = (HEAP32[i78 + 4 >> 2] | 0) + 4 | 0;
 }
 i78 = i79;
 i79 = HEAP32[i78 >> 2] | 0;
 i13 = HEAP32[i78 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = i79;
 HEAP32[i16 + 4 >> 2] = i13;
 if ((i79 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i17);
  i79 = i17 + 5 | 0;
  i80 = HEAP8[i79] | 0;
  i81 = i79;
 } else {
  i80 = (i13 >>> 8 | 0 << 24) & 255;
  i81 = i17 + 5 | 0;
 }
 i13 = i80 & 255;
 do {
  if ((i13 | 0) == 3 | (i13 | 0) == 2 | (i13 | 0) == 10) {
   i82 = i80;
   i60 = 101;
  } else {
   if ((i80 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i83 = 0;
    break;
   }
   i82 = HEAP8[i81] | 0;
   i60 = 101;
  }
 } while (0);
 do {
  if ((i60 | 0) == 101) {
   if ((i82 << 24 >> 24 | 0) == 15) {
    i83 = 0;
    break;
   } else if ((i82 << 24 >> 24 | 0) != 10) {
    if ((HEAP8[i17 + 6 | 0] & 1) == 0) {
     d84 = +(HEAP32[i16 >> 2] | 0);
    } else {
     d84 = +HEAPF32[i16 >> 2];
    }
    if (d84 <= +0) {
     i83 = 0;
     break;
    }
   }
   __ZN7WebCore11RenderTable41convertStyleLogicalHeightToComputedHeightERKNS_6LengthE(i18, i1, i17);
   i80 = HEAP32[i18 >> 2] | 0;
   HEAP32[i15 >> 2] = i80;
   i83 = i80;
  }
 } while (0);
 i18 = HEAP32[i8 >> 2] | 0;
 i16 = (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  i85 = (HEAP32[i18 + 4 >> 2] | 0) + 44 | 0;
 } else {
  i85 = (HEAP32[i18 + 4 >> 2] | 0) + 28 | 0;
 }
 i18 = i85;
 i85 = HEAP32[i18 >> 2] | 0;
 i16 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i19 >> 2] = i85;
 HEAP32[i19 + 4 >> 2] = i16;
 if ((i85 & 0 | 0) == 0 & (i16 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
  i85 = i20 + 5 | 0;
  i86 = HEAP8[i85] | 0;
  i87 = i85;
 } else {
  i86 = (i16 >>> 8 | 0 << 24) & 255;
  i87 = i20 + 5 | 0;
 }
 i16 = i86 & 255;
 do {
  if ((i16 | 0) == 3 | (i16 | 0) == 2 | (i16 | 0) == 10) {
   i88 = i86;
   i60 = 116;
  } else {
   if ((i86 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i89 = i83;
    break;
   }
   i88 = HEAP8[i87] | 0;
   i60 = 116;
  }
 } while (0);
 do {
  if ((i60 | 0) == 116) {
   if (!((i88 << 24 >> 24 | 0) == 15 | (i88 << 24 >> 24 | 0) == 10)) {
    if ((HEAP8[i20 + 6 | 0] & 1) == 0) {
     d90 = +(HEAP32[i19 >> 2] | 0);
    } else {
     d90 = +HEAPF32[i19 >> 2];
    }
    if (d90 < +0) {
     i89 = i83;
     break;
    }
   }
   __ZN7WebCore11RenderTable41convertStyleLogicalHeightToComputedHeightERKNS_6LengthE(i21, i1, i20);
   i86 = HEAP32[((HEAP32[i21 >> 2] | 0) < (i83 | 0) ? i21 : i15) >> 2] | 0;
   HEAP32[i15 >> 2] = i86;
   i89 = i86;
  }
 } while (0);
 i21 = HEAP32[i8 >> 2] | 0;
 i83 = (HEAP32[i21 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i83 | 0) == 3 | (i83 | 0) == 0) {
  i91 = (HEAP32[i21 + 4 >> 2] | 0) + 36 | 0;
 } else {
  i91 = (HEAP32[i21 + 4 >> 2] | 0) + 20 | 0;
 }
 i21 = i91;
 i91 = HEAP32[i21 >> 2] | 0;
 i83 = HEAP32[i21 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = i91;
 HEAP32[i22 + 4 >> 2] = i83;
 if ((i91 & 0 | 0) == 0 & (i83 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i23);
  i91 = i23 + 5 | 0;
  i92 = HEAP8[i91] | 0;
  i93 = i91;
 } else {
  i92 = (i83 >>> 8 | 0 << 24) & 255;
  i93 = i23 + 5 | 0;
 }
 i83 = i92 & 255;
 do {
  if ((i83 | 0) == 3 | (i83 | 0) == 2 | (i83 | 0) == 10) {
   i94 = i92;
   i60 = 131;
  } else {
   if ((i92 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i95 = i89;
    break;
   }
   i94 = HEAP8[i93] | 0;
   i60 = 131;
  }
 } while (0);
 do {
  if ((i60 | 0) == 131) {
   if (!((i94 << 24 >> 24 | 0) == 15 | (i94 << 24 >> 24 | 0) == 10)) {
    if ((HEAP8[i23 + 6 | 0] & 1) == 0) {
     d96 = +(HEAP32[i22 >> 2] | 0);
    } else {
     d96 = +HEAPF32[i22 >> 2];
    }
    if (d96 < +0) {
     i95 = i89;
     break;
    }
   }
   __ZN7WebCore11RenderTable41convertStyleLogicalHeightToComputedHeightERKNS_6LengthE(i24, i1, i23);
   i92 = HEAP32[((i89 | 0) < (HEAP32[i24 >> 2] | 0) ? i24 : i15) >> 2] | 0;
   HEAP32[i15 >> 2] = i92;
   i95 = i92;
  }
 } while (0);
 i15 = i95 - i63 | 0;
 do {
  if ((i15 | 0) >= 1) {
   i24 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i24 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderTableSection34distributeExtraLogicalHeightToRowsEi(i24, i15) | 0;
  }
 } while (0);
 i15 = i1 + 144 | 0;
 i24 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i24 | 0) == 0) {
   i89 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i89 | 0) != 0) {
    i97 = i89;
    i60 = 143;
    break;
   }
   i89 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i89 | 0) == 0) {
    i98 = i24;
   } else {
    i97 = i89;
    i60 = 143;
   }
  } else {
   i97 = i24;
   i60 = 143;
  }
 } while (0);
 if ((i60 | 0) == 143) {
  i24 = i1 + 148 | 0;
  i89 = i97;
  while (1) {
   __ZN7WebCore18RenderTableSection10layoutRowsEv(i89);
   if ((HEAP8[i37] & 4) != 0) {
    __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
   }
   i97 = HEAP32[i24 >> 2] | 0;
   if ((i97 | 0) == (i89 | 0)) {
    break;
   }
   i22 = HEAP32[((HEAP32[i15 >> 2] | 0) == (i89 | 0) ? i11 : i89 + 16 | 0) >> 2] | 0;
   L208 : do {
    if ((i22 | 0) == 0) {
     i99 = i97;
     i60 = 154;
    } else {
     i94 = i22;
     while (1) {
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i94 >> 2] | 0) + 204 >> 2] & 511](i94) | 0) {
        if ((i94 | 0) == (HEAP32[i15 >> 2] | 0)) {
         break;
        }
        if ((i94 | 0) != (HEAP32[i24 >> 2] | 0)) {
         i100 = i94;
         break L208;
        }
       }
      } while (0);
      i94 = HEAP32[i94 + 16 >> 2] | 0;
      if ((i94 | 0) == 0) {
       break;
      }
     }
     i99 = HEAP32[i24 >> 2] | 0;
     i60 = 154;
    }
   } while (0);
   if ((i60 | 0) == 154) {
    i60 = 0;
    i100 = i99 | 0;
   }
   if ((i100 | 0) == 0) {
    break;
   } else {
    i89 = i100;
   }
  }
  i98 = HEAP32[i15 >> 2] | 0;
 }
 do {
  if ((i98 | 0) == 0) {
   if ((HEAP32[i1 + 152 >> 2] | 0) != 0) {
    break;
   }
   if (!((HEAP32[i1 + 148 >> 2] | 0) == 0 & (i95 | 0) > (i63 | 0))) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
    break;
   }
   i100 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i100 | 0) == 3 | (i100 | 0) == 0) {
    i101 = i1 + 56 | 0;
   } else {
    i101 = i1 + 52 | 0;
   }
   i89 = i95 + (HEAP32[i101 >> 2] | 0) | 0;
   if ((i100 | 0) == 3 | (i100 | 0) == 0) {
    HEAP32[i1 + 56 >> 2] = i89;
    break;
   } else {
    HEAP32[i1 + 52 >> 2] = i89;
    break;
   }
  }
 } while (0);
 i101 = HEAP32[i74 >> 2] | 0;
 if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
  i102 = FUNCTION_TABLE_ii[HEAP32[i101 + 764 >> 2] & 511](i1) | 0;
 } else {
  i102 = FUNCTION_TABLE_ii[HEAP32[i101 + 760 >> 2] & 511](i1) | 0;
 }
 if (i12) {
  i103 = i102;
 } else {
  i12 = HEAP32[i8 >> 2] | 0;
  i101 = HEAP32[i12 + 40 >> 2] | 0;
  if ((i101 & 1073741824 | 0) == 0) {
   i74 = i5;
   i95 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i12 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3, i101 >>> 30 & 1) | 0;
   i63 = HEAP32[i95 >> 2] | 0;
   i98 = HEAP32[i95 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = i63;
   HEAP32[i5 + 4 >> 2] = i98;
   if ((i63 & 0 | 0) == 0 & (i98 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i74);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i6, i1 | 0, i74);
   if ((HEAP8[i74 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i74);
   }
   i104 = HEAP32[i6 >> 2] | 0;
  } else {
   i6 = i3;
   i74 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i12 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3, i101 >>> 30 & 1) | 0;
   i101 = HEAP32[i74 >> 2] | 0;
   i12 = HEAP32[i74 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i101;
   HEAP32[i3 + 4 >> 2] = i12;
   if ((i101 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
   }
   __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i4, i1 | 0, i6);
   if ((HEAP8[i6 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
   }
   i104 = HEAP32[i4 >> 2] | 0;
  }
  i103 = i104 + i102 | 0;
 }
 i102 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i102 | 0) == 0) {
   i104 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i104 | 0) != 0) {
    i105 = i104;
    i60 = 185;
    break;
   }
   i104 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i104 | 0) == 0) {
    i106 = i70;
    i107 = i71;
   } else {
    i105 = i104;
    i60 = 185;
   }
  } else {
   i105 = i102;
   i60 = 185;
  }
 } while (0);
 L260 : do {
  if ((i60 | 0) == 185) {
   i102 = i1 + 52 | 0;
   i104 = i103;
   i4 = 0;
   i6 = 0;
   i12 = i104;
   i101 = i1 + 148 | 0;
   i3 = i1 + 56 | 0;
   i74 = i71;
   i98 = i70;
   i63 = i105;
   while (1) {
    do {
     if (i98) {
      i108 = 1;
      i109 = i74;
      i110 = HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0;
     } else {
      i5 = i63 + 36 | 0;
      i95 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i95 | 0) == 3 | (i95 | 0) == 0) {
       i111 = i63 + 48 | 0;
      } else {
       i111 = i63 + 44 | 0;
      }
      i95 = HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0;
      i89 = i95 >>> 13 & 3;
      if ((i89 | 0) == 3 | (i89 | 0) == 0) {
       i112 = i3;
      } else {
       i112 = i102;
      }
      if ((HEAP32[i111 >> 2] | 0) == (HEAP32[i112 >> 2] | 0)) {
       i108 = 0;
       i109 = i74;
       i110 = i95;
       break;
      }
      if ((i89 | 0) == 3 | (i89 | 0) == 0) {
       i113 = i3;
      } else {
       i113 = i102;
      }
      i100 = HEAP32[i113 >> 2] | 0;
      i99 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
      if ((i99 | 0) == 3 | (i99 | 0) == 0) {
       i114 = i63 + 48 | 0;
      } else {
       i114 = i63 + 44 | 0;
      }
      i99 = HEAP32[i114 >> 2] | 0;
      i5 = (i99 | 0) < (i100 | 0);
      do {
       if ((i89 | 0) == 3 | (i89 | 0) == 0) {
        i24 = HEAP32[i63 + 88 >> 2] | 0;
        if ((i24 | 0) == 0) {
         i115 = 0;
         break;
        }
        i115 = HEAP32[i24 + 24 >> 2] | 0;
       } else {
        i24 = HEAP32[i63 + 88 >> 2] | 0;
        if ((i24 | 0) == 0) {
         i115 = 0;
         break;
        }
        i115 = HEAP32[i24 + 20 >> 2] | 0;
       }
      } while (0);
      i108 = 1;
      i109 = (i5 ? i99 : i100) + i115 | 0;
      i110 = i95;
     }
    } while (0);
    i89 = i110 >>> 13 & 3;
    if ((i89 | 0) == 3 | (i89 | 0) == 0) {
     i116 = i3;
    } else {
     i116 = i102;
    }
    i89 = HEAP32[i116 >> 2] | 0;
    i24 = (HEAP32[i63 + 36 >> 2] | 0) + 44 | 0;
    i22 = (HEAP32[i24 >> 2] | 0) >>> 13 & 3;
    if ((i22 | 0) == 3 | (i22 | 0) == 0) {
     i22 = i63 + 44 | 0;
     HEAP32[i22 >> 2] = i104;
     HEAP32[i22 + 4 >> 2] = i89 | i4;
    } else {
     i22 = i63 + 44 | 0;
     HEAP32[i22 >> 2] = i89 | i6;
     HEAP32[i22 + 4 >> 2] = i12;
    }
    i22 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i22 | 0) == 3 | (i22 | 0) == 0) {
     i117 = i3;
    } else {
     i117 = i102;
    }
    i89 = (HEAP32[i24 >> 2] | 0) >>> 13 & 3;
    if ((i89 | 0) == 3 | (i89 | 0) == 0) {
     i118 = i63 + 56 | 0;
    } else {
     i118 = i63 + 52 | 0;
    }
    i89 = (HEAP32[i118 >> 2] | 0) + (HEAP32[i117 >> 2] | 0) | 0;
    if ((i22 | 0) == 3 | (i22 | 0) == 0) {
     HEAP32[i3 >> 2] = i89;
    } else {
     HEAP32[i102 >> 2] = i89;
    }
    if ((HEAP8[i37] & 4) != 0) {
     __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
    }
    i89 = HEAP32[i101 >> 2] | 0;
    if ((i89 | 0) == (i63 | 0)) {
     i106 = i108;
     i107 = i109;
     break L260;
    }
    i22 = HEAP32[((HEAP32[i15 >> 2] | 0) == (i63 | 0) ? i11 : i63 + 16 | 0) >> 2] | 0;
    L311 : do {
     if ((i22 | 0) == 0) {
      i119 = i89;
      i60 = 228;
     } else {
      i24 = i22;
      while (1) {
       do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 204 >> 2] & 511](i24) | 0) {
         if ((i24 | 0) == (HEAP32[i15 >> 2] | 0)) {
          break;
         }
         if ((i24 | 0) != (HEAP32[i101 >> 2] | 0)) {
          i120 = i24;
          break L311;
         }
        }
       } while (0);
       i24 = HEAP32[i24 + 16 >> 2] | 0;
       if ((i24 | 0) == 0) {
        break;
       }
      }
      i119 = HEAP32[i101 >> 2] | 0;
      i60 = 228;
     }
    } while (0);
    if ((i60 | 0) == 228) {
     i60 = 0;
     i120 = i119 | 0;
    }
    if ((i120 | 0) == 0) {
     i106 = i108;
     i107 = i109;
     break;
    } else {
     i74 = i109;
     i98 = i108;
     i63 = i120;
    }
   }
  }
 } while (0);
 i120 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i120 | 0) == 3 | (i120 | 0) == 0) {
  i121 = i1 + 56 | 0;
 } else {
  i121 = i1 + 52 | 0;
 }
 i108 = i14 + (HEAP32[i121 >> 2] | 0) | 0;
 if ((i120 | 0) == 3 | (i120 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i108;
 } else {
  HEAP32[i1 + 52 >> 2] = i108;
 }
 i108 = HEAP32[i48 >> 2] | 0;
 if ((i108 | 0) != 0) {
  i120 = i49 | 0;
  i49 = 0;
  i121 = i108;
  while (1) {
   i108 = HEAP32[(HEAP32[i120 >> 2] | 0) + (i49 << 2) >> 2] | 0;
   if ((HEAP32[(HEAP32[i108 + 36 >> 2] | 0) + 40 >> 2] & 6 | 0) == 2) {
    __ZN7WebCore11RenderTable13layoutCaptionEPNS_18RenderTableCaptionE(i1, i108);
    i122 = HEAP32[i48 >> 2] | 0;
   } else {
    i122 = i121;
   }
   i108 = i49 + 1 | 0;
   if (i108 >>> 0 < i122 >>> 0) {
    i49 = i108;
    i121 = i122;
   } else {
    break;
   }
  }
 }
 if ((HEAP32[i44 >> 2] & 25165824 | 0) == 16777216) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i41);
 }
 __ZN7WebCore11RenderBlock23layoutPositionedObjectsEbb(i36, 1, 0);
 __ZN7WebCore9RenderBox20updateLayerTransformEv(i41);
 HEAP8[i37] = HEAP8[i37] & -2;
 i44 = i1 + 164 | 0;
 do {
  if ((HEAP32[i44 >> 2] | 0) != 0) {
   i122 = i1 + 168 | 0;
   if ((HEAP32[i122 >> 2] | 0) != 0) {
    HEAP32[i122 >> 2] = 0;
   }
   i122 = i1 + 160 | 0;
   i121 = HEAP32[i122 >> 2] | 0;
   if ((i121 | 0) == 0) {
    break;
   }
   HEAP32[i122 >> 2] = 0;
   HEAP32[i44 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i121);
  }
 } while (0);
 i44 = HEAP32[i1 >> 2] | 0;
 i121 = HEAP32[i44 + 1048 >> 2] | 0;
 i122 = FUNCTION_TABLE_ii[HEAP32[i44 + 752 >> 2] & 511](i1 | 0) | 0;
 i44 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i44 | 0) == 3 | (i44 | 0) == 0) {
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i41);
 } else {
  __ZNK7WebCore9RenderBox11clientWidthEv(i7, i41);
 }
 HEAP32[i25 >> 2] = (HEAP32[i7 >> 2] | 0) + i122;
 FUNCTION_TABLE_viii[i121 & 63](i36, i25, 0);
 do {
  if (i45) {
   i25 = i40 + 192 | 0;
   i121 = (HEAP32[i25 >> 2] | 0) + 12 | 0;
   i122 = HEAP32[i121 >> 2] | 0;
   HEAP32[i121 >> 2] = 0;
   i121 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = i122;
   if ((i121 | 0) != 0) {
    __ZN7WebCore11LayoutStateD1Ev(i121);
    __ZdlPv(i121 | 0);
   }
   __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i40);
   if (i46) {
    break;
   }
   i121 = i40 + 196 | 0;
   HEAP32[i121 >> 2] = (HEAP32[i121 >> 2] | 0) - 1;
  }
 } while (0);
 i40 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i39 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((HEAP32[i40 + 60 >> 2] | 0) != 0) {
  i39 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i39 | 0) == 3 | (i39 | 0) == 0) {
   HEAP32[i27 >> 2] = HEAP32[i43 >> 2];
  } else {
   HEAP32[i27 >> 2] = HEAP32[i42 >> 2];
  }
  __ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE(i26, i40, i41, i27);
  __ZN7WebCore11RenderBlock20setPageLogicalOffsetENS_10LayoutUnitE(i36, i26);
 }
 do {
  if (!(__ZN7WebCore15LayoutRepainter18repaintAfterLayoutEv(i10) | 0 | i106 ^ 1)) {
   i26 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i26 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i29, i41);
    i36 = HEAP32[i29 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i30, i41);
    i27 = HEAP32[i30 + 8 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i31, i41);
    i26 = (HEAP32[i31 + 4 >> 2] | 0) - i107 + (HEAP32[i31 + 12 >> 2] | 0) | 0;
    HEAP32[i28 >> 2] = i36;
    HEAP32[i28 + 4 >> 2] = i107;
    HEAP32[i28 + 8 >> 2] = i27;
    HEAP32[i28 + 12 >> 2] = i26;
    __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i38, i28, 0);
    break;
   } else {
    i26 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i33, i41);
    i27 = HEAP32[i33 + 4 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i34, i41);
    i36 = (HEAP32[i34 >> 2] | 0) - i107 + (HEAP32[i34 + 8 >> 2] | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i26 >> 2] | 0) + 824 >> 2] & 127](i35, i41);
    i26 = HEAP32[i35 + 12 >> 2] | 0;
    HEAP32[i32 >> 2] = i107;
    HEAP32[i32 + 4 >> 2] = i27;
    HEAP32[i32 + 8 >> 2] = i36;
    HEAP32[i32 + 12 >> 2] = i26;
    __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i38, i32, 0);
    break;
   }
  }
 } while (0);
 HEAP8[i37] = HEAP8[i37] & -9;
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i38);
 if ((HEAP8[i93] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
 }
 if ((HEAP8[i87] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i20);
 }
 if ((HEAP8[i81] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderTable18updateLogicalWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, d58 = +0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, d66 = +0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, d73 = +0, i74 = 0, i75 = 0, i76 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
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
 i16 = i2 + 120 | 0;
 i17 = i2 + 128 | 0;
 i18 = i2 + 136 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = i29;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = i33;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i43 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 16777216) {
  _memset(i15 | 0, 0, 24) | 0;
  i44 = i1 | 0;
  __ZNK7WebCore9RenderBox29computePositionedLogicalWidthERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i44, i15, 0);
  i45 = HEAP32[i15 >> 2] | 0;
  i46 = i1 + 36 | 0;
  i47 = HEAP32[i46 >> 2] | 0;
  i48 = i47 + 44 | 0;
  i49 = (HEAP32[i48 >> 2] | 0) >>> 13 & 3;
  if ((i49 | 0) == 3 | (i49 | 0) == 0) {
   HEAP32[i1 + 52 >> 2] = i45;
  } else {
   HEAP32[i1 + 56 >> 2] = i45;
  }
  i45 = HEAP32[i15 + 4 >> 2] | 0;
  i49 = (HEAP32[i48 >> 2] | 0) >>> 13 & 3;
  if ((i49 | 0) == 3 | (i49 | 0) == 0) {
   HEAP32[i1 + 44 >> 2] = i45;
  } else {
   HEAP32[i1 + 48 >> 2] = i45;
  }
  i45 = i1 + 60 | 0;
  i49 = (HEAP32[i48 >> 2] | 0) >>> 13 & 3;
  i48 = (HEAP32[i47 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i13 >> 2] = HEAP32[i15 + 16 >> 2];
  __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i45, i49, i48, i13);
  i13 = HEAP32[i46 >> 2] | 0;
  i48 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
  i49 = (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i12 >> 2] = HEAP32[i15 + 20 >> 2];
  __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i45, i48, i49, i12);
  i50 = i44;
  i51 = i46;
 } else {
  i50 = i1 | 0;
  i51 = i1 + 36 | 0;
 }
 i46 = __ZNK7WebCore12RenderObject15containingBlockEv(i43) | 0;
 i43 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 800 >> 2] & 127](i16, i50);
 i44 = i46 + 36 | 0;
 i12 = (HEAP32[(HEAP32[i44 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i49 = HEAP32[i51 >> 2] | 0;
 i48 = (HEAP32[i49 + 44 >> 2] | 0) >>> 13 & 3;
 i45 = ((i12 | 0) == 0 | (i12 | 0) == 3) ^ ((i48 | 0) == 0 | (i48 | 0) == 3);
 if (i45) {
  __ZNK7WebCore9RenderBox41perpendicularContainingBlockLogicalHeightEv(i17, i50);
  i52 = HEAP32[i51 >> 2] | 0;
 } else {
  HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
  i52 = i49;
 }
 i49 = (HEAP32[i52 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i49 | 0) == 3 | (i49 | 0) == 0) {
  i53 = (HEAP32[i52 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i53 = (HEAP32[i52 + 4 >> 2] | 0) + 12 | 0;
 }
 i52 = i53;
 i53 = HEAP32[i52 >> 2] | 0;
 i49 = HEAP32[i52 + 4 >> 2] | 0;
 HEAP32[i18 >> 2] = i53;
 HEAP32[i18 + 4 >> 2] = i49;
 if ((i53 & 0 | 0) == 0 & (i49 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i19);
  i53 = i19 + 5 | 0;
  i54 = HEAP8[i53] | 0;
  i55 = i53;
 } else {
  i54 = (i49 >>> 8 | 0 << 24) & 255;
  i55 = i19 + 5 | 0;
 }
 i49 = i54 & 255;
 do {
  if ((i49 | 0) == 3 | (i49 | 0) == 2 | (i49 | 0) == 10) {
   i56 = i54;
   i57 = 24;
  } else {
   if ((i54 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i57 = 29;
    break;
   }
   i56 = HEAP8[i55] | 0;
   i57 = 24;
  }
 } while (0);
 do {
  if ((i57 | 0) == 24) {
   if ((i56 << 24 >> 24 | 0) == 15) {
    i57 = 29;
    break;
   } else if ((i56 << 24 >> 24 | 0) == 10) {
    i57 = 30;
    break;
   }
   if ((HEAP8[i19 + 6 | 0] & 1) == 0) {
    d58 = +(HEAP32[i18 >> 2] | 0);
   } else {
    d58 = +HEAPF32[i18 >> 2];
   }
   if (d58 > +0) {
    i57 = 30;
   } else {
    i57 = 29;
   }
  }
 } while (0);
 do {
  if ((i57 | 0) == 29) {
   if (((HEAPU8[i55] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
    i57 = 30;
    break;
   }
   i18 = HEAP32[i51 >> 2] | 0;
   i56 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i18 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i18 + 40 >> 2] | 0) >>> 30 & 1) | 0;
   i18 = i16 | 0;
   HEAP32[i4 >> 2] = HEAP32[i18 >> 2];
   i54 = i1 + 4 | 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i22, i56, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i56 = HEAP32[i51 >> 2] | 0;
   i49 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i56 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i56 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i56 + 40 >> 2] | 0) >>> 30 & 1) | 0;
   HEAP32[i3 >> 2] = HEAP32[i18 >> 2];
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i49, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i54 = i22 | 0;
   i49 = i23 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - ((HEAP32[i49 >> 2] | 0) + (HEAP32[i54 >> 2] | 0)) | 0;
   i56 = (i18 | 0) > 0 ? i18 : 0;
   do {
    if (__ZNK7WebCore9RenderBox19shrinkToAvoidFloatsEv(i50) | 0) {
     if (i45 | (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 1024 >> 2] & 511](i46) | 0) ^ 1) {
      i59 = i56;
      break;
     }
     HEAP32[i25 >> 2] = HEAP32[i54 >> 2];
     HEAP32[i26 >> 2] = HEAP32[i49 >> 2];
     __ZNK7WebCore9RenderBox31shrinkLogicalWidthToAvoidFloatsENS_10LayoutUnitES1_PKNS_11RenderBlockEPNS_12RenderRegionE(i24, i50, i25, i26, i46, 0);
     i59 = HEAP32[i24 >> 2] | 0;
    } else {
     i59 = i56;
    }
   } while (0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 488 >> 2] & 127](i27, i50);
   i56 = HEAP32[i27 >> 2] | 0;
   i49 = (i56 | 0) < (i59 | 0) ? i56 : i59;
   i56 = HEAP32[i51 >> 2] | 0;
   i54 = (HEAP32[i56 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i54 | 0) == 3 | (i54 | 0) == 0) {
    HEAP32[i1 + 52 >> 2] = i49;
    i60 = i56;
    break;
   } else {
    HEAP32[i1 + 56 >> 2] = i49;
    i60 = i56;
    break;
   }
  }
 } while (0);
 do {
  if ((i57 | 0) == 30) {
   HEAP32[i21 >> 2] = HEAP32[i17 >> 2];
   __ZN7WebCore11RenderTable39convertStyleLogicalWidthToComputedWidthERKNS_6LengthENS_10LayoutUnitE(i20, i1, i19, i21);
   i59 = HEAP32[i20 >> 2] | 0;
   i27 = HEAP32[i51 >> 2] | 0;
   i24 = (HEAP32[i27 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i24 | 0) == 3 | (i24 | 0) == 0) {
    HEAP32[i1 + 52 >> 2] = i59;
    i60 = i27;
    break;
   } else {
    HEAP32[i1 + 56 >> 2] = i59;
    i60 = i27;
    break;
   }
  }
 } while (0);
 i20 = (HEAP32[i60 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i20 | 0) == 3 | (i20 | 0) == 0) {
  i61 = i1 + 52 | 0;
 } else {
  i61 = i1 + 56 | 0;
 }
 i20 = HEAP32[i61 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 484 >> 2] & 127](i28, i50);
 i43 = HEAP32[i28 >> 2] | 0;
 i28 = (i20 | 0) < (i43 | 0) ? i43 : i20;
 i20 = HEAP32[i51 >> 2] | 0;
 i43 = i20 + 44 | 0;
 i61 = (HEAP32[i43 >> 2] | 0) >>> 13 & 3;
 if ((i61 | 0) == 3 | (i61 | 0) == 0) {
  HEAP32[i1 + 52 >> 2] = i28;
 } else {
  HEAP32[i1 + 56 >> 2] = i28;
 }
 i28 = (HEAP32[i43 >> 2] | 0) >>> 13 & 3;
 if ((i28 | 0) == 3 | (i28 | 0) == 0) {
  i62 = (HEAP32[i20 + 4 >> 2] | 0) + 28 | 0;
 } else {
  i62 = (HEAP32[i20 + 4 >> 2] | 0) + 44 | 0;
 }
 i20 = i62;
 i62 = HEAP32[i20 >> 2] | 0;
 i28 = HEAP32[i20 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = i62;
 HEAP32[i29 + 4 >> 2] = i28;
 if ((i62 & 0 | 0) == 0 & (i28 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
  i62 = i30 + 5 | 0;
  i63 = HEAP8[i62] | 0;
  i64 = i62;
 } else {
  i63 = (i28 >>> 8 | 0 << 24) & 255;
  i64 = i30 + 5 | 0;
 }
 i28 = i63 & 255;
 do {
  if ((i28 | 0) == 3 | (i28 | 0) == 2 | (i28 | 0) == 10) {
   i65 = i63;
   i57 = 54;
  } else {
   if ((i63 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i57 = 59;
    break;
   }
   i65 = HEAP8[i64] | 0;
   i57 = 54;
  }
 } while (0);
 do {
  if ((i57 | 0) == 54) {
   if ((i65 << 24 >> 24 | 0) == 15 | (i65 << 24 >> 24 | 0) == 10) {
    i57 = 61;
    break;
   }
   if ((HEAP8[i30 + 6 | 0] & 1) == 0) {
    d66 = +(HEAP32[i29 >> 2] | 0);
   } else {
    d66 = +HEAPF32[i29 >> 2];
   }
   if (d66 < +0) {
    i57 = 59;
   } else {
    i57 = 61;
   }
  }
 } while (0);
 do {
  if ((i57 | 0) == 59) {
   if (((HEAPU8[i64] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
    i57 = 61;
    break;
   }
   i67 = HEAP32[i51 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i57 | 0) == 61) {
   HEAP32[i32 >> 2] = HEAP32[i16 >> 2];
   __ZN7WebCore11RenderTable39convertStyleLogicalWidthToComputedWidthERKNS_6LengthENS_10LayoutUnitE(i31, i1, i30, i32);
   i29 = HEAP32[i51 >> 2] | 0;
   i65 = (HEAP32[i29 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i65 | 0) == 3 | (i65 | 0) == 0) {
    i68 = i1 + 52 | 0;
   } else {
    i68 = i1 + 56 | 0;
   }
   i63 = HEAP32[i68 >> 2] | 0;
   i28 = HEAP32[i31 >> 2] | 0;
   i62 = (i28 | 0) < (i63 | 0) ? i28 : i63;
   if ((i65 | 0) == 3 | (i65 | 0) == 0) {
    HEAP32[i1 + 52 >> 2] = i62;
    i67 = i29;
    break;
   } else {
    HEAP32[i1 + 56 >> 2] = i62;
    i67 = i29;
    break;
   }
  }
 } while (0);
 i31 = (HEAP32[i67 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i31 | 0) == 3 | (i31 | 0) == 0) {
  i69 = (HEAP32[i67 + 4 >> 2] | 0) + 20 | 0;
 } else {
  i69 = (HEAP32[i67 + 4 >> 2] | 0) + 36 | 0;
 }
 i67 = i69;
 i69 = HEAP32[i67 >> 2] | 0;
 i31 = HEAP32[i67 + 4 >> 2] | 0;
 HEAP32[i33 >> 2] = i69;
 HEAP32[i33 + 4 >> 2] = i31;
 if ((i69 & 0 | 0) == 0 & (i31 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i34);
  i69 = i34 + 5 | 0;
  i70 = HEAP8[i69] | 0;
  i71 = i69;
 } else {
  i70 = (i31 >>> 8 | 0 << 24) & 255;
  i71 = i34 + 5 | 0;
 }
 i31 = i70 & 255;
 do {
  if ((i31 | 0) == 3 | (i31 | 0) == 2 | (i31 | 0) == 10) {
   i72 = i70;
   i57 = 76;
  } else {
   if ((i70 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i57 = 81;
    break;
   }
   i72 = HEAP8[i71] | 0;
   i57 = 76;
  }
 } while (0);
 do {
  if ((i57 | 0) == 76) {
   if ((i72 << 24 >> 24 | 0) == 15 | (i72 << 24 >> 24 | 0) == 10) {
    i57 = 83;
    break;
   }
   if ((HEAP8[i34 + 6 | 0] & 1) == 0) {
    d73 = +(HEAP32[i33 >> 2] | 0);
   } else {
    d73 = +HEAPF32[i33 >> 2];
   }
   if (d73 < +0) {
    i57 = 81;
   } else {
    i57 = 83;
   }
  }
 } while (0);
 do {
  if ((i57 | 0) == 81) {
   if (((HEAPU8[i71] | 0) - 6 | 0) >>> 0 < 4 >>> 0) {
    i57 = 83;
    break;
   }
   i74 = HEAP32[i51 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i57 | 0) == 83) {
   HEAP32[i36 >> 2] = HEAP32[i16 >> 2];
   __ZN7WebCore11RenderTable39convertStyleLogicalWidthToComputedWidthERKNS_6LengthENS_10LayoutUnitE(i35, i1, i34, i36);
   i33 = HEAP32[i51 >> 2] | 0;
   i72 = (HEAP32[i33 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i72 | 0) == 3 | (i72 | 0) == 0) {
    i75 = i1 + 52 | 0;
   } else {
    i75 = i1 + 56 | 0;
   }
   i70 = HEAP32[i75 >> 2] | 0;
   i31 = HEAP32[i35 >> 2] | 0;
   i69 = (i70 | 0) < (i31 | 0) ? i31 : i70;
   if ((i72 | 0) == 3 | (i72 | 0) == 0) {
    HEAP32[i1 + 52 >> 2] = i69;
    i74 = i33;
    break;
   } else {
    HEAP32[i1 + 56 >> 2] = i69;
    i74 = i33;
    break;
   }
  }
 } while (0);
 i35 = i1 + 60 | 0;
 i75 = (HEAP32[i74 + 44 >> 2] | 0) >>> 13 & 3;
 i36 = (HEAP32[i74 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i5 >> 2] = 0;
 __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i75, i36, i5);
 i5 = HEAP32[i51 >> 2] | 0;
 i36 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 i75 = (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1;
 HEAP32[i6 >> 2] = 0;
 __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i36, i75, i6);
 if (i45) {
  i45 = HEAP32[i51 >> 2] | 0;
  i6 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i45 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i45 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i45 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  i45 = i16 | 0;
  HEAP32[i9 >> 2] = HEAP32[i45 >> 2];
  i75 = i1 + 4 | 0;
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i6, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i75 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i9 = HEAP32[i51 >> 2] | 0;
  i6 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
  i36 = (HEAP32[i9 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i10 >> 2] = HEAP32[i41 >> 2];
  __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i6, i36, i10);
  i10 = HEAP32[i51 >> 2] | 0;
  i36 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i10 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i10 + 40 >> 2] | 0) >>> 30 & 1) | 0;
  HEAP32[i11 >> 2] = HEAP32[i45 >> 2];
  __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i42, i36, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i75 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  i75 = HEAP32[i51 >> 2] | 0;
  i11 = (HEAP32[i75 + 44 >> 2] | 0) >>> 13 & 3;
  i36 = (HEAP32[i75 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i14 >> 2] = HEAP32[i42 >> 2];
  __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i11, i36, i14);
 } else {
  i14 = HEAP32[i16 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 1024 >> 2] & 511](i46) | 0) {
   __ZNK7WebCore9RenderBox41containingBlockAvailableLineWidthInRegionEPNS_12RenderRegionE(i37, i50, 0);
   i76 = HEAP32[i37 >> 2] | 0;
  } else {
   i76 = i14;
  }
  _memset(i38 | 0, 0, 16) | 0;
  i14 = HEAP32[i51 >> 2] | 0;
  i37 = (HEAP32[(HEAP32[i44 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ (HEAP32[i14 + 40 >> 2] & 1073741824 | 0) != 0;
  HEAP32[i39 >> 2] = i76;
  i76 = (HEAP32[i14 + 44 >> 2] | 0) >>> 13 & 3;
  if ((i76 | 0) == 3 | (i76 | 0) == 0) {
   HEAP32[i40 >> 2] = HEAP32[i1 + 52 >> 2];
  } else {
   HEAP32[i40 >> 2] = HEAP32[i1 + 56 >> 2];
  }
  i1 = i38 + 8 | 0;
  i76 = i38 + 12 | 0;
  __ZNK7WebCore9RenderBox29computeInlineDirectionMarginsEPNS_11RenderBlockENS_10LayoutUnitES3_RS3_S4_(i50, i46, i39, i40, i37 ? i76 : i1, i37 ? i1 : i76);
  i37 = HEAP32[i51 >> 2] | 0;
  i40 = (HEAP32[i37 + 44 >> 2] | 0) >>> 13 & 3;
  i39 = (HEAP32[i37 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
  __ZN7WebCore15LayoutBoxExtent8setStartENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i40, i39, i7);
  i7 = HEAP32[i51 >> 2] | 0;
  i51 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
  i39 = (HEAP32[i7 + 40 >> 2] | 0) >>> 30 & 1;
  HEAP32[i8 >> 2] = HEAP32[i76 >> 2];
  __ZN7WebCore15LayoutBoxExtent6setEndENS_11WritingModeENS_13TextDirectionENS_10LayoutUnitE(i35, i51, i39, i8);
 }
 if ((HEAP8[i71] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
 }
 if ((HEAP8[i64] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
 }
 if ((HEAP8[i55] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
 STACKTOP = i2;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 20;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_ii + 162;
}
function __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i4 = i2 + 20 | 0;
 i5 = (HEAP32[i4 >> 2] & 25165824 | 0) != 16777216;
 i6 = i2;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 196 >> 2] & 511](i2) | 0) {
   i7 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 192 >> 2] & 511](i2) | 0) {
    i8 = i1 + 176 | 0;
    HEAP8[i8] = HEAP8[i8] | 2;
    i7 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 511](i2) | 0)) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 188 >> 2] & 511](i2) | 0) {
     i7 = 1;
     break;
    }
    FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 511](i2) | 0;
    i7 = 1;
    break;
   }
   if ((HEAP32[i4 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i2 + 36 >> 2] | 0;
   }
   i8 = HEAP32[i9 + 48 >> 2] & 31;
   do {
    if ((i8 | 0) == 10) {
     i10 = i1 + 148 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     L16 : do {
      if ((i3 | 0) == 0) {
       i12 = 31;
      } else {
       if ((i11 | 0) == 0) {
        break;
       }
       i13 = i11 | 0;
       i14 = i3;
       while (1) {
        i15 = HEAP32[i14 + 12 >> 2] | 0;
        if ((i15 | 0) == 0) {
         break;
        }
        if ((i15 | 0) == (i13 | 0)) {
         i12 = 31;
         break L16;
        } else {
         i14 = i15;
        }
       }
       HEAP32[i10 >> 2] = 0;
      }
     } while (0);
     if ((i12 | 0) == 31) {
      if ((i11 | 0) != 0) {
       break;
      }
     }
     HEAP32[i10 >> 2] = i2;
     i7 = 0;
     break L1;
    } else if ((i8 | 0) == 9) {
     i14 = i1 + 144 | 0;
     i13 = (i3 | 0) == 0;
     i15 = HEAP32[i14 >> 2] | 0;
     L27 : do {
      if (i13) {
       i12 = 15;
      } else {
       if ((i15 | 0) == 0) {
        break;
       }
       i16 = i15 | 0;
       i17 = i3;
       while (1) {
        i18 = HEAP32[i17 + 12 >> 2] | 0;
        if ((i18 | 0) == 0) {
         break;
        }
        if ((i18 | 0) == (i16 | 0)) {
         i12 = 15;
         break L27;
        } else {
         i17 = i18;
        }
       }
       HEAP32[i14 >> 2] = 0;
      }
     } while (0);
     do {
      if ((i12 | 0) == 15) {
       if ((i15 | 0) == 0) {
        break;
       }
       i10 = i1 + 152 | 0;
       i11 = HEAP32[i10 >> 2] | 0;
       L37 : do {
        if (i13) {
         i12 = 23;
        } else {
         if ((i11 | 0) == 0) {
          break;
         }
         i17 = i11 | 0;
         i16 = i3;
         while (1) {
          i18 = HEAP32[i16 + 12 >> 2] | 0;
          if ((i18 | 0) == 0) {
           break;
          }
          if ((i18 | 0) == (i17 | 0)) {
           i12 = 23;
           break L37;
          } else {
           i16 = i18;
          }
         }
         HEAP32[i10 >> 2] = 0;
        }
       } while (0);
       if ((i12 | 0) == 23) {
        if ((i11 | 0) != 0) {
         i7 = 0;
         break L1;
        }
       }
       HEAP32[i10 >> 2] = i2;
       i7 = 0;
       break L1;
      }
     } while (0);
     HEAP32[i14 >> 2] = i2;
     i7 = 0;
     break L1;
    } else if ((i8 | 0) != 8) {
     i7 = i5;
     break L1;
    }
   } while (0);
   i8 = i1 + 152 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   L49 : do {
    if ((i3 | 0) == 0) {
     i12 = 39;
    } else {
     if ((i13 | 0) == 0) {
      break;
     }
     i15 = i13 | 0;
     i16 = i3;
     while (1) {
      i17 = HEAP32[i16 + 12 >> 2] | 0;
      if ((i17 | 0) == 0) {
       break;
      }
      if ((i17 | 0) == (i15 | 0)) {
       i12 = 39;
       break L49;
      } else {
       i16 = i17;
      }
     }
     HEAP32[i8 >> 2] = 0;
    }
   } while (0);
   if ((i12 | 0) == 39) {
    if ((i13 | 0) != 0) {
     i7 = 0;
     break;
    }
   }
   HEAP32[i8 >> 2] = i2;
   i7 = 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
   i5 = i1 | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
    break;
   }
   i9 = i1 + 176 | 0;
   HEAP8[i9] = HEAP8[i9] | 4;
   i9 = i1 + 20 | 0;
   i4 = HEAP32[i9 >> 2] | 0;
   if ((i4 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i9 >> 2] = i4 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
   if ((HEAP32[i9 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i5);
  }
 } while (0);
 i6 = (i3 | 0) != 0;
 if (!i7) {
  do {
   if (i6) {
    i7 = i1 | 0;
    if ((HEAP32[i3 + 8 >> 2] | 0) == (i7 | 0)) {
     i19 = i3;
     i20 = i7;
     break;
    }
    i19 = __ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE(i1 | 0, i3) | 0;
    i20 = i7;
   } else {
    i19 = 0;
    i20 = i1 | 0;
   }
  } while (0);
  __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i20, i2, i19);
  return;
 }
 L75 : do {
  if (i6) {
   if ((HEAP32[i3 + 20 >> 2] & 128 | 0) == 0) {
    do {
     if ((HEAP32[i3 + 8 >> 2] | 0) == (i1 | 0)) {
      i19 = HEAP32[i3 + 12 >> 2] | 0;
      if ((i19 | 0) == 0) {
       break;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 204 >> 2] & 511](i19) | 0)) {
       break;
      }
      if ((HEAP32[i19 + 20 >> 2] & 128 | 0) == 0) {
       break;
      }
      __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i19, i2, 0);
      return;
     }
    } while (0);
    if ((i3 | 0) == 0) {
     break;
    } else {
     i21 = i3;
    }
   } else {
    i21 = i3;
   }
   while (1) {
    i8 = i21 + 8 | 0;
    if ((HEAP32[(HEAP32[i8 >> 2] | 0) + 20 >> 2] & 128 | 0) == 0) {
     i12 = 79;
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 204 >> 2] & 511](i21) | 0) {
     i12 = 79;
     break;
    }
    i13 = HEAP32[i21 + 20 >> 2] | 0;
    i19 = (i13 & 768 | 0) == 256;
    if (i19) {
     i22 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i22 = HEAP32[i21 + 36 >> 2] | 0;
    }
    if ((HEAP32[i22 + 48 >> 2] & 31 | 0) == 15) {
     i23 = i13;
     break;
    }
    if (i19) {
     i24 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i24 = HEAP32[i21 + 36 >> 2] | 0;
    }
    if ((HEAP32[i24 + 48 >> 2] & 31 | 0) == 12) {
     i23 = i13;
     break;
    }
    i13 = HEAP32[i8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     break L75;
    } else {
     i21 = i13 | 0;
    }
   }
   if ((i12 | 0) == 79) {
    i23 = HEAP32[i21 + 20 >> 2] | 0;
   }
   if ((i23 & 128 | 0) == 0) {
    break;
   }
   do {
    if ((i21 | 0) != 0) {
     if ((i23 & 768 | 0) == 256) {
      break;
     }
     if ((HEAP32[(HEAP32[i21 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 256) {
      break L75;
     }
    }
   } while (0);
   if ((i21 | 0) == (i3 | 0)) {
    i25 = HEAP32[i3 + 28 >> 2] | 0;
   } else {
    i25 = i3;
   }
   __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i21, i2, i25);
   return;
  } else {
   i13 = i1 + 32 | 0;
   i8 = HEAP32[i13 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i26 = 0;
    i27 = i1 | 0;
    i28 = __ZN7WebCore18RenderTableSection33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i27) | 0;
    i29 = i28 | 0;
    __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i29, i26);
    __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i28, i2, 0);
    return;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 204 >> 2] & 511](i8) | 0)) {
    break;
   }
   i8 = HEAP32[i13 >> 2] | 0;
   i13 = HEAP32[i8 + 20 >> 2] | 0;
   if ((i13 & 128 | 0) == 0) {
    break;
   }
   if ((i13 & 768 | 0) != 256) {
    if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 192) {
     break;
    }
   }
   __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i8, i2, 0);
   return;
  }
 } while (0);
 if (!i6) {
  i26 = 0;
  i27 = i1 | 0;
  i28 = __ZN7WebCore18RenderTableSection33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i27) | 0;
  i29 = i28 | 0;
  __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i29, i26);
  __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i28, i2, 0);
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 204 >> 2] & 511](i3) | 0) {
  i26 = i3;
  i27 = i1 | 0;
  i28 = __ZN7WebCore18RenderTableSection33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i27) | 0;
  i29 = i28 | 0;
  __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i29, i26);
  __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i28, i2, 0);
  return;
 }
 i6 = (HEAP32[i3 + 20 >> 2] & 768 | 0) == 256;
 if (i6) {
  i30 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i30 = HEAP32[i3 + 36 >> 2] | 0;
 }
 if ((HEAP32[i30 + 48 >> 2] & 31 | 0) == 15) {
  i26 = i3;
  i27 = i1 | 0;
  i28 = __ZN7WebCore18RenderTableSection33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i27) | 0;
  i29 = i28 | 0;
  __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i29, i26);
  __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i28, i2, 0);
  return;
 }
 if (i6) {
  i31 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i31 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i26 = (HEAP32[i31 + 48 >> 2] & 31 | 0) == 12 ? i3 : 0;
 i27 = i1 | 0;
 i28 = __ZN7WebCore18RenderTableSection33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i27) | 0;
 i29 = i28 | 0;
 __ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_(i1, i29, i26);
 __ZN7WebCore18RenderTableSection8addChildEPNS_12RenderObjectES2_(i28, i2, 0);
 return;
}
function __ZN7WebCore11RenderTable11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 64 | 0;
 i8 = i4 + 72 | 0;
 i9 = i4 + 80 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i2 + 20 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 do {
  if (i13 >>> 0 < 2 >>> 0) {
   if ((HEAP32[i1 + 20 >> 2] | 0) >>> 0 <= 1073741823 >>> 0) {
    break;
   }
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderTable19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3);
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i14 = i5 | 0;
  i15 = i5;
  if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i12 >> 2] | 0) != 11) {
   STACKTOP = i4;
   return;
  }
  i12 = i1 + 52 | 0;
  i16 = HEAP32[i12 >> 2] | 0;
  i17 = HEAP32[i12 + 4 >> 2] | 0;
  i12 = i3;
  i18 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i14 + 4 >> 2] = i18;
  i18 = i5 + 8 | 0;
  HEAP32[i18 >> 2] = i16;
  HEAP32[i18 + 4 >> 2] = i17;
  __ZNK7WebCore11RenderTable19subtractCaptionRectERNS_10LayoutRectE(i1, i15);
  __ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE(i1 | 0, i2, i15);
  STACKTOP = i4;
  return;
 } else if ((i13 | 0) == 2) {
  i19 = 1;
 } else if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i19 = i13;
 }
 _memcpy(i6 | 0, i2 | 0, 48) | 0;
 i13 = i6 + 20 | 0;
 HEAP32[i13 >> 2] = i19;
 i15 = i1 | 0;
 i17 = i6 + 28 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((i18 | 0) != 0 & (i18 | 0) == (i15 | 0)) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = i1 + 28 | 0;
 while (1) {
  i20 = HEAP32[i17 >> 2] | 0;
  if ((i20 | 0) == 0) {
   break;
  }
  if ((HEAP32[i20 + 20 >> 2] & 512 | 0) == 0) {
   i17 = i20 + 16 | 0;
  } else {
   i21 = 15;
   break;
  }
 }
 L24 : do {
  if ((i21 | 0) == 15) {
   i17 = i1 | 0;
   i18 = i20;
   L26 : while (1) {
    i16 = i18;
    do {
     if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i18) | 0) {
      i22 = i18;
     } else {
      i5 = i18;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 204 >> 2] & 511](i18) | 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 196 >> 2] & 511](i18) | 0)) {
        i22 = i18;
        break;
       }
      }
      __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i7, i17, i16, i3);
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i18 >> 2] | 0) + 648 >> 2] & 63](i18, i6, i7);
      i22 = i18;
     }
    } while (0);
    while (1) {
     i16 = HEAP32[i22 + 16 >> 2] | 0;
     if ((i16 | 0) == 0) {
      break L24;
     }
     if ((HEAP32[i16 + 20 >> 2] & 512 | 0) == 0) {
      i22 = i16;
     } else {
      i18 = i16;
      continue L26;
     }
    }
   }
  }
 } while (0);
 i22 = i1 + 36 | 0;
 i7 = HEAP32[i22 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 44 >> 2] & 8 | 0) != 0 & (i19 | 0) == 1) {
   if ((HEAP32[i7 + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderTable22recalcCollapsedBordersEv(i1);
   HEAP32[i13 >> 2] = 9;
   i20 = i1 + 168 | 0;
   i18 = HEAP32[i20 >> 2] | 0;
   L40 : do {
    if ((i18 | 0) == 0) {
     i23 = i1 + 172 | 0;
    } else {
     i17 = i1 + 160 | 0;
     i16 = i1 + 172 | 0;
     i5 = i1 + 176 | 0;
     i14 = i1 + 148 | 0;
     i12 = i1 + 32 | 0;
     i24 = i1 | 0;
     i25 = i1 + 144 | 0;
     i26 = 0;
     i27 = i18;
     while (1) {
      if (i27 >>> 0 <= i26 >>> 0) {
       break;
      }
      HEAP32[i16 >> 2] = (HEAP32[i17 >> 2] | 0) + (i26 << 3);
      if ((HEAP8[i5] & 4) != 0) {
       __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
      }
      i28 = HEAP32[i14 >> 2] | 0;
      L49 : do {
       if ((i28 | 0) == 0) {
        i29 = i12;
        while (1) {
         i30 = HEAP32[i29 >> 2] | 0;
         if ((i30 | 0) == 0) {
          break L49;
         }
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 204 >> 2] & 511](i30) | 0) {
          break;
         } else {
          i29 = i30 + 12 | 0;
         }
        }
        if ((i30 | 0) != 0) {
         i31 = i30;
         i21 = 35;
        }
       } else {
        i31 = i28;
        i21 = 35;
       }
      } while (0);
      L54 : do {
       if ((i21 | 0) == 35) {
        while (1) {
         i21 = 0;
         __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i8, i24, i31 | 0, i3);
         __ZN7WebCore18RenderTableSection5paintERNS_9PaintInfoERKNS_11LayoutPointE(i31, i6, i8);
         if ((HEAP8[i5] & 4) != 0) {
          __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
         }
         i28 = HEAP32[i25 >> 2] | 0;
         if ((i28 | 0) == (i31 | 0)) {
          break L54;
         }
         i29 = HEAP32[((HEAP32[i14 >> 2] | 0) == (i31 | 0) ? i12 : i31 + 12 | 0) >> 2] | 0;
         L61 : do {
          if ((i29 | 0) == 0) {
           i32 = i28;
           i21 = 45;
          } else {
           i33 = i29;
           while (1) {
            do {
             if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 204 >> 2] & 511](i33) | 0) {
              if ((i33 | 0) == (HEAP32[i25 >> 2] | 0)) {
               break;
              }
              if ((i33 | 0) != (HEAP32[i14 >> 2] | 0)) {
               i34 = i33;
               break L61;
              }
             }
            } while (0);
            i33 = HEAP32[i33 + 12 >> 2] | 0;
            if ((i33 | 0) == 0) {
             break;
            }
           }
           i32 = HEAP32[i25 >> 2] | 0;
           i21 = 45;
          }
         } while (0);
         if ((i21 | 0) == 45) {
          i21 = 0;
          i34 = i32 | 0;
         }
         if ((i34 | 0) == 0) {
          break;
         } else {
          i31 = i34;
          i21 = 35;
         }
        }
       }
      } while (0);
      i29 = i26 + 1 | 0;
      if (i29 >>> 0 >= i18 >>> 0) {
       i23 = i16;
       break L40;
      }
      i26 = i29;
      i27 = HEAP32[i20 >> 2] | 0;
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   HEAP32[i23 >> 2] = 0;
  }
 } while (0);
 if (!((i19 | 0) == 7 | (i19 | 0) == 5)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i35 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i35 = HEAP32[i15 + 36 >> 2] | 0;
 }
 i19 = HEAP32[(HEAP32[i35 + 12 >> 2] | 0) + 64 >> 2] | 0;
 do {
  if (!((i19 & 131070 | 0) != 0 & (i19 & 2013265920 | 0) != 0 & (i19 & 1879048192) >>> 0 > 134217728 >>> 0)) {
   if (__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i15) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i22 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i22 = i1 + 52 | 0;
 i1 = HEAP32[i22 >> 2] | 0;
 i19 = HEAP32[i22 + 4 >> 2] | 0;
 i22 = i3;
 i3 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i10 + 4 >> 2] = i3;
 i3 = i9 + 8 | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i19;
 __ZN7WebCore12RenderObject12paintOutlineERNS_9PaintInfoERKNS_10LayoutRectE(i15, i2, i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderTable29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, i29 = 0, d30 = +0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, d39 = +0, i40 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
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
 i13 = i1 | 0;
 i14 = i1 + 76 | 0;
 i15 = i1 + 80 | 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 HEAP32[i1 + 184 >> 2] = __ZNK7WebCore11RenderTable15calcBorderStartEv(i1) | 0;
 HEAP32[i1 + 188 >> 2] = __ZNK7WebCore11RenderTable13calcBorderEndEv(i1) | 0;
 i16 = i1 + 156 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 8 >> 2] & 63](i17, i14, i15);
 __ZNK7WebCore11RenderTable38bordersPaddingAndSpacingInRowDirectionEv(i3, i1);
 i17 = HEAP32[i3 >> 2] | 0;
 i3 = i14 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i17;
 i18 = i15 | 0;
 HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i17;
 i17 = HEAP32[i16 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 12 >> 2] & 63](i17, i14, i15);
 i17 = i1 + 128 | 0;
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  i16 = i1 + 120 | 0;
  i19 = i4 | 0;
  i20 = 0;
  while (1) {
   __ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv(i4, HEAP32[(HEAP32[i16 >> 2] | 0) + (i20 << 2) >> 2] | 0);
   HEAP32[i3 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (HEAP32[i19 >> 2] | 0) ? i4 : i14) >> 2];
   i20 = i20 + 1 | 0;
   if (i20 >>> 0 >= (HEAP32[i17 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i17 = HEAP32[i1 + 36 >> 2] | 0;
 i20 = i17 + 44 | 0;
 i4 = HEAP32[i20 >> 2] | 0;
 i19 = i4 >>> 13 & 3;
 if ((i19 | 0) == 3 | (i19 | 0) == 0) {
  i16 = HEAP32[i17 + 4 >> 2] | 0;
  i21 = i16 + 20 | 0;
  i22 = i16;
 } else {
  i16 = HEAP32[i17 + 4 >> 2] | 0;
  i21 = i16 + 36 | 0;
  i22 = i16;
 }
 do {
  if ((HEAP8[i21 + 5 | 0] | 0) == 3) {
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    i23 = i22 + 20 | 0;
   } else {
    i23 = i22 + 36 | 0;
   }
   if ((HEAP8[i23 + 6 | 0] & 1) == 0) {
    d24 = +(HEAP32[i23 >> 2] | 0);
   } else {
    d24 = +HEAPF32[i23 >> 2];
   }
   if (d24 <= +0) {
    i25 = i4;
    break;
   }
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    i26 = i22 + 20 | 0;
   } else {
    i26 = i22 + 36 | 0;
   }
   if ((HEAP8[i26 + 6 | 0] & 1) == 0) {
    d27 = +(HEAP32[i26 >> 2] | 0);
   } else {
    d27 = +HEAPF32[i26 >> 2];
   }
   do {
    if (d27 < +2147483647) {
     if (d27 <= +-2147483648) {
      i28 = -2147483648;
      break;
     }
     i28 = ~~d27;
    } else {
     i28 = 2147483647;
    }
   } while (0);
   HEAP32[i6 >> 2] = i28;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i5, i13, i6);
   HEAP32[i18 >> 2] = HEAP32[((HEAP32[i18 >> 2] | 0) < (HEAP32[i5 >> 2] | 0) ? i5 : i15) >> 2];
   i16 = (HEAP32[i20 >> 2] | 0) >>> 13 & 3;
   if ((i16 | 0) == 3 | (i16 | 0) == 0) {
    i29 = (HEAP32[i17 + 4 >> 2] | 0) + 20 | 0;
   } else {
    i29 = (HEAP32[i17 + 4 >> 2] | 0) + 36 | 0;
   }
   if ((HEAP8[i29 + 6 | 0] & 1) == 0) {
    d30 = +(HEAP32[i29 >> 2] | 0);
   } else {
    d30 = +HEAPF32[i29 >> 2];
   }
   do {
    if (d30 < +2147483647) {
     if (d30 <= +-2147483648) {
      i31 = -2147483648;
      break;
     }
     i31 = ~~d30;
    } else {
     i31 = 2147483647;
    }
   } while (0);
   HEAP32[i8 >> 2] = i31;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i7, i13, i8);
   HEAP32[i3 >> 2] = HEAP32[((HEAP32[i3 >> 2] | 0) < (HEAP32[i7 >> 2] | 0) ? i7 : i14) >> 2];
   i25 = HEAP32[i20 >> 2] | 0;
  } else {
   i25 = i4;
  }
 } while (0);
 i4 = i25 >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i25 = HEAP32[i17 + 4 >> 2] | 0;
  i32 = i25 + 28 | 0;
  i33 = i25;
 } else {
  i25 = HEAP32[i17 + 4 >> 2] | 0;
  i32 = i25 + 44 | 0;
  i33 = i25;
 }
 if ((HEAP8[i32 + 5 | 0] | 0) != 3) {
  i34 = i1 | 0;
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i34, 0, 1);
  STACKTOP = i2;
  return;
 }
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i35 = i33 + 28 | 0;
 } else {
  i35 = i33 + 44 | 0;
 }
 if ((HEAP8[i35 + 6 | 0] & 1) == 0) {
  d36 = +(HEAP32[i35 >> 2] | 0);
 } else {
  d36 = +HEAPF32[i35 >> 2];
 }
 do {
  if (d36 < +2147483647) {
   if (d36 <= +-2147483648) {
    i37 = -2147483648;
    break;
   }
   i37 = ~~d36;
  } else {
   i37 = 2147483647;
  }
 } while (0);
 HEAP32[i10 >> 2] = i37;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i9, i13, i10);
 HEAP32[i18 >> 2] = HEAP32[((HEAP32[i9 >> 2] | 0) < (HEAP32[i18 >> 2] | 0) ? i9 : i15) >> 2];
 i15 = (HEAP32[i20 >> 2] | 0) >>> 13 & 3;
 if ((i15 | 0) == 3 | (i15 | 0) == 0) {
  i38 = (HEAP32[i17 + 4 >> 2] | 0) + 28 | 0;
 } else {
  i38 = (HEAP32[i17 + 4 >> 2] | 0) + 44 | 0;
 }
 if ((HEAP8[i38 + 6 | 0] & 1) == 0) {
  d39 = +(HEAP32[i38 >> 2] | 0);
 } else {
  d39 = +HEAPF32[i38 >> 2];
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
 HEAP32[i12 >> 2] = i40;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i11, i13, i12);
 HEAP32[i3 >> 2] = HEAP32[((HEAP32[i11 >> 2] | 0) < (HEAP32[i3 >> 2] | 0) ? i11 : i14) >> 2];
 i34 = i1 | 0;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i34, 0, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderTable39convertStyleLogicalWidthToComputedWidthERKNS_6LengthENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = HEAP8[i3 + 5 | 0] | 0;
 i17 = i16 & 255;
 if ((i17 - 6 | 0) >>> 0 < 4 >>> 0) {
  i18 = i3;
  i19 = HEAP32[i18 >> 2] | 0;
  i20 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = i19;
  HEAP32[i11 + 4 >> 2] = i20;
  if ((i19 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
   __ZNK7WebCore6Length22incrementCalculatedRefEv(i12);
  }
  HEAP32[i13 >> 2] = HEAP32[i4 >> 2];
  __ZNK7WebCore11RenderTable38bordersPaddingAndSpacingInRowDirectionEv(i14, i2);
  __ZNK7WebCore9RenderBox33computeIntrinsicLogicalWidthUsingENS_6LengthENS_10LayoutUnitES2_(i1, i2 | 0, i12, i13, i14);
  if ((HEAP8[i12 + 5 | 0] | 0) != 10) {
   STACKTOP = i5;
   return;
  }
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i12 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i21 = 10;
    break;
   }
   if ((HEAP32[i12 + 12 >> 2] & 16 | 0) == 0) {
    i21 = 10;
    break;
   }
   if ((HEAP32[(HEAP32[i12 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i22 = 0;
   } else {
    i21 = 10;
   }
  } else {
   i21 = 10;
  }
 } while (0);
 do {
  if ((i21 | 0) == 10) {
   if (!((i17 | 0) == 3 | (i17 | 0) == 2 | (i17 | 0) == 10)) {
    if ((i16 - 11 & 255) >>> 0 >= 4 >>> 0) {
     i22 = 0;
     break;
    }
   }
   if ((i16 << 24 >> 24 | 0) == 15) {
    i22 = 0;
    break;
   } else if ((i16 << 24 >> 24 | 0) != 10) {
    if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
     d23 = +(HEAP32[i3 >> 2] | 0);
    } else {
     d23 = +HEAPF32[i3 >> 2];
    }
    if (d23 <= +0) {
     i22 = 0;
     break;
    }
   }
   i12 = i2 + 36 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) != 0) {
    i22 = 0;
    break;
   }
   i14 = i2;
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 760 >> 2] & 511](i2) | 0;
   i20 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 764 >> 2] & 511](i2) | 0) + i13 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   i14 = HEAP32[i13 + 44 >> 2] | 0;
   if ((i14 & 8 | 0) == 0) {
    i19 = i2 | 0;
    i11 = i6;
    i18 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i13 + 16 >> 2] | 0) + 68 | 0, i14 >>> 13 & 3, (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1) | 0;
    i13 = HEAP32[i18 >> 2] | 0;
    i14 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i6 >> 2] = i13;
    HEAP32[i6 + 4 >> 2] = i14;
    if ((i13 & 0 | 0) == 0 & (i14 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
    }
    __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i7, i19, i11);
    if ((HEAP8[i11 + 5 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
    }
    i11 = HEAP32[i7 >> 2] | 0;
    i14 = i8;
    i13 = HEAP32[i12 >> 2] | 0;
    i12 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i13 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i18 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i13;
    HEAP32[i8 + 4 >> 2] = i18;
    if ((i13 & 0 | 0) == 0 & (i18 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
    }
    __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i9, i19, i14);
    if ((HEAP8[i14 + 5 | 0] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
    }
    i24 = (HEAP32[i9 >> 2] | 0) + i11 | 0;
   } else {
    i24 = 0;
   }
   i22 = i20 + i24 | 0;
  }
 } while (0);
 HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i15, i3, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 HEAP32[i1 >> 2] = (HEAP32[i15 >> 2] | 0) + i22;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderTable14recalcSectionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = i1 + 144 | 0;
 HEAP32[i2 >> 2] = 0;
 i3 = i1 + 148 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 152 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 176 | 0;
 HEAP8[i5] = HEAP8[i5] & -3;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L1 : do {
  if ((i7 | 0) == 0) {
   i8 = i6;
  } else {
   i9 = i7;
   while (1) {
    i10 = HEAP32[i9 + 16 >> 2] | 0;
    if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
     i11 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i11 = HEAP32[i9 + 36 >> 2] | 0;
    }
    L8 : do {
     switch (HEAP32[i11 + 48 >> 2] & 31 | 0) {
     case 8:
      {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0)) {
        break L8;
       }
       i12 = i9;
       if ((HEAP32[i4 >> 2] | 0) == 0) {
        HEAP32[i4 >> 2] = i12;
       }
       if ((HEAP8[i9 + 140 | 0] & 1) == 0) {
        break L8;
       }
       __ZN7WebCore18RenderTableSection11recalcCellsEv(i12);
       break;
      }
     case 13:
     case 12:
      {
       HEAP8[i5] = HEAP8[i5] | 2;
       break;
      }
     case 10:
      {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0)) {
        break L8;
       }
       i12 = i9;
       do {
        if ((HEAP32[i3 >> 2] | 0) == 0) {
         HEAP32[i3 >> 2] = i12;
        } else {
         if ((HEAP32[i4 >> 2] | 0) != 0) {
          break;
         }
         HEAP32[i4 >> 2] = i12;
        }
       } while (0);
       if ((HEAP8[i9 + 140 | 0] & 1) == 0) {
        break L8;
       }
       __ZN7WebCore18RenderTableSection11recalcCellsEv(i12);
       break;
      }
     case 9:
      {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0)) {
        break L8;
       }
       i13 = i9;
       do {
        if ((HEAP32[i2 >> 2] | 0) == 0) {
         HEAP32[i2 >> 2] = i13;
        } else {
         if ((HEAP32[i4 >> 2] | 0) != 0) {
          break;
         }
         HEAP32[i4 >> 2] = i13;
        }
       } while (0);
       if ((HEAP8[i9 + 140 | 0] & 1) == 0) {
        break L8;
       }
       __ZN7WebCore18RenderTableSection11recalcCellsEv(i13);
       break;
      }
     default:
      {}
     }
    } while (0);
    if ((i10 | 0) == 0) {
     i8 = i6;
     break L1;
    } else {
     i9 = i10;
    }
   }
  }
 } while (0);
 while (1) {
  i6 = HEAP32[i8 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i14 = 0;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 511](i6) | 0) {
   i15 = i6;
   i16 = 0;
   i17 = 30;
   break;
  }
  i8 = i6 + 16 | 0;
 }
 L37 : do {
  if ((i17 | 0) == 30) {
   L38 : while (1) {
    i17 = 0;
    i8 = __ZNK7WebCore18RenderTableSection10numColumnsEv(i15) | 0;
    i6 = i8 >>> 0 > i16 >>> 0 ? i8 : i16;
    i8 = i15;
    while (1) {
     i4 = HEAP32[i8 + 16 >> 2] | 0;
     if ((i4 | 0) == 0) {
      i14 = i6;
      break L37;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 204 >> 2] & 511](i4) | 0) {
      i15 = i4;
      i16 = i6;
      i17 = 30;
      continue L38;
     } else {
      i8 = i4;
     }
    }
   }
  }
 } while (0);
 i17 = i1 + 108 | 0;
 i16 = i1 + 116 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) >>> 0 < i14 >>> 0) {
   if ((HEAP32[i1 + 112 >> 2] | 0) >>> 0 < i14 >>> 0) {
    __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i17, i14);
   }
   i15 = HEAP32[i17 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i16 >> 2] | 0;
   i6 = i15 + (i14 << 2) | 0;
   if ((i8 | 0) == (i14 | 0)) {
    break;
   }
   i10 = i15 + (i8 << 2) | 0;
   while (1) {
    HEAP32[i10 >> 2] = 1;
    i10 = i10 + 4 | 0;
    if ((i10 | 0) == (i6 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i16 >> 2] = i14;
 i16 = i14 + 1 | 0;
 i14 = i1 + 104 | 0;
 if ((HEAP32[i14 >> 2] | 0) >>> 0 >= i16 >>> 0) {
  HEAP32[i14 >> 2] = i16;
  i18 = HEAP8[i5] | 0;
  i19 = i18 & -5;
  HEAP8[i5] = i19;
  return;
 }
 if ((HEAP32[i1 + 100 >> 2] | 0) >>> 0 >= i16 >>> 0) {
  HEAP32[i14 >> 2] = i16;
  i18 = HEAP8[i5] | 0;
  i19 = i18 & -5;
  HEAP8[i5] = i19;
  return;
 }
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 + 96 | 0, i16);
 HEAP32[i14 >> 2] = i16;
 i18 = HEAP8[i5] | 0;
 i19 = i18 & -5;
 HEAP8[i5] = i19;
 return;
}
function __ZN7WebCore11RenderTable23addOverflowFromChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] & 8 | 0) != 0) {
   i7 = i1 | 0;
   i8 = i1 + 52 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = (__ZNK7WebCore11RenderTable16outerBorderRightEv(i1) | 0) + i9 | 0;
   i9 = i1;
   i11 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 748 >> 2] & 511](i1) | 0) | 0;
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 511](i1) | 0;
   i12 = __ZNK7WebCore11RenderTable15outerBorderLeftEv(i1) | 0;
   i13 = i10 - i12 | 0;
   i14 = i1 + 56 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   i16 = (__ZNK7WebCore11RenderTable17outerBorderBottomEv(i1) | 0) + i15 | 0;
   i15 = i16 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 740 >> 2] & 511](i1) | 0) | 0;
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 511](i1) | 0;
   i9 = __ZNK7WebCore11RenderTable14outerBorderTopEv(i1) | 0;
   i17 = i16 - i9 | 0;
   i18 = i11 - i13 | 0;
   i11 = i15 - i17 | 0;
   if (!((i10 | 0) != (i12 | 0) | (i16 | 0) != (i9 | 0))) {
    if ((i18 | 0) == (HEAP32[i8 >> 2] | 0) & (i11 | 0) == (HEAP32[i14 >> 2] | 0)) {
     break;
    }
   }
   HEAP32[i5 >> 2] = i13;
   HEAP32[i5 + 4 >> 2] = i17;
   HEAP32[i5 + 8 >> 2] = i18;
   HEAP32[i5 + 12 >> 2] = i11;
   __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i7, i5);
   HEAP32[i6 >> 2] = i13;
   HEAP32[i6 + 4 >> 2] = i17;
   HEAP32[i6 + 8 >> 2] = i18;
   HEAP32[i6 + 12 >> 2] = i11;
   __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i7, i6);
  }
 } while (0);
 i6 = i1 + 128 | 0;
 if ((HEAP32[i6 >> 2] | 0) != 0) {
  i5 = i1 | 0;
  i7 = i1 + 120 | 0;
  i11 = i3 | 0;
  i18 = i3 + 4 | 0;
  i17 = 0;
  while (1) {
   i13 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i17 << 2) >> 2] | 0;
   i14 = HEAP32[i13 + 48 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i13 + 44 >> 2];
   HEAP32[i18 >> 2] = i14;
   __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i5, i13 | 0, i3);
   i17 = i17 + 1 | 0;
   if (i17 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 i6 = i1 + 144 | 0;
 i17 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i17 | 0) == 0) {
   i3 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i19 = i3;
    break;
   }
   i3 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i19 = i3;
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   i19 = i17;
  }
 } while (0);
 i17 = i1 | 0;
 i3 = i4 | 0;
 i5 = i4 + 4 | 0;
 i18 = i1 + 176 | 0;
 i11 = i1 + 148 | 0;
 i7 = i1 + 28 | 0;
 i13 = i19;
 while (1) {
  i19 = HEAP32[i13 + 48 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i13 + 44 >> 2];
  HEAP32[i5 >> 2] = i19;
  __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i17, i13 | 0, i4);
  if ((HEAP8[i18] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i19 = HEAP32[i11 >> 2] | 0;
  if ((i19 | 0) == (i13 | 0)) {
   i20 = 25;
   break;
  }
  i14 = HEAP32[((HEAP32[i6 >> 2] | 0) == (i13 | 0) ? i7 : i13 + 16 | 0) >> 2] | 0;
  L23 : do {
   if ((i14 | 0) == 0) {
    i21 = i19;
    i20 = 22;
   } else {
    i8 = i14;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 204 >> 2] & 511](i8) | 0) {
       if ((i8 | 0) == (HEAP32[i6 >> 2] | 0)) {
        break;
       }
       if ((i8 | 0) != (HEAP32[i11 >> 2] | 0)) {
        i22 = i8;
        break L23;
       }
      }
     } while (0);
     i8 = HEAP32[i8 + 16 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
    }
    i21 = HEAP32[i11 >> 2] | 0;
    i20 = 22;
   }
  } while (0);
  if ((i20 | 0) == 22) {
   i20 = 0;
   i22 = i21 | 0;
  }
  if ((i22 | 0) == 0) {
   i20 = 24;
   break;
  } else {
   i13 = i22;
  }
 }
 if ((i20 | 0) == 24) {
  STACKTOP = i2;
  return;
 } else if ((i20 | 0) == 25) {
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore11RenderTable13calcBorderEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 44 >> 2] & 8 | 0) == 0) {
  i4 = (__ZNK7WebCore11RenderStyle14borderEndWidthEv(i3) | 0) & 65535;
  return i4 | 0;
 }
 i5 = i1 + 116 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = HEAP32[(__ZNK7WebCore11RenderStyle9borderEndEv(i3) | 0) + 4 >> 2] | 0;
 i3 = i6 >>> 27 & 15;
 if ((i3 | 0) == 1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 > 1 >>> 0) {
  i7 = i6 >>> 1 & 67108863;
 } else {
  i7 = 0;
 }
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 i5 = HEAP8[i1 + 176 | 0] | 0;
 L14 : do {
  if ((i5 & 2) == 0) {
   i8 = i7;
  } else {
   if ((i5 & 16) == 0) {
    __ZNK7WebCore11RenderTable17updateColumnCacheEv(i1);
   }
   i3 = HEAP32[i1 + 140 >> 2] | 0;
   i9 = i1 + 132 | 0;
   i10 = 0;
   i11 = 0;
   while (1) {
    if (i11 >>> 0 >= i3 >>> 0) {
     i8 = i7;
     break L14;
    }
    i12 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i11 << 2) >> 2] | 0;
    i13 = (HEAP32[i12 + 92 >> 2] | 0) + i10 | 0;
    if (i13 >>> 0 > i6 >>> 0) {
     break;
    } else {
     i10 = i13;
     i11 = i11 + 1 | 0;
    }
   }
   if ((i12 | 0) == 0) {
    i8 = i7;
    break;
   }
   i11 = HEAP32[(__ZNK7WebCore11RenderStyle9borderEndEv(HEAP32[i12 + 36 >> 2] | 0) | 0) + 4 >> 2] | 0;
   i10 = i11 >>> 27 & 15;
   if ((i10 | 0) == 1) {
    i4 = 0;
    return i4 | 0;
   }
   if (i10 >>> 0 <= 1 >>> 0) {
    i8 = i7;
    break;
   }
   i10 = i11 >>> 1 & 67108863;
   i8 = i7 >>> 0 < i10 >>> 0 ? i10 : i7;
  }
 } while (0);
 i7 = __ZNK7WebCore11RenderTable18topNonEmptySectionEv(i1) | 0;
 do {
  if ((i7 | 0) == 0) {
   i14 = i8;
  } else {
   i1 = HEAP32[i7 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[i1 + 40 >> 2]) & 1073741824 | 0) == 0) {
    i15 = __ZNK7WebCore11RenderStyle9borderEndEv(i1) | 0;
   } else {
    i15 = __ZNK7WebCore11RenderStyle11borderStartEv(i1) | 0;
   }
   i1 = HEAP32[i15 + 4 >> 2] | 0;
   i12 = i1 >>> 27 & 15;
   if ((i12 | 0) == 1) {
    i4 = 0;
    return i4 | 0;
   }
   if (i12 >>> 0 > 1 >>> 0) {
    i12 = i1 >>> 1 & 67108863;
    i16 = i8 >>> 0 < i12 >>> 0 ? i12 : i8;
   } else {
    i16 = i8;
   }
   i12 = __ZNK7WebCore18RenderTableSection29firstRowCellAdjoiningTableEndEv(i7) | 0;
   if ((i12 | 0) == 0) {
    i14 = i16;
    break;
   }
   i1 = i12 + 8 | 0;
   i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
   i5 = HEAP32[i12 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0) {
    i17 = __ZNK7WebCore11RenderStyle9borderEndEv(i5) | 0;
   } else {
    i17 = __ZNK7WebCore11RenderStyle11borderStartEv(i5) | 0;
   }
   i5 = i17 + 4 | 0;
   if ((HEAP32[i5 >> 2] & 2013265920 | 0) == 134217728) {
    i4 = 0;
    return i4 | 0;
   }
   i6 = HEAP32[i1 >> 2] | 0;
   i1 = HEAP32[i6 + 8 >> 2] | 0;
   i12 = HEAP32[i6 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0) {
    i18 = __ZNK7WebCore11RenderStyle9borderEndEv(i12) | 0;
   } else {
    i18 = __ZNK7WebCore11RenderStyle11borderStartEv(i12) | 0;
   }
   i12 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i12 & 2013265920 | 0) == 134217728) {
    i4 = 0;
    return i4 | 0;
   }
   i1 = HEAP32[i5 >> 2] | 0;
   if ((i1 & 1879048192) >>> 0 > 134217728 >>> 0) {
    i5 = i1 >>> 1 & 67108863;
    i19 = i16 >>> 0 < i5 >>> 0 ? i5 : i16;
   } else {
    i19 = i16;
   }
   if ((i12 & 1879048192) >>> 0 <= 134217728 >>> 0) {
    i14 = i19;
    break;
   }
   i5 = i12 >>> 1 & 67108863;
   i14 = i19 >>> 0 < i5 >>> 0 ? i5 : i19;
  }
 } while (0);
 i4 = (((HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1) + i14 | 0) >>> 1;
 return i4 | 0;
}
function __ZN7WebCore11RenderTable11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i1 | 0;
 i19 = i1 + 44 | 0;
 i20 = (HEAP32[i19 + 4 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i21 = i8;
 HEAP32[i21 >> 2] = (HEAP32[i19 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 i5 = i9 + 4 | 0;
 HEAP32[i5 >> 2] = i20;
 i20 = i1 + 20 | 0;
 if ((HEAP32[i20 >> 2] & 65536 | 0) == 0) {
  i22 = 3;
 } else {
  __ZN7WebCore11RenderTable16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i10, i1, i9, HEAP32[i4 + 64 >> 2] | 0, 0, 0);
  if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i10) | 0) {
   i22 = 3;
  }
 }
 L3 : do {
  if ((i22 | 0) == 3) {
   i10 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   } else {
    i23 = i10;
   }
   L5 : while (1) {
    do {
     if ((HEAP32[i23 + 20 >> 2] & 512 | 0) != 0) {
      i10 = i23;
      if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i23) | 0) {
       break;
      }
      i19 = i23;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 204 >> 2] & 511](i23) | 0)) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 196 >> 2] & 511](i23) | 0)) {
        break;
       }
      }
      __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i11, i18, i10, i9);
      if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 460 >> 2] & 7](i23, i2, i3, i4, i11, i6) | 0) {
       break L5;
      }
     }
    } while (0);
    i23 = HEAP32[i23 + 12 >> 2] | 0;
    if ((i23 | 0) == 0) {
     break L3;
    }
   }
   i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i19 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i11 + 4 >> 2] | 0) | 0;
   HEAP32[i12 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i11 >> 2] | 0);
   HEAP32[i12 + 4 >> 2] = i19;
   FUNCTION_TABLE_viii[i10 & 63](i1 | 0, i3, i12);
   i24 = 1;
   STACKTOP = i7;
   return i24 | 0;
  }
 } while (0);
 i12 = i1 + 52 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i23 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i14 + 4 >> 2] = i12;
 i12 = i13 + 8 | 0;
 HEAP32[i12 >> 2] = i11;
 HEAP32[i12 + 4 >> 2] = i23;
 i23 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((HEAP32[i23 + 40 >> 2] & 6144 | 0) == 0) {
   if (!((HEAP32[i23 + 44 >> 2] & 1920 | 0) != 0 & i6 >>> 0 < 2 >>> 0)) {
    break;
   }
   if (!(__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i15) | 0)) {
    break;
   }
   i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i11 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
   HEAP32[i17 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i21 >> 2] | 0);
   HEAP32[i17 + 4 >> 2] = i11;
   __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i16, i18, i17);
   FUNCTION_TABLE_viii[i12 & 63](i1 | 0, i3, i16);
   if ((HEAP32[i20 >> 2] & 128 | 0) == 0) {
    i25 = HEAP32[i1 + 4 >> 2] | 0;
   } else {
    i25 = 0;
   }
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i25 | 0, i2, i4, i15) | 0) {
    break;
   } else {
    i24 = 1;
   }
   STACKTOP = i7;
   return i24 | 0;
  }
 } while (0);
 i24 = 0;
 STACKTOP = i7;
 return i24 | 0;
}
function __ZN7WebCore11RenderTable13layoutCaptionEPNS_18RenderTableCaptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i2 | 0;
 i12 = i2 + 44 | 0;
 i13 = i4;
 i14 = i12;
 HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
 HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
 HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
 i14 = i2 | 0;
 i13 = i2 + 20 | 0;
 i15 = i2 + 36 | 0;
 do {
  if ((HEAP32[i13 >> 2] & 31 | 0) == 0) {
   i16 = i2 + 60 | 0;
   i17 = i1 + 36 | 0;
  } else {
   i18 = HEAP32[i15 >> 2] | 0;
   i19 = i2 + 60 | 0;
   __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i5, i19, (HEAP32[i18 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i18 + 40 >> 2] | 0) >>> 30 & 1);
   __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i6, i19, (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
   i18 = i1 + 36 | 0;
   i20 = (HEAP32[(HEAP32[i18 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i21 = i1 + 56 | 0;
   } else {
    i21 = i1 + 52 | 0;
   }
   i20 = (HEAP32[i6 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0;
   i22 = HEAP32[i5 >> 2] | 0;
   i23 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i23 | 0) == 3 | (i23 | 0) == 0) {
    i23 = i12;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i20;
   } else {
    i23 = i12;
    HEAP32[i23 >> 2] = i20;
    HEAP32[i23 + 4 >> 2] = i22;
   }
   if ((HEAP32[i13 >> 2] & 31 | 0) == 0) {
    i16 = i19;
    i17 = i18;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i2 | 0);
   i16 = i19;
   i17 = i18;
  }
 } while (0);
 i13 = HEAP32[i15 >> 2] | 0;
 __ZNK7WebCore15LayoutBoxExtent5startENS_11WritingModeENS_13TextDirectionE(i7, i16, (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i13 + 40 >> 2] | 0) >>> 30 & 1);
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i8, i16, (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i13 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  i24 = i1 + 56 | 0;
 } else {
  i24 = i1 + 52 | 0;
 }
 i13 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i24 >> 2] | 0) | 0;
 i24 = HEAP32[i7 >> 2] | 0;
 i7 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i7 = i12;
  HEAP32[i7 >> 2] = i24;
  HEAP32[i7 + 4 >> 2] = i13;
 } else {
  i7 = i12;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i7 + 4 >> 2] = i24;
 }
 do {
  if ((HEAP32[i1 + 20 >> 2] & 1 | 0) == 0) {
   if (!(__ZNK7WebCore12RenderObject27checkForRepaintDuringLayoutEv(i14) | 0)) {
    break;
   }
   __ZN7WebCore9RenderBox26repaintDuringLayoutIfMovedERKNS_10LayoutRectE(i11, i4);
  }
 } while (0);
 i4 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i25 = i1 + 56 | 0;
 } else {
  i25 = i1 + 52 | 0;
 }
 i4 = (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i26 = i2 + 56 | 0;
 } else {
  i26 = i2 + 52 | 0;
 }
 i2 = (HEAP32[i26 >> 2] | 0) + (HEAP32[i25 >> 2] | 0) | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i9, i16, i4);
 i4 = i2 + (HEAP32[i9 >> 2] | 0) | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i10, i16, (HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 i15 = i4 + (HEAP32[i10 >> 2] | 0) | 0;
 i10 = (HEAP32[(HEAP32[i17 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i15;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i1 + 52 >> 2] = i15;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderTable15calcBorderStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 44 >> 2] & 8 | 0) == 0) {
  i4 = (__ZNK7WebCore11RenderStyle16borderStartWidthEv(i3) | 0) & 65535;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 116 >> 2] | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(__ZNK7WebCore11RenderStyle11borderStartEv(i3) | 0) + 4 >> 2] | 0;
 i3 = i5 >>> 27 & 15;
 if ((i3 | 0) == 1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 > 1 >>> 0) {
  i6 = i5 >>> 1 & 67108863;
 } else {
  i6 = 0;
 }
 i5 = HEAP8[i1 + 176 | 0] | 0;
 L14 : do {
  if ((i5 & 2) == 0) {
   i7 = i6;
  } else {
   if ((i5 & 16) == 0) {
    __ZNK7WebCore11RenderTable17updateColumnCacheEv(i1);
   }
   i3 = HEAP32[i1 + 140 >> 2] | 0;
   i8 = i1 + 132 | 0;
   i9 = 0;
   while (1) {
    if (i9 >>> 0 >= i3 >>> 0) {
     i7 = i6;
     break L14;
    }
    i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i9 << 2) >> 2] | 0;
    if ((HEAP32[i10 + 92 >> 2] | 0) == 0) {
     i9 = i9 + 1 | 0;
    } else {
     break;
    }
   }
   if ((i10 | 0) == 0) {
    i7 = i6;
    break;
   }
   i9 = HEAP32[(__ZNK7WebCore11RenderStyle11borderStartEv(HEAP32[i10 + 36 >> 2] | 0) | 0) + 4 >> 2] | 0;
   i8 = i9 >>> 27 & 15;
   if ((i8 | 0) == 1) {
    i4 = 0;
    return i4 | 0;
   }
   if (i8 >>> 0 <= 1 >>> 0) {
    i7 = i6;
    break;
   }
   i8 = i9 >>> 1 & 67108863;
   i7 = i6 >>> 0 < i8 >>> 0 ? i8 : i6;
  }
 } while (0);
 i6 = __ZNK7WebCore11RenderTable18topNonEmptySectionEv(i1) | 0;
 do {
  if ((i6 | 0) == 0) {
   i11 = i7;
  } else {
   i1 = HEAP32[i6 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[i1 + 40 >> 2]) & 1073741824 | 0) == 0) {
    i12 = __ZNK7WebCore11RenderStyle11borderStartEv(i1) | 0;
   } else {
    i12 = __ZNK7WebCore11RenderStyle9borderEndEv(i1) | 0;
   }
   i1 = HEAP32[i12 + 4 >> 2] | 0;
   i10 = i1 >>> 27 & 15;
   if ((i10 | 0) == 1) {
    i4 = 0;
    return i4 | 0;
   }
   if (i10 >>> 0 > 1 >>> 0) {
    i10 = i1 >>> 1 & 67108863;
    i13 = i7 >>> 0 < i10 >>> 0 ? i10 : i7;
   } else {
    i13 = i7;
   }
   i10 = __ZNK7WebCore18RenderTableSection31firstRowCellAdjoiningTableStartEv(i6) | 0;
   if ((i10 | 0) == 0) {
    i11 = i13;
    break;
   }
   i1 = i10 + 8 | 0;
   i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] | 0;
   i8 = HEAP32[i10 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0) {
    i14 = __ZNK7WebCore11RenderStyle11borderStartEv(i8) | 0;
   } else {
    i14 = __ZNK7WebCore11RenderStyle9borderEndEv(i8) | 0;
   }
   i8 = i14 + 4 | 0;
   if ((HEAP32[i8 >> 2] & 2013265920 | 0) == 134217728) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = HEAP32[i1 >> 2] | 0;
   i1 = HEAP32[i5 + 8 >> 2] | 0;
   i10 = HEAP32[i5 + 36 >> 2] | 0;
   if (((HEAP32[(HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2]) & 1073741824 | 0) == 0) {
    i15 = __ZNK7WebCore11RenderStyle11borderStartEv(i10) | 0;
   } else {
    i15 = __ZNK7WebCore11RenderStyle9borderEndEv(i10) | 0;
   }
   i10 = HEAP32[i15 + 4 >> 2] | 0;
   if ((i10 & 2013265920 | 0) == 134217728) {
    i4 = 0;
    return i4 | 0;
   }
   i1 = HEAP32[i8 >> 2] | 0;
   if ((i1 & 1879048192) >>> 0 > 134217728 >>> 0) {
    i8 = i1 >>> 1 & 67108863;
    i16 = i13 >>> 0 < i8 >>> 0 ? i8 : i13;
   } else {
    i16 = i13;
   }
   if ((i10 & 1879048192) >>> 0 <= 134217728 >>> 0) {
    i11 = i16;
    break;
   }
   i8 = i10 >>> 1 & 67108863;
   i11 = i16 >>> 0 < i8 >>> 0 ? i8 : i16;
  }
 } while (0);
 i4 = (((HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 ^ 1) + i11 | 0) >>> 1;
 return i4 | 0;
}
function __ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = i1 + 176 | 0;
 if ((HEAP8[i3] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 92 >> 2] & 2147483647;
 i7 = i2 + 116 | 0;
 if ((HEAP32[i7 >> 2] | 0) < 0) {
  i8 = __ZNK7WebCore15RenderTableCell19parseRowSpanFromDOMEv(i2) | 0;
  i9 = i8;
  i10 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = 1;
  i10 = i5;
 }
 i5 = i9 + i6 | 0;
 i6 = HEAP32[i10 + 8 >> 2] | 0;
 i10 = i6;
 if ((i5 - 1 | 0) >>> 0 < ((HEAP32[i6 + 100 >> 2] | 0) - 1 | 0) >>> 0) {
  i11 = i10;
  i12 = i5;
 } else {
  if ((HEAP8[i3] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i3 = i1 + 148 | 0;
  i5 = HEAP32[i3 >> 2] | 0;
  if ((i5 | 0) == (i10 | 0)) {
   i13 = 0;
   return i13 | 0;
  }
  i9 = i1 + 144 | 0;
  i4 = HEAP32[((HEAP32[i9 >> 2] | 0) == (i10 | 0) ? i1 + 28 | 0 : i6 + 16 | 0) >> 2] | 0;
  L15 : do {
   if ((i4 | 0) == 0) {
    i14 = i5;
    i15 = 16;
   } else {
    i6 = i4;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 511](i6) | 0) {
       if ((i6 | 0) == (HEAP32[i9 >> 2] | 0)) {
        break;
       }
       if ((i6 | 0) == (HEAP32[i3 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i6 + 100 >> 2] | 0) != 0) {
        i16 = i6;
        break L15;
       }
      }
     } while (0);
     i6 = HEAP32[i6 + 16 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
    }
    i14 = HEAP32[i3 >> 2] | 0;
    i15 = 16;
   }
  } while (0);
  do {
   if ((i15 | 0) == 16) {
    if ((i14 | 0) == 0) {
     i16 = 0;
     break;
    }
    i16 = (HEAP32[i14 + 100 >> 2] | 0) == 0 ? 0 : i14 | 0;
   }
  } while (0);
  i11 = i16;
  i12 = 0;
 }
 if ((i11 | 0) == 0) {
  i13 = 0;
  return i13 | 0;
 }
 i16 = HEAP32[i7 >> 2] & 536870911;
 i7 = HEAP32[i1 + 116 >> 2] | 0;
 i14 = i1 + 108 | 0;
 i1 = 0;
 i15 = 0;
 while (1) {
  if (i15 >>> 0 >= i7 >>> 0) {
   break;
  }
  i3 = (HEAP32[(HEAP32[i14 >> 2] | 0) + (i15 << 2) >> 2] | 0) + i1 | 0;
  if ((i3 - 1 | 0) >>> 0 < i16 >>> 0) {
   i1 = i3;
   i15 = i15 + 1 | 0;
  } else {
   break;
  }
 }
 if ((HEAP32[i11 + 100 >> 2] | 0) >>> 0 <= i12 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i11 + 92 >> 2] | 0;
 if ((HEAP32[i1 + (i12 * 28 & -1) + 8 >> 2] | 0) >>> 0 <= i15 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i11 = HEAP32[i1 + (i12 * 28 & -1) >> 2] | 0;
 i12 = HEAP32[i11 + (i15 * 20 & -1) + 8 >> 2] | 0;
 if ((i12 | 0) == 0) {
  i13 = 0;
  return i13 | 0;
 }
 i1 = _llvm_uadd_with_overflow_i32(i12 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i13 = HEAP32[(HEAP32[i11 + (i15 * 20 & -1) >> 2] | 0) + (i1 << 2) >> 2] | 0;
 return i13 | 0;
}
function __ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 176 | 0;
 if ((HEAP8[i3] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i4 + 92 >> 2] & 2147483647;
 i6 = HEAP32[i4 + 8 >> 2] | 0;
 i4 = i6;
 do {
  if ((i5 | 0) == 0) {
   if ((HEAP8[i3] & 4) != 0) {
    __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
   }
   i7 = i1 + 144 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == (i4 | 0)) {
    i9 = 0;
    return i9 | 0;
   }
   i10 = i1 + 148 | 0;
   i11 = HEAP32[((HEAP32[i10 >> 2] | 0) == (i4 | 0) ? i1 + 32 | 0 : i6 + 12 | 0) >> 2] | 0;
   L12 : do {
    if ((i11 | 0) == 0) {
     i12 = i8;
     i13 = 14;
    } else {
     i14 = i11;
     while (1) {
      do {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 204 >> 2] & 511](i14) | 0) {
        if ((i14 | 0) == (HEAP32[i7 >> 2] | 0)) {
         break;
        }
        if ((i14 | 0) == (HEAP32[i10 >> 2] | 0)) {
         break;
        }
        if ((HEAP32[i14 + 100 >> 2] | 0) != 0) {
         i15 = i14;
         break L12;
        }
       }
      } while (0);
      i14 = HEAP32[i14 + 12 >> 2] | 0;
      if ((i14 | 0) == 0) {
       break;
      }
     }
     i12 = HEAP32[i7 >> 2] | 0;
     i13 = 14;
    }
   } while (0);
   do {
    if ((i13 | 0) == 14) {
     if ((i12 | 0) == 0) {
      i9 = 0;
      return i9 | 0;
     } else {
      i15 = (HEAP32[i12 + 100 >> 2] | 0) == 0 ? 0 : i12 | 0;
      break;
     }
    }
   } while (0);
   if ((i15 | 0) == 0) {
    i9 = 0;
    return i9 | 0;
   } else {
    i16 = HEAP32[i15 + 100 >> 2] | 0;
    i17 = i15;
    break;
   }
  } else {
   if ((i6 | 0) == 0) {
    i9 = 0;
   } else {
    i16 = i5;
    i17 = i4;
    break;
   }
   return i9 | 0;
  }
 } while (0);
 i4 = i16 - 1 | 0;
 i16 = HEAP32[i2 + 116 >> 2] & 536870911;
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i5 = i1 + 108 | 0;
 i1 = 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= i2 >>> 0) {
   break;
  }
  i15 = (HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] | 0) + i1 | 0;
  if ((i15 - 1 | 0) >>> 0 < i16 >>> 0) {
   i1 = i15;
   i6 = i6 + 1 | 0;
  } else {
   break;
  }
 }
 if ((HEAP32[i17 + 100 >> 2] | 0) >>> 0 <= i4 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[i17 + 92 >> 2] | 0;
 if ((HEAP32[i1 + (i4 * 28 & -1) + 8 >> 2] | 0) >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i17 = HEAP32[i1 + (i4 * 28 & -1) >> 2] | 0;
 i4 = HEAP32[i17 + (i6 * 20 & -1) + 8 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 i1 = _llvm_uadd_with_overflow_i32(i4 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i9 = HEAP32[(HEAP32[i17 + (i6 * 20 & -1) >> 2] | 0) + (i1 << 2) >> 2] | 0;
 return i9 | 0;
}
function __ZN7WebCore11RenderTable14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 __ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 __ZN7WebCore13RenderElement33propagateStyleToAnonymousChildrenENS0_20StylePropagationTypeE(i1 | 0, 0);
 i2 = (i3 | 0) != 0;
 if (i2) {
  i4 = (HEAP32[i3 + 48 >> 2] | 0) >>> 27 & 1;
 } else {
  i4 = 0;
 }
 i5 = i1 + 36 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i6 + 44 >> 2] & 8 | 0) == 0) {
  i7 = __ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv(i6) | 0;
  i8 = i7;
  i9 = HEAP32[i5 >> 2] | 0;
 } else {
  i8 = 0;
  i9 = i6;
 }
 i6 = i1 + 178 | 0;
 HEAP16[i6 >> 1] = i8;
 if ((HEAP32[i9 + 44 >> 2] & 8 | 0) == 0) {
  i10 = __ZNK7WebCore11RenderStyle21verticalBorderSpacingEv(i9) | 0;
 } else {
  i10 = 0;
 }
 HEAP16[i1 + 180 >> 1] = i10;
 if ((HEAP32[i1 + 104 >> 2] | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[HEAP32[i1 + 96 >> 2] >> 2] = HEAP16[i6 >> 1] | 0;
 i6 = i1 + 156 | 0;
 i10 = HEAP32[i5 >> 2] | 0;
 i9 = HEAP32[i10 + 48 >> 2] | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i11 = 11;
 } else {
  if ((i9 >>> 27 & 1 | 0) != (i4 | 0)) {
   i11 = 11;
  }
 }
 L15 : do {
  if ((i11 | 0) == 11) {
   do {
    if ((i9 & 134217728 | 0) != 0) {
     i4 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i4 | 0) == 3 | (i4 | 0) == 0) {
      i12 = (HEAP32[i10 + 4 >> 2] | 0) + 4 | 0;
     } else {
      i12 = (HEAP32[i10 + 4 >> 2] | 0) + 12 | 0;
     }
     if ((HEAP8[i12 + 5 | 0] | 0) == 0) {
      break;
     }
     i4 = __ZN3WTF10fastMallocEj(20) | 0;
     __ZN7WebCore16FixedTableLayoutC1EPNS_11RenderTableE(i4, i1);
     i8 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i4;
     if ((i8 | 0) == 0) {
      break L15;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
     break L15;
    }
   } while (0);
   i8 = __ZN3WTF10fastMallocEj(212) | 0;
   __ZN7WebCore15AutoTableLayoutC1EPNS_11RenderTableE(i8, i1);
   i4 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i8;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i6 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i6 & 29 | 0) != 0) {
  return;
 }
 if ((i6 & 2 | 0) != 0 | i2 ^ 1) {
  return;
 }
 if (__ZNK7WebCore10BorderDataeqERKS0_((HEAP32[i3 + 16 >> 2] | 0) + 100 | 0, (HEAP32[(HEAP32[i5 >> 2] | 0) + 16 >> 2] | 0) + 100 | 0) | 0) {
  return;
 }
 i5 = i1 + 176 | 0;
 HEAP8[i5] = HEAP8[i5] & -2;
 i5 = i1 + 164 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 168 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 160 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderTable41convertStyleLogicalHeightToComputedHeightERKNS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, d20 = +0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = HEAP8[i3 + 5 | 0] | 0;
 do {
  if ((i10 << 24 >> 24 | 0) == 3) {
   do {
    if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
     i11 = HEAP32[i2 + 4 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i12 = 7;
      break;
     }
     if ((HEAP32[i11 + 12 >> 2] & 16 | 0) == 0) {
      i12 = 7;
      break;
     }
     if ((HEAP32[(HEAP32[i11 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8tableTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i12 = 7;
      break;
     }
     i13 = i2 + 36 | 0;
     i12 = 8;
    } else {
     i12 = 7;
    }
   } while (0);
   if ((i12 | 0) == 7) {
    i11 = i2 + 36 | 0;
    if ((HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) == 0) {
     d14 = +0;
    } else {
     i13 = i11;
     i12 = 8;
    }
   }
   if ((i12 | 0) == 8) {
    i11 = i2;
    i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 511](i2) | 0;
    if ((HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 720 >> 2] & 127](i6, i2 | 0);
     i16 = HEAP32[i6 >> 2] | 0;
    } else {
     HEAP32[i6 >> 2] = 0;
     i16 = 0;
    }
    i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 756 >> 2] & 511](i2) | 0;
    if ((HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 724 >> 2] & 127](i7, i2 | 0);
     i18 = HEAP32[i7 >> 2] | 0;
    } else {
     HEAP32[i7 >> 2] = 0;
     i18 = 0;
    }
    d14 = +(i16 + i15 + i17 + i18 | 0);
   }
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    d19 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d19 = +HEAPF32[i3 >> 2];
   }
   d20 = d19 - d14;
   if (d20 >= +2147483647) {
    i21 = 2147483647;
    break;
   }
   if (d20 <= +-2147483648) {
    i21 = -2147483648;
    break;
   }
   i21 = ~~d20;
  } else if ((i10 << 24 >> 24 | 0) == 10 | (i10 << 24 >> 24 | 0) == 2) {
   __ZNK7WebCore9RenderBox30computePercentageLogicalHeightERKNS_6LengthE(i8, i2 | 0, i3);
   i21 = HEAP32[i8 >> 2] | 0;
  } else {
   if ((i10 - 11 & 255) >>> 0 >= 4 >>> 0) {
    i21 = 0;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i9, i3, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i21 = HEAP32[i9 >> 2] | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i21 | 0) > 0 ? i21 : 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderTable19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i7 | 0) == 0 | (i7 | 0) == (i1 | 0))) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i8 = i1 | 0;
 i9 = i1 + 52 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i3;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i10;
 HEAP32[i3 + 4 >> 2] = i11;
 __ZNK7WebCore11RenderTable19subtractCaptionRectERNS_10LayoutRectE(i1, i6);
 i11 = __ZNK7WebCore9RenderBox33determineBackgroundBleedAvoidanceEPNS_15GraphicsContextE(i8, HEAP32[i2 >> 2] | 0) | 0;
 i3 = i1 | 0;
 i10 = i1 + 36 | 0;
 if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 808 >> 2] & 15](i3, i11, 0) | 0)) {
  __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i3, i2, i6, HEAP32[i10 >> 2] | 0, 0, 1, 1);
 }
 __ZN7WebCore9RenderBox15paintBackgroundERKNS_9PaintInfoERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE(i8, i2, i6, i11);
 __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i3, i2, i6, HEAP32[i10 >> 2] | 0, 1, 1, 1);
 i11 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i11 + 16 >> 2] | 0;
 i8 = (HEAP32[(HEAP32[i10 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
 i1 = HEAP32[i10 + 104 >> 2] | 0;
 i5 = (i1 & 134217726 | 0) == 0;
 if (i5 | i8) {
  if (i5) {
   i12 = 7;
  }
 } else {
  if ((i1 & 2013265920 | 0) == 0) {
   i12 = 7;
  }
 }
 do {
  if ((i12 | 0) == 7) {
   i1 = HEAP32[i10 + 112 >> 2] | 0;
   i5 = (i1 & 134217726 | 0) == 0;
   if (i5 | i8) {
    if (!i5) {
     break;
    }
   } else {
    if ((i1 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i1 = HEAP32[i10 + 120 >> 2] | 0;
   i5 = (i1 & 134217726 | 0) == 0;
   if (i5 | i8) {
    if (!i5) {
     break;
    }
   } else {
    if ((i1 & 2013265920 | 0) != 0) {
     break;
    }
   }
   i1 = HEAP32[i10 + 128 >> 2] | 0;
   i5 = (i1 & 134217726 | 0) == 0;
   if (i5 | i8) {
    if (!i5) {
     break;
    }
    STACKTOP = i4;
    return;
   } else {
    if ((i1 & 2013265920 | 0) != 0) {
     break;
    }
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 if ((HEAP32[i11 + 44 >> 2] & 8 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i3, i2, i6, i11, 0, 1, 1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderTable15outerBorderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i5 = i4 >>> 13 & 3;
 if ((i5 | 0) == 1) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i7 = HEAP32[i1 + 148 >> 2] | 0;
  L9 : do {
   if ((i7 | 0) == 0) {
    i8 = i1 + 32 | 0;
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break L9;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0) {
      break;
     } else {
      i8 = i9 + 12 | 0;
     }
    }
    i11 = i9;
    i12 = 13;
   } else {
    i11 = i7;
    i12 = 13;
   }
  } while (0);
  do {
   if ((i12 | 0) == 13) {
    i7 = HEAP32[i11 + 136 >> 2] | 0;
    if ((i7 | 0) < 0) {
     i6 = 0;
    } else {
     i10 = i7;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i11 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
  i2 = i11 >>> 27 & 15;
  if ((i2 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i2 >>> 0 <= 1 >>> 0) {
   i6 = i10;
   return i6 | 0;
  }
  i2 = ((i11 >>> 1 & 67108863) + 1 | 0) >>> 1;
  i6 = (i10 | 0) < (i2 | 0) ? i2 : i10;
  return i6 | 0;
 } else if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  if ((HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0) {
   i6 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i1) | 0;
   return i6 | 0;
  } else {
   i6 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i1) | 0;
   return i6 | 0;
  }
 } else {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i4 = HEAP32[i1 + 144 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i5 = HEAP32[i1 + 152 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i13 = i5;
     i12 = 21;
     break;
    }
    i5 = HEAP32[i1 + 148 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i14 = 0;
    } else {
     i13 = i5;
     i12 = 21;
    }
   } else {
    i13 = i4;
    i12 = 21;
   }
  } while (0);
  do {
   if ((i12 | 0) == 21) {
    i4 = HEAP32[i13 + 132 >> 2] | 0;
    if ((i4 | 0) < 0) {
     i6 = 0;
    } else {
     i14 = i4;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i13 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i3) | 0) + 4 >> 2] | 0;
  i3 = i13 >>> 27 & 15;
  if ((i3 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i3 >>> 0 <= 1 >>> 0) {
   i6 = i14;
   return i6 | 0;
  }
  i3 = i13 >>> 2 & 33554431;
  i6 = (i14 | 0) < (i3 | 0) ? i3 : i14;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderTable16outerBorderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i5 = i4 >>> 13 & 3;
 if ((i5 | 0) == 1) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i7 = HEAP32[i1 + 144 >> 2] | 0;
  do {
   if ((i7 | 0) == 0) {
    i8 = HEAP32[i1 + 152 >> 2] | 0;
    if ((i8 | 0) != 0) {
     i9 = i8;
     i10 = 9;
     break;
    }
    i8 = HEAP32[i1 + 148 >> 2] | 0;
    if ((i8 | 0) == 0) {
     i11 = 0;
    } else {
     i9 = i8;
     i10 = 9;
    }
   } else {
    i9 = i7;
    i10 = 9;
   }
  } while (0);
  do {
   if ((i10 | 0) == 9) {
    i7 = HEAP32[i9 + 132 >> 2] | 0;
    if ((i7 | 0) < 0) {
     i6 = 0;
    } else {
     i11 = i7;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i9 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i3) | 0) + 4 >> 2] | 0;
  i7 = i9 >>> 27 & 15;
  if ((i7 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i7 >>> 0 <= 1 >>> 0) {
   i6 = i11;
   return i6 | 0;
  }
  i7 = i9 >>> 2 & 33554431;
  i6 = (i11 | 0) < (i7 | 0) ? i7 : i11;
  return i6 | 0;
 } else if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  if ((HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0) {
   i6 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i1) | 0;
   return i6 | 0;
  } else {
   i6 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i1) | 0;
   return i6 | 0;
  }
 } else {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i4 = HEAP32[i1 + 148 >> 2] | 0;
  L27 : do {
   if ((i4 | 0) == 0) {
    i3 = i1 + 32 | 0;
    while (1) {
     i12 = HEAP32[i3 >> 2] | 0;
     if ((i12 | 0) == 0) {
      i13 = 0;
      break L27;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 204 >> 2] & 511](i12) | 0) {
      break;
     } else {
      i3 = i12 + 12 | 0;
     }
    }
    i14 = i12;
    i10 = 21;
   } else {
    i14 = i4;
    i10 = 21;
   }
  } while (0);
  do {
   if ((i10 | 0) == 21) {
    i4 = HEAP32[i14 + 136 >> 2] | 0;
    if ((i4 | 0) < 0) {
     i6 = 0;
    } else {
     i13 = i4;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i14 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
  i2 = i14 >>> 27 & 15;
  if ((i2 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i2 >>> 0 <= 1 >>> 0) {
   i6 = i13;
   return i6 | 0;
  }
  i2 = ((i14 >>> 1 & 67108863) + 1 | 0) >>> 1;
  i6 = (i13 | 0) < (i2 | 0) ? i2 : i13;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderTable14outerBorderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i5 = i4 >>> 13 & 3;
 if ((i5 | 0) == 3) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i7 = HEAP32[i1 + 148 >> 2] | 0;
  L9 : do {
   if ((i7 | 0) == 0) {
    i8 = i1 + 32 | 0;
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break L9;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0) {
      break;
     } else {
      i8 = i9 + 12 | 0;
     }
    }
    i11 = i9;
    i12 = 10;
   } else {
    i11 = i7;
    i12 = 10;
   }
  } while (0);
  do {
   if ((i12 | 0) == 10) {
    i7 = HEAP32[i11 + 136 >> 2] | 0;
    if ((i7 | 0) < 0) {
     i6 = 0;
    } else {
     i10 = i7;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i11 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
  i2 = i11 >>> 27 & 15;
  if ((i2 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i2 >>> 0 <= 1 >>> 0) {
   i6 = i10;
   return i6 | 0;
  }
  i2 = ((i11 >>> 1 & 67108863) + 1 | 0) >>> 1;
  i6 = (i10 | 0) < (i2 | 0) ? i2 : i10;
  return i6 | 0;
 } else if ((i5 | 0) == 0) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i4 = HEAP32[i1 + 144 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i5 = HEAP32[i1 + 152 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i13 = i5;
     i12 = 18;
     break;
    }
    i5 = HEAP32[i1 + 148 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i14 = 0;
    } else {
     i13 = i5;
     i12 = 18;
    }
   } else {
    i13 = i4;
    i12 = 18;
   }
  } while (0);
  do {
   if ((i12 | 0) == 18) {
    i4 = HEAP32[i13 + 132 >> 2] | 0;
    if ((i4 | 0) < 0) {
     i6 = 0;
    } else {
     i14 = i4;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i13 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i3) | 0) + 4 >> 2] | 0;
  i12 = i13 >>> 27 & 15;
  if ((i12 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i12 >>> 0 <= 1 >>> 0) {
   i6 = i14;
   return i6 | 0;
  }
  i12 = i13 >>> 2 & 33554431;
  i6 = (i14 | 0) < (i12 | 0) ? i12 : i14;
  return i6 | 0;
 } else {
  if ((HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0) {
   i6 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i1) | 0;
   return i6 | 0;
  } else {
   i6 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i1) | 0;
   return i6 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderTable17outerBorderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 i5 = i4 >>> 13 & 3;
 if ((i5 | 0) == 0) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i7 = HEAP32[i1 + 148 >> 2] | 0;
  L9 : do {
   if ((i7 | 0) == 0) {
    i8 = i1 + 32 | 0;
    while (1) {
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i10 = 0;
      break L9;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 204 >> 2] & 511](i9) | 0) {
      break;
     } else {
      i8 = i9 + 12 | 0;
     }
    }
    i11 = i9;
    i12 = 18;
   } else {
    i11 = i7;
    i12 = 18;
   }
  } while (0);
  do {
   if ((i12 | 0) == 18) {
    i7 = HEAP32[i11 + 136 >> 2] | 0;
    if ((i7 | 0) < 0) {
     i6 = 0;
    } else {
     i10 = i7;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i11 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
  i2 = i11 >>> 27 & 15;
  if ((i2 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i2 >>> 0 <= 1 >>> 0) {
   i6 = i10;
   return i6 | 0;
  }
  i2 = ((i11 >>> 1 & 67108863) + 1 | 0) >>> 1;
  i6 = (i10 | 0) < (i2 | 0) ? i2 : i10;
  return i6 | 0;
 } else if ((i5 | 0) == 3) {
  if ((i4 & 8 | 0) == 0) {
   i6 = 0;
   return i6 | 0;
  }
  i4 = HEAP32[i1 + 144 >> 2] | 0;
  do {
   if ((i4 | 0) == 0) {
    i5 = HEAP32[i1 + 152 >> 2] | 0;
    if ((i5 | 0) != 0) {
     i13 = i5;
     i12 = 6;
     break;
    }
    i5 = HEAP32[i1 + 148 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i14 = 0;
    } else {
     i13 = i5;
     i12 = 6;
    }
   } else {
    i13 = i4;
    i12 = 6;
   }
  } while (0);
  do {
   if ((i12 | 0) == 6) {
    i4 = HEAP32[i13 + 132 >> 2] | 0;
    if ((i4 | 0) < 0) {
     i6 = 0;
    } else {
     i14 = i4;
     break;
    }
    return i6 | 0;
   }
  } while (0);
  i13 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i3) | 0) + 4 >> 2] | 0;
  i12 = i13 >>> 27 & 15;
  if ((i12 | 0) == 1) {
   i6 = 0;
   return i6 | 0;
  }
  if (i12 >>> 0 <= 1 >>> 0) {
   i6 = i14;
   return i6 | 0;
  }
  i12 = i13 >>> 2 & 33554431;
  i6 = (i14 | 0) < (i12 | 0) ? i12 : i14;
  return i6 | 0;
 } else {
  if ((HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0) {
   i6 = __ZNK7WebCore11RenderTable16outerBorderStartEv(i1) | 0;
   return i6 | 0;
  } else {
   i6 = __ZNK7WebCore11RenderTable14outerBorderEndEv(i1) | 0;
   return i6 | 0;
  }
 }
 return 0;
}
function __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 192 | 0;
 do {
  if ((HEAP8[(HEAP32[i1 + 116 >> 2] | 0) + 224 | 0] & 1) != 0) {
   i11 = HEAP32[i10 >> 2] | 0;
   if ((HEAP8[i11 | 0] & 2) != 0) {
    break;
   }
   i12 = i2 + 20 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 & 4194304 | 0) != 0) {
    break;
   }
   if ((i13 & 805306368 | 0) == 0) {
    i14 = i11;
   } else {
    if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0) != 0) {
     break;
    }
    i14 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i14 + 8 >> 2] | 0) != 0) {
    break;
   }
   i11 = HEAP32[i2 + 24 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 120 >> 2] | 0) != (HEAP32[__ZN3WTF8nullAtomE >> 2] | 0)) {
    if ((i11 & 32 | 0) != 0) {
     break;
    }
   }
   i13 = i2 + 24 | 0;
   if ((i11 & 16 | 0) == 0) {
    i15 = i14;
   } else {
    if ((__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i2) | 0) != 0) {
     break;
    }
    i15 = HEAP32[i10 >> 2] | 0;
   }
   if ((HEAP32[i15 + 16 >> 2] | 0) == 0) {
    i16 = 0;
    STACKTOP = i7;
    return i16 | 0;
   }
   if ((HEAP32[i13 >> 2] & 16 | 0) == 0) {
    i16 = 0;
    STACKTOP = i7;
    return i16 | 0;
   }
   if ((HEAP32[i12 >> 2] & 1088 | 0) == 0) {
    i16 = 0;
   } else {
    break;
   }
   STACKTOP = i7;
   return i16 | 0;
  }
 } while (0);
 __ZN7WebCore10RenderView35pushLayoutStateForCurrentFlowThreadERKNS_12RenderObjectE(i1, i2 | 0);
 i1 = __Znwj(88) | 0;
 i15 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i14 = i8 | 0;
 HEAP32[i14 >> 2] = i15;
 HEAP32[i9 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore11LayoutStateC1ENSt3__110unique_ptrIS0_NS1_14default_deleteIS0_EEEEPNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i1, i8, i2, i3, i9, i5, i6);
 i6 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore11LayoutStateD1Ev(i6);
  __ZdlPv(i6 | 0);
 }
 i6 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 if ((i6 | 0) == 0) {
  i16 = 1;
  STACKTOP = i7;
  return i16 | 0;
 }
 __ZN7WebCore11LayoutStateD1Ev(i6);
 __ZdlPv(i6 | 0);
 i16 = 1;
 STACKTOP = i7;
 return i16 | 0;
}
function __ZNK7WebCore11RenderTable16outerBorderStartEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 44 >> 2] & 8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(__ZNK7WebCore11RenderStyle11borderStartEv(i3) | 0) + 4 >> 2] | 0;
 i3 = i5 >>> 27 & 15;
 if ((i3 | 0) == 1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 > 1 >>> 0) {
  i6 = (((HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1 ^ 1) + (i5 >>> 1 & 67108863) | 0) >>> 1;
 } else {
  i6 = 0;
 }
 i5 = i1 + 144 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i7 = i3;
    i8 = 8;
    break;
   }
   i3 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i9 = i6;
    i10 = 1;
   } else {
    i7 = i3;
    i8 = 8;
   }
  } else {
   i7 = i2;
   i8 = 8;
  }
 } while (0);
 L13 : do {
  if ((i8 | 0) == 8) {
   i2 = i1 + 176 | 0;
   i3 = i1 + 148 | 0;
   i11 = i1 + 28 | 0;
   i12 = i6;
   i13 = 1;
   i14 = i7;
   while (1) {
    i15 = HEAP32[i14 + 124 >> 2] | 0;
    if ((i15 | 0) < 0) {
     i16 = i13;
     i17 = i12;
    } else {
     i16 = 0;
     i17 = (i12 | 0) < (i15 | 0) ? i15 : i12;
    }
    if ((HEAP8[i2] & 4) != 0) {
     __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
    }
    i15 = HEAP32[i3 >> 2] | 0;
    if ((i15 | 0) == (i14 | 0)) {
     i9 = i17;
     i10 = i16;
     break L13;
    }
    i18 = HEAP32[((HEAP32[i5 >> 2] | 0) == (i14 | 0) ? i11 : i14 + 16 | 0) >> 2] | 0;
    L24 : do {
     if ((i18 | 0) == 0) {
      i19 = i15;
      i8 = 21;
     } else {
      i20 = i18;
      while (1) {
       do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 204 >> 2] & 511](i20) | 0) {
         if ((i20 | 0) == (HEAP32[i5 >> 2] | 0)) {
          break;
         }
         if ((i20 | 0) != (HEAP32[i3 >> 2] | 0)) {
          i21 = i20;
          break L24;
         }
        }
       } while (0);
       i20 = HEAP32[i20 + 16 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
      }
      i19 = HEAP32[i3 >> 2] | 0;
      i8 = 21;
     }
    } while (0);
    if ((i8 | 0) == 21) {
     i8 = 0;
     i21 = i19 | 0;
    }
    if ((i21 | 0) == 0) {
     i9 = i17;
     i10 = i16;
     break;
    } else {
     i12 = i17;
     i13 = i16;
     i14 = i21;
    }
   }
  }
 } while (0);
 i4 = i10 ? 0 : i9;
 return i4 | 0;
}
function __ZNK7WebCore11RenderTable14outerBorderEndEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i3 + 44 >> 2] & 8 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(__ZNK7WebCore11RenderStyle9borderEndEv(i3) | 0) + 4 >> 2] | 0;
 i3 = i5 >>> 27 & 15;
 if ((i3 | 0) == 1) {
  i4 = 0;
  return i4 | 0;
 }
 if (i3 >>> 0 > 1 >>> 0) {
  i6 = (((HEAP32[(HEAP32[i2 >> 2] | 0) + 40 >> 2] | 0) >>> 30 & 1) + (i5 >>> 1 & 67108863) | 0) >>> 1;
 } else {
  i6 = 0;
 }
 i5 = i1 + 144 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i7 = i3;
    i8 = 8;
    break;
   }
   i3 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i9 = i6;
    i10 = 1;
   } else {
    i7 = i3;
    i8 = 8;
   }
  } else {
   i7 = i2;
   i8 = 8;
  }
 } while (0);
 L13 : do {
  if ((i8 | 0) == 8) {
   i2 = i1 + 176 | 0;
   i3 = i1 + 148 | 0;
   i11 = i1 + 28 | 0;
   i12 = i6;
   i13 = 1;
   i14 = i7;
   while (1) {
    i15 = HEAP32[i14 + 128 >> 2] | 0;
    if ((i15 | 0) < 0) {
     i16 = i13;
     i17 = i12;
    } else {
     i16 = 0;
     i17 = (i12 | 0) < (i15 | 0) ? i15 : i12;
    }
    if ((HEAP8[i2] & 4) != 0) {
     __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
    }
    i15 = HEAP32[i3 >> 2] | 0;
    if ((i15 | 0) == (i14 | 0)) {
     i9 = i17;
     i10 = i16;
     break L13;
    }
    i18 = HEAP32[((HEAP32[i5 >> 2] | 0) == (i14 | 0) ? i11 : i14 + 16 | 0) >> 2] | 0;
    L24 : do {
     if ((i18 | 0) == 0) {
      i19 = i15;
      i8 = 21;
     } else {
      i20 = i18;
      while (1) {
       do {
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 204 >> 2] & 511](i20) | 0) {
         if ((i20 | 0) == (HEAP32[i5 >> 2] | 0)) {
          break;
         }
         if ((i20 | 0) != (HEAP32[i3 >> 2] | 0)) {
          i21 = i20;
          break L24;
         }
        }
       } while (0);
       i20 = HEAP32[i20 + 16 >> 2] | 0;
       if ((i20 | 0) == 0) {
        break;
       }
      }
      i19 = HEAP32[i3 >> 2] | 0;
      i8 = 21;
     }
    } while (0);
    if ((i8 | 0) == 21) {
     i8 = 0;
     i21 = i19 | 0;
    }
    if ((i21 | 0) == 0) {
     i9 = i17;
     i10 = i16;
     break;
    } else {
     i12 = i17;
     i13 = i16;
     i14 = i21;
    }
   }
  }
 } while (0);
 i4 = i10 ? 0 : i9;
 return i4 | 0;
}
function __ZNK7WebCore11RenderTable19subtractCaptionRectERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 128 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i1 + 120 | 0;
 i9 = i4 | 0;
 i10 = i5 | 0;
 i11 = i1 + 36 | 0;
 i1 = i2 + 8 | 0;
 i12 = i2 | 0;
 i13 = i2 + 12 | 0;
 i14 = i2 + 4 | 0;
 i2 = 0;
 i15 = i7;
 while (1) {
  i7 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i16 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i16 | 0) == 3 | (i16 | 0) == 0) {
   i17 = i7 + 56 | 0;
  } else {
   i17 = i7 + 52 | 0;
  }
  if (i15 >>> 0 <= i2 >>> 0) {
   i18 = 7;
   break;
  }
  i19 = HEAP32[i17 >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i4, i7 + 60 | 0, i16);
  if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i18 = 9;
   break;
  }
  i16 = (HEAP32[i9 >> 2] | 0) + i19 | 0;
  i19 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i5, i19 + 60 | 0, (HEAP32[(HEAP32[i19 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
  i19 = i16 + (HEAP32[i10 >> 2] | 0) | 0;
  if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i2 >>> 0) {
   i18 = 11;
   break;
  }
  i16 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i7 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] & 6 | 0) != 2 ^ ((i16 | 0) == 1 | (i16 | 0) == 3);
  do {
   if ((i16 | 0) == 3 | (i16 | 0) == 0) {
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i19;
    if (!i7) {
     break;
    }
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i19;
   } else {
    HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - i19;
    if (!i7) {
     break;
    }
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i19;
   }
  } while (0);
  i19 = i2 + 1 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  if (i19 >>> 0 < i7 >>> 0) {
   i2 = i19;
   i15 = i7;
  } else {
   i18 = 20;
   break;
  }
 }
 if ((i18 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 9) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i18 | 0) == 20) {
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderTable38bordersPaddingAndSpacingInRowDirectionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i2;
 i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 760 >> 2] & 511](i2) | 0;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 764 >> 2] & 511](i2) | 0) + i9 | 0;
 i9 = i2 + 36 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i8 + 44 >> 2] | 0;
 if ((i11 & 8 | 0) != 0) {
  i12 = 0;
  i13 = i1 | 0;
  i14 = i10 + i12 | 0;
  HEAP32[i13 >> 2] = i14;
  STACKTOP = i3;
  return;
 }
 i15 = i2 | 0;
 i16 = i4;
 i17 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i8 + 16 >> 2] | 0) + 68 | 0, i11 >>> 13 & 3, (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i8 = HEAP32[i17 >> 2] | 0;
 i11 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i8;
 HEAP32[i4 + 4 >> 2] = i11;
 if ((i8 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i15, i16);
 if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
 }
 i16 = HEAP32[i5 >> 2] | 0;
 i5 = i6;
 i11 = HEAP32[i9 >> 2] | 0;
 i9 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i11 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i11 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i8 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i11;
 HEAP32[i6 + 4 >> 2] = i8;
 if ((i11 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i7, i15, i5);
 if ((HEAP8[i5 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 }
 i5 = HEAP32[i2 + 116 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i18 = 0;
 } else {
  i15 = i5 + 1 | 0;
  i18 = Math_imul(HEAP16[i2 + 178 >> 1] | 0, i15 >>> 0 < 2147483647 >>> 0 ? i15 : 2147483647) | 0;
 }
 i12 = (HEAP32[i7 >> 2] | 0) + i16 + i18 | 0;
 i13 = i1 | 0;
 i14 = i10 + i12 | 0;
 HEAP32[i13 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderTable17updateColumnCacheEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 28 | 0;
 while (1) {
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 5;
   break;
  }
  i7 = i5;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 192 >> 2] & 511](i5) | 0) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 196 >> 2] & 511](i5) | 0) {
   i4 = i5 + 16 | 0;
  } else {
   i6 = 5;
   break;
  }
 }
 if ((i6 | 0) == 5) {
  HEAP32[i3 >> 2] = 0;
  i8 = i1 + 176 | 0;
  i9 = HEAP8[i8] | 0;
  i10 = i9 | 16;
  HEAP8[i8] = i10;
  STACKTOP = i2;
  return;
 }
 i4 = i5;
 HEAP32[i3 >> 2] = i4;
 if ((i5 | 0) == 0) {
  i8 = i1 + 176 | 0;
  i9 = HEAP8[i8] | 0;
  i10 = i9 | 16;
  HEAP8[i8] = i10;
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 132 | 0;
 i7 = i1 + 140 | 0;
 i11 = i1 + 136 | 0;
 i12 = i5 | 0;
 i13 = i3;
 i14 = i4;
 while (1) {
  do {
   if ((HEAP32[i14 + 28 >> 2] | 0) == 0) {
    i4 = HEAP32[i7 >> 2] | 0;
    if ((i4 | 0) != (HEAP32[i11 >> 2] | 0)) {
     HEAP32[(HEAP32[i12 >> 2] | 0) + (i4 << 2) >> 2] = i14;
     HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
     break;
    }
    i15 = i4 + 1 | 0;
    i16 = HEAP32[i12 >> 2] | 0;
    do {
     if (i16 >>> 0 > i3 >>> 0) {
      i6 = 13;
     } else {
      if ((i16 + (i4 << 2) | 0) >>> 0 <= i3 >>> 0) {
       i6 = 13;
       break;
      }
      __ZN3WTF6VectorIPN7WebCore14RenderTableColELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i15);
      i17 = HEAP32[i12 >> 2] | 0;
      i18 = i17 + (i13 - i16 >> 2 << 2) | 0;
      i19 = i17;
     }
    } while (0);
    if ((i6 | 0) == 13) {
     i6 = 0;
     __ZN3WTF6VectorIPN7WebCore14RenderTableColELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i15);
     i18 = i3;
     i19 = HEAP32[i12 >> 2] | 0;
    }
    HEAP32[i19 + (HEAP32[i7 >> 2] << 2) >> 2] = HEAP32[i18 >> 2];
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
   }
  } while (0);
  i14 = __ZNK7WebCore14RenderTableCol10nextColumnEv(HEAP32[i3 >> 2] | 0) | 0;
  HEAP32[i3 >> 2] = i14;
  if ((i14 | 0) == 0) {
   break;
  }
 }
 i8 = i1 + 176 | 0;
 i9 = HEAP8[i8] | 0;
 i10 = i9 | 16;
 HEAP8[i8] = i10;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderTable12appendColumnEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 108 | 0;
 i6 = i1 + 116 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i7 | 0) == (HEAP32[i1 + 112 >> 2] | 0)) {
  i8 = i7 + 1 | 0;
  i9 = i5 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if (i10 >>> 0 > i4 >>> 0) {
    i11 = 5;
   } else {
    if ((i10 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
     i11 = 5;
     break;
    }
    __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
    i12 = HEAP32[i9 >> 2] | 0;
    i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
    i14 = i12;
   }
  } while (0);
  if ((i11 | 0) == 5) {
   __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i8);
   i13 = i4;
   i14 = HEAP32[i9 >> 2] | 0;
  }
  HEAP32[i14 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 } else {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i2;
 }
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i2 = i1 + 28 | 0;
 while (1) {
  i5 = HEAP32[i2 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 204 >> 2] & 511](i5) | 0) {
   i15 = i5;
   i11 = 11;
   break;
  } else {
   i2 = i5 + 16 | 0;
  }
 }
 L14 : do {
  if ((i11 | 0) == 11) {
   L15 : while (1) {
    i11 = 0;
    if ((HEAP8[i15 + 140 | 0] & 1) == 0) {
     __ZN7WebCore18RenderTableSection12appendColumnEj(i15, i7);
     i16 = i15;
    } else {
     i16 = i15;
    }
    while (1) {
     i2 = HEAP32[i16 + 16 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break L14;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
      i15 = i2;
      i11 = 11;
      continue L15;
     } else {
      i16 = i2;
     }
    }
   }
  }
 } while (0);
 i16 = (HEAP32[i6 >> 2] | 0) + 1 | 0;
 if ((HEAP32[i1 + 100 >> 2] | 0) >>> 0 >= i16 >>> 0) {
  i17 = i1 + 104 | 0;
  HEAP32[i17 >> 2] = i16;
  STACKTOP = i3;
  return;
 }
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 + 96 | 0, i16);
 i17 = i1 + 104 | 0;
 HEAP32[i17 >> 2] = i16;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderTable5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i1 | 0;
 i9 = i1 + 44 | 0;
 i10 = (HEAP32[i9 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i9 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = i10;
 i10 = i2 + 20 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) != (i12 | 0)) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i6, i8);
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
   i13 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i1 | 0, HEAP32[i10 >> 2] | 0) | 0;
   i14 = i6 | 0;
   i15 = (HEAP32[i14 >> 2] | 0) - i13 | 0;
   i16 = i6 + 8 | 0;
   i17 = i13 << 1;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i17;
   i16 = i6 + 4 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - i13 | 0;
   i13 = i6 + 12 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i17;
   i17 = HEAP32[i3 >> 2] | 0;
   HEAP32[i14 >> 2] = i15 + (HEAP32[i11 >> 2] | 0);
   HEAP32[i16 >> 2] = i18 + i17;
   i17 = i2 + 4 | 0;
   i18 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i7 + 4 >> 2] = i18;
   i18 = i2 + 12 | 0;
   i17 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i7 + 12 >> 2] = i17;
   if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i6, i7) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i7 = __ZN7WebCore9RenderBox16pushContentsClipERNS_9PaintInfoERKNS_11LayoutPointE(i8, i2, i5) | 0;
 __ZN7WebCore11RenderTable11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i5);
 if (!i7) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9RenderBox15popContentsClipERNS_9PaintInfoENS_10PaintPhaseERKNS_11LayoutPointE(i8, i2, i9, i5);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (i5 >>> 0 > i3 >>> 0) {
   HEAP32[i4 >> 2] = i3;
  } else {
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if (i7 >>> 0 >= i3 >>> 0) {
    break;
   }
   do {
    if ((i7 | 0) == 0) {
     i8 = 0;
    } else {
     if ((i5 | 0) != 0) {
      HEAP32[i4 >> 2] = 0;
     }
     i9 = i1 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     if ((i10 | 0) == 0) {
      i8 = i7;
      break;
     }
     HEAP32[i9 >> 2] = 0;
     HEAP32[i6 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i10);
     i8 = HEAP32[i6 >> 2] | 0;
    }
   } while (0);
   if (i8 >>> 0 >= i3 >>> 0) {
    break;
   }
   i7 = i1 | 0;
   i10 = HEAP32[i7 >> 2] | 0;
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i6 >> 2] = i11 >>> 2;
   i12 = __ZN3WTF10fastMallocEj(i11) | 0;
   HEAP32[i7 >> 2] = i12;
   i11 = i10;
   _memcpy(i12 | 0, i11 | 0, i9 << 2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i7 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i6 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i8 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = i1 << 2;
 if ((i5 | 0) > 0) {
  i11 = i5 >> 2;
  i5 = HEAP32[i8 >> 2] | 0;
  while (1) {
   HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
   i7 = i11 - 1 | 0;
   if ((i7 | 0) > 0) {
    i11 = i7;
    i5 = i5 + 4 | 0;
   } else {
    break;
   }
  }
  i13 = HEAP32[i4 >> 2] | 0;
 } else {
  i13 = i1;
 }
 i1 = HEAP32[i8 >> 2] | 0;
 i8 = i1 + (i3 << 2) | 0;
 if ((i13 | 0) == (i3 | 0)) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i5 = i1 + (i13 << 2) | 0;
 while (1) {
  HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
  i5 = i5 + 4 | 0;
  if ((i5 | 0) == (i8 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i3;
 return;
}
function __ZN7WebCore11RenderTable22recalcCollapsedBordersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 176 | 0;
 i3 = HEAP8[i2] | 0;
 if ((i3 & 1) != 0) {
  return;
 }
 HEAP8[i2] = i3 | 1;
 i3 = i1 + 160 | 0;
 i2 = i1 + 164 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) != 0) {
   i4 = i1 + 168 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i3 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i2 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = i1 + 28 | 0;
 while (1) {
  i1 = HEAP32[i2 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 204 >> 2] & 511](i1) | 0) {
   i6 = i1;
   i7 = 10;
   break;
  } else {
   i2 = i1 + 16 | 0;
  }
 }
 L14 : do {
  if ((i7 | 0) == 10) {
   L15 : while (1) {
    i7 = 0;
    i2 = HEAP32[i6 + 28 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i8 = i6;
    } else {
     i1 = i2;
     while (1) {
      i2 = HEAP32[i1 + 28 >> 2] | 0;
      if ((i2 | 0) != 0) {
       i5 = i2;
       while (1) {
        __ZNK7WebCore15RenderTableCell19collectBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE(i5, i3);
        i5 = HEAP32[i5 + 16 >> 2] | 0;
        if ((i5 | 0) == 0) {
         break;
        }
       }
      }
      i5 = HEAP32[i1 + 16 >> 2] | 0;
      if ((i5 | 0) == 0) {
       i8 = i6;
       break;
      } else {
       i1 = i5;
      }
     }
    }
    while (1) {
     i1 = HEAP32[i8 + 16 >> 2] | 0;
     if ((i1 | 0) == 0) {
      break L14;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 204 >> 2] & 511](i1) | 0) {
      i6 = i1;
      i7 = 10;
      continue L15;
     } else {
      i8 = i1;
     }
    }
   }
  }
 } while (0);
 __ZN7WebCore15RenderTableCell16sortBorderValuesERN3WTF6VectorINS_20CollapsedBorderValueELj0ENS1_15CrashOnOverflowEEE(i3);
 return;
}
function __ZNK7WebCore11RenderTable12sectionBelowEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i4 = i1 + 148 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 + 144 | 0;
 i8 = HEAP32[((HEAP32[i7 >> 2] | 0) == (i2 | 0) ? i1 + 28 | 0 : i2 + 16 | 0) >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == 0) {
   i9 = i5;
   i10 = 16;
  } else {
   if ((i3 | 0) == 0) {
    i2 = i8;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
       if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
        break;
       }
       if ((i2 | 0) != (HEAP32[i4 >> 2] | 0)) {
        i11 = i2;
        break L7;
       }
      }
     } while (0);
     i2 = HEAP32[i2 + 16 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
    }
   } else {
    i2 = i8;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
       if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
        break;
       }
       if ((i2 | 0) == (HEAP32[i4 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i2 + 100 >> 2] | 0) != 0) {
        i11 = i2;
        break L7;
       }
      }
     } while (0);
     i2 = HEAP32[i2 + 16 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
    }
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = 16;
  }
 } while (0);
 do {
  if ((i10 | 0) == 16) {
   if ((i9 | 0) == 0) {
    i11 = 0;
    break;
   }
   if ((i3 | 0) != 0) {
    if ((HEAP32[i9 + 100 >> 2] | 0) == 0) {
     i11 = 0;
     break;
    }
   }
   i11 = i9 | 0;
  }
 } while (0);
 i6 = i11;
 return i6 | 0;
}
function __ZNK7WebCore11RenderTable12sectionAboveEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i4 = i1 + 144 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = i1 + 148 | 0;
 i8 = HEAP32[((HEAP32[i7 >> 2] | 0) == (i2 | 0) ? i1 + 32 | 0 : i2 + 12 | 0) >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == 0) {
   i9 = i5;
   i10 = 16;
  } else {
   if ((i3 | 0) == 0) {
    i2 = i8;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
       if ((i2 | 0) == (HEAP32[i4 >> 2] | 0)) {
        break;
       }
       if ((i2 | 0) != (HEAP32[i7 >> 2] | 0)) {
        i11 = i2;
        break L7;
       }
      }
     } while (0);
     i2 = HEAP32[i2 + 12 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
    }
   } else {
    i2 = i8;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
       if ((i2 | 0) == (HEAP32[i4 >> 2] | 0)) {
        break;
       }
       if ((i2 | 0) == (HEAP32[i7 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i2 + 100 >> 2] | 0) != 0) {
        i11 = i2;
        break L7;
       }
      }
     } while (0);
     i2 = HEAP32[i2 + 12 >> 2] | 0;
     if ((i2 | 0) == 0) {
      break;
     }
    }
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = 16;
  }
 } while (0);
 do {
  if ((i10 | 0) == 16) {
   if ((i9 | 0) == 0) {
    i11 = 0;
    break;
   }
   if ((i3 | 0) != 0) {
    if ((HEAP32[i9 + 100 >> 2] | 0) == 0) {
     i11 = 0;
     break;
    }
   }
   i11 = i9 | 0;
  }
 } while (0);
 i6 = i11;
 return i6 | 0;
}
function __ZNK7WebCore10BorderDataeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 4 >> 2] ^ HEAP32[i1 + 4 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 12 >> 2] ^ HEAP32[i1 + 12 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != (HEAP32[i2 + 8 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 20 >> 2] ^ HEAP32[i1 + 20 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 16 >> 2] | 0) != (HEAP32[i2 + 16 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i2 + 28 >> 2] ^ HEAP32[i1 + 28 >> 2];
 if ((i3 & 2147483646 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] | 0) != (HEAP32[i2 + 24 >> 2] | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((i3 & 1 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 do {
  if ((i3 | 0) != (i5 | 0)) {
   if (__ZNK7WebCore18NinePieceImageDataeqERKS0_(i3, i5) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 36 | 0, i2 + 36 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 52 | 0, i2 + 52 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (!(__ZNK7WebCore10LengthSizeeqERKS0_(i1 + 68 | 0, i2 + 68 | 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore10LengthSizeeqERKS0_(i1 + 84 | 0, i2 + 84 | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderTable26simplifiedNormalFlowLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    break;
   }
   i4 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    break;
   }
   return;
  } else {
   i5 = i3;
  }
 } while (0);
 i3 = i1 + 176 | 0;
 i4 = i1 + 148 | 0;
 i6 = i1 + 28 | 0;
 i7 = i5;
 while (1) {
  if ((HEAP32[i7 + 20 >> 2] & 31 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 652 >> 2] & 63](i7 | 0);
  }
  __ZN7WebCore18RenderTableSection24computeOverflowFromCellsEv(i7);
  if ((HEAP8[i3] & 4) != 0) {
   __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  }
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == (i7 | 0)) {
   i8 = 20;
   break;
  }
  i9 = HEAP32[((HEAP32[i2 >> 2] | 0) == (i7 | 0) ? i6 : i7 + 16 | 0) >> 2] | 0;
  L15 : do {
   if ((i9 | 0) == 0) {
    i10 = i5;
    i8 = 17;
   } else {
    i11 = i9;
    while (1) {
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 204 >> 2] & 511](i11) | 0) {
       if ((i11 | 0) == (HEAP32[i2 >> 2] | 0)) {
        break;
       }
       if ((i11 | 0) != (HEAP32[i4 >> 2] | 0)) {
        i12 = i11;
        break L15;
       }
      }
     } while (0);
     i11 = HEAP32[i11 + 16 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
    }
    i10 = HEAP32[i4 >> 2] | 0;
    i8 = 17;
   }
  } while (0);
  if ((i8 | 0) == 17) {
   i8 = 0;
   i12 = i10 | 0;
  }
  if ((i12 | 0) == 0) {
   i8 = 21;
   break;
  } else {
   i7 = i12;
  }
 }
 if ((i8 | 0) == 20) {
  return;
 } else if ((i8 | 0) == 21) {
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE6insertIS3_EEvjOT_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 L1 : do {
  if ((i5 | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   i6 = i5 + 1 | 0;
   i7 = i1 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   do {
    if (i8 >>> 0 <= i3 >>> 0) {
     if ((i8 + (i5 << 2) | 0) >>> 0 <= i3 >>> 0) {
      break;
     }
     __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i6);
     i9 = (HEAP32[i7 >> 2] | 0) + (i3 - i8 >> 2 << 2) | 0;
     i10 = i7;
     break L1;
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i6);
   i9 = i3;
   i10 = i7;
  } else {
   i9 = i3;
   i10 = i1 | 0;
  }
 } while (0);
 i1 = HEAP32[i10 >> 2] | 0;
 i10 = i1 + (i2 << 2) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i5 = i1 + (i3 << 2) | 0;
 i8 = i2 + 1 | 0;
 do {
  if ((i2 | 0) == 2147483647) {
   if ((i3 | 0) == 2147483647) {
    break;
   }
   i11 = i10;
   i12 = i1 + (i8 << 2) | 0;
   while (1) {
    HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
    i13 = i11 + 4 | 0;
    if ((i13 | 0) == (i5 | 0)) {
     break;
    } else {
     i11 = i13;
     i12 = i12 + 4 | 0;
    }
   }
  } else {
   if ((i3 | 0) == (i2 | 0)) {
    break;
   }
   i12 = i5;
   i11 = i1 + ((i5 - i10 >> 2) + i8 << 2) | 0;
   while (1) {
    i12 = i12 - 4 | 0;
    i11 = i11 - 4 | 0;
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    if ((i12 | 0) == (i10 | 0)) {
     break;
    }
   }
  }
 } while (0);
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore11RenderTable11splitColumnEjj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 108 | 0;
 HEAP32[i5 >> 2] = i3;
 __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE6insertIS3_EEvjOT_(i6, i2, i5);
 i5 = i2 + 1 | 0;
 i7 = i1 + 116 | 0;
 if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i8 = (HEAP32[i6 >> 2] | 0) + (i5 << 2) | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i3;
 i8 = i1 + 28 | 0;
 while (1) {
  i5 = HEAP32[i8 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 204 >> 2] & 511](i5) | 0) {
   i9 = i5;
   i10 = 6;
   break;
  } else {
   i8 = i5 + 16 | 0;
  }
 }
 L7 : do {
  if ((i10 | 0) == 6) {
   L8 : while (1) {
    i10 = 0;
    if ((HEAP8[i9 + 140 | 0] & 1) == 0) {
     __ZN7WebCore18RenderTableSection11splitColumnEjj(i9, i2, i3);
     i11 = i9;
    } else {
     i11 = i9;
    }
    while (1) {
     i8 = HEAP32[i11 + 16 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break L7;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 204 >> 2] & 511](i8) | 0) {
      i9 = i8;
      i10 = 6;
      continue L8;
     } else {
      i11 = i8;
     }
    }
   }
  }
 } while (0);
 i11 = (HEAP32[i7 >> 2] | 0) + 1 | 0;
 if ((HEAP32[i1 + 100 >> 2] | 0) >>> 0 >= i11 >>> 0) {
  i12 = i1 + 104 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1 + 96 | 0, i11);
 i12 = i1 + 104 | 0;
 HEAP32[i12 >> 2] = i11;
 STACKTOP = i4;
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
   i6 = 26;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 26) {
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
function __ZN7WebCore11RenderTable16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i1;
 _memset(i9 | 0, 0, 16) | 0;
 do {
  if ((i6 | 0) == 2) {
   i10 = 3;
  } else {
   if ((HEAP8[(HEAP32[i2 + 40 >> 2] | 0) + 20 | 0] & 32) != 0) {
    i10 = 3;
    break;
   }
   __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i8, i2 | 0, i3, i4, i5, 0);
   i11 = i8;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  }
 } while (0);
 if ((i10 | 0) == 3) {
  __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i1, i2 | 0, i4, 0);
  i4 = i1;
  i10 = (HEAP32[i4 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
  HEAP32[i4 + 4 >> 2] = i10;
 }
 if ((HEAP32[i2 + 128 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 56 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  STACKTOP = i7;
  return;
 } else {
  HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 52 >> 2];
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i7;
  return;
 }
}
function __ZNK7WebCore11RenderTable18topNonEmptySectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 144 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i5 = i4;
    break;
   }
   i4 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i6 = 0;
   } else {
    i5 = i4;
    break;
   }
   return i6 | 0;
  } else {
   i5 = i3;
  }
 } while (0);
 if ((HEAP32[i5 + 100 >> 2] | 0) != 0) {
  i6 = i5;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i3 = i1 + 148 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i5 | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 i7 = HEAP32[((HEAP32[i2 >> 2] | 0) == (i5 | 0) ? i1 + 28 | 0 : i5 + 16 | 0) >> 2] | 0;
 L15 : do {
  if ((i7 | 0) == 0) {
   i8 = i4;
   i9 = 15;
  } else {
   i5 = i7;
   while (1) {
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 204 >> 2] & 511](i5) | 0) {
      if ((i5 | 0) == (HEAP32[i2 >> 2] | 0)) {
       break;
      }
      if ((i5 | 0) == (HEAP32[i3 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i5 + 100 >> 2] | 0) != 0) {
       i10 = i5;
       break L15;
      }
     }
    } while (0);
    i5 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
   }
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = 15;
  }
 } while (0);
 do {
  if ((i9 | 0) == 15) {
   if ((i8 | 0) == 0) {
    i10 = 0;
    break;
   }
   i10 = (HEAP32[i8 + 100 >> 2] | 0) == 0 ? 0 : i8 | 0;
  }
 } while (0);
 i6 = i10;
 return i6 | 0;
}
function __ZNK7WebCore11RenderTable11borderAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 if ((i4 & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle16borderAfterWidthEv(i3) | 0) & 65535;
  return i5 | 0;
 }
 i3 = i1 + 176 | 0;
 if ((HEAP8[i3] & 4) == 0) {
  i6 = i4;
 } else {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] | 0;
 }
 if ((i6 & 8 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP8[i3] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i3 = HEAP32[i1 + 148 >> 2] | 0;
 L14 : do {
  if ((i3 | 0) == 0) {
   i6 = i1 + 32 | 0;
   while (1) {
    i7 = HEAP32[i6 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = 0;
     break L14;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 204 >> 2] & 511](i7) | 0) {
     break;
    } else {
     i6 = i7 + 12 | 0;
    }
   }
   i9 = i7;
   i10 = 12;
  } else {
   i9 = i3;
   i10 = 12;
  }
 } while (0);
 do {
  if ((i10 | 0) == 12) {
   i3 = HEAP32[i9 + 136 >> 2] | 0;
   if ((i3 | 0) < 0) {
    i5 = 0;
   } else {
    i8 = i3;
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i9 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
 i2 = i9 >>> 27 & 15;
 if ((i2 | 0) == 1) {
  i5 = 0;
  return i5 | 0;
 }
 if (i2 >>> 0 <= 1 >>> 0) {
  i5 = i8;
  return i5 | 0;
 }
 i2 = ((i9 >>> 1 & 67108863) + 1 | 0) >>> 1;
 i5 = (i8 | 0) < (i2 | 0) ? i2 : i8;
 return i5 | 0;
}
function __ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i3 = HEAP32[i2 + 116 >> 2] | 0;
 if ((i3 & 1073741824 | 0) == 0) {
  i4 = 1;
 } else {
  i4 = __ZNK7WebCore15RenderTableCell19parseColSpanFromDOMEv(i2) | 0;
 }
 i5 = i4 + (i3 & 536870911) | 0;
 i3 = HEAP32[i1 + 116 >> 2] | 0;
 i4 = i1 + 108 | 0;
 i1 = 0;
 i6 = 0;
 while (1) {
  if (i6 >>> 0 >= i3 >>> 0) {
   i7 = 0;
   i8 = 18;
   break;
  }
  i9 = (HEAP32[(HEAP32[i4 >> 2] | 0) + (i6 << 2) >> 2] | 0) + i1 | 0;
  if ((i9 - 1 | 0) >>> 0 < i5 >>> 0) {
   i1 = i9;
   i6 = i6 + 1 | 0;
  } else {
   break;
  }
 }
 if ((i8 | 0) == 18) {
  return i7 | 0;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = HEAP32[i8 + 8 >> 2] | 0;
 i1 = HEAP32[i8 + 92 >> 2] & 2147483647;
 if ((HEAP32[i2 + 100 >> 2] | 0) >>> 0 <= i1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i8 = HEAP32[i2 + 92 >> 2] | 0;
 if ((HEAP32[i8 + (i1 * 28 & -1) + 8 >> 2] | 0) >>> 0 <= i6 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[i8 + (i1 * 28 & -1) >> 2] | 0;
 i1 = HEAP32[i2 + (i6 * 20 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 i8 = _llvm_uadd_with_overflow_i32(i1 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i7 = HEAP32[(HEAP32[i2 + (i6 * 20 & -1) >> 2] | 0) + (i8 << 2) >> 2] | 0;
 return i7 | 0;
}
function __ZN7WebCore11RenderTableD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 168 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 160 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 164 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i1 + 140 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 132 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 128 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 120 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 116 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 108 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 104 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlockD2Ev(i4);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i4);
 return;
}
function __ZN7WebCore11RenderTableD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 168 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 160 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 164 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 156 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = i1 + 140 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 132 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 128 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 120 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 116 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 108 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 112 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 104 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 96 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore11RenderBlockD2Ev(i4);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i4);
 return;
}
function __ZNK7WebCore10LengthSizeeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = i1 | 0;
 i4 = i2 | 0;
 i5 = HEAP8[i1 + 5 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 4 | 0] ^ HEAP8[i1 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 6 | 0] & 1) == 0) {
    d7 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d7 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    d8 = +(HEAP32[i2 >> 2] | 0);
   } else {
    d8 = +HEAPF32[i2 >> 2];
   }
   if (d7 == d8) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i3, i4) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 i5 = HEAP8[i1 + 13 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 13 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 12 | 0] ^ HEAP8[i1 + 12 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 14 | 0] & 1) == 0) {
  d9 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[i2 + 116 >> 2] & 536870911;
 i2 = HEAP32[i1 + 116 >> 2] | 0;
 i6 = i1 + 108 | 0;
 i1 = 0;
 i7 = 0;
 while (1) {
  if (i7 >>> 0 >= i2 >>> 0) {
   break;
  }
  i8 = (HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0) + i1 | 0;
  if ((i8 - 1 | 0) >>> 0 < i5 >>> 0) {
   i1 = i8;
   i7 = i7 + 1 | 0;
  } else {
   break;
  }
 }
 if ((i7 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 i1 = HEAP32[i3 + 92 >> 2] & 2147483647;
 i3 = i7 - 1 | 0;
 if ((HEAP32[i4 + 100 >> 2] | 0) >>> 0 <= i1 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i7 = HEAP32[i4 + 92 >> 2] | 0;
 if ((HEAP32[i7 + (i1 * 28 & -1) + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i4 = HEAP32[i7 + (i1 * 28 & -1) >> 2] | 0;
 i1 = HEAP32[i4 + (i3 * 20 & -1) + 8 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 i7 = _llvm_uadd_with_overflow_i32(i1 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i9 = HEAP32[(HEAP32[i4 + (i3 * 20 & -1) >> 2] | 0) + (i7 << 2) >> 2] | 0;
 return i9 | 0;
}
function __ZNK7WebCore11RenderTable12borderBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 36 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 44 >> 2] | 0;
 if ((i4 & 8 | 0) == 0) {
  i5 = (__ZNK7WebCore11RenderStyle17borderBeforeWidthEv(i3) | 0) & 65535;
  return i5 | 0;
 }
 if ((HEAP8[i1 + 176 | 0] & 4) == 0) {
  i6 = i3;
  i7 = i4;
 } else {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
  i4 = HEAP32[i2 >> 2] | 0;
  i6 = i4;
  i7 = HEAP32[i4 + 44 >> 2] | 0;
 }
 if ((i7 & 8 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i4 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i4 | 0) != 0) {
    i8 = i4;
    i9 = 8;
    break;
   }
   i4 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i10 = 0;
   } else {
    i8 = i4;
    i9 = 8;
   }
  } else {
   i8 = i7;
   i9 = 8;
  }
 } while (0);
 do {
  if ((i9 | 0) == 8) {
   i7 = HEAP32[i8 + 132 >> 2] | 0;
   if ((i7 | 0) < 0) {
    i5 = 0;
   } else {
    i10 = i7;
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i8 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i6) | 0) + 4 >> 2] | 0;
 i6 = i8 >>> 27 & 15;
 if ((i6 | 0) == 1) {
  i5 = 0;
  return i5 | 0;
 }
 if (i6 >>> 0 <= 1 >>> 0) {
  i5 = i10;
  return i5 | 0;
 }
 i6 = i8 >>> 2 & 33554431;
 i5 = (i10 | 0) < (i6 | 0) ? i6 : i10;
 return i5 | 0;
}
function __ZN7WebCore11RenderTable10addCaptionEPKNS_18RenderTableCaptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 120 | 0;
 HEAP32[i4 >> 2] = i2;
 i6 = i1 + 128 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != (HEAP32[i1 + 124 >> 2] | 0)) {
  HEAP32[(HEAP32[i5 >> 2] | 0) + (i7 << 2) >> 2] = i2;
  i8 = HEAP32[i6 >> 2] | 0;
  i9 = i8 + 1 | 0;
  HEAP32[i6 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i2 = i7 + 1 | 0;
 i1 = i5 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 do {
  if (i10 >>> 0 > i4 >>> 0) {
   i11 = 5;
  } else {
   if ((i10 + (i7 << 2) | 0) >>> 0 <= i4 >>> 0) {
    i11 = 5;
    break;
   }
   __ZN3WTF6VectorIPN7WebCore18RenderTableCaptionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
   i12 = HEAP32[i1 >> 2] | 0;
   i13 = i12 + (i4 - i10 >> 2 << 2) | 0;
   i14 = i12;
  }
 } while (0);
 if ((i11 | 0) == 5) {
  __ZN3WTF6VectorIPN7WebCore18RenderTableCaptionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i5, i2);
  i13 = i4;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 HEAP32[i14 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 i9 = i8 + 1 | 0;
 HEAP32[i6 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderTable16outerBorderAfterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 36 | 0;
 if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 8 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i4 = HEAP32[i1 + 148 >> 2] | 0;
 L7 : do {
  if ((i4 | 0) == 0) {
   i5 = i1 + 32 | 0;
   while (1) {
    i6 = HEAP32[i5 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i7 = 0;
     break L7;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 204 >> 2] & 511](i6) | 0) {
     break;
    } else {
     i5 = i6 + 12 | 0;
    }
   }
   i8 = i6;
   i9 = 9;
  } else {
   i8 = i4;
   i9 = 9;
  }
 } while (0);
 do {
  if ((i9 | 0) == 9) {
   i4 = HEAP32[i8 + 136 >> 2] | 0;
   if ((i4 | 0) < 0) {
    i3 = 0;
   } else {
    i7 = i4;
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i8 = HEAP32[(__ZNK7WebCore11RenderStyle11borderAfterEv(HEAP32[i2 >> 2] | 0) | 0) + 4 >> 2] | 0;
 i2 = i8 >>> 27 & 15;
 if ((i2 | 0) == 1) {
  i3 = 0;
  return i3 | 0;
 }
 if (i2 >>> 0 <= 1 >>> 0) {
  i3 = i7;
  return i3 | 0;
 }
 i2 = ((i8 >>> 1 & 67108863) + 1 | 0) >>> 1;
 i3 = (i7 | 0) < (i2 | 0) ? i2 : i7;
 return i3 | 0;
}
function __ZN7WebCore11RenderTable33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = __ZN3WTF10fastMallocEj(192) | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i5, i8, 6);
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i6, i7, i3, 0);
 HEAP32[i6 >> 2] = H_BASE + 32;
 i3 = i6 + 96 | 0;
 i7 = i6 + 176 | 0;
 _memset(i3 | 0, 0, 80) | 0;
 HEAP8[i7] = HEAP8[i7] & -32;
 HEAP16[i6 + 178 >> 1] = 0;
 HEAP16[i6 + 180 >> 1] = 0;
 HEAP32[i6 + 184 >> 2] = 0;
 HEAP32[i6 + 188 >> 2] = 0;
 i7 = i6 + 20 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -2097153;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i3, i4, 1);
 __ZN7WebCore13RenderElement15initializeStyleEv(i6);
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore11RenderTable12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i7 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i7 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i7 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  i10 = i5 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i11;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderTable10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i4;
 i7 = HEAP32[i2 + 36 >> 2] | 0;
 i8 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i7 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i7 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i7;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i7 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i5, i2 | 0, i6);
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  i10 = i5 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = i1 | 0;
  HEAP32[i12 >> 2] = i11;
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 i10 = i5 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = i1 | 0;
 HEAP32[i12 >> 2] = i11;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
 i6 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2 + (i6 << 2) | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i3 >> 2] = i7 >>> 2;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i5 = i6 + 4 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 4 | 0;
   }
  }
 }
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore11RenderTable17outerBorderBeforeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((HEAP32[i2 + 44 >> 2] & 8 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i1 + 152 >> 2] | 0;
   if ((i5 | 0) != 0) {
    i6 = i5;
    i7 = 5;
    break;
   }
   i5 = HEAP32[i1 + 148 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i8 = 0;
   } else {
    i6 = i5;
    i7 = 5;
   }
  } else {
   i6 = i4;
   i7 = 5;
  }
 } while (0);
 do {
  if ((i7 | 0) == 5) {
   i4 = HEAP32[i6 + 132 >> 2] | 0;
   if ((i4 | 0) < 0) {
    i3 = 0;
   } else {
    i8 = i4;
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i6 = HEAP32[(__ZNK7WebCore11RenderStyle12borderBeforeEv(i2) | 0) + 4 >> 2] | 0;
 i2 = i6 >>> 27 & 15;
 if ((i2 | 0) == 1) {
  i3 = 0;
  return i3 | 0;
 }
 if (i2 >>> 0 <= 1 >>> 0) {
  i3 = i8;
  return i3 | 0;
 }
 i2 = i6 >>> 2 & 33554431;
 i3 = (i8 | 0) < (i2 | 0) ? i2 : i8;
 return i3 | 0;
}
function __ZN7WebCore11RenderTableC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i5 = i1 + 96 | 0;
 i2 = i1 + 176 | 0;
 _memset(i5 | 0, 0, 80) | 0;
 HEAP8[i2] = HEAP8[i2] & -32;
 HEAP16[i1 + 178 >> 1] = 0;
 HEAP16[i1 + 180 >> 1] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2097153;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i5, i6, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderTableC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i5 = i1 + 96 | 0;
 i2 = i1 + 176 | 0;
 _memset(i5 | 0, 0, 80) | 0;
 HEAP8[i2] = HEAP8[i2] & -32;
 HEAP16[i1 + 178 >> 1] = 0;
 HEAP16[i1 + 180 >> 1] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2097153;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i5, i6, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderTableC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i5 = i1 + 96 | 0;
 i2 = i1 + 176 | 0;
 _memset(i5 | 0, 0, 80) | 0;
 HEAP8[i2] = HEAP8[i2] & -32;
 HEAP16[i1 + 178 >> 1] = 0;
 HEAP16[i1 + 180 >> 1] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2097153;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i5, i6, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderTableC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i5, 0);
 HEAP32[i1 >> 2] = H_BASE + 32;
 i5 = i1 + 96 | 0;
 i2 = i1 + 176 | 0;
 _memset(i5 | 0, 0, 80) | 0;
 HEAP8[i2] = HEAP8[i2] & -32;
 HEAP16[i1 + 178 >> 1] = 0;
 HEAP16[i1 + 180 >> 1] = 0;
 HEAP32[i1 + 184 >> 2] = 0;
 HEAP32[i1 + 188 >> 2] = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -2097153;
 HEAP32[i6 >> 2] = 0;
 __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij(i5, i6, 1);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP8[i1 + 176 | 0] & 16) == 0) {
  __ZNK7WebCore11RenderTable17updateColumnCacheEv(i1);
 }
 i5 = HEAP32[i1 + 140 >> 2] | 0;
 i6 = i1 + 132 | 0;
 i1 = 0;
 i7 = 0;
 while (1) {
  if (i7 >>> 0 >= i5 >>> 0) {
   i8 = 0;
   i9 = 11;
   break;
  }
  i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0;
  i11 = (HEAP32[i10 + 92 >> 2] | 0) + i1 | 0;
  i12 = i11 - 1 | 0;
  if (i11 >>> 0 > i2 >>> 0) {
   break;
  } else {
   i1 = i11;
   i7 = i7 + 1 | 0;
  }
 }
 if ((i9 | 0) == 11) {
  return i8 | 0;
 }
 if ((i3 | 0) != 0) {
  HEAP8[i3] = (i1 | 0) == (i2 | 0) | 0;
 }
 if ((i4 | 0) == 0) {
  i8 = i10;
  return i8 | 0;
 }
 HEAP8[i4] = (i12 | 0) == (i2 | 0) | 0;
 i8 = i10;
 return i8 | 0;
}
function __ZN7WebCore11RenderTable9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 11) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i3;
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i5 + 8 | 0;
 HEAP32[i3 >> 2] = i9;
 HEAP32[i3 + 4 >> 2] = i10;
 __ZNK7WebCore11RenderTable19subtractCaptionRectERNS_10LayoutRectE(i1, i7);
 __ZN7WebCore9RenderBox15paintMaskImagesERKNS_9PaintInfoERKNS_10LayoutRectE(i1 | 0, i2, i7);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderTable17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = -1;
  return i3 | 0;
 }
 if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  i3 = -1;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i2 = __ZNK7WebCore11RenderTable18topNonEmptySectionEv(i1) | 0;
 if ((i2 | 0) == 0) {
  i3 = -1;
  return i3 | 0;
 }
 i1 = __ZNK7WebCore18RenderTableSection17firstLineBaselineEv(i2) | 0;
 if ((i1 | 0) <= 0) {
  i3 = -1;
  return i3 | 0;
 }
 i4 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 0) {
  i5 = i2 + 48 | 0;
 } else {
  i5 = i2 + 44 | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + i1 | 0;
 return i3 | 0;
}
function __ZN3WTF6VectorIPN7WebCore18RenderTableCaptionELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIPN7WebCore14RenderTableColELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore11RenderTable12borderBottomEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 3 | (i3 | 0) == 1) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 752 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 756 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 760 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 764 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderTable9borderTopEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 3 | (i3 | 0) == 1) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 756 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 752 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 764 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 760 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderTable11borderRightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 760 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 764 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 1) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 752 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 756 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 }
 return 0;
}
function __ZNK7WebCore11RenderTable10borderLeftEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i3 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i2 + 40 >> 2] & 1073741824 | 0) == 0) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 764 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 760 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 } else {
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i3 | 0) == 1) {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 756 >> 2] & 511](i1) | 0;
   return i5 | 0;
  } else {
   i5 = FUNCTION_TABLE_ii[HEAP32[i4 + 752 >> 2] & 511](i1) | 0;
   return i5 | 0;
  }
 }
 return 0;
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
function __ZN7WebCore11RenderTable12removeColumnEPKNS_14RenderTableColE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i2 = i1 + 176 | 0;
 i3 = HEAP8[i2] & -17;
 HEAP8[i2] = i3;
 HEAP32[i1 + 140 >> 2] = 0;
 i4 = i1 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 HEAP8[i2] = i3 | 4;
 i3 = i1 + 20 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 & 1 | 0) != 0) {
  return;
 }
 HEAP32[i3 >> 2] = i1 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
 if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
 return;
}
function __ZN7WebCore11RenderTable13removeCaptionEPKNS_18RenderTableCaptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 120 | 0;
 i4 = i1 + 128 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i5 = 0;
 while (1) {
  if (i5 >>> 0 >= i1 >>> 0) {
   i6 = 7;
   break;
  }
  i7 = HEAP32[i3 >> 2] | 0;
  i8 = i7 + (i5 << 2) | 0;
  i9 = i5 + 1 | 0;
  if ((HEAP32[i8 >> 2] | 0) == (i2 | 0)) {
   break;
  } else {
   i5 = i9;
  }
 }
 if ((i6 | 0) == 7) {
  return;
 }
 if ((i5 | 0) == -1) {
  return;
 }
 _memmove(i8 | 0, i7 + (i9 << 2) | 0, i1 + (i5 ^ 1073741823) << 2 | 0) | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
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
function __ZNK7WebCore11RenderTable11firstColumnEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 28 | 0;
 while (1) {
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i5 = 8;
   break;
  }
  i1 = i3;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 192 >> 2] & 511](i3) | 0) {
   i5 = 4;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 196 >> 2] & 511](i3) | 0) {
   i2 = i3 + 16 | 0;
  } else {
   i4 = 0;
   i5 = 9;
   break;
  }
 }
 if ((i5 | 0) == 4) {
  i4 = i3;
  return i4 | 0;
 } else if ((i5 | 0) == 8) {
  return i4 | 0;
 } else if ((i5 | 0) == 9) {
  return i4 | 0;
 }
 return 0;
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
function __ZNK7WebCore11RenderTable13bottomSectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 i2 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i2 | 0) != 0) {
  i3 = i2;
  return i3 | 0;
 }
 i2 = i1 + 32 | 0;
 while (1) {
  i4 = HEAP32[i2 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = 0;
   i5 = 10;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 204 >> 2] & 511](i4) | 0) {
   break;
  } else {
   i2 = i4 + 12 | 0;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 }
 i3 = i4;
 return i3 | 0;
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
function __ZNK7WebCore11RenderTable29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((HEAP8[i1 + 176 | 0] & 4) != 0) {
  __ZNK7WebCore11RenderTable14recalcSectionsEv(i1);
 }
 HEAP32[i1 + 184 >> 2] = __ZNK7WebCore11RenderTable15calcBorderStartEv(i1) | 0;
 HEAP32[i1 + 188 >> 2] = __ZNK7WebCore11RenderTable13calcBorderEndEv(i1) | 0;
 i4 = HEAP32[i1 + 156 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 63](i4, i2, i3);
 return;
}
function __ZNK7WebCore11RenderTable16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 964 >> 2] & 511](i1) | 0;
 if ((i6 | 0) != -1) {
  i7 = i6;
  return i7 | 0;
 }
 i7 = __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2, i3, i4, i5) | 0;
 return i7 | 0;
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
function __ZNK7WebCore11RenderTable29tableStartBorderAdjoiningCellEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if (((HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[i3 + 40 >> 2]) & 1073741824 | 0) == 0) {
  i4 = __ZNK7WebCore11RenderStyle11borderStartEv(i3) | 0;
  return i4 | 0;
 } else {
  i4 = __ZNK7WebCore11RenderStyle9borderEndEv(i3) | 0;
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderTable27tableEndBorderAdjoiningCellEPKNS_15RenderTableCellE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if (((HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0) + 40 >> 2] ^ HEAP32[i3 + 40 >> 2]) & 1073741824 | 0) == 0) {
  i4 = __ZNK7WebCore11RenderStyle9borderEndEv(i3) | 0;
  return i4 | 0;
 } else {
  i4 = __ZNK7WebCore11RenderStyle11borderStartEv(i3) | 0;
  return i4 | 0;
 }
 return 0;
}
function viiii___ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZN7WebCore11RenderTable30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE(i1, i2 | 0, i3, i4, i5, 0);
 return;
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
function _memmove(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if ((i2 | 0) < (i1 | 0) & (i1 | 0) < (i2 + i3 | 0)) {
  i4 = i1;
  i2 = i2 + i3 | 0;
  i1 = i1 + i3 | 0;
  while ((i3 | 0) > 0) {
   i1 = i1 - 1 | 0;
   i2 = i2 - 1 | 0;
   i3 = i3 - 1 | 0;
   HEAP8[i1] = HEAP8[i2] | 0;
  }
  i1 = i4;
 } else {
  _memcpy(i1, i2, i3) | 0;
 }
 return i1 | 0;
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
function viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore11RenderTable28distributeExtraLogicalHeightEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((i2 | 0) < 1) {
  return;
 }
 i3 = HEAP32[i1 + 152 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderTableSection34distributeExtraLogicalHeightToRowsEi(i3, i2) | 0;
 return;
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
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore11RenderTable27recalcBordersInRowDirectionEv(i1) {
 i1 = i1 | 0;
 HEAP32[i1 + 184 >> 2] = __ZNK7WebCore11RenderTable15calcBorderStartEv(i1) | 0;
 HEAP32[i1 + 188 >> 2] = __ZNK7WebCore11RenderTable13calcBorderEndEv(i1) | 0;
 return;
}
function __ZN7WebCore11LayoutStateD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 12 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  __ZN7WebCore11LayoutStateD1Ev(i1);
  __ZdlPv(i1 | 0);
  return;
 }
}
function viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZNK7WebCore9RenderBox20collapsedMarginAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent5afterENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
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
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore11RenderTable32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore11RenderTable33createAnonymousWithParentRendererEPKNS_12RenderObjectE(i2) | 0;
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
function viii___ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
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
function vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function __ZN7WebCore11RenderTable9addColumnEPKNS_14RenderTableColE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i2 = i1 + 176 | 0;
 HEAP8[i2] = HEAP8[i2] & -17;
 HEAP32[i1 + 140 >> 2] = 0;
 return;
}
function v___ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE();
}
function vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
}
function __ZN7WebCore11RenderTable23invalidateCachedColumnsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 176 | 0;
 HEAP8[i2] = HEAP8[i2] & -17;
 HEAP32[i1 + 140 >> 2] = 0;
 return;
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
function ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv(i1 | 0) | 0;
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
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
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
function __ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
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
function vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9RenderBox12setScrollTopEi(i1 | 0, i2 | 0);
}
function v___ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE__wrapper() {
 __ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE();
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
function ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderBlock14hasLineIfEmptyEv(i1 | 0) | 0;
}
function __ZNK7WebCore11RenderBlock19virtualContinuationEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 63](i2 | 0, i3 | 0, i4 | 0);
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
function vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox19updateLogicalHeightEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12scrollHeightEv(i1 | 0) | 0;
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
function __ZNK7WebCore11RenderTable19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return -1 | 0;
}
function ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox9scrollTopEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore11RenderTableD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderTableD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function b7(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(7);
 return 0;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
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
function __ZNK7WebCore13RenderElement14firstChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 28 >> 2] | 0;
}
function __ZNK7WebCore13RenderElement13lastChildSlowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 32 >> 2] | 0;
}
function __ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 511](i2 | 0) | 0;
}
function __ZNK7WebCore11RenderTable11borderStartEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 184 >> 2] | 0;
}
function __ZNK7WebCore11RenderTable9borderEndEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 188 >> 2] | 0;
}
function __ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore12RenderObject23createsAnonymousWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore11RenderTable10renderNameEv(i1) {
 i1 = i1 | 0;
 return H_BASE + 8 | 0;
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
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
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
function __ZNK7WebCore12RenderObject17isSVGGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject17isRenderMathMLRowEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZNK7WebCore12RenderObject15isSVGInlineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject15isDetailsMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function __ZN7WebCore12RenderObject17updateFromElementEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderTable14firstLineBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock14containsFloatsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore11RenderTable17updateFirstLetterEv(i1) {
 i1 = i1 | 0;
 return;
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
function __ZNK7WebCore11RenderTable12avoidsFloatsEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore9RenderBox14hasControlClipEv(i1) {
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
function __ZNK7WebCore12RenderObject10isMenuListEv(i1) {
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
function __ZNK7WebCore11RenderTable7isTableEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b9() {
 abort(9);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b0,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b0,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b0,__ZNK7WebCore12RenderObject10isRubyTextEv,b0,__ZNK7WebCore12RenderObject6isRubyEv,b0,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b0,__ZNK7WebCore11RenderTable14firstLineBlockEv,b0,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b0,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b0,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b0,__ZNK7WebCore11RenderTable9borderEndEv,b0,__ZNK7WebCore12RenderObject14isTableCaptionEv,b0,__ZNK7WebCore12RenderObject8isWidgetEv,b0,__ZNK7WebCore12RenderObject11isTextFieldEv
  ,b0,__ZNK7WebCore11RenderTable11borderStartEv,b0,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b0,__ZNK7WebCore13RenderElement13lastChildSlowEv,b0,__ZNK7WebCore12RenderObject10isMenuListEv,b0,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b0,__ZNK7WebCore11RenderTable12borderBeforeEv,b0,__ZNK7WebCore12RenderObject9isSVGRootEv,b0,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b0,__ZNK7WebCore12RenderObject7isFrameEv,b0,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b0,__ZNK7WebCore12RenderObject13isSliderThumbEv,b0,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b0,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b0,__ZNK7WebCore12RenderObject7isMeterEv,b0,__ZNK7WebCore12RenderObject14isSVGContainerEv
  ,b0,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b0,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b0,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b0,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b0,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b0,__ZNK7WebCore12RenderObject7isQuoteEv,b0,__ZNK7WebCore11RenderBlock14containsFloatsEv,b0,__ZNK7WebCore12RenderObject10isListItemEv,b0,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b0,__ZNK7WebCore12RenderObject10isSVGImageEv,b0,__ZNK7WebCore11RenderTable11borderRightEv,b0,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b0,__ZNK7WebCore11RenderBlock15canHaveChildrenEv,b0,__ZNK7WebCore11RenderTable10borderLeftEv
  ,b0,__ZNK7WebCore12RenderObject16isRenderTableColEv,b0,__ZNK7WebCore12RenderObject7isVideoEv,b0,__ZNK7WebCore12RenderObject10isProgressEv,b0,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b0,__ZNK7WebCore12RenderObject13isCombineTextEv,b0,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b0,__ZNK7WebCore12RenderObject5isWBREv,b0,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b0,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b0,__ZNK7WebCore13RenderElement14firstChildSlowEv,b0,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b0,ii___ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b0,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b0,__ZNK7WebCore11RenderTable11borderAfterEv
  ,b0,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b0,__ZNK7WebCore11RenderTable9borderTopEv,b0,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b0,ii___ZNK7WebCore11RenderBlock14paginationUnitEv__wrapper,b0,ii___ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv__wrapper,b0,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b0,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b0,__ZNK7WebCore12RenderObject9isReplicaEv,b0,__ZNK7WebCore9RenderBox14hasControlClipEv,b0,__ZNK7WebCore12RenderObject7isMediaEv,b0,__ZNK7WebCore12RenderObject10isSVGShapeEv,b0,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b0,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b0,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b0,__ZNK7WebCore12RenderObject14isRenderButtonEv
  ,b0,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b0,__ZNK7WebCore12RenderObject8isSliderEv,b0,ii___ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv__wrapper,b0,__ZNK7WebCore12RenderObject10isRubyBaseEv,b0,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b0,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b0,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b0,__ZNK7WebCore12RenderObject8isCanvasEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b0,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b0,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b0,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b0,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b0,__ZNK7WebCore12RenderObject13isTextControlEv,b0,__ZNK7WebCore12RenderObject9isSVGTextEv
  ,b0,__ZNK7WebCore12RenderObject10isTextAreaEv,b0,__ZNK7WebCore11RenderTable12borderBottomEv,b0,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b0,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b0,__ZNK7WebCore11RenderBlock8hasLinesEv,b0,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b0,__ZNK7WebCore12RenderObject11isTableCellEv,b0,__ZNK7WebCore12RenderObject12isRenderGridEv,b0,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b0,__ZNK7WebCore12RenderObject9isListBoxEv,b0,__ZNK7WebCore12RenderObject9isSVGPathEv,b0,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b0,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject13isRenderImageEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv
  ,b0,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b0,ii___ZNK7WebCore11RenderBlock14hasLineIfEmptyEv__wrapper,b0,__ZNK7WebCore12RenderObject6lengthEv,b0,__ZNK7WebCore12RenderObject10isTableRowEv,b0,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject10isFrameSetEv,b0,__ZNK7WebCore9RenderBox13requiresLayerEv,b0,__ZNK7WebCore12RenderObject10isFieldsetEv,b0,__ZNK7WebCore12RenderObject11isSVGInlineEv,b0,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b0,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b0,__ZNK7WebCore11RenderTable10renderNameEv,b0,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b0,__ZNK7WebCore12RenderObject9isRubyRunEv,b0,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv
  ,b0,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b0,__ZNK7WebCore12RenderObject14isRenderRegionEv,b0,ii___ZNK7WebCore11RenderBlock13hoverAncestorEv__wrapper,b0,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b0,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b0,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b0,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b0,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b0,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject7isImageEv,b0,__ZNK7WebCore12RenderObject9isCounterEv,b0,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b0,__ZNK7WebCore11RenderTable7isTableEv,b0,__ZNK7WebCore11RenderTable17firstLineBaselineEv
  ,b0,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b0,__ZNK7WebCore11RenderTable12avoidsFloatsEv,b0,ii___ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv__wrapper,b0,__ZNK7WebCore12RenderObject7isEmptyEv,b0,__ZNK7WebCore12RenderObject12isListMarkerEv,b0,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b0,__ZNK7WebCore12RenderObject14isTableSectionEv,b0,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiiiiiii = [b1,b1,viiiiiiiiii___ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE__wrapper,b1];
  var FUNCTION_TABLE_viiiii = [b2,b2,__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_,b2,viiiii___ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b2,__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_,b2,__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE,b2,viiiii___ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b2,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b2,__ZN7WebCore11RenderTable30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b2,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b2,viiiii___ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,vi___ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv__wrapper,b3,__ZN7WebCore11RenderTable18updateLogicalWidthEv,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,vi___ZN7WebCore11RenderBlock11deleteLinesEv__wrapper,b3,__ZN7WebCore11RenderTableD0Ev,b3,__ZN7WebCore11RenderTable23addOverflowFromChildrenEv,b3,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b3,vi___ZN7WebCore11RenderBlock15willBeDestroyedEv__wrapper,b3,__ZN7WebCore11RenderTable6layoutEv,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore11RenderTable26simplifiedNormalFlowLayoutEv
  ,b3,__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv,b3,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper,b3,vi___ZN7WebCore11RenderBlock15calcColumnWidthEv__wrapper,b3,__ZN7WebCore11RenderTableD2Ev,b3,__ZN7WebCore11RenderTable29computePreferredLogicalWidthsEv,b3,__ZN7WebCore11RenderTable17updateFirstLetterEv,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,vii___ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper
  ,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b4,vii___ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0___wrapper,b4,vii___ZN7WebCore11RenderBlock15updateDragStateEb__wrapper,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore11RenderTable10paddingEndEv
  ,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b4,__ZNK7WebCore11RenderTable12paddingStartEv,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,vii___ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv__wrapper,b4,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,vii___ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE__wrapper,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b4,__ZNK7WebCore9RenderBox12marginBottomEv
  ,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,vii___ZNK7WebCore11RenderBlock21availableLogicalWidthEv__wrapper,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,__ZN7WebCore11RenderTable11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5,iiiiiii___ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b5,__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b6,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b6,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b6,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b6,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_iiiifi = [b7,b7,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b7,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,viii___ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE__wrapper,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,__ZN7WebCore11RenderTableC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b8,__ZN7WebCore11RenderTable14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,viii___ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb__wrapper,b8,__ZN7WebCore11RenderTable5paintERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderTableC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b8,__ZN7WebCore11RenderTable11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b,b8,viii___ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore11RenderTable19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE
  ,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,viii___ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2___wrapper,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,viii___ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b8,__ZN7WebCore11RenderTable9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE__wrapper,b8,viii___ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,viii___ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE__wrapper,b8,__ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper
  ,b8,__ZNK7WebCore11RenderTable29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE__wrapper,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9,v___ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,iiiii___ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5___wrapper,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11,__ZN7WebCore11RenderTable16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZNK7WebCore11RenderBlock15requiresColumnsEi__wrapper,b12,__ZNK7WebCore11RenderTable19inlineBlockBaselineENS_17LineDirectionModeE,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,__ZNK7WebCore11RenderTable32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,__ZNK7WebCore11RenderTable16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13,__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,viiii___ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3___wrapper,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,viiii___ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb,b14,viiii___ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b14,viiii___ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,b14,b14,b14,b14,b14
  ,b14,b14,b14];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiii: dynCall_iiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiii": invoke_iiii, "invoke_iiiifi": invoke_iiiifi, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames8tableTagE": __ZN7WebCore9HTMLNames8tableTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore11RenderTable16outerBorderAfterEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZN7WebCore11RenderTable9addColumnEPKNS_14RenderTableColE","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore11RenderTable14firstLineBlockEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore11RenderTable23invalidateCachedColumnsEv","__ZN7WebCore11RenderTable11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore11RenderTable9borderEndEv","__ZNK7WebCore11RenderTable15outerBorderLeftEv","__ZN7WebCore11RenderTable14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZNK7WebCore11RenderTable11borderStartEv","__ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN7WebCore12RenderObject17updateFromElementEv","_strlen","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore11RenderTable12borderBeforeEv","__ZNK7WebCore11RenderTable14outerBorderEndEv","__ZNK7WebCore11RenderTable15calcBorderStartEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore12RenderObject10isListItemEv","__ZN7WebCore11RenderTable8addChildEPNS_12RenderObjectES2_","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore10LengthSizeeqERKS0_","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore11RenderTable13removeCaptionEPKNS_18RenderTableCaptionE","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore11RenderTable27tableEndBorderAdjoiningCellEPKNS_15RenderTableCellE","__ZNK7WebCore11RenderBlock14containsFloatsEv","__ZNK7WebCore11RenderTable13bottomSectionEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore11RenderBlock15canHaveChildrenEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore11RenderTable18topNonEmptySectionEv","__ZNK7WebCore11RenderTable10borderLeftEv","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore11RenderTableC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZN7WebCore11RenderTable11splitColumnEjj","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore11RenderTableC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore11RenderTable14outerBorderTopEv","__ZN7WebCore11RenderTableD0Ev","__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE","__ZNK7WebCore11RenderTable11borderAfterEv","__ZNK7WebCore11RenderTable12sectionAboveEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE","__ZNK7WebCore11RenderTable32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZN7WebCore11RenderTable12removeColumnEPKNS_14RenderTableColE","__ZN7WebCore11RenderTable28distributeExtraLogicalHeightEi","__ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore11RenderTable17outerBorderBottomEv","__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZNK7WebCore11RenderTable9borderTopEv","__ZNK7WebCore11RenderTable13calcBorderEndEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZN7WebCore11LayoutStateD1Ev","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore11RenderTable16outerBorderStartEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore11RenderTable23addOverflowFromChildrenEv","__ZNK7WebCore11RenderBlock8hasLinesEv","__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore11RenderTable9cellAfterEPKNS_15RenderTableCellE","__ZN7WebCore11RenderTable29computePreferredLogicalWidthsEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZN7WebCore11RenderTable41convertStyleLogicalHeightToComputedHeightERKNS_6LengthE","__ZNK7WebCore12RenderObject8isSliderEv","__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore11RenderTable19subtractCaptionRectERNS_10LayoutRectE","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore10BorderDataeqERKS0_","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZN7WebCore11RenderTable5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","_memset","__ZNK7WebCore12RenderObject13isTextControlEv","__ZN7WebCore11RenderTable12appendColumnEj","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore11RenderTable12avoidsFloatsEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore11RenderTable16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZN7WebCore11RenderTable10addCaptionEPKNS_18RenderTableCaptionE","__ZNK7WebCore11RenderTable9cellBelowEPKNS_15RenderTableCellE","__ZNK7WebCore11RenderTable38bordersPaddingAndSpacingInRowDirectionEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","__ZN7WebCore11RenderTable6layoutEv","__ZNK7WebCore12RenderObject11isTableCellEv","_memcpy","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZN7WebCore11RenderTable26simplifiedNormalFlowLayoutEv","__ZN7WebCore11RenderTable39convertStyleLogicalWidthToComputedWidthERKNS_6LengthENS_10LayoutUnitE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZN7WebCore11RenderTable27recalcBordersInRowDirectionEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZN7WebCore11RenderTable19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderTable16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE","__ZNK7WebCore11RenderTable17outerBorderBeforeEv","__ZN3WTF6VectorIPN7WebCore18RenderTableCaptionELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZN7WebCore11RenderTable30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv","__ZN7WebCore11RenderTable11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject6lengthEv","__ZN7WebCore11RenderTable18updateLogicalWidthEv","__ZN3WTF6VectorIiLj0ENS_15CrashOnOverflowEE4fillERKij","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZN7WebCore11RenderTable9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderTable33createAnonymousWithParentRendererEPKNS_12RenderObjectE","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore11RenderTable10cellBeforeEPKNS_15RenderTableCellE","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore11RenderTable12paddingStartEv","__ZNK7WebCore11RenderTable19inlineBlockBaselineENS_17LineDirectionModeE","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore11RenderTable17updateColumnCacheEv","__ZNK7WebCore11RenderTable10renderNameEv","__ZNK7WebCore11RenderTable14recalcSectionsEv","__ZN3WTF6VectorIN7WebCore11RenderTable12ColumnStructELj0ENS_15CrashOnOverflowEE6insertIS3_EEvjOT_","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore11RenderTable10paddingEndEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZNK7WebCore11RenderTable12borderBottomEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN3WTF6VectorIPN7WebCore14RenderTableColELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore11RenderTable29tableStartBorderAdjoiningCellEPKNS_15RenderTableCellE","__ZN7WebCore11RenderTableD2Ev","__ZN7WebCore11RenderTable13layoutCaptionEPNS_18RenderTableCaptionE","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore11RenderTable7isTableEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore11RenderTable16outerBorderRightEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore11RenderTable12sectionBelowEPKNS_18RenderTableSectionENS_22SkipEmptySectionsValueE","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZN7WebCore11RenderTable17updateFirstLetterEv","__ZNK7WebCore11RenderTable11firstColumnEv","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore11RenderTable17firstLineBaselineEv","__ZNK7WebCore11RenderTable14slowColElementEjPbS1_","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZNK7WebCore11RenderTable9cellAboveEPKNS_15RenderTableCellE","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","_memmove","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore11RenderTable29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore11RenderTable11borderRightEv","__ZN7WebCore11RenderTable22recalcCollapsedBordersEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

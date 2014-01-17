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
H_BASE = parentModule["_malloc"](1072 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1072;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11RenderImageC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore11RenderImageC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE;
var __ZN7WebCore11RenderImageD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,73,109,97,103,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viif(index,a1,a2,a3) {
  try {
    Module["dynCall_viif"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames6imgTagE=env.__ZN7WebCore9HTMLNames6imgTagE|0;
  var __ZN7WebCore9HTMLNames8inputTagE=env.__ZN7WebCore9HTMLNames8inputTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore9HTMLNames7areaTagE=env.__ZN7WebCore9HTMLNames7areaTagE|0;
  var __ZN7WebCore9HTMLNames10usemapAttrE=env.__ZN7WebCore9HTMLNames10usemapAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11RenderImageE=(H_BASE+24)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viif=env.invoke_viif;
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
function __ZN7WebCore11RenderImage13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, d74 = +0, d75 = +0, d76 = +0, d77 = +0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
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
 i22 = i4 + 136 | 0;
 i23 = i4 + 144 | 0;
 i24 = i4 + 152 | 0;
 i25 = i4 + 160 | 0;
 i26 = i4 + 176 | 0;
 i27 = i4 + 184 | 0;
 i28 = i4 + 192 | 0;
 i29 = i4 + 208 | 0;
 i30 = i4 + 224 | 0;
 i31 = i4 + 232 | 0;
 i32 = i4 + 240 | 0;
 i33 = i4 + 248 | 0;
 i34 = i4 + 264 | 0;
 i35 = i34 | 0;
 i36 = i34;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i38 = i37;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i49 = i48;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i51 = i50 | 0;
 i52 = i50;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i54 = i1 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i20, i54);
 i55 = i1 | 0;
 i56 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 712 >> 2] & 127](i21, i55);
 i57 = (HEAP32[i20 >> 2] | 0) - (HEAP32[i21 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 716 >> 2] & 127](i22, i55);
 i21 = i57 - (HEAP32[i22 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i17, i54);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 704 >> 2] & 127](i18, i55);
 i22 = (HEAP32[i17 >> 2] | 0) - (HEAP32[i18 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 708 >> 2] & 127](i19, i55);
 i18 = i22 - (HEAP32[i19 >> 2] | 0) | 0;
 i19 = i1;
 i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 744 >> 2] & 511](i55) | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 736 >> 2] & 511](i55) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 712 >> 2] & 127](i23, i55);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 704 >> 2] & 127](i24, i55);
 i57 = HEAP32[i2 >> 2] | 0;
 i20 = i1 | 0;
 i58 = i1 + 4 | 0;
 i59 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 i60 = i1 + 104 | 0;
 i61 = HEAP32[i60 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i61 >> 2] | 0) + 16 >> 2] & 511](i61) | 0) {
   i62 = HEAP32[i60 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 24 >> 2] & 511](i62) | 0) {
    break;
   }
   i62 = HEAP32[i60 >> 2] | 0;
   if (!((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i62 >> 2] | 0) + 16 >> 2] & 511](i62) | 0) & (i21 | 0) > 0 & (i18 | 0) > 0)) {
    STACKTOP = i4;
    return;
   }
   i62 = HEAP32[i60 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i62 >> 2] | 0) + 20 >> 2] & 31](i44, i62, i21, i18);
   i62 = i44 | 0;
   i63 = HEAP32[i62 >> 2] | 0;
   HEAP32[i62 >> 2] = 0;
   i62 = (i63 | 0) == 0;
   do {
    if (i62) {
     i64 = 52;
    } else {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i63 >> 2] | 0) + 48 >> 2] & 127](i8, i63);
     if ((HEAP32[i8 >> 2] | 0) < 1) {
      i64 = 52;
      break;
     }
     if ((HEAP32[i8 + 4 >> 2] | 0) < 1) {
      i64 = 52;
      break;
     }
     i65 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 744 >> 2] & 511](i55) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 712 >> 2] & 127](i15, i55);
     i66 = (HEAP32[i15 >> 2] | 0) + i65 | 0;
     i65 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 736 >> 2] & 511](i55) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 704 >> 2] & 127](i16, i55);
     i67 = (HEAP32[i16 >> 2] | 0) + i65 | 0;
     __ZNK7WebCore9RenderBox11clientWidthEv(i9, i54);
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 712 >> 2] & 127](i10, i55);
     i65 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 716 >> 2] & 127](i11, i55);
     i68 = i65 - (HEAP32[i11 >> 2] | 0) | 0;
     __ZNK7WebCore9RenderBox12clientHeightEv(i12, i54);
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 704 >> 2] & 127](i13, i55);
     i65 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i56 >> 2] | 0) + 708 >> 2] & 127](i14, i55);
     i69 = i65 - (HEAP32[i14 >> 2] | 0) | 0;
     i65 = i46 | 0;
     i70 = i46 + 4 | 0;
     i71 = i46 + 8 | 0;
     HEAP32[i71 >> 2] = i68;
     i68 = i46 + 12 | 0;
     HEAP32[i68 >> 2] = i69;
     i69 = i3 | 0;
     i72 = i3 + 4 | 0;
     i73 = HEAP32[i72 >> 2] | 0;
     HEAP32[i65 >> 2] = i66 + (HEAP32[i69 >> 2] | 0);
     HEAP32[i70 >> 2] = i67 + i73;
     i73 = i1 + 92 | 0;
     i67 = HEAP32[i73 + 4 >> 2] | 0;
     HEAP32[i48 >> 2] = HEAP32[i73 >> 2];
     HEAP32[i48 + 4 >> 2] = i67;
     __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i47, i1 | 0, i49);
     i67 = HEAP32[i72 >> 2] | 0;
     i72 = i47 | 0;
     HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) + (HEAP32[i69 >> 2] | 0);
     i69 = i47 + 4 | 0;
     HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + i67;
     i67 = __ZNK7WebCore10LayoutRect8containsERKS0_(i46, i47) | 0;
     if (!i67) {
      __ZN7WebCore15GraphicsContext4saveEv(i57);
      d74 = +(HEAP32[i71 >> 2] | 0);
      d75 = +(HEAP32[i68 >> 2] | 0);
      d76 = +(+(HEAP32[i65 >> 2] | 0));
      d77 = +(+(HEAP32[i70 >> 2] | 0));
      HEAPF32[i51 >> 2] = d76;
      HEAPF32[i51 + 4 >> 2] = d77;
      i70 = i50 + 8 | 0;
      d77 = +d74;
      d74 = +d75;
      HEAPF32[i70 >> 2] = d77;
      HEAPF32[i70 + 4 >> 2] = d74;
      __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i57, i52);
     }
     __ZN7WebCore11RenderImage13paintIntoRectEPNS_15GraphicsContextERKNS_10LayoutRectE(i1, i57, i47);
     i70 = HEAP32[i60 >> 2] | 0;
     do {
      if ((i70 | 0) != 0) {
       if ((HEAP32[i70 + 8 >> 2] | 0) == 0 | (i59 | 0) == 0) {
        break;
       }
       if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
        break;
       }
       i65 = i53;
       i68 = i47;
       HEAP32[i65 >> 2] = HEAP32[i68 >> 2];
       HEAP32[i65 + 4 >> 2] = HEAP32[i68 + 4 >> 2];
       HEAP32[i65 + 8 >> 2] = HEAP32[i68 + 8 >> 2];
       HEAP32[i65 + 12 >> 2] = HEAP32[i68 + 12 >> 2];
       __ZN7WebCore10LayoutRect9intersectERKS0_(i53, i46);
       if ((HEAP8[(HEAP32[(HEAP32[i60 >> 2] | 0) + 8 >> 2] | 0) + 588 | 0] & 32) == 0) {
        __ZN7WebCore4Page26addRelevantRepaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i59, i20, i53);
        break;
       } else {
        __ZN7WebCore4Page26addRelevantUnpaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i59, i20, i53);
        break;
       }
      }
     } while (0);
     if (i67) {
      break;
     }
     __ZN7WebCore15GraphicsContext7restoreEv(i57);
    }
   } while (0);
   do {
    if ((i64 | 0) == 52) {
     if ((i59 | 0) == 0) {
      break;
     }
     if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
      break;
     }
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i45, i54);
     __ZN7WebCore4Page26addRelevantUnpaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i59, i20, i45);
    }
   } while (0);
   if (i62) {
    STACKTOP = i4;
    return;
   }
   i70 = i63 + 4 | 0;
   i68 = i70 | 0;
   i65 = (HEAP32[i68 >> 2] | 0) - 1 | 0;
   if ((i65 | 0) != 0) {
    HEAP32[i68 >> 2] = i65;
    STACKTOP = i4;
    return;
   }
   i65 = i70 - 4 | 0;
   if ((i65 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i65 >> 2] | 0) + 4 >> 2] & 63](i65);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i45 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i45 | 0) == 8) {
  STACKTOP = i4;
  return;
 }
 if ((i59 | 0) != 0 & (i45 | 0) == 4) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i25, i54);
  __ZN7WebCore4Page26addRelevantUnpaintedObjectEPNS_12RenderObjectERKNS_10LayoutRectE(i59, i20, i25);
 }
 if (!((i21 | 0) > 2 & (i18 | 0) > 2)) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i57, 1);
 HEAP32[i26 >> 2] = -4144960;
 HEAP8[i26 + 4 | 0] = 1;
 i25 = i1 + 36 | 0;
 __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i57, i26, (HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 HEAP32[i27 >> 2] = 0;
 HEAP8[i27 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i57, i27, (HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 i27 = i3 | 0;
 i26 = i23 | 0;
 i23 = i3 + 4 | 0;
 i59 = i24 | 0;
 i24 = (HEAP32[i23 >> 2] | 0) + i17 + (HEAP32[i59 >> 2] | 0) | 0;
 HEAP32[i29 >> 2] = (HEAP32[i27 >> 2] | 0) + i22 + (HEAP32[i26 >> 2] | 0);
 HEAP32[i29 + 4 >> 2] = i24;
 HEAP32[i29 + 8 >> 2] = i21;
 HEAP32[i29 + 12 >> 2] = i18;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i28, i29);
 __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i57, i28);
 i28 = i21 - 2 | 0;
 i21 = i18 - 2 | 0;
 i18 = HEAP32[i60 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] & 31](i30, i18, 0, 0);
 i18 = i30 | 0;
 i30 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = 0;
 i18 = HEAP32[i60 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 24 >> 2] & 511](i18) | 0) {
   i29 = i30;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 48 >> 2] & 127](i7, i30);
   if ((HEAP32[i7 >> 2] | 0) < 1) {
    i78 = 0;
    i79 = i30;
    i80 = 0;
    break;
   }
   if ((HEAP32[i7 + 4 >> 2] | 0) < 1) {
    i78 = 0;
    i79 = i30;
    i80 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 48 >> 2] & 127](i6, i30);
   if ((i28 | 0) < (HEAP32[i6 >> 2] | 0)) {
    i78 = 0;
    i79 = i30;
    i80 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 48 >> 2] & 127](i5, i30);
   if ((i21 | 0) < (HEAP32[i5 + 4 >> 2] | 0)) {
    i78 = 0;
    i79 = i30;
    i80 = 0;
    break;
   }
   d74 = +__ZN7WebCore17deviceScaleFactorEPNS_5FrameE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0);
   __ZNK7WebCore11CachedImage11brokenImageEf(i31, HEAP32[(HEAP32[i60 >> 2] | 0) + 8 >> 2] | 0, d74);
   i29 = HEAP32[i31 >> 2] | 0;
   if ((i29 | 0) != 0) {
    i24 = i29 + 4 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   }
   do {
    if ((i30 | 0) != 0) {
     i24 = i30 + 4 | 0;
     i54 = i24 | 0;
     i45 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
     if ((i45 | 0) != 0) {
      HEAP32[i54 >> 2] = i45;
      break;
     }
     i45 = i24 - 4 | 0;
     if ((i45 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 63](i45);
    }
   } while (0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 48 >> 2] & 127](i32, i29);
   d74 = +1 / +HEAPF32[i31 + 4 >> 2];
   i63 = i32 | 0;
   i62 = ~~(d74 * +(HEAP32[i63 >> 2] | 0));
   HEAP32[i63 >> 2] = i62;
   i45 = i32 + 4 | 0;
   i24 = ~~(d74 * +(HEAP32[i45 >> 2] | 0));
   HEAP32[i45 >> 2] = i24;
   i54 = (i28 - i62 | 0) / 2 & -1;
   i62 = (i21 - i24 | 0) / 2 & -1;
   i24 = HEAP32[i26 >> 2] | 0;
   i2 = i17 + 1 + (HEAP32[i59 >> 2] | 0) + ((i62 | 0) < 0 ? 0 : i62) | 0;
   i62 = __ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv(i20) | 0;
   i64 = (HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
   i53 = HEAP32[i63 >> 2] | 0;
   i63 = HEAP32[i45 >> 2] | 0;
   i45 = (HEAP32[i23 >> 2] | 0) + i2 | 0;
   HEAP32[i35 >> 2] = i22 + 1 + i24 + ((i54 | 0) < 0 ? 0 : i54) + (HEAP32[i27 >> 2] | 0);
   HEAP32[i35 + 4 >> 2] = i45;
   i45 = i34 + 8 | 0;
   HEAP32[i45 >> 2] = i53;
   HEAP32[i45 + 4 >> 2] = i63;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i33, i36);
   HEAP32[i37 >> 2] = i62;
   HEAP32[i37 + 4 >> 2] = 1;
   __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i57, i29, i64, i33, 2, i38, 0);
   i78 = 1;
   i79 = i29;
   i80 = i2;
  } else {
   i78 = 0;
   i79 = i30;
   i80 = 0;
  }
 } while (0);
 i30 = i1 + 100 | 0;
 i1 = HEAP32[i30 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if ((HEAP32[i1 + 4 >> 2] | 0) == 0) {
    break;
   }
   __ZNK7WebCore8Document31displayStringModifiedByEncodingERKN3WTF6StringE(i39, HEAP32[(HEAP32[(HEAP32[i58 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i30);
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i40, HEAP32[i25 >> 2] | 0, 1);
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i57, i40, (HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
   i38 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i25 >> 2] | 0) | 0;
   i33 = HEAP32[i38 + 24 >> 2] | 0;
   i37 = i33 + 44 | 0;
   i36 = HEAP32[i37 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i34 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i33, i38 | 0, 0) | 0;
    i33 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i34 >> 2] | 0) + 8 >> 2] & 15](i34, 32) | 0;
    HEAP32[i37 >> 2] = i33;
    i81 = i33;
   } else {
    i81 = i36;
   }
   i36 = i81 + 16 | 0;
   i33 = _round(+(+HEAPF32[i36 >> 2])) | 0;
   i37 = i3;
   i34 = i22 + 1 + (HEAP32[i26 >> 2] | 0) + (HEAP32[i37 >> 2] | 0) | 0;
   i35 = i17 + 1 + i33 + (HEAP32[i59 >> 2] | 0) + (HEAP32[i37 + 4 >> 2] | 0) | 0;
   __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i41, i20, i38, i39, HEAP32[i25 >> 2] | 0, 1, 0);
   d74 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i38, i41, 0, 0);
   do {
    if (d74 < +2147483647) {
     if (d74 <= +-2147483648) {
      i82 = -2147483648;
      break;
     }
     i82 = ~~d74;
    } else {
     i82 = 2147483647;
    }
   } while (0);
   i29 = (i28 | 0) >= (i82 | 0);
   do {
    if (i78) {
     if (!i29) {
      break;
     }
     i37 = _round(+(+HEAPF32[i36 >> 2])) | 0;
     if ((i80 | 0) < ((_round(+(+HEAPF32[i81 + 20 >> 2])) | 0) + i37 | 0)) {
      break;
     }
     HEAPF32[i42 >> 2] = +(i34 | 0);
     HEAPF32[i42 + 4 >> 2] = +(i35 | 0);
     __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i57, i38, i41, i42, 0, -1);
    } else {
     if (!i29) {
      break;
     }
     i37 = _round(+(+HEAPF32[i36 >> 2])) | 0;
     if ((i21 | 0) < ((_round(+(+HEAPF32[i81 + 20 >> 2])) | 0) + i37 | 0)) {
      break;
     }
     HEAPF32[i43 >> 2] = +(i34 | 0);
     HEAPF32[i43 + 4 >> 2] = +(i35 | 0);
     __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i57, i38, i41, i43, 0, -1);
    }
   } while (0);
   i38 = HEAP32[i41 + 32 >> 2] | 0;
   do {
    if ((i38 | 0) != 0) {
     i35 = i38 + 4 | 0;
     i34 = i35 | 0;
     i36 = (HEAP32[i34 >> 2] | 0) - 1 | 0;
     if ((i36 | 0) != 0) {
      HEAP32[i34 >> 2] = i36;
      break;
     }
     i36 = i35 - 4 | 0;
     if ((i36 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i36 >> 2] | 0) + 4 >> 2] & 63](i36);
    }
   } while (0);
   i38 = HEAP32[i39 >> 2] | 0;
   if ((i38 | 0) == 0) {
    break;
   }
   i36 = i38 | 0;
   i35 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
   if ((i35 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i38);
    break;
   } else {
    HEAP32[i36 >> 2] = i35;
    break;
   }
  }
 } while (0);
 if ((i79 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i39 = i79 + 4 | 0;
 i79 = i39 | 0;
 i41 = (HEAP32[i79 >> 2] | 0) - 1 | 0;
 if ((i41 | 0) != 0) {
  HEAP32[i79 >> 2] = i41;
  STACKTOP = i4;
  return;
 }
 i41 = i39 - 4 | 0;
 if ((i41 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 63](i41);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 44 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_viii + 52;
}
function __ZN7WebCore11RenderImage22imageDimensionsChangedEbPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, d68 = +0, d69 = +0, d70 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 64 | 0;
 i13 = i4 + 72 | 0;
 i14 = i4 + 80 | 0;
 i15 = i4 + 88 | 0;
 i16 = i4 + 96 | 0;
 i17 = i4 + 104 | 0;
 i18 = i4 + 112 | 0;
 i19 = i4 + 120 | 0;
 i20 = i4 + 128 | 0;
 i21 = i4 + 136 | 0;
 i22 = i4 + 144 | 0;
 i23 = i4 + 152 | 0;
 i24 = i4 + 160 | 0;
 i25 = i4 + 168 | 0;
 i26 = i4 + 176 | 0;
 i27 = i4 + 184 | 0;
 i28 = i4 + 192 | 0;
 i29 = i4 + 200 | 0;
 i30 = i4 + 208 | 0;
 i31 = i4 + 216 | 0;
 i32 = i4 + 224 | 0;
 i33 = i32;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i39 = i38 | 0;
 i40 = i38;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i44 = i43 | 0;
 i45 = i43;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i48 = i47 | 0;
 i49 = i47;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i51 = i1 + 104 | 0;
 i52 = HEAP32[i51 >> 2] | 0;
 i53 = i1 + 36 | 0;
 FUNCTION_TABLE_viif[HEAP32[(HEAP32[i52 >> 2] | 0) + 44 >> 2] & 1](i33, i52, +HEAPF32[(HEAP32[(HEAP32[i53 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
 i52 = i1 + 92 | 0;
 if ((HEAP32[i32 >> 2] | 0) == (HEAP32[i52 >> 2] | 0)) {
  if ((HEAP32[i33 + 4 >> 2] | 0) != (HEAP32[i52 + 4 >> 2] | 0) | i2) {
   i54 = 3;
  } else {
   i55 = 0;
  }
 } else {
  i54 = 3;
 }
 do {
  if ((i54 | 0) == 3) {
   i33 = HEAP32[i51 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 24 >> 2] & 511](i33) | 0) {
    i55 = i2;
    break;
   }
   i33 = HEAP32[i32 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i52 + 4 >> 2] = i33;
   i55 = 1;
  }
 } while (0);
 i32 = i1 | 0;
 if ((__ZNK7WebCore12RenderObject15containingBlockEv(i32) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (i55) {
   i33 = i1 + 20 | 0;
   if ((HEAP32[i33 >> 2] & 32 | 0) == 0) {
    __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i32, 1, 1);
   }
   i56 = i1 | 0;
   do {
    if (__ZNK7WebCore9RenderBox17hasOverrideHeightEv(i56) | 0) {
     i57 = i2;
     i58 = 1;
    } else {
     i59 = __ZNK7WebCore9RenderBox16hasOverrideWidthEv(i56) | 0;
     if (i59 | i2) {
      i57 = i2;
      i58 = i59;
      break;
     }
     _memset(i34 | 0, 0, 24) | 0;
     __ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i56, i34, 0);
     i59 = i34 | 0;
     i60 = HEAP32[i59 >> 2] | 0;
     i61 = HEAP32[(HEAP32[i1 >> 2] | 0) + 884 >> 2] | 0;
     i62 = i1 + 56 | 0;
     HEAP32[i35 >> 2] = HEAP32[i62 >> 2];
     HEAP32[i36 >> 2] = 0;
     FUNCTION_TABLE_viiii[i61 & 31](i56, i35, i36, i34);
     if ((HEAP32[i1 + 52 >> 2] | 0) != (i60 | 0)) {
      i57 = 1;
      i58 = 0;
      break;
     }
     i57 = (HEAP32[i62 >> 2] | 0) != (HEAP32[i59 >> 2] | 0);
     i58 = 0;
    }
   } while (0);
   i56 = HEAP32[i53 >> 2] | 0;
   i59 = (HEAP32[i56 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i59 | 0) == 3 | (i59 | 0) == 0) {
    i62 = HEAP32[i56 + 4 >> 2] | 0;
    i63 = i62 + 4 | 0;
    i64 = i62;
   } else {
    i62 = HEAP32[i56 + 4 >> 2] | 0;
    i63 = i62 + 12 | 0;
    i64 = i62;
   }
   i62 = HEAP8[i63 + 5 | 0] | 0;
   do {
    if ((i62 << 24 >> 24 | 0) == 10 | (i62 << 24 >> 24 | 0) == 2) {
     i54 = 26;
    } else {
     if ((i59 | 0) == 3 | (i59 | 0) == 0) {
      i65 = i64 + 28 | 0;
     } else {
      i65 = i64 + 44 | 0;
     }
     i56 = HEAP8[i65 + 5 | 0] | 0;
     if ((i56 << 24 >> 24 | 0) == 10 | (i56 << 24 >> 24 | 0) == 2) {
      i54 = 26;
      break;
     }
     if ((i59 | 0) == 3 | (i59 | 0) == 0) {
      i66 = i64 + 20 | 0;
     } else {
      i66 = i64 + 36 | 0;
     }
     if (i57 | i58) {
      i54 = 26;
      break;
     }
     i56 = HEAP8[i66 + 5 | 0] | 0;
     if ((i56 << 24 >> 24 | 0) == 10 | (i56 << 24 >> 24 | 0) == 2) {
      i54 = 26;
     } else {
      i67 = 1;
     }
    }
   } while (0);
   do {
    if ((i54 | 0) == 26) {
     i59 = HEAP32[i33 >> 2] | 0;
     if ((i59 & 1 | 0) != 0) {
      i67 = 0;
      break;
     }
     HEAP32[i33 >> 2] = i59 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i32, 1, 0);
     if ((HEAP32[i33 >> 2] & 32768 | 0) == 0) {
      i67 = 0;
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i32);
     i67 = 0;
    }
   } while (0);
   do {
    if ((HEAP32[i33 >> 2] & 1048577 | 0) == 1048576) {
     i59 = HEAP32[i52 + 4 >> 2] | 0;
     HEAP32[i6 >> 2] = HEAP32[i52 >> 2];
     HEAP32[i6 + 4 >> 2] = i59;
     __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i5, i1 | 0, i6);
     i59 = HEAP32[i5 + 8 >> 2] | 0;
     i62 = HEAP32[i5 + 12 >> 2] | 0;
     HEAP32[i7 >> 2] = i59;
     HEAP32[i7 + 4 >> 2] = i62;
     if ((i59 | 0) < 1 | (i62 | 0) < 1) {
      break;
     }
     i62 = HEAP32[i51 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i62 >> 2] | 0) + 28 >> 2] & 127](i62, i7);
    }
   } while (0);
   if (i67) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i37 | 0, 0, 16) | 0;
 if ((i3 | 0) == 0) {
  i67 = i1 | 0;
  i7 = i1 | 0;
  i5 = i1;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 744 >> 2] & 511](i7) | 0;
  i52 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 712 >> 2] & 127](i30, i7);
  i54 = (HEAP32[i30 >> 2] | 0) + i6 | 0;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 736 >> 2] & 511](i7) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 704 >> 2] & 127](i31, i7);
  i5 = (HEAP32[i31 >> 2] | 0) + i6 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i24, i67);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 712 >> 2] & 127](i25, i7);
  i6 = (HEAP32[i24 >> 2] | 0) - (HEAP32[i25 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 716 >> 2] & 127](i26, i7);
  i25 = i6 - (HEAP32[i26 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i27, i67);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 704 >> 2] & 127](i28, i7);
  i67 = (HEAP32[i27 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i52 >> 2] | 0) + 708 >> 2] & 127](i29, i7);
  i7 = i67 - (HEAP32[i29 >> 2] | 0) | 0;
  HEAP32[i37 >> 2] = i54;
  HEAP32[i37 + 4 >> 2] = i5;
  HEAP32[i37 + 8 >> 2] = i25;
  HEAP32[i37 + 12 >> 2] = i7;
 } else {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i42, i3);
  i3 = HEAP32[i51 >> 2] | 0;
  FUNCTION_TABLE_viif[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 1](i46, i3, +1);
  d68 = +(HEAP32[i46 >> 2] | 0);
  d69 = +(HEAP32[i46 + 4 >> 2] | 0);
  HEAP32[i44 >> 2] = 0;
  HEAP32[i44 + 4 >> 2] = 0;
  i44 = i43 + 8 | 0;
  d70 = +d68;
  d68 = +d69;
  HEAPF32[i44 >> 2] = d70;
  HEAPF32[i44 + 4 >> 2] = d68;
  i44 = i1 | 0;
  i43 = i1 | 0;
  i46 = i1;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 744 >> 2] & 511](i43) | 0;
  i51 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 712 >> 2] & 127](i14, i43);
  i7 = (HEAP32[i14 >> 2] | 0) + i3 | 0;
  i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 736 >> 2] & 511](i43) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 704 >> 2] & 127](i15, i43);
  i14 = (HEAP32[i15 >> 2] | 0) + i3 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i8, i44);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 712 >> 2] & 127](i9, i43);
  i3 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 716 >> 2] & 127](i10, i43);
  i9 = i3 - (HEAP32[i10 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i11, i44);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 704 >> 2] & 127](i12, i43);
  i10 = (HEAP32[i11 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 708 >> 2] & 127](i13, i43);
  d68 = +(i10 - (HEAP32[i13 >> 2] | 0) | 0);
  d70 = +(+(i7 | 0));
  d69 = +(+(i14 | 0));
  HEAPF32[i48 >> 2] = d70;
  HEAPF32[i48 + 4 >> 2] = d69;
  i48 = i47 + 8 | 0;
  d69 = +(+(i9 | 0));
  d70 = +d68;
  HEAPF32[i48 >> 2] = d69;
  HEAPF32[i48 + 4 >> 2] = d70;
  __ZN7WebCore7mapRectERKNS_9FloatRectES2_S2_(i41, i42, i45, i49);
  __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i40, i41);
  i41 = HEAP32[i39 + 4 >> 2] | 0;
  i40 = i38 + 8 | 0;
  i38 = HEAP32[i40 >> 2] | 0;
  i49 = HEAP32[i40 + 4 >> 2] | 0;
  HEAP32[i37 >> 2] = HEAP32[i39 >> 2];
  HEAP32[i37 + 4 >> 2] = i41;
  HEAP32[i37 + 8 >> 2] = i38;
  HEAP32[i37 + 12 >> 2] = i49;
  i49 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 744 >> 2] & 511](i43) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 712 >> 2] & 127](i22, i43);
  i38 = (HEAP32[i22 >> 2] | 0) + i49 | 0;
  i49 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 736 >> 2] & 511](i43) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 704 >> 2] & 127](i23, i43);
  i46 = (HEAP32[i23 >> 2] | 0) + i49 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i16, i44);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 712 >> 2] & 127](i17, i43);
  i49 = (HEAP32[i16 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 716 >> 2] & 127](i18, i43);
  i17 = i49 - (HEAP32[i18 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i19, i44);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 704 >> 2] & 127](i20, i43);
  i44 = (HEAP32[i19 >> 2] | 0) - (HEAP32[i20 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i51 >> 2] | 0) + 708 >> 2] & 127](i21, i43);
  i43 = i44 - (HEAP32[i21 >> 2] | 0) | 0;
  HEAP32[i50 >> 2] = i38;
  HEAP32[i50 + 4 >> 2] = i46;
  HEAP32[i50 + 8 >> 2] = i17;
  HEAP32[i50 + 12 >> 2] = i43;
  __ZN7WebCore10LayoutRect9intersectERKS0_(i37, i50);
 }
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i32, i37, 0);
 __ZN7WebCore20RenderBoxModelObject14contentChangedENS_17ContentChangeTypeE(i1 | 0, 0);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderImage33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i1 + 104 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 511](i14) | 0)) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i14 = HEAP32[i13 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 24 >> 2] & 511](i14) | 0) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((HEAP8[i14 + 588 | 0] & 32) == 0) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i3;
   return i15 | 0;
  }
 } while (0);
 i14 = i1 | 0;
 i16 = i1 | 0;
 i17 = i1;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 511](i16) | 0;
 i19 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i10, i16);
 i20 = (HEAP32[i10 >> 2] | 0) + i18 | 0;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 511](i16) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i11, i16);
 i17 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i4, i14);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 127](i5, i16);
 i18 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 127](i6, i16);
 i5 = i18 - (HEAP32[i6 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i7, i14);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 127](i8, i16);
 i14 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 127](i9, i16);
 i19 = i14 - (HEAP32[i9 >> 2] | 0) | 0;
 HEAP32[i12 >> 2] = i20;
 HEAP32[i12 + 4 >> 2] = i17;
 HEAP32[i12 + 8 >> 2] = i5;
 HEAP32[i12 + 12 >> 2] = i19;
 if (!(__ZNK7WebCore10LayoutRect8containsERKS0_(i12, i2) | 0)) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i2 = i1 | 0;
 i12 = i1 + 36 | 0;
 i1 = HEAP32[i12 >> 2] | 0;
 i19 = (HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 44 >> 2] | 0) >>> 2 & 3;
 L14 : do {
  if ((i19 | 0) == 0) {
   i5 = HEAP32[i1 + 16 >> 2] | 0;
   i17 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
   i20 = HEAP32[i5 + 104 >> 2] | 0;
   i9 = (i20 & 134217726 | 0) == 0;
   if (i9 | i17) {
    if (i9) {
     i21 = 10;
    }
   } else {
    if ((i20 & 2013265920 | 0) == 0) {
     i21 = 10;
    }
   }
   do {
    if ((i21 | 0) == 10) {
     i20 = HEAP32[i5 + 112 >> 2] | 0;
     i9 = (i20 & 134217726 | 0) == 0;
     if (i9 | i17) {
      if (!i9) {
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       break;
      }
     }
     i20 = HEAP32[i5 + 120 >> 2] | 0;
     i9 = (i20 & 134217726 | 0) == 0;
     if (i9 | i17) {
      if (!i9) {
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) != 0) {
       break;
      }
     }
     i20 = HEAP32[i5 + 128 >> 2] | 0;
     i9 = (i20 & 134217726 | 0) == 0;
     if (i9 | i17) {
      if (i9) {
       break L14;
      } else {
       break;
      }
     } else {
      if ((i20 & 2013265920 | 0) == 0) {
       break L14;
      } else {
       break;
      }
     }
    }
   } while (0);
   if (__ZNK7WebCore20RenderBoxModelObject24borderObscuresBackgroundEv(i16) | 0) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i3;
   return i15 | 0;
  }
 } while (0);
 i16 = HEAP32[i12 >> 2] | 0;
 do {
  if (i19 >>> 0 < 2 >>> 0) {
   i12 = HEAP32[i16 + 16 >> 2] | 0;
   i21 = i12 + 68 | 0;
   if ((HEAP8[i12 + 73 | 0] | 0) == 10) {
    i15 = 0;
    STACKTOP = i3;
    return i15 | 0;
   }
   do {
    if ((HEAP8[i12 + 74 | 0] & 1) == 0) {
     if ((HEAP32[i21 >> 2] | 0) == 0) {
      break;
     } else {
      i15 = 0;
     }
     STACKTOP = i3;
     return i15 | 0;
    } else {
     if (+HEAPF32[i21 >> 2] != +0) {
      i15 = 0;
     } else {
      break;
     }
     STACKTOP = i3;
     return i15 | 0;
    }
   } while (0);
   i21 = i12 + 76 | 0;
   if ((HEAP8[i12 + 81 | 0] | 0) == 10) {
    i15 = 0;
    STACKTOP = i3;
    return i15 | 0;
   }
   do {
    if ((HEAP8[i12 + 82 | 0] & 1) == 0) {
     if ((HEAP32[i21 >> 2] | 0) == 0) {
      break;
     } else {
      i15 = 0;
     }
     STACKTOP = i3;
     return i15 | 0;
    } else {
     if (+HEAPF32[i21 >> 2] != +0) {
      i15 = 0;
     } else {
      break;
     }
     STACKTOP = i3;
     return i15 | 0;
    }
   } while (0);
   i21 = i12 + 84 | 0;
   if ((HEAP8[i12 + 89 | 0] | 0) == 10) {
    i15 = 0;
    STACKTOP = i3;
    return i15 | 0;
   }
   do {
    if ((HEAP8[i12 + 90 | 0] & 1) == 0) {
     if ((HEAP32[i21 >> 2] | 0) == 0) {
      break;
     } else {
      i15 = 0;
     }
     STACKTOP = i3;
     return i15 | 0;
    } else {
     if (+HEAPF32[i21 >> 2] != +0) {
      i15 = 0;
     } else {
      break;
     }
     STACKTOP = i3;
     return i15 | 0;
    }
   } while (0);
   i21 = i12 + 92 | 0;
   if ((HEAP8[i12 + 97 | 0] | 0) == 10) {
    i15 = 0;
    STACKTOP = i3;
    return i15 | 0;
   }
   if ((HEAP8[i12 + 98 | 0] & 1) == 0) {
    if ((HEAP32[i21 >> 2] | 0) == 0) {
     break;
    } else {
     i15 = 0;
    }
    STACKTOP = i3;
    return i15 | 0;
   } else {
    if (+HEAPF32[i21 >> 2] != +0) {
     i15 = 0;
    } else {
     break;
    }
    STACKTOP = i3;
    return i15 | 0;
   }
  }
 } while (0);
 i19 = (HEAP32[(HEAP32[i16 + 20 >> 2] | 0) + 296 >> 2] | 0) >>> 22 & 7;
 if (!((i19 | 0) == 2 | (i19 | 0) == 0)) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i19 = HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0;
 if ((i19 | 0) == 0) {
  i15 = 0;
  STACKTOP = i3;
  return i15 | 0;
 }
 i15 = __ZN7WebCore11CachedImage27currentFrameKnownToBeOpaqueEPKNS_13RenderElementE(i19, i2) | 0;
 STACKTOP = i3;
 return i15 | 0;
}
function __ZN7WebCore11RenderImage11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, d32 = +0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 176 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i19;
 __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i16, i3 | 0);
 i21 = i1 | 0;
 i22 = __ZN7WebCore9RenderBox11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i21, i2, i16, i4, i5, i6) | 0;
 do {
  if ((HEAP32[i16 + 72 >> 2] | 0) != 0) {
   i6 = i1 + 20 | 0;
   if ((HEAP32[i6 >> 2] & 128 | 0) != 0) {
    break;
   }
   i2 = i1 + 4 | 0;
   if ((HEAP32[i2 >> 2] | 0) == 0) {
    break;
   }
   i23 = __ZNK7WebCore11RenderImage8imageMapEv(i1) | 0;
   if ((i23 | 0) == 0) {
    break;
   }
   i24 = i1 | 0;
   i25 = i1;
   i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 744 >> 2] & 511](i24) | 0;
   i27 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i14, i24);
   i28 = HEAP32[i14 >> 2] | 0;
   i29 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 511](i24) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i15, i24);
   i25 = HEAP32[i15 >> 2] | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i8, i21);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i9, i24);
   i30 = (HEAP32[i8 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 716 >> 2] & 127](i10, i24);
   i31 = i30 - (HEAP32[i10 >> 2] | 0) | 0;
   __ZNK7WebCore9RenderBox12clientHeightEv(i11, i21);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i12, i24);
   i30 = (HEAP32[i11 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 708 >> 2] & 127](i13, i24);
   i24 = i31 | 0;
   i31 = i30 - (HEAP32[i13 >> 2] | 0) | 0;
   d32 = +1 / +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
   i30 = (HEAP32[i4 + 4 >> 2] | 0) - (i25 + i29 + (HEAP32[i5 + 4 >> 2] | 0)) - (HEAP32[i1 + 48 >> 2] | 0) | 0;
   d33 = d32 * +((HEAP32[i4 >> 2] | 0) - (i28 + i26 + (HEAP32[i5 >> 2] | 0)) - (HEAP32[i1 + 44 >> 2] | 0) | 0);
   do {
    if (d33 < +2147483647) {
     if (d33 <= +-2147483648) {
      i34 = 0;
      i35 = -2147483648;
      break;
     }
     i34 = 0;
     i35 = ~~d33;
    } else {
     i34 = 0;
     i35 = 2147483647;
    }
   } while (0);
   d33 = d32 * +(i30 | 0);
   do {
    if (d33 < +2147483647) {
     if (d33 <= +-2147483648) {
      i36 = -2147483648;
      i37 = 0;
      break;
     }
     i36 = ~~d33;
     i37 = 0;
    } else {
     i36 = 2147483647;
     i37 = 0;
    }
   } while (0);
   HEAP32[i17 >> 2] = i37 | i35;
   HEAP32[i17 + 4 >> 2] = i36 | i34;
   HEAP32[i19 >> 2] = i24;
   HEAP32[i19 + 4 >> 2] = i31;
   if (!(__ZN7WebCore14HTMLMapElement13mapMouseEventENS_11LayoutPointERKNS_10LayoutSizeERNS_13HitTestResultE(i23, i18, i20, i16) | 0)) {
    break;
   }
   if ((HEAP32[i6 >> 2] & 128 | 0) == 0) {
    i38 = HEAP32[i2 >> 2] | 0;
   } else {
    i38 = 0;
   }
   __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i16, i38 | 0);
  }
 } while (0);
 if (i22) {
  __ZN7WebCore13HitTestResultaSERKS0_(i3, i16) | 0;
  __ZN7WebCore13HitTestResultD1Ev(i16);
  STACKTOP = i7;
  return i22 | 0;
 }
 if ((HEAP8[i3 + 68 | 0] & 1) == 0) {
  __ZN7WebCore13HitTestResultD1Ev(i16);
  STACKTOP = i7;
  return i22 | 0;
 }
 __ZN7WebCore13HitTestResult6appendERKS0_(i3, i16);
 __ZN7WebCore13HitTestResultD1Ev(i16);
 STACKTOP = i7;
 return i22 | 0;
}
function __ZN7WebCore11RenderImage13paintIntoRectEPNS_15GraphicsContextERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 56 | 0;
 i12 = i11;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i3);
 i3 = i1 + 104 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 16 >> 2] & 511](i13) | 0)) {
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[i3 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 24 >> 2] & 511](i13) | 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i6 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 if ((i14 | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i15 = i6 + 12 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 if ((i16 | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i17 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 31](i7, i17, i14, i16);
 i16 = i7 | 0;
 i7 = HEAP32[i16 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] & 127](i5, i7);
 do {
  if ((HEAP32[i5 >> 2] | 0) >= 1) {
   if ((HEAP32[i5 + 4 >> 2] | 0) < 1) {
    break;
   }
   do {
    if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
     i16 = HEAP32[i1 + 4 >> 2] | 0;
     if ((i16 | 0) == 0) {
      i18 = 2;
      break;
     }
     if ((HEAP32[i16 + 12 >> 2] & 16 | 0) == 0) {
      i18 = 2;
      break;
     }
     if ((HEAP32[(HEAP32[i16 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
      i18 = 2;
      break;
     }
     if ((i16 | 0) == 0) {
      i18 = 2;
      break;
     }
     i18 = HEAP32[i16 + 140 >> 2] | 0;
    } else {
     i18 = 2;
    }
   } while (0);
   i16 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i16 >> 2] | 0) + 20 >> 2] & 31](i8, i16, 0, 0);
   i16 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     i14 = i16 + 4 | 0;
     i17 = i14 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i19 | 0) != 0) {
      HEAP32[i17 >> 2] = i19;
      break;
     }
     i19 = i14 - 4 | 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 63](i19);
    }
   } while (0);
   i19 = i6 + 8 | 0;
   i14 = HEAP32[i19 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i9 + 4 >> 2] = i14;
   i14 = __ZN7WebCore20RenderBoxModelObject23shouldPaintAtLowQualityEPNS_15GraphicsContextEPNS_5ImageEPKvRKNS_10LayoutSizeE(i1 | 0, i2, i16, i16, i9) | 0;
   i19 = __ZNK7WebCore12RenderObject29shouldRespectImageOrientationEv(i1 | 0) | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] & 31](i10, i17, HEAP32[i13 >> 2] | 0, HEAP32[i15 >> 2] | 0);
   i17 = i10 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   i21 = (HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
   HEAP32[i11 >> 2] = i19;
   HEAP32[i11 + 4 >> 2] = 1;
   __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i20, i21, i6, i18, i12, i14);
   i14 = HEAP32[i17 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i17 = i14 + 4 | 0;
   i14 = i17 | 0;
   i21 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i21 | 0) != 0) {
    HEAP32[i14 >> 2] = i21;
    break;
   }
   i21 = i17 - 4 | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
  }
 } while (0);
 i12 = i7 + 4 | 0;
 i7 = i12 | 0;
 i18 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i7 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
 i18 = i12 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 63](i18);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderImage22setImageSizeForAltTextEPNS_11CachedImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i7 = (i2 | 0) != 0;
 do {
  if (i7) {
   if ((__ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i2, i1 | 0) | 0) == 0) {
    i8 = 4;
    break;
   }
   __ZNK7WebCore11RenderImage17imageSizeForErrorEPNS_11CachedImageE(i5, i1, i2);
   i9 = i1 + 100 | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   i11 = HEAP32[i4 + 4 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   i13 = i9;
  } else {
   i8 = 4;
  }
 } while (0);
 if ((i8 | 0) == 4) {
  i8 = HEAP32[i1 + 100 >> 2] | 0;
  if ((i8 | 0) == 0) {
   i14 = 0;
  } else {
   i14 = (HEAP32[i8 + 4 >> 2] | 0) != 0;
  }
  i4 = i14 | i7 ? 4 : 0;
  i10 = i4;
  i11 = i4;
  i12 = i8;
  i13 = i1 + 100 | 0;
 }
 do {
  if ((i12 | 0) == 0) {
   i15 = i10;
   i16 = i11;
  } else {
   if ((HEAP32[i12 + 4 >> 2] | 0) == 0) {
    i15 = i10;
    i16 = i11;
    break;
   }
   i8 = __ZN7WebCore9fontCacheEv() | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i8 = i1 + 36 | 0;
   i4 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[i8 >> 2] | 0) | 0;
   __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i6, i1 | 0, i4, i13, HEAP32[i8 >> 2] | 0, 1, 0);
   d17 = +Math_ceil(+__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i4, i6, 0, 0));
   i8 = ~~((d17 > +1024 ? +1024 : d17) + +4);
   i7 = HEAP32[i4 + 24 >> 2] | 0;
   i14 = i7 + 44 | 0;
   i2 = HEAP32[i14 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i5 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i7, i4 | 0, 0) | 0;
    i4 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 15](i5, 32) | 0;
    HEAP32[i14 >> 2] = i4;
    i18 = i4;
   } else {
    i18 = i2;
   }
   i2 = _round(+(+HEAPF32[i18 + 16 >> 2])) | 0;
   i4 = (_round(+(+HEAPF32[i18 + 20 >> 2])) | 0) + i2 | 0;
   i2 = (i4 | 0) > 256 ? 260 : i4 + 4 | 0;
   i4 = HEAP32[i6 + 32 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i14 = i4 + 4 | 0;
     i5 = i14 | 0;
     i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i5 >> 2] = i7;
      break;
     }
     i7 = i14 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    }
   } while (0);
   i4 = (i10 | 0) > (i8 | 0) ? i10 : i8;
   i7 = (i11 | 0) > (i2 | 0) ? i11 : i2;
   i14 = __ZN7WebCore9fontCacheEv() | 0;
   i5 = i14 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i9;
   if ((i9 | 0) != 0) {
    i15 = i4;
    i16 = i7;
    break;
   }
   __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i14);
   i15 = i4;
   i16 = i7;
  }
 } while (0);
 i11 = i1 + 92 | 0;
 if ((i15 | 0) == (HEAP32[i11 >> 2] | 0) & (i16 | 0) == (HEAP32[i11 + 4 >> 2] | 0)) {
  i19 = 0;
  STACKTOP = i3;
  return i19 | 0;
 }
 HEAP32[i11 >> 2] = i15;
 HEAP32[i11 + 4 >> 2] = i16;
 i19 = 1;
 STACKTOP = i3;
 return i19 | 0;
}
function __ZN7WebCore11RenderImage12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i7 + 2285 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[i7 + 1433 | 0] & 1) != 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i1 + 20 | 0;
 L7 : do {
  if ((HEAP32[i7 >> 2] | 0) >>> 0 > 1073741823 >>> 0) {
   i8 = 8;
  } else {
   i9 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0;
   i10 = i9 + 116 | 0;
   while (1) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     i8 = 8;
     break L7;
    }
    i10 = HEAP32[i10 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i9 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    i8 = 8;
   }
  }
 } while (0);
 if ((i8 | 0) == 8) {
  __ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2, i3);
 }
 i8 = i1 + 104 | 0;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 48 >> 2] & 511](i10) | 0) == (i2 | 0) & (i2 | 0) != 0)) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 + 109 | 0;
 if ((HEAP8[i2] & 1) == 0) {
  i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_viif[HEAP32[(HEAP32[i11 >> 2] | 0) + 40 >> 2] & 1](i5, i11, +1);
  do {
   if ((HEAP8[i10 + 592 | 0] & 1) == 0) {
    i11 = Math_imul(HEAP32[i5 >> 2] | 0, HEAP32[i5 + 4 >> 2] | 0) | 0;
    i12 = i10 + 588 | 0;
    i13 = (HEAP32[i12 >> 2] | 0) + i11 | 0;
    HEAP32[i12 >> 2] = i13;
    if (i13 >>> 0 < 1025 >>> 0) {
     break;
    }
    __ZN7WebCore9FrameView24updateIsVisuallyNonEmptyEv(i10);
   }
  } while (0);
  HEAP8[i2] = 1;
 }
 i2 = HEAP32[i8 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 511](i2) | 0) {
  i2 = HEAP32[i1 + 100 >> 2] | 0;
  do {
   if ((i2 | 0) != 0) {
    if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
     break;
    }
    if (!(__ZNK7WebCore8Document21hasPendingStyleRecalcEv(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
     break;
    }
    if ((HEAP32[i7 >> 2] & 128 | 0) != 0) {
     STACKTOP = i4;
     return;
    }
    i10 = HEAP32[i6 >> 2] | 0;
    if ((i10 | 0) == 0) {
     STACKTOP = i4;
     return;
    }
    HEAP8[i1 + 108 | 0] = 1;
    __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i10, 49152);
    STACKTOP = i4;
    return;
   }
  } while (0);
  i14 = __ZN7WebCore11RenderImage22setImageSizeForAltTextEPNS_11CachedImageE(i1, HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] | 0) | 0;
 } else {
  i14 = 0;
 }
 __ZN7WebCore11RenderImage22imageDimensionsChangedEbPKNS_7IntRectE(i1, i14, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderImage25paintAreaElementFocusRingERNS_9PaintInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i8 + 660 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 if (!(__ZNK7WebCore14FrameSelection18isFocusedAndActiveEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i8 = i2 | 0;
 do {
  if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(HEAP32[i8 >> 2] | 0) | 0) {
   if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(HEAP32[i8 >> 2] | 0) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 680 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] & 16 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[(HEAP32[i2 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7areaTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i3;
  return;
 }
 i9 = i2;
 i10 = __ZNK7WebCore15HTMLAreaElement12imageElementEv(i9) | 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
  i11 = HEAP32[i7 >> 2] | 0;
 } else {
  i11 = 0;
 }
 if ((i10 | 0) != (i11 | 0)) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore15HTMLAreaElement11computePathEPNS_12RenderObjectE(i4, i9, i6);
 do {
  if (!(__ZNK7WebCore4Path7isEmptyEv(i4) | 0)) {
   i6 = __ZN7WebCore7Element13computedStyleENS_8PseudoIdE(i2, 0) | 0;
   i9 = HEAP32[i6 + 12 >> 2] | 0;
   i11 = HEAP32[i9 + 64 >> 2] | 0;
   if ((i11 & 2013265920 | 0) == 0) {
    break;
   }
   i10 = i11 >>> 1;
   if ((i10 & 65535) << 16 >> 16 == 0) {
    break;
   }
   i11 = HEAP32[i8 >> 2] | 0;
   i7 = HEAP32[i9 + 68 >> 2] | 0;
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, i6, 105);
   __ZN7WebCore15GraphicsContext13drawFocusRingERKNS_4PathEiiRKNS_5ColorE(i11, i4, i10 & 65535, i7, i5);
  }
 } while (0);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderImage13updateAltTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i5 + 12 >> 2] & 16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames8inputTagE >> 2] | 0) + 12 >> 2] | 0)) {
  __ZNK7WebCore16HTMLInputElement7altTextEv(i3, i5);
  i6 = i3 | 0;
  i3 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i7 = i1 + 100 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i3;
  do {
   if ((i8 | 0) != 0) {
    i3 = i8 | 0;
    i7 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i7 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i3 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i8 = HEAP32[i6 >> 2] | 0;
  if ((i8 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  i6 = i8 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
  if ((i7 | 0) == 0) {
   __ZN3WTF10StringImpl7destroyEPS0_(i8);
   STACKTOP = i2;
   return;
  } else {
   HEAP32[i6 >> 2] = i7;
   STACKTOP = i2;
   return;
  }
 }
 if ((HEAP32[(HEAP32[i5 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore16HTMLImageElement7altTextEv(i4, i5);
 i5 = i4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i7 = i1 + 100 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i4;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i4 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore11RenderImage17imageSizeForErrorEPNS_11CachedImageE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0, i11 = 0, d12 = +0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if (__ZNK7WebCore11CachedImage20willPaintBrokenImageEv(i3) | 0) {
  __ZNK7WebCore11CachedImage11brokenImageEf(i5, i3, +__ZN7WebCore17deviceScaleFactorEPNS_5FrameE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0));
  i8 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 48 >> 2] & 127](i6, i8);
  d9 = +1 / +HEAPF32[i5 + 4 >> 2];
  i10 = ~~(+(HEAP32[i6 >> 2] | 0) * d9);
  i11 = ~~(d9 * +(HEAP32[i6 + 4 >> 2] | 0));
  d12 = +(i10 | 0);
  i13 = i2 + 36 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14 + 24 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16 + 80 | 0;
  d18 = +HEAPF32[i17 >> 2];
  d19 = d12 * d18;
  d20 = d19 + +4;
  i21 = ~~d20;
  d22 = +(i11 | 0);
  d23 = d22 * d18;
  d24 = d23 + +4;
  i25 = ~~d24;
  i26 = i1 | 0;
  HEAP32[i26 >> 2] = i21;
  i27 = i1 + 4 | 0;
  HEAP32[i27 >> 2] = i25;
  STACKTOP = i4;
  return;
 } else {
  i6 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i3, i2 | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 48 >> 2] & 127](i7, i6);
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = HEAP32[i7 + 4 >> 2] | 0;
  d12 = +(i10 | 0);
  i13 = i2 + 36 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14 + 24 | 0;
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = i16 + 80 | 0;
  d18 = +HEAPF32[i17 >> 2];
  d19 = d12 * d18;
  d20 = d19 + +4;
  i21 = ~~d20;
  d22 = +(i11 | 0);
  d23 = d22 * d18;
  d24 = d23 + +4;
  i25 = ~~d24;
  i26 = i1 | 0;
  HEAP32[i26 >> 2] = i21;
  i27 = i1 + 4 | 0;
  HEAP32[i27 >> 2] = i25;
  STACKTOP = i4;
  return;
 }
}
function __ZNK7WebCore11RenderImage32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 __ZNK7WebCore14RenderReplaced32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb(i1 | 0, i2, i3, i4);
 i4 = i2 | 0;
 do {
  if (+HEAPF32[i4 >> 2] > +0) {
   if (+HEAPF32[i2 + 4 >> 2] <= +0) {
    i8 = 4;
    break;
   }
   i9 = i1 + 104 | 0;
  } else {
   i8 = 4;
  }
 } while (0);
 do {
  if ((i8 | 0) == 4) {
   i10 = i1 + 104 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] & 511](i11) | 0)) {
    i11 = HEAP32[i10 >> 2] | 0;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] & 511](i11) | 0)) {
     i9 = i10;
     break;
    }
   }
   i11 = i1 | 0;
   if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 16777216) {
    i12 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i11, 0, 0) | 0;
   } else {
    i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i11) | 0;
   }
   if ((HEAP32[i12 + 20 >> 2] & 512 | 0) == 0) {
    i9 = i10;
    break;
   }
   i11 = i12;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 900 >> 2] & 127](i6, i11);
   HEAPF32[i4 >> 2] = +(HEAP32[i6 >> 2] | 0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 904 >> 2] & 63](i7, i11, 1);
   HEAPF32[i2 + 4 >> 2] = +(HEAP32[i7 >> 2] | 0);
   i9 = i10;
  }
 } while (0);
 i7 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 24 >> 2] & 511](i7) | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAPF64[i3 >> 3] = +1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderImage8imageMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i3 + 12 >> 2] & 16 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames6imgTagE >> 2] | 0) + 12 >> 2] | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 20 >> 2] | 0;
 i4 = HEAP32[i3 + 48 >> 2] | 0;
 L16 : do {
  if ((i4 | 0) == 0) {
   i5 = __ZN3WTF8nullAtomE;
  } else {
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   if ((i3 & 1 | 0) == 0) {
    i6 = i3 >>> 1 & 134217727;
    i7 = i4 + 20 | 0;
   } else {
    i3 = i4 + 24 | 0;
    i6 = HEAP32[i3 + 8 >> 2] | 0;
    i7 = HEAP32[i3 >> 2] | 0;
   }
   if ((i6 | 0) == 0) {
    i5 = __ZN3WTF8nullAtomE;
    break;
   }
   i3 = HEAP32[__ZN7WebCore9HTMLNames10usemapAttrE >> 2] | 0;
   i8 = i3 + 12 | 0;
   i9 = i3 + 16 | 0;
   i10 = 0;
   while (1) {
    i11 = i7 + (i10 << 3) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if ((i12 | 0) == (i3 | 0)) {
     break;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0)) {
     if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
      break;
     }
    }
    i12 = i10 + 1 | 0;
    if (i12 >>> 0 < i6 >>> 0) {
     i10 = i12;
    } else {
     i5 = __ZN3WTF8nullAtomE;
     break L16;
    }
   }
   i5 = (i11 | 0) == 0 ? __ZN3WTF8nullAtomE : i7 + (i10 << 3) + 4 | 0;
  }
 } while (0);
 i2 = __ZNK7WebCore9TreeScope11getImageMapERKN3WTF6StringE(i1, i5 | 0) | 0;
 return i2 | 0;
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
   i6 = 32;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 32) {
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
function __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i2);
  i10 = i2 | 0;
  i11 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 712 >> 2] & 127](i5, i10);
  i12 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 716 >> 2] & 127](i6, i10);
  HEAP32[i1 >> 2] = i12 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i2);
  i6 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i8, i6);
  i2 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 708 >> 2] & 127](i9, i6);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderImage36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i5, 23);
 if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
  i6 = 3;
 } else {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i6 = 3;
  }
 }
 L3 : do {
  if ((i6 | 0) == 3) {
   i3 = (HEAP32[i5 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
     break L3;
    }
    i7 = HEAP32[i3 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i8 = 0;
     break;
    } else {
     i3 = i7;
    }
   }
   STACKTOP = i2;
   return i8 | 0;
  }
 } while (0);
 _memset(i4 | 0, 0, 16) | 0;
 if (!(__ZNK7WebCore9RenderBox26getBackgroundPaintedExtentERNS_10LayoutRectE(i1 | 0, i4) | 0)) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1e3 >> 2] & 15](i1, i4, 0) | 0;
 STACKTOP = i2;
 return i8 | 0;
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
function __ZN7WebCore11RenderImage6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 | 0;
 __ZN7WebCore14RenderReplaced6layoutEv(i6);
 i7 = i1 + 92 | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i4 + 4 >> 2] = i8;
 __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i3, i6, i4);
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i6 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 HEAP32[i5 + 4 >> 2] = i6;
 if ((i4 | 0) < 1 | (i6 | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 104 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 28 >> 2] & 127](i6, i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderImage33needsPreferredWidthsRecalculationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (__ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv(i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i1;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((__ZN7WebCore11CachedImage5imageEv(i3) | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = __ZN7WebCore11CachedImage5imageEv(i3) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 511](i1) | 0)) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (__ZNK7WebCore8SVGImage18embeddedContentBoxEv(__ZN7WebCore11CachedImage5imageEv(i3) | 0) | 0) != 0;
 return i2 | 0;
}
function __ZN7WebCore11RenderImage22updateInnerContentRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 + 92 | 0;
 i7 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i4 + 4 >> 2] = i7;
 __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i3, i1 | 0, i4);
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i7 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i4 | 0) < 1 | (i7 | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i1 + 104 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 28 >> 2] & 127](i7, i5);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderImageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i3);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 }
}
function __ZN7WebCore11RenderImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i3);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 }
 i2 = i3 | 0;
 i5 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 } else {
  HEAP32[i2 >> 2] = i5;
  i4 = i1 | 0;
  __ZN7WebCore14RenderReplacedD2Ev(i4);
  return;
 }
}
function __ZNK7WebCore11RenderImage36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 if (!(__ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2, 0) | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & -1073741824 | 0) == 1073741824) {
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 440 >> 2] & 511](i1 | 0) | 0;
  i1 = HEAP32[i2 >> 2] & 1073741823 | (i5 ? -2147483648 : -1073741824);
  HEAP32[i2 >> 2] = i1;
  i6 = i1;
 } else {
  i6 = i3;
 }
 i4 = (i6 & -1073741824 | 0) != -2147483648;
 return i4 | 0;
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
function __ZN7WebCore11RenderImageC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1 | 0, i2, i5, i6);
 HEAP32[i1 >> 2] = H_BASE + 32;
 _memset(i1 + 100 | 0, 0, 11) | 0;
 __ZN7WebCore11RenderImage13updateAltTextEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderImageC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore14RenderReplacedC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1 | 0, i2, i5, i6);
 HEAP32[i1 >> 2] = H_BASE + 32;
 _memset(i1 + 100 | 0, 0, 11) | 0;
 __ZN7WebCore11RenderImage13updateAltTextEv(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderImage14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14RenderReplaced14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i3 = i1 + 108 | 0;
 if ((HEAP8[i3] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) == 0) {
    break;
   }
   if (!(__ZN7WebCore11RenderImage22setImageSizeForAltTextEPNS_11CachedImageE(i1, HEAP32[(HEAP32[i1 + 104 >> 2] | 0) + 8 >> 2] | 0) | 0)) {
    break;
   }
   __ZN7WebCore11RenderImage22imageDimensionsChangedEbPKNS_7IntRectE(i1, 1, 0);
  }
 } while (0);
 HEAP8[i3] = 0;
 return;
}
function __ZN7WebCore11RenderImageD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i3);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 }
 i3 = HEAP32[i1 + 100 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 | 0;
   i4 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i2 >> 2] = i4;
    break;
   }
  }
 } while (0);
 __ZN7WebCore14RenderReplacedD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderImage27updateIntrinsicSizeIfNeededERKNS_10LayoutSizeEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = i1 + 92 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != (HEAP32[i4 + 4 >> 2] | 0) | i3) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i6 = HEAP32[i1 + 104 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 511](i6) | 0) {
  i5 = i3;
  return i5 | 0;
 }
 i3 = i2;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore11RenderImageC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore14RenderReplacedC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1 | 0, i2, i5, i6);
 HEAP32[i1 >> 2] = H_BASE + 32;
 _memset(i1 + 100 | 0, 0, 11) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderImageC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore14RenderReplacedC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEERKNS_10LayoutSizeE(i1 | 0, i2, i5, i6);
 HEAP32[i1 >> 2] = H_BASE + 32;
 _memset(i1 + 100 | 0, 0, 11) | 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderImage18embeddedContentBoxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((__ZN7WebCore11CachedImage5imageEv(i2) | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = __ZN7WebCore11CachedImage5imageEv(i2) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 511](i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore8SVGImage18embeddedContentBoxEv(__ZN7WebCore11CachedImage5imageEv(i2) | 0) | 0;
 return i3 | 0;
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
function __ZN7WebCore11RenderImage14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if (i5 >>> 0 > 1073741823 >>> 0) {
  HEAP32[i4 >> 2] = i5 & 1073741823 | 1073741824;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) != (i2 | 0)) {
  return;
 }
 __ZN7WebCore20RenderBoxModelObject14contentChangedENS_17ContentChangeTypeE(i1 | 0, 0);
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
function __ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 104 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  i6 = i2;
 } else {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  i6 = HEAP32[i3 >> 2] | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 127](i6, i1 | 0);
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
function viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
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
function iiiiii___ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function __ZN7WebCore11RenderImage5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14RenderReplaced5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2, i3);
 if ((HEAP32[i2 + 20 >> 2] | 0) != 5) {
  return;
 }
 __ZN7WebCore11RenderImage25paintAreaElementFocusRingERNS_9PaintInfoE(i1, i2);
 return;
}
function viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore11RenderImage20intrinsicSizeChangedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 104 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 >> 2] | 0) + 584 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 511](i2) | 0;
 FUNCTION_TABLE_viii[i3 & 63](i1, i4, 0);
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
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function viiiii___ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
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
function __ZNK7WebCore11RenderImage21minimumReplacedHeightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 104 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 511](i3) | 0) {
  HEAP32[i1 >> 2] = HEAP32[i2 + 96 >> 2];
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  return;
 }
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
function viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viiii___ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore12RenderObject22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i2 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  return i2 | 0;
 } else {
  i2 = HEAP32[i1 + 36 >> 2] | 0;
  return i2 | 0;
 }
 return 0;
}
function viii___ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderImage36createStyleInheritingFromPseudoStyleERKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle6createEv(i1);
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i1 >> 2] | 0, i2, 1);
 return;
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
function viii___ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
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
 return FUNCTION_TABLE_iiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function vii___ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore9RenderBox21collapsedMarginBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore15LayoutBoxExtent6beforeENS_11WritingModeE(i1, i2 + 60 | 0, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3);
 return;
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
function viii___ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore14RenderReplaced13intrinsicSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 92 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i1, i2, i3);
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
 FUNCTION_TABLE_viiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi(i1 | 0, i2 | 0) | 0;
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
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function vii___ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv(i1 | 0, i2 | 0);
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
function ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv(i1 | 0) | 0;
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
function __ZN7WebCore11RenderImage23areaElementFocusChangedEPNS_15HTMLAreaElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject7repaintEb(i1 | 0, 0);
 return;
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
function vi___ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv(i1 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
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
function vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject14localTransformEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject22localToParentTransformEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv(i1 | 0) | 0;
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
function __ZNK7WebCore9RenderBox21availableLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2);
 return;
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
function __ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
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
function vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore9RenderBox10offsetLeftEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14firstLineBlockEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMinOffsetEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject14caretMaxOffsetEv(i1 | 0) | 0;
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
function __ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore14RenderReplaced15willBeDestroyedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14RenderReplaced15willBeDestroyedEv(i1 | 0);
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
function __ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function dynCall_viif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viif[i1 & 1](i2 | 0, i3 | 0, +d4);
}
function b4(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(4);
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
function ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox12avoidsFloatsEv(i1 | 0) | 0;
}
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox10scrollLeftEv(i1 | 0) | 0;
}
function __ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function b10(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(10);
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore9RenderBox9marginTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 60 >> 2];
 return;
}
function __ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return -1 | 0;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b12(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(12);
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
function b6(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(6);
 return 0;
}
function b1(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(1);
}
function v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper() {
 __ZN7WebCore9RenderBox15createInlineBoxEv();
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
function __ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
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
function b13(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(13);
}
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv(i1) {
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
function __ZNK7WebCore11RenderImage10renderNameEv(i1) {
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
function __ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function __ZNK7WebCore12RenderObject19virtualContinuationEv(i1) {
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
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function __ZNK7WebCore9RenderBox17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 return -1 | 0;
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
function __ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14RenderReplaced15canHaveChildrenEv(i1) {
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
function __ZNK7WebCore12RenderObject13isFlexibleBoxEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject13isCombineTextEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isRenderGridEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject12isListMarkerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderImage13isRenderImageEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
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
function __ZNK7WebCore12RenderObject7isFrameEv(i1) {
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
function __ZNK7WebCore11RenderImage7isImageEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b9(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(9);
}
function __ZNK7WebCore12RenderObject5isWBREv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 3]();
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
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b0,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b0,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b0,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b0,__ZNK7WebCore12RenderObject10isRubyTextEv,b0,__ZNK7WebCore12RenderObject6isRubyEv,b0,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b0,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b0,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b0,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b0,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b0,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b0,__ZNK7WebCore12RenderObject14isTableCaptionEv,b0,__ZNK7WebCore12RenderObject8isWidgetEv
  ,b0,__ZNK7WebCore12RenderObject11isTextFieldEv,b0,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b0,__ZNK7WebCore13RenderElement13lastChildSlowEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b0,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b0,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b0,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b0,__ZNK7WebCore12RenderObject9isSVGRootEv,b0,__ZNK7WebCore12RenderObject7isFrameEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b0,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b0,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b0,__ZNK7WebCore12RenderObject7isMeterEv,b0,__ZNK7WebCore12RenderObject14isSVGContainerEv,b0,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv
  ,b0,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b0,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b0,__ZNK7WebCore12RenderObject7isQuoteEv,b0,__ZNK7WebCore12RenderObject10isListItemEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b0,__ZNK7WebCore12RenderObject10isSVGImageEv,b0,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b0,__ZNK7WebCore14RenderReplaced15canHaveChildrenEv,b0,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b0,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b0,__ZNK7WebCore12RenderObject16isRenderTableColEv,b0,__ZNK7WebCore12RenderObject7isVideoEv,b0,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b0,__ZNK7WebCore12RenderObject13isCombineTextEv,b0,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv
  ,b0,__ZNK7WebCore12RenderObject5isWBREv,b0,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b0,__ZNK7WebCore13RenderElement14firstChildSlowEv,b0,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject10isTextAreaEv,b0,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b0,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b0,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b0,__ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv,b0,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b0,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b0,__ZNK7WebCore12RenderObject9isReplicaEv,b0,__ZNK7WebCore9RenderBox14hasControlClipEv,b0,__ZNK7WebCore12RenderObject7isMediaEv,b0,__ZNK7WebCore12RenderObject10isSVGShapeEv
  ,b0,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b0,__ZNK7WebCore11RenderImage7isImageEv,b0,__ZNK7WebCore12RenderObject8isSliderEv,b0,__ZNK7WebCore12RenderObject10isRubyBaseEv,b0,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b0,__ZNK7WebCore12RenderObject8isCanvasEv,b0,__ZNK7WebCore12RenderObject11isSVGInlineEv,b0,__ZNK7WebCore12RenderObject10isMenuListEv,b0,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b0,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper,b0,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b0,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b0,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b0,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b0,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper
  ,b0,__ZNK7WebCore12RenderObject13isSliderThumbEv,b0,__ZNK7WebCore9RenderBox17firstLineBaselineEv,b0,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b0,__ZNK7WebCore12RenderObject13isTextControlEv,b0,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b0,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b0,__ZNK7WebCore12RenderObject9isSVGTextEv,b0,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b0,__ZNK7WebCore12RenderObject10isProgressEv,b0,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b0,__ZNK7WebCore11RenderImage33needsPreferredWidthsRecalculationEv,b0,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b0,__ZNK7WebCore12RenderObject11isTableCellEv,b0,__ZNK7WebCore12RenderObject12isRenderGridEv,b0,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv
  ,b0,__ZNK7WebCore12RenderObject9isListBoxEv,b0,__ZNK7WebCore12RenderObject9isSVGPathEv,b0,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b0,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b0,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b0,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b0,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b0,__ZNK7WebCore12RenderObject14isRenderButtonEv,b0,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b0,__ZNK7WebCore12RenderObject6lengthEv,b0,__ZNK7WebCore12RenderObject10isTableRowEv,b0,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b0,__ZNK7WebCore12RenderObject10isFrameSetEv,b0,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b0,__ZNK7WebCore11RenderImage18embeddedContentBoxEv
  ,b0,__ZNK7WebCore9RenderBox13requiresLayerEv,b0,__ZNK7WebCore12RenderObject10isFieldsetEv,b0,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b0,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b0,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b0,__ZNK7WebCore12RenderObject9isRubyRunEv,b0,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b0,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b0,ii___ZNK7WebCore9RenderBox12avoidsFloatsEv__wrapper,b0,__ZNK7WebCore12RenderObject14isRenderRegionEv,b0,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b0,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b0,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b0,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b0,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv
  ,b0,__ZN7WebCore11RenderImage36computeBackgroundIsKnownToBeObscuredEv,b0,__ZNK7WebCore12RenderObject9isCounterEv,b0,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b0,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b0,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b0,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b0,__ZNK7WebCore12RenderObject7isEmptyEv,b0,__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv,b0,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b0,__ZNK7WebCore12RenderObject12isListMarkerEv,b0,__ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv,b0,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b0,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b0,__ZNK7WebCore12RenderObject7isTableEv,b0,__ZNK7WebCore11RenderImage13isRenderImageEv
  ,b0,__ZNK7WebCore11RenderImage10renderNameEv,b0,__ZNK7WebCore12RenderObject14isTableSectionEv,b0,__ZNK7WebCore12RenderObject19virtualContinuationEv,b0,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiii = [b1,b1,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b1,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b1,viiiii___ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b1,viiiii___ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b1,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,__ZN7WebCore11RenderImage6layoutEv,b2,__ZN7WebCore11RenderImage20intrinsicSizeChangedEv,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b2,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b2,__ZN7WebCore11RenderImageD0Ev,b2,vi___ZN7WebCore14RenderReplaced15willBeDestroyedEv__wrapper,b2,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b2,vi___ZN7WebCore14RenderReplaced29computePreferredLogicalWidthsEv__wrapper,b2,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper,b2,__ZN7WebCore11RenderImageD2Ev
  ,b2,__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv,b2,__ZN7WebCore9RenderBox14stopAutoscrollEv,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore9RenderBox11marginRightEv,b3,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b3,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b3,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b3,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b3,vii___ZNK7WebCore9RenderBox31offsetFromLogicalTopOfFirstPageEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b3,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b3,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b3,__ZNK7WebCore14RenderReplaced13intrinsicSizeEv,b3,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv
  ,b3,__ZNK7WebCore9RenderBox9marginTopEv,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,vii___ZNK7WebCore14RenderReplaced28computeReplacedLogicalHeightEv__wrapper,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b3,__ZN7WebCore11RenderImage14notifyFinishedEPNS_14CachedResourceE,b3,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b3,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b3,__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE,b3,__ZNK7WebCore9RenderBox21availableLogicalWidthEv
  ,b3,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,vii___ZN7WebCore14RenderReplaced17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b3,__ZNK7WebCore9RenderBox11offsetWidthEv,b3,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b3,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b3,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b3,__ZNK7WebCore9RenderBox18visualOverflowRectEv,b3,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b3,__ZNK7WebCore11RenderImage21minimumReplacedHeightEv,b3,__ZNK7WebCore9RenderBox12marginBottomEv,b3,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv
  ,b3,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b3,__ZNK7WebCore9RenderBox10marginLeftEv,b3,__ZNK7WebCore9RenderBox12offsetHeightEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,__ZN7WebCore11RenderImage11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b5,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b5,__ZNK7WebCore11RenderImage33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj,b5,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b5,__ZNK7WebCore11RenderImage36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iiiifi = [b6,b6,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b6,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b7,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b7,__ZN7WebCore11RenderImage14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b7,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b7,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b7,viii___ZNK7WebCore9RenderBox13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb__wrapper,b7,__ZN7WebCore11RenderImage12imageChangedEPKvPKNS_7IntRectE,b7,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b7,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b7,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b7,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b7,__ZN7WebCore11RenderImage5paintERNS_9PaintInfoERKNS_11LayoutPointE,b7,viii___ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b7,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE
  ,b7,__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b7,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b7,viii___ZNK7WebCore14RenderReplaced29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b7,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b7,viii___ZNK7WebCore14RenderReplaced27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b7,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b7,viii___ZNK7WebCore9RenderBox13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE__wrapper,b7,__ZN7WebCore11RenderImageC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE,b7,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b7,__ZN7WebCore11RenderImageC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE,b7,viii___ZNK7WebCore14RenderReplaced29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2___wrapper,b7,__ZN7WebCore11RenderImage13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE,b7,viii___ZN7WebCore14RenderReplaced16positionForPointERKNS_11LayoutPointE__wrapper,b7,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b7,b7
  ,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b8];
  var FUNCTION_TABLE_viif = [b9,b9];
  var FUNCTION_TABLE_viiiiii = [b10,b10,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b10];
  var FUNCTION_TABLE_iii = [b11,b11,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b11,__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE,b11,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b11,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b11,__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b11,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b11,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b11];
  var FUNCTION_TABLE_iiiiii = [b12,b12,iiiiii___ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE__wrapper,b12,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b12,b12,b12];
  var FUNCTION_TABLE_viiii = [b13,b13,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b13,viiii___ZN7WebCore9RenderBox17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE__wrapper,b13,__ZNK7WebCore11RenderImage32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b13,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b13,viiii___ZN7WebCore14RenderReplaced23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb__wrapper,b13,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b13,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b13,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13,b13
  ,b13,b13,b13];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_iiii: dynCall_iiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viif: dynCall_viif, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_iiii": invoke_iiii, "invoke_iiiifi": invoke_iiiifi, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viif": invoke_viif, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames6imgTagE": __ZN7WebCore9HTMLNames6imgTagE, "__ZN7WebCore9HTMLNames8inputTagE": __ZN7WebCore9HTMLNames8inputTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore9HTMLNames7areaTagE": __ZN7WebCore9HTMLNames7areaTagE, "__ZN7WebCore9HTMLNames10usemapAttrE": __ZN7WebCore9HTMLNames10usemapAttrE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viif = Module["dynCall_viif"] = asm["dynCall_viif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore9RenderBox11marginRightEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore11RenderImage32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZN7WebCore11RenderImage14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZN7WebCore11RenderImage6layoutEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore11RenderImage20intrinsicSizeChangedEv","__ZN7WebCore11RenderImage16setImageResourceEN3WTF10PassOwnPtrINS_19RenderImageResourceEEE","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore11RenderImage36createStyleInheritingFromPseudoStyleERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZN7WebCore11RenderImageD0Ev","__ZNK7WebCore14RenderReplaced15canHaveChildrenEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZN7WebCore11RenderImage13paintIntoRectEPNS_15GraphicsContextERKNS_10LayoutRectE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore14RenderReplaced13intrinsicSizeEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore11RenderImage22imageDimensionsChangedEbPKNS_7IntRectE","__ZNK7WebCore9RenderBox19inlineBlockBaselineENS_17LineDirectionModeE","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore9RenderBox9marginTopEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore11RenderImage18embeddedContentBoxEv","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore14RenderReplaced18canBeSelectionLeafEv","__ZN7WebCore11RenderImage12imageChangedEPKvPKNS_7IntRectE","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZN7WebCore11RenderImage14notifyFinishedEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject9isReplicaEv","__ZN7WebCore11RenderImage5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZNK7WebCore11RenderImage33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZNK7WebCore12RenderObject7isMediaEv","__ZN7WebCore11RenderImage11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZN7WebCore11RenderImage22updateInnerContentRectEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZN7WebCore11RenderImage22setImageSizeForAltTextEPNS_11CachedImageE","__ZNK7WebCore9RenderBox19contentLogicalWidthEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZNK7WebCore9RenderBox17firstLineBaselineEv","__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore11RenderImage8imageMapEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore9RenderBox21availableLogicalWidthEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore11RenderImage33needsPreferredWidthsRecalculationEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","_memset","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore14RenderReplaced32hasRelativeIntrinsicLogicalWidthEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZNK7WebCore11RenderImage36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE","__ZN7WebCore9RenderBox11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZNK7WebCore11RenderImage21minimumReplacedHeightEv","__ZN7WebCore11RenderImageD2Ev","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore9RenderBox21isSelfCollapsingBlockEv","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZNK7WebCore9RenderBox32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore11RenderImage7isImageEv","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore11RenderImage10renderNameEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZN7WebCore11RenderImage25paintAreaElementFocusRingERNS_9PaintInfoE","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore11RenderImageC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZN7WebCore11RenderImage23areaElementFocusChangedEPNS_15HTMLAreaElementE","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore11RenderImage27updateIntrinsicSizeIfNeededERKNS_10LayoutSizeEb","__ZN7WebCore11RenderImage13updateAltTextEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore11RenderImageC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore11RenderImage13paintReplacedERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderImage36computeBackgroundIsKnownToBeObscuredEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore9RenderBox33markForPaginationRelayoutIfNeededEv","__ZNK7WebCore11RenderImage17imageSizeForErrorEPNS_11CachedImageE","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","_memcpy","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZNK7WebCore11RenderImage13isRenderImageEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE"]

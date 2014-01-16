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
H_BASE = parentModule["_malloc"](888 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 888;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore20RenderBoxModelObjectD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiii(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiii"](index,a1,a2,a3,a4);
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
function invoke_iiiiii(index,a1,a2,a3,a4,a5) {
  try {
    return Module["dynCall_iiiiii"](index,a1,a2,a3,a4,a5);
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
function invoke_viiif(index,a1,a2,a3,a4) {
  try {
    Module["dynCall_viiif"](index,a1,a2,a3,a4);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiif(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiif"](index,a1,a2,a3);
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
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN7WebCore9HTMLNames11framesetTagE=env.__ZN7WebCore9HTMLNames11framesetTagE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore20RenderBoxModelObjectE=(H_BASE+40)|0;
  var __ZTVN7WebCore33StickyPositionViewportConstraintsE=(H_BASE+8)|0;
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
  var invoke_viiii=env.invoke_viiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_fi=env.invoke_fi;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiif=env.invoke_viiif;
  var invoke_iiif=env.invoke_iiif;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _fabsf=env._fabsf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _ceil=env._ceil;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, d94 = +0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, d99 = +0, d100 = +0, d101 = +0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i12 = i11 | 0;
 i13 = i11 + 48 | 0;
 i14 = i11 + 64 | 0;
 i15 = i11 + 72 | 0;
 i16 = i11 + 80 | 0;
 i17 = i16;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i23 = i22 | 0;
 i24 = i22;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i37 = i36 | 0;
 i38 = i36;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = i39;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i48 = i47 | 0;
 i49 = i47;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = i52;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 52 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i64 = i63;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i66 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i67 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i68 = i67;
 i69 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i70 = i69;
 i71 = HEAP32[i2 >> 2] | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i71) | 0) {
  STACKTOP = i11;
  return;
 }
 if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
  STACKTOP = i11;
  return;
 }
 if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
  STACKTOP = i11;
  return;
 }
 i72 = (i7 | 0) == 0;
 if (i72) {
  i73 = 1;
  i74 = 1;
 } else {
  i75 = HEAP32[i7 + 56 >> 2] | 0;
  i73 = (i75 & 2 | 0) != 0;
  i74 = (i75 & 1 | 0) != 0;
 }
 i75 = i1 | 0;
 i76 = i1 + 36 | 0;
 i77 = HEAP32[i76 >> 2] | 0;
 i78 = HEAP32[i77 + 16 >> 2] | 0;
 i79 = i78 + 136 | 0;
 do {
  if ((HEAP8[i78 + 141 | 0] | 0) == 10) {
   i80 = 22;
  } else {
   if ((HEAP8[i78 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i79 >> 2] | 0) != 0) {
     i80 = 22;
     break;
    }
   } else {
    if (+HEAPF32[i79 >> 2] != +0) {
     i80 = 22;
     break;
    }
   }
   i81 = i78 + 152 | 0;
   if ((HEAP8[i78 + 157 | 0] | 0) == 10) {
    i80 = 22;
    break;
   }
   if ((HEAP8[i78 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i81 >> 2] | 0) != 0) {
     i80 = 22;
     break;
    }
   } else {
    if (+HEAPF32[i81 >> 2] != +0) {
     i80 = 22;
     break;
    }
   }
   i81 = i78 + 168 | 0;
   if ((HEAP8[i78 + 173 | 0] | 0) == 10) {
    i80 = 22;
    break;
   }
   if ((HEAP8[i78 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i81 >> 2] | 0) != 0) {
     i80 = 22;
     break;
    }
   } else {
    if (+HEAPF32[i81 >> 2] != +0) {
     i80 = 22;
     break;
    }
   }
   i81 = i78 + 184 | 0;
   if ((HEAP8[i78 + 189 | 0] | 0) == 10) {
    i80 = 22;
    break;
   }
   if ((HEAP8[i78 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i81 >> 2] | 0) == 0) {
     i82 = 0;
     break;
    } else {
     i80 = 22;
     break;
    }
   } else {
    if (+HEAPF32[i81 >> 2] != +0) {
     i80 = 22;
     break;
    } else {
     i82 = 0;
     break;
    }
   }
  }
 } while (0);
 if ((i80 | 0) == 22) {
  i82 = i74 | i73;
 }
 i78 = HEAP32[i4 + 40 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i83 = 0;
 } else {
  i83 = (i78 & 3 | 0) == 1;
 }
 i79 = i4 + 40 | 0;
 i81 = (i78 & 12 | 0) == 0;
 i78 = i1 + 4 | 0;
 i84 = HEAP32[i78 >> 2] | 0;
 i85 = (HEAP32[(HEAP32[(HEAP32[i84 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i84 | 0);
 i86 = i16;
 i87 = i3;
 i3 = HEAP32[i87 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i87 >> 2];
 HEAP32[i16 + 4 >> 2] = i3;
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i88 = 0;
  i89 = i84;
 } else {
  i84 = FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 1](i3, i1 | 0, +HEAPF32[(HEAP32[i77 + 24 >> 2] | 0) + 80 >> 2]) | 0;
  i88 = i84;
  i89 = HEAP32[i78 >> 2] | 0;
 }
 i84 = HEAP32[(HEAP32[i89 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i84 + 660 | 0] & 1) == 0) {
   i90 = i88;
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i84 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 190 | 0] & 1) != 0 | (HEAP32[(HEAP32[i76 >> 2] | 0) + 44 >> 2] & 64 | 0) != 0) {
    i90 = i88;
    break;
   }
   do {
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     if ((HEAP8[i17 + 4 | 0] & 1) == 0) {
      i91 = 0;
      break;
     }
     i91 = (HEAP32[i16 >> 2] | 0) >>> 0 > 16777215 >>> 0;
    } else {
     i91 = 0;
    }
   } while (0);
   if (!(i88 | i91)) {
    i90 = 0;
    break;
   }
   HEAP32[i16 >> 2] = -1;
   HEAP8[i86 + 4 | 0] = 1;
   i90 = 0;
  }
 } while (0);
 i86 = i17 + 4 | 0;
 if ((HEAP8[i86] & 1) == 0) {
  i92 = 0;
 } else {
  i92 = (HEAP32[i16 >> 2] | 0) >>> 0 > 16777215 >>> 0;
 }
 i91 = i81 ^ 1;
 do {
  if (!(i85 | i83 | i90 | i91)) {
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    break;
   }
   if (!i92) {
    STACKTOP = i11;
    return;
   }
   i88 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 808 >> 2] & 15](i1, i6, i7) | 0;
   do {
    if (i88) {
     __ZN7WebCore15GraphicsContext4saveEv(i71);
     i84 = HEAP32[i76 >> 2] | 0;
     i89 = (HEAP32[i84 + 20 >> 2] | 0) + 100 | 0;
     while (1) {
      i93 = HEAP32[i89 >> 2] | 0;
      if ((HEAP32[i93 + 24 >> 2] | 0) == 0) {
       break;
      } else {
       i89 = i93 + 32 | 0;
      }
     }
     d94 = +(HEAP32[i93 + 4 >> 2] | 0);
     HEAPF32[i14 >> 2] = +(HEAP32[i93 >> 2] | 0);
     HEAPF32[i14 + 4 >> 2] = d94;
     d94 = +(HEAP32[i93 + 8 >> 2] | 0);
     i89 = i93 + 16 | 0;
     i77 = (HEAP32[(HEAP32[i84 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
     if ((HEAP8[i93 + 28 | 0] & 1) == 0) {
      __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i71, i14, d94, i89, i77);
      break;
     } else {
      __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i71, i14, d94, i89, i77);
      break;
     }
    }
   } while (0);
   do {
    if ((i6 | 0) == 2 | i82 ^ 1) {
     __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i21, i5);
     __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i20, i21);
     __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i71, i20, i17, (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
    } else {
     __ZNK7WebCore20RenderBoxModelObject46backgroundRoundedRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeEbb(i18, i1, i71, i5, i6, i7, i8, i74, i73);
     if (__ZNK7WebCore11RoundedRect12isRenderableEv(i18) | 0) {
      __ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceENS_9BlendModeE(i71, i18, i17, (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, 0);
      break;
     } else {
      __ZN7WebCore15GraphicsContext4saveEv(i71);
      __ZN7WebCore20RenderBoxModelObject20clipRoundedInnerRectEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_11RoundedRectE(i71, i5, i18);
      __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i19, i18 | 0);
      __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i71, i19, i17, (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
      __ZN7WebCore15GraphicsContext7restoreEv(i71);
      break;
     }
    }
   } while (0);
   if (!i88) {
    STACKTOP = i11;
    return;
   }
   __ZN7WebCore15GraphicsContext7restoreEv(i71);
   STACKTOP = i11;
   return;
  }
 } while (0);
 do {
  if (i82) {
   i19 = (i6 | 0) != 2 | i91;
   i18 = i19 & 1;
   if (!i19) {
    i95 = i18;
    i96 = 0;
    break;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i71);
   do {
    if (i81) {
     __ZNK7WebCore20RenderBoxModelObject46backgroundRoundedRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeEbb(i24, i1, i71, i5, i6, i7, i8, i74, i73);
    } else {
     i19 = HEAP32[i8 >> 2] | 0;
     i20 = HEAP32[i8 + 4 >> 2] | 0;
     __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i24, HEAP32[i76 >> 2] | 0, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i74, i73);
     if (i72) {
      break;
     }
     if ((HEAP32[i7 + 52 >> 2] | 0) == 0) {
      if ((HEAP32[i7 + 48 >> 2] | 0) == 0) {
       break;
      }
     }
     i21 = HEAP32[i76 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i13 + 4 >> 2] = 0;
     HEAP32[i13 + 8 >> 2] = i19;
     HEAP32[i13 + 12 >> 2] = i20;
     __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i12, i21, i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i74, i73);
     _memcpy(i22 + 16 | 0, i12 + 16 | 0, 32) | 0;
    }
   } while (0);
   i88 = (HEAP32[i79 >> 2] | 0) >>> 2 & 3;
   if ((i88 | 0) == 2) {
    i21 = HEAP32[i76 >> 2] | 0;
    i20 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i26 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i26 + 4 >> 2] = i20;
    i20 = i22 + 8 | 0;
    i19 = HEAP32[i20 + 4 >> 2] | 0;
    HEAP32[i26 + 8 >> 2] = HEAP32[i20 >> 2];
    HEAP32[i26 + 12 >> 2] = i19;
    i19 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 63](i27, i1);
    i20 = i1;
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 736 >> 2] & 255](i1) | 0;
    i93 = (HEAP32[i27 >> 2] | 0) + i14 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 63](i28, i1);
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 740 >> 2] & 255](i1) | 0;
    i92 = (HEAP32[i28 >> 2] | 0) + i14 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 63](i29, i1);
    i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 744 >> 2] & 255](i1) | 0;
    i77 = (HEAP32[i29 >> 2] | 0) + i14 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 63](i30, i1);
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 748 >> 2] & 255](i1) | 0;
    __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i25, i21, i26, i93, i92, i77, (HEAP32[i30 >> 2] | 0) + i19 | 0, i74, i73);
    _memcpy(i22 | 0, i25 | 0, 48) | 0;
   } else if ((i88 | 0) == 1) {
    i88 = HEAP32[i76 >> 2] | 0;
    i19 = HEAP32[i23 + 4 >> 2] | 0;
    HEAP32[i32 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i32 + 4 >> 2] = i19;
    i19 = i22 + 8 | 0;
    i77 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i32 + 8 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i32 + 12 >> 2] = i77;
    __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i31, i88, i32, i74, i73);
    _memcpy(i22 | 0, i31 | 0, 48) | 0;
   }
   __ZN7WebCore20RenderBoxModelObject20clipRoundedInnerRectEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_11RoundedRectE(i71, i5, i24);
   i95 = i18;
   i96 = 1;
  } else {
   i95 = 0;
   i96 = 0;
  }
 } while (0);
 if (i74) {
  i97 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 255](i1) | 0;
 } else {
  i97 = 0;
 }
 if (i73) {
  i98 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 748 >> 2] & 255](i1) | 0;
 } else {
  i98 = 0;
 }
 if (i74) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 63](i33, i1);
 } else {
  HEAP32[i33 >> 2] = 0;
 }
 if (i73) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 716 >> 2] & 63](i34, i1);
 } else {
  HEAP32[i34 >> 2] = 0;
 }
 if (i83) {
  __ZN7WebCore15GraphicsContext4saveEv(i71);
  i73 = i35;
  i74 = i5;
  HEAP32[i73 >> 2] = HEAP32[i74 >> 2];
  HEAP32[i73 + 4 >> 2] = HEAP32[i74 + 4 >> 2];
  HEAP32[i73 + 8 >> 2] = HEAP32[i74 + 8 >> 2];
  HEAP32[i73 + 12 >> 2] = HEAP32[i74 + 12 >> 2];
  i74 = i1;
  i73 = HEAP32[(HEAP32[i1 >> 2] | 0) + 936 >> 2] | 0;
  i24 = i5;
  i31 = HEAP32[i24 + 4 >> 2] | 0;
  HEAP32[i39 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i39 + 4 >> 2] = i31;
  FUNCTION_TABLE_viiiiii[i73 & 1](i41, i74, i40, HEAP32[i2 + 32 >> 2] | 0, 0, 0);
  d94 = +(HEAP32[i41 + 8 >> 2] | 0);
  d99 = +(HEAP32[i41 + 12 >> 2] | 0);
  d100 = +(+(HEAP32[i41 >> 2] | 0));
  d101 = +(+(HEAP32[i41 + 4 >> 2] | 0));
  HEAPF32[i37 >> 2] = d100;
  HEAPF32[i37 + 4 >> 2] = d101;
  i37 = i36 + 8 | 0;
  d101 = +d94;
  d94 = +d99;
  HEAPF32[i37 >> 2] = d101;
  HEAPF32[i37 + 4 >> 2] = d94;
  __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i71, i38);
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i42, i74);
  i74 = HEAP32[i42 + 4 >> 2] | 0;
  i38 = i35 | 0;
  HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) - (HEAP32[i42 >> 2] | 0);
  i42 = i35 + 4 | 0;
  HEAP32[i42 >> 2] = (HEAP32[i42 >> 2] | 0) - i74;
  i74 = i1 + 40 | 0;
  HEAP32[i35 + 8 >> 2] = i98 + i97 + (__ZNK7WebCore11RenderLayer11scrollWidthEv(HEAP32[i74 >> 2] | 0) | 0);
  i42 = i1;
  i38 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 736 >> 2] & 255](i1) | 0;
  i37 = (__ZNK7WebCore11RenderLayer12scrollHeightEv(HEAP32[i74 >> 2] | 0) | 0) + i38 | 0;
  HEAP32[i35 + 12 >> 2] = i37 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i42 >> 2] | 0) + 740 >> 2] & 255](i1) | 0);
 } else {
  i42 = i35;
  i37 = i5;
  HEAP32[i42 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i42 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i42 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i42 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
 }
 i37 = i43;
 _memset(i37 | 0, 0, 16) | 0;
 i42 = HEAP32[i79 >> 2] | 0;
 i38 = i42 >>> 2 & 3;
 do {
  if ((i38 | 0) == 1 | (i38 | 0) == 2) {
   if (i96) {
    i102 = 0;
    i103 = 0;
    i80 = 89;
    break;
   }
   i74 = (i42 & 12 | 0) == 8;
   if (i74) {
    i104 = HEAP32[i33 >> 2] | 0;
   } else {
    i104 = 0;
   }
   i36 = (HEAP32[i35 >> 2] | 0) + i97 + i104 | 0;
   i41 = HEAP32[i35 + 4 >> 2] | 0;
   i40 = i1;
   i73 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 736 >> 2] & 255](i1) | 0;
   if (i74) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 63](i44, i1);
    i105 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i33 >> 2] | 0) | 0;
    i106 = i73 + i41 + (HEAP32[i44 >> 2] | 0) | 0;
    i107 = HEAP32[i35 + 8 >> 2] | 0;
   } else {
    HEAP32[i44 >> 2] = 0;
    i105 = 0;
    i106 = i73 + i41 | 0;
    i107 = HEAP32[i35 + 8 >> 2] | 0;
   }
   i41 = HEAP32[i35 + 12 >> 2] | 0;
   i73 = i41 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 736 >> 2] & 255](i1) | 0) | 0;
   i41 = i73 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i40 >> 2] | 0) + 740 >> 2] & 255](i1) | 0) | 0;
   if (i74) {
    i74 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 704 >> 2] & 63](i45, i1);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i74 >> 2] | 0) + 708 >> 2] & 63](i46, i1);
    i108 = (HEAP32[i46 >> 2] | 0) + (HEAP32[i45 >> 2] | 0) | 0;
   } else {
    i108 = 0;
   }
   __ZN7WebCore15GraphicsContext4saveEv(i71);
   d94 = +(+(i36 | 0));
   d101 = +(+(i106 | 0));
   HEAPF32[i48 >> 2] = d94;
   HEAPF32[i48 + 4 >> 2] = d101;
   i36 = i47 + 8 | 0;
   d101 = +(+(i107 - (i98 + i97) - i105 | 0));
   d94 = +(+(i41 - i108 | 0));
   HEAPF32[i36 >> 2] = d101;
   HEAPF32[i36 + 4 >> 2] = d94;
   __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i71, i49);
   i102 = 0;
   i103 = 1;
   i80 = 89;
  } else if ((i38 | 0) == 3) {
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i50, i5);
   i36 = i50;
   HEAP32[i37 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i37 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
   HEAP32[i37 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
   HEAP32[i37 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
   __ZN7WebCore7IntRect9intersectERKS0_(i43, i2 + 4 | 0);
   i36 = i43 + 8 | 0;
   i41 = HEAP32[i36 + 4 >> 2] | 0;
   HEAP32[i52 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i52 + 4 >> 2] = i41;
   __ZNK7WebCore15GraphicsContext22createCompatibleBufferERKNS_7IntSizeEb(i51, i71, i53, 1);
   i41 = i51 | 0;
   i36 = HEAP32[i41 >> 2] | 0;
   HEAP32[i41 >> 2] = 0;
   if ((i36 | 0) == 0) {
    break;
   }
   __ZN7WebCore20RenderBoxModelObject23paintMaskForTextFillBoxEPNS_11ImageBufferERKNS_7IntRectEPNS_13InlineFlowBoxERKNS_10LayoutRectEPNS_12RenderRegionE(i1, i36, i43, i7, i35, HEAP32[i2 + 32 >> 2] | 0);
   __ZN7WebCore15GraphicsContext4saveEv(i71);
   __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i71, i43);
   __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i71, +1);
   i102 = i36;
   i103 = 1;
   i80 = 89;
  } else {
   i102 = 0;
   i103 = 0;
   i80 = 89;
  }
 } while (0);
 do {
  if ((i80 | 0) == 89) {
   i51 = i4 | 0;
   if (i85) {
    do {
     if ((HEAP32[i51 >> 2] | 0) == 0) {
      if ((HEAP8[i86] & 1) != 0) {
       if ((HEAP32[i16 >> 2] & -16777216 | 0) == -16777216) {
        i109 = 1;
        break;
       }
      }
      i53 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
      if ((i53 | 0) == 0) {
       i109 = (__ZNK7WebCore9FrameView13isTransparentEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0) & 1 ^ 1;
       break;
      }
      i52 = HEAP32[i53 + 44 >> 2] | 0;
      i53 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
      if ((i52 | 0) == (i53 | 0)) {
       i109 = 1;
       break;
      }
      if ((HEAP32[i52 + 12 >> 2] | 0) == (HEAP32[i53 + 12 >> 2] | 0)) {
       if ((HEAP32[i52 + 16 >> 2] | 0) == (HEAP32[i53 + 16 >> 2] | 0)) {
        i109 = 1;
        break;
       }
      }
      i53 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
      if ((i53 | 0) == 0) {
       i109 = (__ZNK7WebCore8Document14hasSVGRootNodeEv(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) & 1 ^ 1;
       break;
      } else {
       i109 = (HEAP32[(HEAP32[i53 + 44 >> 2] | 0) + 12 >> 2] | 0) == (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames11framesetTagE >> 2] | 0) + 12 >> 2] | 0) | 0;
       break;
      }
     } else {
      i109 = 1;
     }
    } while (0);
    __ZN7WebCore9FrameView18setContentIsOpaqueEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, (i109 & 1) != 0);
    i110 = i109 << 24 >> 24 != 0;
   } else {
    i110 = 0;
   }
   L151 : do {
    if ((HEAP32[i51 >> 2] | 0) == 0) {
     __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i54, i35);
     i18 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 808 >> 2] & 15](i1, i6, i7) | 0;
     do {
      if (!(i18 | i90 ^ 1)) {
       if (!(__ZNK7WebCore9FillLayer14hasOpaqueImageEPKNS_13RenderElementE(i4, i75) | 0)) {
        break;
       }
       if (__ZNK7WebCore9FillLayer11hasRepeatXYEv(i4) | 0) {
        break L151;
       }
      }
     } while (0);
     if (!i18) {
      __ZN7WebCore7IntRect9intersectERKS0_(i54, i2 + 4 | 0);
     }
     i84 = i55 | 0;
     HEAP32[i84 >> 2] = 0;
     HEAP8[i55 + 4 | 0] = 0;
     if (i110) {
      __ZNK7WebCore9FrameView19baseBackgroundColorEv(i56, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0);
      i53 = i55;
      i52 = i56;
      HEAP32[i53 >> 2] = HEAP32[i52 >> 2];
      HEAP8[i53 + 4 | 0] = HEAP8[i52 + 4 | 0] | 0;
      i111 = (HEAP32[i84 >> 2] | 0) >>> 0 < 16777216 >>> 0;
     } else {
      i111 = 0;
     }
     do {
      if (i18) {
       __ZN7WebCore15GraphicsContext4saveEv(i71);
       i52 = HEAP32[i76 >> 2] | 0;
       i53 = (HEAP32[i52 + 20 >> 2] | 0) + 100 | 0;
       while (1) {
        i112 = HEAP32[i53 >> 2] | 0;
        if ((HEAP32[i112 + 24 >> 2] | 0) == 0) {
         break;
        } else {
         i53 = i112 + 32 | 0;
        }
       }
       d94 = +(HEAP32[i112 + 4 >> 2] | 0);
       HEAPF32[i15 >> 2] = +(HEAP32[i112 >> 2] | 0);
       HEAPF32[i15 + 4 >> 2] = d94;
       d94 = +(HEAP32[i112 + 8 >> 2] | 0);
       i53 = i112 + 16 | 0;
       i37 = (HEAP32[(HEAP32[i52 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
       if ((HEAP8[i112 + 28 | 0] & 1) == 0) {
        __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i71, i15, d94, i53, i37);
        break;
       } else {
        __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i71, i15, d94, i53, i37);
        break;
       }
      }
     } while (0);
     i37 = (HEAP32[i16 >> 2] | 0) >>> 0 > 16777215 >>> 0;
     do {
      if ((HEAP32[i84 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
       if (!i37) {
        if (!i111) {
         break;
        }
        __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i60, i54);
        __ZN7WebCore15GraphicsContext9clearRectERKNS_9FloatRectE(i71, i60);
        break;
       }
       if (i111) {
        i113 = 1;
       } else {
        i113 = __ZNK7WebCore15GraphicsContext18compositeOperationEv(i71) | 0;
       }
       __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i59, i54);
       __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i71, i59, i17, (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, i113, 0);
      } else {
       if (i37) {
        __ZNK7WebCore5Color5blendERKS0_(i57, i55, i17);
        i53 = i55;
        i50 = i57;
        HEAP32[i53 >> 2] = HEAP32[i50 >> 2];
        HEAP8[i53 + 4 | 0] = HEAP8[i50 + 4 | 0] | 0;
       }
       __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i58, i54);
       __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i71, i58, i55, (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, 1, 0);
      }
     } while (0);
     if (!i18) {
      break;
     }
     __ZN7WebCore15GraphicsContext7restoreEv(i71);
    }
   } while (0);
   do {
    if (i90) {
     i51 = i61;
     _memset(i51 | 0, 0, 49) | 0;
     __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i1, HEAP32[i2 + 44 >> 2] | 0, i4, i35, i61, i10);
     __ZN7WebCore7IntRect9intersectERKS0_(i61 | 0, i2 + 4 | 0);
     if ((HEAP32[i61 + 8 >> 2] | 0) < 1 | (HEAP32[i61 + 12 >> 2] | 0) < 1) {
      break;
     }
     if ((i9 | 0) == 2) {
      i114 = (HEAP32[i79 >> 2] | 0) >>> 12 & 15;
     } else {
      i114 = i9;
     }
     i37 = HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] | 0;
     i84 = i61 + 32 | 0;
     i50 = HEAP32[i84 + 4 >> 2] | 0;
     HEAP32[i63 >> 2] = HEAP32[i84 >> 2];
     HEAP32[i63 + 4 >> 2] = i50;
     FUNCTION_TABLE_viiii[i37 & 15](i62, i3, (i10 | 0) == 0 ? i75 : i10, i64);
     i37 = i62 | 0;
     i50 = HEAP32[i37 >> 2] | 0;
     HEAP32[i37 >> 2] = 0;
     __ZN7WebCore15GraphicsContext20setDrawLuminanceMaskEb(i71, (HEAP32[i79 >> 2] & 8388608 | 0) != 0);
     i37 = HEAP32[i84 + 4 >> 2] | 0;
     HEAP32[i65 >> 2] = HEAP32[i84 >> 2];
     HEAP32[i65 + 4 >> 2] = i37;
     i37 = __ZN7WebCore22ImageQualityController23shouldPaintAtLowQualityEPNS_15GraphicsContextEPNS_20RenderBoxModelObjectEPNS_5ImageEPKvRKNS_10LayoutSizeE(__ZN7WebCore10RenderView22imageQualityControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i78 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i71, i1, i50, i4, i65) | 0;
     i53 = (i50 | 0) == 0;
     if (!i53) {
      i5 = i61 + 40 | 0;
      i38 = HEAP32[i5 + 4 >> 2] | 0;
      i49 = i50 + 16 | 0;
      HEAP32[i49 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i49 + 4 >> 2] = i38;
     }
     i38 = (HEAP32[(HEAP32[(HEAP32[i76 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
     i49 = i66;
     HEAP32[i49 >> 2] = HEAP32[i51 >> 2];
     HEAP32[i49 + 4 >> 2] = HEAP32[i51 + 4 >> 2];
     HEAP32[i49 + 8 >> 2] = HEAP32[i51 + 8 >> 2];
     HEAP32[i49 + 12 >> 2] = HEAP32[i51 + 12 >> 2];
     i51 = i61 + 24 | 0;
     i49 = HEAP32[i51 >> 2] | 0;
     i5 = HEAP32[i51 + 4 >> 2] | 0;
     HEAP32[i67 >> 2] = i49;
     HEAP32[i67 + 4 >> 2] = i5;
     i51 = i61;
     i108 = HEAP32[i51 + 4 >> 2] | 0;
     i105 = HEAP32[i61 + 20 >> 2] | 0;
     HEAP32[i67 >> 2] = i49 - (HEAP32[i61 + 16 >> 2] | 0) + (HEAP32[i51 >> 2] | 0);
     HEAP32[i68 + 4 >> 2] = i5 - i105 + i108;
     i108 = HEAP32[i84 + 4 >> 2] | 0;
     HEAP32[i69 >> 2] = HEAP32[i84 >> 2];
     HEAP32[i69 + 4 >> 2] = i108;
     __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectERKNS_8IntPointERKNS_7IntSizeENS_17CompositeOperatorEbNS_9BlendModeE(i71, i50, i38, i66, i68, i70, i114, i37, (HEAP32[i79 >> 2] | 0) >>> 18 & 31);
     if (i53) {
      break;
     }
     i53 = i50 + 4 | 0;
     i50 = i53 | 0;
     i37 = (HEAP32[i50 >> 2] | 0) - 1 | 0;
     if ((i37 | 0) != 0) {
      HEAP32[i50 >> 2] = i37;
      break;
     }
     i37 = i53 - 4 | 0;
     if ((i37 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 31](i37);
    }
   } while (0);
   if ((HEAP32[i79 >> 2] & 12 | 0) == 12) {
    __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeEb(i71, i102, 0, i43, 7, 0, 0);
    __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i71);
   }
   if ((i102 | 0) != 0) {
    __ZN7WebCore11ImageBufferD1Ev(i102);
    __ZN3WTF8fastFreeEPv(i102);
   }
   if (i103 << 24 >> 24 == 0) {
    break;
   }
   __ZN7WebCore15GraphicsContext7restoreEv(i71);
  }
 } while (0);
 if (i83) {
  __ZN7WebCore15GraphicsContext7restoreEv(i71);
 }
 if (i95 << 24 >> 24 == 0) {
  STACKTOP = i11;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i71);
 STACKTOP = i11;
 return;
}
function __ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, d87 = +0, d88 = +0, i89 = 0, d90 = +0, i91 = 0, i92 = 0, d93 = +0, d94 = +0, i95 = 0, i96 = 0, d97 = +0, i98 = 0, d99 = +0, i100 = 0, d101 = +0, d102 = +0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, d110 = +0, d111 = +0, d112 = +0, d113 = +0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = i7 + 64 | 0;
 i17 = i7 + 80 | 0;
 i18 = i7 + 96 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
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
 STACKTOP = STACKTOP + 8 | 0;
 i28 = i27;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = i30;
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
 STACKTOP = STACKTOP + 8 | 0;
 i37 = i36;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i42 = i41 | 0;
 i43 = i41;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i45 = i44 | 0;
 i46 = i44;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i51 = i50 | 0;
 i52 = i50;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i59 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i60 = i59 | 0;
 i61 = i59;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i64 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i66 = i65 | 0;
 i67 = i65;
 i68 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i69 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i70 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i71 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i72 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i73 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i74 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i75 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i76 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i77 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i78 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i79 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i80 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i81 = i5 | 0;
 i82 = HEAP32[(HEAP32[i81 >> 2] | 0) + 8 >> 2] | 0;
 if ((i82 | 0) == 0) {
  i83 = 0;
  STACKTOP = i7;
  return i83 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i82 >> 2] | 0) + 16 >> 2] & 255](i82) | 0)) {
  i83 = 1;
  STACKTOP = i7;
  return i83 | 0;
 }
 i84 = i4 + 24 | 0;
 if (!(FUNCTION_TABLE_iiif[HEAP32[(HEAP32[i82 >> 2] | 0) + 12 >> 2] & 1](i82, i1 | 0, +HEAPF32[(HEAP32[i84 >> 2] | 0) + 80 >> 2]) | 0)) {
  i83 = 0;
  STACKTOP = i7;
  return i83 | 0;
 }
 i85 = i16;
 i86 = i3;
 HEAP32[i85 >> 2] = HEAP32[i86 >> 2];
 HEAP32[i85 + 4 >> 2] = HEAP32[i86 + 4 >> 2];
 HEAP32[i85 + 8 >> 2] = HEAP32[i86 + 8 >> 2];
 HEAP32[i85 + 12 >> 2] = HEAP32[i86 + 12 >> 2];
 __ZNK7WebCore11RenderStyle12imageOutsetsERKNS_14NinePieceImageE(i17, i4, i5);
 i5 = HEAP32[i17 + 12 >> 2] | 0;
 i86 = HEAP32[i17 >> 2] | 0;
 i85 = i16 | 0;
 HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) - i5;
 i85 = i16 + 4 | 0;
 HEAP32[i85 >> 2] = (HEAP32[i85 >> 2] | 0) - i86;
 i85 = (HEAP32[i17 + 8 >> 2] | 0) + i86 | 0;
 i86 = i16 + 8 | 0;
 HEAP32[i86 >> 2] = (HEAP32[i17 + 4 >> 2] | 0) + i5 + (HEAP32[i86 >> 2] | 0);
 i86 = i16 + 12 | 0;
 HEAP32[i86 >> 2] = i85 + (HEAP32[i86 >> 2] | 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i20, i16);
 i16 = i18 + 8 | 0;
 i86 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i22 + 4 >> 2] = i86;
 __ZNK7WebCore20RenderBoxModelObject33calculateImageIntrinsicDimensionsEPNS_10StyleImageERKNS_7IntSizeENS0_25ScaleByEffectiveZoomOrNotE(i21, i1, i82, i22, 1);
 i22 = i1 | 0;
 FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i82 >> 2] | 0) + 44 >> 2] & 1](i82, i22, i21, +HEAPF32[(HEAP32[i84 >> 2] | 0) + 80 >> 2]);
 i86 = HEAP32[i21 >> 2] | 0;
 i85 = HEAP32[i21 + 4 >> 2] | 0;
 i5 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 d87 = +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i82 >> 2] | 0) + 64 >> 2] & 1](i82);
 i17 = (HEAP32[i81 >> 2] | 0) + 28 | 0;
 HEAP32[i12 >> 2] = i85;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i23, i17, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i12 = HEAP32[i23 >> 2] | 0;
 i23 = ~~(d87 * +(((i12 | 0) < (i85 | 0) ? i12 : i85) | 0));
 i12 = (HEAP32[i81 >> 2] | 0) + 20 | 0;
 HEAP32[i10 >> 2] = i86;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i24, i12, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i10 = HEAP32[i24 >> 2] | 0;
 i24 = ~~(d87 * +(((i10 | 0) < (i86 | 0) ? i10 : i86) | 0));
 i10 = (HEAP32[i81 >> 2] | 0) + 36 | 0;
 HEAP32[i8 >> 2] = i85;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i25, i10, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i8 = HEAP32[i25 >> 2] | 0;
 i25 = ~~(d87 * +(((i8 | 0) < (i85 | 0) ? i8 : i85) | 0));
 i8 = (HEAP32[i81 >> 2] | 0) + 12 | 0;
 HEAP32[i9 >> 2] = i86;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i26, i8, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i5 = HEAP32[i26 >> 2] | 0;
 i26 = ~~(d87 * +(((i5 | 0) < (i86 | 0) ? i5 : i86) | 0));
 i5 = HEAP32[i81 >> 2] | 0;
 i9 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = i9 >>> 1 & 3;
 i10 = i9 >>> 3 & 3;
 i9 = i5 + 60 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i12 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = i5;
 HEAP32[i27 + 4 >> 2] = i12;
 if ((i5 & 0 | 0) == 0 & (i12 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i28);
 }
 i12 = i4 + 16 | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 i5 = HEAP32[i4 + 120 >> 2] | 0;
 if ((HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d88 = +0;
  } else {
   i89 = 8;
  }
 } else {
  i89 = 8;
 }
 if ((i89 | 0) == 8) {
  d88 = +(i5 >>> 1 & 67108863 | 0);
 }
 i5 = i20 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 i9 = i28 + 5 | 0;
 i17 = HEAP8[i9] | 0;
 do {
  if ((i17 << 24 >> 24 | 0) == 1) {
   if ((HEAP8[i28 + 6 | 0] & 1) == 0) {
    d90 = +(HEAP32[i27 >> 2] | 0);
   } else {
    d90 = +HEAPF32[i27 >> 2];
   }
   d87 = d88 * d90;
   do {
    if (d87 < +2147483647) {
     if (d87 <= +-2147483648) {
      i91 = -2147483648;
      break;
     }
     i91 = ~~d87;
    } else {
     i91 = 2147483647;
    }
   } while (0);
   HEAP32[i29 >> 2] = i91;
   i92 = i91;
  } else if ((i17 << 24 >> 24 | 0) == 0) {
   HEAP32[i29 >> 2] = i23;
   i92 = i23;
  } else {
   HEAP32[i11 >> 2] = i4;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i29, i28, i11, i1, 0);
   i3 = HEAP32[i29 >> 2] | 0;
   if ((HEAP8[i9] | 0) != 10) {
    i92 = i3;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
   i92 = i3;
  }
 } while (0);
 i28 = (HEAP32[i81 >> 2] | 0) + 52 | 0;
 i9 = HEAP32[i28 >> 2] | 0;
 i29 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i30 >> 2] = i9;
 HEAP32[i30 + 4 >> 2] = i29;
 if ((i9 & 0 | 0) == 0 & (i29 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i31);
 }
 i29 = HEAP32[i12 >> 2] | 0;
 i9 = HEAP32[i29 + 112 >> 2] | 0;
 if ((HEAP32[(HEAP32[i29 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d93 = +0;
  } else {
   i89 = 24;
  }
 } else {
  i89 = 24;
 }
 if ((i89 | 0) == 24) {
  d93 = +(i9 >>> 1 & 67108863 | 0);
 }
 i9 = i16;
 i16 = HEAP32[i9 >> 2] | 0;
 i29 = i31 + 5 | 0;
 i28 = HEAP8[i29] | 0;
 do {
  if ((i28 << 24 >> 24 | 0) == 1) {
   if ((HEAP8[i31 + 6 | 0] & 1) == 0) {
    d94 = +(HEAP32[i30 >> 2] | 0);
   } else {
    d94 = +HEAPF32[i30 >> 2];
   }
   d90 = d93 * d94;
   do {
    if (d90 < +2147483647) {
     if (d90 <= +-2147483648) {
      i95 = -2147483648;
      break;
     }
     i95 = ~~d90;
    } else {
     i95 = 2147483647;
    }
   } while (0);
   HEAP32[i32 >> 2] = i95;
   i96 = i95;
  } else if ((i28 << 24 >> 24 | 0) == 0) {
   HEAP32[i32 >> 2] = i24;
   i96 = i24;
  } else {
   HEAP32[i13 >> 2] = i16;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i32, i31, i13, i1, 0);
   i11 = HEAP32[i32 >> 2] | 0;
   if ((HEAP8[i29] | 0) != 10) {
    i96 = i11;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
   i96 = i11;
  }
 } while (0);
 i31 = (HEAP32[i81 >> 2] | 0) + 68 | 0;
 i29 = HEAP32[i31 >> 2] | 0;
 i32 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i33 >> 2] = i29;
 HEAP32[i33 + 4 >> 2] = i32;
 if ((i29 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i34);
 }
 i32 = HEAP32[i12 >> 2] | 0;
 i29 = HEAP32[i32 + 128 >> 2] | 0;
 if ((HEAP32[(HEAP32[i32 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i29 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d97 = +0;
  } else {
   i89 = 40;
  }
 } else {
  i89 = 40;
 }
 if ((i89 | 0) == 40) {
  d97 = +(i29 >>> 1 & 67108863 | 0);
 }
 i29 = HEAP32[i5 >> 2] | 0;
 i32 = i34 + 5 | 0;
 i31 = HEAP8[i32] | 0;
 do {
  if ((i31 << 24 >> 24 | 0) == 0) {
   HEAP32[i35 >> 2] = i25;
   i98 = i25;
  } else if ((i31 << 24 >> 24 | 0) == 1) {
   if ((HEAP8[i34 + 6 | 0] & 1) == 0) {
    d99 = +(HEAP32[i33 >> 2] | 0);
   } else {
    d99 = +HEAPF32[i33 >> 2];
   }
   d94 = d97 * d99;
   do {
    if (d94 < +2147483647) {
     if (d94 <= +-2147483648) {
      i100 = -2147483648;
      break;
     }
     i100 = ~~d94;
    } else {
     i100 = 2147483647;
    }
   } while (0);
   HEAP32[i35 >> 2] = i100;
   i98 = i100;
  } else {
   HEAP32[i14 >> 2] = i29;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i34, i14, i1, 0);
   i13 = HEAP32[i35 >> 2] | 0;
   if ((HEAP8[i32] | 0) != 10) {
    i98 = i13;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i34);
   i98 = i13;
  }
 } while (0);
 i34 = (HEAP32[i81 >> 2] | 0) + 44 | 0;
 i32 = HEAP32[i34 >> 2] | 0;
 i35 = HEAP32[i34 + 4 >> 2] | 0;
 HEAP32[i36 >> 2] = i32;
 HEAP32[i36 + 4 >> 2] = i35;
 if ((i32 & 0 | 0) == 0 & (i35 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i37);
 }
 i35 = HEAP32[i12 >> 2] | 0;
 i12 = HEAP32[i35 + 104 >> 2] | 0;
 if ((HEAP32[(HEAP32[i35 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i12 & 1879048192) >>> 0 < 268435456 >>> 0) {
   d101 = +0;
  } else {
   i89 = 56;
  }
 } else {
  i89 = 56;
 }
 if ((i89 | 0) == 56) {
  d101 = +(i12 >>> 1 & 67108863 | 0);
 }
 i12 = HEAP32[i9 >> 2] | 0;
 i89 = i37 + 5 | 0;
 i35 = HEAP8[i89] | 0;
 do {
  if ((i35 << 24 >> 24 | 0) == 1) {
   if ((HEAP8[i37 + 6 | 0] & 1) == 0) {
    d102 = +(HEAP32[i36 >> 2] | 0);
   } else {
    d102 = +HEAPF32[i36 >> 2];
   }
   d99 = d101 * d102;
   do {
    if (d99 < +2147483647) {
     if (d99 <= +-2147483648) {
      i103 = -2147483648;
      break;
     }
     i103 = ~~d99;
    } else {
     i103 = 2147483647;
    }
   } while (0);
   HEAP32[i38 >> 2] = i103;
   i104 = i103;
  } else if ((i35 << 24 >> 24 | 0) == 0) {
   HEAP32[i38 >> 2] = i26;
   i104 = i26;
  } else {
   HEAP32[i15 >> 2] = i12;
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i38, i37, i15, i1, 0);
   i32 = HEAP32[i38 >> 2] | 0;
   if ((HEAP8[i89] | 0) != 10) {
    i104 = i32;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i37);
   i104 = i32;
  }
 } while (0);
 i37 = i104 + i96 | 0;
 i89 = i98 + i92 | 0;
 i38 = HEAP32[i9 >> 2] | 0;
 d102 = +(i38 | 0) / ((i37 | 0) > 1 ? +(i37 | 0) : +1);
 i37 = HEAP32[i5 >> 2] | 0;
 d101 = +(i37 | 0) / ((i89 | 0) > 1 ? +(i89 | 0) : +1);
 d99 = d101 < d102 ? d101 : d102;
 if (d99 < +1) {
  i105 = ~~(+(i92 | 0) * d99);
  i106 = ~~(+(i96 | 0) * d99);
  i107 = ~~(+(i98 | 0) * d99);
  i108 = ~~(+(i104 | 0) * d99);
 } else {
  i105 = i92;
  i106 = i96;
  i107 = i98;
  i108 = i104;
 }
 i104 = (i26 | 0) > 0 & (i108 | 0) > 0;
 i98 = (i23 | 0) > 0 & (i105 | 0) > 0;
 i96 = (i24 | 0) > 0 & (i106 | 0) > 0;
 i92 = (i25 | 0) > 0 & (i107 | 0) > 0;
 i89 = i86 - i24 | 0;
 i86 = i89 - i26 | 0;
 do {
  if ((HEAP8[(HEAP32[i81 >> 2] | 0) + 4 | 0] & 1) != 0 & (i86 | 0) > 0) {
   if ((i38 - (i106 + i108) | 0) <= 0) {
    i109 = 0;
    break;
   }
   if ((i85 - i23 - i25 | 0) <= 0) {
    i109 = 0;
    break;
   }
   i109 = (i37 - (i105 + i107) | 0) > 0;
  } else {
   i109 = 0;
  }
 } while (0);
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i82 >> 2] | 0) + 56 >> 2] & 15](i39, i82, i22, i21);
 i21 = i39 | 0;
 i39 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 i21 = (HEAP32[(HEAP32[i84 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
 d99 = +((HEAP32[i9 >> 2] | 0) - (i106 + i108) | 0);
 d102 = +((HEAP32[i5 >> 2] | 0) - (i105 + i107) | 0);
 d101 = +(i86 | 0);
 d97 = +(i85 - i23 - i25 | 0);
 if (i104) {
  d110 = +(i108 | 0) / +(i26 | 0);
 } else {
  d110 = +1;
 }
 if (i96) {
  d111 = +(i106 | 0) / +(i24 | 0);
 } else {
  d111 = +1;
 }
 if (i98) {
  d112 = +(i105 | 0) / +(i23 | 0);
 } else {
  d112 = +1;
 }
 if (i92) {
  d113 = +(i107 | 0) / +(i25 | 0);
 } else {
  d113 = +1;
 }
 do {
  if (i104) {
   if (i98) {
    i86 = HEAP32[i19 + 4 >> 2] | 0;
    HEAP32[i42 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i42 + 4 >> 2] = i86;
    i86 = i41 + 8 | 0;
    HEAP32[i86 >> 2] = i108;
    HEAP32[i86 + 4 >> 2] = i105;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i40, i43);
    HEAP32[i45 >> 2] = 0;
    HEAP32[i45 + 4 >> 2] = 0;
    i86 = i44 + 8 | 0;
    d94 = +(+(i26 | 0));
    d93 = +(+(i23 | 0));
    HEAPF32[i86 >> 2] = d94;
    HEAPF32[i86 + 4 >> 2] = d93;
    HEAP32[i47 >> 2] = 0;
    HEAP32[i47 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i39, i21, i40, i46, i6, i47, 0);
   }
   if (i92) {
    i86 = (HEAP32[i20 + 4 >> 2] | 0) - i107 + (HEAP32[i5 >> 2] | 0) | 0;
    HEAP32[i49 >> 2] = HEAP32[i18 >> 2];
    HEAP32[i49 + 4 >> 2] = i86;
    HEAP32[i49 + 8 >> 2] = i108;
    HEAP32[i49 + 12 >> 2] = i107;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i48, i49);
    d93 = +(+(i85 - i25 | 0));
    HEAP32[i51 >> 2] = 0;
    HEAPF32[i51 + 4 >> 2] = d93;
    i86 = i50 + 8 | 0;
    d93 = +(+(i26 | 0));
    d94 = +(+(i25 | 0));
    HEAPF32[i86 >> 2] = d93;
    HEAPF32[i86 + 4 >> 2] = d94;
    HEAP32[i53 >> 2] = 0;
    HEAP32[i53 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i39, i21, i48, i52, i6, i53, 0);
   }
   if (d97 <= +0) {
    break;
   }
   i86 = (HEAP32[i20 + 4 >> 2] | 0) + i105 | 0;
   HEAP32[i54 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i54 + 4 >> 2] = i86;
   HEAP32[i54 + 8 >> 2] = i108;
   HEAP32[i54 + 12 >> 2] = ~~d102;
   HEAP32[i55 >> 2] = 0;
   HEAP32[i55 + 4 >> 2] = i23;
   HEAP32[i55 + 8 >> 2] = i26;
   HEAP32[i55 + 12 >> 2] = ~~d97;
   HEAPF32[i56 >> 2] = d110;
   HEAPF32[i56 + 4 >> 2] = d110;
   __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i2, i39, i21, i54, i55, i56, 0, i10, i6, 0);
  }
 } while (0);
 do {
  if (i96) {
   if (i98) {
    i56 = HEAP32[i20 + 4 >> 2] | 0;
    HEAP32[i58 >> 2] = (HEAP32[i18 >> 2] | 0) - i106 + (HEAP32[i9 >> 2] | 0);
    HEAP32[i58 + 4 >> 2] = i56;
    HEAP32[i58 + 8 >> 2] = i106;
    HEAP32[i58 + 12 >> 2] = i105;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i57, i58);
    HEAPF32[i60 >> 2] = +(i89 | 0);
    HEAP32[i60 + 4 >> 2] = 0;
    i56 = i59 + 8 | 0;
    d94 = +(+(i24 | 0));
    d93 = +(+(i23 | 0));
    HEAPF32[i56 >> 2] = d94;
    HEAPF32[i56 + 4 >> 2] = d93;
    HEAP32[i62 >> 2] = 0;
    HEAP32[i62 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i39, i21, i57, i61, i6, i62, 0);
   }
   if (i92) {
    i56 = (HEAP32[i20 + 4 >> 2] | 0) - i107 + (HEAP32[i5 >> 2] | 0) | 0;
    HEAP32[i64 >> 2] = (HEAP32[i18 >> 2] | 0) - i106 + (HEAP32[i9 >> 2] | 0);
    HEAP32[i64 + 4 >> 2] = i56;
    HEAP32[i64 + 8 >> 2] = i106;
    HEAP32[i64 + 12 >> 2] = i107;
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i63, i64);
    d93 = +(+(i89 | 0));
    d94 = +(+(i85 - i25 | 0));
    HEAPF32[i66 >> 2] = d93;
    HEAPF32[i66 + 4 >> 2] = d94;
    i56 = i65 + 8 | 0;
    d94 = +(+(i24 | 0));
    d93 = +(+(i25 | 0));
    HEAPF32[i56 >> 2] = d94;
    HEAPF32[i56 + 4 >> 2] = d93;
    HEAP32[i68 >> 2] = 0;
    HEAP32[i68 + 4 >> 2] = 1;
    __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i39, i21, i63, i67, i6, i68, 0);
   }
   if (d97 <= +0) {
    break;
   }
   i56 = (HEAP32[i20 + 4 >> 2] | 0) + i105 | 0;
   HEAP32[i69 >> 2] = (HEAP32[i18 >> 2] | 0) - i106 + (HEAP32[i9 >> 2] | 0);
   HEAP32[i69 + 4 >> 2] = i56;
   HEAP32[i69 + 8 >> 2] = i106;
   HEAP32[i69 + 12 >> 2] = ~~d102;
   HEAP32[i70 >> 2] = i89;
   HEAP32[i70 + 4 >> 2] = i23;
   HEAP32[i70 + 8 >> 2] = i24;
   HEAP32[i70 + 12 >> 2] = ~~d97;
   HEAPF32[i71 >> 2] = d111;
   HEAPF32[i71 + 4 >> 2] = d111;
   __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i2, i39, i21, i69, i70, i71, 0, i10, i6, 0);
  }
 } while (0);
 i71 = d101 > +0;
 if (i98 & i71) {
  i70 = HEAP32[i20 + 4 >> 2] | 0;
  HEAP32[i72 >> 2] = (HEAP32[i18 >> 2] | 0) + i108;
  HEAP32[i72 + 4 >> 2] = i70;
  HEAP32[i72 + 8 >> 2] = ~~d99;
  HEAP32[i72 + 12 >> 2] = i105;
  HEAP32[i73 >> 2] = i26;
  HEAP32[i73 + 4 >> 2] = 0;
  HEAP32[i73 + 8 >> 2] = ~~d101;
  HEAP32[i73 + 12 >> 2] = i23;
  HEAPF32[i74 >> 2] = d112;
  HEAPF32[i74 + 4 >> 2] = d112;
  __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i2, i39, i21, i72, i73, i74, i8, 0, i6, 0);
 }
 if (i92 & i71) {
  i71 = (HEAP32[i20 + 4 >> 2] | 0) - i107 + (HEAP32[i5 >> 2] | 0) | 0;
  HEAP32[i75 >> 2] = (HEAP32[i18 >> 2] | 0) + i108;
  HEAP32[i75 + 4 >> 2] = i71;
  HEAP32[i75 + 8 >> 2] = ~~d99;
  HEAP32[i75 + 12 >> 2] = i107;
  HEAP32[i76 >> 2] = i26;
  HEAP32[i76 + 4 >> 2] = i85 - i25;
  HEAP32[i76 + 8 >> 2] = ~~d101;
  HEAP32[i76 + 12 >> 2] = i25;
  HEAPF32[i77 >> 2] = d113;
  HEAPF32[i77 + 4 >> 2] = d113;
  __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i2, i39, i21, i75, i76, i77, i8, 0, i6, 0);
 }
 if (i109) {
  i109 = i78 | 0;
  HEAPF32[i109 >> 2] = +1;
  i77 = i78 + 4 | 0;
  HEAPF32[i77 >> 2] = +1;
  do {
   if (i98) {
    HEAPF32[i109 >> 2] = d112;
   } else {
    if (!i92) {
     break;
    }
    HEAPF32[i109 >> 2] = d113;
   }
  } while (0);
  do {
   if (i104) {
    HEAPF32[i77 >> 2] = d110;
   } else {
    if (!i96) {
     break;
    }
    HEAPF32[i77 >> 2] = d111;
   }
  } while (0);
  if ((i8 | 0) == 0) {
   HEAPF32[i109 >> 2] = d99 / d101;
  }
  if ((i10 | 0) == 0) {
   HEAPF32[i77 >> 2] = d102 / d97;
  }
  i77 = (HEAP32[i20 + 4 >> 2] | 0) + i105 | 0;
  HEAP32[i79 >> 2] = (HEAP32[i18 >> 2] | 0) + i108;
  HEAP32[i79 + 4 >> 2] = i77;
  HEAP32[i79 + 8 >> 2] = ~~d99;
  HEAP32[i79 + 12 >> 2] = ~~d102;
  HEAP32[i80 >> 2] = i26;
  HEAP32[i80 + 4 >> 2] = i23;
  HEAP32[i80 + 8 >> 2] = ~~d101;
  HEAP32[i80 + 12 >> 2] = ~~d97;
  __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i2, i39, i21, i79, i80, i78, i8, i10, i6, 0);
 }
 if ((i39 | 0) == 0) {
  i83 = 1;
  STACKTOP = i7;
  return i83 | 0;
 }
 i6 = i39 + 4 | 0;
 i39 = i6 | 0;
 i10 = (HEAP32[i39 >> 2] | 0) - 1 | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i39 >> 2] = i10;
  i83 = 1;
  STACKTOP = i7;
  return i83 | 0;
 }
 i10 = i6 - 4 | 0;
 if ((i10 | 0) == 0) {
  i83 = 1;
  STACKTOP = i7;
  return i83 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
 i83 = 1;
 STACKTOP = i7;
 return i83 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, d61 = +0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 32 | 0;
 i12 = i7 + 40 | 0;
 i13 = i7 + 48 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = i15 | 0;
 i17 = i15;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 16 | 0;
 i25 = i24 | 0;
 i26 = i24;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i34 = i33;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = i13;
 HEAP32[i43 >> 2] = 0;
 i44 = i14 + 4 | 0;
 HEAP32[i44 >> 2] = 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i17, i4);
 i45 = i3 + 40 | 0;
 i46 = (HEAP32[i45 >> 2] & 3 | 0) == 2;
 do {
  if (i46) {
   HEAP8[i5 + 48 | 0] = 1;
   i47 = i1 + 4 | 0;
   __ZNK7WebCore10RenderView8viewRectEv(i27, HEAP32[(HEAP32[(HEAP32[(HEAP32[i47 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i26, i27);
   i48 = HEAP32[i47 >> 2] | 0;
   i49 = HEAP32[(HEAP32[i48 + 20 >> 2] | 0) + 8 >> 2] | 0;
   do {
    if ((HEAP32[i49 + 692 >> 2] | 0) == (i48 | 0)) {
     i50 = ((__ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[i49 + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0) & 4 | 0) == 0;
     i51 = HEAP32[(HEAP32[(HEAP32[i47 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
     if (!i50) {
      i52 = i51;
      i53 = 13;
      break;
     }
     i50 = HEAP32[(HEAP32[i51 + 1584 >> 2] | 0) + 40 >> 2] | 0;
     if ((i50 | 0) == 0) {
      i52 = i51;
      i53 = 13;
      break;
     }
     i54 = HEAP32[i50 + 208 >> 2] | 0;
     if ((i54 | 0) == 0) {
      i52 = i51;
      i53 = 13;
      break;
     }
     if ((HEAP8[i54 + 93 | 0] & 1) == 0) {
      i52 = i51;
      i53 = 13;
     } else {
      i55 = 0;
      i56 = 0;
      i57 = 0;
      i58 = 0;
     }
    } else {
     i52 = i49;
     i53 = 13;
    }
   } while (0);
   if ((i53 | 0) == 13) {
    __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i28, HEAP32[(HEAP32[i52 + 1584 >> 2] | 0) + 116 >> 2] | 0);
    i49 = HEAP32[i28 >> 2] | 0;
    i47 = HEAP32[i28 + 4 >> 2] | 0;
    i55 = i47;
    i56 = i49;
    i57 = i47 | 0;
    i58 = i49 | 0;
   }
   HEAP32[i25 >> 2] = i58;
   HEAP32[i25 + 4 >> 2] = i57;
   if ((i2 | 0) == 0) {
    i59 = i55;
    i60 = i56;
   } else {
    HEAPF32[i30 >> 2] = +0;
    HEAPF32[i30 + 4 >> 2] = +0;
    __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i29, i2 | 0, i30, 0);
    d61 = +_round(+(+HEAPF32[i29 >> 2]));
    do {
     if (d61 < +2147483647) {
      if (d61 <= +-2147483648) {
       i62 = -2147483648;
       break;
      }
      i62 = ~~d61;
     } else {
      i62 = 2147483647;
     }
    } while (0);
    d61 = +_round(+(+HEAPF32[i29 + 4 >> 2]));
    do {
     if (d61 < +2147483647) {
      if (d61 <= +-2147483648) {
       i63 = -2147483648;
       break;
      }
      i63 = ~~d61;
     } else {
      i63 = 2147483647;
     }
    } while (0);
    i49 = i24;
    HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) - i62;
    i49 = i26 + 4 | 0;
    HEAP32[i49 >> 2] = (HEAP32[i49 >> 2] | 0) - i63;
    i59 = HEAP32[i25 + 4 >> 2] | 0;
    i60 = HEAP32[i25 >> 2] | 0;
   }
   HEAP32[i32 >> 2] = i60;
   HEAP32[i32 + 4 >> 2] = i59;
   i49 = i24 + 8 | 0;
   i47 = HEAP32[i49 + 4 >> 2] | 0;
   HEAP32[i32 + 8 >> 2] = HEAP32[i49 >> 2];
   HEAP32[i32 + 12 >> 2] = i47;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i31, i32);
   i47 = i5;
   i49 = i31;
   HEAP32[i47 >> 2] = HEAP32[i49 >> 2];
   HEAP32[i47 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
   HEAP32[i47 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
   HEAP32[i47 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
   i49 = i5 + 8 | 0;
   i47 = HEAP32[i49 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i49 >> 2];
   HEAP32[i13 + 4 >> 2] = i47;
   i64 = 0;
   i65 = 0;
  } else {
   i47 = i5;
   i49 = i15;
   HEAP32[i47 >> 2] = HEAP32[i49 >> 2];
   HEAP32[i47 + 4 >> 2] = HEAP32[i49 + 4 >> 2];
   HEAP32[i47 + 8 >> 2] = HEAP32[i49 + 8 >> 2];
   HEAP32[i47 + 12 >> 2] = HEAP32[i49 + 12 >> 2];
   do {
    if ((HEAP32[i45 >> 2] & 48 | 0) == 0) {
     i66 = 0;
     i67 = 0;
     i68 = 0;
     i69 = 0;
    } else {
     i49 = i1;
     i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 744 >> 2] & 255](i1) | 0;
     i48 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 748 >> 2] & 255](i1) | 0;
     i51 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 736 >> 2] & 255](i1) | 0;
     i54 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i49 >> 2] | 0) + 740 >> 2] & 255](i1) | 0;
     if ((HEAP32[i45 >> 2] & 48 | 0) != 32) {
      i66 = i54;
      i67 = i48;
      i68 = i51;
      i69 = i47;
      break;
     }
     i49 = i1;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 712 >> 2] & 63](i18, i1);
     i50 = (HEAP32[i18 >> 2] | 0) + i47 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 716 >> 2] & 63](i19, i1);
     i47 = (HEAP32[i19 >> 2] | 0) + i48 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 704 >> 2] & 63](i20, i1);
     i48 = (HEAP32[i20 >> 2] | 0) + i51 | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i49 >> 2] | 0) + 708 >> 2] & 63](i21, i1);
     i66 = (HEAP32[i21 >> 2] | 0) + i54 | 0;
     i67 = i47;
     i68 = i48;
     i69 = i50;
    }
   } while (0);
   i50 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i50 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i50 | 0)) {
    i50 = i1 + 52 | 0;
    i48 = (HEAP32[i50 + 4 >> 2] | 0) - (i66 + i68) | 0;
    HEAP32[i13 >> 2] = (HEAP32[i50 >> 2] | 0) - (i67 + i69);
    HEAP32[i13 + 4 >> 2] = i48;
    i48 = i1;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i48 >> 2] | 0) + 776 >> 2] & 63](i22, i1);
    i50 = (HEAP32[i22 >> 2] | 0) + i69 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i48 >> 2] | 0) + 768 >> 2] & 63](i23, i1);
    i64 = (HEAP32[i23 >> 2] | 0) + i68 | 0;
    i65 = i50;
    break;
   } else {
    i50 = i4 + 8 | 0;
    i48 = (HEAP32[i50 + 4 >> 2] | 0) - (i66 + i68) | 0;
    HEAP32[i13 >> 2] = (HEAP32[i50 >> 2] | 0) - (i67 + i69);
    HEAP32[i13 + 4 >> 2] = i48;
    i64 = i68;
    i65 = i69;
    break;
   }
  }
 } while (0);
 __ZNK7WebCore20RenderBoxModelObject21calculateFillTileSizeEPKNS_9FillLayerERKNS_7IntSizeE(i34, i1, i3, i14);
 i14 = HEAP32[i3 + 4 >> 2] | 0;
 FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i14 >> 2] | 0) + 44 >> 2] & 1](i14, (i6 | 0) == 0 ? i1 | 0 : i6, i34, +HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2]);
 i6 = i5 + 32 | 0;
 i14 = HEAP32[i33 >> 2] | 0;
 i69 = HEAP32[i33 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i14;
 HEAP32[i6 + 4 >> 2] = i69;
 i68 = HEAP32[i45 >> 2] | 0;
 i13 = i68 >>> 6 & 7;
 i67 = i68 >>> 9 & 7;
 i68 = HEAP32[i43 >> 2] | 0;
 i43 = i68 - i14 | 0;
 i14 = HEAP32[i44 >> 2] | 0;
 i44 = i14 - i69 | 0;
 HEAP32[i8 >> 2] = i43;
 i69 = i1 + 4 | 0;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i3 + 8 | 0, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i69 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1);
 i8 = (i13 | 0) == 2;
 do {
  if (i8 & (i68 | 0) > 0) {
   i1 = i33;
   i66 = HEAP32[i1 >> 2] | 0;
   if ((i66 | 0) <= 0) {
    break;
   }
   i4 = _round(+(+(i68 | 0) / +(i66 | 0))) | 0;
   i66 = (i4 | 0) == 0 ? 1 : i4;
   i4 = i10 | 0;
   i23 = (HEAP32[i45 >> 2] | 0) >>> 16 & 3;
   i22 = i3 + 24 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i20 = HEAP32[i22 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = i21;
   HEAP32[i4 + 4 >> 2] = i20;
   if ((i21 & 0 | 0) == 0 & (i20 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   i20 = i10 + 8 | 0;
   i21 = i3 + 32 | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   i19 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i20 >> 2] = i22;
   HEAP32[i20 + 4 >> 2] = i19;
   if ((i22 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i20);
    i70 = HEAP32[i20 + 4 >> 2] | 0;
    i71 = HEAP32[i20 >> 2] | 0;
   } else {
    i70 = i19;
    i71 = i22;
   }
   HEAP32[i36 >> 2] = i23;
   i23 = i36 + 4 | 0;
   i22 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i23 + 4 >> 2] = i22;
   i23 = i36 + 12 | 0;
   i4 = i23;
   HEAP32[i4 >> 2] = i71;
   HEAP32[i4 + 4 >> 2] = i70;
   i4 = (i70 >>> 8 | 0 << 24) & 255;
   i19 = (i22 >>> 8 | 0 << 24) & 255;
   do {
    if ((i4 << 24 >> 24 | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i23);
     i72 = HEAP8[i36 + 9 | 0] | 0;
     i53 = 35;
    } else if ((i4 << 24 >> 24 | 0) == 0) {
     if (i19 << 24 >> 24 == 10) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i36 + 4 | 0);
     }
     if ((i67 | 0) == 2) {
      break;
     }
     i22 = i34 + 4 | 0;
     i20 = Math_imul(i68, HEAP32[i22 >> 2] | 0) | 0;
     HEAP32[i22 >> 2] = (i20 | 0) / (Math_imul(HEAP32[i1 >> 2] | 0, i66) | 0) & -1;
    } else {
     i72 = i19;
     i53 = 35;
    }
   } while (0);
   do {
    if ((i53 | 0) == 35) {
     if (i72 << 24 >> 24 != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i36 + 4 | 0);
    }
   } while (0);
   HEAP32[i1 >> 2] = (i68 | 0) / (i66 | 0) & -1;
   i19 = HEAP32[i33 >> 2] | 0;
   i4 = HEAP32[i33 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i19;
   HEAP32[i6 + 4 >> 2] = i4;
   i4 = i19;
   if ((i4 | 0) == 0) {
    i73 = 0;
   } else {
    i73 = i4 - (((HEAP32[i35 >> 2] | 0) + i65 | 0) % (i4 | 0) & -1) | 0;
   }
   HEAP32[i5 + 24 >> 2] = i73;
   i4 = i5 + 40 | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP32[i4 + 4 >> 2] = 0;
  }
 } while (0);
 HEAP32[i9 >> 2] = i44;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i37, i3 + 16 | 0, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i69 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1);
 do {
  if ((i67 | 0) == 2 & (i14 | 0) > 0) {
   i9 = i34 + 4 | 0;
   i73 = HEAP32[i9 >> 2] | 0;
   if ((i73 | 0) <= 0) {
    break;
   }
   i36 = _round(+(+(i14 | 0) / +(i73 | 0))) | 0;
   i73 = (i36 | 0) == 0 ? 1 : i36;
   i36 = i10 | 0;
   i72 = (HEAP32[i45 >> 2] | 0) >>> 16 & 3;
   i70 = i3 + 24 | 0;
   i71 = HEAP32[i70 >> 2] | 0;
   i4 = HEAP32[i70 + 4 >> 2] | 0;
   HEAP32[i36 >> 2] = i71;
   HEAP32[i36 + 4 >> 2] = i4;
   if ((i71 & 0 | 0) == 0 & (i4 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
   }
   i4 = i10 + 8 | 0;
   i71 = i3 + 32 | 0;
   i70 = HEAP32[i71 >> 2] | 0;
   i19 = HEAP32[i71 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = i70;
   HEAP32[i4 + 4 >> 2] = i19;
   if ((i70 & 0 | 0) == 0 & (i19 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
    i74 = HEAP32[i4 + 4 >> 2] | 0;
    i75 = HEAP32[i4 >> 2] | 0;
   } else {
    i74 = i19;
    i75 = i70;
   }
   HEAP32[i38 >> 2] = i72;
   i72 = i38 + 4 | 0;
   i70 = HEAP32[i36 + 4 >> 2] | 0;
   HEAP32[i72 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i72 + 4 >> 2] = i70;
   i72 = i38 + 12 | 0;
   i36 = i72;
   HEAP32[i36 >> 2] = i75;
   HEAP32[i36 + 4 >> 2] = i74;
   i36 = i38 + 9 | 0;
   i19 = (i70 >>> 8 | 0 << 24) & 255;
   i70 = (i75 & 0 | 0) == 0 & (i74 & 65280 | 0) == 2560;
   do {
    if (i19 << 24 >> 24 == 0) {
     do {
      if (i70) {
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i72);
       if ((HEAP8[i36] | 0) != 10) {
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i38 + 4 | 0);
      }
     } while (0);
     if (i8) {
      break;
     }
     i4 = i33;
     i71 = Math_imul(i14, HEAP32[i4 >> 2] | 0) | 0;
     HEAP32[i4 >> 2] = (i71 | 0) / (Math_imul(HEAP32[i9 >> 2] | 0, i73) | 0) & -1;
    } else {
     if (i70) {
      __ZNK7WebCore6Length22decrementCalculatedRefEv(i72);
      i76 = HEAP8[i36] | 0;
     } else {
      i76 = i19;
     }
     if (i76 << 24 >> 24 != 10) {
      break;
     }
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i38 + 4 | 0);
    }
   } while (0);
   HEAP32[i9 >> 2] = (i14 | 0) / (i73 | 0) & -1;
   i19 = HEAP32[i33 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i33 >> 2];
   HEAP32[i6 + 4 >> 2] = i19;
   i36 = i19;
   if ((i36 | 0) == 0) {
    i77 = 0;
   } else {
    i77 = i36 - (((HEAP32[i37 >> 2] | 0) + i64 | 0) % (i36 | 0) & -1) | 0;
   }
   HEAP32[i5 + 28 >> 2] = i77;
   i36 = i5 + 40 | 0;
   HEAP32[i36 >> 2] = 0;
   HEAP32[i36 + 4 >> 2] = 0;
  }
 } while (0);
 do {
  if ((i13 | 0) == 0) {
   i77 = HEAP32[i6 >> 2] | 0;
   if ((i77 | 0) == 0) {
    i78 = 0;
   } else {
    i78 = i77 - (((HEAP32[i35 >> 2] | 0) + i65 | 0) % (i77 | 0) & -1) | 0;
   }
   HEAP32[i5 + 24 >> 2] = i78;
   i77 = i5 + 40 | 0;
   i38 = HEAP32[i77 + 4 >> 2] & -1;
   HEAP32[i77 >> 2] = HEAP32[i77 >> 2] & 0;
   HEAP32[i77 + 4 >> 2] = i38;
   i53 = 71;
  } else if ((i13 | 0) == 3) {
   if ((HEAP32[i33 >> 2] | 0) <= 0) {
    break;
   }
   i38 = HEAP32[i6 >> 2] | 0;
   i77 = (i68 | 0) / (i38 | 0) & -1;
   if ((i77 | 0) <= 1) {
    i53 = 72;
    break;
   }
   i76 = _round(+(+(i68 - (Math_imul(i77, i38) | 0) | 0) / +(i77 - 1 | 0))) | 0;
   i77 = (HEAP32[i6 >> 2] | 0) + i76 | 0;
   if ((i76 | 0) <= -1) {
    i53 = 72;
    break;
   }
   _memset(i40 | 0, 0, 7) | 0;
   HEAP32[i11 >> 2] = i43;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i39, i40, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i69 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1);
   i38 = i35 | 0;
   HEAP32[i38 >> 2] = HEAP32[i39 >> 2];
   if ((HEAP8[i40 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i40);
   }
   i8 = i5 + 40 | 0;
   HEAPF32[i8 >> 2] = +(i76 | 0);
   HEAP32[i8 + 4 >> 2] = 0;
   if ((i77 | 0) == 0) {
    i79 = 0;
   } else {
    i79 = i77 - (((HEAP32[i38 >> 2] | 0) + i65 | 0) % (i77 | 0) & -1) | 0;
   }
   HEAP32[i5 + 24 >> 2] = i79;
   i53 = 71;
  } else if ((i13 | 0) == 1) {
   i53 = 72;
  }
 } while (0);
 if ((i53 | 0) == 71) {
  if ((i13 | 0) == 1) {
   i53 = 72;
  }
 }
 if ((i53 | 0) == 72) {
  i13 = HEAP32[i35 >> 2] | 0;
  i35 = ((HEAP32[i3 + 44 >> 2] & 6 | 0) == 2 ? i43 - i13 | 0 : i13) + i65 | 0;
  i65 = i5 | 0;
  HEAP32[i65 >> 2] = ((i35 | 0) < 0 ? 0 : i35) + (HEAP32[i65 >> 2] | 0);
  i65 = (i35 | 0) > 0 ? 0 : i35;
  HEAP32[i5 + 24 >> 2] = -i65;
  HEAP32[i5 + 8 >> 2] = i65 + (HEAP32[i5 + 32 >> 2] | 0);
  i65 = i5 + 40 | 0;
  i35 = HEAP32[i65 + 4 >> 2] & -1;
  HEAP32[i65 >> 2] = HEAP32[i65 >> 2] & 0;
  HEAP32[i65 + 4 >> 2] = i35;
 }
 do {
  if ((i67 | 0) == 1) {
   i53 = 86;
  } else if ((i67 | 0) == 0) {
   i35 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i35 | 0) == 0) {
    i80 = 0;
   } else {
    i80 = i35 - (((HEAP32[i37 >> 2] | 0) + i64 | 0) % (i35 | 0) & -1) | 0;
   }
   HEAP32[i5 + 28 >> 2] = i80;
   i35 = i5 + 40 | 0;
   i65 = HEAP32[i35 + 4 >> 2] & 0;
   HEAP32[i35 >> 2] = HEAP32[i35 >> 2] & -1;
   HEAP32[i35 + 4 >> 2] = i65;
   i53 = 85;
  } else if ((i67 | 0) == 3) {
   if ((HEAP32[i34 + 4 >> 2] | 0) <= 0) {
    break;
   }
   i65 = HEAP32[i6 + 4 >> 2] | 0;
   i35 = (i14 | 0) / (i65 | 0) & -1;
   if ((i35 | 0) <= 1) {
    i53 = 86;
    break;
   }
   i13 = _round(+(+(i14 - (Math_imul(i65, i35) | 0) | 0) / +(i35 - 1 | 0))) | 0;
   i35 = (HEAP32[i6 + 4 >> 2] | 0) + i13 | 0;
   if ((i13 | 0) <= -1) {
    i53 = 86;
    break;
   }
   _memset(i42 | 0, 0, 7) | 0;
   HEAP32[i12 >> 2] = i44;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i41, i42, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i69 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1);
   i65 = i37 | 0;
   HEAP32[i65 >> 2] = HEAP32[i41 >> 2];
   if ((HEAP8[i42 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i42);
   }
   i43 = i5 + 40 | 0;
   i79 = HEAP32[i43 + 4 >> 2] & 0 | (HEAPF32[tempDoublePtr >> 2] = +(i13 | 0), HEAP32[tempDoublePtr >> 2] | 0);
   HEAP32[i43 >> 2] = HEAP32[i43 >> 2] & -1;
   HEAP32[i43 + 4 >> 2] = i79;
   if ((i35 | 0) == 0) {
    i81 = 0;
   } else {
    i81 = i35 - (((HEAP32[i65 >> 2] | 0) + i64 | 0) % (i35 | 0) & -1) | 0;
   }
   HEAP32[i5 + 28 >> 2] = i81;
   i53 = 85;
  }
 } while (0);
 if ((i53 | 0) == 85) {
  if ((i67 | 0) == 1) {
   i53 = 86;
  }
 }
 if ((i53 | 0) == 86) {
  i53 = HEAP32[i37 >> 2] | 0;
  i37 = ((HEAP32[i3 + 44 >> 2] & 24 | 0) == 16 ? i44 - i53 | 0 : i53) + i64 | 0;
  i64 = i5 + 4 | 0;
  HEAP32[i64 >> 2] = ((i37 | 0) < 0 ? 0 : i37) + (HEAP32[i64 >> 2] | 0);
  i64 = (i37 | 0) > 0 ? 0 : i37;
  HEAP32[i5 + 28 >> 2] = -i64;
  HEAP32[i5 + 12 >> 2] = i64 + (HEAP32[i5 + 36 >> 2] | 0);
  i64 = i5 + 40 | 0;
  i37 = HEAP32[i64 + 4 >> 2] & 0;
  HEAP32[i64 >> 2] = HEAP32[i64 >> 2] & -1;
  HEAP32[i64 + 4 >> 2] = i37;
 }
 if (!i46) {
  i82 = i5 | 0;
  __ZN7WebCore7IntRect9intersectERKS0_(i82, i17);
  i83 = i5;
  i84 = i83 | 0;
  i85 = HEAP32[i84 >> 2] | 0;
  i86 = i83 + 4 | 0;
  i87 = HEAP32[i86 >> 2] | 0;
  i88 = i5 + 16 | 0;
  i89 = i88;
  i90 = i89 | 0;
  HEAP32[i90 >> 2] = i85;
  i91 = i89 + 4 | 0;
  HEAP32[i91 >> 2] = i87;
  STACKTOP = i7;
  return;
 }
 i46 = (HEAP32[i16 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 i37 = (HEAP32[i16 + 4 >> 2] | 0) - (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i16 = i5 + 24 | 0;
 HEAP32[i16 >> 2] = ((i46 | 0) < 0 ? 0 : i46) + (HEAP32[i16 >> 2] | 0);
 i16 = i5 + 28 | 0;
 HEAP32[i16 >> 2] = ((i37 | 0) < 0 ? 0 : i37) + (HEAP32[i16 >> 2] | 0);
 i82 = i5 | 0;
 __ZN7WebCore7IntRect9intersectERKS0_(i82, i17);
 i83 = i5;
 i84 = i83 | 0;
 i85 = HEAP32[i84 >> 2] | 0;
 i86 = i83 + 4 | 0;
 i87 = HEAP32[i86 >> 2] | 0;
 i88 = i5 + 16 | 0;
 i89 = i88;
 i90 = i89 | 0;
 HEAP32[i90 >> 2] = i85;
 i91 = i89 + 4 | 0;
 HEAP32[i91 >> 2] = i87;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 600 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 96 | 0;
 i12 = i8 + 176 | 0;
 i13 = i8 + 224 | 0;
 i14 = i8 + 272 | 0;
 i15 = i8 + 288 | 0;
 i16 = i8 + 304 | 0;
 i17 = i8 + 336 | 0;
 i18 = i8 + 344 | 0;
 i19 = i8 + 360 | 0;
 i20 = i8 + 408 | 0;
 i21 = i8 + 456 | 0;
 i22 = i8 + 472 | 0;
 i23 = i8 + 488 | 0;
 i24 = i8 + 504 | 0;
 i25 = i8 + 512 | 0;
 i26 = i8 + 528 | 0;
 i27 = i8 + 544 | 0;
 i28 = i8 + 592 | 0;
 i29 = HEAP32[i2 >> 2] | 0;
 if (__ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE(i1, i29, i3, i4, (HEAP32[i4 + 16 >> 2] | 0) + 132 | 0, 2) | 0) {
  STACKTOP = i8;
  return;
 }
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i29) | 0) {
  STACKTOP = i8;
  return;
 }
 i30 = i11 | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP8[i11 + 8 | 0] = 0;
 HEAP32[i11 + 12 >> 2] = 1;
 HEAP8[i11 + 16 | 0] = 0;
 HEAP8[i11 + 17 | 0] = 0;
 HEAP32[i11 + 20 >> 2] = 0;
 HEAP32[i11 + 24 >> 2] = 0;
 HEAP8[i11 + 28 | 0] = 0;
 HEAP32[i11 + 32 >> 2] = 1;
 HEAP8[i11 + 36 | 0] = 0;
 HEAP8[i11 + 37 | 0] = 0;
 HEAP32[i11 + 40 >> 2] = 0;
 HEAP32[i11 + 44 >> 2] = 0;
 HEAP8[i11 + 48 | 0] = 0;
 HEAP32[i11 + 52 >> 2] = 1;
 HEAP8[i11 + 56 | 0] = 0;
 HEAP8[i11 + 57 | 0] = 0;
 HEAP32[i11 + 60 >> 2] = 0;
 HEAP32[i11 + 64 >> 2] = 0;
 HEAP8[i11 + 68 | 0] = 0;
 HEAP32[i11 + 72 >> 2] = 1;
 HEAP8[i11 + 76 | 0] = 0;
 HEAP8[i11 + 77 | 0] = 0;
 __ZNK7WebCore20RenderBoxModelObject17getBorderEdgeInfoEPNS_10BorderEdgeEPKNS_11RenderStyleEbb(0, i30, i4, i6, i7);
 __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i12, i4, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i6, i7);
 i31 = (i5 | 0) == 3;
 if (i31) {
  i32 = i14;
  i33 = i3;
  HEAP32[i32 >> 2] = HEAP32[i33 >> 2];
  HEAP32[i32 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
  HEAP32[i32 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
  HEAP32[i32 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i10, i29, 1);
  d34 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i10));
  do {
   if (d34 < +2147483647) {
    if (d34 <= +-2147483648) {
     i35 = -2147483648;
     break;
    }
    i35 = ~~d34;
   } else {
    i35 = 2147483647;
   }
  } while (0);
  i33 = i14 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + i35;
  i33 = i14 + 8 | 0;
  HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + (i35 * -2 & -1);
  d34 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i10));
  do {
   if (d34 < +2147483647) {
    if (d34 <= +-2147483648) {
     i36 = -2147483648;
     break;
    }
    i36 = ~~d34;
   } else {
    i36 = 2147483647;
   }
  } while (0);
  i10 = i14 + 4 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i36;
  i10 = i14 + 12 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (i36 * -2 & -1);
 } else {
  i36 = i14;
  i10 = i3;
  HEAP32[i36 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i36 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i36 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i36 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 }
 __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i13, i4, i14, i6, i7);
 i14 = 1;
 i10 = -1;
 i36 = 0;
 i35 = 0;
 i33 = 4;
 i32 = 1;
 i37 = 1;
 i38 = 0;
 while (1) {
  i39 = i11 + (i35 * 20 & -1) | 0;
  i40 = (HEAP8[i11 + (i35 * 20 & -1) + 17 | 0] & 1) == 0;
  do {
   if (i40) {
    i41 = i36;
    i42 = 19;
   } else {
    if ((HEAP32[i39 >> 2] | 0) == 0) {
     i43 = i36;
    } else {
     do {
      if ((HEAP32[i11 + (i35 * 20 & -1) + 12 >> 2] | 0) > 1) {
       if ((HEAP8[i11 + (i35 * 20 & -1) + 16 | 0] & 1) != 0) {
        i44 = i36;
        break;
       }
       i44 = 1 << i35 | i36;
      } else {
       i44 = i36;
      }
     } while (0);
     if (i40) {
      i41 = i44;
      i42 = 19;
      break;
     } else {
      i43 = i44;
     }
    }
    i45 = HEAP32[i39 >> 2] | 0;
    if ((i45 | 0) == 0) {
     i46 = i43;
     i42 = 25;
     break;
    }
    if ((HEAP32[i11 + (i35 * 20 & -1) + 12 >> 2] | 0) > 1) {
     if ((HEAP8[i11 + (i35 * 20 & -1) + 16 | 0] & 1) == 0) {
      i47 = i45;
      i48 = i43;
      i42 = 24;
      break;
     }
    }
    i49 = i38;
    i50 = i37;
    i51 = i32;
    i52 = i33 - 1 | 0;
    i53 = i10;
    i54 = 0;
    i55 = i43;
   }
  } while (0);
  if ((i42 | 0) == 19) {
   i42 = 0;
   i47 = HEAP32[i39 >> 2] | 0;
   i48 = i41;
   i42 = 24;
  }
  do {
   if ((i42 | 0) == 24) {
    i42 = 0;
    if ((i47 | 0) == 0) {
     i46 = i48;
     i42 = 25;
     break;
    }
    i40 = HEAP32[i11 + (i35 * 20 & -1) + 4 >> 2] | 0;
    if ((i10 | 0) == -1) {
     i56 = i35;
     i57 = i14;
    } else {
     if ((i40 | 0) == (HEAP32[i11 + (i10 * 20 & -1) + 4 >> 2] | 0)) {
      i58 = (HEAP8[i11 + (i35 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i11 + (i10 * 20 & -1) + 8 | 0] & 1) != 0 ^ 1;
     } else {
      i58 = 0;
     }
     i56 = i10;
     i57 = i14 & i58;
    }
    i45 = HEAP32[i11 + (i35 * 20 & -1) + 12 >> 2] | 0;
    i49 = (i40 & -16777216 | 0) != -16777216 | i38;
    i50 = (i45 | 0) == 8 & i37;
    i51 = (i45 | 0) == 9 & i32;
    i52 = i33;
    i53 = i56;
    i54 = i57;
    i55 = i48;
   }
  } while (0);
  if ((i42 | 0) == 25) {
   i42 = 0;
   i49 = i38;
   i50 = i37;
   i51 = i32;
   i52 = i33 - 1 | 0;
   i53 = i10;
   i54 = i14;
   i55 = i46;
  }
  i39 = i35 + 1 | 0;
  if ((i39 | 0) < 4) {
   i14 = i54;
   i10 = i53;
   i36 = i55;
   i35 = i39;
   i33 = i52;
   i32 = i51;
   i37 = i50;
   i38 = i49;
  } else {
   break;
  }
 }
 if (i50) {
  i38 = i12 + 16 | 0;
  do {
   if (!(__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i38) | 0)) {
    i37 = i2 + 4 | 0;
    i32 = HEAP32[i37 + 4 >> 2] | 0;
    HEAP32[i15 >> 2] = HEAP32[i37 >> 2];
    HEAP32[i15 + 4 >> 2] = i32;
    i32 = i2 + 12 | 0;
    i37 = HEAP32[i32 + 4 >> 2] | 0;
    HEAP32[i15 + 8 >> 2] = HEAP32[i32 >> 2];
    HEAP32[i15 + 12 >> 2] = i37;
    if (!(__ZN7WebCoreL20allCornersClippedOutERKNS_11RoundedRectERKNS_10LayoutRectE(i12, i15) | 0)) {
     break;
    }
    i37 = i16;
    _memset(i37 | 0, 0, 32) | 0;
    _memcpy(i38 | 0, i37 | 0, 32) | 0;
   }
  } while (0);
  if (i54) {
   i42 = 38;
  }
 } else {
  if (i51 & i54) {
   i42 = 38;
  }
 }
 L56 : do {
  if ((i42 | 0) == 38) {
   if (!(__ZNK7WebCore11RoundedRect12isRenderableEv(i13) | 0)) {
    break;
   }
   i54 = (i52 | 0) == 4;
   do {
    if (i54) {
     i38 = i12 + 16 | 0;
     if (!(i49 | (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i38) | 0) ^ 1)) {
      break L56;
     }
     if (!i50) {
      if (!(__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i38) | 0)) {
       break L56;
      }
      if (!(__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i13 + 16 | 0) | 0)) {
       break;
      }
     }
     __ZN7WebCore4PathC1Ev(i17);
     i16 = (i5 | 0) == 2;
     if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i38) | 0 | i16) {
      __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i18, i12 | 0);
      __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i17, i18);
     } else {
      __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i17, i12);
     }
     do {
      if (i51) {
       i38 = HEAP32[i12 >> 2] | 0;
       i15 = HEAP32[i12 + 4 >> 2] | 0;
       i2 = HEAP32[i12 + 8 >> 2] | 0;
       i37 = HEAP32[i12 + 12 >> 2] | 0;
       i32 = i37;
       i33 = i2;
       i35 = i15;
       i36 = i37;
       i37 = i2;
       i2 = i15;
       i15 = 0;
       while (1) {
        do {
         if ((HEAP8[i11 + (i15 * 20 & -1) + 17 | 0] & 1) == 0) {
          i59 = 0;
          i60 = 0;
         } else {
          i10 = HEAP32[i11 + (i15 * 20 & -1) >> 2] | 0;
          i14 = (i10 | 0) / 3 & -1;
          i46 = (i10 << 1 | 0) / 3 & -1;
          i48 = (i10 | 0) % 3 & -1;
          if ((i48 | 0) == 1) {
           i59 = i46 + 1 | 0;
           i60 = i14;
           break;
          } else if ((i48 | 0) == 2) {
           i59 = i46;
           i60 = i14 + 1 | 0;
           break;
          } else {
           i59 = i46;
           i60 = i14;
           break;
          }
         }
        } while (0);
        if ((i15 | 0) == 0) {
         i14 = i32 - i59 | 0;
         i46 = i36 - i60 | 0;
         i61 = i60 + i2 | 0;
         i62 = (i46 | 0) > 0 ? i46 : 0;
         i63 = i59 + i35 | 0;
         i64 = (i14 | 0) > 0 ? i14 : 0;
        } else if ((i15 | 0) == 2) {
         i61 = i2;
         i62 = i36 - i60 | 0;
         i63 = i35;
         i64 = i32 - i59 | 0;
        } else if ((i15 | 0) == 3) {
         i42 = 56;
         break;
        } else {
         i14 = i33 - i59 | 0;
         i46 = i37 - i60 | 0;
         i48 = i15 + 1 | 0;
         if ((i48 | 0) < 4) {
          i32 = i32;
          i33 = i14;
          i35 = i35;
          i36 = i36;
          i37 = i46;
          i2 = i2;
          i15 = i48;
          continue;
         } else {
          i65 = i14;
          i66 = i38;
          i67 = i46;
          i68 = i38;
          break;
         }
        }
        i32 = i64;
        i33 = i33;
        i35 = i63;
        i36 = i62;
        i37 = i37;
        i2 = i61;
        i15 = i15 + 1 | 0;
       }
       if ((i42 | 0) == 56) {
        i15 = i33 - i59 | 0;
        i46 = i37 - i60 | 0;
        i65 = (i15 | 0) > 0 ? i15 : 0;
        i66 = i59 + i38 | 0;
        i67 = (i46 | 0) > 0 ? i46 : 0;
        i68 = i60 + i38 | 0;
       }
       _memcpy(i19 | 0, i12 | 0, 48) | 0;
       _memcpy(i20 | 0, i13 | 0, 48) | 0;
       HEAP32[i20 >> 2] = i66;
       HEAP32[i20 + 4 >> 2] = i35;
       HEAP32[i20 + 8 >> 2] = i65;
       HEAP32[i20 + 12 >> 2] = i32;
       HEAP32[i19 >> 2] = i68;
       HEAP32[i19 + 4 >> 2] = i2;
       HEAP32[i19 + 8 >> 2] = i67;
       HEAP32[i19 + 12 >> 2] = i36;
       if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i19 + 16 | 0) | 0 | i16) {
        __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i21, i19 | 0);
        __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i17, i21);
       } else {
        __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i17, i19);
       }
       if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i20 + 16 | 0) | 0 | i16) {
        __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i22, i20 | 0);
        __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i17, i22);
        break;
       } else {
        __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i17, i20);
        break;
       }
      }
     } while (0);
     if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i13 + 16 | 0) | 0) {
      __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i23, i13 | 0);
      __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i17, i23);
     } else {
      __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i17, i13);
     }
     __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i29, 1);
     __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i29, i11 + (i53 * 20 & -1) + 4 | 0, (HEAP32[(HEAP32[i4 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i29, i17);
     __ZN7WebCore4PathD1Ev(i17);
     STACKTOP = i8;
     return;
    }
   } while (0);
   if (i54 | i50 ^ 1) {
    break;
   }
   if (!((__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i12 + 16 | 0) | 0) & i49)) {
    break;
   }
   __ZN7WebCore4PathC1Ev(i24);
   i16 = i25;
   i46 = i12;
   i15 = i25 | 0;
   i14 = i25 + 8 | 0;
   i48 = i25 + 12 | 0;
   i10 = i25 + 4 | 0;
   i57 = 0;
   while (1) {
    do {
     if ((HEAP8[i11 + (i57 * 20 & -1) + 17 | 0] & 1) != 0) {
      i56 = HEAP32[i11 + (i57 * 20 & -1) >> 2] | 0;
      if ((i56 | 0) == 0) {
       break;
      }
      if ((HEAP32[i11 + (i57 * 20 & -1) + 12 >> 2] | 0) <= 1) {
       break;
      }
      if ((HEAP8[i11 + (i57 * 20 & -1) + 16 | 0] & 1) != 0) {
       break;
      }
      HEAP32[i16 >> 2] = HEAP32[i46 >> 2];
      HEAP32[i16 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
      HEAP32[i16 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
      HEAP32[i16 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
      if ((i57 | 0) == 0) {
       HEAP32[i48 >> 2] = i56;
      } else if ((i57 | 0) == 2) {
       i58 = HEAP32[i10 >> 2] | 0;
       i47 = HEAP32[i48 >> 2] | 0;
       i41 = i58 - i56 + i47 | 0;
       HEAP32[i10 >> 2] = i41;
       i43 = i58 - i41 + i47 | 0;
       HEAP32[i48 >> 2] = (i43 | 0) > 0 ? i43 : 0;
      } else if ((i57 | 0) == 3) {
       HEAP32[i14 >> 2] = i56;
      } else {
       i43 = HEAP32[i15 >> 2] | 0;
       i47 = HEAP32[i14 >> 2] | 0;
       i41 = i43 - i56 + i47 | 0;
       HEAP32[i15 >> 2] = i41;
       i56 = i43 - i41 + i47 | 0;
       HEAP32[i14 >> 2] = (i56 | 0) > 0 ? i56 : 0;
      }
      __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i26, i25);
      __ZN7WebCore4Path7addRectERKNS_9FloatRectE(i24, i26);
     }
    } while (0);
    i57 = i57 + 1 | 0;
    if ((i57 | 0) >= 4) {
     break;
    }
   }
   __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i29, 0);
   __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i29, i11 + (i53 * 20 & -1) + 4 | 0, (HEAP32[(HEAP32[i4 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
   __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i29, i24);
   __ZN7WebCore4PathD1Ev(i24);
   STACKTOP = i8;
   return;
  }
 } while (0);
 i24 = __ZNK7WebCore11RoundedRect5Radii6isZeroEv(i12 + 16 | 0) | 0;
 do {
  if (!i24) {
   __ZN7WebCore15GraphicsContext4saveEv(i29);
   if ((i5 | 0) != 2) {
    __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i29, i12);
   }
   if (!(__ZNK7WebCore11RoundedRect12isRenderableEv(i13) | 0)) {
    break;
   }
   __ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE(i29, i13);
  }
 } while (0);
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i9, i29, 1);
 do {
  if (+HEAPF64[i9 >> 3] == +1) {
   if (+HEAPF64[i9 + 8 >> 3] != +0) {
    i69 = 1;
    break;
   }
   if (+HEAPF64[i9 + 16 >> 3] != +0) {
    i69 = 1;
    break;
   }
   d34 = +HEAPF64[i9 + 24 >> 3];
   if (d34 == +1) {
    i69 = 0;
    break;
   }
   i69 = d34 != +-1;
  } else {
   i69 = 1;
  }
 } while (0);
 i9 = i69 | (i52 | 0) == 1;
 if (i31) {
  __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i27, i4, i3, i6, i7);
 } else {
  _memcpy(i27 | 0, i13 | 0, 48) | 0;
 }
 i3 = (HEAP32[i13 + 4 >> 2] | 0) - (HEAP32[i27 + 4 >> 2] | 0) | 0;
 HEAP32[i28 >> 2] = (HEAP32[i13 >> 2] | 0) - (HEAP32[i27 >> 2] | 0);
 HEAP32[i28 + 4 >> 2] = i3;
 if (i49) {
  __ZN7WebCore20RenderBoxModelObject27paintTranslucentBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbb(i1, i29, i4, i12, i27, i28, i30, i55, i5, i6, i7, i9);
 } else {
  __ZN7WebCore20RenderBoxModelObject16paintBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i29, i4, i12, i27, i28, i30, i55, i5, i6, i7, i9, 0);
 }
 if (i24) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i29);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, d103 = +0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, d121 = +0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 528 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i8 + 64 | 0;
 i12 = i8 + 72 | 0;
 i13 = i8 + 80 | 0;
 i14 = i8 + 88 | 0;
 i15 = i8 + 136 | 0;
 i16 = i8 + 152 | 0;
 i17 = i8 + 160 | 0;
 i18 = i8 + 168 | 0;
 i19 = i8 + 216 | 0;
 i20 = i8 + 264 | 0;
 i21 = i8 + 280 | 0;
 i22 = i8 + 296 | 0;
 i23 = i8 + 304 | 0;
 i24 = i8 + 312 | 0;
 i25 = i8 + 328 | 0;
 i26 = i8 + 376 | 0;
 i27 = i8 + 392 | 0;
 i28 = i8 + 400 | 0;
 i29 = i8 + 416 | 0;
 i30 = i8 + 432 | 0;
 i31 = i8 + 440 | 0;
 i32 = i8 + 456 | 0;
 i33 = i8 + 504 | 0;
 i34 = i8 + 512 | 0;
 i35 = i8 + 520 | 0;
 i36 = HEAP32[i2 >> 2] | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i36) | 0) {
  STACKTOP = i8;
  return;
 }
 i37 = i4 + 20 | 0;
 if ((HEAP32[(HEAP32[i37 >> 2] | 0) + 100 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((i5 | 0) == 1) {
  __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i10, i4, i3, i6, i7);
 } else {
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i10, i4, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i6, i7);
 }
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 i38 = i1 + 136 | 0;
 do {
  if ((HEAP8[i1 + 141 | 0] | 0) == 10) {
   i39 = 1;
  } else {
   if ((HEAP8[i1 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i38 >> 2] | 0) != 0) {
     i39 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i38 >> 2] != +0) {
     i39 = 1;
     break;
    }
   }
   i40 = i1 + 152 | 0;
   if ((HEAP8[i1 + 157 | 0] | 0) == 10) {
    i39 = 1;
    break;
   }
   if ((HEAP8[i1 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i40 >> 2] | 0) != 0) {
     i39 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i40 >> 2] != +0) {
     i39 = 1;
     break;
    }
   }
   i40 = i1 + 168 | 0;
   if ((HEAP8[i1 + 173 | 0] | 0) == 10) {
    i39 = 1;
    break;
   }
   if ((HEAP8[i1 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i40 >> 2] | 0) != 0) {
     i39 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i40 >> 2] != +0) {
     i39 = 1;
     break;
    }
   }
   i40 = i1 + 184 | 0;
   if ((HEAP8[i1 + 189 | 0] | 0) == 10) {
    i39 = 1;
    break;
   }
   if ((HEAP8[i1 + 190 | 0] & 1) == 0) {
    i39 = (HEAP32[i40 >> 2] | 0) != 0;
    break;
   } else {
    i39 = +HEAPF32[i40 >> 2] != +0;
    break;
   }
  }
 } while (0);
 i1 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, i4, 23);
 if ((HEAP8[i11 + 4 | 0] & 1) == 0) {
  i41 = 0;
 } else {
  __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i12, i4, 23);
  i41 = (HEAP32[i12 >> 2] & -16777216 | 0) == -16777216;
 }
 i12 = HEAP32[(HEAP32[i37 >> 2] | 0) + 100 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i37 = i13 | 0;
 i11 = i13 + 4 | 0;
 i38 = i14;
 i40 = i10;
 i42 = i14 | 0;
 i43 = i14 + 8 | 0;
 i44 = i14 + 4 | 0;
 i45 = i14 + 12 | 0;
 i46 = i15;
 i47 = i15 | 0;
 i48 = i15 + 8 | 0;
 i49 = i15 + 4 | 0;
 i50 = i15 + 12 | 0;
 i51 = i3 + 8 | 0;
 i3 = i4 + 24 | 0;
 i4 = i18;
 i52 = i18 + 8 | 0;
 i53 = i10 + 16 | 0;
 i54 = i19 + 16 | 0;
 i55 = i2 + 4 | 0;
 i56 = i20 | 0;
 i57 = i20 + 4 | 0;
 i58 = i2 + 12 | 0;
 i2 = i20 + 8 | 0;
 i59 = i20 + 12 | 0;
 i60 = i14 | 0;
 i61 = i22 | 0;
 i62 = i22 + 4 | 0;
 i63 = i14 + 16 | 0;
 i64 = i23 | 0;
 i65 = i23 + 4 | 0;
 i66 = i18 + 12 | 0;
 i67 = i24;
 i68 = i25 | 0;
 i69 = i24 | 0;
 i70 = i24 + 8 | 0;
 i71 = i24 + 4 | 0;
 i72 = i24 + 12 | 0;
 i73 = i25 + 24 | 0;
 i74 = i25 + 8 | 0;
 i75 = i25 + 16 | 0;
 i76 = i27 | 0;
 i77 = i27 + 4 | 0;
 i78 = i10 | 0;
 i79 = i28;
 i80 = i28 | 0;
 i81 = i28 + 8 | 0;
 i82 = i28 + 4 | 0;
 i83 = i28 + 12 | 0;
 i84 = i30 | 0;
 i85 = i30 + 4 | 0;
 i86 = i10 | 0;
 i87 = i10 + 4 | 0;
 i88 = i10 + 8 | 0;
 i89 = i10 + 12 | 0;
 i90 = i9 | 0;
 i91 = i9 + 4 | 0;
 i92 = i9 + 8 | 0;
 i93 = i9 + 12 | 0;
 i94 = i31 | 0;
 i95 = i31 + 4 | 0;
 i96 = i31 + 8 | 0;
 i97 = i31 + 12 | 0;
 i98 = i32 + 16 | 0;
 i99 = i12;
 while (1) {
  i12 = i99 + 24 | 0;
  do {
   if ((HEAP32[i12 >> 2] | 0) == (i5 | 0)) {
    i100 = HEAP32[i99 >> 2] | 0;
    i101 = HEAP32[i99 + 4 >> 2] | 0;
    HEAP32[i37 >> 2] = i100;
    HEAP32[i11 >> 2] = i101;
    i102 = HEAP32[i99 + 8 >> 2] | 0;
    d103 = +(i102 | 0);
    i104 = ~~+Math_ceil(d103 * 1.399999976158142);
    i105 = HEAP32[i99 + 12 >> 2] | 0;
    if ((i100 | 0) == 0) {
     if ((i102 | i101 | i105 | 0) == 0) {
      break;
     }
    }
    i102 = i99 + 16 | 0;
    if ((HEAP32[i12 >> 2] | 0) != 0) {
     HEAP32[i79 >> 2] = HEAP32[i40 >> 2];
     HEAP32[i79 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
     HEAP32[i79 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
     HEAP32[i79 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
     i106 = -i105 | 0;
     i107 = (HEAP32[i80 >> 2] | 0) + i105 | 0;
     HEAP32[i80 >> 2] = i107;
     i108 = i106 << 1;
     i109 = (HEAP32[i81 >> 2] | 0) + i108 | 0;
     HEAP32[i81 >> 2] = i109;
     i110 = (HEAP32[i82 >> 2] | 0) + i105 | 0;
     HEAP32[i82 >> 2] = i110;
     i111 = (HEAP32[i83 >> 2] | 0) + i108 | 0;
     HEAP32[i83 >> 2] = i111;
     if ((i109 | 0) < 1 | (i111 | 0) < 1) {
      if (i39) {
       __ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceENS_9BlendModeE(i36, i10, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, 0);
       break;
      } else {
       __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i29, i78);
       __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i36, i29, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
       break;
      }
     }
     do {
      if (i6) {
       i112 = i111;
       i113 = i109;
      } else {
       if ((i1 | 0) == 3 | (i1 | 0) == 0) {
        i114 = (i100 | 0) < 0;
        HEAP32[i80 >> 2] = i107 - i104 + (i114 ? 0 : -i100 | 0);
        i115 = i109 + i104 + (i114 ? 0 : i100) | 0;
        HEAP32[i81 >> 2] = i115;
        i112 = i111;
        i113 = i115;
        break;
       } else {
        i115 = (i101 | 0) < 0;
        HEAP32[i82 >> 2] = i110 - i104 + (i115 ? 0 : -i101 | 0);
        i114 = i111 + i104 + (i115 ? 0 : i101) | 0;
        HEAP32[i83 >> 2] = i114;
        i112 = i114;
        i113 = i109;
        break;
       }
      }
     } while (0);
     do {
      if (!i7) {
       if ((i1 | 0) == 3 | (i1 | 0) == 0) {
        HEAP32[i81 >> 2] = i113 + i104 + ((i100 | 0) > 0 ? 0 : -i100 | 0);
        break;
       } else {
        HEAP32[i83 >> 2] = i112 + i104 + ((i101 | 0) > 0 ? 0 : -i101 | 0);
        break;
       }
      }
     } while (0);
     i109 = HEAP32[i102 >> 2] | 0;
     HEAP32[i84 >> 2] = __ZN7WebCore8makeRGBAEiiii(i109 >>> 16 & 255, i109 >>> 8 & 255, i109 & 255, 255) | 0;
     HEAP8[i85] = 1;
     i109 = HEAP32[i37 >> 2] | 0;
     i111 = HEAP32[i11 >> 2] | 0;
     i110 = (HEAP32[i86 >> 2] | 0) - i104 | 0;
     i107 = i104 << 1;
     i114 = (HEAP32[i88 >> 2] | 0) + i107 | 0;
     i115 = (HEAP32[i87 >> 2] | 0) - i104 | 0;
     i116 = (HEAP32[i89 >> 2] | 0) + i107 | 0;
     if ((i105 | 0) < 0) {
      i117 = i110 + i105 | 0;
      i118 = i115 + i105 | 0;
      i119 = i114 + i108 | 0;
      i120 = i116 + i108 | 0;
     } else {
      i117 = i110;
      i118 = i115;
      i119 = i114;
      i120 = i116;
     }
     HEAP32[i92 >> 2] = i119;
     HEAP32[i93 >> 2] = i120;
     HEAP32[i90 >> 2] = i117 - i109;
     HEAP32[i91 >> 2] = i118 - i111;
     HEAP32[i94 >> 2] = i117;
     HEAP32[i95 >> 2] = i118;
     HEAP32[i96 >> 2] = i119;
     HEAP32[i97 >> 2] = i120;
     __ZN7WebCore7IntRect5uniteERKS0_(i31, i9);
     __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i32, i28, i53);
     __ZN7WebCore15GraphicsContext4saveEv(i36);
     if (i39) {
      __ZN7WebCore4PathC1Ev(i33);
      __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i33, i10);
      __ZN7WebCore15GraphicsContext4clipERKNS_4PathENS_8WindRuleE(i36, i33, 1);
      __ZN7WebCore11RoundedRect5Radii6expandEiiii(i98, i106, i106, i106, i106);
      __ZN7WebCore4PathD1Ev(i33);
     } else {
      __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i36, i78);
     }
     i111 = HEAP32[i37 >> 2] | 0;
     i109 = i104 + 1 - (i105 << 1) + (HEAP32[i51 >> 2] << 1) + ((i111 | 0) > 0 ? i111 : 0) | 0;
     __ZN7WebCore15GraphicsContext9translateEff(i36, +(i109 | 0), +0);
     HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) - i109;
     if ((HEAP8[i99 + 28 | 0] & 1) == 0) {
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i35, i13);
      __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i36, i35, d103, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     } else {
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i34, i13);
      __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i36, i34, d103, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     }
     __ZN7WebCore15GraphicsContext23fillRectWithRoundedHoleERKNS_7IntRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceE(i36, i31, i32, i30, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     __ZN7WebCore15GraphicsContext7restoreEv(i36);
     break;
    }
    _memcpy(i38 | 0, i40 | 0, 48) | 0;
    i109 = (HEAP32[i42 >> 2] | 0) - i105 | 0;
    HEAP32[i42 >> 2] = i109;
    i111 = i105 << 1;
    i116 = (HEAP32[i43 >> 2] | 0) + i111 | 0;
    HEAP32[i43 >> 2] = i116;
    HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) - i105;
    i114 = (HEAP32[i45 >> 2] | 0) + i111 | 0;
    HEAP32[i45 >> 2] = i114;
    if ((i116 | 0) < 1 | (i114 | 0) < 1) {
     break;
    }
    HEAP32[i46 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i46 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
    HEAP32[i46 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
    HEAP32[i46 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
    i114 = i104 + i105 | 0;
    i116 = (HEAP32[i47 >> 2] | 0) - i114 | 0;
    i115 = i114 << 1;
    HEAP32[i48 >> 2] = (HEAP32[i48 >> 2] | 0) + i115;
    i110 = (HEAP32[i49 >> 2] | 0) - i114 | 0;
    HEAP32[i50 >> 2] = (HEAP32[i50 >> 2] | 0) + i115;
    HEAP32[i47 >> 2] = i116 + i100;
    HEAP32[i49 >> 2] = i110 + i101;
    __ZN7WebCore15GraphicsContext4saveEv(i36);
    __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i36, i15);
    i110 = HEAP32[i37 >> 2] | 0;
    i116 = i104 + 1 + i111 + (HEAP32[i51 >> 2] | 0) + ((i110 | 0) > 0 ? i110 : 0) | 0;
    HEAP32[i37 >> 2] = i110 - i116;
    HEAP32[i42 >> 2] = i116 + i109;
    if ((HEAP8[i99 + 28 | 0] & 1) == 0) {
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i17, i13);
     __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i36, i17, d103, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
    } else {
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i13);
     __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i36, i16, d103, i102, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
    }
    do {
     if (i39) {
      _memcpy(i4 | 0, i40 | 0, 48) | 0;
      if (i41) {
       __ZN7WebCore11RoundedRect16inflateWithRadiiEi(i18, -1);
      }
      do {
       if ((HEAP32[i52 >> 2] | 0) >= 1) {
        if ((HEAP32[i66 >> 2] | 0) < 1) {
         break;
        }
        __ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE(i36, i18);
       }
      } while (0);
      __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i19, i15, i53);
      i109 = (i104 << 1) + i105 | 0;
      __ZN7WebCore11RoundedRect5Radii6expandEiiii(i54, i109, i109, i109, i109);
      i109 = HEAP32[i55 + 4 >> 2] | 0;
      HEAP32[i56 >> 2] = HEAP32[i55 >> 2];
      HEAP32[i57 >> 2] = i109;
      i109 = HEAP32[i58 + 4 >> 2] | 0;
      HEAP32[i2 >> 2] = HEAP32[i58 >> 2];
      HEAP32[i59 >> 2] = i109;
      if (__ZN7WebCoreL20allCornersClippedOutERKNS_11RoundedRectERKNS_10LayoutRectE(i19, i20) | 0) {
       __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i21, i60);
       HEAP32[i61 >> 2] = -16777216;
       HEAP8[i62] = 1;
       __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i36, i21, i22, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
       break;
      }
      __ZN7WebCore11RoundedRect5Radii6expandEiiii(i63, i105, i105, i105, i105);
      if (!(__ZNK7WebCore11RoundedRect12isRenderableEv(i14) | 0)) {
       __ZN7WebCore11RoundedRect11adjustRadiiEv(i14);
      }
      HEAP32[i64 >> 2] = -16777216;
      HEAP8[i65] = 1;
      __ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceENS_9BlendModeE(i36, i14, i23, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1, 0);
     } else {
      HEAP32[i67 >> 2] = HEAP32[i40 >> 2];
      HEAP32[i67 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
      HEAP32[i67 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
      HEAP32[i67 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
      L84 : do {
       if (i41) {
        __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i25, i36, 1);
        do {
         if (+HEAPF64[i68 >> 3] == +1) {
          d121 = +HEAPF64[i73 >> 3];
          if (d121 != +1 & d121 != +-1) {
           break;
          }
          if (+HEAPF64[i74 >> 3] != +0) {
           break;
          }
          if (+HEAPF64[i75 >> 3] == +0) {
           break L84;
          }
         }
        } while (0);
        HEAP32[i69 >> 2] = (HEAP32[i69 >> 2] | 0) + 1;
        HEAP32[i70 >> 2] = (HEAP32[i70 >> 2] | 0) - 2;
        HEAP32[i71 >> 2] = (HEAP32[i71 >> 2] | 0) + 1;
        HEAP32[i72 >> 2] = (HEAP32[i72 >> 2] | 0) - 2;
       }
      } while (0);
      do {
       if ((HEAP32[i70 >> 2] | 0) >= 1) {
        if ((HEAP32[i72 >> 2] | 0) < 1) {
         break;
        }
        __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i36, i24);
       }
      } while (0);
      __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i26, i60);
      HEAP32[i76 >> 2] = -16777216;
      HEAP8[i77] = 1;
      __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i36, i26, i27, (HEAP32[(HEAP32[i3 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i36);
   }
  } while (0);
  i99 = HEAP32[i99 + 32 >> 2] | 0;
  if ((i99 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZN7WebCore20RenderBoxModelObject21clipBorderSidePolygonEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEbb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, d70 = +0, d71 = +0, i72 = 0, d73 = +0, d74 = +0, d75 = +0, d76 = +0, i77 = 0, i78 = 0, d79 = +0, i80 = 0, i81 = 0, d82 = +0, i83 = 0, d84 = +0, i85 = 0, d86 = +0, d87 = +0, d88 = +0, i89 = 0, d90 = +0, i91 = 0, i92 = 0, i93 = 0, i94 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 480 | 0;
 i8 = i1 | 0;
 i9 = i1 + 8 | 0;
 i10 = i1 + 16 | 0;
 i11 = i1 + 24 | 0;
 i12 = i1 + 32 | 0;
 i13 = i1 + 40 | 0;
 i14 = i1 + 48 | 0;
 i15 = i1 + 56 | 0;
 i16 = i1 + 64 | 0;
 i17 = i1 + 72 | 0;
 i18 = i1 + 80 | 0;
 i19 = i1 + 88 | 0;
 i20 = i1 + 96 | 0;
 i21 = i1 + 104 | 0;
 i22 = i1 + 112 | 0;
 i23 = i1 + 120 | 0;
 i24 = i1 + 128 | 0;
 i25 = i1 + 136 | 0;
 i26 = i1 + 144 | 0;
 i27 = i1 + 152 | 0;
 i28 = i1 + 160 | 0;
 i29 = i1 + 168 | 0;
 i30 = i1 + 176 | 0;
 i31 = i1 + 184 | 0;
 i32 = i1 + 192 | 0;
 i33 = i1 + 200 | 0;
 i34 = i1 + 208 | 0;
 i35 = i1 + 216 | 0;
 i36 = i1 + 224 | 0;
 i37 = i1 + 232 | 0;
 i38 = i1 + 240 | 0;
 i39 = i1 + 248 | 0;
 i40 = i1 + 256 | 0;
 i41 = i1 + 288 | 0;
 i42 = i1 + 296 | 0;
 i43 = i1 + 304 | 0;
 i44 = i1 + 312 | 0;
 i45 = i1 + 320 | 0;
 i46 = i1 + 328 | 0;
 i47 = i1 + 336 | 0;
 i48 = i1 + 344 | 0;
 i49 = i1 + 352 | 0;
 i50 = i1 + 360 | 0;
 i51 = i1 + 368 | 0;
 i52 = i1 + 376 | 0;
 i53 = i1 + 384 | 0;
 i54 = i1 + 392 | 0;
 i55 = i1 + 400 | 0;
 i56 = i1 + 408 | 0;
 i57 = i1 + 416 | 0;
 i58 = i1 + 448 | 0;
 i59 = i40;
 HEAPF32[i40 >> 2] = +0;
 HEAPF32[i59 + 4 >> 2] = +0;
 i60 = i40 + 8 | 0;
 HEAPF32[i60 >> 2] = +0;
 HEAPF32[i60 + 4 >> 2] = +0;
 i60 = i40 + 16 | 0;
 HEAPF32[i60 >> 2] = +0;
 HEAPF32[i60 + 4 >> 2] = +0;
 i60 = i40 + 24 | 0;
 HEAPF32[i60 >> 2] = +0;
 HEAPF32[i60 + 4 >> 2] = +0;
 i60 = i40 | 0;
 i61 = i57 | 0;
 i62 = i58 | 0;
 i63 = i3;
 i64 = HEAP32[i63 >> 2] | 0;
 i65 = HEAP32[i63 + 4 >> 2] | 0;
 i63 = i3 + 8 | 0;
 i3 = HEAP32[i63 >> 2] | 0;
 i66 = HEAP32[i63 + 4 >> 2] | 0;
 i63 = i4;
 i67 = i4 + 8 | 0;
 i68 = HEAP32[i67 >> 2] | 0;
 i69 = HEAP32[i67 + 4 >> 2] | 0;
 i67 = HEAP32[i63 >> 2] | 0;
 d70 = +(i67 | 0);
 d71 = d70 + +(i68 | 0) * +.5;
 i72 = HEAP32[i63 + 4 >> 2] | 0;
 d73 = +(i72 | 0);
 d74 = d73 + +(i69 | 0) * +.5;
 do {
  if ((i5 | 0) == 0) {
   i63 = i64;
   d75 = +(i63 | 0);
   d76 = +(i65 | 0);
   i77 = (HEAPF32[tempDoublePtr >> 2] = d75, HEAP32[tempDoublePtr >> 2] | 0);
   i78 = 0;
   d79 = +d76;
   HEAP32[i60 >> 2] = i78 | i77;
   HEAPF32[i60 + 4 >> 2] = d79;
   i77 = i40 + 8 | 0;
   i80 = (HEAPF32[tempDoublePtr >> 2] = d70, HEAP32[tempDoublePtr >> 2] | 0);
   i81 = 0;
   d82 = +d73;
   HEAP32[i77 >> 2] = i81 | i80;
   HEAPF32[i77 + 4 >> 2] = d82;
   i80 = i40 + 16 | 0;
   i83 = i80;
   d84 = +(i68 + i67 | 0);
   HEAP32[i80 >> 2] = i81 | (HEAPF32[tempDoublePtr >> 2] = d84, HEAP32[tempDoublePtr >> 2] | 0);
   HEAPF32[i80 + 4 >> 2] = d82;
   i80 = i40 + 24 | 0;
   d82 = +(i3 + i63 | 0);
   HEAP32[i80 >> 2] = i78 | (HEAPF32[tempDoublePtr >> 2] = d82, HEAP32[tempDoublePtr >> 2] | 0);
   HEAPF32[i80 + 4 >> 2] = d79;
   if ((HEAP32[i4 + 16 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 20 >> 2] | 0) != 0) {
     i85 = 4;
    }
   } else {
    i85 = 4;
   }
   do {
    if ((i85 | 0) == 4) {
     i80 = i77;
     HEAPF32[i41 >> 2] = d75;
     HEAPF32[i41 + 4 >> 2] = d76;
     HEAPF32[i42 >> 2] = d70;
     HEAPF32[i42 + 4 >> 2] = d73;
     if (+Math_abs(+(d73 - d76)) * +Math_abs(+(d71 - d75)) < +Math_abs(+(d70 - d75)) * +Math_abs(+(d74 - d76))) {
      HEAPF32[i12 >> 2] = d71;
      HEAPF32[i12 + 4 >> 2] = +0;
      HEAPF32[i13 >> 2] = d71;
      HEAPF32[i13 + 4 >> 2] = +100;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i41, i42, i12, i13, i80) | 0;
      break;
     } else {
      HEAPF32[i14 >> 2] = +0;
      HEAPF32[i14 + 4 >> 2] = d74;
      HEAPF32[i15 >> 2] = +100;
      HEAPF32[i15 + 4 >> 2] = d74;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i41, i42, i14, i15, i80) | 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i4 + 24 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 28 >> 2] | 0) == 0) {
     break;
    }
   }
   HEAPF32[i43 >> 2] = d82;
   HEAPF32[i43 + 4 >> 2] = d76;
   HEAPF32[i44 >> 2] = d84;
   HEAPF32[i44 + 4 >> 2] = d73;
   if (+Math_abs(+(d73 - d76)) * +Math_abs(+(d71 - d82)) < +Math_abs(+(d84 - d82)) * +Math_abs(+(d74 - d76))) {
    HEAPF32[i8 >> 2] = d71;
    HEAPF32[i8 + 4 >> 2] = +0;
    HEAPF32[i9 >> 2] = d71;
    HEAPF32[i9 + 4 >> 2] = +100;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i43, i44, i8, i9, i83) | 0;
    break;
   } else {
    HEAPF32[i10 >> 2] = +0;
    HEAPF32[i10 + 4 >> 2] = d74;
    HEAPF32[i11 >> 2] = +100;
    HEAPF32[i11 + 4 >> 2] = d74;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i43, i44, i10, i11, i83) | 0;
    break;
   }
  } else if ((i5 | 0) == 2) {
   i77 = i64;
   d75 = +(i77 | 0);
   d79 = +(i66 + i65 | 0);
   i80 = (HEAPF32[tempDoublePtr >> 2] = d75, HEAP32[tempDoublePtr >> 2] | 0);
   i78 = 0;
   d86 = +d79;
   HEAP32[i60 >> 2] = i78 | i80;
   HEAPF32[i60 + 4 >> 2] = d86;
   i80 = i40 + 8 | 0;
   d87 = +(i69 + i72 | 0);
   i63 = (HEAPF32[tempDoublePtr >> 2] = d70, HEAP32[tempDoublePtr >> 2] | 0);
   i81 = 0;
   d88 = +d87;
   HEAP32[i80 >> 2] = i81 | i63;
   HEAPF32[i80 + 4 >> 2] = d88;
   i63 = i40 + 16 | 0;
   i89 = i63;
   d90 = +(i68 + i67 | 0);
   HEAP32[i63 >> 2] = i81 | (HEAPF32[tempDoublePtr >> 2] = d90, HEAP32[tempDoublePtr >> 2] | 0);
   HEAPF32[i63 + 4 >> 2] = d88;
   i63 = i40 + 24 | 0;
   d88 = +(i3 + i77 | 0);
   HEAP32[i63 >> 2] = i78 | (HEAPF32[tempDoublePtr >> 2] = d88, HEAP32[tempDoublePtr >> 2] | 0);
   HEAPF32[i63 + 4 >> 2] = d86;
   if ((HEAP32[i4 + 32 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 36 >> 2] | 0) != 0) {
     i85 = 24;
    }
   } else {
    i85 = 24;
   }
   do {
    if ((i85 | 0) == 24) {
     i63 = i80;
     HEAPF32[i49 >> 2] = d75;
     HEAPF32[i49 + 4 >> 2] = d79;
     HEAPF32[i50 >> 2] = d70;
     HEAPF32[i50 + 4 >> 2] = d87;
     if (+Math_abs(+(d87 - d79)) * +Math_abs(+(d71 - d75)) < +Math_abs(+(d70 - d75)) * +Math_abs(+(d74 - d79))) {
      HEAPF32[i24 >> 2] = d71;
      HEAPF32[i24 + 4 >> 2] = +0;
      HEAPF32[i25 >> 2] = d71;
      HEAPF32[i25 + 4 >> 2] = +100;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i49, i50, i24, i25, i63) | 0;
      break;
     } else {
      HEAPF32[i26 >> 2] = +0;
      HEAPF32[i26 + 4 >> 2] = d74;
      HEAPF32[i27 >> 2] = +100;
      HEAPF32[i27 + 4 >> 2] = d74;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i49, i50, i26, i27, i63) | 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i4 + 40 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 44 >> 2] | 0) == 0) {
     break;
    }
   }
   HEAPF32[i51 >> 2] = d88;
   HEAPF32[i51 + 4 >> 2] = d79;
   HEAPF32[i52 >> 2] = d90;
   HEAPF32[i52 + 4 >> 2] = d87;
   if (+Math_abs(+(d87 - d79)) * +Math_abs(+(d71 - d88)) < +Math_abs(+(d90 - d88)) * +Math_abs(+(d74 - d79))) {
    HEAPF32[i28 >> 2] = d71;
    HEAPF32[i28 + 4 >> 2] = +0;
    HEAPF32[i29 >> 2] = d71;
    HEAPF32[i29 + 4 >> 2] = +100;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i51, i52, i28, i29, i89) | 0;
    break;
   } else {
    HEAPF32[i30 >> 2] = +0;
    HEAPF32[i30 + 4 >> 2] = d74;
    HEAPF32[i31 >> 2] = +100;
    HEAPF32[i31 + 4 >> 2] = d74;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i51, i52, i30, i31, i89) | 0;
    break;
   }
  } else if ((i5 | 0) == 3) {
   i80 = i65;
   d75 = +(i64 | 0);
   d76 = +(i80 | 0);
   i83 = (HEAPF32[tempDoublePtr >> 2] = d75, HEAP32[tempDoublePtr >> 2] | 0);
   i63 = i83;
   i83 = 0;
   d82 = +d76;
   HEAP32[i60 >> 2] = i63;
   HEAPF32[i60 + 4 >> 2] = d82;
   i83 = i40 + 8 | 0;
   i78 = (HEAPF32[tempDoublePtr >> 2] = d70, HEAP32[tempDoublePtr >> 2] | 0);
   i77 = i78;
   i78 = 0;
   d82 = +d73;
   HEAP32[i83 >> 2] = i77;
   HEAPF32[i83 + 4 >> 2] = d82;
   i78 = i40 + 16 | 0;
   i81 = i78;
   d82 = +(i69 + i72 | 0);
   d84 = +d82;
   HEAP32[i78 >> 2] = i77;
   HEAPF32[i78 + 4 >> 2] = d84;
   i78 = i40 + 24 | 0;
   d84 = +(i66 + i80 | 0);
   d86 = +d84;
   HEAP32[i78 >> 2] = i63;
   HEAPF32[i78 + 4 >> 2] = d86;
   if ((HEAP32[i4 + 16 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 20 >> 2] | 0) != 0) {
     i85 = 14;
    }
   } else {
    i85 = 14;
   }
   do {
    if ((i85 | 0) == 14) {
     i78 = i83;
     HEAPF32[i45 >> 2] = d75;
     HEAPF32[i45 + 4 >> 2] = d76;
     HEAPF32[i46 >> 2] = d70;
     HEAPF32[i46 + 4 >> 2] = d73;
     if (+Math_abs(+(d73 - d76)) * +Math_abs(+(d71 - d75)) < +Math_abs(+(d70 - d75)) * +Math_abs(+(d74 - d76))) {
      HEAPF32[i16 >> 2] = d71;
      HEAPF32[i16 + 4 >> 2] = +0;
      HEAPF32[i17 >> 2] = d71;
      HEAPF32[i17 + 4 >> 2] = +100;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i45, i46, i16, i17, i78) | 0;
      break;
     } else {
      HEAPF32[i18 >> 2] = +0;
      HEAPF32[i18 + 4 >> 2] = d74;
      HEAPF32[i19 >> 2] = +100;
      HEAPF32[i19 + 4 >> 2] = d74;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i45, i46, i18, i19, i78) | 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i4 + 32 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 36 >> 2] | 0) == 0) {
     break;
    }
   }
   HEAPF32[i47 >> 2] = d75;
   HEAPF32[i47 + 4 >> 2] = d84;
   HEAPF32[i48 >> 2] = d70;
   HEAPF32[i48 + 4 >> 2] = d82;
   if (+Math_abs(+(d82 - d84)) * +Math_abs(+(d71 - d75)) < +Math_abs(+(d70 - d75)) * +Math_abs(+(d74 - d84))) {
    HEAPF32[i20 >> 2] = d71;
    HEAPF32[i20 + 4 >> 2] = +0;
    HEAPF32[i21 >> 2] = d71;
    HEAPF32[i21 + 4 >> 2] = +100;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i47, i48, i20, i21, i81) | 0;
    break;
   } else {
    HEAPF32[i22 >> 2] = +0;
    HEAPF32[i22 + 4 >> 2] = d74;
    HEAPF32[i23 >> 2] = +100;
    HEAPF32[i23 + 4 >> 2] = d74;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i47, i48, i22, i23, i81) | 0;
    break;
   }
  } else if ((i5 | 0) == 1) {
   i83 = i65;
   d76 = +(i3 + i64 | 0);
   d79 = +(i83 | 0);
   i89 = (HEAPF32[tempDoublePtr >> 2] = d76, HEAP32[tempDoublePtr >> 2] | 0);
   i78 = i89;
   i89 = 0;
   d88 = +d79;
   HEAP32[i60 >> 2] = i78;
   HEAPF32[i60 + 4 >> 2] = d88;
   i89 = i40 + 8 | 0;
   d88 = +(i68 + i67 | 0);
   i63 = (HEAPF32[tempDoublePtr >> 2] = d88, HEAP32[tempDoublePtr >> 2] | 0);
   i80 = i63;
   i63 = 0;
   d90 = +d73;
   HEAP32[i89 >> 2] = i80;
   HEAPF32[i89 + 4 >> 2] = d90;
   i63 = i40 + 16 | 0;
   i77 = i63;
   d90 = +(i69 + i72 | 0);
   d87 = +d90;
   HEAP32[i63 >> 2] = i80;
   HEAPF32[i63 + 4 >> 2] = d87;
   i63 = i40 + 24 | 0;
   d87 = +(i66 + i83 | 0);
   d86 = +d87;
   HEAP32[i63 >> 2] = i78;
   HEAPF32[i63 + 4 >> 2] = d86;
   if ((HEAP32[i4 + 24 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 28 >> 2] | 0) != 0) {
     i85 = 34;
    }
   } else {
    i85 = 34;
   }
   do {
    if ((i85 | 0) == 34) {
     i63 = i89;
     HEAPF32[i53 >> 2] = d76;
     HEAPF32[i53 + 4 >> 2] = d79;
     HEAPF32[i54 >> 2] = d88;
     HEAPF32[i54 + 4 >> 2] = d73;
     if (+Math_abs(+(d73 - d79)) * +Math_abs(+(d71 - d76)) < +Math_abs(+(d88 - d76)) * +Math_abs(+(d74 - d79))) {
      HEAPF32[i32 >> 2] = d71;
      HEAPF32[i32 + 4 >> 2] = +0;
      HEAPF32[i33 >> 2] = d71;
      HEAPF32[i33 + 4 >> 2] = +100;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i53, i54, i32, i33, i63) | 0;
      break;
     } else {
      HEAPF32[i34 >> 2] = +0;
      HEAPF32[i34 + 4 >> 2] = d74;
      HEAPF32[i35 >> 2] = +100;
      HEAPF32[i35 + 4 >> 2] = d74;
      __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i53, i54, i34, i35, i63) | 0;
      break;
     }
    }
   } while (0);
   if ((HEAP32[i4 + 40 >> 2] | 0) == 0) {
    if ((HEAP32[i4 + 44 >> 2] | 0) == 0) {
     break;
    }
   }
   HEAPF32[i55 >> 2] = d76;
   HEAPF32[i55 + 4 >> 2] = d87;
   HEAPF32[i56 >> 2] = d88;
   HEAPF32[i56 + 4 >> 2] = d90;
   if (+Math_abs(+(d90 - d87)) * +Math_abs(+(d71 - d76)) < +Math_abs(+(d88 - d76)) * +Math_abs(+(d74 - d87))) {
    HEAPF32[i36 >> 2] = d71;
    HEAPF32[i36 + 4 >> 2] = +0;
    HEAPF32[i37 >> 2] = d71;
    HEAPF32[i37 + 4 >> 2] = +100;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i55, i56, i36, i37, i77) | 0;
    break;
   } else {
    HEAPF32[i38 >> 2] = +0;
    HEAPF32[i38 + 4 >> 2] = d74;
    HEAPF32[i39 >> 2] = +100;
    HEAPF32[i39 + 4 >> 2] = d74;
    __ZN7WebCore16findIntersectionERKNS_10FloatPointES2_S2_S2_RS0_(i55, i56, i38, i39, i77) | 0;
    break;
   }
  }
 } while (0);
 if (!(i6 ^ i7)) {
  __ZN7WebCore15GraphicsContext17clipConvexPolygonEjPKNS_10FloatPointEb(i2, 4, i59, i6 ^ 1);
  STACKTOP = i1;
  return;
 }
 i39 = i57 + 16 | 0;
 HEAPF32[i39 >> 2] = +0;
 HEAPF32[i39 + 4 >> 2] = +0;
 i39 = i57 + 24 | 0;
 HEAPF32[i39 >> 2] = +0;
 HEAPF32[i39 + 4 >> 2] = +0;
 i39 = HEAP32[i60 + 4 >> 2] | 0;
 HEAP32[i61 >> 2] = HEAP32[i60 >> 2];
 HEAP32[i61 + 4 >> 2] = i39;
 i39 = i57 + 8 | 0;
 i61 = i40 + 8 | 0;
 i38 = HEAP32[i61 + 4 >> 2] | 0;
 HEAP32[i39 >> 2] = HEAP32[i61 >> 2];
 HEAP32[i39 + 4 >> 2] = i38;
 i38 = i57 + 16 | 0;
 if ((i5 | 0) == 2 | (i5 | 0) == 0) {
  i91 = i40 + 24 | 0;
  i92 = i40 + 16 | 0;
 } else {
  i91 = i40 + 16 | 0;
  i92 = i40 + 24 | 0;
 }
 d74 = +(+HEAPF32[i91 >> 2]);
 d71 = +(+HEAPF32[i92 + 4 >> 2]);
 HEAPF32[i38 >> 2] = d74;
 HEAPF32[i38 + 4 >> 2] = d71;
 i38 = i57 + 24 | 0;
 i92 = i40 + 24 | 0;
 i91 = HEAP32[i92 + 4 >> 2] | 0;
 HEAP32[i38 >> 2] = HEAP32[i92 >> 2];
 HEAP32[i38 + 4 >> 2] = i91;
 __ZN7WebCore15GraphicsContext17clipConvexPolygonEjPKNS_10FloatPointEb(i2, 4, i57, i6 ^ 1);
 i6 = i58 + 8 | 0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 i6 = i58 + 16 | 0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 i6 = i58 + 24 | 0;
 HEAPF32[i6 >> 2] = +0;
 HEAPF32[i6 + 4 >> 2] = +0;
 i6 = HEAP32[i60 + 4 >> 2] | 0;
 HEAP32[i62 >> 2] = HEAP32[i60 >> 2];
 HEAP32[i62 + 4 >> 2] = i6;
 i6 = i58 + 8 | 0;
 if ((i5 | 0) == 2 | (i5 | 0) == 0) {
  i93 = i40;
  i94 = i61;
 } else {
  i93 = i61;
  i94 = i59;
 }
 d71 = +(+HEAPF32[i93 >> 2]);
 d74 = +(+HEAPF32[i94 + 4 >> 2]);
 HEAPF32[i6 >> 2] = d71;
 HEAPF32[i6 + 4 >> 2] = d74;
 i6 = i58 + 16 | 0;
 i94 = i40 + 16 | 0;
 i40 = HEAP32[i94 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i94 >> 2];
 HEAP32[i6 + 4 >> 2] = i40;
 i40 = i58 + 24 | 0;
 i6 = HEAP32[i92 + 4 >> 2] | 0;
 HEAP32[i40 >> 2] = HEAP32[i92 >> 2];
 HEAP32[i40 + 4 >> 2] = i6;
 __ZN7WebCore15GraphicsContext17clipConvexPolygonEjPKNS_10FloatPointEb(i2, 4, i58, i7 ^ 1);
 STACKTOP = i1;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject32computeStickyPositionConstraintsERNS_33StickyPositionViewportConstraintsERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, d81 = +0, d82 = +0, d83 = +0, d84 = +0, d85 = +0, d86 = +0, d87 = +0, d88 = +0, i89 = 0, d90 = +0, d91 = +0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 216 | 0;
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
 i26 = i4 + 168 | 0;
 i27 = i4 + 176 | 0;
 i28 = i4 + 184 | 0;
 i29 = i4 + 192 | 0;
 i30 = i4 + 200 | 0;
 i31 = i30 | 0;
 i32 = i30;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i34 = i33 | 0;
 i35 = i33;
 i36 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i42 = i41 | 0;
 i43 = i41;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i45 = i44 | 0;
 i46 = i44;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i49 = i48 | 0;
 i50 = i48;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i55 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i58 = i2 + 32 | 0;
 i59 = i3;
 HEAP32[i58 >> 2] = HEAP32[i59 >> 2];
 HEAP32[i58 + 4 >> 2] = HEAP32[i59 + 4 >> 2];
 HEAP32[i58 + 8 >> 2] = HEAP32[i59 + 8 >> 2];
 HEAP32[i58 + 12 >> 2] = HEAP32[i59 + 12 >> 2];
 i59 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 i58 = __ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE(HEAP32[i1 + 40 >> 2] | 0, 1) | 0;
 i60 = (i58 | 0) != 0;
 do {
  if (i60) {
   i61 = HEAP32[i58 + 32 >> 2] | 0;
   i62 = i59 | 0;
   if ((i62 | 0) != (i61 | 0)) {
    i63 = i61;
    i64 = i62;
    i65 = 4;
    break;
   }
   i62 = HEAP32[i59 + 88 >> 2] | 0;
   if ((i62 | 0) == 0) {
    i66 = i59 | 0;
    i67 = i59;
    i68 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i67 >> 2] | 0) + 744 >> 2] & 255](i66) | 0;
    i69 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i67 >> 2] | 0) + 736 >> 2] & 255](i66) | 0;
    __ZNK7WebCore9RenderBox11clientWidthEv(i9, i61);
    __ZNK7WebCore9RenderBox12clientHeightEv(i10, i61);
    i70 = i68;
    i71 = i69;
    i72 = HEAP32[i9 >> 2] | 0;
    i73 = HEAP32[i10 >> 2] | 0;
    i74 = i66;
    i75 = i67;
   } else {
    i70 = HEAP32[i62 + 4 >> 2] | 0;
    i71 = HEAP32[i62 + 8 >> 2] | 0;
    i72 = HEAP32[i62 + 12 >> 2] | 0;
    i73 = HEAP32[i62 + 16 >> 2] | 0;
    i74 = i59 | 0;
    i75 = i59;
   }
   i62 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i75 >> 2] | 0) + 744 >> 2] & 255](i74) | 0;
   i67 = i59;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 712 >> 2] & 63](i23, i74);
   i66 = HEAP32[i23 >> 2] | 0;
   i69 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i75 >> 2] | 0) + 736 >> 2] & 255](i74) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 704 >> 2] & 63](i24, i74);
   i76 = i69 + i71 + (HEAP32[i24 >> 2] | 0) | 0;
   i77 = i62 + i70 + i66 | 0;
   i78 = i72;
   i79 = i73;
   i80 = i61;
  } else {
   i63 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   i64 = i59 | 0;
   i65 = 4;
  }
 } while (0);
 if ((i65 | 0) == 4) {
  i65 = i59 | 0;
  i73 = i59;
  i72 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 744 >> 2] & 255](i65) | 0;
  i70 = i59;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 712 >> 2] & 63](i17, i65);
  i24 = (HEAP32[i17 >> 2] | 0) + i72 | 0;
  i72 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i73 >> 2] | 0) + 736 >> 2] & 255](i65) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 704 >> 2] & 63](i18, i65);
  i73 = (HEAP32[i18 >> 2] | 0) + i72 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i11, i64);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 712 >> 2] & 63](i12, i65);
  i72 = (HEAP32[i11 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 716 >> 2] & 63](i13, i65);
  i12 = i72 - (HEAP32[i13 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i14, i64);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 704 >> 2] & 63](i15, i65);
  i64 = (HEAP32[i14 >> 2] | 0) - (HEAP32[i15 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i70 >> 2] | 0) + 708 >> 2] & 63](i16, i65);
  i76 = i73;
  i77 = i24;
  i78 = i12;
  i79 = i64 - (HEAP32[i16 >> 2] | 0) | 0;
  i80 = i63;
 }
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i25, i59);
 i63 = i1 + 36 | 0;
 i16 = (HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0) + 52 | 0;
 i64 = i25 | 0;
 HEAP32[i8 >> 2] = HEAP32[i64 >> 2];
 i25 = i1 + 4 | 0;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i26, i16, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i8 = (HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0) + 44 | 0;
 HEAP32[i7 >> 2] = HEAP32[i64 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i27, i8, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i7 = (HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0) + 60 | 0;
 HEAP32[i6 >> 2] = HEAP32[i64 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i28, i7, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i6 = (HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0;
 HEAP32[i5 >> 2] = HEAP32[i64 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i29, i6, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i5 = HEAP32[i26 >> 2] | 0;
 i26 = HEAP32[i29 >> 2] | 0;
 i29 = i59 | 0;
 d81 = +(i26 + i77 | 0);
 d82 = +(i5 + i76 | 0);
 d83 = +(i78 - (HEAP32[i27 >> 2] | 0) - i26 | 0);
 d84 = +(i79 - i5 - (HEAP32[i28 >> 2] | 0) | 0);
 d85 = +d81;
 d86 = +d82;
 HEAPF32[i34 >> 2] = d85;
 HEAPF32[i34 + 4 >> 2] = d86;
 d86 = d81 + d83;
 HEAPF32[i33 + 8 >> 2] = d86;
 HEAPF32[i35 + 12 >> 2] = d82;
 d83 = d82 + d84;
 HEAPF32[i33 + 16 >> 2] = d86;
 HEAPF32[i35 + 20 >> 2] = d83;
 HEAPF32[i33 + 24 >> 2] = d81;
 HEAPF32[i35 + 28 >> 2] = d83;
 i33 = i80 | 0;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i36, i29, i35, i33, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i32, i36);
 if (i60) {
  d83 = +HEAPF32[i31 >> 2];
  d81 = +HEAPF32[i31 + 4 >> 2];
  i36 = i80 | 0;
  i32 = i80;
  i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 744 >> 2] & 255](i36) | 0;
  i34 = i80;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 712 >> 2] & 63](i37, i36);
  d86 = +((HEAP32[i37 >> 2] | 0) + i35 | 0);
  i35 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i32 >> 2] | 0) + 736 >> 2] & 255](i36) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 704 >> 2] & 63](i38, i36);
  d84 = d83 - d86;
  d86 = d81 - +((HEAP32[i38 >> 2] | 0) + i35 | 0);
  i35 = i59 | 0;
  if ((i80 | 0) == (i35 | 0)) {
   d87 = d84;
   d88 = d86;
  } else {
   i38 = (HEAP32[i58 + 16 >> 2] | 0) + (HEAP32[i58 + 116 >> 2] | 0) | 0;
   HEAP32[i40 >> 2] = (HEAP32[i58 + 12 >> 2] | 0) + (HEAP32[i58 + 112 >> 2] | 0);
   HEAP32[i40 + 4 >> 2] = i38;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i39, i40);
   d87 = d84 + +HEAPF32[i39 >> 2];
   d88 = d86 + +HEAPF32[i39 + 4 >> 2];
  }
  d86 = +d87;
  d87 = +d88;
  HEAPF32[i31 >> 2] = d86;
  HEAPF32[i31 + 4 >> 2] = d87;
  i89 = i35;
 } else {
  i89 = i59 | 0;
 }
 i35 = i2 + 48 | 0;
 i31 = i30;
 HEAP32[i35 >> 2] = HEAP32[i31 >> 2];
 HEAP32[i35 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
 HEAP32[i35 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
 HEAP32[i35 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 820 >> 2] & 63](i41, i1);
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i89, i43);
 i1 = (HEAPF32[tempDoublePtr >> 2] = +(HEAP32[i41 + 8 >> 2] | 0), HEAP32[tempDoublePtr >> 2] | 0);
 i41 = i1 | 0;
 d87 = +(+(HEAP32[i43 + 12 >> 2] | 0));
 d86 = +(HEAP32[i42 >> 2] | 0);
 d88 = +(HEAP32[i42 + 4 >> 2] | 0);
 i42 = i59 + 52 | 0;
 d84 = +(HEAP32[i42 >> 2] | 0);
 d81 = +(HEAP32[i42 + 4 >> 2] | 0);
 HEAP32[i45 >> 2] = 0;
 HEAP32[i45 + 4 >> 2] = 0;
 HEAPF32[i44 + 8 >> 2] = d84;
 HEAPF32[i46 + 12 >> 2] = +0;
 HEAPF32[i44 + 16 >> 2] = d84;
 HEAPF32[i46 + 20 >> 2] = d81;
 HEAPF32[i44 + 24 >> 2] = +0;
 HEAPF32[i46 + 28 >> 2] = d81;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i47, i29, i46, i33, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i50, i47);
 d81 = +HEAPF32[i49 >> 2];
 d84 = d86 + d81;
 d81 = d88 + +HEAPF32[i49 + 4 >> 2];
 do {
  if (i60) {
   i49 = i80 | 0;
   i47 = i80;
   i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i47 >> 2] | 0) + 744 >> 2] & 255](i49) | 0;
   i33 = i80;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 712 >> 2] & 63](i48, i49);
   d88 = +((HEAP32[i48 >> 2] | 0) + i50 | 0);
   i50 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i47 >> 2] | 0) + 736 >> 2] & 255](i49) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 704 >> 2] & 63](i51, i49);
   d86 = d84 - d88;
   d88 = d81 - +((HEAP32[i51 >> 2] | 0) + i50 | 0);
   if ((i80 | 0) == (i89 | 0)) {
    d90 = d86;
    d91 = d88;
    break;
   }
   i50 = (HEAP32[i58 + 16 >> 2] | 0) + (HEAP32[i58 + 116 >> 2] | 0) | 0;
   HEAP32[i53 >> 2] = (HEAP32[i58 + 12 >> 2] | 0) + (HEAP32[i58 + 112 >> 2] | 0);
   HEAP32[i53 + 4 >> 2] = i50;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i52, i53);
   d90 = d86 + +HEAPF32[i52 >> 2];
   d91 = d88 + +HEAPF32[i52 + 4 >> 2];
  } else {
   d90 = d84;
   d91 = d81;
  }
 } while (0);
 d81 = +d90;
 d90 = +d91;
 i52 = i2 + 64 | 0;
 HEAPF32[i52 >> 2] = d81;
 HEAPF32[i52 + 4 >> 2] = d90;
 i52 = i2 + 72 | 0;
 HEAP32[i52 >> 2] = i41;
 HEAPF32[i52 + 4 >> 2] = d87;
 i52 = HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0;
 i41 = i52 + 4 | 0;
 if ((HEAP8[i52 + 9 | 0] | 0) == 0) {
  i92 = i52;
 } else {
  d87 = +HEAPF32[i3 + 8 >> 2];
  do {
   if (d87 < +2147483647) {
    if (d87 <= +-2147483648) {
     i93 = -2147483648;
     break;
    }
    i93 = ~~d87;
   } else {
    i93 = 2147483647;
   }
  } while (0);
  HEAP32[i19 >> 2] = i93;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i54, i41, i19, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAPF32[i2 + 16 >> 2] = +(HEAP32[i54 >> 2] | 0);
  i54 = i2 + 12 | 0;
  HEAP32[i54 >> 2] = HEAP32[i54 >> 2] | 1;
  i92 = HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0;
 }
 i54 = i92 + 12 | 0;
 if ((HEAP8[i92 + 17 | 0] | 0) == 0) {
  i94 = i92;
 } else {
  d87 = +HEAPF32[i3 + 8 >> 2];
  do {
   if (d87 < +2147483647) {
    if (d87 <= +-2147483648) {
     i95 = -2147483648;
     break;
    }
    i95 = ~~d87;
   } else {
    i95 = 2147483647;
   }
  } while (0);
  HEAP32[i20 >> 2] = i95;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i55, i54, i20, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAPF32[i2 + 20 >> 2] = +(HEAP32[i55 >> 2] | 0);
  i55 = i2 + 12 | 0;
  HEAP32[i55 >> 2] = HEAP32[i55 >> 2] | 2;
  i94 = HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0;
 }
 i55 = i94 + 20 | 0;
 if ((HEAP8[i94 + 25 | 0] | 0) == 0) {
  i96 = i94;
 } else {
  d87 = +HEAPF32[i3 + 12 >> 2];
  do {
   if (d87 < +2147483647) {
    if (d87 <= +-2147483648) {
     i97 = -2147483648;
     break;
    }
    i97 = ~~d87;
   } else {
    i97 = 2147483647;
   }
  } while (0);
  HEAP32[i21 >> 2] = i97;
  __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i56, i55, i21, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
  HEAPF32[i2 + 24 >> 2] = +(HEAP32[i56 >> 2] | 0);
  i56 = i2 + 12 | 0;
  HEAP32[i56 >> 2] = HEAP32[i56 >> 2] | 4;
  i96 = HEAP32[(HEAP32[i63 >> 2] | 0) + 16 >> 2] | 0;
 }
 i63 = i96 + 28 | 0;
 if ((HEAP8[i96 + 33 | 0] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 d87 = +HEAPF32[i3 + 12 >> 2];
 do {
  if (d87 < +2147483647) {
   if (d87 <= +-2147483648) {
    i98 = -2147483648;
    break;
   }
   i98 = ~~d87;
  } else {
   i98 = 2147483647;
  }
 } while (0);
 HEAP32[i22 >> 2] = i98;
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i57, i63, i22, HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 HEAPF32[i2 + 28 >> 2] = +(HEAP32[i57 >> 2] | 0);
 i57 = i2 + 12 | 0;
 HEAP32[i57 >> 2] = HEAP32[i57 >> 2] | 8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, d6, d7, i8, i9, i10, i11, i12, i13, i14) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 d7 = +d7;
 i8 = i8 | 0;
 i9 = i9 | 0;
 i10 = i10 | 0;
 i11 = i11 | 0;
 i12 = i12 | 0;
 i13 = i13 | 0;
 i14 = i14 | 0;
 var i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i16 = i10;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i10 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 i16 = i15 | 0;
 i17 = i15 + 16 | 0;
 i18 = i15 + 64 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = i22;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i25 = i24;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i28 = i27;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if (d6 <= +0) {
  STACKTOP = i15;
  return;
 }
 i32 = (i11 | 0) == 9 & d6 < +3 ? 8 : i11;
 L4 : do {
  switch (i32 | 0) {
  case 6:
  case 7:
   {
    __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i10, (HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
    __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, d7 * +2 * 1.100000023841858);
    i11 = (i32 | 0) == 7;
    __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, i11 ? 3 : 2);
    d33 = (i11 ? +3 : +1) * d6;
    d34 = +__ZNK7WebCore4Path6lengthEv(i4) / d33;
    do {
     if (d34 >= +4) {
      i11 = ~~d34;
      do {
       if ((i11 & 1 | 0) == 0) {
        d35 = d33;
       } else {
        if (d34 - +(i11 | 0) == +0) {
         d35 = d33;
         break;
        }
        d35 = d33 + d33 / (d34 * +.5);
       }
      } while (0);
      i11 = i16 | 0;
      i36 = i16 + 4 | 0;
      i37 = i16 + 8 | 0;
      HEAP32[i37 >> 2] = 0;
      i38 = __ZN3WTF18fastMallocGoodSizeEj(128) | 0;
      HEAP32[i36 >> 2] = i38 >>> 3;
      i39 = __ZN3WTF10fastMallocEj(i38) | 0;
      HEAP32[i11 >> 2] = i39;
      HEAPF64[i39 + (HEAP32[i37 >> 2] << 3) >> 3] = d33;
      i39 = HEAP32[i37 >> 2] | 0;
      i38 = i39 + 1 | 0;
      HEAP32[i37 >> 2] = i38;
      if ((i38 | 0) == (HEAP32[i36 >> 2] | 0)) {
       i40 = i39 + 2 | 0;
       i41 = i39 + 2 + (i38 >>> 2) | 0;
       i39 = i41 >>> 0 > 16 >>> 0 ? i41 : 16;
       i41 = i39 >>> 0 > i40 >>> 0 ? i39 : i40;
       do {
        if (i38 >>> 0 < i41 >>> 0) {
         i40 = HEAP32[i11 >> 2] | 0;
         if (i41 >>> 0 > 536870911 >>> 0) {
          _WTFCrash();
         }
         i39 = __ZN3WTF18fastMallocGoodSizeEj(i41 << 3) | 0;
         HEAP32[i36 >> 2] = i39 >>> 3;
         i42 = __ZN3WTF10fastMallocEj(i39) | 0;
         HEAP32[i11 >> 2] = i42;
         i39 = i40;
         _memcpy(i42 | 0, i39 | 0, i38 << 3) | 0;
         if ((i40 | 0) == 0) {
          break;
         }
         if ((HEAP32[i11 >> 2] | 0) == (i40 | 0)) {
          HEAP32[i11 >> 2] = 0;
          HEAP32[i36 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i39);
        }
       } while (0);
       HEAPF64[(HEAP32[i11 >> 2] | 0) + (HEAP32[i37 >> 2] << 3) >> 3] = d35;
       i43 = HEAP32[i37 >> 2] | 0;
      } else {
       HEAPF64[(HEAP32[i11 >> 2] | 0) + (i38 << 3) >> 3] = d35;
       i43 = HEAP32[i37 >> 2] | 0;
      }
      HEAP32[i37 >> 2] = i43 + 1;
      __ZN7WebCore15GraphicsContext11setLineDashERKN3WTF6VectorIdLj0ENS1_15CrashOnOverflowEEEf(i2, i16, d33);
      if ((HEAP32[i37 >> 2] | 0) != 0) {
       HEAP32[i37 >> 2] = 0;
      }
      i41 = HEAP32[i11 >> 2] | 0;
      if ((i41 | 0) == 0) {
       break;
      }
      HEAP32[i11 >> 2] = 0;
      HEAP32[i36 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i41);
     }
    } while (0);
    __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i2, i4);
    STACKTOP = i15;
    return;
   }
  case 0:
  case 1:
   {
    STACKTOP = i15;
    return;
   }
  case 9:
   {
    do {
     if ((HEAP8[i5 + 17 | 0] & 1) == 0) {
      i44 = 0;
      i45 = 0;
     } else {
      i41 = HEAP32[i5 >> 2] | 0;
      i39 = (i41 | 0) / 3 & -1;
      i40 = (i41 << 1 | 0) / 3 & -1;
      i42 = (i41 | 0) % 3 & -1;
      if ((i42 | 0) == 2) {
       i44 = i40;
       i45 = i39 + 1 | 0;
       break;
      } else if ((i42 | 0) == 1) {
       i44 = i40 + 1 | 0;
       i45 = i39;
       break;
      } else {
       i44 = i40;
       i45 = i39;
       break;
      }
     }
    } while (0);
    do {
     if ((HEAP8[i5 + 37 | 0] & 1) == 0) {
      i46 = 0;
      i47 = 0;
     } else {
      i39 = HEAP32[i5 + 20 >> 2] | 0;
      i40 = (i39 | 0) / 3 & -1;
      i42 = (i39 << 1 | 0) / 3 & -1;
      i41 = (i39 | 0) % 3 & -1;
      if ((i41 | 0) == 2) {
       i46 = i42;
       i47 = i40 + 1 | 0;
       break;
      } else if ((i41 | 0) == 1) {
       i46 = i42 + 1 | 0;
       i47 = i40;
       break;
      } else {
       i46 = i42;
       i47 = i40;
       break;
      }
     }
    } while (0);
    do {
     if ((HEAP8[i5 + 57 | 0] & 1) == 0) {
      i48 = 0;
      i49 = 0;
     } else {
      i40 = HEAP32[i5 + 40 >> 2] | 0;
      i42 = (i40 | 0) / 3 & -1;
      i41 = (i40 << 1 | 0) / 3 & -1;
      i39 = (i40 | 0) % 3 & -1;
      if ((i39 | 0) == 2) {
       i48 = i41;
       i49 = i42 + 1 | 0;
       break;
      } else if ((i39 | 0) == 1) {
       i48 = i41 + 1 | 0;
       i49 = i42;
       break;
      } else {
       i48 = i41;
       i49 = i42;
       break;
      }
     }
    } while (0);
    do {
     if ((HEAP8[i5 + 77 | 0] & 1) == 0) {
      i50 = 0;
      i51 = 0;
     } else {
      i42 = HEAP32[i5 + 60 >> 2] | 0;
      i41 = (i42 | 0) / 3 & -1;
      i39 = (i42 << 1 | 0) / 3 & -1;
      i40 = (i42 | 0) % 3 & -1;
      if ((i40 | 0) == 2) {
       i50 = i39;
       i51 = i41 + 1 | 0;
       break;
      } else if ((i40 | 0) == 1) {
       i50 = i39 + 1 | 0;
       i51 = i41;
       break;
      } else {
       i50 = i39;
       i51 = i41;
       break;
      }
     }
    } while (0);
    __ZN7WebCore15GraphicsContext4saveEv(i2);
    __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i17, i9, i3, i44, i48, i50, i46, i13, i14);
    __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i2, i17);
    i41 = i10;
    i39 = HEAP32[i41 + 4 >> 2] | 0;
    HEAP32[i18 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i18 + 4 >> 2] = i39;
    __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, d6, d7, i8, i9, i19, 8, i12, i13, i14);
    __ZN7WebCore15GraphicsContext7restoreEv(i2);
    __ZN7WebCore15GraphicsContext4saveEv(i2);
    i39 = i20;
    i40 = i3;
    HEAP32[i39 >> 2] = HEAP32[i40 >> 2];
    HEAP32[i39 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
    HEAP32[i39 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
    HEAP32[i39 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
    if ((i12 | 0) == 2) {
     i40 = i20 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) - 1;
     i40 = i20 + 8 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     i40 = i20 + 4 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) - 1;
     i40 = i20 + 12 | 0;
     HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 2;
     i52 = i51 + 1 | 0;
     i53 = i49 + 1 | 0;
     i54 = i47 + 1 | 0;
     i55 = i45 + 1 | 0;
    } else {
     i52 = i51;
     i53 = i49;
     i54 = i47;
     i55 = i45;
    }
    __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i21, i9, i20, i55, i53, i52, i54, i13, i14);
    __ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE(i2, i21);
    i40 = HEAP32[i41 + 4 >> 2] | 0;
    HEAP32[i22 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i22 + 4 >> 2] = i40;
    __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, d6, d7, i8, i9, i23, 8, i12, i13, i14);
    __ZN7WebCore15GraphicsContext7restoreEv(i2);
    STACKTOP = i15;
    return;
   }
  case 5:
   {
    i56 = 2;
    i57 = 4;
    break;
   }
  case 3:
   {
    i56 = 4;
    i57 = 2;
    break;
   }
  case 2:
   {
    if (!((i8 | 0) == 3 | (i8 | 0) == 0)) {
     i58 = 55;
     break L4;
    }
    __ZNK7WebCore5Color4darkEv(i29, i10);
    i40 = i10;
    i41 = i29;
    HEAP32[i40 >> 2] = HEAP32[i41 >> 2];
    HEAP8[i40 + 4 | 0] = HEAP8[i41 + 4 | 0] | 0;
    i58 = 55;
    break;
   }
  case 4:
   {
    if ((i8 - 1 | 0) >>> 0 >= 2 >>> 0) {
     i58 = 55;
     break L4;
    }
    __ZNK7WebCore5Color4darkEv(i30, i10);
    i41 = i10;
    i40 = i30;
    HEAP32[i41 >> 2] = HEAP32[i40 >> 2];
    HEAP8[i41 + 4 | 0] = HEAP8[i40 + 4 | 0] | 0;
    i58 = 55;
    break;
   }
  default:
   {
    i58 = 55;
   }
  }
 } while (0);
 if ((i58 | 0) == 55) {
  __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i2, 0);
  __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i10, (HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i31, i3);
  __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i31);
  STACKTOP = i15;
  return;
 }
 i31 = i10;
 i10 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i24 >> 2] = HEAP32[i31 >> 2];
 HEAP32[i24 + 4 >> 2] = i10;
 __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, d6, d7, i8, i9, i25, i57, i12, i13, i14);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 if ((HEAP8[i5 + 17 | 0] & 1) == 0) {
  i59 = 0;
 } else {
  i59 = (HEAP32[i5 >> 2] | 0) / 2 & -1;
 }
 if ((HEAP8[i5 + 57 | 0] & 1) == 0) {
  i60 = 0;
 } else {
  i60 = (HEAP32[i5 + 40 >> 2] | 0) / 2 & -1;
 }
 if ((HEAP8[i5 + 77 | 0] & 1) == 0) {
  i61 = 0;
 } else {
  i61 = (HEAP32[i5 + 60 >> 2] | 0) / 2 & -1;
 }
 if ((HEAP8[i5 + 37 | 0] & 1) == 0) {
  i62 = 0;
 } else {
  i62 = (HEAP32[i5 + 20 >> 2] | 0) / 2 & -1;
 }
 __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEiiiibb(i26, i9, i3, i59, i60, i61, i62, i13, i14);
 __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i2, i26);
 i26 = HEAP32[i31 + 4 >> 2] | 0;
 HEAP32[i27 >> 2] = HEAP32[i31 >> 2];
 HEAP32[i27 + 4 >> 2] = i26;
 __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i3, i4, i5, d6, d7, i8, i9, i28, i56, i12, i13, i14);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i15;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject21calculateFillTileSizeEPKNS_9FillLayerERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, d48 = +0, i49 = 0, i50 = 0, i51 = 0, d52 = +0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, d63 = +0, d64 = +0, i65 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 64 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i18;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = HEAP32[i3 + 4 >> 2] | 0;
 i24 = i9 | 0;
 i25 = i3 + 40 | 0;
 i26 = (HEAP32[i25 >> 2] | 0) >>> 16 & 3;
 i27 = i3 + 24 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i24 >> 2] = i28;
 HEAP32[i24 + 4 >> 2] = i29;
 if ((i28 & 0 | 0) == 0 & (i29 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
 }
 i29 = i9 + 8 | 0;
 i28 = i3 + 32 | 0;
 i3 = HEAP32[i28 >> 2] | 0;
 i30 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i29 >> 2] = i3;
 HEAP32[i29 + 4 >> 2] = i30;
 if ((i3 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
  i31 = HEAP32[i29 + 4 >> 2] | 0;
  i32 = HEAP32[i29 >> 2] | 0;
 } else {
  i31 = i30;
  i32 = i3;
 }
 HEAP32[i10 >> 2] = i26;
 i3 = i10 + 4 | 0;
 i30 = HEAP32[i24 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i24 >> 2];
 HEAP32[i3 + 4 >> 2] = i30;
 i3 = i10 + 12 | 0;
 i33 = i3;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i31;
 if ((i32 & 0 | 0) == 0 & (i31 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i3);
  i34 = HEAP8[i10 + 9 | 0] | 0;
 } else {
  i34 = (i30 >>> 8 | 0 << 24) & 255;
 }
 if (i34 << 24 >> 24 == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10 + 4 | 0);
 }
 __ZNK7WebCore20RenderBoxModelObject33calculateImageIntrinsicDimensionsEPNS_10StyleImageERKNS_7IntSizeENS0_25ScaleByEffectiveZoomOrNotE(i12, i2, i23, i4, 0);
 i10 = i23;
 d35 = +1 / +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i10 >> 2] | 0) + 64 >> 2] & 1](i23);
 d36 = +1 / +FUNCTION_TABLE_fi[HEAP32[(HEAP32[i10 >> 2] | 0) + 64 >> 2] & 1](i23);
 i23 = i11;
 i10 = ~~(d35 * +(HEAP32[i23 >> 2] | 0));
 HEAP32[i23 >> 2] = i10;
 i34 = i12 + 4 | 0;
 i12 = ~~(d36 * +(HEAP32[i34 >> 2] | 0));
 HEAP32[i34 >> 2] = i12;
 do {
  if ((i26 | 0) == 2) {
   i30 = i4 | 0;
   i3 = HEAP32[i30 >> 2] | 0;
   i31 = i13;
   HEAP32[i31 >> 2] = i3;
   i32 = i4 + 4 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   i37 = i14 + 4 | 0;
   HEAP32[i37 >> 2] = i33;
   i38 = (HEAP32[i25 >> 2] | 0) >>> 16 & 3;
   i39 = HEAP32[i27 >> 2] | 0;
   i40 = HEAP32[i27 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i39;
   HEAP32[i24 + 4 >> 2] = i40;
   if ((i39 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i40 = HEAP32[i28 >> 2] | 0;
   i39 = HEAP32[i28 + 4 >> 2] | 0;
   HEAP32[i29 >> 2] = i40;
   HEAP32[i29 + 4 >> 2] = i39;
   if ((i40 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
    i41 = HEAP32[i29 + 4 >> 2] | 0;
    i42 = HEAP32[i29 >> 2] | 0;
   } else {
    i41 = i39;
    i42 = i40;
   }
   HEAP32[i17 >> 2] = i38;
   i38 = i17 + 4 | 0;
   i40 = HEAP32[i24 >> 2] | 0;
   i39 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i38 >> 2] = i40;
   HEAP32[i38 + 4 >> 2] = i39;
   i38 = i17 + 12 | 0;
   i43 = i38;
   HEAP32[i43 >> 2] = i42;
   HEAP32[i43 + 4 >> 2] = i41;
   HEAP32[i15 >> 2] = i40;
   HEAP32[i15 + 4 >> 2] = i39;
   if ((i40 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i16);
    i44 = HEAP8[i17 + 17 | 0] | 0;
   } else {
    i44 = (i41 >>> 8 | 0 << 24) & 255;
   }
   if (i44 << 24 >> 24 == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i38);
   }
   if ((HEAP8[i17 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i17 + 4 | 0);
   }
   i38 = (HEAP32[i25 >> 2] | 0) >>> 16 & 3;
   i39 = HEAP32[i27 >> 2] | 0;
   i40 = HEAP32[i27 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = i39;
   HEAP32[i24 + 4 >> 2] = i40;
   if ((i39 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
   }
   i40 = HEAP32[i28 >> 2] | 0;
   i39 = HEAP32[i28 + 4 >> 2] | 0;
   HEAP32[i29 >> 2] = i40;
   HEAP32[i29 + 4 >> 2] = i39;
   if ((i40 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
    i45 = HEAP32[i29 + 4 >> 2] | 0;
    i46 = HEAP32[i29 >> 2] | 0;
   } else {
    i45 = i39;
    i46 = i40;
   }
   HEAP32[i20 >> 2] = i38;
   i38 = i20 + 4 | 0;
   i40 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i38 >> 2] = HEAP32[i24 >> 2];
   HEAP32[i38 + 4 >> 2] = i40;
   i40 = i20 + 12 | 0;
   i38 = i40;
   HEAP32[i38 >> 2] = i46;
   HEAP32[i38 + 4 >> 2] = i45;
   HEAP32[i18 >> 2] = i46;
   HEAP32[i18 + 4 >> 2] = i45;
   if ((i46 & 0 | 0) == 0 & (i45 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i19);
    i47 = HEAP8[i20 + 17 | 0] | 0;
   } else {
    i47 = (i45 >>> 8 | 0 << 24) & 255;
   }
   if (i47 << 24 >> 24 == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i40);
   }
   if ((HEAP8[i20 + 9 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i20 + 4 | 0);
   }
   i40 = i16 + 5 | 0;
   i38 = HEAP8[i40] | 0;
   if ((i38 << 24 >> 24 | 0) == 3) {
    if ((HEAP8[i16 + 6 | 0] & 1) == 0) {
     d48 = +(HEAP32[i15 >> 2] | 0);
    } else {
     d48 = +HEAPF32[i15 >> 2];
    }
    do {
     if (d48 < +2147483647) {
      if (d48 <= +-2147483648) {
       i49 = -2147483648;
       break;
      }
      i49 = ~~d48;
     } else {
      i49 = 2147483647;
     }
    } while (0);
    HEAP32[i31 >> 2] = i49;
    i50 = i49;
   } else if ((i38 << 24 >> 24 | 0) == 10 | (i38 << 24 >> 24 | 0) == 2) {
    i51 = 42;
   } else {
    if ((i38 - 11 & 255) >>> 0 < 4 >>> 0) {
     i51 = 42;
    } else {
     i50 = i3;
    }
   }
   if ((i51 | 0) == 42) {
    HEAP32[i6 >> 2] = HEAP32[i30 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i21, i16, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i39 = HEAP32[i21 >> 2] | 0;
    HEAP32[i31 >> 2] = i39;
    i50 = i39;
   }
   i39 = i19 + 5 | 0;
   i43 = HEAP8[i39] | 0;
   if ((i43 << 24 >> 24 | 0) == 10 | (i43 << 24 >> 24 | 0) == 2) {
    i51 = 52;
   } else if ((i43 << 24 >> 24 | 0) == 3) {
    if ((HEAP8[i19 + 6 | 0] & 1) == 0) {
     d52 = +(HEAP32[i18 >> 2] | 0);
    } else {
     d52 = +HEAPF32[i18 >> 2];
    }
    do {
     if (d52 < +2147483647) {
      if (d52 <= +-2147483648) {
       i53 = -2147483648;
       break;
      }
      i53 = ~~d52;
     } else {
      i53 = 2147483647;
     }
    } while (0);
    HEAP32[i37 >> 2] = i53;
    i54 = i53;
   } else {
    if ((i43 - 11 & 255) >>> 0 < 4 >>> 0) {
     i51 = 52;
    } else {
     i54 = i33;
    }
   }
   if ((i51 | 0) == 52) {
    HEAP32[i7 >> 2] = HEAP32[i32 >> 2];
    __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i22, i19, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
    i30 = HEAP32[i22 >> 2] | 0;
    HEAP32[i37 >> 2] = i30;
    i54 = i30;
   }
   i30 = HEAP8[i40] | 0;
   i3 = HEAP8[i39] | 0;
   i38 = i3 << 24 >> 24 == 0;
   do {
    if (i30 << 24 >> 24 == 0) {
     if (i38) {
      i55 = HEAP32[i23 >> 2] | 0;
      i56 = HEAP32[i34 >> 2] | 0;
      HEAP32[i13 >> 2] = i55;
      HEAP32[i13 + 4 >> 2] = i56;
      i57 = i55;
      i58 = i56;
      i59 = 0;
      i60 = 0;
      break;
     }
     i56 = HEAP32[i34 >> 2] | 0;
     if ((i56 | 0) == 0) {
      i57 = i50;
      i58 = i54;
      i59 = i3;
      i60 = 0;
      break;
     }
     i55 = (Math_imul(i54, HEAP32[i23 >> 2] | 0) | 0) / (i56 | 0) & -1;
     HEAP32[i31 >> 2] = i55;
     i57 = i55;
     i58 = i54;
     i59 = i3;
     i60 = 0;
    } else {
     if (!i38) {
      i57 = i50;
      i58 = i54;
      i59 = i3;
      i60 = i30;
      break;
     }
     i55 = HEAP32[i23 >> 2] | 0;
     if ((i55 | 0) == 0) {
      i57 = i50;
      i58 = i54;
      i59 = 0;
      i60 = i30;
      break;
     }
     i56 = (Math_imul(i50, HEAP32[i34 >> 2] | 0) | 0) / (i55 | 0) & -1;
     HEAP32[i37 >> 2] = i56;
     i57 = i50;
     i58 = i56;
     i59 = 0;
     i60 = i30;
    }
   } while (0);
   HEAP32[i8 >> 2] = 0;
   HEAP32[i8 + 4 >> 2] = 0;
   i30 = HEAP32[((i57 | 0) > 0 ? i14 : i8) >> 2] | 0;
   i37 = HEAP32[((i58 | 0) > 0 ? i14 : i8) + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i30;
   HEAP32[i13 + 4 >> 2] = i37;
   HEAP32[i1 >> 2] = i30;
   HEAP32[i1 + 4 >> 2] = i37;
   if (i59 << 24 >> 24 == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
    i61 = HEAP8[i40] | 0;
   } else {
    i61 = i60;
   }
   if (i61 << 24 >> 24 != 10) {
    STACKTOP = i5;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   STACKTOP = i5;
   return;
  } else if ((i26 | 0) == 3) {
   if ((i10 | 0) < 1 | (i12 | 0) < 1) {
    i62 = 0;
    break;
   }
   i37 = i1;
   i30 = HEAP32[i11 + 4 >> 2] | 0;
   HEAP32[i37 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i37 + 4 >> 2] = i30;
   STACKTOP = i5;
   return;
  } else if ((i26 | 0) == 0 | (i26 | 0) == 1) {
   i62 = i26;
  } else {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  d63 = +1;
 } else {
  d63 = +(HEAP32[i4 >> 2] | 0) / +(i10 | 0);
 }
 if ((i12 | 0) == 0) {
  d64 = +1;
 } else {
  d64 = +(HEAP32[i4 + 4 >> 2] | 0) / +(i12 | 0);
 }
 if ((i62 | 0) == 0) {
  i65 = d64 < d63;
 } else {
  i65 = d63 < d64;
 }
 d52 = i65 ? d64 : d63;
 i65 = ~~(d52 * +(i10 | 0));
 i10 = ~~(d52 * +(i12 | 0));
 HEAP32[i1 >> 2] = (i65 | 0) > 1 ? i65 : 1;
 HEAP32[i1 + 4 >> 2] = (i10 | 0) > 1 ? i10 : 1;
 STACKTOP = i5;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_v + 2;
}
function __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i2 | 0;
 i16 = i2 + 20 | 0;
 do {
  if ((HEAP32[i16 >> 2] & 128 | 0) == 0) {
   i17 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i18 = 7;
    break;
   }
   if ((HEAP32[i17 + 12 >> 2] & 4 | 0) == 0) {
    i18 = 7;
    break;
   }
   i19 = HEAP32[i17 + 44 >> 2] | 0;
   i17 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i19 | 0) == (i17 | 0)) {
    break;
   }
   if ((HEAP32[i19 + 12 >> 2] | 0) != (HEAP32[i17 + 12 >> 2] | 0)) {
    i18 = 7;
    break;
   }
   if ((HEAP32[i19 + 16 >> 2] | 0) != (HEAP32[i17 + 16 >> 2] | 0)) {
    i18 = 7;
   }
  } else {
   i18 = 7;
  }
 } while (0);
 do {
  if ((i18 | 0) == 7) {
   i17 = i2 + 8 | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   if ((i19 | 0) == 0) {
    break;
   }
   i20 = i3;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i5 + 4 >> 2] = i21;
   i21 = i7 | 0;
   HEAP32[i21 >> 2] = 0;
   i20 = i7 + 4 | 0;
   HEAP32[i20 >> 2] = 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i19 >> 2] | 0) + 520 >> 2] & 31](i19 | 0, i7, i6);
   i19 = HEAP32[i20 >> 2] | 0;
   i20 = i5;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i21 >> 2] | 0);
   i21 = i6 + 4 | 0;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i19;
   i19 = __ZNK7WebCore12RenderObject12offsetParentEv(i15) | 0;
   do {
    if ((i19 | 0) != 0) {
     i22 = i19 | 0;
     i23 = i19 + 20 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     L12 : do {
      if ((i24 & 512 | 0) != 0) {
       do {
        if ((i24 & 128 | 0) == 0) {
         i25 = HEAP32[i19 + 4 >> 2] | 0;
         if ((i25 | 0) == 0) {
          break;
         }
         if ((HEAP32[i25 + 12 >> 2] & 4 | 0) == 0) {
          break;
         }
         i26 = HEAP32[i25 + 44 >> 2] | 0;
         i25 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
         if ((i26 | 0) == (i25 | 0)) {
          break L12;
         }
         if ((HEAP32[i26 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
          break;
         }
         if ((HEAP32[i26 + 16 >> 2] | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
          break L12;
         }
        }
       } while (0);
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 184 >> 2] & 255](i22) | 0) {
        break;
       }
       i25 = i19;
       i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 744 >> 2] & 255](i19) | 0;
       i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 255](i19) | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - i26;
       HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i27;
      }
     } while (0);
     i22 = HEAP32[i16 >> 2] | 0;
     if ((i22 & 25165824 | 0) == 16777216) {
      if ((i22 & 805306368 | 0) == 0) {
       break;
      }
      if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i15) | 0) == 0) {
       break;
      }
      i28 = HEAP32[i16 >> 2] | 0;
     } else {
      i28 = i22;
     }
     i22 = i28 & 25165824;
     if ((i22 | 0) == 8388608) {
      __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i8, i2);
      i24 = HEAP32[i8 + 4 >> 2] | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i24;
     } else if ((i22 | 0) == 25165824) {
      __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i9, i2);
      i22 = HEAP32[i9 + 4 >> 2] | 0;
      HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
      HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i22;
     }
     i22 = HEAP32[i17 >> 2] | 0;
     i24 = i19 | 0;
     L32 : do {
      if ((i22 | 0) == (i24 | 0)) {
       i29 = i22;
      } else {
       i27 = i11 | 0;
       i26 = i11 + 4 | 0;
       i25 = i10 | 0;
       i30 = i10 + 4 | 0;
       i31 = i22;
       while (1) {
        i32 = i31 | 0;
        i33 = i31;
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 252 >> 2] & 255](i32) | 0) {
         i29 = i31;
         break L32;
        }
        if ((HEAP32[i16 >> 2] & 25165824 | 0) == 16777216) {
         i34 = i31 + 8 | 0;
        } else {
         do {
          if ((HEAP32[i31 + 20 >> 2] & 512 | 0) != 0) {
           if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i33 >> 2] | 0) + 200 >> 2] & 255](i32) | 0) {
            break;
           }
           __ZNK7WebCore9RenderBox15topLeftLocationEv(i10, i31);
           i35 = HEAP32[i30 >> 2] | 0;
           HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i25 >> 2] | 0);
           HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i35;
          }
         } while (0);
         i32 = i31 + 8 | 0;
         i33 = HEAP32[i32 >> 2] | 0;
         HEAP32[i27 >> 2] = 0;
         HEAP32[i26 >> 2] = 0;
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i33 >> 2] | 0) + 520 >> 2] & 31](i33 | 0, i11, i6);
         i33 = HEAP32[i26 >> 2] | 0;
         HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i27 >> 2] | 0);
         HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i33;
         i34 = i32;
        }
        i32 = HEAP32[i34 >> 2] | 0;
        if ((i32 | 0) == (i24 | 0)) {
         i29 = i24;
         break;
        } else {
         i31 = i32;
        }
       }
      }
     } while (0);
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 252 >> 2] & 255](i29 | 0) | 0) {
      __ZN7WebCore16RenderFlowThread38adjustedPositionRelativeToOffsetParentERKNS_20RenderBoxModelObjectERKNS_11LayoutPointE(i13, i29, i2, i6);
      i24 = HEAP32[i12 + 4 >> 2] | 0;
      HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i5 + 4 >> 2] = i24;
      break;
     }
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 & 640 | 0) != 512) {
      break;
     }
     i22 = HEAP32[i19 + 4 >> 2] | 0;
     if ((i22 | 0) == 0) {
      break;
     }
     if ((HEAP32[i22 + 12 >> 2] & 4 | 0) == 0) {
      break;
     }
     i31 = HEAP32[i22 + 44 >> 2] | 0;
     i22 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
     if ((i31 | 0) != (i22 | 0)) {
      if ((HEAP32[i31 + 12 >> 2] | 0) != (HEAP32[i22 + 12 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i31 + 16 >> 2] | 0) != (HEAP32[i22 + 16 >> 2] | 0)) {
       break;
      }
     }
     if ((i24 & 25165824 | 0) != 0) {
      break;
     }
     __ZNK7WebCore9RenderBox15topLeftLocationEv(i14, i19);
     i24 = HEAP32[i14 + 4 >> 2] | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i14 >> 2] | 0);
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i24;
    }
   } while (0);
   i21 = i1;
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i21 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i21 + 4 >> 2] = i20;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13, i14, i15, i16) {
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
 i13 = i13 | 0;
 i14 = i14 | 0;
 i15 = i15 | 0;
 i16 = i16 | 0;
 var i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i18 = i17 | 0;
 i19 = i17 + 16 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = i21;
 i23 = i10 + (i8 * 20 & -1) | 0;
 i24 = i10 + (i9 * 20 & -1) | 0;
 i25 = i15 ^ 1;
 i26 = __ZN7WebCoreL17joinRequiresMitreENS_7BoxSideES0_PKNS_10BorderEdgeEb(i7, i8, i10, i25) | 0;
 i27 = __ZN7WebCoreL17joinRequiresMitreENS_7BoxSideES0_PKNS_10BorderEdgeEb(i7, i9, i10, i25) | 0;
 i25 = __ZN7WebCoreL19colorsMatchAtCornerENS_7BoxSideES0_PKNS_10BorderEdgeE(i7, i8, i10) | 0;
 i28 = __ZN7WebCoreL19colorsMatchAtCornerENS_7BoxSideES0_PKNS_10BorderEdgeE(i7, i9, i10) | 0;
 if ((i16 | 0) == 0) {
  i29 = i10 + (i7 * 20 & -1) + 4 | 0;
 } else {
  i29 = i16;
 }
 if ((i11 | 0) != 0) {
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  if (__ZNK7WebCore11RoundedRect12isRenderableEv(i5) | 0) {
   __ZN7WebCore20RenderBoxModelObject21clipBorderSidePolygonEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEbb(0, i2, i4, i5, i7, i25, i28);
  } else {
   __ZN7WebCore20RenderBoxModelObject33clipBorderSideForComplexInnerPathEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEPKNS_10BorderEdgeE(0, i2, i4, i5, i7, i10);
  }
  i28 = HEAP32[i10 + (i7 * 20 & -1) >> 2] | 0;
  i25 = HEAP32[i23 >> 2] | 0;
  i16 = (i28 | 0) < (i25 | 0) ? i25 : i28;
  i25 = HEAP32[i24 >> 2] | 0;
  i30 = i4;
  i31 = HEAP32[i30 + 4 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i30 >> 2];
  HEAP32[i18 + 4 >> 2] = i31;
  i31 = i4 + 8 | 0;
  i30 = HEAP32[i31 + 4 >> 2] | 0;
  HEAP32[i18 + 8 >> 2] = HEAP32[i31 >> 2];
  HEAP32[i18 + 12 >> 2] = i30;
  i30 = i29;
  i31 = HEAP32[i30 + 4 >> 2] | 0;
  HEAP32[i19 >> 2] = HEAP32[i30 >> 2];
  HEAP32[i19 + 4 >> 2] = i31;
  __ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb(i1, i2, i18, i11, i10, +(i28 | 0), +(((i16 | 0) < (i25 | 0) ? i25 : i16) | 0), i7, i3, i20, HEAP32[i10 + (i7 * 20 & -1) + 12 >> 2] | 0, i12, i13, i14);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i17;
  return;
 }
 i14 = i10 + (i7 * 20 & -1) + 12 | 0;
 i13 = HEAP32[i14 >> 2] | 0;
 i12 = (i13 - 6 | 0) >>> 0 < 2 >>> 0;
 i20 = i12 & (i26 | i27);
 i3 = HEAP32[i10 + (i7 * 20 & -1) + 4 >> 2] | 0;
 i16 = (i3 & -16777216 | 0) == -16777216;
 L12 : do {
  if (i16) {
   i32 = 0;
   i33 = 0;
  } else {
   do {
    if ((HEAP8[i10 + (i7 * 20 & -1) + 17 | 0] & 1) == 0) {
     i34 = 0;
    } else {
     if (!((HEAP32[i10 + (i7 * 20 & -1) >> 2] | 0) != 0 & (i13 | 0) > 1)) {
      i34 = 0;
      break;
     }
     i34 = (HEAP8[i10 + (i7 * 20 & -1) + 16 | 0] & 1) == 0;
    }
   } while (0);
   do {
    if ((HEAP8[i10 + (i8 * 20 & -1) + 17 | 0] & 1) == 0) {
     i35 = 15;
    } else {
     if ((HEAP32[i10 + (i8 * 20 & -1) >> 2] | 0) == 0) {
      i35 = 15;
      break;
     }
     if ((HEAP32[i10 + (i8 * 20 & -1) + 12 >> 2] | 0) <= 1) {
      i35 = 15;
      break;
     }
     if (i34 ^ (HEAP8[i10 + (i8 * 20 & -1) + 16 | 0] & 1) == 0) {
      i36 = 0;
     } else {
      i35 = 17;
     }
    }
   } while (0);
   if ((i35 | 0) == 15) {
    if (i34) {
     i36 = 0;
    } else {
     i35 = 17;
    }
   }
   do {
    if ((i35 | 0) == 17) {
     if ((i3 | 0) != (HEAP32[i10 + (i8 * 20 & -1) + 4 >> 2] | 0)) {
      i36 = 1;
      break;
     }
     if ((HEAP8[i10 + (i7 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i10 + (i8 * 20 & -1) + 8 | 0] & 1) != 0) {
      i36 = 1;
      break;
     }
     if (!((i13 - 2 | 0) >>> 0 < 2 >>> 0 | (i13 | 0) == 5 | (i13 | 0) == 4)) {
      i36 = 0;
      break;
     }
     i25 = 1 << i8 | 1 << i7;
     i36 = (i25 | 0) == 3 | (i25 | 0) == 12;
    }
   } while (0);
   i25 = i36 & i26;
   if (i16) {
    i32 = 0;
    i33 = i25;
    break;
   }
   do {
    if ((HEAP8[i10 + (i7 * 20 & -1) + 17 | 0] & 1) == 0) {
     i37 = 0;
    } else {
     if (!((HEAP32[i10 + (i7 * 20 & -1) >> 2] | 0) != 0 & (i13 | 0) > 1)) {
      i37 = 0;
      break;
     }
     i37 = (HEAP8[i10 + (i7 * 20 & -1) + 16 | 0] & 1) == 0;
    }
   } while (0);
   do {
    if ((HEAP8[i10 + (i9 * 20 & -1) + 17 | 0] & 1) == 0) {
     i35 = 28;
    } else {
     if ((HEAP32[i10 + (i9 * 20 & -1) >> 2] | 0) == 0) {
      i35 = 28;
      break;
     }
     if ((HEAP32[i10 + (i9 * 20 & -1) + 12 >> 2] | 0) <= 1) {
      i35 = 28;
      break;
     }
     if (i37 ^ (HEAP8[i10 + (i9 * 20 & -1) + 16 | 0] & 1) == 0) {
      i32 = 0;
      i33 = i25;
      break L12;
     }
    }
   } while (0);
   if ((i35 | 0) == 28) {
    if (i37) {
     i32 = 0;
     i33 = i25;
     break;
    }
   }
   if ((i3 | 0) != (HEAP32[i10 + (i9 * 20 & -1) + 4 >> 2] | 0)) {
    i32 = 1;
    i33 = i25;
    break;
   }
   if ((HEAP8[i10 + (i7 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i10 + (i9 * 20 & -1) + 8 | 0] & 1) != 0) {
    i32 = 1;
    i33 = i25;
    break;
   }
   if (!((i13 - 2 | 0) >>> 0 < 2 >>> 0 | (i13 | 0) == 5 | (i13 | 0) == 4)) {
    i32 = 0;
    i33 = i25;
    break;
   }
   i28 = 1 << i9 | 1 << i7;
   i32 = (i28 | 0) == 3 | (i28 | 0) == 12;
   i33 = i25;
  }
 } while (0);
 i9 = i32 & i27;
 if (i20) {
  i38 = 1;
  i35 = 36;
 } else {
  i20 = i33 | i9;
  i32 = i20 & 1;
  if (i20) {
   i38 = i32;
   i35 = 36;
  } else {
   i39 = i26;
   i40 = i27;
   i41 = i32;
   i42 = i13;
  }
 }
 if ((i35 | 0) == 36) {
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  if (i33) {
   i43 = 0;
  } else {
   i43 = i12 & i26 ^ 1;
  }
  if (i9) {
   i44 = 0;
  } else {
   i44 = i12 & i27 ^ 1;
  }
  __ZN7WebCore20RenderBoxModelObject21clipBorderSidePolygonEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEbb(0, i2, i4, i5, i7, i43, i44);
  i39 = 0;
  i40 = 0;
  i41 = i38;
  i42 = HEAP32[i14 >> 2] | 0;
 }
 i14 = HEAP32[i6 >> 2] | 0;
 i38 = HEAP32[i6 + 4 >> 2] | 0;
 i44 = (HEAP32[i6 + 8 >> 2] | 0) + i14 | 0;
 i43 = (HEAP32[i6 + 12 >> 2] | 0) + i38 | 0;
 i6 = i29;
 i29 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i21 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i21 + 4 >> 2] = i29;
 if (i39) {
  i45 = HEAP32[i23 >> 2] | 0;
 } else {
  i45 = 0;
 }
 if (i40) {
  i46 = HEAP32[i24 >> 2] | 0;
 } else {
  i46 = 0;
 }
 __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i1 | 0, i2, i14, i38, i44, i43, i7, i22, i42, i45, i46, i15);
 if ((i41 & 1) == 0) {
  STACKTOP = i17;
  return;
 }
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i17;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 72 | 0;
 i14 = i3 + 80 | 0;
 i15 = i3 + 88 | 0;
 i16 = i3 + 96 | 0;
 i17 = i3 + 104 | 0;
 i18 = i3 + 112 | 0;
 i19 = i3 + 120 | 0;
 i20 = i2 | 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i20) | 0) {
   i21 = HEAP32[i2 + 20 >> 2] & 25165824;
   if (!((i21 | 0) == 25165824 | (i21 | 0) == 8388608)) {
    i22 = 3;
    break;
   }
   i21 = __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i2) | 0;
   L4 : do {
    if ((i21 | 0) == 0) {
     i23 = 0;
     i24 = 0;
    } else {
     i25 = i4 | 0;
     i26 = i4 + 4 | 0;
     i27 = 0;
     i28 = 0;
     i29 = i21 | 0;
     while (1) {
      if ((HEAP32[i29 + 24 >> 2] & 4 | 0) == 0) {
       i23 = i27;
       i24 = i28;
       break L4;
      }
      i30 = HEAP32[i29 + 20 >> 2] & 25165824;
      if ((i30 | 0) == 25165824 | (i30 | 0) == 8388608) {
       i31 = i29;
       if ((i30 | 0) == 8388608) {
        __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i4, i31);
       } else if ((i30 | 0) == 25165824) {
        __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i4, i31);
       } else {
        HEAP32[i25 >> 2] = 0;
        HEAP32[i26 >> 2] = 0;
       }
       i32 = (HEAP32[i25 >> 2] | 0) + i28 | 0;
       i33 = (HEAP32[i26 >> 2] | 0) + i27 | 0;
      } else {
       i32 = i28;
       i33 = i27;
      }
      i31 = HEAP32[i29 + 8 >> 2] | 0;
      if ((i31 | 0) == 0) {
       i23 = i33;
       i24 = i32;
       break;
      } else {
       i27 = i33;
       i28 = i32;
       i29 = i31;
      }
     }
    }
   } while (0);
   i21 = i1;
   HEAP32[i21 >> 2] = i24;
   HEAP32[i21 + 4 >> 2] = i23;
   i34 = i23;
   i35 = i24;
  } else {
   i22 = 3;
  }
 } while (0);
 if ((i22 | 0) == 3) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  i34 = 0;
  i35 = 0;
 }
 i22 = __ZNK7WebCore12RenderObject15containingBlockEv(i20) | 0;
 i20 = i2 + 36 | 0;
 i24 = HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0;
 i23 = i24 + 12 | 0;
 i32 = (HEAP8[i24 + 17 | 0] | 0) == 0;
 L21 : do {
  if ((HEAP8[i24 + 9 | 0] | 0) == 0) {
   if (i32) {
    break;
   }
   i33 = i22 | 0;
   i4 = (HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i4 | 0) == 3 | (i4 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 900 >> 2] & 63](i15, i33);
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 904 >> 2] & 31](i15, i33, 1);
   }
   HEAP32[i6 >> 2] = HEAP32[i15 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i14, i23, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i1 >> 2] = i35 - (HEAP32[i14 >> 2] | 0);
  } else {
   i33 = HEAP32[i22 + 36 >> 2] | 0;
   do {
    if (!i32) {
     if ((HEAP32[i33 + 40 >> 2] & 1073741824 | 0) != 0) {
      break;
     }
     i4 = i22 | 0;
     i21 = (HEAP32[i33 + 44 >> 2] | 0) >>> 13 & 3;
     if ((i21 | 0) == 3 | (i21 | 0) == 0) {
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 900 >> 2] & 63](i11, i4);
     } else {
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 904 >> 2] & 31](i11, i4, 1);
     }
     HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
     __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i10, i23, i8, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
     HEAP32[i1 >> 2] = -(HEAP32[i10 >> 2] | 0);
     break L21;
    }
   } while (0);
   i4 = i22 | 0;
   i21 = (HEAP32[i33 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i21 | 0) == 3 | (i21 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 900 >> 2] & 63](i13, i4);
   } else {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 904 >> 2] & 31](i13, i4, 1);
   }
   HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i12, i24 + 4 | 0, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i1 >> 2] = i35 + (HEAP32[i12 >> 2] | 0);
  }
 } while (0);
 i12 = HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0;
 L42 : do {
  if ((HEAP8[i12 + 25 | 0] | 0) == 0) {
   i36 = i12;
  } else {
   do {
    if (__ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv(i22 | 0) | 0) {
     i35 = HEAP8[(HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0) + 25 | 0] | 0;
     if (!((i35 << 24 >> 24 | 0) == 10 | (i35 << 24 >> 24 | 0) == 2)) {
      break;
     }
     if (__ZNK7WebCore9RenderBox19stretchesToViewportEv(i22 | 0) | 0) {
      break;
     }
     i36 = HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0;
     break L42;
    }
   } while (0);
   i33 = (HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0;
   i35 = i22 | 0;
   i7 = (HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 904 >> 2] & 31](i17, i35, 1);
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 900 >> 2] & 63](i17, i35);
   }
   HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
   __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i16, i33, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   HEAP32[i1 + 4 >> 2] = i34 + (HEAP32[i16 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP8[i36 + 33 | 0] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (__ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv(i22 | 0) | 0) {
   i36 = HEAP8[(HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0) + 33 | 0] | 0;
   if (!((i36 << 24 >> 24 | 0) == 10 | (i36 << 24 >> 24 | 0) == 2)) {
    break;
   }
   if (__ZNK7WebCore9RenderBox19stretchesToViewportEv(i22 | 0) | 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i36 = (HEAP32[(HEAP32[i20 >> 2] | 0) + 16 >> 2] | 0) + 28 | 0;
 i20 = i22 | 0;
 i16 = (HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 904 >> 2] & 31](i19, i20, 1);
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 900 >> 2] & 63](i19, i20);
 }
 HEAP32[i9 >> 2] = HEAP32[i19 >> 2];
 __ZN7WebCore14valueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i18, i36, i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 HEAP32[i1 + 4 >> 2] = i34 - (HEAP32[i18 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20RenderBoxModelObject16paintBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12, i13) {
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
 i13 = i13 | 0;
 var i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i15 = i14 | 0;
 i16 = i14 + 8 | 0;
 i17 = i14 + 24 | 0;
 i18 = i14 + 32 | 0;
 i19 = i14 + 48 | 0;
 i20 = i14 + 56 | 0;
 i21 = i14 + 72 | 0;
 i22 = i14 + 80 | 0;
 i23 = i14 + 96 | 0;
 i24 = __ZNK7WebCore11RoundedRect5Radii6isZeroEv(i4 + 16 | 0) | 0;
 __ZN7WebCore4PathC1Ev(i15);
 if (!i24) {
  __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i15, i4);
 }
 do {
  if ((HEAP8[i7 + 17 | 0] & 1) != 0) {
   i25 = HEAP32[i7 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   i26 = HEAP32[i7 + 12 >> 2] | 0;
   if ((i26 | 0) <= 1) {
    break;
   }
   if ((HEAP8[i7 + 16 | 0] & 1) != 0) {
    break;
   }
   if ((i8 & 1 | 0) == 0) {
    break;
   }
   i27 = i16;
   i28 = i4;
   HEAP32[i27 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i27 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i27 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = (HEAP32[i6 + 4 >> 2] | 0) + i25;
   do {
    if (i24) {
     i29 = 0;
    } else {
     if ((i26 | 0) == 5 | (i26 | 0) == 3 | (i26 | 0) == 9) {
      i29 = i15;
      break;
     }
     i25 = HEAP32[i5 + 16 >> 2] | 0;
     i28 = HEAP32[i5 + 20 >> 2] | 0;
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i17, i5 + 24 | 0);
     if ((i28 | i25 | 0) != 0) {
      i29 = i15;
      break;
     }
     i25 = __ZNK7WebCore9FloatSize6isZeroEv(i17) | 0;
     i29 = i25 ? 0 : i15;
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i16, 0, 3, 1, i7, i29, i9, i10, i11, i12, i13);
  }
 } while (0);
 do {
  if ((HEAP8[i7 + 57 | 0] & 1) != 0) {
   i29 = HEAP32[i7 + 40 >> 2] | 0;
   if ((i29 | 0) == 0) {
    break;
   }
   i16 = HEAP32[i7 + 52 >> 2] | 0;
   if ((i16 | 0) <= 1) {
    break;
   }
   if ((HEAP8[i7 + 56 | 0] & 1) != 0) {
    break;
   }
   if ((i8 & 4 | 0) == 0) {
    break;
   }
   i17 = i18;
   i26 = i4;
   HEAP32[i17 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   i26 = i18 + 4 | 0;
   i17 = HEAP32[i26 >> 2] | 0;
   i25 = i18 + 12 | 0;
   i28 = HEAP32[i25 >> 2] | 0;
   i27 = i28 + i17 - i29 - (HEAP32[i6 + 4 >> 2] | 0) | 0;
   HEAP32[i26 >> 2] = i27;
   i26 = i17 - i27 + i28 | 0;
   HEAP32[i25 >> 2] = (i26 | 0) > 0 ? i26 : 0;
   do {
    if (i24) {
     i30 = 0;
    } else {
     if ((i16 | 0) == 5 | (i16 | 0) == 3 | (i16 | 0) == 9) {
      i30 = i15;
      break;
     }
     i26 = HEAP32[i5 + 32 >> 2] | 0;
     i25 = HEAP32[i5 + 36 >> 2] | 0;
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i19, i5 + 40 | 0);
     if ((i25 | i26 | 0) != 0) {
      i30 = i15;
      break;
     }
     i26 = __ZNK7WebCore9FloatSize6isZeroEv(i19) | 0;
     i30 = i26 ? 0 : i15;
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i18, 2, 3, 1, i7, i30, i9, i10, i11, i12, i13);
  }
 } while (0);
 do {
  if ((HEAP8[i7 + 77 | 0] & 1) != 0) {
   i30 = HEAP32[i7 + 60 >> 2] | 0;
   if ((i30 | 0) == 0) {
    break;
   }
   i18 = HEAP32[i7 + 72 >> 2] | 0;
   if ((i18 | 0) <= 1) {
    break;
   }
   if ((HEAP8[i7 + 76 | 0] & 1) != 0) {
    break;
   }
   if ((i8 & 8 | 0) == 0) {
    break;
   }
   i19 = i20;
   i16 = i4;
   HEAP32[i19 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   HEAP32[i20 + 8 >> 2] = (HEAP32[i6 >> 2] | 0) + i30;
   do {
    if (i24) {
     i31 = 0;
    } else {
     if ((i18 | 0) == 5 | (i18 | 0) == 3 | (i18 | 0) == 9) {
      i31 = i15;
      break;
     }
     i30 = HEAP32[i5 + 32 >> 2] | 0;
     i16 = HEAP32[i5 + 36 >> 2] | 0;
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i21, i5 + 16 | 0);
     if ((i16 | i30 | 0) != 0) {
      i31 = i15;
      break;
     }
     i30 = __ZNK7WebCore9FloatSize6isZeroEv(i21) | 0;
     i31 = i30 ? 0 : i15;
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i20, 3, 0, 2, i7, i31, i9, i10, i11, i12, i13);
  }
 } while (0);
 if ((HEAP8[i7 + 37 | 0] & 1) == 0) {
  __ZN7WebCore4PathD1Ev(i15);
  STACKTOP = i14;
  return;
 }
 i31 = HEAP32[i7 + 20 >> 2] | 0;
 if ((i31 | 0) == 0) {
  __ZN7WebCore4PathD1Ev(i15);
  STACKTOP = i14;
  return;
 }
 i20 = HEAP32[i7 + 32 >> 2] | 0;
 if ((i20 | 0) <= 1) {
  __ZN7WebCore4PathD1Ev(i15);
  STACKTOP = i14;
  return;
 }
 if ((HEAP8[i7 + 36 | 0] & 1) != 0) {
  __ZN7WebCore4PathD1Ev(i15);
  STACKTOP = i14;
  return;
 }
 if ((i8 & 2 | 0) == 0) {
  __ZN7WebCore4PathD1Ev(i15);
  STACKTOP = i14;
  return;
 }
 i8 = i22;
 i21 = i4;
 HEAP32[i8 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
 i21 = i22 | 0;
 i8 = HEAP32[i21 >> 2] | 0;
 i18 = i22 + 8 | 0;
 i30 = HEAP32[i18 >> 2] | 0;
 i16 = i30 + i8 - i31 - (HEAP32[i6 >> 2] | 0) | 0;
 HEAP32[i21 >> 2] = i16;
 i21 = i8 - i16 + i30 | 0;
 HEAP32[i18 >> 2] = (i21 | 0) > 0 ? i21 : 0;
 do {
  if (i24) {
   i32 = 0;
  } else {
   if ((i20 | 0) == 5 | (i20 | 0) == 3 | (i20 | 0) == 9) {
    i32 = i15;
    break;
   }
   i21 = HEAP32[i5 + 40 >> 2] | 0;
   i18 = HEAP32[i5 + 44 >> 2] | 0;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i23, i5 + 24 | 0);
   if ((i18 | i21 | 0) != 0) {
    i32 = i15;
    break;
   }
   i21 = __ZNK7WebCore9FloatSize6isZeroEv(i23) | 0;
   i32 = i21 ? 0 : i15;
  }
 } while (0);
 __ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i22, 1, 0, 2, i7, i32, i9, i10, i11, i12, i13);
 __ZN7WebCore4PathD1Ev(i15);
 STACKTOP = i14;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject33calculateImageIntrinsicDimensionsEPNS_10StyleImageERKNS_7IntSizeENS0_25ScaleByEffectiveZoomOrNotE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 do {
  if ((HEAP8[i3 + 8 | 0] & 4) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] & 255](i3) | 0)) {
    break;
   }
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i1 + 4 >> 2] = i10;
   STACKTOP = i6;
   return;
  }
 } while (0);
 _memset(i7 | 0, 0, 7) | 0;
 _memset(i8 | 0, 0, 7) | 0;
 i10 = i9 | 0;
 HEAPF32[i10 >> 2] = +0;
 i11 = i9 + 4 | 0;
 HEAPF32[i11 >> 2] = +0;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] & 7](i3, i2 | 0, i7, i8, i9);
 i9 = i7 + 5 | 0;
 i3 = HEAP8[i9] | 0;
 L6 : do {
  if ((i3 << 24 >> 24 | 0) == 10 | (i3 << 24 >> 24 | 0) == 2) {
   i12 = HEAP8[i8 + 5 | 0] | 0;
   do {
    if ((i12 << 24 >> 24 | 0) == 10 | (i12 << 24 >> 24 | 0) == 2) {
     if (+HEAPF32[i10 >> 2] > +0) {
      if (+HEAPF32[i11 >> 2] > +0) {
       break;
      }
     }
     if ((HEAP8[i7 + 6 | 0] & 1) == 0) {
      d13 = +(HEAP32[i7 >> 2] | 0);
     } else {
      d13 = +HEAPF32[i7 >> 2];
     }
     i14 = ~~+_round(+(+(HEAP32[i4 >> 2] | 0) * d13 / +100));
     if ((HEAP8[i8 + 6 | 0] & 1) == 0) {
      d15 = +(HEAP32[i8 >> 2] | 0);
     } else {
      d15 = +HEAPF32[i8 >> 2];
     }
     i16 = ~~+_round(+(+(HEAP32[i4 + 4 >> 2] | 0) * d15 / +100));
     HEAP32[i1 >> 2] = i14;
     HEAP32[i1 + 4 >> 2] = i16;
     i17 = i12;
     break L6;
    }
   } while (0);
   if (i3 << 24 >> 24 == 3) {
    i18 = 16;
   } else {
    i19 = 0;
    i18 = 20;
   }
  } else if ((i3 << 24 >> 24 | 0) == 3) {
   i18 = 16;
  } else {
   i19 = 0;
   i18 = 20;
  }
 } while (0);
 if ((i18 | 0) == 16) {
  if ((HEAP8[i7 + 6 | 0] & 1) == 0) {
   d20 = +(HEAP32[i7 >> 2] | 0);
  } else {
   d20 = +HEAPF32[i7 >> 2];
  }
  i19 = ~~d20;
  i18 = 20;
 }
 L28 : do {
  if ((i18 | 0) == 20) {
   i12 = HEAP8[i8 + 5 | 0] | 0;
   if (i12 << 24 >> 24 == 3) {
    if ((HEAP8[i8 + 6 | 0] & 1) == 0) {
     d21 = +(HEAP32[i8 >> 2] | 0);
    } else {
     d21 = +HEAPF32[i8 >> 2];
    }
    i22 = ~~d21;
   } else {
    i22 = 0;
   }
   i16 = (i19 | 0) > 0 | 0;
   i14 = (i22 | 0) > 0 | 0;
   if ((i5 | 0) == 0) {
    d20 = +HEAPF32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
    i23 = ~~(+(i19 | 0) * d20);
    i24 = ~~(+(i22 | 0) * d20);
   } else {
    i23 = i19;
    i24 = i22;
   }
   i25 = (i23 | 0) < (i16 | 0) ? i16 : i23;
   i16 = (i24 | 0) < (i14 | 0) ? i14 : i24;
   do {
    if ((i25 | 0) < 1) {
     if ((i16 | 0) > 0) {
      break;
     }
     d20 = +HEAPF32[i10 >> 2];
     do {
      if (d20 > +0) {
       d15 = +HEAPF32[i11 >> 2];
       if (d15 <= +0) {
        break;
       }
       i14 = HEAP32[i4 >> 2] | 0;
       i26 = HEAP32[i4 + 4 >> 2] | 0;
       i27 = ~~+Math_ceil(+(i26 | 0) * d20 / d15);
       i28 = ~~+Math_ceil(+(i14 | 0) * d15 / d20);
       if ((i27 | 0) > (i14 | 0)) {
        HEAP32[i1 >> 2] = i14;
        HEAP32[i1 + 4 >> 2] = i28;
        i17 = i12;
        break L28;
       }
       if ((i28 | 0) > (i26 | 0)) {
        HEAP32[i1 >> 2] = i27;
        HEAP32[i1 + 4 >> 2] = i26;
        i17 = i12;
        break L28;
       }
       i29 = i1 | 0;
       if ((Math_imul(i27, i26) | 0) < (Math_imul(i28, i14) | 0)) {
        HEAP32[i29 >> 2] = i14;
        HEAP32[i1 + 4 >> 2] = i28;
        i17 = i12;
        break L28;
       } else {
        HEAP32[i29 >> 2] = i27;
        HEAP32[i1 + 4 >> 2] = i26;
        i17 = i12;
        break L28;
       }
      }
     } while (0);
     i26 = i4;
     i27 = i1;
     i29 = HEAP32[i26 + 4 >> 2] | 0;
     HEAP32[i27 >> 2] = HEAP32[i26 >> 2];
     HEAP32[i27 + 4 >> 2] = i29;
     i17 = i12;
     break L28;
    } else {
     if ((i16 | 0) < 1) {
      break;
     }
     i29 = i1;
     HEAP32[i29 >> 2] = i25;
     HEAP32[i29 + 4 >> 2] = i16;
     i17 = i12;
     break L28;
    }
   } while (0);
   d20 = +HEAPF32[i10 >> 2];
   d15 = +HEAPF32[i11 >> 2];
   do {
    if (d20 > +0) {
     i29 = (i25 | 0) != 0;
     if (d15 <= +0) {
      if (i29) {
       i18 = 35;
       break;
      } else {
       i18 = 36;
       break;
      }
     }
     if (i29) {
      i29 = ~~+Math_ceil(+(i25 | 0) * d15 / d20);
      HEAP32[i1 >> 2] = i25;
      HEAP32[i1 + 4 >> 2] = i29;
      i17 = i12;
      break L28;
     } else {
      HEAP32[i1 >> 2] = ~~+Math_ceil(+(i16 | 0) * d20 / d15);
      HEAP32[i1 + 4 >> 2] = i16;
      i17 = i12;
      break L28;
     }
    } else {
     if ((i25 | 0) == 0) {
      i18 = 36;
     } else {
      i18 = 35;
     }
    }
   } while (0);
   if ((i18 | 0) == 35) {
    i29 = HEAP32[i4 + 4 >> 2] | 0;
    HEAP32[i1 >> 2] = i25;
    HEAP32[i1 + 4 >> 2] = i29;
    i17 = i12;
    break;
   } else if ((i18 | 0) == 36) {
    HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i1 + 4 >> 2] = i16;
    i17 = i12;
    break;
   }
  }
 } while (0);
 if (i17 << 24 >> 24 == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  i30 = HEAP8[i9] | 0;
 } else {
  i30 = i3;
 }
 if (i30 << 24 >> 24 != 10) {
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject17getBorderEdgeInfoEPNS_10BorderEdgeEPKNS_11RenderStyleEbb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i1 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 i15 = (i14 | 0) == 0;
 i16 = (i14 | 0) == 3;
 i14 = i15 | i16;
 i17 = i3 + 16 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i18 + 120 >> 2] | 0;
 if ((HEAP32[(HEAP32[i18 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i19 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i20 = 0;
  } else {
   i21 = 3;
  }
 } else {
  i21 = 3;
 }
 if ((i21 | 0) == 3) {
  i20 = i19 >>> 1 & 67108863;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i7, i3, 60);
 i7 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[i7 + 120 >> 2] | 0;
 i18 = i19 >>> 27 & 15;
 if ((i19 & 1 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = (HEAP32[i7 + 116 >> 2] | 0) >>> 0 < 16777216 >>> 0 | 0;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 i19 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i20;
 i6 = i2 + 4 | 0;
 HEAP32[i6 >> 2] = i7;
 HEAP32[i6 + 4 >> 2] = i19;
 HEAP32[i2 + 12 >> 2] = (i18 | 0) == 9 & i20 >>> 0 < 3 >>> 0 ? 8 : i18;
 HEAP8[i2 + 16 | 0] = i22;
 HEAP8[i2 + 17 | 0] = (i14 | i4) & 1;
 i22 = HEAP32[i17 >> 2] | 0;
 i18 = HEAP32[i22 + 112 >> 2] | 0;
 if ((HEAP32[(HEAP32[i22 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i18 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i23 = 0;
  } else {
   i21 = 8;
  }
 } else {
  i21 = 8;
 }
 if ((i21 | 0) == 8) {
  i23 = i18 >>> 1 & 67108863;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i9, i3, 54);
 i9 = HEAP32[i17 >> 2] | 0;
 i18 = HEAP32[i9 + 112 >> 2] | 0;
 i22 = i18 >>> 27 & 15;
 if ((i18 & 1 | 0) == 0) {
  i24 = 0;
 } else {
  i24 = (HEAP32[i9 + 108 >> 2] | 0) >>> 0 < 16777216 >>> 0 | 0;
 }
 i9 = (i15 | i16) ^ 1;
 i16 = HEAP32[i8 >> 2] | 0;
 i15 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i2 + 20 >> 2] = i23;
 i8 = i2 + 24 | 0;
 HEAP32[i8 >> 2] = i16;
 HEAP32[i8 + 4 >> 2] = i15;
 HEAP32[i2 + 32 >> 2] = (i22 | 0) == 9 & i23 >>> 0 < 3 >>> 0 ? 8 : i22;
 HEAP8[i2 + 36 | 0] = i24;
 HEAP8[i2 + 37 | 0] = (i9 | i5) & 1;
 i24 = HEAP32[i17 >> 2] | 0;
 i22 = HEAP32[i24 + 128 >> 2] | 0;
 if ((HEAP32[(HEAP32[i24 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i22 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i25 = 0;
  } else {
   i21 = 13;
  }
 } else {
  i21 = 13;
 }
 if ((i21 | 0) == 13) {
  i25 = i22 >>> 1 & 67108863;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i11, i3, 35);
 i11 = HEAP32[i17 >> 2] | 0;
 i22 = HEAP32[i11 + 128 >> 2] | 0;
 i24 = i22 >>> 27 & 15;
 if ((i22 & 1 | 0) == 0) {
  i26 = 0;
 } else {
  i26 = (HEAP32[i11 + 124 >> 2] | 0) >>> 0 < 16777216 >>> 0 | 0;
 }
 i11 = HEAP32[i10 >> 2] | 0;
 i22 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i2 + 40 >> 2] = i25;
 i10 = i2 + 44 | 0;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i10 + 4 >> 2] = i22;
 HEAP32[i2 + 52 >> 2] = (i24 | 0) == 9 & i25 >>> 0 < 3 >>> 0 ? 8 : i24;
 HEAP8[i2 + 56 | 0] = i26;
 HEAP8[i2 + 57 | 0] = (i14 | i5) & 1;
 i5 = HEAP32[i17 >> 2] | 0;
 i14 = HEAP32[i5 + 104 >> 2] | 0;
 if ((HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  if ((i14 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i27 = 0;
  } else {
   i21 = 18;
  }
 } else {
  i21 = 18;
 }
 if ((i21 | 0) == 18) {
  i27 = i14 >>> 1 & 67108863;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i13, i3, 49);
 i3 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[i3 + 104 >> 2] | 0;
 i13 = i17 >>> 27 & 15;
 if ((i17 & 1 | 0) == 0) {
  i28 = 0;
  i29 = i9 | i4;
  i30 = i12 | 0;
  i31 = HEAP32[i30 >> 2] | 0;
  i32 = i12 + 4 | 0;
  i33 = HEAP32[i32 >> 2] | 0;
  i34 = i29 & 1;
  i35 = (i13 | 0) == 9;
  i36 = i27 >>> 0 < 3 >>> 0;
  i37 = i35 & i36;
  i38 = i37 ? 8 : i13;
  i39 = i2 + 60 | 0;
  HEAP32[i39 >> 2] = i27;
  i40 = i2 + 64 | 0;
  i41 = i40;
  i42 = i41 | 0;
  HEAP32[i42 >> 2] = i31;
  i43 = i41 + 4 | 0;
  HEAP32[i43 >> 2] = i33;
  i44 = i2 + 72 | 0;
  HEAP32[i44 >> 2] = i38;
  i45 = i2 + 76 | 0;
  HEAP8[i45] = i28;
  i46 = i2 + 77 | 0;
  HEAP8[i46] = i34;
  STACKTOP = i1;
  return;
 }
 i28 = (HEAP32[i3 + 100 >> 2] | 0) >>> 0 < 16777216 >>> 0 | 0;
 i29 = i9 | i4;
 i30 = i12 | 0;
 i31 = HEAP32[i30 >> 2] | 0;
 i32 = i12 + 4 | 0;
 i33 = HEAP32[i32 >> 2] | 0;
 i34 = i29 & 1;
 i35 = (i13 | 0) == 9;
 i36 = i27 >>> 0 < 3 >>> 0;
 i37 = i35 & i36;
 i38 = i37 ? 8 : i13;
 i39 = i2 + 60 | 0;
 HEAP32[i39 >> 2] = i27;
 i40 = i2 + 64 | 0;
 i41 = i40;
 i42 = i41 | 0;
 HEAP32[i42 >> 2] = i31;
 i43 = i41 + 4 | 0;
 HEAP32[i43 >> 2] = i33;
 i44 = i2 + 72 | 0;
 HEAP32[i44 >> 2] = i38;
 i45 = i2 + 76 | 0;
 HEAP8[i45] = i28;
 i46 = i2 + 77 | 0;
 HEAP8[i46] = i34;
 STACKTOP = i1;
 return;
}
function __ZN7WebCore20RenderBoxModelObject33clipBorderSideForComplexInnerPathEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEPKNS_10BorderEdgeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, d19 = +0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i7 = i1 | 0;
 i8 = i1 + 32 | 0;
 i9 = i1 + 48 | 0;
 i10 = i1 + 64 | 0;
 i11 = i9;
 i12 = i3;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 if ((i5 | 0) == 1) {
  i12 = i9 + 8 | 0;
  i11 = HEAP32[i6 + 60 >> 2] | 0;
  i3 = i9 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i11;
  i3 = (HEAP32[i12 >> 2] | 0) - i11 | 0;
  HEAP32[i12 >> 2] = (i3 | 0) > 0 ? i3 : 0;
 } else if ((i5 | 0) == 3) {
  i3 = i9 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i6 + 20 >> 2] | 0);
 } else if ((i5 | 0) == 0) {
  i3 = i9 + 12 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i6 + 40 >> 2] | 0);
 } else if ((i5 | 0) == 2) {
  i3 = i9 + 12 | 0;
  i12 = HEAP32[i6 >> 2] | 0;
  i6 = i9 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i12;
  i6 = (HEAP32[i3 >> 2] | 0) - i12 | 0;
  HEAP32[i3 >> 2] = (i6 | 0) > 0 ? i6 : 0;
 }
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i9);
 i9 = i7;
 i6 = i8;
 i3 = i7 | 0;
 i12 = i7;
 _memcpy(i9 | 0, i4 + 16 | 0, 32) | 0;
 i11 = i4;
 HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 do {
  if ((i5 | 0) == 0) {
   i11 = i7;
   i6 = HEAP32[i7 >> 2] | 0;
   i4 = i7 + 8 | 0;
   i13 = i4;
   i14 = i8 + 8 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   d16 = +((HEAP32[i4 >> 2] | 0) + i6 - i15 | 0);
   do {
    if (d16 > +0) {
     HEAP32[i14 >> 2] = ~~(+(i15 | 0) + d16);
     if ((i6 | 0) != 0) {
      break;
     }
     i4 = i8 | 0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + ~~(+-0 - d16);
    }
   } while (0);
   _memset(i7 + 16 | 0, 0, 16) | 0;
   i6 = HEAP32[i11 + 4 >> 2] | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   d16 = +(((i6 | 0) < (i15 | 0) ? i15 : i6) | 0);
   i6 = i8 + 12 | 0;
   if (d16 <= +(HEAP32[i6 >> 2] | 0)) {
    break;
   }
   HEAP32[i6 >> 2] = ~~d16;
  } else if ((i5 | 0) == 2) {
   i6 = i7 + 16 | 0;
   i15 = i6;
   i14 = HEAP32[i6 >> 2] | 0;
   i6 = i7 + 24 | 0;
   i4 = i6;
   i17 = i8 + 8 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   d16 = +((HEAP32[i6 >> 2] | 0) + i14 - i18 | 0);
   do {
    if (d16 > +0) {
     HEAP32[i17 >> 2] = ~~(+(i18 | 0) + d16);
     if ((i14 | 0) != 0) {
      break;
     }
     i6 = i8 | 0;
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + ~~(+-0 - d16);
    }
   } while (0);
   _memset(i9 | 0, 0, 16) | 0;
   i14 = HEAP32[i15 + 4 >> 2] | 0;
   i18 = HEAP32[i4 + 4 >> 2] | 0;
   d16 = +(((i14 | 0) < (i18 | 0) ? i18 : i14) | 0);
   i14 = i8 + 12 | 0;
   d19 = +(HEAP32[i14 >> 2] | 0);
   if (d16 <= d19) {
    break;
   }
   i18 = i8 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + ~~(d19 - d16);
   HEAP32[i14 >> 2] = ~~d16;
  } else if ((i5 | 0) == 3) {
   i14 = HEAP32[i7 + 4 >> 2] | 0;
   i18 = i7 + 16 | 0;
   i17 = i8 + 12 | 0;
   i13 = HEAP32[i17 >> 2] | 0;
   d16 = +((HEAP32[i18 + 4 >> 2] | 0) + i14 - i13 | 0);
   do {
    if (d16 > +0) {
     HEAP32[i17 >> 2] = ~~(+(i13 | 0) + d16);
     if ((i14 | 0) != 0) {
      break;
     }
     i11 = i8 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + ~~(+-0 - d16);
    }
   } while (0);
   i14 = i7 + 8 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   i14 = i7 + 24 | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   i14 = HEAP32[i7 >> 2] | 0;
   i13 = HEAP32[i18 >> 2] | 0;
   d16 = +(((i14 | 0) < (i13 | 0) ? i13 : i14) | 0);
   i14 = i8 + 8 | 0;
   if (d16 <= +(HEAP32[i14 >> 2] | 0)) {
    break;
   }
   HEAP32[i14 >> 2] = ~~d16;
  } else if ((i5 | 0) == 1) {
   i14 = i7 + 8 | 0;
   i13 = HEAP32[i12 + 12 >> 2] | 0;
   i17 = i7 + 24 | 0;
   i4 = i8 + 12 | 0;
   i15 = HEAP32[i4 >> 2] | 0;
   d16 = +((HEAP32[i12 + 28 >> 2] | 0) + i13 - i15 | 0);
   do {
    if (d16 > +0) {
     HEAP32[i4 >> 2] = ~~(+(i15 | 0) + d16);
     if ((i13 | 0) != 0) {
      break;
     }
     i11 = i8 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + ~~(+-0 - d16);
    }
   } while (0);
   HEAP32[i3 >> 2] = 0;
   HEAP32[i3 + 4 >> 2] = 0;
   i13 = i7 + 16 | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   i13 = HEAP32[i14 >> 2] | 0;
   i15 = HEAP32[i17 >> 2] | 0;
   d16 = +(((i13 | 0) < (i15 | 0) ? i15 : i13) | 0);
   i13 = i8 + 8 | 0;
   d19 = +(HEAP32[i13 >> 2] | 0);
   if (d16 <= d19) {
    break;
   }
   i15 = i8 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + ~~(d19 - d16);
   HEAP32[i13 >> 2] = ~~d16;
  }
 } while (0);
 __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i10, i8, i12);
 __ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE(i2, i10);
 STACKTOP = i1;
 return;
}
function __ZN7WebCore20RenderBoxModelObject20clipRoundedInnerRectEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_11RoundedRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 if (__ZNK7WebCore11RoundedRect12isRenderableEv(i3) | 0) {
  __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i3);
  STACKTOP = i4;
  return;
 }
 i19 = i3 + 16 | 0;
 if ((HEAP32[i19 >> 2] | 0) < 1) {
  i20 = 5;
 } else {
  if ((HEAP32[i3 + 20 >> 2] | 0) < 1) {
   i20 = 5;
  } else {
   i20 = 7;
  }
 }
 do {
  if ((i20 | 0) == 5) {
   if ((HEAP32[i3 + 40 >> 2] | 0) < 1) {
    break;
   }
   if ((HEAP32[i3 + 44 >> 2] | 0) >= 1) {
    i20 = 7;
   }
  }
 } while (0);
 if ((i20 | 0) == 7) {
  i21 = i3 | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  i23 = i3 + 4 | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  i25 = i2 | 0;
  i26 = (HEAP32[i25 >> 2] | 0) - i22 + (HEAP32[i2 + 8 >> 2] | 0) | 0;
  i27 = i2 + 4 | 0;
  i28 = (HEAP32[i27 >> 2] | 0) - i24 + (HEAP32[i2 + 12 >> 2] | 0) | 0;
  HEAP32[i5 >> 2] = i22;
  HEAP32[i5 + 4 >> 2] = i24;
  HEAP32[i5 + 8 >> 2] = i26;
  HEAP32[i5 + 12 >> 2] = i28;
  _memset(i6 | 0, 0, 32) | 0;
  i6 = i19;
  i19 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i19;
  __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i9, i5, i8);
  __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i9);
  i9 = HEAP32[i25 >> 2] | 0;
  i25 = HEAP32[i27 >> 2] | 0;
  i27 = (HEAP32[i21 >> 2] | 0) - i9 + (HEAP32[i3 + 8 >> 2] | 0) | 0;
  i21 = (HEAP32[i23 >> 2] | 0) - i25 + (HEAP32[i3 + 12 >> 2] | 0) | 0;
  HEAP32[i10 >> 2] = i9;
  HEAP32[i10 + 4 >> 2] = i25;
  HEAP32[i10 + 8 >> 2] = i27;
  HEAP32[i10 + 12 >> 2] = i21;
  _memset(i11 | 0, 0, 24) | 0;
  i21 = i3 + 40 | 0;
  i27 = i11 + 24 | 0;
  i25 = HEAP32[i21 + 4 >> 2] | 0;
  HEAP32[i27 >> 2] = HEAP32[i21 >> 2];
  HEAP32[i27 + 4 >> 2] = i25;
  __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i12, i10, i11);
  __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i12);
 }
 i12 = i3 + 24 | 0;
 if ((HEAP32[i12 >> 2] | 0) < 1) {
  i20 = 10;
 } else {
  if ((HEAP32[i3 + 28 >> 2] | 0) < 1) {
   i20 = 10;
  }
 }
 do {
  if ((i20 | 0) == 10) {
   if ((HEAP32[i3 + 32 >> 2] | 0) < 1) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i3 + 36 >> 2] | 0) >= 1) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i20 = i2 | 0;
 i11 = HEAP32[i20 >> 2] | 0;
 i10 = i3 + 4 | 0;
 i25 = HEAP32[i10 >> 2] | 0;
 i27 = i3 | 0;
 i21 = (HEAP32[i27 >> 2] | 0) - i11 + (HEAP32[i3 + 8 >> 2] | 0) | 0;
 i9 = i2 + 4 | 0;
 i23 = (HEAP32[i9 >> 2] | 0) - i25 + (HEAP32[i2 + 12 >> 2] | 0) | 0;
 HEAP32[i13 >> 2] = i11;
 HEAP32[i13 + 4 >> 2] = i25;
 HEAP32[i13 + 8 >> 2] = i21;
 HEAP32[i13 + 12 >> 2] = i23;
 _memset(i14 | 0, 0, 32) | 0;
 i23 = i12;
 i12 = i14 + 8 | 0;
 i21 = HEAP32[i23 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i23 >> 2];
 HEAP32[i12 + 4 >> 2] = i21;
 __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i15, i13, i14);
 __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i15);
 i15 = HEAP32[i27 >> 2] | 0;
 i27 = HEAP32[i9 >> 2] | 0;
 i9 = (HEAP32[i20 >> 2] | 0) - i15 + (HEAP32[i2 + 8 >> 2] | 0) | 0;
 i2 = (HEAP32[i10 >> 2] | 0) - i27 + (HEAP32[i3 + 12 >> 2] | 0) | 0;
 HEAP32[i16 >> 2] = i15;
 HEAP32[i16 + 4 >> 2] = i27;
 HEAP32[i16 + 8 >> 2] = i9;
 HEAP32[i16 + 12 >> 2] = i2;
 _memset(i17 | 0, 0, 32) | 0;
 i2 = i3 + 32 | 0;
 i3 = i17 + 16 | 0;
 i9 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i3 + 4 >> 2] = i9;
 __ZN7WebCore11RoundedRectC1ERKNS_7IntRectERKNS0_5RadiiE(i18, i16, i17);
 __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i18);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, d20 = +0, d21 = +0, d22 = +0, d23 = +0, i24 = 0, d25 = +0, d26 = +0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i4;
 _memset(i17 | 0, 0, 16) | 0;
 i18 = __ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE(HEAP32[i2 + 40 >> 2] | 0, 1) | 0;
 if ((i18 | 0) == 0) {
  i19 = i2 + 4 | 0;
  __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0);
  __ZN7WebCore10LayoutRect5scaleEf(i14, +1 / +__ZNK7WebCore5Frame16frameScaleFactorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0));
  d20 = +(+(HEAP32[i14 >> 2] | 0));
  d21 = +(+(HEAP32[i14 + 4 >> 2] | 0));
  d22 = +(+(HEAP32[i14 + 8 >> 2] | 0));
  d23 = +(+(HEAP32[i14 + 12 >> 2] | 0));
  i14 = i4 | 0;
  HEAPF32[i14 >> 2] = d20;
  HEAPF32[i14 + 4 >> 2] = d21;
  i14 = i4 + 8 | 0;
  HEAPF32[i14 >> 2] = d22;
  HEAPF32[i14 + 4 >> 2] = d23;
 } else {
  i14 = i4 | 0;
  i4 = i9 | 0;
  i19 = HEAP32[i18 + 32 >> 2] | 0;
  i24 = HEAP32[(HEAP32[i19 >> 2] | 0) + 936 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i7 + 4 >> 2] = 0;
  FUNCTION_TABLE_viiiiii[i24 & 1](i6, i19, i7, 0, 0, 0);
  d23 = +(HEAP32[i6 >> 2] | 0);
  d22 = +(HEAP32[i6 + 4 >> 2] | 0);
  d21 = +(HEAP32[i6 + 8 >> 2] | 0);
  d20 = +(HEAP32[i6 + 12 >> 2] | 0);
  d25 = +d23;
  d26 = +d22;
  HEAPF32[i4 >> 2] = d25;
  HEAPF32[i4 + 4 >> 2] = d26;
  d26 = d23 + d21;
  HEAPF32[i9 + 8 >> 2] = d26;
  HEAPF32[i10 + 12 >> 2] = d22;
  d21 = d22 + d20;
  HEAPF32[i9 + 16 >> 2] = d26;
  HEAPF32[i10 + 20 >> 2] = d21;
  HEAPF32[i9 + 24 >> 2] = d23;
  HEAPF32[i10 + 28 >> 2] = d21;
  __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i11, i19 | 0, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0, 0);
  __ZNK7WebCore9FloatQuad11boundingBoxEv(i8, i11);
  i11 = i8;
  HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  i11 = (HEAP32[i18 + 16 >> 2] | 0) + (HEAP32[i18 + 116 >> 2] | 0) | 0;
  HEAP32[i13 >> 2] = (HEAP32[i18 + 12 >> 2] | 0) + (HEAP32[i18 + 112 >> 2] | 0);
  HEAP32[i13 + 4 >> 2] = i11;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i12, i13);
  d21 = +(+HEAPF32[i12 >> 2] + +0);
  d23 = +(+HEAPF32[i12 + 4 >> 2] + +0);
  HEAPF32[i14 >> 2] = d21;
  HEAPF32[i14 + 4 >> 2] = d23;
 }
 HEAPF32[i15 + 4 >> 2] = +0;
 HEAPF32[i15 + 8 >> 2] = +0;
 HEAP32[i15 + 12 >> 2] = 0;
 HEAP32[i15 >> 2] = H_BASE + 16;
 _memset(i15 + 16 | 0, 0, 80) | 0;
 __ZNK7WebCore20RenderBoxModelObject32computeStickyPositionConstraintsERNS_33StickyPositionViewportConstraintsERKNS_9FloatRectE(i2, i15, i5);
 __ZNK7WebCore33StickyPositionViewportConstraints19computeStickyOffsetERKNS_9FloatRectE(i16, i15, i5);
 d23 = +HEAPF32[i16 >> 2];
 do {
  if (d23 < +2147483647) {
   if (d23 <= +-2147483648) {
    i27 = -2147483648;
    break;
   }
   i27 = ~~d23;
  } else {
   i27 = 2147483647;
  }
 } while (0);
 HEAP32[i1 >> 2] = i27;
 d23 = +HEAPF32[i16 + 4 >> 2];
 if (d23 >= +2147483647) {
  i28 = 2147483647;
  i29 = i1 + 4 | 0;
  HEAP32[i29 >> 2] = i28;
  STACKTOP = i3;
  return;
 }
 if (d23 <= +-2147483648) {
  i28 = -2147483648;
  i29 = i1 + 4 | 0;
  HEAP32[i29 >> 2] = i28;
  STACKTOP = i3;
  return;
 }
 i28 = ~~d23;
 i29 = i1 + 4 | 0;
 HEAP32[i29 >> 2] = i28;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject24borderObscuresBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 i5 = HEAP32[(HEAP32[i1 + 132 >> 2] | 0) + 8 >> 2] | 0;
 i6 = (i5 | 0) != 0;
 i7 = HEAP32[i1 + 104 >> 2] | 0;
 i8 = (i7 & 134217726 | 0) == 0;
 if (i8 | i6) {
  if (i8) {
   i9 = 4;
  } else {
   i9 = 13;
  }
 } else {
  if ((i7 & 2013265920 | 0) == 0) {
   i9 = 4;
  } else {
   i9 = 13;
  }
 }
 do {
  if ((i9 | 0) == 4) {
   i7 = HEAP32[i1 + 112 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if (!i8) {
     i9 = 13;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i9 = 13;
     break;
    }
   }
   i7 = HEAP32[i1 + 120 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if (!i8) {
     i9 = 13;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i9 = 13;
     break;
    }
   }
   i7 = HEAP32[i1 + 128 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if ((i5 | 0) == 0 & (i8 ^ 1)) {
     break;
    } else {
     i10 = 0;
    }
    STACKTOP = i2;
    return i10 | 0;
   } else {
    if ((i7 & 2013265920 | 0) != 0 & (i5 | 0) == 0) {
     break;
    } else {
     i10 = 0;
    }
    STACKTOP = i2;
    return i10 | 0;
   }
  }
 } while (0);
 do {
  if ((i9 | 0) == 13) {
   if ((i5 | 0) == 0) {
    break;
   } else {
    i10 = 0;
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 HEAP8[i3 + 8 | 0] = 0;
 HEAP32[i3 + 12 >> 2] = 1;
 HEAP8[i3 + 16 | 0] = 0;
 HEAP8[i3 + 17 | 0] = 0;
 HEAP32[i3 + 20 >> 2] = 0;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP8[i3 + 28 | 0] = 0;
 HEAP32[i3 + 32 >> 2] = 1;
 HEAP8[i3 + 36 | 0] = 0;
 HEAP8[i3 + 37 | 0] = 0;
 HEAP32[i3 + 40 >> 2] = 0;
 HEAP32[i3 + 44 >> 2] = 0;
 HEAP8[i3 + 48 | 0] = 0;
 HEAP32[i3 + 52 >> 2] = 1;
 HEAP8[i3 + 56 | 0] = 0;
 HEAP8[i3 + 57 | 0] = 0;
 HEAP32[i3 + 60 >> 2] = 0;
 HEAP32[i3 + 64 >> 2] = 0;
 HEAP8[i3 + 68 | 0] = 0;
 HEAP32[i3 + 72 >> 2] = 1;
 HEAP8[i3 + 76 | 0] = 0;
 HEAP8[i3 + 77 | 0] = 0;
 __ZNK7WebCore20RenderBoxModelObject17getBorderEdgeInfoEPNS_10BorderEdgeEPKNS_11RenderStyleEbb(0, i3 | 0, i4, 1, 1);
 if ((HEAP8[i3 + 17 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 16 | 0] & 1) != 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i3 + 4 >> 2] & -16777216 | 0) != -16777216) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i4 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i4 | 0) == 1 | (i4 | 0) == 6 | (i4 | 0) == 7 | (i4 | 0) == 9) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 37 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 36 | 0] & 1) != 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i3 + 24 >> 2] & -16777216 | 0) != -16777216) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i4 = HEAP32[i3 + 32 >> 2] | 0;
 if ((i4 | 0) == 1 | (i4 | 0) == 6 | (i4 | 0) == 7 | (i4 | 0) == 9) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 57 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 56 | 0] & 1) != 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i3 + 44 >> 2] & -16777216 | 0) != -16777216) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i4 = HEAP32[i3 + 52 >> 2] | 0;
 if ((i4 | 0) == 1 | (i4 | 0) == 6 | (i4 | 0) == 7 | (i4 | 0) == 9) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 77 | 0] & 1) == 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP8[i3 + 76 | 0] & 1) != 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((HEAP32[i3 + 64 >> 2] & -16777216 | 0) != -16777216) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i4 = HEAP32[i3 + 72 >> 2] | 0;
 if ((i4 | 0) == 1 | (i4 | 0) == 6 | (i4 | 0) == 7 | (i4 | 0) == 9) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i10 = 1;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject46backgroundRoundedRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeEbb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i11 = i10 | 0;
 i12 = i10 + 48 | 0;
 i13 = i10 + 64 | 0;
 i14 = i10 + 112 | 0;
 i15 = i10 + 128 | 0;
 i16 = i10 + 176 | 0;
 if ((i5 | 0) == 1) {
  i17 = i16;
  i18 = i4;
  HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
  __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i15, i3, 1);
  d19 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i15));
  do {
   if (d19 < +2147483647) {
    if (d19 <= +-2147483648) {
     i20 = -2147483648;
     break;
    }
    i20 = ~~d19;
   } else {
    i20 = 2147483647;
   }
  } while (0);
  i3 = i16 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i20;
  i3 = i16 + 8 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (i20 * -2 & -1);
  d19 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i15));
  do {
   if (d19 < +2147483647) {
    if (d19 <= +-2147483648) {
     i21 = -2147483648;
     break;
    }
    i21 = ~~d19;
   } else {
    i21 = 2147483647;
   }
  } while (0);
  i15 = i16 + 4 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i21;
  i15 = i16 + 12 | 0;
  HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + (i21 * -2 & -1);
  i21 = HEAP32[i7 >> 2] | 0;
  i15 = HEAP32[i7 + 4 >> 2] | 0;
  i20 = i2 + 36 | 0;
  i3 = i2 + 4 | 0;
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i1, HEAP32[i20 >> 2] | 0, i16, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i8, i9);
  if ((i6 | 0) == 0) {
   STACKTOP = i10;
   return;
  }
  do {
   if ((HEAP32[i6 + 52 >> 2] | 0) == 0) {
    if ((HEAP32[i6 + 48 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i10;
    return;
   }
  } while (0);
  i16 = HEAP32[i20 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  HEAP32[i14 + 8 >> 2] = i21;
  HEAP32[i14 + 12 >> 2] = i15;
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i13, i16, i14, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i8, i9);
  _memcpy(i1 + 16 | 0, i13 + 16 | 0, 32) | 0;
  STACKTOP = i10;
  return;
 } else if ((i5 | 0) == 3) {
  __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i1, HEAP32[i2 + 36 >> 2] | 0, i4, i8, i9);
  STACKTOP = i10;
  return;
 } else {
  i5 = HEAP32[i7 >> 2] | 0;
  i13 = HEAP32[i7 + 4 >> 2] | 0;
  i7 = i2 + 36 | 0;
  i3 = i2 + 4 | 0;
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i1, HEAP32[i7 >> 2] | 0, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i8, i9);
  if ((i6 | 0) == 0) {
   STACKTOP = i10;
   return;
  }
  do {
   if ((HEAP32[i6 + 52 >> 2] | 0) == 0) {
    if ((HEAP32[i6 + 48 >> 2] | 0) != 0) {
     break;
    }
    STACKTOP = i10;
    return;
   }
  } while (0);
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 0;
  HEAP32[i12 + 8 >> 2] = i5;
  HEAP32[i12 + 12 >> 2] = i13;
  __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i11, i6, i12, HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i8, i9);
  _memcpy(i1 + 16 | 0, i11 + 16 | 0, 32) | 0;
  STACKTOP = i10;
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
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
    i24 = i10 + (i23 << 3) | 0;
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
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
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
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
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
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
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
  i28 = __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i7 = i9 + ~(i9 << 15) | 0;
 i9 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i9 >>> 6 ^ i9;
 i9 = i7 + ~(i7 << 11) | 0;
 i7 = i9 >>> 16 ^ i9;
 i9 = i7 & i6;
 i11 = i10 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 11;
  } else {
   i15 = (i7 >>> 23) + ~i7 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
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
    i24 = i10 + (i23 << 3) | 0;
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
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
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
    i20 = i21;
    HEAP32[i20 >> 2] = 0;
    HEAP32[i20 + 4 >> 2] = 0;
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
 HEAP32[i26 + 4 >> 2] = HEAP32[i4 >> 2];
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
  i28 = __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i2, i31, i26) | 0;
  i29 = i28;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore20RenderBoxModelObject27paintTranslucentBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13 | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i13;
  return;
 }
 i15 = i14 | 0;
 i16 = i14 + 4 | 0;
 i17 = i14;
 i18 = i8;
 while (1) {
  HEAP32[i15 >> 2] = 0;
  HEAP8[i16] = 0;
  if ((i18 & 1 | 0) == 0) {
   i19 = 0;
  } else {
   i8 = i7 + 4 | 0;
   HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
   HEAP8[i17 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
   i19 = 1;
  }
  do {
   if ((i18 & 4 | 0) == 0) {
    i20 = i19;
   } else {
    i8 = i7 + 44 | 0;
    if ((i19 | 0) == 0) {
     i21 = i8;
     HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
     HEAP8[i17 + 4 | 0] = HEAP8[i21 + 4 | 0] | 0;
    } else {
     if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i15 >> 2] | 0)) {
      i20 = i19;
      break;
     }
     if ((HEAP8[i7 + 48 | 0] & 1) != 0 ^ (HEAP8[i16] & 1) != 0) {
      i20 = i19;
      break;
     }
    }
    i20 = i19 | 4;
   }
  } while (0);
  do {
   if ((i18 & 8 | 0) == 0) {
    i22 = i20;
   } else {
    i8 = i7 + 64 | 0;
    if ((i20 | 0) == 0) {
     i21 = i8;
     HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
     HEAP8[i17 + 4 | 0] = HEAP8[i21 + 4 | 0] | 0;
    } else {
     if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i15 >> 2] | 0)) {
      i22 = i20;
      break;
     }
     if ((HEAP8[i7 + 68 | 0] & 1) != 0 ^ (HEAP8[i16] & 1) != 0) {
      i22 = i20;
      break;
     }
    }
    i22 = i20 | 8;
   }
  } while (0);
  do {
   if ((i18 & 2 | 0) == 0) {
    i23 = i22;
   } else {
    i8 = i7 + 24 | 0;
    if ((i22 | 0) == 0) {
     i21 = i8;
     HEAP32[i17 >> 2] = HEAP32[i21 >> 2];
     HEAP8[i17 + 4 | 0] = HEAP8[i21 + 4 | 0] | 0;
    } else {
     if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i15 >> 2] | 0)) {
      i23 = i22;
      break;
     }
     if ((HEAP8[i7 + 28 | 0] & 1) != 0 ^ (HEAP8[i16] & 1) != 0) {
      i23 = i22;
      break;
     }
    }
    i23 = i22 | 2;
   }
  } while (0);
  do {
   if ((i23 & 3 | 0) == 3 | (i23 & 6 | 0) == 6 | (i23 & 12 | 0) == 12 | (i23 & 9 | 0) == 9) {
    i8 = HEAP32[i15 >> 2] | 0;
    if ((i8 & -16777216 | 0) == -16777216) {
     i24 = 8;
     break;
    }
    __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i2, +(i8 >>> 24 | 0) / +255);
    i8 = HEAP32[i15 >> 2] | 0;
    HEAP32[i15 >> 2] = __ZN7WebCore7makeRGBEiii(i8 >>> 16 & 255, i8 >>> 8 & 255, i8 & 255) | 0;
    HEAP8[i16] = 1;
    __ZN7WebCore20RenderBoxModelObject16paintBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i6, i7, i23, i9, i10, i11, i12, i14);
    __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i2);
   } else {
    i24 = 8;
   }
  } while (0);
  if ((i24 | 0) == 8) {
   i24 = 0;
   __ZN7WebCore20RenderBoxModelObject16paintBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE(i1, i2, i3, i4, i5, i6, i7, i23, i9, i10, i11, i12, i14);
  }
  i18 = i18 & ~i23;
  if ((i18 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i13;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 184 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i1 | 0;
 i14 = __ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i13, 0, 0) | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] & 255](i14 | 0) | 0) {
   if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
    i15 = i14;
    break;
   }
   __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i14, i1, i6, i7);
   i16 = HEAP32[i6 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i15 = i14;
    break;
   }
   i15 = i16 | 0;
  } else {
   i15 = i14;
  }
 } while (0);
 i14 = i15 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 592 >> 2] & 31](i14, i2, i3);
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 468 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 FUNCTION_TABLE_viiiii[i6 & 7](i8, i13, i14, i9, 0);
 i9 = i1 + 36 | 0;
 i1 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 do {
  if (!((i1 | 0) == 6 | (i1 | 0) == 2)) {
   if ((HEAP32[i15 + 20 >> 2] & 4194304 | 0) == 0) {
    break;
   }
   i6 = i15;
   __ZNK7WebCore14TransformState11mappedPointEPb(i11, i3, 0);
   d17 = +_round(+(+HEAPF32[i11 >> 2]));
   do {
    if (d17 < +2147483647) {
     if (d17 <= +-2147483648) {
      i18 = -2147483648;
      break;
     }
     i18 = ~~d17;
    } else {
     i18 = 2147483647;
    }
   } while (0);
   d17 = +_round(+(+HEAPF32[i11 + 4 >> 2]));
   do {
    if (d17 < +2147483647) {
     if (d17 <= +-2147483648) {
      i19 = -2147483648;
      break;
     }
     i19 = ~~d17;
    } else {
     i19 = 2147483647;
    }
   } while (0);
   i7 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i10 >> 2] = i18 - (HEAP32[i8 >> 2] | 0);
   HEAP32[i10 + 4 >> 2] = i19 - i7;
   __ZNK7WebCore11RenderBlock19adjustForColumnRectERNS_10LayoutSizeERKNS_11LayoutPointE(i6, i8, i10);
  }
 } while (0);
 do {
  if ((i2 & 2 | 0) == 0) {
   i20 = 0;
  } else {
   if ((HEAP32[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
    i21 = (HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] | 0) >>> 9 & 1;
   } else {
    i21 = 1;
   }
   if (!(__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(i13, i14) | 0)) {
    i20 = i21;
    break;
   }
   HEAPF64[i12 >> 3] = +1;
   _memset(i12 + 8 | 0, 0, 32) | 0;
   HEAPF64[i12 + 40 >> 3] = +1;
   _memset(i12 + 48 | 0, 0, 32) | 0;
   HEAPF64[i12 + 80 >> 3] = +1;
   _memset(i12 + 88 | 0, 0, 32) | 0;
   HEAPF64[i12 + 120 >> 3] = +1;
   __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i13, i14, i8, i12);
   __ZN7WebCore14TransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationEPb(i3, i12, i21, 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i21 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = i21;
 __ZN7WebCore14TransformState4moveERKNS_10LayoutSizeENS0_21TransformAccumulationE(i3, i5, i20);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 L1 : do {
  if ((i2 | 0) == 0) {
   i6 = i1 + 36 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i8 = HEAP32[i7 + 20 >> 2] | 0;
   if ((HEAP32[i8 + 296 >> 2] & 63 | 0) != 0) {
    i9 = 0;
    break;
   }
   i10 = HEAP32[i8 + 100 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i9 = 0;
    break;
   } else {
    i11 = 0;
    i12 = i10;
   }
   while (1) {
    if ((HEAP32[i12 + 24 >> 2] | 0) == 0) {
     if (i11) {
      i9 = 0;
      break L1;
     }
     if ((HEAP32[i12 + 12 >> 2] | 0) == 0) {
      i13 = 1;
     } else {
      i9 = 0;
      break L1;
     }
    } else {
     i13 = i11;
    }
    i10 = HEAP32[i12 + 32 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i11 = i13;
     i12 = i10;
    }
   }
   if (!i13) {
    i9 = 0;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i5, i7, 23);
   if ((HEAP8[i5 + 4 | 0] & 1) == 0) {
    i9 = 0;
    break;
   }
   if ((HEAP32[i5 >> 2] & -16777216 | 0) != -16777216) {
    i9 = 0;
    break;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   i8 = (HEAP32[i10 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    i14 = HEAP32[i8 >> 2] | 0;
    if ((i14 | 0) == 0) {
     break;
    } else {
     i8 = i14;
    }
   }
   i6 = i8 + 40 | 0;
   if ((HEAP32[i6 >> 2] & 12 | 0) != 0) {
    i9 = 0;
    break;
   }
   do {
    if ((HEAP32[i8 + 4 >> 2] | 0) != 0) {
     i7 = HEAP32[i10 + 16 >> 2] | 0;
     i14 = i7 + 136 | 0;
     if ((HEAP8[i7 + 141 | 0] | 0) == 10) {
      i9 = 0;
      break L1;
     }
     if ((HEAP8[i7 + 142 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) != 0) {
       i9 = 0;
       break L1;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       i9 = 0;
       break L1;
      }
     }
     i14 = i7 + 152 | 0;
     if ((HEAP8[i7 + 157 | 0] | 0) == 10) {
      i9 = 0;
      break L1;
     }
     if ((HEAP8[i7 + 158 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) != 0) {
       i9 = 0;
       break L1;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       i9 = 0;
       break L1;
      }
     }
     i14 = i7 + 168 | 0;
     if ((HEAP8[i7 + 173 | 0] | 0) == 10) {
      i9 = 0;
      break L1;
     }
     if ((HEAP8[i7 + 174 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) != 0) {
       i9 = 0;
       break L1;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       i9 = 0;
       break L1;
      }
     }
     i14 = i7 + 184 | 0;
     if ((HEAP8[i7 + 189 | 0] | 0) == 10) {
      i9 = 0;
      break L1;
     }
     if ((HEAP8[i7 + 190 | 0] & 1) == 0) {
      if ((HEAP32[i14 >> 2] | 0) == 0) {
       break;
      } else {
       i9 = 0;
       break L1;
      }
     } else {
      if (+HEAPF32[i14 >> 2] != +0) {
       i9 = 0;
       break L1;
      } else {
       break;
      }
     }
    }
   } while (0);
   if ((i3 | 0) != 0) {
    if (!(__ZNK7WebCore13InlineFlowBox33boxShadowCanBeAppliedToBackgroundERKNS_9FillLayerE(i3, i8) | 0)) {
     i9 = 0;
     break;
    }
   }
   if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) != 0) {
    if ((HEAP32[i6 >> 2] & 3 | 0) == 1) {
     i9 = 0;
     break;
    }
   }
   i9 = 1;
  } else {
   i9 = 0;
  }
 } while (0);
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore20RenderBoxModelObject23paintMaskForTextFillBoxEPNS_11ImageBufferERKNS_7IntRectEPNS_13InlineFlowBoxERKNS_10LayoutRectEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 i10 = i7 + 56 | 0;
 i11 = i7 + 64 | 0;
 i12 = i7 + 72 | 0;
 i13 = i7 + 88 | 0;
 i14 = i7 + 96 | 0;
 i15 = __ZNK7WebCore11ImageBuffer7contextEv(i2) | 0;
 __ZN7WebCore15GraphicsContext9translateEff(i15, +(-(HEAP32[i3 >> 2] | 0) | 0), +(-(HEAP32[i3 + 4 >> 2] | 0) | 0));
 HEAP32[i8 >> 2] = i15;
 i2 = i8 + 4 | 0;
 i16 = i3;
 HEAP32[i2 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 HEAP32[i8 + 20 >> 2] = 10;
 HEAP32[i8 + 24 >> 2] = 2;
 HEAP32[i8 + 28 >> 2] = 0;
 HEAP32[i8 + 32 >> 2] = i6;
 HEAP32[i8 + 36 >> 2] = 0;
 HEAP32[i8 + 40 >> 2] = 0;
 HEAP32[i8 + 44 >> 2] = 0;
 if ((i4 | 0) != 0) {
  i6 = __ZN7WebCore9InlineBox4rootEv(i4 | 0) | 0;
  i16 = HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] | 0;
  d17 = +(HEAP32[i5 >> 2] | 0) - +HEAPF32[i4 + 20 >> 2];
  do {
   if (d17 < +2147483647) {
    if (d17 <= +-2147483648) {
     i18 = -2147483648;
     break;
    }
    i18 = ~~d17;
   } else {
    i18 = 2147483647;
   }
  } while (0);
  d17 = +(HEAP32[i5 + 4 >> 2] | 0) - +HEAPF32[i4 + 24 >> 2];
  do {
   if (d17 < +2147483647) {
    if (d17 <= +-2147483648) {
     i19 = -2147483648;
     break;
    }
    i19 = ~~d17;
   } else {
    i19 = 2147483647;
   }
  } while (0);
  HEAP32[i9 >> 2] = i18;
  HEAP32[i9 + 4 >> 2] = i19;
  HEAP32[i10 >> 2] = HEAP32[i6 + 72 >> 2];
  HEAP32[i11 >> 2] = HEAP32[i6 + 76 >> 2];
  FUNCTION_TABLE_viiiii[i16 & 7](i4, i8, i9, i10, i11);
  STACKTOP = i7;
  return;
 }
 i11 = i1 | 0;
 do {
  if ((HEAP32[i1 + 24 >> 2] & 32 | 0) != 0) {
   i10 = HEAP32[i11 + 100 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 + 28 >> 2] | 0) == 0) {
    break;
   }
   i9 = HEAP32[i10 + 28 >> 2] | 0;
   i10 = HEAP32[i9 + 116 >> 2] | 0;
   if ((i10 | 0) == 0) {
    STACKTOP = i7;
    return;
   }
   i4 = HEAP32[i10 + 40 >> 2] | 0;
   i10 = i3;
   i16 = HEAP32[i10 >> 2] | 0;
   i6 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = i16;
   HEAP32[i12 + 4 >> 2] = i6;
   i10 = i3 + 8 | 0;
   i19 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i12 + 8 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 12 >> 2] = i19;
   HEAP32[i13 >> 2] = i16;
   HEAP32[i13 + 4 >> 2] = i6;
   __ZN7WebCore11RenderLayer32paintNamedFlowThreadInsideRegionEPNS_15GraphicsContextEPNS_23RenderNamedFlowFragmentENS_10LayoutRectENS_11LayoutPointEjj(i4, i15, i9, i12, i13, 2, 4);
   STACKTOP = i7;
   return;
  }
 } while (0);
 i13 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i20 = 0;
  i21 = 0;
 } else {
  i20 = HEAP32[i13 + 44 >> 2] | 0;
  i21 = HEAP32[i13 + 48 >> 2] | 0;
 }
 i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + 648 >> 2] | 0;
 i1 = i5;
 i5 = (HEAP32[i1 + 4 >> 2] | 0) - i21 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i1 >> 2] | 0) - i20;
 HEAP32[i14 + 4 >> 2] = i5;
 FUNCTION_TABLE_viii[i13 & 31](i11, i8, i14);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject28borderObscuresBackgroundEdgeERKNS_9FloatSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, d8 = +0, d9 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP8[i4 + 8 | 0] = 0;
 HEAP32[i4 + 12 >> 2] = 1;
 HEAP8[i4 + 16 | 0] = 0;
 HEAP8[i4 + 17 | 0] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP8[i4 + 28 | 0] = 0;
 HEAP32[i4 + 32 >> 2] = 1;
 HEAP8[i4 + 36 | 0] = 0;
 HEAP8[i4 + 37 | 0] = 0;
 HEAP32[i4 + 40 >> 2] = 0;
 HEAP32[i4 + 44 >> 2] = 0;
 HEAP8[i4 + 48 | 0] = 0;
 HEAP32[i4 + 52 >> 2] = 1;
 HEAP8[i4 + 56 | 0] = 0;
 HEAP8[i4 + 57 | 0] = 0;
 HEAP32[i4 + 60 >> 2] = 0;
 HEAP32[i4 + 64 >> 2] = 0;
 HEAP8[i4 + 68 | 0] = 0;
 HEAP32[i4 + 72 >> 2] = 1;
 HEAP8[i4 + 76 | 0] = 0;
 HEAP8[i4 + 77 | 0] = 0;
 __ZNK7WebCore20RenderBoxModelObject17getBorderEdgeInfoEPNS_10BorderEdgeEPKNS_11RenderStyleEbb(0, i4 | 0, HEAP32[i1 + 36 >> 2] | 0, 1, 1);
 i1 = i2 | 0;
 i5 = i2 + 4 | 0;
 d6 = +HEAPF32[i5 >> 2];
 do {
  if ((HEAP8[i4 + 17 | 0] & 1) == 0) {
   i7 = 0;
  } else {
   if ((HEAP8[i4 + 16 | 0] & 1) != 0) {
    i7 = 0;
    break;
   }
   d8 = +(HEAP32[i4 >> 2] | 0);
   if (d6 * d8 < +2) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i4 + 4 >> 2] & -16777216 | 0) != -16777216) {
    i7 = 0;
    break;
   }
   i2 = HEAP32[i4 + 12 >> 2] | 0;
   if ((i2 | 0) == 1 | (i2 | 0) == 6 | (i2 | 0) == 7) {
    i7 = 0;
    break;
   } else if ((i2 | 0) == 9) {
    if (d8 < d6 * +5) {
     i7 = 0;
     break;
    }
   }
   d8 = +HEAPF32[i1 >> 2];
   if ((HEAP8[i4 + 37 | 0] & 1) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP8[i4 + 36 | 0] & 1) != 0) {
    i7 = 0;
    break;
   }
   d9 = +(HEAP32[i4 + 20 >> 2] | 0);
   if (d8 * d9 < +2) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i4 + 24 >> 2] & -16777216 | 0) != -16777216) {
    i7 = 0;
    break;
   }
   i2 = HEAP32[i4 + 32 >> 2] | 0;
   if ((i2 | 0) == 1 | (i2 | 0) == 6 | (i2 | 0) == 7) {
    i7 = 0;
    break;
   } else if ((i2 | 0) == 9) {
    if (d9 < d8 * +5) {
     i7 = 0;
     break;
    }
   }
   d8 = +HEAPF32[i5 >> 2];
   if ((HEAP8[i4 + 57 | 0] & 1) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP8[i4 + 56 | 0] & 1) != 0) {
    i7 = 0;
    break;
   }
   d9 = +(HEAP32[i4 + 40 >> 2] | 0);
   if (d8 * d9 < +2) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i4 + 44 >> 2] & -16777216 | 0) != -16777216) {
    i7 = 0;
    break;
   }
   i2 = HEAP32[i4 + 52 >> 2] | 0;
   if ((i2 | 0) == 1 | (i2 | 0) == 6 | (i2 | 0) == 7) {
    i7 = 0;
    break;
   } else if ((i2 | 0) == 9) {
    if (d9 < d8 * +5) {
     i7 = 0;
     break;
    }
   }
   d8 = +HEAPF32[i1 >> 2];
   if ((HEAP8[i4 + 77 | 0] & 1) == 0) {
    i7 = 0;
    break;
   }
   if ((HEAP8[i4 + 76 | 0] & 1) != 0) {
    i7 = 0;
    break;
   }
   d9 = +(HEAP32[i4 + 60 >> 2] | 0);
   if (d8 * d9 < +2) {
    i7 = 0;
    break;
   }
   if ((HEAP32[i4 + 64 >> 2] & -16777216 | 0) != -16777216) {
    i7 = 0;
    break;
   }
   i2 = HEAP32[i4 + 72 >> 2] | 0;
   if ((i2 | 0) == 1 | (i2 | 0) == 6 | (i2 | 0) == 7) {
    i7 = 0;
    break;
   } else if ((i2 | 0) == 9) {
    if (d9 < d8 * +5) {
     i7 = 0;
     break;
    }
   }
   i7 = 1;
  }
 } while (0);
 STACKTOP = i3;
 return i7 | 0;
}
function __ZN7WebCore20RenderBoxModelObject29localCaretRectForEmptyElementENS_10LayoutUnitES1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
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
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i10 = HEAP32[i2 + 36 >> 2] | 0;
 } else {
  i10 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i2 | 0) | 0;
 }
 i11 = i10 + 44 | 0;
 i12 = (HEAP32[i11 >> 2] | 0) >>> 13 & 3;
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 812 >> 2] & 7](i6, i2, 1, ((i12 | 0) == 0 | (i12 | 0) == 3) & 1 ^ 1, 0);
 i12 = i10 + 40 | 0;
 i10 = HEAP32[i12 >> 2] | 0;
 switch (i10 >>> 13 & 15 | 0) {
 case 7:
 case 3:
  {
   i13 = i10 >>> 30 & 1 ^ 1;
   break;
  }
 case 1:
 case 5:
  {
   i13 = 1;
   break;
  }
 case 2:
 case 6:
  {
   i13 = 2;
   break;
  }
 case 8:
  {
   i13 = i10 >>> 30 & 1;
   break;
  }
 default:
  {
   i13 = 0;
  }
 }
 i10 = i2;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 255](i2) | 0;
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 63](i7, i2);
 i16 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 748 >> 2] & 255](i2) | 0;
 i7 = (HEAP32[i3 >> 2] | 0) - i14 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 63](i8, i2);
 i14 = i7 - (HEAP32[i8 >> 2] | 0) | 0;
 do {
  if ((i13 | 0) == 0) {
   if ((HEAP32[i12 >> 2] & 1073741824 | 0) == 0) {
    i17 = i16;
    break;
   }
   i17 = (HEAP32[i4 >> 2] | 0) + i16 | 0;
  } else if ((i13 | 0) == 2) {
   i8 = (i16 + i14 | 0) / 2 & -1;
   i7 = (HEAP32[i4 >> 2] | 0) / 2 & -1;
   if ((HEAP32[i12 >> 2] & 1073741824 | 0) == 0) {
    i17 = i8 - i7 | 0;
    break;
   } else {
    i17 = i7 + i8 | 0;
    break;
   }
  } else if ((i13 | 0) == 1) {
   i8 = i14 - 1 | 0;
   if ((HEAP32[i12 >> 2] & 1073741824 | 0) != 0) {
    i17 = i8;
    break;
   }
   i17 = i8 - (HEAP32[i4 >> 2] | 0) | 0;
  } else {
   i17 = i16;
  }
 } while (0);
 i16 = i14 - 1 | 0;
 i14 = (i16 | 0) < 0 ? 0 : i16;
 i16 = (i14 | 0) < (i17 | 0) ? i14 : i17;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 63](i9, i2);
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 255](i2) | 0;
 i2 = (HEAP32[i9 >> 2] | 0) + i15 | 0;
 i15 = (HEAP32[i11 >> 2] | 0) >>> 13 & 3;
 if ((i15 | 0) == 3 | (i15 | 0) == 0) {
  i15 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i16;
  HEAP32[i1 + 4 >> 2] = i2;
  HEAP32[i1 + 8 >> 2] = 1;
  HEAP32[i1 + 12 >> 2] = i15;
  STACKTOP = i5;
  return;
 } else {
  i15 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i16;
  HEAP32[i1 + 8 >> 2] = i15;
  HEAP32[i1 + 12 >> 2] = 1;
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i3;
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 i5 = i7;
 i7 = HEAP32[i5 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 HEAP32[i3 + 4 >> 2] = i6;
 if ((i7 & 0 | 0) == 0 & (i6 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
  i7 = i4 + 5 | 0;
  i8 = HEAP8[i7] | 0;
  i9 = i7;
 } else {
  i8 = (i6 >>> 8 | 0 << 24) & 255;
  i9 = i4 + 5 | 0;
 }
 if ((i8 << 24 >> 24 | 0) == 10 | (i8 << 24 >> 24 | 0) == 2) {
  i10 = 8;
 } else if ((i8 << 24 >> 24 | 0) == 0) {
  i11 = 1;
  STACKTOP = i2;
  return i11 | 0;
 } else {
  i12 = 0;
 }
 do {
  if ((i10 | 0) == 8) {
   if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 16777216) {
    i12 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
    i12 = 0;
    break;
   }
   i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
   i6 = i8 | 0;
   i7 = HEAP32[i8 + 20 >> 2] | 0;
   L15 : do {
    if ((i7 & 128 | 0) == 0) {
     i13 = i8;
     i14 = i6;
    } else {
     i3 = i8;
     i5 = i6;
     i15 = i7;
     while (1) {
      if ((i15 & 768 | 0) == 768) {
       i13 = i3;
       i14 = i5;
       break L15;
      }
      i16 = __ZNK7WebCore12RenderObject15containingBlockEv(i5) | 0;
      i17 = i16 | 0;
      i18 = HEAP32[i16 + 20 >> 2] | 0;
      if ((i18 & 128 | 0) == 0) {
       i13 = i16;
       i14 = i17;
       break;
      } else {
       i3 = i16;
       i5 = i17;
       i15 = i18;
      }
     }
    }
   } while (0);
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 188 >> 2] & 255](i14) | 0) {
    i12 = 0;
    break;
   }
   i7 = i13 + 36 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i8 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i8 | 0) == 3 | (i8 | 0) == 0) {
    i19 = (HEAP32[i6 + 4 >> 2] | 0) + 12 | 0;
   } else {
    i19 = (HEAP32[i6 + 4 >> 2] | 0) + 4 | 0;
   }
   if ((HEAP8[i19 + 5 | 0] | 0) != 0) {
    i12 = 0;
    break;
   }
   if ((HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i6 + 16 >> 2] | 0) + 4 | 0, i8) | 0) + 5 | 0] | 0) != 0) {
    i8 = HEAP32[i7 >> 2] | 0;
    if ((HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i8 + 16 >> 2] | 0) + 4 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3) | 0) + 5 | 0] | 0) != 0) {
     i12 = 0;
     break;
    }
   }
   i12 = 1;
  }
 } while (0);
 if ((HEAP8[i9] | 0) != 10) {
  i11 = i12;
  STACKTOP = i2;
  return i11 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 i11 = i12;
 STACKTOP = i2;
 return i11 | 0;
}
function __ZN7WebCore20RenderBoxModelObject15updateFromStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i4, 23);
 if ((HEAP8[i3 + 4 | 0] & 1) == 0) {
  i5 = 3;
 } else {
  if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
   i5 = 3;
  } else {
   i5 = 19;
  }
 }
 L3 : do {
  if ((i5 | 0) == 3) {
   i3 = (HEAP32[i4 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
     i5 = 19;
     break L3;
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
   i3 = HEAP32[i4 + 16 >> 2] | 0;
   i6 = (HEAP32[(HEAP32[i3 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
   i7 = HEAP32[i3 + 104 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if (!i8) {
     i5 = 19;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i5 = 19;
     break;
    }
   }
   i7 = HEAP32[i3 + 112 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if (!i8) {
     i5 = 19;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i5 = 19;
     break;
    }
   }
   i7 = HEAP32[i3 + 120 >> 2] | 0;
   i8 = (i7 & 134217726 | 0) == 0;
   if (i8 | i6) {
    if (!i8) {
     i5 = 19;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i5 = 19;
     break;
    }
   }
   i7 = HEAP32[i3 + 128 >> 2] | 0;
   i3 = (i7 & 134217726 | 0) == 0;
   if (i3 | i6) {
    if (!i3) {
     i5 = 19;
     break;
    }
   } else {
    if ((i7 & 2013265920 | 0) != 0) {
     i5 = 19;
     break;
    }
   }
   i7 = HEAP32[i4 + 20 >> 2] | 0;
   if ((HEAP32[i7 + 296 >> 2] & 63 | 0) != 0) {
    i5 = 19;
    break;
   }
   i3 = i1 + 20 | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i7 + 100 >> 2] | 0) != 0) {
    i9 = i3;
    i10 = i6;
    i5 = 22;
    break;
   }
   i7 = i6 & 1073741823;
   HEAP32[i3 >> 2] = i7;
   i11 = i3;
   i12 = i7;
  }
 } while (0);
 if ((i5 | 0) == 19) {
  i7 = i1 + 20 | 0;
  i9 = i7;
  i10 = HEAP32[i7 >> 2] | 0;
  i5 = 22;
 }
 do {
  if ((i5 | 0) == 22) {
   if (i10 >>> 0 > 1073741823 >>> 0) {
    i11 = i9;
    i12 = i10;
    break;
   }
   i7 = i10 & 1073741823 | 1073741824;
   HEAP32[i9 >> 2] = i7;
   i11 = i9;
   i12 = i7;
  }
 } while (0);
 i9 = i4 + 48 | 0;
 switch (HEAP32[i9 >> 2] & 31 | 0) {
 case 0:
 case 19:
 case 17:
 case 7:
 case 5:
 case 21:
  {
   i13 = 1024;
   break;
  }
 default:
  {
   i13 = 0;
  }
 }
 i10 = i12 & -1025 | i13;
 HEAP32[i11 >> 2] = i10;
 i13 = (HEAP32[i9 >> 2] | 0) >>> 22 << 23 & 25165824 | i10 & -25165825;
 HEAP32[i11 >> 2] = i13;
 i10 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 HEAP32[i11 >> 2] = (((i10 | 0) == 0 | (i10 | 0) == 3) & 1) << 13 | i13 & -8193;
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL20allCornersClippedOutERKNS_11RoundedRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = i1;
 i17 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i16 >> 2];
 i16 = i6 + 4 | 0;
 HEAP32[i16 >> 2] = i17;
 i17 = i1 + 8 | 0;
 i18 = HEAP32[i17 + 4 >> 2] | 0;
 i19 = i4 + 8 | 0;
 HEAP32[i19 >> 2] = HEAP32[i17 >> 2];
 i17 = i6 + 12 | 0;
 HEAP32[i17 >> 2] = i18;
 if (__ZNK7WebCore10LayoutRect8containsERKS0_(i2, i6) | 0) {
  i20 = 0;
  STACKTOP = i3;
  return i20 | 0;
 }
 i6 = i7 | 0;
 i18 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = HEAP32[i1 + 20 >> 2] | 0;
 i21 = HEAP32[i1 + 24 >> 2] | 0;
 i22 = HEAP32[i1 + 28 >> 2] | 0;
 i23 = HEAP32[i1 + 32 >> 2] | 0;
 i24 = HEAP32[i1 + 36 >> 2] | 0;
 i25 = HEAP32[i1 + 40 >> 2] | 0;
 i26 = HEAP32[i1 + 44 >> 2] | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i6 + 4 >> 2] = i1;
 i1 = i7 + 8 | 0;
 HEAP32[i1 >> 2] = i18;
 HEAP32[i1 + 4 >> 2] = i4;
 if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i2, i7) | 0) {
  i20 = 0;
  STACKTOP = i3;
  return i20 | 0;
 }
 i7 = HEAP32[i5 >> 2] | 0;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i4;
 i4 = i8 + 8 | 0;
 HEAP32[i4 >> 2] = i21;
 HEAP32[i4 + 4 >> 2] = i22;
 HEAP32[i8 >> 2] = (HEAP32[i19 >> 2] | 0) + i7 - i21;
 if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i2, i8) | 0) {
  i20 = 0;
  STACKTOP = i3;
  return i20 | 0;
 }
 i8 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i11 + 4 >> 2] = i8;
 i8 = i10 + 8 | 0;
 HEAP32[i8 >> 2] = i23;
 HEAP32[i8 + 4 >> 2] = i24;
 HEAP32[i12 + 4 >> 2] = (HEAP32[i17 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) - i24;
 if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i2, i12) | 0) {
  i20 = 0;
  STACKTOP = i3;
  return i20 | 0;
 }
 i12 = HEAP32[i5 >> 2] | 0;
 i24 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i12;
 HEAP32[i14 + 4 >> 2] = i24;
 i24 = i13 + 8 | 0;
 HEAP32[i24 >> 2] = i25;
 HEAP32[i24 + 4 >> 2] = i26;
 HEAP32[i13 >> 2] = (HEAP32[i19 >> 2] | 0) + i12 - i25;
 HEAP32[i15 + 4 >> 2] = (HEAP32[i17 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) - i26;
 i20 = (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i2, i15) | 0) ^ 1;
 STACKTOP = i3;
 return i20 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = i2 - 1;
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 3) | 0;
 if ((i5 | 0) == 0) {
  i8 = 0;
  i9 = i1 + 16 | 0;
  HEAP32[i9 >> 2] = 0;
  i10 = i7;
  __ZN3WTF8fastFreeEPv(i10);
  return i8 | 0;
 } else {
  i11 = 0;
  i12 = 0;
 }
 while (1) {
  i2 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i6 >> 2] | 0;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L7 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 5;
    } else {
     i24 = (i18 >>> 23) + ~i18 | 0;
     i25 = i24 << 12 ^ i24;
     i24 = i25 >>> 7 ^ i25;
     i25 = i24 << 2 ^ i24;
     i24 = i25 >>> 20 ^ i25 | 1;
     i25 = 0;
     i26 = 0;
     i27 = i14;
     i28 = i19;
     i29 = i20;
     while (1) {
      if ((i29 | 0) == (i13 | 0)) {
       i30 = i28;
       break L7;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 5;
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
   if ((i23 | 0) == 5) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   i16 = i2;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i13;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPNS1_18RenderTextFragmentENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPS2_NS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 3 | 0;
  i6 = 0;
  i7 = i4;
 } else {
  i4 = HEAP32[i1 + 8 >> 2] | 0;
  i8 = HEAP32[i2 >> 2] | 0;
  i2 = i8;
  i9 = i2 + ~(i2 << 15) | 0;
  i2 = (i9 >>> 10 ^ i9) * 9 & -1;
  i9 = i2 >>> 6 ^ i2;
  i2 = i9 + ~(i9 << 11) | 0;
  i9 = i2 >>> 16 ^ i2;
  i2 = i9 & i4;
  i10 = i3 + (i2 << 3) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L3 : do {
   if ((i11 | 0) == (i8 | 0)) {
    i12 = i10;
   } else {
    i13 = (i9 >>> 23) + ~i9 | 0;
    i14 = i13 << 12 ^ i13;
    i13 = i14 >>> 7 ^ i14;
    i14 = i13 << 2 ^ i13;
    i13 = i14 >>> 20 ^ i14 | 1;
    i14 = 0;
    i15 = i2;
    i16 = i11;
    while (1) {
     if ((i16 | 0) == 0) {
      i12 = 0;
      break L3;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 3) | 0;
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == (i8 | 0)) {
      i12 = i19;
      break;
     } else {
      i14 = i17;
      i15 = i18;
      i16 = i20;
     }
    }
   }
  } while (0);
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 3) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 3) | 0)) {
  i21 = 0;
  return i21 | 0;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i7;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i7 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  i21 = 1;
  return i21 | 0;
 }
 __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCoreL17joinRequiresMitreENS_7BoxSideES0_PKNS_10BorderEdgeEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 do {
  if ((HEAP8[i3 + (i1 * 20 & -1) + 16 | 0] & 1) != 0) {
   if ((HEAP8[i3 + (i2 * 20 & -1) + 16 | 0] & 1) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 if ((HEAP8[i3 + (i2 * 20 & -1) + 17 | 0] & 1) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if (i4) {
   if (!((i1 | 0) == 0 | (i1 | 0) == 2)) {
    break;
   }
   if ((HEAP32[i3 + (i2 * 20 & -1) >> 2] | 0) != 0) {
    if ((HEAP32[i3 + (i2 * 20 & -1) + 12 >> 2] | 0) <= 1) {
     break;
    }
    if ((HEAP8[i3 + (i2 * 20 & -1) + 16 | 0] & 1) != 0) {
     break;
    }
   }
   i6 = HEAP32[i3 + (i2 * 20 & -1) + 4 >> 2] | 0;
   if ((HEAP32[i3 + (i1 * 20 & -1) + 4 >> 2] | 0) == (i6 | 0)) {
    if ((HEAP8[i3 + (i1 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i3 + (i2 * 20 & -1) + 8 | 0] & 1) != 0) {
     i7 = 11;
    }
   } else {
    i7 = 11;
   }
   if ((i7 | 0) == 11) {
    if ((i6 & -16777216 | 0) != -16777216) {
     break;
    }
   }
   i6 = HEAP32[i3 + (i2 * 20 & -1) + 12 >> 2] | 0;
   if ((i6 | 0) != 9 & (i6 - 6 | 0) >>> 0 > 1 >>> 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 if ((HEAP32[i3 + (i1 * 20 & -1) + 4 >> 2] | 0) != (HEAP32[i3 + (i2 * 20 & -1) + 4 >> 2] | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if ((HEAP8[i3 + (i1 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i3 + (i2 * 20 & -1) + 8 | 0] & 1) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i7 = HEAP32[i3 + (i1 * 20 & -1) + 12 >> 2] | 0;
 i4 = HEAP32[i3 + (i2 * 20 & -1) + 12 >> 2] | 0;
 if ((i7 | 0) == 9) {
  i5 = 1;
  return i5 | 0;
 }
 if ((i4 | 0) == 9 | (i4 | 0) == 5 | (i4 | 0) == 3) {
  i5 = 1;
  return i5 | 0;
 }
 if (!((i7 | 0) == (i4 | 0) & ((i7 - 6 | 0) >>> 0 < 2 >>> 0 ^ (i4 - 6 | 0) >>> 0 < 2 >>> 0 ^ 1))) {
  i5 = 1;
  return i5 | 0;
 }
 if (!((i7 - 2 | 0) >>> 0 < 2 >>> 0 | (i7 | 0) == 5 | (i7 | 0) == 4)) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = 1 << i2 | 1 << i1;
 i5 = (i7 | 0) == 3 | (i7 | 0) == 12;
 return i5 | 0;
}
function __ZN7WebCore20RenderBoxModelObject15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 880 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[i4 + 8 >> 2] | 0;
   i6 = HEAP32[i4 >> 2] | 0;
   i7 = i1;
   i8 = i7 + ~(i7 << 15) | 0;
   i7 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i7 >>> 6 ^ i7;
   i7 = i8 + ~(i8 << 11) | 0;
   i8 = i7 >>> 16 ^ i7;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i5 & i8;
   i9 = i6 + (i7 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i1 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i8 = i9 << 12 ^ i9;
    i9 = i8 >>> 7 ^ i8;
    i8 = i9 << 2 ^ i9;
    i9 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i12 = i7;
    i7 = i10;
    while (1) {
     if ((i7 | 0) == 0) {
      break L1;
     }
     i10 = (i8 | 0) == 0 ? i9 : i8;
     i13 = i10 + i12 & i5;
     i14 = i6 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i1 | 0)) {
      i11 = i14;
      break;
     } else {
      i8 = i10;
      i12 = i13;
      i7 = i15;
     }
    }
   }
   if ((i11 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 + 4 >> 2] | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = i1;
   __ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPNS1_18RenderTextFragmentENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE6removeERKS4_(i4, i3) | 0;
  }
 } while (0);
 i3 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i3 + 2285 | 0] & 1) != 0) {
  i16 = i1 | 0;
  __ZN7WebCore22RenderLayerModelObject15willBeDestroyedEv(i16);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore22ImageQualityController12removeObjectEPNS_20RenderBoxModelObjectE(__ZN7WebCore10RenderView22imageQualityControllerEv(HEAP32[i3 + 1584 >> 2] | 0) | 0, i1);
 i16 = i1 | 0;
 __ZN7WebCore22RenderLayerModelObject15willBeDestroyedEv(i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 do {
  if (i6) {
   i7 = i1 + 24 | 0;
   if ((HEAP32[i7 >> 2] & 16 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i1, 0, 1);
   if ((HEAP32[i7 >> 2] & 32 | 0) == 0) {
    break;
   }
   __ZN7WebCore15RenderBlockFlow21removeFloatingObjectsEv(i1);
  }
 } while (0);
 if ((i3 | 0) == 0 | (i3 | 0) == (i4 | 0)) {
  return;
 }
 i7 = i2 + 24 | 0;
 i8 = i2 | 0;
 i9 = i1 | 0;
 i1 = i2;
 i2 = i6 & 1 ^ 1;
 if (i6) {
  i10 = i3;
 } else {
  i6 = i3;
  while (1) {
   i3 = HEAP32[i6 + 16 >> 2] | 0;
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i9, i6, i2);
   __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i8, i6, i5, i2);
   if ((i3 | 0) == 0 | (i3 | 0) == (i4 | 0)) {
    break;
   } else {
    i6 = i3;
   }
  }
  return;
 }
 while (1) {
  i6 = HEAP32[i10 + 16 >> 2] | 0;
  if ((HEAP32[i7 >> 2] & 20 | 0) == 0) {
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i9, i10, i2);
   __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i8, i10, i5, i2);
  } else {
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i9, i10, 0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 31](i8, i10, i5);
  }
  if ((i6 | 0) == 0 | (i6 | 0) == (i4 | 0)) {
   break;
  } else {
   i10 = i6;
  }
 }
 return;
}
function __ZNK7WebCore20RenderBoxModelObject40borderInnerRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i2 | 0;
 if ((i5 | 0) != 3) {
  i5 = i1;
  i7 = i4;
  HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  STACKTOP = i2;
  return;
 }
 i7 = i1;
 i5 = i4;
 HEAP32[i7 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i6, i3, 1);
 d8 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6xScaleEv(i6));
 do {
  if (d8 < +2147483647) {
   if (d8 <= +-2147483648) {
    i9 = -2147483648;
    break;
   }
   i9 = ~~d8;
  } else {
   i9 = 2147483647;
  }
 } while (0);
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i9;
 i3 = i1 + 8 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (i9 * -2 & -1);
 d8 = +Math_ceil(+1 / +__ZNK7WebCore15AffineTransform6yScaleEv(i6));
 do {
  if (d8 < +2147483647) {
   if (d8 <= +-2147483648) {
    i10 = -2147483648;
    break;
   }
   i10 = ~~d8;
  } else {
   i10 = 2147483647;
  }
 } while (0);
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i10;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + (i10 * -2 & -1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject24getBackgroundRoundedRectERKNS_10LayoutRectEPNS_13InlineFlowBoxENS_10LayoutUnitES6_bb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i10 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
 i10 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 i10 = i9 | 0;
 i11 = i9 + 48 | 0;
 i12 = i2 + 36 | 0;
 i13 = i2 + 4 | 0;
 __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i1, HEAP32[i12 >> 2] | 0, i3, HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i7, i8);
 if ((i4 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 do {
  if ((HEAP32[i4 + 52 >> 2] | 0) == 0) {
   if ((HEAP32[i4 + 48 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 i4 = HEAP32[i12 >> 2] | 0;
 i12 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i11 + 4 >> 2] = 0;
 HEAP32[i11 + 8 >> 2] = i12;
 HEAP32[i11 + 12 >> 2] = i5;
 __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i10, i4, i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i7, i8);
 _memcpy(i1 + 16 | 0, i10 + 16 | 0, 32) | 0;
 STACKTOP = i9;
 return;
}
function __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 128 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = (i3 & 768 | 0) == 256;
 if (i5) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[i6 + 48 >> 2] & 31 | 0) != 1) {
   if (i5) {
    i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) == 16) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (i5) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((HEAP32[i8 + 52 >> 2] & 4032 | 0) != 0 | i5) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 255](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 255](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject13requiresLayerEv(i1) {
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
   i6 = 29;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 29) {
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
 if ((i2 & 131072 | 0) != 0) {
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
 if ((i1 | 0) == 2) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = (HEAP32[i4 + 44 >> 2] | 0) >>> 13 & 3;
 i3 = ((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i1 | 0) == 0;
 return i3 | 0;
}
function __ZN7WebCoreL19colorsMatchAtCornerENS_7BoxSideES0_PKNS_10BorderEdgeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((HEAP8[i3 + (i1 * 20 & -1) + 17 | 0] & 1) == 0) {
   i4 = 0;
  } else {
   if ((HEAP32[i3 + (i1 * 20 & -1) >> 2] | 0) == 0) {
    i4 = 0;
    break;
   }
   if ((HEAP32[i3 + (i1 * 20 & -1) + 12 >> 2] | 0) <= 1) {
    i4 = 0;
    break;
   }
   i4 = (HEAP8[i3 + (i1 * 20 & -1) + 16 | 0] & 1) == 0;
  }
 } while (0);
 do {
  if ((HEAP8[i3 + (i2 * 20 & -1) + 17 | 0] & 1) == 0) {
   i5 = 8;
  } else {
   if ((HEAP32[i3 + (i2 * 20 & -1) >> 2] | 0) == 0) {
    i5 = 8;
    break;
   }
   if ((HEAP32[i3 + (i2 * 20 & -1) + 12 >> 2] | 0) <= 1) {
    i5 = 8;
    break;
   }
   if (i4 ^ (HEAP8[i3 + (i2 * 20 & -1) + 16 | 0] & 1) == 0) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 do {
  if ((i5 | 0) == 8) {
   if (i4) {
    i6 = 0;
   } else {
    break;
   }
   return i6 | 0;
  }
 } while (0);
 if ((HEAP32[i3 + (i1 * 20 & -1) + 4 >> 2] | 0) != (HEAP32[i3 + (i2 * 20 & -1) + 4 >> 2] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP8[i3 + (i1 * 20 & -1) + 8 | 0] & 1) != 0 ^ (HEAP8[i3 + (i2 * 20 & -1) + 8 | 0] & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 i4 = HEAP32[i3 + (i1 * 20 & -1) + 12 >> 2] | 0;
 if (!((i4 - 2 | 0) >>> 0 < 2 >>> 0 | (i4 | 0) == 5 | (i4 | 0) == 4)) {
  i6 = 1;
  return i6 | 0;
 }
 i4 = 1 << i2 | 1 << i1;
 i6 = (i4 | 0) != 12 & (i4 | 0) != 3;
 return i6 | 0;
}
function __ZNK7WebCore9RenderBox19stretchesToViewportEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 664 >> 2] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 i6 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 12 | 0;
 } else {
  i7 = (HEAP32[i5 + 4 >> 2] | 0) + 4 | 0;
 }
 if ((HEAP8[i7 + 5 | 0] | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i7 = i1 + 20 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 & 64 | 0) != 0 | (i1 & 25165824 | 0) == 16777216) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if ((HEAP32[i3 + 692 >> 2] | 0) != (i2 | 0)) {
   if ((i1 & 128 | 0) != 0 | (i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i2 + 12 >> 2] & 4 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = HEAP32[i2 + 44 >> 2] | 0;
   i6 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i5 | 0) == (i6 | 0)) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) != (HEAP32[i6 + 12 >> 2] | 0)) {
    i4 = 0;
    return i4 | 0;
   }
   if ((HEAP32[i5 + 16 >> 2] | 0) == (HEAP32[i6 + 16 >> 2] | 0)) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 if (__ZNK7WebCore8Document33shouldDisplaySeamlesslyWithParentEv(i3) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i7 >> 2] & 1024 | 0) == 0;
 return i4 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i8 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i8 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i8 = i7 + 5 | 0;
  i11 = HEAP8[i8] | 0;
  i12 = i8;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i8 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i8 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i8 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i8 = i7 + 5 | 0;
  i11 = HEAP8[i8] | 0;
  i12 = i8;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20RenderBoxModelObject27setFirstLetterRemainingTextEPNS_18RenderTextFragmentE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 HEAP32[i4 >> 2] = i2;
 i8 = HEAP32[H_BASE + 880 >> 2] | 0;
 i9 = (i8 | 0) != 0;
 if ((i2 | 0) == 0) {
  if (!i9) {
   STACKTOP = i3;
   return;
  }
  HEAP32[i7 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPNS1_18RenderTextFragmentENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE6removeERKS4_(i8, i7) | 0;
  STACKTOP = i3;
  return;
 }
 if (i9) {
  i10 = i8;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 880 >> 2] = i9;
  i10 = i9;
 }
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_(i6, i10 | 0, i5, i4);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject29getGeometryForBackgroundImageEPKNS_22RenderLayerModelObjectERNS_7IntRectERNS_8IntPointERNS_7IntSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 56 | 0;
 i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 4 | 0;
 i10 = i7;
 _memset(i10 | 0, 0, 49) | 0;
 i11 = i3;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i8 + 4 >> 2] = i12;
 i12 = i3 + 8 | 0;
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i8 + 8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 12 >> 2] = i11;
 __ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE(i1, i2, i9, i8, i7, 0);
 i8 = i7 + 24 | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 i2 = i4;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = i9;
 i9 = i7 + 32 | 0;
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 i2 = i5;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = i7;
 i7 = i3;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = __ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i8 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i8 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i8 = i7 + 5 | 0;
  i11 = HEAP8[i8] | 0;
  i12 = i8;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = __ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i8 + 16 >> 2] | 0) + 68 | 0, (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3) | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i8 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i8 = i7 + 5 | 0;
  i11 = HEAP8[i8] | 0;
  i12 = i8;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject24firstLetterRemainingTextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 880 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i4 & i6;
 i7 = i5 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i3 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L7;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i3 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 888 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i4 & i6;
 i7 = i5 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i1 | 0)) {
   i9 = i7;
  } else {
   i10 = (i6 >>> 23) + ~i6 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i2;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i3 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i4;
    i16 = i5 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break L7;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i3 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 HEAP32[i4 >> 2] = i2;
 i8 = HEAP32[H_BASE + 888 >> 2] | 0;
 i9 = (i8 | 0) != 0;
 if ((i2 | 0) == 0) {
  if (!i9) {
   STACKTOP = i3;
   return;
  }
  HEAP32[i7 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPS2_NS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_(i8, i7) | 0;
  STACKTOP = i3;
  return;
 }
 if (i9) {
  i10 = i8;
 } else {
  i8 = __ZN3WTF10fastMallocEj(20) | 0;
  i9 = i8;
  _memset(i8 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 888 >> 2] = i9;
  i10 = i9;
 }
 HEAP32[i5 >> 2] = i1;
 __ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_(i6, i10 | 0, i5, i4);
 if ((HEAP8[i6 + 8 | 0] & 1) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 92 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i9 = i7 + 5 | 0;
  i11 = HEAP8[i9] | 0;
  i12 = i9;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 76 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i9 = i7 + 5 | 0;
  i11 = HEAP8[i9] | 0;
  i12 = i9;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject22computedCSSPaddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 68 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i9 = i7 + 5 | 0;
  i11 = HEAP8[i9] | 0;
  i12 = i9;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 84 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 if ((i9 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
  i9 = i7 + 5 | 0;
  i11 = HEAP8[i9] | 0;
  i12 = i9;
 } else {
  i11 = (i10 >>> 8 | 0 << 24) & 255;
  i12 = i7 + 5 | 0;
 }
 if ((i11 << 24 >> 24 | 0) == 10 | (i11 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i5, i2);
  i13 = HEAP32[i5 >> 2] | 0;
 } else {
  i13 = 0;
 }
 HEAP32[i4 >> 2] = i13;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i7, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 if ((HEAP8[i12] | 0) != 10) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 do {
  if ((i2 | 0) == 2) {
   i3 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i3 & 234881024 | 0) == 0) {
    i4 = i3;
    i5 = 7;
    break;
   }
   return;
  } else if ((i2 | 0) == 1) {
   i3 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i3 & 234881024 | 0) == 100663296) {
    i6 = i3;
    i5 = 6;
   } else {
    i4 = i3;
    i5 = 7;
   }
  } else if ((i2 | 0) == 3) {
   i3 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i3 & 234881024 | 0) == 33554432) {
    i6 = i3;
    i5 = 6;
   } else {
    i4 = i3;
    i5 = 7;
   }
  } else {
   i4 = HEAP32[i1 + 20 >> 2] | 0;
   i5 = 7;
  }
 } while (0);
 if ((i5 | 0) == 6) {
  HEAP32[i1 + 20 >> 2] = i6 & -234881025 | 134217728;
 } else if ((i5 | 0) == 7) {
  HEAP32[i1 + 20 >> 2] = i4 & -234881025 | i2 << 25 & 234881024;
 }
 i4 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 768) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 528 >> 2] & 63](i4 | 0, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject39fixedBackgroundPaintsInLocalCoordinatesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i3 + 692 >> 2] | 0) != (i1 | 0)) {
  i4 = 0;
  return i4 | 0;
 }
 if (((__ZNK7WebCore9FrameView13paintBehaviorEv(HEAP32[(HEAP32[i3 + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0) & 4 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i2 = HEAP32[i3 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP8[i2 + 93 | 0] & 1) != 0;
 return i4 | 0;
}
function __ZN7WebCore20RenderBoxModelObject11moveChildToEPS0_PNS_12RenderObjectES3_b(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 do {
  if (i5) {
   if ((HEAP32[i2 + 24 >> 2] & 20 | 0) == 0) {
    break;
   }
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1 | 0, i3, 0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 628 >> 2] & 31](i2 | 0, i3, i4);
   return;
  }
 } while (0);
 i6 = i5 & 1 ^ 1;
 __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1 | 0, i3, i6);
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i2 | 0, i3, i4, i6);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP8[i3 + 5 | 0] | 0;
 if ((i7 << 24 >> 24 | 0) == 10 | (i7 << 24 >> 24 | 0) == 2) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 800 >> 2] & 63](i6, i2);
  i8 = HEAP32[i6 >> 2] | 0;
 } else {
  i8 = 0;
 }
 HEAP32[i5 >> 2] = i8;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i3, i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore20RenderBoxModelObject20shouldAntialiasLinesEPNS_15GraphicsContextE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, d5 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i3, i1, 1);
 do {
  if (+HEAPF64[i3 >> 3] == +1) {
   if (+HEAPF64[i3 + 8 >> 3] != +0) {
    i4 = 1;
    break;
   }
   if (+HEAPF64[i3 + 16 >> 3] != +0) {
    i4 = 1;
    break;
   }
   d5 = +HEAPF64[i3 + 24 >> 3];
   if (d5 == +1) {
    i4 = 0;
    break;
   }
   i4 = d5 != +-1;
  } else {
   i4 = 1;
  }
 } while (0);
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore20RenderBoxModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore22RenderLayerModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 HEAP32[i6 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore22RenderLayerModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore20RenderBoxModelObject23shouldPaintAtLowQualityEPNS_15GraphicsContextEPNS_5ImageEPKvRKNS_10LayoutSizeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore22ImageQualityController23shouldPaintAtLowQualityEPNS_15GraphicsContextEPNS_20RenderBoxModelObjectEPNS_5ImageEPKvRKNS_10LayoutSizeE(__ZN7WebCore10RenderView22imageQualityControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i2, i1, i3, i4, i5) | 0;
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
function __ZNK7WebCore20RenderBoxModelObject23BackgroundImageGeometry13relativePhaseEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 24 | 0;
 i4 = i1;
 i5 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 HEAP32[i4 + 4 >> 2] = i6;
 i4 = i2;
 i3 = (HEAP32[i4 + 4 >> 2] | 0) - (HEAP32[i2 + 20 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i2 + 16 >> 2] | 0) + i5;
 HEAP32[i1 + 4 >> 2] = i3 + i6;
 return;
}
function iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 return __ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function __ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry18useFixedAttachmentERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2;
 i2 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i1 >> 2] | 0) | 0;
 i4 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i1 + 4 >> 2] | 0) | 0;
 i3 = i1 + 24 | 0;
 HEAP32[i3 >> 2] = ((i2 | 0) < 0 ? 0 : i2) + (HEAP32[i3 >> 2] | 0);
 i3 = i1 + 28 | 0;
 HEAP32[i3 >> 2] = ((i4 | 0) < 0 ? 0 : i4) + (HEAP32[i3 >> 2] | 0);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 20 >> 2] & 25165824;
 if ((i3 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv(i1, i2);
  return;
 } else if ((i3 | 0) == 25165824) {
  __ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv(i1, i2);
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
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
function __ZNK7WebCore20RenderBoxModelObject9offsetTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i5, i2, i4);
 HEAP32[i1 >> 2] = HEAP32[i5 + 4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10offsetLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE(i5, i2, i4);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i3;
 return;
}
function iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 688 >> 2] & 63](i3, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 680 >> 2] & 63](i2 + 8 | 0, i1);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function __ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 684 >> 2] & 63](i3, i1);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 676 >> 2] & 63](i2 + 8 | 0, i1);
 STACKTOP = i2;
 return HEAP32[i3 >> 2] | 0;
}
function viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZN7WebCore20RenderBoxModelObject15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_(i1, d2, i3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return __ZN7WebCore18RenderLayerBacking15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, d2, i3, i4, i5) | 0;
}
function __ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry12setNoRepeatYEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + ((i2 | 0) < 0 ? 0 : i2);
 i3 = (i2 | 0) > 0 ? 0 : i2;
 HEAP32[i1 + 28 >> 2] = -i3;
 HEAP32[i1 + 12 >> 2] = (HEAP32[i1 + 36 >> 2] | 0) + i3;
 return;
}
function __ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry12setNoRepeatXEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + ((i2 | 0) < 0 ? 0 : i2);
 i3 = (i2 | 0) > 0 ? 0 : i2;
 HEAP32[i1 + 24 >> 2] = -i3;
 HEAP32[i1 + 8 >> 2] = (HEAP32[i1 + 32 >> 2] | 0) + i3;
 return;
}
function viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore20RenderBoxModelObject14startAnimationEdPKNS_9AnimationERKNS_12KeyframeListE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore18RenderLayerBacking14startAnimationEdPKNS_9AnimationERKNS_12KeyframeListE(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, d2, i3, i4) | 0;
}
function iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function viii___ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE(i1 | 0, i2 | 0);
}
function viii___ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2 | 0, i3 | 0);
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
function __ZN7WebCore20RenderBoxModelObject14contentChangedENS_17ContentChangeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 32768 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer14contentChangedENS_17ContentChangeTypeE(HEAP32[i1 + 40 >> 2] | 0, i2);
 return;
}
function viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore20RenderBoxModelObject16transitionPausedEdNS_13CSSPropertyIDE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 __ZN7WebCore18RenderLayerBacking16transitionPausedEdNS_13CSSPropertyIDE(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, d2, i3);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject25hasAcceleratedCompositingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 72 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore20RenderBoxModelObject15animationPausedEdRKN3WTF6StringE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 __ZN7WebCore18RenderLayerBacking15animationPausedEdRKN3WTF6StringE(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, d2, i3);
 return;
}
function __ZN7WebCore20RenderBoxModelObject18transitionFinishedENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18RenderLayerBacking18transitionFinishedENS_13CSSPropertyIDE(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, i2);
 return;
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
function __ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1, __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0);
 return;
}
function __ZN7WebCore20RenderBoxModelObject17animationFinishedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18RenderLayerBacking17animationFinishedERKN3WTF6StringE(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, i2);
 return;
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
function __ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
}
function __ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 31](i1, i2, i3);
 return;
}
function viii___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function dynCall_viiiiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
}
function viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore20RenderBoxModelObject17suspendAnimationsEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore18RenderLayerBacking17suspendAnimationsEd(HEAP32[(HEAP32[i1 + 40 >> 2] | 0) + 208 >> 2] | 0, d2);
 return;
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
 return FUNCTION_TABLE_iiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0) | 0;
}
function iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE(i1 | 0, i2 | 0) | 0;
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
function __ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 _memset(i1 | 0, 0, 16) | 0;
 return;
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
function __ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry4clipERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7IntRect9intersectERKS0_(i1 | 0, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBottomEv(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBeforeEv(i1, i2);
 return;
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
function __ZNK7WebCore20RenderBoxModelObject12paddingStartEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingStartEv(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingRightEv(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject12paddingAfterEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingAfterEv(i1, i2);
 return;
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
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore20RenderBoxModelObject11paddingLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject22computedCSSPaddingLeftEv(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingTopEv(i1, i2);
 return;
}
function __ZNK7WebCore20RenderBoxModelObject10paddingEndEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingEndEv(i1, i2);
 return;
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
function __ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZNK7WebCore20RenderBoxModelObject9borderEndEv(i1) {
 i1 = i1 | 0;
 return (__ZNK7WebCore11RenderStyle14borderEndWidthEv(HEAP32[i1 + 36 >> 2] | 0) | 0) & 65535 | 0;
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
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5);
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
function __ZNK7WebCore12RenderObject7isEmptyEv(i1) {
 i1 = i1 | 0;
 return (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 255](i1) | 0) == 0 | 0;
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
function ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore12RenderObject15innerLineHeightEv(i1 | 0) | 0;
}
function dynCall_iiif(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return FUNCTION_TABLE_iiif[i1 & 1](i2 | 0, i3 | 0, +d4) | 0;
}
function __ZN7WebCore20RenderBoxModelObjectD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22RenderLayerModelObjectD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
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
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
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
function b11(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(11);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function b10(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(10);
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
function __ZN7WebCore20RenderBoxModelObjectD2Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22RenderLayerModelObjectD2Ev(i1 | 0);
 return;
}
function __ZN7WebCore20RenderBoxModelObjectD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore22RenderLayerModelObjectD2Ev(i1 | 0);
 return;
}
function vi___ZN7WebCore13RenderElement6layoutEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore13RenderElement6layoutEv(i1 | 0);
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
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
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
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore33StickyPositionViewportConstraintsD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 1](i2 | 0);
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
function __ZNK7WebCore12RenderObject27isSVGTransformableContainerEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b1(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(1);
}
function __ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b13(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(13);
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
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
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
function __ZN7WebCore33StickyPositionViewportConstraintsD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b14(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(14);
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
function v____cxa_pure_virtual__wrapper() {
 ___cxa_pure_virtual();
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
function b9(i1) {
 i1 = i1 | 0;
 abort(9);
 return +0;
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
function b8() {
 abort(8);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,viiiii___ZN7WebCore12RenderObject14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE__wrapper,b0,viiiii___ZNK7WebCore12RenderObject19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,viiiii___ZNK7WebCore12RenderObject19offsetFromContainerEPS0_RKNS_11LayoutPointEPb__wrapper,b0];
  var FUNCTION_TABLE_viiii = [b1,b1,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b1,__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b1,__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b1,__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE,b1,viiii___ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE__wrapper,b1,viiii___ZNK7WebCore12RenderObject21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b1,b1,b1];
  var FUNCTION_TABLE_vi = [b2,b2,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b2,vi___ZN7WebCore13RenderElement6layoutEv__wrapper,b2,__ZN7WebCore12RenderObject17updateFromElementEv,b2,__ZN7WebCore33StickyPositionViewportConstraintsD1Ev,b2,__ZN7WebCore20RenderBoxModelObjectD2Ev,b2,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b2,__ZN7WebCore20RenderBoxModelObject15willBeDestroyedEv,b2,__ZN7WebCore33StickyPositionViewportConstraintsD0Ev,b2,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b2,__ZN7WebCore20RenderBoxModelObject15updateFromStyleEv,b2,__ZN7WebCore20RenderBoxModelObjectD0Ev,b2,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b2,b2,b2,b2
  ,b2,b2,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b3,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b3,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b3,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b3,__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv,b3,__ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE,b3,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b3,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b3,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv,b3,vii___ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE__wrapper,b3,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b3,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper
  ,b3,__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE,b3,__ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv,b3,__ZNK7WebCore20RenderBoxModelObject10offsetLeftEv,b3,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b3,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject9offsetTopEv,b3,__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv,b3,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b3,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b3,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b3,vii___ZN7WebCore12RenderObject15updateDragStateEb__wrapper,b3,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiiiiii = [b4,b4,iiiiiii___ZN7WebCore12RenderObject11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE__wrapper,b4];
  var FUNCTION_TABLE_ii = [b5,b5,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b5,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b5,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b5,__ZNK7WebCore12RenderObject10isRubyTextEv,b5,__ZNK7WebCore12RenderObject6isRubyEv,b5,__ZNK7WebCore12RenderObject7isImageEv,b5,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b5,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b5,__ZNK7WebCore12RenderObject8isWidgetEv,b5,__ZNK7WebCore12RenderObject11isTextFieldEv,b5,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b5,__ZNK7WebCore13RenderElement13lastChildSlowEv,b5,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b5,__ZNK7WebCore12RenderObject7isQuoteEv
  ,b5,ii___ZNK7WebCore12RenderObject14firstLineBlockEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGRootEv,b5,__ZNK7WebCore12RenderObject7isFrameEv,b5,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b5,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b5,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b5,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b5,__ZNK7WebCore12RenderObject7isMeterEv,b5,__ZNK7WebCore12RenderObject14isSVGContainerEv,b5,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b5,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b5,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b5,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b5,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv
  ,b5,__ZNK7WebCore12RenderObject10isSVGImageEv,b5,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b5,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b5,__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv,b5,__ZNK7WebCore12RenderObject16isRenderTableColEv,b5,__ZNK7WebCore12RenderObject7isVideoEv,b5,__ZNK7WebCore12RenderObject10isProgressEv,b5,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv,b5,__ZNK7WebCore12RenderObject13isCombineTextEv,b5,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b5,__ZNK7WebCore12RenderObject5isWBREv,b5,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b5,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b5,__ZNK7WebCore13RenderElement14firstChildSlowEv,b5,__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv
  ,b5,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b5,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv,b5,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b5,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b5,__ZNK7WebCore12RenderObject9isReplicaEv,b5,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b5,__ZNK7WebCore12RenderObject7isMediaEv,b5,__ZNK7WebCore12RenderObject10isSVGShapeEv,b5,__ZNK7WebCore12RenderObject14isRenderButtonEv,b5,__ZNK7WebCore12RenderObject8isSliderEv,b5,__ZNK7WebCore12RenderObject10isRubyBaseEv,b5,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv,b5,__ZNK7WebCore12RenderObject8isCanvasEv,b5,__ZNK7WebCore12RenderObject10isMenuListEv,b5,ii___ZNK7WebCore13RenderElement13hoverAncestorEv__wrapper
  ,b5,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b5,__ZNK7WebCore12RenderObject14isTableCaptionEv,b5,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b5,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b5,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject13isSliderThumbEv,b5,__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv,b5,__ZNK7WebCore12RenderObject13isTextControlEv,b5,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper,b5,__ZNK7WebCore12RenderObject9isSVGTextEv,b5,__ZNK7WebCore12RenderObject10isTextAreaEv,b5,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b5,__ZNK7WebCore20RenderBoxModelObject13requiresLayerEv,b5,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b5,__ZNK7WebCore12RenderObject11isTableCellEv
  ,b5,__ZNK7WebCore12RenderObject12isRenderGridEv,b5,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b5,__ZNK7WebCore12RenderObject9isListBoxEv,b5,__ZNK7WebCore12RenderObject9isSVGPathEv,b5,__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv,b5,__ZNK7WebCore12RenderObject13isRenderImageEv,b5,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b5,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b5,__ZNK7WebCore12RenderObject10isListItemEv,b5,__ZNK7WebCore12RenderObject14isRenderIFrameEv,b5,__ZNK7WebCore12RenderObject6lengthEv,b5,__ZNK7WebCore12RenderObject10isTableRowEv,b5,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject10isFrameSetEv,b5,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv
  ,b5,__ZNK7WebCore12RenderObject10isFieldsetEv,b5,__ZNK7WebCore12RenderObject11isSVGInlineEv,b5,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b5,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b5,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b5,__ZNK7WebCore12RenderObject9isRubyRunEv,b5,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b5,__ZNK7WebCore12RenderObject14isRenderRegionEv,b5,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b5,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b5,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b5,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b5,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b5,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv
  ,b5,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b5,__ZNK7WebCore12RenderObject9isCounterEv,b5,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b5,__ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv,b5,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b5,__ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv,b5,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b5,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv,b5,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b5,__ZNK7WebCore12RenderObject19virtualContinuationEv,b5,__ZNK7WebCore12RenderObject12isListMarkerEv,b5,__ZNK7WebCore12RenderObject7isEmptyEv,b5,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b5,__ZNK7WebCore12RenderObject7isTableEv,b5,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv
  ,b5,__ZNK7WebCore12RenderObject14isTableSectionEv,b5,__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_iiii = [b6,b6,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b6,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b6,__ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE,b6,iiii___ZNK7WebCore12RenderObject22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b6,b6,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_viii = [b7,b7,__ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE,b7,__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE,b7,viii___ZN7WebCore12RenderObject16positionForPointERKNS_11LayoutPointE__wrapper,b7,__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b7,viii___ZNK7WebCore12RenderObject29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b7,viii___ZN7WebCore22RenderLayerModelObject14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE__wrapper,b7,viii___ZN7WebCore12RenderObject19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE__wrapper,b7,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b7,viii___ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2___wrapper,b7,__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b7,__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b7,viii___ZN7WebCore22RenderLayerModelObject15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE__wrapper,b7,__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8,v____cxa_pure_virtual__wrapper,b8];
  var FUNCTION_TABLE_fi = [b9,b9];
  var FUNCTION_TABLE_iiiiii = [b10,b10,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b10];
  var FUNCTION_TABLE_viiiiii = [b11,b11];
  var FUNCTION_TABLE_iii = [b12,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,b12,b12,b12,b12];
  var FUNCTION_TABLE_viiif = [b13,b13];
  var FUNCTION_TABLE_iiif = [b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiii: dynCall_viiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_fi: dynCall_fi, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiif: dynCall_viiif, dynCall_iiif: dynCall_iiif };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiii": invoke_viiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_fi": invoke_fi, "invoke_iiiiii": invoke_iiiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiif": invoke_viiif, "invoke_iiif": invoke_iiif, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___cxa_pure_virtual": ___cxa_pure_virtual, "_fabsf": _fabsf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_ceil": _ceil, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN7WebCore9HTMLNames11framesetTagE": __ZN7WebCore9HTMLNames11framesetTagE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiii = Module["dynCall_viiii"] = asm["dynCall_viiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iiiiii = Module["dynCall_iiiiii"] = asm["dynCall_iiiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
var dynCall_iiif = Module["dynCall_iiif"] = asm["dynCall_iiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBottomEv","__ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry4clipERKNS_7IntRectE","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZNK7WebCore12RenderObject6isRubyEv","__ZN7WebCore20RenderBoxModelObject18paintOneBorderSideEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_7IntRectENS_7BoxSideESC_SC_PKNS_10BorderEdgeEPKNS_4PathENS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE","_strlen","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZN7WebCore12RenderObject17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore20RenderBoxModelObject20stickyPositionOffsetEv","__ZNK7WebCore9RenderBox19stretchesToViewportEv","__ZNK7WebCore20RenderBoxModelObject24computedCSSPaddingBeforeEv","__ZN7WebCoreL20allCornersClippedOutERKNS_11RoundedRectERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore20RenderBoxModelObject14paintBoxShadowERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_11ShadowStyleEbb","__ZNK7WebCore20RenderBoxModelObject18computedCSSPaddingENS_6LengthE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore20RenderBoxModelObject15willBeDestroyedEv","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZNK7WebCore20RenderBoxModelObject24firstLetterRemainingTextEv","__ZN7WebCore12RenderObject17updateFromElementEv","__ZN7WebCore20RenderBoxModelObject20shouldAntialiasLinesEPNS_15GraphicsContextE","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZNK7WebCore12RenderObject10isMenuListEv","__ZN7WebCore12RenderObject12imageChangedEPKvPKNS_7IntRectE","__ZN7WebCore20RenderBoxModelObject19paintNinePieceImageEPNS_15GraphicsContextERKNS_10LayoutRectEPKNS_11RenderStyleERKNS_14NinePieceImageENS_17CompositeOperatorE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZNK7WebCore12RenderObject7isFrameEv","__ZN7WebCoreL19colorsMatchAtCornerENS_7BoxSideES0_PKNS_10BorderEdgeE","__ZNK7WebCore20RenderBoxModelObject12continuationEv","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject10isListItemEv","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZN7WebCore20RenderBoxModelObject33clipBorderSideForComplexInnerPathEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEPKNS_10BorderEdgeE","__ZNK7WebCore12RenderObject13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry18useFixedAttachmentERKNS_8IntPointE","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore20RenderBoxModelObject24getBackgroundRoundedRectERKNS_10LayoutRectEPNS_13InlineFlowBoxENS_10LayoutUnitES6_bb","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore12RenderObject24maxPreferredLogicalWidthEv","__ZN7WebCore20RenderBoxModelObject27paintTranslucentBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbb","__ZNK7WebCore20RenderBoxModelObject40borderInnerRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceE","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore20RenderBoxModelObject28borderObscuresBackgroundEdgeERKNS_9FloatSizeE","__ZN7WebCore20RenderBoxModelObject11moveChildToEPS0_PNS_12RenderObjectES3_b","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore12RenderObject24shouldPaintSelectionGapsEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZNK7WebCore12RenderObject26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZN7WebCore12RenderObject23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZNK7WebCore12RenderObject24minPreferredLogicalWidthEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject7isVideoEv","__ZN7WebCore20RenderBoxModelObject16paintBorderSidesEPNS_15GraphicsContextEPKNS_11RenderStyleERKNS_11RoundedRectES8_RKNS_8IntPointEPKNS_10BorderEdgeEjNS_24BackgroundBleedAvoidanceEbbbPKNS_5ColorE","__ZN7WebCore20RenderBoxModelObject14contentChangedENS_17ContentChangeTypeE","__ZN7WebCoreL17joinRequiresMitreENS_7BoxSideES0_PKNS_10BorderEdgeEb","__ZNK7WebCore20RenderBoxModelObject10offsetLeftEv","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingRightEv","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore20RenderBoxModelObject14startAnimationEdPKNS_9AnimationERKNS_12KeyframeListE","__ZN7WebCore20RenderBoxModelObject27setFirstLetterRemainingTextEPNS_18RenderTextFragmentE","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZN7WebCore20RenderBoxModelObject16transitionPausedEdNS_13CSSPropertyIDE","__ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZNK7WebCore33StickyPositionViewportConstraints14constraintTypeEv","__ZN7WebCore20RenderBoxModelObjectD2Ev","__ZNK7WebCore20RenderBoxModelObject21calculateFillTileSizeEPKNS_9FillLayerERKNS_7IntSizeE","__ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZN7WebCore20RenderBoxModelObject15animationPausedEdRKN3WTF6StringE","__ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E3addINS_17HashMapTranslatorISI_SC_EES4_RS7_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S8_SA_SC_SI_SF_EEEEOT0_OT1_","__ZN7WebCore20RenderBoxModelObject23shouldPaintAtLowQualityEPNS_15GraphicsContextEPNS_5ImageEPKvRKNS_10LayoutSizeE","__ZN7WebCore20RenderBoxModelObject17animationFinishedERKN3WTF6StringE","__ZN7WebCore33StickyPositionViewportConstraintsD1Ev","__ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E6rehashEiPS7_","__ZNK7WebCore12RenderObject23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZN7WebCore20RenderBoxModelObject21clipBorderSidePolygonEPNS_15GraphicsContextERKNS_11RoundedRectES5_NS_7BoxSideEbb","__ZN7WebCore20RenderBoxModelObject17suspendAnimationsEd","__ZNK7WebCore12RenderObject9isReplicaEv","__ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingAfterEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore20RenderBoxModelObject29localCaretRectForEmptyElementENS_10LayoutUnitES1_","__ZNK7WebCore12RenderObject13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingEndEv","__ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PS2_EENS_24KeyValuePairKeyExtractorIS7_EENS_7PtrHashIS4_EENS_7HashMapIS4_S6_SB_NS_10HashTraitsIS4_EENSD_IS6_EEE18KeyValuePairTraitsESE_E3addINS_17HashMapTranslatorISH_SB_EES4_RS6_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S7_S9_SB_SH_SE_EEEEOT0_OT1_","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZNK7WebCore20RenderBoxModelObject38adjustedPositionRelativeToOffsetParentERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore20RenderBoxModelObject23paintMaskForTextFillBoxEPNS_11ImageBufferERKNS_7IntRectEPNS_13InlineFlowBoxERKNS_10LayoutRectEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_","__ZNK7WebCore20RenderBoxModelObject23mapAbsoluteToLocalPointEjRNS_14TransformStateE","__ZNK7WebCore12RenderObject8isCanvasEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore20RenderBoxModelObject25hasAcceleratedCompositingEv","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN7WebCore20RenderBoxModelObject20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore20RenderBoxModelObject23BackgroundImageGeometry13relativePhaseEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZNK7WebCore20RenderBoxModelObject37containingBlockLogicalWidthForContentEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZNK7WebCore12RenderObject10isProgressEv","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","_memset","__ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry12setNoRepeatYEi","__ZNK7WebCore12RenderObject11isTableCellEv","__ZN3WTF9HashTableIPKN7WebCore20RenderBoxModelObjectENS_12KeyValuePairIS4_PNS1_18RenderTextFragmentEEENS_24KeyValuePairKeyExtractorIS8_EENS_7PtrHashIS4_EENS_7HashMapIS4_S7_SC_NS_10HashTraitsIS4_EENSE_IS7_EEE18KeyValuePairTraitsESF_E6rehashEiPS8_","__ZNK7WebCore20RenderBoxModelObject46backgroundRoundedRectAdjustedForBleedAvoidanceEPNS_15GraphicsContextERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeEbb","__ZN7WebCore20RenderBoxModelObjectC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZNK7WebCore22RenderLayerModelObject33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZNK7WebCore12RenderObject9isListBoxEv","__ZN7WebCore33StickyPositionViewportConstraintsD0Ev","__ZNK7WebCore20RenderBoxModelObject13requiresLayerEv","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZNK7WebCore12RenderObject22outlineStyleForRepaintEv","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore20RenderBoxModelObject23computedCSSPaddingStartEv","__ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPNS1_18RenderTextFragmentENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS9_IS6_EEE6removeERKS4_","__ZNK7WebCore20RenderBoxModelObject9offsetTopEv","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZNK7WebCore20RenderBoxModelObject17getBorderEdgeInfoEPNS_10BorderEdgeEPKNS_11RenderStyleEbb","__ZNK7WebCore12RenderObject6lengthEv","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZN7WebCore20RenderBoxModelObject15updateFromStyleEv","__ZNK7WebCore12RenderObject10isTableRowEv","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore12RenderObject16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZN7WebCore20RenderBoxModelObject11paintBorderERKNS_9PaintInfoERKNS_10LayoutRectEPKNS_11RenderStyleENS_24BackgroundBleedAvoidanceEbb","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZNK7WebCore20RenderBoxModelObject32calculateBackgroundImageGeometryEPKNS_22RenderLayerModelObjectEPKNS_9FillLayerERKNS_10LayoutRectERNS0_23BackgroundImageGeometryEPNS_13RenderElementE","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZNK7WebCore20RenderBoxModelObject21computedCSSPaddingTopEv","__ZNK7WebCore20RenderBoxModelObject44hasAutoHeightOrContainingBlockWithAutoHeightEv","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZNK7WebCore20RenderBoxModelObject39fixedBackgroundPaintsInLocalCoordinatesEv","__ZNK7WebCore20RenderBoxModelObject32computeStickyPositionConstraintsERNS_33StickyPositionViewportConstraintsERKNS_9FloatRectE","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZN7WebCore13RenderElement28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore20RenderBoxModelObjectC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore20RenderBoxModelObject33calculateImageIntrinsicDimensionsEPNS_10StyleImageERKNS_7IntSizeENS0_25ScaleByEffectiveZoomOrNotE","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZN7WebCore20RenderBoxModelObject15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_","__ZN3WTF7HashMapIPKN7WebCore20RenderBoxModelObjectEPS2_NS_7PtrHashIS4_EENS_10HashTraitsIS4_EENS8_IS5_EEE6removeERKS4_","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZN7WebCore20RenderBoxModelObject20clipRoundedInnerRectEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_11RoundedRectE","__ZN7WebCore20RenderBoxModelObjectD0Ev","__ZNK7WebCore12RenderObject7isImageEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore12RenderObject9isCounterEv","__ZNK7WebCore20RenderBoxModelObject29getGeometryForBackgroundImageEPKNS_22RenderLayerModelObjectERNS_7IntRectERNS_8IntPointERNS_7IntSizeE","__ZNK7WebCore20RenderBoxModelObject24pixelSnappedOffsetHeightEv","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore20RenderBoxModelObject23BackgroundImageGeometry12setNoRepeatXEi","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZNK7WebCore20RenderBoxModelObject23pixelSnappedOffsetWidthEv","__ZNK7WebCore20RenderBoxModelObject22computedCSSPaddingLeftEv","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore12RenderObject19virtualContinuationEv","__ZN7WebCore20RenderBoxModelObject18transitionFinishedENS_13CSSPropertyIDE","__ZN7WebCore20RenderBoxModelObject19drawBoxSideFromPathEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_4PathEPKNS_10BorderEdgeEffNS_7BoxSideEPKNS_11RenderStyleENS_5ColorENS_12EBorderStyleENS_24BackgroundBleedAvoidanceEbb","__ZNK7WebCore12RenderObject7isEmptyEv","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZNK7WebCore12RenderObject7isTableEv","__ZNK7WebCore20RenderBoxModelObject24borderObscuresBackgroundEv","_memcpy","__ZNK7WebCore20RenderBoxModelObject22relativePositionOffsetEv","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject14isTableSectionEv","__ZN7WebCore20RenderBoxModelObject22paintFillLayerExtendedERKNS_9PaintInfoERKNS_5ColorEPKNS_9FillLayerERKNS_10LayoutRectENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxERKNS_10LayoutSizeENS_17CompositeOperatorEPNS_13RenderElementE","__ZN7WebCore12RenderObject36computeBackgroundIsKnownToBeObscuredEv","__ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b"]

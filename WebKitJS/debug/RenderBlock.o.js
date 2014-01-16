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
H_BASE = parentModule["_malloc"](1576 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1576;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11RenderBlockC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj;
var __ZN7WebCore11RenderBlockC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj;
var __ZN7WebCore11RenderBlockD1Ev;
/* memory initializer */ allocate([82,101,110,100,101,114,66,108,111,99,107,32,40,114,117,110,45,105,110,41,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,32,40,115,116,105,99,107,121,32,112,111,115,105,116,105,111,110,101,100,41,0,82,101,110,100,101,114,66,108,111,99,107,32,40,114,101,108,97,116,105,118,101,32,112,111,115,105,116,105,111,110,101,100,41,0,0,0,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,32,40,103,101,110,101,114,97,116,101,100,41,0,82,101,110,100,101,114,66,108,111,99,107,32,40,97,110,111,110,121,109,111,117,115,41,0,82,101,110,100,101,114,66,108,111,99,107,32,40,97,110,111,110,121,109,111,117,115,32,109,117,108,116,105,45,99,111,108,117,109,110,32,115,112,97,110,41,0,0,0,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,32,40,97,110,111,110,121,109,111,117,115,32,109,117,108,116,105,45,99,111,108,117,109,110,41,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,32,40,112,111,115,105,116,105,111,110,101,100,41,0,0,0,0,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,0,0,0,0,0,82,101,110,100,101,114,66,108,111,99,107,32,40,102,108,111,97,116,105,110,103,41,0,0,82,101,110,100,101,114,66,111,100,121,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZTVN7WebCore26SVGTextRunRenderingContextE=env.__ZTVN7WebCore26SVGTextRunRenderingContextE|0;
  var __ZN7WebCore7TextRun21s_allowsRoundingHacksE=env.__ZN7WebCore7TextRun21s_allowsRoundingHacksE|0;
  var __ZTVN7WebCore15ShapeInsideInfoE=env.__ZTVN7WebCore15ShapeInsideInfoE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11RenderBlockE=(H_BASE+328)|0;
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
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iiiifi=env.invoke_iiiifi;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_viiiiiiiiii=env.invoke_viiiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_iiiiii=env.invoke_iiiiii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var _floorf=env._floorf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11RenderBlock35computeInlinePreferredLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, d58 = +0, d59 = +0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, d123 = +0, d124 = +0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, d133 = +0, d134 = +0, i135 = 0, d136 = +0, i137 = 0, i138 = 0, i139 = 0, i140 = 0, i141 = 0, i142 = 0, i143 = 0, i144 = 0, i145 = 0, d146 = +0, d147 = +0, i148 = 0, d149 = +0, i150 = 0, i151 = 0, i152 = 0, i153 = 0, i154 = 0, i155 = 0, i156 = 0, i157 = 0, i158 = 0, d159 = +0, i160 = 0, i161 = 0, i162 = 0, d163 = +0, i164 = 0, i165 = 0, d166 = +0, i167 = 0, i168 = 0, d169 = +0, i170 = 0, d171 = +0, d172 = +0, d173 = +0, i174 = 0, d175 = +0, i176 = 0, i177 = 0, i178 = 0, d179 = +0, i180 = 0, i181 = 0, i182 = 0, i183 = 0, i184 = 0, i185 = 0, d186 = +0, d187 = +0, i188 = 0, i189 = 0, i190 = 0, i191 = 0, d192 = +0, d193 = +0, d194 = +0, i195 = 0, i196 = 0, i197 = 0, d198 = +0, i199 = 0, d200 = +0, i201 = 0, d202 = +0, i203 = 0, d204 = +0, i205 = 0, i206 = 0, i207 = 0, i208 = 0, d209 = +0, i210 = 0, d211 = +0, i212 = 0, i213 = 0, i214 = 0, i215 = 0, i216 = 0, i217 = 0, i218 = 0, i219 = 0, i220 = 0, i221 = 0, i222 = 0, i223 = 0, d224 = +0, d225 = +0, i226 = 0, d227 = +0, d228 = +0, i229 = 0, i230 = 0, i231 = 0, i232 = 0, i233 = 0, i234 = 0, i235 = 0, i236 = 0, i237 = 0, i238 = 0, i239 = 0, i240 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 312 | 0;
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
 i30 = i4 + 232 | 0;
 i31 = i4 + 240 | 0;
 i32 = i4 + 248 | 0;
 i33 = i4 + 256 | 0;
 i34 = i4 + 264 | 0;
 i35 = i4 + 280 | 0;
 i36 = i4 + 288 | 0;
 i37 = i4 + 296 | 0;
 i38 = i4 + 304 | 0;
 i39 = i38;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = i40;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i48 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i52 = HEAP32[i1 + 36 >> 2] | 0;
 i53 = i1 | 0;
 i54 = __ZNK7WebCore12RenderObject15containingBlockEv(i53) | 0;
 if ((i54 | 0) == 0) {
  HEAP32[i32 >> 2] = 0;
 } else {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i32, i54 | 0);
 }
 HEAP8[i33] = 1;
 i54 = i1 + 4 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i53) | 0)) {
    i55 = 1;
    break;
   }
   i56 = (HEAP32[i52 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i56 | 0) == 3 | (i56 | 0) == 0) {
    i57 = (HEAP32[i52 + 4 >> 2] | 0) + 4 | 0;
   } else {
    i57 = (HEAP32[i52 + 4 >> 2] | 0) + 12 | 0;
   }
   i56 = HEAP8[i57 + 5 | 0] | 0;
   if (i56 << 24 >> 24 == 0 | (i56 - 4 & 255) >>> 0 < 2 >>> 0) {
    i55 = 0;
    break;
   }
   i55 = ((i56 & 255) - 6 | 0) >>> 0 > 3 >>> 0;
  } else {
   i55 = 1;
  }
 } while (0);
 i57 = i52 + 44 | 0;
 i1 = HEAP32[i57 >> 2] & 7;
 HEAP32[i34 >> 2] = i53;
 HEAP32[i34 + 4 >> 2] = i53;
 i53 = i34 + 8 | 0;
 HEAP8[i53] = 0;
 i56 = (HEAP32[i52 + 24 >> 2] | 0) + 72 | 0;
 HEAP32[i26 >> 2] = HEAP32[i32 >> 2];
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i35, i56, i26, HEAP32[(HEAP32[(HEAP32[(HEAP32[i54 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 i54 = __ZN7WebCore20InlineMinMaxIterator4nextEv(i34) | 0;
 L14 : do {
  if ((i54 | 0) == 0) {
   d58 = +0;
   d59 = +0;
   i60 = 0;
  } else {
   i26 = i18;
   i56 = i2 | 0;
   i32 = i18;
   i52 = i19;
   i61 = i19;
   i62 = i39 + 5 | 0;
   i63 = i39 + 6 | 0;
   i64 = i38;
   i65 = i38;
   i66 = i41 + 5 | 0;
   i67 = i41 + 6 | 0;
   i68 = i40;
   i69 = i40;
   i70 = i10;
   i71 = i12;
   i72 = i14;
   i73 = i16;
   i74 = i72 + 5 | 0;
   i75 = i13 | 0;
   i76 = i73 + 5 | 0;
   i77 = i15 | 0;
   i78 = i73 + 6 | 0;
   i79 = i16;
   i80 = i16;
   i81 = i72 + 6 | 0;
   i82 = i14;
   i83 = i14;
   i84 = i70 + 5 | 0;
   i85 = i9 | 0;
   i86 = i71 + 5 | 0;
   i87 = i11 | 0;
   i88 = i71 + 6 | 0;
   i89 = i12;
   i90 = i12;
   i91 = i70 + 6 | 0;
   i92 = i10;
   i93 = i10;
   i94 = i42 | 0;
   i95 = i43 | 0;
   i96 = i5;
   i97 = i5;
   i98 = i6;
   i99 = i3 | 0;
   i100 = i6;
   i101 = i55 ^ 1;
   i102 = i7;
   i103 = i7;
   i104 = i17;
   i105 = i17;
   i106 = i8;
   i107 = i8;
   i108 = i35 | 0;
   i109 = i23;
   i110 = i23;
   i111 = i24;
   i112 = i24;
   i113 = i21;
   i114 = i21;
   i115 = i22;
   i116 = i22;
   i117 = i20;
   i118 = i20;
   i119 = i25;
   i120 = i25;
   i121 = i27;
   i122 = i27;
   d123 = +0;
   d124 = +0;
   i125 = 0;
   i126 = 0;
   i127 = 0;
   i128 = 0;
   i129 = 0;
   i130 = (i1 | 0) != 1 & (i1 | 0) != 4;
   i131 = 0;
   i132 = i54;
   while (1) {
    d133 = d123;
    d134 = d124;
    i135 = i132;
    L18 : while (1) {
     d136 = d134;
     i137 = i135;
     while (1) {
      i138 = i137 + 20 | 0;
      i139 = HEAP32[i138 >> 2] | 0;
      if ((i139 & 2048 | 0) == 0) {
       if ((i139 & 768 | 0) == 256) {
        i140 = HEAP32[(HEAP32[i137 + 8 >> 2] | 0) + 36 >> 2] | 0;
       } else {
        i140 = HEAP32[i137 + 36 >> 2] | 0;
       }
       i141 = HEAP32[i140 + 44 >> 2] & 7;
       i142 = (i141 | 0) != 1 & (i141 | 0) != 4;
      } else {
       i141 = HEAP32[(HEAP32[(HEAP32[i137 + 8 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] & 7;
       i142 = (i141 | 0) != 1 & (i141 | 0) != 4;
      }
      if ((i139 & 4096 | 0) == 0) {
       i143 = i139;
      } else {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 620 >> 2] & 511](i137) | 0)) {
        i144 = 208;
        break L18;
       }
       i143 = HEAP32[i138 >> 2] | 0;
      }
      if ((i143 & 768 | 0) == 256) {
       i145 = HEAP32[(HEAP32[i137 + 8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i145 = HEAP32[i137 + 36 >> 2] | 0;
      }
      HEAPF32[i36 >> 2] = +0;
      HEAPF32[i37 >> 2] = +0;
      i139 = HEAP32[i138 >> 2] | 0;
      if ((i139 & 768 | 0) == 256) {
       d146 = d136;
       d147 = d133;
       break;
      }
      if ((i139 & 4096 | 0) == 0) {
       i148 = i139;
       i144 = 35;
       break;
      }
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 620 >> 2] & 511](i137) | 0)) {
       i144 = 30;
       break;
      }
      _llvm_lifetime_start(4, 0, i26 | 0);
      d149 = +Math_ceil(d136);
      do {
       if (d149 < +2147483647) {
        if (d149 <= +-2147483648) {
         i150 = -2147483648;
         break;
        }
        i150 = ~~d149;
       } else {
        i150 = 2147483647;
       }
      } while (0);
      HEAP32[i18 >> 2] = i150;
      HEAP32[i56 >> 2] = HEAP32[((i150 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i32) >> 2];
      _llvm_lifetime_end(4, 0, i26 | 0);
      i139 = __ZN7WebCore20InlineMinMaxIterator4nextEv(i34) | 0;
      if ((i139 | 0) == 0) {
       d58 = +0;
       d59 = d133;
       i60 = i131;
       break L14;
      } else {
       d136 = +0;
       i137 = i139;
      }
     }
     if ((i144 | 0) == 30) {
      i144 = 0;
      i148 = HEAP32[i138 >> 2] | 0;
      i144 = 35;
     }
     L47 : do {
      if ((i144 | 0) == 35) {
       i144 = 0;
       do {
        if ((i148 & 768 | 0) != 256) {
         if ((HEAP32[i137 + 24 >> 2] & 4 | 0) == 0) {
          break;
         }
         i139 = i137;
         i141 = HEAP32[i137 + 36 >> 2] | 0;
         i151 = HEAP32[i137 >> 2] | 0;
         do {
          if ((HEAP8[i53] & 1) == 0) {
           FUNCTION_TABLE_viii[HEAP32[i151 + 792 >> 2] & 63](i13, i139, 0);
           i152 = i141 + 16 | 0;
           i153 = i141 + 40 | 0;
           i154 = i153 + 4 | 0;
           i155 = i153;
           i153 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i152 >> 2] | 0) + 36 | 0, (HEAP32[i154 >> 2] | 0) >>> 13 & 3, (HEAP32[i155 >> 2] | 0) >>> 30 & 1) | 0;
           i156 = HEAP32[i153 >> 2] | 0;
           i157 = HEAP32[i153 + 4 >> 2] | 0;
           HEAP32[i14 >> 2] = i156;
           HEAP32[i14 + 4 >> 2] = i157;
           if ((i156 & 0 | 0) == 0 & (i157 & 65280 | 0) == 2560) {
            __ZNK7WebCore6Length22incrementCalculatedRefEv(i72);
            i158 = HEAP8[i74] | 0;
           } else {
            i158 = (i157 >>> 8 | 0 << 24) & 255;
           }
           i157 = HEAP32[i75 >> 2] | 0;
           do {
            if ((i158 << 24 >> 24 | 0) == 3) {
             if ((HEAP8[i81] & 1) == 0) {
              d159 = +(HEAP32[i82 >> 2] | 0);
             } else {
              d159 = +HEAPF32[i83 >> 2];
             }
             if (d159 >= +2147483647) {
              i160 = 2147483647;
              break;
             }
             if (d159 <= +-2147483648) {
              i160 = -2147483648;
              break;
             }
             i160 = ~~d159;
            } else if ((i158 << 24 >> 24 | 0) == 0) {
             i160 = 0;
            } else {
             i160 = i157;
            }
           } while (0);
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i137 >> 2] | 0) + 728 >> 2] & 127](i15, i139);
           i157 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i152 >> 2] | 0) + 68 | 0, (HEAP32[i154 >> 2] | 0) >>> 13 & 3, (HEAP32[i155 >> 2] | 0) >>> 30 & 1) | 0;
           i156 = HEAP32[i157 >> 2] | 0;
           i153 = HEAP32[i157 + 4 >> 2] | 0;
           HEAP32[i16 >> 2] = i156;
           HEAP32[i16 + 4 >> 2] = i153;
           if ((i156 & 0 | 0) == 0 & (i153 & 65280 | 0) == 2560) {
            __ZNK7WebCore6Length22incrementCalculatedRefEv(i73);
            i161 = HEAP8[i76] | 0;
           } else {
            i161 = (i153 >>> 8 | 0 << 24) & 255;
           }
           i153 = HEAP32[i77 >> 2] | 0;
           do {
            if ((i161 << 24 >> 24 | 0) == 0) {
             i162 = 0;
            } else if ((i161 << 24 >> 24 | 0) == 3) {
             if ((HEAP8[i78] & 1) == 0) {
              d163 = +(HEAP32[i79 >> 2] | 0);
             } else {
              d163 = +HEAPF32[i80 >> 2];
             }
             if (d163 >= +2147483647) {
              i162 = 2147483647;
              break;
             }
             if (d163 <= +-2147483648) {
              i162 = -2147483648;
              break;
             }
             i162 = ~~d163;
            } else {
             i162 = i153;
            }
           } while (0);
           i153 = i162 + i160 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 760 >> 2] & 511](i139) | 0) | 0;
           if ((HEAP8[i76] | 0) == 10) {
            __ZNK7WebCore6Length22decrementCalculatedRefEv(i73);
           }
           if ((HEAP8[i74] | 0) != 10) {
            i164 = i153;
            break;
           }
           __ZNK7WebCore6Length22decrementCalculatedRefEv(i72);
           i164 = i153;
          } else {
           FUNCTION_TABLE_viii[HEAP32[i151 + 796 >> 2] & 63](i9, i139, 0);
           i153 = i141 + 16 | 0;
           i155 = i141 + 40 | 0;
           i154 = i155 + 4 | 0;
           i152 = i155;
           i155 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i153 >> 2] | 0) + 36 | 0, (HEAP32[i154 >> 2] | 0) >>> 13 & 3, (HEAP32[i152 >> 2] | 0) >>> 30 & 1) | 0;
           i156 = HEAP32[i155 >> 2] | 0;
           i157 = HEAP32[i155 + 4 >> 2] | 0;
           HEAP32[i10 >> 2] = i156;
           HEAP32[i10 + 4 >> 2] = i157;
           if ((i156 & 0 | 0) == 0 & (i157 & 65280 | 0) == 2560) {
            __ZNK7WebCore6Length22incrementCalculatedRefEv(i70);
            i165 = HEAP8[i84] | 0;
           } else {
            i165 = (i157 >>> 8 | 0 << 24) & 255;
           }
           i157 = HEAP32[i85 >> 2] | 0;
           do {
            if ((i165 << 24 >> 24 | 0) == 3) {
             if ((HEAP8[i91] & 1) == 0) {
              d166 = +(HEAP32[i92 >> 2] | 0);
             } else {
              d166 = +HEAPF32[i93 >> 2];
             }
             if (d166 >= +2147483647) {
              i167 = 2147483647;
              break;
             }
             if (d166 <= +-2147483648) {
              i167 = -2147483648;
              break;
             }
             i167 = ~~d166;
            } else if ((i165 << 24 >> 24 | 0) == 0) {
             i167 = 0;
            } else {
             i167 = i157;
            }
           } while (0);
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i137 >> 2] | 0) + 732 >> 2] & 127](i11, i139);
           i157 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i153 >> 2] | 0) + 68 | 0, (HEAP32[i154 >> 2] | 0) >>> 13 & 3, (HEAP32[i152 >> 2] | 0) >>> 30 & 1) | 0;
           i156 = HEAP32[i157 >> 2] | 0;
           i155 = HEAP32[i157 + 4 >> 2] | 0;
           HEAP32[i12 >> 2] = i156;
           HEAP32[i12 + 4 >> 2] = i155;
           if ((i156 & 0 | 0) == 0 & (i155 & 65280 | 0) == 2560) {
            __ZNK7WebCore6Length22incrementCalculatedRefEv(i71);
            i168 = HEAP8[i86] | 0;
           } else {
            i168 = (i155 >>> 8 | 0 << 24) & 255;
           }
           i155 = HEAP32[i87 >> 2] | 0;
           do {
            if ((i168 << 24 >> 24 | 0) == 3) {
             if ((HEAP8[i88] & 1) == 0) {
              d169 = +(HEAP32[i89 >> 2] | 0);
             } else {
              d169 = +HEAPF32[i90 >> 2];
             }
             if (d169 >= +2147483647) {
              i170 = 2147483647;
              break;
             }
             if (d169 <= +-2147483648) {
              i170 = -2147483648;
              break;
             }
             i170 = ~~d169;
            } else if ((i168 << 24 >> 24 | 0) == 0) {
             i170 = 0;
            } else {
             i170 = i155;
            }
           } while (0);
           i155 = i170 + i167 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 764 >> 2] & 511](i139) | 0) | 0;
           if ((HEAP8[i86] | 0) == 10) {
            __ZNK7WebCore6Length22decrementCalculatedRefEv(i71);
           }
           if ((HEAP8[i84] | 0) != 10) {
            i164 = i155;
            break;
           }
           __ZNK7WebCore6Length22decrementCalculatedRefEv(i70);
           i164 = i155;
          }
         } while (0);
         d149 = +(i164 | 0);
         d171 = d149 + +HEAPF32[i36 >> 2];
         HEAPF32[i36 >> 2] = d171;
         d172 = d149 + +HEAPF32[i37 >> 2];
         HEAPF32[i37 >> 2] = d172;
         __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i137, 0, 1);
         d146 = d136 + d171;
         d147 = d133 + d172;
         break L47;
        }
       } while (0);
       i139 = i145 + 16 | 0;
       i141 = i145 + 44 | 0;
       i151 = i145 + 40 | 0;
       i155 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i139 >> 2] | 0) + 36 | 0, (HEAP32[i141 >> 2] | 0) >>> 13 & 3, (HEAP32[i151 >> 2] | 0) >>> 30 & 1) | 0;
       i152 = HEAP32[i155 >> 2] | 0;
       i154 = HEAP32[i155 + 4 >> 2] | 0;
       HEAP32[i38 >> 2] = i152;
       HEAP32[i38 + 4 >> 2] = i154;
       if ((i152 & 0 | 0) == 0 & (i154 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i39);
       }
       i154 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i139 >> 2] | 0) + 36 | 0, (HEAP32[i141 >> 2] | 0) >>> 13 & 3, (HEAP32[i151 >> 2] | 0) >>> 30 & 1) | 0;
       i151 = HEAP32[i154 >> 2] | 0;
       i141 = HEAP32[i154 + 4 >> 2] | 0;
       HEAP32[i40 >> 2] = i151;
       HEAP32[i40 + 4 >> 2] = i141;
       if ((i151 & 0 | 0) == 0 & (i141 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i41);
       }
       i141 = HEAP8[i62] | 0;
       if (i141 << 24 >> 24 == 3) {
        if ((HEAP8[i63] & 1) == 0) {
         d173 = +(HEAP32[i64 >> 2] | 0);
        } else {
         d173 = +HEAPF32[i65 >> 2];
        }
        i174 = ~~d173;
       } else {
        i174 = 0;
       }
       i151 = HEAP8[i66] | 0;
       if (i151 << 24 >> 24 == 3) {
        if ((HEAP8[i67] & 1) == 0) {
         d175 = +(HEAP32[i68 >> 2] | 0);
        } else {
         d175 = +HEAPF32[i69 >> 2];
        }
        i176 = ~~d175 + i174 | 0;
       } else {
        i176 = i174;
       }
       d172 = +(i176 | 0);
       HEAPF32[i36 >> 2] = +HEAPF32[i36 >> 2] + d172;
       HEAPF32[i37 >> 2] = d172 + +HEAPF32[i37 >> 2];
       if (i151 << 24 >> 24 == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i41);
        i177 = HEAP8[i62] | 0;
       } else {
        i177 = i141;
       }
       if (i177 << 24 >> 24 != 10) {
        d146 = d136;
        d147 = d133;
        break;
       }
       __ZNK7WebCore6Length22decrementCalculatedRefEv(i39);
       d146 = d136;
       d147 = d133;
      }
     } while (0);
     if ((HEAP32[i138 >> 2] & 768 | 0) != 256) {
      i144 = 110;
      break;
     }
     i141 = i137;
     do {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i137 + 8 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 128 | 0) != 0) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 560 >> 2] & 511](i137) | 0)) {
        break;
       }
       __ZN7WebCore17RenderCombineText11combineTextEv(i137);
      }
     } while (0);
     __ZN7WebCore10RenderText17trimmedPrefWidthsEfRfRbS1_S2_S2_S2_S1_S1_S1_S1_S2_(i141, d147, i46, i48, i47, i49, i44, i45, i50, i51, i36, i37, i33);
     i178 = (HEAP8[i45] & 1) == 0;
     if (!i178) {
      i144 = 174;
      break;
     }
     if (+HEAPF32[i37 >> 2] != +0) {
      i144 = 174;
      break;
     }
     do {
      if (i142) {
       if ((HEAP8[i48] & 1) == 0) {
        if ((HEAP8[i49] & 1) == 0) {
         d179 = d146;
         break;
        }
       }
       _llvm_lifetime_start(4, 0, i52 | 0);
       d172 = +Math_ceil(d146);
       do {
        if (d172 < +2147483647) {
         if (d172 <= +-2147483648) {
          i180 = -2147483648;
          break;
         }
         i180 = ~~d172;
        } else {
         i180 = 2147483647;
        }
       } while (0);
       HEAP32[i19 >> 2] = i180;
       HEAP32[i56 >> 2] = HEAP32[((i180 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i61) >> 2];
       _llvm_lifetime_end(4, 0, i52 | 0);
       d179 = +0;
      } else {
       d179 = d146;
      }
     } while (0);
     i141 = __ZN7WebCore20InlineMinMaxIterator4nextEv(i34) | 0;
     if ((i141 | 0) == 0) {
      d58 = d179;
      d59 = d147;
      i60 = i131;
      break L14;
     } else {
      d133 = d147;
      d134 = d179;
      i135 = i141;
     }
    }
    do {
     if ((i144 | 0) == 110) {
      i144 = 0;
      if ((HEAP32[i137 + 24 >> 2] & 4 | 0) != 0) {
       i181 = i131;
       i182 = i129;
       i183 = i128;
       i184 = i127;
       i185 = i125;
       d186 = d146;
       d187 = d147;
       i144 = 206;
       break;
      }
      i135 = i137;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i135 >> 2] | 0) + 484 >> 2] & 127](i42, i137);
      HEAPF32[i36 >> 2] = +HEAPF32[i36 >> 2] + +(HEAP32[i94 >> 2] | 0);
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i135 >> 2] | 0) + 488 >> 2] & 127](i43, i137);
      HEAPF32[i37 >> 2] = +HEAPF32[i37 >> 2] + +(HEAP32[i95 >> 2] | 0);
      do {
       if ((HEAP32[i138 >> 2] & 64 | 0) == 0) {
        i188 = 0;
        i189 = i125;
       } else {
        if ((i125 | 0) == 0) {
         i188 = 0;
         i189 = i137;
         break;
        }
        i135 = (HEAP32[i125 + 20 >> 2] & 768 | 0) == 256;
        if (i135) {
         i190 = HEAP32[(HEAP32[i125 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i190 = HEAP32[i125 + 36 >> 2] | 0;
        }
        if ((HEAP32[i190 + 48 >> 2] & 100663296 | 0) == 33554432) {
         if ((HEAP32[i145 + 48 >> 2] & 1048576 | 0) != 0) {
          i188 = 1;
          i189 = i137;
          break;
         }
        }
        if (i135) {
         i191 = HEAP32[(HEAP32[i125 + 8 >> 2] | 0) + 36 >> 2] | 0;
        } else {
         i191 = HEAP32[i125 + 36 >> 2] | 0;
        }
        if ((HEAP32[i191 + 48 >> 2] & 100663296 | 0) != 67108864) {
         i188 = 0;
         i189 = i137;
         break;
        }
        i188 = (HEAP32[i145 + 48 >> 2] & 2097152 | 0) != 0;
        i189 = i137;
       }
      } while (0);
      i135 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 92 >> 2] & 511](i137) | 0;
      if ((i55 | i135 ^ 1) & (i142 | i130)) {
       if (i127 | i126 ^ 1 | i188) {
        i144 = 126;
       } else {
        d192 = d146;
        i144 = 130;
       }
      } else {
       if (i188) {
        i144 = 126;
       } else {
        d193 = d146;
        d194 = d147;
       }
      }
      if ((i144 | 0) == 126) {
       i144 = 0;
       _llvm_lifetime_start(4, 0, i96 | 0);
       d134 = +Math_ceil(d146);
       do {
        if (d134 < +2147483647) {
         if (d134 <= +-2147483648) {
          i195 = -2147483648;
          break;
         }
         i195 = ~~d134;
        } else {
         i195 = 2147483647;
        }
       } while (0);
       HEAP32[i5 >> 2] = i195;
       HEAP32[i56 >> 2] = HEAP32[((i195 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i97) >> 2];
       _llvm_lifetime_end(4, 0, i96 | 0);
       d192 = +0;
       i144 = 130;
      }
      do {
       if ((i144 | 0) == 130) {
        i144 = 0;
        if (!i188) {
         d193 = d192;
         d194 = d147;
         break;
        }
        _llvm_lifetime_start(4, 0, i98 | 0);
        d134 = +Math_ceil(d147);
        do {
         if (d134 < +2147483647) {
          if (d134 <= +-2147483648) {
           i196 = -2147483648;
           break;
          }
          i196 = ~~d134;
         } else {
          i196 = 2147483647;
         }
        } while (0);
        HEAP32[i6 >> 2] = i196;
        HEAP32[i99 >> 2] = HEAP32[((i196 | 0) < (HEAP32[i99 >> 2] | 0) ? i3 : i100) >> 2];
        _llvm_lifetime_end(4, 0, i98 | 0);
        d193 = d192;
        d194 = +0;
       }
      } while (0);
      do {
       if (i129) {
        i197 = 1;
       } else {
        if ((HEAP32[i138 >> 2] & 64 | 0) != 0) {
         i197 = 0;
         break;
        }
        d134 = +(HEAP32[i108 >> 2] | 0);
        do {
         if (d134 < +2147483647) {
          if (d134 <= +-2147483648) {
           d198 = +-2147483648;
           break;
          }
          d198 = +(~~d134 | 0);
         } else {
          d198 = +2147483648;
         }
        } while (0);
        d134 = d198 + +HEAPF32[i36 >> 2];
        HEAPF32[i36 >> 2] = d134;
        HEAPF32[i37 >> 2] = d198 + +HEAPF32[i37 >> 2];
        if (d134 >= +0) {
         i197 = 1;
         break;
        }
        HEAP32[i108 >> 2] = ~~d134;
        i197 = 0;
       }
      } while (0);
      d134 = +HEAPF32[i37 >> 2];
      d172 = d194 + (d134 > +0 ? d134 : +0);
      i141 = i135 & i101 | i142 ^ 1;
      do {
       if (i141) {
        i144 = 144;
       } else {
        if (!(i127 | i126 ^ 1)) {
         i144 = 144;
         break;
        }
        d134 = +HEAPF32[i36 >> 2];
        _llvm_lifetime_start(4, 0, i106 | 0);
        d171 = +Math_ceil(d134);
        do {
         if (d171 < +2147483647) {
          if (d171 <= +-2147483648) {
           i199 = -2147483648;
           break;
          }
          i199 = ~~d171;
         } else {
          i199 = 2147483647;
         }
        } while (0);
        HEAP32[i8 >> 2] = i199;
        HEAP32[i56 >> 2] = HEAP32[((i199 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i107) >> 2];
        _llvm_lifetime_end(4, 0, i106 | 0);
        d200 = +0;
       }
      } while (0);
      do {
       if ((i144 | 0) == 144) {
        i144 = 0;
        d171 = +HEAPF32[i36 >> 2];
        if ((HEAP32[i138 >> 2] & 64 | 0) == 0) {
         d200 = d193 + d171;
         break;
        }
        _llvm_lifetime_start(4, 0, i102 | 0);
        d134 = +Math_ceil(d171);
        do {
         if (d134 < +2147483647) {
          if (d134 <= +-2147483648) {
           i201 = -2147483648;
           break;
          }
          i201 = ~~d134;
         } else {
          i201 = 2147483647;
         }
        } while (0);
        HEAP32[i7 >> 2] = i201;
        HEAP32[i56 >> 2] = HEAP32[((i201 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i103) >> 2];
        _llvm_lifetime_end(4, 0, i102 | 0);
        d200 = d193;
       }
      } while (0);
      if (i141 | i126 ^ 1) {
       d202 = d200;
      } else {
       _llvm_lifetime_start(4, 0, i104 | 0);
       d134 = +Math_ceil(d200);
       do {
        if (d134 < +2147483647) {
         if (d134 <= +-2147483648) {
          i203 = -2147483648;
          break;
         }
         i203 = ~~d134;
        } else {
         i203 = 2147483647;
        }
       } while (0);
       HEAP32[i17 >> 2] = i203;
       HEAP32[i56 >> 2] = HEAP32[((i203 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i105) >> 2];
       _llvm_lifetime_end(4, 0, i104 | 0);
       d202 = +0;
      }
      if ((HEAP32[i138 >> 2] & 64 | 0) != 0) {
       i181 = i131;
       i182 = i197;
       i183 = i128;
       i184 = i127;
       i185 = i189;
       d186 = d202;
       d187 = d172;
       i144 = 206;
       break;
      }
      HEAP8[i33] = 0;
      i181 = 0;
      i182 = i197;
      i183 = i128;
      i184 = i127;
      i185 = i189;
      d186 = d202;
      d187 = d172;
      i144 = 206;
     } else if ((i144 | 0) == 174) {
      i144 = 0;
      i141 = (HEAP8[i33] & 1) == 0 ? 0 : i137;
      do {
       if (i128 | i129 ^ 1) {
        d134 = +(HEAP32[i108 >> 2] | 0);
        d171 = +HEAPF32[i36 >> 2] + d134;
        HEAPF32[i36 >> 2] = d171;
        HEAPF32[i46 >> 2] = d134 + +HEAPF32[i46 >> 2];
        if (!i129) {
         HEAPF32[i37 >> 2] = d134 + +HEAPF32[i37 >> 2];
         HEAPF32[i50 >> 2] = d134 + +HEAPF32[i50 >> 2];
        }
        if (d171 >= +0) {
         d204 = d134;
         i205 = 1;
         i206 = i128;
         break;
        }
        do {
         if (d171 < +2147483647) {
          if (d171 <= +-2147483648) {
           i207 = -2147483648;
           break;
          }
          i207 = ~~d171;
         } else {
          i207 = 2147483647;
         }
        } while (0);
        HEAP32[i108 >> 2] = i207;
        d204 = d134;
        i205 = 1;
        i206 = 1;
       } else {
        d204 = +0;
        i205 = i129;
        i206 = 0;
       }
      } while (0);
      if ((HEAP8[i44] & 1) == 0) {
       i208 = i127;
       d209 = d146 + +HEAPF32[i36 >> 2];
      } else {
       if ((HEAP8[i48] & 1) == 0) {
        d172 = d146 + +HEAPF32[i46 >> 2];
        _llvm_lifetime_start(4, 0, i113 | 0);
        d171 = +Math_ceil(d172);
        do {
         if (d171 < +2147483647) {
          if (d171 <= +-2147483648) {
           i210 = -2147483648;
           break;
          }
          i210 = ~~d171;
         } else {
          i210 = 2147483647;
         }
        } while (0);
        HEAP32[i21 >> 2] = i210;
        i135 = HEAP32[((i210 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i114) >> 2] | 0;
        HEAP32[i56 >> 2] = i135;
        _llvm_lifetime_end(4, 0, i113 | 0);
        d171 = +HEAPF32[i36 >> 2] - d204;
        HEAPF32[i36 >> 2] = d171;
        d211 = d171;
        i212 = i135;
       } else {
        _llvm_lifetime_start(4, 0, i117 | 0);
        d171 = +Math_ceil(d146);
        do {
         if (d171 < +2147483647) {
          if (d171 <= +-2147483648) {
           i213 = -2147483648;
           break;
          }
          i213 = ~~d171;
         } else {
          i213 = 2147483647;
         }
        } while (0);
        HEAP32[i20 >> 2] = i213;
        i135 = HEAP32[((i213 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i118) >> 2] | 0;
        HEAP32[i56 >> 2] = i135;
        _llvm_lifetime_end(4, 0, i117 | 0);
        d211 = +HEAPF32[i36 >> 2];
        i212 = i135;
       }
       i135 = (HEAP8[i49] & 1) == 0;
       _llvm_lifetime_start(4, 0, i115 | 0);
       d171 = +Math_ceil(d211);
       do {
        if (d171 < +2147483647) {
         if (d171 <= +-2147483648) {
          i214 = -2147483648;
          break;
         }
         i214 = ~~d171;
        } else {
         i214 = 2147483647;
        }
       } while (0);
       HEAP32[i22 >> 2] = i214;
       HEAP32[i56 >> 2] = HEAP32[((i214 | 0) < (i212 | 0) ? i2 : i116) >> 2];
       _llvm_lifetime_end(4, 0, i115 | 0);
       i208 = i135;
       d209 = i135 ? +HEAPF32[i47 >> 2] : +0;
      }
      if (i178) {
       d171 = +HEAPF32[i37 >> 2];
       i181 = i141;
       i182 = i205;
       i183 = i206;
       i184 = i208;
       i185 = i125;
       d186 = d209;
       d187 = d147 + (d171 > +0 ? d171 : +0);
       i144 = 206;
       break;
      }
      d171 = d147 + +HEAPF32[i50 >> 2];
      _llvm_lifetime_start(4, 0, i109 | 0);
      d172 = +Math_ceil(d171);
      do {
       if (d172 < +2147483647) {
        if (d172 <= +-2147483648) {
         i215 = -2147483648;
         break;
        }
        i215 = ~~d172;
       } else {
        i215 = 2147483647;
       }
      } while (0);
      HEAP32[i23 >> 2] = i215;
      i135 = HEAP32[((i215 | 0) < (HEAP32[i99 >> 2] | 0) ? i3 : i110) >> 2] | 0;
      HEAP32[i99 >> 2] = i135;
      _llvm_lifetime_end(4, 0, i109 | 0);
      d172 = +HEAPF32[i37 >> 2];
      _llvm_lifetime_start(4, 0, i111 | 0);
      d171 = +Math_ceil(d172);
      do {
       if (d171 < +2147483647) {
        if (d171 <= +-2147483648) {
         i216 = -2147483648;
         break;
        }
        i216 = ~~d171;
       } else {
        i216 = 2147483647;
       }
      } while (0);
      HEAP32[i24 >> 2] = i216;
      HEAP32[i99 >> 2] = HEAP32[((i216 | 0) < (i135 | 0) ? i3 : i112) >> 2];
      _llvm_lifetime_end(4, 0, i111 | 0);
      i181 = i141;
      i182 = 1;
      i183 = i206;
      i184 = i208;
      i185 = i125;
      d186 = d209;
      d187 = +HEAPF32[i51 >> 2];
      i144 = 206;
     } else if ((i144 | 0) == 208) {
      i144 = 0;
      _llvm_lifetime_start(4, 0, i119 | 0);
      d171 = +Math_ceil(d136);
      do {
       if (d171 < +2147483647) {
        if (d171 <= +-2147483648) {
         i217 = -2147483648;
         break;
        }
        i217 = ~~d171;
       } else {
        i217 = 2147483647;
       }
      } while (0);
      HEAP32[i25 >> 2] = i217;
      HEAP32[i56 >> 2] = HEAP32[((i217 | 0) < (HEAP32[i56 >> 2] | 0) ? i2 : i120) >> 2];
      _llvm_lifetime_end(4, 0, i119 | 0);
      _llvm_lifetime_start(4, 0, i121 | 0);
      d171 = +Math_ceil(d133);
      do {
       if (d171 < +2147483647) {
        if (d171 <= +-2147483648) {
         i218 = -2147483648;
         break;
        }
        i218 = ~~d171;
       } else {
        i218 = 2147483647;
       }
      } while (0);
      HEAP32[i27 >> 2] = i218;
      HEAP32[i99 >> 2] = HEAP32[((i218 | 0) < (HEAP32[i99 >> 2] | 0) ? i3 : i122) >> 2];
      _llvm_lifetime_end(4, 0, i121 | 0);
      HEAP8[i33] = 1;
      i219 = 0;
      i220 = 1;
      i221 = i128;
      i222 = i127;
      i223 = i125;
      d224 = +0;
      d225 = +0;
     }
    } while (0);
    do {
     if ((i144 | 0) == 206) {
      i144 = 0;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i137 >> 2] | 0) + 108 >> 2] & 511](i137) | 0)) {
       i219 = i181;
       i220 = i182;
       i221 = i183;
       i222 = i184;
       i223 = i185;
       d224 = d186;
       d225 = d187;
       break;
      }
      HEAP8[i33] = 1;
      i219 = i181;
      i220 = i182;
      i221 = i183;
      i222 = i184;
      i223 = i185;
      d224 = d186;
      d225 = d187;
     }
    } while (0);
    if ((HEAP32[i138 >> 2] & 768 | 0) == 256) {
     i144 = 218;
    } else {
     if ((HEAP32[i137 + 24 >> 2] & 4 | 0) == 0) {
      i144 = 218;
     } else {
      i226 = 1;
     }
    }
    if ((i144 | 0) == 218) {
     i144 = 0;
     i226 = 0;
    }
    i141 = __ZN7WebCore20InlineMinMaxIterator4nextEv(i34) | 0;
    if ((i141 | 0) == 0) {
     d58 = d224;
     d59 = d225;
     i60 = i219;
     break;
    } else {
     d123 = d225;
     d124 = d224;
     i125 = i223;
     i126 = i226;
     i127 = i222;
     i128 = i221;
     i129 = i220;
     i130 = i142;
     i131 = i219;
     i132 = i141;
    }
   }
  }
 } while (0);
 do {
  if (((HEAP32[i57 >> 2] & 7) - 1 | 0) >>> 0 > 1 >>> 0) {
   if ((i60 | 0) == 0) {
    d227 = d58;
    d228 = d59;
    break;
   }
   if ((HEAP32[i60 + 20 >> 2] & 768 | 0) != 256) {
    d227 = d58;
    d228 = d59;
    break;
   }
   HEAP16[i28 >> 1] = 32;
   i219 = i60 + 8 | 0;
   i142 = __ZNK7WebCore11RenderStyle4fontEv(HEAP32[(HEAP32[i219 >> 2] | 0) + 36 >> 2] | 0) | 0;
   i220 = HEAP32[(HEAP32[(HEAP32[i219 >> 2] | 0) + 36 >> 2] | 0) + 44 >> 2] | 0;
   HEAP32[i29 + 4 >> 2] = 1;
   HEAP32[i29 + 8 >> 2] = 1;
   HEAPF32[i29 + 12 >> 2] = +0;
   HEAPF32[i29 + 16 >> 2] = +1;
   HEAPF32[i29 + 20 >> 2] = +0;
   i219 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
   HEAP32[i29 + 24 >> 2] = i220 & 32 | i219 << 7 & 128 | i219 << 8 & 256 | 81;
   HEAP32[i29 + 28 >> 2] = 0;
   i219 = i29 + 32 | 0;
   HEAP32[i219 >> 2] = 0;
   HEAP32[i29 >> 2] = i28;
   i220 = HEAP32[i142 + 24 >> 2] | 0;
   i221 = i220 + 44 | 0;
   i222 = HEAP32[i221 >> 2] | 0;
   if ((i222 | 0) == 0) {
    i226 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i220, i142 | 0, 0) | 0;
    i220 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i226 >> 2] | 0) + 8 >> 2] & 31](i226, 32) | 0;
    HEAP32[i221 >> 2] = i220;
    i229 = i220;
   } else {
    i229 = i222;
   }
   if ((HEAP32[i229 + 76 >> 2] | 0) != 0) {
    i222 = __ZN3WTF10fastMallocEj(16) | 0;
    HEAP32[i222 + 4 >> 2] = 1;
    HEAP32[i222 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
    HEAP32[i222 + 8 >> 2] = i60;
    HEAP32[i222 + 12 >> 2] = 0;
    HEAP32[i219 >> 2] = i222;
   }
   d224 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i142, i29, 0, 0);
   i222 = HEAP32[i219 >> 2] | 0;
   do {
    if ((i222 | 0) != 0) {
     i219 = i222 + 4 | 0;
     i220 = i219 | 0;
     i221 = (HEAP32[i220 >> 2] | 0) - 1 | 0;
     if ((i221 | 0) != 0) {
      HEAP32[i220 >> 2] = i221;
      break;
     }
     i221 = i219 - 4 | 0;
     if ((i221 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i221 >> 2] | 0) + 4 >> 2] & 63](i221);
    }
   } while (0);
   d225 = d59 - (d224 + +HEAPF32[i142 + 32 >> 2]);
   if (d58 <= d225) {
    d227 = d58;
    d228 = d225;
    break;
   }
   d227 = d225;
   d228 = d225;
  } else {
   d227 = d58;
   d228 = d59;
  }
 } while (0);
 i29 = i30;
 _llvm_lifetime_start(4, 0, i29 | 0);
 d59 = +Math_ceil(d227);
 do {
  if (d59 < +2147483647) {
   if (d59 <= +-2147483648) {
    i230 = -2147483648;
    break;
   }
   i230 = ~~d59;
  } else {
   i230 = 2147483647;
  }
 } while (0);
 HEAP32[i30 >> 2] = i230;
 i60 = i2 | 0;
 HEAP32[i60 >> 2] = HEAP32[((i230 | 0) < (HEAP32[i60 >> 2] | 0) ? i2 : i30) >> 2];
 _llvm_lifetime_end(4, 0, i29 | 0);
 i29 = i31;
 _llvm_lifetime_start(4, 0, i29 | 0);
 d59 = +Math_ceil(d228);
 if (d59 >= +2147483647) {
  i231 = 2147483647;
  HEAP32[i31 >> 2] = i231;
  i232 = i3 | 0;
  i233 = HEAP32[i232 >> 2] | 0;
  i234 = (i231 | 0) < (i233 | 0);
  i235 = i31;
  i236 = i234 ? i3 : i235;
  i237 = i236 | 0;
  i238 = HEAP32[i237 >> 2] | 0;
  HEAP32[i232 >> 2] = i238;
  i239 = 4;
  i240 = 0;
  _llvm_lifetime_end(i239 | 0, i240 | 0, i29 | 0);
  STACKTOP = i4;
  return;
 }
 if (d59 <= +-2147483648) {
  i231 = -2147483648;
  HEAP32[i31 >> 2] = i231;
  i232 = i3 | 0;
  i233 = HEAP32[i232 >> 2] | 0;
  i234 = (i231 | 0) < (i233 | 0);
  i235 = i31;
  i236 = i234 ? i3 : i235;
  i237 = i236 | 0;
  i238 = HEAP32[i237 >> 2] | 0;
  HEAP32[i232 >> 2] = i238;
  i239 = 4;
  i240 = 0;
  _llvm_lifetime_end(i239 | 0, i240 | 0, i29 | 0);
  STACKTOP = i4;
  return;
 }
 i231 = ~~d59;
 HEAP32[i31 >> 2] = i231;
 i232 = i3 | 0;
 i233 = HEAP32[i232 >> 2] | 0;
 i234 = (i231 | 0) < (i233 | 0);
 i235 = i31;
 i236 = i234 ? i3 : i235;
 i237 = i236 | 0;
 i238 = HEAP32[i237 >> 2] | 0;
 HEAP32[i232 >> 2] = i238;
 i239 = 4;
 i240 = 0;
 _llvm_lifetime_end(i239 | 0, i240 | 0, i29 | 0);
 STACKTOP = i4;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_ii + 242;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 172;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_ii + 258;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 218;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 212;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 256;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_ii + 188;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_ii + 274;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_ii + 184;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 196;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_ii + 178;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_ii + 198;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_ii + 238;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 236;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 228;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 280;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 182;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 208;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 282;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 246;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 266;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_ii + 264;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_ii + 186;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_ii + 222;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 272;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_ii + 252;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 234;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_ii + 200;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 232;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_ii + 248;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_ii + 262;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 190;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_ii + 220;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_ii + 224;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 174;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_ii + 192;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 736 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_ii + 244;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vii + 90;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_iiiiii + 6;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 284;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 788 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_iiiiiii + 2;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_viiiii + 14;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viii + 46;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_viii + 34;
 HEAP32[H_BASE + 816 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 820 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 824 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 828 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_viiii + 10;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viiii + 18;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 856 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 860 >> 2] = F_BASE_ii + 206;
 HEAP32[H_BASE + 864 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 868 >> 2] = F_BASE_viiii + 24;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_viiiii + 10;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_ii + 254;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_ii + 276;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 210;
 HEAP32[H_BASE + 896 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 900 >> 2] = F_BASE_ii + 202;
 HEAP32[H_BASE + 904 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 908 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_viii + 56;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_viiiii + 12;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 936 >> 2] = F_BASE_viiii + 14;
 HEAP32[H_BASE + 940 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 944 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 948 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_viii + 52;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viii + 32;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 976 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 980 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 984 >> 2] = F_BASE_viii + 58;
 HEAP32[H_BASE + 988 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_viii + 48;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_ii + 216;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 1016 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 1020 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 1024 >> 2] = F_BASE_vii + 92;
 HEAP32[H_BASE + 1028 >> 2] = F_BASE_ii + 194;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_vii + 84;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_vii + 74;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 1056 >> 2] = F_BASE_vii + 80;
 HEAP32[H_BASE + 1060 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 1064 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 1068 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_ii + 250;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 268;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_ii + 180;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_ii + 214;
 HEAP32[H_BASE + 1096 >> 2] = F_BASE_ii + 278;
 HEAP32[H_BASE + 1100 >> 2] = F_BASE_ii + 230;
 HEAP32[H_BASE + 1104 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 1108 >> 2] = F_BASE_vii + 88;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vii + 78;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_viii + 28;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viii + 60;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_viii + 38;
 HEAP32[H_BASE + 1136 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 1140 >> 2] = F_BASE_vii + 76;
 HEAP32[H_BASE + 1144 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 1148 >> 2] = F_BASE_viiiii + 8;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_iiiiii + 4;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_vii + 82;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 1176 >> 2] = F_BASE_ii + 240;
 HEAP32[H_BASE + 1180 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 1184 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 1188 >> 2] = F_BASE_ii + 270;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_vii + 72;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_vii + 86;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 1216 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 1220 >> 2] = F_BASE_viiii + 26;
 HEAP32[H_BASE + 1224 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 1228 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vii + 94;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_viii + 30;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_iiiifi + 4;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_iiiifi + 2;
 HEAP32[H_BASE + 1256 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 1260 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 1264 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 1268 >> 2] = F_BASE_vii + 44;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_viiiiii + 2;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_viiiii + 18;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_viii + 50;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_viii + 62;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 1296 >> 2] = F_BASE_viii + 40;
 HEAP32[H_BASE + 1300 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 1304 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 1308 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_viiii + 16;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_ii + 226;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_ii + 260;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 1336 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 1340 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 1344 >> 2] = F_BASE_viii + 54;
 HEAP32[H_BASE + 1348 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 1352 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 1356 >> 2] = F_BASE_viii + 44;
 HEAP32[H_BASE + 1360 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 1364 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 1368 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 1372 >> 2] = F_BASE_viiiii + 16;
 HEAP32[H_BASE + 1376 >> 2] = F_BASE_ii + 204;
 HEAP32[H_BASE + 1380 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 1384 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 1388 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1392 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 1396 >> 2] = F_BASE_viiii + 22;
 HEAP32[H_BASE + 1400 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 1404 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 1408 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 1412 >> 2] = F_BASE_vii + 38;
 HEAP32[H_BASE + 1416 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 1420 >> 2] = F_BASE_ii + 176;
 HEAP32[H_BASE + 1424 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 1428 >> 2] = F_BASE_viiii + 12;
 HEAP32[H_BASE + 1432 >> 2] = F_BASE_viii + 36;
 HEAP32[H_BASE + 1436 >> 2] = F_BASE_iiiiiii + 4;
 HEAP32[H_BASE + 1440 >> 2] = F_BASE_iiiiii + 2;
 HEAP32[H_BASE + 1444 >> 2] = F_BASE_iiiiiii + 6;
 HEAP32[H_BASE + 1448 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 1452 >> 2] = F_BASE_viiiiiiiiii + 2;
 HEAP32[H_BASE + 1456 >> 2] = F_BASE_viiiii + 6;
 HEAP32[H_BASE + 1460 >> 2] = F_BASE_viii + 42;
 HEAP32[H_BASE + 1464 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 1468 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 1472 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 1476 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 1480 >> 2] = F_BASE_ii + 32;
}
function __ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2);
  STACKTOP = i3;
  return;
 }
 i6 = HEAP8[H_BASE + 1496 | 0] & 1;
 HEAP8[H_BASE + 1496 | 0] = 0;
 i7 = HEAP32[i2 + 12 >> 2] | 0;
 i8 = HEAP32[i2 + 16 >> 2] | 0;
 L5 : do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   if ((HEAP32[i2 + 20 >> 2] & 1024 | 0) != 0) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 432 >> 2] & 511](i2) | 0) != 0) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   i12 = (i7 | 0) != 0;
   do {
    if (i12) {
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0)) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
     if ((HEAP32[i7 + 92 >> 2] & 134217728 | 0) != 0) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
     if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i7) | 0) != 0) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
     i13 = i7;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 168 >> 2] & 511](i7) | 0) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 511](i7) | 0) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
     i13 = HEAP32[i7 + 28 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     i14 = HEAP32[i13 + 20 >> 2] | 0;
     if ((i14 & 1024 | 0) == 0) {
      break;
     }
     if ((i14 & 768 | 0) == 256) {
      i15 = HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0;
     } else {
      i15 = HEAP32[i13 + 36 >> 2] | 0;
     }
     if ((HEAP32[i15 + 48 >> 2] & 31 | 0) == 3) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break L5;
     }
    }
   } while (0);
   if ((i8 | 0) == 0) {
    i9 = i7;
    i10 = 0;
    i11 = 0;
    break;
   }
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8) | 0)) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   if ((HEAP32[i8 + 92 >> 2] & 134217728 | 0) != 0) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i8) | 0) != 0) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   i13 = i8;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 168 >> 2] & 511](i8) | 0) {
    i9 = i7;
    i10 = i8;
    i11 = 1;
    break;
   }
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 164 >> 2] & 511](i8) | 0;
   if (i14 | i12 ^ 1) {
    i16 = i14;
   } else {
    i14 = i7 + 20 | 0;
    if ((HEAP32[i14 >> 2] & 768 | 0) == 256) {
     i17 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i17 = HEAP32[i7 + 36 >> 2] | 0;
    }
    i13 = (HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
    do {
     if ((HEAP8[i13] & 3) == 3) {
      i18 = (HEAP32[i13 >> 2] | 0) >>> 11 & 3;
      if ((i18 | 0) == 2) {
       i19 = 0;
       break;
      }
      i20 = (HEAP32[i17 + 44 >> 2] | 0) >>> 13 & 3;
      if (((i20 | 0) == 0 | (i20 | 0) == 3) ^ (i18 | 0) == 0) {
       i21 = 30;
      } else {
       i19 = 0;
      }
     } else {
      i21 = 30;
     }
    } while (0);
    if ((i21 | 0) == 30) {
     i19 = __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0;
    }
    i13 = i8 + 20 | 0;
    if ((HEAP32[i13 >> 2] & 768 | 0) == 256) {
     i22 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i22 = HEAP32[i8 + 36 >> 2] | 0;
    }
    i12 = (HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
    do {
     if ((HEAP8[i12] & 3) == 3) {
      i18 = (HEAP32[i12 >> 2] | 0) >>> 11 & 3;
      if ((i18 | 0) != 2) {
       i20 = (HEAP32[i22 + 44 >> 2] | 0) >>> 13 & 3;
       if (((i20 | 0) == 0 | (i20 | 0) == 3) ^ (i18 | 0) == 0) {
        i21 = 38;
        break;
       }
      }
      if (i19) {
       i9 = i7;
       i10 = i8;
       i11 = 1;
       break L5;
      }
     } else {
      i21 = 38;
     }
    } while (0);
    if ((i21 | 0) == 38) {
     if (i19 ^ (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8) | 0)) {
      i9 = i7;
      i10 = i8;
      i11 = 1;
      break;
     }
    }
    if ((HEAP32[i14 >> 2] & 768 | 0) == 256) {
     i23 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i23 = HEAP32[i7 + 36 >> 2] | 0;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
     i24 = 0;
    } else {
     i24 = __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0;
    }
    if ((HEAP32[i13 >> 2] & 768 | 0) == 256) {
     i25 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i25 = HEAP32[i8 + 36 >> 2] | 0;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i25 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
     i26 = 0;
    } else {
     i26 = __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8) | 0;
    }
    i16 = i24 ^ i26;
   }
   if (i16 | (i7 | 0) == 0) {
    i9 = i7;
    i10 = i8;
    i11 = i16;
    break;
   }
   i12 = i7 + 20 | 0;
   i18 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i18 & 1 | 0) == 0) {
     HEAP32[i12 >> 2] = i18 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 1, 0);
     if ((HEAP32[i12 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i7);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
   i18 = i8;
   i13 = i7;
   i14 = HEAP32[i12 >> 2] | 0;
   i20 = (i14 & 2097152 | 0) != 0;
   i27 = i8 + 20 | 0;
   i28 = HEAP32[i27 >> 2] | 0;
   if (!(i20 ^ (i28 & 2097152 | 0) != 0)) {
    if ((i28 & 32768 | 0) == 0) {
     i29 = (i14 & 32768 | 0) != 0;
    } else {
     i29 = 1;
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 1080 >> 2] & 63](i18, i13, i29);
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 1016 >> 2] & 63](i18);
    __ZN7WebCore12RenderObject7destroyEv(i8);
    i9 = i7;
    i10 = 0;
    i11 = 0;
    break;
   }
   i14 = i20 ? i13 : i18;
   i28 = i20 ? i18 : i13;
   i18 = i14 | 0;
   i20 = HEAP32[i14 + 20 >> 2] & 32768;
   __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, HEAP32[i1 + 36 >> 2] | 0, 1);
   __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i14 | 0, i4);
   __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1 | 0, i18, i20 >>> 15 ^ 1);
   if ((i7 | 0) == (i18 | 0)) {
    i30 = HEAP32[i28 + 28 >> 2] | 0;
   } else {
    i30 = 0;
   }
   if ((i20 | 0) == 0) {
    i31 = (HEAP32[i28 + 20 >> 2] | 0) >>> 15 & 1 ^ 1;
   } else {
    i31 = 0;
   }
   __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i28 | 0, i18, i30, i31);
   i18 = HEAP32[i27 >> 2] | 0;
   do {
    if ((i18 & 1 | 0) == 0) {
     HEAP32[i27 >> 2] = i18 | 1;
     __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i8, 1, 0);
     if ((HEAP32[i27 >> 2] & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i8);
    }
   } while (0);
   __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i8, 1, 1);
   i27 = (i14 | 0) == (i13 | 0);
   i9 = i27 ? 0 : i7;
   i10 = i27 ? i8 : 0;
   i11 = 0;
  } else {
   i9 = i7;
   i10 = i8;
   i11 = 1;
  }
 } while (0);
 i8 = i1 + 92 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 & -1073741824 | 0) != -1073741824) {
  HEAP32[i8 >> 2] = i7 & 1073741823;
 }
 __ZN7WebCore13RenderElement11removeChildERNS_12RenderObjectE(i1 | 0, i2);
 i7 = (i9 | 0) != 0;
 i31 = i7 ? i9 : i10;
 do {
  if (i11 | (i31 | 0) == 0) {
   i21 = 73;
  } else {
   if ((HEAP32[i31 + 12 >> 2] | 0) != 0) {
    i21 = 73;
    break;
   }
   if ((HEAP32[i31 + 16 >> 2] | 0) != 0) {
    i21 = 73;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1144 >> 2] & 511](i1) | 0)) {
    i21 = 73;
    break;
   }
   __ZN7WebCore11RenderBlock25collapseAnonymousBoxChildEPS0_S1_(i1, i31);
  }
 } while (0);
 do {
  if ((i21 | 0) == 73) {
   if (i7) {
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i9) | 0)) {
     i21 = 75;
    }
   } else {
    i21 = 75;
   }
   if ((i21 | 0) == 75) {
    if ((i10 | 0) == 0) {
     break;
    }
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i10) | 0)) {
     break;
    }
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1144 >> 2] & 511](i1) | 0)) {
    break;
   }
   if (i7) {
    i31 = __ZNK7WebCore12RenderObject16isAnonymousBlockEv(i9) | 0;
    i32 = i31 ? i9 : i10;
   } else {
    i32 = i10;
   }
   i31 = i32;
   i11 = HEAP32[i32 + 12 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i30 = HEAP32[i32 + 16 >> 2] | 0;
    if ((i30 | 0) == 0) {
     break;
    } else {
     i33 = i30;
     i21 = 89;
    }
   } else {
    i30 = HEAP32[i11 + 20 >> 2] | 0;
    if ((i30 & 768 | 0) == 256) {
     i34 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i34 = HEAP32[i11 + 36 >> 2] | 0;
    }
    if ((HEAP32[i34 + 52 >> 2] & 4032 | 0) == 0) {
     break;
    }
    if ((i30 & 64 | 0) == 0) {
     break;
    }
    if ((HEAP32[i11 + 12 >> 2] | 0) != 0) {
     break;
    }
    i11 = HEAP32[i32 + 16 >> 2] | 0;
    if ((i11 | 0) != 0) {
     i33 = i11;
     i21 = 89;
    }
   }
   if ((i21 | 0) == 89) {
    i11 = HEAP32[i33 + 20 >> 2] | 0;
    if ((i11 & 768 | 0) == 256) {
     i35 = HEAP32[(HEAP32[i33 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i35 = HEAP32[i33 + 36 >> 2] | 0;
    }
    if ((HEAP32[i35 + 52 >> 2] & 4032 | 0) == 0) {
     break;
    }
    if ((i11 & 64 | 0) == 0) {
     break;
    }
    if ((HEAP32[i33 + 16 >> 2] | 0) != 0) {
     break;
    }
   }
   __ZN7WebCore11RenderBlock25collapseAnonymousBoxChildEPS0_S1_(i1, i31);
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1016 >> 2] & 63](i1);
   }
   if ((HEAP32[i8 >> 2] & 134217728 | 0) != 0) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i5) | 0)) {
    break;
   }
   i33 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i33) | 0) == 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 511](i2) | 0) {
    break;
   }
   i35 = __ZNK7WebCore12RenderObject15containingBlockEv(i5) | 0;
   L138 : do {
    if ((i35 | 0) == 0) {
     i36 = 0;
    } else {
     i21 = i35;
     while (1) {
      i32 = i21 | 0;
      if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i32) | 0)) {
       i36 = i21;
       break L138;
      }
      i34 = __ZNK7WebCore12RenderObject15containingBlockEv(i32) | 0;
      if ((i34 | 0) == 0) {
       i36 = 0;
       break;
      } else {
       i21 = i34;
      }
     }
    }
   } while (0);
   L143 : do {
    if ((i1 | 0) != 0) {
     i35 = i36 | 0;
     i13 = i5;
     while (1) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 432 >> 2] & 511](i13) | 0) == (i33 | 0)) {
       break;
      }
      i14 = __ZNK7WebCore12RenderObject18previousInPreOrderEPKS0_(i13, i35) | 0;
      if ((i14 | 0) == 0) {
       break L143;
      } else {
       i13 = i14;
      }
     }
     i35 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i33) | 0;
     if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
      break;
     }
     if ((HEAP32[i13 + 24 >> 2] & 4 | 0) != 0) {
      __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i13, i35);
      break;
     }
     if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
      break;
     }
     __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i13, i35);
    }
   } while (0);
   __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i33, 0);
   __ZN7WebCore12RenderObject7destroyEv(i5);
  }
 } while (0);
 HEAP8[H_BASE + 1496 | 0] = i6;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock16paintColumnRulesERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, d43 = +0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
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
 i29 = i28;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = i34;
 i36 = i2 | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(HEAP32[i36 >> 2] | 0) | 0) {
  STACKTOP = i4;
  return;
 }
 i2 = i1 + 36 | 0;
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i23, HEAP32[i2 >> 2] | 0, 229);
 i37 = HEAP32[i2 >> 2] | 0;
 i38 = HEAP32[(HEAP32[i37 + 20 >> 2] | 0) + 68 >> 2] | 0;
 i39 = HEAP32[i38 + 20 >> 2] | 0;
 if ((i39 & 1 | 0) == 0) {
  i40 = 1;
 } else {
  i40 = (HEAP32[i38 + 16 >> 2] | 0) >>> 0 > 16777215 >>> 0;
 }
 i41 = i39 >>> 27 & 15;
 if ((i39 & 1879048192) >>> 0 < 268435456 >>> 0) {
  i42 = 0;
 } else {
  i42 = i39 >>> 1 & 65535;
 }
 if ((HEAP8[i38 + 32 | 0] & 4) == 0) {
  d43 = +HEAPF32[i38 + 12 >> 2];
 } else {
  d43 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i37) | 0) + 12 >> 2] + +.5;
 }
 i37 = ~~d43;
 if (!(i41 >>> 0 > 1 >>> 0 & i40)) {
  STACKTOP = i4;
  return;
 }
 i40 = i1 + 20 | 0;
 L17 : do {
  if ((HEAP32[i40 >> 2] & 4194304 | 0) == 0) {
   i44 = 0;
  } else {
   i38 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i39 = i1 | 0;
   i45 = HEAP32[i38 + 8 >> 2] | 0;
   i46 = HEAP32[i38 >> 2] | 0;
   i38 = i1;
   i47 = i38 + ~(i38 << 15) | 0;
   i38 = (i47 >>> 10 ^ i47) * 9 & -1;
   i47 = i38 >>> 6 ^ i38;
   i38 = i47 + ~(i47 << 11) | 0;
   i47 = i38 >>> 16 ^ i38;
   if ((i46 | 0) == 0) {
    i44 = 0;
    break;
   }
   i38 = i45 & i47;
   i48 = i46 + (i38 << 3) | 0;
   i49 = HEAP32[i48 >> 2] | 0;
   if ((i49 | 0) == (i39 | 0)) {
    i50 = i48;
   } else {
    i48 = (i47 >>> 23) + ~i47 | 0;
    i47 = i48 << 12 ^ i48;
    i48 = i47 >>> 7 ^ i47;
    i47 = i48 << 2 ^ i48;
    i48 = i47 >>> 20 ^ i47 | 1;
    i47 = 0;
    i51 = i38;
    i38 = i49;
    while (1) {
     if ((i38 | 0) == 0) {
      i44 = 0;
      break L17;
     }
     i49 = (i47 | 0) == 0 ? i48 : i47;
     i52 = i49 + i51 & i45;
     i53 = i46 + (i52 << 3) | 0;
     i54 = HEAP32[i53 >> 2] | 0;
     if ((i54 | 0) == (i39 | 0)) {
      i50 = i53;
      break;
     } else {
      i47 = i49;
      i51 = i52;
      i38 = i54;
     }
    }
   }
   if ((i50 | 0) == 0) {
    i44 = 0;
    break;
   }
   i44 = HEAP32[i50 + 4 >> 2] | 0;
  }
 } while (0);
 i50 = HEAP32[i44 + 16 >> 2] | 0;
 i38 = __ZN7WebCore20RenderBoxModelObject20shouldAntialiasLinesEPNS_15GraphicsContextE(HEAP32[i36 >> 2] | 0) | 0;
 i51 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i44 + 8 >> 2] | 0) != 0) {
  i2 = (HEAP32[i51 + 44 >> 2] | 0) >>> 13 & 3;
  i47 = i44 + 12 | 0;
  i39 = HEAP8[i47] & 1;
  i46 = (((i2 | 0) == 1 | (i2 | 0) == 3) & 1 ^ 1 | 0) != (i39 & 255 | 0);
  i2 = i1 | 0;
  if ((HEAP32[i40 >> 2] & 8192 | 0) == 0) {
   i45 = i1 | 0;
   if (i39 << 24 >> 24 == 0) {
    i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i45) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i13, i45);
    i55 = (HEAP32[i13 >> 2] | 0) + i39 | 0;
   } else {
    i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 756 >> 2] & 511](i45) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 724 >> 2] & 127](i14, i45);
    i55 = (HEAP32[i14 >> 2] | 0) + i39 | 0;
   }
   i56 = ((i37 | 0) / 2 & -1) - (i37 + (i42 >>> 1)) + i55 | 0;
  } else {
   i55 = i1 | 0;
   i39 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 511](i55) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i30, i55);
   i56 = (HEAP32[i30 >> 2] | 0) + i39 | 0;
  }
  i39 = HEAP32[i40 >> 2] | 0;
  if ((i39 & 8192 | 0) == 0) {
   i57 = i42;
   i58 = i39;
  } else {
   __ZNK7WebCore9RenderBox11clientWidthEv(i15, i1 | 0);
   i39 = i1 | 0;
   i30 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 712 >> 2] & 127](i16, i39);
   i55 = (HEAP32[i15 >> 2] | 0) - (HEAP32[i16 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 716 >> 2] & 127](i17, i39);
   i57 = i55 - (HEAP32[i17 >> 2] | 0) | 0;
   i58 = HEAP32[i40 >> 2] | 0;
  }
  if ((i58 & 8192 | 0) == 0) {
   i58 = i1 | 0;
   i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 760 >> 2] & 511](i58) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 127](i31, i58);
   i59 = (HEAP32[i31 >> 2] | 0) + i17 | 0;
  } else {
   i17 = i1 | 0;
   if ((HEAP8[i47] & 1) == 0) {
    i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i17) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 127](i18, i17);
    i60 = (HEAP32[i18 >> 2] | 0) + i47 | 0;
   } else {
    i47 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 756 >> 2] & 511](i17) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 724 >> 2] & 127](i19, i17);
    i60 = (HEAP32[i19 >> 2] | 0) + i47 | 0;
   }
   i59 = ((i37 | 0) / 2 & -1) - (i37 + (i42 >>> 1)) + i60 | 0;
  }
  if ((HEAP32[i40 >> 2] & 8192 | 0) == 0) {
   __ZNK7WebCore9RenderBox12clientHeightEv(i20, i1 | 0);
   i60 = i1 | 0;
   i47 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 704 >> 2] & 127](i21, i60);
   i19 = (HEAP32[i20 >> 2] | 0) - (HEAP32[i21 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i47 >> 2] | 0) + 708 >> 2] & 127](i22, i60);
   i61 = i19 - (HEAP32[i22 >> 2] | 0) | 0;
  } else {
   i61 = i42;
  }
  i22 = i32 | 0;
  HEAP32[i22 >> 2] = i56;
  i19 = i32 + 4 | 0;
  HEAP32[i19 >> 2] = i59;
  HEAP32[i32 + 8 >> 2] = i57;
  HEAP32[i32 + 12 >> 2] = i61;
  i60 = HEAP32[i40 >> 2] | 0;
  do {
   if (i46) {
    i62 = i56;
    i63 = i59;
   } else {
    if ((i60 & 8192 | 0) == 0) {
     i47 = (HEAP32[i1 + 52 >> 2] | 0) - i56 - i57 | 0;
     HEAP32[i22 >> 2] = i47;
     i62 = i47;
     i63 = i59;
     break;
    } else {
     i47 = (HEAP32[i1 + 56 >> 2] | 0) - i61 - i59 | 0;
     HEAP32[i19 >> 2] = i47;
     i62 = i56;
     i63 = i47;
     break;
    }
   }
  } while (0);
  i56 = HEAP32[i3 + 4 >> 2] | 0;
  i59 = i62 + (HEAP32[i3 >> 2] | 0) | 0;
  HEAP32[i22 >> 2] = i59;
  i62 = i63 + i56 | 0;
  HEAP32[i19 >> 2] = i62;
  i56 = (i60 & 8192 | 0) == 0;
  if (i56) {
   i64 = i46 ? 3 : 1;
  } else {
   i64 = i46 ? 0 : 2;
  }
  i60 = (HEAP32[i44 + 20 >> 2] | 0) + i37 | 0;
  i63 = i46 ? i60 : -i60 | 0;
  i60 = i56 ? 0 : i63;
  i46 = i56 ? i63 : 0;
  if (i50 >>> 0 <= 1 >>> 0) {
   STACKTOP = i4;
   return;
  }
  i63 = i33 | 0;
  i56 = i33 + 4 | 0;
  i61 = i33 + 8 | 0;
  i57 = i33 + 12 | 0;
  i47 = 2;
  i21 = i59;
  i59 = i62;
  while (1) {
   HEAP32[i22 >> 2] = i21 + i46;
   HEAP32[i19 >> 2] = i59 + i60;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i33, i32);
   i62 = HEAP32[i36 >> 2] | 0;
   i20 = HEAP32[i63 >> 2] | 0;
   i17 = HEAP32[i56 >> 2] | 0;
   i18 = (HEAP32[i61 >> 2] | 0) + i20 | 0;
   i31 = (HEAP32[i57 >> 2] | 0) + i17 | 0;
   i58 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i34 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i34 + 4 >> 2] = i58;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i2, i62, i20, i17, i18, i31, i64, i35, i41, 0, 0, i38);
   if (i47 >>> 0 >= i50 >>> 0) {
    break;
   }
   i47 = i47 + 1 | 0;
   i21 = HEAP32[i22 >> 2] | 0;
   i59 = HEAP32[i19 >> 2] | 0;
  }
  STACKTOP = i4;
  return;
 }
 i19 = (HEAP32[i51 + 40 >> 2] & 1073741824 | 0) != 0 ^ (HEAP8[i44 + 12 | 0] & 1) != 0;
 if (i19) {
  HEAP32[i24 >> 2] = 0;
 } else {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i24, i1 | 0);
 }
 i51 = i1 | 0;
 i59 = i1;
 i22 = HEAP32[i59 >> 2] | 0;
 if ((HEAP32[i40 >> 2] & 8192 | 0) == 0) {
  i21 = FUNCTION_TABLE_ii[HEAP32[i22 + 736 >> 2] & 511](i51) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i12, i51);
  i65 = (HEAP32[i12 >> 2] | 0) + i21 | 0;
 } else {
  i21 = FUNCTION_TABLE_ii[HEAP32[i22 + 744 >> 2] & 511](i51) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i11, i51);
  i65 = (HEAP32[i11 >> 2] | 0) + i21 | 0;
 }
 if (i19) {
  HEAP32[i25 >> 2] = 0;
 } else {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i25, i1 | 0);
 }
 i21 = HEAP32[i44 >> 2] | 0;
 i44 = i1 | 0;
 if ((HEAP32[i40 >> 2] & 8192 | 0) == 0) {
  i66 = i19 ? 0 : 2;
 } else {
  i66 = i19 ? 3 : 1;
 }
 if ((i50 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = ((i37 | 0) / 2 & -1) + i21 | 0;
 i22 = i25 | 0;
 i25 = i21 + i37 | 0;
 i37 = i24 | 0;
 i24 = i50 - 1 | 0;
 i21 = i3 | 0;
 i12 = i1;
 i47 = i26 | 0;
 i35 = i1 | 0;
 i1 = i5 | 0;
 i64 = i6 | 0;
 i2 = i7 | 0;
 i34 = i3 + 4 | 0;
 i3 = i65 - (i42 >>> 1) | 0;
 i65 = i8 | 0;
 i57 = i9 | 0;
 i61 = i10 | 0;
 i56 = i27 | 0;
 i63 = 0;
 i32 = HEAP32[i22 >> 2] | 0;
 while (1) {
  if (i19) {
   i67 = i11 + i32 | 0;
   i68 = i25 + (HEAP32[i37 >> 2] | 0) | 0;
  } else {
   i67 = i32 - i11 | 0;
   i68 = (HEAP32[i37 >> 2] | 0) - i25 | 0;
  }
  HEAP32[i37 >> 2] = i68;
  if (i63 >>> 0 < i24 >>> 0) {
   i33 = HEAP32[i40 >> 2] | 0;
   i60 = HEAP32[i21 >> 2] | 0;
   if ((i33 & 8192 | 0) == 0) {
    i46 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 744 >> 2] & 511](i51) | 0) + i60 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i26, i51);
    i69 = i46 + (HEAP32[i47 >> 2] | 0) | 0;
    i70 = HEAP32[i40 >> 2] | 0;
   } else {
    i69 = i3 + i60 + i67 | 0;
    i70 = i33;
   }
   if ((i70 & 8192 | 0) == 0) {
    __ZNK7WebCore9RenderBox11clientWidthEv(i5, i35);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i6, i51);
    i33 = (HEAP32[i1 >> 2] | 0) - (HEAP32[i64 >> 2] | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 716 >> 2] & 127](i7, i51);
    i71 = i33 - (HEAP32[i2 >> 2] | 0) | 0;
    i72 = HEAP32[i40 >> 2] | 0;
   } else {
    i71 = i42;
    i72 = i70;
   }
   i33 = HEAP32[i34 >> 2] | 0;
   if ((i72 & 8192 | 0) == 0) {
    i73 = i3 + i33 + i67 | 0;
    i74 = i72;
   } else {
    i60 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 736 >> 2] & 511](i51) | 0) + i33 | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i27, i51);
    i73 = i60 + (HEAP32[i56 >> 2] | 0) | 0;
    i74 = HEAP32[i40 >> 2] | 0;
   }
   if ((i74 & 8192 | 0) == 0) {
    i75 = i42;
   } else {
    __ZNK7WebCore9RenderBox12clientHeightEv(i8, i35);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 127](i9, i51);
    i60 = (HEAP32[i65 >> 2] | 0) - (HEAP32[i57 >> 2] | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 708 >> 2] & 127](i10, i51);
    i75 = i60 - (HEAP32[i61 >> 2] | 0) | 0;
   }
   i60 = HEAP32[i36 >> 2] | 0;
   i33 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i28 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i28 + 4 >> 2] = i33;
   __ZN7WebCore12RenderObject18drawLineForBoxSideEPNS_15GraphicsContextEiiiiNS_7BoxSideENS_5ColorENS_12EBorderStyleEiib(i44, i60, i69, i73, i71 + i69 | 0, i75 + i73 | 0, i66, i29, i41, 0, 0, i38);
  }
  i60 = i63 + 1 | 0;
  if (i60 >>> 0 < i50 >>> 0) {
   i63 = i60;
   i32 = i68;
  } else {
   break;
  }
 }
 HEAP32[i22 >> 2] = i68;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock34computeBlockPreferredLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, d94 = +0, d95 = +0, i96 = 0, i97 = 0, d98 = +0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, i115 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = HEAP32[i1 + 36 >> 2] | 0;
 i26 = i25 + 44 | 0;
 i27 = (HEAP32[i26 >> 2] & 7 | 0) == 4;
 i28 = HEAP32[i1 + 28 >> 2] | 0;
 i29 = __ZNK7WebCore12RenderObject15containingBlockEv(i1 | 0) | 0;
 if ((i28 | 0) == 0) {
  i30 = 0;
  i31 = 0;
  i32 = i2 | 0;
  i33 = i3 | 0;
  HEAP32[i22 >> 2] = 0;
  i34 = HEAP32[i32 >> 2] | 0;
  i35 = (i34 | 0) > 0;
  i36 = i22;
  i37 = i35 ? i2 : i36;
  i38 = i37 | 0;
  i39 = HEAP32[i38 >> 2] | 0;
  HEAP32[i32 >> 2] = i39;
  HEAP32[i23 >> 2] = 0;
  i40 = HEAP32[i33 >> 2] | 0;
  i41 = (i40 | 0) > 0;
  i42 = i23;
  i43 = i41 ? i3 : i42;
  i44 = i43 | 0;
  i45 = HEAP32[i44 >> 2] | 0;
  HEAP32[i33 >> 2] = i45;
  i46 = i31 + i30 | 0;
  HEAP32[i24 >> 2] = i46;
  i47 = (i46 | 0) < (i45 | 0);
  i48 = i24;
  i49 = i47 ? i3 : i48;
  i50 = i49 | 0;
  i51 = HEAP32[i50 >> 2] | 0;
  HEAP32[i33 >> 2] = i51;
  STACKTOP = i4;
  return;
 }
 i52 = i25 + 40 | 0;
 i25 = i9 + 5 | 0;
 i53 = i9 + 6 | 0;
 i54 = i8;
 i55 = i8;
 i56 = i11 + 5 | 0;
 i57 = i11 + 6 | 0;
 i58 = i10;
 i59 = i10;
 i60 = i17 | 0;
 i61 = i18 | 0;
 i62 = i2 | 0;
 i63 = i19;
 i64 = i3 | 0;
 i65 = i21;
 i66 = (i29 | 0) == 0;
 i67 = i13;
 i68 = i12;
 i69 = i20;
 i70 = i29 + 36 | 0;
 i29 = i1 + 20 | 0;
 i1 = i14;
 i71 = i6 | 0;
 i72 = i5 | 0;
 i73 = i15 | 0;
 i74 = i16 | 0;
 i75 = i14 | 0;
 i76 = i7;
 i77 = i28;
 i28 = 0;
 i78 = 0;
 while (1) {
  i79 = i77 + 20 | 0;
  i80 = HEAP32[i79 >> 2] | 0;
  do {
   if ((i80 & 25165824 | 0) == 16777216) {
    i81 = HEAP32[i77 + 16 >> 2] | 0;
    i82 = i28;
    i83 = i78;
   } else {
    if ((i80 & 768 | 0) == 256) {
     i84 = HEAP32[(HEAP32[i77 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i84 = HEAP32[i77 + 36 >> 2] | 0;
    }
    do {
     if ((i80 & 64 | 0) == 0) {
      if ((i80 & 512 | 0) == 0) {
       i85 = i28;
       i86 = i78;
       break;
      }
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 972 >> 2] & 511](i77) | 0) {
       i87 = 13;
      } else {
       i85 = i28;
       i86 = i78;
      }
     } else {
      i87 = 13;
     }
    } while (0);
    do {
     if ((i87 | 0) == 13) {
      i87 = 0;
      i88 = i78 + i28 | 0;
      HEAP32[i7 >> 2] = i88;
      i89 = i84 + 48 | 0;
      i90 = HEAP32[i89 >> 2] | 0;
      if ((i90 & 1048576 | 0) == 0) {
       i91 = i28;
       i92 = i90;
      } else {
       HEAP32[i64 >> 2] = HEAP32[((i88 | 0) < (HEAP32[i64 >> 2] | 0) ? i3 : i76) >> 2];
       i91 = 0;
       i92 = HEAP32[i89 >> 2] | 0;
      }
      if ((i92 & 2097152 | 0) == 0) {
       i85 = i91;
       i86 = i78;
       break;
      }
      HEAP32[i64 >> 2] = HEAP32[((i88 | 0) < (HEAP32[i64 >> 2] | 0) ? i3 : i76) >> 2];
      i85 = i91;
      i86 = 0;
     }
    } while (0);
    i88 = i84 + 16 | 0;
    i89 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[i88 >> 2] | 0) + 36 | 0, (HEAP32[i26 >> 2] | 0) >>> 13 & 3, (HEAP32[i52 >> 2] | 0) >>> 30 & 1) | 0;
    i90 = HEAP32[i89 >> 2] | 0;
    i93 = HEAP32[i89 + 4 >> 2] | 0;
    HEAP32[i8 >> 2] = i90;
    HEAP32[i8 + 4 >> 2] = i93;
    if ((i90 & 0 | 0) == 0 & (i93 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i9);
    }
    i93 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[i88 >> 2] | 0) + 36 | 0, (HEAP32[i26 >> 2] | 0) >>> 13 & 3, (HEAP32[i52 >> 2] | 0) >>> 30 & 1) | 0;
    i88 = HEAP32[i93 >> 2] | 0;
    i90 = HEAP32[i93 + 4 >> 2] | 0;
    HEAP32[i10 >> 2] = i88;
    HEAP32[i10 + 4 >> 2] = i90;
    if ((i88 & 0 | 0) == 0 & (i90 & 65280 | 0) == 2560) {
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i11);
    }
    HEAP32[i12 >> 2] = 0;
    HEAP32[i13 >> 2] = 0;
    if ((HEAP8[i25] | 0) == 3) {
     if ((HEAP8[i53] & 1) == 0) {
      d94 = +(HEAP32[i54 >> 2] | 0);
     } else {
      d94 = +HEAPF32[i55 >> 2];
     }
     d95 = d94 + +0;
     do {
      if (d95 < +2147483647) {
       if (d95 <= +-2147483648) {
        i96 = -2147483648;
        break;
       }
       i96 = ~~d95;
      } else {
       i96 = 2147483647;
      }
     } while (0);
     HEAP32[i12 >> 2] = i96;
     i97 = i96;
    } else {
     i97 = 0;
    }
    if ((HEAP8[i56] | 0) == 3) {
     if ((HEAP8[i57] & 1) == 0) {
      d98 = +(HEAP32[i58 >> 2] | 0);
     } else {
      d98 = +HEAPF32[i59 >> 2];
     }
     d95 = d98 + +0;
     do {
      if (d95 < +2147483647) {
       if (d95 <= +-2147483648) {
        i99 = -2147483648;
        break;
       }
       i99 = ~~d95;
      } else {
       i99 = 2147483647;
      }
     } while (0);
     HEAP32[i13 >> 2] = i99;
     i100 = i99;
    } else {
     i100 = 0;
    }
    i90 = i100 + i97 | 0;
    i88 = HEAP32[i79 >> 2] | 0;
    do {
     if ((i88 & 512 | 0) == 0) {
      i87 = 40;
     } else {
      if (!((i88 & 8192 | 0) != 0 ^ (HEAP32[i29 >> 2] & 8192 | 0) != 0)) {
       i87 = 40;
       break;
      }
      _memset(i1 | 0, 0, 24) | 0;
      i93 = HEAP32[i77 >> 2] | 0;
      i89 = HEAP32[i93 + 884 >> 2] | 0;
      i101 = i77;
      i102 = FUNCTION_TABLE_ii[HEAP32[i93 + 752 >> 2] & 511](i101) | 0;
      i93 = i77;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i93 >> 2] | 0) + 720 >> 2] & 127](i6, i101);
      i103 = (HEAP32[i71 >> 2] | 0) + i102 | 0;
      i102 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 756 >> 2] & 511](i101) | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i93 >> 2] | 0) + 724 >> 2] & 127](i5, i101);
      HEAP32[i73 >> 2] = i103 + i102 + (HEAP32[i72 >> 2] | 0);
      HEAP32[i74 >> 2] = 0;
      FUNCTION_TABLE_viiii[i89 & 31](i77, i15, i16, i14);
      i89 = HEAP32[i75 >> 2] | 0;
      i104 = i89;
      i105 = i89;
     }
    } while (0);
    if ((i87 | 0) == 40) {
     i87 = 0;
     i88 = i77;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i88 >> 2] | 0) + 484 >> 2] & 127](i17, i77);
     i89 = HEAP32[i60 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i88 >> 2] | 0) + 488 >> 2] & 127](i18, i77);
     i104 = HEAP32[i61 >> 2] | 0;
     i105 = i89;
    }
    i89 = i105 + i90 | 0;
    HEAP32[i19 >> 2] = i89;
    HEAP32[i62 >> 2] = HEAP32[((i89 | 0) < (HEAP32[i62 >> 2] | 0) ? i2 : i63) >> 2];
    do {
     if (i27) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 184 >> 2] & 511](i77) | 0) {
       break;
      }
      HEAP32[i64 >> 2] = HEAP32[((i89 | 0) < (HEAP32[i64 >> 2] | 0) ? i3 : i63) >> 2];
     }
    } while (0);
    i89 = i104 + i90 | 0;
    HEAP32[i19 >> 2] = i89;
    i88 = HEAP32[i79 >> 2] | 0;
    if ((i88 & 64 | 0) == 0) {
     do {
      if ((i88 & 512 | 0) == 0) {
       i87 = 56;
      } else {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i77 >> 2] | 0) + 972 >> 2] & 511](i77) | 0)) {
        i87 = 56;
        break;
       }
       if (i66) {
        i106 = i52;
       } else {
        i106 = (HEAP32[i70 >> 2] | 0) + 40 | 0;
       }
       i102 = (HEAP32[i106 >> 2] & 1073741824 | 0) != 0;
       i103 = HEAP32[(i102 ? i68 : i67) >> 2] | 0;
       i101 = HEAP32[(i102 ? i67 : i68) >> 2] | 0;
       if ((i103 | 0) > 0) {
        i107 = (i85 | 0) < (i103 | 0) ? i103 : i85;
       } else {
        i107 = i85 + i103 | 0;
       }
       if ((i101 | 0) > 0) {
        i108 = (i86 | 0) < (i101 | 0) ? i101 : i86;
       } else {
        i108 = i86 + i101 | 0;
       }
       i101 = i107 + i104 + i108 | 0;
       HEAP32[i19 >> 2] = i101;
       i103 = i86 + i85 | 0;
       HEAP32[i20 >> 2] = i103;
       i102 = HEAP32[((i101 | 0) < (i103 | 0) ? i69 : i63) >> 2] | 0;
       HEAP32[i19 >> 2] = i102;
       i109 = i102;
      }
     } while (0);
     if ((i87 | 0) == 56) {
      i87 = 0;
      i90 = i86 + i85 | 0;
      HEAP32[i21 >> 2] = i90;
      HEAP32[i64 >> 2] = HEAP32[((i90 | 0) < (HEAP32[i64 >> 2] | 0) ? i3 : i65) >> 2];
      i109 = i89;
     }
     i110 = 0;
     i111 = 0;
     i112 = HEAP32[i79 >> 2] | 0;
     i113 = i109;
    } else {
     i110 = i85;
     i111 = i86;
     i112 = i88;
     i113 = i89;
    }
    do {
     if ((i112 & 64 | 0) == 0) {
      HEAP32[i64 >> 2] = HEAP32[((i113 | 0) < (HEAP32[i64 >> 2] | 0) ? i3 : i63) >> 2];
      i114 = i110;
      i115 = i111;
     } else {
      if ((HEAP32[i84 + 48 >> 2] & 100663296 | 0) == 33554432) {
       i114 = i113 + i110 | 0;
       i115 = i111;
       break;
      } else {
       i114 = i110;
       i115 = i113 + i111 | 0;
       break;
      }
     }
    } while (0);
    i89 = HEAP32[i77 + 16 >> 2] | 0;
    if ((HEAP8[i56] | 0) == 10) {
     __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
    }
    if ((HEAP8[i25] | 0) != 10) {
     i81 = i89;
     i82 = i114;
     i83 = i115;
     break;
    }
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
    i81 = i89;
    i82 = i114;
    i83 = i115;
   }
  } while (0);
  if ((i81 | 0) == 0) {
   i30 = i82;
   i31 = i83;
   i32 = i62;
   i33 = i64;
   break;
  } else {
   i77 = i81;
   i28 = i82;
   i78 = i83;
  }
 }
 HEAP32[i22 >> 2] = 0;
 i34 = HEAP32[i32 >> 2] | 0;
 i35 = (i34 | 0) > 0;
 i36 = i22;
 i37 = i35 ? i2 : i36;
 i38 = i37 | 0;
 i39 = HEAP32[i38 >> 2] | 0;
 HEAP32[i32 >> 2] = i39;
 HEAP32[i23 >> 2] = 0;
 i40 = HEAP32[i33 >> 2] | 0;
 i41 = (i40 | 0) > 0;
 i42 = i23;
 i43 = i41 ? i3 : i42;
 i44 = i43 | 0;
 i45 = HEAP32[i44 >> 2] | 0;
 HEAP32[i33 >> 2] = i45;
 i46 = i31 + i30 | 0;
 HEAP32[i24 >> 2] = i46;
 i47 = (i46 | 0) < (i45 | 0);
 i48 = i24;
 i49 = i47 ? i3 : i48;
 i50 = i49 | 0;
 i51 = HEAP32[i50 >> 2] | 0;
 HEAP32[i33 >> 2] = i51;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = i23 | 0;
 i25 = i23;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i28 = i27 | 0;
 i29 = i27;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = i1 | 0;
 i33 = i1 + 44 | 0;
 i34 = (HEAP32[i33 >> 2] | 0) + (HEAP32[i5 >> 2] | 0) | 0;
 i35 = (HEAP32[i33 + 4 >> 2] | 0) + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i5 = i8;
 HEAP32[i5 >> 2] = i34;
 i33 = i9 + 4 | 0;
 HEAP32[i33 >> 2] = i35;
 i36 = i1 | 0;
 i37 = i1 + 20 | 0;
 do {
  if ((HEAP32[i37 >> 2] & 768 | 0) != 768) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i10, i32);
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i32, i10);
   i38 = HEAP32[i33 >> 2] | 0;
   i39 = i10 | 0;
   HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
   i39 = i10 + 4 | 0;
   HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + i38;
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i10) | 0) {
    break;
   } else {
    i40 = 0;
   }
   STACKTOP = i7;
   return i40 | 0;
  }
 } while (0);
 i10 = i6 >>> 0 < 2 >>> 0;
 do {
  if (i10) {
   if (!(FUNCTION_TABLE_iiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1112 >> 2] & 3](i1, i3, i4 | 0, i9) | 0)) {
    break;
   }
   i38 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i39 = (HEAP32[i4 + 4 >> 2] | 0) - i35 | 0;
   HEAP32[i11 >> 2] = (HEAP32[i4 >> 2] | 0) - i34;
   HEAP32[i11 + 4 >> 2] = i39;
   FUNCTION_TABLE_viii[i38 & 63](i1, i3, i11);
   if ((HEAP32[i37 >> 2] & 768 | 0) == 768) {
    i41 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    do {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i36) | 0) {
      i38 = i1 | 0;
      if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i38) | 0) == 0) {
       i42 = 11;
       break;
      }
      i39 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i38) | 0;
      if ((HEAP32[i39 + 20 >> 2] & 128 | 0) != 0) {
       i43 = 0;
       break;
      }
      i43 = HEAP32[i39 + 4 >> 2] | 0;
     } else {
      i42 = 11;
     }
    } while (0);
    do {
     if ((i42 | 0) == 11) {
      if ((HEAP32[i37 >> 2] & 128 | 0) != 0) {
       i43 = 0;
       break;
      }
      i43 = HEAP32[i1 + 4 >> 2] | 0;
     }
    } while (0);
    i41 = i43 | 0;
   }
   _memset(i12 | 0, 0, 16) | 0;
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i41, i2, i4, i12) | 0) {
    break;
   } else {
    i40 = 1;
   }
   STACKTOP = i7;
   return i40 | 0;
  }
 } while (0);
 if ((HEAP32[i37 >> 2] & 65536 | 0) == 0) {
  i44 = 0;
 } else {
  i44 = (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i1 | 0) | 0) ^ 1;
 }
 i12 = i1;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 944 >> 2] & 511](i32) | 0 | i44) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 944 >> 2] & 511](i32) | 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 948 >> 2] & 63](i13, i32, i9);
    if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i13) | 0) {
     i42 = 21;
     break;
    } else {
     break;
    }
   } else {
    FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 936 >> 2] & 3](i14, i32, i9, HEAP32[i4 + 64 >> 2] | 0, 1, 0);
    if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i14) | 0) {
     i42 = 21;
     break;
    } else {
     break;
    }
   }
  } else {
   i42 = 21;
  }
 } while (0);
 do {
  if ((i42 | 0) == 21) {
   i14 = HEAP32[i37 >> 2] | 0;
   if ((i14 & 65536 | 0) == 0) {
    i45 = i34;
    i46 = i35;
    i47 = i14;
   } else {
    __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i15, i32);
    i45 = i34 - (HEAP32[i15 >> 2] | 0) | 0;
    i46 = i35 - (HEAP32[i15 + 4 >> 2] | 0) | 0;
    i47 = HEAP32[i37 >> 2] | 0;
   }
   if ((i47 & 4194304 | 0) != 0) {
    HEAP32[i20 >> 2] = i45;
    HEAP32[i20 + 4 >> 2] = i46;
    if (!(__ZN7WebCore11RenderBlock14hitTestColumnsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i20, i6) | 0)) {
     break;
    }
    i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
    i9 = (HEAP32[i4 + 4 >> 2] | 0) - i35 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i4 >> 2] | 0) - i34;
    HEAP32[i22 + 4 >> 2] = i9;
    __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i21, i32, i22);
    FUNCTION_TABLE_viii[i14 & 63](i1, i3, i21);
    i40 = 1;
    STACKTOP = i7;
    return i40 | 0;
   }
   i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1100 >> 2] | 0;
   HEAP32[i16 >> 2] = i45;
   HEAP32[i16 + 4 >> 2] = i46;
   if (FUNCTION_TABLE_iiiiiii[i14 & 7](i1, i2, i3, i4, i16, i6) | 0) {
    i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
    i9 = (HEAP32[i4 + 4 >> 2] | 0) - i35 | 0;
    HEAP32[i18 >> 2] = (HEAP32[i4 >> 2] | 0) - i34;
    HEAP32[i18 + 4 >> 2] = i9;
    __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i17, i32, i18);
    FUNCTION_TABLE_viii[i14 & 63](i1, i3, i17);
    i40 = 1;
    STACKTOP = i7;
    return i40 | 0;
   }
   if ((i6 | 0) != 3) {
    break;
   }
   i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1104 >> 2] | 0;
   HEAP32[i19 >> 2] = i45;
   HEAP32[i19 + 4 >> 2] = i46;
   if (FUNCTION_TABLE_iiiiii[i14 & 7](i1, i2, i3, i4, i19) | 0) {
    i40 = 1;
   } else {
    break;
   }
   STACKTOP = i7;
   return i40 | 0;
  }
 } while (0);
 L47 : do {
  if ((HEAP32[i37 >> 2] & 768 | 0) != 768) {
   i19 = HEAP32[i1 + 36 >> 2] | 0;
   i46 = HEAP32[i19 + 16 >> 2] | 0;
   i45 = i46 + 136 | 0;
   do {
    if ((HEAP8[i46 + 141 | 0] | 0) != 10) {
     if ((HEAP8[i46 + 142 | 0] & 1) == 0) {
      if ((HEAP32[i45 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i45 >> 2] != +0) {
       break;
      }
     }
     i6 = i46 + 152 | 0;
     if ((HEAP8[i46 + 157 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i46 + 158 | 0] & 1) == 0) {
      if ((HEAP32[i6 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i6 >> 2] != +0) {
       break;
      }
     }
     i6 = i46 + 168 | 0;
     if ((HEAP8[i46 + 173 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i46 + 174 | 0] & 1) == 0) {
      if ((HEAP32[i6 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i6 >> 2] != +0) {
       break;
      }
     }
     i6 = i46 + 184 | 0;
     if ((HEAP8[i46 + 189 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i46 + 190 | 0] & 1) == 0) {
      if ((HEAP32[i6 >> 2] | 0) == 0) {
       break L47;
      } else {
       break;
      }
     } else {
      if (+HEAPF32[i6 >> 2] != +0) {
       break;
      } else {
       break L47;
      }
     }
    }
   } while (0);
   i46 = i1 + 52 | 0;
   i45 = HEAP32[i46 >> 2] | 0;
   i6 = HEAP32[i46 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   HEAP32[i24 + 4 >> 2] = 0;
   i46 = i23 + 8 | 0;
   HEAP32[i46 >> 2] = i45;
   HEAP32[i46 + 4 >> 2] = i6;
   i6 = HEAP32[i33 >> 2] | 0;
   HEAP32[i23 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i25 + 4 >> 2] = i6;
   __ZNK7WebCore11RenderStyle19getRoundedBorderForERKNS_10LayoutRectEPNS_10RenderViewEbb(i26, i19, i25, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 1, 1);
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_11RoundedRectE(i4, i26) | 0) {
    break;
   } else {
    i40 = 0;
   }
   STACKTOP = i7;
   return i40 | 0;
  }
 } while (0);
 do {
  if (i10) {
   i26 = i1 + 52 | 0;
   i25 = HEAP32[i26 >> 2] | 0;
   i5 = HEAP32[i26 + 4 >> 2] | 0;
   i26 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i28 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i28 + 4 >> 2] = i26;
   i26 = i27 + 8 | 0;
   HEAP32[i26 >> 2] = i25;
   HEAP32[i26 + 4 >> 2] = i5;
   i5 = HEAP32[i1 + 36 >> 2] | 0;
   if ((HEAP32[i5 + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   if ((HEAP32[i5 + 44 >> 2] & 1920 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i29) | 0)) {
    break;
   }
   i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + 456 >> 2] | 0;
   i26 = (HEAP32[i4 + 4 >> 2] | 0) - i35 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i4 >> 2] | 0) - i34;
   HEAP32[i31 + 4 >> 2] = i26;
   __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i30, i32, i31);
   FUNCTION_TABLE_viii[i5 & 63](i1, i3, i30);
   if ((HEAP32[i37 >> 2] & 768 | 0) == 768) {
    i48 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   } else {
    do {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i36) | 0) {
      i5 = i1 | 0;
      if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0) == 0) {
       i42 = 58;
       break;
      }
      i26 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0;
      if ((HEAP32[i26 + 20 >> 2] & 128 | 0) != 0) {
       i49 = 0;
       break;
      }
      i49 = HEAP32[i26 + 4 >> 2] | 0;
     } else {
      i42 = 58;
     }
    } while (0);
    do {
     if ((i42 | 0) == 58) {
      if ((HEAP32[i37 >> 2] & 128 | 0) != 0) {
       i49 = 0;
       break;
      }
      i49 = HEAP32[i1 + 4 >> 2] | 0;
     }
    } while (0);
    i48 = i49 | 0;
   }
   if (__ZN7WebCore13HitTestResult28addNodeToRectBasedTestResultEPNS_4NodeERKNS_14HitTestRequestERKNS_15HitTestLocationERKNS_10LayoutRectE(i3, i48, i2, i4, i29) | 0) {
    break;
   } else {
    i40 = 1;
   }
   STACKTOP = i7;
   return i40 | 0;
  }
 } while (0);
 i40 = 0;
 STACKTOP = i7;
 return i40 | 0;
}
function __ZN7WebCore11RenderBlock13selectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i12 = i11 | 0;
 i13 = i11 + 16 | 0;
 i14 = i11 + 32 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
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
 if ((i10 | 0) != 0) {
  i27 = i14 | 0;
  i28 = HEAP32[i5 + 4 >> 2] | 0;
  i29 = HEAP32[i2 + 52 >> 2] | 0;
  i30 = HEAP32[i2 + 56 >> 2] | 0;
  i31 = i14;
  HEAP32[i31 >> 2] = HEAP32[i5 >> 2];
  i32 = i15 + 4 | 0;
  HEAP32[i32 >> 2] = i28;
  HEAP32[i14 + 8 >> 2] = i29;
  HEAP32[i15 + 12 >> 2] = i30;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i3 | 0, i15);
  i15 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + i15;
  i15 = HEAP32[i27 >> 2] | 0;
  i32 = HEAP32[i27 + 4 >> 2] | 0;
  i27 = HEAP32[H_BASE + 1544 >> 2] | 0;
  L3 : do {
   if ((i27 | 0) == 0) {
    i33 = 9;
   } else {
    i31 = HEAP32[i27 + 8 >> 2] | 0;
    i30 = HEAP32[i27 >> 2] | 0;
    i29 = i2;
    i14 = i29 + ~(i29 << 15) | 0;
    i29 = (i14 >>> 10 ^ i14) * 9 & -1;
    i14 = i29 >>> 6 ^ i29;
    i29 = i14 + ~(i14 << 11) | 0;
    i14 = i29 >>> 16 ^ i29;
    if ((i30 | 0) == 0) {
     i33 = 9;
     break;
    }
    i29 = i31 & i14;
    i28 = i30 + (i29 << 3) | 0;
    i34 = HEAP32[i28 >> 2] | 0;
    if ((i34 | 0) == (i2 | 0)) {
     i35 = i28;
    } else {
     i28 = (i14 >>> 23) + ~i14 | 0;
     i14 = i28 << 12 ^ i28;
     i28 = i14 >>> 7 ^ i14;
     i14 = i28 << 2 ^ i28;
     i28 = i14 >>> 20 ^ i14 | 1;
     i14 = 0;
     i36 = i29;
     i29 = i34;
     while (1) {
      if ((i29 | 0) == 0) {
       i33 = 9;
       break L3;
      }
      i34 = (i14 | 0) == 0 ? i28 : i14;
      i37 = i34 + i36 & i31;
      i38 = i30 + (i37 << 3) | 0;
      i39 = HEAP32[i38 >> 2] | 0;
      if ((i39 | 0) == (i2 | 0)) {
       i35 = i38;
       break;
      } else {
       i14 = i34;
       i36 = i37;
       i29 = i39;
      }
     }
    }
    if ((i35 | 0) == 0) {
     i33 = 9;
     break;
    }
    i29 = HEAP32[i35 + 4 >> 2] | 0;
    i36 = i13;
    if ((i29 | 0) == 0) {
     i40 = i36;
     break;
    }
    i14 = HEAP32[i29 + 20 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i40 = i36;
     break;
    }
    i29 = i10 | 0;
    i30 = i13 | 0;
    i31 = i13 + 4 | 0;
    i28 = i13 + 8 | 0;
    i39 = i13 + 12 | 0;
    i37 = i14;
    while (1) {
     i14 = HEAP32[i37 >> 2] | 0;
     i34 = HEAP32[i29 >> 2] | 0;
     i38 = (HEAP32[i14 + 48 >> 2] | 0) + i32 | 0;
     i41 = HEAP32[i14 + 52 >> 2] | 0;
     i42 = HEAP32[i14 + 56 >> 2] | 0;
     HEAP32[i30 >> 2] = (HEAP32[i14 + 44 >> 2] | 0) + i15;
     HEAP32[i31 >> 2] = i38;
     HEAP32[i28 >> 2] = i41;
     HEAP32[i39 >> 2] = i42;
     __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i34, i13);
     i34 = HEAP32[i37 + 8 >> 2] | 0;
     if ((i34 | 0) == 0) {
      i40 = i36;
      break;
     } else {
      i37 = i34;
     }
    }
   }
  } while (0);
  if ((i33 | 0) == 9) {
   i40 = i13;
  }
  i13 = i2 | 0;
  i40 = HEAP32[i2 + 4 >> 2] | 0;
  do {
   if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
    if ((HEAP32[i40 + 12 >> 2] & 4 | 0) == 0) {
     i33 = 19;
     break;
    }
    i15 = HEAP32[i40 + 44 >> 2] | 0;
    i32 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
    if ((i15 | 0) == (i32 | 0)) {
     i33 = 20;
     break;
    }
    if ((HEAP32[i15 + 12 >> 2] | 0) != (HEAP32[i32 + 12 >> 2] | 0)) {
     i33 = 19;
     break;
    }
    if ((HEAP32[i15 + 16 >> 2] | 0) == (HEAP32[i32 + 16 >> 2] | 0)) {
     i33 = 20;
    } else {
     i33 = 19;
    }
   } else {
    i33 = 19;
   }
  } while (0);
  if ((i33 | 0) == 19) {
   if ((HEAP32[(HEAP32[(HEAP32[i40 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i40 | 0)) {
    i33 = 20;
   }
  }
  L27 : do {
   if ((i33 | 0) == 20) {
    i40 = __ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    i32 = i10 | 0;
    i15 = i12 | 0;
    i35 = i12 + 4 | 0;
    i27 = i12 + 8 | 0;
    i37 = i12 + 12 | 0;
    i36 = i40;
    while (1) {
     i40 = i36 | 0;
     if ((HEAP32[i36 + 20 >> 2] & 768 | 0) == 768) {
      break L27;
     }
     i39 = HEAP32[i36 + 44 >> 2] | 0;
     i28 = HEAP32[i36 + 48 >> 2] | 0;
     i31 = HEAP32[H_BASE + 1544 >> 2] | 0;
     L33 : do {
      if ((i31 | 0) != 0) {
       i30 = HEAP32[i31 + 8 >> 2] | 0;
       i29 = HEAP32[i31 >> 2] | 0;
       i34 = i36;
       i42 = i34 + ~(i34 << 15) | 0;
       i34 = (i42 >>> 10 ^ i42) * 9 & -1;
       i42 = i34 >>> 6 ^ i34;
       i34 = i42 + ~(i42 << 11) | 0;
       i42 = i34 >>> 16 ^ i34;
       if ((i29 | 0) == 0) {
        break;
       }
       i34 = i30 & i42;
       i41 = i29 + (i34 << 3) | 0;
       i38 = HEAP32[i41 >> 2] | 0;
       if ((i38 | 0) == (i36 | 0)) {
        i43 = i41;
       } else {
        i41 = (i42 >>> 23) + ~i42 | 0;
        i42 = i41 << 12 ^ i41;
        i41 = i42 >>> 7 ^ i42;
        i42 = i41 << 2 ^ i41;
        i41 = i42 >>> 20 ^ i42 | 1;
        i42 = 0;
        i14 = i34;
        i34 = i38;
        while (1) {
         if ((i34 | 0) == 0) {
          break L33;
         }
         i38 = (i42 | 0) == 0 ? i41 : i42;
         i44 = i38 + i14 & i30;
         i45 = i29 + (i44 << 3) | 0;
         i46 = HEAP32[i45 >> 2] | 0;
         if ((i46 | 0) == (i36 | 0)) {
          i43 = i45;
          break;
         } else {
          i42 = i38;
          i14 = i44;
          i34 = i46;
         }
        }
       }
       if ((i43 | 0) == 0) {
        break;
       }
       i34 = HEAP32[i43 + 4 >> 2] | 0;
       if ((i34 | 0) == 0) {
        break;
       }
       i14 = HEAP32[i34 + 20 >> 2] | 0;
       if ((i14 | 0) == 0) {
        break;
       } else {
        i47 = i14;
       }
       while (1) {
        i14 = HEAP32[i47 >> 2] | 0;
        i34 = HEAP32[i32 >> 2] | 0;
        i42 = (HEAP32[i14 + 48 >> 2] | 0) + i28 | 0;
        i29 = HEAP32[i14 + 52 >> 2] | 0;
        i30 = HEAP32[i14 + 56 >> 2] | 0;
        HEAP32[i15 >> 2] = (HEAP32[i14 + 44 >> 2] | 0) + i39;
        HEAP32[i35 >> 2] = i42;
        HEAP32[i27 >> 2] = i29;
        HEAP32[i37 >> 2] = i30;
        __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i34, i12);
        i47 = HEAP32[i47 + 8 >> 2] | 0;
        if ((i47 | 0) == 0) {
         break;
        }
       }
      }
     } while (0);
     i36 = __ZNK7WebCore12RenderObject15containingBlockEv(i40) | 0;
     if ((i36 | 0) == 0) {
      break;
     }
    }
   }
  } while (0);
  FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1120 >> 2] & 31](i2, i3, i10, i4, i5);
 }
 i47 = i1;
 _memset(i47 | 0, 0, 48) | 0;
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 i12 = i2 + 20 | 0;
 i43 = HEAP32[i12 >> 2] | 0;
 i13 = i2 + 36 | 0;
 i33 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i43 & 4325376 | 0) == 0) {
   if ((HEAP32[(HEAP32[(HEAP32[i33 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0) {
    break;
   }
   if ((i43 & 2097152 | 0) == 0) {
    __ZN7WebCore11RenderBlock18blockSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i21, i2, i3, i4, i5, i6, i7, i8, i9, i10);
    _memcpy(i47 | 0, i21 | 0, 48) | 0;
   } else {
    FUNCTION_TABLE_viiiiiiiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1116 >> 2] & 3](i20, i2, i3, i4, i5, i6, i7, i8, i9, i10);
    _memcpy(i47 | 0, i20 | 0, 48) | 0;
   }
   if ((i3 | 0) != (i2 | 0)) {
    STACKTOP = i11;
    return;
   }
   if ((((HEAP32[i12 >> 2] | 0) >>> 25 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    STACKTOP = i11;
    return;
   }
   HEAP32[i23 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i24 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i25 >> 2] = HEAP32[i8 >> 2];
   i36 = (HEAP32[(HEAP32[i13 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i36 | 0) == 3 | (i36 | 0) == 0) {
    HEAP32[i26 >> 2] = HEAP32[i2 + 56 >> 2];
   } else {
    HEAP32[i26 >> 2] = HEAP32[i2 + 52 >> 2];
   }
   __ZN7WebCore11RenderBlock17blockSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES8_S8_S8_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i22, i2, i2, i4, i5, i23, i24, i25, i26, i9, i10);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i1 + 16 | 0, i22);
   STACKTOP = i11;
   return;
  }
 } while (0);
 i22 = i2 + 36 | 0;
 i1 = (HEAP32[i33 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i1 | 0) == 3 | (i1 | 0) == 0) {
  i48 = i2 + 56 | 0;
 } else {
  i48 = i2 + 52 | 0;
 }
 HEAP32[i6 >> 2] = (HEAP32[i48 >> 2] | 0) + (HEAP32[((HEAP32[i3 + 20 >> 2] & 8192 | 0) == 0 ? i5 | 0 : i5 + 4 | 0) >> 2] | 0);
 i5 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  HEAP32[i17 >> 2] = HEAP32[i2 + 56 >> 2];
 } else {
  HEAP32[i17 >> 2] = HEAP32[i2 + 52 >> 2];
 }
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i16, i2, i3, i17, i9);
 HEAP32[i7 >> 2] = HEAP32[i16 >> 2];
 i16 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i16 | 0) == 3 | (i16 | 0) == 0) {
  HEAP32[i19 >> 2] = HEAP32[i2 + 56 >> 2];
 } else {
  HEAP32[i19 >> 2] = HEAP32[i2 + 52 >> 2];
 }
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i18, i2, i3, i19, i9);
 HEAP32[i8 >> 2] = HEAP32[i18 >> 2];
 STACKTOP = i11;
 return;
}
function __ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = i4 + 64 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 i17 = i2 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] & 511](i17) | 0) {
  __ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE(i1, i2 | 0, i3);
  STACKTOP = i4;
  return;
 }
 i18 = i2 + 20 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 L5 : do {
  if ((i19 & 2048 | 0) != 0) {
   i20 = (i19 & 8192 | 0) == 0;
   i21 = i3 + 4 | 0;
   i22 = i3 | 0;
   i23 = HEAP32[(i20 ? i21 : i22) >> 2] | 0;
   i24 = HEAP32[(i20 ? i22 : i21) >> 2] | 0;
   do {
    if ((i24 | 0) >= 0) {
     i21 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i21 | 0) == 3 | (i21 | 0) == 0) {
      i25 = i2 + 56 | 0;
     } else {
      i25 = i2 + 52 | 0;
     }
     if ((i24 | 0) < (HEAP32[i25 >> 2] | 0) & (i23 | 0) < 0) {
      break;
     }
     if ((i21 | 0) == 3 | (i21 | 0) == 0) {
      i26 = i2 + 56 | 0;
     } else {
      i26 = i2 + 52 | 0;
     }
     if ((i24 | 0) < (HEAP32[i26 >> 2] | 0)) {
      if ((i24 | 0) <= -1) {
       break L5;
      }
      if ((i21 | 0) == 3 | (i21 | 0) == 0) {
       i27 = i2 + 52 | 0;
      } else {
       i27 = i2 + 56 | 0;
      }
      if ((i23 | 0) < (HEAP32[i27 >> 2] | 0)) {
       break L5;
      }
     }
     __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i17, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 568 >> 2] & 511](i17) | 0, 1);
     STACKTOP = i4;
     return;
    }
   } while (0);
   __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i17, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 564 >> 2] & 511](i17) | 0, 1);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i27 = i3;
 i26 = HEAP32[i27 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i13 + 4 >> 2] = i26;
 __ZNK7WebCore11RenderBlock17offsetForContentsERNS_11LayoutPointE(i2, i14);
 i26 = HEAP32[i13 >> 2] | 0;
 i27 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = i26;
 HEAP32[i15 + 4 >> 2] = i27;
 i13 = HEAP32[i18 >> 2] | 0;
 i25 = i27;
 if ((i13 & 8192 | 0) == 0) {
  HEAP32[i15 >> 2] = i25;
  HEAP32[i15 + 4 >> 2] = i26;
  i28 = i26;
 } else {
  i28 = i25;
 }
 if ((i13 & 2097152 | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1124 >> 2] & 63](i1, i2, i16);
  STACKTOP = i4;
  return;
 }
 i25 = i16 + 4 | 0;
 do {
  if ((i13 & 805306368 | 0) == 0) {
   i29 = 0;
  } else {
   i16 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i17) | 0;
   if ((i16 | 0) == 0) {
    i29 = 0;
    break;
   }
   if ((HEAP8[i16 + 292 | 0] & 1) != 0) {
    i29 = 0;
    break;
   }
   if ((HEAP32[i16 + 128 >> 2] | 0) == 0) {
    i29 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i6, i2);
   HEAP32[i5 >> 2] = (HEAP32[i6 >> 2] | 0) + i28;
   i29 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i16, i2 | 0, i5, 1, 0) | 0;
  }
 } while (0);
 i5 = i2 | 0;
 i28 = HEAP32[i2 + 32 >> 2] | 0;
 i6 = i28;
 L43 : do {
  if ((i28 | 0) == 0) {
   i30 = 0;
   i31 = i6;
   i32 = 0;
  } else {
   i17 = (i29 | 0) == 0;
   i13 = i7 | 0;
   i16 = i8 | 0;
   i26 = i28;
   i15 = i6;
   while (1) {
    do {
     if ((HEAP32[i26 + 56 >> 2] | 0) != 0) {
      if ((HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
       break;
      }
      i27 = HEAP32[i26 + 20 >> 2] | 0;
      if (!((i27 & 64 | 0) == 0 & (i27 & 25165824 | 0) != 16777216)) {
       break;
      }
      if (i17) {
       i30 = i26;
       i31 = i15;
       i32 = 1;
       break L43;
      }
      if ((HEAP32[i26 + 24 >> 2] & 16 | 0) == 0) {
       i33 = __ZNK7WebCore12RenderObject15containingBlockEv(i26) | 0;
      } else {
       i33 = i26;
      }
      i27 = HEAP32[i25 >> 2] | 0;
      do {
       if ((HEAP32[i33 + 20 >> 2] & 805306368 | 0) == 0) {
        i34 = 0;
       } else {
        i19 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i33 | 0) | 0;
        if ((i19 | 0) == 0) {
         i34 = 0;
         break;
        }
        if ((HEAP8[i19 + 292 | 0] & 1) != 0) {
         i34 = 0;
         break;
        }
        if ((HEAP32[i19 + 128 >> 2] | 0) == 0) {
         i34 = 0;
         break;
        }
        FUNCTION_TABLE_vii[HEAP32[(HEAP32[i33 >> 2] | 0) + 864 >> 2] & 127](i8, i33);
        HEAP32[i13 >> 2] = (HEAP32[i16 >> 2] | 0) + i27;
        i34 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i19, i33 | 0, i7, 1, 0) | 0;
       }
      } while (0);
      if ((i34 | 0) == (i29 | 0)) {
       i30 = i26;
       i31 = i15;
       i32 = 1;
       break L43;
      }
     }
    } while (0);
    i27 = HEAP32[i26 + 12 >> 2] | 0;
    i19 = i27;
    if ((i27 | 0) == 0) {
     i30 = 0;
     i31 = i19;
     i32 = 0;
     break;
    } else {
     i26 = i27;
     i15 = i19;
    }
   }
  }
 } while (0);
 i34 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 L64 : do {
  if (i32) {
   i7 = HEAP32[i25 >> 2] | 0;
   i33 = (HEAP32[i18 >> 2] & 8192 | 0) == 0;
   if (i33) {
    i35 = i30 + 44 | 0;
   } else {
    i35 = i30 + 48 | 0;
   }
   do {
    if ((i7 | 0) <= (HEAP32[i35 >> 2] | 0)) {
     if (!((i34 | 0) == 3 | (i34 | 0) == 1)) {
      if (i33) {
       i36 = i30 + 44 | 0;
      } else {
       i36 = i30 + 48 | 0;
      }
      if ((i7 | 0) == (HEAP32[i36 >> 2] | 0)) {
       break;
      }
     }
     i8 = HEAP32[i2 + 28 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break L64;
     }
     i6 = (i29 | 0) == 0;
     i28 = i11 | 0;
     i15 = i12 | 0;
     i26 = i9 | 0;
     i16 = i10 | 0;
     i13 = i8;
     L80 : while (1) {
      i37 = i13;
      i8 = i13 + 56 | 0;
      do {
       if ((HEAP32[i8 >> 2] | 0) != 0) {
        i17 = i13 + 36 | 0;
        if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
         break;
        }
        i19 = i13 + 20 | 0;
        i27 = HEAP32[i19 >> 2] | 0;
        if (!((i27 & 64 | 0) == 0 & (i27 & 25165824 | 0) != 16777216)) {
         break;
        }
        if (!i6) {
         if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
          i38 = __ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0;
         } else {
          i38 = i13;
         }
         i27 = HEAP32[i25 >> 2] | 0;
         do {
          if ((HEAP32[i38 + 20 >> 2] & 805306368 | 0) == 0) {
           i39 = 0;
          } else {
           i23 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i38 | 0) | 0;
           if ((i23 | 0) == 0) {
            i39 = 0;
            break;
           }
           if ((HEAP8[i23 + 292 | 0] & 1) != 0) {
            i39 = 0;
            break;
           }
           if ((HEAP32[i23 + 128 >> 2] | 0) == 0) {
            i39 = 0;
            break;
           }
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 864 >> 2] & 127](i10, i38);
           HEAP32[i26 >> 2] = (HEAP32[i16 >> 2] | 0) + i27;
           i39 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i23, i38 | 0, i9, 1, 0) | 0;
          }
         } while (0);
         if ((i39 | 0) != (i29 | 0)) {
          break;
         }
        }
        if ((HEAP32[i18 >> 2] & 8192 | 0) == 0) {
         i40 = HEAP32[i13 + 52 >> 2] | 0;
         i41 = HEAP32[i8 >> 2] | 0;
         i42 = i13 + 44 | 0;
        } else {
         i27 = HEAP32[i8 >> 2] | 0;
         i40 = i27;
         i41 = i27;
         i42 = i13 + 48 | 0;
        }
        i27 = i40 + (HEAP32[i42 >> 2] | 0) | 0;
        if ((i41 | 0) == 0) {
         break;
        }
        if ((HEAP32[(HEAP32[i17 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
         break;
        }
        i23 = HEAP32[i19 >> 2] | 0;
        if (!((i23 & 64 | 0) == 0 & (i23 & 25165824 | 0) != 16777216)) {
         break;
        }
        if (!i6) {
         if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
          i43 = __ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0;
         } else {
          i43 = i13;
         }
         i23 = HEAP32[i25 >> 2] | 0;
         do {
          if ((HEAP32[i43 + 20 >> 2] & 805306368 | 0) == 0) {
           i44 = 0;
          } else {
           i24 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i43 | 0) | 0;
           if ((i24 | 0) == 0) {
            i44 = 0;
            break;
           }
           if ((HEAP8[i24 + 292 | 0] & 1) != 0) {
            i44 = 0;
            break;
           }
           if ((HEAP32[i24 + 128 >> 2] | 0) == 0) {
            i44 = 0;
            break;
           }
           FUNCTION_TABLE_vii[HEAP32[(HEAP32[i43 >> 2] | 0) + 864 >> 2] & 127](i12, i43);
           HEAP32[i28 >> 2] = (HEAP32[i15 >> 2] | 0) + i23;
           i44 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i24, i43 | 0, i11, 1, 0) | 0;
          }
         } while (0);
         if ((i44 | 0) != (i29 | 0)) {
          break;
         }
        }
        i23 = HEAP32[i25 >> 2] | 0;
        if ((i23 | 0) < (i27 | 0)) {
         break L80;
        }
        if (!((i34 | 0) == 3 | (i34 | 0) == 1)) {
         break;
        }
        if ((i23 | 0) == (i27 | 0)) {
         break L80;
        }
       }
      } while (0);
      i13 = HEAP32[i13 + 16 >> 2] | 0;
      if ((i13 | 0) == 0) {
       break L64;
      }
     }
     __ZN7WebCore43positionForPointRespectingEditingBoundariesERNS_11RenderBlockERNS_9RenderBoxERKNS_11LayoutPointE(i1, i2, i37, i14);
     STACKTOP = i4;
     return;
    }
   } while (0);
   __ZN7WebCore43positionForPointRespectingEditingBoundariesERNS_11RenderBlockERNS_9RenderBoxERKNS_11LayoutPointE(i1, i2, i31, i14);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore9RenderBox16positionForPointERKNS_11LayoutPointE(i1, i5, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 do {
  if ((i3 | 0) == 0) {
   i6 = 0;
  } else {
   i7 = i3 + 8 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i9 = i1 | 0;
   if ((i8 | 0) == (i9 | 0)) {
    i10 = i3;
   } else {
    i11 = i8;
    while (1) {
     i12 = i11 | 0;
     i8 = HEAP32[i11 + 8 >> 2] | 0;
     if ((i8 | 0) == (i9 | 0)) {
      break;
     } else {
      i11 = i8;
     }
    }
    L7 : do {
     if ((HEAP32[i11 + 20 >> 2] & 128 | 0) == 0) {
      i13 = i12;
     } else {
      do {
       if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i12) | 0)) {
        i8 = i11;
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 236 >> 2] & 511](i12) | 0) {
         break;
        }
        if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 240 >> 2] & 511](i12) | 0) {
         break;
        }
        i8 = i2;
        do {
         if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 188 >> 2] & 511](i2) | 0)) {
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 192 >> 2] & 511](i2) | 0) {
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 196 >> 2] & 511](i2) | 0) {
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 200 >> 2] & 511](i2) | 0) {
           break;
          }
          if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 204 >> 2] & 511](i2) | 0) {
           break;
          }
          i14 = __ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE(i1 | 0, i3) | 0;
          i13 = (HEAP32[i14 + 8 >> 2] | 0) == (i9 | 0) ? i14 : i12;
          break L7;
         }
        } while (0);
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 628 >> 2] & 63](i11, i2, i3);
        STACKTOP = i4;
        return;
       }
      } while (0);
      i8 = HEAP32[i7 >> 2] | 0;
      do {
       if ((HEAP32[i2 + 20 >> 2] & 1024 | 0) == 0) {
        if ((HEAP32[i8 + 28 >> 2] | 0) != (i3 | 0)) {
         break;
        }
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 628 >> 2] & 63](i1, i2, i8 | 0);
        STACKTOP = i4;
        return;
       }
      } while (0);
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 628 >> 2] & 63](i8, i2, i3);
      STACKTOP = i4;
      return;
     }
    } while (0);
    if ((i13 | 0) == 0) {
     i6 = 0;
     break;
    } else {
     i10 = i13;
    }
   }
   i7 = (HEAP32[i10 + 20 >> 2] & 768 | 0) == 256;
   if (i7) {
    i15 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i15 = HEAP32[i10 + 36 >> 2] | 0;
   }
   if ((HEAP32[i15 + 48 >> 2] & 31 | 0) != 3) {
    i6 = i10;
    break;
   }
   if ((HEAP32[i1 + 8 >> 2] | 0) == 0 | i7) {
    i6 = i10;
    break;
   }
   if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
    i6 = i10;
    break;
   }
   i6 = HEAP32[i10 + 16 >> 2] | 0;
  }
 } while (0);
 do {
  if ((HEAP8[H_BASE + 1496 | 0] & 1) != 0) {
   i10 = __ZN7WebCore11RenderBlock30columnsBlockForSpanningElementEPNS_12RenderObjectE(i1, i2) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i15 = HEAP8[H_BASE + 1496 | 0] & 1;
   HEAP8[H_BASE + 1496 | 0] = 0;
   i13 = i1 | 0;
   i3 = __ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE(i13) | 0;
   do {
    if ((i10 | 0) == (i1 | 0)) {
     i16 = 34;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 511](i13) | 0) {
      i16 = 34;
      break;
     }
     i12 = i1 | 0;
     i7 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i12) | 0;
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i13) | 0)) {
      __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i12, i3 | 0);
     }
     __ZN7WebCore11RenderBlock9splitFlowEPNS_12RenderObjectEPS0_S2_PNS_20RenderBoxModelObjectE(i1, i6, i3, i2, i7);
    }
   } while (0);
   if ((i16 | 0) == 34) {
    __ZN7WebCore11RenderBlock33makeChildrenAnonymousColumnBlocksEPNS_12RenderObjectEPS0_S2_(i1, i6, i3, i2);
   }
   HEAP8[H_BASE + 1496 | 0] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i16 = i1 | 0;
 i13 = i1 + 20 | 0;
 i10 = i2 + 20 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i13 >> 2] & 2097152 | 0) != 0) {
  if ((i7 & 1088 | 0) != 0 | (i7 & 25165824 | 0) == 16777216) {
   i12 = i1 + 92 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   if ((i11 & -1073741824 | 0) != -1073741824) {
    HEAP32[i12 >> 2] = i11 & 1073741823;
   }
   __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2, i6);
   if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
    i17 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i17 = HEAP32[i2 + 36 >> 2] | 0;
   }
   if ((HEAP32[i17 + 48 >> 2] & 31 | 0) == 3) {
    __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2);
    STACKTOP = i4;
    return;
   }
   i17 = HEAP32[i2 + 12 >> 2] | 0;
   if ((i17 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP32[i17 + 20 >> 2] & 768 | 0) == 256) {
    i18 = HEAP32[(HEAP32[i17 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i18 = HEAP32[i17 + 36 >> 2] | 0;
   }
   if ((HEAP32[i18 + 48 >> 2] & 31 | 0) != 3) {
    STACKTOP = i4;
    return;
   }
   __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i17);
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore11RenderBlock21makeChildrenNonInlineEPNS_12RenderObjectE(i1, i6);
  if ((i6 | 0) == 0) {
   i19 = 0;
  } else {
   i17 = HEAP32[i6 + 8 >> 2] | 0;
   i19 = (i17 | 0) == (i1 | 0) ? i6 : i17 | 0;
  }
  i17 = i1 + 92 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  if ((i18 & -1073741824 | 0) != -1073741824) {
   HEAP32[i17 >> 2] = i18 & 1073741823;
  }
  __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2, i19);
  if ((HEAP32[i10 >> 2] & 768 | 0) == 256) {
   i20 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i20 = HEAP32[i2 + 36 >> 2] | 0;
  }
  do {
   if ((HEAP32[i20 + 48 >> 2] & 31 | 0) == 3) {
    __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2);
   } else {
    i19 = HEAP32[i2 + 12 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    if ((HEAP32[i19 + 20 >> 2] & 768 | 0) == 256) {
     i21 = HEAP32[(HEAP32[i19 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i21 = HEAP32[i19 + 36 >> 2] | 0;
    }
    if ((HEAP32[i21 + 48 >> 2] & 31 | 0) != 3) {
     break;
    }
    __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i19);
   }
  } while (0);
  i21 = i1 + 8 | 0;
  if ((HEAP32[i21 >> 2] | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i16) | 0)) {
   STACKTOP = i4;
   return;
  }
  i20 = HEAP32[i21 >> 2] | 0;
  if ((HEAP32[i20 + 24 >> 2] & 16 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 1076 >> 2] & 127](i20, i1);
  STACKTOP = i4;
  return;
 }
 if ((i7 & 25165824 | 0) != 16777216 & (i7 & 64 | 0) == 0 & (i7 & 1024 | 0) == 0) {
  i20 = i1 + 92 | 0;
  i21 = HEAP32[i20 >> 2] | 0;
  if ((i21 & -1073741824 | 0) != -1073741824) {
   HEAP32[i20 >> 2] = i21 & 1073741823;
  }
  __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2, i6);
  if ((HEAP32[i10 >> 2] & 768 | 0) == 256) {
   i22 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i22 = HEAP32[i2 + 36 >> 2] | 0;
  }
  if ((HEAP32[i22 + 48 >> 2] & 31 | 0) == 3) {
   __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2);
   STACKTOP = i4;
   return;
  }
  i22 = HEAP32[i2 + 12 >> 2] | 0;
  if ((i22 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  if ((HEAP32[i22 + 20 >> 2] & 768 | 0) == 256) {
   i23 = HEAP32[(HEAP32[i22 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i23 = HEAP32[i22 + 36 >> 2] | 0;
  }
  if ((HEAP32[i23 + 48 >> 2] & 31 | 0) != 3) {
   STACKTOP = i4;
   return;
  }
  __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i22);
  STACKTOP = i4;
  return;
 }
 i22 = HEAP32[((i6 | 0) == 0 ? i1 + 32 | 0 : i6 + 12 | 0) >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i24 = i7;
  } else {
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i22) | 0)) {
    i24 = HEAP32[i10 >> 2] | 0;
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 628 >> 2] & 63](i22, i2, 0);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i24 & 1024 | 0) != 0) {
  i24 = __ZN3WTF10fastMallocEj(116) | 0;
  i22 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i13 >> 2] & 768 | 0) == 256) {
   i25 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i25 = HEAP32[i16 + 36 >> 2] | 0;
  }
  __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i5, i25, 1);
  __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i24, i22, i5);
  __ZN7WebCore13RenderElement15initializeStyleEv(i24);
  __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i24, i6);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i24 >> 2] | 0) + 628 >> 2] & 63](i24, i2, 0);
  STACKTOP = i4;
  return;
 }
 i24 = i1 + 92 | 0;
 i5 = HEAP32[i24 >> 2] | 0;
 if ((i5 & -1073741824 | 0) != -1073741824) {
  HEAP32[i24 >> 2] = i5 & 1073741823;
 }
 __ZN7WebCore13RenderElement8addChildEPNS_12RenderObjectES2_(i1 | 0, i2, i6);
 if ((HEAP32[i10 >> 2] & 768 | 0) == 256) {
  i26 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i26 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[i26 + 48 >> 2] & 31 | 0) == 3) {
  __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2);
  STACKTOP = i4;
  return;
 }
 i26 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i26 + 20 >> 2] & 768 | 0) == 256) {
  i27 = HEAP32[(HEAP32[i26 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i27 = HEAP32[i26 + 36 >> 2] | 0;
 }
 if ((HEAP32[i27 + 48 >> 2] & 31 | 0) != 3) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i26);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, d37 = +0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0, d45 = +0, i46 = 0, i47 = 0, d48 = +0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, d87 = +0, i88 = 0, i89 = 0, d90 = +0, i91 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1028 >> 2] & 63](i1);
 i15 = i1 | 0;
 i16 = i1 + 76 | 0;
 i17 = i16 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i1 + 80 | 0;
 i19 = i18 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = HEAP32[i1 + 36 >> 2] | 0;
 i21 = i1 | 0;
 i22 = i1;
 i23 = i20 + 44 | 0;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 188 >> 2] & 511](i21) | 0) {
   i24 = 34;
  } else {
   i25 = HEAP32[i23 >> 2] | 0;
   i26 = i25 >>> 13 & 3;
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i27 = HEAP32[i20 + 4 >> 2] | 0;
    i28 = i27 + 4 | 0;
    i29 = i27;
   } else {
    i27 = HEAP32[i20 + 4 >> 2] | 0;
    i28 = i27 + 12 | 0;
    i29 = i27;
   }
   if ((HEAP8[i28 + 5 | 0] | 0) != 3) {
    i24 = 34;
    break;
   }
   if ((i26 | 0) == 3 | (i26 | 0) == 0) {
    i30 = i29 + 4 | 0;
   } else {
    i30 = i29 + 12 | 0;
   }
   if ((HEAP8[i30 + 6 | 0] & 1) == 0) {
    d31 = +(HEAP32[i30 >> 2] | 0);
   } else {
    d31 = +HEAPF32[i30 >> 2];
   }
   if (d31 < +0) {
    i24 = 34;
    break;
   }
   i26 = HEAP32[i1 + 20 >> 2] | 0;
   do {
    if ((i26 & 1088 | 0) != 0 | (i26 & 25165824 | 0) == 16777216) {
     i32 = i25;
    } else {
     i27 = HEAP32[i1 + 8 >> 2] | 0;
     if ((i27 | 0) == 0) {
      i32 = i25;
      break;
     }
     i33 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 548 >> 2] & 511](i27 | 0) | 0;
     i27 = HEAP32[i23 >> 2] | 0;
     if (!i33) {
      i32 = i27;
      break;
     }
     i33 = i27 >>> 13 & 3;
     if ((i33 | 0) == 3 | (i33 | 0) == 0) {
      i34 = (HEAP32[i20 + 4 >> 2] | 0) + 4 | 0;
     } else {
      i34 = (HEAP32[i20 + 4 >> 2] | 0) + 12 | 0;
     }
     if ((HEAP8[i34 + 5 | 0] | 0) == 10) {
      i24 = 34;
      break L1;
     }
     if ((HEAP8[i34 + 6 | 0] & 1) == 0) {
      i35 = HEAP32[i34 >> 2] | 0;
     } else {
      i35 = ~~+HEAPF32[i34 >> 2];
     }
     if ((i35 | 0) == 0) {
      i24 = 34;
      break L1;
     } else {
      i32 = i27;
     }
    }
   } while (0);
   i25 = i32 >>> 13 & 3;
   if ((i25 | 0) == 3 | (i25 | 0) == 0) {
    i36 = (HEAP32[i20 + 4 >> 2] | 0) + 4 | 0;
   } else {
    i36 = (HEAP32[i20 + 4 >> 2] | 0) + 12 | 0;
   }
   if ((HEAP8[i36 + 6 | 0] & 1) == 0) {
    d37 = +(HEAP32[i36 >> 2] | 0);
   } else {
    d37 = +HEAPF32[i36 >> 2];
   }
   do {
    if (d37 < +2147483647) {
     if (d37 <= +-2147483648) {
      i38 = -2147483648;
      break;
     }
     i38 = ~~d37;
    } else {
     i38 = 2147483647;
    }
   } while (0);
   HEAP32[i6 >> 2] = i38;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i5, i15, i6);
   i25 = HEAP32[i5 >> 2] | 0;
   HEAP32[i19 >> 2] = i25;
   HEAP32[i17 >> 2] = i25;
  }
 } while (0);
 if ((i24 | 0) == 34) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1008 >> 2] & 63](i1, i16, i18);
 }
 i24 = HEAP32[i23 >> 2] | 0;
 i5 = i24 >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i6 = HEAP32[i20 + 4 >> 2] | 0;
  i39 = i6 + 20 | 0;
  i40 = i6;
 } else {
  i6 = HEAP32[i20 + 4 >> 2] | 0;
  i39 = i6 + 36 | 0;
  i40 = i6;
 }
 do {
  if ((HEAP8[i39 + 5 | 0] | 0) == 3) {
   if ((i5 | 0) == 3 | (i5 | 0) == 0) {
    i41 = i40 + 20 | 0;
   } else {
    i41 = i40 + 36 | 0;
   }
   if ((HEAP8[i41 + 6 | 0] & 1) == 0) {
    d42 = +(HEAP32[i41 >> 2] | 0);
   } else {
    d42 = +HEAPF32[i41 >> 2];
   }
   if (d42 <= +0) {
    i43 = i24;
    break;
   }
   if ((i5 | 0) == 3 | (i5 | 0) == 0) {
    i44 = i40 + 20 | 0;
   } else {
    i44 = i40 + 36 | 0;
   }
   if ((HEAP8[i44 + 6 | 0] & 1) == 0) {
    d45 = +(HEAP32[i44 >> 2] | 0);
   } else {
    d45 = +HEAPF32[i44 >> 2];
   }
   do {
    if (d45 < +2147483647) {
     if (d45 <= +-2147483648) {
      i46 = -2147483648;
      break;
     }
     i46 = ~~d45;
    } else {
     i46 = 2147483647;
    }
   } while (0);
   HEAP32[i8 >> 2] = i46;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i7, i15, i8);
   HEAP32[i19 >> 2] = HEAP32[((HEAP32[i19 >> 2] | 0) < (HEAP32[i7 >> 2] | 0) ? i7 : i18) >> 2];
   i6 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
   if ((i6 | 0) == 3 | (i6 | 0) == 0) {
    i47 = (HEAP32[i20 + 4 >> 2] | 0) + 20 | 0;
   } else {
    i47 = (HEAP32[i20 + 4 >> 2] | 0) + 36 | 0;
   }
   if ((HEAP8[i47 + 6 | 0] & 1) == 0) {
    d48 = +(HEAP32[i47 >> 2] | 0);
   } else {
    d48 = +HEAPF32[i47 >> 2];
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
   HEAP32[i10 >> 2] = i49;
   __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i9, i15, i10);
   HEAP32[i17 >> 2] = HEAP32[((HEAP32[i17 >> 2] | 0) < (HEAP32[i9 >> 2] | 0) ? i9 : i16) >> 2];
   i43 = HEAP32[i23 >> 2] | 0;
  } else {
   i43 = i24;
  }
 } while (0);
 i24 = i43 >>> 13 & 3;
 if ((i24 | 0) == 3 | (i24 | 0) == 0) {
  i43 = HEAP32[i20 + 4 >> 2] | 0;
  i50 = i43 + 28 | 0;
  i51 = i43;
 } else {
  i43 = HEAP32[i20 + 4 >> 2] | 0;
  i50 = i43 + 44 | 0;
  i51 = i43;
 }
 if ((HEAP8[i50 + 5 | 0] | 0) != 3) {
  i52 = HEAP32[i22 >> 2] | 0;
  i53 = i52 + 188 | 0;
  i54 = HEAP32[i53 >> 2] | 0;
  i55 = FUNCTION_TABLE_ii[i54 & 511](i21) | 0;
  i56 = i1 | 0;
  i57 = i3;
  i58 = i4;
  i59 = i1;
  i60 = HEAP32[i59 >> 2] | 0;
  i61 = i60 + 760 | 0;
  i62 = HEAP32[i61 >> 2] | 0;
  i63 = FUNCTION_TABLE_ii[i62 & 511](i56) | 0;
  i64 = HEAP32[i59 >> 2] | 0;
  i65 = i64 + 764 | 0;
  i66 = HEAP32[i65 >> 2] | 0;
  i67 = FUNCTION_TABLE_ii[i66 & 511](i56) | 0;
  i68 = i67 + i63 | 0;
  i69 = i1;
  i70 = HEAP32[i69 >> 2] | 0;
  i71 = i70 + 728 | 0;
  i72 = HEAP32[i71 >> 2] | 0;
  FUNCTION_TABLE_vii[i72 & 127](i3, i56);
  i73 = i3 | 0;
  i74 = HEAP32[i73 >> 2] | 0;
  i75 = i68 + i74 | 0;
  i76 = HEAP32[i69 >> 2] | 0;
  i77 = i76 + 732 | 0;
  i78 = HEAP32[i77 >> 2] | 0;
  FUNCTION_TABLE_vii[i78 & 127](i4, i56);
  i79 = i4 | 0;
  i80 = HEAP32[i79 >> 2] | 0;
  i81 = i75 + i80 | 0;
  i82 = HEAP32[i17 >> 2] | 0;
  i83 = i82 + i81 | 0;
  HEAP32[i17 >> 2] = i83;
  i84 = HEAP32[i19 >> 2] | 0;
  i85 = i84 + i81 | 0;
  HEAP32[i19 >> 2] = i85;
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i21, 0, 1);
  STACKTOP = i2;
  return;
 }
 if ((i24 | 0) == 3 | (i24 | 0) == 0) {
  i86 = i51 + 28 | 0;
 } else {
  i86 = i51 + 44 | 0;
 }
 if ((HEAP8[i86 + 6 | 0] & 1) == 0) {
  d87 = +(HEAP32[i86 >> 2] | 0);
 } else {
  d87 = +HEAPF32[i86 >> 2];
 }
 do {
  if (d87 < +2147483647) {
   if (d87 <= +-2147483648) {
    i88 = -2147483648;
    break;
   }
   i88 = ~~d87;
  } else {
   i88 = 2147483647;
  }
 } while (0);
 HEAP32[i12 >> 2] = i88;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i11, i15, i12);
 HEAP32[i19 >> 2] = HEAP32[((HEAP32[i11 >> 2] | 0) < (HEAP32[i19 >> 2] | 0) ? i11 : i18) >> 2];
 i18 = (HEAP32[i23 >> 2] | 0) >>> 13 & 3;
 if ((i18 | 0) == 3 | (i18 | 0) == 0) {
  i89 = (HEAP32[i20 + 4 >> 2] | 0) + 28 | 0;
 } else {
  i89 = (HEAP32[i20 + 4 >> 2] | 0) + 44 | 0;
 }
 if ((HEAP8[i89 + 6 | 0] & 1) == 0) {
  d90 = +(HEAP32[i89 >> 2] | 0);
 } else {
  d90 = +HEAPF32[i89 >> 2];
 }
 do {
  if (d90 < +2147483647) {
   if (d90 <= +-2147483648) {
    i91 = -2147483648;
    break;
   }
   i91 = ~~d90;
  } else {
   i91 = 2147483647;
  }
 } while (0);
 HEAP32[i14 >> 2] = i91;
 __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i13, i15, i14);
 HEAP32[i17 >> 2] = HEAP32[((HEAP32[i13 >> 2] | 0) < (HEAP32[i17 >> 2] | 0) ? i13 : i16) >> 2];
 i52 = HEAP32[i22 >> 2] | 0;
 i53 = i52 + 188 | 0;
 i54 = HEAP32[i53 >> 2] | 0;
 i55 = FUNCTION_TABLE_ii[i54 & 511](i21) | 0;
 i56 = i1 | 0;
 i57 = i3;
 i58 = i4;
 i59 = i1;
 i60 = HEAP32[i59 >> 2] | 0;
 i61 = i60 + 760 | 0;
 i62 = HEAP32[i61 >> 2] | 0;
 i63 = FUNCTION_TABLE_ii[i62 & 511](i56) | 0;
 i64 = HEAP32[i59 >> 2] | 0;
 i65 = i64 + 764 | 0;
 i66 = HEAP32[i65 >> 2] | 0;
 i67 = FUNCTION_TABLE_ii[i66 & 511](i56) | 0;
 i68 = i67 + i63 | 0;
 i69 = i1;
 i70 = HEAP32[i69 >> 2] | 0;
 i71 = i70 + 728 | 0;
 i72 = HEAP32[i71 >> 2] | 0;
 FUNCTION_TABLE_vii[i72 & 127](i3, i56);
 i73 = i3 | 0;
 i74 = HEAP32[i73 >> 2] | 0;
 i75 = i68 + i74 | 0;
 i76 = HEAP32[i69 >> 2] | 0;
 i77 = i76 + 732 | 0;
 i78 = HEAP32[i77 >> 2] | 0;
 FUNCTION_TABLE_vii[i78 & 127](i4, i56);
 i79 = i4 | 0;
 i80 = HEAP32[i79 >> 2] | 0;
 i81 = i75 + i80 | 0;
 i82 = HEAP32[i17 >> 2] | 0;
 i83 = i82 + i81 | 0;
 HEAP32[i17 >> 2] = i83;
 i84 = HEAP32[i19 >> 2] | 0;
 i85 = i84 + i81 | 0;
 HEAP32[i19 >> 2] = i85;
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i21, 0, 1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 48 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i2 + 20 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 do {
  if (i18 >>> 0 < 2 >>> 0) {
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   i19 = i1 + 20 | 0;
   L4 : do {
    if ((HEAP32[i19 >> 2] | 0) >>> 0 > 1073741823 >>> 0) {
     i20 = i2 + 44 | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i22 = i2 + 32 | 0;
       if ((HEAP32[i22 >> 2] | 0) == 0) {
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 248 >> 2] & 511](i21 | 0) | 0)) {
        break;
       }
       i23 = i2 | 0;
       __ZN7WebCore15GraphicsContext4saveEv(HEAP32[i23 >> 2] | 0);
       i24 = HEAP32[i23 >> 2] | 0;
       i25 = i1 | 0;
       __ZNK7WebCore16RenderFlowThread33decorationsClipRectForBoxInRegionERKNS_9RenderBoxERNS_12RenderRegionE(i9, HEAP32[i20 >> 2] | 0, i25, HEAP32[i22 >> 2] | 0);
       d26 = +(HEAP32[i9 + 8 >> 2] | 0);
       d27 = +(HEAP32[i9 + 12 >> 2] | 0);
       d28 = +(+(HEAP32[i9 >> 2] | 0));
       d29 = +(+(HEAP32[i9 + 4 >> 2] | 0));
       HEAPF32[i7 >> 2] = d28;
       HEAPF32[i7 + 4 >> 2] = d29;
       i22 = i6 + 8 | 0;
       d29 = +d26;
       d26 = +d27;
       HEAPF32[i22 >> 2] = d29;
       HEAPF32[i22 + 4 >> 2] = d26;
       __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i24, i8);
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 956 >> 2] & 63](i25, i2, i3);
       __ZN7WebCore15GraphicsContext7restoreEv(HEAP32[i23 >> 2] | 0);
       break L4;
      }
     } while (0);
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 956 >> 2] & 63](i1 | 0, i2, i3);
    }
   } while (0);
   if ((HEAP32[i19 >> 2] & 4194304 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderBlock16paintColumnRulesERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3);
  }
 } while (0);
 if ((i18 | 0) == 11) {
  i30 = 13;
 } else if ((i18 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((i30 | 0) == 13) {
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 960 >> 2] & 63](i1 | 0, i2, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i3;
 i6 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i10 + 4 >> 2] = i6;
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 if ((HEAP32[i7 >> 2] & 65536 | 0) != 0) {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i12, i1 | 0);
  i9 = HEAP32[i12 + 4 >> 2] | 0;
  i20 = i10;
  HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - (HEAP32[i12 >> 2] | 0);
  i12 = i11 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - i9;
 }
 do {
  if ((i18 | 0) != 7) {
   i9 = HEAP32[i7 >> 2] | 0;
   if ((i9 & 4194304 | 0) != 0) {
    __ZN7WebCore11RenderBlock19paintColumnContentsERNS_9PaintInfoERKNS_11LayoutPointEb(i1, i2, i11, 0);
    break;
   }
   i12 = i5;
   i20 = (HEAP32[i1 + 4 >> 2] | 0) + 20 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] | 0) + 328 >> 2] | 0) == 1) {
    if ((i9 & 768 | 0) != 768) {
     break;
    }
   }
   if ((i9 & 2097152 | 0) != 0) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1096 >> 2] & 63](i1, i2, i11);
    break;
   }
   i9 = HEAP32[i17 >> 2] | 0;
   i10 = (i9 | 0) == 6 ? 5 : i9;
   _memcpy(i12 | 0, i2 | 0, 48) | 0;
   HEAP32[i5 + 20 >> 2] = (i10 | 0) == 2 ? 1 : i10;
   i10 = i5 + 28 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i12 | 0) != 0 & (i12 | 0) == (i6 | 0)) {
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[(HEAP32[(HEAP32[i20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   if ((HEAP32[i10 + 164 >> 2] | 0) < 1) {
    i31 = 0;
   } else {
    i31 = (HEAP32[i10 + 168 >> 2] | 0) > 0;
   }
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1036 >> 2] & 31](i1, i2, i11, i5, i31);
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 660 | 0] & 1) == 0) {
   if ((HEAP32[i7 >> 2] & 4194304 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderBlock14paintSelectionERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i11);
  }
 } while (0);
 switch (i18 | 0) {
 case 10:
 case 8:
 case 3:
  {
   if ((HEAP32[i7 >> 2] & 4194304 | 0) == 0) {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1092 >> 2] & 31](i1, i2, i11, (i18 | 0) == 8 | (i18 | 0) == 10);
   } else {
    __ZN7WebCore11RenderBlock19paintColumnContentsERNS_9PaintInfoERKNS_11LayoutPointEb(i1, i2, i11, 1);
   }
   if ((i18 | 0) == 7 | (i18 | 0) == 5) {
    i30 = 38;
   }
   break;
  }
 case 7:
 case 5:
  {
   i30 = 38;
   break;
  }
 default:
  {}
 }
 do {
  if ((i30 | 0) == 38) {
   if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
    i32 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i32 = HEAP32[i6 + 36 >> 2] | 0;
   }
   i11 = HEAP32[(HEAP32[i32 + 12 >> 2] | 0) + 64 >> 2] | 0;
   if (!((i11 & 131070 | 0) != 0 & (i11 & 2013265920 | 0) != 0 & (i11 & 1879048192) >>> 0 > 134217728 >>> 0)) {
    if (!(__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i6) | 0)) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   i11 = i1 + 52 | 0;
   i31 = HEAP32[i11 >> 2] | 0;
   i5 = HEAP32[i11 + 4 >> 2] | 0;
   i11 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i14 + 4 >> 2] = i11;
   i11 = i13 + 8 | 0;
   HEAP32[i11 >> 2] = i31;
   HEAP32[i11 + 4 >> 2] = i5;
   __ZN7WebCore12RenderObject12paintOutlineERNS_9PaintInfoERKNS_10LayoutRectE(i6, i2, i15);
  }
 } while (0);
 if ((i18 - 5 | 0) >>> 0 < 2 >>> 0) {
  i15 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
  L69 : do {
   if ((i15 | 0) != 0) {
    i13 = i15 + 20 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    if ((i14 & 1024 | 0) == 0) {
     break;
    }
    i8 = i15 | 0;
    if ((i14 & 768 | 0) == 256) {
     i33 = HEAP32[(HEAP32[i15 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i33 = HEAP32[i8 + 36 >> 2] | 0;
    }
    i14 = HEAP32[(HEAP32[i33 + 12 >> 2] | 0) + 64 >> 2] | 0;
    if (!((i14 & 131070 | 0) != 0 & (i14 & 2013265920 | 0) != 0 & (i14 & 1879048192) >>> 0 > 134217728 >>> 0)) {
     if (!(__ZNK7WebCore12RenderObject20hasOutlineAnnotationEv(i8) | 0)) {
      break;
     }
    }
    if ((HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
     break;
    }
    if ((HEAP32[i13 >> 2] & 128 | 0) == 0) {
     i34 = HEAP32[i15 + 4 >> 2] | 0;
    } else {
     i34 = 0;
    }
    i13 = i34 + 32 | 0;
    if ((HEAP32[i34 + 12 >> 2] & 2048 | 0) == 0) {
     i35 = i13 | 0;
    } else {
     i35 = HEAP32[i13 >> 2] | 0;
    }
    i13 = HEAP32[i35 >> 2] | 0;
    i8 = i13;
    i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i6) | 0;
    i32 = i13;
    i5 = i14 | 0;
    L87 : do {
     if ((i32 | 0) == (i5 | 0)) {
      i30 = 62;
     } else {
      i11 = i32;
      while (1) {
       if (__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i11 | 0) | 0) {
        i36 = 1;
        break L87;
       }
       i31 = __ZNK7WebCore12RenderObject23enclosingBoxModelObjectEv(HEAP32[i11 + 8 >> 2] | 0) | 0;
       if ((i31 | 0) == (i5 | 0)) {
        i30 = 62;
        break;
       } else {
        i11 = i31;
       }
      }
     }
    } while (0);
    do {
     if ((i30 | 0) == 62) {
      if ((HEAP32[i7 >> 2] & 32768 | 0) != 0) {
       i36 = 0;
       break;
      }
      __ZN7WebCore11RenderBlock26addContinuationWithOutlineEPNS_12RenderInlineE(i14, i8);
      break L69;
     }
    } while (0);
    if ((HEAP32[i13 + 44 >> 2] | 0) != 0) {
     if (i36) {
      break;
     }
     if ((HEAP32[i7 >> 2] & 32768 | 0) == 0) {
      break;
     }
    }
    i14 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i1 + 44 >> 2] | 0) | 0;
    i5 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i1 + 48 >> 2] | 0) | 0;
    i32 = (__ZNK7WebCore12RenderObject15containingBlockEv(i13) | 0) + 44 | 0;
    i19 = i5 + (HEAP32[i32 + 4 >> 2] | 0) | 0;
    HEAP32[i16 >> 2] = i14 + (HEAP32[i32 >> 2] | 0);
    HEAP32[i16 + 4 >> 2] = i19;
    __ZN7WebCore12RenderInline12paintOutlineERNS_9PaintInfoERKNS_11LayoutPointE(i8, i2, i16);
   }
  } while (0);
  __ZN7WebCore11RenderBlock25paintContinuationOutlinesERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3);
 }
 if ((i18 | 0) != 4) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore11RenderBlock10paintCaretERNS_9PaintInfoERKNS_11LayoutPointENS_9CaretTypeE(i1, i2, i3, 0);
 __ZN7WebCore11RenderBlock10paintCaretERNS_9PaintInfoERKNS_11LayoutPointENS_9CaretTypeE(i1, i2, i3, 1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, d40 = +0, d41 = +0, d42 = +0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN7WebCore9RenderBox14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE(i1 | 0, i2, i3);
 i6 = i1 | 0;
 i7 = HEAP32[i1 + 36 >> 2] | 0;
 i8 = HEAP32[i7 + 20 >> 2] | 0;
 i9 = HEAP32[i8 + 184 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i9 + 4 >> 2] | 0) != 2) {
    i10 = i9;
    break;
   }
   i10 = HEAP32[i8 + 188 >> 2] | 0;
  }
 } while (0);
 i8 = (i3 | 0) != 0;
 do {
  if (i8) {
   i9 = HEAP32[i3 + 20 >> 2] | 0;
   i11 = HEAP32[i9 + 184 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
    break;
   }
   if ((HEAP32[i11 + 4 >> 2] | 0) != 2) {
    i12 = i11;
    break;
   }
   i12 = HEAP32[i9 + 188 >> 2] | 0;
  } else {
   i12 = 0;
  }
 } while (0);
 __ZN7WebCore11RenderBlock37updateShapeInsideInfoAfterStyleChangeEPKNS_10ShapeValueES3_(i1, i10, i12);
 L10 : do {
  if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0)) {
   i12 = i1;
   while (1) {
    i13 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i12 | 0) | 0;
    if ((i13 | 0) == 0) {
     break L10;
    }
    if ((HEAP32[i13 + 20 >> 2] & 1024 | 0) != 0) {
     break L10;
    }
    i12 = i13;
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i13 | 0) | 0)) {
     break;
    }
   }
   if ((i13 | 0) == 0) {
    break;
   }
   i10 = i5 | 0;
   i9 = i7 | 0;
   i11 = i12;
   while (1) {
    i14 = i11 | 0;
    i15 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i14) | 0;
    __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i14, 0);
    HEAP32[i10 >> 2] = i7;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i11 | 0, i5);
    __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i14, i15);
    i15 = i11;
    while (1) {
     i16 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i15 | 0) | 0;
     if ((i16 | 0) == 0) {
      break L10;
     }
     if ((HEAP32[i16 + 20 >> 2] & 1024 | 0) != 0) {
      break L10;
     }
     i15 = i16;
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i16 | 0) | 0)) {
      break;
     }
    }
    if ((i16 | 0) == 0) {
     break;
    } else {
     i11 = i15;
    }
   }
  }
 } while (0);
 __ZN7WebCore13RenderElement33propagateStyleToAnonymousChildrenENS0_20StylePropagationTypeE(i6, 1);
 i6 = i1 + 92 | 0;
 i16 = HEAP32[i6 >> 2] | 33554431;
 HEAP32[i6 >> 2] = i16;
 if (!(i8 & (i2 | 0) == 8)) {
  i17 = 0;
  i18 = i16;
  i19 = i18 & -536870913;
  i20 = i19 | i17;
  HEAP32[i6 >> 2] = i20;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i1 + 20 >> 2] & 31 | 0) == 0) {
  i17 = 0;
  i18 = i16;
  i19 = i18 & -536870913;
  i20 = i19 | i17;
  HEAP32[i6 >> 2] = i20;
  STACKTOP = i4;
  return;
 }
 i16 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
 L31 : do {
  if ((i16 | 0) == 3 | (i16 | 0) == 0) {
   i1 = i3 + 16 | 0;
   i2 = HEAP32[i1 >> 2] | 0;
   i8 = (HEAP32[(HEAP32[i2 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   i5 = HEAP32[i2 + 104 >> 2] | 0;
   if (i8) {
    if ((i5 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i21 = 0;
    } else {
     i22 = 24;
    }
   } else {
    i22 = 24;
   }
   if ((i22 | 0) == 24) {
    i21 = i5 >>> 1 & 67108863;
   }
   i5 = i7 + 16 | 0;
   i13 = HEAP32[i5 >> 2] | 0;
   i11 = (HEAP32[(HEAP32[i13 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   i9 = HEAP32[i13 + 104 >> 2] | 0;
   if (i11) {
    if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i23 = 0;
    } else {
     i22 = 27;
    }
   } else {
    i22 = 27;
   }
   if ((i22 | 0) == 27) {
    i23 = i9 >>> 1 & 67108863;
   }
   if ((i21 | 0) != (i23 | 0)) {
    i24 = 1;
    break;
   }
   i9 = HEAP32[i2 + 112 >> 2] | 0;
   if (i8) {
    if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i25 = 0;
    } else {
     i22 = 31;
    }
   } else {
    i22 = 31;
   }
   if ((i22 | 0) == 31) {
    i25 = i9 >>> 1 & 67108863;
   }
   i9 = HEAP32[i13 + 112 >> 2] | 0;
   if (i11) {
    if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i26 = 0;
    } else {
     i22 = 34;
    }
   } else {
    i22 = 34;
   }
   if ((i22 | 0) == 34) {
    i26 = i9 >>> 1 & 67108863;
   }
   if ((i25 | 0) != (i26 | 0)) {
    i24 = 1;
    break;
   }
   i9 = i2 + 68 | 0;
   i11 = i13 + 68 | 0;
   i8 = HEAP8[i2 + 73 | 0] | 0;
   if (i8 << 24 >> 24 != (HEAP8[i13 + 73 | 0] | 0)) {
    i24 = 1;
    break;
   }
   if (((HEAP8[i13 + 72 | 0] ^ HEAP8[i2 + 72 | 0]) & 1) != 0) {
    i24 = 1;
    break;
   }
   do {
    if (i8 << 24 >> 24 == 15) {
     i27 = i2;
     i28 = i13;
    } else {
     if ((HEAP8[i2 + 74 | 0] & 1) == 0) {
      d29 = +(HEAP32[i9 >> 2] | 0);
     } else {
      d29 = +HEAPF32[i9 >> 2];
     }
     if ((HEAP8[i13 + 74 | 0] & 1) == 0) {
      d30 = +(HEAP32[i11 >> 2] | 0);
     } else {
      d30 = +HEAPF32[i11 >> 2];
     }
     if (d29 == d30) {
      i27 = i2;
      i28 = i13;
      break;
     }
     if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i11) | 0)) {
      i24 = 1;
      break L31;
     }
     i27 = HEAP32[i1 >> 2] | 0;
     i28 = HEAP32[i5 >> 2] | 0;
    }
   } while (0);
   i5 = i27 + 76 | 0;
   i1 = i28 + 76 | 0;
   i11 = HEAP8[i27 + 81 | 0] | 0;
   if (i11 << 24 >> 24 != (HEAP8[i28 + 81 | 0] | 0)) {
    i24 = 1;
    break;
   }
   if (((HEAP8[i28 + 80 | 0] ^ HEAP8[i27 + 80 | 0]) & 1) != 0) {
    i24 = 1;
    break;
   }
   if (i11 << 24 >> 24 == 15) {
    i24 = 0;
    break;
   }
   if ((HEAP8[i27 + 82 | 0] & 1) == 0) {
    d31 = +(HEAP32[i5 >> 2] | 0);
   } else {
    d31 = +HEAPF32[i5 >> 2];
   }
   if ((HEAP8[i28 + 82 | 0] & 1) == 0) {
    d32 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d32 = +HEAPF32[i1 >> 2];
   }
   if (d31 == d32) {
    i24 = 0;
    break;
   }
   i24 = (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i5, i1) | 0) ^ 1;
  } else {
   i1 = i3 + 16 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i11 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   i9 = HEAP32[i5 + 120 >> 2] | 0;
   if (i11) {
    if ((i9 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i33 = 0;
    } else {
     i22 = 61;
    }
   } else {
    i22 = 61;
   }
   if ((i22 | 0) == 61) {
    i33 = i9 >>> 1 & 67108863;
   }
   i9 = i7 + 16 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   i2 = (HEAP32[(HEAP32[i13 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
   i8 = HEAP32[i13 + 120 >> 2] | 0;
   if (i2) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i34 = 0;
    } else {
     i22 = 64;
    }
   } else {
    i22 = 64;
   }
   if ((i22 | 0) == 64) {
    i34 = i8 >>> 1 & 67108863;
   }
   if ((i33 | 0) != (i34 | 0)) {
    i24 = 1;
    break;
   }
   i8 = HEAP32[i5 + 128 >> 2] | 0;
   if (i11) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i35 = 0;
    } else {
     i22 = 68;
    }
   } else {
    i22 = 68;
   }
   if ((i22 | 0) == 68) {
    i35 = i8 >>> 1 & 67108863;
   }
   i8 = HEAP32[i13 + 128 >> 2] | 0;
   if (i2) {
    if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
     i36 = 0;
    } else {
     i22 = 71;
    }
   } else {
    i22 = 71;
   }
   if ((i22 | 0) == 71) {
    i36 = i8 >>> 1 & 67108863;
   }
   if ((i35 | 0) != (i36 | 0)) {
    i24 = 1;
    break;
   }
   i8 = i5 + 84 | 0;
   i2 = i13 + 84 | 0;
   i11 = HEAP8[i5 + 89 | 0] | 0;
   if (i11 << 24 >> 24 != (HEAP8[i13 + 89 | 0] | 0)) {
    i24 = 1;
    break;
   }
   if (((HEAP8[i13 + 88 | 0] ^ HEAP8[i5 + 88 | 0]) & 1) != 0) {
    i24 = 1;
    break;
   }
   do {
    if (i11 << 24 >> 24 == 15) {
     i37 = i5;
     i38 = i13;
    } else {
     if ((HEAP8[i5 + 90 | 0] & 1) == 0) {
      d39 = +(HEAP32[i8 >> 2] | 0);
     } else {
      d39 = +HEAPF32[i8 >> 2];
     }
     if ((HEAP8[i13 + 90 | 0] & 1) == 0) {
      d40 = +(HEAP32[i2 >> 2] | 0);
     } else {
      d40 = +HEAPF32[i2 >> 2];
     }
     if (d39 == d40) {
      i37 = i5;
      i38 = i13;
      break;
     }
     if (!(__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i8, i2) | 0)) {
      i24 = 1;
      break L31;
     }
     i37 = HEAP32[i1 >> 2] | 0;
     i38 = HEAP32[i9 >> 2] | 0;
    }
   } while (0);
   i9 = i37 + 92 | 0;
   i1 = i38 + 92 | 0;
   i2 = HEAP8[i37 + 97 | 0] | 0;
   if (i2 << 24 >> 24 != (HEAP8[i38 + 97 | 0] | 0)) {
    i24 = 1;
    break;
   }
   if (((HEAP8[i38 + 96 | 0] ^ HEAP8[i37 + 96 | 0]) & 1) != 0) {
    i24 = 1;
    break;
   }
   if (i2 << 24 >> 24 == 15) {
    i24 = 0;
    break;
   }
   if ((HEAP8[i37 + 98 | 0] & 1) == 0) {
    d41 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d41 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i38 + 98 | 0] & 1) == 0) {
    d42 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d42 = +HEAPF32[i1 >> 2];
   }
   if (d41 == d42) {
    i24 = 0;
    break;
   }
   i24 = (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i1) | 0) ^ 1;
  }
 } while (0);
 i17 = (i24 & 1) << 29;
 i18 = HEAP32[i6 >> 2] | 0;
 i19 = i18 & -536870913;
 i20 = i19 | i17;
 HEAP32[i6 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, d28 = +0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 48 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = i1 | 0;
 i20 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0;
 do {
  if ((i20 | 0) == 0) {
   i21 = 31;
  } else {
   if ((HEAP32[i20 + 20 >> 2] & 1024 | 0) == 0) {
    i21 = 31;
    break;
   }
   i22 = (HEAP32[(__ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0) + 44 >> 2] | 0) == 0;
   i23 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0;
   do {
    if ((i23 | 0) == 0) {
     i24 = 0;
    } else {
     if ((HEAP32[i23 + 20 >> 2] & 1024 | 0) == 0) {
      i24 = 0;
      break;
     }
     i24 = i23;
    }
   } while (0);
   if ((HEAP32[i24 + 20 >> 2] & 128 | 0) == 0) {
    i25 = HEAP32[i24 + 4 >> 2] | 0;
   } else {
    i25 = 0;
   }
   i23 = i25 + 32 | 0;
   if ((HEAP32[i25 + 12 >> 2] & 2048 | 0) == 0) {
    i26 = i23 | 0;
   } else {
    i26 = HEAP32[i23 >> 2] | 0;
   }
   if ((HEAP32[(HEAP32[i26 >> 2] | 0) + 44 >> 2] | 0) == 0) {
    HEAP32[i6 >> 2] = 0;
    d27 = +0;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 856 >> 2] & 127](i6, i1 | 0);
    d27 = +(HEAP32[i6 >> 2] | 0);
   }
   if (i22) {
    HEAP32[i7 >> 2] = 0;
    d28 = +0;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 860 >> 2] & 127](i7, i1 | 0);
    d28 = +(HEAP32[i7 >> 2] | 0);
   }
   i23 = HEAP32[i3 >> 2] | 0;
   d29 = +(HEAP32[i3 + 4 >> 2] | 0) - d27;
   do {
    if (d29 < +2147483647) {
     if (d29 <= +-2147483648) {
      i30 = -2147483648;
      break;
     }
     i30 = ~~d29;
    } else {
     i30 = 2147483647;
    }
   } while (0);
   i22 = HEAP32[i1 + 52 >> 2] | 0;
   d29 = d28 + (d27 + +(HEAP32[i1 + 56 >> 2] | 0));
   do {
    if (d29 < +2147483647) {
     if (d29 <= +-2147483648) {
      i31 = -2147483648;
      break;
     }
     i31 = ~~d29;
    } else {
     i31 = 2147483647;
    }
   } while (0);
   HEAP32[i8 >> 2] = i23;
   HEAP32[i8 + 4 >> 2] = i30;
   HEAP32[i8 + 8 >> 2] = i22;
   HEAP32[i8 + 12 >> 2] = i31;
   if ((i22 | 0) < 1 | (i31 | 0) < 1) {
    break;
   }
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i8);
   i32 = i2 + 8 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   if ((i33 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    i34 = (HEAP32[i2 >> 2] | 0) + (i33 << 4) | 0;
    i35 = i9;
    HEAP32[i34 >> 2] = HEAP32[i35 >> 2];
    HEAP32[i34 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
    HEAP32[i34 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
    HEAP32[i34 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
    HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
    break;
   }
   i35 = i33 + 1 | 0;
   i34 = i2 | 0;
   i36 = HEAP32[i34 >> 2] | 0;
   do {
    if (i36 >>> 0 > i9 >>> 0) {
     i21 = 28;
    } else {
     if ((i36 + (i33 << 4) | 0) >>> 0 <= i9 >>> 0) {
      i21 = 28;
      break;
     }
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i35);
     i37 = HEAP32[i34 >> 2] | 0;
     i38 = i37 + (i9 - i36 >> 4 << 4) | 0;
     i39 = i37;
    }
   } while (0);
   if ((i21 | 0) == 28) {
    __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i35);
    i38 = i9;
    i39 = HEAP32[i34 >> 2] | 0;
   }
   i36 = i39 + (HEAP32[i32 >> 2] << 4) | 0;
   i33 = i38;
   HEAP32[i36 >> 2] = HEAP32[i33 >> 2];
   HEAP32[i36 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
   HEAP32[i36 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
   HEAP32[i36 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + 1;
  }
 } while (0);
 do {
  if ((i21 | 0) == 31) {
   if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 56 >> 2] | 0) == 0) {
    break;
   }
   i38 = i3;
   i39 = HEAP32[i38 + 4 >> 2] | 0;
   i9 = i1 + 52 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i31 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = HEAP32[i38 >> 2];
   HEAP32[i11 + 4 >> 2] = i39;
   i39 = i10 + 8 | 0;
   HEAP32[i39 >> 2] = i8;
   HEAP32[i39 + 4 >> 2] = i31;
   i31 = i2 + 8 | 0;
   i39 = HEAP32[i31 >> 2] | 0;
   if ((i39 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    i8 = (HEAP32[i2 >> 2] | 0) + (i39 << 4) | 0;
    i38 = i10;
    HEAP32[i8 >> 2] = HEAP32[i38 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i38 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i38 + 8 >> 2];
    HEAP32[i8 + 12 >> 2] = HEAP32[i38 + 12 >> 2];
    HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
    break;
   }
   i38 = i39 + 1 | 0;
   i8 = i2 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if (i9 >>> 0 > i12 >>> 0) {
     i21 = 37;
    } else {
     if ((i9 + (i39 << 4) | 0) >>> 0 <= i12 >>> 0) {
      i21 = 37;
      break;
     }
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i38);
     i30 = HEAP32[i8 >> 2] | 0;
     i40 = i30 + (i10 - i9 >> 4 << 4) | 0;
     i41 = i30;
    }
   } while (0);
   if ((i21 | 0) == 37) {
    __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i38);
    i40 = i12;
    i41 = HEAP32[i8 >> 2] | 0;
   }
   i9 = i41 + (HEAP32[i31 >> 2] << 4) | 0;
   i39 = i40;
   HEAP32[i9 >> 2] = HEAP32[i39 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + 1;
  }
 } while (0);
 i40 = i1 + 20 | 0;
 do {
  if ((HEAP32[i40 >> 2] & 65536 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 944 >> 2] & 511](i1 | 0) | 0) {
    break;
   }
   if ((HEAP32[i40 >> 2] & 2097152 | 0) != 0) {
    FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1060 >> 2] & 31](i1, i2, i3, i4);
   }
   i41 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i41 | 0) == 0) {
    break;
   }
   i12 = i3 | 0;
   i21 = i3 + 4 | 0;
   i10 = i16;
   i11 = i16 + 4 | 0;
   i39 = i17 | 0;
   i9 = i17 + 4 | 0;
   i32 = i15 | 0;
   i34 = i15 + 4 | 0;
   i35 = i41;
   while (1) {
    i41 = i35 + 20 | 0;
    do {
     if ((HEAP32[i41 >> 2] & 768 | 0) != 256) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i35 >> 2] | 0) + 108 >> 2] & 511](i35) | 0) {
       break;
      }
      if ((HEAP32[i41 >> 2] & 512 | 0) == 0) {
       break;
      }
      if ((HEAP32[i35 + 40 >> 2] | 0) == 0) {
       d27 = +((HEAP32[i35 + 48 >> 2] | 0) + (HEAP32[i21 >> 2] | 0) | 0);
       HEAPF32[i10 >> 2] = +((HEAP32[i35 + 44 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0);
       HEAPF32[i11 >> 2] = d27;
       i42 = i16;
      } else {
       HEAPF32[i32 >> 2] = +0;
       HEAPF32[i34 >> 2] = +0;
       __ZNK7WebCore12RenderObject21localToContainerPointERKNS_10FloatPointEPKNS_22RenderLayerModelObjectEjPb(i14, i35, i15, i4, 0, 0);
       i42 = i13;
      }
      d27 = +HEAPF32[i42 >> 2];
      i30 = HEAP32[(HEAP32[i35 >> 2] | 0) + 600 >> 2] | 0;
      i7 = ~~+Math_floor(+HEAPF32[i42 + 4 >> 2]);
      HEAP32[i39 >> 2] = ~~+Math_floor(d27);
      HEAP32[i9 >> 2] = i7;
      FUNCTION_TABLE_viiii[i30 & 31](i35, i2, i17, i4);
     }
    } while (0);
    i35 = HEAP32[i35 + 16 >> 2] | 0;
    if ((i35 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i17 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[i17 + 20 >> 2] & 1024 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0;
 do {
  if ((i17 | 0) == 0) {
   i43 = 0;
  } else {
   if ((HEAP32[i17 + 20 >> 2] & 1024 | 0) == 0) {
    i43 = 0;
    break;
   }
   i43 = i17;
  }
 } while (0);
 i17 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i19) | 0;
 do {
  if ((i17 | 0) == 0) {
   i44 = 0;
  } else {
   if ((HEAP32[i17 + 20 >> 2] & 1024 | 0) == 0) {
    i44 = 0;
    break;
   }
   i44 = i17;
  }
 } while (0);
 i17 = (__ZNK7WebCore12RenderObject15containingBlockEv(i44 | 0) | 0) + 44 | 0;
 i44 = i1 + 44 | 0;
 i1 = ~~+Math_floor(+((HEAP32[i17 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i44 + 4 >> 2] | 0) | 0));
 HEAP32[i18 >> 2] = ~~+Math_floor(+((HEAP32[i17 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) - (HEAP32[i44 >> 2] | 0) | 0));
 HEAP32[i18 + 4 >> 2] = i1;
 __ZN7WebCore12RenderInline17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i43, i2, i18, i4);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock18blockSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i12 = i11 | 0;
 i13 = i11 + 64 | 0;
 i14 = i11 + 80 | 0;
 i15 = i11 + 88 | 0;
 i16 = i11 + 96 | 0;
 i17 = i11 + 104 | 0;
 i18 = i11 + 112 | 0;
 i19 = i11 + 128 | 0;
 i20 = i11 + 136 | 0;
 i21 = i11 + 144 | 0;
 i22 = i11 + 152 | 0;
 i23 = i11 + 168 | 0;
 i24 = i11 + 176 | 0;
 i25 = i11 + 184 | 0;
 i26 = i11 + 192 | 0;
 i27 = i11 + 200 | 0;
 i28 = i11 + 208 | 0;
 i29 = i11 + 216 | 0;
 i30 = i11 + 224 | 0;
 i31 = i11 + 272 | 0;
 _memset(i1 | 0, 0, 48) | 0;
 i32 = i2 + 28 | 0;
 while (1) {
  i33 = HEAP32[i32 >> 2] | 0;
  if ((i33 | 0) == 0) {
   i34 = 72;
   break;
  }
  if ((HEAP32[i33 + 20 >> 2] & 234881024 | 0) == 0) {
   i32 = i33 + 16 | 0;
  } else {
   break;
  }
 }
 if ((i34 | 0) == 72) {
  STACKTOP = i11;
  return;
 }
 __ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockERKS0_(i12, i2, i9);
 i32 = i6 | 0;
 i35 = i14 | 0;
 i36 = i7 | 0;
 i37 = i15 | 0;
 i38 = i8 | 0;
 i39 = i16 | 0;
 i40 = i17 | 0;
 i41 = i1 + 16 | 0;
 i42 = i2 + 36 | 0;
 i43 = i2 | 0;
 i44 = i19 | 0;
 i45 = i20 | 0;
 i46 = i21 | 0;
 i47 = i1 | 0;
 i48 = i3 + 20 | 0;
 i49 = i5 + 4 | 0;
 i50 = i5 | 0;
 i51 = i27 | 0;
 i52 = i26 | 0;
 i53 = i29 | 0;
 i54 = i28 | 0;
 i55 = i23 | 0;
 i56 = i24 | 0;
 i57 = i25 | 0;
 i58 = i1 + 32 | 0;
 i1 = i31 | 0;
 i59 = i31 + 4 | 0;
 i60 = i30 | 0;
 i61 = i30 + 16 | 0;
 i62 = i30 + 32 | 0;
 i63 = i33;
 while (1) {
  i33 = HEAP32[i63 + 20 >> 2] | 0;
  i64 = i33 >>> 25 & 7;
  i65 = (i64 - 3 | 0) >>> 0 < 2 >>> 0;
  i66 = i33 & 25165824;
  L9 : do {
   if (!((i33 & 64 | 0) != 0 | (i66 | 0) == 16777216)) {
    do {
     if ((i66 | 0) == 25165824 | (i66 | 0) == 8388608) {
      if ((i33 & 32768 | 0) == 0) {
       break;
      }
      i67 = (HEAP32[i63 + 40 >> 2] | 0) + 88 | 0;
      i68 = HEAP32[i67 >> 2] | 0;
      i69 = HEAP32[i67 + 4 >> 2] | 0;
      i67 = 0;
      if ((i68 | 0) != 0 | (i69 >>> 0 > i67 >>> 0 | i69 >>> 0 == i67 >>> 0 & i68 >>> 0 > -1 >>> 0)) {
       break L9;
      }
     }
    } while (0);
    i68 = i63;
    do {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 540 >> 2] & 511](i63) | 0) {
      i70 = 1;
     } else {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 184 >> 2] & 511](i63) | 0) {
       i70 = 1;
       break;
      }
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i68 >> 2] | 0) + 536 >> 2] & 511](i63) | 0) & (i64 | 0) != 0) {
       i70 = 0;
       break;
      }
      if ((i64 | 0) == 0) {
       break L9;
      }
      i67 = (HEAP32[i63 + 48 >> 2] | 0) + (HEAP32[i49 >> 2] | 0) | 0;
      HEAP32[i1 >> 2] = (HEAP32[i63 + 44 >> 2] | 0) + (HEAP32[i50 >> 2] | 0);
      HEAP32[i59 >> 2] = i67;
      __ZN7WebCore11RenderBlock13selectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i30, i63, i3, i4, i31, i6, i7, i8, i12, i10);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i47, i60);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i41, i61);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i58, i62);
      break L9;
     }
    } while (0);
    if ((i64 - 2 | 0) >>> 0 < 2 >>> 0) {
     HEAP32[i35 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i37 >> 2] = HEAP32[i36 >> 2];
     HEAP32[i39 >> 2] = HEAP32[i38 >> 2];
     i68 = (HEAP32[(HEAP32[i63 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i68 | 0) == 3 | (i68 | 0) == 0) {
      i71 = i63 + 48 | 0;
     } else {
      i71 = i63 + 44 | 0;
     }
     HEAP32[i40 >> 2] = HEAP32[i71 >> 2];
     __ZN7WebCore11RenderBlock17blockSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES8_S8_S8_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i13, i2, i3, i4, i5, i14, i15, i16, i17, i9, i10);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i41, i13);
    }
    if (i70) {
     i72 = (i64 | 0) == 1 | i65 ? 0 : i64;
    } else {
     i72 = i64;
    }
    i68 = HEAP32[(HEAP32[i42 >> 2] | 0) + 40 >> 2] & 1073741824;
    i67 = i68 >>> 30 & 255;
    if ((i72 | 0) == 2) {
     i73 = 1;
     i34 = 25;
    } else {
     i69 = (i72 | 0) == 3;
     i74 = (i68 | 0) == 0;
     if (i74 | i69 ^ 1) {
      i75 = (i72 | 0) == 1 ? i67 ^ 1 : 0;
     } else {
      i75 = 1;
     }
     if ((i72 | 0) != 1 | i74) {
      i76 = i69 ? i67 ^ 1 : 0;
     } else {
      i76 = 1;
     }
     if (i75 << 24 >> 24 == 0) {
      i77 = i76;
     } else {
      i73 = i76;
      i34 = 25;
     }
    }
    if ((i34 | 0) == 25) {
     i34 = 0;
     i67 = (HEAP32[(HEAP32[i63 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i67 | 0) == 3 | (i67 | 0) == 0) {
      i78 = i63 + 44 | 0;
     } else {
      i78 = i63 + 48 | 0;
     }
     HEAP32[i44 >> 2] = HEAP32[i78 >> 2];
     if ((i67 | 0) == 3 | (i67 | 0) == 0) {
      i79 = i63 + 48 | 0;
     } else {
      i79 = i63 + 44 | 0;
     }
     HEAP32[i45 >> 2] = HEAP32[i79 >> 2];
     if ((i67 | 0) == 3 | (i67 | 0) == 0) {
      i80 = i63 + 56 | 0;
     } else {
      i80 = i63 + 52 | 0;
     }
     HEAP32[i46 >> 2] = HEAP32[i80 >> 2];
     __ZN7WebCore11RenderBlock23logicalLeftSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i18, i2, i3, i4, i5, i43, i19, i20, i21, i9, i10);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i47, i18);
     i77 = i73;
    }
    i67 = i63 + 36 | 0;
    if ((i77 & 1) != 0) {
     i69 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i69 | 0) == 3 | (i69 | 0) == 0) {
      i81 = i63 + 44 | 0;
     } else {
      i81 = i63 + 48 | 0;
     }
     if ((i69 | 0) == 3 | (i69 | 0) == 0) {
      i82 = i63 + 52 | 0;
     } else {
      i82 = i63 + 56 | 0;
     }
     HEAP32[i55 >> 2] = (HEAP32[i82 >> 2] | 0) + (HEAP32[i81 >> 2] | 0);
     if ((i69 | 0) == 3 | (i69 | 0) == 0) {
      i83 = i63 + 48 | 0;
     } else {
      i83 = i63 + 44 | 0;
     }
     HEAP32[i56 >> 2] = HEAP32[i83 >> 2];
     if ((i69 | 0) == 3 | (i69 | 0) == 0) {
      i84 = i63 + 56 | 0;
     } else {
      i84 = i63 + 52 | 0;
     }
     HEAP32[i57 >> 2] = HEAP32[i84 >> 2];
     __ZN7WebCore11RenderBlock24logicalRightSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i22, i2, i3, i4, i5, i43, i23, i24, i25, i9, i10);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i58, i22);
    }
    i69 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i85 = i63 + 48 | 0;
    } else {
     i85 = i63 + 44 | 0;
    }
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i86 = i63 + 56 | 0;
    } else {
     i86 = i63 + 52 | 0;
    }
    HEAP32[i32 >> 2] = (HEAP32[i85 >> 2] | 0) + (HEAP32[((HEAP32[i48 >> 2] & 8192 | 0) == 0 ? i50 : i49) >> 2] | 0) + (HEAP32[i86 >> 2] | 0);
    i69 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i87 = i63 + 48 | 0;
    } else {
     i87 = i63 + 44 | 0;
    }
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i88 = i63 + 56 | 0;
    } else {
     i88 = i63 + 52 | 0;
    }
    HEAP32[i51 >> 2] = (HEAP32[i88 >> 2] | 0) + (HEAP32[i87 >> 2] | 0);
    __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i26, i2, i3, i27, i9);
    HEAP32[i36 >> 2] = HEAP32[i52 >> 2];
    i69 = (HEAP32[(HEAP32[i67 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i89 = i63 + 48 | 0;
    } else {
     i89 = i63 + 44 | 0;
    }
    if ((i69 | 0) == 3 | (i69 | 0) == 0) {
     i90 = i63 + 56 | 0;
    } else {
     i90 = i63 + 52 | 0;
    }
    HEAP32[i53 >> 2] = (HEAP32[i90 >> 2] | 0) + (HEAP32[i89 >> 2] | 0);
    __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i28, i2, i3, i29, i9);
    HEAP32[i38 >> 2] = HEAP32[i54 >> 2];
   }
  } while (0);
  i63 = HEAP32[i63 + 16 >> 2] | 0;
  if ((i63 | 0) == 0 | i65) {
   break;
  }
 }
 STACKTOP = i11;
 return;
}
function __ZN7WebCore11RenderBlock25createFirstLetterRendererEPNS_12RenderObjectEPNS_10RenderTextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i3 | 0;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i10 = i9 | 0;
 do {
  if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i12 = HEAP32[i11 + 36 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
    break;
   }
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i12 = HEAP32[i10 + 36 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i9) | 0;
    break;
   }
  }
 } while (0);
 i10 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i2, 2, i12) | 0;
 i12 = i10 + 48 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i11 = (i2 & 100663296 | 0) != 0;
 HEAP32[i12 >> 2] = i11 & 1 | i2 & -29360160;
 if (i11) {
  i11 = __ZN3WTF10fastMallocEj(116) | 0;
  i2 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP32[i6 >> 2] = i10;
  i12 = i10 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i11, i2, i6);
  i13 = i11;
 } else {
  i11 = __ZN3WTF10fastMallocEj(52) | 0;
  i6 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP32[i5 >> 2] = i10;
  i2 = i10 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  __ZN7WebCore12RenderInlineC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i11, i6, i5);
  i13 = i11;
 }
 i11 = i13;
 i5 = i13;
 __ZN7WebCore13RenderElement15initializeStyleEv(i5);
 i6 = i9;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 628 >> 2] & 63](i9, i13, i8);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 628 >> 2] & 127](i7, i3);
 i2 = i7 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[i10 + 4 >> 2] | 0) == 0) {
   i14 = i10;
  } else {
   i12 = 0;
   i15 = i10;
   L19 : while (1) {
    i16 = (i15 | 0) == 0;
    if (i16) {
     i17 = 0;
    } else {
     i17 = HEAP32[i15 + 4 >> 2] | 0;
    }
    if (i12 >>> 0 >= i17 >>> 0) {
     i18 = 30;
     break;
    }
    do {
     if (i16) {
      i19 = 0;
      i18 = 24;
     } else {
      if ((HEAP32[i15 + 4 >> 2] | 0) >>> 0 <= i12 >>> 0) {
       i19 = 0;
       i18 = 24;
       break;
      }
      i20 = i15 + 8 | 0;
      if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
       i21 = HEAP16[(HEAP32[i20 >> 2] | 0) + (i12 << 1) >> 1] | 0;
      } else {
       i21 = HEAPU8[(HEAP32[i20 >> 2] | 0) + i12 | 0] | 0;
      }
      if ((i21 & 65535) >>> 0 >= 128 >>> 0) {
       i22 = (_u_charDirection(i21 & 65535) | 0) == 9;
       i23 = i21;
       i18 = 26;
       break;
      }
      if ((i21 & 65535) >>> 0 >= 33 >>> 0) {
       i22 = 0;
       i23 = i21;
       i18 = 26;
       break;
      }
      if (i21 << 16 >> 16 == 32) {
       i18 = 27;
      } else {
       i19 = i21;
       i18 = 24;
      }
     }
    } while (0);
    if ((i18 | 0) == 24) {
     i18 = 0;
     i22 = (i19 - 9 & 65535) >>> 0 < 5 >>> 0;
     i23 = i19;
     i18 = 26;
    }
    do {
     if ((i18 | 0) == 26) {
      i18 = 0;
      if (i22 | i23 << 16 >> 16 == 160) {
       i18 = 27;
       break;
      }
      i16 = i12 + 1 | 0;
      if ((1 << ((_u_charType(i23 & 65535) | 0) << 24 >> 24) & 816840704 | 0) == 0) {
       i24 = i16;
       i25 = i16;
       break L19;
      } else {
       i26 = i16;
      }
     }
    } while (0);
    if ((i18 | 0) == 27) {
     i18 = 0;
     i26 = i12 + 1 | 0;
    }
    i12 = i26;
    i15 = HEAP32[i2 >> 2] | 0;
   }
   if ((i18 | 0) == 30) {
    i15 = i12 + 1 | 0;
    i24 = i15;
    i25 = i15;
   }
   L46 : while (1) {
    i15 = HEAP32[i2 >> 2] | 0;
    i16 = (i15 | 0) == 0;
    if (i16) {
     i27 = 0;
    } else {
     i27 = HEAP32[i15 + 4 >> 2] | 0;
    }
    if (i24 >>> 0 >= i27 >>> 0) {
     break;
    }
    do {
     if (i16) {
      i28 = 0;
      i18 = 42;
     } else {
      if ((HEAP32[i15 + 4 >> 2] | 0) >>> 0 <= i24 >>> 0) {
       i28 = 0;
       i18 = 42;
       break;
      }
      i20 = i15 + 8 | 0;
      if ((HEAP32[i15 + 16 >> 2] & 32 | 0) == 0) {
       i29 = HEAP16[(HEAP32[i20 >> 2] | 0) + (i24 << 1) >> 1] | 0;
      } else {
       i29 = HEAPU8[(HEAP32[i20 >> 2] | 0) + i24 | 0] | 0;
      }
      if ((i29 & 65535) >>> 0 >= 128 >>> 0) {
       i30 = (_u_charDirection(i29 & 65535) | 0) == 9;
       i31 = i29;
       i18 = 44;
       break;
      }
      if ((i29 & 65535) >>> 0 >= 33 >>> 0) {
       i30 = 0;
       i31 = i29;
       i18 = 44;
       break;
      }
      if (i29 << 16 >> 16 == 32) {
       i32 = 32;
      } else {
       i28 = i29;
       i18 = 42;
      }
     }
    } while (0);
    if ((i18 | 0) == 42) {
     i18 = 0;
     i30 = (i28 - 9 & 65535) >>> 0 < 5 >>> 0;
     i31 = i28;
     i18 = 44;
    }
    do {
     if ((i18 | 0) == 44) {
      i18 = 0;
      if (i30 | i31 << 16 >> 16 == 160) {
       i32 = i31;
       break;
      }
      if ((1 << ((_u_charType(i31 & 65535) | 0) << 24 >> 24) & 816840704 | 0) == 0) {
       break L46;
      } else {
       i32 = i31;
      }
     }
    } while (0);
    i15 = (1 << ((_u_charType(i32 & 65535) | 0) << 24 >> 24) & 816840704 | 0) != 0;
    i16 = i24 + 1 | 0;
    i24 = i16;
    i25 = i15 ? i16 : i25;
   }
   i12 = (__ZNK7WebCore10RenderText8textNodeEv(i3) | 0) == 0;
   i16 = __ZN3WTF10fastMallocEj(76) | 0;
   i15 = i16;
   if (i12) {
    i12 = HEAP32[i2 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i33 = 0;
    } else {
     i33 = HEAP32[i12 + 4 >> 2] | 0;
    }
    __ZN7WebCore18RenderTextFragmentC1ERNS_8DocumentERKN3WTF6StringEii(i15, HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i7, i25, i33 - i25 | 0);
   } else {
    i12 = __ZNK7WebCore10RenderText8textNodeEv(i3) | 0;
    i20 = HEAP32[i2 >> 2] | 0;
    if ((i20 | 0) == 0) {
     i34 = 0;
    } else {
     i34 = HEAP32[i20 + 4 >> 2] | 0;
    }
    __ZN7WebCore18RenderTextFragmentC1ERNS_4TextERKN3WTF6StringEii(i15, i12, i7, i25, i34 - i25 | 0);
   }
   i12 = i16;
   do {
    if ((__ZNK7WebCore10RenderText8textNodeEv(i12) | 0) == 0) {
     i35 = i16;
    } else {
     i20 = __ZNK7WebCore10RenderText8textNodeEv(i12) | 0;
     i36 = i16;
     if ((HEAP32[i20 + 12 >> 2] & 2048 | 0) == 0) {
      HEAP32[i20 + 32 >> 2] = i36;
      i35 = i36;
      break;
     } else {
      HEAP32[HEAP32[i20 + 32 >> 2] >> 2] = i36;
      i35 = i36;
      break;
     }
    }
   } while (0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 628 >> 2] & 63](i9, i35, i8);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 636 >> 2] & 127](i9, i8);
   HEAP32[i16 + 72 >> 2] = i11;
   __ZN7WebCore20RenderBoxModelObject27setFirstLetterRemainingTextEPNS_18RenderTextFragmentE(i11, i15);
   i36 = (__ZNK7WebCore10RenderText8textNodeEv(i12) | 0) == 0;
   i20 = __ZN3WTF10fastMallocEj(76) | 0;
   i37 = i20;
   if (i36) {
    __ZN7WebCore18RenderTextFragmentC1ERNS_8DocumentERKN3WTF6StringEii(i37, HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i7, 0, i25);
   } else {
    __ZN7WebCore18RenderTextFragmentC1ERNS_4TextERKN3WTF6StringEii(i37, __ZNK7WebCore10RenderText8textNodeEv(i12) | 0, i7, 0, i25);
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i13 >> 2] | 0) + 628 >> 2] & 63](i5, i20, 0);
   __ZN7WebCore12RenderObject7destroyEv(i8);
   i20 = HEAP32[i2 >> 2] | 0;
   if ((i20 | 0) != 0) {
    i14 = i20;
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i14 | 0;
 i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i2 >> 2] = i8;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11RenderBlock23layoutPositionedObjectsEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = i1;
 i7 = i4 + ~(i4 << 15) | 0;
 i4 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i4 >>> 6 ^ i4;
 i4 = i7 + ~(i7 << 11) | 0;
 i7 = i4 >>> 16 ^ i4;
 if ((i6 | 0) == 0) {
  return;
 }
 i4 = i5 & i7;
 i8 = i6 + (i4 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) == (i1 | 0)) {
   i10 = i8;
  } else {
   i11 = (i7 >>> 23) + ~i7 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i4;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i5;
    i17 = i6 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i1 | 0)) {
     i10 = i17;
     break L7;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   return;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i10 = i1 + 20 | 0;
 if ((HEAP32[i10 >> 2] & 4194304 | 0) != 0) {
  __ZN7WebCore11LayoutState26clearPaginationInformationEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0);
 }
 i5 = HEAP32[i6 + 20 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i1 + 4 | 0;
  i9 = i1 | 0;
  i4 = i5;
  while (1) {
   i5 = HEAP32[i4 >> 2] | 0;
   __ZNK7WebCore11RenderBlock30estimateRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i5);
   i8 = i5 | 0;
   __ZN7WebCore11RenderBlock40markFixedPositionObjectForLayoutIfNeededERNS_12RenderObjectE(i1, i8);
   do {
    if (i3) {
     if ((HEAP32[i5 + 20 >> 2] & 31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 652 >> 2] & 63](i5 | 0);
    } else {
     do {
      if (i2) {
       i19 = 23;
      } else {
       i14 = HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 16 >> 2] | 0;
       if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
        if ((HEAP8[i14 + 9 | 0] | 0) != 0) {
         break;
        }
        if ((HEAP8[i14 + 17 | 0] | 0) != 0) {
         break;
        }
       } else {
        if ((HEAP8[i14 + 25 | 0] | 0) != 0) {
         break;
        }
        if ((HEAP8[i14 + 33 | 0] | 0) != 0) {
         i19 = 25;
         break;
        }
       }
       if ((HEAP32[i5 + 8 >> 2] | 0) == (i9 | 0)) {
        i19 = 25;
       } else {
        i19 = 23;
       }
      }
     } while (0);
     do {
      if ((i19 | 0) == 23) {
       i19 = 0;
       i14 = i5 + 20 | 0;
       i13 = HEAP32[i14 >> 2] | 0;
       if ((i13 & 4 | 0) != 0) {
        i19 = 25;
        break;
       }
       HEAP32[i14 >> 2] = i13 | 4;
       i19 = 25;
      }
     } while (0);
     do {
      if ((i19 | 0) == 25) {
       i19 = 0;
       if (!i2) {
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 980 >> 2] & 511](i5) | 0)) {
        break;
       }
       __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i8, 1, 0);
      }
     } while (0);
     i13 = i5 + 20 | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 & 31 | 0) == 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 976 >> 2] & 63](i5);
      i20 = HEAP32[i13 >> 2] | 0;
     } else {
      i20 = i14;
     }
     do {
      if ((i20 & 31 | 0) == 2) {
       i14 = i5 + 52 | 0;
       i12 = HEAP32[i14 >> 2] | 0;
       i11 = i5;
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 876 >> 2] & 63](i5);
       if ((i12 | 0) != (HEAP32[i14 >> 2] | 0)) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 880 >> 2] & 63](i5);
       __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i8);
      }
     } while (0);
     i11 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i11 & 31 | 0) == 0) {
       i21 = 0;
       i22 = 0;
      } else {
       i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
       if ((HEAP32[i14 + 8 >> 2] | 0) == 0) {
        if ((HEAP8[i14 | 0] & 2) == 0) {
         i21 = 0;
         i22 = 0;
         break;
        }
        if ((HEAP32[i14 + 60 >> 2] | 0) == 0) {
         i21 = 0;
         i22 = 0;
         break;
        }
       }
       i14 = HEAP32[i5 >> 2] | 0;
       if ((HEAP32[i10 >> 2] & 8192 | 0) != 0 ^ (i11 & 8192 | 0) != 0) {
        FUNCTION_TABLE_vi[HEAP32[i14 + 876 >> 2] & 63](i5);
       } else {
        FUNCTION_TABLE_vi[HEAP32[i14 + 880 >> 2] & 63](i5);
       }
       if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
        i21 = HEAP32[i5 + 44 >> 2] | 0;
        i22 = 1;
        break;
       } else {
        i21 = HEAP32[i5 + 48 >> 2] | 0;
        i22 = 1;
        break;
       }
      }
     } while (0);
     i11 = i5 | 0;
     if ((HEAP32[i13 >> 2] & 31 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 652 >> 2] & 63](i11);
     }
     do {
      if (i22) {
       if ((HEAP32[((HEAP32[i10 >> 2] & 8192 | 0) == 0 ? i5 + 44 | 0 : i5 + 48 | 0) >> 2] | 0) == (i21 | 0)) {
        break;
       }
       i14 = HEAP32[i13 >> 2] | 0;
       if ((i14 & 4 | 0) == 0) {
        i12 = i14 | 4;
        HEAP32[i13 >> 2] = i12;
        i23 = i12;
       } else {
        i23 = i14;
       }
       if ((i23 & 31 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 652 >> 2] & 63](i11);
      }
     } while (0);
     if (!(__ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i5) | 0)) {
      break;
     }
     i14 = HEAP32[i13 >> 2] | 0;
     do {
      if ((i14 & 1 | 0) == 0) {
       i12 = i14 | 1;
       HEAP32[i13 >> 2] = i12;
       if ((i14 & 32768 | 0) == 0) {
        i24 = i12;
        break;
       }
       __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i8);
       i24 = HEAP32[i13 >> 2] | 0;
      } else {
       i24 = i14;
      }
     } while (0);
     if ((i24 & 31 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 652 >> 2] & 63](i11);
    }
   } while (0);
   i4 = HEAP32[i4 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
  }
 }
 if ((HEAP32[i10 >> 2] & 4194304 | 0) == 0) {
  return;
 }
 i10 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i4 = i1 | 0;
 i24 = HEAP32[i10 + 8 >> 2] | 0;
 i23 = HEAP32[i10 >> 2] | 0;
 L90 : do {
  if ((i23 | 0) == 0) {
   i25 = 0;
  } else {
   i10 = i24 & i7;
   i21 = i23 + (i10 << 3) | 0;
   i22 = HEAP32[i21 >> 2] | 0;
   if ((i22 | 0) == (i4 | 0)) {
    i26 = i21;
   } else {
    i21 = (i7 >>> 23) + ~i7 | 0;
    i6 = i21 << 12 ^ i21;
    i21 = i6 >>> 7 ^ i6;
    i6 = i21 << 2 ^ i21;
    i21 = i6 >>> 20 ^ i6 | 1;
    i6 = 0;
    i20 = i10;
    i10 = i22;
    while (1) {
     if ((i10 | 0) == 0) {
      i25 = 0;
      break L90;
     }
     i22 = (i6 | 0) == 0 ? i21 : i6;
     i2 = i22 + i20 & i24;
     i19 = i23 + (i2 << 3) | 0;
     i9 = HEAP32[i19 >> 2] | 0;
     if ((i9 | 0) == (i4 | 0)) {
      i26 = i19;
      break;
     } else {
      i6 = i22;
      i20 = i2;
      i10 = i9;
     }
    }
   }
   if ((i26 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = HEAP32[i26 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0) + 4 >> 2] = i25;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP8[i1 + 120 | 0] & 1) != 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i6 = i1 + 32 | 0;
 i7 = i1 + 36 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 100 | 0;
 if ((HEAP8[i9] & 1) != 0) {
  i4 = i1 + 80 | 0;
  HEAP32[i4 >> 2] = 10;
  i5 = i1 + 64 | 0;
  HEAP32[i5 >> 2] = 10;
  STACKTOP = i2;
  return;
 }
 i10 = i1 + 16 | 0;
 i11 = HEAP32[i1 + 20 >> 2] | 0;
 L10 : do {
  if ((i11 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   HEAP8[i3 + 4 | 0] = 0;
  } else {
   i12 = HEAP32[i10 >> 2] | 0;
   i13 = i11;
   i14 = 0;
   while (1) {
    if ((i13 | 0) == (i12 | 0)) {
     i15 = i14;
     break;
    }
    do {
     if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
      i16 = 0;
     } else {
      if ((HEAP32[i13 + 24 >> 2] & 4 | 0) == 0) {
       i16 = 0;
       break;
      }
      i16 = (((HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7) - 3 | 0) >>> 0 < 3 >>> 0 | 0;
     }
    } while (0);
    i17 = i16 + i14 | 0;
    i18 = HEAP32[i13 + 8 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i15 = i17;
     break;
    } else {
     i13 = i18 | 0;
     i14 = i17;
    }
   }
   i14 = i3 | 0;
   HEAP32[i14 >> 2] = i15;
   i13 = i3 + 4 | 0;
   HEAP8[i13] = 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i12 = i1 + 88 | 0;
   i17 = i1 + 124 | 0;
   i18 = i10 | 0;
   i19 = i11;
   i20 = HEAP32[i1 + 28 >> 2] | 0;
   i21 = i8;
   while (1) {
    if ((i19 | 0) == (i21 | 0)) {
     i22 = 48;
     break;
    }
    if ((i19 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i23 = -1;
     break;
    }
    if ((HEAP32[i14 >> 2] | 0) == 0) {
     __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i17, i20, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 511](i19) | 0, i19, i1);
    } else {
     __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i3, i19, i20, i1);
    }
    if ((i19 | 0) == 0) {
     break L10;
    }
    i24 = HEAP32[i18 >> 2] | 0;
    i25 = i19;
    while (1) {
     i26 = HEAP32[i25 + 20 >> 2] | 0;
     do {
      if ((i26 & 768 | 0) == 256 | (i26 & 4096 | 0) != 0) {
       i22 = 30;
      } else {
       if ((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216 | (i26 & 2048 | 0) != 0) {
        i22 = 30;
        break;
       }
       i27 = HEAP32[i25 + 28 >> 2] | 0;
       i28 = i27;
       if ((i27 | 0) == 0) {
        i22 = 30;
        break;
       }
       if ((HEAP32[i27 + 20 >> 2] & 768 | 0) == 256) {
        i29 = i28;
        break;
       }
       if ((HEAP32[i27 + 24 >> 2] & 4 | 0) == 0) {
        i29 = i28;
        break;
       }
       i30 = (HEAP32[(HEAP32[i27 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
       if (!((i30 | 0) != 0 & (i30 - 3 | 0) >>> 0 < 3 >>> 0)) {
        i29 = i28;
        break;
       }
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       i29 = i28;
      }
     } while (0);
     do {
      if ((i22 | 0) == 30) {
       i22 = 0;
       if ((i25 | 0) == 0) {
        break L10;
       } else {
        i31 = i25;
       }
       while (1) {
        if ((i31 | 0) == (i24 | 0)) {
         break L10;
        }
        do {
         if ((HEAP32[i31 + 20 >> 2] & 768 | 0) != 256) {
          if ((HEAP32[i31 + 24 >> 2] & 4 | 0) == 0) {
           break;
          }
          i26 = (HEAP32[(HEAP32[i31 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
          if (!((i26 | 0) != 0 & (i26 - 3 | 0) >>> 0 < 3 >>> 0)) {
           break;
          }
          i26 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
          HEAP32[i14 >> 2] = i26;
          if ((i26 | 0) != 0) {
           break;
          }
          HEAP8[i13] = 0;
         }
        } while (0);
        i32 = HEAP32[i31 + 16 >> 2] | 0;
        if ((i32 | 0) != 0) {
         break;
        }
        i26 = HEAP32[i31 + 8 >> 2] | 0;
        if ((i26 | 0) == 0) {
         break L10;
        } else {
         i31 = i26 | 0;
        }
       }
       if ((HEAP32[i32 + 20 >> 2] & 768 | 0) == 256) {
        i29 = i32;
        break;
       }
       if ((HEAP32[i32 + 24 >> 2] & 4 | 0) == 0) {
        i29 = i32;
        break;
       }
       i26 = (HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
       if (!((i26 | 0) != 0 & (i26 - 3 | 0) >>> 0 < 3 >>> 0)) {
        i29 = i32;
        break;
       }
       HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
       i29 = i32;
      }
     } while (0);
     i26 = HEAP32[i29 + 20 >> 2] | 0;
     if ((i26 & 768 | 0) == 256 | (i26 & 4096 | 0) != 0) {
      break;
     }
     if ((i26 & 64 | 0) != 0 | (i26 & 25165824 | 0) == 16777216 | (i26 & 2048 | 0) != 0) {
      break;
     }
     if ((HEAP32[i29 + 24 >> 2] & 4 | 0) != 0) {
      if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i29) | 0) {
       break;
      }
     }
     if ((i29 | 0) == 0) {
      break L10;
     } else {
      i25 = i29;
     }
    }
    if ((i29 | 0) == 0) {
     break L10;
    }
    i19 = i29;
    i20 = 0;
    i21 = HEAP32[i7 >> 2] | 0;
   }
   if ((i22 | 0) == 48) {
    i23 = HEAP32[i1 + 44 >> 2] | 0;
   }
   do {
    if ((i19 | 0) == (HEAP32[i12 >> 2] | 0)) {
     i21 = HEAP32[i1 + 96 >> 2] | 0;
     if (i21 >>> 0 > i23 >>> 0) {
      i33 = i23;
      break;
     }
     HEAP8[i9] = 1;
     i33 = i21;
    } else {
     i33 = i23;
    }
   } while (0);
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 524 >> 2] & 511](i19) | 0;
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    __ZN7WebCore15RenderBlockFlow19appendRunsForObjectERNS_11BidiRunListINS_7BidiRunEEEiiPNS_12RenderObjectERNS_12BidiResolverINS_14InlineIteratorES2_EE(i17, i20, (i12 | 0) == 0 ? 0 : i33 + 1 | 0, i19, i1);
    break;
   } else {
    __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i3, i19, i20, i1);
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i33 = i1 + 44 | 0;
   if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
    i23 = (HEAP32[i33 >> 2] | 0) + 1 | 0;
    HEAP32[i33 >> 2] = i23;
    if (i23 >>> 0 < (HEAP32[(HEAP32[i3 + 44 >> 2] | 0) + 4 >> 2] | 0) >>> 0) {
     break;
    }
   }
   HEAP32[i7 >> 2] = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i6 >> 2] | 0, i3, 0, 0, 0) | 0;
   HEAP32[i33 >> 2] = 0;
   HEAP32[i1 + 40 >> 2] = -1;
  }
 } while (0);
 i3 = i10;
 i10 = i6;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i4 = i1 + 80 | 0;
 HEAP32[i4 >> 2] = 10;
 i5 = i1 + 64 | 0;
 HEAP32[i5 >> 2] = 10;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 80 | 0;
 i7 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i7 = i1;
 i10 = i7 + ~(i7 << 15) | 0;
 i7 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i7 >>> 6 ^ i7;
 i7 = i10 + ~(i10 << 11) | 0;
 i10 = i7 >>> 16 ^ i7;
 if ((i9 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = i8 & i10;
 i11 = i9 + (i7 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 L7 : do {
  if ((i12 | 0) == (i1 | 0)) {
   i13 = i11;
  } else {
   i14 = (i10 >>> 23) + ~i10 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = i7;
   i17 = i12;
   while (1) {
    if ((i17 | 0) == 0) {
     break;
    }
    i18 = (i15 | 0) == 0 ? i14 : i15;
    i19 = i18 + i16 & i8;
    i20 = i9 + (i19 << 3) | 0;
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == (i1 | 0)) {
     i13 = i20;
     break L7;
    } else {
     i15 = i18;
     i16 = i19;
     i17 = i21;
    }
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = HEAP32[i13 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = i5 + 12 | 0;
 i9 = i5 | 0;
 HEAP32[i9 >> 2] = i13;
 i8 = i5 + 4 | 0;
 HEAP32[i8 >> 2] = 16;
 i12 = i5 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i1 = (i2 | 0) == 0;
   i7 = (i3 | 0) == 0;
   i10 = i6;
   i11 = i2 | 0;
   i17 = i5;
   L22 : while (1) {
    i16 = HEAP32[i17 >> 2] | 0;
    HEAP32[i6 >> 2] = i16;
    if (i1) {
     i22 = 14;
    } else {
     if (__ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(i16 | 0, i11) | 0) {
      i22 = 14;
     }
    }
    do {
     if ((i22 | 0) == 14) {
      i22 = 0;
      do {
       if (i7) {
        i16 = (HEAP32[i6 >> 2] | 0) + 20 | 0;
        i15 = HEAP32[i16 >> 2] | 0;
        if ((i15 & 4 | 0) != 0) {
         break;
        }
        HEAP32[i16 >> 2] = i15 | 4;
       }
      } while (0);
      i15 = (HEAP32[i6 >> 2] | 0) + 8 | 0;
      while (1) {
       i23 = HEAP32[i15 >> 2] | 0;
       if ((i23 | 0) == 0) {
        break;
       }
       i24 = i23 | 0;
       if ((HEAP32[i23 + 24 >> 2] & 16 | 0) == 0) {
        i15 = i23 + 8 | 0;
       } else {
        i22 = 20;
        break;
       }
      }
      do {
       if ((i22 | 0) == 20) {
        i22 = 0;
        i15 = i23 + 20 | 0;
        i16 = HEAP32[i15 >> 2] | 0;
        if ((i16 & 4 | 0) != 0) {
         break;
        }
        HEAP32[i15 >> 2] = i16 | 4;
        __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i24, 1, 0);
       }
      } while (0);
      i16 = HEAP32[i12 >> 2] | 0;
      if ((i16 | 0) != (HEAP32[i8 >> 2] | 0)) {
       HEAP32[(HEAP32[i9 >> 2] | 0) + (i16 << 2) >> 2] = HEAP32[i6 >> 2];
       HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
       break;
      }
      i15 = i16 + 1 | 0;
      i14 = HEAP32[i9 >> 2] | 0;
      do {
       if (i14 >>> 0 > i6 >>> 0) {
        i22 = 26;
       } else {
        if ((i14 + (i16 << 2) | 0) >>> 0 <= i6 >>> 0) {
         i22 = 26;
         break;
        }
        i21 = i10 - i14 >> 2;
        i19 = i15 + (i16 >>> 2) | 0;
        i18 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
        i19 = i18 >>> 0 > i15 >>> 0 ? i18 : i15;
        do {
         if (i16 >>> 0 < i19 >>> 0) {
          if (i19 >>> 0 > 16 >>> 0) {
           if (i19 >>> 0 > 1073741823 >>> 0) {
            i22 = 40;
            break L22;
           }
           i18 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
           HEAP32[i8 >> 2] = i18 >>> 2;
           i20 = __ZN3WTF10fastMallocEj(i18) | 0;
           HEAP32[i9 >> 2] = i20;
           i25 = i20;
          } else {
           HEAP32[i9 >> 2] = i13;
           HEAP32[i8 >> 2] = 16;
           i25 = i13;
          }
          i20 = i14;
          _memcpy(i25 | 0, i20 | 0, i16 << 2) | 0;
          if ((i13 | 0) == (i14 | 0) | (i14 | 0) == 0) {
           break;
          }
          if ((HEAP32[i9 >> 2] | 0) == (i14 | 0)) {
           HEAP32[i9 >> 2] = 0;
           HEAP32[i8 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i20);
         }
        } while (0);
        i19 = HEAP32[i9 >> 2] | 0;
        i26 = i19 + (i21 << 2) | 0;
        i27 = i19;
       }
      } while (0);
      if ((i22 | 0) == 26) {
       i22 = 0;
       i19 = i15 + (i16 >>> 2) | 0;
       i20 = i19 >>> 0 > 16 >>> 0 ? i19 : 16;
       i19 = i20 >>> 0 > i15 >>> 0 ? i20 : i15;
       do {
        if (i16 >>> 0 < i19 >>> 0) {
         if (i19 >>> 0 > 16 >>> 0) {
          if (i19 >>> 0 > 1073741823 >>> 0) {
           i22 = 29;
           break L22;
          }
          i20 = __ZN3WTF18fastMallocGoodSizeEj(i19 << 2) | 0;
          HEAP32[i8 >> 2] = i20 >>> 2;
          i18 = __ZN3WTF10fastMallocEj(i20) | 0;
          HEAP32[i9 >> 2] = i18;
          i28 = i18;
         } else {
          HEAP32[i9 >> 2] = i13;
          HEAP32[i8 >> 2] = 16;
          i28 = i13;
         }
         i18 = i14;
         _memcpy(i28 | 0, i18 | 0, i16 << 2) | 0;
         if ((i13 | 0) == (i14 | 0) | (i14 | 0) == 0) {
          break;
         }
         if ((HEAP32[i9 >> 2] | 0) == (i14 | 0)) {
          HEAP32[i9 >> 2] = 0;
          HEAP32[i8 >> 2] = 0;
         }
         __ZN3WTF8fastFreeEPv(i18);
        }
       } while (0);
       i26 = i6;
       i27 = HEAP32[i9 >> 2] | 0;
      }
      HEAP32[i27 + (HEAP32[i12 >> 2] << 2) >> 2] = HEAP32[i26 >> 2];
      HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
     }
    } while (0);
    i14 = HEAP32[i17 + 8 >> 2] | 0;
    if ((i14 | 0) == 0) {
     i22 = 11;
     break;
    } else {
     i17 = i14;
    }
   }
   if ((i22 | 0) == 11) {
    if ((HEAP32[i12 >> 2] | 0) == 0) {
     break;
    } else {
     i29 = 0;
    }
    while (1) {
     __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(HEAP32[(HEAP32[i9 >> 2] | 0) + (i29 << 2) >> 2] | 0, H_BASE + 1544, H_BASE + 1552);
     i29 = i29 + 1 | 0;
     i30 = HEAP32[i12 >> 2] | 0;
     if (i29 >>> 0 >= i30 >>> 0) {
      break;
     }
    }
    if ((i30 | 0) == 0) {
     break;
    }
    HEAP32[i12 >> 2] = 0;
    break;
   } else if ((i22 | 0) == 29) {
    _WTFCrash();
   } else if ((i22 | 0) == 40) {
    _WTFCrash();
   }
  }
 } while (0);
 i22 = HEAP32[i9 >> 2] | 0;
 if ((i13 | 0) == (i22 | 0) | (i22 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i22);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock27adjustPointToColumnContentsERNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i9 >> 2] & 4194304 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i10 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i11 = i1 | 0;
 i12 = HEAP32[i10 + 8 >> 2] | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 i10 = i1;
 i14 = i10 + ~(i10 << 15) | 0;
 i10 = (i14 >>> 10 ^ i14) * 9 & -1;
 i14 = i10 >>> 6 ^ i10;
 i10 = i14 + ~(i14 << 11) | 0;
 i14 = i10 >>> 16 ^ i10;
 L4 : do {
  if ((i13 | 0) == 0) {
   i15 = 0;
  } else {
   i10 = i12 & i14;
   i16 = i13 + (i10 << 3) | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == (i11 | 0)) {
    i18 = i16;
   } else {
    i16 = (i14 >>> 23) + ~i14 | 0;
    i19 = i16 << 12 ^ i16;
    i16 = i19 >>> 7 ^ i19;
    i19 = i16 << 2 ^ i16;
    i16 = i19 >>> 20 ^ i19 | 1;
    i19 = 0;
    i20 = i10;
    i10 = i17;
    while (1) {
     if ((i10 | 0) == 0) {
      i15 = 0;
      break L4;
     }
     i17 = (i19 | 0) == 0 ? i16 : i19;
     i21 = i17 + i20 & i12;
     i22 = i13 + (i21 << 3) | 0;
     i23 = HEAP32[i22 >> 2] | 0;
     if ((i23 | 0) == (i11 | 0)) {
      i18 = i22;
      break;
     } else {
      i19 = i17;
      i20 = i21;
      i10 = i23;
     }
    }
   }
   if ((i18 | 0) == 0) {
    i15 = 0;
    break;
   }
   i15 = HEAP32[i18 + 4 >> 2] | 0;
  }
 } while (0);
 i18 = i15 + 16 | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i1 + 36 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 68 >> 2] | 0;
 if ((HEAP8[i12 + 32 | 0] & 4) == 0) {
  d24 = +HEAPF32[i12 + 12 >> 2];
 } else {
  d24 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i13) | 0) + 12 >> 2] + +.5;
 }
 i13 = ~~d24;
 i12 = (i13 | 0) / 2 & -1;
 __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i6, i1, i15, 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = HEAP32[i5 + 4 >> 2] | 0;
 if ((HEAP32[i18 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i1 | 0;
 i10 = i15 + 8 | 0;
 i20 = i4 | 0;
 i19 = i4 + 4 | 0;
 i16 = i4 + 8 | 0;
 i23 = i4 + 12 | 0;
 i21 = i2 + 4 | 0;
 i17 = i2 | 0;
 i22 = 0;
 i25 = 0;
 while (1) {
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i4, i1, i15, i25);
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i5, i4);
  i26 = (HEAP32[i10 >> 2] | 0) == 0;
  i27 = HEAP32[i20 >> 2] | 0;
  if ((HEAP32[i9 >> 2] & 8192 | 0) != 0 ^ i26) {
   i28 = HEAP32[i19 >> 2] | 0;
   i29 = i28 - i12 | 0;
   i30 = HEAP32[i23 >> 2] | 0;
   i31 = HEAP32[i21 >> 2] | 0;
   if ((i31 | 0) < (i29 | 0)) {
    i32 = HEAP32[i16 >> 2] | 0;
   } else {
    i33 = i27 | 0;
    i34 = i29 | 0;
    i35 = HEAP32[i16 >> 2] | 0;
    if ((i31 | 0) < (i29 + i13 + i30 | 0)) {
     i36 = 39;
     break;
    } else {
     i32 = i35;
    }
   }
   i37 = i26 ? i32 : i30;
  } else {
   i38 = i27 - i12 | 0;
   i39 = HEAP32[i19 >> 2] | 0;
   i40 = HEAP32[i16 >> 2] | 0;
   i41 = HEAP32[i17 >> 2] | 0;
   if ((i41 | 0) < (i38 | 0)) {
    i42 = HEAP32[i23 >> 2] | 0;
   } else {
    i43 = i38 | 0;
    i44 = i39 | 0;
    i45 = HEAP32[i23 >> 2] | 0;
    if ((i41 | 0) < (i38 + i13 + i40 | 0)) {
     i36 = 19;
     break;
    } else {
     i42 = i45;
    }
   }
   i37 = i26 ? i42 : i40;
  }
  i46 = i25 + 1 | 0;
  if (i46 >>> 0 < (HEAP32[i18 >> 2] | 0) >>> 0) {
   i22 = i37 + i22 | 0;
   i25 = i46;
  } else {
   i36 = 58;
   break;
  }
 }
 if ((i36 | 0) == 39) {
  do {
   if (i26) {
    i25 = HEAP32[i17 >> 2] | 0;
    if ((i25 | 0) < (i27 | 0)) {
     i37 = i2;
     HEAP32[i37 >> 2] = i33;
     HEAP32[i37 + 4 >> 2] = i34;
     i47 = i29;
     break;
    }
    if ((i25 | 0) < (i35 + i27 | 0)) {
     i47 = i31;
     break;
    }
    i25 = i2;
    HEAP32[i25 >> 2] = i33;
    HEAP32[i25 + 4 >> 2] = i34;
    HEAP32[i17 >> 2] = i27 + i35;
    i47 = i29;
   } else {
    if ((i31 | 0) < (i28 | 0)) {
     HEAP32[i21 >> 2] = i28;
     i47 = i28;
     break;
    }
    i25 = i30 + i28 | 0;
    if ((i31 | 0) < (i25 | 0)) {
     i47 = i31;
     break;
    }
    i37 = i25 - 1 | 0;
    HEAP32[i21 >> 2] = i37;
    i47 = i37;
   }
  } while (0);
  i31 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   if ((i31 | 0) == 3 | (i31 | 0) == 1) {
    i48 = -i22 | 0;
   } else {
    i48 = i22;
   }
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i48;
   HEAP32[i21 >> 2] = i14 - i28 + i47;
   STACKTOP = i3;
   return;
  } else {
   if ((i31 | 0) == 3 | (i31 | 0) == 1) {
    i49 = -i22 | 0;
   } else {
    i49 = i22;
   }
   i31 = i1 | 0;
   i47 = i49 - i28 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 511](i31) | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i8, i31);
   HEAP32[i21 >> 2] = i47 + (HEAP32[i8 >> 2] | 0) + (HEAP32[i21 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 } else if ((i36 | 0) == 19) {
  do {
   if (i26) {
    i8 = HEAP32[i21 >> 2] | 0;
    if ((i8 | 0) < (i39 | 0)) {
     i47 = i2;
     HEAP32[i47 >> 2] = i43;
     HEAP32[i47 + 4 >> 2] = i44;
     i50 = i38;
     break;
    }
    if ((i8 | 0) < (i45 + i39 | 0)) {
     i50 = i41;
     break;
    }
    i8 = i2;
    HEAP32[i8 >> 2] = i43;
    HEAP32[i8 + 4 >> 2] = i44;
    HEAP32[i21 >> 2] = i39 + i45;
    i50 = i38;
   } else {
    if ((i41 | 0) < (i27 | 0)) {
     HEAP32[i17 >> 2] = i27;
     i50 = i27;
     break;
    }
    i8 = i40 + i27 | 0;
    if ((i41 | 0) < (i8 | 0)) {
     i50 = i41;
     break;
    }
    i47 = i8 - 1 | 0;
    HEAP32[i17 >> 2] = i47;
    i50 = i47;
   }
  } while (0);
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   i10 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i10 | 0) == 3 | (i10 | 0) == 1) {
    i51 = -i22 | 0;
   } else {
    i51 = i22;
   }
   HEAP32[i17 >> 2] = i6 - i27 + i50;
   HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i51;
   STACKTOP = i3;
   return;
  } else {
   i51 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i51 | 0) == 3 | (i51 | 0) == 1) {
    i52 = -i22 | 0;
   } else {
    i52 = i22;
   }
   i22 = i1 | 0;
   i51 = i52 - i27 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 511](i22) | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i7, i22);
   HEAP32[i17 >> 2] = i51 + (HEAP32[i7 >> 2] | 0) + (HEAP32[i17 >> 2] | 0);
   STACKTOP = i3;
   return;
  }
 } else if ((i36 | 0) == 58) {
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderBlock29insertIntoTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 32 | 0;
 i10 = i5 + 40 | 0;
 i11 = i5 + 56 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 96 | 0;
 i16 = i5 + 104 | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 if ((i17 | 0) == 0) {
  i18 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i18 | 0, 0, 20) | 0;
  HEAP32[i3 >> 2] = i18;
  i18 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i18 | 0, 0, 20) | 0;
  HEAP32[i4 >> 2] = i18;
  i19 = HEAP32[i3 >> 2] | 0;
 } else {
  i19 = i17;
 }
 i17 = HEAP32[i19 + 8 >> 2] | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 i19 = i1;
 i20 = i19 + ~(i19 << 15) | 0;
 i19 = (i20 >>> 10 ^ i20) * 9 & -1;
 i20 = i19 >>> 6 ^ i19;
 i19 = i20 + ~(i20 << 11) | 0;
 i20 = i19 >>> 16 ^ i19;
 L4 : do {
  if ((i18 | 0) == 0) {
   i21 = 10;
  } else {
   i19 = i17 & i20;
   i22 = i18 + (i19 << 3) | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   if ((i23 | 0) == (i1 | 0)) {
    i24 = i22;
   } else {
    i22 = (i20 >>> 23) + ~i20 | 0;
    i25 = i22 << 12 ^ i22;
    i22 = i25 >>> 7 ^ i25;
    i25 = i22 << 2 ^ i22;
    i22 = i25 >>> 20 ^ i25 | 1;
    i25 = 0;
    i26 = i19;
    i19 = i23;
    while (1) {
     if ((i19 | 0) == 0) {
      i21 = 10;
      break L4;
     }
     i23 = (i25 | 0) == 0 ? i22 : i25;
     i27 = i23 + i26 & i17;
     i28 = i18 + (i27 << 3) | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     if ((i29 | 0) == (i1 | 0)) {
      i24 = i28;
      break;
     } else {
      i25 = i23;
      i26 = i27;
      i19 = i29;
     }
    }
   }
   if ((i24 | 0) == 0) {
    i21 = 10;
    break;
   }
   i19 = HEAP32[i24 + 4 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i21 = 10;
   } else {
    i30 = i19;
   }
  }
 } while (0);
 if ((i21 | 0) == 10) {
  i24 = __ZN3WTF10fastMallocEj(32) | 0;
  i18 = i24;
  _memset(i24 | 0, 0, 28) | 0;
  i17 = __Znwj(200) | 0;
  i20 = i17 + 8 | 0;
  HEAP32[i17 >> 2] = i20;
  HEAP8[i17 + 4 | 0] = 0;
  _memset(i20 | 0, 0, 192) | 0;
  HEAP32[i24 + 28 >> 2] = i17;
  i17 = HEAP32[i3 >> 2] | 0;
  HEAP32[i8 >> 2] = i1;
  HEAP32[i9 >> 2] = i18;
  __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EES4_NS_10PassOwnPtrISC_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SE_SG_SH_SN_SK_EEEEOT0_OT1_(i10, i17 | 0, i8, i9);
  if ((HEAP8[i10 + 8 | 0] & 1) == 0) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE((HEAP32[i10 >> 2] | 0) + 4 | 0, i9) | 0;
  }
  __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i9);
  i30 = i18;
 }
 HEAP32[i11 >> 2] = i2;
 HEAP32[i7 >> 2] = HEAP32[i30 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i6, i30 | 0, i11, i7);
 i7 = HEAP32[HEAP32[i6 >> 2] >> 2] | 0;
 if ((HEAP8[i6 + 8 | 0] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i30 + 24 | 0;
 HEAP32[i7 + 4 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 8 >> 2] = 0;
 i11 = HEAP32[i6 >> 2] | 0;
 if ((i11 | 0) == 0) {
  HEAP32[i30 + 20 >> 2] = i7;
 } else {
  HEAP32[i11 + 8 >> 2] = i7;
 }
 HEAP32[i6 >> 2] = i7;
 i7 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i7 + 8 >> 2] | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 i7 = i2;
 i30 = i7 + ~(i7 << 15) | 0;
 i7 = (i30 >>> 10 ^ i30) * 9 & -1;
 i30 = i7 >>> 6 ^ i7;
 i7 = i30 + ~(i30 << 11) | 0;
 i30 = i7 >>> 16 ^ i7;
 L26 : do {
  if ((i11 | 0) == 0) {
   i21 = 24;
  } else {
   i7 = i6 & i30;
   i18 = i11 + (i7 << 3) | 0;
   i9 = HEAP32[i18 >> 2] | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i31 = i18;
   } else {
    i18 = (i30 >>> 23) + ~i30 | 0;
    i10 = i18 << 12 ^ i18;
    i18 = i10 >>> 7 ^ i10;
    i10 = i18 << 2 ^ i18;
    i18 = i10 >>> 20 ^ i10 | 1;
    i10 = 0;
    i8 = i7;
    i7 = i9;
    while (1) {
     if ((i7 | 0) == 0) {
      i21 = 24;
      break L26;
     }
     i9 = (i10 | 0) == 0 ? i18 : i10;
     i17 = i9 + i8 & i6;
     i3 = i11 + (i17 << 3) | 0;
     i24 = HEAP32[i3 >> 2] | 0;
     if ((i24 | 0) == (i2 | 0)) {
      i31 = i3;
      break;
     } else {
      i10 = i9;
      i8 = i17;
      i7 = i24;
     }
    }
   }
   if ((i31 | 0) == 0) {
    i21 = 24;
    break;
   }
   i7 = HEAP32[i31 + 4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i21 = 24;
   } else {
    i32 = i7;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 24) {
   i31 = __ZN3WTF10fastMallocEj(20) | 0;
   i11 = i31;
   _memset(i31 | 0, 0, 20) | 0;
   i31 = HEAP32[i4 >> 2] | 0;
   HEAP32[i12 >> 2] = i2;
   i6 = i13 | 0;
   HEAP32[i6 >> 2] = i11;
   __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES4_NS_10PassOwnPtrISE_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SJ_SO_SL_EEEEOT0_OT1_(i14, i31 | 0, i12, i13);
   if ((HEAP8[i14 + 8 | 0] & 1) == 0) {
    i31 = (HEAP32[i14 >> 2] | 0) + 4 | 0;
    i30 = HEAP32[i31 >> 2] | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i31 >> 2] = i7;
    if ((i30 | 0) == 0) {
     i32 = i11;
     break;
    }
    i7 = HEAP32[i30 >> 2] | 0;
    if ((i7 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i7);
    }
    __ZN3WTF8fastFreeEPv(i30);
    i32 = i11;
    break;
   } else {
    i30 = HEAP32[i6 >> 2] | 0;
    if ((i30 | 0) == 0) {
     i32 = i11;
     break;
    }
    i6 = HEAP32[i30 >> 2] | 0;
    if ((i6 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i6);
    }
    __ZN3WTF8fastFreeEPv(i30);
    i32 = i11;
    break;
   }
  }
 } while (0);
 HEAP32[i15 >> 2] = i1;
 __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i16, i32 | 0, i15, i15);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock19paintColumnContentsERNS_9PaintInfoERKNS_11LayoutPointEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 200 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 64 | 0;
 i10 = i5 + 72 | 0;
 i11 = i5 + 80 | 0;
 i12 = i5 + 96 | 0;
 i13 = i5 + 144 | 0;
 i14 = i5 + 160 | 0;
 i15 = i5 + 176 | 0;
 i16 = i5 + 192 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 i18 = i1 + 20 | 0;
 i19 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i20 = i1 | 0;
 i21 = HEAP32[i19 + 8 >> 2] | 0;
 i22 = HEAP32[i19 >> 2] | 0;
 i19 = i1;
 i23 = i19 + ~(i19 << 15) | 0;
 i19 = (i23 >>> 10 ^ i23) * 9 & -1;
 i23 = i19 >>> 6 ^ i19;
 i19 = i23 + ~(i23 << 11) | 0;
 i23 = i19 >>> 16 ^ i19;
 i19 = i21 & i23;
 i24 = i22 + (i19 << 3) | 0;
 if ((HEAP32[i24 >> 2] | 0) == (i20 | 0)) {
  i25 = i24;
 } else {
  i24 = (i23 >>> 23) + ~i23 | 0;
  i23 = i24 << 12 ^ i24;
  i24 = i23 >>> 7 ^ i23;
  i23 = i24 << 2 ^ i24;
  i24 = i23 >>> 20 ^ i23 | 1;
  i23 = 0;
  i26 = i19;
  while (1) {
   i19 = (i23 | 0) == 0 ? i24 : i23;
   i27 = i19 + i26 & i21;
   i28 = i22 + (i27 << 3) | 0;
   if ((HEAP32[i28 >> 2] | 0) == (i20 | 0)) {
    i25 = i28;
    break;
   } else {
    i23 = i19;
    i26 = i27;
   }
  }
 }
 i26 = HEAP32[i25 + 4 >> 2] | 0;
 i25 = HEAP32[i26 + 16 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i23 = HEAP32[i1 + 36 >> 2] | 0;
 i22 = HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 68 >> 2] | 0;
 if ((HEAP8[i22 + 32 | 0] & 4) == 0) {
  d29 = +HEAPF32[i22 + 12 >> 2];
 } else {
  d29 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i23) | 0) + 12 >> 2] + +.5;
 }
 __ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv(i9, i1);
 __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i10, i1);
 i23 = i1 | 0;
 i22 = i11 + 4 | 0;
 i21 = i1 | 0;
 i24 = i1;
 i27 = i1;
 i19 = i7 | 0;
 i28 = i9 | 0;
 i9 = i3 | 0;
 i30 = i3 + 4 | 0;
 i3 = i11 | 0;
 i31 = i12;
 i32 = i2;
 i33 = i12 + 4 | 0;
 i34 = i12 + 12 | 0;
 i35 = HEAP32[i10 >> 2] | 0;
 i10 = i12 + 16 | 0;
 i36 = i14;
 i37 = i11;
 i38 = i25 - 1 | 0;
 i39 = (~~d29 | 0) / 2 & -1;
 i40 = i14 + 8 | 0;
 i41 = i14 + 12 | 0;
 i42 = i16 | 0;
 i43 = i16 + 4 | 0;
 i44 = i1;
 i45 = i2 + 20 | 0;
 i2 = i8;
 i46 = i1 + 4 | 0;
 i47 = i12 + 20 | 0;
 i48 = i8 + 20 | 0;
 i49 = i8 + 28 | 0;
 i50 = i1;
 i51 = i1;
 i52 = i6 | 0;
 i53 = HEAP32[i28 >> 2] | 0;
 i54 = Math_imul(i35, i25) | 0;
 i55 = 0;
 i56 = i53;
 while (1) {
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i11, i1, i26, i55);
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i20, i11);
  if ((HEAP32[i18 >> 2] & 8192 | 0) == 0) {
   i57 = HEAP32[i22 >> 2] | 0;
   i58 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 736 >> 2] & 511](i21) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 704 >> 2] & 127](i7, i21);
   i59 = (HEAP32[i19 >> 2] | 0) + i58 | 0;
   i60 = i57;
  } else {
   i57 = HEAP32[i3 >> 2] | 0;
   i58 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 744 >> 2] & 511](i21) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i27 >> 2] | 0) + 712 >> 2] & 127](i6, i21);
   i59 = (HEAP32[i52 >> 2] | 0) + i58 | 0;
   i60 = i57;
  }
  i57 = i60 - i59 | 0;
  i58 = (HEAP32[i18 >> 2] & 8192 | 0) != 0;
  i61 = i58 ? i56 : i57;
  i62 = i58 ? i57 : i56;
  i57 = HEAP32[i30 >> 2] | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + i57;
  _memcpy(i31 | 0, i32 | 0, 48) | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i13, i11);
  __ZN7WebCore7IntRect9intersectERKS0_(i33, i13);
  do {
   if ((HEAP32[i34 >> 2] | 0) >= 1) {
    if ((HEAP32[i10 >> 2] | 0) < 1) {
     break;
    }
    __ZN7WebCore15GraphicsContext4saveEv(i17);
    HEAP32[i36 >> 2] = HEAP32[i37 >> 2];
    HEAP32[i36 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
    HEAP32[i36 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
    HEAP32[i36 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
    do {
     if (i55 >>> 0 < i38 >>> 0) {
      i57 = HEAP32[i40 >> 2] | 0;
      if ((HEAP32[i18 >> 2] & 8192 | 0) == 0) {
       HEAP32[i40 >> 2] = i57;
       HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + i39;
       break;
      } else {
       HEAP32[i40 >> 2] = i57 + i39;
       break;
      }
     }
    } while (0);
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i15, i14);
    __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i17, i15);
    i57 = (HEAP32[i30 >> 2] | 0) + i61 | 0;
    HEAP32[i42 >> 2] = (HEAP32[i9 >> 2] | 0) + i62;
    HEAP32[i43 >> 2] = i57;
    do {
     if (i4) {
      i57 = HEAP32[i45 >> 2] | 0;
      FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i44 >> 2] | 0) + 1092 >> 2] & 31](i1, i12, i16, (i57 | 0) == 8 | (i57 | 0) == 10);
     } else {
      i57 = (HEAP32[i46 >> 2] | 0) + 20 | 0;
      i58 = HEAP32[i18 >> 2] | 0;
      if ((HEAP32[(HEAP32[(HEAP32[i57 >> 2] | 0) + 8 >> 2] | 0) + 328 >> 2] | 0) == 1) {
       if ((i58 & 768 | 0) != 768) {
        break;
       }
      }
      if ((i58 & 2097152 | 0) != 0) {
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i51 >> 2] | 0) + 1096 >> 2] & 63](i1, i12, i16);
       break;
      }
      i58 = HEAP32[i47 >> 2] | 0;
      i63 = (i58 | 0) == 6 ? 5 : i58;
      _memcpy(i2 | 0, i31 | 0, 48) | 0;
      HEAP32[i48 >> 2] = (i63 | 0) == 2 ? 1 : i63;
      i63 = HEAP32[i49 >> 2] | 0;
      if ((i63 | 0) != 0 & (i63 | 0) == (i23 | 0)) {
       HEAP32[i49 >> 2] = 0;
      }
      i63 = HEAP32[(HEAP32[(HEAP32[i57 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
      if ((HEAP32[i63 + 164 >> 2] | 0) < 1) {
       i64 = 0;
      } else {
       i64 = (HEAP32[i63 + 168 >> 2] | 0) > 0;
      }
      FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i50 >> 2] | 0) + 1036 >> 2] & 31](i1, i12, i16, i8, i64);
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i17);
   }
  } while (0);
  i62 = i55 + 1 | 0;
  if (i62 >>> 0 < i25 >>> 0) {
   i55 = i62;
   i56 = i35 + i56 | 0;
  } else {
   break;
  }
 }
 HEAP32[i28 >> 2] = i53 + i54;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 56 | 0;
 i7 = i2 + 72 | 0;
 i8 = i2 + 80 | 0;
 i9 = i2 + 104 | 0;
 i10 = i2 + 112 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) == 0) {
  i11 = HEAP32[i1 + 28 >> 2] | 0;
  if ((i11 | 0) == 0) {
   STACKTOP = i2;
   return;
  } else {
   i12 = i11;
  }
  while (1) {
   i11 = HEAP32[i12 + 20 >> 2] | 0;
   if (!((i11 & 25165824 | 0) == 16777216 | (i11 & 31 | 0) == 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 652 >> 2] & 63](i12);
   }
   i12 = HEAP32[i12 + 16 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
  }
  STACKTOP = i2;
  return;
 }
 _memset(i5 | 0, 0, 28) | 0;
 i12 = __Znwj(3080) | 0;
 i11 = i12 + 8 | 0;
 HEAP32[i12 >> 2] = i11;
 HEAP8[i12 + 4 | 0] = 0;
 _memset(i11 | 0, 0, 3072) | 0;
 i11 = i5 + 28 | 0;
 HEAP32[i11 >> 2] = i12;
 i12 = i1 | 0;
 i13 = i6 | 0;
 HEAP32[i13 >> 2] = i12;
 i14 = i6 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i6 + 8 | 0;
 HEAP8[i15] = 0;
 i6 = HEAP32[i1 + 28 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   HEAP32[i14 >> 2] = 0;
   i16 = 11;
  } else {
   i1 = HEAP32[i6 + 20 >> 2] | 0;
   if ((i1 & 768 | 0) == 256) {
    HEAP32[i14 >> 2] = i6;
    i17 = i6;
   } else {
    do {
     if ((HEAP32[i6 + 24 >> 2] & 4 | 0) == 0) {
      if ((i1 & 4096 | 0) != 0) {
       i18 = i6;
       break;
      }
      if ((i1 & 64 | 0) != 0 | (i1 & 25165824 | 0) == 16777216 | (i1 & 2048 | 0) != 0) {
       i18 = i6;
       break;
      }
      i18 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i12, i6, 0, 1, 0) | 0;
     } else {
      i18 = i6;
     }
    } while (0);
    HEAP32[i14 >> 2] = i18;
    if ((i18 | 0) == 0) {
     i16 = 11;
     break;
    } else {
     i17 = i18;
    }
   }
   i1 = i5 | 0;
   i19 = i3 + 8 | 0;
   i20 = i3 | 0;
   i21 = i5 + 24 | 0;
   i22 = i5 + 20 | 0;
   i23 = i17;
   while (1) {
    i24 = HEAP32[i23 + 20 >> 2] | 0;
    do {
     if ((i24 & 25165824 | 0) == 16777216 | (i24 & 2112 | 0) == 0) {
      if ((i24 & 768 | 0) != 256) {
       if ((HEAP32[i23 + 24 >> 2] & 4 | 0) == 0) {
        break;
       }
       if ((HEAP8[i15] & 1) != 0) {
        break;
       }
      }
      __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i23);
     } else {
      if ((i24 & 31 | 0) != 0) {
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 652 >> 2] & 63](i23);
      }
      i25 = HEAP32[i23 + 84 >> 2] | 0;
      if ((i25 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = __ZN7WebCore9InlineBox4rootEv(i25) | 0;
      HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
      __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i3, i1, i7, i4);
      if ((HEAP8[i19] & 1) == 0) {
       break;
      }
      i25 = HEAP32[HEAP32[i20 >> 2] >> 2] | 0;
      i26 = HEAP32[i21 >> 2] | 0;
      HEAP32[i25 + 4 >> 2] = i26;
      HEAP32[i25 + 8 >> 2] = 0;
      if ((i26 | 0) == 0) {
       HEAP32[i22 >> 2] = i25;
      } else {
       HEAP32[i26 + 8 >> 2] = i25;
      }
      HEAP32[i21 >> 2] = i25;
     }
    } while (0);
    i23 = __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(HEAP32[i13 >> 2] | 0, HEAP32[i14 >> 2] | 0, 0, 1, i15) | 0;
    HEAP32[i14 >> 2] = i23;
    if ((i23 | 0) == 0) {
     break;
    }
   }
   i23 = HEAP32[i22 >> 2] | 0;
   _memset(i8 | 0, 0, 20) | 0;
   if ((i23 | 0) == 0) {
    i27 = i22;
    break;
   }
   i21 = i9 | 0;
   i20 = i10 | 0;
   i19 = i23;
   while (1) {
    i23 = HEAP32[i19 >> 2] | 0;
    HEAP32[i21 >> 2] = HEAP32[i23 + 72 >> 2];
    HEAP32[i20 >> 2] = HEAP32[i23 + 76 >> 2];
    __ZN7WebCore13InlineFlowBox15computeOverflowENS_10LayoutUnitES1_RN3WTF7HashMapIPKNS_13InlineTextBoxENSt3__14pairINS2_6VectorIPKNS_14SimpleFontDataELj0ENS2_15CrashOnOverflowEEENS_13GlyphOverflowEEENS2_7PtrHashIS6_EENS2_10HashTraitsIS6_EENSJ_ISG_EEEE(i23 | 0, i9, i10, i8);
    i19 = HEAP32[i19 + 8 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
   }
   i19 = HEAP32[i8 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i27 = i22;
    break;
   }
   i20 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i20 | 0) > 0) {
    i21 = 0;
    while (1) {
     do {
      if ((HEAP32[i19 + (i21 * 36 & -1) >> 2] | 0) != -1) {
       i23 = i19 + (i21 * 36 & -1) + 12 | 0;
       if ((HEAP32[i23 >> 2] | 0) != 0) {
        HEAP32[i23 >> 2] = 0;
       }
       i23 = i19 + (i21 * 36 & -1) + 4 | 0;
       i1 = HEAP32[i23 >> 2] | 0;
       if ((i1 | 0) == 0) {
        break;
       }
       HEAP32[i23 >> 2] = 0;
       HEAP32[i19 + (i21 * 36 & -1) + 8 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i1);
      }
     } while (0);
     i21 = i21 + 1 | 0;
     if ((i21 | 0) >= (i20 | 0)) {
      break;
     }
    }
   }
   __ZN3WTF8fastFreeEPv(i19);
   i27 = i22;
  }
 } while (0);
 if ((i16 | 0) == 11) {
  _memset(i8 | 0, 0, 20) | 0;
  i27 = i5 + 20 | 0;
 }
 i8 = HEAP32[i27 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i27 = HEAP32[i11 >> 2] | 0;
  i16 = i27 + 8 | 0;
  i10 = i16;
  i9 = i16 + 3072 | 0;
  i16 = i27 | 0;
  i27 = i8;
  while (1) {
   i8 = i27 + 8 | 0;
   i14 = HEAP32[i8 >> 2] | 0;
   if (i10 >>> 0 <= i27 >>> 0 & i9 >>> 0 > i27 >>> 0) {
    HEAP32[i8 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i16 >> 2] = i27;
   } else {
    __ZN3WTF8fastFreeEPv(i27);
   }
   if ((i14 | 0) == 0) {
    break;
   } else {
    i27 = i14;
   }
  }
 }
 i27 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 if ((i27 | 0) != 0) {
  __ZdlPv(i27);
 }
 i27 = HEAP32[i5 >> 2] | 0;
 if ((i27 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF8fastFreeEPv(i27);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4takeERKS4_(i7, i13, i8);
 i8 = i7 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i13 = HEAP32[i7 >> 2] | 0;
 i3 = HEAP32[i7 + 4 >> 2] | 0;
 i14 = i13 + (i3 << 2) | 0;
 do {
  if ((HEAP32[i7 + 12 >> 2] | 0) == 0) {
   i15 = i7;
  } else {
   L9 : do {
    if ((i3 | 0) == 0) {
     i16 = i13;
     i17 = 7;
    } else {
     i18 = i13;
     while (1) {
      i19 = HEAP32[i18 >> 2] | 0;
      if (!((i19 | 0) == (-1 | 0) | (i19 | 0) == 0)) {
       i16 = i18;
       i17 = 7;
       break L9;
      }
      i19 = i18 + 4 | 0;
      if ((i19 | 0) == (i14 | 0)) {
       i20 = i7;
       break;
      } else {
       i18 = i19;
      }
     }
    }
   } while (0);
   do {
    if ((i17 | 0) == 7) {
     if ((i16 | 0) == (i14 | 0)) {
      i20 = i7;
      break;
     }
     i18 = i9;
     i19 = i6 + 4 | 0;
     i21 = i16;
     L16 : while (1) {
      i22 = HEAP32[i2 >> 2] | 0;
      HEAP32[i11 >> 2] = HEAP32[i21 >> 2];
      __ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4findERKS4_(i10, i22, i11);
      i22 = HEAP32[i2 >> 2] | 0;
      i23 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i23 | 0) != ((HEAP32[i22 >> 2] | 0) + (HEAP32[i22 + 4 >> 2] << 3) | 0)) {
        i24 = HEAP32[i23 + 4 >> 2] | 0;
        HEAP32[i12 >> 2] = i1;
        __ZN3WTF11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS3_EEE4findERKS3_(i6, i24, i12);
        i25 = HEAP32[i19 >> 2] | 0;
        L20 : do {
         if ((i25 | 0) != 0) {
          HEAP32[i5 >> 2] = i25;
          __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_(i24 | 0, i5);
          i26 = i25 + 4 | 0;
          i27 = HEAP32[i26 >> 2] | 0;
          i28 = i25 + 8 | 0;
          i29 = HEAP32[i28 >> 2] | 0;
          if ((i27 | 0) == 0) {
           HEAP32[i24 + 20 >> 2] = i29;
          } else {
           HEAP32[i27 + 8 >> 2] = i29;
          }
          i29 = HEAP32[i28 >> 2] | 0;
          i27 = HEAP32[i26 >> 2] | 0;
          if ((i29 | 0) == 0) {
           HEAP32[i24 + 24 >> 2] = i27;
          } else {
           HEAP32[i29 + 4 >> 2] = i27;
          }
          i27 = HEAP32[i24 + 28 >> 2] | 0;
          i29 = i27 + 8 | 0;
          do {
           if (i29 >>> 0 <= i25 >>> 0) {
            if ((i29 + 192 | 0) >>> 0 <= i25 >>> 0) {
             break;
            }
            i26 = i27 | 0;
            HEAP32[i28 >> 2] = HEAP32[i26 >> 2];
            HEAP32[i26 >> 2] = i25;
            break L20;
           }
          } while (0);
          __ZN3WTF8fastFreeEPv(i25);
         }
        } while (0);
        if ((HEAP32[i24 + 12 >> 2] | 0) != 0) {
         break;
        }
        i25 = HEAP32[i2 >> 2] | 0;
        i28 = HEAP32[i9 >> 2] | 0;
        i27 = i25 + 4 | 0;
        if ((i28 | 0) == ((HEAP32[i25 >> 2] | 0) + (HEAP32[i27 >> 2] << 3) | 0)) {
         break;
        }
        __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i28 + 4 | 0);
        HEAP32[i28 >> 2] = -1;
        i28 = i25 + 16 | 0;
        HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
        i28 = i25 + 12 | 0;
        i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
        HEAP32[i28 >> 2] = i29;
        i28 = HEAP32[i27 >> 2] | 0;
        if (!((i29 * 6 & -1 | 0) < (i28 | 0) & (i28 | 0) > 8)) {
         break;
        }
        __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i25 | 0, (i28 | 0) / 2 & -1, 0) | 0;
       }
      } while (0);
      i23 = i21 + 4 | 0;
      if ((i23 | 0) == (i14 | 0)) {
       break;
      } else {
       i30 = i23;
      }
      while (1) {
       i23 = HEAP32[i30 >> 2] | 0;
       if (!((i23 | 0) == (-1 | 0) | (i23 | 0) == 0)) {
        break;
       }
       i23 = i30 + 4 | 0;
       if ((i23 | 0) == (i14 | 0)) {
        break L16;
       } else {
        i30 = i23;
       }
      }
      if ((i30 | 0) == (i14 | 0)) {
       break;
      } else {
       i21 = i30;
      }
     }
     i20 = HEAP32[i8 >> 2] | 0;
    }
   } while (0);
   if ((i20 | 0) != 0) {
    i15 = i20;
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i20 = HEAP32[i15 >> 2] | 0;
 if ((i20 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i20);
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i5;
 i7 = i1 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i9 = i1 + 56 | 0;
 } else {
  i9 = i1 + 52 | 0;
 }
 if ((HEAP32[i9 >> 2] | 0) > 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i9 = i1 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 511](i9) | 0) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i8 = i1 | 0;
 i11 = i1;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 511](i8) | 0;
 i13 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 720 >> 2] & 127](i4, i8);
 i14 = (HEAP32[i4 >> 2] | 0) + i12 | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 756 >> 2] & 511](i8) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 724 >> 2] & 127](i3, i8);
 if ((i14 + i12 | 0) != (-(HEAP32[i3 >> 2] | 0) | 0)) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
  i15 = i12 + 36 | 0;
  i16 = i12;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
  i15 = i12 + 20 | 0;
  i16 = i12;
 }
 i12 = HEAP8[i15 + 5 | 0] | 0;
 if ((i12 << 24 >> 24 | 0) == 10) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 } else if ((i12 << 24 >> 24 | 0) != 15) {
  i17 = 11;
 }
 do {
  if ((i17 | 0) == 11) {
   if ((HEAP8[i15 + 6 | 0] & 1) == 0) {
    d18 = +(HEAP32[i15 >> 2] | 0);
   } else {
    d18 = +HEAPF32[i15 >> 2];
   }
   if (d18 > +0) {
    i10 = 0;
   } else {
    break;
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 i15 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 292 >> 2] | 0;
 if ((i15 & 201326592 | 0) == 67108864 | (i15 & 805306368 | 0) == 268435456) {
  i10 = 0;
  STACKTOP = i2;
  return i10 | 0;
 }
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i19 = i16 + 12 | 0;
 } else {
  i19 = i16 + 4 | 0;
 }
 i16 = i19;
 i19 = HEAP32[i16 >> 2] | 0;
 i7 = HEAP32[i16 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i19;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i19 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
  i19 = i6 + 5 | 0;
  i20 = HEAP8[i19] | 0;
  i21 = i19;
 } else {
  i20 = (i7 >>> 8 | 0 << 24) & 255;
  i21 = i6 + 5 | 0;
 }
 i7 = i20 << 24 >> 24 == 0;
 do {
  if ((i20 << 24 >> 24 | 0) == 10 | (i20 << 24 >> 24 | 0) == 2) {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 664 >> 2] | 0) == 0) {
    if (i7) {
     i17 = 39;
     break;
    } else {
     i17 = 35;
     break;
    }
   }
   i19 = __ZNK7WebCore12RenderObject15containingBlockEv(i9) | 0;
   i16 = 1;
   while (1) {
    i15 = i19 | 0;
    if ((HEAP32[i19 + 20 >> 2] & 768 | 0) == 768) {
     break;
    }
    i3 = HEAP32[i19 + 36 >> 2] | 0;
    i12 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i12 | 0) == 3 | (i12 | 0) == 0) {
     i22 = (HEAP32[i3 + 4 >> 2] | 0) + 12 | 0;
    } else {
     i22 = (HEAP32[i3 + 4 >> 2] | 0) + 4 | 0;
    }
    if ((HEAP8[i22 + 5 | 0] | 0) == 3) {
     i17 = 31;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 188 >> 2] & 511](i15) | 0) {
      i17 = 31;
     } else {
      i23 = i16;
     }
    }
    if ((i17 | 0) == 31) {
     i17 = 0;
     i23 = 0;
    }
    i19 = __ZNK7WebCore12RenderObject15containingBlockEv(i15) | 0;
    i16 = i23;
   }
   if ((i16 & 1) == 0) {
    i17 = 35;
   } else {
    i17 = 39;
   }
  } else if ((i20 << 24 >> 24 | 0) == 0) {
   i17 = 39;
  } else {
   i17 = 35;
  }
 } while (0);
 do {
  if ((i17 | 0) == 35) {
   i20 = HEAP8[i21] | 0;
   if ((i20 << 24 >> 24 | 0) == 10) {
    i24 = 0;
    break;
   } else if (!((i20 << 24 >> 24 | 0) == 3 | (i20 << 24 >> 24 | 0) == 2)) {
    i25 = 0;
    i26 = i20;
    i17 = 46;
    break;
   }
   if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     i17 = 39;
     break;
    } else {
     i27 = 0;
     i17 = 45;
     break;
    }
   } else {
    if (+HEAPF32[i5 >> 2] != +0) {
     i27 = 0;
     i17 = 45;
     break;
    } else {
     i17 = 39;
     break;
    }
   }
  }
 } while (0);
 L63 : do {
  if ((i17 | 0) == 39) {
   if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
    i27 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1084 >> 2] & 511](i1) | 0) ^ 1;
    i17 = 45;
    break;
   }
   i5 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i27 = 1;
    i17 = 45;
    break;
   } else {
    i28 = i5;
   }
   while (1) {
    i5 = HEAP32[i28 + 20 >> 2] | 0;
    if (!((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216)) {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 852 >> 2] & 511](i28) | 0)) {
      i27 = 0;
      i17 = 45;
      break L63;
     }
    }
    i5 = HEAP32[i28 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i27 = 1;
     i17 = 45;
     break;
    } else {
     i28 = i5;
    }
   }
  }
 } while (0);
 if ((i17 | 0) == 45) {
  i25 = i27;
  i26 = HEAP8[i21] | 0;
  i17 = 46;
 }
 do {
  if ((i17 | 0) == 46) {
   if (i26 << 24 >> 24 == 10) {
    i24 = i25;
    break;
   } else {
    i10 = i25;
   }
   STACKTOP = i2;
   return i10 | 0;
  }
 } while (0);
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 i10 = i24;
 STACKTOP = i2;
 return i10 | 0;
}
function __ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 88 | 0;
 i14 = i3 + 104 | 0;
 i15 = i3 + 120 | 0;
 i16 = i1 + 20 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((i17 & 4194304 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i18 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i19 = i1 | 0;
 i20 = HEAP32[i18 + 8 >> 2] | 0;
 i21 = HEAP32[i18 >> 2] | 0;
 i18 = i1;
 i22 = i18 + ~(i18 << 15) | 0;
 i18 = (i22 >>> 10 ^ i22) * 9 & -1;
 i22 = i18 >>> 6 ^ i18;
 i18 = i22 + ~(i22 << 11) | 0;
 i22 = i18 >>> 16 ^ i18;
 L4 : do {
  if ((i21 | 0) == 0) {
   i23 = 0;
  } else {
   i18 = i20 & i22;
   i24 = i21 + (i18 << 3) | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   if ((i25 | 0) == (i19 | 0)) {
    i26 = i24;
   } else {
    i24 = (i22 >>> 23) + ~i22 | 0;
    i27 = i24 << 12 ^ i24;
    i24 = i27 >>> 7 ^ i27;
    i27 = i24 << 2 ^ i24;
    i24 = i27 >>> 20 ^ i27 | 1;
    i27 = 0;
    i28 = i18;
    i18 = i25;
    while (1) {
     if ((i18 | 0) == 0) {
      i23 = 0;
      break L4;
     }
     i25 = (i27 | 0) == 0 ? i24 : i27;
     i29 = i25 + i28 & i20;
     i30 = i21 + (i29 << 3) | 0;
     i31 = HEAP32[i30 >> 2] | 0;
     if ((i31 | 0) == (i19 | 0)) {
      i26 = i30;
      break;
     } else {
      i27 = i25;
      i28 = i29;
      i18 = i31;
     }
    }
   }
   if ((i26 | 0) == 0) {
    i23 = 0;
    break;
   }
   i23 = HEAP32[i26 + 4 >> 2] | 0;
  }
 } while (0);
 i26 = HEAP32[i23 + 16 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = i7;
 _memset(i19 | 0, 0, 16) | 0;
 i21 = (i17 & 8192 | 0) != 0;
 i17 = i1 | 0;
 i20 = i1;
 i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 752 >> 2] & 511](i17) | 0;
 i18 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 720 >> 2] & 127](i4, i17);
 i28 = (HEAP32[i4 >> 2] | 0) + i22 | 0;
 HEAP32[i8 >> 2] = i28;
 i22 = HEAP32[i23 + 20 >> 2] | 0;
 if ((i22 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i21) {
  i4 = HEAP32[i2 + 4 >> 2] | 0;
  HEAP32[i9 >> 2] = i4;
  i27 = i8;
  i32 = i27;
  i33 = (i4 | 0) < (i28 | 0) ? i27 : i9;
  i34 = (HEAP32[i2 + 12 >> 2] | 0) + i4 | 0;
 } else {
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i9 >> 2] = i4;
  i27 = i8;
  i32 = i27;
  i33 = (i4 | 0) < (i28 | 0) ? i27 : i9;
  i34 = (HEAP32[i2 + 8 >> 2] | 0) + i4 | 0;
 }
 i4 = HEAP32[i33 >> 2] | 0;
 HEAP32[i10 >> 2] = i34;
 i33 = i28 + (Math_imul(i22, i26 >>> 0 < 2147483647 >>> 0 ? i26 : 2147483647) | 0) | 0;
 HEAP32[i11 >> 2] = i33;
 i26 = (i33 | 0) < (i34 | 0) ? i11 : i10;
 i10 = (i4 - i28 | 0) / (i22 | 0) & -1;
 i4 = ((HEAP32[((HEAP32[i26 >> 2] | 0) < (i28 | 0) ? i32 : i26) >> 2] | 0) - i28 | 0) / (i22 | 0) & -1;
 if ((i10 | 0) == (i4 | 0)) {
  i26 = HEAP32[i20 >> 2] | 0;
  if ((HEAP32[i16 >> 2] & 8192 | 0) == 0) {
   i16 = FUNCTION_TABLE_ii[HEAP32[i26 + 736 >> 2] & 511](i17) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 704 >> 2] & 127](i6, i17);
   i35 = (HEAP32[i6 >> 2] | 0) + i16 | 0;
  } else {
   i16 = FUNCTION_TABLE_ii[HEAP32[i26 + 744 >> 2] & 511](i17) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 712 >> 2] & 127](i5, i17);
   i35 = (HEAP32[i5 >> 2] | 0) + i16 | 0;
  }
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i12, i1, i23, i10);
  i16 = i13;
  i5 = i2;
  HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i16 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i16 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i16 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  do {
   if ((HEAP32[i23 + 8 >> 2] | 0) == 0) {
    if (i21) {
     i16 = Math_imul(i10, i22) | 0;
     i17 = i13 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i12 >> 2] | 0) - i35 + (HEAP32[i17 >> 2] | 0);
     i17 = i13 + 4 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i16;
     break;
    } else {
     i16 = Math_imul(i10, i22) | 0;
     i17 = (HEAP32[i12 + 4 >> 2] | 0) - i35 | 0;
     i18 = i13 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - i16;
     i16 = i13 + 4 | 0;
     HEAP32[i16 >> 2] = i17 + (HEAP32[i16 >> 2] | 0);
     break;
    }
   } else {
    if (i21) {
     i16 = (HEAP32[i12 + 4 >> 2] | 0) - (Math_imul(i10 >>> 0 < 2147483647 >>> 0 ? i10 : 2147483647, i22) | 0) - i28 | 0;
     i17 = i13 + 4 | 0;
     HEAP32[i17 >> 2] = i16 + (HEAP32[i17 >> 2] | 0);
     break;
    } else {
     i17 = (HEAP32[i12 >> 2] | 0) - (Math_imul(i10 >>> 0 < 2147483647 >>> 0 ? i10 : 2147483647, i22) | 0) - i28 | 0;
     i16 = i13 | 0;
     HEAP32[i16 >> 2] = i17 + (HEAP32[i16 >> 2] | 0);
     break;
    }
   }
  } while (0);
  __ZN7WebCore10LayoutRect9intersectERKS0_(i13, i12);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i7, i13);
  i36 = i5;
 } else {
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i14, i1, i23, i10);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i7, i14);
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i15, i1, i23, i4);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i7, i15);
  i36 = i2;
 }
 HEAP32[i36 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i36 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
 HEAP32[i36 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
 HEAP32[i36 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
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
 i18 = i1 | 0;
 i19 = i1 | 0;
 if (!((HEAP32[i1 + 20 >> 2] & 2048 | 0) != 0 & (i5 | 0) == 0)) {
  do {
   if (i3) {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
     i20 = HEAP32[i1 + 36 >> 2] | 0;
     break;
    } else {
     i20 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i19) | 0;
     break;
    }
   } else {
    i20 = HEAP32[i1 + 36 >> 2] | 0;
   }
  } while (0);
  i19 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i20) | 0;
  i20 = i19 + 4 | 0;
  i21 = _round(+(+HEAPF32[i20 >> 2])) | 0;
  i22 = i19 + 8 | 0;
  if ((i2 | 0) == 0) {
   i23 = i21;
  } else {
   i19 = (_round(+(+HEAPF32[i22 >> 2])) | 0) + i21 | 0;
   i21 = _round(+(+HEAPF32[i20 >> 2])) | 0;
   i23 = i19 + (((_round(+(+HEAPF32[i22 >> 2])) | 0) + i21 | 0) / -2 & -1) | 0;
  }
  __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i17, i1, i3, i4, i5);
  i5 = _round(+(+HEAPF32[i20 >> 2])) | 0;
  i20 = _round(+(+HEAPF32[i22 >> 2])) | 0;
  i24 = (((HEAP32[i17 >> 2] | 0) - (i20 + i5) | 0) / 2 & -1) + i23 | 0;
  STACKTOP = i6;
  return i24 | 0;
 }
 i23 = i1 + 36 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) != 0) {
   i5 = __ZNK7WebCore12RenderObject5themeEv(i18) | 0;
   if (__ZNK7WebCore11RenderTheme18isControlContainerENS_11ControlPartE(i5, HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63) | 0) {
    break;
   }
   i5 = __ZNK7WebCore12RenderObject5themeEv(i18) | 0;
   i24 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 31](i5, i18) | 0;
   STACKTOP = i6;
   return i24 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i25 = 12;
  } else {
   if ((HEAP32[i5 + 160 >> 2] | 0) != 0) {
    i26 = -1;
    i25 = 17;
    break;
   }
   if ((i4 | 0) != 0) {
    if ((HEAP32[i5 + 128 >> 2] | 0) != 0) {
     i26 = -1;
     i25 = 17;
     break;
    }
    if ((HEAP32[i5 + 12 >> 2] | 0) == (-(HEAP32[i5 + 112 >> 2] | 0) | 0)) {
     i25 = 12;
     break;
    } else {
     i26 = -1;
     i25 = 17;
     break;
    }
   }
   if ((HEAP32[i5 + 132 >> 2] | 0) == 0) {
    if ((HEAP32[i5 + 16 >> 2] | 0) == (-(HEAP32[i5 + 116 >> 2] | 0) | 0)) {
     i25 = 12;
     break;
    }
   }
   i27 = -1;
   i28 = i1 | 0;
   i29 = HEAP32[i1 >> 2] | 0;
   i25 = 18;
  }
 } while (0);
 do {
  if ((i25 | 0) == 12) {
   i5 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i25 = 14;
   } else {
    if (((HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
     i25 = 14;
    }
   }
   if ((i25 | 0) == 14) {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 511](i18) | 0)) {
     i26 = -1;
     i25 = 17;
     break;
    }
   }
   i26 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 968 >> 2] & 31](i1, i4) | 0;
   i25 = 17;
  }
 } while (0);
 do {
  if ((i25 | 0) == 17) {
   i18 = i1 | 0;
   i23 = HEAP32[i1 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i27 = i26;
    i28 = i18;
    i29 = i23;
    i25 = 18;
    break;
   }
   i5 = FUNCTION_TABLE_ii[HEAP32[i23 + 748 >> 2] & 511](i18) | 0;
   i23 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 716 >> 2] & 127](i14, i18);
   i20 = (HEAP32[i14 >> 2] | 0) + i5 | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i10, i1 | 0);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 712 >> 2] & 127](i11, i18);
   i5 = HEAP32[i10 >> 2] | 0;
   i17 = HEAP32[i11 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 716 >> 2] & 127](i12, i18);
   i30 = i20 + i5 - i17 - (HEAP32[i12 >> 2] | 0) | 0;
   i31 = i26;
   i32 = 0;
  }
 } while (0);
 if ((i25 | 0) == 18) {
  i25 = FUNCTION_TABLE_ii[HEAP32[i29 + 736 >> 2] & 511](i28) | 0;
  i29 = i1;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 704 >> 2] & 127](i13, i28);
  i28 = (HEAP32[i13 >> 2] | 0) + i25 | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i1 | 0);
  i25 = i1 | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 704 >> 2] & 127](i8, i25);
  i13 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 708 >> 2] & 127](i9, i25);
  i30 = i28 + i13 - i7 - (HEAP32[i9 >> 2] | 0) | 0;
  i31 = i27;
  i32 = 1;
 }
 i27 = i1 | 0;
 if (!((i31 | 0) != -1 & (i30 | 0) >= (i31 | 0))) {
  i24 = __ZNK7WebCore9RenderBox16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE(i27, i2, i3, i4, 0) | 0;
  STACKTOP = i6;
  return i24 | 0;
 }
 i4 = HEAP32[i1 >> 2] | 0;
 if (i32) {
  FUNCTION_TABLE_vii[HEAP32[i4 + 768 >> 2] & 127](i15, i27);
  i24 = (HEAP32[i15 >> 2] | 0) + i31 | 0;
  STACKTOP = i6;
  return i24 | 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[i4 + 780 >> 2] & 127](i16, i27);
  i24 = (HEAP32[i16 >> 2] | 0) + i31 | 0;
  STACKTOP = i6;
  return i24 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock16simplifiedLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 56 | 0;
 i10 = i2 + 64 | 0;
 i11 = i1 | 0;
 i12 = i1 + 20 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 if (!((i13 & 24 | 0) != 0 & (i13 & 5 | 0) == 0)) {
  i14 = 0;
  STACKTOP = i2;
  return i14 | 0;
 }
 i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i16 = i1 | 0;
 if ((i13 & 4587520 | 0) == 0) {
  i13 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  i17 = (i13 | 0) != 3 & (i13 | 0) != 1;
 } else {
  i17 = 0;
 }
 i13 = HEAP32[i1 + 48 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 + 44 >> 2];
 HEAP32[i5 + 4 >> 2] = i13;
 HEAP32[i4 >> 2] = 0;
 i13 = __ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE(i15, i16, i5, i4, 0, 0) | 0;
 if (!(i17 | i13 ^ 1)) {
  i4 = i15 + 196 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i4 & 2 | 0) == 0) {
   i18 = i4;
  } else {
   i5 = i1 + 52 | 0;
   i19 = HEAP32[i5 >> 2] | 0;
   i20 = i1;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 876 >> 2] & 63](i16);
   if ((i19 | 0) == (HEAP32[i5 >> 2] | 0)) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 880 >> 2] & 63](i16);
    i18 = HEAP32[i12 >> 2] | 0;
    break;
   } else {
    i14 = 0;
    STACKTOP = i2;
    return i14 | 0;
   }
  }
 } while (0);
 if ((i18 & 16 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1044 >> 2] & 63](i1);
 }
 i18 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i11) | 0) {
  i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i1 | 0) | 0;
  i20 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i20 | 0) == 3 | (i20 | 0) == 0) {
   __ZNK7WebCore9RenderBox12clientHeightEv(i3, i16);
  } else {
   __ZNK7WebCore9RenderBox11clientWidthEv(i3, i16);
  }
  HEAP32[i9 >> 2] = (HEAP32[i3 >> 2] | 0) + i4;
  __ZN7WebCore16RenderFlowThread22applyBreakAfterContentENS_10LayoutUnitE(i1, i9);
 }
 i9 = HEAP32[i12 >> 2] | 0;
 i4 = i9 & 768;
 do {
  if ((i4 | 0) == 768) {
   i21 = i9;
   i22 = 23;
  } else {
   if (!((i9 & 131072 | 0) == 0 | (i4 | 0) == 256)) {
    if ((HEAP32[i11 + 24 >> 2] & 16 | 0) != 0) {
     i21 = i9;
     i22 = 23;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 376 >> 2] & 511](i11) | 0) {
    i21 = HEAP32[i12 >> 2] | 0;
    i22 = 23;
    break;
   }
   i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i11) | 0;
   i20 = HEAP32[i12 >> 2] | 0;
   if (i3) {
    i23 = (i20 & 25165824 | 0) == 16777216;
   } else {
    i23 = 0;
   }
   i3 = (i20 & 8 | 0) != 0;
   if (i3 | i23) {
    i24 = i23;
    i25 = i3;
    i22 = 25;
   }
  }
 } while (0);
 if ((i22 | 0) == 23) {
  i24 = 1;
  i25 = (i21 & 8 | 0) != 0;
  i22 = 25;
 }
 if ((i22 | 0) == 25) {
  __ZN7WebCore11RenderBlock23layoutPositionedObjectsEbb(i1, 0, i24 & (i25 ^ 1));
 }
 i25 = HEAP32[i1 + 88 >> 2] | 0;
 if ((i25 | 0) == 0) {
  i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 752 >> 2] & 511](i1 | 0) | 0;
  i22 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i22 | 0) == 3 | (i22 | 0) == 0) {
   __ZNK7WebCore9RenderBox12clientHeightEv(i6, i16);
  } else {
   __ZNK7WebCore9RenderBox11clientWidthEv(i6, i16);
  }
  i26 = (HEAP32[i6 >> 2] | 0) + i24 | 0;
 } else {
  i26 = HEAP32[i25 + 36 >> 2] | 0;
 }
 i25 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1048 >> 2] | 0;
 HEAP32[i10 >> 2] = i26;
 FUNCTION_TABLE_viii[i25 & 63](i1, i10, 1);
 do {
  if (i13) {
   i10 = i15 + 192 | 0;
   i25 = (HEAP32[i10 >> 2] | 0) + 12 | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = 0;
   i25 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = i26;
   if ((i25 | 0) != 0) {
    __ZN7WebCore11LayoutStateD1Ev(i25);
    __ZdlPv(i25 | 0);
   }
   __ZN7WebCore10RenderView34popLayoutStateForCurrentFlowThreadEv(i15);
   if (i17) {
    break;
   }
   i25 = i15 + 196 | 0;
   HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - 1;
  }
 } while (0);
 __ZN7WebCore9RenderBox20updateLayerTransformEv(i16);
 do {
  if ((HEAP32[i12 >> 2] & 65536 | 0) != 0) {
   i16 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i16 | 0) == 3 | (i16 | 0) == 1) {
    __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(HEAP32[i1 + 40 >> 2] | 0);
    break;
   }
   if ((HEAP32[H_BASE + 1560 >> 2] | 0) == 0) {
    __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(HEAP32[i1 + 40 >> 2] | 0);
    break;
   } else {
    i16 = HEAP32[H_BASE + 1528 >> 2] | 0;
    HEAP32[i7 >> 2] = i1;
    __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i8, i16 | 0, i7, i7);
    break;
   }
  }
 } while (0);
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i11);
 i14 = 1;
 STACKTOP = i2;
 return i14 | 0;
}
function __ZN7WebCore43positionForPointRespectingEditingBoundariesERNS_11RenderBlockERNS_9RenderBoxERKNS_11LayoutPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i3 + 44 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 i8 = i3 + 20 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 i12 = i11 & 25165824;
 if ((i12 | 0) == 25165824 | (i12 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i6, i3 | 0);
  i13 = (HEAP32[i6 >> 2] | 0) + i9 | 0;
  i14 = (HEAP32[i6 + 4 >> 2] | 0) + i10 | 0;
  i15 = HEAP32[i8 >> 2] | 0;
 } else {
  i13 = i9;
  i14 = i10;
  i15 = i11;
 }
 i11 = (HEAP32[i4 + 4 >> 2] | 0) - i14 | 0;
 i14 = i7 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i4 >> 2] | 0) - i13;
 i13 = i7 + 4 | 0;
 HEAP32[i13 >> 2] = i11;
 do {
  if ((i15 & 128 | 0) == 0) {
   i11 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i16 = i15;
    i17 = 8;
    break;
   }
   if ((HEAP32[i11 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i16 = i15;
    i17 = 8;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 232 >> 2] & 511](i11) | 0) != 0) {
    break;
   }
   i16 = HEAP32[i8 >> 2] | 0;
   i17 = 8;
  } else {
   i16 = i15;
   i17 = 8;
  }
 } while (0);
 do {
  if ((i17 | 0) == 8) {
   if ((i16 & 128 | 0) != 0) {
    break;
   }
   i15 = i3 + 4 | 0;
   i11 = HEAP32[i15 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   L13 : do {
    if ((i2 | 0) != 0) {
     i4 = i2 | 0;
     L15 : while (1) {
      i18 = i4 + 20 | 0;
      i10 = HEAP32[i18 >> 2] | 0;
      do {
       if ((i10 & 128 | 0) == 0) {
        i9 = HEAP32[i4 + 4 >> 2] | 0;
        if ((i9 | 0) == 0) {
         i19 = i10;
         i17 = 18;
         break;
        }
        if ((HEAP32[i9 + 12 >> 2] & 1048580 | 0) != 1048580) {
         i19 = i10;
         i17 = 18;
         break;
        }
        if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 232 >> 2] & 511](i9) | 0) != 0) {
         break;
        }
        i19 = HEAP32[i18 >> 2] | 0;
        i17 = 18;
       } else {
        i19 = i10;
        i17 = 18;
       }
      } while (0);
      do {
       if ((i17 | 0) == 18) {
        i17 = 0;
        if ((i19 & 128 | 0) != 0) {
         break;
        }
        i20 = i4 + 4 | 0;
        i21 = HEAP32[i20 >> 2] | 0;
        if ((i21 | 0) != 0) {
         break L15;
        }
       }
      } while (0);
      i10 = HEAP32[i4 + 8 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break L13;
      } else {
       i4 = i10;
      }
     }
     i10 = HEAP32[i4 + 8 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     if ((i19 & 32768 | 0) != 0) {
      if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 768) {
       break;
      }
     }
     do {
      if ((HEAP32[i21 + 12 >> 2] & 1048580 | 0) == 1048580) {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 232 >> 2] & 511](i21) | 0) != 0) {
        i22 = 0;
        break;
       }
       i23 = HEAP32[i18 >> 2] | 0;
       i17 = 27;
      } else {
       i23 = i19;
       i17 = 27;
      }
     } while (0);
     do {
      if ((i17 | 0) == 27) {
       if ((i23 & 128 | 0) != 0) {
        i22 = 0;
        break;
       }
       i22 = HEAP32[i20 >> 2] | 0;
      }
     } while (0);
     i10 = __ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i22 | 0, 0, 1) | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i9 & 128 | 0) == 0) {
       i6 = HEAP32[i15 >> 2] | 0;
       if ((i6 | 0) == 0) {
        i24 = i9;
        i17 = 34;
        break;
       }
       if ((HEAP32[i6 + 12 >> 2] & 1048580 | 0) != 1048580) {
        i24 = i9;
        i17 = 34;
        break;
       }
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 232 >> 2] & 511](i6) | 0) != 0) {
        i25 = 0;
        break;
       }
       i24 = HEAP32[i8 >> 2] | 0;
       i17 = 34;
      } else {
       i24 = i9;
       i17 = 34;
      }
     } while (0);
     do {
      if ((i17 | 0) == 34) {
       if ((i24 & 128 | 0) != 0) {
        i25 = 0;
        break;
       }
       i25 = HEAP32[i15 >> 2] | 0;
      }
     } while (0);
     if (!(i10 ^ (__ZNK7WebCore4Node16hasEditableStyleENS0_13EditableLevelENS0_22UserSelectAllTreatmentE(i25, 0, 1) | 0))) {
      break;
     }
     i9 = HEAP32[i2 + 20 >> 2] & 8192;
     i6 = (((i9 | 0) != 0 ? HEAP32[i14 >> 2] | 0 : HEAP32[i13 >> 2] | 0) | 0) < ((HEAP32[((i9 | 0) == 0 ? i3 + 56 | 0 : i3 + 52 | 0) >> 2] | 0) / 2 & -1 | 0);
     i9 = i4 | 0;
     i12 = __ZNK7WebCore4Node9nodeIndexEv(i11) | 0;
     if (i6) {
      __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i9, i12, 1);
      STACKTOP = i5;
      return;
     } else {
      __ZNK7WebCore12RenderObject21createVisiblePositionEiNS_9EAffinityE(i1, i9, i12 + 1 | 0, 0);
      STACKTOP = i5;
      return;
     }
    }
   } while (0);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 464 >> 2] & 63](i1, i3, i7);
   STACKTOP = i5;
   return;
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 464 >> 2] & 63](i1, i3, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock14paintSelectionERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, i34 = 0, i35 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 256 | 0;
 i5 = i4 | 0;
 i6 = i4 + 32 | 0;
 i7 = i4 + 40 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 56 | 0;
 i10 = i4 + 120 | 0;
 i11 = i4 + 128 | 0;
 i12 = i4 + 136 | 0;
 i13 = i4 + 144 | 0;
 i14 = i4 + 152 | 0;
 i15 = i4 + 168 | 0;
 i16 = i4 + 176 | 0;
 i17 = i4 + 224 | 0;
 i18 = i4 + 240 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i22 = i21 | 0;
 i23 = i21;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = i1 + 20 | 0;
 if ((HEAP32[i26 >> 2] & 234881024 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if (!(__ZNK7WebCore11RenderBlock15isSelectionRootEv(i1) | 0)) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] | 0) != 4) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockE(i9, i1);
 i27 = i10 | 0;
 HEAP32[i27 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i8 >> 2] = 0;
 __ZNK7WebCore11RenderBlock24logicalLeftOffsetForLineENS_10LayoutUnitEbS1_(i6, i1, i7, 0, i8);
 i8 = i1 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i26 >> 2] & 8192 | 0) == 0) {
  FUNCTION_TABLE_ii[HEAP32[i7 + 736 >> 2] & 511](i8) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i4 + 24 | 0, i8);
 } else {
  FUNCTION_TABLE_ii[HEAP32[i7 + 744 >> 2] & 511](i8) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i4 + 16 | 0, i8);
 }
 HEAP32[i11 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i13 >> 2] = HEAP32[i27 >> 2];
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i12, i1, i1, i13, i9);
 i13 = HEAP32[i2 >> 2] | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i13);
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 __ZN7WebCore11RenderBlock13selectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i16, i1, i1, i3, i15, i10, i11, i12, i9, i2);
 i2 = i14;
 i9 = i16;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 __ZN7WebCore10LayoutRect5uniteERKS0_(i14, i16 + 16 | 0);
 __ZN7WebCore10LayoutRect5uniteERKS0_(i14, i16 + 32 | 0);
 i16 = i14 + 8 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) >= 1) {
   i9 = i14 + 12 | 0;
   if ((HEAP32[i9 >> 2] | 0) < 1) {
    break;
   }
   i12 = i1 | 0;
   i11 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i12) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i3 + 4 >> 2] | 0;
   i15 = i14 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
   i27 = i14 + 4 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) - i10;
   do {
    if ((HEAP32[i26 >> 2] & 32768 | 0) == 0) {
     i10 = i17;
     HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
     HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
     HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
     HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
     __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i1 | 0, i17);
     d28 = +(HEAP32[i17 >> 2] | 0);
     d29 = +(HEAP32[i17 + 4 >> 2] | 0);
     d30 = +(HEAP32[i17 + 8 >> 2] | 0);
     d31 = +(HEAP32[i17 + 12 >> 2] | 0);
     d32 = +d28;
     d33 = +d29;
     HEAPF32[i22 >> 2] = d32;
     HEAPF32[i22 + 4 >> 2] = d33;
     d33 = d28 + d30;
     HEAPF32[i21 + 8 >> 2] = d33;
     HEAPF32[i23 + 12 >> 2] = d29;
     d30 = d29 + d31;
     HEAPF32[i21 + 16 >> 2] = d33;
     HEAPF32[i23 + 20 >> 2] = d30;
     HEAPF32[i21 + 24 >> 2] = d28;
     HEAPF32[i23 + 28 >> 2] = d30;
     i10 = i11 + 32 | 0;
     __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i24, i12, i23, HEAP32[i10 >> 2] | 0, 0, 0);
     __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i24);
     __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i5);
     i6 = HEAP32[i19 + 4 >> 2] | 0;
     i8 = i18 + 8 | 0;
     i7 = HEAP32[i8 >> 2] | 0;
     i34 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i27 >> 2] = i6;
     HEAP32[i16 >> 2] = i7;
     HEAP32[i9 >> 2] = i34;
     i34 = HEAP32[i10 >> 2] | 0;
     i10 = HEAP32[i34 + 20 >> 2] | 0;
     if ((i10 & 65536 | 0) == 0) {
      break;
     }
     if ((i10 & 512 | 0) == 0) {
      i35 = 0;
     } else {
      i35 = i34;
     }
     __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i25, i35);
     i34 = HEAP32[i25 + 4 >> 2] | 0;
     HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + (HEAP32[i25 >> 2] | 0);
     HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + i34;
    }
   } while (0);
   __ZN7WebCore11RenderLayer27addBlockSelectionGapsBoundsERKNS_10LayoutRectE(i11, i14);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i13);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = 0;
 i4 = i1 + 4 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 8 | 0;
 HEAP8[i5] = HEAP8[i5] & -8;
 i6 = i1 + 20 | 0;
 i7 = i1 + 24 | 0;
 i8 = i1 + 28 | 0;
 _memset(i1 + 12 | 0, 0, 16) | 0;
 HEAP8[i8] = HEAP8[i8] & -8;
 i9 = i1 + 40 | 0;
 i10 = i1 + 44 | 0;
 i11 = i1 + 48 | 0;
 _memset(i1 + 32 | 0, 0, 16) | 0;
 HEAP8[i11] = HEAP8[i11] & -8;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 i1 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = (i1 | 0) == 0;
 i12 = i1 | 0;
 L1 : do {
  if (i2) {
   i13 = i12;
  } else {
   i14 = i1;
   i15 = i12;
   while (1) {
    i16 = i14 + 20 | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    i18 = i17 & 768;
    if ((i18 | 0) == 768) {
     break;
    }
    if (!((i17 & 131072 | 0) == 0 | (i18 | 0) == 256)) {
     if ((HEAP32[i15 + 24 >> 2] & 16 | 0) != 0) {
      break;
     }
    }
    i18 = i14;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 376 >> 2] & 511](i15) | 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 511](i15) | 0) {
     i18 = i14 | 0;
     if ((HEAP32[i16 >> 2] & 25165824 | 0) == 16777216) {
      i13 = i18;
      break L1;
     } else {
      i19 = i18;
     }
    } else {
     i19 = i14 | 0;
    }
    i18 = HEAP32[i19 + 8 >> 2] | 0;
    i16 = i18 | 0;
    if ((i18 | 0) == 0) {
     i13 = i16;
     break L1;
    } else {
     i14 = i18;
     i15 = i16;
    }
   }
   i13 = i14 | 0;
  }
 } while (0);
 i19 = i13;
 HEAP32[i3 >> 2] = i19;
 do {
  if ((HEAP8[i5] & 1) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 1024 >> 2] & 511](i19) | 0) {
    i20 = 1;
    break;
   }
   i12 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i12 + 20 >> 2] & 805306368 | 0) == 0) {
    i20 = 0;
    break;
   }
   i20 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i12 | 0) | 0) != 0 | 0;
  } else {
   i20 = 1;
  }
 } while (0);
 i3 = HEAP8[i5] & -8;
 HEAP32[i4 >> 2] = 0;
 HEAP8[i5] = i3 | i20;
 L20 : do {
  if (i2) {
   i21 = 0;
  } else {
   i20 = i1;
   while (1) {
    if ((HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 0) {
     break;
    }
    i3 = i20 | 0;
    i5 = i20 + 20 | 0;
    if ((HEAP32[i5 >> 2] & 131072 | 0) != 0) {
     if ((HEAP32[i20 + 24 >> 2] & 16 | 0) != 0) {
      break;
     }
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 376 >> 2] & 511](i3) | 0) {
     break;
    }
    if ((HEAP32[i5 >> 2] & 768 | 0) == 768) {
     break;
    }
    i5 = HEAP32[i20 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i21 = 0;
     break L20;
    } else {
     i20 = i5;
    }
   }
   if ((HEAP32[i20 + 24 >> 2] & 16 | 0) == 0) {
    i22 = __ZNK7WebCore12RenderObject15containingBlockEv(i20 | 0) | 0;
   } else {
    i22 = i20;
   }
   i14 = i22 | 0;
   if ((i22 | 0) == 0) {
    i21 = i14;
    break;
   } else {
    i23 = i22;
    i24 = i14;
   }
   while (1) {
    i14 = i23 | 0;
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i24) | 0)) {
     i21 = i14;
     break L20;
    }
    i5 = __ZNK7WebCore12RenderObject15containingBlockEv(i14) | 0;
    i14 = i5 | 0;
    if ((i5 | 0) == 0) {
     i21 = i14;
     break;
    } else {
     i23 = i5 | 0;
     i24 = i14;
    }
   }
  }
 } while (0);
 i24 = i21;
 HEAP32[i6 >> 2] = i24;
 do {
  if ((HEAP8[i8] & 1) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 1024 >> 2] & 511](i24) | 0) {
    i25 = 1;
    break;
   }
   i23 = HEAP32[i6 >> 2] | 0;
   if ((HEAP32[i23 + 20 >> 2] & 805306368 | 0) == 0) {
    i25 = 0;
    break;
   }
   i25 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i23 | 0) | 0) != 0 | 0;
  } else {
   i25 = 1;
  }
 } while (0);
 i6 = HEAP8[i8] & -8;
 HEAP32[i7 >> 2] = 0;
 HEAP8[i8] = i6 | i25;
 L42 : do {
  if (i2) {
   i26 = 0;
  } else {
   i25 = i1;
   while (1) {
    if ((HEAP32[i25 + 20 >> 2] & 3072 | 0) != 1024) {
     if ((HEAP32[i25 + 24 >> 2] & 16 | 0) != 0) {
      break;
     }
    }
    i6 = HEAP32[i25 + 8 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i26 = 0;
     break L42;
    } else {
     i25 = i6;
    }
   }
   i26 = i25;
  }
 } while (0);
 HEAP32[i9 >> 2] = i26;
 if ((HEAP8[i11] & 1) != 0) {
  i27 = 1;
  i28 = HEAP8[i11] | 0;
  i29 = i28 & -8;
  HEAP32[i10 >> 2] = 0;
  i30 = i29 | i27;
  HEAP8[i11] = i30;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 1024 >> 2] & 511](i26) | 0) {
  i27 = 1;
  i28 = HEAP8[i11] | 0;
  i29 = i28 & -8;
  HEAP32[i10 >> 2] = 0;
  i30 = i29 | i27;
  HEAP8[i11] = i30;
  return;
 }
 i26 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i26 + 20 >> 2] & 805306368 | 0) == 0) {
  i27 = 0;
  i28 = HEAP8[i11] | 0;
  i29 = i28 & -8;
  HEAP32[i10 >> 2] = 0;
  i30 = i29 | i27;
  HEAP8[i11] = i30;
  return;
 }
 i27 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i26 | 0) | 0) != 0 | 0;
 i28 = HEAP8[i11] | 0;
 i29 = i28 & -8;
 HEAP32[i10 >> 2] = 0;
 i30 = i29 | i27;
 HEAP8[i11] = i30;
 return;
}
function __ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i10 | 0;
 i12 = i10;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
   i13 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i13) | 0) == 0) {
    break;
   }
   i14 = i3 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   i16 = i3 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   i18 = i1 | 0;
   i19 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 856 >> 2] & 127](i6, i18);
   i20 = i17 - (HEAP32[i6 >> 2] | 0) | 0;
   i17 = HEAP32[i1 + 52 >> 2] | 0;
   i21 = HEAP32[i1 + 56 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 856 >> 2] & 127](i7, i18);
   i22 = (HEAP32[i7 >> 2] | 0) + i21 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 860 >> 2] & 127](i8, i18);
   i18 = i22 + (HEAP32[i8 >> 2] | 0) | 0;
   HEAP32[i5 >> 2] = i15;
   HEAP32[i5 + 4 >> 2] = i20;
   HEAP32[i5 + 8 >> 2] = i17;
   HEAP32[i5 + 12 >> 2] = i18;
   i18 = i2 + 8 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
    i20 = i17 + 1 | 0;
    i15 = i2 | 0;
    i22 = HEAP32[i15 >> 2] | 0;
    do {
     if (i22 >>> 0 > i5 >>> 0) {
      i23 = 7;
     } else {
      if ((i22 + (i17 << 4) | 0) >>> 0 <= i5 >>> 0) {
       i23 = 7;
       break;
      }
      __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i20);
      i19 = HEAP32[i15 >> 2] | 0;
      i24 = i19 + (i5 - i22 >> 4 << 4) | 0;
      i25 = i19;
     }
    } while (0);
    if ((i23 | 0) == 7) {
     __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i20);
     i24 = i5;
     i25 = HEAP32[i15 >> 2] | 0;
    }
    i22 = i25 + (HEAP32[i18 >> 2] << 4) | 0;
    i19 = i24;
    HEAP32[i22 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i22 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
    HEAP32[i22 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
    HEAP32[i22 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
   } else {
    i19 = (HEAP32[i2 >> 2] | 0) + (i17 << 4) | 0;
    i22 = i5;
    HEAP32[i19 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i19 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
    HEAP32[i19 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
    HEAP32[i19 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
   }
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
   i22 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i13) | 0;
   i19 = i22 | 0;
   i21 = HEAP32[(HEAP32[i22 >> 2] | 0) + 472 >> 2] | 0;
   i22 = i1 + 44 | 0;
   i26 = HEAP32[i22 >> 2] | 0;
   i27 = HEAP32[i22 + 4 >> 2] | 0;
   i22 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i13) | 0;
   do {
    if ((i22 | 0) == 0) {
     i28 = 0;
    } else {
     if ((HEAP32[i22 + 20 >> 2] & 1024 | 0) == 0) {
      i28 = 0;
      break;
     }
     i28 = i22;
    }
   } while (0);
   i22 = (__ZNK7WebCore12RenderObject15containingBlockEv(i28 | 0) | 0) + 44 | 0;
   i13 = (HEAP32[i16 >> 2] | 0) - ((HEAP32[i22 + 4 >> 2] | 0) + i27) | 0;
   HEAP32[i9 >> 2] = (HEAP32[i14 >> 2] | 0) - ((HEAP32[i22 >> 2] | 0) + i26);
   HEAP32[i9 + 4 >> 2] = i13;
   FUNCTION_TABLE_viii[i21 & 63](i19, i2, i9);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i9 = i3;
 i3 = HEAP32[i9 + 4 >> 2] | 0;
 i28 = i1 + 52 | 0;
 i1 = HEAP32[i28 >> 2] | 0;
 i5 = HEAP32[i28 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i11 + 4 >> 2] = i3;
 i3 = i10 + 8 | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = i5;
 i5 = i2 + 8 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  i1 = (HEAP32[i2 >> 2] | 0) + (i3 << 4) | 0;
  i11 = i10;
  HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
  HEAP32[i1 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
  HEAP32[i1 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i11 = i3 + 1 | 0;
 i1 = i2 | 0;
 i9 = HEAP32[i1 >> 2] | 0;
 do {
  if (i9 >>> 0 > i12 >>> 0) {
   i23 = 18;
  } else {
   if ((i9 + (i3 << 4) | 0) >>> 0 <= i12 >>> 0) {
    i23 = 18;
    break;
   }
   __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i11);
   i28 = HEAP32[i1 >> 2] | 0;
   i29 = i28 + (i10 - i9 >> 4 << 4) | 0;
   i30 = i28;
  }
 } while (0);
 if ((i23 | 0) == 18) {
  __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i11);
  i29 = i12;
  i30 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i30 + (HEAP32[i5 >> 2] << 4) | 0;
 i30 = i29;
 HEAP32[i1 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 56 | 0;
 i12 = i4 + 72 | 0;
 i13 = i4 + 88 | 0;
 i14 = i1 + 20 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 & 4194304 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i16 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i17 = i1 | 0;
 i18 = HEAP32[i16 + 8 >> 2] | 0;
 i19 = HEAP32[i16 >> 2] | 0;
 i16 = i1;
 i20 = i16 + ~(i16 << 15) | 0;
 i16 = (i20 >>> 10 ^ i20) * 9 & -1;
 i20 = i16 >>> 6 ^ i16;
 i16 = i20 + ~(i20 << 11) | 0;
 i20 = i16 >>> 16 ^ i16;
 L4 : do {
  if ((i19 | 0) == 0) {
   i21 = 0;
  } else {
   i16 = i18 & i20;
   i22 = i19 + (i16 << 3) | 0;
   i23 = HEAP32[i22 >> 2] | 0;
   if ((i23 | 0) == (i17 | 0)) {
    i24 = i22;
   } else {
    i22 = (i20 >>> 23) + ~i20 | 0;
    i25 = i22 << 12 ^ i22;
    i22 = i25 >>> 7 ^ i25;
    i25 = i22 << 2 ^ i22;
    i22 = i25 >>> 20 ^ i25 | 1;
    i25 = 0;
    i26 = i16;
    i16 = i23;
    while (1) {
     if ((i16 | 0) == 0) {
      i21 = 0;
      break L4;
     }
     i23 = (i25 | 0) == 0 ? i22 : i25;
     i27 = i23 + i26 & i18;
     i28 = i19 + (i27 << 3) | 0;
     i29 = HEAP32[i28 >> 2] | 0;
     if ((i29 | 0) == (i17 | 0)) {
      i24 = i28;
      break;
     } else {
      i25 = i23;
      i26 = i27;
      i16 = i29;
     }
    }
   }
   if ((i24 | 0) == 0) {
    i21 = 0;
    break;
   }
   i21 = HEAP32[i24 + 4 >> 2] | 0;
  }
 } while (0);
 i24 = i1 | 0;
 i17 = i1;
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i15 & 8192 | 0) == 0) {
  i15 = FUNCTION_TABLE_ii[HEAP32[i19 + 736 >> 2] & 511](i24) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i8, i24);
  i30 = (HEAP32[i8 >> 2] | 0) + i15 | 0;
 } else {
  i15 = FUNCTION_TABLE_ii[HEAP32[i19 + 744 >> 2] & 511](i24) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 712 >> 2] & 127](i7, i24);
  i30 = (HEAP32[i7 >> 2] | 0) + i15 | 0;
 }
 i15 = HEAP32[i21 + 16 >> 2] | 0;
 i7 = HEAP32[i21 >> 2] | 0;
 i19 = HEAP32[i21 + 20 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i1;
 i18 = i6 | 0;
 i20 = i3 | 0;
 i16 = i3 + 4 | 0;
 i3 = 0;
 L21 : while (1) {
  i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 511](i24) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 127](i6, i24);
  i31 = Math_imul(i3 >>> 0 < 2147483647 >>> 0 ? i3 : 2147483647, i19) | 0;
  i25 = i26 + i31 + (HEAP32[i18 >> 2] | 0) | 0;
  i26 = (HEAP32[i14 >> 2] & 8192 | 0) == 0;
  i22 = i26 ? i19 : i7;
  i29 = i26 ? i7 : i19;
  i27 = i26 ? i25 : i30;
  i23 = i26 ? i30 : i25;
  do {
   if (i26) {
    i25 = HEAP32[i20 >> 2] | 0;
    if ((i25 | 0) < (i27 | 0)) {
     break;
    }
    if ((i25 | 0) < (i22 + i27 | 0)) {
     i32 = 22;
     break L21;
    }
   } else {
    i25 = HEAP32[i16 >> 2] | 0;
    if ((i25 | 0) < (i23 | 0)) {
     break;
    }
    if ((i25 | 0) < (i29 + i23 | 0)) {
     i32 = 17;
     break L21;
    }
   }
  } while (0);
  i23 = i3 + 1 | 0;
  if (i23 >>> 0 < i15 >>> 0) {
   i3 = i23;
  } else {
   i32 = 27;
   break;
  }
 }
 if ((i32 | 0) == 17) {
  if ((HEAP32[i21 + 8 >> 2] | 0) == 0) {
   __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i10, i1, i21, i3);
   i15 = i2 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i10 >> 2] | 0) - i30 + (HEAP32[i15 >> 2] | 0);
   i15 = i2 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) - i31;
   STACKTOP = i4;
   return;
  } else {
   __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i11, i1, i21, i3);
   i15 = HEAP32[i11 + 4 >> 2] | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 511](i24) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 127](i5, i24);
   i10 = i2 + 4 | 0;
   HEAP32[i10 >> 2] = i15 - i31 - i11 - (HEAP32[i5 >> 2] | 0) + (HEAP32[i10 >> 2] | 0);
   STACKTOP = i4;
   return;
  }
 } else if ((i32 | 0) == 27) {
  STACKTOP = i4;
  return;
 } else if ((i32 | 0) == 22) {
  if ((HEAP32[i21 + 8 >> 2] | 0) == 0) {
   __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i12, i1, i21, i3);
   i32 = (HEAP32[i12 + 4 >> 2] | 0) - i30 | 0;
   i30 = i2 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) - i31;
   i30 = i2 + 4 | 0;
   HEAP32[i30 >> 2] = i32 + (HEAP32[i30 >> 2] | 0);
   STACKTOP = i4;
   return;
  } else {
   __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i13, i1, i21, i3);
   i3 = HEAP32[i13 >> 2] | 0;
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 511](i24) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 127](i9, i24);
   i24 = i2 | 0;
   HEAP32[i24 >> 2] = i3 - i31 - i13 - (HEAP32[i9 >> 2] | 0) + (HEAP32[i24 >> 2] | 0);
   STACKTOP = i4;
   return;
  }
 }
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 76 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] & 63;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i7 = i5;
 }
 i5 = i1 + 180 | 0;
 i8 = i1 + 188 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  i9 = i7;
 } else {
  i10 = i5 | 0;
  i11 = i3 | 0;
  i12 = i7;
  i7 = 0;
  while (1) {
   i13 = (HEAP32[i10 >> 2] | 0) + (i7 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   i15 = HEAP32[i13 + 4 >> 2] | 0;
   do {
    if ((i14 | 0) == 14) {
     i16 = 1;
     i17 = 0;
     i18 = HEAP32[i12 + 4 >> 2] & 63;
     i19 = 13;
    } else if ((i14 | 0) == 16) {
     i13 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i20 = i12;
      break;
     }
     i21 = i13 | 0;
     HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
     if ((i12 | 0) == 0) {
      i20 = i13;
      break;
     }
     i21 = i12 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      i20 = i13;
      break;
     } else {
      HEAP32[i21 >> 2] = i22;
      i20 = i13;
      break;
     }
    } else {
     i13 = (i14 | 0) == 15;
     i22 = i13 & 1;
     i21 = (i14 | 0) == 12;
     i23 = HEAP32[i12 + 4 >> 2] & 63;
     if (!(i21 | i13 ^ 1)) {
      i16 = i22;
      i17 = 1;
      i18 = i23;
      i19 = 13;
      break;
     }
     i24 = i23 + 2 & 126;
     i25 = i22;
     i26 = i21;
     i19 = 15;
    }
   } while (0);
   if ((i19 | 0) == 13) {
    i19 = 0;
    i24 = i18 + 1 & 255 | 1;
    i25 = i16;
    i26 = i17;
    i19 = 15;
   }
   do {
    if ((i19 | 0) == 15) {
     i19 = 0;
     if ((i24 & 255) >>> 0 >= 61 >>> 0) {
      i20 = i12;
      break;
     }
     __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i3, i24, i25, i26, i15, i12);
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i20 = i14;
      break;
     }
     i21 = i12 | 0;
     i22 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
     } else {
      HEAP32[i21 >> 2] = i22;
     }
     i22 = HEAP32[i11 >> 2] | 0;
     if ((i22 | 0) == 0) {
      i20 = i14;
      break;
     }
     i21 = i22 | 0;
     i23 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i22);
      __ZN3WTF8fastFreeEPv(i22);
      i20 = i14;
      break;
     } else {
      HEAP32[i21 >> 2] = i23;
      i20 = i14;
      break;
     }
    }
   } while (0);
   i15 = i7 + 1 | 0;
   if (i15 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    i12 = i20;
    i7 = i15;
   } else {
    i9 = i20;
    break;
   }
  }
 }
 i20 = HEAP32[i9 + 4 >> 2] | 0;
 i7 = i20 & 63;
 i12 = i6 & 255;
 if ((i7 & 255) >>> 0 > (i6 & 255) >>> 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i12 & 1, i20 & 1);
  i19 = 30;
 } else {
  if ((i7 & 255) >>> 0 < (i6 & 255) >>> 0) {
   __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i12 & 1);
  }
  if ((i9 | 0) == 0) {
   i27 = 1;
  } else {
   i19 = 30;
  }
 }
 if ((i19 | 0) == 30) {
  i19 = i9 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
  i27 = 0;
 }
 i19 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i19 | 0) != 0) {
   i4 = i19 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i19);
    __ZN3WTF8fastFreeEPv(i19);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i19 = i1 + 184 | 0;
 do {
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i12 = i5 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   i20 = i1 + 192 | 0;
   if ((i20 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    i28 = i4;
   } else {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i19 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
    i28 = HEAP32[i12 >> 2] | 0;
   }
   if ((i28 | 0) != 0) {
    break;
   }
   HEAP32[i12 >> 2] = i20;
   HEAP32[i19 >> 2] = 8;
  }
 } while (0);
 i19 = i6 << 24 >> 24 != i7 << 24 >> 24;
 if (i27) {
  STACKTOP = i2;
  return i19 | 0;
 }
 i27 = i9 | 0;
 i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i2;
  return i19 | 0;
 } else {
  HEAP32[i27 >> 2] = i7;
  STACKTOP = i2;
  return i19 | 0;
 }
 return 0;
}
function __ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i6 = (i5 | 0) != 0;
 if (i6) {
  i7 = (HEAP8[i5] & 1) != 0;
 } else {
  i7 = 0;
 }
 L4 : do {
  if ((i2 | 0) == 0) {
   i8 = 0;
   i9 = 0;
  } else {
   i10 = (i4 | 0) != 1;
   i11 = (i4 | 0) == 1;
   i12 = i10 | i7;
   i13 = i1 | 0;
   i14 = (i3 | 0) == 0;
   i15 = i3 + 164 | 0;
   i16 = i2;
   i17 = 0;
   while (1) {
    L8 : do {
     if (i7) {
      i18 = 12;
     } else {
      i19 = i16 + 20 | 0;
      i20 = HEAP32[i19 >> 2] | 0;
      do {
       if (!((i20 & 768 | 0) == 256 | (i20 & 4096 | 0) != 0)) {
        if ((i20 & 64 | 0) != 0 | (i20 & 25165824 | 0) == 16777216 | (i20 & 2048 | 0) != 0) {
         break;
        }
        i21 = HEAP32[i16 + 28 >> 2] | 0;
        i22 = i21;
        __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i3, i22);
        if ((i21 | 0) != 0) {
         i23 = i22;
         i24 = i17;
         break L8;
        }
       }
      } while (0);
      if (i12) {
       i18 = 12;
       break;
      }
      if ((HEAP32[i19 >> 2] & 768 | 0) == 256) {
       i25 = 0;
       i18 = 13;
       break;
      }
      if ((HEAP32[i16 + 24 >> 2] & 4 | 0) == 0) {
       i25 = 0;
       i18 = 13;
      } else {
       i8 = 1;
       i9 = i16;
       break L4;
      }
     }
    } while (0);
    if ((i18 | 0) == 12) {
     i18 = 0;
     if ((i16 | 0) == 0) {
      i8 = i17;
      i9 = 0;
      break L4;
     } else {
      i25 = i10;
      i18 = 13;
     }
    }
    do {
     if ((i18 | 0) == 13) {
      i18 = 0;
      i20 = i16;
      L20 : while (1) {
       if ((i20 | 0) == (i13 | 0)) {
        i8 = i17;
        i9 = 0;
        break L4;
       }
       do {
        if (!i14) {
         if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
          break;
         }
         if ((HEAP32[i20 + 24 >> 2] & 4 | 0) == 0) {
          break;
         }
         i22 = (HEAP32[(HEAP32[i20 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 28 & 7;
         if ((i22 | 0) == 0) {
          break;
         }
         i21 = HEAP32[i15 >> 2] | 0;
         if ((i22 - 3 | 0) >>> 0 < 3 >>> 0) {
          HEAP32[i15 >> 2] = i21 - 1;
          break;
         }
         if ((i21 | 0) != 0) {
          break;
         }
         __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i3, 16, 0);
        }
       } while (0);
       i26 = HEAP32[i20 + 16 >> 2] | 0;
       if ((i26 | 0) != 0) {
        i18 = 24;
        break;
       }
       i27 = HEAP32[i20 + 8 >> 2] | 0;
       i28 = i27 | 0;
       i21 = (i27 | 0) == 0;
       do {
        if (!(i25 | i21 | (i27 | 0) == (i1 | 0))) {
         if ((HEAP32[i27 + 20 >> 2] & 768 | 0) == 256) {
          break;
         }
         if ((HEAP32[i28 + 24 >> 2] & 4 | 0) != 0) {
          i18 = 29;
          break L20;
         }
        }
       } while (0);
       if (i21) {
        i8 = i17;
        i9 = 0;
        break L4;
       } else {
        i20 = i28;
       }
      }
      if ((i18 | 0) == 24) {
       i18 = 0;
       __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i3, i26);
       i23 = i26;
       i24 = i17;
       break;
      } else if ((i18 | 0) == 29) {
       i18 = 0;
       if ((i27 | 0) == 0) {
        i8 = 1;
        i9 = 0;
        break L4;
       } else {
        i23 = i28;
        i24 = 1;
        break;
       }
      }
     }
    } while (0);
    i20 = HEAP32[i23 + 20 >> 2] | 0;
    if ((i20 & 768 | 0) == 256 | (i20 & 4096 | 0) != 0) {
     i8 = i24;
     i9 = i23;
     break L4;
    }
    if ((i20 & 64 | 0) != 0 | (i20 & 25165824 | 0) == 16777216 | (i20 & 2048 | 0) != 0) {
     i8 = i24;
     i9 = i23;
     break L4;
    }
    if ((HEAP32[i23 + 24 >> 2] & 4 | 0) != 0) {
     if (i11) {
      i8 = i24;
      i9 = i23;
      break L4;
     }
     if (__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i23) | 0) {
      i8 = i24;
      i9 = i23;
      break L4;
     }
    }
    if ((i23 | 0) == 0) {
     i8 = i24;
     i9 = 0;
     break;
    } else {
     i16 = i23;
     i17 = i24;
    }
   }
  }
 } while (0);
 if (!i6) {
  return i9 | 0;
 }
 HEAP8[i5] = i8 & 1;
 return i9 | 0;
}
function __ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, d22 = +0, i23 = 0, i24 = 0, d25 = +0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 56 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = i1 | 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i16) | 0) {
   i17 = i1 | 0;
   i18 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i17) | 0) == 0) {
    i19 = i18;
    break;
   }
   i20 = i1;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 856 >> 2] & 127](i5, i18);
   d21 = +(-(HEAP32[i5 >> 2] | 0) | 0);
   d22 = +(HEAP32[i1 + 52 >> 2] | 0);
   i23 = HEAP32[i1 + 56 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 856 >> 2] & 127](i6, i18);
   i24 = (HEAP32[i6 >> 2] | 0) + i23 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 860 >> 2] & 127](i7, i18);
   d25 = +(i24 + (HEAP32[i7 >> 2] | 0) | 0);
   d26 = +d21;
   HEAP32[i10 >> 2] = 0;
   HEAPF32[i10 + 4 >> 2] = d26;
   HEAPF32[i9 + 8 >> 2] = d22;
   HEAPF32[i11 + 12 >> 2] = d21;
   d26 = d21 + d25;
   HEAPF32[i9 + 16 >> 2] = d22;
   HEAPF32[i11 + 20 >> 2] = d26;
   HEAPF32[i9 + 24 >> 2] = +0;
   HEAPF32[i11 + 28 >> 2] = d26;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i8, i16, i11, 0, 0, i3);
   i24 = i2 + 8 | 0;
   i18 = HEAP32[i24 >> 2] | 0;
   if ((i18 | 0) == (HEAP32[i2 + 4 >> 2] | 0)) {
    i20 = i18 + 1 | 0;
    i23 = i2 | 0;
    i27 = HEAP32[i23 >> 2] | 0;
    do {
     if (i27 >>> 0 > i8 >>> 0) {
      i28 = 8;
     } else {
      if ((i27 + (i18 << 5) | 0) >>> 0 <= i8 >>> 0) {
       i28 = 8;
       break;
      }
      __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i20);
      i29 = HEAP32[i23 >> 2] | 0;
      i30 = i29 + (i8 - i27 >> 5 << 5) | 0;
      i31 = i29;
     }
    } while (0);
    if ((i28 | 0) == 8) {
     __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i20);
     i30 = i8;
     i31 = HEAP32[i23 >> 2] | 0;
    }
    _memcpy(i31 + (HEAP32[i24 >> 2] << 5) | 0, i30 | 0, 32) | 0;
   } else {
    _memcpy((HEAP32[i2 >> 2] | 0) + (i18 << 5) | 0, i8 | 0, 32) | 0;
   }
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   i27 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i17) | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i27 >> 2] | 0) + 476 >> 2] & 63](i27 | 0, i2, i3);
   STACKTOP = i4;
   return;
  } else {
   i19 = i1 | 0;
  }
 } while (0);
 d26 = +(HEAP32[i19 + 52 >> 2] | 0);
 d22 = +(HEAP32[i19 + 56 >> 2] | 0);
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAPF32[i13 + 8 >> 2] = d26;
 HEAPF32[i15 + 12 >> 2] = +0;
 HEAPF32[i13 + 16 >> 2] = d26;
 HEAPF32[i15 + 20 >> 2] = d22;
 HEAPF32[i13 + 24 >> 2] = +0;
 HEAPF32[i15 + 28 >> 2] = d22;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i12, i16, i15, 0, 0, i3);
 i3 = i2 + 8 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  _memcpy((HEAP32[i2 >> 2] | 0) + (i15 << 5) | 0, i12 | 0, 32) | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
  STACKTOP = i4;
  return;
 }
 i16 = i15 + 1 | 0;
 i13 = i2 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if (i14 >>> 0 > i12 >>> 0) {
   i28 = 16;
  } else {
   if ((i14 + (i15 << 5) | 0) >>> 0 <= i12 >>> 0) {
    i28 = 16;
    break;
   }
   __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
   i19 = HEAP32[i13 >> 2] | 0;
   i32 = i19 + (i12 - i14 >> 5 << 5) | 0;
   i33 = i19;
  }
 } while (0);
 if ((i28 | 0) == 16) {
  __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i2, i16);
  i32 = i12;
  i33 = HEAP32[i13 >> 2] | 0;
 }
 _memcpy(i33 + (HEAP32[i3 >> 2] << 5) | 0, i32 | 0, 32) | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock9splitFlowEPNS_12RenderObjectEPS0_S2_PNS_20RenderBoxModelObjectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i6 = __ZN7WebCore11RenderBlock22containingColumnsBlockEb(i1, 1) | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 1016 >> 2] & 63](i6);
 i7 = i6 | 0;
 if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
  i8 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i7 + 36 >> 2] | 0;
 }
 i9 = (HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
 do {
  if ((HEAP8[i9] & 3) == 3) {
   i10 = (HEAP32[i9 >> 2] | 0) >>> 11 & 3;
   if ((i10 | 0) == 2) {
    i11 = 11;
    break;
   }
   i12 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i12 | 0) == 0 | (i12 | 0) == 3) ^ (i10 | 0) == 0) {
    i11 = 7;
   } else {
    i11 = 11;
   }
  } else {
   i11 = 7;
  }
 } while (0);
 do {
  if ((i11 | 0) == 7) {
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0)) {
    i11 = 11;
    break;
   }
   __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i6, 0, 1);
   if ((HEAP32[i6 + 24 >> 2] & 32 | 0) != 0) {
    __ZN7WebCore15RenderBlockFlow21removeFloatingObjectsEv(i6);
   }
   i13 = i6;
   i14 = HEAP32[i6 + 8 >> 2] | 0;
   i15 = 0;
  }
 } while (0);
 if ((i11 | 0) == 11) {
  i11 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i7) | 0;
  i7 = i11 + 20 | 0;
  HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -2097153;
  i13 = i11;
  i14 = i6;
  i15 = 1;
 }
 i6 = i14 | 0;
 i11 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i6) | 0;
 i7 = i11 | 0;
 i8 = i11 + 20 | 0;
 HEAP32[i8 >> 2] = HEAP32[i8 >> 2] & -2097153;
 if (i15) {
  i9 = HEAP32[i14 + 28 >> 2] | 0;
  i10 = i14 | 0;
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i10, i13 | 0, i9, 0);
  i16 = i9;
  i17 = i10;
 } else {
  i16 = HEAP32[i13 + 16 >> 2] | 0;
  i17 = i14 | 0;
 }
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i17, i3 | 0, i16, 0);
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i17, i7, i16, 0);
 i17 = i14 + 20 | 0;
 HEAP32[i17 >> 2] = HEAP32[i17 >> 2] & -2097153;
 if (i15) {
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i14 | 0, i13 | 0, i16, 0, 0, 1);
 }
 __ZN7WebCore11RenderBlock11splitBlocksEPS0_S1_S1_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE(i1, i13, i11, i3, i2, i5);
 i5 = i3 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2097153;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 628 >> 2] & 63](i3, i4, 0);
 i4 = i13 | 0;
 i3 = i13 + 20 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i13 & 1 | 0) == 0) {
   HEAP32[i3 >> 2] = i13 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i4, 1, 0);
   if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i4);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i4, 1, 1);
 i4 = HEAP32[i17 >> 2] | 0;
 do {
  if ((i4 & 1 | 0) == 0) {
   HEAP32[i17 >> 2] = i4 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
   if ((HEAP32[i17 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i6, 1, 1);
 i6 = HEAP32[i8 >> 2] | 0;
 if ((i6 & 1 | 0) != 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
  return;
 }
 HEAP32[i8 >> 2] = i6 | 1;
 __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i7, 1, 0);
 if ((HEAP32[i8 >> 2] & 32768 | 0) == 0) {
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
  return;
 }
 __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i7);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i7, 1, 1);
 return;
}
function __ZN7WebCore11RenderBlock47computeStartPositionDeltaForChildAvoidingFloatsERKNS_9RenderBoxENS_10LayoutUnitEPNS_12RenderRegionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 48 | 0;
 i12 = i6 + 56 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i6 + 80 | 0;
 i16 = i6 + 88 | 0;
 i17 = i6 + 96 | 0;
 i18 = i2 + 36 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 do {
  if ((HEAP32[i19 + 40 >> 2] & 1073741824 | 0) == 0) {
   i20 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i21 = i2 + 52 | 0;
   } else {
    i21 = i2 + 56 | 0;
   }
   i20 = HEAP32[i21 >> 2] | 0;
   __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i11, i2, i5);
   i22 = i20 - (HEAP32[i11 >> 2] | 0) | 0;
  } else {
   i20 = (HEAP32[i19 + 44 >> 2] | 0) >>> 13 & 3;
   i23 = i2 | 0;
   i24 = HEAP32[i2 >> 2] | 0;
   if ((i20 | 0) == 3 | (i20 | 0) == 0) {
    i20 = FUNCTION_TABLE_ii[HEAP32[i24 + 744 >> 2] & 511](i23) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i8, i23);
    i25 = (HEAP32[i8 >> 2] | 0) + i20 | 0;
   } else {
    i20 = FUNCTION_TABLE_ii[HEAP32[i24 + 736 >> 2] & 511](i23) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i9, i23);
    i25 = (HEAP32[i9 >> 2] | 0) + i20 | 0;
   }
   if ((i5 | 0) == 0) {
    i22 = i25;
    break;
   }
   __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i10, i2 | 0, i5, 0);
   if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
    i26 = HEAP32[i10 + 4 >> 2] | 0;
   } else {
    i26 = HEAP32[i10 >> 2] | 0;
   }
   i22 = i26 + i25 | 0;
  }
 } while (0);
 i25 = HEAP32[i4 >> 2] | 0;
 i4 = i25 + i22 | 0;
 HEAP32[i12 >> 2] = i4;
 i26 = i2 + 20 | 0;
 i10 = HEAP32[i26 >> 2] | 0;
 i9 = HEAP32[((i10 & 8192 | 0) == 0 ? i3 + 44 | 0 : i3 + 48 | 0) >> 2] | 0;
 if ((i5 | 0) == 0) {
  i27 = i9;
  i28 = i10;
 } else {
  i10 = i7;
  i8 = i5 + 124 | 0;
  HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  __ZNK7WebCore12RenderRegion33logicalTopOfFlowThreadContentRectERKNS_10LayoutRectE(i13, i5, i7);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i14, i2);
  i7 = (HEAP32[i13 >> 2] | 0) - (HEAP32[i14 >> 2] | 0) | 0;
  i27 = ((i7 | 0) > 0 ? i7 : 0) + i9 | 0;
  i28 = HEAP32[i26 >> 2] | 0;
 }
 HEAP32[i16 >> 2] = i27;
 if ((i28 & 8192 | 0) == 0) {
  HEAP32[i17 >> 2] = HEAP32[i3 + 52 >> 2];
 } else {
  HEAP32[i17 >> 2] = HEAP32[i3 + 56 >> 2];
 }
 __ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i15, i2, i16, 0, i5, i17);
 i17 = HEAP32[i18 >> 2] | 0;
 i18 = HEAP32[i17 + 40 >> 2] | 0;
 do {
  if ((i18 & 122880 | 0) != 49152) {
   if ((HEAP8[(__ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i17 + 44 >> 2] | 0) >>> 13 & 3, i18 >>> 30 & 1) | 0) + 5 | 0] | 0) == 0) {
    break;
   }
   i5 = i15 | 0;
   i16 = HEAP32[i5 >> 2] | 0;
   if ((i25 | 0) < 0) {
    i2 = i16 + i25 | 0;
    HEAP32[i5 >> 2] = i2;
    i29 = i2;
   } else {
    i29 = i16;
   }
   i16 = HEAP32[((i4 | 0) < (i29 | 0) ? i15 : i12) >> 2] | 0;
   HEAP32[i12 >> 2] = i16;
   i30 = i16;
   i31 = i1 | 0;
   i32 = i30 - i4 | 0;
   HEAP32[i31 >> 2] = i32;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i29 = HEAP32[i15 >> 2] | 0;
 if ((i29 | 0) == (i22 | 0)) {
  i30 = i4;
  i31 = i1 | 0;
  i32 = i30 - i4 | 0;
  HEAP32[i31 >> 2] = i32;
  STACKTOP = i6;
  return;
 }
 i22 = i25 + i29 | 0;
 HEAP32[i12 >> 2] = i22;
 i30 = i22;
 i31 = i1 | 0;
 i32 = i30 - i4 | 0;
 HEAP32[i31 >> 2] = i32;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockERKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = i1;
 i5 = i3;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 HEAP32[i4 + 16 >> 2] = HEAP32[i5 + 16 >> 2];
 i5 = i1 + 20 | 0;
 i4 = i3 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i5 + 16 >> 2] = HEAP32[i4 + 16 >> 2];
 i4 = i1 + 40 | 0;
 HEAP32[i4 >> 2] = 0;
 i5 = i1 + 44 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 48 | 0;
 HEAP8[i6] = HEAP8[i6] & -8;
 HEAP32[i1 + 52 >> 2] = 0;
 HEAP32[i1 + 56 >> 2] = 0;
 i7 = i2 | 0;
 i8 = i2 + 20 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i9 & 768;
 do {
  if ((i10 | 0) == 768) {
   i11 = 7;
  } else {
   if (!((i9 & 131072 | 0) == 0 | (i10 | 0) == 256)) {
    if ((HEAP32[i7 + 24 >> 2] & 16 | 0) != 0) {
     i11 = 7;
     break;
    }
   }
   i12 = i2;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 376 >> 2] & 511](i7) | 0) {
    i11 = 7;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 248 >> 2] & 511](i7) | 0)) {
    break;
   }
   if ((HEAP32[i8 >> 2] & 25165824 | 0) == 16777216) {
    i11 = 7;
   }
  }
 } while (0);
 if ((i11 | 0) == 7) {
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i2;
  i9 = i1 + 8 | 0;
  do {
   if ((HEAP8[i9] & 1) == 0) {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1024 >> 2] & 511](i2) | 0) {
     i13 = 1;
     break;
    }
    i12 = HEAP32[i10 >> 2] | 0;
    if ((HEAP32[i12 + 20 >> 2] & 805306368 | 0) == 0) {
     i13 = 0;
     break;
    }
    i13 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i12 | 0) | 0) != 0 | 0;
   } else {
    i13 = 1;
   }
  } while (0);
  i10 = HEAP8[i9] & -8;
  HEAP32[i1 + 4 >> 2] = i3;
  HEAP8[i9] = i10 | i13;
 }
 do {
  if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 0) {
   if ((HEAP32[i8 >> 2] & 131072 | 0) != 0) {
    if ((HEAP32[i2 + 24 >> 2] & 16 | 0) != 0) {
     i11 = 17;
     break;
    }
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 376 >> 2] & 511](i7) | 0) {
    i11 = 17;
    break;
   }
   if ((HEAP32[i8 >> 2] & 768 | 0) == 768) {
    i11 = 17;
   }
  } else {
   i11 = 17;
  }
 } while (0);
 do {
  if ((i11 | 0) == 17) {
   if ((HEAP32[i2 + 24 >> 2] & 4 | 0) != 0) {
    break;
   }
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0) {
    break;
   }
   i8 = i1 | 0;
   HEAP32[i8 >> 2] = i2;
   i13 = i1 + 8 | 0;
   do {
    if ((HEAP8[i13] & 1) == 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1024 >> 2] & 511](i2) | 0) {
      i14 = 1;
      break;
     }
     i10 = HEAP32[i8 >> 2] | 0;
     if ((HEAP32[i10 + 20 >> 2] & 805306368 | 0) == 0) {
      i14 = 0;
      break;
     }
     i14 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i10 | 0) | 0) != 0 | 0;
    } else {
     i14 = 1;
    }
   } while (0);
   i8 = HEAP8[i13] & -8;
   HEAP32[i1 + 4 >> 2] = i3;
   HEAP8[i13] = i8 | i14;
  }
 } while (0);
 HEAP32[i4 >> 2] = i2;
 if ((HEAP8[i6] & 1) != 0) {
  i15 = 1;
  i16 = HEAP8[i6] | 0;
  i17 = i16 & -8;
  HEAP32[i5 >> 2] = i3;
  i18 = i17 | i15;
  HEAP8[i6] = i18;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1024 >> 2] & 511](i2) | 0) {
  i15 = 1;
  i16 = HEAP8[i6] | 0;
  i17 = i16 & -8;
  HEAP32[i5 >> 2] = i3;
  i18 = i17 | i15;
  HEAP8[i6] = i18;
  return;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
  i15 = 0;
  i16 = HEAP8[i6] | 0;
  i17 = i16 & -8;
  HEAP32[i5 >> 2] = i3;
  i18 = i17 | i15;
  HEAP8[i6] = i18;
  return;
 }
 i15 = (__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0) != 0 | 0;
 i16 = HEAP8[i6] | 0;
 i17 = i16 & -8;
 HEAP32[i5 >> 2] = i3;
 i18 = i17 | i15;
 HEAP8[i6] = i18;
 return;
}
function __ZN7WebCore11RenderBlock17updateFirstLetterEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = i1 + 4 | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 915 | 0] & 1) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 52 >> 2] | 0;
 if ((i3 & 4032 | 0) == 128) {
  return;
 } else {
  i4 = i1;
  i5 = i3;
 }
 L6 : while (1) {
  do {
   if ((i5 & 8192 | 0) != 0) {
    i3 = i4 | 0;
    i6 = i4;
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 511](i3) | 0)) {
     break;
    }
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 556 >> 2] & 511](i3) | 0)) {
     i7 = 12;
     break L6;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 136 >> 2] & 511](i3) | 0) {
     break L6;
    }
   }
  } while (0);
  i3 = HEAP32[i4 + 8 >> 2] | 0;
  if ((HEAP32[i4 + 20 >> 2] & 2048 | 0) != 0 | (i3 | 0) == 0) {
   i7 = 49;
   break;
  }
  if ((HEAP32[i3 + 28 >> 2] | 0) != (i4 | 0)) {
   i7 = 50;
   break;
  }
  if ((HEAP32[i3 + 24 >> 2] & 32 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 136 >> 2] & 511](i3 | 0) | 0)) {
    i7 = 39;
    break;
   }
  }
  i4 = i3;
  i5 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 52 >> 2] | 0;
 }
 do {
  if ((i7 | 0) == 39) {
   return;
  } else if ((i7 | 0) == 49) {
   return;
  } else if ((i7 | 0) == 50) {
   return;
  } else if ((i7 | 0) == 12) {
   if ((i4 | 0) != 0) {
    break;
   }
   return;
  }
 } while (0);
 i5 = HEAP32[i4 + 28 >> 2] | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i3 = i4 | 0;
 i4 = i5;
 L28 : while (1) {
  i8 = i4;
  L30 : while (1) {
   i5 = i8 + 20 | 0;
   if ((HEAP32[i5 >> 2] & 768 | 0) == 256) {
    i9 = i8;
    i7 = 31;
    break L28;
   }
   i10 = i8;
   i6 = i8;
   do {
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 511](i8) | 0) {
     i11 = i8 + 16 | 0;
    } else {
     i12 = HEAP32[i5 >> 2] | 0;
     if ((i12 & 64 | 0) != 0 | (i12 & 25165824 | 0) == 16777216) {
      if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 128) {
       i7 = 21;
       break L28;
      }
      i11 = i8 + 16 | 0;
      break;
     }
     if ((i12 & 2048 | 0) != 0) {
      i9 = i8;
      i7 = 31;
      break L28;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 136 >> 2] & 511](i8) | 0) {
      i13 = i8;
      break L28;
     }
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 116 >> 2] & 511](i8) | 0) {
      i13 = i8;
      break L28;
     }
     if ((HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 52 >> 2] & 8192 | 0) != 0) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 52 >> 2] & 511](i8) | 0) {
       break L30;
      }
     }
     i11 = i8 + 28 | 0;
    }
   } while (0);
   i6 = HEAP32[i11 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i7 = 51;
    break L28;
   } else {
    i8 = i6;
   }
  }
  i6 = HEAP32[i8 + 28 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 41;
   break;
  } else {
   i3 = i10;
   i4 = i6;
  }
 }
 if ((i7 | 0) == 41) {
  return;
 } else if ((i7 | 0) == 51) {
  return;
 } else if ((i7 | 0) == 21) {
  i9 = HEAP32[i8 + 28 >> 2] | 0;
  i7 = 31;
 }
 do {
  if ((i7 | 0) == 31) {
   if ((i9 | 0) != 0) {
    i13 = i9;
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) == 128) {
  __ZN7WebCore11RenderBlock22updateFirstLetterStyleEPNS_12RenderObjectES2_(i1, i3 | 0, i13);
  return;
 }
 if ((HEAP32[i13 + 20 >> 2] & 768 | 0) != 256) {
  return;
 }
 i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((i9 | 0) == 0) {
  __ZN7WebCore11RenderBlock25createFirstLetterRendererEPNS_12RenderObjectEPNS_10RenderTextE(i1, i3 | 0, i13);
  return;
 } else {
  i2 = i9 + 196 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
  __ZN7WebCore11RenderBlock25createFirstLetterRendererEPNS_12RenderObjectEPNS_10RenderTextE(i1, i3 | 0, i13);
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
  return;
 }
}
function __ZN7WebCore11RenderBlockD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) != 0) {
   i5 = HEAP32[H_BASE + 1568 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS1_10ColumnInfoEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i3, i5, i4);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i3 = HEAP32[H_BASE + 1576 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = HEAP32[i3 + 4 >> 2] | 0;
    i6 = i5 << 3 | 0;
    i7 = 0;
    i8 = i5;
   } else {
    i5 = HEAP32[i3 + 8 >> 2] | 0;
    i9 = i1;
    i10 = i9 + ~(i9 << 15) | 0;
    i9 = (i10 >>> 10 ^ i10) * 9 & -1;
    i10 = i9 >>> 6 ^ i9;
    i9 = i10 + ~(i10 << 11) | 0;
    i10 = i9 >>> 16 ^ i9;
    i9 = i5 & i10;
    i11 = i4 + (i9 << 3) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    L10 : do {
     if ((i12 | 0) == (i1 | 0)) {
      i13 = i11;
     } else {
      i14 = (i10 >>> 23) + ~i10 | 0;
      i15 = i14 << 12 ^ i14;
      i14 = i15 >>> 7 ^ i15;
      i15 = i14 << 2 ^ i14;
      i14 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i16 = i9;
      i17 = i12;
      while (1) {
       if ((i17 | 0) == 0) {
        i13 = 0;
        break L10;
       }
       i18 = (i15 | 0) == 0 ? i14 : i15;
       i19 = i18 + i16 & i5;
       i20 = i4 + (i19 << 3) | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       if ((i21 | 0) == (i1 | 0)) {
        i13 = i20;
        break;
       } else {
        i15 = i18;
        i16 = i19;
        i17 = i21;
       }
      }
     }
    } while (0);
    i5 = HEAP32[i3 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i5 << 3) | 0 : i13;
    i7 = i4;
    i8 = i5;
   }
   i5 = i3 | 0;
   i12 = i3 + 4 | 0;
   if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
    break;
   }
   i9 = i6 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i10 | 0) != 0) {
    i9 = i10 + 8 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    if ((i11 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
    __ZN3WTF8fastFreeEPv(i10);
   }
   HEAP32[i6 >> 2] = -1;
   i10 = i3 + 16 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i3 + 12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   i10 = HEAP32[i12 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i5, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i3 = HEAP32[H_BASE + 1520 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE(i1, i3, H_BASE + 1536);
 }
 i3 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i22 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE(i1, i3, H_BASE + 1552);
 i22 = i1 | 0;
 __ZN7WebCore9RenderBoxD2Ev(i22);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlockD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 HEAP32[i1 >> 2] = H_BASE + 336;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) != 0) {
   i5 = HEAP32[H_BASE + 1568 >> 2] | 0;
   HEAP32[i4 >> 2] = i1;
   __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS1_10ColumnInfoEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i3, i5, i4);
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i3 = HEAP32[H_BASE + 1576 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = HEAP32[i3 + 4 >> 2] | 0;
    i6 = i5 << 3 | 0;
    i7 = 0;
    i8 = i5;
   } else {
    i5 = HEAP32[i3 + 8 >> 2] | 0;
    i9 = i1;
    i10 = i9 + ~(i9 << 15) | 0;
    i9 = (i10 >>> 10 ^ i10) * 9 & -1;
    i10 = i9 >>> 6 ^ i9;
    i9 = i10 + ~(i10 << 11) | 0;
    i10 = i9 >>> 16 ^ i9;
    i9 = i5 & i10;
    i11 = i4 + (i9 << 3) | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    L10 : do {
     if ((i12 | 0) == (i1 | 0)) {
      i13 = i11;
     } else {
      i14 = (i10 >>> 23) + ~i10 | 0;
      i15 = i14 << 12 ^ i14;
      i14 = i15 >>> 7 ^ i15;
      i15 = i14 << 2 ^ i14;
      i14 = i15 >>> 20 ^ i15 | 1;
      i15 = 0;
      i16 = i9;
      i17 = i12;
      while (1) {
       if ((i17 | 0) == 0) {
        i13 = 0;
        break L10;
       }
       i18 = (i15 | 0) == 0 ? i14 : i15;
       i19 = i18 + i16 & i5;
       i20 = i4 + (i19 << 3) | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       if ((i21 | 0) == (i1 | 0)) {
        i13 = i20;
        break;
       } else {
        i15 = i18;
        i16 = i19;
        i17 = i21;
       }
      }
     }
    } while (0);
    i5 = HEAP32[i3 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i5 << 3) | 0 : i13;
    i7 = i4;
    i8 = i5;
   }
   i5 = i3 | 0;
   i12 = i3 + 4 | 0;
   if ((i6 | 0) == (i7 + (i8 << 3) | 0)) {
    break;
   }
   i9 = i6 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i10 | 0) != 0) {
    i9 = i10 + 8 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    if ((i11 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
    }
    __ZN3WTF8fastFreeEPv(i10);
   }
   HEAP32[i6 >> 2] = -1;
   i10 = i3 + 16 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i3 + 12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   i10 = HEAP32[i12 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i5, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i3 = HEAP32[H_BASE + 1520 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE(i1, i3, H_BASE + 1536);
 }
 i3 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i22 = i1 | 0;
  __ZN7WebCore9RenderBoxD2Ev(i22);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE(i1, i3, H_BASE + 1552);
 i22 = i1 | 0;
 __ZN7WebCore9RenderBoxD2Ev(i22);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock14hitTestColumnsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 72 | 0;
 i12 = i7 + 88 | 0;
 i13 = i7 + 104 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) == 0) {
  i14 = 0;
  STACKTOP = i7;
  return i14 | 0;
 }
 __ZN7WebCore18ColumnRectIteratorC2ERKNS_11RenderBlockE(i10, i1);
 i15 = i10 + 20 | 0;
 if ((HEAP32[i15 >> 2] | 0) <= -1) {
  i14 = 0;
  STACKTOP = i7;
  return i14 | 0;
 }
 i16 = i4 + 8 | 0;
 i17 = i4 + 16 | 0;
 i18 = i11 | 0;
 i19 = i11 + 4 | 0;
 i20 = i11 + 8 | 0;
 i21 = i11 + 12 | 0;
 i22 = i10 + 28 | 0;
 i23 = i12;
 i24 = i22;
 i25 = i5 | 0;
 i26 = i5 + 4 | 0;
 i5 = i12 | 0;
 i27 = i12 + 4 | 0;
 i28 = i10 + 12 | 0;
 i29 = i10 + 32 | 0;
 i30 = i10 + 28 | 0;
 i31 = i10 + 16 | 0;
 i32 = i10 + 24 | 0;
 i33 = i13 | 0;
 i34 = i13 + 4 | 0;
 i35 = i3 + 68 | 0;
 i36 = i1;
 i37 = i8;
 i38 = i10 | 0;
 i39 = i10 + 4 | 0;
 i10 = i9 | 0;
 while (1) {
  i40 = HEAP32[i17 >> 2] | 0;
  i41 = HEAP32[i17 + 4 >> 2] | 0;
  i42 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i19 >> 2] = i42;
  HEAP32[i20 >> 2] = i40;
  HEAP32[i21 >> 2] = i41;
  HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
  HEAP32[i23 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
  HEAP32[i23 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
  HEAP32[i23 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
  i41 = HEAP32[i26 >> 2] | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + (HEAP32[i25 >> 2] | 0);
  HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + i41;
  if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i4, i12) | 0) {
   i41 = (HEAP8[i28] & 1) == 0;
   i40 = (i41 ? HEAP32[i29 >> 2] | 0 : HEAP32[i30 >> 2] | 0) - (HEAP32[i31 >> 2] | 0) | 0;
   i42 = HEAP32[i32 >> 2] | 0;
   i43 = (HEAP32[i26 >> 2] | 0) + (i41 ? i40 : i42) | 0;
   HEAP32[i33 >> 2] = (i41 ? i42 : i40) + (HEAP32[i25 >> 2] | 0);
   HEAP32[i34 >> 2] = i43;
   if ((HEAP8[i35] & 1) == 0) {
    i44 = 7;
    break;
   }
   if (__ZNK7WebCore10LayoutRect8containsERKS0_(i12, i11) | 0) {
    i44 = 7;
    break;
   }
   FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i36 >> 2] | 0) + 1100 >> 2] & 7](i1, i2, i3, i4, i13, i6) | 0;
  }
  i43 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  HEAP32[i15 >> 2] = i43;
  if ((i43 | 0) < 0) {
   i14 = 0;
   i44 = 20;
   break;
  }
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i8, HEAP32[i38 >> 2] | 0, HEAP32[i39 >> 2] | 0, i43);
  HEAP32[i24 >> 2] = HEAP32[i37 >> 2];
  HEAP32[i24 + 4 >> 2] = HEAP32[i37 + 4 >> 2];
  HEAP32[i24 + 8 >> 2] = HEAP32[i37 + 8 >> 2];
  HEAP32[i24 + 12 >> 2] = HEAP32[i37 + 12 >> 2];
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(HEAP32[i38 >> 2] | 0, i22);
  __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i9, HEAP32[i38 >> 2] | 0);
  HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
  if ((HEAP32[i15 >> 2] | 0) <= -1) {
   i14 = 0;
   i44 = 15;
   break;
  }
 }
 if ((i44 | 0) == 20) {
  STACKTOP = i7;
  return i14 | 0;
 } else if ((i44 | 0) == 7) {
  if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i36 >> 2] | 0) + 1100 >> 2] & 7](i1, i2, i3, i4, i13, i6) | 0) {
   i14 = 1;
   STACKTOP = i7;
   return i14 | 0;
  }
  if ((i6 | 0) != 3) {
   i14 = 0;
   STACKTOP = i7;
   return i14 | 0;
  }
  i14 = FUNCTION_TABLE_iiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1104 >> 2] & 7](i1, i2, i3, i4, i13) | 0;
  STACKTOP = i7;
  return i14 | 0;
 } else if ((i44 | 0) == 15) {
  STACKTOP = i7;
  return i14 | 0;
 }
 return 0;
}
function __ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i4 + 56 | 0;
 i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 511](i1) | 0;
 if ((i13 | 0) == 4) {
  i14 = i1 + 12 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15 | 0;
  i17 = i15;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 752 >> 2] & 511](i16) | 0;
  i19 = i15;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 720 >> 2] & 127](i8, i16);
  i15 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 756 >> 2] & 511](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 724 >> 2] & 127](i7, i16);
  i16 = i3 | 0;
  i19 = (HEAP32[i16 >> 2] | 0) - (i15 + i18 + i8 + (HEAP32[i7 >> 2] | 0)) | 0;
  HEAP32[i16 >> 2] = i19;
  i16 = HEAP32[i14 >> 2] | 0;
  i14 = i16 | 0;
  i7 = i16;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 760 >> 2] & 511](i14) | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 764 >> 2] & 511](i14) | 0;
  i7 = i16;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 728 >> 2] & 127](i5, i14);
  i16 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 732 >> 2] & 127](i6, i14);
  i14 = i2 | 0;
  i7 = (HEAP32[i14 >> 2] | 0) - (i18 + i8 + i16 + (HEAP32[i6 >> 2] | 0)) | 0;
  HEAP32[i14 >> 2] = i7;
  i20 = i7;
  i21 = i19;
 } else if ((i13 | 0) == 1) {
  i19 = i1 + 12 | 0;
  i7 = HEAP32[i19 >> 2] | 0;
  i14 = i7 | 0;
  i6 = i7;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 784 >> 2] & 63](i11, i14, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 788 >> 2] & 63](i12, i14, 0);
  i14 = i3 | 0;
  i6 = (HEAP32[i12 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0;
  HEAP32[i14 >> 2] = i6;
  i14 = HEAP32[i19 >> 2] | 0;
  i19 = i14 | 0;
  i11 = i14;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 792 >> 2] & 63](i9, i19, 0);
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 796 >> 2] & 63](i10, i19, 0);
  i19 = i2 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) + (HEAP32[i19 >> 2] | 0) | 0;
  HEAP32[i19 >> 2] = i11;
  i20 = i11;
  i21 = i6;
 } else if ((i13 | 0) == 3) {
  i13 = i1 + 12 | 0;
  i6 = HEAP32[i13 >> 2] | 0;
  i11 = i6 | 0;
  i19 = i6;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 752 >> 2] & 511](i11) | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 756 >> 2] & 511](i11) | 0;
  i11 = i3 | 0;
  i19 = (HEAP32[i11 >> 2] | 0) - (i9 + i6) | 0;
  HEAP32[i11 >> 2] = i19;
  i11 = HEAP32[i13 >> 2] | 0;
  i13 = i11 | 0;
  i6 = i11;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 760 >> 2] & 511](i13) | 0;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 764 >> 2] & 511](i13) | 0;
  i13 = i2 | 0;
  i6 = (HEAP32[i13 >> 2] | 0) - (i9 + i11) | 0;
  HEAP32[i13 >> 2] = i6;
  i20 = i6;
  i21 = i19;
 } else {
  i20 = HEAP32[i2 >> 2] | 0;
  i21 = HEAP32[i3 >> 2] | 0;
 }
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i20 | 0)) {
   if ((HEAP32[i1 + 24 >> 2] | 0) != (i21 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 }
 i1 = i3;
 HEAP32[i1 >> 2] = i20;
 HEAP32[i1 + 4 >> 2] = i21;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock24logicalRightSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i13 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
 i13 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 i13 = i9;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 40 | 0;
 i19 = i12 + 48 | 0;
 i20 = i12 + 56 | 0;
 i21 = i12 + 64 | 0;
 i22 = i12 + 72 | 0;
 i23 = i12 + 88 | 0;
 i24 = i12 + 104 | 0;
 i25 = i12 + 120 | 0;
 i26 = i3 + 20 | 0;
 i27 = (HEAP32[i26 >> 2] & 8192 | 0) == 0;
 i28 = i5 + 4 | 0;
 i29 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i8 = i5 + (HEAP32[(i27 ? i29 : i28) >> 2] | 0) | 0;
 i30 = (HEAP32[i7 >> 2] | 0) + (HEAP32[(i27 ? i28 : i29) >> 2] | 0) | 0;
 HEAP32[i13 >> 2] = i30;
 HEAP32[i15 >> 2] = i5;
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i14, i2, i3, i15, i10);
 i15 = HEAP32[i9 >> 2] | 0;
 i9 = i15 + i5 | 0;
 HEAP32[i17 >> 2] = i9;
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i16, i2, i3, i17, i10);
 i17 = (HEAP32[i14 >> 2] | 0) < (HEAP32[i16 >> 2] | 0) ? i16 : i14;
 i14 = HEAP32[((i30 | 0) < (HEAP32[i17 >> 2] | 0) ? i17 : i13) >> 2] | 0;
 HEAP32[i19 >> 2] = i5;
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i18, i2, i3, i19, i10);
 HEAP32[i21 >> 2] = i9;
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i20, i2, i3, i21, i10);
 i10 = (HEAP32[((HEAP32[i20 >> 2] | 0) < (HEAP32[i18 >> 2] | 0) ? i20 : i18) >> 2] | 0) - i14 | 0;
 if ((i10 | 0) < 1) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i12;
  return;
 }
 i18 = i22;
 _memset(i18 | 0, 0, 16) | 0;
 i20 = i22 | 0;
 if ((HEAP32[i26 >> 2] & 8192 | 0) == 0) {
  HEAP32[i20 >> 2] = i8;
  i26 = i22 + 4 | 0;
  HEAP32[i26 >> 2] = i14;
  HEAP32[i22 + 8 >> 2] = i15;
  HEAP32[i22 + 12 >> 2] = i10;
  i31 = i26;
 } else {
  HEAP32[i20 >> 2] = i14;
  i14 = i22 + 4 | 0;
  HEAP32[i14 >> 2] = i8;
  HEAP32[i22 + 8 >> 2] = i10;
  HEAP32[i22 + 12 >> 2] = i15;
  i31 = i14;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i3 | 0, i22);
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
 HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + i3;
 if ((i11 | 0) != 0) {
  i3 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i24, i22);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i23, i24);
  __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i25, i6);
  if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
   i32 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i32 = HEAP32[i6 + 36 >> 2] | 0;
  }
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i3, i23, i25, (HEAP32[(HEAP32[i32 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 }
 i32 = i1;
 HEAP32[i32 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i32 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i32 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i32 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 STACKTOP = i12;
 return;
}
function __ZN7WebCore11RenderBlock23logicalLeftSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i13 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
 i13 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 i13 = i9;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 40 | 0;
 i19 = i12 + 48 | 0;
 i20 = i12 + 56 | 0;
 i21 = i12 + 64 | 0;
 i22 = i12 + 72 | 0;
 i23 = i12 + 88 | 0;
 i24 = i12 + 104 | 0;
 i25 = i12 + 120 | 0;
 i26 = i3 + 20 | 0;
 i27 = i5 + 4 | 0;
 i28 = i5 | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 i8 = i5 + (HEAP32[((HEAP32[i26 >> 2] & 8192 | 0) == 0 ? i28 : i27) >> 2] | 0) | 0;
 HEAP32[i14 >> 2] = i5;
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i13, i2, i3, i14, i10);
 i14 = HEAP32[i9 >> 2] | 0;
 i9 = i14 + i5 | 0;
 HEAP32[i16 >> 2] = i9;
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i15, i2, i3, i16, i10);
 i16 = HEAP32[((HEAP32[i13 >> 2] | 0) < (HEAP32[i15 >> 2] | 0) ? i15 : i13) >> 2] | 0;
 i13 = (HEAP32[i7 >> 2] | 0) + (HEAP32[((HEAP32[i26 >> 2] & 8192 | 0) == 0 ? i27 : i28) >> 2] | 0) | 0;
 HEAP32[i17 >> 2] = i13;
 HEAP32[i19 >> 2] = i5;
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i18, i2, i3, i19, i10);
 HEAP32[i21 >> 2] = i9;
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i20, i2, i3, i21, i10);
 i10 = (HEAP32[i20 >> 2] | 0) < (HEAP32[i18 >> 2] | 0) ? i20 : i18;
 i18 = (HEAP32[((HEAP32[i10 >> 2] | 0) < (i13 | 0) ? i10 : i17) >> 2] | 0) - i16 | 0;
 if ((i18 | 0) < 1) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i12;
  return;
 }
 i17 = i22;
 _memset(i17 | 0, 0, 16) | 0;
 i10 = i22 | 0;
 if ((HEAP32[i26 >> 2] & 8192 | 0) == 0) {
  HEAP32[i10 >> 2] = i8;
  i26 = i22 + 4 | 0;
  HEAP32[i26 >> 2] = i16;
  HEAP32[i22 + 8 >> 2] = i14;
  HEAP32[i22 + 12 >> 2] = i18;
  i29 = i26;
 } else {
  HEAP32[i10 >> 2] = i16;
  i16 = i22 + 4 | 0;
  HEAP32[i16 >> 2] = i8;
  HEAP32[i22 + 8 >> 2] = i18;
  HEAP32[i22 + 12 >> 2] = i14;
  i29 = i16;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i3 | 0, i22);
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
 HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + i3;
 if ((i11 | 0) != 0) {
  i3 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i24, i22);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i23, i24);
  __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i25, i6);
  if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
   i30 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i30 = HEAP32[i6 + 36 >> 2] | 0;
  }
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i3, i23, i25, (HEAP32[(HEAP32[i30 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 }
 i30 = i1;
 HEAP32[i30 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i30 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
 HEAP32[i30 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
 HEAP32[i30 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
 STACKTOP = i12;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i7 = 8;
  } else {
   i8 = i6 << 1;
   i7 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i8 | 0) ? i6 : i8;
  }
  __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i7, 0) | 0;
  i9 = HEAP32[i4 >> 2] | 0;
 } else {
  i9 = i5;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i7;
 i6 = i8 + ~(i8 << 15) | 0;
 i8 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i8 >>> 6 ^ i8;
 i8 = i6 + ~(i6 << 11) | 0;
 i6 = i8 >>> 16 ^ i8;
 i8 = i6 & i5;
 i10 = i9 + (i8 << 3) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = i7;
  } else {
   i14 = (i6 >>> 23) + ~i6 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i8;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i7 | 0)) {
     i20 = 8;
     break;
    }
    i21 = (i19 | 0) == -1 ? i18 : i16;
    i22 = (i15 | 0) == 0 ? i14 : i15;
    i23 = i22 + i17 & i5;
    i24 = i9 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i20 = 10;
     break;
    } else {
     i15 = i22;
     i16 = i21;
     i17 = i23;
     i18 = i24;
     i19 = i25;
    }
   }
   if ((i20 | 0) == 10) {
    if ((i21 | 0) == 0) {
     i12 = i24;
     i13 = i7;
     break;
    }
    i19 = i21;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i12 = i21;
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i20 | 0) == 8) {
    i19 = i9 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i12 >> 2] = i13;
 i13 = i12 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i9 | 0) != 0) {
  i13 = i9 + 8 | 0;
  i20 = HEAP32[i13 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  if ((i20 | 0) != 0) {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
  }
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = i2 + 12 | 0;
 i20 = (HEAP32[i9 >> 2] | 0) + 1 | 0;
 HEAP32[i9 >> 2] = i20;
 i9 = i2 + 4 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i20 << 1 | 0) < (i13 | 0)) {
  i26 = i12;
  i27 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i28 = 8;
  } else {
   i3 = i13 << 1;
   i28 = (i20 * 6 & -1 | 0) < (i3 | 0) ? i13 : i3;
  }
  i3 = __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i2, i28, i12) | 0;
  i26 = i3;
  i27 = HEAP32[i9 >> 2] | 0;
 }
 i9 = (HEAP32[i4 >> 2] | 0) + (i27 << 3) | 0;
 i27 = i1;
 HEAP32[i27 >> 2] = i26;
 HEAP32[i27 + 4 >> 2] = i9;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES4_NS_10PassOwnPtrISE_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SJ_SO_SL_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i2, i8, 0) | 0;
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
   i14 = i8;
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
 i14 = i13 + 4 | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i3 | 0) != 0) {
  i4 = HEAP32[i3 >> 2] | 0;
  if ((i4 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i4);
  }
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i2 + 12 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 1 | 0;
 HEAP32[i3 >> 2] = i4;
 i3 = i2 + 4 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i22 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i22 | 0) ? i14 : i22;
  }
  i22 = __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i2, i29, i13) | 0;
  i27 = i22;
  i28 = HEAP32[i3 >> 2] | 0;
 }
 i3 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i3;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderBlock22containingColumnsBlockEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((i1 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = 0;
 i5 = i1 | 0;
 while (1) {
  if ((HEAP32[i5 + 24 >> 2] & 16 | 0) == 0) {
   i3 = 0;
   i6 = 31;
   break;
  }
  i1 = i5 | 0;
  i7 = i5 + 20 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  if ((i8 & 64 | 0) != 0 | (i8 & 25165824 | 0) == 16777216) {
   i3 = 0;
   i6 = 29;
   break;
  }
  i8 = i5;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 188 >> 2] & 511](i1) | 0) {
   i3 = 0;
   i6 = 42;
   break;
  }
  i9 = HEAP32[i5 + 4 >> 2] | 0;
  if ((HEAP32[(HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i9 | 0)) {
   i3 = 0;
   i6 = 44;
   break;
  }
  i9 = HEAP32[i7 >> 2] | 0;
  if (!((i9 & 768 | 0) != 768 & (i9 & 65536 | 0) == 0)) {
   i3 = 0;
   i6 = 30;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 96 >> 2] & 511](i1) | 0) {
   i3 = 0;
   i6 = 35;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 184 >> 2] & 511](i1) | 0) {
   i3 = 0;
   i6 = 37;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 136 >> 2] & 511](i1) | 0) {
   i3 = 0;
   i6 = 36;
   break;
  }
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] & 511](i1) | 0) {
   i3 = 0;
   i6 = 38;
   break;
  }
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 56 >> 2] & 511](i1) | 0;
  i8 = i9 ? i4 : i5;
  i9 = HEAP32[i5 + 36 >> 2] | 0;
  i10 = (HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
  do {
   if ((HEAP8[i10] & 3) == 3) {
    i11 = (HEAP32[i10 >> 2] | 0) >>> 11 & 3;
    if ((i11 | 0) == 2) {
     break;
    }
    i12 = (HEAP32[i9 + 44 >> 2] | 0) >>> 13 & 3;
    if (((i12 | 0) == 0 | (i12 | 0) == 3) ^ (i11 | 0) == 0) {
     i6 = 15;
    }
   } else {
    i6 = 15;
   }
  } while (0);
  if ((i6 | 0) == 15) {
   i6 = 0;
   if (i2) {
    i3 = i8;
    i6 = 32;
    break;
   }
   if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
    i13 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i13 = i9;
   }
   i10 = (HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   if ((HEAP8[i10] & 3) == 3) {
    i11 = (HEAP32[i10 >> 2] | 0) >>> 11 & 3;
    if ((i11 | 0) == 2) {
     i3 = i8;
     i6 = 33;
     break;
    }
    i10 = (HEAP32[i13 + 44 >> 2] | 0) >>> 13 & 3;
    if (!(((i10 | 0) == 0 | (i10 | 0) == 3) ^ (i11 | 0) == 0)) {
     i3 = i8;
     i6 = 34;
     break;
    }
   }
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) | 0)) {
    i3 = i8;
    i6 = 43;
    break;
   }
  }
  if ((HEAP32[i7 >> 2] & 768 | 0) == 256) {
   i14 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i14 = HEAP32[i1 + 36 >> 2] | 0;
  }
  if ((HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) | 0) {
    i3 = 0;
    i6 = 39;
    break;
   }
  }
  i11 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i3 = 0;
   i6 = 40;
   break;
  } else {
   i4 = i8;
   i5 = i11;
  }
 }
 if ((i6 | 0) == 42) {
  return i3 | 0;
 } else if ((i6 | 0) == 43) {
  return i3 | 0;
 } else if ((i6 | 0) == 34) {
  return i3 | 0;
 } else if ((i6 | 0) == 35) {
  return i3 | 0;
 } else if ((i6 | 0) == 36) {
  return i3 | 0;
 } else if ((i6 | 0) == 44) {
  return i3 | 0;
 } else if ((i6 | 0) == 30) {
  return i3 | 0;
 } else if ((i6 | 0) == 31) {
  return i3 | 0;
 } else if ((i6 | 0) == 32) {
  return i3 | 0;
 } else if ((i6 | 0) == 33) {
  return i3 | 0;
 } else if ((i6 | 0) == 37) {
  return i3 | 0;
 } else if ((i6 | 0) == 38) {
  return i3 | 0;
 } else if ((i6 | 0) == 39) {
  return i3 | 0;
 } else if ((i6 | 0) == 40) {
  return i3 | 0;
 } else if ((i6 | 0) == 29) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock21makeChildrenNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = i1 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -2097153;
 i7 = i1 | 0;
 i8 = i1 + 28 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1016 >> 2] & 63](i1);
 if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
  i10 = HEAP32[(HEAP32[i9 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i9 + 36 >> 2] | 0;
 }
 if ((HEAP32[i10 + 48 >> 2] & 31 | 0) == 3) {
  __ZN7WebCore11RenderBlock27moveRunInToOriginalPositionERNS_12RenderObjectE(i1, i9);
  i11 = HEAP32[i8 >> 2] | 0;
 } else {
  i11 = i9;
 }
 L11 : do {
  if ((i11 | 0) != 0) {
   i9 = i1 + 4 | 0;
   i8 = i1 + 8 | 0;
   i10 = i1 | 0;
   i12 = i5 + 36 | 0;
   i13 = i11;
   L13 : while (1) {
    i14 = HEAP32[i13 + 20 >> 2] | 0;
    i15 = i14 & 1024;
    do {
     if ((i15 | 0) == 0) {
      if ((i14 & 64 | 0) != 0 | (i14 & 25165824 | 0) == 16777216) {
       i16 = 13;
       break;
      }
      i17 = HEAP32[i13 + 16 >> 2] | 0;
     } else {
      i16 = 13;
     }
    } while (0);
    do {
     if ((i16 | 0) == 13) {
      i16 = 0;
      i14 = (i15 | 0) != 0;
      i18 = HEAP32[i13 + 16 >> 2] | 0;
      L20 : do {
       if ((i18 | 0) == 0) {
        i19 = i14;
        i20 = 0;
        i21 = i13;
       } else {
        i22 = i14;
        i23 = i18;
        i24 = i13;
        while (1) {
         i25 = HEAP32[i23 + 20 >> 2] | 0;
         i26 = i25 & 1024;
         if ((i26 | 0) == 0) {
          if ((i25 & 64 | 0) == 0) {
           i27 = (i25 & 25165824 | 0) != 16777216;
          } else {
           i27 = 0;
          }
          if (i27 | (i23 | 0) == (i2 | 0)) {
           i19 = i22;
           i20 = i23;
           i21 = i24;
           break L20;
          }
         } else {
          if ((i23 | 0) == (i2 | 0)) {
           i19 = i22;
           i20 = i2;
           i21 = i24;
           break L20;
          }
         }
         i25 = (i26 | 0) != 0 | i22;
         i26 = HEAP32[i23 + 16 >> 2] | 0;
         if ((i26 | 0) == 0) {
          i19 = i25;
          i20 = 0;
          i21 = i23;
          break;
         } else {
          i22 = i25;
          i24 = i23;
          i23 = i26;
         }
        }
       }
      } while (0);
      if (!i19) {
       i17 = i20;
       break;
      }
      if ((i13 | 0) == 0) {
       break L11;
      }
      i18 = HEAP32[i21 + 16 >> 2] | 0;
      i14 = __ZN3WTF10fastMallocEj(116) | 0;
      i23 = HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
      if ((HEAP32[i6 >> 2] & 768 | 0) == 256) {
       i28 = HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0;
      } else {
       i28 = HEAP32[i12 >> 2] | 0;
      }
      __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, i28, 1);
      __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i14, i23, i4);
      __ZN7WebCore13RenderElement15initializeStyleEv(i14);
      __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i7, i14, i13, 0);
      __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i10, i14, i13, i18, 0, 0);
      if ((i18 | 0) == 0) {
       break L11;
      } else {
       i13 = i18;
       continue L13;
      }
     }
    } while (0);
    if ((i17 | 0) == 0) {
     break;
    } else {
     i13 = i17;
    }
   }
  }
 } while (0);
 __ZNK7WebCore12RenderObject7repaintEb(i5, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock22updateFirstLetterStyleEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = i8 | 0;
 i9 = HEAP32[i8 + 8 >> 2] | 0;
 i10 = i9 | 0;
 do {
  if ((HEAP32[i9 + 20 >> 2] & 768 | 0) == 256) {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i12 = HEAP32[i11 + 36 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i11) | 0;
    break;
   }
  } else {
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    i12 = HEAP32[i10 + 36 >> 2] | 0;
    break;
   } else {
    i12 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i9) | 0;
    break;
   }
  }
 } while (0);
 i10 = __ZNK7WebCore12RenderObject20getCachedPseudoStyleENS_8PseudoIdEPNS_11RenderStyleE(i2, 2, i12) | 0;
 i12 = i10 + 48 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 HEAP32[i12 >> 2] = (i2 & 100663296 | 0) != 0 | i2 & -29360160;
 i2 = i1 + 4 | 0;
 if ((__ZN7WebCore5Style15determineChangeEPKNS_11RenderStyleES3_PNS_8SettingsE(HEAP32[i8 + 36 >> 2] | 0, i10, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) | 0) != 3) {
  HEAP32[i7 >> 2] = i10;
  i1 = i10 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i8, i7);
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i12 >> 2] & 31 | 0) == 0) {
  i12 = __ZN3WTF10fastMallocEj(52) | 0;
  i7 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP32[i5 >> 2] = i10;
  i1 = i10 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  __ZN7WebCore12RenderInlineC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i12, i7, i5);
  i13 = i12;
 } else {
  i12 = __ZN3WTF10fastMallocEj(116) | 0;
  i5 = HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP32[i6 >> 2] = i10;
  i7 = i10 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i12, i5, i6);
  i13 = i12;
 }
 i12 = i13;
 i6 = i13;
 __ZN7WebCore13RenderElement15initializeStyleEv(i6);
 i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i2 = (i5 | 0) == 0;
 if (!i2) {
  i7 = i5 + 196 | 0;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 }
 i7 = i8 + 28 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i1 = i8;
  i11 = i13;
  i14 = i10;
  while (1) {
   if ((HEAP32[i14 + 20 >> 2] & 768 | 0) == 256) {
    __ZN7WebCore10RenderText25removeAndDestroyTextBoxesEv(i14);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 636 >> 2] & 127](i8, i14);
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 628 >> 2] & 63](i6, i14, 0);
   i14 = HEAP32[i7 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
  }
 }
 i14 = HEAP32[i8 + 16 >> 2] | 0;
 i7 = __ZNK7WebCore20RenderBoxModelObject24firstLetterRemainingTextEv(i8) | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i7 + 72 >> 2] = i12;
  __ZN7WebCore20RenderBoxModelObject27setFirstLetterRemainingTextEPNS_18RenderTextFragmentE(i12, i7);
 }
 __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i9, i3, 0);
 __ZN7WebCore12RenderObject7destroyEv(i3);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 628 >> 2] & 63](i9, i13, i14);
 if (i2) {
  STACKTOP = i4;
  return;
 }
 i2 = i5 + 196 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SG_SM_SJ_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E6rehashEiPSD_(i2, i8, 0) | 0;
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
   if ((i14 | 0) == 10) {
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
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i26 + 4 | 0, i4) | 0;
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
  i28 = __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E6rehashEiPSD_(i2, i31, i26) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EES4_NS_10PassOwnPtrISC_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SE_SG_SH_SN_SK_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i2, i8, 0) | 0;
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
   if ((i14 | 0) == 10) {
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
   } else if ((i14 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i26 = i13;
  i27 = i8;
  i28 = i2 + 16 | 0;
 }
 HEAP32[i26 >> 2] = i27;
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i26 + 4 | 0, i4) | 0;
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
  i28 = __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i2, i31, i26) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_(i1, i2, i3) {
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
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i11;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i17 | 0) != 0) {
    i13 = i17 + 8 | 0;
    i20 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    if ((i20 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 63](i20);
    }
    __ZN3WTF8fastFreeEPv(i17);
   }
   HEAP32[i30 >> 2] = HEAP32[i12 >> 2];
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i36 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i36 << 3) >> 2] | 0) != -1) {
    i1 = i7 + (i36 << 3) + 4 | 0;
    i11 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = 0;
    if ((i11 | 0) == 0) {
     break;
    }
    i1 = i11 + 8 | 0;
    i10 = HEAP32[i1 >> 2] | 0;
    HEAP32[i1 >> 2] = 0;
    if ((i10 | 0) != 0) {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
    }
    __ZN3WTF8fastFreeEPv(i11);
   }
  } while (0);
  i2 = i36 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i36 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore11RenderBlock26addContinuationWithOutlineEPNS_12RenderInlineE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 HEAP32[i6 >> 2] = i2;
 if (HEAP8[H_BASE + 1504 | 0] | 0) {
  i10 = HEAP32[H_BASE + 1512 >> 2] | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  i11 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1512 >> 2] = i11;
  HEAP8[H_BASE + 1504 | 0] = 1;
  i10 = i11;
 }
 i11 = HEAP32[i10 + 8 >> 2] | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i12 = i1;
 i13 = i12 + ~(i12 << 15) | 0;
 i12 = (i13 >>> 10 ^ i13) * 9 & -1;
 i13 = i12 >>> 6 ^ i12;
 i12 = i13 + ~(i13 << 11) | 0;
 i13 = i12 >>> 16 ^ i12;
 L5 : do {
  if ((i2 | 0) == 0) {
   i14 = 11;
  } else {
   i12 = i11 & i13;
   i15 = i2 + (i12 << 3) | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   if ((i16 | 0) == (i1 | 0)) {
    i17 = i15;
   } else {
    i15 = (i13 >>> 23) + ~i13 | 0;
    i18 = i15 << 12 ^ i15;
    i15 = i18 >>> 7 ^ i18;
    i18 = i15 << 2 ^ i15;
    i15 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i12;
    i12 = i16;
    while (1) {
     if ((i12 | 0) == 0) {
      i14 = 11;
      break L5;
     }
     i16 = (i18 | 0) == 0 ? i15 : i18;
     i20 = i16 + i19 & i11;
     i21 = i2 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i1 | 0)) {
      i17 = i21;
      break;
     } else {
      i18 = i16;
      i19 = i20;
      i12 = i22;
     }
    }
   }
   if ((i17 | 0) == 0) {
    i14 = 11;
    break;
   }
   i12 = HEAP32[i17 + 4 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i14 = 11;
   } else {
    i23 = i12;
   }
  }
 } while (0);
 if ((i14 | 0) == 11) {
  i14 = __ZN3WTF10fastMallocEj(32) | 0;
  i17 = i14;
  _memset(i14 | 0, 0, 28) | 0;
  i2 = __Znwj(3080) | 0;
  i11 = i2 + 8 | 0;
  HEAP32[i2 >> 2] = i11;
  HEAP8[i2 + 4 | 0] = 0;
  _memset(i11 | 0, 0, 3072) | 0;
  HEAP32[i14 + 28 >> 2] = i2;
  HEAP32[i7 >> 2] = i1;
  HEAP32[i8 >> 2] = i17;
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SG_SM_SJ_EEEEOT0_OT1_(i9, i10 | 0, i7, i8);
  if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE((HEAP32[i9 >> 2] | 0) + 4 | 0, i8) | 0;
  }
  __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i8);
  i23 = i17;
 }
 HEAP32[i5 >> 2] = HEAP32[i23 + 28 >> 2];
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i4, i23 | 0, i6, i5);
 if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = HEAP32[HEAP32[i4 >> 2] >> 2] | 0;
 i4 = i23 + 24 | 0;
 HEAP32[i5 + 4 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 8 >> 2] = 0;
 i6 = HEAP32[i4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAP32[i23 + 20 >> 2] = i5;
 } else {
  HEAP32[i6 + 8 >> 2] = i5;
 }
 HEAP32[i4 >> 2] = i5;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i8, 0) | 0;
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
   i14 = i8;
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
   if ((i21 | 0) == 10) {
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
   } else if ((i21 | 0) == 8) {
    i20 = i10 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 HEAP32[i13 >> 2] = i14;
 i14 = i13 + 4 | 0;
 i10 = HEAP32[i14 >> 2] | 0;
 i21 = i4 | 0;
 i4 = HEAP32[i21 >> 2] | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i14 >> 2] = i4;
 if ((i10 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = i2 + 12 | 0;
 i4 = (HEAP32[i10 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = i4;
 i10 = i2 + 4 | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i14 | 0)) {
  i27 = i13;
  i28 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i29 = 8;
  } else {
   i21 = i14 << 1;
   i29 = (i4 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i2, i29, i13) | 0;
  i27 = i21;
  i28 = HEAP32[i10 >> 2] | 0;
 }
 i10 = (HEAP32[i5 >> 2] | 0) + (i28 << 3) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i10;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 20 | 0;
 i8 = (HEAP32[i7 >> 2] & 4194304 | 0) == 0;
 do {
  if (!i8) {
   i9 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i10 = i1 | 0;
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   i9 = i1;
   i13 = i9 + ~(i9 << 15) | 0;
   i9 = (i13 >>> 10 ^ i13) * 9 & -1;
   i13 = i9 >>> 6 ^ i9;
   i9 = i13 + ~(i13 << 11) | 0;
   i13 = i9 >>> 16 ^ i9;
   if ((i12 | 0) == 0) {
    i14 = 0;
   } else {
    i9 = i11 & i13;
    i15 = i12 + (i9 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    L5 : do {
     if ((i16 | 0) == (i10 | 0)) {
      i17 = i15;
      i18 = 7;
     } else {
      i19 = (i13 >>> 23) + ~i13 | 0;
      i20 = i19 << 12 ^ i19;
      i19 = i20 >>> 7 ^ i20;
      i20 = i19 << 2 ^ i19;
      i19 = i20 >>> 20 ^ i20 | 1;
      i20 = 0;
      i21 = i9;
      i22 = i16;
      while (1) {
       if ((i22 | 0) == 0) {
        i23 = 0;
        break L5;
       }
       i24 = (i20 | 0) == 0 ? i19 : i20;
       i25 = i24 + i21 & i11;
       i26 = i12 + (i25 << 3) | 0;
       i27 = HEAP32[i26 >> 2] | 0;
       if ((i27 | 0) == (i10 | 0)) {
        i17 = i26;
        i18 = 7;
        break;
       } else {
        i20 = i24;
        i21 = i25;
        i22 = i27;
       }
      }
     }
    } while (0);
    do {
     if ((i18 | 0) == 7) {
      if ((i17 | 0) == 0) {
       i23 = 0;
       break;
      }
      i23 = HEAP32[i17 + 4 >> 2] | 0;
     }
    } while (0);
    if (i8) {
     break;
    } else {
     i14 = i23;
    }
   }
   i10 = i2 | 0;
   do {
    if ((HEAP32[i10 >> 2] | 0) == 0) {
     i12 = i1 | 0;
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i12);
     if ((HEAP32[i7 >> 2] & 768 | 0) == 768) {
      __ZNK7WebCore10RenderView23pageOrViewLogicalHeightEv(i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
     } else {
      __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i6, i12);
     }
     i12 = HEAP32[i6 >> 2] | 0;
     if ((i12 | 0) > 0) {
      HEAP32[i10 >> 2] = i12;
      HEAP8[i4] = 1;
     }
     i12 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
     if ((i12 | 0) == 3 | (i12 | 0) == 0) {
      HEAP32[i1 + 56 >> 2] = 0;
      break;
     } else {
      HEAP32[i1 + 52 >> 2] = 0;
      break;
     }
    }
   } while (0);
   i12 = i14 + 20 | 0;
   i11 = HEAP32[i12 >> 2] | 0;
   i16 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i11 | 0) == (i16 | 0)) {
     i28 = i11;
    } else {
     if ((HEAP32[i7 >> 2] & 1048576 | 0) == 0) {
      i28 = i16;
      break;
     }
     HEAP8[i3] = 1;
     i28 = HEAP32[i10 >> 2] | 0;
    }
   } while (0);
   HEAP32[i12 >> 2] = i28;
   do {
    if ((HEAP8[i4] & 1) == 0) {
     if ((HEAP32[i10 >> 2] | 0) != 0) {
      break;
     }
     HEAP32[i14 + 28 >> 2] = 0;
     HEAP32[i14 + 32 >> 2] = 0;
     HEAP32[i14 + 36 >> 2] = 0;
    }
   } while (0);
   HEAP32[i14 + 40 >> 2] = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1132 >> 2] & 511](i1) | 0;
   STACKTOP = i5;
   return;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 511](i1 | 0) | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i2 >> 2] = 1;
 HEAP8[i3] = (HEAPU8[i1 + 292 | 0] | 0) >>> 5 & 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore18ColumnRectIteratorC2ERKNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i2;
 i11 = i1 + 4 | 0;
 i12 = i2 + 20 | 0;
 L1 : do {
  if ((HEAP32[i12 >> 2] & 4194304 | 0) == 0) {
   i13 = 0;
  } else {
   i14 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i15 = i2 | 0;
   i16 = HEAP32[i14 + 8 >> 2] | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   i14 = i2;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   if ((i17 | 0) == 0) {
    i13 = 0;
    break;
   }
   i14 = i16 & i18;
   i19 = i17 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   if ((i20 | 0) == (i15 | 0)) {
    i21 = i19;
   } else {
    i19 = (i18 >>> 23) + ~i18 | 0;
    i18 = i19 << 12 ^ i19;
    i19 = i18 >>> 7 ^ i18;
    i18 = i19 << 2 ^ i19;
    i19 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i22 = i14;
    i14 = i20;
    while (1) {
     if ((i14 | 0) == 0) {
      i13 = 0;
      break L1;
     }
     i20 = (i18 | 0) == 0 ? i19 : i18;
     i23 = i20 + i22 & i16;
     i24 = i17 + (i23 << 3) | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == (i15 | 0)) {
      i21 = i24;
      break;
     } else {
      i18 = i20;
      i22 = i23;
      i14 = i25;
     }
    }
   }
   if ((i21 | 0) == 0) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i21 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i11 >> 2] = i13;
 i13 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 HEAP32[i1 + 8 >> 2] = (i13 | 0) == 1 | (i13 | 0) == 3 ? 1 : -1;
 HEAP8[i1 + 12 | 0] = (HEAP32[i12 >> 2] | 0) >>> 13 & 1;
 i13 = i1 + 16 | 0;
 i21 = i2 | 0;
 i14 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i12 >> 2] & 8192 | 0) == 0) {
  i12 = FUNCTION_TABLE_ii[HEAP32[i14 + 736 >> 2] & 511](i21) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i5, i21);
  HEAP32[i13 >> 2] = (HEAP32[i5 >> 2] | 0) + i12;
 } else {
  i12 = FUNCTION_TABLE_ii[HEAP32[i14 + 744 >> 2] & 511](i21) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i4, i21);
  HEAP32[i13 >> 2] = (HEAP32[i4 >> 2] | 0) + i12;
 }
 i12 = i1 + 24 | 0;
 i4 = i1 + 28 | 0;
 _memset(i12 | 0, 0, 20) | 0;
 i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + 16 >> 2] | 0;
 i21 = i1 + 20 | 0;
 HEAP32[i21 >> 2] = i13 - 1;
 __ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv(i8, HEAP32[i10 >> 2] | 0);
 HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
 __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i9, HEAP32[i10 >> 2] | 0);
 HEAP32[i12 >> 2] = Math_imul(HEAP32[i9 >> 2] | 0, i13) | 0;
 i13 = i6;
 i9 = HEAP32[i21 >> 2] | 0;
 if ((i9 | 0) < 0) {
  STACKTOP = i3;
  return;
 }
 i21 = i4;
 __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i6, HEAP32[i10 >> 2] | 0, HEAP32[i11 >> 2] | 0, i9);
 HEAP32[i21 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i21 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
 HEAP32[i21 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
 HEAP32[i21 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(HEAP32[i10 >> 2] | 0, i4);
 __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i7, HEAP32[i10 >> 2] | 0);
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) - (HEAP32[i7 >> 2] | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    i20 = HEAP32[i17 >> 2] | 0;
    if ((i20 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i20);
    }
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    i11 = HEAP32[i1 >> 2] | 0;
    if ((i11 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i11);
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1136 >> 2] & 31](i1, i2) | 0;
 i11 = i1 + 20 | 0;
 i12 = (HEAP32[i11 >> 2] & 4194304 | 0) != 0;
 if (!i10) {
  if (!i12) {
   STACKTOP = i4;
   return;
  }
  i10 = HEAP32[H_BASE + 1568 >> 2] | 0;
  HEAP32[i6 >> 2] = i1;
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS1_10ColumnInfoEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i5, i10, i6);
  i6 = HEAP32[i5 >> 2] | 0;
  if ((i6 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i6);
  }
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -4194305;
  STACKTOP = i4;
  return;
 }
 i6 = HEAP32[H_BASE + 1568 >> 2] | 0;
 if (i12) {
  i12 = i1 | 0;
  i5 = HEAP32[i6 + 8 >> 2] | 0;
  i10 = HEAP32[i6 >> 2] | 0;
  i13 = i1;
  i14 = i13 + ~(i13 << 15) | 0;
  i13 = (i14 >>> 10 ^ i14) * 9 & -1;
  i14 = i13 >>> 6 ^ i13;
  i13 = i14 + ~(i14 << 11) | 0;
  i14 = i13 >>> 16 ^ i13;
  i13 = i5 & i14;
  i15 = i10 + (i13 << 3) | 0;
  if ((HEAP32[i15 >> 2] | 0) == (i12 | 0)) {
   i16 = i15;
  } else {
   i15 = (i14 >>> 23) + ~i14 | 0;
   i14 = i15 << 12 ^ i15;
   i15 = i14 >>> 7 ^ i14;
   i14 = i15 << 2 ^ i15;
   i15 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i17 = i13;
   while (1) {
    i13 = (i14 | 0) == 0 ? i15 : i14;
    i18 = i13 + i17 & i5;
    i19 = i10 + (i18 << 3) | 0;
    if ((HEAP32[i19 >> 2] | 0) == (i12 | 0)) {
     i16 = i19;
     break;
    } else {
     i14 = i13;
     i17 = i18;
    }
   }
  }
  i20 = HEAP32[i16 + 4 >> 2] | 0;
 } else {
  if ((i6 | 0) == 0) {
   i6 = __ZN3WTF10fastMallocEj(20) | 0;
   _memset(i6 | 0, 0, 20) | 0;
   HEAP32[H_BASE + 1568 >> 2] = i6;
  }
  i6 = __ZN3WTF10fastMallocEj(44) | 0;
  i16 = i6;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 1;
  HEAP32[i6 + 8 >> 2] = 0;
  HEAP8[i6 + 12 | 0] = 0;
  HEAP32[i6 + 16 >> 2] = 1;
  _memset(i6 + 20 | 0, 0, 24) | 0;
  i6 = HEAP32[H_BASE + 1568 >> 2] | 0;
  HEAP32[i7 >> 2] = i1;
  i17 = i8 | 0;
  HEAP32[i17 >> 2] = i16;
  __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_(i9, i6 | 0, i7, i8);
  i8 = HEAP32[i17 >> 2] | 0;
  if ((i8 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i8);
  }
  HEAP32[i11 >> 2] = HEAP32[i11 >> 2] | 4194304;
  i20 = i16;
 }
 HEAP32[i20 + 4 >> 2] = i2;
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 i3 = i1 + 36 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 11 & 3;
 if ((i2 | 0) == 2) {
  i21 = 0;
 } else {
  i16 = (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3;
  i21 = (((i16 | 0) == 0 | (i16 | 0) == 3) ^ (i2 | 0) == 0) & 1;
 }
 HEAP32[i20 + 8 >> 2] = i21;
 HEAP8[i20 + 12 | 0] = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 24576 | 0) == 8192 | 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i8, 0) | 0;
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
 i9 = (i7 >>> 23) + ~i7 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i7;
 i7 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i10 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 8;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i7 | 0) == 0 ? i9 : i7;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i7 = i15;
 }
 if ((i18 | 0) == 8) {
  i18 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i10 = i1;
  HEAP32[i10 >> 2] = i14;
  HEAP32[i10 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i10 = i11 + 4 | 0;
    if ((HEAP8[i10] & 1) != 0) {
     i21 = 0;
     break;
    }
    i7 = i14 + 12 | 0;
    if ((i7 | 0) != (i11 + 200 | 0)) {
     i21 = i7;
     break;
    }
    HEAP8[i10] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  if ((i14 | 0) == 0) {
   i24 = 8;
  } else {
   i21 = i14 << 1;
   i24 = (i3 * 6 & -1 | 0) < (i21 | 0) ? i14 : i21;
  }
  i21 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i2, i24, i19) | 0;
  i22 = i21;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore23OverflowEventDispatcherD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 if ((HEAP8[i1 + 4 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i4;
 i10 = HEAP32[i8 + 88 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 0;
  } else {
   i12 = i10 + 4 | 0;
   HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8 | 0, i4);
   i12 = HEAP32[i4 >> 2] | 0;
   i13 = HEAP32[i8 + 44 >> 2] | 0;
   if ((i12 | 0) < (i13 | 0)) {
    i11 = 1;
    break;
   }
   i14 = (HEAP32[(HEAP32[i8 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i14 | 0) == 3 | (i14 | 0) == 0) {
    i15 = i8 + 52 | 0;
   } else {
    i15 = i8 + 56 | 0;
   }
   i11 = ((HEAP32[i4 + 8 >> 2] | 0) + i12 | 0) > ((HEAP32[i15 >> 2] | 0) + i13 | 0);
  }
 } while (0);
 i15 = HEAP32[i7 >> 2] | 0;
 i4 = i3;
 i8 = HEAP32[i15 + 88 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i16 = 0;
  } else {
   i9 = i8 + 4 | 0;
   HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i4 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i15 | 0, i3);
   i9 = HEAP32[i3 + 4 >> 2] | 0;
   i10 = HEAP32[i15 + 48 >> 2] | 0;
   if ((i9 | 0) < (i10 | 0)) {
    i16 = 1;
    break;
   }
   i13 = (HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i13 | 0) == 3 | (i13 | 0) == 0) {
    i17 = i15 + 56 | 0;
   } else {
    i17 = i15 + 52 | 0;
   }
   i16 = ((HEAP32[i3 + 12 >> 2] | 0) + i9 | 0) > ((HEAP32[i17 >> 2] | 0) + i10 | 0);
  }
 } while (0);
 i17 = (i11 & 1 | 0) != (HEAP8[i1 + 5 | 0] & 1 | 0);
 i3 = (i16 & 1 | 0) != (HEAP8[i1 + 6 | 0] & 1 | 0);
 if (!(i17 | i3)) {
  STACKTOP = i2;
  return;
 }
 i1 = __ZN3WTF10fastMallocEj(56) | 0;
 __ZN7WebCore13OverflowEventC1Ebbbb(i1, i17, i11, i3, i16);
 i16 = i1;
 i1 = HEAP32[i7 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
   i3 = HEAP32[i1 + 4 >> 2] | 0;
   i11 = i3 | 0;
   i17 = i5 | 0;
   HEAP32[i17 >> 2] = i11;
   if ((i3 | 0) == 0) {
    i18 = i17;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 56 >> 2] & 63](i11);
   i18 = i17;
  } else {
   i17 = i5 | 0;
   HEAP32[i17 >> 2] = 0;
   i18 = i17;
  }
 } while (0);
 __ZN7WebCore5Event9setTargetEN3WTF10PassRefPtrINS_11EventTargetEEE(i16, i5);
 i5 = HEAP32[i18 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 60 >> 2] & 63](i5);
 }
 i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = i16;
 __ZN7WebCore8Document20enqueueOverflowEventEN3WTF10PassRefPtrINS_5EventEEE(i5, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i6 + 8 | 0;
 i6 = i7 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
 i5 = i7 - 8 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderBlock30blockBeforeWithinSelectionRootERNS_10LayoutSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if (__ZNK7WebCore11RenderBlock15isSelectionRootEv(i1) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = i2 | 0;
 i5 = i2 + 4 | 0;
 i2 = i1 | 0;
 while (1) {
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  L6 : do {
   if ((i1 | 0) == 0) {
    i6 = 0;
    i7 = 0;
   } else {
    i8 = i1;
    while (1) {
     do {
      if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
       if ((HEAP32[i8 + 24 >> 2] & 16 | 0) == 0) {
        break;
       }
       if (!(__ZNK7WebCore11RenderBlock15isSelectionRootEv(i8) | 0)) {
        i6 = i8;
        i7 = 1;
        break L6;
       }
      }
     } while (0);
     i9 = HEAP32[i8 + 12 >> 2] | 0;
     if ((i9 | 0) == 0) {
      i6 = 0;
      i7 = 0;
      break;
     } else {
      i8 = i9;
     }
    }
   }
  } while (0);
  i1 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i1 | 0) == 3 | (i1 | 0) == 0) {
   i10 = i2 + 44 | 0;
  } else {
   i10 = i2 + 48 | 0;
  }
  if ((i1 | 0) == 3 | (i1 | 0) == 0) {
   i11 = i2 + 48 | 0;
  } else {
   i11 = i2 + 44 | 0;
  }
  i1 = HEAP32[i11 >> 2] | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i1;
  i1 = HEAP32[i2 + 8 >> 2] | 0;
  if (i7 | (i1 | 0) == 0) {
   i12 = 17;
   break;
  }
  if ((HEAP32[i1 + 24 >> 2] & 16 | 0) == 0) {
   i3 = 0;
   i12 = 40;
   break;
  }
  if (__ZNK7WebCore11RenderBlock15isSelectionRootEv(i1) | 0) {
   i3 = 0;
   i12 = 38;
   break;
  } else {
   i2 = i1;
  }
 }
 if ((i12 | 0) == 17) {
  if (!i7) {
   i3 = 0;
   return i3 | 0;
  }
  i7 = i6;
  i2 = (HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i2 | 0) == 3 | (i2 | 0) == 0) {
   i13 = i6 + 44 | 0;
  } else {
   i13 = i6 + 48 | 0;
  }
  if ((i2 | 0) == 3 | (i2 | 0) == 0) {
   i14 = i6 + 48 | 0;
  } else {
   i14 = i6 + 44 | 0;
  }
  i2 = HEAP32[i14 >> 2] | 0;
  i14 = (HEAP32[i4 >> 2] | 0) + (HEAP32[i13 >> 2] | 0) | 0;
  HEAP32[i4 >> 2] = i14;
  i13 = (HEAP32[i5 >> 2] | 0) + i2 | 0;
  HEAP32[i5 >> 2] = i13;
  i2 = HEAP32[i6 + 32 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = i7;
   return i3 | 0;
  } else {
   i15 = i7;
   i16 = i2;
   i17 = i14;
   i18 = i13;
  }
  while (1) {
   i13 = i16 | 0;
   if ((HEAP32[i16 + 20 >> 2] & 768 | 0) == 256) {
    i3 = i15;
    i12 = 35;
    break;
   }
   if ((HEAP32[i13 + 24 >> 2] & 16 | 0) == 0) {
    i3 = i15;
    i12 = 42;
    break;
   }
   i14 = i16;
   i2 = (HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i2 | 0) == 3 | (i2 | 0) == 0) {
    i19 = i13 + 44 | 0;
   } else {
    i19 = i16 + 48 | 0;
   }
   if ((i2 | 0) == 3 | (i2 | 0) == 0) {
    i20 = i13 + 48 | 0;
   } else {
    i20 = i16 + 44 | 0;
   }
   i2 = HEAP32[i20 >> 2] | 0;
   i7 = i17 + (HEAP32[i19 >> 2] | 0) | 0;
   HEAP32[i4 >> 2] = i7;
   i6 = i18 + i2 | 0;
   HEAP32[i5 >> 2] = i6;
   i2 = HEAP32[i13 + 32 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = i14;
    i12 = 36;
    break;
   } else {
    i15 = i14;
    i16 = i2;
    i17 = i7;
    i18 = i6;
   }
  }
  if ((i12 | 0) == 42) {
   return i3 | 0;
  } else if ((i12 | 0) == 35) {
   return i3 | 0;
  } else if ((i12 | 0) == 36) {
   return i3 | 0;
  }
 } else if ((i12 | 0) == 40) {
  return i3 | 0;
 } else if ((i12 | 0) == 38) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock33makeChildrenAnonymousColumnBlocksEPNS_12RenderObjectEPS0_S2_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1016 >> 2] & 63](i1);
 do {
  if ((i2 | 0) == 0) {
   i5 = 0;
   i6 = i1 | 0;
  } else {
   i7 = i1 | 0;
   if ((HEAP32[i2 + 8 >> 2] | 0) == (i7 | 0)) {
    i5 = i2;
    i6 = i7;
    break;
   }
   i5 = __ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE(i1 | 0, i2) | 0;
   i6 = i7;
  }
 } while (0);
 i2 = i1 + 28 | 0;
 if ((i5 | 0) == (HEAP32[i2 >> 2] | 0)) {
  i8 = 0;
 } else {
  i7 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i1 | 0) | 0;
  i9 = i7 + 20 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -2097153 | HEAP32[i1 + 20 >> 2] & 2097152;
  i8 = i7;
 }
 if ((i5 | 0) == 0) {
  i10 = 0;
 } else {
  i7 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i1 | 0) | 0;
  i9 = i7 + 20 | 0;
  HEAP32[i9 >> 2] = HEAP32[i9 >> 2] & -2097153 | HEAP32[i1 + 20 >> 2] & 2097152;
  i10 = i7;
 }
 i7 = HEAP32[i2 >> 2] | 0;
 i2 = (i8 | 0) != 0;
 if (i2) {
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i6, i8 | 0, i7, 0);
 }
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i6, i3 | 0, i7, 0);
 i9 = (i10 | 0) != 0;
 if (i9) {
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i6, i10 | 0, i7, 0);
 }
 i6 = i1 | 0;
 i11 = i1 + 20 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -2097153;
 i12 = i1 | 0;
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i12, i8 | 0, i7, i5, 0, 1);
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i12, i10 | 0, i5, 0, 0, 1);
 i5 = i3 + 20 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] & -2097153;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 628 >> 2] & 63](i3, i4, 0);
 if (i2) {
  i2 = i8 | 0;
  i4 = i8 + 20 | 0;
  i8 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i8 & 1 | 0) == 0) {
    HEAP32[i4 >> 2] = i8 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
    if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
   }
  } while (0);
  __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i2, 1, 1);
 }
 i2 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i2 & 1 | 0) == 0) {
   HEAP32[i11 >> 2] = i2 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
   if ((HEAP32[i11 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i6, 1, 1);
 if (!i9) {
  return;
 }
 i9 = i10 | 0;
 i6 = i10 + 20 | 0;
 i10 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i10 & 1 | 0) == 0) {
   HEAP32[i6 >> 2] = i10 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i9, 1, 0);
   if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i9);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i9, 1, 1);
 return;
}
function __ZN7WebCore11RenderBlock23addOverflowFromChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i1 | 0;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 & 4194304 | 0) != 0) {
  i9 = HEAP32[H_BASE + 1568 >> 2] | 0;
  i10 = i1 | 0;
  i11 = HEAP32[i9 + 8 >> 2] | 0;
  i12 = HEAP32[i9 >> 2] | 0;
  i9 = i1;
  i13 = i9 + ~(i9 << 15) | 0;
  i9 = (i13 >>> 10 ^ i13) * 9 & -1;
  i13 = i9 >>> 6 ^ i9;
  i9 = i13 + ~(i13 << 11) | 0;
  i13 = i9 >>> 16 ^ i9;
  L3 : do {
   if ((i12 | 0) == 0) {
    i14 = 0;
   } else {
    i9 = i11 & i13;
    i15 = i12 + (i9 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i10 | 0)) {
     i17 = i15;
    } else {
     i15 = (i13 >>> 23) + ~i13 | 0;
     i18 = i15 << 12 ^ i15;
     i15 = i18 >>> 7 ^ i18;
     i18 = i15 << 2 ^ i15;
     i15 = i18 >>> 20 ^ i18 | 1;
     i18 = 0;
     i19 = i9;
     i9 = i16;
     while (1) {
      if ((i9 | 0) == 0) {
       i14 = 0;
       break L3;
      }
      i16 = (i18 | 0) == 0 ? i15 : i18;
      i20 = i16 + i19 & i11;
      i21 = i12 + (i20 << 3) | 0;
      i22 = HEAP32[i21 >> 2] | 0;
      if ((i22 | 0) == (i10 | 0)) {
       i17 = i21;
       break;
      } else {
       i18 = i16;
       i19 = i20;
       i9 = i22;
      }
     }
    }
    if ((i17 | 0) == 0) {
     i14 = 0;
     break;
    }
    i14 = HEAP32[i17 + 4 >> 2] | 0;
   }
  } while (0);
  i17 = HEAP32[i14 + 16 >> 2] | 0;
  if ((i17 | 0) == 0) {
   STACKTOP = i2;
   return;
  }
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i5, i1, i14, i17 - 1 | 0);
  i17 = i1 | 0;
  __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i17, i5);
  if ((HEAP32[i7 >> 2] & 65536 | 0) != 0) {
   STACKTOP = i2;
   return;
  }
  __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i17, i5);
  STACKTOP = i2;
  return;
 }
 do {
  if ((i8 & 2097152 | 0) == 0) {
   i5 = i1 | 0;
   i17 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i23 = i5;
    break;
   }
   i14 = i3 | 0;
   i10 = i3 + 4 | 0;
   i12 = i17;
   while (1) {
    i17 = HEAP32[i12 + 20 >> 2] | 0;
    if (!((i17 & 64 | 0) != 0 | (i17 & 25165824 | 0) == 16777216)) {
     i17 = HEAP32[i12 + 48 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i12 + 44 >> 2];
     HEAP32[i10 >> 2] = i17;
     __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i5, i12, i3);
    }
    i17 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i23 = i5;
     break;
    } else {
     i12 = i17;
    }
   }
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1056 >> 2] & 63](i1);
   i23 = i1 | 0;
  }
 } while (0);
 i3 = i1 + 88 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i7 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i6) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i4;
 i1 = (HEAP32[i3 >> 2] | 0) + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 __ZN7WebCore16RenderFlowThread24addRegionsVisualOverflowEPKNS_9RenderBoxERKNS_10LayoutRectE(i7, i23, i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 232 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 104 | 0;
 i12 = i4 + 112 | 0;
 i13 = i4 + 120 | 0;
 i14 = i4 + 128 | 0;
 i15 = i4 + 192 | 0;
 i16 = i4 + 200 | 0;
 i17 = i4 + 208 | 0;
 i18 = i4 + 216 | 0;
 i19 = i4 + 224 | 0;
 i20 = i2 + 20 | 0;
 do {
  if ((HEAP32[i20 >> 2] & 234881024 | 0) != 0) {
   if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
    break;
   }
   if (!(__ZNK7WebCore11RenderBlock15isSelectionRootEv(i2) | 0)) {
    break;
   }
   _memset(i10 | 0, 0, 53) | 0;
   HEAP8[i10 + 53 | 0] = 1;
   HEAP8[i10 + 54 | 0] = 0;
   HEAP32[i10 + 56 >> 2] = 0;
   i21 = i2 | 0;
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i2 >> 2] | 0) + 588 >> 2] & 31](i21, i3, i10, 6, 0);
   __ZNK7WebCore14TransformState11mappedPointEPb(i12, i10, 0);
   d22 = +_round(+(+HEAPF32[i12 >> 2]));
   do {
    if (d22 < +2147483647) {
     if (d22 <= +-2147483648) {
      i23 = -2147483648;
      break;
     }
     i23 = ~~d22;
    } else {
     i23 = 2147483647;
    }
   } while (0);
   d22 = +_round(+(+HEAPF32[i12 + 4 >> 2]));
   do {
    if (d22 < +2147483647) {
     if (d22 <= +-2147483648) {
      i24 = -2147483648;
      break;
     }
     i24 = ~~d22;
    } else {
     i24 = 2147483647;
    }
   } while (0);
   i25 = i11 | 0;
   HEAP32[i25 >> 2] = i23;
   i26 = i11 + 4 | 0;
   HEAP32[i26 >> 2] = i24;
   if ((HEAP32[i20 >> 2] & 65536 | 0) != 0) {
    __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i13, i21);
    i27 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) - (HEAP32[i13 >> 2] | 0);
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) - i27;
   }
   __ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockE(i14, i2);
   i27 = i15 | 0;
   HEAP32[i27 >> 2] = 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i9 >> 2] = 0;
   __ZNK7WebCore11RenderBlock24logicalLeftOffsetForLineENS_10LayoutUnitEbS1_(i7, i2, i8, 0, i9);
   i26 = i2 | 0;
   i25 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i20 >> 2] & 8192 | 0) == 0) {
    FUNCTION_TABLE_ii[HEAP32[i25 + 736 >> 2] & 511](i26) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i6, i26);
   } else {
    FUNCTION_TABLE_ii[HEAP32[i25 + 744 >> 2] & 511](i26) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i5, i26);
   }
   HEAP32[i16 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i18 >> 2] = HEAP32[i27 >> 2];
   __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i17, i2, i2, i18, i14);
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   __ZN7WebCore11RenderBlock13selectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i2, i11, i19, i15, i16, i17, i14, 0);
   i27 = HEAP32[i10 + 40 >> 2] | 0;
   if ((i27 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   __ZN3WTF8fastFreeEPv(i27);
   STACKTOP = i4;
   return;
  }
 } while (0);
 _memset(i1 | 0, 0, 48) | 0;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock24logicalLeftOffsetForLineENS_10LayoutUnitEbS1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 80 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 56 | 0;
 i14 = i6 + 64 | 0;
 i15 = i6 + 72 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 i3 = i2 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 805306368 | 0) == 0) {
   i17 = 0;
  } else {
   i18 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i18 | 0) == 0) {
    i17 = 0;
    break;
   }
   if ((HEAP8[i18 + 292 | 0] & 1) != 0) {
    i17 = 0;
    break;
   }
   if ((HEAP32[i18 + 128 >> 2] | 0) == 0) {
    i17 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i15, i2);
   HEAP32[i14 >> 2] = (HEAP32[i15 >> 2] | 0) + i16;
   i17 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i18, i2 | 0, i14, 1, 0) | 0;
  }
 } while (0);
 i14 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i15 = i2 | 0;
 i18 = HEAP32[i2 >> 2] | 0;
 if ((i14 | 0) == 3 | (i14 | 0) == 0) {
  i14 = FUNCTION_TABLE_ii[HEAP32[i18 + 744 >> 2] & 511](i15) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i7, i15);
  i19 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 } else {
  i14 = FUNCTION_TABLE_ii[HEAP32[i18 + 736 >> 2] & 511](i15) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i8, i15);
  i19 = (HEAP32[i8 >> 2] | 0) + i14 | 0;
 }
 if ((i17 | 0) == 0) {
  i20 = i19;
  i21 = i5 | 0;
  i22 = HEAP32[i21 >> 2] | 0;
  i23 = i10;
  i24 = i11;
  i25 = i12;
  i26 = i13;
  i27 = i2;
  i28 = HEAP32[i27 >> 2] | 0;
  i29 = i28 + 1072 | 0;
  i30 = HEAP32[i29 >> 2] | 0;
  i31 = i11 | 0;
  HEAP32[i31 >> 2] = i16;
  i32 = i12 | 0;
  HEAP32[i32 >> 2] = i20;
  i33 = i13 | 0;
  HEAP32[i33 >> 2] = i22;
  FUNCTION_TABLE_viiiii[i30 & 31](i10, i2, i11, i12, i13);
  __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i10, i4);
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i9, i2 | 0, i17, 0);
 if ((HEAP32[i3 >> 2] & 8192 | 0) == 0) {
  i34 = HEAP32[i9 + 4 >> 2] | 0;
 } else {
  i34 = HEAP32[i9 >> 2] | 0;
 }
 i20 = i34 + i19 | 0;
 i21 = i5 | 0;
 i22 = HEAP32[i21 >> 2] | 0;
 i23 = i10;
 i24 = i11;
 i25 = i12;
 i26 = i13;
 i27 = i2;
 i28 = HEAP32[i27 >> 2] | 0;
 i29 = i28 + 1072 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 i31 = i11 | 0;
 HEAP32[i31 >> 2] = i16;
 i32 = i12 | 0;
 HEAP32[i32 >> 2] = i20;
 i33 = i13 | 0;
 HEAP32[i33 >> 2] = i22;
 FUNCTION_TABLE_viiiii[i30 & 31](i10, i2, i11, i12, i13);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i10, i4);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderBlock31addChildToAnonymousColumnBlocksEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = (i3 | 0) != 0;
 L1 : do {
  if (i4) {
   i5 = i1 | 0;
   i6 = i3;
   while (1) {
    if ((i6 | 0) == 0) {
     i7 = 0;
     break L1;
    }
    i8 = HEAP32[i6 + 8 >> 2] | 0;
    if ((i8 | 0) == (i5 | 0)) {
     i7 = i6;
     break;
    } else {
     i6 = i8 | 0;
    }
   }
  } else {
   i7 = HEAP32[i1 + 32 >> 2] | 0;
  }
 } while (0);
 i6 = i7;
 i5 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216) {
  __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i6, i2, i3);
  return;
 }
 if ((i5 & 1024 | 0) == 0) {
  if ((i5 & 768 | 0) == 256) {
   i9 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i9 = HEAP32[i2 + 36 >> 2] | 0;
  }
  i10 = (HEAP32[(HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0;
 } else {
  i10 = 0;
 }
 if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 256) {
  i11 = HEAP32[(HEAP32[i7 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i11 = HEAP32[i7 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
  if (!i10) {
   i12 = 19;
  }
 } else {
  if (!(i10 ^ (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i7) | 0))) {
   i12 = 19;
  }
 }
 if ((i12 | 0) == 19) {
  __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i6, i2, i3);
  return;
 }
 if (!i4) {
  i4 = i1 | 0;
  if (i10) {
   i13 = __ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE(i4) | 0;
  } else {
   i13 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i4) | 0;
  }
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i1 | 0, i13 | 0, 0, 0);
  __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i13, i2, 0);
  return;
 }
 i13 = HEAP32[i3 + 8 >> 2] | 0;
 i4 = i1 | 0;
 if ((i13 | 0) == (i4 | 0)) {
  i14 = i3;
  i12 = 30;
 } else {
  i6 = i3;
  i7 = 1;
  i11 = i13;
  while (1) {
   if (i7) {
    i15 = (HEAP32[i6 + 12 >> 2] | 0) == 0;
   } else {
    i15 = 0;
   }
   i16 = i11 | 0;
   i13 = HEAP32[i11 + 8 >> 2] | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   } else {
    i6 = i16;
    i7 = i15;
    i11 = i13;
   }
  }
  if (i15) {
   i14 = i16;
   i12 = 30;
  }
 }
 do {
  if ((i12 | 0) == 30) {
   i16 = HEAP32[i14 + 12 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i16, i2, 0);
   return;
  }
 } while (0);
 i14 = __ZN7WebCore9RenderBox30splitAnonymousBoxesAroundChildEPNS_12RenderObjectE(i1 | 0, i3) | 0;
 i3 = i1 | 0;
 if (i10) {
  i17 = __ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE(i3) | 0;
 } else {
  i17 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i3) | 0;
 }
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i4, i17 | 0, i14, 0);
 __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i17, i2, 0);
 return;
}
function __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = HEAP32[i4 >> 2] | 0;
 HEAP32[i13 >> 2] = i15;
 HEAP32[i14 >> 2] = 0;
 __ZNK7WebCore11RenderBlock25logicalRightOffsetForLineENS_10LayoutUnitEbS1_(i12, i2, i13, 0, i14);
 i14 = i2 + 20 | 0;
 i13 = i2 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i14 >> 2] & 8192 | 0) == 0) {
  i16 = FUNCTION_TABLE_ii[HEAP32[i4 + 736 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i10, i13);
  i17 = (HEAP32[i10 >> 2] | 0) + i16 | 0;
 } else {
  i16 = FUNCTION_TABLE_ii[HEAP32[i4 + 744 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i9, i13);
  i17 = (HEAP32[i9 >> 2] | 0) + i16 | 0;
 }
 if ((HEAP32[i14 >> 2] & 4194304 | 0) == 0) {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i11, i2 | 0);
 } else {
  __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i11, i2);
 }
 i14 = (HEAP32[i11 >> 2] | 0) + i17 | 0;
 i17 = i12 | 0;
 i12 = HEAP32[i17 >> 2] | 0;
 if ((i12 | 0) != (i14 | 0)) {
  if ((i2 | 0) == (i3 | 0)) {
   i18 = i12;
  } else {
   i11 = i2;
   i16 = i5;
   i9 = i12;
   while (1) {
    i12 = HEAP32[i11 + 36 >> 2] | 0;
    i13 = (HEAP32[i12 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i13 | 0) == 3 | (i13 | 0) == 0) {
     i19 = i11 + 44 | 0;
    } else {
     i19 = i11 + 48 | 0;
    }
    i20 = i9 + (HEAP32[i19 >> 2] | 0) | 0;
    i13 = (HEAP32[i12 + 48 >> 2] | 0) >>> 22 & 7;
    if ((i13 | 0) == 6) {
     i21 = i16 | 0;
    } else if ((i13 | 0) == 2) {
     i21 = i16 + 20 | 0;
    } else {
     i21 = i16 + 40 | 0;
    }
    i13 = HEAP32[i21 >> 2] | 0;
    if ((i13 | 0) == (i3 | 0)) {
     break;
    } else {
     i11 = i13;
     i16 = HEAP32[i21 + 4 >> 2] | 0;
     i9 = i20;
    }
   }
   HEAP32[i17 >> 2] = i20;
   i18 = i20;
  }
  HEAP32[i1 >> 2] = i18;
  STACKTOP = i6;
  return;
 }
 if ((i3 | 0) == (i2 | 0)) {
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i6;
  return;
 }
 i14 = HEAP32[i2 + 36 >> 2] | 0;
 i18 = (HEAP32[i14 + 48 >> 2] | 0) >>> 22 & 7;
 if ((i18 | 0) == 6) {
  i22 = i5 | 0;
 } else if ((i18 | 0) == 2) {
  i22 = i5 + 20 | 0;
 } else {
  i22 = i5 + 40 | 0;
 }
 i5 = (HEAP32[i14 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i23 = i2 + 48 | 0;
 } else {
  i23 = i2 + 44 | 0;
 }
 i2 = i22 + 8 | 0;
 i5 = HEAP8[i2] | 0;
 if ((i5 & 5) == 4) {
  i24 = HEAP32[i22 + 16 >> 2] | 0;
 } else {
  i14 = i15 + (HEAP32[i23 >> 2] | 0) | 0;
  HEAP8[i2] = i5 | 4;
  i5 = HEAP32[i22 >> 2] | 0;
  HEAP32[i8 >> 2] = i14;
  __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i7, i5, i3, i8, HEAP32[i22 + 4 >> 2] | 0);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i22 + 16 >> 2] = i8;
  i24 = i8;
 }
 HEAP32[i1 >> 2] = i24;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderBlock10paintChildERNS_9RenderBoxERNS_9PaintInfoERKNS_11LayoutPointES4_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i1 + 20 | 0;
 i12 = i6 ^ 1;
 do {
  if ((HEAP32[i11 >> 2] & 2097152 | 0) != 0 | i12) {
   i13 = (HEAP32[i2 + 48 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
  } else {
   i6 = (HEAP32[i2 + 48 >> 2] | 0) + (HEAP32[i4 + 4 >> 2] | 0) | 0;
   if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 52 >> 2] & 3 | 0) != 1) {
    i13 = i6;
    break;
   }
   i14 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i6 | 0) <= (i14 | 0)) {
    i13 = i6;
    break;
   }
   if ((i6 | 0) >= ((HEAP32[i3 + 16 >> 2] | 0) + i14 | 0)) {
    i13 = i6;
    break;
   }
   __ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i6, i1 | 0, 1);
   i15 = 0;
   STACKTOP = i7;
   return i15 | 0;
  }
 } while (0);
 i6 = i2 + 20 | 0;
 i14 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i14 & 64 | 0) == 0) {
   if ((i14 & 2048 | 0) == 0 | i12) {
    break;
   }
   i16 = HEAP32[i2 + 56 >> 2] | 0;
   i17 = i1 + 4 | 0;
   i18 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   i19 = HEAP32[i18 + 168 >> 2] | 0;
   if ((i16 | 0) > (i19 | 0)) {
    break;
   }
   if ((i16 + i13 | 0) <= ((HEAP32[i18 + 160 >> 2] | 0) + i19 | 0)) {
    break;
   }
   i19 = HEAP32[i18 + 148 >> 2] | 0;
   if ((i13 | 0) < (i19 | 0)) {
    __ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb(i18, i13, i2 | 0, 0);
    i20 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 148 >> 2] | 0;
   } else {
    i20 = i19;
   }
   if ((i13 | 0) < (i20 | 0)) {
    break;
   } else {
    i15 = 0;
   }
   STACKTOP = i7;
   return i15 | 0;
  }
 } while (0);
 __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i8, i1 | 0, i2, i4);
 do {
  if (!(__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i2 | 0) | 0)) {
   if ((HEAP32[i6 >> 2] & 64 | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 648 >> 2] & 63](i2 | 0, i5, i8);
  }
 } while (0);
 if ((HEAP32[i11 >> 2] & 2097152 | 0) != 0 | i12) {
  i15 = 1;
  STACKTOP = i7;
  return i15 | 0;
 }
 if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 52 >> 2] & 12 | 0) != 4) {
  i15 = 1;
  STACKTOP = i7;
  return i15 | 0;
 }
 i12 = (HEAP32[i2 + 56 >> 2] | 0) + i13 | 0;
 i13 = HEAP32[i3 + 8 >> 2] | 0;
 if ((i12 | 0) <= (i13 | 0)) {
  i15 = 1;
  STACKTOP = i7;
  return i15 | 0;
 }
 if ((i12 | 0) >= ((HEAP32[i3 + 16 >> 2] | 0) + i13 | 0)) {
  i15 = 1;
  STACKTOP = i7;
  return i15 | 0;
 }
 i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 860 >> 2] & 127](i10, i2);
 __ZN7WebCore10RenderView18setBestTruncatedAtEiPNS_20RenderBoxModelObjectEb(i13, (HEAP32[((HEAP32[i10 >> 2] | 0) > 0 ? i10 : i9) >> 2] | 0) + i12 | 0, i1 | 0, 1);
 i15 = 0;
 STACKTOP = i7;
 return i15 | 0;
}
function __ZN7WebCore11RenderBlock36determineLogicalLeftPositionForChildERNS_9RenderBoxENS0_20ApplyLayoutDeltaModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 48 | 0;
 i12 = i1 | 0;
 i13 = i1;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 760 >> 2] & 511](i12) | 0;
 i15 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 728 >> 2] & 127](i7, i12);
 i16 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 760 >> 2] & 511](i12) | 0;
 i7 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 764 >> 2] & 511](i12) | 0) + i14 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 728 >> 2] & 127](i5, i12);
 i14 = i7 + (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 732 >> 2] & 127](i6, i12);
 i12 = i14 + (HEAP32[i6 >> 2] | 0) | 0;
 i6 = i1 + 20 | 0;
 if ((HEAP32[i6 >> 2] & 4194304 | 0) == 0) {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i8, i1 | 0);
 } else {
  __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i8, i1);
 }
 i14 = i12 + (HEAP32[i8 >> 2] | 0) | 0;
 i8 = i2 | 0;
 i12 = i2;
 i15 = i1 + 36 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 792 >> 2] & 63](i9, i8, HEAP32[i15 >> 2] | 0);
 i5 = i16 + (HEAP32[i9 >> 2] | 0) | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 972 >> 2] & 511](i2) | 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1024 >> 2] & 511](i1) | 0)) {
    i17 = i5;
    break;
   }
   if ((HEAP32[i6 >> 2] & 805306368 | 0) != 0) {
    if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0) != 0) {
     i17 = i5;
     break;
    }
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 792 >> 2] & 63](i11, i8, HEAP32[i15 >> 2] | 0);
   __ZN7WebCore11RenderBlock47computeStartPositionDeltaForChildAvoidingFloatsERKNS_9RenderBoxENS_10LayoutUnitEPNS_12RenderRegionE(i10, i1, i2, i11, 0);
   i17 = (HEAP32[i10 >> 2] | 0) + i5 | 0;
  } else {
   i17 = i5;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i15 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) == 0) {
  i15 = HEAP32[i6 >> 2] | 0;
  i18 = i14 - i17 - (HEAP32[((i15 & 8192 | 0) == 0 ? i2 + 56 | 0 : i2 + 52 | 0) >> 2] | 0) | 0;
  i19 = i15;
 } else {
  i18 = i17;
  i19 = HEAP32[i6 >> 2] | 0;
 }
 i6 = (i3 | 0) == 0;
 if ((i19 & 8192 | 0) == 0) {
  do {
   if (i6) {
    i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i19 | 0) == 0) {
     break;
    }
    i3 = i19 + 56 | 0;
    HEAP32[i3 >> 2] = (HEAP32[i2 + 48 >> 2] | 0) - i18 + (HEAP32[i3 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 48 >> 2] = i18;
  STACKTOP = i4;
  return;
 } else {
  do {
   if (i6) {
    i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i19 = i3 + 52 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i2 + 44 >> 2] | 0) - i18 + (HEAP32[i19 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 44 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11RenderBlock22addChildToContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = (i3 | 0) != 0;
 if (i4) {
  i5 = HEAP32[i3 + 8 >> 2] | 0;
  if ((i5 | 0) == (i1 | 0)) {
   i6 = i1;
   i7 = i5;
   i8 = 11;
  } else {
   i8 = 3;
  }
 } else {
  i8 = 3;
 }
 L3 : do {
  if ((i8 | 0) == 3) {
   i5 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
   i9 = i5;
   L5 : do {
    if ((i5 | 0) == 0) {
     i10 = i1;
     i11 = i1;
    } else {
     i12 = i3 + 8 | 0;
     if (i4) {
      i13 = i5;
      i14 = i1;
      i15 = i9;
     } else {
      i16 = i5;
      i17 = i1;
      i18 = i9;
      while (1) {
       i19 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i16) | 0;
       if ((i19 | 0) == 0) {
        i10 = i17;
        i11 = i18;
        break L5;
       } else {
        i16 = i19;
        i17 = i18;
        i18 = i19;
       }
      }
     }
     while (1) {
      i20 = HEAP32[i12 >> 2] | 0;
      if ((i20 | 0) == (i13 | 0)) {
       break;
      }
      i18 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i13) | 0;
      if ((i18 | 0) == 0) {
       i10 = i14;
       i11 = i15;
       break L5;
      } else {
       i13 = i18;
       i14 = i15;
       i15 = i18;
      }
     }
     i6 = (HEAP32[i13 + 28 >> 2] | 0) == (i3 | 0) ? i14 : i15;
     i7 = i20;
     i8 = 11;
     break L3;
    }
   } while (0);
   if (i4) {
    i6 = i11;
    i7 = HEAP32[i3 + 8 >> 2] | 0;
    i8 = 11;
    break;
   } else {
    i9 = (HEAP32[i11 + 28 >> 2] | 0) == 0 ? i10 : i11;
    i5 = i9 | 0;
    i12 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0;
    i21 = (i12 | 0) == 0 ? i5 : i12;
    i22 = i9;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 11) {
  i21 = i7;
  i22 = i6;
 }
 i6 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i6 & 64 | 0) != 0 | (i6 & 25165824 | 0) == 16777216) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 632 >> 2] & 63](i21 | 0, i2, i3);
  return;
 }
 if ((i6 & 1024 | 0) == 0) {
  if ((i6 & 768 | 0) == 256) {
   i23 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i23 = HEAP32[i2 + 36 >> 2] | 0;
  }
  i24 = (HEAP32[(HEAP32[(HEAP32[i23 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 4 & 1 ^ 1;
 } else {
  i24 = 1;
 }
 if ((HEAP32[i21 + 20 >> 2] & 1024 | 0) == 0) {
  i25 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i21 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 4 & 1 ^ 1;
 } else {
  i25 = 1;
 }
 if ((HEAP32[i22 + 20 >> 2] & 1024 | 0) == 0) {
  i26 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 4 & 1 ^ 1;
 } else {
  i26 = 1;
 }
 if ((i22 | 0) == (i21 | 0)) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 632 >> 2] & 63](i22, i2, i3);
  return;
 }
 if ((i24 | 0) == (i25 | 0)) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 632 >> 2] & 63](i21 | 0, i2, i3);
  return;
 }
 if ((i26 | 0) == (i24 | 0)) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i22 >> 2] | 0) + 632 >> 2] & 63](i22, i2, 0);
  return;
 } else {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 632 >> 2] & 63](i21 | 0, i2, i3);
  return;
 }
}
function __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0;
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
   L8 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 6;
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
       break L8;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i30 + 4 | 0;
   i17 = HEAP32[i16 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i36 = i13;
   } else {
    __ZN3WTF8fastFreeEPv(i17);
    i36 = HEAP32[i12 >> 2] | 0;
   }
   HEAP32[i30 >> 2] = i36;
   i17 = i7 + (i10 << 3) + 4 | 0;
   i20 = HEAP32[i17 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i16 >> 2] = i20;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i11;
  }
  i20 = i10 + 1 | 0;
  if ((i20 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i20;
   i11 = i15;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i37 = 0;
 } else {
  i8 = i15;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  do {
   if ((HEAP32[i7 + (i37 << 3) >> 2] | 0) != -1) {
    i1 = HEAP32[i7 + (i37 << 3) + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i1);
   }
  } while (0);
  i2 = i37 + 1 | 0;
  if ((i2 | 0) < (i5 | 0)) {
   i37 = i2;
  } else {
   i8 = i15;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN7WebCore11RenderBlock17blockSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES8_S8_S8_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i13 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i13 >> 2];
 i13 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i13 >> 2];
 i13 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
 i13 = i9;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
 i13 = i12 | 0;
 i14 = i12 + 8 | 0;
 i15 = i12 + 16 | 0;
 i16 = i12 + 24 | 0;
 i17 = i12 + 32 | 0;
 i18 = i12 + 48 | 0;
 i19 = i12 + 64 | 0;
 i20 = i12 + 80 | 0;
 i21 = HEAP32[i6 >> 2] | 0;
 i6 = i3 + 20 | 0;
 i22 = HEAP32[i9 >> 2] | 0;
 i9 = (HEAP32[((HEAP32[i6 >> 2] & 8192 | 0) == 0 ? i5 | 0 : i5 + 4 | 0) >> 2] | 0) - i21 + i22 | 0;
 if ((i9 | 0) < 1) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i12;
  return;
 }
 HEAP32[i14 >> 2] = i22;
 __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i13, i2, i3, i14, i10);
 i14 = HEAP32[((HEAP32[i7 >> 2] | 0) < (HEAP32[i13 >> 2] | 0) ? i13 : i7) >> 2] | 0;
 HEAP32[i16 >> 2] = i22;
 __ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i15, i2, i3, i16, i10);
 i10 = (HEAP32[((HEAP32[i15 >> 2] | 0) < (HEAP32[i8 >> 2] | 0) ? i15 : i8) >> 2] | 0) - i14 | 0;
 if ((i10 | 0) < 1) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i12;
  return;
 }
 i8 = i17;
 _memset(i8 | 0, 0, 16) | 0;
 i15 = i17 | 0;
 if ((HEAP32[i6 >> 2] & 8192 | 0) == 0) {
  HEAP32[i15 >> 2] = i21;
  i6 = i17 + 4 | 0;
  HEAP32[i6 >> 2] = i14;
  HEAP32[i17 + 8 >> 2] = i9;
  HEAP32[i17 + 12 >> 2] = i10;
  i23 = i6;
 } else {
  HEAP32[i15 >> 2] = i14;
  i14 = i17 + 4 | 0;
  HEAP32[i14 >> 2] = i21;
  HEAP32[i17 + 8 >> 2] = i10;
  HEAP32[i17 + 12 >> 2] = i9;
  i23 = i14;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i3 | 0, i17);
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
 HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + i3;
 if ((i11 | 0) != 0) {
  i3 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i19, i17);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i18, i19);
  __ZNK7WebCore12RenderObject24selectionBackgroundColorEv(i20, i2 | 0);
  __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i3, i18, i20, (HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 }
 i2 = i1;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 STACKTOP = i12;
 return;
}
function __ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0) != 0) {
  return;
 }
 i3 = i2 + 28 | 0;
 i4 = i2 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == 0) {
   i5 = 27;
  } else {
   i6 = i2 + 20 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i8 = HEAP32[i4 + 36 >> 2] | 0;
   }
   do {
    if ((HEAP32[(HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
     i9 = i7;
    } else {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i4) | 0) {
      return;
     } else {
      i9 = HEAP32[i6 >> 2] | 0;
      break;
     }
    }
   } while (0);
   if ((i9 & 768 | 0) == 256) {
    i10 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i10 = HEAP32[i4 + 36 >> 2] | 0;
   }
   i6 = (HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   do {
    if ((HEAP8[i6] & 3) == 3) {
     i7 = (HEAP32[i6 >> 2] | 0) >>> 11 & 3;
     if ((i7 | 0) == 2) {
      break;
     }
     i11 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
     if (((i11 | 0) == 0 | (i11 | 0) == 3) ^ (i7 | 0) == 0) {
      i5 = 15;
     }
    } else {
     i5 = 15;
    }
   } while (0);
   do {
    if ((i5 | 0) == 15) {
     if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i4) | 0)) {
      break;
     }
     return;
    }
   } while (0);
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i2 + 32 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i5 = 27;
    break;
   }
   i11 = i1 | 0;
   i12 = i6;
   while (1) {
    __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i12, i11);
    i12 = HEAP32[i12 + 16 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
   }
   i12 = i2 + 12 | 0;
   HEAP32[i6 + 12 >> 2] = HEAP32[i12 >> 2];
   i11 = i2 + 16 | 0;
   HEAP32[i7 + 16 >> 2] = HEAP32[i11 >> 2];
   i13 = HEAP32[i12 >> 2] | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i13 + 16 >> 2] = i6;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i13 + 12 >> 2] = i7;
   }
   i13 = i1 + 28 | 0;
   if ((i4 | 0) == (HEAP32[i13 >> 2] | 0)) {
    HEAP32[i13 >> 2] = i6;
   }
   i13 = i1 + 32 | 0;
   if ((i4 | 0) != (HEAP32[i13 >> 2] | 0)) {
    break;
   }
   HEAP32[i13 >> 2] = i7;
  }
 } while (0);
 do {
  if ((i5 | 0) == 27) {
   i10 = i1 + 28 | 0;
   if ((i4 | 0) == (HEAP32[i10 >> 2] | 0)) {
    HEAP32[i10 >> 2] = HEAP32[i2 + 16 >> 2];
   }
   i10 = i1 + 32 | 0;
   i9 = i2 + 12 | 0;
   if ((i4 | 0) == (HEAP32[i10 >> 2] | 0)) {
    HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
   }
   i10 = HEAP32[i9 >> 2] | 0;
   i8 = i2 + 16 | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i10 + 16 >> 2] = HEAP32[i8 >> 2];
   }
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i10 + 12 >> 2] = HEAP32[i9 >> 2];
  }
 } while (0);
 HEAP32[i3 >> 2] = 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore12RenderObject26removeFromRenderFlowThreadEv(i3);
 __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i3, 0);
 HEAP32[i2 + 12 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN7WebCore12RenderObject7destroyEv(i3);
 return;
}
function __ZNK7WebCore11RenderBlock34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 20 | 0;
 do {
  if ((HEAP32[i7 >> 2] & 4194304 | 0) != 0) {
   i8 = i2 + 36 | 0;
   i9 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if (!((i9 | 0) == 3 | (i9 | 0) == 1)) {
    break;
   }
   i9 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i10 = i2 | 0;
   i11 = HEAP32[i9 + 8 >> 2] | 0;
   i12 = HEAP32[i9 >> 2] | 0;
   i9 = i2;
   i13 = i9 + ~(i9 << 15) | 0;
   i9 = (i13 >>> 10 ^ i13) * 9 & -1;
   i13 = i9 >>> 6 ^ i9;
   i9 = i13 + ~(i13 << 11) | 0;
   i13 = i9 >>> 16 ^ i9;
   L4 : do {
    if ((i12 | 0) == 0) {
     i14 = 0;
    } else {
     i9 = i11 & i13;
     i15 = i12 + (i9 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i10 | 0)) {
      i17 = i15;
     } else {
      i15 = (i13 >>> 23) + ~i13 | 0;
      i18 = i15 << 12 ^ i15;
      i15 = i18 >>> 7 ^ i18;
      i18 = i15 << 2 ^ i15;
      i15 = i18 >>> 20 ^ i18 | 1;
      i18 = 0;
      i19 = i9;
      i9 = i16;
      while (1) {
       if ((i9 | 0) == 0) {
        i14 = 0;
        break L4;
       }
       i16 = (i18 | 0) == 0 ? i15 : i18;
       i20 = i16 + i19 & i11;
       i21 = i12 + (i20 << 3) | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       if ((i22 | 0) == (i10 | 0)) {
        i17 = i21;
        break;
       } else {
        i18 = i16;
        i19 = i20;
        i9 = i22;
       }
      }
     }
     if ((i17 | 0) == 0) {
      i14 = 0;
      break;
     }
     i14 = HEAP32[i17 + 4 >> 2] | 0;
    }
   } while (0);
   i12 = HEAP32[i14 + 20 >> 2] | 0;
   i11 = i2 | 0;
   i13 = i2;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 752 >> 2] & 511](i11) | 0;
   i19 = i2;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 720 >> 2] & 127](i5, i11);
   i18 = HEAP32[i14 + 16 >> 2] | 0;
   i15 = (HEAP32[i5 >> 2] | 0) + i9 + (Math_imul(i18 >>> 0 < 2147483647 >>> 0 ? i18 : 2147483647, i12) | 0) | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 756 >> 2] & 511](i11) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 724 >> 2] & 127](i6, i11);
   i11 = HEAP32[i6 >> 2] | 0;
   i19 = (HEAP32[(HEAP32[i8 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i19 | 0) == 3 | (i19 | 0) == 0) {
    i23 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i10) | 0;
   } else {
    i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 908 >> 2] & 511](i10) | 0;
   }
   i19 = i15 + i12 + i11 + i23 | 0;
   i11 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i7 >> 2] & 8192 | 0) == 0) {
    i12 = HEAP32[i3 + 4 >> 2] | 0;
    HEAP32[i1 >> 2] = i19 - i11;
    HEAP32[i1 + 4 >> 2] = i12;
    STACKTOP = i4;
    return;
   } else {
    i12 = i19 - (HEAP32[i3 + 4 >> 2] | 0) | 0;
    HEAP32[i1 >> 2] = i11;
    HEAP32[i1 + 4 >> 2] = i12;
    STACKTOP = i4;
    return;
   }
  }
 } while (0);
 i7 = i3;
 i3 = i1;
 i1 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock11splitBlocksEPS0_S1_S1_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 __ZNK7WebCore11RenderBlock5cloneEv(i8, i1);
 if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0)) {
  __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(HEAP32[i8 >> 2] | 0, i6);
 }
 do {
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 32 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i10 = 0;
    break;
   }
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    i10 = 0;
    break;
   }
   if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 52 >> 2] & 4032 | 0) != 256 | (i6 | 0) == 0) {
    i10 = 0;
   } else {
    i11 = i6;
    i12 = 7;
   }
  } else {
   i11 = i5;
   i12 = 7;
  }
 } while (0);
 do {
  if ((i12 | 0) == 7) {
   if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) == 0) {
    i10 = i11;
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1016 >> 2] & 63](i1);
   i10 = i11;
  }
 } while (0);
 i11 = i8 | 0;
 i8 = HEAP32[i11 >> 2] | 0;
 i12 = i8 | 0;
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i1 | 0, i12, i10, 0, 0, 1);
 if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8 | 0) | 0)) {
  __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i4 | 0, i12);
 }
 i12 = i2 | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = i2;
 i10 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0 | (i4 | 0) == (i12 | 0)) {
  i13 = i10;
  i14 = i8;
  i15 = i3 | 0;
  i16 = i14 | 0;
  __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i15, i16, 0, 0);
  i17 = i3 | 0;
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i12, i17, i13, 0, 0, 1);
  STACKTOP = i7;
  return;
 }
 i1 = i9 | 0;
 i5 = i2;
 i2 = i4;
 i4 = i10;
 i10 = i8;
 while (1) {
  __ZNK7WebCore11RenderBlock5cloneEv(i9, i5);
  i18 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i18 >> 2] | 0) + 632 >> 2] & 63](i18, i10 | 0, 0);
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i5 | 0) | 0) {
   i19 = i18 | 0;
  } else {
   i8 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0;
   i6 = i18 | 0;
   __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i2, i6);
   __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i6, i8);
   i19 = i6;
  }
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i2, i19, i4, 0, 0, 1);
  i6 = HEAP32[i5 + 8 >> 2] | 0;
  i8 = i6;
  i20 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i6 | 0) == 0 | (i8 | 0) == (i12 | 0)) {
   break;
  } else {
   i5 = i6;
   i2 = i8;
   i4 = i20;
   i10 = i18;
  }
 }
 HEAP32[i11 >> 2] = i18;
 i13 = i20;
 i14 = i18;
 i15 = i3 | 0;
 i16 = i14 | 0;
 __ZN7WebCore13RenderElement19insertChildInternalEPNS_12RenderObjectES2_NS0_18NotifyChildrenTypeE(i15, i16, 0, 0);
 i17 = i3 | 0;
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i12, i17, i13, 0, 0, 1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i1 | 0;
 i10 = i1 + 44 | 0;
 i11 = (HEAP32[i10 + 4 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i12 = i5 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i3 = i5 + 4 | 0;
 HEAP32[i3 >> 2] = i11;
 i11 = i2 + 20 | 0;
 i10 = HEAP32[i11 >> 2] | 0;
 i13 = i2 + 32 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i15 = i1 | 0;
  } else {
   i16 = i1 | 0;
   if (__ZNK7WebCore16RenderFlowThread29objectShouldPaintInFlowRegionEPKNS_12RenderObjectEPKNS_12RenderRegionE(HEAP32[i14 + 116 >> 2] | 0, i16, i14) | 0) {
    i15 = i16;
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i14 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) != (i14 | 0)) {
   __ZNK7WebCore9RenderBox29overflowRectForPaintRejectionEPNS_12RenderRegionE(i6, i9, HEAP32[i13 >> 2] | 0);
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i9, i6);
   i16 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(i15, HEAP32[i11 >> 2] | 0) | 0;
   i17 = i6 | 0;
   i18 = (HEAP32[i17 >> 2] | 0) - i16 | 0;
   i19 = i6 + 8 | 0;
   i20 = i16 << 1;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i20;
   i19 = i6 + 4 | 0;
   i21 = (HEAP32[i19 >> 2] | 0) - i16 | 0;
   i16 = i6 + 12 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i20;
   i20 = HEAP32[i3 >> 2] | 0;
   HEAP32[i17 >> 2] = i18 + (HEAP32[i12 >> 2] | 0);
   HEAP32[i19 >> 2] = i21 + i20;
   i20 = i2 + 4 | 0;
   i21 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i7 + 4 >> 2] = i21;
   i21 = i2 + 12 | 0;
   i20 = HEAP32[i21 + 4 >> 2] | 0;
   HEAP32[i7 + 8 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i7 + 12 >> 2] = i20;
   if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i6, i7) | 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i7 = __ZN7WebCore9RenderBox16pushContentsClipERNS_9PaintInfoERKNS_11LayoutPointE(i9, i2, i5) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 952 >> 2] & 63](i1, i2, i5);
 if (i7) {
  __ZN7WebCore9RenderBox15popContentsClipERNS_9PaintInfoENS_10PaintPhaseERKNS_11LayoutPointE(i9, i2, i10, i5);
 }
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (!((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0 & i10 >>> 0 < 2 >>> 0)) {
  STACKTOP = i4;
  return;
 }
 i10 = HEAP32[i2 + 28 >> 2] | 0;
 if (!((i10 | 0) == 0 | (i10 | 0) == (i15 | 0))) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i15 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i10 = HEAP32[i3 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 4 >> 2] = i10;
 __ZN7WebCore11RenderLayer21paintOverflowControlsEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectEb(i15, i1, i8, i2 + 4 | 0, 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i9 = i8;
 i10 = i9 + ~(i9 << 15) | 0;
 i9 = (i10 >>> 10 ^ i10) * 9 & -1;
 i10 = i9 >>> 6 ^ i9;
 i9 = i10 + ~(i10 << 11) | 0;
 i10 = i9 >>> 16 ^ i9;
 i9 = (i10 >>> 23) + ~i10 | 0;
 i11 = i9 << 12 ^ i9;
 i9 = i11 >>> 7 ^ i11;
 i11 = i9 << 2 ^ i9;
 i9 = i11 >>> 20 ^ i11 | 1;
 i11 = 0;
 i12 = i10;
 i10 = 0;
 while (1) {
  i13 = i12 & i6;
  i14 = i7 + (i13 << 2) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i15;
  if ((i16 | 0) == 0) {
   break;
  } else if ((i16 | 0) == (-1 | 0)) {
   i17 = i14;
  } else {
   if ((HEAP32[i15 >> 2] | 0) == (i8 | 0)) {
    i18 = 6;
    break;
   } else {
    i17 = i11;
   }
  }
  i15 = (i10 | 0) == 0 ? i9 : i10;
  i11 = i17;
  i12 = i15 + i13 | 0;
  i10 = i15;
 }
 if ((i18 | 0) == 6) {
  i18 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i7 = i1;
  HEAP32[i7 >> 2] = i14;
  HEAP32[i7 + 4 >> 2] = i18;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i11 | 0) == 0) {
  i19 = i14;
 } else {
  HEAP32[i11 >> 2] = 0;
  i14 = i2 + 16 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) - 1;
  i19 = i11;
 }
 i11 = HEAP32[i4 >> 2] | 0;
 i4 = i11 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i20 = __ZN3WTF10fastMallocEj(12) | 0;
 } else {
  i18 = HEAP32[i14 + 8 >> 2] | 0;
  do {
   if ((i18 | 0) == 0) {
    i7 = i11 + 4 | 0;
    if ((HEAP8[i7] & 1) != 0) {
     i21 = 0;
     break;
    }
    i10 = i14 + 12 | 0;
    if ((i10 | 0) != (i11 + 3080 | 0)) {
     i21 = i10;
     break;
    }
    HEAP8[i7] = 1;
    i21 = 0;
   } else {
    i21 = i18;
   }
  } while (0);
  HEAP32[i4 >> 2] = i21;
  i20 = i14;
 }
 HEAP32[i20 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i20 + 4 >> 2] = 0;
 HEAP32[i20 + 8 >> 2] = 0;
 HEAP32[i19 >> 2] = i20;
 i20 = i2 + 12 | 0;
 i3 = (HEAP32[i20 >> 2] | 0) + 1 | 0;
 HEAP32[i20 >> 2] = i3;
 i20 = i2 + 4 | 0;
 i14 = HEAP32[i20 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i3 << 1 | 0) < (i14 | 0)) {
  i22 = i19;
  i23 = i14;
 } else {
  i14 = __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i2, i19) | 0;
  i22 = i14;
  i23 = HEAP32[i20 >> 2] | 0;
 }
 i20 = (HEAP32[i5 >> 2] | 0) + (i23 << 2) | 0;
 i23 = i1;
 HEAP32[i23 >> 2] = i22;
 HEAP32[i23 + 4 >> 2] = i20;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderBlock27finishDelayUpdateScrollInfoEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[H_BASE + 1560 >> 2] | 0) - 1 | 0;
 HEAP32[H_BASE + 1560 >> 2] = i3;
 if ((i3 | 0) != 0) {
  STACKTOP = i1;
  return;
 }
 i3 = HEAP32[H_BASE + 1528 >> 2] | 0;
 HEAP32[H_BASE + 1528 >> 2] = 0;
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i3 + 4 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i5 + (i7 << 2) | 0;
 L4 : do {
  if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
   i9 = i5;
  } else {
   L6 : do {
    if ((i7 | 0) == 0) {
     i10 = i5;
    } else {
     i11 = i5;
     while (1) {
      i12 = HEAP32[i11 >> 2] | 0;
      if (!((i12 | 0) == (-1 | 0) | (i12 | 0) == 0)) {
       i10 = i11;
       break L6;
      }
      i12 = i11 + 4 | 0;
      if ((i12 | 0) == (i8 | 0)) {
       i9 = i5;
       break L4;
      } else {
       i11 = i12;
      }
     }
    }
   } while (0);
   if ((i10 | 0) == (i8 | 0)) {
    i9 = i5;
    break;
   }
   i11 = i2;
   i12 = i2 | 0;
   i13 = i2 + 8 | 0;
   i14 = i10;
   while (1) {
    i15 = HEAP32[i14 >> 2] | 0;
    L14 : do {
     if ((HEAP32[i15 + 20 >> 2] & 65536 | 0) != 0) {
      __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(HEAP32[i15 + 40 >> 2] | 0);
      i16 = i15 | 0;
      i17 = i15 + 88 | 0;
      if ((HEAP32[i17 >> 2] | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 824 >> 2] & 127](i11, i16);
      i18 = i15 + 52 | 0;
      i19 = HEAP32[i18 >> 2] | 0;
      i20 = HEAP32[i18 + 4 >> 2] | 0;
      i18 = HEAP32[i12 >> 2] | 0;
      i21 = HEAP32[i12 + 4 >> 2] | 0;
      i22 = 1;
      do {
       if ((i18 | 0) == 0 & (i21 >>> 0 < i22 >>> 0 | i21 >>> 0 == i22 >>> 0 & i18 >>> 0 < 0 >>> 0)) {
        if ((HEAP32[i13 >> 2] | 0) != (i19 | 0)) {
         break;
        }
        if ((HEAP32[i13 + 4 >> 2] | 0) != (i20 | 0)) {
         break;
        }
        __ZN7WebCore9RenderBox13clearOverflowEv(i16);
        break L14;
       }
      } while (0);
      i16 = HEAP32[i17 >> 2] | 0;
      i18 = i16 + 4 | 0;
      HEAP32[i18 >> 2] = 0;
      HEAP32[i18 + 4 >> 2] = 0;
      i18 = i16 + 12 | 0;
      HEAP32[i18 >> 2] = i19;
      HEAP32[i18 + 4 >> 2] = i20;
     }
    } while (0);
    i15 = i14 + 4 | 0;
    L23 : do {
     if ((i15 | 0) == (i8 | 0)) {
      i23 = i8;
     } else {
      i18 = i15;
      while (1) {
       i16 = HEAP32[i18 >> 2] | 0;
       if (!((i16 | 0) == (-1 | 0) | (i16 | 0) == 0)) {
        i23 = i18;
        break L23;
       }
       i16 = i18 + 4 | 0;
       if ((i16 | 0) == (i8 | 0)) {
        i23 = i8;
        break;
       } else {
        i18 = i16;
       }
      }
     }
    } while (0);
    i15 = HEAP32[i4 >> 2] | 0;
    if ((i23 | 0) == (i15 + (HEAP32[i6 >> 2] << 2) | 0)) {
     i9 = i15;
     break;
    } else {
     i14 = i23;
    }
   }
  }
 } while (0);
 if ((i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 if ((i9 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i9);
 }
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i1;
 return;
}
function __ZNK7WebCore11RenderBlock10renderNameEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 & 128 | 0) == 0) {
   i5 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i5 + 44 >> 2] | 0;
   i5 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i6 | 0) == (i5 | 0)) {
    i7 = H_BASE + 312 | 0;
    return i7 | 0;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i5 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i6 + 16 >> 2] | 0) == (HEAP32[i5 + 16 >> 2] | 0)) {
    i7 = H_BASE + 312 | 0;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 if ((i4 & 64 | 0) != 0) {
  i7 = H_BASE + 288 | 0;
  return i7 | 0;
 }
 if ((i4 & 25165824 | 0) == 16777216) {
  i7 = H_BASE + 240 | 0;
  return i7 | 0;
 }
 if ((i4 & 768 | 0) == 256) {
  i8 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i5 = (HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
 do {
  if ((HEAP8[i5] & 3) == 3) {
   i6 = (HEAP32[i5 >> 2] | 0) >>> 11 & 3;
   if ((i6 | 0) == 2) {
    i9 = i4;
    break;
   }
   i10 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i10 | 0) == 0 | (i10 | 0) == 3) ^ (i6 | 0) == 0) {
    i11 = 15;
   } else {
    i9 = i4;
   }
  } else {
   i11 = 15;
  }
 } while (0);
 do {
  if ((i11 | 0) == 15) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i2) | 0) {
    i7 = H_BASE + 200 | 0;
    return i7 | 0;
   } else {
    i9 = HEAP32[i3 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i9 & 768 | 0) == 256) {
  i12 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i12 = HEAP32[i2 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i12 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i2) | 0) {
    i7 = H_BASE + 152 | 0;
   } else {
    break;
   }
   return i7 | 0;
  }
 } while (0);
 if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i2) | 0) {
  i7 = H_BASE + 128 | 0;
  return i7 | 0;
 }
 i12 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i12 & 128 | 0) == 0) {
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i13 = i12;
    break;
   }
   if ((HEAP32[i9 + 12 >> 2] & 1048580 | 0) != 1048580) {
    i13 = i12;
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 232 >> 2] & 511](i9) | 0) == 0) {
    i13 = HEAP32[i3 >> 2] | 0;
    break;
   } else {
    i7 = H_BASE + 104 | 0;
    return i7 | 0;
   }
  } else {
   i13 = i12;
  }
 } while (0);
 if ((i13 & 128 | 0) != 0) {
  i7 = H_BASE + 104 | 0;
  return i7 | 0;
 }
 i12 = i13 & 25165824;
 if ((i12 | 0) == 8388608) {
  i7 = H_BASE + 64 | 0;
  return i7 | 0;
 }
 if ((i12 | 0) == 25165824) {
  i7 = H_BASE + 32 | 0;
  return i7 | 0;
 }
 if ((i13 & 768 | 0) == 256) {
  i14 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i14 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i7 = (HEAP32[i14 + 48 >> 2] & 31 | 0) == 3 ? H_BASE + 8 | 0 : H_BASE + 272 | 0;
 return i7 | 0;
}
function __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = i9;
 i1 = i2 + 36 | 0;
 do {
  if (i4) {
   i10 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i10 + 40 >> 2] & 1073741824 | 0) != 0) {
    i11 = i9;
    break;
   }
   i12 = HEAP32[i10 + 24 >> 2] | 0;
   i10 = HEAP8[i12 + 77 | 0] | 0;
   if ((i10 << 24 >> 24 | 0) == 10 | (i10 << 24 >> 24 | 0) == 2) {
    i10 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
    if ((HEAP32[i10 + 20 >> 2] & 4194304 | 0) == 0) {
     __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i7, i10 | 0);
    } else {
     __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i7, i10);
    }
    i13 = HEAP32[i7 >> 2] | 0;
    i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   } else {
    i13 = 0;
    i14 = i12;
   }
   HEAP32[i6 >> 2] = i13;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i8, i14 + 72 | 0, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i12 = i9 - (HEAP32[i8 >> 2] | 0) | 0;
   HEAP32[i3 >> 2] = i12;
   i11 = i12;
  } else {
   i11 = i9;
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 92 >> 2] & 2048 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 if (((HEAP32[i9 + 44 >> 2] ^ HEAP32[i8 + 44 >> 2]) & 24576 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i9 = __ZNK7WebCore11RenderStyle4fontEv(i8) | 0;
 i8 = HEAP32[i9 + 24 >> 2] | 0;
 i6 = i8 + 44 | 0;
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i13 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i8, i9 | 0, 0) | 0;
  i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 31](i13, 32) | 0;
  HEAP32[i6 >> 2] = i9;
  i15 = i9;
 } else {
  i15 = i14;
 }
 d16 = +HEAPF32[i15 + 44 >> 2];
 if (d16 == +0) {
  STACKTOP = i5;
  return;
 }
 i15 = (HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0;
 i2 = i1 + 72 | 0;
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 i15 ? 0 : i14;
 i9 = i1 + 44 | 0;
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 i15 ? 0 : i1;
 d17 = +(i11 | 0) - +Math_ceil(+_fmod(+(+_fmod(+(+(i11 - (i15 ? i14 : HEAP32[i2 >> 2] | 0) + (i15 ? i1 : HEAP32[i9 >> 2] | 0) | 0)), +d16)), +d16));
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
 HEAP32[i3 >> 2] = i18;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, d17 = +0, i18 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = i9;
 i1 = i2 + 36 | 0;
 do {
  if (i4) {
   i10 = HEAP32[i1 >> 2] | 0;
   if ((HEAP32[i10 + 40 >> 2] & 1073741824 | 0) == 0) {
    i11 = i9;
    break;
   }
   i12 = HEAP32[i10 + 24 >> 2] | 0;
   i10 = HEAP8[i12 + 77 | 0] | 0;
   if ((i10 << 24 >> 24 | 0) == 10 | (i10 << 24 >> 24 | 0) == 2) {
    i10 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
    if ((HEAP32[i10 + 20 >> 2] & 4194304 | 0) == 0) {
     __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i7, i10 | 0);
    } else {
     __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i7, i10);
    }
    i13 = HEAP32[i7 >> 2] | 0;
    i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] | 0;
   } else {
    i13 = 0;
    i14 = i12;
   }
   HEAP32[i6 >> 2] = i13;
   __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i8, i14 + 72 | 0, i6, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
   i12 = (HEAP32[i8 >> 2] | 0) + i9 | 0;
   HEAP32[i3 >> 2] = i12;
   i11 = i12;
  } else {
   i11 = i9;
  }
 } while (0);
 i9 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 92 >> 2] & 2048 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 if (((HEAP32[i9 + 44 >> 2] ^ HEAP32[i8 + 44 >> 2]) & 24576 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 i9 = __ZNK7WebCore11RenderStyle4fontEv(i8) | 0;
 i8 = HEAP32[i9 + 24 >> 2] | 0;
 i6 = i8 + 44 | 0;
 i14 = HEAP32[i6 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i13 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i8, i9 | 0, 0) | 0;
  i9 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] & 31](i13, 32) | 0;
  HEAP32[i6 >> 2] = i9;
  i15 = i9;
 } else {
  i15 = i14;
 }
 d16 = +HEAPF32[i15 + 44 >> 2];
 if (d16 == +0) {
  STACKTOP = i5;
  return;
 }
 i15 = (HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0;
 i2 = i1 + 72 | 0;
 i14 = HEAP32[i2 + 4 >> 2] | 0;
 i15 ? 0 : i14;
 i9 = i1 + 44 | 0;
 i1 = HEAP32[i9 + 4 >> 2] | 0;
 i15 ? 0 : i1;
 d17 = +_fmod(+(d16 - +_fmod(+(+(i11 - (i15 ? i14 : HEAP32[i2 >> 2] | 0) + (i15 ? i1 : HEAP32[i9 >> 2] | 0) | 0)), +d16)), +d16) + +(i11 | 0);
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
 HEAP32[i3 >> 2] = i18;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i8, 0) | 0;
  i10 = HEAP32[i5 >> 2] | 0;
 } else {
  i10 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8;
 i9 = i3 + ~(i3 << 15) | 0;
 i3 = (i9 >>> 10 ^ i9) * 9 & -1;
 i9 = i3 >>> 6 ^ i3;
 i3 = i9 + ~(i9 << 11) | 0;
 i9 = i3 >>> 16 ^ i3;
 i3 = i9 & i6;
 i7 = i10 + (i3 << 2) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i7;
   i13 = 11;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i7;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 8;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i10 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 10;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 10) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 11;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   } else if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i13 | 0) == 11) {
  i25 = i12;
  i26 = i2 + 16 | 0;
 }
 HEAP32[i25 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i26 >> 2] | 0) + i12 << 1 | 0) < (i13 | 0)) {
  i27 = i25;
  i28 = i13;
 } else {
  if ((i13 | 0) == 0) {
   i29 = 8;
  } else {
   i26 = i13 << 1;
   i29 = (i12 * 6 & -1 | 0) < (i26 | 0) ? i13 : i26;
  }
  i26 = __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i2, i29, i25) | 0;
  i27 = i26;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 HEAP32[i12 >> 2] = i14;
 HEAP32[i13 >> 2] = 0;
 __ZNK7WebCore11RenderBlock24logicalLeftOffsetForLineENS_10LayoutUnitEbS1_(i11, i2, i12, 0, i13);
 i13 = i2 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i4 = FUNCTION_TABLE_ii[HEAP32[i12 + 736 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i10, i13);
  i15 = (HEAP32[i10 >> 2] | 0) + i4 | 0;
 } else {
  i4 = FUNCTION_TABLE_ii[HEAP32[i12 + 744 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i9, i13);
  i15 = (HEAP32[i9 >> 2] | 0) + i4 | 0;
 }
 i4 = i11 | 0;
 i11 = HEAP32[i4 >> 2] | 0;
 if ((i11 | 0) != (i15 | 0)) {
  if ((i2 | 0) == (i3 | 0)) {
   i16 = i11;
  } else {
   i9 = i2;
   i13 = i5;
   i12 = i11;
   while (1) {
    i11 = HEAP32[i9 + 36 >> 2] | 0;
    i10 = (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3;
    if ((i10 | 0) == 3 | (i10 | 0) == 0) {
     i17 = i9 + 44 | 0;
    } else {
     i17 = i9 + 48 | 0;
    }
    i18 = i12 + (HEAP32[i17 >> 2] | 0) | 0;
    i10 = (HEAP32[i11 + 48 >> 2] | 0) >>> 22 & 7;
    if ((i10 | 0) == 6) {
     i19 = i13 | 0;
    } else if ((i10 | 0) == 2) {
     i19 = i13 + 20 | 0;
    } else {
     i19 = i13 + 40 | 0;
    }
    i10 = HEAP32[i19 >> 2] | 0;
    if ((i10 | 0) == (i3 | 0)) {
     break;
    } else {
     i9 = i10;
     i13 = HEAP32[i19 + 4 >> 2] | 0;
     i12 = i18;
    }
   }
   HEAP32[i4 >> 2] = i18;
   i16 = i18;
  }
  HEAP32[i1 >> 2] = i16;
  STACKTOP = i6;
  return;
 }
 if ((i3 | 0) == (i2 | 0)) {
  HEAP32[i1 >> 2] = i15;
  STACKTOP = i6;
  return;
 }
 i15 = HEAP32[i2 + 36 >> 2] | 0;
 i16 = (HEAP32[i15 + 48 >> 2] | 0) >>> 22 & 7;
 if ((i16 | 0) == 6) {
  i20 = i5 | 0;
 } else if ((i16 | 0) == 2) {
  i20 = i5 + 20 | 0;
 } else {
  i20 = i5 + 40 | 0;
 }
 i5 = (HEAP32[i15 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i21 = i2 + 48 | 0;
 } else {
  i21 = i2 + 44 | 0;
 }
 i2 = i20 + 8 | 0;
 i5 = HEAP8[i2] | 0;
 if ((i5 & 3) == 2) {
  i22 = HEAP32[i20 + 12 >> 2] | 0;
 } else {
  i15 = i14 + (HEAP32[i21 >> 2] | 0) | 0;
  HEAP8[i2] = i5 | 2;
  i5 = HEAP32[i20 >> 2] | 0;
  HEAP32[i8 >> 2] = i15;
  __ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE(i7, i5, i3, i8, HEAP32[i20 + 4 >> 2] | 0);
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i20 + 12 >> 2] = i8;
  i22 = i8;
 }
 HEAP32[i1 >> 2] = i22;
 STACKTOP = i6;
 return;
}
function __ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i7 >> 2] = i1;
 __ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4takeERKS4_(i6, i2, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i6);
  STACKTOP = i4;
  return;
 }
 i2 = HEAP32[i7 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i6);
  STACKTOP = i4;
  return;
 }
 i7 = i8;
 i1 = i2;
 while (1) {
  i2 = HEAP32[i3 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i1 >> 2];
  __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4findERKS4_(i9, i2, i10);
  i2 = HEAP32[i3 >> 2] | 0;
  i11 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i11 | 0) != ((HEAP32[i2 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 3) | 0)) {
    i12 = HEAP32[i11 + 4 >> 2] | 0;
    __ZN3WTF7HashSetIPN7WebCore11RenderBlockENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i12, i5) | 0;
    if ((HEAP32[i12 + 12 >> 2] | 0) != 0) {
     break;
    }
    i12 = HEAP32[i3 >> 2] | 0;
    i13 = HEAP32[i8 >> 2] | 0;
    i14 = i12 | 0;
    i15 = i12 + 4 | 0;
    if ((i13 | 0) == ((HEAP32[i12 >> 2] | 0) + (HEAP32[i15 >> 2] << 3) | 0)) {
     break;
    }
    i16 = HEAP32[i13 + 4 >> 2] | 0;
    if ((i16 | 0) != 0) {
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) != 0) {
      __ZN3WTF8fastFreeEPv(i17);
     }
     __ZN3WTF8fastFreeEPv(i16);
    }
    HEAP32[i13 >> 2] = -1;
    i13 = i12 + 16 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    i13 = i12 + 12 | 0;
    i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
    HEAP32[i13 >> 2] = i12;
    i13 = HEAP32[i15 >> 2] | 0;
    if (!((i12 * 6 & -1 | 0) < (i13 | 0) & (i13 | 0) > 8)) {
     break;
    }
    __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i14, (i13 | 0) / 2 & -1, 0) | 0;
   }
  } while (0);
  i1 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock40markFixedPositionObjectForLayoutIfNeededERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i2 + 20 | 0;
 i6 = (HEAP32[i5 >> 2] & 768 | 0) == 256;
 if (i6) {
  i7 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[i7 + 48 >> 2] & 29360128 | 0) != 25165824) {
  STACKTOP = i3;
  return;
 }
 if (i6) {
  i8 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i8 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i7 = (HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0;
 i1 = HEAP32[i8 + 16 >> 2] | 0;
 do {
  if (i7) {
   if ((HEAP8[i1 + 9 | 0] | 0) != 0) {
    i9 = 0;
    break;
   }
   i9 = (HEAP8[i1 + 17 | 0] | 0) == 0;
  } else {
   if ((HEAP8[i1 + 25 | 0] | 0) != 0) {
    i9 = 0;
    break;
   }
   i9 = (HEAP8[i1 + 33 | 0] | 0) == 0;
  }
 } while (0);
 if (i6) {
  i10 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i2 + 36 >> 2] | 0;
 }
 i6 = HEAP32[i10 + 16 >> 2] | 0;
 do {
  if (i7) {
   if ((HEAP8[i6 + 25 | 0] | 0) != 0) {
    i11 = 0;
    break;
   }
   i11 = (HEAP8[i6 + 33 | 0] | 0) == 0;
  } else {
   if ((HEAP8[i6 + 9 | 0] | 0) != 0) {
    i11 = 0;
    break;
   }
   i11 = (HEAP8[i6 + 17 | 0] | 0) == 0;
  }
 } while (0);
 if (!(i9 | i11)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2 + 8 | 0;
 while (1) {
  i12 = HEAP32[i6 >> 2] | 0;
  if ((HEAP32[i12 + 20 >> 2] & 768 | 0) == 768) {
   break;
  }
  if ((HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 8388608) {
   break;
  }
  i6 = i12 + 8 | 0;
 }
 if ((HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 8388608) {
  STACKTOP = i3;
  return;
 }
 i12 = i2;
 if (i11) {
  _memset(i4 | 0, 0, 24) | 0;
  __ZNK7WebCore9RenderBox27computeLogicalWidthInRegionERNS0_27LogicalExtentComputedValuesEPNS_12RenderRegionE(i12, i4, 0);
  i11 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
  if ((i11 | 0) == 3 | (i11 | 0) == 0) {
   i13 = i2 + 44 | 0;
  } else {
   i13 = i2 + 48 | 0;
  }
  if ((HEAP32[i4 + 4 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
   STACKTOP = i3;
   return;
  }
  i13 = HEAP32[i5 >> 2] | 0;
  if ((i13 & 4 | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  HEAP32[i5 >> 2] = i13 | 4;
  STACKTOP = i3;
  return;
 }
 if (!i9) {
  STACKTOP = i3;
  return;
 }
 i9 = i2 + 36 | 0;
 i13 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i13 | 0) == 3 | (i13 | 0) == 0) {
  i14 = i2 + 48 | 0;
 } else {
  i14 = i2 + 44 | 0;
 }
 i13 = HEAP32[i14 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 880 >> 2] & 63](i12);
 i12 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i12 | 0) == 3 | (i12 | 0) == 0) {
  i15 = i2 + 48 | 0;
 } else {
  i15 = i2 + 44 | 0;
 }
 if ((HEAP32[i15 >> 2] | 0) == (i13 | 0)) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i5 >> 2] | 0;
 if ((i13 & 4 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = i13 | 4;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock15calcColumnWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 4 | 0;
 if (__ZNK7WebCore8Document25regionBasedColumnsEnabledEv(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i3, i1 | 0);
 i7 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i7 + 660 | 0] & 1) == 0) {
   if ((HEAP8[i7 + 661 | 0] & 1) != 0) {
    break;
   }
   i6 = i1 + 36 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   i9 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 68 >> 2] | 0;
   i10 = i9 + 32 | 0;
   if ((HEAP8[i10] & 3) == 3) {
    break;
   }
   i11 = HEAP32[i10 >> 2] | 0;
   i10 = i11 >>> 11 & 3;
   if ((i10 | 0) != 2) {
    i12 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
    if (((i12 | 0) == 0 | (i12 | 0) == 3) ^ (i10 | 0) == 0) {
     break;
    }
   }
   i10 = i3 | 0;
   i12 = HEAP32[i10 >> 2] | 0;
   if ((i11 & 4 | 0) == 0) {
    d13 = +HEAPF32[i9 + 12 >> 2];
    i14 = i9;
   } else {
    d15 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i8) | 0) + 12 >> 2] + +.5;
    d13 = d15;
    i14 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0;
   }
   i6 = ~~d13;
   d15 = +HEAPF32[i14 + 4 >> 2];
   do {
    if (d15 < +2147483647) {
     if (d15 <= +-2147483648) {
      i16 = -2147483648;
      break;
     }
     i16 = ~~d15;
    } else {
     i16 = 2147483647;
    }
   } while (0);
   i8 = HEAPU16[i14 + 8 >> 1] | 0;
   i9 = i8 >>> 0 > 1 >>> 0 ? i8 : 1;
   i8 = HEAP8[i14 + 32 | 0] & 3;
   do {
    if (i8 << 24 >> 24 == 1) {
     i11 = i9 - 1 | 0;
     i17 = (i12 - (Math_imul(i11 >>> 0 < 2147483647 >>> 0 ? i11 : 2147483647, i6) | 0) | 0) / (i9 | 0) & -1;
     i11 = (i17 | 0) > 0 ? i17 : 0;
     HEAP32[i10 >> 2] = i11;
     i18 = i9;
     i19 = i11;
    } else {
     i11 = i6 + i12 | 0;
     i17 = (i11 | 0) / (((i16 | 0) > 1 ? i16 : 1) + i6 | 0) & -1;
     if (i8 << 24 >> 24 == 2) {
      i20 = (i17 | 0) > 1 ? i17 : 1;
      i21 = ((i11 | 0) / ((i20 >>> 0 < 2147483647 >>> 0 ? i20 : 2147483647) | 0) & -1) - i6 | 0;
      HEAP32[i10 >> 2] = i21;
      i18 = i20;
      i19 = i21;
      break;
     } else {
      i21 = (i17 | 0) < (i9 | 0) ? i17 : i9;
      i17 = (i21 | 0) < 1 ? 1 : i21;
      i21 = ((i11 | 0) / ((i17 >>> 0 < 2147483647 >>> 0 ? i17 : 2147483647) | 0) & -1) - i6 | 0;
      HEAP32[i10 >> 2] = i21;
      i18 = i17;
      i19 = i21;
      break;
     }
    }
   } while (0);
   HEAP32[i5 >> 2] = i19;
   __ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE(i1, i18, i5);
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE(i1, 1, i4);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderBlock19inlineBlockBaselineENS_17LineDirectionModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 3;
 } else {
  if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   i8 = 3;
  }
 }
 do {
  if ((i8 | 0) == 3) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 511](i1 | 0) | 0) {
    break;
   } else {
    i9 = -1;
   }
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = 0;
   i11 = i7;
   while (1) {
    i12 = HEAP32[i11 + 20 >> 2] | 0;
    if ((i12 & 64 | 0) != 0 | (i12 & 25165824 | 0) == 16777216) {
     i13 = i10;
    } else {
     i14 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 968 >> 2] & 31](i11, i2) | 0;
     if ((i14 | 0) == -1) {
      i13 = 1;
     } else {
      break;
     }
    }
    i12 = HEAP32[i11 + 12 >> 2] | 0;
    if ((i12 | 0) == 0) {
     i8 = 12;
     break;
    } else {
     i10 = i13;
     i11 = i12;
    }
   }
   if ((i8 | 0) == 12) {
    if (i13) {
     i9 = -1;
    } else {
     break;
    }
    STACKTOP = i3;
    return i9 | 0;
   }
   i10 = (HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i10 | 0) == 3 | (i10 | 0) == 0) {
    i15 = i11 + 48 | 0;
   } else {
    i15 = i11 + 44 | 0;
   }
   i9 = (HEAP32[i15 >> 2] | 0) + i14 | 0;
   STACKTOP = i3;
   return i9 | 0;
  }
 } while (0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1040 >> 2] & 511](i1) | 0)) {
  i9 = -1;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
  i16 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i16 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i1 | 0) | 0;
 }
 i14 = __ZNK7WebCore11RenderStyle11fontMetricsEv(i16) | 0;
 i16 = i14 + 4 | 0;
 i15 = _round(+(+HEAPF32[i16 >> 2])) | 0;
 __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i4, i1, 1, i2, 1);
 i13 = _round(+(+HEAPF32[i16 >> 2])) | 0;
 i16 = _round(+(+HEAPF32[i14 + 8 >> 2])) | 0;
 i14 = (((HEAP32[i4 >> 2] | 0) - (i16 + i13) | 0) / 2 & -1) + i15 | 0;
 i15 = i1 | 0;
 i13 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i2 = FUNCTION_TABLE_ii[HEAP32[i13 + 736 >> 2] & 511](i15) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 704 >> 2] & 127](i5, i15);
  i17 = (HEAP32[i5 >> 2] | 0) + i2 | 0;
 } else {
  i2 = FUNCTION_TABLE_ii[HEAP32[i13 + 748 >> 2] & 511](i15) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 716 >> 2] & 127](i6, i15);
  i17 = (HEAP32[i6 >> 2] | 0) + i2 | 0;
 }
 i9 = i14 + i17 | 0;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore20InlineMinMaxIterator4nextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = i1 + 8 | 0;
 i3 = (HEAP8[i2] & 1) == 0;
 HEAP8[i2] = 0;
 i4 = i1 + 4 | 0;
 i5 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 L1 : while (1) {
  if ((i1 | 0) == 0) {
   if ((HEAP32[i5 >> 2] | 0) != 0) {
    i6 = 0;
    i7 = 23;
    break;
   }
  }
  do {
   if (i3) {
    if ((i1 | 0) == (HEAP32[i5 >> 2] | 0)) {
     i7 = 7;
    } else {
     i8 = HEAP32[i1 + 20 >> 2] | 0;
     if (!((i8 & 2112 | 0) != 0 | (i8 & 25165824 | 0) == 16777216)) {
      i7 = 7;
     }
    }
    if ((i7 | 0) == 7) {
     i7 = 0;
     i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 511](i1) | 0;
     if ((i8 | 0) != 0) {
      i9 = i8;
      break;
     }
    }
    i10 = HEAP32[i4 >> 2] | 0;
    if ((HEAP32[i10 + 20 >> 2] & 768 | 0) == 256) {
     i11 = i10;
     i7 = 11;
     break;
    }
    if ((HEAP32[i10 + 24 >> 2] & 4 | 0) == 0) {
     i11 = i10;
     i7 = 11;
    } else {
     i7 = 10;
     break L1;
    }
   } else {
    i11 = i1;
    i7 = 11;
   }
  } while (0);
  L14 : do {
   if ((i7 | 0) == 11) {
    while (1) {
     i7 = 0;
     if ((i11 | 0) == 0) {
      i6 = 0;
      i7 = 24;
      break L1;
     }
     i8 = HEAP32[i5 >> 2] | 0;
     if ((i11 | 0) == (i8 | 0)) {
      i6 = 0;
      i7 = 26;
      break L1;
     }
     i12 = HEAP32[i11 + 16 >> 2] | 0;
     if ((i12 | 0) != 0) {
      i9 = i12;
      break L14;
     }
     i13 = HEAP32[i11 + 8 >> 2] | 0;
     i14 = i13 | 0;
     HEAP32[i4 >> 2] = i14;
     if ((i13 | 0) == 0 | (i14 | 0) == (i8 | 0)) {
      i11 = i14;
      i7 = 11;
      continue;
     }
     if ((HEAP32[i13 + 20 >> 2] & 768 | 0) == 256) {
      i11 = i14;
      i7 = 11;
      continue;
     }
     if ((HEAP32[i14 + 24 >> 2] & 4 | 0) == 0) {
      i11 = i14;
      i7 = 11;
     } else {
      break;
     }
    }
    HEAP8[i2] = 1;
    if ((i13 | 0) == 0) {
     i6 = 0;
     i7 = 27;
     break L1;
    } else {
     i9 = i14;
    }
   }
  } while (0);
  i8 = HEAP32[i9 + 20 >> 2] | 0;
  if ((i8 & 25165824 | 0) != 16777216) {
   if (!((i8 & 4096 | 0) == 0 & (i8 & 768 | 0) != 256 & (i8 & 2112 | 0) == 0)) {
    i6 = i9;
    i7 = 28;
    break;
   }
   if ((HEAP32[i9 + 24 >> 2] & 4 | 0) != 0) {
    i6 = i9;
    i7 = 29;
    break;
   }
  }
  HEAP32[i4 >> 2] = i9;
  i1 = i9;
 }
 if ((i7 | 0) == 10) {
  HEAP8[i2] = 1;
  i6 = i10;
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 23) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 24) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 26) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 27) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 28) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 } else if ((i7 | 0) == 29) {
  HEAP32[i4 >> 2] = i6;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderBlock15isSelectionRootEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 do {
  if ((HEAP32[i3 >> 2] & 128 | 0) == 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 1048580 | 0) != 1048580) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 232 >> 2] & 511](i4) | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 184 >> 2] & 511](i2) | 0) {
  i5 = 0;
  return i5 | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i6 & 128 | 0) == 0) {
   if ((HEAP32[i7 + 12 >> 2] & 4 | 0) == 0) {
    break;
   }
   i8 = HEAP32[i7 + 44 >> 2] | 0;
   i9 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i8 | 0) == (i9 | 0)) {
    i5 = 1;
    return i5 | 0;
   }
   if ((HEAP32[i8 + 12 >> 2] | 0) != (HEAP32[i9 + 12 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i8 + 16 >> 2] | 0) == (HEAP32[i9 + 16 >> 2] | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i9 = i1 + 4 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i7 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if ((i6 & 25231424 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 188 >> 2] & 511](i2) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 if (!((i6 & 3072 | 0) != 3072 & (i6 & 393216 | 0) == 0)) {
  i5 = 1;
  return i5 | 0;
 }
 i6 = HEAP32[i1 + 36 >> 2] | 0;
 i7 = HEAP32[i6 + 20 >> 2] | 0;
 i8 = i7 + 116 | 0;
 while (1) {
  if ((HEAP32[i8 + 4 >> 2] | 0) != 0) {
   i5 = 1;
   i10 = 40;
   break;
  }
  i8 = HEAP32[i8 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 if ((i10 | 0) == 40) {
  return i5 | 0;
 }
 if ((HEAP32[(HEAP32[i7 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (((HEAP32[i6 + 44 >> 2] ^ HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] & 511](i2) | 0) {
  i5 = 1;
  return i5 | 0;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 120 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i7 = __ZNK7WebCore4Node19rootEditableElementEv(i4) | 0;
   if ((HEAP32[i3 >> 2] & 128 | 0) == 0) {
    i11 = HEAP32[i9 >> 2] | 0;
   } else {
    i11 = 0;
   }
   if ((i7 | 0) == (i11 | 0)) {
    i5 = 1;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = 0;
 return i5 | 0;
}
function __ZNK7WebCore11RenderBlock45adjustStartEdgeForWritingModeIncludingColumnsERNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 if ((HEAP32[i6 >> 2] & 4194304 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 36 | 0;
 i8 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i8 | 0) == 3 | (i8 | 0) == 1)) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i8 + 8 >> 2] | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 i8 = i1;
 i12 = i8 + ~(i8 << 15) | 0;
 i8 = (i12 >>> 10 ^ i12) * 9 & -1;
 i12 = i8 >>> 6 ^ i8;
 i8 = i12 + ~(i12 << 11) | 0;
 i12 = i8 >>> 16 ^ i8;
 L7 : do {
  if ((i11 | 0) == 0) {
   i13 = 0;
  } else {
   i8 = i10 & i12;
   i14 = i11 + (i8 << 3) | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   if ((i15 | 0) == (i9 | 0)) {
    i16 = i14;
   } else {
    i14 = (i12 >>> 23) + ~i12 | 0;
    i17 = i14 << 12 ^ i14;
    i14 = i17 >>> 7 ^ i17;
    i17 = i14 << 2 ^ i14;
    i14 = i17 >>> 20 ^ i17 | 1;
    i17 = 0;
    i18 = i8;
    i8 = i15;
    while (1) {
     if ((i8 | 0) == 0) {
      i13 = 0;
      break L7;
     }
     i15 = (i17 | 0) == 0 ? i14 : i17;
     i19 = i15 + i18 & i10;
     i20 = i11 + (i19 << 3) | 0;
     i21 = HEAP32[i20 >> 2] | 0;
     if ((i21 | 0) == (i9 | 0)) {
      i16 = i20;
      break;
     } else {
      i17 = i15;
      i18 = i19;
      i8 = i21;
     }
    }
   }
   if ((i16 | 0) == 0) {
    i13 = 0;
    break;
   }
   i13 = HEAP32[i16 + 4 >> 2] | 0;
  }
 } while (0);
 i16 = HEAP32[i13 + 20 >> 2] | 0;
 i11 = i1 | 0;
 i10 = i1;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 752 >> 2] & 511](i11) | 0;
 i8 = i1;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 720 >> 2] & 127](i4, i11);
 i18 = HEAP32[i13 + 16 >> 2] | 0;
 i13 = (HEAP32[i4 >> 2] | 0) + i12 + (Math_imul(i18 >>> 0 < 2147483647 >>> 0 ? i18 : 2147483647, i16) | 0) | 0;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 756 >> 2] & 511](i11) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 724 >> 2] & 127](i5, i11);
 i11 = HEAP32[i5 >> 2] | 0;
 i5 = (HEAP32[(HEAP32[i7 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i5 | 0) == 3 | (i5 | 0) == 0) {
  i22 = __ZNK7WebCore9RenderBox25horizontalScrollbarHeightEv(i9) | 0;
 } else {
  i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 908 >> 2] & 511](i9) | 0;
 }
 i9 = i13 + i16 + i11 + i22 | 0;
 if ((HEAP32[i6 >> 2] & 8192 | 0) == 0) {
  i6 = i2 | 0;
  HEAP32[i6 >> 2] = i9 - (HEAP32[i6 >> 2] | 0) - (HEAP32[i2 + 8 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  i6 = i2 + 4 | 0;
  HEAP32[i6 >> 2] = i9 - (HEAP32[i6 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF7HashMapIPN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS7_EEEEEENS8_IS3_EENS_10HashTraitsIS3_EENSD_ISB_EEE4takeERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = i8 << 3 | 0;
  i10 = 0;
  i11 = i8;
 } else {
  i8 = HEAP32[i2 + 8 >> 2] | 0;
  i12 = HEAP32[i3 >> 2] | 0;
  i3 = i12;
  i13 = i3 + ~(i3 << 15) | 0;
  i3 = (i13 >>> 10 ^ i13) * 9 & -1;
  i13 = i3 >>> 6 ^ i3;
  i3 = i13 + ~(i13 << 11) | 0;
  i13 = i3 >>> 16 ^ i3;
  i3 = i13 & i8;
  i14 = i7 + (i3 << 3) | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  L4 : do {
   if ((i15 | 0) == (i12 | 0)) {
    i16 = i14;
   } else {
    i17 = (i13 >>> 23) + ~i13 | 0;
    i18 = i17 << 12 ^ i17;
    i17 = i18 >>> 7 ^ i18;
    i18 = i17 << 2 ^ i17;
    i17 = i18 >>> 20 ^ i18 | 1;
    i18 = 0;
    i19 = i3;
    i20 = i15;
    while (1) {
     if ((i20 | 0) == 0) {
      i16 = 0;
      break L4;
     }
     i21 = (i18 | 0) == 0 ? i17 : i18;
     i22 = i21 + i19 & i8;
     i23 = i7 + (i22 << 3) | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     if ((i24 | 0) == (i12 | 0)) {
      i16 = i23;
      break;
     } else {
      i18 = i21;
      i19 = i22;
      i20 = i24;
     }
    }
   }
  } while (0);
  i12 = HEAP32[i2 + 4 >> 2] | 0;
  i9 = (i16 | 0) == 0 ? i7 + (i12 << 3) | 0 : i16;
  i10 = i7;
  i11 = i12;
 }
 i12 = i2 + 4 | 0;
 if ((i9 | 0) == (i10 + (i11 << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i11 = i5 | 0;
 i10 = i9 + 4 | 0;
 i7 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i11 >> 2] = i7;
 i7 = i2 | 0;
 do {
  if ((i9 | 0) != ((HEAP32[i6 >> 2] | 0) + (HEAP32[i12 >> 2] << 3) | 0)) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i9 + 4 | 0);
   HEAP32[i9 >> 2] = -1;
   i10 = i2 + 16 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i2 + 12 | 0;
   i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i16;
   i10 = HEAP32[i12 >> 2] | 0;
   if (!((i16 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E6rehashEiPSD_(i7, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i7 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 >> 2] = i7;
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i1 + 4 | 0;
 if ((HEAP8[i7] & 1) != 0) {
  STACKTOP = i5;
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 64 | 0) != 0) {
  STACKTOP = i5;
  return;
 }
 L7 : do {
  if ((i1 & 25165824 | 0) == 16777216) {
   if ((i1 & 768 | 0) == 256) {
    i8 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i8 = HEAP32[i2 + 36 >> 2] | 0;
   }
   switch ((HEAP32[i8 + 48 >> 2] | 0) >>> 5 & 31 | 0) {
   case 0:
   case 19:
   case 17:
   case 7:
   case 5:
   case 21:
    {
     break L7;
     break;
    }
   default:
    {}
   }
   if ((HEAP32[(__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i2, 0, 0) | 0) + 24 >> 2] & 4 | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP8[i7] = 1;
 i7 = __Znwj(24) | 0;
 i8 = i7;
 __ZN7WebCore7BidiRunC1EiiRNS_12RenderObjectEPNS_11BidiContextE14UCharDirection(i8, i3, 0, i2, HEAP32[i4 + 76 >> 2] | 0, HEAP32[i4 + 80 >> 2] | 0);
 HEAP32[i6 >> 2] = i8;
 i3 = i4 + 124 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = i8;
  i9 = i4 + 128 | 0;
 } else {
  i3 = i4 + 128 | 0;
  HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] = i7;
  i9 = i3;
 }
 HEAP32[i9 >> 2] = i8;
 i8 = i4 + 136 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
 i8 = i4 + 168 | 0;
 i9 = i4 + 176 | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == (HEAP32[i4 + 172 >> 2] | 0)) {
  i7 = i3 + 1 | 0;
  i1 = i8 | 0;
  i10 = HEAP32[i1 >> 2] | 0;
  do {
   if (i10 >>> 0 > i6 >>> 0) {
    i11 = 16;
   } else {
    if ((i10 + (i3 << 2) | 0) >>> 0 <= i6 >>> 0) {
     i11 = 16;
     break;
    }
    __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i7);
    i12 = HEAP32[i1 >> 2] | 0;
    i13 = i12 + (i6 - i10 >> 2 << 2) | 0;
    i14 = i12;
   }
  } while (0);
  if ((i11 | 0) == 16) {
   __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i7);
   i13 = i6;
   i14 = HEAP32[i1 >> 2] | 0;
  }
  HEAP32[i14 + (HEAP32[i9 >> 2] << 2) >> 2] = HEAP32[i13 >> 2];
 } else {
  HEAP32[(HEAP32[i8 >> 2] | 0) + (i3 << 2) >> 2] = HEAP32[i6 >> 2];
 }
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i4 + 160 | 0;
 if ((HEAP8[i9] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 i6 = i4 + 156 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i4 + 148 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 if ((HEAP32[(HEAP32[i4 + 140 >> 2] | 0) + (i3 << 4) + 4 >> 2] | 0) != (i2 | 0)) {
  STACKTOP = i5;
  return;
 }
 HEAP8[i9] = 0;
 HEAP32[i6 >> 2] = i3 + 1;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, d16 = +0, d17 = +0, d18 = +0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i1 | 0;
 i9 = i1 + 20 | 0;
 if ((HEAP32[i9 >> 2] & 2097152 | 0) == 0) {
  __ZNK7WebCore11RenderBlock34computeBlockPreferredLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3);
 } else {
  __ZN7WebCore11RenderBlock35computeInlinePreferredLogicalWidthsERNS_10LayoutUnitES2_(i1, i2, i3);
 }
 i10 = i2 | 0;
 i11 = i3 | 0;
 HEAP32[i11 >> 2] = HEAP32[((HEAP32[i10 >> 2] | 0) < (HEAP32[i11 >> 2] | 0) ? i3 : i2) >> 2];
 __ZNK7WebCore11RenderBlock38adjustIntrinsicLogicalWidthsForColumnsERNS_10LayoutUnitES2_(i1, i2, i3);
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] & 7;
 do {
  if ((i3 | 0) == 4 | (i3 | 0) == 1) {
   if ((HEAP32[i9 >> 2] & 2097152 | 0) == 0) {
    break;
   }
   i12 = HEAP32[i1 + 40 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[i12 + 160 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if (!(__ZNK7WebCore13RenderMarquee12isHorizontalEv(i13) | 0)) {
    break;
   }
   HEAP32[i10 >> 2] = 0;
  }
 } while (0);
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 188 >> 2] & 511](i8) | 0) {
   __ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv(i5, i1);
   i9 = i5 + 5 | 0;
   i3 = HEAP8[i9] | 0;
   if (i3 << 24 >> 24 == 3) {
    i13 = (HEAP8[i5 + 6 | 0] & 1) == 0;
    if (i13) {
     i12 = HEAP32[i5 >> 2] | 0;
     d14 = +(i12 | 0);
     i15 = i12;
     d16 = (HEAP32[tempDoublePtr >> 2] = i12, +HEAPF32[tempDoublePtr >> 2]);
    } else {
     d17 = +HEAPF32[i5 >> 2];
     d14 = d17;
     i15 = (HEAPF32[tempDoublePtr >> 2] = d17, HEAP32[tempDoublePtr >> 2] | 0);
     d16 = d17;
    }
    if (d14 <= +0) {
     break;
    }
    i12 = i1 | 0;
    if (i13) {
     d18 = +(i15 | 0);
    } else {
     d18 = d16;
    }
    do {
     if (d18 < +2147483647) {
      if (d18 <= +-2147483648) {
       i19 = -2147483648;
       break;
      }
      i19 = ~~d18;
     } else {
      i19 = 2147483647;
     }
    } while (0);
    HEAP32[i7 >> 2] = i19;
    __ZNK7WebCore9RenderBox40adjustContentBoxLogicalWidthForBoxSizingENS_10LayoutUnitE(i6, i12, i7);
    HEAP32[i11 >> 2] = HEAP32[((HEAP32[i10 >> 2] | 0) < (HEAP32[i6 >> 2] | 0) ? i6 : i2) >> 2];
    i20 = HEAP8[i9] | 0;
   } else {
    i20 = i3;
   }
   if (i20 << 24 >> 24 != 10) {
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
  }
 } while (0);
 i5 = __ZNK7WebCore9RenderBox31instrinsicScrollbarLogicalWidthEv(i1 | 0) | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i5;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i5;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i12 = HEAP32[i3 + 20 >> 2] | 0;
 i13 = i2 | 0;
 i14 = i2;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 752 >> 2] & 511](i13) | 0;
 i16 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 720 >> 2] & 127](i8, i13);
 i17 = (HEAP32[i8 >> 2] | 0) + i15 | 0;
 i15 = i2 + 20 | 0;
 i8 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i15 >> 2] & 8192 | 0) == 0) {
  i14 = FUNCTION_TABLE_ii[HEAP32[i8 + 736 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 704 >> 2] & 127](i7, i13);
  i18 = (HEAP32[i7 >> 2] | 0) + i14 | 0;
 } else {
  i14 = FUNCTION_TABLE_ii[HEAP32[i8 + 744 >> 2] & 511](i13) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 712 >> 2] & 127](i6, i13);
  i18 = (HEAP32[i6 >> 2] | 0) + i14 | 0;
 }
 i14 = i2 + 36 | 0;
 i6 = HEAP32[i14 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 68 >> 2] | 0;
 if ((HEAP8[i13 + 32 | 0] & 4) == 0) {
  d19 = +HEAPF32[i13 + 12 >> 2];
 } else {
  d19 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i6) | 0) + 12 >> 2] + +.5;
 }
 i6 = ~~d19;
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) == 0) {
   if ((HEAP32[(HEAP32[i14 >> 2] | 0) + 40 >> 2] & 1073741824 | 0) != 0 ^ (HEAP8[i3 + 12 | 0] & 1) != 0) {
    i20 = (Math_imul(i6 + i11 | 0, i4 >>> 0 < 2147483647 >>> 0 ? i4 : 2147483647) | 0) + i18 | 0;
    i21 = i17;
    break;
   } else {
    __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i9, i2 | 0);
    i20 = i18 - i11 - (Math_imul(i6 + i11 | 0, i4 >>> 0 < 2147483647 >>> 0 ? i4 : 2147483647) | 0) + (HEAP32[i9 >> 2] | 0) | 0;
    i21 = i17;
    break;
   }
  } else {
   if ((HEAP8[i3 + 12 | 0] & 1) == 0) {
    i20 = i18;
    i21 = (Math_imul(i6 + i12 | 0, i4 >>> 0 < 2147483647 >>> 0 ? i4 : 2147483647) | 0) + i17 | 0;
    break;
   } else {
    __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i10, i2 | 0);
    i20 = i18;
    i21 = i17 - i12 - (Math_imul(i6 + i12 | 0, i4 >>> 0 < 2147483647 >>> 0 ? i4 : 2147483647) | 0) + (HEAP32[i10 >> 2] | 0) | 0;
    break;
   }
  }
 } while (0);
 i10 = i1 | 0;
 if ((HEAP32[i15 >> 2] & 8192 | 0) == 0) {
  HEAP32[i10 >> 2] = i21;
  HEAP32[i1 + 4 >> 2] = i20;
  HEAP32[i1 + 8 >> 2] = i12;
  HEAP32[i1 + 12 >> 2] = i11;
  STACKTOP = i5;
  return;
 } else {
  HEAP32[i10 >> 2] = i20;
  HEAP32[i1 + 4 >> 2] = i21;
  HEAP32[i1 + 8 >> 2] = i11;
  HEAP32[i1 + 12 >> 2] = i12;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN7WebCore9RenderBox12imageChangedEPKvPKNS_7IntRectE(i1 | 0, i2, 0);
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 1048576 | 0) == 0) {
  return;
 }
 i5 = i1 + 36 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 184 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = HEAP32[i6 + 12 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] & 511](i7) | 0) != (i2 | 0)) {
    break;
   }
   i7 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i8 = __ZN3WTF10fastMallocEj(56) | 0;
     HEAP32[i8 + 4 >> 2] = 0;
     HEAP32[i8 + 8 >> 2] = 0;
     HEAP32[i8 + 12 >> 2] = i1;
     HEAP32[i8 + 16 >> 2] = 0;
     HEAP32[i8 + 20 >> 2] = 0;
     HEAP32[i8 + 24 >> 2] = 0;
     HEAP32[i8 >> 2] = __ZTVN7WebCore15ShapeInsideInfoE + 8;
     HEAP32[i8 + 28 >> 2] = 0;
     HEAP32[i8 + 32 >> 2] = 0;
     HEAP32[i8 + 36 >> 2] = 0;
     i9 = i8 + 40 | 0;
     HEAP8[i9] = HEAP8[i9] & -2;
     HEAP32[i8 + 44 >> 2] = 0;
     HEAP32[i8 + 48 >> 2] = 0;
     HEAP32[i8 + 52 >> 2] = 0;
     i9 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i8;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
    }
   } while (0);
   i10 = (HEAP32[i7 >> 2] | 0) + 16 | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
   }
   __ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv(i1);
  }
 } while (0);
 i1 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 188 >> 2] | 0;
 if ((HEAP32[i4 >> 2] & 64 | 0) == 0 | (i1 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] & 511](i4) | 0) != (i2 | 0)) {
  return;
 }
 i2 = HEAP32[i3 >> 2] | 0;
 i3 = i2 | 0;
 i4 = i2 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i2 & 1 | 0) == 0) {
   HEAP32[i4 >> 2] = i2 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
   if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
 return;
}
function __ZNK7WebCore11RenderBlock15requiresColumnsEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((((HEAP32[i3 + 48 >> 2] | 0) >>> 13 & 7) - 6 | 0) >>> 0 < 2 >>> 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i4 | 0)) {
    i5 = 0;
    break;
   }
   if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0 | (i4 | 0) == 0) {
    i5 = 1;
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 4 | 0) == 0) {
    i5 = 1;
    break;
   }
   i6 = HEAP32[i4 + 44 >> 2] | 0;
   i4 = HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0;
   if ((i6 | 0) == (i4 | 0)) {
    i5 = 0;
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] | 0) != (HEAP32[i4 + 12 >> 2] | 0)) {
    i5 = 1;
    break;
   }
   i5 = (HEAP32[i6 + 16 >> 2] | 0) != (HEAP32[i4 + 16 >> 2] | 0);
  } else {
   i5 = 0;
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i7 = 0;
  return i7 | 0;
 }
 do {
  if ((i2 | 0) == 1) {
   i6 = (HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   if ((HEAP8[i6] & 1) == 0) {
    break;
   }
   i8 = (HEAP32[i6 >> 2] | 0) >>> 11 & 3;
   if ((i8 | 0) == 2) {
    i9 = 0;
   } else {
    i6 = (HEAP32[i3 + 44 >> 2] | 0) >>> 13 & 3;
    i9 = ((i6 | 0) == 0 | (i6 | 0) == 3) ^ (i8 | 0) == 0;
   }
   if (i9 | i5) {
    break;
   } else {
    i7 = 0;
   }
   return i7 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i5 & 768 | 0) == 256) {
  i10 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i10 = HEAP32[i1 + 36 >> 2] | 0;
 }
 i9 = (HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
 do {
  if ((HEAP8[i9] & 3) == 3) {
   i3 = (HEAP32[i9 >> 2] | 0) >>> 11 & 3;
   if ((i3 | 0) == 2) {
    i11 = i1;
    i12 = i5;
    break;
   }
   i2 = (HEAP32[i10 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i2 | 0) == 0 | (i2 | 0) == 3) ^ (i3 | 0) == 0) {
    i13 = 20;
   } else {
    i11 = i1;
    i12 = i5;
   }
  } else {
   i13 = 20;
  }
 } while (0);
 do {
  if ((i13 | 0) == 20) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) | 0) {
    i7 = 0;
    return i7 | 0;
   } else {
    i5 = HEAP32[i4 >> 2] | 0;
    i11 = i5;
    i12 = HEAP32[i5 + 20 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i12 & 768 | 0) == 256) {
  i14 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i14 = HEAP32[i11 + 36 >> 2] | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
  i7 = 1;
  return i7 | 0;
 }
 i7 = (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i11) | 0) ^ 1;
 return i7 | 0;
}
function __ZN7WebCore11RenderBlock10paintCaretERNS_9PaintInfoERKNS_11LayoutPointENS_9CaretTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i1 | 0;
 i9 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 i10 = (HEAP8[(HEAP32[i1 + 36 >> 2] | 0) + 183 | 0] & 4) != 0;
 i11 = (i4 | 0) == 0;
 do {
  if (i11) {
   i4 = __ZNK7WebCore14FrameSelection13caretRendererEv(HEAP32[i1 + 468 >> 2] | 0) | 0;
   i12 = __ZNK7WebCore16VisibleSelection16hasEditableStyleEv((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 468 >> 2] | 0) + 32 | 0) | 0;
   i13 = i4;
  } else {
   i4 = __ZNK7WebCore19DragCaretController13caretRendererEv(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 24 >> 2] | 0) | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0) + 24 >> 2] | 0) + 24 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i12 = 0;
    i13 = i4;
    break;
   }
   i12 = (__ZNK7WebCore4Node19rootEditableElementEv(i14) | 0) != 0;
   i13 = i4;
  }
 } while (0);
 if (!((i13 | 0) == (i8 | 0) & (i12 | i10))) {
  STACKTOP = i5;
  return;
 }
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 if (i11) {
  i11 = HEAP32[i10 + 468 >> 2] | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i12 = i2 + 4 | 0;
  i8 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i6 + 4 >> 2] = i8;
  i8 = i2 + 12 | 0;
  i12 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i6 + 8 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i6 + 12 >> 2] = i12;
  __ZN7WebCore14FrameSelection10paintCaretEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i11, i9, i3, i6);
  STACKTOP = i5;
  return;
 } else {
  i6 = HEAP32[(HEAP32[i10 + 32 >> 2] | 0) + 24 >> 2] | 0;
  i9 = HEAP32[i2 >> 2] | 0;
  i11 = i2 + 4 | 0;
  i12 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i7 + 4 >> 2] = i12;
  i12 = i2 + 12 | 0;
  i2 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i7 + 8 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i7 + 12 >> 2] = i2;
  __ZNK7WebCore19DragCaretController14paintDragCaretEPNS_5FrameEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i6, i10, i9, i3, i7);
  STACKTOP = i5;
  return;
 }
}
function __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = HEAP32[i7 + 16 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i8 = i9;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = i1 + 20 | 0;
 if ((HEAP32[i9 >> 2] & 805306368 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i5) | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP32[i9 >> 2] & 1088 | 0) != 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i7 = i1 + 92 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i11 = i1 + 36 | 0;
 if ((i10 & 33554431 | 0) == 33554431) {
  i12 = (__ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(HEAP32[i11 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) & 33554431;
  i6 = HEAP32[i7 >> 2] & -33554432 | i12;
  HEAP32[i7 >> 2] = i6;
  i13 = i6;
 } else {
  i13 = i10;
 }
 i10 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  i14 = i1 + 56 | 0;
 } else {
  i14 = i1 + 52 | 0;
 }
 i10 = HEAP32[i14 >> 2] | 0;
 if ((HEAP32[i9 >> 2] & 805306368 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i5) | 0;
 if ((i9 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP8[i9 + 292 | 0] & 1) != 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 if ((HEAP32[i9 + 128 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i4, i1);
 HEAP32[i3 >> 2] = (i13 << 7 >> 7) - 1 + i10 + (HEAP32[i4 >> 2] | 0);
 i4 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i9, i1 | 0, i3, 1, 0) | 0;
 if ((i4 | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i3 = (HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i15 = i4 + 56 | 0;
 } else {
  i15 = i4 + 52 | 0;
 }
 if ((HEAP32[i15 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i4 | 0) | 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZNK7WebCore11RenderBlock35marginIntrinsicLogicalWidthForChildERNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7;
 i9 = i3 + 36 | 0;
 i3 = i2 + 36 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i10 = __ZNK7WebCore9LengthBox5startENS_11WritingModeENS_13TextDirectionE((HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i2 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i5 + 4 >> 2] = i11;
 if ((i2 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i6);
 }
 i11 = HEAP32[i3 >> 2] | 0;
 i3 = __ZNK7WebCore9LengthBox3endENS_11WritingModeENS_13TextDirectionE((HEAP32[(HEAP32[i9 >> 2] | 0) + 16 >> 2] | 0) + 36 | 0, (HEAP32[i11 + 44 >> 2] | 0) >>> 13 & 3, (HEAP32[i11 + 40 >> 2] | 0) >>> 30 & 1) | 0;
 i11 = HEAP32[i3 >> 2] | 0;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i11;
 HEAP32[i7 + 4 >> 2] = i9;
 if ((i11 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
 }
 i9 = i1 | 0;
 HEAP32[i9 >> 2] = 0;
 i1 = i6 + 5 | 0;
 i11 = HEAP8[i1] | 0;
 if (i11 << 24 >> 24 == 3) {
  if ((HEAP8[i6 + 6 | 0] & 1) == 0) {
   d12 = +(HEAP32[i5 >> 2] | 0);
  } else {
   d12 = +HEAPF32[i5 >> 2];
  }
  d13 = d12 + +0;
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i14 = -2147483648;
     break;
    }
    i14 = ~~d13;
   } else {
    i14 = 2147483647;
   }
  } while (0);
  HEAP32[i9 >> 2] = i14;
  i15 = i14;
 } else {
  i15 = 0;
 }
 i14 = HEAP8[i8 + 5 | 0] | 0;
 if ((i14 << 24 >> 24 | 0) == 3) {
  if ((HEAP8[i8 + 6 | 0] & 1) == 0) {
   d16 = +(HEAP32[i7 >> 2] | 0);
  } else {
   d16 = +HEAPF32[i7 >> 2];
  }
  d13 = d16 + +(i15 | 0);
  do {
   if (d13 < +2147483647) {
    if (d13 <= +-2147483648) {
     i17 = -2147483648;
     break;
    }
    i17 = ~~d13;
   } else {
    i17 = 2147483647;
   }
  } while (0);
  HEAP32[i9 >> 2] = i17;
  if (i14 << 24 >> 24 == 10) {
   i18 = 21;
  } else {
   i19 = i11;
  }
 } else if ((i14 << 24 >> 24 | 0) == 10) {
  i18 = 21;
 } else {
  i19 = i11;
 }
 if ((i18 | 0) == 21) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
  i19 = HEAP8[i1] | 0;
 }
 if (i19 << 24 >> 24 != 10) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i1 & 2097152 | 0) == 0 | (i1 & 768 | 0) == 256) {
  return;
 }
 i3 = i2 + 24 | 0;
 if ((HEAP32[i3 >> 2] & 32 | 0) == 0) {
  return;
 }
 do {
  if ((i1 & 128 | 0) == 0) {
   i4 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i4 + 32 | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
    i6 = i5 | 0;
   } else {
    i6 = HEAP32[i5 >> 2] | 0;
   }
   if ((HEAP32[i6 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 432 >> 2] & 511](i2) | 0) != 0) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 608 >> 2] & 511](i2) | 0)) {
  return;
 }
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 i1 = i6 + 20 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 & 768 | 0) == 256) {
  return;
 }
 if ((HEAP32[i6 + 24 >> 2] & 16 | 0) == 0) {
  return;
 }
 if ((i5 & 2097152 | 0) == 0) {
  return;
 }
 i4 = i6;
 if ((HEAP32[i6 + 92 >> 2] & 134217728 | 0) != 0) {
  return;
 }
 if ((HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 48 >> 2] & 31 | 0) == 3) {
  return;
 }
 i7 = i6 + 28 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i8 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i8 + 36 >> 2] | 0;
   }
   if ((HEAP32[i9 + 48 >> 2] & 31 | 0) != 3) {
    break;
   }
   return;
  }
 } while (0);
 if ((i5 & 192 | 0) != 0 | (i5 & 25165824 | 0) == 16777216) {
  return;
 }
 i5 = __ZN7WebCore11RenderBlock22createReplacementRunInERNS_20RenderBoxModelObjectE(0, i2) | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i9 & 16 | 0) == 0) {
   if ((i9 & 4 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderInline11deleteLinesEv(i2);
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 1016 >> 2] & 63](i2);
  }
 } while (0);
 __ZN7WebCore12RenderObject7destroyEv(i2);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 628 >> 2] & 63](i4, i5 | 0, HEAP32[i7 >> 2] | 0);
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i7 & 1 | 0) == 0) {
   HEAP32[i1 >> 2] = i7 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i6, 1, 0);
   if ((HEAP32[i1 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i6);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i6, 1, 1);
 return;
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
function __ZN7WebCore11RenderBlock25updateColumnInfoFromStyleEPNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 4194304 | 0) == 0) {
  return;
 }
 i5 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i5 + 8 >> 2] | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = i1;
 i1 = i5 + ~(i5 << 15) | 0;
 i5 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i5 >>> 6 ^ i5;
 i5 = i1 + ~(i1 << 11) | 0;
 i1 = i5 >>> 16 ^ i5;
 L4 : do {
  if ((i8 | 0) == 0) {
   i9 = 0;
  } else {
   i5 = i7 & i1;
   i10 = i8 + (i5 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i6 | 0)) {
    i12 = i10;
   } else {
    i10 = (i1 >>> 23) + ~i1 | 0;
    i13 = i10 << 12 ^ i10;
    i10 = i13 >>> 7 ^ i13;
    i13 = i10 << 2 ^ i10;
    i10 = i13 >>> 20 ^ i13 | 1;
    i13 = 0;
    i14 = i5;
    i5 = i11;
    while (1) {
     if ((i5 | 0) == 0) {
      i9 = 0;
      break L4;
     }
     i11 = (i13 | 0) == 0 ? i10 : i13;
     i15 = i11 + i14 & i7;
     i16 = i8 + (i15 << 3) | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     if ((i17 | 0) == (i6 | 0)) {
      i12 = i16;
      break;
     } else {
      i13 = i11;
      i14 = i15;
      i5 = i17;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i9 = 0;
    break;
   }
   i9 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i12 = i9 + 8 | 0;
 i6 = i2 + 20 | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0;
 i7 = i8 >>> 11 & 3;
 if ((i7 | 0) == 2) {
  i18 = 0;
 } else {
  i1 = (HEAP32[i2 + 44 >> 2] | 0) >>> 13 & 3;
  i18 = (((i1 | 0) == 0 | (i1 | 0) == 3) ^ (i7 | 0) == 0) & 1;
 }
 if ((HEAP32[i12 >> 2] | 0) == (i18 | 0)) {
  i19 = 0;
  i20 = i8;
 } else {
  HEAP32[i12 >> 2] = i18;
  i19 = 1;
  i20 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] | 0;
 }
 i6 = i9 + 12 | 0;
 i9 = (i20 & 24576 | 0) == 8192;
 do {
  if ((HEAP8[i6] & 1) != 0 ^ i9) {
   HEAP8[i6] = i9 & 1;
  } else {
   if (i19) {
    break;
   }
   return;
  }
 } while (0);
 i19 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i19 & 1 | 0) == 0) {
   HEAP32[i4 >> 2] = i19 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
   if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i11 << 2) | 0;
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   HEAP32[i30 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i16;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore11RenderBlock19adjustForColumnRectERNS_10LayoutSizeERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 __ZN7WebCore18ColumnRectIteratorC2ERKNS_11RenderBlockE(i7, i1);
 i1 = i7 + 20 | 0;
 i8 = HEAP32[i1 >> 2] | 0;
 if ((i8 | 0) <= -1) {
  STACKTOP = i4;
  return;
 }
 i9 = i7 + 28 | 0;
 i10 = i7 + 32 | 0;
 i11 = i7 + 40 | 0;
 i12 = i3 | 0;
 i13 = i3 + 4 | 0;
 i3 = i5;
 i14 = i7 + 28 | 0;
 i15 = i7 | 0;
 i16 = i7 + 4 | 0;
 i17 = i14;
 i18 = i7 + 24 | 0;
 i19 = i6 | 0;
 i20 = i7 + 36 | 0;
 i21 = i8;
 L4 : while (1) {
  i22 = HEAP32[i9 >> 2] | 0;
  i23 = HEAP32[i10 >> 2] | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  i24 = HEAP32[i12 >> 2] | 0;
  i25 = HEAP32[i13 >> 2] | 0;
  do {
   if ((i24 | 0) >= (i22 | 0)) {
    if ((i24 | 0) >= ((HEAP32[i20 >> 2] | 0) + i22 | 0) | (i25 | 0) < (i23 | 0)) {
     break;
    }
    if ((i25 | 0) < (i8 + i23 | 0)) {
     i26 = 6;
     break L4;
    }
   }
  } while (0);
  i8 = i21 - 1 | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) < 0) {
   i26 = 10;
   break;
  }
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i5, HEAP32[i15 >> 2] | 0, HEAP32[i16 >> 2] | 0, i8);
  HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i17 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
  HEAP32[i17 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
  HEAP32[i17 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(HEAP32[i15 >> 2] | 0, i14);
  __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i6, HEAP32[i15 >> 2] | 0);
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) - (HEAP32[i19 >> 2] | 0);
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) > -1) {
   i21 = i8;
  } else {
   i26 = 11;
   break;
  }
 }
 if ((i26 | 0) == 10) {
  STACKTOP = i4;
  return;
 } else if ((i26 | 0) == 6) {
  i21 = (HEAP8[i7 + 12 | 0] & 1) == 0;
  i1 = (i21 ? i23 : i22) - (HEAP32[i7 + 16 >> 2] | 0) | 0;
  i7 = HEAP32[i18 >> 2] | 0;
  i18 = i2 | 0;
  HEAP32[i18 >> 2] = (i21 ? i7 : i1) + (HEAP32[i18 >> 2] | 0);
  i18 = i2 + 4 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + (i21 ? i1 : i7);
  STACKTOP = i4;
  return;
 } else if ((i26 | 0) == 11) {
  STACKTOP = i4;
  return;
 }
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 7;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 7) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 2) | 0;
 if ((i6 | 0) == 0) {
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
  i5 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i14 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 7;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 7) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i6 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZN7WebCore11RenderBlock25paintsContinuationOutlineEPNS_12RenderInlineE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if (HEAP8[H_BASE + 1504 | 0] | 0) {
  i3 = HEAP32[H_BASE + 1512 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1512 >> 2] = i5;
  HEAP8[H_BASE + 1504 | 0] = 1;
  i3 = i5;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i7 = i3 + ~(i3 << 15) | 0;
 i3 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i3 >>> 6 ^ i3;
 i3 = i7 + ~(i7 << 11) | 0;
 i7 = i3 >>> 16 ^ i3;
 if ((i4 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i3 = i5 & i7;
 i8 = i4 + (i3 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L11 : do {
  if ((i9 | 0) == (i1 | 0)) {
   i10 = i8;
  } else {
   i11 = (i7 >>> 23) + ~i7 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i3;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     i6 = 0;
     break;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i5;
    i17 = i4 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i1 | 0)) {
     i10 = i17;
     break L11;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   return i6 | 0;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i1 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i6 = 0;
  return i6 | 0;
 }
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = i2;
 i5 = i1 + ~(i1 << 15) | 0;
 i1 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i1 >>> 6 ^ i1;
 i1 = i5 + ~(i5 << 11) | 0;
 i5 = i1 >>> 16 ^ i1;
 i1 = (i5 >>> 23) + ~i5 | 0;
 i9 = i1 << 12 ^ i1;
 i1 = i9 >>> 7 ^ i9;
 i9 = i1 << 2 ^ i1;
 i1 = i9 >>> 20 ^ i9 | 1;
 i9 = i5;
 i5 = 0;
 while (1) {
  i3 = i9 & i4;
  i7 = i10 + (i3 << 2) | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  i14 = i8;
  if ((i14 | 0) == 0) {
   i19 = 0;
   break;
  } else if ((i14 | 0) != (-1 | 0)) {
   if ((HEAP32[i8 >> 2] | 0) == (i2 | 0)) {
    i19 = i7;
    break;
   }
  }
  i7 = (i5 | 0) == 0 ? i1 : i5;
  i9 = i7 + i3 | 0;
  i5 = i7;
 }
 i6 = (i19 | 0) != 0;
 return i6 | 0;
}
function __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS1_10ColumnInfoEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = i2 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = i6 << 3 | 0;
  i8 = 0;
  i9 = i6;
 } else {
  i6 = HEAP32[i2 + 8 >> 2] | 0;
  i10 = HEAP32[i3 >> 2] | 0;
  i3 = i10;
  i11 = i3 + ~(i3 << 15) | 0;
  i3 = (i11 >>> 10 ^ i11) * 9 & -1;
  i11 = i3 >>> 6 ^ i3;
  i3 = i11 + ~(i11 << 11) | 0;
  i11 = i3 >>> 16 ^ i3;
  i3 = i11 & i6;
  i12 = i5 + (i3 << 3) | 0;
  i13 = HEAP32[i12 >> 2] | 0;
  L4 : do {
   if ((i13 | 0) == (i10 | 0)) {
    i14 = i12;
   } else {
    i15 = (i11 >>> 23) + ~i11 | 0;
    i16 = i15 << 12 ^ i15;
    i15 = i16 >>> 7 ^ i16;
    i16 = i15 << 2 ^ i15;
    i15 = i16 >>> 20 ^ i16 | 1;
    i16 = 0;
    i17 = i3;
    i18 = i13;
    while (1) {
     if ((i18 | 0) == 0) {
      i14 = 0;
      break L4;
     }
     i19 = (i16 | 0) == 0 ? i15 : i16;
     i20 = i19 + i17 & i6;
     i21 = i5 + (i20 << 3) | 0;
     i22 = HEAP32[i21 >> 2] | 0;
     if ((i22 | 0) == (i10 | 0)) {
      i14 = i21;
      break;
     } else {
      i16 = i19;
      i17 = i20;
      i18 = i22;
     }
    }
   }
  } while (0);
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  i7 = (i14 | 0) == 0 ? i5 + (i10 << 3) | 0 : i14;
  i8 = i5;
  i9 = i10;
 }
 i10 = i2 + 4 | 0;
 if ((i7 | 0) == (i8 + (i9 << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i9 = i7 + 4 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 i9 = i2 | 0;
 do {
  if ((i7 | 0) != ((HEAP32[i4 >> 2] | 0) + (HEAP32[i10 >> 2] << 3) | 0)) {
   HEAP32[i7 >> 2] = -1;
   i5 = i2 + 16 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
   i5 = i2 + 12 | 0;
   i14 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   HEAP32[i5 >> 2] = i14;
   i5 = HEAP32[i10 >> 2] | 0;
   if (!((i14 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_(i9, (i5 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i8;
 return;
}
function __ZN7WebCore23OverflowEventDispatcherC2EPKNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = i2;
 i7 = i1 + 5 | 0;
 HEAP8[i7] = 0;
 i8 = i1 + 6 | 0;
 HEAP8[i8] = 0;
 if ((HEAP32[i2 + 20 >> 2] & 65664 | 0) != 65536) {
  HEAP8[i1 + 4 | 0] = 0;
  STACKTOP = i3;
  return;
 }
 i9 = (HEAPU16[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 768 >> 1] | 0) >>> 6 & 1;
 HEAP8[i1 + 4 | 0] = i9;
 if (i9 << 24 >> 24 == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i4;
 i1 = HEAP32[i2 + 88 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i10 = 0;
  } else {
   i11 = i1 + 4 | 0;
   HEAP32[i9 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i2 | 0, i4);
   i11 = HEAP32[i4 >> 2] | 0;
   i12 = HEAP32[i2 + 44 >> 2] | 0;
   if ((i11 | 0) < (i12 | 0)) {
    i10 = 1;
    break;
   }
   i13 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i13 | 0) == 3 | (i13 | 0) == 0) {
    i14 = i2 + 52 | 0;
   } else {
    i14 = i2 + 56 | 0;
   }
   i10 = ((HEAP32[i4 + 8 >> 2] | 0) + i11 | 0) > ((HEAP32[i14 >> 2] | 0) + i12 | 0) | 0;
  }
 } while (0);
 HEAP8[i7] = i10;
 i10 = HEAP32[i6 >> 2] | 0;
 i6 = i5;
 i7 = HEAP32[i10 + 88 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i15 = 0;
  } else {
   i14 = i7 + 4 | 0;
   HEAP32[i6 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i6 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i6 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i6 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i10 | 0, i5);
   i14 = HEAP32[i5 + 4 >> 2] | 0;
   i4 = HEAP32[i10 + 48 >> 2] | 0;
   if ((i14 | 0) < (i4 | 0)) {
    i15 = 1;
    break;
   }
   i2 = (HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i2 | 0) == 3 | (i2 | 0) == 0) {
    i16 = i10 + 56 | 0;
   } else {
    i16 = i10 + 52 | 0;
   }
   i15 = ((HEAP32[i5 + 12 >> 2] | 0) + i14 | 0) > ((HEAP32[i16 >> 2] | 0) + i4 | 0) | 0;
  }
 } while (0);
 HEAP8[i8] = i15;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock45dirtyForLayoutFromPercentageHeightDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = HEAP32[H_BASE + 1520 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i5 = i2 + ~(i2 << 15) | 0;
 i2 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i2 >>> 6 ^ i2;
 i2 = i5 + ~(i5 << 11) | 0;
 i5 = i2 >>> 16 ^ i2;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i3 & i5;
 i6 = i4 + (i2 << 3) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L7 : do {
  if ((i7 | 0) == (i1 | 0)) {
   i8 = i6;
  } else {
   i9 = (i5 >>> 23) + ~i5 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = 0;
   i11 = i2;
   i12 = i7;
   while (1) {
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = (i10 | 0) == 0 ? i9 : i10;
    i14 = i13 + i11 & i3;
    i15 = i4 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i1 | 0)) {
     i8 = i15;
     break L7;
    } else {
     i10 = i13;
     i11 = i14;
     i12 = i16;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i8 = HEAP32[i4 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 }
 i4 = i1 | 0;
 i1 = i8;
 while (1) {
  i8 = HEAP32[i1 >> 2] | 0;
  while (1) {
   if ((i8 | 0) == (i4 | 0)) {
    break;
   }
   i3 = i8 | 0;
   i7 = i8 + 20 | 0;
   i2 = HEAP32[i7 >> 2] | 0;
   if ((i2 & 4 | 0) != 0) {
    break;
   }
   HEAP32[i7 >> 2] = i2 | 4;
   L29 : do {
    if ((i2 & 2048 | 0) != 0) {
     i7 = i8;
     do {
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 92 >> 2] & 511](i3) | 0)) {
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 224 >> 2] & 511](i3) | 0) {
        break;
       }
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 232 >> 2] & 511](i3) | 0)) {
        break L29;
       }
      }
     } while (0);
     __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
    }
   } while (0);
   i2 = __ZNK7WebCore12RenderObject15containingBlockEv(i3) | 0;
   if ((i2 | 0) == 0) {
    break;
   } else {
    i8 = i2 | 0;
   }
  }
  i1 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 20 | 0;
 L1 : do {
  if ((HEAP32[i6 >> 2] & 4194304 | 0) == 0) {
   i7 = 0;
  } else {
   i8 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i9 = i2 | 0;
   i10 = HEAP32[i8 + 8 >> 2] | 0;
   i11 = HEAP32[i8 >> 2] | 0;
   i8 = i2;
   i12 = i8 + ~(i8 << 15) | 0;
   i8 = (i12 >>> 10 ^ i12) * 9 & -1;
   i12 = i8 >>> 6 ^ i8;
   i8 = i12 + ~(i12 << 11) | 0;
   i12 = i8 >>> 16 ^ i8;
   if ((i11 | 0) == 0) {
    i7 = 0;
    break;
   }
   i8 = i10 & i12;
   i13 = i11 + (i8 << 3) | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == (i9 | 0)) {
    i15 = i13;
   } else {
    i13 = (i12 >>> 23) + ~i12 | 0;
    i12 = i13 << 12 ^ i13;
    i13 = i12 >>> 7 ^ i12;
    i12 = i13 << 2 ^ i13;
    i13 = i12 >>> 20 ^ i12 | 1;
    i12 = 0;
    i16 = i8;
    i8 = i14;
    while (1) {
     if ((i8 | 0) == 0) {
      i7 = 0;
      break L1;
     }
     i14 = (i12 | 0) == 0 ? i13 : i12;
     i17 = i14 + i16 & i10;
     i18 = i11 + (i17 << 3) | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     if ((i19 | 0) == (i9 | 0)) {
      i15 = i18;
      break;
     } else {
      i12 = i14;
      i16 = i17;
      i8 = i19;
     }
    }
   }
   if ((i15 | 0) == 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i15 + 4 >> 2] | 0;
  }
 } while (0);
 i15 = i1 | 0;
 HEAP32[i15 >> 2] = 0;
 if ((HEAP32[i7 + 8 >> 2] | 0) != 1) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i7 + 12 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i5, i2, i7, 0);
 if ((HEAP32[i6 >> 2] & 8192 | 0) == 0) {
  i20 = HEAP32[i5 >> 2] | 0;
 } else {
  i20 = HEAP32[i5 + 4 >> 2] | 0;
 }
 i5 = i2 | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 752 >> 2] & 511](i5) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 720 >> 2] & 127](i4, i5);
 i5 = i20 - ((HEAP32[i4 >> 2] | 0) + i6) | 0;
 HEAP32[i15 >> 2] = i5;
 i6 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i6 | 0) == 3 | (i6 | 0) == 1)) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i15 >> 2] = -i5;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock29updateShapesBeforeBlockLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i2 = 3;
 } else {
  if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0) == 0) {
   i2 = 3;
  }
 }
 do {
  if ((i2 | 0) == 3) {
   if ((__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i1) | 0) != 0) {
    break;
   }
   i3 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i1) | 0;
   do {
    if ((i3 | 0) == 0) {
     i4 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1) | 0;
     if ((i4 | 0) == 0) {
      i5 = 0;
      return i5 | 0;
     } else {
      i6 = HEAP8[i4 + 40 | 0] | 0;
      break;
     }
    } else {
     i4 = i3 + 40 | 0;
     i7 = HEAP8[i4] & -2 | (HEAP32[i3 + 16 >> 2] | 0) == 0;
     HEAP8[i4] = i7;
     i6 = i7;
    }
   } while (0);
   i5 = (i6 & 1) != 0;
   return i5 | 0;
  }
 } while (0);
 i6 = i1 + 36 | 0;
 i2 = (HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i8 = i1 + 56 | 0;
 } else {
  i8 = i1 + 52 | 0;
 }
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  i9 = i1 + 48 | 0;
 } else {
  i9 = i1 + 44 | 0;
 }
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 3 | (i2 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = 1073741823;
 } else {
  HEAP32[i1 + 52 >> 2] = 1073741823;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 880 >> 2] & 63](i1 | 0);
 __ZN7WebCore11RenderBlock16computeShapeSizeEv(i1);
 i2 = (HEAP32[i6 >> 2] | 0) + 44 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  HEAP32[i1 + 56 >> 2] = i3;
 } else {
  HEAP32[i1 + 52 >> 2] = i3;
 }
 i3 = (HEAP32[i2 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  HEAP32[i1 + 48 >> 2] = i8;
 } else {
  HEAP32[i1 + 44 >> 2] = i8;
 }
 i8 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i1) | 0;
 do {
  if ((i8 | 0) == 0) {
   i3 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1) | 0;
   if ((i3 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i10 = HEAP8[i3 + 40 | 0] | 0;
    break;
   }
  } else {
   i3 = i8 + 40 | 0;
   i2 = HEAP8[i3] & -2 | (HEAP32[i8 + 16 >> 2] | 0) == 0;
   HEAP8[i3] = i2;
   i10 = i2;
  }
 } while (0);
 i5 = (i10 & 1) != 0;
 return i5 | 0;
}
function __ZNK7WebCore11RenderBlock5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = 0;
 i1 = i2 | 0;
 if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1) | 0) {
  i8 = __ZN3WTF10fastMallocEj(116) | 0;
  i9 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  i10 = i2 + 20 | 0;
  if ((HEAP32[i10 >> 2] & 768 | 0) == 256) {
   i11 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i11 = HEAP32[i1 + 36 >> 2] | 0;
  }
  __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, i11, 1);
  __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i8, i9, i4);
  i4 = i8;
  __ZN7WebCore13RenderElement15initializeStyleEv(i8);
  HEAP32[i7 >> 2] = i4;
  i9 = i8 + 20 | 0;
  i8 = HEAP32[i9 >> 2] & -2097153 | HEAP32[i10 >> 2] & 2097152;
  HEAP32[i9 >> 2] = i8;
  i12 = i4;
  i13 = i8;
  i14 = i10;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i12 + 20 | 0;
  i17 = i16;
  i18 = i15 & 805306368;
  i19 = i13 & -805306369;
  i20 = i19 | i18;
  HEAP32[i17 >> 2] = i20;
  STACKTOP = i3;
  return;
 } else {
  i10 = HEAP32[i2 + 4 >> 2] | 0;
  i8 = HEAP32[(HEAP32[i10 >> 2] | 0) + 320 >> 2] | 0;
  i4 = HEAP32[i2 + 36 >> 2] | 0;
  HEAP32[i6 >> 2] = i4;
  i9 = i4 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  FUNCTION_TABLE_viii[i8 & 63](i5, i10, i6);
  i6 = i5 | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  i6 = i5;
  HEAP32[i7 >> 2] = i6;
  __ZN7WebCore13RenderElement15initializeStyleEv(i5);
  i7 = HEAP32[i5 + 28 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i10 = i2 + 20 | 0;
   i21 = HEAP32[i10 >> 2] & 2097152;
   i22 = i10;
  } else {
   i21 = HEAP32[i7 + 20 >> 2] & 1024;
   i22 = i2 + 20 | 0;
  }
  i2 = i5 + 20 | 0;
  i5 = ((i21 | 0) != 0) << 21 | HEAP32[i2 >> 2] & -2097153;
  HEAP32[i2 >> 2] = i5;
  i12 = i6;
  i13 = i5;
  i14 = i22;
  i15 = HEAP32[i14 >> 2] | 0;
  i16 = i12 + 20 | 0;
  i17 = i16;
  i18 = i15 & 805306368;
  i19 = i13 & -805306369;
  i20 = i19 | i18;
  HEAP32[i17 >> 2] = i20;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderBlock39logicalOffsetFromShapeAncestorContainerEPKS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = i2 + 52 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 L1 : do {
  if ((i2 | 0) == 0) {
   i11 = 0;
   i12 = 0;
  } else {
   i10 = i5;
   i9 = i7 + 4 | 0;
   i8 = i6;
   i13 = i7 + 12 | 0;
   i14 = i2;
   i15 = 0;
   i16 = 0;
   while (1) {
    i17 = i14 | 0;
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] & 511](i17) | 0 | (i14 | 0) == (i3 | 0)) {
     i11 = i15;
     i12 = i16;
     break L1;
    }
    i18 = __ZNK7WebCore12RenderObject15containingBlockEv(i17) | 0;
    if ((i18 | 0) == 0) {
     break;
    }
    i17 = (HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
    if ((i17 | 0) == ((HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3 | 0)) {
     i19 = i16;
     i20 = i15;
    } else {
     do {
      if ((i17 | 0) == 3 | (i17 | 0) == 1) {
       if ((HEAP32[i18 + 20 >> 2] & 8192 | 0) == 0) {
        HEAP32[i10 >> 2] = (HEAP32[i14 + 52 >> 2] | 0) - i16 - (HEAP32[i8 >> 2] | 0);
        break;
       } else {
        HEAP32[i9 >> 2] = (HEAP32[i14 + 56 >> 2] | 0) - i15 - (HEAP32[i13 >> 2] | 0);
        break;
       }
      }
     } while (0);
     __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i14 | 0, i7);
     i19 = HEAP32[i10 >> 2] | 0;
     i20 = HEAP32[i9 >> 2] | 0;
    }
    i17 = i14 + 44 | 0;
    i21 = HEAP32[i17 + 4 >> 2] | 0;
    i22 = i19 + (HEAP32[i17 >> 2] | 0) | 0;
    HEAP32[i10 >> 2] = i22;
    i17 = i20 + i21 | 0;
    HEAP32[i9 >> 2] = i17;
    i14 = i18;
    i15 = i17;
    i16 = i22;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   STACKTOP = i4;
   return;
  }
 } while (0);
 i20 = (HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0;
 i2 = i1;
 HEAP32[i2 >> 2] = i20 ? i11 : i12;
 HEAP32[i2 + 4 >> 2] = i20 ? i12 : i11;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i1, i2, i3) {
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
 HEAP32[i6 >> 2] = __ZN3WTF16fastZeroedMallocEj(i2 << 2) | 0;
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
  i2 = i7 + (i11 << 2) | 0;
  i13 = HEAP32[i2 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i14 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i13 >> 2] | 0;
   i18 = i17;
   i19 = i18 + ~(i18 << 15) | 0;
   i18 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i18 >>> 6 ^ i18;
   i18 = i19 + ~(i19 << 11) | 0;
   i19 = i18 >>> 16 ^ i18;
   i18 = (i19 >>> 23) + ~i19 | 0;
   i20 = i18 << 12 ^ i18;
   i18 = i20 >>> 7 ^ i20;
   i20 = i18 << 2 ^ i18;
   i18 = i20 >>> 20 ^ i20 | 1;
   i20 = i19;
   i19 = 0;
   i21 = 0;
   while (1) {
    i22 = i20 & i16;
    i23 = i14 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    i25 = i24;
    if ((i25 | 0) == (-1 | 0)) {
     i26 = i23;
    } else if ((i25 | 0) == 0) {
     i27 = 5;
     break;
    } else {
     if ((HEAP32[i24 >> 2] | 0) == (i17 | 0)) {
      i28 = i23;
      break;
     } else {
      i26 = i21;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i20 = i24 + i22 | 0;
    i19 = i24;
    i21 = i26;
   }
   if ((i27 | 0) == 5) {
    i27 = 0;
    i28 = (i21 | 0) != 0 ? i21 : i23;
   }
   HEAP32[i28 >> 2] = i13;
   i15 = (i2 | 0) == (i3 | 0) ? i28 : i12;
  }
  i19 = i11 + 1 | 0;
  if ((i19 | 0) == (i5 | 0)) {
   i8 = i15;
   break;
  } else {
   i11 = i19;
   i12 = i15;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0, i17 = 0;
 L1 : do {
  if ((HEAP32[i2 + 20 >> 2] & 4194304 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = HEAP32[H_BASE + 1568 >> 2] | 0;
   i5 = i2 | 0;
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   i4 = i2;
   i8 = i4 + ~(i4 << 15) | 0;
   i4 = (i8 >>> 10 ^ i8) * 9 & -1;
   i8 = i4 >>> 6 ^ i4;
   i4 = i8 + ~(i8 << 11) | 0;
   i8 = i4 >>> 16 ^ i4;
   if ((i7 | 0) == 0) {
    i3 = 0;
    break;
   }
   i4 = i6 & i8;
   i9 = i7 + (i4 << 3) | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i5 | 0)) {
    i11 = i9;
   } else {
    i9 = (i8 >>> 23) + ~i8 | 0;
    i8 = i9 << 12 ^ i9;
    i9 = i8 >>> 7 ^ i8;
    i8 = i9 << 2 ^ i9;
    i9 = i8 >>> 20 ^ i8 | 1;
    i8 = 0;
    i12 = i4;
    i4 = i10;
    while (1) {
     if ((i4 | 0) == 0) {
      i3 = 0;
      break L1;
     }
     i10 = (i8 | 0) == 0 ? i9 : i8;
     i13 = i10 + i12 & i6;
     i14 = i7 + (i13 << 3) | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i5 | 0)) {
      i11 = i14;
      break;
     } else {
      i8 = i10;
      i12 = i13;
      i4 = i15;
     }
    }
   }
   if ((i11 | 0) == 0) {
    i3 = 0;
    break;
   }
   i3 = HEAP32[i11 + 4 >> 2] | 0;
  }
 } while (0);
 i11 = i3 + 20 | 0;
 i4 = i1 | 0;
 i1 = -(HEAP32[i11 >> 2] | 0) | 0;
 HEAP32[i4 >> 2] = i1;
 i12 = i2 + 36 | 0;
 i2 = HEAP32[i12 >> 2] | 0;
 i8 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
 if ((HEAP8[i8 + 32 | 0] & 4) == 0) {
  d16 = +HEAPF32[i8 + 12 >> 2];
 } else {
  d16 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i2) | 0) + 12 >> 2] + +.5;
 }
 i2 = ~~d16;
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) == 1) {
   if ((HEAP8[i3 + 12 | 0] & 1) == 0) {
    HEAP32[i4 >> 2] = i2;
    i17 = i2;
    break;
   } else {
    i8 = i1 - ((HEAP32[i11 >> 2] | 0) + i2) | 0;
    HEAP32[i4 >> 2] = i8;
    i17 = i8;
    break;
   }
  } else {
   i17 = i1;
  }
 } while (0);
 i1 = (HEAP32[(HEAP32[i12 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if (!((i1 | 0) == 3 | (i1 | 0) == 1)) {
  return;
 }
 HEAP32[i4 >> 2] = -i17;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = i1 + 120 | 0;
 do {
  if ((HEAP8[i4] & 1) == 0) {
   i5 = i1 + 32 | 0;
   i6 = i1 + 48 | 0;
   i7 = i1 + 44 | 0;
   if ((HEAP32[i7 >> 2] | 0) == (HEAP32[i1 + 60 >> 2] | 0)) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
     i8 = i7;
     break;
    }
   }
   i9 = i1 + 80 | 0;
   if ((HEAP32[i9 >> 2] | 0) == 10) {
    HEAP32[i9 >> 2] = (HEAP32[i1 + 68 >> 2] | 0) != 0;
   }
   i10 = HEAP32[i1 + 64 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     if ((i10 | 0) == 5) {
      HEAP32[i9 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else if ((i10 | 0) == 2) {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i9 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else {
      if (!((HEAP32[i1 + 68 >> 2] | 0) != 0 & (i2 | 0) == 0)) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      HEAP32[i9 >> 2] = 0;
      break;
     }
    } else {
     if ((i10 | 0) == 2) {
      if (!((HEAP32[i1 + 68 >> 2] | 0) != 0 | (i2 | 0) == 1)) {
       break;
      }
     } else if ((i10 | 0) != 5) {
      if (!((HEAP32[i1 + 68 >> 2] | 0) == 0 & (i2 | 0) == 1)) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
     HEAP32[i9 >> 2] = 1;
    }
   } while (0);
   i9 = i5;
   i10 = i6;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   i8 = i7;
  } else {
   i8 = i1 + 44 | 0;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
 HEAP8[i4] = 1;
 HEAP32[i1 + 72 >> 2] = i3;
 HEAP32[i1 + 68 >> 2] = i3;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = -1;
 HEAP32[i8 >> 2] = 0;
 return;
}
function __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   i9 = 0;
   i10 = 0;
  } else {
   i4 = HEAP32[i8 + 4 >> 2] | 0;
   if ((HEAP32[i8 + 16 >> 2] & 32 | 0) == 0) {
    i9 = HEAP32[i8 + 8 >> 2] | 0;
    i10 = i4;
    break;
   } else {
    i9 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i8) | 0;
    i10 = i4;
    break;
   }
  }
 } while (0);
 i8 = (HEAP32[i5 + 44 >> 2] & 32 | 0) != 0;
 do {
  if ((i7 | 0) == 0) {
   i11 = 1;
   i12 = i8;
  } else {
   if ((i7 & 1 | 0) == 0) {
    i13 = 1;
   } else {
    i13 = (HEAP32[i5 + 40 >> 2] | 0) >>> 30 & 1;
   }
   if ((i7 & 2 | 0) == 0) {
    i11 = i13;
    i12 = i8;
    break;
   }
   i4 = (HEAP32[i5 + 48 >> 2] | 0) >>> 28 & 7;
   i11 = i13;
   i12 = i8 | ((i4 | 0) == 2 | (i4 | 0) == 5);
  }
 } while (0);
 HEAP32[i1 + 4 >> 2] = i10;
 HEAP32[i1 + 8 >> 2] = i10;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = +0;
 i10 = i1 + 24 | 0;
 i8 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 HEAP32[i10 >> 2] = i6 & 3 | (i12 & 1) << 5 | i11 << 4 & 16 | HEAP32[i10 >> 2] & -1024 | i8 << 7 & 128 | i8 << 8 & 256 | 64;
 HEAP32[i1 + 28 >> 2] = 0;
 i8 = i1 + 32 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i1 >> 2] = i9;
 i9 = HEAP32[i3 + 24 >> 2] | 0;
 i1 = i9 + 44 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i9, i3 | 0, 0) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 31](i11, 32) | 0;
  HEAP32[i1 >> 2] = i3;
  i14 = i3;
 } else {
  i14 = i10;
 }
 if ((HEAP32[i14 + 76 >> 2] | 0) == 0) {
  return;
 }
 i14 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i14 + 4 >> 2] = 1;
 HEAP32[i14 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
 HEAP32[i14 + 8 >> 2] = i2;
 HEAP32[i14 + 12 >> 2] = 0;
 HEAP32[i8 >> 2] = i14;
 return;
}
function __ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6;
 i8 = HEAP32[i2 + 36 >> 2] | 0;
 i9 = (HEAP32[i8 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i9 | 0) == 3 | (i9 | 0) == 0) {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 4 | 0;
 } else {
  i10 = (HEAP32[i8 + 4 >> 2] | 0) + 12 | 0;
 }
 i8 = i10;
 i10 = HEAP32[i8 >> 2] | 0;
 i9 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = i10;
 HEAP32[i4 + 4 >> 2] = i9;
 if ((i10 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
  i10 = i5 + 5 | 0;
  i11 = HEAP8[i10] | 0;
  i12 = i10;
 } else {
  i11 = (i9 >>> 8 | 0 << 24) & 255;
  i12 = i5 + 5 | 0;
 }
 if (i11 << 24 >> 24 != 0) {
  i11 = i1;
  i9 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i11 + 4 >> 2] = i9;
  HEAP8[i12] = 0;
  STACKTOP = i3;
  return;
 }
 i9 = HEAP32[(HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 8 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP8[i9 + 176 | 0] & 2) != 0) {
   i11 = __ZNK7WebCore11RenderTable14slowColElementEjPbS1_(i9, HEAP32[i2 + 116 >> 2] & 536870911, 0, 0) | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i4 >> 2] | 0;
   i8 = HEAP32[i4 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = i10;
   HEAP32[i6 + 4 >> 2] = i8;
   if ((i10 & 0 | 0) == 0 & (i8 & 65280 | 0) == 2560) {
    __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
   }
   __ZNK7WebCore15RenderTableCell23logicalWidthFromColumnsEPNS_14RenderTableColENS_6LengthE(i1, i2, i11, i7);
   if ((HEAP8[i7 + 5 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
   }
   if ((HEAP8[i12] | 0) != 10) {
    STACKTOP = i3;
    return;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i5 = i1;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i12] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   i5 = i4 << 2 | 0;
   i6 = i4;
  } else {
   i4 = HEAP32[i1 + 8 >> 2] | 0;
   i7 = HEAP32[HEAP32[i2 >> 2] >> 2] | 0;
   i8 = i7;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   i8 = (i9 >>> 23) + ~i9 | 0;
   i10 = i8 << 12 ^ i8;
   i8 = i10 >>> 7 ^ i10;
   i10 = i8 << 2 ^ i8;
   i8 = i10 >>> 20 ^ i10 | 1;
   i10 = i9;
   i9 = 0;
   while (1) {
    i11 = i10 & i4;
    i12 = i3 + (i11 << 2) | 0;
    i13 = HEAP32[i12 >> 2] | 0;
    i14 = i13;
    if ((i14 | 0) == 0) {
     i15 = 5;
     break;
    } else if ((i14 | 0) != (-1 | 0)) {
     if ((HEAP32[i13 >> 2] | 0) == (i7 | 0)) {
      i15 = 8;
      break;
     }
    }
    i13 = (i9 | 0) == 0 ? i8 : i9;
    i10 = i13 + i11 | 0;
    i9 = i13;
   }
   if ((i15 | 0) == 5) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = i3 + (i9 << 2) | 0;
    i6 = i9;
    break;
   } else if ((i15 | 0) == 8) {
    i9 = HEAP32[i1 + 4 >> 2] | 0;
    i5 = (i12 | 0) == 0 ? i3 + (i9 << 2) | 0 : i12;
    i6 = i9;
    break;
   }
  }
 } while (0);
 if ((i5 | 0) == (i3 + (i6 << 2) | 0)) {
  return;
 }
 HEAP32[i5 >> 2] = -1;
 i5 = i1 + 16 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 i5 = i1 + 12 | 0;
 i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 HEAP32[i5 >> 2] = i6;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 if (!((i6 * 6 & -1 | 0) < (i5 | 0) & (i5 | 0) > 8)) {
  return;
 }
 __ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_(i1, (i5 | 0) / 2 & -1, 0) | 0;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = i1 + 120 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i4 = i1 + 32 | 0;
   i5 = i1 + 48 | 0;
   i6 = i1 + 44 | 0;
   if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i1 + 60 >> 2] | 0)) {
    if ((HEAP32[i1 + 36 >> 2] | 0) == (HEAP32[i1 + 52 >> 2] | 0)) {
     i7 = i6;
     break;
    }
   }
   i8 = i1 + 80 | 0;
   if ((HEAP32[i8 >> 2] | 0) == 10) {
    HEAP32[i8 >> 2] = (HEAP32[i1 + 68 >> 2] | 0) != 0;
   }
   i9 = HEAP32[i1 + 64 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     if ((i9 | 0) == 5) {
      HEAP32[i8 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else if ((i9 | 0) == 2) {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i8 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      break;
     } else {
      if ((HEAP32[i1 + 68 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
      HEAP32[i8 >> 2] = 0;
      break;
     }
    } else {
     if (!((i9 | 0) == 5 | (i9 | 0) == 2)) {
      if ((HEAP32[i1 + 68 >> 2] | 0) != 0) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
     HEAP32[i8 >> 2] = 1;
    }
   } while (0);
   i8 = i4;
   i9 = i5;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
   i7 = i6;
  } else {
   i7 = i1 + 44 | 0;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv(i1);
 HEAP8[i3] = 1;
 HEAP32[i1 + 72 >> 2] = i2;
 HEAP32[i1 + 68 >> 2] = i2;
 HEAP32[i1 + 32 >> 2] = 0;
 HEAP32[i1 + 36 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = -1;
 HEAP32[i7 >> 2] = 0;
 return;
}
function __ZN7WebCore11RenderBlock25paintContinuationOutlinesERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i7;
 if (HEAP8[H_BASE + 1504 | 0] | 0) {
  i9 = HEAP32[H_BASE + 1512 >> 2] | 0;
 } else {
  i10 = __ZN3WTF10fastMallocEj(20) | 0;
  i11 = i10;
  _memset(i10 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1512 >> 2] = i11;
  HEAP8[H_BASE + 1504 | 0] = 1;
  i9 = i11;
 }
 if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i6 >> 2] = i1;
 __ZN3WTF7HashMapIPN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS7_EEEEEENS8_IS3_EENS_10HashTraitsIS3_EENSD_ISB_EEE4takeERKS3_(i5, i9, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i3;
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i7 + 4 >> 2] = i11;
   i11 = HEAP32[i6 + 20 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
   i9 = i7;
   i10 = i8 + 4 | 0;
   i12 = i11;
   while (1) {
    i11 = HEAP32[i12 >> 2] | 0;
    i13 = __ZNK7WebCore12RenderObject15containingBlockEv(i11 | 0) | 0;
    if ((i13 | 0) != 0 & (i13 | 0) != (i1 | 0)) {
     i14 = i13;
     while (1) {
      i13 = i14 + 44 | 0;
      i15 = HEAP32[i13 + 4 >> 2] | 0;
      HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + (HEAP32[i13 >> 2] | 0);
      HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i15;
      i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i14 | 0) | 0;
      if (!((i14 | 0) != 0 & (i14 | 0) != (i1 | 0))) {
       break;
      }
     }
    }
    __ZN7WebCore12RenderInline12paintOutlineERNS_9PaintInfoERKNS_11LayoutPointE(i11, i2, i8);
    i12 = HEAP32[i12 + 8 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 + 16 | 0;
 i5 = i3 + 32 | 0;
 i6 = i1 | 0;
 __ZN7WebCore9RenderBox13clearOverflowEv(i6);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1052 >> 2] & 63](i1);
 __ZN7WebCore11RenderBlock32addOverflowFromPositionedObjectsEv(i1);
 i7 = i1 | 0;
 i8 = i1 + 20 | 0;
 do {
  if ((HEAP32[i8 >> 2] & 65536 | 0) != 0) {
   i9 = i1 | 0;
   i10 = i1;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 511](i9) | 0;
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 511](i9) | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i3 | 0, i6);
   __ZNK7WebCore9RenderBox12clientHeightEv(i3 + 8 | 0, i6);
   _memset(i4 | 0, 0, 16) | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[i8 >> 2] & 8192 | 0) == 0) {
    i10 = i9 - i11 | 0;
    HEAP32[i4 >> 2] = i11;
    HEAP32[i4 + 4 >> 2] = i12;
    HEAP32[i4 + 8 >> 2] = (i10 | 0) > 0 ? i10 : 0;
    HEAP32[i4 + 12 >> 2] = 1;
   } else {
    i10 = i9 - i12 | 0;
    HEAP32[i4 >> 2] = i11;
    HEAP32[i4 + 4 >> 2] = i12;
    HEAP32[i4 + 8 >> 2] = 1;
    HEAP32[i4 + 12 >> 2] = (i10 | 0) > 0 ? i10 : 0;
   }
   __ZN7WebCore9RenderBox17addLayoutOverflowERKNS_10LayoutRectE(i6, i4);
   i10 = HEAP32[i1 + 88 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   HEAP32[i10 + 36 >> 2] = i9;
  }
 } while (0);
 __ZN7WebCore9RenderBox23addVisualEffectOverflowEv(i6);
 __ZN7WebCore11RenderBlock26addVisualOverflowFromThemeEv(i1);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 252 >> 2] & 511](i7) | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = HEAP32[i2 >> 2];
 __ZN7WebCore21RenderNamedFlowThread29computeOversetStateForRegionsENS_10LayoutUnitE(i1, i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock25collapseAnonymousBoxChildEPS0_S1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 i6 = i1 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 & 1 | 0) == 0) {
   HEAP32[i6 >> 2] = i7 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i5, 1, 0);
   if ((HEAP32[i6 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i5);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i5, 1, 1);
 i5 = i2 | 0;
 i7 = i2 + 20 | 0;
 HEAP32[i6 >> 2] = HEAP32[i6 >> 2] & -2097153 | HEAP32[i7 >> 2] & 2097152;
 i6 = HEAP32[i2 + 16 >> 2] | 0;
 if ((HEAP32[i7 >> 2] & 805306368 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i5) | 0;
 }
 __ZN7WebCore33CurrentRenderFlowThreadMaintainerC1EPNS_16RenderFlowThreadE(i4, i8);
 __ZN7WebCore13RenderElement19removeChildInternalERNS_12RenderObjectENS0_18NotifyChildrenTypeE(i1 | 0, i5, (HEAP32[i7 >> 2] | 0) >>> 15 & 1 ^ 1);
 __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i2 | 0, i1 | 0, HEAP32[i2 + 28 >> 2] | 0, 0, i6, (HEAP32[i7 >> 2] & 32768 | 0) != 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 1016 >> 2] & 63](i2);
 if ((i8 | 0) == 0) {
  __ZN7WebCore12RenderObject7destroyEv(i5);
  __ZN7WebCore33CurrentRenderFlowThreadMaintainerD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 252 >> 2] & 511](i8 | 0) | 0)) {
  __ZN7WebCore12RenderObject7destroyEv(i5);
  __ZN7WebCore33CurrentRenderFlowThreadMaintainerD1Ev(i4);
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore21RenderNamedFlowThread19removeFlowChildInfoEPNS_12RenderObjectE(i8, i5);
 __ZN7WebCore12RenderObject7destroyEv(i5);
 __ZN7WebCore33CurrentRenderFlowThreadMaintainerD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock32addOverflowFromPositionedObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i4 + 8 >> 2] | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i4 = i1;
 i7 = i4 + ~(i4 << 15) | 0;
 i4 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i4 >>> 6 ^ i4;
 i4 = i7 + ~(i7 << 11) | 0;
 i7 = i4 >>> 16 ^ i4;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = i5 & i7;
 i8 = i6 + (i4 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L7 : do {
  if ((i9 | 0) == (i1 | 0)) {
   i10 = i8;
  } else {
   i11 = (i7 >>> 23) + ~i7 | 0;
   i12 = i11 << 12 ^ i11;
   i11 = i12 >>> 7 ^ i12;
   i12 = i11 << 2 ^ i11;
   i11 = i12 >>> 20 ^ i12 | 1;
   i12 = 0;
   i13 = i4;
   i14 = i9;
   while (1) {
    if ((i14 | 0) == 0) {
     break;
    }
    i15 = (i12 | 0) == 0 ? i11 : i12;
    i16 = i15 + i13 & i5;
    i17 = i6 + (i16 << 3) | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    if ((i18 | 0) == (i1 | 0)) {
     i10 = i17;
     break L7;
    } else {
     i12 = i15;
     i13 = i16;
     i14 = i18;
    }
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i10 + 4 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i10 = HEAP32[i6 + 20 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i1 = i3 | 0;
 i5 = i3 + 4 | 0;
 i9 = i10;
 while (1) {
  i10 = HEAP32[i9 >> 2] | 0;
  if ((HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) != 25165824) {
   i4 = HEAP32[i10 + 48 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i10 + 44 >> 2];
   HEAP32[i5 >> 2] = i4;
   __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i6, i10, i3);
  }
  i9 = HEAP32[i9 + 8 >> 2] | 0;
  if ((i9 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderBlock30estimateRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 48 | 0;
 i9 = i3 + 56 | 0;
 i10 = i1 + 20 | 0;
 if ((HEAP32[i10 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i11 + 128 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 511](i2 | 0) | 0) {
   if ((HEAP32[i2 + 20 >> 2] & 25165824 | 0) == 16777216) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if (__ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i2) | 0) {
  __ZNK7WebCore11RenderBlock29computeRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i2);
  STACKTOP = i3;
  return;
 }
 _memset(i4 | 0, 0, 24) | 0;
 i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 884 >> 2] | 0;
 HEAP32[i5 >> 2] = 1073741823;
 if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
  HEAP32[i6 >> 2] = HEAP32[i2 + 44 >> 2];
 } else {
  HEAP32[i6 >> 2] = HEAP32[i2 + 48 >> 2];
 }
 FUNCTION_TABLE_viiii[i12 & 31](i2, i5, i6, i4);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i7, i2);
 i6 = i1 | 0;
 i1 = i7 | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 i7 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i11, i6, i8, 1, 0) | 0;
 HEAP32[i9 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i1 >> 2] | 0);
 __ZN7WebCore16RenderFlowThread20setRegionRangeForBoxEPKNS_9RenderBoxEPNS_12RenderRegionES5_(i11, i2, i7, __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i11, i6, i9, 1, 0) | 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashSetIPN7WebCore11RenderBlockENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 << 2 | 0;
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
  i10 = i3 + (i2 << 2) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  L4 : do {
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
      break L4;
     }
     i17 = (i14 | 0) == 0 ? i13 : i14;
     i18 = i17 + i15 & i4;
     i19 = i3 + (i18 << 2) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 << 2) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 << 2) | 0)) {
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
 __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore11RenderBlock32logicalLeftOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i16 = i2 | 0;
 i17 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i3 = FUNCTION_TABLE_ii[HEAP32[i17 + 744 >> 2] & 511](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i12, i16);
  i18 = (HEAP32[i12 >> 2] | 0) + i3 | 0;
 } else {
  i3 = FUNCTION_TABLE_ii[HEAP32[i17 + 736 >> 2] & 511](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i13, i16);
  i18 = (HEAP32[i13 >> 2] | 0) + i3 | 0;
 }
 if ((i5 | 0) == 0) {
  i19 = i18;
 } else {
  __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i14, i2 | 0, i5, 0);
  if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
   i20 = HEAP32[i14 + 4 >> 2] | 0;
  } else {
   i20 = HEAP32[i14 >> 2] | 0;
  }
  i19 = i20 + i18 | 0;
 }
 i18 = HEAP32[i6 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1072 >> 2] | 0;
 HEAP32[i9 >> 2] = i15;
 HEAP32[i10 >> 2] = i19;
 HEAP32[i11 >> 2] = i18;
 FUNCTION_TABLE_viiiii[i6 & 31](i8, i2, i9, i10, i11);
 __ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb(i1, i2, i8, i4);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 do {
  if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0)) {
   i4 = i1 + 28 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i5 + 20 >> 2] | 0;
   if ((i6 & 768 | 0) == 256) {
    i7 = HEAP32[(HEAP32[i5 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i5 + 36 >> 2] | 0;
   }
   i8 = (HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   do {
    if ((HEAP8[i8] & 3) == 3) {
     i9 = (HEAP32[i8 >> 2] | 0) >>> 11 & 3;
     if ((i9 | 0) == 2) {
      i10 = i5;
      i11 = i6;
      i12 = 11;
      break;
     }
     i13 = (HEAP32[i7 + 44 >> 2] | 0) >>> 13 & 3;
     if (((i13 | 0) == 0 | (i13 | 0) == 3) ^ (i9 | 0) == 0) {
      i12 = 9;
     } else {
      i10 = i5;
      i11 = i6;
      i12 = 11;
     }
    } else {
     i12 = 9;
    }
   } while (0);
   do {
    if ((i12 | 0) == 9) {
     if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i5) | 0) {
      break;
     }
     i6 = HEAP32[i4 >> 2] | 0;
     i10 = i6;
     i11 = HEAP32[i6 + 20 >> 2] | 0;
     i12 = 11;
    }
   } while (0);
   if ((i12 | 0) == 11) {
    if ((i11 & 768 | 0) == 256) {
     i14 = HEAP32[(HEAP32[i10 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i14 = HEAP32[i10 + 36 >> 2] | 0;
    }
    if ((HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
     break;
    }
    if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i10) | 0)) {
     break;
    }
   }
   __ZN7WebCore11RenderBlock31addChildToAnonymousColumnBlocksEPNS_12RenderObjectES2_(i1, i2, i3);
   return;
  }
 } while (0);
 __ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_(i1, i2, i3);
 return;
}
function __ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4takeERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 __ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4findERKS4_(i5, i2, i3);
 i3 = i2 | 0;
 i7 = i2 + 4 | 0;
 i8 = HEAP32[i5 >> 2] | 0;
 if ((i8 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i9 = i6 | 0;
 i10 = i8 + 4 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 >> 2] = i8;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = i2 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i7 >> 2] << 3) | 0)) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i8 + 4 | 0);
   HEAP32[i8 >> 2] = -1;
   i10 = i2 + 16 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i10 = i2 + 12 | 0;
   i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   HEAP32[i10 >> 2] = i11;
   i10 = HEAP32[i7 >> 2] | 0;
   if (!((i11 * 6 & -1 | 0) < (i10 | 0) & (i10 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i5, (i10 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 i5 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i1 >> 2] = i5;
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i6);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock20setPageLogicalOffsetENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = HEAP32[H_BASE + 1576 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = 10;
  } else {
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = i1;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   if ((i7 | 0) == 0) {
    i5 = 10;
    break;
   }
   i8 = i6 & i9;
   i10 = i7 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i9 = i10 << 12 ^ i10;
    i10 = i9 >>> 7 ^ i9;
    i9 = i10 << 2 ^ i10;
    i10 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i13 = i8;
    i8 = i11;
    while (1) {
     if ((i8 | 0) == 0) {
      i5 = 10;
      break L1;
     }
     i11 = (i9 | 0) == 0 ? i10 : i9;
     i14 = i11 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i1 | 0)) {
      i12 = i15;
      break;
     } else {
      i9 = i11;
      i13 = i14;
      i8 = i16;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i5 = 10;
    break;
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = 10;
    break;
   }
   i17 = i8;
   i18 = i2 | 0;
  }
 } while (0);
 do {
  if ((i5 | 0) == 10) {
   i12 = i2 | 0;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    STACKTOP = i3;
    return;
   } else {
    i17 = __ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0;
    i18 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i17 + 4 >> 2] = HEAP32[i18 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = HEAP32[H_BASE + 1576 >> 2] | 0;
 L1 : do {
  if ((i4 | 0) == 0) {
   i5 = 10;
  } else {
   i6 = HEAP32[i4 + 8 >> 2] | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   i8 = i1;
   i9 = i8 + ~(i8 << 15) | 0;
   i8 = (i9 >>> 10 ^ i9) * 9 & -1;
   i9 = i8 >>> 6 ^ i8;
   i8 = i9 + ~(i9 << 11) | 0;
   i9 = i8 >>> 16 ^ i8;
   if ((i7 | 0) == 0) {
    i5 = 10;
    break;
   }
   i8 = i6 & i9;
   i10 = i7 + (i8 << 3) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if ((i11 | 0) == (i1 | 0)) {
    i12 = i10;
   } else {
    i10 = (i9 >>> 23) + ~i9 | 0;
    i9 = i10 << 12 ^ i10;
    i10 = i9 >>> 7 ^ i9;
    i9 = i10 << 2 ^ i10;
    i10 = i9 >>> 20 ^ i9 | 1;
    i9 = 0;
    i13 = i8;
    i8 = i11;
    while (1) {
     if ((i8 | 0) == 0) {
      i5 = 10;
      break L1;
     }
     i11 = (i9 | 0) == 0 ? i10 : i9;
     i14 = i11 + i13 & i6;
     i15 = i7 + (i14 << 3) | 0;
     i16 = HEAP32[i15 >> 2] | 0;
     if ((i16 | 0) == (i1 | 0)) {
      i12 = i15;
      break;
     } else {
      i9 = i11;
      i13 = i14;
      i8 = i16;
     }
    }
   }
   if ((i12 | 0) == 0) {
    i5 = 10;
    break;
   }
   i8 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i5 = 10;
    break;
   }
   i17 = i8;
   i18 = i2 | 0;
  }
 } while (0);
 do {
  if ((i5 | 0) == 10) {
   i12 = i2 | 0;
   if ((HEAP32[i12 >> 2] | 0) == 0) {
    STACKTOP = i3;
    return;
   } else {
    i17 = __ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0;
    i18 = i12;
    break;
   }
  }
 } while (0);
 HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock22createReplacementRunInERNS_20RenderBoxModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i1 | 0;
 i4 = i1 + 8 | 0;
 if ((HEAP32[i2 + 24 >> 2] & 32 | 0) == 0) {
  i5 = __ZN3WTF10fastMallocEj(116) | 0;
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] | 0;
  } else {
   i6 = 0;
  }
  i7 = HEAP32[i2 + 36 >> 2] | 0;
  HEAP32[i3 >> 2] = i7;
  i8 = i7 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  __ZN7WebCore15RenderBlockFlowC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i5, i6, i3);
  i9 = i5;
 } else {
  i5 = __ZN3WTF10fastMallocEj(52) | 0;
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i10 = HEAP32[i2 + 4 >> 2] | 0;
  } else {
   i10 = 0;
  }
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  HEAP32[i4 >> 2] = i3;
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  __ZN7WebCore12RenderInlineC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEE(i5, i10, i4);
  i9 = i5;
 }
 i5 = i9;
 if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
  i11 = HEAP32[i2 + 4 >> 2] | 0;
 } else {
  i11 = 0;
 }
 i4 = i9;
 if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
  HEAP32[i11 + 32 >> 2] = i4;
  i12 = i9;
  __ZN7WebCore13RenderElement15initializeStyleEv(i12);
  i13 = i2 + 28 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i2, i5, i14, 0, 0, 1);
  STACKTOP = i1;
  return i5 | 0;
 } else {
  HEAP32[HEAP32[i11 + 32 >> 2] >> 2] = i4;
  i12 = i9;
  __ZN7WebCore13RenderElement15initializeStyleEv(i12);
  i13 = i2 + 28 | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  __ZN7WebCore20RenderBoxModelObject14moveChildrenToEPS0_PNS_12RenderObjectES3_S3_b(i2, i5, i14, 0, 0, 1);
  STACKTOP = i1;
  return i5 | 0;
 }
 return 0;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i19 + 4 | 0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN7WebCore11RenderBlock33clearPercentHeightDescendantsFromERNS_9RenderBoxE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 | 0;
 i1 = i2;
 while (1) {
  L6 : do {
   if ((HEAP32[i1 + 20 >> 2] & 512 | 0) != 0) {
    i2 = i1;
    i4 = HEAP32[H_BASE + 1536 >> 2] | 0;
    i5 = HEAP32[i4 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i6 = HEAP32[i4 + 8 >> 2] | 0;
    i4 = i1;
    i7 = i4 + ~(i4 << 15) | 0;
    i4 = (i7 >>> 10 ^ i7) * 9 & -1;
    i7 = i4 >>> 6 ^ i4;
    i4 = i7 + ~(i7 << 11) | 0;
    i7 = i4 >>> 16 ^ i4;
    i4 = i6 & i7;
    i8 = i5 + (i4 << 3) | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    if ((i9 | 0) == (i2 | 0)) {
     i10 = i8;
    } else {
     i8 = (i7 >>> 23) + ~i7 | 0;
     i7 = i8 << 12 ^ i8;
     i8 = i7 >>> 7 ^ i7;
     i7 = i8 << 2 ^ i8;
     i8 = i7 >>> 20 ^ i7 | 1;
     i7 = 0;
     i11 = i4;
     i4 = i9;
     while (1) {
      if ((i4 | 0) == 0) {
       break L6;
      }
      i9 = (i7 | 0) == 0 ? i8 : i7;
      i12 = i9 + i11 & i6;
      i13 = i5 + (i12 << 3) | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      if ((i14 | 0) == (i2 | 0)) {
       i10 = i13;
       break;
      } else {
       i7 = i9;
       i11 = i12;
       i4 = i14;
      }
     }
    }
    if ((i10 | 0) == 0) {
     break;
    }
    __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i2, H_BASE + 1520, H_BASE + 1536);
   }
  } while (0);
  i1 = __ZNK7WebCore12RenderObject14nextInPreOrderEPKS0_(i1, i3) | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 if ((HEAP32[i2 + 28 >> 2] | 0) != 0) {
  __ZN7WebCore9RenderBox14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE(i1, i2 | 0, i3, i4, i5);
  STACKTOP = i6;
  return;
 }
 i4 = i2 | 0;
 i3 = i2 + 52 | 0;
 HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
 i12 = i2 + 36 | 0;
 i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
 i14 = HEAP8[i13 + 77 | 0] | 0;
 if ((i14 << 24 >> 24 | 0) == 10 | (i14 << 24 >> 24 | 0) == 2) {
  i14 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
  if ((HEAP32[i14 + 20 >> 2] & 4194304 | 0) == 0) {
   __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i8, i14 | 0);
  } else {
   __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i8, i14);
  }
  i15 = HEAP32[i8 >> 2] | 0;
  i16 = HEAP32[(HEAP32[i12 >> 2] | 0) + 24 >> 2] | 0;
 } else {
  i15 = 0;
  i16 = i13;
 }
 HEAP32[i7 >> 2] = i15;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i11, i16 + 72 | 0, i7, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 __ZN7WebCore20RenderBoxModelObject29localCaretRectForEmptyElementENS_10LayoutUnitES1_(i9, i4, i10, i11);
 if ((i5 | 0) != 0) {
  HEAP32[i5 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i9 >> 2] | 0) - (HEAP32[i9 + 8 >> 2] | 0);
 }
 i3 = i1;
 i1 = i9;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i6;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E8reinsertEOSE_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 i6 = i1;
 i7 = i6 + ~(i6 << 15) | 0;
 i6 = (i7 >>> 10 ^ i7) * 9 & -1;
 i7 = i6 >>> 6 ^ i6;
 i6 = i7 + ~(i7 << 11) | 0;
 i7 = i6 >>> 16 ^ i6;
 i6 = i7 & i5;
 i8 = i4 + (i6 << 3) | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 L1 : do {
  if ((i9 | 0) == 0) {
   i10 = 0;
   i11 = i8;
   i12 = 3;
  } else {
   i13 = (i7 >>> 23) + ~i7 | 0;
   i14 = i13 << 12 ^ i13;
   i13 = i14 >>> 7 ^ i14;
   i14 = i13 << 2 ^ i13;
   i13 = i14 >>> 20 ^ i14 | 1;
   i14 = 0;
   i15 = 0;
   i16 = i6;
   i17 = i8;
   i18 = i9;
   while (1) {
    if ((i18 | 0) == (i1 | 0)) {
     i19 = i17;
     break L1;
    }
    i20 = (i18 | 0) == -1 ? i17 : i14;
    i21 = (i15 | 0) == 0 ? i13 : i15;
    i22 = i21 + i16 & i5;
    i23 = i4 + (i22 << 3) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i10 = i20;
     i11 = i23;
     i12 = 3;
     break;
    } else {
     i14 = i20;
     i15 = i21;
     i16 = i22;
     i17 = i23;
     i18 = i24;
    }
   }
  }
 } while (0);
 if ((i12 | 0) == 3) {
  i19 = (i10 | 0) != 0 ? i10 : i11;
 }
 __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i19 + 4 | 0);
 HEAP32[i19 >> 2] = HEAP32[i3 >> 2];
 i3 = i2 + 4 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i19 + 4 >> 2] = i2;
 return i19 | 0;
}
function __ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((HEAP8[i1 + 24 | 0] | 0) < 0) {
  i4 = HEAP32[i1 + 36 >> 2] | 0;
 } else {
  i4 = 0;
 }
 i5 = i3 + 48 | 0;
 switch (HEAP32[i5 >> 2] & 31 | 0) {
 case 0:
 case 19:
 case 17:
 case 7:
 case 5:
 case 21:
  {
   i6 = 2048;
   break;
  }
 default:
  {
   i6 = 0;
  }
 }
 i7 = i1 + 20 | 0;
 HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -2049 | i6;
 do {
  if ((i4 | 0) != 0) {
   i6 = HEAP32[i1 + 8 >> 2] | 0;
   if (!((i6 | 0) != 0 & (i2 | 0) == 8)) {
    break;
   }
   i7 = (HEAP32[i4 + 48 >> 2] | 0) >>> 22 & 7;
   i8 = (HEAP32[i5 >> 2] | 0) >>> 22 & 7;
   if ((i7 | 0) == (i8 | 0)) {
    break;
   }
   if ((i8 | 0) == 0) {
    __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i1, 0, 0);
    break;
   }
   if ((i7 | 0) == 0) {
    i9 = i6;
   } else {
    break;
   }
   while (1) {
    i6 = HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 48 >> 2] & 29360128;
    i7 = HEAP32[i9 + 20 >> 2] | 0;
    if ((i6 | 0) != 0) {
     if ((i7 & 3072 | 0) != 1024) {
      i10 = i9;
      break;
     }
    }
    i11 = i9 | 0;
    if ((i7 & 768 | 0) == 768) {
     i10 = i9;
     break;
    }
    if ((i6 | 0) == 4194304) {
     if ((i7 & 3072 | 0) == 1024) {
      i12 = 16;
      break;
     }
    }
    i9 = HEAP32[i9 + 8 >> 2] | 0;
   }
   if ((i12 | 0) == 16) {
    i10 = __ZNK7WebCore12RenderObject15containingBlockEv(i11) | 0;
   }
   if ((HEAP32[i10 + 24 >> 2] & 16 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE(i10, i1, 0);
  }
 } while (0);
 __ZN7WebCore9RenderBox15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE(i1 | 0, i2, i3);
 return;
}
function __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E6rehashEiPSD_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  if ((HEAP32[i7 + (i13 << 3) >> 2] | 0) != -1) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i7 + (i13 << 3) + 4 | 0);
  }
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
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
  i6 = HEAP32[i2 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i12 = i11;
  } else {
   i6 = __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E8reinsertEOSE_(i1, i2) | 0;
   i12 = (i2 | 0) == (i3 | 0) ? i6 : i11;
  }
  i6 = i10 + 1 | 0;
  if ((i6 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i6;
   i11 = i12;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i5 | 0) > 0) {
  i13 = 0;
 } else {
  i8 = i12;
  i9 = i7;
  __ZN3WTF8fastFreeEPv(i9);
  return i8 | 0;
 }
 while (1) {
  if ((HEAP32[i7 + (i13 << 3) >> 2] | 0) != -1) {
   __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i7 + (i13 << 3) + 4 | 0);
  }
  i1 = i13 + 1 | 0;
  if ((i1 | 0) < (i5 | 0)) {
   i13 = i1;
  } else {
   i8 = i12;
   break;
  }
 }
 i9 = i7;
 __ZN3WTF8fastFreeEPv(i9);
 return i8 | 0;
}
function __ZNK7WebCore11RenderBlock25logicalRightOffsetForLineENS_10LayoutUnitEbS1_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i7 >> 2];
 i7 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 805306368 | 0) == 0) {
   i15 = 0;
  } else {
   i3 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i2 | 0) | 0;
   if ((i3 | 0) == 0) {
    i15 = 0;
    break;
   }
   if ((HEAP8[i3 + 292 | 0] & 1) != 0) {
    i15 = 0;
    break;
   }
   if ((HEAP32[i3 + 128 >> 2] | 0) == 0) {
    i15 = 0;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i12, i2);
   HEAP32[i11 >> 2] = (HEAP32[i12 >> 2] | 0) + i14;
   i15 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i3, i2 | 0, i11, 1, 0) | 0;
  }
 } while (0);
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i13, i2, i15);
 i15 = HEAP32[i5 >> 2] | 0;
 i5 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i8 >> 2] = i14;
 HEAP32[i9 >> 2] = i5;
 HEAP32[i10 >> 2] = i15;
 FUNCTION_TABLE_viiiii[i13 & 31](i7, i2, i8, i9, i10);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i1, i2, i7, i4);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderBlock6layoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 __ZN7WebCore23OverflowEventDispatcherC2EPKNS_11RenderBlockE(i4, i1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1028 >> 2] & 63](i1);
 i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + 1020 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 FUNCTION_TABLE_viii[i6 & 63](i1, 0, i5);
 i5 = i1 | 0;
 L1 : do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 944 >> 2] & 511](i5) | 0) {
   i6 = i1 + 88 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 0 | (HEAP32[H_BASE + 1560 >> 2] | 0) != 0) {
    break;
   }
   i7 = i3 | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i3, i5);
   i8 = i1 + 52 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i11 = HEAP32[i7 + 4 >> 2] | 0;
   i7 = 1;
   do {
    if ((i8 | 0) == 0 & (i11 >>> 0 < i7 >>> 0 | i11 >>> 0 == i7 >>> 0 & i8 >>> 0 < 0 >>> 0)) {
     i12 = i3 + 8 | 0;
     if ((HEAP32[i12 >> 2] | 0) != (i9 | 0)) {
      break;
     }
     if ((HEAP32[i12 + 4 >> 2] | 0) != (i10 | 0)) {
      break;
     }
     __ZN7WebCore9RenderBox13clearOverflowEv(i5);
     break L1;
    }
   } while (0);
   i8 = HEAP32[i6 >> 2] | 0;
   i7 = i8 + 4 | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i7 = i8 + 12 | 0;
   HEAP32[i7 >> 2] = i9;
   HEAP32[i7 + 4 >> 2] = i10;
  }
 } while (0);
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (i1 >>> 0 <= 1073741823 >>> 0) {
  __ZN7WebCore23OverflowEventDispatcherD2Ev(i4);
  STACKTOP = i2;
  return;
 }
 HEAP32[i5 >> 2] = i1 & 1073741823 | 1073741824;
 __ZN7WebCore23OverflowEventDispatcherD2Ev(i4);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock27moveRunInToOriginalPositionERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i4 & 768 | 0) == 256) {
  return;
 }
 i5 = i2 + 24 | 0;
 if ((HEAP32[i5 >> 2] & 4 | 0) == 0) {
  return;
 }
 do {
  if ((i4 & 128 | 0) == 0) {
   i6 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 32 | 0;
   if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
    i8 = i7 | 0;
   } else {
    i8 = HEAP32[i7 >> 2] | 0;
   }
   if ((HEAP32[i8 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   return;
  }
 } while (0);
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 432 >> 2] & 511](i2) | 0) != 0) {
  return;
 }
 i8 = __ZN7WebCore11RenderBlock22createReplacementRunInERNS_20RenderBoxModelObjectE(0, i2) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 & 16 | 0) == 0) {
   if ((i4 & 4 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderInline11deleteLinesEv(i2);
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 1016 >> 2] & 63](i2);
  }
 } while (0);
 __ZN7WebCore12RenderObject7destroyEv(i2);
 i2 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 628 >> 2] & 63](i2, i8 | 0, i1 | 0);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = i1 | 0;
 i8 = i1 + 20 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i1 & 1 | 0) == 0) {
   HEAP32[i8 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
   if ((HEAP32[i8 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
  }
 } while (0);
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3, 1, 1);
 return;
}
function __ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1048576 | 0) == 0) {
  return;
 }
 if ((i4 & 2097152 | 0) != 0) {
  do {
   if ((i4 & 1 | 0) == 0) {
    HEAP32[i3 >> 2] = i4 | 1;
    __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i2, 1, 0);
    if ((HEAP32[i3 >> 2] & 32768 | 0) == 0) {
     break;
    }
    __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i2);
   }
  } while (0);
  i2 = i1 + 92 | 0;
  i3 = HEAP32[i2 >> 2] | 0;
  if ((i3 & -1073741824 | 0) == -1073741824) {
   return;
  }
  HEAP32[i2 >> 2] = i3 & 1073741823;
  return;
 }
 i3 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i5 = i3;
 }
 while (1) {
  if ((HEAP32[i5 + 20 >> 2] & 768 | 0) != 256) {
   if ((HEAP32[i5 + 24 >> 2] & 16 | 0) != 0) {
    break;
   }
  }
  i3 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i6 = 22;
   break;
  } else {
   i5 = i3;
  }
 }
 if ((i6 | 0) == 22) {
  return;
 }
 if ((i5 | 0) == 0) {
  return;
 } else {
  i7 = i5;
 }
 L27 : while (1) {
  __ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv(i7);
  i5 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = 26;
   break;
  } else {
   i8 = i5;
  }
  while (1) {
   if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
    if ((HEAP32[i8 + 24 >> 2] & 16 | 0) != 0) {
     break;
    }
   }
   i5 = HEAP32[i8 + 16 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i6 = 25;
    break L27;
   } else {
    i8 = i5;
   }
  }
  if ((i8 | 0) == 0) {
   i6 = 23;
   break;
  } else {
   i7 = i8;
  }
 }
 if ((i6 | 0) == 25) {
  return;
 } else if ((i6 | 0) == 26) {
  return;
 } else if ((i6 | 0) == 23) {
  return;
 }
}
function __ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
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
 if (((HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 32 >> 2] | 0) >>> 4 & 1 | 0) == (i2 | 0)) {
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
 i8 = i11 + 68 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 + 32 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -17 | i2 << 4 & 16;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 40 | 0;
 i14 = i7 + 48 | 0;
 i15 = i7 + 56 | 0;
 i16 = HEAP32[i2 + 36 >> 2] | 0;
 if ((HEAP32[i16 + 40 >> 2] & 1073741824 | 0) != 0) {
  HEAP32[i13 >> 2] = HEAP32[i3 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i6 >> 2];
  __ZNK7WebCore11RenderBlock32logicalLeftOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_(i1, i2, i13, i4, i5, i14);
  STACKTOP = i7;
  return;
 }
 i14 = (HEAP32[i16 + 44 >> 2] | 0) >>> 13 & 3;
 if ((i14 | 0) == 3 | (i14 | 0) == 0) {
  i17 = i2 + 52 | 0;
 } else {
  i17 = i2 + 56 | 0;
 }
 i14 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i12, i2, i5);
 i5 = HEAP32[i12 >> 2] | 0;
 i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 1068 >> 2] | 0;
 HEAP32[i9 >> 2] = i17;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i11 >> 2] = i3;
 FUNCTION_TABLE_viiiii[i12 & 31](i8, i2, i9, i10, i11);
 __ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb(i15, i2, i8, i4);
 HEAP32[i1 >> 2] = i14 - (HEAP32[i15 >> 2] | 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = i1 + 180 | 0;
 HEAP32[i5 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = i3;
 i3 = i1 + 188 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != (HEAP32[i1 + 184 >> 2] | 0)) {
  i1 = (HEAP32[i7 >> 2] | 0) + (i2 << 3) | 0;
  i8 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i1 + 4 >> 2] = i8;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i9 + 1 | 0;
  HEAP32[i3 >> 2] = i10;
  STACKTOP = i4;
  return;
 }
 i8 = i2 + 1 | 0;
 i1 = i7 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 do {
  if (i11 >>> 0 > i6 >>> 0) {
   i12 = 5;
  } else {
   if ((i11 + (i2 << 3) | 0) >>> 0 <= i6 >>> 0) {
    i12 = 5;
    break;
   }
   i13 = i8 + (i2 >>> 2) | 0;
   i14 = i13 >>> 0 > 16 >>> 0 ? i13 : 16;
   __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i14 >>> 0 > i8 >>> 0 ? i14 : i8);
   i14 = HEAP32[i1 >> 2] | 0;
   i15 = i14 + (i5 - i11 >> 3 << 3) | 0;
   i16 = i14;
  }
 } while (0);
 if ((i12 | 0) == 5) {
  i12 = i8 + (i2 >>> 2) | 0;
  i2 = i12 >>> 0 > 16 >>> 0 ? i12 : 16;
  __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i7, i2 >>> 0 > i8 >>> 0 ? i2 : i8);
  i15 = i6;
  i16 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i15;
 i15 = i16 + (HEAP32[i3 >> 2] << 3) | 0;
 i16 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i15 + 4 >> 2] = i16;
 i9 = HEAP32[i3 >> 2] | 0;
 i10 = i9 + 1 | 0;
 HEAP32[i3 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i2 + 36 | 0;
 i10 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i11 = i2 | 0;
 i12 = HEAP32[i2 >> 2] | 0;
 if ((i10 | 0) == 3 | (i10 | 0) == 0) {
  i10 = FUNCTION_TABLE_ii[HEAP32[i12 + 744 >> 2] & 511](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i5, i11);
  i13 = (HEAP32[i5 >> 2] | 0) + i10 | 0;
 } else {
  i10 = FUNCTION_TABLE_ii[HEAP32[i12 + 736 >> 2] & 511](i11) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i6, i11);
  i13 = (HEAP32[i6 >> 2] | 0) + i10 | 0;
 }
 i10 = i2 + 20 | 0;
 if ((HEAP32[i10 >> 2] & 4194304 | 0) == 0) {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i7, i2 | 0);
 } else {
  __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i7, i2);
 }
 i6 = (HEAP32[i7 >> 2] | 0) + i13 | 0;
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i8, i2 | 0, i3, 0);
 i3 = (HEAP32[(HEAP32[i9 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i14 = i2 + 52 | 0;
 } else {
  i14 = i2 + 56 | 0;
 }
 if ((HEAP32[i10 >> 2] & 8192 | 0) == 0) {
  i15 = (HEAP32[i8 + 12 >> 2] | 0) + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 } else {
  i15 = (HEAP32[i8 + 8 >> 2] | 0) + (HEAP32[i8 >> 2] | 0) | 0;
 }
 HEAP32[i1 >> 2] = i6 - (HEAP32[i14 >> 2] | 0) + i15;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 & 768 | 0) == 256) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i3 + 36 >> 2] | 0;
 }
 i7 = (HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
 do {
  if ((HEAP8[i7] & 3) == 3) {
   i8 = (HEAP32[i7 >> 2] | 0) >>> 11 & 3;
   if ((i8 | 0) == 2) {
    i9 = i5;
    break;
   }
   i10 = (HEAP32[i6 + 44 >> 2] | 0) >>> 13 & 3;
   if (((i10 | 0) == 0 | (i10 | 0) == 3) ^ (i8 | 0) == 0) {
    i11 = 7;
   } else {
    i9 = i5;
   }
  } else {
   i11 = 7;
  }
 } while (0);
 do {
  if ((i11 | 0) == 7) {
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0)) {
    i9 = HEAP32[i4 >> 2] | 0;
    break;
   }
   i12 = __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i2) | 0;
   return i12 | 0;
  }
 } while (0);
 if ((i9 & 768 | 0) == 256) {
  i13 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i13 = HEAP32[i3 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0) {
   if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0)) {
    break;
   }
   i12 = __ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE(i2) | 0;
   return i12 | 0;
  }
 } while (0);
 i12 = __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i2, HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] & 31) | 0;
 return i12 | 0;
}
function __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4findERKS4_(i1, i2, i3) {
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
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
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
function __ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4findERKS4_(i1, i2, i3) {
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
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = i10 & i5;
   i11 = i4 + (i9 << 3) | 0;
   i12 = HEAP32[i11 >> 2] | 0;
   L3 : do {
    if ((i12 | 0) == (i8 | 0)) {
     i13 = i11;
    } else {
     i14 = (i10 >>> 23) + ~i10 | 0;
     i15 = i14 << 12 ^ i14;
     i14 = i15 >>> 7 ^ i15;
     i15 = i14 << 2 ^ i14;
     i14 = i15 >>> 20 ^ i15 | 1;
     i15 = 0;
     i16 = i9;
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
function __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4takeERKS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 __ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4findERKS4_(i5, i2, i3);
 i3 = i2 | 0;
 i6 = i2 + 4 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 if ((i7 | 0) == ((HEAP32[i3 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = i2 | 0;
 do {
  if ((i8 | 0) != ((HEAP32[i3 >> 2] | 0) + (HEAP32[i6 >> 2] << 3) | 0)) {
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i9 | 0) != 0) {
    i10 = HEAP32[i9 >> 2] | 0;
    if ((i10 | 0) != 0) {
     __ZN3WTF8fastFreeEPv(i10);
    }
    __ZN3WTF8fastFreeEPv(i9);
   }
   HEAP32[i8 >> 2] = -1;
   i9 = i2 + 16 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   i9 = i2 + 12 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   HEAP32[i9 >> 2] = i10;
   i9 = HEAP32[i6 >> 2] | 0;
   if (!((i10 * 6 & -1 | 0) < (i9 | 0) & (i9 | 0) > 8)) {
    break;
   }
   __ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_(i5, (i9 | 0) / 2 & -1, 0) | 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock15willBeDestroyedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 92 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 134217728;
 i4 = i1 | 0;
 i5 = i1 + 4 | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i6 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if ((HEAP32[i6 + 20 >> 2] & 768 | 0) == 256) {
    i7 = HEAP32[(HEAP32[i6 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i7 = HEAP32[i6 + 36 >> 2] | 0;
   }
   if ((HEAP32[i7 + 48 >> 2] & 31 | 0) != 3) {
    break;
   }
   __ZN7WebCore11RenderBlock27moveRunInToOriginalPositionERNS_12RenderObjectE(i1, i6);
  }
 } while (0);
 __ZN7WebCore13RenderElement23destroyLeftoverChildrenEv(i1 | 0);
 i7 = i1 | 0;
 i6 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i7) | 0;
 if ((i6 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i6 | 0);
  __ZN7WebCore20RenderBoxModelObject15setContinuationEPS0_(i7, 0);
 }
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   i7 = HEAP32[i1 + 8 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 644 >> 2] & 127](i7, i4);
  }
 } while (0);
 i4 = HEAP32[H_BASE + 1528 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore9RenderBox15willBeDestroyedEv(i8);
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore11RenderBlockENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 i8 = i1 | 0;
 __ZN7WebCore9RenderBox15willBeDestroyedEv(i8);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock30columnsBlockForSpanningElementEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i3 & 768 | 0) == 256) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 52 >> 2] & 4032;
 if ((i5 | 0) == 192 | (i5 | 0) == 256) {
  i4 = 0;
  return i4 | 0;
 }
 if (!((i3 & 25165824 | 0) != 16777216 & (i3 & 64 | 0) == 0 & (i3 & 1024 | 0) == 0)) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = i1 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i3 + 36 >> 2] | 0;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i6 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 >> 2] & 16 | 0) != 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i3) | 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i3 = __ZN7WebCore11RenderBlock22containingColumnsBlockEb(i1, 0) | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = i3 | 0;
 if ((i1 | 0) == 0 | (i3 | 0) == (i1 | 0)) {
  i4 = i3;
  return i4 | 0;
 }
 i5 = i1 | 0;
 while (1) {
  if ((HEAP32[i5 + 24 >> 2] & 16 | 0) != 0) {
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i5) | 0) != 0) {
    i4 = 0;
    i7 = 25;
    break;
   }
  }
  i1 = HEAP32[i5 + 8 >> 2] | 0;
  if ((i1 | 0) == 0 | (i1 | 0) == (i6 | 0)) {
   i4 = i3;
   i7 = 24;
   break;
  } else {
   i5 = i1;
  }
 }
 if ((i7 | 0) == 25) {
  return i4 | 0;
 } else if ((i7 | 0) == 24) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock30markPositionedObjectsForLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1544 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = i1;
 i5 = i2 + ~(i2 << 15) | 0;
 i2 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i2 >>> 6 ^ i2;
 i2 = i5 + ~(i5 << 11) | 0;
 i5 = i2 >>> 16 ^ i2;
 if ((i4 | 0) == 0) {
  return;
 }
 i2 = i3 & i5;
 i6 = i4 + (i2 << 3) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L7 : do {
  if ((i7 | 0) == (i1 | 0)) {
   i8 = i6;
  } else {
   i9 = (i5 >>> 23) + ~i5 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = 0;
   i11 = i2;
   i12 = i7;
   while (1) {
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = (i10 | 0) == 0 ? i9 : i10;
    i14 = i13 + i11 & i3;
    i15 = i4 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i1 | 0)) {
     i8 = i15;
     break L7;
    } else {
     i10 = i13;
     i11 = i14;
     i12 = i16;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i8 + 4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i8 | 0) == 0) {
  return;
 } else {
  i17 = i8;
 }
 while (1) {
  i8 = HEAP32[i17 >> 2] | 0;
  i1 = i8 + 20 | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  if ((i4 & 4 | 0) == 0) {
   HEAP32[i1 >> 2] = i4 | 4;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i8 | 0, 1, 0);
  }
  i17 = HEAP32[i17 + 8 >> 2] | 0;
  if ((i17 | 0) == 0) {
   break;
  }
 }
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
   i6 = 24;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 24) {
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
function __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0;
 i9 = HEAP32[i4 + 44 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 0;
  } else {
   if ((HEAP32[i9 + 16 >> 2] & 32 | 0) == 0) {
    i10 = HEAP32[i9 + 8 >> 2] | 0;
    break;
   } else {
    i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i9) | 0;
    break;
   }
  }
 } while (0);
 i9 = HEAP32[i7 + 44 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i6;
 HEAP32[i1 + 8 >> 2] = i6;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = +0;
 i6 = i1 + 24 | 0;
 i7 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 HEAP32[i6 >> 2] = i7 << 7 & 128 | (i8 & 3 | i9 & 32 | HEAP32[i6 >> 2] & -1024 | 80) | i7 << 8 & 256;
 HEAP32[i1 + 28 >> 2] = 0;
 i7 = i1 + 32 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 >> 2] = i10 + (i5 << 1);
 i5 = HEAP32[i3 + 24 >> 2] | 0;
 i10 = i5 + 44 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i5, i3 | 0, 0) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 31](i6, 32) | 0;
  HEAP32[i10 >> 2] = i3;
  i11 = i3;
 } else {
  i11 = i1;
 }
 if ((HEAP32[i11 + 76 >> 2] | 0) == 0) {
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i11 + 4 >> 2] = 1;
 HEAP32[i11 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
 HEAP32[i11 + 8 >> 2] = i2;
 HEAP32[i11 + 12 >> 2] = 0;
 HEAP32[i7 >> 2] = i11;
 return;
}
function __ZNK7WebCore11RenderBlock29computeRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 20 | 0;
 if ((HEAP32[i8 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i9 + 128 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 864 >> 2] & 127](i4, i2);
 i10 = __ZNK7WebCore9RenderBox27isUnsplittableForPaginationEv(i2) | 0;
 i11 = i1 | 0;
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if (i10) {
  HEAP32[i5 >> 2] = i4;
  i10 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i9, i11, i5, 1, 0) | 0;
  i12 = i10;
  i13 = i10;
 } else {
  HEAP32[i6 >> 2] = i4;
  i4 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i9, i11, i6, 1, 0) | 0;
  HEAP32[i7 >> 2] = (HEAP32[i1 >> 2] | 0) + (HEAP32[((HEAP32[i8 >> 2] & 8192 | 0) == 0 ? i2 + 52 | 0 : i2 + 56 | 0) >> 2] | 0);
  i12 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i9, i11, i7, 1, 0) | 0;
  i13 = i4;
 }
 __ZN7WebCore16RenderFlowThread20setRegionRangeForBoxEPKNS_9RenderBoxEPNS_12RenderRegionES5_(i9, i2, i13, i12);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock37updateShapeInsideInfoAfterStyleChangeEPKNS_10ShapeValueES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == (i3 | 0)) {
  return;
 }
 i3 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  } else {
   do {
    if ((i4 | 0) == 0) {
     i5 = __ZN3WTF10fastMallocEj(56) | 0;
     HEAP32[i5 + 4 >> 2] = 0;
     HEAP32[i5 + 8 >> 2] = 0;
     HEAP32[i5 + 12 >> 2] = i1;
     HEAP32[i5 + 16 >> 2] = 0;
     HEAP32[i5 + 20 >> 2] = 0;
     HEAP32[i5 + 24 >> 2] = 0;
     HEAP32[i5 >> 2] = __ZTVN7WebCore15ShapeInsideInfoE + 8;
     HEAP32[i5 + 28 >> 2] = 0;
     HEAP32[i5 + 32 >> 2] = 0;
     HEAP32[i5 + 36 >> 2] = 0;
     i6 = i5 + 40 | 0;
     HEAP8[i6] = HEAP8[i6] & -2;
     HEAP32[i5 + 44 >> 2] = 0;
     HEAP32[i5 + 48 >> 2] = 0;
     HEAP32[i5 + 52 >> 2] = 0;
     i6 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
     i7 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = i5;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
    }
   } while (0);
   i7 = (HEAP32[i3 >> 2] | 0) + 16 | 0;
   i5 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 __ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv(i1);
 return;
}
function __ZN3WTF11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS3_EEE4findERKS3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   i6 = i5 << 2 | 0;
   i7 = i5;
  } else {
   i5 = HEAP32[i2 + 8 >> 2] | 0;
   i8 = HEAP32[i3 >> 2] | 0;
   i9 = i8;
   i10 = i9 + ~(i9 << 15) | 0;
   i9 = (i10 >>> 10 ^ i10) * 9 & -1;
   i10 = i9 >>> 6 ^ i9;
   i9 = i10 + ~(i10 << 11) | 0;
   i10 = i9 >>> 16 ^ i9;
   i9 = (i10 >>> 23) + ~i10 | 0;
   i11 = i9 << 12 ^ i9;
   i9 = i11 >>> 7 ^ i11;
   i11 = i9 << 2 ^ i9;
   i9 = i11 >>> 20 ^ i11 | 1;
   i11 = i10;
   i10 = 0;
   while (1) {
    i12 = i11 & i5;
    i13 = i4 + (i12 << 2) | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    i15 = i14;
    if ((i15 | 0) == 0) {
     i16 = 5;
     break;
    } else if ((i15 | 0) != (-1 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) == (i8 | 0)) {
      i16 = 8;
      break;
     }
    }
    i14 = (i10 | 0) == 0 ? i9 : i10;
    i11 = i14 + i12 | 0;
    i10 = i14;
   }
   if ((i16 | 0) == 8) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = (i13 | 0) == 0 ? i4 + (i10 << 2) | 0 : i13;
    i7 = i10;
    break;
   } else if ((i16 | 0) == 5) {
    i10 = HEAP32[i2 + 4 >> 2] | 0;
    i6 = i4 + (i10 << 2) | 0;
    i7 = i10;
    break;
   }
  }
 } while (0);
 if ((i6 | 0) == (i4 + (i7 << 2) | 0)) {
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 } else {
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
}
function __ZNK7WebCore11RenderBlock38adjustIntrinsicLogicalWidthsForColumnsERNS_10LayoutUnitES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0;
 i8 = HEAP8[i7 + 32 | 0] | 0;
 if ((i8 & 3) == 3) {
  STACKTOP = i4;
  return;
 }
 if ((i8 & 2) == 0) {
  i9 = HEAPU16[i7 + 8 >> 1] | 0;
 } else {
  i9 = 1;
 }
 HEAP32[i5 >> 2] = 0;
 if ((i8 & 4) == 0) {
  d10 = +HEAPF32[i7 + 12 >> 2];
  i11 = i7;
  i12 = i8;
 } else {
  d13 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i1) | 0) + 12 >> 2] + +.5;
  i1 = HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0;
  d10 = d13;
  i11 = i1;
  i12 = HEAP8[i1 + 32 | 0] | 0;
 }
 i1 = Math_imul(~~d10, i9 - 1 | 0) | 0;
 if ((i12 & 1) == 0) {
  d10 = +HEAPF32[i11 + 4 >> 2];
  do {
   if (d10 < +2147483647) {
    if (d10 <= +-2147483648) {
     i14 = -2147483648;
     break;
    }
    i14 = ~~d10;
   } else {
    i14 = 2147483647;
   }
  } while (0);
  HEAP32[i5 >> 2] = i14;
  i11 = i2 | 0;
  i12 = i5;
  HEAP32[i11 >> 2] = HEAP32[((i14 | 0) < (HEAP32[i11 >> 2] | 0) ? i12 : i2) >> 2];
  i15 = i14;
  i16 = i12;
 } else {
  i12 = i2 | 0;
  HEAP32[i12 >> 2] = (Math_imul(HEAP32[i12 >> 2] | 0, i9) | 0) + i1;
  i15 = 0;
  i16 = i5;
 }
 i5 = i3 | 0;
 HEAP32[i5 >> 2] = (Math_imul(HEAP32[((HEAP32[i5 >> 2] | 0) < (i15 | 0) ? i16 : i3) >> 2] | 0, i9) | 0) + i1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock33expandsToEncloseOverhangingFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 3072 | 0) == 3072) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = i1 | 0;
 if (!((i3 & 25165824 | 0) != 16777216 & (i3 & 64 | 0) == 0 & (i3 & 65536 | 0) == 0)) {
  i4 = 1;
  return i4 | 0;
 }
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i7 | 0) == 0) {
   i8 = i3;
  } else {
   i9 = i7 | 0;
   i10 = i7;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 556 >> 2] & 511](i9) | 0) {
    i4 = 1;
    return i4 | 0;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 548 >> 2] & 511](i9) | 0) {
    i4 = 1;
    return i4 | 0;
   } else {
    i8 = HEAP32[i2 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if ((i8 & 4194304 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i8 = i1;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 188 >> 2] & 511](i5) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 196 >> 2] & 511](i5) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 76 >> 2] & 511](i5) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = HEAP32[i6 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = (HEAP32[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i5 | 0);
 return i4 | 0;
}
function __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextERKNS_11RenderStyleEj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = i4 + 44 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i4 + 16 >> 2] & 32 | 0) == 0) {
  i8 = HEAP32[i4 + 8 >> 2] | 0;
  i9 = i4;
 } else {
  i10 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i4) | 0;
  i8 = i10;
  i9 = HEAP32[i7 >> 2] | 0;
 }
 i7 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = HEAP32[i5 + 44 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i7;
 HEAP32[i1 + 8 >> 2] = i7;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = +0;
 i7 = i1 + 24 | 0;
 i5 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 HEAP32[i7 >> 2] = i5 << 7 & 128 | (i6 & 3 | i9 & 32 | HEAP32[i7 >> 2] & -1024 | 80) | i5 << 8 & 256;
 HEAP32[i1 + 28 >> 2] = 0;
 i5 = i1 + 32 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i1 >> 2] = i8;
 i8 = HEAP32[i3 + 24 >> 2] | 0;
 i1 = i8 + 44 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i9 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i8, i3 | 0, 0) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 31](i9, 32) | 0;
  HEAP32[i1 >> 2] = i3;
  i11 = i3;
 } else {
  i11 = i7;
 }
 if ((HEAP32[i11 + 76 >> 2] | 0) == 0) {
  return;
 }
 i11 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i11 + 4 >> 2] = 1;
 HEAP32[i11 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
 HEAP32[i11 + 8 >> 2] = i2;
 HEAP32[i11 + 12 >> 2] = 0;
 HEAP32[i5 >> 2] = i11;
 return;
}
function __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1576 >> 2] | 0;
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
 i5 = HEAP32[i9 + 4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i9 = i5 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (!(__ZN7WebCore15ShapeInsideInfo12isEnabledForERKNS_11RenderBlockE(i1) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i9 >> 2] | 0;
 return i3 | 0;
}
function __ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 2097152 | 0) != 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 184 >> 2] & 511](i1 | 0) | 0) {
    break;
   }
   i9 = FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1108 >> 2] & 7](i1, i2, i3, i4, i5, i6) | 0;
   STACKTOP = i7;
   return i9 | 0;
  }
 } while (0);
 i10 = (i6 | 0) == 2 ? 1 : i6;
 i6 = i1 | 0;
 i11 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i11 | 0) == 0) {
  i9 = 0;
  STACKTOP = i7;
  return i9 | 0;
 } else {
  i12 = i11;
 }
 L8 : while (1) {
  i11 = i12;
  __ZNK7WebCore9RenderBox26flipForWritingModeForChildEPKS0_RKNS_11LayoutPointE(i8, i6, i11, i5);
  do {
   if (!(__ZNK7WebCore22RenderLayerModelObject20hasSelfPaintingLayerEv(i12) | 0)) {
    if ((HEAP32[i12 + 20 >> 2] & 64 | 0) != 0) {
     break;
    }
    if (FUNCTION_TABLE_iiiiiii[HEAP32[(HEAP32[i12 >> 2] | 0) + 460 >> 2] & 7](i11, i2, i3, i4, i8, i10) | 0) {
     i9 = 1;
     i13 = 12;
     break L8;
    }
   }
  } while (0);
  i11 = HEAP32[i12 + 12 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i9 = 0;
   i13 = 11;
   break;
  } else {
   i12 = i11;
  }
 }
 if ((i13 | 0) == 12) {
  STACKTOP = i7;
  return i9 | 0;
 } else if ((i13 | 0) == 11) {
  STACKTOP = i7;
  return i9 | 0;
 }
 return 0;
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
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 248 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 236 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 240 >> 2] & 511](i1) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 272 >> 2] & 511](i1) | 0) ^ 1;
 return i4 | 0;
}
function __ZN7WebCore11RenderBlock37removePercentHeightDescendantIfNeededERNS_9RenderBoxE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = HEAP32[H_BASE + 1536 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i5 = i2 + ~(i2 << 15) | 0;
 i2 = (i5 >>> 10 ^ i5) * 9 & -1;
 i5 = i2 >>> 6 ^ i2;
 i2 = i5 + ~(i5 << 11) | 0;
 i5 = i2 >>> 16 ^ i2;
 i2 = i4 & i5;
 i6 = i3 + (i2 << 3) | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 L7 : do {
  if ((i7 | 0) == (i1 | 0)) {
   i8 = i6;
  } else {
   i9 = (i5 >>> 23) + ~i5 | 0;
   i10 = i9 << 12 ^ i9;
   i9 = i10 >>> 7 ^ i10;
   i10 = i9 << 2 ^ i9;
   i9 = i10 >>> 20 ^ i10 | 1;
   i10 = 0;
   i11 = i2;
   i12 = i7;
   while (1) {
    if ((i12 | 0) == 0) {
     break;
    }
    i13 = (i10 | 0) == 0 ? i9 : i10;
    i14 = i13 + i11 & i4;
    i15 = i3 + (i14 << 3) | 0;
    i16 = HEAP32[i15 >> 2] | 0;
    if ((i16 | 0) == (i1 | 0)) {
     i8 = i15;
     break L7;
    } else {
     i10 = i13;
     i11 = i14;
     i12 = i16;
    }
   }
   return;
  }
 } while (0);
 if ((i8 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, H_BASE + 1520, H_BASE + 1536);
 return;
}
function __ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((i2 - 18 | 0) >>> 0 < 2 >>> 0) {
  i2 = __ZN3WTF10fastMallocEj(128) | 0;
  i6 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i7 = HEAP32[i1 + 36 >> 2] | 0;
  }
  __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i4, i7, 18);
  __ZN7WebCore17RenderFlexibleBoxC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i2, i6, i4);
  i8 = i2;
  i9 = i8;
  i10 = i8;
  __ZN7WebCore13RenderElement15initializeStyleEv(i10);
  STACKTOP = i3;
  return i9 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(116) | 0;
  i4 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
   i11 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
  } else {
   i11 = HEAP32[i1 + 36 >> 2] | 0;
  }
  __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i5, i11, 1);
  __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i2, i4, i5);
  i8 = i2;
  i9 = i8;
  i10 = i8;
  __ZN7WebCore13RenderElement15initializeStyleEv(i10);
  STACKTOP = i3;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 HEAP32[i3 >> 2] = i1;
 i1 = HEAP32[H_BASE + 1576 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = __ZN3WTF10fastMallocEj(20) | 0;
  i7 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1576 >> 2] = i7;
  i8 = i7;
 } else {
  i8 = i1;
 }
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_(i5, i8 | 0, i3, i4);
 i4 = (HEAP32[i5 >> 2] | 0) + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i9 = i5;
  STACKTOP = i2;
  return i9 | 0;
 }
 i5 = __ZN3WTF10fastMallocEj(12) | 0;
 i3 = i5;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 HEAP32[i5 + 8 >> 2] = 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 if ((i5 | 0) == 0) {
  i9 = i3;
  STACKTOP = i2;
  return i9 | 0;
 }
 i3 = i5 + 8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
 }
 __ZN3WTF8fastFreeEPv(i5);
 i9 = HEAP32[i4 >> 2] | 0;
 STACKTOP = i2;
 return i9 | 0;
}
function __ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 i9 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i9 | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i9 + 128 >> 2] | 0) == 0) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 511](i2 | 0) | 0) {
   if ((HEAP32[i2 + 20 >> 2] & 25165824 | 0) == 16777216) {
    break;
   } else {
    i8 = 0;
   }
   STACKTOP = i3;
   return i8 | 0;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i9, i2, i4, i5);
 __ZNK7WebCore11RenderBlock29computeRegionRangeForBoxChildERKNS_9RenderBoxE(i1, i2);
 HEAP32[i6 >> 2] = 0;
 HEAP32[i7 >> 2] = 0;
 __ZNK7WebCore16RenderFlowThread20getRegionRangeForBoxEPKNS_9RenderBoxERPNS_12RenderRegionES6_(i9, i2, i6, i7);
 if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i4 >> 2] | 0)) {
  STACKTOP = i3;
  return (HEAP32[i7 >> 2] | 0) != (HEAP32[i5 >> 2] | 0) | 0;
 } else {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock18continuationBeforeEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = (i2 | 0) != 0;
 do {
  if (i3) {
   if ((HEAP32[i2 + 8 >> 2] | 0) == (i1 | 0)) {
    i4 = i1;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i5 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 i6 = i5;
 L5 : do {
  if ((i5 | 0) == 0) {
   i7 = i1;
   i8 = i1;
  } else {
   i9 = i2 + 8 | 0;
   if (i3) {
    i10 = i5;
    i11 = i1;
    i12 = i6;
   } else {
    i13 = i5;
    i14 = i1;
    i15 = i6;
    while (1) {
     i16 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i13) | 0;
     if ((i16 | 0) == 0) {
      i7 = i14;
      i8 = i15;
      break L5;
     } else {
      i13 = i16;
      i14 = i15;
      i15 = i16;
     }
    }
   }
   while (1) {
    if ((HEAP32[i9 >> 2] | 0) == (i10 | 0)) {
     break;
    }
    i15 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i10) | 0;
    if ((i15 | 0) == 0) {
     i7 = i11;
     i8 = i12;
     break L5;
    } else {
     i10 = i15;
     i11 = i12;
     i12 = i15;
    }
   }
   i4 = (HEAP32[i10 + 28 >> 2] | 0) == (i2 | 0) ? i11 : i12;
   return i4 | 0;
  }
 } while (0);
 do {
  if (!i3) {
   if ((HEAP32[i8 + 28 >> 2] | 0) == 0) {
    i4 = i7;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = i8;
 return i4 | 0;
}
function __ZN7WebCore11RenderBlock16computeShapeSizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = __ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i1) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 152 >> 2] & 511](i1 | 0) | 0) {
  i8 = (__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(HEAP32[i1 + 8 >> 2] | 0) | 0) + 20 | 0;
  i9 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i4 >> 2] = i9;
  __ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_(i7 | 0, i3, i4);
  STACKTOP = i2;
  return;
 }
 i4 = __ZN7WebCore9RenderBox44percentageLogicalHeightIsResolvableFromBlockEPKNS_11RenderBlockEb(i1, 0) | 0;
 i3 = i7 | 0;
 i7 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  HEAP32[i5 >> 2] = HEAP32[i1 + 52 >> 2];
 } else {
  HEAP32[i5 >> 2] = HEAP32[i1 + 56 >> 2];
 }
 do {
  if (i4) {
   if ((i7 | 0) == 3 | (i7 | 0) == 0) {
    HEAP32[i6 >> 2] = HEAP32[i1 + 56 >> 2];
    break;
   } else {
    HEAP32[i6 >> 2] = HEAP32[i1 + 52 >> 2];
    break;
   }
  } else {
   HEAP32[i6 >> 2] = 0;
  }
 } while (0);
 __ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_(i3, i5, i6);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderBlock17pageLogicalOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1576 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 8 >> 2] | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   i6 = i2;
   i7 = i6 + ~(i6 << 15) | 0;
   i6 = (i7 >>> 10 ^ i7) * 9 & -1;
   i7 = i6 >>> 6 ^ i6;
   i6 = i7 + ~(i7 << 11) | 0;
   i7 = i6 >>> 16 ^ i6;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i4 & i7;
   i8 = i5 + (i6 << 3) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i10 = i8;
   } else {
    i8 = (i7 >>> 23) + ~i7 | 0;
    i7 = i8 << 12 ^ i8;
    i8 = i7 >>> 7 ^ i7;
    i7 = i8 << 2 ^ i8;
    i8 = i7 >>> 20 ^ i7 | 1;
    i7 = 0;
    i11 = i6;
    i6 = i9;
    while (1) {
     if ((i6 | 0) == 0) {
      break L1;
     }
     i9 = (i7 | 0) == 0 ? i8 : i7;
     i12 = i9 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i10 = i13;
      break;
     } else {
      i7 = i9;
      i11 = i12;
      i6 = i14;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i6 + 4 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore11RenderBlock15paginationStrutEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = HEAP32[H_BASE + 1576 >> 2] | 0;
 L1 : do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i3 + 8 >> 2] | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   i6 = i2;
   i7 = i6 + ~(i6 << 15) | 0;
   i6 = (i7 >>> 10 ^ i7) * 9 & -1;
   i7 = i6 >>> 6 ^ i6;
   i6 = i7 + ~(i7 << 11) | 0;
   i7 = i6 >>> 16 ^ i6;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i4 & i7;
   i8 = i5 + (i6 << 3) | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == (i2 | 0)) {
    i10 = i8;
   } else {
    i8 = (i7 >>> 23) + ~i7 | 0;
    i7 = i8 << 12 ^ i8;
    i8 = i7 >>> 7 ^ i7;
    i7 = i8 << 2 ^ i8;
    i8 = i7 >>> 20 ^ i7 | 1;
    i7 = 0;
    i11 = i6;
    i6 = i9;
    while (1) {
     if ((i6 | 0) == 0) {
      break L1;
     }
     i9 = (i7 | 0) == 0 ? i8 : i7;
     i12 = i9 + i11 & i4;
     i13 = i5 + (i12 << 3) | 0;
     i14 = HEAP32[i13 >> 2] | 0;
     if ((i14 | 0) == (i2 | 0)) {
      i10 = i13;
      break;
     } else {
      i7 = i9;
      i11 = i12;
      i6 = i14;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = HEAP32[i6 >> 2];
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZNK7WebCore11RenderBlock10columnInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i1 = i3 + ~(i3 << 15) | 0;
 i3 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i3 >>> 6 ^ i3;
 i3 = i1 + ~(i1 << 11) | 0;
 i1 = i3 >>> 16 ^ i3;
 if ((i6 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i5 & i1;
 i7 = i6 + (i3 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L7 : do {
  if ((i8 | 0) == (i4 | 0)) {
   i9 = i7;
  } else {
   i10 = (i1 >>> 23) + ~i1 | 0;
   i11 = i10 << 12 ^ i10;
   i10 = i11 >>> 7 ^ i11;
   i11 = i10 << 2 ^ i10;
   i10 = i11 >>> 20 ^ i11 | 1;
   i11 = 0;
   i12 = i3;
   i13 = i8;
   while (1) {
    if ((i13 | 0) == 0) {
     i2 = 0;
     break;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i6 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i4 | 0)) {
     i9 = i16;
     break L7;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
   return i2 | 0;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP32[i2 + 72 >> 2] | 0) != 0) {
  return;
 }
 i4 = i1 + 20 | 0;
 if ((HEAP32[i4 >> 2] & 768 | 0) == 768) {
  i5 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 } else {
  do {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
    i6 = i1 | 0;
    if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i6) | 0) == 0) {
     i7 = 8;
     break;
    }
    i8 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i6) | 0;
    if ((HEAP32[i8 + 20 >> 2] & 128 | 0) != 0) {
     i9 = 0;
     break;
    }
    i9 = HEAP32[i8 + 4 >> 2] | 0;
   } else {
    i7 = 8;
   }
  } while (0);
  do {
   if ((i7 | 0) == 8) {
    if ((HEAP32[i4 >> 2] & 128 | 0) != 0) {
     i9 = 0;
     break;
    }
    i9 = HEAP32[i1 + 4 >> 2] | 0;
   }
  } while (0);
  i5 = i9 | 0;
 }
 if ((i5 | 0) == 0) {
  return;
 }
 __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i2, i5);
 if ((HEAP32[i2 + 76 >> 2] | 0) == 0) {
  __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i2, i5);
 }
 i5 = i3;
 i3 = i2 + 88 | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i2;
 return;
}
function __ZNK7WebCore11RenderBlock24percentHeightDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1520 >> 2] | 0;
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
function __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0;
 if ((HEAP32[i2 + 20 >> 2] & 2048 | 0) != 0 & (i5 | 0) == 0) {
  __ZNK7WebCore9RenderBox10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i1, i2 | 0, i3, i4, 0);
  return;
 }
 do {
  if (i3) {
   i4 = i2 + 4 | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 914 | 0] & 1) == 0) {
    break;
   }
   i5 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i2 | 0) | 0;
   if ((i5 | 0) == (HEAP32[i2 + 36 >> 2] | 0)) {
    break;
   }
   HEAP32[i1 >> 2] = __ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
   return;
  }
 } while (0);
 i3 = i2 + 92 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 33554431 | 0) == 33554431) {
  i5 = (__ZNK7WebCore11RenderStyle18computedLineHeightEPNS_10RenderViewE(HEAP32[i2 + 36 >> 2] | 0, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) & 33554431;
  i2 = HEAP32[i3 >> 2] & -33554432 | i5;
  HEAP32[i3 >> 2] = i2;
  i6 = i2;
 } else {
  i6 = i4;
 }
 HEAP32[i1 >> 2] = i6 << 7 >> 7;
 return;
}
function __ZNK7WebCore11RenderBlock17positionedObjectsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1544 >> 2] | 0;
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
function __ZNK7WebCore11RenderBlock32minLineHeightForReplacedRendererEbNS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 664 >> 2] | 0) != 2) {
   i8 = HEAP32[i4 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i1 >> 2] = i8;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i8 = i2 | 0;
 do {
  if (i3) {
   if ((HEAP8[i7 + 914 | 0] & 1) == 0) {
    i9 = HEAP32[i2 + 36 >> 2] | 0;
    break;
   } else {
    i9 = __ZNK7WebCore13RenderElement20cachedFirstLineStyleEv(i8) | 0;
    break;
   }
  } else {
   i9 = HEAP32[i2 + 36 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[(HEAP32[i9 + 24 >> 2] | 0) + 92 >> 2] & 1 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else {
  __ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE(i6, i2, i3, (HEAP32[i2 + 20 >> 2] | 0) >>> 13 & 1 ^ 1, 1);
  HEAP32[i1 >> 2] = HEAP32[((HEAP32[i4 >> 2] | 0) < (HEAP32[i6 >> 2] | 0) ? i6 : i4) >> 2];
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderBlock26addVisualOverflowFromThemeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 52 >> 2] | 0;
 i7 = HEAP32[i1 + 56 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i8 = i3 + 8 | 0;
 HEAP32[i8 >> 2] = i6;
 HEAP32[i8 + 4 >> 2] = i7;
 i7 = i1 | 0;
 i6 = __ZNK7WebCore12RenderObject5themeEv(i7) | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 40 >> 2] & 63](i6, i7, i3);
 i3 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 i3 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 12 >> 2] = i3;
 __ZN7WebCore9RenderBox17addVisualOverflowERKNS_10LayoutRectE(i1 | 0, i5);
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i7) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore16RenderFlowThread33addRegionsVisualOverflowFromThemeEPKNS_11RenderBlockE(i5, i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0;
 i8 = HEAP32[i6 + 44 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i5;
 HEAPF32[i1 + 12 >> 2] = +0;
 HEAPF32[i1 + 16 >> 2] = +1;
 HEAPF32[i1 + 20 >> 2] = +0;
 i5 = i1 + 24 | 0;
 i6 = HEAPU8[__ZN7WebCore7TextRun21s_allowsRoundingHacksE] | 0;
 HEAP32[i5 >> 2] = i6 << 7 & 128 | (i7 & 3 | i8 & 32 | HEAP32[i5 >> 2] & -1024 | 80) | i6 << 8 & 256;
 HEAP32[i1 + 28 >> 2] = 0;
 i6 = i1 + 32 | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 >> 2] = i4;
 i4 = HEAP32[i3 + 24 >> 2] | 0;
 i1 = i4 + 44 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i8 = __ZNK7WebCore10FontGlyphs17realizeFontDataAtERKNS_15FontDescriptionEj(i4, i3 | 0, 0) | 0;
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 31](i8, 32) | 0;
  HEAP32[i1 >> 2] = i3;
  i9 = i3;
 } else {
  i9 = i5;
 }
 if ((HEAP32[i9 + 76 >> 2] | 0) == 0) {
  return;
 }
 i9 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i9 + 4 >> 2] = 1;
 HEAP32[i9 >> 2] = __ZTVN7WebCore26SVGTextRunRenderingContextE + 8;
 HEAP32[i9 + 8 >> 2] = i2;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAP32[i6 >> 2] = i9;
 return;
}
function __ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i1 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 & 31 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 do {
  if ((HEAP8[i8 | 0] & 4) == 0) {
   if ((HEAP32[i8 + 60 >> 2] | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   i9 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i9 | 0) == 3 | (i9 | 0) == 0) {
    HEAP32[i4 >> 2] = HEAP32[i1 + 48 >> 2];
   } else {
    HEAP32[i4 >> 2] = HEAP32[i1 + 44 >> 2];
   }
   __ZNK7WebCore11LayoutState17pageLogicalOffsetEPNS_9RenderBoxENS_10LayoutUnitE(i3, i8, i1 | 0, i4);
   __ZNK7WebCore11RenderBlock17pageLogicalOffsetEv(i5, i1);
   if ((HEAP32[i3 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    STACKTOP = i2;
    return;
   } else {
    i10 = HEAP32[i6 >> 2] | 0;
    break;
   }
  } else {
   i10 = i7;
  }
 } while (0);
 if ((i10 & 4 | 0) != 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i6 >> 2] = i10 | 4;
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 << 3) | 0;
 do {
  if (i2 >>> 0 > 8 >>> 0) {
   if (i2 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
    HEAP32[i3 >> 2] = i8 >>> 3;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 8;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   i10 = i6;
   i9 = i2;
   i8 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   if ((i8 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i8;
    i2 = i2 + 8 | 0;
   }
  }
 }
 if ((i1 + 12 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZNK7WebCore11RenderBlock17firstLineBaselineEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 3;
 } else {
  if (((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
   i3 = 3;
  }
 }
 do {
  if ((i3 | 0) == 3) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 511](i1 | 0) | 0) {
    break;
   } else {
    i4 = -1;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i4 = -1;
  return i4 | 0;
 } else {
  i5 = i2;
 }
 while (1) {
  i2 = HEAP32[i5 + 20 >> 2] | 0;
  if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
   i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 964 >> 2] & 511](i5) | 0;
   if ((i6 | 0) != -1) {
    break;
   }
  }
  i2 = HEAP32[i5 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = -1;
   i3 = 16;
   break;
  } else {
   i5 = i2;
  }
 }
 if ((i3 | 0) == 16) {
  return i4 | 0;
 }
 i3 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3 | (i3 | 0) == 0) {
  i7 = i5 + 48 | 0;
 } else {
  i7 = i5 + 44 | 0;
 }
 i4 = (HEAP32[i7 >> 2] | 0) + i6 | 0;
 return i4 | 0;
}
function __ZNK7WebCore11RenderBlock11hasRareDataEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1576 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i4 + (i2 << 3) | 0;
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
     i9 = 0;
     break L7;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i4 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i3 = (i9 | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore11RenderBlock22setLogicalLeftForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = (i4 | 0) == 0;
 if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
  do {
   if (i6) {
    i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i7 = i4 + 56 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i2 + 48 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 48 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i5;
  return;
 } else {
  do {
   if (i6) {
    i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i4 = i7 + 52 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i2 + 44 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 44 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = STACKTOP;
 i6 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 i6 = (i4 | 0) == 0;
 if ((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0) {
  do {
   if (i6) {
    i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i7 = i4 + 52 | 0;
    HEAP32[i7 >> 2] = (HEAP32[i2 + 44 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) + (HEAP32[i7 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 44 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i5;
  return;
 } else {
  do {
   if (i6) {
    i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
    i4 = i7 + 56 | 0;
    HEAP32[i4 >> 2] = (HEAP32[i2 + 48 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) + (HEAP32[i4 >> 2] | 0);
   }
  } while (0);
  HEAP32[i2 + 48 >> 2] = HEAP32[i3 >> 2];
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderBlock13paintContentsERNS_9PaintInfoERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i1 | 0;
 i7 = (HEAP32[i1 + 4 >> 2] | 0) + 20 | 0;
 i8 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 328 >> 2] | 0) == 1) {
   if ((i8 & 768 | 0) == 768) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((i8 & 2097152 | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1096 >> 2] & 63](i1, i2, i3);
  STACKTOP = i4;
  return;
 }
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 i9 = (i8 | 0) == 6 ? 5 : i8;
 _memcpy(i5 | 0, i2 | 0, 48) | 0;
 HEAP32[i5 + 20 >> 2] = (i9 | 0) == 2 ? 1 : i9;
 i9 = i5 + 28 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 if ((i8 | 0) != 0 & (i8 | 0) == (i6 | 0)) {
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP32[i9 + 164 >> 2] | 0) < 1) {
  i10 = 0;
 } else {
  i10 = (HEAP32[i9 + 168 >> 2] | 0) > 0;
 }
 FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1036 >> 2] & 31](i1, i2, i3, i5, i10);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderBlock17offsetForContentsERNS_11LayoutPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 | 0;
 __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i4, i7, i2);
 i8 = i2;
 i9 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i8 + 4 >> 2] = i9;
 i9 = i1 + 20 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 & 65536 | 0) == 0) {
  i10 = i4;
 } else {
  __ZNK7WebCore9RenderBox21scrolledContentOffsetEv(i5, i7);
  i4 = HEAP32[i5 + 4 >> 2] | 0;
  i11 = i2 | 0;
  HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
  i5 = i2 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i4;
  i10 = HEAP32[i9 >> 2] | 0;
 }
 if ((i10 & 4194304 | 0) != 0) {
  __ZNK7WebCore11RenderBlock27adjustPointToColumnContentsERNS_11LayoutPointE(i1, i2);
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i6, i7, i2);
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i8 + 4 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderBlock26hasPercentHeightDescendantERNS_9RenderBoxE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = HEAP32[H_BASE + 1536 >> 2] | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i1;
 i6 = i2 + ~(i2 << 15) | 0;
 i2 = (i6 >>> 10 ^ i6) * 9 & -1;
 i6 = i2 >>> 6 ^ i2;
 i2 = i6 + ~(i6 << 11) | 0;
 i6 = i2 >>> 16 ^ i2;
 i2 = i5 & i6;
 i7 = i3 + (i2 << 3) | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 L4 : do {
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
     i9 = 0;
     break L4;
    }
    i14 = (i11 | 0) == 0 ? i10 : i11;
    i15 = i14 + i12 & i5;
    i16 = i3 + (i15 << 3) | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    if ((i17 | 0) == (i1 | 0)) {
     i9 = i16;
     break;
    } else {
     i11 = i14;
     i12 = i15;
     i13 = i17;
    }
   }
  }
 } while (0);
 i4 = (i9 | 0) != 0;
 return i4 | 0;
}
function __ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i9 = i2 | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 if ((i8 | 0) == 3 | (i8 | 0) == 0) {
  i8 = FUNCTION_TABLE_ii[HEAP32[i10 + 744 >> 2] & 511](i9) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 712 >> 2] & 127](i5, i9);
  i11 = (HEAP32[i5 >> 2] | 0) + i8 | 0;
 } else {
  i8 = FUNCTION_TABLE_ii[HEAP32[i10 + 736 >> 2] & 511](i9) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 704 >> 2] & 127](i6, i9);
  i11 = (HEAP32[i6 >> 2] | 0) + i8 | 0;
 }
 if ((i3 | 0) == 0) {
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i7, i2 | 0, i3, 0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i12 = HEAP32[i7 + 4 >> 2] | 0;
 } else {
  i12 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i1 >> 2] = i12 + i11;
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
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
 i1 = i2 + (i6 << 4) | 0;
 if (i5 >>> 0 > 268435455 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 4) | 0;
 HEAP32[i3 >> 2] = i7 >>> 4;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   i5 = i7;
   i8 = i6;
   HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i6 + 16 | 0;
   if ((i8 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i8;
    i7 = i7 + 16 | 0;
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
function __ZNK7WebCore9RenderBox20contentLogicalHeightEv(i1, i2) {
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
  __ZNK7WebCore9RenderBox12clientHeightEv(i4, i2);
  i10 = i2 | 0;
  i11 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 704 >> 2] & 127](i5, i10);
  i12 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 708 >> 2] & 127](i6, i10);
  HEAP32[i1 >> 2] = i12 - (HEAP32[i6 >> 2] | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZNK7WebCore9RenderBox11clientWidthEv(i7, i2);
  i6 = i2 | 0;
  i12 = i2;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 127](i8, i6);
  i2 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 716 >> 2] & 127](i9, i6);
  HEAP32[i1 >> 2] = i2 - (HEAP32[i9 >> 2] | 0);
  STACKTOP = i3;
  return;
 }
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 i3 = i4 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   i2 = i5 + 8 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i7 + 8 | 0;
   do {
    if (i8 >>> 0 > i5 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + 3072 | 0) >>> 0 <= i5 >>> 0) {
      i9 = 6;
      break;
     }
     i10 = i7 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i5;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    i9 = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   if ((i6 | 0) == 0) {
    break;
   } else {
    i5 = i6;
   }
  }
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
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
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 >> 2] = i2;
 if ((i4 | 0) == 0) {
  return i1 | 0;
 }
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 i3 = i4 + 28 | 0;
 if ((i2 | 0) != 0) {
  i5 = i2;
  while (1) {
   i2 = i5 + 8 | 0;
   i6 = HEAP32[i2 >> 2] | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   i8 = i7 + 8 | 0;
   do {
    if (i8 >>> 0 > i5 >>> 0) {
     i9 = 6;
    } else {
     if ((i8 + 192 | 0) >>> 0 <= i5 >>> 0) {
      i9 = 6;
      break;
     }
     i10 = i7 | 0;
     HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i10 >> 2] = i5;
    }
   } while (0);
   if ((i9 | 0) == 6) {
    i9 = 0;
    __ZN3WTF8fastFreeEPv(i5);
   }
   if ((i6 | 0) == 0) {
    break;
   } else {
    i5 = i6;
   }
  }
 }
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i5 | 0) != 0) {
  __ZdlPv(i5);
 }
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i4);
 return i1 | 0;
}
function __ZNK7WebCore11RenderBlock20hasMarginBeforeQuirkERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   i5 = HEAP32[i4 + 44 >> 2] | 0;
   if (((i5 ^ HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
    i6 = (HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, i5 >>> 13 & 3) | 0) + 4 | 0] & 1) != 0;
    return i6 | 0;
   } else {
    i6 = (HEAP32[i2 + 92 >> 2] & 33554432 | 0) != 0;
    return i6 | 0;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  i6 = (HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i1 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) != 0;
  return i6 | 0;
 } else {
  i6 = (HEAP32[i2 + 92 >> 2] & 67108864 | 0) != 0;
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderBlock19hasMarginAfterQuirkERKNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = HEAP32[i2 + 36 >> 2] | 0;
   i5 = HEAP32[i4 + 44 >> 2] | 0;
   if (((i5 ^ HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
    i6 = (HEAP8[(__ZNK7WebCore9LengthBox5afterENS_11WritingModeE((HEAP32[i4 + 16 >> 2] | 0) + 36 | 0, i5 >>> 13 & 3) | 0) + 4 | 0] & 1) != 0;
    return i6 | 0;
   } else {
    i6 = (HEAP32[i2 + 92 >> 2] & 67108864 | 0) != 0;
    return i6 | 0;
   }
  }
 } while (0);
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i1 + 20 >> 2] & 8192 | 0) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  i6 = (HEAP8[(__ZNK7WebCore9LengthBox6beforeENS_11WritingModeE((HEAP32[i1 + 16 >> 2] | 0) + 36 | 0, (HEAP32[i1 + 44 >> 2] | 0) >>> 13 & 3) | 0) + 4 | 0] & 1) != 0;
  return i6 | 0;
 } else {
  i6 = (HEAP32[i2 + 92 >> 2] & 33554432 | 0) != 0;
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 36 | 0;
 i6 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i6 | 0) == 3 | (i6 | 0) == 0) {
  i7 = i1 + 52 | 0;
 } else {
  i7 = i1 + 56 | 0;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i3, i1);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 876 >> 2] & 63](i1 | 0);
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 1128 >> 2] & 63](i1);
 i7 = i1 + 92 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i8 & -536870913;
 i7 = (HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i7 | 0) == 3 | (i7 | 0) == 0) {
  i9 = i1 + 52 | 0;
 } else {
  i9 = i1 + 56 | 0;
 }
 if ((i6 | 0) == (HEAP32[i9 >> 2] | 0)) {
  __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i4, i1);
  STACKTOP = i2;
  return (HEAP32[i3 >> 2] | 0) != (HEAP32[i4 >> 2] | 0) | (i8 & 536870912 | 0) != 0 | 0;
 } else {
  STACKTOP = i2;
  return 1;
 }
 return 0;
}
function __ZNK7WebCore11RenderBlock14firstLineBlockEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 52 >> 2] & 4096 | 0) == 0) {
  i2 = i1;
 } else {
  i3 = i1;
  return i3 | 0;
 }
 while (1) {
  i1 = HEAP32[i2 + 8 >> 2] | 0;
  i4 = HEAP32[i2 + 20 >> 2] | 0;
  if ((i4 & 2048 | 0) != 0) {
   i3 = 0;
   i5 = 11;
   break;
  }
  if ((i4 & 64 | 0) != 0 | (i1 | 0) == 0) {
   i3 = 0;
   i5 = 13;
   break;
  }
  if ((HEAP32[i1 + 28 >> 2] | 0) != (i2 | 0)) {
   i3 = 0;
   i5 = 14;
   break;
  }
  if ((HEAP32[i1 + 24 >> 2] & 32 | 0) == 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 136 >> 2] & 511](i1 | 0) | 0)) {
    i3 = 0;
    i5 = 9;
    break;
   }
  }
  i4 = i1;
  if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 52 >> 2] & 4096 | 0) == 0) {
   i2 = i4;
  } else {
   i3 = i4;
   i5 = 10;
   break;
  }
 }
 if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 13) {
  return i3 | 0;
 } else if ((i5 | 0) == 14) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 i7 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 if ((i7 | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP8[i7 + 292 | 0] & 1) != 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 if ((HEAP32[i7 + 128 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i3;
  return i6 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 864 >> 2] & 127](i5, i1);
 HEAP32[i4 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i5 >> 2] | 0);
 i6 = __ZN7WebCore16RenderFlowThread19regionAtBlockOffsetEPKNS_9RenderBoxENS_10LayoutUnitEbNS0_26RegionAutoGenerationPolicyE(i7, i1 | 0, i4, 1, 0) | 0;
 STACKTOP = i3;
 return i6 | 0;
}
function __ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 L3 : while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  do {
   if (!((i2 & 64 | 0) != 0 | (i2 & 25165824 | 0) == 16777216)) {
    if ((i2 & 768 | 0) == 256) {
     if (__ZNK7WebCore10RenderText26isAllCollapsibleWhitespaceEv(i4) | 0) {
      break;
     } else {
      i3 = 0;
      i5 = 11;
      break L3;
     }
    }
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) == 0) {
     i3 = 0;
     i5 = 9;
     break L3;
    }
    if (!(__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE(i4) | 0)) {
     i3 = 0;
     i5 = 12;
     break L3;
    }
   }
  } while (0);
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 1;
   i5 = 13;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 13) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 } else if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 12) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 20 | 0;
 if ((HEAP32[i5 >> 2] & 768 | 0) == 256) {
  i6 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i6 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i3, i6, 1);
 i6 = i3 | 0;
 if ((HEAP32[i5 >> 2] & 768 | 0) == 256) {
  i7 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i7 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_(HEAP32[i6 >> 2] | 0, i7);
 i7 = __ZN3WTF10fastMallocEj(116) | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i7, i5, i4);
 __ZN7WebCore13RenderElement15initializeStyleEv(i7);
 STACKTOP = i2;
 return i7 | 0;
}
function __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[i2 + 20 >> 2] & 4194304 | 0) == 0) {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2 | 0);
  return;
 }
 i3 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i4 = i2 | 0;
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i2;
 i2 = i3 + ~(i3 << 15) | 0;
 i3 = (i2 >>> 10 ^ i2) * 9 & -1;
 i2 = i3 >>> 6 ^ i3;
 i3 = i2 + ~(i2 << 11) | 0;
 i2 = i3 >>> 16 ^ i3;
 i3 = i5 & i2;
 i7 = i6 + (i3 << 3) | 0;
 if ((HEAP32[i7 >> 2] | 0) == (i4 | 0)) {
  i8 = i7;
 } else {
  i7 = (i2 >>> 23) + ~i2 | 0;
  i2 = i7 << 12 ^ i7;
  i7 = i2 >>> 7 ^ i2;
  i2 = i7 << 2 ^ i7;
  i7 = i2 >>> 20 ^ i2 | 1;
  i2 = 0;
  i9 = i3;
  while (1) {
   i3 = (i2 | 0) == 0 ? i7 : i2;
   i10 = i3 + i9 & i5;
   i11 = i6 + (i10 << 3) | 0;
   if ((HEAP32[i11 >> 2] | 0) == (i4 | 0)) {
    i8 = i11;
    break;
   } else {
    i2 = i3;
    i9 = i10;
   }
  }
 }
 HEAP32[i1 >> 2] = HEAP32[HEAP32[i8 + 4 >> 2] >> 2];
 return;
}
function __ZN7WebCore11RenderBlock25logicalRectToPhysicalRectERKNS_11LayoutPointERKNS_10LayoutRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = i1;
 _memset(i5 | 0, 0, 16) | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  i7 = HEAP32[i4 + 12 >> 2] | 0;
  i8 = HEAP32[i4 + 8 >> 2] | 0;
  i9 = i1 | 0;
  HEAP32[i9 >> 2] = HEAP32[i4 + 4 >> 2];
  i10 = i1 + 4 | 0;
  HEAP32[i10 >> 2] = i6;
  HEAP32[i1 + 8 >> 2] = i7;
  HEAP32[i1 + 12 >> 2] = i8;
  i11 = i9;
  i12 = i10;
 } else {
  i10 = i4;
  HEAP32[i5 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i11 = i1 | 0;
  i12 = i1 + 4 | 0;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i2 | 0, i1);
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i1;
 return;
}
function __ZN7WebCore11RenderBlock19clearLayoutOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = i1 + 88 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i3 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 824 >> 2] & 127](i3, i4);
 i7 = i1 + 52 | 0;
 i1 = HEAP32[i7 >> 2] | 0;
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i9 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = 1;
 do {
  if ((i7 | 0) == 0 & (i9 >>> 0 < i6 >>> 0 | i9 >>> 0 == i6 >>> 0 & i7 >>> 0 < 0 >>> 0)) {
   i10 = i3 + 8 | 0;
   if ((HEAP32[i10 >> 2] | 0) != (i1 | 0)) {
    break;
   }
   if ((HEAP32[i10 + 4 >> 2] | 0) != (i8 | 0)) {
    break;
   }
   __ZN7WebCore9RenderBox13clearOverflowEv(i4);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = HEAP32[i5 >> 2] | 0;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 i5 = i4 + 12 | 0;
 HEAP32[i5 >> 2] = i1;
 HEAP32[i5 + 4 >> 2] = i8;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 1;
 i2 = i6 + 68 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i5 = i6 | 0;
 i8 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i6);
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i8;
  HEAP32[i2 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 __ZNK7WebCore12RenderObject25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE(i1, i8, i3, i6);
 if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i8) | 0)) {
  STACKTOP = i5;
  return;
 }
 if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 856 >> 2] & 127](i7, i2 | 0);
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - i2;
 i7 = i1 + 12 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + (i2 << 1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  i7 = 0;
  STACKTOP = i5;
  return i7 | 0;
 }
 i8 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 48 >> 2] | 0;
 do {
  if ((i8 & 7168 | 0) != 2048) {
   if (((i8 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   if ((i8 & 57344 | 0) == 16384) {
    break;
   }
   if (((i8 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   } else {
    i7 = 0;
   }
   STACKTOP = i5;
   return i7 | 0;
  }
 } while (0);
 i8 = HEAP32[i1 + 40 >> 2] | 0;
 i1 = (HEAP32[i3 + 4 >> 2] | 0) - (HEAP32[i4 + 4 >> 2] | 0) | 0;
 HEAP32[i6 >> 2] = (HEAP32[i3 >> 2] | 0) - (HEAP32[i4 >> 2] | 0);
 HEAP32[i6 + 4 >> 2] = i1;
 i7 = __ZN7WebCore11RenderLayer23hitTestOverflowControlsERNS_13HitTestResultERKNS_8IntPointE(i8, i2, i6) | 0;
 STACKTOP = i5;
 return i7 | 0;
}
function __ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 192 >> 2] | 0;
 i5 = (i4 | 0) != 0;
 do {
  if (i5) {
   if ((HEAP8[i4 | 0] & 2) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   return;
  }
 } while (0);
 i6 = i2 + 20 | 0;
 do {
  if ((HEAP32[i6 >> 2] & 805306368 | 0) != 0) {
   i7 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i3) | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZNK7WebCore16RenderFlowThread33offsetFromLogicalTopOfFirstRegionEPKNS_11RenderBlockE(i1, i7, i2);
   return;
  }
 } while (0);
 if (!i5) {
  HEAP32[i1 >> 2] = 0;
  return;
 }
 i5 = i1 | 0;
 if ((HEAP32[i6 >> 2] & 8192 | 0) == 0) {
  HEAP32[i5 >> 2] = (HEAP32[i4 + 44 >> 2] | 0) - (HEAP32[i4 + 64 >> 2] | 0);
  return;
 } else {
  HEAP32[i5 >> 2] = (HEAP32[i4 + 48 >> 2] | 0) - (HEAP32[i4 + 68 >> 2] | 0);
  return;
 }
}
function __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11RenderBlock21ensureShapeInsideInfoEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 i4 = __ZN3WTF10fastMallocEj(56) | 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = 0;
 HEAP32[i4 + 12 >> 2] = i1;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 + 20 >> 2] = 0;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 >> 2] = __ZTVN7WebCore15ShapeInsideInfoE + 8;
 HEAP32[i4 + 28 >> 2] = 0;
 HEAP32[i4 + 32 >> 2] = 0;
 HEAP32[i4 + 36 >> 2] = 0;
 i5 = i4 + 40 | 0;
 HEAP8[i5] = HEAP8[i5] & -2;
 HEAP32[i4 + 44 >> 2] = 0;
 HEAP32[i4 + 48 >> 2] = 0;
 HEAP32[i4 + 52 >> 2] = 0;
 i5 = (__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0) + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i4;
 if ((i1 | 0) == 0) {
  i3 = HEAP32[i2 >> 2] | 0;
  return i3 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 63](i1);
 i3 = HEAP32[i2 >> 2] | 0;
 return i3 | 0;
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 3072 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 192 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = HEAP32[i2 + 20 >> 2] | 0;
 i3 = i2 + 28 | 0;
 if ((i1 | 0) != 0) {
  i4 = i1;
  while (1) {
   i1 = i4 + 8 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = i6 + 8 | 0;
   do {
    if (i7 >>> 0 > i4 >>> 0) {
     i8 = 6;
    } else {
     if ((i7 + 192 | 0) >>> 0 <= i4 >>> 0) {
      i8 = 6;
      break;
     }
     i9 = i6 | 0;
     HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
     HEAP32[i9 >> 2] = i4;
    }
   } while (0);
   if ((i8 | 0) == 6) {
    i8 = 0;
    __ZN3WTF8fastFreeEPv(i4);
   }
   if ((i5 | 0) == 0) {
    break;
   } else {
    i4 = i5;
   }
  }
 }
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  __ZdlPv(i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i4);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore11RenderBlock16textIndentOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i2 + 36 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
 i8 = HEAP8[i7 + 77 | 0] | 0;
 if ((i8 << 24 >> 24 | 0) == 10 | (i8 << 24 >> 24 | 0) == 2) {
  i8 = __ZNK7WebCore12RenderObject15containingBlockEv(i2 | 0) | 0;
  if ((HEAP32[i8 + 20 >> 2] & 4194304 | 0) == 0) {
   __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i5, i8 | 0);
  } else {
   __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i5, i8);
  }
  i9 = HEAP32[i5 >> 2] | 0;
  i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] | 0;
 } else {
  i9 = 0;
  i10 = i7;
 }
 HEAP32[i4 >> 2] = i9;
 __ZN7WebCore21minimumValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewEb(i1, i10 + 72 | 0, i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderBlock18desiredColumnCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 4194304 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[H_BASE + 1568 >> 2] | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i3 + 8 >> 2] | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i3 = i1;
 i1 = i3 + ~(i3 << 15) | 0;
 i3 = (i1 >>> 10 ^ i1) * 9 & -1;
 i1 = i3 >>> 6 ^ i3;
 i3 = i1 + ~(i1 << 11) | 0;
 i1 = i3 >>> 16 ^ i3;
 i3 = i5 & i1;
 i7 = i6 + (i3 << 3) | 0;
 if ((HEAP32[i7 >> 2] | 0) == (i4 | 0)) {
  i8 = i7;
 } else {
  i7 = (i1 >>> 23) + ~i1 | 0;
  i1 = i7 << 12 ^ i7;
  i7 = i1 >>> 7 ^ i1;
  i1 = i7 << 2 ^ i7;
  i7 = i1 >>> 20 ^ i1 | 1;
  i1 = 0;
  i9 = i3;
  while (1) {
   i3 = (i1 | 0) == 0 ? i7 : i1;
   i10 = i3 + i9 & i5;
   i11 = i6 + (i10 << 3) | 0;
   if ((HEAP32[i11 >> 2] | 0) == (i4 | 0)) {
    i8 = i11;
    break;
   } else {
    i1 = i3;
    i9 = i10;
   }
  }
 }
 i2 = HEAP32[(HEAP32[i8 + 4 >> 2] | 0) + 4 >> 2] | 0;
 return i2 | 0;
}
function __ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
 i1 = i2 + (i6 << 5) | 0;
 if (i5 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i5 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i5;
 if ((i6 | 0) != 0) {
  i6 = i2;
  i7 = i5;
  while (1) {
   _memcpy(i7 | 0, i6 | 0, 32) | 0;
   i5 = i6 + 32 | 0;
   if ((i5 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i5;
    i7 = i7 + 32 | 0;
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
function __ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0 | (i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  return;
 }
 if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 i2 = (HEAP32[i3 + 48 >> 2] | 0) >>> 28 & 7;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((i2 - 3 | 0) >>> 0 < 3 >>> 0) {
  __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv(i1) | 0;
  i4 = i1 + 164 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
  return;
 }
 if ((HEAP32[i1 + 164 >> 2] | 0) != 0) {
  return;
 }
 i4 = (HEAP32[i3 + 40 >> 2] & 1073741824 | 0) == 0;
 if ((i2 | 0) == 1) {
  i5 = i4 ? 14 : 11;
 } else {
  i5 = i4 ? 15 : 12;
 }
 __ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE(i1, i5, 0);
 return;
}
function __ZN7WebCore11RenderBlock27updateScrollInfoAfterLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i4 = (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i4 | 0) == 3 | (i4 | 0) == 1) {
  __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(HEAP32[i1 + 40 >> 2] | 0);
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[H_BASE + 1560 >> 2] | 0) == 0) {
  __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(HEAP32[i1 + 40 >> 2] | 0);
  STACKTOP = i2;
  return;
 } else {
  i4 = HEAP32[H_BASE + 1528 >> 2] | 0;
  HEAP32[i3 >> 2] = i1;
  __ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i2 + 8 | 0, i4 | 0, i3, i3);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderBlock30relayoutShapeDescendantIfMovedEPS0_NS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 if ((HEAP32[((HEAP32[i1 + 20 >> 2] & 8192 | 0) == 0 ? i3 + 4 | 0 : i3 | 0) >> 2] | 0) == 0 | (i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((__ZNK7WebCore11RenderBlock15shapeInsideInfoEv(i2) | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if ((__ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1) | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i2 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] | 4;
 __ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv(i2);
 if ((HEAP32[i1 >> 2] & 31 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 652 >> 2] & 63](i2 | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
  i5 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i5 = HEAP32[i1 + 36 >> 2] | 0;
 }
 __ZN7WebCore11RenderStyle31createAnonymousStyleWithDisplayEPKS0_NS_8EDisplayE(i3, i5, 1);
 i5 = i3 | 0;
 __ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE(HEAP32[i5 >> 2] | 0, 1);
 i3 = __ZN3WTF10fastMallocEj(116) | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 __ZN7WebCore15RenderBlockFlowC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i3, i6, i4);
 __ZN7WebCore13RenderElement15initializeStyleEv(i3);
 STACKTOP = i2;
 return i3 | 0;
}
function __ZN7WebCore11RenderBlock37updateBlockChildDirtyBitsBeforeLayoutEbRNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 do {
  if (i2) {
   i4 = 5;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 992 >> 2] & 511](i3) | 0) {
    if ((HEAP32[i1 + 20 >> 2] & 768 | 0) != 768) {
     i4 = 5;
     break;
    }
   }
   if (__ZNK7WebCore9RenderBox34hasViewportPercentageLogicalHeightEv(i3) | 0) {
    i4 = 5;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 5) {
   i1 = i3 + 20 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   if ((i5 & 4 | 0) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = i5 | 4;
  }
 } while (0);
 if (!i2) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 980 >> 2] & 511](i3) | 0)) {
  return;
 }
 __ZN7WebCore12RenderObject30setPreferredLogicalWidthsDirtyEbNS_15MarkingBehaviorE(i3 | 0, 1, 0);
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
function __ZNK7WebCore11RenderBlock14nodeForHitTestEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 20 | 0;
 if ((HEAP32[i2 >> 2] & 768 | 0) == 768) {
  i3 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  return i3 | 0;
 }
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
   i4 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i4) | 0) == 0) {
    i5 = 7;
    break;
   }
   i6 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i4) | 0;
   if ((HEAP32[i6 + 20 >> 2] & 128 | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i6 + 4 >> 2] | 0;
  } else {
   i5 = 7;
  }
 } while (0);
 do {
  if ((i5 | 0) == 7) {
   if ((HEAP32[i2 >> 2] & 128 | 0) != 0) {
    i7 = 0;
    break;
   }
   i7 = HEAP32[i1 + 4 >> 2] | 0;
  }
 } while (0);
 i3 = i7 | 0;
 return i3 | 0;
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
function __ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11RenderBlock18placeRunInIfNeededERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i3 = HEAP32[(HEAP32[i2 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i3 = HEAP32[i2 + 36 >> 2] | 0;
 }
 if ((HEAP32[i3 + 48 >> 2] & 31 | 0) == 3) {
  __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i2);
  return;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 if ((HEAP32[i3 + 20 >> 2] & 768 | 0) == 256) {
  i4 = HEAP32[(HEAP32[i3 + 8 >> 2] | 0) + 36 >> 2] | 0;
 } else {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
 }
 if ((HEAP32[i4 + 48 >> 2] & 31 | 0) != 3) {
  return;
 }
 __ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE(i1, i3);
 return;
}
function __ZNK7WebCore11RenderBlock29collapsedMarginBeforeForChildERKNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 856 >> 2] & 127](i1, i3);
   return;
  }
 } while (0);
 if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 784 >> 2] & 63](i1, i3 | 0, HEAP32[i2 + 36 >> 2] | 0);
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 860 >> 2] & 127](i1, i3);
  return;
 }
}
function __ZNK7WebCore11RenderBlock28collapsedMarginAfterForChildERKNS_9RenderBoxE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (((HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 44 >> 2] ^ HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 44 >> 2]) & 24576 | 0) != 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 860 >> 2] & 127](i1, i3);
   return;
  }
 } while (0);
 if ((HEAP32[i3 + 20 >> 2] & 8192 | 0) != 0 ^ (HEAP32[i2 + 20 >> 2] & 8192 | 0) != 0) {
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 788 >> 2] & 63](i1, i3 | 0, HEAP32[i2 + 36 >> 2] | 0);
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 856 >> 2] & 127](i1, i3);
  return;
 }
}
function __ZN7WebCore11RenderBlock28addOverflowFromBlockChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i5 = HEAP32[i1 + 28 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i3 | 0;
 i6 = i3 + 4 | 0;
 i7 = i5;
 while (1) {
  i5 = HEAP32[i7 + 20 >> 2] | 0;
  if (!((i5 & 64 | 0) != 0 | (i5 & 25165824 | 0) == 16777216)) {
   i5 = HEAP32[i7 + 48 >> 2] | 0;
   HEAP32[i1 >> 2] = HEAP32[i7 + 44 >> 2];
   HEAP32[i6 >> 2] = i5;
   __ZN7WebCore9RenderBox20addOverflowFromChildEPS0_RKNS_10LayoutSizeE(i4, i7, i3);
  }
  i7 = HEAP32[i7 + 16 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
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
function __ZNK7WebCore11RenderBlock24blockElementContinuationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1;
 while (1) {
  i1 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2 | 0) | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 6;
   break;
  }
  if ((HEAP32[i1 + 20 >> 2] & 1024 | 0) != 0) {
   i3 = 0;
   i4 = 7;
   break;
  }
  i5 = i1;
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
   i2 = i5;
  } else {
   i3 = i5;
   i4 = 8;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  return i3 | 0;
 } else if ((i4 | 0) == 7) {
  return i3 | 0;
 } else if ((i4 | 0) == 8) {
  return i3 | 0;
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
function __ZN7WebCore11RenderBlock19getSelectionGapInfoENS_12RenderObject14SelectionStateERbS3_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i5 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 1073741824;
 i1 = i5 >>> 30 & 255;
 if ((i2 | 0) == 2) {
  HEAP8[i3] = 1;
  i6 = 1;
  HEAP8[i4] = i6;
  return;
 }
 i7 = (i2 | 0) == 3;
 i8 = (i5 | 0) == 0;
 if (i8 | i7 ^ 1) {
  i9 = (i2 | 0) == 1 ? i1 ^ 1 : 0;
 } else {
  i9 = 1;
 }
 HEAP8[i3] = i9;
 if (!((i2 | 0) != 1 | i8)) {
  i6 = 1;
  HEAP8[i4] = i6;
  return;
 }
 i6 = i7 ? i1 ^ 1 : 0;
 HEAP8[i4] = i6;
 return;
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
function __ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 16);
 HEAP32[i1 >> 2] = H_BASE + 336;
 HEAP32[i1 + 92 >> 2] = 33554431;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlockC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore9RenderBoxC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 16);
 HEAP32[i1 >> 2] = H_BASE + 336;
 HEAP32[i1 + 92 >> 2] = 33554431;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 16);
 HEAP32[i1 >> 2] = H_BASE + 336;
 HEAP32[i1 + 92 >> 2] = 33554431;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlockC1ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1, i2, i3, i4) {
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
 __ZN7WebCore9RenderBoxC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj(i1 | 0, i2, i6, i4 | 16);
 HEAP32[i1 >> 2] = H_BASE + 336;
 HEAP32[i1 + 92 >> 2] = 33554431;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = i1 + 28 | 0;
 while (1) {
  i7 = HEAP32[i6 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i8 = 5;
   break;
  }
  if (__ZN7WebCore11RenderBlock10paintChildERNS_9RenderBoxERNS_9PaintInfoERKNS_11LayoutPointES4_b(i1, i7, i2, i3, i4, i5) | 0) {
   i6 = i7 + 16 | 0;
  } else {
   i8 = 6;
   break;
  }
 }
 if ((i8 | 0) == 5) {
  return;
 } else if ((i8 | 0) == 6) {
  return;
 }
}
function __ZN7WebCore11RenderBlock22insertPositionedObjectERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] & 511](i2 | 0) | 0) {
  return;
 }
 __ZN7WebCore11RenderBlock29insertIntoTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, i2, H_BASE + 1544, H_BASE + 1552);
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
function __ZN7WebCore11RenderBlock43prepareShapesAndPaginationBeforeBlockLayoutERb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 805306368 | 0) == 0) {
  i3 = 0;
 } else {
  i3 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i1 | 0) | 0;
 }
 if (__ZN7WebCore11RenderBlock29updateShapesBeforeBlockLayoutEv(i1) | 0) {
  HEAP8[i2] = 1;
 }
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore16RenderFlowThread36logicalWidthChangedInRegionsForBlockEPKNS_11RenderBlockERb(i3, i1, i2);
 return;
}
function __ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 do {
  if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0) != 0) {
   if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
    break;
   }
   __ZN7WebCore11RenderBlock22addChildToContinuationEPNS_12RenderObjectES2_(i1, i2, i3);
   return;
  }
 } while (0);
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 632 >> 2] & 63](i1, i2, i3);
 return;
}
function __ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
   i2 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0) == 0) {
    break;
   }
   i3 = (__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0) + 36 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   return i4 | 0;
  }
 } while (0);
 i3 = i1 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock21makeChildrenNonInlineEPNS_12RenderObjectE(i1, 0);
 if (!(__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0)) {
  return;
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP32[i2 + 24 >> 2] & 16 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 1076 >> 2] & 127](i2, i1);
 return;
}
function __ZN7WebCore11RenderBlock18setShapeInsideInfoENSt3__110unique_ptrINS_15ShapeInsideInfoENS1_14default_deleteIS3_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE(i1) | 0;
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i3 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZNK7WebCore11RenderBlock13hoverAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 do {
  if (__ZNK7WebCore12RenderObject16isAnonymousBlockEv(i1 | 0) | 0) {
   i2 = i1 | 0;
   if ((__ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0) == 0) {
    break;
   }
   i3 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i2) | 0;
   return i3 | 0;
  }
 } while (0);
 i3 = __ZNK7WebCore13RenderElement13hoverAncestorEv(i1 | 0) | 0;
 return i3 | 0;
}
function __ZN7WebCore11RenderBlock26addPercentHeightDescendantERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderBlock29insertIntoTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, i2, H_BASE + 1520, H_BASE + 1536);
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
function __ZN7WebCore11RenderBlock29removePercentHeightDescendantERNS_9RenderBoxE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, H_BASE + 1520, H_BASE + 1536);
 return;
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
function __ZN7WebCore11RenderBlock36removeFromDelayedUpdateScrollInfoSetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[H_BASE + 1528 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = i1;
 __ZN3WTF7HashSetIPN7WebCore11RenderBlockENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_(i4, i3) | 0;
 STACKTOP = i2;
 return;
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
function __ZNK7WebCore11RenderBlock9columnGapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, i4 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
 if ((HEAP8[i1 + 32 | 0] & 4) == 0) {
  d3 = +HEAPF32[i1 + 12 >> 2];
  i4 = ~~d3;
  return i4 | 0;
 } else {
  d3 = +HEAPF32[(__ZNK7WebCore11RenderStyle15fontDescriptionEv(i2) | 0) + 12 >> 2] + +.5;
  i4 = ~~d3;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderBlock22removePositionedObjectERNS_9RenderBoxE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE(i1, H_BASE + 1544, H_BASE + 1552);
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
function __ZN7WebCore11RenderBlock28updateShapesAfterBlockLayoutEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv(i1) | 0;
 if ((i3 | 0) == 0 | i2 ^ 1) {
  return;
 }
 i2 = i3 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
 return;
}
function __ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 _memset(i1 | 0, 0, 48) | 0;
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
function iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 return __ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE(i1 | 0, i2 | 0, i3 | 0, +d4, i5 | 0) | 0;
}
function __ZNK7WebCore11RenderBlock12avoidsFloatsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (__ZNK7WebCore9RenderBox12avoidsFloatsEv(i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0] | 0;
 if ((i3 & 2) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (i3 & 1) == 0;
 return i2 | 0;
}
function __ZN7WebCore11RenderBlock26startDelayUpdateScrollInfoEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 i1 = HEAP32[H_BASE + 1560 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = __ZN3WTF10fastMallocEj(20) | 0;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 1528 >> 2] = i2;
  i3 = HEAP32[H_BASE + 1560 >> 2] | 0;
 } else {
  i3 = i1;
 }
 HEAP32[H_BASE + 1560 >> 2] = i3 + 1;
 return;
}
function iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore11RenderBlock15updateDragStateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 __ZN7WebCore12RenderObject15updateDragStateEb(i1 | 0, i2);
 i3 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 436 >> 2] & 127](i3 | 0, i2);
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
function __ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 234881024 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore11RenderBlock15isSelectionRootEv(i1) | 0;
 return i2 | 0;
}
function __ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 i3 = i1 + 8 | 0;
 i2 = i3;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4 & -8;
 HEAP8[i3] = i4 & 255 & -16;
 HEAP32[i1 + 12 >> 2] = 1;
 return;
}
function __ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i2 = STACKTOP;
 i4 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore12RenderObject16clearNeedsLayoutEv(i1 | 0);
 STACKTOP = i2;
 return;
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
function __ZN7WebCore11RenderBlock29runInIsPlacedIntoSiblingBlockERNS_12RenderObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 768 | 0) == 256) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 24 >> 2] & 4 | 0) != 0;
 return i3 | 0;
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
function __ZNK7WebCore11RenderBlock25inlineElementContinuationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZNK7WebCore20RenderBoxModelObject12continuationEv(i1 | 0) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 20 >> 2] & 1024 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2;
 return i3 | 0;
}
function viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore11RenderBlock14hasLineIfEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZNK7WebCore4Node21isRootEditableElementEv(i3) | 0;
 return i2 | 0;
}
function __ZN7WebCore11BidiContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 HEAP32[i1 >> 2] = i3;
 return;
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
function __ZNK7WebCore11RenderBlock21availableLogicalWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 4194304 | 0) == 0) {
  __ZNK7WebCore9RenderBox19contentLogicalWidthEv(i1, i2 | 0);
  return;
 } else {
  __ZNK7WebCore11RenderBlock18desiredColumnWidthEv(i1, i2);
  return;
 }
}
function __ZN7WebCore21inlineDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = HEAP32[i3 + 4 >> 2];
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  return;
 }
}
function __ZN7WebCore20blockDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP32[i2 + 20 >> 2] & 8192 | 0) == 0) {
  HEAP32[i1 >> 2] = HEAP32[i3 >> 2];
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i3 + 4 >> 2];
  return;
 }
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
function viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return;
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
function __ZN7WebCore11RenderBlock24invalidateLineLayoutPathEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 92 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 & -1073741824 | 0) == -1073741824) {
  return;
 }
 HEAP32[i2 >> 2] = i1 & 1073741823;
 return;
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
function dynCall_iiiifi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 return FUNCTION_TABLE_iiiifi[i1 & 7](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0) | 0;
}
function b11(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 abort(11);
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
 FUNCTION_TABLE_viiiii[i1 & 31](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore11RenderBlock11deleteLinesEv(i1) {
 i1 = i1 | 0;
 __ZNK7WebCore8Document21existingAXObjectCacheEv(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
 return;
}
function vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv(i1 | 0, i2 | 0);
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
function vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9RenderBox18updateLogicalWidthEv(i1 | 0);
}
function ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9RenderBox11scrollWidthEv(i1 | 0) | 0;
}
function __ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return HEAP32[i2 + 16 >> 2] | 0;
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
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function b1(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(1);
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
function __ZN7WebCore11RenderBlockD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderBlockD2Ev(i1);
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
function b2(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(2);
 return 0;
}
function __ZN7WebCore11RenderBlock28hasPercentHeightContainerMapEv() {
 return (HEAP32[H_BASE + 1536 >> 2] | 0) != 0 | 0;
}
function __ZN7WebCore11RenderBlock17scrollbarsChangedEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
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
function b7(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(7);
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
function __ZNK7WebCore11RenderBlock14paginationUnitEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderBlock14containsFloatsEv(i1) {
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
 FUNCTION_TABLE_v[i1 & 3]();
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
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_,b0,__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_,b0,__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE,b0,__ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE,b0,__ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE,b0,viiiii___ZNK7WebCore9RenderBox19mapLocalToContainerEPKNS_22RenderLayerModelObjectERNS_14TransformStateEjPb__wrapper,b0,viiiii___ZNK7WebCore9RenderBox19offsetFromContainerEPNS_12RenderObjectERKNS_11LayoutPointEPb__wrapper,b0,__ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b,b0,__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0];
  var FUNCTION_TABLE_viiiiii = [b1,b1,viiiiii___ZN7WebCore9RenderBox16overflowClipRectERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyENS_10PaintPhaseE__wrapper,b1];
  var FUNCTION_TABLE_iiiifi = [b2,b2,iiiifi___ZN7WebCore9RenderBox13logicalScrollENS_22ScrollLogicalDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,iiiifi___ZN7WebCore9RenderBox6scrollENS_15ScrollDirectionENS_17ScrollGranularityEfPPNS_7ElementE__wrapper,b2,b2,b2];
  var FUNCTION_TABLE_vi = [b3,b3,vi___ZN7WebCore12RenderObject24setNeedsBoundariesUpdateEv__wrapper,b3,__ZN7WebCore12RenderObject17updateFromElementEv,b3,__ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv,b3,vi___ZN7WebCore9RenderBox15updateFromStyleEv__wrapper,b3,vi___ZN7WebCore13RenderElement21willBeRemovedFromTreeEv__wrapper,b3,__ZN7WebCore11RenderBlock11deleteLinesEv,b3,__ZN7WebCore11RenderBlockD0Ev,b3,__ZN7WebCore11RenderBlockD2Ev,b3,__ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv,b3,__ZN7WebCore11RenderBlock23addOverflowFromChildrenEv,b3,vi___ZN7WebCore13RenderElement16insertedIntoTreeEv__wrapper,b3,__ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv,b3,vi___ZN7WebCore9RenderBox18updateLogicalWidthEv__wrapper,b3,__ZN7WebCore11RenderBlock15willBeDestroyedEv
  ,b3,__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv,b3,__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv,b3,vi___ZN7WebCore9RenderBox19updateLogicalHeightEv__wrapper,b3,__ZN7WebCore11RenderBlock15calcColumnWidthEv,b3,__ZN7WebCore11RenderBlock6layoutEv,b3,__ZN7WebCore11RenderBlock17updateFirstLetterEv,b3,__ZN7WebCore9RenderBox14stopAutoscrollEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_vii = [b4,b4,vii___ZN7WebCore9RenderBox10autoscrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox24minPreferredLogicalWidthEv__wrapper,b4,vii___ZN7WebCore9RenderBox13setScrollLeftEi__wrapper,b4,vii___ZNK7WebCore9RenderBox10offsetLeftEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject12paddingStartEv,b4,vii___ZN7WebCore12RenderObject19addAnnotatedRegionsERN3WTF6VectorINS_20AnnotatedRegionValueELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE,b4,__ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE,b4,__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv,b4,vii___ZNK7WebCore9RenderBox37containingBlockLogicalWidthForContentEv__wrapper,b4,vii___ZN7WebCore9RenderBox12setScrollTopEi__wrapper,b4,vii___ZNK7WebCore9RenderBox28computeReplacedLogicalHeightEv__wrapper,b4,vii___ZN7WebCore12RenderObject22absoluteFocusRingQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEE__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv
  ,b4,__ZNK7WebCore9RenderBox9marginTopEv,b4,vii___ZN7WebCore20RenderBoxModelObject17setSelectionStateENS_12RenderObject14SelectionStateE__wrapper,b4,__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE,b4,vii___ZNK7WebCore12RenderObject14localTransformEv__wrapper,b4,__ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_,b4,__ZN7WebCore11RenderBlock15updateDragStateEb,b4,__ZNK7WebCore9RenderBox13intrinsicSizeEv,b4,vii___ZN7WebCore9RenderBox9panScrollERKNS_8IntPointE__wrapper,b4,vii___ZNK7WebCore9RenderBox9offsetTopEv__wrapper,b4,vii___ZNK7WebCore12RenderObject29repaintRectInLocalCoordinatesEv__wrapper,b4,vii___ZNK7WebCore12RenderObject17strokeBoundingBoxEv__wrapper,b4,vii___ZNK7WebCore9RenderBox24maxPreferredLogicalWidthEv__wrapper,b4,__ZNK7WebCore20RenderBoxModelObject10paddingTopEv,b4,__ZNK7WebCore20RenderBoxModelObject10paddingEndEv,b4,__ZNK7WebCore9RenderBox18visualOverflowRectEv
  ,b4,__ZNK7WebCore9RenderBox11marginRightEv,b4,__ZNK7WebCore9RenderBox20collapsedMarginAfterEv,b4,__ZNK7WebCore9RenderBox11offsetWidthEv,b4,__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE,b4,__ZNK7WebCore20RenderBoxModelObject12paddingRightEv,b4,__ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv,b4,__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv,b4,__ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE,b4,__ZNK7WebCore9RenderBox10marginLeftEv,b4,__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv,b4,__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv,b4,__ZNK7WebCore9RenderBox17borderBoundingBoxEv,b4,vii___ZN7WebCore9RenderBox24repaintOverhangingFloatsEb__wrapper,b4,__ZNK7WebCore9RenderBox12marginBottomEv
  ,b4,vii___ZNK7WebCore12RenderObject17objectBoundingBoxEv__wrapper,b4,__ZNK7WebCore9RenderBox12offsetHeightEv,b4,__ZNK7WebCore11RenderBlock21availableLogicalWidthEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiiiiii = [b5,b5,__ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5,__ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5,__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE,b5];
  var FUNCTION_TABLE_ii = [b6,b6,__ZNK7WebCore12RenderObject19isSVGResourceFilterEv,b6,__ZNK7WebCore11RenderBlock14firstLineBlockEv,b6,__ZNK7WebCore12RenderObject13isSVGTextPathEv,b6,__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv,b6,__ZNK7WebCore12RenderObject10isRubyTextEv,b6,__ZNK7WebCore12RenderObject6isRubyEv,b6,ii___ZNK7WebCore9RenderBox9scrollTopEv__wrapper,b6,__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv,b6,__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv,b6,__ZNK7WebCore11RenderBlock13hoverAncestorEv,b6,ii___ZNK7WebCore9RenderBox11scrollWidthEv__wrapper,b6,ii___ZNK7WebCore12RenderObject22localToParentTransformEv__wrapper,b6,__ZNK7WebCore12RenderObject14isTableCaptionEv,b6,__ZNK7WebCore12RenderObject8isWidgetEv
  ,b6,__ZNK7WebCore12RenderObject11isTextFieldEv,b6,__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv,b6,__ZNK7WebCore12RenderObject18isRenderFullScreenEv,b6,__ZNK7WebCore13RenderElement13lastChildSlowEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderRightEv,b6,__ZNK7WebCore12RenderObject10isMenuListEv,b6,ii___ZNK7WebCore9RenderBox10scrollLeftEv__wrapper,b6,__ZNK7WebCore12RenderObject9isSVGRootEv,b6,__ZNK7WebCore12RenderObject16isEmbeddedObjectEv,b6,__ZNK7WebCore20RenderBoxModelObject12borderBottomEv,b6,__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv,b6,__ZNK7WebCore12RenderObject15isSVGInlineTextEv,b6,__ZNK7WebCore12RenderObject7isMeterEv,b6,__ZNK7WebCore12RenderObject14isSVGContainerEv,b6,ii___ZNK7WebCore12RenderObject28canBeReplacedWithInlineRunInEv__wrapper
  ,b6,__ZNK7WebCore12RenderObject22isSVGResourceContainerEv,b6,__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv,b6,__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv,b6,__ZNK7WebCore12RenderObject7isQuoteEv,b6,__ZNK7WebCore11RenderBlock14containsFloatsEv,b6,__ZNK7WebCore12RenderObject10isListItemEv,b6,__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv,b6,__ZNK7WebCore12RenderObject10isSVGImageEv,b6,__ZNK7WebCore12RenderObject15isDetailsMarkerEv,b6,__ZNK7WebCore11RenderBlock15canHaveChildrenEv,b6,__ZNK7WebCore12RenderObject16isRenderTableColEv,b6,__ZNK7WebCore12RenderObject7isVideoEv,b6,__ZNK7WebCore12RenderObject10isProgressEv,b6,__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv
  ,b6,__ZNK7WebCore12RenderObject13isCombineTextEv,b6,__ZNK7WebCore11RenderBlock10renderNameEv,b6,__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv,b6,__ZNK7WebCore12RenderObject5isWBREv,b6,__ZNK7WebCore12RenderObject22isSVGViewportContainerEv,b6,__ZNK7WebCore13RenderElement14firstChildSlowEv,b6,ii___ZNK7WebCore9RenderBox22verticalScrollbarWidthEv__wrapper,b6,__ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv,b6,__ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv,b6,__ZNK7WebCore12RenderObject18isRenderFlowThreadEv,b6,__ZNK7WebCore12RenderObject7isEmptyEv,b6,__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv,b6,__ZNK7WebCore12RenderObject7isFrameEv,b6,ii___ZNK7WebCore9RenderBox24pixelSnappedOffsetHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isRenderMathMLRowEv
  ,b6,__ZNK7WebCore12RenderObject18canBeSelectionLeafEv,b6,__ZNK7WebCore11RenderBlock14paginationUnitEv,b6,__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv,b6,__ZNK7WebCore12RenderObject19isFileUploadControlEv,b6,__ZNK7WebCore12RenderObject9isReplicaEv,b6,__ZNK7WebCore9RenderBox14hasControlClipEv,b6,__ZNK7WebCore12RenderObject7isMediaEv,b6,__ZNK7WebCore12RenderObject10isSVGShapeEv,b6,__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv,b6,__ZNK7WebCore11RenderBlock19virtualContinuationEv,b6,__ZNK7WebCore12RenderObject14isRenderButtonEv,b6,__ZNK7WebCore12RenderObject8isSliderEv,b6,__ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv,b6,__ZNK7WebCore11RenderBlock17firstLineBaselineEv,b6,__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv
  ,b6,ii___ZN7WebCore9RenderBox36computeBackgroundIsKnownToBeObscuredEv__wrapper,b6,__ZNK7WebCore11RenderBlock12avoidsFloatsEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLMathEv,b6,ii___ZNK7WebCore9RenderBox33needsPreferredWidthsRecalculationEv__wrapper,b6,ii___ZNK7WebCore9RenderBox28canBeProgramaticallyScrolledEv__wrapper,b6,ii___ZNK7WebCore12RenderObject24canHaveGeneratedChildrenEv__wrapper,b6,__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv,b6,ii___ZNK7WebCore12RenderObject14caretMaxOffsetEv__wrapper,b6,__ZNK7WebCore12RenderObject13isSliderThumbEv,b6,__ZNK7WebCore12RenderObject13isTextControlEv,b6,__ZNK7WebCore12RenderObject9isSVGTextEv,b6,__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv,b6,__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv,b6,__ZNK7WebCore11RenderBlock8hasLinesEv,b6,__ZNK7WebCore12RenderObject14isRenderIFrameEv
  ,b6,__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv,b6,__ZNK7WebCore12RenderObject11isTableCellEv,b6,__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv,b6,__ZNK7WebCore12RenderObject12isRenderGridEv,b6,__ZNK7WebCore12RenderObject9isListBoxEv,b6,__ZNK7WebCore12RenderObject9isSVGPathEv,b6,ii___ZN7WebCore12RenderObject28toRenderSVGResourceContainerEv__wrapper,b6,ii___ZNK7WebCore9RenderBox23pixelSnappedOffsetWidthEv__wrapper,b6,__ZNK7WebCore12RenderObject16isRenderSVGBlockEv,b6,__ZNK7WebCore12RenderObject13isRenderImageEv,b6,__ZNK7WebCore12RenderObject18isRenderMathMLRootEv,b6,ii___ZNK7WebCore12RenderObject14caretMinOffsetEv__wrapper,b6,__ZNK7WebCore11RenderBlock14hasLineIfEmptyEv,b6,__ZNK7WebCore12RenderObject6lengthEv,b6,__ZNK7WebCore12RenderObject10isTableRowEv
  ,b6,__ZNK7WebCore12RenderObject13isFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject10isFrameSetEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderAfterEv,b6,__ZNK7WebCore9RenderBox13requiresLayerEv,b6,__ZNK7WebCore12RenderObject10isFieldsetEv,b6,__ZNK7WebCore12RenderObject11isSVGInlineEv,b6,__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv,b6,__ZNK7WebCore12RenderObject18isSVGForeignObjectEv,b6,ii___ZNK7WebCore9RenderBox21hasRelativeDimensionsEv__wrapper,b6,__ZNK7WebCore12RenderObject9isRubyRunEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderEndEv,b6,__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv,b6,__ZNK7WebCore12RenderObject10isRubyBaseEv,b6,__ZNK7WebCore12RenderObject14isRenderRegionEv
  ,b6,ii___ZNK7WebCore9RenderBox12scrollHeightEv__wrapper,b6,__ZNK7WebCore17CachedImageClient18resourceClientTypeEv,b6,__ZN7WebCore12RenderObject21needsBoundariesUpdateEv,b6,__ZNK7WebCore12RenderObject10isTextAreaEv,b6,__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv,b6,__ZNK7WebCore20RenderBoxModelObject9borderTopEv,b6,__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv,b6,__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv,b6,__ZNK7WebCore12RenderObject7isImageEv,b6,__ZNK7WebCore12RenderObject9isCounterEv,b6,ii___ZNK7WebCore9RenderBox24hasRelativeLogicalHeightEv__wrapper,b6,__ZNK7WebCore12RenderObject17isSVGGradientStopEv,b6,__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv,b6,__ZNK7WebCore12RenderObject8isCanvasEv,b6,__ZNK7WebCore20RenderBoxModelObject10borderLeftEv
  ,b6,__ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv,b6,__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv,b6,__ZNK7WebCore12RenderObject12isListMarkerEv,b6,__ZNK7WebCore12RenderObject20isStretchingChildrenEv,b6,__ZNK7WebCore20RenderBoxModelObject11borderStartEv,b6,__ZNK7WebCore12RenderObject7isTableEv,b6,__ZNK7WebCore12RenderObject14isTableSectionEv,b6,ii___ZNK7WebCore12RenderObject15innerLineHeightEv__wrapper,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6,b6
  ,b6,b6,b6];
  var FUNCTION_TABLE_iiii = [b7,b7,iiii___ZNK7WebCore12RenderObject9getCursorERKNS_11LayoutPointERNS_6CursorE__wrapper,b7,__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE,b7,iiii___ZNK7WebCore20RenderBoxModelObject36boxShadowShouldBeAppliedToBackgroundENS_24BackgroundBleedAvoidanceEPNS_13InlineFlowBoxE__wrapper,b7,iiii___ZNK7WebCore9RenderBox22pushMappingToContainerEPKNS_22RenderLayerModelObjectERNS_17RenderGeometryMapE__wrapper,b7,iiii___ZNK7WebCore9RenderBox33foregroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectEj__wrapper,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viii = [b8,b8,viii___ZNK7WebCore9RenderBox23mapAbsoluteToLocalPointEjRNS_14TransformStateE__wrapper,b8,viii___ZNK7WebCore9RenderBox29clippedOverflowRectForRepaintEPKNS_22RenderLayerModelObjectE__wrapper,b8,__ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE,b8,viii___ZNK7WebCore9RenderBox27computeReplacedLogicalWidthENS_22ShouldComputePreferredE__wrapper,b8,__ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE,b8,viii___ZN7WebCore9RenderBox19paintBoxDecorationsERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,viii___ZN7WebCore12RenderObject12imageChangedEPNS_11CachedImageEPKNS_7IntRectE__wrapper,b8,__ZN7WebCore11RenderBlock17scrollbarsChangedEbb,b8,__ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE,b8,__ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb,b8,__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b,b8,__ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE
  ,b8,viii___ZNK7WebCore9RenderBox22availableLogicalHeightENS_26AvailableLogicalHeightTypeE__wrapper,b8,__ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_,b8,__ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb,b8,__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE,b8,__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE,b8,viii___ZN7WebCore9RenderBox9paintMaskERNS_9PaintInfoERKNS_11LayoutPointE__wrapper,b8,__ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE,b8,__ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE,b8,__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE,b8,__ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_,b8,__ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_,b8,__ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE,b8,__ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE
  ,b8,__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE,b8,__ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE,b8];
  var FUNCTION_TABLE_v = [b9,b9,v___ZN7WebCore9RenderBox15createInlineBoxEv__wrapper,b9];
  var FUNCTION_TABLE_iiiii = [b10,b10,__ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_,b10];
  var FUNCTION_TABLE_viiiiiiiiii = [b11,b11,__ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE,b11];
  var FUNCTION_TABLE_iii = [b12,b12,__ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE,b12,__ZNK7WebCore11RenderBlock15requiresColumnsEi,b12,iii___ZN7WebCore12RenderObject15willRenderImageEPNS_11CachedImageE__wrapper,b12,iii___ZNK7WebCore12RenderObject14previousOffsetEi__wrapper,b12,iii___ZNK7WebCore9RenderBox33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE__wrapper,b12,__ZNK7WebCore11RenderBlock19inlineBlockBaselineENS_17LineDirectionModeE,b12,iii___ZNK7WebCore12RenderObject10nextOffsetEi__wrapper,b12,iii___ZNK7WebCore12RenderObject33previousOffsetForBackwardDeletionEi__wrapper,b12,__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb,b12,b12,b12,b12,b12,b12,b12,b12,b12,b12
  ,b12,b12,b12];
  var FUNCTION_TABLE_iiiiii = [b13,b13,__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE,b13,__ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE,b13,iiiiii___ZN7WebCore12RenderObject16nodeAtFloatPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10FloatPointENS_13HitTestActionE__wrapper,b13];
  var FUNCTION_TABLE_viiii = [b14,b14,__ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_,b14,viiii___ZNK7WebCore12RenderObject26computeFloatRectForRepaintEPKNS_22RenderLayerModelObjectERNS_9FloatRectEb__wrapper,b14,__ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj,b14,__ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE,b14,viiii___ZNK7WebCore9RenderBox23outlineBoundsForRepaintEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE__wrapper,b14,__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb,b14,__ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b14,__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb,b14,viiii___ZNK7WebCore9RenderBox21computeRectForRepaintEPKNS_22RenderLayerModelObjectERNS_10LayoutRectEb__wrapper,b14,__ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj,b14,__ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE,b14,__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb,b14,viiii___ZNK7WebCore9RenderBox20computeLogicalHeightENS_10LayoutUnitES1_RNS0_27LogicalExtentComputedValuesE__wrapper,b14,b14
  ,b14,b14,b14];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_viiiiii: dynCall_viiiiii, dynCall_iiiifi: dynCall_iiiifi, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iiiii: dynCall_iiiii, dynCall_viiiiiiiiii: dynCall_viiiiiiiiii, dynCall_iii: dynCall_iii, dynCall_iiiiii: dynCall_iiiiii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_viiiiii": invoke_viiiiii, "invoke_iiiifi": invoke_iiiifi, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iiiii": invoke_iiiii, "invoke_viiiiiiiiii": invoke_viiiiiiiiii, "invoke_iii": invoke_iii, "invoke_iiiiii": invoke_iiiiii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "_floorf": _floorf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZTVN7WebCore26SVGTextRunRenderingContextE": __ZTVN7WebCore26SVGTextRunRenderingContextE, "__ZN7WebCore7TextRun21s_allowsRoundingHacksE": __ZN7WebCore7TextRun21s_allowsRoundingHacksE, "__ZTVN7WebCore15ShapeInsideInfoE": __ZTVN7WebCore15ShapeInsideInfoE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iiiifi = Module["dynCall_iiiifi"] = asm["dynCall_iiiifi"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_viiiiiiiiii = Module["dynCall_viiiiiiiiii"] = asm["dynCall_viiiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11RenderBlock6layoutEv","__ZNK7WebCore11RenderBlock14firstLineBlockEv","__ZNK7WebCore12RenderObject13isSVGTextPathEv","__ZNK7WebCore11RenderBlock35marginIntrinsicLogicalWidthForChildERNS_9RenderBoxE","__ZN7WebCore11RenderBlock8addChildEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject25isRenderNamedFlowFragmentEv","__ZNK7WebCore11RenderBlock24logicalLeftOffsetForLineENS_10LayoutUnitEbS1_","__ZN7WebCore11RenderBlock26logicalLeftSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE","__ZN7WebCore11RenderBlock16simplifiedLayoutEv","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZN7WebCore12RenderObject17updateFromElementEv","__ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj","__ZNK7WebCore12RenderObject15isSVGInlineTextEv","__ZNK7WebCore12RenderObject7isMeterEv","__ZNK7WebCore12RenderObject14isSVGContainerEv","__ZNK7WebCore12RenderObject7isQuoteEv","__ZNK7WebCore11RenderBlock14containsFloatsEv","__ZNK7WebCore11RenderBlock26isInlineBlockOrInlineTableEv","__ZNK7WebCore12RenderObject15isDetailsMarkerEv","__ZN7WebCore11RenderBlock43createAnonymousColumnSpanWithParentRendererEPKNS_12RenderObjectE","__ZNK7WebCore13RenderElement14isChildAllowedERKNS_12RenderObjectERKNS_11RenderStyleE","__ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextERKNS_11RenderStyleEj","__ZNK7WebCore12RenderObject13isCombineTextEv","__ZNK7WebCore9RenderBox11marginAfterEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject23isRenderMathMLUnderOverEv","__ZNK7WebCore12RenderObject5isWBREv","__ZNK7WebCore12RenderObject22isSVGViewportContainerEv","__ZN7WebCore11RenderBlockD2Ev","__ZN7WebCore11RenderBlock19paintColumnContentsERNS_9PaintInfoERKNS_11LayoutPointEb","__ZN7WebCore13RenderElement26dirtyLinesFromChangedChildEPNS_12RenderObjectE","__ZN7WebCore11RenderBlock13hitTestFloatsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointE","__ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev","__ZN7WebCore11RenderBlock16positionForPointERKNS_11LayoutPointE","__ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockE","__ZN7WebCore11RenderBlock23addOverflowFromChildrenEv","__ZN7WebCore11RenderBlock29runInIsPlacedIntoSiblingBlockERNS_12RenderObjectE","__ZN7WebCore11RenderBlock43prepareShapesAndPaginationBeforeBlockLayoutERb","__ZN7WebCore11RenderBlock14localCaretRectEPNS_9InlineBoxEiPNS_10LayoutUnitE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE9appendRunEv","__ZNK7WebCore11RenderBlock24shouldPaintSelectionGapsEv","__ZN7WebCore11RenderBlock26startDelayUpdateScrollInfoEv","__ZN7WebCore43positionForPointRespectingEditingBoundariesERNS_11RenderBlockERNS_9RenderBoxERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isReplicaEv","__ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EERKS4_DnEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SC_SE_SG_SM_SJ_EEEEOT0_OT1_","__ZNK7WebCore11RenderBlock32logicalLeftOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_","__ZN7WebCore11RenderBlock37updateShapeInsideInfoAfterStyleChangeEPKNS_10ShapeValueES3_","__ZNK7WebCore11RenderBlock22outlineStyleForRepaintEv","__ZNK7WebCore12RenderObject11isTextFieldEv","__ZN7WebCore11RenderBlock11paintFloatsERNS_9PaintInfoERKNS_11LayoutPointEb","__ZNK7WebCore12RenderObject10isRubyBaseEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj16EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZNK7WebCore11RenderBlock19adjustForColumnRectERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore11RenderBlock16textIndentOffsetEv","__ZNK7WebCore11RenderBlock30canCollapseAnonymousBlockChildEv","__ZN7WebCore11RenderBlock26addVisualOverflowFromThemeEv","__ZN7WebCore11RenderBlock26simplifiedNormalFlowLayoutEv","__ZN7WebCore11RenderBlock36determineLogicalLeftPositionForChildERNS_9RenderBoxENS0_20ApplyLayoutDeltaModeE","__ZNK7WebCore11RenderBlock29collapsedMarginBeforeForChildERKNS_9RenderBoxE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27lowerExplicitEmbeddingLevelE14UCharDirection","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_","__ZN7WebCore11RenderBlock18setPaginationStrutENS_10LayoutUnitE","__ZNK7WebCore12RenderObject27isSVGTransformableContainerEv","__ZNK7WebCore12RenderObject16isEmbeddedObjectEv","__ZN7WebCore11RenderBlock18placeRunInIfNeededERNS_12RenderObjectE","__ZN7WebCore11RenderBlock35markShapeInsideDescendantsForLayoutEv","__ZNK7WebCore12RenderObject9isSVGTextEv","__ZNK7WebCore12RenderObject23createsAnonymousWrapperEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E3addINS_17HashMapTranslatorISO_SJ_EES4_NS_10PassOwnPtrISE_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SG_SI_SJ_SO_SL_EEEEOT0_OT1_","__ZN7WebCore11RenderBlock15willBeDestroyedEv","__ZNK7WebCore11RenderBlock39logicalOffsetFromShapeAncestorContainerEPKS0_","__ZN7WebCore11RenderBlock30markPositionedObjectsForLayoutEv","__ZN7WebCore11RenderBlock35computeInlinePreferredLogicalWidthsERNS_10LayoutUnitES2_","__ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E6rehashEiPSD_","__ZNK7WebCore12RenderObject9isSVGPathEv","__ZN7WebCore11RenderBlock24isPointInOverflowControlERNS_13HitTestResultERKNS_11LayoutPointES5_","__ZNK7WebCore11RenderBlock31adjustLogicalRightOffsetForLineENS_10LayoutUnitEb","__ZN7WebCore12RenderObject23setNeedsTransformUpdateEv","__ZNK7WebCore9RenderBox29frameRectForStickyPositioningEv","__ZNK7WebCore9RenderBox12marginBottomEv","__ZN7WebCore11RenderBlock29addOverflowFromInlineChildrenEv","__ZN7WebCore11RenderBlock37updateBlockChildDirtyBitsBeforeLayoutEbRNS_9RenderBoxE","__ZN7WebCore11RenderBlock29updateShapesBeforeBlockLayoutEv","__ZNK7WebCore9RenderBox13requiresLayerEv","__ZNK7WebCore12RenderObject22isRenderMultiColumnSetEv","__ZN7WebCore11RenderBlock14paintSelectionERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderBlock33clearPercentHeightDescendantsFromERNS_9RenderBoxE","__ZN7WebCore11RenderBlock9splitFlowEPNS_12RenderObjectEPS0_S2_PNS_20RenderBoxModelObjectE","__ZN7WebCore23OverflowEventDispatcherD2Ev","__ZN7WebCore11RenderBlock15calcColumnWidthEv","__ZNK7WebCore9RenderBox21collapsedMarginBeforeEv","__ZN7WebCore11RenderBlock15styleWillChangeENS_15StyleDifferenceERKNS_11RenderStyleE","__ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKtiRKNS_11RenderStyleEj","__ZNK7WebCore11RenderBlock17pageLogicalOffsetEv","__ZN7WebCore11RenderBlock17updateFirstLetterEv","__ZN7WebCore11RenderBlock22removePositionedObjectERNS_9RenderBoxE","__ZNK7WebCore20RenderBoxModelObject13paddingBottomEv","__ZN7WebCore23OverflowEventDispatcherC2EPKNS_11RenderBlockE","__ZN7WebCore11RenderBlock25collapseAnonymousBoxChildEPS0_S1_","__ZNK7WebCore12RenderObject7isImageEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6rehashEiPS6_","__ZN3WTF6VectorIN7WebCore9FloatQuadELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore12RenderObject17isSVGGradientStopEv","__ZN7WebCore11RenderBlock23removePositionedObjectsEPS0_NS_20ContainingBlockStateE","__ZN7WebCore11BidiContextD2Ev","__ZNK7WebCore11RenderBlock34computeBlockPreferredLogicalWidthsERNS_10LayoutUnitES2_","__ZNK7WebCore11RenderBlock21isSelfCollapsingBlockEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS9_EENS_10HashTraitsIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISG_EENSA_IS4_EENS_7HashMapIS4_SF_SJ_NSC_IS4_EENSC_ISF_EEE18KeyValuePairTraitsESL_E6rehashEiPSG_","__ZN7WebCore11RenderBlock17blockSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeENS_10LayoutUnitES8_S8_S8_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore12RenderObject7isEmptyEv","__ZN7WebCore11RenderBlock10paintCaretERNS_9PaintInfoERKNS_11LayoutPointENS_9CaretTypeE","__ZNK7WebCore12RenderObject19isSVGResourceFilterEv","__ZNK7WebCore11RenderBlock25inlineElementContinuationEv","__ZN7WebCore11RenderBlock13selectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore12RenderObject10isRubyTextEv","__ZN7WebCore11RenderStyle27inheritColumnPropertiesFromEPS0_","__ZNK7WebCore11RenderBlock24percentHeightDescendantsEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EERKS4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN7WebCore11RenderBlock24invalidateLineLayoutPathEv","__ZNK7WebCore20RenderBoxModelObject12paddingStartEv","__ZN7WebCore20CachedResourceClient14notifyFinishedEPNS_14CachedResourceE","__ZN7WebCore11RenderBlock29removePercentHeightDescendantERNS_9RenderBoxE","__ZNK7WebCore11RenderBlock17firstLineBaselineEv","__ZNK7WebCore11RenderBlock29logicalLeftFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZNK7WebCore12RenderObject18isRenderFullScreenEv","__ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4findERKS4_","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE23commitExplicitEmbeddingEv","__ZN7WebCore11RenderBlock11removeChildERNS_12RenderObjectE","__ZNK7WebCore11RenderBlock24blockElementContinuationEv","__ZN7WebCore11RenderBlock11nodeAtPointERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCoreL14bidiNextSharedINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEPNS_12RenderObjectERNS_13RenderElementES6_PT_NS_19EmptyInlineBehaviorEPb","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore13RootInlineBoxELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E3addINS_21ListHashSetTranslatorISA_EES4_PNS_24ListHashSetNodeAllocatorIS4_Lj256EEEEENS_18HashTableAddResultINS_17HashTableIteratorIS6_S6_S7_SB_SD_SD_EEEEOT0_OT1_","__ZN7WebCore20InlineMinMaxIterator4nextEv","__ZN7WebCore11RenderBlock23layoutPositionedObjectsEbb","__ZN7WebCoreL41removeBlockFromDescendantAndContainerMapsEPNS_11RenderBlockERPN3WTF7HashMapIPKS0_NS2_6OwnPtrINS2_11ListHashSetIPNS_9RenderBoxELj16ENS2_7PtrHashIS9_EEEEEENSA_IS5_EENS2_10HashTraitsIS5_EENSF_ISD_EEEERPNS3_IPKS8_NS6_INS2_7HashSetIS1_NSA_IS1_EENSF_IS1_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISR_EEEE","__ZN7WebCore11RenderBlock25createFirstLetterRendererEPNS_12RenderObjectEPNS_10RenderTextE","__ZNK7WebCore12RenderObject19isRenderMathMLBlockEv","__ZNK7WebCore12RenderObject10isSVGImageEv","__ZNK7WebCore9RenderBox20collapsedMarginAfterEv","__ZNK7WebCore12RenderObject16isRenderTableColEv","__ZNK7WebCore12RenderObject24isRenderMultiColumnBlockEv","__ZNK7WebCore12RenderObject16isAnonymousBlockEv","__ZNK7WebCore11RenderBlock10renderNameEv","__ZN7WebCore11RenderBlock26addPercentHeightDescendantERNS_9RenderBoxE","__ZN7WebCore11RenderBlockC2ERNS_7ElementEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore11RenderBlock5cloneEv","__ZNK7WebCore9RenderBox9marginTopEv","__ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS1_10ColumnInfoEEENS_7PtrHashIS4_EENS_10HashTraitsIS4_EENSA_IS7_EEE4takeERKS4_","__ZNK7WebCore20RenderBoxModelObject13paddingBeforeEv","__ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv","__ZNK7WebCore11RenderBlock17positionedObjectsEv","__ZN7WebCore11LayoutStateD1Ev","__ZN7WebCore11RenderBlock27selectionGapRectsForRepaintEPKNS_22RenderLayerModelObjectE","__ZN7WebCore11RenderBlock22clipOutFloatingObjectsERS0_PKNS_9PaintInfoERKNS_11LayoutPointERKNS_10LayoutSizeE","__ZNK7WebCore9RenderBox14hasControlClipEv","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS4_EEEEED2Ev","__ZNK7WebCore9RenderBox27shouldComputeSizeAsReplacedEv","__ZN7WebCore11RenderBlock40markFixedPositionObjectForLayoutIfNeededERNS_12RenderObjectE","__ZNK7WebCore12RenderObject8isSliderEv","__ZNK7WebCore12RenderObject19isRenderMathMLSpaceEv","__ZNK7WebCore9RenderBox19contentLogicalWidthEv","__ZN7WebCore11RenderBlock5paintERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderBlock40createAnonymousColumnsWithParentRendererEPKNS_12RenderObjectE","__ZNK7WebCore11RenderBlock15shapeInsideInfoEv","__ZNK7WebCore12RenderObject13isTextControlEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E6rehashEiPS9_","__ZNK7WebCore12RenderObject10isTextAreaEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore9RenderBoxELj16EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6removeERKS6_","__ZNK7WebCore12RenderObject11isTableCellEv","__ZNK7WebCore12RenderObject12isRenderGridEv","__ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E8reinsertEOSE_","__ZNK7WebCore20RenderBoxModelObject10paddingEndEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_S3_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZN7WebCore11RenderBlock29insertIntoTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE","__ZN7WebCore11RenderBlock47computeStartPositionDeltaForChildAvoidingFloatsERKNS_9RenderBoxENS_10LayoutUnitEPNS_12RenderRegionE","__ZNK7WebCore11RenderBlock38adjustIntrinsicLogicalWidthsForColumnsERNS_10LayoutUnitES2_","__ZNK7WebCore12RenderObject29isRenderFullScreenPlaceholderEv","__ZNK7WebCore12RenderObject23isTextControlInnerBlockEv","__ZN7WebCore11RenderBlock18continuationBeforeEPNS_12RenderObjectE","__ZN7WebCore11RenderBlock22addChildToContinuationEPNS_12RenderObjectES2_","__ZN7WebCore11RenderBlock27logicalRightSelectionOffsetERS0_NS_10LayoutUnitERKNS_28LogicalSelectionOffsetCachesE","__ZN7WebCore11RenderBlock19updateHitTestResultERNS_13HitTestResultERKNS_11LayoutPointE","__ZNK7WebCore9RenderBox11offsetWidthEv","__ZN7WebCore11RenderBlock22setLogicalLeftForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE","__ZNK7WebCore11RenderBlock30adjustLogicalLeftOffsetForLineENS_10LayoutUnitEb","__ZNK7WebCore12RenderObject10isFieldsetEv","__ZN7WebCore11RenderBlock18setShapeInsideInfoENSt3__110unique_ptrINS_15ShapeInsideInfoENS1_14default_deleteIS3_EEEE","__ZNK7WebCore9RenderBox9marginEndEPKNS_11RenderStyleE","__ZNK7WebCore11RenderBlock31offsetFromLogicalTopOfFirstPageEv","__ZNK7WebCore12RenderObject18isRenderFlowThreadEv","__ZNK7WebCore11RenderBlock15isSelectionRootEv","__ZNK7WebCore9RenderBox20contentLogicalHeightEv","__ZN7WebCore11RenderBlock19inlineSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZN7WebCore11RenderBlock22updateFirstLetterStyleEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject21isRenderMathMLScriptsEv","__ZNK7WebCore11RenderBlock33expandsToEncloseOverhangingFloatsEv","__ZN3WTF7HashMapIPKN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS8_EEEEEENS9_IS4_EENS_10HashTraitsIS4_EENSE_ISC_EEE4takeERKS4_","__ZNK7WebCore17CachedImageClient18resourceClientTypeEv","__ZNK7WebCore9RenderBox10marginLeftEv","__ZN3WTF7HashMapIPN7WebCore11RenderBlockENS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS7_EEEEEENS8_IS3_EENS_10HashTraitsIS3_EENSD_ISB_EEE4takeERKS3_","__ZN7WebCore11RenderBlock19clearLayoutOverflowEv","__ZN7WebCore11RenderBlock25updateColumnInfoFromStyleEPNS_11RenderStyleE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF6VectorIPN7WebCore7BidiRunELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore11RenderBlock23selectionRectForRepaintEPKNS_22RenderLayerModelObjectEb","__ZN7WebCore11RenderBlock32moveAllChildrenIncludingFloatsToEPS0_b","__ZNK7WebCore20RenderBoxModelObject10borderLeftEv","__ZNK7WebCore12RenderObject7isTableEv","__ZN7WebCore11RenderBlock30relayoutShapeDescendantIfMovedEPS0_NS_10LayoutSizeE","__ZNK7WebCore11RenderBlock45adjustStartEdgeForWritingModeIncludingColumnsERNS_10LayoutRectE","__ZN7WebCore11RenderBlock33makeChildrenAnonymousColumnBlocksEPNS_12RenderObjectEPS0_S2_","__ZNK7WebCore11RenderBlock13absoluteQuadsERN3WTF6VectorINS_9FloatQuadELj0ENS1_15CrashOnOverflowEEEPb","_strlen","__ZN7WebCore11RenderBlock26hasPercentHeightDescendantERNS_9RenderBoxE","__ZNK7WebCore12RenderObject6isRubyEv","__ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E6rehashEiPSE_","__ZN7WebCore11RenderBlock18blockSelectionGapsERS0_RKNS_11LayoutPointERKNS_10LayoutSizeERNS_10LayoutUnitES9_S9_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore12RenderObject8isWidgetEv","__ZN7WebCore11RenderBlock10paintChildERNS_9RenderBoxERNS_9PaintInfoERKNS_11LayoutPointES4_b","__ZNK7WebCore20RenderBoxModelObject11borderRightEv","__ZNK7WebCore11RenderBlock10columnInfoEv","__ZN7WebCore11RenderBlock33markForPaginationRelayoutIfNeededEv","__ZN7WebCore11RenderBlock37addChildIgnoringAnonymousColumnBlocksEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject13isFlexibleBoxEv","__ZNK7WebCore11RenderBlock16adjustForColumnsERNS_10LayoutSizeERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject22isRenderSVGModelObjectEv","__ZNK7WebCore9RenderBox18visualOverflowRectEv","__ZNK7WebCore20RenderBoxModelObject12paddingAfterEv","__ZNK7WebCore15RenderTableCell22styleOrColLogicalWidthEv","__ZNK7WebCore11RenderBlock20hasMarginBeforeQuirkERKNS_9RenderBoxE","__ZNK7WebCore12RenderObject24isRenderMathMLSquareRootEv","__ZNK7WebCore12RenderObject20isSVGHiddenContainerEv","__ZNK7WebCore11RenderBlock18desiredColumnWidthEv","__ZNK7WebCore12RenderObject20isStretchingChildrenEv","__ZNK7WebCore11RenderBlock15canHaveChildrenEv","__ZN7WebCore11RenderBlock13paintContentsERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject7isVideoEv","__ZN7WebCore11RenderBlock43createAnonymousWithParentRendererAndDisplayEPKNS_12RenderObjectENS_8EDisplayE","__ZNK7WebCore13RenderElement14firstChildSlowEv","__ZNK7WebCore11RenderBlock13hoverAncestorEv","__ZN3WTF11ListHashSetIPN7WebCore9RenderBoxELj16ENS_7PtrHashIS3_EEE4findERKS3_","__ZN7WebCore11RenderBlock29computePreferredLogicalWidthsEv","__ZN7WebCoreL27notifyObserverEnteredObjectINS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEEEEvPT_PNS_12RenderObjectE","__ZN7WebCore10RenderView15pushLayoutStateERNS_9RenderBoxERKNS_10LayoutSizeENS_10LayoutUnitEbPNS_10ColumnInfoE","__ZNK7WebCore11RenderBlock19regionAtBlockOffsetENS_10LayoutUnitE","__ZNK7WebCore12RenderObject21isRenderScrollbarPartEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E3addINS_17HashMapTranslatorISM_SG_EES3_NS_10PassOwnPtrISB_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS3_SD_SF_SG_SM_SJ_EEEEOT0_OT1_","__ZNK7WebCore11RenderBlock30estimateRegionRangeForBoxChildERKNS_9RenderBoxE","__ZNK7WebCore11RenderBlock30logicalRightFloatOffsetForLineENS_10LayoutUnitES1_S1_","__ZN7WebCore11RenderBlock27updateScrollInfoAfterLayoutEv","__ZN7WebCore11RenderBlock25paintsContinuationOutlineEPNS_12RenderInlineE","__ZNK7WebCore11RenderBlock14paginationUnitEv","__ZN7WebCore11RenderBlock21setLogicalTopForChildERNS_9RenderBoxENS_10LayoutUnitENS0_20ApplyLayoutDeltaModeE","__ZN7WebCore11RenderBlock28updateShapesAfterBlockLayoutEb","__ZNK7WebCore11RenderBlock28updateRegionRangeForBoxChildERKNS_9RenderBoxE","__ZNK7WebCore11RenderBlock10lineHeightEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore12RenderObject7isMediaEv","__ZNK7WebCore11RenderBlock19virtualContinuationEv","__ZNK7WebCore11RenderBlock14hasLineIfEmptyEv","__ZNK7WebCore9RenderBox13intrinsicSizeEv","__ZNK7WebCore12RenderObject11isSVGInlineEv","__ZNK7WebCore11RenderBlock12avoidsFloatsEv","__ZN3WTF9HashTableIPNS_15ListHashSetNodeIPN7WebCore12RenderInlineELj256EEES6_NS_17IdentityExtractorENS_28ListHashSetNodeHashFunctionsINS_7PtrHashIS4_EEEENS_10HashTraitsIS6_EESD_E6expandEPS6_","__ZNK7WebCore12RenderObject18isSVGForeignObjectEv","__ZN7WebCore11RenderBlock15computeOverflowENS_10LayoutUnitEb","__ZN7WebCore11RenderBlock37checkForPaginationLogicalHeightChangeERNS_10LayoutUnitERbS3_","__ZNK7WebCore9RenderBox32computeIntrinsicRatioInformationERNS_9FloatSizeERdRb","__ZNK7WebCore12RenderObject10isMenuListEv","__ZN7WebCore11RenderBlock36removeFromDelayedUpdateScrollInfoSetEv","__ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4takeERKS4_","__ZN7WebCore11RenderBlock23logicalLeftSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore11RenderBlock28collapsedMarginAfterForChildERKNS_9RenderBoxE","__ZNK7WebCore12RenderObject28isSVGResourceFilterPrimitiveEv","__ZNK7WebCore11RenderBlock8hasLinesEv","__ZN7WebCore11RenderBlock22insertPositionedObjectERNS_9RenderBoxE","__ZNK7WebCore20RenderBoxModelObject12borderBeforeEv","__ZN7WebCore11RenderBlock16paintColumnRulesERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore11RenderBlock26startOffsetForLineInRegionENS_10LayoutUnitEbPNS_12RenderRegionES1_","__ZNK7WebCore12RenderObject10isSVGShapeEv","__ZN3WTF9HashTableIPKN7WebCore9RenderBoxENS_12KeyValuePairIS4_NS_6OwnPtrINS1_10ColumnInfoEEEEENS_24KeyValuePairKeyExtractorIS9_EENS_7PtrHashIS4_EENS_7HashMapIS4_S8_SD_NS_10HashTraitsIS4_EENSF_IS8_EEE18KeyValuePairTraitsESG_E3addINS_17HashMapTranslatorISJ_SD_EES4_NS_10PassOwnPtrIS7_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S9_SB_SD_SJ_SG_EEEEOT0_OT1_","__ZN7WebCore11RenderBlockC2ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEj","__ZNK7WebCore12RenderObject19isSnapshottedPlugInEv","__ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NS_6OwnPtrINS_11ListHashSetIPNS1_9RenderBoxELj16ENS_7PtrHashIS9_EEEEEEEENS_24KeyValuePairKeyExtractorISE_EENSA_IS4_EENS_7HashMapIS4_SD_SH_NS_10HashTraitsIS4_EENSJ_ISD_EEE18KeyValuePairTraitsESK_E3addINS_17HashMapTranslatorISN_SH_EES4_NS_10PassOwnPtrISC_EEEENS_18HashTableAddResultINS_17HashTableIteratorIS4_SE_SG_SH_SN_SK_EEEEOT0_OT1_","__ZNK7WebCore11RenderBlock15paginationStrutEv","__ZN3WTF9HashTableIPKN7WebCore11RenderBlockENS_12KeyValuePairIS4_NSt3__110unique_ptrINS1_19RenderBlockRareDataENS6_14default_deleteIS8_EEEEEENS_24KeyValuePairKeyExtractorISC_EENS_7PtrHashIS4_EENS_7HashMapIS4_SB_SG_NS_10HashTraitsIS4_EENSI_ISB_EEE18KeyValuePairTraitsESJ_E6rehashEiPSC_","__ZNK7WebCore12RenderObject9isListBoxEv","__ZNK7WebCore11RenderBlock32minLineHeightForReplacedRendererEbNS_10LayoutUnitE","__ZNK7WebCore9RenderBox11marginRightEv","__ZN7WebCoreL14ensureRareDataEPKNS_11RenderBlockE","__ZN7WebCore11RenderBlock19paintInlineChildrenERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderBlock26addContinuationWithOutlineEPNS_12RenderInlineE","__ZNK7WebCore12RenderObject18isRenderMathMLRootEv","__ZNK7WebCore11RenderBlock17offsetForContentsERNS_11LayoutPointE","__ZNK7WebCore12RenderObject10isFrameSetEv","__ZNK7WebCore20RenderBoxModelObject11borderAfterEv","__ZN7WebCore11RenderBlock34positionForPointWithInlineChildrenERKNS_11LayoutPointE","__ZN7WebCore11RenderBlockD0Ev","__ZNK7WebCore13RenderElement13lastChildSlowEv","__ZN3WTF7HashMapIPKN7WebCore9RenderBoxENS_6OwnPtrINS_7HashSetIPNS1_11RenderBlockENS_7PtrHashIS8_EENS_10HashTraitsIS8_EEEEEENS9_IS4_EENSB_IS4_EENSB_ISE_EEE4findERKS4_","__ZN7WebCore11RenderBlock11layoutBlockEbNS_10LayoutUnitE","__ZN7WebCore11RenderBlock21hitTestInlineChildrenERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZNK7WebCore12RenderObject14isRenderRegionEv","__ZNK7WebCore11RenderBlock27logicalLeftOffsetForContentEPNS_12RenderRegionE","__ZNK7WebCore12RenderObject22isRenderMathMLOperatorEv","__ZN7WebCore11RenderBlock34moveRunInUnderSiblingBlockIfNeededERNS_12RenderObjectE","__ZN7WebCore11RenderBlock11paintObjectERNS_9PaintInfoERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject28isRenderMathMLScriptsWrapperEv","__ZNK7WebCore20RenderBoxModelObject9borderTopEv","__ZNK7WebCore11RenderBlock21availableLogicalWidthEv","__ZNK7WebCore12RenderObject20isRenderMathMLFencedEv","__ZNK7WebCore12RenderObject23isDeprecatedFlexibleBoxEv","__ZN7WebCore11RenderBlock34addFocusRingRectsForInlineChildrenERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZN3WTF6OwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEEaSERKNS_10PassOwnPtrIS7_EE","__ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv","__ZN7WebCore11RenderBlock21ensureShapeInsideInfoEv","__ZN7WebCore11RenderBlock32addOverflowFromPositionedObjectsEv","__ZNK7WebCore11RenderBlock30blockBeforeWithinSelectionRootERNS_10LayoutSizeE","__ZNK7WebCore9RenderBox17borderBoundingBoxEv","__ZN7WebCore11RenderBlock17addFocusRingRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointEPKNS_22RenderLayerModelObjectE","__ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE","__ZN7WebCore14IsolateTracker21addFakeRunIfNecessaryERNS_12RenderObjectEjRNS_12BidiResolverINS_14InlineIteratorENS_7BidiRunEEE","__ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontERKN3WTF6StringERKNS_11RenderStyleEjj","__ZNK7WebCore20RenderBoxModelObject11borderStartEv","__ZN7WebCore9RenderBox14stopAutoscrollEv","__ZN7WebCore21inlineDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE","__ZN7WebCore11RenderBlock13paintChildrenERNS_9PaintInfoERKNS_11LayoutPointES2_b","__ZN7WebCore11RenderBlock16constructTextRunEPNS_12RenderObjectERKNS_4FontEPKNS_10RenderTextEjjRKNS_11RenderStyleEj","__ZNK7WebCore9RenderBox12offsetHeightEv","__ZNK7WebCore12RenderObject22isSVGResourceContainerEv","__ZNK7WebCore9RenderBox11marginStartEPKNS_11RenderStyleE","__ZNK7WebCore11RenderBlock19inlineBlockBaselineENS_17LineDirectionModeE","__ZNK7WebCore11RenderBlock32createAnonymousBoxWithSameTypeAsEPKNS_12RenderObjectE","__ZN7WebCore11RenderBlock25logicalRectToPhysicalRectERKNS_11LayoutPointERKNS_10LayoutRectE","__ZNK7WebCore12RenderObject23isRenderNamedFlowThreadEv","__ZNK7WebCore11RenderBlock15requiresColumnsEi","__ZNK7WebCore11RenderBlock28logicalRightOffsetForContentEPNS_12RenderRegionE","__ZN7WebCore11RenderBlock14hitTestColumnsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore11RenderBlock17scrollbarsChangedEbb","__ZN7WebCore18ColumnRectIteratorC2ERKNS_11RenderBlockE","__ZN7WebCore11RenderStyle13setColumnSpanENS_10ColumnSpanE","__ZNK7WebCore12RenderObject18isRenderMathMLMathEv","__ZN7WebCore11RenderBlock28hasPercentHeightContainerMapEv","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_","_memcpy","__ZN7WebCore11RenderBlock11splitBlocksEPS0_S1_S1_PNS_12RenderObjectEPNS_20RenderBoxModelObjectE","__ZNK7WebCore11RenderBlock34flipForWritingModeIncludingColumnsERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject9isSVGRootEv","__ZN7WebCore11RenderBlock26layoutSpecialExcludedChildEb","__ZNK7WebCore20RenderBoxModelObject12borderBottomEv","__ZNK7WebCore12RenderObject18canBeSelectionLeafEv","__ZNK7WebCore11RenderBlock14nodeForHitTestEv","__ZN7WebCore9RenderBox30overflowClipRectForChildLayersERKNS_11LayoutPointEPNS_12RenderRegionENS_29OverlayScrollbarSizeRelevancyE","__ZN3WTF10PassOwnPtrINS_11ListHashSetIPN7WebCore12RenderInlineELj256ENS_7PtrHashIS4_EEEEED2Ev","__ZNK7WebCore12RenderObject10isListItemEv","__ZN7WebCore28LogicalSelectionOffsetCachesC2ERNS_11RenderBlockERKS0_","__ZNK7WebCore11RenderBlock25rectWithOutlineForRepaintEPKNS_22RenderLayerModelObjectENS_10LayoutUnitE","__ZNK7WebCore11RenderBlock29computeIntrinsicLogicalWidthsERNS_10LayoutUnitES2_","__ZN7WebCore11RenderBlock11deleteLinesEv","__ZNK7WebCore11RenderBlock25logicalRightOffsetForLineENS_10LayoutUnitEbS1_","__ZNK7WebCore12RenderObject10isProgressEv","__ZN7WebCore11RenderBlock22createReplacementRunInERNS_20RenderBoxModelObjectE","__ZN7WebCore9ShapeInfoINS_11RenderBlockEE12setShapeSizeENS_10LayoutUnitES3_","__ZNK7WebCore11RenderBlock29computeRegionRangeForBoxChildERKNS_9RenderBoxE","__ZNK7WebCore12RenderObject7isFrameEv","__ZNK7WebCore12RenderObject17isRenderMathMLRowEv","__ZNK7WebCore11RenderBlock21layoutShapeInsideInfoEv","__ZNK7WebCore20RenderBoxModelObject11paddingLeftEv","__ZNK7WebCore12RenderObject16isRenderSVGBlockEv","__ZN7WebCore11RenderBlock45dirtyForLayoutFromPercentageHeightDescendantsEv","__ZNK7WebCore12RenderObject19isFileUploadControlEv","__ZN7WebCore11RenderBlock28removeLeftoverAnonymousBlockEPS0_","__ZN7WebCore11RenderBlock15updateDragStateEb","__ZN7WebCore11RenderBlock14styleDidChangeENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZNK7WebCore12RenderObject14isRenderButtonEv","__ZN7WebCore11RenderBlock27moveRunInToOriginalPositionERNS_12RenderObjectE","__ZN7WebCore11RenderBlock28addOverflowFromBlockChildrenEv","__ZNK7WebCore12RenderObject8isCanvasEv","__ZN7WebCore11RenderBlock30columnsBlockForSpanningElementEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject14isTableCaptionEv","__ZNK7WebCore12RenderObject13isSliderThumbEv","__ZN3WTF9HashTableIPN7WebCore11RenderBlockENS_12KeyValuePairIS3_NS_6OwnPtrINS_11ListHashSetIPNS1_12RenderInlineELj256ENS_7PtrHashIS8_EEEEEEEENS_24KeyValuePairKeyExtractorISD_EENS9_IS3_EENS_7HashMapIS3_SC_SG_NS_10HashTraitsIS3_EENSI_ISC_EEE18KeyValuePairTraitsESJ_E8reinsertEOSD_","__ZNK7WebCore11RenderBlock11hasRareDataEv","__ZNK7WebCore11RenderBlock18desiredColumnCountEv","__ZN7WebCore11RenderBlock21makeChildrenNonInlineEPNS_12RenderObjectE","__ZNK7WebCore9RenderBox12marginBeforeEPKNS_11RenderStyleE","_memset","__ZNK7WebCore11RenderBlock16baselinePositionENS_12FontBaselineEbNS_17LineDirectionModeENS_16LinePositionModeE","__ZNK7WebCore11RenderBlock27adjustPointToColumnContentsERNS_11LayoutPointE","__ZNK7WebCore11RenderBlock20adjustRectForColumnsERNS_10LayoutRectE","__ZNK7WebCore9RenderBox15controlClipRectERKNS_11LayoutPointE","__ZN3WTF9HashTableIPN7WebCore11RenderBlockES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6rehashEiPS3_","__ZN7WebCore11RenderBlock20setPageLogicalOffsetENS_10LayoutUnitE","__ZNK7WebCore12RenderObject13isRenderImageEv","__ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore12RenderObject6lengthEv","__ZN7WebCore11RenderBlock28addChildIgnoringContinuationEPNS_12RenderObjectES2_","__ZN7WebCore11RenderBlock29removeFromTrackedRendererMapsERNS_9RenderBoxERPN3WTF7HashMapIPKS0_NS3_6OwnPtrINS3_11ListHashSetIPS1_Lj16ENS3_7PtrHashIS9_EEEEEENSA_IS6_EENS3_10HashTraitsIS6_EENSF_ISD_EEEERPNS4_IPKS1_NS7_INS3_7HashSetIPS0_NSA_ISO_EENSF_ISO_EEEEEENSA_ISM_EENSF_ISM_EENSF_ISS_EEEE","__ZNK7WebCore12RenderObject10isTableRowEv","__ZN7WebCore11RenderBlock27finishDelayUpdateScrollInfoEv","__ZN7WebCore11RenderBlock15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestActionE","__ZN7WebCore20CachedResourceClient34deprecatedDidReceiveCachedResourceEPNS_14CachedResourceE","__ZN7WebCore12BidiResolverINS_14InlineIteratorENS_7BidiRunEE5embedE14UCharDirectionNS_19BidiEmbeddingSourceE","__ZNK7WebCore20RenderBoxModelObject12paddingRightEv","__ZN7WebCore11RenderBlock31addChildToAnonymousColumnBlocksEPNS_12RenderObjectES2_","__ZNK7WebCore12RenderObject9isRubyRunEv","__ZNK7WebCore20RenderBoxModelObject9borderEndEv","__ZN7WebCore11RenderBlock19getSelectionGapInfoENS_12RenderObject14SelectionStateERbS3_","__ZNK7WebCore12RenderObject14isRenderIFrameEv","__ZNK7WebCore11RenderBlock13absoluteRectsERN3WTF6VectorINS_7IntRectELj0ENS1_15CrashOnOverflowEEERKNS_11LayoutPointE","__ZNK7WebCore12RenderObject22isRenderMathMLFractionEv","__ZN7WebCore11RenderBlock24logicalRightSelectionGapERS0_RKNS_11LayoutPointERKNS_10LayoutSizeEPNS_12RenderObjectENS_10LayoutUnitESA_SA_RKNS_28LogicalSelectionOffsetCachesEPKNS_9PaintInfoE","__ZNK7WebCore11RenderBlock19hasMarginAfterQuirkERKNS_9RenderBoxE","__ZN7WebCore11RenderBlock25paintContinuationOutlinesERNS_9PaintInfoERKNS_11LayoutPointE","__ZN7WebCore11RenderBlock22containingColumnsBlockEb","__ZN7WebCore11RenderBlock37removePercentHeightDescendantIfNeededERNS_9RenderBoxE","__ZN7WebCore12RenderObject21needsBoundariesUpdateEv","__ZN7WebCore11RenderBlock12imageChangedEPKvPKNS_7IntRectE","__ZN7WebCore11RenderBlock32updateLogicalWidthAndColumnWidthEv","__ZN7WebCore11RenderBlock20childBecameNonInlineEPNS_12RenderObjectE","__ZNK7WebCore12RenderObject9isCounterEv","__ZN7WebCoreL13isEmptyInlineERKNS_12RenderInlineE","__ZN7WebCore11RenderBlock16computeShapeSizeEv","__ZN7WebCore11RenderBlock29setDesiredColumnCountAndWidthEiNS_10LayoutUnitE","__ZN3WTF7HashSetIPN7WebCore11RenderBlockENS_7PtrHashIS3_EENS_10HashTraitsIS3_EEE6removeERKS3_","__ZN3WTF6VectorIN7WebCore7IntRectELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore20RenderBoxModelObject10paddingTopEv","__ZNK7WebCore12RenderObject36requiresForcedStyleRecalcPropagationEv","__ZN7WebCore20blockDirectionOffsetERNS_11RenderBlockERKNS_10LayoutSizeE","__ZNK7WebCore12RenderObject12isListMarkerEv","__ZNK7WebCore11RenderBlock9columnGapEv","__ZNK7WebCore12RenderObject14isTableSectionEv"]

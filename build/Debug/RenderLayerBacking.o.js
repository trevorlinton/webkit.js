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
H_BASE = parentModule["_malloc"](496 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 496;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore18RenderLayerBackingC1ERNS_11RenderLayerE;
var __ZN7WebCore18RenderLayerBackingD1Ev;
/* memory initializer */ allocate([100,114,97,119,115,67,111,110,116,101,110,116,0,0,0,0,83,99,114,111,108,108,101,100,32,67,111,110,116,101,110,116,115,0,0,0,0,0,0,0,83,99,114,111,108,108,105,110,103,32,99,111,110,116,97,105,110,101,114,0,0,0,0,0,77,97,115,107,0,0,0,0,115,99,114,111,108,108,32,99,111,114,110,101,114,0,0,0,118,101,114,116,105,99,97,108,32,115,99,114,111,108,108,98,97,114,0,0,0,0,0,0,104,111,114,105,122,111,110,116,97,108,32,115,99,114,111,108,108,98,97,114,0,0,0,0,67,104,105,108,100,32,99,108,105,112,112,105,110,103,32,76,97,121,101,114,0,0,0,0,114,101,112,97,105,110,116,82,101,99,116,115,0,0,0,0,98,97,99,107,103,114,111,117,110,100,67,111,108,111,114,0,65,110,99,101,115,116,111,114,32,99,108,105,112,112,105,110,103,32,76,97,121,101,114,0,84,105,108,101,100,66,97,99,107,105,110,103,32,70,108,97,116,116,101,110,105,110,103,32,76,97,121,101,114,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_fii(index,a1,a2) {
  try {
    return Module["dynCall_fii"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_vid(index,a1,a2) {
  try {
    Module["dynCall_vid"](index,a1,a2);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_iiiiiid(index,a1,a2,a3,a4,a5,a6) {
  try {
    return Module["dynCall_iiiiiid"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viid(index,a1,a2,a3) {
  try {
    Module["dynCall_viid"](index,a1,a2,a3);
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
function invoke_di(index,a1) {
  try {
    return Module["dynCall_di"](index,a1);
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
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var __ZN7WebCore9HTMLNames7bodyTagE=env.__ZN7WebCore9HTMLNames7bodyTagE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18RenderLayerBackingE=(H_BASE+352)|0;
  var __ZN7WebCore18RenderLayerBacking30m_creatingPrimaryGraphicsLayerE=(H_BASE+488)|0;
  var __ZTVN7WebCore23TransformAnimationValueE=(H_BASE+256)|0;
  var __ZTVN7WebCore20FilterAnimationValueE=(H_BASE+288)|0;
  var __ZTVN7WebCore19FloatAnimationValueE=(H_BASE+320)|0;
  var __ZTVN7WebCore14AnimationValueE=(H_BASE+440)|0;
  var __ZZN7WebCore9FloatRect12infiniteRectEvE12infiniteRect=(H_BASE+472)|0;
  var __ZGVZN7WebCore9FloatRect12infiniteRectEvE12infiniteRect=(H_BASE+496)|0;
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
  var invoke_fii=env.invoke_fii;
  var invoke_vif=env.invoke_vif;
  var invoke_vid=env.invoke_vid;
  var invoke_iiiiiid=env.invoke_iiiiiid;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_iiiiiii=env.invoke_iiiiiii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viid=env.invoke_viid;
  var invoke_fi=env.invoke_fi;
  var invoke_di=env.invoke_di;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var _strncmp=env._strncmp;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _strcmp=env._strcmp;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0, i97 = 0, i98 = 0, i99 = 0, i100 = 0, i101 = 0, i102 = 0, i103 = 0, i104 = 0, i105 = 0, i106 = 0, i107 = 0, i108 = 0, i109 = 0, i110 = 0, i111 = 0, i112 = 0, i113 = 0, i114 = 0, d115 = +0, i116 = 0, i117 = 0, i118 = 0, i119 = 0, i120 = 0, i121 = 0, i122 = 0, i123 = 0, i124 = 0, i125 = 0, i126 = 0, i127 = 0, i128 = 0, i129 = 0, i130 = 0, i131 = 0, i132 = 0, i133 = 0, i134 = 0, i135 = 0, i136 = 0, i137 = 0, i138 = 0, d139 = +0, d140 = +0, d141 = +0, d142 = +0, d143 = +0, i144 = 0, i145 = 0, i146 = 0, i147 = 0, i148 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 40 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i19 | 0;
 i21 = i19;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = i19 | 0;
 i23 = i19;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = i24 | 0;
 i26 = i24;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i29 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i30 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = i32;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i36 = i35;
 i37 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i38 = i37;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i41 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i42 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i47 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i48 = i47 | 0;
 i49 = i47;
 i50 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i51 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i54 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i55 = i54;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i57 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i58 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i59 = i58;
 i60 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i61 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i62 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i63 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i64 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i65 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i66 = STACKTOP;
 STACKTOP = STACKTOP + 12 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i67 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i68 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i69 = i68;
 i70 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i71 = i70;
 i72 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i73 = i72;
 i74 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i75 = i74;
 i76 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i77 = i76;
 i78 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i79 = i78;
 i80 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i81 = i80;
 i82 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i83 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i84 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i85 = i84;
 i86 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i87 = i86;
 i88 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i89 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i90 = i89;
 i91 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i92 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i93 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i94 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i95 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i96 = i95;
 i97 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i98 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i99 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i100 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i101 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i102 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i103 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i104 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i105 = i104;
 i106 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i107 = i1 + 4 | 0;
 i108 = HEAP32[i107 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i108 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i109 = i108;
   i110 = 4;
  } else {
   if ((HEAP8[i108 + 21 | 0] & 16) != 0) {
    i109 = i108;
    i110 = 4;
    break;
   }
   i111 = __ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i108) | 0;
   i112 = HEAP32[i107 >> 2] | 0;
   if (i111) {
    i109 = i112;
    i110 = 4;
   } else {
    i113 = i112;
   }
  }
 } while (0);
 do {
  if ((i110 | 0) == 4) {
   if ((HEAP8[i109 + 20 | 0] & 4) == 0) {
    i113 = i109;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i109 = __ZNK7WebCore12RenderObject9animationEv(HEAP32[i113 + 32 >> 2] | 0) | 0;
 if (!(__ZNK7WebCore19AnimationController39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i109, HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0, 345, 1) | 0)) {
  __ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE(i1, HEAP32[(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0);
 }
 i109 = __ZNK7WebCore12RenderObject9animationEv(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) | 0;
 if (__ZNK7WebCore19AnimationController39isRunningAcceleratedAnimationOnRendererEPNS_13RenderElementENS_13CSSPropertyIDEb(i109, HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0, 102, 1) | 0) {
  i114 = i1 + 16 | 0;
 } else {
  i109 = HEAP32[i107 >> 2] | 0;
  i113 = i1 + 16 | 0;
  i108 = HEAP32[i113 >> 2] | 0;
  i112 = HEAP32[(HEAP32[i108 >> 2] | 0) + 116 >> 2] | 0;
  i111 = i109;
  d115 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i109 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
  L13 : while (1) {
   i109 = i111;
   while (1) {
    i109 = HEAP32[i109 + 36 >> 2] | 0;
    if ((i109 | 0) == 0) {
     break L13;
    }
    i116 = i109 + 32 | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i116 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i109 + 21 | 0] & 16) != 0) {
     break;
    }
    if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i109) | 0) {
     break;
    }
   }
   if ((HEAP32[i109 + 208 >> 2] | 0) != 0) {
    break;
   }
   i111 = i109;
   d115 = d115 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i116 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
  }
  FUNCTION_TABLE_vif[i112 & 1](i108, d115);
  i114 = i113;
 }
 __ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE(i1, HEAP32[(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0);
 i113 = __ZNK7WebCore18RenderLayerBacking33isSimpleContainerCompositingLayerEv(i1) | 0;
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(HEAP32[i107 >> 2] | 0, 0);
 i108 = HEAP32[i114 >> 2] | 0;
 i112 = HEAP32[(HEAP32[i108 >> 2] | 0) + 96 >> 2] | 0;
 i116 = HEAP32[i107 >> 2] | 0;
 if ((HEAP8[i116 + 22 | 0] & 8) == 0) {
  i117 = __ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i116) | 0;
 } else {
  i117 = 1;
 }
 FUNCTION_TABLE_vii[i112 & 15](i108, i117);
 i117 = HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0;
 i108 = (HEAP32[i117 + 36 >> 2] | 0) + 20 | 0;
 if ((HEAP32[(HEAP32[i108 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
  i118 = 0;
 } else {
  i118 = (HEAP32[i117 + 20 >> 2] & 262144 | 0) == 0;
 }
 i117 = HEAP32[i114 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i117 >> 2] | 0) + 84 >> 2] & 15](i117, i118);
 i117 = HEAP32[i114 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i117 >> 2] | 0) + 112 >> 2] & 15](i117, (HEAP32[(HEAP32[i108 >> 2] | 0) + 292 >> 2] & 1024 | 0) == 0);
 i108 = __ZNK7WebCore11RenderLayer25enclosingCompositingLayerENS_16IncludeSelfOrNotE(HEAP32[i107 >> 2] | 0, 1) | 0;
 i117 = i6;
 _memset(i117 | 0, 0, 16) | 0;
 i6 = (i108 | 0) != 0;
 if (i6) {
  i112 = i10;
  i116 = (HEAP32[i108 + 208 >> 2] | 0) + 64 | 0;
  HEAP32[i112 >> 2] = HEAP32[i116 >> 2];
  HEAP32[i112 + 4 >> 2] = HEAP32[i116 + 4 >> 2];
  HEAP32[i112 + 8 >> 2] = HEAP32[i116 + 8 >> 2];
  HEAP32[i112 + 12 >> 2] = HEAP32[i116 + 12 >> 2];
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i10);
  i10 = i9;
  HEAP32[i117 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i117 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i117 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i117 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 }
 i10 = i11;
 i117 = i1 + 64 | 0;
 HEAP32[i10 >> 2] = HEAP32[i117 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i117 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i117 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i117 + 12 >> 2];
 i10 = i12 | 0;
 HEAP32[i10 >> 2] = 0;
 i9 = i12 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(HEAP32[i107 >> 2] | 0, i108, i12, 1);
 i12 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i9 = i1 + 80 | 0;
 HEAP32[i9 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i15, i11);
 i15 = i16;
 i9 = i13;
 HEAP32[i15 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i16;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i12;
 i15 = i18 + 4 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i10;
 __ZNK7WebCore18RenderLayerBacking44adjustAncestorCompositingBoundsForFlowThreadERNS_7IntRectEPKNS_11RenderLayerE(i1, i8, i108);
 do {
  if (i6) {
   i116 = HEAP32[i108 + 208 >> 2] | 0;
   do {
    if ((HEAP32[i116 + 28 >> 2] | 0) == 0) {
     i110 = 29;
    } else {
     if ((HEAP8[i116 + 90 | 0] & 1) != 0) {
      i110 = 29;
      break;
     }
     __ZN7WebCoreL7clipBoxERNS_9RenderBoxE(i21, HEAP32[i108 + 32 >> 2] | 0);
     i119 = HEAP32[i20 >> 2] | 0;
     i120 = HEAP32[i20 + 4 >> 2] | 0;
    }
   } while (0);
   if ((i110 | 0) == 29) {
    i119 = HEAP32[i7 >> 2] | 0;
    i120 = HEAP32[i7 + 4 >> 2] | 0;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i108) | 0) {
    i116 = HEAP32[i108 + 32 >> 2] | 0;
    i109 = i108 + 112 | 0;
    i112 = HEAP32[i109 >> 2] | 0;
    i111 = HEAP32[i109 + 4 >> 2] | 0;
    i109 = i116;
    i121 = i116;
    i116 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i121 >> 2] | 0) + 744 >> 2] & 3](i109) | 0;
    i122 = i116 - i112 | 0;
    i123 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i121 >> 2] | 0) + 736 >> 2] & 3](i109) | 0) - i111 | 0;
   } else {
    i122 = i119;
    i123 = i120;
   }
   i111 = i1 + 8 | 0;
   if ((HEAP32[i111 >> 2] | 0) == 0) {
    i124 = i122;
    i125 = i123;
    break;
   }
   HEAP32[i19 >> 2] = i108;
   HEAP32[i19 + 4 >> 2] = 0;
   HEAP32[i19 + 8 >> 2] = 5;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i27, HEAP32[i107 >> 2] | 0, i19);
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i26, i27 | 0);
   i109 = HEAP32[i111 >> 2] | 0;
   i121 = HEAP32[(HEAP32[i109 >> 2] | 0) + 56 >> 2] | 0;
   i112 = (HEAP32[i25 + 4 >> 2] | 0) - i123 | 0;
   HEAP32[i30 >> 2] = (HEAP32[i25 >> 2] | 0) - i122;
   HEAP32[i30 + 4 >> 2] = i112;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i29, i30);
   HEAPF32[i28 >> 2] = +HEAPF32[i29 >> 2];
   HEAPF32[i28 + 4 >> 2] = +HEAPF32[i29 + 4 >> 2];
   FUNCTION_TABLE_vii[i121 & 15](i109, i28);
   i109 = HEAP32[i111 >> 2] | 0;
   i121 = HEAP32[(HEAP32[i109 >> 2] | 0) + 68 >> 2] | 0;
   i112 = i24 + 8 | 0;
   i116 = HEAP32[i112 + 4 >> 2] | 0;
   HEAP32[i32 >> 2] = HEAP32[i112 >> 2];
   HEAP32[i32 + 4 >> 2] = i116;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i31, i33);
   FUNCTION_TABLE_vii[i121 & 15](i109, i31);
   i109 = HEAP32[i111 >> 2] | 0;
   i111 = (HEAP32[i25 + 4 >> 2] | 0) - i10 | 0;
   HEAP32[i34 >> 2] = (HEAP32[i25 >> 2] | 0) - i12;
   HEAP32[i34 + 4 >> 2] = i111;
   __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i109, i34, 1);
   i124 = HEAP32[i25 >> 2] | 0;
   i125 = HEAP32[i25 + 4 >> 2] | 0;
  } else {
   __ZNK7WebCore10RenderView12documentRectEv(i23, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
   i124 = HEAP32[i22 >> 2] | 0;
   i125 = HEAP32[i22 + 4 >> 2] | 0;
  }
 } while (0);
 i22 = i16 + 8 | 0;
 i16 = HEAP32[i22 + 4 >> 2] | 0;
 HEAP32[i37 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i37 + 4 >> 2] = i16;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i36, i38);
 i38 = i1 + 12 | 0;
 i16 = HEAP32[i38 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i126 = i124;
  i127 = i125;
  i128 = HEAP32[i17 >> 2] | 0;
  i129 = HEAP32[i17 + 4 >> 2] | 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 84 >> 2] & 15](i16, i118);
  i118 = HEAP32[i38 >> 2] | 0;
  i16 = HEAP32[(HEAP32[i118 >> 2] | 0) + 56 >> 2] | 0;
  i37 = (HEAP32[i17 + 4 >> 2] | 0) - i125 | 0;
  HEAP32[i41 >> 2] = (HEAP32[i17 >> 2] | 0) - i124;
  HEAP32[i41 + 4 >> 2] = i37;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i40, i41);
  HEAPF32[i39 >> 2] = +HEAPF32[i40 >> 2];
  HEAPF32[i39 + 4 >> 2] = +HEAPF32[i40 + 4 >> 2];
  FUNCTION_TABLE_vii[i16 & 15](i118, i39);
  i39 = HEAP32[i38 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i39 >> 2] | 0) + 68 >> 2] & 15](i39, i36);
  i39 = HEAP32[i17 >> 2] | 0;
  i118 = HEAP32[i17 + 4 >> 2] | 0;
  i126 = i39;
  i127 = i118;
  i128 = i39;
  i129 = i118;
 }
 i118 = HEAP32[i114 >> 2] | 0;
 i39 = HEAP32[(HEAP32[i118 >> 2] | 0) + 56 >> 2] | 0;
 HEAP32[i44 >> 2] = i128 - i126;
 HEAP32[i44 + 4 >> 2] = i129 - i127;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i43, i44);
 HEAPF32[i42 >> 2] = +HEAPF32[i43 >> 2];
 HEAPF32[i42 + 4 >> 2] = +HEAPF32[i43 + 4 >> 2];
 FUNCTION_TABLE_vii[i39 & 15](i118, i42);
 i42 = HEAP32[i114 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i42 >> 2] | 0) + 68 >> 2] & 15](i42, i36);
 i36 = HEAP32[i14 >> 2] | 0;
 i42 = HEAP32[i14 + 4 >> 2] | 0;
 i118 = HEAP32[i114 >> 2] | 0;
 i39 = i118 + 12 | 0;
 if ((i36 | 0) != (HEAP32[i39 >> 2] | 0) | (i42 | 0) != (HEAP32[i39 + 4 >> 2] | 0)) {
  HEAP32[i45 >> 2] = i36;
  HEAP32[i45 + 4 >> 2] = i42;
  __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i118, i45, 1);
  __ZN7WebCore18RenderLayerBacking30positionOverflowControlsLayersEv(i1);
 }
 if ((HEAP8[i1 + 89 | 0] & 1) == 0) {
  i45 = i11 + 8 | 0;
  do {
   if ((HEAP32[i22 >> 2] | 0) == (HEAP32[i45 >> 2] | 0)) {
    i11 = HEAP32[i114 >> 2] | 0;
    i118 = HEAP32[(HEAP32[i11 >> 2] | 0) + 108 >> 2] | 0;
    if ((HEAP32[i22 + 4 >> 2] | 0) != (HEAP32[i45 + 4 >> 2] | 0)) {
     i130 = 0;
     i131 = i11;
     i132 = i118;
     break;
    }
    i42 = HEAP32[i107 >> 2] | 0;
    i36 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i46 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i46 + 4 >> 2] = i36;
    i36 = i13 + 8 | 0;
    i39 = HEAP32[i36 + 4 >> 2] | 0;
    HEAP32[i46 + 8 >> 2] = HEAP32[i36 >> 2];
    HEAP32[i46 + 12 >> 2] = i39;
    i130 = __ZNK7WebCore11RenderLayer33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i42, i46) | 0;
    i131 = i11;
    i132 = i118;
   } else {
    i118 = HEAP32[i114 >> 2] | 0;
    i130 = 0;
    i131 = i118;
    i132 = HEAP32[(HEAP32[i118 >> 2] | 0) + 108 >> 2] | 0;
   }
  } while (0);
  FUNCTION_TABLE_vii[i132 & 15](i131, i130);
 }
 i130 = i1 + 90 | 0;
 do {
  if ((HEAP8[i130] & 1) == 0) {
   i131 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i131 | 0) == 0) {
    i133 = 0;
    i134 = 0;
    i135 = 0;
    i136 = 0;
    i137 = 0;
    i138 = 0;
    break;
   }
   __ZN7WebCoreL7clipBoxERNS_9RenderBoxE(i49, HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0);
   i132 = HEAP32[i48 >> 2] | 0;
   i46 = HEAP32[i48 + 4 >> 2] | 0;
   i13 = i47 + 8 | 0;
   i45 = HEAP32[i13 >> 2] | 0;
   i118 = HEAP32[i13 + 4 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i131 >> 2] | 0) + 56 >> 2] | 0;
   i11 = i132;
   i42 = i46;
   i39 = i42 - (HEAP32[i14 + 4 >> 2] | 0) | 0;
   HEAP32[i52 >> 2] = i11 - (HEAP32[i14 >> 2] | 0);
   HEAP32[i52 + 4 >> 2] = i39;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i51, i52);
   HEAPF32[i50 >> 2] = +HEAPF32[i51 >> 2];
   HEAPF32[i50 + 4 >> 2] = +HEAPF32[i51 + 4 >> 2];
   FUNCTION_TABLE_vii[i13 & 15](i131, i50);
   i13 = HEAP32[(HEAP32[i131 >> 2] | 0) + 68 >> 2] | 0;
   HEAP32[i54 >> 2] = i45;
   HEAP32[i54 + 4 >> 2] = i118;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i53, i55);
   FUNCTION_TABLE_vii[i13 & 15](i131, i53);
   HEAP32[i56 >> 2] = i11;
   HEAP32[i56 + 4 >> 2] = i42;
   __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i131, i56, 1);
   i133 = i46 & -1;
   i134 = i132 & 0;
   i135 = i46 & 0;
   i136 = i132 & -1;
   i137 = i118;
   i138 = i45;
  } else {
   i133 = 0;
   i134 = 0;
   i135 = 0;
   i136 = 0;
   i137 = 0;
   i138 = 0;
  }
 } while (0);
 i56 = i1 + 32 | 0;
 i53 = HEAP32[i56 >> 2] | 0;
 if ((i53 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 68 >> 2] & 15](i53, (HEAP32[i114 >> 2] | 0) + 40 | 0);
  i53 = HEAP32[i56 >> 2] | 0;
  i55 = HEAP32[(HEAP32[i53 >> 2] | 0) + 56 >> 2] | 0;
  HEAPF32[i57 >> 2] = +0;
  HEAPF32[i57 + 4 >> 2] = +0;
  FUNCTION_TABLE_vii[i55 & 15](i53, i57);
  i57 = HEAP32[i56 >> 2] | 0;
  i56 = (HEAP32[i114 >> 2] | 0) + 12 | 0;
  i53 = HEAP32[i56 + 4 >> 2] | 0;
  HEAP32[i58 >> 2] = HEAP32[i56 >> 2];
  HEAP32[i58 + 4 >> 2] = i53;
  __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i57, i59, 1);
 }
 i59 = HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[i59 + 20 >> 2] & 131072 | 0) == 0) {
   i57 = HEAP32[i114 >> 2] | 0;
   i53 = HEAP32[(HEAP32[i57 >> 2] | 0) + 64 >> 2] | 0;
   HEAPF32[i65 >> 2] = +.5;
   HEAPF32[i65 + 4 >> 2] = +.5;
   HEAPF32[i65 + 8 >> 2] = +0;
   FUNCTION_TABLE_vii[i53 & 15](i57, i65);
   i57 = HEAP32[i38 >> 2] | 0;
   if ((i57 | 0) == 0) {
    break;
   }
   i53 = HEAP32[(HEAP32[i57 >> 2] | 0) + 64 >> 2] | 0;
   HEAPF32[i66 >> 2] = +.5;
   HEAPF32[i66 + 4 >> 2] = +.5;
   HEAPF32[i66 + 8 >> 2] = +0;
   FUNCTION_TABLE_vii[i53 & 15](i57, i66);
  } else {
   i57 = HEAP32[i59 + 56 >> 2] | 0;
   i53 = (HEAP32[i59 + 36 >> 2] | 0) + 20 | 0;
   d115 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i53 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0, +(HEAP32[i59 + 52 >> 2] | 0), 0);
   d139 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i53 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0, +(i57 | 0), 0);
   d140 = +HEAPF32[(HEAP32[(HEAP32[i53 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2];
   d141 = +(HEAP32[i22 >> 2] | 0);
   if (d141 != +0) {
    d142 = (d115 + +(i12 - (HEAP32[i9 >> 2] | 0) | 0)) / d141;
   } else {
    d142 = +.5;
   }
   d141 = +(HEAP32[i18 + 12 >> 2] | 0);
   if (d141 != +0) {
    d143 = (d139 + +(i10 - (HEAP32[i15 >> 2] | 0) | 0)) / d141;
   } else {
    d143 = +.5;
   }
   HEAPF32[i60 >> 2] = d142;
   HEAPF32[i60 + 4 >> 2] = d143;
   HEAPF32[i60 + 8 >> 2] = d140;
   i53 = HEAP32[i38 >> 2] | 0;
   if ((i53 | 0) == 0) {
    i57 = HEAP32[i114 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i57 >> 2] | 0) + 64 >> 2] & 15](i57, i60);
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 64 >> 2] & 15](i53, i60);
   }
   i53 = HEAP32[i107 >> 2] | 0;
   if ((HEAP8[i130] & 1) == 0) {
    i144 = HEAP32[i1 + 28 >> 2] | 0;
   } else {
    i144 = 0;
   }
   if (+HEAPF32[(HEAP32[(HEAP32[(HEAP32[i53 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 16 >> 2] > +0) {
    __ZNK7WebCore11RenderLayer20perspectiveTransformEv(i61, i53);
    if ((i144 | 0) == 0) {
     i53 = HEAP32[i114 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i53 >> 2] | 0) + 80 >> 2] & 15](i53, i61);
     break;
    } else {
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i144 >> 2] | 0) + 80 >> 2] & 15](i144, i61);
     i53 = HEAP32[i114 >> 2] | 0;
     i57 = HEAP32[(HEAP32[i53 >> 2] | 0) + 80 >> 2] | 0;
     HEAPF64[i62 >> 3] = +1;
     _memset(i62 + 8 | 0, 0, 32) | 0;
     HEAPF64[i62 + 40 >> 3] = +1;
     _memset(i62 + 48 | 0, 0, 32) | 0;
     HEAPF64[i62 + 80 >> 3] = +1;
     _memset(i62 + 88 | 0, 0, 32) | 0;
     HEAPF64[i62 + 120 >> 3] = +1;
     FUNCTION_TABLE_vii[i57 & 15](i53, i62);
     break;
    }
   } else {
    if ((i144 | 0) == 0) {
     i53 = HEAP32[i114 >> 2] | 0;
     i57 = HEAP32[(HEAP32[i53 >> 2] | 0) + 80 >> 2] | 0;
     HEAPF64[i64 >> 3] = +1;
     _memset(i64 + 8 | 0, 0, 32) | 0;
     HEAPF64[i64 + 40 >> 3] = +1;
     _memset(i64 + 48 | 0, 0, 32) | 0;
     HEAPF64[i64 + 80 >> 3] = +1;
     _memset(i64 + 88 | 0, 0, 32) | 0;
     HEAPF64[i64 + 120 >> 3] = +1;
     FUNCTION_TABLE_vii[i57 & 15](i53, i64);
     break;
    } else {
     i53 = HEAP32[(HEAP32[i144 >> 2] | 0) + 80 >> 2] | 0;
     HEAPF64[i63 >> 3] = +1;
     _memset(i63 + 8 | 0, 0, 32) | 0;
     HEAPF64[i63 + 40 >> 3] = +1;
     _memset(i63 + 48 | 0, 0, 32) | 0;
     HEAPF64[i63 + 80 >> 3] = +1;
     _memset(i63 + 88 | 0, 0, 32) | 0;
     HEAPF64[i63 + 120 >> 3] = +1;
     FUNCTION_TABLE_vii[i53 & 15](i144, i63);
     break;
    }
   }
  }
 } while (0);
 i63 = i1 + 20 | 0;
 i144 = HEAP32[i63 >> 2] | 0;
 if ((i144 | 0) != 0) {
  HEAPF32[i67 >> 2] = +0;
  HEAPF32[i67 + 4 >> 2] = +0;
  i64 = HEAP32[i35 + 4 >> 2] | 0;
  HEAP32[i68 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i68 + 4 >> 2] = i64;
  i64 = (HEAP32[i114 >> 2] | 0) + 12 | 0;
  i62 = HEAP32[i64 + 4 >> 2] | 0;
  HEAP32[i70 >> 2] = HEAP32[i64 >> 2];
  HEAP32[i70 + 4 >> 2] = i62;
  do {
   if ((HEAP32[i1 + 28 >> 2] | 0) == 0) {
    i145 = i144;
   } else {
    if ((HEAP8[i130] & 1) != 0) {
     i145 = i144;
     break;
    }
    HEAP32[i74 >> 2] = i138;
    HEAP32[i74 + 4 >> 2] = i137;
    __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i73, i75);
    i62 = HEAP32[i72 + 4 >> 2] | 0;
    HEAP32[i68 >> 2] = HEAP32[i72 >> 2];
    HEAP32[i68 + 4 >> 2] = i62;
    HEAP32[i70 >> 2] = i134 | i136;
    HEAP32[i70 + 4 >> 2] = i133 | i135;
    i145 = HEAP32[i63 >> 2] | 0;
   }
  } while (0);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i145 >> 2] | 0) + 56 >> 2] & 15](i145, i67);
  i67 = HEAP32[i63 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i67 >> 2] | 0) + 68 >> 2] & 15](i67, i69);
  __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(HEAP32[i63 >> 2] | 0, i71, 1);
 }
 i71 = i1 + 24 | 0;
 i69 = HEAP32[i71 >> 2] | 0;
 if ((i69 | 0) != 0) {
  HEAPF32[i76 >> 2] = +0;
  HEAPF32[i77 + 4 >> 2] = +0;
  i67 = HEAP32[i35 + 4 >> 2] | 0;
  HEAP32[i78 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i78 + 4 >> 2] = i67;
  if ((HEAP8[i1 + 93 | 0] & 1) == 0) {
   i146 = i69;
  } else {
   i69 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
   __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i83, i69);
   HEAP32[i82 >> 2] = HEAP32[i83 >> 2];
   HEAP32[i82 + 4 >> 2] = HEAP32[i83 + 4 >> 2];
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i81, i82);
   i82 = HEAP32[i80 + 4 >> 2] | 0;
   HEAP32[i76 >> 2] = HEAP32[i80 >> 2];
   HEAP32[i76 + 4 >> 2] = i82;
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i88, i69 | 0, 0);
   i69 = i88 + 8 | 0;
   i88 = HEAP32[i69 + 4 >> 2] | 0;
   HEAP32[i86 >> 2] = HEAP32[i69 >> 2];
   HEAP32[i86 + 4 >> 2] = i88;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i85, i87);
   i87 = HEAP32[i84 + 4 >> 2] | 0;
   HEAP32[i78 >> 2] = HEAP32[i84 >> 2];
   HEAP32[i78 + 4 >> 2] = i87;
   i146 = HEAP32[i71 >> 2] | 0;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i146 >> 2] | 0) + 56 >> 2] & 15](i146, i77);
  i77 = HEAP32[i71 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i77 >> 2] | 0) + 68 >> 2] & 15](i77, i79);
  i79 = HEAP32[i71 >> 2] | 0;
  i71 = (HEAP32[i114 >> 2] | 0) + 12 | 0;
  i77 = HEAP32[i71 + 4 >> 2] | 0;
  HEAP32[i89 >> 2] = HEAP32[i71 >> 2];
  HEAP32[i89 + 4 >> 2] = i77;
  __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i79, i90, 1);
 }
 do {
  if ((__ZNK7WebCore11RenderLayer15reflectionLayerEv(HEAP32[i107 >> 2] | 0) | 0) != 0) {
   if ((HEAP32[(__ZNK7WebCore11RenderLayer15reflectionLayerEv(HEAP32[i107 >> 2] | 0) | 0) + 208 >> 2] | 0) == 0) {
    break;
   }
   i90 = HEAP32[(__ZNK7WebCore11RenderLayer15reflectionLayerEv(HEAP32[i107 >> 2] | 0) | 0) + 208 >> 2] | 0;
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i90);
   i79 = (HEAP32[i90 + 16 >> 2] | 0) + 380 | 0;
   d143 = +(+(HEAP32[i1 + 64 >> 2] | 0) - +(HEAP32[i90 + 64 >> 2] | 0));
   d142 = +(+(HEAP32[i1 + 68 >> 2] | 0) - +(HEAP32[i90 + 68 >> 2] | 0));
   HEAPF32[i79 >> 2] = d143;
   HEAPF32[i79 + 4 >> 2] = d142;
  }
 } while (0);
 i79 = i1 + 48 | 0;
 do {
  if ((HEAP32[i79 >> 2] | 0) != 0) {
   i90 = HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0;
   i77 = i90;
   i89 = i90;
   i71 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 744 >> 2] & 3](i77) | 0;
   i146 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 736 >> 2] & 3](i77) | 0;
   i87 = HEAP32[i90 + 52 >> 2] | 0;
   i78 = i87 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 744 >> 2] & 3](i77) | 0) | 0;
   i87 = i78 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 748 >> 2] & 3](i77) | 0) | 0;
   i78 = HEAP32[i90 + 56 >> 2] | 0;
   i90 = i78 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 736 >> 2] & 3](i77) | 0) | 0;
   i78 = i90 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i89 >> 2] | 0) + 740 >> 2] & 3](i77) | 0) | 0;
   i77 = HEAP32[i107 >> 2] | 0;
   i89 = (HEAP32[i77 + 12 >> 2] | 0) + (HEAP32[i77 + 112 >> 2] | 0) | 0;
   i90 = (HEAP32[i77 + 16 >> 2] | 0) + (HEAP32[i77 + 116 >> 2] | 0) | 0;
   i77 = HEAP32[i79 >> 2] | 0;
   i84 = HEAP32[(HEAP32[i77 >> 2] | 0) + 56 >> 2] | 0;
   i85 = i146 - (HEAP32[i14 + 4 >> 2] | 0) | 0;
   HEAP32[i93 >> 2] = i71 - (HEAP32[i14 >> 2] | 0);
   HEAP32[i93 + 4 >> 2] = i85;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i92, i93);
   HEAPF32[i91 >> 2] = +HEAPF32[i92 >> 2];
   HEAPF32[i91 + 4 >> 2] = +HEAPF32[i92 + 4 >> 2];
   FUNCTION_TABLE_vii[i84 & 15](i77, i91);
   i77 = HEAP32[i79 >> 2] | 0;
   i84 = HEAP32[(HEAP32[i77 >> 2] | 0) + 68 >> 2] | 0;
   HEAP32[i95 >> 2] = i87;
   HEAP32[i95 + 4 >> 2] = i78;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i94, i96);
   FUNCTION_TABLE_vii[i84 & 15](i77, i94);
   i77 = i1 + 52 | 0;
   i84 = HEAP32[i77 >> 2] | 0;
   i78 = HEAP32[(HEAP32[i84 >> 2] | 0) + 56 >> 2] | 0;
   HEAPF32[i97 >> 2] = +(-i89 | 0);
   HEAPF32[i97 + 4 >> 2] = +(-i90 | 0);
   FUNCTION_TABLE_vii[i78 & 15](i84, i97);
   i84 = HEAP32[i79 >> 2] | 0;
   i78 = i84 + 12 | 0;
   i87 = HEAP32[i78 >> 2] | 0;
   i85 = HEAP32[i78 + 4 >> 2] | 0;
   HEAP32[i98 >> 2] = -i71;
   HEAP32[i98 + 4 >> 2] = -i146;
   __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i84, i98, 1);
   i84 = (HEAP32[i79 >> 2] | 0) + 12 | 0;
   i78 = HEAP32[i84 >> 2] | 0;
   i88 = HEAP32[i84 + 4 >> 2] | 0;
   i84 = __ZNK7WebCore11RenderLayer11scrollWidthEv(HEAP32[i107 >> 2] | 0) | 0;
   i86 = __ZNK7WebCore11RenderLayer12scrollHeightEv(HEAP32[i107 >> 2] | 0) | 0;
   HEAP32[i99 >> 2] = i84;
   HEAP32[i99 + 4 >> 2] = i86;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i100, i99);
   i86 = HEAP32[i77 >> 2] | 0;
   if (+HEAPF32[i100 >> 2] != +HEAPF32[i86 + 40 >> 2]) {
    i110 = 84;
   } else {
    if (+HEAPF32[i100 + 4 >> 2] != +HEAPF32[i86 + 44 >> 2] | ((i85 | 0) != (i88 | 0) | (i87 | 0) != (i78 | 0))) {
     i110 = 84;
    } else {
     i147 = i86;
    }
   }
   if ((i110 | 0) == 84) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i86 >> 2] | 0) + 124 >> 2] & 31](i86);
    i147 = HEAP32[i77 >> 2] | 0;
   }
   i86 = i71 - i89 | 0;
   i89 = i146 - i90 | 0;
   HEAP32[i101 >> 2] = i86;
   HEAP32[i101 + 4 >> 2] = i89;
   i90 = i147 + 12 | 0;
   do {
    if ((i86 | 0) != (HEAP32[i90 >> 2] | 0) | (i89 | 0) != (HEAP32[i90 + 4 >> 2] | 0)) {
     i110 = 88;
    } else {
     __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i102, i99);
     i146 = HEAP32[i77 >> 2] | 0;
     if (+HEAPF32[i102 >> 2] != +HEAPF32[i146 + 40 >> 2]) {
      i110 = 88;
      break;
     }
     if (+HEAPF32[i102 + 4 >> 2] != +HEAPF32[i146 + 44 >> 2]) {
      i110 = 88;
     } else {
      i148 = i146;
     }
    }
   } while (0);
   if ((i110 | 0) == 88) {
    i90 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i107 >> 2] | 0) | 0;
    __ZN7WebCore21RenderLayerCompositor23scrollingLayerDidChangeERNS_11RenderLayerE(i90, HEAP32[i107 >> 2] | 0);
    i148 = HEAP32[i77 >> 2] | 0;
   }
   i90 = HEAP32[(HEAP32[i148 >> 2] | 0) + 68 >> 2] | 0;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i103, i99);
   FUNCTION_TABLE_vii[i90 & 15](i148, i103);
   __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(HEAP32[i77 >> 2] | 0, i101, 0);
   i90 = HEAP32[i63 >> 2] | 0;
   if ((i90 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i90 >> 2] | 0) + 68 >> 2] & 15](i90, (HEAP32[i77 >> 2] | 0) + 40 | 0);
   i90 = HEAP32[i63 >> 2] | 0;
   i89 = (HEAP32[i77 >> 2] | 0) + 12 | 0;
   i86 = HEAP32[i89 + 4 >> 2] | 0;
   HEAP32[i104 >> 2] = HEAP32[i89 >> 2];
   HEAP32[i104 + 4 >> 2] = i86;
   __ZN7WebCore13GraphicsLayer21setOffsetFromRendererERKNS_7IntSizeENS0_21ShouldSetNeedsDisplayE(i90, i105, 1);
  }
 } while (0);
 i105 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i107 >> 2] | 0) | 0;
 i104 = __ZNK7WebCore21RenderLayerCompositor23requiresOwnBackingStoreERKNS_11RenderLayerEPS2_RKNS_7IntRectES7_(i105, HEAP32[i107 >> 2] | 0, i108, i18, i8) | 0;
 i8 = i3;
 i18 = i1 + 91 | 0;
 if ((i104 & 1 | 0) != (HEAP8[i18] & 1 | 0)) {
  HEAP8[i18] = i104 & 1;
  __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(HEAP32[i107 >> 2] | 0, 0);
  __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(HEAP32[i107 >> 2] | 0);
  i104 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i107 >> 2] | 0) | 0;
  i18 = HEAP32[i107 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i117 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i117 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i117 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i117 + 12 >> 2];
  __ZN7WebCore21RenderLayerCompositor27repaintInCompositedAncestorERNS_11RenderLayerERKNS_10LayoutRectE(i104, i18, i3);
 }
 HEAP8[i106] = 0;
 if ((HEAP8[(HEAP32[i107 >> 2] | 0) + 22 | 0] & 8) == 0) {
  i110 = 95;
 } else {
  __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundColorEbRb(i1, i113, i106);
  __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundImageEbRb(i1, i113, i106);
  if ((HEAP8[i106] & 1) == 0) {
   i110 = 95;
  }
 }
 do {
  if ((i110 | 0) == 95) {
   i106 = HEAP32[i114 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i106 >> 2] | 0) + 196 >> 2] & 3](i106) | 0)) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking17resetContentsRectEv(i1);
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking18updateDrawsContentEb(i1, i113);
 i113 = i5 | 0;
 i114 = i5;
 i5 = HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 228 >> 2] & 3](i5 | 0) | 0) {
   i110 = __ZN7WebCore21RenderLayerCompositor23frameContentsCompositorEPNS_12RenderWidgetE(HEAP32[(HEAP32[i107 >> 2] | 0) + 32 >> 2] | 0) | 0;
   if ((i110 | 0) == 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv(i110);
   __ZNK7WebCore18RenderLayerBacking11contentsBoxEv(i114, i1);
   i106 = HEAP32[i113 + 4 >> 2] | 0;
   HEAP32[i4 >> 2] = HEAP32[i113 >> 2];
   HEAP32[i4 + 4 >> 2] = i106;
   __ZN7WebCore21RenderLayerCompositor26frameViewDidChangeLocationERKNS_8IntPointE(i110, i4);
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking23registerScrollingLayersEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18RenderLayerBacking14startAnimationEdPKNS_9AnimationERKNS_12KeyframeListE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, d50 = +0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, d65 = +0, i66 = 0, i67 = 0, i68 = 0, i69 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i5 + 48 | 0;
 i10 = i5 + 56 | 0;
 i11 = i5 + 64 | 0;
 i12 = i5 + 72 | 0;
 i13 = i5 + 80 | 0;
 i14 = i5 + 88 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = HEAP32[i4 + 16 >> 2] | 0;
 i19 = (i18 | 0) == 0;
 if (i19) {
  i20 = 0;
 } else {
  i21 = HEAP32[i4 + 24 >> 2] | 0;
  i22 = i21 & 1463849275;
  i23 = i18 + (i22 << 2) | 0;
  i24 = HEAP32[i23 >> 2] | 0;
  L3 : do {
   if ((i24 | 0) == 102) {
    i25 = i23;
   } else {
    i26 = 0;
    i27 = i22;
    i28 = i24;
    while (1) {
     if ((i28 | 0) == 0) {
      i25 = 0;
      break L3;
     }
     i29 = (i26 | 0) == 0 ? 623354383 : i26;
     i30 = i29 + i27 & i21;
     i31 = i18 + (i30 << 2) | 0;
     i32 = HEAP32[i31 >> 2] | 0;
     if ((i32 | 0) == 102) {
      i25 = i31;
      break;
     } else {
      i26 = i29;
      i27 = i30;
      i28 = i32;
     }
    }
   }
  } while (0);
  i20 = (i25 | 0) != 0;
 }
 i25 = i1 + 4 | 0;
 i21 = HEAP32[i25 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i21 + 32 >> 2] | 0) + 20 >> 2] & 512 | 0) == 0) {
   i33 = 0;
   i34 = 12;
  } else {
   if (i19) {
    i35 = 0;
    i36 = 0;
    break;
   }
   i24 = HEAP32[i4 + 24 >> 2] | 0;
   i22 = i24 & -685227940;
   i23 = i18 + (i22 << 2) | 0;
   i28 = HEAP32[i23 >> 2] | 0;
   L12 : do {
    if ((i28 | 0) == 345) {
     i37 = i23;
    } else {
     i27 = 0;
     i26 = i22;
     i32 = i28;
     while (1) {
      if ((i32 | 0) == 0) {
       i37 = 0;
       break L12;
      }
      i30 = (i27 | 0) == 0 ? 96864099 : i27;
      i29 = i30 + i26 & i24;
      i31 = i18 + (i29 << 2) | 0;
      i38 = HEAP32[i31 >> 2] | 0;
      if ((i38 | 0) == 345) {
       i37 = i31;
       break;
      } else {
       i27 = i30;
       i26 = i29;
       i32 = i38;
      }
     }
    }
   } while (0);
   i33 = (i37 | 0) != 0;
   i34 = 12;
  }
 } while (0);
 do {
  if ((i34 | 0) == 12) {
   if (i19) {
    i35 = 0;
    i36 = i33;
    break;
   }
   i37 = HEAP32[i4 + 24 >> 2] | 0;
   i24 = i37 & 402850613;
   i28 = i18 + (i24 << 2) | 0;
   i22 = HEAP32[i28 >> 2] | 0;
   L20 : do {
    if ((i22 | 0) == 237) {
     i39 = i28;
    } else {
     i23 = 0;
     i32 = i24;
     i26 = i22;
     while (1) {
      if ((i26 | 0) == 0) {
       i39 = 0;
       break L20;
      }
      i27 = (i23 | 0) == 0 ? -1980769327 : i23;
      i38 = i27 + i32 & i37;
      i29 = i18 + (i38 << 2) | 0;
      i30 = HEAP32[i29 >> 2] | 0;
      if ((i30 | 0) == 237) {
       i39 = i29;
       break;
      } else {
       i23 = i27;
       i32 = i38;
       i26 = i30;
      }
     }
    }
   } while (0);
   i35 = (i39 | 0) != 0;
   i36 = i33;
  }
 } while (0);
 if (!(i20 | i36 | i35)) {
  i40 = 0;
  STACKTOP = i5;
  return i40 | 0;
 }
 i33 = i6 | 0;
 HEAP32[i33 >> 2] = 0;
 i39 = i6 + 4 | 0;
 HEAP32[i39 >> 2] = 0;
 i18 = i6 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i6 + 12 >> 2] = 1;
 i19 = i7 | 0;
 HEAP32[i19 >> 2] = 0;
 i37 = i7 + 4 | 0;
 HEAP32[i37 >> 2] = 0;
 i22 = i7 + 8 | 0;
 HEAP32[i22 >> 2] = 0;
 HEAP32[i7 + 12 >> 2] = 2;
 i24 = i8 | 0;
 HEAP32[i24 >> 2] = 0;
 i28 = i8 + 4 | 0;
 HEAP32[i28 >> 2] = 0;
 i26 = i8 + 8 | 0;
 HEAP32[i26 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = 4;
 i32 = i4 + 12 | 0;
 i23 = HEAP32[i32 >> 2] | 0;
 do {
  if ((i23 | 0) == 0) {
   i41 = i21;
  } else {
   i30 = i4 + 4 | 0;
   i38 = i36 ^ 1;
   i27 = i20 ^ 1;
   i29 = i35 ^ 1;
   i31 = i13 | 0;
   i42 = i12 | 0;
   i43 = i11 | 0;
   i44 = i9 | 0;
   i45 = i10 | 0;
   i46 = 0;
   i47 = i23;
   while (1) {
    if (i47 >>> 0 <= i46 >>> 0) {
     i34 = 21;
     break;
    }
    i48 = HEAP32[i30 >> 2] | 0;
    i49 = HEAP32[i48 + (i46 << 5) + 28 >> 2] | 0;
    d50 = +HEAPF64[i48 + (i46 << 5) >> 3];
    do {
     if ((i49 | 0) != 0) {
      i51 = i49 + 20 | 0;
      i52 = HEAP32[(HEAP32[i51 >> 2] | 0) + 108 >> 2] | 0;
      do {
       if ((i52 | 0) == 0) {
        i53 = 0;
       } else {
        if ((HEAP32[i52 + 8 >> 2] | 0) == 0) {
         i53 = 0;
         break;
        }
        i54 = HEAP32[(HEAP32[HEAP32[i52 >> 2] >> 2] | 0) + 40 >> 2] | 0;
        if ((i54 | 0) == 0) {
         i53 = 0;
         break;
        }
        i55 = i54 + 4 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
        i53 = i54;
       }
      } while (0);
      if (d50 == +0) {
       i56 = 0;
      } else {
       i56 = d50 != +1;
      }
      L44 : do {
       if (i56 | i38) {
        i52 = HEAP32[i48 + (i46 << 5) + 8 >> 2] | 0;
        if ((i52 | 0) == 0) {
         break;
        }
        i54 = HEAP32[i48 + (i46 << 5) + 16 >> 2] | 0;
        i55 = i54 & -685227940;
        i57 = i52 + (i55 << 2) | 0;
        i58 = HEAP32[i57 >> 2] | 0;
        if ((i58 | 0) == 345) {
         i59 = i57;
        } else {
         i57 = 0;
         i60 = i55;
         i55 = i58;
         while (1) {
          if ((i55 | 0) == 0) {
           break L44;
          }
          i58 = (i57 | 0) == 0 ? 96864099 : i57;
          i61 = i58 + i60 & i54;
          i62 = i52 + (i61 << 2) | 0;
          i63 = HEAP32[i62 >> 2] | 0;
          if ((i63 | 0) == 345) {
           i59 = i62;
           break;
          } else {
           i57 = i58;
           i60 = i61;
           i55 = i63;
          }
         }
        }
        if ((i59 | 0) != 0) {
         i34 = 35;
        }
       } else {
        i34 = 35;
       }
      } while (0);
      do {
       if ((i34 | 0) == 35) {
        i34 = 0;
        i55 = (HEAP32[(HEAP32[i51 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
        HEAP32[i43 >> 2] = i53;
        if ((i53 | 0) != 0) {
         i60 = i53 + 4 | 0;
         HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
        }
        __ZN7WebCore23TransformAnimationValue6createEdRKNS_19TransformOperationsEN3WTF10PassRefPtrINS_14TimingFunctionEEE(i10, d50, i55, i11);
        i55 = HEAP32[i45 >> 2] | 0;
        HEAP32[i45 >> 2] = 0;
        HEAP32[i44 >> 2] = i55;
        __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i6, i9);
        i55 = HEAP32[i44 >> 2] | 0;
        if ((i55 | 0) != 0) {
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
        }
        i55 = HEAP32[i43 >> 2] | 0;
        if ((i55 | 0) == 0) {
         break;
        }
        i60 = i55 + 4 | 0;
        i55 = i60 | 0;
        i57 = (HEAP32[i55 >> 2] | 0) - 1 | 0;
        if ((i57 | 0) != 0) {
         HEAP32[i55 >> 2] = i57;
         break;
        }
        i57 = i60 - 4 | 0;
        if ((i57 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i57 >> 2] | 0) + 4 >> 2] & 31](i57);
       }
      } while (0);
      L66 : do {
       if (i56 | i27) {
        i57 = HEAP32[i48 + (i46 << 5) + 8 >> 2] | 0;
        if ((i57 | 0) == 0) {
         break;
        }
        i60 = HEAP32[i48 + (i46 << 5) + 16 >> 2] | 0;
        i55 = i60 & 1463849275;
        i52 = i57 + (i55 << 2) | 0;
        i54 = HEAP32[i52 >> 2] | 0;
        if ((i54 | 0) == 102) {
         i64 = i52;
        } else {
         i52 = 0;
         i63 = i55;
         i55 = i54;
         while (1) {
          if ((i55 | 0) == 0) {
           break L66;
          }
          i54 = (i52 | 0) == 0 ? 623354383 : i52;
          i61 = i54 + i63 & i60;
          i58 = i57 + (i61 << 2) | 0;
          i62 = HEAP32[i58 >> 2] | 0;
          if ((i62 | 0) == 102) {
           i64 = i58;
           break;
          } else {
           i52 = i54;
           i63 = i61;
           i55 = i62;
          }
         }
        }
        if ((i64 | 0) != 0) {
         i34 = 50;
        }
       } else {
        i34 = 50;
       }
      } while (0);
      do {
       if ((i34 | 0) == 50) {
        i34 = 0;
        d65 = +HEAPF32[(HEAP32[i51 >> 2] | 0) + 4 >> 2];
        if ((i53 | 0) != 0) {
         i55 = i53 + 4 | 0;
         HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 1;
        }
        i55 = __ZN3WTF10fastMallocEj(24) | 0;
        HEAPF64[i55 + 8 >> 3] = d50;
        HEAP32[i55 + 16 >> 2] = i53;
        HEAP32[i55 >> 2] = H_BASE + 328;
        HEAPF32[i55 + 20 >> 2] = d65;
        HEAP32[i42 >> 2] = i55;
        __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i7, i12);
        i55 = HEAP32[i42 >> 2] | 0;
        if ((i55 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i55 >> 2] | 0) + 4 >> 2] & 31](i55);
       }
      } while (0);
      L81 : do {
       if (i56 | i29) {
        i55 = HEAP32[i48 + (i46 << 5) + 8 >> 2] | 0;
        if ((i55 | 0) == 0) {
         break;
        }
        i63 = HEAP32[i48 + (i46 << 5) + 16 >> 2] | 0;
        i52 = i63 & 402850613;
        i57 = i55 + (i52 << 2) | 0;
        i60 = HEAP32[i57 >> 2] | 0;
        if ((i60 | 0) == 237) {
         i66 = i57;
        } else {
         i57 = 0;
         i62 = i52;
         i52 = i60;
         while (1) {
          if ((i52 | 0) == 0) {
           break L81;
          }
          i60 = (i57 | 0) == 0 ? -1980769327 : i57;
          i61 = i60 + i62 & i63;
          i54 = i55 + (i61 << 2) | 0;
          i58 = HEAP32[i54 >> 2] | 0;
          if ((i58 | 0) == 237) {
           i66 = i54;
           break;
          } else {
           i57 = i60;
           i62 = i61;
           i52 = i58;
          }
         }
        }
        if ((i66 | 0) != 0) {
         i34 = 60;
        }
       } else {
        i34 = 60;
       }
      } while (0);
      do {
       if ((i34 | 0) == 60) {
        i34 = 0;
        i52 = (HEAP32[(HEAP32[i51 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0;
        if ((i53 | 0) != 0) {
         i62 = i53 + 4 | 0;
         HEAP32[i62 >> 2] = (HEAP32[i62 >> 2] | 0) + 1;
        }
        i62 = __ZN3WTF10fastMallocEj(32) | 0;
        HEAPF64[i62 + 8 >> 3] = d50;
        HEAP32[i62 + 16 >> 2] = i53;
        HEAP32[i62 >> 2] = H_BASE + 296;
        i57 = i62 + 20 | 0;
        HEAP32[i57 >> 2] = 0;
        HEAP32[i62 + 24 >> 2] = 0;
        HEAP32[i62 + 28 >> 2] = 0;
        __ZN7WebCore16FilterOperationsaSERKS0_(i57, i52) | 0;
        HEAP32[i31 >> 2] = i62;
        __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i8, i13);
        i62 = HEAP32[i31 >> 2] | 0;
        if ((i62 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i62 >> 2] | 0) + 4 >> 2] & 31](i62);
       }
      } while (0);
      if ((i53 | 0) == 0) {
       break;
      }
      i51 = i53 + 4 | 0;
      i62 = i51 | 0;
      i52 = (HEAP32[i62 >> 2] | 0) - 1 | 0;
      if ((i52 | 0) != 0) {
       HEAP32[i62 >> 2] = i52;
       break;
      }
      i52 = i51 - 4 | 0;
      if ((i52 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i52 >> 2] | 0) + 4 >> 2] & 31](i52);
     }
    } while (0);
    i48 = i46 + 1 | 0;
    if (i48 >>> 0 >= i23 >>> 0) {
     i34 = 71;
     break;
    }
    i46 = i48;
    i47 = HEAP32[i32 >> 2] | 0;
   }
   if ((i34 | 0) == 21) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i34 | 0) == 71) {
    i41 = HEAP32[i25 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i25 = HEAP32[i41 + 32 >> 2] | 0;
 i41 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i41 | 0) == 0) {
  i34 = 74;
 } else {
  if ((HEAP8[(HEAP32[i41 + 48 >> 2] | 0) + 180 | 0] & 4) == 0) {
   i67 = 0;
  } else {
   i34 = 74;
  }
 }
 do {
  if ((i34 | 0) == 74) {
   if (i36) {
    i41 = HEAP32[i1 + 16 >> 2] | 0;
    i32 = HEAP32[(HEAP32[i41 >> 2] | 0) + 152 >> 2] | 0;
    i23 = HEAP32[i25 + 56 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i25 + 52 >> 2];
    HEAP32[i14 + 4 >> 2] = i23;
    i68 = FUNCTION_TABLE_iiiiiid[i32 & 1](i41, i6, i15, i3, i4 | 0, d2) | 0;
   } else {
    i68 = 0;
   }
   if (i20) {
    i41 = HEAP32[i1 + 16 >> 2] | 0;
    i32 = HEAP32[(HEAP32[i41 >> 2] | 0) + 152 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    HEAP32[i16 + 4 >> 2] = 0;
    i69 = FUNCTION_TABLE_iiiiiid[i32 & 1](i41, i7, i16, i3, i4 | 0, d2) | 0 | i68;
   } else {
    i69 = i68;
   }
   if (!i35) {
    i67 = i69;
    break;
   }
   i41 = HEAP32[i1 + 16 >> 2] | 0;
   i32 = HEAP32[(HEAP32[i41 >> 2] | 0) + 152 >> 2] | 0;
   HEAP32[i17 >> 2] = 0;
   HEAP32[i17 + 4 >> 2] = 0;
   i67 = FUNCTION_TABLE_iiiiiid[i32 & 1](i41, i8, i17, i3, i4 | 0, d2) | 0 | i69;
  }
 } while (0);
 i69 = HEAP32[i26 >> 2] | 0;
 if ((i69 | 0) != 0) {
  i4 = HEAP32[i24 >> 2] | 0;
  i3 = i4 + (i69 << 2) | 0;
  i69 = i4;
  while (1) {
   i4 = HEAP32[i69 >> 2] | 0;
   if ((i4 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   }
   i69 = i69 + 4 | 0;
   if ((i69 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i26 >> 2] = 0;
 }
 i26 = HEAP32[i24 >> 2] | 0;
 if ((i26 | 0) != 0) {
  HEAP32[i24 >> 2] = 0;
  HEAP32[i28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i26);
 }
 i26 = HEAP32[i22 >> 2] | 0;
 if ((i26 | 0) != 0) {
  i28 = HEAP32[i19 >> 2] | 0;
  i24 = i28 + (i26 << 2) | 0;
  i26 = i28;
  while (1) {
   i28 = HEAP32[i26 >> 2] | 0;
   if ((i28 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
   }
   i26 = i26 + 4 | 0;
   if ((i26 | 0) == (i24 | 0)) {
    break;
   }
  }
  HEAP32[i22 >> 2] = 0;
 }
 i22 = HEAP32[i19 >> 2] | 0;
 if ((i22 | 0) != 0) {
  HEAP32[i19 >> 2] = 0;
  HEAP32[i37 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i22);
 }
 i22 = HEAP32[i18 >> 2] | 0;
 if ((i22 | 0) != 0) {
  i37 = HEAP32[i33 >> 2] | 0;
  i19 = i37 + (i22 << 2) | 0;
  i22 = i37;
  while (1) {
   i37 = HEAP32[i22 >> 2] | 0;
   if ((i37 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i37 >> 2] | 0) + 4 >> 2] & 31](i37);
   }
   i22 = i22 + 4 | 0;
   if ((i22 | 0) == (i19 | 0)) {
    break;
   }
  }
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i33 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i40 = i67;
  STACKTOP = i5;
  return i40 | 0;
 }
 HEAP32[i33 >> 2] = 0;
 HEAP32[i39 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 i40 = i67;
 STACKTOP = i5;
 return i40 | 0;
}
function __ZN7WebCore18RenderLayerBacking15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_(i1, d2, i3, i4, i5) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, d39 = +0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 72 | 0;
 i15 = i6 + 80 | 0;
 i16 = i6 + 88 | 0;
 i17 = i6 + 96 | 0;
 i18 = i6 + 104 | 0;
 i19 = i6 + 112 | 0;
 i20 = i19;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 L1 : do {
  if ((i3 | 0) == 102) {
   i27 = __ZNK7WebCore11RenderStyle21transitionForPropertyENS_13CSSPropertyIDE(i5, 102) | 0;
   if ((i27 | 0) == 0) {
    i28 = 0;
    STACKTOP = i6;
    return i28 | 0;
   }
   i29 = HEAP8[i27 + 44 | 0] | 0;
   do {
    if (i29 << 24 >> 24 >= 0) {
     i30 = HEAP8[i27 + 45 | 0] | 0;
     if ((i30 & 31) != 0) {
      break;
     }
     if ((i29 & 64) != 0) {
      break;
     }
     if ((i30 & 96) == 0) {
      i31 = 0;
      break L1;
     }
    }
   } while (0);
   if (+HEAPF64[i27 + 32 >> 3] == +0) {
    if (+HEAPF64[i27 + 24 >> 3] <= +0) {
     i31 = 0;
     break;
    }
   }
   i29 = i7 | 0;
   HEAP32[i29 >> 2] = 0;
   i30 = i7 + 4 | 0;
   HEAP32[i30 >> 2] = 0;
   i32 = i7 + 8 | 0;
   HEAP32[i32 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = 2;
   i33 = i1 + 4 | 0;
   i34 = HEAP32[i33 >> 2] | 0;
   d35 = +HEAPF32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2];
   L14 : while (1) {
    i36 = i34;
    while (1) {
     i36 = HEAP32[i36 + 36 >> 2] | 0;
     if ((i36 | 0) == 0) {
      break L14;
     }
     i37 = i36 + 32 | 0;
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
      break;
     }
     if ((HEAP8[i36 + 21 | 0] & 16) != 0) {
      break;
     }
     if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i36) | 0) {
      break;
     }
    }
    if ((HEAP32[i36 + 208 >> 2] | 0) != 0) {
     break;
    }
    i34 = i36;
    d35 = d35 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
   }
   i34 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAPF64[i34 + 8 >> 3] = +0;
   HEAP32[i34 + 16 >> 2] = 0;
   HEAP32[i34 >> 2] = H_BASE + 328;
   HEAPF32[i34 + 20 >> 2] = d35;
   i38 = i8 | 0;
   HEAP32[i38 >> 2] = i34;
   __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i7, i8);
   i34 = HEAP32[i38 >> 2] | 0;
   if ((i34 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 31](i34);
   }
   i34 = i5 + 20 | 0;
   i38 = HEAP32[i33 >> 2] | 0;
   d39 = +HEAPF32[(HEAP32[i34 >> 2] | 0) + 4 >> 2];
   L27 : while (1) {
    i40 = i38;
    while (1) {
     i40 = HEAP32[i40 + 36 >> 2] | 0;
     if ((i40 | 0) == 0) {
      break L27;
     }
     i41 = i40 + 32 | 0;
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i41 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
      break;
     }
     if ((HEAP8[i40 + 21 | 0] & 16) != 0) {
      break;
     }
     if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i40) | 0) {
      break;
     }
    }
    if ((HEAP32[i40 + 208 >> 2] | 0) != 0) {
     break;
    }
    i38 = i40;
    d39 = d39 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i41 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
   }
   i38 = __ZN3WTF10fastMallocEj(24) | 0;
   HEAPF64[i38 + 8 >> 3] = +1;
   HEAP32[i38 + 16 >> 2] = 0;
   HEAP32[i38 >> 2] = H_BASE + 328;
   HEAPF32[i38 + 20 >> 2] = d39;
   i36 = i9 | 0;
   HEAP32[i36 >> 2] = i38;
   __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i7, i9);
   i38 = HEAP32[i36 >> 2] | 0;
   if ((i38 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 31](i38);
   }
   i38 = i1 + 16 | 0;
   i36 = HEAP32[i38 >> 2] | 0;
   i42 = HEAP32[(HEAP32[i36 >> 2] | 0) + 152 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i11, 2);
   i43 = FUNCTION_TABLE_iiiiiid[i42 & 1](i36, i7, i10, i27, i11, d2) | 0;
   i36 = HEAP32[i11 >> 2] | 0;
   do {
    if ((i36 | 0) != 0) {
     i42 = i36 | 0;
     i44 = (HEAP32[i42 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i36);
      break;
     } else {
      HEAP32[i42 >> 2] = i44;
      break;
     }
    }
   } while (0);
   if (i43) {
    i36 = HEAP32[i38 >> 2] | 0;
    i27 = HEAP32[(HEAP32[i36 >> 2] | 0) + 116 >> 2] | 0;
    i44 = HEAP32[i33 >> 2] | 0;
    d39 = +HEAPF32[(HEAP32[i34 >> 2] | 0) + 4 >> 2];
    L48 : while (1) {
     i42 = i44;
     while (1) {
      i42 = HEAP32[i42 + 36 >> 2] | 0;
      if ((i42 | 0) == 0) {
       break L48;
      }
      i45 = i42 + 32 | 0;
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
       break;
      }
      if ((HEAP8[i42 + 21 | 0] & 16) != 0) {
       break;
      }
      if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i42) | 0) {
       break;
      }
     }
     if ((HEAP32[i42 + 208 >> 2] | 0) != 0) {
      break;
     }
     i44 = i42;
     d39 = d39 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i45 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
    }
    FUNCTION_TABLE_vif[i27 & 1](i36, d39);
    i46 = 1;
   } else {
    i46 = 0;
   }
   i44 = HEAP32[i32 >> 2] | 0;
   if ((i44 | 0) != 0) {
    i34 = HEAP32[i29 >> 2] | 0;
    i33 = i34 + (i44 << 2) | 0;
    i44 = i34;
    while (1) {
     i34 = HEAP32[i44 >> 2] | 0;
     if ((i34 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i34 >> 2] | 0) + 4 >> 2] & 31](i34);
     }
     i44 = i44 + 4 | 0;
     if ((i44 | 0) == (i33 | 0)) {
      break;
     }
    }
    HEAP32[i32 >> 2] = 0;
   }
   i33 = HEAP32[i29 >> 2] | 0;
   if ((i33 | 0) == 0) {
    i31 = i46;
    break;
   }
   HEAP32[i29 >> 2] = 0;
   HEAP32[i30 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i33);
   i31 = i46;
  } else {
   i31 = 0;
  }
 } while (0);
 L70 : do {
  if ((i3 | 0) == 345) {
   i46 = i1 + 4 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i46 >> 2] | 0) + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
    i28 = i31;
    STACKTOP = i6;
    return i28 | 0;
   }
   i45 = __ZNK7WebCore11RenderStyle21transitionForPropertyENS_13CSSPropertyIDE(i5, 345) | 0;
   if ((i45 | 0) == 0) {
    i47 = i31;
    break;
   }
   i11 = HEAP8[i45 + 44 | 0] | 0;
   do {
    if (i11 << 24 >> 24 >= 0) {
     i10 = HEAP8[i45 + 45 | 0] | 0;
     if ((i10 & 31) != 0) {
      break;
     }
     if ((i11 & 64) != 0) {
      break;
     }
     if ((i10 & 96) == 0) {
      i47 = i31;
      break L70;
     }
    }
   } while (0);
   if (+HEAPF64[i45 + 32 >> 3] == +0) {
    if (+HEAPF64[i45 + 24 >> 3] <= +0) {
     i47 = i31;
     break;
    }
   }
   i11 = i12 | 0;
   HEAP32[i11 >> 2] = 0;
   i30 = i12 + 4 | 0;
   HEAP32[i30 >> 2] = 0;
   i29 = i12 + 8 | 0;
   HEAP32[i29 >> 2] = 0;
   HEAP32[i12 + 12 >> 2] = 1;
   i32 = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
   i10 = i15 | 0;
   HEAP32[i10 >> 2] = 0;
   __ZN7WebCore23TransformAnimationValue6createEdRKNS_19TransformOperationsEN3WTF10PassRefPtrINS_14TimingFunctionEEE(i14, +0, i32, i15);
   i32 = i13 | 0;
   i7 = i14 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i32 >> 2] = i9;
   __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i12, i13);
   i9 = HEAP32[i32 >> 2] | 0;
   if ((i9 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
   }
   i9 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 + 4 | 0;
     i32 = i10 | 0;
     i7 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i32 >> 2] = i7;
      break;
     }
     i7 = i10 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
    }
   } while (0);
   i9 = (HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
   i7 = i18 | 0;
   HEAP32[i7 >> 2] = 0;
   __ZN7WebCore23TransformAnimationValue6createEdRKNS_19TransformOperationsEN3WTF10PassRefPtrINS_14TimingFunctionEEE(i17, +1, i9, i18);
   i9 = i16 | 0;
   i10 = i17 | 0;
   i32 = HEAP32[i10 >> 2] | 0;
   HEAP32[i10 >> 2] = 0;
   HEAP32[i9 >> 2] = i32;
   __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i12, i16);
   i32 = HEAP32[i9 >> 2] | 0;
   if ((i32 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i32 >> 2] | 0) + 4 >> 2] & 31](i32);
   }
   i32 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i7 = i32 + 4 | 0;
     i9 = i7 | 0;
     i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i9 >> 2] = i10;
      break;
     }
     i10 = i7 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i32 = HEAP32[i1 + 16 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i32 >> 2] | 0) + 152 >> 2] | 0;
   i7 = HEAP32[(HEAP32[i46 >> 2] | 0) + 32 >> 2] | 0;
   i9 = HEAP32[i7 + 56 >> 2] | 0;
   HEAP32[i19 >> 2] = HEAP32[i7 + 52 >> 2];
   HEAP32[i19 + 4 >> 2] = i9;
   __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i21, 1);
   i9 = FUNCTION_TABLE_iiiiiid[i10 & 1](i32, i12, i20, i45, i21, d2) | 0;
   i32 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i32 | 0) != 0) {
     i10 = i32 | 0;
     i7 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i32);
      break;
     } else {
      HEAP32[i10 >> 2] = i7;
      break;
     }
    }
   } while (0);
   if (i9) {
    __ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE(i1, i5);
    i48 = 1;
   } else {
    i48 = i31;
   }
   i32 = HEAP32[i29 >> 2] | 0;
   if ((i32 | 0) != 0) {
    i45 = HEAP32[i11 >> 2] | 0;
    i46 = i45 + (i32 << 2) | 0;
    i32 = i45;
    while (1) {
     i45 = HEAP32[i32 >> 2] | 0;
     if ((i45 | 0) != 0) {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i45 >> 2] | 0) + 4 >> 2] & 31](i45);
     }
     i32 = i32 + 4 | 0;
     if ((i32 | 0) == (i46 | 0)) {
      break;
     }
    }
    HEAP32[i29 >> 2] = 0;
   }
   i46 = HEAP32[i11 >> 2] | 0;
   if ((i46 | 0) == 0) {
    i47 = i48;
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i30 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i46);
   i47 = i48;
  } else {
   i47 = i31;
  }
 } while (0);
 if ((i3 | 0) != 237) {
  i28 = i47;
  STACKTOP = i6;
  return i28 | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  i28 = i47;
  STACKTOP = i6;
  return i28 | 0;
 }
 i3 = __ZNK7WebCore11RenderStyle21transitionForPropertyENS_13CSSPropertyIDE(i5, 237) | 0;
 if ((i3 | 0) == 0) {
  i28 = i47;
  STACKTOP = i6;
  return i28 | 0;
 }
 i31 = HEAP8[i3 + 44 | 0] | 0;
 do {
  if (i31 << 24 >> 24 >= 0) {
   i48 = HEAP8[i3 + 45 | 0] | 0;
   if ((i48 & 31) != 0) {
    break;
   }
   if ((i31 & 64) != 0) {
    break;
   }
   if ((i48 & 96) == 0) {
    i28 = i47;
   } else {
    break;
   }
   STACKTOP = i6;
   return i28 | 0;
  }
 } while (0);
 do {
  if (+HEAPF64[i3 + 32 >> 3] == +0) {
   if (+HEAPF64[i3 + 24 >> 3] > +0) {
    break;
   } else {
    i28 = i47;
   }
   STACKTOP = i6;
   return i28 | 0;
  }
 } while (0);
 i31 = i22 | 0;
 HEAP32[i31 >> 2] = 0;
 i48 = i22 + 4 | 0;
 HEAP32[i48 >> 2] = 0;
 i21 = i22 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 HEAP32[i22 + 12 >> 2] = 4;
 i20 = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0;
 i4 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAPF64[i4 + 8 >> 3] = +0;
 HEAP32[i4 + 16 >> 2] = 0;
 HEAP32[i4 >> 2] = H_BASE + 296;
 i12 = i4 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 HEAP32[i4 + 24 >> 2] = 0;
 HEAP32[i4 + 28 >> 2] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i12, i20) | 0;
 i20 = i23 | 0;
 HEAP32[i20 >> 2] = i4;
 __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i22, i23);
 i23 = HEAP32[i20 >> 2] | 0;
 if ((i23 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 4 >> 2] & 31](i23);
 }
 i23 = (HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0;
 i20 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAPF64[i20 + 8 >> 3] = +1;
 HEAP32[i20 + 16 >> 2] = 0;
 HEAP32[i20 >> 2] = H_BASE + 296;
 i4 = i20 + 20 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i20 + 24 >> 2] = 0;
 HEAP32[i20 + 28 >> 2] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i4, i23) | 0;
 i23 = i24 | 0;
 HEAP32[i23 >> 2] = i20;
 __ZN7WebCore17KeyframeValueList6insertEN3WTF10PassOwnPtrIKNS_14AnimationValueEEE(i22, i24);
 i24 = HEAP32[i23 >> 2] | 0;
 if ((i24 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 31](i24);
 }
 i24 = HEAP32[i1 + 16 >> 2] | 0;
 i23 = HEAP32[(HEAP32[i24 >> 2] | 0) + 152 >> 2] | 0;
 HEAP32[i25 >> 2] = 0;
 HEAP32[i25 + 4 >> 2] = 0;
 __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i26, 4);
 i20 = FUNCTION_TABLE_iiiiiid[i23 & 1](i24, i22, i25, i3, i26, d2) | 0;
 i3 = HEAP32[i26 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i26 = i3 | 0;
   i25 = (HEAP32[i26 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i26 >> 2] = i25;
    break;
   }
  }
 } while (0);
 if (i20) {
  __ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE(i1, i5);
  i49 = 1;
 } else {
  i49 = i47;
 }
 i47 = HEAP32[i21 >> 2] | 0;
 if ((i47 | 0) != 0) {
  i5 = HEAP32[i31 >> 2] | 0;
  i1 = i5 + (i47 << 2) | 0;
  i47 = i5;
  while (1) {
   i5 = HEAP32[i47 >> 2] | 0;
   if ((i5 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
   }
   i47 = i47 + 4 | 0;
   if ((i47 | 0) == (i1 | 0)) {
    break;
   }
  }
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i31 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i28 = i49;
  STACKTOP = i6;
  return i28 | 0;
 }
 HEAP32[i31 >> 2] = 0;
 HEAP32[i48 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i21);
 i28 = i49;
 STACKTOP = i6;
 return i28 | 0;
}
function __ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 4 | 0;
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(HEAP32[i5 >> 2] | 0, 0);
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i6 + 20 | 0;
 L1 : do {
  if ((HEAP8[i7] & 4) != 0) {
   do {
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
     if ((HEAP8[i6 + 21 | 0] & 16) != 0) {
      break;
     }
     if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i6) | 0) {
      break;
     }
     i8 = i6 + 136 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i9 | 0) != 0) {
      i8 = i9 + 8 | 0;
      if ((HEAP32[i8 >> 2] | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
      }
      i8 = i9 | 0;
      i10 = HEAP32[i8 >> 2] | 0;
      if ((i10 | 0) != 0) {
       HEAP32[i8 >> 2] = 0;
       HEAP32[i9 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i10);
      }
      __ZN3WTF8fastFreeEPv(i9);
     }
     i9 = i6 + 140 | 0;
     i10 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = 0;
     if ((i10 | 0) != 0) {
      i9 = i10 + 8 | 0;
      if ((HEAP32[i9 >> 2] | 0) != 0) {
       HEAP32[i9 >> 2] = 0;
      }
      i9 = i10 | 0;
      i8 = HEAP32[i9 >> 2] | 0;
      if ((i8 | 0) != 0) {
       HEAP32[i9 >> 2] = 0;
       HEAP32[i10 + 4 >> 2] = 0;
       __ZN3WTF8fastFreeEPv(i8);
      }
      __ZN3WTF8fastFreeEPv(i10);
     }
     HEAP8[i7] = HEAP8[i7] & -5;
     break L1;
    }
   } while (0);
   __ZN7WebCore11RenderLayer18rebuildZOrderListsEv(i6);
  }
 } while (0);
 i6 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i5 >> 2] | 0) | 0;
 i7 = __ZNK7WebCore21RenderLayerCompositor29needsFixedRootBackgroundLayerERKNS_11RenderLayerE(i6, HEAP32[i5 >> 2] | 0) | 0;
 HEAP8[i1 + 93 | 0] = i7 & 1;
 i6 = __ZN7WebCore18RenderLayerBacking21updateBackgroundLayerEb(i1, i7) | 0;
 i7 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i5 >> 2] | 0) | 0;
 i10 = __ZN7WebCore18RenderLayerBacking21updateForegroundLayerEb(i1, __ZNK7WebCore21RenderLayerCompositor29needsContentsCompositingLayerERKNS_11RenderLayerE(i7, HEAP32[i5 >> 2] | 0) | 0) | 0 | i6;
 i6 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i5 >> 2] | 0) | 0;
 i7 = __ZNK7WebCore21RenderLayerCompositor27clipsCompositingDescendantsERKNS_11RenderLayerE(i6, HEAP32[i5 >> 2] | 0) | 0;
 i6 = i7 & ((__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i5 >> 2] | 0) | 0) ^ 1);
 i7 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i5 >> 2] | 0) | 0;
 i8 = __ZN7WebCore18RenderLayerBacking27updateAncestorClippingLayerEb(i1, __ZNK7WebCore21RenderLayerCompositor17clippedByAncestorERNS_11RenderLayerE(i7, HEAP32[i5 >> 2] | 0) | 0) | 0 | i10;
 i10 = __ZN7WebCore18RenderLayerBacking29updateDescendantClippingLayerEb(i1, i6) | 0 | i8;
 do {
  if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i5 >> 2] | 0) | 0) {
   i11 = 22;
  } else {
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i5 >> 2] | 0) | 0) {
    i11 = 22;
    break;
   }
   i12 = 0;
   i13 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 22) {
  i8 = HEAP32[i5 >> 2] | 0;
  i12 = (HEAP32[i8 + 128 >> 2] | 0) != 0;
  i13 = i8;
 }
 do {
  if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i13 | 0) | 0) {
   i11 = 26;
  } else {
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i5 >> 2] | 0) | 0) {
    i11 = 26;
    break;
   }
   i14 = 0;
   i15 = HEAP32[i5 >> 2] | 0;
  }
 } while (0);
 if ((i11 | 0) == 26) {
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = (HEAP32[i13 + 132 >> 2] | 0) != 0;
  i15 = i13;
 }
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i15 | 0) | 0) {
  i11 = 29;
 } else {
  if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i5 >> 2] | 0) | 0) {
   i11 = 29;
  } else {
   i16 = 0;
  }
 }
 do {
  if ((i11 | 0) == 29) {
   __ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv(i3, HEAP32[i5 >> 2] | 0);
   if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
    i16 = 0;
    break;
   }
   i16 = (HEAP32[i3 + 12 >> 2] | 0) > 0;
  }
 } while (0);
 i3 = __ZN7WebCore18RenderLayerBacking28updateOverflowControlsLayersEbbb(i1, i12, i14, i16) | 0 | i10;
 i10 = __ZN7WebCore18RenderLayerBacking21updateScrollingLayersEb(i1, __ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i5 >> 2] | 0) | 0) | 0 | i3;
 if (i10) {
  __ZN7WebCore18RenderLayerBacking23updateInternalHierarchyEv(i1);
 }
 do {
  if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
   i3 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if (i10) {
    i17 = HEAP32[i1 + 16 >> 2] | 0;
   } else {
    i16 = HEAP32[i1 + 16 >> 2] | 0;
    if ((HEAP32[i3 + 364 >> 2] | 0) == (i16 | 0)) {
     break;
    } else {
     i17 = i16;
    }
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 24 >> 2] & 15](i17, i3);
  }
 } while (0);
 i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0;
 i3 = i17 + 116 | 0;
 while (1) {
  if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
   i18 = 1;
   break;
  }
  i16 = HEAP32[i3 >> 2] | 0;
  if ((i16 | 0) == 0) {
   i11 = 42;
   break;
  } else {
   i3 = i16;
  }
 }
 if ((i11 | 0) == 42) {
  i18 = (HEAP32[(HEAP32[i17 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0;
 }
 if (__ZN7WebCore18RenderLayerBacking15updateMaskLayerEb(i1, i18) | 0) {
  i18 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i18 >> 2] | 0) + 48 >> 2] & 15](i18, HEAP32[i1 + 32 >> 2] | 0);
 }
 i18 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i18 + 32 >> 2] | 0) + 20 >> 2] & 262144 | 0) == 0) {
   i17 = HEAP32[i1 + 16 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 52 >> 2] & 15](i17, 0);
  } else {
   if ((HEAP32[(__ZNK7WebCore11RenderLayer15reflectionLayerEv(i18) | 0) + 208 >> 2] | 0) == 0) {
    break;
   }
   i17 = HEAP32[(HEAP32[(__ZNK7WebCore11RenderLayer15reflectionLayerEv(HEAP32[i5 >> 2] | 0) | 0) + 208 >> 2] | 0) + 16 >> 2] | 0;
   i3 = HEAP32[i1 + 16 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 15](i3, i17);
  }
 } while (0);
 i18 = __ZNK7WebCore18RenderLayerBacking33isSimpleContainerCompositingLayerEv(i1) | 0;
 HEAP8[i4] = 0;
 if ((HEAP8[(HEAP32[i5 >> 2] | 0) + 22 | 0] & 8) != 0) {
  __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundColorEbRb(i1, i18, i4);
  __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundImageEbRb(i1, i18, i4);
 }
 __ZN7WebCore18RenderLayerBacking28updateRootLayerConfigurationEv(i1);
 if (__ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv(i1) | 0) {
  __ZN7WebCore18RenderLayerBacking19updateImageContentsEv(i1);
 }
 i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] & 3](i4 | 0) | 0) {
   if (!(__ZNK7WebCore20RenderEmbeddedObject28allowsAcceleratedCompositingEv(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) | 0)) {
    i11 = 57;
    break;
   }
   i18 = HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 108 >> 2] | 0;
   i17 = i18;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 152 >> 2] & 3](i17) | 0) {
    i19 = i10;
    break;
   }
   i3 = HEAP32[i1 + 16 >> 2] | 0;
   i16 = HEAP32[(HEAP32[i3 >> 2] | 0) + 180 >> 2] | 0;
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 96 >> 2] & 3](i17) | 0;
   FUNCTION_TABLE_vii[i16 & 15](i3, i14);
   i19 = i10;
  } else {
   i11 = 57;
  }
 } while (0);
 do {
  if ((i11 | 0) == 57) {
   i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 232 >> 2] & 3](i4 | 0) | 0)) {
    i19 = i10;
    break;
   }
   i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 80 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i19 = i10;
    break;
   }
   i14 = i4;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 16 >> 2] & 3](i4) | 0)) {
    i19 = i10;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 12 >> 2] & 3](i4) | 0)) {
    i19 = i10;
    break;
   }
   i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 80 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i19 = 1;
    break;
   }
   i14 = HEAP32[i1 + 16 >> 2] | 0;
   i3 = HEAP32[(HEAP32[i14 >> 2] | 0) + 188 >> 2] | 0;
   i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 3](i4) | 0;
   FUNCTION_TABLE_vii[i3 & 15](i14, i16);
   i19 = 1;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 228 >> 2] & 3](i1 | 0) | 0)) {
  i20 = i19;
  STACKTOP = i2;
  return i20 | 0;
 }
 i20 = __ZN7WebCore21RenderLayerCompositor24parentFrameContentLayersEPNS_12RenderWidgetE(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) | 0;
 STACKTOP = i2;
 return i20 | 0;
}
function __ZN7WebCore18RenderLayerBacking28updateOverflowControlsLayersEbbb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i1 + 36 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = (i13 | 0) == 0;
 do {
  if (i2) {
   if (!i14) {
    i15 = 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 120 | 0);
   i16 = i1 + 4 | 0;
   i17 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i18 = 0;
   } else {
    i19 = HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 296 >> 2] & 3](i19) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i6, i18, i1 | 0);
   i19 = i6 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   i20 = HEAP32[(HEAP32[i17 >> 2] | 0) + 248 >> 2] | 0;
   i21 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i16 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i20 & 15](i17, i21);
   i21 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = i21;
   do {
    if ((i17 | 0) == 0) {
     HEAP32[i19 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     i21 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 31](i21);
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i15 = 1;
    break;
   }
   i17 = i19 | 0;
   i21 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
   if ((i21 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    i15 = 1;
    break;
   } else {
    HEAP32[i17 >> 2] = i21;
    i15 = 1;
    break;
   }
  } else {
   if (i14) {
    i15 = 0;
    break;
   }
   if ((HEAP8[i13 + 340 | 0] & 8) == 0) {
    HEAP32[i12 >> 2] = 0;
    i22 = i13;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i13, 0);
    i21 = HEAP32[i12 >> 2] | 0;
    HEAP32[i12 >> 2] = 0;
    if ((i21 | 0) == 0) {
     i15 = 1;
     break;
    } else {
     i22 = i21;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] & 31](i22);
   i15 = 1;
  }
 } while (0);
 i22 = i1 + 40 | 0;
 i12 = HEAP32[i22 >> 2] | 0;
 i13 = (i12 | 0) == 0;
 do {
  if (i3) {
   if (!i13) {
    i23 = 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i9, H_BASE + 96 | 0);
   i14 = i1 + 4 | 0;
   i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i24 = 0;
   } else {
    i6 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 296 >> 2] & 3](i6) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i8, i24, i1 | 0);
   i6 = i8 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i7 >> 2] | 0) + 248 >> 2] | 0;
   i2 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i14 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i18 & 15](i7, i2);
   i2 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   i7 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = i2;
   do {
    if ((i7 | 0) == 0) {
     HEAP32[i6 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
     i2 = HEAP32[i6 >> 2] | 0;
     HEAP32[i6 >> 2] = 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
    }
   } while (0);
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i23 = 1;
    break;
   }
   i7 = i6 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    i23 = 1;
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    i23 = 1;
    break;
   }
  } else {
   if (i13) {
    i23 = 0;
    break;
   }
   if ((HEAP8[i12 + 340 | 0] & 8) == 0) {
    HEAP32[i22 >> 2] = 0;
    i25 = i12;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i12, 0);
    i2 = HEAP32[i22 >> 2] | 0;
    HEAP32[i22 >> 2] = 0;
    if ((i2 | 0) == 0) {
     i23 = 1;
     break;
    } else {
     i25 = i2;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 31](i25);
   i23 = 1;
  }
 } while (0);
 i25 = i1 + 44 | 0;
 i22 = HEAP32[i25 >> 2] | 0;
 i12 = (i22 | 0) == 0;
 do {
  if (i4) {
   if (!i12) {
    i26 = 0;
    break;
   }
   __ZN3WTF6StringC1EPKc(i11, H_BASE + 80 | 0);
   i13 = i1 + 4 | 0;
   i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i27 = 0;
   } else {
    i8 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 296 >> 2] & 3](i8) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i10, i27, i1 | 0);
   i8 = i10 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   i24 = HEAP32[(HEAP32[i9 >> 2] | 0) + 248 >> 2] | 0;
   i3 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i13 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i24 & 15](i9, i3);
   i3 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i9 = HEAP32[i25 >> 2] | 0;
   HEAP32[i25 >> 2] = i3;
   do {
    if ((i9 | 0) == 0) {
     HEAP32[i8 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
     i3 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = 0;
     if ((i3 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
    }
   } while (0);
   i8 = HEAP32[i11 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i26 = 1;
    break;
   }
   i9 = i8 | 0;
   i3 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    i26 = 1;
    break;
   } else {
    HEAP32[i9 >> 2] = i3;
    i26 = 1;
    break;
   }
  } else {
   if (i12) {
    i26 = 0;
    break;
   }
   if ((HEAP8[i22 + 340 | 0] & 8) == 0) {
    HEAP32[i25 >> 2] = 0;
    i28 = i22;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i22, 0);
    i3 = HEAP32[i25 >> 2] | 0;
    HEAP32[i25 >> 2] = 0;
    if ((i3 | 0) == 0) {
     i26 = 1;
     break;
    } else {
     i28 = i3;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 31](i28);
   i26 = 1;
  }
 } while (0);
 i28 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i25 = __ZN7WebCore4Page20scrollingCoordinatorEv(i1) | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   if (i15) {
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i25 >> 2] | 0) + 88 >> 2] & 7](i25, HEAP32[i28 >> 2] | 0, 0);
   }
   if (!i23) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i25 >> 2] | 0) + 88 >> 2] & 7](i25, HEAP32[i28 >> 2] | 0, 1);
  }
 } while (0);
 if (i15) {
  STACKTOP = i5;
  return 1;
 } else {
  STACKTOP = i5;
  return i23 | i26 | 0;
 }
 return 0;
}
function __ZN7WebCore18RenderLayerBacking13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i6 + 32 | 0;
 i10 = i6 + 48 | 0;
 i11 = i6 + 64 | 0;
 i12 = i6 + 80 | 0;
 i13 = i6 + 96 | 0;
 i14 = i6 + 112 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i20 = i1 + 16 | 0;
 do {
  if ((HEAP32[i20 >> 2] | 0) != (i2 | 0)) {
   if ((HEAP32[i1 + 20 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   if ((HEAP32[i1 + 24 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   if ((HEAP32[i1 + 32 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   if ((HEAP32[i1 + 52 >> 2] | 0) == (i2 | 0)) {
    break;
   }
   if ((HEAP32[i1 + 36 >> 2] | 0) == (i2 | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 128 >> 2] | 0;
    i22 = i7;
    i23 = i8;
    if ((i21 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i24 = i8 | 0;
    __ZN7WebCore15GraphicsContext4saveEv(i3);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 128 >> 2] & 15](i23, i21);
    __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i8 >> 2] | 0) | 0), +(-(HEAP32[i23 + 4 >> 2] | 0) | 0));
    i23 = i5;
    HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i22 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i22 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i22 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
    i23 = HEAP32[i24 + 4 >> 2] | 0;
    i22 = i7 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + (HEAP32[i24 >> 2] | 0);
    i24 = i7 + 4 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + i23;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 12 >> 2] & 7](i21, i3, i7);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
    STACKTOP = i6;
    return;
   }
   if ((HEAP32[i1 + 40 >> 2] | 0) == (i2 | 0)) {
    i21 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 132 >> 2] | 0;
    i23 = i9;
    i24 = i8;
    if ((i21 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i22 = i8 | 0;
    __ZN7WebCore15GraphicsContext4saveEv(i3);
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 128 >> 2] & 15](i24, i21);
    __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i8 >> 2] | 0) | 0), +(-(HEAP32[i24 + 4 >> 2] | 0) | 0));
    i24 = i5;
    HEAP32[i23 >> 2] = HEAP32[i24 >> 2];
    HEAP32[i23 + 4 >> 2] = HEAP32[i24 + 4 >> 2];
    HEAP32[i23 + 8 >> 2] = HEAP32[i24 + 8 >> 2];
    HEAP32[i23 + 12 >> 2] = HEAP32[i24 + 12 >> 2];
    i24 = HEAP32[i22 + 4 >> 2] | 0;
    i23 = i9 | 0;
    HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + (HEAP32[i22 >> 2] | 0);
    i22 = i9 + 4 | 0;
    HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + i24;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 12 >> 2] & 7](i21, i3, i9);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
    STACKTOP = i6;
    return;
   } else {
    if ((HEAP32[i1 + 44 >> 2] | 0) != (i2 | 0)) {
     STACKTOP = i6;
     return;
    }
    i21 = i1 + 4 | 0;
    __ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv(i16, HEAP32[i21 >> 2] | 0);
    __ZN7WebCore15GraphicsContext4saveEv(i3);
    __ZN7WebCore15GraphicsContext9translateEff(i3, +(-(HEAP32[i14 >> 2] | 0) | 0), +(-(HEAP32[i16 + 4 >> 2] | 0) | 0));
    i24 = i17;
    i22 = i5;
    HEAP32[i24 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i24 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
    HEAP32[i24 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
    HEAP32[i24 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
    i22 = HEAP32[i15 + 4 >> 2] | 0;
    i24 = i17 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + (HEAP32[i15 >> 2] | 0);
    i24 = i17 + 4 | 0;
    HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + i22;
    i22 = HEAP32[i21 >> 2] | 0;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i18 + 4 >> 2] = 0;
    __ZN7WebCore11RenderLayer17paintScrollCornerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i22, i3, i18, i17);
    i22 = HEAP32[i21 >> 2] | 0;
    HEAP32[i19 >> 2] = 0;
    HEAP32[i19 + 4 >> 2] = 0;
    __ZN7WebCore11RenderLayer12paintResizerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i22, i3, i19, i17);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
    STACKTOP = i6;
    return;
   }
  }
 } while (0);
 i17 = i1 + 4 | 0;
 i19 = HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) != 0) {
   i18 = __ZN7WebCore24InspectorInstrumentation30instrumentingAgentsForRendererEPNS_12RenderObjectE(i19) | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation13willPaintImplEPNS_19InstrumentingAgentsEPNS_12RenderObjectE(i18, i19);
  }
 } while (0);
 i19 = i10;
 i18 = i5;
 HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i19 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i19 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i19 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 if ((i4 & 8 | 0) == 0) {
  i18 = HEAP32[i20 >> 2] | 0;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 284 >> 2] & 3](i18) | 0;
  do {
   if ((i20 | 0) == 0) {
    i25 = 12;
   } else {
    if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 84 >> 2] & 3](i20) | 0)) {
     i25 = 12;
     break;
    }
    i18 = HEAP32[i1 + 64 >> 2] | 0;
    i19 = HEAP32[i1 + 68 >> 2] | 0;
    i15 = HEAP32[i1 + 72 >> 2] | 0;
    i16 = HEAP32[i1 + 76 >> 2] | 0;
    i14 = i20;
    i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 96 >> 2] & 3](i20) | 0;
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 3](i20) | 0;
    i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 100 >> 2] & 3](i20) | 0;
    i22 = i8 + i16 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] & 3](i20) | 0) | 0;
    HEAP32[i12 >> 2] = i18 - i9;
    HEAP32[i12 + 4 >> 2] = i19 - i8;
    HEAP32[i12 + 8 >> 2] = i9 + i15 + i7;
    HEAP32[i12 + 12 >> 2] = i22;
   }
  } while (0);
  if ((i25 | 0) == 12) {
   i25 = i12;
   i20 = i1 + 64 | 0;
   HEAP32[i25 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i25 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
   HEAP32[i25 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
   HEAP32[i25 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
  }
  __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i11, i12);
  __ZN7WebCore7IntRect9intersectERKS0_(i10, i11);
 }
 __ZN7WebCore18RenderLayerBacking14paintIntoLayerEPKNS_13GraphicsLayerEPNS_15GraphicsContextERKNS_7IntRectEjj(i1, i2, i3, i10, 0, i4);
 i4 = HEAP32[(HEAP32[i17 >> 2] | 0) + 32 >> 2] | 0;
 i17 = i5;
 i10 = HEAP32[i17 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i17 >> 2];
 HEAP32[i13 + 4 >> 2] = i10;
 i10 = i5 + 8 | 0;
 i5 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i13 + 8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i13 + 12 >> 2] = i5;
 if ((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i5 = __ZN7WebCore24InspectorInstrumentation30instrumentingAgentsForRendererEPNS_12RenderObjectE(i4) | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore24InspectorInstrumentation12didPaintImplEPNS_19InstrumentingAgentsEPNS_12RenderObjectEPNS_15GraphicsContextERKNS_10LayoutRectE(i5, i4, i3, i13);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore18RenderLayerBacking21updateScrollingLayersEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 4 | 0;
 i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = __ZN7WebCore4Page20scrollingCoordinatorEv(i9) | 0;
 }
 i9 = i1 + 48 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 do {
  if (i2) {
   if (!i12) {
    i13 = 0;
    STACKTOP = i3;
    return i13 | 0;
   }
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 48 | 0);
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = 0;
   } else {
    i16 = HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 296 >> 2] & 3](i16) | 0;
   }
   i16 = i1 | 0;
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i15, i16);
   i14 = i4 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i17 >> 2] | 0) + 248 >> 2] | 0;
   i19 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i18 & 15](i17, i19);
   i19 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i17 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i19;
   do {
    if ((i17 | 0) == 0) {
     HEAP32[i14 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     i19 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i19 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i19 >> 2] | 0) + 4 >> 2] & 31](i19);
    }
   } while (0);
   i14 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i14 | 0) != 0) {
     i17 = i14 | 0;
     i19 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i19 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i14);
      break;
     } else {
      HEAP32[i17 >> 2] = i19;
      break;
     }
    }
   } while (0);
   i14 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 92 >> 2] & 15](i14, 0);
   i14 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 88 >> 2] & 15](i14, 1);
   __ZN3WTF6StringC1EPKc(i7, H_BASE + 24 | 0);
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i20 = 0;
   } else {
    i19 = HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 296 >> 2] & 3](i19) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i6, i20, i16);
   i19 = i6 | 0;
   i14 = HEAP32[i19 >> 2] | 0;
   i17 = HEAP32[(HEAP32[i14 >> 2] | 0) + 248 >> 2] | 0;
   i18 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i17 & 15](i14, i18);
   i18 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   i14 = i1 + 52 | 0;
   i17 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i18;
   do {
    if ((i17 | 0) == 0) {
     HEAP32[i19 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 31](i17);
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     if ((i18 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 31](i18);
    }
   } while (0);
   i19 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i19 | 0) != 0) {
     i17 = i19 | 0;
     i16 = (HEAP32[i17 >> 2] | 0) - 2 | 0;
     if ((i16 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i19);
      break;
     } else {
      HEAP32[i17 >> 2] = i16;
      break;
     }
    }
   } while (0);
   i19 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 92 >> 2] & 15](i19, 1);
   HEAP32[(HEAP32[i14 >> 2] | 0) + 344 >> 2] = (HEAP32[i1 + 20 >> 2] | 0) == 0 ? 26 : 24;
   i19 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 24 >> 2] & 15](i19, HEAP32[i14 >> 2] | 0);
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 15](i10, HEAP32[i8 >> 2] | 0);
  } else {
   if (i12) {
    i13 = 0;
    STACKTOP = i3;
    return i13 | 0;
   }
   if ((HEAP8[i11 + 340 | 0] & 8) != 0) {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0, i11, 0);
   }
   i19 = i1 + 52 | 0;
   i16 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i16 | 0) != 0) {
     if ((HEAP8[i16 + 340 | 0] & 8) == 0) {
      break;
     }
     __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0, i16, 0);
    }
   } while (0);
   i16 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i16 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
   }
   i16 = HEAP32[i19 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   if ((i16 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
   }
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i10 >> 2] | 0) + 84 >> 2] & 15](i10, HEAP32[i8 >> 2] | 0);
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking23updateInternalHierarchyEv(i1);
 i10 = i1 + 16 | 0;
 i9 = (HEAP32[i1 + 24 >> 2] | 0) == 0 | 0;
 i11 = (HEAP32[i1 + 20 >> 2] | 0) == 0 ? i9 | 2 : i9;
 i9 = (HEAP32[i1 + 32 >> 2] | 0) == 0 ? i11 | 4 : i11;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i21 = i9;
 } else {
  i21 = i9 & 5 | 16;
 }
 HEAP32[(HEAP32[i10 >> 2] | 0) + 344 >> 2] = i21;
 i21 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 124 >> 2] & 31](i21);
 i21 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0;
 __ZN7WebCore21RenderLayerCompositor23scrollingLayerDidChangeERNS_11RenderLayerE(i21, HEAP32[i8 >> 2] | 0);
 i13 = 1;
 STACKTOP = i3;
 return i13 | 0;
}
function __ZN7WebCore18RenderLayerBacking21updateBackgroundLayerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 24 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = (i8 | 0) == 0;
 do {
  if (i2) {
   if (i9) {
    i10 = i1 + 4 | 0;
    i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
    if ((i11 | 0) == 0) {
     i12 = 0;
    } else {
     i13 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
     i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 296 >> 2] & 3](i13) | 0;
    }
    __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i12, i1 | 0);
    i13 = i4 | 0;
    i11 = HEAP32[i13 >> 2] | 0;
    i14 = HEAP32[(HEAP32[i11 >> 2] | 0) + 248 >> 2] | 0;
    i15 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i10 >> 2] | 0) | 0) | 0;
    FUNCTION_TABLE_vii[i14 & 15](i11, i15);
    i15 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    i11 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = i15;
    do {
     if ((i11 | 0) == 0) {
      HEAP32[i13 >> 2] = 0;
     } else {
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
      i15 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
     }
    } while (0);
    i13 = HEAP32[i7 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 92 >> 2] & 15](i13, 1);
    i13 = HEAP32[i7 >> 2] | 0;
    i11 = HEAP32[(HEAP32[i13 >> 2] | 0) + 64 >> 2] | 0;
    HEAPF32[i5 >> 2] = +0;
    HEAPF32[i5 + 4 >> 2] = +0;
    HEAPF32[i5 + 8 >> 2] = +0;
    FUNCTION_TABLE_vii[i11 & 15](i13, i5);
    HEAP32[(HEAP32[i7 >> 2] | 0) + 344 >> 2] = 1;
    i16 = 1;
   } else {
    i16 = 0;
   }
   i13 = i1 + 12 | 0;
   if ((HEAP32[i13 >> 2] | 0) != 0) {
    i17 = i16;
    i18 = 29;
    break;
   }
   i11 = i1 + 4 | 0;
   i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i15 | 0) == 0) {
    i19 = 0;
   } else {
    i14 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 296 >> 2] & 3](i14) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i6, i19, i1 | 0);
   i14 = i6 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i15 >> 2] | 0) + 248 >> 2] | 0;
   i20 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i11 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i10 & 15](i15, i20);
   i20 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i20;
   do {
    if ((i15 | 0) == 0) {
     HEAP32[i14 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
     i20 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 31](i20);
    }
   } while (0);
   i14 = HEAP32[i13 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 256 >> 2] & 15](i14, 1);
   i14 = i1 + 16 | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 256 >> 2] & 15](i15, 0);
   i21 = i14;
  } else {
   do {
    if (i9) {
     i22 = 0;
    } else {
     if ((HEAP8[i8 + 340 | 0] & 8) == 0) {
      i23 = i8;
     } else {
      __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i8, 0);
      i23 = HEAP32[i7 >> 2] | 0;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 44 >> 2] & 31](i23);
     i14 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i14 | 0) == 0) {
      i22 = 1;
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
     i22 = 1;
    }
   } while (0);
   i13 = i1 + 12 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i17 = i22;
    i18 = 29;
    break;
   }
   if ((HEAP8[i14 + 340 | 0] & 8) == 0) {
    i24 = i14;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i14, 0);
    i24 = HEAP32[i13 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 44 >> 2] & 31](i24);
   i14 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i14 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
   }
   i14 = i1 + 16 | 0;
   i13 = HEAP32[i14 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 256 >> 2] & 15](i13, 1);
   i21 = i14;
  }
 } while (0);
 do {
  if ((i18 | 0) == 29) {
   if (i17) {
    i21 = i1 + 16 | 0;
    break;
   } else {
    i25 = 0;
    STACKTOP = i3;
    return i25 | 0;
   }
  }
 } while (0);
 i17 = HEAP32[i21 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 124 >> 2] & 31](i17);
 __ZN7WebCore21RenderLayerCompositor31fixedRootBackgroundLayerChangedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0);
 i25 = 1;
 STACKTOP = i3;
 return i25 | 0;
}
function __ZN7WebCore18RenderLayerBacking30positionOverflowControlsLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, d40 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
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
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i24 = i23;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = i25 | 0;
 i27 = i25;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i29 = i28 | 0;
 i30 = i28;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i33 = i1 + 4 | 0;
 i34 = HEAP32[i33 >> 2] | 0;
 do {
  if ((HEAP32[i34 + 128 >> 2] | 0) == 0) {
   if ((HEAP32[i34 + 132 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i35 = HEAP32[i34 + 32 >> 2] | 0;
 i36 = HEAP32[i35 + 52 >> 2] | 0;
 i37 = HEAP32[i35 + 56 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 i4 = i3 + 8 | 0;
 HEAP32[i4 >> 2] = i36;
 HEAP32[i4 + 4 >> 2] = i37;
 i37 = (HEAP32[i1 + 16 >> 2] | 0) + 12 | 0;
 i4 = HEAP32[i37 >> 2] | 0;
 i36 = HEAP32[i37 + 4 >> 2] | 0;
 i37 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i37 | 0) != 0) {
  __ZNK7WebCore11RenderLayer26rectForHorizontalScrollbarERKNS_7IntRectE(i8, i34, i5);
  i34 = HEAP32[(HEAP32[i37 >> 2] | 0) + 56 >> 2] | 0;
  i8 = (HEAP32[i7 + 4 >> 2] | 0) - i36 | 0;
  HEAP32[i10 >> 2] = (HEAP32[i7 >> 2] | 0) - i4;
  HEAP32[i10 + 4 >> 2] = i8;
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i9, i10);
  FUNCTION_TABLE_vii[i34 & 15](i37, i9);
  i9 = HEAP32[(HEAP32[i37 >> 2] | 0) + 68 >> 2] | 0;
  i34 = i6 + 8 | 0;
  i6 = HEAP32[i34 + 4 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i12 + 4 >> 2] = i6;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i11, i13);
  FUNCTION_TABLE_vii[i9 & 15](i37, i11);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 196 >> 2] & 3](i37) | 0) {
   i11 = HEAP32[i34 >> 2] | 0;
   i9 = HEAP32[i34 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i15 + 4 >> 2] = 0;
   i15 = i14 + 8 | 0;
   HEAP32[i15 >> 2] = i11;
   HEAP32[i15 + 4 >> 2] = i9;
   i9 = i37;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 144 >> 2] & 15](i37, i16);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 148 >> 2] & 15](i37, i16);
  }
  i16 = HEAP32[i37 >> 2] | 0;
  i9 = HEAP32[i16 + 92 >> 2] | 0;
  if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 128 >> 2] | 0) == 0) {
   i38 = 0;
  } else {
   i38 = (FUNCTION_TABLE_ii[HEAP32[i16 + 196 >> 2] & 3](i37) | 0) ^ 1;
  }
  FUNCTION_TABLE_vii[i9 & 15](i37, i38);
 }
 i38 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i38 | 0) != 0) {
  __ZNK7WebCore11RenderLayer24rectForVerticalScrollbarERKNS_7IntRectE(i19, HEAP32[i33 >> 2] | 0, i5);
  i5 = HEAP32[(HEAP32[i38 >> 2] | 0) + 56 >> 2] | 0;
  i19 = (HEAP32[i18 + 4 >> 2] | 0) - i36 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i18 >> 2] | 0) - i4;
  HEAP32[i21 + 4 >> 2] = i19;
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i20, i21);
  FUNCTION_TABLE_vii[i5 & 15](i38, i20);
  i20 = HEAP32[(HEAP32[i38 >> 2] | 0) + 68 >> 2] | 0;
  i5 = i17 + 8 | 0;
  i17 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i23 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i23 + 4 >> 2] = i17;
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i22, i24);
  FUNCTION_TABLE_vii[i20 & 15](i38, i22);
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i38 >> 2] | 0) + 196 >> 2] & 3](i38) | 0) {
   i22 = HEAP32[i5 >> 2] | 0;
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i26 >> 2] = 0;
   HEAP32[i26 + 4 >> 2] = 0;
   i26 = i25 + 8 | 0;
   HEAP32[i26 >> 2] = i22;
   HEAP32[i26 + 4 >> 2] = i20;
   i20 = i38;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 144 >> 2] & 15](i38, i27);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 148 >> 2] & 15](i38, i27);
  }
  i27 = HEAP32[i38 >> 2] | 0;
  i20 = HEAP32[i27 + 92 >> 2] | 0;
  if ((HEAP32[(HEAP32[i33 >> 2] | 0) + 132 >> 2] | 0) == 0) {
   i39 = 0;
  } else {
   i39 = (FUNCTION_TABLE_ii[HEAP32[i27 + 196 >> 2] & 3](i38) | 0) ^ 1;
  }
  FUNCTION_TABLE_vii[i20 & 15](i38, i39);
 }
 i39 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i39 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv(i30, HEAP32[i33 >> 2] | 0);
 i33 = i28 + 8 | 0;
 i28 = HEAP32[i33 >> 2] | 0;
 i30 = HEAP32[i33 + 4 >> 2] | 0;
 i33 = HEAP32[(HEAP32[i39 >> 2] | 0) + 56 >> 2] | 0;
 d40 = +((HEAP32[i29 + 4 >> 2] | 0) - i36 | 0);
 HEAPF32[i31 >> 2] = +((HEAP32[i29 >> 2] | 0) - i4 | 0);
 HEAPF32[i31 + 4 >> 2] = d40;
 FUNCTION_TABLE_vii[i33 & 15](i39, i31);
 i31 = HEAP32[(HEAP32[i39 >> 2] | 0) + 68 >> 2] | 0;
 i33 = i28;
 i28 = i30;
 HEAPF32[i32 >> 2] = +(i33 | 0);
 HEAPF32[i32 + 4 >> 2] = +(i28 | 0);
 FUNCTION_TABLE_vii[i31 & 15](i39, i32);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i39 >> 2] | 0) + 92 >> 2] & 15](i39, (i28 | 0) > 0 & (i33 | 0) > 0);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18RenderLayerBacking26createPrimaryGraphicsLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 HEAP8[H_BASE + 488 | 0] = 1;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = 0;
 } else {
  i9 = HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 296 >> 2] & 3](i9) | 0;
 }
 i9 = i1 | 0;
 __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i3, i8, i9);
 i8 = i3 | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 248 >> 2] | 0;
 i10 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i6 >> 2] | 0) | 0) | 0;
 FUNCTION_TABLE_vii[i7 & 15](i3, i10);
 i10 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 i3 = i1 + 16 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i10;
 do {
  if ((i7 | 0) == 0) {
   HEAP32[i8 >> 2] = 0;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i10 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  }
 } while (0);
 HEAP8[H_BASE + 488 | 0] = 0;
 do {
  if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 224 | 0);
   i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i11 = 0;
   } else {
    i7 = HEAP32[(HEAP32[i8 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 296 >> 2] & 3](i7) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i11, i9);
   i7 = i4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + 248 >> 2] | 0;
   i12 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i6 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i10 & 15](i8, i12);
   i12 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i1 + 28 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i12;
   do {
    if ((i10 | 0) == 0) {
     HEAP32[i7 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     i12 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
    }
   } while (0);
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i10 = i7 | 0;
   i12 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i12 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i10 >> 2] = i12;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i1 + 89 | 0] & 1) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 15](i5, 1);
  i5 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 256 >> 2] & 15](i5, 1);
 }
 i5 = HEAP32[i6 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i4 >> 2] | 0) + 116 >> 2] | 0;
 i9 = i5;
 d13 = +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
 L27 : while (1) {
  i5 = i9;
  while (1) {
   i5 = HEAP32[i5 + 36 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i14 = 29;
    break L27;
   }
   i15 = i5 + 32 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP8[i5 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i5) | 0) {
    break;
   }
  }
  if ((HEAP32[i5 + 208 >> 2] | 0) != 0) {
   i14 = 30;
   break;
  }
  i9 = i5;
  d13 = d13 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
 }
 if ((i14 | 0) == 29) {
  FUNCTION_TABLE_vif[i3 & 1](i4, d13);
  i16 = HEAP32[i6 >> 2] | 0;
  i17 = i16 + 32 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 36 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  __ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE(i1, i20);
  i21 = HEAP32[i6 >> 2] | 0;
  i22 = i21 + 32 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i23 + 36 | 0;
  i25 = HEAP32[i24 >> 2] | 0;
  __ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE(i1, i25);
  STACKTOP = i2;
  return;
 } else if ((i14 | 0) == 30) {
  FUNCTION_TABLE_vif[i3 & 1](i4, d13);
  i16 = HEAP32[i6 >> 2] | 0;
  i17 = i16 + 32 | 0;
  i18 = HEAP32[i17 >> 2] | 0;
  i19 = i18 + 36 | 0;
  i20 = HEAP32[i19 >> 2] | 0;
  __ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE(i1, i20);
  i21 = HEAP32[i6 >> 2] | 0;
  i22 = i21 + 32 | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  i24 = i23 + 36 | 0;
  i25 = HEAP32[i24 >> 2] | 0;
  __ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE(i1, i25);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 48 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i1 + 4 | 0;
 i13 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i12 >> 2] | 0) | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 __ZNK7WebCore21RenderLayerCompositor25calculateCompositedBoundsERKNS_11RenderLayerES3_(i3, i13, i14, i14);
 L1 : do {
  if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 40 >> 2] | 0) != 0) {
    break;
   }
   if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
    break;
   }
   i14 = HEAP32[i12 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = 0;
   } else {
    i13 = i14;
    while (1) {
     if ((HEAP32[(HEAP32[i13 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) != 0) {
      break L1;
     }
     if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i13) | 0) {
      break L1;
     }
     i13 = HEAP32[i13 + 36 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break;
     }
    }
    i15 = HEAP32[i12 >> 2] | 0;
   }
   if (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(i15) | 0) {
    break;
   }
   i13 = (HEAP32[i12 >> 2] | 0) + 32 | 0;
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   i16 = HEAP32[i14 + 40 >> 2] | 0;
   i17 = i4;
   _memset(i17 | 0, 0, 16) | 0;
   i18 = HEAP32[i13 >> 2] | 0;
   do {
    if ((HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 48 >> 2] & 29360128 | 0) == 25165824) {
     if ((__ZNK7WebCore12RenderObject9containerEPKNS_22RenderLayerModelObjectEPb(i18 | 0, 0, 0) | 0) != (i14 | 0)) {
      i19 = 13;
      break;
     }
     __ZNK7WebCore9FrameView37viewportConstrainedVisibleContentRectEv(i5, HEAP32[i14 + 116 >> 2] | 0);
     i13 = i5;
     HEAP32[i17 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
     HEAP32[i17 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
    } else {
     i19 = 13;
    }
   } while (0);
   if ((i19 | 0) == 13) {
    __ZNK7WebCore10RenderView20unscaledDocumentRectEv(i8, i14);
    i17 = HEAP32[i7 + 4 >> 2] | 0;
    i18 = i6 + 8 | 0;
    i13 = HEAP32[i18 >> 2] | 0;
    i20 = HEAP32[i18 + 4 >> 2] | 0;
    HEAP32[i4 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i4 + 4 >> 2] = i17;
    HEAP32[i4 + 8 >> 2] = i13;
    HEAP32[i4 + 12 >> 2] = i20;
   }
   i20 = HEAP32[i12 >> 2] | 0;
   if ((i20 | 0) == (i16 | 0)) {
    i21 = i16;
   } else {
    HEAP32[i9 >> 2] = i16;
    HEAP32[i9 + 4 >> 2] = 0;
    HEAP32[i9 + 8 >> 2] = 2;
    HEAP32[i9 + 12 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = 1;
    __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i10, i20, i9);
    __ZN7WebCore10LayoutRect9intersectERKS0_(i4, i10 | 0);
    i21 = HEAP32[i12 >> 2] | 0;
   }
   i20 = i11 | 0;
   HEAP32[i20 >> 2] = 0;
   i13 = i11 + 4 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i21, i16, i11, 1);
   i17 = HEAP32[i13 >> 2] | 0;
   i13 = i4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - (HEAP32[i20 >> 2] | 0);
   i20 = i4 + 4 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) - i17;
   __ZN7WebCore10LayoutRect9intersectERKS0_(i3, i4);
  }
 } while (0);
 i4 = i3 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) < 1) {
  i19 = 19;
 } else {
  if ((HEAP32[i3 + 12 >> 2] | 0) < 1) {
   i19 = 19;
  }
 }
 do {
  if ((i19 | 0) == 19) {
   i11 = HEAP32[(HEAP32[i12 >> 2] | 0) + 32 >> 2] | 0;
   if ((HEAP32[i11 + 20 >> 2] & 768 | 0) == 256) {
    i22 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i22 = HEAP32[i11 + 36 >> 2] | 0;
   }
   i11 = HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 72 >> 2] | 0;
   i21 = i11 + 16 | 0;
   if ((HEAP8[i11 + 21 | 0] | 0) == 3) {
    if ((HEAP8[i11 + 22 | 0] & 1) == 0) {
     d23 = +(HEAP32[i21 >> 2] | 0);
    } else {
     d23 = +HEAPF32[i21 >> 2];
    }
    if (d23 == +0) {
     i19 = 27;
    }
   } else {
    i19 = 27;
   }
   if ((i19 | 0) == 27) {
    i21 = i11 + 24 | 0;
    if ((HEAP8[i11 + 29 | 0] | 0) != 3) {
     break;
    }
    if ((HEAP8[i11 + 30 | 0] & 1) == 0) {
     d24 = +(HEAP32[i21 >> 2] | 0);
    } else {
     d24 = +HEAPF32[i21 >> 2];
    }
    if (d24 == +0) {
     break;
    }
   }
   HEAP32[i4 >> 2] = 1;
   HEAP32[i3 + 12 >> 2] = 1;
   HEAP8[i1 + 88 | 0] = 1;
   i25 = i1 + 64 | 0;
   i26 = i25;
   i27 = i3;
   HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
   STACKTOP = i2;
   return;
  }
 } while (0);
 HEAP8[i1 + 88 | 0] = 0;
 i25 = i1 + 64 | 0;
 i26 = i25;
 i27 = i3;
 HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
 HEAP32[i26 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
 HEAP32[i26 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
 HEAP32[i26 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore18RenderLayerBacking33isSimpleContainerCompositingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 i3 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0;
 i4 = i3 + 116 | 0;
 while (1) {
  if ((HEAP32[i4 + 4 >> 2] | 0) != 0) {
   i5 = 0;
   i6 = 50;
   break;
  }
  i4 = HEAP32[i4 >> 2] | 0;
  if ((i4 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 50) {
  return i5 | 0;
 }
 if ((HEAP32[(HEAP32[i3 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if ((HEAP32[i1 + 20 >> 2] & 2048 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 3](i1 | 0) | 0)) {
    i5 = 0;
    return i5 | 0;
   }
   if (!(__ZNK7WebCore20RenderEmbeddedObject28allowsAcceleratedCompositingEv(i1) | 0)) {
    i5 = 0;
    return i5 | 0;
   }
   i3 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 72 >> 2] & 3](i3 | 0) | 0)) {
    break;
   }
   if ((HEAP32[i3 + 20 >> 2] & 128 | 0) != 0) {
    break;
   }
   i6 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] & 3](i6) | 0)) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 620 >> 2] & 3](i6) | 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if (__ZNK7WebCore11RenderLayer24hasVisibleBoxDecorationsEv(HEAP32[i2 >> 2] | 0) | 0) {
   i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
   i6 = i1 + 36 | 0;
   i3 = HEAP32[i6 >> 2] | 0;
   do {
    if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 16777216) {
     if ((HEAP8[(HEAP32[i3 + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
      break;
     } else {
      i5 = 0;
     }
     return i5 | 0;
    }
   } while (0);
   if (__ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE(i3) | 0) {
    i5 = 0;
    return i5 | 0;
   }
   i1 = HEAP32[i6 >> 2] | 0;
   i4 = HEAP32[i1 + 20 >> 2] | 0;
   if (+HEAPF32[i4 + 16 >> 2] > +0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[i4 + 292 >> 2] & 512 | 0) != 0) {
    i5 = 0;
    return i5 | 0;
   }
   i4 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 44 >> 2] | 0;
   if ((i4 & 61440 | 0) != 8192 | (i4 & 12 | 0) == 12) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP8[i4 + 22 | 0] & 8) == 0) {
   i7 = i4;
  } else {
   if (__ZNK7WebCore11RenderLayer25hasNonEmptyChildRenderersEv(i4) | 0) {
    i5 = 0;
    return i5 | 0;
   } else {
    i7 = HEAP32[i2 >> 2] | 0;
    break;
   }
  }
 } while (0);
 if (__ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i7) | 0) {
  i5 = 0;
  return i5 | 0;
 }
 i7 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 24 >> 2] & 32 | 0) != 0) {
   i4 = HEAP32[i7 + 100 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 28 >> 2] | 0) == 0) {
    break;
   } else {
    i5 = 0;
   }
   return i5 | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i7 + 20 >> 2] & 768 | 0) == 768) {
   i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   i1 = i4 + 32 | 0;
   if ((HEAP32[i4 + 12 >> 2] & 2048 | 0) == 0) {
    i8 = i1 | 0;
   } else {
    i8 = HEAP32[i1 >> 2] | 0;
   }
   i1 = HEAP32[i8 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[i1 + 20 >> 2] & 768 | 0) == 256) {
    i9 = HEAP32[(HEAP32[i1 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i9 = HEAP32[i1 + 36 >> 2] | 0;
   }
   if (__ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE(i9) | 0) {
    i5 = 0;
    return i5 | 0;
   }
   i1 = __ZNK7WebCore8Document4bodyEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i1 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[(HEAP32[i1 + 44 >> 2] | 0) + 12 >> 2] | 0) != (HEAP32[(HEAP32[__ZN7WebCore9HTMLNames7bodyTagE >> 2] | 0) + 12 >> 2] | 0)) {
    i5 = 0;
    return i5 | 0;
   }
   i4 = i1 + 32 | 0;
   if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
    i10 = i4 | 0;
   } else {
    i10 = HEAP32[i4 >> 2] | 0;
   }
   i4 = HEAP32[i10 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i5 = 0;
    return i5 | 0;
   }
   if ((HEAP32[i4 + 20 >> 2] & 768 | 0) == 256) {
    i11 = HEAP32[(HEAP32[i4 + 8 >> 2] | 0) + 36 >> 2] | 0;
   } else {
    i11 = HEAP32[i4 + 36 >> 2] | 0;
   }
   if (__ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE(i11) | 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i5 = 1;
 return i5 | 0;
}
function __ZN7WebCore18RenderLayerBacking28setContentsNeedDisplayInRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 192 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i3 + 80 | 0;
 i10 = i3 + 96 | 0;
 i11 = i3 + 112 | 0;
 i12 = i3 + 128 | 0;
 i13 = i3 + 144 | 0;
 i14 = i3 + 160 | 0;
 i15 = i3 + 176 | 0;
 i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 89 | 0] & 1) != 0) {
   if ((HEAP8[i16 + 528 | 0] & 1) == 0) {
    break;
   }
   i17 = i2;
   i18 = HEAP32[i17 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = HEAP32[i17 >> 2];
   HEAP32[i5 + 4 >> 2] = i18;
   i18 = i2 + 8 | 0;
   i17 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i5 + 8 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i5 + 12 >> 2] = i17;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i4, i5);
   __ZN7WebCore9FrameView21addTrackedRepaintRectERKNS_7IntRectE(i16, i4);
  }
 } while (0);
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if ((HEAP8[i4 + 340 | 0] & 32) == 0) {
    break;
   }
   i16 = i6;
   i5 = i2;
   HEAP32[i16 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
   i5 = i4 + 12 | 0;
   i16 = HEAP32[i5 + 4 >> 2] | 0;
   i17 = i6 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - (HEAP32[i5 >> 2] | 0);
   i5 = i6 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i16;
   i16 = HEAP32[(HEAP32[i4 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i6);
   FUNCTION_TABLE_viii[i16 & 7](i4, i7, 1);
  }
 } while (0);
 i7 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   if ((HEAP8[i7 + 340 | 0] & 32) == 0) {
    break;
   }
   i4 = i8;
   i6 = i2;
   HEAP32[i4 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
   HEAP32[i4 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   i6 = i7 + 12 | 0;
   i4 = HEAP32[i6 + 4 >> 2] | 0;
   i16 = i8 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - (HEAP32[i6 >> 2] | 0);
   i6 = i8 + 4 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) - i4;
   i4 = HEAP32[(HEAP32[i7 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i9, i8);
   FUNCTION_TABLE_viii[i4 & 7](i7, i9, 1);
  }
 } while (0);
 i9 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i9 | 0) != 0) {
   if ((HEAP8[i9 + 340 | 0] & 32) == 0) {
    break;
   }
   i7 = i10;
   i8 = i2;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i8 = i9 + 12 | 0;
   i7 = HEAP32[i8 + 4 >> 2] | 0;
   i4 = i10 | 0;
   HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - (HEAP32[i8 >> 2] | 0);
   i8 = i10 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i7;
   i7 = HEAP32[(HEAP32[i9 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i11, i10);
   FUNCTION_TABLE_viii[i7 & 7](i9, i11, 1);
  }
 } while (0);
 i11 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   if ((HEAP8[i11 + 340 | 0] & 32) == 0) {
    break;
   }
   i9 = i12;
   i10 = i2;
   HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   i10 = i11 + 12 | 0;
   i9 = HEAP32[i10 + 4 >> 2] | 0;
   i7 = i12 | 0;
   HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
   i10 = i12 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i9;
   i9 = HEAP32[(HEAP32[i11 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i13, i12);
   FUNCTION_TABLE_viii[i9 & 7](i11, i13, 1);
  }
 } while (0);
 i13 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i13 + 340 | 0] & 32) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i14;
 i11 = i2;
 HEAP32[i1 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 i11 = i13 + 12 | 0;
 i1 = HEAP32[i11 + 4 >> 2] | 0;
 i2 = i14 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - (HEAP32[i11 >> 2] | 0);
 i11 = i14 + 4 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) - i1;
 i1 = HEAP32[(HEAP32[i13 >> 2] | 0) + 128 >> 2] | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i15, i14);
 FUNCTION_TABLE_viii[i1 & 7](i13, i15, 1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBackingD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 340 | 0] & 8) == 0) {
    i4 = i3;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3, 0);
    i4 = HEAP32[i2 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 31](i4);
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i3 + 340 | 0] & 8) == 0) {
    i6 = i3;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3, 0);
    i6 = HEAP32[i4 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking28updateOverflowControlsLayersEbbb(i1, 0, 0, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateForegroundLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateBackgroundLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking15updateMaskLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateScrollingLayersEb(i1, 0) | 0;
 i6 = i1 + 56 | 0;
 do {
  if (!((HEAP32[i6 >> 2] | 0) == 0 & (HEAP32[i6 + 4 >> 2] | 0) == 0)) {
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 7](i5, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0);
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking21destroyGraphicsLayersEv(i1);
 i6 = i1 + 52 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 44 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 40 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 36 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 24 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 16 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCore18RenderLayerBackingD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 340 | 0] & 8) == 0) {
    i4 = i3;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3, 0);
    i4 = HEAP32[i2 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 31](i4);
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP8[i3 + 340 | 0] & 8) == 0) {
    i6 = i3;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3, 0);
    i6 = HEAP32[i4 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking28updateOverflowControlsLayersEbbb(i1, 0, 0, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateForegroundLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateBackgroundLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking15updateMaskLayerEb(i1, 0) | 0;
 __ZN7WebCore18RenderLayerBacking21updateScrollingLayersEb(i1, 0) | 0;
 i6 = i1 + 56 | 0;
 do {
  if (!((HEAP32[i6 >> 2] | 0) == 0 & (HEAP32[i6 + 4 >> 2] | 0) == 0)) {
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 48 >> 2] & 7](i5, HEAP32[i6 >> 2] | 0, HEAP32[i6 + 4 >> 2] | 0);
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
  }
 } while (0);
 __ZN7WebCore18RenderLayerBacking21destroyGraphicsLayersEv(i1);
 i6 = i1 + 52 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 48 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 44 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 40 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 36 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 24 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 20 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 }
 i6 = i1 + 16 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 }
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (HEAP32[(HEAP32[i4 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
 i6 = HEAP32[i4 + 104 >> 2] | 0;
 i7 = (i6 & 134217726 | 0) == 0;
 if (i7 | i5) {
  if (i7) {
   i8 = 4;
  } else {
   i9 = 1;
  }
 } else {
  if ((i6 & 2013265920 | 0) == 0) {
   i8 = 4;
  } else {
   i9 = 1;
  }
 }
 L4 : do {
  if ((i8 | 0) == 4) {
   i6 = HEAP32[i4 + 112 >> 2] | 0;
   i7 = (i6 & 134217726 | 0) == 0;
   if (i7 | i5) {
    if (!i7) {
     i9 = 1;
     break;
    }
   } else {
    if ((i6 & 2013265920 | 0) != 0) {
     i9 = 1;
     break;
    }
   }
   i6 = HEAP32[i4 + 120 >> 2] | 0;
   i7 = (i6 & 134217726 | 0) == 0;
   if (i7 | i5) {
    if (!i7) {
     i9 = 1;
     break;
    }
   } else {
    if ((i6 & 2013265920 | 0) != 0) {
     i9 = 1;
     break;
    }
   }
   i6 = HEAP32[i4 + 128 >> 2] | 0;
   i7 = (i6 & 134217726 | 0) == 0;
   if (i7 | i5) {
    if (!i7) {
     i9 = 1;
     break;
    }
   } else {
    if ((i6 & 2013265920 | 0) != 0) {
     i9 = 1;
     break;
    }
   }
   i6 = i4 + 136 | 0;
   if ((HEAP8[i4 + 141 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i4 + 142 | 0] & 1) == 0) {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i9 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i6 >> 2] != +0) {
     i9 = 1;
     break;
    }
   }
   i6 = i4 + 152 | 0;
   if ((HEAP8[i4 + 157 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i4 + 158 | 0] & 1) == 0) {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i9 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i6 >> 2] != +0) {
     i9 = 1;
     break;
    }
   }
   i6 = i4 + 168 | 0;
   if ((HEAP8[i4 + 173 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i4 + 174 | 0] & 1) == 0) {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i9 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i6 >> 2] != +0) {
     i9 = 1;
     break;
    }
   }
   i6 = i4 + 184 | 0;
   if ((HEAP8[i4 + 189 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i4 + 190 | 0] & 1) == 0) {
    if ((HEAP32[i6 >> 2] | 0) != 0) {
     i9 = 1;
     break;
    }
   } else {
    if (+HEAPF32[i6 >> 2] != +0) {
     i9 = 1;
     break;
    }
   }
   i6 = i1 + 12 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   i10 = HEAP32[i7 + 64 >> 2] | 0;
   if ((i10 & 131070 | 0) != 0 & (i10 & 2013265920 | 0) != 0 & (i10 & 1879048192) >>> 0 > 134217728 >>> 0) {
    i9 = 1;
    break;
   }
   i10 = HEAP32[i1 + 20 >> 2] | 0;
   if ((HEAP32[i10 + 296 >> 2] & 63 | 0) != 0) {
    i9 = 1;
    break;
   }
   if ((HEAP32[i10 + 100 >> 2] | 0) != 0) {
    i9 = 1;
    break;
   }
   if ((HEAP32[(HEAP32[i10 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
    i9 = 1;
    break;
   }
   i10 = i7 + 4 | 0;
   while (1) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     break;
    }
    i7 = HEAP32[i10 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i9 = 0;
     break L4;
    } else {
     i10 = i7;
    }
   }
   if (!(__ZN7WebCore13GraphicsLayer22supportsContentsTilingEv() | 0)) {
    i9 = 1;
    break;
   }
   i10 = HEAP32[i6 >> 2] | 0;
   i7 = i10 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    i9 = 1;
    break;
   }
   if (!(__ZNK7WebCore9FillLayer15imagesAreLoadedEv(i7) | 0)) {
    i9 = 1;
    break;
   }
   if ((HEAP32[i10 + 44 >> 2] & 3 | 0) != 0) {
    i9 = 1;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i1, 23);
   if ((HEAP8[i3 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i3 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     i9 = 1;
     break;
    }
   }
   i7 = HEAP32[i10 + 8 >> 2] | 0;
   if ((HEAP8[i7 + 8 | 0] & 1) == 0) {
    i9 = 1;
    break;
   }
   i10 = __ZN7WebCore11CachedImage5imageEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 72 >> 2] & 3](i7) | 0) | 0;
   i9 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 3](i10) | 0) ^ 1;
  }
 } while (0);
 STACKTOP = i2;
 return i9 | 0;
}
function __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, d18 = +0, d19 = +0, d20 = +0, d21 = +0, i22 = 0, i23 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 i7 = i1 + 4 | 0;
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i9 = (HEAP32[i8 + 44 >> 2] & 2 | 0) != 0;
 i10 = i1 + 94 | 0;
 do {
  if ((HEAP8[i10] & 1) == 0) {
   if ((HEAP8[i8 + 592 | 0] & 1) == 0) {
    i11 = 0;
    break;
   }
   if (__ZNK7WebCore15ProgressTracker21isMainLoadProgressingEv(HEAP32[(HEAP32[(HEAP32[i8 + 216 >> 2] | 0) + 32 >> 2] | 0) + 52 >> 2] | 0) | 0) {
    if (!(__ZNK7WebCore9FrameView17wasScrolledByUserEv(i8) | 0)) {
     i11 = 0;
     break;
    }
   }
   HEAP8[i10] = 1;
   if (i9) {
    i11 = 0;
   } else {
    i12 = 8;
   }
  } else {
   if (i9) {
    i11 = 0;
   } else {
    i12 = 8;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 8) {
   i9 = i8 + 548 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   i13 = HEAP32[i9 + 4 >> 2] | 0;
   i9 = i8 + 556 | 0;
   i14 = HEAP32[i9 >> 2] | 0;
   i15 = HEAP32[i9 + 4 >> 2] | 0;
   if ((HEAP8[H_BASE + 496 | 0] | 0) == 0) {
    HEAPF32[H_BASE + 472 >> 2] = -1.7014117331926443e+38;
    HEAPF32[H_BASE + 476 >> 2] = -1.7014117331926443e+38;
    HEAPF32[H_BASE + 480 >> 2] = 3.4028234663852886e+38;
    HEAPF32[H_BASE + 484 >> 2] = 3.4028234663852886e+38;
    HEAP32[H_BASE + 496 >> 2] = 1;
    HEAP32[H_BASE + 500 >> 2] = 0;
   }
   i9 = H_BASE + 472;
   i16 = H_BASE + 480 | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   d18 = (HEAP32[tempDoublePtr >> 2] = i10, +HEAPF32[tempDoublePtr >> 2]);
   d19 = (HEAP32[tempDoublePtr >> 2] = i13, +HEAPF32[tempDoublePtr >> 2]);
   d20 = +HEAPF32[i9 >> 2];
   do {
    if (d18 == d20 & d19 == +HEAPF32[i9 + 4 >> 2]) {
     d21 = (HEAP32[tempDoublePtr >> 2] = i14, +HEAPF32[tempDoublePtr >> 2]);
     if (d21 != +HEAPF32[i16 >> 2]) {
      i22 = 1;
      break;
     }
     d21 = (HEAP32[tempDoublePtr >> 2] = i17, +HEAPF32[tempDoublePtr >> 2]);
     i22 = (HEAP32[tempDoublePtr >> 2] = i15, +HEAPF32[tempDoublePtr >> 2]) != d21;
    } else {
     i22 = 1;
    }
   } while (0);
   i15 = i8 | 0;
   __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i15, i3, i4);
   i17 = (HEAP32[i3 >> 2] | 0) != 1 | i22 ? 2 : 0;
   __ZNK7WebCore10ScrollView14scrollbarModesERNS_13ScrollbarModeES2_(i15, i5, i6);
   if (!((HEAP32[i6 >> 2] | 0) != 1 | i22)) {
    i11 = i17;
    break;
   }
   i11 = i17 | 1;
  }
 } while (0);
 i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i22 | 0) == 0) {
   i23 = i11;
  } else {
   i7 = __ZN7WebCore4Page20scrollingCoordinatorEv(i22) | 0;
   if ((i7 | 0) == 0) {
    i23 = i11;
    break;
   }
   i6 = (__ZNK7WebCore20ScrollingCoordinator27synchronousScrollingReasonsEv(i7) | 0) >>> 0 > 1 >>> 0;
   i23 = i6 ? i11 | 4 : i11;
  }
 } while (0);
 i11 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 284 >> 2] & 3](i11) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 32 >> 2] & 15](i1, i23);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i1);
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 L1 : do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = i2 | 0;
   i6 = 0;
   i7 = i4;
   while (1) {
    if (i7 >>> 0 <= i6 >>> 0) {
     i8 = 5;
     break;
    }
    i9 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i6 << 2) >> 2] | 0;
    if ((HEAP32[i9 + 208 >> 2] | 0) == 0) {
     if ((HEAP8[i9 + 22 | 0] & 8) != 0) {
      i10 = 1;
      i8 = 37;
      break;
     }
     if (__ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i9) | 0) {
      i10 = 1;
      i8 = 45;
      break;
     }
    }
    i9 = i6 + 1 | 0;
    if (i9 >>> 0 >= i4 >>> 0) {
     break L1;
    }
    i6 = i9;
    i7 = HEAP32[i3 >> 2] | 0;
   }
   if ((i8 | 0) == 5) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i8 | 0) == 37) {
    return i10 | 0;
   } else if ((i8 | 0) == 45) {
    return i10 | 0;
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i1) | 0) {
    break;
   } else {
    i10 = 0;
   }
   return i10 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 22 | 0] & 32) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 L25 : do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i2 | 0;
   i4 = 0;
   i5 = i7;
   while (1) {
    if (i5 >>> 0 <= i4 >>> 0) {
     i8 = 19;
     break;
    }
    i9 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i4 << 2) >> 2] | 0;
    if ((HEAP32[i9 + 208 >> 2] | 0) == 0) {
     if ((HEAP8[i9 + 22 | 0] & 8) != 0) {
      i10 = 1;
      i8 = 36;
      break;
     }
     if (__ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i9) | 0) {
      i10 = 1;
      i8 = 38;
      break;
     }
    }
    i9 = i4 + 1 | 0;
    if (i9 >>> 0 >= i7 >>> 0) {
     break L25;
    }
    i4 = i9;
    i5 = HEAP32[i3 >> 2] | 0;
   }
   if ((i8 | 0) == 36) {
    return i10 | 0;
   } else if ((i8 | 0) == 38) {
    return i10 | 0;
   } else if ((i8 | 0) == 19) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i1 = i2 + 8 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i5 = i2 | 0;
 i2 = 0;
 i4 = i3;
 while (1) {
  if (i4 >>> 0 <= i2 >>> 0) {
   i8 = 29;
   break;
  }
  i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  if ((HEAP32[i7 + 208 >> 2] | 0) == 0) {
   if ((HEAP8[i7 + 22 | 0] & 8) != 0) {
    i10 = 1;
    i8 = 40;
    break;
   }
   if (__ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i7) | 0) {
    i10 = 1;
    i8 = 44;
    break;
   }
  }
  i7 = i2 + 1 | 0;
  if (i7 >>> 0 >= i3 >>> 0) {
   i10 = 0;
   i8 = 41;
   break;
  }
  i2 = i7;
  i4 = HEAP32[i1 >> 2] | 0;
 }
 if ((i8 | 0) == 29) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i8 | 0) == 44) {
  return i10 | 0;
 } else if ((i8 | 0) == 40) {
  return i10 | 0;
 } else if ((i8 | 0) == 41) {
  return i10 | 0;
 }
 return 0;
}
function __ZN7WebCore18RenderLayerBacking15updateMaskLayerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 32 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 do {
  if (i2) {
   if (!i8) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   __ZN3WTF6StringC1EPKc(i5, H_BASE + 72 | 0);
   i10 = i1 + 4 | 0;
   i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = 0;
   } else {
    i13 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 296 >> 2] & 3](i13) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i12, i1 | 0);
   i13 = i4 | 0;
   i11 = HEAP32[i13 >> 2] | 0;
   i14 = HEAP32[(HEAP32[i11 >> 2] | 0) + 248 >> 2] | 0;
   i15 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i10 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i14 & 15](i11, i15);
   i15 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   i11 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i15;
   do {
    if ((i11 | 0) == 0) {
     HEAP32[i13 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 31](i11);
     i15 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 31](i15);
    }
   } while (0);
   i13 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i13 | 0) != 0) {
     i11 = i13 | 0;
     i15 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i15 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i13);
      break;
     } else {
      HEAP32[i11 >> 2] = i15;
      break;
     }
    }
   } while (0);
   i13 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 92 >> 2] & 15](i13, 1);
   HEAP32[(HEAP32[i6 >> 2] | 0) + 344 >> 2] = 4;
  } else {
   if (i8) {
    i9 = 0;
    STACKTOP = i3;
    return i9 | 0;
   }
   if ((HEAP8[i7 + 340 | 0] & 8) == 0) {
    HEAP32[i6 >> 2] = 0;
    i16 = i7;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i7, 0);
    i13 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    if ((i13 | 0) == 0) {
     break;
    } else {
     i16 = i13;
    }
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 31](i16);
  }
 } while (0);
 i16 = (HEAP32[i1 + 24 >> 2] | 0) == 0 | 0;
 i7 = (HEAP32[i1 + 20 >> 2] | 0) == 0 ? i16 | 2 : i16;
 i16 = (HEAP32[i6 >> 2] | 0) == 0 ? i7 | 4 : i7;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i17 = i16;
 } else {
  i17 = i16 & 5 | 16;
 }
 HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 344 >> 2] = i17;
 i9 = 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore18RenderLayerBacking17resetContentsRectEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
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
 i12 = i2 + 80 | 0;
 i13 = i2 + 96 | 0;
 i14 = i2 + 112 | 0;
 i15 = i2 + 128 | 0;
 i16 = i2 + 136 | 0;
 i17 = i1 + 16 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 144 >> 2] | 0;
 __ZNK7WebCore18RenderLayerBacking11contentsBoxEv(i12, i1);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i11, i12);
 FUNCTION_TABLE_vii[i19 & 15](i18, i11);
 _memset(i13 | 0, 0, 16) | 0;
 i11 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
  i20 = 0;
  i21 = 0;
  i22 = i13 | 0;
  i23 = i13 + 4 | 0;
 } else {
  i18 = i11;
  i19 = i11;
  i12 = i11;
  i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 744 >> 2] & 3](i19) | 0;
  i25 = i11;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 712 >> 2] & 15](i9, i19);
  i11 = (HEAP32[i9 >> 2] | 0) + i24 | 0;
  i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 736 >> 2] & 3](i19) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 704 >> 2] & 15](i10, i19);
  i12 = (HEAP32[i10 >> 2] | 0) + i24 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i3, i18);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 712 >> 2] & 15](i4, i19);
  i24 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 716 >> 2] & 15](i5, i19);
  i4 = i24 - (HEAP32[i5 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i6, i18);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 704 >> 2] & 15](i7, i19);
  i18 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i25 >> 2] | 0) + 708 >> 2] & 15](i8, i19);
  i19 = i18 - (HEAP32[i8 >> 2] | 0) | 0;
  i8 = i13 | 0;
  HEAP32[i8 >> 2] = i11;
  i18 = i13 + 4 | 0;
  HEAP32[i18 >> 2] = i12;
  HEAP32[i13 + 8 >> 2] = i4;
  HEAP32[i13 + 12 >> 2] = i19;
  i20 = i11;
  i21 = i12;
  i22 = i8;
  i23 = i18;
 }
 i18 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i22 >> 2] = i20 - (HEAP32[i1 + 64 >> 2] | 0);
 HEAP32[i23 >> 2] = i21 - i18;
 i18 = HEAP32[i17 >> 2] | 0;
 i21 = HEAP32[(HEAP32[i18 >> 2] | 0) + 148 >> 2] | 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i14, i13);
 FUNCTION_TABLE_vii[i21 & 15](i18, i14);
 i14 = HEAP32[i17 >> 2] | 0;
 i18 = HEAP32[(HEAP32[i14 >> 2] | 0) + 140 >> 2] | 0;
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 FUNCTION_TABLE_vii[i18 & 15](i14, i15);
 i15 = HEAP32[i17 >> 2] | 0;
 i17 = HEAP32[(HEAP32[i15 >> 2] | 0) + 136 >> 2] | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i16 + 4 >> 2] = 0;
 FUNCTION_TABLE_vii[i17 & 15](i15, i16);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18RenderLayerBacking21updateForegroundLayerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (i6 | 0) == 0;
 do {
  if (i2) {
   if (!i7) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   i9 = i1 + 4 | 0;
   i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = 0;
   } else {
    i12 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
    i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 296 >> 2] & 3](i12) | 0;
   }
   __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i11, i1 | 0);
   i12 = i4 | 0;
   i10 = HEAP32[i12 >> 2] | 0;
   i13 = HEAP32[(HEAP32[i10 >> 2] | 0) + 248 >> 2] | 0;
   i14 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i9 >> 2] | 0) | 0) | 0;
   FUNCTION_TABLE_vii[i13 & 15](i10, i14);
   i14 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   i10 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i14;
   do {
    if ((i10 | 0) == 0) {
     HEAP32[i12 >> 2] = 0;
    } else {
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 31](i14);
    }
   } while (0);
   i12 = HEAP32[i5 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 92 >> 2] & 15](i12, 1);
   HEAP32[(HEAP32[i5 >> 2] | 0) + 344 >> 2] = 2;
  } else {
   if (i7) {
    i8 = 0;
    STACKTOP = i3;
    return i8 | 0;
   }
   if ((HEAP8[i6 + 340 | 0] & 8) == 0) {
    i15 = i6;
   } else {
    __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i6, 0);
    i15 = HEAP32[i5 >> 2] | 0;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 44 >> 2] & 31](i15);
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i12 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 31](i12);
  }
 } while (0);
 i15 = i1 + 16 | 0;
 i6 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 124 >> 2] & 31](i6);
 i6 = (HEAP32[i1 + 24 >> 2] | 0) == 0 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) == 0 ? i6 | 2 : i6;
 i6 = (HEAP32[i1 + 32 >> 2] | 0) == 0 ? i7 | 4 : i7;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i16 = i6;
 } else {
  i16 = i6 & 5 | 16;
 }
 HEAP32[(HEAP32[i15 >> 2] | 0) + 344 >> 2] = i16;
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
}
function __ZN7WebCore18RenderLayerBacking19updateImageContentsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 24 | 0;
 i7 = i2 + 32 | 0;
 i8 = i2 + 40 | 0;
 i9 = i2 + 48 | 0;
 i10 = i2 + 56 | 0;
 i11 = i2 + 64 | 0;
 i12 = i2 + 80 | 0;
 i13 = i2 + 96 | 0;
 i14 = i2 + 112 | 0;
 i15 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0;
 i16 = HEAP32[i15 + 104 >> 2] | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i17 = HEAP32[i16 + 8 >> 2] | 0;
 if ((i17 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i16 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i17, i15 | 0) | 0;
 if ((i16 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP8[i17 + 588 | 0] & 32) != 0) {
  STACKTOP = i2;
  return;
 }
 i17 = i1 + 16 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 144 >> 2] | 0;
 __ZNK7WebCore18RenderLayerBacking11contentsBoxEv(i12, i1);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i11, i12);
 FUNCTION_TABLE_vii[i19 & 15](i18, i11);
 i11 = i15;
 i18 = i15;
 i19 = i15;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 744 >> 2] & 3](i18) | 0;
 i20 = i15;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 712 >> 2] & 15](i9, i18);
 i15 = (HEAP32[i9 >> 2] | 0) + i12 | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 736 >> 2] & 3](i18) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 704 >> 2] & 15](i10, i18);
 i19 = (HEAP32[i10 >> 2] | 0) + i12 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i3, i11);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 712 >> 2] & 15](i4, i18);
 i12 = (HEAP32[i3 >> 2] | 0) - (HEAP32[i4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 716 >> 2] & 15](i5, i18);
 i4 = i12 - (HEAP32[i5 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i6, i11);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 704 >> 2] & 15](i7, i18);
 i11 = (HEAP32[i6 >> 2] | 0) - (HEAP32[i7 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 708 >> 2] & 15](i8, i18);
 i18 = i11 - (HEAP32[i8 >> 2] | 0) | 0;
 HEAP32[i13 + 8 >> 2] = i4;
 HEAP32[i13 + 12 >> 2] = i18;
 i18 = HEAP32[i1 + 68 >> 2] | 0;
 HEAP32[i13 >> 2] = i15 - (HEAP32[i1 + 64 >> 2] | 0);
 HEAP32[i13 + 4 >> 2] = i19 - i18;
 i18 = HEAP32[i17 >> 2] | 0;
 i19 = HEAP32[(HEAP32[i18 >> 2] | 0) + 148 >> 2] | 0;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i14, i13);
 FUNCTION_TABLE_vii[i19 & 15](i18, i14);
 i14 = HEAP32[i17 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 172 >> 2] & 15](i14, i16);
 __ZN7WebCore18RenderLayerBacking18updateDrawsContentEb(i1, 0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 68 >> 2] & 15](i16, 1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore18RenderLayerBacking44adjustAncestorCompositingBoundsForFlowThreadERNS_7IntRectEPKNS_11RenderLayerE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 4 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 20 >> 2] & 805306368;
 if ((i10 | 0) == 268435456) {
  i11 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i1) | 0;
 } else if ((i10 | 0) == 0) {
  STACKTOP = i4;
  return;
 } else {
  i11 = __ZNK7WebCore11RenderLayer27enclosingFlowThreadAncestorEv(i1) | 0;
 }
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i1 = i11 + 32 | 0;
 i10 = HEAP32[i1 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 248 >> 2] & 3](i10 | 0) | 0)) {
  STACKTOP = i4;
  return;
 }
 i10 = HEAP32[i1 >> 2] | 0;
 if (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(HEAP32[i9 >> 2] | 0) | 0) {
  i1 = i7 | 0;
  HEAP32[i1 >> 2] = 0;
  i12 = i7 + 4 | 0;
  HEAP32[i12 >> 2] = 0;
  __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_8IntPointENS0_22ColumnOffsetAdjustmentE(i11, i3, i7, 0);
  i7 = HEAP32[i12 >> 2] | 0;
  i12 = i2 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i1 >> 2] | 0);
  i1 = i2 + 4 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i7;
 }
 i7 = __ZN7WebCore16RenderFlowThread30cachedRegionForCompositedLayerERNS_11RenderLayerE(i10, HEAP32[i9 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_8IntPointENS0_22ColumnOffsetAdjustmentE(HEAP32[i9 >> 2] | 0, i11, i8, 0);
 __ZN7WebCore12RenderRegion43adjustRegionBoundsFromFlowThreadPortionRectERKNS_8IntPointERNS_7IntRectE(i7 | 0, i8, i2);
 i8 = HEAP32[i7 + 8 >> 2] | 0;
 i7 = i8;
 if ((HEAP32[i8 + 20 >> 2] & 32768 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[(HEAP32[i8 + 40 >> 2] | 0) + 208 >> 2] | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i9 = i11 + 64 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i10 = i2 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + (HEAP32[i9 >> 2] | 0);
 i9 = i2 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + i11;
 i11 = i8;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 760 >> 2] & 3](i7) | 0;
 i1 = i8;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 728 >> 2] & 15](i5, i7);
 i8 = HEAP32[i5 >> 2] | 0;
 i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 752 >> 2] & 3](i7) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 720 >> 2] & 15](i6, i7);
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - (i8 + i2);
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - (i7 + i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18RenderLayerBacking29updateDescendantClippingLayerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 28 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i2) {
  if (i8) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  if ((HEAP8[i7 + 340 | 0] & 8) == 0) {
   i10 = i7;
  } else {
   __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i7, 0);
   i10 = HEAP32[i6 >> 2] | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 31](i10);
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  if ((i10 | 0) == 0) {
   i9 = 1;
   STACKTOP = i3;
   return i9 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 if (!i8) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 144 | 0);
 i8 = i1 + 4 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i7 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 296 >> 2] & 3](i7) | 0;
 }
 __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i11, i1 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] | 0;
 i7 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0) | 0;
 FUNCTION_TABLE_vii[i11 & 15](i4, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   i7 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 15](i1, 1);
 i9 = 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore18RenderLayerBackingC2ERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i1 + 16 | 0;
 i7 = i1 + 89 | 0;
 i8 = i1 + 90 | 0;
 _memset(i1 + 8 | 0, 0, 83) | 0;
 HEAP8[i1 + 91 | 0] = 1;
 HEAP8[i1 + 92 | 0] = 0;
 HEAP8[i1 + 93 | 0] = 0;
 HEAP8[i1 + 94 | 0] = 0;
 i9 = i2 + 32 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 i11 = HEAP32[i10 + 32 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!((HEAP8[i2 + 21 | 0] & 16) == 0 | i12)) {
  if ((HEAP32[i10 + 28 >> 2] | 0) == (i10 | 0)) {
   HEAP8[i7] = 1;
   i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
  } else {
   i13 = i10;
  }
  i10 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP8[i8] = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 460 >> 2] & 7](i10, HEAP32[i13 + 452 >> 2] | 0) | 0) & 1;
 }
 __ZN7WebCore18RenderLayerBacking26createPrimaryGraphicsLayerEv(i1);
 if ((HEAP8[i8] & 1) == 0 | i12) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i6 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 284 >> 2] & 3](i12) | 0;
 i12 = i6;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i6, (HEAP8[i11 + 209 | 0] & 1) != 0);
 do {
  if ((HEAP8[i7] & 1) == 0) {
   i14 = i11 + 48 | 0;
  } else {
   i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0;
   i13 = i4;
   i10 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 452 >> 2] | 0) + 548 | 0;
   HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   FUNCTION_TABLE_vii[i8 & 15](i6, i4);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 68 >> 2] & 15](i6, 1);
   i8 = i11 + 48 | 0;
   if ((HEAP8[(HEAP32[i8 >> 2] | 0) + 182 | 0] | 0) >= 0) {
    i14 = i8;
    break;
   }
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 3](i6, 512, 512, 512, 512);
   i14 = i8;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] & 15](i6, (HEAP8[(HEAP32[i14 >> 2] | 0) + 196 | 0] & 4) != 0);
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBackingC1ERNS_11RenderLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 i5 = i1 + 4 | 0;
 HEAP32[i5 >> 2] = i2;
 i6 = i1 + 16 | 0;
 i7 = i1 + 89 | 0;
 i8 = i1 + 90 | 0;
 _memset(i1 + 8 | 0, 0, 83) | 0;
 HEAP8[i1 + 91 | 0] = 1;
 HEAP8[i1 + 92 | 0] = 0;
 HEAP8[i1 + 93 | 0] = 0;
 HEAP8[i1 + 94 | 0] = 0;
 i9 = i2 + 32 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 i11 = HEAP32[i10 + 32 >> 2] | 0;
 i12 = (i11 | 0) == 0;
 if (!((HEAP8[i2 + 21 | 0] & 16) == 0 | i12)) {
  if ((HEAP32[i10 + 28 >> 2] | 0) == (i10 | 0)) {
   HEAP8[i7] = 1;
   i13 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
  } else {
   i13 = i10;
  }
  i10 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
  HEAP8[i8] = (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i10 >> 2] | 0) + 460 >> 2] & 7](i10, HEAP32[i13 + 452 >> 2] | 0) | 0) & 1;
 }
 __ZN7WebCore18RenderLayerBacking26createPrimaryGraphicsLayerEv(i1);
 if ((HEAP8[i8] & 1) == 0 | i12) {
  STACKTOP = i3;
  return;
 }
 i12 = HEAP32[i6 >> 2] | 0;
 i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i12 >> 2] | 0) + 284 >> 2] & 3](i12) | 0;
 i12 = i6;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 28 >> 2] & 15](i6, (HEAP8[i11 + 209 | 0] & 1) != 0);
 do {
  if ((HEAP8[i7] & 1) == 0) {
   i14 = i11 + 48 | 0;
  } else {
   i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0;
   i13 = i4;
   i10 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 452 >> 2] | 0) + 548 | 0;
   HEAP32[i13 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   FUNCTION_TABLE_vii[i8 & 15](i6, i4);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 68 >> 2] & 15](i6, 1);
   i8 = i11 + 48 | 0;
   if ((HEAP8[(HEAP32[i8 >> 2] | 0) + 182 | 0] | 0) >= 0) {
    i14 = i8;
    break;
   }
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i6 >> 2] | 0) + 80 >> 2] & 3](i6, 512, 512, 512, 512);
   i14 = i8;
  }
 } while (0);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 52 >> 2] & 15](i6, (HEAP8[(HEAP32[i14 >> 2] | 0) + 196 | 0] & 4) != 0);
 __ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv(i1);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking14paintIntoLayerEPKNS_13GraphicsLayerEPNS_15GraphicsContextERKNS_7IntRectEjj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 do {
  if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
   i9 = i1 + 4 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((HEAP8[i10 + 21 | 0] & 16) == 0) {
    break;
   }
   if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(i10) | 0) + 92 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i9 >> 2] | 0) | 0) + 100 >> 2] | 0) == 2) {
    break;
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 91 | 0] & 1) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = __ZN7WebCore9fontCacheEv() | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 i9 = i6 << 5 & 32;
 i10 = (i6 & 2 | 0) == 0 ? i9 : i9 | 64;
 i9 = (i6 & 4 | 0) == 0 ? i10 : i10 | 128;
 i10 = (i6 & 8 | 0) == 0 ? i9 : i9 | 512;
 i9 = (i6 & 16 | 0) == 0 ? i10 : i10 | 256;
 if ((HEAP32[i1 + 24 >> 2] | 0) == (i2 | 0)) {
  i11 = i9 | 1088;
  i12 = i1 + 4 | 0;
 } else {
  i2 = i1 + 4 | 0;
  i10 = (__ZNK7WebCore21RenderLayerCompositor24fixedRootBackgroundLayerEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i2 >> 2] | 0) | 0) | 0) == 0;
  i11 = i10 ? i9 : i9 | 2048;
  i12 = i2;
 }
 i2 = HEAP32[i12 >> 2] | 0;
 i9 = i4;
 i10 = HEAP32[i9 >> 2] | 0;
 i6 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i4 + 8 | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = i2;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i10;
 HEAP32[i8 + 12 >> 2] = i6;
 HEAP32[i8 + 16 >> 2] = i4;
 HEAP32[i8 + 20 >> 2] = i13;
 i13 = i1 + 80 | 0;
 i4 = i8 + 24 | 0;
 i6 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i4 + 4 >> 2] = i6;
 HEAP32[i8 + 32 >> 2] = 0;
 HEAP32[i8 + 36 >> 2] = 0;
 HEAP32[i8 + 40 >> 2] = i5;
 HEAP8[i8 + 44 | 0] = 1;
 __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i2, i3, i8, i11);
 i2 = HEAP32[i12 >> 2] | 0;
 if ((HEAP8[i2 + 23 | 0] | 0) < 0) {
  __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i2, i3, i8, i11 | 16);
  i14 = HEAP32[i12 >> 2] | 0;
 } else {
  i14 = i2;
 }
 __ZN7WebCore21RenderLayerCompositor15didPaintBackingEPNS_18RenderLayerBackingE(__ZNK7WebCore11RenderLayer10compositorEv(i14) | 0, i1);
 i1 = __ZN7WebCore9fontCacheEv() | 0;
 i14 = i1 | 0;
 i2 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
 HEAP32[i14 >> 2] = i2;
 if ((i2 | 0) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore9FontCache29purgeInactiveFontDataIfNeededEv(i1);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore18RenderLayerBacking27updateAncestorClippingLayerEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 if (!i2) {
  if (i8) {
   i9 = 0;
   STACKTOP = i3;
   return i9 | 0;
  }
  if ((HEAP8[i7 + 340 | 0] & 8) == 0) {
   i10 = i7;
  } else {
   __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i7, 0);
   i10 = HEAP32[i6 >> 2] | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 44 >> 2] & 31](i10);
  i10 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  if ((i10 | 0) == 0) {
   i9 = 1;
   STACKTOP = i3;
   return i9 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
  i9 = 1;
  STACKTOP = i3;
  return i9 | 0;
 }
 if (!i8) {
  i9 = 0;
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 200 | 0);
 i8 = i1 + 4 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i11 = 0;
 } else {
  i7 = HEAP32[(HEAP32[i10 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 296 >> 2] & 3](i7) | 0;
 }
 __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i4, i11, i1 | 0);
 i1 = i4 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i11 = HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] | 0;
 i7 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i8 >> 2] | 0) | 0) | 0;
 FUNCTION_TABLE_vii[i11 & 15](i4, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i7;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i1 >> 2] = 0;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
   i7 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 31](i7);
  }
 } while (0);
 i1 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i5 = i1 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i5 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 88 >> 2] & 15](i1, 1);
 i9 = 1;
 STACKTOP = i3;
 return i9 | 0;
}
function __ZNK7WebCore18RenderLayerBacking13backgroundBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
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
 i13 = i12 | 0;
 i14 = i12;
 i15 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[i15 + 20 >> 2] & 512 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 i16 = i15;
 i17 = (HEAP32[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 12 >> 2] | 0) + 44 >> 2] | 0) >>> 2 & 3;
 if ((i17 | 0) == 2) {
  i18 = i15;
  i19 = i15;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 744 >> 2] & 3](i18) | 0;
  i21 = i15;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 712 >> 2] & 15](i10, i18);
  i22 = (HEAP32[i10 >> 2] | 0) + i20 | 0;
  i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 736 >> 2] & 3](i18) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 704 >> 2] & 15](i11, i18);
  i19 = (HEAP32[i11 >> 2] | 0) + i20 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i16);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 712 >> 2] & 15](i5, i18);
  i20 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 716 >> 2] & 15](i6, i18);
  i5 = i20 - (HEAP32[i6 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i16);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 704 >> 2] & 15](i8, i18);
  i6 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 708 >> 2] & 15](i9, i18);
  i18 = i6 - (HEAP32[i9 >> 2] | 0) | 0;
  HEAP32[i12 >> 2] = i22;
  HEAP32[i14 + 4 >> 2] = i19;
  HEAP32[i12 + 8 >> 2] = i5;
  HEAP32[i14 + 12 >> 2] = i18;
  i23 = i22;
  i24 = i19;
 } else if ((i17 | 0) == 0) {
  i19 = i15 + 52 | 0;
  i15 = HEAP32[i19 >> 2] | 0;
  i22 = HEAP32[i19 + 4 >> 2] | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i13 = i12 + 8 | 0;
  HEAP32[i13 >> 2] = i15;
  HEAP32[i13 + 4 >> 2] = i22;
  i23 = 0;
  i24 = 0;
 } else if ((i17 | 0) == 1) {
  __ZNK7WebCore9RenderBox14paddingBoxRectEv(i14, i16);
  i23 = HEAP32[i12 >> 2] | 0;
  i24 = HEAP32[i14 + 4 >> 2] | 0;
 } else {
  _memset(i12 | 0, 0, 16) | 0;
  i23 = 0;
  i24 = 0;
 }
 i16 = HEAP32[i2 + 68 >> 2] | 0;
 HEAP32[i12 >> 2] = i23 - (HEAP32[i2 + 64 >> 2] | 0);
 HEAP32[i14 + 4 >> 2] = i24 - i16;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i14);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundImageEbRb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 24 | 0;
 if (!(__ZN7WebCore13GraphicsLayer22supportsContentsTilingEv() | 0)) {
  STACKTOP = i4;
  return;
 }
 if (__ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv(i1) | 0) {
  STACKTOP = i4;
  return;
 }
 i8 = i1 + 4 | 0;
 L7 : do {
  if (i2) {
   i9 = (HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 12 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i10 + 4 >> 2] | 0) != 0) {
     break;
    }
    i10 = HEAP32[i10 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L7;
    }
   }
   __ZNK7WebCore18RenderLayerBacking13backgroundBoxEv(i5, i1);
   HEAP32[i6 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] | 0;
   i11 = __ZN7WebCore11CachedImage5imageEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 72 >> 2] & 3](i10) | 0) | 0;
   i10 = (i11 | 0) == 0;
   if (!i10) {
    i12 = i11 + 4 | 0;
    HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
   }
   i12 = HEAP32[(HEAP32[i8 >> 2] | 0) + 32 >> 2] | 0;
   __ZNK7WebCore20RenderBoxModelObject29getGeometryForBackgroundImageEPKNS_22RenderLayerModelObjectERNS_7IntRectERNS_8IntPointERNS_7IntSizeE(i12, i12, i5, i6, i7);
   i12 = i1 + 16 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 140 >> 2] & 15](i13, i7);
   i13 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 136 >> 2] & 15](i13, i6);
   i13 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 144 >> 2] & 15](i13, i5);
   i13 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 148 >> 2] & 15](i13, i5);
   i13 = HEAP32[i12 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i13 >> 2] | 0) + 172 >> 2] & 15](i13, i11);
   HEAP8[i3] = 1;
   if (i10) {
    STACKTOP = i4;
    return;
   }
   i10 = i11 + 4 | 0;
   i11 = i10 | 0;
   i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i11 >> 2] = i13;
    STACKTOP = i4;
    return;
   }
   i13 = i10 - 4 | 0;
   if ((i13 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 31](i13);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 172 >> 2] & 15](i3, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore18RenderLayerBacking23updateInternalHierarchyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  __ZN7WebCore13GraphicsLayer17removeAllChildrenEv(i3);
 }
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   __ZN7WebCore13GraphicsLayer17removeAllChildrenEv(i4);
   i5 = HEAP32[i2 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 15](i5, HEAP32[i3 >> 2] | 0);
  }
 } while (0);
 i4 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i5 = HEAP32[i3 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 24 >> 2] & 15](i5, i4);
 }
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   i3 = HEAP32[i2 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 15](i3, HEAP32[i1 + 16 >> 2] | 0);
  } else {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 24 >> 2] & 15](i4, HEAP32[i1 + 16 >> 2] | 0);
  }
 } while (0);
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 31](i2);
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 24 >> 2] & 15](i2, HEAP32[i4 >> 2] | 0);
 }
 i2 = i1 + 48 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i6 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i6 = i5;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] & 31](i3);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6, HEAP32[i2 >> 2] | 0);
 }
 i2 = i1 + 36 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
  i6 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6, HEAP32[i2 >> 2] | 0);
 }
 i2 = i1 + 40 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
  i6 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6, HEAP32[i2 >> 2] | 0);
 }
 i2 = i1 + 44 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if ((i6 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 44 >> 2] & 31](i6);
 i6 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 24 >> 2] & 15](i6, HEAP32[i2 >> 2] | 0);
 return;
}
function __ZN7WebCore18RenderLayerBacking22setContentsNeedDisplayENS_13GraphicsLayer17ShouldClipToLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = HEAP32[i1 + 4 >> 2] | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 89 | 0] & 1) != 0) {
   if ((HEAP8[i10 + 528 | 0] & 1) == 0) {
    break;
   }
   __ZNK7WebCore11RenderLayer19absoluteBoundingBoxEv(i4, i9);
   __ZN7WebCore9FrameView21addTrackedRepaintRectERKNS_7IntRectE(i10, i4);
  }
 } while (0);
 i4 = i1 + 16 | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   if ((HEAP8[i10 + 340 | 0] & 32) == 0) {
    break;
   }
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 284 >> 2] & 3](i10) | 0;
   if ((i9 | 0) == 0) {
    i11 = HEAP32[i4 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    HEAP32[i6 + 4 >> 2] = 0;
    i12 = i5 + 8 | 0;
    i13 = i11 + 40 | 0;
    i14 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i12 + 4 >> 2] = i14;
    i15 = i11;
   } else {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 104 >> 2] & 15](i8, i9);
    __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i8);
    i15 = HEAP32[i4 >> 2] | 0;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i15 >> 2] | 0) + 128 >> 2] & 7](i15, i7, i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 31](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 31](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 31](i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 124 >> 2] & 31](i2);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking14contentChangedENS_17ContentChangeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if ((i2 | 0) == 1) {
   if ((HEAP32[i1 + 32 >> 2] | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore18RenderLayerBacking17updateAfterLayoutEj(i1, 5);
   STACKTOP = i3;
   return;
  } else if ((i2 | 0) == 2) {
   i5 = HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0;
   i6 = HEAP32[i5 + 12 >> 2] | 0;
   i7 = i6 + 4 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   if (!(__ZNK7WebCore9FillLayer15imagesAreLoadedEv(i7) | 0)) {
    break;
   }
   if ((HEAP32[i6 + 44 >> 2] & 3 | 0) != 0) {
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i5, 23);
   if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i4 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     break;
    }
   }
   i5 = HEAP32[i6 + 8 >> 2] | 0;
   if ((HEAP8[i5 + 8 | 0] & 1) == 0) {
    break;
   }
   i6 = __ZN7WebCore11CachedImage5imageEv(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] & 3](i5) | 0) | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 12 >> 2] & 3](i6) | 0)) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i1);
  } else if ((i2 | 0) == 0) {
   if (!(__ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv(i1) | 0)) {
    STACKTOP = i3;
    return;
   }
   __ZN7WebCore18RenderLayerBacking19updateImageContentsEv(i1);
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((i2 - 3 | 0) >>> 0 >= 2 >>> 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i1 + 4 | 0;
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 232 >> 2] & 3](i4 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 80 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i4;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 3](i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 3](i4) | 0)) {
  STACKTOP = i3;
  return;
 }
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 132 >> 2] & 31](i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore18RenderLayerBacking11contentsBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i3 + 48 | 0;
 i11 = i3 + 56 | 0;
 i12 = i3 + 64 | 0;
 i13 = i3 + 80 | 0;
 i14 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 i15 = i14;
 if ((HEAP32[i14 + 24 >> 2] & 8 | 0) == 0) {
  i16 = i14;
  i17 = i14;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 744 >> 2] & 3](i16) | 0;
  i19 = i14;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 15](i10, i16);
  i20 = (HEAP32[i10 >> 2] | 0) + i18 | 0;
  i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 736 >> 2] & 3](i16) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 15](i11, i16);
  i17 = (HEAP32[i11 >> 2] | 0) + i18 | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i15);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 712 >> 2] & 15](i5, i16);
  i18 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 716 >> 2] & 15](i6, i16);
  i5 = i18 - (HEAP32[i6 >> 2] | 0) | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i15);
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 704 >> 2] & 15](i8, i16);
  i6 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i19 >> 2] | 0) + 708 >> 2] & 15](i9, i16);
  i21 = i20;
  i22 = i17;
  i23 = i5;
  i24 = i6 - (HEAP32[i9 >> 2] | 0) | 0;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i14 >> 2] | 0) + 888 >> 2] & 15](i13, i15);
  __ZNK7WebCore14RenderReplaced19replacedContentRectERKNS_10LayoutSizeE(i12, i14, i13);
  i21 = HEAP32[i12 >> 2] | 0;
  i22 = HEAP32[i12 + 4 >> 2] | 0;
  i23 = HEAP32[i12 + 8 >> 2] | 0;
  i24 = HEAP32[i12 + 12 >> 2] | 0;
 }
 i12 = i22 - (HEAP32[i2 + 68 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i21 - (HEAP32[i2 + 64 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i12;
 HEAP32[i1 + 8 >> 2] = i23;
 HEAP32[i1 + 12 >> 2] = i24;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking17updateAfterLayoutEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 4 | 0;
 do {
  if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0) + 89 | 0] & 1) == 0) {
   __ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv(i1);
   i4 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0;
   i5 = HEAP32[i3 >> 2] | 0;
   i6 = (i2 & 1 | 0) != 0;
   __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(i4, i5, i5, i6);
   if ((i2 & 4 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i1);
   __ZN7WebCore21RenderLayerCompositor23updateRootLayerPositionEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0);
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i7 = i5;
    } else {
     if ((HEAP8[i5 + 21 | 0] & 16) != 0) {
      i7 = i5;
      break;
     }
     if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i5) | 0) {
      i7 = i5;
      break;
     }
     i7 = __ZNK7WebCore11RenderLayer17stackingContainerEv(i5) | 0;
    }
   } while (0);
   if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0) + 89 | 0] & 1) != 0 | (i7 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor35updateCompositingDescendantGeometryERNS_11RenderLayerES2_b(__ZNK7WebCore11RenderLayer10compositorEv(i5) | 0, i7, i7, i6);
  }
 } while (0);
 if ((i2 & 2 | 0) == 0) {
  return;
 }
 do {
  if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((HEAP8[i2 + 21 | 0] & 16) == 0) {
    break;
   }
   if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(i2) | 0) + 92 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0) + 100 >> 2] | 0) == 2) {
    break;
   }
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 91 | 0] & 1) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking22setContentsNeedDisplayENS_13GraphicsLayer17ShouldClipToLayerE(i1, 1);
 return;
}
function __ZN7WebCore18RenderLayerBacking21updateDebugIndicatorsEbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 212 >> 2] & 15](i5, i2);
 i5 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 216 >> 2] & 15](i5, i3);
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 212 >> 2] & 15](i5, i2);
 }
 i5 = i1 + 20 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
  i4 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 216 >> 2] & 15](i4, i3);
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
 }
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 212 >> 2] & 15](i5, i2);
  i5 = HEAP32[i4 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 216 >> 2] & 15](i5, i3);
 }
 i5 = i1 + 32 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
  i4 = HEAP32[i5 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 216 >> 2] & 15](i4, i3);
 }
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
 }
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
 }
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
 }
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 212 >> 2] & 15](i4, i2);
 }
 i4 = i1 + 52 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 212 >> 2] & 15](i1, i2);
 i2 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 216 >> 2] & 15](i2, i3);
 return;
}
function __ZN7WebCore18RenderLayerBacking18updateDrawsContentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i1 + 48 >> 2] | 0) == 0) {
  i5 = __ZNK7WebCore18RenderLayerBacking22containsPaintedContentEb(i1, i2) | 0;
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2, i5);
  i2 = HEAP32[i1 + 20 >> 2] | 0;
  if ((i2 | 0) != 0) {
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2, i5);
  }
  i2 = HEAP32[i1 + 24 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2, i5);
  STACKTOP = i3;
  return;
 }
 i5 = i1 + 4 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((HEAP8[i2 + 22 | 0] & 8) == 0) {
  i6 = 0;
 } else {
  i6 = __ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(i2) | 0;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] & 15](i2, i6);
 i6 = HEAP32[i5 >> 2] | 0;
 L14 : do {
  if ((HEAP8[i6 + 22 | 0] & 8) == 0) {
   i7 = 0;
  } else {
   i2 = HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 36 >> 2] | 0;
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i4, i2, 23);
   if ((HEAP8[i4 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i4 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     i7 = 1;
     break;
    }
   }
   i8 = (HEAP32[i2 + 12 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i8 + 4 >> 2] | 0) != 0) {
     i7 = 1;
     break L14;
    }
    i8 = HEAP32[i8 >> 2] | 0;
    if ((i8 | 0) == 0) {
     break;
    }
   }
   i8 = HEAP32[i5 >> 2] | 0;
   if ((HEAP8[i8 + 22 | 0] & 8) == 0) {
    i9 = i8;
   } else {
    if (__ZNK7WebCore11RenderLayer25hasNonEmptyChildRenderersEv(i8) | 0) {
     i7 = 1;
     break;
    }
    i9 = HEAP32[i5 >> 2] | 0;
   }
   i7 = __ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i9) | 0;
  }
 } while (0);
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 92 >> 2] & 15](i9, i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking21destroyGraphicsLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 16 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  if ((HEAP8[i3 + 340 | 0] & 8) == 0) {
   i4 = i3;
  } else {
   __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3, 0);
   i4 = HEAP32[i2 >> 2] | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 44 >> 2] & 31](i4);
 }
 i4 = i1 + 8 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 }
 i3 = i1 + 12 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 20 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 }
 i2 = i1 + 24 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 28 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 }
 i2 = i1 + 32 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 }
 i4 = i1 + 48 | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 31](i2);
 }
 i2 = i1 + 52 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 31](i1);
 return;
}
function __ZNK7WebCore9RenderBox14paddingBoxRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
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
 i13 = i3 + 72 | 0;
 i14 = i2 | 0;
 i15 = i2;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 744 >> 2] & 3](i14) | 0;
 i17 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 736 >> 2] & 3](i14) | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i7, i2);
 i15 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 15](i8, i14);
 i18 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i8 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 15](i9, i14);
 i8 = i18 - (HEAP32[i9 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 712 >> 2] & 15](i10, i14);
 i9 = i8 + (HEAP32[i10 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 716 >> 2] & 15](i11, i14);
 i10 = i9 + (HEAP32[i11 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i4, i2);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 15](i5, i14);
 i2 = (HEAP32[i4 >> 2] | 0) - (HEAP32[i5 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 15](i6, i14);
 i5 = i2 - (HEAP32[i6 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 704 >> 2] & 15](i12, i14);
 i6 = i5 + (HEAP32[i12 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 708 >> 2] & 15](i13, i14);
 i14 = i6 + (HEAP32[i13 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = i16;
 HEAP32[i1 + 4 >> 2] = i17;
 HEAP32[i1 + 8 >> 2] = i10;
 HEAP32[i1 + 12 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 264 | 0;
 i4 = i3 | 0;
 i5 = i3 + 128 | 0;
 i6 = i3 + 136 | 0;
 HEAPF64[i4 >> 3] = +1;
 _memset(i4 + 8 | 0, 0, 32) | 0;
 HEAPF64[i4 + 40 >> 3] = +1;
 _memset(i4 + 48 | 0, 0, 32) | 0;
 HEAPF64[i4 + 80 >> 3] = +1;
 _memset(i4 + 88 | 0, 0, 32) | 0;
 HEAPF64[i4 + 120 >> 3] = +1;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + 32 >> 2] | 0;
 if ((HEAP32[i8 + 20 >> 2] & 131072 | 0) != 0) {
  i9 = HEAP32[i8 + 56 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i8 + 52 >> 2];
  HEAP32[i5 + 4 >> 2] = i9;
  __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE(i2, i4, i5, 1);
  __ZN7WebCore20makeMatrixRenderableERNS_20TransformationMatrixEb(i4, __ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i7 >> 2] | 0) | 0) | 0);
 }
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i5 = HEAP32[i1 + 16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i5 >> 2] | 0) + 76 >> 2] & 15](i5, i4);
  STACKTOP = i3;
  return;
 } else {
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 76 >> 2] & 15](i7, i4);
  i4 = HEAP32[i1 + 16 >> 2] | 0;
  i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + 76 >> 2] | 0;
  HEAPF64[i6 >> 3] = +1;
  _memset(i6 + 8 | 0, 0, 32) | 0;
  HEAPF64[i6 + 40 >> 3] = +1;
  _memset(i6 + 48 | 0, 0, 32) | 0;
  HEAPF64[i6 + 80 >> 3] = +1;
  _memset(i6 + 88 | 0, 0, 32) | 0;
  HEAPF64[i6 + 120 >> 3] = +1;
  FUNCTION_TABLE_vii[i1 & 15](i4, i6);
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore18RenderLayerBacking22containsPaintedContentEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (i2) {
  i3 = 0;
  return i3 | 0;
 }
 do {
  if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
   i2 = i1 + 4 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   if ((HEAP8[i4 + 21 | 0] & 16) == 0) {
    break;
   }
   if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(i4) | 0) + 92 | 0] & 1) != 0) {
    break;
   }
   if ((HEAP32[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i2 >> 2] | 0) | 0) + 100 >> 2] | 0) == 2) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 91 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP8[i1 + 88 | 0] & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i2 = i1 + 4 | 0;
 i4 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 156 >> 2] & 3](i4 | 0) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 if (__ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv(i1) | 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 3](i1 | 0) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 80 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 3](i1) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 3](i1) | 0)) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = __ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(HEAP32[i2 >> 2] | 0) | 0;
 return i3 | 0;
}
function __ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 92 >> 2] & 3](i5 | 0) | 0)) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if (__ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(HEAP32[i4 >> 2] | 0) | 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i5 = HEAP32[(HEAP32[i4 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((HEAP32[i5 + 20 >> 2] & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    break;
   } else {
    i6 = 0;
   }
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i4 = HEAP32[i5 + 104 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i7 + 664 >> 2] | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i4 = __ZN7WebCore11CachedImage16imageForRendererEPKNS_12RenderObjectE(i7, i5 | 0) | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 3](i4) | 0)) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 15](i3, i4);
 if ((HEAP32[i3 >> 2] | 0) != 1) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i6 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 176 >> 2] & 7](i3, i4) | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore23TransformAnimationValue5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i3 >> 2] = H_BASE + 448;
 HEAPF64[i3 + 8 >> 3] = +HEAPF64[i2 + 8 >> 3];
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i3 >> 2] = H_BASE + 264;
 i5 = HEAP32[i2 + 24 >> 2] | 0;
 i4 = i2 + 28 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = i3 + 20 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i3 + 24 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = i6;
 if ((i5 | 0) == 0) {
  i9 = i1 | 0;
  i10 = i3;
  HEAP32[i9 >> 2] = i10;
  return;
 }
 if (i5 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i6 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
 HEAP32[i8 >> 2] = i6 >>> 2;
 i8 = __ZN3WTF10fastMallocEj(i6) | 0;
 i6 = i8;
 HEAP32[i7 >> 2] = i6;
 if ((i8 | 0) == 0) {
  i9 = i1 | 0;
  i10 = i3;
  HEAP32[i9 >> 2] = i10;
  return;
 }
 i8 = HEAP32[i2 + 20 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i8 + (i2 << 2) | 0;
 if ((i2 | 0) == 0) {
  i9 = i1 | 0;
  i10 = i3;
  HEAP32[i9 >> 2] = i10;
  return;
 } else {
  i11 = i8;
  i12 = i6;
 }
 while (1) {
  i6 = HEAP32[i11 >> 2] | 0;
  HEAP32[i12 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i8 = i6 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  i8 = i11 + 4 | 0;
  if ((i8 | 0) == (i4 | 0)) {
   break;
  } else {
   i11 = i8;
   i12 = i12 + 4 | 0;
  }
 }
 i9 = i1 | 0;
 i10 = i3;
 HEAP32[i9 >> 2] = i10;
 return;
}
function __ZN7WebCore23TransformAnimationValue6createEdRKNS_19TransformOperationsEN3WTF10PassRefPtrINS_14TimingFunctionEEE(i1, d2, i3, i4) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = __ZN3WTF10fastMallocEj(32) | 0;
 i6 = i5;
 i7 = i4 | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAPF64[i5 + 8 >> 3] = d2;
 HEAP32[i5 + 16 >> 2] = i4;
 HEAP32[i5 >> 2] = H_BASE + 264;
 i4 = HEAP32[i3 + 4 >> 2] | 0;
 i7 = i3 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i5 + 20 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i5 + 24 | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i5 + 28 >> 2] = i8;
 if ((i4 | 0) == 0) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i6;
  return;
 }
 if (i4 >>> 0 > 1073741823 >>> 0) {
  _WTFCrash();
 }
 i8 = __ZN3WTF18fastMallocGoodSizeEj(i4 << 2) | 0;
 HEAP32[i10 >> 2] = i8 >>> 2;
 i10 = __ZN3WTF10fastMallocEj(i8) | 0;
 i8 = i10;
 HEAP32[i9 >> 2] = i8;
 if ((i10 | 0) == 0) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i6;
  return;
 }
 i10 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i7 >> 2] | 0;
 i7 = i10 + (i3 << 2) | 0;
 if ((i3 | 0) == 0) {
  i11 = i1 | 0;
  HEAP32[i11 >> 2] = i6;
  return;
 } else {
  i12 = i10;
  i13 = i8;
 }
 while (1) {
  i8 = HEAP32[i12 >> 2] | 0;
  HEAP32[i13 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i10 = i8 + 4 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
  }
  i10 = i12 + 4 | 0;
  if ((i10 | 0) == (i7 | 0)) {
   break;
  } else {
   i12 = i10;
   i13 = i13 + 4 | 0;
  }
 }
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = i6;
 return;
}
function __ZN7WebCore23TransformAnimationValueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 264;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 i10 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i10);
 return;
}
function __ZN7WebCore20FilterAnimationValueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 i4 = i2 + 4 | 0;
 i2 = i4 | 0;
 i6 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i2 >> 2] = i6;
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 i6 = i4 - 4 | 0;
 if ((i6 | 0) == 0) {
  i10 = i1 | 0;
  __ZN3WTF8fastFreeEPv(i10);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 31](i6);
 i10 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i10);
 return;
}
function __ZN7WebCoreL7clipBoxERNS_9RenderBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 40 | 0;
 i8 = i3 + 56 | 0;
 HEAP32[i4 >> 2] = -1073741824;
 HEAP32[i4 + 4 >> 2] = -1073741824;
 HEAP32[i4 + 8 >> 2] = 2147483647;
 HEAP32[i4 + 12 >> 2] = 2147483647;
 i9 = i2 + 20 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 65536 | 0) == 0) {
  i11 = i10;
 } else {
  i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + 936 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  FUNCTION_TABLE_viiiiii[i10 & 1](i5, i2, i6, 0, 0, 0);
  i6 = i4;
  i10 = i5;
  HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i11 = HEAP32[i9 >> 2] | 0;
 }
 if ((i11 & 25165824 | 0) != 16777216) {
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i4);
  STACKTOP = i3;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE(i7, i2, i8, 0);
 __ZN7WebCore10LayoutRect9intersectERKS0_(i4, i7);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking28updateRootLayerConfigurationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i3 >> 2] = 0;
 HEAP8[i3 + 4 | 0] = 0;
 i5 = __ZNK7WebCore21RenderLayerCompositor28viewHasTransparentBackgroundEPNS_5ColorE(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i3) | 0;
 do {
  if ((HEAP8[i1 + 93 | 0] & 1) != 0) {
   i6 = i1 + 24 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 15](i7, i3);
   i7 = HEAP32[i6 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 108 >> 2] & 15](i7, i5 ^ 1);
   i7 = i1 + 16 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i8 = HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   HEAP8[i4 + 4 | 0] = 0;
   FUNCTION_TABLE_vii[i8 & 15](i6, i4);
   i6 = HEAP32[i7 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 15](i6, 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i4 = i1 + 16 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 104 >> 2] & 15](i1, i3);
 i3 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 15](i3, i5 ^ 1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore18RenderLayerBacking26backingStoreMemoryEstimateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, d3 = +0, d4 = +0, d5 = +0, d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 d3 = +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d4 = d3;
 } else {
  d4 = d3 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 24 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d5 = d4;
 } else {
  d5 = d4 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d6 = d5;
 } else {
  d6 = d5 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d7 = d6;
 } else {
  d7 = d6 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d8 = d7;
 } else {
  d8 = d7 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d9 = d8;
 } else {
  d9 = d8 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 }
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i2 | 0) == 0) {
  d10 = d9;
  return +d10;
 }
 d10 = d9 + +FUNCTION_TABLE_di[HEAP32[(HEAP32[i2 >> 2] | 0) + 280 >> 2] & 1](i2);
 return +d10;
}
function runPostSets() {
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_viid + 2;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_fi + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_fi + 4;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_fii + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_v + 2;
}
function __ZN7WebCore18RenderLayerBacking38attachToScrollingCoordinatorWithParentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = __ZN7WebCore4Page20scrollingCoordinatorEv(i4) | 0;
 if ((i5 | 0) == 0) {
  return;
 }
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if ((i4 | 0) == 6) {
  i6 = 1;
 } else {
  i6 = (i4 | 0) == 3 ? 2 : 0;
 }
 if ((i2 | 0) == 0) {
  i7 = 0;
  i8 = 0;
 } else {
  i4 = i2 + 56 | 0;
  i7 = HEAP32[i4 + 4 >> 2] | 0;
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i4 = HEAP32[(HEAP32[i5 >> 2] | 0) + 44 >> 2] | 0;
 i2 = i1 + 56 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i1 | 0) == 0 & (i3 | 0) == 0) {
  i9 = __ZN7WebCore20ScrollingCoordinator19uniqueScrollLayerIDEv(i5) | 0;
  i10 = tempRet0;
  i11 = i9;
 } else {
  i10 = i3;
  i11 = i1;
 }
 i1 = FUNCTION_TABLE_iiiiiii[i4 & 1](i5, i6, i11, i10, i8, i7) | 0;
 HEAP32[i2 >> 2] = i1;
 HEAP32[i2 + 4 >> 2] = tempRet0;
 return;
}
function __ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 16 >> 2] | 0;
 i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + 120 >> 2] | 0;
 __ZN7WebCore11RenderLayer23computeFilterOperationsEPKNS_11RenderStyleE(i4, HEAP32[i1 + 4 >> 2] | 0, i2);
 HEAP8[i1 + 92 | 0] = (FUNCTION_TABLE_iii[i6 & 7](i5, i4) | 0) & 1;
 i5 = i4 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i1 = i4 | 0;
 if ((i6 | 0) != 0) {
  i2 = HEAP32[i1 >> 2] | 0;
  i7 = i2 + (i6 << 2) | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = i2 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 31](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i7 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i1 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundColorEbRb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 if (!i2) {
  i2 = HEAP32[i1 + 16 >> 2] | 0;
  i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 184 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP8[i5 + 4 | 0] = 0;
  FUNCTION_TABLE_vii[i8 & 15](i2, i5);
  STACKTOP = i4;
  return;
 }
 i5 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 i8 = i5 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i9 = __ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i8) | 0;
 } else {
  i9 = i8;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i6, HEAP32[i9 + 36 >> 2] | 0, 23);
 i9 = i1 + 16 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i8 >> 2] | 0) + 184 >> 2] & 15](i8, i6);
 __ZNK7WebCore18RenderLayerBacking13backgroundBoxEv(i7, i1);
 i1 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 144 >> 2] & 15](i1, i7);
 i1 = HEAP32[i9 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 148 >> 2] & 15](i1, i7);
 HEAP8[i3] = 1;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore23TransformAnimationValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 264;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 return;
}
function __ZNK7WebCore18RenderLayerBacking31compositedBoundsIncludingMarginEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 284 >> 2] & 3](i3) | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 84 >> 2] & 3](i4) | 0)) {
    break;
   }
   i3 = HEAP32[i2 + 64 >> 2] | 0;
   i5 = HEAP32[i2 + 68 >> 2] | 0;
   i6 = HEAP32[i2 + 72 >> 2] | 0;
   i7 = HEAP32[i2 + 76 >> 2] | 0;
   i8 = i4;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 96 >> 2] & 3](i4) | 0;
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 88 >> 2] & 3](i4) | 0;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 100 >> 2] & 3](i4) | 0;
   i12 = i10 + i7 + (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 92 >> 2] & 3](i4) | 0) | 0;
   HEAP32[i1 >> 2] = i3 - i9;
   HEAP32[i1 + 4 >> 2] = i5 - i10;
   HEAP32[i1 + 8 >> 2] = i9 + i6 + i11;
   HEAP32[i1 + 12 >> 2] = i12;
   return;
  }
 } while (0);
 i4 = i1;
 i1 = i2 + 64 | 0;
 HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore20FilterAnimationValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 296;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 20 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 << 2) | 0;
  i3 = i5;
  while (1) {
   i5 = HEAP32[i3 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i7 = i5 + 4 | 0;
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i9 | 0) != 0) {
      HEAP32[i8 >> 2] = i9;
      break;
     }
     i9 = i7 - 4 | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 31](i9);
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
  HEAP32[i1 + 24 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 4 | 0;
 i2 = i1 | 0;
 i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i2 >> 2] = i4;
  return;
 }
 i4 = i1 - 4 | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 31](i4);
 return;
}
function __ZN7WebCore18RenderLayerBacking23registerScrollingLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i2 >> 2] | 0) | 0;
 __ZN7WebCore21RenderLayerCompositor30updateViewportConstraintStatusERNS_11RenderLayerE(i3, HEAP32[i2 >> 2] | 0);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 28 >> 2] & 3](i4) | 0)) {
  return;
 }
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = (HEAP8[i3 + 21 | 0] & 16) == 0;
 }
 i3 = HEAP32[(HEAP32[i4 >> 2] | 0) + 92 >> 2] | 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i6 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i7 = i6;
    break;
   }
   i7 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i7 = i2;
  }
 } while (0);
 FUNCTION_TABLE_viii[i3 & 7](i4, i7, i5);
 return;
}
function __ZNK7WebCore18RenderLayerBacking26shouldClipCompositedBoundsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 40 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i4 = 0;
  } else {
   i5 = i1;
   while (1) {
    if ((HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) != 0) {
     i2 = 0;
     i6 = 14;
     break;
    }
    if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i5) | 0) {
     i2 = 0;
     i6 = 15;
     break;
    }
    i7 = HEAP32[i5 + 36 >> 2] | 0;
    if ((i7 | 0) == 0) {
     i6 = 8;
     break;
    } else {
     i5 = i7;
    }
   }
   if ((i6 | 0) == 8) {
    i4 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i6 | 0) == 15) {
    return i2 | 0;
   } else if ((i6 | 0) == 14) {
    return i2 | 0;
   }
  }
 } while (0);
 i2 = (__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(i4) | 0) ^ 1;
 return i2 | 0;
}
function __ZN7WebCore18RenderLayerBacking13updateOpacityEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, d6 = +0, i7 = 0, i8 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 116 >> 2] | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 d6 = +HEAPF32[(HEAP32[i2 + 20 >> 2] | 0) + 4 >> 2];
 L1 : while (1) {
  i2 = i5;
  while (1) {
   i2 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i7 = 10;
    break L1;
   }
   i8 = i2 + 32 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i2) | 0) {
    break;
   }
  }
  if ((HEAP32[i2 + 208 >> 2] | 0) != 0) {
   i7 = 11;
   break;
  }
  i5 = i2;
  d6 = d6 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
 }
 if ((i7 | 0) == 10) {
  FUNCTION_TABLE_vif[i4 & 1](i3, d6);
  return;
 } else if ((i7 | 0) == 11) {
  FUNCTION_TABLE_vif[i4 & 1](i3, d6);
  return;
 }
}
function __ZNK7WebCore18RenderLayerBacking20paintsBoxDecorationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 if (!(__ZNK7WebCore11RenderLayer24hasVisibleBoxDecorationsEv(HEAP32[i2 >> 2] | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
 i2 = i1 + 36 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[i4 + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    break;
   } else {
    i3 = 1;
   }
   return i3 | 0;
  }
 } while (0);
 if (__ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE(i4) | 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 if (+HEAPF32[i2 + 16 >> 2] > +0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((HEAP32[i2 + 292 >> 2] & 512 | 0) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = HEAP32[(HEAP32[i4 + 12 >> 2] | 0) + 44 >> 2] | 0;
 if ((i2 & 61440 | 0) != 8192) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = (i2 & 12 | 0) == 12;
 return i3 | 0;
}
function __ZN7WebCore18RenderLayerBacking26setRequiresOwnBackingStoreEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1 + 91 | 0;
 if ((i2 & 1 | 0) == (HEAP8[i5] & 1 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i5] = i2 & 1;
 i2 = i1 + 4 | 0;
 __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(HEAP32[i2 >> 2] | 0, 0);
 __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(HEAP32[i2 >> 2] | 0);
 i5 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i2 >> 2] | 0) | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = i4;
 i7 = i1 + 64 | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 __ZN7WebCore21RenderLayerCompositor27repaintInCompositedAncestorERNS_11RenderLayerERKNS_10LayoutRectE(i5, i6, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore18RenderLayerBacking19createGraphicsLayerERKN3WTF6StringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 4 | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 8 >> 2] | 0;
  i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 296 >> 2] & 3](i6) | 0;
 }
 __ZN7WebCore13GraphicsLayer6createEPNS_20GraphicsLayerFactoryEPNS_19GraphicsLayerClientE(i1, i5, i2 | 0);
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 248 >> 2] | 0;
 i5 = __ZNK7WebCore21RenderLayerCompositor22keepLayersPixelAlignedEv(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0) | 0;
 FUNCTION_TABLE_vii[i1 & 15](i2, i5);
 return;
}
function __ZN7WebCore18RenderLayerBacking23updateAfterWidgetResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 4 | 0;
 i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 228 >> 2] & 3](i7 | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 i7 = __ZN7WebCore21RenderLayerCompositor23frameContentsCompositorEPNS_12RenderWidgetE(HEAP32[(HEAP32[i6 >> 2] | 0) + 32 >> 2] | 0) | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor22frameViewDidChangeSizeEv(i7);
 __ZNK7WebCore18RenderLayerBacking11contentsBoxEv(i4, i1);
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = i1;
 __ZN7WebCore21RenderLayerCompositor26frameViewDidChangeLocationERKNS_8IntPointE(i7, i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore18RenderLayerBacking16transitionPausedEdNS_13CSSPropertyIDE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 if ((i3 | 0) == 345) {
  i6 = 1;
 } else if ((i3 | 0) == 23) {
  i6 = 3;
 } else if ((i3 | 0) == 102) {
  i6 = 2;
 } else if ((i3 | 0) == 237) {
  i6 = 4;
 } else {
  STACKTOP = i4;
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i3 >> 2] | 0) + 156 >> 2] | 0;
 __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i5, i6);
 FUNCTION_TABLE_viid[i1 & 3](i3, i5, d2);
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i5 = i3 | 0;
 i1 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i3);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i5 >> 2] = i1;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore18RenderLayerBacking18transitionFinishedENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((i2 | 0) == 23) {
  i5 = 3;
 } else if ((i2 | 0) == 237) {
  i5 = 4;
 } else if ((i2 | 0) == 102) {
  i5 = 2;
 } else if ((i2 | 0) == 345) {
  i5 = 1;
 } else {
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + 160 >> 2] | 0;
 __ZN7WebCore13GraphicsLayer26animationNameForTransitionENS_18AnimatedPropertyIDE(i4, i5);
 FUNCTION_TABLE_vii[i1 & 15](i2, i4);
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i2 | 0;
 i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i4 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore18RenderLayerBacking18compositingOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, d4 = +0, i5 = 0, i6 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 d4 = d2;
 L1 : while (1) {
  i1 = i3;
  while (1) {
   i1 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i5 = 10;
    break L1;
   }
   i6 = i1 + 32 | 0;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
    break;
   }
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i1) | 0) {
    break;
   }
  }
  if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
   i5 = 11;
   break;
  }
  i3 = i1;
  d4 = d4 * +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2];
 }
 if ((i5 | 0) == 10) {
  return +d4;
 } else if ((i5 | 0) == 11) {
  return +d4;
 }
 return +0;
}
function __ZNK7WebCore18RenderLayerBacking19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i7 = HEAP32[i1 + 16 >> 2] | 0;
 } else {
  i7 = i6;
 }
 if ((i7 | 0) != (i2 | 0)) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
  i8 = 0;
  STACKTOP = i4;
  return i8 | 0;
 }
 __ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE(i5, i2, 1);
 _memcpy(i3 | 0, i5 | 0, 128) | 0;
 i8 = 1;
 STACKTOP = i4;
 return i8 | 0;
}
function __ZNK7WebCore18RenderLayerBacking26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 do {
  if ((HEAP8[i1 + 89 | 0] & 1) != 0) {
   if ((HEAP32[i1 + 16 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   if ((_strcmp(i3 | 0, H_BASE + 8 | 0) | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   do {
    if ((_strcmp(i3 | 0, H_BASE + 184 | 0) | 0) == 0) {
     if ((HEAP32[i2 + 312 >> 2] | 0) != -1) {
      break;
     }
     if ((HEAP8[i2 + 316 | 0] & 1) == 0) {
      break;
     } else {
      i4 = 0;
     }
     return i4 | 0;
    }
   } while (0);
   if ((_strcmp(i3 | 0, H_BASE + 168 | 0) | 0) == 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = 1;
 return i4 | 0;
}
function __ZN7WebCore18RenderLayerBacking30detachFromScrollingCoordinatorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 56 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0 & (HEAP32[i2 + 4 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = __ZN7WebCore4Page20scrollingCoordinatorEv(i3) | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i1 >> 2] | 0) + 48 >> 2] & 7](i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0);
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZNK7WebCore18RenderLayerBacking25requiresScrollCornerLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i1 + 4 | 0;
 do {
  if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i4 >> 2] | 0) | 0)) {
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i4 >> 2] | 0) | 0) {
    break;
   } else {
    i5 = 0;
   }
   STACKTOP = i2;
   return i5 | 0;
  }
 } while (0);
 __ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv(i3, HEAP32[i4 >> 2] | 0);
 if ((HEAP32[i3 + 8 >> 2] | 0) < 1) {
  i5 = 0;
  STACKTOP = i2;
  return i5 | 0;
 }
 i5 = (HEAP32[i3 + 12 >> 2] | 0) > 0;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZNK7WebCore18RenderLayerBacking22computeTransformOriginERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = (HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 | 0;
 HEAPF32[i1 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0, +(HEAP32[i3 + 8 >> 2] | 0), 0);
 HEAPF32[i1 + 4 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0, +(HEAP32[i3 + 12 >> 2] | 0), 0);
 HEAPF32[i1 + 8 >> 2] = +HEAPF32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2];
 return;
}
function __ZNK7WebCore18RenderLayerBacking37hasUnpositionedOverflowControlsLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 40 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 44 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   if ((HEAP8[i2 + 340 | 0] & 32) == 0) {
    i3 = 1;
   } else {
    break;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = 0;
 return i3 | 0;
}
function __ZNK7WebCore20FilterAnimationValue5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i3 >> 2] = H_BASE + 448;
 HEAPF64[i3 + 8 >> 3] = +HEAPF64[i2 + 8 >> 3];
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i3 >> 2] = H_BASE + 296;
 i5 = i3 + 20 | 0;
 HEAP32[i5 >> 2] = 0;
 HEAP32[i3 + 24 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i5, i2 + 20 | 0) | 0;
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore18RenderLayerBacking24computePerspectiveOriginERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var d4 = +0, i5 = 0;
 d4 = +(HEAP32[i3 + 12 >> 2] | 0);
 i5 = (HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 | 0;
 HEAPF32[i1 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i5 >> 2] | 0) + 20 | 0, +(HEAP32[i3 + 8 >> 2] | 0), 0);
 HEAPF32[i1 + 4 >> 2] = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i5 >> 2] | 0) + 28 | 0, d4, 0);
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
function __ZN7WebCore19FloatAnimationValueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function __ZNK7WebCore18RenderLayerBacking23rendererBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 32 >> 2] | 0;
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i4 = i3 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i2 | 0)) {
  i5 = __ZN7WebCore13RenderElement25rendererForRootBackgroundEv(i4) | 0;
 } else {
  i5 = i4;
 }
 __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i1, HEAP32[i5 + 36 >> 2] | 0, 23);
 return;
}
function __ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 90 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = i1 + 4 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP8[(__ZNK7WebCore11RenderLayer10compositorEv(i1) | 0) + 92 | 0] & 1) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP32[(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0) + 100 >> 2] | 0) != 2;
 return i2 | 0;
}
function __ZN7WebCore14AnimationValueD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 31](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore18RenderLayerBacking19notifyFlushRequiredEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 4 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 i1 = __ZNK7WebCore11RenderLayer10compositorEv(i3) | 0;
 __ZN7WebCore21RenderLayerCompositor18scheduleLayerFlushEb(i1, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 288 >> 2] & 3](i2) | 0);
 return;
}
function __ZNK7WebCore18RenderLayerBacking14paintsChildrenEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 4 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP8[i1 + 22 | 0] & 8) == 0) {
   i3 = i1;
  } else {
   if (__ZNK7WebCore11RenderLayer25hasNonEmptyChildRenderersEv(i1) | 0) {
    i4 = 1;
    return i4 | 0;
   } else {
    i3 = HEAP32[i2 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i4 = __ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(i3) | 0;
 return i4 | 0;
}
function __ZNK7WebCore19FloatAnimationValue5cloneEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i3 >> 2] = H_BASE + 448;
 HEAPF64[i3 + 8 >> 3] = +HEAPF64[i2 + 8 >> 3];
 i4 = HEAP32[i2 + 16 >> 2] | 0;
 HEAP32[i3 + 16 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 + 4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 HEAP32[i3 >> 2] = H_BASE + 328;
 HEAPF32[i3 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2];
 HEAP32[i1 >> 2] = i3;
 return;
}
function __ZNK7WebCore18RenderLayerBacking32requiresHorizontalScrollbarLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 do {
  if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i2 >> 2] | 0) | 0)) {
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i2 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 128 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore18RenderLayerBacking30requiresVerticalScrollbarLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 do {
  if (!(__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(HEAP32[i2 >> 2] | 0) | 0)) {
   if (__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(HEAP32[i2 >> 2] | 0) | 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i3 = (HEAP32[(HEAP32[i2 >> 2] | 0) + 132 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 80 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 3](i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 3](i2) | 0;
 i3 = i4 ? 2 : 1;
 return i3 | 0;
}
function __ZN7WebCore19FloatAnimationValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
 return;
}
function __ZN7WebCore14AnimationValueD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 448;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 31](i3);
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
function __ZNK7WebCore18RenderLayerBacking20compositingLayerTypeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 16 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 196 >> 2] & 3](i1) | 0) {
  i3 = 2;
  return i3 | 0;
 }
 i1 = HEAP8[(HEAP32[i2 >> 2] | 0) + 340 | 0] | 0;
 if ((i1 & 32) == 0) {
  i3 = 3;
  return i3 | 0;
 }
 i3 = (i1 & 255) >>> 3 & 1;
 return i3 | 0;
}
function __ZN7WebCore18RenderLayerBacking32updateDirectlyCompositedContentsEbRb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[(HEAP32[i1 + 4 >> 2] | 0) + 22 | 0] & 8) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundColorEbRb(i1, i2, i3);
 __ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundImageEbRb(i1, i2, i3);
 return;
}
function __ZN7WebCore18RenderLayerBacking22notifyAnimationStartedEPKNS_13GraphicsLayerEd(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i2 = i1 + 4 | 0;
 i1 = __ZNK7WebCore12RenderObject9animationEv(HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0) | 0;
 __ZN7WebCore19AnimationController22notifyAnimationStartedEPNS_13RenderElementEd(i1, HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0, d3);
 return;
}
function __ZN7WebCore18RenderLayerBacking16willDestroyLayerEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i2 + 340 | 0] & 8) == 0) {
  return;
 }
 __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i2, 0);
 return;
}
function __ZNK7WebCore18RenderLayerBacking21tiledBackingHasMarginEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 284 >> 2] & 3](i3) | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 84 >> 2] & 3](i1) | 0;
 return i2 | 0;
}
function __ZNK7WebCore18RenderLayerBacking28paintingPhaseForPrimaryLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = (HEAP32[i1 + 24 >> 2] | 0) == 0 | 0;
 i3 = (HEAP32[i1 + 20 >> 2] | 0) == 0 ? i2 | 2 : i2;
 i2 = (HEAP32[i1 + 32 >> 2] | 0) == 0 ? i3 | 4 : i3;
 if ((HEAP32[i1 + 52 >> 2] | 0) == 0) {
  i4 = i2;
  return i4 | 0;
 }
 i4 = i2 & 5 | 16;
 return i4 | 0;
}
function __ZNK7WebCore18RenderLayerBacking24didCommitChangesForLayerEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 4 | 0;
 i1 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i3 >> 2] | 0) | 0;
 __ZN7WebCore21RenderLayerCompositor23didFlushChangesForLayerERNS_11RenderLayerEPKNS_13GraphicsLayerE(i1, HEAP32[i3 >> 2] | 0, i2);
 return;
}
function __ZNK7WebCore18RenderLayerBacking19childForSuperlayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i4 = i3;
    break;
   }
   i4 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i4 = i2;
  }
 } while (0);
 return i4 | 0;
}
function __ZNK7WebCore18RenderLayerBacking18parentForSublayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i3 | 0) != 0) {
    i4 = i3;
    break;
   }
   i4 = HEAP32[i1 + 16 >> 2] | 0;
  } else {
   i4 = i2;
  }
 } while (0);
 return i4 | 0;
}
function __ZN7WebCore18RenderLayerBacking19setCompositedBoundsERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 64 | 0;
 i1 = i2;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore18RenderLayerBacking24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore21RenderLayerCompositor29layerTiledBackingUsageChangedEPKNS_13GraphicsLayerEb(__ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0, i2, i3);
 return;
}
function __ZN7WebCore18RenderLayerBacking26graphicsLayerToCSSPropertyENS_18AnimatedPropertyIDE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 2) {
  i2 = 102;
 } else if ((i1 | 0) == 4) {
  i2 = 237;
 } else if ((i1 | 0) == 3) {
  i2 = 23;
 } else if ((i1 | 0) == 1) {
  i2 = 345;
 } else {
  i2 = 0;
 }
 return i2 | 0;
}
function __ZNK7WebCore18RenderLayerBacking16compositedBoundsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1;
 i1 = i2 + 64 | 0;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 return;
}
function __ZN7WebCore18RenderLayerBacking26cssToGraphicsLayerPropertyENS_13CSSPropertyIDE(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((i1 | 0) == 237) {
  i2 = 4;
 } else if ((i1 | 0) == 23) {
  i2 = 3;
 } else if ((i1 | 0) == 345) {
  i2 = 1;
 } else if ((i1 | 0) == 102) {
  i2 = 2;
 } else {
  i2 = 0;
 }
 return i2 | 0;
}
function __ZNK7WebCore18RenderLayerBacking34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 return +(+FUNCTION_TABLE_fii[HEAP32[(HEAP32[i3 >> 2] | 0) + 52 >> 2] & 3](i3, i2));
}
function __ZN7WebCore18RenderLayerBacking31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 24 >> 2] & 15](i3, i2);
 return;
}
function __ZNK7WebCore18RenderLayerBacking21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 89 | 0] & 1) == 0 | (i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 28 >> 2] | 0) == (i2 | 0);
 return i3 | 0;
}
function __ZNK7WebCore18RenderLayerBacking21shouldUseTiledBackingEPKNS_13GraphicsLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if ((HEAP8[i1 + 90 | 0] & 1) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[H_BASE + 488 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZN7WebCore18RenderLayerBacking15animationPausedEdRKN3WTF6StringE(i1, d2, i3) {
 i1 = i1 | 0;
 d2 = +d2;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_viid[HEAP32[(HEAP32[i4 >> 2] | 0) + 156 >> 2] & 3](i4, i3, d2);
 return;
}
function __ZNK7WebCore18RenderLayerBacking18isTrackingRepaintsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 56 >> 2] & 3](i2 | 0) | 0;
}
function __ZNK7WebCore18RenderLayerBacking17deviceScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 return +(+FUNCTION_TABLE_fi[HEAP32[(HEAP32[i2 >> 2] | 0) + 44 >> 2] & 7](i2));
}
function __ZNK7WebCore18RenderLayerBacking15pageScaleFactorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = __ZNK7WebCore11RenderLayer10compositorEv(HEAP32[i1 + 4 >> 2] | 0) | 0;
 return +(+FUNCTION_TABLE_fi[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 7](i2));
}
function __ZNK7WebCore18RenderLayerBacking30contentOffsetInCompostingLayerEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = -(HEAP32[i2 + 68 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = -(HEAP32[i2 + 64 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i3;
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
 return FUNCTION_TABLE_iiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0) | 0;
}
function __ZN7WebCore18RenderLayerBacking17animationFinishedERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i3 >> 2] | 0) + 160 >> 2] & 15](i3, i2);
 return;
}
function dynCall_iiiiiid(i1, i2, i3, i4, i5, i6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 return FUNCTION_TABLE_iiiiiid[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, +d7) | 0;
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
function __ZN7WebCore18RenderLayerBacking18updateDrawsContentEv(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18RenderLayerBacking18updateDrawsContentEb(i1, __ZNK7WebCore18RenderLayerBacking33isSimpleContainerCompositingLayerEv(i1) | 0);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore18RenderLayerBacking17suspendAnimationsEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vid[HEAP32[(HEAP32[i3 >> 2] | 0) + 164 >> 2] & 1](i3, d2);
 return;
}
function __ZNK7WebCore18RenderLayerBacking40hasVisibleNonCompositingDescendantLayersEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE(HEAP32[i1 + 4 >> 2] | 0) | 0;
}
function __ZN7WebCore18RenderLayerBacking16resumeAnimationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 168 >> 2] & 31](i2);
 return;
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZNK7WebCore18RenderLayerBacking12tiledBackingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 return FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 284 >> 2] & 3](i2) | 0;
}
function __ZNK7WebCore19GraphicsLayerClient39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return;
}
function __ZN7WebCore18RenderLayerBacking43setBackgroundLayerPaintsFixedRootBackgroundEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP8[i1 + 93 | 0] = i2 & 1;
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore18RenderLayerBackingD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore18RenderLayerBackingD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_viid(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 FUNCTION_TABLE_viid[i1 & 3](i2 | 0, i3 | 0, +d4);
}
function b7(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(7);
 return 0;
}
function b4(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 abort(4);
 return 0;
}
function b15(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(15);
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore18RenderLayerBacking20updateLayerBlendModeEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_fii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return +FUNCTION_TABLE_fii[i1 & 3](i2 | 0, i3 | 0);
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
 FUNCTION_TABLE_vii[i1 & 15](i2 | 0, i3 | 0);
}
function __ZN7WebCore18RenderLayerBacking12setBlendModeENS_9BlendModeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 1](i2 | 0, +d3);
}
function dynCall_vid(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vid[i1 & 1](i2 | 0, +d3);
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
 return FUNCTION_TABLE_ii[i1 & 3](i2 | 0) | 0;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 7](i2 | 0);
}
function dynCall_di(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_di[i1 & 1](i2 | 0);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 31](i2 | 0);
}
function b9(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(9);
 return 0;
}
function b10(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(10);
}
function b12(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 abort(12);
}
function b16(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(16);
 return 0;
}
function b1(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(1);
 return +0;
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
function b6(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(6);
}
function stackRestore(i1) {
 i1 = i1 | 0;
 STACKTOP = i1;
}
function b3(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(3);
}
function b2(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(2);
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
function b14(i1) {
 i1 = i1 | 0;
 abort(14);
 return +0;
}
function b13(i1) {
 i1 = i1 | 0;
 abort(13);
 return +0;
}
function b8(i1) {
 i1 = i1 | 0;
 abort(8);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b5(i1) {
 i1 = i1 | 0;
 abort(5);
}
function b11() {
 abort(11);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore18RenderLayerBacking13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE,b0];
  var FUNCTION_TABLE_fii = [b1,b1,__ZNK7WebCore18RenderLayerBacking34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE,b1];
  var FUNCTION_TABLE_vif = [b2,b2];
  var FUNCTION_TABLE_vid = [b3,b3];
  var FUNCTION_TABLE_iiiiiid = [b4,b4];
  var FUNCTION_TABLE_vi = [b5,b5,__ZN7WebCore20FilterAnimationValueD1Ev,b5,__ZN7WebCore20FilterAnimationValueD0Ev,b5,__ZN7WebCore19FloatAnimationValueD0Ev,b5,__ZN7WebCore23TransformAnimationValueD1Ev,b5,__ZN7WebCore18RenderLayerBackingD2Ev,b5,__ZN7WebCore19FloatAnimationValueD1Ev,b5,__ZN7WebCore18RenderLayerBackingD0Ev,b5,__ZN7WebCore14AnimationValueD1Ev,b5,__ZN7WebCore23TransformAnimationValueD0Ev,b5,__ZN7WebCore14AnimationValueD0Ev,b5,b5,b5,b5,b5,b5,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_vii = [b6,b6,__ZN7WebCore18RenderLayerBackingC2ERNS_11RenderLayerE,b6,__ZNK7WebCore19FloatAnimationValue5cloneEv,b6,__ZN7WebCore18RenderLayerBacking31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE,b6,__ZNK7WebCore20FilterAnimationValue5cloneEv,b6,__ZNK7WebCore23TransformAnimationValue5cloneEv,b6,__ZNK7WebCore18RenderLayerBacking24didCommitChangesForLayerEPKNS_13GraphicsLayerE,b6,__ZN7WebCore18RenderLayerBacking19notifyFlushRequiredEPKNS_13GraphicsLayerE,b6];
  var FUNCTION_TABLE_iiiiiii = [b7,b7];
  var FUNCTION_TABLE_ii = [b8,b8,__ZNK7WebCore18RenderLayerBacking18isTrackingRepaintsEv,b8];
  var FUNCTION_TABLE_iiii = [b9,b9,__ZNK7WebCore18RenderLayerBacking19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE,b9,__ZNK7WebCore18RenderLayerBacking26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc,b9,b9,b9];
  var FUNCTION_TABLE_viii = [b10,b10,__ZNK7WebCore19GraphicsLayerClient39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE,b10,__ZN7WebCore18RenderLayerBacking24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb,b10,b10,b10];
  var FUNCTION_TABLE_v = [b11,b11,v____cxa_pure_virtual__wrapper,b11];
  var FUNCTION_TABLE_viid = [b12,b12,__ZN7WebCore18RenderLayerBacking22notifyAnimationStartedEPKNS_13GraphicsLayerEd,b12];
  var FUNCTION_TABLE_fi = [b13,b13,__ZNK7WebCore18RenderLayerBacking17deviceScaleFactorEv,b13,__ZNK7WebCore18RenderLayerBacking15pageScaleFactorEv,b13,b13,b13];
  var FUNCTION_TABLE_di = [b14,b14];
  var FUNCTION_TABLE_viiiiii = [b15,b15];
  var FUNCTION_TABLE_iii = [b16,b16,__ZNK7WebCore18RenderLayerBacking21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE,b16,__ZNK7WebCore18RenderLayerBacking21shouldUseTiledBackingEPKNS_13GraphicsLayerE,b16,b16,b16];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_fii: dynCall_fii, dynCall_vif: dynCall_vif, dynCall_vid: dynCall_vid, dynCall_iiiiiid: dynCall_iiiiiid, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_iiiiiii: dynCall_iiiiiii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viid: dynCall_viid, dynCall_fi: dynCall_fi, dynCall_di: dynCall_di, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_fii": invoke_fii, "invoke_vif": invoke_vif, "invoke_vid": invoke_vid, "invoke_iiiiiid": invoke_iiiiiid, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_iiiiiii": invoke_iiiiiii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viid": invoke_viid, "invoke_fi": invoke_fi, "invoke_di": invoke_di, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "_strncmp": _strncmp, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_strcmp": _strcmp, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE, "__ZN7WebCore9HTMLNames7bodyTagE": __ZN7WebCore9HTMLNames7bodyTagE }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_fii = Module["dynCall_fii"] = asm["dynCall_fii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_vid = Module["dynCall_vid"] = asm["dynCall_vid"];
var dynCall_iiiiiid = Module["dynCall_iiiiiid"] = asm["dynCall_iiiiiid"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiiiiii = Module["dynCall_iiiiiii"] = asm["dynCall_iiiiiii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viid = Module["dynCall_viid"] = asm["dynCall_viid"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_di = Module["dynCall_di"] = asm["dynCall_di"];
var dynCall_viiiiii = Module["dynCall_viiiiii"] = asm["dynCall_viiiiii"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore18RenderLayerBacking21shouldSkipLayerInDumpEPKNS_13GraphicsLayerE","_strlen","__ZNK7WebCore18RenderLayerBacking19childForSuperlayersEv","__ZNK7WebCore18RenderLayerBacking22computeTransformOriginERKNS_7IntRectE","__ZN7WebCore18RenderLayerBacking17suspendAnimationsEd","__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv","__ZNK7WebCore18RenderLayerBacking33isSimpleContainerCompositingLayerEv","__ZNK7WebCore18RenderLayerBacking21shouldUseTiledBackingEPKNS_13GraphicsLayerE","__ZNK7WebCore18RenderLayerBacking24computePerspectiveOriginERKNS_7IntRectE","__ZN7WebCore18RenderLayerBackingC2ERNS_11RenderLayerE","__ZNK7WebCore19GraphicsLayerClient39customPositionForVisibleRectComputationEPKNS_13GraphicsLayerERNS_10FloatPointE","__ZN7WebCore18RenderLayerBacking28setContentsNeedDisplayInRectERKNS_7IntRectE","__ZN7WebCore25canvasCompositingStrategyERKNS_12RenderObjectE","__ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundImageEbRb","__ZN7WebCore18RenderLayerBacking30positionOverflowControlsLayersEv","__ZN7WebCore18RenderLayerBacking28updateOverflowControlsLayersEbbb","__ZNK7WebCore19FloatAnimationValue5cloneEv","__ZNK7WebCore18RenderLayerBacking30requiresVerticalScrollbarLayerEv","__ZN7WebCore18RenderLayerBacking15animationPausedEdRKN3WTF6StringE","__ZNK7WebCore9RenderBox14paddingBoxRectEv","__ZN7WebCore19FloatAnimationValueD0Ev","__ZN7WebCore18RenderLayerBacking43setBackgroundLayerPaintsFixedRootBackgroundEb","__ZN7WebCore18RenderLayerBacking22updateCompositedBoundsEv","__ZNK7WebCore18RenderLayerBacking19getCurrentTransformEPKNS_13GraphicsLayerERNS_20TransformationMatrixE","__ZN7WebCore18RenderLayerBacking31notifyFlushBeforeDisplayRefreshEPKNS_13GraphicsLayerE","__ZN7WebCore23TransformAnimationValueD1Ev","__ZNK7WebCore20FilterAnimationValue5cloneEv","__ZN7WebCore18RenderLayerBackingD2Ev","__ZNK7WebCore18RenderLayerBacking12tiledBackingEv","__ZNK7WebCore18RenderLayerBacking23rendererBackgroundColorEv","__ZN7WebCore18RenderLayerBacking18updateDrawsContentEv","__ZN7WebCore18RenderLayerBacking13paintContentsEPKNS_13GraphicsLayerERNS_15GraphicsContextEjRKNS_7IntRectE","__ZNK7WebCore18RenderLayerBacking26shouldDumpPropertyForLayerEPKNS_13GraphicsLayerEPKc","__ZNK7WebCore18RenderLayerBacking13backgroundBoxEv","__ZN7WebCore18RenderLayerBacking30detachFromScrollingCoordinatorEv","__ZN7WebCore18RenderLayerBacking32updateDirectlyCompositedContentsEbRb","__ZNK7WebCore18RenderLayerBacking37hasUnpositionedOverflowControlsLayersEv","__ZN7WebCore18RenderLayerBacking15updateMaskLayerEb","__ZN7WebCore18RenderLayerBacking22notifyAnimationStartedEPKNS_13GraphicsLayerEd","__ZNK7WebCore18RenderLayerBacking16compositedBoundsEv","__ZN7WebCore14AnimationValueD0Ev","__ZNK7WebCore18RenderLayerBacking25requiresScrollCornerLayerEv","__ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv","__ZNK7WebCore18RenderLayerBacking18parentForSublayersEv","__ZN7WebCore18RenderLayerBacking19createGraphicsLayerERKN3WTF6StringE","__ZN7WebCore18RenderLayerBacking18transitionFinishedENS_13CSSPropertyIDE","__ZN7WebCoreL34hasBoxDecorationsOrBackgroundImageEPKNS_11RenderStyleE","__ZNK7WebCore18RenderLayerBacking25isDirectlyCompositedImageEv","__ZN7WebCore18RenderLayerBacking21updateBackgroundLayerEb","__ZN7WebCore18RenderLayerBacking39updateDirectlyCompositedBackgroundColorEbRb","__ZN7WebCore18RenderLayerBacking22setContentsNeedDisplayENS_13GraphicsLayer17ShouldClipToLayerE","__ZN7WebCore18RenderLayerBacking21updateDebugIndicatorsEbb","__ZNK7WebCore18RenderLayerBacking34contentsScaleMultiplierForNewTilesEPKNS_13GraphicsLayerE","__ZN7WebCore20FilterAnimationValueD1Ev","__ZNK7WebCore18RenderLayerBacking17deviceScaleFactorEv","__ZNK7WebCore23TransformAnimationValue5cloneEv","__ZN7WebCore23TransformAnimationValueD0Ev","__ZNK7WebCore18RenderLayerBacking18isTrackingRepaintsEv","__ZN7WebCore18RenderLayerBacking21updateForegroundLayerEb","__ZN7WebCore18RenderLayerBacking19notifyFlushRequiredEPKNS_13GraphicsLayerE","__ZN7WebCore18RenderLayerBacking14startAnimationEdPKNS_9AnimationERKNS_12KeyframeListE","__ZN7WebCore18RenderLayerBacking23registerScrollingLayersEv","__ZN7WebCore18RenderLayerBacking26graphicsLayerToCSSPropertyENS_18AnimatedPropertyIDE","__ZN7WebCore18RenderLayerBacking26createPrimaryGraphicsLayerEv","__ZN7WebCore18RenderLayerBacking26setRequiresOwnBackingStoreEb","__ZN7WebCore18RenderLayerBacking38attachToScrollingCoordinatorWithParentEPS0_","__ZNK7WebCore18RenderLayerBacking40hasVisibleNonCompositingDescendantLayersEv","__ZN7WebCore18RenderLayerBacking21destroyGraphicsLayersEv","__ZN7WebCore18RenderLayerBacking28updateRootLayerConfigurationEv","__ZN7WebCore18RenderLayerBacking32updateGraphicsLayerConfigurationEv","__ZN7WebCore18RenderLayerBacking13updateOpacityEPKNS_11RenderStyleE","__ZN7WebCore18RenderLayerBacking14contentChangedENS_17ContentChangeTypeE","_memset","__ZN7WebCore18RenderLayerBacking19setCompositedBoundsERKNS_10LayoutRectE","__ZN7WebCoreL7clipBoxERNS_9RenderBoxE","__ZN7WebCore20FilterAnimationValueD0Ev","__ZN7WebCore18RenderLayerBacking19updateImageContentsEv","__ZNK7WebCore18RenderLayerBacking31compositedBoundsIncludingMarginEv","__ZN7WebCore18RenderLayerBacking26adjustTiledBackingCoverageEv","__ZN7WebCore18RenderLayerBackingD0Ev","__ZN7WebCore18RenderLayerBacking18updateDrawsContentEb","__ZN7WebCore23TransformAnimationValue6createEdRKNS_19TransformOperationsEN3WTF10PassRefPtrINS_14TimingFunctionEEE","__ZNK7WebCore18RenderLayerBacking28paintingPhaseForPrimaryLayerEv","__ZN7WebCore18RenderLayerBacking17resetContentsRectEv","__ZNK7WebCore18RenderLayerBacking24didCommitChangesForLayerEPKNS_13GraphicsLayerE","__ZN7WebCore18RenderLayerBacking17animationFinishedERKN3WTF6StringE","__ZNK7WebCore18RenderLayerBacking32requiresHorizontalScrollbarLayerEv","__ZNK7WebCore18RenderLayerBacking26shouldClipCompositedBoundsEv","__ZN7WebCore18RenderLayerBacking17updateAfterLayoutEj","__ZN7WebCore18RenderLayerBacking13updateFiltersEPKNS_11RenderStyleE","__ZN7WebCore18RenderLayerBacking21updateScrollingLayersEb","__ZN7WebCore18RenderLayerBacking14paintIntoLayerEPKNS_13GraphicsLayerEPNS_15GraphicsContextERKNS_7IntRectEjj","__ZNK7WebCore18RenderLayerBacking20compositingLayerTypeEv","__ZNK7WebCore18RenderLayerBacking18compositingOpacityEf","__ZNK7WebCore18RenderLayerBacking11contentsBoxEv","__ZN7WebCoreL34hasVisibleNonCompositingDescendantERNS_11RenderLayerE","__ZN7WebCore18RenderLayerBacking23updateInternalHierarchyEv","__ZN7WebCore18RenderLayerBacking29updateDescendantClippingLayerEb","__ZN7WebCore19FloatAnimationValueD1Ev","__ZNK7WebCore18RenderLayerBacking15pageScaleFactorEv","__ZN7WebCore18RenderLayerBacking12setBlendModeENS_9BlendModeE","__ZNK7WebCore18RenderLayerBacking22containsPaintedContentEb","__ZNK7WebCore18RenderLayerBacking44adjustAncestorCompositingBoundsForFlowThreadERNS_7IntRectEPKNS_11RenderLayerE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore18RenderLayerBacking15startTransitionEdNS_13CSSPropertyIDEPKNS_11RenderStyleES4_","__ZN7WebCore18RenderLayerBacking20updateLayerBlendModeEPKNS_11RenderStyleE","__ZN7WebCore18RenderLayerBacking15updateTransformEPKNS_11RenderStyleE","__ZNK7WebCore18RenderLayerBacking30contentOffsetInCompostingLayerEv","__ZN7WebCore18RenderLayerBacking24tiledBackingUsageChangedEPKNS_13GraphicsLayerEb","__ZNK7WebCore18RenderLayerBacking20paintsBoxDecorationsEv","_memcpy","__ZNK7WebCore18RenderLayerBacking26backingStoreMemoryEstimateEv","__ZN7WebCore14AnimationValueD1Ev","__ZN7WebCore18RenderLayerBacking27updateAncestorClippingLayerEb","__ZN7WebCore18RenderLayerBacking16willDestroyLayerEPKNS_13GraphicsLayerE","__ZN7WebCore18RenderLayerBacking16transitionPausedEdNS_13CSSPropertyIDE","__ZN7WebCore18RenderLayerBacking26cssToGraphicsLayerPropertyENS_13CSSPropertyIDE","__ZNK7WebCore18RenderLayerBacking14paintsChildrenEv","__ZN7WebCore18RenderLayerBacking23updateAfterWidgetResizeEv","__ZN7WebCore18RenderLayerBacking16resumeAnimationsEv","__ZNK7WebCore18RenderLayerBacking21tiledBackingHasMarginEv"]

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
H_BASE = parentModule["_malloc"](1424 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 1424;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore30CSSPropertyAnimationWrapperMapC1Ev;
/* memory initializer */ allocate([20,0,0,0,26,0,0,0,4,0,0,0,36,1,0,0,47,1,0,0,59,0,0,0,53,0,0,0,34,0,0,0,48,0,0,0,41,0,0,0,52,0,0,0,65,0,0,0,33,0,0,0,42,0,0,0,57,0,0,0,86,0,0,0,90,0,0,0,104,0,0,0,113,0,0,0,86,1,0,0,228,0,0,0,203,0,0,0,90,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vif(index,a1,a2) {
  try {
    Module["dynCall_vif"](index,a1,a2);
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
function invoke_viiidii(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiidii"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiiiid(index,a1,a2,a3,a4,a5,a6) {
  try {
    Module["dynCall_viiiiid"](index,a1,a2,a3,a4,a5,a6);
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
function invoke_viiidi(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiidi"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE=env.__ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE|0;
  var __ZTVN7WebCore19CSSFilterImageValue27FilterSubimageObserverProxyE=env.__ZTVN7WebCore19CSSFilterImageValue27FilterSubimageObserverProxyE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEvE3map=(H_BASE+1416)|0;
  var __ZTVN7WebCore35PropertyWrapperVisitedAffectedColorE=(H_BASE+104)|0;
  var __ZTVN7WebCore24ShorthandPropertyWrapperE=(H_BASE+480)|0;
  var __ZTVN7WebCore21PropertyWrapperShadowE=(H_BASE+704)|0;
  var __ZTVN7WebCore20PropertyWrapperShapeE=(H_BASE+864)|0;
  var __ZTVN7WebCore15PropertyWrapperItEE=(H_BASE+984)|0;
  var __ZTVN7WebCore15PropertyWrapperIiEE=(H_BASE+1104)|0;
  var __ZTVN7WebCore33PropertyWrapperAcceleratedOpacityE=(H_BASE+216)|0;
  var __ZTVN7WebCore15PropertyWrapperIjEE=(H_BASE+1064)|0;
  var __ZTVN7WebCore25StyleImagePropertyWrapperE=(H_BASE+400)|0;
  var __ZTVN7WebCore24FillLayerPropertyWrapperINS_6LengthEEE=(H_BASE+520)|0;
  var __ZTVN7WebCore22ShapeClipPathOperationE=(H_BASE+664)|0;
  var __ZTVN7WebCore26PassthroughFilterOperationE=(H_BASE+336)|0;
  var __ZTVN7WebCore15PropertyWrapperIfEE=(H_BASE+1144)|0;
  var __ZTVN7WebCore15PropertyWrapperIsEE=(H_BASE+1024)|0;
  var __ZTVN7WebCore32PropertyWrapperAcceleratedFilterE=(H_BASE+296)|0;
  var __ZTVN7WebCore23PropertyWrapperClipPathE=(H_BASE+624)|0;
  var __ZTVN7WebCore25FillLayersPropertyWrapperE=(H_BASE+440)|0;
  var __ZTVN7WebCore20PropertyWrapperColorE=(H_BASE+904)|0;
  var __ZTVN7WebCore15PropertyWrapperINS_9SVGLengthEEE=(H_BASE+1224)|0;
  var __ZTVN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEEE=(H_BASE+1184)|0;
  var __ZTVN7WebCore19PropertyWrapperFlexE=(H_BASE+944)|0;
  var __ZTVN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEEE=(H_BASE+1304)|0;
  var __ZTVN7WebCore15PropertyWrapperINS_11EVisibilityEEE=(H_BASE+1264)|0;
  var __ZTVN7WebCore32PropertyWrapperMaybeInvalidColorE=(H_BASE+256)|0;
  var __ZTVN7WebCore21LengthPropertyWrapperINS_10LengthSizeEEE=(H_BASE+824)|0;
  var __ZTVN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEEE=(H_BASE+552)|0;
  var __ZTVN7WebCore35PropertyWrapperAcceleratedTransformE=(H_BASE+144)|0;
  var __ZTVN7WebCore21LengthPropertyWrapperINS_9LengthBoxEEE=(H_BASE+744)|0;
  var __ZTVN7WebCore21LengthPropertyWrapperINS_6LengthEEE=(H_BASE+784)|0;
  var __ZTVN7WebCore23PropertyWrapperSVGPaintE=(H_BASE+584)|0;
  var __ZTVN7WebCore34FillLayerStyleImagePropertyWrapperE=(H_BASE+184)|0;
  var __ZGVZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEvE3map=(H_BASE+1424)|0;
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
  var invoke_vif=env.invoke_vif;
  var invoke_vi=env.invoke_vi;
  var invoke_viiidii=env.invoke_viiidii;
  var invoke_vii=env.invoke_vii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_viiiiid=env.invoke_viiiiid;
  var invoke_v=env.invoke_v;
  var invoke_viiidi=env.invoke_viiidi;
  var invoke_fi=env.invoke_fi;
  var invoke_iii=env.invoke_iii;
  var invoke_viiif=env.invoke_viiif;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _round=env._round;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore30CSSPropertyAnimationWrapperMapC2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i3 = i2 | 0;
 i4 = i2 + 416 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 84;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 148;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 190;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 126;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 142;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 153;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 104;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 224;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 66;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 122;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 76;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 165;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 154;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 98;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 136;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 216;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 96;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 208;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 24 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 82;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 84;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 70;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 97;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 74;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 78;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 32 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 95;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 108;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 36 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i8 + 4 >> 2] = 241;
 HEAP32[i8 >> 2] = H_BASE + 952;
 HEAP32[i3 + 40 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 51;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 70;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 168;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 44 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 56;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 90;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 228;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 48 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 64;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 48;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 180;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 52 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 39;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 58;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 92;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 56 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 92;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 114;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 74;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 60 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 93;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 100;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 114;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 64 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 94;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 54;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 124;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 68 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 91;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 152;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 72 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 115;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 92;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 60;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 76 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 116;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 78;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 200;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 80 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 117;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 210;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 84 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 114;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 134;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 162;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 88 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 1;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 1;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 58;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 52;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 1;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 212;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 220;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 92 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 23;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 23;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 164;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 62;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 23;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 144;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 96;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 96 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 24;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 162;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 172;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 192;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 100 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 87;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 160;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 102;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 104 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 301;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 64;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 56;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 108 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 46;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 158;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 112 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 45;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 42;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 116 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 47;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 150;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 178;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 120 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 43;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 124 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 297;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 202;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 128 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 293;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 132;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1192;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 118;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 132 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 27;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 120;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 32;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 136 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 28;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 84;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 140 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 32;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 144 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 187;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 148 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 304;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 120;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 32;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 152 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 305;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 84;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 156 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 309;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 160 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 6;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 164 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 231;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 140;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 34;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 168 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 226;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 172 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 224;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 94;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 136;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 176 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 233;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 180 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 201;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 76;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 166;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 184 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 208;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 118;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 110;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 188 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 169;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1112;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 204;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 192 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 103;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 196 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 164;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 56;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 232;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 200 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 19;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 38;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 40;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 204 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 106;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 124;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1112;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 208 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 108;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 100;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 212 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 85;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 216 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 167;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 220 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 134;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 130;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 86;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 224 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 321;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 228 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 323;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 44;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 134;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 232 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 324;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 128;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 122;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 236 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 347;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 42;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 240 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 348;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 98;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 222;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 244 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 349;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 248 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 61;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 146;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 120;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 252 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 62;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 116;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 88;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 256 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 36;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 142;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 170;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 260 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 37;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 54;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 264 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 162;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 36;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1272;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 72;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 268 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 18;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 272 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 71;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 126;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 186;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 276 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 102;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 224;
 HEAP32[i3 + 280 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 345;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 156;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 64;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 152;
 HEAP32[i3 + 284 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 237;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 60;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 146;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 304;
 HEAP32[i3 + 288 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 72;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 138;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 206;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 632;
 HEAP32[i3 + 292 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 365;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 98;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 872;
 HEAP32[i3 + 296 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 366;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 86;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 104;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 872;
 HEAP32[i3 + 300 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 367;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 102;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 242;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 304 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 369;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 308 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 229;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 229;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 198;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 132;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 229;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 38;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 156;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 312 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 343;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 343;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 240;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 36;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 343;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 8;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 14;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 316 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 340;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 340;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 68;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 140;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 340;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 44;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 184;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 320 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 49;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 49;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 238;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 48;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 49;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 158;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 28;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 324 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 54;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 54;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 2;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 226;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 54;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 4;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 130;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 328 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 60;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 60;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 128;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 214;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 60;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 192;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 108;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 332 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 35;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 35;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 152;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 90;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 35;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 20;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 336 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 105;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 105;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 196;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 218;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 105;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 46;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 182;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 340 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 67;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 46;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 344 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 218;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 46;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 348 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 146;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 40;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 352 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i8 + 4 >> 2] = 388;
 HEAP32[i8 >> 2] = H_BASE + 592;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 72;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 138;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 24 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 188;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 356 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 389;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 360 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i8 + 4 >> 2] = 397;
 HEAP32[i8 >> 2] = H_BASE + 592;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 144;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 174;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 24 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 364 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 403;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 368 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 404;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 176;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 194;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 372 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 398;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 94;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1312;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 106;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 376 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 399;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 126;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 230;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 380 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 402;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 384 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 380;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 388 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 379;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 148;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 392 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 383;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 396 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 382;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 112;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 236;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 400 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 381;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 80;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 404 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 406;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 234;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 50;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 408 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 410;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 116;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 150;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 412 >> 2] = i8;
 _memset(i1 + 12 | 0, -1 | 0, 414) | 0;
 i8 = __ZN3WTF18fastMallocGoodSizeEj(508) | 0;
 HEAP32[i6 >> 2] = i8 >>> 2;
 i6 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i5 >> 2] = i6;
 i8 = 0;
 i9 = i6;
 while (1) {
  i6 = HEAP32[i3 + (i8 << 2) >> 2] | 0;
  HEAP32[i9 + (HEAP32[i7 >> 2] << 2) >> 2] = i6;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  HEAP8[(HEAP32[i6 + 4 >> 2] | 0) - 1 + (i1 + 12) | 0] = i8;
  i6 = i8 + 1 | 0;
  if (i6 >>> 0 >= 104 >>> 0) {
   break;
  }
  i8 = i6;
  i9 = HEAP32[i5 >> 2] | 0;
 }
 i9 = i4 + 8 | 0;
 i8 = i4 | 0;
 i3 = 0;
 L5 : while (1) {
  i6 = HEAP32[H_BASE + 8 + (i3 << 2) >> 2] | 0;
  __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i4, i6);
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if (i10 >>> 0 > 1073741823 >>> 0) {
     i11 = 7;
     break L5;
    }
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    i13 = i12 >>> 2;
    i14 = __ZN3WTF10fastMallocEj(i12) | 0;
    i12 = i14;
    i15 = HEAP32[i8 >> 2] | 0;
    i16 = HEAP32[i9 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i17 = 0;
    } else {
     i18 = 0;
     i19 = 0;
     i20 = i16;
     while (1) {
      i16 = HEAP8[(HEAP32[i15 + (i19 << 2) >> 2] | 0) - 1 + (i1 + 12) | 0] | 0;
      if (i16 << 24 >> 24 == -1) {
       i21 = i18;
       i22 = i20;
      } else {
       i23 = i16 & 255;
       if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i23 >>> 0) {
        i11 = 11;
        break L5;
       }
       HEAP32[i12 + (i18 << 2) >> 2] = HEAP32[(HEAP32[i5 >> 2] | 0) + (i23 << 2) >> 2];
       i21 = i18 + 1 | 0;
       i22 = HEAP32[i9 >> 2] | 0;
      }
      i23 = i19 + 1 | 0;
      if (i23 >>> 0 < i22 >>> 0) {
       i18 = i21;
       i19 = i23;
       i20 = i22;
      } else {
       i17 = i21;
       break;
      }
     }
    }
    i20 = __ZN3WTF10fastMallocEj(20) | 0;
    do {
     if ((i13 | 0) == 0) {
      i24 = 0;
      i25 = 0;
     } else {
      i19 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
      i18 = i19 >>> 2;
      i12 = __ZN3WTF10fastMallocEj(i19) | 0;
      i19 = i12;
      if ((i12 | 0) == 0) {
       i24 = i19;
       i25 = i18;
       break;
      }
      _memcpy(i12 | 0, i14 | 0, i17 << 2) | 0;
      i24 = i19;
      i25 = i18;
     }
    } while (0);
    HEAP32[i20 + 4 >> 2] = i6;
    HEAP32[i20 >> 2] = H_BASE + 488;
    HEAP32[i20 + 16 >> 2] = i17;
    HEAP32[i20 + 8 >> 2] = i24;
    HEAP32[i20 + 12 >> 2] = i25;
    HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i20;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    HEAP8[i6 - 1 + (i1 + 12) | 0] = i3 + 104;
    if ((i14 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i6 = i3 + 1 | 0;
  if (i6 >>> 0 < 23 >>> 0) {
   i3 = i6;
  } else {
   i11 = 20;
   break;
  }
 }
 if ((i11 | 0) == 7) {
  _WTFCrash();
 } else if ((i11 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 20) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore30CSSPropertyAnimationWrapperMapC1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i3 = i2 | 0;
 i4 = i2 + 416 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 84;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 148;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 190;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 126;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 142;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 153;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 104;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 224;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 8 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 66;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 122;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 76;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 12 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 165;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 154;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 16 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 98;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 136;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 216;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 20 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 96;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 208;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 24 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 82;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 84;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 70;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 28 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 97;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 74;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 78;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 32 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 95;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 108;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 36 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(8) | 0;
 HEAP32[i8 + 4 >> 2] = 241;
 HEAP32[i8 >> 2] = H_BASE + 952;
 HEAP32[i3 + 40 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 51;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 70;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 168;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 44 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 56;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 90;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 228;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 48 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 64;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 48;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 180;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 52 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 39;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 58;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1072;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 92;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 56 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 92;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 114;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 74;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 60 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 93;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 100;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 114;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 64 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 94;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 54;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 124;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 68 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 91;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 152;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 72 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 115;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 92;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 60;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 76 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 116;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 78;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 200;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 80 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 117;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 210;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 84 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 114;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 134;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 162;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 88 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 1;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 1;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 58;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 52;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 1;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 212;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 220;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 92 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 23;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 23;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 164;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 62;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 23;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 144;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 912;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 96;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 96 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 24;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 162;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 172;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 192;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 100 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 87;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 160;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 102;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 104 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 301;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 64;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 56;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 108 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 46;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 158;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 112 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 45;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 42;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 116 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 47;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 150;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 178;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 120 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 43;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 124 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 297;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 202;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 408;
 HEAP32[i3 + 128 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 293;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 132;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1192;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 118;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 132 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 27;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 120;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 32;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 136 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 28;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 84;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 140 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 32;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 144 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 187;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 96;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 66;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 148 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 304;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 120;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 32;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 152 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 305;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 528;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 84;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 156 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 + 4 >> 2] = 309;
 HEAP32[i8 >> 2] = H_BASE + 448;
 i9 = i8 + 12 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 62;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 20 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = __Znwj(20) | 0;
 i10 = i9 + 4 | 0;
 HEAP32[i10 >> 2] = F_BASE_ii + 112;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i9 >> 2] = H_BASE + 560;
 i10 = i9 + 12 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 160;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 HEAP32[i3 + 160 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 6;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 164 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 231;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 140;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 34;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 168 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 226;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 172 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 224;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 94;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 136;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 176 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 233;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 24;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 180 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 201;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 76;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 166;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 184 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 208;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 118;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 110;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 188 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 169;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1112;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 204;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 192 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 103;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 196 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 164;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 56;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1032;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 232;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 200 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 19;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 38;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 40;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 204 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 106;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 124;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1112;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 208 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 108;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 992;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 100;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 212 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 85;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 216 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 167;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 220 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 134;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 130;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 86;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 224 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 321;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 228 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 323;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 44;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 134;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 232 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 324;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 128;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 122;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 236 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 347;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 42;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 240 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 348;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 98;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 222;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 244 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 349;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 28;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 248 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 61;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 146;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 120;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 252 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 62;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 116;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 88;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 256 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 36;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 142;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 170;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 260 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 37;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 30;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 832;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 54;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 264 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 162;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 36;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1272;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 72;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 268 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 18;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 8;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 272 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 71;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 126;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 752;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 186;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 276 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 102;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 224;
 HEAP32[i3 + 280 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 345;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 156;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 64;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 152;
 HEAP32[i3 + 284 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 237;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 60;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 146;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 304;
 HEAP32[i3 + 288 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 72;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 138;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 206;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 632;
 HEAP32[i3 + 292 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 365;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 98;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 872;
 HEAP32[i3 + 296 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 366;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 86;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 104;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 872;
 HEAP32[i3 + 300 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 367;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 102;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 792;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 242;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 304 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 369;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 12;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 308 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 229;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 229;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 198;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 132;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 229;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 38;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 156;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 312 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 343;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 343;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 240;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 36;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 343;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 8;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 14;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 316 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 340;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 340;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 68;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 140;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 340;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 44;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 184;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 320 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 49;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 49;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 238;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 48;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 49;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 158;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 28;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 324 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 54;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 54;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 2;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 226;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 54;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 4;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 130;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 328 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 60;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 60;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 128;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 214;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 60;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 192;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 108;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 332 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 35;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 35;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 152;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 90;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 35;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 20;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 22;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 336 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(16) | 0;
 HEAP32[i8 + 4 >> 2] = 105;
 HEAP32[i8 >> 2] = H_BASE + 112;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 105;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 196;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 218;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = i9;
 i9 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i9 + 4 >> 2] = 105;
 HEAP32[i9 >> 2] = H_BASE + 264;
 i10 = i9 + 8 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 46;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i9 + 16 | 0;
 HEAP32[i10 >> 2] = F_BASE_vii + 182;
 HEAP32[i10 + 4 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = i9;
 HEAP32[i3 + 340 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 67;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 46;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 344 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 218;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 46;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 348 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 146;
 HEAP32[i8 >> 2] = H_BASE + 712;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 40;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_viii + 4;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 352 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i8 + 4 >> 2] = 388;
 HEAP32[i8 >> 2] = H_BASE + 592;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 72;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 138;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 24 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 188;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 356 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 389;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 20;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 360 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(32) | 0;
 HEAP32[i8 + 4 >> 2] = 397;
 HEAP32[i8 >> 2] = H_BASE + 592;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_ii + 144;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 174;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 24 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 364 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 403;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 6;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 368 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 404;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 176;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 194;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 372 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 398;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 94;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1312;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 106;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 376 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 399;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 126;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 230;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 380 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 402;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 18;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 16;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 384 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 380;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 10;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 14;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 388 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 379;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 82;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 148;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 392 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 383;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_fi + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1152;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vif + 2;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 396 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 382;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 112;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 236;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 400 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 381;
 HEAP32[i8 >> 2] = H_BASE + 264;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 80;
 HEAP32[i9 + 4 >> 2] = 0;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 26;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 404 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 406;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 234;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 50;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 408 >> 2] = i8;
 i8 = __ZN3WTF10fastMallocEj(24) | 0;
 HEAP32[i8 + 4 >> 2] = 410;
 i9 = i8 + 8 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 116;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i8 >> 2] = H_BASE + 1232;
 i9 = i8 + 16 | 0;
 HEAP32[i9 >> 2] = F_BASE_vii + 150;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i3 + 412 >> 2] = i8;
 _memset(i1 + 12 | 0, -1 | 0, 414) | 0;
 i8 = __ZN3WTF18fastMallocGoodSizeEj(508) | 0;
 HEAP32[i6 >> 2] = i8 >>> 2;
 i6 = __ZN3WTF10fastMallocEj(i8) | 0;
 HEAP32[i5 >> 2] = i6;
 i8 = 0;
 i9 = i6;
 while (1) {
  i6 = HEAP32[i3 + (i8 << 2) >> 2] | 0;
  HEAP32[i9 + (HEAP32[i7 >> 2] << 2) >> 2] = i6;
  HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
  HEAP8[(HEAP32[i6 + 4 >> 2] | 0) - 1 + (i1 + 12) | 0] = i8;
  i6 = i8 + 1 | 0;
  if (i6 >>> 0 >= 104 >>> 0) {
   break;
  }
  i8 = i6;
  i9 = HEAP32[i5 >> 2] | 0;
 }
 i9 = i4 + 8 | 0;
 i8 = i4 | 0;
 i3 = 0;
 L5 : while (1) {
  i6 = HEAP32[H_BASE + 8 + (i3 << 2) >> 2] | 0;
  __ZN7WebCore20shorthandForPropertyENS_13CSSPropertyIDE(i4, i6);
  i10 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if (i10 >>> 0 > 1073741823 >>> 0) {
     i11 = 7;
     break L5;
    }
    i12 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    i13 = i12 >>> 2;
    i14 = __ZN3WTF10fastMallocEj(i12) | 0;
    i12 = i14;
    i15 = HEAP32[i8 >> 2] | 0;
    i16 = HEAP32[i9 >> 2] | 0;
    if ((i16 | 0) == 0) {
     i17 = 0;
    } else {
     i18 = 0;
     i19 = 0;
     i20 = i16;
     while (1) {
      i16 = HEAP8[(HEAP32[i15 + (i19 << 2) >> 2] | 0) - 1 + (i1 + 12) | 0] | 0;
      if (i16 << 24 >> 24 == -1) {
       i21 = i18;
       i22 = i20;
      } else {
       i23 = i16 & 255;
       if ((HEAP32[i7 >> 2] | 0) >>> 0 <= i23 >>> 0) {
        i11 = 11;
        break L5;
       }
       HEAP32[i12 + (i18 << 2) >> 2] = HEAP32[(HEAP32[i5 >> 2] | 0) + (i23 << 2) >> 2];
       i21 = i18 + 1 | 0;
       i22 = HEAP32[i9 >> 2] | 0;
      }
      i23 = i19 + 1 | 0;
      if (i23 >>> 0 < i22 >>> 0) {
       i18 = i21;
       i19 = i23;
       i20 = i22;
      } else {
       i17 = i21;
       break;
      }
     }
    }
    i20 = __ZN3WTF10fastMallocEj(20) | 0;
    do {
     if ((i13 | 0) == 0) {
      i24 = 0;
      i25 = 0;
     } else {
      i19 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0;
      i18 = i19 >>> 2;
      i12 = __ZN3WTF10fastMallocEj(i19) | 0;
      i19 = i12;
      if ((i12 | 0) == 0) {
       i24 = i19;
       i25 = i18;
       break;
      }
      _memcpy(i12 | 0, i14 | 0, i17 << 2) | 0;
      i24 = i19;
      i25 = i18;
     }
    } while (0);
    HEAP32[i20 + 4 >> 2] = i6;
    HEAP32[i20 >> 2] = H_BASE + 488;
    HEAP32[i20 + 16 >> 2] = i17;
    HEAP32[i20 + 8 >> 2] = i24;
    HEAP32[i20 + 12 >> 2] = i25;
    HEAP32[(HEAP32[i5 >> 2] | 0) + (HEAP32[i7 >> 2] << 2) >> 2] = i20;
    HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
    HEAP8[i6 - 1 + (i1 + 12) | 0] = i3 + 104;
    if ((i14 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i6 = i3 + 1 | 0;
  if (i6 >>> 0 < 23 >>> 0) {
   i3 = i6;
  } else {
   i11 = 20;
   break;
  }
 }
 if ((i11 | 0) == 7) {
  _WTFCrash();
 } else if ((i11 | 0) == 11) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i11 | 0) == 20) {
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore15PropertyWrapperIRKNS_14NinePieceImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS8_SB_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i7 + 24 | 0;
 i12 = i7 + 32 | 0;
 i13 = i7 + 64 | 0;
 i14 = i7 + 96 | 0;
 i15 = i7 + 128 | 0;
 i16 = i1 + 16 | 0;
 i17 = i3 + (HEAP32[i16 + 4 >> 2] | 0) | 0;
 i3 = i17;
 i18 = HEAP32[i16 >> 2] | 0;
 if ((i18 & 1 | 0) == 0) {
  i19 = i18;
 } else {
  i19 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i18 - 1) >> 2] | 0;
 }
 i18 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i18 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i18 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i20 = i4;
 } else {
  i20 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i20 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i18 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i18 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i21 = i5;
 } else {
  i21 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i21 & 255](i1) | 0;
 i1 = i12 | 0;
 i21 = i12;
 i18 = i13 | 0;
 i20 = i13;
 i17 = i14 | 0;
 i16 = i14;
 i22 = i4 | 0;
 i4 = HEAP32[i22 >> 2] | 0;
 i23 = i5 | 0;
 i5 = HEAP32[i23 >> 2] | 0;
 do {
  if ((HEAP32[i4 + 8 >> 2] | 0) != 0) {
   if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
    break;
   }
   do {
    if (__ZNK7WebCore9LengthBoxeqERKS0_(i4 + 12 | 0, i5 + 12 | 0) | 0) {
     if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i22 >> 2] | 0) + 44 | 0, (HEAP32[i23 >> 2] | 0) + 44 | 0) | 0)) {
      break;
     }
     if (!(__ZNK7WebCore9LengthBoxeqERKS0_((HEAP32[i22 >> 2] | 0) + 76 | 0, (HEAP32[i23 >> 2] | 0) + 76 | 0) | 0)) {
      break;
     }
     i24 = HEAP32[i22 >> 2] | 0;
     i25 = i24 + 4 | 0;
     i26 = (HEAP32[i23 >> 2] | 0) + 4 | 0;
     if ((HEAP8[i25] & 1) != 0 ^ (HEAP8[i26] & 1) != 0) {
      break;
     }
     if (((HEAP32[i26 >> 2] ^ HEAP32[i25 >> 2]) & 30 | 0) != 0) {
      break;
     }
     i25 = HEAP32[i24 + 8 >> 2] | 0;
     i24 = i2 + 56 | 0;
     FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] & 1](i8, i25, HEAP32[i24 >> 2] | 0, +1);
     i25 = HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0;
     FUNCTION_TABLE_viiif[HEAP32[(HEAP32[i25 >> 2] | 0) + 24 >> 2] & 1](i9, i25, HEAP32[i24 >> 2] | 0, +1);
     do {
      if ((HEAP32[i8 >> 2] | 0) == (HEAP32[i9 >> 2] | 0)) {
       if ((HEAP32[i8 + 4 >> 2] | 0) != (HEAP32[i9 + 4 >> 2] | 0)) {
        break;
       }
       __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPNS_10StyleImageES4_d(i10, i2, HEAP32[(HEAP32[i22 >> 2] | 0) + 8 >> 2] | 0, HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] | 0, d6);
       i24 = i10 | 0;
       i25 = HEAP32[i24 >> 2] | 0;
       HEAP32[i24 >> 2] = 0;
       i24 = i11 | 0;
       HEAP32[i24 >> 2] = i25;
       i26 = (i25 | 0) == 0;
       if (!i26) {
        i27 = i25 + 4 | 0;
        HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + 1;
       }
       i27 = HEAP32[i22 >> 2] | 0;
       i28 = i27 + 12 | 0;
       i29 = HEAP32[i28 >> 2] | 0;
       i30 = HEAP32[i28 + 4 >> 2] | 0;
       HEAP32[i1 >> 2] = i29;
       HEAP32[i1 + 4 >> 2] = i30;
       if ((i29 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i12);
       }
       i30 = i12 + 8 | 0;
       i29 = i30;
       i28 = i27 + 20 | 0;
       i31 = HEAP32[i28 >> 2] | 0;
       i32 = HEAP32[i28 + 4 >> 2] | 0;
       HEAP32[i30 >> 2] = i31;
       HEAP32[i30 + 4 >> 2] = i32;
       if ((i31 & 0 | 0) == 0 & (i32 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i29);
       }
       i32 = i12 + 16 | 0;
       i31 = i32;
       i30 = i27 + 28 | 0;
       i28 = HEAP32[i30 >> 2] | 0;
       i33 = HEAP32[i30 + 4 >> 2] | 0;
       HEAP32[i32 >> 2] = i28;
       HEAP32[i32 + 4 >> 2] = i33;
       if ((i28 & 0 | 0) == 0 & (i33 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i31);
       }
       i33 = i12 + 24 | 0;
       i28 = i33;
       i32 = i27 + 36 | 0;
       i27 = HEAP32[i32 >> 2] | 0;
       i30 = HEAP32[i32 + 4 >> 2] | 0;
       HEAP32[i33 >> 2] = i27;
       HEAP32[i33 + 4 >> 2] = i30;
       if ((i27 & 0 | 0) == 0 & (i30 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i28);
       }
       i30 = HEAP32[i22 >> 2] | 0;
       i27 = (HEAP8[i30 + 4 | 0] & 1) != 0;
       i33 = i30 + 44 | 0;
       i32 = HEAP32[i33 >> 2] | 0;
       i34 = HEAP32[i33 + 4 >> 2] | 0;
       HEAP32[i18 >> 2] = i32;
       HEAP32[i18 + 4 >> 2] = i34;
       if ((i32 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i13);
       }
       i34 = i13 + 8 | 0;
       i32 = i34;
       i33 = i30 + 52 | 0;
       i35 = HEAP32[i33 >> 2] | 0;
       i36 = HEAP32[i33 + 4 >> 2] | 0;
       HEAP32[i34 >> 2] = i35;
       HEAP32[i34 + 4 >> 2] = i36;
       if ((i35 & 0 | 0) == 0 & (i36 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i32);
       }
       i36 = i13 + 16 | 0;
       i35 = i36;
       i34 = i30 + 60 | 0;
       i33 = HEAP32[i34 >> 2] | 0;
       i37 = HEAP32[i34 + 4 >> 2] | 0;
       HEAP32[i36 >> 2] = i33;
       HEAP32[i36 + 4 >> 2] = i37;
       if ((i33 & 0 | 0) == 0 & (i37 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i35);
       }
       i37 = i13 + 24 | 0;
       i33 = i37;
       i36 = i30 + 68 | 0;
       i30 = HEAP32[i36 >> 2] | 0;
       i34 = HEAP32[i36 + 4 >> 2] | 0;
       HEAP32[i37 >> 2] = i30;
       HEAP32[i37 + 4 >> 2] = i34;
       if ((i30 & 0 | 0) == 0 & (i34 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i33);
       }
       i34 = HEAP32[i22 >> 2] | 0;
       i30 = i34 + 76 | 0;
       i37 = HEAP32[i30 >> 2] | 0;
       i36 = HEAP32[i30 + 4 >> 2] | 0;
       HEAP32[i17 >> 2] = i37;
       HEAP32[i17 + 4 >> 2] = i36;
       if ((i37 & 0 | 0) == 0 & (i36 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i14);
       }
       i36 = i14 + 8 | 0;
       i37 = i36;
       i30 = i34 + 84 | 0;
       i38 = HEAP32[i30 >> 2] | 0;
       i39 = HEAP32[i30 + 4 >> 2] | 0;
       HEAP32[i36 >> 2] = i38;
       HEAP32[i36 + 4 >> 2] = i39;
       if ((i38 & 0 | 0) == 0 & (i39 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i37);
       }
       i39 = i14 + 16 | 0;
       i38 = i39;
       i36 = i34 + 92 | 0;
       i30 = HEAP32[i36 >> 2] | 0;
       i40 = HEAP32[i36 + 4 >> 2] | 0;
       HEAP32[i39 >> 2] = i30;
       HEAP32[i39 + 4 >> 2] = i40;
       if ((i30 & 0 | 0) == 0 & (i40 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i38);
       }
       i40 = i14 + 24 | 0;
       i30 = i40;
       i39 = i34 + 100 | 0;
       i34 = HEAP32[i39 >> 2] | 0;
       i36 = HEAP32[i39 + 4 >> 2] | 0;
       HEAP32[i40 >> 2] = i34;
       HEAP32[i40 + 4 >> 2] = i36;
       if ((i34 & 0 | 0) == 0 & (i36 & 65280 | 0) == 2560) {
        __ZNK7WebCore6Length22incrementCalculatedRefEv(i30);
       }
       i36 = HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0;
       __ZN7WebCore14NinePieceImageC1EN3WTF10PassRefPtrINS_10StyleImageEEENS_9LengthBoxEbS5_S5_NS_19ENinePieceImageRuleES6_(i15, i11, i21, i27, i20, i16, i36 >>> 1 & 3, i36 >>> 3 & 3);
       if ((HEAP8[i16 + 29 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i30);
       }
       if ((HEAP8[i16 + 21 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i38);
       }
       if ((HEAP8[i16 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i37);
       }
       if ((HEAP8[i16 + 5 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
       }
       if ((HEAP8[i20 + 29 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i33);
       }
       if ((HEAP8[i20 + 21 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i35);
       }
       if ((HEAP8[i20 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i32);
       }
       if ((HEAP8[i20 + 5 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i13);
       }
       if ((HEAP8[i21 + 29 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i28);
       }
       if ((HEAP8[i21 + 21 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i31);
       }
       if ((HEAP8[i21 + 13 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i29);
       }
       if ((HEAP8[i21 + 5 | 0] | 0) == 10) {
        __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
       }
       i29 = HEAP32[i24 >> 2] | 0;
       do {
        if ((i29 | 0) != 0) {
         i24 = i29 + 4 | 0;
         i31 = i24 | 0;
         i28 = (HEAP32[i31 >> 2] | 0) - 1 | 0;
         if ((i28 | 0) != 0) {
          HEAP32[i31 >> 2] = i28;
          break;
         }
         i28 = i24 - 4 | 0;
         if ((i28 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 127](i28);
        }
       } while (0);
       if (i26) {
        FUNCTION_TABLE_vii[i19 & 255](i3, i15);
        i41 = i15 | 0;
        i42 = HEAP32[i41 >> 2] | 0;
        i43 = i42 | 0;
        __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
        STACKTOP = i7;
        return;
       }
       i29 = i25 + 4 | 0;
       i28 = i29 | 0;
       i24 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) != 0) {
        HEAP32[i28 >> 2] = i24;
        FUNCTION_TABLE_vii[i19 & 255](i3, i15);
        i41 = i15 | 0;
        i42 = HEAP32[i41 >> 2] | 0;
        i43 = i42 | 0;
        __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
        STACKTOP = i7;
        return;
       }
       i24 = i29 - 4 | 0;
       if ((i24 | 0) == 0) {
        FUNCTION_TABLE_vii[i19 & 255](i3, i15);
        i41 = i15 | 0;
        i42 = HEAP32[i41 >> 2] | 0;
        i43 = i42 | 0;
        __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
        STACKTOP = i7;
        return;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] & 127](i24);
       FUNCTION_TABLE_vii[i19 & 255](i3, i15);
       i41 = i15 | 0;
       i42 = HEAP32[i41 >> 2] | 0;
       i43 = i42 | 0;
       __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
       STACKTOP = i7;
       return;
      }
     } while (0);
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i15 >> 2] = i24;
     i29 = i24 | 0;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     FUNCTION_TABLE_vii[i19 & 255](i3, i15);
     i41 = i15 | 0;
     i42 = HEAP32[i41 >> 2] | 0;
     i43 = i42 | 0;
     __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
     STACKTOP = i7;
     return;
    }
   } while (0);
   i29 = HEAP32[i23 >> 2] | 0;
   HEAP32[i15 >> 2] = i29;
   i24 = i29 | 0;
   HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) + 1;
   FUNCTION_TABLE_vii[i19 & 255](i3, i15);
   i41 = i15 | 0;
   i42 = HEAP32[i41 >> 2] | 0;
   i43 = i42 | 0;
   __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
   STACKTOP = i7;
   return;
  }
 } while (0);
 HEAP32[i15 >> 2] = i5;
 i23 = i5 | 0;
 HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
 FUNCTION_TABLE_vii[i19 & 255](i3, i15);
 i41 = i15 | 0;
 i42 = HEAP32[i41 >> 2] | 0;
 i43 = i42 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i43);
 STACKTOP = i7;
 return;
}
function __ZN7WebCoreL21blendFilterOperationsEPKNS_13AnimationBaseERKNS_16FilterOperationsES5_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 __ZN7WebCore16FilterOperationsC1Ev(i1);
 i14 = i3 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i4 + 8 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = i15 >>> 0 < i17 >>> 0 ? i17 : i15;
 if ((i18 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i19 = i3 | 0;
 i3 = i9 | 0;
 i20 = i4 | 0;
 i4 = i10 | 0;
 i21 = i12 | 0;
 i22 = i11 | 0;
 i23 = i7;
 i24 = i2 + 56 | 0;
 i2 = i7;
 i25 = i23 + 4 | 0;
 i26 = i13 | 0;
 i27 = d5 > +.5;
 i28 = i1 | 0;
 i29 = i1 + 8 | 0;
 i30 = i1 + 4 | 0;
 i31 = i1 | 0;
 i1 = i11;
 i32 = i8;
 i33 = i8;
 i34 = i32 + 4 | 0;
 i35 = 0;
 L4 : while (1) {
  do {
   if (i35 >>> 0 < i15 >>> 0) {
    if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i35 >>> 0) {
     i36 = 6;
     break L4;
    }
    i37 = HEAP32[(HEAP32[i19 >> 2] | 0) + (i35 << 2) >> 2] | 0;
    HEAP32[i3 >> 2] = i37;
    if ((i37 | 0) == 0) {
     break;
    }
    i38 = i37 + 4 | 0;
    HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
   } else {
    HEAP32[i3 >> 2] = 0;
   }
  } while (0);
  do {
   if (i35 >>> 0 < i17 >>> 0) {
    if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i35 >>> 0) {
     i36 = 12;
     break L4;
    }
    i38 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i35 << 2) >> 2] | 0;
    HEAP32[i4 >> 2] = i38;
    if ((i38 | 0) == 0) {
     i36 = 14;
     break;
    }
    i37 = i38 + 4 | 0;
    HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
    i37 = HEAP32[i4 >> 2] | 0;
    i38 = HEAP32[i3 >> 2] | 0;
    if ((i37 | 0) == 0) {
     i39 = i38;
     i36 = 22;
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i37 >> 2] | 0) + 40 >> 2] & 255](i37) | 0) {
     i40 = HEAP32[i24 >> 2] | 0;
     if ((HEAP32[i40 + 20 >> 2] & 512 | 0) == 0) {
      HEAP32[i33 >> 2] = 0;
      HEAP32[i34 >> 2] = 0;
     } else {
      i41 = i40 + 52 | 0;
      i40 = HEAP32[i41 + 4 >> 2] | 0;
      HEAP32[i8 >> 2] = HEAP32[i41 >> 2];
      HEAP32[i8 + 4 >> 2] = i40;
     }
     FUNCTION_TABLE_viiidii[HEAP32[(HEAP32[i37 >> 2] | 0) + 16 >> 2] & 3](i12, i37, i38, d5, i32, 0);
    } else {
     FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i37 >> 2] | 0) + 12 >> 2] & 3](i12, i37, i38, d5, 0);
    }
    i38 = HEAP32[i21 >> 2] | 0;
    i42 = i38;
    i43 = i38;
   } else {
    HEAP32[i4 >> 2] = 0;
    i36 = 14;
   }
  } while (0);
  if ((i36 | 0) == 14) {
   i36 = 0;
   i39 = HEAP32[i3 >> 2] | 0;
   i36 = 22;
  }
  if ((i36 | 0) == 22) {
   i36 = 0;
   do {
    if ((i39 | 0) == 0) {
     HEAP32[i21 >> 2] = 0;
    } else {
     if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i39 >> 2] | 0) + 40 >> 2] & 255](i39) | 0)) {
      FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i39 >> 2] | 0) + 12 >> 2] & 3](i12, i39, 0, d5, 1);
      break;
     }
     i38 = HEAP32[i24 >> 2] | 0;
     if ((HEAP32[i38 + 20 >> 2] & 512 | 0) == 0) {
      HEAP32[i2 >> 2] = 0;
      HEAP32[i25 >> 2] = 0;
     } else {
      i37 = i38 + 52 | 0;
      i38 = HEAP32[i37 + 4 >> 2] | 0;
      HEAP32[i7 >> 2] = HEAP32[i37 >> 2];
      HEAP32[i7 + 4 >> 2] = i38;
     }
     FUNCTION_TABLE_viiidii[HEAP32[(HEAP32[i39 >> 2] | 0) + 16 >> 2] & 3](i12, i39, 0, d5, i23, 1);
    }
   } while (0);
   i38 = HEAP32[i21 >> 2] | 0;
   i42 = i38;
   i43 = i38;
  }
  HEAP32[i21 >> 2] = 0;
  HEAP32[i22 >> 2] = i43;
  do {
   if ((i42 | 0) == 0) {
    i38 = __ZN3WTF10fastMallocEj(12) | 0;
    HEAP32[i38 + 4 >> 2] = 1;
    HEAP32[i38 + 8 >> 2] = 13;
    HEAP32[i38 >> 2] = H_BASE + 344;
    HEAP32[i26 >> 2] = i38;
    do {
     if (i27) {
      i38 = (HEAP32[i4 >> 2] | 0) != 0 ? i10 : i13;
      i37 = HEAP32[i29 >> 2] | 0;
      if ((i37 | 0) != (HEAP32[i30 >> 2] | 0)) {
       i40 = HEAP32[i38 >> 2] | 0;
       HEAP32[(HEAP32[i31 >> 2] | 0) + (i37 << 2) >> 2] = i40;
       if ((i40 | 0) != 0) {
        i41 = i40 + 4 | 0;
        HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 1;
       }
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       break;
      }
      i41 = i37 + 1 | 0;
      i40 = HEAP32[i31 >> 2] | 0;
      do {
       if (i40 >>> 0 > i38 >>> 0) {
        i36 = 49;
       } else {
        if ((i40 + (i37 << 2) | 0) >>> 0 <= i38 >>> 0) {
         i36 = 49;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i41);
        i44 = HEAP32[i31 >> 2] | 0;
        i45 = i44 + (i38 - i40 >> 2 << 2) | 0;
        i46 = i44;
       }
      } while (0);
      if ((i36 | 0) == 49) {
       i36 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i41);
       i45 = i38;
       i46 = HEAP32[i31 >> 2] | 0;
      }
      i40 = HEAP32[i45 >> 2] | 0;
      HEAP32[i46 + (HEAP32[i29 >> 2] << 2) >> 2] = i40;
      if ((i40 | 0) != 0) {
       i37 = i40 + 4 | 0;
       HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 1;
      }
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     } else {
      i37 = (HEAP32[i3 >> 2] | 0) != 0 ? i9 : i13;
      i40 = HEAP32[i29 >> 2] | 0;
      if ((i40 | 0) != (HEAP32[i30 >> 2] | 0)) {
       i44 = HEAP32[i37 >> 2] | 0;
       HEAP32[(HEAP32[i31 >> 2] | 0) + (i40 << 2) >> 2] = i44;
       if ((i44 | 0) != 0) {
        i47 = i44 + 4 | 0;
        HEAP32[i47 >> 2] = (HEAP32[i47 >> 2] | 0) + 1;
       }
       HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
       break;
      }
      i47 = i40 + 1 | 0;
      i44 = HEAP32[i31 >> 2] | 0;
      do {
       if (i44 >>> 0 > i37 >>> 0) {
        i36 = 60;
       } else {
        if ((i44 + (i40 << 2) | 0) >>> 0 <= i37 >>> 0) {
         i36 = 60;
         break;
        }
        __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i47);
        i48 = HEAP32[i31 >> 2] | 0;
        i49 = i48 + (i37 - i44 >> 2 << 2) | 0;
        i50 = i48;
       }
      } while (0);
      if ((i36 | 0) == 60) {
       i36 = 0;
       __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i47);
       i49 = i37;
       i50 = HEAP32[i31 >> 2] | 0;
      }
      i44 = HEAP32[i49 >> 2] | 0;
      HEAP32[i50 + (HEAP32[i29 >> 2] << 2) >> 2] = i44;
      if ((i44 | 0) != 0) {
       i40 = i44 + 4 | 0;
       HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) + 1;
      }
      HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     }
    } while (0);
    i40 = HEAP32[i26 >> 2] | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    i44 = i40 + 4 | 0;
    i40 = i44 | 0;
    i38 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i38 | 0) != 0) {
     HEAP32[i40 >> 2] = i38;
     break;
    }
    i38 = i44 - 4 | 0;
    if ((i38 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 127](i38);
   } else {
    i38 = HEAP32[i29 >> 2] | 0;
    if ((i38 | 0) != (HEAP32[i30 >> 2] | 0)) {
     HEAP32[(HEAP32[i31 >> 2] | 0) + (i38 << 2) >> 2] = i42;
     i44 = i42 + 4 | 0;
     HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + 1;
     HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
     break;
    }
    i44 = i38 + 1 | 0;
    i40 = HEAP32[i31 >> 2] | 0;
    do {
     if (i40 >>> 0 > i11 >>> 0) {
      i36 = 37;
     } else {
      if ((i40 + (i38 << 2) | 0) >>> 0 <= i11 >>> 0) {
       i36 = 37;
       break;
      }
      __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i44);
      i41 = HEAP32[i31 >> 2] | 0;
      i51 = i41 + (i1 - i40 >> 2 << 2) | 0;
      i52 = i41;
     }
    } while (0);
    if ((i36 | 0) == 37) {
     i36 = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i28, i44);
     i51 = i11;
     i52 = HEAP32[i31 >> 2] | 0;
    }
    i40 = HEAP32[i51 >> 2] | 0;
    HEAP32[i52 + (HEAP32[i29 >> 2] << 2) >> 2] = i40;
    if ((i40 | 0) != 0) {
     i38 = i40 + 4 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 1;
    }
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
   }
  } while (0);
  i38 = HEAP32[i22 >> 2] | 0;
  do {
   if ((i38 | 0) != 0) {
    i40 = i38 + 4 | 0;
    i41 = i40 | 0;
    i48 = (HEAP32[i41 >> 2] | 0) - 1 | 0;
    if ((i48 | 0) != 0) {
     HEAP32[i41 >> 2] = i48;
     break;
    }
    i48 = i40 - 4 | 0;
    if ((i48 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i48 >> 2] | 0) + 4 >> 2] & 127](i48);
   }
  } while (0);
  i38 = HEAP32[i4 >> 2] | 0;
  do {
   if ((i38 | 0) != 0) {
    i48 = i38 + 4 | 0;
    i40 = i48 | 0;
    i41 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
    if ((i41 | 0) != 0) {
     HEAP32[i40 >> 2] = i41;
     break;
    }
    i41 = i48 - 4 | 0;
    if ((i41 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i41 >> 2] | 0) + 4 >> 2] & 127](i41);
   }
  } while (0);
  i38 = HEAP32[i3 >> 2] | 0;
  do {
   if ((i38 | 0) != 0) {
    i41 = i38 + 4 | 0;
    i48 = i41 | 0;
    i40 = (HEAP32[i48 >> 2] | 0) - 1 | 0;
    if ((i40 | 0) != 0) {
     HEAP32[i48 >> 2] = i40;
     break;
    }
    i40 = i41 - 4 | 0;
    if ((i40 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i40 >> 2] | 0) + 4 >> 2] & 127](i40);
   }
  } while (0);
  i38 = i35 + 1 | 0;
  if (i38 >>> 0 < i18 >>> 0) {
   i35 = i38;
  } else {
   i36 = 88;
   break;
  }
 }
 if ((i36 | 0) == 6) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i36 | 0) == 12) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i36 | 0) == 88) {
  STACKTOP = i6;
  return;
 }
}
function runPostSets() {
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 94;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_iiii + 52;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_viiiiid + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_vi + 102;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_iiii + 16;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viiiiid + 44;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vi + 98;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_iiii + 56;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiiiid + 48;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_iiii + 12;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viiiiid + 28;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_vi + 120;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viiiiid + 12;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_vi + 80;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_iiii + 6;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_viiiiid + 54;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_vi + 82;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vi + 90;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_viiidi + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_viiidii + 2;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_iiii + 36;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_viiiiid + 16;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_vi + 118;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_iiii + 34;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_viiiiid + 52;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 112;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 100;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_iiii + 24;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_viiiiid + 2;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_vi + 86;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_vi + 78;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_iiii + 20;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_viiiiid + 26;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_iiii + 48;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_viiiiid + 40;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 104;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 96;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_iiii + 28;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_viiiiid + 30;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_vi + 122;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_iiii + 30;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viiiiid + 42;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_vi + 84;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_iiii + 38;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_viiiiid + 18;
 HEAP32[H_BASE + 732 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 752 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 756 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_iiii + 42;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viiiiid + 14;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 792 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 796 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 800 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 804 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 808 >> 2] = F_BASE_viiiiid + 38;
 HEAP32[H_BASE + 812 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 832 >> 2] = F_BASE_vi + 88;
 HEAP32[H_BASE + 836 >> 2] = F_BASE_vi + 92;
 HEAP32[H_BASE + 840 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 844 >> 2] = F_BASE_iiii + 18;
 HEAP32[H_BASE + 848 >> 2] = F_BASE_viiiiid + 24;
 HEAP32[H_BASE + 852 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 872 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 876 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 880 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 884 >> 2] = F_BASE_iiii + 44;
 HEAP32[H_BASE + 888 >> 2] = F_BASE_viiiiid + 10;
 HEAP32[H_BASE + 892 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 912 >> 2] = F_BASE_vi + 110;
 HEAP32[H_BASE + 916 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 920 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 924 >> 2] = F_BASE_iiii + 32;
 HEAP32[H_BASE + 928 >> 2] = F_BASE_viiiiid + 34;
 HEAP32[H_BASE + 932 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 952 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 956 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 960 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 964 >> 2] = F_BASE_iiii + 8;
 HEAP32[H_BASE + 968 >> 2] = F_BASE_viiiiid + 20;
 HEAP32[H_BASE + 972 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 992 >> 2] = F_BASE_vi + 114;
 HEAP32[H_BASE + 996 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 1e3 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1004 >> 2] = F_BASE_iiii + 10;
 HEAP32[H_BASE + 1008 >> 2] = F_BASE_viiiiid + 36;
 HEAP32[H_BASE + 1012 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1032 >> 2] = F_BASE_vi + 126;
 HEAP32[H_BASE + 1036 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 1040 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1044 >> 2] = F_BASE_iiii + 46;
 HEAP32[H_BASE + 1048 >> 2] = F_BASE_viiiiid + 8;
 HEAP32[H_BASE + 1052 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1072 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 1076 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 1080 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1084 >> 2] = F_BASE_iiii + 22;
 HEAP32[H_BASE + 1088 >> 2] = F_BASE_viiiiid + 56;
 HEAP32[H_BASE + 1092 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1112 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 1116 >> 2] = F_BASE_vi + 108;
 HEAP32[H_BASE + 1120 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1124 >> 2] = F_BASE_iiii + 50;
 HEAP32[H_BASE + 1128 >> 2] = F_BASE_viiiiid + 22;
 HEAP32[H_BASE + 1132 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1152 >> 2] = F_BASE_vi + 106;
 HEAP32[H_BASE + 1156 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 1160 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1164 >> 2] = F_BASE_iiii + 12;
 HEAP32[H_BASE + 1168 >> 2] = F_BASE_viiiiid + 32;
 HEAP32[H_BASE + 1172 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1192 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 1196 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 1200 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1204 >> 2] = F_BASE_iiii + 40;
 HEAP32[H_BASE + 1208 >> 2] = F_BASE_viiiiid + 4;
 HEAP32[H_BASE + 1212 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1232 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 1236 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 1240 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1244 >> 2] = F_BASE_iiii + 14;
 HEAP32[H_BASE + 1248 >> 2] = F_BASE_viiiiid + 58;
 HEAP32[H_BASE + 1252 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1272 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 1276 >> 2] = F_BASE_vi + 116;
 HEAP32[H_BASE + 1280 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1284 >> 2] = F_BASE_iiii + 54;
 HEAP32[H_BASE + 1288 >> 2] = F_BASE_viiiiid + 46;
 HEAP32[H_BASE + 1292 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 1312 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 1316 >> 2] = F_BASE_vi + 124;
 HEAP32[H_BASE + 1320 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 1324 >> 2] = F_BASE_iiii + 26;
 HEAP32[H_BASE + 1328 >> 2] = F_BASE_viiiiid + 50;
 HEAP32[H_BASE + 1332 >> 2] = F_BASE_ii + 106;
}
function __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPNS_10StyleImageES4_d(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 40 | 0;
 i12 = (i4 | 0) == 0;
 if ((i3 | 0) == 0 | i12) {
  HEAP32[i1 >> 2] = i4;
  if (i12) {
   STACKTOP = i6;
   return;
  }
  i12 = i4 + 4 | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
  STACKTOP = i6;
  return;
 }
 i12 = i3 + 8 | 0;
 i13 = HEAP8[i12] | 0;
 do {
  if ((i13 & 4) == 0) {
   i14 = 33;
  } else {
   if ((HEAP8[i4 + 8 | 0] & 4) != 0) {
    i15 = HEAP32[i3 + 12 >> 2] | 0;
    i16 = HEAP32[i4 + 12 >> 2] | 0;
    i17 = i15 + 4 | 0;
    do {
     if ((HEAP32[i17 >> 2] & 516096 | 0) == 40960) {
      if ((HEAP32[i16 + 4 >> 2] & 516096 | 0) != 40960) {
       break;
      }
      if (!(__ZNK7WebCore19CSSFilterImageValue16equalInputImagesERKS0_(i15, i16) | 0)) {
       break;
      }
      i18 = HEAP32[i15 + 68 >> 2] | 0;
      if ((i18 | 0) == 0) {
       break;
      }
      __ZN7WebCoreL11blendFilterEPKNS_13AnimationBaseEPNS_11CachedImageERKNS_16FilterOperationsES7_d(i1, i2, i18, i15 + 56 | 0, i16 + 56 | 0, d5);
      STACKTOP = i6;
      return;
     }
    } while (0);
    if ((HEAP32[i17 >> 2] & 516096 | 0) != 32768) {
     break;
    }
    if ((HEAP32[i16 + 4 >> 2] & 516096 | 0) != 32768) {
     break;
    }
    i18 = i15;
    i19 = i16;
    if (!(__ZNK7WebCore17CSSCrossfadeValue16equalInputImagesERKS0_(i18, i19) | 0)) {
     break;
    }
    __ZNK7WebCore17CSSCrossfadeValue5blendERKS0_d(i9, i19, i18, d5);
    i18 = i9 | 0;
    i19 = HEAP32[i18 >> 2] | 0;
    i20 = i19 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i20 = __ZN3WTF10fastMallocEj(28) | 0;
    HEAP32[i7 >> 2] = i19;
    __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i20, i7);
    HEAP32[i1 >> 2] = i20;
    i20 = HEAP32[i18 >> 2] | 0;
    if ((i20 | 0) == 0) {
     STACKTOP = i6;
     return;
    }
    i18 = i20 | 0;
    i19 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i19 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i20 | 0);
     STACKTOP = i6;
     return;
    } else {
     HEAP32[i18 >> 2] = i19;
     STACKTOP = i6;
     return;
    }
   }
   if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
    i14 = 33;
    break;
   }
   i19 = HEAP32[i3 + 12 >> 2] | 0;
   if ((HEAP32[i19 + 4 >> 2] & 516096 | 0) != 40960) {
    break;
   }
   i18 = HEAP32[i19 + 68 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   if ((HEAP32[i4 + 16 >> 2] | 0) != (i18 | 0)) {
    break;
   }
   __ZN7WebCore16FilterOperationsC1Ev(i10);
   __ZN7WebCoreL11blendFilterEPKNS_13AnimationBaseEPNS_11CachedImageERKNS_16FilterOperationsES7_d(i1, i2, i18, i19 + 56 | 0, i10, d5);
   i19 = i10 + 8 | 0;
   i18 = HEAP32[i19 >> 2] | 0;
   i20 = i10 | 0;
   if ((i18 | 0) != 0) {
    i21 = HEAP32[i20 >> 2] | 0;
    i22 = i21 + (i18 << 2) | 0;
    i18 = i21;
    while (1) {
     i21 = HEAP32[i18 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i23 = i21 + 4 | 0;
       i24 = i23 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) != 0) {
        HEAP32[i24 >> 2] = i25;
        break;
       }
       i25 = i23 - 4 | 0;
       if ((i25 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 127](i25);
      }
     } while (0);
     i18 = i18 + 4 | 0;
     if ((i18 | 0) == (i22 | 0)) {
      break;
     }
    }
    HEAP32[i19 >> 2] = 0;
   }
   i22 = HEAP32[i20 >> 2] | 0;
   if ((i22 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   HEAP32[i20 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i22);
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((i14 | 0) == 33) {
   if ((i13 & 1) == 0) {
    break;
   }
   if ((HEAP8[i4 + 8 | 0] & 4) == 0) {
    break;
   }
   i10 = HEAP32[i4 + 12 >> 2] | 0;
   if ((HEAP32[i10 + 4 >> 2] & 516096 | 0) != 40960) {
    break;
   }
   i7 = HEAP32[i10 + 68 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   if ((HEAP32[i3 + 16 >> 2] | 0) != (i7 | 0)) {
    break;
   }
   __ZN7WebCore16FilterOperationsC1Ev(i11);
   __ZN7WebCoreL11blendFilterEPKNS_13AnimationBaseEPNS_11CachedImageERKNS_16FilterOperationsES7_d(i1, i2, i7, i11, i10 + 56 | 0, d5);
   i10 = i11 + 8 | 0;
   i7 = HEAP32[i10 >> 2] | 0;
   i9 = i11 | 0;
   if ((i7 | 0) != 0) {
    i22 = HEAP32[i9 >> 2] | 0;
    i18 = i22 + (i7 << 2) | 0;
    i7 = i22;
    while (1) {
     i22 = HEAP32[i7 >> 2] | 0;
     do {
      if ((i22 | 0) != 0) {
       i16 = i22 + 4 | 0;
       i15 = i16 | 0;
       i17 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       if ((i17 | 0) != 0) {
        HEAP32[i15 >> 2] = i17;
        break;
       }
       i17 = i16 - 4 | 0;
       if ((i17 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] & 127](i17);
      }
     } while (0);
     i7 = i7 + 4 | 0;
     if ((i7 | 0) == (i18 | 0)) {
      break;
     }
    }
    HEAP32[i10 >> 2] = 0;
   }
   i18 = HEAP32[i9 >> 2] | 0;
   if ((i18 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   HEAP32[i9 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i18);
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((HEAP8[i12] & 1) != 0) {
   if ((HEAP8[i4 + 8 | 0] & 1) == 0) {
    break;
   }
   if (d5 == +0) {
    HEAP32[i1 >> 2] = i3;
    i11 = i3 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    STACKTOP = i6;
    return;
   }
   if (d5 == +1) {
    HEAP32[i1 >> 2] = i4;
    i11 = i4 + 4 | 0;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    STACKTOP = i6;
    return;
   }
   i11 = __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i3 + 16 >> 2] | 0) + 48 | 0) | 0;
   i2 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringEPNS_10StyleImageE(i2, i11, i3);
   i11 = __ZNK7WebCore19ResourceRequestBase3urlEv((HEAP32[i4 + 16 >> 2] | 0) + 48 | 0) | 0;
   i13 = __ZN3WTF10fastMallocEj(24) | 0;
   __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringEPNS_10StyleImageE(i13, i11, i4);
   i11 = __ZN3WTF10fastMallocEj(84) | 0;
   i14 = i11;
   __ZN7WebCore22CSSImageGeneratorValueC2ENS_8CSSValue9ClassTypeE(i14, 4);
   HEAP32[i11 + 48 >> 2] = i2;
   HEAP32[i11 + 52 >> 2] = i13;
   i13 = i11 + 56 | 0;
   HEAP32[i13 >> 2] = 0;
   __ZN7WebCore24CachedResourceHandleBaseC2Ev(i11 + 60 | 0);
   __ZN7WebCore24CachedResourceHandleBaseC2Ev(i11 + 64 | 0);
   HEAP32[i11 + 68 >> 2] = 0;
   HEAP32[i11 + 72 >> 2] = __ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE + 8;
   HEAP32[i11 + 76 >> 2] = i11;
   HEAP8[i11 + 80 | 0] = 0;
   i11 = __ZN3WTF10fastMallocEj(16) | 0;
   __ZN7WebCore17CSSPrimitiveValueC1EdNS0_9UnitTypesE(i11, d5, 1);
   i2 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = i11;
   do {
    if ((i2 | 0) != 0) {
     i11 = i2 | 0;
     i13 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i11 >> 2] = i13;
      break;
     }
    }
   } while (0);
   i2 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i8 >> 2] = i14;
   __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i2, i8);
   HEAP32[i1 >> 2] = i2;
   STACKTOP = i6;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = i4;
 i1 = i4 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore9SVGLength5blendERKS0_f(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, d29 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 64 | 0;
 i13 = i5 + 72 | 0;
 i14 = i5 + 80 | 0;
 i15 = __ZNK7WebCore9SVGLength8unitTypeEv(i2) | 0;
 i16 = __ZNK7WebCore9SVGLength8unitTypeEv(i3) | 0;
 i17 = i3 | 0;
 i18 = +HEAPF32[i17 >> 2] == +0;
 do {
  if (i18) {
   if (+HEAPF32[i2 >> 2] == +0 | (i16 | 0) == 0 | (i15 | 0) == 0) {
    break;
   }
   i19 = (i16 | 0) == 2;
   i20 = (i15 | 0) == 2;
   i21 = 6;
  } else {
   if ((i16 | 0) == 0 | (i15 | 0) == 0) {
    break;
   }
   i22 = (i16 | 0) == 2;
   i23 = (i15 | 0) == 2;
   if (!(i23 & ((i18 | i22) ^ 1))) {
    i19 = i22;
    i20 = i23;
    i21 = 6;
   }
  }
 } while (0);
 do {
  if ((i21 | 0) == 6) {
   i23 = i2 | 0;
   i22 = +HEAPF32[i23 >> 2] == +0;
   if (!(i22 | i19 ^ 1 | i20)) {
    break;
   }
   if (!(i18 | i22)) {
    if (!((i16 - 3 | 0) >>> 0 > 1 >>> 0 | (i16 | 0) == (i15 | 0))) {
     break;
    }
   }
   i22 = i7 | 0;
   HEAP32[i22 >> 2] = 0;
   __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i6, 2, i7);
   i24 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i24 | 0) != 0) {
     i22 = i24 | 0;
     i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
     if ((i25 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i24);
      break;
     } else {
      HEAP32[i22 >> 2] = i25;
      break;
     }
    }
   } while (0);
   HEAP32[i8 >> 2] = 0;
   if (i19 | i20) {
    d26 = +__ZNK7WebCore9SVGLength17valueAsPercentageEv(i3) * +100;
    __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i6, 2, d26 + d4 * (+__ZNK7WebCore9SVGLength17valueAsPercentageEv(i2) * +100 - d26), i8);
    if ((HEAP32[i8 >> 2] | 0) == 0) {
     __ZN7WebCore9SVGLengthC1ERKS0_(i1, i6);
     STACKTOP = i5;
     return;
    }
    i24 = i9 | 0;
    HEAP32[i24 >> 2] = 0;
    __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i9);
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     STACKTOP = i5;
     return;
    }
    i24 = i25 | 0;
    i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
    if ((i22 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i25);
     STACKTOP = i5;
     return;
    } else {
     HEAP32[i24 >> 2] = i22;
     STACKTOP = i5;
     return;
    }
   }
   d26 = +HEAPF32[i17 >> 2];
   do {
    if ((i16 | 0) == (i15 | 0) | d26 == +0) {
     i21 = 24;
    } else {
     d27 = +HEAPF32[i23 >> 2];
     if (d27 == +0) {
      d28 = d27;
      break;
     }
     if ((i16 - 3 | 0) >>> 0 < 2 >>> 0) {
      i21 = 24;
      break;
     }
     __ZN7WebCore16SVGLengthContextC1EPKNS_10SVGElementE(i11, 0);
     d27 = +HEAPF32[i17 >> 2];
     d29 = +__ZNK7WebCore16SVGLengthContext23convertValueToUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i11, d27, __ZNK7WebCore9SVGLength8unitModeEv(i3) | 0, i16, i8);
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i22 = i12 | 0;
      HEAP32[i22 >> 2] = 0;
      __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i12);
      i24 = HEAP32[i22 >> 2] | 0;
      if ((i24 | 0) == 0) {
       STACKTOP = i5;
       return;
      }
      i22 = i24 | 0;
      i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
      if ((i25 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i24);
       STACKTOP = i5;
       return;
      } else {
       HEAP32[i22 >> 2] = i25;
       STACKTOP = i5;
       return;
      }
     }
     d27 = +__ZNK7WebCore16SVGLengthContext25convertValueFromUserUnitsEfNS_13SVGLengthModeENS_13SVGLengthTypeERi(i11, d29, __ZNK7WebCore9SVGLength8unitModeEv(i2) | 0, i15, i8);
     if ((HEAP32[i8 >> 2] | 0) != 0) {
      i25 = i13 | 0;
      HEAP32[i25 >> 2] = 0;
      __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i13);
      i22 = HEAP32[i25 >> 2] | 0;
      if ((i22 | 0) == 0) {
       STACKTOP = i5;
       return;
      }
      i25 = i22 | 0;
      i24 = (HEAP32[i25 >> 2] | 0) - 2 | 0;
      if ((i24 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i22);
       STACKTOP = i5;
       return;
      } else {
       HEAP32[i25 >> 2] = i24;
       STACKTOP = i5;
       return;
      }
     }
     __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i6, i15 & 65535, d27 + d4 * (+HEAPF32[i23 >> 2] - d27), i8);
     if ((HEAP32[i8 >> 2] | 0) == 0) {
      __ZN7WebCore9SVGLengthC1ERKS0_(i1, i6);
      STACKTOP = i5;
      return;
     }
     i24 = i14 | 0;
     HEAP32[i24 >> 2] = 0;
     __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i14);
     i25 = HEAP32[i24 >> 2] | 0;
     if ((i25 | 0) == 0) {
      STACKTOP = i5;
      return;
     }
     i24 = i25 | 0;
     i22 = (HEAP32[i24 >> 2] | 0) - 2 | 0;
     if ((i22 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i25);
      STACKTOP = i5;
      return;
     } else {
      HEAP32[i24 >> 2] = i22;
      STACKTOP = i5;
      return;
     }
    }
   } while (0);
   if ((i21 | 0) == 24) {
    d28 = +HEAPF32[i23 >> 2];
   }
   if (d28 == +0) {
    __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i6, i16 & 65535, d26 + d4 * (d28 - d26), i8);
   } else {
    __ZN7WebCore9SVGLength22newValueSpecifiedUnitsEtfRi(i6, i15 & 65535, d26 + d4 * (d28 - d26), i8);
   }
   if ((HEAP32[i8 >> 2] | 0) == 0) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i1, i6);
    STACKTOP = i5;
    return;
   }
   i22 = i10 | 0;
   HEAP32[i22 >> 2] = 0;
   __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1, 2, i10);
   i24 = HEAP32[i22 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i5;
    return;
   }
   i22 = i24 | 0;
   i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i22 >> 2] = i25;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 __ZN7WebCore9SVGLengthC1ERKS0_(i1, i2);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKSA_SD_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i2 | 0;
 i8 = i2 + 16 | 0;
 i9 = i2 + 24 | 0;
 i10 = i2 + 40 | 0;
 i11 = i2 + 56 | 0;
 i12 = i1 + 16 | 0;
 i13 = i3 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i3 = i13;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 & 1 | 0) == 0) {
  i15 = i14;
 } else {
  i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i14 - 1) >> 2] | 0;
 }
 i14 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i14 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i16 = i4;
 } else {
  i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i16 & 255](i10, i1);
 i1 = i5 + (HEAP32[i14 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i14 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i17 = i5;
 } else {
  i17 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i17 & 255](i11, i1);
 i1 = i8;
 i17 = i10 + 8 | 0;
 i5 = HEAP32[i17 >> 2] | 0;
 i14 = i11 + 8 | 0;
 i16 = HEAP32[i14 >> 2] | 0;
 L13 : do {
  if ((i5 | 0) == 0) {
   i4 = d6 != +0 ? i11 : i10;
   i13 = HEAP32[i4 + 4 >> 2] | 0;
   i12 = i4 + 8 | 0;
   i18 = HEAP32[i12 >> 2] | 0;
   i19 = i9 | 0;
   HEAP32[i19 >> 2] = 0;
   i20 = i9 + 4 | 0;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i9 + 8 >> 2] = i18;
   if ((i13 | 0) == 0) {
    break;
   }
   if (i13 >>> 0 > 536870911 >>> 0) {
    _WTFCrash();
   }
   i18 = __ZN3WTF18fastMallocGoodSizeEj(i13 << 3) | 0;
   HEAP32[i20 >> 2] = i18 >>> 3;
   i20 = __ZN3WTF10fastMallocEj(i18) | 0;
   i18 = i20;
   HEAP32[i19 >> 2] = i18;
   if ((i20 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   i12 = i20 + (i4 << 3) | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i21 = i20;
    i22 = i18;
   }
   while (1) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i22, i21);
    i18 = i21 + 8 | 0;
    if ((i18 | 0) == (i12 | 0)) {
     break;
    } else {
     i21 = i18;
     i22 = i22 + 8 | 0;
    }
   }
  } else {
   if ((i16 | 0) == 0) {
    i12 = d6 == +1 ? i10 : i11;
    i18 = HEAP32[i12 + 4 >> 2] | 0;
    i20 = i12 + 8 | 0;
    i4 = HEAP32[i20 >> 2] | 0;
    i19 = i9 | 0;
    HEAP32[i19 >> 2] = 0;
    i13 = i9 + 4 | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i9 + 8 >> 2] = i4;
    if ((i18 | 0) == 0) {
     break;
    }
    if (i18 >>> 0 > 536870911 >>> 0) {
     _WTFCrash();
    }
    i4 = __ZN3WTF18fastMallocGoodSizeEj(i18 << 3) | 0;
    HEAP32[i13 >> 2] = i4 >>> 3;
    i13 = __ZN3WTF10fastMallocEj(i4) | 0;
    i4 = i13;
    HEAP32[i19 >> 2] = i4;
    if ((i13 | 0) == 0) {
     break;
    }
    i13 = HEAP32[i12 >> 2] | 0;
    i12 = HEAP32[i20 >> 2] | 0;
    i20 = i13 + (i12 << 3) | 0;
    if ((i12 | 0) == 0) {
     break;
    } else {
     i23 = i13;
     i24 = i4;
    }
    while (1) {
     __ZN7WebCore9SVGLengthC1ERKS0_(i24, i23);
     i4 = i23 + 8 | 0;
     if ((i4 | 0) == (i20 | 0)) {
      break L13;
     } else {
      i23 = i4;
      i24 = i24 + 8 | 0;
     }
    }
   }
   do {
    if ((i5 | 0) == (i16 | 0)) {
     i25 = i5;
    } else {
     i20 = i5 >>> 0 < i16 >>> 0 ? i16 : i5;
     if (+_fmod(+(+(i20 >>> 0 >>> 0)), +(+((i16 >>> 0 < i5 >>> 0 ? i16 : i5) >>> 0 >>> 0))) == +0) {
      i25 = i20;
      break;
     }
     i25 = Math_imul(i16, i5) | 0;
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEC2Ej(i7, i25);
   i20 = i7 + 8 | 0;
   i4 = HEAP32[i20 >> 2] | 0;
   i13 = i7 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   L37 : do {
    if ((i25 | 0) != 0) {
     i19 = i11 | 0;
     i18 = i10 | 0;
     d26 = d6;
     i27 = 0;
     while (1) {
      if (i4 >>> 0 <= i27 >>> 0) {
       i28 = 30;
       break;
      }
      i29 = (i27 >>> 0) % (i16 >>> 0) & -1;
      if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i29 >>> 0) {
       i28 = 32;
       break;
      }
      i30 = (i27 >>> 0) % (i5 >>> 0) & -1;
      if ((HEAP32[i17 >> 2] | 0) >>> 0 <= i30 >>> 0) {
       i28 = 34;
       break;
      }
      __ZNK7WebCore9SVGLength5blendERKS0_f(i1, (HEAP32[i19 >> 2] | 0) + (i29 << 3) | 0, (HEAP32[i18 >> 2] | 0) + (i30 << 3) | 0, d26);
      i30 = i12 + (i27 << 3) | 0;
      i29 = HEAP32[i8 + 4 >> 2] | 0;
      HEAP32[i30 >> 2] = HEAP32[i8 >> 2];
      HEAP32[i30 + 4 >> 2] = i29;
      i27 = i27 + 1 | 0;
      if (i27 >>> 0 >= i25 >>> 0) {
       break L37;
      }
     }
     if ((i28 | 0) == 30) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i28 | 0) == 32) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     } else if ((i28 | 0) == 34) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   HEAP32[i9 + 8 >> 2] = i4;
   HEAP32[i20 >> 2] = 0;
   HEAP32[i9 >> 2] = i12;
   HEAP32[i13 >> 2] = 0;
   i27 = i7 + 4 | 0;
   HEAP32[i9 + 4 >> 2] = HEAP32[i27 >> 2];
   HEAP32[i27 >> 2] = 0;
  }
 } while (0);
 FUNCTION_TABLE_vii[i15 & 255](i3, i9);
 i3 = i9 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i9 | 0;
 i15 = HEAP32[i3 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i9 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = i11 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 if ((i15 | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
 }
 if ((HEAP32[i17 >> 2] | 0) != 0) {
  HEAP32[i17 >> 2] = 0;
 }
 i17 = i10 | 0;
 i15 = HEAP32[i17 >> 2] | 0;
 if ((i15 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i2;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (i4 >>> 0 > i6 >>> 0) {
  i7 = HEAP32[i1 >> 2] | 0;
  i8 = i7 + (i4 << 2) | 0;
  if ((i4 | 0) != (i6 | 0)) {
   i9 = i7 + (i6 << 2) | 0;
   while (1) {
    i7 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i7 | 0) != 0) {
      i10 = i7 + 4 | 0;
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  HEAP32[i3 >> 2] = i6;
  i13 = i6;
 } else {
  i8 = i1 + 4 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  do {
   if (i6 >>> 0 > i9 >>> 0) {
    do {
     if ((i9 | 0) != 0) {
      i7 = i1 | 0;
      if ((i4 | 0) != 0) {
       i12 = HEAP32[i7 >> 2] | 0;
       i10 = i12 + (i4 << 2) | 0;
       i11 = i12;
       while (1) {
        i12 = HEAP32[i11 >> 2] | 0;
        do {
         if ((i12 | 0) != 0) {
          i14 = i12 + 4 | 0;
          i15 = i14 | 0;
          i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
          if ((i16 | 0) != 0) {
           HEAP32[i15 >> 2] = i16;
           break;
          }
          i16 = i14 - 4 | 0;
          if ((i16 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
         }
        } while (0);
        i11 = i11 + 4 | 0;
        if ((i11 | 0) == (i10 | 0)) {
         break;
        }
       }
       HEAP32[i3 >> 2] = 0;
      }
      i10 = HEAP32[i7 >> 2] | 0;
      if ((i10 | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 0;
      HEAP32[i8 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i10);
     }
    } while (0);
    i10 = HEAP32[i5 >> 2] | 0;
    if ((HEAP32[i8 >> 2] | 0) >>> 0 >= i10 >>> 0) {
     break;
    }
    i11 = i1 | 0;
    i12 = HEAP32[i11 >> 2] | 0;
    if (i10 >>> 0 > 1073741823 >>> 0) {
     _WTFCrash();
     return 0;
    }
    i16 = HEAP32[i3 >> 2] | 0;
    i14 = __ZN3WTF18fastMallocGoodSizeEj(i10 << 2) | 0;
    HEAP32[i8 >> 2] = i14 >>> 2;
    i10 = __ZN3WTF10fastMallocEj(i14) | 0;
    HEAP32[i11 >> 2] = i10;
    i14 = i12;
    _memcpy(i10 | 0, i14 | 0, i16 << 2) | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    if ((HEAP32[i11 >> 2] | 0) == (i12 | 0)) {
     HEAP32[i11 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
    }
    __ZN3WTF8fastFreeEPv(i14);
   }
  } while (0);
  i13 = HEAP32[i3 >> 2] | 0;
 }
 i8 = i2 | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 i4 = i2 + (i13 << 2) | 0;
 i9 = i1 | 0;
 if ((i13 | 0) == 0) {
  i17 = i2;
  i18 = 0;
 } else {
  i13 = HEAP32[i9 >> 2] | 0;
  i6 = i2;
  while (1) {
   i2 = HEAP32[i6 >> 2] | 0;
   if ((i2 | 0) != 0) {
    i14 = i2 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i13 | 0;
   i11 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i2;
   do {
    if ((i11 | 0) != 0) {
     i2 = i11 + 4 | 0;
     i14 = i2 | 0;
     i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i14 >> 2] = i12;
      break;
     }
     i12 = i2 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
    }
   } while (0);
   i11 = i6 + 4 | 0;
   if ((i11 | 0) == (i4 | 0)) {
    break;
   } else {
    i13 = i13 + 4 | 0;
    i6 = i11;
   }
  }
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = HEAP32[i3 >> 2] | 0;
 }
 i8 = HEAP32[i5 >> 2] | 0;
 i6 = i17 + (i8 << 2) | 0;
 if ((i18 | 0) == (i8 | 0)) {
  i19 = i18;
 } else {
  i8 = i17 + (i18 << 2) | 0;
  i17 = (HEAP32[i9 >> 2] | 0) + (i18 << 2) | 0;
  while (1) {
   i18 = HEAP32[i8 >> 2] | 0;
   HEAP32[i17 >> 2] = i18;
   if ((i18 | 0) != 0) {
    i9 = i18 + 4 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
   }
   i9 = i8 + 4 | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   } else {
    i8 = i9;
    i17 = i17 + 4 | 0;
   }
  }
  i19 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i19;
 return i1 | 0;
}
function __ZNK7WebCore21PropertyWrapperShadow26blendMismatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_ii(i1, i2, i3, d4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i2 = i3 | 0;
 i9 = i3 + 32 | 0;
 i10 = i3 + 64 | 0;
 i11 = i2 + 12 | 0;
 i12 = i2 | 0;
 HEAP32[i12 >> 2] = i11;
 i13 = i2 + 4 | 0;
 HEAP32[i13 >> 2] = 4;
 i14 = i2 + 8 | 0;
 HEAP32[i14 >> 2] = i7;
 do {
  if (i7 >>> 0 > 4 >>> 0) {
   if (i7 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i2 = __ZN3WTF18fastMallocGoodSizeEj(i7 << 2) | 0;
    HEAP32[i13 >> 2] = i2 >>> 2;
    HEAP32[i12 >> 2] = __ZN3WTF10fastMallocEj(i2) | 0;
    break;
   }
  }
 } while (0);
 L7 : do {
  if ((i7 | 0) > 0) {
   i2 = i5;
   i15 = i7;
   while (1) {
    i16 = i15 - 1 | 0;
    if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i16 >>> 0) {
     break;
    }
    HEAP32[(HEAP32[i12 >> 2] | 0) + (i16 << 2) >> 2] = i2;
    if ((i16 | 0) <= 0) {
     break L7;
    }
    i2 = HEAP32[i2 + 32 >> 2] | 0;
    i15 = i16;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i5 = i9 + 12 | 0;
 i15 = i9 | 0;
 HEAP32[i15 >> 2] = i5;
 i2 = i9 + 4 | 0;
 HEAP32[i2 >> 2] = 4;
 i16 = i9 + 8 | 0;
 HEAP32[i16 >> 2] = i8;
 do {
  if (i8 >>> 0 > 4 >>> 0) {
   if (i8 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   } else {
    i9 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 2) | 0;
    HEAP32[i2 >> 2] = i9 >>> 2;
    HEAP32[i15 >> 2] = __ZN3WTF10fastMallocEj(i9) | 0;
    break;
   }
  }
 } while (0);
 L20 : do {
  if ((i8 | 0) > 0) {
   i9 = i6;
   i17 = i8;
   while (1) {
    i18 = i17 - 1 | 0;
    if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i18 >>> 0) {
     break;
    }
    HEAP32[(HEAP32[i15 >> 2] | 0) + (i18 << 2) >> 2] = i9;
    if ((i18 | 0) <= 0) {
     break L20;
    }
    i9 = HEAP32[i9 + 32 >> 2] | 0;
    i17 = i18;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i6 = (i7 | 0) < (i8 | 0) ? i8 : i7;
 L27 : do {
  if ((i6 | 0) > 0) {
   i17 = i10 | 0;
   i9 = 0;
   i18 = 0;
   while (1) {
    if ((i18 | 0) < (i7 | 0)) {
     if ((HEAP32[i14 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      i19 = 23;
      break;
     }
     i20 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    } else {
     i20 = 0;
    }
    if ((i18 | 0) < (i8 | 0)) {
     if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i18 >>> 0) {
      i19 = 27;
      break;
     }
     i21 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i18 << 2) >> 2] | 0;
    } else {
     i21 = 0;
    }
    i22 = __ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_(i20, i21) | 0;
    __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPKNS_10ShadowDataES5_d(i10, i22, __ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_(i21, i20) | 0, d4);
    i22 = HEAP32[i17 >> 2] | 0;
    HEAP32[i17 >> 2] = 0;
    i23 = i22 + 32 | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    HEAP32[i23 >> 2] = i9;
    if ((i24 | 0) != 0) {
     __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i24 + 32 | 0);
     __ZN3WTF8fastFreeEPv(i24);
    }
    i24 = i18 + 1 | 0;
    if ((i24 | 0) < (i6 | 0)) {
     i9 = i22;
     i18 = i24;
    } else {
     i25 = i22;
     break L27;
    }
   }
   if ((i19 | 0) == 23) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i19 | 0) == 27) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  } else {
   i25 = 0;
  }
 } while (0);
 HEAP32[i1 >> 2] = i25;
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  HEAP32[i16 >> 2] = 0;
 }
 i16 = HEAP32[i15 >> 2] | 0;
 if (!((i5 | 0) == (i16 | 0) | (i16 | 0) == 0)) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i2 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i16);
 }
 if ((HEAP32[i14 >> 2] | 0) != 0) {
  HEAP32[i14 >> 2] = 0;
 }
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i11 | 0) == (i14 | 0) | (i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore6Length5blendERKS0_d(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0;
 i5 = HEAP8[i3 + 5 | 0] | 0;
 do {
  if (i5 << 24 >> 24 != 10) {
   i6 = HEAP8[i2 + 5 | 0] | 0;
   if (i6 << 24 >> 24 == 10) {
    break;
   }
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     i7 = 7;
    }
   } else {
    if (+HEAPF32[i3 >> 2] != +0) {
     i7 = 7;
    }
   }
   do {
    if ((i7 | 0) == 7) {
     if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
      if ((HEAP32[i2 >> 2] | 0) == 0 | i5 << 24 >> 24 == i6 << 24 >> 24) {
       break;
      }
     } else {
      if (+HEAPF32[i2 >> 2] == +0 | i5 << 24 >> 24 == i6 << 24 >> 24) {
       break;
      }
     }
     __ZNK7WebCore6Length15blendMixedTypesERKS0_d(i1, i2, i3, d4);
     return;
    }
   } while (0);
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i3 >> 2] | 0) == 0) {
     i7 = 14;
    }
   } else {
    if (+HEAPF32[i3 >> 2] == +0) {
     i7 = 14;
    }
   }
   do {
    if ((i7 | 0) == 14) {
     if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
      if ((HEAP32[i2 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i2 >> 2] != +0) {
       break;
      }
     }
     i8 = i2;
     i9 = i1;
     i10 = HEAP32[i8 >> 2] | 0;
     i11 = HEAP32[i8 + 4 >> 2] | 0;
     HEAP32[i9 >> 2] = i10;
     HEAP32[i9 + 4 >> 2] = i11;
     if (!((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560)) {
      return;
     }
     __ZNK7WebCore6Length22incrementCalculatedRefEv(i1);
     return;
    }
   } while (0);
   i11 = i6 & 255;
   if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
    if ((HEAP32[i2 >> 2] | 0) == 0) {
     i7 = 22;
    } else {
     i12 = i11;
    }
   } else {
    if (+HEAPF32[i2 >> 2] != +0) {
     i12 = i11;
    } else {
     i7 = 22;
    }
   }
   if ((i7 | 0) == 22) {
    i12 = i5 & 255;
   }
   if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
    i13 = (HEAP32[i3 >> 2] | 0) != 0;
   } else {
    i13 = +HEAPF32[i3 >> 2] != +0;
   }
   if ((i12 | 0) == 2) {
    do {
     if (i13) {
      if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
       d14 = +(HEAP32[i3 >> 2] | 0);
       break;
      } else {
       d14 = +HEAPF32[i3 >> 2];
       break;
      }
     } else {
      d14 = +0;
     }
    } while (0);
    i6 = HEAP8[i2 + 6 | 0] | 0;
    if ((i6 & 1) == 0) {
     if ((HEAP32[i2 >> 2] | 0) == 0) {
      d15 = +0;
     } else {
      i7 = 34;
     }
    } else {
     if (+HEAPF32[i2 >> 2] != +0) {
      i7 = 34;
     } else {
      d15 = +0;
     }
    }
    do {
     if ((i7 | 0) == 34) {
      if ((i6 & 1) == 0) {
       d15 = +(HEAP32[i2 >> 2] | 0);
       break;
      } else {
       d15 = +HEAPF32[i2 >> 2];
       break;
      }
     }
    } while (0);
    HEAPF32[i1 >> 2] = d14 + (d15 - d14) * d4;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = 2;
    HEAP8[i1 + 6 | 0] = 1;
    return;
   } else {
    do {
     if (i13) {
      if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
       d16 = +(HEAP32[i3 >> 2] | 0);
       break;
      } else {
       d16 = +HEAPF32[i3 >> 2];
       break;
      }
     } else {
      d16 = +0;
     }
    } while (0);
    i6 = HEAP8[i2 + 6 | 0] | 0;
    if ((i6 & 1) == 0) {
     if ((HEAP32[i2 >> 2] | 0) == 0) {
      d17 = +0;
     } else {
      i7 = 45;
     }
    } else {
     if (+HEAPF32[i2 >> 2] != +0) {
      i7 = 45;
     } else {
      d17 = +0;
     }
    }
    do {
     if ((i7 | 0) == 45) {
      if ((i6 & 1) == 0) {
       d17 = +(HEAP32[i2 >> 2] | 0);
       break;
      } else {
       d17 = +HEAPF32[i2 >> 2];
       break;
      }
     }
    } while (0);
    HEAPF32[i1 >> 2] = d16 + (d17 - d16) * d4;
    HEAP8[i1 + 4 | 0] = 0;
    HEAP8[i1 + 5 | 0] = i12;
    HEAP8[i1 + 6 | 0] = 1;
    return;
   }
  }
 } while (0);
 __ZNK7WebCore6Length15blendMixedTypesERKS0_d(i1, i2, i3, d4);
 return;
}
function __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 20 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i7, i1);
  i1 = HEAP32[i7 >> 2] | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  i10 = i7 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i7);
   __ZN3WTF8fastFreeEPv(i7);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i8 >> 2] = i1;
  i9 = i1;
 }
 i1 = (HEAP32[i9 + 76 >> 2] | 0) + 4 | 0;
 i9 = i6 | 0;
 HEAP32[i9 >> 2] = 0;
 i11 = i6 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i6, i2) | 0;
 i7 = __ZNK7WebCore16FilterOperationseqERKS0_(i1, i6) | 0;
 i6 = HEAP32[i10 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i9 >> 2] | 0;
  i12 = i1 + (i6 << 2) | 0;
  i6 = i1;
  while (1) {
   i1 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i13 = i1 + 4 | 0;
     i14 = i13 | 0;
     i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i15 | 0) != 0) {
      HEAP32[i14 >> 2] = i15;
      break;
     }
     i15 = i13 - 4 | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i12 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) != 0) {
  HEAP32[i9 >> 2] = 0;
  HEAP32[i11 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i10);
 }
 if (i7) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i16 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i10 = i5 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i8 >> 2] = i7;
  i16 = i7;
 }
 i7 = i16 + 76 | 0;
 i16 = HEAP32[i7 >> 2] | 0;
 if ((HEAP32[i16 >> 2] | 0) == 1) {
  i17 = i16;
 } else {
  __ZNK7WebCore15StyleFilterData4copyEv(i4, i16);
  i16 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  i8 = i4 | 0;
  i11 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   i10 = i4 + 12 | 0;
   i5 = HEAP32[i10 >> 2] | 0;
   i9 = i4 + 4 | 0;
   if ((i5 | 0) != 0) {
    i12 = HEAP32[i9 >> 2] | 0;
    i6 = i12 + (i5 << 2) | 0;
    i5 = i12;
    while (1) {
     i12 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i1 = i12 + 4 | 0;
       i15 = i1 | 0;
       i13 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i15 >> 2] = i13;
        break;
       }
       i13 = i1 - 4 | 0;
       if ((i13 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i6 | 0)) {
      break;
     }
    }
    HEAP32[i10 >> 2] = 0;
   }
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i4 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i10);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i11;
  }
  HEAP32[i7 >> 2] = i16;
  i17 = i16;
 }
 __ZN7WebCore16FilterOperationsaSERKS0_(i17 + 4 | 0, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore25RefCountedPropertyWrapperINS_10ShapeValueEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 16 | 0;
 i11 = i3 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i3 = i11;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = i12;
 } else {
  i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 - 1) >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i14 = i4;
 } else {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i14 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i15 = i5;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i15 & 255](i1) | 0;
 i1 = (i5 | 0) == 0;
 L13 : do {
  if ((i4 | 0) == 0 | i1) {
   HEAP32[i9 >> 2] = i5;
   if (i1) {
    break;
   }
   i15 = i5 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  } else {
   do {
    if ((HEAP32[i4 + 4 >> 2] | 0) == 0) {
     if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
      break;
     }
     i15 = HEAP32[i4 + 8 >> 2] | 0;
     i12 = HEAP32[i5 + 8 >> 2] | 0;
     if (!(__ZNK7WebCore10BasicShape8canBlendEPKS0_(i15, i12) | 0)) {
      HEAP32[i9 >> 2] = i5;
      i14 = i5 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      break L13;
     }
     FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 3](i8, i12, i15, d6, HEAP32[i2 + 56 >> 2] | 0);
     i15 = __ZN3WTF10fastMallocEj(20) | 0;
     i12 = i8 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i15 >> 2] = 1;
     HEAP32[i15 + 4 >> 2] = 0;
     HEAP32[i15 + 8 >> 2] = i14;
     HEAP32[i15 + 12 >> 2] = 0;
     HEAP32[i15 + 16 >> 2] = HEAP32[i14 + 8 >> 2];
     HEAP32[i9 >> 2] = i15;
     i15 = HEAP32[i12 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break L13;
     }
     i12 = i15 + 4 | 0;
     i15 = i12 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i15 >> 2] = i14;
      break L13;
     }
     i14 = i12 - 4 | 0;
     if ((i14 | 0) == 0) {
      break L13;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     break L13;
    }
   } while (0);
   HEAP32[i9 >> 2] = i5;
   i14 = i5 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
 } while (0);
 FUNCTION_TABLE_vii[i13 & 255](i3, i9);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i3 | 0;
 i13 = i3 | 0;
 i5 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i13 >> 2] = i5;
  STACKTOP = i7;
  return;
 }
 i5 = HEAP32[i9 + 12 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i13 = i5 + 4 | 0;
   i8 = i13 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i2 | 0) != 0) {
    HEAP32[i8 >> 2] = i2;
    break;
   }
   i2 = i13 - 4 | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
  }
 } while (0);
 i5 = HEAP32[i9 + 8 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i9 = i5 + 4 | 0;
   i2 = i9 | 0;
   i13 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) != 0) {
    HEAP32[i2 >> 2] = i13;
    break;
   }
   i13 = i9 - 4 | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderStyle14setColumnCountEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i1 + 20 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i11 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i9, i1);
  i1 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  i12 = i9 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  } else {
   HEAP32[i12 >> 2] = i13;
  }
  HEAP32[i10 >> 2] = i1;
  i11 = i1;
 }
 if ((HEAP8[(HEAP32[i11 + 68 >> 2] | 0) + 32 | 0] & 2) == 0) {
  i14 = i11;
 } else {
  if ((HEAP32[i11 >> 2] | 0) == 1) {
   i15 = i11;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i8, i11);
   i11 = HEAP32[i8 >> 2] | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   i1 = i8 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
   } else {
    HEAP32[i1 >> 2] = i13;
   }
   HEAP32[i10 >> 2] = i11;
   i15 = i11;
  }
  i11 = i15 + 68 | 0;
  i15 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i15 >> 2] | 0) == 1) {
   i16 = i15;
  } else {
   __ZNK7WebCore17StyleMultiColData4copyEv(i7, i15);
   i15 = HEAP32[i7 >> 2] | 0;
   i7 = HEAP32[i11 >> 2] | 0;
   i13 = i7 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i7);
   } else {
    HEAP32[i13 >> 2] = i1;
   }
   HEAP32[i11 >> 2] = i15;
   i16 = i15;
  }
  i15 = i16 + 32 | 0;
  HEAP8[i15] = HEAP8[i15] & -3;
  i14 = HEAP32[i10 >> 2] | 0;
 }
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i17 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i14);
  i14 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i10 >> 2] | 0;
  i15 = i6 | 0;
  i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i15 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i14;
  i17 = i14;
 }
 if ((HEAP16[(HEAP32[i17 + 68 >> 2] | 0) + 8 >> 1] | 0) == i2 << 16 >> 16) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 >> 2] | 0) == 1) {
  i18 = i17;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i17);
  i17 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  i14 = i5 | 0;
  i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i14 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i17;
  i18 = i17;
 }
 i17 = i18 + 68 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((HEAP32[i18 >> 2] | 0) == 1) {
  i19 = i18;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i18);
  i18 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i17 >> 2] | 0;
  i10 = i4 | 0;
  i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i16;
  }
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 HEAP16[i19 + 8 >> 1] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setColumnWidthEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i1 + 20 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i11 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i9, i1);
  i1 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  i12 = i9 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  } else {
   HEAP32[i12 >> 2] = i13;
  }
  HEAP32[i10 >> 2] = i1;
  i11 = i1;
 }
 if ((HEAP8[(HEAP32[i11 + 68 >> 2] | 0) + 32 | 0] & 1) == 0) {
  i14 = i11;
 } else {
  if ((HEAP32[i11 >> 2] | 0) == 1) {
   i15 = i11;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i8, i11);
   i11 = HEAP32[i8 >> 2] | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   i1 = i8 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
   } else {
    HEAP32[i1 >> 2] = i13;
   }
   HEAP32[i10 >> 2] = i11;
   i15 = i11;
  }
  i11 = i15 + 68 | 0;
  i15 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i15 >> 2] | 0) == 1) {
   i16 = i15;
  } else {
   __ZNK7WebCore17StyleMultiColData4copyEv(i7, i15);
   i15 = HEAP32[i7 >> 2] | 0;
   i7 = HEAP32[i11 >> 2] | 0;
   i13 = i7 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i7);
   } else {
    HEAP32[i13 >> 2] = i1;
   }
   HEAP32[i11 >> 2] = i15;
   i16 = i15;
  }
  i15 = i16 + 32 | 0;
  HEAP8[i15] = HEAP8[i15] & -2;
  i14 = HEAP32[i10 >> 2] | 0;
 }
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i17 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i14);
  i14 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i10 >> 2] | 0;
  i15 = i6 | 0;
  i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i15 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i14;
  i17 = i14;
 }
 if (+HEAPF32[(HEAP32[i17 + 68 >> 2] | 0) + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 >> 2] | 0) == 1) {
  i18 = i17;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i17);
  i17 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  i14 = i5 | 0;
  i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i14 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i17;
  i18 = i17;
 }
 i17 = i18 + 68 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((HEAP32[i18 >> 2] | 0) == 1) {
  i19 = i18;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i18);
  i18 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i17 >> 2] | 0;
  i10 = i4 | 0;
  i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i16;
  }
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 HEAPF32[i19 + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle12setColumnGapEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 40 | 0;
 i10 = i1 + 20 | 0;
 i1 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i11 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i9, i1);
  i1 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  i12 = i9 | 0;
  i13 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
  if ((i13 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  } else {
   HEAP32[i12 >> 2] = i13;
  }
  HEAP32[i10 >> 2] = i1;
  i11 = i1;
 }
 if ((HEAP8[(HEAP32[i11 + 68 >> 2] | 0) + 32 | 0] & 4) == 0) {
  i14 = i11;
 } else {
  if ((HEAP32[i11 >> 2] | 0) == 1) {
   i15 = i11;
  } else {
   __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i8, i11);
   i11 = HEAP32[i8 >> 2] | 0;
   i8 = HEAP32[i10 >> 2] | 0;
   i1 = i8 | 0;
   i13 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i13 | 0) == 0) {
    __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i8);
    __ZN3WTF8fastFreeEPv(i8);
   } else {
    HEAP32[i1 >> 2] = i13;
   }
   HEAP32[i10 >> 2] = i11;
   i15 = i11;
  }
  i11 = i15 + 68 | 0;
  i15 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i15 >> 2] | 0) == 1) {
   i16 = i15;
  } else {
   __ZNK7WebCore17StyleMultiColData4copyEv(i7, i15);
   i15 = HEAP32[i7 >> 2] | 0;
   i7 = HEAP32[i11 >> 2] | 0;
   i13 = i7 | 0;
   i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i7);
   } else {
    HEAP32[i13 >> 2] = i1;
   }
   HEAP32[i11 >> 2] = i15;
   i16 = i15;
  }
  i15 = i16 + 32 | 0;
  HEAP8[i15] = HEAP8[i15] & -5;
  i14 = HEAP32[i10 >> 2] | 0;
 }
 if ((HEAP32[i14 >> 2] | 0) == 1) {
  i17 = i14;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i6, i14);
  i14 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i10 >> 2] | 0;
  i15 = i6 | 0;
  i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
  } else {
   HEAP32[i15 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i14;
  i17 = i14;
 }
 if (+HEAPF32[(HEAP32[i17 + 68 >> 2] | 0) + 12 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i17 >> 2] | 0) == 1) {
  i18 = i17;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i17);
  i17 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i10 >> 2] | 0;
  i14 = i5 | 0;
  i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i14 >> 2] = i16;
  }
  HEAP32[i10 >> 2] = i17;
  i18 = i17;
 }
 i17 = i18 + 68 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 if ((HEAP32[i18 >> 2] | 0) == 1) {
  i19 = i18;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i4, i18);
  i18 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i17 >> 2] | 0;
  i10 = i4 | 0;
  i16 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i16 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i16;
  }
  HEAP32[i17 >> 2] = i18;
  i19 = i18;
 }
 HEAPF32[i19 + 12 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore25RefCountedPropertyWrapperINS_17ClipPathOperationEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i1 + 16 | 0;
 i11 = i3 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i3 = i11;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = i12;
 } else {
  i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 - 1) >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i14 = i4;
 } else {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i14 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i12 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i15 = i5;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i15 & 255](i1) | 0;
 i1 = (i5 | 0) == 0;
 L13 : do {
  if ((i4 | 0) == 0 | i1) {
   HEAP32[i9 >> 2] = i5;
   if (i1) {
    break;
   }
   i15 = i5 + 4 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
  } else {
   do {
    if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 255](i4) | 0) == 1) {
     if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 12 >> 2] & 255](i5) | 0) != 1) {
      break;
     }
     i15 = HEAP32[i4 + 12 >> 2] | 0;
     i12 = HEAP32[i5 + 12 >> 2] | 0;
     if (!(__ZNK7WebCore10BasicShape8canBlendEPKS0_(i15, i12) | 0)) {
      HEAP32[i9 >> 2] = i5;
      i14 = i5 + 4 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
      break L13;
     }
     FUNCTION_TABLE_viiidi[HEAP32[(HEAP32[i12 >> 2] | 0) + 16 >> 2] & 3](i8, i12, i15, d6, HEAP32[i2 + 56 >> 2] | 0);
     i15 = __ZN3WTF10fastMallocEj(20) | 0;
     i12 = i8 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     HEAP32[i15 + 4 >> 2] = 1;
     HEAP32[i15 + 8 >> 2] = 1;
     HEAP32[i15 >> 2] = H_BASE + 672;
     HEAP32[i15 + 12 >> 2] = i14;
     HEAP32[i15 + 16 >> 2] = 0;
     HEAP32[i9 >> 2] = i15;
     i15 = HEAP32[i12 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break L13;
     }
     i12 = i15 + 4 | 0;
     i15 = i12 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i14 | 0) != 0) {
      HEAP32[i15 >> 2] = i14;
      break L13;
     }
     i14 = i12 - 4 | 0;
     if ((i14 | 0) == 0) {
      break L13;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 127](i14);
     break L13;
    }
   } while (0);
   HEAP32[i9 >> 2] = i5;
   i14 = i5 + 4 | 0;
   HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
  }
 } while (0);
 FUNCTION_TABLE_vii[i13 & 255](i3, i9);
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i9 = i3 + 4 | 0;
 i3 = i9 | 0;
 i13 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i3 >> 2] = i13;
  STACKTOP = i7;
  return;
 }
 i13 = i9 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 127](i13);
 STACKTOP = i7;
 return;
}
function __ZN7WebCoreL34gatherEnclosingShorthandPropertiesENS_13CSSPropertyIDEPNS_28AnimationPropertyWrapperBaseERN3WTF7HashSetIS0_NS3_7IntHashIjEENS3_10HashTraitsIS0_EEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 255](i2) | 0)) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = i2 + 12 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 8 | 0;
 i11 = 0;
 i12 = 0;
 L4 : while (1) {
  i13 = HEAP32[i8 >> 2] | 0;
  i14 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i13 | 0) == 0) {
    if (i11 >>> 0 >= i14 >>> 0) {
     i15 = 25;
     break L4;
    }
   } else {
    if (i13 >>> 0 > 1073741823 >>> 0) {
     i15 = 6;
     break L4;
    }
    i16 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i13 << 2) | 0) | 0;
    if ((i16 | 0) != 0) {
     _memcpy(i16 | 0, HEAP32[i10 >> 2] | 0, HEAP32[i9 >> 2] << 2) | 0;
    }
    i17 = i11 >>> 0 < i14 >>> 0;
    if ((i16 | 0) == 0) {
     if (i17) {
      break;
     } else {
      i15 = 25;
      break L4;
     }
    } else {
     __ZN3WTF8fastFreeEPv(i16);
     if (i17) {
      break;
     } else {
      i15 = 25;
      break L4;
     }
    }
   }
  } while (0);
  i14 = HEAP32[i8 >> 2] | 0;
  i13 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i14 | 0) == 0) {
    i18 = 0;
   } else {
    if (i14 >>> 0 > 1073741823 >>> 0) {
     i15 = 14;
     break L4;
    }
    i17 = __ZN3WTF10fastMallocEj(__ZN3WTF18fastMallocGoodSizeEj(i14 << 2) | 0) | 0;
    i16 = i17;
    if ((i17 | 0) == 0) {
     i18 = i16;
     break;
    }
    _memcpy(i17 | 0, HEAP32[i10 >> 2] | 0, HEAP32[i9 >> 2] << 2) | 0;
    i18 = i16;
   }
  } while (0);
  if (i13 >>> 0 <= i11 >>> 0) {
   i15 = 18;
   break;
  }
  i14 = HEAP32[i18 + (i11 << 2) >> 2] | 0;
  if ((i18 | 0) != 0) {
   __ZN3WTF8fastFreeEPv(i18);
  }
  if (__ZN7WebCoreL34gatherEnclosingShorthandPropertiesENS_13CSSPropertyIDEPNS_28AnimationPropertyWrapperBaseERN3WTF7HashSetIS0_NS3_7IntHashIjEENS3_10HashTraitsIS0_EEEE(i1, i14, i3) | 0) {
   i15 = 23;
  } else {
   if ((HEAP32[i14 + 4 >> 2] | 0) == (i1 | 0)) {
    i15 = 23;
   } else {
    i19 = i12;
   }
  }
  if ((i15 | 0) == 23) {
   i15 = 0;
   i19 = 1;
  }
  i11 = i11 + 1 | 0;
  i12 = i19;
 }
 if ((i15 | 0) == 6) {
  _WTFCrash();
  return 0;
 } else if ((i15 | 0) == 25) {
  if (!i12) {
   i7 = 0;
   STACKTOP = i4;
   return i7 | 0;
  }
  HEAP32[i5 >> 2] = HEAP32[i2 + 4 >> 2];
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i6, i3 | 0, i5, i5);
  i7 = 1;
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i15 | 0) == 14) {
  _WTFCrash();
  return 0;
 } else if ((i15 | 0) == 18) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 return 0;
}
function __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if (i5) {
   i7 = i1 + 16 | 0;
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 40 >> 2] | 0) == (i2 | 0)) {
    i10 = i9;
   } else {
    HEAP32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0) + 40 >> 2] = i2;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i10 + 44 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    if ((HEAP8[i10 + 48 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
     i11 = 6;
    } else {
     i12 = i10;
    }
   } else {
    i11 = 6;
   }
   if ((i11 | 0) == 6) {
    i9 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0) + 44 | 0;
    i13 = i3;
    HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i9 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i8 = i4 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 + 52 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
    break;
   }
   i13 = __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i7) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i13 + 52 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i13 | 0) == 0) {
    break;
   }
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i6) {
  return;
 }
 i6 = i1 + 16 | 0;
 i1 = i6 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i12 + 56 >> 2] | 0) == (i2 | 0)) {
  i14 = i12;
 } else {
  HEAP32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0) + 56 >> 2] = i2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i14 + 60 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
  if ((HEAP8[i14 + 64 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
   i11 = 19;
  } else {
   i15 = i14;
  }
 } else {
  i11 = 19;
 }
 if ((i11 | 0) == 19) {
  i11 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0) + 60 | 0;
  i14 = i3;
  HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
  HEAP8[i11 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i4 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 68 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
  return;
 }
 i15 = __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i6) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i15 + 68 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i15 | 0) == 0) {
  return;
 }
 i6 = i15 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  return;
 }
}
function __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 do {
  if (i5) {
   i7 = i1 + 12 | 0;
   i8 = i7 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i9 + 8 >> 2] | 0) == (i2 | 0)) {
    i10 = i9;
   } else {
    HEAP32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0) + 8 >> 2] = i2;
    i10 = HEAP32[i8 >> 2] | 0;
   }
   if ((HEAP32[i10 + 12 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
    if ((HEAP8[i10 + 16 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
     i11 = 6;
    } else {
     i12 = i10;
    }
   } else {
    i11 = 6;
   }
   if ((i11 | 0) == 6) {
    i9 = (__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0) + 12 | 0;
    i13 = i3;
    HEAP32[i9 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i9 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    i12 = HEAP32[i8 >> 2] | 0;
   }
   i8 = i4 | 0;
   if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i12 + 20 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0) {
    break;
   }
   i13 = __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i7) | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
   }
   i8 = i13 + 20 | 0;
   i13 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i7;
   if ((i13 | 0) == 0) {
    break;
   }
   i7 = i13 | 0;
   i8 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i7 >> 2] = i8;
    break;
   }
  }
 } while (0);
 if (!i6) {
  return;
 }
 i6 = i1 + 12 | 0;
 i1 = i6 | 0;
 i12 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i12 + 24 >> 2] | 0) == (i2 | 0)) {
  i14 = i12;
 } else {
  HEAP32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0) + 24 >> 2] = i2;
  i14 = HEAP32[i1 >> 2] | 0;
 }
 if ((HEAP32[i14 + 28 >> 2] | 0) == (HEAP32[i3 >> 2] | 0)) {
  if ((HEAP8[i14 + 32 | 0] & 1) != 0 ^ (HEAP8[i3 + 4 | 0] & 1) != 0) {
   i11 = 19;
  } else {
   i15 = i14;
  }
 } else {
  i11 = 19;
 }
 if ((i11 | 0) == 19) {
  i11 = (__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0) + 28 | 0;
  i14 = i3;
  HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
  HEAP8[i11 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
  i15 = HEAP32[i1 >> 2] | 0;
 }
 i1 = i4 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplES2_(HEAP32[i15 + 36 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
  return;
 }
 i15 = __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i6) | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) != 0) {
  i1 = i6 | 0;
  HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 }
 i1 = i15 + 36 | 0;
 i15 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i6;
 if ((i15 | 0) == 0) {
  return;
 }
 i6 = i15 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i1 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i15);
  return;
 } else {
  HEAP32[i6 >> 2] = i1;
  return;
 }
}
function __ZNK7WebCore9LengthBoxeqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, d14 = +0;
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
 do {
  if (i5 << 24 >> 24 != 15) {
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
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0) {
    break;
   } else {
    i6 = 0;
   }
   return i6 | 0;
  }
 } while (0);
 i3 = i1 + 16 | 0;
 i4 = i2 + 16 | 0;
 i5 = HEAP8[i1 + 21 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 21 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 20 | 0] ^ HEAP8[i1 + 20 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 do {
  if (i5 << 24 >> 24 != 15) {
   if ((HEAP8[i1 + 22 | 0] & 1) == 0) {
    d11 = +(HEAP32[i3 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i3 >> 2];
   }
   if ((HEAP8[i2 + 22 | 0] & 1) == 0) {
    d12 = +(HEAP32[i4 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i4 >> 2];
   }
   if (d11 == d12) {
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
 i4 = i1 + 24 | 0;
 i3 = i2 + 24 | 0;
 i5 = HEAP8[i1 + 29 | 0] | 0;
 if (i5 << 24 >> 24 != (HEAP8[i2 + 29 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i2 + 28 | 0] ^ HEAP8[i1 + 28 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i5 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i1 + 30 | 0] & 1) == 0) {
  d13 = +(HEAP32[i4 >> 2] | 0);
 } else {
  d13 = +HEAPF32[i4 >> 2];
 }
 if ((HEAP8[i2 + 30 | 0] & 1) == 0) {
  d14 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d14 = +HEAPF32[i3 >> 2];
 }
 if (d13 == d14) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i4, i3) | 0;
 return i6 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
 }
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 i3 = i8 + ~(i8 << 15) | 0;
 i9 = (i3 >>> 10 ^ i3) * 9 & -1;
 i3 = i9 >>> 6 ^ i9;
 i9 = i3 + ~(i3 << 11) | 0;
 i3 = i9 >>> 16 ^ i9;
 i9 = i3 & i6;
 i10 = i7 + (i9 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i3 >>> 23) + ~i3 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i9;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == 415 ? i18 : i16;
    i21 = (i15 | 0) == 0 ? i14 : i15;
    i22 = i21 + i17 & i6;
    i23 = i7 + (i22 << 2) | 0;
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == 0) {
     i13 = 8;
     break;
    } else {
     i15 = i21;
     i16 = i20;
     i17 = i22;
     i18 = i23;
     i19 = i24;
    }
   }
   if ((i13 | 0) == 6) {
    i19 = i7 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 8) {
    if ((i20 | 0) == 0) {
     i12 = i23;
     i13 = 9;
     break;
    }
    HEAP32[i20 >> 2] = 0;
    i19 = i2 + 16 | 0;
    HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
    i25 = i20;
    i26 = i19;
    break;
   }
  }
 } while (0);
 if ((i13 | 0) == 9) {
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
  i13 = __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i2, i25) | 0;
  i27 = i13;
  i28 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i28 << 2) | 0;
 i28 = i1;
 HEAP32[i28 >> 2] = i27;
 HEAP32[i28 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN7WebCoreL11blendFilterEPKNS_13AnimationBaseEPNS_11CachedImageERKNS_16FilterOperationsES7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 __ZN7WebCoreL21blendFilterOperationsEPKNS_13AnimationBaseERKNS_16FilterOperationsES5_d(i9, i2, i4, i5, d6);
 i5 = __ZN3WTF10fastMallocEj(20) | 0;
 __ZN7WebCore16StyleCachedImageC1EPNS_11CachedImageE(i5, i3);
 i4 = __ZNK7WebCore19ResourceRequestBase3urlEv(i3 + 48 | 0) | 0;
 i3 = i5;
 i11 = __ZN3WTF10fastMallocEj(24) | 0;
 __ZN7WebCore13CSSImageValueC1ERKN3WTF6StringEPNS_10StyleImageE(i11, i4, i3);
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 __ZN7WebCore22ComputedStyleExtractor14valueForFilterEPKNS_12RenderObjectEPKNS_11RenderStyleERKNS_16FilterOperationsENS_33AdjustPixelValuesForComputedStyleE(i10, i4 | 0, HEAP32[i4 + 36 >> 2] | 0, i9, 1);
 i4 = HEAP32[i10 >> 2] | 0;
 i10 = __ZN3WTF10fastMallocEj(88) | 0;
 i2 = i10;
 __ZN7WebCore22CSSImageGeneratorValueC2ENS_8CSSValue9ClassTypeE(i2, 5);
 HEAP32[i10 + 48 >> 2] = i11;
 HEAP32[i10 + 52 >> 2] = i4;
 i4 = i10 + 56 | 0;
 __ZN7WebCore16FilterOperationsC1Ev(i4);
 __ZN7WebCore24CachedResourceHandleBaseC2Ev(i10 + 68 | 0);
 HEAP32[i10 + 72 >> 2] = 0;
 HEAP32[i10 + 76 >> 2] = __ZTVN7WebCore19CSSFilterImageValue27FilterSubimageObserverProxyE + 8;
 HEAP32[i10 + 80 >> 2] = i10;
 HEAP8[i10 + 84 | 0] = 0;
 __ZN7WebCore16FilterOperationsaSERKS0_(i4, i9) | 0;
 i4 = __ZN3WTF10fastMallocEj(28) | 0;
 HEAP32[i8 >> 2] = i2;
 __ZN7WebCore19StyleGeneratedImageC1EN3WTF7PassRefINS_22CSSImageGeneratorValueEEE(i4, i8);
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 + 4 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i3);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i3 = i9 + 8 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i1 = i9 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i1 >> 2] | 0;
  i8 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i2 = i4 + 4 | 0;
     i10 = i2 | 0;
     i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i11 | 0) != 0) {
      HEAP32[i10 >> 2] = i11;
      break;
     }
     i11 = i2 - 4 | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i8 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore32PropertyWrapperAcceleratedFilter5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i1 | 0;
 i8 = i1 + 16 | 0;
 i9 = HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i4 = (HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0;
 __ZN7WebCore16FilterOperationsC1Ev(i8);
 do {
  if ((HEAP8[i2 + 14 | 0] & 1) == 0) {
   __ZN7WebCore16FilterOperationsaSERKS0_(i8, i4) | 0;
  } else {
   __ZN7WebCoreL21blendFilterOperationsEPKNS_13AnimationBaseERKNS_16FilterOperationsES5_d(i7, i2, i9 + 4 | 0, i4, d6);
   __ZN7WebCore16FilterOperationsaSERKS0_(i8, i7) | 0;
   i5 = i7 + 8 | 0;
   i10 = HEAP32[i5 >> 2] | 0;
   i11 = i7 | 0;
   if ((i10 | 0) != 0) {
    i12 = HEAP32[i11 >> 2] | 0;
    i13 = i12 + (i10 << 2) | 0;
    i10 = i12;
    while (1) {
     i12 = HEAP32[i10 >> 2] | 0;
     do {
      if ((i12 | 0) != 0) {
       i14 = i12 + 4 | 0;
       i15 = i14 | 0;
       i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) != 0) {
        HEAP32[i15 >> 2] = i16;
        break;
       }
       i16 = i14 - 4 | 0;
       if ((i16 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 127](i16);
      }
     } while (0);
     i10 = i10 + 4 | 0;
     if ((i10 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i5 >> 2] = 0;
   }
   i13 = HEAP32[i11 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i13);
  }
 } while (0);
 __ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE(i3, i8);
 i3 = i8 + 8 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i4 = i8 | 0;
 if ((i7 | 0) != 0) {
  i9 = HEAP32[i4 >> 2] | 0;
  i2 = i9 + (i7 << 2) | 0;
  i7 = i9;
  while (1) {
   i9 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i13 = i9 + 4 | 0;
     i10 = i13 | 0;
     i12 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
     if ((i12 | 0) != 0) {
      HEAP32[i10 >> 2] = i12;
      break;
     }
     i12 = i13 - 4 | 0;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 127](i12);
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i1;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
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
  if ((i13 | 0) == 415 | (i13 | 0) == 0) {
   i14 = i12;
  } else {
   i15 = HEAP32[i4 >> 2] | 0;
   i16 = HEAP32[i3 >> 2] | 0;
   i17 = i13 + ~(i13 << 15) | 0;
   i18 = (i17 >>> 10 ^ i17) * 9 & -1;
   i17 = i18 >>> 6 ^ i18;
   i18 = i17 + ~(i17 << 11) | 0;
   i17 = i18 >>> 16 ^ i18;
   i18 = i16 & i17;
   i19 = i15 + (i18 << 2) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == 415 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i16;
      i34 = i15 + (i33 << 2) | 0;
      i35 = HEAP32[i34 >> 2] | 0;
      if ((i35 | 0) == 0) {
       i21 = i31;
       i22 = i34;
       i23 = 7;
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
   if ((i23 | 0) == 7) {
    i23 = 0;
    i30 = (i21 | 0) != 0 ? i21 : i22;
   }
   HEAP32[i30 >> 2] = i13;
   i14 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i15 = i11 + 1 | 0;
  if ((i15 | 0) == (i6 | 0)) {
   i8 = i14;
   break;
  } else {
   i11 = i15;
   i12 = i14;
  }
 }
 i9 = i1 + 16 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7;
 __ZN3WTF8fastFreeEPv(i10);
 return i8 | 0;
}
function __ZNK7WebCore21PropertyWrapperShadow5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i1 + 8 | 0;
 i10 = i4 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i11 = i4;
 } else {
  i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i11 & 255](i10) | 0;
 i10 = i5 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i12 = i5;
 } else {
  i12 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i12 & 255](i10) | 0;
 if ((i4 | 0) == 0) {
  i13 = 0;
 } else {
  i10 = i4;
  i12 = 0;
  while (1) {
   i9 = i12 + 1 | 0;
   i11 = HEAP32[i10 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i13 = i9;
    break;
   } else {
    i10 = i11;
    i12 = i9;
   }
  }
 }
 if ((i5 | 0) == 0) {
  i14 = 0;
 } else {
  i12 = i5;
  i10 = 0;
  while (1) {
   i9 = i10 + 1 | 0;
   i11 = HEAP32[i12 + 32 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i14 = i9;
    break;
   } else {
    i12 = i11;
    i10 = i9;
   }
  }
 }
 do {
  if ((i13 | 0) != (i14 | 0)) {
   if ((i13 | 0) < 2 & (i14 | 0) < 2) {
    break;
   }
   i10 = i1 + 16 | 0;
   i12 = i3 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 & 1 | 0) == 0) {
    i15 = i9;
   } else {
    i15 = HEAP32[(HEAP32[i12 >> 2] | 0) + (i9 - 1) >> 2] | 0;
   }
   __ZNK7WebCore21PropertyWrapperShadow26blendMismatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_ii(i8, 0, 0, d6, i4, i5, i13, i14);
   FUNCTION_TABLE_viii[i15 & 7](i12, i8, 0);
   i12 = HEAP32[i8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    STACKTOP = i2;
    return;
   }
   __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i12 + 32 | 0);
   __ZN3WTF8fastFreeEPv(i12);
   STACKTOP = i2;
   return;
  }
 } while (0);
 i8 = i1 + 16 | 0;
 i1 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i16 = i3;
 } else {
  i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 __ZNK7WebCore21PropertyWrapperShadow31blendSimpleOrMatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_(i7, 0, 0, d6, i4, i5);
 FUNCTION_TABLE_viii[i16 & 7](i1, i7, 0);
 i1 = HEAP32[i7 >> 2] | 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1 + 32 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21LengthPropertyWrapperINS_9LengthBoxEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, d19 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 24 | 0;
 i11 = i2 + 32 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = i1 + 16 | 0;
 i15 = i3 + (HEAP32[i14 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i16 = i3;
 } else {
  i16 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i17 = i4;
 } else {
  i17 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i17 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i18 = i5;
 } else {
  i18 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i18 & 255](i1) | 0;
 i1 = i7;
 i18 = i8;
 i3 = i9;
 i17 = i10;
 d19 = d6;
 __ZNK7WebCore6Length5blendERKS0_d(i1, i5 + 16 | 0, i4 + 16 | 0, d19);
 __ZNK7WebCore6Length5blendERKS0_d(i18, i5 + 8 | 0, i4 + 8 | 0, d19);
 __ZNK7WebCore6Length5blendERKS0_d(i3, i5 + 24 | 0, i4 + 24 | 0, d19);
 __ZNK7WebCore6Length5blendERKS0_d(i17, i5 | 0, i4 | 0, d19);
 i4 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i12 + 4 >> 2] = i4;
 HEAP8[i17 + 5 | 0] = 0;
 i17 = i11 + 8 | 0;
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i17 + 4 >> 2] = i4;
 HEAP8[i18 + 5 | 0] = 0;
 i18 = i11 + 16 | 0;
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i18 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i18 + 4 >> 2] = i4;
 HEAP8[i1 + 5 | 0] = 0;
 i1 = i11 + 24 | 0;
 i4 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 HEAP8[i3 + 5 | 0] = 0;
 FUNCTION_TABLE_vii[i16 & 255](i15, i13);
 if ((HEAP8[i13 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1);
 }
 if ((HEAP8[i13 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i18);
 }
 if ((HEAP8[i13 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
 }
 if ((HEAP8[i13 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore23PropertyWrapperSVGPaint6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 8 | 0;
 i8 = i2;
 i2 = i8 + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 & 1 | 0) == 0) {
  i10 = i9;
 } else {
  i10 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i9 - 1) >> 2] | 0;
 }
 i9 = HEAP32[(FUNCTION_TABLE_ii[i10 & 255](i2) | 0) >> 2] | 0;
 i2 = i3;
 i3 = i2 + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 if ((i10 & 1 | 0) == 0) {
  i11 = i10;
 } else {
  i11 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i10 - 1) >> 2] | 0;
 }
 if ((i9 | 0) != (HEAP32[(FUNCTION_TABLE_ii[i11 & 255](i3) | 0) >> 2] | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i3 = i8 + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i11 = HEAP32[i7 >> 2] | 0;
 if ((i11 & 1 | 0) == 0) {
  i13 = i11;
 } else {
  i13 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i11 - 1) >> 2] | 0;
 }
 if ((HEAP32[(FUNCTION_TABLE_ii[i13 & 255](i3) | 0) >> 2] | 0) != 1) {
  i12 = 1;
  STACKTOP = i4;
  return i12 | 0;
 }
 i3 = i1 + 16 | 0;
 i1 = i8 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i14 = i8;
 } else {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i8 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i14 & 255](i5, i1);
 i1 = i2 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i15 = i2;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i15 & 255](i6, i1);
 i1 = i5 + 4 | 0;
 i15 = HEAP8[i1] | 0;
 do {
  if ((i15 & 1) == 0) {
   if ((HEAP8[i6 + 4 | 0] & 1) == 0) {
    i12 = 1;
    STACKTOP = i4;
    return i12 | 0;
   } else {
    HEAP32[i5 >> 2] = 0;
    HEAP8[i1] = 0;
    i16 = 0;
    break;
   }
  } else {
   i16 = i15 & 1;
  }
 } while (0);
 i15 = i6 + 4 | 0;
 i1 = HEAP8[i15] | 0;
 i2 = i6 | 0;
 if ((i1 & 1) == 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP8[i15] = 0;
  i17 = 0;
  i18 = 0;
 } else {
  i17 = i1 & 1;
  i18 = HEAP32[i2 >> 2] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) != (i18 | 0)) {
  i12 = 0;
  STACKTOP = i4;
  return i12 | 0;
 }
 i12 = i16 << 24 >> 24 != 0 ^ i17 << 24 >> 24 != 0 ^ 1;
 STACKTOP = i4;
 return i12 | 0;
}
function __Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 i6 = i2 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i4 + 8 | 0;
 HEAP32[i10 >> 2] = i7;
 do {
  if ((i5 | 0) != 0) {
   if (i5 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i7 = __ZN3WTF18fastMallocGoodSizeEj(i5 << 2) | 0;
   HEAP32[i9 >> 2] = i7 >>> 2;
   i11 = __ZN3WTF10fastMallocEj(i7) | 0;
   i7 = i11;
   HEAP32[i8 >> 2] = i7;
   if ((i11 | 0) == 0) {
    break;
   }
   i11 = HEAP32[i2 >> 2] | 0;
   i12 = HEAP32[i6 >> 2] | 0;
   i13 = i11 + (i12 << 2) | 0;
   if ((i12 | 0) == 0) {
    break;
   } else {
    i14 = i11;
    i15 = i7;
   }
   while (1) {
    i7 = HEAP32[i14 >> 2] | 0;
    HEAP32[i15 >> 2] = i7;
    if ((i7 | 0) != 0) {
     i11 = i7 + 4 | 0;
     HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    }
    i11 = i14 + 4 | 0;
    if ((i11 | 0) == (i13 | 0)) {
     break;
    } else {
     i14 = i11;
     i15 = i15 + 4 | 0;
    }
   }
  }
 } while (0);
 i15 = __ZNK7WebCore19TransformOperationseqERKS0_(i1, i4) | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i1 = HEAP32[i8 >> 2] | 0;
  i14 = i1 + (i4 << 2) | 0;
  i4 = i1;
  while (1) {
   i1 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i6 = i1 + 4 | 0;
     i2 = i6 | 0;
     i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i5 | 0) != 0) {
      HEAP32[i2 >> 2] = i5;
      break;
     }
     i5 = i6 - 4 | 0;
     if ((i5 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return i15 | 0;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return i15 | 0;
}
function __ZNK7WebCore23PropertyWrapperSVGPaint5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i1 + 8 | 0;
 i11 = i4;
 i4 = i11 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = i12;
 } else {
  i13 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i12 - 1) >> 2] | 0;
 }
 if ((HEAP32[(FUNCTION_TABLE_ii[i13 & 255](i4) | 0) >> 2] | 0) != 1) {
  STACKTOP = i2;
  return;
 }
 i4 = i5;
 i5 = i4 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 if ((i13 & 1 | 0) == 0) {
  i14 = i13;
 } else {
  i14 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i13 - 1) >> 2] | 0;
 }
 if ((HEAP32[(FUNCTION_TABLE_ii[i14 & 255](i5) | 0) >> 2] | 0) != 1) {
  STACKTOP = i2;
  return;
 }
 i5 = i1 + 16 | 0;
 i14 = i11 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i11 = HEAP32[i5 >> 2] | 0;
 if ((i11 & 1 | 0) == 0) {
  i15 = i11;
 } else {
  i15 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i11 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i15 & 255](i7, i14);
 i14 = i4 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i16 = i4;
 } else {
  i16 = HEAP32[(HEAP32[i14 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i16 & 255](i8, i14);
 i14 = i7 + 4 | 0;
 do {
  if ((HEAP8[i14] & 1) == 0) {
   if ((HEAP8[i8 + 4 | 0] & 1) == 0) {
    STACKTOP = i2;
    return;
   } else {
    HEAP32[i7 >> 2] = 0;
    HEAP8[i14] = 0;
    break;
   }
  }
 } while (0);
 i14 = i8 + 4 | 0;
 if ((HEAP8[i14] & 1) == 0) {
  HEAP32[i8 >> 2] = 0;
  HEAP8[i14] = 0;
 }
 i14 = i1 + 24 | 0;
 i1 = i3 + (HEAP32[i14 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i17 = i3;
 } else {
  i17 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 __ZN7WebCore5blendERKNS_5ColorES2_db(i9, i7, i8, d6, 1);
 FUNCTION_TABLE_vii[i17 & 255](i1, i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle12setFlexBasisENS_6LengthE(i1, i2) {
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
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i8 + 60 >> 2] | 0) + 12 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i8 = HEAP32[i7 >> 2] | 0;
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
 i11 = i12 + 12 | 0;
 if ((i11 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i12 = i2;
 i8 = i11;
 i11 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 4 >> 2] = i11;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle18setColumnRuleColorERKNS_5ColorE(i1, i2) {
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
 i1 = HEAP32[i8 + 68 >> 2] | 0;
 i10 = i2;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 16 >> 2] | 0) == (i9 | 0)) {
   if ((HEAP32[i1 + 20 >> 2] & 1 | 0) != 0 ^ ((i9 & 0 | 0) != 0 | (HEAP32[i10 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i8);
  i8 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i7 >> 2] | 0;
  i10 = i4 | 0;
  i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i9;
  }
  HEAP32[i7 >> 2] = i8;
  i11 = i8;
 }
 i8 = i11 + 68 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore17StyleMultiColData4copyEv(i5, i11);
  i11 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i8 >> 2] | 0;
  i7 = i5 | 0;
  i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i7 >> 2] = i9;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 HEAP32[i12 + 16 >> 2] = HEAP32[i2 >> 2];
 i11 = i12 + 20 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle29setVisitedLinkColumnRuleColorERKNS_5ColorE(i1, i2) {
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
 i1 = HEAP32[i8 + 68 >> 2] | 0;
 i10 = i2;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 24 >> 2] | 0) == (i9 | 0)) {
   if ((HEAP8[i1 + 28 | 0] & 1) != 0 ^ ((i9 & 0 | 0) != 0 | (HEAP32[i10 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i10 = i5 | 0;
  i9 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i10 >> 2] = i9;
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
  i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i9;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 i11 = i12 + 24 | 0;
 i12 = i2;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP8[i11 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE6equalsEPKNS_11RenderStyleES9_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = (i2 | 0) == 0;
 i8 = (i3 | 0) == 0;
 if (i7 & i8 | (i2 | 0) == (i3 | 0)) {
  i9 = 1;
  STACKTOP = i4;
  return i9 | 0;
 }
 if (i7 | i8) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i10 = i2;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i10 & 255](i5, i1);
 i1 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i11 & 255](i6, i1);
 i1 = i5 + 8 | 0;
 i11 = HEAP32[i1 >> 2] | 0;
 i3 = i6 + 8 | 0;
 i8 = HEAP32[i3 >> 2] | 0;
 if ((i11 | 0) == (i8 | 0)) {
  i10 = HEAP32[i5 >> 2] | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  i7 = 0;
  while (1) {
   if (i7 >>> 0 >= i11 >>> 0) {
    i12 = 1;
    break;
   }
   if (__ZNK7WebCore9SVGLengtheqERKS0_(i10 + (i7 << 3) | 0, i2 + (i7 << 3) | 0) | 0) {
    i7 = i7 + 1 | 0;
   } else {
    i12 = 0;
    break;
   }
  }
  i13 = i12;
  i14 = HEAP32[i3 >> 2] | 0;
 } else {
  i13 = 0;
  i14 = i8;
 }
 if ((i14 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i6 | 0;
 i14 = HEAP32[i3 >> 2] | 0;
 if ((i14 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i14);
 }
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i5 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 if ((i14 | 0) == 0) {
  i9 = i13;
  STACKTOP = i4;
  return i9 | 0;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i5 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i14);
 i9 = i13;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore11RenderStyle26setBorderBottomRightRadiusENS_10LengthSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 16 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) + 184 | 0;
 i7 = i4 | 0;
 i8 = i4;
 i9 = i2;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i11;
 if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i11 = i4 + 8 | 0;
 i10 = i11;
 i7 = i2 + 8 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i11 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i13 = __ZNK7WebCore10LengthSizeeqERKS0_(i1, i8) | 0;
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if (i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i4 = i5 | 0;
  i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i4 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i13;
  i14 = i13;
 }
 i13 = i14 + 184 | 0;
 if ((i13 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i13;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 HEAP8[i2 + 5 | 0] = 0;
 i13 = i14 + 192 | 0;
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP8[i2 + 13 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle25setBorderBottomLeftRadiusENS_10LengthSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 16 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) + 168 | 0;
 i7 = i4 | 0;
 i8 = i4;
 i9 = i2;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i11;
 if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i11 = i4 + 8 | 0;
 i10 = i11;
 i7 = i2 + 8 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i11 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i13 = __ZNK7WebCore10LengthSizeeqERKS0_(i1, i8) | 0;
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if (i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i4 = i5 | 0;
  i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i4 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i13;
  i14 = i13;
 }
 i13 = i14 + 168 | 0;
 if ((i13 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i13;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 HEAP8[i2 + 5 | 0] = 0;
 i13 = i14 + 176 | 0;
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP8[i2 + 13 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle23setBorderTopRightRadiusENS_10LengthSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 16 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) + 152 | 0;
 i7 = i4 | 0;
 i8 = i4;
 i9 = i2;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i11;
 if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i11 = i4 + 8 | 0;
 i10 = i11;
 i7 = i2 + 8 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i11 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i13 = __ZNK7WebCore10LengthSizeeqERKS0_(i1, i8) | 0;
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if (i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i4 = i5 | 0;
  i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i4 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i13;
  i14 = i13;
 }
 i13 = i14 + 152 | 0;
 if ((i13 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i13;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 HEAP8[i2 + 5 | 0] = 0;
 i13 = i14 + 160 | 0;
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP8[i2 + 13 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle22setBorderTopLeftRadiusENS_10LengthSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i1 + 16 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) + 136 | 0;
 i7 = i4 | 0;
 i8 = i4;
 i9 = i2;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i10;
 HEAP32[i7 + 4 >> 2] = i11;
 if ((i10 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i11 = i4 + 8 | 0;
 i10 = i11;
 i7 = i2 + 8 | 0;
 i12 = HEAP32[i7 >> 2] | 0;
 i13 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i12;
 HEAP32[i11 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i13 = __ZNK7WebCore10LengthSizeeqERKS0_(i1, i8) | 0;
 if ((HEAP8[i8 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i10);
 }
 if ((HEAP8[i8 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if (i13) {
  STACKTOP = i3;
  return;
 }
 i13 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i13 >> 2] | 0) == 1) {
  i14 = i13;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i5, i13);
  i13 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i4 = i5 | 0;
  i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i4 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i13;
  i14 = i13;
 }
 i13 = i14 + 136 | 0;
 if ((i13 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i13;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = i13;
 HEAP8[i2 + 5 | 0] = 0;
 i13 = i14 + 144 | 0;
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i13 + 4 >> 2] = i14;
 HEAP8[i2 + 13 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore35PropertyWrapperAcceleratedTransform5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i1 | 0;
 i8 = i1 + 8 | 0;
 i9 = i1 + 16 | 0;
 i10 = (HEAP32[(HEAP32[i4 + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
 i4 = (HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
 i5 = i8;
 HEAPF64[i7 >> 3] = d6;
 if ((HEAP8[i2 + 13 | 0] & 1) == 0) {
  i11 = HEAP32[i2 + 56 >> 2] | 0;
  if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
  } else {
   i2 = i11 + 52 | 0;
   i11 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = i11;
  }
  __ZNK7WebCore19TransformOperations31blendByUsingMatrixInterpolationERKS0_dRKNS_10LayoutSizeE(i9, i4, i10, d6, i5);
 } else {
  __ZNK7WebCore19TransformOperations25blendByMatchingOperationsERKS0_RKd(i9, i4, i10, i7);
 }
 __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i3, i9);
 i3 = i9 + 8 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i10 = i9 | 0;
 if ((i7 | 0) != 0) {
  i4 = HEAP32[i10 >> 2] | 0;
  i5 = i4 + (i7 << 2) | 0;
  i7 = i4;
  while (1) {
   i4 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i11 = i4 + 4 | 0;
     i8 = i11 | 0;
     i2 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
     if ((i2 | 0) != 0) {
      HEAP32[i8 >> 2] = i2;
      break;
     }
     i2 = i11 - 4 | 0;
     if ((i2 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
    }
   } while (0);
   i7 = i7 + 4 | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i10 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i1;
  return;
 }
 HEAP32[i10 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 STACKTOP = i1;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderStyle15setShapeOutsideEN3WTF10PassRefPtrINS_10ShapeValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 188 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 188 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 4 | 0;
   i5 = i6 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
  }
 } while (0);
 i1 = HEAP32[i8 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 4 | 0;
   i9 = i8 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i8 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 184 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 184 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 | 0;
 i6 = i7 | 0;
 i1 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i6 >> 2] = i1;
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i8 + 12 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i6 = i1 + 4 | 0;
   i5 = i6 | 0;
   i9 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i5 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 127](i9);
  }
 } while (0);
 i1 = HEAP32[i8 + 8 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i8 = i1 + 4 | 0;
   i9 = i8 | 0;
   i6 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i9 >> 2] = i6;
    break;
   }
   i6 = i8 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i7);
 STACKTOP = i3;
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
function __ZNK7WebCore21PropertyWrapperShadow31blendSimpleOrMatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i3 | 0;
 i7 = (i5 | 0) != 0;
 i8 = (i6 | 0) == 0;
 if (i8 & (i7 ^ 1)) {
  i9 = 0;
  i10 = i1 | 0;
  HEAP32[i10 >> 2] = i9;
  STACKTOP = i3;
  return;
 }
 i11 = i2 | 0;
 i12 = 0;
 i13 = 0;
 i14 = i6;
 i6 = i5;
 i5 = i7;
 i7 = i8;
 while (1) {
  i8 = __ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_(i6, i14) | 0;
  __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPKNS_10ShadowDataES5_d(i2, i8, __ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_(i14, i6) | 0, d4);
  i8 = HEAP32[i11 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  do {
   if ((i13 | 0) == 0) {
    if ((i12 | 0) == 0) {
     i15 = i8;
     break;
    }
    __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i12 + 32 | 0);
    __ZN3WTF8fastFreeEPv(i12);
    i15 = i8;
   } else {
    i16 = i13 + 32 | 0;
    i17 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = i8;
    if ((i17 | 0) == 0) {
     i15 = i12;
     break;
    }
    __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i17 + 32 | 0);
    __ZN3WTF8fastFreeEPv(i17);
    i15 = i12;
   }
  } while (0);
  if (i5) {
   i18 = HEAP32[i6 + 32 >> 2] | 0;
  } else {
   i18 = 0;
  }
  if (i7) {
   i19 = 0;
  } else {
   i19 = HEAP32[i14 + 32 >> 2] | 0;
  }
  i17 = (i18 | 0) != 0;
  i16 = (i19 | 0) == 0;
  if (i16 & (i17 ^ 1)) {
   i9 = i15;
   break;
  } else {
   i12 = i15;
   i13 = i8;
   i14 = i19;
   i6 = i18;
   i5 = i17;
   i7 = i16;
  }
 }
 i10 = i1 | 0;
 HEAP32[i10 >> 2] = i9;
 STACKTOP = i3;
 return;
}
function __Z12compareEqualIN7WebCore9LengthBoxES1_EbRKT_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i4 | 0;
 i6 = i4;
 i7 = i2;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i8;
 HEAP32[i5 + 4 >> 2] = i9;
 if ((i8 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i4);
 }
 i9 = i4 + 8 | 0;
 i8 = i9;
 i5 = i2 + 8 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i10 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i10;
 if ((i7 & 0 | 0) == 0 & (i10 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i8);
 }
 i10 = i4 + 16 | 0;
 i7 = i10;
 i9 = i2 + 16 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i11;
 if ((i5 & 0 | 0) == 0 & (i11 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i7);
 }
 i11 = i4 + 24 | 0;
 i5 = i11;
 i10 = i2 + 24 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i9 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = i2;
 HEAP32[i11 + 4 >> 2] = i9;
 if ((i2 & 0 | 0) == 0 & (i9 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i5);
 }
 i9 = __ZNK7WebCore9LengthBoxeqERKS0_(i1, i6) | 0;
 if ((HEAP8[i6 + 29 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i5);
 }
 if ((HEAP8[i6 + 21 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 }
 if ((HEAP8[i6 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i8);
 }
 if ((HEAP8[i6 + 5 | 0] | 0) != 10) {
  STACKTOP = i3;
  return i9 | 0;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 STACKTOP = i3;
 return i9 | 0;
}
function __ZN7WebCore11RenderStyle18setColumnRuleWidthEt(i1, i2) {
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
 i1 = i2 & 65535;
 if (((HEAP32[(HEAP32[i8 + 68 >> 2] | 0) + 20 >> 2] | 0) >>> 1 & 67108863 | 0) == (i1 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i8 >> 2] | 0) == 1) {
  i11 = i8;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i8);
  i8 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i7 >> 2] | 0;
  i2 = i5 | 0;
  i10 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i2 >> 2] = i10;
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
 i11 = i12 + 20 | 0;
 HEAP32[i11 >> 2] = HEAP32[i11 >> 2] & -134217727 | i1 << 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if (!(HEAP8[H_BASE + 1368 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(36) | 0;
  i4 = i3 + 16 | 0;
  _memset(i3 | 0, 0, 16) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 1;
  HEAP32[i3 + 24 >> 2] = 0;
  HEAP8[i3 + 28 | 0] = 0;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[H_BASE + 1408 >> 2] = i3;
  HEAP8[H_BASE + 1368 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 1360 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(36) | 0;
  i4 = i3 + 16 | 0;
  _memset(i3 | 0, 0, 16) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 1;
  HEAP32[i3 + 24 >> 2] = 1;
  HEAP8[i3 + 28 | 0] = 0;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[H_BASE + 1400 >> 2] = i3;
  HEAP8[H_BASE + 1360 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 1352 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(36) | 0;
  i4 = i3 + 16 | 0;
  _memset(i3 | 0, 0, 16) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 1;
  HEAP32[i3 + 24 >> 2] = 0;
  HEAP8[i3 + 28 | 0] = 1;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[H_BASE + 1392 >> 2] = i3;
  HEAP8[H_BASE + 1352 | 0] = 1;
 }
 if (!(HEAP8[H_BASE + 1344 | 0] | 0)) {
  i3 = __ZN3WTF10fastMallocEj(36) | 0;
  i4 = i3 + 16 | 0;
  _memset(i3 | 0, 0, 16) | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i4 + 4 >> 2] = 1;
  HEAP32[i3 + 24 >> 2] = 1;
  HEAP8[i3 + 28 | 0] = 1;
  HEAP32[i3 + 32 >> 2] = 0;
  HEAP32[H_BASE + 1384 >> 2] = i3;
  HEAP8[H_BASE + 1344 | 0] = 1;
 }
 if ((i1 | 0) != 0) {
  i5 = i1;
  return i5 | 0;
 }
 i1 = (HEAP8[i2 + 28 | 0] & 1) != 0;
 if ((HEAP32[i2 + 24 >> 2] | 0) == 1) {
  i5 = i1 ? HEAP32[H_BASE + 1384 >> 2] | 0 : HEAP32[H_BASE + 1400 >> 2] | 0;
  return i5 | 0;
 } else {
  i5 = i1 ? HEAP32[H_BASE + 1392 >> 2] | 0 : HEAP32[H_BASE + 1408 >> 2] | 0;
  return i5 | 0;
 }
 return 0;
}
function __ZNK7WebCore32PropertyWrapperMaybeInvalidColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 24 | 0;
 i11 = i2 + 32 | 0;
 i12 = i1 + 8 | 0;
 i13 = i4 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 & 1 | 0) == 0) {
  i15 = i14;
 } else {
  i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i14 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i15 & 255](i7, i13);
 i13 = i5 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i15 = HEAP32[i12 >> 2] | 0;
 if ((i15 & 1 | 0) == 0) {
  i16 = i15;
 } else {
  i16 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i15 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i16 & 255](i8, i13);
 do {
  if ((HEAP8[i7 + 4 | 0] & 1) == 0) {
   if ((HEAP8[i8 + 4 | 0] & 1) == 0) {
    STACKTOP = i2;
    return;
   } else {
    __ZNK7WebCore11RenderStyle5colorEv(i9, i4);
    i13 = i7;
    i16 = i9;
    HEAP32[i13 >> 2] = HEAP32[i16 >> 2];
    HEAP8[i13 + 4 | 0] = HEAP8[i16 + 4 | 0] | 0;
    break;
   }
  }
 } while (0);
 if ((HEAP8[i8 + 4 | 0] & 1) == 0) {
  __ZNK7WebCore11RenderStyle5colorEv(i10, i5);
  i5 = i8;
  i9 = i10;
  HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
  HEAP8[i5 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
 }
 i9 = i1 + 16 | 0;
 i1 = i3 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i17 = i3;
 } else {
  i17 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 __ZN7WebCore5blendERKNS_5ColorES2_db(i11, i7, i8, d6, 1);
 FUNCTION_TABLE_vii[i17 & 255](i1, i11);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i1 + 12 | 0;
 i13 = i3 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i14 = i3;
 } else {
  i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 4 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i15 = i4;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i15 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i16 = i5;
 } else {
  i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i16 & 255](i1) | 0;
 d17 = d6;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i5 | 0, i4 | 0, d17);
 __ZNK7WebCore6Length5blendERKS0_d(i8, i5 + 8 | 0, i4 + 8 | 0, d17);
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 i4 = i9 + 8 | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i4 + 4 >> 2] = i10;
 FUNCTION_TABLE_vii[i14 & 255](i13, i11);
 if ((HEAP8[i11 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21LengthPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = i1 + 16 | 0;
 i13 = i3 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i14 = i3;
 } else {
  i14 = HEAP32[(HEAP32[i13 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i15 = i4;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i15 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i16 = i5;
 } else {
  i16 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i16 & 255](i1) | 0;
 d17 = d6;
 __ZNK7WebCore6Length5blendERKS0_d(i7, i5 | 0, i4 | 0, d17);
 __ZNK7WebCore6Length5blendERKS0_d(i8, i5 + 8 | 0, i4 + 8 | 0, d17);
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i10 + 4 >> 2] = i4;
 i4 = i9 + 8 | 0;
 i10 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i4 + 4 >> 2] = i10;
 FUNCTION_TABLE_vii[i14 & 255](i13, i11);
 if ((HEAP8[i11 + 13 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i4);
 }
 if ((HEAP8[i11 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore18StyleTransformData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  if ((HEAP8[i3 + 29 | 0] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 24 | 0);
  }
  if ((HEAP8[i3 + 21 | 0] | 0) == 10) {
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i3 + 16 | 0);
  }
  i8 = i3 + 12 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  i10 = i3 + 4 | 0;
  if ((i9 | 0) != 0) {
   i11 = HEAP32[i10 >> 2] | 0;
   i12 = i11 + (i9 << 2) | 0;
   i9 = i11;
   while (1) {
    i11 = HEAP32[i9 >> 2] | 0;
    do {
     if ((i11 | 0) != 0) {
      i13 = i11 + 4 | 0;
      i14 = i13 | 0;
      i15 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i15 | 0) != 0) {
       HEAP32[i14 >> 2] = i15;
       break;
      }
      i15 = i13 - 4 | 0;
      if ((i15 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] & 127](i15);
     }
    } while (0);
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i12 | 0)) {
     break;
    }
   }
   HEAP32[i8 >> 2] = 0;
  }
  i8 = HEAP32[i10 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i10 >> 2] = 0;
   HEAP32[i3 + 8 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPKNS_10ShadowDataES5_d(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 + 24 | 0;
 i8 = i3 + 24 | 0;
 i9 = (HEAP32[i7 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 i10 = __ZN3WTF10fastMallocEj(36) | 0;
 i11 = i10;
 if (!i9) {
  __ZN7WebCore10ShadowDataC1ERKS0_(i11, i3);
  HEAP32[i1 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 i9 = i2;
 i12 = HEAP32[i9 >> 2] | 0;
 i13 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i3;
 i14 = HEAP32[i9 + 4 >> 2] | 0;
 i15 = _round(+(+(i12 | 0) + +((HEAP32[i9 >> 2] | 0) - i12 | 0) * d4)) | 0;
 i12 = _round(+(+(i13 | 0) + +(i14 - i13 | 0) * d4)) | 0;
 i13 = HEAP32[i2 + 8 >> 2] | 0;
 i14 = _round(+(+(i13 | 0) + +((HEAP32[i3 + 8 >> 2] | 0) - i13 | 0) * d4)) | 0;
 i13 = HEAP32[i2 + 12 >> 2] | 0;
 i9 = _round(+(+(i13 | 0) + +((HEAP32[i3 + 12 >> 2] | 0) - i13 | 0) * d4)) | 0;
 i13 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i13 | 0) == (i7 | 0)) {
  i16 = i13;
 } else {
  d17 = +((i13 | 0) == 0 | 0);
  i16 = d17 + (+((i7 | 0) == 0 | 0) - d17) * d4 <= +0 | 0;
 }
 i7 = HEAP8[i2 + 28 | 0] & 1;
 __ZN7WebCore5blendERKNS_5ColorES2_db(i6, i2 + 16 | 0, i3 + 16 | 0, d4, 1);
 i3 = i10;
 HEAP32[i3 >> 2] = i15;
 HEAP32[i3 + 4 >> 2] = i12;
 HEAP32[i10 + 8 >> 2] = i14;
 HEAP32[i10 + 12 >> 2] = i9;
 i9 = i10 + 16 | 0;
 i14 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i9 + 4 >> 2] = i14;
 HEAP32[i10 + 24 >> 2] = i16;
 HEAP8[i10 + 28 | 0] = i7;
 HEAP32[i10 + 32 >> 2] = 0;
 HEAP32[i1 >> 2] = i11;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore5blendERKNS_5ColorES2_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 do {
  if (d4 == +1) {
   if ((HEAP8[i3 + 4 | 0] & 1) != 0) {
    break;
   }
   HEAP32[i1 >> 2] = 0;
   HEAP8[i1 + 4 | 0] = 0;
   return;
  }
 } while (0);
 i6 = i2 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (!i5) {
  i5 = i7 >>> 16 & 255;
  i8 = i3 | 0;
  i9 = _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 16 & 255) - i5 | 0) * d4)) | 0;
  i5 = (HEAP32[i6 >> 2] | 0) >>> 8 & 255;
  i10 = _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 8 & 255) - i5 | 0) * d4)) | 0;
  i5 = HEAP32[i6 >> 2] & 255;
  i11 = _round(+(+(i5 | 0) + +((HEAP32[i8 >> 2] & 255) - i5 | 0) * d4)) | 0;
  i5 = (HEAP32[i6 >> 2] | 0) >>> 24;
  HEAP32[i1 >> 2] = __ZN7WebCore8makeRGBAEiiii(i9, i10, i11, _round(+(+(i5 | 0) + +(((HEAP32[i8 >> 2] | 0) >>> 24) - i5 | 0) * d4)) | 0) | 0;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
 if (i7 >>> 0 < 16777216 >>> 0) {
  i12 = 0;
 } else {
  i12 = __ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE(i2) | 0;
 }
 if ((HEAP32[i3 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  i13 = 0;
 } else {
  i13 = __ZN7WebCore26premultipliedARGBFromColorERKNS_5ColorE(i3) | 0;
 }
 i3 = i12 >>> 16 & 255;
 i2 = _round(+(+(i3 | 0) + +((i13 >>> 16 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 >>> 8 & 255;
 i7 = _round(+(+(i3 | 0) + +((i13 >>> 8 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 & 255;
 i5 = _round(+(+(i3 | 0) + +((i13 & 255) - i3 | 0) * d4)) | 0;
 i3 = i12 >>> 24;
 __ZN7WebCore26colorFromPremultipliedARGBEj(i1, __ZN7WebCore8makeRGBAEiiii(i2, i7, i5, _round(+(+(i3 | 0) + +((i13 >>> 24) - i3 | 0) * d4)) | 0) | 0);
 return;
}
function __ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 24 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 i7 = (__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 24 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = i2;
 i6 = i7;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 16 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 i7 = (__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 16 | 0;
 if ((i7 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i10 = i2;
 i6 = i7;
 i7 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i6 + 4 >> 2] = i7;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 if ((i2 | 0) == (i1 | 0)) {
  return i1 | 0;
 }
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if (i4 >>> 0 > i6 >>> 0) {
   HEAP32[i3 >> 2] = i6;
   i7 = i6;
  } else {
   i8 = i1 + 4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 <= i9 >>> 0) {
    i7 = i4;
    break;
   }
   do {
    if ((i9 | 0) != 0) {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i8 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
    }
   } while (0);
   __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, HEAP32[i5 >> 2] | 0);
   i7 = HEAP32[i3 >> 2] | 0;
  }
 } while (0);
 i4 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i4 >> 2] | 0, i7 << 3 | 0) | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i8 = i7 + (i6 << 3) | 0;
 if ((i4 | 0) == (i6 | 0)) {
  i12 = i4;
 } else {
  i6 = i7 + (i4 << 3) | 0;
  i7 = (HEAP32[i2 >> 2] | 0) + (i4 << 3) | 0;
  while (1) {
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i4 = i6 + 8 | 0;
   if ((i4 | 0) == (i8 | 0)) {
    break;
   } else {
    i6 = i4;
    i7 = i7 + 8 | 0;
   }
  }
  i12 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i12;
 return i1 | 0;
}
function __ZNK7WebCore32PropertyWrapperMaybeInvalidColor6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 & 1 | 0) == 0) {
  i11 = i10;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i10 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i11 & 255](i5, i1);
 i1 = i3 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 & 1 | 0) == 0) {
  i12 = i11;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i11 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i12 & 255](i6, i1);
 i1 = i5 + 4 | 0;
 do {
  if ((HEAP8[i1] & 1) == 0) {
   if ((HEAP8[i6 + 4 | 0] & 1) == 0) {
    i13 = 1;
    STACKTOP = i4;
    return i13 | 0;
   } else {
    __ZNK7WebCore11RenderStyle5colorEv(i7, i2);
    i12 = i5;
    i11 = i7;
    HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
    HEAP8[i12 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
    break;
   }
  }
 } while (0);
 i7 = i6 + 4 | 0;
 if ((HEAP8[i7] & 1) == 0) {
  __ZNK7WebCore11RenderStyle5colorEv(i8, i3);
  i3 = i6;
  i2 = i8;
  HEAP32[i3 >> 2] = HEAP32[i2 >> 2];
  HEAP8[i3 + 4 | 0] = HEAP8[i2 + 4 | 0] | 0;
 }
 if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i13 = (HEAP8[i1] & 1) != 0 ^ (HEAP8[i7] & 1) != 0 ^ 1;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZNK7WebCore34FillLayerRefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 + 12 | 0;
 i10 = i3 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 4 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i12 = i4;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i12 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i13 = i5;
 } else {
  i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPNS_10StyleImageES4_d(i8, i2, i4, FUNCTION_TABLE_ii[i13 & 255](i1) | 0, d6);
 FUNCTION_TABLE_vii[i11 & 255](i10, i8);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i10 + 4 | 0;
 i10 = i8 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i10 >> 2] = i11;
  STACKTOP = i7;
  return;
 }
 i11 = i8 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderStyle21setMaskBoxImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i7 + 164 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore18NinePieceImageData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i1 >> 2] | 0);
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i10 + 8 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i10 + 4 | 0;
 i10 = i2 | 0;
 i7 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i10 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
 i7 = i2 - 4 | 0;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore25RefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 + 16 | 0;
 i10 = i3 + (HEAP32[i9 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i9 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i12 = i4;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i12 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i13 = i5;
 } else {
  i13 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 __ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPNS_10StyleImageES4_d(i8, i2, i4, FUNCTION_TABLE_ii[i13 & 255](i1) | 0, d6);
 FUNCTION_TABLE_vii[i11 & 255](i10, i8);
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i8 = i10 + 4 | 0;
 i10 = i8 | 0;
 i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i11 | 0) != 0) {
  HEAP32[i10 >> 2] = i11;
  STACKTOP = i7;
  return;
 }
 i11 = i8 - 4 | 0;
 if ((i11 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 127](i11);
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore19PropertyWrapperFlex6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0;
 i1 = (i2 | 0) == 0;
 i4 = (i3 | 0) == 0;
 if (i1 & i4 | (i2 | 0) == (i3 | 0)) {
  i5 = 1;
  return i5 | 0;
 }
 if (i1 | i4) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i2 + 20 | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
 i1 = i2 + 12 | 0;
 i6 = i3 + 20 | 0;
 i3 = HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0;
 i7 = i3 + 12 | 0;
 i8 = HEAP8[i2 + 17 | 0] | 0;
 if (i8 << 24 >> 24 != (HEAP8[i3 + 17 | 0] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if (((HEAP8[i3 + 16 | 0] ^ HEAP8[i2 + 16 | 0]) & 1) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 do {
  if (i8 << 24 >> 24 == 15) {
   i9 = i2;
   i10 = i3;
  } else {
   if ((HEAP8[i2 + 18 | 0] & 1) == 0) {
    d11 = +(HEAP32[i1 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i1 >> 2];
   }
   if ((HEAP8[i3 + 18 | 0] & 1) == 0) {
    d12 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i7 >> 2];
   }
   if (d11 == d12) {
    i9 = i2;
    i10 = i3;
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i1, i7) | 0) {
    i9 = HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0;
    i10 = HEAP32[(HEAP32[i6 >> 2] | 0) + 60 >> 2] | 0;
    break;
   } else {
    i5 = 0;
    return i5 | 0;
   }
  }
 } while (0);
 if (+HEAPF32[i9 + 4 >> 2] != +HEAPF32[i10 + 4 >> 2]) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = +HEAPF32[i9 + 8 >> 2] == +HEAPF32[i10 + 8 >> 2];
 return i5 | 0;
}
function __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_((HEAP32[i7 + 72 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_((__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 4 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle7setClipENS_9LengthBoxE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 if (__Z12compareEqualIN7WebCore9LengthBoxES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore15StyleVisualData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore15StyleVisualDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 4 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i5 = i2;
 i8 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i8 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 i1 = i2 + 8 | 0;
 i8 = i6 + 12 | 0;
 i5 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = i5;
 HEAP8[i2 + 13 | 0] = 0;
 i5 = i2 + 16 | 0;
 i8 = i6 + 20 | 0;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i8 + 4 >> 2] = i1;
 HEAP8[i2 + 21 | 0] = 0;
 i1 = i2 + 24 | 0;
 i8 = i6 + 28 | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i8 + 4 >> 2] = i6;
 HEAP8[i2 + 29 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle7setZoomEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 8 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if (+HEAPF32[i7 + 40 >> 2] == d2) {
  i8 = 0;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i9 = i7;
 } else {
  __ZNK7WebCore15StyleVisualData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i10 = i4 | 0;
  i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore15StyleVisualDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i10 >> 2] = i11;
  }
  HEAP32[i6 >> 2] = i7;
  i9 = i7;
 }
 HEAPF32[i9 + 40 >> 2] = d2;
 i9 = i1 + 24 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 d2 = +HEAPF32[i1 + 80 >> 2];
 d12 = d2 * +HEAPF32[(HEAP32[i6 >> 2] | 0) + 40 >> 2];
 if (d2 == d12) {
  i8 = 1;
  STACKTOP = i3;
  return i8 | 0;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i13 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i9 >> 2] | 0;
  i6 = i5 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i9 >> 2] = i1;
  i13 = i1;
 }
 HEAPF32[i13 + 80 >> 2] = d12;
 i8 = 1;
 STACKTOP = i3;
 return i8 | 0;
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
function __ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore15StyleStrokeData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  i8 = HEAP32[i3 + 68 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
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
  i8 = HEAP32[i3 + 52 >> 2] | 0;
  do {
   if ((i8 | 0) != 0) {
    i10 = i8 | 0;
    i9 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i9 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i8);
     break;
    } else {
     HEAP32[i10 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i8 = i3 + 36 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i3 + 28 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  if ((i9 | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i3 + 32 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i9);
  }
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i6 >> 2] = i7;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[H_BASE + 1424 | 0] | 0) == 0) {
  i1 = __Znwj(4) | 0;
  i2 = i1;
  HEAP32[i1 >> 2] = 0;
  HEAP32[H_BASE + 1416 >> 2] = i2;
  HEAP32[H_BASE + 1424 >> 2] = 1;
  HEAP32[H_BASE + 1428 >> 2] = 0;
  i3 = i2;
 } else {
  i3 = HEAP32[H_BASE + 1416 >> 2] | 0;
 }
 i2 = i3 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i4 = HEAP32[H_BASE + 1416 >> 2] | 0;
  i5 = i4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 i3 = __Znwj(428) | 0;
 __ZN7WebCore30CSSPropertyAnimationWrapperMapC2Ev(i3);
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i1 | 0) == 0) {
  i4 = HEAP32[H_BASE + 1416 >> 2] | 0;
  i5 = i4 | 0;
  i6 = HEAP32[i5 >> 2] | 0;
  return i6 | 0;
 }
 i3 = i1 + 8 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i7 = i1 | 0;
 if ((i2 | 0) != 0) {
  i8 = HEAP32[i7 >> 2] | 0;
  i9 = i8 + (i2 << 2) | 0;
  i2 = i8;
  while (1) {
   i8 = HEAP32[i2 >> 2] | 0;
   if ((i8 | 0) != 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
   }
   i2 = i2 + 4 | 0;
   if ((i2 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i7 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZdlPv(i1);
 i4 = HEAP32[H_BASE + 1416 >> 2] | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 return i6 | 0;
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
function __ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_9FillLayerES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 4 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i8 & 255](i1) | 0;
 i1 = HEAP8[i2 + 5 | 0] | 0;
 if (i1 << 24 >> 24 != (HEAP8[i3 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i3 + 4 | 0] ^ HEAP8[i2 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i1 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
  d9 = +(HEAP32[i2 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i2 >> 2];
 }
 if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i2, i3) | 0;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i8 & 255](i1) | 0;
 i1 = HEAP8[i2 + 5 | 0] | 0;
 if (i1 << 24 >> 24 != (HEAP8[i3 + 5 | 0] | 0)) {
  i6 = 0;
  return i6 | 0;
 }
 if (((HEAP8[i3 + 4 | 0] ^ HEAP8[i2 + 4 | 0]) & 1) != 0) {
  i6 = 0;
  return i6 | 0;
 }
 if (i1 << 24 >> 24 == 15) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP8[i2 + 6 | 0] & 1) == 0) {
  d9 = +(HEAP32[i2 >> 2] | 0);
 } else {
  d9 = +HEAPF32[i2 >> 2];
 }
 if ((HEAP8[i3 + 6 | 0] & 1) == 0) {
  d10 = +(HEAP32[i3 >> 2] | 0);
 } else {
  d10 = +HEAPF32[i3 >> 2];
 }
 if (d9 == d10) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore6Length17isCalculatedEqualERKS0_(i2, i3) | 0;
 return i6 | 0;
}
function __ZNK7WebCore15PropertyWrapperINS_9SVGLengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i1 + 16 | 0;
 i11 = i3 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i3 = i11;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = i12;
 } else {
  i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 - 1) >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i14 = i4;
 } else {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i14 & 255](i8, i1);
 i1 = i5 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i5 = i1;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 & 1 | 0) == 0) {
  i15 = i14;
  FUNCTION_TABLE_vii[i15 & 255](i9, i5);
  d16 = d6;
  __ZNK7WebCore9SVGLength5blendERKS0_f(i7, i9, i8, d16);
  FUNCTION_TABLE_vii[i13 & 255](i3, i7);
  STACKTOP = i2;
  return;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i14 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i15 & 255](i9, i5);
  d16 = d6;
  __ZNK7WebCore9SVGLength5blendERKS0_f(i7, i9, i8, d16);
  FUNCTION_TABLE_vii[i13 & 255](i3, i7);
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderStyle16setLightingColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 32 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 16 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP8[i7 + 20 | 0] & 1) != 0 ^ (HEAP8[i2 + 4 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleMiscData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i10 + 16 | 0;
 i10 = i2;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP8[i7 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle10setOrphansEs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 24 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 88 >> 2] & 2 | 0) == 0) {
  i7 = i1;
 } else {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i8 = i1;
  } else {
   __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
   i1 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i6 >> 2] = i1;
   i8 = i1;
  }
  i1 = i8 + 88 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -3;
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP16[i7 + 86 >> 1] | 0) == i2 << 16 >> 16) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i1 = i5 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 HEAP16[i11 + 86 >> 1] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle9setWidowsEs(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 24 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 88 >> 2] & 1 | 0) == 0) {
  i7 = i1;
 } else {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i8 = i1;
  } else {
   __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
   i1 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i6 >> 2] = i1;
   i8 = i1;
  }
  i1 = i8 + 88 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP16[i7 + 84 >> 1] | 0) == i2 << 16 >> 16) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i1 = i5 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 HEAP16[i11 + 84 >> 1] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle13setFloodColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 32 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 4 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP8[i7 + 8 | 0] & 1) != 0 ^ (HEAP8[i2 + 4 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleMiscData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i10 + 4 | 0;
 i10 = i2;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP8[i7 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle12setStopColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 28 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 8 >> 2] | 0) == (HEAP32[i2 >> 2] | 0)) {
   if ((HEAP8[i7 + 12 | 0] & 1) != 0 ^ (HEAP8[i2 + 4 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleStopData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i10 + 8 | 0;
 i10 = i2;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP8[i7 + 4 | 0] = HEAP8[i10 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15PropertyWrapperIiE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, i18 = 0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = i7;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i9 = i8;
 } else {
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 - 1) >> 2] | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i10 = i4;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i10 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i5 = i1;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 & 1 | 0) == 0) {
  i11 = i10;
  i12 = FUNCTION_TABLE_ii[i11 & 255](i5) | 0;
  d13 = +(i4 | 0);
  i14 = i12 - i4 | 0;
  d15 = +(i14 | 0);
  d16 = d15 * d6;
  d17 = d13 + d16;
  i18 = _round(+d17) | 0;
  FUNCTION_TABLE_vii[i9 & 255](i3, i18);
  return;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i10 - 1) >> 2] | 0;
  i12 = FUNCTION_TABLE_ii[i11 & 255](i5) | 0;
  d13 = +(i4 | 0);
  i14 = i12 - i4 | 0;
  d15 = +(i14 | 0);
  d16 = d15 * d6;
  d17 = d13 + d16;
  i18 = _round(+d17) | 0;
  FUNCTION_TABLE_vii[i9 & 255](i3, i18);
  return;
 }
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
function __ZNK7WebCore25FillLayersPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i7 = i1 + 12 | 0;
 i8 = i4 + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i7 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i9 = i4;
 } else {
  i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i9 & 255](i8) | 0;
 i8 = i5 + (HEAP32[i7 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i10 = i5;
 } else {
  i10 = HEAP32[(HEAP32[i8 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i10 & 255](i8) | 0;
 i8 = i1 + 20 | 0;
 i10 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i10 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i11 & 255](i10) | 0;
 if ((i4 | 0) == 0 | (i5 | 0) == 0 | (i3 | 0) == 0) {
  return;
 }
 i10 = i1 + 8 | 0;
 i1 = i4;
 i4 = i5;
 i5 = i3;
 while (1) {
  i3 = HEAP32[i10 >> 2] | 0;
  FUNCTION_TABLE_viiiiid[HEAP32[(HEAP32[i3 >> 2] | 0) + 12 >> 2] & 63](i3, i2, i5, i1, i4, d6);
  i1 = HEAP32[i1 >> 2] | 0;
  i4 = HEAP32[i4 >> 2] | 0;
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i1 | 0) == 0 | (i4 | 0) == 0 | (i5 | 0) == 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderStyle15setMaskBoxImageERKNS_14NinePieceImageE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 i7 = i2 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + 1;
 i7 = HEAP32[i1 + 164 >> 2] | 0;
 if ((i7 | 0) == (i2 | 0)) {
  __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i2 | 0);
  STACKTOP = i3;
  return;
 }
 i1 = __ZNK7WebCore18NinePieceImageDataeqERKS0_(i7, i2) | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(i2 | 0);
 if (i1) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i7 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = HEAP32[i6 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 i6 = i8 + 164 | 0;
 __ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv(HEAP32[i6 >> 2] | 0);
 HEAP32[i6 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore20PropertyWrapperColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i2 | 0;
 i8 = i2 + 8 | 0;
 i9 = i2 + 16 | 0;
 i10 = i1 + 16 | 0;
 i11 = i3 + (HEAP32[i10 + 4 >> 2] | 0) | 0;
 i3 = i11;
 i12 = HEAP32[i10 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = i12;
 } else {
  i13 = HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 - 1) >> 2] | 0;
 }
 i12 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i12 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i14 = i4;
 } else {
  i14 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i14 & 255](i8, i1);
 i1 = i5 + (HEAP32[i12 + 4 >> 2] | 0) | 0;
 i5 = i1;
 i14 = HEAP32[i12 >> 2] | 0;
 if ((i14 & 1 | 0) == 0) {
  i15 = i14;
  FUNCTION_TABLE_vii[i15 & 255](i9, i5);
  __ZN7WebCore5blendERKNS_5ColorES2_db(i7, i8, i9, d6, 1);
  FUNCTION_TABLE_vii[i13 & 255](i3, i7);
  STACKTOP = i2;
  return;
 } else {
  i15 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i14 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i15 & 255](i9, i5);
  __ZN7WebCore5blendERKNS_5ColorES2_db(i7, i8, i9, d6, 1);
  FUNCTION_TABLE_vii[i13 & 255](i3, i7);
  STACKTOP = i2;
  return;
 }
}
function __ZNK7WebCore21PropertyWrapperShadow6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i5 = i2;
 } else {
  i5 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i5 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i6 = i3;
 } else {
  i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i6 & 255](i1) | 0;
 i1 = (i2 | 0) == 0;
 i6 = (i3 | 0) == 0;
 if (i1 & i6) {
  i7 = 1;
  return i7 | 0;
 } else {
  i8 = i2;
  i9 = i3;
  i10 = i1;
  i11 = i6;
 }
 while (1) {
  if (i10 | i11) {
   i7 = 0;
   i12 = 15;
   break;
  }
  if (!(__ZNK7WebCore10ShadowDataeqERKS0_(i8, i9) | 0)) {
   i7 = 0;
   i12 = 12;
   break;
  }
  i6 = HEAP32[i8 + 32 >> 2] | 0;
  i1 = HEAP32[i9 + 32 >> 2] | 0;
  i3 = (i6 | 0) == 0;
  i2 = (i1 | 0) == 0;
  if (i3 & i2) {
   i7 = 1;
   i12 = 13;
   break;
  } else {
   i8 = i6;
   i9 = i1;
   i10 = i3;
   i11 = i2;
  }
 }
 if ((i12 | 0) == 13) {
  return i7 | 0;
 } else if ((i12 | 0) == 15) {
  return i7 | 0;
 } else if ((i12 | 0) == 12) {
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle9setZIndexEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 4 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 64 >> 2] & 1 | 0) == 0) {
  i7 = i1;
 } else {
  if ((HEAP32[i1 >> 2] | 0) == 1) {
   i8 = i1;
  } else {
   __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
   i1 = HEAP32[i4 >> 2] | 0;
   i4 = HEAP32[i6 >> 2] | 0;
   i9 = i4 | 0;
   i10 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i10 | 0) == 0) {
    __ZN7WebCore12StyleBoxDataD2Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
   } else {
    HEAP32[i9 >> 2] = i10;
   }
   HEAP32[i6 >> 2] = i1;
   i8 = i1;
  }
  i1 = i8 + 64 | 0;
  HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -2;
  i7 = HEAP32[i6 >> 2] | 0;
 }
 if ((HEAP32[i7 + 60 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i11 = i7;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i5, i7);
  i7 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i1 = i5 | 0;
  i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i1 >> 2] = i8;
  }
  HEAP32[i6 >> 2] = i7;
  i11 = i7;
 }
 HEAP32[i11 + 60 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15PropertyWrapperIfE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = i7;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i9 = i8;
 } else {
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 - 1) >> 2] | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i10 = i4;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 d11 = +FUNCTION_TABLE_fi[i10 & 31](i1);
 i1 = i5 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i5 = i1;
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 & 1 | 0) == 0) {
  i12 = i10;
  d13 = +FUNCTION_TABLE_fi[i12 & 31](i5);
  d14 = d11;
  d15 = d13 - d11;
  d16 = d15;
  d17 = d16 * d6;
  d18 = d14 + d17;
  d19 = d18;
  FUNCTION_TABLE_vif[i9 & 31](i3, d19);
  return;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i10 - 1) >> 2] | 0;
  d13 = +FUNCTION_TABLE_fi[i12 & 31](i5);
  d14 = d11;
  d15 = d13 - d11;
  d16 = d15;
  d17 = d16 * d6;
  d18 = d14 + d17;
  d19 = d18;
  FUNCTION_TABLE_vif[i9 & 31](i3, d19);
  return;
 }
}
function __ZN7WebCore11RenderStyle21setBaselineShiftValueENS_9SVGLengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 32 | 0;
 if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i1 >> 2] | 0) + 24 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleMiscData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i2;
 i2 = i10 + 24 | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle18setStrokeDashArrayEN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 16 | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i5 = HEAP32[i6 + 36 >> 2] | 0;
 L8 : do {
  if ((i5 | 0) == (HEAP32[i2 + 8 >> 2] | 0)) {
   i8 = HEAP32[i6 + 28 >> 2] | 0;
   i7 = HEAP32[i2 >> 2] | 0;
   i4 = 0;
   while (1) {
    if (i4 >>> 0 >= i5 >>> 0) {
     break;
    }
    if (__ZNK7WebCore9SVGLengtheqERKS0_(i8 + (i4 << 3) | 0, i7 + (i4 << 3) | 0) | 0) {
     i4 = i4 + 1 | 0;
    } else {
     break L8;
    }
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_((__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) | 0) + 28 | 0, i2) | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle10setKerningENS_9SVGLengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 20 | 0;
 if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i1 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 >> 2] | 0;
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleTextData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 i7 = i2;
 i2 = i10 + 4 | 0;
 i10 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i2 + 4 >> 2] = i10;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle19setTransformOriginZEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 if (+HEAPF32[(HEAP32[i7 + 72 >> 2] | 0) + 32 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i1 = i4 | 0;
  i9 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i1 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i7;
  i10 = i7;
 }
 HEAPF32[(__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv(i10 + 72 | 0) | 0) + 32 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle11setClipPathEN3WTF10PassRefPtrINS_17ClipPathOperationEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 | 0;
 i2 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 212 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
  i8 = i2;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i9 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i9;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
  i8 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = 0;
 i6 = i7 + 212 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i8;
 if ((i7 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = i8 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = i6;
  STACKTOP = i3;
  return;
 }
 i6 = i8 - 4 | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 127](i6);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15PropertyWrapperINS_11EVisibilityEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = i7;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i9 = i8;
 } else {
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 - 1) >> 2] | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i10 = i4;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i10 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i11 = i5;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i11 & 255](i1) | 0;
 d12 = (i4 | 0) == 0 ? +1 : +0;
 d13 = (i5 | 0) == 0 ? +1 : +0;
 if (d12 == d13) {
  i14 = i5;
  FUNCTION_TABLE_vii[i9 & 255](i3, i14);
  return;
 }
 if (d12 + (d13 - d12) * d6 > +0) {
  i14 = 0;
  FUNCTION_TABLE_vii[i9 & 255](i3, i14);
  return;
 }
 i14 = (i5 | 0) != 0 ? i5 : i4;
 FUNCTION_TABLE_vii[i9 & 255](i3, i14);
 return;
}
function __ZNK7WebCore15PropertyWrapperIjE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0, d13 = +0, i14 = 0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = i7;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((i8 & 1 | 0) == 0) {
  i9 = i8;
 } else {
  i9 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 - 1) >> 2] | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i8 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i10 = i4;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i10 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i8 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i11 = i5;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = FUNCTION_TABLE_ii[i11 & 255](i1) | 0;
 d12 = +(i4 >>> 0 >>> 0);
 if (i5 >>> 0 > i4 >>> 0) {
  d13 = d12 + +((i5 - i4 | 0) >>> 0 >>> 0) * d6;
  i14 = _round(+d13) | 0;
  FUNCTION_TABLE_vii[i9 & 255](i3, i14);
  return;
 } else {
  d13 = d12 - +((i4 - i5 | 0) >>> 0 >>> 0) * d6;
  i14 = _round(+d13) | 0;
  FUNCTION_TABLE_vii[i9 & 255](i3, i14);
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEC2Ej(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 | 0;
 HEAP32[i5 >> 2] = 0;
 i6 = i1 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 8 | 0;
 HEAP32[i7 >> 2] = i2;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i1 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i6 >> 2] = i1 >>> 3;
 i6 = __ZN3WTF10fastMallocEj(i1) | 0;
 i1 = i6;
 HEAP32[i5 >> 2] = i1;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i7 >> 2] | 0;
 i7 = i1 + (i6 << 3) | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i4 | 0;
 i5 = i1;
 while (1) {
  HEAP32[i6 >> 2] = 0;
  __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i5, 2, i4);
  i1 = HEAP32[i6 >> 2] | 0;
  do {
   if ((i1 | 0) != 0) {
    i2 = i1 | 0;
    i8 = (HEAP32[i2 >> 2] | 0) - 2 | 0;
    if ((i8 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i2 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i5 = i5 + 8 | 0;
  if ((i5 | 0) == (i7 | 0)) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  STACKTOP = i2;
  return i5 | 0;
 }
 __ZNK7WebCore13StyleFillData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i6 = i3 | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i6 + 36 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i10 = i9 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i10 >> 2] = i11;
     break;
    }
   }
  } while (0);
  i9 = HEAP32[i6 + 20 >> 2] | 0;
  do {
   if ((i9 | 0) != 0) {
    i6 = i9 | 0;
    i11 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i9);
     break;
    } else {
     HEAP32[i6 >> 2] = i11;
     break;
    }
   }
  } while (0);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 STACKTOP = i2;
 return i5 | 0;
}
function __ZN7WebCore11RenderStyle12setMaskImageEN3WTF10PassRefPtrINS_10StyleImageEEE(i1, i2) {
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
 i1 = i2 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = i6 + 120 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i2;
 do {
  if ((i5 | 0) != 0) {
   i2 = i5 + 4 | 0;
   i1 = i2 | 0;
   i8 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i1 >> 2] = i8;
    break;
   }
   i8 = i2 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 127](i8);
  }
 } while (0);
 i5 = i6 + 156 | 0;
 HEAP32[i5 >> 2] = HEAP32[i5 >> 2] | 16777216;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore24FillLayerPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i2 | 0;
 i8 = i1 + 12 | 0;
 i9 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i10 = i3;
 } else {
  i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 4 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i11 = i4;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i11 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i12 = i5;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 __ZNK7WebCore6Length5blendERKS0_d(i7, FUNCTION_TABLE_ii[i12 & 255](i1) | 0, i4, d6);
 FUNCTION_TABLE_vii[i10 & 255](i9, i7);
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore21LengthPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i2 | 0;
 i8 = i1 + 16 | 0;
 i9 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i10 = i3;
 } else {
  i10 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i11 = i4;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i11 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i12 = i5;
 } else {
  i12 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 __ZNK7WebCore6Length5blendERKS0_d(i7, FUNCTION_TABLE_ii[i12 & 255](i1) | 0, i4, d6);
 FUNCTION_TABLE_vii[i10 & 255](i9, i7);
 if ((HEAP8[i7 + 5 | 0] | 0) != 10) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i2;
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
function __ZNK7WebCore33PropertyWrapperAcceleratedOpacity5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var d7 = +0, d8 = +0, d9 = +0, i10 = 0, i11 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i1 = i2 | 0;
 d7 = +HEAPF32[(HEAP32[i4 + 20 >> 2] | 0) + 4 >> 2];
 d8 = d7 == +1 ? +.9999989867210388 : d7;
 d7 = d8 + (+HEAPF32[(HEAP32[i5 + 20 >> 2] | 0) + 4 >> 2] - d8) * d6;
 do {
  if (d7 < +1) {
   if (d7 <= +0) {
    d9 = +0;
    break;
   }
   d9 = d7;
  } else {
   d9 = +1;
  }
 } while (0);
 i5 = i3 + 20 | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if (+HEAPF32[i3 + 4 >> 2] == d9) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i3 >> 2] | 0) == 1) {
  i10 = i3;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i1, i3);
  i3 = HEAP32[i1 >> 2] | 0;
  i1 = HEAP32[i5 >> 2] | 0;
  i4 = i1 | 0;
  i11 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
  if ((i11 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i1);
   __ZN3WTF8fastFreeEPv(i1);
  } else {
   HEAP32[i4 >> 2] = i11;
  }
  HEAP32[i5 >> 2] = i3;
  i10 = i3;
 }
 HEAPF32[i10 + 4 >> 2] = d9;
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore25FillLayersPropertyWrapper6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 + 12 | 0;
 i5 = i2 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i6 = i2;
 } else {
  i6 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i6 & 255](i5) | 0;
 i5 = i3 + (HEAP32[i4 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i7 = i3;
 } else {
  i7 = HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i7 & 255](i5) | 0;
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  i8 = 1;
  return i8 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2;
 i2 = i3;
 while (1) {
  i3 = HEAP32[i5 >> 2] | 0;
  if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 63](i3, i1, i2) | 0)) {
   i8 = 0;
   i9 = 14;
   break;
  }
  i3 = HEAP32[i1 >> 2] | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  if ((i3 | 0) == 0 | (i7 | 0) == 0) {
   i8 = 1;
   i9 = 12;
   break;
  } else {
   i1 = i3;
   i2 = i7;
  }
 }
 if ((i9 | 0) == 14) {
  return i8 | 0;
 } else if ((i9 | 0) == 12) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderStyle15setFloodOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 32 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if (+HEAPF32[i7 + 12 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleMiscData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 HEAPF32[i10 + 12 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setStopOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i5, i1);
  i1 = HEAP32[i5 >> 2] | 0;
  i5 = HEAP32[i6 >> 2] | 0;
  i8 = i5 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i5);
   __ZN3WTF8fastFreeEPv(i5);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 28 | 0;
 i7 = HEAP32[i1 >> 2] | 0;
 if (+HEAPF32[i7 + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i7 >> 2] | 0) == 1) {
  i10 = i7;
 } else {
  __ZNK7WebCore13StyleStopData4copyEv(i4, i7);
  i7 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i1 >> 2] | 0;
  i6 = i4 | 0;
  i9 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i9;
  }
  HEAP32[i1 >> 2] = i7;
  i10 = i7;
 }
 HEAPF32[i10 + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterINS_5ColorEE6equalsEPKNS_11RenderStyleES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i2 | 0) == 0;
 i8 = (i3 | 0) == 0;
 if (i7 & i8 | (i2 | 0) == (i3 | 0)) {
  i9 = 1;
  STACKTOP = i4;
  return i9 | 0;
 }
 if (i7 | i8) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i10 = i2;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i10 & 255](i5, i1);
 i1 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i11 & 255](i6, i1);
 if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i6 >> 2] | 0)) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i9 = (HEAP8[i5 + 4 | 0] & 1) != 0 ^ (HEAP8[i6 + 4 | 0] & 1) != 0 ^ 1;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore11RenderStyle19setStrokePaintColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1376 | 0);
 __ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i7, 1, i2, i5, 1, 0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle20setBorderBottomColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 do {
  if ((HEAP32[i1 + 124 >> 2] | 0) == (i8 | 0)) {
   if ((HEAP32[i1 + 128 >> 2] & 1 | 0) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
  i10 = i8;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i1;
  i9 = i1;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i9 + 124 >> 2] = i10;
 i10 = i9 + 128 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle17setFillPaintColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i1 + 36 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 1376 | 0);
 __ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb(i7, 1, i2, i5, 1, 0);
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i5 = i2 | 0;
 i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i7 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i2);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i5 >> 2] = i7;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderStyle19setBorderRightColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 do {
  if ((HEAP32[i1 + 108 >> 2] | 0) == (i8 | 0)) {
   if ((HEAP32[i1 + 112 >> 2] & 1 | 0) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
  i10 = i8;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i1;
  i9 = i1;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i9 + 108 >> 2] = i10;
 i10 = i9 + 112 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle18setBorderLeftColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 do {
  if ((HEAP32[i1 + 100 >> 2] | 0) == (i8 | 0)) {
   if ((HEAP32[i1 + 104 >> 2] & 1 | 0) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
  i10 = i8;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i1;
  i9 = i1;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i9 + 100 >> 2] = i10;
 i10 = i9 + 104 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle17setBorderTopColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 do {
  if ((HEAP32[i1 + 116 >> 2] | 0) == (i8 | 0)) {
   if ((HEAP32[i1 + 120 >> 2] & 1 | 0) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
  i10 = i8;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i1;
  i9 = i1;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i9 + 116 >> 2] = i10;
 i10 = i9 + 120 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle15setOutlineColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = i7;
 do {
  if ((HEAP32[i1 + 60 >> 2] | 0) == (i8 | 0)) {
   if ((HEAP32[i1 + 64 >> 2] & 1 | 0) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i9 = i1;
  i10 = i8;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i8 = i4 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i6;
  }
  HEAP32[i5 >> 2] = i1;
  i9 = i1;
  i10 = HEAP32[i2 >> 2] | 0;
 }
 HEAP32[i9 + 60 >> 2] = i10;
 i10 = i9 + 64 | 0;
 HEAP32[i10 >> 2] = HEAP32[i10 >> 2] & -2 | HEAP8[i2 + 4 | 0] & 1;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore34FillLayerStyleImagePropertyWrapper6equalsEPKNS_9FillLayerES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 4 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i6 = i2;
 } else {
  i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i6 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i7 = i3;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 255](i2) | 0;
 i4 = (i1 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 255](i3) | 0);
 return i4 | 0;
}
function __ZNK7WebCore25StyleImagePropertyWrapper6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i6 = i2;
 } else {
  i6 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i6 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i7 = i3;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 if ((i2 | 0) == (i3 | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if ((i2 | 0) == 0 | (i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 60 >> 2] & 255](i2) | 0;
 i4 = (i1 | 0) == (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 60 >> 2] & 255](i3) | 0);
 return i4 | 0;
}
function __ZN7WebCore11RenderStyle31setVisitedLinkBorderBottomColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 272 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 276 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 272 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle30setVisitedLinkBorderRightColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 256 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 260 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 256 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle29setVisitedLinkBorderLeftColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 248 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 252 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 248 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle29setVisitedLinkBackgroundColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 232 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 236 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 232 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle28setVisitedLinkBorderTopColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 264 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 268 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 264 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore19PropertyWrapperFlex5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, d8 = +0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i1 = i2 | 0;
 i7 = i4 + 20 | 0;
 i4 = i5 + 20 | 0;
 __ZNK7WebCore6Length5blendERKS0_d(i1, (HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0) + 12 | 0, (HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0) + 12 | 0, d6);
 __ZN7WebCore11RenderStyle12setFlexBasisENS_6LengthE(i3, i1);
 if ((HEAP8[i1 + 5 | 0] | 0) == 10) {
  __ZNK7WebCore6Length22decrementCalculatedRefEv(i1);
 }
 d8 = +HEAPF32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0) + 4 >> 2];
 __ZN7WebCore11RenderStyle11setFlexGrowEf(i3, d8 + (+HEAPF32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0) + 4 >> 2] - d8) * d6);
 d8 = +HEAPF32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 60 >> 2] | 0) + 8 >> 2];
 __ZN7WebCore11RenderStyle13setFlexShrinkEf(i3, d8 + (+HEAPF32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 60 >> 2] | 0) + 8 >> 2] - d8) * d6);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderStyle26setVisitedLinkOutlineColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 240 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 244 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 240 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle29setVisitedLinkTextStrokeColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 36 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 40 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 36 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle27setVisitedLinkTextFillColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 44 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 48 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 44 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle18setTextStrokeColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 12 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 8 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle16setTextFillColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 24 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 20 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15PropertyWrapperIsE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i9 = i4;
 } else {
  i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = FUNCTION_TABLE_ii[i9 & 255](i1) | 0;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i10 = i5;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = (_round(+(+(i4 << 16 >> 16 | 0) + +(((FUNCTION_TABLE_ii[i10 & 255](i1) | 0) << 16 >> 16) - (i4 << 16 >> 16) | 0) * d6)) | 0) & 65535;
 FUNCTION_TABLE_vii[i8 & 255](i7, i5);
 return;
}
function __ZN7WebCore11RenderStyle18setBackgroundColorERKNS_5ColorE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 52 >> 2] | 0) == (i7 | 0)) {
   if ((HEAP8[i1 + 56 | 0] & 1) != 0 ^ ((i7 & 0 | 0) != 0 | (HEAP32[i6 + 4 >> 2] & 1 | 0) != 0)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i8 = i1;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i6 = i4 | 0;
  i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i6 >> 2] = i7;
  }
  HEAP32[i5 >> 2] = i1;
  i8 = i1;
 }
 i1 = i8 + 52 | 0;
 i8 = i2;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 HEAP8[i1 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle21setPerspectiveOriginYENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 28 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
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
 i1 = i6 + 28 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle21setPerspectiveOriginXENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 20 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
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
 i1 = i6 + 20 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setShapeMarginENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 192 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
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
 i1 = i6 + 192 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterINS_9SVGLengthEE6equalsEPKNS_11RenderStyleES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = (i2 | 0) == 0;
 i8 = (i3 | 0) == 0;
 if (i7 & i8 | (i2 | 0) == (i3 | 0)) {
  i9 = 1;
  STACKTOP = i4;
  return i9 | 0;
 }
 if (i7 | i8) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i8 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i8 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i10 = i2;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i10 & 255](i5, i1);
 i1 = i3 + (HEAP32[i8 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i8 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i11 = i3;
 } else {
  i11 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 FUNCTION_TABLE_vii[i11 & 255](i6, i1);
 i9 = __ZNK7WebCore9SVGLengtheqERKS0_(i5, i6) | 0;
 STACKTOP = i4;
 return i9 | 0;
}
function __ZN7WebCore11RenderStyle13setTextIndentENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 24 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 72 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore22StyleRareInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore22StyleRareInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 72 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15PropertyWrapperItE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 16 | 0;
 i7 = i3 + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = i1 + 8 | 0;
 i1 = i4 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 & 1 | 0) == 0) {
  i9 = i4;
 } else {
  i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i4 - 1) >> 2] | 0;
 }
 i4 = (FUNCTION_TABLE_ii[i9 & 255](i1) | 0) & 65535;
 i1 = i5 + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i10 = i5;
 } else {
  i10 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i5 - 1) >> 2] | 0;
 }
 i5 = (_round(+(+(i4 | 0) + +(((FUNCTION_TABLE_ii[i10 & 255](i1) | 0) & 65535) - i4 | 0) * d6)) | 0) & 65535;
 FUNCTION_TABLE_vii[i8 & 255](i7, i5);
 return;
}
function __ZN7WebCore11RenderStyle16setPaddingBottomENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 92 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 92 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle15setPaddingRightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 76 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 76 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle15setMarginBottomENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 60 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 60 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setPaddingLeftENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 68 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 68 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setMarginRightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 44 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 44 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle13setPaddingTopENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 84 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 84 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle13setMarginLeftENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 36 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 36 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle12setMarginTopENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 52 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 52 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle9setBottomENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 28 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 28 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle8setRightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 12 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 12 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle6setTopENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 20 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 20 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle7setLeftENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 4 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_14NinePieceImageEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i3 = FUNCTION_TABLE_ii[i8 & 255](i1) | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == (i2 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = __ZNK7WebCore18NinePieceImageDataeqERKS0_(i1, i2) | 0;
 return i6 | 0;
}
function __ZN7WebCore11RenderStyle12setMinHeightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 36 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 36 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle12setMaxHeightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 44 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 44 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CSSPropertyAnimation15blendPropertiesEPKNS_13AnimationBaseENS_13CSSPropertyIDEPNS_11RenderStyleEPKS5_S8_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0;
 i8 = i2 - 1 | 0;
 if (i8 >>> 0 > 413 >>> 0) {
  i9 = 0;
  return i9 | 0;
 }
 i2 = HEAP8[i7 + 12 + i8 | 0] | 0;
 if (i2 << 24 >> 24 == -1) {
  i9 = 0;
  return i9 | 0;
 }
 i8 = i2 & 255;
 if ((HEAP32[i7 + 8 >> 2] | 0) >>> 0 <= i8 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i2 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0;
 if ((i2 | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 FUNCTION_TABLE_viiiiid[HEAP32[(HEAP32[i2 >> 2] | 0) + 16 >> 2] & 63](i2, i1, i3, i4, i5, d6);
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2) | 0)) {
  i9 = 1;
  return i9 | 0;
 }
 i9 = (HEAP8[i1 + 12 | 0] & 1) == 0;
 return i9 | 0;
}
function __ZN7WebCore11RenderStyle11setMinWidthENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 20 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 20 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle11setMaxWidthENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 28 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 28 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle9setHeightENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 12 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 12 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle8setWidthENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 4 | 0;
 if (__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_((HEAP32[i5 >> 2] | 0) + 4 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore12StyleBoxData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore12StyleBoxDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 4 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i5 = i1;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i1;
 HEAP8[i2 + 5 | 0] = 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderStyle15strokeDashArrayEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0;
 i2 = HEAP32[i3 + 32 >> 2] | 0;
 i4 = i3 + 36 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = i5;
 if ((i2 | 0) == 0) {
  return;
 }
 if (i2 >>> 0 > 536870911 >>> 0) {
  _WTFCrash();
 }
 i5 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 3) | 0;
 HEAP32[i7 >> 2] = i5 >>> 3;
 i7 = __ZN3WTF10fastMallocEj(i5) | 0;
 i5 = i7;
 HEAP32[i6 >> 2] = i5;
 if ((i7 | 0) == 0) {
  return;
 }
 i7 = HEAP32[i3 + 28 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i4 = i7 + (i3 << 3) | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i8 = i7;
  i9 = i5;
 }
 while (1) {
  __ZN7WebCore9SVGLengthC1ERKS0_(i9, i8);
  i5 = i8 + 8 | 0;
  if ((i5 | 0) == (i4 | 0)) {
   break;
  } else {
   i8 = i5;
   i9 = i9 + 8 | 0;
  }
 }
 return;
}
function __ZN7WebCore11RenderStyle19setStrokeDashOffsetENS_9SVGLengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 16 | 0;
 if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i1 >> 2] | 0) + 20 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i2 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) | 0) + 20 | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle14setStrokeWidthENS_9SVGLengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 16 | 0;
 if (__ZNK7WebCore9SVGLengtheqERKS0_((HEAP32[i1 >> 2] | 0) + 12 | 0, i2) | 0) {
  STACKTOP = i3;
  return;
 }
 i6 = i2;
 i2 = (__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) | 0) + 12 | 0;
 i1 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
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
   __ZN7WebCore9SVGLengthC1ERKS0_(i7, i6);
   i2 = i6 + 8 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
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
function __ZN7WebCore11RenderStyle22setShapeImageThresholdEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if (d2 < +1) {
   if (d2 <= +0) {
    d5 = +0;
    break;
   }
   d5 = d2;
  } else {
   d5 = +1;
  }
 } while (0);
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if (+HEAPF32[i1 + 208 >> 2] == d5) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 HEAPF32[i7 + 208 >> 2] = d5;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle10setOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, d5 = +0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 do {
  if (d2 < +1) {
   if (d2 <= +0) {
    d5 = +0;
    break;
   }
   d5 = d2;
  } else {
   d5 = +1;
  }
 } while (0);
 i6 = i1 + 20 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] == d5) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i6 >> 2] | 0;
  i8 = i4 | 0;
  i9 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i9 | 0) == 0) {
   __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i8 >> 2] = i9;
  }
  HEAP32[i6 >> 2] = i1;
  i7 = i1;
 }
 HEAPF32[i7 + 4 >> 2] = d5;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_19TransformOperationsEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = __ZNK7WebCore19TransformOperationseqERKS0_(i2, FUNCTION_TABLE_ii[i8 & 255](i1) | 0) | 0;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_16FilterOperationsEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = __ZNK7WebCore16FilterOperationseqERKS0_(i2, FUNCTION_TABLE_ii[i8 & 255](i1) | 0) | 0;
 return i6 | 0;
}
function __ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_9FillLayerES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 4 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = __ZNK7WebCore10LengthSizeeqERKS0_(i2, FUNCTION_TABLE_ii[i8 & 255](i1) | 0) | 0;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = __ZNK7WebCore10LengthSizeeqERKS0_(i2, FUNCTION_TABLE_ii[i8 & 255](i1) | 0) | 0;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIRKNS_9LengthBoxEE6equalsEPKNS_11RenderStyleES7_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = __ZNK7WebCore9LengthBoxeqERKS0_(i2, FUNCTION_TABLE_ii[i8 & 255](i1) | 0) | 0;
 return i6 | 0;
}
function __ZN7WebCore11RenderStyle20setBorderBottomWidthEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (((HEAP32[i1 + 128 >> 2] | 0) >>> 1 & 67108863 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 128 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i2 << 1 & 134217726;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle15setOutlineWidthEt(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 i6 = i2 & 65535;
 if (((HEAP32[i1 + 64 >> 2] | 0) >>> 1 & 67108863 | 0) == (i6 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i7 = i1;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i2 = i4 | 0;
  i8 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i2 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i7 = i1;
 }
 i1 = i7 + 64 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i6 << 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle19setBorderRightWidthEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (((HEAP32[i1 + 112 >> 2] | 0) >>> 1 & 67108863 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 112 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i2 << 1 & 134217726;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle18setBorderLeftWidthEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (((HEAP32[i1 + 104 >> 2] | 0) >>> 1 & 67108863 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 104 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i2 << 1 & 134217726;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle17setBorderTopWidthEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (((HEAP32[i1 + 120 >> 2] | 0) >>> 1 & 67108863 | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore17StyleSurroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore17StyleSurroundDataD2Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 120 | 0;
 HEAP32[i1 >> 2] = HEAP32[i1 >> 2] & -134217727 | i2 << 1 & 134217726;
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZN7WebCore11RenderStyle19setStrokeMiterLimitEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 16 | 0;
 if (+HEAPF32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) | 0) + 8 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle16setStrokeOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 16 | 0;
 if (+HEAPF32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 HEAPF32[(__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv(i1) | 0) + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterIPNS_17ClipPathOperationEE6equalsEPKNS_11RenderStyleES6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = (i2 | 0) == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0);
 return i6 | 0;
}
function __ZN7WebCore11RenderStyle14setFillOpacityEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore14SVGRenderStyle4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore14SVGRenderStyleD1Ev(i4);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 i1 = i6 + 12 | 0;
 if (+HEAPF32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
 HEAPF32[(__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv(i1) | 0) + 4 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore21PropertyWrapperGetterItE6equalsEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = i2 << 16 >> 16 == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0) << 16 >> 16;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIsE6equalsEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = i2 << 16 >> 16 == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0) << 16 >> 16;
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIPNS_10ShapeValueEE6equalsEPKNS_11RenderStyleES6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = (i2 | 0) == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0);
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterINS_11EVisibilityEE6equalsEPKNS_11RenderStyleES5_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = (i2 | 0) == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0);
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIjE6equalsEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = (i2 | 0) == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0);
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIiE6equalsEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 i2 = FUNCTION_TABLE_ii[i7 & 255](i1) | 0;
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i8 = i3;
 } else {
  i8 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = (i2 | 0) == (FUNCTION_TABLE_ii[i8 & 255](i1) | 0);
 return i6 | 0;
}
function __ZNK7WebCore21PropertyWrapperGetterIfE6equalsEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0;
 i4 = (i2 | 0) == 0;
 i5 = (i3 | 0) == 0;
 if (i4 & i5 | (i2 | 0) == (i3 | 0)) {
  i6 = 1;
  return i6 | 0;
 }
 if (i4 | i5) {
  i6 = 0;
  return i6 | 0;
 }
 i5 = i1 + 8 | 0;
 i1 = i2 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 & 1 | 0) == 0) {
  i7 = i2;
 } else {
  i7 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i2 - 1) >> 2] | 0;
 }
 d8 = +FUNCTION_TABLE_fi[i7 & 31](i1);
 i1 = i3 + (HEAP32[i5 + 4 >> 2] | 0) | 0;
 i3 = HEAP32[i5 >> 2] | 0;
 if ((i3 & 1 | 0) == 0) {
  i9 = i3;
 } else {
  i9 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i3 - 1) >> 2] | 0;
 }
 i6 = d8 == +FUNCTION_TABLE_fi[i9 & 31](i1);
 return i6 | 0;
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
function __ZN7WebCore11RenderStyle14setPerspectiveEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 20 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if (+HEAPF32[i1 + 16 >> 2] == d2) {
  STACKTOP = i3;
  return;
 }
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
 HEAPF32[i6 + 16 >> 2] = d2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderStyle16setOutlineOffsetEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 12 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i1 + 68 >> 2] | 0) == (i2 | 0)) {
  STACKTOP = i3;
  return;
 }
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i6 = i1;
 } else {
  __ZNK7WebCore19StyleBackgroundData4copyEv(i4, i1);
  i1 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i7 = i4 | 0;
  i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i8 | 0) == 0) {
   __ZN7WebCore9FillLayerD1Ev(i4 + 4 | 0);
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i8;
  }
  HEAP32[i5 >> 2] = i1;
  i6 = i1;
 }
 HEAP32[i6 + 68 >> 2] = i2;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore20CSSPropertyAnimation15propertiesEqualENS_13CSSPropertyIDEPKNS_11RenderStyleES4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0;
 i5 = i1 - 1 | 0;
 if (i5 >>> 0 > 413 >>> 0) {
  i6 = 1;
  return i6 | 0;
 }
 i1 = HEAP8[i4 + 12 + i5 | 0] | 0;
 if (i1 << 24 >> 24 == -1) {
  i6 = 1;
  return i6 | 0;
 }
 i5 = i1 & 255;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 <= i5 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[(HEAP32[i4 >> 2] | 0) + (i5 << 2) >> 2] | 0;
 if ((i1 | 0) == 0) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 63](i1, i2, i3) | 0;
 return i6 | 0;
}
function __ZN7WebCore11RenderStyle16accessMaskLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  i6 = i5 + 116 | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore25StyleRareNonInheritedData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore25StyleRareNonInheritedDataD1Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 i6 = i5 + 116 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore20CSSPropertyAnimation32animationOfPropertyIsAcceleratedENS_13CSSPropertyIDE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0;
 i3 = i1 - 1 | 0;
 if (i3 >>> 0 > 413 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = HEAP8[i2 + 12 + i3 | 0] | 0;
 if (i1 << 24 >> 24 == -1) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = i1 & 255;
 if ((HEAP32[i2 + 8 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i1 = HEAP32[(HEAP32[i2 >> 2] | 0) + (i3 << 2) >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 20 >> 2] & 255](i1) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderStyle22accessBackgroundLayersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 12 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i1 >> 2] | 0) == 1) {
  i5 = i1;
  i6 = i5 + 4 | 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 __ZNK7WebCore19StyleBackgroundData4copyEv(i3, i1);
 i1 = HEAP32[i3 >> 2] | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 i7 = i3 | 0;
 i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) == 0) {
  __ZN7WebCore9FillLayerD1Ev(i3 + 4 | 0);
  __ZN3WTF8fastFreeEPv(i3);
 } else {
  HEAP32[i7 >> 2] = i8;
 }
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 i6 = i5 + 4 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore9FillLayer13setSizeLengthENS_10LengthSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = i1 + 24 | 0;
 i4 = i2;
 i5 = i3;
 i6 = HEAP32[i4 >> 2] | 0;
 i7 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 HEAP32[i5 + 4 >> 2] = i7;
 if ((i6 & 0 | 0) == 0 & (i7 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i3 | 0);
 }
 i3 = i1 + 32 | 0;
 i1 = i2 + 8 | 0;
 i2 = i3;
 i7 = HEAP32[i1 >> 2] | 0;
 i6 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i7;
 HEAP32[i2 + 4 >> 2] = i6;
 if (!((i7 & 0 | 0) == 0 & (i6 & 65280 | 0) == 2560)) {
  return;
 }
 __ZNK7WebCore6Length22incrementCalculatedRefEv(i3);
 return;
}
function __ZN7WebCore20CSSPropertyAnimation37animatableShorthandsAffectingPropertyENS_13CSSPropertyIDE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0;
 _memset(i1 | 0, 0, 20) | 0;
 i4 = i3 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  return;
 }
 i5 = i3 | 0;
 i3 = 0;
 while (1) {
  __ZN7WebCoreL34gatherEnclosingShorthandPropertiesENS_13CSSPropertyIDEPNS_28AnimationPropertyWrapperBaseERN3WTF7HashSetIS0_NS3_7IntHashIjEENS3_10HashTraitsIS0_EEEE(i2, HEAP32[(HEAP32[i5 >> 2] | 0) + (i3 << 2) >> 2] | 0, i1) | 0;
  i3 = i3 + 1 | 0;
  if (i3 >>> 0 >= (HEAP32[i4 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore9FillLayer8setImageEN3WTF10PassRefPtrINS_10StyleImageEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 + 4 | 0;
   i3 = i2 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i2 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 i4 = i1 + 40 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] | 16777216;
 return;
}
function __ZNK7WebCore24ShorthandPropertyWrapper6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 i5 = i4 + (HEAP32[i1 + 16 >> 2] << 2) | 0;
 i1 = i4;
 while (1) {
  if ((i1 | 0) == (i5 | 0)) {
   i6 = 1;
   i7 = 5;
   break;
  }
  i4 = HEAP32[i1 >> 2] | 0;
  if (FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 63](i4, i2, i3) | 0) {
   i1 = i1 + 4 | 0;
  } else {
   i6 = 0;
   i7 = 6;
   break;
  }
 }
 if ((i7 | 0) == 5) {
  return i6 | 0;
 } else if ((i7 | 0) == 6) {
  return i6 | 0;
 }
 return 0;
}
function __ZNK7WebCore24ShorthandPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0, i8 = 0, i9 = 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 i8 = HEAP32[i1 + 16 >> 2] | 0;
 i1 = i7 + (i8 << 2) | 0;
 if ((i8 | 0) == 0) {
  return;
 } else {
  i9 = i7;
 }
 while (1) {
  i7 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viiiiid[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 63](i7, i2, i3, i4, i5, d6);
  i9 = i9 + 4 | 0;
  if ((i9 | 0) == (i1 | 0)) {
   break;
  }
 }
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
function __ZN7WebCore20CSSPropertyAnimation18getPropertyAtIndexEiRb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = __ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0;
 if ((i1 | 0) < 0) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP32[i3 + 8 >> 2] | 0) >>> 0 <= i1 >>> 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i1 << 2) >> 2] | 0;
 HEAP8[i2] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 255](i5) | 0) & 1;
 i4 = HEAP32[i5 + 4 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore22ShapeClipPathOperationD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 672;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 127](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore35PropertyWrapperVisitedAffectedColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 var i7 = 0;
 i7 = HEAP32[i1 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiiid[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 63](i7, i2, i3, i4, i5, d6);
 i7 = HEAP32[i1 + 12 >> 2] | 0;
 FUNCTION_TABLE_viiiiid[HEAP32[(HEAP32[i7 >> 2] | 0) + 16 >> 2] & 63](i7, i2, i3, i4, i5, d6);
 return;
}
function __ZN7WebCore35PropertyWrapperVisitedAffectedColorD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
  __ZN3WTF8fastFreeEPv(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 i3 = i1;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZNK7WebCore35PropertyWrapperVisitedAffectedColor6equalsEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i1 + 8 >> 2] | 0;
 if (!(FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 63](i4, i2, i3) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 i5 = FUNCTION_TABLE_iiii[HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] & 63](i4, i2, i3) | 0;
 return i5 | 0;
}
function __ZN7WebCore24ShorthandPropertyWrapperD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = i1 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  __ZN3WTF8fastFreeEPv(i4);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i4 = i1;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore22ShapeClipPathOperationD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 672;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 127](i3);
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
function __ZNK7WebCore11RenderStyle17borderBottomWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZNK7WebCore11RenderStyle16borderRightWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZNK7WebCore11RenderStyle15borderLeftWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZNK7WebCore11RenderStyle14borderTopWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 16 >> 2] | 0;
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
function __ZN7WebCore35PropertyWrapperVisitedAffectedColorD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 }
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] & 127](i2);
 return;
}
function __ZN7WebCore9FillLayer12setYPositionENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 16 | 0;
 if ((i3 | 0) != (i2 | 0)) {
  i4 = i2;
  i5 = i3;
  i3 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i3;
  HEAP8[i2 + 5 | 0] = 0;
 }
 i2 = i1 + 40 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | -2147483648;
 return;
}
function __ZN7WebCore9FillLayer12setXPositionENS_6LengthE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 8 | 0;
 if ((i3 | 0) != (i2 | 0)) {
  i4 = i2;
  i5 = i3;
  i3 = HEAP32[i4 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = i3;
  HEAP8[i2 + 5 | 0] = 0;
 }
 i2 = i1 + 40 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] | 1073741824;
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
function __ZN7WebCore24ShorthandPropertyWrapperD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 488;
 i2 = i1 + 16 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 return;
}
function __ZNK7WebCore22ShapeClipPathOperationeqERKNS_17ClipPathOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 16 >> 2] & 15](i1 | 0, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i1 + 12 >> 2] | 0) == (HEAP32[i2 + 12 >> 2] | 0);
 return i3 | 0;
}
function __ZNK7WebCore11RenderStyle26visitedLinkColumnRuleColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0) + 24 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle15columnRuleWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0) + 20 >> 2] | 0;
 if ((i2 & 1879048192) >>> 0 < 268435456 >>> 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2 >>> 1 & 65535;
 return i3 | 0;
}
function __ZNK7WebCore11RenderStyle16strokePaintColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 44 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle14fillPaintColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 12 >> 2] | 0) + 12 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle13lightingColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 32 >> 2] | 0) + 16 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle10floodColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 32 >> 2] | 0) + 4 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle9stopColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 28 >> 2] | 0) + 8 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle28visitedLinkBorderBottomColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 272 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle27visitedLinkBorderRightColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 256 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle26visitedLinkBorderLeftColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 248 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle26visitedLinkBackgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 232 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle26visitedLinkTextStrokeColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 24 >> 2] | 0) + 36 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle25visitedLinkBorderTopColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 264 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle15columnRuleColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 68 >> 2] | 0;
 i2 = HEAP32[i3 + 20 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 16 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore11RenderStyle24visitedLinkTextFillColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 24 >> 2] | 0) + 44 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle23visitedLinkOutlineColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 20 >> 2] | 0) + 240 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function viii___ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore11RenderStyle15backgroundColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 12 >> 2] | 0) + 52 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function viii___ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb(i1 | 0, i2 | 0, i3 | 0);
}
function __ZNK7WebCore11RenderStyle15textStrokeColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 24 >> 2] | 0) + 8 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle13textFillColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = (HEAP32[i2 + 24 >> 2] | 0) + 20 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore11RenderStyle13outlineOffsetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((HEAP32[i2 + 64 >> 2] & 2013265920 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 68 >> 2] | 0;
 return i3 | 0;
}
function __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  __ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev(i2 + 32 | 0);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
}
function __ZNK7WebCore11RenderStyle12outlineWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[i1 + 12 >> 2] | 0) + 64 >> 2] | 0;
 if ((i2 & 2013265920 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = i2 >>> 1 & 65535;
 return i3 | 0;
}
function __ZNK7WebCore11RenderStyle17borderBottomColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 + 128 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 124 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore11RenderStyle16borderRightColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 + 112 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 108 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore11RenderStyle15borderLeftColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 + 104 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 100 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function __ZNK7WebCore11RenderStyle14borderTopColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = HEAP32[i3 + 120 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 116 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function vii___ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderStyle12outlineColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 i2 = HEAP32[i3 + 64 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i3 + 60 >> 2];
 HEAP8[i1 + 4 | 0] = i2 & 1;
 return;
}
function vii___ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore17ClipPathOperation10isSameTypeERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 12 >> 2] & 255](i2) | 0;
 return (i3 | 0) == (HEAP32[i1 + 8 >> 2] | 0) | 0;
}
function __ZNK7WebCore15FilterOperation10isSameTypeERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 255](i2) | 0;
 return (i3 | 0) == (HEAP32[i1 + 8 >> 2] | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiiid(i1, i2, i3, i4, i5, i6, d7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 d7 = +d7;
 FUNCTION_TABLE_viiiiid[i1 & 63](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, +d7);
}
function dynCall_viiidii(i1, i2, i3, i4, d5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 i7 = i7 | 0;
 FUNCTION_TABLE_viiidii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0, i7 | 0);
}
function __ZN7WebCore15FilterOperation5blendEPKS0_dRKNS_10LayoutSizeEb(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function __ZN7WebCore11RenderStyle13setVisibilityENS_11EVisibilityE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 40 | 0;
 HEAP32[i3 >> 2] = HEAP32[i3 >> 2] & -6145 | i2 << 11 & 6144;
 return;
}
function __ZNK7WebCore26PassthroughFilterOperationeqERKNS_15FilterOperationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 24 >> 2] & 15](i1 | 0, i2) | 0;
}
function vii___ZN7WebCore11RenderStyle20setBorderImageSlicesENS_9LengthBoxE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle20setBorderImageSlicesENS_9LengthBoxE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11RenderStyle20setBorderImageOutsetENS_9LengthBoxE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle20setBorderImageOutsetENS_9LengthBoxE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderStyle18baselineShiftValueEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i1, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 32 >> 2] | 0) + 24 | 0);
 return;
}
function vii___ZN7WebCore11RenderStyle19setBorderImageWidthENS_9LengthBoxE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle19setBorderImageWidthENS_9LengthBoxE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderStyle16strokeDashOffsetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i1, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 20 | 0);
 return;
}
function dynCall_viiidi(i1, i2, i3, i4, d5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiidi[i1 & 3](i2 | 0, i3 | 0, i4 | 0, +d5, i6 | 0);
}
function vii___ZN7WebCore11RenderStyle19setVisitedLinkColorERKNS_5ColorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle19setVisitedLinkColorERKNS_5ColorE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderStyle11strokeWidthEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i1, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 16 >> 2] | 0) + 12 | 0);
 return;
}
function vii___ZN7WebCore11RenderStyle26setHorizontalBorderSpacingEs__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle26setHorizontalBorderSpacingEs(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderStyle7kerningEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore9SVGLengthC1ERKS0_(i1, (HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 | 0);
 return;
}
function vii___ZN7WebCore11RenderStyle24setVerticalBorderSpacingEs__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle24setVerticalBorderSpacingEs(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore11RenderStyle8setColorERKNS_5ColorE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderStyle8setColorERKNS_5ColorE(i1 | 0, i2 | 0);
}
function __ZN7WebCore15FilterOperation5blendEPKS0_db(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function vii___ZNK7WebCore11RenderStyle16visitedLinkColorEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderStyle16visitedLinkColorEv(i1 | 0, i2 | 0);
}
function dynCall_viiif(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 FUNCTION_TABLE_viiif[i1 & 1](i2 | 0, i3 | 0, i4 | 0, +d5);
}
function ii___ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore11RenderStyle21verticalBorderSpacingEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderStyle21verticalBorderSpacingEv(i1 | 0) | 0;
}
function vif___ZN7WebCore11RenderStyle16setLetterSpacingEf__wrapper(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore11RenderStyle16setLetterSpacingEf(i1 | 0, +d2);
}
function ii___ZNK7WebCore11RenderStyle19specifiedLineHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderStyle19specifiedLineHeightEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 63](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore20CSSPropertyAnimation16getNumPropertiesEv() {
 return HEAP32[(__ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv() | 0) + 8 >> 2] | 0;
}
function vif___ZN7WebCore11RenderStyle14setWordSpacingEf__wrapper(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore11RenderStyle14setWordSpacingEf(i1 | 0, +d2);
}
function __ZNK7WebCore11RenderStyle18maskBoxImageSourceEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 164 >> 2] | 0) + 8 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle17borderImageSourceEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0) + 8 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle16transformOriginZEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 72 >> 2] | 0) + 32 >> 2]);
}
function __ZNK7WebCore11RenderStyle16strokeMiterLimitEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0) + 8 >> 2]);
}
function __ZN7WebCore11RenderStyle25setZoomWithoutReturnValueEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore11RenderStyle7setZoomEf(i1, d2) | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle13strokeOpacityEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0) + 4 >> 2]);
}
function __ZNK7WebCore11RenderStyle12floodOpacityEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 32 >> 2] | 0) + 12 >> 2]);
}
function vif___ZN7WebCore11RenderStyle11setFontSizeEf__wrapper(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 __ZN7WebCore11RenderStyle11setFontSizeEf(i1 | 0, +d2);
}
function fi___ZNK7WebCore11RenderStyle16computedFontSizeEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore11RenderStyle16computedFontSizeEv(i1 | 0);
}
function __ZNK7WebCore11RenderStyle11stopOpacityEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 28 >> 2] | 0) + 4 >> 2]);
}
function __ZNK7WebCore11RenderStyle11fillOpacityEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 4 >> 2]);
}
function __ZNK7WebCore11RenderStyle11columnWidthEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0) + 4 >> 2]);
}
function ii___ZNK7WebCore11RenderStyle14listStyleImageEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderStyle14listStyleImageEv(i1 | 0) | 0;
}
function __ZNK7WebCore11RenderStyle11columnCountEv(i1) {
 i1 = i1 | 0;
 return HEAP16[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0) + 8 >> 1] | 0;
}
function __ZNK7WebCore11RenderStyle9columnGapEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 68 >> 2] | 0) + 12 >> 2]);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 7](i2 | 0, i3 | 0, i4 | 0);
}
function vii___ZNK7WebCore11RenderStyle5colorEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11RenderStyle5colorEv(i1 | 0, i2 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function fi___ZNK7WebCore11RenderStyle13letterSpacingEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore11RenderStyle13letterSpacingEv(i1 | 0);
}
function __ZNK7WebCore11RenderStyle17borderImageSlicesEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0) + 12 | 0;
}
function __ZNK7WebCore11RenderStyle17borderImageOutsetEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0) + 76 | 0;
}
function __ZNK7WebCore11RenderStyle16borderImageWidthEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 16 >> 2] | 0) + 132 >> 2] | 0) + 44 | 0;
}
function __ZNK7WebCore11RenderStyle16transformOriginYEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 72 >> 2] | 0) + 24 | 0;
}
function __ZNK7WebCore11RenderStyle16transformOriginXEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 72 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore11RenderStyle15strokePaintTypeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 16 >> 2] | 0) + 40 | 0;
}
function fi___ZNK7WebCore11RenderStyle11wordSpacingEv__wrapper(i1) {
 i1 = i1 | 0;
 return +__ZNK7WebCore11RenderStyle11wordSpacingEv(i1 | 0);
}
function __ZNK7WebCore11RenderStyle13fillPaintTypeEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 12 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore11RenderStyle19shapeImageThresholdEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 20 >> 2] | 0) + 208 >> 2]);
}
function __ZNK7WebCore11RenderStyle9transformEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 72 >> 2] | 0) + 4 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore11RenderStyle6filterEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0;
}
function __ZNK7WebCore11RenderStyle12shapeOutsideEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 188 >> 2] | 0;
}
function b7(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 abort(7);
}
function b3(i1, i2, i3, d4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(3);
}
function __ZNK7WebCore11RenderStyle11shapeInsideEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 184 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle11perspectiveEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 20 >> 2] | 0) + 16 >> 2]);
}
function __ZNK7WebCore11RenderStyle23borderBottomRightRadiusEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 184 | 0;
}
function __ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED1Ev(i1) {
 i1 = i1 | 0;
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
function __ZNK7WebCore11RenderStyle22borderBottomLeftRadiusEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 168 | 0;
}
function __ZNK7WebCore11RenderStyle10textShadowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 24 >> 2] | 0) + 60 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle9maskImageEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 120 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle9boxShadowEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 100 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle8clipPathEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 212 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle20borderTopRightRadiusEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 152 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore11RenderStyle19borderTopLeftRadiusEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 136 | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 255](i2 | 0, i3 | 0);
}
function __ZNK7WebCore11RenderStyle7orphansEv(i1) {
 i1 = i1 | 0;
 return HEAP16[(HEAP32[i1 + 24 >> 2] | 0) + 86 >> 1] | 0;
}
function __ZNK7WebCore11RenderStyle7opacityEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 20 >> 2] | 0) + 4 >> 2]);
}
function __ZNK7WebCore11RenderStyle6widowsEv(i1) {
 i1 = i1 | 0;
 return HEAP16[(HEAP32[i1 + 24 >> 2] | 0) + 84 >> 1] | 0;
}
function __ZNK7WebCore11RenderStyle18perspectiveOriginYEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 28 | 0;
}
function __ZNK7WebCore11RenderStyle18perspectiveOriginXEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 20 | 0;
}
function __ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle6zIndexEv(i1) {
 i1 = i1 | 0;
 return HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 60 >> 2] | 0;
}
function __ZNK7WebCore11RenderStyle4zoomEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[(HEAP32[i1 + 8 >> 2] | 0) + 40 >> 2]);
}
function __ZNK7WebCore11RenderStyle10visibilityEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 40 >> 2] | 0) >>> 11 & 3 | 0;
}
function __ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle16backgroundLayersEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 12 >> 2] | 0) + 4 | 0;
}
function __ZN7WebCore35PropertyWrapperAcceleratedTransformD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle13paddingBottomEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 92 | 0;
}
function __ZNK7WebCore11RenderStyle12maskBoxImageEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 164 | 0;
}
function __ZN7WebCore21LengthPropertyWrapperINS_6LengthEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperINS_11EVisibilityEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_vif(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 FUNCTION_TABLE_vif[i1 & 31](i2 | 0, +d3);
}
function __ZNK7WebCore35PropertyWrapperAcceleratedTransform22animationIsAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11RenderStyle12paddingRightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 76 | 0;
}
function __ZNK7WebCore11RenderStyle12marginBottomEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 60 | 0;
}
function __ZNK7WebCore11RenderStyle11shapeMarginEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 192 | 0;
}
function __ZN7WebCore33PropertyWrapperAcceleratedOpacityD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle11paddingLeftEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 68 | 0;
}
function __ZNK7WebCore11RenderStyle11marginRightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 44 | 0;
}
function __ZNK7WebCore11RenderStyle10maskLayersEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 20 >> 2] | 0) + 116 | 0;
}
function __ZN7WebCore32PropertyWrapperMaybeInvalidColorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore32PropertyWrapperAcceleratedFilterD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore33PropertyWrapperAcceleratedOpacity22animationIsAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11RenderStyle10textIndentEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 24 >> 2] | 0) + 72 | 0;
}
function __ZNK7WebCore11RenderStyle10paddingTopEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 84 | 0;
}
function __ZNK7WebCore11RenderStyle10marginLeftEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 36 | 0;
}
function __ZN7WebCore15PropertyWrapperINS_9SVGLengthEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore32PropertyWrapperAcceleratedFilter22animationIsAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11RenderStyle9marginTopEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 52 | 0;
}
function __ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function b9(i1, i2, i3, d4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 i5 = i5 | 0;
 abort(9);
}
function __ZNK7WebCore11RenderStyle9minHeightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 36 | 0;
}
function __ZNK7WebCore11RenderStyle9maxHeightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 44 | 0;
}
function __ZNK7WebCore11RenderStyle8minWidthEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 20 | 0;
}
function __ZNK7WebCore11RenderStyle8maxWidthEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 28 | 0;
}
function __ZNK7WebCore28AnimationPropertyWrapperBase22animationIsAcceleratedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderStyle6bottomEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 28 | 0;
}
function __ZN7WebCore26PassthroughFilterOperationD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderStyle6heightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 12 | 0;
}
function __ZNK7WebCore11RenderStyle5rightEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore25StyleImagePropertyWrapperD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore25FillLayersPropertyWrapperD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore11RenderStyle5widthEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 4 >> 2] | 0) + 4 | 0;
}
function __ZNK7WebCore11RenderStyle4leftEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 4 | 0;
}
function __ZNK7WebCore11RenderStyle3topEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 16 >> 2] | 0) + 20 | 0;
}
function __ZN7WebCore23PropertyWrapperSVGPaintD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore23PropertyWrapperClipPathD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore28AnimationPropertyWrapperBase18isShorthandWrapperEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore11RenderStyle4clipEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 8 >> 2] | 0) + 4 | 0;
}
function __ZN7WebCore34FillLayerStyleImagePropertyWrapperD0Ev(i1) {
 i1 = i1 | 0;
 __ZdlPv(i1);
 return;
}
function __ZN7WebCore21PropertyWrapperShadowD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20PropertyWrapperShapeD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore20PropertyWrapperColorD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function dynCall_fi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return +FUNCTION_TABLE_fi[i1 & 31](i2 | 0);
}
function __ZN7WebCore19PropertyWrapperFlexD0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore24ShorthandPropertyWrapper18isShorthandWrapperEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore17ClipPathOperation4typeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZN7WebCore15PropertyWrapperItED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperIsED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperIjED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperIiED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15PropertyWrapperIfED0Ev(i1) {
 i1 = i1 | 0;
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore15FilterOperation4typeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZNK7WebCore15FilterOperation25blendingNeedsRendererSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function b12(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 abort(12);
}
function __ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9FillLayer5imageEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore35PropertyWrapperAcceleratedTransformD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore34FillLayerStyleImagePropertyWrapperD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore21LengthPropertyWrapperINS_6LengthEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperINS_11EVisibilityEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
 return 0;
}
function __ZN7WebCore33PropertyWrapperAcceleratedOpacityD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore15FilterOperation14affectsOpacityEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore32PropertyWrapperMaybeInvalidColorD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore32PropertyWrapperAcceleratedFilterD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9FillLayer10sizeLengthEv(i1) {
 i1 = i1 | 0;
 return i1 + 24 | 0;
}
function __ZN7WebCore15PropertyWrapperINS_9SVGLengthEED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore9FillLayer9yPositionEv(i1) {
 i1 = i1 | 0;
 return i1 + 16 | 0;
}
function __ZNK7WebCore15FilterOperation11movesPixelsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore9FillLayer9xPositionEv(i1) {
 i1 = i1 | 0;
 return i1 + 8 | 0;
}
function __ZNK7WebCore15FilterOperation9isDefaultEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore26PassthroughFilterOperationD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore25StyleImagePropertyWrapperD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore25FillLayersPropertyWrapperD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore23PropertyWrapperSVGPaintD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore23PropertyWrapperClipPathD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b6(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(6);
}
function __ZN7WebCore21PropertyWrapperShadowD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore20PropertyWrapperShapeD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore20PropertyWrapperColorD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore19PropertyWrapperFlexD1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperItED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIsED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIjED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIiED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore15PropertyWrapperIfED1Ev(i1) {
 i1 = i1 | 0;
 return;
}
function b11(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(11);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
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
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
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
function b10(i1) {
 i1 = i1 | 0;
 abort(10);
 return +0;
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
  var FUNCTION_TABLE_ii = [b0,b0,__ZNK7WebCore17ClipPathOperation4typeEv,b0,__ZNK7WebCore11RenderStyle11shapeInsideEv,b0,__ZNK7WebCore11RenderStyle8maxWidthEv,b0,__ZNK7WebCore11RenderStyle5rightEv,b0,__ZNK7WebCore11RenderStyle12outlineWidthEv,b0,__ZNK7WebCore11RenderStyle18maskBoxImageSourceEv,b0,__ZNK7WebCore11RenderStyle7orphansEv,b0,__ZNK7WebCore11RenderStyle17borderImageOutsetEv,b0,__ZNK7WebCore11RenderStyle5widthEv,b0,__ZNK7WebCore11RenderStyle17borderImageSlicesEv,b0,__ZNK7WebCore9FillLayer9yPositionEv,b0,__ZNK7WebCore11RenderStyle10paddingTopEv,b0,__ZNK7WebCore35PropertyWrapperAcceleratedTransform22animationIsAcceleratedEv,b0,__ZNK7WebCore11RenderStyle6zIndexEv
  ,b0,__ZNK7WebCore11RenderStyle23borderBottomRightRadiusEv,b0,__ZNK7WebCore15FilterOperation4typeEv,b0,__ZNK7WebCore15FilterOperation11movesPixelsEv,b0,__ZNK7WebCore11RenderStyle10visibilityEv,b0,ii___ZNK7WebCore11RenderStyle19specifiedLineHeightEv__wrapper,b0,__ZNK7WebCore11RenderStyle10textShadowEv,b0,__ZNK7WebCore11RenderStyle16transformOriginXEv,b0,__ZNK7WebCore11RenderStyle18perspectiveOriginXEv,b0,__ZNK7WebCore11RenderStyle9boxShadowEv,b0,__ZNK7WebCore11RenderStyle14borderTopWidthEv,b0,__ZNK7WebCore28AnimationPropertyWrapperBase18isShorthandWrapperEv,b0,__ZNK7WebCore15FilterOperation25blendingNeedsRendererSizeEv,b0,__ZNK7WebCore11RenderStyle9marginTopEv,b0,__ZNK7WebCore11RenderStyle6widowsEv,b0,__ZNK7WebCore11RenderStyle17borderBottomWidthEv
  ,b0,__ZNK7WebCore11RenderStyle6filterEv,b0,__ZNK7WebCore11RenderStyle10maskLayersEv,b0,__ZNK7WebCore11RenderStyle9maskImageEv,b0,__ZN7WebCore11RenderStyle22accessBackgroundLayersEv,b0,__ZNK7WebCore32PropertyWrapperAcceleratedFilter22animationIsAcceleratedEv,b0,__ZNK7WebCore11RenderStyle15borderLeftWidthEv,b0,__ZNK7WebCore11RenderStyle13fillPaintTypeEv,b0,__ZNK7WebCore11RenderStyle9minHeightEv,b0,ii___ZNK7WebCore11RenderStyle23horizontalBorderSpacingEv__wrapper,b0,__ZNK7WebCore11RenderStyle12paddingRightEv,b0,__ZNK7WebCore15FilterOperation14affectsOpacityEv,b0,__ZN7WebCore11RenderStyle16accessMaskLayersEv,b0,__ZNK7WebCore11RenderStyle6heightEv,b0,__ZNK7WebCore11RenderStyle12shapeOutsideEv,b0,__ZNK7WebCore33PropertyWrapperAcceleratedOpacity22animationIsAcceleratedEv
  ,b0,__ZNK7WebCore11RenderStyle16borderRightWidthEv,b0,__ZNK7WebCore11RenderStyle11paddingLeftEv,b0,__ZNK7WebCore11RenderStyle11columnCountEv,b0,__ZNK7WebCore11RenderStyle16backgroundLayersEv,b0,__ZNK7WebCore11RenderStyle16transformOriginYEv,b0,__ZNK7WebCore11RenderStyle11marginRightEv,b0,__ZNK7WebCore11RenderStyle11shapeMarginEv,b0,__ZNK7WebCore11RenderStyle3topEv,b0,__ZNK7WebCore28AnimationPropertyWrapperBase22animationIsAcceleratedEv,b0,__ZNK7WebCore11RenderStyle9maxHeightEv,b0,__ZNK7WebCore15FilterOperation9isDefaultEv,b0,__ZNK7WebCore9FillLayer10sizeLengthEv,b0,__ZNK7WebCore11RenderStyle10marginLeftEv,b0,__ZNK7WebCore11RenderStyle20borderTopRightRadiusEv,b0,ii___ZNK7WebCore11RenderStyle21verticalBorderSpacingEv__wrapper
  ,b0,__ZNK7WebCore9FillLayer9xPositionEv,b0,__ZNK7WebCore11RenderStyle6bottomEv,b0,__ZNK7WebCore11RenderStyle13outlineOffsetEv,b0,__ZNK7WebCore11RenderStyle4clipEv,b0,__ZNK7WebCore11RenderStyle18perspectiveOriginYEv,b0,__ZNK7WebCore11RenderStyle10textIndentEv,b0,__ZNK7WebCore11RenderStyle12maskBoxImageEv,b0,__ZNK7WebCore11RenderStyle13paddingBottomEv,b0,__ZNK7WebCore11RenderStyle8minWidthEv,b0,__ZNK7WebCore11RenderStyle8clipPathEv,b0,__ZNK7WebCore11RenderStyle15columnRuleWidthEv,b0,__ZNK7WebCore11RenderStyle22borderBottomLeftRadiusEv,b0,__ZNK7WebCore11RenderStyle15strokePaintTypeEv,b0,__ZNK7WebCore11RenderStyle19borderTopLeftRadiusEv,b0,__ZNK7WebCore11RenderStyle4leftEv
  ,b0,__ZNK7WebCore11RenderStyle16borderImageWidthEv,b0,__ZNK7WebCore11RenderStyle12marginBottomEv,b0,__ZNK7WebCore24ShorthandPropertyWrapper18isShorthandWrapperEv,b0,__ZNK7WebCore11RenderStyle9transformEv,b0,__ZNK7WebCore11RenderStyle17borderImageSourceEv,b0,ii___ZNK7WebCore11RenderStyle14listStyleImageEv__wrapper,b0,__ZNK7WebCore9FillLayer5imageEv,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0
  ,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0,b0];
  var FUNCTION_TABLE_vif = [b1,b1,__ZN7WebCore11RenderStyle14setStopOpacityEf,b1,__ZN7WebCore11RenderStyle12setColumnGapEf,b1,__ZN7WebCore11RenderStyle14setPerspectiveEf,b1,__ZN7WebCore11RenderStyle25setZoomWithoutReturnValueEf,b1,__ZN7WebCore11RenderStyle10setOpacityEf,b1,__ZN7WebCore11RenderStyle22setShapeImageThresholdEf,b1,__ZN7WebCore11RenderStyle15setFloodOpacityEf,b1,__ZN7WebCore11RenderStyle19setStrokeMiterLimitEf,b1,vif___ZN7WebCore11RenderStyle14setWordSpacingEf__wrapper,b1,__ZN7WebCore11RenderStyle14setFillOpacityEf,b1,__ZN7WebCore11RenderStyle16setStrokeOpacityEf,b1,vif___ZN7WebCore11RenderStyle11setFontSizeEf__wrapper,b1,vif___ZN7WebCore11RenderStyle16setLetterSpacingEf__wrapper,b1,__ZN7WebCore11RenderStyle14setColumnWidthEf
  ,b1,__ZN7WebCore11RenderStyle19setTransformOriginZEf,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore32PropertyWrapperMaybeInvalidColorD1Ev,b2,__ZN7WebCore25StyleImagePropertyWrapperD0Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED1Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_6LengthEED0Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED0Ev,b2,__ZN7WebCore34FillLayerStyleImagePropertyWrapperD0Ev,b2,__ZN7WebCore15PropertyWrapperIsED0Ev,b2,__ZN7WebCore15PropertyWrapperIjED0Ev,b2,__ZN7WebCore33PropertyWrapperAcceleratedOpacityD0Ev,b2,__ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED0Ev,b2,__ZN7WebCore35PropertyWrapperAcceleratedTransformD1Ev,b2,__ZN7WebCore20PropertyWrapperShapeD1Ev,b2,__ZN7WebCore21PropertyWrapperShadowD1Ev,b2,__ZN7WebCore33PropertyWrapperAcceleratedOpacityD1Ev
  ,b2,__ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED1Ev,b2,__ZN7WebCore22ShapeClipPathOperationD0Ev,b2,__ZN7WebCore23PropertyWrapperClipPathD1Ev,b2,__ZN7WebCore25FillLayersPropertyWrapperD0Ev,b2,__ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED1Ev,b2,__ZN7WebCore21PropertyWrapperShadowD0Ev,b2,__ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED0Ev,b2,__ZN7WebCore19PropertyWrapperFlexD0Ev,b2,__ZN7WebCore15PropertyWrapperItED0Ev,b2,__ZN7WebCore15PropertyWrapperINS_11EVisibilityEED1Ev,b2,__ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED1Ev,b2,__ZN7WebCore19PropertyWrapperFlexD1Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_6LengthEED1Ev,b2,__ZN7WebCore15PropertyWrapperINS_9SVGLengthEED0Ev,b2,__ZN7WebCore15PropertyWrapperIiED1Ev
  ,b2,__ZN7WebCore35PropertyWrapperVisitedAffectedColorD0Ev,b2,__ZN7WebCore25StyleImagePropertyWrapperD1Ev,b2,__ZN7WebCore15PropertyWrapperIjED1Ev,b2,__ZN7WebCore30CSSPropertyAnimationWrapperMapC2Ev,b2,__ZN7WebCore15PropertyWrapperINS_9SVGLengthEED1Ev,b2,__ZN7WebCore20PropertyWrapperShapeD0Ev,b2,__ZN7WebCore32PropertyWrapperAcceleratedFilterD1Ev,b2,__ZN7WebCore15PropertyWrapperIfED0Ev,b2,__ZN7WebCore20PropertyWrapperColorD0Ev,b2,__ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED0Ev,b2,__ZN7WebCore32PropertyWrapperAcceleratedFilterD0Ev,b2,__ZN7WebCore26PassthroughFilterOperationD1Ev,b2,__ZN7WebCore22ShapeClipPathOperationD1Ev,b2,__ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED1Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED1Ev
  ,b2,__ZN7WebCore26PassthroughFilterOperationD0Ev,b2,__ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED0Ev,b2,__ZN7WebCore35PropertyWrapperVisitedAffectedColorD1Ev,b2,__ZN7WebCore23PropertyWrapperSVGPaintD0Ev,b2,__ZN7WebCore34FillLayerStyleImagePropertyWrapperD1Ev,b2,__ZN7WebCore24ShorthandPropertyWrapperD0Ev,b2,__ZN7WebCore35PropertyWrapperAcceleratedTransformD0Ev,b2,__ZN7WebCore23PropertyWrapperSVGPaintD1Ev,b2,__ZN7WebCore15PropertyWrapperIfED1Ev,b2,__ZN7WebCore15PropertyWrapperIiED0Ev,b2,__ZN7WebCore20PropertyWrapperColorD1Ev,b2,__ZN7WebCore24ShorthandPropertyWrapperD1Ev,b2,__ZN7WebCore15PropertyWrapperItED1Ev,b2,__ZN7WebCore15PropertyWrapperINS_11EVisibilityEED0Ev,b2,__ZN7WebCore25FillLayersPropertyWrapperD1Ev
  ,b2,__ZN7WebCore32PropertyWrapperMaybeInvalidColorD0Ev,b2,__ZN7WebCore23PropertyWrapperClipPathD0Ev,b2,__ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED0Ev,b2,__ZN7WebCore15PropertyWrapperIsED1Ev,b2];
  var FUNCTION_TABLE_viiidii = [b3,b3,__ZN7WebCore15FilterOperation5blendEPKS0_dRKNS_10LayoutSizeEb,b3];
  var FUNCTION_TABLE_vii = [b4,b4,__ZNK7WebCore11RenderStyle16borderRightColorEv,b4,__ZNK7WebCore11RenderStyle27visitedLinkBorderRightColorEv,b4,__ZN7WebCore11RenderStyle19setStrokePaintColorERKNS_5ColorE,b4,__ZNK7WebCore11RenderStyle26visitedLinkTextStrokeColorEv,b4,vii___ZN7WebCore11RenderStyle20setBorderImageOutsetENS_9LengthBoxE__wrapper,b4,__ZN7WebCore11RenderStyle16setOutlineOffsetEi,b4,__ZN7WebCore11RenderStyle29setVisitedLinkTextStrokeColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle12setMaxHeightENS_6LengthE,b4,__ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE,b4,__ZNK7WebCore11RenderStyle28visitedLinkBorderBottomColorEv,b4,__ZN7WebCore11RenderStyle31setVisitedLinkBorderBottomColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle15setMarginBottomENS_6LengthE,b4,__ZN7WebCore11RenderStyle16setLightingColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle29setVisitedLinkBorderLeftColorERKNS_5ColorE
  ,b4,__ZN7WebCore11RenderStyle10setOrphansEs,b4,__ZN7WebCore9FillLayer12setXPositionENS_6LengthE,b4,__ZN7WebCore11RenderStyle18setColumnRuleWidthEt,b4,__ZN7WebCore11RenderStyle18setTextStrokeColorERKNS_5ColorE,b4,__ZNK7WebCore11RenderStyle26visitedLinkColumnRuleColorEv,b4,vii___ZN7WebCore11RenderStyle13setLineHeightENS_6LengthE__wrapper,b4,vii___ZN7WebCore11RenderStyle20setBorderImageSlicesENS_9LengthBoxE__wrapper,b4,__ZNK7WebCore11RenderStyle24visitedLinkTextFillColorEv,b4,__ZNK7WebCore11RenderStyle23visitedLinkOutlineColorEv,b4,__ZN7WebCore11RenderStyle18setBorderLeftColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle21setBaselineShiftValueENS_9SVGLengthE,b4,vii___ZN7WebCore11RenderStyle8setColorERKNS_5ColorE__wrapper,b4,__ZN7WebCore11RenderStyle26setBorderBottomRightRadiusENS_10LengthSizeE,b4,__ZN7WebCore11RenderStyle12setMaskImageEN3WTF10PassRefPtrINS_10StyleImageEEE,b4,vii___ZNK7WebCore11RenderStyle5colorEv__wrapper
  ,b4,__ZN7WebCore11RenderStyle14setPaddingLeftENS_6LengthE,b4,__ZN7WebCore11RenderStyle18setBackgroundColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE,b4,vii___ZN7WebCore11RenderStyle20setBorderImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE__wrapper,b4,__ZNK7WebCore11RenderStyle13textFillColorEv,b4,__ZN7WebCore11RenderStyle9setHeightENS_6LengthE,b4,__ZN7WebCore11RenderStyle13setVisibilityENS_11EVisibilityE,b4,__ZN7WebCore11RenderStyle13setMarginLeftENS_6LengthE,b4,__ZN7WebCore11RenderStyle9setBottomENS_6LengthE,b4,__ZN7WebCore11RenderStyle12setMinHeightENS_6LengthE,b4,__ZNK7WebCore11RenderStyle13lightingColorEv,b4,__ZNK7WebCore11RenderStyle10floodColorEv,b4,__ZN7WebCore9FillLayer12setYPositionENS_6LengthE,b4,__ZN7WebCore11RenderStyle13setTextIndentENS_6LengthE,b4,__ZN7WebCore11RenderStyle23setBorderTopRightRadiusENS_10LengthSizeE
  ,b4,__ZN7WebCore11RenderStyle20setBorderBottomColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle20setBorderBottomWidthEj,b4,__ZNK7WebCore11RenderStyle15strokeDashArrayEv,b4,__ZN7WebCore11RenderStyle29setVisitedLinkBackgroundColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE,b4,__ZN7WebCore11RenderStyle15setOutlineWidthEt,b4,vii___ZN7WebCore11RenderStyle17setListStyleImageEN3WTF10PassRefPtrINS_10StyleImageEEE__wrapper,b4,__ZN7WebCore11RenderStyle15setShapeOutsideEN3WTF10PassRefPtrINS_10ShapeValueEEE,b4,__ZN7WebCore11RenderStyle18setStrokeDashArrayEN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEE,b4,__ZN7WebCore11RenderStyle28setVisitedLinkBorderTopColorERKNS_5ColorE,b4,vii___ZN7WebCore11RenderStyle24setVerticalBorderSpacingEs__wrapper,b4,__ZNK7WebCore11RenderStyle9stopColorEv,b4,__ZN7WebCore11RenderStyle14setMarginRightENS_6LengthE,b4,__ZNK7WebCore11RenderStyle7kerningEv,b4,__ZN7WebCore11RenderStyle15setMaskBoxImageERKNS_14NinePieceImageE
  ,b4,__ZN7WebCore11RenderStyle22setBorderTopLeftRadiusENS_10LengthSizeE,b4,__ZN7WebCore11RenderStyle21setPerspectiveOriginYENS_6LengthE,b4,__ZN7WebCore11RenderStyle12setMarginTopENS_6LengthE,b4,__ZNK7WebCore11RenderStyle16strokeDashOffsetEv,b4,__ZNK7WebCore11RenderStyle14borderTopColorEv,b4,__ZN7WebCore11RenderStyle30setVisitedLinkBorderRightColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle18setColumnRuleColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle21setPerspectiveOriginXENS_6LengthE,b4,__ZN7WebCore11RenderStyle14setColumnCountEt,b4,__ZNK7WebCore11RenderStyle14fillPaintColorEv,b4,__ZN7WebCore11RenderStyle16setTextFillColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle8setRightENS_6LengthE,b4,__ZNK7WebCore11RenderStyle26visitedLinkBackgroundColorEv,b4,__ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE,b4,__ZN7WebCore11RenderStyle13setFloodColorERKNS_5ColorE
  ,b4,__ZN7WebCore11RenderStyle10setKerningENS_9SVGLengthE,b4,__ZNK7WebCore11RenderStyle17borderBottomColorEv,b4,__ZN7WebCore11RenderStyle8setWidthENS_6LengthE,b4,__ZN7WebCore11RenderStyle29setVisitedLinkColumnRuleColorERKNS_5ColorE,b4,__ZNK7WebCore11RenderStyle26visitedLinkBorderLeftColorEv,b4,__ZN7WebCore9FillLayer13setSizeLengthENS_10LengthSizeE,b4,__ZN7WebCore11RenderStyle16setPaddingBottomENS_6LengthE,b4,__ZNK7WebCore11RenderStyle15backgroundColorEv,b4,vii___ZN7WebCore11RenderStyle26setHorizontalBorderSpacingEs__wrapper,b4,__ZN7WebCore11RenderStyle18setBorderLeftWidthEj,b4,__ZN7WebCore11RenderStyle25setBorderBottomLeftRadiusENS_10LengthSizeE,b4,__ZN7WebCore9FillLayer8setImageEN3WTF10PassRefPtrINS_10StyleImageEEE,b4,__ZNK7WebCore11RenderStyle16strokePaintColorEv,b4,__ZNK7WebCore11RenderStyle11strokeWidthEv,b4,vii___ZN7WebCore11RenderStyle19setBorderImageWidthENS_9LengthBoxE__wrapper
  ,b4,__ZN7WebCore11RenderStyle17setBorderTopWidthEj,b4,__ZN7WebCore11RenderStyle26setVisitedLinkOutlineColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle27setVisitedLinkTextFillColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle7setClipENS_9LengthBoxE,b4,__ZN7WebCore11RenderStyle17setFillPaintColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle7setLeftENS_6LengthE,b4,__ZNK7WebCore11RenderStyle25visitedLinkBorderTopColorEv,b4,__ZN7WebCore11RenderStyle14setStrokeWidthENS_9SVGLengthE,b4,__ZNK7WebCore11RenderStyle12outlineColorEv,b4,__ZNK7WebCore11RenderStyle15columnRuleColorEv,b4,__ZN7WebCore11RenderStyle15setPaddingRightENS_6LengthE,b4,__ZN7WebCore11RenderStyle21setMaskBoxImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE,b4,__ZN7WebCore11RenderStyle9setZIndexEi,b4,__ZN7WebCore11RenderStyle11setClipPathEN3WTF10PassRefPtrINS_17ClipPathOperationEEE,b4,__ZN7WebCore11RenderStyle11setMaxWidthENS_6LengthE
  ,b4,__ZN7WebCore11RenderStyle13setPaddingTopENS_6LengthE,b4,vii___ZNK7WebCore11RenderStyle16visitedLinkColorEv__wrapper,b4,__ZN7WebCore11RenderStyle17setBorderTopColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle11setMinWidthENS_6LengthE,b4,__ZN7WebCore11RenderStyle15setOutlineColorERKNS_5ColorE,b4,vii___ZN7WebCore11RenderStyle19setVisitedLinkColorERKNS_5ColorE__wrapper,b4,__ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE,b4,__ZN7WebCore11RenderStyle6setTopENS_6LengthE,b4,__ZN7WebCore11RenderStyle19setBorderRightColorERKNS_5ColorE,b4,__ZN7WebCore11RenderStyle19setBorderRightWidthEj,b4,__ZN7WebCore11RenderStyle19setStrokeDashOffsetENS_9SVGLengthE,b4,__ZN7WebCore11RenderStyle9setWidowsEs,b4,__ZNK7WebCore11RenderStyle18baselineShiftValueEv,b4,__ZN7WebCore11RenderStyle12setStopColorERKNS_5ColorE,b4,__ZNK7WebCore11RenderStyle15borderLeftColorEv
  ,b4,__ZNK7WebCore11RenderStyle15textStrokeColorEv,b4,__ZN7WebCore11RenderStyle14setShapeMarginENS_6LengthE,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4];
  var FUNCTION_TABLE_iiii = [b5,b5,__ZNK7WebCore32PropertyWrapperMaybeInvalidColor6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_16FilterOperationsEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore19PropertyWrapperFlex6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperGetterItE6equalsEPKNS_11RenderStyleES4_,b5,__ZNK7WebCore21PropertyWrapperGetterIfE6equalsEPKNS_11RenderStyleES4_,b5,__ZNK7WebCore21PropertyWrapperGetterINS_9SVGLengthEE6equalsEPKNS_11RenderStyleES5_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_19TransformOperationsEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_9FillLayerES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIjE6equalsEPKNS_11RenderStyleES4_,b5,__ZNK7WebCore24ShorthandPropertyWrapper6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperGetterIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE6equalsEPKNS_11RenderStyleES9_,b5,__ZNK7WebCore23PropertyWrapperSVGPaint6equalsEPKNS_11RenderStyleES3_
  ,b5,__ZNK7WebCore21PropertyWrapperGetterIPNS_17ClipPathOperationEE6equalsEPKNS_11RenderStyleES6_,b5,__ZNK7WebCore21PropertyWrapperGetterINS_5ColorEE6equalsEPKNS_11RenderStyleES5_,b5,__ZNK7WebCore25FillLayersPropertyWrapper6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore25StyleImagePropertyWrapper6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperShadow6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_14NinePieceImageEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIRKNS_9LengthBoxEE6equalsEPKNS_11RenderStyleES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIPNS_10ShapeValueEE6equalsEPKNS_11RenderStyleES6_,b5,__ZNK7WebCore21PropertyWrapperGetterIsE6equalsEPKNS_11RenderStyleES4_,b5,__ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_9FillLayerES7_,b5,__ZNK7WebCore21PropertyWrapperGetterIiE6equalsEPKNS_11RenderStyleES4_,b5,__ZNK7WebCore35PropertyWrapperVisitedAffectedColor6equalsEPKNS_11RenderStyleES3_,b5,__ZNK7WebCore21PropertyWrapperGetterINS_11EVisibilityEE6equalsEPKNS_11RenderStyleES5_,b5,__ZNK7WebCore34FillLayerStyleImagePropertyWrapper6equalsEPKNS_9FillLayerES3_,b5,b5
  ,b5,b5,b5,b5,b5];
  var FUNCTION_TABLE_viii = [b6,b6,viii___ZN7WebCore11RenderStyle12setBoxShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb__wrapper,b6,viii___ZN7WebCore11RenderStyle13setTextShadowEN3WTF10PassOwnPtrINS_10ShadowDataEEEb__wrapper,b6,b6,b6];
  var FUNCTION_TABLE_viiiiid = [b7,b7,__ZNK7WebCore24ShorthandPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperIRKNS_14NinePieceImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS8_SB_d,b7,__ZNK7WebCore35PropertyWrapperVisitedAffectedColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperIsE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d,b7,__ZNK7WebCore25RefCountedPropertyWrapperINS_10ShapeValueEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore32PropertyWrapperMaybeInvalidColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore21LengthPropertyWrapperINS_9LengthBoxEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore25RefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore21PropertyWrapperShadow5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore19PropertyWrapperFlex5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperIiE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d,b7,__ZNK7WebCore21LengthPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore24FillLayerPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d,b7,__ZNK7WebCore33PropertyWrapperAcceleratedOpacity5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d
  ,b7,__ZNK7WebCore23PropertyWrapperSVGPaint5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperIfE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d,b7,__ZNK7WebCore20PropertyWrapperColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperItE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d,b7,__ZNK7WebCore21LengthPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d,b7,__ZNK7WebCore25RefCountedPropertyWrapperINS_17ClipPathOperationEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore35PropertyWrapperAcceleratedTransform5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperINS_11EVisibilityEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d,b7,__ZNK7WebCore34FillLayerRefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d,b7,__ZNK7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKSA_SD_d,b7,__ZNK7WebCore25FillLayersPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore32PropertyWrapperAcceleratedFilter5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d,b7,__ZNK7WebCore15PropertyWrapperIjE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d,b7,__ZNK7WebCore15PropertyWrapperINS_9SVGLengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d
  ,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_v = [b8,b8];
  var FUNCTION_TABLE_viiidi = [b9,b9,__ZN7WebCore15FilterOperation5blendEPKS0_db,b9];
  var FUNCTION_TABLE_fi = [b10,b10,__ZNK7WebCore11RenderStyle11fillOpacityEv,b10,__ZNK7WebCore11RenderStyle19shapeImageThresholdEv,b10,__ZNK7WebCore11RenderStyle13strokeOpacityEv,b10,__ZNK7WebCore11RenderStyle9columnGapEv,b10,__ZNK7WebCore11RenderStyle12floodOpacityEv,b10,fi___ZNK7WebCore11RenderStyle16computedFontSizeEv__wrapper,b10,__ZNK7WebCore11RenderStyle11perspectiveEv,b10,__ZNK7WebCore11RenderStyle4zoomEv,b10,__ZNK7WebCore11RenderStyle16strokeMiterLimitEv,b10,__ZNK7WebCore11RenderStyle7opacityEv,b10,fi___ZNK7WebCore11RenderStyle11wordSpacingEv__wrapper,b10,__ZNK7WebCore11RenderStyle11columnWidthEv,b10,__ZNK7WebCore11RenderStyle11stopOpacityEv,b10,__ZNK7WebCore11RenderStyle16transformOriginZEv
  ,b10,fi___ZNK7WebCore11RenderStyle13letterSpacingEv__wrapper,b10];
  var FUNCTION_TABLE_iii = [b11,b11,__ZNK7WebCore17ClipPathOperation10isSameTypeERKS0_,b11,__ZNK7WebCore22ShapeClipPathOperationeqERKNS_17ClipPathOperationE,b11,__ZNK7WebCore26PassthroughFilterOperationeqERKNS_15FilterOperationE,b11,__ZNK7WebCore15FilterOperation10isSameTypeERKS0_,b11,b11,b11,b11,b11,b11,b11];
  var FUNCTION_TABLE_viiif = [b12,b12];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_ii: dynCall_ii, dynCall_vif: dynCall_vif, dynCall_vi: dynCall_vi, dynCall_viiidii: dynCall_viiidii, dynCall_vii: dynCall_vii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_viiiiid: dynCall_viiiiid, dynCall_v: dynCall_v, dynCall_viiidi: dynCall_viiidi, dynCall_fi: dynCall_fi, dynCall_iii: dynCall_iii, dynCall_viiif: dynCall_viiif };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_ii": invoke_ii, "invoke_vif": invoke_vif, "invoke_vi": invoke_vi, "invoke_viiidii": invoke_viiidii, "invoke_vii": invoke_vii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_viiiiid": invoke_viiiiid, "invoke_v": invoke_v, "invoke_viiidi": invoke_viiidi, "invoke_fi": invoke_fi, "invoke_iii": invoke_iii, "invoke_viiif": invoke_viiif, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_round": _round, "_llvm_lifetime_start": _llvm_lifetime_start, "_fmod": _fmod, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE": __ZTVN7WebCore17CSSCrossfadeValue30CrossfadeSubimageObserverProxyE, "__ZTVN7WebCore19CSSFilterImageValue27FilterSubimageObserverProxyE": __ZTVN7WebCore19CSSFilterImageValue27FilterSubimageObserverProxyE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_vif = Module["dynCall_vif"] = asm["dynCall_vif"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiidii = Module["dynCall_viiidii"] = asm["dynCall_viiidii"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_viiiiid = Module["dynCall_viiiiid"] = asm["dynCall_viiiiid"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiidi = Module["dynCall_viiidi"] = asm["dynCall_viiidi"];
var dynCall_fi = Module["dynCall_fi"] = asm["dynCall_fi"];
var dynCall_iii = Module["dynCall_iii"] = asm["dynCall_iii"];
var dynCall_viiif = Module["dynCall_viiif"] = asm["dynCall_viiif"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZNK7WebCore11RenderStyle16borderRightColorEv","__ZNK7WebCore17ClipPathOperation10isSameTypeERKS0_","__ZNK7WebCore17ClipPathOperation4typeEv","__ZN7WebCore20CSSPropertyAnimation37animatableShorthandsAffectingPropertyENS_13CSSPropertyIDE","__ZNK7WebCore11RenderStyle11shapeInsideEv","__ZNK7WebCore11RenderStyle8maxWidthEv","__ZNK7WebCore11RenderStyle27visitedLinkBorderRightColorEv","__ZNK7WebCore11RenderStyle5rightEv","__ZNK7WebCore22ShapeClipPathOperationeqERKNS_17ClipPathOperationE","__ZN7WebCoreL34gatherEnclosingShorthandPropertiesENS_13CSSPropertyIDEPNS_28AnimationPropertyWrapperBaseERN3WTF7HashSetIS0_NS3_7IntHashIjEENS3_10HashTraitsIS0_EEEE","__ZN7WebCore11RenderStyle12setFlexBasisENS_6LengthE","__ZNK7WebCore11RenderStyle12outlineWidthEv","__ZN7WebCore11RenderStyle19setStrokePaintColorERKNS_5ColorE","__ZNK7WebCore24ShorthandPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZNK7WebCore11RenderStyle26visitedLinkTextStrokeColorEv","__ZN7WebCore11RenderStyle21setBaselineShiftValueENS_9SVGLengthE","__ZNK7WebCore11RenderStyle18maskBoxImageSourceEv","__ZN7WebCore32PropertyWrapperMaybeInvalidColorD1Ev","__ZNK7WebCore10LengthSizeeqERKS0_","__ZN7WebCore7DataRefINS_18StyleTransformDataEE6accessEv","__ZN7WebCore11RenderStyle13setFlexShrinkEf","__ZN7WebCore12StyleBoxDataD2Ev","__ZN7WebCore11RenderStyle16setOutlineOffsetEi","__ZNK7WebCore32PropertyWrapperMaybeInvalidColor6equalsEPKNS_11RenderStyleES3_","__ZNK7WebCore9LengthBoxeqERKS0_","__ZNK7WebCore15PropertyWrapperIRKNS_14NinePieceImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS8_SB_d","__ZNK7WebCore11RenderStyle7orphansEv","__ZNK7WebCore11RenderStyle17borderImageOutsetEv","__ZNK7WebCore21PropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_11RenderStyleES7_","__ZN7WebCore11RenderStyle29setVisitedLinkTextStrokeColorERKNS_5ColorE","__ZN7WebCore11RenderStyle12setMaxHeightENS_6LengthE","__ZNK7WebCore11RenderStyle5widthEv","__ZN7WebCore11RenderStyle19setTransformOriginXENS_6LengthE","__ZN7WebCore25StyleImagePropertyWrapperD0Ev","__ZNK7WebCore21PropertyWrapperGetterIRKNS_16FilterOperationsEE6equalsEPKNS_11RenderStyleES7_","__ZNK7WebCore11RenderStyle17borderImageSlicesEv","__ZNK7WebCore11RenderStyle28visitedLinkBorderBottomColorEv","__ZN7WebCore11RenderStyle31setVisitedLinkBorderBottomColorERKNS_5ColorE","__ZN7WebCore11RenderStyle15setMarginBottomENS_6LengthE","__ZNK7WebCore9FillLayer9yPositionEv","__ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED1Ev","__ZN7WebCore11RenderStyle16setLightingColorERKNS_5ColorE","__ZN7WebCore11RenderStyle10setOrphansEs","__ZNK7WebCore35PropertyWrapperVisitedAffectedColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZN7WebCore9FillLayer12setXPositionENS_6LengthE","__ZNK7WebCore19PropertyWrapperFlex6equalsEPKNS_11RenderStyleES3_","__ZNK7WebCore11RenderStyle10paddingTopEv","__ZN7WebCore11RenderStyle18setColumnRuleWidthEt","__ZNK7WebCore15FilterOperation9isDefaultEv","__ZNK7WebCore11RenderStyle26visitedLinkColumnRuleColorEv","__ZNK7WebCore11RenderStyle20borderTopRightRadiusEv","__ZNK7WebCore11RenderStyle16strokePaintColorEv","__ZNK7WebCore15PropertyWrapperIsE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d","__ZNK7WebCore11RenderStyle24visitedLinkTextFillColorEv","__ZNK7WebCore11RenderStyle23visitedLinkOutlineColorEv","__ZNK7WebCore11RenderStyle11shapeMarginEv","__ZNK7WebCore21PropertyWrapperGetterItE6equalsEPKNS_11RenderStyleES4_","__ZNK7WebCore35PropertyWrapperAcceleratedTransform22animationIsAcceleratedEv","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEaSERKS4_","__ZN7WebCore11RenderStyle19setStrokeDashOffsetENS_9SVGLengthE","__ZN7WebCore11RenderStyle18setBorderLeftColorERKNS_5ColorE","__ZN7WebCore11RenderStyle11setFlexGrowEf","__ZNK7WebCore11RenderStyle6zIndexEv","__ZN7WebCore9FillLayer13setSizeLengthENS_10LengthSizeE","__ZN7WebCore34FillLayerStyleImagePropertyWrapperD0Ev","__ZN7WebCore11RenderStyle26setBorderBottomRightRadiusENS_10LengthSizeE","__ZN7WebCoreL21blendFilterOperationsEPKNS_13AnimationBaseERKNS_16FilterOperationsES5_d","__ZN7WebCore11RenderStyle12setMaskImageEN3WTF10PassRefPtrINS_10StyleImageEEE","__ZNK7WebCore25RefCountedPropertyWrapperINS_10ShapeValueEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZN7WebCore15PropertyWrapperIsED0Ev","__ZN7WebCore15PropertyWrapperIjED0Ev","__ZNK7WebCore21PropertyWrapperGetterIfE6equalsEPKNS_11RenderStyleES4_","__ZNK7WebCore21PropertyWrapperShadow31blendSimpleOrMatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_","__ZN7WebCore33PropertyWrapperAcceleratedOpacityD0Ev","__ZNK7WebCore21PropertyWrapperGetterINS_9SVGLengthEE6equalsEPKNS_11RenderStyleES5_","__ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED0Ev","__ZNK7WebCore15FilterOperation4typeEv","__ZN7WebCore11RenderStyle14setPaddingLeftENS_6LengthE","__ZNK7WebCore11RenderStyle23borderBottomRightRadiusEv","__ZNK7WebCore21PropertyWrapperGetterIRKNS_19TransformOperationsEE6equalsEPKNS_11RenderStyleES7_","__ZN7WebCore35PropertyWrapperAcceleratedTransformD1Ev","__ZN7WebCore15FilterOperation5blendEPKS0_db","__ZN7WebCore11RenderStyle14setStopOpacityEf","__ZNK7WebCore32PropertyWrapperMaybeInvalidColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZN7WebCore20PropertyWrapperShapeD1Ev","__ZNK7WebCore15FilterOperation11movesPixelsEv","__ZN7WebCore11RenderStyle18setBackgroundColorERKNS_5ColorE","__ZN7WebCore11RenderStyle12setColumnGapEf","__ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_","__ZNK7WebCore11RenderStyle10visibilityEv","__ZN7WebCore21PropertyWrapperShadowD1Ev","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEEC2Ej","__ZN7WebCore33PropertyWrapperAcceleratedOpacityD1Ev","__ZN7WebCore11RenderStyle21setPerspectiveOriginYENS_6LengthE","__ZNK7WebCore11RenderStyle16strokeDashOffsetEv","__ZNK7WebCore11RenderStyle13textFillColorEv","__ZNK7WebCore21LengthPropertyWrapperINS_9LengthBoxEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZN7WebCore11RenderStyle9setHeightENS_6LengthE","__ZNK7WebCore11RenderStyle11fillOpacityEv","__ZN7WebCore23PropertyWrapperClipPathD1Ev","__ZN7WebCore15FilterOperation5blendEPKS0_dRKNS_10LayoutSizeEb","__ZN3WTF6OwnPtrIN7WebCore10ShadowDataEED2Ev","__ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_6LengthEE6equalsEPKNS_9FillLayerES7_","__ZN7WebCore25FillLayersPropertyWrapperD0Ev","__ZNK7WebCore11RenderStyle19shapeImageThresholdEv","__ZN7WebCore11RenderStyle14setPerspectiveEf","__ZNK7WebCore11RenderStyle10textShadowEv","__ZNK7WebCore21PropertyWrapperGetterIjE6equalsEPKNS_11RenderStyleES4_","__ZNK7WebCore11RenderStyle16transformOriginXEv","__ZNK7WebCore24ShorthandPropertyWrapper6equalsEPKNS_11RenderStyleES3_","__ZN7WebCore11RenderStyle13setVisibilityENS_11EVisibilityE","__ZN7WebCore14SVGRenderStyle14setStrokePaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb","__ZN7WebCore11RenderStyle13setMarginLeftENS_6LengthE","__ZN7WebCore11RenderStyle25setZoomWithoutReturnValueEf","__ZN7WebCore11RenderStyle9setBottomENS_6LengthE","__ZN7WebCore11RenderStyle12setMinHeightENS_6LengthE","__ZNK7WebCore11RenderStyle13lightingColorEv","__ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED1Ev","__ZNK7WebCore11RenderStyle10floodColorEv","__ZN7WebCore20CSSPropertyAnimation16getNumPropertiesEv","__ZN7WebCore9FillLayer12setYPositionENS_6LengthE","__ZNK7WebCore11RenderStyle18perspectiveOriginXEv","__ZNK7WebCore11RenderStyle9boxShadowEv","__ZN7WebCore11RenderStyle13setTextIndentENS_6LengthE","__ZN7WebCore11RenderStyle23setBorderTopRightRadiusENS_10LengthSizeE","__ZN7WebCore11RenderStyle20setBorderBottomColorERKNS_5ColorE","__ZNK7WebCore21PropertyWrapperGetterIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE6equalsEPKNS_11RenderStyleES9_","__ZNK7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKSA_SD_d","__ZNK7WebCore11RenderStyle14borderTopWidthEv","__ZNK7WebCore23PropertyWrapperSVGPaint6equalsEPKNS_11RenderStyleES3_","__ZNK7WebCore11RenderStyle13strokeOpacityEv","__ZN7WebCore21PropertyWrapperShadowD0Ev","__ZNK7WebCore28AnimationPropertyWrapperBase18isShorthandWrapperEv","__ZN7WebCore11RenderStyle12setStopColorERKNS_5ColorE","__ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED0Ev","__ZNK7WebCore15FilterOperation25blendingNeedsRendererSizeEv","__ZNK7WebCore21PropertyWrapperShadow5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZNK7WebCore11RenderStyle9marginTopEv","__ZNK7WebCore11RenderStyle6widowsEv","__ZN7WebCore11RenderStyle20setBorderBottomWidthEj","__ZNK7WebCore11RenderStyle17borderBottomWidthEv","__ZNK7WebCore11RenderStyle15strokeDashArrayEv","__ZNK7WebCore19PropertyWrapperFlex5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__Z12compareEqualIN7WebCore6LengthES1_EbRKT_RKT0_","__ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPKNS_10ShadowDataES5_d","__ZN7WebCore14SVGRenderStyle12setFillPaintENS_8SVGPaint12SVGPaintTypeERKNS_5ColorERKN3WTF6StringEbb","__ZNK7WebCore11RenderStyle6filterEv","__ZN7WebCore11RenderStyle10setOpacityEf","__ZNK7WebCore15PropertyWrapperIiE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d","__ZNK7WebCore11RenderStyle9columnGapEv","__ZNK7WebCore11RenderStyle10maskLayersEv","__ZN7WebCore11RenderStyle29setVisitedLinkBackgroundColorERKNS_5ColorE","__ZN7WebCore11RenderStyle14setShapeInsideEN3WTF10PassRefPtrINS_10ShapeValueEEE","__ZN7WebCore19PropertyWrapperFlexD0Ev","__ZN7WebCore15PropertyWrapperItED0Ev","__ZN7WebCore11RenderStyle15setOutlineWidthEt","__ZN7WebCore20CSSPropertyAnimation18getPropertyAtIndexEiRb","__ZN7WebCore11RenderStyle22accessBackgroundLayersEv","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore6Length5blendERKS0_d","__ZN7WebCore15PropertyWrapperINS_11EVisibilityEED1Ev","__ZNK7WebCore21LengthPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZN7WebCore11RenderStyle22setShapeImageThresholdEf","__ZN7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEED1Ev","__ZN7WebCore20CSSPropertyAnimation32animationOfPropertyIsAcceleratedENS_13CSSPropertyIDE","__ZN7WebCore30CSSPropertyAnimationWrapperMap8instanceEv","__ZN7WebCore19PropertyWrapperFlexD1Ev","__ZNK7WebCore32PropertyWrapperAcceleratedFilter22animationIsAcceleratedEv","__ZN7WebCore21LengthPropertyWrapperINS_6LengthEED1Ev","__ZNK7WebCore24FillLayerPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d","__ZNK7WebCore15PropertyWrapperIjE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d","__ZN7WebCore11RenderStyle18setStrokeDashArrayEN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEE","__ZNK7WebCore11RenderStyle15borderLeftWidthEv","__ZN7WebCoreL17shadowForBlendingEPKNS_10ShadowDataES2_","__ZNK7WebCore11RenderStyle13fillPaintTypeEv","__ZNK7WebCore11RenderStyle9minHeightEv","__ZN7WebCore15PropertyWrapperINS_9SVGLengthEED0Ev","__ZN7WebCore15PropertyWrapperIiED1Ev","__ZN7WebCore11RenderStyle15setFloodOpacityEf","__ZN7WebCore11RenderStyle28setVisitedLinkBorderTopColorERKNS_5ColorE","__ZN7WebCore35PropertyWrapperVisitedAffectedColorD0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCoreL9blendFuncEPKNS_13AnimationBaseEPNS_10StyleImageES4_d","__ZNK7WebCore11RenderStyle9stopColorEv","__ZN7WebCore25StyleImagePropertyWrapperD1Ev","__ZN7WebCore11RenderStyle19setStrokeMiterLimitEf","_memmove","__ZN7WebCore11RenderStyle14setMarginRightENS_6LengthE","__ZN7WebCore15PropertyWrapperIjED1Ev","__ZN7WebCore30CSSPropertyAnimationWrapperMapC2Ev","__ZNK7WebCore11RenderStyle7kerningEv","_strlen","__ZN7WebCore11RenderStyle15setMaskBoxImageERKNS_14NinePieceImageE","__ZN7WebCore11RenderStyle22setBorderTopLeftRadiusENS_10LengthSizeE","__ZNK7WebCore21PropertyWrapperGetterIPNS_17ClipPathOperationEE6equalsEPKNS_11RenderStyleES6_","__ZNK7WebCore33PropertyWrapperAcceleratedOpacity5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZNK7WebCore15FilterOperation14affectsOpacityEv","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E6expandEPS2_","__ZN7WebCore15PropertyWrapperINS_9SVGLengthEED1Ev","__ZN7WebCore11RenderStyle14setFillOpacityEf","__ZNK7WebCore23PropertyWrapperSVGPaint5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZNK7WebCore15PropertyWrapperIfE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d","__ZN7WebCore11RenderStyle16accessMaskLayersEv","__ZN7WebCore20PropertyWrapperShapeD0Ev","__ZNK7WebCore11RenderStyle6heightEv","__ZNK7WebCore21PropertyWrapperGetterINS_5ColorEE6equalsEPKNS_11RenderStyleES5_","__ZNK7WebCore11RenderStyle12floodOpacityEv","__ZNK7WebCore21PropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_11RenderStyleES7_","__ZN7WebCore11RenderStyle12setMarginTopENS_6LengthE","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore15PropertyWrapperIRKNS_14NinePieceImageEED1Ev","__ZNK7WebCore20PropertyWrapperColor5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZNK7WebCore11RenderStyle12shapeOutsideEv","__ZN7WebCore32PropertyWrapperAcceleratedFilterD1Ev","__ZNK7WebCore11RenderStyle11perspectiveEv","__ZNK7WebCore33PropertyWrapperAcceleratedOpacity22animationIsAcceleratedEv","__ZNK7WebCore11RenderStyle14borderTopColorEv","__ZNK7WebCore25FillLayersPropertyWrapper6equalsEPKNS_11RenderStyleES3_","__ZN7WebCore11RenderStyle30setVisitedLinkBorderRightColorERKNS_5ColorE","__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_","__ZN7WebCore11RenderStyle18setColumnRuleColorERKNS_5ColorE","__ZN7WebCore15PropertyWrapperIfED0Ev","__ZNK7WebCore11RenderStyle16borderRightWidthEv","__ZN7WebCore20PropertyWrapperColorD0Ev","__ZNK7WebCore15PropertyWrapperItE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS5_S8_d","__ZN7WebCore11RenderStyle21setPerspectiveOriginXENS_6LengthE","__ZNK7WebCore11RenderStyle11paddingLeftEv","__ZNK7WebCore11RenderStyle12marginBottomEv","__ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED0Ev","__ZN7WebCore11RenderStyle14setColumnCountEt","__ZNK7WebCore11RenderStyle11columnCountEv","__ZNK7WebCore9SVGLength5blendERKS0_f","__ZNK7WebCore21LengthPropertyWrapperINS_6LengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZNK7WebCore11RenderStyle4zoomEv","__ZN7WebCore32PropertyWrapperAcceleratedFilterD0Ev","__ZNK7WebCore11RenderStyle14fillPaintColorEv","__ZN7WebCore11RenderStyle16setTextFillColorERKNS_5ColorE","__ZN7WebCore11RenderStyle8setRightENS_6LengthE","__ZNK7WebCore11RenderStyle6bottomEv","__ZNK7WebCore11RenderStyle26visitedLinkBackgroundColorEv","__ZN7WebCore11RenderStyle9setFilterERKNS_16FilterOperationsE","__ZN7WebCore26PassthroughFilterOperationD1Ev","__ZNK7WebCore11RenderStyle16backgroundLayersEv","__ZN7WebCore7DataRefINS_15StyleStrokeDataEE6accessEv","__ZNK7WebCore11RenderStyle16transformOriginYEv","__ZNK7WebCore11RenderStyle11marginRightEv","__ZN7WebCore11RenderStyle16setStrokeOpacityEf","__ZN7WebCore11RenderStyle13setFloodColorERKNS_5ColorE","__ZN7WebCore11RenderStyle10setKerningENS_9SVGLengthE","__ZNK7WebCore21PropertyWrapperShadow26blendMismatchedShadowListsEPKNS_13AnimationBaseEdPKNS_10ShadowDataES6_ii","__ZN7WebCore22ShapeClipPathOperationD1Ev","__ZNK7WebCore11RenderStyle17borderBottomColorEv","__ZN7WebCore11RenderStyle8setWidthENS_6LengthE","__ZN7WebCore24FillLayerPropertyWrapperINS_6LengthEED1Ev","__ZN7WebCore11RenderStyle29setVisitedLinkColumnRuleColorERKNS_5ColorE","__ZNK7WebCore11RenderStyle26visitedLinkBorderLeftColorEv","__ZNK7WebCore25RefCountedPropertyWrapperINS_17ClipPathOperationEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZNK7WebCore35PropertyWrapperAcceleratedTransform5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZN7WebCore21LengthPropertyWrapperINS_6LengthEED0Ev","__ZNK7WebCore11RenderStyle3topEv","__ZN7WebCore22ShapeClipPathOperationD0Ev","__ZN7WebCore11RenderStyle16setPaddingBottomENS_6LengthE","__ZNK7WebCore11RenderStyle15backgroundColorEv","__ZN7WebCore11RenderStyle18setBorderLeftWidthEj","__ZN7WebCore11RenderStyle25setBorderBottomLeftRadiusENS_10LengthSizeE","__ZNK7WebCore28AnimationPropertyWrapperBase22animationIsAcceleratedEv","__ZNK7WebCore11RenderStyle9maxHeightEv","__ZN7WebCore11RenderStyle18setTextStrokeColorERKNS_5ColorE","__ZNK7WebCore11RenderStyle16strokeMiterLimitEv","__ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED1Ev","__ZNK7WebCore9FillLayer10sizeLengthEv","__ZNK7WebCore11RenderStyle10marginLeftEv","__ZN7WebCore26PassthroughFilterOperationD0Ev","__ZNK7WebCore25StyleImagePropertyWrapper6equalsEPKNS_11RenderStyleES3_","__ZN3WTF6VectorINS_6RefPtrIN7WebCore15FilterOperationEEELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZNK7WebCore11RenderStyle7opacityEv","__ZN7WebCore9FillLayer8setImageEN3WTF10PassRefPtrINS_10StyleImageEEE","__ZNK7WebCore11RenderStyle12paddingRightEv","__ZNK7WebCore21PropertyWrapperShadow6equalsEPKNS_11RenderStyleES3_","__ZNK7WebCore11RenderStyle11strokeWidthEv","__ZN7WebCore5blendERKNS_5ColorES2_db","__ZNK7WebCore11RenderStyle11columnWidthEv","__ZNK7WebCore9FillLayer9xPositionEv","__ZNK7WebCore24FillLayerPropertyWrapperINS_10LengthSizeEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d","__ZNK7WebCore11RenderStyle13outlineOffsetEv","__ZNK7WebCore21PropertyWrapperGetterIRKNS_14NinePieceImageEE6equalsEPKNS_11RenderStyleES7_","__ZN7WebCore11RenderStyle17setBorderTopWidthEj","_memcpy","__ZN7WebCore11RenderStyle26setVisitedLinkOutlineColorERKNS_5ColorE","__ZN7WebCore11RenderStyle27setVisitedLinkTextFillColorERKNS_5ColorE","__ZN7WebCore11RenderStyle7setClipENS_9LengthBoxE","__ZNK7WebCore26PassthroughFilterOperationeqERKNS_15FilterOperationE","__ZNK7WebCore11RenderStyle4clipEv","__ZN7WebCore21LengthPropertyWrapperINS_10LengthSizeEED0Ev","__ZN7WebCore11RenderStyle17setFillPaintColorERKNS_5ColorE","__ZN7WebCore35PropertyWrapperVisitedAffectedColorD1Ev","__ZNK7WebCore21PropertyWrapperGetterIRKNS_9LengthBoxEE6equalsEPKNS_11RenderStyleES7_","__ZNK7WebCore15PropertyWrapperINS_11EVisibilityEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZN7WebCore20CSSPropertyAnimation15propertiesEqualENS_13CSSPropertyIDEPKNS_11RenderStyleES4_","__ZN7WebCore11RenderStyle7setLeftENS_6LengthE","__ZNK7WebCore11RenderStyle18perspectiveOriginYEv","__ZNK7WebCore34FillLayerRefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_9FillLayerEPKS6_S9_d","__ZNK7WebCore11RenderStyle10textIndentEv","__ZN7WebCore11RenderStyle7setZoomEf","__ZNK7WebCore21PropertyWrapperGetterIPNS_10ShapeValueEE6equalsEPKNS_11RenderStyleES6_","__ZNK7WebCore11RenderStyle12maskBoxImageEv","__ZNK7WebCore11RenderStyle25visitedLinkBorderTopColorEv","__ZNK7WebCore11RenderStyle13paddingBottomEv","__ZN7WebCore20CSSPropertyAnimation15blendPropertiesEPKNS_13AnimationBaseENS_13CSSPropertyIDEPNS_11RenderStyleEPKS5_S8_d","__ZN7WebCore11RenderStyle14setStrokeWidthENS_9SVGLengthE","__ZN7WebCore23PropertyWrapperSVGPaintD0Ev","__ZNK7WebCore11RenderStyle8minWidthEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore11RenderStyle8clipPathEv","__ZNK7WebCore11RenderStyle12outlineColorEv","__Z12compareEqualIN7WebCore9LengthBoxES1_EbRKT_RKT0_","__ZNK7WebCore11RenderStyle15columnRuleColorEv","__ZN7WebCore7DataRefINS_13StyleFillDataEE6accessEv","__ZN7WebCore11RenderStyle14setColumnWidthEf","__ZN7WebCore34FillLayerStyleImagePropertyWrapperD1Ev","__ZN3WTF9HashTableIN7WebCore13CSSPropertyIDES2_NS_17IdentityExtractorENS_7IntHashIjEENS_10HashTraitsIS2_EES7_E3addINS_22IdentityHashTranslatorIS5_EERKS2_S2_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S5_S7_S7_EEEEOT0_OT1_","__ZNK7WebCore11RenderStyle15columnRuleWidthEv","__ZNK7WebCore11RenderStyle22borderBottomLeftRadiusEv","__ZNK7WebCore21PropertyWrapperGetterIsE6equalsEPKNS_11RenderStyleES4_","__ZNK7WebCore11RenderStyle15strokePaintTypeEv","__ZN7WebCore11RenderStyle15setPaddingRightENS_6LengthE","__ZN7WebCore24ShorthandPropertyWrapperD0Ev","__ZN7WebCore11RenderStyle21setMaskBoxImageSourceEN3WTF10PassRefPtrINS_10StyleImageEEE","__ZNK7WebCore25FillLayersPropertyWrapper5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZN7WebCore35PropertyWrapperAcceleratedTransformD0Ev","__ZNK7WebCore11RenderStyle19borderTopLeftRadiusEv","__ZN3WTF6VectorIN7WebCore9SVGLengthELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore11RenderStyle9setZIndexEi","__ZN7WebCore11RenderStyle11setClipPathEN3WTF10PassRefPtrINS_17ClipPathOperationEEE","__ZN7WebCore11RenderStyle11setMaxWidthENS_6LengthE","__ZN7WebCore11RenderStyle13setPaddingTopENS_6LengthE","__ZN7WebCore23PropertyWrapperSVGPaintD1Ev","__ZN7WebCore15PropertyWrapperIfED1Ev","_memset","__ZN7WebCore11RenderStyle17setBorderTopColorERKNS_5ColorE","__ZNK7WebCore30FillLayerPropertyWrapperGetterIRKNS_10LengthSizeEE6equalsEPKNS_9FillLayerES7_","__ZNK7WebCore32PropertyWrapperAcceleratedFilter5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS4_S7_d","__ZN7WebCore11RenderStyle15setShapeOutsideEN3WTF10PassRefPtrINS_10ShapeValueEEE","__ZNK7WebCore11RenderStyle11stopOpacityEv","__ZN7WebCore11RenderStyle11setMinWidthENS_6LengthE","__ZN7WebCore11RenderStyle19setTransformOriginZEf","__ZN7WebCore11RenderStyle15setOutlineColorERKNS_5ColorE","__ZNK7WebCore21PropertyWrapperGetterIiE6equalsEPKNS_11RenderStyleES4_","__ZNK7WebCore11RenderStyle4leftEv","__ZNK7WebCore11RenderStyle16transformOriginZEv","__ZN7WebCore11RenderStyle19setTransformOriginYENS_6LengthE","__ZNK7WebCore15FilterOperation10isSameTypeERKS0_","__ZNK7WebCore11RenderStyle16borderImageWidthEv","__ZN7WebCore15PropertyWrapperIiED0Ev","__ZN7WebCore20PropertyWrapperColorD1Ev","__ZN7WebCore11RenderStyle29setVisitedLinkBorderLeftColorERKNS_5ColorE","__ZN7WebCore11RenderStyle6setTopENS_6LengthE","__ZN7WebCore11RenderStyle19setBorderRightColorERKNS_5ColorE","__ZN7WebCore24ShorthandPropertyWrapperD1Ev","__ZN7WebCore11RenderStyle19setBorderRightWidthEj","__ZN7WebCore21LengthPropertyWrapperINS_9LengthBoxEED0Ev","__ZN7WebCore11RenderStyle9setWidowsEs","__ZNK7WebCore24ShorthandPropertyWrapper18isShorthandWrapperEv","__ZNK7WebCore35PropertyWrapperVisitedAffectedColor6equalsEPKNS_11RenderStyleES3_","__ZN7WebCore15PropertyWrapperItED1Ev","__ZNK7WebCore11RenderStyle18baselineShiftValueEv","__ZN7WebCore15PropertyWrapperINS_11EVisibilityEED0Ev","__ZN7WebCore23PropertyWrapperClipPathD0Ev","__ZNK7WebCore11RenderStyle15borderLeftColorEv","__ZNK7WebCore11RenderStyle9transformEv","__ZN7WebCore25FillLayersPropertyWrapperD1Ev","__ZN7WebCoreL11blendFilterEPKNS_13AnimationBaseEPNS_11CachedImageERKNS_16FilterOperationsES7_d","__ZNK7WebCore11RenderStyle15textStrokeColorEv","__ZNK7WebCore11RenderStyle17borderImageSourceEv","__ZN7WebCore11RenderStyle14setShapeMarginENS_6LengthE","__ZN7WebCore32PropertyWrapperMaybeInvalidColorD0Ev","__ZNK7WebCore11RenderStyle9maskImageEv","__ZN7WebCore15PropertyWrapperIN3WTF6VectorINS_9SVGLengthELj0ENS1_15CrashOnOverflowEEEED0Ev","__ZNK7WebCore15PropertyWrapperINS_9SVGLengthEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZNK7WebCore21PropertyWrapperGetterINS_11EVisibilityEE6equalsEPKNS_11RenderStyleES5_","__ZN7WebCore15PropertyWrapperIsED1Ev","__ZNK7WebCore9FillLayer5imageEv","__ZNK7WebCore25RefCountedPropertyWrapperINS_10StyleImageEE5blendEPKNS_13AnimationBaseEPNS_11RenderStyleEPKS6_S9_d","__ZNK7WebCore34FillLayerStyleImagePropertyWrapper6equalsEPKNS_9FillLayerES3_"]

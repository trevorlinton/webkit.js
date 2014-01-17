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
H_BASE = parentModule["_malloc"](408 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 408;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11RenderLayerC1ERNS_22RenderLayerModelObjectE;
var __ZN7WebCore11RenderLayerD1Ev;
/* memory initializer */ allocate([116,101,120,116,65,114,101,97,82,101,115,105,122,101,67,111,114,110,101,114,0,0,0,0,116,101,120,116,65,114,101,97,82,101,115,105,122,101,67,111,114,110,101,114,64,50,120,0,82,101,110,100,101,114,101,114,46,78,101,101,100,115,67,111,109,112,111,115,105,116,101,100,83,99,114,111,108,108,105,110,103,0,0,0,0,0,0,0,32,40,114,101,102,108,101,99,116,105,111,110,41,0,0,0,32,99,108,97,115,115,61,39,0,0,0,0,0,0,0,0,32,105,100,61,39,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var __ZN7WebCore9HTMLNames9iframeTagE=env.__ZN7WebCore9HTMLNames9iframeTagE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZTVN7WebCore27TranslateTransformOperationE=env.__ZTVN7WebCore27TranslateTransformOperationE|0;
  var __ZTVN7WebCore23ScaleTransformOperationE=env.__ZTVN7WebCore23ScaleTransformOperationE|0;
  var __ZN7WebCore9HTMLNames8frameTagE=env.__ZN7WebCore9HTMLNames8frameTagE|0;
  var __ZN7WebCore8SVGNames11clipPathTagE=env.__ZN7WebCore8SVGNames11clipPathTagE|0;
  var __ZSt7nothrow=env.__ZSt7nothrow|0;
  var __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE=env.__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE|0;
  var __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE=env.__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore11RenderLayerE=(H_BASE+136)|0;
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
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiii=env.invoke_viiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _fabs=env._fabs;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _sqrt=env._sqrt;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _free=env._free;
  var _fflush=env._fflush;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11RenderLayer21createReflectionStyleEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 176 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i3 + 40 | 0;
 i9 = i3 + 48 | 0;
 i10 = i3 + 56 | 0;
 i11 = i3 + 64 | 0;
 i12 = i3 + 72 | 0;
 i13 = i3 + 80 | 0;
 i14 = i3 + 88 | 0;
 i15 = i3 + 96 | 0;
 i16 = i3 + 104 | 0;
 i17 = i3 + 112 | 0;
 i18 = i3 + 120 | 0;
 i19 = i3 + 128 | 0;
 i20 = i3 + 136 | 0;
 i21 = i3 + 144 | 0;
 i22 = i3 + 152 | 0;
 i23 = i3 + 160 | 0;
 i24 = i3 + 168 | 0;
 __ZN7WebCore11RenderStyle6createEv(i1);
 i25 = i1 | 0;
 i1 = i2 + 32 | 0;
 __ZN7WebCore11RenderStyle11inheritFromEPKS0_NS0_18IsAtShadowBoundaryE(HEAP32[i25 >> 2] | 0, HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0, 1);
 __ZN7WebCore19TransformOperationsC1Eb(i4, 0);
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 4 >> 2] | 0;
 do {
  if ((i2 | 0) == 3) {
   HEAP8[i16 + 4 | 0] = 0;
   i26 = i16 + 5 | 0;
   HEAP8[i26] = 2;
   HEAP8[i16 + 6 | 0] = 1;
   HEAPF32[i16 >> 2] = +100;
   HEAP32[i17 >> 2] = 0;
   HEAP8[i17 + 4 | 0] = 0;
   i27 = i17 + 5 | 0;
   HEAP8[i27] = 3;
   HEAP8[i17 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i15, i16, i17, 5);
   i28 = i4 + 8 | 0;
   i29 = HEAP32[i28 >> 2] | 0;
   i30 = i4 + 4 | 0;
   if ((i29 | 0) == (HEAP32[i30 >> 2] | 0)) {
    i31 = i29 + 1 | 0;
    i32 = i31 + (i29 >>> 2) | 0;
    i33 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
    i32 = i33 >>> 0 > i31 >>> 0 ? i33 : i31;
    i31 = i4 | 0;
    do {
     if (i29 >>> 0 < i32 >>> 0) {
      i33 = HEAP32[i31 >> 2] | 0;
      if (i32 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i34 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
      HEAP32[i30 >> 2] = i34 >>> 2;
      i35 = __ZN3WTF10fastMallocEj(i34) | 0;
      HEAP32[i31 >> 2] = i35;
      i34 = i33;
      _memcpy(i35 | 0, i34 | 0, i29 << 2) | 0;
      if ((i33 | 0) == 0) {
       break;
      }
      if ((HEAP32[i31 >> 2] | 0) == (i33 | 0)) {
       HEAP32[i31 >> 2] = 0;
       HEAP32[i30 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i34);
     }
    } while (0);
    i32 = (HEAP32[i31 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) | 0;
    i34 = i15 | 0;
    i33 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    HEAP32[i32 >> 2] = i33;
    i36 = HEAP32[i28 >> 2] | 0;
   } else {
    i33 = (HEAP32[i4 >> 2] | 0) + (i29 << 2) | 0;
    i32 = i15 | 0;
    i34 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    HEAP32[i33 >> 2] = i34;
    i36 = HEAP32[i28 >> 2] | 0;
   }
   HEAP32[i28 >> 2] = i36 + 1;
   if ((HEAP8[i27] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i17);
   }
   if ((HEAP8[i26] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i16);
   }
   i34 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 8 | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP8[i19 + 4 | 0] = 0;
   i33 = i19 + 5 | 0;
   HEAP8[i33] = 3;
   HEAP8[i19 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i18, i34, i19, 5);
   i34 = HEAP32[i28 >> 2] | 0;
   if ((i34 | 0) == (HEAP32[i30 >> 2] | 0)) {
    i32 = i34 + 1 | 0;
    i35 = i32 + (i34 >>> 2) | 0;
    i37 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
    i35 = i37 >>> 0 > i32 >>> 0 ? i37 : i32;
    i32 = i4 | 0;
    do {
     if (i34 >>> 0 < i35 >>> 0) {
      i37 = HEAP32[i32 >> 2] | 0;
      if (i35 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i38 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
      HEAP32[i30 >> 2] = i38 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i38) | 0;
      HEAP32[i32 >> 2] = i39;
      i38 = i37;
      _memcpy(i39 | 0, i38 | 0, i34 << 2) | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      if ((HEAP32[i32 >> 2] | 0) == (i37 | 0)) {
       HEAP32[i32 >> 2] = 0;
       HEAP32[i30 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i38);
     }
    } while (0);
    i35 = (HEAP32[i32 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) | 0;
    i26 = i18 | 0;
    i27 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i35 >> 2] = i27;
    i40 = HEAP32[i28 >> 2] | 0;
   } else {
    i27 = (HEAP32[i4 >> 2] | 0) + (i34 << 2) | 0;
    i35 = i18 | 0;
    i26 = HEAP32[i35 >> 2] | 0;
    HEAP32[i35 >> 2] = 0;
    HEAP32[i27 >> 2] = i26;
    i40 = HEAP32[i28 >> 2] | 0;
   }
   HEAP32[i28 >> 2] = i40 + 1;
   if ((HEAP8[i33] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i19);
   }
   i26 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i26 + 4 >> 2] = 1;
   HEAP32[i26 >> 2] = __ZTVN7WebCore23ScaleTransformOperationE + 8;
   HEAPF64[i26 + 8 >> 3] = +-1;
   HEAPF64[i26 + 16 >> 3] = +1;
   HEAPF64[i26 + 24 >> 3] = +1;
   HEAP32[i26 + 32 >> 2] = 2;
   i27 = HEAP32[i28 >> 2] | 0;
   if ((i27 | 0) != (HEAP32[i30 >> 2] | 0)) {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i27 << 2) >> 2] = i26;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i41 = i28;
    break;
   }
   i35 = i27 + 1 | 0;
   i29 = i35 + (i27 >>> 2) | 0;
   i31 = i29 >>> 0 > 16 >>> 0 ? i29 : 16;
   i29 = i31 >>> 0 > i35 >>> 0 ? i31 : i35;
   i35 = i4 | 0;
   do {
    if (i27 >>> 0 < i29 >>> 0) {
     i31 = HEAP32[i35 >> 2] | 0;
     if (i29 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i38 = __ZN3WTF18fastMallocGoodSizeEj(i29 << 2) | 0;
     HEAP32[i30 >> 2] = i38 >>> 2;
     i37 = __ZN3WTF10fastMallocEj(i38) | 0;
     HEAP32[i35 >> 2] = i37;
     i38 = i31;
     _memcpy(i37 | 0, i38 | 0, i27 << 2) | 0;
     if ((i31 | 0) == 0) {
      break;
     }
     if ((HEAP32[i35 >> 2] | 0) == (i31 | 0)) {
      HEAP32[i35 >> 2] = 0;
      HEAP32[i30 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i38);
    }
   } while (0);
   HEAP32[(HEAP32[i35 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) >> 2] = i26;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   i41 = i28;
  } else if ((i2 | 0) == 1) {
   i30 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i30 + 4 >> 2] = 1;
   HEAP32[i30 >> 2] = __ZTVN7WebCore23ScaleTransformOperationE + 8;
   HEAPF64[i30 + 8 >> 3] = +1;
   HEAPF64[i30 + 16 >> 3] = +-1;
   HEAPF64[i30 + 24 >> 3] = +1;
   HEAP32[i30 + 32 >> 2] = 2;
   i27 = i4 + 8 | 0;
   i29 = HEAP32[i27 >> 2] | 0;
   i33 = i4 + 4 | 0;
   if ((i29 | 0) == (HEAP32[i33 >> 2] | 0)) {
    i34 = i29 + 1 | 0;
    i32 = i34 + (i29 >>> 2) | 0;
    i38 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
    i32 = i38 >>> 0 > i34 >>> 0 ? i38 : i34;
    i34 = i4 | 0;
    do {
     if (i29 >>> 0 < i32 >>> 0) {
      i38 = HEAP32[i34 >> 2] | 0;
      if (i32 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i31 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
      HEAP32[i33 >> 2] = i31 >>> 2;
      i37 = __ZN3WTF10fastMallocEj(i31) | 0;
      HEAP32[i34 >> 2] = i37;
      i31 = i38;
      _memcpy(i37 | 0, i31 | 0, i29 << 2) | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      if ((HEAP32[i34 >> 2] | 0) == (i38 | 0)) {
       HEAP32[i34 >> 2] = 0;
       HEAP32[i33 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i31);
     }
    } while (0);
    HEAP32[(HEAP32[i34 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) >> 2] = i30;
    i42 = HEAP32[i27 >> 2] | 0;
   } else {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i29 << 2) >> 2] = i30;
    i42 = HEAP32[i27 >> 2] | 0;
   }
   HEAP32[i27 >> 2] = i42 + 1;
   HEAP32[i11 >> 2] = 0;
   HEAP8[i11 + 4 | 0] = 0;
   i32 = i11 + 5 | 0;
   HEAP8[i32] = 3;
   HEAP8[i11 + 6 | 0] = 0;
   HEAP8[i12 + 4 | 0] = 0;
   i28 = i12 + 5 | 0;
   HEAP8[i28] = 2;
   HEAP8[i12 + 6 | 0] = 1;
   HEAPF32[i12 >> 2] = +100;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i10, i11, i12, 5);
   i26 = HEAP32[i27 >> 2] | 0;
   if ((i26 | 0) == (HEAP32[i33 >> 2] | 0)) {
    i35 = i26 + 1 | 0;
    i31 = i35 + (i26 >>> 2) | 0;
    i38 = i31 >>> 0 > 16 >>> 0 ? i31 : 16;
    i31 = i38 >>> 0 > i35 >>> 0 ? i38 : i35;
    i35 = i4 | 0;
    do {
     if (i26 >>> 0 < i31 >>> 0) {
      i38 = HEAP32[i35 >> 2] | 0;
      if (i31 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i37 = __ZN3WTF18fastMallocGoodSizeEj(i31 << 2) | 0;
      HEAP32[i33 >> 2] = i37 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i37) | 0;
      HEAP32[i35 >> 2] = i39;
      i37 = i38;
      _memcpy(i39 | 0, i37 | 0, i26 << 2) | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      if ((HEAP32[i35 >> 2] | 0) == (i38 | 0)) {
       HEAP32[i35 >> 2] = 0;
       HEAP32[i33 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i37);
     }
    } while (0);
    i31 = (HEAP32[i35 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) | 0;
    i30 = i10 | 0;
    i29 = HEAP32[i30 >> 2] | 0;
    HEAP32[i30 >> 2] = 0;
    HEAP32[i31 >> 2] = i29;
    i43 = HEAP32[i27 >> 2] | 0;
   } else {
    i29 = (HEAP32[i4 >> 2] | 0) + (i26 << 2) | 0;
    i31 = i10 | 0;
    i30 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = 0;
    HEAP32[i29 >> 2] = i30;
    i43 = HEAP32[i27 >> 2] | 0;
   }
   HEAP32[i27 >> 2] = i43 + 1;
   if ((HEAP8[i28] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i12);
   }
   if ((HEAP8[i32] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i11);
   }
   HEAP32[i14 >> 2] = 0;
   HEAP8[i14 + 4 | 0] = 0;
   i30 = i14 + 5 | 0;
   HEAP8[i30] = 3;
   HEAP8[i14 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i13, i14, (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 8 | 0, 5);
   i29 = HEAP32[i27 >> 2] | 0;
   if ((i29 | 0) == (HEAP32[i33 >> 2] | 0)) {
    i31 = i29 + 1 | 0;
    i34 = i31 + (i29 >>> 2) | 0;
    i37 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
    i34 = i37 >>> 0 > i31 >>> 0 ? i37 : i31;
    i31 = i4 | 0;
    do {
     if (i29 >>> 0 < i34 >>> 0) {
      i37 = HEAP32[i31 >> 2] | 0;
      if (i34 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i38 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 2) | 0;
      HEAP32[i33 >> 2] = i38 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i38) | 0;
      HEAP32[i31 >> 2] = i39;
      i38 = i37;
      _memcpy(i39 | 0, i38 | 0, i29 << 2) | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      if ((HEAP32[i31 >> 2] | 0) == (i37 | 0)) {
       HEAP32[i31 >> 2] = 0;
       HEAP32[i33 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i38);
     }
    } while (0);
    i33 = (HEAP32[i31 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) | 0;
    i34 = i13 | 0;
    i32 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    HEAP32[i33 >> 2] = i32;
    i44 = HEAP32[i27 >> 2] | 0;
   } else {
    i32 = (HEAP32[i4 >> 2] | 0) + (i29 << 2) | 0;
    i33 = i13 | 0;
    i34 = HEAP32[i33 >> 2] | 0;
    HEAP32[i33 >> 2] = 0;
    HEAP32[i32 >> 2] = i34;
    i44 = HEAP32[i27 >> 2] | 0;
   }
   HEAP32[i27 >> 2] = i44 + 1;
   if ((HEAP8[i30] | 0) != 10) {
    i41 = i27;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i14);
   i41 = i27;
  } else if ((i2 | 0) == 2) {
   i34 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i34 + 4 >> 2] = 1;
   HEAP32[i34 >> 2] = __ZTVN7WebCore23ScaleTransformOperationE + 8;
   HEAPF64[i34 + 8 >> 3] = +-1;
   HEAPF64[i34 + 16 >> 3] = +1;
   HEAPF64[i34 + 24 >> 3] = +1;
   HEAP32[i34 + 32 >> 2] = 2;
   i32 = i4 + 8 | 0;
   i33 = HEAP32[i32 >> 2] | 0;
   i28 = i4 + 4 | 0;
   if ((i33 | 0) == (HEAP32[i28 >> 2] | 0)) {
    i26 = i33 + 1 | 0;
    i35 = i26 + (i33 >>> 2) | 0;
    i38 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
    i35 = i38 >>> 0 > i26 >>> 0 ? i38 : i26;
    i26 = i4 | 0;
    do {
     if (i33 >>> 0 < i35 >>> 0) {
      i38 = HEAP32[i26 >> 2] | 0;
      if (i35 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i37 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
      HEAP32[i28 >> 2] = i37 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i37) | 0;
      HEAP32[i26 >> 2] = i39;
      i37 = i38;
      _memcpy(i39 | 0, i37 | 0, i33 << 2) | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      if ((HEAP32[i26 >> 2] | 0) == (i38 | 0)) {
       HEAP32[i26 >> 2] = 0;
       HEAP32[i28 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i37);
     }
    } while (0);
    HEAP32[(HEAP32[i26 >> 2] | 0) + (HEAP32[i32 >> 2] << 2) >> 2] = i34;
    i45 = HEAP32[i32 >> 2] | 0;
   } else {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i33 << 2) >> 2] = i34;
    i45 = HEAP32[i32 >> 2] | 0;
   }
   HEAP32[i32 >> 2] = i45 + 1;
   HEAP8[i21 + 4 | 0] = 0;
   i35 = i21 + 5 | 0;
   HEAP8[i35] = 2;
   HEAP8[i21 + 6 | 0] = 1;
   HEAPF32[i21 >> 2] = +100;
   HEAP32[i22 >> 2] = 0;
   HEAP8[i22 + 4 | 0] = 0;
   i27 = i22 + 5 | 0;
   HEAP8[i27] = 3;
   HEAP8[i22 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i20, i21, i22, 5);
   i30 = HEAP32[i32 >> 2] | 0;
   if ((i30 | 0) == (HEAP32[i28 >> 2] | 0)) {
    i29 = i30 + 1 | 0;
    i31 = i29 + (i30 >>> 2) | 0;
    i37 = i31 >>> 0 > 16 >>> 0 ? i31 : 16;
    i31 = i37 >>> 0 > i29 >>> 0 ? i37 : i29;
    i29 = i4 | 0;
    do {
     if (i30 >>> 0 < i31 >>> 0) {
      i37 = HEAP32[i29 >> 2] | 0;
      if (i31 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i38 = __ZN3WTF18fastMallocGoodSizeEj(i31 << 2) | 0;
      HEAP32[i28 >> 2] = i38 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i38) | 0;
      HEAP32[i29 >> 2] = i39;
      i38 = i37;
      _memcpy(i39 | 0, i38 | 0, i30 << 2) | 0;
      if ((i37 | 0) == 0) {
       break;
      }
      if ((HEAP32[i29 >> 2] | 0) == (i37 | 0)) {
       HEAP32[i29 >> 2] = 0;
       HEAP32[i28 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i38);
     }
    } while (0);
    i31 = (HEAP32[i29 >> 2] | 0) + (HEAP32[i32 >> 2] << 2) | 0;
    i34 = i20 | 0;
    i33 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    HEAP32[i31 >> 2] = i33;
    i46 = HEAP32[i32 >> 2] | 0;
   } else {
    i33 = (HEAP32[i4 >> 2] | 0) + (i30 << 2) | 0;
    i31 = i20 | 0;
    i34 = HEAP32[i31 >> 2] | 0;
    HEAP32[i31 >> 2] = 0;
    HEAP32[i33 >> 2] = i34;
    i46 = HEAP32[i32 >> 2] | 0;
   }
   HEAP32[i32 >> 2] = i46 + 1;
   if ((HEAP8[i27] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i22);
   }
   if ((HEAP8[i35] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i21);
   }
   i34 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 8 | 0;
   HEAP32[i24 >> 2] = 0;
   HEAP8[i24 + 4 | 0] = 0;
   i33 = i24 + 5 | 0;
   HEAP8[i33] = 3;
   HEAP8[i24 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i23, i34, i24, 5);
   i34 = HEAP32[i32 >> 2] | 0;
   if ((i34 | 0) == (HEAP32[i28 >> 2] | 0)) {
    i31 = i34 + 1 | 0;
    i26 = i31 + (i34 >>> 2) | 0;
    i38 = i26 >>> 0 > 16 >>> 0 ? i26 : 16;
    i26 = i38 >>> 0 > i31 >>> 0 ? i38 : i31;
    i31 = i4 | 0;
    do {
     if (i34 >>> 0 < i26 >>> 0) {
      i38 = HEAP32[i31 >> 2] | 0;
      if (i26 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i37 = __ZN3WTF18fastMallocGoodSizeEj(i26 << 2) | 0;
      HEAP32[i28 >> 2] = i37 >>> 2;
      i39 = __ZN3WTF10fastMallocEj(i37) | 0;
      HEAP32[i31 >> 2] = i39;
      i37 = i38;
      _memcpy(i39 | 0, i37 | 0, i34 << 2) | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      if ((HEAP32[i31 >> 2] | 0) == (i38 | 0)) {
       HEAP32[i31 >> 2] = 0;
       HEAP32[i28 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i37);
     }
    } while (0);
    i28 = (HEAP32[i31 >> 2] | 0) + (HEAP32[i32 >> 2] << 2) | 0;
    i26 = i23 | 0;
    i35 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i28 >> 2] = i35;
    i47 = HEAP32[i32 >> 2] | 0;
   } else {
    i35 = (HEAP32[i4 >> 2] | 0) + (i34 << 2) | 0;
    i28 = i23 | 0;
    i26 = HEAP32[i28 >> 2] | 0;
    HEAP32[i28 >> 2] = 0;
    HEAP32[i35 >> 2] = i26;
    i47 = HEAP32[i32 >> 2] | 0;
   }
   HEAP32[i32 >> 2] = i47 + 1;
   if ((HEAP8[i33] | 0) != 10) {
    i41 = i32;
    break;
   }
   __ZNK7WebCore6Length22decrementCalculatedRefEv(i24);
   i41 = i32;
  } else if ((i2 | 0) == 0) {
   HEAP32[i6 >> 2] = 0;
   HEAP8[i6 + 4 | 0] = 0;
   i26 = i6 + 5 | 0;
   HEAP8[i26] = 3;
   HEAP8[i6 + 6 | 0] = 0;
   HEAP8[i7 + 4 | 0] = 0;
   i35 = i7 + 5 | 0;
   HEAP8[i35] = 2;
   HEAP8[i7 + 6 | 0] = 1;
   HEAPF32[i7 >> 2] = +100;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i5, i6, i7, 5);
   i28 = i4 + 8 | 0;
   i27 = HEAP32[i28 >> 2] | 0;
   i30 = i4 + 4 | 0;
   if ((i27 | 0) == (HEAP32[i30 >> 2] | 0)) {
    i29 = i27 + 1 | 0;
    i37 = i29 + (i27 >>> 2) | 0;
    i38 = i37 >>> 0 > 16 >>> 0 ? i37 : 16;
    i37 = i38 >>> 0 > i29 >>> 0 ? i38 : i29;
    i29 = i4 | 0;
    do {
     if (i27 >>> 0 < i37 >>> 0) {
      i38 = HEAP32[i29 >> 2] | 0;
      if (i37 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i39 = __ZN3WTF18fastMallocGoodSizeEj(i37 << 2) | 0;
      HEAP32[i30 >> 2] = i39 >>> 2;
      i48 = __ZN3WTF10fastMallocEj(i39) | 0;
      HEAP32[i29 >> 2] = i48;
      i39 = i38;
      _memcpy(i48 | 0, i39 | 0, i27 << 2) | 0;
      if ((i38 | 0) == 0) {
       break;
      }
      if ((HEAP32[i29 >> 2] | 0) == (i38 | 0)) {
       HEAP32[i29 >> 2] = 0;
       HEAP32[i30 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i39);
     }
    } while (0);
    i37 = (HEAP32[i29 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) | 0;
    i32 = i5 | 0;
    i33 = HEAP32[i32 >> 2] | 0;
    HEAP32[i32 >> 2] = 0;
    HEAP32[i37 >> 2] = i33;
    i49 = HEAP32[i28 >> 2] | 0;
   } else {
    i33 = (HEAP32[i4 >> 2] | 0) + (i27 << 2) | 0;
    i37 = i5 | 0;
    i32 = HEAP32[i37 >> 2] | 0;
    HEAP32[i37 >> 2] = 0;
    HEAP32[i33 >> 2] = i32;
    i49 = HEAP32[i28 >> 2] | 0;
   }
   HEAP32[i28 >> 2] = i49 + 1;
   if ((HEAP8[i35] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
   }
   if ((HEAP8[i26] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i6);
   }
   HEAP32[i9 >> 2] = 0;
   HEAP8[i9 + 4 | 0] = 0;
   i32 = i9 + 5 | 0;
   HEAP8[i32] = 3;
   HEAP8[i9 + 6 | 0] = 0;
   __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i8, i9, (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 8 | 0, 5);
   i33 = HEAP32[i28 >> 2] | 0;
   if ((i33 | 0) == (HEAP32[i30 >> 2] | 0)) {
    i37 = i33 + 1 | 0;
    i34 = i37 + (i33 >>> 2) | 0;
    i31 = i34 >>> 0 > 16 >>> 0 ? i34 : 16;
    i34 = i31 >>> 0 > i37 >>> 0 ? i31 : i37;
    i37 = i4 | 0;
    do {
     if (i33 >>> 0 < i34 >>> 0) {
      i31 = HEAP32[i37 >> 2] | 0;
      if (i34 >>> 0 > 1073741823 >>> 0) {
       _WTFCrash();
      }
      i39 = __ZN3WTF18fastMallocGoodSizeEj(i34 << 2) | 0;
      HEAP32[i30 >> 2] = i39 >>> 2;
      i38 = __ZN3WTF10fastMallocEj(i39) | 0;
      HEAP32[i37 >> 2] = i38;
      i39 = i31;
      _memcpy(i38 | 0, i39 | 0, i33 << 2) | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      if ((HEAP32[i37 >> 2] | 0) == (i31 | 0)) {
       HEAP32[i37 >> 2] = 0;
       HEAP32[i30 >> 2] = 0;
      }
      __ZN3WTF8fastFreeEPv(i39);
     }
    } while (0);
    i34 = (HEAP32[i37 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) | 0;
    i26 = i8 | 0;
    i35 = HEAP32[i26 >> 2] | 0;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i34 >> 2] = i35;
    i50 = HEAP32[i28 >> 2] | 0;
   } else {
    i35 = (HEAP32[i4 >> 2] | 0) + (i33 << 2) | 0;
    i34 = i8 | 0;
    i26 = HEAP32[i34 >> 2] | 0;
    HEAP32[i34 >> 2] = 0;
    HEAP32[i35 >> 2] = i26;
    i50 = HEAP32[i28 >> 2] | 0;
   }
   HEAP32[i28 >> 2] = i50 + 1;
   if ((HEAP8[i32] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i9);
   }
   i26 = __ZN3WTF10fastMallocEj(40) | 0;
   HEAP32[i26 + 4 >> 2] = 1;
   HEAP32[i26 >> 2] = __ZTVN7WebCore23ScaleTransformOperationE + 8;
   HEAPF64[i26 + 8 >> 3] = +1;
   HEAPF64[i26 + 16 >> 3] = +-1;
   HEAPF64[i26 + 24 >> 3] = +1;
   HEAP32[i26 + 32 >> 2] = 2;
   i35 = HEAP32[i28 >> 2] | 0;
   if ((i35 | 0) != (HEAP32[i30 >> 2] | 0)) {
    HEAP32[(HEAP32[i4 >> 2] | 0) + (i35 << 2) >> 2] = i26;
    HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
    i41 = i28;
    break;
   }
   i34 = i35 + 1 | 0;
   i27 = i34 + (i35 >>> 2) | 0;
   i29 = i27 >>> 0 > 16 >>> 0 ? i27 : 16;
   i27 = i29 >>> 0 > i34 >>> 0 ? i29 : i34;
   i34 = i4 | 0;
   do {
    if (i35 >>> 0 < i27 >>> 0) {
     i29 = HEAP32[i34 >> 2] | 0;
     if (i27 >>> 0 > 1073741823 >>> 0) {
      _WTFCrash();
     }
     i39 = __ZN3WTF18fastMallocGoodSizeEj(i27 << 2) | 0;
     HEAP32[i30 >> 2] = i39 >>> 2;
     i31 = __ZN3WTF10fastMallocEj(i39) | 0;
     HEAP32[i34 >> 2] = i31;
     i39 = i29;
     _memcpy(i31 | 0, i39 | 0, i35 << 2) | 0;
     if ((i29 | 0) == 0) {
      break;
     }
     if ((HEAP32[i34 >> 2] | 0) == (i29 | 0)) {
      HEAP32[i34 >> 2] = 0;
      HEAP32[i30 >> 2] = 0;
     }
     __ZN3WTF8fastFreeEPv(i39);
    }
   } while (0);
   HEAP32[(HEAP32[i34 >> 2] | 0) + (HEAP32[i28 >> 2] << 2) >> 2] = i26;
   HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
   i41 = i28;
  } else {
   i41 = i4 + 8 | 0;
  }
 } while (0);
 __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(HEAP32[i25 >> 2] | 0, i4);
 __ZN7WebCore11RenderStyle15setMaskBoxImageERKNS_14NinePieceImageE(HEAP32[i25 >> 2] | 0, (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 104 >> 2] | 0) + 16 | 0);
 i1 = HEAP32[i41 >> 2] | 0;
 i25 = i4 | 0;
 if ((i1 | 0) != 0) {
  i9 = HEAP32[i25 >> 2] | 0;
  i50 = i9 + (i1 << 2) | 0;
  i1 = i9;
  while (1) {
   i9 = HEAP32[i1 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 + 4 | 0;
     i6 = i8 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
     if ((i7 | 0) != 0) {
      HEAP32[i6 >> 2] = i7;
      break;
     }
     i7 = i8 - 4 | 0;
     if ((i7 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
    }
   } while (0);
   i1 = i1 + 4 | 0;
   if ((i1 | 0) == (i50 | 0)) {
    break;
   }
  }
  HEAP32[i41 >> 2] = 0;
 }
 i41 = HEAP32[i25 >> 2] | 0;
 if ((i41 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i25 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i41);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 552 | 0;
 i12 = i11 | 0;
 i13 = i11 + 24 | 0;
 i14 = i11 + 48 | 0;
 i15 = i11 + 56 | 0;
 i16 = i11 + 64 | 0;
 i17 = i11 + 72 | 0;
 i18 = i11 + 200 | 0;
 i19 = i11 + 208 | 0;
 i20 = i11 + 328 | 0;
 i21 = i11 + 440 | 0;
 i22 = i1 + 20 | 0;
 if ((HEAP8[i22] & 96) == 0) {
  i23 = 0;
  STACKTOP = i11;
  return i23 | 0;
 }
 i24 = i1 + 32 | 0;
 i25 = __ZNK7WebCore12RenderObject43fixedPositionedWithNamedFlowContainingBlockEv(HEAP32[i24 >> 2] | 0) | 0;
 i26 = HEAP32[i7 + 64 >> 2] | 0;
 do {
  if (i25) {
   if ((i26 | 0) == 0) {
    i27 = i7 + 64 | 0;
    break;
   } else {
    i23 = 0;
    STACKTOP = i11;
    return i23 | 0;
   }
  } else {
   i28 = i7 + 64 | 0;
   if ((i26 | 0) == 0) {
    i27 = i28;
    break;
   }
   if (__ZNK7WebCore16RenderFlowThread29objectShouldPaintInFlowRegionEPKNS_12RenderObjectEPKNS_12RenderRegionE(HEAP32[i26 + 116 >> 2] | 0, HEAP32[i24 >> 2] | 0, i26) | 0) {
    i27 = i28;
    break;
   } else {
    i23 = 0;
   }
   STACKTOP = i11;
   return i23 | 0;
  }
 } while (0);
 if (!((HEAP32[i1 + 172 >> 2] | 0) == 0 | i8)) {
  if ((HEAP32[i1 + 188 >> 2] | 0) != 0) {
   i23 = __ZN7WebCore11RenderLayer34hitTestTransformedLayerInFragmentsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i2, i3, i4, i5, i6, i7, i9, i10) | 0;
   STACKTOP = i11;
   return i23 | 0;
  }
  do {
   if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
    i26 = HEAP32[i27 >> 2] | 0;
    HEAP32[i12 >> 2] = i2;
    HEAP32[i12 + 4 >> 2] = i26;
    HEAP32[i12 + 8 >> 2] = 1;
    HEAP32[i12 + 12 >> 2] = 1;
    HEAP32[i12 + 16 >> 2] = 1;
    __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i13, i1, i12);
    if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i7, i13 | 0) | 0) {
     break;
    } else {
     i23 = 0;
    }
    STACKTOP = i11;
    return i23 | 0;
   }
  } while (0);
  HEAP32[i14 >> 2] = 0;
  HEAP32[i14 + 4 >> 2] = 0;
  i23 = __ZN7WebCore11RenderLayer31hitTestLayerByApplyingTransformEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6, i7, i9, i10, i14) | 0;
  STACKTOP = i11;
  return i23 | 0;
 }
 __ZN7WebCore11RenderLayer38updateCompositingAndLayerListsIfNeededEv(i1);
 __ZN7WebCore11RenderLayer35update3DTransformedDescendantStatusEv(i1) | 0;
 i14 = (i9 | 0) == 0;
 L25 : do {
  if (i8) {
   if (i14) {
    i29 = 0;
    i30 = 1;
    i31 = 0;
    i32 = 29;
    break;
   }
   i13 = i9 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i33 = i9;
   i32 = 20;
  } else {
   do {
    if (i14) {
     if ((HEAP8[i1 + 23 | 0] & 1) != 0) {
      break;
     }
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
      i29 = 0;
      i30 = 1;
      i31 = 0;
      i32 = 29;
      break L25;
     }
    }
   } while (0);
   HEAP32[i16 >> 2] = 0;
   HEAP32[i16 + 4 >> 2] = 0;
   __ZNK7WebCore11RenderLayer25createLocalTransformStateEPS0_S1_RKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateERKNS_11LayoutPointE(i15, i1, i2, i3, i6, i7, i9, i16);
   i13 = i15 | 0;
   i12 = HEAP32[i13 >> 2] | 0;
   HEAP32[i13 >> 2] = 0;
   if ((i12 | 0) == 0) {
    i29 = 0;
    i30 = 1;
    i31 = 0;
    i32 = 29;
   } else {
    i33 = i12;
    i32 = 20;
   }
  }
 } while (0);
 do {
  if ((i32 | 0) == 20) {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1024 | 0) != 0) {
    __ZNK7WebCore20TransformationMatrix7inverseEv(i17, i33 + 80 | 0);
    if (+HEAPF64[i17 + 80 >> 3] < +0) {
     i34 = i33;
     i35 = 0;
     break;
    }
   }
   i15 = i33 | 0;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) != 0) {
    i29 = i33;
    i30 = 0;
    i31 = i33;
    i32 = 29;
    break;
   }
   i16 = __ZN3WTF10fastMallocEj(216) | 0;
   i9 = i16;
   HEAP32[i16 >> 2] = 1;
   i3 = i33 + 4 | 0;
   i14 = i16 + 4 | 0;
   i8 = HEAP32[i3 + 4 >> 2] | 0;
   HEAP32[i14 >> 2] = HEAP32[i3 >> 2];
   HEAP32[i14 + 4 >> 2] = i8;
   _memcpy(i16 + 12 | 0, i33 + 12 | 0, 32) | 0;
   _memcpy(i16 + 44 | 0, i33 + 44 | 0, 32) | 0;
   i8 = i33 + 80 | 0;
   if (!((i8 | 0) == 0 | (i9 | 0) == (i33 | 0))) {
    _memcpy(i16 + 80 | 0, i8 | 0, 128) | 0;
   }
   HEAP8[i16 + 208 | 0] = HEAP8[i33 + 208 | 0] & 1;
   i16 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i33);
   } else {
    HEAP32[i15 >> 2] = i16;
   }
   __ZN7WebCore24HitTestingTransformState7flattenEv(i33);
   i29 = i9;
   i30 = 0;
   i31 = i33;
   i32 = 29;
  }
 } while (0);
 do {
  if ((i32 | 0) == 29) {
   HEAPF64[i18 >> 3] = -Infinity;
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
    i33 = __ZN7WebCore11RenderLayer30hitTestFixedLayersInNamedFlowsEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSG_SF_b(i1, 0, i4, i5, i6, i7, i31, 0, i10, i29, 0) | 0;
    if ((i33 | 0) == 0) {
     i36 = 0;
     i37 = i10;
     i38 = 0;
     i39 = i33;
     i32 = 32;
    } else {
     i40 = i33;
    }
   } else {
    i33 = (i10 | 0) != 0 ? i10 : i18;
    i36 = i33;
    i37 = i33;
    i38 = 1;
    i39 = __ZN7WebCore11RenderLayer30hitTestFixedLayersInNamedFlowsEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSG_SF_b(i1, 0, i4, i5, i6, i7, i31, i33, i10, i29, 1) | 0;
    i32 = 32;
   }
   do {
    if ((i32 | 0) == 32) {
     i33 = __ZN7WebCore11RenderLayer11hitTestListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEES3_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSL_SK_b(i1, HEAP32[i1 + 136 >> 2] | 0, i2, i4, i5, i6, i7, i31, i36, i10, i29, i38) | 0;
     i17 = (i33 | 0) == 0;
     if (!(i17 | i38)) {
      i40 = i33;
      break;
     }
     i9 = __ZN7WebCore11RenderLayer11hitTestListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEES3_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSL_SK_b(i1, HEAP32[i1 + 144 >> 2] | 0, i2, i4, i5, i6, i7, i31, i36, i10, i29, i38) | 0;
     i16 = (i9 | 0) == 0;
     if (!(i16 | i38)) {
      i40 = i9;
      break;
     }
     i15 = __ZN7WebCore11RenderLayer25hitTestFlowThreadIfRegionEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i2, i4, i5, i6, i7, i31, i36) | 0;
     i8 = (i15 | 0) == 0;
     i14 = i8 ? i16 ? i17 ? i39 : i33 : i9 : i15;
     if (!(i8 | i38)) {
      i40 = i15;
      break;
     }
     i15 = i19 + 12 | 0;
     i8 = i19 | 0;
     HEAP32[i8 >> 2] = i15;
     i9 = i19 + 4 | 0;
     HEAP32[i9 >> 2] = 1;
     i33 = i19 + 8 | 0;
     HEAP32[i33 >> 2] = 0;
     __ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_(i1, i19, i2, HEAP32[i27 >> 2] | 0, i6, 1, 1, 1, 0, 0);
     i17 = HEAP32[i24 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 20 >> 2] & 65536 | 0) == 0) {
       if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 140 >> 2] & 63](i17 | 0) | 0)) {
        i32 = 41;
        break;
       }
       i41 = HEAP32[i24 >> 2] | 0;
       i32 = 38;
      } else {
       i41 = i17;
       i32 = 38;
      }
     } while (0);
     do {
      if ((i32 | 0) == 38) {
       if ((HEAP32[(HEAP32[(HEAP32[i41 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
        i32 = 41;
        break;
       }
       if (!(__ZNK7WebCore11RenderLayer25hitTestResizerInFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_15HitTestLocationE(i1, i19, i7) | 0)) {
        i32 = 41;
        break;
       }
       i17 = HEAP32[i24 >> 2] | 0;
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i17 >> 2] | 0) + 456 >> 2] & 15](i17 | 0, i5, i7 | 0);
       i42 = i1;
      }
     } while (0);
     L63 : do {
      if ((i32 | 0) == 41) {
       if ((HEAP8[i22] & 32) == 0) {
        i43 = i14;
       } else {
        __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i20, i5 | 0);
        i17 = HEAP32[i33 >> 2] | 0;
        L67 : do {
         if ((i17 | 0) == 0) {
          i44 = i14;
         } else {
          i16 = _llvm_uadd_with_overflow_i32(i17 | 0, -1 | 0) | 0;
          i3 = i16;
          if ((i3 | 0) <= -1) {
           i44 = i14;
           break;
          }
          if (tempRet0) {
           i45 = 0;
           i46 = i3;
          } else {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
           return 0;
          }
          while (1) {
           i3 = HEAP32[i8 >> 2] | 0;
           if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i7, i3 + (i46 * 104 & -1) + 40 | 0) | 0) {
            if (__ZNK7WebCore11RenderLayer15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationENS_13HitTestFilterE(i1, i4, i20, i3 + (i46 * 104 & -1) + 4 | 0, i7, 2) | 0) {
             i32 = 50;
             break;
            } else {
             i47 = 1;
            }
           } else {
            i47 = i45;
           }
           i3 = i46 - 1 | 0;
           if ((i3 | 0) <= -1) {
            i32 = 55;
            break;
           }
           if ((HEAP32[i33 >> 2] | 0) >>> 0 > i3 >>> 0) {
            i45 = i47;
            i46 = i3;
           } else {
            i32 = 103;
            break;
           }
          }
          do {
           if ((i32 | 0) == 50) {
            if (!(__ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE(i1, 0, i37, i29) | 0)) {
             break;
            }
            if ((HEAP8[i5 + 68 | 0] & 1) == 0) {
             __ZN7WebCore13HitTestResultaSERKS0_(i5, i20) | 0;
            } else {
             __ZN7WebCore13HitTestResult6appendERKS0_(i5, i20);
            }
            if (i38) {
             i44 = i1;
             break L67;
            }
            __ZN7WebCore13HitTestResultD1Ev(i20);
            i42 = i1;
            break L63;
           } else if ((i32 | 0) == 55) {
            if ((i47 & 1) == 0) {
             i44 = i14;
             break L67;
            }
           } else if ((i32 | 0) == 103) {
            __ZN3WTF15CrashOnOverflow10overflowedEv();
            return 0;
           }
          } while (0);
          if ((HEAP8[i5 + 68 | 0] & 1) == 0) {
           i44 = i14;
           break;
          }
          __ZN7WebCore13HitTestResult6appendERKS0_(i5, i20);
          i44 = i14;
         }
        } while (0);
        __ZN7WebCore13HitTestResultD1Ev(i20);
        i43 = i44;
       }
       i17 = __ZN7WebCore11RenderLayer11hitTestListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEES3_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSL_SK_b(i1, HEAP32[i1 + 140 >> 2] | 0, i2, i4, i5, i6, i7, i31, i36, i10, i29, i38) | 0;
       i3 = (i17 | 0) == 0;
       i16 = i3 ? i43 : i17;
       if (!(i3 | i38)) {
        i42 = i17;
        break;
       }
       if ((i16 | 0) != 0) {
        i42 = i16;
        break;
       }
       if ((HEAP8[i22] & 32) == 0) {
        i42 = 0;
        break;
       }
       __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i21, i5 | 0);
       i16 = HEAP32[i33 >> 2] | 0;
       L95 : do {
        if ((i16 | 0) != 0) {
         i17 = _llvm_uadd_with_overflow_i32(i16 | 0, -1 | 0) | 0;
         i3 = i17;
         if ((i3 | 0) <= -1) {
          break;
         }
         if (tempRet0) {
          i48 = 0;
          i49 = i3;
         } else {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
          return 0;
         }
         while (1) {
          i3 = HEAP32[i8 >> 2] | 0;
          if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i7, i3 + (i49 * 104 & -1) + 20 | 0) | 0) {
           if (__ZNK7WebCore11RenderLayer15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationENS_13HitTestFilterE(i1, i4, i21, i3 + (i49 * 104 & -1) + 4 | 0, i7, 1) | 0) {
            i32 = 71;
            break;
           } else {
            i50 = 1;
           }
          } else {
           i50 = i48;
          }
          i3 = i49 - 1 | 0;
          if ((i3 | 0) <= -1) {
           i32 = 75;
           break;
          }
          if ((HEAP32[i33 >> 2] | 0) >>> 0 > i3 >>> 0) {
           i48 = i50;
           i49 = i3;
          } else {
           i32 = 105;
           break;
          }
         }
         do {
          if ((i32 | 0) == 71) {
           if (!(__ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE(i1, 0, i37, i29) | 0)) {
            break;
           }
           if ((HEAP8[i5 + 68 | 0] & 1) == 0) {
            __ZN7WebCore13HitTestResultaSERKS0_(i5, i21) | 0;
            __ZN7WebCore13HitTestResultD1Ev(i21);
            i42 = i1;
            break L63;
           } else {
            __ZN7WebCore13HitTestResult6appendERKS0_(i5, i21);
            __ZN7WebCore13HitTestResultD1Ev(i21);
            i42 = i1;
            break L63;
           }
          } else if ((i32 | 0) == 75) {
           if ((i50 & 1) == 0) {
            break L95;
           }
          } else if ((i32 | 0) == 105) {
           __ZN3WTF15CrashOnOverflow10overflowedEv();
           return 0;
          }
         } while (0);
         if ((HEAP8[i5 + 68 | 0] & 1) == 0) {
          break;
         }
         __ZN7WebCore13HitTestResult6appendERKS0_(i5, i21);
        }
       } while (0);
       __ZN7WebCore13HitTestResultD1Ev(i21);
       i42 = 0;
      }
     } while (0);
     if ((HEAP32[i33 >> 2] | 0) != 0) {
      HEAP32[i33 >> 2] = 0;
     }
     i14 = HEAP32[i8 >> 2] | 0;
     if ((i15 | 0) == (i14 | 0) | (i14 | 0) == 0) {
      i40 = i42;
      break;
     }
     HEAP32[i8 >> 2] = 0;
     HEAP32[i9 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i14 | 0);
     i40 = i42;
    }
   } while (0);
   if ((i29 | 0) == 0) {
    if (i30) {
     i23 = i40;
    } else {
     i34 = i31;
     i35 = i40;
     break;
    }
    STACKTOP = i11;
    return i23 | 0;
   }
   i14 = i29 | 0;
   i16 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i16 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i29);
    if (i30) {
     i23 = i40;
    } else {
     i34 = i31;
     i35 = i40;
     break;
    }
    STACKTOP = i11;
    return i23 | 0;
   } else {
    HEAP32[i14 >> 2] = i16;
    if (i30) {
     i23 = i40;
    } else {
     i34 = i31;
     i35 = i40;
     break;
    }
    STACKTOP = i11;
    return i23 | 0;
   }
  }
 } while (0);
 i40 = i34 | 0;
 i31 = (HEAP32[i40 >> 2] | 0) - 1 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i34);
  i23 = i35;
  STACKTOP = i11;
  return i23 | 0;
 } else {
  HEAP32[i40 >> 2] = i31;
  i23 = i35;
  STACKTOP = i11;
  return i23 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i5 + 32 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 116 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i18 = i17;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i4 & -3;
 i21 = i4 >>> 4;
 i22 = i4 >>> 8;
 i23 = i4 >>> 6;
 i24 = i4 >>> 5;
 i25 = i4 >>> 9;
 if ((HEAP8[i1 + 20 | 0] & 32) == 0) {
  i26 = 0;
  i27 = 0;
  i28 = 1;
 } else {
  i29 = (i21 & 1 | 0) == 0;
  do {
   if (i29) {
    if ((i22 & 1 | 0) == 0) {
     i30 = (i23 & 1 | 0) != 0;
     break;
    } else {
     i30 = (i24 & 1 | 0) != 0;
     break;
    }
   } else {
    i30 = 0;
   }
  } while (0);
  i26 = i29 & (HEAP8[i1 + 22 | 0] & 8) != 0;
  i27 = i30;
  i28 = 0;
 }
 i30 = i4 & 1024;
 do {
  if ((i30 | 0) != 0) {
   i29 = HEAP32[i1 + 32 >> 2] | 0;
   if ((HEAP32[i29 + 20 >> 2] & 768 | 0) == 768) {
    break;
   }
   i31 = HEAP32[i29 + 4 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i31 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i31 | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i1);
 i31 = i3 | 0;
 i29 = HEAP32[(HEAP32[i31 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 248 >> 2] & 63](i29 | 0) | 0) {
   if ((HEAP32[i29 + 20 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   if (!(__ZNK7WebCore12RenderObject43fixedPositionedWithNamedFlowContainingBlockEv(HEAP32[i1 + 32 >> 2] | 0) | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 + 4 >> 2] = 0;
 i29 = HEAP32[i31 >> 2] | 0;
 if (!((i29 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  i31 = i1;
  while (1) {
   i31 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i31, i29, i9, 0) | 0;
   if ((i31 | 0) == 0 | (i31 | 0) == (i29 | 0)) {
    break;
   }
  }
 }
 _memset(i10 | 0, 0, 16) | 0;
 HEAP8[i11] = 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  i32 = 0;
  i33 = 1;
 } else {
  i29 = (__ZNK7WebCore15GraphicsContext27shouldSubpixelQuantizeFontsEv(i2) | 0) & 1;
  __ZN7WebCore15GraphicsContext30setShouldSubpixelQuantizeFontsEb(i2, 0);
  i32 = 1;
  i33 = i29;
 }
 i29 = __ZN7WebCore11RenderLayer13setupClipPathEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoERKNS_11LayoutPointERNS_10LayoutRectERb(i1, i2, i3, i9, i10, i11) | 0;
 _memcpy(i12 | 0, i3 | 0, 48) | 0;
 __ZN7WebCore11RenderLayer12setupFiltersEPNS_15GraphicsContextERNS0_17LayerPaintingInfoEjRKNS_11LayoutPointERNS_10LayoutRectERb(i13, i1, i2, i12, i4, i9, i10, i11);
 i11 = i13 | 0;
 i13 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = 0;
 i11 = (i13 | 0) == 0;
 do {
  if (i11) {
   i34 = i2;
  } else {
   i10 = __ZNK7WebCore26FilterEffectRendererHelper13filterContextEv(i13) | 0;
   if ((i10 | 0) == (i2 | 0)) {
    i34 = i2;
    break;
   }
   if ((i4 & 1 | 0) == 0) {
    i34 = i10;
    break;
   }
   __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i1, i2, HEAP32[i12 >> 2] | 0, i3 + 8 | 0, HEAP32[i12 + 40 >> 2] | 0);
   i34 = i10;
  }
 } while (0);
 i10 = i12 + 4 | 0;
 i31 = HEAP32[i10 >> 2] | 0;
 if ((i31 | 0) == 0) {
  i35 = 0;
 } else {
  i36 = __ZNK7WebCore12RenderObject14isDescendantOfEPKS0_(HEAP32[i1 + 32 >> 2] | 0, i31) | 0;
  i35 = i36 ? 0 : HEAP32[i10 >> 2] | 0;
 }
 i10 = HEAP32[i12 + 36 >> 2] | 0;
 do {
  if (!((i10 | 0) == 0 | i28)) {
   i36 = i10 | 0;
   i31 = i10 + 4 | 0;
   i37 = (HEAP32[i36 >> 2] | 0) + ((HEAP32[i31 >> 2] | 0) * 20 & -1) | 0;
   __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i6, i1, HEAP32[i12 >> 2] | 0, 0, 0);
   i38 = HEAP32[i36 >> 2] | 0;
   i36 = HEAP32[i31 >> 2] | 0;
   i31 = i38 + (i36 * 20 & -1) | 0;
   L37 : do {
    if ((HEAP32[i10 + 12 >> 2] | 0) == 0) {
     i39 = i31;
    } else {
     if ((i36 | 0) == 0) {
      i39 = i38;
      break;
     } else {
      i40 = i38;
     }
     while (1) {
      i41 = HEAP32[i40 >> 2] | 0;
      if (!((i41 | 0) == (-1 | 0) | (i41 | 0) == 0)) {
       i39 = i40;
       break L37;
      }
      i41 = i40 + 20 | 0;
      if ((i41 | 0) == (i31 | 0)) {
       i39 = i31;
       break;
      } else {
       i40 = i41;
      }
     }
    }
   } while (0);
   if ((i39 | 0) == (i37 | 0)) {
    break;
   }
   i38 = i7 | 0;
   i36 = i7 + 4 | 0;
   i41 = i7 + 8 | 0;
   i42 = i7 + 12 | 0;
   i43 = 0;
   i44 = 0;
   i45 = 0;
   i46 = i39;
   L44 : while (1) {
    i47 = i46 + 4 | 0;
    i48 = HEAP32[i47 + 4 >> 2] | 0;
    HEAP32[i38 >> 2] = HEAP32[i47 >> 2];
    HEAP32[i36 >> 2] = i48;
    i48 = i46 + 12 | 0;
    i47 = HEAP32[i48 + 4 >> 2] | 0;
    HEAP32[i41 >> 2] = HEAP32[i48 >> 2];
    HEAP32[i42 >> 2] = i47;
    do {
     if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i6, i7) | 0) {
      i47 = i46 | 0;
      i48 = HEAP32[i47 >> 2] | 0;
      FUNCTION_TABLE_vii[HEAP32[(HEAP32[i48 >> 2] | 0) + 8 >> 2] & 31](i48, 1);
      if ((i43 | 0) != (i44 | 0)) {
       HEAP32[i45 + (i43 << 2) >> 2] = HEAP32[i47 >> 2];
       i49 = i45;
       i50 = i44;
       i51 = i43 + 1 | 0;
       break;
      }
      i48 = i44 + 1 | 0;
      do {
       if (i45 >>> 0 > i47 >>> 0) {
        i52 = 36;
       } else {
        if ((i45 + (i44 << 2) | 0) >>> 0 <= i47 >>> 0) {
         i52 = 36;
         break;
        }
        i53 = i46 - i45 >> 2;
        i54 = i48 + (i44 >>> 2) | 0;
        i55 = i54 >>> 0 > 16 >>> 0 ? i54 : 16;
        i54 = i55 >>> 0 > i48 >>> 0 ? i55 : i48;
        do {
         if (i44 >>> 0 < i54 >>> 0) {
          if (i54 >>> 0 > 1073741823 >>> 0) {
           i52 = 43;
           break L44;
          }
          i55 = __ZN3WTF18fastMallocGoodSizeEj(i54 << 2) | 0;
          i56 = i55 >>> 2;
          i57 = __ZN3WTF10fastMallocEj(i55) | 0;
          i55 = i57;
          i58 = i45;
          _memcpy(i57 | 0, i58 | 0, i44 << 2) | 0;
          if ((i45 | 0) == 0) {
           i59 = i55;
           i60 = i56;
           break;
          }
          i57 = (i55 | 0) == (i45 | 0);
          __ZN3WTF8fastFreeEPv(i58);
          i59 = i57 ? 0 : i55;
          i60 = i57 ? 0 : i56;
         } else {
          i59 = i45;
          i60 = i44;
         }
        } while (0);
        i61 = i59 + (i53 << 2) | 0;
        i62 = i59;
        i63 = i60;
       }
      } while (0);
      do {
       if ((i52 | 0) == 36) {
        i52 = 0;
        i54 = i48 + (i44 >>> 2) | 0;
        i56 = i54 >>> 0 > 16 >>> 0 ? i54 : 16;
        i54 = i56 >>> 0 > i48 >>> 0 ? i56 : i48;
        if (i44 >>> 0 >= i54 >>> 0) {
         i61 = i47;
         i62 = i45;
         i63 = i44;
         break;
        }
        if (i54 >>> 0 > 1073741823 >>> 0) {
         i52 = 38;
         break L44;
        }
        i56 = __ZN3WTF18fastMallocGoodSizeEj(i54 << 2) | 0;
        i54 = i56 >>> 2;
        i57 = __ZN3WTF10fastMallocEj(i56) | 0;
        i56 = i57;
        i55 = i45;
        _memcpy(i57 | 0, i55 | 0, i44 << 2) | 0;
        if ((i45 | 0) == 0) {
         i61 = i47;
         i62 = i56;
         i63 = i54;
         break;
        }
        i57 = (i56 | 0) == (i45 | 0);
        __ZN3WTF8fastFreeEPv(i55);
        i61 = i47;
        i62 = i57 ? 0 : i56;
        i63 = i57 ? 0 : i54;
       }
      } while (0);
      HEAP32[i62 + (i44 << 2) >> 2] = HEAP32[i61 >> 2];
      i49 = i62;
      i50 = i63;
      i51 = i48;
     } else {
      i49 = i45;
      i50 = i44;
      i51 = i43;
     }
    } while (0);
    i47 = i46 + 20 | 0;
    L66 : do {
     if ((i47 | 0) == (i31 | 0)) {
      i64 = i31;
     } else {
      i54 = i47;
      while (1) {
       i57 = HEAP32[i54 >> 2] | 0;
       if (!((i57 | 0) == (-1 | 0) | (i57 | 0) == 0)) {
        i64 = i54;
        break L66;
       }
       i57 = i54 + 20 | 0;
       if ((i57 | 0) == (i31 | 0)) {
        i64 = i31;
        break;
       } else {
        i54 = i57;
       }
      }
     }
    } while (0);
    if ((i64 | 0) == (i37 | 0)) {
     i52 = 30;
     break;
    } else {
     i43 = i51;
     i44 = i50;
     i45 = i49;
     i46 = i64;
    }
   }
   if ((i52 | 0) == 43) {
    _WTFCrash();
   } else if ((i52 | 0) == 30) {
    if ((i51 | 0) != 0) {
     i46 = 0;
     while (1) {
      __ZN3WTF7HashMapIPN7WebCore24OverlapTestRequestClientENS1_7IntRectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE6removeERKS3_(i10, i49 + (i46 << 2) | 0) | 0;
      i46 = i46 + 1 | 0;
      if (i46 >>> 0 >= i51 >>> 0) {
       break;
      }
     }
    }
    if ((i49 | 0) == 0) {
     break;
    }
    __ZN3WTF8fastFreeEPv(i49);
    break;
   } else if ((i52 | 0) == 38) {
    _WTFCrash();
   }
  }
 } while (0);
 i49 = HEAP32[i12 + 40 >> 2] | 0;
 i51 = (i49 & 2 | 0) != 0;
 i10 = (i4 & 2048 | 0) == 0 ? i30 >>> 5 : 16;
 i30 = i14 + 12 | 0;
 i64 = i14 | 0;
 HEAP32[i64 >> 2] = i30;
 i50 = i14 + 4 | 0;
 HEAP32[i50 >> 2] = 1;
 i63 = i14 + 8 | 0;
 HEAP32[i63 >> 2] = 0;
 i62 = i15;
 i61 = i12 + 8 | 0;
 HEAP32[i62 >> 2] = HEAP32[i61 >> 2];
 HEAP32[i62 + 4 >> 2] = HEAP32[i61 + 4 >> 2];
 HEAP32[i62 + 8 >> 2] = HEAP32[i61 + 8 >> 2];
 HEAP32[i62 + 12 >> 2] = HEAP32[i61 + 12 >> 2];
 if (i26 | i27) {
  i52 = 57;
 } else {
  if ((i21 & 1 | 0) != 0) {
   i52 = 57;
  }
 }
 if ((i52 | 0) == 57) {
  do {
   if ((HEAP8[i3 + 44 | 0] & 1) == 0) {
    if ((HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
     break;
    }
    HEAP8[i12 + 44 | 0] = 1;
    __ZNK7WebCore11RenderLayer12selfClipRectEv(i16, i1);
    i61 = i16;
    HEAP32[i62 >> 2] = HEAP32[i61 >> 2];
    HEAP32[i62 + 4 >> 2] = HEAP32[i61 + 4 >> 2];
    HEAP32[i62 + 8 >> 2] = HEAP32[i61 + 8 >> 2];
    HEAP32[i62 + 12 >> 2] = HEAP32[i61 + 12 >> 2];
   }
  } while (0);
  __ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_(i1, i14, HEAP32[i12 >> 2] | 0, HEAP32[i12 + 32 >> 2] | 0, i15, (i4 & 4 | 0) != 0 ? 5 : 0, 0, i25 & 1 ^ 1, i9, 0);
  __ZN7WebCore11RenderLayer30updatePaintingInfoForFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS0_17LayerPaintingInfoEjbPKNS_11LayoutPointE(i1, i14, i12, i20, i26, i9);
 }
 i9 = (i24 & 1 | 0) != 0;
 i24 = i26 ^ 1;
 do {
  if (!(i9 ^ 1 | i24)) {
   if ((i49 & 1 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderLayer27paintBackgroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i14, i34, i2, i3 + 8 | 0, (i4 & 1 | 0) != 0, i12, i10, i35);
  }
 } while (0);
 if ((i22 & 1 | 0) == 0) {
  if (i9) {
   i52 = 67;
  }
 } else {
  if ((i25 & 1 | 0) != 0) {
   i52 = 67;
  }
 }
 if ((i52 | 0) == 67) {
  __ZN7WebCore11RenderLayer9paintListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, HEAP32[i1 + 140 >> 2] | 0, i34, i12, i20);
 }
 i9 = (i23 & 1 | 0) != 0;
 if (!(i9 ^ 1 | i24)) {
  __ZN7WebCore11RenderLayer27paintForegroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectEbb(i1, i14, i34, i2, i3 + 8 | 0, (i4 & 1 | 0) != 0, i12, i10, i35, (i49 & 1 | 0) != 0, i51);
 }
 if (i27) {
  __ZN7WebCore11RenderLayer24paintOutlineForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i14, i34, i12, i10, i35);
 }
 if (i9) {
  __ZN7WebCore11RenderLayer9paintListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, HEAP32[i1 + 144 >> 2] | 0, i34, i12, i20);
  __ZN7WebCore11RenderLayer9paintListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, HEAP32[i1 + 136 >> 2] | 0, i34, i12, i20);
  __ZN7WebCore11RenderLayer28paintFixedLayersInNamedFlowsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i34, i12, i20);
  i9 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i17 + 4 >> 2] = i9;
  i9 = i19;
  HEAP32[i9 >> 2] = HEAP32[i62 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i62 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i62 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i62 + 12 >> 2];
  __ZN7WebCore11RenderLayer23paintFlowThreadIfRegionEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjNS_11LayoutPointENS_10LayoutRectEb(i1, i34, i12, i20, i18, i19, (i25 & 1 | 0) != 0);
 }
 if ((i21 & 1 | 0) != 0) {
  __ZN7WebCore11RenderLayer33paintOverflowControlsForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoE(i1, i14, i34, i12);
 }
 if (i11) {
  i65 = i34;
 } else {
  i34 = __ZN7WebCore11RenderLayer12applyFiltersEPNS_26FilterEffectRendererHelperEPNS_15GraphicsContextERNS0_17LayerPaintingInfoERN3WTF6VectorINS_13LayerFragmentELj1ENS7_15CrashOnOverflowEEE(i1, i13, i2, i12, i14) | 0;
  __ZdlPv(i13);
  i65 = i34;
 }
 do {
  if (!((i4 & 128 | 0) == 0 | i24)) {
   i34 = HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0;
   i13 = i34 + 116 | 0;
   while (1) {
    if ((HEAP32[i13 + 4 >> 2] | 0) != 0) {
     break;
    }
    i2 = HEAP32[i13 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i52 = 82;
     break;
    } else {
     i13 = i2;
    }
   }
   if ((i52 | 0) == 82) {
    if ((HEAP32[(HEAP32[i34 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
     break;
    }
   }
   if ((i49 & 1 | 0) != 0) {
    break;
   }
   __ZN7WebCore11RenderLayer21paintMaskForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEPNS_12RenderObjectE(i1, i14, i65, i12, i35);
  }
 } while (0);
 do {
  if ((i4 & 1 | 0) != 0) {
   i35 = i1 + 21 | 0;
   if ((HEAP8[i35] & 96) != 32) {
    break;
   }
   __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i65);
   __ZN7WebCore15GraphicsContext7restoreEv(i65);
   HEAP8[i35] = HEAP8[i35] & -33;
  }
 } while (0);
 if (i32) {
  __ZN7WebCore15GraphicsContext30setShouldSubpixelQuantizeFontsEb(i65, i33 << 24 >> 24 != 0);
 }
 if (i29) {
  __ZN7WebCore15GraphicsContext7restoreEv(i65);
 }
 if ((HEAP32[i63 >> 2] | 0) != 0) {
  HEAP32[i63 >> 2] = 0;
 }
 i63 = HEAP32[i64 >> 2] | 0;
 if ((i30 | 0) == (i63 | 0) | (i63 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i64 >> 2] = 0;
 HEAP32[i50 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i63 | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, d36 = +0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 24 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 3 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i22 = i1 + 36 | 0;
 if ((HEAP32[i22 >> 2] | 0) == 0) {
  HEAP32[i3 >> 2] = -1073741824;
  HEAP32[i3 + 4 >> 2] = -1073741824;
  HEAP32[i3 + 8 >> 2] = 2147483647;
  HEAP32[i3 + 12 >> 2] = 2147483647;
  HEAP8[i3 + 16 | 0] = 0;
  HEAP32[i3 + 20 >> 2] = -1073741824;
  HEAP32[i3 + 24 >> 2] = -1073741824;
  HEAP32[i3 + 28 >> 2] = 2147483647;
  HEAP32[i3 + 32 >> 2] = 2147483647;
  HEAP8[i3 + 36 | 0] = 0;
  HEAP32[i3 + 40 >> 2] = -1073741824;
  HEAP32[i3 + 44 >> 2] = -1073741824;
  HEAP32[i3 + 48 >> 2] = 2147483647;
  HEAP32[i3 + 52 >> 2] = 2147483647;
  HEAP8[i3 + 56 | 0] = 0;
  i23 = i3 + 63 | 0;
  HEAP8[i23] = HEAP8[i23] & 127;
  STACKTOP = i4;
  return;
 }
 i23 = i2 + 8 | 0;
 i24 = (HEAP32[i23 >> 2] | 0) == 5;
 i25 = i1 + 32 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i26 >> 2] | 0) + 248 >> 2] & 63](i26 | 0) | 0) {
   i27 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i27 | 0) == 0) {
    break;
   }
   __ZNK7WebCore11RenderLayer37mapLayerClipRectsToFragmentationLayerEPNS_12RenderRegionERNS_9ClipRectsE(0, i27, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i26 = i2 | 0;
 L10 : do {
  if ((HEAP32[i26 >> 2] | 0) == (i1 | 0)) {
   i28 = 19;
  } else {
   i27 = HEAP32[i22 >> 2] | 0;
   if ((i27 | 0) == 0) {
    i28 = 19;
    break;
   }
   do {
    if (!i24) {
     i29 = i27 + 148 | 0;
     i30 = HEAP32[i29 >> 2] | 0;
     if ((i30 | 0) == 0) {
      break;
     }
     i31 = HEAP32[i23 >> 2] | 0;
     i32 = i2 + 16 | 0;
     i33 = HEAP32[i30 + (((HEAP32[i32 >> 2] | 0) == 1 ? i31 + 3 | 0 : i31) << 2) >> 2] | 0;
     if ((i33 | 0) == 0) {
      break;
     }
     if ((HEAP32[i33 + 60 >> 2] & 2147483647 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i33);
      i34 = HEAP32[i29 >> 2] | 0;
     } else {
      i34 = i30;
     }
     do {
      if ((i34 | 0) == 0) {
       i35 = 0;
      } else {
       i30 = HEAP32[i23 >> 2] | 0;
       i29 = HEAP32[i34 + (((HEAP32[i32 >> 2] | 0) == 1 ? i30 + 3 | 0 : i30) << 2) >> 2] | 0;
       if ((i29 | 0) == 0) {
        i35 = 0;
        break;
       }
       if ((HEAP32[i29 + 60 >> 2] & 2147483647 | 0) != 0) {
        i35 = i29;
        break;
       }
       __ZN3WTF8fastFreeEPv(i29);
       i35 = i29;
      }
     } while (0);
     i32 = i3;
     i29 = i35;
     HEAP32[i32 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i32 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i32 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i32 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
     HEAP8[i32 + 16 | 0] = HEAP8[i29 + 16 | 0] | 0;
     i29 = i3 + 20 | 0;
     i32 = i35 + 20 | 0;
     HEAP32[i29 >> 2] = HEAP32[i32 >> 2];
     HEAP32[i29 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
     HEAP32[i29 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
     HEAP32[i29 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
     HEAP8[i29 + 16 | 0] = HEAP8[i32 + 16 | 0] | 0;
     i32 = i3 + 40 | 0;
     i29 = i35 + 40 | 0;
     HEAP32[i32 >> 2] = HEAP32[i29 >> 2];
     HEAP32[i32 + 4 >> 2] = HEAP32[i29 + 4 >> 2];
     HEAP32[i32 + 8 >> 2] = HEAP32[i29 + 8 >> 2];
     HEAP32[i32 + 12 >> 2] = HEAP32[i29 + 12 >> 2];
     HEAP8[i32 + 16 | 0] = HEAP8[i29 + 16 | 0] | 0;
     i29 = i3 + 63 | 0;
     HEAP8[i29] = HEAP8[i29] & 127 | HEAP8[i35 + 63 | 0] & -128;
     break L10;
    }
   } while (0);
   i29 = i5;
   i32 = i2;
   HEAP32[i29 >> 2] = HEAP32[i32 >> 2];
   HEAP32[i29 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
   HEAP32[i29 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
   HEAP32[i29 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
   HEAP32[i29 + 16 >> 2] = HEAP32[i32 + 16 >> 2];
   HEAP32[i5 + 12 >> 2] = 0;
   __ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i27, i5, i3);
  }
 } while (0);
 if ((i28 | 0) == 19) {
  HEAP32[i3 >> 2] = -1073741824;
  HEAP32[i3 + 4 >> 2] = -1073741824;
  HEAP32[i3 + 8 >> 2] = 2147483647;
  HEAP32[i3 + 12 >> 2] = 2147483647;
  HEAP8[i3 + 16 | 0] = 0;
  HEAP32[i3 + 20 >> 2] = -1073741824;
  HEAP32[i3 + 24 >> 2] = -1073741824;
  HEAP32[i3 + 28 >> 2] = 2147483647;
  HEAP32[i3 + 32 >> 2] = 2147483647;
  HEAP8[i3 + 36 | 0] = 0;
  HEAP32[i3 + 40 >> 2] = -1073741824;
  HEAP32[i3 + 44 >> 2] = -1073741824;
  HEAP32[i3 + 48 >> 2] = 2147483647;
  HEAP32[i3 + 52 >> 2] = 2147483647;
  HEAP8[i3 + 56 | 0] = 0;
  i5 = i3 + 63 | 0;
  HEAP8[i5] = HEAP8[i5] & 127;
 }
 i5 = (HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if ((i5 | 0) == 6) {
  i35 = i3 + 40 | 0;
  i34 = i3 + 20 | 0;
  HEAP32[i35 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
  HEAP8[i35 + 16 | 0] = HEAP8[i34 + 16 | 0] | 0;
  i35 = i3;
  HEAP32[i35 >> 2] = HEAP32[i34 >> 2];
  HEAP32[i35 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
  HEAP32[i35 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
  HEAP32[i35 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
  HEAP8[i35 + 16 | 0] = HEAP8[i34 + 16 | 0] | 0;
  i34 = i3 + 63 | 0;
  HEAP8[i34] = HEAP8[i34] | -128;
 } else if ((i5 | 0) == 3 | (i5 | 0) == 1) {
  i34 = i3 + 40 | 0;
  i35 = i3;
  HEAP32[i34 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i34 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i34 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i34 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP8[i34 + 16 | 0] = HEAP8[i35 + 16 | 0] | 0;
 } else if ((i5 | 0) == 2) {
  i5 = i3;
  i35 = i3 + 40 | 0;
  HEAP32[i5 >> 2] = HEAP32[i35 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
  HEAP8[i5 + 16 | 0] = HEAP8[i35 + 16 | 0] | 0;
 }
 i35 = HEAP32[i25 >> 2] | 0;
 i5 = HEAP32[i35 + 20 >> 2] | 0;
 do {
  if ((i5 & 65536 | 0) == 0) {
   i28 = 27;
  } else {
   if ((HEAP32[i2 + 16 >> 2] | 0) == 1) {
    break;
   }
   if ((HEAP32[i26 >> 2] | 0) == (i1 | 0)) {
    i28 = 27;
   }
  }
 } while (0);
 do {
  if ((i28 | 0) == 27) {
   if ((i5 & 25165824 | 0) != 16777216) {
    STACKTOP = i4;
    return;
   }
   if ((HEAP8[(HEAP32[(HEAP32[i35 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) != 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i5 = i6;
 HEAP32[i5 >> 2] = 0;
 i1 = i7 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAPF32[i9 >> 2] = +0;
 HEAPF32[i9 + 4 >> 2] = +0;
 __ZNK7WebCore12RenderObject21localToContainerPointERKNS_10FloatPointEPKNS_22RenderLayerModelObjectEjPb(i8, i35 | 0, i9, HEAP32[(HEAP32[i26 >> 2] | 0) + 32 >> 2] | 0, 0, 0);
 d36 = +_round(+(+HEAPF32[i8 >> 2]));
 do {
  if (d36 < +2147483647) {
   if (d36 <= +-2147483648) {
    i37 = 0;
    i38 = -2147483648;
    break;
   }
   i37 = 0;
   i38 = ~~d36;
  } else {
   i37 = 0;
   i38 = 2147483647;
  }
 } while (0);
 d36 = +_round(+(+HEAPF32[i8 + 4 >> 2]));
 do {
  if (d36 < +2147483647) {
   if (d36 <= +-2147483648) {
    i39 = -2147483648;
    i40 = 0;
    break;
   }
   i39 = ~~d36;
   i40 = 0;
  } else {
   i39 = 2147483647;
   i40 = 0;
  }
 } while (0);
 HEAP32[i6 >> 2] = i40 | i38;
 HEAP32[i6 + 4 >> 2] = i39 | i37;
 do {
  if ((HEAP8[i3 + 63 | 0] | 0) < 0) {
   i37 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   if ((HEAP32[(HEAP32[i26 >> 2] | 0) + 32 >> 2] | 0) != (i37 | 0)) {
    break;
   }
   __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i10, HEAP32[i37 + 116 >> 2] | 0);
   i37 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - (HEAP32[i10 >> 2] | 0);
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) - i37;
  }
 } while (0);
 i1 = HEAP32[i25 >> 2] | 0;
 i10 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i10 & 65536 | 0) == 0) {
   i41 = i1;
   i42 = i10;
  } else {
   FUNCTION_TABLE_viiiii[HEAP32[(HEAP32[i1 >> 2] | 0) + 940 >> 2] & 1](i11, i1, i7, HEAP32[i2 + 4 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0);
   i5 = i11;
   i26 = HEAP32[(HEAP32[(HEAP32[i25 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
   i37 = i26 + 136 | 0;
   do {
    if ((HEAP8[i26 + 141 | 0] | 0) == 10) {
     i28 = 55;
    } else {
     if ((HEAP8[i26 + 142 | 0] & 1) == 0) {
      if ((HEAP32[i37 >> 2] | 0) != 0) {
       i28 = 55;
       break;
      }
     } else {
      if (+HEAPF32[i37 >> 2] != +0) {
       i28 = 55;
       break;
      }
     }
     i39 = i26 + 152 | 0;
     if ((HEAP8[i26 + 157 | 0] | 0) == 10) {
      i28 = 55;
      break;
     }
     if ((HEAP8[i26 + 158 | 0] & 1) == 0) {
      if ((HEAP32[i39 >> 2] | 0) != 0) {
       i28 = 55;
       break;
      }
     } else {
      if (+HEAPF32[i39 >> 2] != +0) {
       i28 = 55;
       break;
      }
     }
     i39 = i26 + 168 | 0;
     if ((HEAP8[i26 + 173 | 0] | 0) == 10) {
      i28 = 55;
      break;
     }
     if ((HEAP8[i26 + 174 | 0] & 1) == 0) {
      if ((HEAP32[i39 >> 2] | 0) != 0) {
       i28 = 55;
       break;
      }
     } else {
      if (+HEAPF32[i39 >> 2] != +0) {
       i28 = 55;
       break;
      }
     }
     i39 = i26 + 184 | 0;
     if ((HEAP8[i26 + 189 | 0] | 0) == 10) {
      i28 = 55;
      break;
     }
     if ((HEAP8[i26 + 190 | 0] & 1) == 0) {
      if ((HEAP32[i39 >> 2] | 0) == 0) {
       i43 = 0;
       break;
      } else {
       i28 = 55;
       break;
      }
     } else {
      if (+HEAPF32[i39 >> 2] != +0) {
       i28 = 55;
       break;
      } else {
       i43 = 0;
       break;
      }
     }
    }
   } while (0);
   if ((i28 | 0) == 55) {
    i43 = 1;
   }
   i26 = i13;
   HEAP32[i26 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
   i37 = i13 + 16 | 0;
   HEAP8[i37] = i43;
   i27 = i26 + 17 | 0;
   i39 = i12 | 0;
   HEAP8[i27] = HEAP8[i39] | 0;
   HEAP8[i27 + 1 | 0] = HEAP8[i39 + 1 | 0] | 0;
   HEAP8[i27 + 2 | 0] = HEAP8[i39 + 2 | 0] | 0;
   __ZN7WebCore10LayoutRect9intersectERKS0_(i13 | 0, i3 | 0);
   if ((HEAP8[i3 + 16 | 0] & 1) != 0) {
    HEAP8[i37] = 1;
   }
   i37 = i3;
   HEAP32[i37 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i37 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i37 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i37 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   HEAP8[i37 + 16 | 0] = HEAP8[i26 + 16 | 0] | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   i37 = HEAP32[i26 + 20 >> 2] | 0;
   if ((i37 & 25165824 | 0) == 0) {
    i41 = i26;
    i42 = i37;
    break;
   }
   i37 = i3 + 40 | 0;
   i26 = i14;
   HEAP32[i26 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
   i27 = i14 + 16 | 0;
   HEAP8[i27] = i43;
   i6 = i26 + 17 | 0;
   HEAP8[i6] = HEAP8[i39] | 0;
   HEAP8[i6 + 1 | 0] = HEAP8[i39 + 1 | 0] | 0;
   HEAP8[i6 + 2 | 0] = HEAP8[i39 + 2 | 0] | 0;
   __ZN7WebCore10LayoutRect9intersectERKS0_(i14 | 0, i37 | 0);
   if ((HEAP8[i3 + 56 | 0] & 1) != 0) {
    HEAP8[i27] = 1;
   }
   i27 = i37;
   HEAP32[i27 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i27 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i27 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i27 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   HEAP8[i27 + 16 | 0] = HEAP8[i26 + 16 | 0] | 0;
   i26 = HEAP32[i25 >> 2] | 0;
   i41 = i26;
   i42 = HEAP32[i26 + 20 >> 2] | 0;
  }
 } while (0);
 if ((i42 & 25165824 | 0) != 16777216) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP8[(HEAP32[(HEAP32[i41 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE(i15, i41, i7, HEAP32[i2 + 4 >> 2] | 0);
 i2 = i15;
 i15 = i16;
 HEAP32[i15 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i15 = i3 + 40 | 0;
 i7 = i16;
 i41 = i16 + 16 | 0;
 HEAP8[i41] = 0;
 i42 = i7 + 17 | 0;
 i25 = i17 | 0;
 HEAP8[i42] = HEAP8[i25] | 0;
 HEAP8[i42 + 1 | 0] = HEAP8[i25 + 1 | 0] | 0;
 HEAP8[i42 + 2 | 0] = HEAP8[i25 + 2 | 0] | 0;
 __ZN7WebCore10LayoutRect9intersectERKS0_(i16 | 0, i15 | 0);
 if ((HEAP8[i3 + 56 | 0] & 1) != 0) {
  HEAP8[i41] = 1;
 }
 i41 = i15;
 HEAP32[i41 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i41 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i41 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i41 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP8[i41 + 16 | 0] = HEAP8[i7 + 16 | 0] | 0;
 i7 = i18;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i7 = i18;
 i41 = i18 + 16 | 0;
 HEAP8[i41] = 0;
 i15 = i7 + 17 | 0;
 i16 = i19 | 0;
 HEAP8[i15] = HEAP8[i16] | 0;
 HEAP8[i15 + 1 | 0] = HEAP8[i16 + 1 | 0] | 0;
 HEAP8[i15 + 2 | 0] = HEAP8[i16 + 2 | 0] | 0;
 __ZN7WebCore10LayoutRect9intersectERKS0_(i18 | 0, i3 | 0);
 if ((HEAP8[i3 + 16 | 0] & 1) != 0) {
  HEAP8[i41] = 1;
 }
 i41 = i3;
 HEAP32[i41 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i41 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i41 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i41 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP8[i41 + 16 | 0] = HEAP8[i7 + 16 | 0] | 0;
 i7 = i20;
 HEAP32[i7 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = i3 + 20 | 0;
 i7 = i20;
 i41 = i20 + 16 | 0;
 HEAP8[i41] = 0;
 i18 = i7 + 17 | 0;
 i16 = i21 | 0;
 HEAP8[i18] = HEAP8[i16] | 0;
 HEAP8[i18 + 1 | 0] = HEAP8[i16 + 1 | 0] | 0;
 HEAP8[i18 + 2 | 0] = HEAP8[i16 + 2 | 0] | 0;
 __ZN7WebCore10LayoutRect9intersectERKS0_(i20 | 0, i2 | 0);
 if ((HEAP8[i3 + 36 | 0] & 1) != 0) {
  HEAP8[i41] = 1;
 }
 i41 = i2;
 HEAP32[i41 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i41 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i41 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i41 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 HEAP8[i41 + 16 | 0] = HEAP8[i7 + 16 | 0] | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, d78 = +0, d79 = +0, d80 = +0, d81 = +0, d82 = +0, d83 = +0, i84 = 0, i85 = 0, i86 = 0, i87 = 0, i88 = 0, i89 = 0, i90 = 0, i91 = 0, i92 = 0, i93 = 0, i94 = 0, i95 = 0, i96 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 56 | 0;
 i13 = i5 + 64 | 0;
 i14 = i5 + 80 | 0;
 i15 = i5 + 96 | 0;
 i16 = i5 + 112 | 0;
 i17 = i5 + 128 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i26 = i25;
 i27 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i28 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i29 = i28 | 0;
 i30 = i28;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i32 = i31 | 0;
 i33 = i31;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i35 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i36 = i35 | 0;
 i37 = i35;
 i38 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i39 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i40 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i41 = i40 | 0;
 i42 = i40;
 i43 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i44 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i45 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i46 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i47 = i46 | 0;
 i48 = i46;
 i49 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i50 = i49 | 0;
 i51 = i49;
 i52 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i54 = i53 | 0;
 i55 = i53;
 i53 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i56 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i57 = i14;
 i58 = i2;
 HEAP32[i57 >> 2] = HEAP32[i58 >> 2];
 HEAP32[i57 + 4 >> 2] = HEAP32[i58 + 4 >> 2];
 HEAP32[i57 + 8 >> 2] = HEAP32[i58 + 8 >> 2];
 HEAP32[i57 + 12 >> 2] = HEAP32[i58 + 12 >> 2];
 i58 = i1 + 32 | 0;
 i59 = HEAP32[i58 >> 2] | 0;
 i60 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i59 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i61 = HEAP32[i59 + 8 >> 2] | 0;
 if ((i61 | 0) == 0) {
  i62 = 0;
  i63 = 0;
  i64 = i59;
 } else {
  i59 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i61 | 0) | 0;
  i61 = HEAP32[i58 >> 2] | 0;
  i62 = i59;
  i63 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i61 + 8 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 40 >> 2] | 0) != -1;
  i64 = i61;
 }
 i61 = HEAP32[i64 + 20 >> 2] | 0;
 L4 : do {
  if ((i61 & 65536 | 0) == 0 | i63) {
   if ((i62 | 0) != 0) {
    i65 = i62;
    break;
   }
   if ((i61 & 512 | 0) == 0) {
    i65 = 0;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i64 >> 2] | 0) + 920 >> 2] & 63](i64) | 0)) {
    i65 = 0;
    break;
   }
   i59 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i58 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   do {
    if ((i59 | 0) != 0) {
     i66 = i59 + 12 | 0;
     i67 = i59 + 32 | 0;
     if ((HEAP32[i66 >> 2] & 2048 | 0) == 0) {
      i68 = i67 | 0;
     } else {
      i68 = HEAP32[i67 >> 2] | 0;
     }
     if ((HEAP32[i68 >> 2] | 0) == 0) {
      break;
     }
     i69 = HEAP32[i59 + 44 >> 2] | 0;
     i70 = HEAP32[__ZN7WebCore9HTMLNames8frameTagE >> 2] | 0;
     do {
      if ((i69 | 0) == (i70 | 0)) {
       i71 = 28;
      } else {
       i72 = HEAP32[i69 + 12 >> 2] | 0;
       if ((i72 | 0) == (HEAP32[i70 + 12 >> 2] | 0)) {
        if ((HEAP32[i69 + 16 >> 2] | 0) == (HEAP32[i70 + 16 >> 2] | 0)) {
         i71 = 28;
         break;
        }
       }
       i73 = HEAP32[__ZN7WebCore9HTMLNames9iframeTagE >> 2] | 0;
       if ((i69 | 0) == (i73 | 0)) {
        i71 = 28;
        break;
       }
       if ((i72 | 0) != (HEAP32[i73 + 12 >> 2] | 0)) {
        i71 = 29;
        break;
       }
       if ((HEAP32[i69 + 16 >> 2] | 0) == (HEAP32[i73 + 16 >> 2] | 0)) {
        i71 = 28;
       } else {
        i71 = 29;
       }
      }
     } while (0);
     if ((i71 | 0) == 28) {
      if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i59 >> 2] | 0) + 604 >> 2] & 63](i59) | 0) == 1) {
       i71 = 29;
      }
     }
     if ((i71 | 0) == 29) {
      if (__ZNK7WebCore9FrameView17wasScrolledByUserEv(i60) | 0) {
       i65 = 0;
       break L4;
      }
      if (__ZNK7WebCore12EventHandler20autoscrollInProgressEv(HEAP32[(HEAP32[i60 + 216 >> 2] | 0) + 472 >> 2] | 0) | 0) {
       i65 = 0;
       break L4;
      }
     }
     i69 = i60 | 0;
     __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i42, i69, 0);
     i70 = HEAP32[i41 + 4 >> 2] | 0;
     HEAP32[i39 >> 2] = HEAP32[i41 >> 2];
     HEAP32[i39 + 4 >> 2] = i70;
     i70 = i40 + 8 | 0;
     i73 = HEAP32[i70 + 4 >> 2] | 0;
     HEAP32[i39 + 8 >> 2] = HEAP32[i70 >> 2];
     HEAP32[i39 + 12 >> 2] = i73;
     __ZN7WebCore11RenderLayer15getRectToExposeERKNS_10LayoutRectES3_S3_RKNS_15ScrollAlignmentES6_(i43, 0, i39, i39, i2, i3, i4);
     i73 = HEAP32[i43 >> 2] | 0;
     i70 = HEAP32[i43 + 4 >> 2] | 0;
     i72 = i60;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 184 >> 2] & 31](i8, i69);
     i74 = HEAP32[i8 >> 2] | 0;
     i75 = (i73 | 0) < (i74 | 0) ? i73 : i74;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 184 >> 2] & 31](i9, i69);
     i72 = HEAP32[i9 + 4 >> 2] | 0;
     i74 = (i70 | 0) < (i72 | 0) ? i70 : i72;
     HEAP32[i44 >> 2] = (i75 | 0) > 0 ? i75 : 0;
     HEAP32[i44 + 4 >> 2] = (i74 | 0) > 0 ? i74 : 0;
     __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i60, i44);
     if ((HEAP8[i60 + 434 | 0] & 1) == 0) {
      i65 = 0;
      break L4;
     }
     if ((HEAP32[i66 >> 2] & 2048 | 0) == 0) {
      i76 = i67 | 0;
     } else {
      i76 = HEAP32[i67 >> 2] | 0;
     }
     i74 = __ZNK7WebCore12RenderObject14enclosingLayerEv(HEAP32[i76 >> 2] | 0) | 0;
     i75 = HEAP32[i2 >> 2] | 0;
     i72 = i60;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 192 >> 2] & 31](i10, i69);
     i70 = i75 - (HEAP32[i10 >> 2] | 0) | 0;
     i75 = i60 | 0;
     __ZNK7WebCore6Widget9frameRectEv(i11, i75);
     HEAP32[i14 >> 2] = i70 + (HEAP32[i11 >> 2] | 0);
     i70 = HEAP32[i2 + 4 >> 2] | 0;
     FUNCTION_TABLE_vii[HEAP32[(HEAP32[i72 >> 2] | 0) + 192 >> 2] & 31](i12, i69);
     i69 = i70 - (HEAP32[i12 + 4 >> 2] | 0) | 0;
     __ZNK7WebCore6Widget9frameRectEv(i13, i75);
     HEAP32[i14 + 4 >> 2] = i69 + (HEAP32[i13 + 4 >> 2] | 0);
     i65 = i74;
     break L4;
    }
   } while (0);
   i59 = i60 | 0;
   __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i48, i59, 0);
   i74 = HEAP32[i47 + 4 >> 2] | 0;
   HEAP32[i45 >> 2] = HEAP32[i47 >> 2];
   HEAP32[i45 + 4 >> 2] = i74;
   i74 = i46 + 8 | 0;
   i69 = HEAP32[i74 + 4 >> 2] | 0;
   HEAP32[i45 + 8 >> 2] = HEAP32[i74 >> 2];
   HEAP32[i45 + 12 >> 2] = i69;
   i69 = i49;
   i74 = i45;
   HEAP32[i69 >> 2] = HEAP32[i74 >> 2];
   HEAP32[i69 + 4 >> 2] = HEAP32[i74 + 4 >> 2];
   HEAP32[i69 + 8 >> 2] = HEAP32[i74 + 8 >> 2];
   HEAP32[i69 + 12 >> 2] = HEAP32[i74 + 12 >> 2];
   __ZNK7WebCore10ScrollView30scrollOffsetRelativeToDocumentEv(i52, i59);
   i59 = HEAP32[i52 + 4 >> 2] | 0;
   HEAP32[i50 >> 2] = HEAP32[i52 >> 2];
   HEAP32[i50 + 4 >> 2] = i59;
   __ZN7WebCore11RenderLayer15getRectToExposeERKNS_10LayoutRectES3_S3_RKNS_15ScrollAlignmentES6_(i55, 0, i45, i51, i2, i3, i4);
   i59 = HEAP32[i54 + 4 >> 2] | 0;
   HEAP32[i53 >> 2] = HEAP32[i54 >> 2];
   HEAP32[i53 + 4 >> 2] = i59;
   __ZN7WebCore9FrameView17setScrollPositionERKNS_8IntPointE(i60, i53);
   i59 = HEAP32[(HEAP32[i60 + 216 >> 2] | 0) + 32 >> 2] | 0;
   if ((i59 | 0) == 0) {
    i65 = 0;
    break;
   }
   i74 = HEAP32[i59 + 20 >> 2] | 0;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i56, i2);
   __ZNK7WebCore6Chrome18scrollRectIntoViewERKNS_7IntRectE(i74, i56);
   i65 = 0;
  } else {
   if ((i61 & 512 | 0) == 0) {
    i77 = 0;
   } else {
    i77 = i64;
   }
   i74 = i77 | 0;
   d78 = +(HEAP32[i2 >> 2] | 0);
   d79 = +(HEAP32[i2 + 4 >> 2] | 0);
   d80 = +(HEAP32[i2 + 8 >> 2] | 0);
   d81 = +(HEAP32[i2 + 12 >> 2] | 0);
   d82 = +d78;
   d83 = +d79;
   HEAPF32[i18 >> 2] = d82;
   HEAPF32[i18 + 4 >> 2] = d83;
   d83 = d78 + d80;
   HEAPF32[i17 + 8 >> 2] = d83;
   HEAPF32[i19 + 12 >> 2] = d79;
   d80 = d79 + d81;
   HEAPF32[i17 + 16 >> 2] = d83;
   HEAPF32[i19 + 20 >> 2] = d80;
   HEAPF32[i17 + 24 >> 2] = d78;
   HEAPF32[i19 + 28 >> 2] = d80;
   __ZNK7WebCore12RenderObject19absoluteToLocalQuadERKNS_9FloatQuadEj(i20, i74, i19, 2);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i16, i20);
   __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i15, i16);
   __ZNK7WebCore9RenderBox11clientWidthEv(i22, i77);
   __ZNK7WebCore9RenderBox12clientHeightEv(i23, i77);
   i59 = HEAP32[i22 >> 2] | 0;
   i69 = HEAP32[i23 >> 2] | 0;
   HEAP32[i21 >> 2] = 0;
   HEAP32[i21 + 4 >> 2] = 0;
   HEAP32[i21 + 8 >> 2] = i59;
   HEAP32[i21 + 12 >> 2] = i69;
   __ZN7WebCore11RenderLayer15getRectToExposeERKNS_10LayoutRectES3_S3_RKNS_15ScrollAlignmentES6_(i24, 0, i21, i21, i15, i3, i4);
   i69 = i1 + 112 | 0;
   i59 = i1 + 12 | 0;
   i75 = (HEAP32[i59 >> 2] | 0) + (HEAP32[i69 >> 2] | 0) | 0;
   i70 = i1 + 116 | 0;
   i72 = i1 + 16 | 0;
   i73 = (HEAP32[i72 >> 2] | 0) + (HEAP32[i70 >> 2] | 0) | 0;
   d80 = +(HEAP32[i24 + 8 >> 2] | 0);
   d78 = +(HEAP32[i24 + 12 >> 2] | 0);
   d83 = +(+(HEAP32[i24 >> 2] | 0));
   d81 = +(+(HEAP32[i24 + 4 >> 2] | 0));
   HEAPF32[i29 >> 2] = d83;
   HEAPF32[i29 + 4 >> 2] = d81;
   i84 = i28 + 8 | 0;
   d81 = +d80;
   d80 = +d78;
   HEAPF32[i84 >> 2] = d81;
   HEAPF32[i84 + 4 >> 2] = d80;
   __ZN7WebCore14roundedIntRectERKNS_9FloatRectE(i33, i30);
   i84 = i73 + (HEAP32[i32 + 4 >> 2] | 0) | 0;
   HEAP32[i27 >> 2] = i75 + (HEAP32[i32 >> 2] | 0);
   HEAP32[i27 + 4 >> 2] = i84;
   __ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE(i26, i1, i27);
   i84 = HEAP32[i69 >> 2] | 0;
   i75 = HEAP32[i59 >> 2] | 0;
   i73 = i75 + i84 | 0;
   if ((HEAP32[i25 >> 2] | 0) == (i73 | 0)) {
    i85 = HEAP32[i72 >> 2] | 0;
    i86 = HEAP32[i70 >> 2] | 0;
    if ((HEAP32[i26 + 4 >> 2] | 0) == (i86 + i85 | 0)) {
     i65 = i62;
     break;
    } else {
     i87 = i86;
     i88 = i85;
    }
   } else {
    i87 = HEAP32[i70 >> 2] | 0;
    i88 = HEAP32[i72 >> 2] | 0;
   }
   i85 = HEAP32[i25 >> 2] | 0;
   i86 = HEAP32[i25 + 4 >> 2] | 0;
   if ((i85 | 0) == (i73 | 0)) {
    i89 = i87 + i88 | 0;
    if ((i86 | 0) == (i89 | 0)) {
     i90 = i84;
     i91 = i75;
     i92 = i87;
     i93 = i88;
     i94 = i89;
    } else {
     i95 = i89;
     i71 = 12;
    }
   } else {
    i95 = i88 + i87 | 0;
    i71 = 12;
   }
   if ((i71 | 0) == 12) {
    HEAP32[i7 >> 2] = i85;
    HEAP32[i7 + 4 >> 2] = i86;
    __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i6, i7);
    __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1 | 0, i6);
    i90 = HEAP32[i69 >> 2] | 0;
    i91 = HEAP32[i59 >> 2] | 0;
    i92 = HEAP32[i70 >> 2] | 0;
    i93 = HEAP32[i72 >> 2] | 0;
    i94 = i95;
   }
   i72 = i15 | 0;
   i70 = i73 - i90 - i91 + (HEAP32[i72 >> 2] | 0) | 0;
   HEAP32[i72 >> 2] = i70;
   i72 = i15 + 4 | 0;
   i73 = i94 - i92 - i93 + (HEAP32[i72 >> 2] | 0) | 0;
   HEAP32[i72 >> 2] = i73;
   d80 = +(i70 | 0);
   d81 = +(i73 | 0);
   d78 = +(HEAP32[i15 + 8 >> 2] | 0);
   d83 = +(HEAP32[i15 + 12 >> 2] | 0);
   d79 = +d80;
   d82 = +d81;
   HEAPF32[i36 >> 2] = d79;
   HEAPF32[i36 + 4 >> 2] = d82;
   d82 = d80 + d78;
   HEAPF32[i35 + 8 >> 2] = d82;
   HEAPF32[i37 + 12 >> 2] = d81;
   d78 = d81 + d83;
   HEAPF32[i35 + 16 >> 2] = d82;
   HEAPF32[i37 + 20 >> 2] = d78;
   HEAPF32[i35 + 24 >> 2] = d80;
   HEAPF32[i37 + 28 >> 2] = d78;
   __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i38, i74, i37, 0, 2, 0);
   __ZNK7WebCore9FloatQuad11boundingBoxEv(i34, i38);
   __ZN7WebCore10LayoutRectC1ERKNS_9FloatRectE(i31, i34);
   i74 = i31;
   HEAP32[i57 >> 2] = HEAP32[i74 >> 2];
   HEAP32[i57 + 4 >> 2] = HEAP32[i74 + 4 >> 2];
   HEAP32[i57 + 8 >> 2] = HEAP32[i74 + 8 >> 2];
   HEAP32[i57 + 12 >> 2] = HEAP32[i74 + 12 >> 2];
   i65 = i62;
  }
 } while (0);
 if (__ZNK7WebCore12EventHandler20autoscrollInProgressEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i58 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0) | 0) {
  i96 = __ZNK7WebCore11RenderLayer24enclosingScrollableLayerEv(i1) | 0;
 } else {
  i96 = i65;
 }
 if ((i96 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore11RenderLayer19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i96, i14, i3, i4);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i24 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i25 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i26 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i27 = i26;
 if ((HEAP8[i2 + 20 | 0] & 32) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i6;
  return;
 }
 i28 = (i2 | 0) == (i3 | 0);
 do {
  if (!((i5 & 8 | 0) == 0 | i28)) {
   if ((HEAP8[i2 + 22 | 0] & 40) != 0) {
    break;
   }
   _memset(i1 | 0, 0, 16) | 0;
   STACKTOP = i6;
   return;
  }
 } while (0);
 if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
  __ZNK7WebCore10RenderView20unscaledDocumentRectEv(i11, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
  i11 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i1 + 4 >> 2] = i11;
  i11 = i9 + 8 | 0;
  i9 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i1 + 8 >> 2] = HEAP32[i11 >> 2];
  HEAP32[i1 + 12 >> 2] = i9;
  STACKTOP = i6;
  return;
 }
 __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i12, i2, i5);
 i9 = i2 + 32 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(__ZNK7WebCore12RenderObject15containingBlockEv(i11 | 0) | 0, i12);
 } else {
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i11, i12);
 }
 i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0;
 i10 = HEAP32[(HEAP32[i11 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP32[i10 + 692 >> 2] | 0) == (i11 | 0)) {
  i11 = HEAP32[(HEAP32[i10 + 1584 >> 2] | 0) + 116 >> 2] | 0;
  i10 = i12 + 8 | 0;
  i29 = HEAP32[i10 >> 2] | 0;
  i30 = i11 | 0;
  i31 = i11;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 184 >> 2] & 31](i7, i30);
  i11 = (HEAP32[i7 >> 2] | 0) - (HEAP32[i12 >> 2] | 0) | 0;
  HEAP32[i10 >> 2] = (i29 | 0) < (i11 | 0) ? i11 : i29;
  i29 = i12 + 12 | 0;
  i11 = HEAP32[i29 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i31 >> 2] | 0) + 184 >> 2] & 31](i8, i30);
  i30 = (HEAP32[i8 + 4 >> 2] | 0) - (HEAP32[i12 + 4 >> 2] | 0) | 0;
  HEAP32[i29 >> 2] = (i11 | 0) < (i30 | 0) ? i30 : i11;
 }
 i11 = i13;
 i30 = i12;
 HEAP32[i11 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 do {
  if ((i5 & 2 | 0) != 0) {
   __ZNK7WebCore11RenderLayer13localClipRectEv(i16, i2);
   i29 = HEAP32[i15 >> 2] | 0;
   if (!((i29 | 0) != -1073741824 | ((i29 & 0 | 0) != 0 | (HEAP32[i15 + 4 >> 2] & -1 | 0) != (-1073741824 | 0)))) {
    i29 = i14 + 8 | 0;
    if ((HEAP32[i29 >> 2] | 0) == 2147483647 & (HEAP32[i29 + 4 >> 2] | 0) == 2147483647) {
     break;
    }
   }
   do {
    if ((i5 & 1 | 0) != 0) {
     i29 = HEAP32[i2 + 208 >> 2] | 0;
     if ((i29 | 0) == 0) {
      i32 = 0;
     } else {
      i32 = (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i29) | 0) ^ 1;
     }
     i29 = HEAP32[i2 + 172 >> 2] | 0;
     if ((i29 | 0) == 0 | i32) {
      break;
     }
     __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i17, i29, i16);
     i29 = i14;
     i8 = i17;
     HEAP32[i29 >> 2] = HEAP32[i8 >> 2];
     HEAP32[i29 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
     HEAP32[i29 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
     HEAP32[i29 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    }
   } while (0);
   i8 = i18 | 0;
   HEAP32[i8 >> 2] = 0;
   i29 = i18 + 4 | 0;
   HEAP32[i29 >> 2] = 0;
   if (i28 | (i2 | 0) == 0) {
    i33 = 0;
    i34 = 0;
   } else {
    i31 = i2;
    while (1) {
     i31 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i31, i3, i18, 0) | 0;
     if ((i31 | 0) == 0 | (i31 | 0) == (i3 | 0)) {
      break;
     }
    }
    i33 = HEAP32[i8 >> 2] | 0;
    i34 = HEAP32[i29 >> 2] | 0;
   }
   i31 = i14;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + i33;
   i31 = i16 + 4 | 0;
   HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + i34;
   i31 = i1;
   i10 = i14;
   HEAP32[i31 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i31 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i31 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i31 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   STACKTOP = i6;
   return;
  }
 } while (0);
 i14 = i5 & 32;
 i34 = i5 & 40 | 71;
 __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i2);
 i16 = HEAP32[i2 + 176 >> 2] | 0;
 do {
  if ((i16 | 0) != 0) {
   i33 = HEAP32[i16 + 40 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   if ((HEAP32[i33 + 208 >> 2] | 0) != 0) {
    break;
   }
   __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i19, i33, i2, 0, i34);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i19);
  }
 } while (0);
 i19 = HEAP32[i2 + 140 >> 2] | 0;
 L45 : do {
  if ((i19 | 0) != 0) {
   i16 = i19 + 8 | 0;
   i33 = HEAP32[i16 >> 2] | 0;
   if ((i33 | 0) == 0) {
    break;
   }
   i18 = i19 | 0;
   i17 = (i14 | 0) == 0;
   i32 = 0;
   i15 = i33;
   while (1) {
    if (i15 >>> 0 <= i32 >>> 0) {
     break;
    }
    i10 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i32 << 2) >> 2] | 0;
    if (i17) {
     if ((HEAP32[i10 + 208 >> 2] | 0) == 0) {
      i35 = 36;
     }
    } else {
     i35 = 36;
    }
    if ((i35 | 0) == 36) {
     i35 = 0;
     __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i20, i10, i2, 0, i34);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i20);
    }
    i10 = i32 + 1 | 0;
    if (i10 >>> 0 >= i33 >>> 0) {
     break L45;
    }
    i32 = i10;
    i15 = HEAP32[i16 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i20 = HEAP32[i2 + 136 >> 2] | 0;
 L59 : do {
  if ((i20 | 0) != 0) {
   i19 = i20 + 8 | 0;
   i16 = HEAP32[i19 >> 2] | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   i15 = i20 | 0;
   if ((i14 | 0) == 0) {
    i36 = 0;
    i37 = i16;
   } else {
    i32 = 0;
    i33 = i16;
    while (1) {
     if (i33 >>> 0 <= i32 >>> 0) {
      break;
     }
     i17 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i32 << 2) >> 2] | 0;
     i18 = i17 + 32 | 0;
     i29 = HEAP32[i18 >> 2] | 0;
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 248 >> 2] & 63](i29 | 0) | 0) {
      i29 = HEAP32[i18 >> 2] | 0;
      if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i29 >> 2] | 0) + 1188 >> 2] & 63](i29) | 0)) {
       i35 = 53;
      }
     } else {
      i35 = 53;
     }
     if ((i35 | 0) == 53) {
      i35 = 0;
      __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i21, i17, i2, 0, i34);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i21);
     }
     i17 = i32 + 1 | 0;
     if (i17 >>> 0 >= i16 >>> 0) {
      break L59;
     }
     i32 = i17;
     i33 = HEAP32[i19 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   while (1) {
    if (i37 >>> 0 <= i36 >>> 0) {
     break;
    }
    i33 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i36 << 2) >> 2] | 0;
    do {
     if ((HEAP32[i33 + 208 >> 2] | 0) == 0) {
      i32 = i33 + 32 | 0;
      i17 = HEAP32[i32 >> 2] | 0;
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 248 >> 2] & 63](i17 | 0) | 0) {
       i17 = HEAP32[i32 >> 2] | 0;
       if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i17 >> 2] | 0) + 1188 >> 2] & 63](i17) | 0) {
        break;
       }
      }
      __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i21, i33, i2, 0, i34);
      __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i21);
     }
    } while (0);
    i33 = i36 + 1 | 0;
    if (i33 >>> 0 >= i16 >>> 0) {
     break L59;
    }
    i36 = i33;
    i37 = HEAP32[i19 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i37 = HEAP32[i2 + 144 >> 2] | 0;
 L85 : do {
  if ((i37 | 0) != 0) {
   i36 = i37 + 8 | 0;
   i21 = HEAP32[i36 >> 2] | 0;
   if ((i21 | 0) == 0) {
    break;
   }
   i20 = i37 | 0;
   if ((i14 | 0) == 0) {
    i38 = 0;
    i39 = i21;
   } else {
    i19 = 0;
    i16 = i21;
    while (1) {
     if (i16 >>> 0 <= i19 >>> 0) {
      break;
     }
     __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i22, HEAP32[(HEAP32[i20 >> 2] | 0) + (i19 << 2) >> 2] | 0, i2, 0, i34);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i22);
     i15 = i19 + 1 | 0;
     if (i15 >>> 0 >= i21 >>> 0) {
      break L85;
     }
     i19 = i15;
     i16 = HEAP32[i36 >> 2] | 0;
    }
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   while (1) {
    if (i39 >>> 0 <= i38 >>> 0) {
     break;
    }
    i16 = HEAP32[(HEAP32[i20 >> 2] | 0) + (i38 << 2) >> 2] | 0;
    if ((HEAP32[i16 + 208 >> 2] | 0) == 0) {
     __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i22, i16, i2, 0, i34);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i13, i22);
    }
    i16 = i38 + 1 | 0;
    if (i16 >>> 0 >= i21 >>> 0) {
     break L85;
    }
    i38 = i16;
    i39 = HEAP32[i36 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 L103 : do {
  if ((i5 & 4 | 0) != 0) {
   i39 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
   do {
    if ((HEAP32[i39 + 12 >> 2] | 0) == 0) {
     _memset(i23 | 0, 0, 16) | 0;
     i40 = i23 + 12 | 0;
     i41 = i23 + 4 | 0;
     i35 = 73;
    } else {
     __ZNK7WebCore16FilterOperations7outsetsEv(i23, i39 + 4 | 0);
     i38 = i23 + 12 | 0;
     i22 = HEAP32[i38 >> 2] | 0;
     i34 = i23 + 4 | 0;
     if ((i22 | 0) == 0) {
      i40 = i38;
      i41 = i34;
      i35 = 73;
      break;
     }
     i42 = HEAP32[i34 >> 2] | 0;
     i43 = i38;
     i44 = i22;
    }
   } while (0);
   do {
    if ((i35 | 0) == 73) {
     i39 = HEAP32[i41 >> 2] | 0;
     if ((i39 | 0) != 0) {
      i42 = i39;
      i43 = i40;
      i44 = 0;
      break;
     }
     if ((HEAP32[i23 >> 2] | 0) != 0) {
      i42 = 0;
      i43 = i40;
      i44 = 0;
      break;
     }
     if ((HEAP32[i23 + 8 >> 2] | 0) == 0) {
      break L103;
     } else {
      i42 = 0;
      i43 = i40;
      i44 = 0;
     }
    }
   } while (0);
   i39 = HEAP32[i23 >> 2] | 0;
   i22 = i13 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - i44;
   i22 = i13 + 4 | 0;
   HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) - i39;
   i22 = (HEAP32[i23 + 8 >> 2] | 0) + i39 | 0;
   i39 = i13 + 8 | 0;
   HEAP32[i39 >> 2] = i42 + (HEAP32[i43 >> 2] | 0) + (HEAP32[i39 >> 2] | 0);
   i39 = i13 + 12 | 0;
   HEAP32[i39 >> 2] = i22 + (HEAP32[i39 >> 2] | 0);
  }
 } while (0);
 do {
  if ((i5 & 1 | 0) != 0) {
   i43 = HEAP32[i2 + 208 >> 2] | 0;
   if ((i43 | 0) == 0) {
    i45 = 0;
   } else {
    i45 = (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i43) | 0) ^ 1;
   }
   i43 = HEAP32[i2 + 172 >> 2] | 0;
   if ((i43 | 0) == 0 | i45) {
    break;
   }
   __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i24, i43, i12);
   i42 = i24;
   HEAP32[i30 >> 2] = HEAP32[i42 >> 2];
   HEAP32[i30 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
   HEAP32[i30 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
   HEAP32[i30 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
   __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i25, i43, i13);
   i43 = i25;
   HEAP32[i11 >> 2] = HEAP32[i43 >> 2];
   HEAP32[i11 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
   HEAP32[i11 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
   HEAP32[i11 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
  }
 } while (0);
 i25 = i26;
 HEAP32[i25 >> 2] = 0;
 i30 = i27 + 4 | 0;
 HEAP32[i30 >> 2] = 0;
 do {
  if ((i4 | 0) == 0) {
   if (i28 | (i2 | 0) == 0) {
    i46 = 0;
    i47 = 0;
    break;
   } else {
    i48 = i2;
   }
   while (1) {
    i48 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i48, i3, i27, 0) | 0;
    if ((i48 | 0) == 0 | (i48 | 0) == (i3 | 0)) {
     break;
    }
   }
   i46 = HEAP32[i25 >> 2] | 0;
   i47 = HEAP32[i30 >> 2] | 0;
  } else {
   i24 = i4;
   i12 = HEAP32[i24 >> 2] | 0;
   i45 = HEAP32[i24 + 4 >> 2] | 0;
   HEAP32[i26 >> 2] = i12;
   HEAP32[i26 + 4 >> 2] = i45;
   i46 = i12;
   i47 = i45;
  }
 } while (0);
 i26 = i13 | 0;
 HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + i46;
 i46 = i13 + 4 | 0;
 HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i47;
 i47 = i1;
 HEAP32[i47 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i47 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 HEAP32[i47 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
 HEAP32[i47 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i9 + 32 | 0;
 i13 = i9 + 56 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i22 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i23 = i2 | 0;
 do {
  if ((HEAP32[i23 >> 2] | 0) == (i1 | 0)) {
   i24 = 4;
  } else {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i24 = 4;
    break;
   }
   __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i12, i1, i2);
   i25 = i5;
   i26 = i12;
   HEAP32[i25 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i25 + 4 >> 2] = HEAP32[i26 + 4 >> 2];
   HEAP32[i25 + 8 >> 2] = HEAP32[i26 + 8 >> 2];
   HEAP32[i25 + 12 >> 2] = HEAP32[i26 + 12 >> 2];
   HEAP8[i25 + 16 | 0] = HEAP8[i26 + 16 | 0] | 0;
   __ZN7WebCore10LayoutRect9intersectERKS0_(i5 | 0, i3);
  }
 } while (0);
 if ((i24 | 0) == 4) {
  _memmove(i5 | 0, i3 | 0, 16) | 0;
  HEAP8[i5 + 16 | 0] = 0;
 }
 i3 = i13;
 HEAP32[i3 >> 2] = 0;
 i12 = i14 + 4 | 0;
 HEAP32[i12 >> 2] = 0;
 do {
  if ((i8 | 0) == 0) {
   i26 = HEAP32[i23 >> 2] | 0;
   if ((i26 | 0) == (i1 | 0) | (i1 | 0) == 0) {
    break;
   } else {
    i27 = i1;
   }
   while (1) {
    i27 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i27, i26, i14, 0) | 0;
    if ((i27 | 0) == 0 | (i27 | 0) == (i26 | 0)) {
     break;
    }
   }
  } else {
   i26 = i8;
   i25 = HEAP32[i26 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i13 + 4 >> 2] = i25;
  }
 } while (0);
 i8 = HEAP32[(HEAP32[i23 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 248 >> 2] & 63](i8 | 0) | 0) {
   if ((HEAP32[i8 + 20 >> 2] & 25165824 | 0) != 16777216) {
    break;
   }
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   i27 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
   HEAPF32[i16 >> 2] = +0;
   HEAPF32[i16 + 4 >> 2] = +0;
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i15, i27, i16, 1);
   d28 = +HEAPF32[i15 >> 2];
   do {
    if (d28 < +2147483647) {
     if (d28 <= +-2147483648) {
      i29 = -2147483648;
      break;
     }
     i29 = ~~d28;
    } else {
     i29 = 2147483647;
    }
   } while (0);
   d28 = +HEAPF32[i15 + 4 >> 2];
   do {
    if (d28 < +2147483647) {
     if (d28 <= +-2147483648) {
      i30 = -2147483648;
      break;
     }
     i30 = ~~d28;
    } else {
     i30 = 2147483647;
    }
   } while (0);
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i29;
   HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + i30;
  }
 } while (0);
 i30 = HEAP32[i13 + 4 >> 2] | 0;
 i29 = HEAP32[i1 + 104 >> 2] | 0;
 i15 = HEAP32[i1 + 108 >> 2] | 0;
 i16 = i4;
 HEAP32[i16 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i16 + 4 >> 2] = i30;
 i30 = i4 + 8 | 0;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i15;
 i15 = i6;
 i30 = i5;
 HEAP32[i15 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i15 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i15 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 HEAP8[i15 + 16 | 0] = HEAP8[i30 + 16 | 0] | 0;
 i29 = i7;
 HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
 HEAP32[i29 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
 HEAP32[i29 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
 HEAP32[i29 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
 HEAP8[i29 + 16 | 0] = HEAP8[i30 + 16 | 0] | 0;
 i4 = i2 + 4 | 0;
 i16 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i16 | 0) == 0) {
   i24 = 21;
  } else {
   i13 = HEAP32[i16 + 116 >> 2] | 0;
   if ((HEAP8[i1 + 20 | 0] & 32) == 0 | (i13 | 0) == 0) {
    i24 = 21;
    break;
   }
   i8 = i1 + 32 | 0;
   i27 = HEAP32[i8 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i27 >> 2] | 0) + 248 >> 2] & 63](i27 | 0) | 0) {
    if ((HEAP32[i27 + 20 >> 2] & 25165824 | 0) != 16777216) {
     i31 = i8;
     break;
    }
   }
   i27 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i27 + 20 >> 2] & 512 | 0) == 0 | (i27 | 0) == 0) {
    i31 = i8;
    break;
   }
   __ZN7WebCore12RenderRegion24visualOverflowRectForBoxEPKNS_9RenderBoxE(i17, HEAP32[i4 >> 2] | 0, i27);
   i27 = (HEAP32[(HEAP32[i13 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
   if ((i27 | 0) == 3) {
    i25 = i17 + 4 | 0;
    HEAP32[i25 >> 2] = (HEAP32[i25 >> 2] | 0) + (HEAP32[i13 + 56 >> 2] | 0);
   } else if ((i27 | 0) == 1) {
    i27 = i17 | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + (HEAP32[i13 + 52 >> 2] | 0);
   }
   i13 = HEAP32[i12 >> 2] | 0;
   i27 = i17 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
   i27 = i17 + 4 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + i13;
   __ZN7WebCore10LayoutRect9intersectERKS0_(i5 | 0, i17);
   HEAP32[i15 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
   HEAP32[i15 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
   HEAP32[i15 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
   HEAP8[i15 + 16 | 0] = HEAP8[i30 + 16 | 0] | 0;
   HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i29 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
   HEAP32[i29 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
   HEAP32[i29 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
   HEAP8[i29 + 16 | 0] = HEAP8[i30 + 16 | 0] | 0;
   i13 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[(HEAP32[i13 + 8 >> 2] | 0) + 20 >> 2] & 65536 | 0) != 0) {
    i27 = __ZNK7WebCore12RenderRegion20regionContainerLayerEv(i13) | 0;
    if ((i27 | 0) != (HEAP32[i23 >> 2] | 0)) {
     i31 = i8;
     break;
    }
    if ((HEAP32[i2 + 16 >> 2] | 0) == 1) {
     i31 = i8;
     break;
    }
   }
   i27 = __ZNK7WebCore12RenderObject18maximalOutlineSizeENS_10PaintPhaseE(HEAP32[i8 >> 2] | 0, 5) | 0;
   i13 = i7 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i27;
   i13 = i7 + 8 | 0;
   i25 = i27 << 1;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i25;
   i13 = i7 + 4 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i27;
   i27 = i7 + 12 | 0;
   HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) + i25;
   i31 = i8;
  }
 } while (0);
 if ((i24 | 0) == 21) {
  i31 = i1 + 32 | 0;
 }
 i30 = HEAP32[i31 >> 2] | 0;
 i29 = HEAP32[i30 + 20 >> 2] | 0;
 do {
  if ((i29 & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    i24 = 34;
    break;
   }
   if ((i29 & 65536 | 0) == 0) {
    i32 = i30;
   } else {
    i24 = 36;
   }
  } else {
   i24 = 34;
  }
 } while (0);
 do {
  if ((i24 | 0) == 34) {
   if ((i29 & 65536 | 0) != 0) {
    i24 = 36;
    break;
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 L50 : do {
  if ((i24 | 0) == 36) {
   if ((HEAP32[i23 >> 2] | 0) == (i1 | 0)) {
    if ((HEAP32[i2 + 16 >> 2] | 0) != 1) {
     i32 = i30;
     break;
    }
   }
   FUNCTION_TABLE_viiiiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 936 >> 2] & 1](i18, i30, i14, HEAP32[i4 >> 2] | 0, HEAP32[i2 + 12 >> 2] | 0, 0);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i6 | 0, i18);
   i29 = HEAP32[i31 >> 2] | 0;
   i15 = HEAP32[(HEAP32[i29 + 36 >> 2] | 0) + 16 >> 2] | 0;
   i17 = i15 + 136 | 0;
   do {
    if ((HEAP8[i15 + 141 | 0] | 0) != 10) {
     if ((HEAP8[i15 + 142 | 0] & 1) == 0) {
      if ((HEAP32[i17 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i17 >> 2] != +0) {
       break;
      }
     }
     i16 = i15 + 152 | 0;
     if ((HEAP8[i15 + 157 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i15 + 158 | 0] & 1) == 0) {
      if ((HEAP32[i16 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i16 >> 2] != +0) {
       break;
      }
     }
     i16 = i15 + 168 | 0;
     if ((HEAP8[i15 + 173 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i15 + 174 | 0] & 1) == 0) {
      if ((HEAP32[i16 >> 2] | 0) != 0) {
       break;
      }
     } else {
      if (+HEAPF32[i16 >> 2] != +0) {
       break;
      }
     }
     i16 = i15 + 184 | 0;
     if ((HEAP8[i15 + 189 | 0] | 0) == 10) {
      break;
     }
     if ((HEAP8[i15 + 190 | 0] & 1) == 0) {
      if ((HEAP32[i16 >> 2] | 0) == 0) {
       i32 = i29;
       break L50;
      } else {
       break;
      }
     } else {
      if (+HEAPF32[i16 >> 2] != +0) {
       break;
      } else {
       i32 = i29;
       break L50;
      }
     }
    }
   } while (0);
   HEAP8[i6 + 16 | 0] = 1;
   i32 = HEAP32[i31 >> 2] | 0;
  }
 } while (0);
 i18 = HEAP32[i32 + 20 >> 2] | 0;
 do {
  if ((i18 & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    i33 = i32;
    i34 = i18;
    break;
   }
   __ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE(i19, i32, i14, HEAP32[i4 >> 2] | 0);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i5 | 0, i19);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i6 | 0, i19);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i7 | 0, i19);
   i30 = HEAP32[i31 >> 2] | 0;
   i33 = i30;
   i34 = HEAP32[i30 + 20 >> 2] | 0;
  } else {
   i33 = i32;
   i34 = i18;
  }
 } while (0);
 if ((i34 & 512 | 0) == 0) {
  i35 = 0;
 } else {
  i35 = i33;
 }
 i18 = i11;
 i32 = HEAP32[i35 + 88 >> 2] | 0;
 do {
  if ((i32 | 0) == 0) {
   i36 = i33;
   i37 = i34;
  } else {
   i19 = i10 | 0;
   i7 = i35 + 52 | 0;
   i6 = HEAP32[i7 >> 2] | 0;
   i14 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   i19 = i10 + 8 | 0;
   HEAP32[i19 >> 2] = i6;
   HEAP32[i19 + 4 >> 2] = i14;
   i14 = i32 + 20 | 0;
   HEAP32[i18 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i18 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i18 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i18 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   if (__ZNK7WebCore10LayoutRect8containsERKS0_(i10, i11) | 0) {
    i14 = HEAP32[i31 >> 2] | 0;
    i36 = i14;
    i37 = HEAP32[i14 + 20 >> 2] | 0;
    break;
   }
   i14 = HEAP32[i4 >> 2] | 0;
   i19 = HEAP32[i31 >> 2] | 0;
   if ((HEAP32[i19 + 20 >> 2] & 512 | 0) == 0) {
    i38 = 0;
   } else {
    i38 = i19;
   }
   if ((i14 | 0) == 0) {
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 824 >> 2] & 31](i20, i38);
   } else {
    __ZN7WebCore12RenderRegion24visualOverflowRectForBoxEPKNS_9RenderBoxE(i20, i14, i38);
   }
   i14 = HEAP32[i31 >> 2] | 0;
   if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
    i39 = 0;
   } else {
    i39 = i14;
   }
   __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i39, i20);
   i14 = HEAP32[i12 >> 2] | 0;
   i19 = i20 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
   i19 = i20 + 4 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i14;
   do {
    if ((HEAP32[i23 >> 2] | 0) == (i1 | 0)) {
     if ((HEAP32[i2 + 16 >> 2] | 0) == 1) {
      break;
     }
     STACKTOP = i9;
     return;
    }
   } while (0);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i5 | 0, i20);
   STACKTOP = i9;
   return;
  }
 } while (0);
 if ((i37 & 512 | 0) == 0) {
  i40 = 0;
 } else {
  i40 = i36;
 }
 __ZNK7WebCore9RenderBox21borderBoxRectInRegionEPNS_12RenderRegionENS0_24RenderBoxRegionInfoFlagsE(i21, i40, HEAP32[i4 >> 2] | 0, 0);
 i40 = HEAP32[i4 >> 2] | 0;
 if ((i40 | 0) != 0) {
  i4 = HEAP32[i31 >> 2] | 0;
  if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
   i41 = 0;
  } else {
   i41 = i4;
  }
  __ZNK7WebCore12RenderRegion21rectFlowPortionForBoxEPKNS_9RenderBoxERKNS_10LayoutRectE(i22, i40, i41, i21);
  i41 = i21;
  i40 = i22;
  HEAP32[i41 >> 2] = HEAP32[i40 >> 2];
  HEAP32[i41 + 4 >> 2] = HEAP32[i40 + 4 >> 2];
  HEAP32[i41 + 8 >> 2] = HEAP32[i40 + 8 >> 2];
  HEAP32[i41 + 12 >> 2] = HEAP32[i40 + 12 >> 2];
 }
 i40 = HEAP32[i12 >> 2] | 0;
 i12 = i21 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i3 >> 2] | 0);
 i3 = i21 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i40;
 do {
  if ((HEAP32[i23 >> 2] | 0) == (i1 | 0)) {
   if ((HEAP32[i2 + 16 >> 2] | 0) == 1) {
    break;
   }
   STACKTOP = i9;
   return;
  }
 } while (0);
 __ZN7WebCore10LayoutRect9intersectERKS0_(i5 | 0, i21);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore11RenderLayer35updateDescendantsLayerListsIfNeededEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 32 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i8 = 3;
 } else {
  if ((HEAP8[i1 + 21 | 0] & 20) == 0) {
   i9 = 0;
   i10 = 0;
   i11 = 0;
  } else {
   i8 = 3;
  }
 }
 L3 : do {
  if ((i8 | 0) == 3) {
   i12 = HEAP32[i1 + 140 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i9 = 0;
    i10 = 0;
    i11 = 0;
    break;
   }
   i13 = i12 + 8 | 0;
   i14 = HEAP32[i13 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i9 = 0;
    i10 = 0;
    i11 = 0;
    break;
   }
   i15 = i12 | 0;
   i12 = i4;
   i16 = 0;
   i17 = 0;
   i18 = 0;
   i19 = 0;
   i20 = i14;
   L7 : while (1) {
    if (i20 >>> 0 <= i19 >>> 0) {
     i8 = 7;
     break;
    }
    i21 = HEAP32[(HEAP32[i15 >> 2] | 0) + (i19 << 2) >> 2] | 0;
    HEAP32[i4 >> 2] = i21;
    if ((i16 | 0) == (i17 | 0)) {
     i22 = i17 + 1 | 0;
     do {
      if (i18 >>> 0 > i4 >>> 0) {
       i8 = 12;
      } else {
       if ((i18 + (i17 << 2) | 0) >>> 0 <= i4 >>> 0) {
        i8 = 12;
        break;
       }
       i23 = i12 - i18 >> 2;
       i24 = i22 + (i17 >>> 2) | 0;
       i25 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
       i24 = i25 >>> 0 > i22 >>> 0 ? i25 : i22;
       do {
        if (i17 >>> 0 < i24 >>> 0) {
         if (i24 >>> 0 > 1073741823 >>> 0) {
          i8 = 19;
          break L7;
         }
         i25 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
         i26 = i25 >>> 2;
         i27 = __ZN3WTF10fastMallocEj(i25) | 0;
         i25 = i27;
         i28 = i18;
         _memcpy(i27 | 0, i28 | 0, i17 << 2) | 0;
         if ((i18 | 0) == 0) {
          i29 = i25;
          i30 = i26;
          break;
         }
         i27 = (i25 | 0) == (i18 | 0);
         __ZN3WTF8fastFreeEPv(i28);
         i29 = i27 ? 0 : i25;
         i30 = i27 ? 0 : i26;
        } else {
         i29 = i18;
         i30 = i17;
        }
       } while (0);
       i31 = i29 + (i23 << 2) | 0;
       i32 = i29;
       i33 = i30;
      }
     } while (0);
     do {
      if ((i8 | 0) == 12) {
       i8 = 0;
       i24 = i22 + (i17 >>> 2) | 0;
       i26 = i24 >>> 0 > 16 >>> 0 ? i24 : 16;
       i24 = i26 >>> 0 > i22 >>> 0 ? i26 : i22;
       if (i17 >>> 0 >= i24 >>> 0) {
        i31 = i4;
        i32 = i18;
        i33 = i17;
        break;
       }
       if (i24 >>> 0 > 1073741823 >>> 0) {
        i8 = 14;
        break L7;
       }
       i26 = __ZN3WTF18fastMallocGoodSizeEj(i24 << 2) | 0;
       i24 = i26 >>> 2;
       i27 = __ZN3WTF10fastMallocEj(i26) | 0;
       i26 = i27;
       i25 = i18;
       _memcpy(i27 | 0, i25 | 0, i17 << 2) | 0;
       if ((i18 | 0) == 0) {
        i31 = i4;
        i32 = i26;
        i33 = i24;
        break;
       }
       i27 = (i26 | 0) == (i18 | 0);
       __ZN3WTF8fastFreeEPv(i25);
       i31 = i4;
       i32 = i27 ? 0 : i26;
       i33 = i27 ? 0 : i24;
      }
     } while (0);
     HEAP32[i32 + (i17 << 2) >> 2] = HEAP32[i31 >> 2];
     i34 = i32;
     i35 = i33;
     i36 = i22;
    } else {
     HEAP32[i18 + (i16 << 2) >> 2] = i21;
     i34 = i18;
     i35 = i17;
     i36 = i16 + 1 | 0;
    }
    i24 = i19 + 1 | 0;
    if (i24 >>> 0 >= i14 >>> 0) {
     i9 = i34;
     i10 = i35;
     i11 = i36;
     break L3;
    }
    i16 = i36;
    i17 = i35;
    i18 = i34;
    i19 = i24;
    i20 = HEAP32[i13 >> 2] | 0;
   }
   if ((i8 | 0) == 7) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i8 | 0) == 14) {
    _WTFCrash();
   } else if ((i8 | 0) == 19) {
    _WTFCrash();
   }
  }
 } while (0);
 i34 = HEAP32[i1 + 144 >> 2] | 0;
 L34 : do {
  if ((i34 | 0) == 0) {
   i37 = i9;
   i38 = i10;
   i39 = i11;
  } else {
   i35 = i34 + 8 | 0;
   i36 = HEAP32[i35 >> 2] | 0;
   if ((i36 | 0) == 0) {
    i37 = i9;
    i38 = i10;
    i39 = i11;
    break;
   }
   i33 = i34 | 0;
   i32 = i5;
   i31 = i11;
   i4 = i10;
   i30 = i9;
   i29 = 0;
   i13 = i36;
   L37 : while (1) {
    if (i13 >>> 0 <= i29 >>> 0) {
     i8 = 30;
     break;
    }
    i20 = HEAP32[(HEAP32[i33 >> 2] | 0) + (i29 << 2) >> 2] | 0;
    HEAP32[i5 >> 2] = i20;
    if ((i31 | 0) == (i4 | 0)) {
     i19 = i4 + 1 | 0;
     do {
      if (i30 >>> 0 > i5 >>> 0) {
       i8 = 35;
      } else {
       if ((i30 + (i4 << 2) | 0) >>> 0 <= i5 >>> 0) {
        i8 = 35;
        break;
       }
       i18 = i32 - i30 >> 2;
       i17 = i19 + (i4 >>> 2) | 0;
       i16 = i17 >>> 0 > 16 >>> 0 ? i17 : 16;
       i17 = i16 >>> 0 > i19 >>> 0 ? i16 : i19;
       do {
        if (i4 >>> 0 < i17 >>> 0) {
         if (i17 >>> 0 > 1073741823 >>> 0) {
          i8 = 42;
          break L37;
         }
         i16 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 2) | 0;
         i14 = i16 >>> 2;
         i12 = __ZN3WTF10fastMallocEj(i16) | 0;
         i16 = i12;
         i15 = i30;
         _memcpy(i12 | 0, i15 | 0, i4 << 2) | 0;
         if ((i30 | 0) == 0) {
          i40 = i16;
          i41 = i14;
          break;
         }
         i12 = (i16 | 0) == (i30 | 0);
         __ZN3WTF8fastFreeEPv(i15);
         i40 = i12 ? 0 : i16;
         i41 = i12 ? 0 : i14;
        } else {
         i40 = i30;
         i41 = i4;
        }
       } while (0);
       i42 = i40 + (i18 << 2) | 0;
       i43 = i40;
       i44 = i41;
      }
     } while (0);
     do {
      if ((i8 | 0) == 35) {
       i8 = 0;
       i21 = i19 + (i4 >>> 2) | 0;
       i22 = i21 >>> 0 > 16 >>> 0 ? i21 : 16;
       i21 = i22 >>> 0 > i19 >>> 0 ? i22 : i19;
       if (i4 >>> 0 >= i21 >>> 0) {
        i42 = i5;
        i43 = i30;
        i44 = i4;
        break;
       }
       if (i21 >>> 0 > 1073741823 >>> 0) {
        i8 = 37;
        break L37;
       }
       i22 = __ZN3WTF18fastMallocGoodSizeEj(i21 << 2) | 0;
       i21 = i22 >>> 2;
       i17 = __ZN3WTF10fastMallocEj(i22) | 0;
       i22 = i17;
       i23 = i30;
       _memcpy(i17 | 0, i23 | 0, i4 << 2) | 0;
       if ((i30 | 0) == 0) {
        i42 = i5;
        i43 = i22;
        i44 = i21;
        break;
       }
       i17 = (i22 | 0) == (i30 | 0);
       __ZN3WTF8fastFreeEPv(i23);
       i42 = i5;
       i43 = i17 ? 0 : i22;
       i44 = i17 ? 0 : i21;
      }
     } while (0);
     HEAP32[i43 + (i4 << 2) >> 2] = HEAP32[i42 >> 2];
     i45 = i43;
     i46 = i44;
     i47 = i19;
    } else {
     HEAP32[i30 + (i31 << 2) >> 2] = i20;
     i45 = i30;
     i46 = i4;
     i47 = i31 + 1 | 0;
    }
    i21 = i29 + 1 | 0;
    if (i21 >>> 0 >= i36 >>> 0) {
     i37 = i45;
     i38 = i46;
     i39 = i47;
     break L34;
    }
    i31 = i47;
    i4 = i46;
    i30 = i45;
    i29 = i21;
    i13 = HEAP32[i35 >> 2] | 0;
   }
   if ((i8 | 0) == 30) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i8 | 0) == 42) {
    _WTFCrash();
   } else if ((i8 | 0) == 37) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i8 = 51;
 } else {
  if ((HEAP8[i1 + 21 | 0] & 20) == 0) {
   i48 = i37;
   i49 = i39;
  } else {
   i8 = 51;
  }
 }
 L66 : do {
  if ((i8 | 0) == 51) {
   i7 = HEAP32[i1 + 136 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i48 = i37;
    i49 = i39;
    break;
   }
   i45 = i7 + 8 | 0;
   i46 = HEAP32[i45 >> 2] | 0;
   if ((i46 | 0) == 0) {
    i48 = i37;
    i49 = i39;
    break;
   }
   i47 = i7 | 0;
   i7 = i6;
   i44 = i39;
   i43 = i38;
   i42 = i37;
   i5 = 0;
   i41 = i46;
   L70 : while (1) {
    if (i41 >>> 0 <= i5 >>> 0) {
     i8 = 55;
     break;
    }
    i40 = HEAP32[(HEAP32[i47 >> 2] | 0) + (i5 << 2) >> 2] | 0;
    HEAP32[i6 >> 2] = i40;
    if ((i44 | 0) == (i43 | 0)) {
     i9 = i43 + 1 | 0;
     do {
      if (i42 >>> 0 > i6 >>> 0) {
       i8 = 60;
      } else {
       if ((i42 + (i43 << 2) | 0) >>> 0 <= i6 >>> 0) {
        i8 = 60;
        break;
       }
       i10 = i7 - i42 >> 2;
       i11 = i9 + (i43 >>> 2) | 0;
       i34 = i11 >>> 0 > 16 >>> 0 ? i11 : 16;
       i11 = i34 >>> 0 > i9 >>> 0 ? i34 : i9;
       do {
        if (i43 >>> 0 < i11 >>> 0) {
         if (i11 >>> 0 > 1073741823 >>> 0) {
          i8 = 67;
          break L70;
         }
         i34 = __ZN3WTF18fastMallocGoodSizeEj(i11 << 2) | 0;
         i35 = i34 >>> 2;
         i13 = __ZN3WTF10fastMallocEj(i34) | 0;
         i34 = i13;
         i29 = i42;
         _memcpy(i13 | 0, i29 | 0, i43 << 2) | 0;
         if ((i42 | 0) == 0) {
          i50 = i34;
          i51 = i35;
          break;
         }
         i13 = (i34 | 0) == (i42 | 0);
         __ZN3WTF8fastFreeEPv(i29);
         i50 = i13 ? 0 : i34;
         i51 = i13 ? 0 : i35;
        } else {
         i50 = i42;
         i51 = i43;
        }
       } while (0);
       i52 = i50 + (i10 << 2) | 0;
       i53 = i50;
       i54 = i51;
      }
     } while (0);
     do {
      if ((i8 | 0) == 60) {
       i8 = 0;
       i20 = i9 + (i43 >>> 2) | 0;
       i19 = i20 >>> 0 > 16 >>> 0 ? i20 : 16;
       i20 = i19 >>> 0 > i9 >>> 0 ? i19 : i9;
       if (i43 >>> 0 >= i20 >>> 0) {
        i52 = i6;
        i53 = i42;
        i54 = i43;
        break;
       }
       if (i20 >>> 0 > 1073741823 >>> 0) {
        i8 = 62;
        break L70;
       }
       i19 = __ZN3WTF18fastMallocGoodSizeEj(i20 << 2) | 0;
       i20 = i19 >>> 2;
       i11 = __ZN3WTF10fastMallocEj(i19) | 0;
       i19 = i11;
       i18 = i42;
       _memcpy(i11 | 0, i18 | 0, i43 << 2) | 0;
       if ((i42 | 0) == 0) {
        i52 = i6;
        i53 = i19;
        i54 = i20;
        break;
       }
       i11 = (i19 | 0) == (i42 | 0);
       __ZN3WTF8fastFreeEPv(i18);
       i52 = i6;
       i53 = i11 ? 0 : i19;
       i54 = i11 ? 0 : i20;
      }
     } while (0);
     HEAP32[i53 + (i43 << 2) >> 2] = HEAP32[i52 >> 2];
     i55 = i53;
     i56 = i54;
     i57 = i9;
    } else {
     HEAP32[i42 + (i44 << 2) >> 2] = i40;
     i55 = i42;
     i56 = i43;
     i57 = i44 + 1 | 0;
    }
    i20 = i5 + 1 | 0;
    if (i20 >>> 0 >= i46 >>> 0) {
     i48 = i55;
     i49 = i57;
     break L66;
    }
    i44 = i57;
    i43 = i56;
    i42 = i55;
    i5 = i20;
    i41 = HEAP32[i45 >> 2] | 0;
   }
   if ((i8 | 0) == 55) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i8 | 0) == 62) {
    _WTFCrash();
   } else if ((i8 | 0) == 67) {
    _WTFCrash();
   }
  }
 } while (0);
 if ((i49 | 0) != 0) {
  i8 = 0;
  while (1) {
   i55 = HEAP32[i48 + (i8 << 2) >> 2] | 0;
   __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i55);
   if (i2) {
    __ZN7WebCore11RenderLayer35updateDescendantsLayerListsIfNeededEb(i55, 1);
   }
   i8 = i8 + 1 | 0;
   if (i8 >>> 0 >= i49 >>> 0) {
    break;
   }
  }
 }
 if ((i48 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i48);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer23computeFilterOperationsEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 32 | 0;
 i9 = i4 + 56 | 0;
 i10 = HEAP32[(HEAP32[i3 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i3 = i10 + 4 | 0;
 if (!(__ZNK7WebCore16FilterOperations15hasCustomFilterEv(i3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  HEAP32[i1 + 8 >> 2] = 0;
  __ZN7WebCore16FilterOperationsaSERKS0_(i1, i3) | 0;
  STACKTOP = i4;
  return;
 }
 i11 = i2 + 32 | 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0;
 do {
  if ((HEAP8[i2 + 195 | 0] & 32) != 0) {
   if ((HEAP8[i2 + 193 | 0] & 8) == 0) {
    break;
   }
   __ZN7WebCore16FilterOperationsC1Ev(i6);
   i12 = i10 + 12 | 0;
   i13 = HEAP32[i12 >> 2] | 0;
   L8 : do {
    if ((i13 | 0) == 0) {
     i14 = i6 + 8 | 0;
     i15 = i6 | 0;
    } else {
     i16 = i3 | 0;
     i17 = i7 | 0;
     i18 = i8 + 4 | 0;
     i19 = i8 | 0;
     i20 = i9 | 0;
     i21 = i5 | 0;
     i22 = i6 + 8 | 0;
     i23 = i6 + 4 | 0;
     i24 = i6 | 0;
     i25 = 0;
     i26 = i13;
     L10 : while (1) {
      if (i26 >>> 0 <= i25 >>> 0) {
       i27 = 10;
       break;
      }
      i28 = HEAP32[(HEAP32[i16 >> 2] | 0) + (i25 << 2) >> 2] | 0;
      i29 = (i28 | 0) == 0;
      if (!i29) {
       i30 = i28 + 4 | 0;
       HEAP32[i30 >> 2] = (HEAP32[i30 >> 2] | 0) + 1;
      }
      do {
       if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 20 >> 2] & 63](i28) | 0) == 11) {
        i30 = i28 + 12 | 0;
        i31 = HEAP32[i30 >> 2] | 0;
        i32 = (i31 | 0) != 0;
        if (i32) {
         i33 = i31 + 4 | 0;
         HEAP32[i33 >> 2] = (HEAP32[i33 >> 2] | 0) + 1;
        }
        do {
         if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i31 >> 2] | 0) + 8 >> 2] & 63](i31) | 0) {
          __ZN7WebCore19CustomFilterProgram16validatedProgramEv(i7, i31);
          i33 = HEAP32[i17 >> 2] | 0;
          HEAP32[i17 >> 2] = 0;
          do {
           if ((i33 | 0) == 0) {
            i34 = __ZN7WebCore10RenderView25customFilterGlobalContextEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
            __ZNK7WebCore19CustomFilterProgram11programInfoEv(i8, i31);
            i35 = __ZN3WTF10fastMallocEj(48) | 0;
            i36 = i35;
            __ZN7WebCore28CustomFilterValidatedProgramC1EPNS_25CustomFilterGlobalContextERKNS_23CustomFilterProgramInfoE(i36, i34, i8);
            i34 = HEAP32[i18 >> 2] | 0;
            do {
             if ((i34 | 0) != 0) {
              i37 = i34 | 0;
              i38 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
              if ((i38 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i34);
               break;
              } else {
               HEAP32[i37 >> 2] = i38;
               break;
              }
             }
            } while (0);
            i34 = HEAP32[i19 >> 2] | 0;
            do {
             if ((i34 | 0) != 0) {
              i38 = i34 | 0;
              i37 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
              if ((i37 | 0) == 0) {
               __ZN3WTF10StringImpl7destroyEPS0_(i34);
               break;
              } else {
               HEAP32[i38 >> 2] = i37;
               break;
              }
             }
            } while (0);
            HEAP32[i20 >> 2] = i36;
            if ((i35 | 0) != 0) {
             i34 = i35;
             HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + 1;
            }
            __ZN7WebCore19CustomFilterProgram19setValidatedProgramEN3WTF10PassRefPtrINS_28CustomFilterValidatedProgramEEE(i31, i9);
            i34 = HEAP32[i20 >> 2] | 0;
            if ((i34 | 0) == 0) {
             i39 = i36;
             break;
            }
            i37 = i34 | 0;
            i38 = (HEAP32[i37 >> 2] | 0) - 1 | 0;
            if ((i38 | 0) == 0) {
             __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i34);
             __ZN3WTF8fastFreeEPv(i34);
             i39 = i36;
             break;
            } else {
             HEAP32[i37 >> 2] = i38;
             i39 = i36;
             break;
            }
           } else {
            i39 = i33;
           }
          } while (0);
          if ((HEAP8[i39 + 44 | 0] & 1) == 0) {
           if ((i39 | 0) == 0) {
            break;
           }
           i33 = i39 | 0;
           i38 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
           if ((i38 | 0) == 0) {
            __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i39);
            __ZN3WTF8fastFreeEPv(i39);
            break;
           } else {
            HEAP32[i33 >> 2] = i38;
            break;
           }
          }
          i38 = HEAP32[i28 + 28 >> 2] | 0;
          i33 = HEAP32[i28 + 32 >> 2] | 0;
          i37 = HEAP32[i30 >> 2] | 0;
          if ((i37 | 0) == 0) {
           i40 = 0;
          } else {
           i40 = HEAP32[i37 + 40 >> 2] | 0;
          }
          i37 = __ZN3WTF10fastMallocEj(40) | 0;
          HEAP32[i21 >> 2] = i39;
          __ZN7WebCore30ValidatedCustomFilterOperationC1EN3WTF10PassRefPtrINS_28CustomFilterValidatedProgramEEERKNS_25CustomFilterParameterListEjjNS_20CustomFilterMeshTypeE(i37, i5, i28 + 16 | 0, i38, i33, i40);
          i33 = HEAP32[i21 >> 2] | 0;
          do {
           if ((i33 | 0) != 0) {
            i38 = i33 | 0;
            i34 = (HEAP32[i38 >> 2] | 0) - 1 | 0;
            if ((i34 | 0) == 0) {
             __ZN7WebCore28CustomFilterValidatedProgramD1Ev(i33);
             __ZN3WTF8fastFreeEPv(i33);
             break;
            } else {
             HEAP32[i38 >> 2] = i34;
             break;
            }
           }
          } while (0);
          i33 = HEAP32[i22 >> 2] | 0;
          if ((i33 | 0) != (HEAP32[i23 >> 2] | 0)) {
           HEAP32[(HEAP32[i24 >> 2] | 0) + (i33 << 2) >> 2] = i37;
           HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
           break;
          }
          i34 = i33 + 1 | 0;
          i38 = i34 + (i33 >>> 2) | 0;
          i41 = i38 >>> 0 > 16 >>> 0 ? i38 : 16;
          i38 = i41 >>> 0 > i34 >>> 0 ? i41 : i34;
          do {
           if (i33 >>> 0 < i38 >>> 0) {
            i34 = HEAP32[i24 >> 2] | 0;
            if (i38 >>> 0 > 1073741823 >>> 0) {
             i27 = 43;
             break L10;
            }
            i41 = __ZN3WTF18fastMallocGoodSizeEj(i38 << 2) | 0;
            HEAP32[i23 >> 2] = i41 >>> 2;
            i42 = __ZN3WTF10fastMallocEj(i41) | 0;
            HEAP32[i24 >> 2] = i42;
            i41 = i34;
            _memcpy(i42 | 0, i41 | 0, i33 << 2) | 0;
            if ((i34 | 0) == 0) {
             break;
            }
            if ((HEAP32[i24 >> 2] | 0) == (i34 | 0)) {
             HEAP32[i24 >> 2] = 0;
             HEAP32[i23 >> 2] = 0;
            }
            __ZN3WTF8fastFreeEPv(i41);
           }
          } while (0);
          HEAP32[(HEAP32[i24 >> 2] | 0) + (HEAP32[i22 >> 2] << 2) >> 2] = i37;
          HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
         }
        } while (0);
        do {
         if (i32) {
          i30 = i31 + 4 | 0;
          i33 = i30 | 0;
          i38 = (HEAP32[i33 >> 2] | 0) - 1 | 0;
          if ((i38 | 0) != 0) {
           HEAP32[i33 >> 2] = i38;
           break;
          }
          i38 = i30 - 4 | 0;
          if ((i38 | 0) == 0) {
           break;
          }
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 15](i38);
         }
        } while (0);
        if (i29) {
         break;
        }
        i31 = i28 + 4 | 0;
        i32 = i31 | 0;
        i38 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
        if ((i38 | 0) != 0) {
         HEAP32[i32 >> 2] = i38;
         break;
        }
        i38 = i31 - 4 | 0;
        if ((i38 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_vi[HEAP32[(HEAP32[i38 >> 2] | 0) + 4 >> 2] & 15](i38);
       } else {
        i38 = HEAP32[i22 >> 2] | 0;
        if ((i38 | 0) != (HEAP32[i23 >> 2] | 0)) {
         HEAP32[(HEAP32[i24 >> 2] | 0) + (i38 << 2) >> 2] = i28;
         HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
         break;
        }
        i31 = i38 + 1 | 0;
        i32 = i31 + (i38 >>> 2) | 0;
        i30 = i32 >>> 0 > 16 >>> 0 ? i32 : 16;
        i32 = i30 >>> 0 > i31 >>> 0 ? i30 : i31;
        do {
         if (i38 >>> 0 < i32 >>> 0) {
          i31 = HEAP32[i24 >> 2] | 0;
          if (i32 >>> 0 > 1073741823 >>> 0) {
           i27 = 62;
           break L10;
          }
          i30 = __ZN3WTF18fastMallocGoodSizeEj(i32 << 2) | 0;
          HEAP32[i23 >> 2] = i30 >>> 2;
          i33 = __ZN3WTF10fastMallocEj(i30) | 0;
          HEAP32[i24 >> 2] = i33;
          i30 = i31;
          _memcpy(i33 | 0, i30 | 0, i38 << 2) | 0;
          if ((i31 | 0) == 0) {
           break;
          }
          if ((HEAP32[i24 >> 2] | 0) == (i31 | 0)) {
           HEAP32[i24 >> 2] = 0;
           HEAP32[i23 >> 2] = 0;
          }
          __ZN3WTF8fastFreeEPv(i30);
         }
        } while (0);
        HEAP32[(HEAP32[i24 >> 2] | 0) + (HEAP32[i22 >> 2] << 2) >> 2] = i28;
        HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
       }
      } while (0);
      i28 = i25 + 1 | 0;
      i29 = HEAP32[i12 >> 2] | 0;
      if (i28 >>> 0 < i29 >>> 0) {
       i25 = i28;
       i26 = i29;
      } else {
       i14 = i22;
       i15 = i24;
       break L8;
      }
     }
     if ((i27 | 0) == 43) {
      _WTFCrash();
     } else if ((i27 | 0) == 62) {
      _WTFCrash();
     } else if ((i27 | 0) == 10) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = 0;
   HEAP32[i1 + 4 >> 2] = 0;
   HEAP32[i1 + 8 >> 2] = 0;
   __ZN7WebCore16FilterOperationsaSERKS0_(i1, i6) | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   if ((i12 | 0) != 0) {
    i13 = HEAP32[i15 >> 2] | 0;
    i24 = i13 + (i12 << 2) | 0;
    i12 = i13;
    while (1) {
     i13 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i13 | 0) != 0) {
       i22 = i13 + 4 | 0;
       i26 = i22 | 0;
       i25 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) != 0) {
        HEAP32[i26 >> 2] = i25;
        break;
       }
       i25 = i22 - 4 | 0;
       if ((i25 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i25 >> 2] | 0) + 4 >> 2] & 15](i25);
      }
     } while (0);
     i12 = i12 + 4 | 0;
     if ((i12 | 0) == (i24 | 0)) {
      break;
     }
    }
    HEAP32[i14 >> 2] = 0;
   }
   i24 = HEAP32[i15 >> 2] | 0;
   if ((i24 | 0) == 0) {
    STACKTOP = i4;
    return;
   }
   HEAP32[i15 >> 2] = 0;
   HEAP32[i6 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i24);
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZN7WebCore16FilterOperationsC1Ev(i1);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer24hitTestChildLayerColumnsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKN3WTF6VectorIS1_Lj0ENSH_15CrashOnOverflowEEEj(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 432 | 0;
 i13 = i12 | 0;
 i14 = i12 + 16 | 0;
 i15 = i12 + 24 | 0;
 i16 = i12 + 32 | 0;
 i17 = i12 + 40 | 0;
 i18 = i12 + 48 | 0;
 i19 = i12 + 56 | 0;
 i20 = i12 + 72 | 0;
 i21 = i12 + 88 | 0;
 i22 = i12 + 216 | 0;
 i23 = i12 + 344 | 0;
 i24 = i12 + 352 | 0;
 i25 = i12 + 360 | 0;
 i26 = i12 + 368 | 0;
 i27 = i12 + 400 | 0;
 i28 = i12 + 416 | 0;
 i29 = i28 | 0;
 i30 = i28;
 i31 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i32 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i33 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i34 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i35 = i10 + 8 | 0;
 if ((HEAP32[i35 >> 2] | 0) >>> 0 <= i11 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i36 = i10 | 0;
 i37 = HEAP32[(HEAP32[(HEAP32[i36 >> 2] | 0) + (i11 << 2) >> 2] | 0) + 32 >> 2] | 0;
 i38 = i37;
 i39 = i37 + 20 | 0;
 if ((HEAP32[i39 >> 2] & 4194304 | 0) == 0) {
  i40 = 0;
  STACKTOP = i12;
  return i40 | 0;
 }
 i41 = i16 | 0;
 HEAP32[i41 >> 2] = 0;
 i42 = i16 + 4 | 0;
 HEAP32[i42 >> 2] = 0;
 i43 = HEAP32[i37 + 40 >> 2] | 0;
 if (!((i43 | 0) == (i3 | 0) | (i43 | 0) == 0)) {
  i44 = i43;
  while (1) {
   i44 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i44, i3, i16, 0) | 0;
   if ((i44 | 0) == 0 | (i44 | 0) == (i3 | 0)) {
    break;
   }
  }
 }
 i44 = __ZNK7WebCore11RenderBlock10columnInfoEv(i38) | 0;
 i16 = __ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE(i38, i44) | 0;
 i43 = (HEAP32[(HEAP32[i37 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i45 = i37;
 i46 = HEAP32[i37 >> 2] | 0;
 if ((HEAP32[i39 >> 2] & 8192 | 0) == 0) {
  i39 = FUNCTION_TABLE_ii[HEAP32[i46 + 736 >> 2] & 63](i45) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 704 >> 2] & 31](i15, i45);
  i47 = (HEAP32[i15 >> 2] | 0) + i39 | 0;
 } else {
  i39 = FUNCTION_TABLE_ii[HEAP32[i46 + 744 >> 2] & 63](i45) | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i37 >> 2] | 0) + 712 >> 2] & 31](i14, i45);
  i47 = (HEAP32[i14 >> 2] | 0) + i39 | 0;
 }
 __ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv(i17, i38);
 __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i18, i38);
 i39 = i18 | 0;
 i18 = Math_imul(HEAP32[i39 >> 2] | 0, i16) | 0;
 i14 = i17 | 0;
 HEAP32[i14 >> 2] = i18 + (HEAP32[i14 >> 2] | 0);
 if ((i16 | 0) <= 0) {
  i40 = 0;
  STACKTOP = i12;
  return i40 | 0;
 }
 i18 = i37;
 i37 = i19 + 4 | 0;
 i17 = i19 | 0;
 i45 = i20;
 i46 = i6;
 i6 = i20 + 8 | 0;
 i15 = i20 + 12 | 0;
 i48 = (i11 | 0) == 0;
 i49 = i21 | 0;
 i50 = i21 + 40 | 0;
 i51 = i21 + 8 | 0;
 i52 = i21 + 80 | 0;
 i53 = i21 + 48 | 0;
 i54 = i21 + 120 | 0;
 i55 = i21 + 88 | 0;
 i56 = i2 + 172 | 0;
 i57 = i22;
 i58 = i21;
 i59 = i11 - 1 | 0;
 i11 = i24 | 0;
 i60 = i24 + 4 | 0;
 i61 = i23 | 0;
 i62 = i27 | 0;
 i63 = i27 + 4 | 0;
 i64 = i28 + 8 | 0;
 i28 = i27 + 8 | 0;
 i65 = i27 + 12 | 0;
 i66 = i7 + 68 | 0;
 i67 = i16;
 L18 : while (1) {
  i16 = i67 - 1 | 0;
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i19, i38, i44, i16);
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i18, i19);
  if ((i43 | 0) == 3 | (i43 | 0) == 0) {
   i68 = HEAP32[i17 >> 2] | 0;
   i69 = (HEAP32[i14 >> 2] | 0) - (HEAP32[i39 >> 2] | 0) | 0;
   i70 = i68 - i47 | 0;
   i71 = i69;
   i72 = i69;
   i73 = i68;
   i74 = HEAP32[i37 >> 2] | 0;
  } else {
   i68 = HEAP32[i37 >> 2] | 0;
   i69 = (HEAP32[i14 >> 2] | 0) - (HEAP32[i39 >> 2] | 0) | 0;
   i70 = i69;
   i71 = i68 - i47 | 0;
   i72 = i69;
   i73 = HEAP32[i17 >> 2] | 0;
   i74 = i68;
  }
  HEAP32[i14 >> 2] = i72;
  i68 = HEAP32[i42 >> 2] | 0;
  HEAP32[i17 >> 2] = i73 + (HEAP32[i41 >> 2] | 0);
  HEAP32[i37 >> 2] = i74 + i68;
  HEAP32[i45 >> 2] = HEAP32[i46 >> 2];
  HEAP32[i45 + 4 >> 2] = HEAP32[i46 + 4 >> 2];
  HEAP32[i45 + 8 >> 2] = HEAP32[i46 + 8 >> 2];
  HEAP32[i45 + 12 >> 2] = HEAP32[i46 + 12 >> 2];
  __ZN7WebCore10LayoutRect9intersectERKS0_(i20, i19);
  do {
   if ((HEAP32[i6 >> 2] | 0) >= 1) {
    if ((HEAP32[i15 >> 2] | 0) < 1) {
     break;
    }
    if (!(__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i7, i20) | 0)) {
     break;
    }
    do {
     if (i48) {
      HEAPF64[i49 >> 3] = +1;
      _memset(i51 | 0, 0, 32) | 0;
      HEAPF64[i50 >> 3] = +1;
      _memset(i53 | 0, 0, 32) | 0;
      HEAPF64[i52 >> 3] = +1;
      _memset(i55 | 0, 0, 32) | 0;
      HEAPF64[i54 >> 3] = +1;
      i68 = HEAP32[i56 >> 2] | 0;
      i69 = (i68 | 0) != 0;
      if (!((i21 | 0) == (i68 | 0) | i69 ^ 1)) {
       _memcpy(i58 | 0, i68 | 0, 128) | 0;
      }
      _memcpy(i57 | 0, i58 | 0, 128) | 0;
      __ZN7WebCore20TransformationMatrix14translateRightEdd(i22, +(i70 | 0), +(i71 | 0)) | 0;
      i68 = __ZN3WTF10fastMallocEj(128) | 0;
      i75 = i68;
      if ((i75 | 0) != (i22 | 0)) {
       _memcpy(i68 | 0, i57 | 0, 128) | 0;
      }
      i68 = HEAP32[i56 >> 2] | 0;
      HEAP32[i56 >> 2] = i75;
      if ((i68 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i68);
      }
      if ((HEAP32[i35 >> 2] | 0) == 0) {
       i76 = 25;
       break L18;
      }
      i68 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i2, i3, HEAP32[HEAP32[i36 >> 2] >> 2] | 0, i4, i5, i20, i7, 0, i8, i9) | 0;
      if (!i69) {
       i69 = HEAP32[i56 >> 2] | 0;
       HEAP32[i56 >> 2] = 0;
       if ((i69 | 0) == 0) {
        i77 = i68;
        break;
       }
       __ZN3WTF8fastFreeEPv(i69);
       i77 = i68;
       break;
      }
      i69 = __ZN3WTF10fastMallocEj(128) | 0;
      i75 = i69;
      if ((i75 | 0) != (i21 | 0)) {
       _memcpy(i69 | 0, i58 | 0, 128) | 0;
      }
      i69 = HEAP32[i56 >> 2] | 0;
      HEAP32[i56 >> 2] = i75;
      if ((i69 | 0) == 0) {
       i77 = i68;
       break;
      }
      __ZN3WTF8fastFreeEPv(i69);
      i77 = i68;
     } else {
      if ((HEAP32[i35 >> 2] | 0) >>> 0 <= i59 >>> 0) {
       i76 = 34;
       break L18;
      }
      i68 = HEAP32[(HEAP32[i36 >> 2] | 0) + (i59 << 2) >> 2] | 0;
      HEAP32[i11 >> 2] = 0;
      HEAP32[i60 >> 2] = 0;
      __ZNK7WebCore11RenderLayer25createLocalTransformStateEPS0_S1_RKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateERKNS_11LayoutPointE(i23, i68, i3, i68, i20, i7, i8, i24);
      i68 = HEAP32[i61 >> 2] | 0;
      HEAP32[i61 >> 2] = 0;
      __ZN7WebCore24HitTestingTransformState9translateEiiNS0_21TransformAccumulationE(i68, i70, i71, 1);
      __ZNK7WebCore24HitTestingTransformState11mappedPointEv(i25, i68);
      __ZNK7WebCore24HitTestingTransformState10mappedQuadEv(i26, i68);
      __ZNK7WebCore24HitTestingTransformState10mappedAreaEv(i31, i68);
      __ZNK7WebCore9FloatQuad11boundingBoxEv(i13, i31);
      __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i30, i13);
      i69 = HEAP32[i29 + 4 >> 2] | 0;
      HEAP32[i62 >> 2] = HEAP32[i29 >> 2];
      HEAP32[i63 >> 2] = i69;
      i69 = HEAP32[i64 + 4 >> 2] | 0;
      HEAP32[i28 >> 2] = HEAP32[i64 >> 2];
      HEAP32[i65 >> 2] = i69;
      __ZN7WebCore15HitTestLocationC1Ev(i32);
      if ((HEAP8[i66] & 1) == 0) {
       __ZN7WebCore15HitTestLocationC1ERKNS_10FloatPointE(i34, i25);
       __ZN7WebCore15HitTestLocationaSERKS0_(i32, i34) | 0;
       __ZN7WebCore15HitTestLocationD1Ev(i34);
      } else {
       __ZN7WebCore15HitTestLocationC1ERKNS_10FloatPointERKNS_9FloatQuadE(i33, i25, i26);
       __ZN7WebCore15HitTestLocationaSERKS0_(i32, i33) | 0;
       __ZN7WebCore15HitTestLocationD1Ev(i33);
      }
      __ZN7WebCore24HitTestingTransformState7flattenEv(i68);
      if ((HEAP32[i35 >> 2] | 0) >>> 0 <= i59 >>> 0) {
       i76 = 39;
       break L18;
      }
      i69 = __ZN7WebCore11RenderLayer24hitTestChildLayerColumnsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKN3WTF6VectorIS1_Lj0ENSH_15CrashOnOverflowEEEj(i1, i2, HEAP32[(HEAP32[i36 >> 2] | 0) + (i59 << 2) >> 2] | 0, i4, i5, i27, i32, i68, i9, i10, i59) | 0;
      __ZN7WebCore15HitTestLocationD1Ev(i32);
      if ((i68 | 0) == 0) {
       i77 = i69;
       break;
      }
      i75 = i68 | 0;
      i78 = (HEAP32[i75 >> 2] | 0) - 1 | 0;
      if ((i78 | 0) == 0) {
       __ZN3WTF8fastFreeEPv(i68);
       i77 = i69;
       break;
      } else {
       HEAP32[i75 >> 2] = i78;
       i77 = i69;
       break;
      }
     }
    } while (0);
    if ((i77 | 0) != 0) {
     i40 = i77;
     i76 = 49;
     break L18;
    }
   }
  } while (0);
  if ((i16 | 0) > 0) {
   i67 = i16;
  } else {
   i40 = 0;
   i76 = 50;
   break;
  }
 }
 if ((i76 | 0) == 25) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i76 | 0) == 34) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i76 | 0) == 39) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i76 | 0) == 49) {
  STACKTOP = i12;
  return i40 | 0;
 } else if ((i76 | 0) == 50) {
  STACKTOP = i12;
  return i40 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i12 = i11 | 0;
 i13 = i11 + 104 | 0;
 i14 = i11 + 128 | 0;
 i15 = i11 + 136 | 0;
 i16 = i11 + 160 | 0;
 i17 = i11 + 176 | 0;
 i18 = i11 + 200 | 0;
 i19 = i11 + 224 | 0;
 i20 = i11 + 248 | 0;
 i21 = i11 + 264 | 0;
 i22 = i11 + 280 | 0;
 i23 = i11 + 288 | 0;
 i24 = i11 + 304 | 0;
 i25 = i11 + 328 | 0;
 i26 = i11 + 352 | 0;
 i27 = i1 + 188 | 0;
 i28 = HEAP32[i27 >> 2] | 0;
 do {
  if ((i28 | 0) != 0) {
   if ((HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) != 0) {
    break;
   }
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   if ((i28 | 0) == (i1 | 0) | (i1 | 0) == 0) {
    i29 = i28;
   } else {
    i30 = i1;
    while (1) {
     i30 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i30, i28, i14, 0) | 0;
     if ((i30 | 0) == 0 | (i30 | 0) == (i28 | 0)) {
      break;
     }
    }
    i29 = HEAP32[i27 >> 2] | 0;
   }
   HEAP32[i15 >> 2] = i29;
   HEAP32[i15 + 4 >> 2] = i4;
   HEAP32[i15 + 8 >> 2] = i6;
   HEAP32[i15 + 12 >> 2] = i7;
   HEAP32[i15 + 16 >> 2] = i8;
   i30 = i16;
   _memset(i30 | 0, 0, 16) | 0;
   i31 = i17;
   _memset(i31 | 0, 0, 17) | 0;
   i32 = i18;
   _memset(i32 | 0, 0, 17) | 0;
   i33 = i19;
   _memset(i33 | 0, 0, 17) | 0;
   HEAP32[i20 >> 2] = -1073741824;
   HEAP32[i20 + 4 >> 2] = -1073741824;
   HEAP32[i20 + 8 >> 2] = 2147483647;
   HEAP32[i20 + 12 >> 2] = 2147483647;
   __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i1, i15, i20, i16, i17, i18, i19, i14);
   if ((i10 | 0) == 0) {
    __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i21, i1, HEAP32[i27 >> 2] | 0, 0, i14);
   } else {
    i34 = i21;
    i35 = i10;
    HEAP32[i34 >> 2] = HEAP32[i35 >> 2];
    HEAP32[i34 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
    HEAP32[i34 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
    HEAP32[i34 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
   }
   __ZN7WebCore10LayoutRect9intersectERKS0_(i21, i17 | 0);
   i35 = i22 | 0;
   HEAP32[i35 >> 2] = 0;
   i34 = i22 + 4 | 0;
   HEAP32[i34 >> 2] = 0;
   i36 = HEAP32[i27 >> 2] | 0;
   if ((i36 | 0) == (i3 | 0) | (i36 | 0) == 0) {
    i37 = 0;
    i38 = 0;
    i39 = i36;
   } else {
    i40 = i36;
    while (1) {
     i40 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i40, i3, i22, 0) | 0;
     if ((i40 | 0) == 0 | (i40 | 0) == (i3 | 0)) {
      break;
     }
    }
    i37 = HEAP32[i35 >> 2] | 0;
    i38 = HEAP32[i34 >> 2] | 0;
    i39 = HEAP32[i27 >> 2] | 0;
   }
   i40 = i23;
   i36 = i5;
   HEAP32[i40 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i40 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
   HEAP32[i40 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
   HEAP32[i40 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
   i40 = i23 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) - i37;
   i40 = i23 + 4 | 0;
   HEAP32[i40 >> 2] = (HEAP32[i40 >> 2] | 0) - i38;
   __ZN7WebCore16RenderFlowThread21collectLayerFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_10LayoutRectES9_(HEAP32[i39 + 32 >> 2] | 0, i2, i21, i23);
   i40 = i2 + 8 | 0;
   if ((HEAP32[i40 >> 2] | 0) == 0) {
    STACKTOP = i11;
    return;
   }
   i41 = i24;
   HEAP32[i41 >> 2] = HEAP32[i36 >> 2];
   HEAP32[i41 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
   HEAP32[i41 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
   HEAP32[i41 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
   HEAP8[i24 + 16 | 0] = 0;
   i36 = HEAP32[i27 >> 2] | 0;
   do {
    if ((HEAP32[i36 + 36 >> 2] | 0) != 0) {
     HEAP32[i25 >> 2] = i3;
     HEAP32[i25 + 4 >> 2] = i4;
     HEAP32[i25 + 8 >> 2] = i6;
     HEAP32[i25 + 12 >> 2] = i7;
     HEAP32[i25 + 16 >> 2] = i8;
     __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i26, i36, i25);
     i42 = i26;
     HEAP32[i41 >> 2] = HEAP32[i42 >> 2];
     HEAP32[i41 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
     HEAP32[i41 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
     HEAP32[i41 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
     HEAP8[i41 + 16 | 0] = HEAP8[i42 + 16 | 0] | 0;
     __ZN7WebCore10LayoutRect9intersectERKS0_(i24 | 0, i5);
     if ((HEAP32[i40 >> 2] | 0) != 0) {
      break;
     }
     STACKTOP = i11;
     return;
    }
   } while (0);
   i41 = i2 | 0;
   i36 = i24 | 0;
   i42 = 0;
   while (1) {
    i43 = HEAP32[i41 >> 2] | 0;
    i44 = i43 + (i42 * 104 & -1) + 4 | 0;
    HEAP32[i44 >> 2] = HEAP32[i30 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
    i44 = i43 + (i42 * 104 & -1) + 20 | 0;
    HEAP32[i44 >> 2] = HEAP32[i31 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
    HEAP8[i44 + 16 | 0] = HEAP8[i31 + 16 | 0] | 0;
    i44 = i43 + (i42 * 104 & -1) + 40 | 0;
    HEAP32[i44 >> 2] = HEAP32[i32 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i32 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i32 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i32 + 12 >> 2];
    HEAP8[i44 + 16 | 0] = HEAP8[i32 + 16 | 0] | 0;
    i44 = i43 + (i42 * 104 & -1) + 60 | 0;
    HEAP32[i44 >> 2] = HEAP32[i33 >> 2];
    HEAP32[i44 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
    HEAP32[i44 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
    HEAP32[i44 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
    HEAP8[i44 + 16 | 0] = HEAP8[i33 + 16 | 0] | 0;
    i44 = (HEAP32[i35 >> 2] | 0) + (HEAP32[i43 + (i42 * 104 & -1) + 80 >> 2] | 0) | 0;
    i45 = (HEAP32[i34 >> 2] | 0) + (HEAP32[i43 + (i42 * 104 & -1) + 84 >> 2] | 0) | 0;
    i46 = i43 + (i42 * 104 & -1) + 4 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i44;
    i46 = i43 + (i42 * 104 & -1) + 8 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i45;
    i46 = i43 + (i42 * 104 & -1) + 20 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i44;
    i46 = i43 + (i42 * 104 & -1) + 24 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i45;
    i46 = i43 + (i42 * 104 & -1) + 40 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i44;
    i46 = i43 + (i42 * 104 & -1) + 44 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i45;
    i46 = i43 + (i42 * 104 & -1) + 60 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i44;
    i46 = i43 + (i42 * 104 & -1) + 64 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i45;
    i46 = i43 + (i42 * 104 & -1) + 88 | 0;
    HEAP32[i46 >> 2] = (HEAP32[i46 >> 2] | 0) + i44;
    i44 = i43 + (i42 * 104 & -1) + 92 | 0;
    HEAP32[i44 >> 2] = (HEAP32[i44 >> 2] | 0) + i45;
    i45 = i43 + (i42 * 104 & -1) + 20 | 0;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i45, i36);
    i44 = i43 + (i42 * 104 & -1) + 40 | 0;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i44, i36);
    i46 = i43 + (i42 * 104 & -1) + 60 | 0;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i46, i36);
    i47 = i43 + (i42 * 104 & -1) + 88 | 0;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i45, i47);
    __ZN7WebCore10LayoutRect9intersectERKS0_(i44, i47);
    __ZN7WebCore10LayoutRect9intersectERKS0_(i46, i47);
    i42 = i42 + 1 | 0;
    if (i42 >>> 0 >= (HEAP32[i40 >> 2] | 0) >>> 0) {
     break;
    }
   }
   STACKTOP = i11;
   return;
  }
 } while (0);
 i24 = i12 | 0;
 HEAP8[i24] = 0;
 i26 = i12 + 4 | 0;
 i25 = i12 + 40 | 0;
 _memset(i25 | 0, 0, 17) | 0;
 i27 = i12 + 60 | 0;
 _memset(i27 | 0, 0, 17) | 0;
 _memset(i26 | 0, 0, 33) | 0;
 _memset(i12 + 80 | 0, 0, 24) | 0;
 HEAP32[i13 >> 2] = i3;
 HEAP32[i13 + 4 >> 2] = i4;
 HEAP32[i13 + 8 >> 2] = i6;
 HEAP32[i13 + 12 >> 2] = i7;
 HEAP32[i13 + 16 >> 2] = i8;
 __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i1, i13, i5, i26, i12 + 20 | 0, i25, i27, i9);
 i9 = i2 + 8 | 0;
 i27 = HEAP32[i9 >> 2] | 0;
 if ((i27 | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
  _memcpy((HEAP32[i2 >> 2] | 0) + (i27 * 104 & -1) | 0, i24 | 0, 104) | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  STACKTOP = i11;
  return;
 }
 i24 = i27 + 1 | 0;
 i25 = i2 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 do {
  if (i26 >>> 0 > i12 >>> 0) {
   i48 = 7;
  } else {
   if ((i26 + (i27 * 104 & -1) | 0) >>> 0 <= i12 >>> 0) {
    i48 = 7;
    break;
   }
   i5 = i24 + (i27 >>> 2) | 0;
   i13 = i5 >>> 0 > 16 >>> 0 ? i5 : 16;
   __ZN3WTF6VectorIN7WebCore13LayerFragmentELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i13 >>> 0 > i24 >>> 0 ? i13 : i24);
   i13 = HEAP32[i25 >> 2] | 0;
   i49 = i13 + (((i12 - i26 | 0) / 104 & -1) * 104 & -1) | 0;
   i50 = i13;
  }
 } while (0);
 if ((i48 | 0) == 7) {
  i48 = i24 + (i27 >>> 2) | 0;
  i27 = i48 >>> 0 > 16 >>> 0 ? i48 : 16;
  __ZN3WTF6VectorIN7WebCore13LayerFragmentELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i2, i27 >>> 0 > i24 >>> 0 ? i27 : i24);
  i49 = i12;
  i50 = HEAP32[i25 >> 2] | 0;
 }
 _memcpy(i50 + ((HEAP32[i9 >> 2] | 0) * 104 & -1) | 0, i49 | 0, 104) | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
 STACKTOP = i11;
 return;
}
function __ZN7WebCore11RenderLayer12styleChangedENS_15StyleDifferenceEPKNS_11RenderStyleE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i2 | 0;
 i5 = __ZNK7WebCore11RenderLayer22shouldBeNormalFlowOnlyEv(i1) | 0;
 i6 = i1 + 20 | 0;
 i7 = HEAP8[i6] | 0;
 L1 : do {
  if ((i5 & 1 | 0) != ((i7 & 255) >>> 4 & 1 | 0)) {
   HEAP8[i6] = i7 & -17 | (i5 & 1) << 4;
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i9 = i1;
   } else {
    __ZN7WebCore11RenderLayer19dirtyNormalFlowListEv(i8);
    i9 = i1;
   }
   while (1) {
    i9 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break L1;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i9 + 21 | 0] & 20) != 0) {
     break;
    }
   }
   __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i9);
  }
 } while (0);
 i9 = i1 + 32 | 0;
 i5 = HEAP32[i9 >> 2] | 0;
 i7 = HEAP32[i5 + 36 >> 2] | 0;
 do {
  if ((HEAP32[i7 + 48 >> 2] & 7168 | 0) == 5120) {
   if ((HEAP32[(HEAP32[(HEAP32[i7 + 20 >> 2] | 0) + 64 >> 2] | 0) + 20 >> 2] & 3 | 0) == 0) {
    i10 = 15;
    break;
   }
   if ((HEAP32[i5 + 20 >> 2] & 512 | 0) == 0) {
    i10 = 15;
    break;
   }
   i8 = i1 + 160 | 0;
   do {
    if ((HEAP32[i8 >> 2] | 0) == 0) {
     i11 = __ZN3WTF10fastMallocEj(96) | 0;
     __ZN7WebCore13RenderMarqueeC1EPNS_11RenderLayerE(i11, i1);
     i12 = HEAP32[i8 >> 2] | 0;
     HEAP32[i8 >> 2] = i11;
     if ((i12 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
    }
   } while (0);
   i12 = HEAP32[i9 >> 2] | 0;
   i11 = HEAP32[(HEAP32[(HEAP32[i12 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i13 = __ZNK7WebCore12RenderObject13isHTMLMarqueeEv(i12 | 0) | 0;
   __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(i11, i13 ? 53 : 54);
   __ZN7WebCore13RenderMarquee18updateMarqueeStyleEv(HEAP32[i8 >> 2] | 0);
  } else {
   i10 = 15;
  }
 } while (0);
 do {
  if ((i10 | 0) == 15) {
   i5 = i1 + 160 | 0;
   i7 = HEAP32[i5 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   HEAP32[i5 >> 2] = 0;
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 15](i7);
  }
 } while (0);
 __ZN7WebCore11RenderLayer32updateScrollbarsAfterStyleChangeEPKNS_11RenderStyleE(i1, i3);
 __ZN7WebCore11RenderLayer38updateStackingContextsAfterStyleChangeEPKNS_11RenderStyleE(i1, i3);
 i7 = __ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0;
 i5 = HEAP8[i6] | 0;
 L23 : do {
  if (((i5 & 255) >>> 5 & 1 | 0) != (i7 & 1 | 0)) {
   HEAP8[i6] = i5 & -33 | (i7 & 1) << 5;
   i13 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if (i7) {
    i11 = i13;
    while (1) {
     i12 = i11 + 20 | 0;
     i14 = HEAP8[i12] | 0;
     if ((i14 & -64) << 24 >> 24 == 64) {
      break L23;
     }
     HEAP8[i12] = i14 & 63 | 64;
     i11 = HEAP32[i11 + 36 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
    }
   } else {
    i11 = i13;
    while (1) {
     i8 = i11 + 20 | 0;
     i14 = HEAP8[i8] | 0;
     HEAP8[i8] = i14 | -128;
     if ((i14 & 32) != 0) {
      break L23;
     }
     i11 = HEAP32[i11 + 36 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
    }
   }
  }
 } while (0);
 i7 = (i3 | 0) == 0;
 do {
  if (i7) {
   i15 = 0;
  } else {
   i5 = (HEAP32[i3 + 48 >> 2] | 0) >>> 22 & 7;
   if ((i5 | 0) == 2) {
    i15 = 1;
    break;
   }
   i15 = (i5 | 0) == 6 | 0;
  }
 } while (0);
 i5 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   if (((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216 | 0) == (i15 | 0)) {
    break;
   } else {
    i16 = i5;
   }
   while (1) {
    i6 = i16 + 21 | 0;
    HEAP8[i6] = HEAP8[i6] | 2;
    i16 = HEAP32[i16 + 36 >> 2] | 0;
    if ((i16 | 0) == 0) {
     break;
    }
   }
   i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i6 + 2285 | 0] & 1) != 0) {
    break;
   }
   i11 = HEAP32[i6 + 1584 >> 2] | 0;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i11 + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
    break;
   }
   HEAP8[(__ZN7WebCore10RenderView10compositorEv(i11) | 0) + 87 | 0] = 1;
  }
 } while (0);
 i16 = i1 + 176 | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 i15 = (i5 | 0) == 0;
 do {
  if ((HEAP32[(HEAP32[i9 >> 2] | 0) + 20 >> 2] & 262144 | 0) == 0) {
   if (i15) {
    break;
   }
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
    __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i5 | 0, i1);
    i17 = HEAP32[i16 >> 2] | 0;
   } else {
    i17 = i5;
   }
   __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i17 | 0, 0);
   i11 = HEAP32[i16 >> 2] | 0;
   if ((i11 | 0) != 0) {
    __ZN7WebCore12RenderObject7destroyEv(i11 | 0);
   }
   HEAP32[i16 >> 2] = 0;
  } else {
   if (i15) {
    __ZN7WebCore11RenderLayer16createReflectionEv(i1);
   } else {
    __ZN7WebCore11RenderLayer21createReflectionStyleEv(i4, i1);
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i5 | 0, i4);
   }
   __ZN7WebCore15FeatureObserver7observeEPNS_8DocumentENS0_7FeatureE(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, 55);
  }
 } while (0);
 i4 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 15](i4);
 }
 i4 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 200 >> 2] & 15](i4);
 }
 __ZN7WebCore11RenderLayer23updateScrollCornerStyleEv(i1);
 __ZN7WebCore11RenderLayer18updateResizerStyleEv(i1);
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i1, 0);
 __ZN7WebCore11RenderLayer15updateTransformEv(i1);
 i4 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] | 0) >>> 17 & 31;
 i5 = i1 + 28 | 0;
 do {
  if ((i4 | 0) != (HEAP32[i5 >> 2] | 0)) {
   HEAP32[i5 >> 2] = i4;
   i15 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking12setBlendModeENS_9BlendModeE(i15, i4);
  }
 } while (0);
 __ZN7WebCore11RenderLayer27updateOrRemoveFilterClientsEv(i1);
 __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i1);
 i4 = HEAP32[i9 >> 2] | 0;
 i5 = HEAP32[i4 + 36 >> 2] | 0;
 do {
  if (__ZN7WebCore21RenderLayerCompositor27updateLayerCompositingStateERNS_11RenderLayerENS0_24CompositingChangeRepaintE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i1, 0) | 0) {
   i10 = 58;
  } else {
   if (__ZNK7WebCore11RenderLayer36needsCompositingLayersRebuiltForClipEPKNS_11RenderStyleES3_(0, i3, i5) | 0) {
    i10 = 58;
    break;
   }
   i15 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i15 | 0) != 0 | i7) {
    if ((i15 | 0) == 0) {
     break;
    }
    __ZN7WebCore18RenderLayerBacking27updateGraphicsLayerGeometryEv(i15);
    break;
   }
   if (((HEAP32[i5 + 48 >> 2] ^ HEAP32[i3 + 48 >> 2]) & 7168 | 0) == 0) {
    break;
   } else {
    i18 = i1;
   }
   while (1) {
    i18 = HEAP32[i18 + 36 >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i18 + 21 | 0] & 20) != 0) {
     break;
    }
   }
   if ((HEAP8[i18 + 23 | 0] & 2) != 0) {
    i10 = 58;
   }
  }
 } while (0);
 if ((i10 | 0) == 58) {
  __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 }
 if (i7) {
  __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
  STACKTOP = i2;
  return;
 }
 i7 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i7 + 36 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[i3 + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
   i10 = HEAP32[i3 + 48 >> 2] | 0;
   if ((i10 & 7168 | 0) != 0) {
    i19 = 1;
    break;
   }
   i19 = (i10 & 57344 | 0) != 0 | 0;
  } else {
   i19 = 1;
  }
 } while (0);
 do {
  if ((HEAP8[(HEAP32[i9 + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
   i3 = HEAP32[i9 + 48 >> 2] | 0;
   if ((i3 & 7168 | 0) != 0) {
    i20 = 1;
    break;
   }
   i20 = (i3 & 57344 | 0) != 0;
  } else {
   i20 = 1;
  }
 } while (0);
 if ((i20 & 1 | 0) == (i19 | 0)) {
  __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
  STACKTOP = i2;
  return;
 }
 if (!(__ZN7WebCore11RenderLayer43checkIfDescendantClippingContextNeedsUpdateEb(i1, i20) | 0)) {
  __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i1 + 32 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = (HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 L1 : do {
  if ((i17 | 0) == 6) {
   do {
    if ((HEAP32[i16 + 20 >> 2] & 805306368 | 0) != 0) {
     i18 = __ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i16 | 0) | 0;
     if ((i18 | 0) == 0) {
      break;
     }
     if ((HEAP32[i18 + 20 >> 2] & 25165824 | 0) != 16777216) {
      break;
     }
     i18 = HEAP32[i2 + 32 >> 2] | 0;
     do {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 248 >> 2] & 63](i18 | 0) | 0) {
       if ((HEAP32[i18 + 20 >> 2] & 25165824 | 0) != 16777216) {
        break;
       }
       i19 = HEAP32[i1 + 100 >> 2] | 0;
       i20 = i3 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] | 0);
       i20 = i3 + 4 | 0;
       HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i19;
       i21 = i2;
       STACKTOP = i5;
       return i21 | 0;
      }
     } while (0);
     i18 = i16 + 4 | 0;
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0) != (i2 | 0)) {
      break L1;
     }
     i19 = HEAP32[i1 + 100 >> 2] | 0;
     i20 = i3 | 0;
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] | 0);
     i22 = i3 + 4 | 0;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + i19;
     i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
     HEAPF32[i11 >> 2] = +0;
     HEAPF32[i11 + 4 >> 2] = +0;
     __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i10, i19, i11, 1);
     d23 = +HEAPF32[i10 >> 2];
     do {
      if (d23 < +2147483647) {
       if (d23 <= +-2147483648) {
        i24 = -2147483648;
        break;
       }
       i24 = ~~d23;
      } else {
       i24 = 2147483647;
      }
     } while (0);
     d23 = +HEAPF32[i10 + 4 >> 2];
     do {
      if (d23 < +2147483647) {
       if (d23 <= +-2147483648) {
        i25 = -2147483648;
        break;
       }
       i25 = ~~d23;
      } else {
       i25 = 2147483647;
      }
     } while (0);
     HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i24;
     HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + i25;
     i21 = i2;
     STACKTOP = i5;
     return i21 | 0;
    }
   } while (0);
   do {
    if ((i2 | 0) != 0) {
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0) == (i2 | 0)) {
      break;
     } else {
      i26 = i1;
     }
     while (1) {
      i19 = HEAP32[i26 + 36 >> 2] | 0;
      if ((i19 | 0) == 0) {
       i27 = 0;
       break;
      }
      if ((HEAP8[i19 + 21 | 0] & 16) != 0) {
       i27 = i19;
       break;
      }
      if ((HEAP32[(HEAP32[i19 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
       i26 = i19;
      } else {
       i27 = i19;
       break;
      }
     }
     if ((i27 | 0) == (i2 | 0)) {
      break L1;
     }
     i22 = i8 | 0;
     HEAP32[i22 >> 2] = 0;
     i20 = i8 + 4 | 0;
     HEAP32[i20 >> 2] = 0;
     if ((i27 | 0) == (i1 | 0)) {
      i19 = i9 | 0;
      HEAP32[i19 >> 2] = 0;
      i18 = i9 + 4 | 0;
      HEAP32[i18 >> 2] = 0;
      i28 = i19;
      i29 = i18;
     } else {
      if ((i1 | 0) != 0) {
       i18 = i1;
       while (1) {
        i18 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i18, i27, i8, 0) | 0;
        if ((i18 | 0) == 0 | (i18 | 0) == (i27 | 0)) {
         break;
        }
       }
      }
      i18 = i9 | 0;
      HEAP32[i18 >> 2] = 0;
      i19 = i9 + 4 | 0;
      HEAP32[i19 >> 2] = 0;
      i28 = i18;
      i29 = i19;
     }
     i19 = i2;
     while (1) {
      i19 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i19, i27, i9, 0) | 0;
      if ((i19 | 0) == 0 | (i19 | 0) == (i27 | 0)) {
       break;
      }
     }
     i19 = (HEAP32[i20 >> 2] | 0) - (HEAP32[i29 >> 2] | 0) | 0;
     i18 = i3 | 0;
     HEAP32[i18 >> 2] = (HEAP32[i22 >> 2] | 0) - (HEAP32[i28 >> 2] | 0) + (HEAP32[i18 >> 2] | 0);
     i18 = i3 + 4 | 0;
     HEAP32[i18 >> 2] = i19 + (HEAP32[i18 >> 2] | 0);
     i21 = i2;
     STACKTOP = i5;
     return i21 | 0;
    }
   } while (0);
   HEAPF32[i7 >> 2] = +0;
   HEAPF32[i7 + 4 >> 2] = +0;
   __ZNK7WebCore12RenderObject15localToAbsoluteERKNS_10FloatPointEj(i6, i16 | 0, i7, 1);
   d23 = +HEAPF32[i6 >> 2];
   do {
    if (d23 < +2147483647) {
     if (d23 <= +-2147483648) {
      i30 = -2147483648;
      break;
     }
     i30 = ~~d23;
    } else {
     i30 = 2147483647;
    }
   } while (0);
   d23 = +HEAPF32[i6 + 4 >> 2];
   do {
    if (d23 < +2147483647) {
     if (d23 <= +-2147483648) {
      i31 = -2147483648;
      break;
     }
     i31 = ~~d23;
    } else {
     i31 = 2147483647;
    }
   } while (0);
   i18 = i3 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i30;
   i18 = i3 + 4 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i31;
   i21 = i2;
   STACKTOP = i5;
   return i21 | 0;
  }
 } while (0);
 i31 = i1 + 36 | 0;
 i30 = HEAP32[i31 >> 2] | 0;
 do {
  if ((i17 | 0) == 6 | (i17 | 0) == 2) {
   L56 : do {
    if ((i30 | 0) == 0) {
     i32 = 0;
     i33 = 0;
    } else {
     i6 = i30;
     while (1) {
      if ((HEAP8[i6 + 21 | 0] & 16) != 0) {
       i32 = 0;
       i33 = i6;
       break L56;
      }
      if ((HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 20 >> 2] & 25296896 | 0) != 0) {
       i32 = 0;
       i33 = i6;
       break L56;
      }
      if ((i6 | 0) == (i2 | 0)) {
       i32 = 1;
       i33 = i2;
       break L56;
      }
      i7 = HEAP32[i6 + 36 >> 2] | 0;
      if ((i7 | 0) == 0) {
       i32 = 0;
       i33 = 0;
       break;
      } else {
       i6 = i7;
      }
     }
    }
   } while (0);
   do {
    if ((HEAP32[i16 + 20 >> 2] & 805306368 | 0) != 0) {
     if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i16 | 0) | 0) == 0) {
      break;
     }
     i6 = HEAP32[i15 >> 2] | 0;
     FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 248 >> 2] & 63](i6 | 0) | 0;
    }
   } while (0);
   if (i32) {
    i34 = i33;
   } else {
    i35 = i33;
    break;
   }
   while (1) {
    i6 = HEAP32[i34 + 36 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i36 = 0;
     break;
    }
    if ((HEAP8[i6 + 21 | 0] & 16) != 0) {
     i36 = i6;
     break;
    }
    if ((HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 20 >> 2] & 25296896 | 0) == 0) {
     i34 = i6;
    } else {
     i36 = i6;
     break;
    }
   }
   i6 = i12 | 0;
   HEAP32[i6 >> 2] = 0;
   i22 = i12 + 4 | 0;
   HEAP32[i22 >> 2] = 0;
   if (!((i36 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
    i20 = i1;
    while (1) {
     i20 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i20, i36, i12, 0) | 0;
     if ((i20 | 0) == 0 | (i20 | 0) == (i36 | 0)) {
      break;
     }
    }
   }
   i20 = i13 | 0;
   HEAP32[i20 >> 2] = 0;
   i7 = i13 + 4 | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i36 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i37 = 0;
    i38 = 0;
   } else {
    i28 = i2;
    while (1) {
     i28 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i28, i36, i13, 0) | 0;
     if ((i28 | 0) == 0 | (i28 | 0) == (i36 | 0)) {
      break;
     }
    }
    i37 = HEAP32[i20 >> 2] | 0;
    i38 = HEAP32[i7 >> 2] | 0;
   }
   i28 = (HEAP32[i22 >> 2] | 0) - i38 | 0;
   i29 = i3 | 0;
   HEAP32[i29 >> 2] = (HEAP32[i6 >> 2] | 0) - i37 + (HEAP32[i29 >> 2] | 0);
   i29 = i3 + 4 | 0;
   HEAP32[i29 >> 2] = i28 + (HEAP32[i29 >> 2] | 0);
   i21 = i2;
   STACKTOP = i5;
   return i21 | 0;
  } else {
   i35 = i30;
  }
 } while (0);
 if ((i35 | 0) == 0) {
  i21 = 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 i30 = HEAP32[i1 + 100 >> 2] | 0;
 i2 = i3 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i1 + 96 >> 2] | 0);
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i30;
 if ((i4 | 0) != 1) {
  i21 = i35;
  STACKTOP = i5;
  return i21 | 0;
 }
 i4 = HEAP32[i31 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i21 = i35;
  STACKTOP = i5;
  return i21 | 0;
 }
 i31 = i14 | 0;
 HEAP32[i31 >> 2] = 0;
 i30 = i14 + 4 | 0;
 HEAP32[i30 >> 2] = 0;
 i37 = HEAP32[i4 + 32 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i37 >> 2] | 0) + 520 >> 2] & 15](i37 | 0, i14, i3);
 i3 = HEAP32[i30 >> 2] | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i31 >> 2] | 0);
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + i3;
 i21 = i35;
 STACKTOP = i5;
 return i21 | 0;
}
function __ZN7WebCore11RenderLayer26paintChildLayerIntoColumnsEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKN3WTF6VectorIS1_Lj0ENS7_15CrashOnOverflowEEEj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0, i79 = 0, i80 = 0, i81 = 0, i82 = 0, i83 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 768 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 56 | 0;
 i16 = i8 + 72 | 0;
 i17 = i8 + 88 | 0;
 i18 = i8 + 216 | 0;
 i19 = i8 + 344 | 0;
 i20 = i8 + 392 | 0;
 i21 = i8 + 400 | 0;
 i22 = i8 + 528 | 0;
 i23 = i8 + 576 | 0;
 i24 = i8 + 624 | 0;
 i25 = i8 + 640 | 0;
 i26 = i6 + 8 | 0;
 if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i7 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i27 = i6 | 0;
 i28 = HEAP32[(HEAP32[(HEAP32[i27 >> 2] | 0) + (i7 << 2) >> 2] | 0) + 32 >> 2] | 0;
 i29 = i28;
 i30 = i28 + 20 | 0;
 if ((HEAP32[i30 >> 2] & 4194304 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i31 = i11 | 0;
 HEAP32[i31 >> 2] = 0;
 i32 = i11 + 4 | 0;
 HEAP32[i32 >> 2] = 0;
 i33 = HEAP32[i28 + 40 >> 2] | 0;
 i34 = i4 | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 if (!((i35 | 0) == (i33 | 0) | (i33 | 0) == 0)) {
  i36 = i33;
  while (1) {
   i36 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i36, i35, i11, 0) | 0;
   if ((i36 | 0) == 0 | (i36 | 0) == (i35 | 0)) {
    break;
   }
  }
 }
 i35 = (HEAP32[(HEAP32[i28 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 i36 = __ZNK7WebCore11RenderBlock10columnInfoEv(i29) | 0;
 i11 = __ZNK7WebCore11RenderBlock11columnCountEPNS_10ColumnInfoE(i29, i36) | 0;
 __ZNK7WebCore11RenderBlock29initialBlockOffsetForPaintingEv(i12, i29);
 __ZNK7WebCore11RenderBlock31blockDeltaForPaintingNextColumnEv(i13, i29);
 if ((i11 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i33 = i28;
 i37 = i14 + 4 | 0;
 i38 = i28;
 i39 = i28;
 i40 = i28;
 i28 = i10 | 0;
 i41 = i12 | 0;
 i12 = i14 | 0;
 i42 = i15;
 i43 = i4 + 8 | 0;
 i44 = i15 + 8 | 0;
 i45 = i13 | 0;
 i13 = i15 + 12 | 0;
 i46 = (i7 | 0) == 0;
 i47 = i17 | 0;
 i48 = i17 + 40 | 0;
 i49 = i17 + 8 | 0;
 i50 = i17 + 80 | 0;
 i51 = i17 + 48 | 0;
 i52 = i17 + 120 | 0;
 i53 = i17 + 88 | 0;
 i54 = i2 + 172 | 0;
 i55 = i18;
 i56 = i17;
 i57 = i19;
 i58 = i4;
 i4 = i19 + 8 | 0;
 i59 = i20 | 0;
 i60 = i20 + 4 | 0;
 i61 = i7 - 1 | 0;
 i7 = i21 | 0;
 i62 = i21 + 40 | 0;
 i63 = i21 + 8 | 0;
 i64 = i21 + 80 | 0;
 i65 = i21 + 48 | 0;
 i66 = i21 + 120 | 0;
 i67 = i21 + 88 | 0;
 i68 = i23;
 i69 = i23 | 0;
 i70 = i23 + 8 | 0;
 i71 = i24;
 i72 = i9 | 0;
 i73 = 0;
 L14 : while (1) {
  __ZNK7WebCore11RenderBlock12columnRectAtEPNS_10ColumnInfoEj(i14, i29, i36, i73);
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i33, i14);
  if ((i35 | 0) == 3 | (i35 | 0) == 0) {
   i74 = HEAP32[i12 >> 2] | 0;
  } else {
   i74 = HEAP32[i37 >> 2] | 0;
  }
  i75 = HEAP32[i39 >> 2] | 0;
  if ((HEAP32[i30 >> 2] & 8192 | 0) == 0) {
   i76 = FUNCTION_TABLE_ii[HEAP32[i75 + 736 >> 2] & 63](i38) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 704 >> 2] & 31](i10, i38);
   i77 = (HEAP32[i28 >> 2] | 0) + i76 | 0;
  } else {
   i76 = FUNCTION_TABLE_ii[HEAP32[i75 + 744 >> 2] & 63](i38) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i40 >> 2] | 0) + 712 >> 2] & 31](i9, i38);
   i77 = (HEAP32[i72 >> 2] | 0) + i76 | 0;
  }
  i76 = i74 - i77 | 0;
  if ((i35 | 0) == 3 | (i35 | 0) == 0) {
   i78 = i76;
   i79 = HEAP32[i41 >> 2] | 0;
  } else {
   i78 = HEAP32[i41 >> 2] | 0;
   i79 = i76;
  }
  i76 = HEAP32[i32 >> 2] | 0;
  HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + (HEAP32[i31 >> 2] | 0);
  HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + i76;
  HEAP32[i42 >> 2] = HEAP32[i43 >> 2];
  HEAP32[i42 + 4 >> 2] = HEAP32[i43 + 4 >> 2];
  HEAP32[i42 + 8 >> 2] = HEAP32[i43 + 8 >> 2];
  HEAP32[i42 + 12 >> 2] = HEAP32[i43 + 12 >> 2];
  __ZN7WebCore10LayoutRect9intersectERKS0_(i15, i14);
  do {
   if ((HEAP32[i44 >> 2] | 0) >= 1) {
    if ((HEAP32[i13 >> 2] | 0) < 1) {
     break;
    }
    __ZN7WebCore15GraphicsContext4saveEv(i3);
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i16, i14);
    __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i3, i16);
    do {
     if (i46) {
      HEAPF64[i47 >> 3] = +1;
      _memset(i49 | 0, 0, 32) | 0;
      HEAPF64[i48 >> 3] = +1;
      _memset(i51 | 0, 0, 32) | 0;
      HEAPF64[i50 >> 3] = +1;
      _memset(i53 | 0, 0, 32) | 0;
      HEAPF64[i52 >> 3] = +1;
      i76 = HEAP32[i54 >> 2] | 0;
      i75 = (i76 | 0) != 0;
      if (!((i17 | 0) == (i76 | 0) | i75 ^ 1)) {
       _memcpy(i56 | 0, i76 | 0, 128) | 0;
      }
      _memcpy(i55 | 0, i56 | 0, 128) | 0;
      __ZN7WebCore20TransformationMatrix14translateRightEdd(i18, +(i78 | 0), +(i79 | 0)) | 0;
      i76 = __ZN3WTF10fastMallocEj(128) | 0;
      i80 = i76;
      if ((i80 | 0) != (i18 | 0)) {
       _memcpy(i76 | 0, i55 | 0, 128) | 0;
      }
      i76 = HEAP32[i54 >> 2] | 0;
      HEAP32[i54 >> 2] = i80;
      if ((i76 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i76);
      }
      _memcpy(i57 | 0, i58 | 0, 48) | 0;
      HEAP32[i4 >> 2] = HEAP32[i42 >> 2];
      HEAP32[i4 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
      HEAP32[i4 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
      HEAP32[i4 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
      __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i2, i3, i19, i5);
      if (!i75) {
       i75 = HEAP32[i54 >> 2] | 0;
       HEAP32[i54 >> 2] = 0;
       if ((i75 | 0) == 0) {
        break;
       }
       __ZN3WTF8fastFreeEPv(i75);
       break;
      }
      i75 = __ZN3WTF10fastMallocEj(128) | 0;
      i76 = i75;
      if ((i76 | 0) != (i17 | 0)) {
       _memcpy(i75 | 0, i56 | 0, 128) | 0;
      }
      i75 = HEAP32[i54 >> 2] | 0;
      HEAP32[i54 >> 2] = i76;
      if ((i75 | 0) == 0) {
       break;
      }
      __ZN3WTF8fastFreeEPv(i75);
     } else {
      HEAP32[i59 >> 2] = 0;
      HEAP32[i60 >> 2] = 0;
      if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i61 >>> 0) {
       i81 = 34;
       break L14;
      }
      i75 = HEAP32[(HEAP32[i27 >> 2] | 0) + (i61 << 2) >> 2] | 0;
      i76 = HEAP32[i34 >> 2] | 0;
      if ((i76 | 0) == (i75 | 0) | (i75 | 0) == 0) {
       i82 = 0;
       i83 = 0;
      } else {
       i80 = i75;
       while (1) {
        i80 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i80, i76, i20, 0) | 0;
        if ((i80 | 0) == 0 | (i80 | 0) == (i76 | 0)) {
         break;
        }
       }
       i82 = HEAP32[i59 >> 2] | 0;
       i83 = HEAP32[i60 >> 2] | 0;
      }
      HEAPF64[i7 >> 3] = +1;
      _memset(i63 | 0, 0, 32) | 0;
      HEAPF64[i62 >> 3] = +1;
      _memset(i65 | 0, 0, 32) | 0;
      HEAPF64[i64 >> 3] = +1;
      _memset(i67 | 0, 0, 32) | 0;
      HEAPF64[i66 >> 3] = +1;
      __ZN7WebCore20TransformationMatrix14translateRightEdd(i21, +(i82 + i78 | 0), +(i83 + i79 | 0)) | 0;
      __ZNK7WebCore20TransformationMatrix17toAffineTransformEv(i22, i21);
      __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i3, i22);
      _memcpy(i68 | 0, i58 | 0, 48) | 0;
      if ((HEAP32[i26 >> 2] | 0) >>> 0 <= i61 >>> 0) {
       i81 = 39;
       break L14;
      }
      HEAP32[i69 >> 2] = HEAP32[(HEAP32[i27 >> 2] | 0) + (i61 << 2) >> 2];
      __ZNK7WebCore20TransformationMatrix7inverseEv(i25, i21);
      __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i24, i25, i15);
      HEAP32[i70 >> 2] = HEAP32[i71 >> 2];
      HEAP32[i70 + 4 >> 2] = HEAP32[i71 + 4 >> 2];
      HEAP32[i70 + 8 >> 2] = HEAP32[i71 + 8 >> 2];
      HEAP32[i70 + 12 >> 2] = HEAP32[i71 + 12 >> 2];
      __ZN7WebCore11RenderLayer26paintChildLayerIntoColumnsEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKN3WTF6VectorIS1_Lj0ENS7_15CrashOnOverflowEEEj(i1, i2, i3, i23, i5, i6, i61);
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
   }
  } while (0);
  HEAP32[i41 >> 2] = (HEAP32[i45 >> 2] | 0) + (HEAP32[i41 >> 2] | 0);
  i76 = i73 + 1 | 0;
  if (i76 >>> 0 < i11 >>> 0) {
   i73 = i76;
  } else {
   i81 = 46;
   break;
  }
 }
 if ((i81 | 0) == 39) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i81 | 0) == 46) {
  STACKTOP = i8;
  return;
 } else if ((i81 | 0) == 34) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i7;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 __ZN7WebCore11RenderLayer19updateLayerPositionEv(i1) | 0;
 i18 = (i2 | 0) != 0;
 if (i18) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i2, i1, HEAP32[i1 + 36 >> 2] | 0);
 }
 i19 = i1 + 148 | 0;
 i20 = HEAP32[i19 >> 2] | 0;
 HEAP32[i19 >> 2] = 0;
 if ((i20 | 0) != 0) {
  __ZN7WebCore14ClipRectsCacheD2Ev(i20);
  __ZN3WTF8fastFreeEPv(i20);
 }
 do {
  if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
    i21 = 9;
    break;
   }
   if ((HEAP32[i1 + 180 >> 2] | 0) != 0) {
    i21 = 9;
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0) {
    i21 = 9;
   }
  } else {
   i21 = 9;
  }
 } while (0);
 if ((i21 | 0) == 9) {
  i21 = i7;
  HEAP32[i21 >> 2] = 0;
  i20 = i8 + 4 | 0;
  HEAP32[i20 >> 2] = 0;
  do {
   if (i18) {
    HEAPF32[i10 >> 2] = +0;
    HEAPF32[i10 + 4 >> 2] = +0;
    __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_10FloatPointEPKNS_22RenderLayerModelObjectE(i9, i2, i10, 0);
    d22 = +HEAPF32[i9 >> 2];
    do {
     if (d22 < +2147483647) {
      if (d22 <= +-2147483648) {
       i23 = 0;
       i24 = -2147483648;
       break;
      }
      i23 = 0;
      i24 = ~~d22;
     } else {
      i23 = 0;
      i24 = 2147483647;
     }
    } while (0);
    d22 = +HEAPF32[i9 + 4 >> 2];
    do {
     if (d22 < +2147483647) {
      if (d22 <= +-2147483648) {
       i25 = -2147483648;
       i26 = 0;
       break;
      }
      i25 = ~~d22;
      i26 = 0;
     } else {
      i25 = 2147483647;
      i26 = 0;
     }
    } while (0);
    HEAP32[i7 >> 2] = i26 | i24;
    HEAP32[i7 + 4 >> 2] = i25 | i23;
    i27 = i24;
    i28 = i25;
   } else {
    i19 = i1;
    while (1) {
     i29 = HEAP32[i19 + 36 >> 2] | 0;
     if ((i29 | 0) == 0) {
      break;
     } else {
      i19 = i29;
     }
    }
    if ((i19 | 0) == (i1 | 0) | (i1 | 0) == 0) {
     i27 = 0;
     i28 = 0;
     break;
    } else {
     i30 = i1;
    }
    while (1) {
     i30 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i30, i19, i8, 0) | 0;
     if ((i30 | 0) == 0 | (i30 | 0) == (i19 | 0)) {
      break;
     }
    }
    i27 = HEAP32[i21 >> 2] | 0;
    i28 = HEAP32[i20 >> 2] | 0;
   }
  } while (0);
  HEAP32[i11 >> 2] = i27;
  HEAP32[i11 + 4 >> 2] = i28;
  __ZN7WebCore11RenderLayer24positionOverflowControlsERKNS_7IntSizeE(i1, i11);
 }
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i1, 0);
 if ((i3 & 16 | 0) == 0) {
  i11 = i1 + 22 | 0;
  i28 = HEAP8[i11] & -65;
  HEAP8[i11] = i28;
  HEAP32[i1 + 188 >> 2] = 0;
  i31 = i28;
 } else {
  __ZN7WebCore11RenderLayer16updatePaginationEv(i1);
  i31 = HEAP8[i1 + 22 | 0] | 0;
 }
 L35 : do {
  if ((i31 & 8) == 0) {
   _memset(i1 + 56 | 0, 0, 32) | 0;
  } else {
   i28 = i1 + 32 | 0;
   i11 = __ZNK7WebCore12RenderObject19containerForRepaintEv(HEAP32[i28 >> 2] | 0) | 0;
   i27 = i1 + 56 | 0;
   i20 = i12;
   i21 = i27;
   HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
   HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
   HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
   HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
   i20 = i1 + 72 | 0;
   i30 = i15;
   i8 = i20;
   HEAP32[i30 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i30 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
   HEAP32[i30 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
   HEAP32[i30 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
   i30 = i5;
   i25 = i6;
   i24 = HEAP32[i28 >> 2] | 0;
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i24 >> 2] | 0) + 500 >> 2] & 15](i5, i24 | 0, i11);
   HEAP32[i21 >> 2] = HEAP32[i30 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
   i30 = HEAP32[i28 >> 2] | 0;
   FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i30 >> 2] | 0) + 508 >> 2] & 15](i6, i30 | 0, i11, i2);
   HEAP32[i8 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
   if ((i3 & 1 | 0) == 0) {
    break;
   }
   if (__ZNK7WebCore10RenderView8printingEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) {
    break;
   }
   i25 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i25 & 65536 | 0) == 0) {
    do {
     if ((i25 & 196608 | 0) != 0) {
      i8 = HEAP32[i1 + 208 >> 2] | 0;
      if ((i8 | 0) == 0) {
       break;
      }
      if ((HEAP8[i8 + 91 | 0] & 1) != 0) {
       break L35;
      }
     }
    } while (0);
    __ZN7WebCore13RenderElement26repaintAfterLayoutIfNeededEPKNS_22RenderLayerModelObjectERKNS_10LayoutRectES6_PS5_S7_(HEAP32[i28 >> 2] | 0, i11, i14, i15, i27, i20) | 0;
   } else {
    i25 = HEAP32[i28 >> 2] | 0;
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i16, i14);
    __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i25, i11, i16, 0);
    i25 = i27;
    do {
     if (!((HEAP32[i25 >> 2] | 0) != (HEAP32[i13 >> 2] | 0) | (HEAP32[i25 + 4 >> 2] | 0) != (HEAP32[i13 + 4 >> 2] | 0))) {
      i8 = i1 + 64 | 0;
      i30 = i12 + 8 | 0;
      if ((HEAP32[i8 >> 2] | 0) != (HEAP32[i30 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i8 + 4 >> 2] | 0) == (HEAP32[i30 + 4 >> 2] | 0)) {
       break L35;
      }
     }
    } while (0);
    i25 = HEAP32[i28 >> 2] | 0;
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i17, i27);
    __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i25, i11, i17, 0);
   }
   i25 = HEAP32[i28 >> 2] | 0;
   if ((HEAP32[i25 + 24 >> 2] & 32 | 0) == 0) {
    break;
   }
   i20 = HEAP32[i25 + 100 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   }
   if ((HEAP32[i20 + 28 >> 2] | 0) == 0) {
    break;
   }
   i25 = HEAP32[(HEAP32[i20 + 28 >> 2] | 0) + 116 >> 2] | 0;
   if ((i25 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv(HEAP32[i25 + 40 >> 2] | 0);
  }
 } while (0);
 i17 = i1 + 20 | 0;
 HEAP32[i17 >> 2] = HEAP32[i17 >> 2] & -196609;
 i17 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i17 | 0) != 0) {
  __ZN7WebCore13RenderReplica6layoutEv(i17);
 }
 i17 = i3 & 4;
 i12 = i1 + 208 | 0;
 i13 = (HEAP32[i12 >> 2] | 0) != 0 ? i3 & -5 : i3;
 i3 = i1 + 32 | 0;
 i16 = HEAP32[i3 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 2) == 0) {
   i32 = i13;
  } else {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 248 >> 2] & 63](i16 | 0) | 0)) {
    i32 = i13;
    break;
   }
   if ((HEAP32[i16 + 20 >> 2] & 25165824 | 0) == 16777216) {
    i32 = i13;
    break;
   }
   __ZN7WebCore11RenderLayer16updatePaginationEv(i1);
   i32 = i13 | 16;
  }
 } while (0);
 i13 = (HEAP32[(HEAP32[i3 >> 2] | 0) + 20 >> 2] & 4194304 | 0) != 0 ? i32 | 16 : i32;
 i32 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i32 | 0) != 0) {
  i3 = i32;
  while (1) {
   __ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj(i3, i2, i13);
   i3 = HEAP32[i3 + 44 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
  }
 }
 do {
  if ((i13 & 8 | 0) != 0) {
   i3 = HEAP32[i12 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   __ZN7WebCore18RenderLayerBacking17updateAfterLayoutEj(i3, i17 | i13 & 2 | 1);
  }
 } while (0);
 i13 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i17 = i1 + 24 | 0;
  i12 = HEAP8[i17] | 0;
  HEAP8[i17] = i12 | 1;
  __ZN7WebCore13RenderMarquee21updateMarqueePositionEv(i13);
  HEAP8[i17] = HEAP8[i17] & -2 | i12 & 1;
 }
 if (!i18) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore17RenderGeometryMap21popMappingsToAncestorEPKNS_11RenderLayerE(i2, HEAP32[i1 + 36 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 336 | 0;
 i6 = i5 | 0;
 i7 = i5 + 128 | 0;
 i8 = i5 + 256 | 0;
 i9 = i5 + 280 | 0;
 i10 = i5 + 304 | 0;
 i11 = i5 + 328 | 0;
 i12 = i1 + 208 | 0;
 L1 : do {
  if ((HEAP32[i12 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 20 >> 2] & 1610612736 | 0) != 536870912) {
    i13 = i4;
    break;
   }
   STACKTOP = i5;
   return;
  } else {
   do {
    if (!(__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0)) {
     if ((HEAP32[i3 + 40 >> 2] & 4 | 0) != 0) {
      break;
     }
     if (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(HEAP32[i12 >> 2] | 0) | 0) {
      i13 = i4;
      break L1;
     }
     if ((HEAP8[(HEAP32[i12 >> 2] | 0) + 91 | 0] & 1) == 0) {
      i13 = i4;
      break L1;
     }
     do {
      if ((i4 & 8 | 0) != 0) {
       i14 = HEAP32[i1 + 172 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i13 = i4;
        break L1;
       }
       if (+HEAPF64[i14 + 16 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 24 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 48 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 56 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 64 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 72 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 80 >> 3] != +1) {
        break;
       }
       if (+HEAPF64[i14 + 88 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 112 >> 3] != +0) {
        break;
       }
       if (+HEAPF64[i14 + 120 >> 3] == +1) {
        i13 = i4;
        break L1;
       }
      }
     } while (0);
     i14 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0;
     if ((HEAP32[(HEAP32[(HEAP32[i14 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) != (i14 | 0)) {
      STACKTOP = i5;
      return;
     }
     if ((i4 & 1024 | 0) != 0) {
      i13 = i4;
      break L1;
     }
     STACKTOP = i5;
     return;
    }
   } while (0);
   i13 = i4 | 4;
  }
 } while (0);
 if ((HEAP8[i1 + 20 | 0] & 96) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = i1 + 32 | 0;
 i14 = HEAP32[i4 >> 2] | 0;
 i15 = HEAP32[i14 + 4 >> 2] | 0;
 i16 = HEAP32[(HEAP32[i15 + 20 >> 2] | 0) + 8 >> 2] | 0;
 do {
  if ((HEAP32[i16 + 328 >> 2] | 0) == 1) {
   if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
    break;
   }
   if ((HEAP32[i16 + 692 >> 2] | 0) == (i15 | 0)) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 if ((HEAP8[i16 + 2053 | 0] & 1) == 0) {
  STACKTOP = i5;
  return;
 }
 if (+HEAPF32[(HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2] == +0) {
  STACKTOP = i5;
  return;
 }
 i16 = i3 + 32 | 0;
 i15 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i15 | 0) != 0) {
   if ((HEAP32[i1 + 188 >> 2] | 0) != 0) {
    HEAP32[i16 >> 2] = 0;
    break;
   }
   if (__ZNK7WebCore16RenderFlowThread29objectShouldPaintInFlowRegionEPKNS_12RenderObjectEPKNS_12RenderRegionE(HEAP32[i15 + 116 >> 2] | 0, i14 | 0, i15) | 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i14 = i3 + 40 | 0;
 i17 = HEAP32[i14 >> 2] | 0;
 i18 = HEAP32[i4 >> 2] | 0;
 do {
  if ((HEAP32[i18 + 20 >> 2] & 128 | 0) == 0) {
   i4 = HEAP32[i18 + 4 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i19 = 35;
    break;
   }
   if ((HEAP32[i4 + 12 >> 2] & 32 | 0) == 0) {
    i19 = 35;
   } else {
    i20 = 0;
    i19 = 42;
   }
  } else {
   i19 = 35;
  }
 } while (0);
 L53 : do {
  if ((i19 | 0) == 35) {
   i4 = HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 20 >> 2] | 0;
   L55 : do {
    if (+HEAPF32[i4 + 4 >> 2] >= +1) {
     i21 = i4 + 116 | 0;
     while (1) {
      if ((HEAP32[i21 + 4 >> 2] | 0) != 0) {
       break L55;
      }
      i21 = HEAP32[i21 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      i20 = 0;
      i19 = 42;
      break L53;
     }
    }
   } while (0);
   if ((i17 & 4 | 0) != 0) {
    i20 = 1;
    i19 = 42;
    break;
   }
   i4 = HEAP32[i12 >> 2] | 0;
   i22 = (i4 | 0) == 0;
   i23 = i4;
  }
 } while (0);
 if ((i19 | 0) == 42) {
  i22 = i20;
  i23 = HEAP32[i12 >> 2] | 0;
 }
 i12 = i22 & 1 | i13;
 if ((i23 | 0) == 0) {
  i24 = 1;
 } else {
  i24 = __ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i23) | 0;
 }
 i23 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i23 | 0) != 0) {
   if (!(i24 | (i17 & 4 | 0) != 0)) {
    break;
   }
   if ((i13 & 2 | 0) != 0) {
    break;
   }
   i22 = i6;
   do {
    if ((HEAP32[i14 >> 2] & 4 | 0) == 0) {
     if ((i23 | 0) == (i7 | 0)) {
      break;
     }
     _memcpy(i7 | 0, i23 | 0, 128) | 0;
    } else {
     if ((i6 | 0) != (i23 | 0)) {
      _memcpy(i22 | 0, i23 | 0, 128) | 0;
     }
     __ZN7WebCore20TransformationMatrix10makeAffineEv(i6);
     _memcpy(i7 | 0, i22 | 0, 128) | 0;
    }
   } while (0);
   if (!(__ZNK7WebCore20TransformationMatrix12isInvertibleEv(i7) | 0)) {
    HEAP32[i16 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
   do {
    if ((i12 & 1 | 0) != 0) {
     i22 = HEAP32[i1 + 36 >> 2] | 0;
     i20 = HEAP32[i3 >> 2] | 0;
     i19 = i3 + 8 | 0;
     i18 = HEAP32[i14 >> 2] | 0;
     if ((i22 | 0) == 0) {
      __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i1, i2, i20, i19, i18);
      break;
     } else {
      __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i22, i2, i20, i19, i18);
      break;
     }
    }
   } while (0);
   if ((HEAP32[i1 + 188 >> 2] | 0) != 0) {
    __ZN7WebCore11RenderLayer34paintTransformedLayerIntoFragmentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i12);
    HEAP32[i16 >> 2] = i15;
    STACKTOP = i5;
    return;
   }
   i18 = i3 + 8 | 0;
   i19 = i8;
   i20 = i18;
   HEAP32[i19 >> 2] = HEAP32[i20 >> 2];
   HEAP32[i19 + 4 >> 2] = HEAP32[i20 + 4 >> 2];
   HEAP32[i19 + 8 >> 2] = HEAP32[i20 + 8 >> 2];
   HEAP32[i19 + 12 >> 2] = HEAP32[i20 + 12 >> 2];
   HEAP8[i8 + 16 | 0] = 0;
   i20 = i1 + 36 | 0;
   if ((HEAP32[i20 >> 2] | 0) != 0) {
    i22 = i3 | 0;
    i4 = HEAP32[i16 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i22 >> 2];
    HEAP32[i9 + 4 >> 2] = i4;
    HEAP32[i9 + 8 >> 2] = (i13 & 4 | 0) != 0 ? 5 : 0;
    HEAP32[i9 + 12 >> 2] = 0;
    HEAP32[i9 + 16 >> 2] = i13 >>> 9 & 1 ^ 1;
    __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i10, i1, i9);
    i4 = i10;
    HEAP32[i19 >> 2] = HEAP32[i4 >> 2];
    HEAP32[i19 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
    HEAP32[i19 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
    HEAP32[i19 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
    HEAP8[i19 + 16 | 0] = HEAP8[i4 + 16 | 0] | 0;
    __ZN7WebCore10LayoutRect9intersectERKS0_(i8 | 0, i18);
    __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(HEAP32[i20 >> 2] | 0, HEAP32[i22 >> 2] | 0, i2, i18, i8, 0);
   }
   HEAP32[i11 >> 2] = 0;
   HEAP32[i11 + 4 >> 2] = 0;
   __ZN7WebCore11RenderLayer29paintLayerByApplyingTransformEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKNS_11LayoutPointE(i1, i2, i3, i12, i11);
   L98 : do {
    if ((HEAP32[i20 >> 2] | 0) != 0) {
     i22 = i8;
     i4 = i18;
     do {
      if ((HEAP32[i22 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i22 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0)) {
       i19 = i8 + 8 | 0;
       i21 = i3 + 16 | 0;
       if ((HEAP32[i19 >> 2] | 0) != (HEAP32[i21 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i19 + 4 >> 2] | 0) == (HEAP32[i21 + 4 >> 2] | 0)) {
        break L98;
       }
      }
     } while (0);
     __ZN7WebCore15GraphicsContext7restoreEv(i2);
    }
   } while (0);
   HEAP32[i16 >> 2] = i15;
   STACKTOP = i5;
   return;
  }
 } while (0);
 i8 = i12 & -3;
 i12 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i12 | 0) != 0) {
   i11 = i1 + 21 | 0;
   i10 = HEAP8[i11] | 0;
   if ((i10 & 64) != 0) {
    break;
   }
   HEAP8[i11] = i10 | 64;
   __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(HEAP32[i12 + 40 >> 2] | 0, i2, i3, i8 | 8);
   HEAP8[i11] = HEAP8[i11] & -65;
  }
 } while (0);
 __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i8 | 224);
 HEAP32[i16 >> 2] = i15;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer6resizeERKNS_18PlatformMouseEventERKNS_10LayoutSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, d27 = +0, i28 = 0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
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
 if ((HEAP8[i1 + 20 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i20 = i1 + 32 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 do {
  if ((HEAP32[i21 + 20 >> 2] & 65536 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 140 >> 2] & 63](i21 | 0) | 0) {
    i22 = HEAP32[i20 >> 2] | 0;
    break;
   } else {
    STACKTOP = i4;
    return;
   }
  } else {
   i22 = i21;
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[i22 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i22 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 i21 = HEAP32[i22 + 4 >> 2] | 0;
 if ((i21 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i22 = i21;
 i23 = i21 + 32 | 0;
 if ((HEAP32[i21 + 12 >> 2] & 2048 | 0) == 0) {
  i24 = i23 | 0;
 } else {
  i24 = HEAP32[i23 >> 2] | 0;
 }
 i23 = HEAP32[i24 >> 2] | 0;
 i24 = i23;
 i25 = HEAP32[(HEAP32[i21 + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[i25 + 332 >> 2] | 0) + 472 >> 2] | 0) + 4 | 0] & 1) == 0) {
  STACKTOP = i4;
  return;
 }
 i26 = i23 + 36 | 0;
 d27 = +HEAPF32[(HEAP32[(HEAP32[i26 >> 2] | 0) + 24 >> 2] | 0) + 80 >> 2];
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i11, __ZNK7WebCore8Document4viewEv(i25) | 0, i2 + 16 | 0);
 i2 = i1 + 104 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 i28 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = HEAP32[i20 >> 2] | 0;
 d29 = +(HEAP32[i11 + 4 >> 2] | 0);
 HEAPF32[i6 >> 2] = +(HEAP32[i11 >> 2] | 0);
 HEAPF32[i6 + 4 >> 2] = d29;
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i5, i2, i6, 2);
 d29 = +_round(+(+HEAPF32[i5 >> 2]));
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
 d29 = +_round(+(+HEAPF32[i5 + 4 >> 2]));
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
 i5 = i31 - i28 | 0;
 d29 = +(i30 - i1 | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i32 = -2147483648;
    break;
   }
   i32 = ~~d29;
  } else {
   i32 = 2147483647;
  }
 } while (0);
 d29 = +(i5 | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i33 = -2147483648;
    break;
   }
   i33 = ~~d29;
  } else {
   i33 = 2147483647;
  }
 } while (0);
 i5 = i23 + 52 | 0;
 d29 = +(HEAP32[i5 >> 2] | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i34 = -2147483648;
    break;
   }
   i34 = ~~d29;
  } else {
   i34 = 2147483647;
  }
 } while (0);
 i1 = i23 + 56 | 0;
 d29 = +(HEAP32[i1 >> 2] | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i35 = -2147483648;
    break;
   }
   i35 = ~~d29;
  } else {
   i35 = 2147483647;
  }
 } while (0);
 HEAP32[i12 >> 2] = i34;
 HEAP32[i12 + 4 >> 2] = i35;
 __ZNK7WebCore7Element22minimumSizeForResizingEv(i14, i22);
 i30 = HEAP32[((HEAP32[i14 + 4 >> 2] | 0) < (i35 | 0) ? i14 : i12) + 4 >> 2] | 0;
 i28 = i13 | 0;
 HEAP32[i28 >> 2] = HEAP32[((HEAP32[i14 >> 2] | 0) < (i34 | 0) ? i14 : i12) >> 2];
 i12 = i13 + 4 | 0;
 HEAP32[i12 >> 2] = i30;
 __ZN7WebCore7Element25setMinimumSizeForResizingERKNS_10LayoutSizeE(i22, i13);
 d29 = +(HEAP32[i3 >> 2] | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i36 = -2147483648;
    break;
   }
   i36 = ~~d29;
  } else {
   i36 = 2147483647;
  }
 } while (0);
 d29 = +(HEAP32[i3 + 4 >> 2] | 0) / d27;
 do {
  if (d29 < +2147483647) {
   if (d29 <= +-2147483648) {
    i37 = -2147483648;
    break;
   }
   i37 = ~~d29;
  } else {
   i37 = 2147483647;
  }
 } while (0);
 i3 = i32 - i36 + i34 | 0;
 i36 = i33 - i37 + i35 | 0;
 HEAP32[i15 >> 2] = i3;
 HEAP32[i15 + 4 >> 2] = i36;
 i37 = HEAP32[((i3 | 0) > (HEAP32[i28 >> 2] | 0) ? i15 : i13) >> 2] | 0;
 i28 = HEAP32[((i36 | 0) > (HEAP32[i12 >> 2] | 0) ? i15 : i13) + 4 >> 2] | 0;
 i13 = i37 - i34 | 0;
 i15 = i28 - i35 | 0;
 i12 = i21;
 i36 = HEAP32[i26 >> 2] | 0;
 i26 = (HEAP32[(HEAP32[i36 + 4 >> 2] | 0) + 64 >> 2] & 2 | 0) != 0;
 i3 = (HEAP32[(HEAP32[i36 + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 13 & 3;
 if ((i3 | 0) == 3) {
  if ((i28 | 0) != (i35 | 0)) {
   i38 = 48;
  }
 } else {
  if ((i37 | 0) != (i34 | 0)) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 448 >> 2] & 63](i22) | 0) {
    i34 = i23;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 776 >> 2] & 31](i16, i24);
    __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 92, +(HEAP32[i16 >> 2] | 0) / d27, 5, 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i34 >> 2] | 0) + 780 >> 2] & 31](i17, i24);
    __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 93, +(HEAP32[i17 >> 2] | 0) / d27, 5, 0) | 0;
   }
   i17 = HEAP32[i5 >> 2] | 0;
   if (i26) {
    i39 = 0;
   } else {
    i5 = i23;
    i34 = i23;
    i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 744 >> 2] & 63](i5) | 0;
    i37 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i34 >> 2] | 0) + 748 >> 2] & 63](i5) | 0) + i16 | 0;
    i16 = i23;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 712 >> 2] & 31](i7, i5);
    i34 = i37 + (HEAP32[i7 >> 2] | 0) | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 716 >> 2] & 31](i8, i5);
    i39 = i34 + (HEAP32[i8 >> 2] | 0) | 0;
   }
   d29 = +(i17 - i39 | 0) / d27;
   do {
    if (d29 < +2147483647) {
     if (d29 <= +-2147483648) {
      i40 = -2147483648;
      break;
     }
     i40 = ~~d29;
    } else {
     i40 = 2147483647;
    }
   } while (0);
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 165, +(i13 + i40 | 0), 5, 0) | 0;
  }
  if ((i3 | 0) != 2 & (i28 | 0) != (i35 | 0)) {
   i38 = 48;
  }
 }
 if ((i38 | 0) == 48) {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 448 >> 2] & 63](i22) | 0) {
   i22 = i23;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 768 >> 2] & 31](i18, i24);
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 94, +(HEAP32[i18 >> 2] | 0) / d27, 5, 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i22 >> 2] | 0) + 772 >> 2] & 31](i19, i24);
   __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 91, +(HEAP32[i19 >> 2] | 0) / d27, 5, 0) | 0;
  }
  i19 = HEAP32[i1 >> 2] | 0;
  if (i26) {
   i41 = 0;
  } else {
   i26 = i23;
   i1 = i23;
   i24 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 63](i26) | 0;
   i22 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 63](i26) | 0) + i24 | 0;
   i24 = i23;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i24 >> 2] | 0) + 704 >> 2] & 31](i9, i26);
   i23 = i22 + (HEAP32[i9 >> 2] | 0) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i24 >> 2] | 0) + 708 >> 2] & 31](i10, i26);
   i41 = i23 + (HEAP32[i10 >> 2] | 0) | 0;
  }
  d29 = +(i19 - i41 | 0) / d27;
  do {
   if (d29 < +2147483647) {
    if (d29 <= +-2147483648) {
     i42 = -2147483648;
     break;
    }
    i42 = ~~d29;
   } else {
    i42 = 2147483647;
   }
  } while (0);
  __ZN7WebCore13StyledElement22setInlineStylePropertyENS_13CSSPropertyIDEdNS_17CSSPrimitiveValue9UnitTypesEb(i12, 82, +(i15 + i42 | 0), 5, 0) | 0;
 }
 __ZN7WebCore8Document12updateLayoutEv(i25);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer27updateScrollbarsAfterLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i5;
 i7 = i5 + 36 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 10) {
  STACKTOP = i2;
  return;
 }
 i8 = i1 + 20 | 0;
 if ((HEAP8[i8] & 2) == 0) {
  i9 = i5;
 } else {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
  i9 = HEAP32[i4 >> 2] | 0;
 }
 i10 = i1 + 120 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 63](i9) | 0;
 i9 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i9 + 20 >> 2] & 512 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = i9;
 }
 i9 = (i11 | 0) > (__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i12) | 0);
 if ((HEAP8[i8] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i12 = i1 + 124 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 63](i13) | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = i13;
 }
 i13 = (i11 | 0) > (__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i14) | 0);
 i14 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] | 0;
 if ((i14 & 7168 | 0) == 2048) {
  i11 = HEAP32[i1 + 128 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 208 >> 2] & 31](i11, i9);
  i15 = HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 48 >> 2] | 0;
 } else {
  i15 = i14;
 }
 if ((i15 & 57344 | 0) == 16384) {
  i15 = HEAP32[i1 + 132 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i15 >> 2] | 0) + 208 >> 2] & 31](i15, i13);
 }
 i15 = i5 + 20 | 0;
 i5 = HEAP32[i15 >> 2] | 0;
 i14 = (i5 & 65536 | 0) == 0;
 do {
  if (i14) {
   i16 = 0;
   i17 = 0;
  } else {
   if ((((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i18 = (HEAP32[i1 + 128 >> 2] | 0) != 0 ^ i9;
   } else {
    i18 = 0;
   }
   if ((((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] | 0) >>> 13 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
    i16 = 0;
    i17 = i18;
    break;
   }
   i16 = (HEAP32[i1 + 132 >> 2] | 0) != 0 ^ i13;
   i17 = i18;
  }
 } while (0);
 do {
  if (i17 | i16) {
   do {
    if (i14) {
     i19 = i5;
    } else {
     if ((((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] | 0) >>> 10 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
      i19 = i5;
      break;
     }
     __ZN7WebCore11RenderLayer25setHasHorizontalScrollbarEb(i1, i9);
     i19 = HEAP32[i15 >> 2] | 0;
    }
   } while (0);
   do {
    if ((i19 & 65536 | 0) != 0) {
     if ((((HEAP32[(HEAP32[i7 >> 2] | 0) + 48 >> 2] | 0) >>> 13 & 7) - 3 | 0) >>> 0 >= 2 >>> 0) {
      break;
     }
     __ZN7WebCore11RenderLayer23setHasVerticalScrollbarEb(i1, i13);
    }
   } while (0);
   i18 = __ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0;
   i11 = HEAP8[i8] | 0;
   L39 : do {
    if (((i11 & 255) >>> 5 & 1 | 0) != (i18 & 1 | 0)) {
     HEAP8[i8] = i11 & -33 | (i18 & 1) << 5;
     i20 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     if (i18) {
      i21 = i20;
      while (1) {
       i22 = i21 + 20 | 0;
       i23 = HEAP8[i22] | 0;
       if ((i23 & -64) << 24 >> 24 == 64) {
        break L39;
       }
       HEAP8[i22] = i23 & 63 | 64;
       i21 = HEAP32[i21 + 36 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
      }
     } else {
      i21 = i20;
      while (1) {
       i23 = i21 + 20 | 0;
       i22 = HEAP8[i23] | 0;
       HEAP8[i23] = i22 | -128;
       if ((i22 & 32) != 0) {
        break L39;
       }
       i21 = HEAP32[i21 + 36 >> 2] | 0;
       if ((i21 | 0) == 0) {
        break;
       }
      }
     }
    }
   } while (0);
   i18 = HEAP32[i4 >> 2] | 0;
   i11 = HEAP32[(HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i11 + 1408 | 0] & 1) == 0) {
    i24 = i18;
   } else {
    HEAP8[i11 + 1409 | 0] = 1;
    i24 = HEAP32[i4 >> 2] | 0;
   }
   __ZNK7WebCore12RenderObject7repaintEb(i24 | 0, 0);
   i11 = HEAP32[i4 >> 2] | 0;
   i18 = HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 48 >> 2] | 0;
   if (!((i18 & 7168 | 0) == 3072 | (i18 & 57344 | 0) == 24576)) {
    break;
   }
   i18 = i1 + 21 | 0;
   i21 = HEAP8[i18] | 0;
   if (i21 << 24 >> 24 < 0) {
    break;
   }
   HEAP8[i18] = i21 | -128;
   i21 = i11 | 0;
   i20 = i11 + 20 | 0;
   i11 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i11 & 1 | 0) == 0) {
     HEAP32[i20 >> 2] = i11 | 1;
     if ((i11 & 32768 | 0) == 0) {
      break;
     }
     __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i21);
    }
   } while (0);
   i21 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i21 + 24 >> 2] & 16 | 0) == 0) {
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 652 >> 2] & 15](i21 | 0);
   } else {
    i11 = i21;
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 1032 >> 2] & 15](i11, i17, i16);
    i20 = HEAP32[(HEAP32[i21 >> 2] | 0) + 1020 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    FUNCTION_TABLE_viii[i20 & 15](i11, 1, i3);
   }
   HEAP8[i18] = HEAP8[i18] & 127;
  }
 } while (0);
 i3 = i1 + 128 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  i16 = __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i6) | 0;
  i17 = ~~(+(i16 | 0) * +.875);
  i24 = i16 - (__ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv() | 0) | 0;
  i13 = (i17 | 0) < (i24 | 0) ? i24 : i17;
  __ZN7WebCore9Scrollbar8setStepsEiii(HEAP32[i3 >> 2] | 0, 40, (i13 | 0) < 1 ? 1 : i13, 1);
  __ZN7WebCore9Scrollbar13setProportionEii(HEAP32[i3 >> 2] | 0, i16, HEAP32[i10 >> 2] | 0);
 }
 i16 = i1 + 132 | 0;
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  i3 = __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i6) | 0;
  i6 = ~~(+(i3 | 0) * +.875);
  i13 = i3 - (__ZN7WebCore9Scrollbar22maxOverlapBetweenPagesEv() | 0) | 0;
  i17 = (i6 | 0) < (i13 | 0) ? i13 : i6;
  __ZN7WebCore9Scrollbar8setStepsEiii(HEAP32[i16 >> 2] | 0, 40, (i17 | 0) < 1 ? 1 : i17, 1);
  __ZN7WebCore9Scrollbar13setProportionEii(HEAP32[i16 >> 2] | 0, i3, HEAP32[i12 >> 2] | 0);
 }
 if ((HEAP8[i8] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i3 = HEAP32[i10 >> 2] | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 63](i10) | 0;
 i10 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i10 + 20 >> 2] & 512 | 0) == 0) {
  i25 = 0;
 } else {
  i25 = i10;
 }
 do {
  if ((i3 | 0) > (__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i25) | 0)) {
   i10 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i10 + 20 >> 2] & 512 | 0) == 0) {
    i26 = 0;
   } else {
    i26 = i10;
   }
   if ((HEAP32[i26 + 20 >> 2] & 65536 | 0) == 0) {
    i27 = 58;
    break;
   }
   i10 = HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 48 >> 2] | 0;
   if ((i10 & 7168 | 0) == 2048) {
    i28 = 1;
    break;
   }
   if (((i10 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i28 = 1;
   } else {
    i27 = 58;
   }
  } else {
   i27 = 58;
  }
 } while (0);
 do {
  if ((i27 | 0) == 58) {
   if ((HEAP8[i8] & 2) != 0) {
    __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
   }
   i26 = HEAP32[i12 >> 2] | 0;
   i25 = HEAP32[i4 >> 2] | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 63](i25) | 0;
   i25 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i25 + 20 >> 2] & 512 | 0) == 0) {
    i29 = 0;
   } else {
    i29 = i25;
   }
   if ((i26 | 0) <= (__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i29) | 0)) {
    i28 = 0;
    break;
   }
   i26 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i26 + 20 >> 2] & 512 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = i26;
   }
   if ((HEAP32[i30 + 20 >> 2] & 65536 | 0) == 0) {
    i28 = 0;
    break;
   }
   i26 = HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 48 >> 2] | 0;
   if ((i26 & 57344 | 0) == 16384) {
    i28 = 1;
    break;
   }
   i28 = ((i26 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
  }
 } while (0);
 __ZN7WebCore11RenderLayer23updateScrollableAreaSetEb(i1, i28);
 STACKTOP = i2;
 return;
}
function __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, d24 = +0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 368 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 136 | 0;
 i11 = i7 + 264 | 0;
 i12 = i7 + 280 | 0;
 i13 = i7 + 296 | 0;
 i14 = i7 + 312 | 0;
 i15 = i7 + 328 | 0;
 i16 = i7 + 336 | 0;
 i17 = i7 + 352 | 0;
 do {
  if ((i3 | 0) != (i2 | 0)) {
   if ((i4 | 0) == 0) {
    i18 = HEAP32[i2 + 208 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i19 = 1;
    } else {
     i19 = __ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i18) | 0;
    }
    if ((HEAP32[i2 + 172 >> 2] | 0) == 0) {
     break;
    }
    if (!(i19 | (i6 & 4 | 0) != 0)) {
     break;
    }
   } else if ((i4 | 0) == 1) {
    if ((HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
     break;
    }
   } else {
    break;
   }
   if ((i5 | 0) == 0) {
    i20 = HEAP32[i2 + 188 >> 2] | 0;
   } else {
    i20 = 0;
   }
   i18 = (i20 | 0) != 0;
   i21 = i18 ? i20 : i3;
   i22 = i8 | 0;
   HEAP32[i22 >> 2] = 0;
   i23 = i8 + 4 | 0;
   HEAP32[i23 >> 2] = 0;
   if ((i21 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    d24 = +0;
    d25 = +0;
   } else {
    i26 = i2;
    while (1) {
     i26 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i26, i21, i8, 0) | 0;
     if ((i26 | 0) == 0 | (i26 | 0) == (i21 | 0)) {
      break;
     }
    }
    d24 = +(HEAP32[i22 >> 2] | 0);
    d25 = +(HEAP32[i23 >> 2] | 0);
   }
   HEAPF64[i9 >> 3] = +1;
   _memset(i9 + 8 | 0, 0, 32) | 0;
   HEAPF64[i9 + 40 >> 3] = +1;
   _memset(i9 + 48 | 0, 0, 32) | 0;
   HEAPF64[i9 + 80 >> 3] = +1;
   _memset(i9 + 88 | 0, 0, 32) | 0;
   HEAPF64[i9 + 120 >> 3] = +1;
   __ZN7WebCore20TransformationMatrix9translateEdd(i9, d24, d25) | 0;
   i21 = HEAP32[i2 + 172 >> 2] | 0;
   i26 = i10;
   i27 = i9;
   _memcpy(i26 | 0, i27 | 0, 128) | 0;
   __ZN7WebCore20TransformationMatrix8multiplyERKS0_(i10, i21) | 0;
   _memcpy(i27 | 0, i26 | 0, 128) | 0;
   __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i11, i2, 0);
   i26 = i2 + 32 | 0;
   i27 = HEAP32[i26 >> 2] | 0;
   if ((HEAP32[i27 + 20 >> 2] & 512 | 0) == 0) {
    __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(__ZNK7WebCore12RenderObject15containingBlockEv(i27 | 0) | 0, i11);
   } else {
    __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i27, i11);
   }
   i27 = i11 | 0;
   i21 = i11 + 4 | 0;
   __ZN7WebCoreL41expandClipRectForDescendantsAndReflectionERNS_10LayoutRectEPKNS_11RenderLayerES4_NS_27TransparencyClipBoxBehaviorEj(i11, i2, i2, i4, i6);
   i28 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i26 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
   do {
    if ((HEAP32[i28 + 12 >> 2] | 0) == 0) {
     _memset(i12 | 0, 0, 16) | 0;
     i29 = i12 + 12 | 0;
     i30 = i12 + 4 | 0;
     i31 = 20;
    } else {
     __ZNK7WebCore16FilterOperations7outsetsEv(i12, i28 + 4 | 0);
     i26 = i12 + 12 | 0;
     i32 = HEAP32[i26 >> 2] | 0;
     i33 = i12 + 4 | 0;
     if ((i32 | 0) == 0) {
      i29 = i26;
      i30 = i33;
      i31 = 20;
      break;
     }
     i34 = HEAP32[i33 >> 2] | 0;
     i35 = i26;
     i36 = i32;
     i31 = 23;
    }
   } while (0);
   do {
    if ((i31 | 0) == 20) {
     i28 = HEAP32[i30 >> 2] | 0;
     if ((i28 | 0) != 0) {
      i34 = i28;
      i35 = i29;
      i36 = 0;
      i31 = 23;
      break;
     }
     if ((HEAP32[i12 >> 2] | 0) != 0) {
      i34 = 0;
      i35 = i29;
      i36 = 0;
      i31 = 23;
      break;
     }
     if ((HEAP32[i12 + 8 >> 2] | 0) != 0) {
      i34 = 0;
      i35 = i29;
      i36 = 0;
      i31 = 23;
     }
    }
   } while (0);
   if ((i31 | 0) == 23) {
    i28 = HEAP32[i12 >> 2] | 0;
    HEAP32[i27 >> 2] = (HEAP32[i27 >> 2] | 0) - i36;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - i28;
    i23 = (HEAP32[i12 + 8 >> 2] | 0) + i28 | 0;
    i28 = i11 + 8 | 0;
    HEAP32[i28 >> 2] = i34 + (HEAP32[i35 >> 2] | 0) + (HEAP32[i28 >> 2] | 0);
    i28 = i11 + 12 | 0;
    HEAP32[i28 >> 2] = i23 + (HEAP32[i28 >> 2] | 0);
   }
   __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i13, i9, i11);
   if (!i18) {
    i28 = i1;
    i23 = i13;
    HEAP32[i28 >> 2] = HEAP32[i23 >> 2];
    HEAP32[i28 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
    HEAP32[i28 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
    HEAP32[i28 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
    STACKTOP = i7;
    return;
   }
   __ZN7WebCore16RenderFlowThread20fragmentsBoundingBoxERKNS_10LayoutRectE(i14, HEAP32[i20 + 32 >> 2] | 0, i13);
   i23 = i13;
   i28 = i14;
   HEAP32[i23 >> 2] = HEAP32[i28 >> 2];
   HEAP32[i23 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
   HEAP32[i23 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
   HEAP32[i23 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
   i28 = i15 | 0;
   HEAP32[i28 >> 2] = 0;
   i22 = i15 + 4 | 0;
   HEAP32[i22 >> 2] = 0;
   if ((i20 | 0) == (i3 | 0)) {
    i37 = 0;
    i38 = 0;
   } else {
    i32 = i20;
    while (1) {
     i32 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i32, i3, i15, 0) | 0;
     if ((i32 | 0) == 0 | (i32 | 0) == (i3 | 0)) {
      break;
     }
    }
    i37 = HEAP32[i28 >> 2] | 0;
    i38 = HEAP32[i22 >> 2] | 0;
   }
   i32 = i13 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + i37;
   i32 = i13 + 4 | 0;
   HEAP32[i32 >> 2] = (HEAP32[i32 >> 2] | 0) + i38;
   i32 = i1;
   HEAP32[i32 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i32 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
   HEAP32[i32 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
   HEAP32[i32 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
   STACKTOP = i7;
   return;
  }
 } while (0);
 __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i16, i2, i3, 64, 0);
 __ZN7WebCoreL41expandClipRectForDescendantsAndReflectionERNS_10LayoutRectEPKNS_11RenderLayerES4_NS_27TransparencyClipBoxBehaviorEj(i16, i2, i3, i4, i6);
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] | 0) == 0) {
   _memset(i17 | 0, 0, 16) | 0;
   i39 = i17 + 12 | 0;
   i40 = i17 + 4 | 0;
   i31 = 34;
  } else {
   __ZNK7WebCore16FilterOperations7outsetsEv(i17, i6 + 4 | 0);
   i2 = i17 + 12 | 0;
   i4 = HEAP32[i2 >> 2] | 0;
   i3 = i17 + 4 | 0;
   if ((i4 | 0) == 0) {
    i39 = i2;
    i40 = i3;
    i31 = 34;
    break;
   }
   i41 = HEAP32[i3 >> 2] | 0;
   i42 = i2;
   i43 = i4;
   i31 = 37;
  }
 } while (0);
 do {
  if ((i31 | 0) == 34) {
   i6 = HEAP32[i40 >> 2] | 0;
   if ((i6 | 0) != 0) {
    i41 = i6;
    i42 = i39;
    i43 = 0;
    i31 = 37;
    break;
   }
   if ((HEAP32[i17 >> 2] | 0) != 0) {
    i41 = 0;
    i42 = i39;
    i43 = 0;
    i31 = 37;
    break;
   }
   if ((HEAP32[i17 + 8 >> 2] | 0) != 0) {
    i41 = 0;
    i42 = i39;
    i43 = 0;
    i31 = 37;
   }
  }
 } while (0);
 if ((i31 | 0) == 37) {
  i31 = HEAP32[i17 >> 2] | 0;
  i39 = i16 | 0;
  HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) - i43;
  i43 = i16 + 4 | 0;
  HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) - i31;
  i43 = (HEAP32[i17 + 8 >> 2] | 0) + i31 | 0;
  i31 = i16 + 8 | 0;
  HEAP32[i31 >> 2] = i41 + (HEAP32[i42 >> 2] | 0) + (HEAP32[i31 >> 2] | 0);
  i31 = i16 + 12 | 0;
  HEAP32[i31 >> 2] = i43 + (HEAP32[i31 >> 2] | 0);
 }
 i31 = i1;
 i1 = i16;
 HEAP32[i31 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i31 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i31 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i31 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i7;
 return;
}
function __ZNK7WebCore11RenderLayer4nameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 56 | 0;
 i10 = i8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i8 + 4 | 0;
 HEAP32[i11 >> 2] = 0;
 i12 = i8 + 8 | 0;
 HEAP32[i12 >> 2] = 0;
 i13 = i8 + 12 | 0;
 HEAP8[i13] = 1;
 HEAP32[i8 + 16 >> 2] = 0;
 i14 = i8 + 20 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i2 + 32 | 0;
 i2 = HEAP32[i15 >> 2] | 0;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 28 >> 2] & 63](i2 | 0) | 0;
 if ((i16 | 0) != 0) {
  __ZN3WTF13StringBuilder6appendEPKhj(i8, i16, _strlen(i16 | 0) | 0);
 }
 i16 = HEAP32[i15 >> 2] | 0;
 L4 : do {
  if ((HEAP32[i16 + 20 >> 2] & 128 | 0) == 0) {
   i2 = HEAP32[i16 + 4 >> 2] | 0;
   i17 = i2;
   if ((i2 | 0) == 0) {
    break;
   }
   HEAP8[i7] = 32;
   i18 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i18 | 0) == 0) {
     i19 = 11;
    } else {
     i20 = HEAP32[i10 >> 2] | 0;
     if (i20 >>> 0 >= (HEAP32[i18 + 4 >> 2] | 0) >>> 0) {
      i19 = 11;
      break;
     }
     if ((HEAP32[i11 >> 2] | 0) != 0) {
      i19 = 11;
      break;
     }
     i21 = (HEAP8[i13] & 1) == 0;
     HEAP32[i10 >> 2] = i20 + 1;
     if (i21) {
      HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i20 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i14 >> 2] | 0) + i20 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i19 | 0) == 11) {
    __ZN3WTF13StringBuilder6appendEPKhj(i8, i7, 1);
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 64 >> 2] & 31](i9, i17);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i9);
   i18 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i20 = i18 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 2 | 0;
     if ((i21 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i18);
      break;
     } else {
      HEAP32[i20 >> 2] = i21;
      break;
     }
    }
   } while (0);
   i18 = i2 + 48 | 0;
   i17 = HEAP32[i18 >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   L24 : do {
    if ((HEAP32[i17 + 16 >> 2] | 0) != 0) {
     __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 128 | 0, 5);
     i21 = HEAP32[i18 >> 2] | 0;
     L26 : do {
      if ((i21 | 0) == 0) {
       i22 = __ZN3WTF8nullAtomE;
      } else {
       if ((HEAP32[i21 + 16 >> 2] | 0) == 0) {
        i22 = __ZN3WTF8nullAtomE;
        break;
       }
       i20 = HEAP32[i21 + 4 >> 2] | 0;
       if ((i20 & 1 | 0) == 0) {
        i23 = i20 >>> 1 & 134217727;
        i24 = i21 + 20 | 0;
       } else {
        i20 = i21 + 24 | 0;
        i23 = HEAP32[i20 + 8 >> 2] | 0;
        i24 = HEAP32[i20 >> 2] | 0;
       }
       if ((i23 | 0) == 0) {
        i22 = __ZN3WTF8nullAtomE;
        break;
       }
       i20 = HEAP32[(HEAP32[(HEAP32[i2 + 20 >> 2] | 0) + 8 >> 2] | 0) + 1680 >> 2] | 0;
       i25 = i20 + 12 | 0;
       i26 = i20 + 16 | 0;
       i27 = 0;
       while (1) {
        i28 = i24 + (i27 << 3) | 0;
        i29 = HEAP32[i28 >> 2] | 0;
        if ((i29 | 0) == (i20 | 0)) {
         break;
        }
        if ((HEAP32[i29 + 12 >> 2] | 0) == (HEAP32[i25 >> 2] | 0)) {
         if ((HEAP32[i29 + 16 >> 2] | 0) == (HEAP32[i26 >> 2] | 0)) {
          break;
         }
        }
        i29 = i27 + 1 | 0;
        if (i29 >>> 0 < i23 >>> 0) {
         i27 = i29;
        } else {
         i22 = __ZN3WTF8nullAtomE;
         break L26;
        }
       }
       i22 = (i28 | 0) == 0 ? __ZN3WTF8nullAtomE : i24 + (i27 << 3) + 4 | 0;
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i22 | 0);
     HEAP8[i5] = 39;
     i21 = HEAP32[i12 >> 2] | 0;
     do {
      if ((i21 | 0) != 0) {
       i26 = HEAP32[i10 >> 2] | 0;
       if (i26 >>> 0 >= (HEAP32[i21 + 4 >> 2] | 0) >>> 0) {
        break;
       }
       if ((HEAP32[i11 >> 2] | 0) != 0) {
        break;
       }
       i25 = (HEAP8[i13] & 1) == 0;
       HEAP32[i10 >> 2] = i26 + 1;
       if (i25) {
        HEAP16[(HEAP32[i8 + 20 >> 2] | 0) + (i26 << 1) >> 1] = 39;
        break L24;
       } else {
        HEAP8[(HEAP32[i14 >> 2] | 0) + i26 | 0] = 39;
        break L24;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i8, i5, 1);
    }
   } while (0);
   i2 = HEAP32[i18 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   if ((HEAP32[i2 + 12 >> 2] | 0) == 0) {
    break;
   }
   __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 112 | 0, 8);
   i2 = i8 + 20 | 0;
   i17 = 0;
   while (1) {
    i21 = HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i30 = 0;
    } else {
     i30 = HEAP32[i21 + 8 >> 2] | 0;
    }
    if (i17 >>> 0 >= i30 >>> 0) {
     break;
    }
    L59 : do {
     if ((i17 | 0) != 0) {
      HEAP8[i4] = 32;
      i21 = HEAP32[i12 >> 2] | 0;
      do {
       if ((i21 | 0) != 0) {
        i26 = HEAP32[i10 >> 2] | 0;
        if (i26 >>> 0 >= (HEAP32[i21 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i11 >> 2] | 0) != 0) {
         break;
        }
        i25 = (HEAP8[i13] & 1) == 0;
        HEAP32[i10 >> 2] = i26 + 1;
        if (i25) {
         HEAP16[(HEAP32[i2 >> 2] | 0) + (i26 << 1) >> 1] = 32;
         break L59;
        } else {
         HEAP8[(HEAP32[i14 >> 2] | 0) + i26 | 0] = 32;
         break L59;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i8, i4, 1);
     }
    } while (0);
    i21 = HEAP32[(HEAP32[i18 >> 2] | 0) + 12 >> 2] | 0;
    if ((HEAP32[i21 + 8 >> 2] | 0) >>> 0 <= i17 >>> 0) {
     i19 = 52;
     break;
    }
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i8, i21 + 12 + (i17 << 2) | 0);
    i17 = i17 + 1 | 0;
   }
   if ((i19 | 0) == 52) {
    _WTFCrash();
   }
   HEAP8[i6] = 39;
   i17 = HEAP32[i12 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i18 = HEAP32[i10 >> 2] | 0;
     if (i18 >>> 0 >= (HEAP32[i17 + 4 >> 2] | 0) >>> 0) {
      break;
     }
     if ((HEAP32[i11 >> 2] | 0) != 0) {
      break;
     }
     i21 = (HEAP8[i13] & 1) == 0;
     HEAP32[i10 >> 2] = i18 + 1;
     if (i21) {
      HEAP16[(HEAP32[i2 >> 2] | 0) + (i18 << 1) >> 1] = 39;
      break L4;
     } else {
      HEAP8[(HEAP32[i14 >> 2] | 0) + i18 | 0] = 39;
      break L4;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i8, i6, 1);
  }
 } while (0);
 i6 = HEAP32[i15 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 156 >> 2] & 63](i6 | 0) | 0) {
  __ZN3WTF13StringBuilder6appendEPKhj(i8, H_BASE + 96 | 0, 13);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i8);
 i6 = HEAP32[i11 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i8);
  i8 = HEAP32[i11 >> 2] | 0;
  HEAP32[i1 >> 2] = i8;
  if ((i8 | 0) != 0) {
   i31 = i8;
   i19 = 66;
  }
 } else {
  HEAP32[i1 >> 2] = i6;
  i31 = i6;
  i19 = 66;
 }
 if ((i19 | 0) == 66) {
  i19 = i31 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
 }
 i19 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i19 | 0) != 0) {
   i12 = i19 | 0;
   i31 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
   if ((i31 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i19);
    break;
   } else {
    HEAP32[i12 >> 2] = i31;
    break;
   }
  }
 } while (0);
 i19 = HEAP32[i11 >> 2] | 0;
 if ((i19 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i11 = i19 | 0;
 i31 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
 if ((i31 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i19);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i11 >> 2] = i31;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i4 = i3 | 0;
 i5 = i3 + 24 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i3 + 64 | 0;
 i9 = i1 + 22 | 0;
 i10 = HEAP8[i9] | 0;
 i11 = HEAP8[i1 + 20 | 0] | 0;
 if ((i10 & 16) != 0 | i11 << 24 >> 24 < 0) {
  i12 = 3;
 } else {
  if ((HEAP8[i1 + 21 | 0] & 2) != 0) {
   i12 = 3;
  }
 }
 do {
  if ((i12 | 0) == 3) {
   i13 = i10 & -33;
   HEAP8[i9] = i13;
   i14 = i1 + 20 | 0;
   i15 = i11 & -65;
   HEAP8[i14] = i15;
   i16 = i1 + 21 | 0;
   i17 = HEAP8[i16] & -2;
   HEAP8[i16] = i17;
   i18 = i4;
   _memset(i18 | 0, 0, 20) | 0;
   i19 = HEAP32[i1 + 48 >> 2] | 0;
   L5 : do {
    if ((i19 | 0) == 0) {
     i20 = i13;
     i21 = i15;
     i22 = i17;
    } else {
     i23 = i4 | 0;
     i24 = i4 | 0;
     i25 = (i2 | 0) == 0;
     i26 = i4 + 12 | 0;
     i27 = i4 + 4 | 0;
     i28 = i2 | 0;
     i29 = i19;
     i30 = 0;
     while (1) {
      if ((i30 | 0) != 0) {
       __ZN3WTF8fastFreeEPv(i30);
       _memset(i18 | 0, 0, 16) | 0;
      }
      __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i29, i4);
      i31 = HEAP32[i29 + 32 >> 2] | 0;
      if ((HEAP32[i31 + 20 >> 2] & 25165824 | 0) == 16777216) {
       HEAP32[i5 >> 2] = __ZNK7WebCore12RenderObject15containingBlockEv(i31 | 0) | 0;
       __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i6, i24, i5, i5);
      }
      L15 : do {
       if (!i25) {
        i31 = HEAP32[i23 >> 2] | 0;
        i32 = HEAP32[i27 >> 2] | 0;
        i33 = i31 + (i32 << 2) | 0;
        if ((HEAP32[i26 >> 2] | 0) == 0) {
         break;
        }
        L18 : do {
         if ((i32 | 0) == 0) {
          i34 = i31;
         } else {
          i35 = i31;
          while (1) {
           i36 = HEAP32[i35 >> 2] | 0;
           if (!((i36 | 0) == (-1 | 0) | (i36 | 0) == 0)) {
            i34 = i35;
            break L18;
           }
           i35 = i35 + 4 | 0;
           if ((i35 | 0) == (i33 | 0)) {
            break L15;
           }
          }
         }
        } while (0);
        if ((i34 | 0) == (i33 | 0)) {
         break;
        } else {
         i37 = i34;
        }
        while (1) {
         __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i7, i28, i37, i37);
         i31 = i37 + 4 | 0;
         L25 : do {
          if ((i31 | 0) == (i33 | 0)) {
           i38 = i33;
          } else {
           i32 = i31;
           while (1) {
            i35 = HEAP32[i32 >> 2] | 0;
            if (!((i35 | 0) == (-1 | 0) | (i35 | 0) == 0)) {
             i38 = i32;
             break L25;
            }
            i35 = i32 + 4 | 0;
            if ((i35 | 0) == (i33 | 0)) {
             i38 = i33;
             break;
            } else {
             i32 = i35;
            }
           }
          }
         } while (0);
         if ((i38 | 0) == ((HEAP32[i23 >> 2] | 0) + (HEAP32[i27 >> 2] << 2) | 0)) {
          break;
         } else {
          i37 = i38;
         }
        }
       }
      } while (0);
      i33 = HEAP8[i29 + 22 | 0] | 0;
      if ((i33 & 8) == 0) {
       i39 = (i33 & 255) >>> 5 & 1;
      } else {
       i39 = 1;
      }
      i33 = HEAP8[i29 + 20 | 0] | 0;
      i31 = (HEAP32[i26 >> 2] | 0) != 0;
      i32 = HEAP8[i9] | 0;
      i35 = ((i32 & 255) >>> 5 & 1 | i39 | 0) != 0;
      i36 = (i35 & 1) << 5 | i32 & -33;
      HEAP8[i9] = i36;
      i32 = HEAP8[i14] | ((i33 & 32) == 0 ? i33 & 64 : 64);
      HEAP8[i14] = i32;
      i33 = i31 & 1;
      i31 = HEAP8[i16] | 0;
      i40 = i31 | i33;
      HEAP8[i16] = i40;
      do {
       if (i35) {
        if ((i32 & 64) == 0) {
         break;
        }
        if ((i31 & 1 | i33) << 24 >> 24 != 0) {
         i20 = i36;
         i21 = i32;
         i22 = i40;
         break L5;
        }
       }
      } while (0);
      i33 = HEAP32[i29 + 44 >> 2] | 0;
      if ((i33 | 0) == 0) {
       i20 = i36;
       i21 = i32;
       i22 = i40;
       break L5;
      }
      i29 = i33;
      i30 = HEAP32[i23 >> 2] | 0;
     }
    }
   } while (0);
   if ((i2 | 0) == 0) {
    i41 = i20;
    i42 = i21;
    i43 = i22;
   } else {
    HEAP32[i8 >> 2] = HEAP32[i1 + 32 >> 2];
    __ZN3WTF7HashSetIPKN7WebCore12RenderObjectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i2, i8) | 0;
    i41 = HEAP8[i9] | 0;
    i42 = HEAP8[i14] | 0;
    i43 = HEAP8[i16] | 0;
   }
   HEAP8[i9] = i41 & -17;
   HEAP8[i14] = i42 & 127;
   if ((i43 & 2) == 0) {
    i44 = i43;
   } else {
    __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i1);
    i44 = HEAP8[i16] | 0;
   }
   HEAP8[i16] = i44 & -3;
   i18 = HEAP32[i4 >> 2] | 0;
   if ((i18 | 0) == 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i18);
  }
 } while (0);
 i4 = HEAP8[i9] | 0;
 if ((i4 & 4) == 0) {
  STACKTOP = i3;
  return;
 }
 i44 = i1 + 32 | 0;
 i1 = HEAP32[i44 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) {
   i43 = i4 | 8;
   HEAP8[i9] = i43;
   i45 = i43;
  } else {
   i43 = i4 & -9;
   HEAP8[i9] = i43;
   i42 = HEAP32[i1 + 28 >> 2] | 0;
   if ((i42 | 0) == 0) {
    i45 = i43;
    break;
   } else {
    i46 = i42;
   }
   L54 : while (1) {
    i42 = HEAP32[i46 + 20 >> 2] | 0;
    if ((i42 & 768 | 0) == 256) {
     i47 = HEAP32[(HEAP32[i46 + 8 >> 2] | 0) + 36 >> 2] | 0;
    } else {
     i47 = HEAP32[i46 + 36 >> 2] | 0;
    }
    i43 = (i42 & 32768 | 0) == 0;
    do {
     if ((HEAP32[i47 + 40 >> 2] & 6144 | 0) == 0) {
      if (i43) {
       i12 = 41;
       break L54;
      }
     } else {
      if (!i43) {
       break;
      }
      i42 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i46 >> 2] | 0) + 32 >> 2] & 63](i46) | 0;
      if ((i42 | 0) != 0) {
       i46 = i42;
       continue L54;
      }
     }
    } while (0);
    i43 = HEAP32[i46 + 16 >> 2] | 0;
    if ((i43 | 0) != 0) {
     i46 = i43;
     continue;
    }
    i43 = HEAP32[i44 >> 2] | 0;
    i42 = i46;
    while (1) {
     i41 = HEAP32[i42 + 8 >> 2] | 0;
     i8 = (i41 | 0) == (i43 | 0) ? 0 : i41;
     if ((i8 | 0) == 0) {
      i12 = 48;
      break L54;
     }
     i41 = HEAP32[i8 + 16 >> 2] | 0;
     if ((i41 | 0) == 0) {
      i42 = i8;
     } else {
      i46 = i41;
      continue L54;
     }
    }
   }
   if ((i12 | 0) == 41) {
    i16 = HEAP8[i9] | 8;
    HEAP8[i9] = i16;
    i45 = i16;
    break;
   } else if ((i12 | 0) == 48) {
    i45 = HEAP8[i9] | 0;
    break;
   }
  }
 } while (0);
 HEAP8[i9] = i45 & -5;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayerD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = i1 + 32 | 0;
 do {
  if ((HEAP8[i1 + 20 | 0] & 1) != 0) {
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i3 + 2285 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore12EventHandler20resizeLayerDestroyedEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
  }
 } while (0);
 i3 = i1 | 0;
 __ZN7WebCore9FrameView20removeScrollableAreaEPNS_14ScrollableAreaE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i3) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   if ((HEAP32[i4 + 20 >> 2] & 128 | 0) != 0 | (i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE(i5, i1 + 112 | 0);
  }
 } while (0);
 i5 = i1 + 128 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 152 >> 2] & 63](i4) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i3, HEAP32[i5 >> 2] | 0, 0);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i5 >> 2] | 0);
   HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] = 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i4 = i1 + 132 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 152 >> 2] & 63](i8) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i3, HEAP32[i4 >> 2] | 0, 1);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i4 >> 2] | 0);
   HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] = 0;
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = __ZN7WebCore4Page20scrollingCoordinatorEv(i8) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 80 >> 2] & 31](i9, i3);
  }
 } while (0);
 i8 = i1 + 176 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i9 | 0, i1);
   i10 = HEAP32[i8 >> 2] | 0;
  } else {
   i10 = i9;
  }
  __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i10 | 0, 0);
  i10 = HEAP32[i8 >> 2] | 0;
  if ((i10 | 0) != 0) {
   __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
  }
  HEAP32[i8 >> 2] = 0;
 }
 __ZN7WebCore11RenderLayer10FilterInfo6removeERS0_(i1);
 i10 = i1 + 208 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i10 >> 2] = 0;
  } else {
   i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i6 + 2285 | 0] & 1) == 0) {
    __ZN7WebCore21RenderLayerCompositor24layerBecameNonCompositedERKNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[i6 + 1584 >> 2] | 0) | 0, i1);
    i6 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    if ((i6 | 0) == 0) {
     break;
    } else {
     i11 = i6;
    }
   } else {
    HEAP32[i10 >> 2] = 0;
    i11 = i9;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   i6 = HEAP32[i10 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i10 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i1 + 172 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore14ClipRectsCacheD2Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i8 = i10 + 8 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i10 | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
  }
  i11 = i10 | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i1 = i10 + 8 | 0;
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   HEAP32[i1 >> 2] = 0;
  }
  i1 = i10 | 0;
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i4 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 i5 = i10 + 4 | 0;
 i10 = i5 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i10 >> 2] = i1;
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 __ZN7WebCore14ScrollableAreaD2Ev(i3);
 return;
}
function __ZN7WebCore11RenderLayerD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 HEAP32[i1 >> 2] = H_BASE + 144;
 i2 = i1 + 32 | 0;
 do {
  if ((HEAP8[i1 + 20 | 0] & 1) != 0) {
   i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i3 + 2285 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore12EventHandler20resizeLayerDestroyedEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
  }
 } while (0);
 i3 = i1 | 0;
 __ZN7WebCore9FrameView20removeScrollableAreaEPNS_14ScrollableAreaE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i3) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i4 + 4 >> 2] | 0;
 do {
  if ((HEAP8[(HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   if ((HEAP32[i4 + 20 >> 2] & 128 | 0) != 0 | (i5 | 0) == 0) {
    break;
   }
   __ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE(i5, i1 + 112 | 0);
  }
 } while (0);
 i5 = i1 + 128 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 152 >> 2] & 63](i4) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i3, HEAP32[i5 >> 2] | 0, 0);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i5 >> 2] | 0);
   HEAP32[(HEAP32[i5 >> 2] | 0) + 40 >> 2] = 0;
   i6 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i6 | 0) == 0) {
    break;
   }
   i7 = i6 + 4 | 0;
   i6 = i7 | 0;
   i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i6 >> 2] = i8;
    break;
   }
   i8 = i7 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  }
 } while (0);
 i4 = i1 + 132 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 152 >> 2] & 63](i8) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i3, HEAP32[i4 >> 2] | 0, 1);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i4 >> 2] | 0);
   HEAP32[(HEAP32[i4 >> 2] | 0) + 40 >> 2] = 0;
   i7 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i7 | 0) == 0) {
    break;
   }
   i6 = i7 + 4 | 0;
   i7 = i6 | 0;
   i9 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
   if ((i9 | 0) != 0) {
    HEAP32[i7 >> 2] = i9;
    break;
   }
   i9 = i6 - 4 | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 15](i9);
  }
 } while (0);
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = __ZN7WebCore4Page20scrollingCoordinatorEv(i8) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i9 >> 2] | 0) + 80 >> 2] & 31](i9, i3);
  }
 } while (0);
 i8 = i1 + 176 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) != 0) {
  if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i9 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
   __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i9 | 0, i1);
   i10 = HEAP32[i8 >> 2] | 0;
  } else {
   i10 = i9;
  }
  __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i10 | 0, 0);
  i10 = HEAP32[i8 >> 2] | 0;
  if ((i10 | 0) != 0) {
   __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
  }
  HEAP32[i8 >> 2] = 0;
 }
 __ZN7WebCore11RenderLayer10FilterInfo6removeERS0_(i1);
 i10 = i1 + 208 | 0;
 i9 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   HEAP32[i10 >> 2] = 0;
  } else {
   i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i6 + 2285 | 0] & 1) == 0) {
    __ZN7WebCore21RenderLayerCompositor24layerBecameNonCompositedERKNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[i6 + 1584 >> 2] | 0) | 0, i1);
    i6 = HEAP32[i10 >> 2] | 0;
    HEAP32[i10 >> 2] = 0;
    if ((i6 | 0) == 0) {
     break;
    } else {
     i11 = i6;
    }
   } else {
    HEAP32[i10 >> 2] = 0;
    i11 = i9;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   i6 = HEAP32[i10 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i10 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore12RenderObject7destroyEv(i10 | 0);
 }
 i10 = HEAP32[i1 + 172 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i10 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
 }
 i10 = HEAP32[i1 + 148 >> 2] | 0;
 if ((i10 | 0) != 0) {
  __ZN7WebCore14ClipRectsCacheD2Ev(i10);
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 144 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i8 = i10 + 8 | 0;
  if ((HEAP32[i8 >> 2] | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
  }
  i8 = i10 | 0;
  i11 = HEAP32[i8 >> 2] | 0;
  if ((i11 | 0) != 0) {
   HEAP32[i8 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i11);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 140 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i11 = i10 + 8 | 0;
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
  }
  i11 = i10 | 0;
  i8 = HEAP32[i11 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i11 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i1 + 136 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i1 = i10 + 8 | 0;
  if ((HEAP32[i1 >> 2] | 0) != 0) {
   HEAP32[i1 >> 2] = 0;
  }
  i1 = i10 | 0;
  i8 = HEAP32[i1 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i1 >> 2] = 0;
   HEAP32[i10 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i10);
 }
 i10 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i10 | 0) != 0) {
   i4 = i10 + 4 | 0;
   i8 = i4 | 0;
   i1 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i8 >> 2] = i1;
    break;
   }
   i1 = i4 - 4 | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
  }
 } while (0);
 i10 = HEAP32[i5 >> 2] | 0;
 if ((i10 | 0) == 0) {
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 i5 = i10 + 4 | 0;
 i10 = i5 | 0;
 i1 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i10 >> 2] = i1;
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 i1 = i5 - 4 | 0;
 if ((i1 | 0) == 0) {
  __ZN7WebCore14ScrollableAreaD2Ev(i3);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 __ZN7WebCore14ScrollableAreaD2Ev(i3);
 return;
}
function __ZN7WebCore11RenderLayer19updateLayerPositionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i3 | 0;
 i5 = i3;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = i1 + 32 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 20 >> 2] | 0;
 do {
  if ((i14 & 1024 | 0) == 0) {
   i15 = 4;
  } else {
   if ((HEAP32[i13 + 24 >> 2] & 4 | 0) == 0) {
    i15 = 4;
    break;
   }
   __ZNK7WebCore12RenderInline16linesBoundingBoxEv(i5, i13);
   i16 = i3 + 8 | 0;
   i17 = HEAP32[i16 + 4 >> 2] | 0;
   i18 = i1 + 104 | 0;
   HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i18 + 4 >> 2] = i17;
   i17 = HEAP32[i4 >> 2] | 0;
   i18 = HEAP32[i4 + 4 >> 2] | 0;
   i19 = i17;
   i20 = i18;
   i21 = i17;
   i22 = i18;
  }
 } while (0);
 do {
  if ((i15 | 0) == 4) {
   if ((i14 & 512 | 0) == 0 | (i13 | 0) == 0) {
    i19 = 0;
    i20 = 0;
    i21 = 0;
    i22 = 0;
    break;
   }
   i4 = i13 + 52 | 0;
   i3 = HEAP32[i4 + 4 >> 2] | 0;
   i5 = i1 + 104 | 0;
   HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
   HEAP32[i5 + 4 >> 2] = i3;
   __ZNK7WebCore9RenderBox21topLeftLocationOffsetEv(i6, i13);
   i19 = 0;
   i20 = 0;
   i21 = HEAP32[i6 >> 2] | 0;
   i22 = HEAP32[i6 + 4 >> 2] | 0;
  }
 } while (0);
 i6 = HEAP32[i12 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 20 >> 2] & 25165824 | 0) == 16777216) {
   i23 = i21;
   i24 = i22;
  } else {
   i13 = HEAP32[i6 + 8 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i23 = i21;
    i24 = i22;
    break;
   }
   i14 = i7 | 0;
   i3 = i7 + 4 | 0;
   i5 = i22;
   i4 = i21;
   i18 = i13;
   i17 = i13;
   while (1) {
    i13 = HEAP32[i17 + 20 >> 2] | 0;
    i25 = i18 | 0;
    i26 = (i13 & 512 | 0) != 0;
    if ((i13 & 32768 | 0) != 0) {
     break;
    }
    do {
     if (i26) {
      if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 200 >> 2] & 63](i25) | 0) {
       i27 = i4;
       i28 = i5;
       break;
      }
      __ZNK7WebCore9RenderBox21topLeftLocationOffsetEv(i7, i18);
      i27 = (HEAP32[i14 >> 2] | 0) + i4 | 0;
      i28 = (HEAP32[i3 >> 2] | 0) + i5 | 0;
     } else {
      i27 = i4;
      i28 = i5;
     }
    } while (0);
    i13 = HEAP32[i18 + 8 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i15 = 9;
     break;
    } else {
     i5 = i28;
     i4 = i27;
     i18 = i13;
     i17 = i13;
    }
   }
   if ((i15 | 0) == 9) {
    i23 = i27;
    i24 = i28;
    break;
   }
   if (!i26) {
    i23 = i4;
    i24 = i5;
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 200 >> 2] & 63](i25) | 0)) {
    i23 = i4;
    i24 = i5;
    break;
   }
   __ZNK7WebCore9RenderBox21topLeftLocationOffsetEv(i8, i18);
   i23 = i4 - (HEAP32[i8 >> 2] | 0) | 0;
   i24 = i5 - (HEAP32[i8 + 4 >> 2] | 0) | 0;
  }
 } while (0);
 i8 = HEAP32[i12 >> 2] | 0;
 i25 = HEAP32[i8 + 20 >> 2] | 0;
 L24 : do {
  if ((i25 & 25165824 | 0) == 16777216) {
   i26 = i1;
   while (1) {
    i28 = HEAP32[i26 + 36 >> 2] | 0;
    if ((i28 | 0) == 0) {
     i15 = 30;
     break L24;
    }
    if ((HEAP8[i28 + 21 | 0] & 16) != 0) {
     i29 = i1;
     break;
    }
    if ((HEAP32[(HEAP32[i28 + 32 >> 2] | 0) + 20 >> 2] & 25296896 | 0) == 0) {
     i26 = i28;
    } else {
     i29 = i1;
     break;
    }
   }
   while (1) {
    i26 = HEAP32[i29 + 36 >> 2] | 0;
    if ((i26 | 0) == 0) {
     i30 = 0;
     break;
    }
    if ((HEAP8[i26 + 21 | 0] & 16) != 0) {
     i30 = i26;
     break;
    }
    if ((HEAP32[(HEAP32[i26 + 32 >> 2] | 0) + 20 >> 2] & 25296896 | 0) == 0) {
     i29 = i26;
    } else {
     i30 = i26;
     break;
    }
   }
   i26 = HEAP32[i30 + 32 >> 2] | 0;
   i5 = HEAP32[i26 + 20 >> 2] | 0;
   if ((i5 & 65536 | 0) == 0) {
    i31 = i23;
    i32 = i24;
   } else {
    i4 = i30 + 112 | 0;
    i31 = i23 - (HEAP32[i4 >> 2] | 0) | 0;
    i32 = i24 - (HEAP32[i4 + 4 >> 2] | 0) | 0;
   }
   i4 = i5 & 25165824;
   if (!((i4 | 0) == 25165824 | (i4 | 0) == 8388608)) {
    i33 = i31;
    i34 = i32;
    i35 = i8;
    i36 = i25;
    break;
   }
   if ((HEAP32[i26 + 24 >> 2] & 4 | 0) == 0) {
    i33 = i31;
    i34 = i32;
    i35 = i8;
    i36 = i25;
    break;
   }
   __ZNK7WebCore12RenderInline31offsetForInFlowPositionedInlineEPKNS_9RenderBoxE(i9, i26, i8);
   i26 = HEAP32[i12 >> 2] | 0;
   i33 = (HEAP32[i9 >> 2] | 0) + i31 | 0;
   i34 = (HEAP32[i9 + 4 >> 2] | 0) + i32 | 0;
   i35 = i26;
   i36 = HEAP32[i26 + 20 >> 2] | 0;
  } else {
   i15 = 30;
  }
 } while (0);
 do {
  if ((i15 | 0) == 30) {
   i32 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i32 | 0) == 0) {
    i33 = i23;
    i34 = i24;
    i35 = i8;
    i36 = i25;
    break;
   }
   if ((HEAP32[(HEAP32[i32 + 32 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
    i33 = i23;
    i34 = i24;
    i35 = i8;
    i36 = i25;
    break;
   }
   i9 = i32 + 112 | 0;
   i33 = i23 - (HEAP32[i9 >> 2] | 0) | 0;
   i34 = i24 - (HEAP32[i9 + 4 >> 2] | 0) | 0;
   i35 = i8;
   i36 = i25;
  }
 } while (0);
 i25 = i36 & 25165824;
 if ((i25 | 0) == 25165824 | (i25 | 0) == 8388608) {
  __ZNK7WebCore20RenderBoxModelObject23offsetForInFlowPositionEv(i11, i35);
  i35 = i1 + 88 | 0;
  if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i35 >> 2] | 0)) {
   i37 = (HEAP32[i11 + 4 >> 2] | 0) != (HEAP32[i1 + 92 >> 2] | 0) | 0;
  } else {
   i37 = 1;
  }
  i11 = i35;
  i35 = HEAP32[i10 >> 2] | 0;
  i25 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = i35;
  HEAP32[i11 + 4 >> 2] = i25;
  i38 = i37;
  i39 = i35 + i33 | 0;
  i40 = i25 + i34 | 0;
 } else {
  i25 = i1 + 88 | 0;
  HEAP32[i25 >> 2] = 0;
  HEAP32[i25 + 4 >> 2] = 0;
  i38 = 0;
  i39 = i33;
  i40 = i34;
 }
 i34 = i39 - i19 | 0;
 i19 = i40 - i20 | 0;
 i20 = i1 + 96 | 0;
 if ((HEAP32[i20 >> 2] | 0) != (i34 | 0)) {
  i41 = 1;
  i42 = i41 | i38;
  i43 = (i42 | 0) != 0;
  i44 = i20;
  i45 = i19;
  i46 = 0;
  i47 = 0;
  i48 = i45;
  i49 = i34;
  i50 = 0;
  i51 = i47 | i49;
  i52 = i48 | i50;
  i53 = i44 | 0;
  HEAP32[i53 >> 2] = i51;
  i54 = i44 + 4 | 0;
  HEAP32[i54 >> 2] = i52;
  STACKTOP = i2;
  return i43 | 0;
 }
 i41 = (HEAP32[i1 + 100 >> 2] | 0) != (i19 | 0) | 0;
 i42 = i41 | i38;
 i43 = (i42 | 0) != 0;
 i44 = i20;
 i45 = i19;
 i46 = 0;
 i47 = 0;
 i48 = i45;
 i49 = i34;
 i50 = 0;
 i51 = i47 | i49;
 i52 = i48 | i50;
 i53 = i44 | 0;
 HEAP32[i53 >> 2] = i51;
 i54 = i44 + 4 | 0;
 HEAP32[i54 >> 2] = i52;
 STACKTOP = i2;
 return i43 | 0;
}
function __ZN7WebCore11RenderLayer26hitTestPaginatedChildLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i11 = i10 | 0;
 i12 = i10 + 16 | 0;
 i13 = i11 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i11 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i11 + 8 | 0;
 HEAP32[i15 >> 2] = 0;
 L1 : do {
  if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
   i16 = i1;
   while (1) {
    i17 = HEAP32[i16 + 36 >> 2] | 0;
    if ((i17 | 0) == 0) {
     i18 = 0;
     break L1;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i18 = i17;
     break L1;
    }
    if ((HEAP8[i17 + 21 | 0] & 20) == 0) {
     i16 = i17;
    } else {
     i18 = i17;
     break;
    }
   }
  } else {
   i18 = HEAP32[i1 + 36 >> 2] | 0;
  }
 } while (0);
 i16 = i2 + 32 | 0;
 i17 = i12;
 i19 = i2;
 i20 = 0;
 i21 = 0;
 i22 = 0;
 i23 = 0;
 L8 : while (1) {
  i24 = HEAP32[i19 + 36 >> 2] | 0;
  HEAP32[i12 >> 2] = i24;
  if ((i24 | 0) == 0) {
   i25 = i20;
   i26 = 38;
   break;
  }
  i27 = HEAP32[i24 + 32 >> 2] | 0;
  i24 = HEAP32[i27 + 20 >> 2] | 0;
  do {
   if ((i24 & 4194304 | 0) == 0) {
    i28 = i20;
    i29 = i21;
    i30 = i22;
    i31 = i23;
   } else {
    i32 = HEAP32[i16 >> 2] | 0;
    if ((i24 & 512 | 0) == 0) {
     i33 = 0;
    } else {
     i33 = i27;
    }
    i34 = __ZNK7WebCore12RenderObject15containingBlockEv(i32 | 0) | 0;
    L16 : do {
     if ((i34 | 0) == 0) {
      i35 = i32;
      i36 = 0;
     } else {
      i37 = i32 + 4 | 0;
      i38 = i32;
      i39 = i34;
      while (1) {
       if (!((i39 | 0) != (HEAP32[(HEAP32[(HEAP32[(HEAP32[i37 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) & (i39 | 0) != (i33 | 0))) {
        i35 = i38;
        i36 = i39;
        break L16;
       }
       i40 = i39 | 0;
       i41 = __ZNK7WebCore12RenderObject15containingBlockEv(i39 | 0) | 0;
       if ((i41 | 0) == 0) {
        i35 = i40;
        i36 = 0;
        break;
       } else {
        i38 = i40;
        i39 = i41;
       }
      }
     }
    } while (0);
    if ((i36 | 0) != (i33 | 0)) {
     i28 = i20;
     i29 = i21;
     i30 = i22;
     i31 = i23;
     break;
    }
    if ((HEAP32[i35 + 20 >> 2] & 25165824 | 0) == 16777216) {
     i28 = i20;
     i29 = i21;
     i30 = i22;
     i31 = i23;
     break;
    }
    if ((i20 | 0) != (i21 | 0)) {
     HEAP32[i22 + (i20 << 2) >> 2] = HEAP32[i12 >> 2];
     i34 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
     HEAP32[i15 >> 2] = i34;
     i28 = i34;
     i29 = i21;
     i30 = i22;
     i31 = i23;
     break;
    }
    i34 = i21 + 1 | 0;
    do {
     if (i22 >>> 0 > i12 >>> 0) {
      i26 = 21;
     } else {
      if ((i22 + (i21 << 2) | 0) >>> 0 <= i12 >>> 0) {
       i26 = 21;
       break;
      }
      i32 = i17 - i22 >> 2;
      i39 = i34 + (i21 >>> 2) | 0;
      i38 = i39 >>> 0 > 16 >>> 0 ? i39 : 16;
      i39 = i38 >>> 0 > i34 >>> 0 ? i38 : i34;
      do {
       if (i21 >>> 0 < i39 >>> 0) {
        if (i39 >>> 0 > 1073741823 >>> 0) {
         i26 = 30;
         break L8;
        }
        i38 = __ZN3WTF18fastMallocGoodSizeEj(i39 << 2) | 0;
        i37 = i38 >>> 2;
        HEAP32[i14 >> 2] = i37;
        i41 = __ZN3WTF10fastMallocEj(i38) | 0;
        i38 = i41;
        HEAP32[i13 >> 2] = i38;
        i40 = i22;
        _memcpy(i41 | 0, i40 | 0, i21 << 2) | 0;
        if ((i22 | 0) == 0) {
         i42 = i37;
         i43 = i37;
         i44 = i38;
         break;
        }
        if ((i38 | 0) == (i22 | 0)) {
         HEAP32[i13 >> 2] = 0;
         HEAP32[i14 >> 2] = 0;
         i45 = 0;
         i46 = 0;
        } else {
         i45 = i37;
         i46 = i38;
        }
        __ZN3WTF8fastFreeEPv(i40);
        i42 = i45;
        i43 = i45;
        i44 = i46;
       } else {
        i42 = i21;
        i43 = i23;
        i44 = i22;
       }
      } while (0);
      i47 = i44 + (i32 << 2) | 0;
      i48 = i44;
      i49 = i42;
      i50 = i43;
     }
    } while (0);
    do {
     if ((i26 | 0) == 21) {
      i26 = 0;
      i39 = i23 + 1 + (i23 >>> 2) | 0;
      i40 = i39 >>> 0 > 16 >>> 0 ? i39 : 16;
      i39 = i40 >>> 0 > i34 >>> 0 ? i40 : i34;
      if (i23 >>> 0 >= i39 >>> 0) {
       i47 = i12;
       i48 = i22;
       i49 = i23;
       i50 = i23;
       break;
      }
      if (i39 >>> 0 > 1073741823 >>> 0) {
       i26 = 23;
       break L8;
      }
      i40 = __ZN3WTF18fastMallocGoodSizeEj(i39 << 2) | 0;
      i39 = i40 >>> 2;
      HEAP32[i14 >> 2] = i39;
      i38 = __ZN3WTF10fastMallocEj(i40) | 0;
      i40 = i38;
      HEAP32[i13 >> 2] = i40;
      i37 = i22;
      _memcpy(i38 | 0, i37 | 0, i21 << 2) | 0;
      if ((i22 | 0) == 0) {
       i47 = i12;
       i48 = i40;
       i49 = i39;
       i50 = i39;
       break;
      }
      if ((i40 | 0) == (i22 | 0)) {
       HEAP32[i13 >> 2] = 0;
       HEAP32[i14 >> 2] = 0;
       i51 = 0;
       i52 = 0;
      } else {
       i51 = i39;
       i52 = i40;
      }
      __ZN3WTF8fastFreeEPv(i37);
      i47 = i12;
      i48 = i52;
      i49 = i51;
      i50 = i51;
     }
    } while (0);
    HEAP32[i48 + (i21 << 2) >> 2] = HEAP32[i47 >> 2];
    i34 = (HEAP32[i15 >> 2] | 0) + 1 | 0;
    HEAP32[i15 >> 2] = i34;
    i28 = i34;
    i29 = i49;
    i30 = i48;
    i31 = i50;
   }
  } while (0);
  i27 = HEAP32[i12 >> 2] | 0;
  if ((i27 | 0) == (i18 | 0)) {
   i25 = i28;
   i26 = 38;
   break;
  } else {
   i19 = i27;
   i20 = i28;
   i21 = i29;
   i22 = i30;
   i23 = i31;
  }
 }
 if ((i26 | 0) == 23) {
  _WTFCrash();
  return 0;
 } else if ((i26 | 0) == 30) {
  _WTFCrash();
  return 0;
 } else if ((i26 | 0) == 38) {
  i26 = __ZN7WebCore11RenderLayer24hitTestChildLayerColumnsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKN3WTF6VectorIS1_Lj0ENSH_15CrashOnOverflowEEEj(i1, i2, i3, i4, i5, i6, i7, i8, i9, i11, i25 - 1 | 0) | 0;
  if ((HEAP32[i15 >> 2] | 0) != 0) {
   HEAP32[i15 >> 2] = 0;
  }
  i15 = HEAP32[i13 >> 2] | 0;
  if ((i15 | 0) == 0) {
   STACKTOP = i10;
   return i26 | 0;
  }
  HEAP32[i13 >> 2] = 0;
  HEAP32[i14 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i10;
  return i26 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer23paintFlowThreadIfRegionEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjNS_11LayoutPointENS_10LayoutRectEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 168 | 0;
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = i8 + 88 | 0;
 i19 = i8 + 112 | 0;
 i20 = i8 + 136 | 0;
 i21 = i8 + 144 | 0;
 i22 = i8 + 160 | 0;
 i23 = i22;
 i24 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[i24 + 24 >> 2] & 32 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i25 = HEAP32[i24 + 100 >> 2] | 0;
 if ((i25 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i25 + 28 >> 2] | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i26 = HEAP32[i25 + 28 >> 2] | 0;
 i25 = i26 | 0;
 if ((HEAP8[i26 + 160 | 0] & 1) == 0) {
  STACKTOP = i8;
  return;
 }
 i27 = i17;
 _memset(i27 | 0, 0, 17) | 0;
 i28 = i3 | 0;
 i29 = HEAP32[i28 >> 2] | 0;
 do {
  if ((i29 | 0) == (i1 | 0)) {
   i30 = 8;
  } else {
   if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
    i30 = 8;
    break;
   }
   HEAP32[i18 >> 2] = i29;
   HEAP32[i18 + 4 >> 2] = i25;
   HEAP32[i18 + 8 >> 2] = (i4 & 4 | 0) != 0 ? 5 : 0;
   HEAP32[i18 + 12 >> 2] = 0;
   HEAP32[i18 + 16 >> 2] = i7 & 1 ^ 1;
   __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i19, i1, i18);
   i31 = i19;
   HEAP32[i27 >> 2] = HEAP32[i31 >> 2];
   HEAP32[i27 + 4 >> 2] = HEAP32[i31 + 4 >> 2];
   HEAP32[i27 + 8 >> 2] = HEAP32[i31 + 8 >> 2];
   HEAP32[i27 + 12 >> 2] = HEAP32[i31 + 12 >> 2];
   HEAP8[i27 + 16 | 0] = HEAP8[i31 + 16 | 0] | 0;
  }
 } while (0);
 if ((i30 | 0) == 8) {
  i30 = i6;
  i6 = i17;
  HEAP32[i6 >> 2] = HEAP32[i30 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i30 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i30 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i30 + 12 >> 2];
  HEAP8[i17 + 16 | 0] = 0;
 }
 i30 = __ZNK7WebCore23RenderNamedFlowFragment15namedFlowThreadEv(i26) | 0;
 i6 = i24;
 i27 = i24;
 i19 = i24;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 744 >> 2] & 63](i27) | 0;
 i7 = i24;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 712 >> 2] & 31](i15, i27);
 i24 = (HEAP32[i15 >> 2] | 0) + i18 | 0;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 736 >> 2] & 63](i27) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 704 >> 2] & 31](i16, i27);
 i19 = (HEAP32[i16 >> 2] | 0) + i18 | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i9, i6);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 712 >> 2] & 31](i10, i27);
 i18 = (HEAP32[i9 >> 2] | 0) - (HEAP32[i10 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 716 >> 2] & 31](i11, i27);
 i10 = i18 - (HEAP32[i11 >> 2] | 0) | 0;
 __ZNK7WebCore9RenderBox12clientHeightEv(i12, i6);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 704 >> 2] & 31](i13, i27);
 i6 = (HEAP32[i12 >> 2] | 0) - (HEAP32[i13 >> 2] | 0) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i7 >> 2] | 0) + 708 >> 2] & 31](i14, i27);
 i27 = i6 - (HEAP32[i14 >> 2] | 0) | 0;
 i14 = HEAP32[i30 + 40 >> 2] | 0;
 if (__ZNK7WebCore12RenderRegion12isLastRegionEv(i25) | 0) {
  i32 = (HEAP32[(HEAP32[(HEAP32[i26 + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 1 | 0) != 0;
 } else {
  i32 = 0;
 }
 if ((HEAP32[i26 + 20 >> 2] & 65536 | 0) != 0 | i32) {
  i32 = i20 | 0;
  HEAP32[i32 >> 2] = 0;
  i25 = i20 + 4 | 0;
  HEAP32[i25 >> 2] = 0;
  if ((i14 | 0) == (i1 | 0) | (i1 | 0) == 0) {
   i33 = 0;
   i34 = 0;
  } else {
   i30 = i1;
   while (1) {
    i30 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i30, i14, i20, 0) | 0;
    if ((i30 | 0) == 0 | (i30 | 0) == (i14 | 0)) {
     break;
    }
   }
   i33 = HEAP32[i32 >> 2] | 0;
   i34 = HEAP32[i25 >> 2] | 0;
  }
  HEAP32[i17 + 8 >> 2] = i10;
  HEAP32[i17 + 12 >> 2] = i27;
  HEAP8[i17 + 16 | 0] = 0;
  HEAP32[i17 >> 2] = i24 + i33;
  HEAP32[i17 + 4 >> 2] = i19 + i34;
  i35 = i10;
 } else {
  i35 = HEAP32[i17 + 8 >> 2] | 0;
 }
 i10 = i17 + 8 | 0;
 do {
  if ((i35 | 0) >= 1) {
   if ((HEAP32[i17 + 12 >> 2] | 0) < 1) {
    break;
   }
   i34 = i17;
   i19 = HEAP32[i34 >> 2] | 0;
   if (!((i19 | 0) != -1073741824 | ((i19 & 0 | 0) != 0 | (HEAP32[i34 + 4 >> 2] & -1 | 0) != (-1073741824 | 0)))) {
    i34 = i17 + 8 | 0;
    if ((HEAP32[i34 >> 2] | 0) == 2147483647 & (HEAP32[i34 + 4 >> 2] | 0) == 2147483647) {
     break;
    }
   }
   __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i28 >> 2] | 0, i2, i3 + 8 | 0, i17, 0);
  }
 } while (0);
 i28 = i3 + 8 | 0;
 i1 = i21;
 i35 = i28;
 HEAP32[i1 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i35 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i35 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i35 + 12 >> 2];
 i35 = i5;
 i5 = HEAP32[i35 + 4 >> 2] | 0;
 HEAP32[i22 >> 2] = HEAP32[i35 >> 2];
 HEAP32[i22 + 4 >> 2] = i5;
 __ZN7WebCore11RenderLayer32paintNamedFlowThreadInsideRegionEPNS_15GraphicsContextEPNS_23RenderNamedFlowFragmentENS_10LayoutRectENS_11LayoutPointEjj(i14, i2, i26, i21, i23, HEAP32[i3 + 40 >> 2] | 0, i4);
 if ((HEAP32[i10 >> 2] | 0) < 1) {
  STACKTOP = i8;
  return;
 }
 if ((HEAP32[i17 + 12 >> 2] | 0) < 1) {
  STACKTOP = i8;
  return;
 }
 i10 = i17;
 i4 = HEAP32[i10 >> 2] | 0;
 i23 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i4;
 do {
  if (!((i10 | 0) != -1073741824 | ((i4 & 0 | 0) != 0 | (i23 & -1 | 0) != (-1073741824 | 0)))) {
   i21 = i17 + 8 | 0;
   if (!((HEAP32[i21 >> 2] | 0) == 2147483647 & (HEAP32[i21 + 4 >> 2] | 0) == 2147483647)) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 i4 = i28;
 do {
  if ((i10 | 0) == (HEAP32[i4 >> 2] | 0) & (i23 | 0) == (HEAP32[i4 + 4 >> 2] | 0)) {
   i28 = i17 + 8 | 0;
   i21 = i3 + 16 | 0;
   if ((HEAP32[i28 >> 2] | 0) != (HEAP32[i21 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i28 + 4 >> 2] | 0) != (HEAP32[i21 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i8;
   return;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11RenderLayer37setFilterBackendNeedsRepaintingInRectERKNS_10LayoutRectEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, d34 = +0, d35 = +0, d36 = +0, d37 = +0, d38 = +0, i39 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i4 + 48 | 0;
 i9 = i4 + 64 | 0;
 i10 = i4 + 80 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i19 = i18 | 0;
 i20 = i18;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 12 >> 2] | 0) < 1) {
  STACKTOP = i4;
  return;
 }
 i22 = i7;
 i23 = i2;
 HEAP32[i22 >> 2] = HEAP32[i23 >> 2];
 HEAP32[i22 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
 HEAP32[i22 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
 HEAP32[i22 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
 i23 = i1 + 32 | 0;
 i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i23 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
 do {
  if ((HEAP32[i22 + 12 >> 2] | 0) == 0) {
   _memset(i8 | 0, 0, 16) | 0;
   i24 = i8 + 12 | 0;
   i25 = i8 + 4 | 0;
   i26 = 7;
  } else {
   __ZNK7WebCore16FilterOperations7outsetsEv(i8, i22 + 4 | 0);
   i2 = i8 + 12 | 0;
   i27 = HEAP32[i2 >> 2] | 0;
   i28 = i8 + 4 | 0;
   if ((i27 | 0) == 0) {
    i24 = i2;
    i25 = i28;
    i26 = 7;
    break;
   }
   i29 = HEAP32[i28 >> 2] | 0;
   i30 = i2;
   i31 = i27;
   i26 = 10;
  }
 } while (0);
 do {
  if ((i26 | 0) == 7) {
   i22 = HEAP32[i25 >> 2] | 0;
   if ((i22 | 0) != 0) {
    i29 = i22;
    i30 = i24;
    i31 = 0;
    i26 = 10;
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    i29 = 0;
    i30 = i24;
    i31 = 0;
    i26 = 10;
    break;
   }
   if ((HEAP32[i8 + 8 >> 2] | 0) != 0) {
    i29 = 0;
    i30 = i24;
    i31 = 0;
    i26 = 10;
   }
  }
 } while (0);
 if ((i26 | 0) == 10) {
  i26 = HEAP32[i8 >> 2] | 0;
  i24 = i7 | 0;
  HEAP32[i24 >> 2] = (HEAP32[i24 >> 2] | 0) - i31;
  i31 = i7 + 4 | 0;
  HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) - i26;
  i31 = (HEAP32[i8 + 8 >> 2] | 0) + i26 | 0;
  i26 = i7 + 8 | 0;
  HEAP32[i26 >> 2] = i29 + (HEAP32[i30 >> 2] | 0) + (HEAP32[i26 >> 2] | 0);
  i26 = i7 + 12 | 0;
  HEAP32[i26 >> 2] = i31 + (HEAP32[i26 >> 2] | 0);
 }
 i26 = __ZN7WebCore11RenderLayer10FilterInfo3getERS0_(i1) | 0;
 __ZN7WebCore10LayoutRect5uniteERKS0_(i26 + 16 | 0, i7);
 if ((HEAP8[(HEAP32[i26 + 12 >> 2] | 0) + 90 | 0] & 1) != 0) {
  __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i9, i1, i1, 0, 71);
  __ZN7WebCore10LayoutRect5uniteERKS0_(i7, i9);
 }
 L21 : do {
  if ((i1 | 0) == 0) {
   i32 = 0;
  } else {
   i9 = i1;
   while (1) {
    do {
     if ((i9 | 0) != (i1 | 0)) {
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i9 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
       break;
      }
      i26 = HEAP32[i9 + 208 >> 2] | 0;
      if ((i26 | 0) != 0) {
       if ((HEAP8[i26 + 92 | 0] & 1) != 0) {
        break;
       }
      }
      i26 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i9) | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      i31 = HEAP32[i26 + 12 >> 2] | 0;
      if ((i31 | 0) == 0) {
       break;
      }
      if ((HEAP8[i31 + 89 | 0] & 1) != 0) {
       i32 = i9;
       break L21;
      }
     }
    } while (0);
    i31 = HEAP32[i9 + 208 >> 2] | 0;
    if ((i31 | 0) != 0) {
     if ((HEAP8[i31 + 91 | 0] & 1) != 0) {
      i32 = i9;
      break L21;
     }
    }
    if ((HEAP8[i9 + 21 | 0] & 16) != 0) {
     i32 = i9;
     break L21;
    }
    i31 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i31 | 0) == 0) {
     i32 = 0;
     break;
    } else {
     i9 = i31;
    }
   }
  }
 } while (0);
 d33 = +(HEAP32[i7 >> 2] | 0);
 d34 = +(HEAP32[i7 + 4 >> 2] | 0);
 d35 = +(HEAP32[i7 + 8 >> 2] | 0);
 d36 = +(HEAP32[i7 + 12 >> 2] | 0);
 d37 = +d33;
 d38 = +d34;
 HEAPF32[i11 >> 2] = d37;
 HEAPF32[i11 + 4 >> 2] = d38;
 d38 = d33 + d35;
 HEAPF32[i10 + 8 >> 2] = d38;
 HEAPF32[i12 + 12 >> 2] = d34;
 d35 = d34 + d36;
 HEAPF32[i10 + 16 >> 2] = d38;
 HEAPF32[i12 + 20 >> 2] = d35;
 HEAPF32[i10 + 24 >> 2] = d33;
 HEAPF32[i12 + 28 >> 2] = d35;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i17, HEAP32[i23 >> 2] | 0, i12, HEAP32[i32 + 32 >> 2] | 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i5, i17);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i5);
 i5 = HEAP32[i15 + 4 >> 2] | 0;
 i16 = i13 | 0;
 HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
 i15 = i13 + 4 | 0;
 HEAP32[i15 >> 2] = i5;
 i5 = i14 + 8 | 0;
 i14 = HEAP32[i5 + 4 >> 2] | 0;
 i17 = i13 + 8 | 0;
 HEAP32[i17 >> 2] = HEAP32[i5 >> 2];
 i5 = i13 + 12 | 0;
 HEAP32[i5 >> 2] = i14;
 i14 = HEAP32[i32 + 208 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i39 = i32;
  } else {
   if (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i14) | 0) {
    i10 = HEAP32[i23 >> 2] | 0;
    i11 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0;
    __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i21, i10 | 0, i12, HEAP32[i11 + 32 >> 2] | 0, 0, 0);
    __ZNK7WebCore9FloatQuad11boundingBoxEv(i6, i21);
    __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i20, i6);
    i10 = HEAP32[i19 + 4 >> 2] | 0;
    i7 = i18 + 8 | 0;
    i1 = HEAP32[i7 >> 2] | 0;
    i9 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i16 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i15 >> 2] = i10;
    HEAP32[i17 >> 2] = i1;
    HEAP32[i5 >> 2] = i9;
    i39 = i11;
    break;
   }
   __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i32, i13);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i32 = HEAP32[i39 + 32 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i32 + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
   i5 = HEAP32[i39 + 208 >> 2] | 0;
   if ((i5 | 0) != 0) {
    if ((HEAP8[i5 + 92 | 0] & 1) != 0) {
     break;
    }
   }
   __ZN7WebCore11RenderLayer37setFilterBackendNeedsRepaintingInRectERKNS_10LayoutRectEb(i39, i13, i3);
   STACKTOP = i4;
   return;
  }
 } while (0);
 if ((HEAP8[i39 + 21 | 0] & 16) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i32, i13, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer27paintForegroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectEbb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i13 = i12 | 0;
 L1 : do {
  if (i6) {
   i14 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i14 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i2 >> 2] | 0;
   i16 = 0;
   L4 : while (1) {
    do {
     if ((HEAP8[i15 + (i16 * 104 & -1) | 0] & 1) != 0) {
      if ((HEAP32[i15 + (i16 * 104 & -1) + 48 >> 2] | 0) < 1) {
       break;
      }
      if ((HEAP32[i15 + (i16 * 104 & -1) + 52 >> 2] | 0) >= 1) {
       break L4;
      }
     }
    } while (0);
    i16 = i16 + 1 | 0;
    if (i16 >>> 0 >= i14 >>> 0) {
     break L1;
    }
   }
   __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i1, i4, HEAP32[i7 >> 2] | 0, i5, HEAP32[i7 + 40 >> 2] | 0);
  }
 } while (0);
 i5 = i11 ? 2 : i8;
 do {
  if ((HEAP8[i7 + 44 | 0] & 1) == 0) {
   i17 = 14;
  } else {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 1) {
    i17 = 14;
    break;
   }
   i8 = HEAP32[i2 >> 2] | 0;
   if ((HEAP8[i8 | 0] & 1) == 0) {
    i17 = 14;
    break;
   }
   if ((HEAP32[i8 + 48 >> 2] | 0) < 1) {
    i11 = i13;
    _memset(i11 | 0, 0, 17) | 0;
    i18 = 0;
    i19 = i11;
    break;
   }
   i11 = (HEAP32[i8 + 52 >> 2] | 0) > 0;
   i4 = i13;
   _memset(i4 | 0, 0, 17) | 0;
   if (!i11) {
    i18 = 0;
    i19 = i4;
    break;
   }
   i11 = i8 + 40 | 0;
   HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
   HEAP32[i4 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
   HEAP32[i4 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
   HEAP32[i4 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
   HEAP8[i4 + 16 | 0] = HEAP8[i11 + 16 | 0] | 0;
   __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i7 >> 2] | 0, i3, i7 + 8 | 0, i13, 0);
   i18 = 1;
   i19 = i4;
  }
 } while (0);
 if ((i17 | 0) == 14) {
  i4 = i13;
  _memset(i4 | 0, 0, 17) | 0;
  i18 = 0;
  i19 = i4;
 }
 __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i10 ? 8 : 2, i2, i3, i7, i5, i9);
 L23 : do {
  if (i10) {
   if (i18) {
    i20 = i13;
    break;
   } else {
    STACKTOP = i12;
    return;
   }
  } else {
   __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, 3, i2, i3, i7, i5, i9);
   __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, 4, i2, i3, i7, i5, i9);
   do {
    if (i18) {
     i4 = i2 + 8 | 0;
     i11 = HEAP32[i4 >> 2] | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i8 = i2 | 0;
     i6 = HEAP32[i8 >> 2] | 0;
     i14 = i13;
     i16 = HEAP32[i14 >> 2] | 0;
     i15 = HEAP32[i14 + 4 >> 2] | 0;
     i21 = i6 + 60 | 0;
     do {
      if (!((i16 | 0) != (HEAP32[i21 >> 2] | 0) | (i15 | 0) != (HEAP32[i21 + 4 >> 2] | 0))) {
       i22 = i13 + 8 | 0;
       i23 = i6 + 68 | 0;
       if ((HEAP32[i22 >> 2] | 0) != (HEAP32[i23 >> 2] | 0)) {
        break;
       }
       if ((HEAP32[i22 + 4 >> 2] | 0) != (HEAP32[i23 + 4 >> 2] | 0)) {
        break;
       }
       if ((HEAP8[i13 + 16 | 0] & 1) != 0 ^ (HEAP8[i6 + 76 | 0] & 1) != 0) {
        break;
       }
       __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, 6, i2, i3, i7, i5, i9);
       i20 = i14;
       break L23;
      }
     } while (0);
     i6 = i7 + 8 | 0;
     i21 = i6;
     do {
      if ((i16 | 0) == (HEAP32[i21 >> 2] | 0) & (i15 | 0) == (HEAP32[i21 + 4 >> 2] | 0)) {
       i23 = i13 + 8 | 0;
       i22 = i7 + 16 | 0;
       if ((HEAP32[i23 >> 2] | 0) != (HEAP32[i22 >> 2] | 0)) {
        i17 = 28;
        break;
       }
       if ((HEAP32[i23 + 4 >> 2] | 0) == (HEAP32[i22 + 4 >> 2] | 0)) {
        i24 = i11;
       } else {
        i17 = 28;
       }
      } else {
       i17 = 28;
      }
     } while (0);
     if ((i17 | 0) == 28) {
      __ZN7WebCore15GraphicsContext7restoreEv(i3);
      i24 = HEAP32[i4 >> 2] | 0;
     }
     if ((i24 | 0) == 0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     i11 = HEAP32[i8 >> 2] | 0;
     if ((HEAP32[i11 + 68 >> 2] | 0) < 1) {
      break;
     }
     if ((HEAP32[i11 + 72 >> 2] | 0) < 1) {
      break;
     }
     i21 = i11 + 60 | 0;
     HEAP32[i19 >> 2] = HEAP32[i21 >> 2];
     HEAP32[i19 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
     HEAP32[i19 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
     HEAP32[i19 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
     HEAP8[i19 + 16 | 0] = HEAP8[i21 + 16 | 0] | 0;
     __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i7 >> 2] | 0, i3, i6, i13, 0);
     __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, 6, i2, i3, i7, i5, i9);
     i20 = i14;
     break L23;
    }
   } while (0);
   __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, 6, i2, i3, i7, i5, i9);
   STACKTOP = i12;
   return;
  }
 } while (0);
 i9 = i7 + 8 | 0;
 do {
  if ((HEAP32[i20 >> 2] | 0) == (HEAP32[i9 >> 2] | 0) & (HEAP32[i20 + 4 >> 2] | 0) == (HEAP32[i9 + 4 >> 2] | 0)) {
   i5 = i13 + 8 | 0;
   i2 = i7 + 16 | 0;
   if ((HEAP32[i5 >> 2] | 0) != (HEAP32[i2 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i5 + 4 >> 2] | 0) != (HEAP32[i2 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i12;
   return;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i3);
 STACKTOP = i12;
 return;
}
function __ZN7WebCore11RenderLayer24paintPaginatedChildLayerEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 4 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 8 | 0;
 HEAP32[i11 >> 2] = 0;
 L1 : do {
  if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
   i12 = i1;
   while (1) {
    i13 = HEAP32[i12 + 36 >> 2] | 0;
    if ((i13 | 0) == 0) {
     i14 = 0;
     break L1;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i14 = i13;
     break L1;
    }
    if ((HEAP8[i13 + 21 | 0] & 20) == 0) {
     i12 = i13;
    } else {
     i14 = i13;
     break;
    }
   }
  } else {
   i14 = HEAP32[i1 + 36 >> 2] | 0;
  }
 } while (0);
 i12 = i2 + 32 | 0;
 i13 = i8;
 i15 = i2;
 i16 = 0;
 i17 = 0;
 i18 = 0;
 i19 = 0;
 L8 : while (1) {
  i20 = HEAP32[i15 + 36 >> 2] | 0;
  HEAP32[i8 >> 2] = i20;
  if ((i20 | 0) == 0) {
   i21 = i16;
   i22 = 38;
   break;
  }
  i23 = HEAP32[i20 + 32 >> 2] | 0;
  i20 = HEAP32[i23 + 20 >> 2] | 0;
  do {
   if ((i20 & 4194304 | 0) == 0) {
    i24 = i16;
    i25 = i17;
    i26 = i18;
    i27 = i19;
   } else {
    i28 = HEAP32[i12 >> 2] | 0;
    if ((i20 & 512 | 0) == 0) {
     i29 = 0;
    } else {
     i29 = i23;
    }
    i30 = __ZNK7WebCore12RenderObject15containingBlockEv(i28 | 0) | 0;
    L16 : do {
     if ((i30 | 0) == 0) {
      i31 = i28;
      i32 = 0;
     } else {
      i33 = i28 + 4 | 0;
      i34 = i28;
      i35 = i30;
      while (1) {
       if (!((i35 | 0) != (HEAP32[(HEAP32[(HEAP32[(HEAP32[i33 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) & (i35 | 0) != (i29 | 0))) {
        i31 = i34;
        i32 = i35;
        break L16;
       }
       i36 = i35 | 0;
       i37 = __ZNK7WebCore12RenderObject15containingBlockEv(i35 | 0) | 0;
       if ((i37 | 0) == 0) {
        i31 = i36;
        i32 = 0;
        break;
       } else {
        i34 = i36;
        i35 = i37;
       }
      }
     }
    } while (0);
    if ((i32 | 0) != (i29 | 0)) {
     i24 = i16;
     i25 = i17;
     i26 = i18;
     i27 = i19;
     break;
    }
    if ((HEAP32[i31 + 20 >> 2] & 25165824 | 0) == 16777216) {
     i24 = i16;
     i25 = i17;
     i26 = i18;
     i27 = i19;
     break;
    }
    if ((i16 | 0) != (i17 | 0)) {
     HEAP32[i18 + (i16 << 2) >> 2] = HEAP32[i8 >> 2];
     i30 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
     HEAP32[i11 >> 2] = i30;
     i24 = i30;
     i25 = i17;
     i26 = i18;
     i27 = i19;
     break;
    }
    i30 = i17 + 1 | 0;
    do {
     if (i18 >>> 0 > i8 >>> 0) {
      i22 = 21;
     } else {
      if ((i18 + (i17 << 2) | 0) >>> 0 <= i8 >>> 0) {
       i22 = 21;
       break;
      }
      i28 = i13 - i18 >> 2;
      i35 = i30 + (i17 >>> 2) | 0;
      i34 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
      i35 = i34 >>> 0 > i30 >>> 0 ? i34 : i30;
      do {
       if (i17 >>> 0 < i35 >>> 0) {
        if (i35 >>> 0 > 1073741823 >>> 0) {
         i22 = 30;
         break L8;
        }
        i34 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
        i33 = i34 >>> 2;
        HEAP32[i10 >> 2] = i33;
        i37 = __ZN3WTF10fastMallocEj(i34) | 0;
        i34 = i37;
        HEAP32[i9 >> 2] = i34;
        i36 = i18;
        _memcpy(i37 | 0, i36 | 0, i17 << 2) | 0;
        if ((i18 | 0) == 0) {
         i38 = i33;
         i39 = i33;
         i40 = i34;
         break;
        }
        if ((i34 | 0) == (i18 | 0)) {
         HEAP32[i9 >> 2] = 0;
         HEAP32[i10 >> 2] = 0;
         i41 = 0;
         i42 = 0;
        } else {
         i41 = i33;
         i42 = i34;
        }
        __ZN3WTF8fastFreeEPv(i36);
        i38 = i41;
        i39 = i41;
        i40 = i42;
       } else {
        i38 = i17;
        i39 = i19;
        i40 = i18;
       }
      } while (0);
      i43 = i40 + (i28 << 2) | 0;
      i44 = i40;
      i45 = i38;
      i46 = i39;
     }
    } while (0);
    do {
     if ((i22 | 0) == 21) {
      i22 = 0;
      i35 = i19 + 1 + (i19 >>> 2) | 0;
      i36 = i35 >>> 0 > 16 >>> 0 ? i35 : 16;
      i35 = i36 >>> 0 > i30 >>> 0 ? i36 : i30;
      if (i19 >>> 0 >= i35 >>> 0) {
       i43 = i8;
       i44 = i18;
       i45 = i19;
       i46 = i19;
       break;
      }
      if (i35 >>> 0 > 1073741823 >>> 0) {
       i22 = 23;
       break L8;
      }
      i36 = __ZN3WTF18fastMallocGoodSizeEj(i35 << 2) | 0;
      i35 = i36 >>> 2;
      HEAP32[i10 >> 2] = i35;
      i34 = __ZN3WTF10fastMallocEj(i36) | 0;
      i36 = i34;
      HEAP32[i9 >> 2] = i36;
      i33 = i18;
      _memcpy(i34 | 0, i33 | 0, i17 << 2) | 0;
      if ((i18 | 0) == 0) {
       i43 = i8;
       i44 = i36;
       i45 = i35;
       i46 = i35;
       break;
      }
      if ((i36 | 0) == (i18 | 0)) {
       HEAP32[i9 >> 2] = 0;
       HEAP32[i10 >> 2] = 0;
       i47 = 0;
       i48 = 0;
      } else {
       i47 = i35;
       i48 = i36;
      }
      __ZN3WTF8fastFreeEPv(i33);
      i43 = i8;
      i44 = i48;
      i45 = i47;
      i46 = i47;
     }
    } while (0);
    HEAP32[i44 + (i17 << 2) >> 2] = HEAP32[i43 >> 2];
    i30 = (HEAP32[i11 >> 2] | 0) + 1 | 0;
    HEAP32[i11 >> 2] = i30;
    i24 = i30;
    i25 = i45;
    i26 = i44;
    i27 = i46;
   }
  } while (0);
  i23 = HEAP32[i8 >> 2] | 0;
  if ((i23 | 0) == (i14 | 0)) {
   i21 = i24;
   i22 = 38;
   break;
  } else {
   i15 = i23;
   i16 = i24;
   i17 = i25;
   i18 = i26;
   i19 = i27;
  }
 }
 if ((i22 | 0) == 30) {
  _WTFCrash();
 } else if ((i22 | 0) == 23) {
  _WTFCrash();
 } else if ((i22 | 0) == 38) {
  do {
   if ((i21 | 0) != 0) {
    __ZN7WebCore11RenderLayer26paintChildLayerIntoColumnsEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKN3WTF6VectorIS1_Lj0ENS7_15CrashOnOverflowEEEj(i1, i2, i3, i4, i5, i7, i21 - 1 | 0);
    if ((HEAP32[i11 >> 2] | 0) == 0) {
     break;
    }
    HEAP32[i11 >> 2] = 0;
   }
  } while (0);
  i11 = HEAP32[i9 >> 2] | 0;
  if ((i11 | 0) == 0) {
   STACKTOP = i6;
   return;
  }
  HEAP32[i9 >> 2] = 0;
  HEAP32[i10 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
  STACKTOP = i6;
  return;
 }
}
function __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i2 + 40 | 0;
 i8 = i2 + 48 | 0;
 i9 = i2 + 64 | 0;
 i10 = i2 + 72 | 0;
 i11 = i2 + 80 | 0;
 i12 = i2 + 96 | 0;
 i13 = i2 + 104 | 0;
 i14 = i2 + 112 | 0;
 i15 = i2 + 128 | 0;
 i16 = i2 + 136 | 0;
 i17 = i2 + 144 | 0;
 i18 = i1 + 32 | 0;
 i19 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i19 + 20 >> 2] & 512 | 0) == 0) {
  i20 = 0;
 } else {
  i20 = i19;
 }
 i19 = i1 + 20 | 0;
 HEAP8[i19] = HEAP8[i19] & -3;
 __ZNK7WebCore11RenderLayer13overflowRightEv(i15, i1);
 i19 = i14;
 i21 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i21 + 20 >> 2] & 512 | 0) == 0) {
  i22 = 0;
 } else {
  i22 = i21;
 }
 i21 = HEAP32[i22 + 88 >> 2] | 0;
 if ((i21 | 0) == 0) {
  i23 = i22 | 0;
  i24 = i22;
  i25 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 744 >> 2] & 63](i23) | 0;
  i26 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i24 >> 2] | 0) + 736 >> 2] & 63](i23) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i12, i22);
  __ZNK7WebCore9RenderBox12clientHeightEv(i13, i22);
  i23 = HEAP32[i12 >> 2] | 0;
  i12 = HEAP32[i13 >> 2] | 0;
  i13 = i14 | 0;
  HEAP32[i13 >> 2] = i25;
  HEAP32[i14 + 4 >> 2] = i26;
  HEAP32[i14 + 8 >> 2] = i23;
  HEAP32[i14 + 12 >> 2] = i12;
  i27 = i13;
 } else {
  i13 = i21 + 4 | 0;
  HEAP32[i19 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i19 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i19 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i19 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  i27 = i14 | 0;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i22, i14);
 HEAP32[i1 + 120 >> 2] = (HEAP32[i15 >> 2] | 0) - (HEAP32[i27 >> 2] | 0);
 __ZNK7WebCore11RenderLayer14overflowBottomEv(i16, i1);
 i27 = i11;
 i15 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i15 + 20 >> 2] & 512 | 0) == 0) {
  i28 = 0;
 } else {
  i28 = i15;
 }
 i15 = HEAP32[i28 + 88 >> 2] | 0;
 if ((i15 | 0) == 0) {
  i14 = i28 | 0;
  i22 = i28;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 744 >> 2] & 63](i14) | 0;
  i19 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 736 >> 2] & 63](i14) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i9, i28);
  __ZNK7WebCore9RenderBox12clientHeightEv(i10, i28);
  i14 = HEAP32[i9 >> 2] | 0;
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i11 >> 2] = i13;
  i13 = i11 + 4 | 0;
  HEAP32[i13 >> 2] = i19;
  HEAP32[i11 + 8 >> 2] = i14;
  HEAP32[i11 + 12 >> 2] = i9;
  i29 = i13;
 } else {
  i13 = i15 + 4 | 0;
  HEAP32[i27 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i27 + 4 >> 2] = HEAP32[i13 + 4 >> 2];
  HEAP32[i27 + 8 >> 2] = HEAP32[i13 + 8 >> 2];
  HEAP32[i27 + 12 >> 2] = HEAP32[i13 + 12 >> 2];
  i29 = i11 + 4 | 0;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i28, i11);
 HEAP32[i1 + 124 >> 2] = (HEAP32[i16 >> 2] | 0) - (HEAP32[i29 >> 2] | 0);
 i29 = i8;
 i16 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i16 + 20 >> 2] & 512 | 0) == 0) {
  i30 = 0;
 } else {
  i30 = i16;
 }
 i16 = HEAP32[i30 + 88 >> 2] | 0;
 if ((i16 | 0) == 0) {
  i11 = i30 | 0;
  i28 = i30;
  i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 744 >> 2] & 63](i11) | 0;
  i27 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i28 >> 2] | 0) + 736 >> 2] & 63](i11) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i6, i30);
  __ZNK7WebCore9RenderBox12clientHeightEv(i7, i30);
  i11 = HEAP32[i6 >> 2] | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  i7 = i8 | 0;
  HEAP32[i7 >> 2] = i13;
  HEAP32[i8 + 4 >> 2] = i27;
  HEAP32[i8 + 8 >> 2] = i11;
  HEAP32[i8 + 12 >> 2] = i6;
  i31 = i7;
 } else {
  i7 = i16 + 4 | 0;
  HEAP32[i29 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i29 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i29 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i29 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i31 = i8 | 0;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i30, i8);
 i8 = HEAP32[i31 >> 2] | 0;
 i31 = i20 | 0;
 i30 = i20;
 i20 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i30 >> 2] | 0) + 744 >> 2] & 63](i31) | 0;
 i7 = i5;
 i29 = HEAP32[i18 >> 2] | 0;
 if ((HEAP32[i29 + 20 >> 2] & 512 | 0) == 0) {
  i32 = 0;
 } else {
  i32 = i29;
 }
 i29 = HEAP32[i32 + 88 >> 2] | 0;
 if ((i29 | 0) == 0) {
  i18 = i32 | 0;
  i16 = i32;
  i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 744 >> 2] & 63](i18) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 736 >> 2] & 63](i18) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i3, i32);
  __ZNK7WebCore9RenderBox12clientHeightEv(i4, i32);
  i18 = HEAP32[i3 >> 2] | 0;
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i5 >> 2] = i6;
  i6 = i5 + 4 | 0;
  HEAP32[i6 >> 2] = i11;
  HEAP32[i5 + 8 >> 2] = i18;
  HEAP32[i5 + 12 >> 2] = i3;
  i33 = i6;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i32, i5);
  i34 = HEAP32[i33 >> 2] | 0;
  i35 = HEAP32[i30 >> 2] | 0;
  i36 = i35 + 736 | 0;
  i37 = HEAP32[i36 >> 2] | 0;
  i38 = FUNCTION_TABLE_ii[i37 & 63](i31) | 0;
  i39 = i1 | 0;
  i40 = i20 - i8 | 0;
  i41 = i38 - i34 | 0;
  i42 = i17 | 0;
  HEAP32[i42 >> 2] = i40;
  i43 = i17 + 4 | 0;
  HEAP32[i43 >> 2] = i41;
  __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i39, i17);
  STACKTOP = i2;
  return;
 } else {
  i6 = i29 + 4 | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
  HEAP32[i7 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
  HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
  i33 = i5 + 4 | 0;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i32, i5);
  i34 = HEAP32[i33 >> 2] | 0;
  i35 = HEAP32[i30 >> 2] | 0;
  i36 = i35 + 736 | 0;
  i37 = HEAP32[i36 >> 2] | 0;
  i38 = FUNCTION_TABLE_ii[i37 & 63](i31) | 0;
  i39 = i1 | 0;
  i40 = i20 - i8 | 0;
  i41 = i38 - i34 | 0;
  i42 = i17 | 0;
  HEAP32[i42 >> 2] = i40;
  i43 = i17 + 4 | 0;
  HEAP32[i43 >> 2] = i41;
  __ZN7WebCore14ScrollableArea15setScrollOriginERKNS_8IntPointE(i39, i17);
  STACKTOP = i2;
  return;
 }
}
function __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 if ((i6 | 0) == 0) {
  return;
 } else {
  i9 = i3;
  i10 = i5;
  i11 = i6;
  i12 = i2;
  i13 = i1;
 }
 L3 : while (1) {
  i1 = i9;
  i2 = i10;
  i14 = i11;
  i15 = i12;
  i6 = i13;
  while (1) {
   if ((i2 | 0) == 0) {
    i16 = 47;
    break L3;
   } else {
    i17 = i2;
    i18 = i6;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 15](HEAP32[i15 >> 2] | 0, HEAP32[i18 >> 2] | 0) | 0) {
     break;
    }
    i5 = i17 - 1 | 0;
    if ((i5 | 0) == 0) {
     i16 = 48;
     break L3;
    } else {
     i17 = i5;
     i18 = i18 + 4 | 0;
    }
   }
   if (!((i17 | 0) > (i8 | 0) & (i14 | 0) > (i8 | 0))) {
    i16 = 7;
    break L3;
   }
   if ((i17 | 0) < (i14 | 0)) {
    i5 = (i14 | 0) / 2 & -1;
    i3 = i15 + (i5 << 2) | 0;
    i19 = i18;
    i20 = i18;
    i21 = i15 - i19 >> 2;
    L23 : while (1) {
     i22 = i21;
     while (1) {
      if ((i22 | 0) == 0) {
       break L23;
      }
      i23 = (i22 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 15](HEAP32[i3 >> 2] | 0, HEAP32[i20 + (i23 << 2) >> 2] | 0) | 0) {
       i22 = i23;
      } else {
       break;
      }
     }
     i20 = i20 + (i23 + 1 << 2) | 0;
     i21 = i22 - 1 - i23 | 0;
    }
    i24 = i5;
    i25 = i20 - i19 >> 2;
    i26 = i20;
    i27 = i3;
   } else {
    if ((i17 | 0) == 1) {
     i16 = 16;
     break L3;
    }
    i21 = (i17 | 0) / 2 & -1;
    i28 = i18 + (i21 << 2) | 0;
    i29 = i15;
    i30 = i15;
    i31 = i1 - i29 >> 2;
    L15 : while (1) {
     i32 = i31;
     while (1) {
      if ((i32 | 0) == 0) {
       break L15;
      }
      i33 = (i32 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 15](HEAP32[i30 + (i33 << 2) >> 2] | 0, HEAP32[i28 >> 2] | 0) | 0) {
       break;
      } else {
       i32 = i33;
      }
     }
     i30 = i30 + (i33 + 1 << 2) | 0;
     i31 = i32 - 1 - i33 | 0;
    }
    i24 = i30 - i29 >> 2;
    i25 = i21;
    i26 = i28;
    i27 = i30;
   }
   i31 = i26;
   i34 = i17 - i25 | 0;
   i35 = i14 - i24 | 0;
   L31 : do {
    if ((i26 | 0) == (i15 | 0)) {
     i36 = i27;
    } else {
     if ((i15 | 0) == (i27 | 0)) {
      i36 = i26;
      break;
     }
     if ((i26 + 4 | 0) == (i15 | 0)) {
      i3 = HEAP32[i26 >> 2] | 0;
      i20 = i27 - i15 | 0;
      _memmove(i31 | 0, i15 | 0, i20 | 0) | 0;
      i19 = i26 + (i20 >> 2 << 2) | 0;
      HEAP32[i19 >> 2] = i3;
      i36 = i19;
      break;
     }
     if ((i15 + 4 | 0) == (i27 | 0)) {
      i19 = i27 - 4 | 0;
      i3 = HEAP32[i19 >> 2] | 0;
      i20 = i19 - i26 | 0;
      i19 = i27 + (-(i20 >> 2) << 2) | 0;
      _memmove(i19 | 0, i31 | 0, i20 | 0) | 0;
      HEAP32[i26 >> 2] = i3;
      i36 = i19;
      break;
     }
     i19 = i15;
     i3 = i19 - i26 >> 2;
     i20 = i27;
     i5 = i20 - i19 >> 2;
     if ((i3 | 0) == (i5 | 0)) {
      i19 = i15;
      i22 = i26;
      while (1) {
       i37 = HEAP32[i22 >> 2] | 0;
       HEAP32[i22 >> 2] = HEAP32[i19 >> 2];
       HEAP32[i19 >> 2] = i37;
       i37 = i22 + 4 | 0;
       if ((i37 | 0) == (i15 | 0)) {
        i36 = i15;
        break L31;
       } else {
        i19 = i19 + 4 | 0;
        i22 = i37;
       }
      }
     } else {
      i38 = i3;
      i39 = i5;
     }
     while (1) {
      i22 = (i38 | 0) % (i39 | 0) & -1;
      if ((i22 | 0) == 0) {
       break;
      } else {
       i38 = i39;
       i39 = i22;
      }
     }
     if ((i39 | 0) != 0) {
      i22 = i3 - 1 | 0;
      i19 = i26 + (i39 << 2) | 0;
      while (1) {
       i32 = i19 - 4 | 0;
       i37 = HEAP32[i32 >> 2] | 0;
       i40 = i19 + (i22 << 2) | 0;
       i41 = i32;
       while (1) {
        HEAP32[i41 >> 2] = HEAP32[i40 >> 2];
        i42 = i20 - i40 >> 2;
        if ((i3 | 0) < (i42 | 0)) {
         i43 = i40 + (i3 << 2) | 0;
        } else {
         i43 = i26 + (i3 - i42 << 2) | 0;
        }
        if ((i43 | 0) == (i32 | 0)) {
         break;
        } else {
         i41 = i40;
         i40 = i43;
        }
       }
       HEAP32[i40 >> 2] = i37;
       if ((i32 | 0) == (i26 | 0)) {
        break;
       } else {
        i19 = i32;
       }
      }
     }
     i36 = i26 + (i5 << 2) | 0;
    }
   } while (0);
   if ((i24 + i25 | 0) >= (i35 + i34 | 0)) {
    break;
   }
   __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i18, i26, i36, i4, i25, i24, i7, i8);
   if ((i14 | 0) == (i24 | 0)) {
    i16 = 45;
    break L3;
   } else {
    i2 = i34;
    i14 = i35;
    i15 = i27;
    i6 = i36;
   }
  }
  __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i36, i27, i9, i4, i34, i35, i7, i8);
  if ((i24 | 0) == 0) {
   i16 = 46;
   break;
  } else {
   i9 = i36;
   i10 = i25;
   i11 = i24;
   i12 = i26;
   i13 = i18;
  }
 }
 if ((i16 | 0) == 45) {
  return;
 } else if ((i16 | 0) == 46) {
  return;
 } else if ((i16 | 0) == 7) {
  __ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE(i18, i15, i9, i4, i17, i14, i7);
  return;
 } else if ((i16 | 0) == 16) {
  i7 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
  HEAP32[i15 >> 2] = i7;
  return;
 } else if ((i16 | 0) == 47) {
  return;
 } else if ((i16 | 0) == 48) {
  return;
 }
}
function __ZN7WebCore11RenderLayer13setupClipPathEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoERKNS_11LayoutPointERNS_10LayoutRectERb(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, d30 = +0, d31 = +0, i32 = 0, i33 = 0, i34 = 0, i35 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 32 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i17 = i16 | 0;
 i18 = i16;
 i19 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i20 = i19 | 0;
 i21 = i19;
 i22 = i1 + 32 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 212 >> 2] | 0) == 0) {
  i23 = 0;
  STACKTOP = i7;
  return i23 | 0;
 }
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  i23 = 0;
  STACKTOP = i7;
  return i23 | 0;
 }
 i24 = (HEAP32[(HEAP32[i22 >> 2] | 0) + 36 >> 2] | 0) + 20 | 0;
 i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 212 >> 2] | 0;
 i26 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 63](i25) | 0) == 1;
 i25 = HEAP32[(HEAP32[i24 >> 2] | 0) + 212 >> 2] | 0;
 if (i26) {
  if ((HEAP8[i6] & 1) == 0) {
   __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i9, i1, HEAP32[i3 >> 2] | 0, i4, 0);
   i26 = i5;
   i27 = i9;
   HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
   HEAP32[i26 + 4 >> 2] = HEAP32[i27 + 4 >> 2];
   HEAP32[i26 + 8 >> 2] = HEAP32[i27 + 8 >> 2];
   HEAP32[i26 + 12 >> 2] = HEAP32[i27 + 12 >> 2];
   HEAP8[i6] = 1;
  }
  __ZN7WebCore15GraphicsContext4saveEv(i2);
  d28 = +(HEAP32[i5 + 8 >> 2] | 0);
  d29 = +(HEAP32[i5 + 12 >> 2] | 0);
  d30 = +(+(HEAP32[i5 >> 2] | 0));
  d31 = +(+(HEAP32[i5 + 4 >> 2] | 0));
  HEAPF32[i12 >> 2] = d30;
  HEAPF32[i12 + 4 >> 2] = d31;
  i12 = i11 + 8 | 0;
  d31 = +d28;
  d28 = +d29;
  HEAPF32[i12 >> 2] = d31;
  HEAPF32[i12 + 4 >> 2] = d28;
  __ZN7WebCore4PathC1Ev(i10);
  i12 = i25 + 12 | 0;
  i11 = HEAP32[i12 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 15](i11, i10, i13);
  i13 = HEAP32[i12 >> 2] | 0;
  __ZN7WebCore15GraphicsContext8clipPathERKNS_4PathENS_8WindRuleE(i2, i10, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 12 >> 2] & 63](i13) | 0);
  __ZN7WebCore4PathD1Ev(i10);
  i23 = 1;
  STACKTOP = i7;
  return i23 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 12 >> 2] & 63](i25) | 0) != 0) {
  i23 = 0;
  STACKTOP = i7;
  return i23 | 0;
 }
 i25 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i22 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 44 | 0;
 i10 = HEAP32[(HEAP32[(HEAP32[i24 >> 2] | 0) + 212 >> 2] | 0) + 16 >> 2] | 0;
 do {
  if ((i10 | 0) == 0) {
   i24 = i8 | 0;
   HEAP32[i24 >> 2] = 0;
   i32 = i24;
  } else {
   if ((HEAP32[i10 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i8, i10);
    i32 = i8 | 0;
    break;
   } else {
    i24 = i8 | 0;
    HEAP32[i24 >> 2] = i10;
    i13 = i10 | 0;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 2;
    i32 = i24;
    break;
   }
  }
 } while (0);
 i10 = i14 | 0;
 HEAP32[i10 >> 2] = HEAP32[i32 >> 2];
 i32 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i25, i14) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 | 0;
   i25 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i25 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i10 >> 2] = i25;
    break;
   }
  }
 } while (0);
 if ((i32 | 0) == 0) {
  i23 = 0;
  STACKTOP = i7;
  return i23 | 0;
 }
 i14 = HEAP32[i32 + 44 >> 2] | 0;
 i25 = HEAP32[__ZN7WebCore8SVGNames11clipPathTagE >> 2] | 0;
 do {
  if ((i14 | 0) != (i25 | 0)) {
   if ((HEAP32[i14 + 12 >> 2] | 0) != (HEAP32[i25 + 12 >> 2] | 0)) {
    i23 = 0;
    STACKTOP = i7;
    return i23 | 0;
   }
   if ((HEAP32[i14 + 16 >> 2] | 0) == (HEAP32[i25 + 16 >> 2] | 0)) {
    break;
   } else {
    i23 = 0;
   }
   STACKTOP = i7;
   return i23 | 0;
  }
 } while (0);
 i25 = i32 + 12 | 0;
 i14 = HEAP32[i25 >> 2] | 0;
 i10 = i32 + 32 | 0;
 if ((i14 & 2048 | 0) == 0) {
  i33 = i10 | 0;
 } else {
  i33 = HEAP32[i10 >> 2] | 0;
 }
 if ((HEAP32[i33 >> 2] | 0) == 0) {
  i23 = 0;
  STACKTOP = i7;
  return i23 | 0;
 }
 if ((HEAP8[i6] & 1) == 0) {
  __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i15, i1, HEAP32[i3 >> 2] | 0, i4, 0);
  i4 = i5;
  i1 = i15;
  HEAP32[i4 >> 2] = HEAP32[i1 >> 2];
  HEAP32[i4 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
  HEAP32[i4 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
  HEAP32[i4 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
  HEAP8[i6] = 1;
  i34 = HEAP32[i25 >> 2] | 0;
 } else {
  i34 = i14;
 }
 if ((i34 & 2048 | 0) == 0) {
  i35 = i10 | 0;
 } else {
  i35 = HEAP32[i10 >> 2] | 0;
 }
 i10 = HEAP32[i35 >> 2] | 0;
 i35 = HEAP32[i22 >> 2] | 0;
 d28 = +(HEAP32[i5 + 8 >> 2] | 0);
 d31 = +(HEAP32[i5 + 12 >> 2] | 0);
 d29 = +(+(HEAP32[i5 >> 2] | 0));
 d30 = +(+(HEAP32[i5 + 4 >> 2] | 0));
 HEAPF32[i17 >> 2] = d29;
 HEAPF32[i17 + 4 >> 2] = d30;
 i17 = i16 + 8 | 0;
 d30 = +d28;
 d28 = +d31;
 HEAPF32[i17 >> 2] = d30;
 HEAPF32[i17 + 4 >> 2] = d28;
 d28 = +(HEAP32[i3 + 16 >> 2] | 0);
 d30 = +(HEAP32[i3 + 20 >> 2] | 0);
 d31 = +(+(HEAP32[i3 + 8 >> 2] | 0));
 d29 = +(+(HEAP32[i3 + 12 >> 2] | 0));
 HEAPF32[i20 >> 2] = d31;
 HEAPF32[i20 + 4 >> 2] = d29;
 i20 = i19 + 8 | 0;
 d29 = +d28;
 d28 = +d30;
 HEAPF32[i20 >> 2] = d29;
 HEAPF32[i20 + 4 >> 2] = d28;
 __ZN7WebCore24RenderSVGResourceClipper22applyClippingToContextERNS_13RenderElementERKNS_9FloatRectES5_PNS_15GraphicsContextE(i10, i35, i18, i21, i2) | 0;
 i23 = 0;
 STACKTOP = i7;
 return i23 | 0;
}
function __ZN7WebCore11RenderLayer15updateTransformEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i5 + 20 >> 2] & 131072 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 20 >> 2] | 0) + 72 >> 2] | 0) + 12 >> 2] | 0) != 0;
 }
 i5 = i1 + 172 | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 i8 = (i7 | 0) == 0;
 do {
  if (i8) {
   if (i6) {
    i9 = 0;
    i10 = 17;
   } else {
    i11 = 0;
   }
  } else {
   do {
    if (+HEAPF64[i7 + 16 >> 3] == +0) {
     if (+HEAPF64[i7 + 24 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 48 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 56 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 64 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 72 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 80 >> 3] != +1) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 88 >> 3] != +0) {
      i12 = 1;
      break;
     }
     if (+HEAPF64[i7 + 112 >> 3] != +0) {
      i12 = 1;
      break;
     }
     i12 = +HEAPF64[i7 + 120 >> 3] != +1;
    } else {
     i12 = 1;
    }
   } while (0);
   if (i6) {
    i13 = i12;
    i10 = 22;
    break;
   }
   if (i6) {
    i9 = i12;
    i10 = 17;
    break;
   }
   HEAP32[i5 >> 2] = 0;
   if (i8) {
    i14 = i12;
    i10 = 21;
    break;
   }
   __ZN3WTF8fastFreeEPv(i7);
   i14 = i12;
   i10 = 21;
  }
 } while (0);
 do {
  if ((i10 | 0) == 17) {
   i12 = __ZN3WTF10fastMallocEj(128) | 0;
   HEAPF64[i12 >> 3] = +1;
   _memset(i12 + 8 | 0, 0, 32) | 0;
   HEAPF64[i12 + 40 >> 3] = +1;
   _memset(i12 + 48 | 0, 0, 32) | 0;
   HEAPF64[i12 + 80 >> 3] = +1;
   _memset(i12 + 88 | 0, 0, 32) | 0;
   HEAPF64[i12 + 120 >> 3] = +1;
   i7 = HEAP32[i5 >> 2] | 0;
   HEAP32[i5 >> 2] = i12;
   if ((i7 | 0) == 0) {
    i14 = i9;
    i10 = 21;
    break;
   }
   __ZN3WTF8fastFreeEPv(i7);
   i14 = i9;
   i10 = 21;
  }
 } while (0);
 if ((i10 | 0) == 21) {
  __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i1, 4);
  i13 = i14;
  i10 = 22;
 }
 do {
  if ((i10 | 0) == 22) {
   if (!i6) {
    i11 = i13;
    break;
   }
   i14 = HEAP32[i4 >> 2] | 0;
   if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
    i15 = 0;
   } else {
    i15 = i14;
   }
   i14 = HEAP32[i5 >> 2] | 0;
   HEAPF64[i14 >> 3] = +1;
   _memset(i14 + 8 | 0, 0, 32) | 0;
   HEAPF64[i14 + 40 >> 3] = +1;
   _memset(i14 + 48 | 0, 0, 32) | 0;
   HEAPF64[i14 + 80 >> 3] = +1;
   _memset(i14 + 88 | 0, 0, 32) | 0;
   HEAPF64[i14 + 120 >> 3] = +1;
   i14 = HEAP32[i15 + 36 >> 2] | 0;
   i9 = HEAP32[i5 >> 2] | 0;
   i7 = HEAP32[i15 + 56 >> 2] | 0;
   HEAP32[i3 >> 2] = HEAP32[i15 + 52 >> 2];
   HEAP32[i3 + 4 >> 2] = i7;
   __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE(i14, i9, i3, 0);
   i9 = HEAP32[i5 >> 2] | 0;
   if (__ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) | 0) {
    i11 = i13;
    break;
   }
   __ZN7WebCore20TransformationMatrix10makeAffineEv(i9);
   i11 = i13;
  }
 } while (0);
 i13 = HEAP32[i5 >> 2] | 0;
 L34 : do {
  if ((i13 | 0) == 0) {
   if (i11) {
    i16 = i1;
    break;
   }
   STACKTOP = i2;
   return;
  } else {
   do {
    if (+HEAPF64[i13 + 16 >> 3] == +0) {
     if (+HEAPF64[i13 + 24 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 48 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 56 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 64 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 72 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 80 >> 3] != +1) {
      break;
     }
     if (+HEAPF64[i13 + 88 >> 3] != +0) {
      break;
     }
     if (+HEAPF64[i13 + 112 >> 3] != +0) {
      break;
     }
     if (i11 ^ +HEAPF64[i13 + 120 >> 3] != +1) {
      i16 = i1;
      break L34;
     }
     STACKTOP = i2;
     return;
    }
   } while (0);
   if (!i11) {
    i16 = i1;
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 while (1) {
  i17 = HEAP32[i16 + 36 >> 2] | 0;
  if ((i17 | 0) == 0) {
   i10 = 57;
   break;
  }
  i18 = (HEAP32[i17 + 32 >> 2] | 0) + 36 | 0;
  if ((HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i10 = 42;
   break;
  }
  if ((HEAP8[i17 + 21 | 0] & 20) == 0) {
   i16 = i17;
  } else {
   i10 = 44;
   break;
  }
 }
 if ((i10 | 0) == 44) {
  i16 = i17 + 22 | 0;
  i1 = HEAP8[i16] | -128;
  HEAP8[i16] = i1;
  i19 = i1;
 } else if ((i10 | 0) == 42) {
  i1 = i17 + 22 | 0;
  i16 = HEAP8[i1] | -128;
  HEAP8[i1] = i16;
  i19 = i16;
 } else if ((i10 | 0) == 57) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[(HEAP32[(HEAP32[i18 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i20 = i17;
  i21 = i19;
 }
 L62 : while (1) {
  HEAP8[i20 + 22 | 0] = i21 | -128;
  i19 = i20;
  while (1) {
   i19 = HEAP32[i19 + 36 >> 2] | 0;
   if ((i19 | 0) == 0) {
    i10 = 58;
    break L62;
   }
   i22 = HEAP32[(HEAP32[i19 + 32 >> 2] | 0) + 36 >> 2] | 0;
   if ((HEAP32[(HEAP32[i22 + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    break;
   }
   if ((HEAP8[i19 + 21 | 0] & 20) != 0) {
    break;
   }
  }
  if ((HEAP32[(HEAP32[i22 + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
   i10 = 54;
   break;
  }
  i20 = i19;
  i21 = HEAP8[i19 + 22 | 0] | 0;
 }
 if ((i10 | 0) == 54) {
  STACKTOP = i2;
  return;
 } else if ((i10 | 0) == 58) {
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderLayer8scrollToEii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 712 | 0;
 i5 = i4 | 0;
 i6 = i4 + 680 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i12 + 20 >> 2] & 512 | 0) == 0 | (i12 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 do {
  if ((HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 48 >> 2] & 7168 | 0) != 5120) {
   if ((HEAP8[i1 + 20 | 0] & 2) == 0) {
    break;
   }
   __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
  }
 } while (0);
 i12 = i2 - (HEAP32[i1 + 12 >> 2] | 0) | 0;
 i2 = i3 - (HEAP32[i1 + 16 >> 2] | 0) | 0;
 i3 = i1 + 112 | 0;
 do {
  if ((HEAP32[i3 >> 2] | 0) == (i12 | 0)) {
   if ((HEAP32[i1 + 116 >> 2] | 0) != (i2 | 0)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i13 = i3;
 HEAP32[i13 >> 2] = i12;
 HEAP32[i13 + 4 >> 2] = i2;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i2 | 0) == 0)) {
   i13 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i2 + 32 >> 2] | 0) | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation19willScrollLayerImplEPNS_19InstrumentingAgentsEPNS_5FrameE(i13, i2);
  }
 } while (0);
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 | 0;
 do {
  if ((HEAP32[(HEAP32[i2 >> 2] | 0) + 304 >> 2] | 0) != 3) {
   __ZN7WebCore17RenderGeometryMapC1Ej(i5, 2);
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0) != (i1 | 0)) {
    __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i5, HEAP32[i1 + 36 >> 2] | 0, 0);
   }
   __ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj(i1, i5, 1);
   __ZN7WebCore17RenderGeometryMapD1Ev(i5);
   __ZN7WebCore9FrameView22updateAnnotatedRegionsEv(HEAP32[i2 >> 2] | 0);
   __ZN7WebCore9FrameView21updateWidgetPositionsEv(HEAP32[i2 >> 2] | 0);
   if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore11RenderLayer34updateCompositingLayersAfterScrollEv(i1);
  }
 } while (0);
 i2 = HEAP32[i11 >> 2] | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0;
 i13 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i2 | 0) | 0;
 HEAP8[(HEAP32[i5 + 468 >> 2] | 0) + 16 | 0] = 1;
 i2 = i1 + 56 | 0;
 d14 = +(HEAP32[i2 >> 2] | 0);
 d15 = +(HEAP32[i1 + 60 >> 2] | 0);
 d16 = +(HEAP32[i1 + 64 >> 2] | 0);
 d17 = +(HEAP32[i1 + 68 >> 2] | 0);
 d18 = +d14;
 d19 = +d15;
 HEAPF32[i7 >> 2] = d18;
 HEAPF32[i7 + 4 >> 2] = d19;
 d19 = d14 + d16;
 HEAPF32[i6 + 8 >> 2] = d19;
 HEAPF32[i8 + 12 >> 2] = d15;
 d16 = d15 + d17;
 HEAPF32[i6 + 16 >> 2] = d19;
 HEAPF32[i8 + 20 >> 2] = d16;
 HEAPF32[i6 + 24 >> 2] = d14;
 HEAPF32[i8 + 28 >> 2] = d16;
 if ((i13 | 0) != 0) {
  __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i9, i13 | 0, i8, 0, 0, 0);
  _memcpy(i6 | 0, i9 | 0, 32) | 0;
 }
 __ZN7WebCore12EventHandler36dispatchFakeMouseMoveEventSoonInQuadERKNS_9FloatQuadE(HEAP32[i5 + 472 >> 2] | 0, i8);
 do {
  if ((HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 88 | 0] & 1) == 0) {
   i20 = 20;
  } else {
   i8 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i20 = 20;
    break;
   }
   if ((HEAP32[i8 + 48 >> 2] | 0) == 0) {
    i20 = 20;
   }
  }
 } while (0);
 if ((i20 | 0) == 20) {
  i20 = HEAP32[i11 >> 2] | 0;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i10, i2);
  __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i20, i13, i10, 0);
 }
 i10 = HEAP32[i11 >> 2] | 0;
 do {
  if ((HEAP32[i10 + 20 >> 2] & 128 | 0) == 0) {
   i13 = HEAP32[i10 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   i20 = HEAP32[(HEAP32[i13 + 20 >> 2] | 0) + 8 >> 2] | 0;
   __ZN7WebCore18DocumentEventQueue28enqueueOrDispatchScrollEventERNS_4NodeE(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 304 >> 2] & 63](i20) | 0, i13);
  }
 } while (0);
 do {
  if (!((HEAP32[__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE >> 2] | 0) == 0 | (i5 | 0) == 0)) {
   i10 = __ZN7WebCore24InspectorInstrumentation26instrumentingAgentsForPageEPNS_4PageE(HEAP32[i5 + 32 >> 2] | 0) | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   __ZN7WebCore24InspectorInstrumentation18didScrollLayerImplEPNS_19InstrumentingAgentsE(i10);
  }
 } while (0);
 i10 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[i10 + 20 >> 2] & 66048 | 0) != 66048) {
  STACKTOP = i4;
  return;
 }
 i11 = HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 48 >> 2] | 0;
 do {
  if ((i11 & 7168 | 0) != 2048) {
   if (((i11 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   if ((i11 & 57344 | 0) == 16384) {
    break;
   }
   if (((i11 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 i11 = HEAP32[i5 + 84 >> 2] | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 472 >> 2] & 15](i11);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer45updateDescendantsAreContiguousInStackingOrderEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 48 | 0;
 i8 = i2 + 56 | 0;
 i9 = i2 + 72 | 0;
 i10 = i2 + 80 | 0;
 i11 = i2 + 88 | 0;
 i12 = i2 + 104 | 0;
 i13 = i2 + 112 | 0;
 i14 = i2 + 120 | 0;
 i15 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
  STACKTOP = i2;
  return;
 }
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = 0;
 i16 = i4 | 0;
 HEAP32[i16 >> 2] = 0;
 __ZN7WebCore11RenderLayer18rebuildZOrderListsENS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, 0, i3, i4);
 _memset(i5 | 0, 0, 20) | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 L8 : do {
  if ((i4 | 0) == 0) {
   i17 = 0;
  } else {
   i16 = i4 + 8 | 0;
   i3 = HEAP32[i16 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i17 = i4;
    break;
   }
   i18 = i4 | 0;
   i19 = i5 | 0;
   i20 = i8 + 8 | 0;
   i21 = i8 | 0;
   i22 = 0;
   i23 = -1;
   i24 = i3;
   while (1) {
    i25 = i3 - i22 - 1 | 0;
    if (i24 >>> 0 <= i25 >>> 0) {
     break;
    }
    i26 = HEAP32[(HEAP32[i18 >> 2] | 0) + (i25 << 2) >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i26 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i27 = 11;
    } else {
     if ((HEAP8[i26 + 21 | 0] & 16) == 0) {
      i28 = i23;
     } else {
      i27 = 11;
     }
    }
    do {
     if ((i27 | 0) == 11) {
      i27 = 0;
      HEAP32[i6 >> 2] = i26;
      i25 = i23 - 1 | 0;
      HEAP32[i7 >> 2] = i23;
      __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES4_iEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i8, i19, i6, i7);
      if ((HEAP8[i20] & 1) != 0) {
       i28 = i25;
       break;
      }
      HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] = HEAP32[i7 >> 2];
      i28 = i25;
     }
    } while (0);
    i26 = i22 + 1 | 0;
    if (i26 >>> 0 >= i3 >>> 0) {
     i17 = i4;
     break L8;
    }
    i22 = i26;
    i23 = i28;
    i24 = HEAP32[i16 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i28 = HEAP32[i15 >> 2] | 0;
 L23 : do {
  if ((i28 | 0) == 0) {
   i29 = 0;
  } else {
   i4 = i28 + 8 | 0;
   i7 = HEAP32[i4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i29 = i28;
    break;
   }
   i6 = i28 | 0;
   i8 = i5 | 0;
   i16 = i11 + 8 | 0;
   i24 = i11 | 0;
   i23 = 1;
   i22 = 0;
   i3 = i7;
   while (1) {
    if (i3 >>> 0 <= i22 >>> 0) {
     break;
    }
    i21 = HEAP32[(HEAP32[i6 >> 2] | 0) + (i22 << 2) >> 2] | 0;
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i21 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i27 = 22;
    } else {
     if ((HEAP8[i21 + 21 | 0] & 16) == 0) {
      i30 = i23;
     } else {
      i27 = 22;
     }
    }
    do {
     if ((i27 | 0) == 22) {
      i27 = 0;
      HEAP32[i9 >> 2] = i21;
      i20 = i23 + 1 | 0;
      HEAP32[i10 >> 2] = i23;
      __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES4_iEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i11, i8, i9, i10);
      if ((HEAP8[i16] & 1) != 0) {
       i30 = i20;
       break;
      }
      HEAP32[(HEAP32[i24 >> 2] | 0) + 4 >> 2] = HEAP32[i10 >> 2];
      i30 = i20;
     }
    } while (0);
    i21 = i22 + 1 | 0;
    if (i21 >>> 0 >= i7 >>> 0) {
     i29 = i28;
     break L23;
    }
    i23 = i30;
    i22 = i21;
    i3 = HEAP32[i4 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 HEAP32[i12 >> 2] = 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i14 >> 2] = 0;
 __ZN7WebCore11RenderLayer54updateDescendantsAreContiguousInStackingOrderRecursiveERKN3WTF7HashMapIPKS0_iNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IiEEEERiSD_SD_b(i1, i5, i12, i13, i14, 1);
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) != 0) {
  __ZN3WTF8fastFreeEPv(i14);
 }
 if ((i17 | 0) == 0) {
  i31 = i29;
 } else {
  i29 = i17 + 8 | 0;
  if ((HEAP32[i29 >> 2] | 0) != 0) {
   HEAP32[i29 >> 2] = 0;
  }
  i29 = i17 | 0;
  i14 = HEAP32[i29 >> 2] | 0;
  if ((i14 | 0) != 0) {
   HEAP32[i29 >> 2] = 0;
   HEAP32[i17 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i14);
  }
  __ZN3WTF8fastFreeEPv(i17);
  i31 = HEAP32[i15 >> 2] | 0;
 }
 if ((i31 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i15 = i31 + 8 | 0;
 if ((HEAP32[i15 >> 2] | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
 }
 i15 = i31 | 0;
 i17 = HEAP32[i15 >> 2] | 0;
 if ((i17 | 0) != 0) {
  HEAP32[i15 >> 2] = 0;
  HEAP32[i31 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i17);
 }
 __ZN3WTF8fastFreeEPv(i31);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderLayer21paintOverflowControlsEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i1 + 32 | 0;
 if ((HEAP32[(HEAP32[i11 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i12 = i1 | 0;
 if ((__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i12) | 0) ^ 1 | i5) {
  do {
   if (i5) {
    if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i12) | 0) {
     i13 = i3;
     i14 = HEAP32[i13 + 4 >> 2] | 0;
     HEAP32[i8 >> 2] = HEAP32[i13 >> 2];
     HEAP32[i8 + 4 >> 2] = i14;
     i15 = i1 + 152 | 0;
     break;
    } else {
     STACKTOP = i6;
     return;
    }
   } else {
    i15 = i3;
   }
  } while (0);
  i12 = i15;
  i15 = HEAP32[i12 >> 2] | 0;
  i5 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = i15;
  HEAP32[i8 + 4 >> 2] = i5;
  HEAP32[i10 >> 2] = i15;
  HEAP32[i10 + 4 >> 2] = i5;
  __ZN7WebCore11RenderLayer24positionOverflowControlsERKNS_7IntSizeE(i1, i10);
  i10 = HEAP32[i1 + 128 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    i5 = HEAP32[i1 + 208 >> 2] | 0;
    if ((i5 | 0) != 0) {
     if ((HEAP32[i5 + 36 >> 2] | 0) != 0) {
      break;
     }
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 15](i10, i2, i4);
   }
  } while (0);
  i10 = HEAP32[i1 + 132 >> 2] | 0;
  i5 = i1 + 208 | 0;
  do {
   if ((i10 | 0) != 0) {
    i15 = HEAP32[i5 >> 2] | 0;
    if ((i15 | 0) != 0) {
     if ((HEAP32[i15 + 40 >> 2] | 0) != 0) {
      break;
     }
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 12 >> 2] & 15](i10, i2, i4);
   }
  } while (0);
  i10 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i10 | 0) != 0) {
    if ((HEAP32[i10 + 44 >> 2] | 0) == 0) {
     break;
    }
    STACKTOP = i6;
    return;
   }
  } while (0);
  __ZN7WebCore11RenderLayer17paintScrollCornerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i1, i2, i9, i4);
  __ZN7WebCore11RenderLayer12paintResizerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i1, i2, i9, i4);
  STACKTOP = i6;
  return;
 }
 i9 = i3;
 i2 = i1 + 152 | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = i10;
 do {
  if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
   i10 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 + 36 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
   i10 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i10 + 40 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = i7;
 i2 = i4;
 HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i10 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i10 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i10 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 i2 = HEAP32[i3 + 4 >> 2] | 0;
 i10 = i7 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - (HEAP32[i3 >> 2] | 0);
 i3 = i7 + 4 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i2;
 if (!(__ZNK7WebCore11RenderLayer29overflowControlsIntersectRectERKNS_7IntRectE(i1, i7) | 0)) {
  STACKTOP = i6;
  return;
 }
 L43 : do {
  if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
   L45 : do {
    if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
     i7 = i1;
     while (1) {
      i2 = HEAP32[i7 + 36 >> 2] | 0;
      if ((i2 | 0) == 0) {
       i16 = 25;
       break L43;
      }
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
       i17 = i2;
       break L45;
      }
      if ((HEAP8[i2 + 21 | 0] & 20) == 0) {
       i7 = i2;
      } else {
       i17 = i2;
       break;
      }
     }
    } else {
     i7 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i7 | 0) == 0) {
      i16 = 25;
      break L43;
     } else {
      i17 = i7;
     }
    }
   } while (0);
   if ((HEAP32[i17 + 208 >> 2] | 0) == 0) {
    i18 = i17;
   } else {
    i19 = i17;
    i16 = 24;
    break;
   }
   while (1) {
    L54 : do {
     if ((HEAP8[i18 + 20 | 0] & 16) == 0) {
      i7 = i18;
      while (1) {
       i2 = HEAP32[i7 + 36 >> 2] | 0;
       if ((i2 | 0) == 0) {
        i16 = 25;
        break L43;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
        i20 = i2;
        break L54;
       }
       if ((HEAP8[i2 + 21 | 0] & 20) == 0) {
        i7 = i2;
       } else {
        i21 = i2;
        i16 = 19;
        break;
       }
      }
     } else {
      i21 = HEAP32[i18 + 36 >> 2] | 0;
      i16 = 19;
     }
    } while (0);
    if ((i16 | 0) == 19) {
     i16 = 0;
     if ((i21 | 0) == 0) {
      i16 = 25;
      break L43;
     } else {
      i20 = i21;
     }
    }
    if ((HEAP32[i20 + 208 >> 2] | 0) == 0) {
     i18 = i20;
    } else {
     i22 = i20;
     break;
    }
   }
  } else {
   i19 = i1;
   i16 = 24;
  }
 } while (0);
 if ((i16 | 0) == 24) {
  if ((i19 | 0) == 0) {
   i16 = 25;
  } else {
   i22 = i19;
  }
 }
 if ((i16 | 0) == 25) {
  i22 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0;
 }
 i11 = i22 + 23 | 0;
 HEAP8[i11] = HEAP8[i11] | -128;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderLayer25hitTestFlowThreadIfRegionEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, d42 = +0, i43 = 0, i44 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 16 | 0;
 i13 = i9 + 24 | 0;
 i14 = i9 + 32 | 0;
 i15 = i9 + 40 | 0;
 i16 = i9 + 48 | 0;
 i17 = i9 + 56 | 0;
 i18 = i9 + 64 | 0;
 i19 = i9 + 72 | 0;
 i20 = i9 + 80 | 0;
 i21 = i9 + 88 | 0;
 i22 = i9 + 96 | 0;
 i23 = i9 + 104 | 0;
 i24 = i9 + 112 | 0;
 i25 = i9 + 120 | 0;
 i26 = i9 + 128 | 0;
 i27 = i9 + 136 | 0;
 i28 = i9 + 208 | 0;
 i29 = i1 + 32 | 0;
 i30 = HEAP32[i29 >> 2] | 0;
 if ((HEAP32[i30 + 24 >> 2] & 32 | 0) == 0) {
  i31 = 0;
  STACKTOP = i9;
  return i31 | 0;
 }
 i32 = HEAP32[i30 + 100 >> 2] | 0;
 if ((i32 | 0) == 0) {
  i31 = 0;
  STACKTOP = i9;
  return i31 | 0;
 }
 if ((HEAP32[i32 + 28 >> 2] | 0) == 0) {
  i31 = 0;
  STACKTOP = i9;
  return i31 | 0;
 }
 i30 = HEAP32[i32 + 28 >> 2] | 0;
 i32 = i30 | 0;
 if ((HEAP8[i30 + 160 | 0] & 1) == 0) {
  i31 = 0;
  STACKTOP = i9;
  return i31 | 0;
 }
 i33 = HEAP32[i30 + 116 >> 2] | 0;
 i34 = i24 | 0;
 HEAP32[i34 >> 2] = 0;
 i35 = i24 + 4 | 0;
 HEAP32[i35 >> 2] = 0;
 if (!((i2 | 0) == (i1 | 0) | (i1 | 0) == 0)) {
  i36 = i1;
  while (1) {
   i36 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i36, i2, i24, 0) | 0;
   if ((i36 | 0) == 0 | (i36 | 0) == (i2 | 0)) {
    break;
   }
  }
 }
 i2 = i30 + 124 | 0;
 i36 = HEAP32[i2 >> 2] | 0;
 i24 = HEAP32[i2 + 4 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[i33 + 36 >> 2] | 0) + 44 >> 2] | 0) >>> 13 & 3;
 if ((i2 | 0) == 3) {
  i1 = HEAP32[i33 + 56 >> 2] | 0;
  __ZNK7WebCore9RenderBox12clientHeightEv(i21, i30 | 0);
  i37 = i30 | 0;
  i38 = i30;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 704 >> 2] & 31](i22, i37);
  i39 = HEAP32[i21 >> 2] | 0;
  i21 = HEAP32[i22 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i38 >> 2] | 0) + 708 >> 2] & 31](i23, i37);
  i40 = i36;
  i41 = i1 - i24 - i39 + i21 + (HEAP32[i23 >> 2] | 0) | 0;
 } else if ((i2 | 0) == 1) {
  i2 = HEAP32[i33 + 52 >> 2] | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i18, i30 | 0);
  i23 = i30 | 0;
  i21 = i30;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 712 >> 2] & 31](i19, i23);
  i30 = HEAP32[i18 >> 2] | 0;
  i18 = HEAP32[i19 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i21 >> 2] | 0) + 716 >> 2] & 31](i20, i23);
  i40 = i2 - i36 - i30 + i18 + (HEAP32[i20 >> 2] | 0) | 0;
  i41 = i24;
 } else {
  i40 = i36;
  i41 = i24;
 }
 i24 = HEAP32[i29 >> 2] | 0;
 i29 = i24;
 i36 = i24;
 i20 = i24;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 744 >> 2] & 63](i36) | 0;
 i30 = i24;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 712 >> 2] & 31](i16, i36);
 i24 = HEAP32[i16 >> 2] | 0;
 i16 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i20 >> 2] | 0) + 736 >> 2] & 63](i36) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 704 >> 2] & 31](i17, i36);
 i20 = HEAP32[i17 >> 2] | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i10, i29);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 712 >> 2] & 31](i11, i36);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 716 >> 2] & 31](i12, i36);
 __ZNK7WebCore9RenderBox12clientHeightEv(i13, i29);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 704 >> 2] & 31](i14, i36);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 708 >> 2] & 31](i15, i36);
 i36 = i41 - i16 - i20 - (HEAP32[i35 >> 2] | 0) | 0;
 i35 = i25 | 0;
 HEAP32[i35 >> 2] = i40 - i18 - i24 - (HEAP32[i34 >> 2] | 0);
 i34 = i25 + 4 | 0;
 HEAP32[i34 >> 2] = i36;
 HEAP32[i26 >> 2] = HEAP32[i3 >> 2] | 288;
 __ZN7WebCore15HitTestLocationC1ERKS0_RKNS_10LayoutSizeEPNS_12RenderRegionE(i27, i6, i25, i32);
 i32 = i28;
 i25 = i5;
 HEAP32[i32 >> 2] = HEAP32[i25 >> 2];
 HEAP32[i32 + 4 >> 2] = HEAP32[i25 + 4 >> 2];
 HEAP32[i32 + 8 >> 2] = HEAP32[i25 + 8 >> 2];
 HEAP32[i32 + 12 >> 2] = HEAP32[i25 + 12 >> 2];
 i25 = HEAP32[i35 >> 2] | 0;
 i35 = HEAP32[i34 >> 2] | 0;
 i34 = i28 | 0;
 HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + i25;
 i34 = i28 + 4 | 0;
 HEAP32[i34 >> 2] = (HEAP32[i34 >> 2] | 0) + i35;
 d42 = +Math_abs(+(+(i25 | 0)));
 do {
  if (d42 < +2147483647) {
   if (d42 <= +-2147483648) {
    i43 = -2147483648;
    break;
   }
   i43 = ~~d42;
  } else {
   i43 = 2147483647;
  }
 } while (0);
 d42 = +Math_abs(+(+(i35 | 0)));
 do {
  if (d42 < +2147483647) {
   if (d42 <= +-2147483648) {
    i44 = -2147483648;
    break;
   }
   i44 = ~~d42;
  } else {
   i44 = 2147483647;
  }
 } while (0);
 i35 = i28 + 8 | 0;
 HEAP32[i35 >> 2] = (HEAP32[i35 >> 2] | 0) + i43;
 i43 = i28 + 12 | 0;
 HEAP32[i43 >> 2] = (HEAP32[i43 >> 2] | 0) + i44;
 i44 = HEAP32[i33 + 40 >> 2] | 0;
 i33 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i44, i44, 0, i26, i4, i28, i27, 0, i7, i8) | 0;
 __ZN7WebCore15HitTestLocationD1Ev(i27);
 i31 = i33;
 STACKTOP = i9;
 return i31 | 0;
}
function __ZN7WebCore11RenderLayer34paintTransformedLayerIntoFragmentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i6 = i5 | 0;
 i7 = i5 + 120 | 0;
 i8 = i5 + 128 | 0;
 i9 = i5 + 144 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 20 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i16 = i6 + 12 | 0;
 i17 = i6 | 0;
 HEAP32[i17 >> 2] = i16;
 i18 = i6 + 4 | 0;
 HEAP32[i18 >> 2] = 1;
 i19 = i6 + 8 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i7 | 0;
 HEAP32[i20 >> 2] = 0;
 i21 = i7 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i1 + 188 | 0;
 __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i8, i1, HEAP32[i22 >> 2] | 0, 0, 1, HEAP32[i3 + 40 >> 2] | 0);
 i23 = i3 | 0;
 i24 = i3 + 32 | 0;
 i25 = i3 + 8 | 0;
 i26 = (i4 & 4 | 0) != 0 ? 5 : 0;
 i27 = i4 >>> 9 & 1 ^ 1;
 __ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_(HEAP32[i22 >> 2] | 0, i6, HEAP32[i23 >> 2] | 0, HEAP32[i24 >> 2] | 0, i25, i26, 0, i27, i7, i8);
 do {
  if ((HEAP32[i19 >> 2] | 0) != 0) {
   i8 = i9;
   i6 = i1 + 36 | 0;
   i28 = i15;
   i29 = i15 + 16 | 0;
   i30 = i9 + 8 | 0;
   i31 = i25;
   i32 = i3 + 16 | 0;
   i33 = i12 | 0;
   i34 = i12 + 4 | 0;
   i35 = i12 + 8 | 0;
   i36 = i12 + 12 | 0;
   i37 = i12 + 16 | 0;
   i38 = i13;
   i39 = i14;
   i40 = i13 | 0;
   i41 = i13 + 4 | 0;
   i42 = 0;
   while (1) {
    i43 = HEAP32[i17 >> 2] | 0;
    i44 = i43 + (i42 * 104 & -1) + 20 | 0;
    HEAP32[i8 >> 2] = HEAP32[i44 >> 2];
    HEAP32[i8 + 4 >> 2] = HEAP32[i44 + 4 >> 2];
    HEAP32[i8 + 8 >> 2] = HEAP32[i44 + 8 >> 2];
    HEAP32[i8 + 12 >> 2] = HEAP32[i44 + 12 >> 2];
    i44 = HEAP32[i6 >> 2] | 0;
    i45 = HEAP32[i22 >> 2] | 0;
    if ((i44 | 0) == (i45 | 0)) {
     i46 = i44;
    } else {
     i44 = HEAP32[i23 >> 2] | 0;
     if ((i44 | 0) == (i45 | 0) | (i45 | 0) == 0) {
      i47 = i45;
     } else {
      i48 = i45;
      while (1) {
       i48 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i48, i44, i7, 0) | 0;
       if ((i48 | 0) == 0 | (i48 | 0) == (i44 | 0)) {
        break;
       }
      }
      i47 = HEAP32[i22 >> 2] | 0;
     }
     i44 = HEAP32[i24 >> 2] | 0;
     HEAP32[i33 >> 2] = i47;
     HEAP32[i34 >> 2] = i44;
     HEAP32[i35 >> 2] = i26;
     HEAP32[i36 >> 2] = 0;
     HEAP32[i37 >> 2] = i27;
     __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i14, i1, i12);
     HEAP32[i38 >> 2] = HEAP32[i39 >> 2];
     HEAP32[i38 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
     HEAP32[i38 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
     HEAP32[i38 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
     i44 = (HEAP32[i21 >> 2] | 0) + (HEAP32[i43 + (i42 * 104 & -1) + 84 >> 2] | 0) | 0;
     HEAP32[i40 >> 2] = (HEAP32[i20 >> 2] | 0) + (HEAP32[i43 + (i42 * 104 & -1) + 80 >> 2] | 0) + (HEAP32[i40 >> 2] | 0);
     HEAP32[i41 >> 2] = i44 + (HEAP32[i41 >> 2] | 0);
     __ZN7WebCore10LayoutRect9intersectERKS0_(i11, i13);
     i46 = HEAP32[i6 >> 2] | 0;
    }
    i44 = HEAP32[i23 >> 2] | 0;
    HEAP32[i28 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i28 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
    HEAP32[i28 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
    HEAP32[i28 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
    HEAP8[i29] = 0;
    __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i46, i44, i2, i25, i15, 0);
    __ZN7WebCore11RenderLayer29paintLayerByApplyingTransformEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKNS_11LayoutPointE(i1, i2, i3, i4, i43 + (i42 * 104 & -1) + 80 | 0);
    i44 = HEAP32[i30 + 4 >> 2] | 0;
    do {
     if ((HEAP32[i10 >> 2] | 0) == (HEAP32[i31 >> 2] | 0) & (HEAP32[i10 + 4 >> 2] | 0) == (HEAP32[i31 + 4 >> 2] | 0)) {
      if ((HEAP32[i30 >> 2] | 0) != (HEAP32[i32 >> 2] | 0)) {
       i49 = 11;
       break;
      }
      if ((i44 | 0) != (HEAP32[i32 + 4 >> 2] | 0)) {
       i49 = 11;
      }
     } else {
      i49 = 11;
     }
    } while (0);
    if ((i49 | 0) == 11) {
     i49 = 0;
     __ZN7WebCore15GraphicsContext7restoreEv(i2);
    }
    i42 = i42 + 1 | 0;
    i50 = HEAP32[i19 >> 2] | 0;
    if (i42 >>> 0 >= i50 >>> 0) {
     break;
    }
   }
   if ((i50 | 0) == 0) {
    break;
   }
   HEAP32[i19 >> 2] = 0;
  }
 } while (0);
 i19 = HEAP32[i17 >> 2] | 0;
 if ((i16 | 0) == (i19 | 0) | (i19 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i17 >> 2] = 0;
 HEAP32[i18 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i19 | 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCoreL41expandClipRectForDescendantsAndReflectionERNS_10LayoutRectEPKNS_11RenderLayerES4_NS_27TransparencyClipBoxBehaviorEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 40 | 0;
 i13 = i6 + 48 | 0;
 i14 = i6 + 56 | 0;
 i15 = i6 + 64 | 0;
 i16 = i6 + 80 | 0;
 i17 = i6 + 88 | 0;
 i18 = i6 + 104 | 0;
 i19 = i6 + 112 | 0;
 i20 = i2 + 32 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = HEAP32[(HEAP32[i21 + 36 >> 2] | 0) + 20 >> 2] | 0;
 i23 = i22 + 116 | 0;
 while (1) {
  if ((HEAP32[i23 + 4 >> 2] | 0) != 0) {
   i24 = i21;
   break;
  }
  i25 = HEAP32[i23 >> 2] | 0;
  if ((i25 | 0) == 0) {
   i26 = 4;
   break;
  } else {
   i23 = i25;
  }
 }
 do {
  if ((i26 | 0) == 4) {
   if ((HEAP32[(HEAP32[i22 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    i24 = i21;
    break;
   }
   i23 = HEAP32[i2 + 48 >> 2] | 0;
   if ((i23 | 0) == 0) {
    i24 = i21;
    break;
   }
   i25 = i2 + 176 | 0;
   i27 = i23;
   while (1) {
    i23 = HEAP32[i25 >> 2] | 0;
    if ((i23 | 0) == 0) {
     i26 = 9;
    } else {
     if ((HEAP32[i23 + 40 >> 2] | 0) != (i27 | 0)) {
      i26 = 9;
     }
    }
    if ((i26 | 0) == 9) {
     i26 = 0;
     __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i17, i27, i3, i4, 0, i5);
     __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i17);
    }
    i27 = HEAP32[i27 + 44 >> 2] | 0;
    if ((i27 | 0) == 0) {
     break;
    }
   }
   i24 = HEAP32[i20 >> 2] | 0;
  }
 } while (0);
 do {
  if ((HEAP32[i24 + 24 >> 2] & 32 | 0) == 0) {
   i28 = i24;
  } else {
   i17 = HEAP32[i24 + 100 >> 2] | 0;
   if ((i17 | 0) == 0) {
    i28 = i24;
    break;
   }
   if ((HEAP32[i17 + 28 >> 2] | 0) == 0) {
    i28 = i24;
    break;
   }
   i26 = HEAP32[i17 + 28 >> 2] | 0;
   i17 = HEAP32[(HEAP32[i26 + 116 >> 2] | 0) + 40 >> 2] | 0;
   i21 = HEAP32[i2 + 176 >> 2] | 0;
   if ((i21 | 0) != 0) {
    if ((HEAP32[i21 + 40 >> 2] | 0) == (i17 | 0)) {
     i28 = i24;
     break;
    }
   }
   __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i15, i17, i3, i4, 0, i5);
   i21 = i16 | 0;
   HEAP32[i21 >> 2] = 0;
   i22 = i16 + 4 | 0;
   HEAP32[i22 >> 2] = 0;
   if (!((i17 | 0) == (i2 | 0) | (i2 | 0) == 0)) {
    i27 = i2;
    while (1) {
     i27 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i27, i17, i16, 0) | 0;
     if ((i27 | 0) == 0 | (i27 | 0) == (i17 | 0)) {
      break;
     }
    }
   }
   i17 = i24;
   i27 = i24;
   i25 = i24;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 744 >> 2] & 63](i27) | 0;
   i29 = i24;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 712 >> 2] & 31](i13, i27);
   i30 = (HEAP32[i13 >> 2] | 0) + i23 | 0;
   i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 736 >> 2] & 63](i27) | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 704 >> 2] & 31](i14, i27);
   i25 = (HEAP32[i14 >> 2] | 0) + i23 | 0;
   __ZNK7WebCore9RenderBox11clientWidthEv(i7, i17);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 712 >> 2] & 31](i8, i27);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 716 >> 2] & 31](i9, i27);
   __ZNK7WebCore9RenderBox12clientHeightEv(i10, i17);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 704 >> 2] & 31](i11, i27);
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i29 >> 2] | 0) + 708 >> 2] & 31](i12, i27);
   i27 = i26 + 124 | 0;
   i29 = i25 + (HEAP32[i22 >> 2] | 0) - (HEAP32[i27 + 4 >> 2] | 0) | 0;
   i25 = i15 | 0;
   HEAP32[i25 >> 2] = i30 + (HEAP32[i21 >> 2] | 0) - (HEAP32[i27 >> 2] | 0) + (HEAP32[i25 >> 2] | 0);
   i25 = i15 + 4 | 0;
   HEAP32[i25 >> 2] = i29 + (HEAP32[i25 >> 2] | 0);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i15);
   i28 = HEAP32[i20 >> 2] | 0;
  }
 } while (0);
 if ((HEAP32[i28 + 20 >> 2] & 262144 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i28 = i18 | 0;
 HEAP32[i28 >> 2] = 0;
 i15 = i18 + 4 | 0;
 HEAP32[i15 >> 2] = 0;
 if ((i3 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  i31 = 0;
  i32 = 0;
 } else {
  i12 = i2;
  while (1) {
   i12 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i12, i3, i18, 0) | 0;
   if ((i12 | 0) == 0 | (i12 | 0) == (i3 | 0)) {
    break;
   }
  }
  i31 = HEAP32[i28 >> 2] | 0;
  i32 = HEAP32[i15 >> 2] | 0;
 }
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i31;
 i31 = i1 + 4 | 0;
 HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) - i32;
 i32 = HEAP32[i20 >> 2] | 0;
 if ((HEAP32[i32 + 20 >> 2] & 512 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = i32;
 }
 __ZNK7WebCore9RenderBox13reflectedRectERKNS_10LayoutRectE(i19, i33, i1);
 __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i19);
 i19 = HEAP32[i15 >> 2] | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + (HEAP32[i28 >> 2] | 0);
 HEAP32[i31 >> 2] = (HEAP32[i31 >> 2] | 0) + i19;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderLayer23hitTestOverflowControlsERNS_13HitTestResultERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 + 128 | 0;
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
    break;
   }
   i10 = i1 + 32 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   do {
    if ((HEAP32[i11 + 20 >> 2] & 65536 | 0) == 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 140 >> 2] & 63](i11 | 0) | 0) {
      i12 = HEAP32[i10 >> 2] | 0;
      break;
     } else {
      i13 = 0;
      STACKTOP = i4;
      return i13 | 0;
     }
    } else {
     i12 = i11;
    }
   } while (0);
   if ((HEAP32[(HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
    i13 = 0;
   } else {
    break;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i12 = i1 + 32 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = i11;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
   i15 = 0;
   i16 = 0;
  } else {
   i10 = HEAP32[i14 + 52 >> 2] | 0;
   i17 = HEAP32[i14 + 56 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   i18 = i6 + 8 | 0;
   HEAP32[i18 >> 2] = i10;
   HEAP32[i18 + 4 >> 2] = i17;
   __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i5, i1, i8);
   i17 = HEAP32[i5 >> 2] | 0;
   i18 = HEAP32[i5 + 4 >> 2] | 0;
   i10 = HEAP32[i5 + 8 >> 2] | 0;
   i19 = HEAP32[i5 + 12 >> 2] | 0;
   i20 = HEAP32[i3 >> 2] | 0;
   i21 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i17 | 0) > (i20 | 0)) {
    i15 = i10;
    i16 = i19;
    break;
   }
   if ((i10 + i17 | 0) <= (i20 | 0) | (i18 | 0) > (i21 | 0)) {
    i15 = i10;
    i16 = i19;
    break;
   }
   if ((i19 + i18 | 0) > (i21 | 0)) {
    i13 = 1;
   } else {
    i15 = i10;
    i16 = i19;
    break;
   }
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i5 = (i16 | 0) < 0 ? 0 : i16;
 i16 = i1 + 132 | 0;
 i1 = HEAP32[i16 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   if (!(__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(i1) | 0)) {
    break;
   }
   i8 = HEAP32[i14 + 52 >> 2] | 0;
   i6 = HEAP32[i12 >> 2] | 0;
   i7 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 748 >> 2] & 63](i6) | 0) | 0;
   i6 = HEAP32[i16 >> 2] | 0;
   i8 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 63](i6) | 0) | 0;
   i6 = i14 | 0;
   i7 = i14;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 736 >> 2] & 63](i6) | 0;
   i19 = HEAP32[i16 >> 2] | 0;
   i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 104 >> 2] & 63](i19) | 0;
   i19 = HEAP32[i14 + 56 >> 2] | 0;
   i21 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 736 >> 2] & 63](i6) | 0;
   i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 740 >> 2] & 63](i6) | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i22 = i5;
   } else {
    i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 108 >> 2] & 63](i6) | 0;
   }
   i6 = HEAP32[i3 >> 2] | 0;
   i7 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i6 | 0) < (i8 | 0)) {
    break;
   }
   if ((i6 | 0) >= (i10 + i8 | 0) | (i7 | 0) < (i11 | 0)) {
    break;
   }
   if ((i7 | 0) >= (i19 + i11 - i21 - i18 - i22 | 0)) {
    break;
   }
   __ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE(i2, HEAP32[i16 >> 2] | 0);
   i13 = 1;
   STACKTOP = i4;
   return i13 | 0;
  }
 } while (0);
 i22 = HEAP32[i9 >> 2] | 0;
 if ((i22 | 0) == 0) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 if (!(__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(i22) | 0)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 i22 = HEAP32[i12 >> 2] | 0;
 i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 744 >> 2] & 63](i22) | 0;
 i22 = HEAP32[i14 + 56 >> 2] | 0;
 i5 = i14 | 0;
 i1 = i14;
 i18 = i22 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 740 >> 2] & 63](i5) | 0) | 0;
 i22 = HEAP32[i9 >> 2] | 0;
 i21 = i18 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i22 >> 2] | 0) + 108 >> 2] & 63](i22) | 0) | 0;
 i22 = HEAP32[i14 + 52 >> 2] | 0;
 i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 63](i5) | 0;
 i18 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 748 >> 2] & 63](i5) | 0;
 i5 = HEAP32[i16 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i23 = (i15 | 0) < 0 ? 0 : i15;
 } else {
  i23 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 104 >> 2] & 63](i5) | 0;
 }
 i5 = HEAP32[i9 >> 2] | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 63](i5) | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 i16 = HEAP32[i3 + 4 >> 2] | 0;
 if ((i5 | 0) < (i12 | 0)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 if ((i5 | 0) >= (i22 + i12 - i14 - i18 - i23 | 0) | (i16 | 0) < (i21 | 0)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 if ((i16 | 0) >= (i15 + i21 | 0)) {
  i13 = 0;
  STACKTOP = i4;
  return i13 | 0;
 }
 __ZN7WebCore13HitTestResult12setScrollbarEPNS_9ScrollbarE(i2, HEAP32[i9 >> 2] | 0);
 i13 = 1;
 STACKTOP = i4;
 return i13 | 0;
}
function __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = i9 | 0;
 i11 = i9;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = i1;
 _memset(i16 | 0, 0, 16) | 0;
 i17 = i2 + 32 | 0;
 i2 = HEAP32[i17 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 1024 | 0) == 0) {
   i18 = 4;
  } else {
   if ((HEAP32[i2 + 24 >> 2] & 4 | 0) == 0) {
    i18 = 4;
    break;
   }
   __ZNK7WebCore12RenderInline30linesVisualOverflowBoundingBoxEv(i5, i2);
   i19 = i5;
   HEAP32[i16 >> 2] = HEAP32[i19 >> 2];
   HEAP32[i16 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
   HEAP32[i16 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
   HEAP32[i16 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
  }
 } while (0);
 L4 : do {
  if ((i18 | 0) == 4) {
   i5 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 200 >> 2] & 63](i2 | 0) | 0;
   i19 = HEAP32[i17 >> 2] | 0;
   if (i5) {
    i5 = HEAP32[i19 + 28 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    i20 = i6 + 8 | 0;
    i21 = i19 + 88 | 0;
    i22 = i19 + 52 | 0;
    i23 = i9 + 8 | 0;
    i24 = i9;
    i25 = i5;
    while (1) {
     i5 = i25 + 52 | 0;
     i26 = HEAP32[i5 >> 2] | 0;
     i27 = HEAP32[i5 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     HEAP32[i7 + 4 >> 2] = 0;
     HEAP32[i20 >> 2] = i26;
     HEAP32[i20 + 4 >> 2] = i27;
     __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i8);
     i27 = HEAP32[i21 >> 2] | 0;
     if ((i27 | 0) == 0) {
      i26 = HEAP32[i22 >> 2] | 0;
      i5 = HEAP32[i22 + 4 >> 2] | 0;
      HEAP32[i10 >> 2] = 0;
      HEAP32[i10 + 4 >> 2] = 0;
      HEAP32[i23 >> 2] = i26;
      HEAP32[i23 + 4 >> 2] = i5;
      i28 = 0;
      i29 = 0;
     } else {
      i5 = i27 + 20 | 0;
      HEAP32[i24 >> 2] = HEAP32[i5 >> 2];
      HEAP32[i24 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
      HEAP32[i24 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
      HEAP32[i24 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
      i28 = HEAP32[i10 + 4 >> 2] | 0;
      i29 = HEAP32[i10 >> 2] | 0;
     }
     do {
      if ((HEAP32[i7 >> 2] | 0) != (i29 | 0) | (HEAP32[i7 + 4 >> 2] | 0) != (i28 | 0)) {
       i18 = 13;
      } else {
       if ((HEAP32[i20 >> 2] | 0) != (HEAP32[i23 >> 2] | 0)) {
        i18 = 13;
        break;
       }
       if ((HEAP32[i20 + 4 >> 2] | 0) != (HEAP32[i23 + 4 >> 2] | 0)) {
        i18 = 13;
       }
      }
     } while (0);
     if ((i18 | 0) == 13) {
      i18 = 0;
      __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i11);
     }
     i25 = HEAP32[i25 + 16 >> 2] | 0;
     if ((i25 | 0) == 0) {
      break L4;
     }
    }
   }
   if ((HEAP32[i19 + 20 >> 2] & 512 | 0) == 0) {
    i30 = 0;
   } else {
    i30 = i19;
   }
   do {
    if ((i3 & 16 | 0) == 0) {
     i25 = HEAP32[(HEAP32[i30 + 36 >> 2] | 0) + 20 >> 2] | 0;
     i23 = i25 + 116 | 0;
     while (1) {
      if ((HEAP32[i23 + 4 >> 2] | 0) != 0) {
       break;
      }
      i20 = HEAP32[i23 >> 2] | 0;
      if ((i20 | 0) == 0) {
       i18 = 21;
       break;
      } else {
       i23 = i20;
      }
     }
     if ((i18 | 0) == 21) {
      if ((HEAP32[(HEAP32[i25 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
       break;
      }
     }
     __ZN7WebCore9RenderBox12maskClipRectEv(i12, i30);
     i23 = i12;
     HEAP32[i16 >> 2] = HEAP32[i23 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i23 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i23 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i23 + 12 >> 2];
     __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i30, i1);
     break L4;
    }
   } while (0);
   i19 = i30 + 52 | 0;
   i23 = HEAP32[i19 >> 2] | 0;
   i20 = HEAP32[i19 + 4 >> 2] | 0;
   i19 = i1;
   HEAP32[i19 >> 2] = 0;
   HEAP32[i19 + 4 >> 2] = 0;
   i19 = i1 + 8 | 0;
   HEAP32[i19 >> 2] = i23;
   HEAP32[i19 + 4 >> 2] = i20;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i30 >> 2] | 0) + 824 >> 2] & 31](i15, i30);
   i19 = HEAP32[i14 >> 2] | 0;
   i24 = HEAP32[i14 + 4 >> 2] | 0;
   i22 = 0;
   do {
    if (!((i19 | 0) != 0 | (i24 >>> 0 > i22 >>> 0 | i24 >>> 0 == i22 >>> 0 & i19 >>> 0 > -1 >>> 0))) {
     i21 = i13 + 8 | 0;
     if ((i23 | 0) != (HEAP32[i21 >> 2] | 0)) {
      break;
     }
     if ((i20 | 0) == (HEAP32[i21 + 4 >> 2] | 0)) {
      break L4;
     }
    }
   } while (0);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i15);
  }
 } while (0);
 i15 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 176 >> 2] | 0;
 i17 = i1 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i15;
 i17 = i1 + 8 | 0;
 i13 = i15 << 1;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i13;
 i17 = i1 + 4 | 0;
 HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i15;
 i15 = i1 + 12 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i13;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer54updateDescendantsAreContiguousInStackingOrderRecursiveERKN3WTF7HashMapIPKS0_iNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IiEEEERiSD_SD_b(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 16 | 0;
 i11 = i1 + 32 | 0;
 i12 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] | 0;
 if ((i12 & 1 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = (HEAP8[i1 + 21 | 0] & 16) == 0;
 }
 if (i13 | i6) {
  i6 = HEAP32[i1 + 48 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i14 = i12;
  } else {
   i12 = i6;
   while (1) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    __ZN7WebCore11RenderLayer54updateDescendantsAreContiguousInStackingOrderRecursiveERKN3WTF7HashMapIPKS0_iNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IiEEEERiSD_SD_b(i12, i2, i8, i9, i10, 0);
    i6 = HEAP32[i10 >> 2] | 0;
    if ((i6 | 0) != 0) {
     HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i6;
     i6 = HEAP32[i8 >> 2] | 0;
     i13 = HEAP32[i3 >> 2] | 0;
     HEAP32[i3 >> 2] = (i6 | 0) < (i13 | 0) ? i6 : i13;
     i13 = HEAP32[i4 >> 2] | 0;
     i6 = HEAP32[i9 >> 2] | 0;
     HEAP32[i4 >> 2] = (i13 | 0) < (i6 | 0) ? i6 : i13;
    }
    i12 = HEAP32[i12 + 44 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
   }
   i14 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] | 0;
  }
  if ((i14 & 1 | 0) == 0) {
   STACKTOP = i7;
   return;
  }
  i14 = i1 + 21 | 0;
  i11 = HEAP8[i14] | 0;
  if ((i11 & 16) != 0) {
   STACKTOP = i7;
   return;
  }
  i12 = ((HEAP32[i4 >> 2] | 0) - (HEAP32[i3 >> 2] | 0) | 0) == (HEAP32[i5 >> 2] | 0);
  HEAP8[i14] = (i12 & 1) << 3 | i11 & -9;
  if ((i12 & 1 | 0) == ((i11 & 255) >>> 3 & 1 | 0)) {
   STACKTOP = i7;
   return;
  }
  __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i1);
  STACKTOP = i7;
  return;
 }
 i11 = i2 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i14 = i2 + 8 | 0;
 i2 = HEAP32[i14 >> 2] | 0;
 i9 = i1;
 i8 = i9 + ~(i9 << 15) | 0;
 i9 = (i8 >>> 10 ^ i8) * 9 & -1;
 i8 = i9 >>> 6 ^ i9;
 i9 = i8 + ~(i8 << 11) | 0;
 i8 = i9 >>> 16 ^ i9;
 i9 = i2 & i8;
 i10 = i12 + (i9 << 3) | 0;
 i13 = HEAP32[i10 >> 2] | 0;
 i6 = (i13 | 0) == (i1 | 0);
 L28 : do {
  if (i6) {
   i15 = i10;
  } else {
   i16 = (i8 >>> 23) + ~i8 | 0;
   i17 = i16 << 12 ^ i16;
   i16 = i17 >>> 7 ^ i17;
   i17 = i16 << 2 ^ i16;
   i16 = i17 >>> 20 ^ i17 | 1;
   i17 = 0;
   i18 = i9;
   i19 = i13;
   while (1) {
    if ((i19 | 0) == 0) {
     break;
    }
    i20 = (i17 | 0) == 0 ? i16 : i17;
    i21 = i20 + i18 & i2;
    i22 = i12 + (i21 << 3) | 0;
    i23 = HEAP32[i22 >> 2] | 0;
    if ((i23 | 0) == (i1 | 0)) {
     i15 = i22;
     break L28;
    } else {
     i17 = i20;
     i18 = i21;
     i19 = i23;
    }
   }
   STACKTOP = i7;
   return;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 L38 : do {
  if (i6) {
   i24 = i10;
   i25 = 14;
  } else {
   i15 = (i8 >>> 23) + ~i8 | 0;
   i19 = i15 << 12 ^ i15;
   i15 = i19 >>> 7 ^ i19;
   i19 = i15 << 2 ^ i15;
   i15 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i18 = i9;
   i17 = i13;
   while (1) {
    if ((i17 | 0) == 0) {
     i26 = 0;
     break L38;
    }
    i16 = (i19 | 0) == 0 ? i15 : i19;
    i23 = i16 + i18 & i2;
    i21 = i12 + (i23 << 3) | 0;
    i20 = HEAP32[i21 >> 2] | 0;
    if ((i20 | 0) == (i1 | 0)) {
     i24 = i21;
     i25 = 14;
     break;
    } else {
     i19 = i16;
     i18 = i23;
     i17 = i20;
    }
   }
  }
 } while (0);
 do {
  if ((i25 | 0) == 14) {
   if ((i24 | 0) == 0) {
    i26 = 0;
    break;
   }
   i26 = HEAP32[i24 + 4 >> 2] | 0;
  }
 } while (0);
 i24 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = (i26 | 0) < (i24 | 0) ? i26 : i24;
 i24 = HEAP32[i14 >> 2] | 0;
 i14 = HEAP32[i11 >> 2] | 0;
 L47 : do {
  if ((i14 | 0) == 0) {
   i27 = 0;
  } else {
   i11 = i24 & i8;
   i26 = i14 + (i11 << 3) | 0;
   i3 = HEAP32[i26 >> 2] | 0;
   if ((i3 | 0) == (i1 | 0)) {
    i28 = i26;
   } else {
    i26 = (i8 >>> 23) + ~i8 | 0;
    i25 = i26 << 12 ^ i26;
    i26 = i25 >>> 7 ^ i25;
    i25 = i26 << 2 ^ i26;
    i26 = i25 >>> 20 ^ i25 | 1;
    i25 = 0;
    i12 = i11;
    i11 = i3;
    while (1) {
     if ((i11 | 0) == 0) {
      i27 = 0;
      break L47;
     }
     i3 = (i25 | 0) == 0 ? i26 : i25;
     i2 = i3 + i12 & i24;
     i13 = i14 + (i2 << 3) | 0;
     i9 = HEAP32[i13 >> 2] | 0;
     if ((i9 | 0) == (i1 | 0)) {
      i28 = i13;
      break;
     } else {
      i25 = i3;
      i12 = i2;
      i11 = i9;
     }
    }
   }
   if ((i28 | 0) == 0) {
    i27 = 0;
    break;
   }
   i27 = HEAP32[i28 + 4 >> 2] | 0;
  }
 } while (0);
 i28 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = (i28 | 0) < (i27 | 0) ? i27 : i28;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderLayer15updateClipRectsERKNS0_16ClipRectsContextE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i2 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 + 148 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i9 = HEAP32[i8 + (((HEAP32[i2 + 16 >> 2] | 0) == 1 ? i6 + 3 | 0 : i6) << 2) >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i9 + 60 >> 2] & 2147483647 | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN3WTF8fastFreeEPv(i9);
   STACKTOP = i3;
   return;
  }
 } while (0);
 do {
  if ((HEAP32[i2 >> 2] | 0) == (i1 | 0)) {
   i10 = 0;
   i11 = 0;
  } else {
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i10 = 0;
    i11 = 0;
    break;
   }
   __ZN7WebCore11RenderLayer15updateClipRectsERKNS0_16ClipRectsContextE(i8, i2);
   i10 = i8;
   i11 = 1;
  }
 } while (0);
 i8 = i4;
 _memset(i8 | 0, 0, 17) | 0;
 i9 = i4 + 20 | 0;
 _memset(i9 | 0, 0, 17) | 0;
 i12 = i4 + 40 | 0;
 _memset(i12 | 0, 0, 17) | 0;
 i13 = i4 + 60 | 0;
 HEAP32[i13 >> 2] = HEAP32[i13 >> 2] & -2147483648 | 1;
 i13 = i4 + 63 | 0;
 HEAP8[i13] = 0;
 __ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i1, i2, i4);
 do {
  if ((HEAP32[i7 >> 2] | 0) == 0) {
   i1 = __ZN3WTF10fastMallocEj(24) | 0;
   _memset(i1 | 0, 0, 24) | 0;
   i14 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   if ((i14 | 0) == 0) {
    break;
   }
   __ZN7WebCore14ClipRectsCacheD2Ev(i14);
   __ZN3WTF8fastFreeEPv(i14);
  }
 } while (0);
 do {
  if (i11) {
   i14 = i10 + 148 | 0;
   i1 = HEAP32[i14 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   i15 = HEAP32[i5 >> 2] | 0;
   i16 = i2 + 16 | 0;
   i17 = HEAP32[i1 + (((HEAP32[i16 >> 2] | 0) == 1 ? i15 + 3 | 0 : i15) << 2) >> 2] | 0;
   if ((i17 | 0) == 0) {
    break;
   }
   if ((HEAP32[i17 + 60 >> 2] & 2147483647 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i17);
    i18 = HEAP32[i14 >> 2] | 0;
   } else {
    i18 = i1;
   }
   do {
    if ((i18 | 0) == 0) {
     i19 = 0;
    } else {
     i1 = HEAP32[i5 >> 2] | 0;
     i17 = HEAP32[i18 + (((HEAP32[i16 >> 2] | 0) == 1 ? i1 + 3 | 0 : i1) << 2) >> 2] | 0;
     if ((i17 | 0) == 0) {
      i19 = 0;
      break;
     }
     if ((HEAP32[i17 + 60 >> 2] & 2147483647 | 0) != 0) {
      i19 = i17;
      break;
     }
     __ZN3WTF8fastFreeEPv(i17);
     i19 = i17;
    }
   } while (0);
   if (!(__ZNK7WebCore9ClipRectseqERKS0_(i4, i19) | 0)) {
    break;
   }
   i17 = HEAP32[i7 >> 2] | 0;
   i1 = HEAP32[i16 >> 2] | 0;
   i15 = HEAP32[i14 >> 2] | 0;
   do {
    if ((i15 | 0) == 0) {
     i20 = 0;
    } else {
     i21 = HEAP32[i5 >> 2] | 0;
     i22 = HEAP32[i15 + (((i1 | 0) == 1 ? i21 + 3 | 0 : i21) << 2) >> 2] | 0;
     if ((i22 | 0) == 0) {
      i20 = 0;
      break;
     }
     i21 = i22 + 60 | 0;
     i23 = HEAP32[i21 >> 2] | 0;
     if ((i23 & 2147483647 | 0) == 0) {
      __ZN3WTF8fastFreeEPv(i22);
      i24 = HEAP32[i21 >> 2] | 0;
     } else {
      i24 = i23;
     }
     HEAP32[i21 >> 2] = i24 + 1 & 2147483647 | i24 & -2147483648;
     i20 = i22;
    }
   } while (0);
   i15 = i17 + (((i1 | 0) == 1 ? i6 + 3 | 0 : i6) << 2) | 0;
   i14 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i20;
   if ((i14 | 0) == 0) {
    STACKTOP = i3;
    return;
   }
   i15 = i14 + 60 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   i22 = i16 + 2147483647 & 2147483647;
   HEAP32[i15 >> 2] = i22 | i16 & -2147483648;
   if ((i22 | 0) != 0) {
    STACKTOP = i3;
    return;
   }
   __ZN3WTF8fastFreeEPv(i14);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i20 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[i2 + 16 >> 2] | 0;
 i2 = __ZN3WTF10fastMallocEj(64) | 0;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 i8 = i2 + 20 | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 HEAP32[i8 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 i9 = i2 + 40 | 0;
 HEAP32[i9 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 HEAP32[i9 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
 i12 = i2 + 60 | 0;
 HEAP32[i12 >> 2] = HEAP32[i12 >> 2] & -2147483648 | 1;
 HEAP8[i2 + 63 | 0] = HEAP8[i13] & -128;
 i13 = i20 + (((i7 | 0) == 1 ? i6 + 3 | 0 : i6) << 2) | 0;
 i6 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = i2;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i2 = i6 + 60 | 0;
 i13 = HEAP32[i2 >> 2] | 0;
 i7 = i13 + 2147483647 & 2147483647;
 HEAP32[i2 >> 2] = i7 | i13 & -2147483648;
 if ((i7 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN3WTF8fastFreeEPv(i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = i1 + 21 | 0;
 i3 = HEAP8[i2] | 0;
 i4 = i1 + 32 | 0;
 do {
  if (__ZNK7WebCore9FrameView22containsScrollableAreaEPNS_14ScrollableAreaE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i1 | 0) | 0) {
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i5 + 4 | 0;
   L3 : do {
    if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
     i7 = 0;
     i8 = HEAP8[i2] | 0;
    } else {
     i9 = HEAP8[i2] | 0;
     L6 : do {
      if ((HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
       if ((i9 & 16) == 0) {
        i10 = i1;
       } else {
        break;
       }
       while (1) {
        i10 = HEAP32[i10 + 36 >> 2] | 0;
        if ((i10 | 0) == 0) {
         break L6;
        }
        if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
         break;
        }
        if ((HEAP8[i10 + 21 | 0] & 20) != 0) {
         break;
        }
       }
       if ((i9 & 8) == 0) {
        i7 = 0;
        i8 = i9;
        break L3;
       }
      }
     } while (0);
     i7 = i9 << 2 & 4 ^ 4;
     i8 = i9;
    }
   } while (0);
   i5 = i8 & -5 | i7;
   HEAP8[i2] = i5;
   if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
    i11 = i5;
    break;
   }
   __ZN7WebCore16HistogramSupport20histogramEnumerationEPKcii(H_BASE + 56 | 0, (i7 & 255) >>> 2 & 1, 2);
   i11 = HEAP8[i2] | 0;
  } else {
   i5 = HEAP8[i2] & -5;
   HEAP8[i2] = i5;
   i11 = i5;
  }
 } while (0);
 if (((i11 ^ i3) & 4) == 0) {
  return;
 }
 i3 = __ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0;
 i11 = i1 + 20 | 0;
 i7 = HEAP8[i11] | 0;
 L21 : do {
  if (((i7 & 255) >>> 5 & 1 | 0) != (i3 & 1 | 0)) {
   HEAP8[i11] = i7 & -33 | (i3 & 1) << 5;
   i8 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   if (i3) {
    i10 = i8;
    while (1) {
     i5 = i10 + 20 | 0;
     i12 = HEAP8[i5] | 0;
     if ((i12 & -64) << 24 >> 24 == 64) {
      break L21;
     }
     HEAP8[i5] = i12 & 63 | 64;
     i10 = HEAP32[i10 + 36 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
    }
   } else {
    i10 = i8;
    while (1) {
     i6 = i10 + 20 | 0;
     i12 = HEAP8[i6] | 0;
     HEAP8[i6] = i12 | -128;
     if ((i12 & 32) != 0) {
      break L21;
     }
     i10 = HEAP32[i10 + 36 >> 2] | 0;
     if ((i10 | 0) == 0) {
      break;
     }
    }
   }
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i13 = 24;
  } else {
   if ((HEAP8[i2] & 20) != 0) {
    i13 = 24;
    break;
   }
   i3 = i1 + 136 | 0;
   i7 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i7 | 0) != 0) {
    i3 = i7 + 8 | 0;
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     HEAP32[i3 >> 2] = 0;
    }
    i3 = i7 | 0;
    i11 = HEAP32[i3 >> 2] | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i7 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
    }
    __ZN3WTF8fastFreeEPv(i7);
   }
   i7 = i1 + 140 | 0;
   i11 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i11 | 0) == 0) {
    i14 = i1;
    break;
   }
   i7 = i11 + 8 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i11 | 0;
   i3 = HEAP32[i7 >> 2] | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
    HEAP32[i11 + 4 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i3);
   }
   __ZN3WTF8fastFreeEPv(i11);
   i14 = i1;
  }
 } while (0);
 if ((i13 | 0) == 24) {
  __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i1);
  i14 = i1;
 }
 while (1) {
  i15 = HEAP32[i14 + 36 >> 2] | 0;
  if ((i15 | 0) == 0) {
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i13 = 40;
   break;
  }
  if ((HEAP8[i15 + 21 | 0] & 20) == 0) {
   i14 = i15;
  } else {
   i13 = 40;
   break;
  }
 }
 if ((i13 | 0) == 40) {
  __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i15);
 }
 HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 87 | 0] = 1;
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 return;
}
function __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, d25 = +0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 16 | 0;
 i9 = i8 | 0;
 i10 = i8;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  STACKTOP = i6;
  return;
 }
 i11 = i1 + 32 | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i12 + 20 >> 2] | 0;
 do {
  if ((i13 & 128 | 0) == 0) {
   i14 = HEAP32[i12 + 4 >> 2] | 0;
   if ((i14 | 0) == 0) {
    i15 = 5;
    break;
   }
   if ((HEAP32[i14 + 12 >> 2] & 32 | 0) == 0) {
    i15 = 5;
   }
  } else {
   i15 = 5;
  }
 } while (0);
 L7 : do {
  if ((i15 | 0) == 5) {
   i14 = HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 20 >> 2] | 0;
   L9 : do {
    if (+HEAPF32[i14 + 4 >> 2] >= +1) {
     i16 = i14 + 116 | 0;
     while (1) {
      if ((HEAP32[i16 + 4 >> 2] | 0) != 0) {
       break L9;
      }
      i16 = HEAP32[i16 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i14 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      break L7;
     }
    }
   } while (0);
   if ((i5 & 4 | 0) == 0) {
    if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
     break;
    }
   }
   if ((HEAP8[i1 + 21 | 0] & 32) == 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i14 = i1 + 208 | 0;
 L21 : do {
  if ((HEAP32[i14 >> 2] | 0) == 0) {
   i16 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i12;
    i18 = i13;
    break;
   } else {
    i19 = i16;
   }
   L23 : while (1) {
    if ((HEAP32[i19 + 208 >> 2] | 0) != 0) {
     i17 = i12;
     i18 = i13;
     break L21;
    }
    i16 = HEAP32[i19 + 32 >> 2] | 0;
    do {
     if ((HEAP32[i16 + 20 >> 2] & 128 | 0) == 0) {
      i20 = HEAP32[i16 + 4 >> 2] | 0;
      if ((i20 | 0) == 0) {
       i15 = 19;
       break;
      }
      if ((HEAP32[i20 + 12 >> 2] & 32 | 0) == 0) {
       i15 = 19;
      }
     } else {
      i15 = 19;
     }
    } while (0);
    if ((i15 | 0) == 19) {
     i15 = 0;
     i20 = HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + 20 >> 2] | 0;
     if (+HEAPF32[i20 + 4 >> 2] < +1) {
      break;
     }
     i21 = i20 + 116 | 0;
     while (1) {
      if ((HEAP32[i21 + 4 >> 2] | 0) != 0) {
       break L23;
      }
      i21 = HEAP32[i21 >> 2] | 0;
      if ((i21 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i20 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
      break;
     }
    }
    i21 = HEAP32[i19 + 36 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i17 = i12;
     i18 = i13;
     break L21;
    } else {
     i19 = i21;
    }
   }
   if ((i19 | 0) == 0) {
    i17 = i12;
    i18 = i13;
    break;
   }
   __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i19, i2, i3, i4, i5);
   i21 = HEAP32[i11 >> 2] | 0;
   i17 = i21;
   i18 = HEAP32[i21 + 20 >> 2] | 0;
  } else {
   i17 = i12;
   i18 = i13;
  }
 } while (0);
 do {
  if ((i18 & 128 | 0) == 0) {
   i13 = HEAP32[i17 + 4 >> 2] | 0;
   if ((i13 | 0) == 0) {
    break;
   }
   if ((HEAP32[i13 + 12 >> 2] & 32 | 0) == 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i18 = HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 20 >> 2] | 0;
 L45 : do {
  if (+HEAPF32[i18 + 4 >> 2] >= +1) {
   i17 = i18 + 116 | 0;
   while (1) {
    if ((HEAP32[i17 + 4 >> 2] | 0) != 0) {
     break L45;
    }
    i17 = HEAP32[i17 >> 2] | 0;
    if ((i17 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i18 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 do {
  if ((i5 & 4 | 0) == 0) {
   if ((HEAP32[i14 >> 2] | 0) == 0) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i14 = i1 + 21 | 0;
 HEAP8[i14] = HEAP8[i14] | 32;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i7, i1, i3, 0, 1, i5);
 __ZN7WebCore10LayoutRect9intersectERKS0_(i7, i4);
 d22 = +(HEAP32[i7 + 8 >> 2] | 0);
 d23 = +(HEAP32[i7 + 12 >> 2] | 0);
 d24 = +(+(HEAP32[i7 >> 2] | 0));
 d25 = +(+(HEAP32[i7 + 4 >> 2] | 0));
 HEAPF32[i9 >> 2] = d24;
 HEAPF32[i9 + 4 >> 2] = d25;
 i9 = i8 + 8 | 0;
 d25 = +d22;
 d22 = +d23;
 HEAPF32[i9 >> 2] = d25;
 HEAPF32[i9 + 4 >> 2] = d22;
 __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i2, i10);
 __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i2, +HEAPF32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 4 >> 2]);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = i5 | 0;
 i16 = i5;
 i17 = i4;
 do {
  if ((HEAP32[i16 >> 2] | 0) != (HEAP32[i17 >> 2] | 0) | (HEAP32[i16 + 4 >> 2] | 0) != (HEAP32[i17 + 4 >> 2] | 0)) {
   i18 = 4;
  } else {
   i19 = i5 + 8 | 0;
   i20 = i4 + 8 | 0;
   if ((HEAP32[i19 >> 2] | 0) != (HEAP32[i20 >> 2] | 0)) {
    i18 = 4;
    break;
   }
   if ((HEAP32[i19 + 4 >> 2] | 0) != (HEAP32[i20 + 4 >> 2] | 0)) {
    i18 = 4;
   }
  }
 } while (0);
 if ((i18 | 0) == 4) {
  __ZN7WebCore15GraphicsContext4saveEv(i3);
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i15);
  __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i3, i8);
 }
 if ((HEAP8[i5 + 16 | 0] & 1) == 0) {
  STACKTOP = i7;
  return;
 }
 if ((i6 | 0) == 0) {
  i21 = i1;
 } else {
  i21 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((i21 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i6 = i9;
 i5 = i10 + 4 | 0;
 i8 = i12 + 8 | 0;
 i12 = i1 + 32 | 0;
 i15 = i21;
 while (1) {
  i21 = i15 + 32 | 0;
  i4 = HEAP32[i21 >> 2] | 0;
  L18 : do {
   if ((HEAP32[i4 + 20 >> 2] & 65536 | 0) != 0) {
    i17 = HEAP32[(HEAP32[i4 + 36 >> 2] | 0) + 16 >> 2] | 0;
    i16 = i17 + 136 | 0;
    do {
     if ((HEAP8[i17 + 141 | 0] | 0) != 10) {
      if ((HEAP8[i17 + 142 | 0] & 1) == 0) {
       if ((HEAP32[i16 >> 2] | 0) != 0) {
        break;
       }
      } else {
       if (+HEAPF32[i16 >> 2] != +0) {
        break;
       }
      }
      i20 = i17 + 152 | 0;
      if ((HEAP8[i17 + 157 | 0] | 0) == 10) {
       break;
      }
      if ((HEAP8[i17 + 158 | 0] & 1) == 0) {
       if ((HEAP32[i20 >> 2] | 0) != 0) {
        break;
       }
      } else {
       if (+HEAPF32[i20 >> 2] != +0) {
        break;
       }
      }
      i20 = i17 + 168 | 0;
      if ((HEAP8[i17 + 173 | 0] | 0) == 10) {
       break;
      }
      if ((HEAP8[i17 + 174 | 0] & 1) == 0) {
       if ((HEAP32[i20 >> 2] | 0) != 0) {
        break;
       }
      } else {
       if (+HEAPF32[i20 >> 2] != +0) {
        break;
       }
      }
      i20 = i17 + 184 | 0;
      if ((HEAP8[i17 + 189 | 0] | 0) == 10) {
       break;
      }
      if ((HEAP8[i17 + 190 | 0] & 1) == 0) {
       if ((HEAP32[i20 >> 2] | 0) == 0) {
        break L18;
       } else {
        break;
       }
      } else {
       if (+HEAPF32[i20 >> 2] != +0) {
        break;
       } else {
        break L18;
       }
      }
     }
    } while (0);
    L41 : do {
     if ((i15 | 0) != (i1 | 0)) {
      i17 = HEAP32[i12 >> 2] | 0;
      i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
      i20 = __ZNK7WebCore12RenderObject15containingBlockEv(i17 | 0) | 0;
      i17 = i16 | 0;
      if ((i20 | 0) == 0 | (i20 | 0) == (i17 | 0)) {
       break L18;
      } else {
       i22 = i20;
      }
      while (1) {
       if ((HEAP32[i22 + 40 >> 2] | 0) == (i15 | 0)) {
        break L41;
       }
       i22 = __ZNK7WebCore12RenderObject15containingBlockEv(i22 | 0) | 0;
       if ((i22 | 0) == 0 | (i22 | 0) == (i17 | 0)) {
        break L18;
       }
      }
     }
    } while (0);
    HEAP32[i6 >> 2] = 0;
    HEAP32[i5 >> 2] = 0;
    if ((i15 | 0) != (i2 | 0)) {
     i17 = i15;
     while (1) {
      i17 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i17, i2, i10, 0) | 0;
      if ((i17 | 0) == 0 | (i17 | 0) == (i2 | 0)) {
       break;
      }
     }
    }
    i17 = HEAP32[(HEAP32[i21 >> 2] | 0) + 36 >> 2] | 0;
    i20 = HEAP32[i15 + 104 >> 2] | 0;
    i16 = HEAP32[i15 + 108 >> 2] | 0;
    i19 = HEAP32[i9 + 4 >> 2] | 0;
    HEAP32[i13 >> 2] = HEAP32[i9 >> 2];
    HEAP32[i13 + 4 >> 2] = i19;
    HEAP32[i8 >> 2] = i20;
    HEAP32[i8 + 4 >> 2] = i16;
    __ZNK7WebCore11RenderStyle24getRoundedInnerBorderForERKNS_10LayoutRectEbb(i11, i17, i14, 1, 1);
    __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i3, i11);
   }
  } while (0);
  if ((i15 | 0) == (i2 | 0)) {
   i18 = 40;
   break;
  }
  i21 = HEAP32[i15 + 36 >> 2] | 0;
  if ((i21 | 0) == 0) {
   i18 = 39;
   break;
  } else {
   i15 = i21;
  }
 }
 if ((i18 | 0) == 39) {
  STACKTOP = i7;
  return;
 } else if ((i18 | 0) == 40) {
  STACKTOP = i7;
  return;
 }
}
function __ZN7WebCore11RenderLayer34hitTestTransformedLayerInFragmentsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i11 = i10 | 0;
 i12 = i10 + 120 | 0;
 i13 = i10 + 128 | 0;
 i14 = i10 + 144 | 0;
 i15 = i10 + 160 | 0;
 i16 = i10 + 184 | 0;
 i17 = i10 + 200 | 0;
 i18 = i11 + 12 | 0;
 i19 = i11 | 0;
 HEAP32[i19 >> 2] = i18;
 i20 = i11 + 4 | 0;
 HEAP32[i20 >> 2] = 1;
 i21 = i11 + 8 | 0;
 HEAP32[i21 >> 2] = 0;
 i22 = i12 | 0;
 HEAP32[i22 >> 2] = 0;
 i23 = i12 + 4 | 0;
 HEAP32[i23 >> 2] = 0;
 i24 = i1 + 188 | 0;
 __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i13, i1, HEAP32[i24 >> 2] | 0, 1, 1, 0);
 i25 = i7 + 64 | 0;
 __ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_(HEAP32[i24 >> 2] | 0, i11, i2, HEAP32[i25 >> 2] | 0, i6, 1, 1, 1, i12, i13);
 i13 = HEAP32[i21 >> 2] | 0;
 i11 = i13 - 1 | 0;
 do {
  if ((i11 | 0) > -1) {
   i26 = i14;
   i27 = i1 + 36 | 0;
   i28 = i15 | 0;
   i29 = i15 + 4 | 0;
   i30 = i15 + 8 | 0;
   i31 = i15 + 12 | 0;
   i32 = i15 + 16 | 0;
   i33 = i16;
   i34 = i17;
   i35 = i16 | 0;
   i36 = i16 + 4 | 0;
   i37 = i11;
   i38 = i13;
   while (1) {
    if (i38 >>> 0 <= i37 >>> 0) {
     i39 = 4;
     break;
    }
    i40 = HEAP32[i19 >> 2] | 0;
    i41 = i40 + (i37 * 104 & -1) + 20 | 0;
    HEAP32[i26 >> 2] = HEAP32[i41 >> 2];
    HEAP32[i26 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
    HEAP32[i26 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
    HEAP32[i26 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
    i41 = HEAP32[i24 >> 2] | 0;
    if ((HEAP32[i27 >> 2] | 0) != (i41 | 0)) {
     if ((i41 | 0) == (i2 | 0) | (i41 | 0) == 0) {
      i42 = i41;
     } else {
      i43 = i41;
      while (1) {
       i43 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i43, i2, i12, 0) | 0;
       if ((i43 | 0) == 0 | (i43 | 0) == (i2 | 0)) {
        break;
       }
      }
      i42 = HEAP32[i24 >> 2] | 0;
     }
     i43 = HEAP32[i25 >> 2] | 0;
     HEAP32[i28 >> 2] = i42;
     HEAP32[i29 >> 2] = i43;
     HEAP32[i30 >> 2] = 1;
     HEAP32[i31 >> 2] = 1;
     HEAP32[i32 >> 2] = 1;
     __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i17, i1, i15);
     HEAP32[i33 >> 2] = HEAP32[i34 >> 2];
     HEAP32[i33 + 4 >> 2] = HEAP32[i34 + 4 >> 2];
     HEAP32[i33 + 8 >> 2] = HEAP32[i34 + 8 >> 2];
     HEAP32[i33 + 12 >> 2] = HEAP32[i34 + 12 >> 2];
     i43 = (HEAP32[i23 >> 2] | 0) + (HEAP32[i40 + (i37 * 104 & -1) + 84 >> 2] | 0) | 0;
     HEAP32[i35 >> 2] = (HEAP32[i22 >> 2] | 0) + (HEAP32[i40 + (i37 * 104 & -1) + 80 >> 2] | 0) + (HEAP32[i35 >> 2] | 0);
     HEAP32[i36 >> 2] = i43 + (HEAP32[i36 >> 2] | 0);
     __ZN7WebCore10LayoutRect9intersectERKS0_(i14, i16);
    }
    if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i7, i14) | 0) {
     i43 = __ZN7WebCore11RenderLayer31hitTestLayerByApplyingTransformEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i40 + (i37 * 104 & -1) + 80 | 0) | 0;
     if ((i43 | 0) != 0) {
      i44 = i43;
      i39 = 14;
      break;
     }
    }
    i43 = i37 - 1 | 0;
    if ((i43 | 0) <= -1) {
     i44 = 0;
     i39 = 14;
     break;
    }
    i37 = i43;
    i38 = HEAP32[i21 >> 2] | 0;
   }
   if ((i39 | 0) == 4) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
    return 0;
   } else if ((i39 | 0) == 14) {
    i45 = i44;
    i46 = HEAP32[i21 >> 2] | 0;
    break;
   }
  } else {
   i45 = 0;
   i46 = i13;
  }
 } while (0);
 if ((i46 | 0) != 0) {
  HEAP32[i21 >> 2] = 0;
 }
 i21 = HEAP32[i19 >> 2] | 0;
 if ((i18 | 0) == (i21 | 0) | (i21 | 0) == 0) {
  STACKTOP = i10;
  return i45 | 0;
 }
 HEAP32[i19 >> 2] = 0;
 HEAP32[i20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i21 | 0);
 STACKTOP = i10;
 return i45 | 0;
}
function __ZNK7WebCore11RenderLayer25createLocalTransformStateEPS0_S1_RKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateERKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, d20 = +0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i10 = i9 | 0;
 i11 = i9 + 8 | 0;
 i12 = i9 + 136 | 0;
 i13 = i10 | 0;
 HEAP32[i13 >> 2] = 0;
 i14 = i10 + 4 | 0;
 HEAP32[i14 >> 2] = 0;
 do {
  if ((i7 | 0) == 0) {
   d15 = +(HEAP32[i5 >> 2] | 0);
   d16 = +(HEAP32[i5 + 4 >> 2] | 0);
   d17 = +d15;
   d18 = +d16;
   d19 = d15 + +(HEAP32[i5 + 8 >> 2] | 0);
   d20 = d16 + +(HEAP32[i5 + 12 >> 2] | 0);
   i21 = __ZN3WTF10fastMallocEj(216) | 0;
   i22 = i21;
   HEAP32[i21 >> 2] = 1;
   i23 = i6 + 24 | 0;
   i24 = i21 + 4 | 0;
   i25 = HEAP32[i23 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i23 >> 2];
   HEAP32[i24 + 4 >> 2] = i25;
   _memcpy(i21 + 12 | 0, i6 + 32 | 0, 32) | 0;
   i25 = i21 + 44 | 0;
   HEAPF32[i25 >> 2] = d17;
   HEAPF32[i25 + 4 >> 2] = d18;
   HEAPF32[i21 + 52 >> 2] = d19;
   HEAPF32[i21 + 56 >> 2] = d16;
   HEAPF32[i21 + 60 >> 2] = d19;
   HEAPF32[i21 + 64 >> 2] = d20;
   HEAPF32[i21 + 68 >> 2] = d15;
   HEAPF32[i21 + 72 >> 2] = d20;
   HEAPF64[i21 + 80 >> 3] = +1;
   _memset(i21 + 88 | 0, 0, 32) | 0;
   HEAPF64[i21 + 120 >> 3] = +1;
   _memset(i21 + 128 | 0, 0, 32) | 0;
   HEAPF64[i21 + 160 >> 3] = +1;
   _memset(i21 + 168 | 0, 0, 32) | 0;
   HEAPF64[i21 + 200 >> 3] = +1;
   HEAP8[i21 + 208 | 0] = 0;
   if ((i3 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i26 = i22;
    break;
   } else {
    i27 = i2;
   }
   while (1) {
    i21 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i27, i3, i10, 0) | 0;
    if ((i21 | 0) == 0 | (i21 | 0) == (i3 | 0)) {
     i26 = i22;
     break;
    } else {
     i27 = i21;
    }
   }
  } else {
   i22 = __ZN3WTF10fastMallocEj(216) | 0;
   i21 = i22;
   HEAP32[i22 >> 2] = 1;
   i25 = i7 + 4 | 0;
   i24 = i22 + 4 | 0;
   i23 = HEAP32[i25 + 4 >> 2] | 0;
   HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
   HEAP32[i24 + 4 >> 2] = i23;
   _memcpy(i22 + 12 | 0, i7 + 12 | 0, 32) | 0;
   _memcpy(i22 + 44 | 0, i7 + 44 | 0, 32) | 0;
   i23 = i7 + 80 | 0;
   if (!((i23 | 0) == 0 | (i21 | 0) == (i7 | 0))) {
    _memcpy(i22 + 80 | 0, i23 | 0, 128) | 0;
   }
   HEAP8[i22 + 208 | 0] = HEAP8[i7 + 208 | 0] & 1;
   if ((i4 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i26 = i21;
    break;
   } else {
    i28 = i2;
   }
   while (1) {
    i22 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i28, i4, i10, 0) | 0;
    if ((i22 | 0) == 0 | (i22 | 0) == (i4 | 0)) {
     i26 = i21;
     break;
    } else {
     i28 = i22;
    }
   }
  }
 } while (0);
 i28 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + (HEAP32[i8 >> 2] | 0);
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i28;
 if ((i4 | 0) == 0) {
  i29 = 0;
 } else {
  i29 = HEAP32[i4 + 32 >> 2] | 0;
 }
 i4 = i29 | 0;
 i29 = i2 + 32 | 0;
 if (__ZNK7WebCore12RenderObject31shouldUseTransformFromContainerEPKS0_(HEAP32[i29 >> 2] | 0, i4) | 0) {
  HEAPF64[i11 >> 3] = +1;
  _memset(i11 + 8 | 0, 0, 32) | 0;
  HEAPF64[i11 + 40 >> 3] = +1;
  _memset(i11 + 48 | 0, 0, 32) | 0;
  HEAPF64[i11 + 80 >> 3] = +1;
  _memset(i11 + 88 | 0, 0, 32) | 0;
  HEAPF64[i11 + 120 >> 3] = +1;
  i2 = HEAP32[i29 >> 2] | 0;
  i29 = HEAP32[i14 >> 2] | 0;
  HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i12 + 4 >> 2] = i29;
  __ZNK7WebCore12RenderObject25getTransformFromContainerEPKS0_RKNS_10LayoutSizeERNS_20TransformationMatrixE(i2, i4, i12, i11);
  __ZN7WebCore24HitTestingTransformState14applyTransformERKNS_20TransformationMatrixENS0_21TransformAccumulationE(i26, i11, 1);
 } else {
  __ZN7WebCore24HitTestingTransformState9translateEiiNS0_21TransformAccumulationE(i26, HEAP32[i13 >> 2] | 0, HEAP32[i14 >> 2] | 0, 1);
 }
 HEAP32[i1 >> 2] = i26;
 if ((i26 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 i1 = i26 | 0;
 i14 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i14 + 1;
 if ((i14 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i26);
  STACKTOP = i9;
  return;
 } else {
  HEAP32[i1 >> 2] = i14;
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 32 | 0;
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
   i8 = 4;
  } else {
   i9 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP8[i9 + 92 | 0] & 1) != 0) {
    i8 = 4;
   }
  }
 } while (0);
 do {
  if ((i8 | 0) == 4) {
   i9 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i1) | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i3 | 0;
     HEAP32[i10 >> 2] = 0;
     __ZN7WebCore11RenderLayer10FilterInfo11setRendererEN3WTF10PassRefPtrINS_20FilterEffectRendererEEE(i9, i3);
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     i10 = i11 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
    }
   } while (0);
   if (__ZNK7WebCore16FilterOperations18hasReferenceFilterEv((HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0) | 0) {
    break;
   }
   STACKTOP = i2;
   return;
  }
 } while (0);
 i3 = __ZN7WebCore11RenderLayer10FilterInfo3getERS0_(i1) | 0;
 i8 = i3 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i12 = __ZN3WTF10fastMallocEj(92) | 0;
  i10 = i12;
  __ZN7WebCore20FilterEffectRendererC1Ev(i10);
  HEAP32[i12 + 20 >> 2] = (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 181 | 0] & 1) != 0 ? 2 : 0;
  i12 = i4 | 0;
  HEAP32[i12 >> 2] = i10;
  __ZN7WebCore11RenderLayer10FilterInfo11setRendererEN3WTF10PassRefPtrINS_20FilterEffectRendererEEE(i3, i4);
  i4 = HEAP32[i12 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i12 = i4 + 4 | 0;
    i10 = i12 | 0;
    i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
    if ((i11 | 0) != 0) {
     HEAP32[i10 >> 2] = i11;
     break;
    }
    i11 = i12 - 4 | 0;
    if ((i11 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 15](i11);
   }
  } while (0);
  HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 225 | 0] = 1;
  i13 = HEAP32[i8 >> 2] | 0;
 } else {
  i13 = i9;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 __ZN7WebCore11RenderLayer23computeFilterOperationsEPKNS_11RenderStyleE(i5, i1, HEAP32[i9 + 36 >> 2] | 0);
 i1 = __ZN7WebCore20FilterEffectRenderer5buildEPNS_13RenderElementERKNS_16FilterOperationsENS_14FilterConsumerE(i13, i9 | 0, i5, 0) | 0;
 i9 = i5 + 8 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 i7 = i5 | 0;
 if ((i13 | 0) != 0) {
  i8 = HEAP32[i7 >> 2] | 0;
  i4 = i8 + (i13 << 2) | 0;
  i13 = i8;
  while (1) {
   i8 = HEAP32[i13 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i11 = i8 + 4 | 0;
     i12 = i11 | 0;
     i10 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i12 >> 2] = i10;
      break;
     }
     i10 = i11 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
    }
   } while (0);
   i13 = i13 + 4 | 0;
   if ((i13 | 0) == (i4 | 0)) {
    break;
   }
  }
  HEAP32[i9 >> 2] = 0;
 }
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 if (i1) {
  STACKTOP = i2;
  return;
 }
 i1 = i6 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN7WebCore11RenderLayer10FilterInfo11setRendererEN3WTF10PassRefPtrINS_20FilterEffectRendererEEE(i3, i6);
 i6 = HEAP32[i1 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i1 = i6 + 4 | 0;
 i6 = i1 | 0;
 i3 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i6 >> 2] = i3;
  STACKTOP = i2;
  return;
 }
 i3 = i1 - 4 | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
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
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
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
          FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i12 >> 2] | 0) + 4 >> 2] & 15](i12);
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
function __ZN7WebCore11RenderLayer29paintLayerByApplyingTransformEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
 i7 = i6 | 0;
 i8 = i6 + 128 | 0;
 i9 = i6 + 136 | 0;
 i10 = i6 + 264 | 0;
 i11 = i6 + 312 | 0;
 i12 = i6 + 360 | 0;
 i13 = i12 | 0;
 i14 = i12;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i17 = i8 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i8 + 4 | 0;
 HEAP32[i18 >> 2] = 0;
 i19 = HEAP32[i3 >> 2] | 0;
 if ((i19 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  i20 = 0;
  i21 = 0;
 } else {
  i22 = i1;
  while (1) {
   i22 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i22, i19, i8, 0) | 0;
   if ((i22 | 0) == 0 | (i22 | 0) == (i19 | 0)) {
    break;
   }
  }
  i20 = HEAP32[i17 >> 2] | 0;
  i21 = HEAP32[i18 >> 2] | 0;
 }
 i19 = HEAP32[i5 + 4 >> 2] | 0;
 i22 = i20 + (HEAP32[i5 >> 2] | 0) | 0;
 HEAP32[i17 >> 2] = i22;
 i5 = i21 + i19 | 0;
 HEAP32[i18 >> 2] = i5;
 i19 = i3 + 40 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 i20 = i7;
 i8 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i8 | 0) == 0) {
   HEAPF64[i9 >> 3] = +1;
   _memset(i9 + 8 | 0, 0, 32) | 0;
   HEAPF64[i9 + 40 >> 3] = +1;
   _memset(i9 + 48 | 0, 0, 32) | 0;
   HEAPF64[i9 + 80 >> 3] = +1;
   _memset(i9 + 88 | 0, 0, 32) | 0;
   HEAPF64[i9 + 120 >> 3] = +1;
   i23 = i22;
   i24 = i5;
  } else {
   if ((i21 & 4 | 0) == 0) {
    if ((i8 | 0) == (i9 | 0)) {
     i23 = i22;
     i24 = i5;
     break;
    }
    _memcpy(i9 | 0, i8 | 0, 128) | 0;
    i23 = i22;
    i24 = i5;
    break;
   }
   if ((i7 | 0) != (i8 | 0)) {
    _memcpy(i20 | 0, i8 | 0, 128) | 0;
   }
   __ZN7WebCore20TransformationMatrix10makeAffineEv(i7);
   _memcpy(i9 | 0, i20 | 0, 128) | 0;
   i23 = HEAP32[i17 >> 2] | 0;
   i24 = HEAP32[i18 >> 2] | 0;
  }
 } while (0);
 __ZN7WebCore20TransformationMatrix14translateRightEdd(i9, +(i23 | 0), +(i24 | 0)) | 0;
 i20 = (HEAP32[i17 >> 2] | 0) - i23 + (HEAP32[i3 + 24 >> 2] | 0) | 0;
 i23 = (HEAP32[i18 >> 2] | 0) - i24 + (HEAP32[i3 + 28 >> 2] | 0) | 0;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZNK7WebCore20TransformationMatrix17toAffineTransformEv(i10, i9);
 __ZN7WebCore15GraphicsContext9concatCTMERKNS_15AffineTransformE(i2, i10);
 __ZNK7WebCore20TransformationMatrix7inverseEv(i16, i9);
 __ZNK7WebCore20TransformationMatrix7mapRectERKNS_10LayoutRectE(i15, i16, i3 + 8 | 0);
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i14, i15);
 i15 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i12 + 8 | 0;
 i12 = HEAP32[i13 >> 2] | 0;
 i16 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = HEAP32[i19 >> 2] | 0;
 i19 = HEAP32[i3 + 4 >> 2] | 0;
 i9 = HEAP32[i3 + 32 >> 2] | 0;
 i10 = HEAP32[i3 + 36 >> 2] | 0;
 HEAP32[i11 >> 2] = i1;
 HEAP32[i11 + 4 >> 2] = i19;
 HEAP32[i11 + 8 >> 2] = i15;
 HEAP32[i11 + 12 >> 2] = i14;
 HEAP32[i11 + 16 >> 2] = i12;
 HEAP32[i11 + 20 >> 2] = i16;
 i16 = i11 + 24 | 0;
 HEAP32[i16 >> 2] = i20;
 HEAP32[i16 + 4 >> 2] = i23;
 HEAP32[i11 + 32 >> 2] = i9;
 HEAP32[i11 + 36 >> 2] = i10;
 HEAP32[i11 + 40 >> 2] = i13;
 HEAP8[i11 + 44 | 0] = 1;
 i13 = i4 & -3;
 i4 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i25 = i13 | 224;
  __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i11, i25);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i6;
  return;
 }
 i10 = i1 + 21 | 0;
 i9 = HEAP8[i10] | 0;
 if ((i9 & 64) != 0) {
  i25 = i13 | 224;
  __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i11, i25);
  __ZN7WebCore15GraphicsContext7restoreEv(i2);
  STACKTOP = i6;
  return;
 }
 HEAP8[i10] = i9 | 64;
 __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(HEAP32[i4 + 40 >> 2] | 0, i2, i11, i13 | 8);
 HEAP8[i10] = HEAP8[i10] & -65;
 i25 = i13 | 224;
 __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i11, i25);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderLayer30hitTestFixedLayersInNamedFlowsEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSG_SF_b(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11) {
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
 var i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i12 = i2 | 0;
 i13 = i2 + 8 | 0;
 i14 = i2 + 24 | 0;
 if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 i16 = i1 + 32 | 0;
 if (!(__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0)) {
  i15 = 0;
  STACKTOP = i2;
  return i15 | 0;
 }
 i1 = i13 | 0;
 HEAP32[i1 >> 2] = 0;
 i17 = i13 + 4 | 0;
 HEAP32[i17 >> 2] = 0;
 i18 = i13 + 8 | 0;
 HEAP32[i18 >> 2] = 0;
 __ZNK7WebCore20FlowThreadController28collectFixedPositionedLayersERN3WTF6VectorIPNS_11RenderLayerELj0ENS1_15CrashOnOverflowEEE(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i13);
 i13 = HEAP32[i1 >> 2] | 0;
 i16 = HEAP32[i18 >> 2] | 0;
 i19 = i13 + (i16 << 2) | 0;
 HEAP32[i12 >> 2] = F_BASE_iii + 4;
 i20 = i16 << 2;
 i16 = i20 >> 2;
 do {
  if ((i20 | 0) > 512) {
   i21 = i16;
   while (1) {
    i22 = __ZnwjRKSt9nothrow_t(i21 << 2, __ZSt7nothrow) | 0;
    i23 = i22;
    if ((i22 | 0) != 0) {
     i24 = 8;
     break;
    }
    if ((i21 | 0) > 1) {
     i21 = (i21 | 0) / 2 & -1;
    } else {
     i24 = 6;
     break;
    }
   }
   if ((i24 | 0) == 6) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i13, i19, i12, i16, i23, 0);
    break;
   } else if ((i24 | 0) == 8) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i13, i19, i12, i16, i23, i21);
    __ZdlPv(i22);
    break;
   }
  } else {
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i13, i19, i12, i16, 0, 0);
  }
 } while (0);
 i16 = HEAP32[i18 >> 2] | 0;
 i12 = i16 - 1 | 0;
 if ((i12 | 0) > -1) {
  i19 = i4 | 0;
  i13 = i4 + 68 | 0;
  i22 = 0;
  i23 = i12;
  i12 = i16;
  while (1) {
   if (i12 >>> 0 <= i23 >>> 0) {
    i24 = 12;
    break;
   }
   i20 = HEAP32[(HEAP32[i1 >> 2] | 0) + (i23 << 2) >> 2] | 0;
   __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i14, i19);
   i25 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i20, HEAP32[(__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(HEAP32[i20 + 32 >> 2] | 0) | 0) + 40 >> 2] | 0, 0, i3, i14, i5, i6, 0, i7, i8) | 0;
   if ((HEAP8[i13] & 1) != 0) {
    __ZN7WebCore13HitTestResult6appendERKS0_(i4, i14);
   }
   if (__ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE(i25, i11, i9, i10) | 0) {
    if ((HEAP8[i13] & 1) == 0) {
     __ZN7WebCore13HitTestResultaSERKS0_(i4, i14) | 0;
    }
    if (i11) {
     i26 = i25;
    } else {
     i24 = 19;
     break;
    }
   } else {
    i26 = i22;
   }
   __ZN7WebCore13HitTestResultD1Ev(i14);
   i20 = i23 - 1 | 0;
   if ((i20 | 0) <= -1) {
    i27 = i26;
    break;
   }
   i22 = i26;
   i23 = i20;
   i12 = HEAP32[i18 >> 2] | 0;
  }
  if ((i24 | 0) == 12) {
   __ZN3WTF15CrashOnOverflow10overflowedEv();
   return 0;
  } else if ((i24 | 0) == 19) {
   __ZN7WebCore13HitTestResultD1Ev(i14);
   i27 = i25;
  }
  i28 = i27;
  i29 = HEAP32[i18 >> 2] | 0;
 } else {
  i28 = 0;
  i29 = i16;
 }
 if ((i29 | 0) != 0) {
  HEAP32[i18 >> 2] = 0;
 }
 i18 = HEAP32[i1 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i15 = i28;
  STACKTOP = i2;
  return i15 | 0;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i17 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i18);
 i15 = i28;
 STACKTOP = i2;
 return i15 | 0;
}
function __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 if ((i4 | 0) == 2) {
  i6 = i2 - 4 | 0;
  i7 = (i5 | 0) == 0;
  if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i6 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0) {
   if (!i7) {
    HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
   }
   i8 = i5 + 4 | 0;
   if ((i8 | 0) == 0) {
    return;
   }
   HEAP32[i8 >> 2] = HEAP32[i1 >> 2];
   return;
  } else {
   if (!i7) {
    HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
   }
   i7 = i5 + 4 | 0;
   if ((i7 | 0) == 0) {
    return;
   }
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   return;
  }
 } else if ((i4 | 0) == 1) {
  if ((i5 | 0) == 0) {
   return;
  }
  HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
  return;
 } else if ((i4 | 0) == 0) {
  return;
 } else {
  if ((i4 | 0) < 9) {
   if ((i1 | 0) == (i2 | 0)) {
    return;
   }
   if ((i5 | 0) == 0) {
    i9 = 0;
   } else {
    HEAP32[i5 >> 2] = HEAP32[i1 >> 2];
    i9 = i5;
   }
   i6 = i1 + 4 | 0;
   if ((i6 | 0) == (i2 | 0)) {
    return;
   } else {
    i10 = i9;
    i11 = i6;
   }
   while (1) {
    i6 = i10 + 4 | 0;
    i9 = (i6 | 0) == 0;
    do {
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i11 >> 2] | 0, HEAP32[i10 >> 2] | 0) | 0) {
      if (!i9) {
       HEAP32[i6 >> 2] = HEAP32[i10 >> 2];
      }
      L43 : do {
       if ((i10 | 0) == (i5 | 0)) {
        i12 = i5;
       } else {
        i7 = i10;
        while (1) {
         i8 = i7 - 4 | 0;
         if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i11 >> 2] | 0, HEAP32[i8 >> 2] | 0) | 0)) {
          i12 = i7;
          break L43;
         }
         HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
         if ((i8 | 0) == (i5 | 0)) {
          i12 = i5;
          break;
         } else {
          i7 = i8;
         }
        }
       }
      } while (0);
      HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
      i13 = i6;
     } else {
      if (i9) {
       i13 = 0;
       break;
      }
      HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
      i13 = i6;
     }
    } while (0);
    i6 = i11 + 4 | 0;
    if ((i6 | 0) == (i2 | 0)) {
     break;
    } else {
     i10 = i13;
     i11 = i6;
    }
   }
   return;
  }
  i11 = (i4 | 0) / 2 & -1;
  i13 = i1 + (i11 << 2) | 0;
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i13, i3, i11, i5, i11);
  i10 = i4 - i11 | 0;
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i13, i2, i3, i10, i5 + (i11 << 2) | 0, i10);
  L53 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i14 = i13;
    i15 = i5;
   } else {
    i10 = i13;
    i11 = i5;
    i12 = i1;
    while (1) {
     if ((i10 | 0) == (i2 | 0)) {
      break;
     }
     i6 = (i11 | 0) == 0;
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i10 >> 2] | 0, HEAP32[i12 >> 2] | 0) | 0) {
      if (!i6) {
       HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
      }
      i16 = i12;
      i17 = i10 + 4 | 0;
     } else {
      if (!i6) {
       HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
      }
      i16 = i12 + 4 | 0;
      i17 = i10;
     }
     i6 = i11 + 4 | 0;
     if ((i16 | 0) == (i13 | 0)) {
      i14 = i17;
      i15 = i6;
      break L53;
     } else {
      i10 = i17;
      i11 = i6;
      i12 = i16;
     }
    }
    if ((i12 | 0) == (i13 | 0)) {
     return;
    } else {
     i18 = i11;
     i19 = i12;
    }
    while (1) {
     if ((i18 | 0) != 0) {
      HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
     }
     i10 = i19 + 4 | 0;
     if ((i10 | 0) == (i13 | 0)) {
      break;
     } else {
      i18 = i18 + 4 | 0;
      i19 = i10;
     }
    }
    return;
   }
  } while (0);
  if ((i14 | 0) == (i2 | 0)) {
   return;
  } else {
   i20 = i14;
   i21 = i15;
  }
  while (1) {
   if ((i21 | 0) != 0) {
    HEAP32[i21 >> 2] = HEAP32[i20 >> 2];
   }
   i15 = i20 + 4 | 0;
   if ((i15 | 0) == (i2 | 0)) {
    break;
   } else {
    i20 = i15;
    i21 = i21 + 4 | 0;
   }
  }
  return;
 }
}
function __ZN7WebCore11RenderLayer24positionOverflowControlsERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i13 | 0;
 i15 = i13;
 i16 = i1 + 128 | 0;
 do {
  if ((HEAP32[i16 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
    break;
   }
   i17 = i1 + 32 | 0;
   i18 = HEAP32[i17 >> 2] | 0;
   do {
    if ((HEAP32[i18 + 20 >> 2] & 65536 | 0) == 0) {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i18 >> 2] | 0) + 140 >> 2] & 63](i18 | 0) | 0) {
      i19 = HEAP32[i17 >> 2] | 0;
      break;
     } else {
      STACKTOP = i3;
      return;
     }
    } else {
     i19 = i18;
    }
   } while (0);
   if ((HEAP32[(HEAP32[(HEAP32[i19 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i19 = i1 + 32 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 if ((HEAP32[i18 + 20 >> 2] & 512 | 0) == 0 | (i18 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i17 = HEAP32[i18 + 52 >> 2] | 0;
 i20 = HEAP32[i18 + 56 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 i6 = i5 + 8 | 0;
 i5 = i17 | 0;
 i17 = i20 | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i17;
 i6 = (HEAP32[i16 >> 2] | 0) != 0;
 i20 = i1 + 132 | 0;
 i21 = HEAP32[i20 >> 2] | 0;
 i22 = (i21 | 0) != 0;
 if (i6 & i22 | (HEAP32[(HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i6 | i22)) {
  i22 = i4 | 0;
  HEAP32[i22 >> 2] = 0;
  HEAP32[i22 + 4 >> 2] = 0;
  i22 = i4 + 8 | 0;
  HEAP32[i22 >> 2] = i5;
  HEAP32[i22 + 4 >> 2] = i17;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i10, i1, i4);
  i23 = HEAP32[i20 >> 2] | 0;
 } else {
  _memset(i8 | 0, 0, 16) | 0;
  i23 = i21;
 }
 i21 = i2 | 0;
 i4 = i2 + 4 | 0;
 if ((i23 | 0) != 0) {
  __ZNK7WebCore11RenderLayer24rectForVerticalScrollbarERKNS_7IntRectE(i11, i1, i7);
  i23 = HEAP32[i4 >> 2] | 0;
  i2 = i11 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + (HEAP32[i21 >> 2] | 0);
  i2 = i11 + 4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i23;
  i23 = HEAP32[i20 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 31](i23, i11);
 }
 if ((HEAP32[i16 >> 2] | 0) != 0) {
  __ZNK7WebCore11RenderLayer26rectForHorizontalScrollbarERKNS_7IntRectE(i12, i1, i7);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = i12 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + (HEAP32[i21 >> 2] | 0);
  i21 = i12 + 4 | 0;
  HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + i11;
  i11 = HEAP32[i16 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 31](i11, i12);
 }
 i12 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i12 | 0) != 0) {
  i11 = HEAP32[i9 + 4 >> 2] | 0;
  i16 = i8 + 8 | 0;
  i8 = HEAP32[i16 >> 2] | 0;
  i21 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i12 + 44 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i12 + 48 >> 2] = i11;
  HEAP32[i12 + 52 >> 2] = i8;
  HEAP32[i12 + 56 >> 2] = i21;
 }
 i21 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i21 | 0) != 0) {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i19 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
   _memset(i13 | 0, 0, 16) | 0;
   i24 = 0;
   i25 = 0;
   i26 = 0;
   i27 = 0;
  } else {
   __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i15, i1, i7);
   i7 = i13 + 8 | 0;
   i24 = HEAP32[i14 + 4 >> 2] | 0;
   i25 = HEAP32[i14 >> 2] | 0;
   i26 = HEAP32[i7 + 4 >> 2] | 0;
   i27 = HEAP32[i7 >> 2] | 0;
  }
  HEAP32[i21 + 44 >> 2] = i25;
  HEAP32[i21 + 48 >> 2] = i24;
  HEAP32[i21 + 52 >> 2] = i27;
  HEAP32[i21 + 56 >> 2] = i26;
 }
 i26 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i26 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore18RenderLayerBacking30positionOverflowControlsLayersEv(i26);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer15getRectToExposeERKNS_10LayoutRectES3_S3_RKNS_15ScrollAlignmentES6_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i2 | 0;
 i9 = i2 + 16 | 0;
 i10 = i2 + 32 | 0;
 i11 = i2 + 48 | 0;
 i12 = i5 | 0;
 i13 = i3 + 4 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i5 + 8 | 0;
 i16 = HEAP32[i15 >> 2] | 0;
 i17 = i3 + 12 | 0;
 i18 = HEAP32[i17 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i8 + 4 >> 2] = i14;
 HEAP32[i8 + 8 >> 2] = i16;
 HEAP32[i8 + 12 >> 2] = i18;
 i18 = i9;
 i16 = i3;
 HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
 HEAP32[i18 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
 HEAP32[i18 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
 __ZN7WebCore10LayoutRect9intersectERKS0_(i9, i8);
 i8 = HEAP32[i9 + 8 >> 2] | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 do {
  if ((i8 | 0) == (i9 | 0) | (i8 | 0) > 31) {
   i19 = HEAP32[i6 >> 2] | 0;
  } else {
   if ((i8 | 0) == (HEAP32[i3 + 8 >> 2] | 0)) {
    i15 = HEAP32[i6 >> 2] | 0;
    i19 = (i15 | 0) == 1 ? 0 : i15;
    break;
   }
   if ((i8 | 0) > 0) {
    i19 = HEAP32[i6 + 8 >> 2] | 0;
    break;
   } else {
    i19 = HEAP32[i6 + 4 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 6) {
   i6 = HEAP32[i12 >> 2] | 0;
   i8 = HEAP32[i3 + 8 >> 2] | 0;
   if ((i9 + i6 | 0) <= (i8 + (HEAP32[i3 >> 2] | 0) | 0)) {
    i20 = i6;
    break;
   }
   i21 = (i9 | 0) < (i8 | 0) ? 5 : 6;
   i22 = 11;
  } else {
   i21 = i19;
   i22 = 11;
  }
 } while (0);
 do {
  if ((i22 | 0) == 11) {
   if ((i21 | 0) == 1) {
    i20 = ((i9 - (HEAP32[i3 + 8 >> 2] | 0) | 0) / 2 & -1) + (HEAP32[i12 >> 2] | 0) | 0;
    break;
   } else if ((i21 | 0) == 0) {
    i20 = HEAP32[i3 >> 2] | 0;
    break;
   } else if ((i21 | 0) == 5) {
    i20 = i9 + (HEAP32[i12 >> 2] | 0) - (HEAP32[i3 + 8 >> 2] | 0) | 0;
    break;
   } else {
    i20 = HEAP32[i12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i12 = i5 + 4 | 0;
 i9 = HEAP32[i12 >> 2] | 0;
 i21 = HEAP32[i3 + 8 >> 2] | 0;
 i19 = i5 + 12 | 0;
 i5 = HEAP32[i19 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i10 + 4 >> 2] = i9;
 HEAP32[i10 + 8 >> 2] = i21;
 HEAP32[i10 + 12 >> 2] = i5;
 i5 = i11;
 i21 = i4;
 HEAP32[i5 >> 2] = HEAP32[i21 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
 __ZN7WebCore10LayoutRect9intersectERKS0_(i11, i10);
 i10 = HEAP32[i11 + 12 >> 2] | 0;
 i11 = HEAP32[i19 >> 2] | 0;
 do {
  if ((i10 | 0) == (i11 | 0)) {
   i23 = HEAP32[i7 >> 2] | 0;
  } else {
   if ((i10 | 0) == (HEAP32[i17 >> 2] | 0)) {
    i19 = HEAP32[i7 >> 2] | 0;
    i23 = (i19 | 0) == 1 ? 0 : i19;
    break;
   }
   if ((i10 | 0) > 0) {
    i23 = HEAP32[i7 + 8 >> 2] | 0;
    break;
   } else {
    i23 = HEAP32[i7 + 4 >> 2] | 0;
    break;
   }
  }
 } while (0);
 do {
  if ((i23 | 0) == 6) {
   i7 = HEAP32[i12 >> 2] | 0;
   i10 = HEAP32[i17 >> 2] | 0;
   if ((i11 + i7 | 0) <= (i10 + (HEAP32[i13 >> 2] | 0) | 0)) {
    i24 = i7;
    break;
   }
   i25 = (i11 | 0) < (i10 | 0) ? 3 : 6;
   i22 = 26;
  } else {
   i25 = i23;
   i22 = 26;
  }
 } while (0);
 do {
  if ((i22 | 0) == 26) {
   if ((i25 | 0) == 0) {
    i24 = HEAP32[i13 >> 2] | 0;
    break;
   } else if ((i25 | 0) == 3) {
    i24 = i11 + (HEAP32[i12 >> 2] | 0) - (HEAP32[i17 >> 2] | 0) | 0;
    break;
   } else if ((i25 | 0) == 1) {
    i24 = ((i11 - (HEAP32[i17 >> 2] | 0) | 0) / 2 & -1) + (HEAP32[i12 >> 2] | 0) | 0;
    break;
   } else {
    i24 = HEAP32[i12 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i12 = i3 + 8 | 0;
 i3 = HEAP32[i12 >> 2] | 0;
 i17 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i1;
 HEAP32[i12 >> 2] = i20;
 HEAP32[i12 + 4 >> 2] = i24;
 i24 = i1 + 8 | 0;
 HEAP32[i24 >> 2] = i3;
 HEAP32[i24 + 4 >> 2] = i17;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderLayer16updatePaginationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 22 | 0;
 HEAP8[i2] = HEAP8[i2] & -65;
 i3 = i1 + 188 | 0;
 HEAP32[i3 >> 2] = 0;
 if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
  return;
 }
 i4 = i1 + 36 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  return;
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 2) != 0;
 do {
  if (i7) {
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 248 >> 2] & 63](i6 | 0) | 0)) {
    break;
   }
   if ((HEAP32[i6 + 20 >> 2] & 25165824 | 0) == 16777216) {
    break;
   }
   HEAP32[i3 >> 2] = i1;
   return;
  }
 } while (0);
 if ((HEAP8[i1 + 20 | 0] & 16) != 0) {
  i6 = HEAP32[i4 >> 2] | 0;
  if (!i7) {
   HEAP8[i2] = (HEAP32[(HEAP32[i6 + 32 >> 2] | 0) + 20 >> 2] | 0) >>> 22 << 6 & 64 | HEAP8[i2] & -65;
   return;
  }
  i8 = HEAP32[i6 + 188 >> 2] | 0;
  HEAP32[i3 >> 2] = i8;
  if ((i8 | 0) == 0) {
   return;
  }
  if ((HEAP32[(HEAP32[i8 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
   return;
  }
  HEAP32[i3 >> 2] = 0;
  return;
 }
 if (i7) {
  i7 = HEAP32[i5 >> 2] | 0;
  i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
  i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i7 | 0) | 0;
  if ((i6 | 0) == 0) {
   return;
  }
  i7 = i8 | 0;
  i8 = i6;
  while (1) {
   if ((i8 | 0) == (i7 | 0)) {
    i9 = 50;
    break;
   }
   if ((HEAP32[i8 + 20 >> 2] & 32768 | 0) != 0) {
    i9 = 18;
    break;
   }
   i6 = __ZNK7WebCore12RenderObject15containingBlockEv(i8 | 0) | 0;
   if ((i6 | 0) == 0) {
    i9 = 54;
    break;
   } else {
    i8 = i6;
   }
  }
  if ((i9 | 0) == 50) {
   return;
  } else if ((i9 | 0) == 54) {
   return;
  } else if ((i9 | 0) == 18) {
   i7 = HEAP32[(HEAP32[i8 + 40 >> 2] | 0) + 188 >> 2] | 0;
   HEAP32[i3 >> 2] = i7;
   if ((i7 | 0) == 0) {
    return;
   }
   if ((HEAP32[(HEAP32[i7 + 32 >> 2] | 0) + 20 >> 2] & 131072 | 0) == 0) {
    return;
   }
   HEAP32[i3 >> 2] = 0;
   return;
  }
 } else {
  i10 = i1;
 }
 while (1) {
  i1 = HEAP32[i10 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i11 = 0;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i11 = i1;
   break;
  }
  if ((HEAP8[i1 + 21 | 0] & 20) == 0) {
   i10 = i1;
  } else {
   i11 = i1;
   break;
  }
 }
 i10 = i4;
 while (1) {
  i4 = HEAP32[i10 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i9 = 55;
   break;
  }
  i12 = HEAP32[i4 + 32 >> 2] | 0;
  i13 = HEAP32[i12 + 20 >> 2] | 0;
  if ((i13 & 4194304 | 0) != 0) {
   i9 = 28;
   break;
  }
  if ((i4 | 0) == (i11 | 0)) {
   i9 = 40;
   break;
  }
  i10 = i4 + 36 | 0;
 }
 if ((i9 | 0) == 28) {
  i10 = HEAP32[i5 >> 2] | 0;
  if ((i13 & 512 | 0) == 0) {
   i14 = 0;
  } else {
   i14 = i12;
  }
  i12 = __ZNK7WebCore12RenderObject15containingBlockEv(i10 | 0) | 0;
  L62 : do {
   if ((i12 | 0) == 0) {
    i15 = i10;
    i16 = 0;
   } else {
    i13 = i10 + 4 | 0;
    i5 = i10;
    i11 = i12;
    while (1) {
     if (!((i11 | 0) != (HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) & (i11 | 0) != (i14 | 0))) {
      i15 = i5;
      i16 = i11;
      break L62;
     }
     i4 = i11 | 0;
     i1 = __ZNK7WebCore12RenderObject15containingBlockEv(i11 | 0) | 0;
     if ((i1 | 0) == 0) {
      i15 = i4;
      i16 = 0;
      break;
     } else {
      i5 = i4;
      i11 = i1;
     }
    }
   }
  } while (0);
  if ((i16 | 0) == (i14 | 0)) {
   i17 = ((HEAP32[i15 + 20 >> 2] & 25165824 | 0) != 16777216) << 6;
  } else {
   i17 = 0;
  }
  HEAP8[i2] = HEAP8[i2] & -65 | i17;
  return;
 } else if ((i9 | 0) == 55) {
  return;
 } else if ((i9 | 0) == 40) {
  return;
 }
}
function __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i11;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = i2 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i15 | 0) == 0) {
   if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 i16 = i1 + 32 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 i18 = HEAP32[i17 + 8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  i19 = 0;
 } else {
  i19 = (HEAP32[(HEAP32[(HEAP32[i18 + 36 >> 2] | 0) + 20 >> 2] | 0) + 40 >> 2] | 0) != -1;
 }
 if ((HEAP32[i17 + 20 >> 2] & 65536 | 0) == 0 | i19) {
  i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i17 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
  i17 = i19 | 0;
  i18 = HEAP32[i19 >> 2] | 0;
  i19 = HEAP32[i18 + 208 >> 2] | 0;
  FUNCTION_TABLE_vii[HEAP32[i18 + 192 >> 2] & 31](i10, i17);
  i18 = (HEAP32[i2 + 4 >> 2] | 0) + (HEAP32[i10 + 4 >> 2] | 0) | 0;
  HEAP32[i9 >> 2] = (HEAP32[i14 >> 2] | 0) + (HEAP32[i10 >> 2] | 0);
  HEAP32[i9 + 4 >> 2] = i18;
  FUNCTION_TABLE_vii[i19 & 31](i17, i9);
  if ((i4 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i9 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
  HEAP32[i4 >> 2] = (i9 | 0) == 0 ? 0 : i9 + 36 | 0;
  STACKTOP = i5;
  return;
 }
 i9 = i1 + 112 | 0;
 i17 = HEAP32[i9 >> 2] | 0;
 i19 = i1 + 12 | 0;
 i18 = HEAP32[i19 >> 2] | 0;
 i10 = i1 + 116 | 0;
 i14 = i1 + 16 | 0;
 i20 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i2 = i11;
 HEAP32[i2 >> 2] = i18 + i17 + i15;
 i15 = i12 + 4 | 0;
 HEAP32[i15 >> 2] = i20;
 i20 = i6;
 if ((i3 | 0) == 1) {
  __ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE(i20, i1, i12);
  i21 = HEAP32[i9 >> 2] | 0;
  i22 = HEAP32[i19 >> 2] | 0;
  i23 = HEAP32[i6 >> 2] | 0;
 } else {
  i12 = HEAP32[i11 >> 2] | 0;
  i24 = HEAP32[i11 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = i12;
  HEAP32[i6 + 4 >> 2] = i24;
  i21 = i17;
  i22 = i18;
  i23 = i12;
 }
 if ((i23 | 0) == (i22 + i21 | 0)) {
  i21 = HEAP32[i20 + 4 >> 2] | 0;
  if ((i21 | 0) != ((HEAP32[i10 >> 2] | 0) + (HEAP32[i14 >> 2] | 0) | 0)) {
   i25 = i21;
   i26 = 12;
  }
 } else {
  i25 = HEAP32[i20 + 4 >> 2] | 0;
  i26 = 12;
 }
 if ((i26 | 0) == 12) {
  HEAP32[i8 >> 2] = i23;
  HEAP32[i8 + 4 >> 2] = i25;
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i7, i8);
  __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1 | 0, i7);
 }
 if ((i4 | 0) != 0) {
  HEAP32[i4 >> 2] = i1;
 }
 i7 = (HEAP32[i14 >> 2] | 0) + (HEAP32[i10 >> 2] | 0) | 0;
 i10 = HEAP32[i2 >> 2] | 0;
 i2 = (HEAP32[i19 >> 2] | 0) + (HEAP32[i9 >> 2] | 0) | 0;
 i9 = HEAP32[i15 >> 2] | 0;
 HEAP32[i13 >> 2] = i10 - i2;
 HEAP32[i13 + 4 >> 2] = i9 - i7;
 if ((i10 | 0) == (i2 | 0) & (i9 | 0) == (i7 | 0)) {
  STACKTOP = i5;
  return;
 }
 if ((HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i7 = __ZNK7WebCore11RenderLayer24enclosingScrollableLayerEv(i1) | 0;
 if ((i7 | 0) != 0) {
  __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i7, i13, i3, i4);
 }
 __ZN7WebCore12EventHandler24updateAutoscrollRendererEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = i11;
 __ZNK7WebCore11RenderLayer16localBoundingBoxEj(i1, i2, i4);
 i13 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(__ZNK7WebCore12RenderObject15containingBlockEv(i13 | 0) | 0, i1);
 } else {
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i13, i1);
 }
 i13 = i2 + 188 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   if ((i4 & 64 | 0) == 0) {
    break;
   }
   i15 = i7 | 0;
   HEAP32[i15 >> 2] = 0;
   i16 = i7 + 4 | 0;
   HEAP32[i16 >> 2] = 0;
   if ((i14 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i17 = 0;
    i18 = 0;
   } else {
    i19 = i2;
    while (1) {
     i19 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i19, i14, i7, 0) | 0;
     if ((i19 | 0) == 0 | (i19 | 0) == (i14 | 0)) {
      break;
     }
    }
    i17 = HEAP32[i15 >> 2] | 0;
    i18 = HEAP32[i16 >> 2] | 0;
   }
   i19 = i1 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i17;
   i20 = i1 + 4 | 0;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i18;
   __ZN7WebCore16RenderFlowThread20fragmentsBoundingBoxERKNS_10LayoutRectE(i8, HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] | 0, i1);
   i21 = i1;
   i22 = i8;
   HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
   HEAP32[i21 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
   HEAP32[i21 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
   HEAP32[i21 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
   i22 = i9;
   HEAP32[i22 >> 2] = 0;
   i21 = i10 + 4 | 0;
   HEAP32[i21 >> 2] = 0;
   do {
    if ((i5 | 0) == 0) {
     i23 = HEAP32[i13 >> 2] | 0;
     if ((i23 | 0) == (i3 | 0) | (i23 | 0) == 0) {
      i24 = 0;
      i25 = 0;
      break;
     } else {
      i26 = i23;
     }
     while (1) {
      i26 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i26, i3, i10, 0) | 0;
      if ((i26 | 0) == 0 | (i26 | 0) == (i3 | 0)) {
       break;
      }
     }
     i24 = HEAP32[i22 >> 2] | 0;
     i25 = HEAP32[i21 >> 2] | 0;
    } else {
     i23 = i5;
     i27 = HEAP32[i23 >> 2] | 0;
     i28 = HEAP32[i23 + 4 >> 2] | 0;
     HEAP32[i9 >> 2] = i27;
     HEAP32[i9 + 4 >> 2] = i28;
     i24 = i27;
     i25 = i28;
    }
   } while (0);
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + i24;
   HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + i25;
   STACKTOP = i6;
   return;
  }
 } while (0);
 i25 = i11;
 HEAP32[i25 >> 2] = 0;
 i24 = i12 + 4 | 0;
 HEAP32[i24 >> 2] = 0;
 do {
  if ((i5 | 0) == 0) {
   if ((i3 | 0) == (i2 | 0) | (i2 | 0) == 0) {
    i29 = 0;
    i30 = 0;
    break;
   } else {
    i31 = i2;
   }
   while (1) {
    i31 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i31, i3, i12, 0) | 0;
    if ((i31 | 0) == 0 | (i31 | 0) == (i3 | 0)) {
     break;
    }
   }
   i29 = HEAP32[i25 >> 2] | 0;
   i30 = HEAP32[i24 >> 2] | 0;
  } else {
   i20 = i5;
   i19 = HEAP32[i20 >> 2] | 0;
   i9 = HEAP32[i20 + 4 >> 2] | 0;
   HEAP32[i11 >> 2] = i19;
   HEAP32[i11 + 4 >> 2] = i9;
   i29 = i19;
   i30 = i9;
  }
 } while (0);
 i11 = i1 | 0;
 HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + i29;
 i29 = i1 + 4 | 0;
 HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + i30;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore11RenderLayer13collectLayersEbNS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i6 | 0;
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i1, 0);
 i8 = HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0;
 i9 = (HEAP32[i8 + 64 >> 2] & 1 | 0) == 0;
 do {
  if ((i3 | 0) == 0) {
   if (i9) {
    i10 = 1;
    break;
   }
   i10 = (HEAP8[i1 + 21 | 0] & 16) != 0;
  } else {
   if (i9) {
    i10 = 1;
    break;
   }
   i11 = HEAP8[i1 + 21 | 0] | 0;
   if ((i11 & 16) != 0) {
    i10 = 1;
    break;
   }
   i10 = (i11 & 4) != 0;
  }
 } while (0);
 do {
  if (i2) {
   i12 = 10;
  } else {
   i9 = HEAP8[i1 + 22 | 0] | 0;
   if ((i9 & 8) != 0) {
    i12 = 10;
    break;
   }
   if (i10 & (i9 & 32) != 0) {
    i12 = 10;
   }
  }
 } while (0);
 do {
  if ((i12 | 0) == 10) {
   if ((HEAP8[i1 + 20 | 0] & 16) != 0) {
    break;
   }
   i9 = ((HEAP32[i8 + 60 >> 2] | 0) > -1 ? i4 : i5) | 0;
   i11 = HEAP32[i9 >> 2] | 0;
   do {
    if ((i11 | 0) == 0) {
     i13 = __ZN3WTF10fastMallocEj(12) | 0;
     i14 = i13;
     HEAP32[i13 >> 2] = 0;
     HEAP32[i13 + 4 >> 2] = 0;
     HEAP32[i13 + 8 >> 2] = 0;
     i13 = HEAP32[i9 >> 2] | 0;
     HEAP32[i9 >> 2] = i14;
     if ((i13 | 0) == 0) {
      i15 = i14;
      break;
     }
     i14 = i13 + 8 | 0;
     if ((HEAP32[i14 >> 2] | 0) != 0) {
      HEAP32[i14 >> 2] = 0;
     }
     i14 = i13 | 0;
     i16 = HEAP32[i14 >> 2] | 0;
     if ((i16 | 0) != 0) {
      HEAP32[i14 >> 2] = 0;
      HEAP32[i13 + 4 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i16);
     }
     __ZN3WTF8fastFreeEPv(i13);
     i15 = HEAP32[i9 >> 2] | 0;
    } else {
     i15 = i11;
    }
   } while (0);
   HEAP32[i7 >> 2] = i1;
   i11 = i15 + 8 | 0;
   i9 = HEAP32[i11 >> 2] | 0;
   if ((i9 | 0) != (HEAP32[i15 + 4 >> 2] | 0)) {
    HEAP32[(HEAP32[i15 >> 2] | 0) + (i9 << 2) >> 2] = i1;
    HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
    break;
   }
   i13 = i9 + 1 | 0;
   i16 = i15 | 0;
   i14 = HEAP32[i16 >> 2] | 0;
   do {
    if (i14 >>> 0 > i7 >>> 0) {
     i12 = 22;
    } else {
     if ((i14 + (i9 << 2) | 0) >>> 0 <= i7 >>> 0) {
      i12 = 22;
      break;
     }
     __ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i13);
     i17 = HEAP32[i16 >> 2] | 0;
     i18 = i17 + (i7 - i14 >> 2 << 2) | 0;
     i19 = i17;
    }
   } while (0);
   if ((i12 | 0) == 22) {
    __ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i15, i13);
    i18 = i7;
    i19 = HEAP32[i16 >> 2] | 0;
   }
   HEAP32[i19 + (HEAP32[i11 >> 2] << 2) >> 2] = HEAP32[i18 >> 2];
   HEAP32[i11 >> 2] = (HEAP32[i11 >> 2] | 0) + 1;
  }
 } while (0);
 do {
  if (i2) {
   if (!i10) {
    break;
   }
   STACKTOP = i6;
   return;
  } else {
   if (!((HEAP8[i1 + 22 | 0] & 32) == 0 | i10)) {
    break;
   }
   STACKTOP = i6;
   return;
  }
 } while (0);
 i10 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i18 = i1 + 176 | 0;
 i1 = i10;
 while (1) {
  i10 = HEAP32[i18 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i12 = 32;
  } else {
   if ((HEAP32[i10 + 40 >> 2] | 0) != (i1 | 0)) {
    i12 = 32;
   }
  }
  if ((i12 | 0) == 32) {
   i12 = 0;
   __ZN7WebCore11RenderLayer13collectLayersEbNS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, i2, i3, i4, i5);
  }
  i1 = HEAP32[i1 + 44 >> 2] | 0;
  if ((i1 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 if ((i4 | 0) == 2) {
  i7 = i2 - 4 | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i7 >> 2] | 0, HEAP32[i1 >> 2] | 0) | 0)) {
   return;
  }
  i8 = HEAP32[i1 >> 2] | 0;
  HEAP32[i1 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i7 >> 2] = i8;
  return;
 } else if ((i4 | 0) == 0 | (i4 | 0) == 1) {
  return;
 } else {
  if ((i4 | 0) < 129) {
   if ((i1 | 0) == (i2 | 0)) {
    return;
   }
   i8 = i1 + 4 | 0;
   if ((i8 | 0) == (i2 | 0)) {
    return;
   } else {
    i9 = i8;
   }
   while (1) {
    i8 = HEAP32[i9 >> 2] | 0;
    L12 : do {
     if ((i9 | 0) == (i1 | 0)) {
      i10 = i1;
     } else {
      i7 = i9;
      while (1) {
       i11 = i7 - 4 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](i8, HEAP32[i11 >> 2] | 0) | 0)) {
        i10 = i7;
        break L12;
       }
       HEAP32[i7 >> 2] = HEAP32[i11 >> 2];
       if ((i11 | 0) == (i1 | 0)) {
        i10 = i1;
        break;
       } else {
        i7 = i11;
       }
      }
     }
    } while (0);
    HEAP32[i10 >> 2] = i8;
    i9 = i9 + 4 | 0;
    if ((i9 | 0) == (i2 | 0)) {
     break;
    }
   }
   return;
  }
  i9 = (i4 | 0) / 2 & -1;
  i10 = i1 + (i9 << 2) | 0;
  if ((i4 | 0) > (i6 | 0)) {
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i1, i10, i3, i9, i5, i6);
   i7 = i4 - i9 | 0;
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i10, i2, i3, i7, i5, i6);
   __ZNSt3__115__inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi(i1, i10, i2, i3, i9, i7, i5, i6);
   return;
  }
  __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i1, i10, i3, i9, i5);
  i6 = i5 + (i9 << 2) | 0;
  __ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE(i10, i2, i3, i4 - i9 | 0, i6);
  i9 = i5 + (i4 << 2) | 0;
  L22 : do {
   if ((i4 + 1 | 0) >>> 0 < 3 >>> 0) {
    i12 = i6;
    i13 = i1;
   } else {
    i2 = i6;
    i10 = i1;
    i7 = i5;
    while (1) {
     if ((i2 | 0) == (i9 | 0)) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 15](HEAP32[i2 >> 2] | 0, HEAP32[i7 >> 2] | 0) | 0) {
      HEAP32[i10 >> 2] = HEAP32[i2 >> 2];
      i14 = i7;
      i15 = i2 + 4 | 0;
     } else {
      HEAP32[i10 >> 2] = HEAP32[i7 >> 2];
      i14 = i7 + 4 | 0;
      i15 = i2;
     }
     i11 = i10 + 4 | 0;
     if ((i14 | 0) == (i6 | 0)) {
      i12 = i15;
      i13 = i11;
      break L22;
     } else {
      i2 = i15;
      i10 = i11;
      i7 = i14;
     }
    }
    if ((i7 | 0) == (i6 | 0)) {
     return;
    } else {
     i16 = i10;
     i17 = i7;
    }
    while (1) {
     HEAP32[i16 >> 2] = HEAP32[i17 >> 2];
     i2 = i17 + 4 | 0;
     if ((i2 | 0) == (i6 | 0)) {
      break;
     } else {
      i16 = i16 + 4 | 0;
      i17 = i2;
     }
    }
    return;
   }
  } while (0);
  if ((i12 | 0) == (i9 | 0)) {
   return;
  } else {
   i18 = i12;
   i19 = i13;
  }
  while (1) {
   HEAP32[i19 >> 2] = HEAP32[i18 >> 2];
   i13 = i18 + 4 | 0;
   if ((i13 | 0) == (i9 | 0)) {
    break;
   } else {
    i18 = i13;
    i19 = i19 + 4 | 0;
   }
  }
  return;
 }
}
function __ZN7WebCore11RenderLayer27paintBackgroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i11 = i10 | 0;
 i12 = i10 + 48 | 0;
 i13 = i10 + 64 | 0;
 i14 = i2 + 8 | 0;
 if ((HEAP32[i14 >> 2] | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 i15 = i2 | 0;
 i2 = i7 | 0;
 i16 = i7 + 40 | 0;
 i17 = i7 + 44 | 0;
 i18 = i7 + 32 | 0;
 i19 = i11 | 0;
 i20 = i11 + 4 | 0;
 i21 = i12;
 i22 = i11 + 20 | 0;
 i23 = i11 + 24 | 0;
 i24 = i11 + 28 | 0;
 i25 = i11 + 32 | 0;
 i26 = i11 + 36 | 0;
 i27 = i11 + 40 | 0;
 i28 = i11 + 44 | 0;
 i29 = i1 + 32 | 0;
 i30 = i7 + 24 | 0;
 i31 = i7 + 28 | 0;
 i32 = i13 | 0;
 i33 = i13 + 4 | 0;
 i34 = i7 + 8 | 0;
 i35 = i34;
 i36 = i7 + 16 | 0;
 i7 = 0;
 while (1) {
  i37 = HEAP32[i15 >> 2] | 0;
  L6 : do {
   if ((HEAP8[i37 + (i7 * 104 & -1) | 0] & 1) != 0) {
    if (i6) {
     __ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj(i1, i4, HEAP32[i2 >> 2] | 0, i5, HEAP32[i16 >> 2] | 0);
    }
    if ((HEAP8[i17] & 1) == 0) {
     i38 = i37 + (i7 * 104 & -1) + 20 | 0;
    } else {
     i39 = i37 + (i7 * 104 & -1) + 20 | 0;
     __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i2 >> 2] | 0, i3, i34, i39, 1);
     i38 = i39;
    }
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i12, i38 | 0);
    i39 = HEAP32[i18 >> 2] | 0;
    i40 = HEAP32[(HEAP32[i2 >> 2] | 0) + 32 >> 2] | 0;
    HEAP32[i19 >> 2] = i3;
    HEAP32[i20 >> 2] = HEAP32[i21 >> 2];
    HEAP32[i20 + 4 >> 2] = HEAP32[i21 + 4 >> 2];
    HEAP32[i20 + 8 >> 2] = HEAP32[i21 + 8 >> 2];
    HEAP32[i20 + 12 >> 2] = HEAP32[i21 + 12 >> 2];
    HEAP32[i22 >> 2] = 0;
    HEAP32[i23 >> 2] = i8;
    HEAP32[i24 >> 2] = i9;
    HEAP32[i25 >> 2] = i39;
    HEAP32[i26 >> 2] = 0;
    HEAP32[i27 >> 2] = 0;
    HEAP32[i28 >> 2] = i40;
    i40 = HEAP32[i29 >> 2] | 0;
    i39 = HEAP32[(HEAP32[i40 >> 2] | 0) + 648 >> 2] | 0;
    i41 = i37 + (i7 * 104 & -1) + 4 | 0;
    if ((HEAP32[i40 + 20 >> 2] & 512 | 0) == 0) {
     i42 = 0;
     i43 = 0;
    } else {
     i44 = i40 + 44 | 0;
     i42 = HEAP32[i44 >> 2] | 0;
     i43 = HEAP32[i44 + 4 >> 2] | 0;
    }
    i44 = (HEAP32[i41 + 4 >> 2] | 0) - i43 + (HEAP32[i31 >> 2] | 0) | 0;
    HEAP32[i32 >> 2] = (HEAP32[i41 >> 2] | 0) - i42 + (HEAP32[i30 >> 2] | 0);
    HEAP32[i33 >> 2] = i44;
    FUNCTION_TABLE_viii[i39 & 15](i40 | 0, i11, i13);
    if ((HEAP8[i17] & 1) == 0) {
     break;
    }
    i40 = i38;
    do {
     if ((HEAP32[i40 >> 2] | 0) == (HEAP32[i35 >> 2] | 0) & (HEAP32[i40 + 4 >> 2] | 0) == (HEAP32[i35 + 4 >> 2] | 0)) {
      i39 = i37 + (i7 * 104 & -1) + 28 | 0;
      if ((HEAP32[i39 >> 2] | 0) != (HEAP32[i36 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i39 + 4 >> 2] | 0) == (HEAP32[i36 + 4 >> 2] | 0)) {
       break L6;
      }
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
   }
  } while (0);
  i7 = i7 + 1 | 0;
  if (i7 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i10;
 return;
}
function __ZNK7WebCore11RenderLayer16childrenClipRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 104 | 0;
 i10 = i3 + 128 | 0;
 i11 = i3 + 144 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 L1 : do {
  if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
   i21 = i2;
   while (1) {
    if ((HEAP8[i21 + 21 | 0] & 16) != 0) {
     i22 = i21;
     break L1;
    }
    L5 : do {
     if ((HEAP8[i21 + 20 | 0] & 16) == 0) {
      i23 = i21;
      while (1) {
       i24 = HEAP32[i23 + 36 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i25 = 0;
        break L5;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
        i25 = i24;
        break L5;
       }
       if ((HEAP8[i24 + 21 | 0] & 20) == 0) {
        i23 = i24;
       } else {
        i25 = i24;
        break;
       }
      }
     } else {
      i25 = HEAP32[i21 + 36 >> 2] | 0;
     }
    } while (0);
    if ((HEAP32[i25 + 172 >> 2] | 0) != 0) {
     i22 = i25;
     break L1;
    }
    i23 = HEAP32[i25 + 208 >> 2] | 0;
    if ((i23 | 0) != 0) {
     if ((HEAP8[i23 + 91 | 0] & 1) != 0) {
      i22 = i25;
      break L1;
     }
    }
    if ((i25 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i21 = i25;
    }
   }
  } else {
   i22 = i2;
  }
 } while (0);
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i6 | 0, 0, 17) | 0;
 _memset(i7 | 0, 0, 17) | 0;
 _memset(i8 | 0, 0, 17) | 0;
 HEAP32[i9 >> 2] = i22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 5;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 1;
 __ZNK7WebCore10RenderView20unscaledDocumentRectEv(i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i10 + 4 >> 2] = i13;
 i13 = i11 + 8 | 0;
 i11 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i10 + 8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i10 + 12 >> 2] = i11;
 __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i2, i9, i10, i5, i6, i7, i8, 0);
 i8 = HEAP32[i22 + 32 >> 2] | 0;
 d26 = +(HEAP32[i7 >> 2] | 0);
 d27 = +(HEAP32[i7 + 4 >> 2] | 0);
 d28 = +(HEAP32[i7 + 8 >> 2] | 0);
 d29 = +(HEAP32[i7 + 12 >> 2] | 0);
 d30 = +d26;
 d31 = +d27;
 HEAPF32[i18 >> 2] = d30;
 HEAPF32[i18 + 4 >> 2] = d31;
 d31 = d26 + d28;
 HEAPF32[i17 + 8 >> 2] = d31;
 HEAPF32[i19 + 12 >> 2] = d27;
 d28 = d27 + d29;
 HEAPF32[i17 + 16 >> 2] = d31;
 HEAPF32[i19 + 20 >> 2] = d28;
 HEAPF32[i17 + 24 >> 2] = d26;
 HEAPF32[i19 + 28 >> 2] = d28;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i20, i8, i19, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i20);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i4);
 i4 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i14 + 8 | 0;
 i14 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 12 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer12paintResizerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i16 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i17 = i9 | 0;
 i18 = HEAP32[i16 + 52 >> 2] | 0;
 i19 = HEAP32[i16 + 56 >> 2] | 0;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 i17 = i9 + 8 | 0;
 HEAP32[i17 >> 2] = i18;
 HEAP32[i17 + 4 >> 2] = i19;
 __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i8, i1, i9);
 i9 = i6;
 i19 = i8 + 4 | 0;
 i17 = HEAP32[i19 >> 2] | 0;
 i18 = i3 | 0;
 i16 = i3 + 4 | 0;
 i3 = HEAP32[i16 >> 2] | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + (HEAP32[i18 >> 2] | 0);
 HEAP32[i19 >> 2] = i17 + i3;
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i8, i4) | 0)) {
  STACKTOP = i5;
  return;
 }
 if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
  __ZN7WebCore11RenderLayer18updateResizerStyleEv(i1);
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i10 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i16 >> 2];
  i16 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i11 + 4 >> 2] = i16;
  i16 = i6 + 8 | 0;
  i7 = HEAP32[i16 + 4 >> 2] | 0;
  HEAP32[i11 + 8 >> 2] = HEAP32[i16 >> 2];
  HEAP32[i11 + 12 >> 2] = i7;
  __ZN7WebCore19RenderScrollbarPart13paintIntoRectEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i4, i2, i10, i11);
  STACKTOP = i5;
  return;
 }
 i11 = i12;
 i10 = i6;
 HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 __ZN7WebCore11RenderLayer24drawPlatformResizerImageEPNS_15GraphicsContextENS_7IntRectE(i1, i2, i12);
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i1 | 0) | 0) {
  STACKTOP = i5;
  return;
 }
 do {
  if ((HEAP32[i1 + 132 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
    break;
   }
   STACKTOP = i5;
   return;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i2, i8);
 i8 = i13;
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 i10 = i13 + 8 | 0;
 i8 = (HEAP32[i13 + 12 >> 2] | 0) + 1 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i13 + 8 >> 2] | 0) + 1;
 HEAP32[i10 + 4 >> 2] = i8;
 HEAP32[i14 >> 2] = __ZN7WebCore7makeRGBEiii(217, 217, 217) | 0;
 HEAP8[i14 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i2, i14, 0);
 __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i2, +1);
 HEAP32[i15 >> 2] = 0;
 HEAP8[i15 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i2, i15, 0);
 __ZN7WebCore15GraphicsContext8drawRectERKNS_7IntRectE(i2, i13);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i9 = i8 | 0;
 i10 = i8 + 48 | 0;
 i11 = i8 + 64 | 0;
 i12 = HEAP32[i3 + 8 >> 2] | 0;
 i13 = i12 >>> 0 > 1 >>> 0 & (HEAP8[i5 + 44 | 0] & 1) != 0;
 i14 = i3 + 8 | 0;
 if ((i12 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i12 = i3 | 0;
 i3 = i5 | 0;
 i15 = i5 + 8 | 0;
 i16 = i5 + 32 | 0;
 i17 = i9 | 0;
 i18 = i9 + 4 | 0;
 i19 = i10;
 i20 = i9 + 20 | 0;
 i21 = i9 + 24 | 0;
 i22 = i9 + 28 | 0;
 i23 = i9 + 32 | 0;
 i24 = i9 + 36 | 0;
 i25 = i9 + 40 | 0;
 i26 = i9 + 44 | 0;
 i27 = (i2 | 0) == 4;
 i28 = i5 + 36 | 0;
 i29 = i1 + 32 | 0;
 i30 = i5 + 24 | 0;
 i31 = i5 + 28 | 0;
 i32 = i11 | 0;
 i33 = i11 + 4 | 0;
 i34 = i15;
 i35 = i5 + 16 | 0;
 i5 = 0;
 while (1) {
  i36 = HEAP32[i12 >> 2] | 0;
  L6 : do {
   if ((HEAP8[i36 + (i5 * 104 & -1) | 0] & 1) != 0) {
    i37 = i36 + (i5 * 104 & -1) + 40 | 0;
    if ((HEAP32[i36 + (i5 * 104 & -1) + 48 >> 2] | 0) < 1) {
     break;
    }
    if ((HEAP32[i36 + (i5 * 104 & -1) + 52 >> 2] | 0) < 1) {
     break;
    }
    if (i13) {
     __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i3 >> 2] | 0, i4, i15, i37, 0);
    }
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i10, i37 | 0);
    i38 = HEAP32[i16 >> 2] | 0;
    i39 = HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0;
    HEAP32[i17 >> 2] = i4;
    HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
    HEAP32[i18 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
    HEAP32[i18 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
    HEAP32[i18 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
    HEAP32[i20 >> 2] = i2;
    HEAP32[i21 >> 2] = i6;
    HEAP32[i22 >> 2] = i7;
    HEAP32[i23 >> 2] = i38;
    HEAP32[i24 >> 2] = 0;
    HEAP32[i25 >> 2] = 0;
    HEAP32[i26 >> 2] = i39;
    if (i27) {
     HEAP32[i25 >> 2] = HEAP32[i28 >> 2];
    }
    i39 = HEAP32[i29 >> 2] | 0;
    i38 = HEAP32[(HEAP32[i39 >> 2] | 0) + 648 >> 2] | 0;
    i40 = i36 + (i5 * 104 & -1) + 4 | 0;
    if ((HEAP32[i39 + 20 >> 2] & 512 | 0) == 0) {
     i41 = 0;
     i42 = 0;
    } else {
     i43 = i39 + 44 | 0;
     i41 = HEAP32[i43 >> 2] | 0;
     i42 = HEAP32[i43 + 4 >> 2] | 0;
    }
    i43 = (HEAP32[i40 + 4 >> 2] | 0) - i42 + (HEAP32[i31 >> 2] | 0) | 0;
    HEAP32[i32 >> 2] = (HEAP32[i40 >> 2] | 0) - i41 + (HEAP32[i30 >> 2] | 0);
    HEAP32[i33 >> 2] = i43;
    FUNCTION_TABLE_viii[i38 & 15](i39 | 0, i9, i11);
    if (!i13) {
     break;
    }
    i39 = i37;
    do {
     if ((HEAP32[i39 >> 2] | 0) == (HEAP32[i34 >> 2] | 0) & (HEAP32[i39 + 4 >> 2] | 0) == (HEAP32[i34 + 4 >> 2] | 0)) {
      i37 = i36 + (i5 * 104 & -1) + 48 | 0;
      if ((HEAP32[i37 >> 2] | 0) != (HEAP32[i35 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i37 + 4 >> 2] | 0) == (HEAP32[i35 + 4 >> 2] | 0)) {
       break L6;
      }
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i4);
   }
  } while (0);
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= (HEAP32[i14 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore11RenderLayer12selfClipRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, d26 = +0, d27 = +0, d28 = +0, d29 = +0, d30 = +0, d31 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 160 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 56 | 0;
 i8 = i3 + 80 | 0;
 i9 = i3 + 104 | 0;
 i10 = i3 + 128 | 0;
 i11 = i3 + 144 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i15 = i14 | 0;
 i16 = i14;
 i17 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i18 = i17 | 0;
 i19 = i17;
 i20 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 L1 : do {
  if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
   i21 = i2;
   while (1) {
    if ((HEAP8[i21 + 21 | 0] & 16) != 0) {
     i22 = i21;
     break L1;
    }
    L5 : do {
     if ((HEAP8[i21 + 20 | 0] & 16) == 0) {
      i23 = i21;
      while (1) {
       i24 = HEAP32[i23 + 36 >> 2] | 0;
       if ((i24 | 0) == 0) {
        i25 = 0;
        break L5;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i24 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
        i25 = i24;
        break L5;
       }
       if ((HEAP8[i24 + 21 | 0] & 20) == 0) {
        i23 = i24;
       } else {
        i25 = i24;
        break;
       }
      }
     } else {
      i25 = HEAP32[i21 + 36 >> 2] | 0;
     }
    } while (0);
    if ((HEAP32[i25 + 172 >> 2] | 0) != 0) {
     i22 = i25;
     break L1;
    }
    i23 = HEAP32[i25 + 208 >> 2] | 0;
    if ((i23 | 0) != 0) {
     if ((HEAP8[i23 + 91 | 0] & 1) != 0) {
      i22 = i25;
      break L1;
     }
    }
    if ((i25 | 0) == 0) {
     i22 = 0;
     break;
    } else {
     i21 = i25;
    }
   }
  } else {
   i22 = i2;
  }
 } while (0);
 _memset(i5 | 0, 0, 16) | 0;
 _memset(i6 | 0, 0, 17) | 0;
 _memset(i7 | 0, 0, 17) | 0;
 _memset(i8 | 0, 0, 17) | 0;
 HEAP32[i9 >> 2] = i22;
 HEAP32[i9 + 4 >> 2] = 0;
 HEAP32[i9 + 8 >> 2] = 0;
 HEAP32[i9 + 12 >> 2] = 0;
 HEAP32[i9 + 16 >> 2] = 1;
 __ZNK7WebCore10RenderView12documentRectEv(i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i10 + 4 >> 2] = i13;
 i13 = i11 + 8 | 0;
 i11 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i10 + 8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i10 + 12 >> 2] = i11;
 __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i2, i9, i10, i5, i6, i7, i8, 0);
 i8 = HEAP32[i22 + 32 >> 2] | 0;
 d26 = +(HEAP32[i6 >> 2] | 0);
 d27 = +(HEAP32[i6 + 4 >> 2] | 0);
 d28 = +(HEAP32[i6 + 8 >> 2] | 0);
 d29 = +(HEAP32[i6 + 12 >> 2] | 0);
 d30 = +d26;
 d31 = +d27;
 HEAPF32[i18 >> 2] = d30;
 HEAPF32[i18 + 4 >> 2] = d31;
 d31 = d26 + d28;
 HEAPF32[i17 + 8 >> 2] = d31;
 HEAPF32[i19 + 12 >> 2] = d27;
 d28 = d27 + d29;
 HEAPF32[i17 + 16 >> 2] = d31;
 HEAPF32[i19 + 20 >> 2] = d28;
 HEAPF32[i17 + 24 >> 2] = d26;
 HEAPF32[i19 + 28 >> 2] = d28;
 __ZNK7WebCore12RenderObject20localToContainerQuadERKNS_9FloatQuadEPKNS_22RenderLayerModelObjectEjPb(i20, i8, i19, 0, 0, 0);
 __ZNK7WebCore9FloatQuad11boundingBoxEv(i4, i20);
 __ZN7WebCore16enclosingIntRectERKNS_9FloatRectE(i16, i4);
 i4 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i1 + 4 >> 2] = i4;
 i4 = i14 + 8 | 0;
 i14 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i1 + 12 >> 2] = i14;
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableIPN7WebCore24OverlapTestRequestClientENS_12KeyValuePairIS3_NS1_7IntRectEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i1 + 4 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = i1 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 i5 = i1 + 8 | 0;
 HEAP32[i5 >> 2] = i2 - 1;
 i9 = __ZN3WTF10fastMallocEj(i2 * 20 & -1) | 0;
 if ((i2 | 0) > 0) {
  i10 = i4 | 0;
  i11 = 0;
  while (1) {
   _llvm_lifetime_start(16, 0, i10 | 0);
   _memset(i10 | 0, 0, 16) | 0;
   HEAP32[i9 + (i11 * 20 & -1) >> 2] = 0;
   i12 = i9 + (i11 * 20 & -1) + 4 | 0;
   HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
   HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
   HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
   _llvm_lifetime_end(16, 0, i10 | 0);
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i7 >> 2] = i9;
 if ((i6 | 0) == 0) {
  i13 = 0;
  i14 = i1 + 16 | 0;
  HEAP32[i14 >> 2] = 0;
  i15 = i8;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i13 | 0;
 } else {
  i16 = 0;
  i17 = 0;
 }
 while (1) {
  i9 = i8 + (i16 * 20 & -1) | 0;
  i2 = HEAP32[i9 >> 2] | 0;
  i11 = i2;
  if ((i11 | 0) == (-1 | 0) | (i11 | 0) == 0) {
   i18 = i17;
  } else {
   i10 = HEAP32[i7 >> 2] | 0;
   i12 = HEAP32[i5 >> 2] | 0;
   i19 = i11 + ~(i11 << 15) | 0;
   i11 = (i19 >>> 10 ^ i19) * 9 & -1;
   i19 = i11 >>> 6 ^ i11;
   i11 = i19 + ~(i19 << 11) | 0;
   i19 = i11 >>> 16 ^ i11;
   i11 = i12 & i19;
   i20 = i10 + (i11 * 20 & -1) | 0;
   i21 = HEAP32[i20 >> 2] | 0;
   L12 : do {
    if ((i21 | 0) == 0) {
     i22 = 0;
     i23 = i20;
     i24 = 8;
    } else {
     i25 = (i19 >>> 23) + ~i19 | 0;
     i26 = i25 << 12 ^ i25;
     i25 = i26 >>> 7 ^ i26;
     i26 = i25 << 2 ^ i25;
     i25 = i26 >>> 20 ^ i26 | 1;
     i26 = 0;
     i27 = 0;
     i28 = i11;
     i29 = i20;
     i30 = i21;
     while (1) {
      if ((i30 | 0) == (i2 | 0)) {
       i31 = i29;
       break L12;
      }
      i32 = (i30 | 0) == -1 ? i29 : i26;
      i33 = (i27 | 0) == 0 ? i25 : i27;
      i34 = i33 + i28 & i12;
      i35 = i10 + (i34 * 20 & -1) | 0;
      i36 = HEAP32[i35 >> 2] | 0;
      if ((i36 | 0) == 0) {
       i22 = i32;
       i23 = i35;
       i24 = 8;
       break;
      } else {
       i26 = i32;
       i27 = i33;
       i28 = i34;
       i29 = i35;
       i30 = i36;
      }
     }
    }
   } while (0);
   if ((i24 | 0) == 8) {
    i24 = 0;
    i31 = (i22 | 0) != 0 ? i22 : i23;
   }
   i10 = i31;
   i12 = i9;
   HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
   HEAP32[i10 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
   HEAP32[i10 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
   HEAP32[i10 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
   HEAP32[i10 + 16 >> 2] = HEAP32[i12 + 16 >> 2];
   i18 = (i9 | 0) == (i3 | 0) ? i31 : i17;
  }
  i12 = i16 + 1 | 0;
  if ((i12 | 0) == (i6 | 0)) {
   i13 = i18;
   break;
  } else {
   i16 = i12;
   i17 = i18;
  }
 }
 i14 = i1 + 16 | 0;
 HEAP32[i14 >> 2] = 0;
 i15 = i8;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i13 | 0;
}
function __ZN7WebCore11RenderLayer18rebuildZOrderListsENS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = (HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 88 | 0] & 1) != 0;
 i9 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i10 = i1 + 176 | 0;
  i1 = i9;
  while (1) {
   i9 = HEAP32[i10 >> 2] | 0;
   if ((i9 | 0) == 0) {
    i11 = 5;
   } else {
    if ((HEAP32[i9 + 40 >> 2] | 0) != (i1 | 0)) {
     i11 = 5;
    }
   }
   if ((i11 | 0) == 5) {
    i11 = 0;
    __ZN7WebCore11RenderLayer13collectLayersEbNS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, i8, i2, i3, i4);
   }
   i1 = HEAP32[i1 + 44 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
  }
 }
 i1 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = HEAP32[i1 >> 2] | 0;
   i2 = HEAP32[i1 + 8 >> 2] | 0;
   i8 = i3 + (i2 << 2) | 0;
   HEAP32[i7 >> 2] = F_BASE_iii + 4;
   i10 = i2 << 2;
   i2 = i10 >> 2;
   if ((i10 | 0) > 512) {
    i12 = i2;
   } else {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i3, i8, i7, i2, 0, 0);
    break;
   }
   while (1) {
    i13 = __ZnwjRKSt9nothrow_t(i12 << 2, __ZSt7nothrow) | 0;
    i14 = i13;
    if ((i13 | 0) != 0) {
     i11 = 13;
     break;
    }
    if ((i12 | 0) > 1) {
     i12 = (i12 | 0) / 2 & -1;
    } else {
     i11 = 11;
     break;
    }
   }
   if ((i11 | 0) == 11) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i3, i8, i7, i2, i14, 0);
    break;
   } else if ((i11 | 0) == 13) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i3, i8, i7, i2, i14, i12);
    __ZdlPv(i13);
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i4 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i13 >> 2] | 0;
 i12 = HEAP32[i13 + 8 >> 2] | 0;
 i13 = i4 + (i12 << 2) | 0;
 HEAP32[i6 >> 2] = F_BASE_iii + 4;
 i14 = i12 << 2;
 i12 = i14 >> 2;
 if ((i14 | 0) > 512) {
  i15 = i12;
 } else {
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i4, i13, i6, i12, 0, 0);
  STACKTOP = i5;
  return;
 }
 while (1) {
  i16 = __ZnwjRKSt9nothrow_t(i15 << 2, __ZSt7nothrow) | 0;
  i17 = i16;
  if ((i16 | 0) != 0) {
   i11 = 20;
   break;
  }
  if ((i15 | 0) > 1) {
   i15 = (i15 | 0) / 2 & -1;
  } else {
   i11 = 18;
   break;
  }
 }
 if ((i11 | 0) == 18) {
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i4, i13, i6, i12, i17, 0);
  STACKTOP = i5;
  return;
 } else if ((i11 | 0) == 20) {
  __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i4, i13, i6, i12, i17, i15);
  __ZdlPv(i16);
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore11RenderLayer11removeChildEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i3 + 2285 | 0] & 1) == 0) {
  __ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_(__ZN7WebCore10RenderView10compositorEv(HEAP32[i3 + 1584 >> 2] | 0) | 0, i1, i2);
 }
 i3 = i2 + 40 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i2 + 44 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 44 >> 2] = HEAP32[i5 >> 2];
 }
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i4 + 40 >> 2] = HEAP32[i3 >> 2];
 }
 i4 = i1 + 48 | 0;
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 }
 i4 = i1 + 52 | 0;
 if ((HEAP32[i4 >> 2] | 0) == (i2 | 0)) {
  HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 }
 i4 = i2 + 20 | 0;
 i6 = HEAP8[i4] | 0;
 if ((i6 & 16) == 0) {
  i7 = i6;
 } else {
  __ZN7WebCore11RenderLayer19dirtyNormalFlowListEv(i1);
  i7 = HEAP8[i4] | 0;
 }
 if ((i7 & 16) == 0) {
  i8 = i2;
  i9 = 15;
 } else {
  if ((HEAP32[i2 + 48 >> 2] | 0) != 0) {
   i8 = i2;
   i9 = 15;
  }
 }
 L21 : do {
  if ((i9 | 0) == 15) {
   while (1) {
    i9 = 0;
    i10 = HEAP32[i8 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L21;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i10 + 21 | 0] & 20) == 0) {
     i8 = i10;
     i9 = 15;
    } else {
     break;
    }
   }
   __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i10);
  }
 } while (0);
 i10 = i2 + 32 | 0;
 if ((HEAP32[(HEAP32[i10 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216) {
  i11 = i1;
  i9 = 21;
 } else {
  if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
   i11 = i1;
   i9 = 21;
  }
 }
 if ((i9 | 0) == 21) {
  while (1) {
   i9 = 0;
   i8 = i11 + 21 | 0;
   HEAP8[i8] = HEAP8[i8] | 2;
   i8 = HEAP32[i11 + 36 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   } else {
    i11 = i8;
    i9 = 21;
   }
  }
 }
 HEAP32[i3 >> 2] = 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i2 + 36 | 0;
 if ((HEAP32[i5 >> 2] | 0) != 0) {
  i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
  if ((HEAP8[i3 + 2285 | 0] & 1) == 0) {
   i10 = __ZN7WebCore10RenderView10compositorEv(HEAP32[i3 + 1584 >> 2] | 0) | 0;
   __ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_(i10, HEAP32[i5 >> 2] | 0, i2);
  }
  HEAP32[i5 >> 2] = 0;
 }
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i2, 0);
 i5 = (i1 | 0) == 0;
 L40 : do {
  if (!((HEAP8[i2 + 22 | 0] & 40) == 0 | i5)) {
   i10 = i1;
   while (1) {
    i3 = i10 + 22 | 0;
    i11 = HEAP8[i3] | 0;
    if ((i11 & 16) != 0) {
     break L40;
    }
    HEAP8[i3] = i11 | 16;
    i10 = HEAP32[i10 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 if ((HEAP8[i4] & 96) == 0 | i5) {
  return i2 | 0;
 } else {
  i12 = i1;
 }
 while (1) {
  i1 = i12 + 20 | 0;
  i5 = HEAP8[i1] | 0;
  HEAP8[i1] = i5 | -128;
  if ((i5 & 32) != 0) {
   i9 = 35;
   break;
  }
  i5 = HEAP32[i12 + 36 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i9 = 33;
   break;
  } else {
   i12 = i5;
  }
 }
 if ((i9 | 0) == 33) {
  return i2 | 0;
 } else if ((i9 | 0) == 35) {
  return i2 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer34updateCompositingLayersAfterScrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 88 | 0] & 1) == 0) {
  return;
 } else {
  i3 = i1;
 }
 while (1) {
  i4 = HEAP32[i3 + 36 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 0;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i5 = i4;
   break;
  }
  if ((HEAP8[i4 + 21 | 0] & 20) == 0) {
   i3 = i4;
  } else {
   i5 = i4;
   break;
  }
 }
 L8 : do {
  if ((HEAP32[i5 + 208 >> 2] | 0) == 0) {
   L10 : do {
    if ((HEAP8[i5 + 20 | 0] & 16) == 0) {
     i3 = i5;
     while (1) {
      i4 = HEAP32[i3 + 36 >> 2] | 0;
      if ((i4 | 0) == 0) {
       break;
      }
      if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
       i6 = i4;
       break L10;
      }
      if ((HEAP8[i4 + 21 | 0] & 20) == 0) {
       i3 = i4;
      } else {
       i6 = i4;
       break L10;
      }
     }
     return;
    } else {
     i3 = HEAP32[i5 + 36 >> 2] | 0;
     if ((i3 | 0) != 0) {
      i6 = i3;
      break;
     }
     return;
    }
   } while (0);
   if ((HEAP32[i6 + 208 >> 2] | 0) == 0) {
    i7 = i6;
   } else {
    i8 = i6;
    i9 = 19;
    break;
   }
   L19 : while (1) {
    L21 : do {
     if ((HEAP8[i7 + 20 | 0] & 16) == 0) {
      i3 = i7;
      while (1) {
       i4 = HEAP32[i3 + 36 >> 2] | 0;
       if ((i4 | 0) == 0) {
        i9 = 29;
        break L19;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
        i10 = i4;
        break L21;
       }
       if ((HEAP8[i4 + 21 | 0] & 20) == 0) {
        i3 = i4;
       } else {
        i11 = i4;
        i9 = 14;
        break;
       }
      }
     } else {
      i11 = HEAP32[i7 + 36 >> 2] | 0;
      i9 = 14;
     }
    } while (0);
    if ((i9 | 0) == 14) {
     i9 = 0;
     if ((i11 | 0) == 0) {
      i9 = 26;
      break;
     } else {
      i10 = i11;
     }
    }
    if ((HEAP32[i10 + 208 >> 2] | 0) == 0) {
     i7 = i10;
    } else {
     i12 = i10;
     break L8;
    }
   }
   if ((i9 | 0) == 29) {
    return;
   } else if ((i9 | 0) == 26) {
    return;
   }
  } else {
   i8 = i5;
   i9 = 19;
  }
 } while (0);
 do {
  if ((i9 | 0) == 19) {
   if ((i8 | 0) != 0) {
    i12 = i8;
    break;
   }
   return;
  }
 } while (0);
 i8 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP32[i8 + 48 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP8[i1 + 21 | 0] & 1) != 0) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 4, i12);
   return;
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 3, i12);
 return;
}
function __ZN7WebCore11RenderLayer32updateScrollbarsAfterStyleChangeEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0 | (i4 | 0) == 0) {
  return;
 }
 i5 = HEAP32[i4 + 36 >> 2] | 0;
 if ((HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 296 >> 2] & 63 | 0) == 10) {
  return;
 }
 i4 = HEAP32[i5 + 48 >> 2] | 0;
 i5 = i4 >>> 10 & 7;
 i6 = i4 >>> 13 & 7;
 i4 = i1 + 128 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i7 = 5;
 } else {
  if ((i5 - 3 | 0) >>> 0 < 2 >>> 0) {
   i8 = 1;
  } else {
   i7 = 5;
  }
 }
 if ((i7 | 0) == 5) {
  i8 = (i5 | 0) == 2;
 }
 i9 = i1 + 132 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  i7 = 8;
 } else {
  if ((i6 - 3 | 0) >>> 0 < 2 >>> 0) {
   i10 = 1;
  } else {
   i7 = 8;
  }
 }
 if ((i7 | 0) == 8) {
  i10 = (i6 | 0) == 2;
 }
 __ZN7WebCore11RenderLayer25setHasHorizontalScrollbarEb(i1, i8);
 __ZN7WebCore11RenderLayer23setHasVerticalScrollbarEb(i1, i10);
 i11 = (i2 | 0) == 0;
 do {
  if (!(i11 | i8 ^ 1)) {
   if ((HEAP32[i2 + 48 >> 2] & 7168 | 0) != 2048 | (i5 | 0) == 2) {
    break;
   }
   i12 = HEAP32[i4 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 208 >> 2] & 31](i12, 1);
  }
 } while (0);
 do {
  if (!(i11 | i10 ^ 1)) {
   if ((HEAP32[i2 + 48 >> 2] & 57344 | 0) != 16384 | (i6 | 0) == 2) {
    break;
   }
   i4 = HEAP32[i9 >> 2] | 0;
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 208 >> 2] & 31](i4, 1);
  }
 } while (0);
 i9 = i1 + 20 | 0;
 if ((HEAP8[i9] & 2) != 0) {
  return;
 }
 i6 = HEAP32[i1 + 120 >> 2] | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 744 >> 2] & 63](i2) | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
  i13 = 0;
 } else {
  i13 = i2;
 }
 do {
  if ((i6 | 0) > (__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i13) | 0)) {
   i2 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
    i14 = 0;
   } else {
    i14 = i2;
   }
   if ((HEAP32[i14 + 20 >> 2] & 65536 | 0) == 0) {
    i7 = 24;
    break;
   }
   i2 = HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 48 >> 2] | 0;
   if ((i2 & 7168 | 0) == 2048) {
    i15 = 1;
    break;
   }
   if (((i2 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
    i15 = 1;
   } else {
    i7 = 24;
   }
  } else {
   i7 = 24;
  }
 } while (0);
 do {
  if ((i7 | 0) == 24) {
   if ((HEAP8[i9] & 2) != 0) {
    __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
   }
   i14 = HEAP32[i1 + 124 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 63](i13) | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i13 + 20 >> 2] & 512 | 0) == 0) {
    i16 = 0;
   } else {
    i16 = i13;
   }
   if ((i14 | 0) <= (__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i16) | 0)) {
    i15 = 0;
    break;
   }
   i14 = HEAP32[i3 >> 2] | 0;
   if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
    i17 = 0;
   } else {
    i17 = i14;
   }
   if ((HEAP32[i17 + 20 >> 2] & 65536 | 0) == 0) {
    i15 = 0;
    break;
   }
   i14 = HEAP32[(HEAP32[i17 + 36 >> 2] | 0) + 48 >> 2] | 0;
   if ((i14 & 57344 | 0) == 16384) {
    i15 = 1;
    break;
   }
   i15 = ((i14 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
  }
 } while (0);
 __ZN7WebCore11RenderLayer23updateScrollableAreaSetEb(i1, i15);
 return;
}
function __ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0;
 i1 = HEAP32[i4 + 16 >> 2] | 0;
 i5 = (HEAP32[(HEAP32[i1 + 132 >> 2] | 0) + 8 >> 2] | 0) != 0;
 i6 = HEAP32[i1 + 104 >> 2] | 0;
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
   i6 = HEAP32[i1 + 112 >> 2] | 0;
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
   i6 = HEAP32[i1 + 120 >> 2] | 0;
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
   i6 = HEAP32[i1 + 128 >> 2] | 0;
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
   i6 = i1 + 136 | 0;
   if ((HEAP8[i1 + 141 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i1 + 142 | 0] & 1) == 0) {
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
   i6 = i1 + 152 | 0;
   if ((HEAP8[i1 + 157 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i1 + 158 | 0] & 1) == 0) {
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
   i6 = i1 + 168 | 0;
   if ((HEAP8[i1 + 173 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i1 + 174 | 0] & 1) == 0) {
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
   i6 = i1 + 184 | 0;
   if ((HEAP8[i1 + 189 | 0] | 0) == 10) {
    i9 = 1;
    break;
   }
   if ((HEAP8[i1 + 190 | 0] & 1) == 0) {
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
   i6 = i4 + 12 | 0;
   i7 = HEAP32[(HEAP32[i6 >> 2] | 0) + 64 >> 2] | 0;
   if ((i7 & 131070 | 0) != 0 & (i7 & 2013265920 | 0) != 0 & (i7 & 1879048192) >>> 0 > 134217728 >>> 0) {
    i9 = 1;
    break;
   }
   i7 = HEAP32[i4 + 20 >> 2] | 0;
   if ((HEAP32[i7 + 296 >> 2] & 63 | 0) != 0) {
    i9 = 1;
    break;
   }
   if ((HEAP32[i7 + 100 >> 2] | 0) != 0) {
    i9 = 1;
    break;
   }
   if ((HEAP32[(HEAP32[i7 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
    i9 = 1;
    break;
   }
   __ZNK7WebCore11RenderStyle21visitedDependentColorEi(i3, i4, 23);
   if ((HEAP8[i3 + 4 | 0] & 1) != 0) {
    if ((HEAP32[i3 >> 2] | 0) >>> 0 >= 16777216 >>> 0) {
     i9 = 1;
     break;
    }
   }
   i7 = (HEAP32[i6 >> 2] | 0) + 4 | 0;
   while (1) {
    if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
     i9 = 1;
     break L4;
    }
    i6 = HEAP32[i7 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i9 = 0;
     break;
    } else {
     i7 = i6;
    }
   }
  }
 } while (0);
 STACKTOP = i2;
 return i9 | 0;
}
function __ZNK7WebCore11RenderLayer36needsCompositingLayersRebuiltForClipEPKNS_11RenderStyleES3_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0;
 if ((i2 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i2 + 8 | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i5 = i2 + 4 | 0;
 i6 = i3 + 8 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 i7 = i3 + 4 | 0;
 i8 = i5 | 0;
 i9 = i7 | 0;
 i10 = HEAP8[i2 + 9 | 0] | 0;
 if (i10 << 24 >> 24 != (HEAP8[i3 + 9 | 0] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if (((HEAP8[i3 + 8 | 0] ^ HEAP8[i2 + 8 | 0]) & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (i10 << 24 >> 24 != 15) {
   if ((HEAP8[i2 + 10 | 0] & 1) == 0) {
    d11 = +(HEAP32[i5 >> 2] | 0);
   } else {
    d11 = +HEAPF32[i5 >> 2];
   }
   if ((HEAP8[i3 + 10 | 0] & 1) == 0) {
    d12 = +(HEAP32[i7 >> 2] | 0);
   } else {
    d12 = +HEAPF32[i7 >> 2];
   }
   if (d11 == d12) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i8, i9) | 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i9 = i2 + 12 | 0;
 i8 = i3 + 12 | 0;
 i7 = HEAP8[i2 + 17 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i3 + 17 | 0] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if (((HEAP8[i3 + 16 | 0] ^ HEAP8[i2 + 16 | 0]) & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (i7 << 24 >> 24 != 15) {
   if ((HEAP8[i2 + 18 | 0] & 1) == 0) {
    d13 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d13 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i3 + 18 | 0] & 1) == 0) {
    d14 = +(HEAP32[i8 >> 2] | 0);
   } else {
    d14 = +HEAPF32[i8 >> 2];
   }
   if (d13 == d14) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i8) | 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i8 = i2 + 20 | 0;
 i9 = i3 + 20 | 0;
 i7 = HEAP8[i2 + 25 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i3 + 25 | 0] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if (((HEAP8[i3 + 24 | 0] ^ HEAP8[i2 + 24 | 0]) & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (i7 << 24 >> 24 != 15) {
   if ((HEAP8[i2 + 26 | 0] & 1) == 0) {
    d15 = +(HEAP32[i8 >> 2] | 0);
   } else {
    d15 = +HEAPF32[i8 >> 2];
   }
   if ((HEAP8[i3 + 26 | 0] & 1) == 0) {
    d16 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d16 = +HEAPF32[i9 >> 2];
   }
   if (d15 == d16) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i8, i9) | 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i9 = i2 + 28 | 0;
 i8 = i3 + 28 | 0;
 i7 = HEAP8[i2 + 33 | 0] | 0;
 if (i7 << 24 >> 24 != (HEAP8[i3 + 33 | 0] | 0)) {
  i4 = 1;
  return i4 | 0;
 }
 if (((HEAP8[i3 + 32 | 0] ^ HEAP8[i2 + 32 | 0]) & 1) != 0) {
  i4 = 1;
  return i4 | 0;
 }
 do {
  if (i7 << 24 >> 24 != 15) {
   if ((HEAP8[i2 + 34 | 0] & 1) == 0) {
    d17 = +(HEAP32[i9 >> 2] | 0);
   } else {
    d17 = +HEAPF32[i9 >> 2];
   }
   if ((HEAP8[i3 + 34 | 0] & 1) == 0) {
    d18 = +(HEAP32[i8 >> 2] | 0);
   } else {
    d18 = +HEAPF32[i8 >> 2];
   }
   if (d17 == d18) {
    break;
   }
   if (__ZNK7WebCore6Length17isCalculatedEqualERKS0_(i9, i8) | 0) {
    break;
   } else {
    i4 = 1;
   }
   return i4 | 0;
  }
 } while (0);
 i4 = (HEAP8[(HEAP32[i1 >> 2] | 0) + 36 | 0] & 1) != 0 ^ (HEAP8[(HEAP32[i6 >> 2] | 0) + 36 | 0] & 1) != 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderLayer21paintMaskForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEPNS_12RenderObjectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i7 = i6 | 0;
 i8 = i6 + 48 | 0;
 i9 = i6 + 64 | 0;
 i10 = i2 + 8 | 0;
 if ((HEAP32[i10 >> 2] | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 i11 = i2 | 0;
 i2 = i4 + 44 | 0;
 i12 = i4 + 32 | 0;
 i13 = i4 | 0;
 i14 = i7 | 0;
 i15 = i7 + 4 | 0;
 i16 = i8;
 i17 = i7 + 20 | 0;
 i18 = i7 + 24 | 0;
 i19 = i7 + 28 | 0;
 i20 = i7 + 32 | 0;
 i21 = i7 + 36 | 0;
 i22 = i7 + 40 | 0;
 i23 = i7 + 44 | 0;
 i24 = i1 + 32 | 0;
 i25 = i4 + 24 | 0;
 i26 = i4 + 28 | 0;
 i27 = i9 | 0;
 i28 = i9 + 4 | 0;
 i29 = i4 + 8 | 0;
 i30 = i29;
 i31 = i4 + 16 | 0;
 i4 = 0;
 while (1) {
  i32 = HEAP32[i11 >> 2] | 0;
  L6 : do {
   if ((HEAP8[i32 + (i4 * 104 & -1) | 0] & 1) != 0) {
    if ((HEAP8[i2] & 1) == 0) {
     i33 = i32 + (i4 * 104 & -1) + 20 | 0;
    } else {
     i34 = i32 + (i4 * 104 & -1) + 20 | 0;
     __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i13 >> 2] | 0, i3, i29, i34, 1);
     i33 = i34;
    }
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i33 | 0);
    i34 = HEAP32[i12 >> 2] | 0;
    i35 = HEAP32[(HEAP32[i13 >> 2] | 0) + 32 >> 2] | 0;
    HEAP32[i14 >> 2] = i3;
    HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
    HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    HEAP32[i17 >> 2] = 11;
    HEAP32[i18 >> 2] = 0;
    HEAP32[i19 >> 2] = i5;
    HEAP32[i20 >> 2] = i34;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i23 >> 2] = i35;
    i35 = HEAP32[i24 >> 2] | 0;
    i34 = HEAP32[(HEAP32[i35 >> 2] | 0) + 648 >> 2] | 0;
    i36 = i32 + (i4 * 104 & -1) + 4 | 0;
    if ((HEAP32[i35 + 20 >> 2] & 512 | 0) == 0) {
     i37 = 0;
     i38 = 0;
    } else {
     i39 = i35 + 44 | 0;
     i37 = HEAP32[i39 >> 2] | 0;
     i38 = HEAP32[i39 + 4 >> 2] | 0;
    }
    i39 = (HEAP32[i36 + 4 >> 2] | 0) - i38 + (HEAP32[i26 >> 2] | 0) | 0;
    HEAP32[i27 >> 2] = (HEAP32[i36 >> 2] | 0) - i37 + (HEAP32[i25 >> 2] | 0);
    HEAP32[i28 >> 2] = i39;
    FUNCTION_TABLE_viii[i34 & 15](i35 | 0, i7, i9);
    if ((HEAP8[i2] & 1) == 0) {
     break;
    }
    i35 = i33;
    do {
     if ((HEAP32[i35 >> 2] | 0) == (HEAP32[i30 >> 2] | 0) & (HEAP32[i35 + 4 >> 2] | 0) == (HEAP32[i30 + 4 >> 2] | 0)) {
      i34 = i32 + (i4 * 104 & -1) + 28 | 0;
      if ((HEAP32[i34 >> 2] | 0) != (HEAP32[i31 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i34 + 4 >> 2] | 0) == (HEAP32[i31 + 4 >> 2] | 0)) {
       break L6;
      }
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
   }
  } while (0);
  i4 = i4 + 1 | 0;
  if (i4 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i6;
 return;
}
function __ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i8 = i1;
 i9 = i2;
 if ((i5 | 0) <= (i6 | 0)) {
  L3 : do {
   if ((i1 | 0) == (i2 | 0)) {
    i10 = i1;
    i11 = i2;
   } else {
    i6 = ((i2 - 4 + (-i8 | 0) | 0) >>> 2) + 1 | 0;
    i5 = i7;
    i12 = i1;
    while (1) {
     if ((i5 | 0) != 0) {
      HEAP32[i5 >> 2] = HEAP32[i12 >> 2];
     }
     i13 = i12 + 4 | 0;
     if ((i13 | 0) == (i2 | 0)) {
      break;
     } else {
      i5 = i5 + 4 | 0;
      i12 = i13;
     }
    }
    i12 = i7 + (i6 << 2) | 0;
    if ((i12 | 0) == (i7 | 0)) {
     i10 = i1;
     i11 = i2;
     break;
    } else {
     i14 = i1;
     i15 = i7;
     i16 = i2;
    }
    while (1) {
     if ((i16 | 0) == (i3 | 0)) {
      break;
     }
     if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 15](HEAP32[i16 >> 2] | 0, HEAP32[i15 >> 2] | 0) | 0) {
      HEAP32[i14 >> 2] = HEAP32[i16 >> 2];
      i17 = i15;
      i18 = i16 + 4 | 0;
     } else {
      HEAP32[i14 >> 2] = HEAP32[i15 >> 2];
      i17 = i15 + 4 | 0;
      i18 = i16;
     }
     i5 = i14 + 4 | 0;
     if ((i17 | 0) == (i12 | 0)) {
      i10 = i5;
      i11 = i18;
      break L3;
     } else {
      i14 = i5;
      i15 = i17;
      i16 = i18;
     }
    }
    _memmove(i14 | 0, i15 | 0, i12 - i15 | 0) | 0;
    return;
   }
  } while (0);
  _memmove(i10 | 0, i11 | 0, i3 - i11 | 0) | 0;
  return;
 }
 if ((i2 | 0) == (i3 | 0)) {
  i19 = i7;
 } else {
  i11 = ((i3 - 4 + (-i9 | 0) | 0) >>> 2) + 1 | 0;
  i9 = i7;
  i10 = i2;
  while (1) {
   if ((i9 | 0) != 0) {
    HEAP32[i9 >> 2] = HEAP32[i10 >> 2];
   }
   i15 = i10 + 4 | 0;
   if ((i15 | 0) == (i3 | 0)) {
    break;
   } else {
    i9 = i9 + 4 | 0;
    i10 = i15;
   }
  }
  i19 = i7 + (i11 << 2) | 0;
 }
 L32 : do {
  if ((i2 | 0) == (i1 | 0)) {
   i20 = i19;
   i21 = i3;
  } else {
   i11 = i2;
   i10 = i19;
   i9 = i3;
   while (1) {
    if ((i10 | 0) == (i7 | 0)) {
     break;
    }
    i15 = i10 - 4 | 0;
    i14 = i11 - 4 | 0;
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 15](HEAP32[i15 >> 2] | 0, HEAP32[i14 >> 2] | 0) | 0) {
     HEAP32[i9 - 4 >> 2] = HEAP32[i14 >> 2];
     i22 = i14;
     i23 = i10;
    } else {
     HEAP32[i9 - 4 >> 2] = HEAP32[i15 >> 2];
     i22 = i11;
     i23 = i15;
    }
    i15 = i9 - 4 | 0;
    if ((i22 | 0) == (i1 | 0)) {
     i20 = i23;
     i21 = i15;
     break L32;
    } else {
     i11 = i22;
     i10 = i23;
     i9 = i15;
    }
   }
   if ((i11 | 0) == (i1 | 0)) {
    return;
   } else {
    i24 = i11;
    i25 = i9;
   }
   while (1) {
    i24 = i24 - 4 | 0;
    i25 = i25 - 4 | 0;
    HEAP32[i25 >> 2] = HEAP32[i24 >> 2];
    if ((i24 | 0) == (i1 | 0)) {
     break;
    }
   }
   return;
  }
 } while (0);
 if ((i20 | 0) == (i7 | 0)) {
  return;
 } else {
  i26 = i21;
  i27 = i20;
 }
 while (1) {
  i27 = i27 - 4 | 0;
  i26 = i26 - 4 | 0;
  HEAP32[i26 >> 2] = HEAP32[i27 >> 2];
  if ((i27 | 0) == (i7 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderLayer12setupFiltersEPNS_15GraphicsContextERNS0_17LayerPaintingInfoEjRKNS_11LayoutPointERNS_10LayoutRectERb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 i12 = i9 + 32 | 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i3) | 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i9;
  return;
 }
 if ((i5 & 16 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i9;
  return;
 }
 i5 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i2) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 + 12 | 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
    break;
   }
   i13 = HEAP32[i2 + 208 >> 2] | 0;
   if ((i13 | 0) != 0) {
    if ((HEAP8[i13 + 92 | 0] & 1) != 0) {
     break;
    }
   }
   i13 = __Znwj(32) | 0;
   i14 = i13;
   _memset(i13 | 0, 0, 28) | 0;
   HEAP8[i13 + 28 | 0] = 1;
   HEAP8[i13 + 29 | 0] = 0;
   i15 = i11;
   i16 = i5 + 16 | 0;
   HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   i15 = HEAP32[i6 + 4 >> 2] | 0;
   i17 = i11 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + (HEAP32[i6 >> 2] | 0);
   i17 = i11 + 4 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i15;
   if ((HEAP8[i8] & 1) == 0) {
    __ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj(i12, i2, HEAP32[i4 >> 2] | 0, i6, 0);
    i15 = i7;
    i17 = i12;
    HEAP32[i15 >> 2] = HEAP32[i17 >> 2];
    HEAP32[i15 + 4 >> 2] = HEAP32[i17 + 4 >> 2];
    HEAP32[i15 + 8 >> 2] = HEAP32[i17 + 8 >> 2];
    HEAP32[i15 + 12 >> 2] = HEAP32[i17 + 12 >> 2];
    HEAP8[i8] = 1;
   }
   i17 = i4 + 8 | 0;
   do {
    if (__ZN7WebCore26FilterEffectRendererHelper19prepareFilterEffectEPNS_11RenderLayerERKNS_10LayoutRectES5_S5_(i14, i2, i7, i17, i11) | 0) {
     i15 = i10;
     _llvm_lifetime_start(16, 0, i15 | 0);
     _memset(i15 | 0, 0, 16) | 0;
     HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i16 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i16 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i16 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     _llvm_lifetime_end(16, 0, i15 | 0);
     if (!(__ZN7WebCore26FilterEffectRendererHelper17beginFilterEffectEv(i14) | 0)) {
      HEAP32[i1 >> 2] = 0;
      break;
     }
     i15 = i13 + 12 | 0;
     i18 = i17;
     HEAP32[i18 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i18 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i18 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i18 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     HEAP8[i4 + 44 | 0] = HEAP8[(HEAP32[i3 >> 2] | 0) + 89 | 0] & 1 ^ 1;
     HEAP32[i1 >> 2] = i14;
     STACKTOP = i9;
     return;
    } else {
     HEAP32[i1 >> 2] = 0;
    }
   } while (0);
   if ((i13 | 0) == 0) {
    STACKTOP = i9;
    return;
   }
   __ZdlPv(i13);
   STACKTOP = i9;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i9;
 return;
}
function __ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i5 = i4 | 0;
 i6 = i4 + 128 | 0;
 i7 = i4 + 136 | 0;
 i8 = i4 + 144 | 0;
 i9 = i4 + 272 | 0;
 i10 = HEAP32[i2 + 172 >> 2] | 0;
 if ((i10 | 0) == 0) {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 32) | 0;
  HEAPF64[i1 + 40 >> 3] = +1;
  _memset(i1 + 48 | 0, 0, 32) | 0;
  HEAPF64[i1 + 80 >> 3] = +1;
  _memset(i1 + 88 | 0, 0, 32) | 0;
  HEAPF64[i1 + 120 >> 3] = +1;
  STACKTOP = i4;
  return;
 }
 i11 = i2 + 32 | 0;
 i2 = HEAP32[i11 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] & 32768 | 0) != 0) {
  HEAPF64[i5 >> 3] = +1;
  _memset(i5 + 8 | 0, 0, 32) | 0;
  HEAPF64[i5 + 40 >> 3] = +1;
  _memset(i5 + 48 | 0, 0, 32) | 0;
  HEAPF64[i5 + 80 >> 3] = +1;
  _memset(i5 + 88 | 0, 0, 32) | 0;
  HEAPF64[i5 + 120 >> 3] = +1;
  i12 = __ZNK7WebCore12RenderObject9animationEv(i2 | 0) | 0;
  __ZN7WebCore19AnimationController27getAnimatedStyleForRendererEPNS_13RenderElementE(i6, i12, HEAP32[i11 >> 2] | 0);
  i12 = i6 | 0;
  i6 = HEAP32[i12 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  i12 = HEAP32[i11 >> 2] | 0;
  i13 = HEAP32[i12 + 56 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i12 + 52 >> 2];
  HEAP32[i7 + 4 >> 2] = i13;
  __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE(i6, i5, i7, i3);
  if (!(__ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) | 0)) {
   __ZN7WebCore20TransformationMatrix10makeAffineEv(i5);
  }
  _memcpy(i1 | 0, i5 | 0, 128) | 0;
  if ((i6 | 0) == 0) {
   STACKTOP = i4;
   return;
  }
  i5 = i6 | 0;
  i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
  if ((i7 | 0) == 0) {
   __ZN7WebCore11RenderStyleD2Ev(i6);
   __ZN3WTF8fastFreeEPv(i6);
   STACKTOP = i4;
   return;
  } else {
   HEAP32[i5 >> 2] = i7;
   STACKTOP = i4;
   return;
  }
 }
 if ((i3 | 0) != 1) {
  if ((i10 | 0) == (i1 | 0)) {
   STACKTOP = i4;
   return;
  }
  _memcpy(i1 | 0, i10 | 0, 128) | 0;
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[i2 + 20 >> 2] & 512 | 0) == 0) {
  i14 = 0;
 } else {
  i14 = i2;
 }
 HEAPF64[i8 >> 3] = +1;
 _memset(i8 + 8 | 0, 0, 32) | 0;
 HEAPF64[i8 + 40 >> 3] = +1;
 _memset(i8 + 48 | 0, 0, 32) | 0;
 HEAPF64[i8 + 80 >> 3] = +1;
 _memset(i8 + 88 | 0, 0, 32) | 0;
 HEAPF64[i8 + 120 >> 3] = +1;
 i2 = HEAP32[i14 + 36 >> 2] | 0;
 i10 = HEAP32[i14 + 56 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i14 + 52 >> 2];
 HEAP32[i9 + 4 >> 2] = i10;
 __ZNK7WebCore11RenderStyle14applyTransformERNS_20TransformationMatrixERKNS_10LayoutSizeENS0_20ApplyTransformOriginE(i2, i8, i9, 1);
 if (!(__ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) | 0)) {
  __ZN7WebCore20TransformationMatrix10makeAffineEv(i8);
 }
 _memcpy(i1 | 0, i8 | 0, 128) | 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i1 + 32 | 0;
 __ZN7WebCore8Document12updateLayoutEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0);
 i16 = HEAP32[i15 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 248 >> 2] & 63](i16 | 0) | 0) {
   i17 = HEAP32[i15 >> 2] | 0;
   if ((HEAP32[i16 + 20 >> 2] & 25165824 | 0) != 16777216) {
    i18 = i17;
    i19 = 5;
    break;
   }
   FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 824 >> 2] & 31](i6, i17);
  } else {
   i18 = HEAP32[i15 >> 2] | 0;
   i19 = 5;
  }
 } while (0);
 if ((i19 | 0) == 5) {
  __ZNK7WebCore10RenderView12documentRectEv(i9, HEAP32[(HEAP32[(HEAP32[(HEAP32[i18 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0);
  i18 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i6 + 4 >> 2] = i18;
  i18 = i7 + 8 | 0;
  i7 = HEAP32[i18 + 4 >> 2] | 0;
  HEAP32[i6 + 8 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i6 + 12 >> 2] = i7;
 }
 i7 = i2 | 0;
 if ((HEAP32[i7 >> 2] & 32 | 0) == 0) {
  __ZNK7WebCore10ScrollView18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i13, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, 0);
  i13 = HEAP32[i12 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i10 + 4 >> 2] = i13;
  i13 = i11 + 8 | 0;
  i11 = HEAP32[i13 + 4 >> 2] | 0;
  HEAP32[i10 + 8 >> 2] = HEAP32[i13 >> 2];
  HEAP32[i10 + 12 >> 2] = i11;
  __ZN7WebCore10LayoutRect9intersectERKS0_(i6, i10);
 }
 i10 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i1, i1, 0, i2, i4, i6, i3, 0, 0, 0) | 0;
 do {
  if ((i10 | 0) == 0) {
   i6 = HEAP32[i7 >> 2] | 0;
   if ((i6 & 2048 | 0) != 0 | (i6 & 20 | 0) == 0) {
    i20 = 0;
    break;
   }
   if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
    i20 = 0;
    break;
   }
   i6 = HEAP32[i15 >> 2] | 0;
   i2 = HEAP32[(HEAP32[i6 >> 2] | 0) + 456 >> 2] | 0;
   __ZNK7WebCore9RenderBox18flipForWritingModeERKNS_11LayoutPointE(i14, i6, i3 | 0);
   FUNCTION_TABLE_viii[i2 & 15](i6 | 0, i4, i14);
   i20 = i1;
  } else {
   i20 = i10;
  }
 } while (0);
 i10 = HEAP32[i4 + 72 >> 2] | 0;
 if ((i10 | 0) == 0) {
  i21 = (i20 | 0) != 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 if ((HEAP32[i4 + 96 >> 2] | 0) != 0) {
  i21 = (i20 | 0) != 0;
  STACKTOP = i5;
  return i21 | 0;
 }
 __ZN7WebCore13HitTestResult13setURLElementEPNS_7ElementE(i4, __ZN7WebCore4Node30enclosingLinkEventParentOrSelfEv(i10) | 0);
 i21 = (i20 | 0) != 0;
 STACKTOP = i5;
 return i21 | 0;
}
function __ZNK7WebCore11RenderLayer20intersectsDamageRectERKNS_10LayoutRectES3_PKS0_PKNS_11LayoutPointEPNS_12RenderRegionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = i10 | 0;
 i12 = i10;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
  i13 = 1;
  STACKTOP = i7;
  return i13 | 0;
 }
 i14 = i1 + 32 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = i15 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i17 + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0) == (i17 | 0)) {
  i13 = 1;
  STACKTOP = i7;
  return i13 | 0;
 }
 do {
  if ((HEAP32[i15 + 24 >> 2] & 4 | 0) == 0) {
   i17 = i8;
   i18 = i2;
   HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i17 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
   HEAP32[i17 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
   HEAP32[i17 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
   i18 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i16 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 176 >> 2] | 0;
   i17 = i8 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i18;
   i17 = i8 + 8 | 0;
   i19 = i18 << 1;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + i19;
   i17 = i8 + 4 | 0;
   HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) - i18;
   i18 = i8 + 12 | 0;
   HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + i19;
   if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i8, i3) | 0) {
    i13 = 1;
   } else {
    break;
   }
   STACKTOP = i7;
   return i13 | 0;
  }
 } while (0);
 do {
  if ((i6 | 0) != 0) {
   i8 = HEAP32[i14 >> 2] | 0;
   i16 = HEAP32[i8 + 20 >> 2] | 0;
   if ((i16 & 512 | 0) == 0 | (i16 & 805306368 | 0) == 0) {
    break;
   }
   if ((__ZNK7WebCore12RenderObject31locateFlowThreadContainingBlockEv(i8 | 0) | 0) == 0) {
    break;
   }
   i8 = i9;
   i16 = i2;
   HEAP32[i8 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i8 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
   HEAP32[i8 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
   HEAP32[i8 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
   __ZN7WebCore12RenderRegion24visualOverflowRectForBoxEPKNS_9RenderBoxE(i12, i6, HEAP32[i14 >> 2] | 0);
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i8 = i9 | 0;
   i15 = (HEAP32[i8 >> 2] | 0) + (HEAP32[i11 >> 2] | 0) | 0;
   HEAP32[i8 >> 2] = i15;
   i19 = i9 + 4 | 0;
   i18 = (HEAP32[i19 >> 2] | 0) + i16 | 0;
   HEAP32[i19 >> 2] = i18;
   i16 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 176 >> 2] | 0;
   HEAP32[i8 >> 2] = i15 - i16;
   i15 = i9 + 8 | 0;
   i8 = i16 << 1;
   HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + i8;
   HEAP32[i19 >> 2] = i18 - i16;
   i16 = i9 + 12 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + i8;
   if (__ZNK7WebCore10LayoutRect10intersectsERKS0_(i9, i3) | 0) {
    i13 = 1;
   } else {
    break;
   }
   STACKTOP = i7;
   return i13 | 0;
  }
 } while (0);
 __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i10, i1, i4, 0, i5);
 i13 = __ZNK7WebCore10LayoutRect10intersectsERKS0_(i10, i3) | 0;
 STACKTOP = i7;
 return i13 | 0;
}
function __ZN7WebCore11RenderLayer24paintOutlineForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i8 = i7 | 0;
 i9 = i7 + 48 | 0;
 i10 = i7 + 64 | 0;
 i11 = i2 + 8 | 0;
 if ((HEAP32[i11 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i2 | 0;
 i2 = i4 + 32 | 0;
 i13 = i4 | 0;
 i14 = i8 | 0;
 i15 = i8 + 4 | 0;
 i16 = i9;
 i17 = i8 + 20 | 0;
 i18 = i8 + 24 | 0;
 i19 = i8 + 28 | 0;
 i20 = i8 + 32 | 0;
 i21 = i8 + 36 | 0;
 i22 = i8 + 40 | 0;
 i23 = i8 + 44 | 0;
 i24 = i4 + 8 | 0;
 i25 = i1 + 32 | 0;
 i26 = i4 + 24 | 0;
 i27 = i4 + 28 | 0;
 i28 = i10 | 0;
 i29 = i10 + 4 | 0;
 i30 = i24;
 i31 = i4 + 16 | 0;
 i4 = 0;
 while (1) {
  i32 = HEAP32[i12 >> 2] | 0;
  i33 = i32 + (i4 * 104 & -1) + 60 | 0;
  L6 : do {
   if ((HEAP32[i32 + (i4 * 104 & -1) + 68 >> 2] | 0) >= 1) {
    if ((HEAP32[i32 + (i4 * 104 & -1) + 72 >> 2] | 0) < 1) {
     break;
    }
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i9, i33 | 0);
    i34 = HEAP32[i2 >> 2] | 0;
    i35 = HEAP32[i13 >> 2] | 0;
    i36 = HEAP32[i35 + 32 >> 2] | 0;
    HEAP32[i14 >> 2] = i3;
    HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
    HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
    HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
    HEAP32[i15 + 12 >> 2] = HEAP32[i16 + 12 >> 2];
    HEAP32[i17 >> 2] = 7;
    HEAP32[i18 >> 2] = i5;
    HEAP32[i19 >> 2] = i6;
    HEAP32[i20 >> 2] = i34;
    HEAP32[i21 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    HEAP32[i23 >> 2] = i36;
    __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, i35, i3, i24, i33, 1);
    i35 = HEAP32[i25 >> 2] | 0;
    i36 = HEAP32[(HEAP32[i35 >> 2] | 0) + 648 >> 2] | 0;
    i34 = i32 + (i4 * 104 & -1) + 4 | 0;
    if ((HEAP32[i35 + 20 >> 2] & 512 | 0) == 0) {
     i37 = 0;
     i38 = 0;
    } else {
     i39 = i35 + 44 | 0;
     i37 = HEAP32[i39 >> 2] | 0;
     i38 = HEAP32[i39 + 4 >> 2] | 0;
    }
    i39 = (HEAP32[i34 + 4 >> 2] | 0) - i38 + (HEAP32[i27 >> 2] | 0) | 0;
    HEAP32[i28 >> 2] = (HEAP32[i34 >> 2] | 0) - i37 + (HEAP32[i26 >> 2] | 0);
    HEAP32[i29 >> 2] = i39;
    FUNCTION_TABLE_viii[i36 & 15](i35 | 0, i8, i10);
    i35 = i33;
    do {
     if ((HEAP32[i35 >> 2] | 0) == (HEAP32[i30 >> 2] | 0) & (HEAP32[i35 + 4 >> 2] | 0) == (HEAP32[i30 + 4 >> 2] | 0)) {
      i36 = i32 + (i4 * 104 & -1) + 68 | 0;
      if ((HEAP32[i36 >> 2] | 0) != (HEAP32[i31 >> 2] | 0)) {
       break;
      }
      if ((HEAP32[i36 + 4 >> 2] | 0) == (HEAP32[i31 + 4 >> 2] | 0)) {
       break L6;
      }
     }
    } while (0);
    __ZN7WebCore15GraphicsContext7restoreEv(i3);
   }
  } while (0);
  i4 = i4 + 1 | 0;
  if (i4 >>> 0 >= (HEAP32[i11 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderLayer24drawPlatformResizerImageEPNS_15GraphicsContextENS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i9;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i11 | 0;
 i13 = i11;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i1 + 32 | 0;
 if (+__ZN7WebCore17deviceScaleFactorEPNS_5FrameE(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) < +2) {
  if (HEAP8[H_BASE + 368 | 0] | 0) {
   i16 = HEAP32[H_BASE + 392 >> 2] | 0;
  } else {
   __ZN7WebCore5Image20loadPlatformResourceEPKc(i8, H_BASE + 8 | 0);
   i1 = i8 | 0;
   i8 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   HEAP32[H_BASE + 392 >> 2] = i8;
   HEAP8[H_BASE + 368 | 0] = 1;
   i16 = i8;
  }
  if ((i16 | 0) != 0) {
   i8 = i16 + 4 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i16 >> 2] | 0) + 48 >> 2] & 31](i10, i16);
  i17 = HEAP32[i9 >> 2] | 0;
  i18 = HEAP32[i9 + 4 >> 2] | 0;
  i19 = i16;
 } else {
  if (HEAP8[H_BASE + 376 | 0] | 0) {
   i20 = HEAP32[H_BASE + 400 >> 2] | 0;
  } else {
   __ZN7WebCore5Image20loadPlatformResourceEPKc(i5, H_BASE + 32 | 0);
   i16 = i5 | 0;
   i5 = HEAP32[i16 >> 2] | 0;
   HEAP32[i16 >> 2] = 0;
   HEAP32[H_BASE + 400 >> 2] = i5;
   HEAP8[H_BASE + 376 | 0] = 1;
   i20 = i5;
  }
  if ((i20 | 0) != 0) {
   i5 = i20 + 4 | 0;
   HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
  }
  FUNCTION_TABLE_vii[HEAP32[(HEAP32[i20 >> 2] | 0) + 48 >> 2] & 31](i7, i20);
  i17 = ~~(+(HEAP32[i6 >> 2] | 0) * +.5);
  i18 = ~~(+(HEAP32[i6 + 4 >> 2] | 0) * +.5);
  i19 = i20;
 }
 i20 = (HEAP32[i3 + 4 >> 2] | 0) - i18 + (HEAP32[i3 + 12 >> 2] | 0) | 0;
 HEAP32[i12 >> 2] = (HEAP32[i3 >> 2] | 0) - i17 + (HEAP32[i3 + 8 >> 2] | 0);
 HEAP32[i12 + 4 >> 2] = i20;
 i20 = i11 + 8 | 0;
 HEAP32[i20 >> 2] = i17;
 HEAP32[i20 + 4 >> 2] = i18;
 i18 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 1;
 __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i2, i19, i18, i13, 2, i14, 0);
 if ((i19 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i14 = i19 + 4 | 0;
 i19 = i14 | 0;
 i13 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
 if ((i13 | 0) != 0) {
  HEAP32[i19 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
 i13 = i14 - 4 | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 15](i13);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES4_iEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SG_SD_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E6expandEPS6_(i2, 0) | 0;
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
 i9 = i10 & i6;
 i11 = i7 + (i9 << 3) | 0;
 i12 = HEAP32[i11 >> 2] | 0;
 do {
  if ((i12 | 0) == 0) {
   i13 = i11;
   i14 = 9;
  } else {
   i15 = (i10 >>> 23) + ~i10 | 0;
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
     i14 = 6;
     break;
    }
    i21 = (i20 | 0) == -1 ? i19 : i17;
    i22 = (i16 | 0) == 0 ? i15 : i16;
    i23 = i22 + i18 & i6;
    i24 = i7 + (i23 << 3) | 0;
    i25 = HEAP32[i24 >> 2] | 0;
    if ((i25 | 0) == 0) {
     i14 = 8;
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
    if ((i21 | 0) == 0) {
     i13 = i24;
     i14 = 9;
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
   } else if ((i14 | 0) == 6) {
    i20 = i7 + (HEAP32[i2 + 4 >> 2] << 3) | 0;
    i18 = i1;
    HEAP32[i18 >> 2] = i19;
    HEAP32[i18 + 4 >> 2] = i20;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   }
  }
 } while (0);
 if ((i14 | 0) == 9) {
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
  i8 = __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E6expandEPS6_(i2, i26) | 0;
  i29 = i8;
  i30 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i30 << 3) | 0;
 i30 = i1;
 HEAP32[i30 >> 2] = i29;
 HEAP32[i30 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
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
  i26 = __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i29, i25) | 0;
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
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i8, 0) | 0;
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
   if ((i13 | 0) == 8) {
    i19 = i10 + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i17 = i1;
    HEAP32[i17 >> 2] = i18;
    HEAP32[i17 + 4 >> 2] = i19;
    HEAP8[i1 + 8 | 0] = 0;
    return;
   } else if ((i13 | 0) == 10) {
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
  i26 = __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i2, i29, i25) | 0;
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
function __ZNK7WebCore11RenderLayer13localClipRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 136 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 40 | 0;
 i7 = i3 + 64 | 0;
 i8 = i3 + 88 | 0;
 i9 = i3 + 112 | 0;
 i10 = i3 + 128 | 0;
 L1 : do {
  if ((HEAP32[i2 + 208 >> 2] | 0) == 0) {
   i11 = i2;
   while (1) {
    if ((HEAP8[i11 + 21 | 0] & 16) != 0) {
     i12 = i11;
     break L1;
    }
    L5 : do {
     if ((HEAP8[i11 + 20 | 0] & 16) == 0) {
      i13 = i11;
      while (1) {
       i14 = HEAP32[i13 + 36 >> 2] | 0;
       if ((i14 | 0) == 0) {
        i15 = 0;
        break L5;
       }
       if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
        i15 = i14;
        break L5;
       }
       if ((HEAP8[i14 + 21 | 0] & 20) == 0) {
        i13 = i14;
       } else {
        i15 = i14;
        break;
       }
      }
     } else {
      i15 = HEAP32[i11 + 36 >> 2] | 0;
     }
    } while (0);
    if ((HEAP32[i15 + 172 >> 2] | 0) != 0) {
     i12 = i15;
     break L1;
    }
    i13 = HEAP32[i15 + 208 >> 2] | 0;
    if ((i13 | 0) != 0) {
     if ((HEAP8[i13 + 91 | 0] & 1) != 0) {
      i12 = i15;
      break L1;
     }
    }
    if ((i15 | 0) == 0) {
     i12 = 0;
     break;
    } else {
     i11 = i15;
    }
   }
  } else {
   i12 = i2;
  }
 } while (0);
 _memset(i4 | 0, 0, 16) | 0;
 i15 = i5;
 _memset(i15 | 0, 0, 17) | 0;
 _memset(i6 | 0, 0, 17) | 0;
 _memset(i7 | 0, 0, 17) | 0;
 HEAP32[i8 >> 2] = i12;
 HEAP32[i8 + 4 >> 2] = 0;
 HEAP32[i8 + 8 >> 2] = 0;
 HEAP32[i8 + 12 >> 2] = 0;
 HEAP32[i8 + 16 >> 2] = 1;
 HEAP32[i9 >> 2] = -1073741824;
 HEAP32[i9 + 4 >> 2] = -1073741824;
 HEAP32[i9 + 8 >> 2] = 2147483647;
 HEAP32[i9 + 12 >> 2] = 2147483647;
 __ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE(i2, i8, i9, i4, i5, i6, i7, 0);
 i7 = i1;
 HEAP32[i7 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
 i15 = i1;
 i7 = HEAP32[i15 >> 2] | 0;
 i6 = i7;
 do {
  if ((i7 | 0) == (-1073741824 | 0) & (HEAP32[i15 + 4 >> 2] | 0) == (-1073741824 | 0)) {
   i5 = i1 + 8 | 0;
   if (!((HEAP32[i5 >> 2] | 0) == 2147483647 & (HEAP32[i5 + 4 >> 2] | 0) == 2147483647)) {
    break;
   }
   STACKTOP = i3;
   return;
  }
 } while (0);
 i15 = i10 | 0;
 HEAP32[i15 >> 2] = 0;
 i7 = i10 + 4 | 0;
 HEAP32[i7 >> 2] = 0;
 if ((i12 | 0) == (i2 | 0) | (i2 | 0) == 0) {
  i16 = 0;
  i17 = 0;
 } else {
  i5 = i2;
  while (1) {
   i5 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i5, i12, i10, 0) | 0;
   if ((i5 | 0) == 0 | (i5 | 0) == (i12 | 0)) {
    break;
   }
  }
  i16 = HEAP32[i15 >> 2] | 0;
  i17 = HEAP32[i7 >> 2] | 0;
 }
 HEAP32[i1 >> 2] = i6 - i16;
 i16 = i1 + 4 | 0;
 HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) - i17;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer8addChildEPS0_S1_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i4 = (i3 | 0) != 0;
 i5 = i3 + 40 | 0;
 i6 = i1 + 52 | 0;
 i7 = HEAP32[(i4 ? i5 : i6) >> 2] | 0;
 if ((i7 | 0) == 0) {
  HEAP32[i1 + 48 >> 2] = i2;
 } else {
  HEAP32[i2 + 40 >> 2] = i7;
  HEAP32[i7 + 44 >> 2] = i2;
 }
 if (i4) {
  HEAP32[i5 >> 2] = i2;
  HEAP32[i2 + 44 >> 2] = i3;
 } else {
  HEAP32[i6 >> 2] = i2;
 }
 __ZN7WebCore11RenderLayer9setParentEPS0_(i2, i1);
 i6 = i2 + 20 | 0;
 i3 = HEAP8[i6] | 0;
 if ((i3 & 16) == 0) {
  i8 = i3;
 } else {
  __ZN7WebCore11RenderLayer19dirtyNormalFlowListEv(i1);
  i8 = HEAP8[i6] | 0;
 }
 if ((i8 & 16) == 0) {
  i9 = i2;
  i10 = 11;
 } else {
  if ((HEAP32[i2 + 48 >> 2] | 0) != 0) {
   i9 = i2;
   i10 = 11;
  }
 }
 L14 : do {
  if ((i10 | 0) == 11) {
   while (1) {
    i10 = 0;
    i11 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i11 | 0) == 0) {
     break L14;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i11 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i11 + 21 | 0] & 20) == 0) {
     i9 = i11;
     i10 = 11;
    } else {
     break;
    }
   }
   __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i11);
  }
 } while (0);
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i2, 0);
 i11 = (i1 | 0) == 0;
 L21 : do {
  if (!((HEAP8[i2 + 22 | 0] & 40) == 0 | i11)) {
   i9 = i1;
   while (1) {
    i8 = i9 + 22 | 0;
    i3 = HEAP8[i8] | 0;
    if ((i3 & 48) == 32) {
     break L21;
    }
    HEAP8[i8] = i3 & -49 | 32;
    i9 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 L26 : do {
  if (!((HEAP8[i6] & 96) == 0 | i11)) {
   i9 = i1;
   while (1) {
    i3 = i9 + 20 | 0;
    i8 = HEAP8[i3] | 0;
    if ((i8 & -64) << 24 >> 24 == 64) {
     break L26;
    }
    HEAP8[i3] = i8 & 63 | 64;
    i9 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i6 + 20 >> 2] & 25165824 | 0) == 16777216) {
  i10 = 23;
 } else {
  if ((HEAP8[i2 + 21 | 0] & 1) != 0) {
   i10 = 23;
  }
 }
 L33 : do {
  if ((i10 | 0) == 23) {
   i9 = __ZNK7WebCore12RenderObject15containingBlockEv(i6 | 0) | 0;
   if (i11) {
    break;
   }
   i8 = i9 | 0;
   i9 = i1;
   while (1) {
    i3 = i9 + 21 | 0;
    i5 = HEAP8[i3] | 0;
    if ((i5 & 3) == 1) {
     break L33;
    }
    HEAP8[i3] = i5 & -4 | 1;
    __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i9);
    if ((HEAP32[i9 + 32 >> 2] | 0) == (i8 | 0)) {
     break L33;
    }
    i9 = HEAP32[i9 + 36 >> 2] | 0;
    if ((i9 | 0) == 0) {
     break;
    }
   }
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor13layerWasAddedERNS_11RenderLayerES2_(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i1, i2);
 return;
}
function __ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
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
 if (__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_((HEAP32[i8 + 72 >> 2] | 0) + 4 | 0, i2) | 0) {
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
 i8 = i11 + 72 | 0;
 i11 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i11 >> 2] | 0) == 1) {
  i12 = i11;
 } else {
  __ZNK7WebCore18StyleTransformData4copyEv(i4, i11);
  i11 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i8 >> 2] | 0;
  i7 = i4 | 0;
  i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
  if ((i10 | 0) == 0) {
   if ((HEAP8[i4 + 29 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 24 | 0);
   }
   if ((HEAP8[i4 + 21 | 0] | 0) == 10) {
    __ZNK7WebCore6Length22decrementCalculatedRefEv(i4 + 16 | 0);
   }
   i1 = i4 + 12 | 0;
   i5 = HEAP32[i1 >> 2] | 0;
   i9 = i4 + 4 | 0;
   if ((i5 | 0) != 0) {
    i6 = HEAP32[i9 >> 2] | 0;
    i13 = i6 + (i5 << 2) | 0;
    i5 = i6;
    while (1) {
     i6 = HEAP32[i5 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i14 = i6 + 4 | 0;
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
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] & 15](i16);
      }
     } while (0);
     i5 = i5 + 4 | 0;
     if ((i5 | 0) == (i13 | 0)) {
      break;
     }
    }
    HEAP32[i1 >> 2] = 0;
   }
   i1 = HEAP32[i9 >> 2] | 0;
   if ((i1 | 0) != 0) {
    HEAP32[i9 >> 2] = 0;
    HEAP32[i4 + 8 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i1);
   }
   __ZN3WTF8fastFreeEPv(i4);
  } else {
   HEAP32[i7 >> 2] = i10;
  }
  HEAP32[i8 >> 2] = i11;
  i12 = i11;
 }
 __ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_(i12 + 4 | 0, i2 | 0) | 0;
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 i5 = i4 | 0;
 i6 = i4 + 64 | 0;
 i7 = i4 + 88 | 0;
 i8 = i5;
 _memset(i8 | 0, 0, 17) | 0;
 i9 = i5 + 20 | 0;
 _memset(i9 | 0, 0, 17) | 0;
 i10 = i5 + 40 | 0;
 _memset(i10 | 0, 0, 17) | 0;
 HEAP32[i5 + 60 >> 2] = 1;
 i11 = i5 + 63 | 0;
 HEAP8[i11] = 0;
 do {
  if ((HEAP32[i3 + 8 >> 2] | 0) == 5) {
   i12 = 4;
  } else {
   if ((HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 188 >> 2] | 0) == (HEAP32[i2 + 188 >> 2] | 0)) {
    i12 = 4;
    break;
   }
   i13 = i6;
   i14 = i3;
   HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
   HEAP32[i13 + 4 >> 2] = HEAP32[i14 + 4 >> 2];
   HEAP32[i13 + 8 >> 2] = HEAP32[i14 + 8 >> 2];
   HEAP32[i13 + 12 >> 2] = HEAP32[i14 + 12 >> 2];
   HEAP32[i13 + 16 >> 2] = HEAP32[i14 + 16 >> 2];
   HEAP32[i6 + 8 >> 2] = 5;
   __ZNK7WebCore11RenderLayer15parentClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i2, i6, i5);
  }
 } while (0);
 if ((i12 | 0) == 4) {
  __ZNK7WebCore11RenderLayer15parentClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i2, i3, i5);
 }
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 if ((i2 | 0) == 2) {
  i12 = i1;
  HEAP32[i12 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  HEAP32[i12 + 16 >> 2] = HEAP32[i10 + 16 >> 2];
 } else if ((i2 | 0) == 6) {
  i2 = i1;
  HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  HEAP32[i2 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 } else {
  i9 = i1;
  HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i9 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
  HEAP32[i9 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
  HEAP32[i9 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
  HEAP32[i9 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 }
 i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP8[i11] | 0) >= 0) {
  STACKTOP = i4;
  return;
 }
 if ((HEAP32[(HEAP32[i3 >> 2] | 0) + 32 >> 2] | 0) != (i8 | 0)) {
  STACKTOP = i4;
  return;
 }
 i3 = i1;
 i11 = HEAP32[i3 >> 2] | 0;
 i5 = i11;
 do {
  if (!((i5 | 0) != -1073741824 | ((i11 & 0 | 0) != 0 | (HEAP32[i3 + 4 >> 2] & -1 | 0) != (-1073741824 | 0)))) {
   i9 = i1 + 8 | 0;
   if (!((HEAP32[i9 >> 2] | 0) == 2147483647 & (HEAP32[i9 + 4 >> 2] | 0) == 2147483647)) {
    break;
   }
   STACKTOP = i4;
   return;
  }
 } while (0);
 __ZNK7WebCore9FrameView28scrollOffsetForFixedPositionEv(i7, HEAP32[i8 + 116 >> 2] | 0);
 i8 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i1 >> 2] = i5 + (HEAP32[i7 >> 2] | 0);
 i7 = i1 + 4 | 0;
 HEAP32[i7 >> 2] = (HEAP32[i7 >> 2] | 0) + i8;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i1 + 32 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0 | (i11 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i12 = i1 + 20 | 0;
 HEAP8[i12] = HEAP8[i12] | 2;
 i12 = i1 + 112 | 0;
 i13 = i1 + 12 | 0;
 i14 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
 i15 = i1 + 116 | 0;
 i16 = i1 + 16 | 0;
 i17 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0;
 __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 do {
  if ((HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 48 >> 2] & 7168 | 0) != 5120) {
   i18 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0;
   HEAP32[i7 >> 2] = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0);
   HEAP32[i7 + 4 >> 2] = i18;
   __ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE(i6, i1, i7);
   i18 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
   if ((HEAP32[i5 >> 2] | 0) == (i18 | 0)) {
    if ((HEAP32[i6 + 4 >> 2] | 0) == ((HEAP32[i15 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0)) {
     break;
    }
   }
   i19 = HEAP32[i5 >> 2] | 0;
   i20 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i19 | 0) == (i18 | 0)) {
    if ((i20 | 0) == ((HEAP32[i15 >> 2] | 0) + (HEAP32[i16 >> 2] | 0) | 0)) {
     break;
    }
   }
   HEAP32[i4 >> 2] = i19;
   HEAP32[i4 + 4 >> 2] = i20;
   __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i3, i4);
   __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1 | 0, i3);
  }
 } while (0);
 __ZN7WebCore11RenderLayer27updateScrollbarsAfterLayoutEv(i1);
 i3 = (HEAP32[i13 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
 i12 = (HEAP32[i16 >> 2] | 0) + (HEAP32[i15 >> 2] | 0) | 0;
 if ((i14 | 0) != (i3 | 0) | (i17 | 0) != (i12 | 0)) {
  HEAP32[i9 >> 2] = i3;
  HEAP32[i9 + 4 >> 2] = i12;
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i8, i9);
  __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1 | 0, i8);
 }
 if (!(__ZN7WebCore21RenderLayerCompositor27updateLayerCompositingStateERNS_11RenderLayerENS0_24CompositingChangeRepaintE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i1, 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer22shouldBeNormalFlowOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 L1 : do {
  if ((HEAP32[i3 + 20 >> 2] & 327680 | 0) == 0) {
   i4 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0;
   i5 = i4 + 116 | 0;
   while (1) {
    if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
     break L1;
    }
    i5 = HEAP32[i5 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 232 >> 2] & 63](i3 | 0) | 0) {
    break;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 224 >> 2] & 63](i5 | 0) | 0) {
    break;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 72 >> 2] & 63](i5 | 0) | 0) {
    break;
   }
   i5 = HEAP32[i2 >> 2] | 0;
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 140 >> 2] & 63](i5 | 0) | 0) {
    break;
   }
   i5 = HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0;
   i6 = (HEAP32[(HEAP32[i5 + 20 >> 2] | 0) + 68 >> 2] | 0) + 32 | 0;
   do {
    if ((HEAP8[i6] & 3) == 3) {
     i7 = (HEAP32[i6 >> 2] | 0) >>> 11 & 3;
     if ((i7 | 0) == 2) {
      i8 = 0;
      return i8 | 0;
     }
     i9 = (HEAP32[i5 + 44 >> 2] | 0) >>> 13 & 3;
     if (((i9 | 0) == 0 | (i9 | 0) == 3) ^ (i7 | 0) == 0) {
      break;
     } else {
      i8 = 0;
     }
     return i8 | 0;
    }
   } while (0);
   if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
    break;
   } else {
    i8 = 0;
   }
   return i8 | 0;
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i3 + 20 >> 2] | 0;
 if ((i2 & 25296896 | 0) != 0) {
  i8 = 0;
  return i8 | 0;
 }
 i5 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0;
 if ((HEAP32[i5 + 212 >> 2] | 0) != 0) {
  i8 = 0;
  return i8 | 0;
 }
 if ((HEAP32[(HEAP32[i5 + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
  i8 = 0;
  return i8 | 0;
 }
 if ((HEAP32[i5 + 296 >> 2] & 4063232 | 0) != 0) {
  i8 = 0;
  return i8 | 0;
 }
 do {
  if ((i2 & 128 | 0) == 0) {
   i6 = HEAP32[i3 + 4 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i10 = 21;
    break;
   }
   if ((HEAP32[i6 + 12 >> 2] & 32 | 0) == 0) {
    i10 = 21;
   }
  } else {
   i10 = 21;
  }
 } while (0);
 do {
  if ((i10 | 0) == 21) {
   if (+HEAPF32[i5 + 4 >> 2] < +1) {
    i8 = 0;
    return i8 | 0;
   }
   i3 = i5 + 116 | 0;
   while (1) {
    if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
     i8 = 0;
     i10 = 37;
     break;
    }
    i3 = HEAP32[i3 >> 2] | 0;
    if ((i3 | 0) == 0) {
     break;
    }
   }
   if ((i10 | 0) == 37) {
    return i8 | 0;
   }
   if ((HEAP32[(HEAP32[i5 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
    break;
   } else {
    i8 = 0;
   }
   return i8 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 21 | 0] & 4) != 0) {
  i8 = 0;
  return i8 | 0;
 }
 i8 = (HEAP32[i5 + 288 >> 2] | 0) == 0;
 return i8 | 0;
}
function __ZN7WebCore11RenderLayer32paintNamedFlowThreadInsideRegionEPNS_15GraphicsContextEPNS_23RenderNamedFlowFragmentENS_10LayoutRectENS_11LayoutPointEjj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i9 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i8 + 40 | 0;
 i15 = i8 + 48 | 0;
 i16 = i8 + 56 | 0;
 i17 = i8 + 64 | 0;
 i18 = HEAP32[i3 + 8 >> 2] | 0;
 do {
  if ((i18 | 0) == 0) {
   i19 = 0;
  } else {
   if ((HEAP32[i18 + 24 >> 2] & 1 | 0) == 0) {
    i19 = 0;
    break;
   }
   i19 = i18;
  }
 } while (0);
 i18 = i19;
 i20 = i19;
 i21 = i19;
 i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 744 >> 2] & 63](i20) | 0;
 i23 = i19;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 712 >> 2] & 31](i15, i20);
 i19 = HEAP32[i15 >> 2] | 0;
 i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i21 >> 2] | 0) + 736 >> 2] & 63](i20) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 704 >> 2] & 31](i16, i20);
 i21 = HEAP32[i16 >> 2] | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i9, i18);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 712 >> 2] & 31](i10, i20);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 716 >> 2] & 31](i11, i20);
 __ZNK7WebCore9RenderBox12clientHeightEv(i12, i18);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 704 >> 2] & 31](i13, i20);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i23 >> 2] | 0) + 708 >> 2] & 31](i14, i20);
 i20 = i3 | 0;
 __ZNK7WebCore12RenderRegion25flowThreadPortionLocationEv(i17, i20);
 i14 = (HEAP32[i17 >> 2] | 0) - (i19 + i22 + (HEAP32[i5 >> 2] | 0)) | 0;
 i22 = (HEAP32[i17 + 4 >> 2] | 0) - (i21 + i15 + (HEAP32[i5 + 4 >> 2] | 0)) | 0;
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i14;
 i5 = i4 + 4 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + i22;
 __ZN7WebCore15GraphicsContext4saveEv(i2);
 __ZN7WebCore15GraphicsContext9translateEff(i2, +(-i14 | 0), +(-i22 | 0));
 __ZN7WebCore23RenderNamedFlowFragment27setRegionObjectsRegionStyleEv(i3);
 __ZN7WebCore11RenderLayer5paintEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectEPNS_12RenderRegionEj(i1, i2, i4, i6, 0, i20, i7 | 4);
 __ZN7WebCore23RenderNamedFlowFragment33restoreRegionObjectsOriginalStyleEv(i3);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore11RenderLayer23updateScrollCornerStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 | 0;
 do {
  if ((HEAP32[i8 + 20 >> 2] & 128 | 0) == 0) {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i9;
    break;
   }
   i12 = __ZNK7WebCore4Node20containingShadowRootEv(i10) | 0;
   if ((i12 | 0) == 0) {
    i11 = i9;
    break;
   }
   if ((HEAP32[i12 + 88 >> 2] & 4 | 0) != 0) {
    i11 = i9;
    break;
   }
   i10 = HEAP32[i12 + 92 >> 2] | 0;
   i12 = i10 + 32 | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
    i13 = i12 | 0;
   } else {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   i11 = HEAP32[i13 >> 2] | 0;
  } else {
   i11 = i9;
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i9 = i1 + 180 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = i9;
    i15 = 13;
   } else {
    i16 = i13;
    i17 = i9;
    i15 = 19;
   }
  } else {
   HEAP32[i5 >> 2] = 12;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i4, i11 | 0, i5, HEAP32[i11 + 36 >> 2] | 0, 0);
   i9 = i4 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = i1 + 180 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i12 = (i8 | 0) == 0;
   if ((i13 | 0) == 0) {
    if (i12) {
     i14 = i9;
     i15 = 13;
     break;
    } else {
     i16 = i8;
     i17 = i9;
     i15 = 19;
     break;
    }
   }
   if (!i12) {
    HEAP32[i6 >> 2] = i13;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i8 | 0, i6);
    STACKTOP = i2;
    return;
   }
   i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i12 = __ZN3WTF10fastMallocEj(104) | 0;
   HEAP32[i3 >> 2] = i13;
   __ZN7WebCore19RenderScrollbarPartC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_15RenderScrollbarENS_13ScrollbarPartE(i12, i8, i3, 0, 0);
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i8 | 0) == 0) {
    i18 = i12;
   } else {
    __ZN7WebCore12RenderObject7destroyEv(i8 | 0);
    i18 = HEAP32[i9 >> 2] | 0;
   }
   __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i18 | 0, HEAP32[i7 >> 2] | 0);
   __ZN7WebCore13RenderElement15initializeStyleEv(HEAP32[i9 >> 2] | 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i15 | 0) == 13) {
  HEAP32[i14 >> 2] = 0;
  STACKTOP = i2;
  return;
 } else if ((i15 | 0) == 19) {
  __ZN7WebCore12RenderObject7destroyEv(i16 | 0);
  HEAP32[i17 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderLayer18updateResizerStyleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 i6 = i2 + 32 | 0;
 i7 = i1 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i8 | 0;
 do {
  if ((HEAP32[i8 + 20 >> 2] & 128 | 0) == 0) {
   i10 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i10 | 0) == 0) {
    i11 = i9;
    break;
   }
   i12 = __ZNK7WebCore4Node20containingShadowRootEv(i10) | 0;
   if ((i12 | 0) == 0) {
    i11 = i9;
    break;
   }
   if ((HEAP32[i12 + 88 >> 2] & 4 | 0) != 0) {
    i11 = i9;
    break;
   }
   i10 = HEAP32[i12 + 92 >> 2] | 0;
   i12 = i10 + 32 | 0;
   if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
    i13 = i12 | 0;
   } else {
    i13 = HEAP32[i12 >> 2] | 0;
   }
   i11 = HEAP32[i13 >> 2] | 0;
  } else {
   i11 = i9;
  }
 } while (0);
 do {
  if ((HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 65536 | 0) == 0) {
   HEAP32[i4 >> 2] = 0;
   i9 = i1 + 184 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   if ((i13 | 0) == 0) {
    i14 = i9;
    i15 = 13;
   } else {
    i16 = i13;
    i17 = i9;
    i15 = 19;
   }
  } else {
   HEAP32[i5 >> 2] = 13;
   HEAP32[i5 + 4 >> 2] = 0;
   HEAP32[i5 + 8 >> 2] = 0;
   __ZNK7WebCore12RenderObject22getUncachedPseudoStyleERKNS_18PseudoStyleRequestEPNS_11RenderStyleES5_(i4, i11 | 0, i5, HEAP32[i11 + 36 >> 2] | 0, 0);
   i9 = i4 | 0;
   i13 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   i9 = i1 + 184 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   i12 = (i8 | 0) == 0;
   if ((i13 | 0) == 0) {
    if (i12) {
     i14 = i9;
     i15 = 13;
     break;
    } else {
     i16 = i8;
     i17 = i9;
     i15 = 19;
     break;
    }
   }
   if (!i12) {
    HEAP32[i6 >> 2] = i13;
    __ZN7WebCore13RenderElement8setStyleEN3WTF7PassRefINS_11RenderStyleEEE(i8 | 0, i6);
    STACKTOP = i2;
    return;
   }
   i8 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   i12 = __ZN3WTF10fastMallocEj(104) | 0;
   HEAP32[i3 >> 2] = i13;
   __ZN7WebCore19RenderScrollbarPartC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEEPNS_15RenderScrollbarENS_13ScrollbarPartE(i12, i8, i3, 0, 0);
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = i12;
   if ((i8 | 0) == 0) {
    i18 = i12;
   } else {
    __ZN7WebCore12RenderObject7destroyEv(i8 | 0);
    i18 = HEAP32[i9 >> 2] | 0;
   }
   __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i18 | 0, HEAP32[i7 >> 2] | 0);
   __ZN7WebCore13RenderElement15initializeStyleEv(HEAP32[i9 >> 2] | 0);
   STACKTOP = i2;
   return;
  }
 } while (0);
 if ((i15 | 0) == 19) {
  __ZN7WebCore12RenderObject7destroyEv(i16 | 0);
  HEAP32[i17 >> 2] = 0;
  STACKTOP = i2;
  return;
 } else if ((i15 | 0) == 13) {
  HEAP32[i14 >> 2] = 0;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11RenderLayer15createScrollbarENS_20ScrollbarOrientationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i2 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 i10 = i9 | 0;
 do {
  if ((HEAP32[i9 + 20 >> 2] & 128 | 0) == 0) {
   i11 = HEAP32[i9 + 4 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i12 = i10;
    break;
   }
   i13 = __ZNK7WebCore4Node20containingShadowRootEv(i11) | 0;
   if ((i13 | 0) == 0) {
    i12 = i10;
    break;
   }
   if ((HEAP32[i13 + 88 >> 2] & 4 | 0) != 0) {
    i12 = i10;
    break;
   }
   i11 = HEAP32[i13 + 92 >> 2] | 0;
   i13 = i11 + 32 | 0;
   if ((HEAP32[i11 + 12 >> 2] & 2048 | 0) == 0) {
    i14 = i13 | 0;
   } else {
    i14 = HEAP32[i13 >> 2] | 0;
   }
   i12 = HEAP32[i14 >> 2] | 0;
  } else {
   i12 = i10;
  }
 } while (0);
 i10 = HEAP32[i12 + 20 >> 2] | 0;
 do {
  if ((i10 & 512 | 0) == 0) {
   i15 = i2 | 0;
   i16 = 15;
  } else {
   i14 = i2 | 0;
   if ((HEAP32[(HEAP32[i12 + 36 >> 2] | 0) + 52 >> 2] & 262144 | 0) == 0) {
    i15 = i14;
    i16 = 15;
    break;
   }
   if ((i10 & 128 | 0) == 0) {
    i17 = HEAP32[i12 + 4 >> 2] | 0;
   } else {
    i17 = 0;
   }
   __ZN7WebCore15RenderScrollbar21createCustomScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationEPNS_7ElementEPNS_5FrameE(i5, i14, i3, i17, 0);
   i14 = i5 | 0;
   i9 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   i18 = i9;
  }
 } while (0);
 if ((i16 | 0) == 15) {
  __ZN7WebCore9Scrollbar21createNativeScrollbarEPNS_14ScrollableAreaENS_20ScrollbarOrientationENS_20ScrollbarControlSizeE(i6, i15, i3, 0);
  i16 = i6 | 0;
  i6 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i15, i6, i3);
  i18 = i6;
 }
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = i18;
 if ((i18 | 0) != 0) {
  i3 = i18 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 __ZN7WebCore10ScrollView8addChildEN3WTF10PassRefPtrINS_6WidgetEEE(i6, i7);
 i7 = HEAP32[i8 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
 i8 = i7 + 4 | 0;
 i7 = i8 | 0;
 i6 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i7 >> 2] = i6;
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
 i6 = i8 - 4 | 0;
 if ((i6 | 0) == 0) {
  i19 = i1 | 0;
  HEAP32[i19 >> 2] = i18;
  STACKTOP = i4;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
 i19 = i1 | 0;
 HEAP32[i19 >> 2] = i18;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderLayer33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 20 | 0;
 if ((HEAP8[i3] & 96) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i5 = i1 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((HEAP32[i6 + 20 >> 2] & 128 | 0) == 0) {
   i7 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i8 = 6;
    break;
   }
   if ((HEAP32[i7 + 12 >> 2] & 32 | 0) == 0) {
    i8 = 6;
    break;
   }
   i9 = HEAP32[i6 + 36 >> 2] | 0;
  } else {
   i8 = 6;
  }
 } while (0);
 L8 : do {
  if ((i8 | 0) == 6) {
   i7 = HEAP32[i6 + 36 >> 2] | 0;
   i10 = HEAP32[i7 + 20 >> 2] | 0;
   L10 : do {
    if (+HEAPF32[i10 + 4 >> 2] >= +1) {
     i11 = i10 + 116 | 0;
     while (1) {
      if ((HEAP32[i11 + 4 >> 2] | 0) != 0) {
       break L10;
      }
      i11 = HEAP32[i11 >> 2] | 0;
      if ((i11 | 0) == 0) {
       break;
      }
     }
     if ((HEAP32[(HEAP32[i10 + 164 >> 2] | 0) + 8 >> 2] | 0) == 0) {
      i9 = i7;
      break L8;
     }
    }
   } while (0);
   if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
    i4 = 0;
   } else {
    i9 = i7;
    break;
   }
   return i4 | 0;
  }
 } while (0);
 if ((HEAP32[i9 + 40 >> 2] & 6144 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i6 = HEAP32[(HEAP32[i9 + 20 >> 2] | 0) + 76 >> 2] | 0;
 i9 = i1 + 208 | 0;
 do {
  if ((HEAP32[i6 + 12 >> 2] | 0) != 0) {
   i8 = HEAP32[i9 >> 2] | 0;
   if ((i8 | 0) != 0) {
    if ((HEAP8[i8 + 92 | 0] & 1) != 0) {
     break;
    }
   }
   if (__ZNK7WebCore16FilterOperations27hasFilterThatAffectsOpacityEv(i6 + 4 | 0) | 0) {
    i4 = 0;
   } else {
    break;
   }
   return i4 | 0;
  }
 } while (0);
 i6 = HEAP32[i9 >> 2] | 0;
 if ((i6 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i6) | 0) ^ 1;
 }
 if (!((HEAP32[i1 + 172 >> 2] | 0) == 0 | i12)) {
  i4 = 0;
  return i4 | 0;
 }
 if ((HEAP8[i3] & 12) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 i3 = HEAP32[i5 >> 2] | 0;
 if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i3 >> 2] | 0) + 672 >> 2] & 15](i3, i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if ((HEAP32[(HEAP32[i5 >> 2] | 0) + 20 >> 2] & 65536 | 0) != 0) {
  i4 = 0;
  return i4 | 0;
 }
 if (__ZNK7WebCore11RenderLayer37listBackgroundIsKnownToBeOpaqueInRectEPKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEERKNS_10LayoutRectE(i1, HEAP32[i1 + 136 >> 2] | 0, i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 if (__ZNK7WebCore11RenderLayer37listBackgroundIsKnownToBeOpaqueInRectEPKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEERKNS_10LayoutRectE(i1, HEAP32[i1 + 140 >> 2] | 0, i2) | 0) {
  i4 = 1;
  return i4 | 0;
 }
 i4 = __ZNK7WebCore11RenderLayer37listBackgroundIsKnownToBeOpaqueInRectEPKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEERKNS_10LayoutRectE(i1, HEAP32[i1 + 144 >> 2] | 0, i2) | 0;
 return i4 | 0;
}
function __ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E6expandEPS6_(i1, i2) {
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
 HEAP32[i4 >> 2] = __ZN3WTF16fastZeroedMallocEj(i5 << 3) | 0;
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
  i5 = i7 + (i11 << 3) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  i14 = i13;
  if ((i14 | 0) == (-1 | 0) | (i14 | 0) == 0) {
   i15 = i12;
  } else {
   i16 = HEAP32[i4 >> 2] | 0;
   i17 = HEAP32[i3 >> 2] | 0;
   i18 = i14 + ~(i14 << 15) | 0;
   i14 = (i18 >>> 10 ^ i18) * 9 & -1;
   i18 = i14 >>> 6 ^ i14;
   i14 = i18 + ~(i18 << 11) | 0;
   i18 = i14 >>> 16 ^ i14;
   i14 = i17 & i18;
   i19 = i16 + (i14 << 3) | 0;
   i20 = HEAP32[i19 >> 2] | 0;
   L10 : do {
    if ((i20 | 0) == 0) {
     i21 = 0;
     i22 = i19;
     i23 = 7;
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
       break L10;
      }
      i31 = (i29 | 0) == -1 ? i28 : i25;
      i32 = (i26 | 0) == 0 ? i24 : i26;
      i33 = i32 + i27 & i17;
      i34 = i16 + (i33 << 3) | 0;
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
   i16 = i5;
   i17 = i30;
   i13 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i17 + 4 >> 2] = i13;
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i13 = i11 + 1 | 0;
  if ((i13 | 0) == (i6 | 0)) {
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
function __ZN7WebCore11RenderLayer11hitTestListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEES3_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSL_SK_b(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10, i11, i12) {
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
 var i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 112 | 0;
 i14 = i13 | 0;
 if ((i2 | 0) == 0) {
  i15 = 0;
  STACKTOP = i13;
  return i15 | 0;
 }
 if ((HEAP8[i1 + 20 | 0] & 64) == 0) {
  i15 = 0;
  STACKTOP = i13;
  return i15 | 0;
 }
 i16 = i2 + 8 | 0;
 i17 = i2 | 0;
 i2 = i5 | 0;
 i18 = i5 + 68 | 0;
 i19 = HEAP32[i16 >> 2] | 0;
 i20 = 0;
 L7 : while (1) {
  i21 = i19;
  while (1) {
   i21 = i21 - 1 | 0;
   if ((i21 | 0) <= -1) {
    i15 = i20;
    i22 = 22;
    break L7;
   }
   if ((HEAP32[i16 >> 2] | 0) >>> 0 <= i21 >>> 0) {
    i22 = 7;
    break L7;
   }
   i23 = HEAP32[(HEAP32[i17 >> 2] | 0) + (i21 << 2) >> 2] | 0;
   i24 = i23 + 32 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 248 >> 2] & 63](i25 | 0) | 0)) {
    break;
   }
   i25 = HEAP32[i24 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i25 >> 2] | 0) + 1188 >> 2] & 63](i25) | 0)) {
    break;
   }
  }
  __ZN7WebCore13HitTestResultC1ERKNS_15HitTestLocationE(i14, i2);
  if ((HEAP8[i23 + 22 | 0] & 64) == 0) {
   i26 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i23, i3, i1, i4, i14, i6, i7, 0, i8, i9) | 0;
  } else {
   i26 = __ZN7WebCore11RenderLayer26hitTestPaginatedChildLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd(i1, i23, i3, i4, i14, i6, i7, i8, i9) | 0;
  }
  if ((HEAP8[i18] & 1) != 0) {
   __ZN7WebCore13HitTestResult6appendERKS0_(i5, i14);
  }
  if (__ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE(i26, i12, i10, i11) | 0) {
   if ((HEAP8[i18] & 1) == 0) {
    __ZN7WebCore13HitTestResultaSERKS0_(i5, i14) | 0;
   }
   if (i12) {
    i27 = i26;
   } else {
    i22 = 19;
    break;
   }
  } else {
   i27 = i20;
  }
  __ZN7WebCore13HitTestResultD1Ev(i14);
  i19 = i21;
  i20 = i27;
 }
 if ((i22 | 0) == 7) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i22 | 0) == 19) {
  __ZN7WebCore13HitTestResultD1Ev(i14);
  i15 = i26;
  STACKTOP = i13;
  return i15 | 0;
 } else if ((i22 | 0) == 22) {
  STACKTOP = i13;
  return i15 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer20updateNormalFlowListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP8[i4] | 0;
 if ((i5 & 8) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 HEAP32[i3 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i7 = i5;
 } else {
  i5 = i1 + 176 | 0;
  i8 = i1 + 144 | 0;
  i1 = i3;
  i9 = i6;
  while (1) {
   do {
    if ((HEAP8[i9 + 20 | 0] & 16) != 0) {
     i6 = HEAP32[i5 >> 2] | 0;
     if ((i6 | 0) != 0) {
      if ((HEAP32[i6 + 40 >> 2] | 0) == (i9 | 0)) {
       break;
      }
     }
     i6 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i6 | 0) == 0) {
       i10 = __ZN3WTF10fastMallocEj(12) | 0;
       i11 = i10;
       HEAP32[i10 >> 2] = 0;
       HEAP32[i10 + 4 >> 2] = 0;
       HEAP32[i10 + 8 >> 2] = 0;
       i10 = HEAP32[i8 >> 2] | 0;
       HEAP32[i8 >> 2] = i11;
       if ((i10 | 0) == 0) {
        i12 = i11;
        break;
       }
       i11 = i10 + 8 | 0;
       if ((HEAP32[i11 >> 2] | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
       }
       i11 = i10 | 0;
       i13 = HEAP32[i11 >> 2] | 0;
       if ((i13 | 0) != 0) {
        HEAP32[i11 >> 2] = 0;
        HEAP32[i10 + 4 >> 2] = 0;
        __ZN3WTF8fastFreeEPv(i13);
       }
       __ZN3WTF8fastFreeEPv(i10);
       i12 = HEAP32[i8 >> 2] | 0;
      } else {
       i12 = i6;
      }
     } while (0);
     i6 = i12 + 8 | 0;
     i10 = HEAP32[i6 >> 2] | 0;
     if ((i10 | 0) != (HEAP32[i12 + 4 >> 2] | 0)) {
      HEAP32[(HEAP32[i12 >> 2] | 0) + (i10 << 2) >> 2] = HEAP32[i3 >> 2];
      HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
      break;
     }
     i13 = i10 + 1 | 0;
     i11 = i12 | 0;
     i14 = HEAP32[i11 >> 2] | 0;
     do {
      if (i14 >>> 0 > i3 >>> 0) {
       i15 = 18;
      } else {
       if ((i14 + (i10 << 2) | 0) >>> 0 <= i3 >>> 0) {
        i15 = 18;
        break;
       }
       __ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i13);
       i16 = HEAP32[i11 >> 2] | 0;
       i17 = i16 + (i1 - i14 >> 2 << 2) | 0;
       i18 = i16;
      }
     } while (0);
     if ((i15 | 0) == 18) {
      i15 = 0;
      __ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i12, i13);
      i17 = i3;
      i18 = HEAP32[i11 >> 2] | 0;
     }
     HEAP32[i18 + (HEAP32[i6 >> 2] << 2) >> 2] = HEAP32[i17 >> 2];
     HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
    }
   } while (0);
   i9 = HEAP32[(HEAP32[i3 >> 2] | 0) + 44 >> 2] | 0;
   HEAP32[i3 >> 2] = i9;
   if ((i9 | 0) == 0) {
    break;
   }
  }
  i7 = HEAP8[i4] | 0;
 }
 HEAP8[i4] = i7 & -9;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderLayer17paintScrollCornerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[i14 + 20 >> 2] & 512 | 0) == 0) {
  i15 = 0;
 } else {
  i15 = i14;
 }
 i16 = (HEAP32[i1 + 128 >> 2] | 0) != 0;
 i17 = (HEAP32[i1 + 132 >> 2] | 0) != 0;
 if (i16 & i17 | (HEAP32[(HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i16 | i17)) {
  i17 = i6 | 0;
  i16 = HEAP32[i14 + 52 >> 2] | 0;
  i18 = HEAP32[i14 + 56 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  HEAP32[i17 + 4 >> 2] = 0;
  i17 = i6 + 8 | 0;
  HEAP32[i17 >> 2] = i16;
  HEAP32[i17 + 4 >> 2] = i18;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i9, i1, i6);
  i6 = i7;
  i18 = i9 + 4 | 0;
  i19 = HEAP32[i6 >> 2] | 0;
  i20 = HEAP32[i18 >> 2] | 0;
  i21 = i6;
  i22 = i18;
 } else {
  _memset(i7 | 0, 0, 16) | 0;
  i19 = 0;
  i20 = 0;
  i21 = i7;
  i22 = i9 + 4 | 0;
 }
 i18 = i3 | 0;
 i6 = i3 + 4 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i21 >> 2] = i19 + (HEAP32[i18 >> 2] | 0);
 HEAP32[i22 >> 2] = i20 + i3;
 if (!(__ZNK7WebCore7IntRect10intersectsERKS0_(i9, i4) | 0)) {
  STACKTOP = i5;
  return;
 }
 if (__ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i2) | 0) {
  __ZN7WebCore11RenderLayer23updateScrollCornerStyleEv(i1);
  STACKTOP = i5;
  return;
 }
 i4 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i10 >> 2] = HEAP32[i18 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i6 >> 2];
  i6 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i11 + 4 >> 2] = i6;
  i6 = i7 + 8 | 0;
  i7 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i11 + 8 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i11 + 12 >> 2] = i7;
  __ZN7WebCore19RenderScrollbarPart13paintIntoRectEPNS_15GraphicsContextERKNS_11LayoutPointERKNS_10LayoutRectE(i4, i2, i10, i11);
  STACKTOP = i5;
  return;
 }
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i1 | 0) | 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i12, i9);
 HEAP32[i13 >> 2] = -1;
 HEAP8[i13 + 4 | 0] = 1;
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i2, i12, i13, (HEAP32[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] | 0) >>> 17 & 1);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayerC2ERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 | 0;
 __ZN7WebCore14ScrollableAreaC2Ev(i7);
 HEAP32[i1 >> 2] = H_BASE + 144;
 i8 = i1 + 20 | 0;
 HEAP8[i8] = HEAP8[i8] & 52 | 10;
 i9 = i1 + 21 | 0;
 HEAP8[i9] = HEAP8[i9] & -16 | 2;
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i10 & 512 | 0) == 0) {
  i11 = 2;
 } else {
  i11 = i10 >>> 8 << 4 & 16 | 2;
 }
 HEAP8[i9] = i11;
 i11 = i8;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 & -196609;
 i12 = i1 + 22 | 0;
 HEAP8[i12] = -124;
 i13 = i1 + 23 | 0;
 HEAP8[i13] = i10 >>> 24 & 255 & -4;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 & -2080374785;
 HEAP8[i13] = i10 >>> 24 & 3;
 i10 = i1 + 24 | 0;
 HEAP8[i10] = HEAP8[i10] & -4;
 HEAP32[i1 + 28 >> 2] = 0;
 i10 = i1 + 32 | 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i1 + 112 | 0;
 _memset(i1 + 36 | 0, 0, 176) | 0;
 i13 = ((__ZNK7WebCore11RenderLayer22shouldBeNormalFlowOnlyEv(i1) | 0) & 1) << 4;
 HEAP8[i8] = HEAP8[i8] & -17 | i13;
 i13 = ((__ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0) & 1) << 5;
 i11 = HEAP8[i8] & -33 | i13;
 HEAP8[i8] = i11;
 i13 = HEAP32[i10 >> 2] | 0;
 i10 = i13 + 36 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i14 = 4;
 } else {
  i15 = HEAP8[i9] | 0;
  i14 = (i15 & 16) == 0 ? i15 & 4 : 4;
 }
 HEAP8[i8] = i11 & -5 | i14;
 i14 = i1 + 8 | 0;
 HEAP32[i14 >> 2] = HEAP32[i14 >> 2] & -2;
 if ((HEAP32[i13 + 28 >> 2] | 0) == 0) {
  i14 = HEAP8[i12] | 0;
  HEAP8[i12] = i14 & -5;
  HEAP8[i12] = ((HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) << 3 | i14 & -13;
 }
 if ((HEAP32[i13 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i14;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore7Element22savedLayerScrollOffsetEv(i4, i13);
 i14 = i2;
 i10 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i10;
 HEAP32[i14 + 4 >> 2] = i12;
 i14 = 1;
 if (!((i10 | 0) == 0 & (i12 >>> 0 < i14 >>> 0 | i12 >>> 0 == i14 >>> 0 & i10 >>> 0 < 0 >>> 0))) {
  i10 = __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(i7) | 0;
  d16 = +(HEAP32[i1 + 116 >> 2] | 0);
  HEAPF32[i5 >> 2] = +(HEAP32[i2 >> 2] | 0);
  HEAPF32[i5 + 4 >> 2] = d16;
  __ZN7WebCore14ScrollAnimator18setCurrentPositionERKNS_10FloatPointE(i10, i5);
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE(i13, i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayerC1ERNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, d16 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i7 = i1 | 0;
 __ZN7WebCore14ScrollableAreaC2Ev(i7);
 HEAP32[i1 >> 2] = H_BASE + 144;
 i8 = i1 + 20 | 0;
 HEAP8[i8] = HEAP8[i8] & 52 | 10;
 i9 = i1 + 21 | 0;
 HEAP8[i9] = HEAP8[i9] & -16 | 2;
 i10 = HEAP32[i2 + 20 >> 2] | 0;
 if ((i10 & 512 | 0) == 0) {
  i11 = 2;
 } else {
  i11 = i10 >>> 8 << 4 & 16 | 2;
 }
 HEAP8[i9] = i11;
 i11 = i8;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 & -196609;
 i12 = i1 + 22 | 0;
 HEAP8[i12] = -124;
 i13 = i1 + 23 | 0;
 HEAP8[i13] = i10 >>> 24 & 255 & -4;
 i10 = HEAP32[i11 >> 2] | 0;
 HEAP32[i11 >> 2] = i10 & -2080374785;
 HEAP8[i13] = i10 >>> 24 & 3;
 i10 = i1 + 24 | 0;
 HEAP8[i10] = HEAP8[i10] & -4;
 HEAP32[i1 + 28 >> 2] = 0;
 i10 = i1 + 32 | 0;
 HEAP32[i10 >> 2] = i2;
 i2 = i1 + 112 | 0;
 _memset(i1 + 36 | 0, 0, 176) | 0;
 i13 = ((__ZNK7WebCore11RenderLayer22shouldBeNormalFlowOnlyEv(i1) | 0) & 1) << 4;
 HEAP8[i8] = HEAP8[i8] & -17 | i13;
 i13 = ((__ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0) & 1) << 5;
 i11 = HEAP8[i8] & -33 | i13;
 HEAP8[i8] = i11;
 i13 = HEAP32[i10 >> 2] | 0;
 i10 = i13 + 36 | 0;
 if ((HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i14 = 4;
 } else {
  i15 = HEAP8[i9] | 0;
  i14 = (i15 & 16) == 0 ? i15 & 4 : 4;
 }
 HEAP8[i8] = i11 & -5 | i14;
 i14 = i1 + 8 | 0;
 HEAP32[i14 >> 2] = HEAP32[i14 >> 2] & -2;
 if ((HEAP32[i13 + 28 >> 2] | 0) == 0) {
  i14 = HEAP8[i12] | 0;
  HEAP8[i12] = i14 & -5;
  HEAP8[i12] = ((HEAP32[(HEAP32[i10 >> 2] | 0) + 40 >> 2] & 6144 | 0) == 0) << 3 | i14 & -13;
 }
 if ((HEAP32[i13 + 20 >> 2] & 128 | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i14;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 __ZNK7WebCore7Element22savedLayerScrollOffsetEv(i4, i13);
 i14 = i2;
 i10 = HEAP32[i4 >> 2] | 0;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = i10;
 HEAP32[i14 + 4 >> 2] = i12;
 i14 = 1;
 if (!((i10 | 0) == 0 & (i12 >>> 0 < i14 >>> 0 | i12 >>> 0 == i14 >>> 0 & i10 >>> 0 < 0 >>> 0))) {
  i10 = __ZNK7WebCore14ScrollableArea14scrollAnimatorEv(i7) | 0;
  d16 = +(HEAP32[i1 + 116 >> 2] | 0);
  HEAPF32[i5 >> 2] = +(HEAP32[i2 >> 2] | 0);
  HEAPF32[i5 + 4 >> 2] = d16;
  __ZN7WebCore14ScrollAnimator18setCurrentPositionERKNS_10FloatPointE(i10, i5);
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 __ZN7WebCore7Element25setSavedLayerScrollOffsetERKNS_7IntSizeE(i13, i6);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer28paintFixedLayersInNamedFlowsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i1 + 32 | 0;
 if (!(__ZNK7WebCore10RenderView25hasRenderNamedFlowThreadsEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0)) {
  STACKTOP = i5;
  return;
 }
 i1 = i7 | 0;
 HEAP32[i1 >> 2] = 0;
 i9 = i7 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZNK7WebCore20FlowThreadController28collectFixedPositionedLayersERN3WTF6VectorIPNS_11RenderLayerELj0ENS1_15CrashOnOverflowEEE(__ZN7WebCore10RenderView20flowThreadControllerEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i7);
 i7 = HEAP32[i1 >> 2] | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 i11 = i7 + (i8 << 2) | 0;
 HEAP32[i6 >> 2] = F_BASE_iii + 4;
 i12 = i8 << 2;
 i8 = i12 >> 2;
 do {
  if ((i12 | 0) > 512) {
   i13 = i8;
   while (1) {
    i14 = __ZnwjRKSt9nothrow_t(i13 << 2, __ZSt7nothrow) | 0;
    i15 = i14;
    if ((i14 | 0) != 0) {
     i16 = 8;
     break;
    }
    if ((i13 | 0) > 1) {
     i13 = (i13 | 0) / 2 & -1;
    } else {
     i16 = 6;
     break;
    }
   }
   if ((i16 | 0) == 8) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i7, i11, i6, i8, i15, i13);
    __ZdlPv(i14);
    break;
   } else if ((i16 | 0) == 6) {
    __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i7, i11, i6, i8, i15, 0);
    break;
   }
  } else {
   __ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi(i7, i11, i6, i8, 0, 0);
  }
 } while (0);
 do {
  if ((HEAP32[i10 >> 2] | 0) != 0) {
   i8 = 0;
   while (1) {
    __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(HEAP32[(HEAP32[i1 >> 2] | 0) + (i8 << 2) >> 2] | 0, i2, i3, i4);
    i8 = i8 + 1 | 0;
    i17 = HEAP32[i10 >> 2] | 0;
    if (i8 >>> 0 >= i17 >>> 0) {
     break;
    }
   }
   if ((i17 | 0) == 0) {
    break;
   }
   HEAP32[i10 >> 2] = 0;
  }
 } while (0);
 i10 = HEAP32[i1 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer38updateStackingContextsAfterStyleChangeEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 if ((HEAP32[i3 + 64 >> 2] & 1 | 0) == 0) {
  i4 = 1;
 } else {
  i4 = (HEAP8[i1 + 21 | 0] & 16) != 0;
 }
 i5 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] | 0;
 if ((HEAP32[i6 + 64 >> 2] & 1 | 0) == 0) {
  if (i4) {
   i7 = 1;
   i8 = 26;
  } else {
   i9 = 1;
  }
 } else {
  i10 = (HEAP8[i1 + 21 | 0] & 16) != 0;
  if (i10 ^ i4) {
   i9 = i10;
  } else {
   i7 = i10;
   i8 = 26;
  }
 }
 if ((i8 | 0) == 26) {
  do {
   if ((HEAP32[i3 + 60 >> 2] | 0) == (HEAP32[i6 + 60 >> 2] | 0)) {
    if (((HEAP32[i5 + 40 >> 2] ^ HEAP32[i2 + 40 >> 2]) & 6144 | 0) != 0) {
     i11 = i1;
     break;
    }
    return;
   } else {
    i11 = i1;
   }
  } while (0);
  while (1) {
   i12 = HEAP32[i11 + 36 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    i8 = 31;
    break;
   }
   if ((HEAP8[i12 + 21 | 0] & 20) == 0) {
    i11 = i12;
   } else {
    i8 = 31;
    break;
   }
  }
  if ((i8 | 0) == 31) {
   __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i12);
  }
  if (!i7) {
   return;
  }
  __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i1);
  return;
 }
 i7 = i1;
 while (1) {
  i13 = HEAP32[i7 + 36 >> 2] | 0;
  if ((i13 | 0) == 0) {
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i8 = 11;
   break;
  }
  if ((HEAP8[i13 + 21 | 0] & 20) == 0) {
   i7 = i13;
  } else {
   i8 = 11;
   break;
  }
 }
 if ((i8 | 0) == 11) {
  __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i13);
 }
 if (i9) {
  __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i1);
  return;
 }
 i9 = i1 + 136 | 0;
 i13 = HEAP32[i9 >> 2] | 0;
 HEAP32[i9 >> 2] = 0;
 if ((i13 | 0) != 0) {
  i9 = i13 + 8 | 0;
  if ((HEAP32[i9 >> 2] | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
  }
  i9 = i13 | 0;
  i8 = HEAP32[i9 >> 2] | 0;
  if ((i8 | 0) != 0) {
   HEAP32[i9 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
  __ZN3WTF8fastFreeEPv(i13);
 }
 i13 = i1 + 140 | 0;
 i1 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i13 = i1 + 8 | 0;
 if ((HEAP32[i13 >> 2] | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
 }
 i13 = i1 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i13 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i8);
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11RenderLayer20setHasVisibleContentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 22 | 0;
 i6 = HEAP8[i5] | 0;
 if ((i6 & 12) == 8) {
  STACKTOP = i2;
  return;
 }
 HEAP8[i5] = i6 & -13 | 8;
 i6 = i1 + 32 | 0;
 i5 = __ZNK7WebCore12RenderObject19containerForRepaintEv(HEAP32[i6 >> 2] | 0) | 0;
 i7 = i3;
 i8 = i4;
 i9 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 500 >> 2] & 15](i3, i9 | 0, i5);
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = HEAP32[i6 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 508 >> 2] & 15](i4, i7 | 0, i5, 0);
 i5 = i1 + 72 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 L4 : do {
  if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
   i8 = i1;
   while (1) {
    i10 = HEAP32[i8 + 36 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break L4;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i11 = i10;
     break;
    }
    if ((HEAP8[i10 + 21 | 0] & 20) == 0) {
     i8 = i10;
    } else {
     i12 = 6;
     break;
    }
   }
   if ((i12 | 0) == 6) {
    if ((i10 | 0) == 0) {
     break;
    } else {
     i11 = i10;
    }
   }
   L11 : while (1) {
    __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i11);
    if ((HEAP8[i11 + 22 | 0] & 8) == 0) {
     i13 = i11;
    } else {
     break L4;
    }
    while (1) {
     i13 = HEAP32[i13 + 36 >> 2] | 0;
     if ((i13 | 0) == 0) {
      break L4;
     }
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i13 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
      i11 = i13;
      continue L11;
     }
     if ((HEAP8[i13 + 21 | 0] & 20) != 0) {
      break;
     }
    }
    if ((i13 | 0) == 0) {
     break;
    } else {
     i11 = i13;
    }
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i13 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i14 = i13;
 }
 while (1) {
  i13 = i14 + 22 | 0;
  i1 = HEAP8[i13] | 0;
  if ((i1 & 48) == 32) {
   i12 = 16;
   break;
  }
  HEAP8[i13] = i1 & -49 | 32;
  i1 = HEAP32[i14 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i12 = 19;
   break;
  } else {
   i14 = i1;
  }
 }
 if ((i12 | 0) == 16) {
  STACKTOP = i2;
  return;
 } else if ((i12 | 0) == 19) {
  STACKTOP = i2;
  return;
 }
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
function __ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 __ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE(i1, 0);
 if ((HEAP8[i1 + 22 | 0] & 40) == 0) {
  STACKTOP = i4;
  return;
 }
 i7 = __ZN7WebCore11RenderLayer19updateLayerPositionEv(i1) | 0;
 i8 = i7 ? i3 | 8 : i3;
 i3 = (i2 | 0) != 0;
 if (i3) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i2, i1, HEAP32[i1 + 36 >> 2] | 0);
 }
 do {
  if ((i8 & 11 | 0) != 0) {
   i7 = i1 + 148 | 0;
   i9 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   __ZN7WebCore14ClipRectsCacheD2Ev(i9);
   __ZN3WTF8fastFreeEPv(i9);
  }
 } while (0);
 i9 = i1 + 32 | 0;
 i7 = HEAP32[i9 >> 2] | 0;
 i10 = (HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 48 >> 2] | 0) >>> 22 & 7;
 i11 = (i10 | 0) == 6 | (i10 | 0) == 3 ? i8 | 2 : i8;
 i8 = (HEAP32[i7 + 20 >> 2] & 65536 | 0) != 0 ? i11 | 4 : i11;
 if ((i8 & 2 | 0) != 0 | (i8 & 5 | 0) == 5) {
  i11 = __ZNK7WebCore12RenderObject19containerForRepaintEv(i7 | 0) | 0;
  i7 = i5;
  i10 = i6;
  i12 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viii[HEAP32[(HEAP32[i12 >> 2] | 0) + 500 >> 2] & 15](i5, i12 | 0, i11);
  i12 = i1 + 56 | 0;
  HEAP32[i12 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i12 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
  HEAP32[i12 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
  HEAP32[i12 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
  i7 = HEAP32[i9 >> 2] | 0;
  FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 508 >> 2] & 15](i6, i7 | 0, i11, i2);
  i11 = i1 + 72 | 0;
  HEAP32[i11 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
 }
 i10 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i10 | 0) != 0) {
  i11 = i10;
  while (1) {
   __ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj(i11, i2, i8);
   i11 = HEAP32[i11 + 44 >> 2] | 0;
   if ((i11 | 0) == 0) {
    break;
   }
  }
 }
 i11 = HEAP32[i1 + 160 >> 2] | 0;
 if ((i11 | 0) != 0) {
  i8 = i1 + 24 | 0;
  i10 = HEAP8[i8] | 0;
  HEAP8[i8] = i10 | 1;
  __ZN7WebCore13RenderMarquee21updateMarqueePositionEv(i11);
  HEAP8[i8] = HEAP8[i8] & -2 | i10 & 1;
 }
 if (!i3) {
  STACKTOP = i4;
  return;
 }
 __ZN7WebCore17RenderGeometryMap21popMappingsToAncestorEPKNS_11RenderLayerE(i2, HEAP32[i1 + 36 >> 2] | 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer18panScrollFromPointERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, d14 = +0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 __ZNK7WebCore12EventHandler22lastKnownMousePositionEv(i5, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
 if (!(HEAP8[H_BASE + 384 | 0] | 0)) {
  HEAP32[H_BASE + 408 >> 2] = 0;
  HEAP32[H_BASE + 412 >> 2] = 0;
  HEAP8[H_BASE + 384 | 0] = 1;
 }
 do {
  if ((HEAP32[i4 >> 2] | 0) < 0) {
   i7 = 5;
  } else {
   i8 = HEAP32[i5 + 4 >> 2] | 0;
   if ((i8 | 0) < 0) {
    i7 = 5;
    break;
   }
   i9 = HEAP32[i4 >> 2] | 0;
   i10 = HEAP32[i4 + 4 >> 2] | 0;
   i11 = H_BASE + 408;
   HEAP32[i11 >> 2] = i9;
   HEAP32[i11 + 4 >> 2] = i10;
   i12 = i9;
   i13 = i8;
  }
 } while (0);
 if ((i7 | 0) == 5) {
  i7 = H_BASE + 408;
  i5 = HEAP32[i7 >> 2] | 0;
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i4 >> 2] = i5;
  HEAP32[i4 + 4 >> 2] = i8;
  i12 = i5;
  i13 = i8;
 }
 i8 = i12 - (HEAP32[i2 >> 2] | 0) | 0;
 i12 = i13 - (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i2 = (((i8 | 0) > -1 ? i8 : -i8 | 0) | 0) < 16 ? 0 : i8;
 i8 = (((i12 | 0) > -1 ? i12 : -i12 | 0) | 0) < 16 ? 0 : i12;
 i12 = (i2 | 0) / 12 & -1;
 do {
  if ((i2 | 0) > 23) {
   d14 = +(i12 | 0);
   i15 = ~~(d14 * +Math_sqrt(d14)) - 1 | 0;
  } else {
   if ((i2 | 0) >= -23) {
    i15 = i12;
    break;
   }
   i15 = ~~(+(i12 | 0) * +Math_sqrt(+(-i12 | 0))) + 1 | 0;
  }
 } while (0);
 i12 = (i8 | 0) / 12 & -1;
 if ((i8 | 0) > 23) {
  d14 = +(i12 | 0);
  i16 = ~~(d14 * +Math_sqrt(d14)) - 1 | 0;
  i17 = i6 | 0;
  HEAP32[i17 >> 2] = i15;
  i18 = i6 + 4 | 0;
  HEAP32[i18 >> 2] = i16;
  __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i1, i6, 1, 0);
  STACKTOP = i3;
  return;
 }
 if ((i8 | 0) >= -23) {
  i16 = i12;
  i17 = i6 | 0;
  HEAP32[i17 >> 2] = i15;
  i18 = i6 + 4 | 0;
  HEAP32[i18 >> 2] = i16;
  __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i1, i6, 1, 0);
  STACKTOP = i3;
  return;
 }
 i16 = ~~(+(i12 | 0) * +Math_sqrt(+(-i12 | 0))) + 1 | 0;
 i17 = i6 | 0;
 HEAP32[i17 >> 2] = i15;
 i18 = i6 + 4 | 0;
 HEAP32[i18 >> 2] = i16;
 __ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE(i1, i6, 1, 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i4 + 32 | 0;
 i8 = i1 + 132 | 0;
 i9 = (HEAP32[i8 >> 2] | 0) == (i2 | 0);
 i10 = HEAP32[i1 + 208 >> 2] | 0;
 i11 = (i10 | 0) == 0;
 do {
  if (i9) {
   if (i11) {
    break;
   }
   i12 = HEAP32[i10 + 40 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i5, i3);
   FUNCTION_TABLE_viii[i13 & 15](i12, i5, 1);
   STACKTOP = i4;
   return;
  } else {
   if (i11) {
    break;
   }
   i12 = HEAP32[i10 + 36 >> 2] | 0;
   if ((i12 | 0) == 0) {
    break;
   }
   i13 = HEAP32[(HEAP32[i12 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i6, i3);
   FUNCTION_TABLE_viii[i13 & 15](i12, i6, 1);
   STACKTOP = i4;
   return;
  }
 } while (0);
 i6 = i3;
 i10 = HEAP32[i6 >> 2] | 0;
 i11 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i3 + 8 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 i5 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i1 + 32 | 0;
 i1 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 if (i9) {
  i9 = HEAP32[i1 + 52 >> 2] | 0;
  i12 = i1;
  i13 = i1;
  i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 748 >> 2] & 63](i12) | 0;
  i15 = HEAP32[i8 >> 2] | 0;
  i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 104 >> 2] & 63](i15) | 0;
  i16 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i13 >> 2] | 0) + 736 >> 2] & 63](i12) | 0) + i11 | 0;
  i17 = i9 + i10 - i14 - i8 | 0;
 } else {
  i8 = i1;
  i14 = i1;
  i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 744 >> 2] & 63](i8) | 0;
  i12 = HEAP32[i1 + 56 >> 2] | 0;
  i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 740 >> 2] & 63](i8) | 0;
  i16 = i12 + i11 - i1 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 63](i2) | 0) | 0;
  i17 = i9 + i10 | 0;
 }
 HEAP32[i7 >> 2] = i17;
 HEAP32[i7 + 4 >> 2] = i16;
 HEAP32[i7 + 8 >> 2] = i3;
 HEAP32[i7 + 12 >> 2] = i5;
 i5 = HEAP32[i6 >> 2] | 0;
 if ((HEAP32[i5 + 20 >> 2] & 512 | 0) == 0) {
  i18 = 0;
 } else {
  i18 = i5;
 }
 __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i18, i7);
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(HEAP32[i6 >> 2] | 0, i7, 0);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer5paintEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectEPNS_12RenderRegionEj(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i9 = i8 | 0;
 i10 = i8 + 24 | 0;
 i11 = i8 + 72 | 0;
 i12 = i11 | 0;
 _memset(i9 | 0, 0, 20) | 0;
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i11, i3);
 i3 = HEAP32[i12 >> 2] | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 i12 = i11 + 8 | 0;
 i11 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = i1;
 HEAP32[i10 + 4 >> 2] = i5;
 HEAP32[i10 + 8 >> 2] = i3;
 HEAP32[i10 + 12 >> 2] = i13;
 HEAP32[i10 + 16 >> 2] = i11;
 HEAP32[i10 + 20 >> 2] = i14;
 i14 = i10 + 24 | 0;
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 HEAP32[i10 + 32 >> 2] = i6;
 HEAP32[i10 + 36 >> 2] = i9;
 HEAP32[i10 + 40 >> 2] = i4;
 HEAP8[i10 + 44 | 0] = 1;
 __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i10, i7);
 i7 = i9 | 0;
 i10 = HEAP32[i7 >> 2] | 0;
 i2 = HEAP32[i9 + 4 >> 2] | 0;
 i1 = i10 + (i2 * 20 & -1) | 0;
 L1 : do {
  if ((HEAP32[i9 + 12 >> 2] | 0) == 0) {
   i15 = i10;
  } else {
   L3 : do {
    if ((i2 | 0) == 0) {
     i16 = i10;
    } else {
     i4 = i10;
     while (1) {
      i6 = HEAP32[i4 >> 2] | 0;
      if (!((i6 | 0) == (-1 | 0) | (i6 | 0) == 0)) {
       i16 = i4;
       break L3;
      }
      i6 = i4 + 20 | 0;
      if ((i6 | 0) == (i1 | 0)) {
       i15 = i10;
       break L1;
      } else {
       i4 = i6;
      }
     }
    }
   } while (0);
   if ((i16 | 0) == (i1 | 0)) {
    i15 = i10;
    break;
   } else {
    i17 = i16;
   }
   L8 : while (1) {
    i4 = HEAP32[i17 >> 2] | 0;
    FUNCTION_TABLE_vii[HEAP32[(HEAP32[i4 >> 2] | 0) + 8 >> 2] & 31](i4, 0);
    i4 = i17 + 20 | 0;
    if ((i4 | 0) == (i1 | 0)) {
     break;
    } else {
     i18 = i4;
    }
    while (1) {
     i4 = HEAP32[i18 >> 2] | 0;
     if (!((i4 | 0) == (-1 | 0) | (i4 | 0) == 0)) {
      break;
     }
     i4 = i18 + 20 | 0;
     if ((i4 | 0) == (i1 | 0)) {
      break L8;
     } else {
      i18 = i4;
     }
    }
    if ((i18 | 0) == (i1 | 0)) {
     break;
    } else {
     i17 = i18;
    }
   }
   i15 = HEAP32[i7 >> 2] | 0;
  }
 } while (0);
 if ((i15 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i8;
 return;
}
function __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1, i2, i3) {
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
function runPostSets() {
 HEAP32[H_BASE + 144 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_vii + 28;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_viiii + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_viiii + 6;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vii + 22;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_ii + 36;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vi + 8;
}
function __ZN7WebCore11RenderLayer35update3DTransformedDescendantStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 22 | 0;
 if ((HEAP8[i2] | 0) < 0) {
  i3 = i1 + 23 | 0;
  HEAP8[i3] = HEAP8[i3] & -2;
  __ZN7WebCore11RenderLayer17updateZOrderListsEv(i1);
  i4 = HEAP32[i1 + 136 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i5 = i4 + 8 | 0;
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     break;
    }
    i6 = i4 | 0;
    i7 = 0;
    while (1) {
     i8 = (__ZN7WebCore11RenderLayer35update3DTransformedDescendantStatusEv(HEAP32[(HEAP32[i6 >> 2] | 0) + (i7 << 2) >> 2] | 0) | 0) & 1;
     HEAP8[i3] = HEAP8[i3] | i8;
     i7 = i7 + 1 | 0;
     if (i7 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
  } while (0);
  i4 = HEAP32[i1 + 140 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i5 = i4 + 8 | 0;
    if ((HEAP32[i5 >> 2] | 0) == 0) {
     break;
    }
    i7 = i4 | 0;
    i6 = 0;
    while (1) {
     i8 = (__ZN7WebCore11RenderLayer35update3DTransformedDescendantStatusEv(HEAP32[(HEAP32[i7 >> 2] | 0) + (i6 << 2) >> 2] | 0) | 0) & 1;
     HEAP8[i3] = HEAP8[i3] | i8;
     i6 = i6 + 1 | 0;
     if (i6 >>> 0 >= (HEAP32[i5 >> 2] | 0) >>> 0) {
      break;
     }
    }
   }
  } while (0);
  HEAP8[i2] = HEAP8[i2] & 127;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512;
 i3 = HEAP32[i1 + 172 >> 2] | 0;
 do {
  if ((i3 | 0) == 0) {
   i9 = 0;
  } else {
   if (+HEAPF64[i3 + 16 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 24 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 48 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 56 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 64 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 72 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 80 >> 3] != +1) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 88 >> 3] != +0) {
    i10 = 1;
    return i10 | 0;
   }
   if (+HEAPF64[i3 + 112 >> 3] == +0) {
    i9 = +HEAPF64[i3 + 120 >> 3] != +1;
    break;
   } else {
    i10 = 1;
    return i10 | 0;
   }
  }
 } while (0);
 i3 = (i2 | 0) == 0;
 if (i3 | i9) {
  i10 = i9 | i3 ^ 1;
  return i10 | 0;
 }
 i10 = (HEAP8[i1 + 23 | 0] & 1) != 0;
 return i10 | 0;
}
function __ZNK7WebCore11RenderLayer22isPointInResizeControlERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, d13 = +0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 32 | 0;
 i8 = i1 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 do {
  if ((HEAP32[i9 + 20 >> 2] & 65536 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 140 >> 2] & 63](i9 | 0) | 0) {
    i10 = HEAP32[i8 >> 2] | 0;
    break;
   } else {
    i11 = 0;
    STACKTOP = i3;
    return i11 | 0;
   }
  } else {
   i10 = i9;
  }
 } while (0);
 if ((HEAP32[(HEAP32[(HEAP32[i10 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 if ((HEAP32[i10 + 20 >> 2] & 512 | 0) == 0) {
  i12 = 0;
 } else {
  i12 = i10;
 }
 d13 = +(HEAP32[i2 + 4 >> 2] | 0);
 HEAPF32[i5 >> 2] = +(HEAP32[i2 >> 2] | 0);
 HEAPF32[i5 + 4 >> 2] = d13;
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i4, i10 | 0, i5, 2);
 d13 = +_round(+(+HEAPF32[i4 >> 2]));
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
 d13 = +_round(+(+HEAPF32[i4 + 4 >> 2]));
 do {
  if (d13 < +2147483647) {
   if (d13 <= +-2147483648) {
    i15 = -2147483648;
    break;
   }
   i15 = ~~d13;
  } else {
   i15 = 2147483647;
  }
 } while (0);
 i4 = HEAP32[i12 + 52 >> 2] | 0;
 i5 = HEAP32[i12 + 56 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = i4;
 HEAP32[i6 + 12 >> 2] = i5;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i8 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
  _memset(i7 | 0, 0, 16) | 0;
  i16 = 0;
 } else {
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i7, i1, i6);
  i16 = HEAP32[i7 >> 2] | 0;
 }
 if ((i16 | 0) > (i14 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 if (((HEAP32[i7 + 8 >> 2] | 0) + i16 | 0) <= (i14 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i14 = HEAP32[i7 + 4 >> 2] | 0;
 if ((i14 | 0) > (i15 | 0)) {
  i11 = 0;
  STACKTOP = i3;
  return i11 | 0;
 }
 i11 = ((HEAP32[i7 + 12 >> 2] | 0) + i14 | 0) > (i15 | 0);
 STACKTOP = i3;
 return i11 | 0;
}
function __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = HEAP32[i2 + 132 >> 2] | 0;
 i5 = HEAP32[i2 + 128 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 do {
  if ((i4 | 0) == 0) {
   if (i6) {
    i7 = __ZN7WebCore14ScrollbarTheme5themeEv() | 0;
    i8 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i7 >> 2] | 0) + 20 >> 2] & 15](i7, 0) | 0;
    i9 = i8;
    i10 = i8;
    break;
   } else {
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 63](i5) | 0;
    i9 = i8;
    i10 = i8;
    break;
   }
  } else {
   if (i6) {
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 104 >> 2] & 63](i4) | 0;
    i9 = i8;
    i10 = i8;
    break;
   } else {
    i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 104 >> 2] & 63](i4) | 0;
    i7 = HEAP32[i2 + 128 >> 2] | 0;
    i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 108 >> 2] & 63](i7) | 0;
    i10 = i8;
    break;
   }
  }
 } while (0);
 i4 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 16 >> 2] | 0;
 i2 = (HEAP32[(HEAP32[i5 + 132 >> 2] | 0) + 8 >> 2] | 0) == 0;
 i8 = HEAP32[i5 + 112 >> 2] | 0;
 if (i2) {
  if ((i8 & 1879048192) >>> 0 < 268435456 >>> 0) {
   i11 = 0;
  } else {
   i12 = 10;
  }
 } else {
  i12 = 10;
 }
 if ((i12 | 0) == 10) {
  i11 = i8 >>> 1 & 67108863;
 }
 i8 = i4 - i10 + i6 - i11 | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = HEAP32[i3 + 12 >> 2] | 0;
 i3 = HEAP32[i5 + 128 >> 2] | 0;
 do {
  if (i2) {
   if ((i3 & 1879048192) >>> 0 < 268435456 >>> 0) {
    i13 = 0;
   } else {
    break;
   }
   i14 = i11 - i9 | 0;
   i15 = i14 + i6 | 0;
   i16 = i15 - i13 | 0;
   i17 = i1 | 0;
   HEAP32[i17 >> 2] = i8;
   i18 = i1 + 4 | 0;
   HEAP32[i18 >> 2] = i16;
   i19 = i1 + 8 | 0;
   HEAP32[i19 >> 2] = i10;
   i20 = i1 + 12 | 0;
   HEAP32[i20 >> 2] = i9;
   return;
  }
 } while (0);
 i13 = i3 >>> 1 & 67108863;
 i14 = i11 - i9 | 0;
 i15 = i14 + i6 | 0;
 i16 = i15 - i13 | 0;
 i17 = i1 | 0;
 HEAP32[i17 >> 2] = i8;
 i18 = i1 + 4 | 0;
 HEAP32[i18 >> 2] = i16;
 i19 = i1 + 8 | 0;
 HEAP32[i19 >> 2] = i10;
 i20 = i1 + 12 | 0;
 HEAP32[i20 >> 2] = i9;
 return;
}
function __ZN7WebCore11RenderLayer25repaintBlockSelectionGapsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i2 + 32 | 0;
 i6 = i2 + 40 | 0;
 i7 = i2 + 56 | 0;
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i8 | 0) != 0) {
  i9 = i8;
  while (1) {
   __ZN7WebCore11RenderLayer25repaintBlockSelectionGapsEv(i9);
   i9 = HEAP32[i9 + 44 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
  }
 }
 if ((HEAP32[i1 + 200 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i1 + 204 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 i9 = i1 + 192 | 0;
 i8 = HEAP32[i9 >> 2] | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i1 + 200 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i12 = i3 + 8 | 0;
 HEAP32[i12 >> 2] = HEAP32[i9 >> 2];
 i9 = i3 + 12 | 0;
 HEAP32[i9 >> 2] = i11;
 i11 = i1 + 112 | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i8 - (HEAP32[i11 >> 2] | 0);
 HEAP32[i3 + 4 >> 2] = i10 - i13;
 i13 = i1 + 32 | 0;
 i10 = HEAP32[i13 >> 2] | 0;
 i11 = HEAP32[i10 + 20 >> 2] | 0;
 do {
  if ((i11 & 65536 | 0) == 0) {
   i14 = i10;
   i15 = i11;
  } else {
   i8 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i8 | 0) != 0) {
    if ((HEAP32[i8 + 48 >> 2] | 0) != 0) {
     i14 = i10;
     i15 = i11;
     break;
    }
   }
   i8 = HEAP32[(HEAP32[i10 >> 2] | 0) + 936 >> 2] | 0;
   HEAP32[i5 >> 2] = 0;
   HEAP32[i5 + 4 >> 2] = 0;
   FUNCTION_TABLE_viiiiii[i8 & 1](i4, i10, i5, 0, 0, 0);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i3, i4);
   i8 = HEAP32[i13 >> 2] | 0;
   i14 = i8;
   i15 = HEAP32[i8 + 20 >> 2] | 0;
  }
 } while (0);
 do {
  if ((i15 & 25165824 | 0) == 16777216) {
   if ((HEAP8[(HEAP32[(HEAP32[i14 + 36 >> 2] | 0) + 8 >> 2] | 0) + 36 | 0] & 1) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 0;
   __ZN7WebCore9RenderBox8clipRectERKNS_11LayoutPointEPNS_12RenderRegionE(i6, i14, i7, 0);
   __ZN7WebCore10LayoutRect9intersectERKS0_(i3, i6);
  }
 } while (0);
 if ((HEAP32[i12 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 if ((HEAP32[i9 >> 2] | 0) < 1) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(HEAP32[i13 >> 2] | 0, i3, 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer37listBackgroundIsKnownToBeOpaqueInRectEPKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEERKNS_10LayoutRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 if ((i2 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i7 = 0;
  STACKTOP = i4;
  return i7 | 0;
 }
 i9 = i2 | 0;
 i2 = i5 | 0;
 i10 = i5 + 4 | 0;
 i11 = i6;
 i12 = i3;
 i3 = i6 | 0;
 i13 = i6 + 4 | 0;
 i14 = (HEAP32[i9 >> 2] | 0) + (i8 << 2) | 0;
 L7 : while (1) {
  i8 = i14 - 4 | 0;
  i15 = HEAP32[i8 >> 2] | 0;
  do {
   if ((HEAP32[i15 + 208 >> 2] | 0) == 0) {
    i16 = HEAP32[i15 + 32 >> 2] | 0;
    if ((HEAP32[i16 + 20 >> 2] & 4325376 | 0) != 0) {
     break;
    }
    if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i16 >> 2] | 0) + 324 >> 2] & 63](i16 | 0) | 0) {
     break;
    }
    HEAP32[i2 >> 2] = 0;
    HEAP32[i10 >> 2] = 0;
    HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
    HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
    HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
    if ((i15 | 0) == (i1 | 0) | (i15 | 0) == 0) {
     i17 = 0;
     i18 = 0;
    } else {
     i16 = i15;
     while (1) {
      i16 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i16, i1, i5, 0) | 0;
      if ((i16 | 0) == 0 | (i16 | 0) == (i1 | 0)) {
       break;
      }
     }
     i17 = HEAP32[i2 >> 2] | 0;
     i18 = HEAP32[i10 >> 2] | 0;
    }
    HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i17;
    HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i18;
    if (__ZNK7WebCore11RenderLayer33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE(i15, i6) | 0) {
     i7 = 1;
     i19 = 14;
     break L7;
    }
   }
  } while (0);
  if ((i8 | 0) == (HEAP32[i9 >> 2] | 0)) {
   i7 = 0;
   i19 = 15;
   break;
  } else {
   i14 = i8;
  }
 }
 if ((i19 | 0) == 14) {
  STACKTOP = i4;
  return i7 | 0;
 } else if ((i19 | 0) == 15) {
  STACKTOP = i4;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer31hitTestLayerByApplyingTransformEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 var i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 280 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = i11 + 16 | 0;
 i15 = i11 + 48 | 0;
 i16 = i11 + 64 | 0;
 i17 = i11 + 136 | 0;
 i18 = i11 + 208 | 0;
 __ZNK7WebCore11RenderLayer25createLocalTransformStateEPS0_S1_RKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateERKNS_11LayoutPointE(i12, i1, i2, i3, i6, i7, i8, i10);
 i10 = i12 | 0;
 i12 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 if (__ZNK7WebCore20TransformationMatrix12isInvertibleEv(i12 + 80 | 0) | 0) {
  __ZNK7WebCore24HitTestingTransformState11mappedPointEv(i13, i12);
  __ZNK7WebCore24HitTestingTransformState10mappedQuadEv(i14, i12);
  __ZNK7WebCore24HitTestingTransformState18boundsOfMappedAreaEv(i15, i12);
  __ZN7WebCore15HitTestLocationC1Ev(i16);
  if ((HEAP8[i7 + 68 | 0] & 1) == 0) {
   __ZN7WebCore15HitTestLocationC1ERKNS_10FloatPointE(i18, i13);
   __ZN7WebCore15HitTestLocationaSERKS0_(i16, i18) | 0;
   __ZN7WebCore15HitTestLocationD1Ev(i18);
  } else {
   __ZN7WebCore15HitTestLocationC1ERKNS_10FloatPointERKNS_9FloatQuadE(i17, i13, i14);
   __ZN7WebCore15HitTestLocationaSERKS0_(i16, i17) | 0;
   __ZN7WebCore15HitTestLocationD1Ev(i17);
  }
  i17 = __ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd(i1, i1, i3, i4, i5, i15, i16, 1, i12, i9) | 0;
  __ZN7WebCore15HitTestLocationD1Ev(i16);
  i19 = i17;
 } else {
  i19 = 0;
 }
 if ((i12 | 0) == 0) {
  STACKTOP = i11;
  return i19 | 0;
 }
 i17 = i12 | 0;
 i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i16 | 0) == 0) {
  __ZN3WTF8fastFreeEPv(i12);
  STACKTOP = i11;
  return i19 | 0;
 } else {
  HEAP32[i17 >> 2] = i16;
  STACKTOP = i11;
  return i19 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer33paintOverflowControlsForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 + 8 | 0;
 if ((HEAP32[i8 >> 2] | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i9 = i2 | 0;
 i2 = i4 | 0;
 i10 = i4 + 8 | 0;
 i11 = i1 + 32 | 0;
 i12 = i4 + 24 | 0;
 i13 = i4 + 28 | 0;
 i14 = i6 | 0;
 i15 = i6 + 4 | 0;
 i16 = i10;
 i17 = i4 + 16 | 0;
 i4 = 0;
 while (1) {
  i18 = HEAP32[i9 >> 2] | 0;
  i19 = i18 + (i4 * 104 & -1) + 20 | 0;
  __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i2 >> 2] | 0, i3, i10, i19, 0);
  i20 = i18 + (i4 * 104 & -1) + 4 | 0;
  i21 = HEAP32[i11 >> 2] | 0;
  if ((HEAP32[i21 + 20 >> 2] & 512 | 0) == 0) {
   i22 = 0;
   i23 = 0;
  } else {
   i24 = i21 + 44 | 0;
   i22 = HEAP32[i24 >> 2] | 0;
   i23 = HEAP32[i24 + 4 >> 2] | 0;
  }
  i24 = (HEAP32[i20 + 4 >> 2] | 0) - i23 + (HEAP32[i13 >> 2] | 0) | 0;
  HEAP32[i14 >> 2] = (HEAP32[i20 >> 2] | 0) - i22 + (HEAP32[i12 >> 2] | 0);
  HEAP32[i15 >> 2] = i24;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i7, i19 | 0);
  __ZN7WebCore11RenderLayer21paintOverflowControlsEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectEb(i1, i3, i6, i7, 1);
  i24 = i19;
  do {
   if ((HEAP32[i24 >> 2] | 0) == (HEAP32[i16 >> 2] | 0) & (HEAP32[i24 + 4 >> 2] | 0) == (HEAP32[i16 + 4 >> 2] | 0)) {
    i19 = i18 + (i4 * 104 & -1) + 28 | 0;
    if ((HEAP32[i19 >> 2] | 0) != (HEAP32[i17 >> 2] | 0)) {
     i25 = 8;
     break;
    }
    if ((HEAP32[i19 + 4 >> 2] | 0) != (HEAP32[i17 + 4 >> 2] | 0)) {
     i25 = 8;
    }
   } else {
    i25 = 8;
   }
  } while (0);
  if ((i25 | 0) == 8) {
   i25 = 0;
   __ZN7WebCore15GraphicsContext7restoreEv(i3);
  }
  i4 = i4 + 1 | 0;
  if (i4 >>> 0 >= (HEAP32[i8 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i3 + 48 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = i2 + 32 | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 if ((HEAP32[i11 + 20 >> 2] & 512 | 0) == 0 | (i11 | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
 i12 = (HEAP32[i2 + 128 >> 2] | 0) != 0;
 i13 = (HEAP32[i2 + 132 >> 2] | 0) != 0;
 do {
  if (i12 & i13 | (HEAP32[(HEAP32[(HEAP32[i11 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i12 | i13)) {
   i14 = i4 | 0;
   i15 = HEAP32[i11 + 52 >> 2] | 0;
   i16 = HEAP32[i11 + 56 >> 2] | 0;
   HEAP32[i14 >> 2] = 0;
   HEAP32[i14 + 4 >> 2] = 0;
   i14 = i4 + 8 | 0;
   HEAP32[i14 >> 2] = i15;
   HEAP32[i14 + 4 >> 2] = i16;
   __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i5, i2, i4);
   if ((HEAP32[i5 + 8 >> 2] | 0) < 1) {
    i17 = 8;
    break;
   }
   if ((HEAP32[i5 + 12 >> 2] | 0) < 1) {
    i17 = 8;
    break;
   }
   i18 = i5;
  } else {
   _memset(i5 | 0, 0, 16) | 0;
   i17 = 8;
  }
 } while (0);
 if ((i17 | 0) == 8) {
  i17 = HEAP32[i11 + 52 >> 2] | 0;
  i4 = HEAP32[i11 + 56 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  i8 = i7 + 8 | 0;
  HEAP32[i8 >> 2] = i17;
  HEAP32[i8 + 4 >> 2] = i4;
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i10 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
   i10 = i6;
   _memset(i10 | 0, 0, 16) | 0;
   i19 = i10;
  } else {
   __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i6, i2, i9);
   i19 = i6;
  }
  i6 = i5;
  HEAP32[i6 >> 2] = HEAP32[i19 >> 2];
  HEAP32[i6 + 4 >> 2] = HEAP32[i19 + 4 >> 2];
  HEAP32[i6 + 8 >> 2] = HEAP32[i19 + 8 >> 2];
  HEAP32[i6 + 12 >> 2] = HEAP32[i19 + 12 >> 2];
  i18 = i6;
 }
 i6 = i1;
 HEAP32[i6 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i18 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i18 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i18 + 12 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer25hitTestResizerInFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_15HitTestLocationE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 + 8 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i10 = i8 - 1 | 0;
 if ((i10 | 0) <= -1) {
  i9 = 0;
  STACKTOP = i4;
  return i9 | 0;
 }
 i11 = i2 | 0;
 i2 = i1 + 32 | 0;
 i12 = i6;
 i13 = i3 | 0;
 i14 = i3 + 4 | 0;
 i15 = i6 | 0;
 i16 = i6 + 8 | 0;
 i17 = i6 + 4 | 0;
 i18 = i6 + 12 | 0;
 i19 = i10;
 i10 = i8;
 L7 : while (1) {
  if (i10 >>> 0 <= i19 >>> 0) {
   i20 = 5;
   break;
  }
  i8 = HEAP32[i11 >> 2] | 0;
  do {
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i3, i8 + (i19 * 104 & -1) + 20 | 0) | 0) {
    __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i5, i8 + (i19 * 104 & -1) + 4 | 0);
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
     _memset(i12 | 0, 0, 16) | 0;
     i21 = 0;
    } else {
     __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i6, i1, i5);
     i21 = HEAP32[i15 >> 2] | 0;
    }
    i22 = HEAP32[i13 >> 2] | 0;
    i23 = HEAP32[i14 >> 2] | 0;
    if ((i21 | 0) > (i22 | 0)) {
     break;
    }
    if (((HEAP32[i16 >> 2] | 0) + i21 | 0) <= (i22 | 0)) {
     break;
    }
    i22 = HEAP32[i17 >> 2] | 0;
    if ((i22 | 0) > (i23 | 0)) {
     break;
    }
    if (((HEAP32[i18 >> 2] | 0) + i22 | 0) > (i23 | 0)) {
     i9 = 1;
     i20 = 19;
     break L7;
    }
   }
  } while (0);
  i8 = i19 - 1 | 0;
  if ((i8 | 0) <= -1) {
   i9 = 0;
   i20 = 20;
   break;
  }
  i19 = i8;
  i10 = HEAP32[i7 >> 2] | 0;
 }
 if ((i20 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i20 | 0) == 19) {
  STACKTOP = i4;
  return i9 | 0;
 } else if ((i20 | 0) == 20) {
  STACKTOP = i4;
  return i9 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer30updatePaintingInfoForFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS0_17LayerPaintingInfoEjbPKNS_11LayoutPointE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i2 + 8 | 0;
 if ((HEAP32[i9 >> 2] | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i10 = i2 | 0;
 i2 = i5 & 1;
 i5 = i3 | 0;
 i11 = i6 | 0;
 i12 = i6 + 4 | 0;
 i6 = i8 | 0;
 i13 = i8 + 4 | 0;
 i14 = i3 + 32 | 0;
 if ((i4 & 512 | 0) == 0) {
  i4 = 0;
  while (1) {
   i3 = HEAP32[i10 >> 2] | 0;
   i15 = i3 + (i4 * 104 & -1) | 0;
   HEAP8[i15] = i2;
   i16 = HEAP32[i5 >> 2] | 0;
   i17 = (HEAP32[i3 + (i4 * 104 & -1) + 84 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
   HEAP32[i6 >> 2] = (HEAP32[i3 + (i4 * 104 & -1) + 80 >> 2] | 0) + (HEAP32[i11 >> 2] | 0);
   HEAP32[i13 >> 2] = i17;
   i17 = (__ZNK7WebCore11RenderLayer20intersectsDamageRectERKNS_10LayoutRectES3_PKS0_PKNS_11LayoutPointEPNS_12RenderRegionE(i1, i3 + (i4 * 104 & -1) + 4 | 0, i3 + (i4 * 104 & -1) + 20 | 0, i16, i8, HEAP32[i14 >> 2] | 0) | 0) & 1;
   HEAP8[i15] = HEAP8[i15] & i17;
   i4 = i4 + 1 | 0;
   if (i4 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
    break;
   }
  }
  STACKTOP = i7;
  return;
 } else {
  i18 = 0;
 }
 while (1) {
  i4 = HEAP32[i10 >> 2] | 0;
  i17 = i4 + (i18 * 104 & -1) | 0;
  HEAP8[i17] = i2;
  i15 = HEAP32[i5 >> 2] | 0;
  if ((i15 | 0) != (i1 | 0)) {
   i16 = (HEAP32[i4 + (i18 * 104 & -1) + 84 >> 2] | 0) + (HEAP32[i12 >> 2] | 0) | 0;
   HEAP32[i6 >> 2] = (HEAP32[i4 + (i18 * 104 & -1) + 80 >> 2] | 0) + (HEAP32[i11 >> 2] | 0);
   HEAP32[i13 >> 2] = i16;
   i16 = (__ZNK7WebCore11RenderLayer20intersectsDamageRectERKNS_10LayoutRectES3_PKS0_PKNS_11LayoutPointEPNS_12RenderRegionE(i1, i4 + (i18 * 104 & -1) + 4 | 0, i4 + (i18 * 104 & -1) + 20 | 0, i15, i8, HEAP32[i14 >> 2] | 0) | 0) & 1;
   HEAP8[i17] = HEAP8[i17] & i16;
  }
  i18 = i18 + 1 | 0;
  if (i18 >>> 0 >= (HEAP32[i9 >> 2] | 0) >>> 0) {
   break;
  }
 }
 STACKTOP = i7;
 return;
}
function __ZN7WebCore11RenderLayer25setHasHorizontalScrollbarEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 128 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (!((i6 | 0) != 0 ^ i2)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 128 | 0;
 do {
  if (i2) {
   __ZN7WebCore11RenderLayer15createScrollbarENS_20ScrollbarOrientationE(i4, i1, 0);
   i8 = i4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = i7 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 + 4 | 0;
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i9 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  } else {
   i8 = i7 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 152 >> 2] & 63](i6) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, HEAP32[i8 >> 2] | 0, 0);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i8 >> 2] | 0);
   HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] = 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 15](i6);
 }
 i6 = HEAP32[i1 + 132 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 15](i6);
 }
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i6 + 1408 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i6 + 1409 | 0] = 1;
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer23setHasVerticalScrollbarEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 132 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if (!((i6 | 0) != 0 ^ i2)) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 132 | 0;
 do {
  if (i2) {
   __ZN7WebCore11RenderLayer15createScrollbarENS_20ScrollbarOrientationE(i4, i1, 1);
   i8 = i4 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   i8 = i7 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = i9;
   if ((i10 | 0) == 0) {
    break;
   }
   i9 = i10 + 4 | 0;
   i10 = i9 | 0;
   i8 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i10 >> 2] = i8;
    break;
   }
   i8 = i9 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 15](i8);
  } else {
   i8 = i7 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 152 >> 2] & 63](i6) | 0)) {
    __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, HEAP32[i8 >> 2] | 0, 1);
   }
   __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i8 >> 2] | 0);
   HEAP32[(HEAP32[i8 >> 2] | 0) + 40 >> 2] = 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   if ((i9 | 0) == 0) {
    break;
   }
   i8 = i9 + 4 | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 15](i10);
  }
 } while (0);
 i6 = HEAP32[i1 + 128 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 15](i6);
 }
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 200 >> 2] & 15](i6);
 }
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i6 + 1408 | 0] & 1) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP8[i6 + 1409 | 0] = 1;
 STACKTOP = i3;
 return;
}
function __ZN3WTF7HashMapIPN7WebCore24OverlapTestRequestClientENS1_7IntRectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE6removeERKS3_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = HEAP32[i1 + 4 >> 2] | 0;
  i5 = i4 * 20 & -1 | 0;
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
  i10 = i3 + (i2 * 20 & -1) | 0;
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
     i19 = i3 + (i18 * 20 & -1) | 0;
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
  i5 = (i12 | 0) == 0 ? i3 + (i8 * 20 & -1) | 0 : i12;
  i6 = i3;
  i7 = i8;
 }
 if ((i5 | 0) == (i6 + (i7 * 20 & -1) | 0)) {
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
 __ZN3WTF9HashTableIPN7WebCore24OverlapTestRequestClientENS_12KeyValuePairIS3_NS1_7IntRectEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZNK7WebCore11RenderLayer37mapLayerClipRectsToFragmentationLayerEPNS_12RenderRegionERNS_9ClipRectsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i4 = i1 + 48 | 0;
 i5 = i1 + 56 | 0;
 i6 = i1 + 64 | 0;
 HEAP32[i6 >> 2] = __ZNK7WebCore12RenderRegion20regionContainerLayerEv(i2) | 0;
 HEAP32[i6 + 4 >> 2] = 0;
 HEAP32[i6 + 8 >> 2] = 5;
 HEAP32[i6 + 12 >> 2] = 0;
 HEAP32[i6 + 16 >> 2] = 1;
 __ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(__ZNK7WebCore12RenderRegion20regionContainerLayerEv(i2) | 0, i6, i3);
 i6 = i2 + 124 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 i6 = i2 | 0;
 i9 = i2 | 0;
 i10 = i2;
 i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 744 >> 2] & 63](i9) | 0;
 i12 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 31](i4, i9);
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 736 >> 2] & 63](i9) | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 31](i5, i9);
 i10 = HEAP32[i5 >> 2] | 0;
 __ZNK7WebCore9RenderBox11clientWidthEv(i1 | 0, i6);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 712 >> 2] & 31](i1 + 8 | 0, i9);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 716 >> 2] & 31](i1 + 16 | 0, i9);
 __ZNK7WebCore9RenderBox12clientHeightEv(i1 + 24 | 0, i6);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 704 >> 2] & 31](i1 + 32 | 0, i9);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i12 >> 2] | 0) + 708 >> 2] & 31](i1 + 40 | 0, i9);
 i9 = i7 - i11 - i2 | 0;
 i2 = i8 - i4 - i10 | 0;
 i10 = i3 | 0;
 i4 = i3 + 4 | 0;
 i8 = (HEAP32[i4 >> 2] | 0) + i2 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i9;
 HEAP32[i4 >> 2] = i8;
 i8 = i3 + 20 | 0;
 i4 = i3 + 24 | 0;
 i10 = (HEAP32[i4 >> 2] | 0) + i2 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + i9;
 HEAP32[i4 >> 2] = i10;
 i10 = i3 + 40 | 0;
 i4 = i3 + 44 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + i2 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i9;
 HEAP32[i4 >> 2] = i3;
 STACKTOP = i1;
 return;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
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
function __ZNK7WebCore11RenderLayer29overflowControlsIntersectRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i5 | 0;
 i7 = i5;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i12 = i1 + 32 | 0;
 i13 = HEAP32[i12 >> 2] | 0;
 i14 = HEAP32[i13 + 52 >> 2] | 0;
 i15 = HEAP32[i13 + 56 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 i6 = i5 + 8 | 0;
 HEAP32[i6 >> 2] = i14;
 HEAP32[i6 + 4 >> 2] = i15;
 __ZNK7WebCore11RenderLayer26rectForHorizontalScrollbarERKNS_7IntRectE(i8, i1, i7);
 if (__ZNK7WebCore7IntRect10intersectsERKS0_(i8, i2) | 0) {
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 __ZNK7WebCore11RenderLayer24rectForVerticalScrollbarERKNS_7IntRectE(i9, i1, i7);
 if (__ZNK7WebCore7IntRect10intersectsERKS0_(i9, i2) | 0) {
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 i9 = (HEAP32[i1 + 128 >> 2] | 0) != 0;
 i8 = (HEAP32[i1 + 132 >> 2] | 0) != 0;
 i15 = HEAP32[i12 >> 2] | 0;
 if (i9 & i8 | (HEAP32[(HEAP32[(HEAP32[i15 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i9 | i8)) {
  i8 = i4 | 0;
  i9 = HEAP32[i15 + 52 >> 2] | 0;
  i6 = HEAP32[i15 + 56 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 0;
  i8 = i4 + 8 | 0;
  HEAP32[i8 >> 2] = i9;
  HEAP32[i8 + 4 >> 2] = i6;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i10, i1, i4);
 } else {
  _memset(i10 | 0, 0, 16) | 0;
 }
 if (__ZNK7WebCore7IntRect10intersectsERKS0_(i10, i2) | 0) {
  i16 = 1;
  STACKTOP = i3;
  return i16 | 0;
 }
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) == 0) {
  _memset(i11 | 0, 0, 16) | 0;
 } else {
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i11, i1, i7);
 }
 i16 = __ZNK7WebCore7IntRect10intersectsERKS0_(i11, i2) | 0;
 STACKTOP = i3;
 return i16 | 0;
}
function __ZNK7WebCore11RenderLayer15parentClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 248 >> 2] & 63](i4 | 0) | 0) {
   i5 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   __ZNK7WebCore11RenderLayer37mapLayerClipRectsToFragmentationLayerEPNS_12RenderRegionERNS_9ClipRectsE(0, i5, i3);
   return;
  }
 } while (0);
 i4 = i2 + 8 | 0;
 i5 = i1 + 36 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 >> 2] | 0) == 5) {
  __ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE(i1, i2, i3);
  return;
 }
 __ZN7WebCore11RenderLayer15updateClipRectsERKNS0_16ClipRectsContextE(i1, i2);
 i1 = HEAP32[(HEAP32[i5 >> 2] | 0) + 148 >> 2] | 0;
 do {
  if ((i1 | 0) == 0) {
   i6 = 0;
  } else {
   i5 = HEAP32[i4 >> 2] | 0;
   i7 = HEAP32[i1 + (((HEAP32[i2 + 16 >> 2] | 0) == 1 ? i5 + 3 | 0 : i5) << 2) >> 2] | 0;
   if ((i7 | 0) == 0) {
    i6 = 0;
    break;
   }
   if ((HEAP32[i7 + 60 >> 2] & 2147483647 | 0) != 0) {
    i6 = i7;
    break;
   }
   __ZN3WTF8fastFreeEPv(i7);
   i6 = i7;
  }
 } while (0);
 i2 = i3;
 i1 = i6;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP8[i2 + 16 | 0] = HEAP8[i1 + 16 | 0] | 0;
 i1 = i3 + 20 | 0;
 i2 = i6 + 20 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAP32[i1 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
 HEAP8[i1 + 16 | 0] = HEAP8[i2 + 16 | 0] | 0;
 i2 = i3 + 40 | 0;
 i1 = i6 + 40 | 0;
 HEAP32[i2 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 HEAP8[i2 + 16 | 0] = HEAP8[i1 + 16 | 0] | 0;
 i1 = i3 + 63 | 0;
 HEAP8[i1] = HEAP8[i1] & 127 | HEAP8[i6 + 63 | 0] & -128;
 return;
}
function __ZNK7WebCore11RenderLayer18isVisuallyNonEmptyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = (HEAP8[i1 + 22 | 0] & 8) == 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 L1 : do {
  if (!i2) {
   i4 = HEAP32[i3 + 28 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   } else {
    i5 = i4;
   }
   while (1) {
    i4 = HEAP32[i5 + 20 >> 2] | 0;
    if ((i4 & 32768 | 0) == 0) {
     if ((i4 & 768 | 0) != 256) {
      if ((HEAP32[i5 + 24 >> 2] & 4 | 0) != 0) {
       i6 = 1;
       i7 = 21;
       break;
      }
     }
     if ((i4 & 512 | 0) == 0) {
      i6 = 1;
      i7 = 31;
      break;
     }
     if ((HEAP32[i5 + 52 >> 2] | 0) > 0) {
      i6 = 1;
      i7 = 32;
      break;
     }
     if ((HEAP32[i5 + 56 >> 2] | 0) > 0) {
      i6 = 1;
      i7 = 25;
      break;
     }
    }
    i5 = HEAP32[i5 + 16 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break L1;
    }
   }
   if ((i7 | 0) == 25) {
    return i6 | 0;
   } else if ((i7 | 0) == 31) {
    return i6 | 0;
   } else if ((i7 | 0) == 32) {
    return i6 | 0;
   } else if ((i7 | 0) == 21) {
    return i6 | 0;
   }
  }
 } while (0);
 i5 = i1 + 32 | 0;
 if ((HEAP32[i3 + 20 >> 2] & 2048 | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 i4 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0;
 i3 = i4 + 116 | 0;
 while (1) {
  if ((HEAP32[i3 + 4 >> 2] | 0) != 0) {
   i6 = 1;
   i7 = 24;
   break;
  }
  i3 = HEAP32[i3 >> 2] | 0;
  if ((i3 | 0) == 0) {
   break;
  }
 }
 if ((i7 | 0) == 24) {
  return i6 | 0;
 }
 i7 = (HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0;
 if (i7 | i2) {
  i6 = i7;
  return i6 | 0;
 }
 if (__ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(i1) | 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 if ((HEAP32[i1 + 180 >> 2] | 0) != 0) {
  i6 = 1;
  return i6 | 0;
 }
 i6 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0;
 return i6 | 0;
}
function __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_7IntRectENS0_22ColumnOffsetAdjustmentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i3;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 i9 = i7 | 0;
 HEAP32[i9 >> 2] = i10;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = i11;
 i13 = i3 + 8 | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i7 + 8 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i7 + 12 >> 2] = i14;
 i14 = i6 | 0;
 HEAP32[i14 >> 2] = 0;
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 if ((i2 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  i15 = 0;
  i16 = 0;
  i17 = i10;
  i18 = i11;
  i19 = i17 - i15 | 0;
  HEAP32[i9 >> 2] = i19;
  i20 = i18 - i16 | 0;
  HEAP32[i12 >> 2] = i20;
  __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i7);
  i21 = i3;
  i22 = i8;
  HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
  HEAP32[i21 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
  HEAP32[i21 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
  HEAP32[i21 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
  STACKTOP = i5;
  return;
 } else {
  i23 = i1;
 }
 while (1) {
  i23 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i23, i2, i6, i4) | 0;
  if ((i23 | 0) == 0 | (i23 | 0) == (i2 | 0)) {
   break;
  }
 }
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i13 >> 2] | 0;
 i17 = HEAP32[i9 >> 2] | 0;
 i18 = HEAP32[i12 >> 2] | 0;
 i19 = i17 - i15 | 0;
 HEAP32[i9 >> 2] = i19;
 i20 = i18 - i16 | 0;
 HEAP32[i12 >> 2] = i20;
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i7);
 i21 = i3;
 i22 = i8;
 HEAP32[i21 >> 2] = HEAP32[i22 >> 2];
 HEAP32[i21 + 4 >> 2] = HEAP32[i22 + 4 >> 2];
 HEAP32[i21 + 8 >> 2] = HEAP32[i22 + 8 >> 2];
 HEAP32[i21 + 12 >> 2] = HEAP32[i22 + 12 >> 2];
 STACKTOP = i5;
 return;
}
function __ZN3WTF7HashSetIPKN7WebCore12RenderObjectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_(i1, i2) {
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
 __ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_(i1 | 0, (i5 | 0) / 2 & -1, 0) | 0;
 i21 = 1;
 return i21 | 0;
}
function __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 136 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 140 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   if ((HEAP32[i5 >> 2] | 0) == 0) {
    break;
   }
   i3 = i2 + 8 | 0;
   if ((HEAP32[i3 >> 2] | 0) != 0) {
    HEAP32[i3 >> 2] = 0;
   }
   i3 = i2 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   HEAP32[i3 >> 2] = 0;
   HEAP32[i5 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i4);
  }
 } while (0);
 i2 = i1 + 20 | 0;
 HEAP8[i2] = HEAP8[i2] | 4;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 63](i1 | 0) | 0) {
   i4 = HEAP32[i2 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 1188 >> 2] & 63](i4) | 0)) {
    break;
   }
   i4 = (HEAP32[i2 >> 2] | 0) + 293 | 0;
   HEAP8[i4] = HEAP8[i4] | 2;
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
  return;
 }
 HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 87 | 0] = 1;
 return;
}
function __ZNK7WebCore11RenderLayer26rectForHorizontalScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 + 128 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i8 = i2 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 + 20 >> 2] & 512 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i9;
 }
 if ((HEAP32[i2 + 132 >> 2] | 0) != 0 | (HEAP32[(HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0) {
  i11 = i5 | 0;
  i12 = HEAP32[i9 + 52 >> 2] | 0;
  i13 = HEAP32[i9 + 56 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  i11 = i5 + 8 | 0;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i11 + 4 >> 2] = i13;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i6, i2, i5);
  i14 = HEAP32[i8 >> 2] | 0;
  i15 = HEAP32[i6 + 8 >> 2] | 0;
 } else {
  _memset(i6 | 0, 0, 16) | 0;
  i14 = i9;
  i15 = 0;
 }
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 744 >> 2] & 63](i14) | 0) + i9 | 0;
 i9 = (HEAP32[i3 + 12 >> 2] | 0) + (HEAP32[i3 + 4 >> 2] | 0) | 0;
 i14 = i10 | 0;
 i8 = i10;
 i10 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 740 >> 2] & 63](i14) | 0) | 0;
 i9 = HEAP32[i7 >> 2] | 0;
 i5 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 108 >> 2] & 63](i9) | 0) | 0;
 i9 = HEAP32[i3 + 8 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 63](i14) | 0;
 i10 = i9 - i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 748 >> 2] & 63](i14) | 0) - i15 | 0;
 i15 = HEAP32[i7 >> 2] | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i15 >> 2] | 0) + 108 >> 2] & 63](i15) | 0;
 HEAP32[i1 >> 2] = i6;
 HEAP32[i1 + 4 >> 2] = i5;
 HEAP32[i1 + 8 >> 2] = i10;
 HEAP32[i1 + 12 >> 2] = i7;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderLayer24rectForVerticalScrollbarERKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i2 + 132 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i4;
  return;
 }
 i8 = i2 + 32 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i9 + 20 >> 2] & 512 | 0) == 0) {
  i10 = 0;
 } else {
  i10 = i9;
 }
 if ((HEAP32[i2 + 128 >> 2] | 0) != 0 | (HEAP32[(HEAP32[(HEAP32[i9 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0) {
  i11 = i5 | 0;
  i12 = HEAP32[i9 + 52 >> 2] | 0;
  i13 = HEAP32[i9 + 56 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  HEAP32[i11 + 4 >> 2] = 0;
  i11 = i5 + 8 | 0;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i11 + 4 >> 2] = i13;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i6, i2, i5);
  i14 = HEAP32[i8 >> 2] | 0;
  i15 = HEAP32[i6 + 12 >> 2] | 0;
 } else {
  _memset(i6 | 0, 0, 16) | 0;
  i14 = i9;
  i15 = 0;
 }
 i9 = (HEAP32[i3 + 8 >> 2] | 0) + (HEAP32[i3 >> 2] | 0) | 0;
 i6 = i9 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 748 >> 2] & 63](i14) | 0) | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 i9 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 63](i14) | 0) | 0;
 i14 = HEAP32[i3 + 4 >> 2] | 0;
 i6 = i10 | 0;
 i8 = i10;
 i10 = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 63](i6) | 0) + i14 | 0;
 i14 = HEAP32[i7 >> 2] | 0;
 i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i14 >> 2] | 0) + 104 >> 2] & 63](i14) | 0;
 i14 = HEAP32[i3 + 12 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 736 >> 2] & 63](i6) | 0;
 i5 = i14 - i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 740 >> 2] & 63](i6) | 0) - i15 | 0;
 HEAP32[i1 >> 2] = i9;
 HEAP32[i1 + 4 >> 2] = i10;
 HEAP32[i1 + 8 >> 2] = i7;
 HEAP32[i1 + 12 >> 2] = i5;
 STACKTOP = i4;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = i4;
 HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i7 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i7 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 i8 = i2 + 32 | 0;
 i7 = HEAP32[i8 >> 2] | 0;
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = i7;
 }
 i4 = i2 + 132 | 0;
 do {
  if ((HEAP32[i4 >> 2] | 0) == (i3 | 0)) {
   i10 = HEAP32[i9 + 52 >> 2] | 0;
   i11 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 748 >> 2] & 63](i7) | 0) | 0;
   i10 = HEAP32[i4 >> 2] | 0;
   i12 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 104 >> 2] & 63](i10) | 0) | 0;
   i13 = i12;
   i14 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i9 | 0) | 0;
  } else {
   if ((HEAP32[i2 + 128 >> 2] | 0) != (i3 | 0)) {
    i13 = 0;
    i14 = 0;
    break;
   }
   i12 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 744 >> 2] & 63](i7) | 0;
   i10 = HEAP32[i9 + 56 >> 2] | 0;
   i11 = i10 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 740 >> 2] & 63](i9 | 0) | 0) | 0;
   i13 = i12;
   i14 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 63](i3) | 0) | 0;
  }
 } while (0);
 i3 = i6 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i13;
 i13 = i6 + 4 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + i14;
 i14 = HEAP32[i8 >> 2] | 0;
 __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_7IntRectE(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i14 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i14 | 0, i6);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore11RenderLayer24enclosingScrollableLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
   if ((i3 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i5 = i3 + 32 | 0;
   if ((HEAP32[i3 + 12 >> 2] & 2048 | 0) == 0) {
    i6 = i5 | 0;
   } else {
    i6 = HEAP32[i5 >> 2] | 0;
   }
   i5 = HEAP32[i6 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   i3 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i5) | 0;
   if ((i3 | 0) == 0) {
    i4 = 0;
   } else {
    i7 = i3;
    break;
   }
   return i4 | 0;
  } else {
   i7 = i2;
  }
 } while (0);
 while (1) {
  i2 = i7 + 32 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  if ((HEAP32[i6 + 20 >> 2] & 512 | 0) != 0) {
   if (__ZNK7WebCore9RenderBox33canBeScrolledAndHasScrollableAreaEv(i6) | 0) {
    i4 = i7;
    i8 = 21;
    break;
   }
  }
  i6 = HEAP32[i7 + 36 >> 2] | 0;
  if ((i6 | 0) != 0) {
   i7 = i6;
   continue;
  }
  i6 = __ZNK7WebCore8Document12ownerElementEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) | 0;
  if ((i6 | 0) == 0) {
   i4 = 0;
   i8 = 20;
   break;
  }
  i2 = i6 + 32 | 0;
  if ((HEAP32[i6 + 12 >> 2] & 2048 | 0) == 0) {
   i9 = i2 | 0;
  } else {
   i9 = HEAP32[i2 >> 2] | 0;
  }
  i2 = HEAP32[i9 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i4 = 0;
   i8 = 22;
   break;
  }
  i6 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i2) | 0;
  if ((i6 | 0) == 0) {
   i4 = 0;
   i8 = 19;
   break;
  } else {
   i7 = i6;
  }
 }
 if ((i8 | 0) == 21) {
  return i4 | 0;
 } else if ((i8 | 0) == 22) {
  return i4 | 0;
 } else if ((i8 | 0) == 19) {
  return i4 | 0;
 } else if ((i8 | 0) == 20) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = HEAP32[i1 + 208 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 91 | 0] & 1) == 0) {
    break;
   } else {
    i4 = i1;
   }
   return i4 | 0;
  }
 } while (0);
 L6 : do {
  if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
   i2 = i1;
   while (1) {
    i3 = HEAP32[i2 + 36 >> 2] | 0;
    if ((i3 | 0) == 0) {
     i4 = 0;
     break;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i5 = i3;
     break L6;
    }
    if ((HEAP8[i3 + 21 | 0] & 20) == 0) {
     i2 = i3;
    } else {
     i5 = i3;
     break L6;
    }
   }
   return i4 | 0;
  } else {
   i2 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i4 = 0;
   } else {
    i5 = i2;
    break;
   }
   return i4 | 0;
  }
 } while (0);
 L14 : while (1) {
  i1 = HEAP32[i5 + 208 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if ((HEAP8[i1 + 91 | 0] & 1) != 0) {
    i4 = i5;
    i6 = 20;
    break;
   }
  }
  if ((HEAP8[i5 + 20 | 0] & 16) == 0) {
   i1 = i5;
   while (1) {
    i2 = HEAP32[i1 + 36 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i4 = 0;
     i6 = 22;
     break L14;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i5 = i2;
     continue L14;
    }
    if ((HEAP8[i2 + 21 | 0] & 20) == 0) {
     i1 = i2;
    } else {
     i7 = i2;
     break;
    }
   }
  } else {
   i7 = HEAP32[i5 + 36 >> 2] | 0;
  }
  if ((i7 | 0) == 0) {
   i4 = 0;
   i6 = 19;
   break;
  } else {
   i5 = i7;
  }
 }
 if ((i6 | 0) == 19) {
  return i4 | 0;
 } else if ((i6 | 0) == 20) {
  return i4 | 0;
 } else if ((i6 | 0) == 22) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationENS_13HitTestFilterE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 i9 = i1 + 32 | 0;
 i1 = HEAP32[i9 >> 2] | 0;
 i10 = i4;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i11 = 0;
  i12 = 0;
 } else {
  i4 = i1 + 44 | 0;
  i11 = HEAP32[i4 >> 2] | 0;
  i12 = HEAP32[i4 + 4 >> 2] | 0;
 }
 i4 = (HEAP32[i10 + 4 >> 2] | 0) - i12 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i10 >> 2] | 0) - i11;
 HEAP32[i8 + 4 >> 2] = i4;
 if (!(__ZN7WebCore12RenderObject7hitTestERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationERKNS_11LayoutPointENS_13HitTestFilterE(i1 | 0, i2, i3, i5, i8, i6) | 0)) {
  i13 = 0;
  STACKTOP = i7;
  return i13 | 0;
 }
 i6 = (HEAP32[i3 + 72 >> 2] | 0) == 0;
 do {
  if (!i6) {
   if ((HEAP32[i3 + 76 >> 2] | 0) == 0) {
    break;
   } else {
    i13 = 1;
   }
   STACKTOP = i7;
   return i13 | 0;
  }
 } while (0);
 i8 = HEAP32[i9 >> 2] | 0;
 L11 : do {
  if ((i8 | 0) == 0) {
   i14 = 0;
  } else {
   i9 = i8 | 0;
   while (1) {
    if ((HEAP32[i9 + 20 >> 2] & 128 | 0) == 0) {
     i15 = HEAP32[i9 + 4 >> 2] | 0;
     if ((i15 | 0) != 0) {
      break;
     }
    }
    i5 = HEAP32[i9 + 8 >> 2] | 0;
    if ((i5 | 0) == 0) {
     i14 = 0;
     break L11;
    } else {
     i9 = i5;
    }
   }
   i14 = i15;
  }
 } while (0);
 if (i6) {
  __ZN7WebCore13HitTestResult12setInnerNodeEPNS_4NodeE(i3, i14 | 0);
 }
 if ((HEAP32[i3 + 76 >> 2] | 0) != 0) {
  i13 = 1;
  STACKTOP = i7;
  return i13 | 0;
 }
 __ZN7WebCore13HitTestResult21setInnerNonSharedNodeEPNS_4NodeE(i3, i14 | 0);
 i13 = 1;
 STACKTOP = i7;
 return i13 | 0;
}
function __ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = i4;
 i4 = HEAP32[i8 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = i4;
 i4 = i2 + 32 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i8 + 20 >> 2] & 512 | 0) == 0) {
  i9 = 0;
 } else {
  i9 = i8;
 }
 i10 = i2 + 132 | 0;
 do {
  if ((HEAP32[i10 >> 2] | 0) == (i3 | 0)) {
   i11 = HEAP32[i9 + 52 >> 2] | 0;
   i12 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 748 >> 2] & 63](i8) | 0) | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   i13 = i12 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i11 >> 2] | 0) + 104 >> 2] & 63](i11) | 0) | 0;
   i14 = i13;
   i15 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i9 | 0) | 0;
  } else {
   if ((HEAP32[i2 + 128 >> 2] | 0) != (i3 | 0)) {
    i14 = 0;
    i15 = 0;
    break;
   }
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 63](i8) | 0;
   i11 = HEAP32[i9 + 56 >> 2] | 0;
   i12 = i11 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 740 >> 2] & 63](i9 | 0) | 0) | 0;
   i14 = i13;
   i15 = i12 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 63](i3) | 0) | 0;
  }
 } while (0);
 i3 = i6;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + i14;
 i14 = i7 + 4 | 0;
 HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + i15;
 i15 = HEAP32[i4 >> 2] | 0;
 __ZNK7WebCore9FrameView19convertFromRendererEPKNS_13RenderElementERKNS_8IntPointE(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i15 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i15 | 0, i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 24 | 0;
 i7 = i1 + 208 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if (__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i8) | 0) {
    break;
   }
   i9 = HEAP32[i7 >> 2] | 0;
   __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i6, i2);
   __ZN7WebCore18RenderLayerBacking28setContentsNeedDisplayInRectERKNS_7IntRectE(i9, i6);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i6 = i4;
 i7 = i2;
 HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = i5 | 0;
 HEAP32[i7 >> 2] = 0;
 i6 = i5 + 4 | 0;
 HEAP32[i6 >> 2] = 0;
 i2 = i1;
 while (1) {
  i8 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  } else {
   i2 = i8;
  }
 }
 if ((i2 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  i10 = 0;
  i11 = 0;
 } else {
  i8 = i1;
  while (1) {
   i8 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i8, i2, i5, 0) | 0;
   if ((i8 | 0) == 0 | (i8 | 0) == (i2 | 0)) {
    break;
   }
  }
  i10 = HEAP32[i7 >> 2] | 0;
  i11 = HEAP32[i6 >> 2] | 0;
 }
 i6 = i4 | 0;
 HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + i10;
 i10 = i4 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + i11;
 __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0, i4, 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer20perspectiveTransformEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i5 + 20 >> 2] & 131072 | 0) == 0) {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 32) | 0;
  HEAPF64[i1 + 40 >> 3] = +1;
  _memset(i1 + 48 | 0, 0, 32) | 0;
  HEAPF64[i1 + 80 >> 3] = +1;
  _memset(i1 + 88 | 0, 0, 32) | 0;
  HEAPF64[i1 + 120 >> 3] = +1;
  STACKTOP = i3;
  return;
 }
 i2 = (HEAP32[i5 + 36 >> 2] | 0) + 20 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 if (+HEAPF32[i6 + 16 >> 2] > +0) {
  d7 = +(HEAP32[i5 + 52 >> 2] | 0);
  d8 = +(HEAP32[i5 + 56 >> 2] | 0);
  d9 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE(i6 + 20 | 0, d7, 0);
  d10 = d9 - d7 * +.5;
  d7 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthEfPNS_10RenderViewE((HEAP32[i2 >> 2] | 0) + 28 | 0, d8, 0) - d8 * +.5;
  HEAPF64[i4 >> 3] = +1;
  _memset(i4 + 8 | 0, 0, 32) | 0;
  HEAPF64[i4 + 40 >> 3] = +1;
  _memset(i4 + 48 | 0, 0, 32) | 0;
  HEAPF64[i4 + 80 >> 3] = +1;
  _memset(i4 + 88 | 0, 0, 32) | 0;
  HEAPF64[i4 + 120 >> 3] = +1;
  __ZN7WebCore20TransformationMatrix9translateEdd(i4, d10, d7) | 0;
  __ZN7WebCore20TransformationMatrix16applyPerspectiveEd(i4, +HEAPF32[(HEAP32[i2 >> 2] | 0) + 16 >> 2]) | 0;
  __ZN7WebCore20TransformationMatrix9translateEdd(i4, +-0 - d10, +-0 - d7) | 0;
  _memcpy(i1 | 0, i4 | 0, 128) | 0;
  STACKTOP = i3;
  return;
 } else {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 32) | 0;
  HEAPF64[i1 + 40 >> 3] = +1;
  _memset(i1 + 48 | 0, 0, 32) | 0;
  HEAPF64[i1 + 80 >> 3] = +1;
  _memset(i1 + 88 | 0, 0, 32) | 0;
  HEAPF64[i1 + 120 >> 3] = +1;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore14ClipRectsCacheD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 20 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 60 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 2147483647 & 2147483647;
   HEAP32[i3 >> 2] = i5 | i4 & -2147483648;
   if ((i5 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 60 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   i3 = i4 + 2147483647 & 2147483647;
   HEAP32[i5 >> 2] = i3 | i4 & -2147483648;
   if ((i3 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 60 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 2147483647 & 2147483647;
   HEAP32[i3 >> 2] = i5 | i4 & -2147483648;
   if ((i5 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 60 | 0;
   i4 = HEAP32[i5 >> 2] | 0;
   i3 = i4 + 2147483647 & 2147483647;
   HEAP32[i5 >> 2] = i3 | i4 & -2147483648;
   if ((i3 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 60 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   i5 = i4 + 2147483647 & 2147483647;
   HEAP32[i3 >> 2] = i5 | i4 & -2147483648;
   if ((i5 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 60 | 0;
 i5 = HEAP32[i1 >> 2] | 0;
 i4 = i5 + 2147483647 & 2147483647;
 HEAP32[i1 >> 2] = i4 | i5 & -2147483648;
 if ((i4 | 0) != 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore11RenderLayer25enclosingCompositingLayerENS_16IncludeSelfOrNotE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 do {
  if ((i2 | 0) == 0) {
   if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = i1;
   }
   return i3 | 0;
  }
 } while (0);
 L5 : do {
  if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
   i2 = i1;
   while (1) {
    i4 = HEAP32[i2 + 36 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i3 = 0;
     break;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i5 = i4;
     break L5;
    }
    if ((HEAP8[i4 + 21 | 0] & 20) == 0) {
     i2 = i4;
    } else {
     i5 = i4;
     break L5;
    }
   }
   return i3 | 0;
  } else {
   i2 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i2 | 0) == 0) {
    i3 = 0;
   } else {
    i5 = i2;
    break;
   }
   return i3 | 0;
  }
 } while (0);
 L13 : while (1) {
  if ((HEAP32[i5 + 208 >> 2] | 0) != 0) {
   i3 = i5;
   i6 = 21;
   break;
  }
  if ((HEAP8[i5 + 20 | 0] & 16) == 0) {
   i1 = i5;
   while (1) {
    i2 = HEAP32[i1 + 36 >> 2] | 0;
    if ((i2 | 0) == 0) {
     i3 = 0;
     i6 = 17;
     break L13;
    }
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
     i5 = i2;
     continue L13;
    }
    if ((HEAP8[i2 + 21 | 0] & 20) == 0) {
     i1 = i2;
    } else {
     i7 = i2;
     break;
    }
   }
  } else {
   i7 = HEAP32[i5 + 36 >> 2] | 0;
  }
  if ((i7 | 0) == 0) {
   i3 = 0;
   i6 = 20;
   break;
  } else {
   i5 = i7;
  }
 }
 if ((i6 | 0) == 20) {
  return i3 | 0;
 } else if ((i6 | 0) == 17) {
  return i3 | 0;
 } else if ((i6 | 0) == 21) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, d12 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = (i1 | 0) == 0;
 if (i9 | i2) {
  i10 = i9 ^ 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 if ((i3 | 0) == 0) {
  i10 = 1;
  STACKTOP = i5;
  return i10 | 0;
 }
 i9 = i4 + 80 | 0;
 do {
  if (+HEAPF64[i4 + 96 >> 3] == +0) {
   if (+HEAPF64[i4 + 104 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 128 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 136 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 144 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 152 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 160 >> 3] != +1) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 168 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 192 >> 3] != +0) {
    i11 = 13;
    break;
   }
   if (+HEAPF64[i4 + 200 >> 3] == +1) {
    d12 = +0;
   } else {
    i11 = 13;
   }
  } else {
   i11 = 13;
  }
 } while (0);
 if ((i11 | 0) == 13) {
  __ZNK7WebCore24HitTestingTransformState11mappedPointEv(i6, i4);
  HEAPF32[i8 >> 2] = +HEAPF32[i6 >> 2];
  HEAPF32[i8 + 4 >> 2] = +HEAPF32[i6 + 4 >> 2];
  HEAPF32[i8 + 8 >> 2] = +0;
  __ZNK7WebCore20TransformationMatrix8mapPointERKNS_12FloatPoint3DE(i7, i9, i8);
  d12 = +HEAPF32[i7 + 8 >> 2];
 }
 if (d12 <= +HEAPF64[i3 >> 3]) {
  i10 = 0;
  STACKTOP = i5;
  return i10 | 0;
 }
 HEAPF64[i3 >> 3] = d12;
 i10 = 1;
 STACKTOP = i5;
 return i10 | 0;
}
function __ZNK7WebCore11RenderLayer14overflowBottomEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[i8 + 88 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i8 | 0;
  i9 = i8;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 63](i2) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i8);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i8);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i6 >> 2] = i10;
  i10 = i6 + 4 | 0;
  HEAP32[i10 >> 2] = i11;
  HEAP32[i6 + 8 >> 2] = i2;
  i2 = i6 + 12 | 0;
  HEAP32[i2 >> 2] = i4;
  i12 = i10;
  i13 = i2;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i14 = HEAP32[i12 >> 2] | 0;
  i15 = HEAP32[i13 >> 2] | 0;
  i16 = i1 | 0;
  i17 = i15 + i14 | 0;
  HEAP32[i16 >> 2] = i17;
  STACKTOP = i3;
  return;
 } else {
  i2 = i6;
  i10 = i7 + 4 | 0;
  HEAP32[i2 >> 2] = HEAP32[i10 >> 2];
  HEAP32[i2 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
  HEAP32[i2 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
  HEAP32[i2 + 12 >> 2] = HEAP32[i10 + 12 >> 2];
  i12 = i6 + 4 | 0;
  i13 = i6 + 12 | 0;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i14 = HEAP32[i12 >> 2] | 0;
  i15 = HEAP32[i13 >> 2] | 0;
  i16 = i1 | 0;
  i17 = i15 + i14 | 0;
  HEAP32[i16 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderLayer13overflowRightEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[i8 + 88 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i8 | 0;
  i9 = i8;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 63](i2) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i8);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i8);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = i10;
  HEAP32[i6 + 4 >> 2] = i11;
  i11 = i6 + 8 | 0;
  HEAP32[i11 >> 2] = i2;
  HEAP32[i6 + 12 >> 2] = i4;
  i12 = i5;
  i13 = i11;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i14 = HEAP32[i12 >> 2] | 0;
  i15 = HEAP32[i13 >> 2] | 0;
  i16 = i1 | 0;
  i17 = i15 + i14 | 0;
  HEAP32[i16 >> 2] = i17;
  STACKTOP = i3;
  return;
 } else {
  i11 = i6;
  i5 = i7 + 4 | 0;
  HEAP32[i11 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i11 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
  HEAP32[i11 + 8 >> 2] = HEAP32[i5 + 8 >> 2];
  HEAP32[i11 + 12 >> 2] = HEAP32[i5 + 12 >> 2];
  i12 = i6 | 0;
  i13 = i6 + 8 | 0;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i14 = HEAP32[i12 >> 2] | 0;
  i15 = HEAP32[i13 >> 2] | 0;
  i16 = i1 | 0;
  i17 = i15 + i14 | 0;
  HEAP32[i16 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore9ClipRectseqERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1;
 i4 = i2;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 8 | 0;
 i3 = i2 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP8[i1 + 16 | 0] & 1) != 0 ^ (HEAP8[i2 + 16 | 0] & 1) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = i1 + 20 | 0;
 i4 = i2 + 20 | 0;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 28 | 0;
 i3 = i2 + 28 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP8[i1 + 36 | 0] & 1) != 0 ^ (HEAP8[i2 + 36 | 0] & 1) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i3 = i1 + 40 | 0;
 i4 = i2 + 40 | 0;
 if (!((HEAP32[i3 >> 2] | 0) == (HEAP32[i4 >> 2] | 0) & (HEAP32[i3 + 4 >> 2] | 0) == (HEAP32[i4 + 4 >> 2] | 0))) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = i1 + 48 | 0;
 i3 = i2 + 48 | 0;
 if ((HEAP32[i4 >> 2] | 0) != (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP32[i4 + 4 >> 2] | 0) != (HEAP32[i3 + 4 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 if ((HEAP8[i1 + 56 | 0] & 1) != 0 ^ (HEAP8[i2 + 56 | 0] & 1) != 0) {
  i5 = 0;
  return i5 | 0;
 }
 i5 = (HEAPU8[i1 + 63 | 0] | 0) >>> 7 << 24 >> 24 == (HEAPU8[i2 + 63 | 0] | 0) >>> 7 << 24 >> 24;
 return i5 | 0;
}
function __ZNK7WebCore11RenderLayer27hitTestContentsForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationENS_13HitTestFilterERb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i8 = i2 + 8 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i11 = i9 - 1 | 0;
 if ((i11 | 0) <= -1) {
  i10 = 0;
  return i10 | 0;
 }
 i12 = i2 | 0;
 i2 = i11;
 i11 = i9;
 while (1) {
  if (i11 >>> 0 <= i2 >>> 0) {
   i13 = 5;
   break;
  }
  i9 = HEAP32[i12 >> 2] | 0;
  if ((i6 | 0) == 1) {
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i5, i9 + (i2 * 104 & -1) + 20 | 0) | 0) {
    i13 = 9;
   }
  } else if ((i6 | 0) == 2) {
   if (__ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i5, i9 + (i2 * 104 & -1) + 40 | 0) | 0) {
    i13 = 9;
   }
  } else {
   i13 = 9;
  }
  if ((i13 | 0) == 9) {
   i13 = 0;
   HEAP8[i7] = 1;
   if (__ZNK7WebCore11RenderLayer15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationENS_13HitTestFilterE(i1, i3, i4, i9 + (i2 * 104 & -1) + 4 | 0, i5, i6) | 0) {
    i10 = 1;
    i13 = 15;
    break;
   }
  }
  i9 = i2 - 1 | 0;
  if ((i9 | 0) <= -1) {
   i10 = 0;
   i13 = 16;
   break;
  }
  i2 = i9;
  i11 = HEAP32[i8 >> 2] | 0;
 }
 if ((i13 | 0) == 5) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 } else if ((i13 | 0) == 15) {
  return i10 | 0;
 } else if ((i13 | 0) == 16) {
  return i10 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = i2 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_8IntPointE(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i6 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i4;
 }
 i5 = i2 + 132 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == (i3 | 0)) {
   i6 = HEAP32[i7 + 52 >> 2] | 0;
   i8 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 748 >> 2] & 63](i4) | 0) | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i9 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 63](i6) | 0) | 0;
   i10 = i9;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 736 >> 2] & 63](i7 | 0) | 0;
  } else {
   if ((HEAP32[i2 + 128 >> 2] | 0) != (i3 | 0)) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 63](i4) | 0;
   i6 = HEAP32[i7 + 56 >> 2] | 0;
   i8 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 740 >> 2] & 63](i7 | 0) | 0) | 0;
   i10 = i9;
   i11 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 63](i3) | 0) | 0;
  }
 } while (0);
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i10;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i11;
 return;
}
function __ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = i2 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 __ZNK7WebCore9FrameView17convertToRendererEPKNS_13RenderElementERKNS_7IntRectE(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i6 | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i7 = 0;
 } else {
  i7 = i4;
 }
 i5 = i2 + 132 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == (i3 | 0)) {
   i6 = HEAP32[i7 + 52 >> 2] | 0;
   i8 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 748 >> 2] & 63](i4) | 0) | 0;
   i6 = HEAP32[i5 >> 2] | 0;
   i9 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 104 >> 2] & 63](i6) | 0) | 0;
   i10 = i9;
   i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 736 >> 2] & 63](i7 | 0) | 0;
  } else {
   if ((HEAP32[i2 + 128 >> 2] | 0) != (i3 | 0)) {
    i10 = 0;
    i11 = 0;
    break;
   }
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 63](i4) | 0;
   i6 = HEAP32[i7 + 56 >> 2] | 0;
   i8 = i6 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 740 >> 2] & 63](i7 | 0) | 0) | 0;
   i10 = i9;
   i11 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 63](i3) | 0) | 0;
  }
 } while (0);
 i3 = i1 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i10;
 i10 = i1 + 4 | 0;
 HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) - i11;
 return;
}
function __ZN7WebCore11RenderLayer19dirtyNormalFlowListEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 144 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   if ((HEAP32[i3 >> 2] | 0) == 0) {
    break;
   }
   i4 = i2 + 8 | 0;
   if ((HEAP32[i4 >> 2] | 0) != 0) {
    HEAP32[i4 >> 2] = 0;
   }
   i4 = i2 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   HEAP32[i4 >> 2] = 0;
   HEAP32[i3 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i5);
  }
 } while (0);
 i2 = i1 + 20 | 0;
 HEAP8[i2] = HEAP8[i2] | 8;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) != 0) {
  return;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 63](i1 | 0) | 0) {
   i5 = HEAP32[i2 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 1188 >> 2] & 63](i5) | 0)) {
    break;
   }
   i5 = (HEAP32[i2 >> 2] | 0) + 293 | 0;
   HEAP8[i5] = HEAP8[i5] | 2;
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
 i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i1 + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
  return;
 }
 HEAP8[(__ZN7WebCore10RenderView10compositorEv(i1) | 0) + 87 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderLayer36positionNewlyCreatedOverflowControlsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 704 | 0;
 i3 = i2 | 0;
 i4 = i2 + 680 | 0;
 i5 = i2 + 688 | 0;
 i6 = i2 + 696 | 0;
 if (!(__ZNK7WebCore18RenderLayerBacking37hasUnpositionedOverflowControlsLayersEv(HEAP32[i1 + 208 >> 2] | 0) | 0)) {
  STACKTOP = i2;
  return;
 }
 __ZN7WebCore17RenderGeometryMapC1Ej(i3, 2);
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0) != (i1 | 0)) {
   i7 = HEAP32[i1 + 36 >> 2] | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i3, i7, 0);
  }
 } while (0);
 HEAPF32[i5 >> 2] = +0;
 HEAPF32[i5 + 4 >> 2] = +0;
 __ZNK7WebCore17RenderGeometryMap14mapToContainerERKNS_10FloatPointEPKNS_22RenderLayerModelObjectE(i4, i3, i5, 0);
 d8 = +HEAPF32[i4 >> 2];
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
 d8 = +HEAPF32[i4 + 4 >> 2];
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
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = i10;
 __ZN7WebCore11RenderLayer24positionOverflowControlsERKNS_7IntSizeE(i1, i6);
 __ZN7WebCore17RenderGeometryMapD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = __ZN3WTF10fastMallocEj(36) | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP8[i7 + 4 | 0] = 0;
 i9 = i7 + 5 | 0;
 HEAP8[i9] = 3;
 HEAP8[i7 + 6 | 0] = 0;
 HEAP32[i8 + 4 >> 2] = 1;
 HEAP32[i8 >> 2] = __ZTVN7WebCore27TranslateTransformOperationE + 8;
 i10 = i8 + 8 | 0;
 i11 = i2;
 i2 = i10;
 i12 = HEAP32[i11 >> 2] | 0;
 i13 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i12;
 HEAP32[i2 + 4 >> 2] = i13;
 if ((i12 & 0 | 0) == 0 & (i13 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i10 = i8 + 16 | 0;
 i13 = i3;
 i3 = i10;
 i12 = HEAP32[i13 >> 2] | 0;
 i2 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = i12;
 HEAP32[i3 + 4 >> 2] = i2;
 if ((i12 & 0 | 0) == 0 & (i2 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 i10 = i8 + 24 | 0;
 i2 = i10;
 i12 = HEAP32[i6 >> 2] | 0;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = i12;
 HEAP32[i2 + 4 >> 2] = i3;
 if ((i12 & 0 | 0) == 0 & (i3 & 65280 | 0) == 2560) {
  __ZNK7WebCore6Length22incrementCalculatedRefEv(i10);
 }
 HEAP32[i8 + 32 >> 2] = i4;
 HEAP32[i1 >> 2] = i8;
 if ((HEAP8[i9] | 0) != 10) {
  STACKTOP = i5;
  return;
 }
 __ZNK7WebCore6Length22decrementCalculatedRefEv(i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer27updateOrRemoveFilterClientsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 i3 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN7WebCore11RenderLayer10FilterInfo6removeERS0_(i1);
  return;
 }
 do {
  if (__ZNK7WebCore16FilterOperations15hasCustomFilterEv(i3 + 4 | 0) | 0) {
   i4 = __ZN7WebCore11RenderLayer10FilterInfo3getERS0_(i1) | 0;
   __ZN7WebCore11RenderLayer10FilterInfo25updateCustomFilterClientsERKNS_16FilterOperationsE(i4, (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0);
  } else {
   i4 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i1) | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderLayer10FilterInfo25removeCustomFilterClientsEv(i4);
  }
 } while (0);
 if (__ZNK7WebCore16FilterOperations18hasReferenceFilterEv((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0) | 0) {
  i3 = __ZN7WebCore11RenderLayer10FilterInfo3getERS0_(i1) | 0;
  __ZN7WebCore11RenderLayer10FilterInfo28updateReferenceFilterClientsERKNS_16FilterOperationsE(i3, (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 4 | 0);
  return;
 }
 i2 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i1) | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer10FilterInfo28removeReferenceFilterClientsEv(i2);
 return;
}
function __ZN7WebCore11RenderLayer27transparentPaintingAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i4 = i3;
 }
 L6 : while (1) {
  if ((HEAP32[i4 + 208 >> 2] | 0) != 0) {
   i2 = 0;
   i5 = 16;
   break;
  }
  i3 = HEAP32[i4 + 32 >> 2] | 0;
  do {
   if ((HEAP32[i3 + 20 >> 2] & 128 | 0) == 0) {
    i1 = HEAP32[i3 + 4 >> 2] | 0;
    if ((i1 | 0) == 0) {
     i5 = 7;
     break;
    }
    if ((HEAP32[i1 + 12 >> 2] & 32 | 0) == 0) {
     i5 = 7;
    }
   } else {
    i5 = 7;
   }
  } while (0);
  if ((i5 | 0) == 7) {
   i5 = 0;
   i1 = HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 20 >> 2] | 0;
   if (+HEAPF32[i1 + 4 >> 2] < +1) {
    i2 = i4;
    i5 = 20;
    break;
   }
   i6 = i1 + 116 | 0;
   while (1) {
    if ((HEAP32[i6 + 4 >> 2] | 0) != 0) {
     i2 = i4;
     i5 = 14;
     break L6;
    }
    i6 = HEAP32[i6 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    i2 = i4;
    i5 = 18;
    break;
   }
  }
  i6 = HEAP32[i4 + 36 >> 2] | 0;
  if ((i6 | 0) == 0) {
   i2 = 0;
   i5 = 19;
   break;
  } else {
   i4 = i6;
  }
 }
 if ((i5 | 0) == 19) {
  return i2 | 0;
 } else if ((i5 | 0) == 20) {
  return i2 | 0;
 } else if ((i5 | 0) == 14) {
  return i2 | 0;
 } else if ((i5 | 0) == 16) {
  return i2 | 0;
 } else if ((i5 | 0) == 18) {
  return i2 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 20 | 0] & 16) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (__ZNK7WebCore14ScrollableArea20hasOverlayScrollbarsEv(i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP8[i1 + 21 | 0] & 4) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = i1 + 32 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 262144 | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i4 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0;
 i5 = i4 + 116 | 0;
 while (1) {
  if ((HEAP32[i5 + 4 >> 2] | 0) != 0) {
   i2 = 1;
   i6 = 25;
   break;
  }
  i5 = HEAP32[i5 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 if ((i6 | 0) == 25) {
  return i2 | 0;
 }
 if ((HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 200 >> 2] & 63](i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 232 >> 2] & 63](i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 224 >> 2] & 63](i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 72 >> 2] & 63](i1 | 0) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 i1 = HEAP32[i3 >> 2] | 0;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 140 >> 2] & 63](i1 | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore11RenderLayer11overflowTopEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[i8 + 88 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i8 | 0;
  i9 = i8;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 63](i2) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i8);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i8);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i6 >> 2] = i10;
  i10 = i6 + 4 | 0;
  HEAP32[i10 >> 2] = i11;
  HEAP32[i6 + 8 >> 2] = i2;
  HEAP32[i6 + 12 >> 2] = i4;
  i12 = i10;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i3;
  return;
 } else {
  i10 = i6;
  i4 = i7 + 4 | 0;
  HEAP32[i10 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i10 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i10 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i10 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
  i12 = i6 + 4 | 0;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11RenderLayer12overflowLeftEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i7 + 20 >> 2] & 512 | 0) == 0) {
  i8 = 0;
 } else {
  i8 = i7;
 }
 i7 = HEAP32[i8 + 88 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i2 = i8 | 0;
  i9 = i8;
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 744 >> 2] & 63](i2) | 0;
  i11 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i9 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
  __ZNK7WebCore9RenderBox11clientWidthEv(i4, i8);
  __ZNK7WebCore9RenderBox12clientHeightEv(i5, i8);
  i2 = HEAP32[i4 >> 2] | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = i10;
  HEAP32[i6 + 4 >> 2] = i11;
  HEAP32[i6 + 8 >> 2] = i2;
  HEAP32[i6 + 12 >> 2] = i4;
  i12 = i5;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i3;
  return;
 } else {
  i5 = i6;
  i4 = i7 + 4 | 0;
  HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
  HEAP32[i5 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
  HEAP32[i5 + 8 >> 2] = HEAP32[i4 + 8 >> 2];
  HEAP32[i5 + 12 >> 2] = HEAP32[i4 + 12 >> 2];
  i12 = i6 | 0;
  __ZNK7WebCore9RenderBox18flipForWritingModeERNS_10LayoutRectE(i8, i6);
  i13 = HEAP32[i12 >> 2] | 0;
  i14 = i1 | 0;
  HEAP32[i14 >> 2] = i13;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderLayer34dirty3DTransformedDescendantStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1;
 while (1) {
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 16;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i4 = 4;
   break;
  }
  if ((HEAP8[i3 + 21 | 0] & 20) == 0) {
   i2 = i3;
  } else {
   i4 = 6;
   break;
  }
 }
 do {
  if ((i4 | 0) == 16) {
   return;
  } else if ((i4 | 0) == 4) {
   i2 = i3 + 22 | 0;
   HEAP8[i2] = HEAP8[i2] | -128;
   i5 = i3;
  } else if ((i4 | 0) == 6) {
   i2 = i3 + 22 | 0;
   HEAP8[i2] = HEAP8[i2] | -128;
   if ((i3 | 0) != 0) {
    i5 = i3;
    break;
   }
   return;
  }
 } while (0);
 L10 : while (1) {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 292 >> 2] & 512 | 0) == 0) {
   i4 = 14;
   break;
  }
  i3 = i5 + 22 | 0;
  HEAP8[i3] = HEAP8[i3] | -128;
  i3 = i5;
  while (1) {
   i3 = HEAP32[i3 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = 15;
    break L10;
   }
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    i5 = i3;
    continue L10;
   }
   if ((HEAP8[i3 + 21 | 0] & 20) != 0) {
    break;
   }
  }
  if ((i3 | 0) == 0) {
   i4 = 18;
   break;
  } else {
   i5 = i3;
  }
 }
 if ((i4 | 0) == 18) {
  return;
 } else if ((i4 | 0) == 14) {
  return;
 } else if ((i4 | 0) == 15) {
  return;
 }
}
function __ZN7WebCore11RenderLayer23updateScrollableAreaSetEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 i4 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0;
 i5 = HEAP32[i3 + 36 >> 2] | 0;
 if ((HEAP32[i5 + 40 >> 2] & 6144 | 0) == 0) {
  i6 = (HEAP32[i5 + 44 >> 2] & 1920 | 0) != 0;
 } else {
  i6 = 0;
 }
 i5 = HEAP32[(HEAP32[i4 + 216 >> 2] | 0) + 448 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i7 = i6;
 } else {
  i3 = (HEAP32[i5 + 12 >> 2] & 2048 | 0) == 0;
  i8 = i5 + 32 | 0;
  if (i3) {
   i9 = i8 | 0;
  } else {
   i9 = HEAP32[i8 >> 2] | 0;
  }
  do {
   if ((HEAP32[i9 >> 2] | 0) == 0) {
    i10 = 0;
   } else {
    if (i3) {
     i11 = i8 | 0;
    } else {
     i11 = HEAP32[i8 >> 2] | 0;
    }
    i5 = (HEAP32[(HEAP32[i11 >> 2] | 0) + 36 >> 2] | 0) + 40 | 0;
    if ((HEAP32[i5 >> 2] & 6144 | 0) != 0) {
     i10 = 0;
     break;
    }
    i10 = (HEAP32[i5 + 4 >> 2] & 1920 | 0) != 0 | 0;
   }
  } while (0);
  i7 = (i10 & (i6 & 1) | 0) != 0;
 }
 i6 = i1 | 0;
 do {
  if (i7 & i2) {
   if (__ZN7WebCore9FrameView17addScrollableAreaEPNS_14ScrollableAreaE(i4, i6) | 0) {
    break;
   }
   return;
  } else {
   if (__ZN7WebCore9FrameView20removeScrollableAreaEPNS_14ScrollableAreaE(i4, i6) | 0) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i1);
 return;
}
function __ZN7WebCore11RenderLayer19removeOnlyThisLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 36 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  return;
 }
 i3 = i1 + 32 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + 20 | 0;
 HEAP32[i4 >> 2] = HEAP32[i4 >> 2] & -32769;
 i4 = __ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
 __ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_(i4, HEAP32[i2 >> 2] | 0, i1);
 __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i1, 4);
 i4 = HEAP32[i1 + 44 >> 2] | 0;
 i5 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i5 | 0) != 0) {
  __ZN7WebCore11RenderLayer11removeChildEPS0_(i1, HEAP32[i5 + 40 >> 2] | 0) | 0;
 }
 i5 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5;
  while (1) {
   i5 = HEAP32[i6 + 44 >> 2] | 0;
   __ZN7WebCore11RenderLayer11removeChildEPS0_(i1, i6) | 0;
   __ZN7WebCore11RenderLayer8addChildEPS0_S1_(HEAP32[i2 >> 2] | 0, i6, i4);
   i7 = i6 + 20 | 0;
   HEAP32[i7 >> 2] = HEAP32[i7 >> 2] & -196609 | 65536;
   __ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj(i6, 0, 13);
   if ((i5 | 0) == 0) {
    break;
   } else {
    i6 = i5;
   }
  }
 }
 __ZN7WebCore11RenderLayer11removeChildEPS0_(HEAP32[i2 >> 2] | 0, i1) | 0;
 __ZN7WebCore22RenderLayerModelObject12destroyLayerEv(HEAP32[i3 >> 2] | 0);
 return;
}
function __ZN7WebCore11RenderLayer12applyFiltersEPNS_26FilterEffectRendererHelperEPNS_15GraphicsContextERNS0_17LayerPaintingInfoERN3WTF6VectorINS_13LayerFragmentELj1ENS7_15CrashOnOverflowEEE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i7 = i6 | 0;
 if ((HEAP32[i5 + 8 >> 2] | 0) == 0) {
  _memset(i7 | 0, 0, 17) | 0;
 } else {
  i8 = i7;
  i9 = (HEAP32[i5 >> 2] | 0) + 20 | 0;
  HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
  HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
  HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
  HEAP32[i8 + 16 >> 2] = HEAP32[i9 + 16 >> 2];
 }
 i9 = i4 + 8 | 0;
 __ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE(i1, HEAP32[i4 >> 2] | 0, i3, i9, i7, 0);
 __ZN7WebCore26FilterEffectRendererHelper17applyFilterEffectEPNS_15GraphicsContextE(i2, i3);
 i2 = i7;
 i1 = i9;
 do {
  if ((HEAP32[i2 >> 2] | 0) == (HEAP32[i1 >> 2] | 0) & (HEAP32[i2 + 4 >> 2] | 0) == (HEAP32[i1 + 4 >> 2] | 0)) {
   i9 = i7 + 8 | 0;
   i8 = i4 + 16 | 0;
   if ((HEAP32[i9 >> 2] | 0) != (HEAP32[i8 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i9 + 4 >> 2] | 0) != (HEAP32[i8 + 4 >> 2] | 0)) {
    break;
   }
   STACKTOP = i6;
   return i3 | 0;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i3);
 STACKTOP = i6;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 do {
  if ((i3 | 0) == 1) {
   i4 = i2 + 132 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i5 | 0) == 0) {
     i6 = 0;
    } else {
     if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 220 >> 2] & 63](i5) | 0) {
      i6 = 0;
      break;
     }
     i7 = HEAP32[i4 >> 2] | 0;
     i6 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 63](i7) | 0;
    }
   } while (0);
   i4 = i2 + 128 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   if ((i5 | 0) == 0) {
    i8 = 0;
    i9 = i6;
    break;
   }
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 220 >> 2] & 63](i5) | 0) {
    i8 = 0;
    i9 = i6;
    break;
   }
   i5 = HEAP32[i4 >> 2] | 0;
   i8 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 108 >> 2] & 63](i5) | 0;
   i9 = i6;
  } else {
   i8 = 0;
   i9 = 0;
  }
 } while (0);
 i6 = (HEAP32[i2 + 104 >> 2] | 0) - i9 | 0;
 i9 = (i6 | 0) > 0;
 i3 = (HEAP32[i2 + 108 >> 2] | 0) - i8 | 0;
 i8 = (i3 | 0) > 0;
 i5 = i1;
 i4 = (HEAP32[i2 + 16 >> 2] | 0) + (HEAP32[i2 + 116 >> 2] | 0) | 0;
 HEAP32[i5 >> 2] = (HEAP32[i2 + 12 >> 2] | 0) + (HEAP32[i2 + 112 >> 2] | 0);
 HEAP32[i5 + 4 >> 2] = i4;
 i4 = i1 + 8 | 0;
 HEAP32[i4 >> 2] = (i8 ? 0 : 0) | (i9 ? i6 : 0);
 HEAP32[i4 + 4 >> 2] = (i8 ? i3 : 0) | (i9 ? 0 : 0);
 return;
}
function __ZNK7WebCore11RenderLayer21computeOffsetFromRootERb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 HEAP8[i3] = 1;
 i7 = i2 + 36 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  STACKTOP = i4;
  return;
 } else {
  i8 = i2;
 }
 while (1) {
  i2 = HEAP32[i8 + 32 >> 2] | 0;
  if ((HEAP32[i2 + 20 >> 2] & 4325376 | 0) != 0) {
   i9 = 4;
   break;
  }
  i10 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 324 >> 2] & 63](i2 | 0) | 0;
  HEAP8[i3] = i10 & 1 ^ 1;
  if (i10) {
   break;
  }
  i10 = HEAP32[i8 + 36 >> 2] | 0;
  if ((i10 | 0) == 0) {
   i9 = 8;
   break;
  } else {
   i8 = i10;
  }
 }
 if ((i9 | 0) == 4) {
  HEAP8[i3] = 0;
 } else if ((i9 | 0) == 8) {
  i9 = HEAP32[i7 >> 2] | 0;
  HEAP32[i5 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  if (!((i8 | 0) == (i9 | 0) | (i9 | 0) == 0)) {
   i7 = i9;
   while (1) {
    i7 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i7, i8, i6, 0) | 0;
    if ((i7 | 0) == 0 | (i7 | 0) == (i8 | 0)) {
     break;
    }
   }
  }
  i8 = i1;
  i7 = HEAP32[i5 + 4 >> 2] | 0;
  HEAP32[i8 >> 2] = HEAP32[i5 >> 2];
  HEAP32[i8 + 4 >> 2] = i7;
  STACKTOP = i4;
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer17updateZOrderListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 20 | 0;
 if ((HEAP8[i2] & 4) == 0) {
  return;
 }
 do {
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) != 0) {
   if ((HEAP8[i1 + 21 | 0] & 20) != 0) {
    break;
   }
   i3 = i1 + 136 | 0;
   i4 = HEAP32[i3 >> 2] | 0;
   HEAP32[i3 >> 2] = 0;
   if ((i4 | 0) != 0) {
    i3 = i4 + 8 | 0;
    if ((HEAP32[i3 >> 2] | 0) != 0) {
     HEAP32[i3 >> 2] = 0;
    }
    i3 = i4 | 0;
    i5 = HEAP32[i3 >> 2] | 0;
    if ((i5 | 0) != 0) {
     HEAP32[i3 >> 2] = 0;
     HEAP32[i4 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i5);
    }
    __ZN3WTF8fastFreeEPv(i4);
   }
   i4 = i1 + 140 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   HEAP32[i4 >> 2] = 0;
   if ((i5 | 0) != 0) {
    i4 = i5 + 8 | 0;
    if ((HEAP32[i4 >> 2] | 0) != 0) {
     HEAP32[i4 >> 2] = 0;
    }
    i4 = i5 | 0;
    i3 = HEAP32[i4 >> 2] | 0;
    if ((i3 | 0) != 0) {
     HEAP32[i4 >> 2] = 0;
     HEAP32[i5 + 4 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i3);
    }
    __ZN3WTF8fastFreeEPv(i5);
   }
   HEAP8[i2] = HEAP8[i2] & -5;
   return;
  }
 } while (0);
 __ZN7WebCore11RenderLayer18rebuildZOrderListsENS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, 1, i1 + 136 | 0, i1 + 140 | 0);
 HEAP8[i2] = HEAP8[i2] & -5;
 return;
}
function __ZN7WebCore11RenderLayer26invalidateScrollCornerRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i8 = HEAP32[i7 + 44 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[(HEAP32[i8 >> 2] | 0) + 128 >> 2] | 0;
   __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i4, i2);
   FUNCTION_TABLE_viii[i9 & 15](i8, i4, 1);
   STACKTOP = i3;
   return;
  }
 } while (0);
 i4 = HEAP32[i1 + 180 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i7 = i2;
  i8 = HEAP32[i7 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
  HEAP32[i5 + 4 >> 2] = i8;
  i8 = i2 + 8 | 0;
  i7 = HEAP32[i8 + 4 >> 2] | 0;
  HEAP32[i5 + 8 >> 2] = HEAP32[i8 >> 2];
  HEAP32[i5 + 12 >> 2] = i7;
  __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i4 | 0, i5, 0);
 }
 i5 = HEAP32[i1 + 184 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i1 = i2;
 i4 = HEAP32[i1 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i6 + 4 >> 2] = i4;
 i4 = i2 + 8 | 0;
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i6 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 12 >> 2] = i2;
 __ZNK7WebCore12RenderObject16repaintRectangleERKNS_10LayoutRectEb(i5 | 0, i6, 0);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer27enclosingFilterRepaintLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 L3 : while (1) {
  do {
   if ((i3 | 0) != (i1 | 0)) {
    if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
     break;
    }
    i4 = HEAP32[i3 + 208 >> 2] | 0;
    if ((i4 | 0) != 0) {
     if ((HEAP8[i4 + 92 | 0] & 1) != 0) {
      break;
     }
    }
    i4 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i3) | 0;
    if ((i4 | 0) == 0) {
     break;
    }
    i5 = HEAP32[i4 + 12 >> 2] | 0;
    if ((i5 | 0) == 0) {
     break;
    }
    if ((HEAP8[i5 + 89 | 0] & 1) != 0) {
     i2 = i3;
     i6 = 18;
     break L3;
    }
   }
  } while (0);
  i5 = HEAP32[i3 + 208 >> 2] | 0;
  if ((i5 | 0) != 0) {
   if ((HEAP8[i5 + 91 | 0] & 1) != 0) {
    i2 = i3;
    i6 = 14;
    break;
   }
  }
  if ((HEAP8[i3 + 21 | 0] & 16) != 0) {
   i2 = i3;
   i6 = 16;
   break;
  }
  i5 = HEAP32[i3 + 36 >> 2] | 0;
  if ((i5 | 0) == 0) {
   i2 = 0;
   i6 = 17;
   break;
  } else {
   i3 = i5;
  }
 }
 if ((i6 | 0) == 14) {
  return i2 | 0;
 } else if ((i6 | 0) == 16) {
  return i2 | 0;
 } else if ((i6 | 0) == 17) {
  return i2 | 0;
 } else if ((i6 | 0) == 18) {
  return i2 | 0;
 }
 return 0;
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
function __ZNK7WebCore11RenderLayer18cannotBlitToWindowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1;
 L1 : while (1) {
  i1 = HEAP32[i2 + 32 >> 2] | 0;
  i3 = HEAP32[i1 + 20 >> 2] | 0;
  do {
   if ((i3 & 128 | 0) == 0) {
    i4 = HEAP32[i1 + 4 >> 2] | 0;
    if ((i4 | 0) == 0) {
     i5 = 5;
     break;
    }
    if ((HEAP32[i4 + 12 >> 2] & 32 | 0) == 0) {
     i5 = 5;
    }
   } else {
    i5 = 5;
   }
  } while (0);
  if ((i5 | 0) == 5) {
   i5 = 0;
   i4 = HEAP32[(HEAP32[i1 + 36 >> 2] | 0) + 20 >> 2] | 0;
   if (+HEAPF32[i4 + 4 >> 2] < +1) {
    i6 = 1;
    i5 = 13;
    break;
   }
   i7 = i4 + 116 | 0;
   while (1) {
    if ((HEAP32[i7 + 4 >> 2] | 0) != 0) {
     i6 = 1;
     i5 = 15;
     break L1;
    }
    i7 = HEAP32[i7 >> 2] | 0;
    if ((i7 | 0) == 0) {
     break;
    }
   }
   if ((HEAP32[(HEAP32[i4 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0) {
    i6 = 1;
    i5 = 17;
    break;
   }
  }
  if ((i3 & 393216 | 0) != 0) {
   i6 = 1;
   i5 = 16;
   break;
  }
  i7 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i6 = 0;
   i5 = 14;
   break;
  } else {
   i2 = i7;
  }
 }
 if ((i5 | 0) == 13) {
  return i6 | 0;
 } else if ((i5 | 0) == 16) {
  return i6 | 0;
 } else if ((i5 | 0) == 17) {
  return i6 | 0;
 } else if ((i5 | 0) == 14) {
  return i6 | 0;
 } else if ((i5 | 0) == 15) {
  return i6 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer19insertOnlyThisLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = i1 + 36 | 0;
 i3 = i1 + 32 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i4 = HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i5 = __ZNK7WebCore12RenderObject14enclosingLayerEv(i4 | 0) | 0;
   i4 = HEAP32[i5 + 176 >> 2] | 0;
   if ((i4 | 0) == 0) {
    i6 = 0;
   } else {
    i6 = HEAP32[i4 + 40 >> 2] | 0;
   }
   if ((i6 | 0) == (i1 | 0)) {
    i7 = 0;
   } else {
    i4 = HEAP32[i3 >> 2] | 0;
    i7 = __ZN7WebCore13RenderElement13findNextLayerEPNS_11RenderLayerEPNS_12RenderObjectEb(HEAP32[i4 + 8 >> 2] | 0, i5, i4 | 0, 1) | 0;
   }
   __ZN7WebCore11RenderLayer8addChildEPS0_S1_(i5, i1, i7);
  }
 } while (0);
 i7 = HEAP32[(HEAP32[i3 >> 2] | 0) + 28 >> 2] | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i1, 4);
  return;
 } else {
  i8 = i7;
 }
 while (1) {
  if ((HEAP32[i8 + 20 >> 2] & 768 | 0) != 256) {
   __ZN7WebCore13RenderElement10moveLayersEPNS_11RenderLayerES2_(i8, HEAP32[i2 >> 2] | 0, i1);
  }
  i8 = HEAP32[i8 + 16 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i1, 4);
 return;
}
function __ZNK7WebCore11RenderLayer23clippingRootForPaintingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 208 >> 2] | 0) == 0) {
  i2 = i1;
 } else {
  i3 = i1;
  return i3 | 0;
 }
 while (1) {
  if ((HEAP8[i2 + 21 | 0] & 16) != 0) {
   i3 = i2;
   i4 = 15;
   break;
  }
  L6 : do {
   if ((HEAP8[i2 + 20 | 0] & 16) == 0) {
    i1 = i2;
    while (1) {
     i5 = HEAP32[i1 + 36 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i6 = 0;
      break L6;
     }
     if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
      i6 = i5;
      break L6;
     }
     if ((HEAP8[i5 + 21 | 0] & 20) == 0) {
      i1 = i5;
     } else {
      i6 = i5;
      break;
     }
    }
   } else {
    i6 = HEAP32[i2 + 36 >> 2] | 0;
   }
  } while (0);
  if ((HEAP32[i6 + 172 >> 2] | 0) != 0) {
   i3 = i6;
   i4 = 17;
   break;
  }
  i1 = HEAP32[i6 + 208 >> 2] | 0;
  if ((i1 | 0) != 0) {
   if ((HEAP8[i1 + 91 | 0] & 1) != 0) {
    i3 = i6;
    i4 = 13;
    break;
   }
  }
  if ((i6 | 0) == 0) {
   i3 = 0;
   i4 = 16;
   break;
  } else {
   i2 = i6;
  }
 }
 if ((i4 | 0) == 13) {
  return i3 | 0;
 } else if ((i4 | 0) == 16) {
  return i3 | 0;
 } else if ((i4 | 0) == 17) {
  return i3 | 0;
 } else if ((i4 | 0) == 15) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer9paintListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 20 | 0] & 64) == 0) {
  return;
 }
 i6 = i2 + 8 | 0;
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  return;
 }
 i7 = i2 | 0;
 i2 = 0;
 while (1) {
  i8 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i2 << 2) >> 2] | 0;
  i9 = i8 + 32 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 248 >> 2] & 63](i10 | 0) | 0) {
   i10 = HEAP32[i9 >> 2] | 0;
   if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 1188 >> 2] & 63](i10) | 0)) {
    i11 = 7;
   }
  } else {
   i11 = 7;
  }
  do {
   if ((i11 | 0) == 7) {
    i11 = 0;
    if ((HEAP8[i8 + 22 | 0] & 64) == 0) {
     __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i8, i3, i4, i5);
     break;
    } else {
     __ZN7WebCore11RenderLayer24paintPaginatedChildLayerEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i8, i3, i4, i5);
     break;
    }
   }
  } while (0);
  i2 = i2 + 1 | 0;
  if (i2 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderLayer22setBackingNeedsRepaintENS_13GraphicsLayer17ShouldClipToLayerE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = i3 + 32 | 0;
 i7 = i6 | 0;
 i8 = i6;
 i9 = i1 + 208 | 0;
 if (!(__ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(HEAP32[i9 >> 2] | 0) | 0)) {
  __ZN7WebCore18RenderLayerBacking22setContentsNeedDisplayENS_13GraphicsLayer17ShouldClipToLayerE(HEAP32[i9 >> 2] | 0, i2);
  STACKTOP = i3;
  return;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0;
 i9 = i1;
 while (1) {
  i10 = HEAP32[i9 + 36 >> 2] | 0;
  if ((i10 | 0) == 0) {
   break;
  } else {
   i9 = i10;
  }
 }
 __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i4, i1, i9, 0, 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i8, i4);
 i4 = HEAP32[i7 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i5 + 4 >> 2] = i4;
 i4 = i6 + 8 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 + 8 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 12 >> 2] = i6;
 __ZNK7WebCore10RenderView20repaintViewRectangleERKNS_10LayoutRectEb(i2, i5, 0);
 STACKTOP = i3;
 return;
}
function __ZN3WTF13StringBuilder6appendERKNS_6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i2 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i5 = i1 | 0;
 do {
  if ((HEAP32[i5 >> 2] | 0) == 0) {
   if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
    break;
   }
   i6 = i2 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 2;
   i6 = i1 + 4 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = i2;
   do {
    if ((i7 | 0) != 0) {
     i8 = i7 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i7);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i3 >> 2] | 0;
   if ((i7 | 0) == 0) {
    i10 = 0;
   } else {
    i10 = HEAP32[i7 + 4 >> 2] | 0;
   }
   HEAP32[i5 >> 2] = i10;
   HEAP8[i1 + 12 | 0] = (HEAP32[(HEAP32[i6 >> 2] | 0) + 16 >> 2] | 0) >>> 5 & 1;
   return;
  }
 } while (0);
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  __ZN3WTF13StringBuilder6appendEPKtj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 } else {
  __ZN3WTF13StringBuilder6appendEPKhj(i1, HEAP32[i2 + 8 >> 2] | 0, i4);
  return;
 }
}
function __ZN7WebCore11RenderLayer43checkIfDescendantClippingContextNeedsUpdateEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 48 | 0;
 if (i2) {
  i2 = i3;
  while (1) {
   i1 = HEAP32[i2 >> 2] | 0;
   if ((i1 | 0) == 0) {
    i4 = 0;
    i5 = 12;
    break;
   }
   if ((HEAP32[i1 + 208 >> 2] | 0) != 0) {
    i4 = 1;
    i5 = 14;
    break;
   }
   if (__ZN7WebCore11RenderLayer43checkIfDescendantClippingContextNeedsUpdateEb(i1, 1) | 0) {
    i4 = 1;
    i5 = 10;
    break;
   } else {
    i2 = i1 + 44 | 0;
   }
  }
  if ((i5 | 0) == 10) {
   return i4 | 0;
  } else if ((i5 | 0) == 14) {
   return i4 | 0;
  } else if ((i5 | 0) == 12) {
   return i4 | 0;
  }
 } else {
  i6 = i3;
 }
 while (1) {
  i3 = HEAP32[i6 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i5 = 13;
   break;
  }
  i2 = HEAP32[i3 + 208 >> 2] | 0;
  if ((i2 | 0) != 0) {
   if ((HEAP32[i2 + 8 >> 2] | 0) != 0) {
    i4 = 1;
    i5 = 15;
    break;
   }
  }
  if (__ZN7WebCore11RenderLayer43checkIfDescendantClippingContextNeedsUpdateEb(i3, 0) | 0) {
   i4 = 1;
   i5 = 11;
   break;
  } else {
   i6 = i3 + 44 | 0;
  }
 }
 if ((i5 | 0) == 13) {
  return i4 | 0;
 } else if ((i5 | 0) == 15) {
  return i4 | 0;
 } else if ((i5 | 0) == 11) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i1 + 32 | 0;
 i6 = __ZNK7WebCore12RenderObject19containerForRepaintEv(HEAP32[i5 >> 2] | 0) | 0;
 i7 = i3;
 i8 = i4;
 i9 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 500 >> 2] & 15](i3, i9 | 0, i6);
 i9 = i1 + 56 | 0;
 HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
 HEAP32[i9 + 4 >> 2] = HEAP32[i7 + 4 >> 2];
 HEAP32[i9 + 8 >> 2] = HEAP32[i7 + 8 >> 2];
 HEAP32[i9 + 12 >> 2] = HEAP32[i7 + 12 >> 2];
 i7 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i7 >> 2] | 0) + 508 >> 2] & 15](i4, i7 | 0, i6, 0);
 i6 = i1 + 72 | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i6 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i6 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i8 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i10 = i8;
 }
 while (1) {
  __ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv(i10);
  i10 = HEAP32[i10 + 44 >> 2] | 0;
  if ((i10 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i3 | 0) == 1) {
  __ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE(i6, i1, i2);
  i3 = i5;
  i9 = HEAP32[i3 >> 2] | 0;
  i10 = i3;
 } else {
  i3 = i2;
  i2 = HEAP32[i3 >> 2] | 0;
  i11 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i5 >> 2] = i2;
  HEAP32[i5 + 4 >> 2] = i11;
  i9 = i2;
  i10 = i5;
 }
 do {
  if ((i9 | 0) == ((HEAP32[i1 + 12 >> 2] | 0) + (HEAP32[i1 + 112 >> 2] | 0) | 0)) {
   i5 = HEAP32[i6 + 4 >> 2] | 0;
   if ((i5 | 0) != ((HEAP32[i1 + 116 >> 2] | 0) + (HEAP32[i1 + 16 >> 2] | 0) | 0)) {
    i12 = i5;
    break;
   }
   STACKTOP = i4;
   return;
  } else {
   i12 = HEAP32[i6 + 4 >> 2] | 0;
  }
 } while (0);
 HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i8 + 4 >> 2] = i12;
 __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i7, i8);
 __ZN7WebCore14ScrollableArea30scrollToOffsetWithoutAnimationERKNS_10FloatPointE(i1 | 0, i7);
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderLayer15scrollbarOffsetEPKNS_9ScrollbarE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i4;
 }
 i6 = i2 + 132 | 0;
 if ((HEAP32[i6 >> 2] | 0) == (i3 | 0)) {
  i7 = HEAP32[i5 + 52 >> 2] | 0;
  i8 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 748 >> 2] & 63](i4) | 0) | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  i6 = i8 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i7 >> 2] | 0) + 104 >> 2] & 63](i7) | 0) | 0;
  i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 736 >> 2] & 63](i5 | 0) | 0;
  HEAP32[i1 >> 2] = i6;
  HEAP32[i1 + 4 >> 2] = i7;
  return;
 }
 if ((HEAP32[i2 + 128 >> 2] | 0) == (i3 | 0)) {
  i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 63](i4) | 0;
  i4 = HEAP32[i5 + 56 >> 2] | 0;
  i7 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 740 >> 2] & 63](i5 | 0) | 0) | 0;
  i5 = i7 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 108 >> 2] & 63](i3) | 0) | 0;
  HEAP32[i1 >> 2] = i2;
  HEAP32[i1 + 4 >> 2] = i5;
  return;
 } else {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i1 + 4 >> 2] = 0;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore13LayerFragmentELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i7 = i5 + (i6 * 104 & -1) | 0;
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 41297762 >>> 0) {
    _WTFCrash();
   } else {
    i8 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 104 & -1) | 0;
    HEAP32[i3 >> 2] = (i8 >>> 0) / 104 & -1;
    i9 = __ZN3WTF10fastMallocEj(i8) | 0;
    HEAP32[i4 >> 2] = i9;
    i10 = i9;
    break;
   }
  } else {
   i9 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i9;
   HEAP32[i3 >> 2] = 1;
   i10 = i9;
  }
 } while (0);
 if ((i6 | 0) != 0) {
  i6 = i5;
  i2 = i10;
  while (1) {
   _memcpy(i2 | 0, i6 | 0, 104) | 0;
   i10 = i6 + 104 | 0;
   if ((i10 | 0) == (i7 | 0)) {
    break;
   } else {
    i6 = i10;
    i2 = i2 + 104 | 0;
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
 __ZN3WTF8fastFreeEPv(i5 | 0);
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
function __ZNK7WebCore11RenderLayer21maximumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = (HEAP32[i2 + 120 >> 2] | 0) - (HEAP32[i2 + 12 >> 2] | 0) | 0;
 i4 = (HEAP32[i2 + 124 >> 2] | 0) - (HEAP32[i2 + 16 >> 2] | 0) | 0;
 i5 = i2 + 132 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i7 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 220 >> 2] & 63](i6) | 0) {
    i7 = 0;
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i7 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 104 >> 2] & 63](i8) | 0;
  }
 } while (0);
 i5 = i2 + 128 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i9 = 0;
  } else {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 220 >> 2] & 63](i6) | 0) {
    i9 = 0;
    break;
   }
   i8 = HEAP32[i5 >> 2] | 0;
   i9 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 108 >> 2] & 63](i8) | 0;
  }
 } while (0);
 i5 = (HEAP32[i2 + 104 >> 2] | 0) - i7 | 0;
 i7 = (HEAP32[i2 + 108 >> 2] | 0) - i9 | 0;
 HEAP32[i1 >> 2] = i3 + ((i5 | 0) > 0 ? -i5 | 0 : 0);
 HEAP32[i1 + 4 >> 2] = i4 + ((i7 | 0) > 0 ? -i7 | 0 : 0);
 return;
}
function __ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i4 = i2 + 32 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i5 + 20 >> 2] & 512 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i5;
 }
 i7 = i2 + 20 | 0;
 if ((HEAP8[i7] & 2) == 0) {
  i8 = i5;
 } else {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i2);
  i8 = HEAP32[i4 >> 2] | 0;
 }
 i5 = HEAP32[i2 + 120 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i8 >> 2] | 0) + 744 >> 2] & 63](i8) | 0;
 i8 = i5 - (__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i6) | 0) | 0;
 if ((HEAP8[i7] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i2);
 }
 i7 = HEAP32[i2 + 124 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
 i2 = i7 - (__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i6) | 0) | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 i7 = (i8 | 0) < (i6 | 0) ? i8 : i6;
 i6 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = (i2 | 0) < (i6 | 0) ? i2 : i6;
 HEAP32[i1 >> 2] = (i7 | 0) < 0 ? 0 : i7;
 HEAP32[i1 + 4 >> 2] = (i3 | 0) < 0 ? 0 : i3;
 return;
}
function __ZN7WebCore11RenderLayer38updateCompositingAndLayerListsIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 32 | 0;
 if ((HEAP8[(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 88 | 0] & 1) == 0) {
  __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i1);
  return;
 }
 i3 = HEAP8[i1 + 20 | 0] | 0;
 do {
  if ((i3 & 4) == 0) {
   i4 = 5;
  } else {
   i5 = HEAP32[i2 >> 2] | 0;
   if ((HEAP32[(HEAP32[(HEAP32[i5 + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
    i6 = i5;
    break;
   }
   if ((HEAP8[i1 + 21 | 0] & 20) == 0) {
    i4 = 5;
   } else {
    i6 = i5;
   }
  }
 } while (0);
 do {
  if ((i4 | 0) == 5) {
   if ((i3 & 8) == 0) {
    return;
   } else {
    i6 = HEAP32[i2 >> 2] | 0;
    break;
   }
  }
 } while (0);
 __ZN7WebCore21RenderLayerCompositor23updateCompositingLayersENS_21CompositingUpdateTypeEPNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[i6 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 2, i1);
 return;
}
function __ZN7WebCore11RenderLayer23updateSelfPaintingLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = __ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv(i1) | 0;
 i3 = i1 + 20 | 0;
 i4 = HEAP8[i3] | 0;
 if (((i4 & 255) >>> 5 & 1 | 0) == (i2 & 1 | 0)) {
  return;
 }
 HEAP8[i3] = i4 & -33 | (i2 & 1) << 5;
 i4 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if (i2) {
  i2 = i4;
  while (1) {
   i1 = i2 + 20 | 0;
   i3 = HEAP8[i1] | 0;
   if ((i3 & -64) << 24 >> 24 == 64) {
    i5 = 9;
    break;
   }
   HEAP8[i1] = i3 & 63 | 64;
   i3 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i5 = 13;
    break;
   } else {
    i2 = i3;
   }
  }
  if ((i5 | 0) == 9) {
   return;
  } else if ((i5 | 0) == 13) {
   return;
  }
 } else {
  i2 = i4;
  while (1) {
   i4 = i2 + 20 | 0;
   i3 = HEAP8[i4] | 0;
   HEAP8[i4] = i3 | -128;
   if ((i3 & 32) != 0) {
    i5 = 11;
    break;
   }
   i3 = HEAP32[i2 + 36 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i5 = 14;
    break;
   } else {
    i2 = i3;
   }
  }
  if ((i5 | 0) == 11) {
   return;
  } else if ((i5 | 0) == 14) {
   return;
  }
 }
}
function __ZNK7WebCore11RenderLayer20enclosingFilterLayerENS_16IncludeSelfOrNotE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
 } else {
  i3 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i3;
 }
 L6 : while (1) {
  do {
   if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) != 0) {
    i3 = HEAP32[i5 + 208 >> 2] | 0;
    if ((i3 | 0) != 0) {
     if ((HEAP8[i3 + 92 | 0] & 1) != 0) {
      break;
     }
    }
    i3 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i5) | 0;
    if ((i3 | 0) == 0) {
     break;
    }
    i1 = HEAP32[i3 + 12 >> 2] | 0;
    if ((i1 | 0) == 0) {
     break;
    }
    if ((HEAP8[i1 + 89 | 0] & 1) != 0) {
     i4 = i5;
     i6 = 14;
     break L6;
    }
   }
  } while (0);
  i1 = HEAP32[i5 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 0;
   i6 = 13;
   break;
  } else {
   i5 = i1;
  }
 }
 if ((i6 | 0) == 14) {
  return i4 | 0;
 } else if ((i6 | 0) == 13) {
  return i4 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer22offsetFromResizeCornerERKNS_8IntPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, i11 = 0, i12 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 + 104 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = HEAP32[i7 + 4 >> 2] | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 d10 = +(HEAP32[i3 + 4 >> 2] | 0);
 HEAPF32[i6 >> 2] = +(HEAP32[i3 >> 2] | 0);
 HEAPF32[i6 + 4 >> 2] = d10;
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i5, i7, i6, 2);
 d10 = +_round(+(+HEAPF32[i5 >> 2]));
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i11 = -2147483648;
    break;
   }
   i11 = ~~d10;
  } else {
   i11 = 2147483647;
  }
 } while (0);
 d10 = +_round(+(+HEAPF32[i5 + 4 >> 2]));
 do {
  if (d10 < +2147483647) {
   if (d10 <= +-2147483648) {
    i12 = -2147483648;
    break;
   }
   i12 = ~~d10;
  } else {
   i12 = 2147483647;
  }
 } while (0);
 HEAP32[i1 >> 2] = i11 - i8;
 HEAP32[i1 + 4 >> 2] = i12 - i9;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer25updateOutOfFlowPositionedEPKNS_11RenderStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 do {
  if ((i2 | 0) == 0) {
   i3 = 0;
  } else {
   i4 = (HEAP32[i2 + 48 >> 2] | 0) >>> 22 & 7;
   if ((i4 | 0) == 2) {
    i3 = 1;
    break;
   }
   i3 = (i4 | 0) == 6 | 0;
  }
 } while (0);
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = i1 + 32 | 0;
 if (((HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] & 25165824 | 0) == 16777216 | 0) == (i3 | 0)) {
  return;
 } else {
  i5 = i2;
 }
 while (1) {
  i2 = i5 + 21 | 0;
  HEAP8[i2] = HEAP8[i2] | 2;
  i5 = HEAP32[i5 + 36 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i5 + 2285 | 0] & 1) != 0) {
  return;
 }
 i4 = HEAP32[i5 + 1584 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i4 + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) == 0) {
  return;
 }
 HEAP8[(__ZN7WebCore10RenderView10compositorEv(i4) | 0) + 87 | 0] = 1;
 return;
}
function __ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i2 = 3;
 } else {
  if ((HEAP8[i1 + 21 | 0] & 16) == 0) {
   i3 = 0;
  } else {
   i2 = 3;
  }
 }
 do {
  if ((i2 | 0) == 3) {
   i4 = HEAP8[i1 + 20 | 0] | 0;
   if ((i4 & 4) != 0) {
    i3 = 1;
    break;
   }
   i3 = (i4 & 8) != 0;
  }
 } while (0);
 __ZN7WebCore11RenderLayer17updateZOrderListsEv(i1);
 __ZN7WebCore11RenderLayer20updateNormalFlowListEv(i1);
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i4 = HEAP32[i2 + 40 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore11RenderLayer17updateZOrderListsEv(i4);
   __ZN7WebCore11RenderLayer20updateNormalFlowListEv(i4);
  }
 } while (0);
 if (!i3) {
  return;
 }
 __ZN7WebCore11RenderLayer45updateDescendantsAreContiguousInStackingOrderEv(i1);
 __ZN7WebCore11RenderLayer17updateZOrderListsEv(i1);
 __ZN7WebCore11RenderLayer20updateNormalFlowListEv(i1);
 return;
}
function __ZN7WebCore11RenderLayer22paintOverlayScrollbarsEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i7 = i6 | 0;
 i8 = i6 + 48 | 0;
 i9 = i1 + 23 | 0;
 if ((HEAP8[i9] | 0) >= 0) {
  STACKTOP = i6;
  return;
 }
 i10 = i8 | 0;
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i8, i3);
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = HEAP32[i10 + 4 >> 2] | 0;
 i10 = i8 + 8 | 0;
 i8 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = i1;
 HEAP32[i7 + 4 >> 2] = i5;
 HEAP32[i7 + 8 >> 2] = i3;
 HEAP32[i7 + 12 >> 2] = i11;
 HEAP32[i7 + 16 >> 2] = i8;
 HEAP32[i7 + 20 >> 2] = i12;
 _memset(i7 + 24 | 0, 0, 16) | 0;
 HEAP32[i7 + 40 >> 2] = i4;
 HEAP8[i7 + 44 | 0] = 1;
 __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i7, 16);
 HEAP8[i9] = HEAP8[i9] & 127;
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore11RenderLayer25hasNonEmptyChildRenderersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 28 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = HEAP32[i4 + 20 >> 2] | 0;
  if ((i2 & 32768 | 0) == 0) {
   if ((i2 & 768 | 0) != 256) {
    if ((HEAP32[i4 + 24 >> 2] & 4 | 0) != 0) {
     i3 = 1;
     i5 = 10;
     break;
    }
   }
   if ((i2 & 512 | 0) == 0) {
    i3 = 1;
    i5 = 12;
    break;
   }
   if ((HEAP32[i4 + 52 >> 2] | 0) > 0) {
    i3 = 1;
    i5 = 13;
    break;
   }
   if ((HEAP32[i4 + 56 >> 2] | 0) > 0) {
    i3 = 1;
    i5 = 14;
    break;
   }
  }
  i2 = HEAP32[i4 + 16 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 15;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 12) {
  return i3 | 0;
 } else if ((i5 | 0) == 13) {
  return i3 | 0;
 } else if ((i5 | 0) == 14) {
  return i3 | 0;
 } else if ((i5 | 0) == 15) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 32 | 0;
  __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i1 >> 2] | 0, 0);
  i3 = HEAP32[i2 + 48 >> 2] | 0;
  if ((i3 | 0) != 0) {
   i4 = i3;
   while (1) {
    __ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv(i4);
    i4 = HEAP32[i4 + 44 >> 2] | 0;
    if ((i4 | 0) == 0) {
     break;
    }
   }
  }
  i4 = HEAP32[i1 >> 2] | 0;
  if ((HEAP32[i4 + 24 >> 2] & 32 | 0) == 0) {
   i5 = 10;
   break;
  }
  i3 = HEAP32[i4 + 100 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i5 = 13;
   break;
  }
  if ((HEAP32[i3 + 28 >> 2] | 0) == 0) {
   i5 = 11;
   break;
  }
  i4 = HEAP32[i3 + 28 >> 2] | 0;
  if ((HEAP8[i4 + 160 | 0] & 1) == 0) {
   i5 = 12;
   break;
  }
  i2 = HEAP32[(HEAP32[i4 + 116 >> 2] | 0) + 40 >> 2] | 0;
 }
 if ((i5 | 0) == 10) {
  return;
 } else if ((i5 | 0) == 11) {
  return;
 } else if ((i5 | 0) == 12) {
  return;
 } else if ((i5 | 0) == 13) {
  return;
 }
}
function __ZN7WebCore11RenderLayer9setParentEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 36 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 do {
  if ((i4 | 0) != 0) {
   i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i5 + 2285 | 0] & 1) != 0) {
    break;
   }
   i6 = __ZN7WebCore10RenderView10compositorEv(HEAP32[i5 + 1584 >> 2] | 0) | 0;
   __ZN7WebCore21RenderLayerCompositor18layerWillBeRemovedERNS_11RenderLayerES2_(i6, HEAP32[i3 >> 2] | 0, i1);
  }
 } while (0);
 HEAP32[i3 >> 2] = i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 if ((HEAP8[i2 + 2285 | 0] & 1) != 0) {
  return;
 }
 i4 = __ZN7WebCore10RenderView10compositorEv(HEAP32[i2 + 1584 >> 2] | 0) | 0;
 __ZN7WebCore21RenderLayerCompositor13layerWasAddedERNS_11RenderLayerES2_(i4, HEAP32[i3 >> 2] | 0, i1);
 return;
}
function __ZN7WebCore11RenderLayer14clearClipRectsENS_13ClipRectsTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 148 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 4) {
  HEAP32[i3 >> 2] = 0;
  if ((i1 | 0) == 0) {
   return;
  }
  __ZN7WebCore14ClipRectsCacheD2Ev(i1);
  __ZN3WTF8fastFreeEPv(i1);
  return;
 }
 i4 = i1 + (i2 + 3 << 2) | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i1 | 0) != 0) {
   i4 = i1 + 60 | 0;
   i5 = HEAP32[i4 >> 2] | 0;
   i6 = i5 + 2147483647 & 2147483647;
   HEAP32[i4 >> 2] = i6 | i5 & -2147483648;
   if ((i6 | 0) != 0) {
    break;
   }
   __ZN3WTF8fastFreeEPv(i1);
  }
 } while (0);
 i1 = (HEAP32[i3 >> 2] | 0) + (i2 << 2) | 0;
 i2 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 60 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 i6 = i3 + 2147483647 & 2147483647;
 HEAP32[i1 >> 2] = i6 | i3 & -2147483648;
 if ((i6 | 0) != 0) {
  return;
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZNK7WebCore11RenderLayer27enclosingFlowThreadAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 } else {
  i4 = i2;
 }
 while (1) {
  i2 = i4 + 32 | 0;
  i1 = HEAP32[i2 >> 2] | 0;
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 63](i1 | 0) | 0) {
   i3 = i4;
   i5 = 9;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i5 = 5;
  } else {
   if ((HEAP8[i4 + 21 | 0] & 20) != 0) {
    i5 = 5;
   }
  }
  if ((i5 | 0) == 5) {
   i5 = 0;
   if ((HEAP32[i4 + 208 >> 2] | 0) != 0) {
    i3 = 0;
    i5 = 11;
    break;
   }
  }
  i2 = HEAP32[i4 + 36 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 8;
   break;
  } else {
   i4 = i2;
  }
 }
 if ((i5 | 0) == 8) {
  return i3 | 0;
 } else if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer29hasScrollableVerticalOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 i3 = i1 + 32 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 63](i1) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i1;
 }
 if ((i2 | 0) <= (__ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i4;
 }
 if ((HEAP32[i6 + 20 >> 2] & 65536 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 48 >> 2] | 0;
 if ((i4 & 57344 | 0) == 16384) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = ((i4 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
 return i5 | 0;
}
function __ZNK7WebCore11RenderLayer31hasScrollableHorizontalOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 i3 = i1 + 32 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 63](i1) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i1;
 }
 if ((i2 | 0) <= (__ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i4) | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i6 = 0;
 } else {
  i6 = i4;
 }
 if ((HEAP32[i6 + 20 >> 2] & 65536 | 0) == 0) {
  i5 = 0;
  return i5 | 0;
 }
 i4 = HEAP32[(HEAP32[i6 + 36 >> 2] | 0) + 48 >> 2] | 0;
 if ((i4 & 7168 | 0) == 2048) {
  i5 = 1;
  return i5 | 0;
 }
 i5 = ((i4 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
 return i5 | 0;
}
function __ZNK7WebCore11RenderLayer18absoluteToContentsERKNS_11LayoutPointE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, d8 = +0, i9 = 0, i10 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 d8 = +(HEAP32[i3 + 4 >> 2] | 0);
 HEAPF32[i6 >> 2] = +(HEAP32[i3 >> 2] | 0);
 HEAPF32[i6 + 4 >> 2] = d8;
 __ZNK7WebCore12RenderObject15absoluteToLocalERKNS_10FloatPointEj(i5, i7, i6, 2);
 d8 = +_round(+(+HEAPF32[i5 >> 2]));
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
 d8 = +_round(+(+HEAPF32[i5 + 4 >> 2]));
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
 HEAP32[i1 >> 2] = i9;
 HEAP32[i1 + 4 >> 2] = i10;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer19computeRepaintRectsEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 16 | 0;
 i7 = i1 + 32 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 500 >> 2] & 15](i5, i8 | 0, i2);
 i8 = i1 + 56 | 0;
 i9 = i5;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 HEAP32[i8 + 8 >> 2] = HEAP32[i9 + 8 >> 2];
 HEAP32[i8 + 12 >> 2] = HEAP32[i9 + 12 >> 2];
 i9 = HEAP32[i7 >> 2] | 0;
 FUNCTION_TABLE_viiii[HEAP32[(HEAP32[i9 >> 2] | 0) + 508 >> 2] & 15](i6, i9 | 0, i2, i3);
 i3 = i1 + 72 | 0;
 i1 = i6;
 HEAP32[i3 >> 2] = HEAP32[i1 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i1 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i1 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i1 + 12 >> 2];
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11RenderLayer21isScrollCornerVisibleEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = (HEAP32[i1 + 128 >> 2] | 0) != 0;
 i6 = (HEAP32[i1 + 132 >> 2] | 0) != 0;
 i7 = HEAP32[i1 + 32 >> 2] | 0;
 if (!(i5 & i6 | (HEAP32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i5 | i6))) {
  _memset(i4 | 0, 0, 16) | 0;
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i6 = i3 | 0;
 i5 = HEAP32[i7 + 52 >> 2] | 0;
 i9 = HEAP32[i7 + 56 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 0;
 i6 = i3 + 8 | 0;
 HEAP32[i6 >> 2] = i5;
 HEAP32[i6 + 4 >> 2] = i9;
 __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i4, i1, i3);
 if ((HEAP32[i4 + 8 >> 2] | 0) < 1) {
  i8 = 0;
  STACKTOP = i2;
  return i8 | 0;
 }
 i8 = (HEAP32[i4 + 12 >> 2] | 0) > 0;
 STACKTOP = i2;
 return i8 | 0;
}
function __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 i6 = HEAP32[i1 + 32 >> 2] | 0;
 i7 = i6 | 0;
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 500 >> 2] & 15](i5, i7, i2);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i4, i5);
 __ZNK7WebCore12RenderObject21repaintUsingContainerEPKNS_22RenderLayerModelObjectERKNS_7IntRectEb(i7, i2, i4, 0);
 i4 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i8 = i4;
 }
 while (1) {
  if ((HEAP32[i8 + 208 >> 2] | 0) == 0) {
   __ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE(i8, i2);
  }
  i8 = HEAP32[i8 + 44 >> 2] | 0;
  if ((i8 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer17perspectiveOriginEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, d10 = +0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i6 + 20 >> 2] & 131072 | 0) == 0) {
  HEAPF32[i1 >> 2] = +0;
  HEAPF32[i1 + 4 >> 2] = +0;
  STACKTOP = i3;
  return;
 } else {
  i2 = i6 + 52 | 0;
  i7 = HEAP32[i2 + 4 >> 2] | 0;
  i8 = (HEAP32[i6 + 36 >> 2] | 0) + 20 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) + 20 | 0;
  HEAP32[i4 >> 2] = HEAP32[i2 >> 2];
  d9 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i6, i4, 0);
  i4 = (HEAP32[i8 >> 2] | 0) + 28 | 0;
  HEAP32[i5 >> 2] = i7;
  d10 = +__ZN7WebCore19floatValueForLengthERKNS_6LengthENS_10LayoutUnitEPNS_10RenderViewE(i4, i5, 0);
  HEAPF32[i1 >> 2] = d9;
  HEAPF32[i1 + 4 >> 2] = d10;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore11RenderLayer14contentChangedENS_17ContentChangeTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 do {
  if ((i2 | 0) == 6 | (i2 | 0) == 5 | (i2 | 0) == 3) {
   i3 = i1 + 32 | 0;
   if (!(__ZN7WebCore21RenderLayerCompositor27updateLayerCompositingStateERNS_11RenderLayerENS0_24CompositingChangeRepaintE(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, i1, 0) | 0)) {
    break;
   }
   __ZN7WebCore21RenderLayerCompositor31setCompositingLayersNeedRebuildEb(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0, 1);
  }
 } while (0);
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking14contentChangedENS_17ContentChangeTypeE(i3, i2);
 return;
}
function __ZN7WebCore11RenderLayer16createReflectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i1 + 32 | 0;
 i6 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
 __ZN7WebCore11RenderLayer21createReflectionStyleEv(i4, i1);
 i7 = __ZN3WTF10fastMallocEj(92) | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 __ZN7WebCore13RenderReplicaC1ERNS_8DocumentEN3WTF7PassRefINS_11RenderStyleEEE(i7, i6, i3);
 i3 = i1 + 176 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = i7;
 if ((i1 | 0) == 0) {
  i8 = i7;
 } else {
  __ZN7WebCore12RenderObject7destroyEv(i1 | 0);
  i8 = HEAP32[i3 >> 2] | 0;
 }
 __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i8 | 0, HEAP32[i5 >> 2] | 0);
 __ZN7WebCore13RenderElement15initializeStyleEv(HEAP32[i3 >> 2] | 0);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_8IntPointENS0_22ColumnOffsetAdjustmentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = HEAP32[i3 >> 2] | 0;
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = i7;
 i9 = HEAP32[i3 + 4 >> 2] | 0;
 i10 = i6 + 4 | 0;
 HEAP32[i10 >> 2] = i9;
 if ((i2 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  i11 = i7;
  i12 = i9;
 } else {
  i9 = i1;
  while (1) {
   i9 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i9, i2, i6, i4) | 0;
   if ((i9 | 0) == 0 | (i9 | 0) == (i2 | 0)) {
    break;
   }
  }
  i11 = HEAP32[i8 >> 2] | 0;
  i12 = HEAP32[i10 >> 2] | 0;
 }
 i10 = i3;
 HEAP32[i10 >> 2] = i11;
 HEAP32[i10 + 4 >> 2] = i12;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer16destroyScrollbarENS_20ScrollbarOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = ((i2 | 0) == 0 ? i1 + 128 | 0 : i1 + 132 | 0) | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 152 >> 2] & 63](i4) | 0)) {
  __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, HEAP32[i3 >> 2] | 0, i2);
 }
 __ZN7WebCore6Widget16removeFromParentEv(HEAP32[i3 >> 2] | 0);
 HEAP32[(HEAP32[i3 >> 2] | 0) + 40 >> 2] = 0;
 i2 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i2 + 4 | 0;
 i2 = i3 | 0;
 i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 if ((i1 | 0) != 0) {
  HEAP32[i2 >> 2] = i1;
  return;
 }
 i1 = i3 - 4 | 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZN7WebCore11RenderLayer12clearBackingEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i1 + 208 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) == 0) {
   HEAP32[i3 >> 2] = 0;
  } else {
   i5 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0;
   if ((HEAP8[i5 + 2285 | 0] & 1) == 0) {
    __ZN7WebCore21RenderLayerCompositor24layerBecameNonCompositedERKNS_11RenderLayerE(__ZN7WebCore10RenderView10compositorEv(HEAP32[i5 + 1584 >> 2] | 0) | 0, i1);
    i5 = HEAP32[i3 >> 2] | 0;
    HEAP32[i3 >> 2] = 0;
    if ((i5 | 0) == 0) {
     break;
    } else {
     i6 = i5;
    }
   } else {
    HEAP32[i3 >> 2] = 0;
    i6 = i4;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 if (i2) {
  return;
 }
 __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
 return;
}
function __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_10LayoutRectENS0_22ColumnOffsetAdjustmentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i6 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 if ((i2 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  i9 = 0;
  i10 = 0;
 } else {
  i11 = i1;
  while (1) {
   i11 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i11, i2, i6, i4) | 0;
   if ((i11 | 0) == 0 | (i11 | 0) == (i2 | 0)) {
    break;
   }
  }
  i9 = HEAP32[i7 >> 2] | 0;
  i10 = HEAP32[i8 >> 2] | 0;
 }
 i8 = i3 | 0;
 HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) - i9;
 i9 = i3 + 4 | 0;
 HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) - i10;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore11RenderLayer13ensureBackingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 208 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(96) | 0;
 __ZN7WebCore18RenderLayerBackingC1ERNS_11RenderLayerE(i3, i1);
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i5 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 15](i5);
 }
 i5 = (__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) + 80 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 __ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv(i1);
 __ZN7WebCore18RenderLayerBacking12setBlendModeENS_9BlendModeE(HEAP32[i2 >> 2] | 0, HEAP32[i1 + 28 >> 2] | 0);
 i4 = HEAP32[i2 >> 2] | 0;
 return i4 | 0;
}
function __ZNK7WebCore11RenderLayer19renderableTransformEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 128 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 + 172 >> 2] | 0;
 if ((i6 | 0) == 0) {
  HEAPF64[i1 >> 3] = +1;
  _memset(i1 + 8 | 0, 0, 32) | 0;
  HEAPF64[i1 + 40 >> 3] = +1;
  _memset(i1 + 48 | 0, 0, 32) | 0;
  HEAPF64[i1 + 80 >> 3] = +1;
  _memset(i1 + 88 | 0, 0, 32) | 0;
  HEAPF64[i1 + 120 >> 3] = +1;
  STACKTOP = i4;
  return;
 }
 if ((i3 & 4 | 0) == 0) {
  if ((i6 | 0) == (i1 | 0)) {
   STACKTOP = i4;
   return;
  }
  _memcpy(i1 | 0, i6 | 0, 128) | 0;
  STACKTOP = i4;
  return;
 } else {
  i3 = i5;
  if ((i5 | 0) != (i6 | 0)) {
   _memcpy(i3 | 0, i6 | 0, 128) | 0;
  }
  __ZN7WebCore20TransformationMatrix10makeAffineEv(i5);
  _memcpy(i1 | 0, i3 | 0, 128) | 0;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore11RenderLayer10autoscrollERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5 | 0;
 __ZNK7WebCore10ScrollView16windowToContentsERKNS_8IntPointE(i4, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0, i2);
 i2 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i6 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i6 + 4 >> 2] = i2;
 i2 = i5 + 8 | 0;
 HEAP32[i2 >> 2] = 1;
 HEAP32[i2 + 4 >> 2] = 1;
 __ZN7WebCore11RenderLayer19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_(i1, i5, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE);
 STACKTOP = i3;
 return;
}
function __ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore11RenderLayer45repaintRectIncludingNonCompositingDescendantsEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i1;
 i6 = i2 + 56 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 i6 = HEAP32[i2 + 48 >> 2] | 0;
 if ((i6 | 0) == 0) {
  STACKTOP = i3;
  return;
 } else {
  i7 = i6;
 }
 while (1) {
  if ((HEAP32[i7 + 208 >> 2] | 0) == 0) {
   __ZNK7WebCore11RenderLayer45repaintRectIncludingNonCompositingDescendantsEv(i4, i7);
   __ZN7WebCore10LayoutRect5uniteERKS0_(i1, i4);
  }
  i7 = HEAP32[i7 + 44 >> 2] | 0;
  if ((i7 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer16scrollCornerRectEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = (HEAP32[i2 + 128 >> 2] | 0) != 0;
 i6 = (HEAP32[i2 + 132 >> 2] | 0) != 0;
 i7 = HEAP32[i2 + 32 >> 2] | 0;
 if (i5 & i6 | (HEAP32[(HEAP32[(HEAP32[i7 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0 & (i5 | i6)) {
  i6 = i4 | 0;
  i5 = HEAP32[i7 + 52 >> 2] | 0;
  i8 = HEAP32[i7 + 56 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i6 + 4 >> 2] = 0;
  i6 = i4 + 8 | 0;
  HEAP32[i6 >> 2] = i5;
  HEAP32[i6 + 4 >> 2] = i8;
  __ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE(i1, i2, i4);
  STACKTOP = i3;
  return;
 } else {
  _memset(i1 | 0, 0, 16) | 0;
  STACKTOP = i3;
  return;
 }
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
function __ZNK7WebCore11RenderLayer13isTransparentEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 do {
  if ((HEAP32[i2 + 20 >> 2] & 128 | 0) == 0) {
   i1 = HEAP32[i2 + 4 >> 2] | 0;
   if ((i1 | 0) == 0) {
    break;
   }
   if ((HEAP32[i1 + 12 >> 2] & 32 | 0) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  }
 } while (0);
 i1 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 20 >> 2] | 0;
 if (+HEAPF32[i1 + 4 >> 2] < +1) {
  i3 = 1;
  return i3 | 0;
 }
 i2 = i1 + 116 | 0;
 while (1) {
  if ((HEAP32[i2 + 4 >> 2] | 0) != 0) {
   i3 = 1;
   i4 = 11;
   break;
  }
  i2 = HEAP32[i2 >> 2] | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 if ((i4 | 0) == 11) {
  return i3 | 0;
 }
 i3 = (HEAP32[(HEAP32[i1 + 164 >> 2] | 0) + 8 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer22canBeStackingContainerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP8[i1 + 21 | 0] | 0;
 if ((i3 & 16) == 0) {
  i4 = i1;
 } else {
  i2 = 1;
  return i2 | 0;
 }
 while (1) {
  i4 = HEAP32[i4 + 36 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i2 = 1;
   i5 = 9;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i4 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   break;
  }
  if ((HEAP8[i4 + 21 | 0] & 20) != 0) {
   break;
  }
 }
 if ((i5 | 0) == 9) {
  return i2 | 0;
 }
 i2 = (i3 & 8) != 0;
 return i2 | 0;
}
function __ZN7WebCore11RenderLayer48setAncestorChainHasOutOfFlowPositionedDescendantEPNS_11RenderBlockE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 i3 = i2 | 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 21 | 0;
  i4 = HEAP8[i1] | 0;
  if ((i4 & 3) == 1) {
   i5 = 7;
   break;
  }
  HEAP8[i1] = i4 & -4 | 1;
  __ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv(i2);
  if ((HEAP32[i2 + 32 >> 2] | 0) == (i3 | 0)) {
   i5 = 10;
   break;
  }
  i4 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i5 = 8;
   break;
  } else {
   i2 = i4;
  }
 }
 if ((i5 | 0) == 8) {
  return;
 } else if ((i5 | 0) == 7) {
  return;
 } else if ((i5 | 0) == 10) {
  return;
 }
}
function __ZN7WebCore11RenderLayer31paintLayerContentsAndReflectionEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i5 = i4 & -3;
 i4 = HEAP32[i1 + 176 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i6 = i1 + 21 | 0;
   i7 = HEAP8[i6] | 0;
   if ((i7 & 64) != 0) {
    break;
   }
   HEAP8[i6] = i7 | 64;
   __ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(HEAP32[i4 + 40 >> 2] | 0, i2, i3, i5 | 8);
   HEAP8[i6] = HEAP8[i6] & -65;
  }
 } while (0);
 __ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj(i1, i2, i3, i5 | 224);
 return;
}
function __ZNK7WebCore11RenderLayer32requiresFullLayerImageForFiltersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 92 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 0;
   }
   return i2 | 0;
  }
 } while (0);
 i3 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i1) | 0;
 if ((i3 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i1 = HEAP32[i3 + 12 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = (HEAP8[i1 + 89 | 0] & 1) != 0;
 return i2 | 0;
}
function __ZNK7WebCore11RenderLayer21hasHorizontalOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 i3 = i1 + 32 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 744 >> 2] & 63](i1) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
  i5 = __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i4) | 0;
  i6 = (i2 | 0) > (i5 | 0);
  return i6 | 0;
 }
 i4 = i1;
 i5 = __ZNK7WebCore9RenderBox23pixelSnappedClientWidthEv(i4) | 0;
 i6 = (i2 | 0) > (i5 | 0);
 return i6 | 0;
}
function __ZNK7WebCore11RenderLayer19hasVerticalOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 i3 = i1 + 32 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 736 >> 2] & 63](i1) | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
  i5 = __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i4) | 0;
  i6 = (i2 | 0) > (i5 | 0);
  return i6 | 0;
 }
 i4 = i1;
 i5 = __ZNK7WebCore9RenderBox24pixelSnappedClientHeightEv(i4) | 0;
 i6 = (i2 | 0) > (i5 | 0);
 return i6 | 0;
}
function __ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 128 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 63](i1) | 0) {
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if (__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(HEAP32[i3 >> 2] | 0) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 108 >> 2] & 63](i2) | 0;
 return i4 | 0;
}
function __ZNK7WebCore11RenderLayer22verticalScrollbarWidthENS_29OverlayScrollbarSizeRelevancyE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 132 | 0;
 i1 = HEAP32[i3 >> 2] | 0;
 if ((i1 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 do {
  if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 220 >> 2] & 63](i1) | 0) {
   if ((i2 | 0) == 0) {
    i4 = 0;
    return i4 | 0;
   }
   if (__ZN7WebCore9Scrollbar29shouldParticipateInHitTestingEv(HEAP32[i3 >> 2] | 0) | 0) {
    break;
   } else {
    i4 = 0;
   }
   return i4 | 0;
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 i4 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 104 >> 2] & 63](i2) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderLayer29clearBlockSelectionGapsBoundsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 _memset(i3 | 0, 0, 16) | 0;
 i4 = i1 + 192 | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i3 + 4 >> 2];
 HEAP32[i4 + 8 >> 2] = HEAP32[i3 + 8 >> 2];
 HEAP32[i4 + 12 >> 2] = HEAP32[i3 + 12 >> 2];
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  STACKTOP = i2;
  return;
 } else {
  i5 = i3;
 }
 while (1) {
  __ZN7WebCore11RenderLayer29clearBlockSelectionGapsBoundsEv(i5);
  i5 = HEAP32[i5 + 44 >> 2] | 0;
  if ((i5 | 0) == 0) {
   break;
  }
 }
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer28hasAncestorWithFilterOutsetsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 } else {
  i3 = i1;
 }
 while (1) {
  i1 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0;
  if ((HEAP32[i1 + 12 >> 2] | 0) != 0) {
   if (__ZNK7WebCore16FilterOperations10hasOutsetsEv(i1 + 4 | 0) | 0) {
    i2 = 1;
    i4 = 6;
    break;
   }
  }
  i1 = HEAP32[i3 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i2 = 0;
   i4 = 8;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i4 | 0) == 8) {
  return i2 | 0;
 } else if ((i4 | 0) == 6) {
  return i2 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer12contentsSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = i2 + 20 | 0;
 if ((HEAP8[i3] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i2);
 }
 i4 = HEAP32[i2 + 120 >> 2] | 0;
 i5 = i2 + 32 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i6 >> 2] | 0) + 744 >> 2] & 63](i6) | 0;
 if ((HEAP8[i3] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i2);
 }
 i3 = HEAP32[i2 + 124 >> 2] | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i2 >> 2] | 0) + 736 >> 2] & 63](i2) | 0;
 HEAP32[i1 >> 2] = i4;
 HEAP32[i1 + 4 >> 2] = i3;
 return;
}
function __ZN7WebCore11RenderLayer39updateLayerPositionsAfterOverflowScrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 680 | 0;
 i3 = i2 | 0;
 __ZN7WebCore17RenderGeometryMapC1Ej(i3, 2);
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 40 >> 2] | 0) != (i1 | 0)) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i3, HEAP32[i1 + 36 >> 2] | 0, 0);
 }
 __ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj(i1, i3, 1);
 __ZN7WebCore17RenderGeometryMapD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((i2 | 0) == 0) {
  i3 = i1;
 } else {
  i3 = HEAP32[i1 + 36 >> 2] | 0;
 }
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 } else {
  i5 = i3;
 }
 while (1) {
  if ((HEAP32[(HEAP32[i5 + 32 >> 2] | 0) + 20 >> 2] & 65536 | 0) != 0) {
   i4 = i5;
   i6 = 8;
   break;
  }
  i3 = HEAP32[i5 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 0;
   i6 = 7;
   break;
  } else {
   i5 = i3;
  }
 }
 if ((i6 | 0) == 8) {
  return i4 | 0;
 } else if ((i6 | 0) == 7) {
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer11restoreClipEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0;
 i1 = i4;
 i5 = i3;
 do {
  if ((HEAP32[i1 >> 2] | 0) == (HEAP32[i5 >> 2] | 0) & (HEAP32[i1 + 4 >> 2] | 0) == (HEAP32[i5 + 4 >> 2] | 0)) {
   i6 = i4 + 8 | 0;
   i7 = i3 + 8 | 0;
   if ((HEAP32[i6 >> 2] | 0) != (HEAP32[i7 >> 2] | 0)) {
    break;
   }
   if ((HEAP32[i6 + 4 >> 2] | 0) != (HEAP32[i7 + 4 >> 2] | 0)) {
    break;
   }
   return;
  }
 } while (0);
 __ZN7WebCore15GraphicsContext7restoreEv(i2);
 return;
}
function __ZN7WebCore11RenderLayer16removeReflectionEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 176 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 2285 | 0] & 1) == 0) {
  __ZN7WebCore13RenderElement12removeLayersEPNS_11RenderLayerE(i3 | 0, i1);
  i4 = HEAP32[i2 >> 2] | 0;
 } else {
  i4 = i3;
 }
 __ZN7WebCore12RenderObject9setParentEPNS_13RenderElementE(i4 | 0, 0);
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  HEAP32[i2 >> 2] = 0;
  return;
 }
 __ZN7WebCore12RenderObject7destroyEv(i4 | 0);
 HEAP32[i2 >> 2] = 0;
 return;
}
function __ZNK7WebCore11RenderLayer17stackingContainerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 8;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   i3 = i1;
   i4 = 7;
   break;
  }
  if ((HEAP8[i1 + 21 | 0] & 20) == 0) {
   i2 = i1;
  } else {
   i3 = i1;
   i4 = 6;
   break;
  }
 }
 if ((i4 | 0) == 7) {
  return i3 | 0;
 } else if ((i4 | 0) == 8) {
  return i3 | 0;
 } else if ((i4 | 0) == 6) {
  return i3 | 0;
 }
 return 0;
}
function __ZNK7WebCore11RenderLayer24hasVisibleBoxDecorationsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 22 | 0] & 8) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if (__ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv(i1) | 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 180 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0;
 return i2 | 0;
}
function __ZNK7WebCore11RenderLayer27enclosingPositionedAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   i4 = 8;
   break;
  }
  if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
   i3 = i1;
   i4 = 7;
   break;
  }
  if ((HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 20 >> 2] & 25296896 | 0) == 0) {
   i2 = i1;
  } else {
   i3 = i1;
   i4 = 6;
   break;
  }
 }
 if ((i4 | 0) == 6) {
  return i3 | 0;
 } else if ((i4 | 0) == 8) {
  return i3 | 0;
 } else if ((i4 | 0) == 7) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer31updateLayerPositionsAfterLayoutEPKS0_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 680 | 0;
 i5 = i4 | 0;
 __ZN7WebCore17RenderGeometryMapC1Ej(i5, 2);
 if ((i1 | 0) != (i2 | 0)) {
  __ZN7WebCore17RenderGeometryMap22pushMappingsToAncestorEPKNS_11RenderLayerES3_(i5, HEAP32[i1 + 36 >> 2] | 0, 0);
 }
 __ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj(i1, i5, i3);
 __ZN7WebCore17RenderGeometryMapD1Ev(i5);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore11RenderLayer25dirtyVisibleContentStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 22 | 0;
 HEAP8[i2] = HEAP8[i2] | 4;
 i2 = HEAP32[i1 + 36 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i3 = i2;
 }
 while (1) {
  i2 = i3 + 22 | 0;
  i1 = HEAP8[i2] | 0;
  if ((i1 & 16) != 0) {
   i4 = 5;
   break;
  }
  HEAP8[i2] = i1 | 16;
  i1 = HEAP32[i3 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i4 = 6;
   break;
  } else {
   i3 = i1;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 } else if ((i4 | 0) == 5) {
  return;
 }
}
function __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 148 >> 2] | 0) == 0) {
  return;
 }
 __ZN7WebCore11RenderLayer14clearClipRectsENS_13ClipRectsTypeE(i1, i2);
 i3 = HEAP32[i1 + 48 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 } else {
  i4 = i3;
 }
 while (1) {
  __ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE(i4, i2);
  i4 = HEAP32[i4 + 44 >> 2] | 0;
  if ((i4 | 0) == 0) {
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
function __ZNK7WebCore11RenderLayer15scrollsOverflowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[i2 + 20 >> 2] & 66048 | 0) != 66048) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[(HEAP32[i2 + 36 >> 2] | 0) + 48 >> 2] | 0;
 if ((i1 & 7168 | 0) == 2048) {
  i3 = 1;
  return i3 | 0;
 }
 if (((i1 >>> 10 & 7) - 3 | 0) >>> 0 < 2 >>> 0) {
  i3 = 1;
  return i3 | 0;
 }
 if ((i1 & 57344 | 0) == 16384) {
  i3 = 1;
  return i3 | 0;
 }
 i3 = ((i1 >>> 13 & 7) - 3 | 0) >>> 0 < 2 >>> 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer16enclosingElementEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = i2 | 0;
 while (1) {
  if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
   i4 = HEAP32[i1 + 4 >> 2] | 0;
   if ((i4 | 0) != 0) {
    break;
   }
  }
  i2 = HEAP32[i1 + 8 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 0;
   i5 = 10;
   break;
  } else {
   i1 = i2;
  }
 }
 if ((i5 | 0) == 10) {
  return i3 | 0;
 }
 i3 = i4;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer9canResizeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 do {
  if ((HEAP32[i1 + 20 >> 2] & 65536 | 0) == 0) {
   if (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 140 >> 2] & 63](i1 | 0) | 0) {
    i3 = HEAP32[i2 >> 2] | 0;
    break;
   } else {
    i4 = 0;
    return i4 | 0;
   }
  } else {
   i3 = i1;
  }
 } while (0);
 i4 = (HEAP32[(HEAP32[(HEAP32[i3 + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderLayer46setAncestorChainHasSelfPaintingLayerDescendantEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i2 = i1;
 }
 while (1) {
  i1 = i2 + 20 | 0;
  i3 = HEAP8[i1] | 0;
  if ((i3 & -64) << 24 >> 24 == 64) {
   i4 = 5;
   break;
  }
  HEAP8[i1] = i3 & 63 | 64;
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 6;
   break;
  } else {
   i2 = i3;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 } else if ((i4 | 0) == 5) {
  return;
 }
}
function __ZNK7WebCore11RenderLayer14scrollPositionEPNS_9ScrollbarE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i2;
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 156 >> 2] & 63](i2) | 0) == 0) {
  i4 = (HEAP32[i1 + 12 >> 2] | 0) + (HEAP32[i1 + 112 >> 2] | 0) | 0;
  return i4 | 0;
 }
 if ((FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 156 >> 2] & 63](i2) | 0) != 1) {
  i4 = 0;
  return i4 | 0;
 }
 i4 = (HEAP32[i1 + 16 >> 2] | 0) + (HEAP32[i1 + 116 >> 2] | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderLayer54dirtyAncestorChainHasSelfPaintingLayerDescendantStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i2 = i1;
 }
 while (1) {
  i1 = i2 + 20 | 0;
  i3 = HEAP8[i1] | 0;
  HEAP8[i1] = i3 | -128;
  if ((i3 & 32) != 0) {
   i4 = 6;
   break;
  }
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 7;
   break;
  } else {
   i2 = i3;
  }
 }
 if ((i4 | 0) == 7) {
  return;
 } else if ((i4 | 0) == 6) {
  return;
 }
}
function __ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 if ((i2 | 0) == (i1 | 0) | (i1 | 0) == 0) {
  return;
 } else {
  i5 = i1;
 }
 while (1) {
  i5 = __ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE(i5, i2, i3, i4) | 0;
  if ((i5 | 0) == 0 | (i5 | 0) == (i2 | 0)) {
   break;
  }
 }
 return;
}
function __ZN7WebCore11RenderLayer33dirtyStackingContainerZOrderListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1;
 while (1) {
  i2 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i2 | 0) == 0) {
   i3 = 7;
   break;
  }
  if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 64 >> 2] & 1 | 0) == 0) {
   break;
  }
  if ((HEAP8[i2 + 21 | 0] & 20) != 0) {
   break;
  }
 }
 if ((i3 | 0) == 7) {
  return;
 }
 __ZN7WebCore11RenderLayer16dirtyZOrderListsEv(i2);
 return;
}
function __ZNK7WebCore11RenderLayer22verticalScrollbarStartEii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0;
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 512 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i3;
 }
 i3 = i4 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 748 >> 2] & 63](i5 | 0) | 0) | 0;
 i5 = HEAP32[i2 + 132 >> 2] | 0;
 HEAP32[i1 >> 2] = i3 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 104 >> 2] & 63](i5) | 0);
 return;
}
function __ZN7WebCore11RenderLayer36setAncestorChainHasVisibleDescendantEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i2 = i1;
 }
 while (1) {
  i1 = i2 + 22 | 0;
  i3 = HEAP8[i1] | 0;
  if ((i3 & 48) == 32) {
   i4 = 6;
   break;
  }
  HEAP8[i1] = i3 & -49 | 32;
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 5;
   break;
  } else {
   i2 = i3;
  }
 }
 if ((i4 | 0) == 5) {
  return;
 } else if ((i4 | 0) == 6) {
  return;
 }
}
function __ZN7WebCore11RenderLayer41dirtyAncestorChainVisibleDescendantStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((i1 | 0) == 0) {
  return;
 } else {
  i2 = i1;
 }
 while (1) {
  i1 = i2 + 22 | 0;
  i3 = HEAP8[i1] | 0;
  if ((i3 & 16) != 0) {
   i4 = 7;
   break;
  }
  HEAP8[i1] = i3 | 16;
  i3 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i3 | 0) == 0) {
   i4 = 6;
   break;
  } else {
   i2 = i3;
  }
 }
 if ((i4 | 0) == 6) {
  return;
 } else if ((i4 | 0) == 7) {
  return;
 }
}
function __ZNK7WebCore11RenderLayer19absoluteBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i2;
 while (1) {
  i6 = HEAP32[i5 + 36 >> 2] | 0;
  if ((i6 | 0) == 0) {
   break;
  } else {
   i5 = i6;
  }
 }
 __ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE(i4, i2, i5, 0, 0);
 __ZN7WebCore7IntRectC1ERKNS_10LayoutRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11RenderLayer15updateBlendModeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 296 >> 2] | 0) >>> 17 & 31;
 i3 = i1 + 28 | 0;
 if ((i2 | 0) == (HEAP32[i3 >> 2] | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 __ZN7WebCore18RenderLayerBacking12setBlendModeENS_9BlendModeE(i3, i2);
 return;
}
function __ZNK7WebCore11RenderLayer10scrollSizeENS_20ScrollbarOrientationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[((i2 | 0) == 0 ? i1 + 128 | 0 : i1 + 132 | 0) >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 0;
  return i4 | 0;
 }
 i1 = i3;
 i2 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 172 >> 2] & 63](i3) | 0;
 i4 = i2 - (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 168 >> 2] & 63](i3) | 0) | 0;
 return i4 | 0;
}
function __ZN7WebCore11RenderLayer29setupFontSubpixelQuantizationEPNS_15GraphicsContextERb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if (__ZNK7WebCore15GraphicsContext16paintingDisabledEv(i2) | 0) {
  i4 = 0;
  return i4 | 0;
 }
 HEAP8[i3] = (__ZNK7WebCore15GraphicsContext27shouldSubpixelQuantizeFontsEv(i2) | 0) & 1;
 __ZN7WebCore15GraphicsContext30setShouldSubpixelQuantizeFontsEb(i2, 0);
 i4 = 1;
 return i4 | 0;
}
function __ZNK7WebCore11RenderLayer12scrollHeightEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 124 >> 2] | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i3;
 }
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 736 >> 2] & 63](i4 | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore11RenderLayer11scrollWidthEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP8[i1 + 20 | 0] & 2) != 0) {
  __ZN7WebCore11RenderLayer23computeScrollDimensionsEv(i1);
 }
 i2 = HEAP32[i1 + 120 >> 2] | 0;
 i3 = HEAP32[i1 + 32 >> 2] | 0;
 if ((HEAP32[i3 + 20 >> 2] & 512 | 0) == 0) {
  i4 = 0;
 } else {
  i4 = i3;
 }
 FUNCTION_TABLE_ii[HEAP32[(HEAP32[i4 >> 2] | 0) + 744 >> 2] & 63](i4 | 0) | 0;
 return i2 | 0;
}
function __ZNK7WebCore11RenderLayer19hasOverflowControlsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 132 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 180 >> 2] | 0) != 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 24 >> 2] | 0) + 88 >> 2] & 24576 | 0) != 0;
 return i2 | 0;
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
function __ZNK7WebCore11RenderLayer24isCSSCustomFilterEnabledEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0;
 if ((HEAP8[i2 + 195 | 0] & 32) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[i2 + 193 | 0] & 8) != 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer8isActiveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 32 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP8[(HEAP32[i2 + 32 >> 2] | 0) + 8 | 0] & 1) != 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if (!(FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 248 >> 2] & 63](i1 | 0) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i1 = HEAP32[i2 >> 2] | 0;
 i3 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 1188 >> 2] & 63](i1) | 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer17paintsWithFiltersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 20 >> 2] | 0) + 76 >> 2] | 0) + 12 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = 1;
  return i2 | 0;
 } else {
  return (HEAP8[i3 + 92 | 0] & 1) == 0 | 0;
 }
 return 0;
}
function __ZN7WebCore11RenderLayer18filterNeedsRepaintEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 32 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((HEAP32[i1 + 20 >> 2] & 128 | 0) == 0) {
  i3 = HEAP32[i1 + 4 >> 2] | 0;
 } else {
  i3 = 0;
 }
 __ZN7WebCore4Node19setNeedsStyleRecalcENS_15StyleChangeTypeE(i3 | 0, 49152);
 __ZNK7WebCore12RenderObject7repaintEb(HEAP32[i2 >> 2] | 0, 0);
 return;
}
function __ZN7WebCore11RenderLayer39updateLayerPositionsAfterDocumentScrollEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 680 | 0;
 i3 = i2 | 0;
 __ZN7WebCore17RenderGeometryMapC1Ej(i3, 2);
 __ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj(i1, i3, 0);
 __ZN7WebCore17RenderGeometryMapD1Ev(i3);
 STACKTOP = i2;
 return;
}
function __ZNK7WebCore11RenderLayer28enclosingTransformedAncestorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1;
 while (1) {
  i1 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i1 | 0) == 0) {
   i3 = 0;
   break;
  }
  if ((HEAP8[i1 + 21 | 0] & 16) != 0) {
   i3 = i1;
   break;
  }
  if ((HEAP32[i1 + 172 >> 2] | 0) == 0) {
   i2 = i1;
  } else {
   i3 = i1;
   break;
  }
 }
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer19paintsWithTransformEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = 1;
 } else {
  i4 = __ZNK7WebCore18RenderLayerBacking16paintsIntoWindowEv(i3) | 0;
 }
 if ((HEAP32[i1 + 172 >> 2] | 0) == 0) {
  return 0;
 } else {
  return i4 | (i2 & 4 | 0) != 0 | 0;
 }
 return 0;
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
function __ZN7WebCore11RenderLayer14paintingExtentEPKS0_RKNS_10LayoutRectEj(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj(i1, i2, i3, 0, 1, i5);
 __ZN7WebCore10LayoutRect9intersectERKS0_(i1, i4);
 return;
}
function __ZNK7WebCore11RenderLayer24horizontalScrollbarStartEi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 + 32 >> 2] | 0;
 if ((HEAP32[i4 + 20 >> 2] & 512 | 0) == 0) {
  i5 = 0;
 } else {
  i5 = i4;
 }
 HEAP32[i1 >> 2] = (FUNCTION_TABLE_ii[HEAP32[(HEAP32[i5 >> 2] | 0) + 744 >> 2] & 63](i5 | 0) | 0) + i3;
 return;
}
function __ZNK7WebCore11RenderLayer22lastKnownMousePositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12EventHandler22lastKnownMousePositionEv(i1, HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0);
 return;
}
function __ZNK7WebCore11RenderLayer46acceleratedCompositingForOverflowScrollEnabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 180 | 0] & 32) != 0 | 0;
}
function __ZN7WebCore11RenderLayer27addBlockSelectionGapsBoundsERKNS_10LayoutRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore16enclosingIntRectERKNS_10LayoutRectE(i4, i2);
 __ZN7WebCore7IntRect5uniteERKS0_(i1 + 192 | 0, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11RenderLayer21canRender3DTransformsEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore21RenderLayerCompositor21canRender3DTransformsEv(__ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0) | 0;
}
function __ZN7WebCore11RenderLayer18rebuildZOrderListsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore11RenderLayer18rebuildZOrderListsENS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_(i1, 1, i1 + 136 | 0, i1 + 140 | 0);
 i2 = i1 + 20 | 0;
 HEAP8[i2] = HEAP8[i2] & -5;
 return;
}
function __ZNK7WebCore11RenderLayer21useRegionBasedColumnsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 36 >> 2] | 0) + 189 | 0] & 2) != 0 | 0;
}
function __ZNK7WebCore11RenderLayer20isHandlingWheelEventEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) + 216 >> 2] | 0) + 472 >> 2] | 0) + 414 | 0] & 1) != 0 | 0;
}
function __ZN7WebCoreL13compareZIndexEPNS_11RenderLayerES1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return (HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 60 >> 2] | 0) < (HEAP32[(HEAP32[(HEAP32[(HEAP32[i2 + 32 >> 2] | 0) + 36 >> 2] | 0) + 4 >> 2] | 0) + 60 >> 2] | 0) | 0;
}
function __ZNK7WebCore11RenderLayer29shouldSuspendScrollAnimationsEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore9FrameView29shouldSuspendScrollAnimationsEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) + 116 >> 2] | 0) | 0;
}
function viii___ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderLayer56dirtyAncestorChainHasOutOfFlowPositionedDescendantStatusEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1;
 while (1) {
  i1 = i2 + 21 | 0;
  HEAP8[i1] = HEAP8[i1] | 2;
  i2 = HEAP32[i2 + 36 >> 2] | 0;
  if ((i2 | 0) == 0) {
   break;
  }
 }
 return;
}
function viii___ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE(i1, i2, i3 | 0, i3) | 0;
}
function __ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i1, i2, i3, d4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 d4 = +d4;
 return __ZN7WebCore14ScrollableArea6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf(i1 | 0, i2, i3, d4) | 0;
}
function __ZNK7WebCore11RenderLayer14filterRendererEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = __ZN7WebCore11RenderLayer10FilterInfo11getIfExistsERKS0_(i1) | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 12 >> 2] | 0;
 return i3 | 0;
}
function viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE(i1 | 0, i2 | 0);
}
function __ZNK7WebCore11RenderLayer23usesCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 48 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer10compositorEv(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10RenderView10compositorEv(HEAP32[(HEAP32[(HEAP32[(HEAP32[(HEAP32[i1 + 32 >> 2] | 0) + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 1584 >> 2] | 0) | 0;
}
function __ZNK7WebCore11RenderLayer27layerForHorizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 36 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer25layerForVerticalScrollbarEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer17hasCompositedMaskEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = (HEAP32[i2 + 32 >> 2] | 0) != 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer21minimumScrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = -(HEAP32[i2 + 16 >> 2] | 0) | 0;
 HEAP32[i1 >> 2] = -(HEAP32[i2 + 12 >> 2] | 0);
 HEAP32[i1 + 4 >> 2] = i3;
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
 FUNCTION_TABLE_viiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0);
}
function __ZNK7WebCore11RenderLayer20layerForScrollCornerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 44 >> 2] | 0;
 return i3 | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZNK7WebCore11RenderLayer17layerForScrollingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 208 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 52 >> 2] | 0;
 return i3 | 0;
}
function __ZNK7WebCore11RenderLayer15reflectionLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = HEAP32[i1 + 176 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 0;
  return i3 | 0;
 }
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 return i3 | 0;
}
function vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE(i1 | 0, i2 | 0);
}
function dynCall_viiiii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 FUNCTION_TABLE_viiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0);
}
function __ZN7WebCore11RenderLayer15setScrollOffsetERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11RenderLayer8scrollToEii(i1, HEAP32[i2 >> 2] | 0, HEAP32[i2 + 4 >> 2] | 0);
 return;
}
function __ZNK7WebCore11RenderLayer25scrollableAreaBoundingBoxEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore12RenderObject23absoluteBoundingBoxRectEb(i1, HEAP32[i2 + 32 >> 2] | 0, 1);
 return;
}
function __ZN7WebCore20makeMatrixRenderableERNS_20TransformationMatrixEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if (i2) {
  return;
 }
 __ZN7WebCore20TransformationMatrix10makeAffineEv(i1);
 return;
}
function __ZNK7WebCore8ClipRect10intersectsERKNS_15HitTestLocationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore15HitTestLocation10intersectsERKNS_10LayoutRectE(i2, i1 | 0) | 0;
}
function __ZNK7WebCore11RenderLayer14scrollPositionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = HEAP32[i2 + 112 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 116 >> 2];
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 15](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vi___ZN7WebCore14ScrollableArea19willStartLiveResizeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea19willStartLiveResizeEv(i1 | 0);
}
function __ZNK7WebCore11RenderLayer23enclosingScrollableAreaEv(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11RenderLayer24enclosingScrollableLayerEv(i1) | 0;
}
function vi___ZN7WebCore14ScrollableArea17willEndLiveResizeEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea17willEndLiveResizeEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 15](i2 | 0, i3 | 0, i4 | 0);
}
function __ZNK7WebCore11RenderLayer14overhangAmountEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 return;
}
function vi___ZN7WebCore14ScrollableArea15contentsResizedEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore14ScrollableArea15contentsResizedEv(i1 | 0);
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
 return FUNCTION_TABLE_iii[i1 & 15](i2 | 0, i3 | 0) | 0;
}
function b6(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 abort(6);
}
function __ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
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
function __ZNK7WebCore11RenderLayer24needsCompositedScrollingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 21 | 0] & 4) != 0 | 0;
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
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore11RenderLayer17clearRepaintRectsEv(i1) {
 i1 = i1 | 0;
 _memset(i1 + 56 | 0, 0, 32) | 0;
 return;
}
function __ZN7WebCore11RenderLayerD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11RenderLayerD2Ev(i1);
 __ZdlPv(i1);
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
function __ZNK7WebCore11RenderLayer19horizontalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 128 >> 2] | 0;
}
function __ZNK7WebCore11RenderLayer17verticalScrollbarEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 132 >> 2] | 0;
}
function __ZNK7WebCore11RenderLayer38updatesScrollLayerPositionOnMainThreadEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11RenderLayer13visibleHeightEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 108 >> 2] | 0;
}
function __ZNK7WebCore11RenderLayer12visibleWidthEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 104 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 63](i2 | 0) | 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea17scheduleAnimationEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12headerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore14ScrollableArea12footerHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore14ScrollableArea12tiledBackingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b2(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(2);
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
function b3(i1) {
 i1 = i1 | 0;
 abort(3);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
}
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,vi___ZN7WebCore14ScrollableArea19willStartLiveResizeEv__wrapper,b1,__ZN7WebCore11RenderLayerD0Ev,b1,vi___ZN7WebCore14ScrollableArea17willEndLiveResizeEv__wrapper,b1,__ZN7WebCore11RenderLayer18filterNeedsRepaintEv,b1,vi___ZN7WebCore14ScrollableArea15contentsResizedEv__wrapper,b1,__ZN7WebCore11RenderLayerD2Ev,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZNK7WebCore11RenderLayer14scrollPositionEv,b2,__ZN7WebCore11RenderLayerC2ERNS_22RenderLayerModelObjectE,b2,__ZNK7WebCore11RenderLayer21maximumScrollPositionEv,b2,vii___ZN7WebCore14ScrollableArea22invalidateScrollCornerERKNS_7IntRectE__wrapper,b2,__ZN7WebCore11RenderLayer15setScrollOffsetERKNS_8IntPointE,b2,__ZNK7WebCore11RenderLayer25scrollableAreaBoundingBoxEv,b2,__ZN7WebCore11RenderLayer26invalidateScrollCornerRectERKNS_7IntRectE,b2,__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE,b2,__ZNK7WebCore11RenderLayer12contentsSizeEv,b2,vii___ZN7WebCore14ScrollableArea24setScrollbarOverlayStyleENS_21ScrollbarOverlayStyleE__wrapper,b2,__ZNK7WebCore11RenderLayer14overhangAmountEv,b2,__ZNK7WebCore11RenderLayer22lastKnownMousePositionEv,b2,__ZNK7WebCore11RenderLayer21minimumScrollPositionEv,b2,__ZNK7WebCore11RenderLayer16scrollCornerRectEv
  ,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZNK7WebCore11RenderLayer21isScrollCornerVisibleEv,b3,__ZNK7WebCore11RenderLayer27layerForHorizontalScrollbarEv,b3,__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv,b3,__ZNK7WebCore11RenderLayer25layerForVerticalScrollbarEv,b3,__ZNK7WebCore11RenderLayer17layerForScrollingEv,b3,__ZNK7WebCore11RenderLayer13visibleHeightEv,b3,__ZNK7WebCore11RenderLayer8isActiveEv,b3,__ZNK7WebCore14ScrollableArea12headerHeightEv,b3,__ZNK7WebCore11RenderLayer20layerForScrollCornerEv,b3,__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv,b3,__ZNK7WebCore14ScrollableArea12footerHeightEv,b3,__ZNK7WebCore11RenderLayer12visibleWidthEv,b3,__ZNK7WebCore11RenderLayer23usesCompositedScrollingEv,b3,__ZNK7WebCore11RenderLayer29shouldSuspendScrollAnimationsEv
  ,b3,__ZNK7WebCore11RenderLayer20isHandlingWheelEventEv,b3,__ZNK7WebCore11RenderLayer17verticalScrollbarEv,b3,__ZNK7WebCore11RenderLayer19horizontalScrollbarEv,b3,__ZN7WebCore14ScrollableArea12tiledBackingEv,b3,__ZNK7WebCore11RenderLayer23enclosingScrollableAreaEv,b3,__ZN7WebCore14ScrollableArea17scheduleAnimationEv,b3,__ZNK7WebCore11RenderLayer38updatesScrollLayerPositionOnMainThreadEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,viii___ZN7WebCore14ScrollableArea15didAddScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper,b4,__ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib,b4,viii___ZN7WebCore14ScrollableArea19invalidateScrollbarEPNS_9ScrollbarERKNS_7IntRectE__wrapper,b4,__ZN7WebCore11RenderLayer23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE,b4,viii___ZN7WebCore14ScrollableArea19willRemoveScrollbarEPNS_9ScrollbarENS_20ScrollbarOrientationE__wrapper,b4,__ZNK7WebCore11RenderLayer18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE,b4,b4,b4];
  var FUNCTION_TABLE_v = [b5,b5];
  var FUNCTION_TABLE_viiiiii = [b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZNK7WebCore11RenderLayer10scrollSizeENS_20ScrollbarOrientationE,b7,__ZN7WebCoreL13compareZIndexEPNS_11RenderLayerES1_,b7,__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE,b7,__ZNK7WebCore11RenderLayer14scrollPositionEPNS_9ScrollbarE,b7,b7,b7,b7,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,__ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE,b8,__ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE,b8,__ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE,b8,__ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE,b8,b8,b8,b8,b8,b8,b8];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiii: dynCall_viiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiii": invoke_viiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_fabs": _fabs, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_sqrt": _sqrt, "_llvm_lifetime_start": _llvm_lifetime_start, "_free": _free, "_fflush": _fflush, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore9HTMLNames9iframeTagE": __ZN7WebCore9HTMLNames9iframeTagE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZTVN7WebCore27TranslateTransformOperationE": __ZTVN7WebCore27TranslateTransformOperationE, "__ZTVN7WebCore23ScaleTransformOperationE": __ZTVN7WebCore23ScaleTransformOperationE, "__ZN7WebCore9HTMLNames8frameTagE": __ZN7WebCore9HTMLNames8frameTagE, "__ZN7WebCore8SVGNames11clipPathTagE": __ZN7WebCore8SVGNames11clipPathTagE, "__ZSt7nothrow": __ZSt7nothrow, "__ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE": __ZN7WebCore15ScrollAlignment19alignToEdgeIfNeededE, "__ZN7WebCore24InspectorInstrumentation17s_frontendCounterE": __ZN7WebCore24InspectorInstrumentation17s_frontendCounterE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiii = Module["dynCall_viiiii"] = asm["dynCall_viiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZNK7WebCore11RenderLayer19paintsWithTransformEj","__ZN7WebCore11RenderLayer16dirtyZOrderListsEv","__ZNK7WebCore11RenderLayer15parentClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE","__ZN7WebCore11RenderLayer18panScrollFromPointERKNS_8IntPointE","__ZNK7WebCore11RenderLayer45repaintRectIncludingNonCompositingDescendantsEv","__ZN7WebCore11RenderLayer16updatePaginationEv","__ZN7WebCore27TranslateTransformOperation6createERKNS_6LengthES3_NS_18TransformOperation13OperationTypeE","__ZN7WebCore11RenderStyle15setMaskBoxImageERKNS_14NinePieceImageE","__ZN7WebCoreL10cornerRectEPKNS_11RenderLayerERKNS_7IntRectE","__ZN7WebCore11RenderLayer19computeRepaintRectsEPKNS_22RenderLayerModelObjectEPKNS_17RenderGeometryMapE","__ZNK7WebCore11RenderLayer20intersectsDamageRectERKNS_10LayoutRectES3_PKS0_PKNS_11LayoutPointEPNS_12RenderRegionE","__ZNK7WebCore11RenderLayer27enclosingFilterRepaintLayerEv","__ZN7WebCore11RenderLayer48setAncestorChainHasOutOfFlowPositionedDescendantEPNS_11RenderBlockE","__ZN7WebCore11RenderLayer23setHasVerticalScrollbarEb","__ZN7WebCore11RenderStyleD2Ev","__ZNK7WebCore11RenderLayer21isScrollCornerVisibleEv","__ZN7WebCore11RenderLayer30updateNeedsCompositedScrollingEv","__ZN7WebCore11RenderLayer15setScrollOffsetERKNS_8IntPointE","__ZNK7WebCore11RenderLayer24hasVisibleBoxDecorationsEv","__ZN7WebCore11RenderLayer34hitTestTransformedLayerInFragmentsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd","__ZN7WebCore11RenderLayer25dirtyVisibleContentStatusEv","__ZN7WebCore11RenderLayer27addBlockSelectionGapsBoundsERKNS_10LayoutRectE","__ZNK7WebCore11RenderLayer19absoluteBoundingBoxEv","__ZNK7WebCore11RenderLayer15hitTestContentsERKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationENS_13HitTestFilterE","__ZN7WebCore11RenderLayer26paintChildLayerIntoColumnsEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKN3WTF6VectorIS1_Lj0ENS7_15CrashOnOverflowEEEj","__ZN7WebCore11RenderLayer23paintFlowThreadIfRegionEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjNS_11LayoutPointENS_10LayoutRectEb","__ZN7WebCore11RenderLayer26hitTestPaginatedChildLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd","__ZN3WTF9HashTableIPN7WebCore24OverlapTestRequestClientENS_12KeyValuePairIS3_NS1_7IntRectEEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS3_EENS_7HashMapIS3_S5_SA_NS_10HashTraitsIS3_EENSC_IS5_EEE18KeyValuePairTraitsESD_E6rehashEiPS6_","__ZNK7WebCore11RenderLayer28enclosingTransformedAncestorEv","__ZN7WebCore11RenderLayer12setupFiltersEPNS_15GraphicsContextERNS0_17LayerPaintingInfoEjRKNS_11LayoutPointERNS_10LayoutRectERb","__ZN7WebCore11RenderLayer16collectFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPKS0_PNS_12RenderRegionERKNS_10LayoutRectENS_13ClipRectsTypeENS_29OverlayScrollbarSizeRelevancyENS_25ShouldRespectOverflowClipEPKNS_11LayoutPointEPSC_","__ZNK7WebCore11RenderLayer26scrollCornerAndResizerRectEv","__ZN7WebCore11RenderLayer24paintOutlineForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE","__ZN7WebCore11RenderLayer18paintLayerContentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZN7WebCore11RenderLayer34updateCompositingLayersAfterScrollEv","__ZNK7WebCore11RenderLayer18absoluteToContentsERKNS_11LayoutPointE","__ZN7WebCore11RenderLayer34paintTransformedLayerIntoFragmentsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZN7WebCoreL41expandClipRectForDescendantsAndReflectionERNS_10LayoutRectEPKNS_11RenderLayerES4_NS_27TransparencyClipBoxBehaviorEj","__ZN7WebCore11RenderLayer9setParentEPS0_","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZN3WTF6VectorIPN7WebCore11RenderLayerELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERNS_13HitTestResultE","__ZN7WebCore11RenderLayer12clearBackingEb","__ZNK7WebCore14ScrollableArea12footerHeightEv","__ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_8IntPointENS0_22ColumnOffsetAdjustmentE","__ZNK7WebCore11RenderLayer31hasScrollableHorizontalOverflowEv","__ZNK7WebCore11RenderLayer23usesCompositedScrollingEv","__ZNK7WebCore11RenderLayer37listBackgroundIsKnownToBeOpaqueInRectEPKN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEERKNS_10LayoutRectE","__ZN7WebCore11RenderLayer29setupFontSubpixelQuantizationEPNS_15GraphicsContextERb","__ZN7WebCore11RenderLayer8scrollToEii","__ZNK7WebCore11RenderLayer29hasBoxDecorationsOrBackgroundEv","__ZNK7WebCore9ClipRectseqERKS0_","__ZN7WebCore11RenderLayer23updateScrollableAreaSetEb","__ZNK7WebCore11RenderLayer29shouldSuspendScrollAnimationsEv","__ZNK7WebCore11RenderLayer15scrollbarOffsetEPKNS_9ScrollbarE","__ZN7WebCore11RenderLayer30hitTestFixedLayersInNamedFlowsEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSG_SF_b","__ZN7WebCore11RenderLayer18filterNeedsRepaintEv","__ZNK7WebCore14ScrollableArea12headerHeightEv","__ZN7WebCore11RenderLayer19removeOnlyThisLayerEv","__ZNK7WebCore11RenderLayer25createLocalTransformStateEPS0_S1_RKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateERKNS_11LayoutPointE","__ZN7WebCore11RenderLayer16destroyScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore11RenderLayer24enclosingScrollableLayerEv","__ZN7WebCore11RenderLayer17paintScrollCornerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE","__ZNK7WebCore11RenderLayer13localClipRectEv","__ZN7WebCore11RenderLayer27transparentPaintingAncestorEv","__ZNK7WebCore11RenderLayer24isCSSCustomFilterEnabledEv","__ZN7WebCore11RenderLayer34clearClipRectsIncludingDescendantsENS_13ClipRectsTypeE","__ZN7WebCore14ScrollableArea21scrollbarStyleChangedEib","__ZNK7WebCore11RenderLayer38updatesScrollLayerPositionOnMainThreadEv","__ZNK7WebCore11RenderLayer21hasHorizontalOverflowEv","__ZN7WebCore11RenderLayer19dirtyNormalFlowListEv","__ZNK7WebCore11RenderLayer19hasVerticalOverflowEv","__ZNK7WebCore11RenderLayer18backgroundClipRectERKNS0_16ClipRectsContextE","__ZNK7WebCore11RenderLayer22isPointInResizeControlERKNS_8IntPointE","__ZN7WebCore14ScrollableArea17scheduleAnimationEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_S4_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZN7WebCore11RenderLayer14paintingExtentEPKS0_RKNS_10LayoutRectEj","__ZN7WebCore11RenderLayer23computeScrollDimensionsEv","__ZN3WTF6VectorIN7WebCore13LayerFragmentELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZNK7WebCore11RenderLayer20perspectiveTransformEv","__ZNK7WebCore11RenderLayer25horizontalScrollbarHeightENS_29OverlayScrollbarSizeRelevancyE","__ZNK7WebCore14ScrollableArea22isRubberBandInProgressEv","__ZNK7WebCore11RenderLayer33backgroundIsKnownToBeOpaqueInRectERKNS_10LayoutRectE","__ZNSt3__118__stable_sort_moveIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeE","__ZNK7WebCore11RenderLayer24horizontalScrollbarStartEi","__ZNK7WebCore11RenderLayer16enclosingElementEv","__ZNK7WebCore11RenderLayer17paintsWithFiltersEv","__ZN7WebCore11RenderLayer10paintLayerEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZN7WebCore11RenderLayer20updateLayerPositionsEPNS_17RenderGeometryMapEj","__ZN7WebCore11RenderLayer25updateOutOfFlowPositionedEPKNS_11RenderStyleE","__ZN7WebCore11RenderLayer39updateLayerPositionsAfterOverflowScrollEv","__ZN7WebCore11RenderLayer39computeRepaintRectsIncludingDescendantsEv","__ZNK7WebCore11RenderLayer26rectForHorizontalScrollbarERKNS_7IntRectE","__ZNK7WebCore11RenderLayer10scrollSizeENS_20ScrollbarOrientationE","__ZN7WebCore11RenderLayerD2Ev","__ZN7WebCore11RenderLayer31paintLayerContentsAndReflectionEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZNK7WebCore11RenderLayer15scrollsOverflowEv","__ZNK7WebCore11RenderLayer20enclosingFilterLayerENS_16IncludeSelfOrNotE","__ZNK7WebCore11RenderLayer18calculateClipRectsERKNS0_16ClipRectsContextERNS_9ClipRectsE","__ZNK7WebCore11RenderLayer14filterRendererEv","__ZNK7WebCore11RenderLayer8isActiveEv","__ZN7WebCore17StyleSurroundDataD2Ev","__ZNK7WebCore11RenderLayer23clippingRootForPaintingEv","__ZN7WebCore11RenderLayer19insertOnlyThisLayerEv","__ZNK7WebCore8ClipRect10intersectsERKNS_15HitTestLocationE","__ZNK7WebCore11RenderLayer9canResizeEv","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E6rehashEiPS4_","__ZN7WebCore11RenderLayer26invalidateScrollCornerRectERKNS_7IntRectE","__ZN7WebCore11RenderLayer23invalidateScrollbarRectEPNS_9ScrollbarERKNS_7IntRectE","__ZNSt3__124__buffered_inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeE","__ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE","__ZNK7WebCore11RenderLayer12selfClipRectEv","__ZN7WebCore12StyleBoxDataD2Ev","__ZNK7WebCore11RenderLayer46acceleratedCompositingForOverflowScrollEnabledEv","__ZNK7WebCore11RenderLayer19horizontalScrollbarEv","__ZN7WebCore11RenderLayer15updateBlendModeEv","__ZN7WebCore11RenderLayer31updateLayerPositionsAfterLayoutEPKS0_j","__ZNK7WebCore11RenderLayer23enclosingScrollableAreaEv","__ZNK7WebCore11RenderLayer12contentsSizeEv","__ZN7WebCore11RenderLayer14clearClipRectsENS_13ClipRectsTypeE","__ZN7WebCore11RenderLayer24positionOverflowControlsERKNS_7IntSizeE","__ZN7WebCore11RenderLayer46setAncestorChainHasSelfPaintingLayerDescendantEv","__ZN7WebCore11RenderLayer11hitTestListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEES3_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdSL_SK_b","__ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore11RenderLayer54dirtyAncestorChainHasSelfPaintingLayerDescendantStatusEv","__ZN7WebCore11RenderLayer20setHasVisibleContentEv","__ZN7WebCore11RenderLayer12applyFiltersEPNS_26FilterEffectRendererHelperEPNS_15GraphicsContextERNS0_17LayerPaintingInfoERN3WTF6VectorINS_13LayerFragmentELj1ENS7_15CrashOnOverflowEEE","__ZNK7WebCore11RenderLayer14calculateRectsERKNS0_16ClipRectsContextERKNS_10LayoutRectERS4_RNS_8ClipRectES9_S9_PKNS_11LayoutPointE","__ZN7WebCore11RenderLayer41repaintIncludingNonCompositingDescendantsEPNS_22RenderLayerModelObjectE","__ZN7WebCore11RenderLayer23updateScrollCornerStyleEv","__ZNK7WebCore11RenderLayer21computeOffsetFromRootERb","__ZN7WebCore11RenderLayer29paintLayerByApplyingTransformEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjRKNS_11LayoutPointE","__ZNK7WebCore11RenderLayer22canBeStackingContainerEv","__ZNSt3__115__inplace_mergeIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_S8_T_NS_15iterator_traitsIS8_E15difference_typeESC_PNSB_10value_typeEi","__ZN7WebCore11RenderLayer27updateOrRemoveFilterClientsEv","__ZNK7WebCore11RenderLayer17hasCompositedMaskEv","__ZN7WebCore11RenderLayer23computeFilterOperationsEPKNS_11RenderStyleE","__ZN7WebCore11RenderLayer28setBackingNeedsRepaintInRectERKNS_10LayoutRectE","__ZN7WebCore14ScrollableArea12tiledBackingEv","__ZN7WebCore11RenderLayer25repaintBlockSelectionGapsEv","__ZNK7WebCore11RenderLayer35enclosingCompositingLayerForRepaintENS_16IncludeSelfOrNotE","__ZNK7WebCore11RenderLayer25scrollableAreaBoundingBoxEv","__ZN7WebCore11RenderLayer19updateLayerPositionEv","__ZN7WebCore11RenderLayer25setHasHorizontalScrollbarEb","__ZN3WTF9HashTableIPKN7WebCore12RenderObjectES4_NS_17IdentityExtractorENS_7PtrHashIS4_EENS_10HashTraitsIS4_EES9_E3addINS_22IdentityHashTranslatorIS7_EERKS4_SF_EENS_18HashTableAddResultINS_17HashTableIteratorIS4_S4_S5_S7_S9_S9_EEEEOT0_OT1_","__ZNK7WebCore11RenderLayer48isFlowThreadCollectingGraphicsLayersUnderRegionsEv","__ZNK7WebCore11RenderLayer16localBoundingBoxEj","__ZN7WebCore14ClipRectsCacheD2Ev","__ZNK7WebCore11RenderLayer14overhangAmountEv","__ZN7WebCore11RenderLayer6resizeERKNS_18PlatformMouseEventERKNS_10LayoutSizeE","__ZNK7WebCore11RenderLayer27hitTestContentsForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_14HitTestRequestERNS_13HitTestResultERKNS_15HitTestLocationENS_13HitTestFilterERb","__ZNK7WebCore11RenderLayer25hasNonEmptyChildRenderersEv","__ZN7WebCore11RenderLayer9paintListEPN3WTF6VectorIPS0_Lj0ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZNK7WebCore11RenderLayer16currentTransformENS_11RenderStyle20ApplyTransformOriginE","__ZN7WebCore11RenderLayer35updateDescendantsLayerListsIfNeededEb","__ZN7WebCore11RenderLayer38updateCompositingAndLayerListsIfNeededEv","__ZN7WebCore11RenderLayer24paintPaginatedChildLayerEPS0_PNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZN7WebCore11RenderLayer23hitTestOverflowControlsERNS_13HitTestResultERKNS_8IntPointE","__ZNK7WebCore11RenderLayer22lastKnownMousePositionEv","__ZN7WebCore11RenderLayer41dirtyAncestorChainVisibleDescendantStatusEv","__ZN7WebCore11RenderLayer43checkIfDescendantClippingContextNeedsUpdateEb","__ZN7WebCore11RenderLayer16createReflectionEv","__ZN7WebCore11RenderLayer18updateResizerStyleEv","__ZN7WebCoreL13compareZIndexEPNS_11RenderLayerES1_","__ZNK7WebCore11RenderLayer20layerForScrollCornerEv","__ZN7WebCore11RenderLayer21createReflectionStyleEv","__ZN7WebCoreL19transparencyClipBoxEPKNS_11RenderLayerES2_NS_27TransparencyClipBoxBehaviorENS_23TransparencyClipBoxModeEj","__ZN7WebCore11RenderLayer30updatePaintingInfoForFragmentsERN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS0_17LayerPaintingInfoEjbPKNS_11LayoutPointE","__ZNK7WebCore11RenderLayer27layerForHorizontalScrollbarEv","__ZNK7WebCore11RenderLayer12scrollHeightEv","__ZNSt3__113__stable_sortIRPFbPN7WebCore11RenderLayerES3_EPS3_EEvT0_S8_T_NS_15iterator_traitsIS8_E15difference_typeEPNSB_10value_typeEi","__ZNK7WebCore11RenderLayer11scrollWidthEv","__ZN7WebCore11RenderLayer22paintOverlayScrollbarsEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectE","__ZN7WebCore11RenderLayer17updateZOrderListsEv","__ZN7WebCore11RenderLayer23updateSelfPaintingLayerEv","__ZN7WebCore11RenderLayer12paintResizerEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectE","_memset","__ZN7WebCore11RenderLayer14contentChangedENS_17ContentChangeTypeE","__ZNK7WebCore11RenderLayer24needsCompositedScrollingEv","__ZNK7WebCore11RenderLayer14overflowBottomEv","__ZNK7WebCore11RenderLayer20calculateLayerBoundsEPKS0_PKNS_11LayoutPointEj","__ZNK7WebCore11RenderLayer11overflowTopEv","__ZN7WebCore10BorderDataD2Ev","__ZN7WebCore11RenderLayer15getRectToExposeERKNS_10LayoutRectES3_S3_RKNS_15ScrollAlignmentES6_","__ZNK7WebCore11RenderLayer25shouldBeSelfPaintingLayerEv","__ZN7WebCore11RenderLayer24updateLayerListsIfNeededEv","__ZN7WebCore11RenderLayer10clipToRectEPS0_PNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectENS_24BorderRadiusClippingRuleE","__ZNK7WebCore11RenderLayer36needsCompositingLayersRebuiltForClipEPKNS_11RenderStyleES3_","__ZNK7WebCore11RenderLayer17perspectiveOriginEv","__ZN3WTF7HashMapIPN7WebCore24OverlapTestRequestClientENS1_7IntRectENS_7PtrHashIS3_EENS_10HashTraitsIS3_EENS7_IS4_EEE6removeERKS3_","__ZN7WebCore11RenderLayer5paintEPNS_15GraphicsContextERKNS_10LayoutRectEjPNS_12RenderObjectEPNS_12RenderRegionEj","__ZNK7WebCore11RenderLayer32convertToPixelSnappedLayerCoordsEPKS0_RNS_7IntRectENS0_22ColumnOffsetAdjustmentE","__ZN7WebCore11RenderLayer18rebuildZOrderListsENS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_","__ZN7WebCore11RenderLayer22setBackingNeedsRepaintENS_13GraphicsLayer17ShouldClipToLayerE","__ZNK7WebCore11RenderLayer36convertFromContainingViewToScrollbarEPKNS_9ScrollbarERKNS_8IntPointE","__ZNK7WebCore11RenderLayer13visibleHeightEv","__ZNK7WebCore11RenderLayer11boundingBoxEPKS0_jPKNS_11LayoutPointE","__ZNK7WebCore11RenderLayer37mapLayerClipRectsToFragmentationLayerEPNS_12RenderRegionERNS_9ClipRectsE","__ZNK7WebCore11RenderLayer12visibleWidthEv","__ZNK7WebCore11RenderLayer19renderableTransformEj","__ZN7WebCore11RenderLayer21paintMaskForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEPNS_12RenderObjectE","__ZN7WebCore11RenderLayer23beginTransparencyLayersEPNS_15GraphicsContextEPKS0_RKNS_10LayoutRectEj","__ZN7WebCore11RenderLayer21paintOverflowControlsEPNS_15GraphicsContextERKNS_8IntPointERKNS_7IntRectEb","__ZN7WebCore11RenderLayer15createScrollbarENS_20ScrollbarOrientationE","__ZNK7WebCore11RenderLayer32requiresFullLayerImageForFiltersEv","__ZN7WebCore11RenderLayer12hitTestLayerEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEbPKNS_24HitTestingTransformStateEPd","__ZN7WebCore11RenderLayer39updateLayerPositionsAfterDocumentScrollEv","__ZNK7WebCore11RenderLayer24rectForVerticalScrollbarERKNS_7IntRectE","__ZNK7WebCore11RenderLayer17clampScrollOffsetERKNS_7IntSizeE","__ZN7WebCore11RenderLayer27paintForegroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectEbb","__ZN7WebCore11RenderLayer31hitTestLayerByApplyingTransformEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKNS_11LayoutPointE","__ZN7WebCore11RenderLayer13collectLayersEbNS0_21CollectLayersBehaviorERN3WTF6OwnPtrINS2_6VectorIPS0_Lj0ENS2_15CrashOnOverflowEEEEES9_","__ZN7WebCore11RenderLayer54updateDescendantsAreContiguousInStackingOrderRecursiveERKN3WTF7HashMapIPKS0_iNS1_7PtrHashIS4_EENS1_10HashTraitsIS4_EENS7_IiEEEERiSD_SD_b","__ZNK7WebCore11RenderLayer22verticalScrollbarWidthENS_29OverlayScrollbarSizeRelevancyE","__ZN7WebCore11RenderLayer30updateDescendantDependentFlagsEPN3WTF7HashSetIPKNS_12RenderObjectENS1_7PtrHashIS5_EENS1_10HashTraitsIS5_EEEE","__ZN7WebCore11RenderLayer27paintBackgroundForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextES9_RKNS_10LayoutRectEbRKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE","__ZNK7WebCore11RenderLayer17verticalScrollbarEv","__ZN7WebCore11RenderLayer27updateScrollInfoAfterLayoutEv","__ZN7WebCore11RenderLayer56dirtyAncestorChainHasOutOfFlowPositionedDescendantStatusEv","__ZNK7WebCore11RenderLayer22verticalScrollbarStartEii","_memcpy","__ZN7WebCore11RenderLayer24drawPlatformResizerImageEPNS_15GraphicsContextENS_7IntRectE","__ZNK7WebCore11RenderLayer18visibleContentRectENS_14ScrollableArea36VisibleContentRectIncludesScrollbarsE","__ZNK7WebCore11RenderLayer21canRender3DTransformsEv","__ZNK7WebCore11RenderLayer17layerForScrollingEv","__ZNK7WebCore11RenderLayer21minimumScrollPositionEv","__ZNK7WebCore11RenderLayer16scrollCornerRectEv","__ZNK7WebCore11RenderLayer28hasAncestorWithFilterOutsetsEv","__ZNK7WebCore11RenderLayer19hasOverflowControlsEv","__ZN7WebCore11RenderLayer25hitTestFlowThreadIfRegionEPS0_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPd","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E6expandEPS6_","__ZN7WebCore11RenderLayer28paintFixedLayersInNamedFlowsEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEj","__ZN7WebCore11RenderLayer20updateNormalFlowListEv","__ZNK7WebCore11RenderLayer18cannotBlitToWindowEv","__ZN7WebCore11RenderLayer36positionNewlyCreatedOverflowControlsEv","__ZN7WebCore11RenderLayer11removeChildEPS0_","__ZN7WebCore11RenderLayer15updateClipRectsERKNS0_16ClipRectsContextE","__ZNK7WebCore11RenderLayer25hitTestResizerInFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEERKNS_15HitTestLocationE","__ZN7WebCore11RenderLayer8addChildEPS0_S1_","__ZN7WebCoreL31accumulateOffsetTowardsAncestorEPKNS_11RenderLayerES2_RNS_11LayoutPointENS0_22ColumnOffsetAdjustmentE","__ZN7WebCore11RenderLayer27repaintIncludingDescendantsEv","__ZN7WebCore11RenderLayer15updateTransformEv","__ZN7WebCore11RenderLayerC2ERNS_22RenderLayerModelObjectE","__ZNK7WebCore11RenderLayer21maximumScrollPositionEv","__Z12compareEqualIN7WebCore19TransformOperationsES1_EbRKT_RKT0_","__ZNK7WebCore11RenderLayer20convertToLayerCoordsEPKS0_RNS_10LayoutRectENS0_22ColumnOffsetAdjustmentE","__ZN7WebCore11RenderLayer12styleChangedENS_15StyleDifferenceEPKNS_11RenderStyleE","__ZN3WTF7HashSetIPKN7WebCore12RenderObjectENS_7PtrHashIS4_EENS_10HashTraitsIS4_EEE6removeERKS4_","__ZNK7WebCore11RenderLayer22shouldBeNormalFlowOnlyEv","__ZNK7WebCore11RenderLayer25layerForVerticalScrollbarEv","__ZN7WebCore11RenderLayerD0Ev","__ZNK7WebCore11RenderLayer17stackingContainerEv","__ZN7WebCore11RenderLayer24hitTestChildLayerColumnsEPS0_S1_RKNS_14HitTestRequestERNS_13HitTestResultERKNS_10LayoutRectERKNS_15HitTestLocationEPKNS_24HitTestingTransformStateEPdRKN3WTF6VectorIS1_Lj0ENSH_15CrashOnOverflowEEEj","__ZN7WebCore11RenderLayer32updateScrollbarsAfterStyleChangeEPKNS_11RenderStyleE","__ZN7WebCore14ScrollableArea27requestScrollPositionUpdateERKNS_8IntPointE","__ZN7WebCore11RenderLayer38updateStackingContextsAfterStyleChangeEPKNS_11RenderStyleE","__ZNK7WebCore11RenderLayer14scrollPositionEPNS_9ScrollbarE","__ZN7WebCoreL14isHitCandidateEPKNS_11RenderLayerEbPdPKNS_24HitTestingTransformStateE","__ZN3WTF10RefCountedIN7WebCore18NinePieceImageDataEE5derefEv","__ZNK7WebCore11RenderLayer27enclosingPositionedAncestorEv","__ZN7WebCore11RenderLayer10autoscrollERKNS_8IntPointE","__ZN7WebCore11RenderLayer45updateDescendantsAreContiguousInStackingOrderEv","__ZN7WebCore14ScrollableArea27setVisibleScrollerThumbRectERKNS_7IntRectE","__ZN7WebCore11RenderLayer37setFilterBackendNeedsRepaintingInRectERKNS_10LayoutRectEb","__ZN7WebCore11RenderLayer27updateScrollbarsAfterLayoutEv","__ZN7WebCore11RenderLayer35update3DTransformedDescendantStatusEv","__ZNK7WebCore11RenderLayer26enclosingOverflowClipLayerENS_16IncludeSelfOrNotE","__ZN7WebCore11RenderLayer36paintForegroundForFragmentsWithPhaseENS_10PaintPhaseERKN3WTF6VectorINS_13LayerFragmentELj1ENS2_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoEjPNS_12RenderObjectE","__ZNK7WebCore11RenderLayer15reflectionLayerEv","__ZNK7WebCore11RenderLayer22offsetFromResizeCornerERKNS_8IntPointE","__ZN7WebCore11RenderLayer33paintOverflowControlsForFragmentsERKN3WTF6VectorINS_13LayerFragmentELj1ENS1_15CrashOnOverflowEEEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoE","__ZNK7WebCore11RenderLayer16childrenClipRectEv","__ZNK7WebCore11RenderLayer14scrollPositionEv","__ZN7WebCore11RenderLayer19scrollByRecursivelyERKNS_7IntSizeENS0_20ScrollOffsetClampingEPPNS_14ScrollableAreaE","__ZNK7WebCore11RenderLayer12overflowLeftEv","__ZNK7WebCore11RenderLayer25enclosingCompositingLayerENS_16IncludeSelfOrNotE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZNK7WebCore11RenderLayer13isTransparentEv","__ZNK7WebCore14ScrollableArea21scrollAnimatorEnabledEv","__ZN7WebCore11RenderStyle12setTransformERKNS_19TransformOperationsE","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18TransformOperationEEELj0ENS_15CrashOnOverflowEEaSERKS6_","__ZN7WebCore11RenderLayer32paintNamedFlowThreadInsideRegionEPNS_15GraphicsContextEPNS_23RenderNamedFlowFragmentENS_10LayoutRectENS_11LayoutPointEjj","__ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_7IntRectE","__ZN7WebCore11RenderLayer6scrollENS_15ScrollDirectionENS_17ScrollGranularityEf","__ZN7WebCore11RenderLayer18rebuildZOrderListsEv","__ZN7WebCore11RenderLayer11restoreClipEPNS_15GraphicsContextERKNS_10LayoutRectERKNS_8ClipRectE","__ZN7WebCore11RenderLayer13ensureBackingEv","__ZNK7WebCore11RenderLayer21useRegionBasedColumnsEv","__ZNK7WebCore11RenderLayer18isVisuallyNonEmptyEv","__ZN7WebCore11RenderLayer29clearBlockSelectionGapsBoundsEv","__ZNK7WebCore11RenderLayer4nameEv","__ZN7WebCore11RenderLayer34dirty3DTransformedDescendantStatusEv","__ZNK7WebCore11RenderLayer13overflowRightEv","__ZN7WebCore11RenderLayer33dirtyStackingContainerZOrderListsEv","__ZNK7WebCore11RenderLayer36convertFromScrollbarToContainingViewEPKNS_9ScrollbarERKNS_8IntPointE","__ZN3WTF9HashTableIPKN7WebCore11RenderLayerENS_12KeyValuePairIS4_iEENS_24KeyValuePairKeyExtractorIS6_EENS_7PtrHashIS4_EENS_7HashMapIS4_iSA_NS_10HashTraitsIS4_EENSC_IiEEE18KeyValuePairTraitsESD_E3addINS_17HashMapTranslatorISG_SA_EES4_iEENS_18HashTableAddResultINS_17HashTableIteratorIS4_S6_S8_SA_SG_SD_EEEEOT0_OT1_","__ZN7WebCore11RenderLayer14scrollToOffsetERKNS_7IntSizeENS0_20ScrollOffsetClampingE","__ZNK7WebCore11RenderLayer20isHandlingWheelEventEv","__ZN7WebCore11RenderLayer13setupClipPathEPNS_15GraphicsContextERKNS0_17LayerPaintingInfoERKNS_11LayoutPointERNS_10LayoutRectERb","_memmove","__ZNK7WebCore11RenderLayer27enclosingFlowThreadAncestorEv","__ZNK7WebCore11RenderLayer29overflowControlsIntersectRectERKNS_7IntRectE","__ZN7WebCore11RenderLayer19scrollRectToVisibleERKNS_10LayoutRectERKNS_15ScrollAlignmentES6_","__ZNK7WebCore11RenderLayer29hasScrollableVerticalOverflowEv","__ZN7WebCore11RenderLayer31updateLayerPositionsAfterScrollEPNS_17RenderGeometryMapEj","__ZN7WebCore11RenderLayer34updateOrRemoveFilterEffectRendererEv","__ZN7WebCore11RenderLayer7hitTestERKNS_14HitTestRequestERKNS_15HitTestLocationERNS_13HitTestResultE","__ZN7WebCore11RenderLayer17clearRepaintRectsEv","__ZN7WebCore11RenderLayer36setAncestorChainHasVisibleDescendantEv","__ZNK7WebCore11RenderLayer10compositorEv","__ZN7WebCore20makeMatrixRenderableERNS_20TransformationMatrixEb","__ZN7WebCore11RenderLayer16removeReflectionEv"]

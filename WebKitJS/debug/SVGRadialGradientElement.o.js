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
H_BASE = parentModule["_malloc"](920 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 920;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([48,37,0,0,0,0,0,0,53,48,37,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,164,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,160,255,255,255,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiiii(index,a1,a2,a3,a4) {
  try {
    return Module["dynCall_iiiii"](index,a1,a2,a3,a4);
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
  var __ZN7WebCore8SVGNames6fxAttrE=env.__ZN7WebCore8SVGNames6fxAttrE|0;
  var __ZN3WTF8nullAtomE=env.__ZN3WTF8nullAtomE|0;
  var __ZN7WebCore8SVGNames17linearGradientTagE=env.__ZN7WebCore8SVGNames17linearGradientTagE|0;
  var __ZN7WebCore8SVGNames17gradientUnitsAttrE=env.__ZN7WebCore8SVGNames17gradientUnitsAttrE|0;
  var __ZN7WebCore8SVGNames6cyAttrE=env.__ZN7WebCore8SVGNames6cyAttrE|0;
  var __ZN7WebCore8SVGNames6frAttrE=env.__ZN7WebCore8SVGNames6frAttrE|0;
  var __ZN7WebCore8SVGNames6fyAttrE=env.__ZN7WebCore8SVGNames6fyAttrE|0;
  var __ZN7WebCore8SVGNames5rAttrE=env.__ZN7WebCore8SVGNames5rAttrE|0;
  var __ZN7WebCore8SVGNames17radialGradientTagE=env.__ZN7WebCore8SVGNames17radialGradientTagE|0;
  var __ZTVN7WebCore18SVGGradientElementE=env.__ZTVN7WebCore18SVGGradientElementE|0;
  var __ZN7WebCore8SVGNames16spreadMethodAttrE=env.__ZN7WebCore8SVGNames16spreadMethodAttrE|0;
  var __ZN7WebCore8SVGNames21gradientTransformAttrE=env.__ZN7WebCore8SVGNames21gradientTransformAttrE|0;
  var __ZN7WebCore8SVGNames6cxAttrE=env.__ZN7WebCore8SVGNames6cxAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEEE=(H_BASE+24)|0;
  var __ZTVN7WebCore24SVGRadialGradientElementE=(H_BASE+56)|0;
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
  var invoke_iiiii=env.invoke_iiiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_iiii=env.invoke_iiii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24SVGRadialGradientElement25collectGradientAttributesERNS_24RadialGradientAttributesE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, i75 = 0, i76 = 0, i77 = 0, i78 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 152 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i3 + 32 | 0;
 i9 = i3 + 56 | 0;
 i10 = i3 + 64 | 0;
 i11 = i3 + 112 | 0;
 i12 = i3 + 128 | 0;
 i13 = i3 + 144 | 0;
 i14 = i13;
 i15 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i16 = i15;
 _memset(i8 | 0, 0, 20) | 0;
 i17 = i1 | 0;
 HEAP32[i9 >> 2] = i17;
 L1 : do {
  if ((i1 | 0) == 0) {
   i18 = i2 + 112 | 0;
   i19 = 91;
  } else {
   i20 = i2 + 60 | 0;
   i21 = i7 | 0;
   i22 = i7 + 4 | 0;
   i23 = i6 | 0;
   i24 = i6 + 4 | 0;
   i25 = i5 | 0;
   i26 = i5 + 4 | 0;
   i27 = i2;
   i28 = i10;
   i29 = i11 + 8 | 0;
   i30 = i11 | 0;
   i31 = i11 + 4 | 0;
   i32 = i2 + 48 | 0;
   i33 = i2 + 112 | 0;
   i34 = i2 + 64 | 0;
   i35 = i2 + 72 | 0;
   i36 = i2 + 80 | 0;
   i37 = i2 + 88 | 0;
   i38 = i2 + 96 | 0;
   i39 = i2 + 104 | 0;
   i40 = i8 | 0;
   i41 = i4 | 0;
   i42 = i4 + 4 | 0;
   i43 = i1 + 20 | 0;
   i44 = i8 | 0;
   i45 = i8 + 8 | 0;
   i46 = i17;
   i47 = 1;
   L4 : while (1) {
    i48 = i46 + 32 | 0;
    if ((HEAP32[i46 + 12 >> 2] & 2048 | 0) == 0) {
     i49 = i48 | 0;
    } else {
     i49 = HEAP32[i48 >> 2] | 0;
    }
    if ((HEAP32[i49 >> 2] | 0) == 0) {
     i50 = 0;
     break L1;
    }
    i48 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i48 & 16 | 0) == 0) {
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i46 | 0, __ZN7WebCore8SVGNames16spreadMethodAttrE) | 0)) {
       i51 = HEAP32[i20 >> 2] | 0;
       break;
      }
      i52 = HEAP32[i9 >> 2] | 0;
      i53 = HEAP32[(__ZN7WebCore18SVGGradientElement24spreadMethodPropertyInfoEv() | 0) + 12 >> 2] | 0;
      HEAP32[i21 >> 2] = i52;
      HEAP32[i22 >> 2] = HEAP32[i53 >> 2];
      i53 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i7) | 0;
      do {
       if ((i53 | 0) == 0) {
        i19 = 15;
       } else {
        i54 = HEAP32[i53 + 8 >> 2] | 0;
        if ((i54 | 0) == 0) {
         i19 = 15;
         break;
        }
        if ((HEAP8[i54 + 20 | 0] & 1) == 0) {
         i19 = 15;
         break;
        }
        i55 = HEAP32[i54 + 28 >> 2] | 0;
       }
      } while (0);
      if ((i19 | 0) == 15) {
       i19 = 0;
       i55 = i52 + 100 | 0;
      }
      i53 = HEAP32[i55 >> 2] & 3 | HEAP32[i20 >> 2] & -20 | 16;
      HEAP32[i20 >> 2] = i53;
      i51 = i53;
     } else {
      i51 = i48;
     }
    } while (0);
    do {
     if ((i51 & 32 | 0) == 0) {
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames17gradientUnitsAttrE) | 0)) {
       i56 = HEAP32[i20 >> 2] | 0;
       break;
      }
      i48 = HEAP32[i9 >> 2] | 0;
      i53 = HEAP32[(__ZN7WebCore18SVGGradientElement25gradientUnitsPropertyInfoEv() | 0) + 12 >> 2] | 0;
      HEAP32[i23 >> 2] = i48;
      HEAP32[i24 >> 2] = HEAP32[i53 >> 2];
      i53 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
      do {
       if ((i53 | 0) == 0) {
        i19 = 24;
       } else {
        i54 = HEAP32[i53 + 8 >> 2] | 0;
        if ((i54 | 0) == 0) {
         i19 = 24;
         break;
        }
        if ((HEAP8[i54 + 20 | 0] & 1) == 0) {
         i19 = 24;
         break;
        }
        i57 = HEAP32[i54 + 28 >> 2] | 0;
       }
      } while (0);
      if ((i19 | 0) == 24) {
       i19 = 0;
       i57 = i48 + 108 | 0;
      }
      i53 = HEAP32[i20 >> 2] & -45 | HEAP32[i57 >> 2] << 2 & 12 | 32;
      HEAP32[i20 >> 2] = i53;
      i56 = i53;
     } else {
      i56 = i51;
     }
    } while (0);
    do {
     if ((i56 & 64 | 0) == 0) {
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames21gradientTransformAttrE) | 0)) {
       i58 = HEAP32[i20 >> 2] | 0;
       break;
      }
      __ZN7WebCore15AffineTransformC1Ev(i10);
      i53 = HEAP32[i9 >> 2] | 0;
      i52 = HEAP32[(__ZN7WebCore18SVGGradientElement29gradientTransformPropertyInfoEv() | 0) + 12 >> 2] | 0;
      HEAP32[i25 >> 2] = i53;
      HEAP32[i26 >> 2] = HEAP32[i52 >> 2];
      i52 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i5) | 0;
      do {
       if ((i52 | 0) == 0) {
        i19 = 33;
       } else {
        i54 = HEAP32[i52 + 8 >> 2] | 0;
        if ((i54 | 0) == 0) {
         i19 = 33;
         break;
        }
        if ((HEAP8[i54 + 20 | 0] & 1) == 0) {
         i19 = 33;
         break;
        }
        i59 = HEAP32[(HEAP32[i54 + 56 >> 2] | 0) + 16 >> 2] | 0;
       }
      } while (0);
      if ((i19 | 0) == 33) {
       i19 = 0;
       i59 = i53 + 116 | 0;
      }
      __ZNK7WebCore16SVGTransformList11concatenateERNS_15AffineTransformE(i59, i10) | 0;
      HEAP32[i27 >> 2] = HEAP32[i28 >> 2];
      HEAP32[i27 + 4 >> 2] = HEAP32[i28 + 4 >> 2];
      HEAP32[i27 + 8 >> 2] = HEAP32[i28 + 8 >> 2];
      HEAP32[i27 + 12 >> 2] = HEAP32[i28 + 12 >> 2];
      HEAP32[i27 + 16 >> 2] = HEAP32[i28 + 16 >> 2];
      HEAP32[i27 + 20 >> 2] = HEAP32[i28 + 20 >> 2];
      HEAP32[i27 + 24 >> 2] = HEAP32[i28 + 24 >> 2];
      HEAP32[i27 + 28 >> 2] = HEAP32[i28 + 28 >> 2];
      HEAP32[i27 + 32 >> 2] = HEAP32[i28 + 32 >> 2];
      HEAP32[i27 + 36 >> 2] = HEAP32[i28 + 36 >> 2];
      HEAP32[i27 + 40 >> 2] = HEAP32[i28 + 40 >> 2];
      HEAP32[i27 + 44 >> 2] = HEAP32[i28 + 44 >> 2];
      i52 = HEAP32[i20 >> 2] | 64;
      HEAP32[i20 >> 2] = i52;
      i58 = i52;
     } else {
      i58 = i56;
     }
    } while (0);
    do {
     if ((i58 & 128 | 0) == 0) {
      __ZN7WebCore18SVGGradientElement10buildStopsEv(i11, HEAP32[i9 >> 2] | 0);
      do {
       if ((HEAP32[i29 >> 2] | 0) != 0) {
        __ZN3WTF6VectorIN7WebCore8Gradient9ColorStopELj0ENS_15CrashOnOverflowEEaSERKS5_(i32, i11) | 0;
        HEAP32[i20 >> 2] = HEAP32[i20 >> 2] | 128;
        if ((HEAP32[i29 >> 2] | 0) == 0) {
         break;
        }
        HEAP32[i29 >> 2] = 0;
       }
      } while (0);
      i53 = HEAP32[i30 >> 2] | 0;
      if ((i53 | 0) == 0) {
       break;
      }
      HEAP32[i30 >> 2] = 0;
      HEAP32[i31 >> 2] = 0;
      __ZN3WTF8fastFreeEPv(i53);
     }
    } while (0);
    do {
     if (i47) {
      i53 = HEAP32[i9 >> 2] | 0;
      i52 = i53;
      i48 = HEAP8[i33] | 0;
      do {
       if ((i48 & 1) == 0) {
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(i53 | 0, __ZN7WebCore8SVGNames6cxAttrE) | 0) {
         i54 = __ZNK7WebCore24SVGRadialGradientElement2cxEv(i52) | 0;
         i60 = HEAP32[i54 + 4 >> 2] | 0;
         HEAP32[i34 >> 2] = HEAP32[i54 >> 2];
         HEAP32[i34 + 4 >> 2] = i60;
         i60 = HEAP8[i33] | 1;
         HEAP8[i33] = i60;
         i61 = i60;
         break;
        } else {
         i61 = HEAP8[i33] | 0;
         break;
        }
       } else {
        i61 = i48;
       }
      } while (0);
      do {
       if ((i61 & 2) == 0) {
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames6cyAttrE) | 0) {
         i48 = __ZNK7WebCore24SVGRadialGradientElement2cyEv(i52) | 0;
         i53 = HEAP32[i48 + 4 >> 2] | 0;
         HEAP32[i35 >> 2] = HEAP32[i48 >> 2];
         HEAP32[i35 + 4 >> 2] = i53;
         i53 = HEAP8[i33] | 2;
         HEAP8[i33] = i53;
         i62 = i53;
         break;
        } else {
         i62 = HEAP8[i33] | 0;
         break;
        }
       } else {
        i62 = i61;
       }
      } while (0);
      do {
       if ((i62 & 4) == 0) {
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames5rAttrE) | 0) {
         i53 = __ZNK7WebCore24SVGRadialGradientElement1rEv(i52) | 0;
         i48 = HEAP32[i53 + 4 >> 2] | 0;
         HEAP32[i36 >> 2] = HEAP32[i53 >> 2];
         HEAP32[i36 + 4 >> 2] = i48;
         i48 = HEAP8[i33] | 4;
         HEAP8[i33] = i48;
         i63 = i48;
         break;
        } else {
         i63 = HEAP8[i33] | 0;
         break;
        }
       } else {
        i63 = i62;
       }
      } while (0);
      do {
       if ((i63 & 8) == 0) {
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames6fxAttrE) | 0) {
         i48 = __ZNK7WebCore24SVGRadialGradientElement2fxEv(i52) | 0;
         i53 = HEAP32[i48 + 4 >> 2] | 0;
         HEAP32[i37 >> 2] = HEAP32[i48 >> 2];
         HEAP32[i37 + 4 >> 2] = i53;
         i53 = HEAP8[i33] | 8;
         HEAP8[i33] = i53;
         i64 = i53;
         break;
        } else {
         i64 = HEAP8[i33] | 0;
         break;
        }
       } else {
        i64 = i63;
       }
      } while (0);
      do {
       if ((i64 & 16) == 0) {
        if (__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames6fyAttrE) | 0) {
         i53 = __ZNK7WebCore24SVGRadialGradientElement2fyEv(i52) | 0;
         i48 = HEAP32[i53 + 4 >> 2] | 0;
         HEAP32[i38 >> 2] = HEAP32[i53 >> 2];
         HEAP32[i38 + 4 >> 2] = i48;
         i48 = HEAP8[i33] | 16;
         HEAP8[i33] = i48;
         i65 = i48;
         break;
        } else {
         i65 = HEAP8[i33] | 0;
         break;
        }
       } else {
        i65 = i64;
       }
      } while (0);
      if ((i65 & 32) != 0) {
       break;
      }
      if (!(__ZNK7WebCore7Element12hasAttributeERKNS_13QualifiedNameE(HEAP32[i9 >> 2] | 0, __ZN7WebCore8SVGNames6frAttrE) | 0)) {
       break;
      }
      i48 = __ZNK7WebCore24SVGRadialGradientElement2frEv(i52) | 0;
      i53 = HEAP32[i48 + 4 >> 2] | 0;
      HEAP32[i39 >> 2] = HEAP32[i48 >> 2];
      HEAP32[i39 + 4 >> 2] = i53;
      HEAP8[i33] = HEAP8[i33] | 32;
     }
    } while (0);
    __ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i12, i40, i9, i9);
    i53 = HEAP32[i9 >> 2] | 0;
    i48 = HEAP32[(__ZN7WebCore18SVGGradientElement16hrefPropertyInfoEv() | 0) + 12 >> 2] | 0;
    HEAP32[i41 >> 2] = i53;
    HEAP32[i42 >> 2] = HEAP32[i48 >> 2];
    i48 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i4) | 0;
    do {
     if ((i48 | 0) == 0) {
      i19 = 69;
     } else {
      i60 = HEAP32[i48 + 8 >> 2] | 0;
      if ((i60 | 0) == 0) {
       i19 = 69;
       break;
      }
      if ((HEAP8[i60 + 20 | 0] & 1) == 0) {
       i19 = 69;
       break;
      }
      i66 = HEAP32[i60 + 28 >> 2] | 0;
     }
    } while (0);
    if ((i19 | 0) == 69) {
     i19 = 0;
     i66 = i53 + 132 | 0;
    }
    i48 = __ZN7WebCore15SVGURIReference26targetElementFromIRIStringERKN3WTF6StringERNS_8DocumentEPS2_PS5_(i66, HEAP32[(HEAP32[i43 >> 2] | 0) + 8 >> 2] | 0, 0, 0) | 0;
    i60 = i48 | 0;
    if ((i48 | 0) == 0) {
     i19 = 90;
     break;
    }
    i54 = (HEAP32[i48 + 12 >> 2] & 4 | 0) == 0;
    if (i54) {
     i19 = 90;
     break;
    }
    i67 = HEAP32[i60 + 44 >> 2] | 0;
    i68 = HEAP32[__ZN7WebCore8SVGNames17radialGradientTagE >> 2] | 0;
    do {
     if ((i67 | 0) == (i68 | 0)) {
      i69 = i67;
     } else {
      if ((HEAP32[i67 + 12 >> 2] | 0) == (HEAP32[i68 + 12 >> 2] | 0)) {
       if ((HEAP32[i67 + 16 >> 2] | 0) == (HEAP32[i68 + 16 >> 2] | 0)) {
        i69 = i67;
        break;
       }
      }
      if (i54) {
       i19 = 90;
       break L4;
      }
      i70 = HEAP32[i60 + 44 >> 2] | 0;
      i71 = HEAP32[__ZN7WebCore8SVGNames17linearGradientTagE >> 2] | 0;
      if ((i70 | 0) == (i71 | 0)) {
       i69 = i70;
       break;
      }
      if ((HEAP32[i70 + 12 >> 2] | 0) != (HEAP32[i71 + 12 >> 2] | 0)) {
       i19 = 90;
       break L4;
      }
      if ((HEAP32[i70 + 16 >> 2] | 0) == (HEAP32[i71 + 16 >> 2] | 0)) {
       i69 = i70;
      } else {
       i19 = 90;
       break L4;
      }
     }
    } while (0);
    i60 = i48;
    HEAP32[i9 >> 2] = i60;
    i54 = HEAP32[i44 >> 2] | 0;
    L111 : do {
     if ((i54 | 0) != 0) {
      i67 = HEAP32[i45 >> 2] | 0;
      i68 = i48;
      i53 = i68 + ~(i68 << 15) | 0;
      i68 = (i53 >>> 10 ^ i53) * 9 & -1;
      i53 = i68 >>> 6 ^ i68;
      i68 = i53 + ~(i53 << 11) | 0;
      i53 = i68 >>> 16 ^ i68;
      i68 = i67 & i53;
      i70 = i54 + (i68 << 2) | 0;
      i71 = HEAP32[i70 >> 2] | 0;
      if ((i71 | 0) == (i60 | 0)) {
       i72 = i70;
      } else {
       i70 = (i53 >>> 23) + ~i53 | 0;
       i53 = i70 << 12 ^ i70;
       i70 = i53 >>> 7 ^ i53;
       i53 = i70 << 2 ^ i70;
       i70 = i53 >>> 20 ^ i53 | 1;
       i53 = 0;
       i73 = i68;
       i68 = i71;
       while (1) {
        if ((i68 | 0) == 0) {
         break L111;
        }
        i71 = (i53 | 0) == 0 ? i70 : i53;
        i74 = i71 + i73 & i67;
        i75 = i54 + (i74 << 2) | 0;
        i76 = HEAP32[i75 >> 2] | 0;
        if ((i76 | 0) == (i60 | 0)) {
         i72 = i75;
         break;
        } else {
         i53 = i71;
         i73 = i74;
         i68 = i76;
        }
       }
      }
      if ((i72 | 0) != 0) {
       i19 = 85;
       break L4;
      }
     }
    } while (0);
    i54 = HEAP32[__ZN7WebCore8SVGNames17radialGradientTagE >> 2] | 0;
    do {
     if ((i69 | 0) == (i54 | 0)) {
      i77 = 1;
     } else {
      if ((HEAP32[i69 + 12 >> 2] | 0) != (HEAP32[i54 + 12 >> 2] | 0)) {
       i77 = 0;
       break;
      }
      i77 = (HEAP32[i69 + 16 >> 2] | 0) == (HEAP32[i54 + 16 >> 2] | 0);
     }
    } while (0);
    if ((i48 | 0) == 0) {
     i18 = i33;
     i19 = 91;
     break L1;
    } else {
     i46 = i60;
     i47 = i77;
    }
   }
   if ((i19 | 0) == 85) {
    HEAP32[i9 >> 2] = 0;
    i18 = i33;
    i19 = 91;
    break;
   } else if ((i19 | 0) == 90) {
    HEAP32[i9 >> 2] = 0;
    i18 = i33;
    i19 = 91;
    break;
   }
  }
 } while (0);
 do {
  if ((i19 | 0) == 91) {
   i9 = HEAP8[i18] | 0;
   if ((i9 & 8) == 0) {
    __ZN7WebCore9SVGLengthC1ERKS0_(i14, i2 + 64 | 0);
    i77 = i2 + 88 | 0;
    i69 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i77 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i77 + 4 >> 2] = i69;
    i69 = HEAP8[i18] | 8;
    HEAP8[i18] = i69;
    i78 = i69;
   } else {
    i78 = i9;
   }
   if ((i78 & 16) != 0) {
    i50 = 1;
    break;
   }
   __ZN7WebCore9SVGLengthC1ERKS0_(i16, i2 + 72 | 0);
   i9 = i2 + 96 | 0;
   i69 = HEAP32[i15 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i15 >> 2];
   HEAP32[i9 + 4 >> 2] = i69;
   HEAP8[i18] = HEAP8[i18] | 16;
   i50 = 1;
  }
 } while (0);
 i18 = HEAP32[i8 >> 2] | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i3;
  return i50 | 0;
 }
 __ZN3WTF8fastFreeEPv(i18);
 STACKTOP = i3;
 return i50 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 32 >> 2] = F_BASE_ii + 26;
 HEAP32[H_BASE + 36 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 40 >> 2] = F_BASE_vi + 70;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 50;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 148;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_ii + 164;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 58;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_iiiii + 4;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_iiiii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_vi + 54;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_vi + 60;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vi + 44;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_ii + 120;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 52;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 6;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 68;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viii + 16;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_ii + 54;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_vii + 26;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_viii + 12;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_ii + 146;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_ii + 46;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_ii + 40;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_viii + 14;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_ii + 162;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_ii + 170;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_ii + 144;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_ii + 20;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_ii + 56;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_ii + 64;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 62;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_vi + 48;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 60;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vii + 36;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_ii + 48;
 HEAP32[H_BASE + 232 >> 2] = F_BASE_ii + 44;
 HEAP32[H_BASE + 236 >> 2] = F_BASE_ii + 84;
 HEAP32[H_BASE + 240 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 244 >> 2] = F_BASE_iii + 10;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_vii + 32;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vii + 34;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_ii + 156;
 HEAP32[H_BASE + 260 >> 2] = F_BASE_ii + 108;
 HEAP32[H_BASE + 264 >> 2] = F_BASE_ii + 130;
 HEAP32[H_BASE + 268 >> 2] = F_BASE_ii + 76;
 HEAP32[H_BASE + 272 >> 2] = F_BASE_ii + 112;
 HEAP32[H_BASE + 276 >> 2] = F_BASE_vii + 20;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vii + 66;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vii + 46;
 HEAP32[H_BASE + 292 >> 2] = F_BASE_vii + 60;
 HEAP32[H_BASE + 296 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 300 >> 2] = F_BASE_ii + 94;
 HEAP32[H_BASE + 304 >> 2] = F_BASE_vii + 52;
 HEAP32[H_BASE + 308 >> 2] = F_BASE_iii + 20;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_ii + 158;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vii + 24;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_ii + 110;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_ii + 66;
 HEAP32[H_BASE + 340 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 344 >> 2] = F_BASE_ii + 24;
 HEAP32[H_BASE + 348 >> 2] = F_BASE_ii + 28;
 HEAP32[H_BASE + 352 >> 2] = F_BASE_vii + 48;
 HEAP32[H_BASE + 356 >> 2] = F_BASE_vii + 30;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_ii + 132;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 98;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_viiii + 4;
 HEAP32[H_BASE + 376 >> 2] = F_BASE_viii + 10;
 HEAP32[H_BASE + 380 >> 2] = F_BASE_vii + 54;
 HEAP32[H_BASE + 384 >> 2] = F_BASE_viii + 22;
 HEAP32[H_BASE + 388 >> 2] = F_BASE_iii + 16;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_ii + 142;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_viii + 24;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_vii + 58;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_vii + 56;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_ii + 74;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_ii + 154;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_iii + 8;
 HEAP32[H_BASE + 420 >> 2] = F_BASE_ii + 140;
 HEAP32[H_BASE + 424 >> 2] = F_BASE_ii + 38;
 HEAP32[H_BASE + 428 >> 2] = F_BASE_ii + 128;
 HEAP32[H_BASE + 432 >> 2] = F_BASE_ii + 72;
 HEAP32[H_BASE + 436 >> 2] = F_BASE_vii + 50;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_iii + 12;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_iii + 22;
 HEAP32[H_BASE + 448 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 452 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 456 >> 2] = F_BASE_viii + 18;
 HEAP32[H_BASE + 460 >> 2] = F_BASE_vii + 70;
 HEAP32[H_BASE + 464 >> 2] = F_BASE_vi + 58;
 HEAP32[H_BASE + 468 >> 2] = F_BASE_vii + 42;
 HEAP32[H_BASE + 472 >> 2] = F_BASE_vi + 50;
 HEAP32[H_BASE + 476 >> 2] = F_BASE_vi + 72;
 HEAP32[H_BASE + 480 >> 2] = F_BASE_vi + 46;
 HEAP32[H_BASE + 484 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 488 >> 2] = F_BASE_vi + 74;
 HEAP32[H_BASE + 492 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 496 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 500 >> 2] = F_BASE_ii + 30;
 HEAP32[H_BASE + 504 >> 2] = F_BASE_ii + 32;
 HEAP32[H_BASE + 508 >> 2] = F_BASE_ii + 82;
 HEAP32[H_BASE + 512 >> 2] = F_BASE_ii + 70;
 HEAP32[H_BASE + 516 >> 2] = F_BASE_ii + 138;
 HEAP32[H_BASE + 520 >> 2] = F_BASE_ii + 34;
 HEAP32[H_BASE + 524 >> 2] = F_BASE_ii + 80;
 HEAP32[H_BASE + 528 >> 2] = F_BASE_ii + 100;
 HEAP32[H_BASE + 532 >> 2] = F_BASE_ii + 104;
 HEAP32[H_BASE + 536 >> 2] = F_BASE_ii + 122;
 HEAP32[H_BASE + 540 >> 2] = F_BASE_ii + 126;
 HEAP32[H_BASE + 544 >> 2] = F_BASE_ii + 68;
 HEAP32[H_BASE + 548 >> 2] = F_BASE_ii + 52;
 HEAP32[H_BASE + 552 >> 2] = F_BASE_ii + 92;
 HEAP32[H_BASE + 556 >> 2] = F_BASE_ii + 86;
 HEAP32[H_BASE + 560 >> 2] = F_BASE_ii + 42;
 HEAP32[H_BASE + 564 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 568 >> 2] = F_BASE_ii + 106;
 HEAP32[H_BASE + 572 >> 2] = F_BASE_iii + 14;
 HEAP32[H_BASE + 576 >> 2] = F_BASE_v + 10;
 HEAP32[H_BASE + 580 >> 2] = F_BASE_v + 4;
 HEAP32[H_BASE + 584 >> 2] = F_BASE_iii + 18;
 HEAP32[H_BASE + 588 >> 2] = F_BASE_vii + 40;
 HEAP32[H_BASE + 592 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 596 >> 2] = F_BASE_vi + 56;
 HEAP32[H_BASE + 600 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 604 >> 2] = F_BASE_vi + 66;
 HEAP32[H_BASE + 608 >> 2] = F_BASE_v + 8;
 HEAP32[H_BASE + 612 >> 2] = F_BASE_ii + 88;
 HEAP32[H_BASE + 616 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 620 >> 2] = F_BASE_ii + 124;
 HEAP32[H_BASE + 624 >> 2] = F_BASE_v + 6;
 HEAP32[H_BASE + 628 >> 2] = F_BASE_ii + 114;
 HEAP32[H_BASE + 632 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 636 >> 2] = F_BASE_iii + 6;
 HEAP32[H_BASE + 640 >> 2] = F_BASE_ii + 96;
 HEAP32[H_BASE + 644 >> 2] = F_BASE_ii + 118;
 HEAP32[H_BASE + 648 >> 2] = F_BASE_viii + 20;
 HEAP32[H_BASE + 652 >> 2] = F_BASE_ii + 152;
 HEAP32[H_BASE + 656 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 660 >> 2] = F_BASE_ii + 90;
 HEAP32[H_BASE + 664 >> 2] = F_BASE_ii + 116;
 HEAP32[H_BASE + 668 >> 2] = F_BASE_ii + 134;
 HEAP32[H_BASE + 672 >> 2] = F_BASE_ii + 160;
 HEAP32[H_BASE + 676 >> 2] = F_BASE_vii + 64;
 HEAP32[H_BASE + 680 >> 2] = F_BASE_viii + 6;
 HEAP32[H_BASE + 684 >> 2] = F_BASE_ii + 78;
 HEAP32[H_BASE + 688 >> 2] = F_BASE_ii + 168;
 HEAP32[H_BASE + 692 >> 2] = F_BASE_vi + 62;
 HEAP32[H_BASE + 696 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 700 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 704 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 708 >> 2] = F_BASE_ii + 150;
 HEAP32[H_BASE + 712 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 716 >> 2] = F_BASE_ii + 136;
 HEAP32[H_BASE + 720 >> 2] = F_BASE_viii + 4;
 HEAP32[H_BASE + 724 >> 2] = F_BASE_ii + 102;
 HEAP32[H_BASE + 728 >> 2] = F_BASE_viii + 8;
 HEAP32[H_BASE + 740 >> 2] = F_BASE_vi + 68;
 HEAP32[H_BASE + 744 >> 2] = F_BASE_vi + 42;
 HEAP32[H_BASE + 748 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 760 >> 2] = F_BASE_vi + 76;
 HEAP32[H_BASE + 764 >> 2] = F_BASE_vi + 64;
 HEAP32[H_BASE + 768 >> 2] = F_BASE_viii + 26;
 HEAP32[H_BASE + 772 >> 2] = F_BASE_ii + 166;
 HEAP32[H_BASE + 776 >> 2] = F_BASE_vii + 62;
 HEAP32[H_BASE + 780 >> 2] = F_BASE_ii + 22;
 HEAP32[H_BASE + 784 >> 2] = F_BASE_ii + 36;
}
function __ZN7WebCore24SVGRadialGradientElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 __ZN7WebCore18SVGGradientElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i1 | 0, i2, i3);
 HEAP32[i1 >> 2] = H_BASE + 64;
 HEAP32[i1 + 92 >> 2] = H_BASE + 740;
 HEAP32[i1 + 96 >> 2] = H_BASE + 760;
 __ZN3WTF6StringC1EPKc(i10, H_BASE + 16 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 144 | 0, 0, i10);
 i3 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i10 = i3 | 0;
   i2 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i10 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 152 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 __ZN3WTF6StringC1EPKc(i9, H_BASE + 16 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 156 | 0, 1, i9);
 i3 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i9 = i3 | 0;
   i2 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i9 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 164 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 __ZN3WTF6StringC1EPKc(i8, H_BASE + 16 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 168 | 0, 2, i8);
 i3 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i8 = i3 | 0;
   i2 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i3);
    break;
   } else {
    HEAP32[i8 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i3 = i1 + 176 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 i3 = i7 | 0;
 HEAP32[i3 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 180 | 0, 0, i7);
 i7 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i3 = i7 | 0;
   i2 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i7);
    break;
   } else {
    HEAP32[i3 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i7 = i1 + 188 | 0;
 HEAP8[i7] = HEAP8[i7] & -4;
 i7 = i6 | 0;
 HEAP32[i7 >> 2] = 0;
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 192 | 0, 1, i6);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i2 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = i1 + 200 | 0;
 HEAP8[i6] = HEAP8[i6] & -4;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 __ZN7WebCore9SVGLengthC1ENS_13SVGLengthModeERKN3WTF6StringE(i1 + 204 | 0, 2, i5);
 i6 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i5 = i6 | 0;
   i2 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i5 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i6 = i1 + 212 | 0;
 HEAP8[i6] = HEAP8[i6] & -4;
 if (HEAP8[H_BASE + 800 | 0] | 0) {
  i11 = HEAP32[H_BASE + 864 >> 2] | 0;
 } else {
  i6 = __Znwj(20) | 0;
  i1 = i6;
  _memset(i6 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 864 >> 2] = i1;
  HEAP8[H_BASE + 800 | 0] = 1;
  i11 = i1;
 }
 if ((HEAP32[i11 + 12 >> 2] | 0) != 0) {
  STACKTOP = i4;
  return;
 }
 if (HEAP8[H_BASE + 848 | 0] | 0) {
  i12 = HEAP32[H_BASE + 912 >> 2] | 0;
 } else {
  i1 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i1, 6, 0, __ZN7WebCore8SVGNames6cxAttrE, (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 18 | 0, F_BASE_vii + 22 | 0);
  HEAP32[H_BASE + 912 >> 2] = i1;
  HEAP8[H_BASE + 848 | 0] = 1;
  i12 = i1;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i12);
 if (HEAP8[H_BASE + 840 | 0] | 0) {
  i13 = HEAP32[H_BASE + 904 >> 2] | 0;
 } else {
  i12 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i12, 6, 0, __ZN7WebCore8SVGNames6cyAttrE, (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 12 | 0, F_BASE_vii + 28 | 0);
  HEAP32[H_BASE + 904 >> 2] = i12;
  HEAP8[H_BASE + 840 | 0] = 1;
  i13 = i12;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i13);
 if (HEAP8[H_BASE + 856 | 0] | 0) {
  i14 = HEAP32[H_BASE + 920 >> 2] | 0;
 } else {
  i13 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i13, 6, 0, __ZN7WebCore8SVGNames5rAttrE, (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 22 | 0, F_BASE_vii + 18 | 0);
  HEAP32[H_BASE + 920 >> 2] = i13;
  HEAP8[H_BASE + 856 | 0] = 1;
  i14 = i13;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i14);
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  i15 = HEAP32[H_BASE + 888 >> 2] | 0;
 } else {
  i14 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i14, 6, 0, __ZN7WebCore8SVGNames6fxAttrE, (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 10 | 0, F_BASE_vii + 14 | 0);
  HEAP32[H_BASE + 888 >> 2] = i14;
  HEAP8[H_BASE + 824 | 0] = 1;
  i15 = i14;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i15);
 if (HEAP8[H_BASE + 816 | 0] | 0) {
  i16 = HEAP32[H_BASE + 880 >> 2] | 0;
 } else {
  i15 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i15, 6, 0, __ZN7WebCore8SVGNames6fyAttrE, (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 30 | 0, F_BASE_vii + 38 | 0);
  HEAP32[H_BASE + 880 >> 2] = i15;
  HEAP8[H_BASE + 816 | 0] = 1;
  i16 = i15;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i16);
 if (HEAP8[H_BASE + 832 | 0] | 0) {
  i17 = HEAP32[H_BASE + 896 >> 2] | 0;
 } else {
  i16 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i16, 6, 0, __ZN7WebCore8SVGNames6frAttrE, (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 34 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 896 >> 2] = i16;
  HEAP8[H_BASE + 832 | 0] = 1;
  i17 = i16;
 }
 __ZN7WebCore25SVGAttributeToPropertyMap11addPropertyEPKNS_15SVGPropertyInfoE(i11, i17);
 __ZN7WebCore25SVGAttributeToPropertyMap13addPropertiesERKS0_(i11, __ZN7WebCore18SVGGradientElement22attributeToPropertyMapEv() | 0);
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i2 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = i2 + 4 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == 0) {
   i12 = 8;
   i13 = 0;
  } else {
   i14 = i11 << 1;
   i12 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i14 | 0) ? i11 : i14;
   i13 = i11;
  }
  HEAP32[i10 >> 2] = i12;
  i10 = i2 + 8 | 0;
  HEAP32[i10 >> 2] = i12 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i12 * 12 & -1) | 0;
  L6 : do {
   if ((i13 | 0) != 0) {
    i12 = i6 | 0;
    i11 = 0;
    while (1) {
     i14 = i11 * 12 & -1 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     } else if ((i15 | 0) != (-1 | 0)) {
      __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i6, i2, i14 | 0);
      i15 = HEAP32[i12 >> 2] | 0;
      i16 = i14;
      HEAP32[i15 >> 2] = HEAP32[i16 >> 2];
      HEAP32[i15 + 4 >> 2] = HEAP32[i16 + 4 >> 2];
      HEAP32[i15 + 8 >> 2] = HEAP32[i16 + 8 >> 2];
     }
     i11 = i11 + 1 | 0;
     if ((i11 | 0) == (i13 | 0)) {
      break L6;
     }
    }
    _llvm_trap();
   }
  } while (0);
  HEAP32[i2 + 16 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(0);
  i17 = HEAP32[i8 >> 2] | 0;
  i18 = i10;
 } else {
  i17 = i9;
  i18 = i2 + 8 | 0;
 }
 i9 = HEAP32[i18 >> 2] | 0;
 i10 = i3;
 i13 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i10 + 2 >> 1] | 0) << 11 ^ i13 ^ i13 << 16;
 i13 = i3 + 4 | 0;
 i11 = i6 + (HEAPU16[i13 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i11 ^ (HEAPU16[i10 + 6 >> 1] | 0) << 11 ^ i11 << 16;
 i11 = (i6 >>> 11) + i6 | 0;
 i6 = i11 << 3 ^ i11;
 i11 = (i6 >>> 5) + i6 | 0;
 i6 = i11 << 2 ^ i11;
 i11 = (i6 >>> 15) + i6 | 0;
 i6 = (i11 << 10 ^ i11) & 16777215;
 i11 = (i6 | 0) == 0 ? 8388608 : i6;
 i6 = i3 | 0;
 i10 = (i11 >>> 23) + ~i11 | 0;
 i12 = i10 << 12 ^ i10;
 i10 = i12 >>> 7 ^ i12;
 i12 = i10 << 2 ^ i10;
 i10 = i12 >>> 20 ^ i12 | 1;
 i12 = 0;
 i16 = i11;
 i11 = 0;
 while (1) {
  i15 = i16 & i9;
  i19 = i17 + (i15 * 12 & -1) | 0;
  i14 = HEAP32[i19 >> 2] | 0;
  if ((i14 | 0) == 0) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == 0) {
    break;
   }
  }
  if ((i14 | 0) == (HEAP32[i6 >> 2] | 0)) {
   if ((HEAP32[i17 + (i15 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i13 >> 2] | 0)) {
    i20 = 17;
    break;
   }
  }
  i21 = (i11 | 0) == 0 ? i10 : i11;
  i12 = (i14 | 0) == -1 ? i19 : i12;
  i16 = i21 + i15 | 0;
  i11 = i21;
 }
 if ((i20 | 0) == 17) {
  i11 = i17 + ((HEAP32[i2 + 4 >> 2] | 0) * 12 & -1) | 0;
  i17 = i1;
  HEAP32[i17 >> 2] = i19;
  HEAP32[i17 + 4 >> 2] = i11;
  HEAP8[i1 + 8 | 0] = 0;
  STACKTOP = i5;
  return;
 }
 if ((i12 | 0) == 0) {
  i22 = i19;
  i23 = i2 + 16 | 0;
 } else {
  _memset(i12 | 0, 0, 12) | 0;
  i19 = i2 + 16 | 0;
  HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) - 1;
  i22 = i12;
  i23 = i19;
 }
 i19 = i3;
 i3 = i22;
 i12 = HEAP32[i19 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i19 >> 2];
 HEAP32[i3 + 4 >> 2] = i12;
 HEAP32[i22 + 8 >> 2] = HEAP32[i4 >> 2];
 i4 = i2 + 12 | 0;
 i12 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i12;
 i4 = i2 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i23 >> 2] | 0) + i12 << 1 | 0) < (i3 | 0)) {
  i24 = i22;
  i25 = i3;
 } else {
  i19 = (i3 | 0) == 0;
  if (i19) {
   i26 = 8;
  } else {
   i11 = i3 << 1;
   i26 = (i12 * 6 & -1 | 0) < (i11 | 0) ? i3 : i11;
  }
  i11 = HEAP32[i8 >> 2] | 0;
  HEAP32[i4 >> 2] = i26;
  HEAP32[i18 >> 2] = i26 - 1;
  HEAP32[i8 >> 2] = __ZN3WTF16fastZeroedMallocEj(i26 * 12 & -1) | 0;
  if (i19) {
   i27 = 0;
  } else {
   i19 = i7 | 0;
   i26 = 0;
   i18 = 0;
   while (1) {
    i12 = i11 + (i26 * 12 & -1) | 0;
    i17 = HEAP32[i12 >> 2] | 0;
    i16 = i17;
    if ((i16 | 0) == 0) {
     if ((HEAP32[i11 + (i26 * 12 & -1) + 4 >> 2] | 0) == 0 | (i17 | 0) == -1) {
      i28 = i18;
     } else {
      i20 = 29;
     }
    } else if ((i16 | 0) == (-1 | 0)) {
     i28 = i18;
    } else {
     i20 = 29;
    }
    if ((i20 | 0) == 29) {
     i20 = 0;
     __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i7, i2, i12 | 0);
     i16 = HEAP32[i19 >> 2] | 0;
     i17 = i16;
     i10 = i12;
     HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i17 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
     HEAP32[i17 + 8 >> 2] = HEAP32[i10 + 8 >> 2];
     i28 = (i12 | 0) == (i22 | 0) ? i16 : i18;
    }
    i16 = i26 + 1 | 0;
    if ((i16 | 0) == (i3 | 0)) {
     i27 = i28;
     break;
    } else {
     i26 = i16;
     i18 = i28;
    }
   }
  }
  HEAP32[i23 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i11);
  i24 = i27;
  i25 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i8 >> 2] | 0) + (i25 * 12 & -1) | 0;
 i25 = i1;
 HEAP32[i25 >> 2] = i24;
 HEAP32[i25 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i2 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 if ((i8 | 0) == 0) {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
  if ((i9 | 0) == 0) {
   i10 = 8;
  } else {
   i11 = i9 << 1;
   i10 = ((HEAP32[i2 + 12 >> 2] | 0) * 6 & -1 | 0) < (i11 | 0) ? i9 : i11;
  }
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i10, 0) | 0;
  i12 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i8;
 }
 i8 = HEAP32[i2 + 8 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i3 + 4 | 0;
 i9 = HEAP32[i11 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i13 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i11 >> 2] = i13;
  i14 = i13;
 } else {
  i14 = i9;
 }
 i9 = i14 & i8;
 i13 = i12 + (i9 << 2) | 0;
 i11 = i6 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 i15 = i3 | 0;
 HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
 i15 = i13 | 0;
 i3 = (HEAP32[i15 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i6);
 do {
  if (i3) {
   i16 = i13;
   i17 = 14;
  } else {
   i18 = (i14 >>> 23) + ~i14 | 0;
   i19 = i18 << 12 ^ i18;
   i18 = i19 >>> 7 ^ i19;
   i19 = i18 << 2 ^ i18;
   i18 = i19 >>> 20 ^ i19 | 1;
   i19 = 0;
   i20 = 0;
   i21 = i9;
   i22 = i13;
   i23 = i15;
   while (1) {
    i24 = HEAP32[i23 >> 2] | 0;
    if ((i24 | 0) == -1) {
     i25 = i22;
    } else {
     if ((i24 | 0) == (HEAP32[i10 >> 2] | 0)) {
      i17 = 11;
      break;
     } else {
      i25 = i20;
     }
    }
    i24 = (i19 | 0) == 0 ? i18 : i19;
    i26 = i24 + i21 & i8;
    i27 = i12 + (i26 << 2) | 0;
    i28 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i11 >> 2] = i28;
    i29 = i28 | 0;
    HEAP32[i29 >> 2] = (HEAP32[i29 >> 2] | 0) + 1;
    i29 = i27 | 0;
    i28 = (HEAP32[i29 >> 2] | 0) == (HEAP32[i11 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i6);
    if (i28) {
     i17 = 13;
     break;
    } else {
     i19 = i24;
     i20 = i25;
     i21 = i26;
     i22 = i27;
     i23 = i29;
    }
   }
   if ((i17 | 0) == 13) {
    if ((i25 | 0) == 0) {
     i16 = i27;
     i17 = 14;
     break;
    }
    i23 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i25 >> 2] = i23;
    i21 = i23 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) + 1;
    i21 = i2 + 16 | 0;
    HEAP32[i21 >> 2] = (HEAP32[i21 >> 2] | 0) - 1;
    i30 = i25;
    i31 = i21;
    break;
   } else if ((i17 | 0) == 11) {
    i21 = (HEAP32[i7 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
    i23 = i1;
    HEAP32[i23 >> 2] = i22;
    HEAP32[i23 + 4 >> 2] = i21;
    HEAP8[i1 + 8 | 0] = 0;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 if ((i17 | 0) == 14) {
  i30 = i16;
  i31 = i2 + 16 | 0;
 }
 i16 = i4 | 0;
 i4 = HEAP32[i16 >> 2] | 0;
 HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 __ZN7WebCore13QualifiedName5derefEv(i30);
 HEAP32[i30 >> 2] = HEAP32[i16 >> 2];
 i16 = i2 + 12 | 0;
 i4 = (HEAP32[i16 >> 2] | 0) + 1 | 0;
 HEAP32[i16 >> 2] = i4;
 i16 = i2 + 4 | 0;
 i17 = HEAP32[i16 >> 2] | 0;
 if (((HEAP32[i31 >> 2] | 0) + i4 << 1 | 0) < (i17 | 0)) {
  i32 = i30;
  i33 = i17;
 } else {
  if ((i17 | 0) == 0) {
   i34 = 8;
  } else {
   i31 = i17 << 1;
   i34 = (i4 * 6 & -1 | 0) < (i31 | 0) ? i17 : i31;
  }
  i31 = __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i2, i34, i30) | 0;
  i32 = i31;
  i33 = HEAP32[i16 >> 2] | 0;
 }
 i16 = (HEAP32[i7 >> 2] | 0) + (i33 << 2) | 0;
 i33 = i1;
 HEAP32[i33 >> 2] = i32;
 HEAP32[i33 + 4 >> 2] = i16;
 HEAP8[i1 + 8 | 0] = 1;
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
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
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i15 = i14;
 i16 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i17 = i16;
 HEAP32[i5 >> 2] = 0;
 do {
  if (__ZN7WebCore24SVGRadialGradientElement20isSupportedAttributeERKNS_13QualifiedNameE(0, i2) | 0) {
   i18 = HEAP32[i2 >> 2] | 0;
   if ((i18 | 0) == (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i7, 0, i3 | 0, i5, 0);
    i19 = i1 + 144 | 0;
    i20 = HEAP32[i6 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = HEAP32[i6 >> 2];
    HEAP32[i19 + 4 >> 2] = i20;
    i20 = i1 + 152 | 0;
    HEAP8[i20] = HEAP8[i20] | 2;
    break;
   }
   if ((i18 | 0) == (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i9, 1, i3 | 0, i5, 0);
    i20 = i1 + 156 | 0;
    i19 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i20 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i20 + 4 >> 2] = i19;
    i19 = i1 + 164 | 0;
    HEAP8[i19] = HEAP8[i19] | 2;
    break;
   }
   if ((i18 | 0) == (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i11, 2, i3 | 0, i5, 1);
    i19 = i1 + 168 | 0;
    i20 = HEAP32[i10 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = HEAP32[i10 >> 2];
    HEAP32[i19 + 4 >> 2] = i20;
    i20 = i1 + 176 | 0;
    HEAP8[i20] = HEAP8[i20] | 2;
    break;
   }
   if ((i18 | 0) == (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i13, 0, i3 | 0, i5, 0);
    i20 = i1 + 180 | 0;
    i19 = HEAP32[i12 + 4 >> 2] | 0;
    HEAP32[i20 >> 2] = HEAP32[i12 >> 2];
    HEAP32[i20 + 4 >> 2] = i19;
    i19 = i1 + 188 | 0;
    HEAP8[i19] = HEAP8[i19] | 2;
    break;
   }
   if ((i18 | 0) == (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0)) {
    __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i15, 1, i3 | 0, i5, 0);
    i19 = i1 + 192 | 0;
    i20 = HEAP32[i14 + 4 >> 2] | 0;
    HEAP32[i19 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i19 + 4 >> 2] = i20;
    i20 = i1 + 200 | 0;
    HEAP8[i20] = HEAP8[i20] | 2;
    break;
   }
   if ((i18 | 0) != (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0)) {
    break;
   }
   __ZN7WebCore9SVGLength9constructENS_13SVGLengthModeERKN3WTF6StringERNS_15SVGParsingErrorENS_27SVGLengthNegativeValuesModeE(i17, 2, i3 | 0, i5, 1);
   i18 = i1 + 204 | 0;
   i20 = HEAP32[i16 + 4 >> 2] | 0;
   HEAP32[i18 >> 2] = HEAP32[i16 >> 2];
   HEAP32[i18 + 4 >> 2] = i20;
   i20 = i1 + 212 | 0;
   HEAP8[i20] = HEAP8[i20] | 2;
  } else {
   __ZN7WebCore18SVGGradientElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, i2, i3);
  }
 } while (0);
 __ZN7WebCore10SVGElement27reportAttributeParsingErrorENS_15SVGParsingErrorERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i5 >> 2] | 0, i2, i3);
 STACKTOP = i4;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i9;
 HEAP32[i6 + 4 >> 2] = HEAP32[i2 >> 2];
 i2 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i2 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i2 + 8 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i10 = 4;
    break;
   }
   i12 = i11 + 4 | 0;
   i13 = (HEAP32[i12 >> 2] | 0) + 1 | 0;
   HEAP32[i12 >> 2] = i13;
   i14 = i11;
   i15 = i11;
   i16 = i13;
   i10 = 10;
  }
 } while (0);
 do {
  if ((i10 | 0) == 4) {
   i2 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i9, i2, i13);
   HEAP32[i11 >> 2] = H_BASE + 32;
   HEAP32[i11 + 24 >> 2] = i4;
   HEAP32[i11 + 28 >> 2] = 0;
   HEAP32[i11 + 32 >> 2] = 0;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i11 + 21 | 0] = 1;
   }
   i13 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i7 >> 2] = i12;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i8, i13 | 0, i6, i7);
   if ((HEAP8[i8 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] = HEAP32[i7 >> 2];
   }
   i13 = i11;
   if ((i11 | 0) == 0) {
    i17 = 0;
    i18 = i13;
    i19 = 1;
    break;
   }
   i14 = i12;
   i15 = i13;
   i16 = HEAP32[i11 + 4 >> 2] | 0;
   i10 = 10;
  }
 } while (0);
 if ((i10 | 0) == 10) {
  HEAP32[i14 + 4 >> 2] = i16 + 1;
  i17 = i14;
  i18 = i15;
  i19 = 0;
 }
 HEAP32[i1 >> 2] = i18;
 do {
  if ((i18 | 0) != 0) {
   i1 = i18 + 4 | 0;
   i15 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i15 + 1;
   i1 = i18 + 4 | 0;
   if ((i15 | 0) != 0) {
    HEAP32[i1 >> 2] = i15;
    break;
   }
   i15 = i1 - 4 | 0;
   if ((i15 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 127](i15);
  }
 } while (0);
 if (i19) {
  STACKTOP = i5;
  return;
 }
 i19 = i17 + 4 | 0;
 i17 = i19 | 0;
 i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
 if ((i18 | 0) != 0) {
  HEAP32[i17 >> 2] = i18;
  STACKTOP = i5;
  return;
 }
 i18 = i19 - 4 | 0;
 if ((i18 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 127](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement20isSupportedAttributeERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 96 | 0;
 if (HEAP8[H_BASE + 808 | 0] | 0) {
  i3 = HEAP32[H_BASE + 872 >> 2] | 0;
 } else {
  i4 = __ZN3WTF10fastMallocEj(20) | 0;
  i5 = i4;
  _memset(i4 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 872 >> 2] = i5;
  HEAP8[H_BASE + 808 | 0] = 1;
  i3 = i5;
 }
 if ((HEAP32[i3 + 12 >> 2] | 0) == 0) {
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 | 0, i3 | 0, __ZN7WebCore8SVGNames6cxAttrE, __ZN7WebCore8SVGNames6cxAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 16 | 0, HEAP32[H_BASE + 872 >> 2] | 0, __ZN7WebCore8SVGNames6cyAttrE, __ZN7WebCore8SVGNames6cyAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 32 | 0, HEAP32[H_BASE + 872 >> 2] | 0, __ZN7WebCore8SVGNames6fxAttrE, __ZN7WebCore8SVGNames6fxAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 48 | 0, HEAP32[H_BASE + 872 >> 2] | 0, __ZN7WebCore8SVGNames6fyAttrE, __ZN7WebCore8SVGNames6fyAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 64 | 0, HEAP32[H_BASE + 872 >> 2] | 0, __ZN7WebCore8SVGNames5rAttrE, __ZN7WebCore8SVGNames5rAttrE);
  __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_(i1 + 80 | 0, HEAP32[H_BASE + 872 >> 2] | 0, __ZN7WebCore8SVGNames6frAttrE, __ZN7WebCore8SVGNames6frAttrE);
  i6 = HEAP32[H_BASE + 872 >> 2] | 0;
 } else {
  i6 = i3;
 }
 if ((HEAP32[i6 >> 2] | 0) == 0) {
  i7 = 0;
  STACKTOP = i1;
  return i7 | 0;
 }
 i7 = (__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i6 | 0, i2) | 0) != 0;
 STACKTOP = i1;
 return i7 | 0;
}
function __ZN3WTF6VectorIN7WebCore8Gradient9ColorStopELj0ENS_15CrashOnOverflowEEaSERKS5_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
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
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i6 >>> 0 <= i8 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) == 0) {
     i9 = 0;
    } else {
     if ((i4 | 0) != 0) {
      HEAP32[i3 >> 2] = 0;
     }
     i10 = i1 | 0;
     i11 = HEAP32[i10 >> 2] | 0;
     if ((i11 | 0) == 0) {
      i9 = i8;
      break;
     }
     HEAP32[i10 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i11);
     i9 = HEAP32[i7 >> 2] | 0;
    }
   } while (0);
   i8 = HEAP32[i5 >> 2] | 0;
   if (i9 >>> 0 >= i8 >>> 0) {
    break;
   }
   i11 = i1 | 0;
   i10 = HEAP32[i11 >> 2] | 0;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i10 + (i12 * 20 & -1) | 0;
   if (i8 >>> 0 > 214748364 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i8 * 20 & -1) | 0;
   HEAP32[i7 >> 2] = (i14 >>> 0) / 20 & -1;
   i8 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) != 0) {
    i12 = i10;
    i14 = i8;
    while (1) {
     i8 = i14;
     i15 = i12;
     HEAP32[i8 >> 2] = HEAP32[i15 >> 2];
     HEAP32[i8 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
     HEAP32[i8 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
     HEAP32[i8 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
     HEAP32[i8 + 16 >> 2] = HEAP32[i15 + 16 >> 2];
     i15 = i12 + 20 | 0;
     if ((i15 | 0) == (i13 | 0)) {
      break;
     } else {
      i12 = i15;
      i14 = i14 + 20 | 0;
     }
    }
   }
   if ((i10 | 0) == 0) {
    break;
   }
   if ((HEAP32[i11 >> 2] | 0) == (i10 | 0)) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i10);
  }
 } while (0);
 i9 = i2 | 0;
 i2 = i1 | 0;
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, (HEAP32[i3 >> 2] | 0) * 20 & -1 | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = i4 + (i6 * 20 & -1) | 0;
 if ((i9 | 0) == (i6 | 0)) {
  i16 = i9;
 } else {
  i6 = i4 + (i9 * 20 & -1) | 0;
  i4 = (HEAP32[i2 >> 2] | 0) + (i9 * 20 & -1) | 0;
  while (1) {
   i9 = i4;
   i2 = i6;
   HEAP32[i9 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i9 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
   HEAP32[i9 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
   HEAP32[i9 + 12 >> 2] = HEAP32[i2 + 12 >> 2];
   HEAP32[i9 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
   i2 = i6 + 20 | 0;
   if ((i2 | 0) == (i14 | 0)) {
    break;
   } else {
    i6 = i2;
    i4 = i4 + 20 | 0;
   }
  }
  i16 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i16;
 return i1 | 0;
}
function __ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i5 = i2 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 if ((i6 | 0) == 0) {
  __ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, 0) | 0;
  i7 = HEAP32[i5 >> 2] | 0;
 } else {
  i7 = i6;
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
 i10 = i7 + (i3 << 2) | 0;
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i12 = i10;
   i13 = 9;
  } else {
   i14 = (i9 >>> 23) + ~i9 | 0;
   i15 = i14 << 12 ^ i14;
   i14 = i15 >>> 7 ^ i15;
   i15 = i14 << 2 ^ i14;
   i14 = i15 >>> 20 ^ i15 | 1;
   i15 = 0;
   i16 = 0;
   i17 = i3;
   i18 = i10;
   i19 = i11;
   while (1) {
    if ((i19 | 0) == (i8 | 0)) {
     i13 = 6;
     break;
    }
    i20 = (i19 | 0) == -1 ? i18 : i16;
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
  i13 = __ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i2, i25) | 0;
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
function __ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_(i1, i2) {
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
   i19 = i16 + (i14 << 2) | 0;
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
      i34 = i16 + (i33 << 2) | 0;
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
   i15 = (i5 | 0) == (i2 | 0) ? i30 : i12;
  }
  i16 = i11 + 1 | 0;
  if ((i16 | 0) == (i6 | 0)) {
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
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i1 + 4 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 i9 = i1 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i7 = __ZN3WTF10fastMallocEj(i2 << 2) | 0;
 if ((i2 | 0) > 0) {
  i11 = 0;
  while (1) {
   i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
   HEAP32[i7 + (i11 << 2) >> 2] = i12;
   i13 = i12 | 0;
   HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
   i11 = i11 + 1 | 0;
   if ((i11 | 0) >= (i2 | 0)) {
    break;
   }
  }
 }
 HEAP32[i9 >> 2] = i7;
 if ((i8 | 0) == 0) {
  HEAP32[i1 + 16 >> 2] = 0;
  i14 = 0;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 i7 = i6 | 0;
 i9 = i5 | 0;
 i2 = 0;
 i11 = 0;
 while (1) {
  i13 = i10 + (i2 << 2) | 0;
  i12 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i7 >> 2] = i12;
  i16 = i12 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  i16 = i13 | 0;
  i12 = (HEAP32[i16 >> 2] | 0) == (HEAP32[i7 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i6);
  do {
   if (i12) {
    i17 = i11;
   } else {
    if ((HEAP32[i16 >> 2] | 0) == -1) {
     i17 = i11;
     break;
    }
    __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i5, i1, i13);
    i18 = HEAP32[i9 >> 2] | 0;
    __ZN7WebCore13QualifiedNameD1Ev(i18);
    i19 = HEAP32[i16 >> 2] | 0;
    HEAP32[i18 >> 2] = i19;
    i20 = i19 | 0;
    HEAP32[i20 >> 2] = (HEAP32[i20 >> 2] | 0) + 1;
    i17 = (i13 | 0) == (i3 | 0) ? i18 : i11;
   }
  } while (0);
  i13 = i2 + 1 | 0;
  if ((i13 | 0) == (i8 | 0)) {
   break;
  } else {
   i2 = i13;
   i11 = i17;
  }
 }
 HEAP32[i1 + 16 >> 2] = 0;
 if ((i8 | 0) > 0) {
  i21 = 0;
 } else {
  i14 = i17;
  i15 = i10;
  __ZN3WTF8fastFreeEPv(i15);
  STACKTOP = i4;
  return i14 | 0;
 }
 while (1) {
  i1 = i10 + (i21 << 2) | 0;
  if ((HEAP32[i1 >> 2] | 0) != -1) {
   __ZN7WebCore13QualifiedNameD1Ev(i1);
  }
  i1 = i21 + 1 | 0;
  if ((i1 | 0) < (i8 | 0)) {
   i21 = i1;
  } else {
   i14 = i17;
   break;
  }
 }
 i15 = i10;
 __ZN3WTF8fastFreeEPv(i15);
 STACKTOP = i4;
 return i14 | 0;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = HEAP32[i2 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i8 = i3 + 4 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i10 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i3) | 0;
  HEAP32[i8 >> 2] = i10;
  i11 = i10;
 } else {
  i11 = i9;
 }
 i9 = i11 & i7;
 i10 = i6 + (i9 << 2) | 0;
 i8 = i5 | 0;
 i3 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 i12 = i3 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i10 | 0;
 i3 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i5);
 L4 : do {
  if (i3) {
   i13 = 0;
   i14 = i10;
  } else {
   i15 = (i11 >>> 23) + ~i11 | 0;
   i16 = i15 << 12 ^ i15;
   i15 = i16 >>> 7 ^ i16;
   i16 = i15 << 2 ^ i15;
   i15 = i16 >>> 20 ^ i16 | 1;
   i16 = 0;
   i17 = 0;
   i18 = i9;
   i19 = i10;
   i20 = i12;
   while (1) {
    i21 = HEAP32[i20 >> 2] | 0;
    if ((i21 | 0) == -1) {
     i22 = i19;
    } else {
     if ((i21 | 0) == (HEAP32[i2 >> 2] | 0)) {
      break;
     } else {
      i22 = i16;
     }
    }
    i21 = (i17 | 0) == 0 ? i15 : i17;
    i23 = i21 + i18 & i7;
    i24 = i6 + (i23 << 2) | 0;
    i25 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
    HEAP32[i8 >> 2] = i25;
    i26 = i25 | 0;
    HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 1;
    i26 = i24 | 0;
    i25 = (HEAP32[i26 >> 2] | 0) == (HEAP32[i8 >> 2] | 0);
    __ZN7WebCore13QualifiedNameD1Ev(i5);
    if (i25) {
     i13 = i22;
     i14 = i24;
     break L4;
    } else {
     i16 = i22;
     i17 = i21;
     i18 = i23;
     i19 = i24;
     i20 = i26;
    }
   }
   HEAP32[i1 >> 2] = i19;
   HEAP8[i1 + 4 | 0] = 1;
   STACKTOP = i4;
   return;
  }
 } while (0);
 HEAP32[i1 >> 2] = (i13 | 0) != 0 ? i13 : i14;
 HEAP8[i1 + 4 | 0] = 0;
 STACKTOP = i4;
 return;
}
function __ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 i6 = HEAP32[i1 >> 2] | 0;
 i1 = __ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE(i2) | 0;
 if ((i6 | 0) == 0) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i8 = i2 | 0;
 i2 = i1 & i5;
 i9 = i6 + (i2 << 2) | 0;
 i10 = i4 | 0;
 i11 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
 HEAP32[i10 >> 2] = i11;
 i12 = i11 | 0;
 HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 1;
 i12 = i9 | 0;
 i11 = (HEAP32[i12 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
 __ZN7WebCore13QualifiedNameD1Ev(i4);
 if (i11) {
  i7 = 0;
  STACKTOP = i3;
  return i7 | 0;
 }
 i11 = (i1 >>> 23) + ~i1 | 0;
 i1 = i11 << 12 ^ i11;
 i11 = i1 >>> 7 ^ i1;
 i1 = i11 << 2 ^ i11;
 i11 = i1 >>> 20 ^ i1 | 1;
 i1 = 0;
 i13 = i2;
 i2 = i9;
 i9 = i12;
 L7 : while (1) {
  i12 = HEAP32[i9 >> 2] | 0;
  do {
   if ((i12 | 0) != -1) {
    i14 = HEAP32[i8 >> 2] | 0;
    if ((i12 | 0) == (i14 | 0)) {
     i7 = i2;
     i15 = 12;
     break L7;
    }
    if ((HEAP32[i12 + 12 >> 2] | 0) != (HEAP32[i14 + 12 >> 2] | 0)) {
     break;
    }
    if ((HEAP32[i12 + 16 >> 2] | 0) == (HEAP32[i14 + 16 >> 2] | 0)) {
     i7 = i2;
     i15 = 13;
     break L7;
    }
   }
  } while (0);
  i12 = (i1 | 0) == 0 ? i11 : i1;
  i14 = i12 + i13 & i5;
  i16 = i6 + (i14 << 2) | 0;
  i17 = HEAP32[(__ZN7WebCore9nullQNameEv() | 0) >> 2] | 0;
  HEAP32[i10 >> 2] = i17;
  i18 = i17 | 0;
  HEAP32[i18 >> 2] = (HEAP32[i18 >> 2] | 0) + 1;
  i18 = i16 | 0;
  i17 = (HEAP32[i18 >> 2] | 0) == (HEAP32[i10 >> 2] | 0);
  __ZN7WebCore13QualifiedNameD1Ev(i4);
  if (i17) {
   i7 = 0;
   i15 = 14;
   break;
  } else {
   i1 = i12;
   i13 = i14;
   i2 = i16;
   i9 = i18;
  }
 }
 if ((i15 | 0) == 13) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 14) {
  STACKTOP = i3;
  return i7 | 0;
 } else if ((i15 | 0) == 12) {
  STACKTOP = i3;
  return i7 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 200 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 192 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 816 | 0] | 0) {
  i10 = HEAP32[H_BASE + 880 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames6fyAttrE, (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 30 | 0, F_BASE_vii + 38 | 0);
  HEAP32[H_BASE + 880 >> 2] = i8;
  HEAP8[H_BASE + 816 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 188 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 180 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  i10 = HEAP32[H_BASE + 888 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames6fxAttrE, (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 10 | 0, F_BASE_vii + 14 | 0);
  HEAP32[H_BASE + 888 >> 2] = i8;
  HEAP8[H_BASE + 824 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFrEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 212 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 204 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 832 | 0] | 0) {
  i10 = HEAP32[H_BASE + 896 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames6frAttrE, (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 34 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 896 >> 2] = i8;
  HEAP8[H_BASE + 832 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeCyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 164 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 156 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 840 | 0] | 0) {
  i10 = HEAP32[H_BASE + 904 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames6cyAttrE, (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 12 | 0, F_BASE_vii + 28 | 0);
  HEAP32[H_BASE + 904 >> 2] = i8;
  HEAP8[H_BASE + 840 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeCxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 152 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 144 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 848 | 0] | 0) {
  i10 = HEAP32[H_BASE + 912 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames6cxAttrE, (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 18 | 0, F_BASE_vii + 22 | 0);
  HEAP32[H_BASE + 912 >> 2] = i8;
  HEAP8[H_BASE + 848 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore24SVGRadialGradientElement12synchronizeREv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 16 | 0;
 if ((HEAP8[i1 + 176 | 0] & 1) == 0) {
  STACKTOP = i2;
  return;
 }
 __ZNK7WebCore9SVGLength13valueAsStringEv(i5, i1 + 168 | 0);
 i6 = i5 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i7 = i3 | 0;
   HEAP32[i7 >> 2] = 0;
   i8 = i7;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i7 = i3 | 0;
    HEAP32[i7 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i7;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i6 = i8 | 0;
   i3 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i3 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i6 >> 2] = i3;
    break;
   }
  }
 } while (0);
 if (HEAP8[H_BASE + 856 | 0] | 0) {
  i10 = HEAP32[H_BASE + 920 >> 2] | 0;
 } else {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 6, 0, __ZN7WebCore8SVGNames5rAttrE, (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 22 | 0, F_BASE_vii + 18 | 0);
  HEAP32[H_BASE + 920 >> 2] = i8;
  HEAP8[H_BASE + 856 | 0] = 1;
  i10 = i8;
 }
 __ZN7WebCore7Element28setSynchronizedLazyAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE(i1 | 0, HEAP32[i10 + 8 >> 2] | 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 if ((i4 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i5 = i4 | 0;
 i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
 if ((i10 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i4);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i5 >> 2] = i10;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = HEAP32[i2 + 8 >> 2] | 0;
 i2 = i3;
 i6 = (HEAPU16[i3 >> 1] | 0) - 1640531527 | 0;
 i7 = (HEAPU16[i2 + 2 >> 1] | 0) << 11 ^ i6 ^ i6 << 16;
 i6 = i3 + 4 | 0;
 i8 = i7 + (HEAPU16[i6 >> 1] | 0) + (i7 >>> 11) | 0;
 i7 = i8 ^ (HEAPU16[i2 + 6 >> 1] | 0) << 11 ^ i8 << 16;
 i8 = (i7 >>> 11) + i7 | 0;
 i7 = i8 << 3 ^ i8;
 i8 = (i7 >>> 5) + i7 | 0;
 i7 = i8 << 2 ^ i8;
 i8 = (i7 >>> 15) + i7 | 0;
 i7 = (i8 << 10 ^ i8) & 16777215;
 i8 = (i7 | 0) == 0 ? 8388608 : i7;
 i7 = i3 | 0;
 i3 = (i8 >>> 23) + ~i8 | 0;
 i2 = i3 << 12 ^ i3;
 i3 = i2 >>> 7 ^ i2;
 i2 = i3 << 2 ^ i3;
 i3 = i2 >>> 20 ^ i2 | 1;
 i2 = i8;
 i8 = 0;
 i9 = 0;
 while (1) {
  i10 = i2 & i5;
  i11 = i4 + (i10 * 12 & -1) | 0;
  i12 = HEAP32[i11 >> 2] | 0;
  if ((i12 | 0) == 0) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i13 = 4;
    break;
   }
  }
  if ((i12 | 0) == (HEAP32[i7 >> 2] | 0)) {
   if ((HEAP32[i4 + (i10 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
    i13 = 7;
    break;
   }
  }
  i14 = (i8 | 0) == 0 ? i3 : i8;
  i2 = i14 + i10 | 0;
  i8 = i14;
  i9 = (i12 | 0) == -1 ? i11 : i9;
 }
 if ((i13 | 0) == 4) {
  HEAP32[i1 >> 2] = (i9 | 0) != 0 ? i9 : i11;
  HEAP8[i1 + 4 | 0] = 0;
  return;
 } else if ((i13 | 0) == 7) {
  HEAP32[i1 >> 2] = i11;
  HEAP8[i1 + 4 | 0] = 1;
  return;
 }
}
function __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = HEAP32[i1 + 8 >> 2] | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 i1 = i2;
 i5 = (HEAPU16[i2 >> 1] | 0) - 1640531527 | 0;
 i6 = (HEAPU16[i1 + 2 >> 1] | 0) << 11 ^ i5 ^ i5 << 16;
 i5 = i2 + 4 | 0;
 i7 = i6 + (HEAPU16[i5 >> 1] | 0) + (i6 >>> 11) | 0;
 i6 = i7 ^ (HEAPU16[i1 + 6 >> 1] | 0) << 11 ^ i7 << 16;
 i7 = (i6 >>> 11) + i6 | 0;
 i6 = i7 << 3 ^ i7;
 i7 = (i6 >>> 5) + i6 | 0;
 i6 = i7 << 2 ^ i7;
 i7 = (i6 >>> 15) + i6 | 0;
 i6 = (i7 << 10 ^ i7) & 16777215;
 i7 = (i6 | 0) == 0 ? 8388608 : i6;
 if ((i4 | 0) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = (i7 >>> 23) + ~i7 | 0;
 i1 = i2 << 12 ^ i2;
 i2 = i1 >>> 7 ^ i1;
 i1 = i2 << 2 ^ i2;
 i2 = i1 >>> 20 ^ i1 | 1;
 i1 = i7;
 i7 = 0;
 while (1) {
  i9 = i1 & i3;
  i10 = i4 + (i9 * 12 & -1) | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  if ((i11 | 0) == (i6 | 0)) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
    i8 = i10;
    i12 = 10;
    break;
   }
  }
  if ((i11 | 0) == 0) {
   if ((HEAP32[i4 + (i9 * 12 & -1) + 4 >> 2] | 0) == 0) {
    i8 = 0;
    i12 = 11;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 11) {
  return i8 | 0;
 } else if ((i12 | 0) == 10) {
  return i8 | 0;
 }
 return 0;
}
function __ZNK7WebCore24SVGRadialGradientElement2fyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 816 | 0] | 0) {
  i4 = HEAP32[H_BASE + 880 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames6fyAttrE, (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 30 | 0, F_BASE_vii + 38 | 0);
  HEAP32[H_BASE + 880 >> 2] = i5;
  HEAP8[H_BASE + 816 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 192 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore24SVGRadialGradientElement2fxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  i4 = HEAP32[H_BASE + 888 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames6fxAttrE, (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 10 | 0, F_BASE_vii + 14 | 0);
  HEAP32[H_BASE + 888 >> 2] = i5;
  HEAP8[H_BASE + 824 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 180 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore24SVGRadialGradientElement2frEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 832 | 0] | 0) {
  i4 = HEAP32[H_BASE + 896 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames6frAttrE, (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 34 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 896 >> 2] = i5;
  HEAP8[H_BASE + 832 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 204 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore24SVGRadialGradientElement2cyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 840 | 0] | 0) {
  i4 = HEAP32[H_BASE + 904 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames6cyAttrE, (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 12 | 0, F_BASE_vii + 28 | 0);
  HEAP32[H_BASE + 904 >> 2] = i5;
  HEAP8[H_BASE + 840 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 156 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore24SVGRadialGradientElement2cxEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 848 | 0] | 0) {
  i4 = HEAP32[H_BASE + 912 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames6cxAttrE, (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 18 | 0, F_BASE_vii + 22 | 0);
  HEAP32[H_BASE + 912 >> 2] = i5;
  HEAP8[H_BASE + 848 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 144 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZNK7WebCore24SVGRadialGradientElement1rEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if (HEAP8[H_BASE + 856 | 0] | 0) {
  i4 = HEAP32[H_BASE + 920 >> 2] | 0;
 } else {
  i5 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i5, 6, 0, __ZN7WebCore8SVGNames5rAttrE, (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 22 | 0, F_BASE_vii + 18 | 0);
  HEAP32[H_BASE + 920 >> 2] = i5;
  HEAP8[H_BASE + 856 | 0] = 1;
  i4 = i5;
 }
 i5 = HEAP32[i4 + 12 >> 2] | 0;
 HEAP32[i3 >> 2] = i1;
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 >> 2];
 i5 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i3) | 0;
 do {
  if ((i5 | 0) != 0) {
   i3 = HEAP32[i5 + 8 >> 2] | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   if ((HEAP8[i3 + 20 | 0] & 1) == 0) {
    break;
   }
   i6 = HEAP32[(HEAP32[i3 + 32 >> 2] | 0) + 20 >> 2] | 0;
   STACKTOP = i2;
   return i6 | 0;
  }
 } while (0);
 i6 = i1 + 168 | 0;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i2 = i3 + 4 | 0;
 i3 = i2 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) != 0) {
  HEAP32[i3 >> 2] = i4;
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 i4 = i2 - 4 | 0;
 if ((i4 | 0) == 0) {
  i8 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 127](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 32;
 i2 = i1 + 28 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i3 + 12 >> 2] = 0;
 }
 i3 = i1 + 32 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   HEAP32[i4 + 12 >> 2] = 0;
   i5 = HEAP32[i3 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   i6 = i5 + 4 | 0;
   i5 = i6 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i6 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i2 = i3 + 4 | 0;
   i4 = i2 | 0;
   i7 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i4 >> 2] = i7;
    break;
   }
   i7 = i2 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 127](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement19svgAttributeChangedERKNS_13QualifiedNameE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if (!(__ZN7WebCore24SVGRadialGradientElement20isSupportedAttributeERKNS_13QualifiedNameE(0, i2) | 0)) {
  __ZN7WebCore18SVGGradientElement19svgAttributeChangedERKNS_13QualifiedNameE(i1 | 0, i2);
  return;
 }
 i2 = i1 | 0;
 __ZN7WebCore10SVGElement32updateRelativeLengthsInformationEbPS0_(i2, FUNCTION_TABLE_ii[HEAP32[(HEAP32[i1 >> 2] | 0) + 644 >> 2] & 255](i2) | 0, i2);
 i3 = i1 + 32 | 0;
 if ((HEAP32[i1 + 12 >> 2] & 2048 | 0) == 0) {
  i4 = i3 | 0;
 } else {
  i4 = HEAP32[i3 >> 2] | 0;
 }
 i3 = HEAP32[i4 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i4 = i3 + 20 | 0;
   i1 = HEAP32[i4 >> 2] | 0;
   if ((i1 & 1 | 0) != 0) {
    break;
   }
   HEAP32[i4 >> 2] = i1 | 1;
   __ZN7WebCore12RenderObject29markContainingBlocksForLayoutEbPNS_13RenderElementE(i3, 1, 0);
   if ((HEAP32[i4 >> 2] & 32768 | 0) == 0) {
    break;
   }
   __ZN7WebCore12RenderObject24setLayerNeedsFullRepaintEv(i3);
  }
 } while (0);
 __ZN7WebCore18SVGElementInstance31invalidateAllInstancesOfElementEPNS_10SVGElementE(i2);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFyWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 816 | 0] | 0) {
  i5 = HEAP32[H_BASE + 880 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames6fyAttrE, (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 30 | 0, F_BASE_vii + 38 | 0);
  HEAP32[H_BASE + 880 >> 2] = i6;
  HEAP8[H_BASE + 816 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 192 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFxWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  i5 = HEAP32[H_BASE + 888 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames6fxAttrE, (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 10 | 0, F_BASE_vii + 14 | 0);
  HEAP32[H_BASE + 888 >> 2] = i6;
  HEAP8[H_BASE + 824 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 180 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFrWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 832 | 0] | 0) {
  i5 = HEAP32[H_BASE + 896 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames6frAttrE, (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 34 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 896 >> 2] = i6;
  HEAP8[H_BASE + 832 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 204 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCyWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 840 | 0] | 0) {
  i5 = HEAP32[H_BASE + 904 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames6cyAttrE, (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 12 | 0, F_BASE_vii + 28 | 0);
  HEAP32[H_BASE + 904 >> 2] = i6;
  HEAP8[H_BASE + 840 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 156 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCxWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 848 | 0] | 0) {
  i5 = HEAP32[H_BASE + 912 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames6cxAttrE, (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 18 | 0, F_BASE_vii + 22 | 0);
  HEAP32[H_BASE + 912 >> 2] = i6;
  HEAP8[H_BASE + 848 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 144 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement22lookupOrCreateRWrapperEPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if (HEAP8[H_BASE + 856 | 0] | 0) {
  i5 = HEAP32[H_BASE + 920 >> 2] | 0;
 } else {
  i6 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i6, 6, 0, __ZN7WebCore8SVGNames5rAttrE, (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 22 | 0, F_BASE_vii + 18 | 0);
  HEAP32[H_BASE + 920 >> 2] = i6;
  HEAP8[H_BASE + 856 | 0] = 1;
  i5 = i6;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i4, i2, i5, i2 + 168 | 0);
 HEAP32[i1 >> 2] = HEAP32[i4 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore24SVGRadialGradientElement22selfHasRelativeLengthsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement2cxEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement2cyEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement1rEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement2fxEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 if (((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement2fyEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0) {
  i2 = 1;
  return i2 | 0;
 }
 i2 = ((__ZNK7WebCore9SVGLength8unitTypeEv(__ZNK7WebCore24SVGRadialGradientElement2frEv(i1) | 0) | 0) - 2 | 0) >>> 0 < 3 >>> 0;
 return i2 | 0;
}
function __ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 >> 2] | 0;
 i1 = HEAP32[__ZN3WTF8nullAtomE >> 2] | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) != (i1 | 0)) {
  i3 = i1;
  i1 = (i3 & 65535) - 1640531527 | 0;
  i4 = i3 >>> 16 << 11 ^ i1 ^ i1 << 16;
  i1 = HEAP32[i2 + 12 >> 2] | 0;
  i3 = (i4 >>> 11) + i4 + (i1 & 65535) | 0;
  i4 = i3 ^ i1 >>> 16 << 11 ^ i3 << 16;
  i3 = HEAP32[i2 + 16 >> 2] | 0;
  i1 = i4 + (i3 & 65535) + (i4 >>> 11) | 0;
  i4 = i1 ^ i3 >>> 16 << 11 ^ i1 << 16;
  i1 = (i4 >>> 11) + i4 | 0;
  i4 = i1 << 3 ^ i1;
  i1 = (i4 >>> 5) + i4 | 0;
  i4 = i1 << 2 ^ i1;
  i1 = (i4 >>> 15) + i4 | 0;
  i4 = (i1 << 10 ^ i1) & 16777215;
  i5 = (i4 | 0) == 0 ? 8388608 : i4;
  return i5 | 0;
 }
 i4 = i2 + 4 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i5 = i1;
  return i5 | 0;
 }
 i1 = __ZNK7WebCore13QualifiedName17QualifiedNameImpl11computeHashEv(i2) | 0;
 HEAP32[i4 >> 2] = i1;
 i5 = i1;
 return i5 | 0;
}
function __ZThn96_N7WebCore24SVGRadialGradientElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 216 + 120 | 0;
 HEAP32[i2 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i2 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i2 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i1 = HEAP32[i2 + 132 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 124 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 + 116 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  __ZN7WebCore10SVGElementD2Ev(i5);
  i6 = i2;
  __ZdlPv(i6);
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i2 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i2;
 __ZN7WebCore10SVGElementD2Ev(i5);
 i6 = i2;
 __ZdlPv(i6);
 return;
}
function __ZThn92_N7WebCore24SVGRadialGradientElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 - 216 + 124 | 0;
 HEAP32[i2 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i2 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i2 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i1 = HEAP32[i2 + 132 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 124 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 + 116 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  __ZN7WebCore10SVGElementD2Ev(i5);
  i6 = i2;
  __ZdlPv(i6);
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i2 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i2;
 __ZN7WebCore10SVGElementD2Ev(i5);
 i6 = i2;
 __ZdlPv(i6);
 return;
}
function __ZN7WebCore24SVGRadialGradientElementD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i1 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i1 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
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
 i2 = i1 + 124 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 116 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore10SVGElementD2Ev(i5);
  i6 = i1;
  __ZdlPv(i6);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i5);
 i6 = i1;
 __ZdlPv(i6);
 return;
}
function __ZThn96_N7WebCore24SVGRadialGradientElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 216 + 120 | 0;
 HEAP32[i2 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i2 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i2 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i1 = HEAP32[i2 + 132 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 124 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 + 116 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  __ZN7WebCore10SVGElementD2Ev(i5);
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i2 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i2;
 __ZN7WebCore10SVGElementD2Ev(i5);
 return;
}
function __ZThn92_N7WebCore24SVGRadialGradientElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 - 216 + 124 | 0;
 HEAP32[i2 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i2 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i2 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i1 = HEAP32[i2 + 132 >> 2] | 0;
 do {
  if ((i1 | 0) != 0) {
   i3 = i1 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i1);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i1 = i2 + 124 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 + 116 | 0;
 i4 = HEAP32[i1 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i2;
  __ZN7WebCore10SVGElementD2Ev(i5);
  return;
 }
 HEAP32[i1 >> 2] = 0;
 HEAP32[i2 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i2;
 __ZN7WebCore10SVGElementD2Ev(i5);
 return;
}
function __ZN7WebCore24SVGRadialGradientElementD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 8;
 HEAP32[i1 + 92 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 684;
 HEAP32[i1 + 96 >> 2] = __ZTVN7WebCore18SVGGradientElementE + 704;
 i2 = HEAP32[i1 + 132 >> 2] | 0;
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
 i2 = i1 + 124 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 116 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1 | 0;
  __ZN7WebCore10SVGElementD2Ev(i5);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 120 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i1 | 0;
 __ZN7WebCore10SVGElementD2Ev(i5);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement14fyPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 816 | 0] | 0) {
  i1 = HEAP32[H_BASE + 880 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames6fyAttrE, (HEAP32[__ZN7WebCore8SVGNames6fyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 30 | 0, F_BASE_vii + 38 | 0);
  HEAP32[H_BASE + 880 >> 2] = i2;
  HEAP8[H_BASE + 816 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement14fxPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 824 | 0] | 0) {
  i1 = HEAP32[H_BASE + 888 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames6fxAttrE, (HEAP32[__ZN7WebCore8SVGNames6fxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 10 | 0, F_BASE_vii + 14 | 0);
  HEAP32[H_BASE + 888 >> 2] = i2;
  HEAP8[H_BASE + 824 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement14frPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 832 | 0] | 0) {
  i1 = HEAP32[H_BASE + 896 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames6frAttrE, (HEAP32[__ZN7WebCore8SVGNames6frAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 34 | 0, F_BASE_vii + 44 | 0);
  HEAP32[H_BASE + 896 >> 2] = i2;
  HEAP8[H_BASE + 832 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement14cyPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 840 | 0] | 0) {
  i1 = HEAP32[H_BASE + 904 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames6cyAttrE, (HEAP32[__ZN7WebCore8SVGNames6cyAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 12 | 0, F_BASE_vii + 28 | 0);
  HEAP32[H_BASE + 904 >> 2] = i2;
  HEAP8[H_BASE + 840 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement14cxPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 848 | 0] | 0) {
  i1 = HEAP32[H_BASE + 912 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames6cxAttrE, (HEAP32[__ZN7WebCore8SVGNames6cxAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 18 | 0, F_BASE_vii + 22 | 0);
  HEAP32[H_BASE + 912 >> 2] = i2;
  HEAP8[H_BASE + 848 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZN7WebCore24SVGRadialGradientElement13rPropertyInfoEv() {
 var i1 = 0, i2 = 0;
 if (HEAP8[H_BASE + 856 | 0] | 0) {
  i1 = HEAP32[H_BASE + 920 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __ZN3WTF10fastMallocEj(24) | 0;
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i2, 6, 0, __ZN7WebCore8SVGNames5rAttrE, (HEAP32[__ZN7WebCore8SVGNames5rAttrE >> 2] | 0) + 12 | 0, F_BASE_vi + 22 | 0, F_BASE_vii + 18 | 0);
  HEAP32[H_BASE + 920 >> 2] = i2;
  HEAP8[H_BASE + 856 | 0] = 1;
  i1 = i2;
  return i1 | 0;
 }
 return 0;
}
function __ZThn92_N7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = i1 - 144 + 52 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i2 = i1 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i4 + 132 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i1;
 do {
  if ((i5 | 0) != 0) {
   i1 = i5 | 0;
   i2 = (HEAP32[i1 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i1 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i4 + 136 | 0;
 HEAP8[i5] = HEAP8[i5] & -3 | (i3 & 1) << 1;
 return;
}
function __ZN7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) != 0) {
  i2 = i4 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 i2 = i1 + 132 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = i4;
 do {
  if ((i5 | 0) != 0) {
   i4 = i5 | 0;
   i2 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i2 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    break;
   } else {
    HEAP32[i4 >> 2] = i2;
    break;
   }
  }
 } while (0);
 i5 = i1 + 136 | 0;
 HEAP8[i5] = HEAP8[i5] & -3 | (i3 & 1) << 1;
 return;
}
function __ZN7WebCore24SVGRadialGradientElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 i5 = i4 | 0;
 i6 = __ZN3WTF10fastMallocEj(296) | 0;
 HEAP32[i5 >> 2] = HEAP32[i3 >> 2];
 __ZN7WebCore31RenderSVGResourceRadialGradientC1ERNS_24SVGRadialGradientElementEN3WTF7PassRefINS_11RenderStyleEEE(i6, i2, i5);
 HEAP32[i1 >> 2] = i6;
 STACKTOP = i4;
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
function viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore24SVGRadialGradientElement27localAttributeToPropertyMapEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 800 | 0] | 0) {
  i2 = HEAP32[H_BASE + 864 >> 2] | 0;
  return i2 | 0;
 } else {
  i1 = __Znwj(20) | 0;
  i3 = i1;
  _memset(i1 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 864 >> 2] = i3;
  HEAP8[H_BASE + 800 | 0] = 1;
  i2 = i3;
  return i2 | 0;
 }
 return 0;
}
function viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
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
function __ZN7WebCore24SVGRadialGradientElement22attributeToPropertyMapEv() {
 var i1 = 0, i2 = 0, i3 = 0;
 if (HEAP8[H_BASE + 800 | 0] | 0) {
  i1 = HEAP32[H_BASE + 864 >> 2] | 0;
  return i1 | 0;
 } else {
  i2 = __Znwj(20) | 0;
  i3 = i2;
  _memset(i2 | 0, 0, 20) | 0;
  HEAP32[H_BASE + 864 >> 2] = i3;
  HEAP8[H_BASE + 800 | 0] = 1;
  i1 = i3;
  return i1 | 0;
 }
 return 0;
}
function iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return __ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb(i1 | 0, i2 | 0, i3 | 0, i4 | 0) | 0;
}
function __ZN7WebCore24SVGRadialGradientElement6createERKNS_13QualifiedNameERNS_8DocumentE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = __Znwj(216) | 0;
 __ZN7WebCore24SVGRadialGradientElementC2ERKNS_13QualifiedNameERNS_8DocumentE(i4, i2, i3);
 HEAP32[i1 >> 2] = i4;
 return;
}
function vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE(i1 | 0, i2 | 0);
}
function __ZThn96_N7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 - 144 + 188 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE(i1 | 0, i2 | 0, i3 | 0);
}
function __ZN7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 i4 = i1 + 140 | 0;
 HEAP8[i4] = HEAP8[i2] & 1;
 i2 = i4 + 1 | 0;
 HEAP8[i2] = HEAP8[i2] & -3 | (i3 & 1) << 1;
 return;
}
function vii___ZN7WebCore18SVGGradientElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore18SVGGradientElement15childrenChangedERKNS_13ContainerNode11ChildChangeE(i1 | 0, i2 | 0);
}
function iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return __ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3_(i1 | 0, i2 | 0, i3 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE(i1 | 0, i2 | 0) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE(i1 | 0, i2 | 0);
}
function iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi(i1 | 0, i2 | 0, i3 | 0);
}
function iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE(i1 | 0, i2 | 0) | 0;
}
function iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE(i1 | 0, i2 | 0) | 0;
}
function viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi(i1 | 0, i2 | 0, i3 | 0);
}
function viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element5focusEbNS_14FocusDirectionE(i1 | 0, i2 | 0, i3 | 0);
}
function v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper() {
 __ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE();
}
function iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return __ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE(i1 | 0, i2 | 0) | 0;
}
function vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE(i1 | 0, i2 | 0);
}
function dynCall_iiiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 return FUNCTION_TABLE_iiiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0) | 0;
}
function __ZNK7WebCore4Node22scriptExecutionContextEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[(HEAP32[i1 + 20 >> 2] | 0) + 8 >> 2] | 0;
 return ((i2 | 0) == 0 ? 0 : i2 + 88 | 0) | 0;
}
function vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE(i1 | 0, i2 | 0);
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore4Node17handleLocalEventsERNS_5EventE(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv(i1 | 0) | 0;
}
function viii___ZN7WebCore7Element9setActiveEbb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9setActiveEbb(i1 | 0, i2 | 0, i3 | 0);
}
function vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv(i1 | 0);
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFyEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement13synchronizeFyEv(i1);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFxEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement13synchronizeFxEv(i1);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeFrEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement13synchronizeFrEv(i1);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeCyEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement13synchronizeCyEv(i1);
 return;
}
function __ZN7WebCore24SVGRadialGradientElement13synchronizeCxEPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement13synchronizeCxEv(i1);
 return;
}
function viii___ZN7WebCore7Element9cloneNodeEb__wrapper(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 __ZN7WebCore7Element9cloneNodeEb(i1 | 0, i2 | 0, i3 | 0);
}
function vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element21updateFocusAppearanceEb(i1 | 0, i2 | 0);
}
function __ZN7WebCore24SVGRadialGradientElement12synchronizeREPNS_10SVGElementE(i1) {
 i1 = i1 | 0;
 __ZN7WebCore24SVGRadialGradientElement12synchronizeREv(i1);
 return;
}
function ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element27matchesReadWritePseudoClassEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore13ContainerNode11boundingBoxEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore10SVGElement15accessKeyActionEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element25shouldAppearIndeterminateEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseWheelEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node29willRespondToMouseClickEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node28willRespondToMouseMoveEventsEv(i1 | 0) | 0;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper() {
 __ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv();
}
function ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element22isSpellCheckingEnabledEv(i1 | 0) | 0;
}
function v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper() {
 __ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE();
}
function v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper() {
 __ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE();
}
function vii___ZN7WebCore7Element13setScrollLeftEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element13setScrollLeftEi(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore10SVGElement16isMouseFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node24willRespondToTouchEventsEv(i1 | 0) | 0;
}
function ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore10SVGElement17svgLoadEventTimerEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element12setScrollTopEi__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element12setScrollTopEi(i1 | 0, i2 | 0);
}
function ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element20shouldUseInputMethodEv(i1 | 0) | 0;
}
function vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore10SVGElement21finishParsingChildrenEv(i1 | 0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 31](i2 | 0, i3 | 0, i4 | 0);
}
function ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore11EventTarget13isMessagePortEv(i1 | 0) | 0;
}
function vii___ZN7WebCore7Element10setHoveredEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element10setHoveredEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node20eventTargetInterfaceEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node21ensureEventTargetDataEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element23removeAllEventListenersEv(i1 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function vii___ZNK7WebCore10SVGElement5titleEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore10SVGElement5titleEv(i1 | 0, i2 | 0);
}
function vii___ZNK7WebCore7Element8nodeNameEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element8nodeNameEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18offsetInCharactersEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node18maxCharacterOffsetEv(i1 | 0) | 0;
}
function ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore11EventTarget11toDOMWindowEv(i1 | 0) | 0;
}
function vii___ZNK7WebCore7Element7baseURIEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore7Element7baseURIEv(i1 | 0, i2 | 0);
}
function vii___ZN7WebCore7Element8setFocusEb__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore7Element8setFocusEb(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14shadowPseudoIdEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element14imageSourceURLEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore4Node17canStartSelectionEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element20beginParsingChildrenEv(i1 | 0);
}
function vii___ZNK7WebCore4Node9nodeValueEv__wrapper(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore4Node9nodeValueEv(i1 | 0, i2 | 0);
}
function ii___ZNK7WebCore7Element13supportsFocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element13supportsFocusEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element19willAttachRenderersEv(i1 | 0);
}
function ii___ZN7WebCore7Element13focusDelegateEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element13focusDelegateEv(i1 | 0) | 0;
}
function vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didDetachRenderersEv(i1 | 0);
}
function vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element18didAttachRenderersEv(i1 | 0);
}
function ii___ZNK7WebCore7Element11isFocusableEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element11isFocusableEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element12scrollHeightEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element12scrollHeightEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node15eventTargetDataEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node15eventTargetDataEv(i1 | 0) | 0;
}
function __ZThn96_NK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 - 144 + 188 | 0;
}
function ii___ZN7WebCore7Element11scrollWidthEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element11scrollWidthEv(i1 | 0) | 0;
}
function ii___ZN7WebCore4Node14toInputElementEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node14toInputElementEv(i1 | 0) | 0;
}
function ii___ZN7WebCore13StyledElement5styleEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore13StyledElement5styleEv(i1 | 0) | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 31](i2 | 0, i3 | 0) | 0;
}
function ii___ZN7WebCore7Element10scrollLeftEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element10scrollLeftEv(i1 | 0) | 0;
}
function vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node18dispatchInputEventEv(i1 | 0);
}
function v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper() {
 __ZN7WebCore10SVGElement22customStyleForRendererEv();
}
function ii___ZNK7WebCore7Element8tabIndexEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8tabIndexEv(i1 | 0) | 0;
}
function ii___ZNK7WebCore7Element8nodeTypeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZNK7WebCore7Element8nodeTypeEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element9scrollTopEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element9scrollTopEv(i1 | 0) | 0;
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
function vi___ZN7WebCore4Node16derefEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node16derefEventTargetEv(i1 | 0);
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function ii___ZN7WebCore7Element7onfocusEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onfocusEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element7onerrorEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element7onerrorEv(i1 | 0) | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 127](i2 | 0, i3 | 0);
}
function __ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function vi___ZN7WebCore4Node14refEventTargetEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore4Node14refEventTargetEv(i1 | 0);
}
function __ZNK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv(i1) {
 i1 = i1 | 0;
 return i1 + 140 | 0;
}
function __ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore7Element6onloadEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onloadEv(i1 | 0) | 0;
}
function ii___ZN7WebCore7Element6onblurEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore7Element6onblurEv(i1 | 0) | 0;
}
function __ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function ii___ZN7WebCore4Node6toNodeEv__wrapper(i1) {
 i1 = i1 | 0;
 return __ZN7WebCore4Node6toNodeEv(i1 | 0) | 0;
}
function __ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return 0;
}
function __ZNK7WebCore7Element12namespaceURIEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 16 | 0;
}
function __ZNK7WebCore7Element6targetEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 >> 2] = 0;
 return;
}
function b0(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(0);
 return 0;
}
function __ZNK7WebCore7Element9localNameEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 12 | 0;
}
function __ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function vi___ZN7WebCore7Element4blurEv__wrapper(i1) {
 i1 = i1 | 0;
 __ZN7WebCore7Element4blurEv(i1 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 255](i2 | 0) | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore18SVGGradientElement28needsPendingResourceHandlingEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element6prefixEv(i1) {
 i1 = i1 | 0;
 return (HEAP32[i1 + 44 >> 2] | 0) + 8 | 0;
}
function __ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(8);
}
function __ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 127](i2 | 0);
}
function __ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element31documentWillSuspendForPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element30willStopBeingFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element30documentDidResumeFromPageCacheEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element29privateBrowsingStateDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore10SVGElement25synchronizeSystemLanguageEv(i1) {
 i1 = i1 | 0;
 return;
}
function b4(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(4);
 return 0;
}
function __ZNK7WebCore10SVGElement20isSVGGraphicsElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element25isValidFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore10SVGElement21supplementalTransformEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element23canContainRangeEndPointEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZN7WebCore7Element26didBecomeFullscreenElementEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element22isDefaultButtonForFormEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isRequiredFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isOptionalFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element21isDisabledFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element20isFormControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element19isSpinButtonElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement15supportsMarkersEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element22visibilityStateChangedEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element18isFrameElementBaseEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node21isMediaControlElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isGradientStopEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement14isFilterEffectEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node24startLoadingDynamicSheetEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore7Element17isTextFormControlEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node20isInsertionPointNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isTextContentEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement13isSMILElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore7Element20mediaVolumeDidChangeEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZN7WebCore7Element20buildPendingResourceEv(i1) {
 i1 = i1 | 0;
 return;
}
function __ZNK7WebCore4Node19isFrameOwnerElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node19isCharacterDataNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore4Node16nonRendererStyleEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12willValidateEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore7Element12isOutOfRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isPluginElementEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isMediaControlsEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node15isAttributeNodeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore4Node14customPseudoIdEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore10SVGElement7isValidEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore7Element9isInRangeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZN7WebCore4Node11sheetLoadedEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function b7(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(7);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 15]();
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
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiiii = [b0,b0,iiiii___ZN7WebCore10SVGElement19removeEventListenerERKN3WTF12AtomicStringEPNS_13EventListenerEb__wrapper,b0,iiiii___ZN7WebCore10SVGElement16addEventListenerERKN3WTF12AtomicStringENS1_10PassRefPtrINS_13EventListenerEEEb__wrapper,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore7Element29privateBrowsingStateDidChangeEv,b1,__ZN7WebCore7Element20buildPendingResourceEv,b1,vi___ZN7WebCore4Node16derefEventTargetEv__wrapper,b1,__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv,b1,__ZN7WebCore24SVGRadialGradientElement13synchronizeFxEPNS_10SVGElementE,b1,__ZN7WebCore24SVGRadialGradientElement13synchronizeCyEPNS_10SVGElementE,b1,__ZN7WebCore7Element22visibilityStateChangedEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev,b1,__ZN7WebCore24SVGRadialGradientElement13synchronizeCxEPNS_10SVGElementE,b1,vi___ZN7WebCore7Element19willDetachRenderersEv__wrapper,b1,__ZN7WebCore24SVGRadialGradientElement12synchronizeREPNS_10SVGElementE,b1,vi___ZN7WebCore4Node18dispatchInputEventEv__wrapper,b1,vi___ZN7WebCore7Element19willAttachRenderersEv__wrapper,b1,__ZN7WebCore4Node24startLoadingDynamicSheetEv
  ,b1,__ZN7WebCore24SVGRadialGradientElement13synchronizeFyEPNS_10SVGElementE,b1,vi___ZN7WebCore10SVGElement21finishParsingChildrenEv__wrapper,b1,__ZN7WebCore24SVGRadialGradientElement13synchronizeFrEPNS_10SVGElementE,b1,__ZN7WebCore7Element30willStopBeingFullscreenElementEv,b1,__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv,b1,vi___ZN7WebCore7Element23removeAllEventListenersEv__wrapper,b1,__ZThn92_N7WebCore24SVGRadialGradientElementD0Ev,b1,__ZN7WebCore24SVGRadialGradientElementD0Ev,b1,__ZN7WebCore7Element20mediaVolumeDidChangeEv,b1,vi___ZN7WebCore7Element20beginParsingChildrenEv__wrapper,b1,__ZN7WebCore7Element31documentWillSuspendForPageCacheEv,b1,vi___ZN7WebCore4Node14refEventTargetEv__wrapper,b1,vi___ZN7WebCore11EventTarget31uncaughtExceptionInEventHandlerEv__wrapper,b1,vi___ZN7WebCore7Element18didAttachRenderersEv__wrapper,b1,vi___ZN7WebCore7Element4blurEv__wrapper
  ,b1,__ZN7WebCore24SVGRadialGradientElementD1Ev,b1,__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv,b1,__ZThn96_N7WebCore24SVGRadialGradientElementD0Ev,b1,vi___ZN7WebCore7Element18didDetachRenderersEv__wrapper,b1,__ZThn92_N7WebCore24SVGRadialGradientElementD1Ev,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev,b1,__ZN7WebCore7Element30documentDidResumeFromPageCacheEv,b1,__ZN7WebCore7Element26didBecomeFullscreenElementEv,b1,__ZThn96_N7WebCore24SVGRadialGradientElementD1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,vii___ZN7WebCore7Element10setOnfocusEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZNK7WebCore7Element6targetEv,b2,vii___ZNK7WebCore7Element8nodeNameEv__wrapper,b2,__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE,b2,vii___ZNK7WebCore13ContainerNode11boundingBoxEv__wrapper,b2,vii___ZN7WebCore7Element9setOnloadEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFxWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore7Element10setOnerrorEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,__ZN7WebCore24SVGRadialGradientElement22lookupOrCreateRWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore4Node17handleLocalEventsERNS_5EventE__wrapper,b2,__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCxWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore7Element9setOnblurEN3WTF10PassRefPtrINS_13EventListenerEEE__wrapper,b2,vii___ZNK7WebCore7Element7baseURIEv__wrapper,b2,__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCyWrapperEPNS_10SVGElementE
  ,b2,vii___ZN7WebCore7Element12setScrollTopEi__wrapper,b2,__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE,b2,vii___ZN7WebCore10SVGElement11removedFromERNS_13ContainerNodeE__wrapper,b2,__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb,b2,__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFyWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore7Element14didRecalcStyleENS_5Style6ChangeE__wrapper,b2,vii___ZNK7WebCore10SVGElement5titleEv__wrapper,b2,__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFrWrapperEPNS_10SVGElementE,b2,vii___ZN7WebCore4Node20didMoveToNewDocumentEPNS_8DocumentE__wrapper,b2,vii___ZN7WebCore7Element13setScrollLeftEi__wrapper,b2,vii___ZN7WebCore10SVGElement15accessKeyActionEb__wrapper,b2,vii___ZN7WebCore18SVGGradientElement15childrenChangedERKNS_13ContainerNode11ChildChangeE__wrapper,b2,__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_,b2,vii___ZN7WebCore7Element8setFocusEb__wrapper,b2,vii___ZN7WebCore7Element10setHoveredEb__wrapper
  ,b2,vii___ZNK7WebCore13StyledElement27addSubresourceAttributeURLsERN3WTF11ListHashSetINS_3URLELj256ENS_7URLHashEEE__wrapper,b2,__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb,b2,__ZN7WebCore24SVGRadialGradientElement19svgAttributeChangedERKNS_13QualifiedNameE,b2,vii___ZN7WebCore4Node19defaultEventHandlerEPNS_5EventE__wrapper,b2,vii___ZNK7WebCore4Node9nodeValueEv__wrapper,b2,vii___ZN7WebCore7Element21updateFocusAppearanceEb__wrapper,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2,b2
  ,b2,b2,b2,b2,b2,b2,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,ii___ZN7WebCore10SVGElement27haveLoadedRequiredResourcesEv__wrapper,b3,ii___ZNK7WebCore7Element14imageSourceURLEv__wrapper,b3,ii___ZN7WebCore4Node15eventTargetDataEv__wrapper,b3,__ZNK7WebCore10SVGElement14isFilterEffectEv,b3,ii___ZNK7WebCore4Node20eventTargetInterfaceEv__wrapper,b3,ii___ZN7WebCore7Element7onerrorEv__wrapper,b3,ii___ZN7WebCore7Element11scrollWidthEv__wrapper,b3,__ZNK7WebCore4Node14customPseudoIdEv,b3,__ZNK7WebCore4Node21isMediaControlElementEv,b3,__ZNK7WebCore4Node19isFrameOwnerElementEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv,b3,ii___ZN7WebCore7Element10scrollLeftEv__wrapper,b3,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b3,ii___ZN7WebCore7Element9scrollTopEv__wrapper
  ,b3,ii___ZNK7WebCore7Element26matchesReadOnlyPseudoClassEv__wrapper,b3,ii___ZNK7WebCore7Element27matchesReadWritePseudoClassEv__wrapper,b3,__ZNK7WebCore7Element17isTextFormControlEv,b3,__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv,b3,ii___ZN7WebCore7Element20shouldUseInputMethodEv__wrapper,b3,__ZNK7WebCore7Element6prefixEv,b3,__ZNK7WebCore7Element21isDisabledFormControlEv,b3,ii___ZNK7WebCore4Node18maxCharacterOffsetEv__wrapper,b3,__ZNK7WebCore7Element12namespaceURIEv,b3,ii___ZNK7WebCore4Node18offsetInCharactersEv__wrapper,b3,__ZNK7WebCore4Node22scriptExecutionContextEv,b3,__ZNK7WebCore7Element12isOutOfRangeEv,b3,ii___ZNK7WebCore7Element8nodeTypeEv__wrapper,b3,__ZNK7WebCore4Node15isPluginElementEv,b3,ii___ZNK7WebCore11EventTarget13isMessagePortEv__wrapper
  ,b3,__ZN7WebCore4Node11sheetLoadedEv,b3,__ZNK7WebCore7Element23canContainRangeEndPointEv,b3,__ZNK7WebCore4Node20isInsertionPointNodeEv,b3,ii___ZN7WebCore7Element6onloadEv__wrapper,b3,__ZNK7WebCore7Element9isInRangeEv,b3,__ZNK7WebCore7Element20isFormControlElementEv,b3,ii___ZN7WebCore7Element13focusDelegateEv__wrapper,b3,ii___ZNK7WebCore7Element13supportsFocusEv__wrapper,b3,ii___ZN7WebCore4Node24willRespondToTouchEventsEv__wrapper,b3,ii___ZN7WebCore10SVGElement17svgLoadEventTimerEv__wrapper,b3,__ZNK7WebCore7Element21isOptionalFormControlEv,b3,ii___ZNK7WebCore7Element25shouldAppearIndeterminateEv__wrapper,b3,ii___ZNK7WebCore4Node17canStartSelectionEv__wrapper,b3,__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv,b3,__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv
  ,b3,__ZNK7WebCore10SVGElement14isGradientStopEv,b3,__ZNK7WebCore7Element18isFrameElementBaseEv,b3,__ZNK7WebCore4Node16nonRendererStyleEv,b3,__ZNK7WebCore10SVGElement15supportsMarkersEv,b3,ii___ZN7WebCore13StyledElement5styleEv__wrapper,b3,__ZNK7WebCore7Element21isRequiredFormControlEv,b3,__ZNK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv,b3,__ZNK7WebCore7Element22isDefaultButtonForFormEv,b3,ii___ZNK7WebCore7Element22isSpellCheckingEnabledEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseClickEventsEv__wrapper,b3,ii___ZN7WebCore7Element7onfocusEv__wrapper,b3,ii___ZN7WebCore4Node14toInputElementEv__wrapper,b3,__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv,b3,__ZNK7WebCore10SVGElement13isTextContentEv,b3,__ZNK7WebCore18SVGGradientElement28needsPendingResourceHandlingEv
  ,b3,ii___ZN7WebCore4Node21ensureEventTargetDataEv__wrapper,b3,__ZNK7WebCore7Element12willValidateEv,b3,__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv,b3,__ZN7WebCore7Element25isValidFormControlElementEv,b3,ii___ZNK7WebCore7Element8tabIndexEv__wrapper,b3,ii___ZN7WebCore4Node29willRespondToMouseWheelEventsEv__wrapper,b3,ii___ZN7WebCore7Element12scrollHeightEv__wrapper,b3,__ZNK7WebCore10SVGElement13isSMILElementEv,b3,__ZN7WebCore24SVGRadialGradientElement27localAttributeToPropertyMapEv,b3,__ZNK7WebCore7Element19isSpinButtonElementEv,b3,ii___ZNK7WebCore10SVGElement16isMouseFocusableEv__wrapper,b3,ii___ZNK7WebCore7Element14shadowPseudoIdEv__wrapper,b3,__ZNK7WebCore4Node19isCharacterDataNodeEv,b3,__ZNK7WebCore7Element9localNameEv,b3,ii___ZN7WebCore4Node6toNodeEv__wrapper
  ,b3,__ZNK7WebCore24SVGRadialGradientElement22selfHasRelativeLengthsEv,b3,__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv,b3,ii___ZNK7WebCore7Element11isFocusableEv__wrapper,b3,ii___ZN7WebCore4Node28willRespondToMouseMoveEventsEv__wrapper,b3,ii___ZN7WebCore7Element6onblurEv__wrapper,b3,__ZNK7WebCore10SVGElement7isValidEv,b3,__ZNK7WebCore4Node15isMediaControlsEv,b3,ii___ZN7WebCore11EventTarget11toDOMWindowEv__wrapper,b3,__ZThn96_NK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv,b3,__ZN7WebCore10SVGElement21supplementalTransformEv,b3,__ZNK7WebCore4Node15isAttributeNodeEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3];
  var FUNCTION_TABLE_iiii = [b4,b4,iiii___ZNK7WebCore10SVGElement11isSupportedEPN3WTF10StringImplES3___wrapper,b4];
  var FUNCTION_TABLE_viii = [b5,b5,__ZThn92_N7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb,b5,__ZN7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb,b5,viii___ZN7WebCore10SVGElement32animatedPropertyTypeForAttributeERKNS_13QualifiedNameERN3WTF6VectorINS_20AnimatedPropertyTypeELj0ENS4_15CrashOnOverflowEEE__wrapper,b5,__ZN7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb,b5,__ZN7WebCore24SVGRadialGradientElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE,b5,viii___ZN7WebCore7Element9cloneNodeEb__wrapper,b5,viii___ZN7WebCore7Element9setPrefixERKN3WTF12AtomicStringERi__wrapper,b5,viii___ZN7WebCore4Node12setNodeValueERKN3WTF6StringERi__wrapper,b5,viii___ZN7WebCore7Element5focusEbNS_14FocusDirectionE__wrapper,b5,viii___ZNK7WebCore10SVGElement29localCoordinateSpaceTransformENS_12SVGLocatable8CTMScopeE__wrapper,b5,__ZN7WebCore24SVGRadialGradientElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE,b5,viii___ZN7WebCore7Element9setActiveEbb__wrapper,b5,__ZThn96_N7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb,b5,b5
  ,b5,b5,b5];
  var FUNCTION_TABLE_v = [b6,b6,v___ZN7WebCore4Node13dispatchEventEN3WTF10PassRefPtrINS_5EventEEE__wrapper,b6,v___ZN7WebCore7Element17dispatchBlurEventEN3WTF10PassRefPtrIS0_EE__wrapper,b6,v___ZN7WebCore7Element40cloneElementWithoutAttributesAndChildrenEv__wrapper,b6,v___ZN7WebCore10SVGElement22customStyleForRendererEv__wrapper,b6,v___ZN7WebCore7Element18dispatchFocusEventEN3WTF10PassRefPtrIS0_EENS_14FocusDirectionE__wrapper,b6,b6,b6,b6,b6];
  var FUNCTION_TABLE_iii = [b7,b7,iii___ZN7WebCore10SVGElement13computedStyleENS_8PseudoIdE__wrapper,b7,iii___ZNK7WebCore7Element16childTypeAllowedENS_4Node8NodeTypeE__wrapper,b7,iii___ZNK7WebCore10SVGElement23isPresentationAttributeERKNS_13QualifiedNameE__wrapper,b7,iii___ZNK7WebCore10SVGElement19isKeyboardFocusableEPNS_13KeyboardEventE__wrapper,b7,iii___ZN7WebCore10SVGElement12insertedIntoERNS_13ContainerNodeE__wrapper,b7,__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE,b7,iii___ZNK7WebCore10SVGElement22shouldMoveToFlowThreadERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement16rendererIsNeededERKNS_11RenderStyleE__wrapper,b7,iii___ZN7WebCore10SVGElement15willRecalcStyleENS_5Style6ChangeE__wrapper,b7,iii___ZNK7WebCore10SVGElement25childShouldCreateRendererERKNS_4NodeE__wrapper,b7,__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE,b7,b7,b7,b7,b7,b7
  ,b7,b7,b7];
  var FUNCTION_TABLE_viiii = [b8,b8,viiii___ZN7WebCore10SVGElement36collectStyleForPresentationAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringERNS_22MutableStylePropertiesE__wrapper,b8,viiii___ZN7WebCore10SVGElement16attributeChangedERKNS_13QualifiedNameERKN3WTF12AtomicStringENS_7Element27AttributeModificationReasonE__wrapper,b8,b8,b8];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiiii: dynCall_iiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_iiii: dynCall_iiii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiiii": invoke_iiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_iiii": invoke_iiii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames6fxAttrE": __ZN7WebCore8SVGNames6fxAttrE, "__ZN3WTF8nullAtomE": __ZN3WTF8nullAtomE, "__ZN7WebCore8SVGNames17linearGradientTagE": __ZN7WebCore8SVGNames17linearGradientTagE, "__ZN7WebCore8SVGNames17gradientUnitsAttrE": __ZN7WebCore8SVGNames17gradientUnitsAttrE, "__ZN7WebCore8SVGNames6cyAttrE": __ZN7WebCore8SVGNames6cyAttrE, "__ZN7WebCore8SVGNames6frAttrE": __ZN7WebCore8SVGNames6frAttrE, "__ZN7WebCore8SVGNames6fyAttrE": __ZN7WebCore8SVGNames6fyAttrE, "__ZN7WebCore8SVGNames5rAttrE": __ZN7WebCore8SVGNames5rAttrE, "__ZN7WebCore8SVGNames17radialGradientTagE": __ZN7WebCore8SVGNames17radialGradientTagE, "__ZTVN7WebCore18SVGGradientElementE": __ZTVN7WebCore18SVGGradientElementE, "__ZN7WebCore8SVGNames16spreadMethodAttrE": __ZN7WebCore8SVGNames16spreadMethodAttrE, "__ZN7WebCore8SVGNames21gradientTransformAttrE": __ZN7WebCore8SVGNames21gradientTransformAttrE, "__ZN7WebCore8SVGNames6cxAttrE": __ZN7WebCore8SVGNames6cxAttrE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiiii = Module["dynCall_iiiii"] = asm["dynCall_iiiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E16lookupForWritingINS_22IdentityHashTranslatorIS4_EES2_EENSt3__14pairIPS2_bEERKT0_","__ZThn92_N7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb","__ZN7WebCore7Element29privateBrowsingStateDidChangeEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZN7WebCore7Element20buildPendingResourceEv","__ZN7WebCore24SVGRadialGradientElement14frPropertyInfoEv","__ZNK7WebCore7Element6targetEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6rehashEiPS2_","__ZN7WebCore10SVGElement25synchronizeSystemLanguageEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFxEPNS_10SVGElementE","__ZN7WebCore24SVGRadialGradientElement13synchronizeCyEPNS_10SVGElementE","__ZN7WebCore7Element26didBecomeFullscreenElementEv","__ZNK7WebCore4Node21isMediaControlElementEv","__ZNK7WebCore4Node19isFrameOwnerElementEv","__ZNK7WebCore28SVGExternalResourcesRequired16isParserInsertedEv","__ZN7WebCore7Element22visibilityStateChangedEv","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZThn96_N7WebCore24SVGRadialGradientElementD1Ev","__ZN7WebCore18SVGGradientElement16setHrefBaseValueERKN3WTF6StringEb","__ZThn92_N7WebCore24SVGRadialGradientElementD0Ev","__ZNK7WebCore7Element17isTextFormControlEv","__ZN7WebCore7Element25didAddUserAgentShadowRootEPNS_10ShadowRootE","__ZNK7WebCore28SVGExternalResourcesRequired18haveFiredLoadEventEv","__ZNK7WebCore24SVGRadialGradientElement2fyEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeCxEPNS_10SVGElementE","__ZNK7WebCore4Node20isInsertionPointNodeEv","__ZNK7WebCore7Element21isDisabledFormControlEv","__ZN7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb","__ZN7WebCore24SVGRadialGradientElement13synchronizeCyEv","__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFyWrapperEPNS_10SVGElementE","__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFxWrapperEPNS_10SVGElementE","__ZNK7WebCore7Element21isRequiredFormControlEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFrEPNS_10SVGElementE","__ZNK7WebCore7Element12namespaceURIEv","__ZN7WebCore24SVGRadialGradientElement14parseAttributeERKNS_13QualifiedNameERKN3WTF12AtomicStringE","__ZN7WebCore24SVGRadialGradientElementC2ERKNS_13QualifiedNameERNS_8DocumentE","__ZNK7WebCore10SVGElement14isFilterEffectEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore24SVGRadialGradientElement22lookupOrCreateRWrapperEPNS_10SVGElementE","__ZN7WebCore24SVGRadialGradientElement12synchronizeREv","__ZNK7WebCore24SVGRadialGradientElement2frEv","_memset","__ZNK7WebCore4Node22scriptExecutionContextEv","__ZNK7WebCore7Element12isOutOfRangeEv","__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCxWrapperEPNS_10SVGElementE","__ZNK7WebCore7Element12willValidateEv","__ZN7WebCore24SVGRadialGradientElement12synchronizeREPNS_10SVGElementE","__ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E6expandEPS3_","__ZNK7WebCore7Element6prefixEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFrEv","__ZNK7WebCore7Element9isInRangeEv","__ZNK7WebCore7Element20isFormControlElementEv","__ZN7WebCore10SVGElement27synchronizeRequiredFeaturesEv","__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateCyWrapperEPNS_10SVGElementE","__ZN7WebCore24SVGRadialGradientElement14fyPropertyInfoEv","__ZN7WebCore24SVGRadialGradientElement14cyPropertyInfoEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeCxEv","__ZN7WebCore4Node26didNotifySubtreeInsertionsEPNS_13ContainerNodeE","__ZNK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv","__ZN7WebCore4Node43notifyLoadedSheetAndAllCriticalSubresourcesEb","__ZNK7WebCore7Element21isOptionalFormControlEv","__ZNK7WebCore7Element32isSearchFieldCancelButtonElementEv","__ZNK7WebCore10SVGElement23areAuthorShadowsAllowedEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFyEPNS_10SVGElementE","__ZNK7WebCore10SVGElement14isGradientStopEv","__ZNK7WebCore24SVGRadialGradientElement2cxEv","__ZNK7WebCore7Element18isFrameElementBaseEv","__ZNK7WebCore4Node16nonRendererStyleEv","__ZNK7WebCore10SVGElement15supportsMarkersEv","__ZNK7WebCore4Node15isPluginElementEv","__ZN7WebCore4Node24startLoadingDynamicSheetEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN3WTF6VectorIN7WebCore8Gradient9ColorStopELj0ENS_15CrashOnOverflowEEaSERKS5_","__ZN7WebCore24SVGRadialGradientElement23lookupOrCreateFrWrapperEPNS_10SVGElementE","__ZN7WebCore7Element30willStopBeingFullscreenElementEv","__ZNK7WebCore7Element22isDefaultButtonForFormEv","_memcpy","__ZN7WebCore10SVGElement29synchronizeRequiredExtensionsEv","__ZNK7WebCore7Element22isHTMLContentAttributeERKNS_9AttributeE","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E6lookupINS_24HashSetTranslatorAdapterINS1_26SVGAttributeHashTranslatorEEES2_EEPS2_RKT0_","__ZN7WebCore24SVGRadialGradientElement22attributeToPropertyMapEv","__ZN7WebCore24SVGRadialGradientElement14cxPropertyInfoEv","__ZN7WebCore13StyledElement36additionalPresentationAttributeStyleEv","__ZN7WebCore24SVGRadialGradientElement19svgAttributeChangedERKNS_13QualifiedNameE","__ZN7WebCore24SVGRadialGradientElementD0Ev","__ZNK7WebCore10SVGElement13isTextContentEv","__ZNK7WebCore18SVGGradientElement28needsPendingResourceHandlingEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFyEv","__ZN7WebCore7Element20mediaVolumeDidChangeEv","__ZN7WebCore4Node11sheetLoadedEv","__ZNK7WebCore7Element31alwaysCreateUserAgentShadowRootEv","__ZN7WebCore24SVGRadialGradientElement21createElementRendererEN3WTF7PassRefINS_11RenderStyleEEE","__ZN7WebCore7Element37copyNonAttributePropertiesFromElementERKS0_","__ZN7WebCore7Element31documentWillSuspendForPageCacheEv","__ZN7WebCore7Element25isValidFormControlElementEv","__ZNK7WebCore7Element23canContainRangeEndPointEv","__ZNK7WebCore24SVGRadialGradientElement2cyEv","__ZNK7WebCore10SVGElement13isSMILElementEv","__ZN3WTF9HashTableIPN7WebCore18SVGGradientElementES3_NS_17IdentityExtractorENS_7PtrHashIS3_EENS_10HashTraitsIS3_EES8_E3addINS_22IdentityHashTranslatorIS6_EERKS3_SE_EENS_18HashTableAddResultINS_17HashTableIteratorIS3_S3_S4_S6_S8_S8_EEEEOT0_OT1_","__ZNK7WebCore4Node14customPseudoIdEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_24SVGRadialGradientElementENS_26SVGAnimatedPropertyTearOffINS_9SVGLengthEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore24SVGRadialGradientElement27localAttributeToPropertyMapEv","__ZN7WebCore28SVGExternalResourcesRequired21setHaveFiredLoadEventEb","__ZNK7WebCore7Element19isSpinButtonElementEv","__ZN3WTF9HashTableIN7WebCore13QualifiedNameES2_NS_17IdentityExtractorENS1_17QualifiedNameHashENS_10HashTraitsIS2_EES6_E3addINS_22IdentityHashTranslatorIS4_EERKS2_SC_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S2_S3_S4_S6_S6_EEEEOT0_OT1_","__ZN7WebCore24SVGRadialGradientElement14fxPropertyInfoEv","__ZN7WebCore24SVGRadialGradientElement13rPropertyInfoEv","__ZNK7WebCore4Node19isCharacterDataNodeEv","__ZNK7WebCore7Element9localNameEv","__ZN7WebCore24SVGRadialGradientElement25collectGradientAttributesERNS_24RadialGradientAttributesE","__ZNK7WebCore24SVGRadialGradientElement1rEv","__ZNK7WebCore24SVGRadialGradientElement2fxEv","__ZN7WebCore24SVGRadialGradientElementD1Ev","__ZNK7WebCore24SVGRadialGradientElement22selfHasRelativeLengthsEv","__ZNK7WebCore7Element14isURLAttributeERKNS_9AttributeE","__ZThn96_N7WebCore24SVGRadialGradientElementD0Ev","__ZNK7WebCore10SVGElement20isSVGGraphicsElementEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED1Ev","__ZN7WebCore26SVGAttributeHashTranslator4hashERKNS_13QualifiedNameE","__ZThn92_N7WebCore24SVGRadialGradientElementD1Ev","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9SVGLengthEED0Ev","__ZN7WebCore24SVGRadialGradientElement20isSupportedAttributeERKNS_13QualifiedNameE","__ZNK7WebCore10SVGElement7isValidEv","_memmove","__ZNK7WebCore4Node15isMediaControlsEv","__ZN7WebCore24SVGRadialGradientElement6createERKNS_13QualifiedNameERNS_8DocumentE","__ZThn96_NK7WebCore18SVGGradientElement34externalResourcesRequiredBaseValueEv","__ZN7WebCore24SVGRadialGradientElement13synchronizeFxEv","__ZN7WebCore10SVGElement21supplementalTransformEv","__ZNK7WebCore4Node15isAttributeNodeEv","__ZN7WebCore7Element30documentDidResumeFromPageCacheEv","__ZThn96_N7WebCore18SVGGradientElement37setExternalResourcesRequiredBaseValueERKbb"]

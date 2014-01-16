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
H_BASE = parentModule["_malloc"](664 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 664;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11SVGViewSpecC1EPNS_10SVGElementE;
/* memory initializer */ allocate([83,86,71,86,105,101,119,83,112,101,99,84,114,97,110,115,102,111,114,109,65,116,116,114,105,98,117,116,101,0,0,0,83,86,71,86,105,101,119,83,112,101,99,80,114,101,115,101,114,118,101,65,115,112,101,99,116,82,97,116,105,111,65,116,116,114,105,98,117,116,101,0,83,86,71,86,105,101,119,83,112,101,99,86,105,101,119,66,111,120,65,116,116,114,105,98,117,116,101,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,112,0,114,0,101,0,115,0,101,0,114,0,118,0,101,0,65,0,115,0,112,0,101,0,99,0,116,0,82,0,97,0,116,0,105,0,111,0,0,0,122,0,111,0,111,0,109,0,65,0,110,0,100,0,80,0,97,0,110,0,0,0,0,0,118,0,105,0,101,0,119,0,84,0,97,0,114,0,103,0,101,0,116,0,0,0,0,0,116,0,114,0,97,0,110,0,115,0,102,0,111,0,114,0,109,0,0,0,0,0,0,0,118,0,105,0,101,0,119,0,66,0,111,0,120,0,0,0,115,0,118,0,103,0,86,0,105,0,101,0,119,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_iiii(index,a1,a2,a3) {
  try {
    return Module["dynCall_iiii"](index,a1,a2,a3);
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
  var __ZN7WebCore8SVGNames13transformAttrE=env.__ZN7WebCore8SVGNames13transformAttrE|0;
  var __ZN7WebCore8SVGNames23preserveAspectRatioAttrE=env.__ZN7WebCore8SVGNames23preserveAspectRatioAttrE|0;
  var __ZN7WebCore8SVGNames11viewBoxAttrE=env.__ZN7WebCore8SVGNames11viewBoxAttrE|0;
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore18SVGPropertyTearOffINS_12SVGTransformEEE=(H_BASE+352)|0;
  var __ZTVN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEEE=(H_BASE+304)|0;
  var __ZTVN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEEE=(H_BASE+200)|0;
  var __ZTVN7WebCore39SVGAnimatedTransformListPropertyTearOffE=(H_BASE+112)|0;
  var __ZTVN7WebCore31SVGTransformListPropertyTearOffE=(H_BASE+152)|0;
  var __ZTVN7WebCore11SVGViewSpecE=(H_BASE+432)|0;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEE=(H_BASE+272)|0;
  var __ZTVN7WebCore15SVGListPropertyINS_16SVGTransformListEEE=(H_BASE+384)|0;
  var __ZTVN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEEE=(H_BASE+240)|0;
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
  var invoke_iiii=env.invoke_iiii;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_trap=env._llvm_trap;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11SVGViewSpec13parseViewSpecERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 i7 = i3 + 32 | 0;
 i8 = i7;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = 0;
  STACKTOP = i3;
  return 0;
 }
 if ((HEAP32[i2 + 16 >> 2] & 32 | 0) == 0) {
  i10 = HEAP32[i2 + 8 >> 2] | 0;
  i11 = i2;
 } else {
  i12 = __ZNK3WTF10StringImpl17getData16SlowCaseEv(i2) | 0;
  i10 = i12;
  i11 = HEAP32[i9 >> 2] | 0;
 }
 HEAP32[i4 >> 2] = i10;
 if ((i11 | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 i9 = HEAP32[i11 + 4 >> 2] | 0;
 i11 = i10 + (i9 << 1) | 0;
 if ((i9 | 0) <= 0) {
  STACKTOP = i3;
  return 0;
 }
 i12 = i1 + 8 | 0;
 if ((HEAP32[i12 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return 0;
 }
 i2 = i11;
 if ((i9 << 1 | 0) < 14) {
  STACKTOP = i3;
  return 0;
 }
 if ((_memcmp(H_BASE + 584 | 0, i10 | 0, 14) | 0) != 0) {
  STACKTOP = i3;
  return 0;
 }
 i13 = i10 + 14 | 0;
 HEAP32[i4 >> 2] = i13;
 if ((i9 | 0) <= 7) {
  STACKTOP = i3;
  return 0;
 }
 if ((HEAP16[i13 >> 1] | 0) != 40) {
  STACKTOP = i3;
  return 0;
 }
 i13 = i10 + 16 | 0;
 HEAP32[i4 >> 2] = i13;
 L30 : do {
  if ((i9 | 0) > 8) {
   i10 = i6 | 0;
   i14 = i1 + 52 | 0;
   i15 = i5;
   i16 = i1 + 28 | 0;
   i17 = i1 + 12 | 0;
   i18 = i1 + 44 | 0;
   i19 = i1 + 16 | 0;
   i20 = i13;
   L32 : while (1) {
    L34 : do {
     switch (HEAP16[i20 >> 1] | 0) {
     case 122:
      {
       if ((i2 - i20 | 0) < 20) {
        i21 = 85;
        break L32;
       }
       if ((_memcmp(H_BASE + 496 | 0, i20 | 0, 20) | 0) != 0) {
        i21 = 86;
        break L32;
       }
       i22 = i20 + 20 | 0;
       HEAP32[i4 >> 2] = i22;
       if (i22 >>> 0 >= i11 >>> 0) {
        i21 = 87;
        break L32;
       }
       if ((HEAP16[i22 >> 1] | 0) != 40) {
        i21 = 88;
        break L32;
       }
       HEAP32[i4 >> 2] = i20 + 22;
       if (!(__ZN7WebCore13SVGZoomAndPan15parseZoomAndPanERPKtS2_RNS_17SVGZoomAndPanTypeE(i4, i11, i17) | 0)) {
        i21 = 89;
        break L32;
       }
       i22 = HEAP32[i4 >> 2] | 0;
       if (i22 >>> 0 >= i11 >>> 0) {
        i21 = 90;
        break L32;
       }
       if ((HEAP16[i22 >> 1] | 0) != 41) {
        i21 = 91;
        break L32;
       }
       i23 = i22 + 2 | 0;
       HEAP32[i4 >> 2] = i23;
       i24 = i23;
       break;
      }
     case 112:
      {
       if ((i2 - i20 | 0) < 38) {
        i21 = 92;
        break L32;
       }
       if ((_memcmp(H_BASE + 456 | 0, i20 | 0, 38) | 0) != 0) {
        i21 = 100;
        break L32;
       }
       i23 = i20 + 38 | 0;
       HEAP32[i4 >> 2] = i23;
       if (i23 >>> 0 >= i11 >>> 0) {
        i21 = 101;
        break L32;
       }
       if ((HEAP16[i23 >> 1] | 0) != 40) {
        i21 = 102;
        break L32;
       }
       HEAP32[i4 >> 2] = i20 + 40;
       __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i8);
       if (!(__ZN7WebCore22SVGPreserveAspectRatio5parseERPKtS2_b(i8, i4, i11, 0) | 0)) {
        i21 = 103;
        break L32;
       }
       i23 = HEAP32[i7 + 4 >> 2] | 0;
       HEAP32[i18 >> 2] = HEAP32[i7 >> 2];
       HEAP32[i18 + 4 >> 2] = i23;
       i23 = HEAP32[i4 >> 2] | 0;
       if (i23 >>> 0 >= i11 >>> 0) {
        i21 = 104;
        break L32;
       }
       if ((HEAP16[i23 >> 1] | 0) != 41) {
        i21 = 105;
        break L32;
       }
       i22 = i23 + 2 | 0;
       HEAP32[i4 >> 2] = i22;
       i24 = i22;
       break;
      }
     case 118:
      {
       i22 = i2 - i20 | 0;
       if ((i22 | 0) < 14) {
        i21 = 97;
        break L32;
       }
       if ((_memcmp(H_BASE + 568 | 0, i20 | 0, 14) | 0) == 0) {
        i23 = i20 + 14 | 0;
        HEAP32[i4 >> 2] = i23;
        if (i23 >>> 0 >= i11 >>> 0) {
         i21 = 98;
         break L32;
        }
        if ((HEAP16[i23 >> 1] | 0) != 40) {
         i21 = 95;
         break L32;
        }
        HEAP32[i4 >> 2] = i20 + 16;
        _memset(i15 | 0, 0, 16) | 0;
        if (!(__ZN7WebCore15SVGFitToViewBox12parseViewBoxEPNS_8DocumentERPKtS4_RNS_9FloatRectEb(HEAP32[(HEAP32[(HEAP32[i12 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0, i4, i11, i5, 0) | 0)) {
         i21 = 96;
         break L32;
        }
        HEAP32[i16 >> 2] = HEAP32[i15 >> 2];
        HEAP32[i16 + 4 >> 2] = HEAP32[i15 + 4 >> 2];
        HEAP32[i16 + 8 >> 2] = HEAP32[i15 + 8 >> 2];
        HEAP32[i16 + 12 >> 2] = HEAP32[i15 + 12 >> 2];
        i23 = HEAP32[i4 >> 2] | 0;
        if (i23 >>> 0 >= i11 >>> 0) {
         i21 = 83;
         break L32;
        }
        if ((HEAP16[i23 >> 1] | 0) != 41) {
         i21 = 84;
         break L32;
        }
        i25 = i23 + 2 | 0;
        HEAP32[i4 >> 2] = i25;
        i24 = i25;
        break L34;
       }
       if ((i22 | 0) < 20) {
        i21 = 93;
        break L32;
       }
       if ((_memcmp(H_BASE + 520 | 0, i20 | 0, 20) | 0) != 0) {
        i21 = 94;
        break L32;
       }
       i22 = i20 + 20 | 0;
       HEAP32[i4 >> 2] = i22;
       if (i22 >>> 0 >= i11 >>> 0) {
        i21 = 99;
        break L32;
       }
       if ((HEAP16[i22 >> 1] | 0) != 40) {
        i21 = 72;
        break L32;
       }
       i22 = i20 + 22 | 0;
       i25 = i22;
       while (1) {
        HEAP32[i4 >> 2] = i25;
        if (i25 >>> 0 >= i11 >>> 0) {
         i21 = 74;
         break L32;
        }
        if ((HEAP16[i25 >> 1] | 0) == 41) {
         break;
        } else {
         i25 = i25 + 2 | 0;
        }
       }
       __ZN3WTF6StringC1EPKtj(i6, i22, i25 - i22 >> 1);
       i23 = HEAP32[i10 >> 2] | 0;
       if ((i23 | 0) != 0) {
        i26 = i23 | 0;
        HEAP32[i26 >> 2] = (HEAP32[i26 >> 2] | 0) + 2;
       }
       i26 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = i23;
       do {
        if ((i26 | 0) != 0) {
         i23 = i26 | 0;
         i27 = (HEAP32[i23 >> 2] | 0) - 2 | 0;
         if ((i27 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i26);
          break;
         } else {
          HEAP32[i23 >> 2] = i27;
          break;
         }
        }
       } while (0);
       i26 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i26 | 0) != 0) {
         i22 = i26 | 0;
         i25 = (HEAP32[i22 >> 2] | 0) - 2 | 0;
         if ((i25 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i26);
          break;
         } else {
          HEAP32[i22 >> 2] = i25;
          break;
         }
        }
       } while (0);
       i26 = (HEAP32[i4 >> 2] | 0) + 2 | 0;
       HEAP32[i4 >> 2] = i26;
       i24 = i26;
       break;
      }
     case 116:
      {
       if ((i2 - i20 | 0) < 18) {
        i21 = 106;
        break L32;
       }
       if ((_memcmp(H_BASE + 544 | 0, i20 | 0, 18) | 0) != 0) {
        i21 = 107;
        break L32;
       }
       i26 = i20 + 18 | 0;
       HEAP32[i4 >> 2] = i26;
       if (i26 >>> 0 >= i11 >>> 0) {
        i21 = 108;
        break L32;
       }
       if ((HEAP16[i26 >> 1] | 0) != 40) {
        i21 = 109;
        break L32;
       }
       HEAP32[i4 >> 2] = i20 + 20;
       __ZN7WebCore16SVGTransformable23parseTransformAttributeERNS_16SVGTransformListERPKtS4_NS0_20TransformParsingModeE(i19, i4, i11, 1) | 0;
       i26 = HEAP32[i4 >> 2] | 0;
       if (i26 >>> 0 >= i11 >>> 0) {
        i21 = 110;
        break L32;
       }
       if ((HEAP16[i26 >> 1] | 0) != 41) {
        i21 = 111;
        break L32;
       }
       i25 = i26 + 2 | 0;
       HEAP32[i4 >> 2] = i25;
       i24 = i25;
       break;
      }
     case 41:
      {
       i28 = i20;
       break L30;
       break;
      }
     default:
      {
       i21 = 73;
       break L32;
      }
     }
    } while (0);
    do {
     if (i24 >>> 0 < i11 >>> 0) {
      if ((HEAP16[i24 >> 1] | 0) != 59) {
       i29 = i24;
       break;
      }
      i25 = i24 + 2 | 0;
      HEAP32[i4 >> 2] = i25;
      i29 = i25;
     } else {
      i29 = i24;
     }
    } while (0);
    if (i29 >>> 0 < i11 >>> 0) {
     i20 = i29;
    } else {
     i28 = i29;
     break L30;
    }
   }
   if ((i21 | 0) == 72) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 73) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 74) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 83) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 84) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 85) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 86) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 87) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 88) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 89) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 90) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 91) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 92) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 93) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 94) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 95) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 96) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 97) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 98) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 99) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 100) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 101) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 102) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 103) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 104) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 105) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 106) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 107) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 108) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 109) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 110) {
    STACKTOP = i3;
    return 0;
   } else if ((i21 | 0) == 111) {
    STACKTOP = i3;
    return 0;
   }
  } else {
   i28 = i13;
  }
 } while (0);
 if (i28 >>> 0 < i11 >>> 0) {
  STACKTOP = i3;
  return (HEAP16[i28 >> 1] | 0) == 41 | 0;
 } else {
  STACKTOP = i3;
  return 0;
 }
 return 0;
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
  L7 : do {
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
      break L7;
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
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_39SVGAnimatedTransformListPropertyTearOffENS_16SVGTransformListEEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i7 >> 2] = i2;
 HEAP32[i7 + 4 >> 2] = HEAP32[i10 >> 2];
 i10 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i7) | 0;
 do {
  if ((i10 | 0) == 0) {
   i11 = 4;
  } else {
   i12 = HEAP32[i10 + 8 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i11 = 4;
    break;
   }
   i13 = i12 + 4 | 0;
   i14 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
   HEAP32[i13 >> 2] = i14;
   i15 = i12;
   i16 = i12;
   i17 = i14;
   i11 = 16;
  }
 } while (0);
 do {
  if ((i11 | 0) == 4) {
   i10 = HEAP32[i3 + 8 >> 2] | 0;
   i14 = HEAP32[i3 >> 2] | 0;
   i12 = __ZN3WTF10fastMallocEj(60) | 0;
   i13 = i12;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i13, i2, i10, i14);
   i14 = i12;
   HEAP32[i14 >> 2] = H_BASE + 208;
   HEAP32[i12 + 24 >> 2] = i4;
   i10 = i12 + 28 | 0;
   _memset(i10 | 0, 0, 32) | 0;
   i18 = HEAP32[i4 + 8 >> 2] | 0;
   do {
    if ((i18 | 0) != 0) {
     i19 = i6 | 0;
     HEAP32[i19 >> 2] = 0;
     __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_12SVGTransformEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i10, i6, i18);
     i20 = HEAP32[i19 >> 2] | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     i19 = i20 + 4 | 0;
     i20 = i19 | 0;
     i21 = (HEAP32[i20 >> 2] | 0) - 1 | 0;
     if ((i21 | 0) != 0) {
      HEAP32[i20 >> 2] = i21;
      break;
     }
     i21 = i19 - 4 | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i21 >> 2] | 0) + 4 >> 2] & 63](i21);
    }
   } while (0);
   HEAP32[i14 >> 2] = H_BASE + 120;
   if ((HEAP32[i3 + 4 >> 2] | 0) == 1) {
    HEAP8[i12 + 21 | 0] = 1;
   }
   i18 = __ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0;
   HEAP32[i8 >> 2] = i13;
   __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_(i9, i18 | 0, i7, i8);
   if ((HEAP8[i9 + 8 | 0] & 1) == 0) {
    HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] = HEAP32[i8 >> 2];
   }
   i18 = i12;
   if ((i12 | 0) == 0) {
    i22 = 0;
    i23 = i18;
    i24 = 1;
    break;
   }
   i15 = i13;
   i16 = i18;
   i17 = HEAP32[i12 + 4 >> 2] | 0;
   i11 = 16;
  }
 } while (0);
 if ((i11 | 0) == 16) {
  HEAP32[i15 + 4 >> 2] = i17 + 1;
  i22 = i15;
  i23 = i16;
  i24 = 0;
 }
 HEAP32[i1 >> 2] = i23;
 do {
  if ((i23 | 0) != 0) {
   i1 = i23 + 4 | 0;
   i16 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i16 + 1;
   i1 = i23 + 4 | 0;
   if ((i16 | 0) != 0) {
    HEAP32[i1 >> 2] = i16;
    break;
   }
   i16 = i1 - 4 | 0;
   if ((i16 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 63](i16);
  }
 } while (0);
 if (i24) {
  STACKTOP = i5;
  return;
 }
 i24 = i22 + 4 | 0;
 i22 = i24 | 0;
 i23 = (HEAP32[i22 >> 2] | 0) - 1 | 0;
 if ((i23 | 0) != 0) {
  HEAP32[i22 >> 2] = i23;
  STACKTOP = i5;
  return;
 }
 i23 = i24 - 4 | 0;
 if ((i23 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i23 >> 2] | 0) + 8 >> 2] & 63](i23);
 STACKTOP = i5;
 return;
}
function __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_12SVGTransformEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 do {
  if (i5 >>> 0 > i3 >>> 0) {
   i6 = HEAP32[i1 >> 2] | 0;
   i7 = i6 + (i5 << 2) | 0;
   if ((i5 | 0) != (i3 | 0)) {
    i8 = i6 + (i3 << 2) | 0;
    while (1) {
     i6 = HEAP32[i8 >> 2] | 0;
     do {
      if ((i6 | 0) != 0) {
       i9 = i6 + 4 | 0;
       i10 = i9 | 0;
       i11 = (HEAP32[i10 >> 2] | 0) - 1 | 0;
       if ((i11 | 0) != 0) {
        HEAP32[i10 >> 2] = i11;
        break;
       }
       i11 = i9 - 4 | 0;
       if ((i11 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_vi[HEAP32[(HEAP32[i11 >> 2] | 0) + 4 >> 2] & 63](i11);
      }
     } while (0);
     i8 = i8 + 4 | 0;
     if ((i8 | 0) == (i7 | 0)) {
      break;
     }
    }
   }
   HEAP32[i4 >> 2] = i3;
  } else {
   i7 = i1 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if (i8 >>> 0 >= i3 >>> 0) {
    break;
   }
   do {
    if ((i8 | 0) != 0) {
     i6 = i1 | 0;
     if ((i5 | 0) != 0) {
      i11 = HEAP32[i6 >> 2] | 0;
      i9 = i11 + (i5 << 2) | 0;
      i10 = i11;
      while (1) {
       i11 = HEAP32[i10 >> 2] | 0;
       do {
        if ((i11 | 0) != 0) {
         i12 = i11 + 4 | 0;
         i13 = i12 | 0;
         i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
         if ((i14 | 0) != 0) {
          HEAP32[i13 >> 2] = i14;
          break;
         }
         i14 = i12 - 4 | 0;
         if ((i14 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_vi[HEAP32[(HEAP32[i14 >> 2] | 0) + 4 >> 2] & 63](i14);
        }
       } while (0);
       i10 = i10 + 4 | 0;
       if ((i10 | 0) == (i9 | 0)) {
        break;
       }
      }
      HEAP32[i4 >> 2] = 0;
     }
     i9 = HEAP32[i6 >> 2] | 0;
     if ((i9 | 0) == 0) {
      break;
     }
     HEAP32[i6 >> 2] = 0;
     HEAP32[i7 >> 2] = 0;
     __ZN3WTF8fastFreeEPv(i9);
    }
   } while (0);
   if ((HEAP32[i7 >> 2] | 0) >>> 0 >= i3 >>> 0) {
    break;
   }
   i8 = i1 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if (i3 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i10 = HEAP32[i4 >> 2] | 0;
   i11 = __ZN3WTF18fastMallocGoodSizeEj(i3 << 2) | 0;
   HEAP32[i7 >> 2] = i11 >>> 2;
   i14 = __ZN3WTF10fastMallocEj(i11) | 0;
   HEAP32[i8 >> 2] = i14;
   i11 = i9;
   _memcpy(i14 | 0, i11 | 0, i10 << 2) | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   if ((HEAP32[i8 >> 2] | 0) == (i9 | 0)) {
    HEAP32[i8 >> 2] = 0;
    HEAP32[i7 >> 2] = 0;
   }
   __ZN3WTF8fastFreeEPv(i11);
  }
 } while (0);
 i5 = i1 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 i11 = i1 << 2;
 if ((i11 | 0) > 0) {
  i8 = i2 | 0;
  i9 = i11 >> 2;
  i11 = HEAP32[i5 >> 2] | 0;
  while (1) {
   i10 = HEAP32[i8 >> 2] | 0;
   if ((i10 | 0) != 0) {
    i14 = i10 + 4 | 0;
    HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
   }
   i14 = i11 | 0;
   i12 = HEAP32[i14 >> 2] | 0;
   HEAP32[i14 >> 2] = i10;
   do {
    if ((i12 | 0) != 0) {
     i10 = i12 + 4 | 0;
     i14 = i10 | 0;
     i13 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
     if ((i13 | 0) != 0) {
      HEAP32[i14 >> 2] = i13;
      break;
     }
     i13 = i10 - 4 | 0;
     if ((i13 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i13 >> 2] | 0) + 4 >> 2] & 63](i13);
    }
   } while (0);
   i12 = i9 - 1 | 0;
   if ((i12 | 0) > 0) {
    i9 = i12;
    i11 = i11 + 4 | 0;
   } else {
    break;
   }
  }
  i15 = HEAP32[i4 >> 2] | 0;
 } else {
  i15 = i1;
 }
 i1 = HEAP32[i5 >> 2] | 0;
 i5 = i1 + (i3 << 2) | 0;
 if ((i15 | 0) == (i3 | 0)) {
  HEAP32[i4 >> 2] = i3;
  return;
 }
 i11 = i2 | 0;
 i2 = i1 + (i15 << 2) | 0;
 while (1) {
  i15 = HEAP32[i11 >> 2] | 0;
  HEAP32[i2 >> 2] = i15;
  if ((i15 | 0) != 0) {
   i1 = i15 + 4 | 0;
   HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
  }
  i2 = i2 + 4 | 0;
  if ((i2 | 0) == (i5 | 0)) {
   break;
  }
 }
 HEAP32[i4 >> 2] = i3;
 return;
}
function __ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i7 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i7 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = i7 + 12 | 0;
 HEAP8[i11] = 1;
 HEAP32[i7 + 16 >> 2] = 0;
 i12 = i7 + 20 | 0;
 HEAP32[i12 >> 2] = 0;
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 >> 2], 6, 1);
 HEAP8[i6] = 32;
 i13 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i13 | 0) == 0) {
   i14 = 7;
  } else {
   i15 = HEAP32[i8 >> 2] | 0;
   if (i15 >>> 0 >= (HEAP32[i13 + 4 >> 2] | 0) >>> 0) {
    i14 = 7;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 7;
    break;
   }
   i16 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i15 + 1;
   if (i16) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i15 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i15 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 7) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i6, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 4 >> 2], 6, 1);
 HEAP8[i5] = 32;
 i6 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i6 | 0) == 0) {
   i14 = 14;
  } else {
   i13 = HEAP32[i8 >> 2] | 0;
   if (i13 >>> 0 >= (HEAP32[i6 + 4 >> 2] | 0) >>> 0) {
    i14 = 14;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 14;
    break;
   }
   i15 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i13 + 1;
   if (i15) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i13 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i13 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 14) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i5, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 8 >> 2], 6, 1);
 HEAP8[i4] = 32;
 i5 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i14 = 21;
  } else {
   i6 = HEAP32[i8 >> 2] | 0;
   if (i6 >>> 0 >= (HEAP32[i5 + 4 >> 2] | 0) >>> 0) {
    i14 = 21;
    break;
   }
   if ((HEAP32[i9 >> 2] | 0) != 0) {
    i14 = 21;
    break;
   }
   i13 = (HEAP8[i11] & 1) == 0;
   HEAP32[i8 >> 2] = i6 + 1;
   if (i13) {
    HEAP16[(HEAP32[i7 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 32;
    break;
   } else {
    HEAP8[(HEAP32[i12 >> 2] | 0) + i6 | 0] = 32;
    break;
   }
  }
 } while (0);
 if ((i14 | 0) == 21) {
  __ZN3WTF13StringBuilder6appendEPKhj(i7, i4, 1);
 }
 __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i7, +HEAPF32[i2 + 12 >> 2], 6, 1);
 __ZN3WTF13StringBuilder11shrinkToFitEv(i7);
 i2 = HEAP32[i9 >> 2] | 0;
 if ((i2 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i7);
  i7 = HEAP32[i9 >> 2] | 0;
  HEAP32[i1 >> 2] = i7;
  if ((i7 | 0) != 0) {
   i17 = i7;
   i14 = 25;
  }
 } else {
  HEAP32[i1 >> 2] = i2;
  i17 = i2;
  i14 = 25;
 }
 if ((i14 | 0) == 25) {
  i14 = i17 | 0;
  HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 2;
 }
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) != 0) {
   i10 = i14 | 0;
   i17 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i17 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i10 >> 2] = i17;
    break;
   }
  }
 } while (0);
 i14 = HEAP32[i9 >> 2] | 0;
 if ((i14 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i9 = i14 | 0;
 i17 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
 if ((i17 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i14);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i9 >> 2] = i17;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
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
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
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
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i2, i9, i13);
   HEAP32[i11 >> 2] = H_BASE + 280;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 63](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i1, i2, i3, i4) {
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
 i9 = HEAP32[i3 + 12 >> 2] | 0;
 HEAP32[i6 >> 2] = i2;
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 >> 2];
 i9 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i6) | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = 4;
  } else {
   i11 = HEAP32[i9 + 8 >> 2] | 0;
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
   i9 = HEAP32[i3 + 8 >> 2] | 0;
   i13 = HEAP32[i3 >> 2] | 0;
   i11 = __ZN3WTF10fastMallocEj(36) | 0;
   i12 = i11;
   __ZN7WebCore19SVGAnimatedPropertyC2EPNS_10SVGElementERKNS_13QualifiedNameENS_20AnimatedPropertyTypeE(i12, i2, i9, i13);
   HEAP32[i11 >> 2] = H_BASE + 248;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i15 >> 2] | 0) + 8 >> 2] & 63](i15);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 8 >> 2] & 63](i18);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEELj0ENS3_15CrashOnOverflowEEEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i1 + 8 | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 L1 : do {
  if ((i6 | 0) != 0) {
   i7 = i1 | 0;
   i8 = 0;
   i9 = i6;
   while (1) {
    if (i9 >>> 0 <= i8 >>> 0) {
     break;
    }
    i10 = HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 << 2) >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i11 = i10 + 24 | 0;
      i12 = HEAP8[i11] | 0;
      if ((i12 & 1) != 0) {
       break;
      }
      i13 = __Znwj(64) | 0;
      i14 = i10 + 20 | 0;
      _memcpy(i13 | 0, HEAP32[i14 >> 2] | 0, 64) | 0;
      HEAP32[i14 >> 2] = i13;
      HEAP8[i11] = i12 | 1;
      HEAP32[i10 + 12 >> 2] = 0;
     }
    } while (0);
    i10 = i8 + 1 | 0;
    if (i10 >>> 0 >= i6 >>> 0) {
     break L1;
    }
    i8 = i10;
    i9 = HEAP32[i5 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i2 | 0) != 0) {
  i6 = i4 | 0;
  HEAP32[i6 >> 2] = 0;
  __ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_12SVGTransformEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j(i1, i4, i2);
  i2 = HEAP32[i6 >> 2] | 0;
  if ((i2 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  i6 = i2 + 4 | 0;
  i2 = i6 | 0;
  i4 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
  if ((i4 | 0) != 0) {
   HEAP32[i2 >> 2] = i4;
   STACKTOP = i3;
   return;
  }
  i4 = i6 - 4 | 0;
  if ((i4 | 0) == 0) {
   STACKTOP = i3;
   return;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 4 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i6 = HEAP32[i5 >> 2] | 0;
 i2 = i1 | 0;
 if ((i6 | 0) != 0) {
  i1 = HEAP32[i2 >> 2] | 0;
  i9 = i1 + (i6 << 2) | 0;
  i6 = i1;
  while (1) {
   i1 = HEAP32[i6 >> 2] | 0;
   do {
    if ((i1 | 0) != 0) {
     i8 = i1 + 4 | 0;
     i7 = i8 | 0;
     i10 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i10 | 0) != 0) {
      HEAP32[i7 >> 2] = i10;
      break;
     }
     i10 = i8 - 4 | 0;
     if ((i10 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] & 63](i10);
    }
   } while (0);
   i6 = i6 + 4 | 0;
   if ((i6 | 0) == (i9 | 0)) {
    break;
   }
  }
  HEAP32[i5 >> 2] = 0;
 }
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i4 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11SVGViewSpec18setTransformStringERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i1 + 8 | 0;
 if ((HEAP32[i7 >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i8 = i6 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i6 + 4 | 0;
 HEAP32[i9 >> 2] = 0;
 i10 = i6 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore16SVGTransformList5parseERKN3WTF6StringE(i6, i2);
 i2 = HEAP32[i7 >> 2] | 0;
 i7 = HEAP32[H_BASE + 640 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i11 = __ZN3WTF10fastMallocEj(24) | 0;
  if (HEAP8[H_BASE + 608 | 0] | 0) {
   i12 = HEAP32[H_BASE + 656 >> 2] | 0;
  } else {
   i13 = __Znwj(4) | 0;
   i14 = i13;
   __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i5, H_BASE + 8 | 0, 29);
   i15 = i5 | 0;
   i5 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   HEAP32[i13 >> 2] = i5;
   HEAP32[H_BASE + 656 >> 2] = i14;
   HEAP8[H_BASE + 608 | 0] = 1;
   i12 = i14;
  }
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i11, 16, 1, __ZN7WebCore8SVGNames13transformAttrE, i12, 0, 0);
  HEAP32[H_BASE + 640 >> 2] = i11;
  i16 = i11;
 } else {
  i16 = i7;
 }
 i7 = HEAP32[i16 + 12 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i4 + 4 >> 2] = HEAP32[i7 >> 2];
 i7 = __ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_(__ZN7WebCore19SVGAnimatedProperty21animatedPropertyCacheEv() | 0, i4) | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = HEAP32[i7 + 8 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   __ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEELj0ENS3_15CrashOnOverflowEEEj(i4 + 28 | 0, HEAP32[i10 >> 2] | 0);
  }
 } while (0);
 __ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEEaSERKS4_(i1 + 16 | 0, i6 | 0) | 0;
 if ((HEAP32[i10 >> 2] | 0) != 0) {
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i8 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i8 >> 2] = 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 HEAP32[i1 >> 2] = H_BASE + 208;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
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
 i2 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 + 4 | 0;
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i3 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
  }
 } while (0);
 i2 = i1 + 48 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 i5 = i1 + 40 | 0;
 if ((i4 | 0) != 0) {
  i3 = HEAP32[i5 >> 2] | 0;
  i6 = i3 + (i4 << 2) | 0;
  i4 = i3;
  while (1) {
   i3 = HEAP32[i4 >> 2] | 0;
   do {
    if ((i3 | 0) != 0) {
     i7 = i3 + 4 | 0;
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
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 63](i9);
    }
   } while (0);
   i4 = i4 + 4 | 0;
   if ((i4 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i5 >> 2] = 0;
  HEAP32[i1 + 44 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 36 | 0;
 i5 = HEAP32[i2 >> 2] | 0;
 i6 = i1 + 28 | 0;
 if ((i5 | 0) != 0) {
  i4 = HEAP32[i6 >> 2] | 0;
  i3 = i4 + (i5 << 2) | 0;
  i5 = i4;
  while (1) {
   i4 = HEAP32[i5 >> 2] | 0;
   do {
    if ((i4 | 0) != 0) {
     i9 = i4 + 4 | 0;
     i7 = i9 | 0;
     i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
     if ((i8 | 0) != 0) {
      HEAP32[i7 >> 2] = i8;
      break;
     }
     i8 = i9 - 4 | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
    }
   } while (0);
   i5 = i5 + 4 | 0;
   if ((i5 | 0) == (i3 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i6 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i10 = i1 | 0;
  __ZN7WebCore19SVGAnimatedPropertyD2Ev(i10);
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 32 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i10 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i10);
 return;
}
function __ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEEaSERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
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
   i13 = i10 + (i12 << 6) | 0;
   if (i8 >>> 0 > 67108863 >>> 0) {
    _WTFCrash();
    return 0;
   }
   i14 = __ZN3WTF18fastMallocGoodSizeEj(i8 << 6) | 0;
   HEAP32[i7 >> 2] = i14 >>> 6;
   i8 = __ZN3WTF10fastMallocEj(i14) | 0;
   HEAP32[i11 >> 2] = i8;
   if ((i12 | 0) != 0) {
    i12 = i10;
    i14 = i8;
    while (1) {
     _memcpy(i14 | 0, i12 | 0, 64) | 0;
     i8 = i12 + 64 | 0;
     if ((i8 | 0) == (i13 | 0)) {
      break;
     } else {
      i12 = i8;
      i14 = i14 + 64 | 0;
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
 _memmove(HEAP32[i2 >> 2] | 0, HEAP32[i9 >> 2] | 0, HEAP32[i3 >> 2] << 6 | 0) | 0;
 i4 = HEAP32[i9 >> 2] | 0;
 i9 = HEAP32[i3 >> 2] | 0;
 i6 = HEAP32[i5 >> 2] | 0;
 i14 = i4 + (i6 << 6) | 0;
 if ((i9 | 0) == (i6 | 0)) {
  i15 = i9;
 } else {
  i6 = i4 + (i9 << 6) | 0;
  i4 = (HEAP32[i2 >> 2] | 0) + (i9 << 6) | 0;
  while (1) {
   _memcpy(i4 | 0, i6 | 0, 64) | 0;
   i9 = i6 + 64 | 0;
   if ((i9 | 0) == (i14 | 0)) {
    break;
   } else {
    i6 = i9;
    i4 = i4 + 64 | 0;
   }
  }
  i15 = HEAP32[i5 >> 2] | 0;
 }
 HEAP32[i3 >> 2] = i15;
 return i1 | 0;
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE12commitChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i2 = i1 + 20 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = HEAP32[i3 + 8 >> 2] | 0;
 i5 = i1 + 24 | 0;
 if ((i4 | 0) == 0) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 | 0;
  __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i7);
  return;
 }
 i8 = i1 + 16 | 0;
 i1 = 0;
 i9 = i3;
 i3 = i4;
 while (1) {
  if (i3 >>> 0 <= i1 >>> 0) {
   i10 = 4;
   break;
  }
  i11 = HEAP32[(HEAP32[i9 >> 2] | 0) + (i1 << 2) >> 2] | 0;
  if ((i11 | 0) != 0) {
   i12 = HEAP32[i5 >> 2] | 0;
   HEAP32[i11 + 12 >> 2] = i12;
   do {
    if ((i12 | 0) != 0) {
     i13 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i13 | 0) != 0) {
      i14 = i13 + 8 | 0;
      HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
     }
     i14 = i11 + 8 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i13;
     if ((i15 | 0) == 0) {
      break;
     }
     i13 = i15 + 8 | 0;
     i15 = i13 | 0;
     i14 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     HEAP32[i15 >> 2] = i14;
     if ((i14 | 0) >= 1) {
      break;
     }
     if ((HEAP32[i13 + 8 >> 2] | 0) != 0) {
      break;
     }
     __ZN7WebCore4Node14removedLastRefEv(i13 - 8 | 0);
    }
   } while (0);
   i12 = HEAP32[i8 >> 2] | 0;
   if ((HEAP32[i12 + 8 >> 2] | 0) >>> 0 <= i1 >>> 0) {
    i10 = 14;
    break;
   }
   i13 = (HEAP32[i12 >> 2] | 0) + (i1 << 6) | 0;
   i12 = i11 + 24 | 0;
   i14 = HEAP8[i12] | 0;
   i15 = i11 + 20 | 0;
   do {
    if ((i14 & 1) == 0) {
     i16 = i14;
    } else {
     i17 = HEAP32[i15 >> 2] | 0;
     if ((i17 | 0) == 0) {
      i16 = i14;
      break;
     }
     __ZdlPv(i17);
     i16 = HEAP8[i12] | 0;
    }
   } while (0);
   HEAP8[i12] = i16 & -2;
   HEAP32[i15 >> 2] = i13;
  }
  i14 = i1 + 1 | 0;
  if (i14 >>> 0 >= i4 >>> 0) {
   i10 = 23;
   break;
  }
  i11 = HEAP32[i2 >> 2] | 0;
  i1 = i14;
  i9 = i11;
  i3 = HEAP32[i11 + 8 >> 2] | 0;
 }
 if ((i10 | 0) == 23) {
  i6 = HEAP32[i5 >> 2] | 0;
  i7 = i6 | 0;
  __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i7);
  return;
 } else if ((i10 | 0) == 14) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i10 | 0) == 4) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE18removeItemFromListEjb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i4 = i1 + 20 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((HEAP32[i5 + 8 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i6 = HEAP32[i5 >> 2] | 0;
 i7 = HEAP32[i6 + (i2 << 2) >> 2] | 0;
 i8 = i7 + 24 | 0;
 i9 = HEAP8[i8] | 0;
 if ((i9 & 1) == 0) {
  i10 = __Znwj(64) | 0;
  i11 = i7 + 20 | 0;
  _memcpy(i10 | 0, HEAP32[i11 >> 2] | 0, 64) | 0;
  HEAP32[i11 >> 2] = i10;
  HEAP8[i8] = i9 | 1;
  HEAP32[i7 + 12 >> 2] = 0;
  i7 = HEAP32[i4 >> 2] | 0;
  i12 = i7;
  i13 = HEAP32[i7 >> 2] | 0;
 } else {
  i12 = i5;
  i13 = i6;
 }
 i6 = i12 | 0;
 i5 = i13 + (i2 << 2) | 0;
 i7 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 + 4 | 0;
   i9 = i4 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) != 0) {
    HEAP32[i9 >> 2] = i8;
    break;
   }
   i8 = i4 - 4 | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 63](i8);
  }
 } while (0);
 i7 = i2 + 1 | 0;
 i8 = i13 + (i7 << 2) | 0;
 i13 = i12 + 8 | 0;
 _memmove(i5 | 0, i8 | 0, (HEAP32[i6 >> 2] | 0) + (HEAP32[i13 >> 2] << 2) - i8 | 0) | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
 i13 = HEAP32[i1 + 16 >> 2] | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 i6 = i8 + (i7 << 6) | 0;
 i5 = i13 + 8 | 0;
 i13 = HEAP32[i5 >> 2] | 0;
 i12 = i8 + (i13 << 6) | 0;
 do {
  if ((i2 | 0) == 2147483647) {
   if ((i13 | 0) == (i7 | 0)) {
    break;
   }
   i4 = i12;
   i9 = i8 + ((i12 - i6 >> 6) + 2147483647 << 6) | 0;
   while (1) {
    i4 = i4 - 64 | 0;
    i9 = i9 - 64 | 0;
    _memcpy(i9 | 0, i4 | 0, 64) | 0;
    if ((i4 | 0) == (i6 | 0)) {
     break;
    }
   }
  } else {
   if ((i7 | 0) == (i13 | 0)) {
    break;
   }
   i4 = i6;
   i9 = i8 + (i2 << 6) | 0;
   while (1) {
    _memcpy(i9 | 0, i4 | 0, 64) | 0;
    i10 = i4 + 64 | 0;
    if ((i10 | 0) == (i12 | 0)) {
     break;
    } else {
     i4 = i10;
     i9 = i9 + 64 | 0;
    }
   }
  }
 } while (0);
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - 1;
 if (!i3) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEEPj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i2 | 0;
 i2 = HEAP32[(HEAP32[i4 >> 2] | 0) + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i5 = 1;
  return i5 | 0;
 }
 if (!(FUNCTION_TABLE_ii[HEAP32[HEAP32[i2 >> 2] >> 2] & 31](i2) | 0)) {
  i6 = HEAP32[(HEAP32[i4 >> 2] | 0) + 20 >> 2] | 0;
  i7 = __ZN3WTF10fastMallocEj(28) | 0;
  HEAP32[i7 + 4 >> 2] = 1;
  HEAP32[i7 >> 2] = H_BASE + 360;
  HEAP32[i7 + 8 >> 2] = 0;
  HEAP32[i7 + 12 >> 2] = 0;
  HEAP32[i7 + 16 >> 2] = 0;
  i8 = __Znwj(64) | 0;
  _memcpy(i8 | 0, i6 | 0, 64) | 0;
  HEAP32[i7 + 20 >> 2] = i8;
  i8 = i7 + 24 | 0;
  HEAP8[i8] = HEAP8[i8] | 1;
  i8 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = i7;
  if ((i8 | 0) == 0) {
   i5 = 1;
   return i5 | 0;
  }
  i7 = i8 + 4 | 0;
  i8 = i7 | 0;
  i6 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
  if ((i6 | 0) != 0) {
   HEAP32[i8 >> 2] = i6;
   i5 = 1;
   return i5 | 0;
  }
  i6 = i7 - 4 | 0;
  if ((i6 | 0) == 0) {
   i5 = 1;
   return i5 | 0;
  }
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 63](i6);
  i5 = 1;
  return i5 | 0;
 }
 i6 = (HEAP32[i1 + 24 >> 2] | 0) != (i2 | 0);
 i1 = HEAP32[i4 >> 2] | 0;
 i4 = HEAP32[i2 + 52 >> 2] | 0;
 i2 = HEAP32[i4 + 20 >> 2] | 0;
 i7 = HEAP32[i2 + 8 >> 2] | 0;
 i8 = i2 | 0;
 i2 = 0;
 while (1) {
  if (i2 >>> 0 >= i7 >>> 0) {
   i9 = -1;
   break;
  }
  if ((HEAP32[(HEAP32[i8 >> 2] | 0) + (i2 << 2) >> 2] | 0) == (i1 | 0)) {
   i9 = i2;
   break;
  } else {
   i2 = i2 + 1 | 0;
  }
 }
 if (i6 | (i3 | 0) == 0) {
  __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE18removeItemFromListEjb(i4, i9, i6);
  i5 = 1;
  return i5 | 0;
 }
 if ((i9 | 0) == (HEAP32[i3 >> 2] | 0)) {
  i5 = 0;
  return i5 | 0;
 }
 __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE18removeItemFromListEjb(i4, i9, 0);
 i4 = HEAP32[i3 >> 2] | 0;
 if (i9 >>> 0 >= i4 >>> 0) {
  i5 = 1;
  return i5 | 0;
 }
 HEAP32[i3 >> 2] = i4 - 1;
 i5 = 1;
 return i5 | 0;
}
function runPostSets() {
 HEAP32[H_BASE + 120 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 24;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vi + 26;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_vi + 16;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_vi + 40;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 248 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 252 >> 2] = F_BASE_vi + 22;
 HEAP32[H_BASE + 256 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 280 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 284 >> 2] = F_BASE_vi + 32;
 HEAP32[H_BASE + 288 >> 2] = F_BASE_vi + 20;
 HEAP32[H_BASE + 312 >> 2] = F_BASE_vi + 28;
 HEAP32[H_BASE + 316 >> 2] = F_BASE_vi + 34;
 HEAP32[H_BASE + 320 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 324 >> 2] = F_BASE_vi + 30;
 HEAP32[H_BASE + 328 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 332 >> 2] = F_BASE_iiii + 4;
 HEAP32[H_BASE + 336 >> 2] = F_BASE_iiii + 2;
 HEAP32[H_BASE + 360 >> 2] = F_BASE_vi + 36;
 HEAP32[H_BASE + 364 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 368 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 372 >> 2] = F_BASE_vi + 18;
 HEAP32[H_BASE + 392 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 396 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 400 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 404 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 408 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 412 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 416 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 440 >> 2] = F_BASE_vi + 38;
 HEAP32[H_BASE + 444 >> 2] = F_BASE_vi + 10;
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
    i12 = 9;
    break;
   }
  }
  i11 = (i7 | 0) == 0 ? i2 : i7;
  i1 = i11 + i9 | 0;
  i7 = i11;
 }
 if ((i12 | 0) == 9) {
  return i8 | 0;
 } else if ((i12 | 0) == 10) {
  return i8 | 0;
 }
 return 0;
}
function __ZN7WebCore11SVGViewSpec40lookupOrCreatePreserveAspectRatioWrapperEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[H_BASE + 624 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  if (HEAP8[H_BASE + 600 | 0] | 0) {
   i9 = HEAP32[H_BASE + 632 >> 2] | 0;
  } else {
   i10 = __Znwj(4) | 0;
   i11 = i10;
   __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 40 | 0, 39);
   i12 = i4 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i10 >> 2] = i4;
   HEAP32[H_BASE + 632 >> 2] = i11;
   HEAP8[H_BASE + 600 | 0] = 1;
   i9 = i11;
  }
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 13, 1, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, i9, 0, 0);
  HEAP32[H_BASE + 624 >> 2] = i8;
  i13 = i8;
 } else {
  i13 = i7;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i5, i6, i13, i2 + 44 | 0);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11SVGViewSpec5resetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i3 = i2 | 0;
 i4 = i2 + 16 | 0;
 i5 = i4;
 HEAP32[i1 + 12 >> 2] = 2;
 i6 = i1 + 20 | 0;
 do {
  if ((HEAP32[i6 >> 2] | 0) != 0) {
   i7 = i1 + 24 | 0;
   if ((HEAP32[i7 >> 2] | 0) != 0) {
    HEAP32[i7 >> 2] = 0;
   }
   i7 = i1 + 16 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   HEAP32[i7 >> 2] = 0;
   HEAP32[i6 >> 2] = 0;
   __ZN3WTF8fastFreeEPv(i8);
  }
 } while (0);
 i6 = i3;
 _memset(i6 | 0, 0, 16) | 0;
 i3 = i1 + 28 | 0;
 HEAP32[i3 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i3 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i3 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i5);
 i5 = i1 + 44 | 0;
 i6 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i6;
 i6 = HEAP32[(__ZN3WTF11emptyStringEv() | 0) >> 2] | 0;
 if ((i6 | 0) != 0) {
  i5 = i6 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = i1 + 52 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i6;
 if ((i1 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i6 = i1 | 0;
 i5 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
 if ((i5 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i1);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i6 >> 2] = i5;
  STACKTOP = i2;
  return;
 }
}
function __ZN7WebCore11SVGViewSpec30lookupOrCreateTransformWrapperEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[H_BASE + 640 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  if (HEAP8[H_BASE + 608 | 0] | 0) {
   i9 = HEAP32[H_BASE + 656 >> 2] | 0;
  } else {
   i10 = __Znwj(4) | 0;
   i11 = i10;
   __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 8 | 0, 29);
   i12 = i4 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i10 >> 2] = i4;
   HEAP32[H_BASE + 656 >> 2] = i11;
   HEAP8[H_BASE + 608 | 0] = 1;
   i9 = i11;
  }
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 16, 1, __ZN7WebCore8SVGNames13transformAttrE, i9, 0, 0);
  HEAP32[H_BASE + 640 >> 2] = i8;
  i13 = i8;
 } else {
  i13 = i7;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_39SVGAnimatedTransformListPropertyTearOffENS_16SVGTransformListEEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i5, i6, i13, i2 + 16 | 0);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11SVGViewSpec28lookupOrCreateViewBoxWrapperEPS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = HEAP32[i2 + 8 >> 2] | 0;
 i7 = HEAP32[H_BASE + 648 >> 2] | 0;
 if ((i7 | 0) == 0) {
  i8 = __ZN3WTF10fastMallocEj(24) | 0;
  if (HEAP8[H_BASE + 616 | 0] | 0) {
   i9 = HEAP32[H_BASE + 664 >> 2] | 0;
  } else {
   i10 = __Znwj(4) | 0;
   i11 = i10;
   __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i4, H_BASE + 80 | 0, 27);
   i12 = i4 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i10 >> 2] = i4;
   HEAP32[H_BASE + 664 >> 2] = i11;
   HEAP8[H_BASE + 616 | 0] = 1;
   i9 = i11;
  }
  __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i8, 14, 1, __ZN7WebCore8SVGNames11viewBoxAttrE, i9, 0, 0);
  HEAP32[H_BASE + 648 >> 2] = i8;
  i13 = i8;
 } else {
  i13 = i7;
 }
 __ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_(i5, i6, i13, i2 + 28 | 0);
 HEAP32[i1 >> 2] = HEAP32[i5 >> 2];
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore11SVGViewSpec10viewTargetEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i7 = HEAP32[i5 + 20 >> 2] | 0;
 i5 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i1 = i3 | 0;
   HEAP32[i1 >> 2] = 0;
   i8 = i1;
  } else {
   if ((HEAP32[i5 + 16 >> 2] & 16 | 0) == 0) {
    __ZN3WTF12AtomicString11addSlowCaseEPNS_10StringImplE(i3, i5);
    i8 = i3 | 0;
    break;
   } else {
    i1 = i3 | 0;
    HEAP32[i1 >> 2] = i5;
    i9 = i5 | 0;
    HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
    i8 = i1;
    break;
   }
  }
 } while (0);
 i5 = i4 | 0;
 HEAP32[i5 >> 2] = HEAP32[i8 >> 2];
 i8 = __ZNK7WebCore9TreeScope14getElementByIdERKN3WTF12AtomicStringE(i7, i4) | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i7;
    break;
   }
  }
 } while (0);
 if ((i8 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 if ((HEAP32[i8 + 12 >> 2] & 32 | 0) == 0) {
  i6 = 0;
  STACKTOP = i2;
  return i6 | 0;
 }
 i6 = i8;
 STACKTOP = i2;
 return i6 | 0;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 248;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
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
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 63](i4);
 i8 = i1 | 0;
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i8);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 280;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 248;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 63](i7);
  }
 } while (0);
 __ZN7WebCore19SVGAnimatedPropertyD2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 312;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i2 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore11SVGViewSpec31preserveAspectRatioPropertyInfoEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = HEAP32[H_BASE + 624 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i1;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 if (HEAP8[H_BASE + 600 | 0] | 0) {
  i5 = HEAP32[H_BASE + 632 >> 2] | 0;
 } else {
  i6 = __Znwj(4) | 0;
  i7 = i6;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 40 | 0, 39);
  i8 = i2 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[H_BASE + 632 >> 2] = i7;
  HEAP8[H_BASE + 600 | 0] = 1;
  i5 = i7;
 }
 __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i3, 13, 1, __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, i5, 0, 0);
 HEAP32[H_BASE + 624 >> 2] = i3;
 i4 = i3;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZN7WebCore31SVGTransformListPropertyTearOffD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 312;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1;
  __ZN3WTF8fastFreeEPv(i7);
  return;
 }
 i3 = i2 + 8 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i2 | 0;
 i6 = HEAP32[i3 >> 2] | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i6);
 }
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1;
 __ZN3WTF8fastFreeEPv(i7);
 return;
}
function __ZN7WebCore11SVGViewSpec21transformPropertyInfoEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = HEAP32[H_BASE + 640 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i1;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 if (HEAP8[H_BASE + 608 | 0] | 0) {
  i5 = HEAP32[H_BASE + 656 >> 2] | 0;
 } else {
  i6 = __Znwj(4) | 0;
  i7 = i6;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 8 | 0, 29);
  i8 = i2 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[H_BASE + 656 >> 2] = i7;
  HEAP8[H_BASE + 608 | 0] = 1;
  i5 = i7;
 }
 __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i3, 16, 1, __ZN7WebCore8SVGNames13transformAttrE, i5, 0, 0);
 HEAP32[H_BASE + 640 >> 2] = i3;
 i4 = i3;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZN7WebCore11SVGViewSpec19viewBoxPropertyInfoEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 i3 = HEAP32[H_BASE + 648 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3;
  STACKTOP = i1;
  return i4 | 0;
 }
 i3 = __ZN3WTF10fastMallocEj(24) | 0;
 if (HEAP8[H_BASE + 616 | 0] | 0) {
  i5 = HEAP32[H_BASE + 664 >> 2] | 0;
 } else {
  i6 = __Znwj(4) | 0;
  i7 = i6;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 80 | 0, 27);
  i8 = i2 | 0;
  i2 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  HEAP32[i6 >> 2] = i2;
  HEAP32[H_BASE + 664 >> 2] = i7;
  HEAP8[H_BASE + 616 | 0] = 1;
  i5 = i7;
 }
 __ZN7WebCore15SVGPropertyInfoC1ENS_20AnimatedPropertyTypeENS_21AnimatedPropertyStateERKNS_13QualifiedNameERKN3WTF12AtomicStringEPFvPNS_10SVGElementEEPFNS6_10PassRefPtrINS_19SVGAnimatedPropertyEEESB_E(i3, 14, 1, __ZN7WebCore8SVGNames11viewBoxAttrE, i5, 0, 0);
 HEAP32[H_BASE + 648 >> 2] = i3;
 i4 = i3;
 STACKTOP = i1;
 return i4 | 0;
}
function __ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7baseValEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 52 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   i4 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i4 + 4 >> 2] = 1;
   i5 = i4;
   HEAP32[i4 + 8 >> 2] = 1;
   HEAP8[i4 + 12 | 0] = 0;
   HEAP32[i4 + 16 >> 2] = i3;
   HEAP32[i4 + 20 >> 2] = i1 + 28;
   HEAP32[i5 >> 2] = H_BASE + 312;
   HEAP32[i4 + 24 >> 2] = i1;
   i3 = i1 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   HEAP32[i5 >> 2] = H_BASE + 160;
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 + 4 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7animValEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 56 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   i4 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i4 + 4 >> 2] = 1;
   i5 = i4;
   HEAP32[i4 + 8 >> 2] = 2;
   HEAP8[i4 + 12 | 0] = 0;
   HEAP32[i4 + 16 >> 2] = i3;
   HEAP32[i4 + 20 >> 2] = i1 + 28;
   HEAP32[i5 >> 2] = H_BASE + 312;
   HEAP32[i4 + 24 >> 2] = i1;
   i3 = i1 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   HEAP32[i5 >> 2] = H_BASE + 160;
   i5 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i5 | 0) == 0) {
    break;
   }
   i4 = i5 + 4 | 0;
   i5 = i4 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) != 0) {
    HEAP32[i5 >> 2] = i3;
    break;
   }
   i3 = i4 - 4 | 0;
   if ((i3 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 63](i3);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7baseValEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 52 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   i4 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i4 + 4 >> 2] = 1;
   HEAP32[i4 + 8 >> 2] = 1;
   HEAP8[i4 + 12 | 0] = 0;
   HEAP32[i4 + 16 >> 2] = i3;
   HEAP32[i4 + 20 >> 2] = i1 + 28;
   HEAP32[i4 >> 2] = H_BASE + 312;
   HEAP32[i4 + 24 >> 2] = i1;
   i3 = i1 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i3 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i3 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7animValEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 56 | 0;
 do {
  if ((HEAP32[i2 >> 2] | 0) == 0) {
   i3 = HEAP32[i1 + 24 >> 2] | 0;
   i4 = __ZN3WTF10fastMallocEj(28) | 0;
   HEAP32[i4 + 4 >> 2] = 1;
   HEAP32[i4 + 8 >> 2] = 2;
   HEAP8[i4 + 12 | 0] = 0;
   HEAP32[i4 + 16 >> 2] = i3;
   HEAP32[i4 + 20 >> 2] = i1 + 28;
   HEAP32[i4 >> 2] = H_BASE + 312;
   HEAP32[i4 + 24 >> 2] = i1;
   i3 = i1 + 4 | 0;
   HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
   i3 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = i4;
   if ((i3 | 0) == 0) {
    break;
   }
   i4 = i3 + 4 | 0;
   i3 = i4 | 0;
   i5 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) != 0) {
    HEAP32[i3 >> 2] = i5;
    break;
   }
   i5 = i4 - 4 | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 63](i5);
  }
 } while (0);
 return HEAP32[i2 >> 2] | 0;
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 312;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore31SVGTransformListPropertyTearOffD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 | 0;
 HEAP32[i2 >> 2] = H_BASE + 312;
 i3 = HEAP32[i1 + 24 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
  }
 } while (0);
 HEAP32[i2 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11SVGViewSpec9transformEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 __ZN7WebCore11SVGViewSpec30lookupOrCreateTransformWrapperEPS0_(i3, i1);
 i1 = i3 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 i1 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i3 >> 2] | 0) + 16 >> 2] & 31](i3) | 0;
 if ((i3 | 0) == 0) {
  i4 = i1;
  STACKTOP = i2;
  return i4 | 0;
 }
 i5 = i3 + 4 | 0;
 i3 = i5 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) != 0) {
  HEAP32[i3 >> 2] = i6;
  i4 = i1;
  STACKTOP = i2;
  return i4 | 0;
 }
 i6 = i5 - 4 | 0;
 if ((i6 | 0) == 0) {
  i4 = i1;
  STACKTOP = i2;
  return i4 | 0;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 63](i6);
 i4 = i1;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore11SVGViewSpecD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = i1;
  __ZN3WTF8fastFreeEPv(i5);
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 i5 = i1;
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 do {
  if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZdlPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 8 | 0;
   i4 = i3 | 0;
   i5 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   HEAP32[i4 >> 2] = i5;
   if ((i5 | 0) >= 1) {
    break;
   }
   if ((HEAP32[i3 + 8 >> 2] | 0) != 0) {
    break;
   }
   __ZN7WebCore4Node14removedLastRefEv(i3 - 8 | 0);
  }
 } while (0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 HEAP32[i1 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 i3 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i2 = i1;
  __ZN3WTF8fastFreeEPv(i2);
  return;
 }
 i4 = i3 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
 }
 i4 = i3 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i5);
 }
 __ZN3WTF8fastFreeEPv(i3);
 i2 = i1;
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11SVGViewSpecD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 HEAP32[i1 >> 2] = H_BASE + 440;
 i2 = HEAP32[i1 + 52 >> 2] | 0;
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
 i2 = i1 + 24 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 16 | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  return;
 }
 HEAP32[i2 >> 2] = 0;
 HEAP32[i1 + 20 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i4);
 return;
}
function __ZN7WebCore11SVGViewSpec29preserveAspectRatioIdentifierEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 if (HEAP8[H_BASE + 600 | 0] | 0) {
  i3 = HEAP32[H_BASE + 632 >> 2] | 0;
  STACKTOP = i1;
  return i3 | 0;
 } else {
  i4 = __Znwj(4) | 0;
  i5 = i4;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 40 | 0, 39);
  i6 = i2 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[H_BASE + 632 >> 2] = i5;
  HEAP8[H_BASE + 600 | 0] = 1;
  i3 = i5;
  STACKTOP = i1;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11SVGViewSpec19transformIdentifierEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 if (HEAP8[H_BASE + 608 | 0] | 0) {
  i3 = HEAP32[H_BASE + 656 >> 2] | 0;
  STACKTOP = i1;
  return i3 | 0;
 } else {
  i4 = __Znwj(4) | 0;
  i5 = i4;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 8 | 0, 29);
  i6 = i2 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[H_BASE + 656 >> 2] = i5;
  HEAP8[H_BASE + 608 | 0] = 1;
  i3 = i5;
  STACKTOP = i1;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore11SVGViewSpec17viewBoxIdentifierEv() {
 var i1 = 0, i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i2 = i1 | 0;
 if (HEAP8[H_BASE + 616 | 0] | 0) {
  i3 = HEAP32[H_BASE + 664 >> 2] | 0;
  STACKTOP = i1;
  return i3 | 0;
 } else {
  i4 = __Znwj(4) | 0;
  i5 = i4;
  __ZN3WTF12AtomicString18addFromLiteralDataEPKcj(i2, H_BASE + 80 | 0, 27);
  i6 = i2 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i4 >> 2] = i2;
  HEAP32[H_BASE + 664 >> 2] = i5;
  HEAP8[H_BASE + 616 | 0] = 1;
  i3 = i5;
  STACKTOP = i1;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 360;
 do {
  if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
   i2 = HEAP32[i1 + 20 >> 2] | 0;
   if ((i2 | 0) == 0) {
    break;
   }
   __ZdlPv(i2);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 i2 = i1 | 0;
 i3 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
 HEAP32[i2 >> 2] = i3;
 if ((i3 | 0) >= 1) {
  return;
 }
 if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
  return;
 }
 __ZN7WebCore4Node14removedLastRefEv(i1 - 8 | 0);
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
function __ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 HEAP32[i1 >> 2] = H_BASE + 392;
 if ((HEAP8[i1 + 12 | 0] & 1) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 16 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 + 8 | 0;
 if ((HEAP32[i1 >> 2] | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
 }
 i1 = i2 | 0;
 i3 = HEAP32[i1 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i1 >> 2] = 0;
  HEAP32[i2 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore11SVGViewSpec27preserveAspectRatioAnimatedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore11SVGViewSpec40lookupOrCreatePreserveAspectRatioWrapperEPS0_(i4, i2);
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZNK7WebCore11SVGViewSpec13viewBoxStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i4;
 i6 = i2 + 28 | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i6 + 4 >> 2];
 HEAP32[i5 + 8 >> 2] = HEAP32[i6 + 8 >> 2];
 HEAP32[i5 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
 __ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11SVGViewSpec15viewBoxAnimatedEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP32[i2 + 8 >> 2] | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore11SVGViewSpec28lookupOrCreateViewBoxWrapperEPS0_(i4, i2);
  i2 = i4 | 0;
  i4 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
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
function __ZNK7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE10isReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 24 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 21 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 1;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
}
function __ZNK7WebCore11SVGViewSpec25preserveAspectRatioStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 + 44 | 0;
 i2 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i2;
 __ZNK7WebCore22SVGPreserveAspectRatio13valueAsStringEv(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore18SVGPropertyTearOffINS_12SVGTransformEE10isReadOnlyEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 if ((HEAP32[i1 + 16 >> 2] | 0) == 2) {
  i2 = 1;
  return i2 | 0;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   if ((HEAP8[i3 + 21 | 0] & 1) == 0) {
    break;
   } else {
    i2 = 1;
   }
   return i2 | 0;
  }
 } while (0);
 i2 = 0;
 return i2 | 0;
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
function __ZN7WebCore11SVGViewSpecC2EPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 2;
 _memset(i1 + 16 | 0, 0, 28) | 0;
 __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i1 + 44 | 0);
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function __ZN7WebCore11SVGViewSpecC1EPNS_10SVGElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 4 >> 2] = 1;
 HEAP32[i1 >> 2] = H_BASE + 440;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 12 >> 2] = 2;
 _memset(i1 + 16 | 0, 0, 28) | 0;
 __ZN7WebCore22SVGPreserveAspectRatioC1Ev(i1 + 44 | 0);
 HEAP32[i1 + 52 >> 2] = 0;
 return;
}
function _memcmp(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 while ((i4 | 0) < (i3 | 0)) {
  i5 = HEAPU8[i1 + i4 | 0] | 0;
  i6 = HEAPU8[i2 + i4 | 0] | 0;
  if ((i5 | 0) != (i6 | 0)) return ((i5 | 0) > (i6 | 0) ? 1 : -1) | 0;
  i4 = i4 + 1 | 0;
 }
 return 0;
}
function __ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEE12commitChangeEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 if ((HEAP8[i1 + 24 | 0] & 1) != 0) {
  return;
 }
 __ZN7WebCore19SVGAnimatedProperty12commitChangeEv(i2);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE12commitChangeENS_16ListModificationE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 63](i1);
 return;
}
function __ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev(i1 | 0);
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev(i1);
 return;
}
function __ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE28processIncomingListItemValueERKNS_12SVGTransformEPj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return 1;
}
function __ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev(i1 | 0);
 return;
}
function __ZNK7WebCore11SVGViewSpec15transformStringEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore16SVGTransformList13valueAsStringEv(i1, i2 + 16 | 0);
 return;
}
function dynCall_iiii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 return FUNCTION_TABLE_iiii[i1 & 7](i2 | 0, i3 | 0, i4 | 0) | 0;
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore11SVGViewSpec13setZoomAndPanEtRi(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i3 >> 2] = 7;
 return;
}
function __ZNK7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 1;
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
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 7](i2 | 0, i3 | 0);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 63](i2 | 0);
}
function b0(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(0);
 return 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b4() {
 abort(4);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_iiii = [b0,b0,__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEEPj,b0,__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE28processIncomingListItemValueERKNS_12SVGTransformEPj,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED1Ev,b1,__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED0Ev,b1,__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED0Ev,b1,__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED0Ev,b1,__ZN7WebCore11SVGViewSpecD0Ev,b1,__ZN7WebCore31SVGTransformListPropertyTearOffD0Ev,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev,b1,__ZN7WebCore31SVGTransformListPropertyTearOffD1Ev,b1,__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEE12commitChangeEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev,b1,__ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD1Ev,b1,__ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD0Ev,b1,__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED1Ev
  ,b1,__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE12commitChangeEv,b1,__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev,b1,__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED0Ev,b1,__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED1Ev,b1,__ZN7WebCore11SVGViewSpecD1Ev,b1,__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED1Ev,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1,b1
  ,b1,b1,b1,b1,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE12commitChangeENS_16ListModificationE,b2,__ZN7WebCore11SVGViewSpecC2EPNS_10SVGElementE,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7baseValEv,b3,__ZNK7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE10isReadOnlyEv,b3,__ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7baseValEv,b3,__ZNK7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE21isAnimatedListTearOffEv,b3,__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7animValEv,b3,__ZNK7WebCore18SVGPropertyTearOffINS_12SVGTransformEE10isReadOnlyEv,b3,__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv,b3,__ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7animValEv,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_v = [b4,b4,v____cxa_pure_virtual__wrapper,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _memmove: _memmove, _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, _memcmp: _memcmp, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_iiii: dynCall_iiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_iiii": invoke_iiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___cxa_pure_virtual": ___cxa_pure_virtual, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_trap": _llvm_trap, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZN7WebCore8SVGNames13transformAttrE": __ZN7WebCore8SVGNames13transformAttrE, "__ZN7WebCore8SVGNames23preserveAspectRatioAttrE": __ZN7WebCore8SVGNames23preserveAspectRatioAttrE, "__ZN7WebCore8SVGNames11viewBoxAttrE": __ZN7WebCore8SVGNames11viewBoxAttrE }, buffer);
var _memmove = Module["_memmove"] = asm["_memmove"];
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var _memcmp = Module["_memcmp"] = asm["_memcmp"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_iiii = Module["dynCall_iiii"] = asm["dynCall_iiii"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED1Ev","_strlen","__ZN7WebCore11SVGViewSpec28lookupOrCreateViewBoxWrapperEPS0_","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7baseValEv","__ZNK7WebCore11SVGViewSpec13viewBoxStringEv","__ZN7WebCore11SVGViewSpec18setTransformStringERKN3WTF6StringE","__ZN7WebCore11SVGViewSpec17viewBoxIdentifierEv","__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE27detachListWrappersAndResizeEPN3WTF6VectorINS3_6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEELj0ENS3_15CrashOnOverflowEEEj","__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED0Ev","_memset","__ZN7WebCore11SVGViewSpec29preserveAspectRatioIdentifierEv","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED2Ev","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E3addINS_17HashMapTranslatorISF_S9_EERKS2_S5_EENS_18HashTableAddResultINS_17HashTableIteratorIS2_S6_S8_S9_SF_SB_EEEEOT0_OT1_","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED0Ev","__ZN7WebCore11SVGViewSpec9transformEv","__ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7baseValEv","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED1Ev","__ZN7WebCore11SVGViewSpec30lookupOrCreateTransformWrapperEPS0_","__ZNK7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE21isAnimatedListTearOffEv","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEE7animValEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E16lookupForWritingINS_22IdentityHashTranslatorIS9_EES2_EENSt3__14pairIPS6_bEERKT0_","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE30processIncomingListItemWrapperERN3WTF6RefPtrINS_18SVGPropertyTearOffINS_12SVGTransformEEEEEPj","__ZN7WebCore11SVGViewSpecD0Ev","__ZN7WebCore31SVGTransformListPropertyTearOffD0Ev","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE28processIncomingListItemValueERKNS_12SVGTransformEPj","__ZN7WebCore11SVGViewSpec19transformIdentifierEv","__ZN3WTF9HashTableIN7WebCore30SVGAnimatedPropertyDescriptionENS_12KeyValuePairIS2_PNS1_19SVGAnimatedPropertyEEENS_24KeyValuePairKeyExtractorIS6_EENS1_34SVGAnimatedPropertyDescriptionHashENS_7HashMapIS2_S5_S9_NS1_40SVGAnimatedPropertyDescriptionHashTraitsENS_10HashTraitsIS5_EEE18KeyValuePairTraitsESB_E6lookupINS_22IdentityHashTranslatorIS9_EES2_EEPS6_RKT0_","__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEED0Ev","__ZN7WebCore11SVGViewSpec15viewBoxAnimatedEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED1Ev","_memcpy","__ZN7WebCore31SVGTransformListPropertyTearOffD1Ev","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE18removeItemFromListEjb","__ZNK7WebCore11SVGViewSpec25preserveAspectRatioStringEv","__ZN7WebCore11SVGViewSpec40lookupOrCreatePreserveAspectRatioWrapperEPS0_","__ZN7WebCore11SVGViewSpec5resetEv","__ZNK7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE10isReadOnlyEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEED0Ev","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED1Ev","__ZNK7WebCore18SVGPropertyTearOffINS_12SVGTransformEE10isReadOnlyEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_39SVGAnimatedTransformListPropertyTearOffENS_16SVGTransformListEEEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD1Ev","__ZN7WebCore26SVGAnimatedPropertyTearOffINS_9FloatRectEED0Ev","__ZN3WTF6VectorINS_6RefPtrIN7WebCore18SVGPropertyTearOffINS2_12SVGTransformEEEEELj0ENS_15CrashOnOverflowEE4fillERKS6_j","__ZNK7WebCore19SVGAnimatedProperty21isAnimatedListTearOffEv","__ZN7WebCore11SVGViewSpecD1Ev","__ZN7WebCore11SVGViewSpec19viewBoxPropertyInfoEv","__ZN7WebCore17SVGPropertyTraitsINS_9FloatRectEE8toStringERKS1_","__ZN7WebCore11SVGViewSpec13parseViewSpecERKN3WTF6StringE","__ZN7WebCore11SVGViewSpec27preserveAspectRatioAnimatedEv","__ZNK7WebCore11SVGViewSpec15transformStringEv","__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEE12commitChangeEv","__ZN7WebCore15SVGListPropertyINS_16SVGTransformListEE12commitChangeENS_16ListModificationE","__ZN7WebCore11SVGViewSpec13setZoomAndPanEtRi","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEED0Ev","_memmove","__ZN7WebCore11SVGViewSpec21transformPropertyInfoEv","_memcmp","__ZN7WebCore22SVGListPropertyTearOffINS_16SVGTransformListEE12commitChangeEv","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_22SVGPreserveAspectRatioEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore18SVGPropertyTearOffINS_12SVGTransformEED1Ev","__ZN7WebCore19SVGAnimatedProperty21lookupOrCreateWrapperINS_10SVGElementENS_26SVGAnimatedPropertyTearOffINS_9FloatRectEEES4_EEN3WTF10PassRefPtrIT0_EEPT_PKNS_15SVGPropertyInfoERT1_","__ZN7WebCore39SVGAnimatedTransformListPropertyTearOffD0Ev","__ZN7WebCore11SVGViewSpec31preserveAspectRatioPropertyInfoEv","__ZN7WebCore39SVGAnimatedTransformListPropertyTearOff7animValEv","__ZNK7WebCore11SVGViewSpec10viewTargetEv","__ZN7WebCore30SVGAnimatedListPropertyTearOffINS_16SVGTransformListEED1Ev","__ZN7WebCore11SVGViewSpecC2EPNS_10SVGElementE","__ZN3WTF6VectorIN7WebCore12SVGTransformELj0ENS_15CrashOnOverflowEEaSERKS4_"]

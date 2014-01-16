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
H_BASE = parentModule["_malloc"](240 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 240;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore24Extensions3DOpenGLCommonD1Ev;
/* memory initializer */ allocate([32,0,0,0,0,0,0,0,71,76,95,69,88,84,95,100,114,97,119,95,98,117,102,102,101,114,115,0,0,0,0,0,71,76,95,79,69,83,95,115,116,97,110,100,97,114,100,95,100,101,114,105,118,97,116,105,118,101,115,0,0,0,0,0,105,110,116,101,108,0,0,0,97,109,100,0,0,0,0,0,97,116,105,0,0,0,0,0,110,118,105,100,105,97,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8,a9) {
  try {
    Module["dynCall_viiiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8,a9);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore24Extensions3DOpenGLCommonE=(H_BASE+104)|0;
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
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _malloc=env._malloc;
  var _glGetString=env._glGetString;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var ___cxa_pure_virtual=env.___cxa_pure_virtual;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore24Extensions3DOpenGLCommon30getTranslatedShaderSourceANGLEEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 120 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 40 | 0;
 i10 = i4 + 48 | 0;
 i11 = i4 + 80 | 0;
 i12 = i4 + 104 | 0;
 i13 = i2 + 28 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = i14 + 32 | 0;
 __ZN7WebCore17GraphicsContext3D11getShaderivEjjPi(i14, i3, 35663, i5);
 i14 = HEAP32[i5 >> 2] | 0;
 if ((i14 | 0) == 35632) {
  i16 = 35632;
 } else if ((i14 | 0) == 35633) {
  i16 = 35633;
 } else {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 240 | 0);
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i13 >> 2] | 0;
 i13 = HEAP32[i14 + 12 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i5 = HEAP32[i14 + 16 >> 2] | 0;
  i17 = i5 * 84 & -1 | 0;
  i18 = 0;
  i19 = i5;
 } else {
  i5 = HEAP32[i14 + 20 >> 2] | 0;
  i20 = ~(i3 << 15) + i3 | 0;
  i21 = (i20 >>> 10 ^ i20) * 9 & -1;
  i20 = i21 >>> 6 ^ i21;
  i21 = i20 + ~(i20 << 11) | 0;
  i20 = i21 >>> 16 ^ i21;
  i21 = i5 & i20;
  i22 = i13 + (i21 * 84 & -1) | 0;
  i23 = HEAP32[i22 >> 2] | 0;
  L9 : do {
   if ((i23 | 0) == (i3 | 0)) {
    i24 = i22;
   } else {
    i25 = (i20 >>> 23) + ~i20 | 0;
    i26 = i25 << 12 ^ i25;
    i25 = i26 >>> 7 ^ i26;
    i26 = i25 << 2 ^ i25;
    i25 = i26 >>> 20 ^ i26 | 1;
    i26 = 0;
    i27 = i21;
    i28 = i23;
    while (1) {
     if ((i28 | 0) == 0) {
      i24 = 0;
      break L9;
     }
     i29 = (i26 | 0) == 0 ? i25 : i26;
     i30 = i29 + i27 & i5;
     i31 = i13 + (i30 * 84 & -1) | 0;
     i32 = HEAP32[i31 >> 2] | 0;
     if ((i32 | 0) == (i3 | 0)) {
      i24 = i31;
      break;
     } else {
      i26 = i29;
      i27 = i30;
      i28 = i32;
     }
    }
   }
  } while (0);
  i3 = HEAP32[i14 + 16 >> 2] | 0;
  i17 = (i24 | 0) == 0 ? i13 + (i3 * 84 & -1) | 0 : i24;
  i18 = i13;
  i19 = i3;
 }
 if ((i17 | 0) == (i18 + (i19 * 84 & -1) | 0)) {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 240 | 0);
  STACKTOP = i4;
  return;
 }
 i19 = i6 | 0;
 HEAP32[i19 >> 2] = 0;
 i18 = i7 | 0;
 HEAP32[i18 >> 2] = 0;
 i3 = (HEAP8[i2 + 36 | 0] & 1) == 0 ? 71744 : 72e3;
 i2 = i8 | 0;
 HEAP32[i2 >> 2] = 0;
 i13 = i8 + 4 | 0;
 HEAP32[i13 >> 2] = 0;
 i24 = i8 + 8 | 0;
 HEAP32[i24 >> 2] = 0;
 __ZNK3WTF6String4utf8ENS_14ConversionModeE(i9, i17 + 8 | 0, 0);
 i14 = i9 | 0;
 i9 = HEAP32[i14 >> 2] | 0;
 if ((i9 | 0) == 0) {
  i33 = 0;
 } else {
  i33 = i9 + 8 | 0;
 }
 i9 = __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i15, i33, i16, i6, i7, i8, i3) | 0;
 i3 = HEAP32[i14 >> 2] | 0;
 do {
  if ((i3 | 0) != 0) {
   i14 = i3 | 0;
   i8 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF8fastFreeEPv(i3);
    break;
   } else {
    HEAP32[i14 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i3 = HEAP32[i18 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i8 = i3 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i17 + 16 | 0;
 i14 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i3;
 do {
  if ((i14 | 0) != 0) {
   i3 = i14 | 0;
   i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i14);
    break;
   } else {
    HEAP32[i3 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP8[i17 + 20 | 0] = i9 & 1;
 i14 = HEAP32[i24 >> 2] | 0;
 L38 : do {
  if ((i14 | 0) != 0) {
   i8 = i10 | 0;
   i3 = i10 + 4 | 0;
   i7 = i10 + 8 | 0;
   i6 = i10 + 12 | 0;
   i16 = i10 + 16 | 0;
   i33 = i10 + 20 | 0;
   i15 = i10 + 24 | 0;
   i5 = i10 + 28 | 0;
   i23 = i11 | 0;
   i21 = i11 + 4 | 0;
   i20 = i11 + 8 | 0;
   i22 = i11 + 12 | 0;
   i28 = i11 + 16 | 0;
   i27 = i17 + 44 | 0;
   i26 = i10 + 4 | 0;
   i25 = i12 + 8 | 0;
   i32 = i12 | 0;
   i30 = i17 + 24 | 0;
   i29 = i17 + 64 | 0;
   i31 = 0;
   i34 = i14;
   while (1) {
    if (i34 >>> 0 <= i31 >>> 0) {
     break;
    }
    i35 = HEAP32[i2 >> 2] | 0;
    i36 = HEAP32[i35 + (i31 << 5) >> 2] | 0;
    HEAP32[i8 >> 2] = i36;
    i37 = HEAP32[i35 + (i31 << 5) + 4 >> 2] | 0;
    HEAP32[i3 >> 2] = i37;
    if ((i37 | 0) != 0) {
     i38 = i37 | 0;
     HEAP32[i38 >> 2] = (HEAP32[i38 >> 2] | 0) + 2;
    }
    i38 = HEAP32[i35 + (i31 << 5) + 8 >> 2] | 0;
    HEAP32[i7 >> 2] = i38;
    i37 = (i38 | 0) == 0;
    if (!i37) {
     i39 = i38 | 0;
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 2;
    }
    i39 = HEAP32[i35 + (i31 << 5) + 12 >> 2] | 0;
    HEAP32[i6 >> 2] = i39;
    i40 = HEAP32[i35 + (i31 << 5) + 16 >> 2] | 0;
    HEAP32[i16 >> 2] = i40;
    HEAP8[i33] = HEAP8[i35 + (i31 << 5) + 20 | 0] & 1;
    i41 = HEAP32[i35 + (i31 << 5) + 24 >> 2] | 0;
    HEAP32[i15 >> 2] = i41;
    i42 = HEAP32[i35 + (i31 << 5) + 28 >> 2] | 0;
    HEAP32[i5 >> 2] = i42;
    HEAP32[i23 >> 2] = i39;
    HEAP32[i21 >> 2] = i40;
    HEAP32[i20 >> 2] = i38;
    if (!i37) {
     i37 = i38 | 0;
     HEAP32[i37 >> 2] = (HEAP32[i37 >> 2] | 0) + 2;
    }
    HEAP32[i22 >> 2] = i41;
    HEAP32[i28 >> 2] = i42;
    if ((i36 | 0) == 2) {
     i43 = i29;
    } else if ((i36 | 0) == 0) {
     i43 = i30;
    } else {
     i43 = i27;
    }
    __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i12, i43 | 0, i26, i11);
    if ((HEAP8[i25] & 1) == 0) {
     i36 = HEAP32[i32 >> 2] | 0;
     HEAP32[i36 + 4 >> 2] = HEAP32[i23 >> 2];
     HEAP32[i36 + 8 >> 2] = HEAP32[i21 >> 2];
     i42 = HEAP32[i20 >> 2] | 0;
     if ((i42 | 0) != 0) {
      i41 = i42 | 0;
      HEAP32[i41 >> 2] = (HEAP32[i41 >> 2] | 0) + 2;
     }
     i41 = i36 + 12 | 0;
     i37 = HEAP32[i41 >> 2] | 0;
     HEAP32[i41 >> 2] = i42;
     do {
      if ((i37 | 0) != 0) {
       i41 = i37 | 0;
       i38 = (HEAP32[i41 >> 2] | 0) - 2 | 0;
       if ((i38 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i37);
        break;
       } else {
        HEAP32[i41 >> 2] = i38;
        break;
       }
      }
     } while (0);
     HEAP32[i36 + 16 >> 2] = HEAP32[i22 >> 2];
     HEAP32[i36 + 20 >> 2] = HEAP32[i28 >> 2];
     i44 = i42;
    } else {
     i44 = HEAP32[i20 >> 2] | 0;
    }
    do {
     if ((i44 | 0) != 0) {
      i37 = i44 | 0;
      i38 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i44);
       break;
      } else {
       HEAP32[i37 >> 2] = i38;
       break;
      }
     }
    } while (0);
    i42 = HEAP32[i7 >> 2] | 0;
    do {
     if ((i42 | 0) != 0) {
      i36 = i42 | 0;
      i38 = (HEAP32[i36 >> 2] | 0) - 2 | 0;
      if ((i38 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i42);
       break;
      } else {
       HEAP32[i36 >> 2] = i38;
       break;
      }
     }
    } while (0);
    i42 = HEAP32[i3 >> 2] | 0;
    do {
     if ((i42 | 0) != 0) {
      i38 = i42 | 0;
      i36 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
      if ((i36 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i42);
       break;
      } else {
       HEAP32[i38 >> 2] = i36;
       break;
      }
     }
    } while (0);
    i42 = i31 + 1 | 0;
    if (i42 >>> 0 >= i14 >>> 0) {
     break L38;
    }
    i31 = i42;
    i34 = HEAP32[i24 >> 2] | 0;
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if (i9) {
  i9 = HEAP32[i19 >> 2] | 0;
  HEAP32[i19 >> 2] = 0;
  HEAP32[i1 >> 2] = i9;
 } else {
  __ZN3WTF6StringC1EPKc(i1, H_BASE + 240 | 0);
 }
 i1 = HEAP32[i24 >> 2] | 0;
 if ((i1 | 0) != 0) {
  i9 = HEAP32[i2 >> 2] | 0;
  i14 = i9 + (i1 << 5) | 0;
  i1 = i9;
  while (1) {
   i9 = HEAP32[i1 + 8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i44 = i9 | 0;
     i11 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
     if ((i11 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i44 >> 2] = i11;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i11 = i9 | 0;
     i44 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i11 >> 2] = i44;
      break;
     }
    }
   } while (0);
   i1 = i1 + 32 | 0;
   if ((i1 | 0) == (i14 | 0)) {
    break;
   }
  }
  HEAP32[i24 >> 2] = 0;
 }
 i24 = HEAP32[i2 >> 2] | 0;
 if ((i24 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i13 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i24);
 }
 i24 = HEAP32[i18 >> 2] | 0;
 do {
  if ((i24 | 0) != 0) {
   i18 = i24 | 0;
   i13 = (HEAP32[i18 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i24);
    break;
   } else {
    HEAP32[i18 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i24 = HEAP32[i19 >> 2] | 0;
 if ((i24 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i19 = i24 | 0;
 i13 = (HEAP32[i19 >> 2] | 0) - 2 | 0;
 if ((i13 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i24);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i19 >> 2] = i13;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore24Extensions3DOpenGLCommonC2EPNS_17GraphicsContext3DE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 24 | 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 HEAP8[i1 + 4 | 0] = 0;
 _memset(i1 + 8 | 0, 0, 20) | 0;
 HEAP32[i1 + 28 >> 2] = i2;
 i2 = i1 + 32 | 0;
 HEAP8[i2] = 0;
 i7 = i1 + 33 | 0;
 HEAP8[i7] = 0;
 i8 = i1 + 34 | 0;
 HEAP8[i8] = 0;
 HEAP8[i1 + 35 | 0] = 1;
 HEAP8[i1 + 36 | 0] = 0;
 i9 = i1 + 40 | 0;
 i1 = i9 | 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i4, _glGetString(7936) | 0);
 i10 = i4 | 0;
 i4 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 i11 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 do {
  if ((i11 | 0) != 0) {
   i4 = i11 | 0;
   i1 = (HEAP32[i4 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i4 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i11 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i11 | 0) != 0) {
   i10 = i11 | 0;
   i1 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
   if ((i1 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i11);
    break;
   } else {
    HEAP32[i10 >> 2] = i1;
    break;
   }
  }
 } while (0);
 i11 = i5 | 0;
 HEAP32[i11 >> 2] = 0;
 i1 = i5 + 4 | 0;
 HEAP32[i1 >> 2] = 0;
 i10 = i5 + 8 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZNK3WTF6String5lowerEv(i6, i9);
 __ZNK3WTF6String5splitEtbRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i6, 32, 0, i5);
 i5 = HEAP32[i6 >> 2] | 0;
 do {
  if ((i5 | 0) == 0) {
   i12 = 0;
  } else {
   i6 = i5 | 0;
   i9 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
   if ((i9 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i5);
    i12 = 0;
    break;
   } else {
    HEAP32[i6 >> 2] = i9;
    i12 = 0;
    break;
   }
  }
 } while (0);
 while (1) {
  if (i12 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
   i13 = 0;
   break;
  }
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i11 >> 2] | 0) + (i12 << 2) >> 2] | 0, H_BASE + 96 | 0) | 0) {
   i14 = 15;
   break;
  } else {
   i12 = i12 + 1 | 0;
  }
 }
 do {
  if ((i14 | 0) == 15) {
   if ((i12 | 0) == -1) {
    i13 = 0;
    break;
   }
   HEAP8[i2] = 1;
   i13 = 0;
  }
 } while (0);
 while (1) {
  if (i13 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
   i15 = 0;
   i14 = 21;
   break;
  }
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i11 >> 2] | 0) + (i13 << 2) >> 2] | 0, H_BASE + 88 | 0) | 0) {
   i14 = 20;
   break;
  }
  i13 = i13 + 1 | 0;
 }
 if ((i14 | 0) == 20) {
  if ((i13 | 0) == -1) {
   i15 = 0;
   i14 = 21;
  } else {
   i14 = 25;
  }
 }
 L30 : do {
  if ((i14 | 0) == 21) {
   while (1) {
    i14 = 0;
    if (i15 >>> 0 >= (HEAP32[i10 >> 2] | 0) >>> 0) {
     i16 = 0;
     break L30;
    }
    if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i11 >> 2] | 0) + (i15 << 2) >> 2] | 0, H_BASE + 80 | 0) | 0) {
     break;
    }
    i15 = i15 + 1 | 0;
    i14 = 21;
   }
   if ((i15 | 0) == -1) {
    i16 = 0;
   } else {
    i14 = 25;
   }
  }
 } while (0);
 if ((i14 | 0) == 25) {
  HEAP8[i7] = 1;
  i16 = 0;
 }
 while (1) {
  i7 = HEAP32[i10 >> 2] | 0;
  if (i16 >>> 0 >= i7 >>> 0) {
   i17 = i7;
   break;
  }
  if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[(HEAP32[i11 >> 2] | 0) + (i16 << 2) >> 2] | 0, H_BASE + 72 | 0) | 0) {
   i14 = 29;
   break;
  }
  i16 = i16 + 1 | 0;
 }
 if ((i14 | 0) == 29) {
  if ((i16 | 0) != -1) {
   HEAP8[i8] = 1;
  }
  i17 = HEAP32[i10 >> 2] | 0;
 }
 if ((i17 | 0) != 0) {
  i8 = HEAP32[i11 >> 2] | 0;
  i16 = i8 + (i17 << 2) | 0;
  i17 = i8;
  while (1) {
   i8 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i8 | 0) != 0) {
     i14 = i8 | 0;
     i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i8);
      break;
     } else {
      HEAP32[i14 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i17 = i17 + 4 | 0;
   if ((i17 | 0) == (i16 | 0)) {
    break;
   }
  }
  HEAP32[i10 >> 2] = 0;
 }
 i10 = HEAP32[i11 >> 2] | 0;
 if ((i10 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i11 >> 2] = 0;
 HEAP32[i1 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i10);
 STACKTOP = i3;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 * 24 & -1) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
  i17 = (HEAP32[i5 >> 2] | 0) + ((HEAP32[i2 + 4 >> 2] | 0) * 24 & -1) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  _memset(i9 | 0, 0, 24) | 0;
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
 HEAP32[i18 + 4 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i18 + 8 >> 2] = HEAP32[i4 + 4 >> 2];
 i13 = HEAP32[i4 + 8 >> 2] | 0;
 if ((i13 | 0) != 0) {
  i8 = i13 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
 }
 i8 = i18 + 12 | 0;
 i9 = HEAP32[i8 >> 2] | 0;
 HEAP32[i8 >> 2] = i13;
 do {
  if ((i9 | 0) != 0) {
   i13 = i9 | 0;
   i8 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
   if ((i8 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i9);
    break;
   } else {
    HEAP32[i13 >> 2] = i8;
    break;
   }
  }
 } while (0);
 HEAP32[i18 + 16 >> 2] = HEAP32[i4 + 12 >> 2];
 HEAP32[i18 + 20 >> 2] = HEAP32[i4 + 16 >> 2];
 i4 = i2 + 12 | 0;
 i9 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i9;
 i4 = i2 + 4 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i9 << 1 | 0) < (i8 | 0)) {
  i19 = i18;
  i20 = i8;
 } else {
  if ((i8 | 0) == 0) {
   i21 = 8;
  } else {
   i13 = i8 << 1;
   i21 = (i9 * 6 & -1 | 0) < (i13 | 0) ? i8 : i13;
  }
  i13 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i2, i21, i18) | 0;
  i19 = i13;
  i20 = HEAP32[i4 >> 2] | 0;
 }
 i4 = (HEAP32[i5 >> 2] | 0) + (i20 * 24 & -1) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i4;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i1, i2, i3) {
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
  i2 = i7 + (i10 << 2) | 0;
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
    i22 = i14 + (i21 << 2) | 0;
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
   i19 = i27 | 0;
   i17 = HEAP32[i19 >> 2] | 0;
   do {
    if ((i17 | 0) != 0) {
     i13 = i17 | 0;
     i14 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
     if ((i14 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i17);
      break;
     } else {
      HEAP32[i13 >> 2] = i14;
      break;
     }
    }
   } while (0);
   i17 = HEAP32[i12 >> 2] | 0;
   HEAP32[i12 >> 2] = 0;
   HEAP32[i19 >> 2] = i17;
   i15 = (i2 | 0) == (i3 | 0) ? i27 : i11;
  }
  i17 = i10 + 1 | 0;
  if ((i17 | 0) == (i5 | 0)) {
   break;
  } else {
   i10 = i17;
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
  i1 = HEAP32[i7 + (i28 << 2) >> 2] | 0;
  i11 = i1;
  do {
   if (!((i11 | 0) == (-1 | 0) | (i11 | 0) == 0)) {
    i10 = i1 | 0;
    i27 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i27 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i1);
     break;
    } else {
     HEAP32[i10 >> 2] = i27;
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
function __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i1, i2, i3, i4) {
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
  __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i8, 0) | 0;
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
  i13 = i10 + (i12 << 2) | 0;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = i14;
  if ((i15 | 0) == (-1 | 0)) {
   i16 = i13;
  } else if ((i15 | 0) == 0) {
   break;
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
  i17 = (HEAP32[i5 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] << 2) | 0;
  i11 = i1;
  HEAP32[i11 >> 2] = i13;
  HEAP32[i11 + 4 >> 2] = i17;
  HEAP8[i1 + 8 | 0] = 0;
  return;
 }
 if ((i9 | 0) == 0) {
  i18 = i13;
 } else {
  HEAP32[i9 >> 2] = 0;
  i13 = i2 + 16 | 0;
  HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - 1;
  i18 = i9;
 }
 i9 = HEAP32[i4 >> 2] | 0;
 if ((i9 | 0) != 0) {
  i4 = i9 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 2;
 }
 i4 = i18 | 0;
 i13 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i13 | 0) != 0) {
   i9 = i13 | 0;
   i4 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i4 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i9 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i13 = i2 + 12 | 0;
 i4 = (HEAP32[i13 >> 2] | 0) + 1 | 0;
 HEAP32[i13 >> 2] = i4;
 i13 = i2 + 4 | 0;
 i9 = HEAP32[i13 >> 2] | 0;
 if (((HEAP32[i2 + 16 >> 2] | 0) + i4 << 1 | 0) < (i9 | 0)) {
  i19 = i18;
  i20 = i9;
 } else {
  if ((i9 | 0) == 0) {
   i21 = 8;
  } else {
   i17 = i9 << 1;
   i21 = (i4 * 6 & -1 | 0) < (i17 | 0) ? i9 : i17;
  }
  i17 = __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_(i2, i21, i18) | 0;
  i19 = i17;
  i20 = HEAP32[i13 >> 2] | 0;
 }
 i13 = (HEAP32[i5 >> 2] | 0) + (i20 << 2) | 0;
 i20 = i1;
 HEAP32[i20 >> 2] = i19;
 HEAP32[i20 + 4 >> 2] = i13;
 HEAP8[i1 + 8 | 0] = 1;
 return;
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 HEAP32[i4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i2 - 1;
 i4 = __ZN3WTF10fastMallocEj(i2 * 24 & -1) | 0;
 if ((i2 | 0) > 0) {
  i8 = 0;
  while (1) {
   _memset(i4 + (i8 * 24 & -1) | 0, 0, 24) | 0;
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
  i4 = i7 + (i11 * 24 & -1) | 0;
  i6 = HEAP32[i4 >> 2] | 0;
  if ((i6 | 0) == (-1 | 0) | (i6 | 0) == 0) {
   i13 = i12;
  } else {
   i6 = __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i4) | 0;
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
  i1 = i7 + (i14 * 24 & -1) | 0;
  do {
   if ((HEAP32[i1 >> 2] | 0) != -1) {
    i12 = HEAP32[i7 + (i14 * 24 & -1) + 12 >> 2] | 0;
    do {
     if ((i12 | 0) != 0) {
      i11 = i12 | 0;
      i3 = (HEAP32[i11 >> 2] | 0) - 2 | 0;
      if ((i3 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i12);
       break;
      } else {
       HEAP32[i11 >> 2] = i3;
       break;
      }
     }
    } while (0);
    i12 = HEAP32[i1 >> 2] | 0;
    if ((i12 | 0) == 0) {
     break;
    }
    i3 = i12 | 0;
    i11 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
    if ((i11 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i12);
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
function __ZN7WebCore24Extensions3DOpenGLCommon29initializeAvailableExtensionsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 i4 = i2 + 8 | 0;
 i5 = i2 + 24 | 0;
 i6 = i2 + 32 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i1 >> 2] | 0) + 112 >> 2] & 7](i3, i1);
 i7 = i4 | 0;
 HEAP32[i7 >> 2] = 0;
 i8 = i4 + 4 | 0;
 HEAP32[i8 >> 2] = 0;
 i9 = i4 + 8 | 0;
 HEAP32[i9 >> 2] = 0;
 __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
 __ZNK3WTF6String5splitERKS0_bRNS_6VectorIS0_Lj0ENS_15CrashOnOverflowEEE(i3, i5, 0, i4);
 i4 = HEAP32[i5 >> 2] | 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
   if ((i10 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i10;
    break;
   }
  }
 } while (0);
 do {
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   HEAP8[i1 + 4 | 0] = 1;
  } else {
   i4 = i1 + 8 | 0;
   i10 = 0;
   while (1) {
    i5 = (HEAP32[i7 >> 2] | 0) + (i10 << 2) | 0;
    __ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_(i6, i4, i5, i5);
    i10 = i10 + 1 | 0;
    i11 = HEAP32[i9 >> 2] | 0;
    if (i10 >>> 0 >= i11 >>> 0) {
     break;
    }
   }
   HEAP8[i1 + 4 | 0] = 1;
   if ((i11 | 0) == 0) {
    break;
   }
   i10 = HEAP32[i7 >> 2] | 0;
   i4 = i10 + (i11 << 2) | 0;
   i5 = i10;
   while (1) {
    i10 = HEAP32[i5 >> 2] | 0;
    do {
     if ((i10 | 0) != 0) {
      i12 = i10 | 0;
      i13 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
      if ((i13 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i10);
       break;
      } else {
       HEAP32[i12 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i5 = i5 + 4 | 0;
    if ((i5 | 0) == (i4 | 0)) {
     break;
    }
   }
   HEAP32[i9 >> 2] = 0;
  }
 } while (0);
 i9 = HEAP32[i7 >> 2] | 0;
 if ((i9 | 0) != 0) {
  HEAP32[i7 >> 2] = 0;
  HEAP32[i8 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i9);
 }
 i9 = HEAP32[i3 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i2;
  return;
 }
 i3 = i9 | 0;
 i8 = (HEAP32[i3 >> 2] | 0) - 2 | 0;
 if ((i8 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i9);
  STACKTOP = i2;
  return;
 } else {
  HEAP32[i3 >> 2] = i8;
  STACKTOP = i2;
  return;
 }
}
function __ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_(i1, i2) {
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
  i10 = i3 + (i9 * 24 & -1) | 0;
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
 i8 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   i14 = i8 | 0;
   i13 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i13 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i8);
    break;
   } else {
    HEAP32[i14 >> 2] = i13;
    break;
   }
  }
 } while (0);
 i8 = i15 | 0;
 i13 = HEAP32[i8 >> 2] | 0;
 do {
  if ((i13 | 0) != 0) {
   i14 = i13 | 0;
   i7 = (HEAP32[i14 >> 2] | 0) - 2 | 0;
   if ((i7 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i13);
    break;
   } else {
    HEAP32[i14 >> 2] = i7;
    break;
   }
  }
 } while (0);
 i13 = HEAP32[i1 >> 2] | 0;
 HEAP32[i1 >> 2] = 0;
 HEAP32[i8 >> 2] = i13;
 HEAP32[i15 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i15 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 i13 = i2 + 12 | 0;
 i8 = HEAP32[i13 >> 2] | 0;
 HEAP32[i13 >> 2] = 0;
 HEAP32[i10 >> 2] = i8;
 HEAP32[i15 + 16 >> 2] = HEAP32[i2 + 16 >> 2];
 HEAP32[i15 + 20 >> 2] = HEAP32[i2 + 20 >> 2];
 return i15 | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon13ensureEnabledERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 288 | 0;
 i4 = i3 + 72 | 0;
 i5 = i3 + 144 | 0;
 i6 = i3 + 216 | 0;
 i7 = i2 | 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i2 = HEAP32[i1 + 28 >> 2] | 0;
  i8 = i3 | 0;
  _memcpy(i8 | 0, i2 + 52 | 0, 32) | 0;
  i9 = HEAP32[i2 + 84 >> 2] | 0;
  i10 = i3 + 32 | 0;
  _memcpy(i10 | 0, i2 + 88 | 0, 36) | 0;
  if ((i9 | 0) != 0) {
   STACKTOP = i3;
   return;
  }
  _memcpy(i4 | 0, i8 | 0, 32) | 0;
  HEAP32[i4 + 32 >> 2] = 1;
  _memcpy(i4 + 36 | 0, i10 | 0, 36) | 0;
  __ZN7WebCore17ANGLEWebKitBridge12setResourcesE18ShBuiltInResources(i2 + 32 | 0, i4);
  STACKTOP = i3;
  return;
 }
 if (!(__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i7 >> 2] | 0, H_BASE + 16 | 0) | 0)) {
  STACKTOP = i3;
  return;
 }
 i7 = HEAP32[i1 + 28 >> 2] | 0;
 i1 = i5;
 _memcpy(i1 | 0, i7 + 52 | 0, 72) | 0;
 i4 = i5 + 44 | 0;
 if ((HEAP32[i4 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i4 >> 2] = 1;
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(i7, 34852, i5 + 28 | 0);
 _memcpy(i6 | 0, i1 | 0, 72) | 0;
 __ZN7WebCore17ANGLEWebKitBridge12setResourcesE18ShBuiltInResources(i7 + 32 | 0, i6);
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 152 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 156 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 160 >> 2] = F_BASE_viii + 2;
 HEAP32[H_BASE + 164 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 168 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 172 >> 2] = F_BASE_viiiii + 2;
 HEAP32[H_BASE + 176 >> 2] = F_BASE_viiiii + 4;
 HEAP32[H_BASE + 180 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 184 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 188 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 192 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 196 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 200 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 204 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 208 >> 2] = F_BASE_vii + 4;
 HEAP32[H_BASE + 212 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 216 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 220 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 224 >> 2] = F_BASE_v + 2;
 HEAP32[H_BASE + 228 >> 2] = F_BASE_vi + 4;
}
function __ZN7WebCore24Extensions3DOpenGLCommonD0Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 if ((i2 | 0) == 0) {
  i5 = i1;
  __ZdlPv(i5);
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i3 = 0;
  while (1) {
   i6 = HEAP32[i2 + (i3 << 2) >> 2] | 0;
   i7 = i6;
   do {
    if (!((i7 | 0) == (-1 | 0) | (i7 | 0) == 0)) {
     i8 = i6 | 0;
     i9 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i9 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i6);
      break;
     } else {
      HEAP32[i8 >> 2] = i9;
      break;
     }
    }
   } while (0);
   i3 = i3 + 1 | 0;
   if ((i3 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 i5 = i1;
 __ZdlPv(i5);
 return;
}
function __ZN7WebCore24Extensions3DOpenGLCommonD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i3 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
   i5 = i3;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i3 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
 return;
}
function __ZN7WebCore24Extensions3DOpenGLCommonD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 HEAP32[i1 >> 2] = H_BASE + 112;
 i2 = HEAP32[i1 + 40 >> 2] | 0;
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
 if ((i2 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i4 | 0) > 0) {
  i1 = 0;
  while (1) {
   i3 = HEAP32[i2 + (i1 << 2) >> 2] | 0;
   i5 = i3;
   do {
    if (!((i5 | 0) == (-1 | 0) | (i5 | 0) == 0)) {
     i6 = i3 | 0;
     i7 = (HEAP32[i6 >> 2] | 0) - 2 | 0;
     if ((i7 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i3);
      break;
     } else {
      HEAP32[i6 >> 2] = i7;
      break;
     }
    }
   } while (0);
   i1 = i1 + 1 | 0;
   if ((i1 | 0) >= (i4 | 0)) {
    break;
   }
  }
 }
 __ZN3WTF8fastFreeEPv(i2);
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
function __ZN7WebCore24Extensions3DOpenGLCommon9isEnabledERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (__ZN3WTF5equalEPKNS_10StringImplEPKh(HEAP32[i2 >> 2] | 0, H_BASE + 40 | 0) | 0) {
  i3 = (HEAP32[(HEAP32[i1 + 28 >> 2] | 0) + 84 >> 2] | 0) != 0;
  return i3 | 0;
 } else {
  i3 = FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 8 >> 2] & 7](i1, i2) | 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon14readnPixelsEXTEiiiijjiPv(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 __ZN7WebCore17GraphicsContext3D17synthesizeGLErrorEj(HEAP32[i1 + 28 >> 2] | 0, 1282);
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
 FUNCTION_TABLE_viiiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0, i10 | 0);
}
function __ZN7WebCore24Extensions3DOpenGLCommon8supportsERKN3WTF6StringE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((HEAP8[i1 + 4 | 0] & 1) == 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 116 >> 2] & 7](i1);
 }
 return FUNCTION_TABLE_iii[HEAP32[(HEAP32[i1 >> 2] | 0) + 108 >> 2] & 7](i1, i2) | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon6vendorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = HEAP32[i2 + 40 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 2;
 return;
}
function __ZN7WebCore24Extensions3DOpenGLCommon16getnUniformivEXTEjiiPi(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17GraphicsContext3D17synthesizeGLErrorEj(HEAP32[i1 + 28 >> 2] | 0, 1282);
 return;
}
function __ZN7WebCore24Extensions3DOpenGLCommon16getnUniformfvEXTEjiiPf(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 __ZN7WebCore17GraphicsContext3D17synthesizeGLErrorEj(HEAP32[i1 + 28 >> 2] | 0, 1282);
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b6(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(6);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 3](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon32requiresBuiltInFunctionEmulationEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 36 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon23maySupportMultisamplingEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 35 | 0] & 1) != 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
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
function __ZN7WebCore24Extensions3DOpenGLCommon8isNVIDIAEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 32 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon7isIntelEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 34 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore24Extensions3DOpenGLCommon5isAMDEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 33 | 0] & 1) != 0 | 0;
}
function b0(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 abort(0);
}
function __ZN7WebCore24Extensions3DOpenGLCommon25getGraphicsResetStatusARBEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 15](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 7](i2 | 0);
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
function b5() {
 abort(5);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiii = [b0,b0,__ZN7WebCore24Extensions3DOpenGLCommon16getnUniformfvEXTEjiiPf,b0,__ZN7WebCore24Extensions3DOpenGLCommon16getnUniformivEXTEjiiPi,b0,b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore24Extensions3DOpenGLCommonD2Ev,b1,__ZN7WebCore24Extensions3DOpenGLCommon29initializeAvailableExtensionsEv,b1,__ZN7WebCore24Extensions3DOpenGLCommonD0Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore24Extensions3DOpenGLCommon13ensureEnabledERKN3WTF6StringE,b2,__ZN7WebCore24Extensions3DOpenGLCommon6vendorEv,b2,b2,b2];
  var FUNCTION_TABLE_ii = [b3,b3,__ZN7WebCore24Extensions3DOpenGLCommon8isNVIDIAEv,b3,__ZN7WebCore24Extensions3DOpenGLCommon25getGraphicsResetStatusARBEv,b3,__ZN7WebCore24Extensions3DOpenGLCommon7isIntelEv,b3,__ZN7WebCore24Extensions3DOpenGLCommon5isAMDEv,b3,__ZN7WebCore24Extensions3DOpenGLCommon32requiresBuiltInFunctionEmulationEv,b3,__ZN7WebCore24Extensions3DOpenGLCommon23maySupportMultisamplingEv,b3,b3,b3];
  var FUNCTION_TABLE_viii = [b4,b4,__ZN7WebCore24Extensions3DOpenGLCommon30getTranslatedShaderSourceANGLEEj,b4];
  var FUNCTION_TABLE_v = [b5,b5,v____cxa_pure_virtual__wrapper,b5];
  var FUNCTION_TABLE_viiiiiiiii = [b6,b6,__ZN7WebCore24Extensions3DOpenGLCommon14readnPixelsEXTEiiiijjiPv,b6];
  var FUNCTION_TABLE_iii = [b7,b7,__ZN7WebCore24Extensions3DOpenGLCommon8supportsERKN3WTF6StringE,b7,__ZN7WebCore24Extensions3DOpenGLCommon9isEnabledERKN3WTF6StringE,b7,b7,b7];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiii: dynCall_viiiii, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiii": invoke_viiiii, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "_malloc": _malloc, "_glGetString": _glGetString, "___setErrNo": ___setErrNo, "_free": _free, "___cxa_pure_virtual": ___cxa_pure_virtual, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
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
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCore24Extensions3DOpenGLCommon25getGraphicsResetStatusARBEv","__ZN7WebCore24Extensions3DOpenGLCommon8supportsERKN3WTF6StringE","__ZN7WebCore24Extensions3DOpenGLCommon5isAMDEv","__ZN7WebCore24Extensions3DOpenGLCommon29initializeAvailableExtensionsEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E8reinsertEOS6_","__ZN7WebCore24Extensions3DOpenGLCommon16getnUniformfvEXTEjiiPf","__ZN7WebCore24Extensions3DOpenGLCommon32requiresBuiltInFunctionEmulationEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E6rehashEiPS6_","__ZN7WebCore24Extensions3DOpenGLCommon7isIntelEv","_memset","__ZN7WebCore24Extensions3DOpenGLCommonD2Ev","__ZN7WebCore24Extensions3DOpenGLCommon30getTranslatedShaderSourceANGLEEj","__ZN7WebCore24Extensions3DOpenGLCommonC2EPNS_17GraphicsContext3DE","_memcpy","__ZN7WebCore24Extensions3DOpenGLCommon13ensureEnabledERKN3WTF6StringE","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E3addINS_22IdentityHashTranslatorIS3_EERKS1_SB_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S1_S2_S3_S5_S5_EEEEOT0_OT1_","__ZN7WebCore24Extensions3DOpenGLCommon23maySupportMultisamplingEv","__ZN3WTF9HashTableINS_6StringES1_NS_17IdentityExtractorENS_10StringHashENS_10HashTraitsIS1_EES5_E6rehashEiPS1_","__ZN7WebCore24Extensions3DOpenGLCommon8isNVIDIAEv","__ZN7WebCore24Extensions3DOpenGLCommon6vendorEv","__ZN7WebCore24Extensions3DOpenGLCommonD0Ev","__ZN7WebCore24Extensions3DOpenGLCommon9isEnabledERKN3WTF6StringE","__ZN7WebCore24Extensions3DOpenGLCommon16getnUniformivEXTEjiiPi","__ZN3WTF9HashTableINS_6StringENS_12KeyValuePairIS1_N7WebCore17GraphicsContext3D10SymbolInfoEEENS_24KeyValuePairKeyExtractorIS6_EENS_10StringHashENS_7HashMapIS1_S5_S9_NS_10HashTraitsIS1_EENSB_IS5_EEE18KeyValuePairTraitsESC_E3addINS_17HashMapTranslatorISF_S9_EERKS1_RS5_EENS_18HashTableAddResultINS_17HashTableIteratorIS1_S6_S8_S9_SF_SC_EEEEOT0_OT1_","__ZN7WebCore24Extensions3DOpenGLCommon14readnPixelsEXTEiiiijjiPv"]

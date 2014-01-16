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
H_BASE = parentModule["_malloc"](32 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 32;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore7TextureC1EPNS_17GraphicsContext3DEN3WTF10PassOwnPtrINS3_6VectorIjLj0ENS3_15CrashOnOverflowEEEEENS0_6FormatEiii;
var __ZN7WebCore7TextureD1Ev;
/* memory initializer */ allocate([71,76,95,69,88,84,95,116,101,120,116,117,114,101,95,102,111,114,109,97,116,95,66,71,82,65,56,56,56,56,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_vi(index,a1) {
  try {
    Module["dynCall_vi"](index,a1);
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
function invoke_viiiiiii(index,a1,a2,a3,a4,a5,a6,a7) {
  try {
    Module["dynCall_viiiiiii"](index,a1,a2,a3,a4,a5,a6,a7);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
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
  var invoke_vi=env.invoke_vi;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiii=env.invoke_viiiiiii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _llvm_umul_with_overflow_i32=env._llvm_umul_with_overflow_i32;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore7Texture6createEPNS_17GraphicsContext3DENS0_6FormatEii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 16 | 0;
 i10 = i6 + 24 | 0;
 i11 = i6 + 32 | 0;
 i12 = i6 + 64 | 0;
 i13 = i6 + 72 | 0;
 i14 = i6 + 80 | 0;
 i15 = i6 + 88 | 0;
 HEAP32[i10 >> 2] = 0;
 __ZN7WebCore17GraphicsContext3D11getIntegervEjPi(i2, 3379, i10);
 i16 = HEAP32[i10 >> 2] | 0;
 HEAP32[i12 >> 2] = i16;
 HEAP32[i12 + 4 >> 2] = i16;
 HEAP32[i13 >> 2] = i4;
 HEAP32[i13 + 4 >> 2] = i5;
 __ZN7WebCore10TilingDataC1ERKNS_7IntSizeES3_b(i11, i12, i13, 1);
 i13 = i11 + 20 | 0;
 i12 = Math_imul(HEAP32[i11 + 24 >> 2] | 0, HEAP32[i13 >> 2] | 0) | 0;
 i16 = __ZN3WTF10fastMallocEj(12) | 0;
 i17 = i16;
 i18 = i16;
 HEAP32[i18 >> 2] = 0;
 i19 = i16 + 4 | 0;
 HEAP32[i19 >> 2] = 0;
 i20 = i16 + 8 | 0;
 HEAP32[i20 >> 2] = i12;
 L1 : do {
  if ((i12 | 0) == 0) {
   HEAP32[i14 >> 2] = 0;
   __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE4fillERKjj(i17, i14, i12);
  } else {
   if (i12 >>> 0 > 1073741823 >>> 0) {
    _WTFCrash();
   }
   i21 = __ZN3WTF18fastMallocGoodSizeEj(i12 << 2) | 0;
   HEAP32[i19 >> 2] = i21 >>> 2;
   HEAP32[i18 >> 2] = __ZN3WTF10fastMallocEj(i21) | 0;
   HEAP32[i14 >> 2] = 0;
   __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE4fillERKjj(i17, i14, i12);
   i21 = i15 + 8 | 0;
   i22 = i15 + 12 | 0;
   i23 = i7 | 0;
   L7 : do {
    if ((i3 | 0) == 0) {
     i24 = 0;
     while (1) {
      i25 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i2) | 0;
      if ((i25 | 0) == 0) {
       i26 = 0;
       break L7;
      }
      if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i24 >>> 0) {
       break;
      }
      HEAP32[(HEAP32[i18 >> 2] | 0) + (i24 << 2) >> 2] = i25;
      i27 = HEAP32[i13 >> 2] | 0;
      __ZNK7WebCore10TilingData20tileBoundsWithBorderEii(i15, i11, (i24 | 0) % (i27 | 0) & -1, (i24 | 0) / (i27 | 0) & -1);
      __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, i25);
      __ZN7WebCore17GraphicsContext3D22texImage2DResourceSafeEjijiiijji(i2, 3553, 0, 6408, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, 0, 6408, 5121, 4) | 0;
      i24 = i24 + 1 | 0;
      if ((i24 | 0) >= (i12 | 0)) {
       break L1;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i3 | 0) == 1) {
     i24 = 0;
     while (1) {
      i25 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i2) | 0;
      if ((i25 | 0) == 0) {
       i26 = 0;
       break L7;
      }
      if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i24 >>> 0) {
       break;
      }
      HEAP32[(HEAP32[i18 >> 2] | 0) + (i24 << 2) >> 2] = i25;
      i27 = HEAP32[i13 >> 2] | 0;
      __ZNK7WebCore10TilingData20tileBoundsWithBorderEii(i15, i11, (i24 | 0) % (i27 | 0) & -1, (i24 | 0) / (i27 | 0) & -1);
      i27 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(i2) | 0;
      i28 = HEAP32[(HEAP32[i27 >> 2] | 0) + 8 >> 2] | 0;
      __ZN3WTF6StringC1EPKc(i7, H_BASE + 8 | 0);
      i29 = FUNCTION_TABLE_iii[i28 & 1](i27, i7) | 0;
      i27 = HEAP32[i23 >> 2] | 0;
      do {
       if ((i27 | 0) != 0) {
        i28 = i27 | 0;
        i30 = (HEAP32[i28 >> 2] | 0) - 2 | 0;
        if ((i30 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i27);
         break;
        } else {
         HEAP32[i28 >> 2] = i30;
         break;
        }
       }
      } while (0);
      i27 = i29 ? 32993 : 6408;
      __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, i25);
      __ZN7WebCore17GraphicsContext3D22texImage2DResourceSafeEjijiiijji(i2, 3553, 0, i27, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, 0, i27, 5121, 4) | 0;
      i24 = i24 + 1 | 0;
      if ((i24 | 0) >= (i12 | 0)) {
       break L1;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else {
     i24 = 0;
     while (1) {
      i27 = __ZN7WebCore17GraphicsContext3D13createTextureEv(i2) | 0;
      if ((i27 | 0) == 0) {
       i26 = 0;
       break L7;
      }
      if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i24 >>> 0) {
       break;
      }
      HEAP32[(HEAP32[i18 >> 2] | 0) + (i24 << 2) >> 2] = i27;
      i30 = HEAP32[i13 >> 2] | 0;
      __ZNK7WebCore10TilingData20tileBoundsWithBorderEii(i15, i11, (i24 | 0) % (i30 | 0) & -1, (i24 | 0) / (i30 | 0) & -1);
      __ZN7WebCore17GraphicsContext3D11bindTextureEjj(i2, 3553, i27);
      __ZN7WebCore17GraphicsContext3D22texImage2DResourceSafeEjijiiijji(i2, 3553, 0, 0, HEAP32[i21 >> 2] | 0, HEAP32[i22 >> 2] | 0, 0, 0, 0, 4) | 0;
      i24 = i24 + 1 | 0;
      if ((i24 | 0) >= (i12 | 0)) {
       break L1;
      }
     }
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   } while (0);
   while (1) {
    if ((HEAP32[i20 >> 2] | 0) >>> 0 <= i26 >>> 0) {
     i31 = 18;
     break;
    }
    __ZN7WebCore17GraphicsContext3D13deleteTextureEj(i2, HEAP32[(HEAP32[i18 >> 2] | 0) + (i26 << 2) >> 2] | 0);
    i26 = i26 + 1 | 0;
    if ((i26 | 0) >= (i12 | 0)) {
     break;
    }
   }
   if ((i31 | 0) == 18) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP32[i1 >> 2] = 0;
   if ((i16 | 0) == 0) {
    STACKTOP = i6;
    return;
   }
   if ((HEAP32[i20 >> 2] | 0) != 0) {
    HEAP32[i20 >> 2] = 0;
   }
   i22 = HEAP32[i18 >> 2] | 0;
   if ((i22 | 0) != 0) {
    HEAP32[i18 >> 2] = 0;
    HEAP32[i19 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i22);
   }
   __ZN3WTF8fastFreeEPv(i16);
   STACKTOP = i6;
   return;
  }
 } while (0);
 i16 = __ZN3WTF10fastMallocEj(44) | 0;
 i19 = HEAP32[i10 >> 2] | 0;
 HEAP32[i16 >> 2] = 1;
 HEAP32[i16 + 4 >> 2] = i2;
 HEAP32[i16 + 8 >> 2] = i3;
 HEAP32[i8 >> 2] = i19;
 HEAP32[i8 + 4 >> 2] = i19;
 HEAP32[i9 >> 2] = i4;
 HEAP32[i9 + 4 >> 2] = i5;
 __ZN7WebCore10TilingDataC1ERKNS_7IntSizeES3_b(i16 + 12 | 0, i8, i9, 1);
 HEAP32[i16 + 40 >> 2] = i17;
 HEAP32[i1 >> 2] = i16;
 STACKTOP = i6;
 return;
}
function __ZN7WebCore7Texture13updateSubRectEPvRKNS_7IntRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 56 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 24 | 0;
 i8 = i4 + 40 | 0;
 i9 = i8 | 0;
 i10 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i6;
 i12 = i3;
 HEAP32[i11 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i11 + 4 >> 2] = HEAP32[i12 + 4 >> 2];
 HEAP32[i11 + 8 >> 2] = HEAP32[i12 + 8 >> 2];
 HEAP32[i11 + 12 >> 2] = HEAP32[i12 + 12 >> 2];
 i12 = i1 + 12 | 0;
 i3 = i1 + 20 | 0;
 i13 = HEAP32[i3 >> 2] | 0;
 i14 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i7 >> 2] = 0;
 HEAP32[i7 + 4 >> 2] = 0;
 HEAP32[i7 + 8 >> 2] = i13;
 HEAP32[i7 + 12 >> 2] = i14;
 __ZN7WebCore7IntRect9intersectERKS0_(i6, i7);
 i7 = i2;
 i2 = i1 + 4 | 0;
 i14 = HEAP32[i1 + 8 >> 2] | 0;
 if ((i14 | 0) == 1) {
  i13 = __ZN7WebCore17GraphicsContext3D13getExtensionsEv(HEAP32[i2 >> 2] | 0) | 0;
  i15 = HEAP32[(HEAP32[i13 >> 2] | 0) + 8 >> 2] | 0;
  __ZN3WTF6StringC1EPKc(i5, H_BASE + 8 | 0);
  i16 = FUNCTION_TABLE_iii[i15 & 1](i13, i5) | 0;
  i13 = HEAP32[i5 >> 2] | 0;
  do {
   if ((i13 | 0) != 0) {
    i5 = i13 | 0;
    i15 = (HEAP32[i5 >> 2] | 0) - 2 | 0;
    if ((i15 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i13);
     break;
    } else {
     HEAP32[i5 >> 2] = i15;
     break;
    }
   }
  } while (0);
  i17 = i16 & 1 ^ 1;
  i18 = 5121;
  i19 = i16 ? 32993 : 6408;
 } else if ((i14 | 0) == 0) {
  i17 = 0;
  i18 = 5121;
  i19 = 6408;
 } else {
  i17 = 0;
  i18 = 0;
  i19 = 0;
 }
 i14 = HEAP32[i12 >> 2] | 0;
 i16 = HEAP32[i1 + 28 >> 2] | 0;
 i13 = (HEAP32[i6 + 8 >> 2] | 0) + i16 | 0;
 i15 = HEAP32[i1 + 16 >> 2] | 0;
 i5 = (HEAP32[i6 + 12 >> 2] | 0) + i16 | 0;
 i16 = _llvm_umul_with_overflow_i32(Math_imul((i5 | 0) < (i15 | 0) ? i5 : i15, (i13 | 0) < (i14 | 0) ? i13 : i14) | 0, 4) | 0;
 i14 = tempRet0 ? -1 : i16;
 i16 = __Znaj(i14) | 0;
 i13 = i16;
 _memset(i16 | 0, 0, i14 | 0) | 0;
 i14 = i1 + 32 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i5 = i1 + 36 | 0;
 L11 : do {
  if ((Math_imul(HEAP32[i5 >> 2] | 0, i15) | 0) > 0) {
   i6 = i8;
   i20 = i8 | 0;
   i21 = i8 + 4 | 0;
   i22 = i8 + 8 | 0;
   i23 = i8 + 12 | 0;
   i24 = i17 << 24 >> 24 == 0;
   i25 = i1 + 40 | 0;
   i26 = 0;
   i27 = i15;
   L13 : while (1) {
    __ZNK7WebCore10TilingData20tileBoundsWithBorderEii(i10, i12, (i26 | 0) % (i27 | 0) & -1, (i26 | 0) / (i27 | 0) & -1);
    HEAP32[i6 >> 2] = HEAP32[i11 >> 2];
    HEAP32[i6 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
    HEAP32[i6 + 8 >> 2] = HEAP32[i11 + 8 >> 2];
    HEAP32[i6 + 12 >> 2] = HEAP32[i11 + 12 >> 2];
    __ZN7WebCore7IntRect9intersectERKS0_(i8, i10);
    i28 = HEAP32[i20 >> 2] | 0;
    i29 = HEAP32[i21 >> 2] | 0;
    i30 = i28 - (HEAP32[i9 >> 2] | 0) | 0;
    i31 = i29 - (HEAP32[i9 + 4 >> 2] | 0) | 0;
    i32 = HEAP32[i22 >> 2] | 0;
    do {
     if ((i32 | 0) >= 1) {
      i33 = HEAP32[i23 >> 2] | 0;
      if ((i33 | 0) < 1) {
       break;
      }
      i34 = HEAP32[i3 >> 2] | 0;
      do {
       if (i24) {
        i35 = (Math_imul(i34, i29) | 0) + i28 | 0;
        if ((i32 | 0) == (i34 | 0)) {
         i36 = i7 + (i35 << 2) | 0;
         break;
        }
        i37 = i32 << 2;
        i38 = 0;
        while (1) {
         _memcpy(i13 + ((Math_imul(i38, i32) | 0) << 2) | 0, i7 + ((Math_imul(i38, i34) | 0) + i35 << 2) | 0, i37) | 0;
         i39 = i38 + 1 | 0;
         if ((i39 | 0) < (i33 | 0)) {
          i38 = i39;
         } else {
          i36 = i13;
          break;
         }
        }
       } else {
        i38 = (i32 | 0) > 0;
        i37 = 0;
        i35 = i13;
        while (1) {
         if (i38) {
          i39 = (Math_imul(i37 + i29 | 0, i34) | 0) + i28 | 0;
          i40 = 0;
          i41 = i35;
          while (1) {
           i42 = HEAP32[i7 + (i39 + i40 << 2) >> 2] | 0;
           HEAP32[i41 >> 2] = i42 >>> 16 & 255 | i42 & -16711936 | i42 << 16 & 16711680;
           i42 = i40 + 1 | 0;
           if ((i42 | 0) < (i32 | 0)) {
            i40 = i42;
            i41 = i41 + 4 | 0;
           } else {
            break;
           }
          }
          i43 = i35 + (i32 << 2) | 0;
         } else {
          i43 = i35;
         }
         i41 = i37 + 1 | 0;
         if ((i41 | 0) < (i33 | 0)) {
          i37 = i41;
          i35 = i43;
         } else {
          i36 = i13;
          break;
         }
        }
       }
      } while (0);
      i33 = HEAP32[i25 >> 2] | 0;
      if ((HEAP32[i33 + 8 >> 2] | 0) >>> 0 <= i26 >>> 0) {
       break L13;
      }
      __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i2 >> 2] | 0, 3553, HEAP32[(HEAP32[i33 >> 2] | 0) + (i26 << 2) >> 2] | 0);
      __ZN7WebCore17GraphicsContext3D13texSubImage2DEjiiiiijjPKv(HEAP32[i2 >> 2] | 0, 3553, 0, i30, i31, HEAP32[i22 >> 2] | 0, HEAP32[i23 >> 2] | 0, i19, i18, i36);
     }
    } while (0);
    i26 = i26 + 1 | 0;
    i27 = HEAP32[i14 >> 2] | 0;
    if ((i26 | 0) >= (Math_imul(HEAP32[i5 >> 2] | 0, i27) | 0)) {
     break L11;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 if ((i16 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 __ZdaPv(i16);
 STACKTOP = i4;
 return;
}
function __ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE4fillERKjj(i1, i2, i3) {
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
function __ZN7WebCore7TextureD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = i3;
  i6 = i4;
  i7 = 0;
 } else {
  i4 = i1 + 4 | 0;
  i1 = 0;
  i8 = i3;
  while (1) {
   __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i4 >> 2] | 0, HEAP32[(HEAP32[i8 >> 2] | 0) + (i1 << 2) >> 2] | 0);
   i3 = i1 + 1 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i10 = i9 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (i3 >>> 0 < i11 >>> 0) {
    i1 = i3;
    i8 = i9;
   } else {
    i5 = i9;
    i6 = i10;
    i7 = i11;
    break;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore7TextureD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 40 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i3 + 8 | 0;
 if ((HEAP32[i4 >> 2] | 0) == 0) {
  i5 = i3;
  i6 = i4;
  i7 = 0;
 } else {
  i4 = i1 + 4 | 0;
  i1 = 0;
  i8 = i3;
  while (1) {
   __ZN7WebCore17GraphicsContext3D13deleteTextureEj(HEAP32[i4 >> 2] | 0, HEAP32[(HEAP32[i8 >> 2] | 0) + (i1 << 2) >> 2] | 0);
   i3 = i1 + 1 | 0;
   i9 = HEAP32[i2 >> 2] | 0;
   i10 = i9 + 8 | 0;
   i11 = HEAP32[i10 >> 2] | 0;
   if (i3 >>> 0 < i11 >>> 0) {
    i1 = i3;
    i8 = i9;
   } else {
    i5 = i9;
    i6 = i10;
    i7 = i11;
    break;
   }
  }
 }
 if ((i5 | 0) == 0) {
  return;
 }
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
 }
 i6 = i5 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) != 0) {
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i7);
 }
 __ZN3WTF8fastFreeEPv(i5);
 return;
}
function __ZN7WebCore7Texture8bindTileEi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 4 | 0;
 i4 = HEAP32[i1 + 40 >> 2] | 0;
 if ((HEAP32[i4 + 8 >> 2] | 0) >>> 0 > i2 >>> 0) {
  __ZN7WebCore17GraphicsContext3D11bindTextureEjj(HEAP32[i3 >> 2] | 0, 3553, HEAP32[(HEAP32[i4 >> 2] | 0) + (i2 << 2) >> 2] | 0);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i3 >> 2] | 0, 3553, 10241, 9729);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i3 >> 2] | 0, 3553, 10240, 9729);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i3 >> 2] | 0, 3553, 10242, 33071);
  __ZN7WebCore17GraphicsContext3D13texParameteriEjji(HEAP32[i3 >> 2] | 0, 3553, 10243, 33071);
  return;
 } else {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
}
function __ZN7WebCore7TextureC2EPNS_17GraphicsContext3DEN3WTF10PassOwnPtrINS3_6VectorIjLj0ENS3_15CrashOnOverflowEEEEENS0_6FormatEiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i4;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i7;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i6;
 __ZN7WebCore10TilingDataC1ERKNS_7IntSizeES3_b(i1 + 12 | 0, i9, i10, 1);
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i3;
 STACKTOP = i8;
 return;
}
function __ZN7WebCore7TextureC1EPNS_17GraphicsContext3DEN3WTF10PassOwnPtrINS3_6VectorIjLj0ENS3_15CrashOnOverflowEEEEENS0_6FormatEiii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 HEAP32[i1 >> 2] = 1;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 + 8 >> 2] = i4;
 HEAP32[i9 >> 2] = i7;
 HEAP32[i9 + 4 >> 2] = i7;
 HEAP32[i10 >> 2] = i5;
 HEAP32[i10 + 4 >> 2] = i6;
 __ZN7WebCore10TilingDataC1ERKNS_7IntSizeES3_b(i1 + 12 | 0, i9, i10, 1);
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 HEAP32[i10 >> 2] = 0;
 HEAP32[i1 + 40 >> 2] = i3;
 STACKTOP = i8;
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
function __ZN7WebCore7Texture4loadEPv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = HEAP32[i1 + 20 >> 2] | 0;
 i6 = HEAP32[i1 + 24 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 0;
 HEAP32[i4 + 8 >> 2] = i5;
 HEAP32[i4 + 12 >> 2] = i6;
 __ZN7WebCore7Texture13updateSubRectEPvRKNS_7IntRectE(i1, i2, i4);
 STACKTOP = i3;
 return;
}
function dynCall_viiiiiii(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 FUNCTION_TABLE_viiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function b2(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 abort(2);
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
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function b4(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(4);
 return 0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
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
function b1(i1) {
 i1 = i1 | 0;
 abort(1);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b0(i1) {
 i1 = i1 | 0;
 abort(0);
}
function b3() {
 abort(3);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore7TextureD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viiiiiii = [b2,b2,__ZN7WebCore7TextureC2EPNS_17GraphicsContext3DEN3WTF10PassOwnPtrINS3_6VectorIjLj0ENS3_15CrashOnOverflowEEEEENS0_6FormatEiii,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viiiiiii: dynCall_viiiiiii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viiiiiii": invoke_viiiiiii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_llvm_umul_with_overflow_i32": _llvm_umul_with_overflow_i32, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiii = Module["dynCall_viiiiiii"] = asm["dynCall_viiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore7Texture8bindTileEi","__ZN7WebCore7TextureC2EPNS_17GraphicsContext3DEN3WTF10PassOwnPtrINS3_6VectorIjLj0ENS3_15CrashOnOverflowEEEEENS0_6FormatEiii","_strlen","__ZN7WebCore7Texture4loadEPv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore7Texture13updateSubRectEPvRKNS_7IntRectE","_memset","_memcpy","__ZN7WebCore7Texture6createEPNS_17GraphicsContext3DENS0_6FormatEii","__ZN3WTF6VectorIjLj0ENS_15CrashOnOverflowEE4fillERKjj","__ZN7WebCore7TextureD2Ev"]

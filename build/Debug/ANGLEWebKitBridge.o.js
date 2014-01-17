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
H_BASE = parentModule["_malloc"](24 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 24;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore17ANGLEWebKitBridgeC1E14ShShaderOutput12ShShaderSpec;
var __ZN7WebCore17ANGLEWebKitBridgeD1Ev;
/* memory initializer */ allocate([93,0,0,0,0,0,0,0,91,0,0,0,0,0,0,0,91,48,93,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCoreL13getSymbolInfoEPv12ShShaderInfoRN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS2_15CrashOnOverflowEEE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 696 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i4 + 32 | 0;
 i10 = i4 + 40 | 0;
 i11 = i4 + 312 | 0;
 i12 = i4 + 584 | 0;
 i13 = i4 + 616 | 0;
 i14 = i4 + 624 | 0;
 i15 = i4 + 632 | 0;
 i16 = i4 + 640 | 0;
 i17 = i4 + 648 | 0;
 i18 = i4 + 656 | 0;
 i19 = i4 + 664 | 0;
 i20 = i4 + 672 | 0;
 i21 = i4 + 680 | 0;
 i22 = i4 + 688 | 0;
 if ((i2 | 0) == 35718) {
  i23 = 35719;
 } else if ((i2 | 0) == 35721) {
  i23 = 35722;
 } else {
  i24 = 0;
  STACKTOP = i4;
  return i24 | 0;
 }
 HEAP32[i9 >> 2] = 0;
 _ShGetInfo(i1, i2, i9);
 i25 = HEAP32[i9 >> 2] | 0;
 HEAP32[i8 >> 2] = 0;
 _ShGetInfo(i1, i23, i8);
 i23 = HEAP32[i8 >> 2] | 0;
 if (i23 >>> 0 < 2 >>> 0) {
  i24 = 0;
  STACKTOP = i4;
  return i24 | 0;
 }
 HEAP32[i7 >> 2] = 0;
 _ShGetInfo(i1, 24576, i7);
 i8 = HEAP32[i7 >> 2] | 0;
 if (i8 >>> 0 < 2 >>> 0) {
  i24 = 0;
  STACKTOP = i4;
  return i24 | 0;
 }
 i7 = i10 + 12 | 0;
 i9 = i10 | 0;
 HEAP32[i9 >> 2] = i7;
 i26 = i10 + 4 | 0;
 HEAP32[i26 >> 2] = 256;
 i27 = i10 + 8 | 0;
 HEAP32[i27 >> 2] = i23;
 if (i23 >>> 0 > 256 >>> 0) {
  i10 = __ZN3WTF18fastMallocGoodSizeEj(i23) | 0;
  HEAP32[i26 >> 2] = i10;
  HEAP32[i9 >> 2] = __ZN3WTF10fastMallocEj(i10) | 0;
 }
 i10 = i11 + 12 | 0;
 i23 = i11 | 0;
 HEAP32[i23 >> 2] = i10;
 i28 = i11 + 4 | 0;
 HEAP32[i28 >> 2] = 256;
 i29 = i11 + 8 | 0;
 HEAP32[i29 >> 2] = i8;
 if (i8 >>> 0 > 256 >>> 0) {
  i11 = __ZN3WTF18fastMallocGoodSizeEj(i8) | 0;
  HEAP32[i28 >> 2] = i11;
  HEAP32[i23 >> 2] = __ZN3WTF10fastMallocEj(i11) | 0;
 }
 L17 : do {
  if ((i25 | 0) == 0) {
   i30 = 1;
  } else {
   i11 = i12 + 4 | 0;
   i8 = i12 + 8 | 0;
   i31 = i12 | 0;
   i32 = i12 + 16 | 0;
   i33 = i12 + 12 | 0;
   i34 = i16 | 0;
   i35 = i12 + 20 | 0;
   i36 = i17 | 0;
   i37 = i12 + 24 | 0;
   i38 = i12 + 28 | 0;
   i39 = i3 + 8 | 0;
   i40 = i3 + 4 | 0;
   i41 = i18 | 0;
   i42 = i6 | 0;
   i43 = i6 + 4 | 0;
   i44 = i5 | 0;
   i45 = i20 | 0;
   i46 = i20 + 4 | 0;
   i47 = i19 | 0;
   i48 = i22 | 0;
   i49 = i22 + 4 | 0;
   i50 = i21 | 0;
   i51 = i3 | 0;
   i52 = 0;
   L19 : while (1) {
    HEAP32[i11 >> 2] = 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i13 >> 2] = 0;
    if ((i2 | 0) == 35721) {
     HEAP32[i31 >> 2] = 0;
     _ShGetVariableInfo(i1, 35721, i52, i13, i32, i33, i14, i15, HEAP32[i9 >> 2] | 0, HEAP32[i23 >> 2] | 0);
    } else if ((i2 | 0) == 35718) {
     HEAP32[i31 >> 2] = 1;
     _ShGetVariableInfo(i1, 35718, i52, i13, i32, i33, i14, i15, HEAP32[i9 >> 2] | 0, HEAP32[i23 >> 2] | 0);
    } else if ((i2 | 0) == 35771) {
     HEAP32[i31 >> 2] = 2;
     _ShGetVariableInfo(i1, 35771, i52, i13, i32, i33, i14, i15, HEAP32[i9 >> 2] | 0, HEAP32[i23 >> 2] | 0);
    } else {
     i30 = 0;
     break L17;
    }
    if ((HEAP32[i13 >> 2] | 0) == 0) {
     break;
    }
    __ZN3WTF6StringC1EPKc(i16, HEAP32[i9 >> 2] | 0);
    __ZN3WTF6StringC1EPKc(i17, HEAP32[i23 >> 2] | 0);
    i53 = HEAP32[i34 >> 2] | 0;
    do {
     if ((i53 | 0) == 0) {
      i54 = 20;
     } else {
      if (!(__ZNK3WTF10StringImpl8endsWithEPKcjb(i53, H_BASE + 24 | 0, 3, 1) | 0)) {
       i54 = 20;
       break;
      }
      i55 = HEAP32[i36 >> 2] | 0;
      if ((i55 | 0) == 0) {
       HEAP8[i35] = 0;
       break;
      }
      i56 = __ZNK3WTF10StringImpl8endsWithEPKcjb(i55, H_BASE + 24 | 0, 3, 1) | 0;
      HEAP8[i35] = i56 & 1;
      if (!i56) {
       break;
      }
      i56 = HEAP32[i34 >> 2] | 0;
      if ((i56 | 0) == 0) {
       i57 = -3;
      } else {
       i57 = (HEAP32[i56 + 4 >> 2] | 0) - 3 | 0;
      }
      __ZN3WTF6String8truncateEj(i16, i57);
      i56 = HEAP32[i36 >> 2] | 0;
      if ((i56 | 0) == 0) {
       i58 = -3;
      } else {
       i58 = (HEAP32[i56 + 4 >> 2] | 0) - 3 | 0;
      }
      __ZN3WTF6String8truncateEj(i17, i58);
     }
    } while (0);
    if ((i54 | 0) == 20) {
     i54 = 0;
     HEAP8[i35] = 0;
    }
    i53 = HEAP32[i34 >> 2] | 0;
    if ((i53 | 0) != 0) {
     i56 = i53 | 0;
     HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 2;
    }
    i56 = HEAP32[i11 >> 2] | 0;
    HEAP32[i11 >> 2] = i53;
    do {
     if ((i56 | 0) != 0) {
      i53 = i56 | 0;
      i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
      if ((i55 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i56);
       break;
      } else {
       HEAP32[i53 >> 2] = i55;
       break;
      }
     }
    } while (0);
    i56 = HEAP32[i36 >> 2] | 0;
    if ((i56 | 0) != 0) {
     i55 = i56 | 0;
     HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
    }
    i55 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = i56;
    do {
     if ((i55 | 0) != 0) {
      i56 = i55 | 0;
      i53 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i55);
       break;
      } else {
       HEAP32[i56 >> 2] = i53;
       break;
      }
     }
    } while (0);
    HEAP32[i37 >> 2] = HEAP32[i14 >> 2];
    HEAP32[i38 >> 2] = HEAP32[i15 >> 2];
    i55 = HEAP32[i39 >> 2] | 0;
    if ((i55 | 0) == (HEAP32[i40 >> 2] | 0)) {
     __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i3, i12);
    } else {
     i53 = HEAP32[i51 >> 2] | 0;
     HEAP32[i53 + (i55 << 5) >> 2] = HEAP32[i31 >> 2];
     i56 = HEAP32[i11 >> 2] | 0;
     HEAP32[i53 + (i55 << 5) + 4 >> 2] = i56;
     if ((i56 | 0) != 0) {
      i59 = i56 | 0;
      HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
     }
     i59 = HEAP32[i8 >> 2] | 0;
     HEAP32[i53 + (i55 << 5) + 8 >> 2] = i59;
     if ((i59 | 0) != 0) {
      i56 = i59 | 0;
      HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 2;
     }
     HEAP32[i53 + (i55 << 5) + 12 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i53 + (i55 << 5) + 16 >> 2] = HEAP32[i32 >> 2];
     HEAP8[i53 + (i55 << 5) + 20 | 0] = HEAP8[i35] & 1;
     HEAP32[i53 + (i55 << 5) + 24 >> 2] = HEAP32[i37 >> 2];
     HEAP32[i53 + (i55 << 5) + 28 >> 2] = HEAP32[i38 >> 2];
     HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
    }
    do {
     if ((HEAP8[i35] & 1) != 0) {
      HEAP8[i35] = 0;
      if ((HEAP32[i32 >> 2] | 0) > 0) {
       i60 = 0;
      } else {
       break;
      }
      while (1) {
       __ZN3WTF6String6numberEi(i18, i60);
       i55 = HEAP32[i41 >> 2] | 0;
       do {
        if ((i55 | 0) == 0) {
         i61 = 0;
         i62 = 1;
        } else {
         i53 = i55 | 0;
         i56 = HEAP32[i53 >> 2] | 0;
         i59 = i56 + 2 | 0;
         HEAP32[i53 >> 2] = i56 + 4;
         if ((i59 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          i63 = HEAP32[i53 >> 2] | 0;
         } else {
          HEAP32[i53 >> 2] = i59;
          i63 = i59;
         }
         i59 = i63 + 2 | 0;
         HEAP32[i53 >> 2] = i63 + 4;
         if ((i59 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          i61 = i55;
          i62 = 0;
          break;
         } else {
          HEAP32[i53 >> 2] = i59;
          i61 = i55;
          i62 = 0;
          break;
         }
        }
       } while (0);
       HEAP32[i42 >> 2] = H_BASE + 16;
       HEAP32[i43 >> 2] = i61;
       i55 = (i61 | 0) == 0;
       if (!i55) {
        i59 = i61 | 0;
        HEAP32[i59 >> 2] = (HEAP32[i59 >> 2] | 0) + 2;
       }
       __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i5, i6, H_BASE + 8 | 0);
       i59 = HEAP32[i44 >> 2] | 0;
       HEAP32[i44 >> 2] = 0;
       i53 = HEAP32[i43 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i56 = i53 | 0;
         i64 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i56 >> 2] = i64;
          break;
         }
        }
       } while (0);
       if ((i59 | 0) == 0) {
        i54 = 62;
        break L19;
       }
       do {
        if (!i55) {
         i53 = i61 | 0;
         i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i61);
          break;
         } else {
          HEAP32[i53 >> 2] = i64;
          break;
         }
        }
       } while (0);
       do {
        if (!i62) {
         i55 = i61 | 0;
         i64 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i61);
          break;
         } else {
          HEAP32[i55 >> 2] = i64;
          break;
         }
        }
       } while (0);
       i64 = HEAP32[i41 >> 2] | 0;
       do {
        if ((i64 | 0) != 0) {
         i55 = i64 | 0;
         i53 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i53 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i64);
          break;
         } else {
          HEAP32[i55 >> 2] = i53;
          break;
         }
        }
       } while (0);
       i64 = i59 | 0;
       HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
       i64 = HEAP32[i34 >> 2] | 0;
       i53 = (i64 | 0) == 0;
       if (i53) {
        i55 = i59 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
        HEAP32[i45 >> 2] = i64;
       } else {
        i55 = i64 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
        i55 = i59 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
        HEAP32[i45 >> 2] = i64;
        i55 = i64 | 0;
        HEAP32[i55 >> 2] = (HEAP32[i55 >> 2] | 0) + 2;
       }
       HEAP32[i46 >> 2] = i59;
       i55 = i59 | 0;
       i56 = HEAP32[i55 >> 2] | 0;
       HEAP32[i55 >> 2] = i56 + 2;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
       } else {
        HEAP32[i55 >> 2] = i56;
       }
       do {
        if (!i53) {
         i56 = i64 | 0;
         i55 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i55 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i64);
          break;
         } else {
          HEAP32[i56 >> 2] = i55;
          break;
         }
        }
       } while (0);
       __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i19, i20);
       i64 = HEAP32[i47 >> 2] | 0;
       HEAP32[i47 >> 2] = 0;
       i53 = HEAP32[i11 >> 2] | 0;
       HEAP32[i11 >> 2] = i64;
       do {
        if ((i53 | 0) != 0) {
         i64 = i53 | 0;
         i55 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
         if ((i55 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i64 >> 2] = i55;
          break;
         }
        }
       } while (0);
       i53 = HEAP32[i46 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i55 = i53 | 0;
         i64 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i55 >> 2] = i64;
          break;
         }
        }
       } while (0);
       i53 = HEAP32[i45 >> 2] | 0;
       do {
        if ((i53 | 0) != 0) {
         i64 = i53 | 0;
         i55 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
         if ((i55 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i64 >> 2] = i55;
          break;
         }
        }
       } while (0);
       i53 = i59 | 0;
       i55 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
       if ((i55 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
        i65 = HEAP32[i53 >> 2] | 0;
       } else {
        HEAP32[i53 >> 2] = i55;
        i65 = i55;
       }
       HEAP32[i53 >> 2] = i65 + 2;
       i53 = HEAP32[i36 >> 2] | 0;
       i55 = (i53 | 0) == 0;
       if (i55) {
        i64 = i59 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
        HEAP32[i48 >> 2] = i53;
       } else {
        i64 = i53 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
        i64 = i59 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
        HEAP32[i48 >> 2] = i53;
        i64 = i53 | 0;
        HEAP32[i64 >> 2] = (HEAP32[i64 >> 2] | 0) + 2;
       }
       HEAP32[i49 >> 2] = i59;
       i64 = i59 | 0;
       i56 = HEAP32[i64 >> 2] | 0;
       HEAP32[i64 >> 2] = i56 + 2;
       if ((i56 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
       } else {
        HEAP32[i64 >> 2] = i56;
       }
       do {
        if (!i55) {
         i56 = i53 | 0;
         i64 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i53);
          break;
         } else {
          HEAP32[i56 >> 2] = i64;
          break;
         }
        }
       } while (0);
       __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i21, i22);
       i53 = HEAP32[i50 >> 2] | 0;
       HEAP32[i50 >> 2] = 0;
       i55 = HEAP32[i8 >> 2] | 0;
       HEAP32[i8 >> 2] = i53;
       do {
        if ((i55 | 0) != 0) {
         i53 = i55 | 0;
         i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          break;
         } else {
          HEAP32[i53 >> 2] = i64;
          break;
         }
        }
       } while (0);
       i55 = HEAP32[i49 >> 2] | 0;
       do {
        if ((i55 | 0) != 0) {
         i64 = i55 | 0;
         i53 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
         if ((i53 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          break;
         } else {
          HEAP32[i64 >> 2] = i53;
          break;
         }
        }
       } while (0);
       i55 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i55 | 0) != 0) {
         i53 = i55 | 0;
         i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
         if ((i64 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i55);
          break;
         } else {
          HEAP32[i53 >> 2] = i64;
          break;
         }
        }
       } while (0);
       i55 = i59 | 0;
       i64 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
       if ((i64 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
       } else {
        HEAP32[i55 >> 2] = i64;
       }
       i64 = HEAP32[i39 >> 2] | 0;
       if ((i64 | 0) == (HEAP32[i40 >> 2] | 0)) {
        __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i3, i12);
       } else {
        i55 = HEAP32[i51 >> 2] | 0;
        HEAP32[i55 + (i64 << 5) >> 2] = HEAP32[i31 >> 2];
        i53 = HEAP32[i11 >> 2] | 0;
        HEAP32[i55 + (i64 << 5) + 4 >> 2] = i53;
        if ((i53 | 0) != 0) {
         i56 = i53 | 0;
         HEAP32[i56 >> 2] = (HEAP32[i56 >> 2] | 0) + 2;
        }
        i56 = HEAP32[i8 >> 2] | 0;
        HEAP32[i55 + (i64 << 5) + 8 >> 2] = i56;
        if ((i56 | 0) != 0) {
         i53 = i56 | 0;
         HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 2;
        }
        HEAP32[i55 + (i64 << 5) + 12 >> 2] = HEAP32[i33 >> 2];
        HEAP32[i55 + (i64 << 5) + 16 >> 2] = HEAP32[i32 >> 2];
        HEAP8[i55 + (i64 << 5) + 20 | 0] = HEAP8[i35] & 1;
        HEAP32[i55 + (i64 << 5) + 24 >> 2] = HEAP32[i37 >> 2];
        HEAP32[i55 + (i64 << 5) + 28 >> 2] = HEAP32[i38 >> 2];
        HEAP32[i39 >> 2] = (HEAP32[i39 >> 2] | 0) + 1;
       }
       i64 = i59 | 0;
       i55 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
       if ((i55 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i59);
       } else {
        HEAP32[i64 >> 2] = i55;
       }
       i60 = i60 + 1 | 0;
       if ((i60 | 0) >= (HEAP32[i32 >> 2] | 0)) {
        break;
       }
      }
     }
    } while (0);
    i55 = HEAP32[i36 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i64 = i55 | 0;
      i53 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i55);
       break;
      } else {
       HEAP32[i64 >> 2] = i53;
       break;
      }
     }
    } while (0);
    i55 = HEAP32[i34 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i53 = i55 | 0;
      i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i55);
       break;
      } else {
       HEAP32[i53 >> 2] = i64;
       break;
      }
     }
    } while (0);
    i55 = HEAP32[i8 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i64 = i55 | 0;
      i53 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i55);
       break;
      } else {
       HEAP32[i64 >> 2] = i53;
       break;
      }
     }
    } while (0);
    i55 = HEAP32[i11 >> 2] | 0;
    do {
     if ((i55 | 0) != 0) {
      i53 = i55 | 0;
      i64 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i55);
       break;
      } else {
       HEAP32[i53 >> 2] = i64;
       break;
      }
     }
    } while (0);
    i55 = i52 + 1 | 0;
    if (i55 >>> 0 < i25 >>> 0) {
     i52 = i55;
    } else {
     i30 = 1;
     break L17;
    }
   }
   if ((i54 | 0) == 62) {
    _WTFCrash();
    return 0;
   }
   i52 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i52 | 0) != 0) {
     i34 = i52 | 0;
     i36 = (HEAP32[i34 >> 2] | 0) - 2 | 0;
     if ((i36 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i52);
      break;
     } else {
      HEAP32[i34 >> 2] = i36;
      break;
     }
    }
   } while (0);
   i52 = HEAP32[i11 >> 2] | 0;
   if ((i52 | 0) == 0) {
    i30 = 0;
    break;
   }
   i8 = i52 | 0;
   i36 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
   if ((i36 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i52);
    i30 = 0;
    break;
   } else {
    HEAP32[i8 >> 2] = i36;
    i30 = 0;
    break;
   }
  }
 } while (0);
 if ((HEAP32[i29 >> 2] | 0) != 0) {
  HEAP32[i29 >> 2] = 0;
 }
 i29 = HEAP32[i23 >> 2] | 0;
 if (!((i10 | 0) == (i29 | 0) | (i29 | 0) == 0)) {
  HEAP32[i23 >> 2] = 0;
  HEAP32[i28 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i29);
 }
 if ((HEAP32[i27 >> 2] | 0) != 0) {
  HEAP32[i27 >> 2] = 0;
 }
 i27 = HEAP32[i9 >> 2] | 0;
 if ((i7 | 0) == (i27 | 0) | (i27 | 0) == 0) {
  i24 = i30;
  STACKTOP = i4;
  return i24 | 0;
 }
 HEAP32[i9 >> 2] = 0;
 HEAP32[i26 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i27);
 i24 = i30;
 STACKTOP = i4;
 return i24 | 0;
}
function __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i2 | 0;
 i2 = HEAP32[i7 >> 2] | 0;
 i8 = (i2 | 0) == 0;
 if (i8) {
  i9 = 0;
 } else {
  i9 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = (i3 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i3 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i9 | 0, i12 | 0) | 0;
 i12 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 if (i8) {
  i14 = 9;
 } else {
  if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
   i14 = 9;
  }
 }
 do {
  if ((i14 | 0) == 9) {
   if (!i11) {
    if ((HEAP32[i3 + 16 >> 2] & 32 | 0) == 0) {
     break;
    }
   }
   do {
    if ((i12 | 0) == 0) {
     i2 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i2 | 0) == 0) {
      i14 = 26;
      break;
     }
     i8 = i2 | 0;
     HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 2;
     i15 = i2;
     i16 = 0;
    } else {
     if (i12 >>> 0 > 4294967275 >>> 0) {
      i14 = 26;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i6, i12 + 20 | 0);
     i2 = i6 | 0;
     i8 = HEAP32[i2 >> 2] | 0;
     HEAP32[i2 >> 2] = 0;
     if ((i8 | 0) == 0) {
      i14 = 26;
      break;
     }
     i2 = i8 + 20 | 0;
     HEAP32[i8 >> 2] = 2;
     HEAP32[i8 + 4 >> 2] = i12;
     HEAP32[i8 + 8 >> 2] = i2;
     HEAP32[i8 + 12 >> 2] = 0;
     HEAP32[i8 + 16 >> 2] = 32;
     i15 = i8;
     i16 = i2;
    }
   } while (0);
   if ((i14 | 0) == 26) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i2 = HEAP32[i7 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     i17 = 0;
    } else {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i13 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      i18 = i2;
     } else {
      i9 = 0;
      while (1) {
       HEAP8[i16 + i9 | 0] = HEAP8[i13 + i9 | 0] | 0;
       i9 = i9 + 1 | 0;
       if (i9 >>> 0 >= i8 >>> 0) {
        break;
       }
      }
      i8 = HEAP32[i7 >> 2] | 0;
      if ((i8 | 0) == 0) {
       i17 = 0;
       break;
      } else {
       i18 = i8;
      }
     }
     i17 = HEAP32[i18 + 4 >> 2] | 0;
    }
   } while (0);
   i2 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i2 | 0) != 0) {
     i8 = HEAP32[i2 + 4 >> 2] | 0;
     i9 = HEAP32[i2 + 8 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     } else {
      i19 = 0;
     }
     while (1) {
      HEAP8[i16 + (i19 + i17) | 0] = HEAP8[i9 + i19 | 0] | 0;
      i19 = i19 + 1 | 0;
      if (i19 >>> 0 >= i8 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i12 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 48;
    break;
   }
   i19 = i15 | 0;
   HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 2;
   i20 = i15;
   i21 = 0;
  } else {
   if (i12 >>> 0 > 2147483637 >>> 0) {
    i14 = 48;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i5, (i12 << 1) + 20 | 0);
   i15 = i5 | 0;
   i19 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i19 | 0) == 0) {
    i14 = 48;
    break;
   }
   i15 = i19 + 20 | 0;
   HEAP32[i19 >> 2] = 2;
   HEAP32[i19 + 4 >> 2] = i12;
   HEAP32[i19 + 8 >> 2] = i15;
   HEAP32[i19 + 12 >> 2] = 0;
   HEAP32[i19 + 16 >> 2] = 0;
   i20 = i19;
   i21 = i15;
  }
 } while (0);
 if ((i14 | 0) == 48) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i22 = 0;
  } else {
   i12 = HEAP32[i14 + 4 >> 2] | 0;
   do {
    if ((HEAP32[i14 + 16 >> 2] & 32 | 0) == 0) {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i23 = 0;
     }
     while (1) {
      HEAP16[i21 + (i23 << 1) >> 1] = HEAP16[i5 + (i23 << 1) >> 1] | 0;
      i23 = i23 + 1 | 0;
      if (i23 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    } else {
     i5 = HEAP32[i14 + 8 >> 2] | 0;
     if ((i12 | 0) == 0) {
      break;
     } else {
      i24 = 0;
     }
     while (1) {
      HEAP16[i21 + (i24 << 1) >> 1] = HEAPU8[i5 + i24 | 0] | 0;
      i24 = i24 + 1 | 0;
      if (i24 >>> 0 >= i12 >>> 0) {
       break;
      }
     }
    }
   } while (0);
   i12 = HEAP32[i7 >> 2] | 0;
   if ((i12 | 0) == 0) {
    i22 = 0;
    break;
   }
   i22 = HEAP32[i12 + 4 >> 2] | 0;
  }
 } while (0);
 i7 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i7 | 0) != 0) {
   i10 = HEAP32[i7 + 4 >> 2] | 0;
   if ((HEAP32[i7 + 16 >> 2] & 32 | 0) == 0) {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i25 = 0;
    }
    while (1) {
     HEAP16[i21 + (i25 + i22 << 1) >> 1] = HEAP16[i24 + (i25 << 1) >> 1] | 0;
     i25 = i25 + 1 | 0;
     if (i25 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   } else {
    i24 = HEAP32[i7 + 8 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    } else {
     i26 = 0;
    }
    while (1) {
     HEAP16[i21 + (i26 + i22 << 1) >> 1] = HEAPU8[i24 + i26 | 0] | 0;
     i26 = i26 + 1 | 0;
     if (i26 >>> 0 >= i10 >>> 0) {
      break;
     }
    }
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = i20;
 STACKTOP = i4;
 return;
}
function __ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = _strlen(i3 | 0) | 0;
 i8 = i2 | 0;
 i9 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
 i10 = i2 + 4 | 0;
 i2 = HEAP32[i10 >> 2] | 0;
 i11 = (i2 | 0) == 0;
 if (i11) {
  i12 = 0;
 } else {
  i12 = HEAP32[i2 + 4 >> 2] | 0;
 }
 i13 = _llvm_uadd_with_overflow_i32(i12 + i9 | 0, i7 | 0) | 0;
 i9 = i13;
 if (tempRet0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 do {
  if (!i11) {
   if ((HEAP32[i2 + 16 >> 2] & 32 | 0) != 0) {
    break;
   }
   do {
    if ((i9 | 0) == 0) {
     i13 = __ZN3WTF10StringImpl5emptyEv() | 0;
     if ((i13 | 0) == 0) {
      i14 = 42;
      break;
     }
     i12 = i13 | 0;
     HEAP32[i12 >> 2] = (HEAP32[i12 >> 2] | 0) + 2;
     i15 = i13;
     i16 = 0;
    } else {
     if (i9 >>> 0 > 2147483637 >>> 0) {
      i14 = 42;
      break;
     }
     __ZN3WTF13tryFastMallocEj(i5, (i9 << 1) + 20 | 0);
     i13 = i5 | 0;
     i12 = HEAP32[i13 >> 2] | 0;
     HEAP32[i13 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i14 = 42;
      break;
     }
     i13 = i12 + 20 | 0;
     HEAP32[i12 >> 2] = 2;
     HEAP32[i12 + 4 >> 2] = i9;
     HEAP32[i12 + 8 >> 2] = i13;
     HEAP32[i12 + 12 >> 2] = 0;
     HEAP32[i12 + 16 >> 2] = 0;
     i15 = i12;
     i16 = i13;
    }
   } while (0);
   if ((i14 | 0) == 42) {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
   i13 = HEAP32[i8 >> 2] | 0;
   i12 = _strlen(i13 | 0) | 0;
   if ((i12 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i17 << 1) >> 1] = HEAPU8[i13 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i12 >>> 0) {
      break;
     }
    }
   }
   i17 = HEAP32[i10 >> 2] | 0;
   do {
    if ((i17 | 0) == 0) {
     i18 = 0;
     i19 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    } else {
     i13 = HEAP32[i17 + 4 >> 2] | 0;
     do {
      if ((HEAP32[i17 + 16 >> 2] & 32 | 0) == 0) {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i21 = 0;
       }
       while (1) {
        HEAP16[i16 + (i21 + i12 << 1) >> 1] = HEAP16[i20 + (i21 << 1) >> 1] | 0;
        i21 = i21 + 1 | 0;
        if (i21 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      } else {
       i20 = HEAP32[i17 + 8 >> 2] | 0;
       if ((i13 | 0) == 0) {
        break;
       } else {
        i22 = 0;
       }
       while (1) {
        HEAP16[i16 + (i22 + i12 << 1) >> 1] = HEAPU8[i20 + i22 | 0] | 0;
        i22 = i22 + 1 | 0;
        if (i22 >>> 0 >= i13 >>> 0) {
         break;
        }
       }
      }
     } while (0);
     i13 = HEAP32[i10 >> 2] | 0;
     i20 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
     if ((i13 | 0) == 0) {
      i18 = 0;
      i19 = i20;
      break;
     }
     i18 = HEAP32[i13 + 4 >> 2] | 0;
     i19 = i20;
    }
   } while (0);
   i12 = i18 + i19 | 0;
   if ((i7 | 0) != 0) {
    i17 = 0;
    while (1) {
     HEAP16[i16 + (i12 + i17 << 1) >> 1] = HEAPU8[i3 + i17 | 0] | 0;
     i17 = i17 + 1 | 0;
     if (i17 >>> 0 >= i7 >>> 0) {
      break;
     }
    }
   }
   HEAP32[i1 >> 2] = i15;
   STACKTOP = i4;
   return;
  }
 } while (0);
 do {
  if ((i9 | 0) == 0) {
   i15 = __ZN3WTF10StringImpl5emptyEv() | 0;
   if ((i15 | 0) == 0) {
    i14 = 21;
    break;
   }
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 2;
   i23 = i15;
   i24 = 0;
  } else {
   if (i9 >>> 0 > 4294967275 >>> 0) {
    i14 = 21;
    break;
   }
   __ZN3WTF13tryFastMallocEj(i6, i9 + 20 | 0);
   i15 = i6 | 0;
   i16 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = 0;
   if ((i16 | 0) == 0) {
    i14 = 21;
    break;
   }
   i15 = i16 + 20 | 0;
   HEAP32[i16 >> 2] = 2;
   HEAP32[i16 + 4 >> 2] = i9;
   HEAP32[i16 + 8 >> 2] = i15;
   HEAP32[i16 + 12 >> 2] = 0;
   HEAP32[i16 + 16 >> 2] = 32;
   i23 = i16;
   i24 = i15;
  }
 } while (0);
 if ((i14 | 0) == 21) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i4;
  return;
 }
 i14 = HEAP32[i8 >> 2] | 0;
 i9 = _strlen(i14 | 0) | 0;
 _memcpy(i24 | 0, i14 | 0, i9) | 0;
 i14 = HEAP32[i10 >> 2] | 0;
 do {
  if ((i14 | 0) == 0) {
   i25 = 0;
   i26 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
  } else {
   i6 = HEAP32[i14 + 4 >> 2] | 0;
   i15 = HEAP32[i14 + 8 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i27 = i14;
    i28 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
   } else {
    i16 = 0;
    while (1) {
     HEAP8[i24 + (i16 + i9) | 0] = HEAP8[i15 + i16 | 0] | 0;
     i16 = i16 + 1 | 0;
     if (i16 >>> 0 >= i6 >>> 0) {
      break;
     }
    }
    i6 = HEAP32[i10 >> 2] | 0;
    i16 = _strlen(HEAP32[i8 >> 2] | 0) | 0;
    if ((i6 | 0) == 0) {
     i25 = 0;
     i26 = i16;
     break;
    } else {
     i27 = i6;
     i28 = i16;
    }
   }
   i25 = HEAP32[i27 + 4 >> 2] | 0;
   i26 = i28;
  }
 } while (0);
 _memcpy(i24 + (i25 + i26) | 0, i3 | 0, i7) | 0;
 HEAP32[i1 >> 2] = i23;
 STACKTOP = i4;
 return;
}
function __ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 16 | 0;
 i12 = i8 + 24 | 0;
 i13 = i8 + 32 | 0;
 i14 = i1 | 0;
 do {
  if ((HEAP8[i14] & 1) == 0) {
   i15 = i1 + 16 | 0;
   i16 = i1 + 12 | 0;
   i17 = i1 + 20 | 0;
   i18 = i1 + 4 | 0;
   HEAP32[i18 >> 2] = _ShConstructCompiler(35632, HEAP32[i15 >> 2] | 0, HEAP32[i16 >> 2] | 0, i17) | 0;
   i19 = _ShConstructCompiler(35633, HEAP32[i15 >> 2] | 0, HEAP32[i16 >> 2] | 0, i17) | 0;
   i17 = i1 + 8 | 0;
   HEAP32[i17 >> 2] = i19;
   i16 = HEAP32[i18 >> 2] | 0;
   i15 = (i16 | 0) == 0;
   if (!(i15 | (i19 | 0) == 0)) {
    HEAP8[i14] = 1;
    i20 = i17;
    i21 = i18;
    break;
   }
   if (i15) {
    i22 = i19;
   } else {
    _ShDestruct(i16);
    i22 = HEAP32[i17 >> 2] | 0;
   }
   HEAP32[i18 >> 2] = 0;
   if ((i22 | 0) != 0) {
    _ShDestruct(i22);
   }
   HEAP32[i17 >> 2] = 0;
   HEAP8[i14] = 0;
   i23 = 0;
   STACKTOP = i8;
   return i23 | 0;
  } else {
   i20 = i1 + 8 | 0;
   i21 = i1 + 4 | 0;
  }
 } while (0);
 i1 = HEAP32[((i3 | 0) == 35633 ? i20 : i21) >> 2] | 0;
 i21 = i11 | 0;
 HEAP32[i21 >> 2] = i2;
 if ((_ShCompile(i1, i21, 1, i7 | 12) | 0) == 0) {
  HEAP32[i10 >> 2] = 0;
  _ShGetInfo(i1, 35716, i10);
  i7 = HEAP32[i10 >> 2] | 0;
  if ((i7 | 0) <= 1) {
   i23 = 0;
   STACKTOP = i8;
   return i23 | 0;
  }
  i10 = __Znaj(i7) | 0;
  _memset(i10 | 0, 0, i7 | 0) | 0;
  if ((i10 | 0) == 0) {
   i23 = 0;
   STACKTOP = i8;
   return i23 | 0;
  }
  _ShGetInfoLog(i1, i10);
  __ZN3WTF6StringC1EPKc(i12, i10);
  i7 = i12 | 0;
  i12 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i21 = i5 | 0;
  i5 = HEAP32[i21 >> 2] | 0;
  HEAP32[i21 >> 2] = i12;
  do {
   if ((i5 | 0) != 0) {
    i12 = i5 | 0;
    i21 = (HEAP32[i12 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i12 >> 2] = i21;
     break;
    }
   }
  } while (0);
  i5 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i5 | 0) != 0) {
    i7 = i5 | 0;
    i21 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
    if ((i21 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i5);
     break;
    } else {
     HEAP32[i7 >> 2] = i21;
     break;
    }
   }
  } while (0);
  __ZdaPv(i10);
  i23 = 0;
  STACKTOP = i8;
  return i23 | 0;
 }
 HEAP32[i9 >> 2] = 0;
 _ShGetInfo(i1, 35720, i9);
 i10 = HEAP32[i9 >> 2] | 0;
 if ((i10 | 0) > 1) {
  i9 = __Znaj(i10) | 0;
  _memset(i9 | 0, 0, i10 | 0) | 0;
  if ((i9 | 0) == 0) {
   i23 = 0;
   STACKTOP = i8;
   return i23 | 0;
  }
  _ShGetObjectCode(i1, i9);
  __ZN3WTF6StringC1EPKc(i13, i9);
  i10 = i13 | 0;
  i13 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  i5 = i4 | 0;
  i4 = HEAP32[i5 >> 2] | 0;
  HEAP32[i5 >> 2] = i13;
  do {
   if ((i4 | 0) != 0) {
    i13 = i4 | 0;
    i5 = (HEAP32[i13 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i13 >> 2] = i5;
     break;
    }
   }
  } while (0);
  i4 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i4 | 0) != 0) {
    i10 = i4 | 0;
    i5 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
    if ((i5 | 0) == 0) {
     __ZN3WTF10StringImpl7destroyEPS0_(i4);
     break;
    } else {
     HEAP32[i10 >> 2] = i5;
     break;
    }
   }
  } while (0);
  __ZdaPv(i9);
 }
 if (!(__ZN7WebCoreL13getSymbolInfoEPv12ShShaderInfoRN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS2_15CrashOnOverflowEEE(i1, 35721, i6) | 0)) {
  i23 = 0;
  STACKTOP = i8;
  return i23 | 0;
 }
 i23 = __ZN7WebCoreL13getSymbolInfoEPv12ShShaderInfoRN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS2_15CrashOnOverflowEEE(i1, 35718, i6) | 0;
 STACKTOP = i8;
 return i23 | 0;
}
function __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 << 5) | 0;
 if (i2 >>> 0 > 134217727 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 << 5) | 0;
 HEAP32[i3 >> 2] = i7 >>> 5;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   i2 = i6 + 4 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i8;
   i8 = i6 + 8 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i9;
   HEAP32[i7 + 12 >> 2] = HEAP32[i6 + 12 >> 2];
   HEAP32[i7 + 16 >> 2] = HEAP32[i6 + 16 >> 2];
   HEAP8[i7 + 20 | 0] = HEAP8[i6 + 20 | 0] & 1;
   HEAP32[i7 + 24 >> 2] = HEAP32[i6 + 24 >> 2];
   HEAP32[i7 + 28 >> 2] = HEAP32[i6 + 28 >> 2];
   i9 = HEAP32[i8 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i8 = i9 | 0;
     i10 = (HEAP32[i8 >> 2] | 0) - 2 | 0;
     if ((i10 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i8 >> 2] = i10;
      break;
     }
    }
   } while (0);
   i9 = HEAP32[i2 >> 2] | 0;
   do {
    if ((i9 | 0) != 0) {
     i10 = i9 | 0;
     i8 = (HEAP32[i10 >> 2] | 0) - 2 | 0;
     if ((i8 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i9);
      break;
     } else {
      HEAP32[i10 >> 2] = i8;
      break;
     }
    }
   } while (0);
   i9 = i6 + 32 | 0;
   if ((i9 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i9;
    i7 = i7 + 32 | 0;
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
function __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 > i2 >>> 0) {
   i8 = 3;
  } else {
   if ((i7 + (i4 << 5) | 0) >>> 0 <= i2 >>> 0) {
    i8 = 3;
    break;
   }
   i9 = HEAP32[i1 + 4 >> 2] | 0;
   i10 = i9 + 1 + (i9 >>> 2) | 0;
   i9 = i10 >>> 0 > 16 >>> 0 ? i10 : 16;
   __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i9 >>> 0 > i5 >>> 0 ? i9 : i5);
   i9 = HEAP32[i6 >> 2] | 0;
   i11 = i9 + (i2 - i7 >> 5 << 5) | 0;
   i12 = i9;
  }
 } while (0);
 if ((i8 | 0) == 3) {
  i8 = HEAP32[i1 + 4 >> 2] | 0;
  i7 = i8 + 1 + (i8 >>> 2) | 0;
  i8 = i7 >>> 0 > 16 >>> 0 ? i7 : 16;
  __ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
  i11 = i2;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 i6 = HEAP32[i3 >> 2] | 0;
 HEAP32[i12 + (i6 << 5) >> 2] = HEAP32[i11 >> 2];
 i2 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 + (i6 << 5) + 4 >> 2] = i2;
 if ((i2 | 0) != 0) {
  i5 = i2 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 2;
 }
 i5 = HEAP32[i11 + 8 >> 2] | 0;
 HEAP32[i12 + (i6 << 5) + 8 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i2 = i5 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 HEAP32[i12 + (i6 << 5) + 12 >> 2] = HEAP32[i11 + 12 >> 2];
 HEAP32[i12 + (i6 << 5) + 16 >> 2] = HEAP32[i11 + 16 >> 2];
 HEAP8[i12 + (i6 << 5) + 20 | 0] = HEAP8[i11 + 20 | 0] & 1;
 HEAP32[i12 + (i6 << 5) + 24 >> 2] = HEAP32[i11 + 24 >> 2];
 HEAP32[i12 + (i6 << 5) + 28 >> 2] = HEAP32[i11 + 28 >> 2];
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i5 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 HEAP32[i7 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i9 = i8 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 2;
 }
 i9 = i6 | 0;
 i8 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i9 >> 2] = i8;
 if ((i8 | 0) != 0) {
  i2 = i8 | 0;
  HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + 2;
 }
 __ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_(i4, i5, i6);
 i6 = i4 | 0;
 i4 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 i6 = HEAP32[i9 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   i5 = (HEAP32[i9 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i9 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i6 = HEAP32[i7 >> 2] | 0;
 do {
  if ((i6 | 0) != 0) {
   i7 = i6 | 0;
   i5 = (HEAP32[i7 >> 2] | 0) - 2 | 0;
   if ((i5 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i6);
    break;
   } else {
    HEAP32[i7 >> 2] = i5;
    break;
   }
  }
 } while (0);
 if ((i4 | 0) == 0) {
  _WTFCrash();
 } else {
  HEAP32[i1 >> 2] = i4;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore17ANGLEWebKitBridge12setResourcesE18ShBuiltInResources(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 _memcpy(i2, i4, 72) | 0;
 i4 = i1 + 4 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  _ShDestruct(i5);
 }
 HEAP32[i4 >> 2] = 0;
 i4 = i1 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  _ShDestruct(i5);
 }
 HEAP32[i4 >> 2] = 0;
 HEAP8[i1 | 0] = 0;
 _memcpy(i1 + 20 | 0, i2 | 0, 72) | 0;
 STACKTOP = i3;
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
function __ZN7WebCore17ANGLEWebKitBridge16cleanupCompilersEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 HEAP8[i1 | 0] = 0;
 return;
}
function __ZN7WebCore17ANGLEWebKitBridgeD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 HEAP8[i1 | 0] = 0;
 return;
}
function __ZN7WebCore17ANGLEWebKitBridgeD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 4 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 i2 = i1 + 8 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  _ShDestruct(i3);
 }
 HEAP32[i2 >> 2] = 0;
 HEAP8[i1 | 0] = 0;
 return;
}
function __ZN7WebCore17ANGLEWebKitBridgeC2E14ShShaderOutput12ShShaderSpec(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = i3;
 _ShInitialize() | 0;
 return;
}
function __ZN7WebCore17ANGLEWebKitBridgeC1E14ShShaderOutput12ShShaderSpec(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP8[i1 | 0] = 0;
 HEAP32[i1 + 4 >> 2] = 0;
 HEAP32[i1 + 8 >> 2] = 0;
 HEAP32[i1 + 12 >> 2] = i2;
 HEAP32[i1 + 16 >> 2] = i3;
 _ShInitialize() | 0;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
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
function b2(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(2);
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
  var FUNCTION_TABLE_vi = [b0,b0,__ZN7WebCore17ANGLEWebKitBridgeD2Ev,b0];
  var FUNCTION_TABLE_ii = [b1,b1];
  var FUNCTION_TABLE_viii = [b2,b2,__ZN7WebCore17ANGLEWebKitBridgeC2E14ShShaderOutput12ShShaderSpec,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore17ANGLEWebKitBridgeC2E14ShShaderOutput12ShShaderSpec","_memset","__ZN3WTF6VectorIN7WebCore17ANGLEShaderSymbolELj0ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN3WTF13tryMakeStringINS_6StringES1_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCore17ANGLEWebKitBridge16cleanupCompilersEv","__ZN7WebCore17ANGLEWebKitBridge12setResourcesE18ShBuiltInResources","_memcpy","__ZN7WebCore17ANGLEWebKitBridge19compileShaderSourceEPKcNS_15ANGLEShaderTypeERN3WTF6StringES6_RNS4_6VectorINS_17ANGLEShaderSymbolELj0ENS4_15CrashOnOverflowEEEi","__ZNK3WTF12StringAppendINS_6StringES1_EcvS1_Ev","_strlen","__ZN3WTF13tryMakeStringINS_12StringAppendIPKcNS_6StringEEES3_EENS_10PassRefPtrINS_10StringImplEEET_T0_","__ZN7WebCoreL13getSymbolInfoEPv12ShShaderInfoRN3WTF6VectorINS_17ANGLEShaderSymbolELj0ENS2_15CrashOnOverflowEEE","__ZN7WebCore17ANGLEWebKitBridgeD2Ev"]

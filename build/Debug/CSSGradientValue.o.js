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
H_BASE = parentModule["_malloc"](416 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 416;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
/* memory initializer */ allocate([116,111,32,0,0,0,0,0,108,105,110,101,97,114,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,0,0,114,101,112,101,97,116,105,110,103,45,108,105,110,101,97,114,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,45,119,101,98,107,105,116,45,108,105,110,101,97,114,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,114,101,112,101,97,116,105,110,103,45,108,105,110,101,97,114,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,99,111,108,111,114,45,115,116,111,112,40,0,0,0,0,0,116,111,40,0,0,0,0,0,102,114,111,109,40,0,0,0,97,116,32,0,0,0,0,0,99,105,114,99,108,101,0,0,114,97,100,105,97,108,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,0,0,114,101,112,101,97,116,105,110,103,45,114,97,100,105,97,108,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,99,111,118,101,114,0,0,0,101,108,108,105,112,115,101,32,0,0,0,0,0,0,0,0,99,101,110,116,101,114,0,0,45,119,101,98,107,105,116,45,114,97,100,105,97,108,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,0,0,45,119,101,98,107,105,116,45,114,101,112,101,97,116,105,110,103,45,114,97,100,105,97,108,45,103,114,97,100,105,101,110,116,40,0,0,0,0,0,0,45,119,101,98,107,105,116,45,103,114,97,100,105,101,110,116,40,114,97,100,105,97,108,44,32,0,0,0,0,0,0,0,44,32,0,0,0,0,0,0,45,119,101,98,107,105,116,45,103,114,97,100,105,101,110,116,40,108,105,110,101,97,114,44,32,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiid(index,a1,a2,a3,a4,a5) {
  try {
    Module["dynCall_viiiid"](index,a1,a2,a3,a4,a5);
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
  var __ZTVN7WebCore13GradientImageE=env.__ZTVN7WebCore13GradientImageE|0;
  var __ZSt7nothrow=env.__ZSt7nothrow|0;
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
  var invoke_viiiid=env.invoke_viiiid;
  var invoke_ii=env.invoke_ii;
  var invoke_v=env.invoke_v;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var _sqrtf=env._sqrtf;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _atan2=env._atan2;
  var _fmod=env._fmod;
  var _fflush=env._fflush;
  var _tan=env._tan;
  var _round=env._round;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZNK7WebCore22CSSRadialGradientValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 376 | 0;
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
 i20 = i3 + 128 | 0;
 i21 = i3 + 152 | 0;
 i22 = i3 + 160 | 0;
 i23 = i3 + 168 | 0;
 i24 = i3 + 176 | 0;
 i25 = i3 + 184 | 0;
 i26 = i3 + 192 | 0;
 i27 = i3 + 200 | 0;
 i28 = i3 + 208 | 0;
 i29 = i3 + 216 | 0;
 i30 = i3 + 224 | 0;
 i31 = i3 + 232 | 0;
 i32 = i3 + 240 | 0;
 i33 = i3 + 248 | 0;
 i34 = i3 + 256 | 0;
 i35 = i3 + 264 | 0;
 i36 = i3 + 272 | 0;
 i37 = i3 + 280 | 0;
 i38 = i3 + 288 | 0;
 i39 = i3 + 296 | 0;
 i40 = i3 + 304 | 0;
 i41 = i3 + 312 | 0;
 i42 = i3 + 320 | 0;
 i43 = i3 + 328 | 0;
 i44 = i3 + 336 | 0;
 i45 = i3 + 344 | 0;
 i46 = i3 + 352 | 0;
 i47 = i3 + 360 | 0;
 i48 = i3 + 368 | 0;
 i49 = i20 | 0;
 HEAP32[i49 >> 2] = 0;
 i50 = i20 + 4 | 0;
 HEAP32[i50 >> 2] = 0;
 i51 = i20 + 8 | 0;
 HEAP32[i51 >> 2] = 0;
 i52 = i20 + 12 | 0;
 HEAP8[i52] = 1;
 HEAP32[i20 + 16 >> 2] = 0;
 i53 = i20 + 20 | 0;
 HEAP32[i53 >> 2] = 0;
 i54 = HEAP32[i2 + 120 >> 2] | 0;
 L1 : do {
  if ((i54 | 0) == 1) {
   __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 352 | 0, 25);
   __ZNK7WebCore8CSSValue7cssTextEv(i21, HEAP32[i2 + 48 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i21);
   i55 = HEAP32[i21 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i56 = i55 | 0;
     i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i56 >> 2] = i57;
      break;
     }
    }
   } while (0);
   HEAP8[i19] = 32;
   i55 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i58 = 12;
    } else {
     i57 = HEAP32[i49 >> 2] | 0;
     if (i57 >>> 0 >= (HEAP32[i55 + 4 >> 2] | 0) >>> 0) {
      i58 = 12;
      break;
     }
     if ((HEAP32[i50 >> 2] | 0) != 0) {
      i58 = 12;
      break;
     }
     i56 = (HEAP8[i52] & 1) == 0;
     HEAP32[i49 >> 2] = i57 + 1;
     if (i56) {
      HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i53 >> 2] | 0) + i57 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i58 | 0) == 12) {
    __ZN3WTF13StringBuilder6appendEPKhj(i20, i19, 1);
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i22, HEAP32[i2 + 52 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i22);
   i55 = HEAP32[i22 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 | 0;
     i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i57 >> 2] = i56;
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
   __ZNK7WebCore8CSSValue7cssTextEv(i23, HEAP32[i2 + 128 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i23);
   i55 = HEAP32[i23 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i56 = i55 | 0;
     i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i56 >> 2] = i57;
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
   __ZNK7WebCore8CSSValue7cssTextEv(i24, HEAP32[i2 + 56 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i24);
   i55 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 | 0;
     i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i57 >> 2] = i56;
      break;
     }
    }
   } while (0);
   HEAP8[i18] = 32;
   i55 = HEAP32[i51 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i58 = 31;
    } else {
     i56 = HEAP32[i49 >> 2] | 0;
     if (i56 >>> 0 >= (HEAP32[i55 + 4 >> 2] | 0) >>> 0) {
      i58 = 31;
      break;
     }
     if ((HEAP32[i50 >> 2] | 0) != 0) {
      i58 = 31;
      break;
     }
     i57 = (HEAP8[i52] & 1) == 0;
     HEAP32[i49 >> 2] = i56 + 1;
     if (i57) {
      HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i56 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i53 >> 2] | 0) + i56 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i58 | 0) == 31) {
    __ZN3WTF13StringBuilder6appendEPKhj(i20, i18, 1);
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i25, HEAP32[i2 + 60 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i25);
   i55 = HEAP32[i25 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i56 = i55 | 0;
     i57 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i56 >> 2] = i57;
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
   __ZNK7WebCore8CSSValue7cssTextEv(i26, HEAP32[i2 + 132 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i26);
   i55 = HEAP32[i26 >> 2] | 0;
   do {
    if ((i55 | 0) != 0) {
     i57 = i55 | 0;
     i56 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
     if ((i56 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i55);
      break;
     } else {
      HEAP32[i57 >> 2] = i56;
      break;
     }
    }
   } while (0);
   i55 = i2 + 72 | 0;
   if ((HEAP32[i55 >> 2] | 0) == 0) {
    break;
   }
   i56 = i2 + 64 | 0;
   i57 = i27 | 0;
   i59 = i20 + 20 | 0;
   i60 = i28 | 0;
   i61 = i29 | 0;
   i62 = 0;
   while (1) {
    i63 = HEAP32[i56 >> 2] | 0;
    __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
    i64 = i63 + (i62 * 20 & -1) | 0;
    L62 : do {
     if (+__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i64 >> 2] | 0, 1) == +0) {
      __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 168 | 0, 5);
      __ZNK7WebCore8CSSValue7cssTextEv(i27, HEAP32[i63 + (i62 * 20 & -1) + 4 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i27);
      i65 = HEAP32[i57 >> 2] | 0;
      do {
       if ((i65 | 0) != 0) {
        i66 = i65 | 0;
        i67 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
        if ((i67 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i65);
         break;
        } else {
         HEAP32[i66 >> 2] = i67;
         break;
        }
       }
      } while (0);
      HEAP8[i17] = 41;
      i65 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i65 | 0) != 0) {
        i67 = HEAP32[i49 >> 2] | 0;
        if (i67 >>> 0 >= (HEAP32[i65 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i50 >> 2] | 0) != 0) {
         break;
        }
        i66 = (HEAP8[i52] & 1) == 0;
        HEAP32[i49 >> 2] = i67 + 1;
        if (i66) {
         HEAP16[(HEAP32[i59 >> 2] | 0) + (i67 << 1) >> 1] = 41;
         break L62;
        } else {
         HEAP8[(HEAP32[i53 >> 2] | 0) + i67 | 0] = 41;
         break L62;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i20, i17, 1);
     } else {
      if (+__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i64 >> 2] | 0, 1) == +1) {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 160 | 0, 3);
       __ZNK7WebCore8CSSValue7cssTextEv(i28, HEAP32[i63 + (i62 * 20 & -1) + 4 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i28);
       i65 = HEAP32[i60 >> 2] | 0;
       do {
        if ((i65 | 0) != 0) {
         i67 = i65 | 0;
         i66 = (HEAP32[i67 >> 2] | 0) - 2 | 0;
         if ((i66 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i65);
          break;
         } else {
          HEAP32[i67 >> 2] = i66;
          break;
         }
        }
       } while (0);
       HEAP8[i16] = 41;
       i65 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i65 | 0) != 0) {
         i66 = HEAP32[i49 >> 2] | 0;
         if (i66 >>> 0 >= (HEAP32[i65 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          break;
         }
         i67 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i66 + 1;
         if (i67) {
          HEAP16[(HEAP32[i59 >> 2] | 0) + (i66 << 1) >> 1] = 41;
          break L62;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i66 | 0] = 41;
          break L62;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i16, 1);
       break;
      } else {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 144 | 0, 11);
       __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i20, +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i64 >> 2] | 0, 1), 6, 1);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
       __ZNK7WebCore8CSSValue7cssTextEv(i29, HEAP32[i63 + (i62 * 20 & -1) + 4 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i29);
       i65 = HEAP32[i61 >> 2] | 0;
       do {
        if ((i65 | 0) != 0) {
         i66 = i65 | 0;
         i67 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
         if ((i67 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i65);
          break;
         } else {
          HEAP32[i66 >> 2] = i67;
          break;
         }
        }
       } while (0);
       HEAP8[i15] = 41;
       i65 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i65 | 0) != 0) {
         i67 = HEAP32[i49 >> 2] | 0;
         if (i67 >>> 0 >= (HEAP32[i65 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          break;
         }
         i66 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i67 + 1;
         if (i66) {
          HEAP16[(HEAP32[i59 >> 2] | 0) + (i67 << 1) >> 1] = 41;
          break L62;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i67 | 0] = 41;
          break L62;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i15, 1);
       break;
      }
     }
    } while (0);
    i62 = i62 + 1 | 0;
    if (i62 >>> 0 >= (HEAP32[i55 >> 2] | 0) >>> 0) {
     break;
    }
   }
  } else {
   i55 = (HEAP8[i2 + 124 | 0] & 1) != 0;
   if ((i54 | 0) == 3) {
    if (i55) {
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 312 | 0, 34);
    } else {
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 280 | 0, 24);
    }
    i62 = HEAP32[i2 + 48 >> 2] | 0;
    i59 = i2 + 52 | 0;
    i61 = HEAP32[i59 >> 2] | 0;
    i60 = (i61 | 0) == 0;
    do {
     if ((i62 | 0) == 0) {
      if (i60) {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 272 | 0, 6);
       break;
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i33, i61 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i33);
      i57 = HEAP32[i33 >> 2] | 0;
      if ((i57 | 0) == 0) {
       break;
      }
      i56 = i57 | 0;
      i63 = (HEAP32[i56 >> 2] | 0) - 2 | 0;
      if ((i63 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i57);
       break;
      } else {
       HEAP32[i56 >> 2] = i63;
       break;
      }
     } else {
      i63 = i62 | 0;
      if (i60) {
       __ZNK7WebCore8CSSValue7cssTextEv(i32, i63);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i32);
       i56 = HEAP32[i32 >> 2] | 0;
       if ((i56 | 0) == 0) {
        break;
       }
       i57 = i56 | 0;
       i64 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i64 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i56);
        break;
       } else {
        HEAP32[i57 >> 2] = i64;
        break;
       }
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i30, i63);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i30);
      i63 = HEAP32[i30 >> 2] | 0;
      do {
       if ((i63 | 0) != 0) {
        i64 = i63 | 0;
        i57 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
        if ((i57 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i63);
         break;
        } else {
         HEAP32[i64 >> 2] = i57;
         break;
        }
       }
      } while (0);
      HEAP8[i14] = 32;
      i63 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i63 | 0) == 0) {
        i58 = 94;
       } else {
        i57 = HEAP32[i49 >> 2] | 0;
        if (i57 >>> 0 >= (HEAP32[i63 + 4 >> 2] | 0) >>> 0) {
         i58 = 94;
         break;
        }
        if ((HEAP32[i50 >> 2] | 0) != 0) {
         i58 = 94;
         break;
        }
        i64 = (HEAP8[i52] & 1) == 0;
        HEAP32[i49 >> 2] = i57 + 1;
        if (i64) {
         HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
         break;
        } else {
         HEAP8[(HEAP32[i53 >> 2] | 0) + i57 | 0] = 32;
         break;
        }
       }
      } while (0);
      if ((i58 | 0) == 94) {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i14, 1);
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i31, HEAP32[i59 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i31);
      i63 = HEAP32[i31 >> 2] | 0;
      if ((i63 | 0) == 0) {
       break;
      }
      i57 = i63 | 0;
      i64 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       break;
      } else {
       HEAP32[i57 >> 2] = i64;
       break;
      }
     }
    } while (0);
    i59 = i2 + 136 | 0;
    do {
     if ((HEAP32[i59 >> 2] | 0) == 0) {
      if ((HEAP32[i2 + 140 >> 2] | 0) != 0) {
       i58 = 111;
       break;
      }
      i60 = i2 + 144 | 0;
      if ((HEAP32[i60 >> 2] | 0) == 0) {
       break;
      }
      i62 = i2 + 148 | 0;
      if ((HEAP32[i62 >> 2] | 0) == 0) {
       break;
      }
      __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
      __ZNK7WebCore8CSSValue7cssTextEv(i36, HEAP32[i60 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i36);
      i60 = HEAP32[i36 >> 2] | 0;
      do {
       if ((i60 | 0) != 0) {
        i61 = i60 | 0;
        i64 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
        if ((i64 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i60);
         break;
        } else {
         HEAP32[i61 >> 2] = i64;
         break;
        }
       }
      } while (0);
      HEAP8[i10] = 32;
      i60 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i60 | 0) == 0) {
        i58 = 142;
       } else {
        i64 = HEAP32[i49 >> 2] | 0;
        if (i64 >>> 0 >= (HEAP32[i60 + 4 >> 2] | 0) >>> 0) {
         i58 = 142;
         break;
        }
        if ((HEAP32[i50 >> 2] | 0) != 0) {
         i58 = 142;
         break;
        }
        i61 = (HEAP8[i52] & 1) == 0;
        HEAP32[i49 >> 2] = i64 + 1;
        if (i61) {
         HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i64 << 1) >> 1] = 32;
         break;
        } else {
         HEAP8[(HEAP32[i53 >> 2] | 0) + i64 | 0] = 32;
         break;
        }
       }
      } while (0);
      if ((i58 | 0) == 142) {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i10, 1);
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i37, HEAP32[i62 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i37);
      i60 = HEAP32[i37 >> 2] | 0;
      if ((i60 | 0) == 0) {
       break;
      }
      i64 = i60 | 0;
      i61 = (HEAP32[i64 >> 2] | 0) - 2 | 0;
      if ((i61 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i60);
       break;
      } else {
       HEAP32[i64 >> 2] = i61;
       break;
      }
     } else {
      i58 = 111;
     }
    } while (0);
    do {
     if ((i58 | 0) == 111) {
      __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
      i61 = HEAP32[i59 >> 2] | 0;
      L183 : do {
       if ((i61 | 0) == 0) {
        __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 256 | 0, 8);
       } else {
        __ZNK7WebCore8CSSValue7cssTextEv(i34, i61 | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i34);
        i64 = HEAP32[i34 >> 2] | 0;
        do {
         if ((i64 | 0) != 0) {
          i60 = i64 | 0;
          i57 = (HEAP32[i60 >> 2] | 0) - 2 | 0;
          if ((i57 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i64);
           break;
          } else {
           HEAP32[i60 >> 2] = i57;
           break;
          }
         }
        } while (0);
        HEAP8[i11] = 32;
        i64 = HEAP32[i51 >> 2] | 0;
        do {
         if ((i64 | 0) != 0) {
          i57 = HEAP32[i49 >> 2] | 0;
          if (i57 >>> 0 >= (HEAP32[i64 + 4 >> 2] | 0) >>> 0) {
           break;
          }
          if ((HEAP32[i50 >> 2] | 0) != 0) {
           break;
          }
          i60 = (HEAP8[i52] & 1) == 0;
          HEAP32[i49 >> 2] = i57 + 1;
          if (i60) {
           HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
           break L183;
          } else {
           HEAP8[(HEAP32[i53 >> 2] | 0) + i57 | 0] = 32;
           break L183;
          }
         }
        } while (0);
        __ZN3WTF13StringBuilder6appendEPKhj(i20, i11, 1);
       }
      } while (0);
      i61 = HEAP32[i2 + 140 >> 2] | 0;
      if ((i61 | 0) == 0) {
       __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 248 | 0, 5);
       break;
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i35, i61 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i35);
      i61 = HEAP32[i35 >> 2] | 0;
      if ((i61 | 0) == 0) {
       break;
      }
      i62 = i61 | 0;
      i64 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i61);
       break;
      } else {
       HEAP32[i62 >> 2] = i64;
       break;
      }
     }
    } while (0);
    i59 = i2 + 72 | 0;
    if ((HEAP32[i59 >> 2] | 0) == 0) {
     break;
    }
    i64 = i2 + 64 | 0;
    i62 = i38 | 0;
    i61 = i39 | 0;
    i57 = i20 + 20 | 0;
    i60 = 0;
    while (1) {
     i63 = HEAP32[i64 >> 2] | 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
     __ZNK7WebCore8CSSValue7cssTextEv(i38, HEAP32[i63 + (i60 * 20 & -1) + 4 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i38);
     i56 = HEAP32[i62 >> 2] | 0;
     do {
      if ((i56 | 0) != 0) {
       i65 = i56 | 0;
       i67 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
       if ((i67 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i56);
        break;
       } else {
        HEAP32[i65 >> 2] = i67;
        break;
       }
      }
     } while (0);
     i56 = i63 + (i60 * 20 & -1) | 0;
     do {
      if ((HEAP32[i56 >> 2] | 0) != 0) {
       HEAP8[i9] = 32;
       i67 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i67 | 0) == 0) {
         i58 = 160;
        } else {
         i65 = HEAP32[i49 >> 2] | 0;
         if (i65 >>> 0 >= (HEAP32[i67 + 4 >> 2] | 0) >>> 0) {
          i58 = 160;
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          i58 = 160;
          break;
         }
         i66 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i65 + 1;
         if (i66) {
          HEAP16[(HEAP32[i57 >> 2] | 0) + (i65 << 1) >> 1] = 32;
          break;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i65 | 0] = 32;
          break;
         }
        }
       } while (0);
       if ((i58 | 0) == 160) {
        i58 = 0;
        __ZN3WTF13StringBuilder6appendEPKhj(i20, i9, 1);
       }
       __ZNK7WebCore8CSSValue7cssTextEv(i39, HEAP32[i56 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i39);
       i67 = HEAP32[i61 >> 2] | 0;
       if ((i67 | 0) == 0) {
        break;
       }
       i65 = i67 | 0;
       i66 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
       if ((i66 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i67);
        break;
       } else {
        HEAP32[i65 >> 2] = i66;
        break;
       }
      }
     } while (0);
     i60 = i60 + 1 | 0;
     if (i60 >>> 0 >= (HEAP32[i59 >> 2] | 0) >>> 0) {
      break L1;
     }
    }
   }
   if (i55) {
    __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 216 | 0, 26);
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 192 | 0, 16);
   }
   i59 = HEAP32[i2 + 136 >> 2] | 0;
   do {
    if ((i59 | 0) == 0) {
     i68 = 0;
    } else {
     if ((HEAP32[i59 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i59 + 8 >> 2] | 0) == 550) {
       i68 = 0;
       break;
      }
     }
     if ((HEAP32[i2 + 140 >> 2] | 0) == 0) {
      if ((HEAP32[i2 + 144 >> 2] | 0) != 0) {
       i68 = 0;
       break;
      }
     }
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 184 | 0, 6);
     i68 = 1;
    }
   } while (0);
   i59 = i2 + 140 | 0;
   i55 = HEAP32[i59 >> 2] | 0;
   do {
    if ((i55 | 0) == 0) {
     i58 = 190;
    } else {
     if ((HEAP32[i55 + 4 >> 2] & 508 | 0) == 472) {
      if ((HEAP32[i55 + 8 >> 2] | 0) == 554) {
       i58 = 190;
       break;
      }
     }
     L254 : do {
      if (i68) {
       HEAP8[i6] = 32;
       i60 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i60 | 0) != 0) {
         i61 = HEAP32[i49 >> 2] | 0;
         if (i61 >>> 0 >= (HEAP32[i60 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          break;
         }
         i57 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i61 + 1;
         if (i57) {
          HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i61 << 1) >> 1] = 32;
          break L254;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i61 | 0] = 32;
          break L254;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i6, 1);
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i40, HEAP32[i59 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i40);
     i60 = HEAP32[i40 >> 2] | 0;
     if ((i60 | 0) == 0) {
      i69 = 1;
      break;
     }
     i61 = i60 | 0;
     i57 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i60);
      i69 = 1;
      break;
     } else {
      HEAP32[i61 >> 2] = i57;
      i69 = 1;
      break;
     }
    }
   } while (0);
   do {
    if ((i58 | 0) == 190) {
     i59 = i2 + 144 | 0;
     if ((HEAP32[i59 >> 2] | 0) == 0) {
      i69 = i68;
      break;
     }
     L272 : do {
      if (i68) {
       HEAP8[i5] = 32;
       i55 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i55 | 0) != 0) {
         i57 = HEAP32[i49 >> 2] | 0;
         if (i57 >>> 0 >= (HEAP32[i55 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          break;
         }
         i61 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i57 + 1;
         if (i61) {
          HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i57 << 1) >> 1] = 32;
          break L272;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i57 | 0] = 32;
          break L272;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i5, 1);
      }
     } while (0);
     __ZNK7WebCore8CSSValue7cssTextEv(i41, HEAP32[i59 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i41);
     i55 = HEAP32[i41 >> 2] | 0;
     do {
      if ((i55 | 0) != 0) {
       i57 = i55 | 0;
       i61 = (HEAP32[i57 >> 2] | 0) - 2 | 0;
       if ((i61 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i55);
        break;
       } else {
        HEAP32[i57 >> 2] = i61;
        break;
       }
      }
     } while (0);
     i55 = i2 + 148 | 0;
     if ((HEAP32[i55 >> 2] | 0) == 0) {
      i69 = 1;
      break;
     }
     HEAP8[i4] = 32;
     i59 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i59 | 0) == 0) {
       i58 = 210;
      } else {
       i61 = HEAP32[i49 >> 2] | 0;
       if (i61 >>> 0 >= (HEAP32[i59 + 4 >> 2] | 0) >>> 0) {
        i58 = 210;
        break;
       }
       if ((HEAP32[i50 >> 2] | 0) != 0) {
        i58 = 210;
        break;
       }
       i57 = (HEAP8[i52] & 1) == 0;
       HEAP32[i49 >> 2] = i61 + 1;
       if (i57) {
        HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i61 << 1) >> 1] = 32;
        break;
       } else {
        HEAP8[(HEAP32[i53 >> 2] | 0) + i61 | 0] = 32;
        break;
       }
      }
     } while (0);
     if ((i58 | 0) == 210) {
      __ZN3WTF13StringBuilder6appendEPKhj(i20, i4, 1);
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i42, HEAP32[i55 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i42);
     i59 = HEAP32[i42 >> 2] | 0;
     if ((i59 | 0) == 0) {
      i69 = 1;
      break;
     }
     i61 = i59 | 0;
     i57 = (HEAP32[i61 >> 2] | 0) - 2 | 0;
     if ((i57 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i59);
      i69 = 1;
      break;
     } else {
      HEAP32[i61 >> 2] = i57;
      i69 = 1;
      break;
     }
    }
   } while (0);
   i57 = i2 + 48 | 0;
   do {
    if ((HEAP32[i57 >> 2] | 0) == 0) {
     if ((HEAP32[i2 + 52 >> 2] | 0) != 0) {
      i58 = 217;
      break;
     }
     if (i69) {
      i58 = 251;
     }
    } else {
     i58 = 217;
    }
   } while (0);
   do {
    if ((i58 | 0) == 217) {
     L310 : do {
      if (i69) {
       HEAP8[i7] = 32;
       i61 = HEAP32[i51 >> 2] | 0;
       do {
        if ((i61 | 0) != 0) {
         i59 = HEAP32[i49 >> 2] | 0;
         if (i59 >>> 0 >= (HEAP32[i61 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i50 >> 2] | 0) != 0) {
          break;
         }
         i60 = (HEAP8[i52] & 1) == 0;
         HEAP32[i49 >> 2] = i59 + 1;
         if (i60) {
          HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i59 << 1) >> 1] = 32;
          break L310;
         } else {
          HEAP8[(HEAP32[i53 >> 2] | 0) + i59 | 0] = 32;
          break L310;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i7, 1);
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 176 | 0, 3);
     i55 = HEAP32[i57 >> 2] | 0;
     i61 = i2 + 52 | 0;
     i59 = HEAP32[i61 >> 2] | 0;
     if ((i55 | 0) == 0) {
      __ZNK7WebCore8CSSValue7cssTextEv(i46, i59 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i46);
      i60 = HEAP32[i46 >> 2] | 0;
      if ((i60 | 0) == 0) {
       i58 = 251;
       break;
      }
      i62 = i60 | 0;
      i64 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
      if ((i64 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i60);
       i58 = 251;
       break;
      } else {
       HEAP32[i62 >> 2] = i64;
       i58 = 251;
       break;
      }
     }
     i64 = i55 | 0;
     if ((i59 | 0) == 0) {
      __ZNK7WebCore8CSSValue7cssTextEv(i45, i64);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i45);
      i59 = HEAP32[i45 >> 2] | 0;
      if ((i59 | 0) == 0) {
       i58 = 251;
       break;
      }
      i55 = i59 | 0;
      i62 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
      if ((i62 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i59);
       i58 = 251;
       break;
      } else {
       HEAP32[i55 >> 2] = i62;
       i58 = 251;
       break;
      }
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i43, i64);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i43);
     i64 = HEAP32[i43 >> 2] | 0;
     do {
      if ((i64 | 0) != 0) {
       i62 = i64 | 0;
       i55 = (HEAP32[i62 >> 2] | 0) - 2 | 0;
       if ((i55 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i64);
        break;
       } else {
        HEAP32[i62 >> 2] = i55;
        break;
       }
      }
     } while (0);
     HEAP8[i8] = 32;
     i64 = HEAP32[i51 >> 2] | 0;
     do {
      if ((i64 | 0) == 0) {
       i58 = 237;
      } else {
       i55 = HEAP32[i49 >> 2] | 0;
       if (i55 >>> 0 >= (HEAP32[i64 + 4 >> 2] | 0) >>> 0) {
        i58 = 237;
        break;
       }
       if ((HEAP32[i50 >> 2] | 0) != 0) {
        i58 = 237;
        break;
       }
       i62 = (HEAP8[i52] & 1) == 0;
       HEAP32[i49 >> 2] = i55 + 1;
       if (i62) {
        HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i55 << 1) >> 1] = 32;
        break;
       } else {
        HEAP8[(HEAP32[i53 >> 2] | 0) + i55 | 0] = 32;
        break;
       }
      }
     } while (0);
     if ((i58 | 0) == 237) {
      __ZN3WTF13StringBuilder6appendEPKhj(i20, i8, 1);
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i44, HEAP32[i61 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i44);
     i64 = HEAP32[i44 >> 2] | 0;
     if ((i64 | 0) == 0) {
      i58 = 251;
      break;
     }
     i55 = i64 | 0;
     i62 = (HEAP32[i55 >> 2] | 0) - 2 | 0;
     if ((i62 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i64);
      i58 = 251;
      break;
     } else {
      HEAP32[i55 >> 2] = i62;
      i58 = 251;
      break;
     }
    }
   } while (0);
   if ((i58 | 0) == 251) {
    __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
   }
   i57 = i2 + 72 | 0;
   if ((HEAP32[i57 >> 2] | 0) == 0) {
    break;
   }
   i62 = i2 + 64 | 0;
   i55 = i47 | 0;
   i64 = i48 | 0;
   i59 = i20 + 20 | 0;
   i60 = 0;
   while (1) {
    i56 = HEAP32[i62 >> 2] | 0;
    if ((i60 | 0) != 0) {
     __ZN3WTF13StringBuilder6appendEPKhj(i20, H_BASE + 384 | 0, 2);
    }
    __ZNK7WebCore8CSSValue7cssTextEv(i47, HEAP32[i56 + (i60 * 20 & -1) + 4 >> 2] | 0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i47);
    i63 = HEAP32[i55 >> 2] | 0;
    do {
     if ((i63 | 0) != 0) {
      i66 = i63 | 0;
      i65 = (HEAP32[i66 >> 2] | 0) - 2 | 0;
      if ((i65 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i63);
       break;
      } else {
       HEAP32[i66 >> 2] = i65;
       break;
      }
     }
    } while (0);
    i63 = i56 + (i60 * 20 & -1) | 0;
    do {
     if ((HEAP32[i63 >> 2] | 0) != 0) {
      HEAP8[i12] = 32;
      i61 = HEAP32[i51 >> 2] | 0;
      do {
       if ((i61 | 0) == 0) {
        i58 = 267;
       } else {
        i65 = HEAP32[i49 >> 2] | 0;
        if (i65 >>> 0 >= (HEAP32[i61 + 4 >> 2] | 0) >>> 0) {
         i58 = 267;
         break;
        }
        if ((HEAP32[i50 >> 2] | 0) != 0) {
         i58 = 267;
         break;
        }
        i66 = (HEAP8[i52] & 1) == 0;
        HEAP32[i49 >> 2] = i65 + 1;
        if (i66) {
         HEAP16[(HEAP32[i59 >> 2] | 0) + (i65 << 1) >> 1] = 32;
         break;
        } else {
         HEAP8[(HEAP32[i53 >> 2] | 0) + i65 | 0] = 32;
         break;
        }
       }
      } while (0);
      if ((i58 | 0) == 267) {
       i58 = 0;
       __ZN3WTF13StringBuilder6appendEPKhj(i20, i12, 1);
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i48, HEAP32[i63 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i20, i48);
      i61 = HEAP32[i64 >> 2] | 0;
      if ((i61 | 0) == 0) {
       break;
      }
      i65 = i61 | 0;
      i66 = (HEAP32[i65 >> 2] | 0) - 2 | 0;
      if ((i66 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i61);
       break;
      } else {
       HEAP32[i65 >> 2] = i66;
       break;
      }
     }
    } while (0);
    i60 = i60 + 1 | 0;
    if (i60 >>> 0 >= (HEAP32[i57 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP8[i13] = 41;
 i48 = HEAP32[i51 >> 2] | 0;
 do {
  if ((i48 | 0) == 0) {
   i58 = 279;
  } else {
   i12 = HEAP32[i49 >> 2] | 0;
   if (i12 >>> 0 >= (HEAP32[i48 + 4 >> 2] | 0) >>> 0) {
    i58 = 279;
    break;
   }
   if ((HEAP32[i50 >> 2] | 0) != 0) {
    i58 = 279;
    break;
   }
   i47 = (HEAP8[i52] & 1) == 0;
   HEAP32[i49 >> 2] = i12 + 1;
   if (i47) {
    HEAP16[(HEAP32[i20 + 20 >> 2] | 0) + (i12 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i53 >> 2] | 0) + i12 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i58 | 0) == 279) {
  __ZN3WTF13StringBuilder6appendEPKhj(i20, i13, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i20);
 i13 = HEAP32[i50 >> 2] | 0;
 if ((i13 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i20);
  i20 = HEAP32[i50 >> 2] | 0;
  HEAP32[i1 >> 2] = i20;
  if ((i20 | 0) != 0) {
   i70 = i20;
   i58 = 283;
  }
 } else {
  HEAP32[i1 >> 2] = i13;
  i70 = i13;
  i58 = 283;
 }
 if ((i58 | 0) == 283) {
  i58 = i70 | 0;
  HEAP32[i58 >> 2] = (HEAP32[i58 >> 2] | 0) + 2;
 }
 i58 = HEAP32[i51 >> 2] | 0;
 do {
  if ((i58 | 0) != 0) {
   i51 = i58 | 0;
   i70 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
   if ((i70 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i58);
    break;
   } else {
    HEAP32[i51 >> 2] = i70;
    break;
   }
  }
 } while (0);
 i58 = HEAP32[i50 >> 2] | 0;
 if ((i58 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i50 = i58 | 0;
 i70 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
 if ((i70 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i58);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i50 >> 2] = i70;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore16CSSGradientValue8addStopsEPNS_8GradientEPNS_13RenderElementERKNS_11RenderStyleEf(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, d22 = +0, d23 = +0, d24 = +0, i25 = 0, i26 = 0, i27 = 0, d28 = +0, d29 = +0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, d34 = +0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, d45 = +0, d46 = +0, i47 = 0, i48 = 0, d49 = +0, i50 = 0, i51 = 0, d52 = +0, i53 = 0, i54 = 0, d55 = +0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, d60 = +0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, d69 = +0, i70 = 0, i71 = 0, i72 = 0, i73 = 0, i74 = 0, d75 = +0, i76 = 0, i77 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 88 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i6 + 24 | 0;
 i10 = i6 + 32 | 0;
 i11 = i6 + 40 | 0;
 i12 = i6 + 48 | 0;
 i13 = i6 + 64 | 0;
 i14 = i6 + 80 | 0;
 i15 = HEAP32[i3 + 36 >> 2] | 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) >>> 0 < 2 >>> 0) {
  __ZN7WebCore16CSSGradientValue17sortStopsIfNeededEv(i1);
  i3 = i1 + 72 | 0;
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i16 = i1 + 64 | 0;
   i17 = 0;
   while (1) {
    i18 = HEAP32[i16 >> 2] | 0;
    i19 = i18 + (i17 * 20 & -1) | 0;
    i20 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i19 >> 2] | 0) | 0) << 16 >> 16 == 2;
    i21 = HEAP32[i19 >> 2] | 0;
    do {
     if (i20) {
      d22 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i21, 2);
      do {
       if (d22 < 3.4028234663852886e+38) {
        if (d22 <= -3.4028234663852886e+38) {
         d23 = -3.4028234663852886e+38;
         break;
        }
        d23 = d22;
       } else {
        d23 = 3.4028234663852886e+38;
       }
      } while (0);
      d24 = d23 / +100;
     } else {
      d22 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i21, 1);
      if (d22 >= 3.4028234663852886e+38) {
       d24 = 3.4028234663852886e+38;
       break;
      }
      if (d22 <= -3.4028234663852886e+38) {
       d24 = -3.4028234663852886e+38;
       break;
      }
      d24 = d22;
     }
    } while (0);
    __ZN7WebCore8Gradient12addColorStopEfRKNS_5ColorE(i2, d24, i18 + (i17 * 20 & -1) + 8 | 0);
    i17 = i17 + 1 | 0;
    if (i17 >>> 0 >= (HEAP32[i3 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
  HEAP8[i2 + 88 | 0] = 1;
  STACKTOP = i6;
  return;
 }
 i3 = i1 + 72 | 0;
 i17 = HEAP32[i3 >> 2] | 0;
 i16 = i8 | 0;
 HEAP32[i16 >> 2] = 0;
 i21 = i8 + 4 | 0;
 HEAP32[i21 >> 2] = 0;
 i20 = i8 + 8 | 0;
 HEAP32[i20 >> 2] = i17;
 i19 = (i17 | 0) == 0;
 do {
  if (!i19) {
   if (i17 >>> 0 > 268435455 >>> 0) {
    _WTFCrash();
   }
   i25 = __ZN3WTF18fastMallocGoodSizeEj(i17 << 4) | 0;
   HEAP32[i21 >> 2] = i25 >>> 4;
   i26 = __ZN3WTF10fastMallocEj(i25) | 0;
   i25 = i26;
   HEAP32[i16 >> 2] = i25;
   if ((i26 | 0) == 0) {
    break;
   }
   i26 = i25 + (i17 << 4) | 0;
   i27 = i25;
   while (1) {
    HEAP32[i27 >> 2] = 0;
    HEAP8[i27 + 4 | 0] = 0;
    HEAPF32[i27 + 8 >> 2] = +0;
    HEAP8[i27 + 12 | 0] = 0;
    i27 = i27 + 16 | 0;
    if ((i27 | 0) == (i26 | 0)) {
     break;
    }
   }
  }
 } while (0);
 i26 = i2 + 8 | 0;
 d24 = +HEAPF32[i26 >> 2];
 d23 = +HEAPF32[i26 + 4 >> 2];
 i27 = i1 + 4 | 0;
 i18 = HEAP32[i27 >> 2] & 516096;
 if ((i18 | 0) == 49152) {
  i25 = i2 + 16 | 0;
  d22 = +HEAPF32[i25 >> 2];
  d28 = d22;
  d29 = +HEAPF32[i25 + 4 >> 2];
 } else if ((i18 | 0) == 57344) {
  d28 = d24 + +HEAPF32[i2 + 28 >> 2];
  d29 = d23 + +0;
 } else {
  d28 = +0;
  d29 = +0;
 }
 L33 : do {
  if (i19) {
   i30 = 87;
  } else {
   i18 = i1 + 64 | 0;
   i25 = HEAP32[i20 >> 2] | 0;
   i31 = HEAP32[i16 >> 2] | 0;
   i32 = i17 >>> 0 > 1 >>> 0;
   i33 = i17 - 1 | 0;
   d22 = d24 - d28;
   d34 = d23 - d29;
   i35 = i9 | 0;
   i36 = i9 + 4 | 0;
   i37 = i15 + 24 | 0;
   i38 = i7 | 0;
   i39 = i10 | 0;
   i40 = 0;
   L35 : while (1) {
    if ((HEAP32[i3 >> 2] | 0) >>> 0 <= i40 >>> 0) {
     i30 = 26;
     break;
    }
    i41 = HEAP32[i18 >> 2] | 0;
    if (i25 >>> 0 <= i40 >>> 0) {
     i30 = 28;
     break;
    }
    i42 = i31 + (i40 << 4) | 0;
    i43 = i41 + (i40 * 20 & -1) + 8 | 0;
    HEAP32[i42 >> 2] = HEAP32[i43 >> 2];
    HEAP8[i42 + 4 | 0] = HEAP8[i43 + 4 | 0] | 0;
    i43 = i41 + (i40 * 20 & -1) | 0;
    i41 = HEAP32[i43 >> 2] | 0;
    do {
     if ((i41 | 0) == 0) {
      if ((i40 | 0) == 0) {
       if ((i25 | 0) == 0) {
        i30 = 56;
        break L35;
       }
       HEAPF32[i31 + 8 >> 2] = +0;
       HEAP8[i31 + 12 | 0] = 1;
       break;
      }
      if (!(i32 & (i40 | 0) == (i33 | 0))) {
       break;
      }
      if (i25 >>> 0 <= i33 >>> 0) {
       i30 = 60;
       break L35;
      }
      HEAPF32[i31 + (i33 << 4) + 8 >> 2] = +1;
      HEAP8[i31 + (i33 << 4) + 12 | 0] = 1;
     } else {
      i42 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i41) | 0) << 16 >> 16 == 2;
      i44 = HEAP32[i43 >> 2] | 0;
      L41 : do {
       if (i42) {
        d45 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i44, 2);
        do {
         if (d45 < 3.4028234663852886e+38) {
          if (d45 <= -3.4028234663852886e+38) {
           d46 = -3.4028234663852886e+38;
           break;
          }
          d46 = d45;
         } else {
          d46 = 3.4028234663852886e+38;
         }
        } while (0);
        HEAPF32[i31 + (i40 << 4) + 8 >> 2] = d46 / +100;
       } else {
        i47 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i44) | 0;
        do {
         if (!((i47 - 3 & 65535) >>> 0 < 8 >>> 0 | i47 << 16 >> 16 == 108 | i47 << 16 >> 16 == 109)) {
          if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i43 >> 2] | 0) | 0) << 16 >> 16 == 115) {
           break;
          }
          HEAPF32[i31 + (i40 << 4) + 8 >> 2] = +0;
          break L41;
         }
        } while (0);
        HEAPF32[i35 >> 2] = d22;
        HEAPF32[i36 >> 2] = d34;
        d45 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i9);
        i47 = __ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(HEAP32[i43 >> 2] | 0) | 0;
        i48 = HEAP32[i43 >> 2] | 0;
        do {
         if ((i47 - 3 & 65535) >>> 0 < 8 >>> 0 | i47 << 16 >> 16 == 108 | i47 << 16 >> 16 == 109) {
          d49 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i48, i15, i4, +HEAPF32[(HEAP32[i37 >> 2] | 0) + 80 >> 2], 0);
         } else {
          if ((HEAP32[i48 + 4 >> 2] & 508 | 0) == 452) {
           i50 = HEAP32[i48 + 8 >> 2] | 0;
          } else {
           i50 = 0;
          }
          i51 = HEAP32[i50 + 8 >> 2] | 0;
          FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i51 >> 2] | 0) + 12 >> 2] & 1](i7, i51, i15, i4, +HEAPF32[(HEAP32[i37 >> 2] | 0) + 80 >> 2]);
          __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i10, i7, HEAP8[i50 + 12 | 0] & 1);
          i51 = HEAP32[i38 >> 2] | 0;
          if ((i51 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i51 >> 2] | 0) + 4 >> 2] & 1](i51);
          }
          d52 = +__ZNK7WebCore16CalculationValue8evaluateEf(HEAP32[i39 >> 2] | 0, d45);
          i51 = HEAP32[i39 >> 2] | 0;
          if ((i51 | 0) == 0) {
           d49 = d52;
           break;
          }
          i53 = i51 | 0;
          i54 = (HEAP32[i53 >> 2] | 0) - 1 | 0;
          if ((i54 | 0) != 0) {
           HEAP32[i53 >> 2] = i54;
           d49 = d52;
           break;
          }
          i54 = HEAP32[i51 + 4 >> 2] | 0;
          if ((i54 | 0) != 0) {
           FUNCTION_TABLE_vi[HEAP32[(HEAP32[i54 >> 2] | 0) + 4 >> 2] & 1](i54);
          }
          __ZN3WTF8fastFreeEPv(i51);
          d49 = d52;
         }
        } while (0);
        if (d45 > +0) {
         d55 = d49 / d45;
        } else {
         d55 = +0;
        }
        HEAPF32[i31 + (i40 << 4) + 8 >> 2] = d55;
       }
      } while (0);
      HEAP8[i31 + (i40 << 4) + 12 | 0] = 1;
     }
    } while (0);
    do {
     if (!((HEAP8[i31 + (i40 << 4) + 12 | 0] & 1) == 0 | (i40 | 0) == 0)) {
      i43 = i40;
      while (1) {
       i41 = i43 - 1 | 0;
       if ((i41 | 0) == 0) {
        i56 = 0;
        break;
       }
       if (i25 >>> 0 <= i41 >>> 0) {
        i30 = 65;
        break L35;
       }
       if ((HEAP8[i31 + (i41 << 4) + 12 | 0] & 1) == 0) {
        i43 = i41;
       } else {
        i56 = i41;
        break;
       }
      }
      i43 = i31 + (i40 << 4) + 8 | 0;
      if (i25 >>> 0 <= i56 >>> 0) {
       i30 = 68;
       break L35;
      }
      d52 = +HEAPF32[i31 + (i56 << 4) + 8 >> 2];
      if (+HEAPF32[i43 >> 2] >= d52) {
       break;
      }
      HEAPF32[i43 >> 2] = d52;
     }
    } while (0);
    i43 = i40 + 1 | 0;
    if (i43 >>> 0 < i17 >>> 0) {
     i40 = i43;
    } else {
     i30 = 72;
     break;
    }
   }
   if ((i30 | 0) == 26) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 28) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 56) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 60) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 65) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 68) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   } else if ((i30 | 0) == 72) {
    L98 : do {
     if (i17 >>> 0 > 2 >>> 0) {
      i40 = HEAP32[i20 >> 2] | 0;
      i31 = HEAP32[i16 >> 2] | 0;
      i25 = 0;
      i39 = 0;
      i38 = 0;
      i37 = 0;
      L100 : while (1) {
       if (i40 >>> 0 <= i25 >>> 0) {
        i30 = 75;
        break;
       }
       i36 = (HEAP8[i31 + (i25 << 4) + 12 | 0] & 1) == 0;
       do {
        if (i39 | i36 ^ 1) {
         if (i36 | i39 ^ 1) {
          i57 = i38;
          i58 = i39;
          break;
         }
         if (i38 >>> 0 >= i25 >>> 0) {
          i57 = i38;
          i58 = 0;
          break;
         }
         i35 = i38 - 1 | 0;
         if (i40 >>> 0 <= i35 >>> 0) {
          i30 = 80;
          break L100;
         }
         d34 = +HEAPF32[i31 + (i35 << 4) + 8 >> 2];
         d22 = (+HEAPF32[i31 + (i25 << 4) + 8 >> 2] - d34) / +((i25 + 1 + i37 | 0) >>> 0 >>> 0);
         i35 = i37 + 1 | 0;
         i33 = i38;
         while (1) {
          if (i40 >>> 0 <= i33 >>> 0) {
           i30 = 83;
           break L100;
          }
          HEAPF32[i31 + (i33 << 4) + 8 >> 2] = d34 + d22 * +((i35 + i33 | 0) >>> 0 >>> 0);
          i32 = i33 + 1 | 0;
          if (i32 >>> 0 < i25 >>> 0) {
           i33 = i32;
          } else {
           i57 = i38;
           i58 = 0;
           break;
          }
         }
        } else {
         i57 = i25;
         i58 = 1;
        }
       } while (0);
       i36 = i25 + 1 | 0;
       if (i36 >>> 0 < i17 >>> 0) {
        i25 = i36;
        i39 = i58;
        i38 = i57;
        i37 = -i57 | 0;
       } else {
        break L98;
       }
      }
      if ((i30 | 0) == 75) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i30 | 0) == 80) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i30 | 0) == 83) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     }
    } while (0);
    if (!((HEAP8[i1 + 124 | 0] & 1) != 0 & i17 >>> 0 > 1 >>> 0)) {
     i30 = 87;
     break;
    }
    i37 = i17 - 1 | 0;
    i38 = HEAP32[i20 >> 2] | 0;
    if (i38 >>> 0 <= i37 >>> 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i39 = HEAP32[i16 >> 2] | 0;
    if ((i38 | 0) == 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i25 = i39 + 8 | 0;
    if (+HEAPF32[i39 + (i37 << 4) + 8 >> 2] - +HEAPF32[i25 >> 2] == +0) {
     HEAPF32[i25 >> 2] = +0;
     i31 = _llvm_uadd_with_overflow_i32(i38 | 0, -1 | 0) | 0;
     if (tempRet0) {
      i40 = i39;
      i36 = i39 + (i31 << 4) | 0;
      HEAP32[i40 >> 2] = HEAP32[i36 >> 2];
      HEAP8[i40 + 4 | 0] = HEAP8[i36 + 4 | 0] | 0;
      HEAP32[i20 >> 2] = 1;
      i59 = 1;
      i30 = 192;
      break;
     } else {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
    }
    do {
     if ((HEAP32[i27 >> 2] & 516096 | 0) == 57344) {
      HEAPF32[i11 >> 2] = d24 - d28;
      HEAPF32[i11 + 4 >> 2] = d23 - d29;
      d22 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i11);
      if (d22 >= d5) {
       d60 = +1;
       break;
      }
      d60 = d5 / d22;
     } else {
      d60 = +1;
     }
    } while (0);
    d22 = +HEAPF32[i25 >> 2];
    L134 : do {
     if (d22 > +0) {
      i36 = i12;
      i40 = i12 + 8 | 0;
      i31 = i12;
      i33 = 1;
      d34 = d22;
      i35 = i37;
      i32 = i37;
      i18 = i39;
      i43 = i38;
      while (1) {
       i41 = i18 + (i32 << 4) | 0;
       HEAP32[i36 >> 2] = HEAP32[i41 >> 2];
       HEAP32[i36 + 4 >> 2] = HEAP32[i41 + 4 >> 2];
       HEAP32[i36 + 8 >> 2] = HEAP32[i41 + 8 >> 2];
       HEAP32[i36 + 12 >> 2] = HEAP32[i41 + 12 >> 2];
       HEAPF32[i40 >> 2] = d34;
       if ((i43 | 0) == (HEAP32[i21 >> 2] | 0)) {
        i41 = i43 + 1 | 0;
        do {
         if (i18 >>> 0 > i12 >>> 0) {
          i30 = 105;
         } else {
          if ((i18 + (i43 << 4) | 0) >>> 0 <= i12 >>> 0) {
           i30 = 105;
           break;
          }
          __ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i41);
          i44 = HEAP32[i16 >> 2] | 0;
          i61 = i44 + (i31 - i18 >> 4 << 4) | 0;
          i62 = i44;
         }
        } while (0);
        if ((i30 | 0) == 105) {
         i30 = 0;
         __ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i41);
         i61 = i12;
         i62 = HEAP32[i16 >> 2] | 0;
        }
        i63 = i61;
        i64 = HEAP32[i20 >> 2] | 0;
        i65 = i62;
       } else {
        i63 = i12;
        i64 = i43;
        i65 = i18;
       }
       if ((i64 | 0) != 0) {
        i44 = i65 + (i64 << 4) | 0;
        i42 = i65 + ((i64 << 4 >> 4) + 1 << 4) | 0;
        while (1) {
         i44 = i44 - 16 | 0;
         i42 = i42 - 16 | 0;
         i48 = i42;
         i47 = i44;
         HEAP32[i48 >> 2] = HEAP32[i47 >> 2];
         HEAP32[i48 + 4 >> 2] = HEAP32[i47 + 4 >> 2];
         HEAP32[i48 + 8 >> 2] = HEAP32[i47 + 8 >> 2];
         HEAP32[i48 + 12 >> 2] = HEAP32[i47 + 12 >> 2];
         if ((i44 | 0) == (i65 | 0)) {
          break;
         }
        }
       }
       i44 = i65;
       i42 = i63;
       HEAP32[i44 >> 2] = HEAP32[i42 >> 2];
       HEAP32[i44 + 4 >> 2] = HEAP32[i42 + 4 >> 2];
       HEAP32[i44 + 8 >> 2] = HEAP32[i42 + 8 >> 2];
       HEAP32[i44 + 12 >> 2] = HEAP32[i42 + 12 >> 2];
       i42 = i64 + 1 | 0;
       HEAP32[i20 >> 2] = i42;
       if (d34 < +0) {
        i66 = i33;
        i67 = i42;
        i68 = i65;
        break L134;
       }
       if ((i35 | 0) == 0) {
        d69 = d34;
       } else {
        i44 = i35 + i33 | 0;
        if (i42 >>> 0 <= i44 >>> 0) {
         i30 = 114;
         break;
        }
        if (i42 >>> 0 <= i32 >>> 0) {
         i30 = 116;
         break;
        }
        d69 = d34 - (+HEAPF32[i65 + (i44 << 4) + 8 >> 2] - +HEAPF32[i65 + (i32 << 4) + 8 >> 2]);
       }
       i44 = ((i37 + i35 | 0) >>> 0) % (i17 >>> 0) & -1;
       i41 = i44 + i33 | 0;
       if (i42 >>> 0 <= i41 >>> 0) {
        i30 = 101;
        break;
       }
       i33 = i33 + 1 | 0;
       d34 = d69;
       i35 = i44;
       i32 = i41;
       i18 = i65;
       i43 = i42;
      }
      if ((i30 | 0) == 101) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i30 | 0) == 114) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      } else if ((i30 | 0) == 116) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } else {
      i66 = 0;
      i67 = i38;
      i68 = i39;
     }
    } while (0);
    i39 = _llvm_uadd_with_overflow_i32(i67 | 0, -1 | 0) | 0;
    if (!tempRet0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    d22 = +HEAPF32[i68 + (i39 << 4) + 8 >> 2];
    if (d22 >= d60) {
     i70 = i67;
     i30 = 141;
     break;
    }
    if (i67 >>> 0 <= i66 >>> 0) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
    i39 = i13;
    i38 = i13 + 8 | 0;
    i25 = i13;
    d34 = d22;
    i43 = 0;
    i18 = i66;
    i32 = i68;
    i35 = i67;
    while (1) {
     i33 = i32 + (i18 << 4) | 0;
     HEAP32[i39 >> 2] = HEAP32[i33 >> 2];
     HEAP32[i39 + 4 >> 2] = HEAP32[i33 + 4 >> 2];
     HEAP32[i39 + 8 >> 2] = HEAP32[i33 + 8 >> 2];
     HEAP32[i39 + 12 >> 2] = HEAP32[i33 + 12 >> 2];
     HEAPF32[i38 >> 2] = d34;
     if ((i35 | 0) == (HEAP32[i21 >> 2] | 0)) {
      i33 = i35 + 1 | 0;
      do {
       if (i32 >>> 0 > i13 >>> 0) {
        i30 = 130;
       } else {
        if ((i32 + (i35 << 4) | 0) >>> 0 <= i13 >>> 0) {
         i30 = 130;
         break;
        }
        __ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i33);
        i31 = HEAP32[i16 >> 2] | 0;
        i71 = i31 + (i25 - i32 >> 4 << 4) | 0;
        i72 = i31;
       }
      } while (0);
      if ((i30 | 0) == 130) {
       i30 = 0;
       __ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i8, i33);
       i71 = i13;
       i72 = HEAP32[i16 >> 2] | 0;
      }
      i31 = HEAP32[i20 >> 2] | 0;
      i40 = i72 + (i31 << 4) | 0;
      i36 = i71;
      HEAP32[i40 >> 2] = HEAP32[i36 >> 2];
      HEAP32[i40 + 4 >> 2] = HEAP32[i36 + 4 >> 2];
      HEAP32[i40 + 8 >> 2] = HEAP32[i36 + 8 >> 2];
      HEAP32[i40 + 12 >> 2] = HEAP32[i36 + 12 >> 2];
      i73 = i31;
      i74 = i72;
     } else {
      i31 = i32 + (i35 << 4) | 0;
      HEAP32[i31 >> 2] = HEAP32[i39 >> 2];
      HEAP32[i31 + 4 >> 2] = HEAP32[i39 + 4 >> 2];
      HEAP32[i31 + 8 >> 2] = HEAP32[i39 + 8 >> 2];
      HEAP32[i31 + 12 >> 2] = HEAP32[i39 + 12 >> 2];
      i73 = i35;
      i74 = i32;
     }
     i31 = i73 + 1 | 0;
     HEAP32[i20 >> 2] = i31;
     if (d34 > d60) {
      i70 = i31;
      i30 = 141;
      break L33;
     }
     if (i43 >>> 0 < i37 >>> 0) {
      i36 = i18 + 1 | 0;
      if (i31 >>> 0 <= i36 >>> 0) {
       i30 = 136;
       break;
      }
      if (i31 >>> 0 <= i18 >>> 0) {
       i30 = 138;
       break;
      }
      d75 = d34 + (+HEAPF32[i74 + (i36 << 4) + 8 >> 2] - +HEAPF32[i74 + (i18 << 4) + 8 >> 2]);
     } else {
      d75 = d34;
     }
     i36 = ((i43 + 1 | 0) >>> 0) % (i17 >>> 0) & -1;
     i40 = i36 + i66 | 0;
     if (i31 >>> 0 > i40 >>> 0) {
      d34 = d75;
      i43 = i36;
      i18 = i40;
      i32 = i74;
      i35 = i31;
     } else {
      i30 = 202;
      break;
     }
    }
    if ((i30 | 0) == 136) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i30 | 0) == 138) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    } else if ((i30 | 0) == 202) {
     __ZN3WTF15CrashOnOverflow10overflowedEv();
    }
   }
  }
 } while (0);
 if ((i30 | 0) == 87) {
  i70 = HEAP32[i20 >> 2] | 0;
  i30 = 141;
 }
 do {
  if ((i30 | 0) == 141) {
   L197 : do {
    if (i70 >>> 0 > 1 >>> 0) {
     i74 = HEAP32[i16 >> 2] | 0;
     d75 = +HEAPF32[i74 + 8 >> 2];
     do {
      if (d75 >= +0) {
       i66 = _llvm_uadd_with_overflow_i32(i70 | 0, -1 | 0) | 0;
       if (tempRet0) {
        if (+HEAPF32[i74 + (i66 << 4) + 8 >> 2] > +1) {
         break;
        } else {
         break L197;
        }
       } else {
        __ZN3WTF15CrashOnOverflow10overflowedEv();
       }
      }
     } while (0);
     i33 = HEAP32[i27 >> 2] & 516096;
     if ((i33 | 0) == 49152) {
      if ((i70 | 0) == 0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      i66 = _llvm_uadd_with_overflow_i32(i70 | 0, -1 | 0) | 0;
      if (!tempRet0) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      d60 = +HEAPF32[i74 + (i66 << 4) + 8 >> 2];
      if (d75 == d60) {
       i66 = 0;
       while (1) {
        if (i70 >>> 0 <= i66 >>> 0) {
         break;
        }
        HEAPF32[i74 + (i66 << 4) + 8 >> 2] = +1;
        i66 = i66 + 1 | 0;
        if (i66 >>> 0 >= i70 >>> 0) {
         break L197;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      d69 = d60 - d75;
      i66 = 0;
      while (1) {
       if (i70 >>> 0 <= i66 >>> 0) {
        i30 = 154;
        break;
       }
       i17 = i74 + (i66 << 4) + 8 | 0;
       HEAPF32[i17 >> 2] = (+HEAPF32[i17 >> 2] - d75) / d69;
       i66 = i66 + 1 | 0;
       if (i66 >>> 0 >= i70 >>> 0) {
        break;
       }
      }
      if ((i30 | 0) == 154) {
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
      d69 = +HEAPF32[i26 >> 2];
      d5 = +HEAPF32[i26 + 4 >> 2];
      i66 = i2 + 16 | 0;
      d29 = +HEAPF32[i66 >> 2];
      d23 = +HEAPF32[i66 + 4 >> 2];
      d28 = d29 - d69;
      d24 = d69 + d75 * d28;
      d55 = d23 - d5;
      d49 = d5 + d75 * d55;
      if (d69 == d24) {
       if (+HEAPF32[i2 + 12 >> 2] != d49) {
        i30 = 158;
       }
      } else {
       i30 = 158;
      }
      if ((i30 | 0) == 158) {
       d69 = +d24;
       d24 = +d49;
       HEAPF32[i26 >> 2] = d69;
       HEAPF32[i26 + 4 >> 2] = d24;
       HEAP32[i2 + 144 >> 2] = 0;
      }
      d24 = d60 + +-1;
      d69 = d29 + d24 * d28;
      d28 = d23 + d24 * d55;
      if (d29 == d69) {
       if (+HEAPF32[i2 + 20 >> 2] == d28) {
        break;
       }
      }
      d29 = +d69;
      d69 = +d28;
      HEAPF32[i66 >> 2] = d29;
      HEAPF32[i66 + 4 >> 2] = d69;
      HEAP32[i2 + 144 >> 2] = 0;
      break;
     } else if ((i33 | 0) != 57344) {
      break;
     }
     i66 = _llvm_uadd_with_overflow_i32(i70 | 0, -1 | 0) | 0;
     if (!tempRet0) {
      __ZN3WTF15CrashOnOverflow10overflowedEv();
     }
     d69 = +HEAPF32[i74 + (i66 << 4) + 8 >> 2];
     i66 = 0;
     while (1) {
      if (i66 >>> 0 >= i70 >>> 0) {
       i76 = i70;
       break;
      }
      if (+HEAPF32[i74 + (i66 << 4) + 8 >> 2] < +0) {
       i66 = i66 + 1 | 0;
      } else {
       i76 = i66;
       break;
      }
     }
     L241 : do {
      if ((i76 | 0) != 0) {
       do {
        if (i76 >>> 0 < i70 >>> 0) {
         d60 = +HEAPF32[i74 + (i76 << 4) + 8 >> 2];
         if (d60 <= +0) {
          i77 = 0;
          break;
         }
         i66 = i76 - 1 | 0;
         if (i70 >>> 0 <= i66 >>> 0) {
          __ZN3WTF15CrashOnOverflow10overflowedEv();
         }
         d75 = +HEAPF32[i74 + (i66 << 4) + 8 >> 2];
         __ZN7WebCore5blendERKNS_5ColorES2_db(i14, i74 + (i66 << 4) | 0, i74 + (i76 << 4) | 0, (+-0 - d75) / (d60 - d75), 1);
         i66 = i14;
         i33 = 0;
         while (1) {
          if (i70 >>> 0 <= i33 >>> 0) {
           break;
          }
          HEAPF32[i74 + (i33 << 4) + 8 >> 2] = +0;
          i17 = i74 + (i33 << 4) | 0;
          HEAP32[i17 >> 2] = HEAP32[i66 >> 2];
          HEAP8[i17 + 4 | 0] = HEAP8[i66 + 4 | 0] | 0;
          i33 = i33 + 1 | 0;
          if (i33 >>> 0 >= i76 >>> 0) {
           break L241;
          }
         }
         __ZN3WTF15CrashOnOverflow10overflowedEv();
        } else {
         i77 = 0;
        }
       } while (0);
       while (1) {
        if (i70 >>> 0 <= i77 >>> 0) {
         break;
        }
        HEAPF32[i74 + (i77 << 4) + 8 >> 2] = +0;
        i77 = i77 + 1 | 0;
        if (i77 >>> 0 >= i76 >>> 0) {
         break L241;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     L258 : do {
      if ((i70 | 0) != 0) {
       i33 = 0;
       while (1) {
        if (i70 >>> 0 <= i33 >>> 0) {
         break;
        }
        i66 = i74 + (i33 << 4) + 8 | 0;
        HEAPF32[i66 >> 2] = +HEAPF32[i66 >> 2] / d69;
        i33 = i33 + 1 | 0;
        if (i33 >>> 0 >= i70 >>> 0) {
         break L258;
        }
       }
       __ZN3WTF15CrashOnOverflow10overflowedEv();
      }
     } while (0);
     i74 = i2 + 24 | 0;
     d75 = +HEAPF32[i74 >> 2];
     d60 = d69 * d75;
     if (d75 != d60) {
      HEAPF32[i74 >> 2] = d60;
      HEAP32[i2 + 144 >> 2] = 0;
     }
     i74 = i2 + 28 | 0;
     d60 = +HEAPF32[i74 >> 2];
     d75 = d69 * d60;
     if (d60 == d75) {
      break;
     }
     HEAPF32[i74 >> 2] = d75;
     HEAP32[i2 + 144 >> 2] = 0;
    }
   } while (0);
   if ((i70 | 0) != 0) {
    i59 = i70;
    i30 = 192;
    break;
   }
   HEAP8[i2 + 88 | 0] = 1;
  }
 } while (0);
 do {
  if ((i30 | 0) == 192) {
   i70 = HEAP32[i16 >> 2] | 0;
   i76 = 0;
   while (1) {
    if (i59 >>> 0 <= i76 >>> 0) {
     i30 = 194;
     break;
    }
    __ZN7WebCore8Gradient12addColorStopEfRKNS_5ColorE(i2, +HEAPF32[i70 + (i76 << 4) + 8 >> 2], i70 + (i76 << 4) | 0);
    i76 = i76 + 1 | 0;
    if (i76 >>> 0 >= i59 >>> 0) {
     break;
    }
   }
   if ((i30 | 0) == 194) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP8[i2 + 88 | 0] = 1;
   if ((i59 | 0) == 0) {
    break;
   }
   HEAP32[i20 >> 2] = 0;
  }
 } while (0);
 i20 = HEAP32[i16 >> 2] | 0;
 if ((i20 | 0) == 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i16 >> 2] = 0;
 HEAP32[i21 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i20);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore22CSSLinearGradientValue13customCSSTextEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 272 | 0;
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
 i15 = i3 + 104 | 0;
 i16 = i3 + 112 | 0;
 i17 = i3 + 120 | 0;
 i18 = i3 + 128 | 0;
 i19 = i3 + 136 | 0;
 i20 = i3 + 144 | 0;
 i21 = i3 + 152 | 0;
 i22 = i3 + 160 | 0;
 i23 = i3 + 168 | 0;
 i24 = i3 + 176 | 0;
 i25 = i3 + 184 | 0;
 i26 = i3 + 192 | 0;
 i27 = i3 + 200 | 0;
 i28 = i3 + 208 | 0;
 i29 = i3 + 216 | 0;
 i30 = i3 + 224 | 0;
 i31 = i3 + 232 | 0;
 i32 = i3 + 240 | 0;
 i33 = i3 + 248 | 0;
 i34 = i3 + 256 | 0;
 i35 = i3 + 264 | 0;
 i36 = i14 | 0;
 HEAP32[i36 >> 2] = 0;
 i37 = i14 + 4 | 0;
 HEAP32[i37 >> 2] = 0;
 i38 = i14 + 8 | 0;
 HEAP32[i38 >> 2] = 0;
 i39 = i14 + 12 | 0;
 HEAP8[i39] = 1;
 HEAP32[i14 + 16 >> 2] = 0;
 i40 = i14 + 20 | 0;
 HEAP32[i40 >> 2] = 0;
 i41 = HEAP32[i2 + 120 >> 2] | 0;
 L1 : do {
  if ((i41 | 0) == 0) {
   __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 392 | 0, 25);
   __ZNK7WebCore8CSSValue7cssTextEv(i15, HEAP32[i2 + 48 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i15);
   i42 = HEAP32[i15 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i43 = i42 | 0;
     i44 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i43 >> 2] = i44;
      break;
     }
    }
   } while (0);
   HEAP8[i13] = 32;
   i42 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i42 | 0) == 0) {
     i45 = 12;
    } else {
     i44 = HEAP32[i36 >> 2] | 0;
     if (i44 >>> 0 >= (HEAP32[i42 + 4 >> 2] | 0) >>> 0) {
      i45 = 12;
      break;
     }
     if ((HEAP32[i37 >> 2] | 0) != 0) {
      i45 = 12;
      break;
     }
     i43 = (HEAP8[i39] & 1) == 0;
     HEAP32[i36 >> 2] = i44 + 1;
     if (i43) {
      HEAP16[(HEAP32[i14 + 20 >> 2] | 0) + (i44 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i40 >> 2] | 0) + i44 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i45 | 0) == 12) {
    __ZN3WTF13StringBuilder6appendEPKhj(i14, i13, 1);
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i16, HEAP32[i2 + 52 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i16);
   i42 = HEAP32[i16 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i44 = i42 | 0;
     i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i44 >> 2] = i43;
      break;
     }
    }
   } while (0);
   __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
   __ZNK7WebCore8CSSValue7cssTextEv(i17, HEAP32[i2 + 56 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i17);
   i42 = HEAP32[i17 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i43 = i42 | 0;
     i44 = (HEAP32[i43 >> 2] | 0) - 2 | 0;
     if ((i44 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i43 >> 2] = i44;
      break;
     }
    }
   } while (0);
   HEAP8[i12] = 32;
   i42 = HEAP32[i38 >> 2] | 0;
   do {
    if ((i42 | 0) == 0) {
     i45 = 27;
    } else {
     i44 = HEAP32[i36 >> 2] | 0;
     if (i44 >>> 0 >= (HEAP32[i42 + 4 >> 2] | 0) >>> 0) {
      i45 = 27;
      break;
     }
     if ((HEAP32[i37 >> 2] | 0) != 0) {
      i45 = 27;
      break;
     }
     i43 = (HEAP8[i39] & 1) == 0;
     HEAP32[i36 >> 2] = i44 + 1;
     if (i43) {
      HEAP16[(HEAP32[i14 + 20 >> 2] | 0) + (i44 << 1) >> 1] = 32;
      break;
     } else {
      HEAP8[(HEAP32[i40 >> 2] | 0) + i44 | 0] = 32;
      break;
     }
    }
   } while (0);
   if ((i45 | 0) == 27) {
    __ZN3WTF13StringBuilder6appendEPKhj(i14, i12, 1);
   }
   __ZNK7WebCore8CSSValue7cssTextEv(i18, HEAP32[i2 + 60 >> 2] | 0);
   __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i18);
   i42 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i42 | 0) != 0) {
     i44 = i42 | 0;
     i43 = (HEAP32[i44 >> 2] | 0) - 2 | 0;
     if ((i43 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i42);
      break;
     } else {
      HEAP32[i44 >> 2] = i43;
      break;
     }
    }
   } while (0);
   i42 = i2 + 72 | 0;
   if ((HEAP32[i42 >> 2] | 0) == 0) {
    break;
   }
   i43 = i2 + 64 | 0;
   i44 = i19 | 0;
   i46 = i14 + 20 | 0;
   i47 = i20 | 0;
   i48 = i21 | 0;
   i49 = 0;
   while (1) {
    i50 = HEAP32[i43 >> 2] | 0;
    __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
    i51 = i50 + (i49 * 20 & -1) | 0;
    L50 : do {
     if (+__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i51 >> 2] | 0, 1) == +0) {
      __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 168 | 0, 5);
      __ZNK7WebCore8CSSValue7cssTextEv(i19, HEAP32[i50 + (i49 * 20 & -1) + 4 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i19);
      i52 = HEAP32[i44 >> 2] | 0;
      do {
       if ((i52 | 0) != 0) {
        i53 = i52 | 0;
        i54 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
        if ((i54 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i52);
         break;
        } else {
         HEAP32[i53 >> 2] = i54;
         break;
        }
       }
      } while (0);
      HEAP8[i11] = 41;
      i52 = HEAP32[i38 >> 2] | 0;
      do {
       if ((i52 | 0) != 0) {
        i54 = HEAP32[i36 >> 2] | 0;
        if (i54 >>> 0 >= (HEAP32[i52 + 4 >> 2] | 0) >>> 0) {
         break;
        }
        if ((HEAP32[i37 >> 2] | 0) != 0) {
         break;
        }
        i53 = (HEAP8[i39] & 1) == 0;
        HEAP32[i36 >> 2] = i54 + 1;
        if (i53) {
         HEAP16[(HEAP32[i46 >> 2] | 0) + (i54 << 1) >> 1] = 41;
         break L50;
        } else {
         HEAP8[(HEAP32[i40 >> 2] | 0) + i54 | 0] = 41;
         break L50;
        }
       }
      } while (0);
      __ZN3WTF13StringBuilder6appendEPKhj(i14, i11, 1);
     } else {
      if (+__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i51 >> 2] | 0, 1) == +1) {
       __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 160 | 0, 3);
       __ZNK7WebCore8CSSValue7cssTextEv(i20, HEAP32[i50 + (i49 * 20 & -1) + 4 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i20);
       i52 = HEAP32[i47 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i54 = i52 | 0;
         i53 = (HEAP32[i54 >> 2] | 0) - 2 | 0;
         if ((i53 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i52);
          break;
         } else {
          HEAP32[i54 >> 2] = i53;
          break;
         }
        }
       } while (0);
       HEAP8[i10] = 41;
       i52 = HEAP32[i38 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i53 = HEAP32[i36 >> 2] | 0;
         if (i53 >>> 0 >= (HEAP32[i52 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i37 >> 2] | 0) != 0) {
          break;
         }
         i54 = (HEAP8[i39] & 1) == 0;
         HEAP32[i36 >> 2] = i53 + 1;
         if (i54) {
          HEAP16[(HEAP32[i46 >> 2] | 0) + (i53 << 1) >> 1] = 41;
          break L50;
         } else {
          HEAP8[(HEAP32[i40 >> 2] | 0) + i53 | 0] = 41;
          break L50;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i14, i10, 1);
       break;
      } else {
       __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 144 | 0, 11);
       __ZN3WTF13StringBuilder12appendNumberEdjNS_29TrailingZerosTruncatingPolicyE(i14, +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i51 >> 2] | 0, 1), 6, 1);
       __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
       __ZNK7WebCore8CSSValue7cssTextEv(i21, HEAP32[i50 + (i49 * 20 & -1) + 4 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i21);
       i52 = HEAP32[i48 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i53 = i52 | 0;
         i54 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
         if ((i54 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i52);
          break;
         } else {
          HEAP32[i53 >> 2] = i54;
          break;
         }
        }
       } while (0);
       HEAP8[i9] = 41;
       i52 = HEAP32[i38 >> 2] | 0;
       do {
        if ((i52 | 0) != 0) {
         i54 = HEAP32[i36 >> 2] | 0;
         if (i54 >>> 0 >= (HEAP32[i52 + 4 >> 2] | 0) >>> 0) {
          break;
         }
         if ((HEAP32[i37 >> 2] | 0) != 0) {
          break;
         }
         i53 = (HEAP8[i39] & 1) == 0;
         HEAP32[i36 >> 2] = i54 + 1;
         if (i53) {
          HEAP16[(HEAP32[i46 >> 2] | 0) + (i54 << 1) >> 1] = 41;
          break L50;
         } else {
          HEAP8[(HEAP32[i40 >> 2] | 0) + i54 | 0] = 41;
          break L50;
         }
        }
       } while (0);
       __ZN3WTF13StringBuilder6appendEPKhj(i14, i9, 1);
       break;
      }
     }
    } while (0);
    i49 = i49 + 1 | 0;
    if (i49 >>> 0 >= (HEAP32[i42 >> 2] | 0) >>> 0) {
     break;
    }
   }
  } else {
   i42 = (HEAP8[i2 + 124 | 0] & 1) != 0;
   if ((i41 | 0) == 2) {
    if (i42) {
     __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 104 | 0, 34);
    } else {
     __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 72 | 0, 24);
    }
    i49 = HEAP32[i2 + 128 >> 2] | 0;
    L106 : do {
     if ((i49 | 0) == 0) {
      i46 = HEAP32[i2 + 48 >> 2] | 0;
      i48 = i2 + 52 | 0;
      i47 = (HEAP32[i48 >> 2] | 0) == 0;
      do {
       if ((i46 | 0) == 0) {
        if (i47) {
         break L106;
        }
       } else {
        i44 = i46 | 0;
        if (i47) {
         __ZNK7WebCore8CSSValue7cssTextEv(i25, i44);
         __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i25);
         i43 = HEAP32[i25 >> 2] | 0;
         if ((i43 | 0) == 0) {
          break;
         }
         i50 = i43 | 0;
         i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
         if ((i51 | 0) == 0) {
          __ZN3WTF10StringImpl7destroyEPS0_(i43);
          break;
         } else {
          HEAP32[i50 >> 2] = i51;
          break;
         }
        }
        __ZNK7WebCore8CSSValue7cssTextEv(i23, i44);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i23);
        i44 = HEAP32[i23 >> 2] | 0;
        do {
         if ((i44 | 0) != 0) {
          i51 = i44 | 0;
          i50 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
          if ((i50 | 0) == 0) {
           __ZN3WTF10StringImpl7destroyEPS0_(i44);
           break;
          } else {
           HEAP32[i51 >> 2] = i50;
           break;
          }
         }
        } while (0);
        HEAP8[i7] = 32;
        i44 = HEAP32[i38 >> 2] | 0;
        do {
         if ((i44 | 0) == 0) {
          i45 = 91;
         } else {
          i50 = HEAP32[i36 >> 2] | 0;
          if (i50 >>> 0 >= (HEAP32[i44 + 4 >> 2] | 0) >>> 0) {
           i45 = 91;
           break;
          }
          if ((HEAP32[i37 >> 2] | 0) != 0) {
           i45 = 91;
           break;
          }
          i51 = (HEAP8[i39] & 1) == 0;
          HEAP32[i36 >> 2] = i50 + 1;
          if (i51) {
           HEAP16[(HEAP32[i14 + 20 >> 2] | 0) + (i50 << 1) >> 1] = 32;
           break;
          } else {
           HEAP8[(HEAP32[i40 >> 2] | 0) + i50 | 0] = 32;
           break;
          }
         }
        } while (0);
        if ((i45 | 0) == 91) {
         __ZN3WTF13StringBuilder6appendEPKhj(i14, i7, 1);
        }
        __ZNK7WebCore8CSSValue7cssTextEv(i24, HEAP32[i48 >> 2] | 0);
        __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i24);
        i44 = HEAP32[i24 >> 2] | 0;
        if ((i44 | 0) == 0) {
         break L106;
        }
        i50 = i44 | 0;
        i51 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
        if ((i51 | 0) == 0) {
         __ZN3WTF10StringImpl7destroyEPS0_(i44);
         break L106;
        } else {
         HEAP32[i50 >> 2] = i51;
         break L106;
        }
       }
      } while (0);
      i48 = HEAP32[i2 + 52 >> 2] | 0;
      if ((i48 | 0) == 0) {
       break;
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i26, i48 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i26);
      i48 = HEAP32[i26 >> 2] | 0;
      if ((i48 | 0) == 0) {
       break;
      }
      i47 = i48 | 0;
      i46 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i46 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i48);
       break;
      } else {
       HEAP32[i47 >> 2] = i46;
       break;
      }
     } else {
      __ZNK7WebCore8CSSValue7cssTextEv(i22, i49 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i22);
      i46 = HEAP32[i22 >> 2] | 0;
      if ((i46 | 0) == 0) {
       break;
      }
      i47 = i46 | 0;
      i48 = (HEAP32[i47 >> 2] | 0) - 2 | 0;
      if ((i48 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i46);
       break;
      } else {
       HEAP32[i47 >> 2] = i48;
       break;
      }
     }
    } while (0);
    i49 = i2 + 72 | 0;
    if ((HEAP32[i49 >> 2] | 0) == 0) {
     break;
    }
    i48 = i2 + 64 | 0;
    i47 = i27 | 0;
    i46 = i28 | 0;
    i51 = i14 + 20 | 0;
    i50 = 0;
    while (1) {
     i44 = HEAP32[i48 >> 2] | 0;
     __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
     __ZNK7WebCore8CSSValue7cssTextEv(i27, HEAP32[i44 + (i50 * 20 & -1) + 4 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i27);
     i43 = HEAP32[i47 >> 2] | 0;
     do {
      if ((i43 | 0) != 0) {
       i52 = i43 | 0;
       i54 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
       if ((i54 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i43);
        break;
       } else {
        HEAP32[i52 >> 2] = i54;
        break;
       }
      }
     } while (0);
     i43 = i44 + (i50 * 20 & -1) | 0;
     do {
      if ((HEAP32[i43 >> 2] | 0) != 0) {
       HEAP8[i5] = 32;
       i54 = HEAP32[i38 >> 2] | 0;
       do {
        if ((i54 | 0) == 0) {
         i45 = 119;
        } else {
         i52 = HEAP32[i36 >> 2] | 0;
         if (i52 >>> 0 >= (HEAP32[i54 + 4 >> 2] | 0) >>> 0) {
          i45 = 119;
          break;
         }
         if ((HEAP32[i37 >> 2] | 0) != 0) {
          i45 = 119;
          break;
         }
         i53 = (HEAP8[i39] & 1) == 0;
         HEAP32[i36 >> 2] = i52 + 1;
         if (i53) {
          HEAP16[(HEAP32[i51 >> 2] | 0) + (i52 << 1) >> 1] = 32;
          break;
         } else {
          HEAP8[(HEAP32[i40 >> 2] | 0) + i52 | 0] = 32;
          break;
         }
        }
       } while (0);
       if ((i45 | 0) == 119) {
        i45 = 0;
        __ZN3WTF13StringBuilder6appendEPKhj(i14, i5, 1);
       }
       __ZNK7WebCore8CSSValue7cssTextEv(i28, HEAP32[i43 >> 2] | 0);
       __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i28);
       i54 = HEAP32[i46 >> 2] | 0;
       if ((i54 | 0) == 0) {
        break;
       }
       i52 = i54 | 0;
       i53 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
       if ((i53 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i54);
        break;
       } else {
        HEAP32[i52 >> 2] = i53;
        break;
       }
      }
     } while (0);
     i50 = i50 + 1 | 0;
     if (i50 >>> 0 >= (HEAP32[i49 >> 2] | 0) >>> 0) {
      break L1;
     }
    }
   }
   if (i42) {
    __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 40 | 0, 26);
   } else {
    __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 16 | 0, 16);
   }
   i49 = i2 + 128 | 0;
   i50 = HEAP32[i49 >> 2] | 0;
   do {
    if ((i50 | 0) == 0) {
     i45 = 134;
    } else {
     if (+__ZN7WebCore17CSSPrimitiveValue14computeDegreesEv(i50) == +180) {
      i45 = 134;
      break;
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i29, HEAP32[i49 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i29);
     i46 = HEAP32[i29 >> 2] | 0;
     if ((i46 | 0) == 0) {
      i45 = 163;
      break;
     }
     i51 = i46 | 0;
     i47 = (HEAP32[i51 >> 2] | 0) - 2 | 0;
     if ((i47 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i46);
      i45 = 163;
      break;
     } else {
      HEAP32[i51 >> 2] = i47;
      i45 = 163;
      break;
     }
    }
   } while (0);
   L188 : do {
    if ((i45 | 0) == 134) {
     i49 = i2 + 48 | 0;
     do {
      if ((HEAP32[i49 >> 2] | 0) == 0) {
       i50 = HEAP32[i2 + 52 >> 2] | 0;
       if ((i50 | 0) == 0) {
        break L188;
       }
       if ((HEAP32[i50 + 4 >> 2] & 508 | 0) != 472) {
        break;
       }
       if ((HEAP32[i50 + 8 >> 2] | 0) == 149) {
        break L188;
       }
      }
     } while (0);
     __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 8 | 0, 3);
     i50 = HEAP32[i49 >> 2] | 0;
     i42 = i2 + 52 | 0;
     i47 = HEAP32[i42 >> 2] | 0;
     if ((i50 | 0) == 0) {
      __ZNK7WebCore8CSSValue7cssTextEv(i33, i47 | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i33);
      i51 = HEAP32[i33 >> 2] | 0;
      if ((i51 | 0) == 0) {
       i45 = 163;
       break;
      }
      i46 = i51 | 0;
      i48 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
      if ((i48 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i51);
       i45 = 163;
       break;
      } else {
       HEAP32[i46 >> 2] = i48;
       i45 = 163;
       break;
      }
     }
     i48 = i50 | 0;
     if ((i47 | 0) == 0) {
      __ZNK7WebCore8CSSValue7cssTextEv(i32, i48);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i32);
      i47 = HEAP32[i32 >> 2] | 0;
      if ((i47 | 0) == 0) {
       i45 = 163;
       break;
      }
      i50 = i47 | 0;
      i46 = (HEAP32[i50 >> 2] | 0) - 2 | 0;
      if ((i46 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i47);
       i45 = 163;
       break;
      } else {
       HEAP32[i50 >> 2] = i46;
       i45 = 163;
       break;
      }
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i30, i48);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i30);
     i48 = HEAP32[i30 >> 2] | 0;
     do {
      if ((i48 | 0) != 0) {
       i46 = i48 | 0;
       i50 = (HEAP32[i46 >> 2] | 0) - 2 | 0;
       if ((i50 | 0) == 0) {
        __ZN3WTF10StringImpl7destroyEPS0_(i48);
        break;
       } else {
        HEAP32[i46 >> 2] = i50;
        break;
       }
      }
     } while (0);
     HEAP8[i4] = 32;
     i48 = HEAP32[i38 >> 2] | 0;
     do {
      if ((i48 | 0) == 0) {
       i45 = 150;
      } else {
       i49 = HEAP32[i36 >> 2] | 0;
       if (i49 >>> 0 >= (HEAP32[i48 + 4 >> 2] | 0) >>> 0) {
        i45 = 150;
        break;
       }
       if ((HEAP32[i37 >> 2] | 0) != 0) {
        i45 = 150;
        break;
       }
       i50 = (HEAP8[i39] & 1) == 0;
       HEAP32[i36 >> 2] = i49 + 1;
       if (i50) {
        HEAP16[(HEAP32[i14 + 20 >> 2] | 0) + (i49 << 1) >> 1] = 32;
        break;
       } else {
        HEAP8[(HEAP32[i40 >> 2] | 0) + i49 | 0] = 32;
        break;
       }
      }
     } while (0);
     if ((i45 | 0) == 150) {
      __ZN3WTF13StringBuilder6appendEPKhj(i14, i4, 1);
     }
     __ZNK7WebCore8CSSValue7cssTextEv(i31, HEAP32[i42 >> 2] | 0);
     __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i31);
     i48 = HEAP32[i31 >> 2] | 0;
     if ((i48 | 0) == 0) {
      i45 = 163;
      break;
     }
     i49 = i48 | 0;
     i50 = (HEAP32[i49 >> 2] | 0) - 2 | 0;
     if ((i50 | 0) == 0) {
      __ZN3WTF10StringImpl7destroyEPS0_(i48);
      i45 = 163;
      break;
     } else {
      HEAP32[i49 >> 2] = i50;
      i45 = 163;
      break;
     }
    }
   } while (0);
   if ((i45 | 0) == 163) {
    __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
   }
   i50 = i2 + 72 | 0;
   if ((HEAP32[i50 >> 2] | 0) == 0) {
    break;
   }
   i49 = i2 + 64 | 0;
   i48 = i34 | 0;
   i46 = i35 | 0;
   i47 = i14 + 20 | 0;
   i51 = 0;
   while (1) {
    i43 = HEAP32[i49 >> 2] | 0;
    if ((i51 | 0) != 0) {
     __ZN3WTF13StringBuilder6appendEPKhj(i14, H_BASE + 384 | 0, 2);
    }
    __ZNK7WebCore8CSSValue7cssTextEv(i34, HEAP32[i43 + (i51 * 20 & -1) + 4 >> 2] | 0);
    __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i34);
    i44 = HEAP32[i48 >> 2] | 0;
    do {
     if ((i44 | 0) != 0) {
      i53 = i44 | 0;
      i52 = (HEAP32[i53 >> 2] | 0) - 2 | 0;
      if ((i52 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i44);
       break;
      } else {
       HEAP32[i53 >> 2] = i52;
       break;
      }
     }
    } while (0);
    i44 = i43 + (i51 * 20 & -1) | 0;
    do {
     if ((HEAP32[i44 >> 2] | 0) != 0) {
      HEAP8[i6] = 32;
      i42 = HEAP32[i38 >> 2] | 0;
      do {
       if ((i42 | 0) == 0) {
        i45 = 179;
       } else {
        i52 = HEAP32[i36 >> 2] | 0;
        if (i52 >>> 0 >= (HEAP32[i42 + 4 >> 2] | 0) >>> 0) {
         i45 = 179;
         break;
        }
        if ((HEAP32[i37 >> 2] | 0) != 0) {
         i45 = 179;
         break;
        }
        i53 = (HEAP8[i39] & 1) == 0;
        HEAP32[i36 >> 2] = i52 + 1;
        if (i53) {
         HEAP16[(HEAP32[i47 >> 2] | 0) + (i52 << 1) >> 1] = 32;
         break;
        } else {
         HEAP8[(HEAP32[i40 >> 2] | 0) + i52 | 0] = 32;
         break;
        }
       }
      } while (0);
      if ((i45 | 0) == 179) {
       i45 = 0;
       __ZN3WTF13StringBuilder6appendEPKhj(i14, i6, 1);
      }
      __ZNK7WebCore8CSSValue7cssTextEv(i35, HEAP32[i44 >> 2] | 0);
      __ZN3WTF13StringBuilder6appendERKNS_6StringE(i14, i35);
      i42 = HEAP32[i46 >> 2] | 0;
      if ((i42 | 0) == 0) {
       break;
      }
      i52 = i42 | 0;
      i53 = (HEAP32[i52 >> 2] | 0) - 2 | 0;
      if ((i53 | 0) == 0) {
       __ZN3WTF10StringImpl7destroyEPS0_(i42);
       break;
      } else {
       HEAP32[i52 >> 2] = i53;
       break;
      }
     }
    } while (0);
    i51 = i51 + 1 | 0;
    if (i51 >>> 0 >= (HEAP32[i50 >> 2] | 0) >>> 0) {
     break;
    }
   }
  }
 } while (0);
 HEAP8[i8] = 41;
 i35 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i35 | 0) == 0) {
   i45 = 191;
  } else {
   i6 = HEAP32[i36 >> 2] | 0;
   if (i6 >>> 0 >= (HEAP32[i35 + 4 >> 2] | 0) >>> 0) {
    i45 = 191;
    break;
   }
   if ((HEAP32[i37 >> 2] | 0) != 0) {
    i45 = 191;
    break;
   }
   i34 = (HEAP8[i39] & 1) == 0;
   HEAP32[i36 >> 2] = i6 + 1;
   if (i34) {
    HEAP16[(HEAP32[i14 + 20 >> 2] | 0) + (i6 << 1) >> 1] = 41;
    break;
   } else {
    HEAP8[(HEAP32[i40 >> 2] | 0) + i6 | 0] = 41;
    break;
   }
  }
 } while (0);
 if ((i45 | 0) == 191) {
  __ZN3WTF13StringBuilder6appendEPKhj(i14, i8, 1);
 }
 __ZN3WTF13StringBuilder11shrinkToFitEv(i14);
 i8 = HEAP32[i37 >> 2] | 0;
 if ((i8 | 0) == 0) {
  __ZNK3WTF13StringBuilder11reifyStringEv(i14);
  i14 = HEAP32[i37 >> 2] | 0;
  HEAP32[i1 >> 2] = i14;
  if ((i14 | 0) != 0) {
   i55 = i14;
   i45 = 195;
  }
 } else {
  HEAP32[i1 >> 2] = i8;
  i55 = i8;
  i45 = 195;
 }
 if ((i45 | 0) == 195) {
  i45 = i55 | 0;
  HEAP32[i45 >> 2] = (HEAP32[i45 >> 2] | 0) + 2;
 }
 i45 = HEAP32[i38 >> 2] | 0;
 do {
  if ((i45 | 0) != 0) {
   i38 = i45 | 0;
   i55 = (HEAP32[i38 >> 2] | 0) - 2 | 0;
   if ((i55 | 0) == 0) {
    __ZN3WTF10StringImpl7destroyEPS0_(i45);
    break;
   } else {
    HEAP32[i38 >> 2] = i55;
    break;
   }
  }
 } while (0);
 i45 = HEAP32[i37 >> 2] | 0;
 if ((i45 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i37 = i45 | 0;
 i55 = (HEAP32[i37 >> 2] | 0) - 2 | 0;
 if ((i55 | 0) == 0) {
  __ZN3WTF10StringImpl7destroyEPS0_(i45);
  STACKTOP = i3;
  return;
 } else {
  HEAP32[i37 >> 2] = i55;
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore22CSSRadialGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, d29 = +0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, i35 = 0, d36 = +0, d37 = +0, d38 = +0, d39 = +0, d40 = +0, d41 = +0, d42 = +0, d43 = +0, d44 = +0, d45 = +0, i46 = 0, d47 = +0, i48 = 0, i49 = 0, d50 = +0, i51 = 0, i52 = 0, d53 = +0, d54 = +0, i55 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 104 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 16 | 0;
 i9 = i5 + 24 | 0;
 i10 = i5 + 32 | 0;
 i11 = i5 + 40 | 0;
 i12 = i5 + 48 | 0;
 i13 = i5 + 56 | 0;
 i14 = i5 + 64 | 0;
 i15 = i5 + 72 | 0;
 i16 = i5 + 80 | 0;
 i17 = i5 + 88 | 0;
 i18 = i5 + 96 | 0;
 i19 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 i20 = i19 + 32 | 0;
 if ((HEAP32[i19 + 12 >> 2] & 2048 | 0) == 0) {
  i21 = i20 | 0;
 } else {
  i21 = HEAP32[i20 >> 2] | 0;
 }
 i20 = HEAP32[i21 >> 2] | 0;
 do {
  if ((i20 | 0) == 0) {
   i22 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i19 >> 2] | 0) + 236 >> 2] & 1](i19 | 0) | 0;
  } else {
   if ((HEAP32[i20 + 20 >> 2] & 768 | 0) == 256) {
    i22 = HEAP32[(HEAP32[i20 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i22 = HEAP32[i20 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i20 = i2 | 0;
 i19 = i2 + 48 | 0;
 i21 = HEAP32[i19 >> 2] | 0;
 i23 = i2 + 52 | 0;
 i24 = HEAP32[i23 >> 2] | 0;
 i25 = i3 + 36 | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i27 = i10 | 0;
 HEAPF32[i27 >> 2] = +0;
 i28 = i10 + 4 | 0;
 HEAPF32[i28 >> 2] = +0;
 if ((i21 | 0) != 0) {
  HEAPF32[i27 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i21, i26, i22, i4, 1);
 }
 if ((i24 | 0) != 0) {
  HEAPF32[i28 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i24, i26, i22, i4, 0);
 }
 if ((HEAP32[i19 >> 2] | 0) == 0) {
  HEAPF32[i27 >> 2] = +((HEAP32[i4 >> 2] | 0) / 2 & -1 | 0);
 }
 if ((HEAP32[i23 >> 2] | 0) == 0) {
  HEAPF32[i28 >> 2] = +((HEAP32[i4 + 4 >> 2] | 0) / 2 & -1 | 0);
 }
 i28 = i2 + 56 | 0;
 i23 = HEAP32[i28 >> 2] | 0;
 i27 = i2 + 60 | 0;
 i19 = HEAP32[i27 >> 2] | 0;
 i26 = HEAP32[i25 >> 2] | 0;
 i24 = i11 | 0;
 HEAPF32[i24 >> 2] = +0;
 i21 = i11 + 4 | 0;
 HEAPF32[i21 >> 2] = +0;
 if ((i23 | 0) != 0) {
  HEAPF32[i24 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i23, i26, i22, i4, 1);
 }
 if ((i19 | 0) != 0) {
  HEAPF32[i21 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i19, i26, i22, i4, 0);
 }
 if ((HEAP32[i28 >> 2] | 0) == 0) {
  HEAPF32[i24 >> 2] = +((HEAP32[i4 >> 2] | 0) / 2 & -1 | 0);
 }
 if ((HEAP32[i27 >> 2] | 0) == 0) {
  HEAPF32[i21 >> 2] = +((HEAP32[i4 + 4 >> 2] | 0) / 2 & -1 | 0);
 }
 i27 = HEAP32[i2 + 128 >> 2] | 0;
 do {
  if ((i27 | 0) == 0) {
   d29 = +0;
  } else {
   i28 = HEAP32[i25 >> 2] | 0;
   d30 = +HEAPF32[(HEAP32[i28 + 24 >> 2] | 0) + 80 >> 2];
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i27) | 0) << 16 >> 16 != 1) {
    d29 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i27, i28, i22, d30, 0);
    break;
   }
   d31 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i27);
   do {
    if (d31 < 3.4028234663852886e+38) {
     if (d31 <= -3.4028234663852886e+38) {
      d32 = -3.4028234663852886e+38;
      break;
     }
     d32 = d31;
    } else {
     d32 = 3.4028234663852886e+38;
    }
   } while (0);
   d29 = d30 * d32;
  }
 } while (0);
 i27 = HEAP32[i2 + 132 >> 2] | 0;
 L46 : do {
  if ((i27 | 0) == 0) {
   i28 = HEAP32[i2 + 144 >> 2] | 0;
   if ((i28 | 0) != 0) {
    HEAPF32[i12 >> 2] = +(HEAP32[i4 >> 2] | 0);
    HEAPF32[i13 >> 2] = +(HEAP32[i4 + 4 >> 2] | 0);
    d32 = +__ZN7WebCore22CSSRadialGradientValue13resolveRadiusEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES5_Pf(0, i28, HEAP32[i25 >> 2] | 0, i22, i12);
    i28 = HEAP32[i2 + 148 >> 2] | 0;
    if ((i28 | 0) == 0) {
     d33 = d32;
     d34 = +1;
     break;
    }
    d33 = d32;
    d34 = d32 / +__ZN7WebCore22CSSRadialGradientValue13resolveRadiusEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES5_Pf(0, i28, HEAP32[i25 >> 2] | 0, i22, i13);
    break;
   }
   i28 = HEAP32[i2 + 136 >> 2] | 0;
   do {
    if ((i28 | 0) == 0) {
     i35 = 1;
    } else {
     if ((HEAP32[i28 + 4 >> 2] & 508 | 0) != 472) {
      i35 = 1;
      break;
     }
     i35 = (HEAP32[i28 + 8 >> 2] | 0) != 168 | 0;
    }
   } while (0);
   i28 = HEAP32[i2 + 140 >> 2] | 0;
   do {
    if ((i28 | 0) != 0) {
     if ((HEAP32[i28 + 4 >> 2] & 508 | 0) != 472) {
      break;
     }
     i26 = HEAP32[i28 + 8 >> 2] | 0;
     if ((i26 | 0) == 491 | (i26 | 0) == 551) {
      d30 = +HEAPF32[i24 >> 2];
      d32 = +(HEAP32[i4 >> 2] | 0) - d30;
      d31 = d32 < d30 ? d32 : d30;
      d30 = +HEAPF32[i21 >> 2];
      d32 = +(HEAP32[i4 + 4 >> 2] | 0) - d30;
      d36 = d32 < d30 ? d32 : d30;
      if ((i35 | 0) == 0) {
       d30 = d36 < d31 ? d36 : d31;
       d37 = d30;
       d38 = d30;
      } else {
       d37 = d36;
       d38 = d31;
      }
      d33 = d38;
      d34 = d38 / d37;
      break L46;
     } else if ((i26 | 0) == 553) {
      d31 = +HEAPF32[i24 >> 2];
      d36 = +(HEAP32[i4 >> 2] | 0) - d31;
      d30 = d31 < d36 ? d36 : d31;
      d31 = +HEAPF32[i21 >> 2];
      d36 = +(HEAP32[i4 + 4 >> 2] | 0) - d31;
      d32 = d31 < d36 ? d36 : d31;
      if ((i35 | 0) == 0) {
       d31 = d30 < d32 ? d32 : d30;
       d39 = d31;
       d40 = d31;
      } else {
       d39 = d32;
       d40 = d30;
      }
      d33 = d40;
      d34 = d40 / d39;
      break L46;
     } else if ((i26 | 0) == 552) {
      __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i14, i4);
      d30 = +HEAPF32[i21 >> 2];
      HEAPF32[i6 >> 2] = +HEAPF32[i24 >> 2];
      HEAPF32[i6 + 4 >> 2] = d30;
      d30 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i6);
      i26 = i14 | 0;
      d32 = +HEAPF32[i26 >> 2];
      d31 = +HEAPF32[i21 >> 2];
      HEAPF32[i7 >> 2] = +HEAPF32[i24 >> 2] - d32;
      HEAPF32[i7 + 4 >> 2] = d31;
      d31 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i7);
      i19 = i14 + 4 | 0;
      d36 = +HEAPF32[i19 >> 2];
      d41 = +HEAPF32[i21 >> 2] - d36;
      HEAPF32[i8 >> 2] = +HEAPF32[i24 >> 2];
      HEAPF32[i8 + 4 >> 2] = d41;
      d41 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i8);
      d42 = +HEAPF32[i26 >> 2];
      d43 = +HEAPF32[i19 >> 2];
      d44 = +HEAPF32[i21 >> 2] - d43;
      HEAPF32[i9 >> 2] = +HEAPF32[i24 >> 2] - d42;
      HEAPF32[i9 + 4 >> 2] = d44;
      d44 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i9);
      if (d31 < d30) {
       d45 = d31;
       i46 = (HEAPF32[tempDoublePtr >> 2] = d32, HEAP32[tempDoublePtr >> 2] | 0);
      } else {
       d45 = d30;
       i46 = 0;
      }
      if (d41 < d45) {
       d47 = d41;
       i48 = (HEAPF32[tempDoublePtr >> 2] = d36, HEAP32[tempDoublePtr >> 2] | 0);
       i49 = 0;
      } else {
       d47 = d45;
       i48 = 0;
       i49 = i46;
      }
      if (d44 < d47) {
       i19 = (HEAPF32[tempDoublePtr >> 2] = d42, HEAP32[tempDoublePtr >> 2] | 0);
       d50 = d44;
       i51 = (HEAPF32[tempDoublePtr >> 2] = d43, HEAP32[tempDoublePtr >> 2] | 0);
       i52 = i19;
      } else {
       d50 = d47;
       i51 = i48;
       i52 = i49;
      }
      if ((i35 | 0) == 0) {
       d33 = d50;
       d34 = +1;
       break L46;
      }
      d43 = (HEAP32[tempDoublePtr >> 2] = i51, +HEAPF32[tempDoublePtr >> 2]);
      d44 = +HEAPF32[i24 >> 2];
      d42 = +(HEAP32[i4 >> 2] | 0) - d44;
      d36 = +HEAPF32[i21 >> 2];
      d41 = +(HEAP32[i4 + 4 >> 2] | 0) - d36;
      d30 = (HEAP32[tempDoublePtr >> 2] = i52, +HEAPF32[tempDoublePtr >> 2]) - d44;
      d32 = d43 - d36;
      d43 = (d42 < d44 ? d42 : d44) / (d41 < d36 ? d41 : d36);
      d33 = +Math_sqrt(d30 * d30 + d32 * d32 / (+1 / (d43 * d43)));
      d34 = d43;
      break L46;
     } else {
      break;
     }
    }
   } while (0);
   i28 = i15 | 0;
   HEAPF32[i28 >> 2] = +0;
   i19 = i15 + 4 | 0;
   HEAPF32[i19 >> 2] = +0;
   __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i4);
   d43 = +__ZN7WebCoreL24distanceToFarthestCornerERKNS_10FloatPointERKNS_9FloatSizeERS0_(i11, i16, i15);
   if ((i35 | 0) == 0) {
    d33 = d43;
    d34 = +1;
    break;
   }
   d43 = +HEAPF32[i24 >> 2];
   d32 = +(HEAP32[i4 >> 2] | 0) - d43;
   d30 = +HEAPF32[i21 >> 2];
   d36 = +(HEAP32[i4 + 4 >> 2] | 0) - d30;
   d41 = +HEAPF32[i28 >> 2] - d43;
   d44 = +HEAPF32[i19 >> 2] - d30;
   d42 = (d43 < d32 ? d32 : d43) / (d30 < d36 ? d36 : d30);
   d33 = +Math_sqrt(d41 * d41 + d44 * d44 / (+1 / (d42 * d42)));
   d34 = d42;
  } else {
   i19 = HEAP32[i25 >> 2] | 0;
   d42 = +HEAPF32[(HEAP32[i19 + 24 >> 2] | 0) + 80 >> 2];
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i27) | 0) << 16 >> 16 != 1) {
    d33 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i27, i19, i22, d42, 0);
    d34 = +1;
    break;
   }
   d44 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i27);
   do {
    if (d44 < 3.4028234663852886e+38) {
     if (d44 <= -3.4028234663852886e+38) {
      d53 = -3.4028234663852886e+38;
      break;
     }
     d53 = d44;
    } else {
     d53 = 3.4028234663852886e+38;
    }
   } while (0);
   d33 = d42 * d53;
   d34 = +1;
  }
 } while (0);
 i27 = __ZN3WTF10fastMallocEj(160) | 0;
 __ZN7WebCore8GradientC1ERKNS_10FloatPointEfS3_ff(i27, i10, d29, i11, d33, d34);
 if ((HEAP8[i2 + 124 | 0] & 1) == 0) {
  d54 = +0;
  __ZN7WebCore16CSSGradientValue8addStopsEPNS_8GradientEPNS_13RenderElementERKNS_11RenderStyleEf(i20, i27, i3, i22, d54);
  i55 = i1 | 0;
  HEAP32[i55 >> 2] = i27;
  STACKTOP = i5;
  return;
 }
 HEAPF32[i17 >> 2] = +0;
 HEAPF32[i17 + 4 >> 2] = +0;
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i18, i4);
 d54 = +__ZN7WebCoreL24distanceToFarthestCornerERKNS_10FloatPointERKNS_9FloatSizeERS0_(i11, i18, i17);
 __ZN7WebCore16CSSGradientValue8addStopsEPNS_8GradientEPNS_13RenderElementERKNS_11RenderStyleEf(i20, i27, i3, i22, d54);
 i55 = i1 | 0;
 HEAP32[i55 >> 2] = i27;
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore22CSSRadialGradientValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) == 1) {
  if ((HEAP32[i2 + 120 >> 2] | 0) != 1) {
   i3 = 0;
   return i3 | 0;
  }
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  i5 = (i4 | 0) == 0;
  i6 = HEAP32[i2 + 48 >> 2] | 0;
  i7 = (i6 | 0) == 0;
  do {
   if (i5 | i7) {
    if (i5 & i7) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i6 = HEAP32[i1 + 52 >> 2] | 0;
  i4 = (i6 | 0) == 0;
  i7 = HEAP32[i2 + 52 >> 2] | 0;
  i5 = (i7 | 0) == 0;
  do {
   if (i4 | i5) {
    if (i4 & i5) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i7 = HEAP32[i1 + 56 >> 2] | 0;
  i6 = (i7 | 0) == 0;
  i5 = HEAP32[i2 + 56 >> 2] | 0;
  i4 = (i5 | 0) == 0;
  do {
   if (i6 | i4) {
    if (i6 & i4) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i5 = HEAP32[i1 + 60 >> 2] | 0;
  i7 = (i5 | 0) == 0;
  i4 = HEAP32[i2 + 60 >> 2] | 0;
  i6 = (i4 | 0) == 0;
  do {
   if (i7 | i6) {
    if (i7 & i6) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i4 = HEAP32[i1 + 128 >> 2] | 0;
  i5 = (i4 | 0) == 0;
  i6 = HEAP32[i2 + 128 >> 2] | 0;
  i7 = (i6 | 0) == 0;
  do {
   if (i5 | i7) {
    if (i5 & i7) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i6 = HEAP32[i1 + 132 >> 2] | 0;
  i4 = (i6 | 0) == 0;
  i7 = HEAP32[i2 + 132 >> 2] | 0;
  i5 = (i7 | 0) == 0;
  do {
   if (i4 | i5) {
    if (i4 & i5) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i7 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i7 | 0) != (HEAP32[i2 + 72 >> 2] | 0)) {
   i3 = 0;
   return i3 | 0;
  }
  i6 = HEAP32[i1 + 64 >> 2] | 0;
  i5 = HEAP32[i2 + 64 >> 2] | 0;
  if ((i7 | 0) == 0) {
   i3 = 1;
   return i3 | 0;
  } else {
   i8 = 0;
  }
  while (1) {
   i4 = HEAP32[i6 + (i8 * 20 & -1) + 4 >> 2] | 0;
   i9 = (i4 | 0) == 0;
   i10 = HEAP32[i5 + (i8 * 20 & -1) + 4 >> 2] | 0;
   i11 = (i10 | 0) == 0;
   if (i9 | i11) {
    if (!(i9 & i11)) {
     i3 = 0;
     i12 = 75;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i10) | 0)) {
     i3 = 0;
     i12 = 74;
     break;
    }
   }
   i10 = HEAP32[i6 + (i8 * 20 & -1) >> 2] | 0;
   i4 = (i10 | 0) == 0;
   i11 = HEAP32[i5 + (i8 * 20 & -1) >> 2] | 0;
   i9 = (i11 | 0) == 0;
   if (i4 | i9) {
    if (!(i4 & i9)) {
     i3 = 0;
     i12 = 82;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i10, i11) | 0)) {
     i3 = 0;
     i12 = 84;
     break;
    }
   }
   i11 = i8 + 1 | 0;
   if (i11 >>> 0 < i7 >>> 0) {
    i8 = i11;
   } else {
    i3 = 1;
    i12 = 83;
    break;
   }
  }
  if ((i12 | 0) == 74) {
   return i3 | 0;
  } else if ((i12 | 0) == 75) {
   return i3 | 0;
  } else if ((i12 | 0) == 82) {
   return i3 | 0;
  } else if ((i12 | 0) == 83) {
   return i3 | 0;
  } else if ((i12 | 0) == 84) {
   return i3 | 0;
  }
 }
 if (((HEAP8[i2 + 124 | 0] ^ HEAP8[i1 + 124 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i8 = HEAP32[i1 + 48 >> 2] | 0;
 i7 = i1 + 52 | 0;
 i5 = HEAP32[i7 >> 2] | 0;
 i6 = (i5 | 0) == 0;
 do {
  if ((i8 | 0) == 0) {
   if (i6) {
    if ((HEAP32[i2 + 48 >> 2] | 0) != 0) {
     i3 = 0;
     return i3 | 0;
    }
    if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
   i11 = HEAP32[i2 + 52 >> 2] | 0;
   if ((i11 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i11) | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i2 + 48 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   i11 = HEAP32[i2 + 48 >> 2] | 0;
   i10 = (i11 | 0) == 0;
   if (i6) {
    if (i10) {
     i3 = 0;
     return i3 | 0;
    }
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i8, i11) | 0)) {
     i3 = 0;
     return i3 | 0;
    }
    if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
   if (i10) {
    i3 = 0;
    return i3 | 0;
   }
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i8, i11) | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   i11 = HEAP32[i7 >> 2] | 0;
   i10 = (i11 | 0) == 0;
   i9 = HEAP32[i2 + 52 >> 2] | 0;
   i4 = (i9 | 0) == 0;
   if (i10 | i4) {
    if (i10 & i4) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i11, i9) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  }
 } while (0);
 i7 = HEAP32[i1 + 136 >> 2] | 0;
 L106 : do {
  if ((i7 | 0) == 0) {
   i8 = HEAP32[i1 + 140 >> 2] | 0;
   if ((i8 | 0) != 0) {
    i6 = HEAP32[i2 + 140 >> 2] | 0;
    if ((i6 | 0) == 0) {
     i3 = 0;
     return i3 | 0;
    } else {
     i13 = 1;
     i14 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i8, i6) | 0;
     i15 = 1;
     break;
    }
   }
   i6 = HEAP32[i1 + 144 >> 2] | 0;
   do {
    if ((i6 | 0) != 0) {
     i8 = i1 + 148 | 0;
     if ((HEAP32[i8 >> 2] | 0) == 0) {
      break;
     }
     i5 = HEAP32[i2 + 144 >> 2] | 0;
     if ((i5 | 0) == 0) {
      i3 = 0;
      return i3 | 0;
     }
     if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i5) | 0)) {
      i3 = 0;
      return i3 | 0;
     }
     i5 = HEAP32[i8 >> 2] | 0;
     i8 = (i5 | 0) == 0;
     i9 = HEAP32[i2 + 148 >> 2] | 0;
     i11 = (i9 | 0) == 0;
     if (i8 | i11) {
      i13 = i8 & i11;
      i14 = 1;
      i15 = 1;
      break L106;
     }
     i13 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i9) | 0;
     i14 = 1;
     i15 = 1;
     break L106;
    }
   } while (0);
   if ((HEAP32[i2 + 144 >> 2] | 0) == 0) {
    i13 = (HEAP32[i2 + 148 >> 2] | 0) == 0;
    i14 = (HEAP32[i2 + 140 >> 2] | 0) == 0;
    i15 = (HEAP32[i2 + 136 >> 2] | 0) == 0;
    break;
   } else {
    i3 = 0;
    return i3 | 0;
   }
  } else {
   i6 = HEAP32[i2 + 136 >> 2] | 0;
   if ((i6 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   } else {
    i13 = 1;
    i14 = 1;
    i15 = __ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i6) | 0;
    break;
   }
  }
 } while (0);
 if (!(i15 & i14 & i13)) {
  i3 = 0;
  return i3 | 0;
 }
 i13 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i13 | 0) != (HEAP32[i2 + 72 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i14 = HEAP32[i1 + 64 >> 2] | 0;
 i1 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i16 = 0;
 }
 while (1) {
  i2 = HEAP32[i14 + (i16 * 20 & -1) + 4 >> 2] | 0;
  i15 = (i2 | 0) == 0;
  i7 = HEAP32[i1 + (i16 * 20 & -1) + 4 >> 2] | 0;
  i6 = (i7 | 0) == 0;
  if (i15 | i6) {
   if (!(i15 & i6)) {
    i3 = 0;
    i12 = 95;
    break;
   }
  } else {
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i2, i7) | 0)) {
    i3 = 0;
    i12 = 94;
    break;
   }
  }
  i7 = HEAP32[i14 + (i16 * 20 & -1) >> 2] | 0;
  i2 = (i7 | 0) == 0;
  i6 = HEAP32[i1 + (i16 * 20 & -1) >> 2] | 0;
  i15 = (i6 | 0) == 0;
  if (i2 | i15) {
   if (!(i2 & i15)) {
    i3 = 0;
    i12 = 97;
    break;
   }
  } else {
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i6) | 0)) {
    i3 = 0;
    i12 = 96;
    break;
   }
  }
  i6 = i16 + 1 | 0;
  if (i6 >>> 0 < i13 >>> 0) {
   i16 = i6;
  } else {
   i3 = 1;
   i12 = 98;
   break;
  }
 }
 if ((i12 | 0) == 94) {
  return i3 | 0;
 } else if ((i12 | 0) == 95) {
  return i3 | 0;
 } else if ((i12 | 0) == 96) {
  return i3 | 0;
 } else if ((i12 | 0) == 97) {
  return i3 | 0;
 } else if ((i12 | 0) == 98) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore22CSSLinearGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, d28 = +0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, d33 = +0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, d49 = +0, d50 = +0, d51 = +0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i8;
 i10 = HEAP32[(HEAP32[(HEAP32[(HEAP32[i3 + 4 >> 2] | 0) + 20 >> 2] | 0) + 8 >> 2] | 0) + 692 >> 2] | 0;
 i11 = i10 + 32 | 0;
 if ((HEAP32[i10 + 12 >> 2] & 2048 | 0) == 0) {
  i12 = i11 | 0;
 } else {
  i12 = HEAP32[i11 >> 2] | 0;
 }
 i11 = HEAP32[i12 >> 2] | 0;
 do {
  if ((i11 | 0) == 0) {
   i13 = FUNCTION_TABLE_ii[HEAP32[(HEAP32[i10 >> 2] | 0) + 236 >> 2] & 1](i10 | 0) | 0;
  } else {
   if ((HEAP32[i11 + 20 >> 2] & 768 | 0) == 256) {
    i13 = HEAP32[(HEAP32[i11 + 8 >> 2] | 0) + 36 >> 2] | 0;
    break;
   } else {
    i13 = HEAP32[i11 + 36 >> 2] | 0;
    break;
   }
  }
 } while (0);
 i11 = i6;
 HEAPF32[i11 >> 2] = +0;
 i10 = i7 + 4 | 0;
 HEAPF32[i10 >> 2] = +0;
 i12 = i8;
 HEAPF32[i12 >> 2] = +0;
 i14 = i9 + 4 | 0;
 HEAPF32[i14 >> 2] = +0;
 i15 = HEAP32[i2 + 128 >> 2] | 0;
 L12 : do {
  if ((i15 | 0) == 0) {
   i16 = HEAP32[i2 + 120 >> 2] | 0;
   if ((i16 | 0) == 0) {
    i17 = i2 + 48 | 0;
    i18 = HEAP32[i17 >> 2] | 0;
    i19 = i2 + 52 | 0;
    i20 = HEAP32[i19 >> 2] | 0;
    i21 = i3 + 36 | 0;
    i22 = HEAP32[i21 >> 2] | 0;
    if ((i18 | 0) == 0) {
     i23 = 0;
     i24 = 0;
    } else {
     d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i18, i22, i13, i4, 1);
     i23 = 0;
     i24 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
    }
    if ((i20 | 0) == 0) {
     i26 = 0;
     i27 = 0;
    } else {
     d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i20, i22, i13, i4, 0);
     i26 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
     i27 = 0;
    }
    HEAP32[i6 >> 2] = i27 | i24;
    HEAP32[i6 + 4 >> 2] = i26 | i23;
    i22 = HEAP32[i2 + 56 >> 2] | 0;
    i20 = HEAP32[i2 + 60 >> 2] | 0;
    d25 = (HEAP32[tempDoublePtr >> 2] = i26, +HEAPF32[tempDoublePtr >> 2]);
    d28 = (HEAP32[tempDoublePtr >> 2] = i24, +HEAPF32[tempDoublePtr >> 2]);
    do {
     if ((i22 | 0) == 0) {
      if ((i20 | 0) != 0) {
       i29 = HEAP32[i21 >> 2] | 0;
       i30 = 0;
       i31 = 0;
       i32 = 23;
       break;
      }
      if ((HEAP32[i17 >> 2] | 0) != 0) {
       HEAPF32[i12 >> 2] = +(HEAP32[i4 >> 2] | 0) - d28;
      }
      if ((HEAP32[i19 >> 2] | 0) == 0) {
       break L12;
      }
      HEAPF32[i14 >> 2] = +(HEAP32[i4 + 4 >> 2] | 0) - d25;
      break L12;
     } else {
      i18 = HEAP32[i21 >> 2] | 0;
      d33 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i22, i18, i13, i4, 1);
      i34 = (HEAPF32[tempDoublePtr >> 2] = d33, HEAP32[tempDoublePtr >> 2] | 0);
      i35 = 0;
      if ((i20 | 0) == 0) {
       i36 = 0;
       i37 = 0;
       i38 = i35;
       i39 = i34;
      } else {
       i29 = i18;
       i30 = i35;
       i31 = i34;
       i32 = 23;
      }
     }
    } while (0);
    if ((i32 | 0) == 23) {
     d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i20, i29, i13, i4, 0);
     i36 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
     i37 = 0;
     i38 = i30;
     i39 = i31;
    }
    HEAP32[i8 >> 2] = i37 | i39;
    HEAP32[i8 + 4 >> 2] = i36 | i38;
    break;
   } else if ((i16 | 0) == 2) {
    i22 = i2 + 48 | 0;
    i21 = HEAP32[i22 >> 2] | 0;
    i19 = i2 + 52 | 0;
    i17 = HEAP32[i19 >> 2] | 0;
    i34 = HEAP32[i3 + 36 >> 2] | 0;
    if ((i21 | 0) == 0) {
     i40 = 0;
     i41 = 0;
    } else {
     d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i21, i34, i13, i4, 1);
     i40 = 0;
     i41 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
    }
    if ((i17 | 0) == 0) {
     i42 = 0;
     i43 = 0;
    } else {
     d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i17, i34, i13, i4, 0);
     i42 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
     i43 = 0;
    }
    HEAP32[i6 >> 2] = i43 | i41;
    HEAP32[i6 + 4 >> 2] = i42 | i40;
    d25 = (HEAP32[tempDoublePtr >> 2] = i42, +HEAPF32[tempDoublePtr >> 2]);
    if ((HEAP32[i22 >> 2] | 0) != 0) {
     HEAPF32[i12 >> 2] = +(HEAP32[i4 >> 2] | 0) - (HEAP32[tempDoublePtr >> 2] = i41, +HEAPF32[tempDoublePtr >> 2]);
    }
    if ((HEAP32[i19 >> 2] | 0) == 0) {
     break;
    }
    HEAPF32[i14 >> 2] = +(HEAP32[i4 + 4 >> 2] | 0) - d25;
    break;
   } else if ((i16 | 0) == 4) {
    i19 = i2 + 48 | 0;
    i22 = HEAP32[i19 >> 2] | 0;
    i34 = i2 + 52 | 0;
    i17 = HEAP32[i34 >> 2] | 0;
    do {
     if ((i22 | 0) == 0) {
      if ((i17 | 0) == 0) {
       HEAPF32[i14 >> 2] = +(HEAP32[i4 + 4 >> 2] | 0);
       break L12;
      } else {
       d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i17, HEAP32[i3 + 36 >> 2] | 0, i13, i4, 0);
       i44 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
       i45 = 0;
       i46 = i2 + 52 | 0;
       i47 = 0;
       i48 = 0;
       break;
      }
     } else {
      if ((i17 | 0) == 0) {
       d25 = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i22, HEAP32[i3 + 36 >> 2] | 0, i13, i4, 1);
       i44 = 0;
       i45 = 0;
       i46 = i34;
       i47 = 0;
       i48 = (HEAPF32[tempDoublePtr >> 2] = d25, HEAP32[tempDoublePtr >> 2] | 0);
       break;
      }
      d25 = +(HEAP32[i4 >> 2] | 0);
      d28 = +(HEAP32[i4 + 4 >> 2] | 0);
      do {
       if ((HEAP32[i22 + 4 >> 2] & 508 | 0) == 472) {
        if ((HEAP32[i22 + 8 >> 2] | 0) != 152) {
         d49 = d28;
         break;
        }
        d49 = d28 * +-1;
       } else {
        d49 = d28;
       }
      } while (0);
      do {
       if ((HEAP32[i17 + 4 >> 2] & 508 | 0) == 472) {
        if ((HEAP32[i17 + 8 >> 2] | 0) != 149) {
         d50 = d25;
         break;
        }
        d50 = d25 * +-1;
       } else {
        d50 = d25;
       }
      } while (0);
      __ZN7WebCoreL18endPointsFromAngleEfRKNS_7IntSizeERNS_10FloatPointES4_NS_15CSSGradientTypeE(+90 - +Math_atan2(+d50, +d49) * +180 / 3.141592653589793, i4, i7, i9, 4);
      break L12;
     }
    } while (0);
    HEAP32[i8 >> 2] = i45 | i48;
    HEAP32[i8 + 4 >> 2] = i44 | i47;
    d25 = (HEAP32[tempDoublePtr >> 2] = i44, +HEAPF32[tempDoublePtr >> 2]);
    if ((HEAP32[i19 >> 2] | 0) != 0) {
     HEAPF32[i11 >> 2] = +(HEAP32[i4 >> 2] | 0) - (HEAP32[tempDoublePtr >> 2] = i48, +HEAPF32[tempDoublePtr >> 2]);
    }
    if ((HEAP32[i46 >> 2] | 0) == 0) {
     break;
    }
    HEAPF32[i10 >> 2] = +(HEAP32[i4 + 4 >> 2] | 0) - d25;
    break;
   } else {
    break;
   }
  } else {
   d25 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(i15, 11);
   do {
    if (d25 < 3.4028234663852886e+38) {
     if (d25 <= -3.4028234663852886e+38) {
      d51 = -3.4028234663852886e+38;
      break;
     }
     d51 = d25;
    } else {
     d51 = 3.4028234663852886e+38;
    }
   } while (0);
   __ZN7WebCoreL18endPointsFromAngleEfRKNS_7IntSizeERNS_10FloatPointES4_NS_15CSSGradientTypeE(d51, i4, i7, i9, HEAP32[i2 + 120 >> 2] | 0);
  }
 } while (0);
 i4 = __ZN3WTF10fastMallocEj(160) | 0;
 __ZN7WebCore8GradientC1ERKNS_10FloatPointES3_(i4, i7, i9);
 __ZN7WebCore16CSSGradientValue8addStopsEPNS_8GradientEPNS_13RenderElementERKNS_11RenderStyleEf(i2 | 0, i4, i3, i13, +1);
 HEAP32[i1 >> 2] = i4;
 STACKTOP = i5;
 return;
}
function __ZNSt3__17__mergeINS_8__negateIRPFbRKN7WebCore20CSSGradientColorStopES5_EEENS_13move_iteratorINS_16reverse_iteratorIPS3_EEEESE_SD_EET2_T0_SG_T1_SH_SF_T_(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 i8 = STACKTOP;
 i9 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i4 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i4 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i5;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i5 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i5 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 i9 = i2 + 4 | 0;
 i10 = HEAP32[i9 >> 2] | 0;
 i11 = HEAP32[i3 + 4 >> 2] | 0;
 i3 = i4 + 4 | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = HEAP32[i5 + 4 >> 2] | 0;
 L1 : do {
  if ((i10 | 0) == (i11 | 0)) {
   i14 = i12;
   i15 = HEAP32[i6 >> 2] | 0;
   i16 = HEAP32[i6 + 4 >> 2] | 0;
  } else {
   i5 = i4 | 0;
   i17 = i2 | 0;
   i18 = HEAP32[i7 >> 2] | 0;
   i19 = i6 + 4 | 0;
   i20 = i6 | 0;
   i21 = i10;
   i22 = i12;
   while (1) {
    i23 = i11;
    if ((i22 | 0) == (i13 | 0)) {
     break;
    }
    i24 = i22 - 20 | 0;
    HEAP32[i5 >> 2] = i24;
    i25 = i21 - 20 | 0;
    HEAP32[i17 >> 2] = i25;
    i26 = FUNCTION_TABLE_iii[HEAP32[i18 >> 2] & 3](i24, i25) | 0;
    i27 = HEAP32[i19 >> 2] | 0;
    i28 = i27 - 20 | 0;
    HEAP32[i20 >> 2] = i28;
    if (i26) {
     HEAP32[i17 >> 2] = i25;
     i26 = i25 | 0;
     i29 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = 0;
     i26 = i28 | 0;
     i30 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = i29;
     do {
      if ((i30 | 0) != 0) {
       i29 = i30 | 0;
       i26 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i30 | 0);
        break;
       } else {
        HEAP32[i29 >> 2] = i26;
        break;
       }
      }
     } while (0);
     i30 = i21 - 20 + 4 | 0;
     i26 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i30 = i27 - 20 + 4 | 0;
     i29 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = i26;
     do {
      if ((i29 | 0) != 0) {
       i26 = i29 | 0;
       i30 = (HEAP32[i26 >> 2] | 0) - 1 | 0;
       if ((i30 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i29 | 0);
        break;
       } else {
        HEAP32[i26 >> 2] = i30;
        break;
       }
      }
     } while (0);
     i29 = i27 - 20 + 8 | 0;
     i30 = i21 - 20 + 8 | 0;
     HEAP32[i29 >> 2] = HEAP32[i30 >> 2];
     HEAP8[i29 + 4 | 0] = HEAP8[i30 + 4 | 0] | 0;
     HEAP8[i27 - 20 + 16 | 0] = HEAP8[i21 - 20 + 16 | 0] & 1;
     HEAP32[i9 >> 2] = i25;
     i31 = i25;
     i32 = HEAP32[i3 >> 2] | 0;
    } else {
     HEAP32[i5 >> 2] = i24;
     i30 = i24 | 0;
     i29 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = 0;
     i30 = i28 | 0;
     i26 = HEAP32[i30 >> 2] | 0;
     HEAP32[i30 >> 2] = i29;
     do {
      if ((i26 | 0) != 0) {
       i29 = i26 | 0;
       i30 = (HEAP32[i29 >> 2] | 0) - 1 | 0;
       if ((i30 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i26 | 0);
        break;
       } else {
        HEAP32[i29 >> 2] = i30;
        break;
       }
      }
     } while (0);
     i26 = i22 - 20 + 4 | 0;
     i24 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = 0;
     i26 = i27 - 20 + 4 | 0;
     i25 = HEAP32[i26 >> 2] | 0;
     HEAP32[i26 >> 2] = i24;
     do {
      if ((i25 | 0) != 0) {
       i24 = i25 | 0;
       i26 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i26 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i25 | 0);
        break;
       } else {
        HEAP32[i24 >> 2] = i26;
        break;
       }
      }
     } while (0);
     i25 = i27 - 20 + 8 | 0;
     i26 = i22 - 20 + 8 | 0;
     HEAP32[i25 >> 2] = HEAP32[i26 >> 2];
     HEAP8[i25 + 4 | 0] = HEAP8[i26 + 4 | 0] | 0;
     HEAP8[i27 - 20 + 16 | 0] = HEAP8[i22 - 20 + 16 | 0] & 1;
     i26 = (HEAP32[i3 >> 2] | 0) - 20 | 0;
     HEAP32[i3 >> 2] = i26;
     i31 = i21;
     i32 = i26;
    }
    HEAP32[i19 >> 2] = i28;
    if ((i31 | 0) == (i11 | 0)) {
     i14 = i32;
     i15 = i28;
     i16 = i28;
     break L1;
    } else {
     i21 = i31;
     i22 = i32;
    }
   }
   i22 = HEAP32[i19 >> 2] | 0;
   if ((i21 | 0) == (i11 | 0)) {
    i33 = i22;
    i34 = HEAP32[i20 >> 2] | 0;
   } else {
    i5 = ((i21 - 20 + (-i23 | 0) | 0) >>> 0) / 20 & -1;
    i17 = i21;
    i18 = i22;
    while (1) {
     i26 = i18 - 20 | 0;
     i25 = i17 - 20 | 0;
     i24 = i25 | 0;
     i30 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     i24 = i26 | 0;
     i29 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = i30;
     do {
      if ((i29 | 0) != 0) {
       i30 = i29 | 0;
       i24 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
       if ((i24 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i29 | 0);
        break;
       } else {
        HEAP32[i30 >> 2] = i24;
        break;
       }
      }
     } while (0);
     i29 = i17 - 20 + 4 | 0;
     i28 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = 0;
     i29 = i18 - 20 + 4 | 0;
     i27 = HEAP32[i29 >> 2] | 0;
     HEAP32[i29 >> 2] = i28;
     do {
      if ((i27 | 0) != 0) {
       i28 = i27 | 0;
       i29 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
       if ((i29 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i27 | 0);
        break;
       } else {
        HEAP32[i28 >> 2] = i29;
        break;
       }
      }
     } while (0);
     i27 = i18 - 20 + 8 | 0;
     i29 = i17 - 20 + 8 | 0;
     HEAP32[i27 >> 2] = HEAP32[i29 >> 2];
     HEAP8[i27 + 4 | 0] = HEAP8[i29 + 4 | 0] | 0;
     HEAP8[i18 - 20 + 16 | 0] = HEAP8[i17 - 20 + 16 | 0] & 1;
     if ((i25 | 0) == (i11 | 0)) {
      break;
     } else {
      i17 = i25;
      i18 = i26;
     }
    }
    i18 = i22 + (~i5 * 20 & -1) | 0;
    i33 = i18;
    i34 = i18;
   }
   HEAP32[i1 >> 2] = i34;
   HEAP32[i1 + 4 >> 2] = i33;
   STACKTOP = i8;
   return;
  }
 } while (0);
 if ((i14 | 0) == (i13 | 0)) {
  i35 = i15;
  i36 = i16;
 } else {
  i15 = ~(((i14 - 20 + (-i13 | 0) | 0) >>> 0) / 20 & -1);
  i33 = i16;
  i34 = i14;
  while (1) {
   i14 = i33 - 20 | 0;
   i11 = i34 - 20 | 0;
   i23 = i11 | 0;
   i32 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = 0;
   i23 = i14 | 0;
   i31 = HEAP32[i23 >> 2] | 0;
   HEAP32[i23 >> 2] = i32;
   do {
    if ((i31 | 0) != 0) {
     i32 = i31 | 0;
     i23 = (HEAP32[i32 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i31 | 0);
      break;
     } else {
      HEAP32[i32 >> 2] = i23;
      break;
     }
    }
   } while (0);
   i31 = i34 - 20 + 4 | 0;
   i5 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = 0;
   i31 = i33 - 20 + 4 | 0;
   i22 = HEAP32[i31 >> 2] | 0;
   HEAP32[i31 >> 2] = i5;
   do {
    if ((i22 | 0) != 0) {
     i5 = i22 | 0;
     i31 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
     if ((i31 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i22 | 0);
      break;
     } else {
      HEAP32[i5 >> 2] = i31;
      break;
     }
    }
   } while (0);
   i22 = i33 - 20 + 8 | 0;
   i31 = i34 - 20 + 8 | 0;
   HEAP32[i22 >> 2] = HEAP32[i31 >> 2];
   HEAP8[i22 + 4 | 0] = HEAP8[i31 + 4 | 0] | 0;
   HEAP8[i33 - 20 + 16 | 0] = HEAP8[i34 - 20 + 16 | 0] & 1;
   if ((i11 | 0) == (i13 | 0)) {
    break;
   } else {
    i33 = i14;
    i34 = i11;
   }
  }
  i34 = i16 + (i15 * 20 & -1) | 0;
  i35 = i34;
  i36 = i34;
 }
 HEAP32[i1 >> 2] = i35;
 HEAP32[i1 + 4 >> 2] = i36;
 STACKTOP = i8;
 return;
}
function __ZNK7WebCore22CSSLinearGradientValue6equalsERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 if ((HEAP32[i1 + 120 >> 2] | 0) == 0) {
  if ((HEAP32[i2 + 120 >> 2] | 0) != 0) {
   i3 = 0;
   return i3 | 0;
  }
  i4 = HEAP32[i1 + 48 >> 2] | 0;
  i5 = (i4 | 0) == 0;
  i6 = HEAP32[i2 + 48 >> 2] | 0;
  i7 = (i6 | 0) == 0;
  do {
   if (i5 | i7) {
    if (i5 & i7) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i6) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i6 = HEAP32[i1 + 52 >> 2] | 0;
  i4 = (i6 | 0) == 0;
  i7 = HEAP32[i2 + 52 >> 2] | 0;
  i5 = (i7 | 0) == 0;
  do {
   if (i4 | i5) {
    if (i4 & i5) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i7) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i7 = HEAP32[i1 + 56 >> 2] | 0;
  i6 = (i7 | 0) == 0;
  i5 = HEAP32[i2 + 56 >> 2] | 0;
  i4 = (i5 | 0) == 0;
  do {
   if (i6 | i4) {
    if (i6 & i4) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i5) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i5 = HEAP32[i1 + 60 >> 2] | 0;
  i7 = (i5 | 0) == 0;
  i4 = HEAP32[i2 + 60 >> 2] | 0;
  i6 = (i4 | 0) == 0;
  do {
   if (i7 | i6) {
    if (i7 & i6) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i5, i4) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  } while (0);
  i4 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i4 | 0) != (HEAP32[i2 + 72 >> 2] | 0)) {
   i3 = 0;
   return i3 | 0;
  }
  i5 = HEAP32[i1 + 64 >> 2] | 0;
  i6 = HEAP32[i2 + 64 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = 1;
   return i3 | 0;
  } else {
   i8 = 0;
  }
  while (1) {
   i7 = HEAP32[i5 + (i8 * 20 & -1) + 4 >> 2] | 0;
   i9 = (i7 | 0) == 0;
   i10 = HEAP32[i6 + (i8 * 20 & -1) + 4 >> 2] | 0;
   i11 = (i10 | 0) == 0;
   if (i9 | i11) {
    if (!(i9 & i11)) {
     i3 = 0;
     i12 = 93;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i7, i10) | 0)) {
     i3 = 0;
     i12 = 92;
     break;
    }
   }
   i10 = HEAP32[i5 + (i8 * 20 & -1) >> 2] | 0;
   i7 = (i10 | 0) == 0;
   i11 = HEAP32[i6 + (i8 * 20 & -1) >> 2] | 0;
   i9 = (i11 | 0) == 0;
   if (i7 | i9) {
    if (!(i7 & i9)) {
     i3 = 0;
     i12 = 95;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i10, i11) | 0)) {
     i3 = 0;
     i12 = 94;
     break;
    }
   }
   i11 = i8 + 1 | 0;
   if (i11 >>> 0 < i4 >>> 0) {
    i8 = i11;
   } else {
    i3 = 1;
    i12 = 96;
    break;
   }
  }
  if ((i12 | 0) == 92) {
   return i3 | 0;
  } else if ((i12 | 0) == 93) {
   return i3 | 0;
  } else if ((i12 | 0) == 94) {
   return i3 | 0;
  } else if ((i12 | 0) == 95) {
   return i3 | 0;
  } else if ((i12 | 0) == 96) {
   return i3 | 0;
  }
 }
 if (((HEAP8[i2 + 124 | 0] ^ HEAP8[i1 + 124 | 0]) & 1) != 0) {
  i3 = 0;
  return i3 | 0;
 }
 i8 = HEAP32[i1 + 128 >> 2] | 0;
 i4 = HEAP32[i2 + 128 >> 2] | 0;
 i6 = (i4 | 0) == 0;
 if ((i8 | 0) != 0) {
  if (i6) {
   i3 = 0;
   return i3 | 0;
  }
  if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i8, i4) | 0)) {
   i3 = 0;
   return i3 | 0;
  }
  i4 = HEAP32[i1 + 72 >> 2] | 0;
  if ((i4 | 0) != (HEAP32[i2 + 72 >> 2] | 0)) {
   i3 = 0;
   return i3 | 0;
  }
  i8 = HEAP32[i1 + 64 >> 2] | 0;
  i5 = HEAP32[i2 + 64 >> 2] | 0;
  if ((i4 | 0) == 0) {
   i3 = 1;
   return i3 | 0;
  } else {
   i13 = 0;
  }
  while (1) {
   i11 = HEAP32[i8 + (i13 * 20 & -1) + 4 >> 2] | 0;
   i10 = (i11 | 0) == 0;
   i9 = HEAP32[i5 + (i13 * 20 & -1) + 4 >> 2] | 0;
   i7 = (i9 | 0) == 0;
   if (i10 | i7) {
    if (!(i10 & i7)) {
     i3 = 0;
     i12 = 103;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i11, i9) | 0)) {
     i3 = 0;
     i12 = 102;
     break;
    }
   }
   i9 = HEAP32[i8 + (i13 * 20 & -1) >> 2] | 0;
   i11 = (i9 | 0) == 0;
   i7 = HEAP32[i5 + (i13 * 20 & -1) >> 2] | 0;
   i10 = (i7 | 0) == 0;
   if (i11 | i10) {
    if (!(i11 & i10)) {
     i3 = 0;
     i12 = 105;
     break;
    }
   } else {
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i9, i7) | 0)) {
     i3 = 0;
     i12 = 104;
     break;
    }
   }
   i7 = i13 + 1 | 0;
   if (i7 >>> 0 < i4 >>> 0) {
    i13 = i7;
   } else {
    i3 = 1;
    i12 = 106;
    break;
   }
  }
  if ((i12 | 0) == 102) {
   return i3 | 0;
  } else if ((i12 | 0) == 103) {
   return i3 | 0;
  } else if ((i12 | 0) == 104) {
   return i3 | 0;
  } else if ((i12 | 0) == 105) {
   return i3 | 0;
  } else if ((i12 | 0) == 106) {
   return i3 | 0;
  }
 }
 if (!i6) {
  i3 = 0;
  return i3 | 0;
 }
 i6 = HEAP32[i1 + 48 >> 2] | 0;
 i13 = i1 + 52 | 0;
 i4 = HEAP32[i13 >> 2] | 0;
 i5 = (i4 | 0) == 0;
 do {
  if ((i6 | 0) == 0) {
   if (i5) {
    if ((HEAP32[i2 + 48 >> 2] | 0) != 0) {
     i3 = 0;
     return i3 | 0;
    }
    if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
   i8 = HEAP32[i2 + 52 >> 2] | 0;
   if ((i8 | 0) == 0) {
    i3 = 0;
    return i3 | 0;
   }
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i8) | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   if ((HEAP32[i2 + 48 >> 2] | 0) == 0) {
    break;
   } else {
    i3 = 0;
   }
   return i3 | 0;
  } else {
   i8 = HEAP32[i2 + 48 >> 2] | 0;
   i7 = (i8 | 0) == 0;
   if (i5) {
    if (i7) {
     i3 = 0;
     return i3 | 0;
    }
    if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i8) | 0)) {
     i3 = 0;
     return i3 | 0;
    }
    if ((HEAP32[i2 + 52 >> 2] | 0) == 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
   if (i7) {
    i3 = 0;
    return i3 | 0;
   }
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i6, i8) | 0)) {
    i3 = 0;
    return i3 | 0;
   }
   i8 = HEAP32[i13 >> 2] | 0;
   i7 = (i8 | 0) == 0;
   i9 = HEAP32[i2 + 52 >> 2] | 0;
   i10 = (i9 | 0) == 0;
   if (i7 | i10) {
    if (i7 & i10) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   } else {
    if (__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i8, i9) | 0) {
     break;
    } else {
     i3 = 0;
    }
    return i3 | 0;
   }
  }
 } while (0);
 i13 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i13 | 0) != (HEAP32[i2 + 72 >> 2] | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 i6 = HEAP32[i1 + 64 >> 2] | 0;
 i1 = HEAP32[i2 + 64 >> 2] | 0;
 if ((i13 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 } else {
  i14 = 0;
 }
 while (1) {
  i2 = HEAP32[i6 + (i14 * 20 & -1) + 4 >> 2] | 0;
  i5 = (i2 | 0) == 0;
  i4 = HEAP32[i1 + (i14 * 20 & -1) + 4 >> 2] | 0;
  i9 = (i4 | 0) == 0;
  if (i5 | i9) {
   if (!(i5 & i9)) {
    i3 = 0;
    i12 = 79;
    break;
   }
  } else {
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i2, i4) | 0)) {
    i3 = 0;
    i12 = 78;
    break;
   }
  }
  i4 = HEAP32[i6 + (i14 * 20 & -1) >> 2] | 0;
  i2 = (i4 | 0) == 0;
  i9 = HEAP32[i1 + (i14 * 20 & -1) >> 2] | 0;
  i5 = (i9 | 0) == 0;
  if (i2 | i5) {
   if (!(i2 & i5)) {
    i3 = 0;
    i12 = 76;
    break;
   }
  } else {
   if (!(__ZNK7WebCore17CSSPrimitiveValue6equalsERKS0_(i4, i9) | 0)) {
    i3 = 0;
    i12 = 75;
    break;
   }
  }
  i9 = i14 + 1 | 0;
  if (i9 >>> 0 < i13 >>> 0) {
   i14 = i9;
  } else {
   i3 = 1;
   i12 = 77;
   break;
  }
 }
 if ((i12 | 0) == 75) {
  return i3 | 0;
 } else if ((i12 | 0) == 76) {
  return i3 | 0;
 } else if ((i12 | 0) == 77) {
  return i3 | 0;
 } else if ((i12 | 0) == 78) {
  return i3 | 0;
 } else if ((i12 | 0) == 79) {
  return i3 | 0;
 }
 return 0;
}
function __ZNSt3__17__mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_ENS_13move_iteratorIPS2_EESA_S9_EET2_T0_SC_T1_SD_SB_T_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i7 = STACKTOP;
 i8 = i1;
 i1 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i1 >> 2] = HEAP32[i8 >> 2];
 i8 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 i8 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i3 >> 2] = HEAP32[i8 >> 2];
 i8 = i4;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 HEAP32[i4 >> 2] = HEAP32[i8 >> 2];
 i8 = i1 | 0;
 i1 = HEAP32[i8 >> 2] | 0;
 i9 = i2 | 0;
 i2 = HEAP32[i9 >> 2] | 0;
 i10 = i3 | 0;
 i3 = HEAP32[i10 >> 2] | 0;
 i11 = i4 | 0;
 i4 = HEAP32[i11 >> 2] | 0;
 L1 : do {
  if ((i1 | 0) == (i2 | 0)) {
   i12 = i5;
   i13 = i3;
   i14 = i4;
  } else {
   i15 = i5;
   i16 = i1;
   i17 = i2;
   i18 = i3;
   i19 = i4;
   i20 = i5;
   while (1) {
    i21 = i20 + 20 | 0;
    i22 = i16;
    if ((i18 | 0) == (i19 | 0)) {
     break;
    }
    if (FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 3](i18, i16) | 0) {
     i23 = i18 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i23 = i15 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i24;
     do {
      if ((i25 | 0) != 0) {
       i24 = i25 | 0;
       i23 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i25 | 0);
        break;
       } else {
        HEAP32[i24 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i25 = i18 + 4 | 0;
     i23 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i25 = i15 + 4 | 0;
     i24 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = i23;
     do {
      if ((i24 | 0) != 0) {
       i23 = i24 | 0;
       i25 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i24 | 0);
        break;
       } else {
        HEAP32[i23 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i24 = i15 + 8 | 0;
     i25 = i18 + 8 | 0;
     HEAP32[i24 >> 2] = HEAP32[i25 >> 2];
     HEAP8[i24 + 4 | 0] = HEAP8[i25 + 4 | 0] | 0;
     HEAP8[i15 + 16 | 0] = HEAP8[i18 + 16 | 0] & 1;
     i25 = (HEAP32[i10 >> 2] | 0) + 20 | 0;
     HEAP32[i10 >> 2] = i25;
     i26 = HEAP32[i8 >> 2] | 0;
     i27 = i25;
    } else {
     i25 = i16 | 0;
     i24 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     i25 = i15 | 0;
     i23 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = i24;
     do {
      if ((i23 | 0) != 0) {
       i24 = i23 | 0;
       i25 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
       if ((i25 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i23 | 0);
        break;
       } else {
        HEAP32[i24 >> 2] = i25;
        break;
       }
      }
     } while (0);
     i23 = i16 + 4 | 0;
     i25 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = 0;
     i23 = i15 + 4 | 0;
     i24 = HEAP32[i23 >> 2] | 0;
     HEAP32[i23 >> 2] = i25;
     do {
      if ((i24 | 0) != 0) {
       i25 = i24 | 0;
       i23 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
       if ((i23 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i24 | 0);
        break;
       } else {
        HEAP32[i25 >> 2] = i23;
        break;
       }
      }
     } while (0);
     i24 = i15 + 8 | 0;
     i23 = i16 + 8 | 0;
     HEAP32[i24 >> 2] = HEAP32[i23 >> 2];
     HEAP8[i24 + 4 | 0] = HEAP8[i23 + 4 | 0] | 0;
     HEAP8[i15 + 16 | 0] = HEAP8[i16 + 16 | 0] & 1;
     i23 = (HEAP32[i8 >> 2] | 0) + 20 | 0;
     HEAP32[i8 >> 2] = i23;
     i26 = i23;
     i27 = HEAP32[i10 >> 2] | 0;
    }
    i23 = i15 + 20 | 0;
    i24 = HEAP32[i9 >> 2] | 0;
    i25 = HEAP32[i11 >> 2] | 0;
    if ((i26 | 0) == (i24 | 0)) {
     i12 = i23;
     i13 = i27;
     i14 = i25;
     break L1;
    } else {
     i15 = i23;
     i16 = i26;
     i17 = i24;
     i18 = i27;
     i19 = i25;
     i20 = i21;
    }
   }
   if ((i16 | 0) == (i17 | 0)) {
    i28 = i15;
    STACKTOP = i7;
    return i28 | 0;
   }
   i19 = ((i17 - 20 + (-i22 | 0) | 0) >>> 0) / 20 & -1;
   i18 = i16;
   i25 = i15;
   while (1) {
    i24 = i18 | 0;
    i23 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = 0;
    i24 = i25 | 0;
    i29 = HEAP32[i24 >> 2] | 0;
    HEAP32[i24 >> 2] = i23;
    do {
     if ((i29 | 0) != 0) {
      i23 = i29 | 0;
      i24 = (HEAP32[i23 >> 2] | 0) - 1 | 0;
      if ((i24 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i29 | 0);
       break;
      } else {
       HEAP32[i23 >> 2] = i24;
       break;
      }
     }
    } while (0);
    i29 = i18 + 4 | 0;
    i21 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = 0;
    i29 = i25 + 4 | 0;
    i24 = HEAP32[i29 >> 2] | 0;
    HEAP32[i29 >> 2] = i21;
    do {
     if ((i24 | 0) != 0) {
      i21 = i24 | 0;
      i29 = (HEAP32[i21 >> 2] | 0) - 1 | 0;
      if ((i29 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i24 | 0);
       break;
      } else {
       HEAP32[i21 >> 2] = i29;
       break;
      }
     }
    } while (0);
    i24 = i25 + 8 | 0;
    i29 = i18 + 8 | 0;
    HEAP32[i24 >> 2] = HEAP32[i29 >> 2];
    HEAP8[i24 + 4 | 0] = HEAP8[i29 + 4 | 0] | 0;
    HEAP8[i25 + 16 | 0] = HEAP8[i18 + 16 | 0] & 1;
    i29 = i18 + 20 | 0;
    if ((i29 | 0) == (i17 | 0)) {
     break;
    } else {
     i18 = i29;
     i25 = i25 + 20 | 0;
    }
   }
   i28 = i20 + ((i19 + 1 | 0) * 20 & -1) | 0;
   STACKTOP = i7;
   return i28 | 0;
  }
 } while (0);
 if ((i13 | 0) == (i14 | 0)) {
  i28 = i12;
  STACKTOP = i7;
  return i28 | 0;
 }
 i22 = (((i14 - 20 + (-i13 | 0) | 0) >>> 0) / 20 & -1) + 1 | 0;
 i27 = i13;
 i13 = i12;
 while (1) {
  i26 = i27 | 0;
  i11 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = 0;
  i26 = i13 | 0;
  i9 = HEAP32[i26 >> 2] | 0;
  HEAP32[i26 >> 2] = i11;
  do {
   if ((i9 | 0) != 0) {
    i11 = i9 | 0;
    i26 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i26 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i9 | 0);
     break;
    } else {
     HEAP32[i11 >> 2] = i26;
     break;
    }
   }
  } while (0);
  i9 = i27 + 4 | 0;
  i19 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  i9 = i13 + 4 | 0;
  i20 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = i19;
  do {
   if ((i20 | 0) != 0) {
    i19 = i20 | 0;
    i9 = (HEAP32[i19 >> 2] | 0) - 1 | 0;
    if ((i9 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i20 | 0);
     break;
    } else {
     HEAP32[i19 >> 2] = i9;
     break;
    }
   }
  } while (0);
  i20 = i13 + 8 | 0;
  i9 = i27 + 8 | 0;
  HEAP32[i20 >> 2] = HEAP32[i9 >> 2];
  HEAP8[i20 + 4 | 0] = HEAP8[i9 + 4 | 0] | 0;
  HEAP8[i13 + 16 | 0] = HEAP8[i27 + 16 | 0] & 1;
  i9 = i27 + 20 | 0;
  if ((i9 | 0) == (i14 | 0)) {
   break;
  } else {
   i27 = i9;
   i13 = i13 + 20 | 0;
  }
 }
 i28 = i12 + (i22 * 20 & -1) | 0;
 STACKTOP = i7;
 return i28 | 0;
}
function __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0;
 if ((i6 | 0) == 0) {
  return;
 } else {
  i9 = i5;
  i10 = i6;
  i11 = i3;
  i12 = i2;
  i13 = i1;
 }
 L3 : while (1) {
  i1 = i11;
  i2 = i9;
  i14 = i10;
  i15 = i12;
  i3 = i13;
  while (1) {
   if ((i2 | 0) == 0) {
    i16 = 46;
    break L3;
   } else {
    i17 = i2;
    i18 = i3;
   }
   while (1) {
    if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i15, i18) | 0) {
     break;
    }
    i6 = i17 - 1 | 0;
    if ((i6 | 0) == 0) {
     i16 = 48;
     break L3;
    } else {
     i17 = i6;
     i18 = i18 + 20 | 0;
    }
   }
   if (!((i17 | 0) > (i8 | 0) & (i14 | 0) > (i8 | 0))) {
    i16 = 7;
    break L3;
   }
   if ((i17 | 0) < (i14 | 0)) {
    i6 = (i14 | 0) / 2 & -1;
    i5 = i15 + (i6 * 20 & -1) | 0;
    i19 = i18;
    i20 = i18;
    i21 = (i15 - i19 | 0) / 20 & -1;
    L23 : while (1) {
     i22 = i21;
     while (1) {
      if ((i22 | 0) == 0) {
       break L23;
      }
      i23 = (i22 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i5, i20 + (i23 * 20 & -1) | 0) | 0) {
       i22 = i23;
      } else {
       break;
      }
     }
     i20 = i20 + ((i23 + 1 | 0) * 20 & -1) | 0;
     i21 = i22 - 1 - i23 | 0;
    }
    i24 = i6;
    i25 = (i20 - i19 | 0) / 20 & -1;
    i26 = i20;
    i27 = i5;
   } else {
    if ((i17 | 0) == 1) {
     i16 = 16;
     break L3;
    }
    i21 = (i17 | 0) / 2 & -1;
    i28 = i18 + (i21 * 20 & -1) | 0;
    i29 = i15;
    i30 = i15;
    i31 = (i1 - i29 | 0) / 20 & -1;
    L15 : while (1) {
     i32 = i31;
     while (1) {
      if ((i32 | 0) == 0) {
       break L15;
      }
      i33 = (i32 | 0) / 2 & -1;
      if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i30 + (i33 * 20 & -1) | 0, i28) | 0) {
       break;
      } else {
       i32 = i33;
      }
     }
     i30 = i30 + ((i33 + 1 | 0) * 20 & -1) | 0;
     i31 = i32 - 1 - i33 | 0;
    }
    i24 = (i30 - i29 | 0) / 20 & -1;
    i25 = i21;
    i26 = i28;
    i27 = i30;
   }
   i34 = i17 - i25 | 0;
   i35 = i14 - i24 | 0;
   do {
    if ((i26 | 0) == (i15 | 0)) {
     i36 = i27;
    } else {
     if ((i15 | 0) == (i27 | 0)) {
      i36 = i26;
      break;
     }
     i36 = __ZNSt3__116__rotate_forwardIPN7WebCore20CSSGradientColorStopEEET_S4_S4_S4_(i26, i15, i27) | 0;
    }
   } while (0);
   if ((i24 + i25 | 0) >= (i35 + i34 | 0)) {
    break;
   }
   __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i18, i26, i36, i4, i25, i24, i7, i8);
   if ((i14 | 0) == (i24 | 0)) {
    i16 = 51;
    break L3;
   } else {
    i2 = i34;
    i14 = i35;
    i15 = i27;
    i3 = i36;
   }
  }
  __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i36, i27, i11, i4, i34, i35, i7, i8);
  if ((i24 | 0) == 0) {
   i16 = 52;
   break;
  } else {
   i9 = i25;
   i10 = i24;
   i11 = i36;
   i12 = i26;
   i13 = i18;
  }
 }
 if ((i16 | 0) == 7) {
  __ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE(i18, i15, i11, i4, i17, i14, i7);
  return;
 } else if ((i16 | 0) == 48) {
  return;
 } else if ((i16 | 0) == 51) {
  return;
 } else if ((i16 | 0) == 52) {
  return;
 } else if ((i16 | 0) == 16) {
  i7 = i18 | 0;
  i14 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i17 = i18 + 4 | 0;
  i4 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i11 = i18 + 8 | 0;
  i13 = i11;
  i26 = HEAP32[i13 >> 2] | 0;
  i12 = HEAP32[i13 + 4 >> 2] | 0;
  i13 = i18 + 16 | 0;
  i18 = HEAP8[i13] & 1;
  i36 = i15 | 0;
  i24 = HEAP32[i36 >> 2] | 0;
  HEAP32[i36 >> 2] = 0;
  i10 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i24;
  do {
   if ((i10 | 0) != 0) {
    i24 = i10 | 0;
    i7 = (HEAP32[i24 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i10 | 0);
     break;
    } else {
     HEAP32[i24 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i10 = i15 + 4 | 0;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  i24 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = i7;
  do {
   if ((i24 | 0) != 0) {
    i7 = i24 | 0;
    i17 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i24 | 0);
     break;
    } else {
     HEAP32[i7 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i24 = i15 + 8 | 0;
  i17 = i11;
  i11 = i24;
  HEAP32[i17 >> 2] = HEAP32[i11 >> 2];
  HEAP8[i17 + 4 | 0] = HEAP8[i11 + 4 | 0] | 0;
  i11 = i15 + 16 | 0;
  HEAP8[i13] = HEAP8[i11] & 1;
  i13 = HEAP32[i36 >> 2] | 0;
  HEAP32[i36 >> 2] = i14;
  do {
   if ((i13 | 0) != 0) {
    i14 = i13 | 0;
    i36 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i36 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
     break;
    } else {
     HEAP32[i14 >> 2] = i36;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i4;
  do {
   if ((i13 | 0) != 0) {
    i4 = i13 | 0;
    i10 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
     break;
    } else {
     HEAP32[i4 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i13 = i24;
  HEAP32[i13 >> 2] = i26;
  HEAP8[i13 + 4 | 0] = i12;
  HEAP8[i11] = i18;
  return;
 } else if ((i16 | 0) == 46) {
  return;
 }
}
function __ZN7WebCore16CSSGradientValue5imageEPNS_13RenderElementERKNS_7IntSizeE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i6 = i5 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 do {
  if ((HEAP32[i4 >> 2] | 0) >= 1) {
   if ((HEAP32[i4 + 4 >> 2] | 0) < 1) {
    break;
   }
   i13 = HEAP32[i2 + 72 >> 2] | 0;
   L4 : do {
    if ((i13 | 0) == 0) {
     i14 = 10;
    } else {
     i15 = HEAP32[i2 + 64 >> 2] | 0;
     i16 = 0;
     while (1) {
      if ((HEAP8[i15 + (i16 * 20 & -1) + 16 | 0] & 1) != 0) {
       i17 = 0;
       break L4;
      }
      i18 = HEAP32[i15 + (i16 * 20 & -1) >> 2] | 0;
      if ((i18 | 0) != 0) {
       i19 = (HEAP32[i18 + 4 >> 2] | 0) >>> 2 & 127;
       if ((i19 | 0) == 3 | (i19 | 0) == 4 | (i19 | 0) == 108 | (i19 | 0) == 109) {
        i17 = 0;
        break L4;
       }
      }
      i19 = i16 + 1 | 0;
      if (i19 >>> 0 < i13 >>> 0) {
       i16 = i19;
      } else {
       i14 = 10;
       break;
      }
     }
    }
   } while (0);
   L12 : do {
    if ((i14 | 0) == 10) {
     i13 = i2 | 0;
     i16 = HEAP32[i2 + 8 >> 2] | 0;
     L14 : do {
      if ((i16 | 0) != 0) {
       i15 = HEAP32[i2 + 16 >> 2] | 0;
       i19 = i3;
       i18 = i19 + ~(i19 << 15) | 0;
       i19 = (i18 >>> 10 ^ i18) * 9 & -1;
       i18 = i19 >>> 6 ^ i19;
       i19 = i18 + ~(i18 << 11) | 0;
       i18 = i19 >>> 16 ^ i19;
       i19 = i15 & i18;
       i20 = i16 + (i19 << 3) | 0;
       i21 = HEAP32[i20 >> 2] | 0;
       if ((i21 | 0) == (i3 | 0)) {
        i22 = i20;
       } else {
        i20 = (i18 >>> 23) + ~i18 | 0;
        i18 = i20 << 12 ^ i20;
        i20 = i18 >>> 7 ^ i18;
        i18 = i20 << 2 ^ i20;
        i20 = i18 >>> 20 ^ i18 | 1;
        i18 = 0;
        i23 = i19;
        i19 = i21;
        while (1) {
         if ((i19 | 0) == 0) {
          break L14;
         }
         i21 = (i18 | 0) == 0 ? i20 : i18;
         i24 = i21 + i23 & i15;
         i25 = i16 + (i24 << 3) | 0;
         i26 = HEAP32[i25 >> 2] | 0;
         if ((i26 | 0) == (i3 | 0)) {
          i22 = i25;
          break;
         } else {
          i18 = i21;
          i23 = i24;
          i19 = i26;
         }
        }
       }
       if ((i22 | 0) == 0) {
        break;
       }
       i19 = i4;
       i23 = HEAP32[i19 + 4 >> 2] | 0;
       HEAP32[i6 >> 2] = HEAP32[i19 >> 2];
       HEAP32[i6 + 4 >> 2] = i23;
       i23 = __ZN7WebCore22CSSImageGeneratorValue18cachedImageForSizeENS_7IntSizeE(i13, i7) | 0;
       if ((i23 | 0) == 0) {
        i17 = 1;
        break L12;
       }
       HEAP32[i1 >> 2] = i23;
       i19 = i23 + 4 | 0;
       HEAP32[i19 >> 2] = (HEAP32[i19 >> 2] | 0) + 1;
       STACKTOP = i5;
       return;
      }
     } while (0);
     HEAP32[i1 >> 2] = 0;
     STACKTOP = i5;
     return;
    }
   } while (0);
   if ((HEAP32[i2 + 4 >> 2] & 516096 | 0) == 49152) {
    __ZN7WebCore22CSSLinearGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE(i8, i2, i3, i4);
    i13 = i8 | 0;
    i16 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    i27 = i16;
   } else {
    __ZN7WebCore22CSSRadialGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE(i9, i2, i3, i4);
    i16 = i9 | 0;
    i13 = HEAP32[i16 >> 2] | 0;
    HEAP32[i16 >> 2] = 0;
    i27 = i13;
   }
   i13 = (i27 | 0) == 0;
   if (!i13) {
    i16 = i27 | 0;
    HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
   }
   i16 = __ZN3WTF10fastMallocEj(52) | 0;
   i19 = i16;
   __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i19, 0);
   i23 = i16 + 24 | 0;
   HEAP32[i23 >> 2] = 0;
   HEAP32[i16 + 28 >> 2] = 0;
   HEAP32[i16 >> 2] = __ZTVN7WebCore13GradientImageE + 8;
   HEAP32[i16 + 32 >> 2] = i27;
   HEAP32[i16 + 36 >> 2] = 0;
   HEAP32[i16 + 40 >> 2] = 0;
   HEAP32[i16 + 44 >> 2] = 0;
   i18 = i4;
   i15 = i23;
   i23 = HEAP32[i18 + 4 >> 2] | 0;
   HEAP32[i15 >> 2] = HEAP32[i18 >> 2];
   HEAP32[i15 + 4 >> 2] = i23;
   do {
    if (i17) {
     i23 = HEAP32[i18 + 4 >> 2] | 0;
     HEAP32[i10 >> 2] = HEAP32[i18 >> 2];
     HEAP32[i10 + 4 >> 2] = i23;
     i23 = i12 | 0;
     HEAP32[i23 >> 2] = i16;
     if ((i16 | 0) != 0) {
      i15 = i16 + 4 | 0;
      HEAP32[i15 >> 2] = (HEAP32[i15 >> 2] | 0) + 1;
     }
     __ZN7WebCore22CSSImageGeneratorValue22saveCachedImageForSizeENS_7IntSizeEN3WTF10PassRefPtrINS_14GeneratedImageEEE(i2 | 0, i11, i12);
     i15 = HEAP32[i23 >> 2] | 0;
     if ((i15 | 0) == 0) {
      break;
     }
     i23 = i15 + 4 | 0;
     i15 = i23 | 0;
     i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
     if ((i20 | 0) != 0) {
      HEAP32[i15 >> 2] = i20;
      break;
     }
     i20 = i23 - 4 | 0;
     if ((i20 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1](i20);
    }
   } while (0);
   HEAP32[i1 >> 2] = i19;
   if (i13) {
    STACKTOP = i5;
    return;
   }
   i16 = i27 | 0;
   i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i18 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i27);
    __ZN3WTF8fastFreeEPv(i27);
    STACKTOP = i5;
    return;
   } else {
    HEAP32[i16 >> 2] = i18;
    STACKTOP = i5;
    return;
   }
  }
 } while (0);
 HEAP32[i1 >> 2] = 0;
 STACKTOP = i5;
 return;
}
function __ZNSt3__119__merge_move_assignIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_S8_EEvT0_S9_T1_SA_T2_T_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 L1 : do {
  if ((i1 | 0) == (i2 | 0)) {
   i7 = i3;
   i8 = i5;
  } else {
   i9 = i3;
   i10 = i5;
   i11 = i1;
   while (1) {
    if ((i9 | 0) == (i4 | 0)) {
     break;
    }
    if (FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 3](i9, i11) | 0) {
     i12 = i9 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     i12 = i10 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = i13;
     do {
      if ((i14 | 0) != 0) {
       i13 = i14 | 0;
       i12 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
        break;
       } else {
        HEAP32[i13 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i14 = i9 + 4 | 0;
     i12 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     i14 = i10 + 4 | 0;
     i13 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i12;
     do {
      if ((i13 | 0) != 0) {
       i12 = i13 | 0;
       i14 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
        break;
       } else {
        HEAP32[i12 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i13 = i10 + 8 | 0;
     i14 = i9 + 8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
     HEAP8[i13 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
     HEAP8[i10 + 16 | 0] = HEAP8[i9 + 16 | 0] & 1;
     i15 = i11;
     i16 = i9 + 20 | 0;
    } else {
     i14 = i11 | 0;
     i13 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     i14 = i10 | 0;
     i12 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = i13;
     do {
      if ((i12 | 0) != 0) {
       i13 = i12 | 0;
       i14 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
       if ((i14 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i12 | 0);
        break;
       } else {
        HEAP32[i13 >> 2] = i14;
        break;
       }
      }
     } while (0);
     i12 = i11 + 4 | 0;
     i14 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = 0;
     i12 = i10 + 4 | 0;
     i13 = HEAP32[i12 >> 2] | 0;
     HEAP32[i12 >> 2] = i14;
     do {
      if ((i13 | 0) != 0) {
       i14 = i13 | 0;
       i12 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
       if ((i12 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
        break;
       } else {
        HEAP32[i14 >> 2] = i12;
        break;
       }
      }
     } while (0);
     i13 = i10 + 8 | 0;
     i12 = i11 + 8 | 0;
     HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
     HEAP8[i13 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
     HEAP8[i10 + 16 | 0] = HEAP8[i11 + 16 | 0] & 1;
     i15 = i11 + 20 | 0;
     i16 = i9;
    }
    i12 = i10 + 20 | 0;
    if ((i15 | 0) == (i2 | 0)) {
     i7 = i16;
     i8 = i12;
     break L1;
    } else {
     i9 = i16;
     i10 = i12;
     i11 = i15;
    }
   }
   if ((i11 | 0) == (i2 | 0)) {
    return;
   } else {
    i17 = i10;
    i18 = i11;
   }
   while (1) {
    i9 = i18 | 0;
    i12 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    i9 = i17 | 0;
    i13 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = i12;
    do {
     if ((i13 | 0) != 0) {
      i12 = i13 | 0;
      i9 = (HEAP32[i12 >> 2] | 0) - 1 | 0;
      if ((i9 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
       break;
      } else {
       HEAP32[i12 >> 2] = i9;
       break;
      }
     }
    } while (0);
    i13 = i18 + 4 | 0;
    i9 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    i13 = i17 + 4 | 0;
    i12 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i9;
    do {
     if ((i12 | 0) != 0) {
      i9 = i12 | 0;
      i13 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i12 | 0);
       break;
      } else {
       HEAP32[i9 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i12 = i17 + 8 | 0;
    i13 = i18 + 8 | 0;
    HEAP32[i12 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i12 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    HEAP8[i17 + 16 | 0] = HEAP8[i18 + 16 | 0] & 1;
    i13 = i18 + 20 | 0;
    if ((i13 | 0) == (i2 | 0)) {
     break;
    } else {
     i17 = i17 + 20 | 0;
     i18 = i13;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i4 | 0)) {
  return;
 } else {
  i19 = i7;
  i20 = i8;
 }
 while (1) {
  i8 = i19 | 0;
  i7 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i8 = i20 | 0;
  i18 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i7;
  do {
   if ((i18 | 0) != 0) {
    i7 = i18 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i18 | 0);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i18 = i19 + 4 | 0;
  i8 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  i18 = i20 + 4 | 0;
  i7 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = i8;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    i18 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i8 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i7 = i20 + 8 | 0;
  i18 = i19 + 8 | 0;
  HEAP32[i7 >> 2] = HEAP32[i18 >> 2];
  HEAP8[i7 + 4 | 0] = HEAP8[i18 + 4 | 0] | 0;
  HEAP8[i20 + 16 | 0] = HEAP8[i19 + 16 | 0] & 1;
  i18 = i19 + 20 | 0;
  if ((i18 | 0) == (i4 | 0)) {
   break;
  } else {
   i19 = i18;
   i20 = i20 + 20 | 0;
  }
 }
 return;
}
function __ZNSt3__116__rotate_forwardIPN7WebCore20CSSGradientColorStopEEET_S4_S4_S4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = i1;
 i1 = i2;
 i5 = i2;
 while (1) {
  i2 = i4 | 0;
  i6 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  i7 = i4 + 4 | 0;
  i8 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i9 = i4 + 8 | 0;
  i10 = i9;
  i11 = HEAP32[i10 >> 2] | 0;
  i12 = HEAP32[i10 + 4 >> 2] | 0;
  i10 = i4 + 16 | 0;
  i13 = HEAP8[i10] & 1;
  i14 = i1 | 0;
  i15 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  i16 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = i15;
  do {
   if ((i16 | 0) != 0) {
    i15 = i16 | 0;
    i2 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i2 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i16 | 0);
     break;
    } else {
     HEAP32[i15 >> 2] = i2;
     break;
    }
   }
  } while (0);
  i16 = i1 + 4 | 0;
  i2 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = 0;
  i15 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = i2;
  do {
   if ((i15 | 0) != 0) {
    i2 = i15 | 0;
    i17 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i15 | 0);
     break;
    } else {
     HEAP32[i2 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i15 = i1 + 8 | 0;
  i7 = i9;
  i17 = i15;
  HEAP32[i7 >> 2] = HEAP32[i17 >> 2];
  HEAP8[i7 + 4 | 0] = HEAP8[i17 + 4 | 0] | 0;
  i17 = i1 + 16 | 0;
  HEAP8[i10] = HEAP8[i17] & 1;
  i7 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = i6;
  do {
   if ((i7 | 0) != 0) {
    i2 = i7 | 0;
    i18 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i2 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i8;
  do {
   if ((i7 | 0) != 0) {
    i6 = i7 | 0;
    i14 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i14 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i6 >> 2] = i14;
     break;
    }
   }
  } while (0);
  i7 = i15;
  HEAP32[i7 >> 2] = i11;
  HEAP8[i7 + 4 | 0] = i12;
  HEAP8[i17] = i13;
  i19 = i4 + 20 | 0;
  i7 = i1 + 20 | 0;
  i20 = (i19 | 0) == (i5 | 0);
  if ((i7 | 0) == (i3 | 0)) {
   break;
  }
  i4 = i19;
  i1 = i7;
  i5 = i20 ? i7 : i5;
 }
 if (i20) {
  return i19 | 0;
 } else {
  i21 = i19;
  i22 = i5;
  i23 = i5;
 }
 L31 : while (1) {
  i5 = i21;
  i20 = i22;
  while (1) {
   i1 = i5 | 0;
   i4 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = 0;
   i7 = i5 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   i16 = i5 + 8 | 0;
   i14 = i16;
   i6 = HEAP32[i14 >> 2] | 0;
   i10 = HEAP32[i14 + 4 >> 2] | 0;
   i14 = i5 + 16 | 0;
   i9 = HEAP8[i14] & 1;
   i18 = i20 | 0;
   i2 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = 0;
   i24 = HEAP32[i1 >> 2] | 0;
   HEAP32[i1 >> 2] = i2;
   do {
    if ((i24 | 0) != 0) {
     i2 = i24 | 0;
     i1 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i24 | 0);
      break;
     } else {
      HEAP32[i2 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i24 = i20 + 4 | 0;
   i1 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i2 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = i1;
   do {
    if ((i2 | 0) != 0) {
     i1 = i2 | 0;
     i25 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i25 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i2 | 0);
      break;
     } else {
      HEAP32[i1 >> 2] = i25;
      break;
     }
    }
   } while (0);
   i2 = i20 + 8 | 0;
   i7 = i16;
   i25 = i2;
   HEAP32[i7 >> 2] = HEAP32[i25 >> 2];
   HEAP8[i7 + 4 | 0] = HEAP8[i25 + 4 | 0] | 0;
   i25 = i20 + 16 | 0;
   HEAP8[i14] = HEAP8[i25] & 1;
   i7 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i4;
   do {
    if ((i7 | 0) != 0) {
     i1 = i7 | 0;
     i26 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i26 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
      break;
     } else {
      HEAP32[i1 >> 2] = i26;
      break;
     }
    }
   } while (0);
   i7 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = i8;
   do {
    if ((i7 | 0) != 0) {
     i4 = i7 | 0;
     i18 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
      break;
     } else {
      HEAP32[i4 >> 2] = i18;
      break;
     }
    }
   } while (0);
   i7 = i2;
   HEAP32[i7 >> 2] = i6;
   HEAP8[i7 + 4 | 0] = i10;
   HEAP8[i25] = i9;
   i27 = i5 + 20 | 0;
   i28 = i20 + 20 | 0;
   i29 = (i27 | 0) == (i23 | 0);
   if ((i28 | 0) != (i3 | 0)) {
    break;
   }
   if (i29) {
    break L31;
   } else {
    i5 = i27;
    i20 = i23;
   }
  }
  i21 = i27;
  i22 = i28;
  i23 = i29 ? i28 : i23;
 }
 return i19 | 0;
}
function __ZNSt3__121__insertion_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_PNS_15iterator_traitsIS9_E10value_typeET_(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((i1 | 0) == (i2 | 0)) {
  return;
 }
 if ((i3 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i1 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i3 >> 2] = i7;
  i7 = i1 + 4 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  HEAP32[i3 + 4 >> 2] = i6;
  i6 = i1 + 8 | 0;
  i7 = i3 + 8 | 0;
  i8 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i7 + 4 >> 2] = i8;
  HEAP8[i3 + 16 | 0] = HEAP8[i1 + 16 | 0] & 1;
  i5 = i3;
 }
 i8 = i1 + 20 | 0;
 if ((i8 | 0) == (i2 | 0)) {
  return;
 } else {
  i9 = i1;
  i10 = i5;
  i11 = i8;
 }
 while (1) {
  i8 = i10 + 20 | 0;
  i5 = (i8 | 0) == 0;
  do {
   if (FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i11, i10) | 0) {
    if (!i5) {
     i1 = i10 | 0;
     i7 = HEAP32[i1 >> 2] | 0;
     HEAP32[i1 >> 2] = 0;
     HEAP32[i8 >> 2] = i7;
     i7 = i10 + 4 | 0;
     i1 = HEAP32[i7 >> 2] | 0;
     HEAP32[i7 >> 2] = 0;
     HEAP32[i10 + 24 >> 2] = i1;
     i1 = i10 + 8 | 0;
     i7 = i10 + 28 | 0;
     i6 = HEAP32[i1 + 4 >> 2] | 0;
     HEAP32[i7 >> 2] = HEAP32[i1 >> 2];
     HEAP32[i7 + 4 >> 2] = i6;
     HEAP8[i10 + 36 | 0] = HEAP8[i10 + 16 | 0] & 1;
    }
    L16 : do {
     if ((i10 | 0) == (i3 | 0)) {
      i12 = i3;
     } else {
      i6 = i10;
      while (1) {
       i7 = i6 - 20 | 0;
       if (!(FUNCTION_TABLE_iii[HEAP32[i4 >> 2] & 3](i11, i7) | 0)) {
        i12 = i6;
        break L16;
       }
       i1 = i7 | 0;
       i13 = HEAP32[i1 >> 2] | 0;
       HEAP32[i1 >> 2] = 0;
       i1 = i6 | 0;
       i14 = HEAP32[i1 >> 2] | 0;
       HEAP32[i1 >> 2] = i13;
       do {
        if ((i14 | 0) != 0) {
         i13 = i14 | 0;
         i1 = (HEAP32[i13 >> 2] | 0) - 1 | 0;
         if ((i1 | 0) == 0) {
          __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
          break;
         } else {
          HEAP32[i13 >> 2] = i1;
          break;
         }
        }
       } while (0);
       i14 = i6 - 20 + 4 | 0;
       i1 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = 0;
       i14 = i6 + 4 | 0;
       i13 = HEAP32[i14 >> 2] | 0;
       HEAP32[i14 >> 2] = i1;
       do {
        if ((i13 | 0) != 0) {
         i1 = i13 | 0;
         i14 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
         if ((i14 | 0) == 0) {
          __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
          break;
         } else {
          HEAP32[i1 >> 2] = i14;
          break;
         }
        }
       } while (0);
       i13 = i6 + 8 | 0;
       i14 = i6 - 20 + 8 | 0;
       HEAP32[i13 >> 2] = HEAP32[i14 >> 2];
       HEAP8[i13 + 4 | 0] = HEAP8[i14 + 4 | 0] | 0;
       HEAP8[i6 + 16 | 0] = HEAP8[i6 - 20 + 16 | 0] & 1;
       if ((i7 | 0) == (i3 | 0)) {
        i12 = i3;
        break;
       } else {
        i6 = i7;
       }
      }
     }
    } while (0);
    i6 = i11 | 0;
    i14 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = 0;
    i6 = i12 | 0;
    i13 = HEAP32[i6 >> 2] | 0;
    HEAP32[i6 >> 2] = i14;
    do {
     if ((i13 | 0) != 0) {
      i14 = i13 | 0;
      i6 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
      if ((i6 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
       break;
      } else {
       HEAP32[i14 >> 2] = i6;
       break;
      }
     }
    } while (0);
    i13 = i9 + 24 | 0;
    i6 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    i13 = i12 + 4 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = i6;
    do {
     if ((i14 | 0) != 0) {
      i6 = i14 | 0;
      i13 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
      if ((i13 | 0) == 0) {
       __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
       break;
      } else {
       HEAP32[i6 >> 2] = i13;
       break;
      }
     }
    } while (0);
    i14 = i12 + 8 | 0;
    i13 = i9 + 28 | 0;
    HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
    HEAP8[i14 + 4 | 0] = HEAP8[i13 + 4 | 0] | 0;
    HEAP8[i12 + 16 | 0] = HEAP8[i9 + 36 | 0] & 1;
    i15 = i8;
   } else {
    if (i5) {
     i15 = 0;
     break;
    }
    i13 = i11 | 0;
    i14 = HEAP32[i13 >> 2] | 0;
    HEAP32[i13 >> 2] = 0;
    HEAP32[i8 >> 2] = i14;
    i14 = i9 + 24 | 0;
    i13 = HEAP32[i14 >> 2] | 0;
    HEAP32[i14 >> 2] = 0;
    HEAP32[i10 + 24 >> 2] = i13;
    i13 = i9 + 28 | 0;
    i14 = i10 + 28 | 0;
    i6 = HEAP32[i13 + 4 >> 2] | 0;
    HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
    HEAP32[i14 + 4 >> 2] = i6;
    HEAP8[i10 + 36 | 0] = HEAP8[i9 + 36 | 0] & 1;
    i15 = i8;
   }
  } while (0);
  i8 = i11 + 20 | 0;
  if ((i8 | 0) == (i2 | 0)) {
   break;
  } else {
   i9 = i11;
   i10 = i15;
   i11 = i8;
  }
 }
 return;
}
function __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0;
 if ((i4 | 0) == 0 | (i4 | 0) == 1) {
  return;
 } else if ((i4 | 0) == 2) {
  i7 = i2 - 20 | 0;
  if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i7, i1) | 0)) {
   return;
  }
  i8 = i1 | 0;
  i9 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i10 = i1 + 4 | 0;
  i11 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = 0;
  i12 = i1 + 8 | 0;
  i13 = i12;
  i14 = HEAP32[i13 >> 2] | 0;
  i15 = HEAP32[i13 + 4 >> 2] | 0;
  i13 = i1 + 16 | 0;
  i16 = HEAP8[i13] & 1;
  i17 = i7 | 0;
  i7 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = 0;
  i18 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = i7;
  do {
   if ((i18 | 0) != 0) {
    i7 = i18 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i18 | 0);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i18 = i2 - 20 + 4 | 0;
  i8 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = 0;
  i7 = HEAP32[i10 >> 2] | 0;
  HEAP32[i10 >> 2] = i8;
  do {
   if ((i7 | 0) != 0) {
    i8 = i7 | 0;
    i10 = (HEAP32[i8 >> 2] | 0) - 1 | 0;
    if ((i10 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i8 >> 2] = i10;
     break;
    }
   }
  } while (0);
  i7 = i2 - 20 + 8 | 0;
  i10 = i12;
  i12 = i7;
  HEAP32[i10 >> 2] = HEAP32[i12 >> 2];
  HEAP8[i10 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
  i12 = i2 - 20 + 16 | 0;
  HEAP8[i13] = HEAP8[i12] & 1;
  i13 = HEAP32[i17 >> 2] | 0;
  HEAP32[i17 >> 2] = i9;
  do {
   if ((i13 | 0) != 0) {
    i9 = i13 | 0;
    i17 = (HEAP32[i9 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
     break;
    } else {
     HEAP32[i9 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i13 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = i11;
  do {
   if ((i13 | 0) != 0) {
    i11 = i13 | 0;
    i18 = (HEAP32[i11 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i13 | 0);
     break;
    } else {
     HEAP32[i11 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i13 = i7;
  HEAP32[i13 >> 2] = i14;
  HEAP8[i13 + 4 | 0] = i15;
  HEAP8[i12] = i16;
  return;
 } else {
  if ((i4 | 0) < 1) {
   __ZNSt3__116__insertion_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_(i1, i2, i3);
   return;
  }
  i16 = (i4 | 0) / 2 & -1;
  i12 = i1 + (i16 * 20 & -1) | 0;
  if ((i4 | 0) > (i6 | 0)) {
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i12, i3, i16, i5, i6);
   i15 = i4 - i16 | 0;
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i12, i2, i3, i15, i5, i6);
   __ZNSt3__115__inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi(i1, i12, i2, i3, i16, i15, i5, i6);
   return;
  }
  __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i1, i12, i3, i16, i5);
  i6 = i5 + (i16 * 20 & -1) | 0;
  __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i12, i2, i3, i4 - i16 | 0, i6);
  __ZNSt3__119__merge_move_assignIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_S8_EEvT0_S9_T1_SA_T2_T_(i5, i6, i6, i5 + (i4 * 20 & -1) | 0, i1, i3);
  if ((i5 | 0) == 0 | (i4 | 0) == 0) {
   return;
  } else {
   i19 = 0;
   i20 = i5;
  }
  while (1) {
   i5 = HEAP32[i20 + 4 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i3 = i5 | 0;
     i1 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
     if ((i1 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
      break;
     } else {
      HEAP32[i3 >> 2] = i1;
      break;
     }
    }
   } while (0);
   i5 = HEAP32[i20 >> 2] | 0;
   do {
    if ((i5 | 0) != 0) {
     i1 = i5 | 0;
     i3 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
     if ((i3 | 0) == 0) {
      __ZN7WebCore8CSSValue7destroyEv(i5 | 0);
      break;
     } else {
      HEAP32[i1 >> 2] = i3;
      break;
     }
    }
   } while (0);
   i5 = i19 + 1 | 0;
   if (i5 >>> 0 < i4 >>> 0) {
    i19 = i5;
    i20 = i20 + 20 | 0;
   } else {
    break;
   }
  }
  return;
 }
}
function __ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0;
 i8 = STACKTOP;
 i9 = i1;
 i10 = i2;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
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
 STACKTOP = STACKTOP + 4 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 i21 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i5 | 0) > (i6 | 0)) {
  if ((i2 | 0) == (i3 | 0)) {
   i22 = 0;
   i23 = i7;
  } else {
   i6 = (((i3 - 20 + (-i10 | 0) | 0) >>> 0) / 20 & -1) + 1 | 0;
   i10 = i7;
   i5 = i2;
   while (1) {
    if ((i10 | 0) != 0) {
     i24 = i5 | 0;
     i25 = HEAP32[i24 >> 2] | 0;
     HEAP32[i24 >> 2] = 0;
     HEAP32[i10 >> 2] = i25;
     i25 = i5 + 4 | 0;
     i24 = HEAP32[i25 >> 2] | 0;
     HEAP32[i25 >> 2] = 0;
     HEAP32[i10 + 4 >> 2] = i24;
     i24 = i5 + 8 | 0;
     i25 = i10 + 8 | 0;
     i26 = HEAP32[i24 + 4 >> 2] | 0;
     HEAP32[i25 >> 2] = HEAP32[i24 >> 2];
     HEAP32[i25 + 4 >> 2] = i26;
     HEAP8[i10 + 16 | 0] = HEAP8[i5 + 16 | 0] & 1;
    }
    i26 = i5 + 20 | 0;
    if ((i26 | 0) == (i3 | 0)) {
     break;
    } else {
     i10 = i10 + 20 | 0;
     i5 = i26;
    }
   }
   i22 = i6;
   i23 = i7 + (i6 * 20 & -1) | 0;
  }
  HEAP32[i15 >> 2] = i2;
  HEAP32[i15 + 4 >> 2] = i2;
  HEAP32[i16 >> 2] = i1;
  HEAP32[i16 + 4 >> 2] = i1;
  HEAP32[i17 >> 2] = i23;
  HEAP32[i17 + 4 >> 2] = i23;
  HEAP32[i18 >> 2] = i7;
  HEAP32[i18 + 4 >> 2] = i7;
  HEAP32[i19 >> 2] = i3;
  HEAP32[i19 + 4 >> 2] = i3;
  HEAP32[i20 >> 2] = i4;
  __ZNSt3__17__mergeINS_8__negateIRPFbRKN7WebCore20CSSGradientColorStopES5_EEENS_13move_iteratorINS_16reverse_iteratorIPS3_EEEESE_SD_EET2_T0_SG_T1_SH_SF_T_(i21, i15, i16, i17, i18, i19, i20);
  i27 = i22;
 } else {
  if ((i1 | 0) == (i2 | 0)) {
   i28 = 0;
   i29 = i7;
  } else {
   i22 = (((i2 - 20 + (-i9 | 0) | 0) >>> 0) / 20 & -1) + 1 | 0;
   i9 = i7;
   i20 = i1;
   while (1) {
    if ((i9 | 0) != 0) {
     i19 = i20 | 0;
     i18 = HEAP32[i19 >> 2] | 0;
     HEAP32[i19 >> 2] = 0;
     HEAP32[i9 >> 2] = i18;
     i18 = i20 + 4 | 0;
     i19 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     HEAP32[i9 + 4 >> 2] = i19;
     i19 = i20 + 8 | 0;
     i18 = i9 + 8 | 0;
     i17 = HEAP32[i19 + 4 >> 2] | 0;
     HEAP32[i18 >> 2] = HEAP32[i19 >> 2];
     HEAP32[i18 + 4 >> 2] = i17;
     HEAP8[i9 + 16 | 0] = HEAP8[i20 + 16 | 0] & 1;
    }
    i17 = i20 + 20 | 0;
    if ((i17 | 0) == (i2 | 0)) {
     break;
    } else {
     i9 = i9 + 20 | 0;
     i20 = i17;
    }
   }
   i28 = i22;
   i29 = i7 + (i22 * 20 & -1) | 0;
  }
  HEAP32[i11 >> 2] = i7;
  HEAP32[i12 >> 2] = i29;
  HEAP32[i13 >> 2] = i2;
  HEAP32[i14 >> 2] = i3;
  __ZNSt3__17__mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_ENS_13move_iteratorIPS2_EESA_S9_EET2_T0_SC_T1_SD_SB_T_(i11, i12, i13, i14, i1, i4) | 0;
  i27 = i28;
 }
 if ((i7 | 0) == 0 | (i27 | 0) == 0) {
  STACKTOP = i8;
  return;
 } else {
  i30 = 0;
  i31 = i7;
 }
 while (1) {
  i7 = HEAP32[i31 + 4 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i28 = i7 | 0;
    i4 = (HEAP32[i28 >> 2] | 0) - 1 | 0;
    if ((i4 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i28 >> 2] = i4;
     break;
    }
   }
  } while (0);
  i7 = HEAP32[i31 >> 2] | 0;
  do {
   if ((i7 | 0) != 0) {
    i4 = i7 | 0;
    i28 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
    if ((i28 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i7 | 0);
     break;
    } else {
     HEAP32[i4 >> 2] = i28;
     break;
    }
   }
  } while (0);
  i7 = i30 + 1 | 0;
  if (i7 >>> 0 < i27 >>> 0) {
   i30 = i7;
   i31 = i31 + 20 | 0;
  } else {
   break;
  }
 }
 STACKTOP = i8;
 return;
}
function __ZNSt3__116__insertion_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i5 = i4 | 0;
 if ((i1 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 i6 = i1 + 20 | 0;
 if ((i6 | 0) == (i2 | 0)) {
  STACKTOP = i4;
  return;
 }
 i7 = i5 | 0;
 i8 = i5 + 4 | 0;
 i9 = i5 + 8 | 0;
 i10 = i9;
 i11 = i5 + 16 | 0;
 i12 = i9;
 i9 = i1;
 i13 = i6;
 while (1) {
  i6 = i13 | 0;
  i14 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i7 >> 2] = i14;
  i14 = i9 + 24 | 0;
  i6 = HEAP32[i14 >> 2] | 0;
  HEAP32[i14 >> 2] = 0;
  HEAP32[i8 >> 2] = i6;
  i6 = i9 + 28 | 0;
  i14 = HEAP32[i6 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i6 >> 2];
  HEAP32[i10 + 4 >> 2] = i14;
  HEAP8[i11] = HEAP8[i9 + 36 | 0] & 1;
  L9 : do {
   if ((i13 | 0) == (i1 | 0)) {
    i15 = i1;
   } else {
    i14 = i13;
    while (1) {
     i6 = i14 - 20 | 0;
     if (!(FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i5, i6) | 0)) {
      i15 = i14;
      break L9;
     }
     i16 = i6 | 0;
     i17 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = 0;
     i16 = i14 | 0;
     i18 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i17;
     do {
      if ((i18 | 0) != 0) {
       i17 = i18 | 0;
       i16 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
       if ((i16 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i18 | 0);
        break;
       } else {
        HEAP32[i17 >> 2] = i16;
        break;
       }
      }
     } while (0);
     i18 = i14 - 20 + 4 | 0;
     i16 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = 0;
     i18 = i14 + 4 | 0;
     i17 = HEAP32[i18 >> 2] | 0;
     HEAP32[i18 >> 2] = i16;
     do {
      if ((i17 | 0) != 0) {
       i16 = i17 | 0;
       i18 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
       if ((i18 | 0) == 0) {
        __ZN7WebCore8CSSValue7destroyEv(i17 | 0);
        break;
       } else {
        HEAP32[i16 >> 2] = i18;
        break;
       }
      }
     } while (0);
     i17 = i14 + 8 | 0;
     i18 = i14 - 20 + 8 | 0;
     HEAP32[i17 >> 2] = HEAP32[i18 >> 2];
     HEAP8[i17 + 4 | 0] = HEAP8[i18 + 4 | 0] | 0;
     HEAP8[i14 + 16 | 0] = HEAP8[i14 - 20 + 16 | 0] & 1;
     if ((i6 | 0) == (i1 | 0)) {
      i15 = i1;
      break;
     } else {
      i14 = i6;
     }
    }
   }
  } while (0);
  i14 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  i18 = i15 | 0;
  i17 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = i14;
  do {
   if ((i17 | 0) != 0) {
    i14 = i17 | 0;
    i18 = (HEAP32[i14 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i17 | 0);
     break;
    } else {
     HEAP32[i14 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i17 = HEAP32[i8 >> 2] | 0;
  HEAP32[i8 >> 2] = 0;
  i18 = i15 + 4 | 0;
  i14 = HEAP32[i18 >> 2] | 0;
  HEAP32[i18 >> 2] = i17;
  do {
   if ((i14 | 0) != 0) {
    i17 = i14 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i14 = i15 + 8 | 0;
  HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
  HEAP8[i14 + 4 | 0] = HEAP8[i12 + 4 | 0] | 0;
  HEAP8[i15 + 16 | 0] = HEAP8[i11] & 1;
  i14 = HEAP32[i8 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i18 = i14 | 0;
    i17 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
    if ((i17 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
     break;
    } else {
     HEAP32[i18 >> 2] = i17;
     break;
    }
   }
  } while (0);
  i14 = HEAP32[i7 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i17 = i14 | 0;
    i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
    if ((i18 | 0) == 0) {
     __ZN7WebCore8CSSValue7destroyEv(i14 | 0);
     break;
    } else {
     HEAP32[i17 >> 2] = i18;
     break;
    }
   }
  } while (0);
  i14 = i13 + 20 | 0;
  if ((i14 | 0) == (i2 | 0)) {
   break;
  } else {
   i9 = i13;
   i13 = i14;
  }
 }
 STACKTOP = i4;
 return;
}
function __ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 if ((i4 | 0) == 2) {
  i6 = i2 - 20 | 0;
  i7 = (i5 | 0) == 0;
  if (FUNCTION_TABLE_iii[HEAP32[i3 >> 2] & 3](i6, i1) | 0) {
   if (!i7) {
    i8 = i6 | 0;
    i9 = HEAP32[i8 >> 2] | 0;
    HEAP32[i8 >> 2] = 0;
    HEAP32[i5 >> 2] = i9;
    i9 = i2 - 20 + 4 | 0;
    i8 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = i8;
    i8 = i2 - 20 + 8 | 0;
    i9 = i5 + 8 | 0;
    i10 = HEAP32[i8 + 4 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i8 >> 2];
    HEAP32[i9 + 4 >> 2] = i10;
    HEAP8[i5 + 16 | 0] = HEAP8[i2 - 20 + 16 | 0] & 1;
   }
   i10 = i5 + 20 | 0;
   if ((i10 | 0) == 0) {
    return;
   }
   i9 = i1 | 0;
   i8 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i10 >> 2] = i8;
   i8 = i1 + 4 | 0;
   i10 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i5 + 24 >> 2] = i10;
   i10 = i1 + 8 | 0;
   i8 = i5 + 28 | 0;
   i9 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i10 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAP8[i5 + 36 | 0] = HEAP8[i1 + 16 | 0] & 1;
   return;
  } else {
   if (!i7) {
    i7 = i1 | 0;
    i9 = HEAP32[i7 >> 2] | 0;
    HEAP32[i7 >> 2] = 0;
    HEAP32[i5 >> 2] = i9;
    i9 = i1 + 4 | 0;
    i7 = HEAP32[i9 >> 2] | 0;
    HEAP32[i9 >> 2] = 0;
    HEAP32[i5 + 4 >> 2] = i7;
    i7 = i1 + 8 | 0;
    i9 = i5 + 8 | 0;
    i8 = HEAP32[i7 + 4 >> 2] | 0;
    HEAP32[i9 >> 2] = HEAP32[i7 >> 2];
    HEAP32[i9 + 4 >> 2] = i8;
    HEAP8[i5 + 16 | 0] = HEAP8[i1 + 16 | 0] & 1;
   }
   i8 = i5 + 20 | 0;
   if ((i8 | 0) == 0) {
    return;
   }
   i9 = i6 | 0;
   i6 = HEAP32[i9 >> 2] | 0;
   HEAP32[i9 >> 2] = 0;
   HEAP32[i8 >> 2] = i6;
   i6 = i2 - 20 + 4 | 0;
   i8 = HEAP32[i6 >> 2] | 0;
   HEAP32[i6 >> 2] = 0;
   HEAP32[i5 + 24 >> 2] = i8;
   i8 = i2 - 20 + 8 | 0;
   i6 = i5 + 28 | 0;
   i9 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i6 + 4 >> 2] = i9;
   HEAP8[i5 + 36 | 0] = HEAP8[i2 - 20 + 16 | 0] & 1;
   return;
  }
 } else if ((i4 | 0) == 1) {
  if ((i5 | 0) == 0) {
   return;
  }
  i9 = i1 | 0;
  i6 = HEAP32[i9 >> 2] | 0;
  HEAP32[i9 >> 2] = 0;
  HEAP32[i5 >> 2] = i6;
  i6 = i1 + 4 | 0;
  i9 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  HEAP32[i5 + 4 >> 2] = i9;
  i9 = i1 + 8 | 0;
  i6 = i5 + 8 | 0;
  i8 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i6 + 4 >> 2] = i8;
  HEAP8[i5 + 16 | 0] = HEAP8[i1 + 16 | 0] & 1;
  return;
 } else if ((i4 | 0) == 0) {
  return;
 } else {
  if ((i4 | 0) < 9) {
   __ZNSt3__121__insertion_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_PNS_15iterator_traitsIS9_E10value_typeET_(i1, i2, i5, i3);
   return;
  } else {
   i8 = (i4 | 0) / 2 & -1;
   i6 = i1 + (i8 * 20 & -1) | 0;
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i1, i6, i3, i8, i5, i8);
   i9 = i4 - i8 | 0;
   __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i6, i2, i3, i9, i5 + (i8 * 20 & -1) | 0, i9);
   __ZNSt3__122__merge_move_constructIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_EEvT0_S9_T1_SA_PNS_15iterator_traitsIS9_E10value_typeET_(i1, i6, i6, i2, i5, i3);
   return;
  }
 }
}
function __ZNSt3__122__merge_move_constructIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_EEvT0_S9_T1_SA_PNS_15iterator_traitsIS9_E10value_typeET_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0;
 L1 : do {
  if ((i1 | 0) == (i2 | 0)) {
   i7 = i3;
   i8 = i5;
  } else {
   i9 = i1;
   i10 = i3;
   i11 = i5;
   while (1) {
    if ((i10 | 0) == (i4 | 0)) {
     break;
    }
    i12 = (i11 | 0) == 0;
    if (FUNCTION_TABLE_iii[HEAP32[i6 >> 2] & 3](i10, i9) | 0) {
     if (!i12) {
      i13 = i10 | 0;
      i14 = HEAP32[i13 >> 2] | 0;
      HEAP32[i13 >> 2] = 0;
      HEAP32[i11 >> 2] = i14;
      i14 = i10 + 4 | 0;
      i13 = HEAP32[i14 >> 2] | 0;
      HEAP32[i14 >> 2] = 0;
      HEAP32[i11 + 4 >> 2] = i13;
      i13 = i10 + 8 | 0;
      i14 = i11 + 8 | 0;
      i15 = HEAP32[i13 + 4 >> 2] | 0;
      HEAP32[i14 >> 2] = HEAP32[i13 >> 2];
      HEAP32[i14 + 4 >> 2] = i15;
      HEAP8[i11 + 16 | 0] = HEAP8[i10 + 16 | 0] & 1;
     }
     i16 = i10 + 20 | 0;
     i17 = i9;
    } else {
     if (!i12) {
      i12 = i9 | 0;
      i15 = HEAP32[i12 >> 2] | 0;
      HEAP32[i12 >> 2] = 0;
      HEAP32[i11 >> 2] = i15;
      i15 = i9 + 4 | 0;
      i12 = HEAP32[i15 >> 2] | 0;
      HEAP32[i15 >> 2] = 0;
      HEAP32[i11 + 4 >> 2] = i12;
      i12 = i9 + 8 | 0;
      i15 = i11 + 8 | 0;
      i14 = HEAP32[i12 + 4 >> 2] | 0;
      HEAP32[i15 >> 2] = HEAP32[i12 >> 2];
      HEAP32[i15 + 4 >> 2] = i14;
      HEAP8[i11 + 16 | 0] = HEAP8[i9 + 16 | 0] & 1;
     }
     i16 = i10;
     i17 = i9 + 20 | 0;
    }
    i14 = i11 + 20 | 0;
    if ((i17 | 0) == (i2 | 0)) {
     i7 = i16;
     i8 = i14;
     break L1;
    } else {
     i9 = i17;
     i10 = i16;
     i11 = i14;
    }
   }
   if ((i9 | 0) == (i2 | 0)) {
    return;
   } else {
    i18 = i9;
    i19 = i11;
   }
   while (1) {
    if ((i19 | 0) != 0) {
     i10 = i18 | 0;
     i14 = HEAP32[i10 >> 2] | 0;
     HEAP32[i10 >> 2] = 0;
     HEAP32[i19 >> 2] = i14;
     i14 = i18 + 4 | 0;
     i10 = HEAP32[i14 >> 2] | 0;
     HEAP32[i14 >> 2] = 0;
     HEAP32[i19 + 4 >> 2] = i10;
     i10 = i18 + 8 | 0;
     i14 = i19 + 8 | 0;
     i15 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i14 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i14 + 4 >> 2] = i15;
     HEAP8[i19 + 16 | 0] = HEAP8[i18 + 16 | 0] & 1;
    }
    i15 = i18 + 20 | 0;
    if ((i15 | 0) == (i2 | 0)) {
     break;
    } else {
     i18 = i15;
     i19 = i19 + 20 | 0;
    }
   }
   return;
  }
 } while (0);
 if ((i7 | 0) == (i4 | 0)) {
  return;
 } else {
  i20 = i7;
  i21 = i8;
 }
 while (1) {
  if ((i21 | 0) != 0) {
   i8 = i20 | 0;
   i7 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i21 >> 2] = i7;
   i7 = i20 + 4 | 0;
   i8 = HEAP32[i7 >> 2] | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i21 + 4 >> 2] = i8;
   i8 = i20 + 8 | 0;
   i7 = i21 + 8 | 0;
   i19 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i7 + 4 >> 2] = i19;
   HEAP8[i21 + 16 | 0] = HEAP8[i20 + 16 | 0] & 1;
  }
  i19 = i20 + 20 | 0;
  if ((i19 | 0) == (i4 | 0)) {
   break;
  } else {
   i20 = i19;
   i21 = i21 + 20 | 0;
  }
 }
 return;
}
function __ZN7WebCore16CSSGradientValue26gradientWithStylesResolvedEPNS_13StyleResolverE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i2 + 72 | 0;
 i7 = i2 + 64 | 0;
 i8 = 0;
 while (1) {
  if (i8 >>> 0 >= (HEAP32[i6 >> 2] | 0) >>> 0) {
   i9 = 6;
   break;
  }
  if (__ZN7WebCore13StyleResolver43colorFromPrimitiveValueIsDerivedFromElementEPNS_17CSSPrimitiveValueE(HEAP32[(HEAP32[i7 >> 2] | 0) + (i8 * 20 & -1) + 4 >> 2] | 0) | 0) {
   i9 = 4;
   break;
  } else {
   i8 = i8 + 1 | 0;
  }
 }
 do {
  if ((i9 | 0) == 4) {
   if ((HEAP32[i6 >> 2] | 0) >>> 0 <= i8 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   HEAP8[(HEAP32[i7 >> 2] | 0) + (i8 * 20 & -1) + 16 | 0] = 1;
   i10 = HEAP32[i2 + 4 >> 2] & 516096;
   if ((i10 | 0) == 49152) {
    i11 = __ZN3WTF10fastMallocEj(132) | 0;
    i12 = HEAP32[i2 + 120 >> 2] | 0;
    __ZN7WebCore22CSSImageGeneratorValueC2ENS_8CSSValue9ClassTypeE(i11, 6);
    i13 = HEAP32[i2 + 48 >> 2] | 0;
    HEAP32[i11 + 48 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    }
    i14 = HEAP32[i2 + 52 >> 2] | 0;
    HEAP32[i11 + 52 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    i13 = HEAP32[i2 + 56 >> 2] | 0;
    HEAP32[i11 + 56 >> 2] = i13;
    if ((i13 | 0) != 0) {
     i14 = i13 | 0;
     HEAP32[i14 >> 2] = (HEAP32[i14 >> 2] | 0) + 1;
    }
    i14 = HEAP32[i2 + 60 >> 2] | 0;
    HEAP32[i11 + 60 >> 2] = i14;
    if ((i14 | 0) != 0) {
     i13 = i14 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    __ZN3WTF6VectorIN7WebCore20CSSGradientColorStopELj2ENS_15CrashOnOverflowEEC2ERKS4_(i11 + 64 | 0, i2 + 64 | 0);
    HEAP8[i11 + 116 | 0] = HEAP8[i2 + 116 | 0] & 1;
    HEAP32[i11 + 120 >> 2] = i12;
    HEAP8[i11 + 124 | 0] = HEAP8[i2 + 124 | 0] & 1;
    i12 = HEAP32[i2 + 128 >> 2] | 0;
    HEAP32[i11 + 128 >> 2] = i12;
    if ((i12 | 0) != 0) {
     i13 = i12 | 0;
     HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) + 1;
    }
    i15 = i11;
    break;
   } else if ((i10 | 0) == 57344) {
    i10 = __ZN3WTF10fastMallocEj(152) | 0;
    __ZN7WebCore22CSSRadialGradientValueC2ERKS0_(i10, i2);
    i15 = i10;
    break;
   } else {
    HEAP32[i1 >> 2] = 0;
    STACKTOP = i4;
    return;
   }
  } else if ((i9 | 0) == 6) {
   if ((i2 | 0) == 0) {
    i15 = 0;
    break;
   }
   i10 = i2 | 0;
   HEAP32[i10 >> 2] = (HEAP32[i10 >> 2] | 0) + 1;
   i15 = i2;
  }
 } while (0);
 i2 = i15 + 72 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  i9 = i15 + 64 | 0;
  i8 = i5;
  i7 = 0;
  while (1) {
   i6 = HEAP32[i9 >> 2] | 0;
   __ZNK7WebCore13StyleResolver23colorFromPrimitiveValueEPNS_17CSSPrimitiveValueEb(i5, i3, HEAP32[i6 + (i7 * 20 & -1) + 4 >> 2] | 0, 0);
   i10 = i6 + (i7 * 20 & -1) + 8 | 0;
   HEAP32[i10 >> 2] = HEAP32[i8 >> 2];
   HEAP8[i10 + 4 | 0] = HEAP8[i8 + 4 | 0] | 0;
   i7 = i7 + 1 | 0;
   if (i7 >>> 0 >= (HEAP32[i2 >> 2] | 0) >>> 0) {
    break;
   }
  }
 }
 HEAP32[i1 >> 2] = i15;
 STACKTOP = i4;
 return;
}
function __ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, d10 = +0, d11 = +0, d12 = +0, d13 = +0, i14 = 0, i15 = 0, d16 = +0, i17 = 0, i18 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i6 + 8 | 0;
 i9 = i2 + 24 | 0;
 d10 = +HEAPF32[(HEAP32[i9 >> 2] | 0) + 80 >> 2];
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i1) | 0) << 16 >> 16 == 1) {
  d11 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i1);
  do {
   if (d11 < 3.4028234663852886e+38) {
    if (d11 <= -3.4028234663852886e+38) {
     d12 = -3.4028234663852886e+38;
     break;
    }
    d12 = d11;
   } else {
    d12 = 3.4028234663852886e+38;
   }
  } while (0);
  d13 = d10 * d12;
  STACKTOP = i6;
  return +d13;
 }
 i14 = i4 | 0;
 i15 = i4 + 4 | 0;
 i4 = HEAP32[(i5 ? i14 : i15) >> 2] | 0;
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i1) | 0) << 16 >> 16 == 2) {
  d12 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i1);
  do {
   if (d12 < 3.4028234663852886e+38) {
    if (d12 <= -3.4028234663852886e+38) {
     d16 = -3.4028234663852886e+38;
     break;
    }
    d16 = d12;
   } else {
    d16 = 3.4028234663852886e+38;
   }
  } while (0);
  d13 = +(i4 | 0) * (d16 / +100);
  STACKTOP = i6;
  return +d13;
 }
 i5 = (__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i1) | 0) << 16 >> 16 == 115;
 i17 = HEAP32[i1 + 4 >> 2] & 508;
 if (!i5) {
  do {
   if ((i17 | 0) == 472) {
    i5 = HEAP32[i1 + 8 >> 2] | 0;
    if ((i5 | 0) == 148 | (i5 | 0) == 152) {
     d13 = +0;
     STACKTOP = i6;
     return +d13;
    } else if ((i5 | 0) == 149) {
     d13 = +(HEAP32[i15 >> 2] | 0);
     STACKTOP = i6;
     return +d13;
    } else if ((i5 | 0) == 153) {
     d13 = +(HEAP32[i14 >> 2] | 0);
     STACKTOP = i6;
     return +d13;
    } else {
     break;
    }
   }
  } while (0);
  d13 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i1, i2, i3, d10, 0);
  STACKTOP = i6;
  return +d13;
 }
 if ((i17 | 0) == 452) {
  i18 = HEAP32[i1 + 8 >> 2] | 0;
 } else {
  i18 = 0;
 }
 i1 = HEAP32[i18 + 8 >> 2] | 0;
 FUNCTION_TABLE_viiiid[HEAP32[(HEAP32[i1 >> 2] | 0) + 12 >> 2] & 1](i7, i1, i2, i3, +HEAPF32[(HEAP32[i9 >> 2] | 0) + 80 >> 2]);
 __ZN7WebCore16CalculationValue6createEN3WTF10PassOwnPtrINS_18CalcExpressionNodeEEENS_30CalculationPermittedValueRangeE(i8, i7, HEAP8[i18 + 12 | 0] & 1);
 i18 = HEAP32[i7 >> 2] | 0;
 if ((i18 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i18 >> 2] | 0) + 4 >> 2] & 1](i18);
 }
 i18 = i8 | 0;
 d10 = +__ZNK7WebCore16CalculationValue8evaluateEf(HEAP32[i18 >> 2] | 0, +(i4 | 0));
 i4 = HEAP32[i18 >> 2] | 0;
 if ((i4 | 0) == 0) {
  d13 = d10;
  STACKTOP = i6;
  return +d13;
 }
 i18 = i4 | 0;
 i8 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
 if ((i8 | 0) != 0) {
  HEAP32[i18 >> 2] = i8;
  d13 = d10;
  STACKTOP = i6;
  return +d13;
 }
 i8 = HEAP32[i4 + 4 >> 2] | 0;
 if ((i8 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 1](i8);
 }
 __ZN3WTF8fastFreeEPv(i4);
 d13 = d10;
 STACKTOP = i6;
 return +d13;
}
function __ZN7WebCoreL24distanceToFarthestCornerERKNS_10FloatPointERKNS_9FloatSizeERS0_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, d12 = +0, d13 = +0, d14 = +0, d15 = +0, d16 = +0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, d22 = +0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i5 = i4 | 0;
 i6 = i4 + 8 | 0;
 i7 = i4 + 16 | 0;
 i8 = i4 + 24 | 0;
 i9 = i1 | 0;
 i10 = i1 + 4 | 0;
 d11 = +HEAPF32[i10 >> 2];
 HEAPF32[i5 >> 2] = +HEAPF32[i9 >> 2];
 HEAPF32[i5 + 4 >> 2] = d11;
 d11 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i5);
 i5 = i2 | 0;
 d12 = +HEAPF32[i5 >> 2];
 d13 = +HEAPF32[i10 >> 2];
 HEAPF32[i6 >> 2] = +HEAPF32[i9 >> 2] - d12;
 HEAPF32[i6 + 4 >> 2] = d13;
 d13 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i6);
 i6 = i2 + 4 | 0;
 d14 = +HEAPF32[i6 >> 2];
 d15 = +HEAPF32[i10 >> 2] - d14;
 HEAPF32[i7 >> 2] = +HEAPF32[i9 >> 2];
 HEAPF32[i7 + 4 >> 2] = d15;
 d15 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i7);
 d16 = +HEAPF32[i5 >> 2];
 d17 = +HEAPF32[i6 >> 2];
 d18 = +HEAPF32[i10 >> 2] - d17;
 HEAPF32[i8 >> 2] = +HEAPF32[i9 >> 2] - d16;
 HEAPF32[i8 + 4 >> 2] = d18;
 d18 = +__ZNK7WebCore9FloatSize14diagonalLengthEv(i8);
 i8 = i3;
 if (d13 > d11) {
  d19 = d13;
  i20 = 0;
  i21 = (HEAPF32[tempDoublePtr >> 2] = d12, HEAP32[tempDoublePtr >> 2] | 0);
 } else {
  d19 = d11;
  i20 = 0;
  i21 = 0;
 }
 if (d15 > d19) {
  d22 = d15;
  i23 = (HEAPF32[tempDoublePtr >> 2] = d14, HEAP32[tempDoublePtr >> 2] | 0);
  i24 = 0;
 } else {
  d22 = d19;
  i23 = i20;
  i24 = i21;
 }
 if (d18 <= d22) {
  d25 = d22;
  i26 = i23;
  i27 = i24;
  i28 = i8 | 0;
  HEAP32[i28 >> 2] = i27;
  i29 = i8 + 4 | 0;
  HEAP32[i29 >> 2] = i26;
  STACKTOP = i4;
  return +d25;
 }
 i24 = (HEAPF32[tempDoublePtr >> 2] = d16, HEAP32[tempDoublePtr >> 2] | 0);
 d25 = d18;
 i26 = (HEAPF32[tempDoublePtr >> 2] = d17, HEAP32[tempDoublePtr >> 2] | 0);
 i27 = i24 | 0;
 i28 = i8 | 0;
 HEAP32[i28 >> 2] = i27;
 i29 = i8 + 4 | 0;
 HEAP32[i29 >> 2] = i26;
 STACKTOP = i4;
 return +d25;
}
function __ZN7WebCore22CSSRadialGradientValueC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 + 120 >> 2] | 0;
 __ZN7WebCore22CSSImageGeneratorValueC2ENS_8CSSValue9ClassTypeE(i1 | 0, 7);
 i4 = HEAP32[i2 + 48 >> 2] | 0;
 HEAP32[i1 + 48 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 + 52 >> 2] | 0;
 HEAP32[i1 + 52 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 56 >> 2] | 0;
 HEAP32[i1 + 56 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i5 = i4 | 0;
  HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) + 1;
 }
 i5 = HEAP32[i2 + 60 >> 2] | 0;
 HEAP32[i1 + 60 >> 2] = i5;
 if ((i5 | 0) != 0) {
  i4 = i5 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN3WTF6VectorIN7WebCore20CSSGradientColorStopELj2ENS_15CrashOnOverflowEEC2ERKS4_(i1 + 64 | 0, i2 + 64 | 0);
 HEAP8[i1 + 116 | 0] = HEAP8[i2 + 116 | 0] & 1;
 HEAP32[i1 + 120 >> 2] = i3;
 HEAP8[i1 + 124 | 0] = HEAP8[i2 + 124 | 0] & 1;
 i3 = HEAP32[i2 + 128 >> 2] | 0;
 HEAP32[i1 + 128 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 132 >> 2] | 0;
 HEAP32[i1 + 132 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 + 136 >> 2] | 0;
 HEAP32[i1 + 136 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 140 >> 2] | 0;
 HEAP32[i1 + 140 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 + 144 >> 2] | 0;
 HEAP32[i1 + 144 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 148 >> 2] | 0;
 HEAP32[i1 + 148 >> 2] = i4;
 if ((i4 | 0) == 0) {
  return;
 }
 i1 = i4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
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
function __ZN7WebCoreL18endPointsFromAngleEfRKNS_7IntSizeERNS_10FloatPointES4_NS_15CSSGradientTypeE(d1, i2, i3, i4, i5) {
 d1 = +d1;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0, d11 = +0, d12 = +0;
 if ((i5 | 0) == 2) {
  d6 = +90 - d1;
 } else {
  d6 = d1;
 }
 d1 = +_fmod(+d6, +(+360));
 if (d1 < +0) {
  d7 = d1 + +360;
 } else {
  d7 = d1;
 }
 if (d7 == +0) {
  d1 = +(HEAP32[i2 + 4 >> 2] | 0);
  HEAPF32[i3 >> 2] = +0;
  HEAPF32[i3 + 4 >> 2] = d1;
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i4 + 4 >> 2] = +0;
  return;
 }
 if (d7 == +90) {
  HEAPF32[i3 >> 2] = +0;
  HEAPF32[i3 + 4 >> 2] = +0;
  HEAPF32[i4 >> 2] = +(HEAP32[i2 >> 2] | 0);
  HEAPF32[i4 + 4 >> 2] = +0;
  return;
 }
 if (d7 == +180) {
  HEAPF32[i3 >> 2] = +0;
  HEAPF32[i3 + 4 >> 2] = +0;
  d1 = +(HEAP32[i2 + 4 >> 2] | 0);
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i4 + 4 >> 2] = d1;
  return;
 }
 if (d7 == +270) {
  HEAPF32[i3 >> 2] = +(HEAP32[i2 >> 2] | 0);
  HEAPF32[i3 + 4 >> 2] = +0;
  HEAPF32[i4 >> 2] = +0;
  HEAPF32[i4 + 4 >> 2] = +0;
  return;
 }
 d1 = +Math_tan((+90 - d7) * 3.1415927410125732 / +180);
 d6 = +-1 / d1;
 d8 = +((HEAP32[i2 + 4 >> 2] | 0) / 2 & -1 | 0);
 d9 = +((HEAP32[i2 >> 2] | 0) / 2 & -1 | 0);
 do {
  if (d7 < +90) {
   d10 = d9;
   d11 = d8;
  } else {
   if (d7 < +180) {
    d10 = d9;
    d11 = +-0 - d8;
    break;
   }
   d12 = +-0 - d9;
   if (d7 >= +270) {
    d10 = d12;
    d11 = d8;
    break;
   }
   d10 = d12;
   d11 = +-0 - d8;
  }
 } while (0);
 d7 = d11 - d6 * d10;
 d10 = d7 / (d1 - d6);
 d1 = d6 * d10 + d7;
 HEAPF32[i4 >> 2] = d9 + d10;
 HEAPF32[i4 + 4 >> 2] = d8 - d1;
 HEAPF32[i3 >> 2] = d9 - d10;
 HEAPF32[i3 + 4 >> 2] = d8 + d1;
 return;
}
function __ZN3WTF6VectorIN7WebCore20CSSGradientColorStopELj2ENS_15CrashOnOverflowEEC2ERKS4_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = HEAP32[i2 + 4 >> 2] | 0;
 i4 = i2 + 8 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = i1 + 12 | 0;
 i7 = i1 | 0;
 HEAP32[i7 >> 2] = i6;
 i8 = i1 + 4 | 0;
 HEAP32[i8 >> 2] = 2;
 HEAP32[i1 + 8 >> 2] = i5;
 do {
  if (i3 >>> 0 > 2 >>> 0) {
   if (i3 >>> 0 > 214748364 >>> 0) {
    _WTFCrash();
   } else {
    i5 = __ZN3WTF18fastMallocGoodSizeEj(i3 * 20 & -1) | 0;
    HEAP32[i8 >> 2] = (i5 >>> 0) / 20 & -1;
    i1 = __ZN3WTF10fastMallocEj(i5) | 0;
    HEAP32[i7 >> 2] = i1;
    i9 = i1;
    break;
   }
  } else {
   i9 = i6;
  }
 } while (0);
 if ((i9 | 0) == 0) {
  return;
 }
 i6 = HEAP32[i2 >> 2] | 0;
 i2 = HEAP32[i4 >> 2] | 0;
 i4 = i6 + (i2 * 20 & -1) | 0;
 if ((i2 | 0) == 0) {
  return;
 } else {
  i10 = i6;
  i11 = i9;
 }
 while (1) {
  i9 = HEAP32[i10 >> 2] | 0;
  HEAP32[i11 >> 2] = i9;
  if ((i9 | 0) != 0) {
   i6 = i9 | 0;
   HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
  }
  i6 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i11 + 4 >> 2] = i6;
  if ((i6 | 0) != 0) {
   i9 = i6 | 0;
   HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  }
  i9 = i10 + 8 | 0;
  i6 = i11 + 8 | 0;
  i2 = HEAP32[i9 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
  HEAP32[i6 + 4 >> 2] = i2;
  HEAP8[i11 + 16 | 0] = HEAP8[i10 + 16 | 0] & 1;
  i2 = i10 + 20 | 0;
  if ((i2 | 0) == (i4 | 0)) {
   break;
  } else {
   i10 = i2;
   i11 = i11 + 20 | 0;
  }
 }
 return;
}
function __ZN7WebCore16CSSGradientValue17sortStopsIfNeededEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 116 | 0;
 if ((HEAP8[i4] & 1) != 0) {
  STACKTOP = i2;
  return;
 }
 i5 = HEAP32[i1 + 72 >> 2] | 0;
 do {
  if ((i5 | 0) != 0) {
   i6 = HEAP32[i1 + 64 >> 2] | 0;
   i7 = i6 + (i5 * 20 & -1) | 0;
   HEAP32[i3 >> 2] = F_BASE_iii + 2;
   i8 = i5 * 20 & -1;
   i9 = (i8 | 0) / 20 & -1;
   if ((i8 | 0) > 0) {
    i10 = i9;
   } else {
    __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i6, i7, i3, i9, 0, 0);
    break;
   }
   while (1) {
    i11 = __ZnwjRKSt9nothrow_t(i10 * 20 & -1, __ZSt7nothrow) | 0;
    i12 = i11;
    if ((i11 | 0) != 0) {
     i13 = 8;
     break;
    }
    if ((i10 | 0) > 1) {
     i10 = (i10 | 0) / 2 & -1;
    } else {
     i13 = 6;
     break;
    }
   }
   if ((i13 | 0) == 8) {
    __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i6, i7, i3, i9, i12, i10);
    __ZdlPv(i11);
    break;
   } else if ((i13 | 0) == 6) {
    __ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi(i6, i7, i3, i9, i12, 0);
    break;
   }
  }
 } while (0);
 HEAP8[i4] = 1;
 STACKTOP = i2;
 return;
}
function __ZN7WebCore22CSSRadialGradientValue13resolveRadiusEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES5_Pf(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var d6 = +0, d7 = +0, d8 = +0, d9 = +0, d10 = +0;
 d6 = +HEAPF32[(HEAP32[i3 + 24 >> 2] | 0) + 80 >> 2];
 if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 == 1) {
  d7 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
  do {
   if (d7 < 3.4028234663852886e+38) {
    if (d7 <= -3.4028234663852886e+38) {
     d8 = -3.4028234663852886e+38;
     break;
    }
    d8 = d7;
   } else {
    d8 = 3.4028234663852886e+38;
   }
  } while (0);
  d9 = d6 * d8;
  return +d9;
 }
 do {
  if ((i5 | 0) != 0) {
   if ((__ZNK7WebCore17CSSPrimitiveValue13primitiveTypeEv(i2) | 0) << 16 >> 16 != 2) {
    break;
   }
   d8 = +HEAPF32[i5 >> 2];
   d7 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEv(i2);
   do {
    if (d7 < 3.4028234663852886e+38) {
     if (d7 <= -3.4028234663852886e+38) {
      d10 = -3.4028234663852886e+38;
      break;
     }
     d10 = d7;
    } else {
     d10 = 3.4028234663852886e+38;
    }
   } while (0);
   d9 = d8 * d10 / +100;
   return +d9;
  }
 } while (0);
 d9 = +__ZNK7WebCore17CSSPrimitiveValue13computeLengthIfEET_PKNS_11RenderStyleES5_fb(i2, i3, i4, d6, 0);
 return +d9;
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
function __ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj(i1, i2) {
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
function __ZNK7WebCore16CSSGradientValue11isCacheableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = HEAP32[i1 + 72 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP32[i1 + 64 >> 2] | 0;
 i1 = 0;
 while (1) {
  if ((HEAP8[i4 + (i1 * 20 & -1) + 16 | 0] & 1) != 0) {
   i3 = 0;
   i5 = 9;
   break;
  }
  i6 = HEAP32[i4 + (i1 * 20 & -1) >> 2] | 0;
  if ((i6 | 0) != 0) {
   i7 = (HEAP32[i6 + 4 >> 2] | 0) >>> 2 & 127;
   if ((i7 | 0) == 3 | (i7 | 0) == 4 | (i7 | 0) == 108 | (i7 | 0) == 109) {
    i3 = 0;
    i5 = 10;
    break;
   }
  }
  i7 = i1 + 1 | 0;
  if (i7 >>> 0 < i2 >>> 0) {
   i1 = i7;
  } else {
   i3 = 1;
   i5 = 11;
   break;
  }
 }
 if ((i5 | 0) == 9) {
  return i3 | 0;
 } else if ((i5 | 0) == 10) {
  return i3 | 0;
 } else if ((i5 | 0) == 11) {
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore16CSSGradientValue15computeEndPointEPNS_17CSSPrimitiveValueES2_RKNS_11RenderStyleES5_RKNS_7IntSizeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0;
 i2 = i1 | 0;
 HEAPF32[i2 >> 2] = +0;
 i8 = i1 + 4 | 0;
 HEAPF32[i8 >> 2] = +0;
 if ((i3 | 0) != 0) {
  HEAPF32[i2 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i3, i5, i6, i7, 1);
 }
 if ((i4 | 0) == 0) {
  return;
 }
 HEAPF32[i8 >> 2] = +__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb(i4, i5, i6, i7, 0);
 return;
}
function __ZNK7WebCore16CSSGradientValue15knownToBeOpaqueEPKNS_13RenderElementE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 64 | 0;
 i3 = HEAP32[i1 + 72 >> 2] | 0;
 i1 = 0;
 while (1) {
  if (i1 >>> 0 >= i3 >>> 0) {
   i4 = 1;
   i5 = 5;
   break;
  }
  if ((HEAP32[(HEAP32[i2 >> 2] | 0) + (i1 * 20 & -1) + 8 >> 2] & -16777216 | 0) == -16777216) {
   i1 = i1 + 1 | 0;
  } else {
   i4 = 0;
   i5 = 6;
   break;
  }
 }
 if ((i5 | 0) == 5) {
  return i4 | 0;
 } else if ((i5 | 0) == 6) {
  return i4 | 0;
 }
 return 0;
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
function __ZN7WebCoreL12compareStopsERKNS_20CSSGradientColorStopES2_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0;
 d3 = +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i1 >> 2] | 0, 1);
 return d3 < +__ZNK7WebCore17CSSPrimitiveValue14getDoubleValueEt(HEAP32[i2 >> 2] | 0, 1) | 0;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function dynCall_viiiid(i1, i2, i3, i4, i5, d6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 d6 = +d6;
 FUNCTION_TABLE_viiiid[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, +d6);
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
 return FUNCTION_TABLE_iii[i1 & 3](i2 | 0, i3 | 0) | 0;
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
function b1(i1, i2, i3, i4, d5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 d5 = +d5;
 abort(1);
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 1](i2 | 0);
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
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
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
  var FUNCTION_TABLE_vi = [b0,b0];
  var FUNCTION_TABLE_viiiid = [b1,b1];
  var FUNCTION_TABLE_ii = [b2,b2];
  var FUNCTION_TABLE_v = [b3,b3];
  var FUNCTION_TABLE_iii = [b4,b4,__ZN7WebCoreL12compareStopsERKNS_20CSSGradientColorStopES2_,b4];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_vi: dynCall_vi, dynCall_viiiid: dynCall_viiiid, dynCall_ii: dynCall_ii, dynCall_v: dynCall_v, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_vi": invoke_vi, "invoke_viiiid": invoke_viiiid, "invoke_ii": invoke_ii, "invoke_v": invoke_v, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "_sqrtf": _sqrtf, "_llvm_lifetime_start": _llvm_lifetime_start, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_atan2": _atan2, "_fmod": _fmod, "_fflush": _fflush, "_tan": _tan, "_round": _round, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity, "__ZTVN7WebCore13GradientImageE": __ZTVN7WebCore13GradientImageE, "__ZSt7nothrow": __ZSt7nothrow }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_viiiid = Module["dynCall_viiiid"] = asm["dynCall_viiiid"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["_strlen","__ZN7WebCoreL24distanceToFarthestCornerERKNS_10FloatPointERKNS_9FloatSizeERS0_","__ZNSt3__118__stable_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeE","__ZNSt3__122__merge_move_constructIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_EEvT0_S9_T1_SA_PNS_15iterator_traitsIS9_E10value_typeET_","__ZN7WebCore22CSSRadialGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE","__ZNSt3__113__stable_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_NS_15iterator_traitsIS9_E15difference_typeEPNSC_10value_typeEi","__ZNK7WebCore22CSSLinearGradientValue13customCSSTextEv","__ZN7WebCoreL12compareStopsERKNS_20CSSGradientColorStopES2_","__ZNSt3__115__inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeEi","__ZNK7WebCore22CSSRadialGradientValue6equalsERKS0_","__ZNSt3__116__insertion_sortIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_T_","__ZN7WebCore16CSSGradientValue17sortStopsIfNeededEv","__ZN7WebCore16CSSGradientValue8addStopsEPNS_8GradientEPNS_13RenderElementERKNS_11RenderStyleEf","_memset","__ZN7WebCore16CSSGradientValue26gradientWithStylesResolvedEPNS_13StyleResolverE","_memcpy","__ZNSt3__121__insertion_sort_moveIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_PNS_15iterator_traitsIS9_E10value_typeET_","__ZN7WebCore16CSSGradientValue5imageEPNS_13RenderElementERKNS_7IntSizeE","__ZN3WTF6VectorIN7WebCore12GradientStopELj0ENS_15CrashOnOverflowEE14expandCapacityEj","__ZN7WebCore22CSSRadialGradientValue13resolveRadiusEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES5_Pf","__ZNSt3__17__mergeINS_8__negateIRPFbRKN7WebCore20CSSGradientColorStopES5_EEENS_13move_iteratorINS_16reverse_iteratorIPS3_EEEESE_SD_EET2_T0_SG_T1_SH_SF_T_","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN3WTF13StringBuilder6appendERKNS_6StringE","__ZNSt3__124__buffered_inplace_mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_EEvT0_S9_S9_T_NS_15iterator_traitsIS9_E15difference_typeESD_PNSC_10value_typeE","__ZN3WTF6VectorIN7WebCore20CSSGradientColorStopELj2ENS_15CrashOnOverflowEEC2ERKS4_","__ZNSt3__119__merge_move_assignIRPFbRKN7WebCore20CSSGradientColorStopES4_EPS2_S8_S8_EEvT0_S9_T1_SA_T2_T_","__ZN7WebCore22CSSRadialGradientValueC2ERKS0_","__ZNK7WebCore16CSSGradientValue15knownToBeOpaqueEPKNS_13RenderElementE","__ZN7WebCoreL18endPointsFromAngleEfRKNS_7IntSizeERNS_10FloatPointES4_NS_15CSSGradientTypeE","__ZN7WebCoreL17positionFromValueEPNS_17CSSPrimitiveValueERKNS_11RenderStyleES4_RKNS_7IntSizeEb","__ZNSt3__17__mergeIRPFbRKN7WebCore20CSSGradientColorStopES4_ENS_13move_iteratorIPS2_EESA_S9_EET2_T0_SC_T1_SD_SB_T_","__ZNK7WebCore16CSSGradientValue11isCacheableEv","__ZNK7WebCore22CSSRadialGradientValue13customCSSTextEv","__ZN7WebCore16CSSGradientValue15computeEndPointEPNS_17CSSPrimitiveValueES2_RKNS_11RenderStyleES5_RKNS_7IntSizeE","__ZNK7WebCore22CSSLinearGradientValue6equalsERKS0_","__ZN7WebCore22CSSLinearGradientValue14createGradientEPNS_13RenderElementERKNS_7IntSizeE","__ZNSt3__116__rotate_forwardIPN7WebCore20CSSGradientColorStopEEET_S4_S4_S4_","__ZN7WebCore5blendERKNS_5ColorES2_db"]

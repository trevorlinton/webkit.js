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
H_BASE = parentModule["_malloc"](0 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 0;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore15GraphicsContextC1EPNS_20PlatformContextCairoE;
var __ZN7WebCore15GraphicsContextD1Ev;
/* no memory initializer */
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_v(index) {
  try {
    Module["dynCall_v"](index);
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
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
  var invoke_v=env.invoke_v;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_iii=env.invoke_iii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _malloc=env._malloc;
  var ___setErrNo=env.___setErrNo;
  var _llvm_uadd_with_overflow_i32=env._llvm_uadd_with_overflow_i32;
  var _free=env._free;
  var _ceil=env._ceil;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, i30 = 0, i31 = 0, i32 = 0, i33 = 0, i34 = 0, i35 = 0, i36 = 0, i37 = 0, i38 = 0, i39 = 0, i40 = 0, i41 = 0, i42 = 0, i43 = 0, i44 = 0, i45 = 0, i46 = 0, i47 = 0, i48 = 0, i49 = 0, i50 = 0, i51 = 0, i52 = 0, i53 = 0, i54 = 0, i55 = 0, i56 = 0, i57 = 0, i58 = 0, i59 = 0, i60 = 0, i61 = 0, i62 = 0, i63 = 0, i64 = 0, i65 = 0, i66 = 0, i67 = 0, i68 = 0, i69 = 0, i70 = 0, i71 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 224 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 216 | 0;
 i9 = i1 + 72 | 0;
 if ((i3 | 0) != 0) {
  HEAP8[i9] = 0;
  i10 = i1;
  i11 = i1 + 8 | 0;
  i12 = HEAP32[i10 >> 2] | 0;
  i13 = HEAP32[i10 + 4 >> 2] | 0;
  HEAP32[i11 >> 2] = i12;
  HEAP32[i11 + 4 >> 2] = i13;
  i13 = i1 + 16 | 0;
  HEAP32[i13 >> 2] = 0;
  HEAP32[i13 + 4 >> 2] = 0;
  i11 = i1 + 4 | 0;
  i14 = i2 + 4 | 0;
  i15 = i2 | 0;
  i16 = HEAP32[i11 >> 2] | 0;
  i17 = i12;
  while (1) {
   i12 = i17;
   if ((i16 | 0) == (HEAP32[i14 >> 2] | 0)) {
    if ((i12 | 0) == (HEAP32[i15 >> 2] | 0) | (i17 | 0) == 0) {
     break;
    }
   } else {
    if ((i17 | 0) == 0) {
     break;
    }
   }
   if ((i16 | 0) >= (HEAP32[i12 + 8 >> 2] | 0)) {
    break;
   }
   i12 = HEAP32[i10 >> 2] | 0;
   i18 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i13 >> 2] = i12;
   HEAP32[i13 + 4 >> 2] = i18;
   i18 = i16 + 1 | 0;
   HEAP32[i11 >> 2] = i18;
   i16 = i18;
   i17 = i12;
  }
  HEAP32[i1 + 48 >> 2] = (i3 | 0) != 1;
  __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
  i17 = i1 + 80 | 0;
  HEAP32[i1 + 84 >> 2] = HEAP32[i17 >> 2];
  if ((i3 | 0) != 2) {
   STACKTOP = i5;
   return;
  }
  i3 = HEAP32[i1 + 88 >> 2] | 0;
  if ((i3 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i16 = i3 - 1 | 0;
  if ((i16 | 0) == 0) {
   STACKTOP = i5;
   return;
  }
  i3 = i1 + 76 | 0;
  i11 = HEAP32[i3 >> 2] | 0;
  i13 = 0;
  i10 = i11;
  while (1) {
   i13 = i13 + 1 | 0;
   i10 = HEAP32[i10 + 4 >> 2] | 0;
   if (i13 >>> 0 >= i16 >>> 0) {
    break;
   }
  }
  i13 = HEAP32[i10 + 4 >> 2] | 0;
  i15 = 0;
  i14 = i13;
  i12 = i11;
  while (1) {
   i18 = i12 + 4 | 0;
   i19 = HEAP32[i18 >> 2] | 0;
   HEAP32[i18 >> 2] = i14;
   i18 = i15 + 1 | 0;
   if (i18 >>> 0 > i16 >>> 0) {
    break;
   } else {
    i15 = i18;
    i14 = i12;
    i12 = i19;
   }
  }
  HEAP32[i3 >> 2] = i10;
  HEAP32[i11 + 4 >> 2] = i13;
  if ((i13 | 0) != 0) {
   STACKTOP = i5;
   return;
  }
  HEAP32[i17 >> 2] = i11;
  STACKTOP = i5;
  return;
 }
 HEAP8[i9] = 1;
 i11 = i1 + 16 | 0;
 i17 = i11;
 HEAP32[i17 >> 2] = 0;
 HEAP32[i17 + 4 >> 2] = 0;
 i13 = i1 + 24 | 0;
 i10 = i1;
 i3 = i13;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i3 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i3 + 4 >> 2] = i12;
 i12 = i7 + 32 | 0;
 _memset(i7 | 0, 0, 32) | 0;
 HEAP32[i12 >> 2] = 10;
 i14 = i7 + 36 | 0;
 HEAP32[i14 >> 2] = 10;
 i15 = i7 + 40 | 0;
 HEAP32[i15 >> 2] = 10;
 i16 = i7 + 44 | 0;
 HEAP32[i16 >> 2] = 0;
 HEAP32[i7 + 48 >> 2] = 10;
 HEAP32[i7 + 52 >> 2] = 0;
 HEAP32[i7 + 56 >> 2] = 0;
 i19 = i7 + 60 | 0;
 HEAP8[i19] = 0;
 HEAP32[i7 + 64 >> 2] = 0;
 HEAP32[i7 + 68 >> 2] = 0;
 i18 = i7 + 72 | 0;
 HEAP8[i18] = 1;
 _memset(i7 + 76 | 0, 0, 37) | 0;
 _memset(i7 + 116 | 0, 0, 16) | 0;
 HEAP32[i7 + 132 >> 2] = i7 + 144;
 HEAP32[i7 + 136 >> 2] = 8;
 HEAP32[i7 + 140 >> 2] = 0;
 i20 = i1 + 44 | 0;
 i21 = i8 | 0;
 i22 = i1 | 0;
 i23 = i1 + 4 | 0;
 i24 = i1 + 116 | 0;
 i25 = i1 + 20 | 0;
 i26 = i11 | 0;
 i27 = i1 + 40 | 0;
 i28 = i1 + 140 | 0;
 i29 = i2 + 4 | 0;
 i30 = i2 | 0;
 i31 = i1 + 8 | 0;
 i32 = i6;
 i33 = i1 + 132 | 0;
 i34 = i6;
 i35 = i32 + 4 | 0;
 i36 = i1 + 136 | 0;
 i37 = i33 | 0;
 i38 = i6;
 i39 = i1 + 32 | 0;
 i40 = i1 + 36 | 0;
 i41 = i1 + 48 | 0;
 i42 = i1 + 64 | 0;
 i43 = i1 + 28 | 0;
 i44 = i13 | 0;
 i45 = i42;
 i46 = i1 + 32 | 0;
 i47 = i7 + 8 | 0;
 i48 = i7 + 16 | 0;
 i49 = i7 + 24 | 0;
 i50 = i1 + 60 | 0;
 i51 = i7 + 64 | 0;
 i52 = i1 + 52 | 0;
 i53 = 0;
 L31 : while (1) {
  while (1) {
   do {
    if (i53) {
     if (!i4) {
      i54 = HEAP32[i22 >> 2] | 0;
      if ((i54 | 0) == 0) {
       i55 = HEAP32[i20 >> 2] | 0;
      } else {
       if ((HEAP32[i23 >> 2] | 0) < (HEAP32[i54 + 8 >> 2] | 0)) {
        i56 = i54;
        i57 = 37;
        break;
       }
       i55 = HEAP32[i20 >> 2] | 0;
      }
      while (1) {
       i54 = HEAP32[i55 + 8 >> 2] | 0;
       if ((i54 | 0) == 0) {
        break;
       } else {
        i55 = i54;
       }
      }
      i58 = (HEAP32[i55 + 4 >> 2] | 0) >>> 6 & 31;
      break;
     }
     __ZN7WebCore11BidiContext41copyStackRemovingUnicodeEmbeddingContextsEv(i8, HEAP32[i20 >> 2] | 0);
     i54 = HEAP32[i21 >> 2] | 0;
     HEAP32[i21 >> 2] = 0;
     i59 = HEAP32[i16 >> 2] | 0;
     HEAP32[i16 >> 2] = i54;
     do {
      if ((i59 | 0) != 0) {
       i54 = i59 | 0;
       i60 = (HEAP32[i54 >> 2] | 0) - 1 | 0;
       if ((i60 | 0) == 0) {
        __ZN7WebCore11BidiContextD2Ev(i59);
        __ZN3WTF8fastFreeEPv(i59);
        break;
       } else {
        HEAP32[i54 >> 2] = i60;
        break;
       }
      }
     } while (0);
     i59 = HEAP32[i21 >> 2] | 0;
     do {
      if ((i59 | 0) != 0) {
       i60 = i59 | 0;
       i54 = (HEAP32[i60 >> 2] | 0) - 1 | 0;
       if ((i54 | 0) == 0) {
        __ZN7WebCore11BidiContextD2Ev(i59);
        __ZN3WTF8fastFreeEPv(i59);
        break;
       } else {
        HEAP32[i60 >> 2] = i54;
        break;
       }
      }
     } while (0);
     i59 = (HEAP32[(HEAP32[i16 >> 2] | 0) + 4 >> 2] | 0) >>> 6 & 31;
     HEAP32[i12 >> 2] = i59;
     HEAP32[i15 >> 2] = i59;
     HEAP32[i14 >> 2] = i59;
     i58 = i59;
    } else {
     i59 = HEAP32[i22 >> 2] | 0;
     if ((i59 | 0) == 0) {
      i61 = 10;
      i57 = 42;
     } else {
      i56 = i59;
      i57 = 37;
     }
    }
   } while (0);
   do {
    if ((i57 | 0) == 37) {
     i57 = 0;
     i59 = HEAP32[i23 >> 2] | 0;
     if ((i59 | 0) >= (HEAP32[i56 + 8 >> 2] | 0)) {
      i61 = 10;
      i57 = 42;
      break;
     }
     if ((HEAP32[i56 + 24 >> 2] & 4 | 0) == 0) {
      i62 = HEAP16[(HEAP32[i56 >> 2] | 0) + (i59 << 1) >> 1] | 0;
     } else {
      i62 = HEAPU8[(HEAP32[i56 >> 2] | 0) + i59 | 0] | 0;
     }
     i61 = _u_charDirection(i62 & 65535) | 0;
     i57 = 42;
    }
   } while (0);
   L67 : do {
    if ((i57 | 0) == 42) {
     i57 = 0;
     i59 = HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] | 0;
     if ((i59 & 2048 | 0) == 0) {
      if ((i61 | 0) != 17) {
       i58 = i61;
       break;
      }
      i58 = HEAP32[i27 >> 2] | 0;
      break;
     }
     switch (i61 | 0) {
     case 15:
      {
       i58 = i61;
       break L67;
       break;
      }
     case 14:
      {
       i58 = i61;
       break L67;
       break;
      }
     case 12:
      {
       i58 = i61;
       break L67;
       break;
      }
     case 11:
      {
       i58 = i61;
       break L67;
       break;
      }
     case 16:
      {
       i58 = 16;
       break L67;
       break;
      }
     default:
      {
       i58 = i59 >>> 6 & 31;
       break L67;
      }
     }
    }
   } while (0);
   i59 = (HEAP32[i24 >> 2] | 0) != 0 ? 10 : i58;
   L80 : do {
    switch (i59 | 0) {
    case 14:
    case 11:
    case 15:
    case 12:
    case 16:
     {
      HEAP32[i34 >> 2] = i59;
      HEAP32[i35 >> 2] = 1;
      i54 = HEAP32[i28 >> 2] | 0;
      if ((i54 | 0) == (HEAP32[i36 >> 2] | 0)) {
       i60 = i54 + 1 | 0;
       i63 = HEAP32[i37 >> 2] | 0;
       do {
        if (i63 >>> 0 > i32 >>> 0) {
         i57 = 56;
        } else {
         if ((i63 + (i54 << 3) | 0) >>> 0 <= i32 >>> 0) {
          i57 = 56;
          break;
         }
         i64 = i60 + (i54 >>> 2) | 0;
         i65 = i64 >>> 0 > 16 >>> 0 ? i64 : 16;
         __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i33, i65 >>> 0 > i60 >>> 0 ? i65 : i60);
         i65 = HEAP32[i37 >> 2] | 0;
         i66 = i65 + (i38 - i63 >> 3 << 3) | 0;
         i67 = i65;
        }
       } while (0);
       if ((i57 | 0) == 56) {
        i57 = 0;
        i63 = i60 + (i54 >>> 2) | 0;
        i65 = i63 >>> 0 > 16 >>> 0 ? i63 : 16;
        __ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj(i33, i65 >>> 0 > i60 >>> 0 ? i65 : i60);
        i66 = i32;
        i67 = HEAP32[i37 >> 2] | 0;
       }
       i65 = i66;
       i63 = i67 + (HEAP32[i28 >> 2] << 3) | 0;
       i64 = HEAP32[i65 + 4 >> 2] | 0;
       HEAP32[i63 >> 2] = HEAP32[i65 >> 2];
       HEAP32[i63 + 4 >> 2] = i64;
      } else {
       i64 = (HEAP32[i37 >> 2] | 0) + (i54 << 3) | 0;
       i63 = HEAP32[i6 + 4 >> 2] | 0;
       HEAP32[i64 >> 2] = HEAP32[i6 >> 2];
       HEAP32[i64 + 4 >> 2] = i63;
      }
      HEAP32[i28 >> 2] = (HEAP32[i28 >> 2] | 0) + 1;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE23commitExplicitEmbeddingEv(i1) | 0;
      i68 = i59;
      break;
     }
    case 0:
     {
      L93 : do {
       switch (HEAP32[i27 >> 2] | 0) {
       case 2:
        {
         if ((HEAP32[i40 >> 2] | 0) != 0) {
          i57 = 62;
         }
         break;
        }
       case 1:
       case 5:
       case 13:
        {
         i57 = 62;
         break;
        }
       case 9:
       case 8:
       case 7:
       case 18:
       case 10:
       case 3:
       case 4:
       case 6:
        {
         i63 = HEAP32[i39 >> 2] | 0;
         if ((i63 | 0) == 2) {
          if ((HEAP32[i40 >> 2] | 0) == 0) {
           break L93;
          }
          HEAP32[i41 >> 2] = 2;
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           break L93;
          }
          i64 = HEAP32[i3 + 4 >> 2] | 0;
          HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
          HEAP32[i17 + 4 >> 2] = i64;
          HEAP32[i41 >> 2] = 1;
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L93;
         } else if ((i63 | 0) == 5) {
          HEAP32[i41 >> 2] = 5;
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           break L93;
          }
          i63 = HEAP32[i3 + 4 >> 2] | 0;
          HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
          HEAP32[i17 + 4 >> 2] = i63;
          HEAP32[i41 >> 2] = 1;
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L93;
         } else {
          if ((HEAP32[i40 >> 2] | 0) == 0) {
           break L93;
          }
          if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
           i63 = HEAP32[i3 + 4 >> 2] | 0;
           HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
           HEAP32[i17 + 4 >> 2] = i63;
           HEAP32[i41 >> 2] = 1;
          }
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L93;
         }
         break;
        }
       default:
        {}
       }
      } while (0);
      if ((i57 | 0) == 62) {
       i57 = 0;
       __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      }
      i54 = HEAP32[i10 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = i54;
      HEAP32[i39 >> 2] = 0;
      HEAP32[i40 >> 2] = 0;
      HEAP32[i41 >> 2] = 0;
      i68 = 0;
      break;
     }
    case 13:
    case 1:
     {
      L111 : do {
       switch (HEAP32[i27 >> 2] | 0) {
       case 0:
       case 2:
       case 5:
        {
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         break;
        }
       case 10:
       case 9:
       case 3:
       case 4:
       case 6:
       case 18:
       case 7:
       case 8:
        {
         i54 = HEAP32[i39 >> 2] | 0;
         if ((i54 | 0) == 2) {
          do {
           if ((HEAP32[i40 >> 2] | 0) == 0) {
            if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 0) {
             break;
            }
            i60 = HEAP32[i3 + 4 >> 2] | 0;
            HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
            HEAP32[i17 + 4 >> 2] = i60;
           }
          } while (0);
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L111;
         } else if ((i54 | 0) == 5) {
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L111;
         } else {
          if ((HEAP32[i40 >> 2] | 0) != 0) {
           break L111;
          }
          if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 0) {
           i60 = HEAP32[i3 + 4 >> 2] | 0;
           HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
           HEAP32[i17 + 4 >> 2] = i60;
          }
          __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
          break L111;
         }
         break;
        }
       default:
        {}
       }
      } while (0);
      i60 = HEAP32[i10 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = i60;
      HEAP32[i39 >> 2] = 1;
      HEAP32[i40 >> 2] = i59;
      HEAP32[i41 >> 2] = 1;
      i68 = i59;
      break;
     }
    case 2:
     {
      i60 = HEAP32[i40 >> 2] | 0;
      if ((i60 | 0) == 13) {
       i57 = 102;
       break L80;
      }
      i63 = HEAP32[i27 >> 2] | 0;
      switch (i63 | 0) {
      case 1:
      case 13:
      case 5:
       {
        i64 = HEAP32[i3 + 4 >> 2] | 0;
        HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
        HEAP32[i17 + 4 >> 2] = i64;
        __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
        HEAP32[i41 >> 2] = 2;
        break;
       }
      case 3:
      case 6:
       {
        i64 = HEAP32[i39 >> 2] | 0;
        if ((i64 | 0) != 2) {
         i69 = i64;
         i57 = 92;
        }
        break;
       }
      case 10:
      case 9:
      case 4:
      case 18:
      case 7:
      case 8:
       {
        i69 = HEAP32[i39 >> 2] | 0;
        i57 = 92;
        break;
       }
      default:
       {}
      }
      do {
       if ((i57 | 0) == 92) {
        i57 = 0;
        if ((i69 | 0) == 2) {
         if ((i60 | 0) != 1) {
          break;
         }
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         i64 = (HEAP32[i27 >> 2] | 0) == 4 ? i42 : i13;
         i65 = HEAP32[i64 + 4 >> 2] | 0;
         HEAP32[i17 >> 2] = HEAP32[i64 >> 2];
         HEAP32[i17 + 4 >> 2] = i65;
         HEAP32[i41 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         HEAP32[i41 >> 2] = 2;
         break;
        } else if ((i69 | 0) == 5) {
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         if ((HEAP32[i40 >> 2] | 0) != 1) {
          if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 64) {
           break;
          }
         }
         i65 = (HEAP32[i27 >> 2] | 0) == 4 ? i42 : i13;
         i64 = HEAP32[i65 + 4 >> 2] | 0;
         HEAP32[i17 >> 2] = HEAP32[i65 >> 2];
         HEAP32[i17 + 4 >> 2] = i64;
         HEAP32[i41 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         HEAP32[i41 >> 2] = 2;
         break;
        } else {
         if ((i60 | 0) != 1) {
          break;
         }
         i64 = (i63 | 0) == 4 ? i42 : i13;
         i65 = HEAP32[i64 + 4 >> 2] | 0;
         HEAP32[i17 >> 2] = HEAP32[i64 >> 2];
         HEAP32[i17 + 4 >> 2] = i65;
         HEAP32[i41 >> 2] = 1;
         __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
         HEAP32[i41 >> 2] = 2;
         break;
        }
       }
      } while (0);
      i63 = HEAP32[i10 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = i63;
      HEAP32[i39 >> 2] = 2;
      if ((HEAP32[i41 >> 2] | 0) != 10) {
       i68 = 2;
       break L80;
      }
      HEAP32[i41 >> 2] = 0;
      i68 = 2;
      break;
     }
    case 5:
     {
      i57 = 102;
      break;
     }
    case 4:
     {
      i63 = HEAP32[i27 >> 2] | 0;
      if ((i63 | 0) == 2) {
       i60 = HEAP32[i10 + 4 >> 2] | 0;
       HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
       HEAP32[i17 + 4 >> 2] = i60;
       HEAP32[i46 >> 2] = 2;
       i68 = 2;
       break L80;
      } else if ((i63 | 0) == 4) {
       i68 = 4;
       break L80;
      } else {
       i63 = (HEAP8[i9] & 1) != 0 ? i11 : i13;
       i60 = HEAP32[i63 + 4 >> 2] | 0;
       HEAP32[i45 >> 2] = HEAP32[i63 >> 2];
       HEAP32[i45 + 4 >> 2] = i60;
       i68 = 4;
       break L80;
      }
      break;
     }
    case 18:
     {
      if ((HEAP32[i25 >> 2] | 0) != (HEAP32[i43 >> 2] | 0)) {
       i68 = 18;
       break L80;
      }
      if ((HEAP32[i26 >> 2] | 0) != (HEAP32[i44 >> 2] | 0)) {
       i68 = 18;
       break L80;
      }
      i60 = HEAP32[i10 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
      HEAP32[i17 + 4 >> 2] = i60;
      i68 = 18;
      break;
     }
    default:
     {
      i68 = i59;
     }
    }
   } while (0);
   do {
    if ((i57 | 0) == 102) {
     i57 = 0;
     L155 : do {
      switch (HEAP32[i27 >> 2] | 0) {
      case 0:
       {
        if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) != 0) {
         break L155;
        }
        __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
        break;
       }
      case 1:
      case 13:
      case 2:
       {
        i59 = HEAP32[i3 + 4 >> 2] | 0;
        HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
        HEAP32[i17 + 4 >> 2] = i59;
        __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
        break;
       }
      case 6:
       {
        i59 = HEAP32[i39 >> 2] | 0;
        if ((i59 | 0) != 5) {
         i70 = i59;
         i57 = 108;
        }
        break;
       }
      case 10:
      case 3:
      case 4:
      case 18:
      case 7:
      case 8:
      case 9:
       {
        i70 = HEAP32[i39 >> 2] | 0;
        i57 = 108;
        break;
       }
      default:
       {}
      }
     } while (0);
     if ((i57 | 0) == 108) {
      i57 = 0;
      do {
       if ((i70 | 0) == 2) {
        i59 = HEAP32[i40 >> 2] | 0;
        if ((i59 | 0) == 1) {
         i57 = 113;
         break;
        }
        if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
         i57 = 113;
        } else {
         i71 = i59;
         i57 = 114;
        }
       } else if ((i70 | 0) == 5) {
        i57 = 113;
       } else {
        i59 = HEAP32[i40 >> 2] | 0;
        if ((i59 | 0) != 0) {
         i71 = i59;
         i57 = 114;
         break;
        }
        if ((HEAP32[(HEAP32[i20 >> 2] | 0) + 4 >> 2] & 1984 | 0) == 64) {
         i57 = 113;
        } else {
         i71 = 0;
         i57 = 114;
        }
       }
      } while (0);
      do {
       if ((i57 | 0) == 113) {
        i57 = 0;
        __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
        HEAP32[i41 >> 2] = 1;
       } else if ((i57 | 0) == 114) {
        i57 = 0;
        if ((HEAP32[i41 >> 2] | 0) != 10) {
         break;
        }
        HEAP32[i41 >> 2] = (i71 | 0) != 0;
       }
      } while (0);
      i59 = HEAP32[i3 + 4 >> 2] | 0;
      HEAP32[i17 >> 2] = HEAP32[i3 >> 2];
      HEAP32[i17 + 4 >> 2] = i59;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
     }
     i59 = HEAP32[i10 + 4 >> 2] | 0;
     HEAP32[i17 >> 2] = HEAP32[i10 >> 2];
     HEAP32[i17 + 4 >> 2] = i59;
     HEAP32[i39 >> 2] = 5;
     if ((HEAP32[i41 >> 2] | 0) != 10) {
      i68 = 5;
      break;
     }
     HEAP32[i41 >> 2] = 5;
     i68 = 5;
    }
   } while (0);
   do {
    if (i53) {
     if ((HEAP32[i25 >> 2] | 0) != (HEAP32[i23 >> 2] | 0)) {
      break;
     }
     if ((HEAP32[i26 >> 2] | 0) == (HEAP32[i22 >> 2] | 0)) {
      i57 = 128;
      break L31;
     }
    }
   } while (0);
   L180 : do {
    switch (i68 | 0) {
    case 4:
     {
      if ((HEAP32[i27 >> 2] | 0) == 2) {
       break L180;
      }
      HEAP32[i27 >> 2] = 4;
      break;
     }
    case 3:
    case 6:
    case 8:
    case 9:
    case 10:
     {
      switch (HEAP32[i27 >> 2] | 0) {
      case 0:
      case 1:
      case 13:
      case 2:
      case 5:
       {
        HEAP32[i27 >> 2] = i68;
        break L180;
        break;
       }
      default:
       {
        HEAP32[i27 >> 2] = 10;
        break L180;
       }
      }
      break;
     }
    case 17:
    case 18:
    case 14:
    case 11:
    case 15:
    case 12:
    case 16:
     {
      break;
     }
    default:
     {
      HEAP32[i27 >> 2] = i68;
     }
    }
   } while (0);
   i59 = HEAP32[i10 >> 2] | 0;
   i60 = HEAP32[i10 + 4 >> 2] | 0;
   HEAP32[i3 >> 2] = i59;
   HEAP32[i3 + 4 >> 2] = i60;
   if ((HEAP8[i9] & 1) != 0) {
    HEAP32[i31 >> 2] = i59;
    HEAP32[i31 + 4 >> 2] = i60;
    HEAP8[i9] = 0;
   }
   HEAP32[i23 >> 2] = (HEAP32[i23 >> 2] | 0) + 1;
   if ((HEAP32[i28 >> 2] | 0) != 0) {
    if ((__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE23commitExplicitEmbeddingEv(i1) | 0) & i53) {
     i57 = 151;
     break L31;
    }
   }
   if (i53) {
    i53 = 1;
    continue L31;
   }
   i60 = HEAP32[i23 >> 2] | 0;
   i59 = HEAP32[i22 >> 2] | 0;
   if ((i60 | 0) == (HEAP32[i29 >> 2] | 0)) {
    if ((i59 | 0) == (HEAP32[i30 >> 2] | 0)) {
     break;
    }
   }
   if ((i59 | 0) == 0) {
    break;
   }
   if ((i60 | 0) >= (HEAP32[i59 + 8 >> 2] | 0)) {
    break;
   }
  }
  if ((HEAP8[i9] & 1) != 0) {
   break;
  }
  HEAP32[i12 >> 2] = HEAP32[i46 >> 2];
  HEAP32[i14 >> 2] = HEAP32[i40 >> 2];
  HEAP32[i15 >> 2] = HEAP32[i27 >> 2];
  i59 = HEAP32[i20 >> 2] | 0;
  if ((i59 | 0) != 0) {
   i60 = i59 | 0;
   HEAP32[i60 >> 2] = (HEAP32[i60 >> 2] | 0) + 1;
  }
  i60 = HEAP32[i16 >> 2] | 0;
  HEAP32[i16 >> 2] = i59;
  do {
   if ((i60 | 0) != 0) {
    i59 = i60 | 0;
    i63 = (HEAP32[i59 >> 2] | 0) - 1 | 0;
    if ((i63 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i60);
     __ZN3WTF8fastFreeEPv(i60);
     break;
    } else {
     HEAP32[i59 >> 2] = i63;
     break;
    }
   }
  } while (0);
  i60 = HEAP32[i31 + 4 >> 2] | 0;
  HEAP32[i47 >> 2] = HEAP32[i31 >> 2];
  HEAP32[i47 + 4 >> 2] = i60;
  i60 = HEAP32[i17 + 4 >> 2] | 0;
  HEAP32[i48 >> 2] = HEAP32[i17 >> 2];
  HEAP32[i48 + 4 >> 2] = i60;
  i60 = HEAP32[i3 >> 2] | 0;
  i63 = HEAP32[i3 + 4 >> 2] | 0;
  HEAP32[i49 >> 2] = i60;
  HEAP32[i49 + 4 >> 2] = i63;
  HEAP8[i19] = HEAP8[i50] & 1;
  i59 = HEAP32[i45 + 4 >> 2] | 0;
  HEAP32[i51 >> 2] = HEAP32[i45 >> 2];
  HEAP32[i51 + 4 >> 2] = i59;
  HEAP8[i18] = HEAP8[i9] & 1;
  HEAP32[i52 >> 2] = i60;
  HEAP32[i52 + 4 >> 2] = i63;
  i53 = 1;
 }
 if ((i57 | 0) == 128) {
  if ((HEAP8[i50] & 1) == 0) {
   i53 = HEAP32[i52 + 4 >> 2] | 0;
   HEAP32[i17 >> 2] = HEAP32[i52 >> 2];
   HEAP32[i17 + 4 >> 2] = i53;
   i53 = HEAP32[i46 >> 2] | 0;
   if ((i53 | 0) == 0 | (i53 | 0) == 1 | (i53 | 0) == 5) {
    HEAP32[i41 >> 2] = i53;
   } else if ((i53 | 0) == 2) {
    HEAP32[i41 >> 2] = (HEAP32[i40 >> 2] | 0) == 0 ? 0 : 2;
   }
   __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
  }
  i53 = i2;
  i30 = HEAP32[i53 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i53 >> 2];
  HEAP32[i10 + 4 >> 2] = i30;
  HEAP32[i46 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i40 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i27 >> 2] = HEAP32[i15 >> 2];
  i30 = HEAP32[i16 >> 2] | 0;
  if ((i30 | 0) != 0) {
   i53 = i30 | 0;
   HEAP32[i53 >> 2] = (HEAP32[i53 >> 2] | 0) + 1;
  }
  i53 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = i30;
  do {
   if ((i53 | 0) != 0) {
    i30 = i53 | 0;
    i29 = (HEAP32[i30 >> 2] | 0) - 1 | 0;
    if ((i29 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i53);
     __ZN3WTF8fastFreeEPv(i53);
     break;
    } else {
     HEAP32[i30 >> 2] = i29;
     break;
    }
   }
  } while (0);
  i53 = HEAP32[i47 + 4 >> 2] | 0;
  HEAP32[i31 >> 2] = HEAP32[i47 >> 2];
  HEAP32[i31 + 4 >> 2] = i53;
  i53 = HEAP32[i48 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i48 >> 2];
  HEAP32[i17 + 4 >> 2] = i53;
  i53 = HEAP32[i49 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i49 >> 2];
  HEAP32[i3 + 4 >> 2] = i53;
  HEAP8[i50] = HEAP8[i19] & 1;
  i53 = HEAP32[i51 + 4 >> 2] | 0;
  HEAP32[i45 >> 2] = HEAP32[i51 >> 2];
  HEAP32[i45 + 4 >> 2] = i53;
  HEAP8[i9] = HEAP8[i18] & 1;
  HEAP32[i41 >> 2] = 10;
 } else if ((i57 | 0) == 151) {
  i57 = i2;
  i2 = HEAP32[i57 + 4 >> 2] | 0;
  HEAP32[i10 >> 2] = HEAP32[i57 >> 2];
  HEAP32[i10 + 4 >> 2] = i2;
  HEAP32[i46 >> 2] = HEAP32[i12 >> 2];
  HEAP32[i40 >> 2] = HEAP32[i14 >> 2];
  HEAP32[i27 >> 2] = HEAP32[i15 >> 2];
  i15 = HEAP32[i16 >> 2] | 0;
  if ((i15 | 0) != 0) {
   i16 = i15 | 0;
   HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
  }
  i16 = HEAP32[i20 >> 2] | 0;
  HEAP32[i20 >> 2] = i15;
  do {
   if ((i16 | 0) != 0) {
    i15 = i16 | 0;
    i20 = (HEAP32[i15 >> 2] | 0) - 1 | 0;
    if ((i20 | 0) == 0) {
     __ZN7WebCore11BidiContextD2Ev(i16);
     __ZN3WTF8fastFreeEPv(i16);
     break;
    } else {
     HEAP32[i15 >> 2] = i20;
     break;
    }
   }
  } while (0);
  i16 = HEAP32[i47 + 4 >> 2] | 0;
  HEAP32[i31 >> 2] = HEAP32[i47 >> 2];
  HEAP32[i31 + 4 >> 2] = i16;
  i16 = HEAP32[i48 + 4 >> 2] | 0;
  HEAP32[i17 >> 2] = HEAP32[i48 >> 2];
  HEAP32[i17 + 4 >> 2] = i16;
  i16 = HEAP32[i49 + 4 >> 2] | 0;
  HEAP32[i3 >> 2] = HEAP32[i49 >> 2];
  HEAP32[i3 + 4 >> 2] = i16;
  HEAP8[i50] = HEAP8[i19] & 1;
  i19 = HEAP32[i51 + 4 >> 2] | 0;
  HEAP32[i45 >> 2] = HEAP32[i51 >> 2];
  HEAP32[i45 + 4 >> 2] = i19;
  HEAP8[i9] = HEAP8[i18] & 1;
  HEAP32[i41 >> 2] = 10;
 }
 HEAP32[i1 + 84 >> 2] = HEAP32[i1 + 80 >> 2];
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21reorderRunsFromLevelsEv(i1);
 HEAP32[i52 >> 2] = 0;
 HEAP32[i52 + 4 >> 2] = 0;
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEED2Ev(i7);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE23commitExplicitEmbeddingEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i3 = i2 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 i6 = HEAP32[i5 + 4 >> 2] & 63;
 if ((i5 | 0) == 0) {
  i7 = 0;
 } else {
  i8 = i5 | 0;
  HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
  i7 = i5;
 }
 i5 = i1 + 132 | 0;
 i8 = i1 + 140 | 0;
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
    if ((i14 | 0) == 16) {
     i13 = HEAP32[i12 + 8 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = i12;
      break;
     }
     i17 = i13 | 0;
     HEAP32[i17 >> 2] = (HEAP32[i17 >> 2] | 0) + 1;
     if ((i12 | 0) == 0) {
      i16 = i13;
      break;
     }
     i17 = i12 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
      i16 = i13;
      break;
     } else {
      HEAP32[i17 >> 2] = i18;
      i16 = i13;
      break;
     }
    } else if ((i14 | 0) == 14) {
     i19 = 1;
     i20 = 0;
     i21 = HEAP32[i12 + 4 >> 2] & 63;
     i22 = 13;
    } else {
     i13 = (i14 | 0) == 15;
     i18 = i13 & 1;
     i17 = (i14 | 0) == 12;
     i23 = HEAP32[i12 + 4 >> 2] & 63;
     if (!(i17 | i13 ^ 1)) {
      i19 = i18;
      i20 = 1;
      i21 = i23;
      i22 = 13;
      break;
     }
     i24 = i23 + 2 & 126;
     i25 = i18;
     i26 = i17;
     i22 = 15;
    }
   } while (0);
   if ((i22 | 0) == 13) {
    i22 = 0;
    i24 = i21 + 1 & 255 | 1;
    i25 = i19;
    i26 = i20;
    i22 = 15;
   }
   do {
    if ((i22 | 0) == 15) {
     i22 = 0;
     if ((i24 & 255) >>> 0 >= 61 >>> 0) {
      i16 = i12;
      break;
     }
     __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i3, i24, i25, i26, i15, i12);
     i14 = HEAP32[i11 >> 2] | 0;
     HEAP32[i11 >> 2] = 0;
     if ((i12 | 0) == 0) {
      i16 = i14;
      break;
     }
     i17 = i12 | 0;
     i18 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i18 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i12);
      __ZN3WTF8fastFreeEPv(i12);
     } else {
      HEAP32[i17 >> 2] = i18;
     }
     i18 = HEAP32[i11 >> 2] | 0;
     if ((i18 | 0) == 0) {
      i16 = i14;
      break;
     }
     i17 = i18 | 0;
     i23 = (HEAP32[i17 >> 2] | 0) - 1 | 0;
     if ((i23 | 0) == 0) {
      __ZN7WebCore11BidiContextD2Ev(i18);
      __ZN3WTF8fastFreeEPv(i18);
      i16 = i14;
      break;
     } else {
      HEAP32[i17 >> 2] = i23;
      i16 = i14;
      break;
     }
    }
   } while (0);
   i15 = i7 + 1 | 0;
   if (i15 >>> 0 < (HEAP32[i8 >> 2] | 0) >>> 0) {
    i12 = i16;
    i7 = i15;
   } else {
    i9 = i16;
    break;
   }
  }
 }
 i16 = HEAP32[i9 + 4 >> 2] | 0;
 i7 = i16 & 63;
 i12 = i6 & 255;
 if ((i7 & 255) >>> 0 > (i6 & 255) >>> 0) {
  __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i12 & 1, i16 & 1);
  i22 = 30;
 } else {
  if ((i7 & 255) >>> 0 < (i6 & 255) >>> 0) {
   __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i12 & 1);
  }
  if ((i9 | 0) == 0) {
   i27 = 1;
  } else {
   i22 = 30;
  }
 }
 if ((i22 | 0) == 30) {
  i22 = i9 | 0;
  HEAP32[i22 >> 2] = (HEAP32[i22 >> 2] | 0) + 1;
  i27 = 0;
 }
 i22 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i9;
 do {
  if ((i22 | 0) != 0) {
   i4 = i22 | 0;
   i12 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i12 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i22);
    __ZN3WTF8fastFreeEPv(i22);
    break;
   } else {
    HEAP32[i4 >> 2] = i12;
    break;
   }
  }
 } while (0);
 i22 = i1 + 136 | 0;
 do {
  if ((HEAP32[i22 >> 2] | 0) != 0) {
   if ((HEAP32[i8 >> 2] | 0) != 0) {
    HEAP32[i8 >> 2] = 0;
   }
   i12 = i5 | 0;
   i4 = HEAP32[i12 >> 2] | 0;
   i16 = i1 + 144 | 0;
   if ((i16 | 0) == (i4 | 0) | (i4 | 0) == 0) {
    i28 = i4;
   } else {
    HEAP32[i12 >> 2] = 0;
    HEAP32[i22 >> 2] = 0;
    __ZN3WTF8fastFreeEPv(i4);
    i28 = HEAP32[i12 >> 2] | 0;
   }
   if ((i28 | 0) != 0) {
    break;
   }
   HEAP32[i12 >> 2] = i16;
   HEAP32[i22 >> 2] = 8;
  }
 } while (0);
 i22 = i6 << 24 >> 24 != i7 << 24 >> 24;
 if (i27) {
  STACKTOP = i2;
  return i22 | 0;
 }
 i27 = i9 | 0;
 i7 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
 if ((i7 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i9);
  __ZN3WTF8fastFreeEPv(i9);
  STACKTOP = i2;
  return i22 | 0;
 } else {
  HEAP32[i27 >> 2] = i7;
  STACKTOP = i2;
  return i22 | 0;
 }
 return 0;
}
function __ZN7WebCore15GraphicsContext12drawBidiTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointENS1_24CustomFontNotReadyActionE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, d25 = +0, i26 = 0, i27 = 0, i28 = 0, i29 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 208 | 0;
 i7 = i6 | 0;
 i8 = i7 | 0;
 i9 = i7;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = i12;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 36 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i6;
  return;
 }
 i15 = i7 + 32 | 0;
 _memset(i7 | 0, 0, 32) | 0;
 HEAP32[i15 >> 2] = 10;
 i16 = i9 + 36 | 0;
 HEAP32[i16 >> 2] = 10;
 i17 = i7 + 40 | 0;
 HEAP32[i17 >> 2] = 10;
 i18 = i9 + 44 | 0;
 HEAP32[i18 >> 2] = 0;
 HEAP32[i7 + 48 >> 2] = 10;
 HEAP32[i9 + 52 >> 2] = 0;
 HEAP32[i7 + 56 >> 2] = 0;
 HEAP8[i9 + 60 | 0] = 0;
 HEAP32[i7 + 64 >> 2] = 0;
 HEAP32[i9 + 68 >> 2] = 0;
 HEAP8[i7 + 72 | 0] = 1;
 i19 = i9 + 76 | 0;
 _memset(i19 | 0, 0, 37) | 0;
 _memset(i9 + 116 | 0, 0, 16) | 0;
 HEAP32[i9 + 132 >> 2] = i7 + 144;
 HEAP32[i7 + 136 >> 2] = 8;
 HEAP32[i9 + 140 >> 2] = 0;
 i20 = HEAP32[i3 + 24 >> 2] | 0;
 __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i10, i20 >>> 4 & 1, (i20 & 32 | 0) != 0);
 HEAP32[i15 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i16 >> 2] = HEAP32[i10 + 4 >> 2];
 HEAP32[i17 >> 2] = HEAP32[i10 + 8 >> 2];
 i17 = HEAP32[i10 + 12 >> 2] | 0;
 i10 = (i17 | 0) == 0;
 if (!i10) {
  i16 = i17 | 0;
  HEAP32[i16 >> 2] = (HEAP32[i16 >> 2] | 0) + 1;
 }
 i16 = HEAP32[i18 >> 2] | 0;
 HEAP32[i18 >> 2] = i17;
 do {
  if ((i16 | 0) != 0) {
   i18 = i16 | 0;
   i15 = (HEAP32[i18 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i16);
    __ZN3WTF8fastFreeEPv(i16);
    break;
   } else {
    HEAP32[i18 >> 2] = i15;
    break;
   }
  }
 } while (0);
 do {
  if (!i10) {
   i16 = i17 | 0;
   i15 = (HEAP32[i16 >> 2] | 0) - 1 | 0;
   if ((i15 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i17);
    __ZN3WTF8fastFreeEPv(i17);
    break;
   } else {
    HEAP32[i16 >> 2] = i15;
    break;
   }
  }
 } while (0);
 HEAP32[i8 >> 2] = i3;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = HEAP32[i3 + 8 >> 2] | 0;
 HEAP32[i11 >> 2] = i3;
 HEAP32[i11 + 4 >> 2] = i8;
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb(i9, i11, 0, 0);
 i11 = i7 + 88 | 0;
 do {
  if ((HEAP32[i11 >> 2] | 0) != 0) {
   i8 = i4;
   i17 = HEAP32[i8 + 4 >> 2] | 0;
   HEAP32[i12 >> 2] = HEAP32[i8 >> 2];
   HEAP32[i12 + 4 >> 2] = i17;
   i17 = i19 | 0;
   i8 = HEAP32[i17 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i10 = i3;
   i15 = i14 | 0;
   i16 = i14 + 8 | 0;
   i18 = i14 + 24 | 0;
   i20 = i14 + 32 | 0;
   i21 = i12;
   i22 = i13 + 4 | 0;
   i23 = i8;
   while (1) {
    i8 = HEAP32[i23 + 8 >> 2] | 0;
    i24 = (HEAP32[i23 + 12 >> 2] | 0) - i8 | 0;
    __ZN7WebCore7TextRunC2ERKS0_(i14, i3);
    HEAP32[i15 >> 2] = (HEAP32[i10 >> 2] | 0) + (i8 << 1);
    HEAP32[i16 >> 2] = i24;
    i24 = HEAP32[i18 >> 2] | 0;
    HEAP32[i18 >> 2] = i24 & -5;
    i8 = ((HEAP8[i23 + 1 | 0] ^ 1) & 255) << 4 & 16 | i24 & -21;
    HEAP32[i18 >> 2] = i8;
    HEAP32[i18 >> 2] = i8 & -37 | (HEAP8[i23 | 0] & 1) << 5;
    +__ZNK7WebCore4Font8drawTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEiiNS0_24CustomFontNotReadyActionE(i2, i1, i14, i13, 0, -1, i5);
    i23 = HEAP32[i23 + 4 >> 2] | 0;
    i8 = (i23 | 0) == 0;
    if (!i8) {
     d25 = +__ZNK7WebCore4Font5widthERKNS_7TextRunEPN3WTF7HashSetIPKNS_14SimpleFontDataENS4_7PtrHashIS8_EENS4_10HashTraitsIS8_EEEEPNS_13GlyphOverflowE(i2, i14, 0, 0);
     HEAPF32[i21 >> 2] = d25 + +HEAPF32[i21 >> 2];
     HEAPF32[i22 >> 2] = +HEAPF32[i22 >> 2] + +0;
    }
    i24 = HEAP32[i20 >> 2] | 0;
    do {
     if ((i24 | 0) != 0) {
      i26 = i24 + 4 | 0;
      i27 = i26 | 0;
      i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
      if ((i28 | 0) != 0) {
       HEAP32[i27 >> 2] = i28;
       break;
      }
      i28 = i26 - 4 | 0;
      if ((i28 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 3](i28);
     }
    } while (0);
    if (i8) {
     break;
    }
   }
   i20 = HEAP32[i17 >> 2] | 0;
   if ((i20 | 0) == 0) {
    break;
   } else {
    i29 = i20;
   }
   while (1) {
    i20 = HEAP32[i29 + 4 >> 2] | 0;
    __ZdlPv(i29 | 0);
    if ((i20 | 0) == 0) {
     break;
    } else {
     i29 = i20;
    }
   }
   HEAP32[i17 >> 2] = 0;
   HEAP32[i7 + 80 >> 2] = 0;
   HEAP32[i11 >> 2] = 0;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEED2Ev(i9);
 STACKTOP = i6;
 return;
}
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21reorderRunsFromLevelsEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0;
 i2 = i1 + 76 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  i4 = -128;
  i5 = 0;
 } else {
  i6 = -128;
  i7 = 0;
  i8 = i3;
  while (1) {
   i3 = HEAP8[i8 + 1 | 0] | 0;
   i9 = (i3 & 255) >>> 0 < (i7 & 255) >>> 0 ? i7 : i3;
   i10 = (i6 & 255) >>> 0 < (i3 & 255) >>> 0 ? i6 : i3;
   i3 = HEAP32[i8 + 4 >> 2] | 0;
   if ((i3 | 0) == 0) {
    i4 = i10;
    i5 = i9;
    break;
   } else {
    i6 = i10;
    i7 = i9;
    i8 = i3;
   }
  }
 }
 i8 = (i4 & 1 ^ 1) + i4 & 255;
 i4 = (HEAP32[i1 + 88 >> 2] | 0) - 1 | 0;
 if ((i5 & 255) >>> 0 < (i8 & 255) >>> 0) {
  return;
 }
 i7 = i1 + 80 | 0;
 if ((i4 | 0) == 0) {
  i1 = i5;
  while (1) {
   i1 = i1 - 1 & 255;
   if ((i1 & 255) >>> 0 < (i8 & 255) >>> 0) {
    break;
   }
  }
  return;
 } else {
  i11 = i5;
 }
 while (1) {
  i5 = HEAP32[i2 >> 2] | 0;
  i1 = 0;
  while (1) {
   L16 : do {
    if (i1 >>> 0 >= i4 >>> 0 | (i5 | 0) == 0) {
     i12 = i5;
     i13 = i1;
    } else {
     i6 = i5;
     i3 = i1;
     while (1) {
      if ((HEAPU8[i6 + 1 | 0] | 0) >>> 0 >= (i11 & 255) >>> 0) {
       i12 = i6;
       i13 = i3;
       break L16;
      }
      i9 = HEAP32[i6 + 4 >> 2] | 0;
      i10 = i3 + 1 | 0;
      if (i10 >>> 0 >= i4 >>> 0 | (i9 | 0) == 0) {
       i12 = i9;
       i13 = i10;
       break;
      } else {
       i6 = i9;
       i3 = i10;
      }
     }
    }
   } while (0);
   L21 : do {
    if (i13 >>> 0 > i4 >>> 0 | (i12 | 0) == 0) {
     i14 = i12;
     i15 = i13;
    } else {
     i3 = i12;
     i6 = i13;
     while (1) {
      if ((HEAPU8[i3 + 1 | 0] | 0) >>> 0 < (i11 & 255) >>> 0) {
       i14 = i3;
       i15 = i6;
       break L21;
      }
      i10 = HEAP32[i3 + 4 >> 2] | 0;
      i9 = i6 + 1 | 0;
      if (i9 >>> 0 > i4 >>> 0 | (i10 | 0) == 0) {
       i14 = i10;
       i15 = i9;
       break;
      } else {
       i3 = i10;
       i6 = i9;
      }
     }
    }
   } while (0);
   i6 = i15 - 1 | 0;
   do {
    if (i13 >>> 0 < i6 >>> 0) {
     i3 = HEAP32[i2 >> 2] | 0;
     if ((i13 | 0) == 0) {
      i16 = 0;
      i17 = 0;
      i18 = i3;
     } else {
      i9 = 0;
      i10 = i3;
      while (1) {
       i3 = i9 + 1 | 0;
       i19 = HEAP32[i10 + 4 >> 2] | 0;
       if (i3 >>> 0 < i13 >>> 0) {
        i9 = i3;
        i10 = i19;
       } else {
        i16 = i13;
        i17 = i10;
        i18 = i19;
        break;
       }
      }
     }
     if (i16 >>> 0 < i6 >>> 0) {
      i10 = i16;
      i9 = i18;
      while (1) {
       i19 = i10 + 1 | 0;
       i3 = HEAP32[i9 + 4 >> 2] | 0;
       if (i19 >>> 0 < i6 >>> 0) {
        i10 = i19;
        i9 = i3;
       } else {
        i20 = i3;
        break;
       }
      }
     } else {
      i20 = i18;
     }
     i9 = HEAP32[i20 + 4 >> 2] | 0;
     if (i13 >>> 0 <= i6 >>> 0) {
      i10 = i13;
      i3 = i9;
      i19 = i18;
      while (1) {
       i21 = i19 + 4 | 0;
       i22 = HEAP32[i21 >> 2] | 0;
       HEAP32[i21 >> 2] = i3;
       i21 = i10 + 1 | 0;
       if (i21 >>> 0 > i6 >>> 0) {
        break;
       } else {
        i10 = i21;
        i3 = i19;
        i19 = i22;
       }
      }
     }
     if ((i17 | 0) == 0) {
      HEAP32[i2 >> 2] = i20;
     } else {
      HEAP32[i17 + 4 >> 2] = i20;
     }
     HEAP32[i18 + 4 >> 2] = i9;
     if ((i9 | 0) != 0) {
      break;
     }
     HEAP32[i7 >> 2] = i18;
    }
   } while (0);
   if (i15 >>> 0 < i4 >>> 0) {
    i5 = i14;
    i1 = i15;
   } else {
    break;
   }
  }
  i11 = i11 - 1 & 255;
  if ((i11 & 255) >>> 0 < (i8 & 255) >>> 0) {
   break;
  }
 }
 return;
}
function __ZN7WebCore20GraphicsContextStateaSERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i4 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i4;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 4 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i4 = i5 + 4 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = i1 + 4 | 0;
 i3 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i4 = i5 | 0;
   i6 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) != 0) {
    HEAP32[i4 >> 2] = i6;
    break;
   }
   i6 = i5 - 4 | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 3](i6);
  }
 } while (0);
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 if ((i3 | 0) != 0) {
  i6 = i3 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 8 | 0;
 i5 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i3;
 do {
  if ((i5 | 0) != 0) {
   i3 = i5 | 0;
   i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i5);
    __ZN3WTF8fastFreeEPv(i5);
    break;
   } else {
    HEAP32[i3 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i5 = HEAP32[i2 + 12 >> 2] | 0;
 if ((i5 | 0) != 0) {
  i6 = i5 + 4 | 0;
  HEAP32[i6 >> 2] = (HEAP32[i6 >> 2] | 0) + 1;
 }
 i6 = i1 + 12 | 0;
 i3 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i3 | 0) != 0) {
   i5 = i3 + 4 | 0;
   i6 = i5 | 0;
   i4 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i6 >> 2] = i4;
    break;
   }
   i4 = i5 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 i5 = i1 + 36 | 0;
 i4 = i2 + 36 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i5 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
 i4 = i1 + 44 | 0;
 i5 = i2 + 44 | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i4 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 i5 = i1 + 52 | 0;
 i4 = i2 + 52 | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i5 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
 HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 64 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 i4 = i2 + 88 | 0;
 i2 = i1 + 88 | 0;
 i5 = HEAP8[i2] & -2 | HEAP8[i4] & 1;
 HEAP8[i2] = i5;
 i3 = i5 & -3 | HEAP8[i4] & 2;
 HEAP8[i2] = i3;
 i5 = i3 & -5 | HEAP8[i4] & 4;
 HEAP8[i2] = i5;
 i3 = i5 & -9 | HEAP8[i4] & 8;
 HEAP8[i2] = i3;
 i5 = i3 & -17 | HEAP8[i4] & 16;
 HEAP8[i2] = i5;
 HEAP8[i2] = i5 & -33 | HEAP8[i4] & 32;
 return i1 | 0;
}
function __ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 i1 = i5 + (i6 * 92 & -1) | 0;
 if (i2 >>> 0 > 46684427 >>> 0) {
  _WTFCrash();
 }
 i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 92 & -1) | 0;
 HEAP32[i3 >> 2] = (i7 >>> 0) / 92 & -1;
 i2 = __ZN3WTF10fastMallocEj(i7) | 0;
 HEAP32[i4 >> 2] = i2;
 if ((i6 | 0) != 0) {
  i6 = i5;
  i7 = i2;
  while (1) {
   i2 = i6 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 >> 2] = i8;
   i8 = i6 + 4 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = i2;
   i2 = i6 + 8 | 0;
   i8 = HEAP32[i2 >> 2] | 0;
   HEAP32[i2 >> 2] = 0;
   HEAP32[i7 + 8 >> 2] = i8;
   i8 = i6 + 12 | 0;
   i2 = HEAP32[i8 >> 2] | 0;
   HEAP32[i8 >> 2] = 0;
   HEAP32[i7 + 12 >> 2] = i2;
   i2 = i6 + 16 | 0;
   i8 = i7 + 16 | 0;
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   HEAPF32[i7 + 24 >> 2] = +HEAPF32[i6 + 24 >> 2];
   HEAPF32[i7 + 28 >> 2] = +HEAPF32[i6 + 28 >> 2];
   HEAP32[i7 + 32 >> 2] = HEAP32[i6 + 32 >> 2];
   i9 = i6 + 36 | 0;
   i8 = i7 + 36 | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = i2;
   i2 = i6 + 44 | 0;
   i8 = i7 + 44 | 0;
   i9 = HEAP32[i2 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i2 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
   i9 = i6 + 52 | 0;
   i8 = i7 + 52 | 0;
   i2 = HEAP32[i9 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
   HEAP32[i8 + 4 >> 2] = i2;
   HEAP32[i7 + 60 >> 2] = HEAP32[i6 + 60 >> 2];
   HEAP32[i7 + 64 >> 2] = HEAP32[i6 + 64 >> 2];
   HEAP32[i7 + 68 >> 2] = HEAP32[i6 + 68 >> 2];
   HEAP32[i7 + 72 >> 2] = HEAP32[i6 + 72 >> 2];
   HEAP32[i7 + 76 >> 2] = HEAP32[i6 + 76 >> 2];
   HEAP32[i7 + 80 >> 2] = HEAP32[i6 + 80 >> 2];
   HEAP32[i7 + 84 >> 2] = HEAP32[i6 + 84 >> 2];
   i2 = i6 + 88 | 0;
   i8 = i7 + 88 | 0;
   i9 = HEAP8[i8] & -2 | HEAP8[i2] & 1;
   HEAP8[i8] = i9;
   i10 = i9 & -3 | HEAP8[i2] & 2;
   HEAP8[i8] = i10;
   i9 = i10 & -5 | HEAP8[i2] & 4;
   HEAP8[i8] = i9;
   i10 = i9 & -9 | HEAP8[i2] & 8;
   HEAP8[i8] = i10;
   i9 = i10 & -17 | HEAP8[i2] & 16;
   HEAP8[i8] = i9;
   HEAP8[i8] = i9 & -33 | HEAP8[i2] & 32;
   __ZN7WebCore20GraphicsContextStateD2Ev(i6);
   i2 = i6 + 92 | 0;
   if ((i2 | 0) == (i1 | 0)) {
    break;
   } else {
    i6 = i2;
    i7 = i7 + 92 | 0;
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
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 if ((HEAP8[i1 + 72 | 0] & 1) != 0) {
  i2 = i1 + 48 | 0;
  HEAP32[i2 >> 2] = 10;
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = 10;
  return;
 }
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == 0) {
  i2 = i1 + 48 | 0;
  HEAP32[i2 >> 2] = 10;
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = 10;
  return;
 }
 i6 = i1 + 20 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 if ((i7 | 0) >= (HEAP32[i5 + 8 >> 2] | 0)) {
  i2 = i1 + 48 | 0;
  HEAP32[i2 >> 2] = 10;
  i3 = i1 + 32 | 0;
  HEAP32[i3 >> 2] = 10;
  return;
 }
 i5 = i1 + 8 | 0;
 i8 = HEAP32[i1 + 12 >> 2] | 0;
 i9 = HEAP32[i1 + 52 >> 2] | 0;
 do {
  if ((i9 | 0) == 0) {
   i10 = i7;
  } else {
   i11 = HEAP32[i1 + 56 >> 2] | 0;
   if ((i11 | 0) >= (HEAP32[i9 + 8 >> 2] | 0) | i7 >>> 0 < i11 >>> 0) {
    i10 = i7;
    break;
   }
   HEAP8[i1 + 60 | 0] = 1;
   i10 = i11;
  }
 } while (0);
 if (i10 >>> 0 < i8 >>> 0) {
  i12 = i7;
 } else {
  i7 = __Znwj(16) | 0;
  i9 = i7;
  i11 = HEAP32[i1 + 48 >> 2] | 0;
  i13 = (HEAP32[i1 + 44 >> 2] | 0) + 4 | 0;
  HEAP8[i7] = (HEAP32[i13 >> 2] | 0) >>> 11 & 1;
  HEAP32[i7 + 4 >> 2] = 0;
  HEAP32[i7 + 8 >> 2] = i8;
  HEAP32[i7 + 12 >> 2] = i10 + 1;
  i10 = HEAP32[i13 >> 2] | 0;
  if ((i11 | 0) == 10) {
   i14 = i10 >>> 6 & 31;
  } else {
   i14 = i11;
  }
  i11 = i10 & 255;
  i10 = i11 & 63;
  i13 = i7 + 1 | 0;
  HEAP8[i13] = i10;
  do {
   if ((i11 & 1) == 0) {
    if ((i14 | 0) == 1) {
     HEAP8[i13] = i10 + 1;
     break;
    } else if ((i14 | 0) == 5 | (i14 | 0) == 2) {
     HEAP8[i13] = i10 + 2;
     break;
    } else {
     break;
    }
   } else {
    if (!((i14 | 0) == 5 | (i14 | 0) == 2 | (i14 | 0) == 0)) {
     break;
    }
    HEAP8[i13] = i10 + 1;
   }
  } while (0);
  i10 = i1 + 76 | 0;
  if ((HEAP32[i10 >> 2] | 0) == 0) {
   HEAP32[i10 >> 2] = i9;
   i15 = i1 + 80 | 0;
  } else {
   i10 = i1 + 80 | 0;
   HEAP32[(HEAP32[i10 >> 2] | 0) + 4 >> 2] = i9;
   i15 = i10;
  }
  HEAP32[i15 >> 2] = i9;
  i9 = i1 + 88 | 0;
  HEAP32[i9 >> 2] = (HEAP32[i9 >> 2] | 0) + 1;
  i12 = HEAP32[i6 >> 2] | 0;
 }
 HEAP32[i6 >> 2] = i12 + 1;
 i12 = i4;
 i4 = i5;
 i5 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i2 = i1 + 48 | 0;
 HEAP32[i2 >> 2] = 10;
 i3 = i1 + 32 | 0;
 HEAP32[i3 >> 2] = 10;
 return;
}
function __ZN7WebCore15GraphicsContext16setStrokePatternEN3WTF10PassRefPtrINS_7PatternEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = -16777216;
  HEAP8[i4 + 4 | 0] = 1;
  i2 = i1 + 40 | 0;
  i6 = i4;
  HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
  HEAP8[i2 + 4 | 0] = HEAP8[i6 + 4 | 0] | 0;
  HEAP32[i1 + 72 >> 2] = 0;
  i6 = i1 + 4 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i2 | 0) != 0) {
    i6 = i2 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i2);
     __ZN3WTF8fastFreeEPv(i2);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i2 = i1 + 8 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i2 = i7 + 4 | 0;
    i6 = i2 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i6 >> 2] = i8;
     break;
    }
    i8 = i2 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
   }
  } while (0);
  __ZN7WebCore15GraphicsContext22setPlatformStrokeColorERKNS_5ColorENS_10ColorSpaceE(i1, i4, 0);
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 4 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 8 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i7 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext14setFillPatternEN3WTF10PassRefPtrINS_7PatternEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  HEAP32[i4 >> 2] = -16777216;
  HEAP8[i4 + 4 | 0] = 1;
  i2 = i1 + 48 | 0;
  i6 = i4;
  HEAP32[i2 >> 2] = HEAP32[i6 >> 2];
  HEAP8[i2 + 4 | 0] = HEAP8[i6 + 4 | 0] | 0;
  HEAP32[i1 + 76 >> 2] = 0;
  i6 = i1 + 12 | 0;
  i2 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i2 | 0) != 0) {
    i6 = i2 | 0;
    i7 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i7 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i2);
     __ZN3WTF8fastFreeEPv(i2);
     break;
    } else {
     HEAP32[i6 >> 2] = i7;
     break;
    }
   }
  } while (0);
  i2 = i1 + 16 | 0;
  i7 = HEAP32[i2 >> 2] | 0;
  HEAP32[i2 >> 2] = 0;
  do {
   if ((i7 | 0) != 0) {
    i2 = i7 + 4 | 0;
    i6 = i2 | 0;
    i8 = (HEAP32[i6 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) != 0) {
     HEAP32[i6 >> 2] = i8;
     break;
    }
    i8 = i2 - 4 | 0;
    if ((i8 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i8 >> 2] | 0) + 4 >> 2] & 3](i8);
   }
  } while (0);
  __ZN7WebCore15GraphicsContext20setPlatformFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i4, 0);
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 12 | 0;
 i7 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i7 | 0) != 0) {
   i4 = i7 | 0;
   i8 = (HEAP32[i4 >> 2] | 0) - 1 | 0;
   if ((i8 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i7);
    __ZN3WTF8fastFreeEPv(i7);
    break;
   } else {
    HEAP32[i4 >> 2] = i8;
    break;
   }
  }
 } while (0);
 i7 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 16 | 0;
 i1 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i7;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i7 = i1 + 4 | 0;
 i1 = i7 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i7 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext17setStrokeGradientEN3WTF10PassRefPtrINS_8GradientEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = -16777216;
  HEAP8[i4 + 4 | 0] = 1;
  i6 = i1 + 40 | 0;
  i7 = i4;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP8[i6 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
  HEAP32[i1 + 72 >> 2] = 0;
  i7 = i1 + 4 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i6 = i1 + 8 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 + 4 | 0;
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
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
   }
  } while (0);
  __ZN7WebCore15GraphicsContext22setPlatformStrokeColorERKNS_5ColorENS_10ColorSpaceE(i1, i4, 0);
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext15setFillGradientEN3WTF10PassRefPtrINS_8GradientEEE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 i5 = i2 | 0;
 i2 = HEAP32[i5 >> 2] | 0;
 if ((i2 | 0) == 0) {
  HEAP32[i4 >> 2] = -16777216;
  HEAP8[i4 + 4 | 0] = 1;
  i6 = i1 + 48 | 0;
  i7 = i4;
  HEAP32[i6 >> 2] = HEAP32[i7 >> 2];
  HEAP8[i6 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
  HEAP32[i1 + 76 >> 2] = 0;
  i7 = i1 + 12 | 0;
  i6 = HEAP32[i7 >> 2] | 0;
  HEAP32[i7 >> 2] = 0;
  do {
   if ((i6 | 0) != 0) {
    i7 = i6 | 0;
    i8 = (HEAP32[i7 >> 2] | 0) - 1 | 0;
    if ((i8 | 0) == 0) {
     __ZN7WebCore8GradientD1Ev(i6);
     __ZN3WTF8fastFreeEPv(i6);
     break;
    } else {
     HEAP32[i7 >> 2] = i8;
     break;
    }
   }
  } while (0);
  i6 = i1 + 16 | 0;
  i8 = HEAP32[i6 >> 2] | 0;
  HEAP32[i6 >> 2] = 0;
  do {
   if ((i8 | 0) != 0) {
    i6 = i8 + 4 | 0;
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
    FUNCTION_TABLE_vi[HEAP32[(HEAP32[i9 >> 2] | 0) + 4 >> 2] & 3](i9);
   }
  } while (0);
  __ZN7WebCore15GraphicsContext20setPlatformFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i4, 0);
  STACKTOP = i3;
  return;
 }
 HEAP32[i5 >> 2] = 0;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = i2;
 do {
  if ((i4 | 0) != 0) {
   i2 = i4 | 0;
   i5 = (HEAP32[i2 >> 2] | 0) - 1 | 0;
   if ((i5 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i2 >> 2] = i5;
    break;
   }
  }
 } while (0);
 i4 = i1 + 16 | 0;
 i1 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 if ((i1 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i4 = i1 + 4 | 0;
 i1 = i4 | 0;
 i5 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i5 | 0) != 0) {
  HEAP32[i1 >> 2] = i5;
  STACKTOP = i3;
  return;
 }
 i5 = i4 - 4 | 0;
 if ((i5 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i4 = i1 + 72 | 0;
 i5 = i1 + 16 | 0;
 do {
  if ((HEAP8[i4] & 1) == 0) {
   i6 = i1 + 24 | 0;
   if ((HEAP32[i1 + 20 >> 2] | 0) == (HEAP32[i1 + 28 >> 2] | 0)) {
    if ((HEAP32[i5 >> 2] | 0) == (HEAP32[i6 >> 2] | 0)) {
     break;
    }
   }
   i7 = i1 + 48 | 0;
   if ((HEAP32[i7 >> 2] | 0) == 10) {
    HEAP32[i7 >> 2] = (HEAP32[i1 + 36 >> 2] | 0) != 0;
   }
   i8 = HEAP32[i1 + 32 >> 2] | 0;
   do {
    if ((i3 | 0) == 0) {
     if ((i8 | 0) == 2) {
      if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i7 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      break;
     } else if ((i8 | 0) == 5) {
      HEAP32[i7 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      break;
     } else {
      if (!((HEAP32[i1 + 36 >> 2] | 0) != 0 & (i2 | 0) == 0)) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      HEAP32[i7 >> 2] = 0;
      break;
     }
    } else {
     if ((i8 | 0) == 2) {
      if (!((HEAP32[i1 + 36 >> 2] | 0) != 0 | (i2 | 0) == 1)) {
       break;
      }
     } else if ((i8 | 0) != 5) {
      if (!((HEAP32[i1 + 36 >> 2] | 0) == 0 & (i2 | 0) == 1)) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
     HEAP32[i7 >> 2] = 1;
    }
   } while (0);
   i7 = i6;
   i8 = i5;
   i9 = HEAP32[i7 + 4 >> 2] | 0;
   HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
   HEAP32[i8 + 4 >> 2] = i9;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
 HEAP8[i4] = 1;
 HEAP32[i1 + 40 >> 2] = i3;
 HEAP32[i1 + 36 >> 2] = i3;
 i3 = i5;
 HEAP32[i3 >> 2] = 0;
 HEAP32[i3 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb(i1, i2, i3, i4, i5, i6, i7, i8, i9, i10) {
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
 STACKTOP = STACKTOP + 104 | 0;
 i12 = i11 | 0;
 i13 = i11 + 8 | 0;
 i14 = i11 + 24 | 0;
 i15 = i11 + 40 | 0;
 i16 = i11 + 56 | 0;
 i17 = i11 + 72 | 0;
 i18 = i11 + 88 | 0;
 i19 = i1 + 92 | 0;
 if ((HEAP8[i19] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i11;
  return;
 }
 if ((i8 | i7 | 0) == 0) {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i13, i4);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i14, i5);
  if ((HEAP8[i19] & 8) != 0) {
   STACKTOP = i11;
   return;
  }
  i19 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
  HEAP32[i12 >> 2] = 0;
  HEAP32[i12 + 4 >> 2] = 1;
  FUNCTION_TABLE_viiiiiiii[i19 & 1](i2, i1, i13, i14, i3, i9, 0, i12);
  STACKTOP = i11;
  return;
 }
 if (i10) {
  i10 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 2);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i15, i4);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i16, i5);
  __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_9FloatSizeENS0_8TileRuleES9_NS_10ColorSpaceENS_17CompositeOperatorE(i2, i1, i15, i16, i6, i7, i8, i3, i9);
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i10);
  STACKTOP = i11;
  return;
 } else {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i17, i4);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i18, i5);
  __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectES5_RKNS_9FloatSizeENS0_8TileRuleES9_NS_10ColorSpaceENS_17CompositeOperatorE(i2, i1, i17, i18, i6, i7, i8, i3, i9);
  STACKTOP = i11;
  return;
 }
}
function __ZN7WebCore20GraphicsContextStateC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i1 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i1 + 4 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = HEAP32[i2 + 8 >> 2] | 0;
 HEAP32[i1 + 8 >> 2] = i3;
 if ((i3 | 0) != 0) {
  i4 = i3 | 0;
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 i4 = HEAP32[i2 + 12 >> 2] | 0;
 HEAP32[i1 + 12 >> 2] = i4;
 if ((i4 | 0) != 0) {
  i3 = i4 + 4 | 0;
  HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 }
 i3 = i2 + 16 | 0;
 i4 = i1 + 16 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 HEAPF32[i1 + 24 >> 2] = +HEAPF32[i2 + 24 >> 2];
 HEAPF32[i1 + 28 >> 2] = +HEAPF32[i2 + 28 >> 2];
 HEAP32[i1 + 32 >> 2] = HEAP32[i2 + 32 >> 2];
 i5 = i2 + 36 | 0;
 i4 = i1 + 36 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 i3 = i2 + 44 | 0;
 i4 = i1 + 44 | 0;
 i5 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i4 + 4 >> 2] = i5;
 i5 = i2 + 52 | 0;
 i4 = i1 + 52 | 0;
 i3 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i4 + 4 >> 2] = i3;
 HEAP32[i1 + 60 >> 2] = HEAP32[i2 + 60 >> 2];
 HEAP32[i1 + 64 >> 2] = HEAP32[i2 + 64 >> 2];
 HEAP32[i1 + 68 >> 2] = HEAP32[i2 + 68 >> 2];
 HEAP32[i1 + 72 >> 2] = HEAP32[i2 + 72 >> 2];
 HEAP32[i1 + 76 >> 2] = HEAP32[i2 + 76 >> 2];
 HEAP32[i1 + 80 >> 2] = HEAP32[i2 + 80 >> 2];
 HEAP32[i1 + 84 >> 2] = HEAP32[i2 + 84 >> 2];
 i3 = i2 + 88 | 0;
 i2 = i1 + 88 | 0;
 i1 = HEAP8[i2] & -2 | HEAP8[i3] & 1;
 HEAP8[i2] = i1;
 i4 = i1 & -3 | HEAP8[i3] & 2;
 HEAP8[i2] = i4;
 i1 = i4 & -5 | HEAP8[i3] & 4;
 HEAP8[i2] = i1;
 i4 = i1 & -9 | HEAP8[i3] & 8;
 HEAP8[i2] = i4;
 i1 = i4 & -17 | HEAP8[i3] & 16;
 HEAP8[i2] = i1;
 HEAP8[i2] = i1 & -33 | HEAP8[i3] & 32;
 return;
}
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27lowerExplicitEmbeddingLevelE14UCharDirection(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 i3 = i1 + 72 | 0;
 i4 = i1 + 16 | 0;
 do {
  if ((HEAP8[i3] & 1) == 0) {
   i5 = i1 + 24 | 0;
   if ((HEAP32[i1 + 20 >> 2] | 0) == (HEAP32[i1 + 28 >> 2] | 0)) {
    if ((HEAP32[i4 >> 2] | 0) == (HEAP32[i5 >> 2] | 0)) {
     break;
    }
   }
   i6 = i1 + 48 | 0;
   if ((HEAP32[i6 >> 2] | 0) == 10) {
    HEAP32[i6 >> 2] = (HEAP32[i1 + 36 >> 2] | 0) != 0;
   }
   i7 = HEAP32[i1 + 32 >> 2] | 0;
   do {
    if ((i2 | 0) == 0) {
     if ((i7 | 0) == 2) {
      if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
       break;
      }
      HEAP32[i6 >> 2] = 2;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      break;
     } else if ((i7 | 0) == 5) {
      HEAP32[i6 >> 2] = 5;
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      break;
     } else {
      if ((HEAP32[i1 + 36 >> 2] | 0) == 0) {
       break;
      }
      __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
      HEAP32[i6 >> 2] = 0;
      break;
     }
    } else {
     if (!((i7 | 0) == 5 | (i7 | 0) == 2)) {
      if ((HEAP32[i1 + 36 >> 2] | 0) != 0) {
       break;
      }
     }
     __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
     HEAP32[i6 >> 2] = 1;
    }
   } while (0);
   i6 = i5;
   i7 = i4;
   i8 = HEAP32[i6 + 4 >> 2] | 0;
   HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
   HEAP32[i7 + 4 >> 2] = i8;
  }
 } while (0);
 __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv(i1);
 HEAP8[i3] = 1;
 HEAP32[i1 + 40 >> 2] = i2;
 HEAP32[i1 + 36 >> 2] = i2;
 i2 = i4;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 return;
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i8 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 i8 = i7 | 0;
 i9 = i7 + 8 | 0;
 i10 = i7 + 24 | 0;
 i11 = i7 + 40 | 0;
 i12 = i7 + 48 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i14 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i15 = i12 | 0;
 i16 = i10 | 0;
 i17 = i2;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 3](i11, i2);
 i18 = i4;
 i4 = HEAP32[i18 + 4 >> 2] | 0;
 HEAP32[i16 >> 2] = HEAP32[i18 >> 2];
 HEAP32[i16 + 4 >> 2] = i4;
 i4 = i10 + 8 | 0;
 i16 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i4 + 4 >> 2] = i16;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i9, i10);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i17 >> 2] | 0) + 48 >> 2] & 3](i14, i2);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, i14);
 HEAP32[i15 >> 2] = 0;
 HEAP32[i15 + 4 >> 2] = 0;
 i15 = i12 + 8 | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i15 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i15 + 4 >> 2] = i14;
 i14 = i6;
 i6 = HEAP32[i14 + 4 >> 2] | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i7;
  return;
 }
 i15 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i8 + 4 >> 2] = i6;
 FUNCTION_TABLE_viiiiiiii[i15 & 1](i2, i1, i9, i12, i3, i5, 0, i8);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i6;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i6 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i6 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 24 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i14 = i11 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i4);
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 3](i13, i2);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i12, i13);
 HEAP32[i14 >> 2] = 0;
 HEAP32[i14 + 4 >> 2] = 0;
 i14 = i11 + 8 | 0;
 i13 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i14 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i14 + 4 >> 2] = i13;
 i13 = i6;
 i6 = HEAP32[i13 >> 2] | 0;
 i14 = HEAP32[i13 + 4 >> 2] | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i8;
  return;
 }
 if (i7) {
  i13 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  i15 = i13;
 } else {
  i15 = 0;
 }
 i13 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 HEAP32[i9 >> 2] = i6;
 HEAP32[i9 + 4 >> 2] = i14;
 FUNCTION_TABLE_viiiiiiii[i13 & 1](i2, i1, i10, i11, i3, i5, 0, i9);
 if (!i7) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i15);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectERKNS_8IntPointERKNS_7IntSizeENS_17CompositeOperatorEbNS_9BlendModeE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 64 | 0;
 i11 = i10 | 0;
 i12 = i10 + 16 | 0;
 i13 = i10 + 24 | 0;
 i14 = i10 + 32 | 0;
 i15 = i10 + 48 | 0;
 i16 = i10 + 56 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 if (i8) {
  i8 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 2);
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i11, i4);
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i12, i5);
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i13, i6);
  __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectERKNS_10FloatPointERKNS_9FloatSizeENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i2, i1, i11, i12, i13, i3, i7, i9);
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i8);
  STACKTOP = i10;
  return;
 } else {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i14, i4);
  __ZN7WebCore10FloatPointC1ERKNS_8IntPointE(i15, i5);
  __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i16, i6);
  __ZN7WebCore5Image9drawTiledEPNS_15GraphicsContextERKNS_9FloatRectERKNS_10FloatPointERKNS_9FloatSizeENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i2, i1, i14, i15, i16, i3, i7, i9);
  STACKTOP = i10;
  return;
 }
}
function __ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceENS_9BlendModeE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i6 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i7 = i6 | 0;
 i8 = i2 + 16 | 0;
 if (!(__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i8) | 0)) {
  i9 = i1 + 84 | 0;
  i10 = HEAP32[i9 >> 2] | 0;
  i11 = i1 + 88 | 0;
  HEAP32[i11 >> 2] = i5;
  __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i10, i5);
  __ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_7IntRectERKNS_7IntSizeES6_S6_S6_RKNS_5ColorENS_10ColorSpaceE(i1, i2 | 0, i8 | 0, i2 + 24 | 0, i2 + 32 | 0, i2 + 40 | 0, i3, i4);
  i8 = HEAP32[i9 >> 2] | 0;
  HEAP32[i11 >> 2] = 0;
  __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i8, 0);
  STACKTOP = i6;
  return;
 }
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i2 | 0);
 i2 = i1 + 84 | 0;
 i8 = HEAP32[i2 >> 2] | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i6;
  return;
 }
 HEAP32[i2 >> 2] = i8;
 i11 = i1 + 88 | 0;
 HEAP32[i11 >> 2] = i5;
 __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i8, i5);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i1, i7, i3, i4);
 HEAP32[i2 >> 2] = i8;
 HEAP32[i11 >> 2] = 0;
 __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i8, 0);
 STACKTOP = i6;
 return;
}
function __ZNK7WebCore15GraphicsContext22isCompatibleWithBufferEPNS_11ImageBufferE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, d9 = +0, i10 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 144 | 0;
 i4 = i3 | 0;
 i5 = i3 + 48 | 0;
 i6 = i3 + 96 | 0;
 i7 = __ZNK7WebCore11ImageBuffer7contextEv(i2) | 0;
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i6, i1, 1);
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i4, i7, 1);
 i2 = i5;
 i8 = i6;
 HEAP32[i2 >> 2] = HEAP32[i8 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i8 + 4 >> 2];
 HEAP32[i2 + 8 >> 2] = HEAP32[i8 + 8 >> 2];
 HEAP32[i2 + 12 >> 2] = HEAP32[i8 + 12 >> 2];
 HEAP32[i2 + 16 >> 2] = HEAP32[i8 + 16 >> 2];
 HEAP32[i2 + 20 >> 2] = HEAP32[i8 + 20 >> 2];
 HEAP32[i2 + 24 >> 2] = HEAP32[i8 + 24 >> 2];
 HEAP32[i2 + 28 >> 2] = HEAP32[i8 + 28 >> 2];
 HEAP32[i2 + 32 >> 2] = HEAP32[i8 + 32 >> 2];
 HEAP32[i2 + 36 >> 2] = HEAP32[i8 + 36 >> 2];
 HEAP32[i2 + 40 >> 2] = HEAP32[i8 + 40 >> 2];
 HEAP32[i2 + 44 >> 2] = HEAP32[i8 + 44 >> 2];
 d9 = +__ZNK7WebCore15AffineTransform6xScaleEv(i5);
 if (d9 != +__ZNK7WebCore15AffineTransform6xScaleEv(i4)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 d9 = +__ZNK7WebCore15AffineTransform6yScaleEv(i5);
 if (d9 != +__ZNK7WebCore15AffineTransform6yScaleEv(i4)) {
  i10 = 0;
  STACKTOP = i3;
  return i10 | 0;
 }
 i4 = __ZNK7WebCore15GraphicsContext20isAcceleratedContextEv(i1) | 0;
 i10 = i4 ^ (__ZNK7WebCore15GraphicsContext20isAcceleratedContextEv(i7) | 0) ^ 1;
 STACKTOP = i3;
 return i10 | 0;
}
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeEb(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i10;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i13 = i10 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i9, i4);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i12, i2 + 120 | 0);
 HEAP32[i13 >> 2] = 0;
 HEAP32[i13 + 4 >> 2] = 0;
 i13 = i10 + 8 | 0;
 i10 = HEAP32[i12 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i12 >> 2];
 HEAP32[i13 + 4 >> 2] = i10;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i8;
  return;
 }
 if (i7) {
  i7 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i9, i11, i5, i6, 1);
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i7);
  STACKTOP = i8;
  return;
 } else {
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i9, i11, i5, i6, 0);
  STACKTOP = i8;
  return;
 }
}
function __ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i3 = i1 + 8 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 i5 = i4 + 1 | 0;
 i6 = i1 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 do {
  if (i7 >>> 0 <= i2 >>> 0) {
   if ((i7 + (i4 * 92 & -1) | 0) >>> 0 <= i2 >>> 0) {
    break;
   }
   i8 = HEAP32[i1 + 4 >> 2] | 0;
   i9 = i8 + 1 + (i8 >>> 2) | 0;
   i8 = i9 >>> 0 > 16 >>> 0 ? i9 : 16;
   __ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i8 >>> 0 > i5 >>> 0 ? i8 : i5);
   i8 = HEAP32[i6 >> 2] | 0;
   i10 = i8 + (((i2 - i7 | 0) / 92 & -1) * 92 & -1) | 0;
   i11 = i8;
   i12 = HEAP32[i3 >> 2] | 0;
   i13 = i11 + (i12 * 92 & -1) | 0;
   __ZN7WebCore20GraphicsContextStateC2ERKS0_(i13, i10);
   i14 = HEAP32[i3 >> 2] | 0;
   i15 = i14 + 1 | 0;
   HEAP32[i3 >> 2] = i15;
   return;
  }
 } while (0);
 i7 = HEAP32[i1 + 4 >> 2] | 0;
 i4 = i7 + 1 + (i7 >>> 2) | 0;
 i7 = i4 >>> 0 > 16 >>> 0 ? i4 : 16;
 __ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i7 >>> 0 > i5 >>> 0 ? i7 : i5);
 i10 = i2;
 i11 = HEAP32[i6 >> 2] | 0;
 i12 = HEAP32[i3 >> 2] | 0;
 i13 = i11 + (i12 * 92 & -1) | 0;
 __ZN7WebCore20GraphicsContextStateC2ERKS0_(i13, i10);
 i14 = HEAP32[i3 >> 2] | 0;
 i15 = i14 + 1 | 0;
 HEAP32[i3 >> 2] = i15;
 return;
}
function __ZNK7WebCore15GraphicsContext22createCompatibleBufferERKNS_7IntSizeEb(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, d11 = +0, i12 = 0, i13 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 72 | 0;
 i6 = i5 | 0;
 i7 = i5 + 48 | 0;
 i8 = i5 + 56 | 0;
 i9 = i5 + 64 | 0;
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i6, i2, 0);
 i10 = i3 | 0;
 d11 = +(HEAP32[i10 >> 2] | 0);
 i12 = ~~+Math_ceil(d11 * +__ZNK7WebCore15AffineTransform6xScaleEv(i6));
 i13 = i3 + 4 | 0;
 d11 = +(HEAP32[i13 >> 2] | 0);
 i3 = ~~+Math_ceil(d11 * +__ZNK7WebCore15AffineTransform6yScaleEv(i6));
 i6 = i7 | 0;
 HEAP32[i6 >> 2] = i12;
 i12 = i7 + 4 | 0;
 HEAP32[i12 >> 2] = i3;
 __ZN7WebCore11ImageBuffer22createCompatibleBufferERKNS_7IntSizeEfNS_10ColorSpaceEPKNS_15GraphicsContextEb(i8, i7, +1, 0, i2, i4);
 i4 = i8 | 0;
 i8 = HEAP32[i4 >> 2] | 0;
 if ((i8 | 0) == 0) {
  HEAP32[i1 >> 2] = 0;
  STACKTOP = i5;
  return;
 } else {
  i2 = __ZNK7WebCore11ImageBuffer7contextEv(i8) | 0;
  d11 = +(HEAP32[i12 >> 2] | 0) / +(HEAP32[i13 >> 2] | 0);
  HEAPF32[i9 >> 2] = +(HEAP32[i6 >> 2] | 0) / +(HEAP32[i10 >> 2] | 0);
  HEAPF32[i9 + 4 >> 2] = d11;
  __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i2, i9);
  i9 = HEAP32[i4 >> 2] | 0;
  HEAP32[i4 >> 2] = 0;
  HEAP32[i1 >> 2] = i9;
  STACKTOP = i5;
  return;
 }
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 40 | 0;
 i9 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i9 + 4 >> 2];
 i9 = i8 | 0;
 i10 = i8 + 8 | 0;
 i11 = i8 + 24 | 0;
 i12 = i11 | 0;
 i13 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i14 = i5 + 8 | 0;
 i15 = HEAP32[i14 >> 2] | 0;
 i16 = HEAP32[i14 + 4 >> 2] | 0;
 i14 = i4;
 i4 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i12 + 4 >> 2] = i4;
 i4 = i11 + 8 | 0;
 HEAP32[i4 >> 2] = i15;
 HEAP32[i4 + 4 >> 2] = i16;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i11);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i13, i5);
 i5 = i7;
 i7 = HEAP32[i5 + 4 >> 2] | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i9 + 4 >> 2] = i7;
 FUNCTION_TABLE_viiiiiiii[i11 & 1](i2, i1, i10, i13, i3, i6, 0, i9);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i8 = i7 | 0;
 i9 = i7 + 16 | 0;
 i10 = i7 + 32 | 0;
 i11 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i7;
  return;
 }
 i12 = i10 | 0;
 i13 = i9 | 0;
 i14 = i2 + 120 | 0;
 i15 = i4;
 i4 = HEAP32[i15 + 4 >> 2] | 0;
 HEAP32[i13 >> 2] = HEAP32[i15 >> 2];
 HEAP32[i13 + 4 >> 2] = i4;
 i4 = i9 + 8 | 0;
 i13 = i14;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i4 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i4 + 4 >> 2] = i15;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i8, i9);
 __ZN7WebCore9FloatSizeC1ERKNS_7IntSizeE(i11, i14);
 HEAP32[i12 >> 2] = 0;
 HEAP32[i12 + 4 >> 2] = 0;
 i12 = i10 + 8 | 0;
 i14 = HEAP32[i11 + 4 >> 2] | 0;
 HEAP32[i12 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i12 + 4 >> 2] = i14;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i8, i10, i5, i6, 0);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore20GraphicsContextStateD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i5 >> 2] | 0) + 4 >> 2] & 3](i5);
  }
 } while (0);
 i2 = HEAP32[i1 + 8 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i3 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i3 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i3;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i1 + 4 >> 2] | 0;
 do {
  if ((i2 | 0) != 0) {
   i3 = i2 + 4 | 0;
   i5 = i3 | 0;
   i4 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i4 | 0) != 0) {
    HEAP32[i5 >> 2] = i4;
    break;
   }
   i4 = i3 - 4 | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 3](i4);
  }
 } while (0);
 i2 = HEAP32[i1 >> 2] | 0;
 if ((i2 | 0) == 0) {
  return;
 }
 i1 = i2 | 0;
 i4 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i4 | 0) == 0) {
  __ZN7WebCore8GradientD1Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  return;
 } else {
  HEAP32[i1 >> 2] = i4;
  return;
 }
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionEb(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i11 = i8;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i8 >> 2] = HEAP32[i11 >> 2];
 HEAP32[i8 + 4 >> 2] = HEAP32[i11 + 4 >> 2];
 i11 = i10 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i10;
  return;
 }
 if (i9) {
  i12 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  i13 = i12;
 } else {
  i13 = 0;
 }
 i12 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 i14 = i8;
 i8 = HEAP32[i14 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i14 >> 2];
 HEAP32[i11 + 4 >> 2] = i8;
 FUNCTION_TABLE_viiiiiiii[i12 & 1](i2, i1, i4, i5, i3, i6, i7, i11);
 if (!i9) {
  STACKTOP = i10;
  return;
 }
 __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i13);
 STACKTOP = i10;
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
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i10 = i9 | 0;
 i11 = i9 + 16 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i10, i4);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i11, i5);
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 if (i8) {
  i8 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i10, i11, i6, i7, 1);
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i8);
  STACKTOP = i9;
  return;
 } else {
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i10, i11, i6, i7, 0);
  STACKTOP = i9;
  return;
 }
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 var i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i9 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i10 = i7;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i7 >> 2] = HEAP32[i10 >> 2];
 HEAP32[i7 + 4 >> 2] = HEAP32[i10 + 4 >> 2];
 i10 = i9 | 0;
 i11 = i7;
 i7 = HEAP32[i11 >> 2] | 0;
 i12 = HEAP32[i11 + 4 >> 2] | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i9;
  return;
 }
 if (i8) {
  i11 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  i13 = i11;
 } else {
  i13 = 0;
 }
 i11 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 HEAP32[i10 >> 2] = i7;
 HEAP32[i10 + 4 >> 2] = i12;
 FUNCTION_TABLE_viiiiiiii[i11 & 1](i2, i1, i4, i5, i3, i6, 0, i10);
 if (!i8) {
  STACKTOP = i9;
  return;
 }
 __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i13);
 STACKTOP = i9;
 return;
}
function __ZN7WebCore7TextRunC2ERKS0_(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 HEAP32[i1 >> 2] = HEAP32[i2 >> 2];
 HEAP32[i1 + 4 >> 2] = HEAP32[i2 + 4 >> 2];
 HEAP32[i1 + 8 >> 2] = HEAP32[i2 + 8 >> 2];
 HEAPF32[i1 + 12 >> 2] = +HEAPF32[i2 + 12 >> 2];
 HEAPF32[i1 + 16 >> 2] = +HEAPF32[i2 + 16 >> 2];
 HEAPF32[i1 + 20 >> 2] = +HEAPF32[i2 + 20 >> 2];
 i3 = i2 + 24 | 0;
 i4 = i1 + 24 | 0;
 i5 = HEAP32[i4 >> 2] & -4 | HEAP32[i3 >> 2] & 3;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -5 | HEAP32[i3 >> 2] & 4;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -9 | HEAP32[i3 >> 2] & 8;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -17 | HEAP32[i3 >> 2] & 16;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -33 | HEAP32[i3 >> 2] & 32;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -65 | HEAP32[i3 >> 2] & 64;
 HEAP32[i4 >> 2] = i6;
 i5 = i6 & -129 | HEAP32[i3 >> 2] & 128;
 HEAP32[i4 >> 2] = i5;
 i6 = i5 & -257 | HEAP32[i3 >> 2] & 256;
 HEAP32[i4 >> 2] = i6;
 HEAP32[i4 >> 2] = i6 & -513 | HEAP32[i3 >> 2] & 512;
 HEAP32[i1 + 28 >> 2] = HEAP32[i2 + 28 >> 2];
 i3 = HEAP32[i2 + 32 >> 2] | 0;
 HEAP32[i1 + 32 >> 2] = i3;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 + 4 | 0;
 HEAP32[i1 >> 2] = (HEAP32[i1 >> 2] | 0) + 1;
 return;
}
function __ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i4 | 0;
 i6 = i1 + 12 | 0;
 HEAP32[i6 >> 2] = 0;
 i7 = (i2 | 0) != 1;
 i2 = i7 & 1;
 HEAP32[i1 + 8 >> 2] = i2;
 HEAP32[i1 + 4 >> 2] = i2;
 HEAP32[i1 >> 2] = i2;
 __ZN7WebCore11BidiContext6createEh14UCharDirectionbNS_19BidiEmbeddingSourceEPS0_(i5, i7 & 1, i2, i3, 0, 0);
 i3 = i5 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 i2 = HEAP32[i6 >> 2] | 0;
 HEAP32[i6 >> 2] = i5;
 do {
  if ((i2 | 0) != 0) {
   i5 = i2 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore11BidiContextD2Ev(i2);
    __ZN3WTF8fastFreeEPv(i2);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i4;
  return;
 }
 i3 = i2 | 0;
 i6 = (HEAP32[i3 >> 2] | 0) - 1 | 0;
 if ((i6 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i2);
  __ZN3WTF8fastFreeEPv(i2);
  STACKTOP = i4;
  return;
 } else {
  HEAP32[i3 >> 2] = i6;
  STACKTOP = i4;
  return;
 }
}
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 var i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i9 = i8 | 0;
 i10 = i8 + 16 | 0;
 i11 = i10 | 0;
 i12 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i13 = i5 + 8 | 0;
 i14 = HEAP32[i13 >> 2] | 0;
 i15 = HEAP32[i13 + 4 >> 2] | 0;
 i13 = i4;
 i4 = HEAP32[i13 + 4 >> 2] | 0;
 HEAP32[i11 >> 2] = HEAP32[i13 >> 2];
 HEAP32[i11 + 4 >> 2] = i4;
 i4 = i10 + 8 | 0;
 HEAP32[i4 >> 2] = i14;
 HEAP32[i4 + 4 >> 2] = i15;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i9, i10);
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i12, i5);
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  STACKTOP = i8;
  return;
 }
 __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i9, i12, i6, i7, 0);
 STACKTOP = i8;
 return;
}
function __ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + 40 | 0;
 i5 = i2;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i4 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 HEAP32[i1 + 72 >> 2] = i3;
 i5 = i1 + 4 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = i1 + 8 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i5 = i4 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext22setPlatformStrokeColorERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3);
 return;
}
function __ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i4 = i1 + 48 | 0;
 i5 = i2;
 HEAP32[i4 >> 2] = HEAP32[i5 >> 2];
 HEAP8[i4 + 4 | 0] = HEAP8[i5 + 4 | 0] | 0;
 HEAP32[i1 + 76 >> 2] = i3;
 i5 = i1 + 12 | 0;
 i4 = HEAP32[i5 >> 2] | 0;
 HEAP32[i5 >> 2] = 0;
 do {
  if ((i4 | 0) != 0) {
   i5 = i4 | 0;
   i6 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i6 | 0) == 0) {
    __ZN7WebCore8GradientD1Ev(i4);
    __ZN3WTF8fastFreeEPv(i4);
    break;
   } else {
    HEAP32[i5 >> 2] = i6;
    break;
   }
  }
 } while (0);
 i4 = i1 + 16 | 0;
 i6 = HEAP32[i4 >> 2] | 0;
 HEAP32[i4 >> 2] = 0;
 do {
  if ((i6 | 0) != 0) {
   i4 = i6 + 4 | 0;
   i5 = i4 | 0;
   i7 = (HEAP32[i5 >> 2] | 0) - 1 | 0;
   if ((i7 | 0) != 0) {
    HEAP32[i5 >> 2] = i7;
    break;
   }
   i7 = i4 - 4 | 0;
   if ((i7 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i7 >> 2] | 0) + 4 >> 2] & 3](i7);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext20setPlatformFillColorERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3);
 return;
}
function __ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEED2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0;
 i2 = i1 + 140 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 132 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if (!((i1 + 144 | 0) == (i3 | 0) | (i3 | 0) == 0)) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 136 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = i1 + 128 | 0;
 if ((HEAP32[i3 >> 2] | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
 }
 i3 = i1 + 120 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 if ((i2 | 0) != 0) {
  HEAP32[i3 >> 2] = 0;
  HEAP32[i1 + 124 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i2);
 }
 i2 = i1 + 100 | 0;
 if ((HEAP32[i2 >> 2] | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
 }
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) != 0) {
  HEAP32[i2 >> 2] = 0;
  HEAP32[i1 + 96 >> 2] = 0;
  __ZN3WTF8fastFreeEPv(i3);
 }
 i3 = HEAP32[i1 + 44 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i1 = i3 | 0;
 i2 = (HEAP32[i1 >> 2] | 0) - 1 | 0;
 if ((i2 | 0) == 0) {
  __ZN7WebCore11BidiContextD2Ev(i3);
  __ZN3WTF8fastFreeEPv(i3);
  return;
 } else {
  HEAP32[i1 >> 2] = i2;
  return;
 }
}
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0 | (i2 | 0) == 0) {
  return;
 }
 if (i8) {
  i8 = __ZNK7WebCore15GraphicsContext25imageInterpolationQualityEv(i1) | 0;
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, 1);
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i4, i5, i6, i7, 1);
  __ZN7WebCore15GraphicsContext28setImageInterpolationQualityENS_20InterpolationQualityE(i1, i8);
  return;
 } else {
  __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i4, i5, i6, i7, 0);
  return;
 }
}
function __ZN7WebCore15GraphicsContext27adjustLineToPixelBoundariesERNS_10FloatPointES2_fNS_11StrokeStyleE(i1, i2, d3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 var i5 = 0, d6 = +0, i7 = 0, i8 = 0;
 do {
  if ((i4 - 2 | 0) >>> 0 < 2 >>> 0) {
   i5 = i1 | 0;
   d6 = +HEAPF32[i5 >> 2];
   i7 = i2 | 0;
   if (d6 == +HEAPF32[i7 >> 2]) {
    i8 = i1 + 4 | 0;
    HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] + d3;
    i8 = i2 + 4 | 0;
    HEAPF32[i8 >> 2] = +HEAPF32[i8 >> 2] - d3;
    break;
   } else {
    HEAPF32[i5 >> 2] = d6 + d3;
    HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] - d3;
    break;
   }
  }
 } while (0);
 if ((~~d3 & 1 | 0) == 0) {
  return;
 }
 i4 = i1 | 0;
 d3 = +HEAPF32[i4 >> 2];
 i7 = i2 | 0;
 if (d3 == +HEAPF32[i7 >> 2]) {
  HEAPF32[i4 >> 2] = d3 + +.5;
  HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] + +.5;
  return;
 } else {
  i7 = i1 + 4 | 0;
  HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] + +.5;
  i7 = i2 + 4 | 0;
  HEAPF32[i7 >> 2] = +HEAPF32[i7 >> 2] + +.5;
  return;
 }
}
function __ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i6 = i5 | 0;
 i7 = i5 + 8 | 0;
 i8 = i5 + 24 | 0;
 i9 = i5 + 40 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i10 = i8 | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 48 >> 2] & 3](i9, i2);
 HEAP32[i10 >> 2] = 0;
 HEAP32[i10 + 4 >> 2] = 0;
 i10 = i8 + 8 | 0;
 i11 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i10 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i10 + 4 >> 2] = i11;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i7, i8);
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i5;
  return;
 }
 i8 = HEAP32[(HEAP32[i2 >> 2] | 0) + 92 >> 2] | 0;
 HEAP32[i6 >> 2] = 0;
 HEAP32[i6 + 4 >> 2] = 1;
 FUNCTION_TABLE_viiiiiiii[i8 & 1](i2, i1, i4, i7, i3, 2, 0, i6);
 STACKTOP = i5;
 return;
}
function __ZNK7WebCore15GraphicsContext9getShadowERNS_9FloatSizeERfRNS_5ColorERNS_10ColorSpaceE(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = i1 + 20 | 0;
 i7 = i2;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i2;
 i2 = i1 + 32 | 0;
 HEAPF32[i3 >> 2] = +HEAPF32[i2 >> 2];
 i3 = i4;
 i4 = i1 + 56 | 0;
 HEAP32[i3 >> 2] = HEAP32[i4 >> 2];
 HEAP8[i3 + 4 | 0] = HEAP8[i4 + 4 | 0] | 0;
 HEAP32[i5 >> 2] = HEAP32[i1 + 80 >> 2];
 if ((HEAP8[i1 + 60 | 0] & 1) == 0) {
  i8 = 0;
  return i8 | 0;
 }
 if ((HEAP32[i1 + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  i8 = 0;
  return i8 | 0;
 }
 if (+HEAPF32[i2 >> 2] != +0) {
  i8 = 1;
  return i8 | 0;
 }
 if (+HEAPF32[i1 + 20 >> 2] != +0) {
  i8 = 1;
  return i8 | 0;
 }
 i8 = +HEAPF32[i1 + 24 >> 2] != +0;
 return i8 | 0;
}
function __ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectE(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 var i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i5 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i6 = i5 | 0;
 i7 = i5 + 16 | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i5;
  return;
 }
 i8 = i7 | 0;
 HEAP32[i8 >> 2] = 0;
 HEAP32[i8 + 4 >> 2] = 0;
 i8 = i7 + 8 | 0;
 i9 = i2 + 120 | 0;
 i10 = HEAP32[i9 + 4 >> 2] | 0;
 HEAP32[i8 >> 2] = HEAP32[i9 >> 2];
 HEAP32[i8 + 4 >> 2] = i10;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i6, i7);
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i5;
  return;
 }
 __ZN7WebCore11ImageBuffer4drawEPNS_15GraphicsContextENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb(i2, i1, i3, i4, i6, 2, 0, 0);
 STACKTOP = i5;
 return;
}
function __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0, i9 = 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 i7 = i1 + 84 | 0;
 i8 = HEAP32[i7 >> 2] | 0;
 HEAP32[i7 >> 2] = i5;
 i9 = i1 + 88 | 0;
 HEAP32[i9 >> 2] = i6;
 __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i5, i6);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i1, i2, i3, i4);
 HEAP32[i7 >> 2] = i8;
 HEAP32[i9 >> 2] = 0;
 __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i8, 0);
 return;
}
function __ZN7WebCore15GraphicsContext7restoreEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = _llvm_uadd_with_overflow_i32(i3 | 0, -1 | 0) | 0;
 if (!tempRet0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i3 = i1 + 96 | 0;
 __ZN7WebCore20GraphicsContextStateaSERKS0_(i1 + 4 | 0, (HEAP32[i3 >> 2] | 0) + (i4 * 92 & -1) | 0) | 0;
 i4 = HEAP32[i2 >> 2] | 0;
 if ((i4 | 0) == 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = i4 - 1 | 0;
 __ZN7WebCore20GraphicsContextStateD2Ev((HEAP32[i3 >> 2] | 0) + (i5 * 92 & -1) | 0);
 HEAP32[i2 >> 2] = i5;
 __ZN7WebCore15GraphicsContext20restorePlatformStateEv(i1);
 return;
}
function __ZN7WebCore15GraphicsContextD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15GraphicsContext15platformDestroyEv(i1);
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 96 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 92 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore20GraphicsContextStateD2Ev(i3);
   i3 = i3 + 92 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 + 4 | 0;
  __ZN7WebCore20GraphicsContextStateD2Ev(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 + 4 | 0;
 __ZN7WebCore20GraphicsContextStateD2Ev(i7);
 return;
}
function __ZN7WebCore15GraphicsContextD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 __ZN7WebCore15GraphicsContext15platformDestroyEv(i1);
 i2 = i1 + 104 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 i4 = i1 + 96 | 0;
 if ((i3 | 0) != 0) {
  i5 = HEAP32[i4 >> 2] | 0;
  i6 = i5 + (i3 * 92 & -1) | 0;
  i3 = i5;
  while (1) {
   __ZN7WebCore20GraphicsContextStateD2Ev(i3);
   i3 = i3 + 92 | 0;
   if ((i3 | 0) == (i6 | 0)) {
    break;
   }
  }
  HEAP32[i2 >> 2] = 0;
 }
 i2 = HEAP32[i4 >> 2] | 0;
 if ((i2 | 0) == 0) {
  i7 = i1 + 4 | 0;
  __ZN7WebCore20GraphicsContextStateD2Ev(i7);
  return;
 }
 HEAP32[i4 >> 2] = 0;
 HEAP32[i1 + 100 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i2);
 i7 = i1 + 4 | 0;
 __ZN7WebCore20GraphicsContextStateD2Ev(i7);
 return;
}
function __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 16 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i2 + 16 | 0) | 0) {
  __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i4, i2 | 0);
  __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i1, i4);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore4PathC1Ev(i5);
  __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i5, i2);
  __ZN7WebCore15GraphicsContext4clipERKNS_4PathENS_8WindRuleE(i1, i5, 1);
  __ZN7WebCore4PathD1Ev(i5);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i11 = i10 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i10;
  return;
 }
 __ZNK7WebCore4Font20selectionRectForTextERKNS_7TextRunERKNS_10FloatPointEiii(i11, i2, i3, i4, i5, i8, i9);
 __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceE(i1, i11, i6, i7);
 STACKTOP = i10;
 return;
}
function __ZNK7WebCore15GraphicsContext17mustUseShadowBlurEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 48 | 0;
 i3 = i2 | 0;
 do {
  if ((HEAP8[i1 + 60 | 0] & 1) != 0) {
   if ((HEAP32[i1 + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    break;
   }
   if (+HEAPF32[i1 + 32 >> 2] != +0) {
    i4 = 1;
   } else {
    break;
   }
   STACKTOP = i2;
   return i4 | 0;
  }
 } while (0);
 if ((HEAP8[i1 + 92 | 0] & 16) == 0) {
  i4 = 0;
  STACKTOP = i2;
  return i4 | 0;
 }
 __ZNK7WebCore15GraphicsContext6getCTMENS0_18IncludeDeviceScaleE(i3, i1, 1);
 i4 = (__ZNK7WebCore15AffineTransform10isIdentityEv(i3) | 0) ^ 1;
 STACKTOP = i2;
 return i4 | 0;
}
function __ZN7WebCore15GraphicsContextC2EPNS_20PlatformContextCairoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 + 4 | 0, 0, 32) | 0;
 HEAP32[i1 + 36 >> 2] = 1;
 HEAP32[i1 + 40 >> 2] = -16777216;
 HEAP8[i1 + 44 | 0] = 1;
 HEAP32[i1 + 48 >> 2] = -16777216;
 HEAP8[i1 + 52 | 0] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP8[i1 + 60 | 0] = 0;
 HEAP32[i1 + 64 >> 2] = 1;
 _memset(i1 + 68 | 0, 0, 16) | 0;
 HEAP32[i1 + 84 >> 2] = 2;
 HEAP32[i1 + 88 >> 2] = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -64 | 7;
 HEAP32[i1 + 112 >> 2] = 0;
 _memset(i1 + 96 | 0, 0, 13) | 0;
 __ZN7WebCore15GraphicsContext12platformInitEPNS_20PlatformContextCairoE(i1, i2);
 return;
}
function __ZN7WebCore15GraphicsContextC1EPNS_20PlatformContextCairoE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 _memset(i1 + 4 | 0, 0, 32) | 0;
 HEAP32[i1 + 36 >> 2] = 1;
 HEAP32[i1 + 40 >> 2] = -16777216;
 HEAP8[i1 + 44 | 0] = 1;
 HEAP32[i1 + 48 >> 2] = -16777216;
 HEAP8[i1 + 52 | 0] = 1;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP8[i1 + 60 | 0] = 0;
 HEAP32[i1 + 64 >> 2] = 1;
 _memset(i1 + 68 | 0, 0, 16) | 0;
 HEAP32[i1 + 84 >> 2] = 2;
 HEAP32[i1 + 88 >> 2] = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -64 | 7;
 HEAP32[i1 + 112 >> 2] = 0;
 _memset(i1 + 96 | 0, 0, 13) | 0;
 __ZN7WebCore15GraphicsContext12platformInitEPNS_20PlatformContextCairoE(i1, i2);
 return;
}
function __ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 if (__ZNK7WebCore11RoundedRect5Radii6isZeroEv(i2 + 16 | 0) | 0) {
  __ZN7WebCore15GraphicsContext7clipOutERKNS_7IntRectE(i1, i2 | 0);
  STACKTOP = i3;
  return;
 } else {
  __ZN7WebCore4PathC1Ev(i4);
  __ZN7WebCore4Path14addRoundedRectERKNS_11RoundedRectE(i4, i2);
  __ZN7WebCore15GraphicsContext7clipOutERKNS_4PathE(i1, i4);
  __ZN7WebCore4PathD1Ev(i4);
  STACKTOP = i3;
  return;
 }
}
function __ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 var i7 = 0, i8 = 0;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = i7 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i7;
  return;
 }
 __ZN7WebCore4PathC1Ev(i8);
 __ZN7WebCore4Path14addRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_NS0_19RoundedRectStrategyE(i8, i2, i3, i4, i5, i6, 0);
 __ZN7WebCore15GraphicsContext4clipERKNS_4PathENS_8WindRuleE(i1, i8, 1);
 __ZN7WebCore4PathD1Ev(i8);
 STACKTOP = i7;
 return;
}
function __ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = i2;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 HEAPF32[i1 + 32 >> 2] = d3;
 i8 = i1 + 56 | 0;
 i7 = i4;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP8[i8 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
 HEAP32[i1 + 80 >> 2] = i5;
 __ZN7WebCore15GraphicsContext17setPlatformShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i1, i2, d3, i4, i5);
 return;
}
function __ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i1, i2, d3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 i4 = i4 | 0;
 i5 = i5 | 0;
 var i6 = 0, i7 = 0, i8 = 0;
 i6 = i2;
 i7 = i1 + 20 | 0;
 i8 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i8;
 HEAPF32[i1 + 32 >> 2] = d3;
 i8 = i1 + 56 | 0;
 i7 = i4;
 HEAP32[i8 >> 2] = HEAP32[i7 >> 2];
 HEAP8[i8 + 4 | 0] = HEAP8[i7 + 4 | 0] | 0;
 HEAP32[i1 + 80 >> 2] = i5;
 __ZN7WebCore15GraphicsContext17setPlatformShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE(i1, i2, d3, i4, i5);
 return;
}
function __ZN7WebCore15GraphicsContext4saveEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 i2 = i1 + 96 | 0;
 i3 = i1 + 4 | 0;
 i4 = i1 + 104 | 0;
 i5 = HEAP32[i4 >> 2] | 0;
 if ((i5 | 0) == (HEAP32[i1 + 100 >> 2] | 0)) {
  __ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_(i2, i3);
 } else {
  __ZN7WebCore20GraphicsContextStateC2ERKS0_((HEAP32[i2 >> 2] | 0) + (i5 * 92 & -1) | 0, i3);
  HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) + 1;
 }
 __ZN7WebCore15GraphicsContext17savePlatformStateEv(i1);
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
function __ZN7WebCore15GraphicsContext21platformStrokeEllipseERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext19platformFillEllipseERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext17drawEmphasisMarksERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6, i7) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 __ZNK7WebCore4Font17drawEmphasisMarksEPNS_15GraphicsContextERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii(i2, i1, i3, i4, i5, i6, i7);
 return;
}
function __ZN7WebCore15GraphicsContext13strokeEllipseERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext11fillEllipseERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  STACKTOP = i3;
  return;
 }
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15GraphicsContext9hasShadowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 do {
  if ((HEAP8[i1 + 60 | 0] & 1) == 0) {
   i2 = 0;
  } else {
   if ((HEAP32[i1 + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
    i2 = 0;
    break;
   }
   if (+HEAPF32[i1 + 32 >> 2] != +0) {
    i2 = 1;
    break;
   }
   if (+HEAPF32[i1 + 20 >> 2] != +0) {
    i2 = 1;
    break;
   }
   i2 = +HEAPF32[i1 + 24 >> 2] != +0;
  }
 } while (0);
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
function __ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii(i1, i2, i3, i4, i5, i6) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 +__ZNK7WebCore4Font8drawTextEPNS_15GraphicsContextERKNS_7TextRunERKNS_10FloatPointEiiNS0_24CustomFontNotReadyActionE(i2, i1, i3, i4, i5, i6, 0);
 return;
}
function __ZN7WebCore15GraphicsContext19strokeEllipseAsPathERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext10strokePathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext17fillEllipseAsPathERKNS_9FloatRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 __ZN7WebCore4PathC1Ev(i4);
 __ZN7WebCore4Path10addEllipseERKNS_9FloatRectE(i4, i2);
 __ZN7WebCore15GraphicsContext8fillPathERKNS_4PathE(i1, i4);
 __ZN7WebCore4PathD1Ev(i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 HEAP32[i1 + 84 >> 2] = i2;
 HEAP32[i1 + 88 >> 2] = i3;
 __ZN7WebCore15GraphicsContext29setPlatformCompositeOperationENS_17CompositeOperatorENS_9BlendModeE(i1, i2, i3);
 return;
}
function __ZN7WebCore15GraphicsContext11clearShadowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 20 | 0;
 HEAP32[i2 >> 2] = 0;
 HEAP32[i2 + 4 >> 2] = 0;
 HEAPF32[i1 + 32 >> 2] = +0;
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP8[i1 + 60 | 0] = 0;
 HEAP32[i1 + 80 >> 2] = 0;
 __ZN7WebCore15GraphicsContext19clearPlatformShadowEv(i1);
 return;
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
function __ZN7WebCore15GraphicsContext22applyDeviceScaleFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAPF32[i4 >> 2] = d2;
 HEAPF32[i4 + 4 >> 2] = d2;
 __ZN7WebCore15GraphicsContext5scaleERKNS_9FloatSizeE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 __ZN7WebCore9FloatRectC1ERKNS_7IntRectE(i4, i2);
 __ZN7WebCore15GraphicsContext4clipERKNS_9FloatRectE(i1, i4);
 STACKTOP = i3;
 return;
}
function __ZNK7WebCore15GraphicsContext16hasBlurredShadowEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP8[i1 + 60 | 0] & 1) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 if ((HEAP32[i1 + 56 >> 2] | 0) >>> 0 < 16777216 >>> 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = +HEAPF32[i1 + 32 >> 2] != +0;
 return i2 | 0;
}
function __ZN7WebCore15GraphicsContext17clipToImageBufferEPNS_11ImageBufferERKNS_9FloatRectE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 __ZNK7WebCore11ImageBuffer4clipEPNS_15GraphicsContextERKNS_9FloatRectE(i2, i1, i3);
 return;
}
function dynCall_viiiiiiii(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 FUNCTION_TABLE_viiiiiiii[i1 & 1](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function __ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERNS_8GradientE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 if ((HEAP8[i1 + 92 | 0] & 8) != 0) {
  return;
 }
 __ZN7WebCore8Gradient4fillEPNS_15GraphicsContextERKNS_9FloatRectE(i3, i1, i2);
 return;
}
function __ZN7WebCore15GraphicsContext22beginTransparencyLayerEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 var i3 = 0;
 __ZN7WebCore15GraphicsContext30beginPlatformTransparencyLayerEf(i1, d2);
 i3 = i1 + 112 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) + 1;
 return;
}
function __ZNK7WebCore15GraphicsContext21isInTransparencyLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 if ((HEAP32[i1 + 112 >> 2] | 0) == 0) {
  i2 = 0;
  return i2 | 0;
 }
 i2 = __ZN7WebCore15GraphicsContext26supportsTransparencyLayersEv() | 0;
 return i2 | 0;
}
function __ZN7WebCore15GraphicsContext18setShouldAntialiasEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -2 | i2 & 1;
 __ZN7WebCore15GraphicsContext26setPlatformShouldAntialiasEb(i1, i2);
 return;
}
function __ZN7WebCore15GraphicsContext20endTransparencyLayerEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 __ZN7WebCore15GraphicsContext28endPlatformTransparencyLayerEv(i1);
 i2 = i1 + 112 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) - 1;
 return;
}
function __ZNK7WebCore15GraphicsContext11strokeColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 40 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function __ZNK7WebCore15GraphicsContext9fillColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 48 | 0;
 i2 = i1;
 i1 = HEAP32[i3 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i3 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 return;
}
function copyTempFloat(i1) {
 i1 = i1 | 0;
 HEAP8[tempDoublePtr] = HEAP8[i1];
 HEAP8[tempDoublePtr + 1 | 0] = HEAP8[i1 + 1 | 0];
 HEAP8[tempDoublePtr + 2 | 0] = HEAP8[i1 + 2 | 0];
 HEAP8[tempDoublePtr + 3 | 0] = HEAP8[i1 + 3 | 0];
}
function __ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 64 >> 2] = i2;
 __ZN7WebCore15GraphicsContext22setPlatformStrokeStyleENS_11StrokeStyleE(i1, i2);
 return;
}
function __ZN7WebCore15GraphicsContext23setUpdatingControlTintsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 & 1;
 i2 = i1 + 92 | 0;
 HEAP8[i2] = HEAP8[i2] & -9 | i3 << 3;
 HEAP8[i1 + 108 | 0] = i3;
 return;
}
function __ZN7WebCore15GraphicsContext18setStrokeThicknessEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 HEAPF32[i1 + 28 >> 2] = d2;
 __ZN7WebCore15GraphicsContext26setPlatformStrokeThicknessEf(i1, d2);
 return;
}
function __ZN7WebCore15GraphicsContext30setShouldSubpixelQuantizeFontsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -5 | (i2 & 1) << 2;
 return;
}
function __ZN7WebCore15GraphicsContext26setShadowsIgnoreTransformsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -17 | (i2 & 1) << 4;
 return;
}
function __ZN7WebCore15GraphicsContext20setDrawLuminanceMaskEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -33 | (i2 & 1) << 5;
 return;
}
function __ZN7WebCore15GraphicsContext20setShouldSmoothFontsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -3 | (i2 & 1) << 1;
 return;
}
function __ZN7WebCore15GraphicsContext19setPaintingDisabledEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i1 + 92 | 0;
 HEAP8[i3] = HEAP8[i3] & -9 | (i2 & 1) << 3;
 return;
}
function b4(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(4);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 68 >> 2] = i2;
 return;
}
function __ZN7WebCore15GraphicsContext18setTextDrawingModeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 HEAP32[i1 + 36 >> 2] = i2;
 return;
}
function __ZNK7WebCore15GraphicsContext27shouldSubpixelQuantizeFontsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 4) != 0 | 0;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 1](i2 | 0, i3 | 0) | 0;
}
function __ZNK7WebCore15GraphicsContext23shadowsIgnoreTransformsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 16) != 0 | 0;
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
function __ZNK7WebCore15GraphicsContext20updatingControlTintsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 108 | 0] & 1) != 0 | 0;
}
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function __ZNK7WebCore15GraphicsContext17drawLuminanceMaskEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 32) != 0 | 0;
}
function __ZNK7WebCore15GraphicsContext17shouldSmoothFontsEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 2) != 0 | 0;
}
function __ZNK7WebCore15GraphicsContext16paintingDisabledEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 8) != 0 | 0;
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 3](i2 | 0, i3 | 0);
}
function __ZNK7WebCore15GraphicsContext15shouldAntialiasEv(i1) {
 i1 = i1 | 0;
 return (HEAP8[i1 + 92 | 0] & 1) != 0 | 0;
}
function __ZN7WebCore15GraphicsContext28setPlatformShouldSmoothFontsEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZN7WebCore15GraphicsContext30platformApplyDeviceScaleFactorEf(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return;
}
function __ZNK7WebCore15GraphicsContext18compositeOperationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 84 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext18blendModeOperationEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 88 >> 2] | 0;
}
function __ZN7WebCore15GraphicsContext26setPlatformTextDrawingModeEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function __ZNK7WebCore15GraphicsContext16strokeColorSpaceEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 72 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext15strokeThicknessEv(i1) {
 i1 = i1 | 0;
 return +(+HEAPF32[i1 + 28 >> 2]);
}
function __ZNK7WebCore15GraphicsContext15textDrawingModeEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 36 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext14fillColorSpaceEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 76 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext14strokeGradientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 4 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext13strokePatternEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 8 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext12fillGradientEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 12 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext11strokeStyleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 64 >> 2] | 0;
}
function __ZNK7WebCore15GraphicsContext11fillPatternEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 16 >> 2] | 0;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 1](i2 | 0) | 0;
}
function __ZNK7WebCore15GraphicsContext8fillRuleEv(i1) {
 i1 = i1 | 0;
 return HEAP32[i1 + 68 >> 2] | 0;
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 3](i2 | 0);
}
function __ZNK7WebCore15GraphicsContext5stateEv(i1) {
 i1 = i1 | 0;
 return i1 + 4 | 0;
}
function b5(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(5);
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
function b0() {
 abort(0);
}
function runPostSets() {
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_v = [b0,b0];
  var FUNCTION_TABLE_vi = [b1,b1,__ZN7WebCore15GraphicsContextD2Ev,b1];
  var FUNCTION_TABLE_vii = [b2,b2,__ZN7WebCore15GraphicsContextC2EPNS_20PlatformContextCairoE,b2];
  var FUNCTION_TABLE_ii = [b3,b3];
  var FUNCTION_TABLE_viiiiiiii = [b4,b4];
  var FUNCTION_TABLE_iii = [b5,b5];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_v: dynCall_v, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_iii: dynCall_iii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_v": invoke_v, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_iii": invoke_iii, "_llvm_lifetime_end": _llvm_lifetime_end, "_malloc": _malloc, "___setErrNo": ___setErrNo, "_llvm_uadd_with_overflow_i32": _llvm_uadd_with_overflow_i32, "_free": _free, "_ceil": _ceil, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore15GraphicsContext8drawTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEii","_strlen","__ZN7WebCore15GraphicsContext17setStrokeGradientEN3WTF10PassRefPtrINS_8GradientEEE","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27raiseExplicitEmbeddingLevelE14UCharDirectionS4_","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeEb","__ZNK7WebCore15GraphicsContext9getShadowERNS_9FloatSizeERfRNS_5ColorERNS_10ColorSpaceE","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_9BlendModeE","__ZN7WebCore15GraphicsContext18setStrokeThicknessEf","__ZNK7WebCore15GraphicsContext9fillColorEv","__ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectES6_RKNS_9FloatSizeENS1_8TileRuleESA_NS_17CompositeOperatorEb","__ZN7WebCore15GraphicsContext20setDrawLuminanceMaskEb","_memcpy","__ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE14appendSlowCaseIRS2_EEvOT_","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionEb","__ZN7WebCore15GraphicsContext15setLegacyShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE","__ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERKNS_5ColorENS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeE","__ZNK7WebCore15GraphicsContext18blendModeOperationEv","__ZNK7WebCore15GraphicsContext22isCompatibleWithBufferEPNS_11ImageBufferE","__ZNK7WebCore15GraphicsContext5stateEv","__ZN7WebCore15GraphicsContext15fillRoundedRectERKNS_11RoundedRectERKNS_5ColorENS_10ColorSpaceENS_9BlendModeE","__ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_9FloatRectERKNS_9FloatSizeES6_S6_S6_","__ZN7WebCore15GraphicsContext19platformFillEllipseERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext18compositeOperationEv","__ZN7WebCore15GraphicsContext8fillRectERKNS_9FloatRectERNS_8GradientE","__ZN7WebCore15GraphicsContextD2Ev","__ZN7WebCore15GraphicsContext30setShouldSubpixelQuantizeFontsEb","__ZN7WebCore15GraphicsContext14drawTiledImageEPNS_5ImageENS_10ColorSpaceERKNS_7IntRectERKNS_8IntPointERKNS_7IntSizeENS_17CompositeOperatorEbNS_9BlendModeE","__ZN7WebCore15GraphicsContext17fillEllipseAsPathERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext16strokeColorSpaceEv","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointENS_17CompositeOperatorENS_27ImageOrientationDescriptionE","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext12fillGradientEv","__ZN7WebCore15GraphicsContext22beginTransparencyLayerEf","__ZN7WebCore15GraphicsContext9setShadowERKNS_9FloatSizeEfRKNS_5ColorENS_10ColorSpaceE","__ZN7WebCore20GraphicsContextStateC2ERKS0_","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21reorderRunsFromLevelsEv","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionEb","__ZN7WebCore15GraphicsContext26setShadowsIgnoreTransformsEb","__ZNK7WebCore15GraphicsContext11fillPatternEv","__ZN7WebCore15GraphicsContext18clipOutRoundedRectERKNS_11RoundedRectE","__ZNK7WebCore15GraphicsContext15shouldAntialiasEv","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext16hasBlurredShadowEv","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEED2Ev","__ZN7WebCore15GraphicsContext15clipRoundedRectERKNS_11RoundedRectE","__ZNK7WebCore15GraphicsContext17shouldSmoothFontsEv","__ZNK7WebCore15GraphicsContext14strokeGradientEv","__ZN7WebCore15GraphicsContext28setPlatformShouldSmoothFontsEb","__ZN7WebCore15GraphicsContext22applyDeviceScaleFactorEf","__ZN7WebCore20GraphicsContextStateD2Ev","__ZN7WebCore15GraphicsContext26setPlatformTextDrawingModeEj","__ZN7WebCore15GraphicsContext21platformStrokeEllipseERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext8fillRuleEv","__ZN7WebCore15GraphicsContext20drawHighlightForTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointEiRKNS_5ColorENS_10ColorSpaceEii","__ZNK7WebCore15GraphicsContext9hasShadowEv","__ZNK7WebCore15GraphicsContext21isInTransparencyLayerEv","__ZN7WebCore15GraphicsContext15setFillGradientEN3WTF10PassRefPtrINS_8GradientEEE","__ZN7WebCore20GraphicsContextStateaSERKS0_","__ZNK7WebCore15GraphicsContext22createCompatibleBufferERKNS_7IntSizeEb","__ZN7WebCore10BidiStatusC2ENS_13TextDirectionEb","__ZN7WebCore15GraphicsContextC2EPNS_20PlatformContextCairoE","__ZN7WebCore15GraphicsContext11fillEllipseERKNS_9FloatRectE","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE21createBidiRunsForLineERKS1_NS_23VisualDirectionOverrideEb","__ZN7WebCore15GraphicsContext11clearShadowEv","__ZN7WebCore15GraphicsContext27adjustLineToPixelBoundariesERNS_10FloatPointES2_fNS_11StrokeStyleE","_memset","__ZN7WebCore15GraphicsContext13strokeEllipseERKNS_9FloatRectE","__ZN7WebCore15GraphicsContext17clipToImageBufferEPNS_11ImageBufferERKNS_9FloatRectE","__ZNK7WebCore15GraphicsContext16paintingDisabledEv","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE27lowerExplicitEmbeddingLevelE14UCharDirection","__ZNK7WebCore15GraphicsContext14fillColorSpaceEv","__ZNK7WebCore15GraphicsContext15textDrawingModeEv","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_8IntPointERKNS_7IntRectENS_17CompositeOperatorENS_27ImageOrientationDescriptionE","__ZN7WebCore15GraphicsContext18setShouldAntialiasEb","__ZN7WebCore15GraphicsContext30platformApplyDeviceScaleFactorEf","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_7IntRectES6_NS_17CompositeOperatorENS_9BlendModeEb","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_9BlendModeEb","__ZN7WebCore15GraphicsContext12setFillColorERKNS_5ColorENS_10ColorSpaceE","__ZN7WebCore7TextRunC2ERKS0_","__ZN7WebCore15GraphicsContext7restoreEv","__ZN3WTF6VectorIN7WebCore13BidiEmbeddingELj8ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore15GraphicsContext12drawBidiTextERKNS_4FontERKNS_7TextRunERKNS_10FloatPointENS1_24CustomFontNotReadyActionE","__ZNK7WebCore15GraphicsContext11strokeColorEv","__ZNK7WebCore15GraphicsContext17mustUseShadowBlurEv","__ZN7WebCore15GraphicsContext11setFillRuleENS_8WindRuleE","__ZNK7WebCore15GraphicsContext11strokeStyleEv","__ZN7WebCore15GraphicsContext20endTransparencyLayerEv","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE23commitExplicitEmbeddingEv","__ZN7WebCore15GraphicsContext15drawImageBufferEPNS_11ImageBufferENS_10ColorSpaceERKNS_8IntPointERKNS_7IntRectENS_17CompositeOperatorENS_9BlendModeE","__ZN7WebCore15GraphicsContext14setStrokeColorERKNS_5ColorENS_10ColorSpaceE","__ZN7WebCore15GraphicsContext4saveEv","__ZNK7WebCore15GraphicsContext17drawLuminanceMaskEv","__ZNK7WebCore15GraphicsContext23shadowsIgnoreTransformsEv","__ZNK7WebCore15GraphicsContext20updatingControlTintsEv","__ZN7WebCore15GraphicsContext19strokeEllipseAsPathERKNS_9FloatRectE","__ZN7WebCore15GraphicsContext23setUpdatingControlTintsEb","__ZN7WebCore15GraphicsContext17drawEmphasisMarksERKNS_4FontERKNS_7TextRunERKN3WTF12AtomicStringERKNS_10FloatPointEii","__ZN7WebCore15GraphicsContext21setCompositeOperationENS_17CompositeOperatorENS_9BlendModeE","__ZN7WebCore15GraphicsContext9drawImageEPNS_5ImageENS_10ColorSpaceERKNS_9FloatRectES6_NS_17CompositeOperatorENS_27ImageOrientationDescriptionEb","__ZN7WebCore15GraphicsContext19setPaintingDisabledEb","__ZN7WebCore15GraphicsContext16setStrokePatternEN3WTF10PassRefPtrINS_7PatternEEE","__ZN7WebCore12BidiResolverINS_15TextRunIteratorENS_16BidiCharacterRunEE9appendRunEv","__ZNK7WebCore15GraphicsContext13strokePatternEv","__ZN7WebCore15GraphicsContext14setStrokeStyleENS_11StrokeStyleE","__ZN7WebCore15GraphicsContext14setFillPatternEN3WTF10PassRefPtrINS_7PatternEEE","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore15GraphicsContext4clipERKNS_7IntRectE","__ZN7WebCore15GraphicsContext20setShouldSmoothFontsEb","__ZN7WebCore15GraphicsContext18setTextDrawingModeEj","__ZN7WebCore11BidiContextD2Ev","__ZNK7WebCore15GraphicsContext15strokeThicknessEv","__ZNK7WebCore15GraphicsContext27shouldSubpixelQuantizeFontsEv","__ZN3WTF6VectorIN7WebCore20GraphicsContextStateELj0ENS_15CrashOnOverflowEE15reserveCapacityEj"]

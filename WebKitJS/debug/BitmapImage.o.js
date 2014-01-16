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
H_BASE = parentModule["_malloc"](152 + Runtime.GLOBAL_BASE);
// STATICTOP = STATIC_BASE + 152;
/* global initializers */ __ATINIT__.push({ func: function() { runPostSets() } });
var __ZN7WebCore11BitmapImageC1EPNS_13ImageObserverE;
var __ZN7WebCore11BitmapImageD1Ev;
/* memory initializer */ allocate([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0], "i8", ALLOC_NONE, Runtime.GLOBAL_BASE+H_BASE)
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
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
function invoke_viiiiiiii(index,a1,a2,a3,a4,a5,a6,a7,a8) {
  try {
    Module["dynCall_viiiiiiii"](index,a1,a2,a3,a4,a5,a6,a7,a8);
  } catch(e) {
    if (typeof e !== 'number' && e !== 'longjmp') throw e;
    asm["setThrew"](1, 0);
  }
}
function invoke_did(index,a1,a2) {
  try {
    return Module["dynCall_did"](index,a1,a2);
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
  var NaN=+env.NaN;
  var Infinity=+env.Infinity;
  var __ZTVN7WebCore5TimerINS_11BitmapImageEEE=(H_BASE+8)|0;
  var __ZTVN7WebCore11BitmapImageE=(H_BASE+40)|0;
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
  var invoke_viiiiiiii=env.invoke_viiiiiiii;
  var invoke_did=env.invoke_did;
  var invoke_vi=env.invoke_vi;
  var invoke_vii=env.invoke_vii;
  var invoke_ii=env.invoke_ii;
  var invoke_viii=env.invoke_viii;
  var invoke_v=env.invoke_v;
  var invoke_viiiiiiiii=env.invoke_viiiiiiiii;
  var invoke_iii=env.invoke_iii;
  var invoke_viiii=env.invoke_viiii;
  var _llvm_lifetime_end=env._llvm_lifetime_end;
  var _ceilf=env._ceilf;
  var ___setErrNo=env.___setErrNo;
  var _malloc=env._malloc;
  var _free=env._free;
  var _llvm_lifetime_start=env._llvm_lifetime_start;
  var _fflush=env._fflush;
  var tempFloat = 0.0;
// EMSCRIPTEN_START_FUNCS
function __ZN7WebCore11BitmapImage14startAnimationEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, i21 = 0, i22 = 0, d23 = +0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0, i29 = 0, d30 = +0, d31 = +0, d32 = +0, d33 = +0, d34 = +0, d35 = +0, i36 = 0, i37 = 0, i38 = 0, i39 = 0;
 i3 = i1 + 92 | 0;
 i4 = i1 + 100 | 0;
 i5 = i1 + 24 | 0;
 i6 = i1 + 96 | 0;
 i7 = i1 + 128 | 0;
 i8 = i1 + 132 | 0;
 i9 = i1 + 12 | 0;
 i10 = i1 | 0;
 i11 = i1 + 140 | 0;
 i12 = i1 + 136 | 0;
 i13 = i1 + 112 | 0;
 i14 = i1 + 56 | 0;
 i15 = i1 + 68 | 0;
 i16 = i1 + 60 | 0;
 i17 = i1 + 104 | 0;
 i18 = i2 ^ 1;
 L1 : while (1) {
  if ((HEAP32[i3 >> 2] | 0) != 0) {
   i19 = 103;
   break;
  }
  if ((HEAP32[i4 >> 2] | 0) == 0) {
   HEAP32[i6 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i5) | 0;
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i2 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
     i20 = HEAP32[i8 >> 2] | 0;
     if ((i20 | 0) == (i2 | 0)) {
      break;
     }
     HEAP32[i8 >> 2] = i2;
     i21 = HEAP32[i9 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 1](i21, i10, i2 - i20 | 0);
    }
   } while (0);
   i20 = HEAP32[i6 >> 2] | 0;
   HEAP32[i4 >> 2] = (i20 | 0) == -2 ? 2 : 1;
   i22 = i20;
  } else {
   i22 = HEAP32[i6 >> 2] | 0;
  }
  if ((i22 | 0) == -2) {
   i19 = 94;
   break;
  }
  i20 = HEAP8[i11] | 0;
  if ((i20 & 4) != 0) {
   i19 = 95;
   break;
  }
  if ((HEAP32[i9 >> 2] | 0) == 0) {
   i19 = 96;
   break;
  }
  if (i20 << 24 >> 24 >= 0) {
   i20 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
   HEAP32[i12 >> 2] = i20;
   if ((i20 | 0) == 0) {
    i19 = 100;
    break;
   }
   do {
    if ((HEAP32[i7 >> 2] | 0) == 0) {
     i20 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
     i2 = HEAP32[i8 >> 2] | 0;
     if ((i2 | 0) == (i20 | 0)) {
      break;
     }
     HEAP32[i8 >> 2] = i20;
     i21 = HEAP32[i9 >> 2] | 0;
     if ((i21 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i21 >> 2] | 0) + 8 >> 2] & 1](i21, i10, i20 - i2 | 0);
    }
   } while (0);
   HEAP8[i11] = HEAP8[i11] | -128;
  }
  if ((HEAP32[i12 >> 2] | 0) >>> 0 < 2 >>> 0) {
   i19 = 101;
   break;
  }
  d23 = +__ZN3WTF27monotonicallyIncreasingTimeEv();
  if (+HEAPF64[i13 >> 3] == +0) {
   HEAPF64[i13 >> 3] = d23;
  }
  i2 = (HEAP32[i14 >> 2] | 0) + 1 | 0;
  i20 = HEAP8[i11] | 0;
  do {
   if (i20 << 24 >> 24 < 0) {
    i24 = i20;
   } else {
    i21 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
    HEAP32[i12 >> 2] = i21;
    if ((i21 | 0) == 0) {
     i24 = HEAP8[i11] | 0;
     break;
    }
    do {
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      i21 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
      i25 = HEAP32[i8 >> 2] | 0;
      if ((i25 | 0) == (i21 | 0)) {
       break;
      }
      HEAP32[i8 >> 2] = i21;
      i26 = HEAP32[i9 >> 2] | 0;
      if ((i26 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] & 1](i26, i10, i21 - i25 | 0);
     }
    } while (0);
    i25 = HEAP8[i11] | -128;
    HEAP8[i11] = i25;
    i24 = i25;
   }
  } while (0);
  i20 = (i2 >>> 0) % ((HEAP32[i12 >> 2] | 0) >>> 0) & -1;
  if ((i24 & 8) == 0) {
   if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i20) | 0)) {
    i19 = 97;
    break;
   }
   if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i20 >>> 0) {
    i19 = 34;
    break;
   }
   if ((HEAP8[(HEAP32[i16 >> 2] | 0) + (i20 * 20 & -1) + 12 | 0] & 2) == 0) {
    i19 = 98;
    break;
   }
   i27 = HEAP8[i11] | 0;
  } else {
   i27 = i24;
  }
  do {
   if ((i27 & 8) == 0) {
    if ((HEAP32[i4 >> 2] | 0) == 0) {
     HEAP32[i6 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i5) | 0;
     do {
      if ((HEAP32[i7 >> 2] | 0) == 0) {
       i25 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
       i21 = HEAP32[i8 >> 2] | 0;
       if ((i21 | 0) == (i25 | 0)) {
        break;
       }
       HEAP32[i8 >> 2] = i25;
       i26 = HEAP32[i9 >> 2] | 0;
       if ((i26 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i26 >> 2] | 0) + 8 >> 2] & 1](i26, i10, i25 - i21 | 0);
      }
     } while (0);
     i21 = HEAP32[i6 >> 2] | 0;
     HEAP32[i4 >> 2] = (i21 | 0) == -2 ? 2 : 1;
     i28 = i21;
    } else {
     i28 = HEAP32[i6 >> 2] | 0;
    }
    if ((i28 | 0) != 0) {
     break;
    }
    i21 = HEAP32[i14 >> 2] | 0;
    do {
     if ((HEAP8[i11] | 0) >= 0) {
      i25 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
      HEAP32[i12 >> 2] = i25;
      if ((i25 | 0) == 0) {
       break;
      }
      do {
       if ((HEAP32[i7 >> 2] | 0) == 0) {
        i25 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
        i26 = HEAP32[i8 >> 2] | 0;
        if ((i26 | 0) == (i25 | 0)) {
         break;
        }
        HEAP32[i8 >> 2] = i25;
        i29 = HEAP32[i9 >> 2] | 0;
        if ((i29 | 0) == 0) {
         break;
        }
        FUNCTION_TABLE_viii[HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] & 1](i29, i10, i25 - i26 | 0);
       }
      } while (0);
      HEAP8[i11] = HEAP8[i11] | -128;
     }
    } while (0);
    if (i21 >>> 0 >= ((HEAP32[i12 >> 2] | 0) - 1 | 0) >>> 0) {
     i19 = 99;
     break L1;
    }
   }
  } while (0);
  i2 = HEAP32[i14 >> 2] | 0;
  if (__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i2) | 0) {
   if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    i19 = 56;
    break;
   }
   d30 = +HEAPF32[(HEAP32[i16 >> 2] | 0) + (i2 * 20 & -1) + 8 >> 2];
  } else {
   d30 = +0;
  }
  d31 = d30 + +HEAPF64[i13 >> 3];
  if (d23 - d31 > +300) {
   d32 = d23 + d30;
  } else {
   d32 = d31;
  }
  HEAPF64[i13 >> 3] = d32;
  do {
   if ((i20 | 0) == 0) {
    if (!((HEAP32[i17 >> 2] | 0) == 0 & d32 < d23)) {
     d33 = d32;
     break;
    }
    HEAPF64[i13 >> 3] = d23;
    d33 = d23;
   } else {
    d33 = d32;
   }
  } while (0);
  if (i18 | d23 < d33) {
   i19 = 64;
   break;
  }
  i2 = i20 + 1 | 0;
  do {
   if ((HEAP8[i11] | 0) >= 0) {
    i26 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
    HEAP32[i12 >> 2] = i26;
    if ((i26 | 0) == 0) {
     break;
    }
    do {
     if ((HEAP32[i7 >> 2] | 0) == 0) {
      i26 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
      i25 = HEAP32[i8 >> 2] | 0;
      if ((i25 | 0) == (i26 | 0)) {
       break;
      }
      HEAP32[i8 >> 2] = i26;
      i29 = HEAP32[i9 >> 2] | 0;
      if ((i29 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i29 >> 2] | 0) + 8 >> 2] & 1](i29, i10, i26 - i25 | 0);
     }
    } while (0);
    HEAP8[i11] = HEAP8[i11] | -128;
   }
  } while (0);
  i21 = (i2 >>> 0) % ((HEAP32[i12 >> 2] | 0) >>> 0) & -1;
  L89 : do {
   if (__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i21) | 0) {
    i25 = i21;
    i26 = i20;
    while (1) {
     if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i25 >>> 0) {
      i19 = 76;
      break L1;
     }
     if ((HEAP8[(HEAP32[i16 >> 2] | 0) + (i25 * 20 & -1) + 12 | 0] & 2) == 0) {
      break L89;
     }
     d31 = +HEAPF64[i13 >> 3];
     if (__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i26) | 0) {
      if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i26 >>> 0) {
       i19 = 80;
       break L1;
      }
      d34 = +HEAPF32[(HEAP32[i16 >> 2] | 0) + (i26 * 20 & -1) + 8 >> 2];
     } else {
      d34 = +0;
     }
     d35 = d31 + d34;
     if (d23 < d35) {
      break L89;
     }
     if (!(__ZN7WebCore11BitmapImage24internalAdvanceAnimationEb(i1, 1) | 0)) {
      i19 = 104;
      break L1;
     }
     HEAPF64[i13 >> 3] = d35;
     i29 = i25 + 1 | 0;
     do {
      if ((HEAP8[i11] | 0) >= 0) {
       i36 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
       HEAP32[i12 >> 2] = i36;
       if ((i36 | 0) == 0) {
        break;
       }
       do {
        if ((HEAP32[i7 >> 2] | 0) == 0) {
         i36 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
         i37 = HEAP32[i8 >> 2] | 0;
         if ((i37 | 0) == (i36 | 0)) {
          break;
         }
         HEAP32[i8 >> 2] = i36;
         i38 = HEAP32[i9 >> 2] | 0;
         if ((i38 | 0) == 0) {
          break;
         }
         FUNCTION_TABLE_viii[HEAP32[(HEAP32[i38 >> 2] | 0) + 8 >> 2] & 1](i38, i10, i36 - i37 | 0);
        }
       } while (0);
       HEAP8[i11] = HEAP8[i11] | -128;
      }
     } while (0);
     i37 = (i29 >>> 0) % ((HEAP32[i12 >> 2] | 0) >>> 0) & -1;
     if (__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i37) | 0) {
      i26 = i25;
      i25 = i37;
     } else {
      break;
     }
    }
   }
  } while (0);
  if (__ZN7WebCore11BitmapImage24internalAdvanceAnimationEb(i1, 0) | 0) {
   i18 = 1;
  } else {
   i19 = 105;
   break;
  }
 }
 if ((i19 | 0) == 56) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 64) {
  i18 = __ZN3WTF10fastMallocEj(56) | 0;
  i12 = i18;
  __ZN7WebCore9TimerBaseC2Ev(i18);
  HEAP32[i18 >> 2] = H_BASE + 16;
  HEAP32[i18 + 44 >> 2] = i1;
  i1 = i18 + 48 | 0;
  HEAP32[i1 >> 2] = F_BASE_vii + 4;
  HEAP32[i1 + 4 >> 2] = 0;
  i1 = HEAP32[i3 >> 2] | 0;
  HEAP32[i3 >> 2] = i12;
  if ((i1 | 0) == 0) {
   i39 = i12;
  } else {
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
   i39 = HEAP32[i3 >> 2] | 0;
  }
  d34 = +HEAPF64[i13 >> 3] - d23;
  __ZN7WebCore9TimerBase5startEdd(i39, d34 < +0 ? +0 : d34, +0);
  return;
 } else if ((i19 | 0) == 34) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 76) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 80) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 } else if ((i19 | 0) == 94) {
  return;
 } else if ((i19 | 0) == 95) {
  return;
 } else if ((i19 | 0) == 96) {
  return;
 } else if ((i19 | 0) == 97) {
  return;
 } else if ((i19 | 0) == 98) {
  return;
 } else if ((i19 | 0) == 99) {
  return;
 } else if ((i19 | 0) == 100) {
  return;
 } else if ((i19 | 0) == 101) {
  return;
 } else if ((i19 | 0) == 103) {
  return;
 } else if ((i19 | 0) == 104) {
  return;
 } else if ((i19 | 0) == 105) {
  return;
 }
}
function __ZN7WebCore11BitmapImage10cacheFrameEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0, i19 = 0, i20 = 0, d21 = +0, i22 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 24 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i6;
 i8 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i9 = i1 + 140 | 0;
 do {
  if ((HEAP8[i9] | 0) < 0) {
   i10 = i1 + 136 | 0;
  } else {
   i11 = i1 + 24 | 0;
   i12 = __ZNK7WebCore11ImageSource10frameCountEv(i11) | 0;
   i13 = i1 + 136 | 0;
   HEAP32[i13 >> 2] = i12;
   if ((i12 | 0) == 0) {
    i10 = i13;
    break;
   }
   do {
    if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
     i12 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i11) | 0;
     i14 = i1 + 132 | 0;
     i15 = HEAP32[i14 >> 2] | 0;
     if ((i15 | 0) == (i12 | 0)) {
      break;
     }
     HEAP32[i14 >> 2] = i12;
     i14 = HEAP32[i1 + 12 >> 2] | 0;
     if ((i14 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i14 >> 2] | 0) + 8 >> 2] & 1](i14, i1 | 0, i12 - i15 | 0);
    }
   } while (0);
   HEAP8[i9] = HEAP8[i9] | -128;
   i10 = i13;
  }
 } while (0);
 i11 = HEAP32[i10 >> 2] | 0;
 i10 = i1 + 60 | 0;
 i15 = i1 + 68 | 0;
 i12 = HEAP32[i15 >> 2] | 0;
 if (i12 >>> 0 < i11 >>> 0) {
  i14 = HEAP32[i1 + 64 >> 2] | 0;
  if (i14 >>> 0 < i11 >>> 0) {
   i16 = i14 + 1 + (i14 >>> 2) | 0;
   i14 = i16 >>> 0 > 16 >>> 0 ? i16 : 16;
   __ZN3WTF6VectorIN7WebCore9FrameDataELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i10, i14 >>> 0 > i11 >>> 0 ? i14 : i11);
  }
  i14 = HEAP32[i10 >> 2] | 0;
  do {
   if ((i14 | 0) != 0) {
    i16 = HEAP32[i15 >> 2] | 0;
    i17 = i14 + (i11 * 20 & -1) | 0;
    if ((i16 | 0) == (i11 | 0)) {
     break;
    }
    i18 = i14 + (i16 * 20 & -1) | 0;
    while (1) {
     HEAP32[i18 >> 2] = 0;
     __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
     HEAP32[i18 + 4 >> 2] = 1;
     HEAPF32[i18 + 8 >> 2] = +0;
     i16 = i18 + 12 | 0;
     HEAP8[i16] = HEAP8[i16] & -8 | 4;
     HEAP32[i18 + 16 >> 2] = 0;
     i18 = i18 + 20 | 0;
     if ((i18 | 0) == (i17 | 0)) {
      break;
     }
    }
   }
  } while (0);
  HEAP32[i15 >> 2] = i11;
  i19 = i11;
 } else {
  i19 = i12;
 }
 if (i19 >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i19 = i10 | 0;
 i10 = HEAP32[i19 >> 2] | 0;
 i12 = i1 + 24 | 0;
 __ZN7WebCore11ImageSource18createFrameAtIndexEjPf(i4, i12, i2, 0);
 i14 = i4 | 0;
 i4 = HEAP32[i14 >> 2] | 0;
 HEAP32[i14 >> 2] = 0;
 i17 = i10 + (i2 * 20 & -1) | 0;
 i10 = HEAP32[i17 >> 2] | 0;
 HEAP32[i17 >> 2] = i4;
 __ZN3WTF14derefIfNotNullI14_cairo_surfaceEEvPT_(i10);
 __ZN3WTF14derefIfNotNullI14_cairo_surfaceEEvPT_(HEAP32[i14 >> 2] | 0);
 do {
  if ((i11 | 0) == 1) {
   if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
   if ((HEAP32[(HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore11BitmapImage18checkForSolidColorEv(i1);
  }
 } while (0);
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = HEAP32[i19 >> 2] | 0;
 __ZNK7WebCore11ImageSource18orientationAtIndexEj(i5, i12, i2);
 HEAP32[i11 + (i2 * 20 & -1) + 4 >> 2] = HEAP32[i5 >> 2];
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i5 = (HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0;
 HEAP8[i5] = HEAP8[i5] | 1;
 i5 = __ZN7WebCore11ImageSource22frameIsCompleteAtIndexEj(i12, i2) | 0;
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i11 = (HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0;
 HEAP8[i11] = HEAP8[i11] & -3 | (i5 & 1) << 1;
 i5 = i1 + 100 | 0;
 if ((HEAP32[i5 >> 2] | 0) == 0) {
  i11 = i1 + 96 | 0;
  HEAP32[i11 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i12) | 0;
  do {
   if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
    i14 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i12) | 0;
    i10 = i1 + 132 | 0;
    i4 = HEAP32[i10 >> 2] | 0;
    if ((i4 | 0) == (i14 | 0)) {
     break;
    }
    HEAP32[i10 >> 2] = i14;
    i10 = HEAP32[i1 + 12 >> 2] | 0;
    if ((i10 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i10 >> 2] | 0) + 8 >> 2] & 1](i10, i1 | 0, i14 - i4 | 0);
   }
  } while (0);
  i4 = HEAP32[i11 >> 2] | 0;
  HEAP32[i5 >> 2] = (i4 | 0) == -2 ? 2 : 1;
  i20 = i4;
 } else {
  i20 = HEAP32[i1 + 96 >> 2] | 0;
 }
 do {
  if ((i20 | 0) != -2) {
   d21 = +__ZN7WebCore11ImageSource20frameDurationAtIndexEj(i12, i2);
   if ((HEAP32[i15 >> 2] | 0) >>> 0 > i2 >>> 0) {
    HEAPF32[(HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) + 8 >> 2] = d21;
    break;
   } else {
    __ZN3WTF15CrashOnOverflow10overflowedEv();
   }
  }
 } while (0);
 i20 = __ZN7WebCore11ImageSource20frameHasAlphaAtIndexEj(i12, i2) | 0;
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = (HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0;
 HEAP8[i4] = HEAP8[i4] & -5 | (i20 & 1) << 2;
 i20 = __ZNK7WebCore11ImageSource17frameBytesAtIndexEj(i12, i2) | 0;
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 HEAP32[(HEAP32[i19 >> 2] | 0) + (i2 * 20 & -1) + 16 >> 2] = i20;
 if ((i2 | 0) == 0) {
  i20 = i1 + 36 | 0;
  i4 = HEAP32[i20 + 4 >> 2] | 0;
  HEAP32[i6 >> 2] = HEAP32[i20 >> 2];
  HEAP32[i6 + 4 >> 2] = i4;
  i22 = 48;
 } else {
  HEAP32[i8 >> 2] = 0;
  HEAP32[i8 + 4 >> 2] = 1;
  __ZNK7WebCore11ImageSource16frameSizeAtIndexEjNS_27ImageOrientationDescriptionE(i7, i12, i2, i8);
  if ((HEAP32[i6 >> 2] | 0) == (HEAP32[i1 + 36 >> 2] | 0)) {
   i22 = 48;
  } else {
   i22 = 49;
  }
 }
 if ((i22 | 0) == 48) {
  if ((HEAP32[i7 + 4 >> 2] | 0) != (HEAP32[i1 + 40 >> 2] | 0)) {
   i22 = 49;
  }
 }
 if ((i22 | 0) == 49) {
  HEAP8[i9] = HEAP8[i9] & -65;
 }
 if ((HEAP32[i15 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i15 = HEAP32[i19 >> 2] | 0;
 if ((HEAP32[i15 + (i2 * 20 & -1) >> 2] | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 i19 = HEAP32[i15 + (i2 * 20 & -1) + 16 >> 2] | 0;
 i2 = i1 + 128 | 0;
 HEAP32[i2 >> 2] = (HEAP32[i2 >> 2] | 0) + i19;
 i2 = i1 + 132 | 0;
 i15 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i2 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i2 >> 2] | 0) + 8 >> 2] & 1](i2, i1 | 0, i19 - i15 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11BitmapImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 var i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, d17 = +0, d18 = +0, d19 = +0, i20 = 0, i21 = 0, i22 = 0, i23 = 0, i24 = 0, i25 = 0, i26 = 0, i27 = 0, i28 = 0;
 i10 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i11 = i10 | 0;
 i12 = i10 + 8 | 0;
 i13 = i10 + 16 | 0;
 i14 = i10 + 24 | 0;
 if (+HEAPF32[i3 + 8 >> 2] <= +0) {
  STACKTOP = i10;
  return;
 }
 if (+HEAPF32[i3 + 12 >> 2] <= +0) {
  STACKTOP = i10;
  return;
 }
 if (!(__ZNK7WebCore15GraphicsContext17drawLuminanceMaskEv(i2) | 0)) {
  __ZN7WebCore5Image11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE(i1 | 0, i2, i3, i4, i5, i6, i7, i8, i9);
  STACKTOP = i10;
  return;
 }
 i15 = i1 + 144 | 0;
 do {
  if ((HEAP32[i15 >> 2] | 0) == 0) {
   i16 = i3 + 8 | 0;
   d17 = +HEAPF32[i16 >> 2];
   d18 = +HEAPF32[i16 + 4 >> 2];
   d19 = +Math_ceil(d17);
   do {
    if (d19 < +2147483647) {
     if (d19 <= +-2147483648) {
      i20 = -2147483648;
      break;
     }
     i20 = ~~d19;
    } else {
     i20 = 2147483647;
    }
   } while (0);
   d19 = +Math_ceil(d18);
   do {
    if (d19 < +2147483647) {
     if (d19 <= +-2147483648) {
      i21 = -2147483648;
      break;
     }
     i21 = ~~d19;
    } else {
     i21 = 2147483647;
    }
   } while (0);
   HEAP32[i12 >> 2] = i20;
   HEAP32[i12 + 4 >> 2] = i21;
   HEAP8[i11] = 0;
   i16 = __ZN3WTF10fastMallocEj(144) | 0;
   i22 = i16;
   __ZN7WebCore11ImageBufferC1ERKNS_7IntSizeEfNS_10ColorSpaceENS_13RenderingModeERb(i22, i12, +1, 0, 0, i11);
   do {
    if ((HEAP8[i11] & 1) == 0) {
     if ((i16 | 0) == 0) {
      i23 = 0;
      break;
     }
     __ZN7WebCore11ImageBufferD1Ev(i22);
     __ZN3WTF8fastFreeEPv(i16);
     i23 = 0;
    } else {
     i23 = i22;
    }
   } while (0);
   i22 = i1 + 12 | 0;
   i16 = HEAP32[i22 >> 2] | 0;
   HEAP32[i22 >> 2] = 0;
   i24 = __ZNK7WebCore11ImageBuffer7contextEv(i23) | 0;
   HEAP32[i13 >> 2] = 0;
   HEAP32[i13 + 4 >> 2] = 1;
   __ZN7WebCore11BitmapImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1, i24, i3, i3, i6, i7, i9, i13);
   HEAP32[i22 >> 2] = i16;
   __ZN7WebCore11ImageBuffer22convertToLuminanceMaskEv(i23);
   __ZNK7WebCore11ImageBuffer9copyImageENS_16BackingStoreCopyENS_13ScaleBehaviorE(i14, i23, 1, 1);
   i24 = i14 | 0;
   i25 = HEAP32[i24 >> 2] | 0;
   HEAP32[i24 >> 2] = 0;
   i26 = HEAP32[i15 >> 2] | 0;
   HEAP32[i15 >> 2] = i25;
   do {
    if ((i26 | 0) != 0) {
     i25 = i26 + 4 | 0;
     i27 = i25 | 0;
     i28 = (HEAP32[i27 >> 2] | 0) - 1 | 0;
     if ((i28 | 0) != 0) {
      HEAP32[i27 >> 2] = i28;
      break;
     }
     i28 = i25 - 4 | 0;
     if ((i28 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i28 >> 2] | 0) + 4 >> 2] & 15](i28);
    }
   } while (0);
   i26 = HEAP32[i24 >> 2] | 0;
   do {
    if ((i26 | 0) != 0) {
     i28 = i26 + 4 | 0;
     i25 = i28 | 0;
     i27 = (HEAP32[i25 >> 2] | 0) - 1 | 0;
     if ((i27 | 0) != 0) {
      HEAP32[i25 >> 2] = i27;
      break;
     }
     i27 = i28 - 4 | 0;
     if ((i27 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_vi[HEAP32[(HEAP32[i27 >> 2] | 0) + 4 >> 2] & 15](i27);
    }
   } while (0);
   i26 = i1 + 16 | 0;
   i24 = HEAP32[i26 + 4 >> 2] | 0;
   i27 = (HEAP32[i15 >> 2] | 0) + 16 | 0;
   HEAP32[i27 >> 2] = HEAP32[i26 >> 2];
   HEAP32[i27 + 4 >> 2] = i24;
   HEAP32[i22 >> 2] = i16;
   if ((i23 | 0) == 0) {
    break;
   }
   __ZN7WebCore11ImageBufferD1Ev(i23);
   __ZN3WTF8fastFreeEPv(i23);
  }
 } while (0);
 __ZN7WebCore15GraphicsContext20setDrawLuminanceMaskEb(i2, 0);
 i23 = HEAP32[i15 >> 2] | 0;
 FUNCTION_TABLE_viiiiiiiii[HEAP32[(HEAP32[i23 >> 2] | 0) + 88 >> 2] & 3](i23, i2, i3, i4, i5, i6, i7, i8, i9);
 STACKTOP = i10;
 return;
}
function __ZN7WebCore11BitmapImage24internalAdvanceAnimationEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0, i15 = 0, i16 = 0, i17 = 0, i18 = 0;
 i3 = i1 + 92 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i4 >> 2] | 0) + 4 >> 2] & 15](i4);
 }
 do {
  if (!i2) {
   i4 = HEAP32[i1 + 12 >> 2] | 0;
   if (FUNCTION_TABLE_iii[HEAP32[(HEAP32[i4 >> 2] | 0) + 16 >> 2] & 7](i4, i1 | 0) | 0) {
    i5 = 0;
   } else {
    break;
   }
   return i5 | 0;
  }
 } while (0);
 i4 = i1 + 56 | 0;
 i3 = (HEAP32[i4 >> 2] | 0) + 1 | 0;
 HEAP32[i4 >> 2] = i3;
 i6 = i1 + 140 | 0;
 do {
  if ((HEAP8[i6] | 0) < 0) {
   i7 = i1 + 136 | 0;
  } else {
   i8 = i1 + 24 | 0;
   i9 = __ZNK7WebCore11ImageSource10frameCountEv(i8) | 0;
   i10 = i1 + 136 | 0;
   HEAP32[i10 >> 2] = i9;
   if ((i9 | 0) == 0) {
    i7 = i10;
    break;
   }
   do {
    if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
     i9 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i8) | 0;
     i11 = i1 + 132 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) == (i9 | 0)) {
      break;
     }
     HEAP32[i11 >> 2] = i9;
     i11 = HEAP32[i1 + 12 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 1](i11, i1 | 0, i9 - i12 | 0);
    }
   } while (0);
   HEAP8[i6] = HEAP8[i6] | -128;
   i7 = i10;
  }
 } while (0);
 L18 : do {
  if (i3 >>> 0 < (HEAP32[i7 >> 2] | 0) >>> 0) {
   i13 = 0;
   i14 = 1;
  } else {
   i8 = i1 + 104 | 0;
   HEAP32[i8 >> 2] = (HEAP32[i8 >> 2] | 0) + 1;
   i12 = i1 + 100 | 0;
   if ((HEAP32[i12 >> 2] | 0) >>> 0 < 2 >>> 0) {
    i9 = i1 + 24 | 0;
    i11 = i1 + 96 | 0;
    HEAP32[i11 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i9) | 0;
    do {
     if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
      i15 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i9) | 0;
      i16 = i1 + 132 | 0;
      i17 = HEAP32[i16 >> 2] | 0;
      if ((i17 | 0) == (i15 | 0)) {
       break;
      }
      HEAP32[i16 >> 2] = i15;
      i16 = HEAP32[i1 + 12 >> 2] | 0;
      if ((i16 | 0) == 0) {
       break;
      }
      FUNCTION_TABLE_viii[HEAP32[(HEAP32[i16 >> 2] | 0) + 8 >> 2] & 1](i16, i1 | 0, i15 - i17 | 0);
     }
    } while (0);
    HEAP32[i12 >> 2] = 2;
    i18 = i11;
   } else {
    i18 = i1 + 96 | 0;
   }
   i9 = HEAP32[i18 >> 2] | 0;
   do {
    if ((i9 | 0) != -1) {
     if ((HEAP32[i8 >> 2] | 0) <= (i9 | 0)) {
      break;
     }
     HEAP8[i6] = HEAP8[i6] | 4;
     HEAPF64[i1 + 112 >> 3] = +0;
     HEAP32[i4 >> 2] = (HEAP32[i4 >> 2] | 0) - 1;
     i13 = 0;
     i14 = 0;
     break L18;
    }
   } while (0);
   HEAP32[i4 >> 2] = 0;
   i13 = 1;
   i14 = 1;
  }
 } while (0);
 do {
  if ((HEAP32[i1 + 8 >> 2] | 0) != 0) {
   i4 = HEAP32[i1 + 68 >> 2] | 0;
   if ((i4 | 0) == 0) {
    break;
   }
   i6 = HEAP32[i1 + 60 >> 2] | 0;
   i18 = 0;
   i7 = 0;
   while (1) {
    i18 = (HEAP32[i6 + (i7 * 20 & -1) + 16 >> 2] | 0) + i18 | 0;
    i7 = i7 + 1 | 0;
    if (i7 >>> 0 >= i4 >>> 0) {
     break;
    }
   }
   if (i18 >>> 0 <= 5242880 >>> 0) {
    break;
   }
   __ZN7WebCore11BitmapImage18destroyDecodedDataEb(i1, i13);
  }
 } while (0);
 if (!(i14 ^ i2)) {
  i5 = i14;
  return i5 | 0;
 }
 i2 = HEAP32[i1 + 12 >> 2] | 0;
 FUNCTION_TABLE_vii[HEAP32[(HEAP32[i2 >> 2] | 0) + 20 >> 2] & 31](i2, i1 | 0);
 i5 = i14;
 return i5 | 0;
}
function __ZN7WebCore11BitmapImage11dataChangedEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0, i14 = 0;
 i3 = i1 + 68 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 0) {
  i5 = 0;
 } else {
  i6 = i1 + 60 | 0;
  i7 = 0;
  i8 = 0;
  i9 = i4;
  while (1) {
   i4 = HEAP32[i6 >> 2] | 0;
   if ((HEAP8[i4 + (i7 * 20 & -1) + 12 | 0] & 3) == 1) {
    i10 = HEAP32[i4 + (i7 * 20 & -1) + 16 >> 2] | 0;
    i11 = __ZN7WebCore9FrameData5clearEb(i4 + (i7 * 20 & -1) | 0, 1) | 0;
    i12 = (i11 ? i10 : 0) + i8 | 0;
    i13 = HEAP32[i3 >> 2] | 0;
   } else {
    i12 = i8;
    i13 = i9;
   }
   i10 = i7 + 1 | 0;
   if (i10 >>> 0 < i13 >>> 0) {
    i7 = i10;
    i8 = i12;
    i9 = i13;
   } else {
    i5 = i12;
    break;
   }
  }
 }
 i12 = i1 + 140 | 0;
 HEAP8[i12] = HEAP8[i12] & -4;
 __ZN7WebCore11BitmapImage22invalidatePlatformDataEv(i1);
 i13 = i1 + 128 | 0;
 HEAP32[i13 >> 2] = (HEAP32[i13 >> 2] | 0) - i5;
 do {
  if ((i5 | 0) != 0) {
   i9 = i1 + 132 | 0;
   i8 = (HEAP32[i9 >> 2] | 0) + i5 | 0;
   HEAP32[i9 >> 2] = 0;
   if ((i8 | 0) == 0) {
    break;
   }
   i9 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i9, i1 | 0, -i8 | 0);
  }
 } while (0);
 HEAP8[i12] = HEAP8[i12] & -9 | (i2 & 1) << 3;
 i5 = i1 + 24 | 0;
 i8 = i1 | 0;
 __ZN7WebCore11ImageSource7setDataEPNS_12SharedBufferEb(i5, HEAP32[i1 + 8 >> 2] | 0, i2);
 i2 = HEAP8[i12] | 0;
 HEAP8[i12] = i2 & 63 | 64;
 if ((i2 & 32) != 0) {
  i14 = 1;
  return i14 | 0;
 }
 i2 = ((__ZN7WebCore11ImageSource15isSizeAvailableEv(i5) | 0) & 1) << 5;
 HEAP8[i12] = HEAP8[i12] & -33 | i2;
 do {
  if ((HEAP32[i13 >> 2] | 0) == 0) {
   i2 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
   i9 = i1 + 132 | 0;
   i7 = HEAP32[i9 >> 2] | 0;
   if ((i7 | 0) == (i2 | 0)) {
    break;
   }
   HEAP32[i9 >> 2] = i2;
   i9 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i9, i8, i2 - i7 | 0);
  }
 } while (0);
 i14 = (HEAP8[i12] & 32) != 0;
 return i14 | 0;
}
function __ZN7WebCore11BitmapImage10canAnimateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i2 = i1 + 100 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = i1 + 24 | 0;
  i4 = i1 + 96 | 0;
  HEAP32[i4 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i3) | 0;
  do {
   if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
    i5 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i3) | 0;
    i6 = i1 + 132 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    HEAP32[i6 >> 2] = i5;
    i6 = HEAP32[i1 + 12 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6, i1 | 0, i5 - i7 | 0);
   }
  } while (0);
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i2 >> 2] = (i3 | 0) == -2 ? 2 : 1;
  i8 = i3;
 } else {
  i8 = HEAP32[i1 + 96 >> 2] | 0;
 }
 if ((i8 | 0) == -2) {
  i9 = 0;
  return i9 | 0;
 }
 i8 = i1 + 140 | 0;
 i3 = HEAP8[i8] | 0;
 if ((i3 & 4) != 0) {
  i9 = 0;
  return i9 | 0;
 }
 i2 = i1 + 12 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i9 = 0;
  return i9 | 0;
 }
 do {
  if (i3 << 24 >> 24 < 0) {
   i10 = i1 + 136 | 0;
  } else {
   i4 = i1 + 24 | 0;
   i7 = __ZNK7WebCore11ImageSource10frameCountEv(i4) | 0;
   i5 = i1 + 136 | 0;
   HEAP32[i5 >> 2] = i7;
   if ((i7 | 0) == 0) {
    i10 = i5;
    break;
   }
   do {
    if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
     i7 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i4) | 0;
     i6 = i1 + 132 | 0;
     i11 = HEAP32[i6 >> 2] | 0;
     if ((i11 | 0) == (i7 | 0)) {
      break;
     }
     HEAP32[i6 >> 2] = i7;
     i6 = HEAP32[i2 >> 2] | 0;
     if ((i6 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6, i1 | 0, i7 - i11 | 0);
    }
   } while (0);
   HEAP8[i8] = HEAP8[i8] | -128;
   i10 = i5;
  }
 } while (0);
 i9 = (HEAP32[i10 >> 2] | 0) >>> 0 > 1 >>> 0;
 return i9 | 0;
}
function __ZNK7WebCore11BitmapImage10updateSizeENS_27ImageOrientationDescriptionE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 32 | 0;
 i4 = i2;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = HEAP32[i4 + 4 >> 2];
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i3 + 16 | 0;
 i7 = i3 + 24 | 0;
 i8 = i1 + 140 | 0;
 if ((HEAP8[i8] & 48) != 32) {
  STACKTOP = i3;
  return;
 }
 i9 = i1 + 24 | 0;
 i10 = i2;
 i11 = HEAP32[i10 >> 2] | 0;
 i12 = HEAP32[i10 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = i11;
 HEAP32[i5 + 4 >> 2] = i12;
 __ZNK7WebCore11ImageSource4sizeENS_27ImageOrientationDescriptionE(i4, i9, i5);
 i5 = i1 + 36 | 0;
 i12 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i5 + 4 >> 2] = i12;
 i12 = HEAP32[i2 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = 1;
 HEAP32[i7 + 4 >> 2] = i12;
 __ZNK7WebCore11ImageSource4sizeENS_27ImageOrientationDescriptionE(i6, i9, i7);
 i7 = i1 + 44 | 0;
 i2 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i7 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i7 + 4 >> 2] = i2;
 i2 = i1 + 52 | 0;
 HEAP32[i2 >> 2] = HEAP32[i2 >> 2] & -32 | i12 & 15 | i11 << 4 & 16;
 HEAP8[i8] = HEAP8[i8] | 16;
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  STACKTOP = i3;
  return;
 }
 i8 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i9) | 0;
 i9 = i1 + 132 | 0;
 i11 = HEAP32[i9 >> 2] | 0;
 if ((i11 | 0) == (i8 | 0)) {
  STACKTOP = i3;
  return;
 }
 HEAP32[i9 >> 2] = i8;
 i9 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i9 | 0) == 0) {
  STACKTOP = i3;
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i9, i1 | 0, i8 - i11 | 0);
 STACKTOP = i3;
 return;
}
function __ZN7WebCore11BitmapImageD2Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore11BitmapImage22invalidatePlatformDataEv(i1);
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = HEAP32[i1 + 144 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = i1 + 68 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 60 | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i6 >> 2] | 0;
  i5 = i4 + (i2 * 20 & -1) | 0;
  i2 = i4;
  while (1) {
   __ZN7WebCore9FrameData5clearEb(i2, 1) | 0;
   __ZN3WTF14derefIfNotNullI14_cairo_surfaceEEvPT_(HEAP32[i2 >> 2] | 0);
   i2 = i2 + 20 | 0;
   if ((i2 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i1 + 72 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  i7 = i1 + 24 | 0;
  __ZN7WebCore11ImageSourceD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore5ImageD2Ev(i8);
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i7 = i1 + 24 | 0;
 __ZN7WebCore11ImageSourceD1Ev(i7);
 i8 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i8);
 return;
}
function __ZN7WebCore11BitmapImageD1Ev(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0;
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore11BitmapImage22invalidatePlatformDataEv(i1);
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = HEAP32[i1 + 144 >> 2] | 0;
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
   FUNCTION_TABLE_vi[HEAP32[(HEAP32[i6 >> 2] | 0) + 4 >> 2] & 15](i6);
  }
 } while (0);
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 i3 = i1 + 68 | 0;
 i2 = HEAP32[i3 >> 2] | 0;
 i6 = i1 + 60 | 0;
 if ((i2 | 0) != 0) {
  i4 = HEAP32[i6 >> 2] | 0;
  i5 = i4 + (i2 * 20 & -1) | 0;
  i2 = i4;
  while (1) {
   __ZN7WebCore9FrameData5clearEb(i2, 1) | 0;
   __ZN3WTF14derefIfNotNullI14_cairo_surfaceEEvPT_(HEAP32[i2 >> 2] | 0);
   i2 = i2 + 20 | 0;
   if ((i2 | 0) == (i5 | 0)) {
    break;
   }
  }
  HEAP32[i3 >> 2] = 0;
 }
 i3 = HEAP32[i6 >> 2] | 0;
 if ((i1 + 72 | 0) == (i3 | 0) | (i3 | 0) == 0) {
  i7 = i1 + 24 | 0;
  __ZN7WebCore11ImageSourceD1Ev(i7);
  i8 = i1 | 0;
  __ZN7WebCore5ImageD2Ev(i8);
  return;
 }
 HEAP32[i6 >> 2] = 0;
 HEAP32[i1 + 64 >> 2] = 0;
 __ZN3WTF8fastFreeEPv(i3);
 i7 = i1 + 24 | 0;
 __ZN7WebCore11ImageSourceD1Ev(i7);
 i8 = i1 | 0;
 __ZN7WebCore5ImageD2Ev(i8);
 return;
}
function __ZN7WebCore11BitmapImage18destroyDecodedDataEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0, i13 = 0;
 i3 = i1 + 68 | 0;
 i4 = HEAP32[(i2 ? i3 : i1 + 56 | 0) >> 2] | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 L1 : do {
  if (((i5 >>> 0 < i4 >>> 0 ? i5 : i4) | 0) == 0) {
   i6 = 0;
  } else {
   i7 = i1 + 60 | 0;
   i8 = 0;
   i9 = 0;
   i10 = i5;
   while (1) {
    if (i10 >>> 0 <= i8 >>> 0) {
     break;
    }
    i11 = HEAP32[i7 >> 2] | 0;
    i12 = HEAP32[i11 + (i8 * 20 & -1) + 16 >> 2] | 0;
    i13 = __ZN7WebCore9FrameData5clearEb(i11 + (i8 * 20 & -1) | 0, 0) | 0;
    i11 = (i13 ? i12 : 0) + i9 | 0;
    i12 = i8 + 1 | 0;
    i13 = HEAP32[i3 >> 2] | 0;
    if (i12 >>> 0 < (i13 >>> 0 < i4 >>> 0 ? i13 : i4) >>> 0) {
     i8 = i12;
     i9 = i11;
     i10 = i13;
    } else {
     i6 = i11;
     break L1;
    }
   }
   __ZN3WTF15CrashOnOverflow10overflowedEv();
  }
 } while (0);
 i3 = i1 + 140 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 __ZN7WebCore11BitmapImage22invalidatePlatformDataEv(i1);
 i5 = i1 + 128 | 0;
 HEAP32[i5 >> 2] = (HEAP32[i5 >> 2] | 0) - i6;
 do {
  if ((i6 | 0) != 0) {
   i5 = i1 + 132 | 0;
   i10 = (HEAP32[i5 >> 2] | 0) + i6 | 0;
   HEAP32[i5 >> 2] = 0;
   if ((i10 | 0) == 0) {
    break;
   }
   i5 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i5 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i5 >> 2] | 0) + 8 >> 2] & 1](i5, i1 | 0, -i10 | 0);
  }
 } while (0);
 __ZN7WebCore11ImageSource5clearEbjPNS_12SharedBufferEb(i1 + 24 | 0, i2, i4, HEAP32[i1 + 8 >> 2] | 0, (HEAP8[i3] & 8) != 0);
 return;
}
function __ZNK7WebCore11BitmapImage16currentFrameSizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0, i12 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 16 | 0;
 i4 = i3 | 0;
 i5 = i3 + 8 | 0;
 i6 = i5;
 i7 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i8 = HEAP32[i2 + 56 >> 2] | 0;
 do {
  if ((i8 | 0) != 0) {
   if ((HEAP8[i2 + 140 | 0] & 64) != 0) {
    break;
   }
   i9 = i2 + 24 | 0;
   HEAP32[i7 >> 2] = 0;
   HEAP32[i7 + 4 >> 2] = 1;
   __ZNK7WebCore11ImageSource16frameSizeAtIndexEjNS_27ImageOrientationDescriptionE(i6, i9, i8, i7);
   do {
    if ((HEAP32[i2 + 128 >> 2] | 0) == 0) {
     i10 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i9) | 0;
     i11 = i2 + 132 | 0;
     i12 = HEAP32[i11 >> 2] | 0;
     if ((i12 | 0) == (i10 | 0)) {
      break;
     }
     HEAP32[i11 >> 2] = i10;
     i11 = HEAP32[i2 + 12 >> 2] | 0;
     if ((i11 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i11 >> 2] | 0) + 8 >> 2] & 1](i11, i2 | 0, i10 - i12 | 0);
    }
   } while (0);
   i9 = i1;
   i12 = HEAP32[i5 + 4 >> 2] | 0;
   HEAP32[i9 >> 2] = HEAP32[i5 >> 2];
   HEAP32[i9 + 4 >> 2] = i12;
   STACKTOP = i3;
   return;
  }
 } while (0);
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 1;
 __ZNK7WebCore11BitmapImage10updateSizeENS_27ImageOrientationDescriptionE(i2, i4);
 i4 = i2 + 36 | 0;
 i2 = i1;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
 return;
}
function runPostSets() {
 HEAP32[H_BASE + 16 >> 2] = F_BASE_vi + 4;
 HEAP32[H_BASE + 20 >> 2] = F_BASE_vi + 2;
 HEAP32[H_BASE + 24 >> 2] = F_BASE_vi + 6;
 HEAP32[H_BASE + 28 >> 2] = F_BASE_did + 2;
 HEAP32[H_BASE + 48 >> 2] = F_BASE_vi + 14;
 HEAP32[H_BASE + 52 >> 2] = F_BASE_vi + 12;
 HEAP32[H_BASE + 56 >> 2] = F_BASE_ii + 10;
 HEAP32[H_BASE + 60 >> 2] = F_BASE_ii + 6;
 HEAP32[H_BASE + 64 >> 2] = F_BASE_ii + 14;
 HEAP32[H_BASE + 68 >> 2] = F_BASE_ii + 4;
 HEAP32[H_BASE + 72 >> 2] = F_BASE_ii + 16;
 HEAP32[H_BASE + 76 >> 2] = F_BASE_vii + 10;
 HEAP32[H_BASE + 80 >> 2] = F_BASE_ii + 18;
 HEAP32[H_BASE + 84 >> 2] = F_BASE_ii + 8;
 HEAP32[H_BASE + 88 >> 2] = F_BASE_ii + 2;
 HEAP32[H_BASE + 92 >> 2] = F_BASE_viiii + 2;
 HEAP32[H_BASE + 96 >> 2] = F_BASE_vii + 16;
 HEAP32[H_BASE + 100 >> 2] = F_BASE_iii + 2;
 HEAP32[H_BASE + 104 >> 2] = F_BASE_iii + 4;
 HEAP32[H_BASE + 108 >> 2] = F_BASE_vii + 12;
 HEAP32[H_BASE + 112 >> 2] = F_BASE_vii + 2;
 HEAP32[H_BASE + 116 >> 2] = F_BASE_vii + 18;
 HEAP32[H_BASE + 120 >> 2] = F_BASE_vi + 8;
 HEAP32[H_BASE + 124 >> 2] = F_BASE_vi + 10;
 HEAP32[H_BASE + 128 >> 2] = F_BASE_vii + 14;
 HEAP32[H_BASE + 132 >> 2] = F_BASE_vii + 8;
 HEAP32[H_BASE + 136 >> 2] = F_BASE_viiiiiiiii + 2;
 HEAP32[H_BASE + 140 >> 2] = F_BASE_viiiiiiii + 2;
 HEAP32[H_BASE + 144 >> 2] = F_BASE_ii + 12;
 HEAP32[H_BASE + 148 >> 2] = F_BASE_vii + 20;
}
function __ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i3 = i1 + 140 | 0;
 do {
  if ((HEAP8[i3] | 0) < 0) {
   i4 = i1 + 136 | 0;
  } else {
   i5 = i1 + 24 | 0;
   i6 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
   i7 = i1 + 136 | 0;
   HEAP32[i7 >> 2] = i6;
   if ((i6 | 0) == 0) {
    i4 = i7;
    break;
   }
   do {
    if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
     i6 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
     i8 = i1 + 132 | 0;
     i9 = HEAP32[i8 >> 2] | 0;
     if ((i9 | 0) == (i6 | 0)) {
      break;
     }
     HEAP32[i8 >> 2] = i6;
     i8 = HEAP32[i1 + 12 >> 2] | 0;
     if ((i8 | 0) == 0) {
      break;
     }
     FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i8, i1 | 0, i6 - i9 | 0);
    }
   } while (0);
   HEAP8[i3] = HEAP8[i3] | -128;
   i4 = i7;
  }
 } while (0);
 if ((HEAP32[i4 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i10 = 0;
  return i10 | 0;
 }
 do {
  if ((HEAP32[i1 + 68 >> 2] | 0) >>> 0 > i2 >>> 0) {
   if ((HEAP32[(HEAP32[i1 + 60 >> 2] | 0) + (i2 * 20 & -1) >> 2] | 0) == 0) {
    break;
   } else {
    i10 = 1;
   }
   return i10 | 0;
  }
 } while (0);
 __ZN7WebCore11BitmapImage10cacheFrameEj(i1, i2);
 i10 = 1;
 return i10 | 0;
}
function __ZN7WebCore11BitmapImage21mayFillWithSolidColorEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0;
 i2 = i1 + 140 | 0;
 i3 = HEAP8[i2] | 0;
 do {
  if ((i3 & 2) == 0) {
   do {
    if (i3 << 24 >> 24 < 0) {
     i4 = i1 + 136 | 0;
    } else {
     i5 = i1 + 24 | 0;
     i6 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
     i7 = i1 + 136 | 0;
     HEAP32[i7 >> 2] = i6;
     if ((i6 | 0) == 0) {
      i4 = i7;
      break;
     }
     do {
      if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
       i6 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
       i8 = i1 + 132 | 0;
       i9 = HEAP32[i8 >> 2] | 0;
       if ((i9 | 0) == (i6 | 0)) {
        break;
       }
       HEAP32[i8 >> 2] = i6;
       i8 = HEAP32[i1 + 12 >> 2] | 0;
       if ((i8 | 0) == 0) {
        break;
       }
       FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i8, i1 | 0, i6 - i9 | 0);
      }
     } while (0);
     HEAP8[i2] = HEAP8[i2] | -128;
     i4 = i7;
    }
   } while (0);
   if ((HEAP32[i4 >> 2] | 0) == 0) {
    break;
   }
   __ZN7WebCore11BitmapImage18checkForSolidColorEv(i1);
  }
 } while (0);
 if ((HEAP8[i2] & 1) == 0) {
  i10 = 0;
  return i10 | 0;
 }
 i10 = (HEAP32[i1 + 56 >> 2] | 0) == 0;
 return i10 | 0;
}
function __ZN7WebCore11BitmapImage15repetitionCountEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0, i10 = 0, i11 = 0;
 i3 = i1 + 100 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == 1) {
  i5 = 2;
 } else if ((i4 | 0) != 0) {
  i6 = i1 + 96 | 0;
  i7 = HEAP32[i6 >> 2] | 0;
  return i7 | 0;
 }
 do {
  if ((i5 | 0) == 2) {
   if (i2) {
    break;
   }
   i6 = i1 + 96 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   return i7 | 0;
  }
 } while (0);
 i5 = i1 + 24 | 0;
 i4 = i1 + 96 | 0;
 HEAP32[i4 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i5) | 0;
 do {
  if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
   i8 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
   i9 = i1 + 132 | 0;
   i10 = HEAP32[i9 >> 2] | 0;
   if ((i10 | 0) == (i8 | 0)) {
    break;
   }
   HEAP32[i9 >> 2] = i8;
   i9 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i9 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i9 >> 2] | 0) + 8 >> 2] & 1](i9, i1 | 0, i8 - i10 | 0);
  }
 } while (0);
 if (i2) {
  i11 = 2;
 } else {
  i11 = (HEAP32[i4 >> 2] | 0) == -2 ? 2 : 1;
 }
 HEAP32[i3 >> 2] = i11;
 i6 = i1 + 96 | 0;
 i7 = HEAP32[i6 >> 2] | 0;
 return i7 | 0;
}
function __ZN7WebCore11BitmapImage13shouldAnimateEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 100 | 0;
 if ((HEAP32[i2 >> 2] | 0) == 0) {
  i3 = i1 + 24 | 0;
  i4 = i1 + 96 | 0;
  HEAP32[i4 >> 2] = __ZN7WebCore11ImageSource15repetitionCountEv(i3) | 0;
  do {
   if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
    i5 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i3) | 0;
    i6 = i1 + 132 | 0;
    i7 = HEAP32[i6 >> 2] | 0;
    if ((i7 | 0) == (i5 | 0)) {
     break;
    }
    HEAP32[i6 >> 2] = i5;
    i6 = HEAP32[i1 + 12 >> 2] | 0;
    if ((i6 | 0) == 0) {
     break;
    }
    FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6, i1 | 0, i5 - i7 | 0);
   }
  } while (0);
  i3 = HEAP32[i4 >> 2] | 0;
  HEAP32[i2 >> 2] = (i3 | 0) == -2 ? 2 : 1;
  i8 = i3;
 } else {
  i8 = HEAP32[i1 + 96 >> 2] | 0;
 }
 if ((i8 | 0) == -2) {
  i9 = 0;
  return i9 | 0;
 }
 if ((HEAP8[i1 + 140 | 0] & 4) != 0) {
  i9 = 0;
  return i9 | 0;
 }
 i9 = (HEAP32[i1 + 12 >> 2] | 0) != 0;
 return i9 | 0;
}
function __ZN3WTF6VectorIN7WebCore9FrameDataELj1ENS_15CrashOnOverflowEE15reserveCapacityEj(i1, i2) {
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
 do {
  if (i2 >>> 0 > 1 >>> 0) {
   if (i2 >>> 0 > 214748364 >>> 0) {
    _WTFCrash();
   } else {
    i7 = __ZN3WTF18fastMallocGoodSizeEj(i2 * 20 & -1) | 0;
    HEAP32[i3 >> 2] = (i7 >>> 0) / 20 & -1;
    i8 = __ZN3WTF10fastMallocEj(i7) | 0;
    HEAP32[i4 >> 2] = i8;
    i9 = i8;
    i10 = i1 + 12 | 0;
    break;
   }
  } else {
   i8 = i1 + 12 | 0;
   HEAP32[i4 >> 2] = i8;
   HEAP32[i3 >> 2] = 1;
   i9 = i8;
   i10 = i8;
  }
 } while (0);
 i1 = i5;
 _memcpy(i9 | 0, i1 | 0, i6 * 20 & -1) | 0;
 if ((i10 | 0) == (i5 | 0) | (i5 | 0) == 0) {
  return;
 }
 if ((HEAP32[i4 >> 2] | 0) == (i5 | 0)) {
  HEAP32[i4 >> 2] = 0;
  HEAP32[i3 >> 2] = 0;
 }
 __ZN3WTF8fastFreeEPv(i1);
 return;
}
function __ZN7WebCore11BitmapImage10frameCountEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0, i8 = 0, i9 = 0;
 i2 = i1 + 140 | 0;
 if ((HEAP8[i2] | 0) < 0) {
  i3 = i1 + 136 | 0;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 }
 i5 = i1 + 24 | 0;
 i6 = __ZNK7WebCore11ImageSource10frameCountEv(i5) | 0;
 i7 = i1 + 136 | 0;
 HEAP32[i7 >> 2] = i6;
 if ((i6 | 0) == 0) {
  i3 = i7;
  i4 = HEAP32[i3 >> 2] | 0;
  return i4 | 0;
 }
 do {
  if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
   i6 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i5) | 0;
   i8 = i1 + 132 | 0;
   i9 = HEAP32[i8 >> 2] | 0;
   if ((i9 | 0) == (i6 | 0)) {
    break;
   }
   HEAP32[i8 >> 2] = i6;
   i8 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i8 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i8 >> 2] | 0) + 8 >> 2] & 1](i8, i1 | 0, i6 - i9 | 0);
  }
 } while (0);
 HEAP8[i2] = HEAP8[i2] | -128;
 i3 = i7;
 i4 = HEAP32[i3 >> 2] | 0;
 return i4 | 0;
}
function __ZN7WebCore11BitmapImage14resetAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = i1 + 92 | 0;
 i3 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i3 | 0) != 0) {
  FUNCTION_TABLE_vi[HEAP32[(HEAP32[i3 >> 2] | 0) + 4 >> 2] & 15](i3);
 }
 HEAP32[i1 + 56 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAPF64[i1 + 112 >> 3] = +0;
 i3 = i1 + 140 | 0;
 HEAP8[i3] = HEAP8[i3] & -5;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i2 = HEAP32[i1 + 60 >> 2] | 0;
 i4 = 0;
 i5 = 0;
 while (1) {
  i4 = (HEAP32[i2 + (i5 * 20 & -1) + 16 >> 2] | 0) + i4 | 0;
  i5 = i5 + 1 | 0;
  if (i5 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 if (i4 >>> 0 <= 5242880 >>> 0) {
  return;
 }
 __ZN7WebCore11BitmapImage18destroyDecodedDataEb(i1, 1);
 return;
}
function __ZN7WebCore11BitmapImage15isSizeAvailableEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0, i7 = 0;
 i2 = i1 + 140 | 0;
 if ((HEAP8[i2] & 32) != 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = i1 + 24 | 0;
 i5 = ((__ZN7WebCore11ImageSource15isSizeAvailableEv(i4) | 0) & 1) << 5;
 HEAP8[i2] = HEAP8[i2] & -33 | i5;
 do {
  if ((HEAP32[i1 + 128 >> 2] | 0) == 0) {
   i5 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i4) | 0;
   i6 = i1 + 132 | 0;
   i7 = HEAP32[i6 >> 2] | 0;
   if ((i7 | 0) == (i5 | 0)) {
    break;
   }
   HEAP32[i6 >> 2] = i5;
   i6 = HEAP32[i1 + 12 >> 2] | 0;
   if ((i6 | 0) == 0) {
    break;
   }
   FUNCTION_TABLE_viii[HEAP32[(HEAP32[i6 >> 2] | 0) + 8 >> 2] & 1](i6, i1 | 0, i5 - i7 | 0);
  }
 } while (0);
 i3 = (HEAP8[i2] & 32) != 0;
 return i3 | 0;
}
function __ZN7WebCore11BitmapImageC2EPNS_13ImageObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore11ImageSourceC1ENS0_11AlphaOptionENS0_26GammaAndColorProfileOptionE(i1 + 24 | 0, 0, 0);
 HEAP32[i1 + 56 >> 2] = 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 HEAP32[i1 + 60 >> 2] = i1 + 72;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = -2;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP8[i1 + 124 | 0] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP8[i1 + 140 | 0] = 64;
 HEAP32[i1 + 144 >> 2] = 0;
 return;
}
function __ZN7WebCore11BitmapImageC1EPNS_13ImageObserverE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore5ImageC2EPNS_13ImageObserverE(i1 | 0, i2);
 HEAP32[i1 >> 2] = H_BASE + 48;
 __ZN7WebCore11ImageSourceC1ENS0_11AlphaOptionENS0_26GammaAndColorProfileOptionE(i1 + 24 | 0, 0, 0);
 HEAP32[i1 + 56 >> 2] = 0;
 _memset(i1 + 36 | 0, 0, 16) | 0;
 HEAP32[i1 + 60 >> 2] = i1 + 72;
 HEAP32[i1 + 64 >> 2] = 1;
 HEAP32[i1 + 68 >> 2] = 0;
 HEAP32[i1 + 92 >> 2] = 0;
 HEAP32[i1 + 96 >> 2] = -2;
 HEAP32[i1 + 100 >> 2] = 0;
 HEAP32[i1 + 104 >> 2] = 0;
 HEAPF64[i1 + 112 >> 3] = +0;
 HEAP32[i1 + 120 >> 2] = 0;
 HEAP8[i1 + 124 | 0] = 0;
 HEAP32[i1 + 128 >> 2] = 0;
 HEAP32[i1 + 132 >> 2] = 0;
 HEAP32[i1 + 136 >> 2] = 0;
 HEAP8[i1 + 140 | 0] = 64;
 HEAP32[i1 + 144 >> 2] = 0;
 return;
}
function __ZNK7WebCore11BitmapImage25sizeRespectingOrientationENS_27ImageOrientationDescriptionE(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0, i5 = 0, i6 = 0;
 i4 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i5 = i3;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 HEAP32[i3 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i3 + 4 >> 2] = HEAP32[i5 + 4 >> 2];
 i5 = i4 | 0;
 i6 = i3;
 i3 = HEAP32[i6 + 4 >> 2] | 0;
 HEAP32[i5 >> 2] = HEAP32[i6 >> 2];
 HEAP32[i5 + 4 >> 2] = i3;
 __ZNK7WebCore11BitmapImage10updateSizeENS_27ImageOrientationDescriptionE(i2, i5);
 i5 = i2 + 44 | 0;
 i2 = i1;
 i1 = HEAP32[i5 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i5 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i4;
 return;
}
function __ZNK7WebCore11BitmapImage10getHotSpotERNS_8IntPointE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0;
 i3 = i1 + 24 | 0;
 i4 = __ZNK7WebCore11ImageSource10getHotSpotERNS_8IntPointE(i3, i2) | 0;
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  return i4 | 0;
 }
 i2 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i3) | 0;
 i3 = i1 + 132 | 0;
 i5 = HEAP32[i3 >> 2] | 0;
 if ((i5 | 0) == (i2 | 0)) {
  return i4 | 0;
 }
 HEAP32[i3 >> 2] = i2;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return i4 | 0;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3, i1 | 0, i2 - i5 | 0);
 return i4 | 0;
}
function __ZN7WebCore11BitmapImage26orientationForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 56 >> 2] | 0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i2, i3) | 0)) {
  HEAP32[i1 >> 2] = 1;
  return;
 }
 if ((HEAP32[i2 + 68 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[i2 + 60 >> 2] | 0;
 if ((HEAP8[i4 + (i3 * 20 & -1) + 12 | 0] & 1) == 0) {
  __ZNK7WebCore11ImageSource18orientationAtIndexEj(i1, i2 + 24 | 0, i3);
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i4 + (i3 * 20 & -1) + 4 >> 2];
  return;
 }
}
function __ZN7WebCore11BitmapImage24destroyMetadataAndNotifyEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = i1 + 140 | 0;
 HEAP8[i3] = HEAP8[i3] & -4;
 __ZN7WebCore11BitmapImage22invalidatePlatformDataEv(i1);
 i3 = i1 + 128 | 0;
 HEAP32[i3 >> 2] = (HEAP32[i3 >> 2] | 0) - i2;
 if ((i2 | 0) == 0) {
  return;
 }
 i3 = i1 + 132 | 0;
 i4 = (HEAP32[i3 >> 2] | 0) + i2 | 0;
 HEAP32[i3 >> 2] = 0;
 if ((i4 | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3, i1 | 0, -i4 | 0);
 return;
}
function __ZN7WebCore11BitmapImage23frameOrientationAtIndexEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i2, i3) | 0)) {
  HEAP32[i1 >> 2] = 1;
  return;
 }
 if ((HEAP32[i2 + 68 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[i2 + 60 >> 2] | 0;
 if ((HEAP8[i4 + (i3 * 20 & -1) + 12 | 0] & 1) == 0) {
  __ZNK7WebCore11ImageSource18orientationAtIndexEj(i1, i2 + 24 | 0, i3);
  return;
 } else {
  HEAP32[i1 >> 2] = HEAP32[i4 + (i3 * 20 & -1) + 4 >> 2];
  return;
 }
}
function __ZN7WebCore11BitmapImage26nativeImageForCurrentFrameEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = HEAP32[i2 + 56 >> 2] | 0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i2, i3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
  return;
 }
 if ((HEAP32[i2 + 68 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + (i3 * 20 & -1) >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(i4);
 return;
}
function __ZN7WebCore11BitmapImage29destroyDecodedDataIfNecessaryEb(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 if ((HEAP32[i1 + 8 >> 2] | 0) == 0) {
  return;
 }
 i3 = HEAP32[i1 + 68 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 i4 = HEAP32[i1 + 60 >> 2] | 0;
 i5 = 0;
 i6 = 0;
 while (1) {
  i5 = (HEAP32[i4 + (i6 * 20 & -1) + 16 >> 2] | 0) + i5 | 0;
  i6 = i6 + 1 | 0;
  if (i6 >>> 0 >= i3 >>> 0) {
   break;
  }
 }
 if (i5 >>> 0 <= 5242880 >>> 0) {
  return;
 }
 __ZN7WebCore11BitmapImage18destroyDecodedDataEb(i1, i2);
 return;
}
function viiiiiiii___ZN7WebCore11BitmapImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE__wrapper(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 __ZN7WebCore11BitmapImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE(i1 | 0, i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0);
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
function __ZN7WebCore11BitmapImage27currentFrameKnownToBeOpaqueEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0;
 i2 = HEAP32[i1 + 56 >> 2] | 0;
 if ((HEAP32[i1 + 68 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i3 = 1;
  i4 = i3 ^ 1;
  return i4 | 0;
 }
 i5 = HEAP8[(HEAP32[i1 + 60 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0] | 0;
 if ((i5 & 1) == 0) {
  i3 = __ZN7WebCore11ImageSource20frameHasAlphaAtIndexEj(i1 + 24 | 0, i2) | 0;
  i4 = i3 ^ 1;
  return i4 | 0;
 } else {
  i3 = (i5 & 4) != 0;
  i4 = i3 ^ 1;
  return i4 | 0;
 }
 return 0;
}
function __ZN7WebCore11BitmapImage12frameAtIndexEj(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 var i4 = 0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i2, i3) | 0)) {
  HEAP32[i1 >> 2] = 0;
  __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(0);
  return;
 }
 if ((HEAP32[i2 + 68 >> 2] | 0) >>> 0 <= i3 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
 }
 i4 = HEAP32[(HEAP32[i2 + 60 >> 2] | 0) + (i3 * 20 & -1) >> 2] | 0;
 HEAP32[i1 >> 2] = i4;
 __ZN3WTF12refIfNotNullI14_cairo_surfaceEEvPT_(i4);
 return;
}
function __ZNK7WebCore11BitmapImage19didDecodePropertiesEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 128 >> 2] | 0) != 0) {
  return;
 }
 i2 = __ZNK7WebCore11ImageSource33bytesDecodedToDeterminePropertiesEv(i1 + 24 | 0) | 0;
 i3 = i1 + 132 | 0;
 i4 = HEAP32[i3 >> 2] | 0;
 if ((i4 | 0) == (i2 | 0)) {
  return;
 }
 HEAP32[i3 >> 2] = i2;
 i3 = HEAP32[i1 + 12 >> 2] | 0;
 if ((i3 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_viii[HEAP32[(HEAP32[i3 >> 2] | 0) + 8 >> 2] & 1](i3, i1 | 0, i2 - i4 | 0);
 return;
}
function __ZN7WebCore11BitmapImage20frameHasAlphaAtIndexEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 if ((HEAP32[i1 + 68 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  i3 = 1;
  return i3 | 0;
 }
 i4 = HEAP8[(HEAP32[i1 + 60 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0] | 0;
 if ((i4 & 1) == 0) {
  i3 = __ZN7WebCore11ImageSource20frameHasAlphaAtIndexEj(i1 + 24 | 0, i2) | 0;
  return i3 | 0;
 } else {
  i3 = (i4 & 4) != 0;
  return i3 | 0;
 }
 return 0;
}
function __ZN7WebCore5TimerINS_11BitmapImageEE5firedEv(i1) {
 i1 = i1 | 0;
 var i2 = 0, i3 = 0, i4 = 0, i5 = 0, i6 = 0;
 i2 = i1 + 48 | 0;
 i3 = (HEAP32[i1 + 44 >> 2] | 0) + (HEAP32[i2 + 4 >> 2] | 0) | 0;
 i4 = i3;
 i5 = HEAP32[i2 >> 2] | 0;
 if ((i5 & 1 | 0) == 0) {
  i6 = i5;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 } else {
  i6 = HEAP32[(HEAP32[i3 >> 2] | 0) + (i5 - 1) >> 2] | 0;
  FUNCTION_TABLE_vii[i6 & 31](i4, i1);
  return;
 }
}
function __ZNK7WebCore11BitmapImage4sizeEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0, i4 = 0;
 i3 = STACKTOP;
 STACKTOP = STACKTOP + 8 | 0;
 i4 = i3 | 0;
 HEAP32[i4 >> 2] = 0;
 HEAP32[i4 + 4 >> 2] = 1;
 __ZNK7WebCore11BitmapImage10updateSizeENS_27ImageOrientationDescriptionE(i2, i4);
 i4 = i2 + 36 | 0;
 i2 = i1;
 i1 = HEAP32[i4 + 4 >> 2] | 0;
 HEAP32[i2 >> 2] = HEAP32[i4 >> 2];
 HEAP32[i2 + 4 >> 2] = i1;
 STACKTOP = i3;
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
function __ZN7WebCore11BitmapImage22frameIsCompleteAtIndexEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i2) | 0)) {
  i3 = 0;
  return i3 | 0;
 }
 if ((HEAP32[i1 + 68 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return 0;
 }
 i3 = (HEAP8[(HEAP32[i1 + 60 >> 2] | 0) + (i2 * 20 & -1) + 12 | 0] & 2) != 0;
 return i3 | 0;
}
function __ZN7WebCore11BitmapImage20frameDurationAtIndexEj(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var d3 = +0;
 if (!(__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj(i1, i2) | 0)) {
  d3 = +0;
  return +d3;
 }
 if ((HEAP32[i1 + 68 >> 2] | 0) >>> 0 <= i2 >>> 0) {
  __ZN3WTF15CrashOnOverflow10overflowedEv();
  return +0;
 }
 d3 = +HEAPF32[(HEAP32[i1 + 60 >> 2] | 0) + (i2 * 20 & -1) + 8 >> 2];
 return +d3;
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
 FUNCTION_TABLE_viiiiiiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0, i6 | 0, i7 | 0, i8 | 0, i9 | 0);
}
function viiii___ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE__wrapper(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 __ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE(i1 | 0, i2 | 0, i3 | 0, i4 | 0);
}
function __ZN7WebCore11BitmapImage13stopAnimationEv(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = i1 + 92 | 0;
 i1 = HEAP32[i2 >> 2] | 0;
 HEAP32[i2 >> 2] = 0;
 if ((i1 | 0) == 0) {
  return;
 }
 FUNCTION_TABLE_vi[HEAP32[(HEAP32[i1 >> 2] | 0) + 4 >> 2] & 15](i1);
 return;
}
function __ZNK7WebCore11BitmapImage10solidColorEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 var i3 = 0;
 i3 = i2 + 120 | 0;
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
function b7(i1, i2, i3, i4, i5, i6, i7, i8, i9) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 i9 = i9 | 0;
 abort(7);
}
function __ZN7WebCore11BitmapImage16advanceAnimationEPNS_5TimerIS0_EE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZN7WebCore11BitmapImage24internalAdvanceAnimationEb(i1, 0) | 0;
 return;
}
function dynCall_viiii(i1, i2, i3, i4, i5) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 FUNCTION_TABLE_viiii[i1 & 3](i2 | 0, i3 | 0, i4 | 0, i5 | 0);
}
function __ZNK7WebCore11BitmapImage17filenameExtensionEv(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 __ZNK7WebCore11ImageSource17filenameExtensionEv(i1, i2 + 24 | 0);
 return;
}
function b0(i1, i2, i3, i4, i5, i6, i7, i8) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 i5 = i5 | 0;
 i6 = i6 | 0;
 i7 = i7 | 0;
 i8 = i8 | 0;
 abort(0);
}
function dynCall_viii(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 FUNCTION_TABLE_viii[i1 & 1](i2 | 0, i3 | 0, i4 | 0);
}
function stackAlloc(i1) {
 i1 = i1 | 0;
 var i2 = 0;
 i2 = STACKTOP;
 STACKTOP = STACKTOP + i1 | 0;
 STACKTOP = STACKTOP + 7 & -8;
 return i2 | 0;
}
function __ZN7WebCore5TimerINS_11BitmapImageEED0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1 | 0);
 return;
}
function dynCall_iii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 return FUNCTION_TABLE_iii[i1 & 7](i2 | 0, i3 | 0) | 0;
}
function __ZN7WebCore11BitmapImageD0Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore11BitmapImageD2Ev(i1);
 __ZN3WTF8fastFreeEPv(i1);
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
function setThrew(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 if ((__THREW__ | 0) == 0) {
  __THREW__ = i1;
  threwValue = i2;
 }
}
function dynCall_did(i1, i2, d3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 d3 = +d3;
 return +FUNCTION_TABLE_did[i1 & 3](i2 | 0, +d3);
}
function dynCall_vii(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 FUNCTION_TABLE_vii[i1 & 31](i2 | 0, i3 | 0);
}
function __ZN7WebCore5TimerINS_11BitmapImageEED1Ev(i1) {
 i1 = i1 | 0;
 __ZN7WebCore9TimerBaseD2Ev(i1);
 return;
}
function __ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return;
}
function dynCall_ii(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 return FUNCTION_TABLE_ii[i1 & 31](i2 | 0) | 0;
}
function __ZNK7WebCore9TimerBase15alignedFireTimeEd(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 return +d2;
}
function b9(i1, i2, i3, i4) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 i4 = i4 | 0;
 abort(9);
}
function dynCall_vi(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 FUNCTION_TABLE_vi[i1 & 15](i2 | 0);
}
function __ZNK7WebCore11BitmapImage23hasSingleSecurityOriginEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore11BitmapImage13isBitmapImageEv(i1) {
 i1 = i1 | 0;
 return 1;
}
function __ZNK7WebCore5Image18isPDFDocumentImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image17usesContainerSizeEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image17hasRelativeHeightEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function __ZNK7WebCore5Image16hasRelativeWidthEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b5(i1, i2, i3) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 i3 = i3 | 0;
 abort(5);
}
function __ZNK7WebCore5Image10isSVGImageEv(i1) {
 i1 = i1 | 0;
 return 0;
}
function b8(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(8);
 return 0;
}
function b1(i1, d2) {
 i1 = i1 | 0;
 d2 = +d2;
 abort(1);
 return +0;
}
function dynCall_v(i1) {
 i1 = i1 | 0;
 FUNCTION_TABLE_v[i1 & 1]();
}
function __ZN3WTF15CrashOnOverflow10overflowedEv() {
 _WTFCrash();
}
function b3(i1, i2) {
 i1 = i1 | 0;
 i2 = i2 | 0;
 abort(3);
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
function b4(i1) {
 i1 = i1 | 0;
 abort(4);
 return 0;
}
function stackSave() {
 return STACKTOP | 0;
}
function b2(i1) {
 i1 = i1 | 0;
 abort(2);
}
function b6() {
 abort(6);
}
// EMSCRIPTEN_END_FUNCS
  var FUNCTION_TABLE_viiiiiiii = [b0,b0,viiiiiiii___ZN7WebCore11BitmapImage4drawEPNS_15GraphicsContextERKNS_9FloatRectES5_NS_10ColorSpaceENS_17CompositeOperatorENS_9BlendModeENS_27ImageOrientationDescriptionE__wrapper,b0];
  var FUNCTION_TABLE_did = [b1,b1,__ZNK7WebCore9TimerBase15alignedFireTimeEd,b1];
  var FUNCTION_TABLE_vi = [b2,b2,__ZN7WebCore5TimerINS_11BitmapImageEED0Ev,b2,__ZN7WebCore5TimerINS_11BitmapImageEED1Ev,b2,__ZN7WebCore5TimerINS_11BitmapImageEE5firedEv,b2,__ZN7WebCore11BitmapImage13stopAnimationEv,b2,__ZN7WebCore11BitmapImage14resetAnimationEv,b2,__ZN7WebCore11BitmapImageD0Ev,b2,__ZN7WebCore11BitmapImageD2Ev,b2];
  var FUNCTION_TABLE_vii = [b3,b3,__ZN7WebCore11BitmapImage18destroyDecodedDataEb,b3,__ZN7WebCore11BitmapImage16advanceAnimationEPNS_5TimerIS0_EE,b3,__ZN7WebCore11BitmapImageC2EPNS_13ImageObserverE,b3,__ZN7WebCore11BitmapImage26orientationForCurrentFrameEv,b3,__ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE,b3,__ZNK7WebCore11BitmapImage17filenameExtensionEv,b3,__ZN7WebCore11BitmapImage26nativeImageForCurrentFrameEv,b3,__ZNK7WebCore11BitmapImage4sizeEv,b3,__ZN7WebCore11BitmapImage14startAnimationEb,b3,__ZNK7WebCore11BitmapImage10solidColorEv,b3,b3,b3,b3,b3,b3,b3,b3
  ,b3,b3,b3];
  var FUNCTION_TABLE_ii = [b4,b4,__ZNK7WebCore5Image17hasRelativeHeightEv,b4,__ZN7WebCore11BitmapImage27currentFrameKnownToBeOpaqueEv,b4,__ZNK7WebCore11BitmapImage13isBitmapImageEv,b4,__ZNK7WebCore5Image16hasRelativeWidthEv,b4,__ZNK7WebCore5Image10isSVGImageEv,b4,__ZN7WebCore11BitmapImage21mayFillWithSolidColorEv,b4,__ZNK7WebCore5Image18isPDFDocumentImageEv,b4,__ZNK7WebCore11BitmapImage23hasSingleSecurityOriginEv,b4,__ZNK7WebCore5Image17usesContainerSizeEv,b4,b4,b4,b4,b4,b4,b4,b4,b4,b4
  ,b4,b4,b4];
  var FUNCTION_TABLE_viii = [b5,b5];
  var FUNCTION_TABLE_v = [b6,b6];
  var FUNCTION_TABLE_viiiiiiiii = [b7,b7,__ZN7WebCore11BitmapImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE,b7];
  var FUNCTION_TABLE_iii = [b8,b8,__ZNK7WebCore11BitmapImage10getHotSpotERNS_8IntPointE,b8,__ZN7WebCore11BitmapImage11dataChangedEb,b8,b8,b8];
  var FUNCTION_TABLE_viiii = [b9,b9,viiii___ZN7WebCore5Image26computeIntrinsicDimensionsERNS_6LengthES2_RNS_9FloatSizeE__wrapper,b9];
  return { _strlen: _strlen, _memcpy: _memcpy, _memset: _memset, runPostSets: runPostSets, stackAlloc: stackAlloc, stackSave: stackSave, stackRestore: stackRestore, setThrew: setThrew, setTempRet0: setTempRet0, setTempRet1: setTempRet1, setTempRet2: setTempRet2, setTempRet3: setTempRet3, setTempRet4: setTempRet4, setTempRet5: setTempRet5, setTempRet6: setTempRet6, setTempRet7: setTempRet7, setTempRet8: setTempRet8, setTempRet9: setTempRet9, dynCall_viiiiiiii: dynCall_viiiiiiii, dynCall_did: dynCall_did, dynCall_vi: dynCall_vi, dynCall_vii: dynCall_vii, dynCall_ii: dynCall_ii, dynCall_viii: dynCall_viii, dynCall_v: dynCall_v, dynCall_viiiiiiiii: dynCall_viiiiiiiii, dynCall_iii: dynCall_iii, dynCall_viiii: dynCall_viiii };
})
// EMSCRIPTEN_END_ASM
({ "Math": Math, "Int8Array": Int8Array, "Int16Array": Int16Array, "Int32Array": Int32Array, "Uint8Array": Uint8Array, "Uint16Array": Uint16Array, "Uint32Array": Uint32Array, "Float32Array": Float32Array, "Float64Array": Float64Array }, { "abort": abort, "assert": assert, "asmPrintInt": asmPrintInt, "asmPrintFloat": asmPrintFloat, "min": Math_min, "invoke_viiiiiiii": invoke_viiiiiiii, "invoke_did": invoke_did, "invoke_vi": invoke_vi, "invoke_vii": invoke_vii, "invoke_ii": invoke_ii, "invoke_viii": invoke_viii, "invoke_v": invoke_v, "invoke_viiiiiiiii": invoke_viiiiiiiii, "invoke_iii": invoke_iii, "invoke_viiii": invoke_viiii, "_llvm_lifetime_end": _llvm_lifetime_end, "_ceilf": _ceilf, "___setErrNo": ___setErrNo, "_malloc": _malloc, "_free": _free, "_llvm_lifetime_start": _llvm_lifetime_start, "_fflush": _fflush, "STACKTOP": STACKTOP, "STACK_MAX": STACK_MAX, "tempDoublePtr": tempDoublePtr, "ABORT": ABORT, "NaN": NaN, "Infinity": Infinity }, buffer);
var _strlen = Module["_strlen"] = asm["_strlen"];
var _memcpy = Module["_memcpy"] = asm["_memcpy"];
var _memset = Module["_memset"] = asm["_memset"];
var runPostSets = Module["runPostSets"] = asm["runPostSets"];
var dynCall_viiiiiiii = Module["dynCall_viiiiiiii"] = asm["dynCall_viiiiiiii"];
var dynCall_did = Module["dynCall_did"] = asm["dynCall_did"];
var dynCall_vi = Module["dynCall_vi"] = asm["dynCall_vi"];
var dynCall_vii = Module["dynCall_vii"] = asm["dynCall_vii"];
var dynCall_ii = Module["dynCall_ii"] = asm["dynCall_ii"];
var dynCall_viii = Module["dynCall_viii"] = asm["dynCall_viii"];
var dynCall_v = Module["dynCall_v"] = asm["dynCall_v"];
var dynCall_viiiiiiiii = Module["dynCall_viiiiiiiii"] = asm["dynCall_viiiiiiiii"];
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
// EMSCRIPTEN_GENERATED_FUNCTIONS: ["__ZN7WebCore11BitmapImage20frameDurationAtIndexEj","_strlen","__ZNK7WebCore5Image17hasRelativeHeightEv","__ZN7WebCore11BitmapImage18destroyDecodedDataEb","__ZNK7WebCore11BitmapImage10getHotSpotERNS_8IntPointE","__ZNK7WebCore11BitmapImage10updateSizeENS_27ImageOrientationDescriptionE","__ZN7WebCore11BitmapImage27currentFrameKnownToBeOpaqueEv","__ZN7WebCore11BitmapImage24internalAdvanceAnimationEb","__ZNK7WebCore11BitmapImage25sizeRespectingOrientationENS_27ImageOrientationDescriptionE","__ZN7WebCore11BitmapImage15repetitionCountEb","__ZN7WebCore11BitmapImage16advanceAnimationEPNS_5TimerIS0_EE","_memcpy","__ZNK7WebCore9TimerBase15alignedFireTimeEd","__ZNK7WebCore5Image16hasRelativeWidthEv","__ZN7WebCore5Image16setContainerSizeERKNS_7IntSizeE","__ZN7WebCore11BitmapImage22frameIsCompleteAtIndexEj","__ZN7WebCore11BitmapImage26orientationForCurrentFrameEv","__ZN7WebCore11BitmapImage29destroyDecodedDataIfNecessaryEb","__ZN7WebCore11BitmapImage24destroyMetadataAndNotifyEj","__ZN7WebCore5TimerINS_11BitmapImageEED0Ev","__ZN7WebCore11BitmapImage13shouldAnimateEv","__ZN7WebCore5TimerINS_11BitmapImageEED1Ev","_memset","__ZN7WebCore11BitmapImageC2EPNS_13ImageObserverE","__ZNK7WebCore11BitmapImage10solidColorEv","__ZN7WebCore11BitmapImage20frameHasAlphaAtIndexEj","__ZNK7WebCore11BitmapImage17filenameExtensionEv","__ZNK7WebCore5Image10isSVGImageEv","__ZN3WTF15CrashOnOverflow10overflowedEv","__ZN7WebCore11BitmapImage26nativeImageForCurrentFrameEv","__ZN7WebCore11BitmapImage10canAnimateEv","__ZNK7WebCore11BitmapImage4sizeEv","__ZN7WebCore11BitmapImage12frameAtIndexEj","__ZN7WebCore11BitmapImage21mayFillWithSolidColorEv","__ZN3WTF6VectorIN7WebCore9FrameDataELj1ENS_15CrashOnOverflowEE15reserveCapacityEj","__ZN7WebCore11BitmapImage10frameCountEv","__ZN7WebCore11BitmapImage23frameOrientationAtIndexEj","__ZNK7WebCore11BitmapImage13isBitmapImageEv","__ZN7WebCore5TimerINS_11BitmapImageEE5firedEv","__ZNK7WebCore5Image18isPDFDocumentImageEv","__ZN7WebCore11BitmapImage15isSizeAvailableEv","__ZN7WebCore11BitmapImage10cacheFrameEj","__ZN7WebCore11BitmapImage13stopAnimationEv","__ZNK7WebCore11BitmapImage23hasSingleSecurityOriginEv","__ZNK7WebCore5Image17usesContainerSizeEv","__ZNK7WebCore11BitmapImage19didDecodePropertiesEv","__ZN7WebCore11BitmapImage11dataChangedEb","__ZN7WebCore11BitmapImage14startAnimationEb","__ZN7WebCore11BitmapImage11drawPatternEPNS_15GraphicsContextERKNS_9FloatRectERKNS_15AffineTransformERKNS_10FloatPointENS_10ColorSpaceENS_17CompositeOperatorES5_NS_9BlendModeE","__ZN7WebCore11BitmapImage14resetAnimationEv","__ZNK7WebCore11BitmapImage16currentFrameSizeEv","__ZN7WebCore11BitmapImageD0Ev","__ZN7WebCore11BitmapImageD2Ev","__ZN7WebCore11BitmapImage19ensureFrameIsCachedEj"]
